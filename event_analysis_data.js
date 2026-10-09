// 자동 생성 파일 - 중요 뉴스의 기업분석 반영
const EVENT_ANALYSIS_DATA = {
  "schemaVersion": 1,
  "generatedAt": 1791583205.2596593,
  "records": {
    "MSFT": {
      "ticker": "MSFT",
      "updatedAt": 1791583205.2596593,
      "dataAsOf": 1791553845,
      "signal": "주의 강화",
      "netScore": -3.02,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.52,
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
          "score": -2.27,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -1.58,
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
          "eventId": "fe6465d0e267a6d589bb",
          "headline": "트럼프는 마이크로소프트의 영주권 프로그램을 중단하고 마이크로소프트 CEO에게 상을 수여했다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791553845,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c65a35fead8908d67da39460773ba4def609fa9292d839984308bb8ce470d2da",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "9f18a2e121475bcdbbfa",
          "headline": "Microsoft는 H-1B 비자 남용으로 영주권 프로그램을 중단했습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791490888,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=007b80dde659da10d73d211ec5e6f2448cebff8fde015c25481965f3b5bab51c",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "a9aaf9c6fcdfbb92db9b",
          "headline": "MSFT, ORCL, NVDA, QQQ 초점: OpenAI의 연간 수익이 이전 기대치를 200억 달러 앞선 것으로 보고됨",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791486101,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d335cd5884c9a8b6781e302123b1ea8b4f338c3bfc5cd122bfd5a9cb870a7bc7",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "8531f2c0a5605fe1c700",
          "headline": "Microsoft는 영주권 프로그램에서 정지되었습니다. Vance는 회사의 H-1B 남용을 비난합니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1791473992,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=10e73f0f555c76cf3e16887e63a0a8e2f11b2b06fdc19c738f2e43ddfadc83db",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "3634b71fcdf6347f3804",
          "headline": "Resilinc는 Microsoft Copilot에 공급망 위험 및 규정 준수 인텔리전스를 제공합니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791471600,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=60014afd26ef702d1e8ed917404ce1bfcd1ce309bd55a136407c4c036f0c7467",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "8c682677fccf26451302",
          "headline": "Dan Ives는 NVDA, MSFT, PLTR, AAPL 및 CRWD를 최고의 AI 선택으로 포함하여 AI 구축이 아직 초기 단계에 있다고 생각합니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791399618,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1bc7e28d7009bc9b9c4a2a723dd899b3dd853fe658552bbb86d0f15bad9a4ad1",
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
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 7,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "GOOGL": {
      "ticker": "GOOGL",
      "updatedAt": 1791583205.2596593,
      "dataAsOf": 1791529087,
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
          "score": 4.02,
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
          "eventId": "59e4f86035423189a73b",
          "headline": "국회의원들은 Google의 1천만 달러 규모의 Spirit Airlines 데이터 거래를 반대했습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791529087,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2849bf8d454646a5369d6414fd2a944c74818de6bd75096be18dfba14fd06f2c",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "e2b812a1479b7da4b884",
          "headline": "Constellation Energy(CEG): Google의 핵 거래가 게임 체인저입니까?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791494395,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2b004265717e216dc838ef3fecf54e3b2d01265062330d0c011b0fb0635c577b",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "2f1056121b1062bb39c6",
          "headline": "Southlight Services, 북미 전역에 Google Voice Carrier Link 제공을 위해 Google과의 전략적 협력 발표",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791480240,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b7a7ac6fc81bbed9453d7078fb5a908108e6b39035ebfaa043f8809b587c8543",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "b863482aca6546fb4cd0",
          "headline": "Google의 핵 지름길로 하나의 전력 주식에 기록적인 거래가 이루어졌습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791473496,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=86aa39f2fbe6db8aa67a53a4b069a588147b70ea0f065f008b834dbb048b071e",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "8e6b3020bfac52124a2a",
          "headline": "Marvell: Easy Money는 이미 끝났습니다(다운그레이드)",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791457364,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=06710301215c866b10ab94934c100b690b7478847b7e6d76c08851e1308c8c8a",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "5d12d6897d274bbca548",
          "headline": "Arden University와 Google Cloud, 취업 준비가 된 AI 기반 졸업생의 개발을 보장하기 위해 전략적 파트너십 체결",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791442860,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=777aebb8c114962feb7da4c82fe503e8faa9ecd4c46944ccef2e3a36e2925af5",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "6ed6cad9d09a3f8fb9ab",
          "headline": "SPCX 주가 밤새 상승: Jim Cramer는 SpaceX가 Nvidia의 최대 고객이 될 수 있다고 말하고 Ives는 400억 달러의 칩 자금 조달을 지원합니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791429532,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b8b387287f4fb614b96b275182e2bc2c6cf06033bcc410d0302e9d0d944ad345",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "22f0ec91a3fce52724c7",
          "headline": "Google, Constellation Ink, 원자력 발전 용량 확장 계약 체결",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791390480,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8cc1325a7fb58fa3ad2093e75fe656bea5f63cc4861bb39723ca75c0e59f2449",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "15e1980cd8fa36812bf0",
          "headline": "Google의 원자력 거래가 Constellation Energy의 성장 전망을 강화할 수 있습니까?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791388500,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=40ac95ca9b33e980396465ef74121e18093634067e9c213d5cfd52b26142ae92",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "6a7e8e87610b748e4154",
          "headline": "Constellation은 Google과 3,590MW 전력 계약을 체결했습니다. AI의 가장 조용한 승자는 오랫동안 가만히 있지 못할 수도 있습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791387145,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7a25470919fad5708c48820f47e13a70211caafc2cf50c27dae887d0c51e9c3b",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 13,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMZN": {
      "ticker": "AMZN",
      "updatedAt": 1791583205.2596593,
      "dataAsOf": 1791562210,
      "signal": "중립·확인 대기",
      "netScore": 0.85,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.92,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 2.45,
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
          "score": -2.62,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -0.17,
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
          "eventId": "2b30d5000eba244d316f",
          "headline": "Amazon 집단소송 합의를 청구하기에는 너무 늦었나요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791562210,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=85dad9ebb0b27b4619926dd7f1d73efd10bd15ff5988d84477d35f2ed6544e28",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "dad755989bd54118e403",
          "headline": "Amazon Prime Big Deal Days의 미국 내 온라인 지출액은 100억 달러에 육박했습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791558480,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=68dfccfef3dfc71531c1459391c064408767479da66df7e85773d30c9d58dcee",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "e6a36c5250494a6d0e1b",
          "headline": "Amazon(AMZN)은 AI 및 운전자 지불에 수십억 달러를 지출하고 있습니다. 투자가 성과를 거둘까요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791498826,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=480d0278e9415f67fb08a7d9aba8ba0ac1c14e9325a7def6614f556a719e3876",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "f0a9d886c71edf1dafc9",
          "headline": "Amazon 공급업체는 낙관적인 분석가의 전화로부터 힘을 얻습니다. 주가가 오르고 있다",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791473228,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=805c2a6d9d87f0d0240868fda436bf18c46b2cd452cb6c6ab541eea13c70d645",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "d1600fe442951b936c9f",
          "headline": "SpaceX, Broadcom 및 Oracle은 모두 동시에 수십억 달러의 AI 칩 부채를 원합니다",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791470359,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=323b5e7496b6179c03adb490679e8ecff0e2288260421d1f7b79d2addeb2f505",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "클라우드 CAPEX 경쟁과 가격·마진 압력 비교 필요"
        },
        {
          "eventId": "8e6b3020bfac52124a2a",
          "headline": "Marvell: Easy Money는 이미 끝났습니다(다운그레이드)",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791457364,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=06710301215c866b10ab94934c100b690b7478847b7e6d76c08851e1308c8c8a",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "31c376826ac16d8cc9fa",
          "headline": "부채가 1,690억 달러를 초과함에 따라 Oracle은 AI 칩 파이낸싱을 위해 Apollo와 Goldman을 법원에 두었습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791444565,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8cba902fdbf4c98796045178cc3e7f0a079733def44aa1fabd54fd3309ddd570",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "클라우드 CAPEX 경쟁과 가격·마진 압력 비교 필요"
        },
        {
          "eventId": "c49b8222f81785e999a2",
          "headline": "Broadcom, Oracle, SpaceX, AI 구축 속에서 블록버스터 부채 거래 추진 - WSJ",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791410308,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5aac99229d1977e1003724bed3b6ede51d18663bd7c2253045e5e1c57b312348",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "클라우드 CAPEX 경쟁과 가격·마진 압력 비교 필요"
        },
        {
          "eventId": "80b2ddbea274b27af1df",
          "headline": "지금은 아마존과 알파벳 주식을 매수하기에 완벽한 시기입니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791400140,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8c060be30d9303bebd5afcb29f6f25d198408118a352ded86fb3365414b3af36",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 11,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "META": {
      "ticker": "META",
      "updatedAt": 1791583205.2596593,
      "dataAsOf": 1791395520,
      "signal": "우호적 변화",
      "netScore": 3.14,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.52,
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
          "eventId": "996ffd4aed212a28a424",
          "headline": "Meta의 Muse인 Agentic AI는 이러한 소매 전력 공급업체를 압박할 수 있습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791395520,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=dd3a838c8d4e7d5a7940661ce7ee5e1dc562e59e33058befe515a9bbb65e8450",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 2,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AAPL": {
      "ticker": "AAPL",
      "updatedAt": 1791583205.2596593,
      "dataAsOf": 1791566997,
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
          "eventId": "671f338353c7174cd049",
          "headline": "Apple, 수요 감소로 iPhone 18 Pro 부품 주문 축소",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791566997,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=bbc1ccba3ef652377225b07996acddab21270e3436a5a435ac3c378e6c501620",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "가격 전가 시 마진 방어, 판매량·교체주기 둔화 위험"
        },
        {
          "eventId": "1a87ad946015e0f9ceeb",
          "headline": "비스트라 주식은 20% 상승 후 하루 만에 6% 하락했습니다. 11월 6일 보고서에서 보여줘야 할 내용은 다음과 같습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791563077,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9bf88512560c617662abaa1dea7ea70b556c72c67c149d10bc0c56327e5a27df",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "가격 전가 시 마진 방어, 판매량·교체주기 둔화 위험"
        },
        {
          "eventId": "39620d981a5234077c37",
          "headline": "Apple, 보고된 iPhone 18 Pro 부품 주문 삭감에서 3% 감소; Skyworks는 미끄러지고 Qualcomm은 물을 밟습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791552692,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7fd98fe8bd34a91a2327e908d6e4c118ad133d68743b12399bd954d86e5b6a6b",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "가격 전가 시 마진 방어, 판매량·교체주기 둔화 위험"
        },
        {
          "eventId": "5b2181f5801ef9f34035",
          "headline": "Stocktwits Wall Street Wrap: 분석가들은 Nike가 다운그레이드를 직면함에 따라 Palantir, Marvell 및 Cava에 대해 낙관적 반응을 보였습니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791536771,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=25491a2cc68a9b4d38be43d53e0a2e92e3bfe9746d919c2e4f58f2a2fa505e5b",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d45910c7a64317b2e30c",
          "headline": "나스닥 선물이 프리마켓 상승세를 보이는 이유는 무엇입니까? SPCX, ASTS, AAPL, TMUS, VZ, NVDA, MU, LITE 주식에 집중",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791535137,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5504b507413e1a9d7c270522973a489c5cd47b850ea6963230d7c505460e0693",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "가격 전가 시 마진 방어, 판매량·교체주기 둔화 위험"
        },
        {
          "eventId": "04eee22a6c37cbdff3fb",
          "headline": "Stocktwits AI 요약: OpenAI 매출 문제로 인해 칩 주식이 하락하고 SoftBank가 1000억 달러를 사냥하고 Microsoft가 AI 우선으로 전환",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791528210,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=904739f60c9136de943044b8335811943bdc533a33ad1ab2080f92ba1e57cb39",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "228f218c4f4e52defa8e",
          "headline": "트럼프 매입 보고 후 META 주식 소거: Meta는 미국, 기타 6개 지역에서 TikTok 광고 금지",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791519407,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ee763e1c32c6ca63ebb0fbe87d5664e92caf8e1182a1bdcea9ca1c0c1d803ce1",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "6ff645f8439d87b1a104",
          "headline": "BA, SPCX, RKLB, RTX, PLTR 주식에 초점을 맞췄습니다: Barclays가 항공우주 및 국방 주식에 비중을 두는 이유는 무엇입니까?",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791504951,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cb92fd5bc719d64e8c00e22304e91e0dda90aa2585072381a2030d6768615576",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "a25642e3d7b8341bf995",
          "headline": "엔비디아, 애플, 마이크로소프트가 인덱스 투자자들에게 문제를 일으키다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791496465,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=39f10c0253fff9d4ac5a10c3ed0a73c61f4c5cb7d946862d6828e087ae4483ca",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "a9aaf9c6fcdfbb92db9b",
          "headline": "MSFT, ORCL, NVDA, QQQ 초점: OpenAI의 연간 수익이 이전 기대치를 200억 달러 앞선 것으로 보고됨",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791486101,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d335cd5884c9a8b6781e302123b1ea8b4f338c3bfc5cd122bfd5a9cb870a7bc7",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "6e295b24144d778e5301",
          "headline": "Securitize는 솔라나에서 Apple, Nvidia 및 기타 10개 미국 주식의 1:1 담보 토큰을 출시합니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791471289,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d8806409c3d3cce81ff5196291c460db87540eab00615dac15af62cd56db8493",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "7ca87bb4126792c8e111",
          "headline": "MSFT 주식 4일 연속 상승: Microsoft, Nvidia 기반 Surface Ultra, 더 많은 온디바이스 AI로 Apple Mac에 도전",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791430123,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=268d09bdbd448ce19249fa8a75b58c90a52f2dbad958d1f9a54846bbc108ef59",
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
      "unverifiedEvidenceCount": 12,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "TSLA": {
      "ticker": "TSLA",
      "updatedAt": 1791583205.2596593,
      "dataAsOf": 1791557744,
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
          "eventId": "36a8a2e960f9a005b82a",
          "headline": "Tesla는 유럽의 브랜드 변경으로 완전 자율 주행 이름이 삭제되면서 3% 상승합니다. 리비안 이즈(Rivian Eases), 루시드 틱스 업(Lucid Ticks Up)",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791557744,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4f3fdaf1aef71c14c17c968b989f101123c1be5919a6314bea1e83c82552c98e",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "80612a79a88d002a8eb6",
          "headline": "'Tesla는 FSD 검토를 완화하기 위해 네덜란드 규제 기관에 의지했습니다' - Electrek.co",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791453840,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0e63bac2fe2cb478d4c6085d399e569ae4d18da9b7711bfbb3854fd4f60365ba",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 3,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ORCL": {
      "ticker": "ORCL",
      "updatedAt": 1791583205.2596593,
      "dataAsOf": 1791500119,
      "signal": "우호적 변화",
      "netScore": 5.94,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 2.45,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 4.02,
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
          "score": -1.4,
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
          "eventId": "0da77ecf3775d7a10e26",
          "headline": "Nasdaq 100은 예상보다 약한 OpenAI 수익이 칩 제조업체를 끌고 있다는 보고로 하락 마감 - NVDA, DIS, ORCL, SBUX 집중",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791500119,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=dc1918cd0feb30add5eacf5d2b3e01797f856a03f979aebef0e228fc128111a6",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "a9aaf9c6fcdfbb92db9b",
          "headline": "MSFT, ORCL, NVDA, QQQ 초점: OpenAI의 연간 수익이 이전 기대치를 200억 달러 앞선 것으로 보고됨",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791486101,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d335cd5884c9a8b6781e302123b1ea8b4f338c3bfc5cd122bfd5a9cb870a7bc7",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "f00999ec62bc5ed0819e",
          "headline": "MSFT, ORCL, NVDA, QQQ 초점: OpenAI의 연간 수익이 이전 기대치를 200억 달러 앞선 것으로 보고됨",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791486101,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d335cd5884c9a8b6781e302123b1ea8b4f338c3bfc5cd122bfd5a9cb870a7bc7",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d1600fe442951b936c9f",
          "headline": "SpaceX, Broadcom 및 Oracle은 모두 동시에 수십억 달러의 AI 칩 부채를 원합니다",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791470359,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=323b5e7496b6179c03adb490679e8ecff0e2288260421d1f7b79d2addeb2f505",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 매출 기회와 FCF·부채·신용 부담이 동시에 존재"
        },
        {
          "eventId": "9afa81f2fd8a198fa09d",
          "headline": "Lam Research(LRCX)는 장기 투자자를 위한 스마트 AI 주식 선택인가요?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791466483,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=13beb1581587ecf772a10fdfd16c026610c4b282cf71b1878f62b20d87663871",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "클라우드 수요와 자본 부담 동시 확대"
        },
        {
          "eventId": "6f0c95af1535afa052e1",
          "headline": "에너지 전환에 관한 최신 뉴스 - Oracle, Scout의 풍력 에너지 파트너십으로 강화",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791459441,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0093ee3f8a84b41fb87ecf69e05e0113030614c6549dab525fb6fd505d196993",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "OCI 서비스 범위 확대 가능성, 매출화 시점 불확실"
        },
        {
          "eventId": "31c376826ac16d8cc9fa",
          "headline": "부채가 1,690억 달러를 초과함에 따라 Oracle은 AI 칩 파이낸싱을 위해 Apollo와 Goldman을 법원에 두었습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791444565,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8cba902fdbf4c98796045178cc3e7f0a079733def44aa1fabd54fd3309ddd570",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "AI 매출 기회와 FCF·부채·신용 부담이 동시에 존재"
        },
        {
          "eventId": "c49b8222f81785e999a2",
          "headline": "Broadcom, Oracle, SpaceX, AI 구축 속에서 블록버스터 부채 거래 추진 - WSJ",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791410308,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5aac99229d1977e1003724bed3b6ede51d18663bd7c2253045e5e1c57b312348",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 매출 기회와 FCF·부채·신용 부담이 동시에 존재"
        },
        {
          "eventId": "8d7c2623291f8a3ca05c",
          "headline": "Broadcom, Oracle, SpaceX, AI 구축 속에서 블록버스터 부채 거래 추진 - WSJ",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791410308,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5aac99229d1977e1003724bed3b6ede51d18663bd7c2253045e5e1c57b312348",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 9,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "CRM": {
      "ticker": "CRM",
      "updatedAt": 1791583205.2596593,
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
      "updatedAt": 1791583205.2596593,
      "dataAsOf": 1791480900,
      "signal": "중립·확인 대기",
      "netScore": 0.14,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
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
          "eventId": "02b64d96c8e66247c116",
          "headline": "Palantir는 컨설팅 회사처럼 보입니다. 숫자는 다른 이야기를 말해줍니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791480900,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0d56efe9debf9d0b56130102fa21be3e9bf10771c8e0a85eeef74111cdfa438b",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "e79bba2f8778a746c473",
          "headline": "Palantir는 Goldman Sachs가 $230 목표 매수로 업그레이드함에 따라 3% 상승합니다. Salesforce와 ServiceNow가 안정적으로 유지됩니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791466124,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=bae5dac33524acfd76938a35b6896f8de23f2cc85d2aebf802816883e9eb4a97",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "99d88be02bfcedd0370c",
          "headline": "970억 명의 Nvidia 파트너가 강력한 구매 승인을 받았습니다(힌트: Palantir나 Micron이 아닙니다).",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791451550,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ccf6ab80bb16ba63f4622e7ed7104893c570abe3dc68ce5b598f6094a9e8c8f2",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "6b2a0da04765637ded49",
          "headline": "나스닥, 다우선물이 프리마켓 하락하는 이유는 무엇입니까? MU, TSM, APLD, IONQ, HOOD, BULL, SLS 집중",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791449153,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4492c35fd295d25911fc568e592b942d67cf9e63d948af16413b4cfee61b7339",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "a0cb060389eca7f5bab8",
          "headline": "주간 승리를 위한 TSLA 주식 헤드: Dan Ives는 AI에서 30% 이상의 상승 여력을 확인하고 UBS는 설정을 '전술적으로 유리함'이라고 부릅니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791440029,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=08870ec809331f02e14de7087e4b9a110933f968747bc06ad4fd1d67d94306fd",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "7ca87bb4126792c8e111",
          "headline": "MSFT 주식 4일 연속 상승: Microsoft, Nvidia 기반 Surface Ultra, 더 많은 온디바이스 AI로 Apple Mac에 도전",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791430123,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=268d09bdbd448ce19249fa8a75b58c90a52f2dbad958d1f9a54846bbc108ef59",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "8c682677fccf26451302",
          "headline": "Dan Ives는 NVDA, MSFT, PLTR, AAPL 및 CRWD를 최고의 AI 선택으로 포함하여 AI 구축이 아직 초기 단계에 있다고 생각합니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791399618,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1bc7e28d7009bc9b9c4a2a723dd899b3dd853fe658552bbb86d0f15bad9a4ad1",
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
    "NVDA": {
      "ticker": "NVDA",
      "updatedAt": 1791583205.2596593,
      "dataAsOf": 1791544534,
      "signal": "우호적 변화",
      "netScore": 7.36,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 3.32,
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
          "eventId": "d939363822cc9ee243bc",
          "headline": "OpenAI의 수익은 생각보다 200억 달러 낮은 것으로 알려졌습니다. 엔비디아는 1,700억 달러의 손실을 입었습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791544534,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=02d1180e33cad0a44d1e137920f4df3ccf8373dc16eae441792ce9b7f44d8401",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "d45910c7a64317b2e30c",
          "headline": "나스닥 선물이 프리마켓 상승세를 보이는 이유는 무엇입니까? SPCX, ASTS, AAPL, TMUS, VZ, NVDA, MU, LITE 주식에 집중",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791535137,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5504b507413e1a9d7c270522973a489c5cd47b850ea6963230d7c505460e0693",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "0da77ecf3775d7a10e26",
          "headline": "Nasdaq 100은 예상보다 약한 OpenAI 수익이 칩 제조업체를 끌고 있다는 보고로 하락 마감 - NVDA, DIS, ORCL, SBUX 집중",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791500119,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=dc1918cd0feb30add5eacf5d2b3e01797f856a03f979aebef0e228fc128111a6",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "e6a36c5250494a6d0e1b",
          "headline": "Amazon(AMZN)은 AI 및 운전자 지불에 수십억 달러를 지출하고 있습니다. 투자가 성과를 거둘까요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791498826,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=480d0278e9415f67fb08a7d9aba8ba0ac1c14e9325a7def6614f556a719e3876",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "a25642e3d7b8341bf995",
          "headline": "엔비디아, 애플, 마이크로소프트가 인덱스 투자자들에게 문제를 일으키다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791496465,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=39f10c0253fff9d4ac5a10c3ed0a73c61f4c5cb7d946862d6828e087ae4483ca",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "f6cc4e590fb5daf76b79",
          "headline": "AI 스타트업 Manus, 중국 Nixed Meta의 20억 달러 인수 후 5억 달러 모금",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791495963,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e1736bc5451fcbd2da15a662c034f6805e2a6458c64f8462b2b6833a84944bf6",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "2a1986aac8260a8063fe",
          "headline": "엔비디아(NVDA)의 200억 달러 규모의 Groq 거래가 법적 테스트에 직면해 있습니다. NVDA의 가치 평가에 중요한가요?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791492889,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b5b11d5eb9cbd15b5eedb123a9748e63d0a66e4a7a101d927678cb4d6ae358a9",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "b8fc28a499fe2cb0ad32",
          "headline": "Marvell 주가가 지난 달에 급등한 이유",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791491632,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=344754b23ac30189fb788930cbe59d469f96ee5f6a9a46276a5ce38af9f19f85",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "a9aaf9c6fcdfbb92db9b",
          "headline": "MSFT, ORCL, NVDA, QQQ 초점: OpenAI의 연간 수익이 이전 기대치를 200억 달러 앞선 것으로 보고됨",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791486101,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d335cd5884c9a8b6781e302123b1ea8b4f338c3bfc5cd122bfd5a9cb870a7bc7",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "f00999ec62bc5ed0819e",
          "headline": "MSFT, ORCL, NVDA, QQQ 초점: OpenAI의 연간 수익이 이전 기대치를 200억 달러 앞선 것으로 보고됨",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791486101,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d335cd5884c9a8b6781e302123b1ea8b4f338c3bfc5cd122bfd5a9cb870a7bc7",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "c3654cb40f390a214421",
          "headline": "SpaceX의 Google AI Pact는 최대 290억 달러의 가치가 있지만 투자자는 이에 투자해서는 안 됩니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791485640,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b0b95231046f0b8310670691279696082bc8932af91ec411878d0c7dabfd9a3b",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "6c0eba732d6c81b43135",
          "headline": "어플라이드 머티어리얼즈 vs. 퀄컴: 수익 추세가 투자자들에게 인공지능 기업에 대해 알려주는 것",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791484094,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=20c83b221deb77d972d17493bea4b80b68669a83416d5293f9d5ec06555d67ae",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 40,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMD": {
      "ticker": "AMD",
      "updatedAt": 1791583205.2596593,
      "dataAsOf": 1791544534,
      "signal": "우호적 변화",
      "netScore": 10,
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
          "eventId": "d939363822cc9ee243bc",
          "headline": "OpenAI의 수익은 생각보다 200억 달러 낮은 것으로 알려졌습니다. 엔비디아는 1,700억 달러의 손실을 입었습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791544534,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=02d1180e33cad0a44d1e137920f4df3ccf8373dc16eae441792ce9b7f44d8401",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "65ce9209ca77f6f75774",
          "headline": "한국 거대 기술 기업과 파운드리 파트너십을 계속 모색하면서 AMD 주식을 활용하는 방법",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791515463,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d6dd45883baf9c46b1bb2d37644c2b0019643efd7740f6b5d130175f663ba15c",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "4ebb3190921288b0d623",
          "headline": "Advanced Micro Devices vs. ASML: 2026년에는 어느 반도체 주식이 더 나은 매수인가요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791502971,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8d42f25c2ed44fae3597e64c63defe9bc77ce60ad76e26198e7ef0825841354b",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "e6a36c5250494a6d0e1b",
          "headline": "Amazon(AMZN)은 AI 및 운전자 지불에 수십억 달러를 지출하고 있습니다. 투자가 성과를 거둘까요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791498826,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=480d0278e9415f67fb08a7d9aba8ba0ac1c14e9325a7def6614f556a719e3876",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "f6cc4e590fb5daf76b79",
          "headline": "AI 스타트업 Manus, 중국 Nixed Meta의 20억 달러 인수 후 5억 달러 모금",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791495963,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e1736bc5451fcbd2da15a662c034f6805e2a6458c64f8462b2b6833a84944bf6",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "c3654cb40f390a214421",
          "headline": "SpaceX의 Google AI Pact는 최대 290억 달러의 가치가 있지만 투자자는 이에 투자해서는 안 됩니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791485640,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b0b95231046f0b8310670691279696082bc8932af91ec411878d0c7dabfd9a3b",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "6c0eba732d6c81b43135",
          "headline": "어플라이드 머티어리얼즈 vs. 퀄컴: 수익 추세가 투자자들에게 인공지능 기업에 대해 알려주는 것",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791484094,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=20c83b221deb77d972d17493bea4b80b68669a83416d5293f9d5ec06555d67ae",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "fcb4c776005573035d55",
          "headline": "억만장자 David Tepper가 Sandisk를 버리고 수조 달러 규모의 AI 칩 거물을 탄생시켰습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791483600,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=898d555a409bbd3fcc793c9debd14d2b25beacc40eb6254a32e199d1684a8732",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "52fc398e70e42733b242",
          "headline": "인텔은 칩 재고가 수율과 석유 증가로 인해 매도되면서 3% 하락했습니다. NVIDIA와 AMD 슬립",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791468343,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=852272da0a4e7b4b5cfacf539a6f04047fa8a06faa2a88a24f0156ef38d4f717",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "8971d58a6ec42312e22f",
          "headline": "Broadcom은 OpenAI AI 칩 자금 조달을 위해 500억 달러 이상을 모색합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791468120,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=21a665b9cb988d89968b47b6ba68d303e885416e23bf4052bfabe971843d3bf2",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "9afa81f2fd8a198fa09d",
          "headline": "Lam Research(LRCX)는 장기 투자자를 위한 스마트 AI 주식 선택인가요?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791466483,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=13beb1581587ecf772a10fdfd16c026610c4b282cf71b1878f62b20d87663871",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "18d699527c195647d30a",
          "headline": "Jim Cramer는 석유 급등, 높은 금리는 QQQ, SOXX 하락으로 세미 제품을 판매하는 '편리한 변명'이며 투자자들은 데이터 센터 지출에 의문을 제기한다고 말했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791445352,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=695b435703903066939f00c3cb5f5de1d7dee3c89828cd3d026d370de5c2f5e9",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 25,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AVGO": {
      "ticker": "AVGO",
      "updatedAt": 1791583205.2596593,
      "dataAsOf": 1791560460,
      "signal": "중립·확인 대기",
      "netScore": -0.7,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.57,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 1.75,
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
          "score": -4.2,
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
          "eventId": "de3ba4655c04b0eb9212",
          "headline": "예측: Nvidia와 Broadcom 사이의 5,000달러 투자 분할은 2028년까지 3배가 될 것입니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791560460,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=45c2fbe4395851537653a55d21551b439672c7ee7ab184e471e86264697c0a8a",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "cfb97f702f3eedc267ad",
          "headline": "Broadcom: 시장은 OpenAI/Anthropic을 완전히 잘못 보고 있을 가능성이 높습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791533579,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=50a69cdc12499f7ce350d12357292086497ef1ba70eae716994d168444360804",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "9e9e8d420e54b8ea1f19",
          "headline": "Nvidia vs. Broadcom: 향후 5년간 어떤 AI 칩 주식을 구매하는 것이 더 나은가요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791496140,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4f5c0ed61e2f3840a5c91a48ce06e2edd7964c85b43aac1ba3bca4ca906b05bd",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d1600fe442951b936c9f",
          "headline": "SpaceX, Broadcom 및 Oracle은 모두 동시에 수십억 달러의 AI 칩 부채를 원합니다",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791470359,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=323b5e7496b6179c03adb490679e8ecff0e2288260421d1f7b79d2addeb2f505",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "8e6b3020bfac52124a2a",
          "headline": "Marvell: Easy Money는 이미 끝났습니다(다운그레이드)",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791457364,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=06710301215c866b10ab94934c100b690b7478847b7e6d76c08851e1308c8c8a",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "b2059085a732eb6e4d02",
          "headline": "Broadcom, OpenAI 칩에 대한 자금 조달 거래에 대한 조기 논의",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791414437,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3af21f1c5d1f8df13b4d9213e32f59a0fbadf655ca3507a7621b274bf3902bb2",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "c49b8222f81785e999a2",
          "headline": "Broadcom, Oracle, SpaceX, AI 구축 속에서 블록버스터 부채 거래 추진 - WSJ",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791410308,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5aac99229d1977e1003724bed3b6ede51d18663bd7c2253045e5e1c57b312348",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "8d7c2623291f8a3ca05c",
          "headline": "Broadcom, Oracle, SpaceX, AI 구축 속에서 블록버스터 부채 거래 추진 - WSJ",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791410308,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5aac99229d1977e1003724bed3b6ede51d18663bd7c2253045e5e1c57b312348",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "4055867266143e5f7d3a",
          "headline": "시장 잡담: Broadcom, Oracle, SpaceX, AI 칩 구매를 위한 자금 조달 모색",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791410274,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=83d6292d2594f7ccb711d65d6db0810ed16e50936015d86e6a86fd223b1c8a66",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "1b6e3b824c40c9f9f1f0",
          "headline": "Broadcom vs. Qualcomm: 빠른 성장 vs. 수익 정체",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791393602,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5ff5d4c6bc446fe2bf7e7aaf2f6ed1f69fbba3edf4817a0de2ed9bd3b48f728a",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "56e0570df4fecf510b13",
          "headline": "ASML Holding N.V. 대 Broadcom: 2026년에는 어떤 기술 주식을 구매하는 것이 더 낫습니까?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791390302,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4281d0d244540c3d08d057dd9088d62322f08207645df39669e49f40a892da33",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
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
      "updatedAt": 1791583205.2596593,
      "dataAsOf": 1791566997,
      "signal": "주의 강화",
      "netScore": -6.8,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.87,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": -1.4,
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
          "eventId": "671f338353c7174cd049",
          "headline": "Apple, 수요 감소로 iPhone 18 Pro 부품 주문 축소",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791566997,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=bbc1ccba3ef652377225b07996acddab21270e3436a5a435ac3c378e6c501620",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "스마트폰 수요가 줄면 고객 칩 수요에 부담"
        },
        {
          "eventId": "1a87ad946015e0f9ceeb",
          "headline": "비스트라 주식은 20% 상승 후 하루 만에 6% 하락했습니다. 11월 6일 보고서에서 보여줘야 할 내용은 다음과 같습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791563077,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9bf88512560c617662abaa1dea7ea70b556c72c67c149d10bc0c56327e5a27df",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "스마트폰 수요가 줄면 고객 칩 수요에 부담"
        },
        {
          "eventId": "39620d981a5234077c37",
          "headline": "Apple, 보고된 iPhone 18 Pro 부품 주문 삭감에서 3% 감소; Skyworks는 미끄러지고 Qualcomm은 물을 밟습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791552692,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7fd98fe8bd34a91a2327e908d6e4c118ad133d68743b12399bd954d86e5b6a6b",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "스마트폰 수요가 줄면 고객 칩 수요에 부담"
        },
        {
          "eventId": "d45910c7a64317b2e30c",
          "headline": "나스닥 선물이 프리마켓 상승세를 보이는 이유는 무엇입니까? SPCX, ASTS, AAPL, TMUS, VZ, NVDA, MU, LITE 주식에 집중",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791535137,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5504b507413e1a9d7c270522973a489c5cd47b850ea6963230d7c505460e0693",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "스마트폰 수요가 줄면 고객 칩 수요에 부담"
        },
        {
          "eventId": "7eaa69bf985b663faf5d",
          "headline": "Qualcomm(QCOM), 광범위한 다년 특허 계약 체결",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791501357,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9a0072d39afdd5205bc0fe551cae3eef0e7cb8713ee3df600ac1803b173f6b37",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "1b6e3b824c40c9f9f1f0",
          "headline": "Broadcom vs. Qualcomm: 빠른 성장 vs. 수익 정체",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791393602,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5ff5d4c6bc446fe2bf7e7aaf2f6ed1f69fbba3edf4817a0de2ed9bd3b48f728a",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 8,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ARM": {
      "ticker": "ARM",
      "updatedAt": 1791583205.2596593,
      "dataAsOf": 1791470286,
      "signal": "중립·확인 대기",
      "netScore": 1.53,
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
          "score": -0.52,
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
          "eventId": "5abbacbca5733ef8382a",
          "headline": "월스트리트는 Arm의 AI 기회를 과소평가하고 있을지도 모른다",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1791470286,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=47b3152f2e94555ccd9ae12d920f85fafc0b912b969fc90a8980e022f5bcfff5",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "4e08a6e63bda19b41a2f",
          "headline": "Arm Holdings(ARM): 반도체 부문 매도 및 공급 실행 문제가 주식에 부담이 됩니다",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791464978,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1e509ee28254733c643eea97f3da920982c77ad7dd707e2a6aa89957b901e2c6",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "50700b81247a8b9181cd",
          "headline": "비주얼 컴퓨팅 - 글로벌 전략 비즈니스 보고서: 2030년까지 시장이 784억 달러로 급증함에 따라 CAGR 19.2%를 활용합니다. 벤치마크 Intel, Arm, Clarifai, Imagination Technologies 및 Leela AI",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791407880,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=36c3585ccd8fe6e010a7be06b57192429eb8ba892d7e8dc01c37cc9550e9dde6",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d1cf85a9755277b4866d",
          "headline": "ARM 대 Marvell Technology: 인공 지능 회사의 수익 추세가 투자자에게 알려주는 것",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791395721,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=986620ff35e3dac8c37a64b4c0328832ce712aebd04ad245ecde44235f3544e1",
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
    "MRVL": {
      "ticker": "MRVL",
      "updatedAt": 1791583205.2596593,
      "dataAsOf": 1791536771,
      "signal": "중립·확인 대기",
      "netScore": -1.89,
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
          "eventId": "5b2181f5801ef9f34035",
          "headline": "Stocktwits Wall Street Wrap: 분석가들은 Nike가 다운그레이드를 직면함에 따라 Palantir, Marvell 및 Cava에 대해 낙관적 반응을 보였습니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791536771,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=25491a2cc68a9b4d38be43d53e0a2e92e3bfe9746d919c2e4f58f2a2fa505e5b",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "4aa0c8243a67c802662d",
          "headline": "이 칩 제조업체가 2031년까지 매출에서 정말로 인텔을 추월할 수 있을까요?",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791458155,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4505e9b492cc5111c0a1647aa39e0b6ce0276415871608a1090ae9e1f1efda7b",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "71e017deb052339fbb62",
          "headline": "S&P 500과 Nasdaq 100은 국채 수익률 급증으로 인한 압력으로 사상 최고치에서 하락 — SPCX, AMD, NVDA, MRVL 집중",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791413451,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=50352b28347a16ef361adee73323be4f5be5b71231708705135708bc7bebdb49",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "4de798a2dd1fdec9b824",
          "headline": "Credo Technology Group vs. Marvell Technology: 2026년에는 어느 주식을 사는 것이 더 나을까요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791400741,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=91edad82563d74ab7c4ba72ee109f2ce2a0cfebbc7fdfbec88e540da88ce2df4",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "d1cf85a9755277b4866d",
          "headline": "ARM 대 Marvell Technology: 인공 지능 회사의 수익 추세가 투자자에게 알려주는 것",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791395721,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=986620ff35e3dac8c37a64b4c0328832ce712aebd04ad245ecde44235f3544e1",
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
    "INTC": {
      "ticker": "INTC",
      "updatedAt": 1791583205.2596593,
      "dataAsOf": 1791477826,
      "signal": "주의 강화",
      "netScore": -2.72,
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
          "score": -3.85,
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
          "eventId": "4bf1a54b82af689302d4",
          "headline": "Lumentum: 연결성을 정복하는 것이 인공 지능에서 매우 중요합니다",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791477826,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6ec5a96cbf3c7441b78957bfb6f5b60abae269e24db6f8de777f072854c7da74",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "3634b71fcdf6347f3804",
          "headline": "Resilinc는 Microsoft Copilot에 공급망 위험 및 규정 준수 인텔리전스를 제공합니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791471600,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=60014afd26ef702d1e8ed917404ce1bfcd1ce309bd55a136407c4c036f0c7467",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "52fc398e70e42733b242",
          "headline": "인텔은 칩 재고가 수율과 석유 증가로 인해 매도되면서 3% 하락했습니다. NVIDIA와 AMD 슬립",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791468343,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=852272da0a4e7b4b5cfacf539a6f04047fa8a06faa2a88a24f0156ef38d4f717",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "2ff0b725a617018e65a0",
          "headline": "TSMC는 3분기 실적을 앞지르고 상승할 가능성이 높습니다(미리보기)",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791462702,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5e42f55f82bffc44a4fc07300ae064a250666561ebabd24f3904bff1bf963b58",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "50700b81247a8b9181cd",
          "headline": "비주얼 컴퓨팅 - 글로벌 전략 비즈니스 보고서: 2030년까지 시장이 784억 달러로 급증함에 따라 CAGR 19.2%를 활용합니다. 벤치마크 Intel, Arm, Clarifai, Imagination Technologies 및 Leela AI",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791407880,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=36c3585ccd8fe6e010a7be06b57192429eb8ba892d7e8dc01c37cc9550e9dde6",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d1cf85a9755277b4866d",
          "headline": "ARM 대 Marvell Technology: 인공 지능 회사의 수익 추세가 투자자에게 알려주는 것",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791395721,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=986620ff35e3dac8c37a64b4c0328832ce712aebd04ad245ecde44235f3544e1",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "6d1f7a11661a39e4ceda",
          "headline": "인텔 vs. SK하이닉스: 2026년에는 어느 반도체 주식이 더 나은 매수인가?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791392282,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3f931e8954e5454c5b64cb900c9c20ecc039e3723dcbb11b623ece3afefdc104",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
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
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 8,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "TSM": {
      "ticker": "TSM",
      "updatedAt": 1791583205.2596593,
      "dataAsOf": 1791564359,
      "signal": "주의 강화",
      "netScore": -6.3,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.35,
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
          "score": -3.32,
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
          "eventId": "9af8b864e797e29277d2",
          "headline": "대만 반도체 대. ASML: 향후 5년 동안 하나를 선택해야 한다면 이것은 바로 이것입니다",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1791564359,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b2b1f684858bda722eaa564dd873690dacca6466bf55c00ed88cb8d5f8e1d5c0",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "2ff0b725a617018e65a0",
          "headline": "TSMC는 3분기 실적을 앞지르고 상승할 가능성이 높습니다(미리보기)",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791462702,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5e42f55f82bffc44a4fc07300ae064a250666561ebabd24f3904bff1bf963b58",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "6b2a0da04765637ded49",
          "headline": "나스닥, 다우선물이 프리마켓 하락하는 이유는 무엇입니까? MU, TSM, APLD, IONQ, HOOD, BULL, SLS 집중",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791449153,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4492c35fd295d25911fc568e592b942d67cf9e63d948af16413b4cfee61b7339",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "44b078dd0d932b6b6f2f",
          "headline": "GlobalFoundries, TSMC의 CoWoS 고급 패키징 생태계를 위한 미국 기반 실리콘 인터포저 공급을 위해 TSMC와 계약 체결",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791447247,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cccf5f0302644d0876b61c20e795d27f8637839f5dc4f59f0e8fe4465b36143c",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "dcd69b5527bcde43ba84",
          "headline": "SK하이닉스 vs. 대만 반도체 제조: 2026년에는 어느 컴퓨터 칩 주식이 더 나은 매수인가?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791395882,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6f9468cd74b5aefa0ba208e69fe3ccfd6ac8eb991ccd3c954eb85d253163f9a2",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "cfccc7d4814d2e4914c0",
          "headline": "TSM SEC Form 6-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1791385200.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1046179/000104617926000680/tsm-revenue20261008.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
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
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 6,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ASML": {
      "ticker": "ASML",
      "updatedAt": 1791583205.2596593,
      "dataAsOf": 1791564359,
      "signal": "주의 강화",
      "netScore": -4.69,
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
          "eventId": "9af8b864e797e29277d2",
          "headline": "대만 반도체 대. ASML: 향후 5년 동안 하나를 선택해야 한다면 이것은 바로 이것입니다",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1791564359,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b2b1f684858bda722eaa564dd873690dacca6466bf55c00ed88cb8d5f8e1d5c0",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "4ebb3190921288b0d623",
          "headline": "Advanced Micro Devices vs. ASML: 2026년에는 어느 반도체 주식이 더 나은 매수인가요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791502971,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8d42f25c2ed44fae3597e64c63defe9bc77ce60ad76e26198e7ef0825841354b",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "c427a40b80e88237452b",
          "headline": "ASML Holding (ASML)은 Mistral 거래가 이야기를 재구성함에 따라 가치 평가를 테스트합니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791443772,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a7bd1b7c441656694742776e8d8c93b81cbd0b026c409eac753452dc6d754bc3",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "56e0570df4fecf510b13",
          "headline": "ASML Holding N.V. 대 Broadcom: 2026년에는 어떤 기술 주식을 구매하는 것이 더 낫습니까?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791390302,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4281d0d244540c3d08d057dd9088d62322f08207645df39669e49f40a892da33",
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
    "AMAT": {
      "ticker": "AMAT",
      "updatedAt": 1791583205.2596593,
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
      "updatedAt": 1791583205.2596593,
      "dataAsOf": 1791466483,
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
          "eventId": "9afa81f2fd8a198fa09d",
          "headline": "Lam Research(LRCX)는 장기 투자자를 위한 스마트 AI 주식 선택인가요?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791466483,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=13beb1581587ecf772a10fdfd16c026610c4b282cf71b1878f62b20d87663871",
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
    "KLAC": {
      "ticker": "KLAC",
      "updatedAt": 1791583205.2596593,
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
      "updatedAt": 1791583205.2596593,
      "dataAsOf": 1791566997,
      "signal": "우호적 변화",
      "netScore": 8.18,
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
          "score": -4.9,
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
          "eventId": "671f338353c7174cd049",
          "headline": "Apple, 수요 감소로 iPhone 18 Pro 부품 주문 축소",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791566997,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=bbc1ccba3ef652377225b07996acddab21270e3436a5a435ac3c378e6c501620",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리 ASP와 이익률 개선 가능성"
        },
        {
          "eventId": "1a87ad946015e0f9ceeb",
          "headline": "비스트라 주식은 20% 상승 후 하루 만에 6% 하락했습니다. 11월 6일 보고서에서 보여줘야 할 내용은 다음과 같습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791563077,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9bf88512560c617662abaa1dea7ea70b556c72c67c149d10bc0c56327e5a27df",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리 ASP와 이익률 개선 가능성"
        },
        {
          "eventId": "01626ade4d283fed3664",
          "headline": "마이크론이 아닙니다. 샌디스크가 아닙니다. 이 메모리 주식은 조용히 점유율을 얻고 있습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791561600,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b97714a7847a56b1650a34e0b4facf97f71461d065340a5e6988429831899be7",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "39620d981a5234077c37",
          "headline": "Apple, 보고된 iPhone 18 Pro 부품 주문 삭감에서 3% 감소; Skyworks는 미끄러지고 Qualcomm은 물을 밟습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791552692,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7fd98fe8bd34a91a2327e908d6e4c118ad133d68743b12399bd954d86e5b6a6b",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리 ASP와 이익률 개선 가능성"
        },
        {
          "eventId": "22cbb37f00d0af998a5f",
          "headline": "이 레이더 메모리 주식은 3주 만에 46% 급등했습니다(힌트: Micron이나 Sandisk가 아닙니다).",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791551760,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=918c5118bcb4098b904f71a2c03b94487a16627820f312e84b5aa0dec40f13e8",
          "factorChanges": {
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d939363822cc9ee243bc",
          "headline": "OpenAI의 수익은 생각보다 200억 달러 낮은 것으로 알려졌습니다. 엔비디아는 1,700억 달러의 손실을 입었습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791544534,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=02d1180e33cad0a44d1e137920f4df3ccf8373dc16eae441792ce9b7f44d8401",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "d45910c7a64317b2e30c",
          "headline": "나스닥 선물이 프리마켓 상승세를 보이는 이유는 무엇입니까? SPCX, ASTS, AAPL, TMUS, VZ, NVDA, MU, LITE 주식에 집중",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791535137,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5504b507413e1a9d7c270522973a489c5cd47b850ea6963230d7c505460e0693",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리 ASP와 이익률 개선 가능성"
        },
        {
          "eventId": "d6d070de7dd939bacf4c",
          "headline": "마이크론(MU)은 넷리스트 거래, 강력한 수익 및 배당 확인 후 5.6% 하락 - 변경된 사항",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791522843,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e89833fac1ce90687857686aff107c97b35c28107657334c885ed11d4c63fb0f",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "e6a36c5250494a6d0e1b",
          "headline": "Amazon(AMZN)은 AI 및 운전자 지불에 수십억 달러를 지출하고 있습니다. 투자가 성과를 거둘까요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791498826,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=480d0278e9415f67fb08a7d9aba8ba0ac1c14e9325a7def6614f556a719e3876",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "f6cc4e590fb5daf76b79",
          "headline": "AI 스타트업 Manus, 중국 Nixed Meta의 20억 달러 인수 후 5억 달러 모금",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791495963,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e1736bc5451fcbd2da15a662c034f6805e2a6458c64f8462b2b6833a84944bf6",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "c3654cb40f390a214421",
          "headline": "SpaceX의 Google AI Pact는 최대 290억 달러의 가치가 있지만 투자자는 이에 투자해서는 안 됩니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791485640,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b0b95231046f0b8310670691279696082bc8932af91ec411878d0c7dabfd9a3b",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "6c0eba732d6c81b43135",
          "headline": "어플라이드 머티어리얼즈 vs. 퀄컴: 수익 추세가 투자자들에게 인공지능 기업에 대해 알려주는 것",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791484094,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=20c83b221deb77d972d17493bea4b80b68669a83416d5293f9d5ec06555d67ae",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 33,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "SNDK": {
      "ticker": "SNDK",
      "updatedAt": 1791583205.2596593,
      "dataAsOf": 1791561600,
      "signal": "우호적 변화",
      "netScore": 2.58,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.7,
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
          "score": -0.7,
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
          "eventId": "01626ade4d283fed3664",
          "headline": "마이크론이 아닙니다. 샌디스크가 아닙니다. 이 메모리 주식은 조용히 점유율을 얻고 있습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791561600,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b97714a7847a56b1650a34e0b4facf97f71461d065340a5e6988429831899be7",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "c3eb1be892956e0d3f85",
          "headline": "SanDisk 주식 하락은 할인인가 아니면 경고인가?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791507307,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1cd72e94b1d068110ba84bbf676e2516f003fb0b49418f5ff54f96b254024a63",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "fcb4c776005573035d55",
          "headline": "억만장자 David Tepper가 Sandisk를 버리고 수조 달러 규모의 AI 칩 거물을 탄생시켰습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791483600,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=898d555a409bbd3fcc793c9debd14d2b25beacc40eb6254a32e199d1684a8732",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 4,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "WDC": {
      "ticker": "WDC",
      "updatedAt": 1791583205.2596593,
      "dataAsOf": 1791566997,
      "signal": "주의 강화",
      "netScore": -5.67,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.7,
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
          "score": -4.9,
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
          "eventId": "671f338353c7174cd049",
          "headline": "Apple, 수요 감소로 iPhone 18 Pro 부품 주문 축소",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791566997,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=bbc1ccba3ef652377225b07996acddab21270e3436a5a435ac3c378e6c501620",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리·스토리지 가격 강세 수혜 가능성"
        },
        {
          "eventId": "1a87ad946015e0f9ceeb",
          "headline": "비스트라 주식은 20% 상승 후 하루 만에 6% 하락했습니다. 11월 6일 보고서에서 보여줘야 할 내용은 다음과 같습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791563077,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9bf88512560c617662abaa1dea7ea70b556c72c67c149d10bc0c56327e5a27df",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리·스토리지 가격 강세 수혜 가능성"
        },
        {
          "eventId": "39620d981a5234077c37",
          "headline": "Apple, 보고된 iPhone 18 Pro 부품 주문 삭감에서 3% 감소; Skyworks는 미끄러지고 Qualcomm은 물을 밟습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791552692,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7fd98fe8bd34a91a2327e908d6e4c118ad133d68743b12399bd954d86e5b6a6b",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리·스토리지 가격 강세 수혜 가능성"
        },
        {
          "eventId": "22cbb37f00d0af998a5f",
          "headline": "이 레이더 메모리 주식은 3주 만에 46% 급등했습니다(힌트: Micron이나 Sandisk가 아닙니다).",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791551760,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=918c5118bcb4098b904f71a2c03b94487a16627820f312e84b5aa0dec40f13e8",
          "factorChanges": {
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d45910c7a64317b2e30c",
          "headline": "나스닥 선물이 프리마켓 상승세를 보이는 이유는 무엇입니까? SPCX, ASTS, AAPL, TMUS, VZ, NVDA, MU, LITE 주식에 집중",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791535137,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5504b507413e1a9d7c270522973a489c5cd47b850ea6963230d7c505460e0693",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리·스토리지 가격 강세 수혜 가능성"
        },
        {
          "eventId": "c781a003522709d4e38e",
          "headline": "공급 규율이 Western Digital(WDC)의 AI 스토리지 모멘텀을 유지할 수 있습니까?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791489561,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3d100750229a847d3e96527fb791e30ff0e176697ebb4994691f50c490b276f0",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "4705d8110096cc654d66",
          "headline": "Western Digital은 10년 동안 S&P 500을 압도했습니다. 이제 AI가 모든 것을 변화시키고 있습니다",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791477914,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d54b0be258041b9da4d86ed68dc2918fe58f4016773d9db9ea827d413837968a",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 8,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ANET": {
      "ticker": "ANET",
      "updatedAt": 1791583205.2596593,
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
      "updatedAt": 1791583205.2596593,
      "dataAsOf": 1791515304,
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
          "eventId": "86c9fa03912da5d4f830",
          "headline": "Lumentum CEO가 광학 부품이 2029년 초까지 '완전히 매진'되었다고 말한 후 LITE, COHR, AAOI, POET가 밤새 상승했습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791515304,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ea98561f4777d6d75879c1e1e29c92cb9cf40e9f8a3ed620cf85a9ae21c8d3b8",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "56c59cdea62069b4c0c7",
          "headline": "Lumentum CEO가 광학 부품이 2029년 초까지 '완전히 매진'되었다고 말한 후 LITE, COHR, AAOI, POET가 밤새 상승했습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791515304,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ea98561f4777d6d75879c1e1e29c92cb9cf40e9f8a3ed620cf85a9ae21c8d3b8",
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
    "LITE": {
      "ticker": "LITE",
      "updatedAt": 1791583205.2596593,
      "dataAsOf": 1791545341,
      "signal": "주의 강화",
      "netScore": -3.29,
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
          "score": -2.8,
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
          "eventId": "6c161e37a9906fc7e834",
          "headline": "Lumentum AI 광학 부품은 2029년까지 매진됩니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791545341,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a3eeed39abc7696230c1183c4f3b97ae45f090ab51ab3408d518246e92db2c64",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "5b2181f5801ef9f34035",
          "headline": "Stocktwits Wall Street Wrap: 분석가들은 Nike가 다운그레이드를 직면함에 따라 Palantir, Marvell 및 Cava에 대해 낙관적 반응을 보였습니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791536771,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=25491a2cc68a9b4d38be43d53e0a2e92e3bfe9746d919c2e4f58f2a2fa505e5b",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d45910c7a64317b2e30c",
          "headline": "나스닥 선물이 프리마켓 상승세를 보이는 이유는 무엇입니까? SPCX, ASTS, AAPL, TMUS, VZ, NVDA, MU, LITE 주식에 집중",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791535137,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5504b507413e1a9d7c270522973a489c5cd47b850ea6963230d7c505460e0693",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "04eee22a6c37cbdff3fb",
          "headline": "Stocktwits AI 요약: OpenAI 매출 문제로 인해 칩 주식이 하락하고 SoftBank가 1000억 달러를 사냥하고 Microsoft가 AI 우선으로 전환",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791528210,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=904739f60c9136de943044b8335811943bdc533a33ad1ab2080f92ba1e57cb39",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "228f218c4f4e52defa8e",
          "headline": "트럼프 매입 보고 후 META 주식 소거: Meta는 미국, 기타 6개 지역에서 TikTok 광고 금지",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791519407,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ee763e1c32c6ca63ebb0fbe87d5664e92caf8e1182a1bdcea9ca1c0c1d803ce1",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "86c9fa03912da5d4f830",
          "headline": "Lumentum CEO가 광학 부품이 2029년 초까지 '완전히 매진'되었다고 말한 후 LITE, COHR, AAOI, POET가 밤새 상승했습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791515304,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ea98561f4777d6d75879c1e1e29c92cb9cf40e9f8a3ed620cf85a9ae21c8d3b8",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "56c59cdea62069b4c0c7",
          "headline": "Lumentum CEO가 광학 부품이 2029년 초까지 '완전히 매진'되었다고 말한 후 LITE, COHR, AAOI, POET가 밤새 상승했습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791515304,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ea98561f4777d6d75879c1e1e29c92cb9cf40e9f8a3ed620cf85a9ae21c8d3b8",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "6ff645f8439d87b1a104",
          "headline": "BA, SPCX, RKLB, RTX, PLTR 주식에 초점을 맞췄습니다: Barclays가 항공우주 및 국방 주식에 비중을 두는 이유는 무엇입니까?",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791504951,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cb92fd5bc719d64e8c00e22304e91e0dda90aa2585072381a2030d6768615576",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "a9aaf9c6fcdfbb92db9b",
          "headline": "MSFT, ORCL, NVDA, QQQ 초점: OpenAI의 연간 수익이 이전 기대치를 200억 달러 앞선 것으로 보고됨",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791486101,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d335cd5884c9a8b6781e302123b1ea8b4f338c3bfc5cd122bfd5a9cb870a7bc7",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "4bf1a54b82af689302d4",
          "headline": "Lumentum: 연결성을 정복하는 것이 인공 지능에서 매우 중요합니다",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791477826,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6ec5a96cbf3c7441b78957bfb6f5b60abae269e24db6f8de777f072854c7da74",
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
    "GEV": {
      "ticker": "GEV",
      "updatedAt": 1791583205.2596593,
      "dataAsOf": 1791386700,
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "CEG": {
      "ticker": "CEG",
      "updatedAt": 1791583205.2596593,
      "dataAsOf": 1791552718,
      "signal": "우호적 변화",
      "netScore": 7.2,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 2.27,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 4.02,
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
          "score": 1.75,
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
          "eventId": "1cea65b391d97bfe0373",
          "headline": "별자리 에너지(CEG) 가치 평가: 장기 전력 계약이 프리미엄을 정당화합니까?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791552718,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=af1111caa042963090e841f2013640e0e62d7ddc06d7f69343407e14d4f48bf0",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "e2b812a1479b7da4b884",
          "headline": "Constellation Energy(CEG): Google의 핵 거래가 게임 체인저입니까?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791494395,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2b004265717e216dc838ef3fecf54e3b2d01265062330d0c011b0fb0635c577b",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "8cf93e6b4ced9f5adf6c",
          "headline": "Constellation Energy 주식은 귀하의 포트폴리오 위험에 적합합니까?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791394391,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fc8c09dd3460b889563c27a0493b6f89b819a783d47f041bd0c44ac0b9b9e258",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "22f0ec91a3fce52724c7",
          "headline": "Google, Constellation Ink, 원자력 발전 용량 확장 계약 체결",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791390480,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8cc1325a7fb58fa3ad2093e75fe656bea5f63cc4861bb39723ca75c0e59f2449",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "15e1980cd8fa36812bf0",
          "headline": "Google의 원자력 거래가 Constellation Energy의 성장 전망을 강화할 수 있습니까?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791388500,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=40ac95ca9b33e980396465ef74121e18093634067e9c213d5cfd52b26142ae92",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "6a7e8e87610b748e4154",
          "headline": "Constellation은 Google과 3,590MW 전력 계약을 체결했습니다. AI의 가장 조용한 승자는 오랫동안 가만히 있지 못할 수도 있습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791387145,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7a25470919fad5708c48820f47e13a70211caafc2cf50c27dae887d0c51e9c3b",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 6,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "VST": {
      "ticker": "VST",
      "updatedAt": 1791583205.2596593,
      "dataAsOf": 1791563077,
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
          "eventId": "1a87ad946015e0f9ceeb",
          "headline": "비스트라 주식은 20% 상승 후 하루 만에 6% 하락했습니다. 11월 6일 보고서에서 보여줘야 할 내용은 다음과 같습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791563077,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9bf88512560c617662abaa1dea7ea70b556c72c67c149d10bc0c56327e5a27df",
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
    "ETN": {
      "ticker": "ETN",
      "updatedAt": 1791583205.2596593,
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
      "updatedAt": 1791583205.2596593,
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
      "updatedAt": 1791583205.2596593,
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
      "updatedAt": 1791583205.2596593,
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
      "updatedAt": 1791583205.2596593,
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
      "updatedAt": 1791583205.2596593,
      "dataAsOf": 1791551760,
      "signal": "중립·확인 대기",
      "netScore": 0.35,
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
          "eventId": "22cbb37f00d0af998a5f",
          "headline": "이 레이더 메모리 주식은 3주 만에 46% 급등했습니다(힌트: Micron이나 Sandisk가 아닙니다).",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791551760,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=918c5118bcb4098b904f71a2c03b94487a16627820f312e84b5aa0dec40f13e8",
          "factorChanges": {
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "EME": {
      "ticker": "EME",
      "updatedAt": 1791583205.2596593,
      "dataAsOf": 1791403413,
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
          "eventId": "132b19a6235bf7dde011",
          "headline": "EMCOR 대 IES Holdings: 6억 9,100만 달러 규모의 거래가 더 나은 구매를 변화시키는가?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791403413,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fa032f5e7df897e822486ecd4d7dab05bc02c9dedf227d6823c0d2ee30f78e38",
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
      "updatedAt": 1791583205.2596593,
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
      "updatedAt": 1791583205.2596593,
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
