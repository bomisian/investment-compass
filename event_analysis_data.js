// 자동 생성 파일 - 중요 뉴스의 기업분석 반영
const EVENT_ANALYSIS_DATA = {
  "schemaVersion": 1,
  "generatedAt": 1792360805.0120127,
  "records": {
    "MSFT": {
      "ticker": "MSFT",
      "updatedAt": 1792360805.0120127,
      "dataAsOf": 1792317173,
      "signal": "중립·확인 대기",
      "netScore": 0.48,
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
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "0c037c6d55616c0640ac",
          "headline": "NiSource, Microsoft와 장기 계약을 체결하여 고객 저축을 늘리고 인디애나의 경제 성장을 지원할 것으로 예상",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1792149300,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3f3df1ada20529070a880201afe44837fb7b9a24096341e19f31506e6fe85905",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "471f4afd52b02787629c",
          "headline": "증가된 영국 규제 검사를 받기 위해 제안된 Microsoft의 비즈니스 소프트웨어",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792145511,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fe93b67afb889000a6f8650c7d962049c1ae2f63742459b4f22d8afb3ae8834a",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "2a32384d075b71d7f096",
          "headline": "메타는 한 달 만에 12% 상승했습니다. 이익을 얻을 것인가, 아니면 계속해서 나아갈 것인가?",
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 6,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "GOOGL": {
      "ticker": "GOOGL",
      "updatedAt": 1792360805.0120127,
      "dataAsOf": 1792289780,
      "signal": "주의 강화",
      "netScore": -2.24,
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
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
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
        },
        {
          "eventId": "9d7e9f2bd85252026061",
          "headline": "AMD가 아닙니다. 브로드컴이 아닙니다. Nvidia 투자자가 주목해야 할 칩 디자이너는 다음과 같습니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1792141440,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=304ad190cf154f14cff266532ba49d7342f717d1218e00844959485aa2406399",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "2a32384d075b71d7f096",
          "headline": "메타는 한 달 만에 12% 상승했습니다. 이익을 얻을 것인가, 아니면 계속해서 나아갈 것인가?",
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
          "headline": "검색 파괴부터 효율성까지, 나는 Alphabet의 능력을 믿습니다",
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
          "headline": "Alphabet은 Waymo를 사용하여 Tesla의 First Mover \"Robotaxi Monopoly\" 프리미엄을 파괴할 수 있습니다.",
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 7,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMZN": {
      "ticker": "AMZN",
      "updatedAt": 1792360805.0120127,
      "dataAsOf": 1792187050,
      "signal": "중립·확인 대기",
      "netScore": 0.14,
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
        },
        {
          "eventId": "3c2a725c814a55716ce0",
          "headline": "Elon Musk는 Grok 봇 사용자가 회사에서 주문을 차단했다고 말한 후 Amazon 경쟁자를 시작하려고 합니다.",
          "eventLabel": "경쟁사 기술·시장 진입",
          "publishedAt": 1792101600,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a243bcfadf83fa682fc09384959797d0e3979141872efd754d61c39e5d420741",
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
    "META": {
      "ticker": "META",
      "updatedAt": 1792360805.0120127,
      "dataAsOf": 1792337700,
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
      "unverifiedEvidenceCount": 2,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AAPL": {
      "ticker": "AAPL",
      "updatedAt": 1792360805.0120127,
      "dataAsOf": 1792330080,
      "signal": "주의 강화",
      "netScore": -6.3,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.05,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": -0.87,
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
          "score": -5,
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
        },
        {
          "eventId": "406e1cb3f117312d4af0",
          "headline": "Apple의 1,999달러 폴더블 제품이 2027년으로 이월 주문되었습니다. 그것이 의미하는 것과 의미하지 않는 것은 다음과 같습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792161236,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3f7007c67c01e73b4079850c2441e3d87779c5be06e5f29d7be5599cbd898b80",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "가격 전가 시 마진 방어, 판매량·교체주기 둔화 위험"
        },
        {
          "eventId": "f136446be5877b38cd3e",
          "headline": "칩 라우팅 중에 MU, INTC, AMD 슬라이드 프리마켓으로 NVDA 벅 매도",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792141409,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=85dcc4a699c9c7fb15a18938090c05f00eec0deba13a2b3b4ce83f5b0684a6d3",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "32a7dc88f0b64252ed86",
          "headline": "Meta, Apple의 예상치 못한 지원으로 Muse Spark Open 출시: 이를 포기할 수 있는 이유",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792136830,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=be910910a177b99e6d81858eb871e43d9a8fb7e9fe56e0f454aed63b472af4e9",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "a5cd7980f83eb023a835",
          "headline": "Apple(AAPL), 영업 비밀 싸움에서 AI 고용 기록에 대한 법원 명령 획득",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792131401,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=28e6cc6c4018455069155b5116db20a993fbe8aa1c641b101959aa4496fd0141",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "4f5e56b69a9c80a5755e",
          "headline": "Taiwan Semiconductor, NVIDIA, Apple 및 AMD가 제한된 AI 칩 용량을 놓고 경쟁하면서 카드 보유",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792128915,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=159a7a3f28742526243f576da475d8bb2e471f146975f56460dc76f83cc0dd7b",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "가격 전가 시 마진 방어, 판매량·교체주기 둔화 위험"
        },
        {
          "eventId": "70c9f5f249d0c81c08f5",
          "headline": "짐 크레이머(Jim Cramer)는 스타벅스가 스스로 성장할 수 있고, 애플의 청중은 그만한 대가를 지불할 가치가 있으며, 인텔 투자자들에게는 인내심이 필요하다고 말합니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1792108905,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=dbf0730b0cccd12c0dce89b47e6b4178533487134de432083d760f2a6b127e89",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 15,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "TSLA": {
      "ticker": "TSLA",
      "updatedAt": 1792360805.0120127,
      "dataAsOf": 1792337700,
      "signal": "주의 강화",
      "netScore": -10,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.75,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": -2.97,
          "level": "주의"
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
        },
        {
          "eventId": "e26d54c8c2a99db62c3e",
          "headline": "Tesla의 비행 로드스터는 실제 자동차보다 SpaceX 합병 소문에 더 많은 연료를 공급합니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792165808,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=891ef5bd5f53c335b918ee5b4f16171632f81880ae55ac4b224268026b17bbb3",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "e080ba2ab164760b13b3",
          "headline": "Tesla, 자율주행차 부문에서 Nvidia와 경쟁",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792163976,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3fe3fa0ff7478756f442147c3c87a14116f33db1eaae3dea19a96fca55c333e8",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "198a71827a9212a9842f",
          "headline": "월스트리트는 Amazon에 동의하고 Tesla에는 동의할 수 없습니다. 목표는 이유를 보여줍니다",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1792154736,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=eb960e8c6c8b91492bb10227fe4b1968c39fa9b979da23fc86c5705d9721b807",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "3a394e03b881058e65cc",
          "headline": "WDC, STX 주식이 3주 연속 손실을 기록했습니다 — Wells Fargo, 목표를 대폭 줄였지만 기회를 봅니다",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1792149680,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c48cde3fcb6ad05ab66d8dcbb8fc3d96b1ee698f9380d700f2e39c9079b687f5",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "f136446be5877b38cd3e",
          "headline": "칩 라우팅 중에 MU, INTC, AMD 슬라이드 프리마켓으로 NVDA 벅 매도",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792141409,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=85dcc4a699c9c7fb15a18938090c05f00eec0deba13a2b3b4ce83f5b0684a6d3",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 20,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ORCL": {
      "ticker": "ORCL",
      "updatedAt": 1792360805.0120127,
      "dataAsOf": 1792281962,
      "signal": "중립·확인 대기",
      "netScore": -1.26,
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
        },
        {
          "eventId": "93a5831e78b276ceaf83",
          "headline": "Oracle의 클라우드 백로그가 6,640억 달러를 기록했습니다. 일정에 따라 수익으로 전환될 경우 1,000달러 투자의 가치는 다음과 같습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1792150500,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b53aafbc8eac5514b5937c825f7bab75e9609e8f1db92827cdf33b8f33730070",
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
    "CRM": {
      "ticker": "CRM",
      "updatedAt": 1792360805.0120127,
      "dataAsOf": 1792178088,
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
          "eventId": "69907a5ca0a6de580006",
          "headline": "Salesforce(CRM), AI 통합 거래 후 새로운 평가 테스트에 직면",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792178088,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1d86067bc76712814afae725d1701573bc2b320a9632765ec27e9e1ea958fe62",
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
      "updatedAt": 1792360805.0120127,
      "dataAsOf": 1792312020,
      "signal": "주의 강화",
      "netScore": -2.66,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.7,
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
          "score": -2.27,
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
        },
        {
          "eventId": "a3c81a57ad367cea0533",
          "headline": "Palantir 주식이 인내심 있는 투자자들의 삶을 변화시키는 부를 창출할 수 있을까요?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1792159202,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6e825503a088e048cca64f9a6065d98c99f2341a34bf7887f588459ecb6ddb37",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "f136446be5877b38cd3e",
          "headline": "칩 라우팅 중에 MU, INTC, AMD 슬라이드 프리마켓으로 NVDA 벅 매도",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792141409,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=85dcc4a699c9c7fb15a18938090c05f00eec0deba13a2b3b4ce83f5b0684a6d3",
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
    "NVDA": {
      "ticker": "NVDA",
      "updatedAt": 1792360805.0120127,
      "dataAsOf": 1792339440,
      "signal": "우호적 변화",
      "netScore": 3.8,
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
          "score": 3.5,
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
          "eventId": "76e6fff3c2bb3a16cd91",
          "headline": "더 나은 AI 칩 재고: 대만 반도체 vs. 마이크론",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792339440,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c50b526733f247c51b3031e8462745d3a9eb45b1eb0ef720b2b660772353952e",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "c55205eeff05cb84ff88",
          "headline": "NVIDIA(NVDA)가 19%만 상승한 반면 공급업체는 훨씬 더 나은 상승세를 보인 이유는 무엇입니까?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792334040,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8fceddf7e2520bda5a211bc2dd69e28da0298261de986f6370a0e444ece7e5a7",
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
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "d4506840446e71bbd514",
          "headline": "마이크론 테크놀로지 vs. 샌디스크: 어느 AI 메모리 주식이 더 나은 투자인가?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792293001,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=309bcc166c8163e50d52451d0535d90e773c546669687709a1c6091bd979ca19",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "50b8d5c85c7afc2a348b",
          "headline": "엔비디아가 $ 1,500억을 작아 보이게 하는 방법",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792282861,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6d7070d4d1c8c5e84c905facedfc79308aeb0e0dd21365e1096510135cd4dc54",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "e38de5e08a40ca8b3c9e",
          "headline": "Broadcom의 290억 달러 규모 AI 백스톱: 현금 흐름이 어느 정도의 위험을 감당합니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792275080,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8c65da6be8fb66f8cf600d35fd44cdadba29a61d8ed6271236ef9db1ff55766f",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
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
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "1aa17ee27e58d37f39e1",
          "headline": "Martin Shkreli는 새로운 광자 칩이 Nvidia 주변을 돌 수 있다고 말했습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1792249233,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a55799b189b2362335d693078d3d43619116969e9f33037b07b968c3592f7c9e",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
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
          "reason": "회사 실적과의 연결고리 확인"
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
          "reason": "AI 컴퓨팅 수요 확대 가능성"
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
      "unverifiedEvidenceCount": 36,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMD": {
      "ticker": "AMD",
      "updatedAt": 1792360805.0120127,
      "dataAsOf": 1792339440,
      "signal": "우호적 변화",
      "netScore": 5.49,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
          "level": "중립"
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
          "score": -4.03,
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
          "eventId": "76e6fff3c2bb3a16cd91",
          "headline": "더 나은 AI 칩 재고: 대만 반도체 vs. 마이크론",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792339440,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c50b526733f247c51b3031e8462745d3a9eb45b1eb0ef720b2b660772353952e",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
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
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "d4506840446e71bbd514",
          "headline": "마이크론 테크놀로지 vs. 샌디스크: 어느 AI 메모리 주식이 더 나은 투자인가?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792293001,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=309bcc166c8163e50d52451d0535d90e773c546669687709a1c6091bd979ca19",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "e38de5e08a40ca8b3c9e",
          "headline": "Broadcom의 290억 달러 규모 AI 백스톱: 현금 흐름이 어느 정도의 위험을 감당합니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792275080,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8c65da6be8fb66f8cf600d35fd44cdadba29a61d8ed6271236ef9db1ff55766f",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
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
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
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
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "1f794705fa34665f6669",
          "headline": "독일, Nvidia AI 거래 확인: Huang의 20억 달러 규모의 유럽 서약 중 베를린에 착륙할 사람이 있을까요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792177431,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2abcdd96d7c24d3c4086c23e65d41c85d613d70bec5dda0f0913d86dfd46119c",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "79c74beed5a954229f81",
          "headline": "Broadcom은 CEO Hock Tan의 AI 칩에 대한 자본 경고로 인해 4% 하락했습니다. 마벨 4% 하락",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792173728,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f226da1fb9242f2f25b332efff142284396aa7b074fb80a3a4ef5c0f932de0c8",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "4dca16ad24066fcda109",
          "headline": "Sandisk가 1400달러 아래로 떨어졌는데 이는 특정 투자자들에게 큰 의미가 있습니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792169133,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9ff5a815c78b2af458f0c407ccaad22a32c1e3c3165b67d7de83a63e19e08029",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "e6bde742253c6ff26b9b",
          "headline": "칩보다 자본: Broadcom CEO, 금융 비용으로 인해 AI 확장이 느려질 수 있다고 경고",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792147509,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=864738688ea3b31edc5f173f1d3714403ce755a2b66c49ad7d601fc788da27b8",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "849fdcb5f13bff068594",
          "headline": "Oracle Data Center 에너지 프로필 - 2026년 지속 가능성 및 배출 분석 | 24% 에너지 CAGR 및 Stargate 확장으로 재생 가능 투자 및 탄소 위험 촉진",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792144020,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=058fcf9a2aabfddaa1f9140390b8f1d234afd0c4aeeb299feb8a08b1e2c92634",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "f1ce06c35de7c54818cf",
          "headline": "예측: 이 인공 지능(AI) 하드웨어 주식에 대한 10,000달러 투자는 2030년까지 최소 두 배로 늘어날 것입니다(힌트: Nvidia나 Micron이 아닙니다).",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792143361,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8554de61a24f426580edd57e05b29e2dba9e44966b5c51bdb4804739efcbce07",
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
      "updatedAt": 1792360805.0120127,
      "dataAsOf": 1792339773,
      "signal": "중립·확인 대기",
      "netScore": 0.08,
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
        },
        {
          "eventId": "e6bde742253c6ff26b9b",
          "headline": "칩보다 자본: Broadcom CEO, 금융 비용으로 인해 AI 확장이 느려질 수 있다고 경고",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792147509,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=864738688ea3b31edc5f173f1d3714403ce755a2b66c49ad7d601fc788da27b8",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "9d7e9f2bd85252026061",
          "headline": "AMD가 아닙니다. 브로드컴이 아닙니다. Nvidia 투자자가 주목해야 할 칩 디자이너는 다음과 같습니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1792141440,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=304ad190cf154f14cff266532ba49d7342f717d1218e00844959485aa2406399",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "04f43c49fa7c9ba867f0",
          "headline": "Nvidia와 Broadcom의 내러티브로 AI 칩 환경 정의",
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 7,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "QCOM": {
      "ticker": "QCOM",
      "updatedAt": 1792360805.0120127,
      "dataAsOf": 1792179277,
      "signal": "주의 강화",
      "netScore": -9.88,
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
          "score": -5,
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
        },
        {
          "eventId": "60884df53174111b6216",
          "headline": "Qualcomm 평결로 인해 칩 매도세가 증가함에 따라 Arm과 AMD는 5% 하락합니다. 대만 반도체 전표",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792174237,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=042b71cb1b9afd96d54ae9e11c90b62b50d4d66c88dd0217f010354cdc7fafc1",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "406e1cb3f117312d4af0",
          "headline": "Apple의 1,999달러 폴더블 제품이 2027년으로 이월 주문되었습니다. 그것이 의미하는 것과 의미하지 않는 것은 다음과 같습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792161236,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3f7007c67c01e73b4079850c2441e3d87779c5be06e5f29d7be5599cbd898b80",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "스마트폰 수요가 줄면 고객 칩 수요에 부담"
        },
        {
          "eventId": "4f5e56b69a9c80a5755e",
          "headline": "Taiwan Semiconductor, NVIDIA, Apple 및 AMD가 제한된 AI 칩 용량을 놓고 경쟁하면서 카드 보유",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792128915,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=159a7a3f28742526243f576da475d8bb2e471f146975f56460dc76f83cc0dd7b",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "스마트폰 수요가 줄면 고객 칩 수요에 부담"
        },
        {
          "eventId": "e129d79a1aad39f248d2",
          "headline": "iPhone Duo 사전 주문이 금요일부터 시작됩니다. 애플의 첫 폴더블폰이 주식을 사는 이유일까요?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792105021,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=757b7de173c450fe5b7f191f5c4708afa5356cc2036e1e75d1a65accb860328a",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "스마트폰 수요가 줄면 고객 칩 수요에 부담"
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
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 6,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ARM": {
      "ticker": "ARM",
      "updatedAt": 1792360805.0120127,
      "dataAsOf": 1792174237,
      "signal": "중립·확인 대기",
      "netScore": -1.12,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
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
          "eventId": "60884df53174111b6216",
          "headline": "Qualcomm 평결로 인해 칩 매도세가 증가함에 따라 Arm과 AMD는 5% 하락합니다. 대만 반도체 전표",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792174237,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=042b71cb1b9afd96d54ae9e11c90b62b50d4d66c88dd0217f010354cdc7fafc1",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "c5470fc86d931b2c18c3",
          "headline": "Arm 대 Credo Technology Group: 2026년에는 어느 반도체 주식을 매수하는 것이 더 나은가요?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792099819,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f6870a316e7d10d7614a87e97f0816c98d068822d6b3064f3dfc7958fd41e529",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "cbd6d2c762095d98d96e",
          "headline": "ARM의 13% 계약 가치 성장이 2분기에 모멘텀을 유지할 수 있습니까?",
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 3,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "MRVL": {
      "ticker": "MRVL",
      "updatedAt": 1792360805.0120127,
      "dataAsOf": 1792079882,
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
          "eventId": "df8a5c35fa85050ea360",
          "headline": "Marvell 주식 투자자를 위한 환상적인 소식",
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
          "headline": "2026년 더 나은 인공지능 주식: Astera Labs vs. Marvell Technology",
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 2,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "INTC": {
      "ticker": "INTC",
      "updatedAt": 1792360805.0120127,
      "dataAsOf": 1792314481,
      "signal": "주의 강화",
      "netScore": -7.78,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.87,
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
          "score": -5,
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
        },
        {
          "eventId": "97d89001605045de37b8",
          "headline": "지난 90일 동안 인텔의 붕괴: 이 저명한 분석가는 인텔이 두 배로 늘어날 것이라고 말합니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1792154702,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=76c477547848ffa679d6696d5d6b2f4dc2ce29713a6d7b9b6b763264357ea9e3",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "f1ce06c35de7c54818cf",
          "headline": "예측: 이 인공 지능(AI) 하드웨어 주식에 대한 10,000달러 투자는 2030년까지 최소 두 배로 늘어날 것입니다(힌트: Nvidia나 Micron이 아닙니다).",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792143361,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8554de61a24f426580edd57e05b29e2dba9e44966b5c51bdb4804739efcbce07",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "f136446be5877b38cd3e",
          "headline": "칩 라우팅 중에 MU, INTC, AMD 슬라이드 프리마켓으로 NVDA 벅 매도",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792141409,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=85dcc4a699c9c7fb15a18938090c05f00eec0deba13a2b3b4ce83f5b0684a6d3",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "70c9f5f249d0c81c08f5",
          "headline": "짐 크레이머(Jim Cramer)는 스타벅스가 스스로 성장할 수 있고, 애플의 청중은 그만한 대가를 지불할 가치가 있으며, 인텔 투자자들에게는 인내심이 필요하다고 말합니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1792108905,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=dbf0730b0cccd12c0dce89b47e6b4178533487134de432083d760f2a6b127e89",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "40d2a7a85b45e895e2a9",
          "headline": "2026년 더 나은 인공지능 주식: Astera Labs vs. Marvell Technology",
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
          "headline": "TSMC CEO, 인텔의 고급 패키징 램프업이 부족할 경우 회사가 고객을 지원할 수 있다고 힌트",
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 10,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "TSM": {
      "ticker": "TSM",
      "updatedAt": 1792360805.0120127,
      "dataAsOf": 1792339440,
      "signal": "주의 강화",
      "netScore": -6.02,
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
          "score": -3.85,
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
          "eventId": "76e6fff3c2bb3a16cd91",
          "headline": "더 나은 AI 칩 재고: 대만 반도체 vs. 마이크론",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792339440,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c50b526733f247c51b3031e8462745d3a9eb45b1eb0ef720b2b660772353952e",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
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
        },
        {
          "eventId": "60884df53174111b6216",
          "headline": "Qualcomm 평결로 인해 칩 매도세가 증가함에 따라 Arm과 AMD는 5% 하락합니다. 대만 반도체 전표",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792174237,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=042b71cb1b9afd96d54ae9e11c90b62b50d4d66c88dd0217f010354cdc7fafc1",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "354a0cae013c6792cbf6",
          "headline": "나스닥 선물이 시판 전 가격보다 높은 이유는 무엇입니까? TSLA, CRWV, TSM, NVDA, RKLB, ASST, PEP 주식에 집중",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1792140173,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6c83f09e227a013c8ccaeef4ba7ab8c62139f4f135aa9b75b622254ed16ff28f",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "4f5e56b69a9c80a5755e",
          "headline": "Taiwan Semiconductor, NVIDIA, Apple 및 AMD가 제한된 AI 칩 용량을 놓고 경쟁하면서 카드 보유",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792128915,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=159a7a3f28742526243f576da475d8bb2e471f146975f56460dc76f83cc0dd7b",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "066368771fa35f9c30d4",
          "headline": "TSMC는 6분기 연속 기록적인 이익을 기록했습니다. 주가가 하락한 이유는 무엇입니까?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1792119002,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0a03ef712913f3aa82b778fdaad22de66f92dc3c2db8ee39f4041e785db6bf65",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "79304427d2f11eb3a775",
          "headline": "TSMC CEO, 인텔의 고급 패키징 램프업이 부족할 경우 회사가 고객을 지원할 수 있다고 힌트",
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 11,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ASML": {
      "ticker": "ASML",
      "updatedAt": 1792360805.0120127,
      "dataAsOf": 1792164180,
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
          "eventId": "d938adcfa96ffc48bab2",
          "headline": "적어도 2028년까지 수요가 공급을 초과할 것으로 예상되는 ASML 주식은 매수입니다",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792164180,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=85dd64b83d7537a9f46cee0ebd4a47975877d0bd11d24cbad890023a4a326210",
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
    "AMAT": {
      "ticker": "AMAT",
      "updatedAt": 1792360805.0120127,
      "dataAsOf": 1792070701,
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "LRCX": {
      "ticker": "LRCX",
      "updatedAt": 1792360805.0120127,
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
      "updatedAt": 1792360805.0120127,
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
      "updatedAt": 1792360805.0120127,
      "dataAsOf": 1792339440,
      "signal": "우호적 변화",
      "netScore": 7.37,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 2.45,
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
          "score": -5,
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
          "eventId": "76e6fff3c2bb3a16cd91",
          "headline": "더 나은 AI 칩 재고: 대만 반도체 vs. 마이크론",
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
          "reason": "회사 실적과의 연결고리 확인"
        },
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
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "d4506840446e71bbd514",
          "headline": "마이크론 테크놀로지 vs. 샌디스크: 어느 AI 메모리 주식이 더 나은 투자인가?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792293001,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=309bcc166c8163e50d52451d0535d90e773c546669687709a1c6091bd979ca19",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "e38de5e08a40ca8b3c9e",
          "headline": "Broadcom의 290억 달러 규모 AI 백스톱: 현금 흐름이 어느 정도의 위험을 감당합니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792275080,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8c65da6be8fb66f8cf600d35fd44cdadba29a61d8ed6271236ef9db1ff55766f",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
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
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "6cc2b54bb681d0928e7f",
          "headline": "마이크론의 인크레더블 런이 곧 끝날 것인가?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1792265220,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3dc01020fc481fb70d96de3e8a1a115bf506442a29c3b53ffb679a11451eb418",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "4a824cf56d68c1faf154",
          "headline": "마이크론에 대한 중국의 대응으로 거의 200억 달러를 벌었습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792259306,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0e8060b444e92d7c917a02dbb1c1228eb94c04a890e24b2c1208c09325091332",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "49066cac6b39f57325f0",
          "headline": "마이크론을 구매하기에는 너무 늦었다고 생각하시나요? 아직 시간이 있는 이유 1가지를 소개합니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1792236900,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c77059a62107009c030b8fd9350df753ef81f84132c03ae9a3a05d59fc980e61",
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
          "reason": "사업·실적 연결 경로 확인 필요"
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
          "reason": "회사 실적과의 연결고리 확인"
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
          "reason": "AI 서버 메모리 수요와 가격 강세"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 37,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "SNDK": {
      "ticker": "SNDK",
      "updatedAt": 1792360805.0120127,
      "dataAsOf": 1792302600,
      "signal": "우호적 변화",
      "netScore": 3.77,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.57,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 2.45,
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
        },
        {
          "eventId": "de59f5154682dc70172b",
          "headline": "SK 하이닉스, 샌디스크, 마이크론은 골드만삭스가 중국 칩에 대한 우려가 지나쳤다고 주장했음에도 불구하고 3% 하락",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792157452,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ee6f4ba6d7486ac9ff34c16b958ccbdaafce5bdf6b24da0749e28e39ecb216ca",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "839ff8c76e8e6a07b18d",
          "headline": "Nasdaq 100 슬라이드, Micron, SanDisk, CoreWeave 싱크: 오늘 주식 시장",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792153986,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c5926a8a854f428679082b9816725c53cdafe5c734def83695422491bdeefea2",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "108d47bece4a6b3f9824",
          "headline": "Sandisk 주식은 내년에 4,128달러의 가치가 있을 수 있습니다",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792138500,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=095ec32bf17160821b46b1abf016026fce3cc6020f01256b1f4a4b3e92113a46",
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
    "WDC": {
      "ticker": "WDC",
      "updatedAt": 1792360805.0120127,
      "dataAsOf": 1792179277,
      "signal": "주의 강화",
      "netScore": -7.56,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
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
          "score": -4.2,
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
        },
        {
          "eventId": "406e1cb3f117312d4af0",
          "headline": "Apple의 1,999달러 폴더블 제품이 2027년으로 이월 주문되었습니다. 그것이 의미하는 것과 의미하지 않는 것은 다음과 같습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792161236,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3f7007c67c01e73b4079850c2441e3d87779c5be06e5f29d7be5599cbd898b80",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리·스토리지 가격 강세 수혜 가능성"
        },
        {
          "eventId": "4f5e56b69a9c80a5755e",
          "headline": "Taiwan Semiconductor, NVIDIA, Apple 및 AMD가 제한된 AI 칩 용량을 놓고 경쟁하면서 카드 보유",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792128915,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=159a7a3f28742526243f576da475d8bb2e471f146975f56460dc76f83cc0dd7b",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리·스토리지 가격 강세 수혜 가능성"
        },
        {
          "eventId": "e129d79a1aad39f248d2",
          "headline": "iPhone Duo 사전 주문이 금요일부터 시작됩니다. 애플의 첫 폴더블폰이 주식을 사는 이유일까요?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792105021,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=757b7de173c450fe5b7f191f5c4708afa5356cc2036e1e75d1a65accb860328a",
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
      "updatedAt": 1792360805.0120127,
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
      "updatedAt": 1792360805.0120127,
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
      "updatedAt": 1792360805.0120127,
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
    "GEV": {
      "ticker": "GEV",
      "updatedAt": 1792360805.0120127,
      "dataAsOf": 1792079785,
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
          "eventId": "c98a6a47b7a03b4d941a",
          "headline": "GE Vernova와 Venture Global은 최대 172억 달러 규모의 전력 거래를 체결했습니다. 여기에 확고한 것이 있습니다",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792079785,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ae0c76c5a14e658018d128b506eff741a9b2b680b138167dd813fc50aa823af3",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "4aa8490b80513584cb30",
          "headline": "GE Vernova와 Venture Global은 최대 172억 달러 규모의 전력 거래를 체결했습니다. 여기에 확고한 것이 있습니다",
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
          "eventId": "d6a76b6d3d4b6dd3ac58",
          "headline": "Venture Global, GE Vernova와 Baker Hughes를 활용하여 AI 인프라 야망 강화",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792069362,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=dd5027baca21117f295b32d711f79897f12a302cd791741b20a14cc310467b79",
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
    "CEG": {
      "ticker": "CEG",
      "updatedAt": 1792360805.0120127,
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
      "updatedAt": 1792360805.0120127,
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
      "updatedAt": 1792360805.0120127,
      "dataAsOf": 1792267839,
      "signal": "중립·확인 대기",
      "netScore": 1.4,
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
        },
        {
          "eventId": "ab32a3e4d162af7b5cbf",
          "headline": "기네스 지속 가능 에너지 기금, 전력망 현대화 속에서 Eaton Corporation plc(ETN) 강조",
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
          "eventId": "096346d134774b5cd51d",
          "headline": "ETN SEC Form 8-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1792076400.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1551182/000155118226000034/etn-20261016.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 2,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "PWR": {
      "ticker": "PWR",
      "updatedAt": 1792360805.0120127,
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
      "updatedAt": 1792360805.0120127,
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
          "headline": "기네스 지속 가능 에너지 펀드, 유틸리티 성장 우려 속에서 Hubbell Incorporated(HUBB) 강조",
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
      "updatedAt": 1792360805.0120127,
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
      "updatedAt": 1792360805.0120127,
      "dataAsOf": 1792223785,
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
          "eventId": "f66f06a43a6d236f8a1d",
          "headline": "Modine Manufacturing: AI 인프라 붐의 숨겨진 승자",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792223785,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9745bec0d942d3e6ddbe1f2cb010d222cb7bd089c2a1a4d57eb4a367302be1e6",
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
    "STX": {
      "ticker": "STX",
      "updatedAt": 1792360805.0120127,
      "dataAsOf": 1792174359,
      "signal": "주의 강화",
      "netScore": -3.14,
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
          "score": -1.05,
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
          "eventId": "6647b3a8c6d51e592c50",
          "headline": "Seagate Technology Holdings(STX), AI 스토리지 수요 증가에 따라 TDK HDD 헤드 거래 주목",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792174359,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c130aaec47844670ea53514168c5879092389b5192598b77c5a8dfa0e51e2f33",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "3a394e03b881058e65cc",
          "headline": "WDC, STX 주식이 3주 연속 손실을 기록했습니다 — Wells Fargo, 목표를 대폭 줄였지만 기회를 봅니다",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1792149680,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c48cde3fcb6ad05ab66d8dcbb8fc3d96b1ee698f9380d700f2e39c9079b687f5",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "9d985c7df2875dee18d8",
          "headline": "Seagate와 Western Digital은 AI 수요로 인해 용량 확장이 진행됨에 따라 공급 위험에 직면",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792146648,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7989dc2fe0c2f83a045bee433858a57749a3bbc15c366851e53ee3ad1446fd19",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 4,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "EME": {
      "ticker": "EME",
      "updatedAt": 1792360805.0120127,
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
      "updatedAt": 1792360805.0120127,
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
      "updatedAt": 1792360805.0120127,
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
