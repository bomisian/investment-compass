// 자동 생성 파일 - 중요 뉴스의 기업분석 반영
const EVENT_ANALYSIS_DATA = {
  "schemaVersion": 1,
  "generatedAt": 1792523609.9919446,
  "records": {
    "MSFT": {
      "ticker": "MSFT",
      "updatedAt": 1792523609.9919446,
      "dataAsOf": 1792500792,
      "signal": "우호적 변화",
      "netScore": 3.43,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 2.1,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 3.85,
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
          "score": -2.97,
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
          "eventId": "da8bacdb99b09836e6f1",
          "headline": "업데이트: 시장 잡담: Microsoft, Nscale과의 영국 데이터 센터 거래 철회",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792500792,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f6f05377f89e818acee2d57cd3df61a93b6dd86bf1a56d336fc1c0d703912f47",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "503f74bcd19213300618",
          "headline": "마이크로소프트는 AI에 현금을 지불합니다. CoreWeave 차용.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1792496960,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=400e89cf45109f3e6ba2c05cbe9032a6ed9df6bba438ccd2f60036f3cfa3f207",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "166ca2101a701cce018b",
          "headline": "Microsoft vs. Oracle: 2026년에는 어느 기술주를 매수하는 것이 더 나은가요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792469402,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e1e505b35a5f707444373e7c8181733e4fa60a1c6fb2d85ffe25265775e4f055",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "0a29b7d3852ee13f280f",
          "headline": "Microsoft는 AI 데이터 센터 거래에서 손을 떼지만 SemiAnalytic은 2027년에 50GW 붐을 예측합니다",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792435586,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d30ac0baba303f813e7df935792ae283a06a6d1c991cddbf9fd15b979ae63453",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "1817cd8db144ee3beec9",
          "headline": "Microsoft 대 Amazon: AMZN의 AI 성장이 투자자들에 의해 과소평가되고 있습니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792416968,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=af9f985fb0e6b4ac71d751ad4591e5b84d88a58eb40a40daed7c5a3b949f62e7",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "b47bf398e06c28ce57e3",
          "headline": "예측: Microsoft Stock은 10 월 28 일 이후에 급등 할 것입니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1792403700,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=89e0b9c9c53449d0702d7f0982ea90fa05ffa3f59ce267bd0fbc8246030db22d",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "7a23cf14a0d301929ef5",
          "headline": "업데이트: Microsoft의 비즈니스 소프트웨어, 영국 규제 감독 강화 제안",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792400133,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e1165cc07d46503327480257cf375752da1201ad763def651f060e74346350ef",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "83c1aa88d31c26d96013",
          "headline": "일부 투자자들은 AI 거래에 의문을 제기하고 있습니다. Microsoft는 추세를 거스르고 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792357500,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ff35a4a3386611f185444efefec578170d0e502541a8bd27f6b93751b1fc61b7",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "b643d14f1b31e13181c7",
          "headline": "Microsoft가 Nscale과 영국 데이터 센터 계약을 철회했다고 Telegraph가 보도했습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792317173,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=853494d3498dd63d09406def43814b44a1cf00dada6b2eac44b47d63a106b801",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "d257eecb1c67bc6e1d7a",
          "headline": "Microsoft가 Nscale과 영국 데이터 센터 계약을 폐기했다고 Telegraph가 밝혔습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792312270,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0404698d37ae0470876a3d08c806c15c45ff75be24b431f9bcc70a82954b7a1c",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "3952f355b71f86ffdd41",
          "headline": "Microsoft(MSFT)가 새로운 규제 압력에 직면해 있습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792264284,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2b566dbbc0522f8a0edae255100bcfa6d0fbc745f623c43c289e3eb8a1c74d25",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 11,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "GOOGL": {
      "ticker": "GOOGL",
      "updatedAt": 1792523609.9919446,
      "dataAsOf": 1792429706,
      "signal": "중립·확인 대기",
      "netScore": -1.05,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.7,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 1.22,
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
          "eventId": "a390daf5495857109f84",
          "headline": "GF Securities가 Google 칩 지연으로 인해 위치가 훼손되지 않을 것이라고 Marvell이 6% 상승했습니다. 브로드컴 3% 상승",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1792429706,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3f646b562aa3ac37aa7f2b73570329bd642c4eebfee2483f939c356f0d2f7b7b",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "09536402e980d56bba28",
          "headline": "메타 대 알파벳: GOOGL의 AI 성장이 투자자들에 의해 간과되고 있습니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792416869,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3f12a28744673abb85037bf7645caa0344d4eac93ceda73428ccf7f4aecd5044",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "bda47ee60b1109e221ce",
          "headline": "American Electric Power Company (AEP), Google Deal Lands로 12% 공정 가치 격차 직면",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792365218,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8ba5a15822e0e0ecf46ad52e7233e37d32d9255dc44beba69f635ede55c57081",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "ee58b1442a6454eceb27",
          "headline": "Google AI 게임 제작 파트너십 후 Unity Stock In Focus",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792289780,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9efd3ce470a9d0a0a34895898fa7012f32f387d7585c5ae09c3fb20fdd311198",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "0743f183bcf44dc25cdf",
          "headline": "Greg Abel은 지난 분기에 Alphabet과 Delta에 대규모 투자를 했으며 Berkshire는 44억 달러의 자사주를 매입했습니다. 이것은 투자자가 주목해야 할 구매 신호입니까?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792277400,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=397e53539d11d5d4bca705e1a7c57555ab0061c7f5f441a4dd5b9c27d0e6748a",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "dfde06a6074ec877c86b",
          "headline": "알파벳이 아닙니다. 마이크로소프트가 아닙니다. 이것이 제가 지금 5,000달러로 사고 싶은 클라우드 주식입니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1792186980,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4973c9150d7ec782eb02c031b24fa855ea2e437ec9c65b2ec3d74d4711f5faa8",
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
    "AMZN": {
      "ticker": "AMZN",
      "updatedAt": 1792523609.9919446,
      "dataAsOf": 1792499257,
      "signal": "주의 강화",
      "netScore": -7.41,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
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
          "eventId": "c2f0cae2d0cdfd873990",
          "headline": "Morgan Stanley Top Pick에서 Amazon 주가 상승: 350달러 목표에 필요한 것",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1792499257,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=760c6eb9175adc6c96225d582675e3b33ddd711e4f2116a85354b90723f2b93e",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "3e1942bbb4cc365db652",
          "headline": "MMM 주가 밤새 상승: Amazon이 데이터 센터 제품에 60억 달러를 지출하면 300만 달러를 소유할 수 있음",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1792460827,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e74b531e89ef7af2922fba2beb11ecbfb482b11e12672af124e18844fc2bd03b",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "1432e8c717f5a1591599",
          "headline": "Amazon은 확장된 데이터 센터 파트너십을 통해 5억 2,140만 달러 규모의 3M 주식을 매입할 수 있는 영장을 받았습니다. MMM은 영업 시간 외 5% 이상 상승합니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1792460428,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ecd1af9cf2c3406b4af22abcb96b91424fd304fa192b786d4793423e9792f94a",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "fabac6490a7f1432285f",
          "headline": "AI Rout이 식으면서 Nasdaq 100은 거의 한 달 만에 최고의 날을 맞이했습니다 — AMZN, BE, CRWV, AAPL, PLTR 초점",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1792450823,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b2c49c35a756adb72db9233d431d447e8200033fa768a6a031f1d0857617d958",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "864570426d6afecc0c80",
          "headline": "BE 주식은 Oracle이 Jupiter 프로젝트에 '빠른 움직임' 신호를 보낸 후 3%를 추가합니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1792439436,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ccd00c5c3fd4561eca5fa8d0496bf03dc8814aa87fb54276ccd5d784ce66bb28",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "1817cd8db144ee3beec9",
          "headline": "Microsoft 대 Amazon: AMZN의 AI 성장이 투자자들에 의해 과소평가되고 있습니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792416968,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=af9f985fb0e6b4ac71d751ad4591e5b84d88a58eb40a40daed7c5a3b949f62e7",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "198bb22db5ba2be5cde9",
          "headline": "Amazon.com vs. Walmart: 2026년에는 어떤 주식을 사는 것이 더 나은가요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792380002,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8b19d1717a0d909f6363222d686863c3f4fb2b1cff6f51dc036eeabdb9f7537c",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "b219a486b81d7332ef85",
          "headline": "거래 3: DoorDash 및 Australian Open, AEG 및 NFL/AWS",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792187050,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ef1c627ae2d556c5ebd12ad2c650bf8211be83b38ac38cac6ca12745822893ad",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 8,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "META": {
      "ticker": "META",
      "updatedAt": 1792523609.9919446,
      "dataAsOf": 1792416869,
      "signal": "중립·확인 대기",
      "netScore": 0.22,
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
          "eventId": "09536402e980d56bba28",
          "headline": "메타 대 알파벳: GOOGL의 AI 성장이 투자자들에 의해 간과되고 있습니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792416869,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3f12a28744673abb85037bf7645caa0344d4eac93ceda73428ccf7f4aecd5044",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "e55b82bb041ad30e7d32",
          "headline": "월스트리트 브런치: SpaceX, Tesla, Meta의 수익 카드",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792337700,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=94735cc9488b6d03b181b6d9b142678f324e171f33ae8a31f1c1a4def85acc55",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "0ffd7f6db5add884ee5f",
          "headline": "Meta의 180억 달러 규모의 청소년 안전 거래가 곧 수익에 타격을 줄 것입니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792334220,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=97636b18cfcdcef03406eec0b99c387bf82094ac8a6600063ae57672285c1ef0",
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
    "AAPL": {
      "ticker": "AAPL",
      "updatedAt": 1792523609.9919446,
      "dataAsOf": 1792497601,
      "signal": "주의 강화",
      "netScore": -6.02,
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
          "score": -4.55,
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
          "eventId": "54bc9020bb7c90036444",
          "headline": "Apple 대 ASML: 2026년에는 어떤 기술주를 구매하는 것이 더 나은가요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792497601,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fbc85a70aebb4549f22f8c830881dc7ff6d9e4916c01327b354afe1c8e058ef7",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "c11ece71bb149befb39a",
          "headline": "Apple, 10월 28일 'Pro And Tell' 이벤트 확인 — 최초의 터치스크린 MacBook Pro 예상",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792431800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=522773942a919b923a94eb66756e848a851f89569c35a3e3afdb53e4bc65736e",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "가격 전가 시 마진 방어, 판매량·교체주기 둔화 위험"
        },
        {
          "eventId": "cd7a406e62cf6eddf5ca",
          "headline": "VGT를 소유하고 계십니까? Nvidia, Apple, Microsoft 및 Broadcom의 실제 비율은 다음과 같습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792330080,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=997c82bec29b639e1cac57a3bdc3156b75a04e58d14b2b935bca4a0e3da0bab0",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "bfdbfc7e495e284e24d4",
          "headline": "Apple의 시장 가치는 Tim Cook이 CEO로 재임한 15년 동안 3,500억 달러에서 5조 달러로 성장했습니다. John Ternus가 이끄는 Apple의 다음 장에서 성장 곡선이 의미하는 바는 다음과 같습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1792267620,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=28c149039cb32b2d3b53aa6fe40be2dfe7dae25ec8983aee0a1eb10b69911a1b",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "6d2e2d5060c3d5bde2b7",
          "headline": "Apple에 투자한 10,000달러는 2031년까지 이만큼 가치가 있을 수 있습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792252142,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=30839aa7fc60dc069948cc37c5e8fe24fa644d372c234e8f2f901824d19ec307",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "cbf328bd1c2941090543",
          "headline": "예측: 2027년 말까지 알파벳은 애플보다 더 큰 회사가 될 것입니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792193340,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=dff21cdd71a1021e2d7bbc55f3d41fe78fdffb41bda1c9e790f30bb28163a3e6",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "10d809cbadada9b447f5",
          "headline": "iPhone Duo는 사전 예약 판매 급증으로 이미 2027년까지 예약 주문됨",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792179277,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=16603b60e699bd57c649c912acc2158f422bfb4534474401ad98179157cdc37b",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "가격 전가 시 마진 방어, 판매량·교체주기 둔화 위험"
        },
        {
          "eventId": "223b2d13bb7ad78b67ea",
          "headline": "Apple은 현재 2026년 최고 성과를 자랑하는 Magnificent 7 주식입니다. Apple이 NVIDIA, Tesla 및 Amazon을 능가하는 이유는 다음과 같습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792179266,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f831231eaab13eb8aeb433db1cbbdbf1fe067161173a318013a30dfc63d8ee53",
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
      "unverifiedEvidenceCount": 8,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "TSLA": {
      "ticker": "TSLA",
      "updatedAt": 1792523609.9919446,
      "dataAsOf": 1792501223,
      "signal": "주의 강화",
      "netScore": -9.88,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.05,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": -0.7,
          "level": "중립"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": -2.97,
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
          "eventId": "dff35b67ce2b3330873a",
          "headline": "Tesla는 21명의 애널리스트가 보류된 보고서를 발표했습니다. 그들의 마음을 바꿀 것은 다음과 같습니다",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1792501223,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=53011929080f0c03c6183ad058f12c411b63af3b3817da164ffdf7b1ae7b770a",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "da989621894fd2900d83",
          "headline": "JPMorgan이 주식을 업그레이드함에 따라 Tesla는 Intel과의 파운드리 계약을 맺었습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792440467,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1bb54ff3683b83061badd91f3a125a0617189000da3f2260cf75bdd41478f462",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "1fc67f52948919ac2cb2",
          "headline": "Tesla 주식 vs. S&P 500: 2030년까지 어느 투자가 승리할까요?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1792413120,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=373748d8d378652d41f3e454a51e5adfb7febcb8ee67453d7d8e8e6afef6e9ba",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "e55b82bb041ad30e7d32",
          "headline": "월스트리트 브런치: SpaceX, Tesla, Meta의 수익 카드",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792337700,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=94735cc9488b6d03b181b6d9b142678f324e171f33ae8a31f1c1a4def85acc55",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "0cf68824e6973a927f67",
          "headline": "이번 주 시장에서 기대할 사항: 메타, Tesla 보고서; 항공사, 스트리밍 자이언츠 결과 발표 예정",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792314000,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8522880567ed0bba6d5d8b0f3acb9b39a3e40fb07418a5a1d7341721efa72a22",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "794398fe1a45b06c2da8",
          "headline": "Elon Musk는 Optimus가 Tesla의 가장 중요한 제품이라고 말합니다. 이 3개 공급업체는 Tesla보다 먼저 대금을 받습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792308300,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0361792884d13193f142b06e8fd8d60a4422616d7c80c60ebca82133aa938f87",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "dccabd9f726d65afbe87",
          "headline": "Tesla가 법정에서 승리했습니다: 자율주행 구매자는 집단 소송을 제기할 수 없습니다",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792249822,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=87f6c9c3acdc63de9770a8e0619c0f687738ce8914f6b603eb4f0aed3466922e",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "83e96f47ef7dbf8e46aa",
          "headline": "BYD 또는 테슬라: 더 나은 주식은 무엇입니까?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792219800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4fdcce53d89becebe52da3110c8c28dfd30b00b2eea26405468404de767167d1",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "da917d08988b41130910",
          "headline": "Tesla의 플라잉 로드스터는 월스트리트에서 자동차가 아닌 SpaceX에 대해 이야기하고 있습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792200301,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9f5169f7693b1947d49aa05f1f9411be43939a651f40ec2105a9e2c659aef0d5",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "223b2d13bb7ad78b67ea",
          "headline": "Apple은 현재 2026년 최고 성과를 자랑하는 Magnificent 7 주식입니다. Apple이 NVIDIA, Tesla 및 Amazon을 능가하는 이유는 다음과 같습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792179266,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f831231eaab13eb8aeb433db1cbbdbf1fe067161173a318013a30dfc63d8ee53",
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
      "unverifiedEvidenceCount": 10,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ORCL": {
      "ticker": "ORCL",
      "updatedAt": 1792523609.9919446,
      "dataAsOf": 1792492863,
      "signal": "중립·확인 대기",
      "netScore": -0.35,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.05,
          "level": "우호적"
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
          "eventId": "cb204625b730d750f316",
          "headline": "AstraZeneca와 Oracle, 임상 시험 및 환자 치료 개선을 위해 AI 파트너십 개시",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792492863,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d8ae13749806499f734e5ead993cc11fa4369da2835d237a97993fe54c35e450",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "166ca2101a701cce018b",
          "headline": "Microsoft vs. Oracle: 2026년에는 어느 기술주를 매수하는 것이 더 나은가요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792469402,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e1e505b35a5f707444373e7c8181733e4fa60a1c6fb2d85ffe25265775e4f055",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "125d3fd3c7cdb0487be4",
          "headline": "Red Hat, Oracle Cloud Infrastructure에서 업계 최고의 하이브리드 클라우드 플랫폼 가용성 확대",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1792414800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=888420fd5247dbc3a598c280ca2224b50a4b85a0272c5c0c893a5127672ae31b",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "OCI 서비스 범위 확대 가능성, 매출화 시점 불확실"
        },
        {
          "eventId": "5dc1eb95e9ca9d7adf97",
          "headline": "예측: Oracle 주식은 2030년까지 S&P 500을 추월합니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1792281962,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=93aa3759b7ee963363cc4cc54dd8390a92402604886547ed78517901e80d40f6",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "dfde06a6074ec877c86b",
          "headline": "알파벳이 아닙니다. 마이크로소프트가 아닙니다. 이것이 제가 지금 5,000달러로 사고 싶은 클라우드 주식입니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1792186980,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4973c9150d7ec782eb02c031b24fa855ea2e437ec9c65b2ec3d74d4711f5faa8",
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
    "CRM": {
      "ticker": "CRM",
      "updatedAt": 1792523609.9919446,
      "dataAsOf": 1792503443,
      "signal": "우호적 변화",
      "netScore": 5.6,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.4,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 2.8,
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
          "eventId": "6dba29f9246cd326720a",
          "headline": "Salesforce는 ServiceNow와 Adobe가 2%를 얻었음에도 불구하고 Braze에 대한 56억 6천만 달러 거래에서 2%를 철회했습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792503443,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=00c89d8811e1f08eef06c56dc15d26447343c61555cc5672c937beae38808e67",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "e1495d7d686ab763aceb",
          "headline": "Salesforce, 인수가 계속됨에 따라 Braze를 56억 달러에 전액 현금 거래로 인수",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792502213,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=61f3339e45a25197d7e8629434c16719a06b922cc15f27855729c69cd16d7b6e",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "8ffb356474c5c03f8aa1",
          "headline": "CRM 주가 하락: Salesforce, AI 마케팅 강화를 위해 56억 6천만 달러 규모의 Braze 거래 체결",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792502103,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a7c462b685c6ac6693a06c6eaf9ee5bdf56b178bb040e0f99637f57bc4304017",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "362eb0b93be0e7cc4bb8",
          "headline": "CRM SEC Form 8-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1792422000.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1108524/000119312526425881/d516983d8k.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 3,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "PLTR": {
      "ticker": "PLTR",
      "updatedAt": 1792523609.9919446,
      "dataAsOf": 1792450823,
      "signal": "중립·확인 대기",
      "netScore": -0.69,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.7,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 0.53,
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
          "eventId": "fabac6490a7f1432285f",
          "headline": "AI Rout이 식으면서 Nasdaq 100은 거의 한 달 만에 최고의 날을 맞이했습니다 — AMZN, BE, CRWV, AAPL, PLTR 초점",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1792450823,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b2c49c35a756adb72db9233d431d447e8200033fa768a6a031f1d0857617d958",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "acb63be1aff9910c8d5a",
          "headline": "Palantir와 Knox Systems, 연방 소프트웨어 배포 가속화를 위한 파트너십 발표",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792413885,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8990f2af56bf598fd9a2376300737649c344728fe6a5db620d35cd3548d95159",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "1cf6cdca1b4b31c0c12d",
          "headline": "2035년 SpaceX, Palantir 및 3개의 AI 칩 주식에 걸쳐 10,000달러를 분할할 수 있는 가치는 다음과 같습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1792312020,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3d75b776d3f17b6fce08676dc1e20e199859cb2f0dc6c36d18b54393123aa869",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "285dd24ca08012221024",
          "headline": "Palantir 주식을 지금 매수할 수 있나요?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792257900,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=387365ff981c7c4470704ae86cf2295b8748bb408c24ac1ed11d9dd50b0b2b87",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "06e756d17d9affbad4d8",
          "headline": "Stocktwits Defense Watch: RTX Continues Deal Momentum, Ondas-Palantir, AeroVironment Strike Four International Deals로 AI 회사 런칭",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792210547,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8ead569efd6a103b273cbe81d64cfaef7ed7045d1d2a900173c6b4a13ff05779",
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
    "NVDA": {
      "ticker": "NVDA",
      "updatedAt": 1792523609.9919446,
      "dataAsOf": 1792491028,
      "signal": "우호적 변화",
      "netScore": 5.39,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.7,
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
          "score": 4.03,
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
          "eventId": "94b03da05eb19df6787c",
          "headline": "Open AI 랙 출시로 인해 Arista Networks 주식에 대한 투자 사례가 바뀌고 있습니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792491028,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=53f10a68349424911c2300add3376aaf26c6051ffa92e23dd799235512907a5e",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "3c07fc3a8aff14160752",
          "headline": "Marvell 주식은 여전히 ​​투자자의 날 마감보다 17% 낮습니다. 2031년에 AI 자금 조달 공포가 의미하는 바는 다음과 같습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792468563,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cd42d10496cf241d9fa51cfcab1c0b632a51b21388c7b5b0f22d67d188d6fcc0",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "dc714bb527c91d469cce",
          "headline": "AVGO 주식은 10년간의 Docomo 거래 이후 밤새 상승했지만 소매업은 CEO의 AI '카지노' 발언보다 우위를 유지했습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792465702,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=830600d0ab1059368bebd62f0917350abcd36044def65619d3975d1db6c77e19",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "3e1942bbb4cc365db652",
          "headline": "MMM 주가 밤새 상승: Amazon이 데이터 센터 제품에 60억 달러를 지출하면 300만 달러를 소유할 수 있음",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1792460827,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e74b531e89ef7af2922fba2beb11ecbfb482b11e12672af124e18844fc2bd03b",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "fabac6490a7f1432285f",
          "headline": "AI Rout이 식으면서 Nasdaq 100은 거의 한 달 만에 최고의 날을 맞이했습니다 — AMZN, BE, CRWV, AAPL, PLTR 초점",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1792450823,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b2c49c35a756adb72db9233d431d447e8200033fa768a6a031f1d0857617d958",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "c6f5ce1ef9143b0897d7",
          "headline": "Amazon은 AI 칩을 사용하기 쉽게 만들었습니다. 엔비디아 투자자들은 걱정해야 할까요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792437542,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b41f28cc0a73a424d42c101b27ec7db523ea3301721cb171375df9189c631c1f",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "6be1d306a2cdacb31d22",
          "headline": "투자자들이 AI 거래에 다시 뛰어들면서 인텔은 칩 주식을 더 높게 이끌었습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792418246,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2820dde5cd99817f9b1e95d390cdea94731c177e10050c3fee1068a3326c294a",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "1817cd8db144ee3beec9",
          "headline": "Microsoft 대 Amazon: AMZN의 AI 성장이 투자자들에 의해 과소평가되고 있습니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792416968,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=af9f985fb0e6b4ac71d751ad4591e5b84d88a58eb40a40daed7c5a3b949f62e7",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "09536402e980d56bba28",
          "headline": "메타 대 알파벳: GOOGL의 AI 성장이 투자자들에 의해 간과되고 있습니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792416869,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3f12a28744673abb85037bf7645caa0344d4eac93ceda73428ccf7f4aecd5044",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "31f05914e82367045315",
          "headline": "글로벌 핀 전계 효과 트랜지스터(FinFET) 3D 트랜지스터 시장 보고서 2026 | TSMC, Samsung, Intel 및 ASML이 규모를 가속화함에 따라 AI, 5G 및 Sub-7nm 수요를 활용하세요",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792407480,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=df35a9ae1b17f04bfa5908618864e03c3b43334eec574202914e5b874bf96d82",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "2b9b822ef8952ef5a21e",
          "headline": "글로벌 광집적 회로 시장 보고서 2026 | STMicroelectronics, GlobalFoundries, Coherent 및 Ayar Labs의 AI 데이터 센터 가속화에 따라 2030년까지 CAGR 19.3% 활용",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792407060,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=db7c636962c841d2b328221d0c5a16d3013cdd731483b25e687241acb5b5f842",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "83c1aa88d31c26d96013",
          "headline": "일부 투자자들은 AI 거래에 의문을 제기하고 있습니다. Microsoft는 추세를 거스르고 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792357500,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ff35a4a3386611f185444efefec578170d0e502541a8bd27f6b93751b1fc61b7",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 25,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMD": {
      "ticker": "AMD",
      "updatedAt": 1792523609.9919446,
      "dataAsOf": 1792491028,
      "signal": "우호적 변화",
      "netScore": 8.96,
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
          "eventId": "94b03da05eb19df6787c",
          "headline": "Open AI 랙 출시로 인해 Arista Networks 주식에 대한 투자 사례가 바뀌고 있습니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792491028,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=53f10a68349424911c2300add3376aaf26c6051ffa92e23dd799235512907a5e",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "3c07fc3a8aff14160752",
          "headline": "Marvell 주식은 여전히 ​​투자자의 날 마감보다 17% 낮습니다. 2031년에 AI 자금 조달 공포가 의미하는 바는 다음과 같습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792468563,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cd42d10496cf241d9fa51cfcab1c0b632a51b21388c7b5b0f22d67d188d6fcc0",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "c6f5ce1ef9143b0897d7",
          "headline": "Amazon은 AI 칩을 사용하기 쉽게 만들었습니다. 엔비디아 투자자들은 걱정해야 할까요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792437542,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b41f28cc0a73a424d42c101b27ec7db523ea3301721cb171375df9189c631c1f",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "2a293eb7c6f9f65b49a1",
          "headline": "2032년까지 AMD에 대한 5,000달러 투자의 가치는 다음과 같습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1792436760,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e92a027ba9371b337a4c714320c85eb34ac5f16f61f42dd4c873383c31e1cce3",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "6be1d306a2cdacb31d22",
          "headline": "투자자들이 AI 거래에 다시 뛰어들면서 인텔은 칩 주식을 더 높게 이끌었습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792418246,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2820dde5cd99817f9b1e95d390cdea94731c177e10050c3fee1068a3326c294a",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "1817cd8db144ee3beec9",
          "headline": "Microsoft 대 Amazon: AMZN의 AI 성장이 투자자들에 의해 과소평가되고 있습니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792416968,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=af9f985fb0e6b4ac71d751ad4591e5b84d88a58eb40a40daed7c5a3b949f62e7",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "09536402e980d56bba28",
          "headline": "메타 대 알파벳: GOOGL의 AI 성장이 투자자들에 의해 간과되고 있습니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792416869,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3f12a28744673abb85037bf7645caa0344d4eac93ceda73428ccf7f4aecd5044",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "31f05914e82367045315",
          "headline": "글로벌 핀 전계 효과 트랜지스터(FinFET) 3D 트랜지스터 시장 보고서 2026 | TSMC, Samsung, Intel 및 ASML이 규모를 가속화함에 따라 AI, 5G 및 Sub-7nm 수요를 활용하세요",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792407480,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=df35a9ae1b17f04bfa5908618864e03c3b43334eec574202914e5b874bf96d82",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "2b9b822ef8952ef5a21e",
          "headline": "글로벌 광집적 회로 시장 보고서 2026 | STMicroelectronics, GlobalFoundries, Coherent 및 Ayar Labs의 AI 데이터 센터 가속화에 따라 2030년까지 CAGR 19.3% 활용",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792407060,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=db7c636962c841d2b328221d0c5a16d3013cdd731483b25e687241acb5b5f842",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "dfb7b1c8403dd425a347",
          "headline": "이것은 AI 매각에서 AMD의 가장 큰 장애물입니다 (아니요, 엔비디아는 아닙니다).",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792372800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=133dc0ce0e3c9886a3f4e58edf4e4dc399bb12645a4a3eeb6b39bba129ac9ecd",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "83c1aa88d31c26d96013",
          "headline": "일부 투자자들은 AI 거래에 의문을 제기하고 있습니다. Microsoft는 추세를 거스르고 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792357500,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ff35a4a3386611f185444efefec578170d0e502541a8bd27f6b93751b1fc61b7",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "b048012de33b44384c14",
          "headline": "대만 반도체가 최고의 AI 투자처인 이유를 방금 증명했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792352580,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=aa8f89ccfcc82cdd5533240900c42271d1d202512420920155fb3590ecca9420",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 18,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AVGO": {
      "ticker": "AVGO",
      "updatedAt": 1792523609.9919446,
      "dataAsOf": 1792503017,
      "signal": "주의 강화",
      "netScore": -2.52,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.22,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 1.92,
          "level": "우호적"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": -2.62,
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
          "eventId": "0576611f612a8c06288b",
          "headline": "NVIDIA가 주목을 받지만 Broadcom은 더 큰 놀라움을 선사할 수 있습니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1792503017,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b5af670081a927e2468e1d3008c68af70dc5c3e2b902101d7d6a313edf2a67a2",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "6442c510c3e64c7acb42",
          "headline": "Broadcom, 글로벌 운영 지원을 위해 FedEx와 지속적인 인프라 계약 발표",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792501200,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=dac0d99e77c6a45c3f613ed28c686344503f3c88fd3d1408b8f71e14605f26be",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "9463a4fe79bfe6761413",
          "headline": "FedEx, 확장된 협력 하에 Broadcom의 인프라 소프트웨어 포트폴리오 계속 활용",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792487054,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2c8b08edb11558d8493814c5309fa741999649b83ea63fa4f255f472acb2227e",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "dc714bb527c91d469cce",
          "headline": "AVGO 주식은 10년간의 Docomo 거래 이후 밤새 상승했지만 소매업은 CEO의 AI '카지노' 발언보다 우위를 유지했습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792465702,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=830600d0ab1059368bebd62f0917350abcd36044def65619d3975d1db6c77e19",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "a390daf5495857109f84",
          "headline": "GF Securities가 Google 칩 지연으로 인해 위치가 훼손되지 않을 것이라고 Marvell이 6% 상승했습니다. 브로드컴 3% 상승",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1792429706,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3f646b562aa3ac37aa7f2b73570329bd642c4eebfee2483f939c356f0d2f7b7b",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "2b059a85b8e8efff6d23",
          "headline": "브로드컴 대. Marvell: 맞춤형 실리콘이 뜨거워질 것입니다",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1792413948,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3c2aaeb48ec7b4e73aa3ec89e8bee46a18b1b9a8b65d3fc4c4b13a34e5a9a071",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "8c695df4c32e604c4729",
          "headline": "AI 칩 공급이 병목 현상으로 전환되면서 Broadcom(AVGO)은 어떤 상황에 직면하게 됩니까?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792339773,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=99ada1d69d367f1bd75eb62c3b665b465fed7b42122097d0c519a376c3167313",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "cd7a406e62cf6eddf5ca",
          "headline": "VGT를 소유하고 계십니까? Nvidia, Apple, Microsoft 및 Broadcom의 실제 비율은 다음과 같습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792330080,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=997c82bec29b639e1cac57a3bdc3156b75a04e58d14b2b935bca4a0e3da0bab0",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "6c97616679eee1a4c154",
          "headline": "2030년까지 엔비디아, 브로드컴, TSMC를 가로지르는 $ 3,000 스플릿이 이만큼의 가치가 있을 수 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792282800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=eccb3290658773cf73b2e97e864fe97d851b64b9a96ebbb996cbf9e6377e4d60",
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
      "unverifiedEvidenceCount": 9,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "QCOM": {
      "ticker": "QCOM",
      "updatedAt": 1792523609.9919446,
      "dataAsOf": 1792431800,
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
          "eventId": "c11ece71bb149befb39a",
          "headline": "Apple, 10월 28일 'Pro And Tell' 이벤트 확인 — 최초의 터치스크린 MacBook Pro 예상",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792431800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=522773942a919b923a94eb66756e848a851f89569c35a3e3afdb53e4bc65736e",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "스마트폰 수요가 줄면 고객 칩 수요에 부담"
        },
        {
          "eventId": "10d809cbadada9b447f5",
          "headline": "iPhone Duo는 사전 예약 판매 급증으로 이미 2027년까지 예약 주문됨",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792179277,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=16603b60e699bd57c649c912acc2158f422bfb4534474401ad98179157cdc37b",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "스마트폰 수요가 줄면 고객 칩 수요에 부담"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 2,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ARM": {
      "ticker": "ARM",
      "updatedAt": 1792523609.9919446,
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
    "MRVL": {
      "ticker": "MRVL",
      "updatedAt": 1792523609.9919446,
      "dataAsOf": 1792429706,
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
          "eventId": "a390daf5495857109f84",
          "headline": "GF Securities가 Google 칩 지연으로 인해 위치가 훼손되지 않을 것이라고 Marvell이 6% 상승했습니다. 브로드컴 3% 상승",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1792429706,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3f646b562aa3ac37aa7f2b73570329bd642c4eebfee2483f939c356f0d2f7b7b",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "2b059a85b8e8efff6d23",
          "headline": "브로드컴 대. Marvell: 맞춤형 실리콘이 뜨거워질 것입니다",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1792413948,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3c2aaeb48ec7b4e73aa3ec89e8bee46a18b1b9a8b65d3fc4c4b13a34e5a9a071",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 2,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "INTC": {
      "ticker": "INTC",
      "updatedAt": 1792523609.9919446,
      "dataAsOf": 1792498266,
      "signal": "중립·확인 대기",
      "netScore": 1.33,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.87,
          "level": "중립"
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
          "score": -1.22,
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
          "eventId": "569cf14084c7c65ef21c",
          "headline": "JPMorgan, 강력한 경영진 실행에 따라 Intel 주식 업그레이드",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1792498266,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6ecaf6deb330724ae990075f189aae32effc8291c5ceefa2212010a16dba521e",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "da989621894fd2900d83",
          "headline": "JPMorgan이 주식을 업그레이드함에 따라 Tesla는 Intel과의 파운드리 계약을 맺었습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792440467,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1bb54ff3683b83061badd91f3a125a0617189000da3f2260cf75bdd41478f462",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "6be1d306a2cdacb31d22",
          "headline": "투자자들이 AI 거래에 다시 뛰어들면서 인텔은 칩 주식을 더 높게 이끌었습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792418246,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2820dde5cd99817f9b1e95d390cdea94731c177e10050c3fee1068a3326c294a",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "31f05914e82367045315",
          "headline": "글로벌 핀 전계 효과 트랜지스터(FinFET) 3D 트랜지스터 시장 보고서 2026 | TSMC, Samsung, Intel 및 ASML이 규모를 가속화함에 따라 AI, 5G 및 Sub-7nm 수요를 활용하세요",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792407480,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=df35a9ae1b17f04bfa5908618864e03c3b43334eec574202914e5b874bf96d82",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "e24b971c0b59af6019cc",
          "headline": "향후 5년 동안 인공지능(AI) 메모리 주식을 1개만 소유할 수 있다면 그것은 Micron이 아닐 것입니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1792369200,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4a12bae0feea9b77908046be33fc7c8f6f4411f3f39faab56b0abcf51b67669a",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "6ed3f8ed83dd79cc7298",
          "headline": "트럼프 대통령, 마이크론 주식 매각하고 또 다른 메가캡 인공지능(AI) 주식 매입",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792314481,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6ae9d496921c6b1395235e1dedc10ed6b05de432accb1a1206921013621b9485",
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
    "TSM": {
      "ticker": "TSM",
      "updatedAt": 1792523609.9919446,
      "dataAsOf": 1792407480,
      "signal": "주의 강화",
      "netScore": -3.0,
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
          "eventId": "31f05914e82367045315",
          "headline": "글로벌 핀 전계 효과 트랜지스터(FinFET) 3D 트랜지스터 시장 보고서 2026 | TSMC, Samsung, Intel 및 ASML이 규모를 가속화함에 따라 AI, 5G 및 Sub-7nm 수요를 활용하세요",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792407480,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=df35a9ae1b17f04bfa5908618864e03c3b43334eec574202914e5b874bf96d82",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "76e6fff3c2bb3a16cd91",
          "headline": "더 나은 AI 칩 스톡: 대만 반도체 vs. 마이크론",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792339440,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c50b526733f247c51b3031e8462745d3a9eb45b1eb0ef720b2b660772353952e",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "6c97616679eee1a4c154",
          "headline": "2030년까지 엔비디아, 브로드컴, TSMC를 가로지르는 $ 3,000 스플릿이 이만큼의 가치가 있을 수 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792282800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=eccb3290658773cf73b2e97e864fe97d851b64b9a96ebbb996cbf9e6377e4d60",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "025e08677c9c9ec46e7e",
          "headline": "TSMC가 패키징 사업을 목표로 삼으면서 인텔 주가는 약 6% 하락했습니다. 인텔의 마진이 의미하는 바는 다음과 같습니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1792257998,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ca2bf16f5b630348dcff0278e595af4431925ee990afbac5440c39d89b96268b",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "8d35a6721745a79a7523",
          "headline": "TSMC는 AI 칩 수요가 여전히 공급할 수 있는 것보다 훨씬 높다고 말합니다. 그것이 바로 내가 Nvidia 주식을 구매하는 이유입니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792207021,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=52ffab929266c3934842b1d4f87a7e7db87c12c528772c8b8bffd6e21d542aa9",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "62db2aec4e9bee8f5c75",
          "headline": "예측: 현재 Taiwan Semi(TSMC)에 투자된 1,000달러는 2030년까지 이만큼 가치가 있을 것입니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792185900,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=45cf95aa85b6bf142a5da067c064ed5cf2ee71ff367ca6787f927b9e9fe1301d",
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
    "ASML": {
      "ticker": "ASML",
      "updatedAt": 1792523609.9919446,
      "dataAsOf": 1792497601,
      "signal": "중립·확인 대기",
      "netScore": 0.9,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.52,
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
          "score": -1.05,
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
          "eventId": "54bc9020bb7c90036444",
          "headline": "Apple 대 ASML: 2026년에는 어떤 기술주를 구매하는 것이 더 나은가요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792497601,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fbc85a70aebb4549f22f8c830881dc7ff6d9e4916c01327b354afe1c8e058ef7",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "e13f4a9d70377623b593",
          "headline": "ASML Holding(ENXTAM:ASML)이 차세대 FinFET 3D 칩을 위해 협력하는 이유는 무엇입니까?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792422685,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5926958ab4bd4647d8639b649d847fe5bbc39653531573bcb9b67a795726ebfb",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "31f05914e82367045315",
          "headline": "글로벌 핀 전계 효과 트랜지스터(FinFET) 3D 트랜지스터 시장 보고서 2026 | TSMC, Samsung, Intel 및 ASML이 규모를 가속화함에 따라 AI, 5G 및 Sub-7nm 수요를 활용하세요",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792407480,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=df35a9ae1b17f04bfa5908618864e03c3b43334eec574202914e5b874bf96d82",
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
    "AMAT": {
      "ticker": "AMAT",
      "updatedAt": 1792523609.9919446,
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
      "updatedAt": 1792523609.9919446,
      "dataAsOf": 1792436224,
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
          "eventId": "bdf58dad04f3050349f7",
          "headline": "Micron 대 Lam 연구: 도구 공급업체를 구매하면 메모리 주기 위험이 줄어듭니까?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792436224,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6e86ea4141ff54d14491414a41d9714f577c17d27b8152fd2d7e7384c608ce8c",
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
    "KLAC": {
      "ticker": "KLAC",
      "updatedAt": 1792523609.9919446,
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
      "updatedAt": 1792523609.9919446,
      "dataAsOf": 1792500698,
      "signal": "우호적 변화",
      "netScore": 9.15,
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
          "eventId": "92b22ce4a0d7332d302a",
          "headline": "Micron은 중국 수출 제한으로 인해 미국 인듐 처리에 투자 – MU 재고는 여전히 하락",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792500698,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=377e270f44579abbedb9820630758a3f80b1a3ae7dd8e9b92c70c603659c353d",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "94b03da05eb19df6787c",
          "headline": "Open AI 랙 출시로 인해 Arista Networks 주식에 대한 투자 사례가 바뀌고 있습니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792491028,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=53f10a68349424911c2300add3376aaf26c6051ffa92e23dd799235512907a5e",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "3c07fc3a8aff14160752",
          "headline": "Marvell 주식은 여전히 ​​투자자의 날 마감보다 17% 낮습니다. 2031년에 AI 자금 조달 공포가 의미하는 바는 다음과 같습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792468563,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cd42d10496cf241d9fa51cfcab1c0b632a51b21388c7b5b0f22d67d188d6fcc0",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "c6f5ce1ef9143b0897d7",
          "headline": "Amazon은 AI 칩을 사용하기 쉽게 만들었습니다. 엔비디아 투자자들은 걱정해야 할까요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792437542,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b41f28cc0a73a424d42c101b27ec7db523ea3301721cb171375df9189c631c1f",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "bdf58dad04f3050349f7",
          "headline": "Micron 대 Lam 연구: 도구 공급업체를 구매하면 메모리 주기 위험이 줄어듭니까?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792436224,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6e86ea4141ff54d14491414a41d9714f577c17d27b8152fd2d7e7384c608ce8c",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d809644cd27150ff4bdc",
          "headline": "머스크 러브: 마이크론은 메모리 가격 '합리적', 다른 업체는 가격 횡령: '오늘의 고객은 잊지 않을 것'",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1792433209,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2b1d6f0ea3901dd3525c920783b70e12741dec819af23b05999c1fee4e5c7e92",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "c11ece71bb149befb39a",
          "headline": "Apple, 10월 28일 'Pro And Tell' 이벤트 확인 — 최초의 터치스크린 MacBook Pro 예상",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792431800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=522773942a919b923a94eb66756e848a851f89569c35a3e3afdb53e4bc65736e",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리 ASP와 이익률 개선 가능성"
        },
        {
          "eventId": "6be1d306a2cdacb31d22",
          "headline": "투자자들이 AI 거래에 다시 뛰어들면서 인텔은 칩 주식을 더 높게 이끌었습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792418246,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2820dde5cd99817f9b1e95d390cdea94731c177e10050c3fee1068a3326c294a",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "1817cd8db144ee3beec9",
          "headline": "Microsoft 대 Amazon: AMZN의 AI 성장이 투자자들에 의해 과소평가되고 있습니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792416968,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=af9f985fb0e6b4ac71d751ad4591e5b84d88a58eb40a40daed7c5a3b949f62e7",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "09536402e980d56bba28",
          "headline": "메타 대 알파벳: GOOGL의 AI 성장이 투자자들에 의해 간과되고 있습니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792416869,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3f12a28744673abb85037bf7645caa0344d4eac93ceda73428ccf7f4aecd5044",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "707c8bab2c00f2e08d0f",
          "headline": "예측: 이는 2027년 말까지 Micron의 주가가 될 것입니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792416000,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d124bbb9d657fee68a655ab9e06d3e56c0a10f09ae689dbf42adc40bf1e556b3",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "31f05914e82367045315",
          "headline": "글로벌 핀 전계 효과 트랜지스터(FinFET) 3D 트랜지스터 시장 보고서 2026 | TSMC, Samsung, Intel 및 ASML이 규모를 가속화함에 따라 AI, 5G 및 Sub-7nm 수요를 활용하세요",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792407480,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=df35a9ae1b17f04bfa5908618864e03c3b43334eec574202914e5b874bf96d82",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 33,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "SNDK": {
      "ticker": "SNDK",
      "updatedAt": 1792523609.9919446,
      "dataAsOf": 1792503044,
      "signal": "중립·확인 대기",
      "netScore": 1.06,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.05,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 1.23,
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
          "eventId": "c9421d067cb5124143a9",
          "headline": "SK하이닉스, 서울 매각으로 AI 지출 공포 다시 살아나면서 4% 하락 SanDisk 하락 3%, Micron 완화",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792503044,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8726e579aa0e69836d74ddb9c4077f531ab99020418ea320d926351a7c2ec603",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "8fa934894781397cc443",
          "headline": "Cramer의 거래 중지: Sandisk Corporation 및 Western Digital",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792404157,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6b1093b8d2a46861fea61e66693b0263ddc1c1f1246cf1f97cd9ed2cd19d2803",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "c658873cbe8588aa4a01",
          "headline": "Sandisk는 2026년 S&P 500을 지배하고 있습니다. 2027년에도 반복될 수 있을까요?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1792302600,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=417b4fb879081d5ade679677727209b51e3c42110dee2814fafd701b1119a294",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "135243c7203fdc2e4d9d",
          "headline": "독점: 중국은 잊어라 — 샌디스크 투자자들은 삼성이 마이크론에게 더 큰 위협이라고 Nicholas Mugalli가 말했습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1792227560,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=82a78df11504709a7ad04e56b53a8ec41a21d590c9631d01de3027813678a0de",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "1dc45819c5660476e12a",
          "headline": "Micron과 Sandisk는 순환성의 역사를 가지고 있습니다. 이번에는 다른가?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1792189500,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=24f91e14ff99b2eb07c3bb3df1e60d89fce058de923e0f5a2ebc476f217542c7",
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
      "updatedAt": 1792523609.9919446,
      "dataAsOf": 1792495521,
      "signal": "주의 강화",
      "netScore": -6.92,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": -1.92,
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
          "eventId": "4de3c4f0b24b3415c4ce",
          "headline": "Cramer는 데이터 센터 용량이 줄어들면 SanDisk와 Western Digital이 최악의 주식이라고 경고합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792495521,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=02effdae69d202ca0ef91538f492a96670a5bc3261c42e6c6ffaf666292f3f54",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "c11ece71bb149befb39a",
          "headline": "Apple, 10월 28일 'Pro And Tell' 이벤트 확인 — 최초의 터치스크린 MacBook Pro 예상",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792431800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=522773942a919b923a94eb66756e848a851f89569c35a3e3afdb53e4bc65736e",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리·스토리지 가격 강세 수혜 가능성"
        },
        {
          "eventId": "8fa934894781397cc443",
          "headline": "Cramer의 거래 중지: Sandisk Corporation 및 Western Digital",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792404157,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6b1093b8d2a46861fea61e66693b0263ddc1c1f1246cf1f97cd9ed2cd19d2803",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "10d809cbadada9b447f5",
          "headline": "iPhone Duo는 사전 예약 판매 급증으로 이미 2027년까지 예약 주문됨",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792179277,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=16603b60e699bd57c649c912acc2158f422bfb4534474401ad98179157cdc37b",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리·스토리지 가격 강세 수혜 가능성"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 4,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ANET": {
      "ticker": "ANET",
      "updatedAt": 1792523609.9919446,
      "dataAsOf": 1792491028,
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
          "eventId": "94b03da05eb19df6787c",
          "headline": "Open AI 랙 출시로 인해 Arista Networks 주식에 대한 투자 사례가 바뀌고 있습니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792491028,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=53f10a68349424911c2300add3376aaf26c6051ffa92e23dd799235512907a5e",
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
    "COHR": {
      "ticker": "COHR",
      "updatedAt": 1792523609.9919446,
      "dataAsOf": 1792407060,
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
          "eventId": "2b9b822ef8952ef5a21e",
          "headline": "글로벌 광집적 회로 시장 보고서 2026 | STMicroelectronics, GlobalFoundries, Coherent 및 Ayar Labs의 AI 데이터 센터 가속화에 따라 2030년까지 CAGR 19.3% 활용",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792407060,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=db7c636962c841d2b328221d0c5a16d3013cdd731483b25e687241acb5b5f842",
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
    "LITE": {
      "ticker": "LITE",
      "updatedAt": 1792523609.9919446,
      "dataAsOf": 1792429510,
      "signal": "중립·확인 대기",
      "netScore": -1.61,
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
          "eventId": "687c52f525b4fd117b69",
          "headline": "실적에 앞서 광학 주식 랠리: Applied Optoelectronics 5% 점프, Lumentum 4% 추가, Coherent 2% 상승",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1792429510,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=104718aad5d3ecaa1f389ff4a5613d807e44aea3df722e3ca62d7aeec8bb83e7",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ecf353f7baa6b682f353",
          "headline": "Arm 대 Lumentum: 2026년에는 어느 기술주를 매수하는 것이 더 나은가요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792416001,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e8fba0afae2cc32e26228e8ed25398450b4517b77a764900429b4d72eac6409b",
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
    "GEV": {
      "ticker": "GEV",
      "updatedAt": 1792523609.9919446,
      "dataAsOf": 1792467183,
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
          "eventId": "47999d60e8e78b41fe67",
          "headline": "GE Vernova, 2029년 가동 예정인 코트디부아르의 372MW 송곤 발전소에 9E 가스 터빈 공급 주문 확보",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792467183,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d1921842c6cc0a893491608a8f01386edc57e0dab4c875ce81b198c4871ff108",
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
    "CEG": {
      "ticker": "CEG",
      "updatedAt": 1792523609.9919446,
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
      "updatedAt": 1792523609.9919446,
      "dataAsOf": 1792297105,
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
          "eventId": "cb6b222ff1e8ea827ae4",
          "headline": "Vistra(VST)는 10억 달러 우선주 상환을 통해 무엇을 얻나요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792297105,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=60227f9160a405233d9f96e87da2692865140e976641f566e48de67a68b08de1",
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
    "ETN": {
      "ticker": "ETN",
      "updatedAt": 1792523609.9919446,
      "dataAsOf": 1792267839,
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
          "eventId": "e12cfbc6db4318ef48f0",
          "headline": "Eaton(ETN) 금융 개편, 공정 가치에 초점을 맞춰 AI 파워 내러티브를 만나다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792267839,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b84b71fc60c3b31227906513100c14d48239dad7a7f0c9509be7d4395c04b4b9",
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
    "PWR": {
      "ticker": "PWR",
      "updatedAt": 1792523609.9919446,
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
      "updatedAt": 1792523609.9919446,
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
      "updatedAt": 1792523609.9919446,
      "dataAsOf": 1792430100,
      "signal": "중립·확인 대기",
      "netScore": 0.83,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
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
          "eventId": "0e3ae56299bc90968508",
          "headline": "Vertiv 주식은 1년 후 어디에 있을까요?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792430100,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=98b26193ea3693ccac8d7387ce196d9b2b973cc9712f3c2ac7e8f2c8b5ae6a25",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "15f29a94c70e212a02fc",
          "headline": "3년 후 Vertiv 주식의 가치는 얼마나 될까요?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792429007,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a64c0bf5ec311d652a647e458573f59f437856c2193b36b2cbd16e095f4a7706",
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
    "MOD": {
      "ticker": "MOD",
      "updatedAt": 1792523609.9919446,
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
      "updatedAt": 1792523609.9919446,
      "dataAsOf": 1792501993,
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
          "eventId": "ca7d9db8b15b79ee638a",
          "headline": "Morgan Stanley, Western Digital 목표 축소, HDD 매각 속에 Seagate 인상",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792501993,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=63925b9f98713884274bf59082b3e8777cfea4de703cd5b3685ad3240b801d2e",
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
    "EME": {
      "ticker": "EME",
      "updatedAt": 1792523609.9919446,
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
      "updatedAt": 1792523609.9919446,
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
      "updatedAt": 1792523609.9919446,
      "dataAsOf": 1792375678,
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
          "eventId": "3b6d0603aafcf68bba1f",
          "headline": "연료전지 거래는 AEP(American Electric Power Company)의 게임 체인저가 될 수 있습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792375678,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c5647d89df41724e7fdb44d0e98dda508a25a5a1ac089641ce84a4f8b1bc489a",
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
