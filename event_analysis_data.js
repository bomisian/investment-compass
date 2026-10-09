// 자동 생성 파일 - 중요 뉴스의 기업분석 반영
const EVENT_ANALYSIS_DATA = {
  "schemaVersion": 1,
  "generatedAt": 1791535949.080092,
  "records": {
    "MSFT": {
      "ticker": "MSFT",
      "updatedAt": 1791535949.080092,
      "dataAsOf": 1791490888,
      "signal": "주의 강화",
      "netScore": -9.1,
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
          "score": -4.72,
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
        },
        {
          "eventId": "ee739e49c20dcbacd7b2",
          "headline": "Jim Cramer는 Microsoft(MSFT)의 AI 투자가 마침내 성과를 거두었다고 말합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791364045,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5d498f9ea2b813b6c71d2b717266b6a90cca62d865c717ac5b34a33a5e308a39",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "250b56577648e8b7282e",
          "headline": "AI가 당신의 직업을 대신할 것인가? 마이크로소프트의 AI 책임자는 이제 인간 작업의 5%만이 위험에 처해 있다는 노벨상 수상자 연구를 지적합니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791352078,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fc1995fcf4801a8355165a302e93e183d5614c7204dc5c57f3817d3973c9ffd0",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "d64f901b51bbd68599d1",
          "headline": "10년 전 Microsoft에 1,000달러를 베팅하여 시장을 3배 이상 무너뜨렸습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791313230,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e7de2c0592ab26fcaddec2a42751f66ae3f36f431ef3242963c99459040a4c2f",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 9,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "GOOGL": {
      "ticker": "GOOGL",
      "updatedAt": 1791535949.080092,
      "dataAsOf": 1791494395,
      "signal": "우호적 변화",
      "netScore": 10,
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
          "score": -2.1,
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
        },
        {
          "eventId": "fff558d46080efd05817",
          "headline": "Google, Meta, 미국 정부가 Biohub의 18억 달러 규모 AI 생물학 노력에 동참",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791381477,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=da48b11ac9e6ec95dfc1723a8d50e95948004b3adf38b1774bc91dc765216052",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 24,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMZN": {
      "ticker": "AMZN",
      "updatedAt": 1791535949.080092,
      "dataAsOf": 1791498826,
      "signal": "중립·확인 대기",
      "netScore": -1.11,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.75,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 1.75,
          "level": "우호적"
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
          "score": -2.62,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -0.7,
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
        },
        {
          "eventId": "b2161c12fe29852d808f",
          "headline": "Cloud 2027: Oracle의 가장 빠르게 성장하는 엔진이 AWS 격차를 해소할 수 있습니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791377140,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=136f57ab58047bc2ce32be465d8582d05e2b16da1395cd331c090a61576c84d6",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "22c621f4fb2fee7ac430",
          "headline": "eDreams ODIGEO와 Amazon Alexa, AI 여행 검색 기능을 Alexa+에 도입하기 위해 협력",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791358080,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3967b9380759f5d534b5b924a222d05480e56faa2dee48159a58572aa849dcf3",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "04ebd9792158d2491905",
          "headline": "XLK는 Alphabet, Amazon, Meta, Netflix 또는 Tesla를 소유하지 않습니다. 3개의 주식이 35.87%를 차지합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791326024,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e89cf9ca966b15c06f25ef68871e73a4c203607efcaa3cec2e74e247d5ad4c89",
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
    "META": {
      "ticker": "META",
      "updatedAt": 1791535949.080092,
      "dataAsOf": 1791395520,
      "signal": "중립·확인 대기",
      "netScore": 1.32,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.17,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 1.57,
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
        },
        {
          "eventId": "81aaaccc50a92d554aad",
          "headline": "Meta의 엔터프라이즈 푸시로 AI를 SaaS 기능에서 SaaS 경쟁자로 바꿀 수 있음",
          "eventLabel": "경쟁사 기술·시장 진입",
          "publishedAt": 1791341971,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e0f9e572499df78e6a53f294c1d33f2c6882cbb4dc6279e451d7a79c96c3a7a9",
          "factorChanges": {
            "competitiveRisk": -2,
            "longTermCompetitiveness": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "04ebd9792158d2491905",
          "headline": "XLK는 Alphabet, Amazon, Meta, Netflix 또는 Tesla를 소유하지 않습니다. 3개의 주식이 35.87%를 차지합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791326024,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e89cf9ca966b15c06f25ef68871e73a4c203607efcaa3cec2e74e247d5ad4c89",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "8f03e34f623fa40ab914",
          "headline": "Mark Cuban은 Meta 문서에서 사기 관련 수익이 160억 달러에 달하는 것으로 밝혀지면서 Facebook이 고의로 AI 딥페이크 사기 광고를 운영하고 있다고 말했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791322200,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2bae9b1f767db0945e28868e3655092c7cb6a370ccc23414053f8d3deb06c5f5",
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
    "AAPL": {
      "ticker": "AAPL",
      "updatedAt": 1791535949.080092,
      "dataAsOf": 1791496465,
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
        },
        {
          "eventId": "406b947ab293c4b40504",
          "headline": "10월 13일 행사를 앞두고 Apple과 LG가 7가지 스마트 홈 기기 개발에 협력",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791379139,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9ecfbfe8fadf6620d844b660135af3a4de294e8e57ced284b64c76e6d1f5fde9",
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
    "TSLA": {
      "ticker": "TSLA",
      "updatedAt": 1791535949.080092,
      "dataAsOf": 1791453840,
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
          "score": -2.8,
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
          "score": -4.9,
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
        },
        {
          "eventId": "2b11badec3c1ab86b5ad",
          "headline": "Tesla의 3분기 납품은 기대치를 뛰어 넘었습니다. 주식을 살 시간인가?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791379201,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0202839b2349313cca85d6c90340fa66de31f4dba20fb9a707b85c751e60360d",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "a8a25aca777cb7dbe191",
          "headline": "원자력 무역은 바닥을 보았는가? Jan Van Eck가 Constellation-Google 거래에서 본 것",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791336834,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=01fcf0da6b91e7d306f8b7d7bd1b00c046868352f17b8e75be3557bedf43387d",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "04ebd9792158d2491905",
          "headline": "XLK는 Alphabet, Amazon, Meta, Netflix 또는 Tesla를 소유하지 않습니다. 3개의 주식이 35.87%를 차지합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791326024,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e89cf9ca966b15c06f25ef68871e73a4c203607efcaa3cec2e74e247d5ad4c89",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "987949f01e80381d4dc6",
          "headline": "NLST 주가는 Micron의 6억 달러 라이선스 계약 이후 18% 상승 - 소매점은 이제 SK 하이닉스를 기다리고 있습니다",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791323011,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0793453309e7707a0bbd91c3efe340cf3c9c84d1dbde435c062847e7476a8041",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 6,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ORCL": {
      "ticker": "ORCL",
      "updatedAt": 1791535949.080092,
      "dataAsOf": 1791500119,
      "signal": "우호적 변화",
      "netScore": 8.04,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 2.97,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 4.72,
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
          "eventId": "9815bc1e30a6a1b343b5",
          "headline": "Nasdaq 100은 예상보다 약한 OpenAI 수익이 칩 제조업체를 끌고 있다는 보고로 하락 마감 - NVDA, DIS, ORCL, SBUX 집중",
          "eventLabel": "실적 발표",
          "publishedAt": 1791500119,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=dc1918cd0feb30add5eacf5d2b3e01797f856a03f979aebef0e228fc128111a6",
          "factorChanges": {
            "growth": -1,
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
        },
        {
          "eventId": "34f2bad0f6f3c160c266",
          "headline": "Broadcom, Oracle, 클라우드 인프라의 AI 기반 추진력 테스트를 위한 수익 창출",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791374761,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=543b7a61ed849ae8ca67fcadf0eee529fcdeef470ac13b60afe2cd304c390f04",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "OCI 서비스 범위 확대 가능성, 매출화 시점 불확실"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 9,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "CRM": {
      "ticker": "CRM",
      "updatedAt": 1791535949.080092,
      "dataAsOf": 1791341550,
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
          "eventId": "aafb0272c4aa3bd89150",
          "headline": "Salesforce 대 ServiceNow: 더 나은 현금 흐름 거래를 제공하는 AI 소프트웨어 주식은 무엇입니까?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791341550,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=96bef0b79efe705788910c4a297e4420c3bb08a773cf02cfd735b966fa124baa",
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
      "updatedAt": 1791535949.080092,
      "dataAsOf": 1791480900,
      "signal": "주의 강화",
      "netScore": -2.17,
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
        },
        {
          "eventId": "af72cff01c60eb86a91e",
          "headline": "Palantir 또는 Snowflake: AI 데이터 스톡 1개를 선택하고 다시는 보지 않아야 한다면 이것이 바로 그것입니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1791372610,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a8527ba3cb3034290e67279872b86b09f025ab7e694cd346b9fe8520998ab4e2",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 8,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "NVDA": {
      "ticker": "NVDA",
      "updatedAt": 1791535949.080092,
      "dataAsOf": 1791500119,
      "signal": "우호적 변화",
      "netScore": 8.14,
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
          "eventId": "9815bc1e30a6a1b343b5",
          "headline": "Nasdaq 100은 예상보다 약한 OpenAI 수익이 칩 제조업체를 끌고 있다는 보고로 하락 마감 - NVDA, DIS, ORCL, SBUX 집중",
          "eventLabel": "실적 발표",
          "publishedAt": 1791500119,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=dc1918cd0feb30add5eacf5d2b3e01797f856a03f979aebef0e228fc128111a6",
          "factorChanges": {
            "growth": -1,
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
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "b4c2ef34d1d996ac3194",
          "headline": "2026년 슈퍼반도체 주가를 압도하는 엔비디아를 만나보세요",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791473160,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f19b92ec36882bc0240d840a5763ba8c76a3c2e421c7c1e9526a6cb2b49de089",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
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
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 43,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMD": {
      "ticker": "AMD",
      "updatedAt": 1791535949.080092,
      "dataAsOf": 1791502971,
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
        },
        {
          "eventId": "d2d5284ef39685817bf8",
          "headline": "Broadcom은 OpenAI가 칩을 구입할 수 있도록 500억 달러를 준비하고 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791439781,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e81f899141351a12938e1057321a03ed645480eabc4fcd348ab7ef618db51a4f",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "f196b81da9a0aeeb80f5",
          "headline": "Applied Materials vs. Marvell Technology: 수익 추세가 투자자에게 인공 지능 회사에 대해 알려주는 것",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791431947,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=74856f8d6095362e656f75a6aaf95b174d43a396f6a3a64aa41a8e95de8049db",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 31,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AVGO": {
      "ticker": "AVGO",
      "updatedAt": 1791535949.080092,
      "dataAsOf": 1791496140,
      "signal": "중립·확인 대기",
      "netScore": 1.33,
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
          "score": -3.67,
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
        },
        {
          "eventId": "34f2bad0f6f3c160c266",
          "headline": "Broadcom, Oracle, 클라우드 인프라의 AI 기반 추진력 테스트를 위한 수익 창출",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791374761,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=543b7a61ed849ae8ca67fcadf0eee529fcdeef470ac13b60afe2cd304c390f04",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "5d479c4839fddbef2578",
          "headline": "Warren Buffett의 8억 6,300만 달러 규모의 \"비밀\" 포트폴리오는 Alphabet과 Broadcom을 버렸지만 이 입증된 수익 창출 전략에 투자 자산의 17% 이상을 보유하고 있습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791365161,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3a9447deb1eb1337cf7b23131113cce858068eb287cbc2e789ba8531eeb90eaf",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "6cd7e1aad302a0a582cc",
          "headline": "AMD vs. Marvell 기술: 2026년에는 어느 AI 칩 주식이 더 나은 매수인가요?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1791314401,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ac6bfc335dfc3d4897ae8bd77e8ebfe7355b99e732688e3608ac1b0de4e44f64",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "Google 관련 고객 집중도와 AI 커스텀 실리콘 경쟁 심화 가능성"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 12,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "QCOM": {
      "ticker": "QCOM",
      "updatedAt": 1791535949.080092,
      "dataAsOf": 1791501357,
      "signal": "우호적 변화",
      "netScore": 4.26,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.75,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 2.97,
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
          "reason": "회사 실적과의 연결고리 확인"
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
        },
        {
          "eventId": "d9a282036434c6e54f04",
          "headline": "Qualcomm(QCOM) 주식은 로열티 분쟁 및 라이센스 거래에서 완전히 가치 있는 것으로 보입니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791375404,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9ee41fb91705cf3f40f5fefe523db4cf4b816adabb2d9211b4bbf68413ff6aa6",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "981a005e7362ba4fbad5",
          "headline": "예측: AI가 엣지로 이동함에 따라 현재 Qualcomm에 대한 1,000달러 투자는 2030년까지 이만큼 가치가 있을 수 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791350400,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7e58d65d1423a1178a04c2adad3c63eb77a21eaf10a32d4c8565a983da49c134",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "42d89f9cd2ef4eb9fdb8",
          "headline": "Qualcomm의 AI 인프라 중심점은 과소평가되었습니다",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791313440,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e3dc0a82d970859f99bf341e6ca85ef48003b1f4234ea9632f51f35f718266a5",
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
    "ARM": {
      "ticker": "ARM",
      "updatedAt": 1791535949.080092,
      "dataAsOf": 1791470286,
      "signal": "중립·확인 대기",
      "netScore": 0.84,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.35,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 1.57,
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
          "reason": "회사 실적과의 연결고리 확인"
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
      "updatedAt": 1791535949.080092,
      "dataAsOf": 1791458155,
      "signal": "주의 강화",
      "netScore": -4.41,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
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
        },
        {
          "eventId": "9c3d98db1ed7f9d5e70c",
          "headline": "Marvell은 장기 목표를 높이기 위한 최신 AI 인프라 플레이입니다. Dell, HPE, CoreWeave 및 Broadcom을 비교하는 방법은 다음과 같습니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791362765,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=af6fbc5888392e83d3d6f54015c51f3f80684903010c01b7637c24f966eb344c",
          "factorChanges": {
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "c7000db9579c83ee080e",
          "headline": "Marvell은 현재 2031 회계연도까지 연간 매출이 최대 900억 달러에 이를 것으로 보고 있습니다. 칩 주식을 매수해야 하는 이유는 다음과 같습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1791360181,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b9e978c83fee70f860224c86dbe17f78ceff1c236c2915ff0efbff0246b64b73",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "b25f2f4e68704354c888",
          "headline": "S&P 500과 Nasdaq 100은 강력한 분기별 수익에 대한 기대가 높아지는 가운데 최고치를 기록했습니다. — CEG, LCID, SPCX, MRVL 집중",
          "eventLabel": "실적 발표",
          "publishedAt": 1791326129,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=682fd04d3d7589318662fd1cea2c31cda184b5f97c1ee5bc306840484d4455e9",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "19abe792ce249c71ec7f",
          "headline": "S&P 500과 Nasdaq 100은 강력한 분기별 수익에 대한 기대가 높아지는 가운데 최고치를 기록했습니다. — CEG, LCID, SPCX, MRVL 집중",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791326129,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=682fd04d3d7589318662fd1cea2c31cda184b5f97c1ee5bc306840484d4455e9",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "c6aff69e09eaa91eb95d",
          "headline": "Marvell, 투자자 데이에서 2031 회계연도 매출 목표 상향",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791316497,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b3bb6e969e746963ce54baac0849b1c470c4ae77a71a436cc245c61ea1f5db5e",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "6cd7e1aad302a0a582cc",
          "headline": "AMD vs. Marvell 기술: 2026년에는 어느 AI 칩 주식이 더 나은 매수인가요?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1791314401,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ac6bfc335dfc3d4897ae8bd77e8ebfe7355b99e732688e3608ac1b0de4e44f64",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "Google TPU 생태계 진입 가능성과 커스텀 실리콘 성장 기회"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 10,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "INTC": {
      "ticker": "INTC",
      "updatedAt": 1791535949.080092,
      "dataAsOf": 1791477826,
      "signal": "중립·확인 대기",
      "netScore": 1.95,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.57,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 2.8,
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
          "score": -4.2,
          "level": "주의"
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
        },
        {
          "eventId": "ec282b65cbdad99c5cde",
          "headline": "업데이트: 시장 잡담: Intel은 Terafab 프로젝트에서 Elon Musk와 계속 협력할 것이라고 CEO는 말합니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791366629,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b0d2419ffb6595924e507ff533d764cd05cf7a72f4dc7cca6a6726984ec0cdbe",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "b8f26b776fec0b319cb5",
          "headline": "INTC 주가 밤새 상승: CEO, Intel이 TSMC 파트너십 버즈 속에서 Musk의 Terafab과 계속 협력할 것이라고 말함",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791358948,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=30ac265eba83cf2626b49c5e9f3f5cffb3032418259c0612eb179e252aaa8a48",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "d18c919449d6b4d7440a",
          "headline": "Applied Materials와 Nvidia: 인공지능 기업의 수익 추세가 보여주는 것",
          "eventLabel": "실적 발표",
          "publishedAt": 1791331619,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=09768827e4a0c77ffadf1adb7e31499366f1ec3a328766e280bfabd8d31dc036",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d9952b85779fd4bbca42",
          "headline": "Nvidia가 지원하는 클라우드 컴퓨팅 회사 Lambda는 IPO를 앞두고 최종 라운드에서 40억 달러를 모금할 것으로 보입니다: 보고서",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791313674,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7a950b12175464e362e017872d96e02cf8657a0edfaafc0ae8f32b5f8be53e41",
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
      "unverifiedEvidenceCount": 13,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "TSM": {
      "ticker": "TSM",
      "updatedAt": 1791535949.080092,
      "dataAsOf": 1791462702,
      "signal": "중립·확인 대기",
      "netScore": -1.9,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
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
          "score": -0.88,
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
        },
        {
          "eventId": "b8f26b776fec0b319cb5",
          "headline": "INTC 주가 밤새 상승: CEO, Intel이 TSMC 파트너십 버즈 속에서 Musk의 Terafab과 계속 협력할 것이라고 말함",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791358948,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=30ac265eba83cf2626b49c5e9f3f5cffb3032418259c0612eb179e252aaa8a48",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
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
      "updatedAt": 1791535949.080092,
      "dataAsOf": 1791502971,
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
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
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
      "unverifiedEvidenceCount": 3,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMAT": {
      "ticker": "AMAT",
      "updatedAt": 1791535949.080092,
      "dataAsOf": 1791331619,
      "signal": "중립·확인 대기",
      "netScore": 1.04,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
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
          "eventId": "d18c919449d6b4d7440a",
          "headline": "Applied Materials와 Nvidia: 인공지능 기업의 수익 추세가 보여주는 것",
          "eventLabel": "실적 발표",
          "publishedAt": 1791331619,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=09768827e4a0c77ffadf1adb7e31499366f1ec3a328766e280bfabd8d31dc036",
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
    "LRCX": {
      "ticker": "LRCX",
      "updatedAt": 1791535949.080092,
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
      "updatedAt": 1791535949.080092,
      "dataAsOf": 1791324049,
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
          "eventId": "c171f9bc00127e05ecdc",
          "headline": "Jim Cramer는 KLAC 없이는 칩 부족이 \"해결될 수 없다\"고 말합니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791324049,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=da91be182cb3afc867657f5908d2a8761c57187e1cbf5c9d1e563dc9773ce7af",
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
      "updatedAt": 1791535949.080092,
      "dataAsOf": 1791522843,
      "signal": "우호적 변화",
      "netScore": 10,
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
          "reason": "AI 서버 메모리 수요와 가격 강세"
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
          "reason": "AI 서버 메모리 수요와 가격 강세"
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
          "reason": "AI 서버 메모리 수요와 가격 강세"
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
          "reason": "사업·실적 연결 경로 확인 필요"
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
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "d2d5284ef39685817bf8",
          "headline": "Broadcom은 OpenAI가 칩을 구입할 수 있도록 500억 달러를 준비하고 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791439781,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e81f899141351a12938e1057321a03ed645480eabc4fcd348ab7ef618db51a4f",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "f196b81da9a0aeeb80f5",
          "headline": "Applied Materials vs. Marvell Technology: 수익 추세가 투자자에게 인공 지능 회사에 대해 알려주는 것",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791431947,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=74856f8d6095362e656f75a6aaf95b174d43a396f6a3a64aa41a8e95de8049db",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 38,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "SNDK": {
      "ticker": "SNDK",
      "updatedAt": 1791535949.080092,
      "dataAsOf": 1791507307,
      "signal": "중립·확인 대기",
      "netScore": -0.43,
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
        },
        {
          "eventId": "edf247c771607f027085",
          "headline": "AI 주식 마이크론(Micron)과 샌디스크(Sandisk)는 지난해 460%, 1,190% 상승했다. 역사는 이런 일이 다음에 일어날 것이라고 말합니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791364082,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f04c9d45e8f5e5c657cc686d2d31ef83f328ba84635c0dc255b02b5dd2b6afd7",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "f71aa75d6c49b19825ea",
          "headline": "기술 거품이 양조되고 있습니까? BofA 분석가들은 그렇게 생각합니다. 헤지로 QQQ 옵션을 구매하라고 조언합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791321690,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c890c150130f859eeba04edfc57ece7141841c006af05b154ba90daf8f2ec625",
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
    "WDC": {
      "ticker": "WDC",
      "updatedAt": 1791535949.080092,
      "dataAsOf": 1791489561,
      "signal": "중립·확인 대기",
      "netScore": 1.88,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.57,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 1.92,
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
        },
        {
          "eventId": "9c3d98db1ed7f9d5e70c",
          "headline": "Marvell은 장기 목표를 높이기 위한 최신 AI 인프라 플레이입니다. Dell, HPE, CoreWeave 및 Broadcom을 비교하는 방법은 다음과 같습니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791362765,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=af6fbc5888392e83d3d6f54015c51f3f80684903010c01b7637c24f966eb344c",
          "factorChanges": {
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "b8f26b776fec0b319cb5",
          "headline": "INTC 주가 밤새 상승: CEO, Intel이 TSMC 파트너십 버즈 속에서 Musk의 Terafab과 계속 협력할 것이라고 말함",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791358948,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=30ac265eba83cf2626b49c5e9f3f5cffb3032418259c0612eb179e252aaa8a48",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "250b56577648e8b7282e",
          "headline": "AI가 당신의 직업을 대신할 것인가? 마이크로소프트의 AI 책임자는 이제 인간 작업의 5%만이 위험에 처해 있다는 노벨상 수상자 연구를 지적합니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791352078,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fc1995fcf4801a8355165a302e93e183d5614c7204dc5c57f3817d3973c9ffd0",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "19abe792ce249c71ec7f",
          "headline": "S&P 500과 Nasdaq 100은 강력한 분기별 수익에 대한 기대가 높아지는 가운데 최고치를 기록했습니다. — CEG, LCID, SPCX, MRVL 집중",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791326129,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=682fd04d3d7589318662fd1cea2c31cda184b5f97c1ee5bc306840484d4455e9",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d9952b85779fd4bbca42",
          "headline": "Nvidia가 지원하는 클라우드 컴퓨팅 회사 Lambda는 IPO를 앞두고 최종 라운드에서 40억 달러를 모금할 것으로 보입니다: 보고서",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791313674,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7a950b12175464e362e017872d96e02cf8657a0edfaafc0ae8f32b5f8be53e41",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "c0995dc72dd6012acae6",
          "headline": "CEG, VST, TLN 점프: Google의 파워 딜로 핵 랠리 촉발",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791311479,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2530723524186edfad2fd6e733b0c13c1a155eaed32777e4940ccfa634595340",
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
    "ANET": {
      "ticker": "ANET",
      "updatedAt": 1791535949.080092,
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
      "updatedAt": 1791535949.080092,
      "dataAsOf": 1791515304,
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "LITE": {
      "ticker": "LITE",
      "updatedAt": 1791535949.080092,
      "dataAsOf": 1791515304,
      "signal": "주의 강화",
      "netScore": -2.37,
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
        },
        {
          "eventId": "3a12ff55515d1ebe8a4e",
          "headline": "이익이 연간 큰 폭의 이익을 삭감하면서 광학 주식이 하락합니다. Applied Optoelectronics는 9% 하락, Coherent는 5% 하락, Lumentum 하락은 4%",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791475231,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0a81f60a333186d931436fb8336b2de03112113f04613f187ce0878cc40767df",
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
    "GEV": {
      "ticker": "GEV",
      "updatedAt": 1791535949.080092,
      "dataAsOf": 1791386700,
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
        },
        {
          "eventId": "06e4322688fb3bf77272",
          "headline": "억만장자 Ken Fisher가 GE Vernova(GEV)에 투자한 이유",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791378014,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5a43fa9375b655bf1ac7211e3da5caa285bf3d63de9de4f6259c7ac8758d30ac",
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
    "CEG": {
      "ticker": "CEG",
      "updatedAt": 1791535949.080092,
      "dataAsOf": 1791494395,
      "signal": "우호적 변화",
      "netScore": 9.06,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 3.85,
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
          "score": -2.45,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": 2.45,
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
          "reason": "회사 실적과의 연결고리 확인"
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
        },
        {
          "eventId": "6dcca3becab40c23c328",
          "headline": "구글, 컨스텔레이션 에너지(Constellation Energy)와 원자력 계약 체결",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791357795,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=133cdde5521581150f3b593a457df6b43ffeec18d3ee2ee6ccc686a4c62e4e9b",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "a8a25aca777cb7dbe191",
          "headline": "원자력 무역은 바닥을 보았는가? Jan Van Eck가 Constellation-Google 거래에서 본 것",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791336834,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=01fcf0da6b91e7d306f8b7d7bd1b00c046868352f17b8e75be3557bedf43387d",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "703a452876932cddb88a",
          "headline": "원자력 무역은 바닥을 보았는가? Jan Van Eck가 Constellation-Google 거래에서 본 것",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791336834,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=01fcf0da6b91e7d306f8b7d7bd1b00c046868352f17b8e75be3557bedf43387d",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "b25f2f4e68704354c888",
          "headline": "S&P 500과 Nasdaq 100은 강력한 분기별 수익에 대한 기대가 높아지는 가운데 최고치를 기록했습니다. — CEG, LCID, SPCX, MRVL 집중",
          "eventLabel": "실적 발표",
          "publishedAt": 1791326129,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=682fd04d3d7589318662fd1cea2c31cda184b5f97c1ee5bc306840484d4455e9",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "19abe792ce249c71ec7f",
          "headline": "S&P 500과 Nasdaq 100은 강력한 분기별 수익에 대한 기대가 높아지는 가운데 최고치를 기록했습니다. — CEG, LCID, SPCX, MRVL 집중",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791326129,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=682fd04d3d7589318662fd1cea2c31cda184b5f97c1ee5bc306840484d4455e9",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d54cacb18217b8c8c054",
          "headline": "Google 잉크, PJM에서 3.6GW 전력 공급을 위해 Constellation Energy와 거래",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791325476,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3b20800c7109f51107d627a5943713fc3e9d0715721aa94b0c65db2dc4389673",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "3ac8a268a4416ea705fc",
          "headline": "Google과 Constellation Energy가 최근 원자력 에너지 계약을 체결했습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791321086,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4288451f39c9c75ad7c3ca98fb992399fab6327365dc2a010ae6a943da7de9d2",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 14,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "VST": {
      "ticker": "VST",
      "updatedAt": 1791535949.080092,
      "dataAsOf": 1791311479,
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
          "eventId": "c0995dc72dd6012acae6",
          "headline": "CEG, VST, TLN 점프: Google의 파워 딜로 핵 랠리 촉발",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791311479,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2530723524186edfad2fd6e733b0c13c1a155eaed32777e4940ccfa634595340",
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
    "ETN": {
      "ticker": "ETN",
      "updatedAt": 1791535949.080092,
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
      "updatedAt": 1791535949.080092,
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
      "updatedAt": 1791535949.080092,
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
      "updatedAt": 1791535949.080092,
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
      "updatedAt": 1791535949.080092,
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
      "updatedAt": 1791535949.080092,
      "dataAsOf": 1791362765,
      "signal": "중립·확인 대기",
      "netScore": -1.97,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
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
          "eventId": "9c3d98db1ed7f9d5e70c",
          "headline": "Marvell은 장기 목표를 높이기 위한 최신 AI 인프라 플레이입니다. Dell, HPE, CoreWeave 및 Broadcom을 비교하는 방법은 다음과 같습니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791362765,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=af6fbc5888392e83d3d6f54015c51f3f80684903010c01b7637c24f966eb344c",
          "factorChanges": {
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "b8f26b776fec0b319cb5",
          "headline": "INTC 주가 밤새 상승: CEO, Intel이 TSMC 파트너십 버즈 속에서 Musk의 Terafab과 계속 협력할 것이라고 말함",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791358948,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=30ac265eba83cf2626b49c5e9f3f5cffb3032418259c0612eb179e252aaa8a48",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "250b56577648e8b7282e",
          "headline": "AI가 당신의 직업을 대신할 것인가? 마이크로소프트의 AI 책임자는 이제 인간 작업의 5%만이 위험에 처해 있다는 노벨상 수상자 연구를 지적합니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791352078,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fc1995fcf4801a8355165a302e93e183d5614c7204dc5c57f3817d3973c9ffd0",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "a8a25aca777cb7dbe191",
          "headline": "원자력 무역은 바닥을 보았는가? Jan Van Eck가 Constellation-Google 거래에서 본 것",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791336834,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=01fcf0da6b91e7d306f8b7d7bd1b00c046868352f17b8e75be3557bedf43387d",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "46b70cbaa3dec7315439",
          "headline": "Seagate Technology Holdings(STX) 주식은 영업시간 이후 추세를 보이고 있습니다. 그 이유는 다음과 같습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791331108,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2afa5789f4380fedd695fdd1b0bea8a0e264a8fcf3e7faa4dba14c0a12866ed2",
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
    "EME": {
      "ticker": "EME",
      "updatedAt": 1791535949.080092,
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
      "updatedAt": 1791535949.080092,
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
      "updatedAt": 1791535949.080092,
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
