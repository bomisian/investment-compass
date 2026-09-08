// 자동 생성 파일 - 중요 뉴스의 기업분석 반영
const EVENT_ANALYSIS_DATA = {
  "schemaVersion": 1,
  "generatedAt": 1788910788.0619273,
  "records": {
    "MSFT": {
      "ticker": "MSFT",
      "updatedAt": 1788910788.0619273,
      "dataAsOf": 1788870630,
      "signal": "중립·확인 대기",
      "netScore": -1.33,
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
          "eventId": "bbcb8449ddc554720b18",
          "headline": "Microsoft, Azure 매출을 연간 1000억 달러 규모로 돌파하고 AI 부문 재편성",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788870630,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3fc754d5688f1e120ace874e0cd06cc46d4993535d5119108ef0106a30c1398f",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "7155a2db9d9ccbb51a8c",
          "headline": "Amazon, Alphabet 및 Microsoft: 두 개는 구매하고 하나는 판매합니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1788601680,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b49a12a2280f98ea7df336d9d898d9719782308d1835256ed6df4f4f8eab6bd6",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "20058ef05e4a5636d589",
          "headline": "ChronoScale은 50MW 규모의 Microsoft AI 배포를 계획하고 있다고 밝혔습니다. CHRN이 주주를 희석시키지 않고 건설 자금을 조달할 수 있습니까?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1788567034,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7d2f2ebf4d76116c9839a16c7d0ac9322a0abf855fddaa7bd0d6c0eb4392f6f0",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "e4814d4b7067690f2446",
          "headline": "Michael Burry, Nvidia-Hugging Face Deal에 ‘No-Brainer’ — Wall Street, OpenAI 및 Anthropic에 대한 새로운 위협",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788498512,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=37e95a2f72d12f992573a72602ea44ee802e7f1ce1899ae99d18a53de9c3a4ba",
          "factorChanges": {
            "businessRisk": -2,
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
    "GOOGL": {
      "ticker": "GOOGL",
      "updatedAt": 1788910788.0619273,
      "dataAsOf": 1788836516,
      "signal": "주의 강화",
      "netScore": -3.36,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.05,
          "level": "우호적"
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
          "score": -4.2,
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
          "eventId": "b769097e86b1493c9352",
          "headline": "Broadcom: 최근 수익으로 내가 가장 신뢰하지 않는 AI 주식인 이유 확인",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788836516,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d912c2264f2a145e9e1ed97bbaf3ee0df9cd5a1d268ef8a14b6eab04e4674957",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "20fb349b72177dd607ba",
          "headline": "Meta의 180억 달러 규모의 청소년 안전 거래로 TikTok과 YouTube Next에 압력이 가해짐",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788743773,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=13dfd6f695cca4f6776492e69d2af6375a4836c13cfcb6621751508bc0dde196",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "7155a2db9d9ccbb51a8c",
          "headline": "Amazon, Alphabet 및 Microsoft: 두 개는 구매하고 하나는 판매합니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1788601680,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b49a12a2280f98ea7df336d9d898d9719782308d1835256ed6df4f4f8eab6bd6",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "24f6d74f0c8a1317c2e5",
          "headline": "월스트리트는 알파벳의 아킬레스건을 잘못 읽고 있다",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788537013,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ac887af7eb7a3fd8e798a3753a83e814fe4bb6c28da503d727af97aed919033d",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "e4814d4b7067690f2446",
          "headline": "Michael Burry, Nvidia-Hugging Face Deal에 ‘No-Brainer’ — Wall Street, OpenAI 및 Anthropic에 대한 새로운 위협",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788498512,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=37e95a2f72d12f992573a72602ea44ee802e7f1ce1899ae99d18a53de9c3a4ba",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d065a9a372ac9eb0f080",
          "headline": "Google은 광고 기술 도구를 유지할 권리를 획득했습니다. 그들은 줄어들고 있는 하나의 비즈니스에 살고 있습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788480721,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a4f9c7399d26a285830d0f12e83fd19af9b433576f19536e973f7064cbe3618e",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "078a5a075718ef00ef7e",
          "headline": "PG&E, Google, Rewiring America 캘리포니아에서 VPP 출시",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1788460010,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7d419d4a24ae6c640c2e84078661540fd24e42dce22d1c50c67772e829fe79b2",
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
    "AMZN": {
      "ticker": "AMZN",
      "updatedAt": 1788910788.0619273,
      "dataAsOf": 1788888648,
      "signal": "우호적 변화",
      "netScore": 8.22,
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
          "score": -0.7,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": -2.45,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": 2.98,
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
          "eventId": "de94cb545df45aea48bc",
          "headline": "Qualcomm 주가 급등 - Amazon, 주요 AI 칩 파트너십 체결",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788888648,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=16b2f3f6aea6b463a60eb8e65bffc1c8ee54422bdac9d88303f0d2d486f5d59d",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "9e06a49b053b6bed148c",
          "headline": "맞춤형 데이터 센터 칩을 위한 Qualcomm과 Amazon 잉크 거래",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788886848,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9fd5e4e9fc139bb54e10af0d361566e09041813ac5afe8c7ce82f9aa3d63eb90",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "674fec75a4ca81db94e5",
          "headline": "퀄컴, 아마존웹서비스 데이터센터에 맞춤형 AI 칩 공급",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788886662,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=dc7dc2c15897374819abc48efec0352649d625b86499c39c03f2a38fba03693e",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "4277d3ea8c3c1a5d2291",
          "headline": "주요 정오 기사: GE Aerospace, 통합 정밀 제품 인수; Qualcomm, Amazon에 주식 영장 발행",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1788882330,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2ae8a832851f7b2f5438b8a6af3fee6b2b8bd035b6bc97e978a449770023779d",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "df194de52b4acf772502",
          "headline": "클라우드 자본 지출에서 현금으로: AWS는 이런 방식으로 승리하고 Alphabet은 또 다른 방식으로 승리합니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788881640,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c588f34a8e9f80e88f5cae6e0e74a4bb8c20c640cbe9bdb650c8a2924df9469b",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "eb178d0b621fe527f313",
          "headline": "Qualcomm, Amazon AI 칩 파트너십으로 도약",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788880380,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f4d2d18d165594320a11034b32010b0bd7d1f7aa9fbc6f8c5261005518c65480",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "40452814a24be6f5d240",
          "headline": "Qualcomm, 다중 세대 Amazon AI 실리콘 거래에서 5% 상승; Broadcom은 상승세를 보이고 있으며 Amazon은 정체 상태를 유지하고 있습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788877343,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=65eb1aa56be457032e93b7e401babcef0586e7deac32cb826c1db78707470133",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "3c2af4d028efca123411",
          "headline": "Peter Thiel의 펀드에서 가장 많이 보고되는 포지션은 Amazon입니다. 10년 전 아마존에 투자한 10,000달러는 현재 약 66,000달러의 가치가 있습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788836041,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=921bd963771d9c7aa2714825079323daba809eac55ed70aed48f52818fbb79f7",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "ecfb6dd4ce84f59d8b3f",
          "headline": "Amazon의 250개 항공편 항공 네트워크, 치명적인 마이애미 조사에 직면",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788818055,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cbe636292b848bcc91df4ac0b6d43fab2fef6052c2bfab704374c33c1e108bb5",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "4260051bc716a49e385f",
          "headline": "오라클의 AI 수익 스토리는 개선되고 있지만 현금 흐름 테스트는 여전히 남아 있습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1788814671,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5e773ec4ceea579eb794d87157eff97c7a5c9423d465351b2f245a5601462dac",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "클라우드 CAPEX 경쟁과 가격·마진 압력 비교 필요"
        },
        {
          "eventId": "2b8860ed2405d4e2443e",
          "headline": "Anthropic은 AWS에 1,000억 달러 이상을 투자했으며 투자 설명서를 통해 이 계약에 대한 자세한 내용을 밝힐 수 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788734581,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cd58e97c5c5b76bf4fccf8f4b286e1ba6f9c1d350d3666c39ad2a8a1c31456ab",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "2bfe26d2b3f63acde48d",
          "headline": "Amazon을 최고가에서 10% 할인된 가격으로 10,000달러에 구매한다면 10년 후 가치는 다음과 같습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1788616200,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=179ce7ea60cb1e3a0b52854075f1d613a6a13b79a04020e734c882047162f692",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 19,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "META": {
      "ticker": "META",
      "updatedAt": 1788910788.0619273,
      "dataAsOf": 1788887012,
      "signal": "주의 강화",
      "netScore": -8.19,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.35,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": -1.92,
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
          "eventId": "5311c97673dbbe4b3080",
          "headline": "T, AMZN 주식에 초점 — AT&T, Amazon Leo, 기업용 위성 광대역 확장을 위해 파트너십 체결",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1788887012,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d6fc5e09f0abc2e9a89105bf9a273cf915a182bb2146a3e24e640c1485f1b38c",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ccb5c941c14f53db1b2d",
          "headline": "애플도 메타처럼 170억 달러 규모의 아동 안전 합의에 직면할 수 있을까?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788879903,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f691e846b0364299e58b2bef4d5350616ec4ddb792183d747bf71ffcf1a6757f",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "d5d36e4157fcf37df82d",
          "headline": "소셜을 넘어서: Meta는 컴퓨팅의 미래를 구매하고 있으므로 저는 그것을 구매합니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788878594,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a9194cd3ff43d8a90631914d48ac8fa05beba20f0ee18f9ba4ee12f0a7cf7e8f",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "4144ce284b01fef9a47b",
          "headline": "9월의 주요 M&A 거래: Nvidia, Dominion Energy, Nextera Energy, Vertiv In Focus",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788847964,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6a31e4a15734c0e8da38044ba7d74e57ee28ad6addb508517255acbb3c67228c",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "20617ef6104fc2f1f14d",
          "headline": "Palantir: Bears Cannot Trap AI Leader Of The Meta-Compute Layer (등급 업그레이드)",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788829124,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c727a76a1377499e16b64f5c9cb5516a51ff89c7dc365bd7d55b39a80f0bf906",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "20fb349b72177dd607ba",
          "headline": "Meta의 180억 달러 규모의 청소년 안전 거래로 TikTok과 YouTube Next에 압력이 가해짐",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788743773,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=13dfd6f695cca4f6776492e69d2af6375a4836c13cfcb6621751508bc0dde196",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "66797f47a5e1b0d990a5",
          "headline": "Jim Cramer는 Meta Platforms, Inc.(NASDAQ: META)의 대규모 법원 승리가 아슬아슬한 상황이었다고 말했습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788565700,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3fd8ebcf47ac803c19af2b5be8c23376d35a75ee74d7197f3ac7342fb9b3069a",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "01b66b7a762fcfab504a",
          "headline": "메타의 사업은 무사히 소송을 면할 예정",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788541040,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3370adbd69f184aa8474a0ff9b0b2f08f368644fb5fafebafda49f9db5634e26",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "821ae153d31f7b81a385",
          "headline": "100억 달러가 넘는 Meta의 데이터 센터가 텍사스의 반발에 직면",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788471160,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=67b6a9b58cd46cb668be6a63262d97688e2efae6b8b0d56a95a2e83181d41ac1",
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
    "AAPL": {
      "ticker": "AAPL",
      "updatedAt": 1788910788.0619273,
      "dataAsOf": 1788884340,
      "signal": "주의 강화",
      "netScore": -10,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.87,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": -2.62,
          "level": "주의"
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
          "eventId": "e08d294166d607e6fa00",
          "headline": "Apple, 새로운 CEO Ternus가 무대에 오르면서 최초의 폴더블 iPhone 공개 예정",
          "eventLabel": "공급망 문제",
          "publishedAt": 1788884340,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a8c4fc81b70a48ca8c1bc29495bc1502f0dde9d52e28e524b625d99bb1bfa022",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "가격 전가 시 마진 방어, 판매량·교체주기 둔화 위험"
        },
        {
          "eventId": "e3a8361107d278f73b6d",
          "headline": "AI가 휴대폰에서 메모리를 전환하고 Micron이 안정을 유지하고 Apple이 미끄러짐에 따라 SK 하이닉스는 7% 상승",
          "eventLabel": "공급망 문제",
          "publishedAt": 1788883086,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8c4ce9a3fb432f08151ecdb249e4b10cb962fcba637c6cfcd28a7b41e81530e9",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ccb5c941c14f53db1b2d",
          "headline": "애플도 메타처럼 170억 달러 규모의 아동 안전 합의에 직면할 수 있을까?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788879903,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f691e846b0364299e58b2bef4d5350616ec4ddb792183d747bf71ffcf1a6757f",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "3e75613086ca18ec677b",
          "headline": "Apple: 하이퍼스케일러 수요로 인해 부정적인 영향을 받음",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788850156,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c14a58686e15a43a89f9c93a4a57cfba6b6afc67aacdde4325d8da19235dc6cc",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "820081e6789412d1565c",
          "headline": "Apple의 540억 달러 규모 iPhone 엔진, AI 메모리 압박에 성공",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788818172,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1cc30c007c58834929bcda9920921d05fef698377528637e031ed829abbd720f",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "25705c72e076e67971e7",
          "headline": "팀 쿡(Tim Cook)은 15년 동안 총 2,720%의 수익률을 달성했습니다. John Ternus가 Apple 투자자를 위해 동일한 작업을 수행할 수 있는지 여부는 다음과 같습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1788818100,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cd2a41f6926a62bd9c5b662619f4716a71fce858072a7778c6705182f3b13b4c",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "가격 전가 시 마진 방어, 판매량·교체주기 둔화 위험"
        },
        {
          "eventId": "c0fe715751d9d592be5d",
          "headline": "Apple은 대부분의 투자자들이 간과했던 조치를 취했습니다. 이것이 내가 계속 주식을 사는 이유이다",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1788792695,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=159511197735622223a1ac598a177a9d78adfa4368e7ee238e0652b15dcff7aa",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "ccbd6fbf419bb01004a5",
          "headline": "이번 주 시장에서 기대할 사항: 새로운 인플레이션 데이터; Apple의 가을 출시 이벤트 및 Oracle 수익",
          "eventLabel": "공급망 문제",
          "publishedAt": 1788696000,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a876fa71b6bc53ea066d0e2325f8fbe65043d92090aa2308363b37b4080eeba9",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "가격 전가 시 마진 방어, 판매량·교체주기 둔화 위험"
        },
        {
          "eventId": "1fd39215a412312fcfaa",
          "headline": "새로운 CEO 존 터너스(John Ternus)가 이끄는 Apple의 첫 번째 iPhone이 9월 9일 출시됩니다. 이제 주식을 매입할 때가 되었는지 알아보겠습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1788633300,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c686985f2d1ee36acd57cf68fc1ec368cbd7560286e77ee01a4f48c461c0159b",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "가격 전가 시 마진 방어, 판매량·교체주기 둔화 위험"
        },
        {
          "eventId": "8d8419343b08e02023cd",
          "headline": "Apple(AAPL), 더 넓은 유럽 지분을 대상으로 20억 파운드 규모의 새로운 영국 ATT 소송 제기",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788627934,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=05c91b0250bd447583cf3e54e7a07aa669542e0140205e7d3070c6698ccefebf",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "9531ad704c5fa19fe096",
          "headline": "모건스탠리는 애플의 폴더블 아이폰이 12월 분기 매출 140억 달러를 창출할 수 있을 것으로 예상했다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1788613800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c22111359976c8182e714c1ffd434881519f76bc0943a0ddbf6303b437e103cc",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "가격 전가 시 마진 방어, 판매량·교체주기 둔화 위험"
        },
        {
          "eventId": "285f88d9a19ce5a20677",
          "headline": "애플의 주가는 325달러입니다. 과매수인가요, 아니면 재평가 시작인가요?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1788536529,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b32f31cda5ccb21e4c683de47dd2f1d5cd1a9372cfe11498c296494463a4ce2a",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 14,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "TSLA": {
      "ticker": "TSLA",
      "updatedAt": 1788910788.0619273,
      "dataAsOf": 1788848488,
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
          "score": -5,
          "level": "주의"
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
          "eventId": "bd5f35ecf60ff20643b4",
          "headline": "Tesla: Elon은 Robotaxi Moonshot을 향해 가고 있습니다",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788848488,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3f6ec1b9d6f274f5f3fd77b2010b11c4b1c8b8f4cc95e56aaa7ba70f620d8ee7",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "36ccb543e0375b1a3bf8",
          "headline": "Cybercab은 Tesla를 변화시킬 수 있지만 규제 위험이 있습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788808199,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=29979bee5c9df66107ec80dbb66f50ab6b5cd16919071ce9853ceaa7328fff42",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "4b7c0e83a4149ec33334",
          "headline": "Tesla는 이번에는 다르다고 말합니다. 월스트리트는 그것을 믿을지 여부에 대해 분열되어 있습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1788795806,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b00df3789445700e3808c68150d32d8ac532b32ccdddb90f87bb0d2a86857517",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "ecf752c89ea4b806ecf3",
          "headline": "Elon Musk는 자신의 새 주조소에서 가스 터빈을 18개월 더 빠르게 온라인에 구축할 수 있다고 말합니다. 이 \"심오한 게임 체인저\"가 SpaceX와 Tesla에 의미하는 바는 다음과 같습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1788659400,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a7ddfa76d72c5e3c87b19596fd4877ebbb7605cf8cac1b7c04c396777e01024d",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "65f0ea36084495f3b4b8",
          "headline": "S&P 500, 다우지수는 폭발적 일자리 보고로 하락 마감, 팬들은 인상 우려를 표명하고 칩 제조업체의 강세는 Nasdaq에 도움이 됨 —TSLA, NFLX, BE, NVDA 집중",
          "eventLabel": "실적 발표",
          "publishedAt": 1788560329,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=edf096e6792c207b0d0c8ecea67ebbe33d0294943b3f3486d6969b08c6574e5d",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "5aa8c64a82238a1c5f36",
          "headline": "출시 파티부터 연방 조사까지: 24시간 만에 Tesla의 Cybercab에 문제가 발생한 이유",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788558601,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c60d480af4ed2a78af0d7e2e7e913ee06adfc9a13b5ce57fc4547f9c586cd7fe",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "f37db3b8820b1f85c7e5",
          "headline": "Cybercab 출시 및 NHTSA 조사 이후 Tesla 주가 6% 하락",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788544864,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=31e9f51a3ec1e967982c711e69a611a4ca1374414f0a2dc8bc2e6f37ec2ec0e2",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "ae4bd9ec467cc872e7a7",
          "headline": "NVDA 주가 2개월 최고치 이상 기록 - 분석가는 129억 달러 규모의 허깅 페이스 거래를 '전략적으로 가치가 있다'고 평가",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1788540809,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=991659cd50feea78c009ce9f25450b91263b2dc74a3392925895154aaa267d61",
          "factorChanges": {
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "8337cbc7fc2ff63bc499",
          "headline": "SCHG는 Tesla, Meta, Palantir를 합친 것보다 더 많은 Apple을 소유하고 있습니다. 이것이 성장 투자자들이 뒤처지는 이유입니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788536261,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2da3af33aa4555aededcd0604efcbd3c46d26c9dc1ff162141907f83c6a5bf52",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "b9919c73a92d6264545d",
          "headline": "Tesla가 핸들이 없는 자동차를 출시한 후 연방 규제 당국이 조사를 시작했습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788535260,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=52dc025bf393dbfa59260916be6506155ef425b970c55b65c75266d963797876",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "e17b01bface06627ef63",
          "headline": "AVGO 주식의 27% 매도는 신호를 보내고 있습니다. 그러나 Morningstar는 2030년까지 AI 수요가 더욱 강해질 것으로 보고 있습니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1788523139,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4a8fbd2b6b50e0aeae3666440614ae5119a3951fabd952c23d344a0423924d38",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "e4814d4b7067690f2446",
          "headline": "Michael Burry, Nvidia-Hugging Face Deal에 ‘No-Brainer’ — Wall Street, OpenAI 및 Anthropic에 대한 새로운 위협",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788498512,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=37e95a2f72d12f992573a72602ea44ee802e7f1ce1899ae99d18a53de9c3a4ba",
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
    "ORCL": {
      "ticker": "ORCL",
      "updatedAt": 1788910788.0619273,
      "dataAsOf": 1788879000,
      "signal": "중립·확인 대기",
      "netScore": -0.91,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 2.45,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 3.5,
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
          "score": -3.15,
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
          "eventId": "8a3b8ade6d157ddf79e0",
          "headline": "예측: Oracle의 6,380억 달러 규모의 클라우드 인프라 백로그로 인해 2028년까지 최고의 성과를 내는 AI 주식 중 하나가 될 수 있습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1788879000,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a3f18ac4217d4214106f0c69c3142a5b9af4fa3a91bee3d1f76446009d4271e3",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "OCI 서비스 범위 확대 가능성, 매출화 시점 불확실"
        },
        {
          "eventId": "8262825b785fe4ee46f5",
          "headline": "다우, S&P 500, 나스닥 선물은 이란 분쟁으로 석유가 100달러를 향해 되돌아가면서 하락: TSLA, NVDA, ORCL, INTC, BIDU, BABA, BE In Focus",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1788856295,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d5a94a395e24ff1e3dacea1d66ee21aef24b3c94faaaa133f9831ebf2832e600",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "86d1ed9927bfcfaca691",
          "headline": "EU 규제 당국, 수익 창출에 앞서 Oracle에 조기 경고 전달",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788825780,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=19dc8295b04bf48b42f134c0f986fab0dea8eb65fca42f0247be4ad82506a893",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "4260051bc716a49e385f",
          "headline": "오라클의 AI 수익 스토리는 개선되고 있지만 현금 흐름 테스트는 여전히 남아 있습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1788814671,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5e773ec4ceea579eb794d87157eff97c7a5c9423d465351b2f245a5601462dac",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 매출 기회와 FCF·부채·신용 부담이 동시에 존재"
        },
        {
          "eventId": "b519b25a5c4aa593de71",
          "headline": "인플레이션 데이터, 오라클 수익, 에너지 공급 경색: 이번 주에 주목해야 할 사항",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788699869,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a58caa30d9b5afdc47c26cfd32b5cd3a522c9e5ea5a1c9234bba7b0794c025f7",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "ccbd6fbf419bb01004a5",
          "headline": "이번 주 시장에서 기대할 사항: 새로운 인플레이션 데이터; Apple의 가을 출시 이벤트 및 Oracle 수익",
          "eventLabel": "공급망 문제",
          "publishedAt": 1788696000,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a876fa71b6bc53ea066d0e2325f8fbe65043d92090aa2308363b37b4080eeba9",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "20058ef05e4a5636d589",
          "headline": "ChronoScale은 50MW 규모의 Microsoft AI 배포를 계획하고 있다고 밝혔습니다. CHRN이 주주를 희석시키지 않고 건설 자금을 조달할 수 있습니까?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1788567034,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7d2f2ebf4d76116c9839a16c7d0ac9322a0abf855fddaa7bd0d6c0eb4392f6f0",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "클라우드 수요와 자본 부담 동시 확대"
        },
        {
          "eventId": "65f0ea36084495f3b4b8",
          "headline": "S&P 500, 다우지수는 폭발적 일자리 보고로 하락 마감, 팬들은 인상 우려를 표명하고 칩 제조업체의 강세는 Nasdaq에 도움이 됨 —TSLA, NFLX, BE, NVDA 집중",
          "eventLabel": "실적 발표",
          "publishedAt": 1788560329,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=edf096e6792c207b0d0c8ecea67ebbe33d0294943b3f3486d6969b08c6574e5d",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "6d07dc02661b93d6a1b5",
          "headline": "AI 인프라 구축을 위한 자금 조달을 위한 오라클의 연속 해고로 인해 실행 위험이 발생한다고 RBC가 밝혔습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1788542377,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d5dc831e4308213cc183335a68d41b9fc8c651b723cc01d46af7f36108576eed",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 매출 기회와 FCF·부채·신용 부담이 동시에 존재"
        },
        {
          "eventId": "f7cf48f3dff4e76f521a",
          "headline": "새로운 HPE 장비 거래에 대한 ORCL 재고 급증: 소매업체가 1분기 보고서를 앞두고 강세를 보임",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1788497674,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=57de79d3f9a8b3c8aa18f7c2d92cb60e671c33a148e77a9094c3706d671d534b",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "b1d7f34226d92a8c05bb",
          "headline": "Palantir 주식은 PwC AI 거래 확장 후 한 달 만에 최고의 날을 기록하며 Michael Burry의 약세 베팅을 무시했습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1788491749,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d91c654bfd19dedaa097db31f9bc7cb6790ab7b80072442a4369329de1c7e0c3",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "7d47ebbf47f40eeb974b",
          "headline": "오라클 (ORCL) 주식은 분석가가 AI와 Capex에 분할됨에 따라 공정 가치 트림을 얻습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1788491332,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6561b66fd220b940c3e3107cd3bf0886ba13370be85b444bdf7186936450a743",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 매출 기회와 FCF·부채·신용 부담이 동시에 존재"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 12,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "CRM": {
      "ticker": "CRM",
      "updatedAt": 1788910788.0619273,
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
      "updatedAt": 1788910788.0619273,
      "dataAsOf": 1788878296,
      "signal": "주의 강화",
      "netScore": -3.71,
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
          "score": -3.67,
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
          "eventId": "35f40de9c05b45d75001",
          "headline": "AI 컴퓨팅 전쟁이 가열되면서 Nebius가 Palantir의 비밀 무기가 됨",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1788878296,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=dd1d46ca6508d17b431cd83989035e855281db3a57b64b6a6c2816cf9b1196e7",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "20617ef6104fc2f1f14d",
          "headline": "Palantir: Bears Cannot Trap AI Leader Of The Meta-Compute Layer (등급 업그레이드)",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788829124,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c727a76a1377499e16b64f5c9cb5516a51ff89c7dc365bd7d55b39a80f0bf906",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "0f154036fc741067c037",
          "headline": "Michael Burry는 Palantir의 책이 소프트웨어 회사의 책보다는 컨설턴트의 책과 더 비슷하다고 말합니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788666361,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5714bc35e234c84b1b652560d57698764d9188429e146be68b146a681ea2b14e",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "ce2f204dad370a3aa984",
          "headline": "AI의 다음 승자는? Snowflake, CrowdStrike 및 Palantir에 대한 투자자 베팅",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788627609,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8f8a6b5f4133111819463fc584550cb7e590786996b6b8367da79bc9fb2e2bd6",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "05e6ad8bd35770cf2cc8",
          "headline": "Globant가 Salesforce AI Pod를 출시함에 따라 Palantir는 확장된 PwC Alliance에서 7.7% 상승했습니다. 어떤 서비스 모델이 더 잘 확장됩니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788611918,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e5a2f5b5946be969785ae2300e9a842b5f392385024dc2a85726f501ff38b8e1",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "c6eb28448873372e603f",
          "headline": "Palantir 억만장자 Peter Thiel은 IPO 이후 200,000% 상승한 이 AI 주식의 주식을 방금 구입했으며 이것이 그의 최고 위치입니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788603901,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7851080814ece1f2459e7b7035f5dc8898c0f342737d0ffa07834b75c6555933",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "8337cbc7fc2ff63bc499",
          "headline": "SCHG는 Tesla, Meta, Palantir를 합친 것보다 더 많은 Apple을 소유하고 있습니다. 이것이 성장 투자자들이 뒤처지는 이유입니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788536261,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2da3af33aa4555aededcd0604efcbd3c46d26c9dc1ff162141907f83c6a5bf52",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "c6fb4293e7f004e8c532",
          "headline": "팔란티르 억만장자 피터 틸, 10년 만에 AI 주식 560% 증가 (힌트: 엔비디아 아님)",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788516240,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2a903dd5b68bf809c45e58ea947afa4c20289169754c7dcc9819730ac46ff338",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "b1d7f34226d92a8c05bb",
          "headline": "Palantir 주식은 PwC AI 거래 확장 후 한 달 만에 최고의 날을 기록하며 Michael Burry의 약세 베팅을 무시했습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1788491749,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d91c654bfd19dedaa097db31f9bc7cb6790ab7b80072442a4369329de1c7e0c3",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "631bfa2bc237b9b6850a",
          "headline": "Palantir Stock, 붉은 깃발과 급등락에 저항하다 8% – 그 이유는 다음과 같습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788470626,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c670f41e113be40dfa000d22fe72e8bbd4c24510a0a7d6e36b7becd36e7dc852",
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
    "NVDA": {
      "ticker": "NVDA",
      "updatedAt": 1788910788.0619273,
      "dataAsOf": 1788879632,
      "signal": "우호적 변화",
      "netScore": 10,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 4.9,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 5,
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
          "eventId": "68224fa7e6b8f72b5db2",
          "headline": "AMD에는 Nvidia에 없는 것이 있습니다. 주식이 마침내 돌파할 준비가 되었나요?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1788879632,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=89c23297030cfebe3cc74c03310ad38c57335c1738cace218d230aa59fb472bf",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "50b6ee5c90cee35a80bf",
          "headline": "Nvidia와 Broadcom: AI 열풍이 계속되는 이유",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1788879230,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=75577b1bf5f58e80d2402faf4452aa6d99c61a6eb347bc5a5618a1fdf5593041",
          "factorChanges": {
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "bbcb8449ddc554720b18",
          "headline": "Microsoft, Azure 매출을 연간 1000억 달러 규모로 돌파하고 AI 부문 재편성",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788870630,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3fc754d5688f1e120ace874e0cd06cc46d4993535d5119108ef0106a30c1398f",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "8262825b785fe4ee46f5",
          "headline": "다우, S&P 500, 나스닥 선물은 이란 분쟁으로 석유가 100달러를 향해 되돌아가면서 하락: TSLA, NVDA, ORCL, INTC, BIDU, BABA, BE In Focus",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1788856295,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d5a94a395e24ff1e3dacea1d66ee21aef24b3c94faaaa133f9831ebf2832e600",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "1b7e5abf9a07220cea53",
          "headline": "Qualcomm: 데이터 센터 매출 3년 안에 150억 달러 달성",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788852632,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=197e3e929cfdc3ec169569ff0658cbf20beda5eba399ae56d2b8670741df4808",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "491d7a0a701f7c5912b1",
          "headline": "AI 버블 버스트를 위한 엔비디아 브레이스 - 포옹하는 얼굴은 살아남기 위해 필요한 다리입니다",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788849000,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cdd42ce8f29ed0a1e06abdc3a3c6ea85ccf31fd4ee553efda116030f96416f70",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "4144ce284b01fef9a47b",
          "headline": "9월의 주요 M&A 거래: Nvidia, Dominion Energy, Nextera Energy, Vertiv In Focus",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788847964,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6a31e4a15734c0e8da38044ba7d74e57ee28ad6addb508517255acbb3c67228c",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "820081e6789412d1565c",
          "headline": "Apple의 540억 달러 규모 iPhone 엔진, AI 메모리 압박에 성공",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788818172,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1cc30c007c58834929bcda9920921d05fef698377528637e031ed829abbd720f",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "ecfb6dd4ce84f59d8b3f",
          "headline": "Amazon의 250개 항공편 항공 네트워크, 치명적인 마이애미 조사에 직면",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788818055,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cbe636292b848bcc91df4ac0b6d43fab2fef6052c2bfab704374c33c1e108bb5",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "021501c06972380abcc9",
          "headline": "Nvidia는 1달러를 쓰지 않고 14억 7천만 달러의 공급업체 쿠션을 얻습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788817808,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=de1195036a7d1791f80c859969a0a4864c0991a2b838554016ad89ac6ae71fd5",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "ae8832686e60679b8335",
          "headline": "TSMC는 2,650억 달러가 대만의 외교 통화가 되면서 거의 3% 상승했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788817055,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8bf0cd38ae488bf7801bc604bc46253bb4aef1d2499fe164b1bc0226a4c6e116",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "4260051bc716a49e385f",
          "headline": "오라클의 AI 수익 스토리는 개선되고 있지만 현금 흐름 테스트는 여전히 남아 있습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1788814671,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5e773ec4ceea579eb794d87157eff97c7a5c9423d465351b2f245a5601462dac",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "데이터센터 투자 지속 시 AI 컴퓨팅 수요 유지 가능성"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 48,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMD": {
      "ticker": "AMD",
      "updatedAt": 1788910788.0619273,
      "dataAsOf": 1788879772,
      "signal": "우호적 변화",
      "netScore": 5.31,
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
          "eventId": "8eb4815839a42b0941d5",
          "headline": "Advanced Micro Devices, AI 붐으로 MI450, Helios 및 서버 CPU 성장 촉진",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1788879772,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=295cf89aeacf729dfe6c6dd5f2e235c0d1efd4e82463b43b5effcf1ef68f6c79",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "68224fa7e6b8f72b5db2",
          "headline": "AMD에는 Nvidia에 없는 것이 있습니다. 주식이 마침내 돌파할 준비가 되었나요?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1788879632,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=89c23297030cfebe3cc74c03310ad38c57335c1738cace218d230aa59fb472bf",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "2ea83ba5a7d0e9b39dfc",
          "headline": "Advanced Micro Devices와 Marvell Technology는 계속해서 수익을 늘리고 있습니다. 그 밖에 볼만한 내용은 다음과 같습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1788872401,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5487f52d5ec2ff7339ee92f5c5e8b6abf7b6cd59028d0047fd21967061f8210d",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "bbcb8449ddc554720b18",
          "headline": "Microsoft, Azure 매출을 연간 1000억 달러 규모로 돌파하고 AI 부문 재편성",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788870630,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3fc754d5688f1e120ace874e0cd06cc46d4993535d5119108ef0106a30c1398f",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "1b7e5abf9a07220cea53",
          "headline": "Qualcomm: 데이터 센터 매출 3년 안에 150억 달러 달성",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788852632,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=197e3e929cfdc3ec169569ff0658cbf20beda5eba399ae56d2b8670741df4808",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "dd85df54965f639f4c46",
          "headline": "BE Stock, S&P 500 인클루전에서 하룻밤 사이에 급등: 애널리스트는 28% 이상 상승",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1788830691,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ad5921bafdcd6df1e8d9f96cef04be11fcf12f95eee7b5fbd341fd739c006b28",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "820081e6789412d1565c",
          "headline": "Apple의 540억 달러 규모 iPhone 엔진, AI 메모리 압박에 성공",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788818172,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1cc30c007c58834929bcda9920921d05fef698377528637e031ed829abbd720f",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "ecfb6dd4ce84f59d8b3f",
          "headline": "Amazon의 250개 항공편 항공 네트워크, 치명적인 마이애미 조사에 직면",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788818055,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cbe636292b848bcc91df4ac0b6d43fab2fef6052c2bfab704374c33c1e108bb5",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "ae8832686e60679b8335",
          "headline": "TSMC는 2,650억 달러가 대만의 외교 통화가 되면서 거의 3% 상승했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788817055,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8bf0cd38ae488bf7801bc604bc46253bb4aef1d2499fe164b1bc0226a4c6e116",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "b6b859f3cb04f4165e41",
          "headline": "AMD는 아무도 이야기하지 않는 AI 칩 전환 뒤에 있습니다",
          "eventLabel": "공급망 문제",
          "publishedAt": 1788795657,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ed58ccb2a6d417bdb7eafb56f307cb7f915d6a5ce939224d2e07ec6d5f917b32",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "9336c45338c15729052a",
          "headline": "억만장자 빌 애크먼(Bill Ackman)은 알파벳 주식을 매도하고 고점 대비 42% 하락한 메가캡 주식을 매입합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788772081,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8d32481f9c84c3ca2b511a135e42cf9ce1e624a8a747641f58512160f1aedde3",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "206b7a57481d4de918bd",
          "headline": "엔비디아, AI 제국 보호 위해 129억 달러 투자",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788739380,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=264a3fe648c00b8f2f5957eebe33d38e49cf132ffd19782208dc741b71502201",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 32,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AVGO": {
      "ticker": "AVGO",
      "updatedAt": 1788910788.0619273,
      "dataAsOf": 1788877343,
      "signal": "중립·확인 대기",
      "netScore": -1.27,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.87,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 1.22,
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
          "eventId": "40452814a24be6f5d240",
          "headline": "Qualcomm, 다중 세대 Amazon AI 실리콘 거래에서 5% 상승; Broadcom은 상승세를 보이고 있으며 Amazon은 정체 상태를 유지하고 있습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788877343,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=65eb1aa56be457032e93b7e401babcef0586e7deac32cb826c1db78707470133",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "b769097e86b1493c9352",
          "headline": "Broadcom: 최근 수익으로 내가 가장 신뢰하지 않는 AI 주식인 이유 확인",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788836516,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d912c2264f2a145e9e1ed97bbaf3ee0df9cd5a1d268ef8a14b6eab04e4674957",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "953642f384fc9fbade42",
          "headline": "Broadcom 대 Marvell: AI 칩 주식 중 하나가 확실한 승자입니다",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1788791932,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=10cacaa0c276487f38fdc13443277bde152a7bc9aa6864dd73b60840f308cc19",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "3292fb8083f71a9436c0",
          "headline": "Nvidia의 Hugging Face 거래는 Broadcom의 맞춤형 실리콘 위협에 대한 헤지입니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788695471,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c698c3cd5183f58ca14f21253e285b623a7df657507fa969a2b9c0d7fa94ce0e",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "23bb64bc332b943998df",
          "headline": "Broadcom 대 Nvidia: 수익 창출 후 어느 인공 지능(AI) 칩 제조업체가 더 나은 구매인지 보여주는 1가지 중요한 지표",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788635100,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=df0f33cba1195e3098ad03ae5ff7a516af30f6bd19e205403a453411b81836f0",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "9952f26e2bbd48af0e35",
          "headline": "Broadcom: 3,500억 달러 규모의 AI 신호에는 290억 달러의 각주가 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788586217,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4a957a36461a14b44c31074dca27a2577e27ff6326f67b70ee770161e499b813",
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
    "QCOM": {
      "ticker": "QCOM",
      "updatedAt": 1788910788.0619273,
      "dataAsOf": 1788888648,
      "signal": "주의 강화",
      "netScore": -8.09,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 2.45,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 0.7,
          "level": "중립"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": -3.05,
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
          "score": -4.8,
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
          "eventId": "de94cb545df45aea48bc",
          "headline": "Qualcomm 주가 급등 - Amazon, 주요 AI 칩 파트너십 체결",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788888648,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=16b2f3f6aea6b463a60eb8e65bffc1c8ee54422bdac9d88303f0d2d486f5d59d",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "9e06a49b053b6bed148c",
          "headline": "맞춤형 데이터 센터 칩을 위한 Qualcomm과 Amazon 잉크 거래",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788886848,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9fd5e4e9fc139bb54e10af0d361566e09041813ac5afe8c7ce82f9aa3d63eb90",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "674fec75a4ca81db94e5",
          "headline": "퀄컴, 아마존웹서비스 데이터센터에 맞춤형 AI 칩 공급",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788886662,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=dc7dc2c15897374819abc48efec0352649d625b86499c39c03f2a38fba03693e",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "e08d294166d607e6fa00",
          "headline": "Apple, 새로운 CEO Ternus가 무대에 오르면서 최초의 폴더블 iPhone 공개 예정",
          "eventLabel": "공급망 문제",
          "publishedAt": 1788884340,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a8c4fc81b70a48ca8c1bc29495bc1502f0dde9d52e28e524b625d99bb1bfa022",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "스마트폰 수요가 줄면 고객 칩 수요에 부담"
        },
        {
          "eventId": "4277d3ea8c3c1a5d2291",
          "headline": "주요 정오 기사: GE Aerospace, 통합 정밀 제품 인수; Qualcomm, Amazon에 주식 영장 발행",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1788882330,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2ae8a832851f7b2f5438b8a6af3fee6b2b8bd035b6bc97e978a449770023779d",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "eb178d0b621fe527f313",
          "headline": "Qualcomm, Amazon AI 칩 파트너십으로 도약",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788880380,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f4d2d18d165594320a11034b32010b0bd7d1f7aa9fbc6f8c5261005518c65480",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "40452814a24be6f5d240",
          "headline": "Qualcomm, 다중 세대 Amazon AI 실리콘 거래에서 5% 상승; Broadcom은 상승세를 보이고 있으며 Amazon은 정체 상태를 유지하고 있습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788877343,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=65eb1aa56be457032e93b7e401babcef0586e7deac32cb826c1db78707470133",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "4144ce284b01fef9a47b",
          "headline": "9월의 주요 M&A 거래: Nvidia, Dominion Energy, Nextera Energy, Vertiv In Focus",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788847964,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6a31e4a15734c0e8da38044ba7d74e57ee28ad6addb508517255acbb3c67228c",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "25705c72e076e67971e7",
          "headline": "팀 쿡(Tim Cook)은 15년 동안 총 2,720%의 수익률을 달성했습니다. John Ternus가 Apple 투자자를 위해 동일한 작업을 수행할 수 있는지 여부는 다음과 같습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1788818100,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cd2a41f6926a62bd9c5b662619f4716a71fce858072a7778c6705182f3b13b4c",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "스마트폰 수요가 줄면 고객 칩 수요에 부담"
        },
        {
          "eventId": "369524e40b4f3b079903",
          "headline": "QCOM SEC Form 8-K 공식 제출",
          "eventLabel": "증권등록·투자설명서 제출",
          "publishedAt": 1788793200.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/804328/000110465926105718/tm2623289d1_8k.htm",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "ccbd6fbf419bb01004a5",
          "headline": "이번 주 시장에서 기대할 사항: 새로운 인플레이션 데이터; Apple의 가을 출시 이벤트 및 Oracle 수익",
          "eventLabel": "공급망 문제",
          "publishedAt": 1788696000,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a876fa71b6bc53ea066d0e2325f8fbe65043d92090aa2308363b37b4080eeba9",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "스마트폰 수요가 줄면 고객 칩 수요에 부담"
        },
        {
          "eventId": "1fd39215a412312fcfaa",
          "headline": "새로운 CEO 존 터너스(John Ternus)가 이끄는 Apple의 첫 번째 iPhone이 9월 9일 출시됩니다. 이제 주식을 매입할 때가 되었는지 알아보겠습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1788633300,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c686985f2d1ee36acd57cf68fc1ec368cbd7560286e77ee01a4f48c461c0159b",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "스마트폰 수요가 줄면 고객 칩 수요에 부담"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 14,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ARM": {
      "ticker": "ARM",
      "updatedAt": 1788910788.0619273,
      "dataAsOf": 1788881679,
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
          "eventId": "07af5c52d130b6fbe04b",
          "headline": "Nvidia의 새로운 파트너는 은행이 플러그를 뽑을 수 있는 기계에 AI를 원한다고 말합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788881679,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a2bd274efde77bd159c943f55af06f018f8e82ee5da6dcc35c419d38f8d35141",
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
    "MRVL": {
      "ticker": "MRVL",
      "updatedAt": 1788910788.0619273,
      "dataAsOf": 1788872401,
      "signal": "주의 강화",
      "netScore": -5.39,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.35,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 1.05,
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
          "score": -1.92,
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
          "eventId": "2ea83ba5a7d0e9b39dfc",
          "headline": "Advanced Micro Devices와 Marvell Technology는 계속해서 수익을 늘리고 있습니다. 그 밖에 볼만한 내용은 다음과 같습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1788872401,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5487f52d5ec2ff7339ee92f5c5e8b6abf7b6cd59028d0047fd21967061f8210d",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "953642f384fc9fbade42",
          "headline": "Broadcom 대 Marvell: AI 칩 주식 중 하나가 확실한 승자입니다",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1788791932,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=10cacaa0c276487f38fdc13443277bde152a7bc9aa6864dd73b60840f308cc19",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "827bd1bf3f1f9b6cad08",
          "headline": "Marvell은 전망을 높였지만 Google 칩 수익이 정체되면서 하락했습니다. AI 보상에 가격이 책정되었나요? (검토 준비 중)",
          "eventLabel": "실적 전망 변경",
          "publishedAt": 1788566336,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c671bd5fcba653dfdc97d99024b47750c2036530faca328cad1456ce7b7e280b",
          "factorChanges": {
            "growth": 2,
            "shortTermMomentum": 2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "c102fb1c411610ba2375",
          "headline": "무너진 AI 실리콘이 반등하면서 Marvell은 6% 상승하고 Qualcomm은 거의 버지 못합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788537738,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5c5f1033f4c42345d20bf9c704f050455e74dfbce12245e557cb95efbbb770c9",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "5b82a5b5b975e9730dda",
          "headline": "Marvell Technology와 Taiwan Semiconductor는 No-Brainer Picks입니다. 그들은 골드 러시에서 이기는 것을 가지고 있습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1788524785,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4573c14df2074810d02255c764ad9b85d8e4f7277498a39cadeb692b5120936a",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "fbb7a9c0283352091cc4",
          "headline": "영업이익률이 계속 확대되기 때문에 Marvell 주식을 사야 할까요?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1788470392,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fed7f650e1edb9385988469941a361630ab1832a2d80d3233bf03cedd534bc52",
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
    "INTC": {
      "ticker": "INTC",
      "updatedAt": 1788910788.0619273,
      "dataAsOf": 1788867000,
      "signal": "중립·확인 대기",
      "netScore": -0.7,
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
          "score": -0.7,
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
          "eventId": "2e31e49d8a1e4a76e3c5",
          "headline": "Micron 대 Sandisk: 1개의 인공 지능(AI) 메모리 승자가 20% 하락했으며 오늘 매수가 확실히 우월함",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1788867000,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=df9407e0a8dffe9ecf7bc29c65174d27dbdc17d6666131b99fb96e092bed7c3d",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "8262825b785fe4ee46f5",
          "headline": "다우, S&P 500, 나스닥 선물은 이란 분쟁으로 석유가 100달러를 향해 되돌아가면서 하락: TSLA, NVDA, ORCL, INTC, BIDU, BABA, BE In Focus",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1788856295,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d5a94a395e24ff1e3dacea1d66ee21aef24b3c94faaaa133f9831ebf2832e600",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "dd85df54965f639f4c46",
          "headline": "BE Stock, S&P 500 인클루전에서 하룻밤 사이에 급등: 애널리스트는 28% 이상 상승",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1788830691,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ad5921bafdcd6df1e8d9f96cef04be11fcf12f95eee7b5fbd341fd739c006b28",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "73136971acb9ac4e0f7f",
          "headline": "인텔: 나는 기꺼이 받아들일 230억 달러의 희석",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1788776735,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b2e480e2a3a316e2a1ff4ef0d5a74faa17d14b929cb0e7bdb578d9e25c76208b",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "3d0d6bb157915d5d927c",
          "headline": "Arista Networks와 IBM: 인공 지능 거대 기업 간의 분기별 수익 추세 비교",
          "eventLabel": "실적 발표",
          "publishedAt": 1788726736,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=30ad2fd69fc667a6f4b993e567f021bb1e388a8eaf350da12995fd42773b5bde",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "23bb64bc332b943998df",
          "headline": "Broadcom 대 Nvidia: 수익 창출 후 어느 인공 지능(AI) 칩 제조업체가 더 나은 구매인지 보여주는 1가지 중요한 지표",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788635100,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=df0f33cba1195e3098ad03ae5ff7a516af30f6bd19e205403a453411b81836f0",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "65f0ea36084495f3b4b8",
          "headline": "S&P 500, 다우지수는 폭발적 일자리 보고로 하락 마감, 팬들은 인상 우려를 표명하고 칩 제조업체의 강세는 Nasdaq에 도움이 됨 —TSLA, NFLX, BE, NVDA 집중",
          "eventLabel": "실적 발표",
          "publishedAt": 1788560329,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=edf096e6792c207b0d0c8ecea67ebbe33d0294943b3f3486d6969b08c6574e5d",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "10920d99d3f2df0e658d",
          "headline": "엔비디아의 50억 달러 인텔 베팅은 6월까지 300억 달러 가치가 되었습니다. 파트너십 가격이 여전히 잘못 책정되어 있나요?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788471580,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8316bfe61c35a3736280c7432450477ce7b65b3cb2e2b4370124e71ff192953e",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "9f1b76b9593fe3e51f58",
          "headline": "Amazon 대 Microsoft: 우수한 인공 지능(AI) 클라우드 주식을 식별하는 1가지 주요 지표",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788469980,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3413ec929cf8b8d3bbeafd6ee9b96378ac8cfe451773cf8204bf8f5c4b564066",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "078a5a075718ef00ef7e",
          "headline": "PG&E, Google, Rewiring America 캘리포니아에서 VPP 출시",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1788460010,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7d419d4a24ae6c640c2e84078661540fd24e42dce22d1c50c67772e829fe79b2",
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
    "TSM": {
      "ticker": "TSM",
      "updatedAt": 1788910788.0619273,
      "dataAsOf": 1788874341,
      "signal": "주의 강화",
      "netScore": -4.05,
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
          "eventId": "85c131752a4ef95516d4",
          "headline": "인텔, High-NA EUV 생산 선두에서 5% 상승, ASML 및 대만 반도체 진출 3%",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788874341,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=22bf7995134c56689342d46246942c2317a4832289f98b6e61b534cfd0edfc48",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "b66dec594615c0dbe6a0",
          "headline": "TSMC와 삼성은 AI 칩용 ASML High NA EUV 장비를 약속합니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788871928,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0ca5b7611bc836a0cbdd401ea4e6512a38ebdb30fa561397f35b0d146fa963f1",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ae8832686e60679b8335",
          "headline": "TSMC는 2,650억 달러가 대만의 외교 통화가 되면서 거의 3% 상승했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788817055,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8bf0cd38ae488bf7801bc604bc46253bb4aef1d2499fe164b1bc0226a4c6e116",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "5b82a5b5b975e9730dda",
          "headline": "Marvell Technology와 Taiwan Semiconductor는 No-Brainer Picks입니다. 그들은 골드 러시에서 이기는 것을 가지고 있습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1788524785,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4573c14df2074810d02255c764ad9b85d8e4f7277498a39cadeb692b5120936a",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "88a356a1f4609afca6b0",
          "headline": "내부자 움직임: Shu-Hua Fang, 대만 반도체 주식에 154,000달러 투자",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788519681,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=796857e1b09107fc367bc66044ea9736905283b50d6e10e3f6008896a8a00a40",
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
      "updatedAt": 1788910788.0619273,
      "dataAsOf": 1788874341,
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
          "eventId": "85c131752a4ef95516d4",
          "headline": "인텔, High-NA EUV 생산 선두에서 5% 상승, ASML 및 대만 반도체 진출 3%",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788874341,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=22bf7995134c56689342d46246942c2317a4832289f98b6e61b534cfd0edfc48",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "c3596003b0649e59bda8",
          "headline": "삼성전자와 ASML, 차세대 반도체 제조를 위한 전략적 협력 확대",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788868260,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2ee6b152da3ad585fcbace7dddb1ddfff182c5f55a5a2060037cbd9c5195bc5b",
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
    "AMAT": {
      "ticker": "AMAT",
      "updatedAt": 1788910788.0619273,
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
      "updatedAt": 1788910788.0619273,
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
      "updatedAt": 1788910788.0619273,
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
      "updatedAt": 1788910788.0619273,
      "dataAsOf": 1788884340,
      "signal": "우호적 변화",
      "netScore": 6.49,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
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
          "eventId": "e08d294166d607e6fa00",
          "headline": "Apple, 새로운 CEO Ternus가 무대에 오르면서 최초의 폴더블 iPhone 공개 예정",
          "eventLabel": "공급망 문제",
          "publishedAt": 1788884340,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a8c4fc81b70a48ca8c1bc29495bc1502f0dde9d52e28e524b625d99bb1bfa022",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리 ASP와 이익률 개선 가능성"
        },
        {
          "eventId": "e3a8361107d278f73b6d",
          "headline": "AI가 휴대폰에서 메모리를 전환하고 Micron이 안정을 유지하고 Apple이 미끄러짐에 따라 SK 하이닉스는 7% 상승",
          "eventLabel": "공급망 문제",
          "publishedAt": 1788883086,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8c4ce9a3fb432f08151ecdb249e4b10cb962fcba637c6cfcd28a7b41e81530e9",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "bbcb8449ddc554720b18",
          "headline": "Microsoft, Azure 매출을 연간 1000억 달러 규모로 돌파하고 AI 부문 재편성",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788870630,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3fc754d5688f1e120ace874e0cd06cc46d4993535d5119108ef0106a30c1398f",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "2e31e49d8a1e4a76e3c5",
          "headline": "Micron 대 Sandisk: 1개의 인공 지능(AI) 메모리 승자가 20% 하락했으며 오늘 매수가 확실히 우월함",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1788867000,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=df9407e0a8dffe9ecf7bc29c65174d27dbdc17d6666131b99fb96e092bed7c3d",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "1b7e5abf9a07220cea53",
          "headline": "Qualcomm: 데이터 센터 매출 3년 안에 150억 달러 달성",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788852632,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=197e3e929cfdc3ec169569ff0658cbf20beda5eba399ae56d2b8670741df4808",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "820081e6789412d1565c",
          "headline": "Apple의 540억 달러 규모 iPhone 엔진, AI 메모리 압박에 성공",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788818172,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1cc30c007c58834929bcda9920921d05fef698377528637e031ed829abbd720f",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "25705c72e076e67971e7",
          "headline": "팀 쿡(Tim Cook)은 15년 동안 총 2,720%의 수익률을 달성했습니다. John Ternus가 Apple 투자자를 위해 동일한 작업을 수행할 수 있는지 여부는 다음과 같습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1788818100,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cd2a41f6926a62bd9c5b662619f4716a71fce858072a7778c6705182f3b13b4c",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리 ASP와 이익률 개선 가능성"
        },
        {
          "eventId": "ecfb6dd4ce84f59d8b3f",
          "headline": "Amazon의 250개 항공편 항공 네트워크, 치명적인 마이애미 조사에 직면",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788818055,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cbe636292b848bcc91df4ac0b6d43fab2fef6052c2bfab704374c33c1e108bb5",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "ae8832686e60679b8335",
          "headline": "TSMC는 2,650억 달러가 대만의 외교 통화가 되면서 거의 3% 상승했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788817055,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8bf0cd38ae488bf7801bc604bc46253bb4aef1d2499fe164b1bc0226a4c6e116",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "9336c45338c15729052a",
          "headline": "억만장자 빌 애크먼(Bill Ackman)은 알파벳 주식을 매도하고 고점 대비 42% 하락한 메가캡 주식을 매입합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788772081,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8d32481f9c84c3ca2b511a135e42cf9ce1e624a8a747641f58512160f1aedde3",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "206b7a57481d4de918bd",
          "headline": "엔비디아, AI 제국 보호 위해 129억 달러 투자",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788739380,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=264a3fe648c00b8f2f5957eebe33d38e49cf132ffd19782208dc741b71502201",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "2b8860ed2405d4e2443e",
          "headline": "Anthropic은 AWS에 1,000억 달러 이상을 투자했으며 투자 설명서를 통해 이 계약에 대한 자세한 내용을 밝힐 수 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788734581,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cd58e97c5c5b76bf4fccf8f4b286e1ba6f9c1d350d3666c39ad2a8a1c31456ab",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 39,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "SNDK": {
      "ticker": "SNDK",
      "updatedAt": 1788910788.0619273,
      "dataAsOf": 1788867000,
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
          "eventId": "2e31e49d8a1e4a76e3c5",
          "headline": "Micron 대 Sandisk: 1개의 인공 지능(AI) 메모리 승자가 20% 하락했으며 오늘 매수가 확실히 우월함",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1788867000,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=df9407e0a8dffe9ecf7bc29c65174d27dbdc17d6666131b99fb96e092bed7c3d",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "df48f6bae44281cdf2cf",
          "headline": "오늘 Sandisk 주가가 상승한 이유",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788536185,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c1f02dc19328b5375b1b66dcdce93af411c45248cafc1783119e6ee737767d70",
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
    "WDC": {
      "ticker": "WDC",
      "updatedAt": 1788910788.0619273,
      "dataAsOf": 1788884340,
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
          "score": -3.15,
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
          "eventId": "e08d294166d607e6fa00",
          "headline": "Apple, 새로운 CEO Ternus가 무대에 오르면서 최초의 폴더블 iPhone 공개 예정",
          "eventLabel": "공급망 문제",
          "publishedAt": 1788884340,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a8c4fc81b70a48ca8c1bc29495bc1502f0dde9d52e28e524b625d99bb1bfa022",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리·스토리지 가격 강세 수혜 가능성"
        },
        {
          "eventId": "25705c72e076e67971e7",
          "headline": "팀 쿡(Tim Cook)은 15년 동안 총 2,720%의 수익률을 달성했습니다. John Ternus가 Apple 투자자를 위해 동일한 작업을 수행할 수 있는지 여부는 다음과 같습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1788818100,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cd2a41f6926a62bd9c5b662619f4716a71fce858072a7778c6705182f3b13b4c",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리·스토리지 가격 강세 수혜 가능성"
        },
        {
          "eventId": "ccbd6fbf419bb01004a5",
          "headline": "이번 주 시장에서 기대할 사항: 새로운 인플레이션 데이터; Apple의 가을 출시 이벤트 및 Oracle 수익",
          "eventLabel": "공급망 문제",
          "publishedAt": 1788696000,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a876fa71b6bc53ea066d0e2325f8fbe65043d92090aa2308363b37b4080eeba9",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리·스토리지 가격 강세 수혜 가능성"
        },
        {
          "eventId": "1fd39215a412312fcfaa",
          "headline": "새로운 CEO 존 터너스(John Ternus)가 이끄는 Apple의 첫 번째 iPhone이 9월 9일 출시됩니다. 이제 주식을 매입할 때가 되었는지 알아보겠습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1788633300,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c686985f2d1ee36acd57cf68fc1ec368cbd7560286e77ee01a4f48c461c0159b",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리·스토리지 가격 강세 수혜 가능성"
        },
        {
          "eventId": "9531ad704c5fa19fe096",
          "headline": "모건스탠리는 애플의 폴더블 아이폰이 12월 분기 매출 140억 달러를 창출할 수 있을 것으로 예상했다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1788613800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c22111359976c8182e714c1ffd434881519f76bc0943a0ddbf6303b437e103cc",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리·스토리지 가격 강세 수혜 가능성"
        },
        {
          "eventId": "d79a8daa76dde3162513",
          "headline": "Apple 메모리 비용 400% 상승, iPhone 18 Pro 가격 100달러 상승 가능",
          "eventLabel": "공급망 문제",
          "publishedAt": 1788496678,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b0dddeca1009928774a28a221d266e1f13a5640e1ab2e232491e33fecb518085",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리·스토리지 가격 강세 수혜 가능성"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 6,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ANET": {
      "ticker": "ANET",
      "updatedAt": 1788910788.0619273,
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
      "updatedAt": 1788910788.0619273,
      "dataAsOf": 1788538833,
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
          "eventId": "71af741db2d528d0ebb6",
          "headline": "GoPro는 Starman Optical Merger와 Markiplier 지분을 34% 확대했습니다. 일관된 등반 7%, Lumentum 3% 증가",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788538833,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f4cd1e985d5f0d0dd650f0ec64360c43779f228908471c2596d762cf8077d0f1",
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
    "LITE": {
      "ticker": "LITE",
      "updatedAt": 1788910788.0619273,
      "dataAsOf": 1788787822,
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
          "eventId": "789954fabda2e167435b",
          "headline": "2026년에는 Applied Optoelectronics, Lumentum 또는 Coherent 중 어느 광학 주식이 지배적이었습니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788787822,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=744193782ab532c7f4178bfc5ba1cb0fa2d5854dfe1c2b4eb887468dabc37b4f",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "71af741db2d528d0ebb6",
          "headline": "GoPro는 Starman Optical Merger와 Markiplier 지분을 34% 확대했습니다. 일관된 등반 7%, Lumentum 3% 증가",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788538833,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f4cd1e985d5f0d0dd650f0ec64360c43779f228908471c2596d762cf8077d0f1",
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
    "GEV": {
      "ticker": "GEV",
      "updatedAt": 1788910788.0619273,
      "dataAsOf": 1788523200,
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
          "eventId": "e83fb78d3e05f36c87f5",
          "headline": "GE Vernova, 스코틀랜드 ESB 풍력 발전 단지에 터빈 공급 계약 체결",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788523200,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=485703247cec76fcd07b2f015353af4f6d3a2de4dd5f1c64fb122198c24fc7b0",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "6664fe238ac5ad4945c7",
          "headline": "시장의 대화: GE Vernova 거래, 6~12개월 내에 베네수엘라 전력망 안정화 목표",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788516641,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fef8b4ec0362edf694401fe016aa02b528c27848c00e6df722437b7b18090da1",
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
    "CEG": {
      "ticker": "CEG",
      "updatedAt": 1788910788.0619273,
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
      "updatedAt": 1788910788.0619273,
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
      "updatedAt": 1788910788.0619273,
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
      "updatedAt": 1788910788.0619273,
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
      "updatedAt": 1788910788.0619273,
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
      "updatedAt": 1788910788.0619273,
      "dataAsOf": 1788847964,
      "signal": "중립·확인 대기",
      "netScore": -1.68,
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
          "eventId": "4144ce284b01fef9a47b",
          "headline": "9월의 주요 M&A 거래: Nvidia, Dominion Energy, Nextera Energy, Vertiv In Focus",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788847964,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6a31e4a15734c0e8da38044ba7d74e57ee28ad6addb508517255acbb3c67228c",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "e799cbdf421216e4335e",
          "headline": "Vertiv Holdings Co(VRT), AI 데이터센터 전력 도달 범위를 심화하기 위한 유틸리티 계약에 합의",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788574392,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fdf5335c10e11621038f4cafb4041e1163de35450be064a4856316c862ce12e4",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "e3b77a3d680e700d2406",
          "headline": "Vertiv: AI 혁명의 중추",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788572194,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=002f2e572e0099d81d9d6b0f61f8c4c1471f3ea49f6efd90e8e0d06cbf60c4a3",
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
    "MOD": {
      "ticker": "MOD",
      "updatedAt": 1788910788.0619273,
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
      "updatedAt": 1788910788.0619273,
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
      "updatedAt": 1788910788.0619273,
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
      "updatedAt": 1788910788.0619273,
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
      "updatedAt": 1788910788.0619273,
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
