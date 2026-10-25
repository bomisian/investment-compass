// 자동 생성 파일 - 중요 뉴스의 기업분석 반영
const EVENT_ANALYSIS_DATA = {
  "schemaVersion": 1,
  "generatedAt": 1792961189.7794166,
  "records": {
    "MSFT": {
      "ticker": "MSFT",
      "updatedAt": 1792961189.7794166,
      "dataAsOf": 1792700784,
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
          "eventId": "cb687254ba8ff64c9709",
          "headline": "Alphabet(GOOGL) 대 MSFT 및 AMZN: AI 투자와 Google Cloud 성장으로 26%의 상승 여력을 얻을 수 있습니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792700784,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=76c1bd26b5efefa54a8a958e66f717ce5ce0aa2140eca2591ecdad295e7ba06b",
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
    "GOOGL": {
      "ticker": "GOOGL",
      "updatedAt": 1792961189.7794166,
      "dataAsOf": 1792935117,
      "signal": "우호적 변화",
      "netScore": 3.07,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.52,
          "level": "중립"
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
          "score": -0.7,
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
          "score": 0.0,
          "level": "중립"
        }
      },
      "evidence": [
        {
          "eventId": "4307b66baec7b5f8e2dc",
          "headline": "Constellation Energy, Google에 890MW의 전력 공급 약속: “에너지 수요 증가”",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792935117,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4d5067116906b5db88cc2004a27199827c2d5893542ad3e82cd21cf8ef82d849",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "129638e89166535f6a87",
          "headline": "Alphabet(GOOGL): AI 수요 및 TPU 성장에 대한 투자",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792774309,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e7461a9bba64726971fa5f3e70ed4dfa2042f77765f328e2d77b753d72d32525",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "2f360a57599be3cfef43",
          "headline": "알파벳(GOOGL) 클라우드 중단 및 공유 토큰 싸움으로 규제에 초점",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792761187,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1ab59349b99aff7a62c462bd4f3e198be2890579beabb493f7bfab1927c5b4eb",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "d7aa8079d758a4c118c5",
          "headline": "Alphabet, 경쟁업체가 부채로 구매할 수 없는 AI 인프라 병목 현상 해결",
          "eventLabel": "경쟁사 기술·시장 진입",
          "publishedAt": 1792759555,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6264ccb84378cf7b9f07b0bbba3586ea3d89010337fb5ad216fbde9ab55d5b98",
          "factorChanges": {
            "competitiveRisk": -2,
            "longTermCompetitiveness": -1,
            "shortTermMomentum": -1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "0bae6ef2017d9db452b1",
          "headline": "구글의 AI 칩은 750억 달러 규모의 사업이 될 수 있다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792724820,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a66362dbb043c2a4c05a77ab0bd4e74d737a875a4553ea7aa2a52322bff40291",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "cb687254ba8ff64c9709",
          "headline": "Alphabet(GOOGL) 대 MSFT 및 AMZN: AI 투자와 Google Cloud 성장으로 26%의 상승 여력을 얻을 수 있습니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792700784,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=76c1bd26b5efefa54a8a958e66f717ce5ce0aa2140eca2591ecdad295e7ba06b",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "3722b7360694233e6653",
          "headline": "Google은 컴퓨팅을 위해 SpaceX에 연간 110억 달러를 지불하고 있습니다. 아무도 가격을 책정하지 않는 집중 위험은 다음과 같습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1792699800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2ea940cce4c769226bc004eef1d6ce0b25762f1748ff1989c83ce7075c3bd518",
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
      "updatedAt": 1792961189.7794166,
      "dataAsOf": 1792939353,
      "signal": "우호적 변화",
      "netScore": 10,
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
          "eventId": "569d2be2c6802fcc267d",
          "headline": "Generac Q3 수익 미리보기: Amazon AI 거래가 큰 성과를 낼 수 있을까요?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792939353,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=28a2786c4aae985daaadede27a6f5e004875d7c3756e2ec2760009aa958aa1f7",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "2920ebab02ebc97dfaf9",
          "headline": "IO 펀드에 따르면 AI 부채가 4배 증가하여 거의 5000억 달러에 이르렀습니다. NVDA, ORCL 및 CRWV에 미치는 영향",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1792927477,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c6150d3bf4e767a2ddf4ad75e4fca0f20042666d1ebbf5a30866306b60176e37",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "클라우드 CAPEX 경쟁과 가격·마진 압력 비교 필요"
        },
        {
          "eventId": "534ea63d3376cc042e4e",
          "headline": "Amazon은 AWS가 벌어들인 수익보다 지난 분기에 데이터 센터에 더 많은 비용을 지출했습니다. 투자자들이 걱정해야 할까요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792841701,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4617dfd0827df2553d31a9ed63ea15e07d92a4690d1ea9d3d77321ab1a2795ff",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "f329b39aed7b02f8670d",
          "headline": "3M의 Amazon 거래가 MMM 주식의 큰 판도를 바꿀 수 있는 이유",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792791348,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a32d02413c97e6bf08d6954759efbc6292d0fc8576a1f630a4b2abd90c8d4b46",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "0a61a79ba67476b4d4db",
          "headline": "포스트잇 제조사 3M, 아마존 주요 거래에서 AI 골드러시 주목",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792784220,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=bda1f3e7e7e0d3eedc776f170bf5c181bc393017908c4d1feab41a24a755ce28",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "788cabfcefef0e4cbe86",
          "headline": "Amazon 주식에 어떤 문제가 발생할 수 있나요?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1792742448,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=159a0e936032fb8049c2cbee82ce1c1eea7b2e67f320f7c6fd3c3cce09ce525f",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "cb687254ba8ff64c9709",
          "headline": "Alphabet(GOOGL) 대 MSFT 및 AMZN: AI 투자와 Google Cloud 성장으로 26%의 상승 여력을 얻을 수 있습니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792700784,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=76c1bd26b5efefa54a8a958e66f717ce5ce0aa2140eca2591ecdad295e7ba06b",
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
    "META": {
      "ticker": "META",
      "updatedAt": 1792961189.7794166,
      "dataAsOf": 1792947947,
      "signal": "주의 강화",
      "netScore": -8.9,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
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
          "score": -3.15,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -4.9,
          "level": "주의"
        },
        "insiderSignal": {
          "label": "내부자 거래 신호",
          "score": -0.7,
          "level": "중립"
        }
      },
      "evidence": [
        {
          "eventId": "d178c09b5dfcfb6327eb",
          "headline": "메타는 일주일 만에 9% 하락했습니다. 판매할 시간인가, 아니면 장전할 시간인가?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1792947947,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4e8df422e401c0b41d69a123b221d11b98837dba755c7a8a2aa9f98425368a94",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "c418a725dc7443fca010",
          "headline": "메타 플랫폼(META)은 해시계 거래와 신규 주식을 통해 투자자에게 무엇을 말합니까?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792944435,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=25fc2fb859051d9be5ae909e2d7b71bbb647b19ae205a394b46ceaab839ba27e",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "b17c138720faa10aa6a2",
          "headline": "Vistra는 42억 달러의 핵 대출 제안에도 불구하고 3개월 만에 17% 하락",
          "eventLabel": "내부자 매도",
          "publishedAt": 1792934777,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a7bb8ff404a7f98d7d3f738d46344eaed2936c6ef6d47f52945cd530fda68ab0",
          "factorChanges": {
            "insiderSignal": -2,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "255f01a7c8fdda5469ed",
          "headline": "투자자가 메타 플랫폼 딥을 구매해야 합니까?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1792898400,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1a5047d420722fa683a4e4667ad8252d7ced1c8c06e667d396e21b196a7f43ab",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "559b25b08c81ef55f220",
          "headline": "비스트라 주식은 메타 수익이 발생한 지 하루 만에 거의 10% 하락했습니다. 예측이 이미 데이터 센터의 과대광고를 할인한 이유는 다음과 같습니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1792853736,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9684524998350387c544c2391f2613211f1c63e7715c559b905683f2579d4834",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "8bec762cafadf29ce7e4",
          "headline": "캐나다 뉴스 출판사, Meta가 AI 훈련 문제로 인해 새로운 서비스 약관을 폐기하길 원함",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792791082,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=310bdeba2307a2512d22e24a2ddae201d4867d5cc67a54fdd2a7432c0ecb31fa",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "d4ce2bc0194aae4ab866",
          "headline": "GE Vernova는 Meta의 수익 이후 하루 만에 거의 11% 하락했습니다. 2030년까지 주식이 갈 수 있는 곳은 다음과 같습니다",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1792787820,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f962618b1e5a89cd82b255ecfad61a8f749d5eb037f143ebb4aa24a5e0f758f2",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "4192e742e61c5b3a149e",
          "headline": "Arm은 한 달 만에 19% 하락했습니다. 판매할 시간인가, 아니면 장전할 시간인가?",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1792778885,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=bc90b2ef741ab722f709f76c5e5e77ae9225575d44cc3f5104121050ecfb9a4d",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "604b4ffd6aa7d428ee18",
          "headline": "메타 계획은 1:2 주식 분할에 해당합니다. 주식은 매수인가?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1792770181,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=437bbd7d85c79eaf4b05ba265db0d97b0d5003ca9159ed9e95c009b8c52d9a2c",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "1dbb3d9feb5257d03a76",
          "headline": "Nasdaq, Dow, S&P 500 선물 하락 프리마켓: NVDA, AMD, META, CRWV, MRNA, WDC, BE In Focus",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1792750428,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5922972d586f65fcf83214c46c06e90ef1c3a8fbb7f6857fb86f2fb48028df32",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "09dac6ae38cb6af975ac",
          "headline": "Meta에 대한 통제력을 잃지 않고 캘리포니아가 제안한 억만장자 세금을 납부하려는 Mark Zuckerberg의 창의적인 계획",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792713041,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9ac573909bbfe809bec722908ab64fed05966f09641f7ad568010f6d1a681755",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "e83e74b5cf404f6c0e33",
          "headline": "Meta가 억만장자 세금 부과에도 불구하고 Mark Zuckerberg를 캘리포니아에 유지하기로 계약을 체결한 방법",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792701881,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=09de2531fff485dc12f816084bb0e8898d1a47852f2596aba12c175ced03af14",
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
    "AAPL": {
      "ticker": "AAPL",
      "updatedAt": 1792961189.7794166,
      "dataAsOf": 1792853501,
      "signal": "주의 강화",
      "netScore": -3.57,
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
          "eventId": "8459930a96df67ef6057",
          "headline": "애플 아이폰18 프로 수요 약세? Jefferies, 배송 시간 단축 및 주문 삭감 보고",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792853501,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0f9d8afb174bf7814a0e3ec521c3eeada07c93e767d2da8d5204b1f271a900bb",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "가격 전가 시 마진 방어, 판매량·교체주기 둔화 위험"
        },
        {
          "eventId": "a7a7aedb031d741baa5e",
          "headline": "Apple이 iPhone Duo Day에서 세계에서 가장 가치 있는 회사로 Nvidia를 제쳤습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792840537,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=27912a0c13a97c41d04d04aee7c6c5c88e071f73b74dfd75c33c7c4b56444663",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "26b205c85c87f0cad45d",
          "headline": "Gene Munster는 Apple의 2,200달러 iPhone Duo가 FY27 매출에 80억 달러를 추가할 수 있다고 말하며 월스트리트에서는 1,200만 대만 판매할 것으로 예상하지만 판매량은 2,000만 대에 이를 것으로 예상합니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792833865,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=182ca79959d073e876032410bacd485123127bbe719ba84801ff17764afc70ca",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "가격 전가 시 마진 방어, 판매량·교체주기 둔화 위험"
        },
        {
          "eventId": "069ca67e5f81e5ea6610",
          "headline": "애플은 아이폰 듀오 목표를 44% 높인 것으로 알려졌다. 11월 2일에 보여줄 내용은 다음과 같습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792701125,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4fe983b29a7fa808125e898fb5812a9bb07bb8e5b67c2d399786bc6e494da761",
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
      "updatedAt": 1792961189.7794166,
      "dataAsOf": 1792943780,
      "signal": "주의 강화",
      "netScore": -7.06,
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
          "score": -2.45,
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
          "eventId": "a16915a720c170a4ae05",
          "headline": "테슬라 주가는 지난 1년 동안 17% 하락했습니다. 지금 구매하시겠습니까, 아니면 합병 조건을 기다리시겠습니까?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1792943780,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b3c89122110add7d74f1affeb876cba3598762726351c4836ae6f87c9014f312",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "eb9459fa997f997c1782",
          "headline": "우리는 Tesla가 수익을 보고하기 전에 한 가지 주요 지표에 실패하고 있다는 것을 이미 알고 있습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1792854496,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=089273b300d8bbbafc85d89a4814e17f2092ec32885eeb9cd461b50c64c23b77",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "08e47ddcd9e20f2cc6fe",
          "headline": "Tesla(TSLA), 28억 달러 규모의 AI 구성 요소 베팅으로 세미 볼륨 생산 시작",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792807907,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e3e0ad7ae6a9bbaedaa80e3a437cc0401075f210f16a7033e2257a8cb8c5a594",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "22aa48b84d3b9d120858",
          "headline": "Tesla 주식은 '통신 문제'로 인해 Apple보다 뒤처져 있다고 투자자 Gary Black이 말했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792789916,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1a32ae511329471acda20b1207114e05fe001cf6483bfd786481844cbe82e4f7",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "a3d31ae5e0ba2a8f4a94",
          "headline": "SpaceX 제출로 Elon Musk에게 Tesla 합병에 대한 최종 결정이 내려졌습니다. 그는 자신이 참여하지 않는다고 말했습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792784162,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ea2a4845b828d92fce5ab0d37e56e9af099815355b6e84e1166040e0a71b91cd",
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
      "updatedAt": 1792961189.7794166,
      "dataAsOf": 1792927477,
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
          "eventId": "2920ebab02ebc97dfaf9",
          "headline": "IO 펀드에 따르면 AI 부채가 4배 증가하여 거의 5000억 달러에 이르렀습니다. NVDA, ORCL 및 CRWV에 미치는 영향",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1792927477,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c6150d3bf4e767a2ddf4ad75e4fca0f20042666d1ebbf5a30866306b60176e37",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 매출 기회와 FCF·부채·신용 부담이 동시에 존재"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "CRM": {
      "ticker": "CRM",
      "updatedAt": 1792961189.7794166,
      "dataAsOf": 1792774202,
      "signal": "주의 강화",
      "netScore": -7.97,
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
          "eventId": "cce31b057b76a97d3ea0",
          "headline": "Adobe vs. Salesforce: 2026년에는 어떤 기술 주식을 구매하는 것이 더 나은가요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792774202,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f49a272cc03038a6e1b688918fccee4a86534e8a38346934596b0f42a99edfaa",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "3cd4c78a990546c5bcdc",
          "headline": "Arista Networks vs. Salesforce: 2026년에는 어떤 기술 주식을 구매하는 것이 더 낫습니까?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792770602,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1da8e6df2ebc69e9b8829b4b544cb7eb2546b3bf3fdf4176abececb829e1f2b5",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "7600b42a0a34960de031",
          "headline": "Salesforce vs. Snowflake: 2026년에는 어떤 기술 주식이 더 나은 구매입니까?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792763160,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5b4e9b48ff49bcada303c228f0020bcc4e16eae8efb2e2ce9c536b1677620213",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "96d2e0f3fb7f1bc32ecf",
          "headline": "세일즈포스(Salesforce), 브레이즈(Braze)를 56억 6천만 달러에 인수, 실시간 AI 마케팅에 큰 투자",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1792706659,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=74e124eda8c1df35aebf0bb40906effc59c72eaac163cc4776960e0249dfd754",
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
    "PLTR": {
      "ticker": "PLTR",
      "updatedAt": 1792961189.7794166,
      "dataAsOf": 1792932000,
      "signal": "우호적 변화",
      "netScore": 3.5,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.7,
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
          "eventId": "b1fd73af45415ec2a420",
          "headline": "Palantir에 대한 10,000달러 투자의 10년 가치는 다음과 같습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1792932000,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b7473520102c4f2e1b464e633f28967a526e4ca1e0be27f28f465fa9a435d4b6",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "9d12140e63e4d9c96371",
          "headline": "2030년까지 Palantir에 대한 10,000달러 투자의 가치는 얼마나 될까요?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1792830000,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=46ce6ffe4a26d789cfa8f77240a528f1457346fbbf2c454cbf334d23fa534f9a",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "0a643cb215f54289ea42",
          "headline": "Palantir Technologies(PLTR) Sovereign AI 푸시는 투자자에게 무엇을 의미합니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792811837,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cdcf8c5f45d6281277d3bdcee92f9c8389a1f334047fdc0b0ceddeda9c5f6160",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 3,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "NVDA": {
      "ticker": "NVDA",
      "updatedAt": 1792961189.7794166,
      "dataAsOf": 1792949109,
      "signal": "우호적 변화",
      "netScore": 7.62,
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
          "eventId": "154729d0d257b08eef3e",
          "headline": "인텔 대 SK 하이닉스: 투자자가 어떤 인공 지능 주식을 구매할지 판단하는 데 도움이 되는 수익 추세",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792949109,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ffda0ae6e8520210cae6d7e706dc0a11f6912ff37f403783eb40dd7bea6cd486",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "69e98b68f91250f58b38",
          "headline": "10월 29일 아마존 주식 상승을 기다리는 숨겨진 4,960억 달러 규모의 촉매제",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792942960,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=10187a79977d4acbf854087795bdc83210ab8356095addc7a8b0c165e001910e",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "2920ebab02ebc97dfaf9",
          "headline": "IO 펀드에 따르면 AI 부채가 4배 증가하여 거의 5000억 달러에 이르렀습니다. NVDA, ORCL 및 CRWV에 미치는 영향",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1792927477,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c6150d3bf4e767a2ddf4ad75e4fca0f20042666d1ebbf5a30866306b60176e37",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "데이터센터 투자 지속 시 AI 컴퓨팅 수요 유지 가능성"
        },
        {
          "eventId": "19fc019461d6228c1728",
          "headline": "Nvidia vs. Micron: AI 혁명은 두 가지 모두에 충분합니다. 여기 Better Buy가 있습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1792918200,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c7f8b3736eb34125a994ef4bc47883e05c8d15c38cc1ae03ff4c2d868da3ba72",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "1d68ab84a463ff9c84f7",
          "headline": "AI 전력 수요 재설정이 Vistra 주식의 투자 사례를 변화시키고 있습니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792905293,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=43e2c8616ca969b4ed6c743d95569aea43e8f0b3d8aea6d79ed516dea9cf0dd2",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "b89ee5d8175fba969c6e",
          "headline": "Nvidia의 Jensen Huang은 AI 에이전트가 토큰을 보냈고 GPU 수요가 '지붕을 통해' 전달되었다고 말합니다. Gene Munster는 1,500만 명의 봇 사용자가 수십억 명으로 급증하는 것을 목격했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792891810,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=53d5b4925b86e394413a8018407c2c70bb5b459ac95e8332f86ded3254b58ddc",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "fce12bdb500e6ef65eed",
          "headline": "AI 자금 조달 지연으로 인해 Coherent(COHR)의 투자 내러티브가 바뀌었나요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792890644,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=82732403fc037d86be6b3c5de666422d862d069925fbc62e663d70c4997bbf1f",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "af15fb89470083c42c5b",
          "headline": "AMD 주식 구매를 방해하는 1가지 위험 신호",
          "eventLabel": "실적 발표",
          "publishedAt": 1792889640,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d941c616c2c9aa9cca36c937e875fa72de63a915c3365a21d944f24bbce159a7",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "e7522f79a518b6bb5f61",
          "headline": "Microsoft의 500억 달러 도박: Microsoft의 Azure 성장이 폭발적인 AI 예산을 정당화할 수 있습니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792856692,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=462d506daf87fa9ab117043be3ad0dd2db1dbe8bba48c4a690402ae71a268a60",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "15ab4ad8861de3226739",
          "headline": "5,000억 달러 규모의 질문: Google Cloud의 대규모 AI 백로그가 10월 28일의 놀라운 CapEx 폭증을 능가할 수 있을까요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792856379,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6d65834427dc3cebc708845159aa36a7ea4fb3df40e00dec398f382c5d475804",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "534ea63d3376cc042e4e",
          "headline": "Amazon은 AWS가 벌어들인 수익보다 지난 분기에 데이터 센터에 더 많은 비용을 지출했습니다. 투자자들이 걱정해야 할까요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792841701,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4617dfd0827df2553d31a9ed63ea15e07d92a4690d1ea9d3d77321ab1a2795ff",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "0e0ed93ce8e90e9da3f9",
          "headline": "예측: Nvidia에 투자한 월 200달러는 2035년까지 이만큼 가치가 있을 것입니다",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792841520,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7bff65cf35cdd77566a18fc7149acc2dc2eca3b50c47a9d24bb40916a6759bc1",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 34,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMD": {
      "ticker": "AMD",
      "updatedAt": 1792961189.7794166,
      "dataAsOf": 1792949109,
      "signal": "우호적 변화",
      "netScore": 7.79,
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
          "eventId": "154729d0d257b08eef3e",
          "headline": "인텔 대 SK 하이닉스: 투자자가 어떤 인공 지능 주식을 구매할지 판단하는 데 도움이 되는 수익 추세",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792949109,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ffda0ae6e8520210cae6d7e706dc0a11f6912ff37f403783eb40dd7bea6cd486",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "69e98b68f91250f58b38",
          "headline": "10월 29일 아마존 주식 상승을 기다리는 숨겨진 4,960억 달러 규모의 촉매제",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792942960,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=10187a79977d4acbf854087795bdc83210ab8356095addc7a8b0c165e001910e",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "6ccc44a35e0a76cde141",
          "headline": "2030년까지 Nvidia, AMD, Broadcom에 동일하게 투자한 10,000달러의 가치는 다음과 같습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792935300,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e79f7f843040d301b578346a1e7f88a5d68bfd0ca166081ed49d7be1c1b07875",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "c2bc8882951f04e959df",
          "headline": "AMD 주식은 올해 131% 상승했습니다. 1조 달러 실행 후의 위치는 다음과 같습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1792933659,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f2fdb5171c5ea4aba65cd77a4f4da281c7313d7ba6679ee6852d8b4f2dc1f966",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "1d68ab84a463ff9c84f7",
          "headline": "AI 전력 수요 재설정이 Vistra 주식의 투자 사례를 변화시키고 있습니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792905293,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=43e2c8616ca969b4ed6c743d95569aea43e8f0b3d8aea6d79ed516dea9cf0dd2",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "b89ee5d8175fba969c6e",
          "headline": "Nvidia의 Jensen Huang은 AI 에이전트가 토큰을 보냈고 GPU 수요가 '지붕을 통해' 전달되었다고 말합니다. Gene Munster는 1,500만 명의 봇 사용자가 수십억 명으로 급증하는 것을 목격했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792891810,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=53d5b4925b86e394413a8018407c2c70bb5b459ac95e8332f86ded3254b58ddc",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "fce12bdb500e6ef65eed",
          "headline": "AI 자금 조달 지연으로 인해 Coherent(COHR)의 투자 내러티브가 바뀌었나요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792890644,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=82732403fc037d86be6b3c5de666422d862d069925fbc62e663d70c4997bbf1f",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "e7522f79a518b6bb5f61",
          "headline": "Microsoft의 500억 달러 도박: Microsoft의 Azure 성장이 폭발적인 AI 예산을 정당화할 수 있습니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792856692,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=462d506daf87fa9ab117043be3ad0dd2db1dbe8bba48c4a690402ae71a268a60",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "15ab4ad8861de3226739",
          "headline": "5,000억 달러 규모의 질문: Google Cloud의 대규모 AI 백로그가 10월 28일의 놀라운 CapEx 폭증을 능가할 수 있을까요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792856379,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6d65834427dc3cebc708845159aa36a7ea4fb3df40e00dec398f382c5d475804",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "534ea63d3376cc042e4e",
          "headline": "Amazon은 AWS가 벌어들인 수익보다 지난 분기에 데이터 센터에 더 많은 비용을 지출했습니다. 투자자들이 걱정해야 할까요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792841701,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4617dfd0827df2553d31a9ed63ea15e07d92a4690d1ea9d3d77321ab1a2795ff",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "1c860fc6cf8b3a7fe0b8",
          "headline": "Oracle(ORCL), 파트너 AI 성장에 10억 달러 투자 약속",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792836943,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=bab35c9f670bf3bdca1fdea2e83bd1a5cd224758d9339017a5723266b76bfc02",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "0a643cb215f54289ea42",
          "headline": "Palantir Technologies(PLTR) Sovereign AI 푸시는 투자자에게 무엇을 의미합니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792811837,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cdcf8c5f45d6281277d3bdcee92f9c8389a1f334047fdc0b0ceddeda9c5f6160",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 27,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AVGO": {
      "ticker": "AVGO",
      "updatedAt": 1792961189.7794166,
      "dataAsOf": 1792935300,
      "signal": "주의 강화",
      "netScore": -3.22,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
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
          "score": -2.45,
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
          "eventId": "6ccc44a35e0a76cde141",
          "headline": "2030년까지 Nvidia, AMD, Broadcom에 동일하게 투자한 10,000달러의 가치는 다음과 같습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792935300,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e79f7f843040d301b578346a1e7f88a5d68bfd0ca166081ed49d7be1c1b07875",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "180d3d7b136dcec8e21f",
          "headline": "브로드컴 주가는 1년 만에 7% 하락했다. 이유가 있어서 저렴합니까 아니면 무시하기에는 너무 저렴합니까?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1792864453,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7b7a02c5e2d96788542778e3db38bff7062b38eb3cc1e82e81eada4fabc9b5bd",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "e41664a8387f4b474e9c",
          "headline": "Broadcom 대 Dell Technologies: 2026년에 AI가 더 나은 구매를 가능하게 하는 주식은 무엇입니까?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792863644,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=95a5e9f09f9e4e6b6b9ca6f4f4af28515ec08ea91b72c0c1767a009d6001c1a1",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "4475725c166edd8a3245",
          "headline": "예측: Nvidia는 향후 5년 동안 Broadcom을 능가할 것입니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792789501,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=66256381411d99cd7083b0b026b36dd3034d7e8981ef344027c64ed2a7d2c1a2",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "0ff5c1012519558f5ac3",
          "headline": "AMD 또는 Broadcom: 2030년까지 AI 칩 주식을 1개만 소유할 수 있다면 여기 선택하세요",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1792768800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2e843060d2c10ea262cf0f3e2ba757c1b8084bd6d5f7b6864913fa96743e3478",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "2ea5adbd89550e882b24",
          "headline": "동일한 플레이북, 다른 실리콘: Broadcom이 왕좌를 차지하고 Marvell이 AMD 도전자를 맡습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1792759558,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=bdbc592301e26d867ac10077a02cac0747c960de442e10ee4e4d1bd10f32b4ee",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "4a8bd96a453139ede239",
          "headline": "10년간의 VMware 거래 후 칩 주가가 하락하면서 Broadcom 주가는 4% 하락했습니다. 월스트리트의 표적이 말하는 것은 다음과 같습니다",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792718977,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=25924971557454c65f4a79283c5c7f91dc242612787f2f184a8a70a61f49dada",
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
    "QCOM": {
      "ticker": "QCOM",
      "updatedAt": 1792961189.7794166,
      "dataAsOf": 1792853501,
      "signal": "주의 강화",
      "netScore": -5.66,
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
          "eventId": "8459930a96df67ef6057",
          "headline": "애플 아이폰18 프로 수요 약세? Jefferies, 배송 시간 단축 및 주문 삭감 보고",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792853501,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0f9d8afb174bf7814a0e3ec521c3eeada07c93e767d2da8d5204b1f271a900bb",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "스마트폰 수요가 줄면 고객 칩 수요에 부담"
        },
        {
          "eventId": "26b205c85c87f0cad45d",
          "headline": "Gene Munster는 Apple의 2,200달러 iPhone Duo가 FY27 매출에 80억 달러를 추가할 수 있다고 말하며 월스트리트에서는 1,200만 대만 판매할 것으로 예상하지만 판매량은 2,000만 대에 이를 것으로 예상합니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792833865,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=182ca79959d073e876032410bacd485123127bbe719ba84801ff17764afc70ca",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "스마트폰 수요가 줄면 고객 칩 수요에 부담"
        },
        {
          "eventId": "069ca67e5f81e5ea6610",
          "headline": "애플은 아이폰 듀오 목표를 44% 높인 것으로 알려졌다. 11월 2일에 보여줄 내용은 다음과 같습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792701125,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4fe983b29a7fa808125e898fb5812a9bb07bb8e5b67c2d399786bc6e494da761",
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
      "updatedAt": 1792961189.7794166,
      "dataAsOf": 1792773000,
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
          "eventId": "2c101d8ace9d232629d0",
          "headline": "Wells Fargo, Arm, Intuit는 이의 제기가 22에 도달함에 따라 OKX-ICE 토큰 장소에서 재고를 유지합니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792773000,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ed00ce10a6aefbd8fea166230eb17a8f9840cb5694770e26e9c54ebda2b653f3",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "32728da9c444c9658550",
          "headline": "Arm의 기성 청사진: Marvell의 Challenger Crown에 대한 청사진 공격",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1792759557,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6422e624202293c818b0014a49a90c6a1b51a77fac351d07cbfe06c3c660f3aa",
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
    "MRVL": {
      "ticker": "MRVL",
      "updatedAt": 1792961189.7794166,
      "dataAsOf": 1792773903,
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
          "eventId": "537df95da4138a28f5e0",
          "headline": "Marvell Technology, 대만의 맞춤형 실리콘 생태계와 다각적인 전쟁에 직면",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1792773903,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=72bda33fa34a1a399917ea1cd84f4e7e0e44c6793edc57c665f6cf3cfe8b03b9",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "2ea5adbd89550e882b24",
          "headline": "동일한 플레이북, 다른 실리콘: Broadcom이 왕좌를 차지하고 Marvell이 AMD 도전자를 맡습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1792759558,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=bdbc592301e26d867ac10077a02cac0747c960de442e10ee4e4d1bd10f32b4ee",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "32728da9c444c9658550",
          "headline": "Arm의 기성 청사진: Marvell의 Challenger Crown에 대한 청사진 공격",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1792759557,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6422e624202293c818b0014a49a90c6a1b51a77fac351d07cbfe06c3c660f3aa",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 3,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "INTC": {
      "ticker": "INTC",
      "updatedAt": 1792961189.7794166,
      "dataAsOf": 1792767000,
      "signal": "중립·확인 대기",
      "netScore": -0.43,
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
          "score": -1.05,
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
          "eventId": "8d419f959c60efc6096d",
          "headline": "인텔이 아닙니다. CoreWeave가 아닙니다. 저평가된 Nvidia 지원 회사는 인공 지능(AI) 수익을 123% 성장시키고 있습니다. 오늘 이 제품을 8달러에 구매해야 하는 이유는 다음과 같습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792767000,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=62658832c5c0472b4548f80863502bf78b11ed4ffd94b8f7f7faba61c7821e69",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "a2d36c3fcc375f11d137",
          "headline": "The Foundry Disconnect: Intel은 트랜지스터를 압도하지만 TSMC는 생산량과 확장의 열쇠를 쥐고 있습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792754158,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fbca34c34dde68eada86d9fca42fbd0932fd97b7b5a19e23c6f2ef800dafddee",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "fecc0baa58060faedaa7",
          "headline": "AI 에이전트에 CPU가 필요한 이유는 무엇입니까? Nvidia가 AMD와 Intel이 지배하는 비즈니스에 참여하기를 원하는 이유",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792693500,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=880f03ba7e81048e0aebf80b9e558d26a95dadedeeeb78a657d262fb3ef5dfaa",
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
    "TSM": {
      "ticker": "TSM",
      "updatedAt": 1792961189.7794166,
      "dataAsOf": 1792815600,
      "signal": "우호적 변화",
      "netScore": 2.03,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.4,
          "level": "우호적"
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
          "score": -1.22,
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
          "eventId": "d2a9a92bdeb0a1221d11",
          "headline": "TSMC 또는 Nvidia: 향후 5년 동안 1개만 소유할 수 있다면 이 1개를 선택할 것입니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792815600,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ad89f690c50c89b4e20fc0ddbef098ae4bd22de2dedc3344e9fa4879ebde00bb",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "fb5f4ce4cbf2c86f1045",
          "headline": "대만반도체(TSMC)가 사상 최대 이익을 기록했는데 주가는 여전히 하락세다. 시장이 우려하는 점은 다음과 같습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792776900,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=bbc49cb5517d4801b8399f740d13de056ad70ebea77ddefb967c8866f3281ab6",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "68838d86e5c5477b30ea",
          "headline": "Taiwan Semiconductor, 5년 이내에 글로벌 컴퓨팅의 필수 유틸리티로 전환할 예정",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1792773956,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=512871a23628f1859b7b1f40b847137828cc152d2c94711d4c18dce546770685",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "a2d36c3fcc375f11d137",
          "headline": "The Foundry Disconnect: Intel은 트랜지스터를 압도하지만 TSMC는 생산량과 확장의 열쇠를 쥐고 있습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792754158,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fbca34c34dde68eada86d9fca42fbd0932fd97b7b5a19e23c6f2ef800dafddee",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "3a83d33bc4365b959c21",
          "headline": "Taiwan Semiconductor는 SpaceX의 Terafab에 참여하기를 원하지만 Fab를 운영하는 경우에만 가능합니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1792686519,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=89838a397678ea0df1ea24ff84ad059096bc78044f5c5240c276388eb1239621",
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
    "ASML": {
      "ticker": "ASML",
      "updatedAt": 1792961189.7794166,
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
      "updatedAt": 1792961189.7794166,
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
      "updatedAt": 1792961189.7794166,
      "dataAsOf": 1792787653,
      "signal": "중립·확인 대기",
      "netScore": 1.74,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
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
          "eventId": "1d63f50adf7b5e49ba48",
          "headline": "Lam Research의 공급 경고로 인해 AMD 주가는 하루 만에 8% 하락했습니다. 2030년까지 주식이 갈 수 있는 곳은 다음과 같습니다",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792787653,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c279a5197a081aaeca47e16b01468efee216c282c483f7927ea000767d794d58",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ac53770c2841f839eb28",
          "headline": "Lam Research의 공급 경고로 인해 AMD 주가는 하루 만에 8% 하락했습니다. 2030년까지 주식이 갈 수 있는 곳은 다음과 같습니다",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1792787653,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c279a5197a081aaeca47e16b01468efee216c282c483f7927ea000767d794d58",
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
    "KLAC": {
      "ticker": "KLAC",
      "updatedAt": 1792961189.7794166,
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
      "updatedAt": 1792961189.7794166,
      "dataAsOf": 1792949109,
      "signal": "우호적 변화",
      "netScore": 6.56,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.4,
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
          "eventId": "154729d0d257b08eef3e",
          "headline": "인텔 대 SK 하이닉스: 투자자가 어떤 인공 지능 주식을 구매할지 판단하는 데 도움이 되는 수익 추세",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792949109,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ffda0ae6e8520210cae6d7e706dc0a11f6912ff37f403783eb40dd7bea6cd486",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "69e98b68f91250f58b38",
          "headline": "10월 29일 아마존 주식 상승을 기다리는 숨겨진 4,960억 달러 규모의 촉매제",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792942960,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=10187a79977d4acbf854087795bdc83210ab8356095addc7a8b0c165e001910e",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "19fc019461d6228c1728",
          "headline": "Nvidia vs. Micron: AI 혁명은 두 가지 모두에 충분합니다. 여기 Better Buy가 있습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1792918200,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c7f8b3736eb34125a994ef4bc47883e05c8d15c38cc1ae03ff4c2d868da3ba72",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "1d68ab84a463ff9c84f7",
          "headline": "AI 전력 수요 재설정이 Vistra 주식의 투자 사례를 변화시키고 있습니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792905293,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=43e2c8616ca969b4ed6c743d95569aea43e8f0b3d8aea6d79ed516dea9cf0dd2",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "b89ee5d8175fba969c6e",
          "headline": "Nvidia의 Jensen Huang은 AI 에이전트가 토큰을 보냈고 GPU 수요가 '지붕을 통해' 전달되었다고 말합니다. Gene Munster는 1,500만 명의 봇 사용자가 수십억 명으로 급증하는 것을 목격했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792891810,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=53d5b4925b86e394413a8018407c2c70bb5b459ac95e8332f86ded3254b58ddc",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "fce12bdb500e6ef65eed",
          "headline": "AI 자금 조달 지연으로 인해 Coherent(COHR)의 투자 내러티브가 바뀌었나요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792890644,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=82732403fc037d86be6b3c5de666422d862d069925fbc62e663d70c4997bbf1f",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "e7522f79a518b6bb5f61",
          "headline": "Microsoft의 500억 달러 도박: Microsoft의 Azure 성장이 폭발적인 AI 예산을 정당화할 수 있습니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792856692,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=462d506daf87fa9ab117043be3ad0dd2db1dbe8bba48c4a690402ae71a268a60",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "15ab4ad8861de3226739",
          "headline": "5,000억 달러 규모의 질문: Google Cloud의 대규모 AI 백로그가 10월 28일의 놀라운 CapEx 폭증을 능가할 수 있을까요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792856379,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6d65834427dc3cebc708845159aa36a7ea4fb3df40e00dec398f382c5d475804",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "8459930a96df67ef6057",
          "headline": "애플 아이폰18 프로 수요 약세? Jefferies, 배송 시간 단축 및 주문 삭감 보고",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792853501,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0f9d8afb174bf7814a0e3ec521c3eeada07c93e767d2da8d5204b1f271a900bb",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리 ASP와 이익률 개선 가능성"
        },
        {
          "eventId": "4193e3e353efd16577ca",
          "headline": "Micron vs. Sandisk: 향후 3년 동안 소유하기에 더 나은 AI 메모리 주식은 무엇입니까?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792848120,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d627462707f65e24da45a912bf4ce3bdce437c9ebc1878c538bcff167e9a5c75",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "c8e0de7e74c1d213f8b7",
          "headline": "마이크론의 대만 부대는 타이중 연합과 거래에 도달했습니다. 알아두어야 할 사항은 다음과 같습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792842320,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=81eee644487bcbcdc871acfe03e1a9a5da68753e2033b16a7ad7b07f8d42c852",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "534ea63d3376cc042e4e",
          "headline": "Amazon은 AWS가 벌어들인 수익보다 지난 분기에 데이터 센터에 더 많은 비용을 지출했습니다. 투자자들이 걱정해야 할까요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792841701,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4617dfd0827df2553d31a9ed63ea15e07d92a4690d1ea9d3d77321ab1a2795ff",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 29,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "SNDK": {
      "ticker": "SNDK",
      "updatedAt": 1792961189.7794166,
      "dataAsOf": 1792941987,
      "signal": "주의 강화",
      "netScore": -5.6,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
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
          "eventId": "77eb5e2f1d6720288cdc",
          "headline": "AI 스토리지 붐은 끝났는가? SanDisk의 10월 29일 수익이 의심하는 사람들이 틀렸다는 것을 증명할 수 있는 이유",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1792941987,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0ec9456e3ee3dfc9864d1937e852cc3861caba4d07bcbefd022e1b1e4ca653ab",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "7097fb0f903e9b7887f9",
          "headline": "Sandisk(SNDK)는 메모리 생산 일정이 단축됨에 따라 업계 공급망 제약을 지적합니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792940977,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b2e3e40a388efdd821a35cfb48c97aabeb1dee227981cd8ba0d5f3d7feb4eee1",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "f23f68dad15fbb804f85",
          "headline": "Sandisk의 새로운 비즈니스 모델이 비즈니스를 변화시키고 있습니다. 이제 주식을 매수할 시간입니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1792854300,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a53850a2acd32a2dbc4efb7e549edb67327c15902755354e44283233eb73b6f9",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "4193e3e353efd16577ca",
          "headline": "Micron vs. Sandisk: 향후 3년 동안 소유하기에 더 나은 AI 메모리 주식은 무엇입니까?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792848120,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d627462707f65e24da45a912bf4ce3bdce437c9ebc1878c538bcff167e9a5c75",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "f58842d2b6cd7492d71a",
          "headline": "예측: 이 메모리 주식에 대한 10,000달러 투자는 2030년까지 두 배로 증가할 것입니다(힌트: Micron이나 Sandisk가 아닙니다).",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792770361,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0428fc32483455473d87e00b2a233501cd59170afe70a9b1bd2d1343e1c67271",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "6bc0534703df5a2a2a97",
          "headline": "더 나은 메모리 재고: Micron 대 Sandisk",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1792746240,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=940739524acba0d8f2b5e26d880ba582742a081c819751c86648ca6ba4ca158c",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "37531818a1c6b371824f",
          "headline": "SanDisk 주식의 높은 현금 수익률이 왜 그렇게 적은 신용을 얻습니까?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1792697297,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=924c8f0aa88642cd187ffff2b18fd91a40f6f957043807c5fbfab9db70f513d7",
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
    "WDC": {
      "ticker": "WDC",
      "updatedAt": 1792961189.7794166,
      "dataAsOf": 1792853501,
      "signal": "주의 강화",
      "netScore": -5.88,
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
          "eventId": "8459930a96df67ef6057",
          "headline": "애플 아이폰18 프로 수요 약세? Jefferies, 배송 시간 단축 및 주문 삭감 보고",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792853501,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0f9d8afb174bf7814a0e3ec521c3eeada07c93e767d2da8d5204b1f271a900bb",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리·스토리지 가격 강세 수혜 가능성"
        },
        {
          "eventId": "26b205c85c87f0cad45d",
          "headline": "Gene Munster는 Apple의 2,200달러 iPhone Duo가 FY27 매출에 80억 달러를 추가할 수 있다고 말하며 월스트리트에서는 1,200만 대만 판매할 것으로 예상하지만 판매량은 2,000만 대에 이를 것으로 예상합니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792833865,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=182ca79959d073e876032410bacd485123127bbe719ba84801ff17764afc70ca",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리·스토리지 가격 강세 수혜 가능성"
        },
        {
          "eventId": "6363bda94e2a577ce827",
          "headline": "WDC의 가격 주도 수익이 월스트리트를 분열시킵니다. 분석가들은 Capex 증가, 잠재적 공급 증가로 인해 가치 평가에 압력을 가할 수 있다고 경고합니다",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792757199,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e53156d529525947dd10c3b1126b5be4bbe223b0aecbc24ca82b9f26208b8969",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "1dbb3d9feb5257d03a76",
          "headline": "Nasdaq, Dow, S&P 500 선물 하락 프리마켓: NVDA, AMD, META, CRWV, MRNA, WDC, BE In Focus",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1792750428,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5922972d586f65fcf83214c46c06e90ef1c3a8fbb7f6857fb86f2fb48028df32",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "069ca67e5f81e5ea6610",
          "headline": "애플은 아이폰 듀오 목표를 44% 높인 것으로 알려졌다. 11월 2일에 보여줄 내용은 다음과 같습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792701125,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4fe983b29a7fa808125e898fb5812a9bb07bb8e5b67c2d399786bc6e494da761",
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
      "updatedAt": 1792961189.7794166,
      "dataAsOf": 1792770602,
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
          "eventId": "3cd4c78a990546c5bcdc",
          "headline": "Arista Networks vs. Salesforce: 2026년에는 어떤 기술 주식을 구매하는 것이 더 낫습니까?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792770602,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1da8e6df2ebc69e9b8829b4b544cb7eb2546b3bf3fdf4176abececb829e1f2b5",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "22db549ff920e633c8a7",
          "headline": "Adobe vs. Arista Networks: 2026년에는 어떤 기술주를 구매하는 것이 더 나은가요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792720742,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ab7306cd139a0f7b7da3c22533b6faf03dc94e3e784a9008f99b110bb361f507",
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
      "updatedAt": 1792961189.7794166,
      "dataAsOf": 1792890644,
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
          "eventId": "fce12bdb500e6ef65eed",
          "headline": "AI 자금 조달 지연으로 인해 Coherent(COHR)의 투자 내러티브가 바뀌었나요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792890644,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=82732403fc037d86be6b3c5de666422d862d069925fbc62e663d70c4997bbf1f",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "519ba20aef5115902769",
          "headline": "수익에 앞서 기술 매도가 심화되면서 광학 주가 하락: Coherent 하락 12%, Applied Optoelectronics 하락 10%, Lumentum 하락 9%",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792689005,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a27bbb91413423e8aebb42d3eb1f75d0733f821f6645cb3948e88f46eafbe471",
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
    "LITE": {
      "ticker": "LITE",
      "updatedAt": 1792961189.7794166,
      "dataAsOf": 1792689005,
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
          "eventId": "519ba20aef5115902769",
          "headline": "수익에 앞서 기술 매도가 심화되면서 광학 주가 하락: Coherent 하락 12%, Applied Optoelectronics 하락 10%, Lumentum 하락 9%",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792689005,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a27bbb91413423e8aebb42d3eb1f75d0733f821f6645cb3948e88f46eafbe471",
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
    "GEV": {
      "ticker": "GEV",
      "updatedAt": 1792961189.7794166,
      "dataAsOf": 1792932600,
      "signal": "주의 강화",
      "netScore": -3.57,
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
          "eventId": "254635ce3e3ac7f514f2",
          "headline": "GE Vernova의 가스 터빈이 붕괴되는 풍력 사업을 보완할 수 있습니까?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792932600,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b9f4e214c67d4d350598b51840974d3353b4a373d067102f2e0dd8bdb7e8af20",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "2cd6beedf57946c38bc6",
          "headline": "AI 파워 붐 부문에서 컨스텔레이션(Constellation), 비스트라(Vistra), GE 베르노바(Vernova)가 최악에서 1위로 올라섰다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792895700,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7389b6adbcd1822881abf2e633edb45ba19a2ccaaed63b9f0c8940d3a7e7110d",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "14b6536e8f2b34d5cfcb",
          "headline": "전원 공급 장치 거래로 인해 GE Vernova Stock (GEV) 에 대한 투자 사례가 변경될 수 있습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792868944,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=384c44c37ad6f9466bfb3500d0b55faf23baf9d62a3761b9dab6ba20ed9ad682",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "828657714d6da5d068d2",
          "headline": "Constellation Energy vs. GE Vernova: 2026년에는 어느 유틸리티 주식이 더 나은 매수인가?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792766325,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d5d921117474470ffa9f1e02eaddd10b48c4190d207f99b02cae8217c7d4d61d",
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
    "CEG": {
      "ticker": "CEG",
      "updatedAt": 1792961189.7794166,
      "dataAsOf": 1792935117,
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
          "eventId": "4307b66baec7b5f8e2dc",
          "headline": "Constellation Energy, Google에 890MW의 전력 공급 약속: “에너지 수요 증가”",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792935117,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4d5067116906b5db88cc2004a27199827c2d5893542ad3e82cd21cf8ef82d849",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "2cd6beedf57946c38bc6",
          "headline": "AI 파워 붐 부문에서 컨스텔레이션(Constellation), 비스트라(Vistra), GE 베르노바(Vernova)가 최악에서 1위로 올라섰다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792895700,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7389b6adbcd1822881abf2e633edb45ba19a2ccaaed63b9f0c8940d3a7e7110d",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "828657714d6da5d068d2",
          "headline": "Constellation Energy vs. GE Vernova: 2026년에는 어느 유틸리티 주식이 더 나은 매수인가?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792766325,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d5d921117474470ffa9f1e02eaddd10b48c4190d207f99b02cae8217c7d4d61d",
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
    "VST": {
      "ticker": "VST",
      "updatedAt": 1792961189.7794166,
      "dataAsOf": 1792934777,
      "signal": "주의 강화",
      "netScore": -2.09,
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
          "score": -0.7,
          "level": "중립"
        }
      },
      "evidence": [
        {
          "eventId": "b17c138720faa10aa6a2",
          "headline": "Vistra는 42억 달러의 핵 대출 제안에도 불구하고 3개월 만에 17% 하락",
          "eventLabel": "내부자 매도",
          "publishedAt": 1792934777,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a7bb8ff404a7f98d7d3f738d46344eaed2936c6ef6d47f52945cd530fda68ab0",
          "factorChanges": {
            "insiderSignal": -2,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "1d68ab84a463ff9c84f7",
          "headline": "AI 전력 수요 재설정이 Vistra 주식의 투자 사례를 변화시키고 있습니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792905293,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=43e2c8616ca969b4ed6c743d95569aea43e8f0b3d8aea6d79ed516dea9cf0dd2",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "2cd6beedf57946c38bc6",
          "headline": "AI 파워 붐 부문에서 컨스텔레이션(Constellation), 비스트라(Vistra), GE 베르노바(Vernova)가 최악에서 1위로 올라섰다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792895700,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7389b6adbcd1822881abf2e633edb45ba19a2ccaaed63b9f0c8940d3a7e7110d",
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
    "ETN": {
      "ticker": "ETN",
      "updatedAt": 1792961189.7794166,
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
      "updatedAt": 1792961189.7794166,
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
      "updatedAt": 1792961189.7794166,
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
      "updatedAt": 1792961189.7794166,
      "dataAsOf": 1792698420,
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
          "eventId": "729fe10a55264aa65cb4",
          "headline": "Vertiv, Nvidia, AI 전력 및 냉각 설정 10주 감축 목표",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792698420,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8a50ebd79af547e0ca96287af0003f685083379d3157a8a03ca0ed9baa654b68",
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
      "updatedAt": 1792961189.7794166,
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
      "updatedAt": 1792961189.7794166,
      "dataAsOf": 1792848563,
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
          "eventId": "3677af8bb4a1be6cf99a",
          "headline": "10월 27일 Seagate의 1분기 수익 딜레마: 블록버스터 AI 데이터 수요 증가하는 공급 과잉 우려에 직면",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792848563,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5d62266aec8fdc8741a5ced41b17d6a17ec901d5f3b2fd86eefb661b8e95203c",
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
    "EME": {
      "ticker": "EME",
      "updatedAt": 1792961189.7794166,
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
      "updatedAt": 1792961189.7794166,
      "dataAsOf": 1792792807,
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
          "score": -0.87,
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
          "eventId": "b1dca53b08cd8e35fecf",
          "headline": "웨스 모스(Wes Moss)는 S&P 500 지수에서 100만 달러는 연간 배당금으로 12,000달러만 지불한다고 말했습니다. 여기 그의 해결책이 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792792807,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=781013207143a4352cd121910fcdebab291ca1f8e285f4635319060565edd2d2",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "60ff2adddc6c178966c4",
          "headline": "컴포트 시스템: 장기 투자자를 위한 3가지 핵심 사항",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1792785182,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7caac4fd11d3e0e36b79c0bb8c4ca58a32eb1dff087bfeec8de5e33a5c038ea2",
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
    "BE": {
      "ticker": "BE",
      "updatedAt": 1792961189.7794166,
      "dataAsOf": 1792922400,
      "signal": "중립·확인 대기",
      "netScore": -0.21,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
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
          "eventId": "bb955fec43a3ab242646",
          "headline": "Bloom Energy 주식은 5년 후에 어디에 있을까요?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1792922400,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6550b1b57d02f283c6d1999c9f3cd2c848b4ed307689d104ac1a5476a5590c14",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "efe2d8b9f3077ff1f4fe",
          "headline": "나는 그것을 부르고 있습니다: Bloom Energy가 AI Power Crunch의 가장 큰 승자가 될 것입니다. 한 가지 이유",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792834380,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=68266170d15255910a2f999beb3ec35887acca823edcf9903df351717e890cea",
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
    }
  }
};
