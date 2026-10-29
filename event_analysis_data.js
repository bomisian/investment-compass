// 자동 생성 파일 - 중요 뉴스의 기업분석 반영
const EVENT_ANALYSIS_DATA = {
  "schemaVersion": 1,
  "generatedAt": 1793277398.198097,
  "records": {
    "MSFT": {
      "ticker": "MSFT",
      "updatedAt": 1793277398.198097,
      "dataAsOf": 1793232628,
      "signal": "중립·확인 대기",
      "netScore": -1.04,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.35,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 0.53,
          "level": "중립"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": -0.35,
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
          "score": -0.35,
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
          "eventId": "b3ff9359d748ad08c739",
          "headline": "S&P 500, 나스닥 선물 하락으로 예상보다 약한 알파벳 수익으로 AI 지출 우려 재점화 — GOOGL, MSFT, ORCL, NVDA, MRVL 집중",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793232628,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7c11aa7b13d25f9734f6b25b03f25b566f8e29cef3ff5b9ec4724d06d8e4187b",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "a4de3733f836f7284244",
          "headline": "Marvell의 잠재적인 Lumentum 거래로 LITE 급등, MRVL 슬라이딩 영업 시간 종료",
          "eventLabel": "경쟁사 공급 계약",
          "publishedAt": 1793229641,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a7ac38e3b75d8b20f00df25205cdba2be695f6f814b1959f6ba5f32de0b4b5d7",
          "factorChanges": {
            "competitiveRisk": -2,
            "customerConcentration": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "7cc311ad84eb7e832302",
          "headline": "Seagate, 강세에도 불구하고 가격 하향 조정, 목표 가격 인하 — 월스트리트가 STX 주식에 신중한 이유",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1793200424,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d70e3e7bf78175a32011b8b80bc0c228ceb85aaaaff8b1fa52c6b61dcafc2eba",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "df02b7da91cc89bbf19a",
          "headline": "현재 Nvidia, Microsoft, Google 수익을 넘어 AI에 투자",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793194984,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0af3008c6cef8022d5feb7b471579c6d332bc14fac691ab32e2fc18ee4cc27c0",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 7,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "GOOGL": {
      "ticker": "GOOGL",
      "updatedAt": 1793277398.198097,
      "dataAsOf": 1793244948,
      "signal": "주의 강화",
      "netScore": -6.93,
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
          "score": -1.92,
          "level": "주의"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": -0.7,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": -1.4,
          "level": "주의"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": -2.45,
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
          "eventId": "a8327a4a565aa72f693c",
          "headline": "CRWV, NBIS, IREN, APLD 주식은 Microsoft Capex가 지연된 타사 용량으로 부족하여 하락",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793244948,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cb204280fa7092b4182d9698ea71da4a7c0045c1b9ebbaf6d29044b74ef08484",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "b3ff9359d748ad08c739",
          "headline": "S&P 500, 나스닥 선물 하락으로 예상보다 약한 알파벳 수익으로 AI 지출 우려 재점화 — GOOGL, MSFT, ORCL, NVDA, MRVL 집중",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793232628,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7c11aa7b13d25f9734f6b25b03f25b566f8e29cef3ff5b9ec4724d06d8e4187b",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "a4de3733f836f7284244",
          "headline": "Marvell의 잠재적인 Lumentum 거래로 LITE 급등, MRVL 슬라이딩 영업 시간 종료",
          "eventLabel": "경쟁사 공급 계약",
          "publishedAt": 1793229641,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a7ac38e3b75d8b20f00df25205cdba2be695f6f814b1959f6ba5f32de0b4b5d7",
          "factorChanges": {
            "competitiveRisk": -2,
            "customerConcentration": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "bf8d3c21db2dd3c4d242",
          "headline": "Arm Holdings: 데이터 센터는 계속해서 약한 모바일을 상쇄할 것이지만 상승세는 내 경우에만 있을 것입니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793210565,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7585eccba9b344ec4f4f63bc7a68f665892546895db1913a0ce4081bb55d0768",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "df02b7da91cc89bbf19a",
          "headline": "현재 Nvidia, Microsoft, Google 수익을 넘어 AI에 투자",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793194984,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0af3008c6cef8022d5feb7b471579c6d332bc14fac691ab32e2fc18ee4cc27c0",
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 9,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMZN": {
      "ticker": "AMZN",
      "updatedAt": 1793277398.198097,
      "dataAsOf": 1793228296,
      "signal": "중립·확인 대기",
      "netScore": -1.06,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.22,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 1.05,
          "level": "우호적"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": -0.35,
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
          "score": -2.1,
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
          "eventId": "d171a344405acaf26c77",
          "headline": "Microsoft, Coca-Cola, Amazon이 AI 시대에 맞게 사무실을 조정하는 방법",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793228296,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9991a00881e982458e7d5c9acff0ec3ecedc947047424d056337dff2d9478227",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "bf8d3c21db2dd3c4d242",
          "headline": "Arm Holdings: 데이터 센터는 계속해서 약한 모바일을 상쇄할 것이지만 상승세는 내 경우에만 있을 것입니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793210565,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7585eccba9b344ec4f4f63bc7a68f665892546895db1913a0ce4081bb55d0768",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "0cc30b0f14807363ce79",
          "headline": "Jeff Bezos는 퇴직자들이 AI 주식 대신 S&P 500을 사야 한다고 말하지만 이는 생각보다 위험할 수 있습니다",
          "eventLabel": "공급망 문제",
          "publishedAt": 1793190945,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b03982d46b6d3a148a5a88cc228345f875f1ce2ad82b2fe826ae2415b7c043bd",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
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
          "eventId": "dbb13cafd7a6f3388759",
          "headline": "'사이버캡은 어디에 있습니까?' Tesla 투자자 Ross Gerber는 150개의 Robotaxis에 대한 Santa Monica 거래를 통해 Amazon의 Zoox Eyes 확장으로 Elon Musk를 목표로 삼고 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793154611,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2c54a2c998469db63613ae0fdfcc3c4181f092e6bf1d7d0a09d39cd2d1d2740e",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 9,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "META": {
      "ticker": "META",
      "updatedAt": 1793277398.198097,
      "dataAsOf": 1793225234,
      "signal": "주의 강화",
      "netScore": -5.2,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.57,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 4.55,
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
          "score": -3.67,
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
          "eventId": "69b5e39811833829593d",
          "headline": "Meta의 AI 야망에는 높은 대가가 따릅니다",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793225234,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=45d9593afa8cc67e17a7358160fb1b4abde8f804912d9a2685a52b4b5298216e",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "fd6fff7e1e52049bab51",
          "headline": "Meta는 주식 매각 가격을 주당 625달러로 책정했습니다. 같은 가격에 구매하는 것을 고려해 보겠습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793221022,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1f4734a24fab05e191a2c8b50eea4f086d7a18ddc868be49f4c633636719dbbd",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "5ae92e10dc3d25e9a723",
          "headline": "Meta는 975억 달러를 조달했습니다. Nvidia와 AMD가 인수하고 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793218852,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8f7e3e7f932a69ce7b2b2df88974e3be77b8cbfa3eeba4d7dd6dba2e089e2c17",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "3f4420f94d71b2bf3e2c",
          "headline": "메타의 풀백으로 인해 AI 위험/보상이 변경되었습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793211778,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=20dcfab1965940c00f0a0045273f9e1c01e84981054e19853db6379d453a2c08",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "b3a165f2708036be0933",
          "headline": "NVIDIA(NVDA)는 Oracle Meta 및 Schneider 거래에서 22% 저평가될 수 있습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793200150,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b639938f722e828944965227216db30071d14cf141a9cd59bd47c29733e092e6",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "6968f2938e7e5290d6b2",
          "headline": "NVIDIA, AMD 및 Broadcom은 자신들의 최대 고객인 Meta에 투자할 수도 있습니다. 그것이 무엇을 의미하는가",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793193223,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8a73d4df74feaffa4c4735f7585b2c168baca8cbf1e498e9084898289933694b",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 16,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AAPL": {
      "ticker": "AAPL",
      "updatedAt": 1793277398.198097,
      "dataAsOf": 1793193573,
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
          "eventId": "0ccbb90f27e707e20a27",
          "headline": "애플, 사상 처음으로 나스닥에 반대",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1793193573,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fdce60d9063e70c388f0c347e5733d7d64b10358084c09e9e2275e2d03ed1557",
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
    "TSLA": {
      "ticker": "TSLA",
      "updatedAt": 1793277398.198097,
      "dataAsOf": 1793198460,
      "signal": "중립·확인 대기",
      "netScore": -0.91,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
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
          "eventId": "c491193544c53c6dc4b1",
          "headline": "글로벌 배터리 여권 시장 보고서 2026 | Tesla, Siemens, SAP 및 Circulor가 EU 규정 준수, AI 및 블록체인을 확장함에 따라 2030년까지 34.2% CAGR을 활용합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793198460,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7c312fae754f71a0125d40ea0f9cc368b8d82e704ad40afaac0aa9cb3c9f1531",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "dbb13cafd7a6f3388759",
          "headline": "'사이버캡은 어디에 있습니까?' Tesla 투자자 Ross Gerber는 150개의 Robotaxis에 대한 Santa Monica 거래를 통해 Amazon의 Zoox Eyes 확장으로 Elon Musk를 목표로 삼고 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793154611,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2c54a2c998469db63613ae0fdfcc3c4181f092e6bf1d7d0a09d39cd2d1d2740e",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 3,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ORCL": {
      "ticker": "ORCL",
      "updatedAt": 1793277398.198097,
      "dataAsOf": 1793242500,
      "signal": "주의 강화",
      "netScore": -5.46,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.4,
          "level": "우호적"
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
          "score": -0.7,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": -1.4,
          "level": "주의"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": -2.45,
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
          "eventId": "a24cf18c75847fd48fda",
          "headline": "Anthropic IPO On Tap, NVIDIA 업데이트 및 기타 투자자의 날 시장 형성",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793242500,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=472379288115b67045e3b5e578e8e3ab68405f106aeecdd8df60290d99e15f58",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "b3ff9359d748ad08c739",
          "headline": "S&P 500, 나스닥 선물 하락으로 예상보다 약한 알파벳 수익으로 AI 지출 우려 재점화 — GOOGL, MSFT, ORCL, NVDA, MRVL 집중",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793232628,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7c11aa7b13d25f9734f6b25b03f25b566f8e29cef3ff5b9ec4724d06d8e4187b",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "a4de3733f836f7284244",
          "headline": "Marvell의 잠재적인 Lumentum 거래로 LITE 급등, MRVL 슬라이딩 영업 시간 종료",
          "eventLabel": "경쟁사 공급 계약",
          "publishedAt": 1793229641,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a7ac38e3b75d8b20f00df25205cdba2be695f6f814b1959f6ba5f32de0b4b5d7",
          "factorChanges": {
            "competitiveRisk": -2,
            "customerConcentration": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "fe23017121cb54edcd72",
          "headline": "Oracle 주식은 긍정적인 수익으로 반등하고 현금 흐름 예측으로 AI 불안 완화",
          "eventLabel": "실적 전망 변경",
          "publishedAt": 1793223227,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=239f97316f999980cf773c831f3373fa452e3c91c549bf6e6cef0f1b24e66dd1",
          "factorChanges": {
            "growth": -2,
            "shortTermMomentum": -2
          },
          "reason": "AI 매출 기회와 FCF·부채·신용 부담이 동시에 존재"
        },
        {
          "eventId": "7cc311ad84eb7e832302",
          "headline": "Seagate, 강세에도 불구하고 가격 하향 조정, 목표 가격 인하 — 월스트리트가 STX 주식에 신중한 이유",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1793200424,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d70e3e7bf78175a32011b8b80bc0c228ceb85aaaaff8b1fa52c6b61dcafc2eba",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "b3a165f2708036be0933",
          "headline": "NVIDIA(NVDA)는 Oracle Meta 및 Schneider 거래에서 22% 저평가될 수 있습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793200150,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b639938f722e828944965227216db30071d14cf141a9cd59bd47c29733e092e6",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
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
          "eventId": "5f58555bf679b2c2eeec",
          "headline": "Intel과 Oracle은 Oracle Cloud 인프라에서 엔터프라이즈 및 에이전트 AI를 지원하기 위해 협력을 확대할 계획입니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793116800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=280fc49edd8edfea8591e9552c3827d83e2c8a6eb7172450c7ef9165bbb1b312",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 12,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "CRM": {
      "ticker": "CRM",
      "updatedAt": 1793277398.198097,
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
      "updatedAt": 1793277398.198097,
      "dataAsOf": 1793208245,
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
          "eventId": "e3f368c321d690d6afec",
          "headline": "고릴라는 리바운드가 확장되고 하단 케이스가 구축됨에 따라 5% 상승합니다. Palantir 및 BigBear.ai 슬립",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793208245,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=dfab02a0d71a17c2fc432f362f6d2d28d5a86e5b774448a2fa31205788e0a007",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "a8abb2cff43bb0f3d76f",
          "headline": "Palantir의 수익 성장은 다음 대규모 주식 이동의 발판을 마련할 수 있습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793207025,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3a2ee42d8e228471f6d9769c5553dd0524be92f6293e748011ccfcc006a75e52",
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
    "NVDA": {
      "ticker": "NVDA",
      "updatedAt": 1793277398.198097,
      "dataAsOf": 1793244948,
      "signal": "중립·확인 대기",
      "netScore": 1.59,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
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
          "score": -4.55,
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
          "score": -5,
          "level": "주의"
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
          "eventId": "a8327a4a565aa72f693c",
          "headline": "CRWV, NBIS, IREN, APLD 주식은 Microsoft Capex가 지연된 타사 용량으로 부족하여 하락",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793244948,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cb204280fa7092b4182d9698ea71da4a7c0045c1b9ebbaf6d29044b74ef08484",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "b3ff9359d748ad08c739",
          "headline": "S&P 500, 나스닥 선물 하락으로 예상보다 약한 알파벳 수익으로 AI 지출 우려 재점화 — GOOGL, MSFT, ORCL, NVDA, MRVL 집중",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793232628,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7c11aa7b13d25f9734f6b25b03f25b566f8e29cef3ff5b9ec4724d06d8e4187b",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "fe23017121cb54edcd72",
          "headline": "Oracle 주식은 긍정적인 수익으로 반등하고 현금 흐름 예측으로 AI 불안 완화",
          "eventLabel": "실적 전망 변경",
          "publishedAt": 1793223227,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=239f97316f999980cf773c831f3373fa452e3c91c549bf6e6cef0f1b24e66dd1",
          "factorChanges": {
            "growth": 2,
            "shortTermMomentum": 2
          },
          "reason": "데이터센터 투자 지속 시 AI 컴퓨팅 수요 유지 가능성"
        },
        {
          "eventId": "5ae92e10dc3d25e9a723",
          "headline": "Meta는 975억 달러를 조달했습니다. Nvidia와 AMD가 인수하고 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793218852,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8f7e3e7f932a69ce7b2b2df88974e3be77b8cbfa3eeba4d7dd6dba2e089e2c17",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "bf8d3c21db2dd3c4d242",
          "headline": "Arm Holdings: 데이터 센터는 계속해서 약한 모바일을 상쇄할 것이지만 상승세는 내 경우에만 있을 것입니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793210565,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7585eccba9b344ec4f4f63bc7a68f665892546895db1913a0ce4081bb55d0768",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "cb96d6475446e3c318bb",
          "headline": "TSMC, AI 칩 패키징 가격 20% 인상 보고로 3% 상승",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793205355,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7aed059e3e7663c05adc28e8b5e725b6a5cc57874ac0e99e8e62d0067268851b",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "b6bf4aac1e8dd8d6fc2d",
          "headline": "Nvidia 파트너 Vertiv, 높은 수익 창출 후 S&P 500 상승세 선두로 전망 상승",
          "eventLabel": "실적 전망 변경",
          "publishedAt": 1793202234,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9953a7ddada4e44eb17362cbd04deb246a54f4e799b3f167a08d2d5f5f619310",
          "factorChanges": {
            "growth": 2,
            "shortTermMomentum": 2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "7cc311ad84eb7e832302",
          "headline": "Seagate, 강세에도 불구하고 가격 하향 조정, 목표 가격 인하 — 월스트리트가 STX 주식에 신중한 이유",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1793200424,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d70e3e7bf78175a32011b8b80bc0c228ceb85aaaaff8b1fa52c6b61dcafc2eba",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "b3a165f2708036be0933",
          "headline": "NVIDIA(NVDA)는 Oracle Meta 및 Schneider 거래에서 22% 저평가될 수 있습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793200150,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b639938f722e828944965227216db30071d14cf141a9cd59bd47c29733e092e6",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "a92b333ddd2a6164aa61",
          "headline": "Nvidia는 먼저 6조 달러를 침해할 가능성이 가장 높기 때문에 구매합니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1793198720,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=905809bc673115bda6ab9d4df75f3c5036b42a0397c16c31f6b56eeef3ad5f1b",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "c491193544c53c6dc4b1",
          "headline": "글로벌 배터리 여권 시장 보고서 2026 | Tesla, Siemens, SAP 및 Circulor가 EU 규정 준수, AI 및 블록체인을 확장함에 따라 2030년까지 34.2% CAGR을 활용합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793198460,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7c312fae754f71a0125d40ea0f9cc368b8d82e704ad40afaac0aa9cb3c9f1531",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "ad5a4b2c6f551544e7cd",
          "headline": "ASIC - 글로벌 전략 비즈니스 보고서: AMD, Broadcom, Intel, Infineon 및 Analog Devices가 AI, 5G 및 자동차 칩을 가속화함에 따라 2032년까지 62억 달러의 매출 변화를 포착",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793198160,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=de2b83cd840a8dfd7af87e65d55112888286581dc8d4356b9786e5278d96b88d",
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
      "updatedAt": 1793277398.198097,
      "dataAsOf": 1793218852,
      "signal": "중립·확인 대기",
      "netScore": 1.58,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.22,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 5,
          "level": "우호적"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": -4.72,
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
          "eventId": "5ae92e10dc3d25e9a723",
          "headline": "Meta는 975억 달러를 조달했습니다. Nvidia와 AMD가 인수하고 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793218852,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8f7e3e7f932a69ce7b2b2df88974e3be77b8cbfa3eeba4d7dd6dba2e089e2c17",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "cb96d6475446e3c318bb",
          "headline": "TSMC, AI 칩 패키징 가격 20% 인상 보고로 3% 상승",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793205355,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7aed059e3e7663c05adc28e8b5e725b6a5cc57874ac0e99e8e62d0067268851b",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ecc8599befe9b04afbc0",
          "headline": "Advanced Micro Devices vs. Dell Technologies: 2026년에는 어떤 기술 주식을 구매하는 것이 더 낫습니까?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793204402,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8c921f4939701f0734b940e207f79cd54cae036e98aed9b9757f51106f42fe32",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "c491193544c53c6dc4b1",
          "headline": "글로벌 배터리 여권 시장 보고서 2026 | Tesla, Siemens, SAP 및 Circulor가 EU 규정 준수, AI 및 블록체인을 확장함에 따라 2030년까지 34.2% CAGR을 활용합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793198460,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7c312fae754f71a0125d40ea0f9cc368b8d82e704ad40afaac0aa9cb3c9f1531",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "ad5a4b2c6f551544e7cd",
          "headline": "ASIC - 글로벌 전략 비즈니스 보고서: AMD, Broadcom, Intel, Infineon 및 Analog Devices가 AI, 5G 및 자동차 칩을 가속화함에 따라 2032년까지 62억 달러의 매출 변화를 포착",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793198160,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=de2b83cd840a8dfd7af87e65d55112888286581dc8d4356b9786e5278d96b88d",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "df02b7da91cc89bbf19a",
          "headline": "현재 Nvidia, Microsoft, Google 수익을 넘어 AI에 투자",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793194984,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0af3008c6cef8022d5feb7b471579c6d332bc14fac691ab32e2fc18ee4cc27c0",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "6968f2938e7e5290d6b2",
          "headline": "NVIDIA, AMD 및 Broadcom은 자신들의 최대 고객인 Meta에 투자할 수도 있습니다. 그것이 무엇을 의미하는가",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793193223,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8a73d4df74feaffa4c4735f7585b2c168baca8cbf1e498e9084898289933694b",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
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
          "eventId": "dbb13cafd7a6f3388759",
          "headline": "'사이버캡은 어디에 있습니까?' Tesla 투자자 Ross Gerber는 150개의 Robotaxis에 대한 Santa Monica 거래를 통해 Amazon의 Zoox Eyes 확장으로 Elon Musk를 목표로 삼고 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793154611,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2c54a2c998469db63613ae0fdfcc3c4181f092e6bf1d7d0a09d39cd2d1d2740e",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 22,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AVGO": {
      "ticker": "AVGO",
      "updatedAt": 1793277398.198097,
      "dataAsOf": 1793244948,
      "signal": "우호적 변화",
      "netScore": 5.53,
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
          "score": -1.92,
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
          "score": -1.4,
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
          "eventId": "a8327a4a565aa72f693c",
          "headline": "CRWV, NBIS, IREN, APLD 주식은 Microsoft Capex가 지연된 타사 용량으로 부족하여 하락",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793244948,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cb204280fa7092b4182d9698ea71da4a7c0045c1b9ebbaf6d29044b74ef08484",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "bcc4dddf425f6e73af21",
          "headline": "Broadcom 주가는 사상 최고치보다 29% 낮습니다. 새로운 인류애적 거래 이후에는 한 번에 조금씩 구매하는 것을 고려해 보겠습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793243522,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8e504641b1ec2e83d9afdb148b7fae5b41da3a32b99b4bdd80ebfd8c060c4943",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "a4de3733f836f7284244",
          "headline": "Marvell의 잠재적인 Lumentum 거래로 LITE 급등, MRVL 슬라이딩 영업 시간 종료",
          "eventLabel": "경쟁사 공급 계약",
          "publishedAt": 1793229641,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a7ac38e3b75d8b20f00df25205cdba2be695f6f814b1959f6ba5f32de0b4b5d7",
          "factorChanges": {
            "competitiveRisk": -2,
            "customerConcentration": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ad5a4b2c6f551544e7cd",
          "headline": "ASIC - 글로벌 전략 비즈니스 보고서: AMD, Broadcom, Intel, Infineon 및 Analog Devices가 AI, 5G 및 자동차 칩을 가속화함에 따라 2032년까지 62억 달러의 매출 변화를 포착",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793198160,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=de2b83cd840a8dfd7af87e65d55112888286581dc8d4356b9786e5278d96b88d",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "6968f2938e7e5290d6b2",
          "headline": "NVIDIA, AMD 및 Broadcom은 자신들의 최대 고객인 Meta에 투자할 수도 있습니다. 그것이 무엇을 의미하는가",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793193223,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8a73d4df74feaffa4c4735f7585b2c168baca8cbf1e498e9084898289933694b",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
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
          "eventId": "586cbc548dc46039b6a8",
          "headline": "나스닥, 이틀 연속 상승세",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793129400,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2f1aff593b0c377d243e6b61d5547b6699ec76c2ac57894c14cbd06b923cc45a",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 12,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "QCOM": {
      "ticker": "QCOM",
      "updatedAt": 1793277398.198097,
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
    "ARM": {
      "ticker": "ARM",
      "updatedAt": 1793277398.198097,
      "dataAsOf": 1793210565,
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
          "eventId": "bf8d3c21db2dd3c4d242",
          "headline": "Arm Holdings: 데이터 센터는 계속해서 약한 모바일을 상쇄할 것이지만 상승세는 내 경우에만 있을 것입니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793210565,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7585eccba9b344ec4f4f63bc7a68f665892546895db1913a0ce4081bb55d0768",
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
      "updatedAt": 1793277398.198097,
      "dataAsOf": 1793244948,
      "signal": "주의 강화",
      "netScore": -5.6,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.05,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 0.35,
          "level": "중립"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": -1.92,
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
          "eventId": "a8327a4a565aa72f693c",
          "headline": "CRWV, NBIS, IREN, APLD 주식은 Microsoft Capex가 지연된 타사 용량으로 부족하여 하락",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793244948,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cb204280fa7092b4182d9698ea71da4a7c0045c1b9ebbaf6d29044b74ef08484",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "b3ff9359d748ad08c739",
          "headline": "S&P 500, 나스닥 선물 하락으로 예상보다 약한 알파벳 수익으로 AI 지출 우려 재점화 — GOOGL, MSFT, ORCL, NVDA, MRVL 집중",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793232628,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7c11aa7b13d25f9734f6b25b03f25b566f8e29cef3ff5b9ec4724d06d8e4187b",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "0f474ab0c047e827075c",
          "headline": "Marvell은 Lumentum을 원합니다. Coherent가 승리할 수 있는 이유는 다음과 같습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1793231067,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=28044f1bdfed35192cda6393769ee1ca83652198a992d1c55b755fdbcf57fb74",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "75673e14f0ea4b2372b2",
          "headline": "Marvell의 잠재적인 Lumentum 거래로 LITE 급등, MRVL 슬라이딩 영업 시간 종료",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793229641,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a7ac38e3b75d8b20f00df25205cdba2be695f6f814b1959f6ba5f32de0b4b5d7",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "a4de3733f836f7284244",
          "headline": "Marvell의 잠재적인 Lumentum 거래로 LITE 급등, MRVL 슬라이딩 영업 시간 종료",
          "eventLabel": "경쟁사 공급 계약",
          "publishedAt": 1793229641,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a7ac38e3b75d8b20f00df25205cdba2be695f6f814b1959f6ba5f32de0b4b5d7",
          "factorChanges": {
            "competitiveRisk": -2,
            "customerConcentration": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "9890c4b919263373f5b8",
          "headline": "Marvell은 하드웨어 강화를 위해 광학 공급업체인 Lumentum과의 계약을 거의 마무리했다고 보고서는 밝혔습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793226376,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3d9600d05cdc52df13a874ccecaf3ed557f84ad4781631837525961e9f7920bb",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 8,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "INTC": {
      "ticker": "INTC",
      "updatedAt": 1793277398.198097,
      "dataAsOf": 1793198160,
      "signal": "주의 강화",
      "netScore": -2.45,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
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
          "score": -1.57,
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
          "eventId": "ad5a4b2c6f551544e7cd",
          "headline": "ASIC - 글로벌 전략 비즈니스 보고서: AMD, Broadcom, Intel, Infineon 및 Analog Devices가 AI, 5G 및 자동차 칩을 가속화함에 따라 2032년까지 62억 달러의 매출 변화를 포착",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793198160,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=de2b83cd840a8dfd7af87e65d55112888286581dc8d4356b9786e5278d96b88d",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 6,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "TSM": {
      "ticker": "TSM",
      "updatedAt": 1793277398.198097,
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
    "ASML": {
      "ticker": "ASML",
      "updatedAt": 1793277398.198097,
      "dataAsOf": 1793156571,
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
          "eventId": "be997cc1b1aa6e5b34ba",
          "headline": "ASML: 탁월한 반도체 사업, 높은 가치 평가",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793156571,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=81d63a7855a78c12adad0161f87cf472df1e9240e9f92f43a64df566acdcaea1",
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
      "updatedAt": 1793277398.198097,
      "dataAsOf": 1793203425,
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
          "eventId": "6e7c601025b1c2579a95",
          "headline": "SK하이닉스, 2030년 메모리 부족 신호에 칩 장비 주가 반등: Lam Research 5% 상승, Applied Materials 4% 상승, KLA 3% 상승",
          "eventLabel": "공급망 문제",
          "publishedAt": 1793203425,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=659ee2612727688b7fbf1c1d37f4c82d842b1688bba64a9d1ef6c5dc781758a7",
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
      "updatedAt": 1793277398.198097,
      "dataAsOf": 1793203425,
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
          "eventId": "6e7c601025b1c2579a95",
          "headline": "SK하이닉스, 2030년 메모리 부족 신호에 칩 장비 주가 반등: Lam Research 5% 상승, Applied Materials 4% 상승, KLA 3% 상승",
          "eventLabel": "공급망 문제",
          "publishedAt": 1793203425,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=659ee2612727688b7fbf1c1d37f4c82d842b1688bba64a9d1ef6c5dc781758a7",
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
    "KLAC": {
      "ticker": "KLAC",
      "updatedAt": 1793277398.198097,
      "dataAsOf": 1793203425,
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
          "eventId": "6e7c601025b1c2579a95",
          "headline": "SK하이닉스, 2030년 메모리 부족 신호에 칩 장비 주가 반등: Lam Research 5% 상승, Applied Materials 4% 상승, KLA 3% 상승",
          "eventLabel": "공급망 문제",
          "publishedAt": 1793203425,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=659ee2612727688b7fbf1c1d37f4c82d842b1688bba64a9d1ef6c5dc781758a7",
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
    "MU": {
      "ticker": "MU",
      "updatedAt": 1793277398.198097,
      "dataAsOf": 1793218852,
      "signal": "우호적 변화",
      "netScore": 6.78,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.22,
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
          "score": -3.5,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": 4.2,
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
          "eventId": "5ae92e10dc3d25e9a723",
          "headline": "Meta는 975억 달러를 조달했습니다. Nvidia와 AMD가 인수하고 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793218852,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8f7e3e7f932a69ce7b2b2df88974e3be77b8cbfa3eeba4d7dd6dba2e089e2c17",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "ddf1b99d13a98de2727a",
          "headline": "오늘 Micron Technology 주식이 반등한 이유",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1793203299,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d50314d1d04f4c1338ff555c0c4d1896e8f1025dd72b5ab9fa44627d53a37606",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "7896d4a22abeec462cc2",
          "headline": "크레이머: SK하이닉스가 2030년까지 메모리 부족을 예측함에 따라 마이크론은 “가장 큰 승자가 되어야 한다”",
          "eventLabel": "공급망 문제",
          "publishedAt": 1793201151,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f91771392c671ae94d7112e3c65197d6ee3307e17b823de62699d9ef121c8de4",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "c491193544c53c6dc4b1",
          "headline": "글로벌 배터리 여권 시장 보고서 2026 | Tesla, Siemens, SAP 및 Circulor가 EU 규정 준수, AI 및 블록체인을 확장함에 따라 2030년까지 34.2% CAGR을 활용합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793198460,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7c312fae754f71a0125d40ea0f9cc368b8d82e704ad40afaac0aa9cb3c9f1531",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "ad5a4b2c6f551544e7cd",
          "headline": "ASIC - 글로벌 전략 비즈니스 보고서: AMD, Broadcom, Intel, Infineon 및 Analog Devices가 AI, 5G 및 자동차 칩을 가속화함에 따라 2032년까지 62억 달러의 매출 변화를 포착",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793198160,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=de2b83cd840a8dfd7af87e65d55112888286581dc8d4356b9786e5278d96b88d",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "df02b7da91cc89bbf19a",
          "headline": "현재 Nvidia, Microsoft, Google 수익을 넘어 AI에 투자",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793194984,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0af3008c6cef8022d5feb7b471579c6d332bc14fac691ab32e2fc18ee4cc27c0",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "70c5c98d2e7aedc66bf0",
          "headline": "SK하이닉스는 7% 상승, 마이크론은 2030년까지 메모리 부족에 대한 우려로 3% 상승한 반면 Seagate는 긍정적인 지침에도 불구하고 하락",
          "eventLabel": "공급망 문제",
          "publishedAt": 1793192844,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8878a5a00ff7ca93ba6103a1bed0a256049f4137f6bd1a266e7ea88c8b08515e",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 23,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "SNDK": {
      "ticker": "SNDK",
      "updatedAt": 1793277398.198097,
      "dataAsOf": 1793213872,
      "signal": "주의 강화",
      "netScore": -4.83,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": -0.7,
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
          "score": -1.92,
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
          "eventId": "77ec71177a8469dc1ab2",
          "headline": "Sandisk는 지난 달에도 여전히 23% 하락했습니다. 오늘이 SNDK 주식의 바닥을 표시했나요?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793213872,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2cfcb49d805e538abb4f9fe3619e03ae6c510ccc7036550b013be9b2c6d9276d",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "48a9ae50330bd0c41a60",
          "headline": "Lumentum 대 Sandisk: 11월에 어느 기술주를 매수하는 것이 더 나을까요?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1793191801,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ba2a06fe299ded7b11ce052865f060a457c4d5b5520ce68881fcbe91eb756ea8",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 3,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "WDC": {
      "ticker": "WDC",
      "updatedAt": 1793277398.198097,
      "dataAsOf": 1793183016,
      "signal": "우호적 변화",
      "netScore": 2.8,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.7,
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
          "score": 0.0,
          "level": "중립"
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 2,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ANET": {
      "ticker": "ANET",
      "updatedAt": 1793277398.198097,
      "dataAsOf": 1793189882,
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
          "eventId": "296308f60a0381a9c9dc",
          "headline": "Arista Networks 대 DocuSign: 2026년에는 어느 기술주를 매수하는 것이 더 나은가요?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1793189882,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=97026ee43528e36c54bbd79f9c7e7a0331139f1bc95144bf128f65664cf3f961",
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
      "updatedAt": 1793277398.198097,
      "dataAsOf": 1793231067,
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
          "eventId": "0f474ab0c047e827075c",
          "headline": "Marvell은 Lumentum을 원합니다. Coherent가 승리할 수 있는 이유는 다음과 같습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1793231067,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=28044f1bdfed35192cda6393769ee1ca83652198a992d1c55b755fdbcf57fb74",
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
    "LITE": {
      "ticker": "LITE",
      "updatedAt": 1793277398.198097,
      "dataAsOf": 1793231067,
      "signal": "중립·확인 대기",
      "netScore": -1.33,
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
          "score": -1.92,
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
          "eventId": "0f474ab0c047e827075c",
          "headline": "Marvell은 Lumentum을 원합니다. Coherent가 승리할 수 있는 이유는 다음과 같습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1793231067,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=28044f1bdfed35192cda6393769ee1ca83652198a992d1c55b755fdbcf57fb74",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "75673e14f0ea4b2372b2",
          "headline": "Marvell의 잠재적인 Lumentum 거래로 LITE 급등, MRVL 슬라이딩 영업 시간 종료",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793229641,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a7ac38e3b75d8b20f00df25205cdba2be695f6f814b1959f6ba5f32de0b4b5d7",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "9890c4b919263373f5b8",
          "headline": "Marvell은 하드웨어 강화를 위해 광학 공급업체인 Lumentum과의 계약을 거의 마무리했다고 보고서는 밝혔습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793226376,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3d9600d05cdc52df13a874ccecaf3ed557f84ad4781631837525961e9f7920bb",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "83a0dfc19c7d2e1524e1",
          "headline": "애널리스트들이 AI 병목 현상을 지적함에 따라 광학 주식 상승: Lumentum 상승 4%, Applied Optoelectronics 및 Corning 상승 3%, Coherent가 랠리에서 벗어남",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1793207161,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5aaaf3e4f5a5529cfa5fc067fcacee5e1febcfd033680c1d480d1a9e5cd4c990",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "48a9ae50330bd0c41a60",
          "headline": "Lumentum 대 Sandisk: 11월에 어느 기술주를 매수하는 것이 더 나을까요?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1793191801,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ba2a06fe299ded7b11ce052865f060a457c4d5b5520ce68881fcbe91eb756ea8",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 7,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "GEV": {
      "ticker": "GEV",
      "updatedAt": 1793277398.198097,
      "dataAsOf": 1793196230,
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
          "eventId": "f78983a55af3f78af9b6",
          "headline": "GE Vernova는 비트, 레이즈 및 90억 달러 트렌치 딜에도 불구하고 6% 하락; Vertiv Holdings 주가 13% 상승, Eaton 및 Quanta 서비스 상승",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793196230,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7961acf2e1420647907dc7cdef9f816614a710ce1c57de7e780dee8ec2990697",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "386770f3c136019f0477",
          "headline": "GE Vernova는 비트, 레이즈 및 90억 달러 트렌치 딜에도 불구하고 6% 하락; Vertiv Holdings 주가 13% 상승, Eaton 및 Quanta 서비스 상승",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793196230,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7961acf2e1420647907dc7cdef9f816614a710ce1c57de7e780dee8ec2990697",
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
    "CEG": {
      "ticker": "CEG",
      "updatedAt": 1793277398.198097,
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
      "updatedAt": 1793277398.198097,
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
      "updatedAt": 1793277398.198097,
      "dataAsOf": 1793196230,
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
          "eventId": "f78983a55af3f78af9b6",
          "headline": "GE Vernova는 비트, 레이즈 및 90억 달러 트렌치 딜에도 불구하고 6% 하락; Vertiv Holdings 주가 13% 상승, Eaton 및 Quanta 서비스 상승",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793196230,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7961acf2e1420647907dc7cdef9f816614a710ce1c57de7e780dee8ec2990697",
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
    "PWR": {
      "ticker": "PWR",
      "updatedAt": 1793277398.198097,
      "dataAsOf": 1793196230,
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
          "eventId": "f78983a55af3f78af9b6",
          "headline": "GE Vernova는 비트, 레이즈 및 90억 달러 트렌치 딜에도 불구하고 6% 하락; Vertiv Holdings 주가 13% 상승, Eaton 및 Quanta 서비스 상승",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793196230,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7961acf2e1420647907dc7cdef9f816614a710ce1c57de7e780dee8ec2990697",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "386770f3c136019f0477",
          "headline": "GE Vernova는 비트, 레이즈 및 90억 달러 트렌치 딜에도 불구하고 6% 하락; Vertiv Holdings 주가 13% 상승, Eaton 및 Quanta 서비스 상승",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793196230,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7961acf2e1420647907dc7cdef9f816614a710ce1c57de7e780dee8ec2990697",
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
    "HUBB": {
      "ticker": "HUBB",
      "updatedAt": 1793277398.198097,
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "VRT": {
      "ticker": "VRT",
      "updatedAt": 1793277398.198097,
      "dataAsOf": 1793240871,
      "signal": "중립·확인 대기",
      "netScore": -0.84,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.05,
          "level": "우호적"
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
          "score": -1.4,
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
          "eventId": "e6cd1e6928876ef1cb72",
          "headline": "오늘 Vertiv 주가가 급등한 이유",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793240871,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2aa29b5532d018a86c41bf7b7674eeb94ae16a98e954121dcf246295daadcd6c",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "7c80abe80ba1e3bfbb45",
          "headline": "AI 주식 3개로 수익 압도",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793216771,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=51312f08e61809cd0593658e034819eadd2339b166e88c83f49689ac811bcdc9",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "f78983a55af3f78af9b6",
          "headline": "GE Vernova는 비트, 레이즈 및 90억 달러 트렌치 딜에도 불구하고 6% 하락; Vertiv Holdings 주가 13% 상승, Eaton 및 Quanta 서비스 상승",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793196230,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7961acf2e1420647907dc7cdef9f816614a710ce1c57de7e780dee8ec2990697",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "386770f3c136019f0477",
          "headline": "GE Vernova는 비트, 레이즈 및 90억 달러 트렌치 딜에도 불구하고 6% 하락; Vertiv Holdings 주가 13% 상승, Eaton 및 Quanta 서비스 상승",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793196230,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7961acf2e1420647907dc7cdef9f816614a710ce1c57de7e780dee8ec2990697",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 5,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "MOD": {
      "ticker": "MOD",
      "updatedAt": 1793277398.198097,
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
      "updatedAt": 1793277398.198097,
      "dataAsOf": 1793211616,
      "signal": "주의 강화",
      "netScore": -4.34,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.7,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 1.05,
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
          "score": -2.45,
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
          "eventId": "e2cea34d1498685df352",
          "headline": "Seagate가 배당금을 인상했습니다. 0.5% 수익률이 이 주식의 주가 흐름에 대한 모든 것을 말해줍니다",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1793211616,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c75c8d32088aaa94374fe3de13ac5f230f2a164e34a7b7dad152a116cf972e50",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "70c5c98d2e7aedc66bf0",
          "headline": "SK하이닉스는 7% 상승, 마이크론은 2030년까지 메모리 부족에 대한 우려로 3% 상승한 반면 Seagate는 긍정적인 지침에도 불구하고 하락",
          "eventLabel": "공급망 문제",
          "publishedAt": 1793192844,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8878a5a00ff7ca93ba6103a1bed0a256049f4137f6bd1a266e7ea88c8b08515e",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 7,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "EME": {
      "ticker": "EME",
      "updatedAt": 1793277398.198097,
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
      "updatedAt": 1793277398.198097,
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
      "updatedAt": 1793277398.198097,
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
