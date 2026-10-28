// 자동 생성 파일 - 중요 뉴스의 기업분석 반영
const EVENT_ANALYSIS_DATA = {
  "schemaVersion": 1,
  "generatedAt": 1793199633.0557368,
  "records": {
    "MSFT": {
      "ticker": "MSFT",
      "updatedAt": 1793199633.0557368,
      "dataAsOf": 1793186145,
      "signal": "중립·확인 대기",
      "netScore": -0.76,
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
          "eventId": "27a41ae54eb1b4210dfa",
          "headline": "마이크로소프트 대. 오라클: 동일한 양면 AI 전략, 매우 다른 결과",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1793186145,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=33ac2059882ca20c77fe9b8eff669cc99a60630d7df1cd9bd0948c2868c69025",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "deabac1f5ff11446f38a",
          "headline": "미국 주식 선물은 알파벳, 마이크로소프트 실적 및 연방준비은행 금리 결정에 앞서 혼합되어 있습니다: 다우존스, S&P, 나스닥, 월스트리트",
          "eventLabel": "실적 발표",
          "publishedAt": 1793184583,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0b298bdc438ebf3c9631dbd77989ac0e56ba470b6c67e539cd3b7220992dbbff",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "50d028bd8820e4bbd4c9",
          "headline": "약물 감시 글로벌 시장 보고서 2026의 인공 지능(AI) | Oracle, Microsoft, Google 및 IQVIA의 자동화 가속화에 따라 2030년까지 19.6% CAGR을 활용하세요.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793135400,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1c79530695d2e9d5090330d0bd015375fec18faf4d5acc083878152523df9e9b",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "134174a396b2d174bf08",
          "headline": "S&P 500, Nasdaq, Dow는 인류의 IPO 제출로 AI 열정이 다시 불붙으면서 한 주 상승 시작합니다 — MSFT, AAPL, CART, VZ In Focus",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793054116,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ec15ce234b3a6fa4a707d47de37778686a8c8b739674bb3c1618f1353725d7ee",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "5dfb13efc4e940739c2a",
          "headline": "기술 수익은 이번 주 시장의 가장 큰 이야기입니다. Microsoft, Amazon, Intel, SanDisk 및 Alphabet이 주식 시장의 다음 움직임을 주도할 이유는 다음과 같습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793049314,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3ba45970045d616ae03d3cc67e7f9f6059a35dc49bdd2be6aa520a0bc20af7bf",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "8e638e3e331c92115673",
          "headline": "정보 기술(IT) 탄력성 오케스트레이션 시장(2026-2030년) | Microsoft, IBM, Broadcom 및 ServiceNow Scale AI 및 하이브리드 클라우드를 통해 CAGR 14.2% 활용",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793025660,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cfba389128f954ca6adb426f83ff3a29bb5fbc790c04831aac1f2375937be56a",
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
      "updatedAt": 1793199633.0557368,
      "dataAsOf": 1793135400,
      "signal": "주의 강화",
      "netScore": -4.55,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.35,
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
          "score": -0.35,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": -0.7,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": -1.92,
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
          "eventId": "50d028bd8820e4bbd4c9",
          "headline": "약물 감시 글로벌 시장 보고서 2026의 인공 지능(AI) | Oracle, Microsoft, Google 및 IQVIA의 자동화 가속화에 따라 2030년까지 19.6% CAGR을 활용하세요.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793135400,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1c79530695d2e9d5090330d0bd015375fec18faf4d5acc083878152523df9e9b",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "c4e698970133db9942c8",
          "headline": "알파벳은 IPO 이후 훨씬 더 큰 인류 주주가 될 예정입니다",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1793121300,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=bf6ea8f3bd7f6835856d65a5c08a9d5f3e0cfab8d726456c45831c32229c2e55",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "623a3e8ef7487de487a5",
          "headline": "Google TPU가 Oracle Cloud에 도입되고 NVIDIA 거래가 확대되면서 Oracle은 5% 상승합니다. Amazon은 더 높이, Microsoft는 물을 밟습니다",
          "eventLabel": "경쟁사 공급 계약",
          "publishedAt": 1793120543,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=29dbc0190a0178f3062a1b2d470102d078e1059099fc920bd1e9c054722ef0e2",
          "factorChanges": {
            "competitiveRisk": -2,
            "customerConcentration": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ad4d734c20be0c3a8715",
          "headline": "YouTube의 기본 멀티모달 라이브러리 및 AI 검색 개요를 통해 알파벳을 필수 복합 도구로 만드는 이유",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793119528,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b4038dd6c203dbce76ec3aba75bea34f9b4d1accbe1a010b3e8459b18cdd4429",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "c2679528ff7b120bc332",
          "headline": "Applied Materials가 이중 지분으로 전환함에 따라 네덜란드 칩 회사 Besi의 주가가 급등했습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793104575,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=33ced5da9cc7ad273228ac4ba9aa0d136e83d4237871f220ffa9e14f0e59913f",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "134174a396b2d174bf08",
          "headline": "S&P 500, Nasdaq, Dow는 인류의 IPO 제출로 AI 열정이 다시 불붙으면서 한 주 상승 시작합니다 — MSFT, AAPL, CART, VZ In Focus",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793054116,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ec15ce234b3a6fa4a707d47de37778686a8c8b739674bb3c1618f1353725d7ee",
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
    "AMZN": {
      "ticker": "AMZN",
      "updatedAt": 1793199633.0557368,
      "dataAsOf": 1793184583,
      "signal": "중립·확인 대기",
      "netScore": 0.13,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.22,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 1.22,
          "level": "우호적"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": -0.7,
          "level": "중립"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": -0.35,
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
          "eventId": "deabac1f5ff11446f38a",
          "headline": "미국 주식 선물은 알파벳, 마이크로소프트 실적 및 연방준비은행 금리 결정에 앞서 혼합되어 있습니다: 다우존스, S&P, 나스닥, 월스트리트",
          "eventLabel": "실적 발표",
          "publishedAt": 1793184583,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0b298bdc438ebf3c9631dbd77989ac0e56ba470b6c67e539cd3b7220992dbbff",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ee74208df635fc767401",
          "headline": "FCC가 Amazon의 115억 달러 규모 Globalstar 거래를 승인함에 따라 ASTS 주가는 밤새 하락했습니다. — '더 많은 경쟁'을 선전합니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793151822,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4cd00fe8bb9f4aa068362cb45a75018321d46c732200588972cdd698b2534109",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "9fa96ad061741188d10f",
          "headline": "Amazon 백업 전원 거래는 Generac 주식의 전환점이 될 수 있습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793142561,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=256cbdf6c5f77640a5c22ccaf734183cdd3b50e25b097cc9cb2af3c1ca68baa5",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "d77545bd456a4580bd4d",
          "headline": "Amazon에는 Muse 문제가 있습니다. OpenAI와의 거래가 해결책인가요?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793133582,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3fab2c49048689f18d0bcc1a134bf541d18cc7d519e95a54b7703dc3e6ea2d69",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "623a3e8ef7487de487a5",
          "headline": "Google TPU가 Oracle Cloud에 도입되고 NVIDIA 거래가 확대되면서 Oracle은 5% 상승합니다. Amazon은 더 높이, Microsoft는 물을 밟습니다",
          "eventLabel": "경쟁사 공급 계약",
          "publishedAt": 1793120543,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=29dbc0190a0178f3062a1b2d470102d078e1059099fc920bd1e9c054722ef0e2",
          "factorChanges": {
            "competitiveRisk": -2,
            "customerConcentration": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "134174a396b2d174bf08",
          "headline": "S&P 500, Nasdaq, Dow는 인류의 IPO 제출로 AI 열정이 다시 불붙으면서 한 주 상승 시작합니다 — MSFT, AAPL, CART, VZ In Focus",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793054116,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ec15ce234b3a6fa4a707d47de37778686a8c8b739674bb3c1618f1353725d7ee",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "5dfb13efc4e940739c2a",
          "headline": "기술 수익은 이번 주 시장의 가장 큰 이야기입니다. Microsoft, Amazon, Intel, SanDisk 및 Alphabet이 주식 시장의 다음 움직임을 주도할 이유는 다음과 같습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793049314,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3ba45970045d616ae03d3cc67e7f9f6059a35dc49bdd2be6aa520a0bc20af7bf",
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
      "unverifiedEvidenceCount": 7,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "META": {
      "ticker": "META",
      "updatedAt": 1793199633.0557368,
      "dataAsOf": 1793185617,
      "signal": "우호적 변화",
      "netScore": 4.06,
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
          "score": -2.62,
          "level": "주의"
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
          "eventId": "e46c4e677003af3e07f5",
          "headline": "Meta의 250억 달러 주식 매각으로 수요가 5배 증가했습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793185617,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7f979e1c44d364d7795ed645bc4192e7912c2e3560cfa34e606e3092a49a4927",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "deabac1f5ff11446f38a",
          "headline": "미국 주식 선물은 알파벳, 마이크로소프트 실적 및 연방준비은행 금리 결정에 앞서 혼합되어 있습니다: 다우존스, S&P, 나스닥, 월스트리트",
          "eventLabel": "실적 발표",
          "publishedAt": 1793184583,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0b298bdc438ebf3c9631dbd77989ac0e56ba470b6c67e539cd3b7220992dbbff",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "50c441f459419033e5ce",
          "headline": "Meta는 AI 인프라 및 개인 초지능을 위해 950억 달러 규모의 자금 조달을 계획하고 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793184268,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d2633723fe816b277adbe98138964c611897bd7dd0363991b0eef83755568044",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "9a4101b4c4d4ce67275f",
          "headline": "메타는 일주일 만에 11% 손실을 입었습니다. Canaccord는 여기에서 53%의 상승 여력을 봅니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793182739,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=884c7f8be3e8996b7ef14343368fa8b2b3ebab646abc8eb13f10163406320867",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "c8c69a12043e90541850",
          "headline": "메타 플랫폼(META)은 AI 자금 조달 추진으로 인해 39% 저평가될 수 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793164321,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c894310163a226a851d957734e0fb0a7bf500a01f30087566df0b80a62c0c9d7",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "7c1dd8d3fc4a2cff5c7d",
          "headline": "오늘, 10월 27일 주식 시장: Meta는 AI 인프라 베팅 자금을 조달하기 위해 사상 최대 규모의 주식 공모를 약 980억 달러로 모금했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793137002,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d8a00036d046a15237a68479e7cf1e499c211e45810a35fe286c0604e4aab05b",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "3f90c262c84ed0e9571a",
          "headline": "NVIDIA가 메타를 구매하고 있습니다: 30억 달러 지분이 의미하는 것",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793136004,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=67efecb897dc4a3fe14157c8f0124022052a3997d1028ec4b6d4d9017d1a3618",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "60a0325467ecebcefad8",
          "headline": "엔비디아가 다시 킹메이커를 연기합니다. 메타 딜이 성공적인 움직임인 이유",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793127900,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=64712939297b331f84b9bb293235682efa51429bf4d9980a77c62192ffe4f7d5",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "839638d06b5258d2d16c",
          "headline": "AMD, Nvidia, Broadcom과의 Meta 거래: 순환 자금 조달이 위험합니까?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793120760,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=35d438f71fa2f3f9ec3898bf4045b2b9a3cec9794dd861ee5bc7b49cd4a5d01b",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "9a3787c4f406c893db89",
          "headline": "확장된 Meta AI 인프라 거래와 광범위한 칩 랠리로 AMD 주가 상승",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793119457,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c183bd39ed167d835da2c00b86089497740a2b65a2320004b926a989b2490495",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "c2679528ff7b120bc332",
          "headline": "Applied Materials가 이중 지분으로 전환함에 따라 네덜란드 칩 회사 Besi의 주가가 급등했습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793104575,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=33ced5da9cc7ad273228ac4ba9aa0d136e83d4237871f220ffa9e14f0e59913f",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "4bcda02334d58fcc7d70",
          "headline": "Nvidia는 Muse 파트너십을 통해 Meta에 30억 달러를 투자합니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793092981,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e06d8ceed6c42fef24ca5ecff6163453ab4268c7b6536ed12b0d2e8249ddc6f2",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 17,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AAPL": {
      "ticker": "AAPL",
      "updatedAt": 1793199633.0557368,
      "dataAsOf": 1793073602,
      "signal": "주의 강화",
      "netScore": -5.04,
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
          "eventId": "782741833fe3ca0b7b14",
          "headline": "Apple vs. Taiwan Semiconductor: 2026년에는 어느 기술주를 매수하는 것이 더 나을까요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793073602,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=eb24a3a7512e1ce06571eef5a093573db91ecc49f7feeb81e80f5dd4bfd5d2f2",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "134174a396b2d174bf08",
          "headline": "S&P 500, Nasdaq, Dow는 인류의 IPO 제출로 AI 열정이 다시 불붙으면서 한 주 상승 시작합니다 — MSFT, AAPL, CART, VZ In Focus",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793054116,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ec15ce234b3a6fa4a707d47de37778686a8c8b739674bb3c1618f1353725d7ee",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "5acb0cec88310bb4f6e0",
          "headline": "Apple의 iPhone Duo 배송 시간이 1월까지 연장됩니다",
          "eventLabel": "공급망 문제",
          "publishedAt": 1793035800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0d7f9ce0abff853450288e28112d7c2ddb50a5d1055ca51b54a63454e422a7d3",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "가격 전가 시 마진 방어, 판매량·교체주기 둔화 위험"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 3,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "TSLA": {
      "ticker": "TSLA",
      "updatedAt": 1793199633.0557368,
      "dataAsOf": 1793118788,
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
          "eventId": "3973ce90de8a5a59fa23",
          "headline": "Tesla의 이익은 43% 하락했고 주가는 유지되었습니다. 이유는 다음과 같습니다",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793118788,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e8e51daff6781ac18b6ea0cd84265705f14b799fc54f162ec4ee2144535e4580",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "5fd4f63ae49d44bdf80b",
          "headline": "움직여, Tesla: 이 로봇공학 주식이 더 나은 매수입니다",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793041500,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=afddad12121b24a8f224fd5eef8d377b98866139f138125db917302e0655fe7d",
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
    "ORCL": {
      "ticker": "ORCL",
      "updatedAt": 1793199633.0557368,
      "dataAsOf": 1793186145,
      "signal": "중립·확인 대기",
      "netScore": -0.06,
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
          "score": -0.52,
          "level": "중립"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": -0.35,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": -0.7,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": -1.57,
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
          "eventId": "27a41ae54eb1b4210dfa",
          "headline": "마이크로소프트 대. 오라클: 동일한 양면 AI 전략, 매우 다른 결과",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1793186145,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=33ac2059882ca20c77fe9b8eff669cc99a60630d7df1cd9bd0948c2868c69025",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ba4b04d2c3081aaa92ba",
          "headline": "투자자들이 10월 연준의 결정을 주시하면서 S&P 500, Nasdaq은 칩 제조업체의 강세를 보이고 있습니다 — ORCL, HOOD, JBLU, RIVN, SMCI 집중",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793144711,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ab6481618f0449af6a52296764fb50b51e7ac8e538e133a19f2e719d10202657",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "b2f1ad439301f0c674fd",
          "headline": "Intel, Oracle, IBM이 OKX-ICE 토큰화된 주식 장소에 대한 이의 제기에 동참하여 총 26개가 되었습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793126762,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c6a7556c6173bb894e29cb5d494ed7949e64d5905d0c3208797a77c208301a09",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "623a3e8ef7487de487a5",
          "headline": "Google TPU가 Oracle Cloud에 도입되고 NVIDIA 거래가 확대되면서 Oracle은 5% 상승합니다. Amazon은 더 높이, Microsoft는 물을 밟습니다",
          "eventLabel": "경쟁사 공급 계약",
          "publishedAt": 1793120543,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=29dbc0190a0178f3062a1b2d470102d078e1059099fc920bd1e9c054722ef0e2",
          "factorChanges": {
            "competitiveRisk": -2,
            "customerConcentration": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "20b38a524813b769efc3",
          "headline": "SambaNova와 Oracle, Oracle Cloud 인프라에 고성능 추론을 제공하기 위해 협력",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1793118600,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=30513ba16d1ec515313bdfe753613e459065d12ed801e84c364f5a6960a9d3c2",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "OCI 서비스 범위 확대 가능성, 매출화 시점 불확실"
        },
        {
          "eventId": "abdafadef244b7f1dccf",
          "headline": "오라클 주식은 지난 투자자의 날 이후 60% 하락했습니다. 수요일 이전에 매수인가요?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1793090582,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cf17e68b42722457b7e1e6df14a5718c6d60f2218a391663dcf043aa6ef5061e",
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
    "CRM": {
      "ticker": "CRM",
      "updatedAt": 1793199633.0557368,
      "dataAsOf": 1793029802,
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
          "eventId": "a6b9bfec32e21e796610",
          "headline": "Salesforce 대 국제 비즈니스 기계: 2026년에는 어떤 기술 주식이 더 나은 구매입니까?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793029802,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ead45b7aca7ea963e8657b1c206711392649befbeed1aed77270a11f4a0bc2fa",
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
    "PLTR": {
      "ticker": "PLTR",
      "updatedAt": 1793199633.0557368,
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
    "NVDA": {
      "ticker": "NVDA",
      "updatedAt": 1793199633.0557368,
      "dataAsOf": 1793185617,
      "signal": "우호적 변화",
      "netScore": 7.55,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 3.15,
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
          "score": -0.35,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": -0.7,
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
          "eventId": "e46c4e677003af3e07f5",
          "headline": "Meta의 250억 달러 주식 매각으로 수요가 5배 증가했습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793185617,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7f979e1c44d364d7795ed645bc4192e7912c2e3560cfa34e606e3092a49a4927",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "50c441f459419033e5ce",
          "headline": "Meta는 AI 인프라 및 개인 초지능을 위해 950억 달러 규모의 자금 조달을 계획하고 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793184268,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d2633723fe816b277adbe98138964c611897bd7dd0363991b0eef83755568044",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "c8c69a12043e90541850",
          "headline": "메타 플랫폼(META)은 AI 자금 조달 추진으로 인해 39% 저평가될 수 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793164321,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c894310163a226a851d957734e0fb0a7bf500a01f30087566df0b80a62c0c9d7",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "0735270e4e3e10149e01",
          "headline": "Broadcom CEO는 은행이 흔들린 후 자본을 '사용 가능'하다고 말했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793152980,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=551a1d004fb17c0f1800500529c38937bcf8e2a1a8333472df7fca2412f25045",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "c4a11dddae1380576c36",
          "headline": "Oracle과 OpenAI는 투자자들이 계속 묻는 자금 조달 질문을 건너뛰었습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793151780,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=64fc8d15c73a83e9efde1d56e03443ef40ef88beda9133de3397683a104d3081",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "c06bc2a441173eeeb41e",
          "headline": "Nvidia의 새로운 30억 달러 AI 베팅은 자체 고객 중 한 명에게 있습니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793137201,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=995b09e1776ebfbb47f422fd5d6dadf7dcb149e84ac3a45287398f342a51db9e",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "452ecb3a53df941d6f5e",
          "headline": "Jensen Huang과 트럼프 대통령의 심야 통화는 2026년 상반기 Nvidia의 중국 AI 칩 출하량이 44% 감소한 가운데 이루어졌습니다. 그의 접근이 중요한 이유는 다음과 같습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793137140,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2bd5147d1bbd37ead4a993d669e21660010ab4ba55377370ce14f8c7ee422eff",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "7c1dd8d3fc4a2cff5c7d",
          "headline": "오늘, 10월 27일 주식 시장: Meta는 AI 인프라 베팅 자금을 조달하기 위해 사상 최대 규모의 주식 공모를 약 980억 달러로 모금했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793137002,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d8a00036d046a15237a68479e7cf1e499c211e45810a35fe286c0604e4aab05b",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "3f90c262c84ed0e9571a",
          "headline": "NVIDIA가 메타를 구매하고 있습니다: 30억 달러 지분이 의미하는 것",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793136004,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=67efecb897dc4a3fe14157c8f0124022052a3997d1028ec4b6d4d9017d1a3618",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "50d028bd8820e4bbd4c9",
          "headline": "약물 감시 글로벌 시장 보고서 2026의 인공 지능(AI) | Oracle, Microsoft, Google 및 IQVIA의 자동화 가속화에 따라 2030년까지 19.6% CAGR을 활용하세요.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793135400,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1c79530695d2e9d5090330d0bd015375fec18faf4d5acc083878152523df9e9b",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "60a0325467ecebcefad8",
          "headline": "엔비디아가 다시 킹메이커를 연기합니다. 메타 딜이 성공적인 움직임인 이유",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793127900,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=64712939297b331f84b9bb293235682efa51429bf4d9980a77c62192ffe4f7d5",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "8837d076b34ceb6b1eea",
          "headline": "보고된 50억 달러 규모의 원자력 자금 조달 제안에 대한 CEG 주가 상승 – 일부 주요 하이라이트 살펴보기",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793123218,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7c4a1bafe408c87eded3e6c8a843a480101bc9698eddf96a358da21a0fa59c68",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 30,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMD": {
      "ticker": "AMD",
      "updatedAt": 1793199633.0557368,
      "dataAsOf": 1793187565,
      "signal": "우호적 변화",
      "netScore": 7.93,
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
          "score": -2.1,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": 4.72,
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
          "eventId": "ede6e6010340cd81b475",
          "headline": "AMD는 5% 상승해 다시 1조 달러에 마감",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1793187565,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ea9e200ace62a7e23e769d610a44f8372ade0c2981f4e7e9749b98a62227d007",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "e46c4e677003af3e07f5",
          "headline": "Meta의 250억 달러 주식 매각으로 수요가 5배 증가했습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793185617,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7f979e1c44d364d7795ed645bc4192e7912c2e3560cfa34e606e3092a49a4927",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "50c441f459419033e5ce",
          "headline": "Meta는 AI 인프라 및 개인 초지능을 위해 950억 달러 규모의 자금 조달을 계획하고 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793184268,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d2633723fe816b277adbe98138964c611897bd7dd0363991b0eef83755568044",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "c8c69a12043e90541850",
          "headline": "메타 플랫폼(META)은 AI 자금 조달 추진으로 인해 39% 저평가될 수 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793164321,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c894310163a226a851d957734e0fb0a7bf500a01f30087566df0b80a62c0c9d7",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "0735270e4e3e10149e01",
          "headline": "Broadcom CEO는 은행이 흔들린 후 자본을 '사용 가능'하다고 말했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793152980,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=551a1d004fb17c0f1800500529c38937bcf8e2a1a8333472df7fca2412f25045",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "c4a11dddae1380576c36",
          "headline": "Oracle과 OpenAI는 투자자들이 계속 묻는 자금 조달 질문을 건너뛰었습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793151780,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=64fc8d15c73a83e9efde1d56e03443ef40ef88beda9133de3397683a104d3081",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "c06bc2a441173eeeb41e",
          "headline": "Nvidia의 새로운 30억 달러 AI 베팅은 자체 고객 중 한 명에게 있습니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793137201,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=995b09e1776ebfbb47f422fd5d6dadf7dcb149e84ac3a45287398f342a51db9e",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "7c1dd8d3fc4a2cff5c7d",
          "headline": "오늘, 10월 27일 주식 시장: Meta는 AI 인프라 베팅 자금을 조달하기 위해 사상 최대 규모의 주식 공모를 약 980억 달러로 모금했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793137002,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d8a00036d046a15237a68479e7cf1e499c211e45810a35fe286c0604e4aab05b",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "50d028bd8820e4bbd4c9",
          "headline": "약물 감시 글로벌 시장 보고서 2026의 인공 지능(AI) | Oracle, Microsoft, Google 및 IQVIA의 자동화 가속화에 따라 2030년까지 19.6% CAGR을 활용하세요.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793135400,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1c79530695d2e9d5090330d0bd015375fec18faf4d5acc083878152523df9e9b",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "563af062726e9451b3f8",
          "headline": "나는 2030년까지 AMD 주식에서 작은 포지션을 보유할 것이지만, 다시 세 배로 늘어날 것이라고는 기대하지 않습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793133782,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=04167cc709d442612361e46aeb08239a1c2a8549d74b03bf5edc92d44feef3b7",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "8837d076b34ceb6b1eea",
          "headline": "보고된 50억 달러 규모의 원자력 자금 조달 제안에 대한 CEG 주가 상승 – 일부 주요 하이라이트 살펴보기",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793123218,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7c4a1bafe408c87eded3e6c8a843a480101bc9698eddf96a358da21a0fa59c68",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "839638d06b5258d2d16c",
          "headline": "AMD, Nvidia, Broadcom과의 Meta 거래: 순환 자금 조달이 위험합니까?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793120760,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=35d438f71fa2f3f9ec3898bf4045b2b9a3cec9794dd861ee5bc7b49cd4a5d01b",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 25,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AVGO": {
      "ticker": "AVGO",
      "updatedAt": 1793199633.0557368,
      "dataAsOf": 1793152980,
      "signal": "우호적 변화",
      "netScore": 10,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 3.67,
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
          "score": -1.05,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": 3.67,
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
          "eventId": "0735270e4e3e10149e01",
          "headline": "Broadcom CEO는 은행이 흔들린 후 자본을 '사용 가능'하다고 말했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793152980,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=551a1d004fb17c0f1800500529c38937bcf8e2a1a8333472df7fca2412f25045",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "aa6fe2d738325ddfd872",
          "headline": "나스닥, Broadcom의 대규모 인류애적 거래에서 308포인트 상승: 오늘의 주식 시장",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793132097,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1ea1f13a5f664fbd7ad5350caf678663f7dade3aaa6823b8ff0f3d8b16598a0f",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "5117ab0a927a7794efdc",
          "headline": "은행, Broadcom 칩 파이낸싱 거래를 위해 210억 달러 규모의 채권 확보",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793131769,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9988dd8070a238273d0b7655105a928880fd1ba230d42fa321597af4026686b1",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "839638d06b5258d2d16c",
          "headline": "AMD, Nvidia, Broadcom과의 Meta 거래: 순환 자금 조달이 위험합니까?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793120760,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=35d438f71fa2f3f9ec3898bf4045b2b9a3cec9794dd861ee5bc7b49cd4a5d01b",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "57c745610825eb3e226d",
          "headline": "Broadcom은 더 많은 칩을 확보하기 위해 Anthropic과 630억 달러 규모의 계약을 체결했습니다. 주가가 오르고 있다",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793119544,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=130cdff4ef71b9a586b8d6919cd9448bf2762cb2533ecc645c338dd507e0d351",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "31632bbbc3c92439815c",
          "headline": "Broadcom의 630억 달러 Anthropic 거래로 Baird의 '우수' 등급 및 630달러 목표 달성",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793118900,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=55b246f7cff999877cd7f27cfe06e49a8d51cb287cf3e675358562573d3db7b7",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "8fac3a3f451d5ba3aa23",
          "headline": "STX는 Seagate의 1분기 보고서에 앞서 시판 전 상승 — 투자자들은 무엇을 보고 있습니까?",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1793092171,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=357f49f097dddfe4e8e3943abb5664006b046388ecf03282b49e4f9529c4aa9f",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "a4b3abb7f8f1531cd179",
          "headline": "Broadcom 대 Taiwan Semiconductor: 두 개의 AI 강국, 하나의 놀라운 수익 추세",
          "eventLabel": "공급망 문제",
          "publishedAt": 1793091002,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=992debb5db4551dd5382f45a0372386bec5a824aa8ee74ef9e3dab5eaf3d8778",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "2161a0fadbf4318bb72b",
          "headline": "Nvidia는 Meta의 주식 공모에서 30억 달러 규모의 주식을 인수하여 Muse AI 플랫폼 개선에 도움이 될 것입니다",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1793087013,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=16e66e1a8afacf9d3265d234b892d414847b4e626199a66e08e837f56366fa48",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "3bb05c02368c4767ba6a",
          "headline": "Nvidia, 칩 제조업체는 더 높은 비용에 직면합니까? TSMC는 고급 칩 패키징을 위해 최대 20%의 가격 인상을 계획하고 있는 것으로 알려졌습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793077230,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=432bd49e2a4acf8bed8cca15c7fbb709f43a09d845287185986d3f21df7a3a60",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "9771c7820c3d9fad4ba6",
          "headline": "인텔, 소프트웨어 스타트업 Classiq 인수로 양자 야망 심화",
          "eventLabel": "실적 발표",
          "publishedAt": 1793058328,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e661a236af78ea32ca2ff8a8e6a74b5aeef05f319e46041e707aff468df9ca92",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "da39099750d2276c7419",
          "headline": "Broadcom은 Anthropic에 대한 AI 컴퓨팅 판매 자금 조달을 위해 은행으로부터 630억 달러를 확보했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793048366,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8890ae2b873890170dbe240920765c05486b05559a3555f5ede45fd19b547272",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 16,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "QCOM": {
      "ticker": "QCOM",
      "updatedAt": 1793199633.0557368,
      "dataAsOf": 1793035800,
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
          "eventId": "5acb0cec88310bb4f6e0",
          "headline": "Apple의 iPhone Duo 배송 시간이 1월까지 연장됩니다",
          "eventLabel": "공급망 문제",
          "publishedAt": 1793035800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0d7f9ce0abff853450288e28112d7c2ddb50a5d1055ca51b54a63454e422a7d3",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "스마트폰 수요가 줄면 고객 칩 수요에 부담"
        },
        {
          "eventId": "1ae43d55f9ffa7979fe2",
          "headline": "맞춤형 시스템 온 칩 애플리케이션별 집적 회로(ASIC) 시장 글로벌 보고서 2026 | NVIDIA, Qualcomm, Broadcom 및 TSMC를 통해 AI 및 5G 수요 활용",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793024760,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f487fb24d7d5a52b20c889167d2d5583406764e20d5d366fe2c2cc43afc19af9",
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
    "ARM": {
      "ticker": "ARM",
      "updatedAt": 1793199633.0557368,
      "dataAsOf": 1793112901,
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
          "eventId": "ac7cacc4d638204db619",
          "headline": "Arm 대 Western Digital: 11월에 어느 기술주를 매수하는 것이 더 나을까요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793112901,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0602d1b253c2e3af6307548ecf85752d255b0e9d87d2d26e887f17e0da11ae26",
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
      "updatedAt": 1793199633.0557368,
      "dataAsOf": 1793122427,
      "signal": "주의 강화",
      "netScore": -6.5,
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
          "eventId": "6ede39f6990912f429de",
          "headline": "예측: Marvell 주식은 투자자들이 생각하는 것보다 훨씬 더 많은 상승 여력을 가질 수 있습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793122427,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=90064c3df79d7801bc73a4e2a731b47964902670f8c2a45fcffdb0fa6694d067",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "1a3ccd66016a1223b467",
          "headline": "Dell Technologies vs. Marvell Technology: 2026년에는 어떤 기술주를 사는 것이 더 나을까요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793117762,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=bf967c0b04e0049412b5cf7963147a4cf7efcda036e6bd60bb06d9a8b89bf66a",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "d98390f357fddea62e4d",
          "headline": "“다음 조 달러 규모 회사”: Marvell은 1년 만에 185%의 수익을 올렸습니다. 구매하기에는 너무 늦었나요?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793028673,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6524f60b9ef0b9c010c5b890bad07b04e8e20355115dec0bd78e1f6622ac0d95",
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
    "INTC": {
      "ticker": "INTC",
      "updatedAt": 1793199633.0557368,
      "dataAsOf": 1793184268,
      "signal": "주의 강화",
      "netScore": -5.25,
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
          "eventId": "50c441f459419033e5ce",
          "headline": "Meta는 AI 인프라 및 개인 초지능을 위해 950억 달러 규모의 자금 조달을 계획하고 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793184268,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d2633723fe816b277adbe98138964c611897bd7dd0363991b0eef83755568044",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "50d028bd8820e4bbd4c9",
          "headline": "약물 감시 글로벌 시장 보고서 2026의 인공 지능(AI) | Oracle, Microsoft, Google 및 IQVIA의 자동화 가속화에 따라 2030년까지 19.6% CAGR을 활용하세요.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793135400,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1c79530695d2e9d5090330d0bd015375fec18faf4d5acc083878152523df9e9b",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "34de26df8d5ef657fea7",
          "headline": "IonQ는 Intel의 23억 달러 규모 Quantum Buy에서 7% 상승, Rigetti는 8% 상승: \"풀 스택 양자 컴퓨팅 비즈니스\"",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793127427,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e53ae03f46a044cc8b70eb3fff75055c546bb3f17a2de14bb79866fcc4487787",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "b2f1ad439301f0c674fd",
          "headline": "Intel, Oracle, IBM이 OKX-ICE 토큰화된 주식 장소에 대한 이의 제기에 동참하여 총 26개가 되었습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793126762,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c6a7556c6173bb894e29cb5d494ed7949e64d5905d0c3208797a77c208301a09",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "ae3d4620ee3566df424d",
          "headline": "NVIDIA는 AMD와 Intel로부터 CPU 사업을 인수했습니다. 대상에 미치는 영향",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1793115220,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2c49d19f8f51292811a2ea188b7ae8c68abf3f32d2f1c4cbabf2f2cf49ef08ba",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "86d113921dac4436ae35",
          "headline": "Intel vs. Nvidia: 정체된 추세 vs. 수익의 급속한 확장",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793053201,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=211960c6c4bc2e5430cc6ef5c1bd0fb0b68c002a78b23b319d88e6a89251593e",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "5dfb13efc4e940739c2a",
          "headline": "기술 수익은 이번 주 시장의 가장 큰 이야기입니다. Microsoft, Amazon, Intel, SanDisk 및 Alphabet이 주식 시장의 다음 움직임을 주도할 이유는 다음과 같습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793049314,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3ba45970045d616ae03d3cc67e7f9f6059a35dc49bdd2be6aa520a0bc20af7bf",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "503938acfb7d2ad067b2",
          "headline": "New Street Upgrade가 서버 CPU 부족을 언급함에 따라 Intel은 5% 상승합니다. AMD와 NVIDIA는 3% 상승",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1793037031,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=af1cac33fdfcbf5bfa630db94996b564147c3c6f253fa74b20628558ad22cce6",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "f92f70343d4155e8beee",
          "headline": "인텔과 TSMC는 칩 제조 패권을 위해 경쟁하고 있습니다. 1 우수한 가치를 제공합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793027100,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b9cc4aab084740d00bc094b96ec3ca80356e22bccb0b9db75bc591b4d934313a",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "dca2f2ca34d6d1b78960",
          "headline": "글로벌 플립칩 기술 시장 보고서 2026: 규모, 점유율, 추세 및 2030년 예측 | TSMC, Intel, Samsung, AMD 및 Amkor를 통해 AI, 5G 및 3D 패키징 활용",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793024580,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5771ace9a5f9de83f188cd3ab654f3efde5b879117fd6acfbbd642e3419e1128",
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
    "TSM": {
      "ticker": "TSM",
      "updatedAt": 1793199633.0557368,
      "dataAsOf": 1793091002,
      "signal": "중립·확인 대기",
      "netScore": -1.74,
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
          "score": -1.75,
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
          "eventId": "a4b3abb7f8f1531cd179",
          "headline": "Broadcom 대 Taiwan Semiconductor: 두 개의 AI 강국, 하나의 놀라운 수익 추세",
          "eventLabel": "공급망 문제",
          "publishedAt": 1793091002,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=992debb5db4551dd5382f45a0372386bec5a824aa8ee74ef9e3dab5eaf3d8778",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "782741833fe3ca0b7b14",
          "headline": "Apple vs. Taiwan Semiconductor: 2026년에는 어느 기술주를 매수하는 것이 더 나을까요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793073602,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=eb24a3a7512e1ce06571eef5a093573db91ecc49f7feeb81e80f5dd4bfd5d2f2",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "1ae43d55f9ffa7979fe2",
          "headline": "맞춤형 시스템 온 칩 애플리케이션별 집적 회로(ASIC) 시장 글로벌 보고서 2026 | NVIDIA, Qualcomm, Broadcom 및 TSMC를 통해 AI 및 5G 수요 활용",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793024760,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f487fb24d7d5a52b20c889167d2d5583406764e20d5d366fe2c2cc43afc19af9",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "dca2f2ca34d6d1b78960",
          "headline": "글로벌 플립칩 기술 시장 보고서 2026: 규모, 점유율, 추세 및 2030년 예측 | TSMC, Intel, Samsung, AMD 및 Amkor를 통해 AI, 5G 및 3D 패키징 활용",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793024580,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5771ace9a5f9de83f188cd3ab654f3efde5b879117fd6acfbbd642e3419e1128",
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
    "ASML": {
      "ticker": "ASML",
      "updatedAt": 1793199633.0557368,
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
      "updatedAt": 1793199633.0557368,
      "dataAsOf": 1793104575,
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
          "eventId": "c2679528ff7b120bc332",
          "headline": "Applied Materials가 이중 지분으로 전환함에 따라 네덜란드 칩 회사 Besi의 주가가 급등했습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793104575,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=33ced5da9cc7ad273228ac4ba9aa0d136e83d4237871f220ffa9e14f0e59913f",
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
      "updatedAt": 1793199633.0557368,
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
      "updatedAt": 1793199633.0557368,
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
      "updatedAt": 1793199633.0557368,
      "dataAsOf": 1793185461,
      "signal": "우호적 변화",
      "netScore": 9.19,
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
          "eventId": "f46f14c2a44e520af35e",
          "headline": "SK하이닉스는 632%의 이익 급증과 450억 달러의 주주 약속 이후 8% 상승했습니다. Micron과 SanDisk가 함께하고 있습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1793185461,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=212760d2fc59658e5aae1a066d0c90405e9d06f70b96f4015041638b97c7f398",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "50c441f459419033e5ce",
          "headline": "Meta는 AI 인프라 및 개인 초지능을 위해 950억 달러 규모의 자금 조달을 계획하고 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793184268,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d2633723fe816b277adbe98138964c611897bd7dd0363991b0eef83755568044",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "f2e30211d126520803c5",
          "headline": "MU, SNDK, Neocloud 주식은 인류 발전 부스트, SK Hynix Q3 Stunner에서 이익을 확대합니다. 짐 크레이머(Jim Cramer)는 주의를 촉구합니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793169965,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0b62bb26bc2179365661ae5aef336bf42d237b7840d0ba0e9023506065ce0aef",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "c8c69a12043e90541850",
          "headline": "메타 플랫폼(META)은 AI 자금 조달 추진으로 인해 39% 저평가될 수 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793164321,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c894310163a226a851d957734e0fb0a7bf500a01f30087566df0b80a62c0c9d7",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "fdf6e7d687c3a2297519",
          "headline": "OpenAI Eying TPU 주변의 버즈로 GOOGL 주가가 더 높아졌습니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1793163562,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=13a39bc2e1ce1ab72c7218fe63e8ddf29bcd1d1434272fa7a286b4e5fd3eb61b",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "6a12075f118bc5de0bdb",
          "headline": "STX 주식은 1분기 하락, 배당금 인상에도 불구하고 하락 — 분석가는 마진 성장 둔화를 지적",
          "eventLabel": "실적 발표",
          "publishedAt": 1793153907,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a35d1d90cc6a45f00eb24520d7cffc94cd23ea417b287d40f07c48f22ba6c0ca",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "0735270e4e3e10149e01",
          "headline": "Broadcom CEO는 은행이 흔들린 후 자본을 '사용 가능'하다고 말했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793152980,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=551a1d004fb17c0f1800500529c38937bcf8e2a1a8333472df7fca2412f25045",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "ee74208df635fc767401",
          "headline": "FCC가 Amazon의 115억 달러 규모 Globalstar 거래를 승인함에 따라 ASTS 주가는 밤새 하락했습니다. — '더 많은 경쟁'을 선전합니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793151822,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4cd00fe8bb9f4aa068362cb45a75018321d46c732200588972cdd698b2534109",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "c4a11dddae1380576c36",
          "headline": "Oracle과 OpenAI는 투자자들이 계속 묻는 자금 조달 질문을 건너뛰었습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793151780,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=64fc8d15c73a83e9efde1d56e03443ef40ef88beda9133de3397683a104d3081",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "c06bc2a441173eeeb41e",
          "headline": "Nvidia의 새로운 30억 달러 AI 베팅은 자체 고객 중 한 명에게 있습니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793137201,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=995b09e1776ebfbb47f422fd5d6dadf7dcb149e84ac3a45287398f342a51db9e",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "7c1dd8d3fc4a2cff5c7d",
          "headline": "오늘, 10월 27일 주식 시장: Meta는 AI 인프라 베팅 자금을 조달하기 위해 사상 최대 규모의 주식 공모를 약 980억 달러로 모금했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793137002,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d8a00036d046a15237a68479e7cf1e499c211e45810a35fe286c0604e4aab05b",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "50d028bd8820e4bbd4c9",
          "headline": "약물 감시 글로벌 시장 보고서 2026의 인공 지능(AI) | Oracle, Microsoft, Google 및 IQVIA의 자동화 가속화에 따라 2030년까지 19.6% CAGR을 활용하세요.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793135400,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1c79530695d2e9d5090330d0bd015375fec18faf4d5acc083878152523df9e9b",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 28,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "SNDK": {
      "ticker": "SNDK",
      "updatedAt": 1793199633.0557368,
      "dataAsOf": 1793185461,
      "signal": "중립·확인 대기",
      "netScore": -0.78,
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
          "score": -0.53,
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
          "eventId": "f46f14c2a44e520af35e",
          "headline": "SK하이닉스는 632%의 이익 급증과 450억 달러의 주주 약속 이후 8% 상승했습니다. Micron과 SanDisk가 함께하고 있습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1793185461,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=212760d2fc59658e5aae1a066d0c90405e9d06f70b96f4015041638b97c7f398",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ee24b41647754804c633",
          "headline": "Sandisk: 공급이 문제를 해결하고 있습니다",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793087529,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ca93703cc4cde0ad01a05b7c5c0f79dfaccb48a1e197e46812892a259fd305f2",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "5dfb13efc4e940739c2a",
          "headline": "기술 수익은 이번 주 시장의 가장 큰 이야기입니다. Microsoft, Amazon, Intel, SanDisk 및 Alphabet이 주식 시장의 다음 움직임을 주도할 이유는 다음과 같습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793049314,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3ba45970045d616ae03d3cc67e7f9f6059a35dc49bdd2be6aa520a0bc20af7bf",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "9cf9f800cf713e2e107e",
          "headline": "Bank of America가 메모리에 대해 더욱 긍정적으로 성장함에 따라 Micron은 4% 상승합니다. Western Digital 상승 5%, SanDisk 상승 3%",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1793037154,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=337d5288f7a5ceda4d3e3c179066ab1231121ca1af5dc8dc88046abccec8dfa7",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 4,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "WDC": {
      "ticker": "WDC",
      "updatedAt": 1793199633.0557368,
      "dataAsOf": 1793183016,
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
          "eventId": "4d64553adf9735984ab3",
          "headline": "Western Digital 주식에 무슨 일이 일어났나요?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1793183016,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6c48f3d0dec021b854127e9fdd83af853a4116b25c7940dff98f3d944a0c55f4",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "879ee589f01fc07861af",
          "headline": "Western Digital의 최근 분기에 주식에 어떤 변화가 있었나요?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1793175769,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2ced85eb13df7110a7a28aae7b633011cd1dacd0df45e192625a8994e420238e",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "ac7cacc4d638204db619",
          "headline": "Arm 대 Western Digital: 11월에 어느 기술주를 매수하는 것이 더 나을까요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793112901,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0602d1b253c2e3af6307548ecf85752d255b0e9d87d2d26e887f17e0da11ae26",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "9cf9f800cf713e2e107e",
          "headline": "Bank of America가 메모리에 대해 더욱 긍정적으로 성장함에 따라 Micron은 4% 상승합니다. Western Digital 상승 5%, SanDisk 상승 3%",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1793037154,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=337d5288f7a5ceda4d3e3c179066ab1231121ca1af5dc8dc88046abccec8dfa7",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "5acb0cec88310bb4f6e0",
          "headline": "Apple의 iPhone Duo 배송 시간이 1월까지 연장됩니다",
          "eventLabel": "공급망 문제",
          "publishedAt": 1793035800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0d7f9ce0abff853450288e28112d7c2ddb50a5d1055ca51b54a63454e422a7d3",
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
      "updatedAt": 1793199633.0557368,
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
      "updatedAt": 1793199633.0557368,
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
      "updatedAt": 1793199633.0557368,
      "dataAsOf": 1793181342,
      "signal": "주의 강화",
      "netScore": -3.01,
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
          "eventId": "fe4a9da54c14d257b851",
          "headline": "\"완전히 매진\": Lumentum은 1년 만에 383% 상승했습니다. 구매하기에는 너무 늦었나요?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793181342,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1444252433d53ad8f3bfffdf6b7ac2cde7c51751f0d77b0d1c5e2a8343162f90",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "b5416bf3edadd6953b2a",
          "headline": "StoneX가 모두 매수로 시작하고 103% 상승 여력을 보임에 따라 Coherent는 6% 상승, Lumentum은 8% 상승",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1793117706,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=27d06a65da6a58e78c766601a2ed21f745807e888db04cac1ac233e160f79049",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "6bd869e6684833daf689",
          "headline": "StoneX가 $1,200 목표로 보장을 시작하면서 Lumentum은 8% 상승합니다. 응용 광전자공학 및 Coherent Climb 6%",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1793033178,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=45fb58dea479f9c792d78456330fa491970b4f55e90ef6aa0b35aa63aa28ba81",
          "factorChanges": {
            "shortTermMomentum": -1
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
      "updatedAt": 1793199633.0557368,
      "dataAsOf": 1793113200.0,
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
      "evidence": [
        {
          "eventId": "dcce4a8235d4bc87ed7e",
          "headline": "GEV SEC Form 10-Q 공식 제출",
          "eventLabel": "정기 실적 공시",
          "publishedAt": 1793113200.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1996810/000199681026000163/gev-20260930.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "e59eb968f1b2d7bcdf00",
          "headline": "GEV SEC Form 8-K 공식 제출",
          "eventLabel": "매출",
          "publishedAt": 1793113200.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1996810/000199681026000162/gev-20261028.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        }
      ],
      "confirmedEvidenceCount": 2,
      "unverifiedEvidenceCount": 0,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "CEG": {
      "ticker": "CEG",
      "updatedAt": 1793199633.0557368,
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
      "updatedAt": 1793199633.0557368,
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
      "updatedAt": 1793199633.0557368,
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
      "updatedAt": 1793199633.0557368,
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
      "updatedAt": 1793199633.0557368,
      "dataAsOf": 1793114913,
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
          "eventId": "fd39ef75c7f95b7e7331",
          "headline": "Hubbell Incorporated, 2026년 3분기 희석 EPS를 $4.94로 보고하고 연간 조정 EPS 가이던스를 $20.40-$20.60으로 인상",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793114913,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ea4a0439c2017ca825bdcab3160086fb86ea3bcb6cefe5bac6065a5738a77e91",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "70f3bb91845cf11aa8d7",
          "headline": "HUBB SEC Form 10-Q 공식 제출",
          "eventLabel": "정기 실적 공시",
          "publishedAt": 1793113200.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/48898/000162828026067729/hubb-20260930.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "61637a64038bd94f5d89",
          "headline": "HUBB SEC Form 8-K 공식 제출",
          "eventLabel": "EPS",
          "publishedAt": 1793026800.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/48898/000162828026067421/hubb-20261027.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        }
      ],
      "confirmedEvidenceCount": 2,
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "VRT": {
      "ticker": "VRT",
      "updatedAt": 1793199633.0557368,
      "dataAsOf": 1793169965,
      "signal": "주의 강화",
      "netScore": -2.93,
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
          "eventId": "f2e30211d126520803c5",
          "headline": "MU, SNDK, Neocloud 주식은 인류 발전 부스트, SK Hynix Q3 Stunner에서 이익을 확대합니다. 짐 크레이머(Jim Cramer)는 주의를 촉구합니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793169965,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0b62bb26bc2179365661ae5aef336bf42d237b7840d0ba0e9023506065ce0aef",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "319a9c9c0b2a19e9f6f1",
          "headline": "VRT SEC Form 8-K 공식 제출",
          "eventLabel": "EPS",
          "publishedAt": 1793113200.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1674101/000162828026067707/vrt-20261028.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "f9f6d5dccd46e80bd061",
          "headline": "Equinix, KLA 및 Vertiv 수익이 데이터 센터 수요에 대해 알 수 있는 것",
          "eventLabel": "실적 발표",
          "publishedAt": 1793101818,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8764b09e20fc81f9c55f83649055a2cf61db1088baeaf7dd987572e54ef1392e",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "6c1d5317ee6f0a764b16",
          "headline": "VRT SEC Form 8-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1793026800.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1674101/000162828026067393/vrt-20261027.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        }
      ],
      "confirmedEvidenceCount": 2,
      "unverifiedEvidenceCount": 2,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "MOD": {
      "ticker": "MOD",
      "updatedAt": 1793199633.0557368,
      "dataAsOf": 1793026800.0,
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
      "evidence": [
        {
          "eventId": "fb4299d1beea1199691a",
          "headline": "MOD SEC Form 8-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1793026800.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/67347/000110465926119218/mod-20261021x8k.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 0,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "STX": {
      "ticker": "STX",
      "updatedAt": 1793199633.0557368,
      "dataAsOf": 1793165315,
      "signal": "주의 강화",
      "netScore": -6.79,
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
          "score": -3.5,
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
          "eventId": "85d559ae74ad383e4ace",
          "headline": "Seagate(STX) 2027년 1분기 실적 통화 기록",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793165315,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b3108e4db4c9f867b0166f7adad622972df651613efea832262a533898a2703b",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "fdf6e7d687c3a2297519",
          "headline": "OpenAI Eying TPU 주변의 버즈로 GOOGL 주가가 더 높아졌습니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1793163562,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=13a39bc2e1ce1ab72c7218fe63e8ddf29bcd1d1434272fa7a286b4e5fd3eb61b",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "e0d8c226eb7405e0322f",
          "headline": "Seagate Technology 1분기 실적 발표 하이라이트",
          "eventLabel": "내부자 매도",
          "publishedAt": 1793145861,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=754e23355ad67e767fa7e5017ef01c97166b636104c5bd2617992e0bf8b677a6",
          "factorChanges": {
            "insiderSignal": -2,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "7fdfd869724faeaf9dd6",
          "headline": "분석가들이 HDD 공급 및 HAMR을 평가함에 따라 Seagate(STX) 주식 공정 가치가 하락했습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793139402,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=931e69c7a874bf986c03a985ef90d2838f7878c6b57c18e91e089cdfea38c07c",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "9aa56d01319452d5c61c",
          "headline": "STX 주식은 수익보다 6% 이상 급등 — Rosenblatt는 목표를 줄였지만 단기 이익은 상승할 것으로 예상",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793116486,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=42633965b3dacfcfb49203065b921011eed3f7993fdf93534c76e8e087af2514",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "51997ff18846eb245ee8",
          "headline": "STX SEC Form 8-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1793113200.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1137789/000113778926000305/stx-20261024.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "63cd1a08a6b889e08531",
          "headline": "Seagate의 가장 중요한 기회는 데이터 센터에 있을 수 있습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793105115,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cd50d6e89dfddcd55848621383b7cbaaf0ae318c46a0ca95ad3e27ebd1e3e7b3",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "e6696bb6cf1a7066c543",
          "headline": "STX SEC Form 8-K 공식 제출",
          "eventLabel": "EPS",
          "publishedAt": 1793026800.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1137789/000113778926000300/stx-20261027.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        }
      ],
      "confirmedEvidenceCount": 2,
      "unverifiedEvidenceCount": 6,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "EME": {
      "ticker": "EME",
      "updatedAt": 1793199633.0557368,
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
      "updatedAt": 1793199633.0557368,
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
      "updatedAt": 1793199633.0557368,
      "dataAsOf": 1793128029,
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
          "eventId": "c483969ddb56462c0a76",
          "headline": "Bloom Energy는 매출이 192% 급증했지만 이 3가지 에너지 투자는 훨씬 더 나을 수 있습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1793128029,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=80f0e6f4903c7bf668398acd78f57561c16232630a6a96ec8e04b605f9cd85ac",
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
    }
  }
};
