// 자동 생성 파일 - 펀더멘털 인텔리전스 MVP
const FUNDAMENTAL_INTELLIGENCE_DATA = {
  "schemaVersion": 2,
  "modelVersion": "fundamental-v1.2",
  "generatedAt": 1787313613.7807624,
  "records": {
    "MSFT": {
      "ticker": "MSFT",
      "asOf": 1787313613.7807624,
      "modelVersion": "fundamental-v1.2",
      "fundamentalScore": 9.7,
      "confidence": 100,
      "fundamentalSigma": null,
      "fundamentalSigmaProgress": {
        "status": "collecting",
        "collected": 1,
        "required": 8,
        "remaining": 7,
        "expectedReadyDate": "2026-08-28",
        "notice": "같은 KST 날짜의 반복 실행은 한 건으로 교체하며, 임의 과거 점수를 만들어 채우지 않습니다."
      },
      "priceSigma": 0.33,
      "priceDamage": 11.0,
      "fundamentalDamage": 30.8,
      "thesisDamage": 70.0,
      "thesisStatus": "damaged",
      "damageRead": "펀더멘털 위험 신호가 가격에 충분히 반영되지 않았을 가능성이 있습니다.",
      "dimensions": {
        "growth": {
          "score": 14.513333666666666,
          "applicable": true
        },
        "earningsQuality": {
          "score": 26.262155420168426,
          "applicable": true
        },
        "cashFlow": {
          "score": 16.77144572761168,
          "applicable": true
        },
        "competitivePosition": {
          "score": -29.400000000000002,
          "applicable": true
        },
        "customerDemand": {
          "score": 0.0,
          "applicable": true
        },
        "balanceSheet": {
          "score": 17.8256,
          "applicable": true
        }
      },
      "officialEvidence": [
        {
          "id": "sec-annual",
          "kind": "confirmed_fact",
          "label": "연간 재무 수치",
          "source": "SEC Company Facts",
          "period": "2026",
          "detail": "매출·영업이익·순이익·현금흐름 핵심 항목을 SEC 원문 수치로 교차검증했습니다.",
          "url": "https://data.sec.gov/api/xbrl/companyfacts/"
        },
        {
          "id": "sec-quarterly",
          "kind": "confirmed_fact",
          "label": "분기 손익 수치",
          "source": "SEC Company Facts",
          "period": "Q2'26",
          "detail": "최근 분기 매출·영업이익·순이익을 SEC 3개월 보고값과 교차검증했습니다.",
          "url": "https://data.sec.gov/api/xbrl/companyfacts/"
        }
      ],
      "evidenceSummary": {
        "confirmedFacts": 2,
        "credibleReports": 0,
        "needsConfirmation": 4,
        "aiInferences": 4
      },
      "evidence": [
        {
          "headline": "비교 연구: 소프트웨어 산업의 Microsoft와 업계 경쟁업체",
          "eventLabel": "경쟁사 기술·시장 진입",
          "publishedAt": 1787119120,
          "sourceUrl": "https://finnhub.io/api/news?id=5472286926ad547dca238fda7db1a25ef36e61957bbc612fe5d811b128c36e6d",
          "verificationStatus": "needs_confirmation",
          "reason": "회사 실적과의 연결고리 확인",
          "direction": "negative",
          "impact": -4.0
        },
        {
          "headline": "심층 분석: Microsoft와 소프트웨어 산업의 경쟁업체",
          "eventLabel": "경쟁사 기술·시장 진입",
          "publishedAt": 1787032718,
          "sourceUrl": "https://finnhub.io/api/news?id=7a577a428369a4c9a6fd573f6048ec05ff2bf0b62117bcb82c8f43b9464702ab",
          "verificationStatus": "needs_confirmation",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "direction": "negative",
          "impact": -4.0
        },
        {
          "headline": "Microsoft를 소프트웨어 산업의 업계 경쟁사와 비교",
          "eventLabel": "경쟁사 기술·시장 진입",
          "publishedAt": 1786946311,
          "sourceUrl": "https://finnhub.io/api/news?id=5e94e8a13f2a2a6a5dbd759ae5020f8dea8ced052cef64843cf2ad251de51e6a",
          "verificationStatus": "needs_confirmation",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "direction": "negative",
          "impact": -4.0
        },
        {
          "headline": "Alphabet, Amazon, Meta Platform 및 Microsoft: 이러한 주식 중 하나는 향후 12개월 동안 상승 여력이 가장 적은 것처럼 보이지만 문제가 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1786563660,
          "sourceUrl": "https://finnhub.io/api/news?id=2743c4a0a093bef477eba4a0a9e9bc0ccb4677ce6623fa9695f0ae0caa6d1d6c",
          "verificationStatus": "needs_confirmation",
          "reason": "사업·실적 연결 경로 확인 필요",
          "direction": "positive",
          "impact": 2.0
        }
      ],
      "topPositive": [
        "사업·실적 연결 경로 확인 필요"
      ],
      "topNegative": [
        "회사 실적과의 연결고리 확인",
        "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
        "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
      ],
      "nextChecks": [
        "다음 실적의 매출·EPS·마진",
        "핵심 고객 수요·CAPEX",
        "FCF와 부채·CAPEX 변화"
      ],
      "theses": [
        {
          "id": "growth",
          "name": "성장 Thesis",
          "statement": "매출·EPS 성장 전망이 유지되고 본업 수익성이 함께 개선된다.",
          "status": "intact",
          "score": 14.5,
          "confidence": 100,
          "falsificationRules": [
            "내년 매출·EPS 추정치가 함께 하향",
            "매출 둔화와 마진 하락이 동시에 확인"
          ]
        },
        {
          "id": "cashFlow",
          "name": "현금창출 Thesis",
          "statement": "본업 성장이 영업현금과 잉여현금흐름으로 전환된다.",
          "status": "intact",
          "score": 16.8,
          "confidence": 100,
          "falsificationRules": [
            "FCF가 2개 연도 연속 감소",
            "OCF 감소와 CAPEX 부담 증가가 동시에 발생"
          ]
        },
        {
          "id": "resilience",
          "name": "경쟁·재무 Thesis",
          "statement": "경쟁·고객 집중·재무 부담이 장기 사업 경쟁력을 훼손하지 않는다.",
          "status": "intact",
          "score": -3.9,
          "confidence": 100,
          "falsificationRules": [
            "핵심 고객 이탈 또는 점유율 하락이 공식 수치로 확인",
            "부채 부담 상승과 사업 리스크 확대가 동시 발생"
          ]
        }
      ],
      "scenarios": {
        "bull": 25.4,
        "base": 37.3,
        "bear": 37.3
      },
      "alerts": [],
      "businessProfile": {
        "updatedAt": null,
        "customers": [],
        "strengths": [],
        "risks": [],
        "sources": [],
        "latestChanges": [
          {
            "headline": "비교 연구: 소프트웨어 산업의 Microsoft와 업계 경쟁업체",
            "eventLabel": "경쟁사 기술·시장 진입",
            "publishedAt": 1787119120,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=5472286926ad547dca238fda7db1a25ef36e61957bbc612fe5d811b128c36e6d",
            "reason": "회사 실적과의 연결고리 확인"
          },
          {
            "headline": "심층 분석: Microsoft와 소프트웨어 산업의 경쟁업체",
            "eventLabel": "경쟁사 기술·시장 진입",
            "publishedAt": 1787032718,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=7a577a428369a4c9a6fd573f6048ec05ff2bf0b62117bcb82c8f43b9464702ab",
            "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
          },
          {
            "headline": "Microsoft를 소프트웨어 산업의 업계 경쟁사와 비교",
            "eventLabel": "경쟁사 기술·시장 진입",
            "publishedAt": 1786946311,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=5e94e8a13f2a2a6a5dbd759ae5020f8dea8ced052cef64843cf2ad251de51e6a",
            "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
          },
          {
            "headline": "Alphabet, Amazon, Meta Platform 및 Microsoft: 이러한 주식 중 하나는 향후 12개월 동안 상승 여력이 가장 적은 것처럼 보이지만 문제가 있습니다.",
            "eventLabel": "AI·데이터센터 투자 변화",
            "publishedAt": 1786563660,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=2743c4a0a093bef477eba4a0a9e9bc0ccb4677ce6623fa9695f0ae0caa6d1d6c",
            "reason": "사업·실적 연결 경로 확인 필요"
          }
        ],
        "status": "available",
        "notice": "정성 사업정보는 마지막 확인일 이후의 구조화 중요 뉴스를 별도 변경 항목으로 덧붙입니다."
      },
      "earningsQualityReview": {
        "status": "reviewed",
        "period": "Q2'26",
        "reportedNetIncome": 35766000000.0,
        "normalizedIncome": 33384414920.425907,
        "normalizedGap": 0.0713,
        "findings": [],
        "coreRead": "현재 수집된 항목만 보면 최신 기간 순이익을 크게 왜곡하는 특이항목은 확인되지 않았습니다.",
        "manualContext": null
      },
      "valuationScenario": {
        "status": "available",
        "price": 481.78,
        "currentEps": 19.7106,
        "nextEps": 23.57328,
        "epsGrowth": 0.196,
        "marketPe": 24.44,
        "conservative": 368.76,
        "base": 576.19,
        "optimistic": 893.1,
        "currentVsBase": -0.1639,
        "analystTargetMean": 569.5583,
        "analystTargetLow": 400.0,
        "analystTargetHigh": 870.0,
        "evidenceWeights": {
          "bull": 25.4,
          "base": 37.3,
          "bear": 37.3
        },
        "integratedRead": "현재 시장 PER이 유지된다는 가정의 기준가 아래입니다. 실적 전망 유지 여부를 확인하며 접근할 구간입니다.",
        "formula": "기준=내년 예상 EPS×현재 시장 PER, 보수=기준×0.64, 낙관=기준×1.55",
        "notice": "가격 밴드는 매수 신호가 아니며 EPS 하향·기업 악재가 생기면 즉시 다시 계산합니다."
      },
      "trackRecord": {
        "status": "collecting",
        "settledCount": 0,
        "hitRate20": null,
        "brier20": null,
        "avgExcess20": null,
        "confidenceAdjustment": 0.0,
        "recentOutcomes": [],
        "notice": "20거래일 SPY 대비 방향 적중과 Brier score를 기록하며, 8건 전에는 신뢰도를 보정하지 않습니다."
      },
      "history": [
        {
          "asOf": 1787313613.7807624,
          "date": "2026-08-21",
          "fundamentalScore": 9.7,
          "confidence": 100,
          "fundamentalDamage": 30.8,
          "thesisDamage": 70.0,
          "thesisStatus": "damaged",
          "scenarioWeights": {
            "bull": 25.4,
            "base": 37.3,
            "bear": 37.3
          },
          "currentPrice": 481.7799987792969,
          "valuationGap": -0.1639,
          "theses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        }
      ],
      "thesisHistory": [
        {
          "asOf": 1787313613.7807624,
          "date": "2026-08-21",
          "overallStatus": "damaged",
          "statuses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        }
      ],
      "limitations": [
        "점수는 현재 캐시에 있는 공시·컨센서스·구조화 뉴스만 사용합니다.",
        "시나리오 수치는 예측 확률이 아니라 현재 근거의 상대 가중치입니다.",
        "특이항목 원인은 공식 공시 또는 수동 검증 기록이 없으면 추정하지 않습니다."
      ]
    },
    "GOOGL": {
      "ticker": "GOOGL",
      "asOf": 1787313613.7807624,
      "modelVersion": "fundamental-v1.2",
      "fundamentalScore": 15.4,
      "confidence": 100,
      "fundamentalSigma": null,
      "fundamentalSigmaProgress": {
        "status": "collecting",
        "collected": 1,
        "required": 8,
        "remaining": 7,
        "expectedReadyDate": "2026-08-28",
        "notice": "같은 KST 날짜의 반복 실행은 한 건으로 교체하며, 임의 과거 점수를 만들어 채우지 않습니다."
      },
      "priceSigma": -0.41,
      "priceDamage": 13.5,
      "fundamentalDamage": 0,
      "thesisDamage": 0,
      "thesisStatus": "strengthening",
      "damageRead": "현재 가격 변동과 펀더멘털 변화 사이에 큰 괴리는 확인되지 않았습니다.",
      "dimensions": {
        "growth": {
          "score": 14.860000000000001,
          "applicable": true
        },
        "earningsQuality": {
          "score": 16.362153452305822,
          "applicable": true
        },
        "cashFlow": {
          "score": 20.344950799846078,
          "applicable": true
        },
        "competitivePosition": {
          "score": 0.0,
          "applicable": true
        },
        "customerDemand": {
          "score": 24.5,
          "applicable": true
        },
        "balanceSheet": {
          "score": 19.4703,
          "applicable": true
        }
      },
      "officialEvidence": [
        {
          "id": "sec-annual",
          "kind": "confirmed_fact",
          "label": "연간 재무 수치",
          "source": "SEC Company Facts",
          "period": "2025",
          "detail": "매출·영업이익·순이익·현금흐름 핵심 항목을 SEC 원문 수치로 교차검증했습니다.",
          "url": "https://data.sec.gov/api/xbrl/companyfacts/"
        },
        {
          "id": "sec-quarterly",
          "kind": "confirmed_fact",
          "label": "분기 손익 수치",
          "source": "SEC Company Facts",
          "period": "Q2'26",
          "detail": "최근 분기 매출·영업이익·순이익을 SEC 3개월 보고값과 교차검증했습니다.",
          "url": "https://data.sec.gov/api/xbrl/companyfacts/"
        }
      ],
      "evidenceSummary": {
        "confirmedFacts": 2,
        "credibleReports": 0,
        "needsConfirmation": 8,
        "aiInferences": 8
      },
      "evidence": [
        {
          "headline": "분석가는 Marvell의 Google AI 거래로 1,200억 달러의 엄청난 기회를 얻을 수 있다고 말합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787228312,
          "sourceUrl": "https://finnhub.io/api/news?id=a1db5cb0d5fde30c9941cc028cc4062f471dd101bfa5a86d3c6b5fb160f71f58",
          "verificationStatus": "needs_confirmation",
          "reason": "사업·실적 연결 경로 확인 필요",
          "direction": "positive",
          "impact": 2.0
        },
        {
          "headline": "Marvell Technology: Google과의 122억 달러 규모의 거래가 엄청나게 유익한 이유",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1787221144,
          "sourceUrl": "https://finnhub.io/api/news?id=0cc7f51ab765279a8768d07c2f8734e8112595c50744b39a0c87b0b99b7ed788",
          "verificationStatus": "needs_confirmation",
          "reason": "사업·실적 연결 경로 확인 필요",
          "direction": "positive",
          "impact": 4.0
        },
        {
          "headline": "Marvell, Google 거래에 뛰어들다",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1787161425,
          "sourceUrl": "https://finnhub.io/api/news?id=51ace3d5fb5d7a5b702eb2d19980758b78e0c04d20dd7e908a3abb0d3b8ae002",
          "verificationStatus": "needs_confirmation",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "direction": "positive",
          "impact": 4.0
        },
        {
          "headline": "Marvell은 Alphabet과의 새로운 AI 거래에도 불구하고 매우 위험합니다",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1787148912,
          "sourceUrl": "https://finnhub.io/api/news?id=1fc826bb58c12a64eda93eedb38f7fef433fbd62aeeb51b0835e971898cc5918",
          "verificationStatus": "needs_confirmation",
          "reason": "회사 실적과의 연결고리 확인",
          "direction": "positive",
          "impact": 4.0
        },
        {
          "headline": "Marvell은 Alphabet의 거래를 따냈습니다. 모든 것이 변경됩니다(업그레이드)",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1787147454,
          "sourceUrl": "https://finnhub.io/api/news?id=3d43c746f0dbb97241e734fe4bda17e4e10a8f572faa86b8719fb158727659c3",
          "verificationStatus": "needs_confirmation",
          "reason": "회사 실적과의 연결고리 확인",
          "direction": "positive",
          "impact": 4.0
        },
        {
          "headline": "Marvell은 Google이 최대 122억 달러의 주식을 매입할 수 있는 AI 칩 거래에서 6%의 이익을 얻습니다.",
          "eventLabel": "경쟁사 공급 계약",
          "publishedAt": 1787137685,
          "sourceUrl": "https://finnhub.io/api/news?id=c9b4190634fc00669c88233fc42770d49901fdc0f4b44de410eb9b78af92c5fb",
          "verificationStatus": "needs_confirmation",
          "reason": "TPU 공급업체 다변화와 특정 공급사 의존도 완화 가능성",
          "direction": "positive",
          "impact": 4.0
        },
        {
          "headline": "Broadcom의 라이벌 Marvell, Google이 AI 칩 거래를 성사시킨 후 급등, 122억 달러 규모의 지분 매입 옵션 확보",
          "eventLabel": "경쟁사 공급 계약",
          "publishedAt": 1787135863,
          "sourceUrl": "https://finnhub.io/api/news?id=ee610846551e06b5814d7484d6a8749e30197f4ffe09530a339f56f4264a3b15",
          "verificationStatus": "needs_confirmation",
          "reason": "TPU 공급업체 다변화와 특정 공급사 의존도 완화 가능성",
          "direction": "positive",
          "impact": 4.0
        },
        {
          "headline": "Alphabet, Amazon, Meta Platform 및 Microsoft: 이러한 주식 중 하나는 향후 12개월 동안 상승 여력이 가장 적은 것처럼 보이지만 문제가 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1786563660,
          "sourceUrl": "https://finnhub.io/api/news?id=2743c4a0a093bef477eba4a0a9e9bc0ccb4677ce6623fa9695f0ae0caa6d1d6c",
          "verificationStatus": "needs_confirmation",
          "reason": "사업·실적 연결 경로 확인 필요",
          "direction": "positive",
          "impact": 2.0
        }
      ],
      "topPositive": [
        "사업·실적 연결 경로 확인 필요",
        "사업·실적 연결 경로 확인 필요",
        "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
      ],
      "topNegative": [],
      "nextChecks": [
        "다음 실적의 매출·EPS·마진",
        "핵심 고객 수요·CAPEX",
        "FCF와 부채·CAPEX 변화"
      ],
      "theses": [
        {
          "id": "growth",
          "name": "성장 Thesis",
          "statement": "매출·EPS 성장 전망이 유지되고 본업 수익성이 함께 개선된다.",
          "status": "intact",
          "score": 14.9,
          "confidence": 100,
          "falsificationRules": [
            "내년 매출·EPS 추정치가 함께 하향",
            "매출 둔화와 마진 하락이 동시에 확인"
          ]
        },
        {
          "id": "cashFlow",
          "name": "현금창출 Thesis",
          "statement": "본업 성장이 영업현금과 잉여현금흐름으로 전환된다.",
          "status": "strengthening",
          "score": 20.3,
          "confidence": 100,
          "falsificationRules": [
            "FCF가 2개 연도 연속 감소",
            "OCF 감소와 CAPEX 부담 증가가 동시에 발생"
          ]
        },
        {
          "id": "resilience",
          "name": "경쟁·재무 Thesis",
          "statement": "경쟁·고객 집중·재무 부담이 장기 사업 경쟁력을 훼손하지 않는다.",
          "status": "intact",
          "score": 14.7,
          "confidence": 100,
          "falsificationRules": [
            "핵심 고객 이탈 또는 점유율 하락이 공식 수치로 확인",
            "부채 부담 상승과 사업 리스크 확대가 동시 발생"
          ]
        }
      ],
      "scenarios": {
        "bull": 34.7,
        "base": 38.9,
        "bear": 26.4
      },
      "alerts": [],
      "businessProfile": {
        "updatedAt": null,
        "customers": [],
        "strengths": [],
        "risks": [],
        "sources": [],
        "latestChanges": [
          {
            "headline": "분석가는 Marvell의 Google AI 거래로 1,200억 달러의 엄청난 기회를 얻을 수 있다고 말합니다.",
            "eventLabel": "AI·데이터센터 투자 변화",
            "publishedAt": 1787228312,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=a1db5cb0d5fde30c9941cc028cc4062f471dd101bfa5a86d3c6b5fb160f71f58",
            "reason": "사업·실적 연결 경로 확인 필요"
          },
          {
            "headline": "Marvell Technology: Google과의 122억 달러 규모의 거래가 엄청나게 유익한 이유",
            "eventLabel": "주요 고객 계약",
            "publishedAt": 1787221144,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=0cc7f51ab765279a8768d07c2f8734e8112595c50744b39a0c87b0b99b7ed788",
            "reason": "사업·실적 연결 경로 확인 필요"
          },
          {
            "headline": "Marvell, Google 거래에 뛰어들다",
            "eventLabel": "주요 고객 계약",
            "publishedAt": 1787161425,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=51ace3d5fb5d7a5b702eb2d19980758b78e0c04d20dd7e908a3abb0d3b8ae002",
            "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
          },
          {
            "headline": "Marvell은 Alphabet과의 새로운 AI 거래에도 불구하고 매우 위험합니다",
            "eventLabel": "주요 고객 계약",
            "publishedAt": 1787148912,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=1fc826bb58c12a64eda93eedb38f7fef433fbd62aeeb51b0835e971898cc5918",
            "reason": "회사 실적과의 연결고리 확인"
          },
          {
            "headline": "Marvell은 Alphabet의 거래를 따냈습니다. 모든 것이 변경됩니다(업그레이드)",
            "eventLabel": "주요 고객 계약",
            "publishedAt": 1787147454,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=3d43c746f0dbb97241e734fe4bda17e4e10a8f572faa86b8719fb158727659c3",
            "reason": "회사 실적과의 연결고리 확인"
          },
          {
            "headline": "Marvell은 Google이 최대 122억 달러의 주식을 매입할 수 있는 AI 칩 거래에서 6%의 이익을 얻습니다.",
            "eventLabel": "경쟁사 공급 계약",
            "publishedAt": 1787137685,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=c9b4190634fc00669c88233fc42770d49901fdc0f4b44de410eb9b78af92c5fb",
            "reason": "TPU 공급업체 다변화와 특정 공급사 의존도 완화 가능성"
          }
        ],
        "status": "available",
        "notice": "정성 사업정보는 마지막 확인일 이후의 구조화 중요 뉴스를 별도 변경 항목으로 덧붙입니다."
      },
      "earningsQualityReview": {
        "status": "reviewed",
        "period": "Q2'26",
        "reportedNetIncome": 112193000000.0,
        "normalizedIncome": 32232249000.0,
        "normalizedGap": 2.4808,
        "findings": [
          {
            "key": "unusualItems",
            "label": "비경상 항목",
            "amount": 98839000000.0,
            "revenueRatio": 0.8251,
            "repeatCount": 4,
            "classification": "recurring_risk",
            "recurrenceRead": "최근 6개 기간 중 두 번 이상 나타나 반복 가능성을 열어둡니다."
          },
          {
            "key": "unusualItemsExGoodwill",
            "label": "영업권 제외 비경상 항목",
            "amount": 98839000000.0,
            "revenueRatio": 0.8251,
            "repeatCount": 4,
            "classification": "recurring_risk",
            "recurrenceRead": "최근 6개 기간 중 두 번 이상 나타나 반복 가능성을 열어둡니다."
          },
          {
            "key": "unusualTaxEffect",
            "label": "비경상 세금 효과",
            "amount": 18878249000.0,
            "revenueRatio": 0.1576,
            "repeatCount": 3,
            "classification": "recurring_risk",
            "recurrenceRead": "최근 6개 기간 중 두 번 이상 나타나 반복 가능성을 열어둡니다."
          }
        ],
        "coreRead": "보고 순이익에 의미 있는 특이항목이 확인됩니다. 본업은 매출·영업이익·정상화이익을 우선해 읽어야 합니다.",
        "manualContext": {
          "date": "2026-08-10",
          "period": "2026-03-31 마감 분기(1분기) · 2026-06-30 마감 분기(2분기), 2개 분기 연속",
          "headline": "순이익이 2분기 연속 비정상적으로 급증: 1분기 $62.6B(+81% YoY, EPS $5.11) → 2분기 $112.1B(+298% YoY, EPS $9.11). 헤드라인만 보면 실적이 폭발하는 것처럼 보임.",
          "oneTime": "둘 다 비상장 지분(마켓터블하지 않은 증권) 포트폴리오의 '미실현 평가이익'이 원인 - 실제 영업이 아니라 회계상 평가익. 1분기는 세전 $36.9B 평가익(세후 순이익 기여 $28.7B, EPS 기여 $2.35). 2분기는 훨씬 더 커서 기타수익만 $98B 규모(대부분 미실현 평가이익). 즉 '실적이 진짜 이만큼 좋아진 것'이 아니라 보유 지분 가치평가가 크게 오른 결과.",
          "coreRead": "투자이익을 빼고 봐도 본업 자체는 진짜 견조함 - 영업이익이 1분기 +30%, 2분기도 +30%로 2분기 연속 안정적(각각 $39.7B, $40.8B). 특히 구글클라우드 매출 성장이 1분기 +63% → 2분기 +82%로 오히려 가속. 결론: 순이익 증가율(+81%→+298%)은 투자평가손익 때문에 크게 출렁이는 '노이즈'고, 영업이익 증가율(+30%, +30%)이 본업의 '진짜 신호'. 이번 케이스는 사업 자체가 나쁜데 숫자만 좋아 보이는 게 아니라, 본업도 좋고(+30%) 회계상 추가 이익까지 겹친 경우.",
          "forecast": "①다음 분기부터는 이런 규모의 투자평가이익이 매 분기 반복될 이유가 없어서, 순이익 증가율이 갑자기 확 꺾여 보일 수 있음 - 이걸 '실적 악화'로 오해하지 말고 기저효과(전년동기에는 없던 대형 일회성 이익과 비교하는 착시)인지부터 확인할 것. ②더 중요한 리스크: 이 평가이익은 미실현(mark-to-market)이라 보유 지분 가치가 다음에 조정되면 반대로 대형 평가손실이 찍힐 수도 있음 - 양방향 변동성 요인으로 봐야 함. ③본업 신호로는 클라우드 매출 성장률(63%→82%로 가속 중)이 계속 오르는지를 보는 게 순이익보다 훨씬 신뢰도 높은 지표. 이건 예측이라 틀릴 수 있음.",
          "confidence": "일회성 이익의 존재와 규모는 회사 공식 실적발표 기준(신뢰도 높음) · 다음 분기 방향에 대한 해석은 추정(신뢰도 중간)"
        }
      },
      "valuationScenario": {
        "status": "available",
        "price": 341.48,
        "currentEps": 20.6002,
        "nextEps": 14.82873,
        "epsGrowth": -0.2802,
        "marketPe": 16.58,
        "conservative": 157.32,
        "base": 245.81,
        "optimistic": 381.0,
        "currentVsBase": 0.3892,
        "analystTargetMean": 428.06668,
        "analystTargetLow": 340.0,
        "analystTargetHigh": 515.0,
        "evidenceWeights": {
          "bull": 34.7,
          "base": 38.9,
          "bear": 26.4
        },
        "integratedRead": "현재 가격과 실적 기준가가 크게 어긋나지 않습니다. 다음 EPS 추정치와 PER 변화가 방향을 좌우합니다.",
        "formula": "기준=내년 예상 EPS×현재 시장 PER, 보수=기준×0.64, 낙관=기준×1.55",
        "notice": "가격 밴드는 매수 신호가 아니며 EPS 하향·기업 악재가 생기면 즉시 다시 계산합니다."
      },
      "trackRecord": {
        "status": "collecting",
        "settledCount": 0,
        "hitRate20": null,
        "brier20": null,
        "avgExcess20": null,
        "confidenceAdjustment": 0.0,
        "recentOutcomes": [],
        "notice": "20거래일 SPY 대비 방향 적중과 Brier score를 기록하며, 8건 전에는 신뢰도를 보정하지 않습니다."
      },
      "history": [
        {
          "asOf": 1787313613.7807624,
          "date": "2026-08-21",
          "fundamentalScore": 15.4,
          "confidence": 100,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "strengthening",
          "scenarioWeights": {
            "bull": 34.7,
            "base": 38.9,
            "bear": 26.4
          },
          "currentPrice": 341.4800109863281,
          "valuationGap": 0.3892,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        }
      ],
      "thesisHistory": [
        {
          "asOf": 1787313613.7807624,
          "date": "2026-08-21",
          "overallStatus": "strengthening",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        }
      ],
      "limitations": [
        "점수는 현재 캐시에 있는 공시·컨센서스·구조화 뉴스만 사용합니다.",
        "시나리오 수치는 예측 확률이 아니라 현재 근거의 상대 가중치입니다.",
        "특이항목 원인은 공식 공시 또는 수동 검증 기록이 없으면 추정하지 않습니다."
      ]
    },
    "AMZN": {
      "ticker": "AMZN",
      "asOf": 1787313613.7807624,
      "modelVersion": "fundamental-v1.2",
      "fundamentalScore": 0.8,
      "confidence": 90.0,
      "fundamentalSigma": null,
      "fundamentalSigmaProgress": {
        "status": "collecting",
        "collected": 1,
        "required": 8,
        "remaining": 7,
        "expectedReadyDate": "2026-08-28",
        "notice": "같은 KST 날짜의 반복 실행은 한 건으로 교체하며, 임의 과거 점수를 만들어 채우지 않습니다."
      },
      "priceSigma": 0.13,
      "priceDamage": 4.3,
      "fundamentalDamage": 33.3,
      "thesisDamage": 21.0,
      "thesisStatus": "weakening",
      "damageRead": "펀더멘털 위험 신호가 가격에 충분히 반영되지 않았을 가능성이 있습니다.",
      "dimensions": {
        "growth": {
          "score": 0.930000333333334,
          "applicable": true
        },
        "earningsQuality": {
          "score": 7.048379803887047,
          "applicable": true
        },
        "cashFlow": {
          "score": -18.297645842204517,
          "applicable": true
        },
        "competitivePosition": {
          "score": 0.0,
          "applicable": true
        },
        "customerDemand": {
          "score": 0.0,
          "applicable": true
        },
        "balanceSheet": {
          "score": 12.465599999999998,
          "applicable": true
        }
      },
      "officialEvidence": [
        {
          "id": "sec-quarterly",
          "kind": "confirmed_fact",
          "label": "분기 손익 수치",
          "source": "SEC Company Facts",
          "period": "Q2'26",
          "detail": "최근 분기 매출·영업이익·순이익을 SEC 3개월 보고값과 교차검증했습니다.",
          "url": "https://data.sec.gov/api/xbrl/companyfacts/"
        }
      ],
      "evidenceSummary": {
        "confirmedFacts": 2,
        "credibleReports": 0,
        "needsConfirmation": 1,
        "aiInferences": 2
      },
      "evidence": [
        {
          "headline": "AMZN SEC Form 424B3 공식 제출",
          "eventLabel": "증권등록·투자설명서 제출",
          "publishedAt": 1786978800.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1018724/000110465926098339/tm2617924-6_424b3.htm",
          "verificationStatus": "confirmed",
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기",
          "direction": "negative",
          "impact": -5.0
        },
        {
          "headline": "Alphabet, Amazon, Meta Platform 및 Microsoft: 이러한 주식 중 하나는 향후 12개월 동안 상승 여력이 가장 적은 것처럼 보이지만 문제가 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1786563660,
          "sourceUrl": "https://finnhub.io/api/news?id=2743c4a0a093bef477eba4a0a9e9bc0ccb4677ce6623fa9695f0ae0caa6d1d6c",
          "verificationStatus": "needs_confirmation",
          "reason": "사업·실적 연결 경로 확인 필요",
          "direction": "positive",
          "impact": 2.0
        }
      ],
      "topPositive": [
        "사업·실적 연결 경로 확인 필요"
      ],
      "topNegative": [
        "SEC 제출 사실 확인, 세부 내용 분석 대기"
      ],
      "nextChecks": [
        "다음 실적의 매출·EPS·마진",
        "핵심 고객 수요·CAPEX",
        "FCF와 부채·CAPEX 변화"
      ],
      "theses": [
        {
          "id": "growth",
          "name": "성장 Thesis",
          "statement": "매출·EPS 성장 전망이 유지되고 본업 수익성이 함께 개선된다.",
          "status": "intact",
          "score": 0.9,
          "confidence": 90.0,
          "falsificationRules": [
            "내년 매출·EPS 추정치가 함께 하향",
            "매출 둔화와 마진 하락이 동시에 확인"
          ]
        },
        {
          "id": "cashFlow",
          "name": "현금창출 Thesis",
          "statement": "본업 성장이 영업현금과 잉여현금흐름으로 전환된다.",
          "status": "weakening",
          "score": -18.3,
          "confidence": 90.0,
          "falsificationRules": [
            "FCF가 2개 연도 연속 감소",
            "OCF 감소와 CAPEX 부담 증가가 동시에 발생"
          ]
        },
        {
          "id": "resilience",
          "name": "경쟁·재무 Thesis",
          "statement": "경쟁·고객 집중·재무 부담이 장기 사업 경쟁력을 훼손하지 않는다.",
          "status": "intact",
          "score": 4.2,
          "confidence": 90.0,
          "falsificationRules": [
            "핵심 고객 이탈 또는 점유율 하락이 공식 수치로 확인",
            "부채 부담 상승과 사업 리스크 확대가 동시 발생"
          ]
        }
      ],
      "scenarios": {
        "bull": 29.0,
        "base": 39.4,
        "bear": 31.6
      },
      "alerts": [],
      "businessProfile": {
        "updatedAt": null,
        "customers": [],
        "strengths": [],
        "risks": [],
        "sources": [],
        "latestChanges": [
          {
            "headline": "AMZN SEC Form 424B3 공식 제출",
            "eventLabel": "증권등록·투자설명서 제출",
            "publishedAt": 1786978800.0,
            "direction": "negative",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1018724/000110465926098339/tm2617924-6_424b3.htm",
            "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
          },
          {
            "headline": "Alphabet, Amazon, Meta Platform 및 Microsoft: 이러한 주식 중 하나는 향후 12개월 동안 상승 여력이 가장 적은 것처럼 보이지만 문제가 있습니다.",
            "eventLabel": "AI·데이터센터 투자 변화",
            "publishedAt": 1786563660,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=2743c4a0a093bef477eba4a0a9e9bc0ccb4677ce6623fa9695f0ae0caa6d1d6c",
            "reason": "사업·실적 연결 경로 확인 필요"
          }
        ],
        "status": "available",
        "notice": "정성 사업정보는 마지막 확인일 이후의 구조화 중요 뉴스를 별도 변경 항목으로 덧붙입니다."
      },
      "earningsQualityReview": {
        "status": "reviewed",
        "period": "Q2'26",
        "reportedNetIncome": 62647000000.0,
        "normalizedIncome": null,
        "normalizedGap": null,
        "findings": [],
        "coreRead": "현재 수집된 항목만 보면 최신 기간 순이익을 크게 왜곡하는 특이항목은 확인되지 않았습니다.",
        "manualContext": null
      },
      "valuationScenario": {
        "status": "available",
        "price": 262.48,
        "currentEps": 12.41515,
        "nextEps": 10.46697,
        "epsGrowth": -0.1569,
        "marketPe": 21.14,
        "conservative": 141.62,
        "base": 221.29,
        "optimistic": 343.0,
        "currentVsBase": 0.1861,
        "analystTargetMean": 326.83734,
        "analystTargetLow": 230.0,
        "analystTargetHigh": 405.0,
        "evidenceWeights": {
          "bull": 29.0,
          "base": 39.4,
          "bear": 31.6
        },
        "integratedRead": "현재 가격과 실적 기준가가 크게 어긋나지 않습니다. 다음 EPS 추정치와 PER 변화가 방향을 좌우합니다.",
        "formula": "기준=내년 예상 EPS×현재 시장 PER, 보수=기준×0.64, 낙관=기준×1.55",
        "notice": "가격 밴드는 매수 신호가 아니며 EPS 하향·기업 악재가 생기면 즉시 다시 계산합니다."
      },
      "trackRecord": {
        "status": "collecting",
        "settledCount": 0,
        "hitRate20": null,
        "brier20": null,
        "avgExcess20": null,
        "confidenceAdjustment": 0.0,
        "recentOutcomes": [],
        "notice": "20거래일 SPY 대비 방향 적중과 Brier score를 기록하며, 8건 전에는 신뢰도를 보정하지 않습니다."
      },
      "history": [
        {
          "asOf": 1787313613.7807624,
          "date": "2026-08-21",
          "fundamentalScore": 0.8,
          "confidence": 90.0,
          "fundamentalDamage": 33.3,
          "thesisDamage": 21.0,
          "thesisStatus": "weakening",
          "scenarioWeights": {
            "bull": 29.0,
            "base": 39.4,
            "bear": 31.6
          },
          "currentPrice": 262.4750061035156,
          "valuationGap": 0.1861,
          "theses": {
            "growth": "intact",
            "cashFlow": "weakening",
            "resilience": "intact"
          }
        }
      ],
      "thesisHistory": [
        {
          "asOf": 1787313613.7807624,
          "date": "2026-08-21",
          "overallStatus": "weakening",
          "statuses": {
            "growth": "intact",
            "cashFlow": "weakening",
            "resilience": "intact"
          }
        }
      ],
      "limitations": [
        "점수는 현재 캐시에 있는 공시·컨센서스·구조화 뉴스만 사용합니다.",
        "시나리오 수치는 예측 확률이 아니라 현재 근거의 상대 가중치입니다.",
        "특이항목 원인은 공식 공시 또는 수동 검증 기록이 없으면 추정하지 않습니다."
      ]
    },
    "META": {
      "ticker": "META",
      "asOf": 1787313613.7807624,
      "modelVersion": "fundamental-v1.2",
      "fundamentalScore": 9.3,
      "confidence": 100,
      "fundamentalSigma": null,
      "fundamentalSigmaProgress": {
        "status": "collecting",
        "collected": 1,
        "required": 8,
        "remaining": 7,
        "expectedReadyDate": "2026-08-28",
        "notice": "같은 KST 날짜의 반복 실행은 한 건으로 교체하며, 임의 과거 점수를 만들어 채우지 않습니다."
      },
      "priceSigma": -1.73,
      "priceDamage": 57.8,
      "fundamentalDamage": 9.7,
      "thesisDamage": 0,
      "thesisStatus": "intact",
      "damageRead": "가격 조정이 펀더멘털 변화보다 큽니다. 수급·멀티플 조정 가능성이 있으나, 다음 실적과 중요 뉴스를 확인해야 합니다.",
      "dimensions": {
        "growth": {
          "score": 10.393333333333333,
          "applicable": true
        },
        "earningsQuality": {
          "score": 17.194549388847843,
          "applicable": true
        },
        "cashFlow": {
          "score": 12.63666962568427,
          "applicable": true
        },
        "competitivePosition": {
          "score": 0.0,
          "applicable": true
        },
        "customerDemand": {
          "score": 0.0,
          "applicable": true
        },
        "balanceSheet": {
          "score": 9.267299999999999,
          "applicable": true
        }
      },
      "officialEvidence": [
        {
          "id": "sec-annual",
          "kind": "confirmed_fact",
          "label": "연간 재무 수치",
          "source": "SEC Company Facts",
          "period": "2025",
          "detail": "매출·영업이익·순이익·현금흐름 핵심 항목을 SEC 원문 수치로 교차검증했습니다.",
          "url": "https://data.sec.gov/api/xbrl/companyfacts/"
        },
        {
          "id": "sec-quarterly",
          "kind": "confirmed_fact",
          "label": "분기 손익 수치",
          "source": "SEC Company Facts",
          "period": "Q2'26",
          "detail": "최근 분기 매출·영업이익·순이익을 SEC 3개월 보고값과 교차검증했습니다.",
          "url": "https://data.sec.gov/api/xbrl/companyfacts/"
        }
      ],
      "evidenceSummary": {
        "confirmedFacts": 2,
        "credibleReports": 0,
        "needsConfirmation": 5,
        "aiInferences": 5
      },
      "evidence": [
        {
          "headline": "Meta는 메모리를 통해 고정관념에서 벗어나 생각합니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1787279244,
          "sourceUrl": "https://finnhub.io/api/news?id=ccc06d31b06b868713cb2b564c749ada8b94f4337f4f90ccfeb3ec5836ac2867",
          "verificationStatus": "needs_confirmation",
          "reason": "회사 실적과의 연결고리 확인",
          "direction": "negative",
          "impact": -4.0
        },
        {
          "headline": "정오에 가장 큰 움직임을 보이는 주식: Meta, Amylyx, Baidu, Klarna, Coherent, Sandisk 등",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787057783,
          "sourceUrl": "https://finnhub.io/api/news?id=c72c281529f57a71ec992c40b253a421c53b8fa4b522b66a5a9c0b159bc2e730",
          "verificationStatus": "needs_confirmation",
          "reason": "사업·실적 연결 경로 확인 필요",
          "direction": "negative",
          "impact": -4.0
        },
        {
          "headline": "Viking Global Investors, Meta Platforms Inc의 주식 지분을 75.8%에서 190만 클래스 A 주식으로 인상",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1786724767,
          "sourceUrl": "https://finnhub.io/api/news?id=c269b2e7e7c4825e0c701852021f83c6a10a024167f8475b6181c283b74946ba",
          "verificationStatus": "needs_confirmation",
          "reason": "사업·실적 연결 경로 확인 필요",
          "direction": "positive",
          "impact": 2.0
        },
        {
          "headline": "텐센트, 메타딜 청산으로 마누스 최대주주로 올라 텐센트, 페이스북 모기업 메타로부터 중국 인공지능 개발자 마누스 지분 인수해 최대 기업으로 성장",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1786621274,
          "sourceUrl": "https://finnhub.io/api/news?id=d11879ecc00cfe961d0b9427413876c6169fb16bcb2b9b809664dd9b3c2a0d0d",
          "verificationStatus": "needs_confirmation",
          "reason": "회사 실적과의 연결고리 확인",
          "direction": "positive",
          "impact": 4.0
        },
        {
          "headline": "개방형 AI 추진이 확대되는 가운데 투자자가 메타 플랫폼(META) 청소년 시험에 대응할 수 있는 방법",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1786601450,
          "sourceUrl": "https://finnhub.io/api/news?id=4a1011b2a9ce41507a89e0bd142cdcdafa1d3dfe31c0e9d8ebe3ecc2c2296e68",
          "verificationStatus": "needs_confirmation",
          "reason": "사업·실적 연결 경로 확인 필요",
          "direction": "positive",
          "impact": 2.0
        }
      ],
      "topPositive": [
        "사업·실적 연결 경로 확인 필요",
        "회사 실적과의 연결고리 확인",
        "사업·실적 연결 경로 확인 필요"
      ],
      "topNegative": [
        "회사 실적과의 연결고리 확인",
        "사업·실적 연결 경로 확인 필요"
      ],
      "nextChecks": [
        "다음 실적의 매출·EPS·마진",
        "핵심 고객 수요·CAPEX",
        "FCF와 부채·CAPEX 변화"
      ],
      "theses": [
        {
          "id": "growth",
          "name": "성장 Thesis",
          "statement": "매출·EPS 성장 전망이 유지되고 본업 수익성이 함께 개선된다.",
          "status": "intact",
          "score": 10.4,
          "confidence": 100,
          "falsificationRules": [
            "내년 매출·EPS 추정치가 함께 하향",
            "매출 둔화와 마진 하락이 동시에 확인"
          ]
        },
        {
          "id": "cashFlow",
          "name": "현금창출 Thesis",
          "statement": "본업 성장이 영업현금과 잉여현금흐름으로 전환된다.",
          "status": "intact",
          "score": 12.6,
          "confidence": 100,
          "falsificationRules": [
            "FCF가 2개 연도 연속 감소",
            "OCF 감소와 CAPEX 부담 증가가 동시에 발생"
          ]
        },
        {
          "id": "resilience",
          "name": "경쟁·재무 Thesis",
          "statement": "경쟁·고객 집중·재무 부담이 장기 사업 경쟁력을 훼손하지 않는다.",
          "status": "intact",
          "score": 3.1,
          "confidence": 100,
          "falsificationRules": [
            "핵심 고객 이탈 또는 점유율 하락이 공식 수치로 확인",
            "부채 부담 상승과 사업 리스크 확대가 동시 발생"
          ]
        }
      ],
      "scenarios": {
        "bull": 33.4,
        "base": 39.3,
        "bear": 27.3
      },
      "alerts": [],
      "businessProfile": {
        "updatedAt": null,
        "customers": [],
        "strengths": [],
        "risks": [],
        "sources": [],
        "latestChanges": [
          {
            "headline": "Meta는 메모리를 통해 고정관념에서 벗어나 생각합니다.",
            "eventLabel": "규제·소송·수출 제한",
            "publishedAt": 1787279244,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=ccc06d31b06b868713cb2b564c749ada8b94f4337f4f90ccfeb3ec5836ac2867",
            "reason": "회사 실적과의 연결고리 확인"
          },
          {
            "headline": "정오에 가장 큰 움직임을 보이는 주식: Meta, Amylyx, Baidu, Klarna, Coherent, Sandisk 등",
            "eventLabel": "AI·데이터센터 투자 변화",
            "publishedAt": 1787057783,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=c72c281529f57a71ec992c40b253a421c53b8fa4b522b66a5a9c0b159bc2e730",
            "reason": "사업·실적 연결 경로 확인 필요"
          },
          {
            "headline": "Viking Global Investors, Meta Platforms Inc의 주식 지분을 75.8%에서 190만 클래스 A 주식으로 인상",
            "eventLabel": "AI·데이터센터 투자 변화",
            "publishedAt": 1786724767,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=c269b2e7e7c4825e0c701852021f83c6a10a024167f8475b6181c283b74946ba",
            "reason": "사업·실적 연결 경로 확인 필요"
          },
          {
            "headline": "텐센트, 메타딜 청산으로 마누스 최대주주로 올라 텐센트, 페이스북 모기업 메타로부터 중국 인공지능 개발자 마누스 지분 인수해 최대 기업으로 성장",
            "eventLabel": "주요 고객 계약",
            "publishedAt": 1786621274,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=d11879ecc00cfe961d0b9427413876c6169fb16bcb2b9b809664dd9b3c2a0d0d",
            "reason": "회사 실적과의 연결고리 확인"
          },
          {
            "headline": "개방형 AI 추진이 확대되는 가운데 투자자가 메타 플랫폼(META) 청소년 시험에 대응할 수 있는 방법",
            "eventLabel": "AI·데이터센터 투자 변화",
            "publishedAt": 1786601450,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=4a1011b2a9ce41507a89e0bd142cdcdafa1d3dfe31c0e9d8ebe3ecc2c2296e68",
            "reason": "사업·실적 연결 경로 확인 필요"
          }
        ],
        "status": "available",
        "notice": "정성 사업정보는 마지막 확인일 이후의 구조화 중요 뉴스를 별도 변경 항목으로 덧붙입니다."
      },
      "earningsQualityReview": {
        "status": "reviewed",
        "period": "Q2'26",
        "reportedNetIncome": 15848000000.0,
        "normalizedIncome": 15927800000.0,
        "normalizedGap": -0.005,
        "findings": [],
        "coreRead": "현재 수집된 항목만 보면 최신 기간 순이익을 크게 왜곡하는 특이항목은 확인되지 않았습니다.",
        "manualContext": {
          "date": "2026-08-11",
          "period": "2025-09-30 마감 분기(3분기) - 이후 분기는 정상화됨",
          "headline": "2025년 3분기 순이익이 $2.71B(마진 5.3%)로 급락 - 직전(38.6%)·직후(38.0%) 분기와 비교하면 딱 한 분기만 뚝 떨어진 모양.",
          "oneTime": "완전한 1회성 회계 이벤트 - 미국 세제개편법('OBBB Act')으로 인한 $15.93B 규모의 일회성·비현금성 법인세 비용(더 이상 쓸 일이 없어진 이연법인세자산을 상각 처리). 이 세금 이벤트 하나 때문에 실효세율이 원래 14%대여야 할 게 87%까지 치솟음. 같은 세제개편법이 QCOM(세금 환입으로 순이익 급증)에도 영향을 준 것과 뿌리가 같은 사건 - 이 시기 여러 미국 대기업에 공통으로 영향을 준 매크로 이벤트로 보임.",
          "coreRead": "이 항목을 빼면 순이익은 $18.64B(EPS $7.25, 원래 $1.05에서 +$6.20)로 오히려 시장 예상보다 좋았음 - 본업은 전혀 나빠지지 않았고 회계상 세금 처리 하나가 그 분기만 순이익을 왜곡시킨 것. 직후 분기(2025-12 마감)에 마진이 바로 38.0%로 정상 복귀한 게 이 해석을 뒷받침함.",
          "forecast": "이미 지나간 이벤트라 앞으로 반복될 가능성은 낮음(같은 세제개편법 이연자산 상각은 일회성 조정) - 오히려 회사는 이 법 덕분에 앞으로 미국 현금 법인세 부담이 줄어들 거라고 언급함(중장기 순이익엔 긍정적). 다음 분기부터는 이 왜곡 없이 광고 매출·AI 투자 성과 위주로 판단하면 됨.",
          "confidence": "일회성 세금 항목의 존재·규모·직후 정상화는 회사 공식 발표 기준(신뢰도 높음)"
        }
      },
      "valuationScenario": {
        "status": "available",
        "price": 543.71,
        "currentEps": 31.72211,
        "nextEps": 33.89187,
        "epsGrowth": 0.0684,
        "marketPe": 17.14,
        "conservative": 371.78,
        "base": 580.9,
        "optimistic": 900.39,
        "currentVsBase": -0.064,
        "analystTargetMean": 754.14246,
        "analystTargetLow": 580.0,
        "analystTargetHigh": 1000.0,
        "evidenceWeights": {
          "bull": 33.4,
          "base": 39.3,
          "bear": 27.3
        },
        "integratedRead": "현재 시장 PER이 유지된다는 가정의 기준가 아래입니다. 실적 전망 유지 여부를 확인하며 접근할 구간입니다.",
        "formula": "기준=내년 예상 EPS×현재 시장 PER, 보수=기준×0.64, 낙관=기준×1.55",
        "notice": "가격 밴드는 매수 신호가 아니며 EPS 하향·기업 악재가 생기면 즉시 다시 계산합니다."
      },
      "trackRecord": {
        "status": "collecting",
        "settledCount": 0,
        "hitRate20": null,
        "brier20": null,
        "avgExcess20": null,
        "confidenceAdjustment": 0.0,
        "recentOutcomes": [],
        "notice": "20거래일 SPY 대비 방향 적중과 Brier score를 기록하며, 8건 전에는 신뢰도를 보정하지 않습니다."
      },
      "history": [
        {
          "asOf": 1787313613.7807624,
          "date": "2026-08-21",
          "fundamentalScore": 9.3,
          "confidence": 100,
          "fundamentalDamage": 9.7,
          "thesisDamage": 0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 33.4,
            "base": 39.3,
            "bear": 27.3
          },
          "currentPrice": 543.7100219726562,
          "valuationGap": -0.064,
          "theses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        }
      ],
      "thesisHistory": [
        {
          "asOf": 1787313613.7807624,
          "date": "2026-08-21",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        }
      ],
      "limitations": [
        "점수는 현재 캐시에 있는 공시·컨센서스·구조화 뉴스만 사용합니다.",
        "시나리오 수치는 예측 확률이 아니라 현재 근거의 상대 가중치입니다.",
        "특이항목 원인은 공식 공시 또는 수동 검증 기록이 없으면 추정하지 않습니다."
      ]
    },
    "AAPL": {
      "ticker": "AAPL",
      "asOf": 1787313613.7807624,
      "modelVersion": "fundamental-v1.2",
      "fundamentalScore": 8.4,
      "confidence": 100,
      "fundamentalSigma": null,
      "fundamentalSigmaProgress": {
        "status": "collecting",
        "collected": 1,
        "required": 8,
        "remaining": 7,
        "expectedReadyDate": "2026-08-28",
        "notice": "같은 KST 날짜의 반복 실행은 한 건으로 교체하며, 임의 과거 점수를 만들어 채우지 않습니다."
      },
      "priceSigma": 0.1,
      "priceDamage": 3.4,
      "fundamentalDamage": 0,
      "thesisDamage": 42.0,
      "thesisStatus": "damaged",
      "damageRead": "현재 가격 변동과 펀더멘털 변화 사이에 큰 괴리는 확인되지 않았습니다.",
      "dimensions": {
        "growth": {
          "score": 15.7966665,
          "applicable": true
        },
        "earningsQuality": {
          "score": 17.736442231290795,
          "applicable": true
        },
        "cashFlow": {
          "score": 15.386326247392173,
          "applicable": true
        },
        "competitivePosition": {
          "score": -9.799999999999999,
          "applicable": true
        },
        "customerDemand": {
          "score": 0.0,
          "applicable": true
        },
        "balanceSheet": {
          "score": 0.6904000000000003,
          "applicable": true
        }
      },
      "officialEvidence": [
        {
          "id": "sec-quarterly",
          "kind": "confirmed_fact",
          "label": "분기 손익 수치",
          "source": "SEC Company Facts",
          "period": "Q2'26",
          "detail": "최근 분기 매출·영업이익·순이익을 SEC 3개월 보고값과 교차검증했습니다.",
          "url": "https://data.sec.gov/api/xbrl/companyfacts/"
        }
      ],
      "evidenceSummary": {
        "confirmedFacts": 1,
        "credibleReports": 0,
        "needsConfirmation": 8,
        "aiInferences": 8
      },
      "evidence": [
        {
          "headline": "Apple 제품을 구매하시나요? 비용을 지불하는 데 도움이 되는 4가지 도구",
          "eventLabel": "공급망 문제",
          "publishedAt": 1787212801,
          "sourceUrl": "https://finnhub.io/api/news?id=a03b08e1b2008c44e24564b7729d0b10f7da5eb33418846cce278009d8d4233d",
          "verificationStatus": "needs_confirmation",
          "reason": "가격 전가 시 마진 방어, 판매량·교체주기 둔화 위험",
          "direction": "negative",
          "impact": -4.0
        },
        {
          "headline": "기술 하드웨어, 스토리지 및 주변 장치 산업에서 Apple과 업계 경쟁사 비교",
          "eventLabel": "경쟁사 기술·시장 진입",
          "publishedAt": 1787119115,
          "sourceUrl": "https://finnhub.io/api/news?id=9c43c3f8c098b3de957c02804e4fcfc2dca39323873cbbb19061f40e998f2067",
          "verificationStatus": "needs_confirmation",
          "reason": "회사 실적과의 연결고리 확인",
          "direction": "negative",
          "impact": -4.0
        },
        {
          "headline": "Google의 새로운 Pixel 11은 Gemini를 Apple과의 AI 전화 전쟁의 중심에 놓습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1786528801,
          "sourceUrl": "https://finnhub.io/api/news?id=5dde94cd3b8300f913fde5fb98794701c69bc5e0d4e729aee0641f5b85b2c50e",
          "verificationStatus": "needs_confirmation",
          "reason": "사업·실적 연결 경로 확인 필요",
          "direction": "negative",
          "impact": -4.0
        },
        {
          "headline": "보고된 Apple 공급업체 위협에도 불구하고 마이크론 주가 상승",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1786392471,
          "sourceUrl": "https://finnhub.io/api/news?id=51fea410f251d2efb829da27462a179e0ef0fcf273b56fb0a616fd68fe522364",
          "verificationStatus": "needs_confirmation",
          "reason": "사업·실적 연결 경로 확인 필요",
          "direction": "positive",
          "impact": 4.0
        },
        {
          "headline": "애플이 전 세계적인 부족 상황 속에서 아이폰, 맥북용 중국산 메모리 칩을 테스트하고 있는 것으로 알려졌습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1786385747,
          "sourceUrl": "https://finnhub.io/api/news?id=29aaf140cb2ed909321ab2a99380f77b4f570ee5733f216a0da8df65ad82f421",
          "verificationStatus": "needs_confirmation",
          "reason": "회사 실적과의 연결고리 확인",
          "direction": "negative",
          "impact": -4.0
        },
        {
          "headline": "MSFT 주식, 올해 최고 수준 기록: Microsoft, AI 칩 생산량 증가 보도",
          "eventLabel": "실적 발표",
          "publishedAt": 1786380865,
          "sourceUrl": "https://finnhub.io/api/news?id=d83f4d38a5ddf96afc007fea6d9b45885d617167e90700791ab7fc9ecca51282",
          "verificationStatus": "needs_confirmation",
          "reason": "사업·실적 연결 경로 확인 필요",
          "direction": "negative",
          "impact": -2.0
        },
        {
          "headline": "Apple, iPhone, MacBook용 CXMT 중국 메모리 칩 테스트",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1786368357,
          "sourceUrl": "https://finnhub.io/api/news?id=6fa7b31205424356e183cae0c4e58fa7d136ba7b686dc4c903ac8ab01cb3be49",
          "verificationStatus": "needs_confirmation",
          "reason": "회사 실적과의 연결고리 확인",
          "direction": "positive",
          "impact": 4.0
        },
        {
          "headline": "AI 수요로 인해 글로벌 공급이 부족해지면서 Apple이 CXMT 메모리 칩을 테스트한 것으로 알려졌습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1786357009,
          "sourceUrl": "https://finnhub.io/api/news?id=daec81ef0e6a5b48ede68e5921b32f148fa8271401fac142ced8652aa74cc2ce",
          "verificationStatus": "needs_confirmation",
          "reason": "회사 실적과의 연결고리 확인",
          "direction": "positive",
          "impact": 4.0
        }
      ],
      "topPositive": [
        "사업·실적 연결 경로 확인 필요",
        "회사 실적과의 연결고리 확인",
        "회사 실적과의 연결고리 확인"
      ],
      "topNegative": [
        "가격 전가 시 마진 방어, 판매량·교체주기 둔화 위험",
        "회사 실적과의 연결고리 확인",
        "사업·실적 연결 경로 확인 필요"
      ],
      "nextChecks": [
        "다음 실적의 매출·EPS·마진",
        "핵심 고객 수요·CAPEX",
        "FCF와 부채·CAPEX 변화"
      ],
      "theses": [
        {
          "id": "growth",
          "name": "성장 Thesis",
          "statement": "매출·EPS 성장 전망이 유지되고 본업 수익성이 함께 개선된다.",
          "status": "intact",
          "score": 15.8,
          "confidence": 100,
          "falsificationRules": [
            "내년 매출·EPS 추정치가 함께 하향",
            "매출 둔화와 마진 하락이 동시에 확인"
          ]
        },
        {
          "id": "cashFlow",
          "name": "현금창출 Thesis",
          "statement": "본업 성장이 영업현금과 잉여현금흐름으로 전환된다.",
          "status": "intact",
          "score": 15.4,
          "confidence": 100,
          "falsificationRules": [
            "FCF가 2개 연도 연속 감소",
            "OCF 감소와 CAPEX 부담 증가가 동시에 발생"
          ]
        },
        {
          "id": "resilience",
          "name": "경쟁·재무 Thesis",
          "statement": "경쟁·고객 집중·재무 부담이 장기 사업 경쟁력을 훼손하지 않는다.",
          "status": "intact",
          "score": -3.0,
          "confidence": 100,
          "falsificationRules": [
            "핵심 고객 이탈 또는 점유율 하락이 공식 수치로 확인",
            "부채 부담 상승과 사업 리스크 확대가 동시 발생"
          ]
        }
      ],
      "scenarios": {
        "bull": 28.3,
        "base": 38.2,
        "bear": 33.5
      },
      "alerts": [],
      "businessProfile": {
        "updatedAt": null,
        "customers": [],
        "strengths": [],
        "risks": [],
        "sources": [],
        "latestChanges": [
          {
            "headline": "Apple 제품을 구매하시나요? 비용을 지불하는 데 도움이 되는 4가지 도구",
            "eventLabel": "공급망 문제",
            "publishedAt": 1787212801,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=a03b08e1b2008c44e24564b7729d0b10f7da5eb33418846cce278009d8d4233d",
            "reason": "가격 전가 시 마진 방어, 판매량·교체주기 둔화 위험"
          },
          {
            "headline": "기술 하드웨어, 스토리지 및 주변 장치 산업에서 Apple과 업계 경쟁사 비교",
            "eventLabel": "경쟁사 기술·시장 진입",
            "publishedAt": 1787119115,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=9c43c3f8c098b3de957c02804e4fcfc2dca39323873cbbb19061f40e998f2067",
            "reason": "회사 실적과의 연결고리 확인"
          },
          {
            "headline": "Google의 새로운 Pixel 11은 Gemini를 Apple과의 AI 전화 전쟁의 중심에 놓습니다.",
            "eventLabel": "공급망 문제",
            "publishedAt": 1786528801,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=5dde94cd3b8300f913fde5fb98794701c69bc5e0d4e729aee0641f5b85b2c50e",
            "reason": "사업·실적 연결 경로 확인 필요"
          },
          {
            "headline": "보고된 Apple 공급업체 위협에도 불구하고 마이크론 주가 상승",
            "eventLabel": "주요 고객 계약",
            "publishedAt": 1786392471,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=51fea410f251d2efb829da27462a179e0ef0fcf273b56fb0a616fd68fe522364",
            "reason": "사업·실적 연결 경로 확인 필요"
          },
          {
            "headline": "애플이 전 세계적인 부족 상황 속에서 아이폰, 맥북용 중국산 메모리 칩을 테스트하고 있는 것으로 알려졌습니다.",
            "eventLabel": "공급망 문제",
            "publishedAt": 1786385747,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=29aaf140cb2ed909321ab2a99380f77b4f570ee5733f216a0da8df65ad82f421",
            "reason": "회사 실적과의 연결고리 확인"
          },
          {
            "headline": "MSFT 주식, 올해 최고 수준 기록: Microsoft, AI 칩 생산량 증가 보도",
            "eventLabel": "실적 발표",
            "publishedAt": 1786380865,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=d83f4d38a5ddf96afc007fea6d9b45885d617167e90700791ab7fc9ecca51282",
            "reason": "사업·실적 연결 경로 확인 필요"
          }
        ],
        "status": "available",
        "notice": "정성 사업정보는 마지막 확인일 이후의 구조화 중요 뉴스를 별도 변경 항목으로 덧붙입니다."
      },
      "earningsQualityReview": {
        "status": "reviewed",
        "period": "Q2'26",
        "reportedNetIncome": 29789000000.0,
        "normalizedIncome": 29789000000.0,
        "normalizedGap": 0.0,
        "findings": [],
        "coreRead": "현재 수집된 항목만 보면 최신 기간 순이익을 크게 왜곡하는 특이항목은 확인되지 않았습니다.",
        "manualContext": null
      },
      "valuationScenario": {
        "status": "available",
        "price": 317.09,
        "currentEps": 8.80532,
        "nextEps": 9.53224,
        "epsGrowth": 0.0826,
        "marketPe": 36.01,
        "conservative": 219.69,
        "base": 343.27,
        "optimistic": 532.06,
        "currentVsBase": -0.0763,
        "analystTargetMean": 326.3415,
        "analystTargetLow": 215.0,
        "analystTargetHigh": 400.0,
        "evidenceWeights": {
          "bull": 28.3,
          "base": 38.2,
          "bear": 33.5
        },
        "integratedRead": "현재 시장 PER이 유지된다는 가정의 기준가 아래입니다. 실적 전망 유지 여부를 확인하며 접근할 구간입니다.",
        "formula": "기준=내년 예상 EPS×현재 시장 PER, 보수=기준×0.64, 낙관=기준×1.55",
        "notice": "가격 밴드는 매수 신호가 아니며 EPS 하향·기업 악재가 생기면 즉시 다시 계산합니다."
      },
      "trackRecord": {
        "status": "collecting",
        "settledCount": 0,
        "hitRate20": null,
        "brier20": null,
        "avgExcess20": null,
        "confidenceAdjustment": 0.0,
        "recentOutcomes": [],
        "notice": "20거래일 SPY 대비 방향 적중과 Brier score를 기록하며, 8건 전에는 신뢰도를 보정하지 않습니다."
      },
      "history": [
        {
          "asOf": 1787313613.7807624,
          "date": "2026-08-21",
          "fundamentalScore": 8.4,
          "confidence": 100,
          "fundamentalDamage": 0,
          "thesisDamage": 42.0,
          "thesisStatus": "damaged",
          "scenarioWeights": {
            "bull": 28.3,
            "base": 38.2,
            "bear": 33.5
          },
          "currentPrice": 317.0899963378906,
          "valuationGap": -0.0763,
          "theses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        }
      ],
      "thesisHistory": [
        {
          "asOf": 1787313613.7807624,
          "date": "2026-08-21",
          "overallStatus": "damaged",
          "statuses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        }
      ],
      "limitations": [
        "점수는 현재 캐시에 있는 공시·컨센서스·구조화 뉴스만 사용합니다.",
        "시나리오 수치는 예측 확률이 아니라 현재 근거의 상대 가중치입니다.",
        "특이항목 원인은 공식 공시 또는 수동 검증 기록이 없으면 추정하지 않습니다."
      ]
    },
    "TSLA": {
      "ticker": "TSLA",
      "asOf": 1787313613.7807624,
      "modelVersion": "fundamental-v1.2",
      "fundamentalScore": 14.2,
      "confidence": 85.0,
      "fundamentalSigma": null,
      "fundamentalSigmaProgress": {
        "status": "collecting",
        "collected": 1,
        "required": 8,
        "remaining": 7,
        "expectedReadyDate": "2026-08-28",
        "notice": "같은 KST 날짜의 반복 실행은 한 건으로 교체하며, 임의 과거 점수를 만들어 채우지 않습니다."
      },
      "priceSigma": 1.33,
      "priceDamage": 44.3,
      "fundamentalDamage": 0,
      "thesisDamage": 0,
      "thesisStatus": "intact",
      "damageRead": "현재 가격 변동과 펀더멘털 변화 사이에 큰 괴리는 확인되지 않았습니다.",
      "dimensions": {
        "growth": {
          "score": 14.819999999999999,
          "applicable": true
        },
        "earningsQuality": {
          "score": -4.516867158403096,
          "applicable": true
        },
        "cashFlow": {
          "score": 56.84724937168389,
          "applicable": true
        },
        "competitivePosition": {
          "score": 0.0,
          "applicable": true
        },
        "customerDemand": {
          "score": 0.0,
          "applicable": true
        },
        "balanceSheet": {
          "score": 19.0316,
          "applicable": true
        }
      },
      "officialEvidence": [
        {
          "id": "sec-annual",
          "kind": "confirmed_fact",
          "label": "연간 재무 수치",
          "source": "SEC Company Facts",
          "period": "2025",
          "detail": "매출·영업이익·순이익·현금흐름 핵심 항목을 SEC 원문 수치로 교차검증했습니다.",
          "url": "https://data.sec.gov/api/xbrl/companyfacts/"
        },
        {
          "id": "sec-quarterly",
          "kind": "confirmed_fact",
          "label": "분기 손익 수치",
          "source": "SEC Company Facts",
          "period": "Q2'26",
          "detail": "최근 분기 매출·영업이익·순이익을 SEC 3개월 보고값과 교차검증했습니다.",
          "url": "https://data.sec.gov/api/xbrl/companyfacts/"
        }
      ],
      "evidenceSummary": {
        "confirmedFacts": 2,
        "credibleReports": 0,
        "needsConfirmation": 1,
        "aiInferences": 1
      },
      "evidence": [
        {
          "headline": "Tesla Optimus 라이벌 Unitree Robotics, 상하이 데뷔에서 629% 폭발, 일시적으로 660억 달러 가치 달성",
          "eventLabel": "경쟁사 공급 계약",
          "publishedAt": 1787108869,
          "sourceUrl": "https://finnhub.io/api/news?id=f1e9f6f7defea1395e1ca247dcfabde935aa8775c4294cbe5f77f86a7ab1563e",
          "verificationStatus": "needs_confirmation",
          "reason": "사업·실적 연결 경로 확인 필요",
          "direction": "positive",
          "impact": 3.0
        }
      ],
      "topPositive": [
        "사업·실적 연결 경로 확인 필요"
      ],
      "topNegative": [],
      "nextChecks": [
        "다음 실적의 매출·EPS·마진",
        "핵심 고객 수요·CAPEX",
        "FCF와 부채·CAPEX 변화"
      ],
      "theses": [
        {
          "id": "growth",
          "name": "성장 Thesis",
          "statement": "매출·EPS 성장 전망이 유지되고 본업 수익성이 함께 개선된다.",
          "status": "intact",
          "score": 14.8,
          "confidence": 85.0,
          "falsificationRules": [
            "내년 매출·EPS 추정치가 함께 하향",
            "매출 둔화와 마진 하락이 동시에 확인"
          ]
        },
        {
          "id": "cashFlow",
          "name": "현금창출 Thesis",
          "statement": "본업 성장이 영업현금과 잉여현금흐름으로 전환된다.",
          "status": "strengthening",
          "score": 56.8,
          "confidence": 85.0,
          "falsificationRules": [
            "FCF가 2개 연도 연속 감소",
            "OCF 감소와 CAPEX 부담 증가가 동시에 발생"
          ]
        },
        {
          "id": "resilience",
          "name": "경쟁·재무 Thesis",
          "statement": "경쟁·고객 집중·재무 부담이 장기 사업 경쟁력을 훼손하지 않는다.",
          "status": "intact",
          "score": 6.3,
          "confidence": 85.0,
          "falsificationRules": [
            "핵심 고객 이탈 또는 점유율 하락이 공식 수치로 확인",
            "부채 부담 상승과 사업 리스크 확대가 동시 발생"
          ]
        }
      ],
      "scenarios": {
        "bull": 34.1,
        "base": 39.2,
        "bear": 26.7
      },
      "alerts": [],
      "businessProfile": {
        "updatedAt": null,
        "customers": [],
        "strengths": [],
        "risks": [],
        "sources": [],
        "latestChanges": [
          {
            "headline": "Tesla Optimus 라이벌 Unitree Robotics, 상하이 데뷔에서 629% 폭발, 일시적으로 660억 달러 가치 달성",
            "eventLabel": "경쟁사 공급 계약",
            "publishedAt": 1787108869,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=f1e9f6f7defea1395e1ca247dcfabde935aa8775c4294cbe5f77f86a7ab1563e",
            "reason": "사업·실적 연결 경로 확인 필요"
          }
        ],
        "status": "available",
        "notice": "정성 사업정보는 마지막 확인일 이후의 구조화 중요 뉴스를 별도 변경 항목으로 덧붙입니다."
      },
      "earningsQualityReview": {
        "status": "reviewed",
        "period": "Q2'26",
        "reportedNetIncome": 1114000000.0,
        "normalizedIncome": 1114000000.0,
        "normalizedGap": 0.0,
        "findings": [
          {
            "key": "otherNonOperating",
            "label": "기타 영업외손익",
            "amount": 590000000.0,
            "revenueRatio": 0.0209,
            "repeatCount": 3,
            "classification": "recurring_risk",
            "recurrenceRead": "최근 6개 기간 중 두 번 이상 나타나 반복 가능성을 열어둡니다."
          }
        ],
        "coreRead": "보고 순이익에 의미 있는 특이항목이 확인됩니다. 본업은 매출·영업이익·정상화이익을 우선해 읽어야 합니다.",
        "manualContext": null
      },
      "valuationScenario": {
        "status": "available",
        "price": 344.26,
        "currentEps": 1.78059,
        "nextEps": 2.17498,
        "epsGrowth": 0.2215,
        "marketPe": 193.34,
        "conservative": 269.13,
        "base": 420.51,
        "optimistic": 651.79,
        "currentVsBase": -0.1813,
        "analystTargetMean": 395.3405,
        "analystTargetLow": 125.0,
        "analystTargetHigh": 600.0,
        "evidenceWeights": {
          "bull": 34.1,
          "base": 39.2,
          "bear": 26.7
        },
        "integratedRead": "현재 시장 PER이 유지된다는 가정의 기준가 아래입니다. 실적 전망 유지 여부를 확인하며 접근할 구간입니다.",
        "formula": "기준=내년 예상 EPS×현재 시장 PER, 보수=기준×0.64, 낙관=기준×1.55",
        "notice": "가격 밴드는 매수 신호가 아니며 EPS 하향·기업 악재가 생기면 즉시 다시 계산합니다."
      },
      "trackRecord": {
        "status": "collecting",
        "settledCount": 0,
        "hitRate20": null,
        "brier20": null,
        "avgExcess20": null,
        "confidenceAdjustment": 0.0,
        "recentOutcomes": [],
        "notice": "20거래일 SPY 대비 방향 적중과 Brier score를 기록하며, 8건 전에는 신뢰도를 보정하지 않습니다."
      },
      "history": [
        {
          "asOf": 1787313613.7807624,
          "date": "2026-08-21",
          "fundamentalScore": 14.2,
          "confidence": 85.0,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 34.1,
            "base": 39.2,
            "bear": 26.7
          },
          "currentPrice": 344.260009765625,
          "valuationGap": -0.1813,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        }
      ],
      "thesisHistory": [
        {
          "asOf": 1787313613.7807624,
          "date": "2026-08-21",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        }
      ],
      "limitations": [
        "점수는 현재 캐시에 있는 공시·컨센서스·구조화 뉴스만 사용합니다.",
        "시나리오 수치는 예측 확률이 아니라 현재 근거의 상대 가중치입니다.",
        "특이항목 원인은 공식 공시 또는 수동 검증 기록이 없으면 추정하지 않습니다."
      ]
    },
    "ORCL": {
      "ticker": "ORCL",
      "asOf": 1787313613.7807624,
      "modelVersion": "fundamental-v1.2",
      "fundamentalScore": 28.7,
      "confidence": 100,
      "fundamentalSigma": null,
      "fundamentalSigmaProgress": {
        "status": "collecting",
        "collected": 1,
        "required": 8,
        "remaining": 7,
        "expectedReadyDate": "2026-08-28",
        "notice": "같은 KST 날짜의 반복 실행은 한 건으로 교체하며, 임의 과거 점수를 만들어 채우지 않습니다."
      },
      "priceSigma": 0.24,
      "priceDamage": 7.9,
      "fundamentalDamage": 0,
      "thesisDamage": 0,
      "thesisStatus": "strengthening",
      "damageRead": "현재 가격 변동과 펀더멘털 변화 사이에 큰 괴리는 확인되지 않았습니다.",
      "dimensions": {
        "growth": {
          "score": 47.25666666666666,
          "applicable": true
        },
        "earningsQuality": {
          "score": 14.779429052325456,
          "applicable": true
        },
        "cashFlow": {
          "score": 100,
          "applicable": true
        },
        "competitivePosition": {
          "score": 0.0,
          "applicable": true
        },
        "customerDemand": {
          "score": 0.0,
          "applicable": true
        },
        "balanceSheet": {
          "score": -7.078300000000002,
          "applicable": true
        }
      },
      "officialEvidence": [
        {
          "id": "sec-annual",
          "kind": "confirmed_fact",
          "label": "연간 재무 수치",
          "source": "SEC Company Facts",
          "period": "2026",
          "detail": "매출·영업이익·순이익·현금흐름 핵심 항목을 SEC 원문 수치로 교차검증했습니다.",
          "url": "https://data.sec.gov/api/xbrl/companyfacts/"
        },
        {
          "id": "sec-quarterly",
          "kind": "confirmed_fact",
          "label": "분기 손익 수치",
          "source": "SEC Company Facts",
          "period": "Q2'26",
          "detail": "최근 분기 매출·영업이익·순이익을 SEC 3개월 보고값과 교차검증했습니다.",
          "url": "https://data.sec.gov/api/xbrl/companyfacts/"
        }
      ],
      "evidenceSummary": {
        "confirmedFacts": 2,
        "credibleReports": 0,
        "needsConfirmation": 6,
        "aiInferences": 6
      },
      "evidence": [
        {
          "headline": "Quantinuum-Oracle 파트너십이 엔터프라이즈 컴퓨팅에 미치는 영향",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1787219040,
          "sourceUrl": "https://finnhub.io/api/news?id=26e39312b0a20c9b8e439281fdf5f2daa8121afdd5d8536f433547e1c3cc9c96",
          "verificationStatus": "needs_confirmation",
          "reason": "OCI 서비스 범위 확대 가능성, 매출화 시점 불확실",
          "direction": "positive",
          "impact": 4.0
        },
        {
          "headline": "Oracle은 X에 대해 \"Jupiter 프로젝트는 일정대로 유지되고 있으며 프로젝트를 발전시키기 위해 파트너와 계속 긴밀하게 협력하고 있습니다\"라고 게시했습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1786722030,
          "sourceUrl": "https://finnhub.io/api/news?id=2a67af2b029a3acd2bb45f4837b0db9ac60d0d62f0f4d983e7779b622cc60c91",
          "verificationStatus": "needs_confirmation",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "direction": "positive",
          "impact": 4.0
        },
        {
          "headline": "새로운 AI 및 Quantum 거래를 통해 Oracle(ORCL)은 무엇을 구축하고 있습니까?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1786637443,
          "sourceUrl": "https://finnhub.io/api/news?id=f83d95c50c2851a3ac8fc9f8de93137a2207f286a8a879c84b5c044690283171",
          "verificationStatus": "needs_confirmation",
          "reason": "OCI 서비스 범위 확대 가능성, 매출화 시점 불확실",
          "direction": "positive",
          "impact": 4.0
        },
        {
          "headline": "Oracle 파트너십을 맺은 Quantinuum CEO: '빙산의 일각'",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1786536581,
          "sourceUrl": "https://finnhub.io/api/news?id=d79f08414cca50954c6b154b44a0879cf7c5103e710110d575988f156f77dc86",
          "verificationStatus": "needs_confirmation",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "direction": "positive",
          "impact": 4.0
        },
        {
          "headline": "Quantum Cloud 경쟁이 가열됨에 따라 Quantinuum, Oracle 계약 성사: '엔터프라이즈 컴퓨팅의 다음 단계'",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1786514798,
          "sourceUrl": "https://finnhub.io/api/news?id=22aa240f54a202d18a701589ae11d3cc64385d6f83e41a447c68b041e86befd6",
          "verificationStatus": "needs_confirmation",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "direction": "positive",
          "impact": 4.0
        },
        {
          "headline": "Quantinuum, Oracle Cloud 인프라에 Quantum 컴퓨팅을 도입하기 위해 Oracle과 다년간의 전략적 파트너십 체결",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1786464233,
          "sourceUrl": "https://finnhub.io/api/news?id=d734868e811b464cf00c58c7a1cf76cbab3039307bb6833dd33fa42f4d5ffab4",
          "verificationStatus": "needs_confirmation",
          "reason": "OCI 서비스 범위 확대 가능성, 매출화 시점 불확실",
          "direction": "positive",
          "impact": 4.0
        }
      ],
      "topPositive": [
        "OCI 서비스 범위 확대 가능성, 매출화 시점 불확실",
        "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
        "OCI 서비스 범위 확대 가능성, 매출화 시점 불확실"
      ],
      "topNegative": [],
      "nextChecks": [
        "다음 실적의 매출·EPS·마진",
        "핵심 고객 수요·CAPEX",
        "FCF와 부채·CAPEX 변화"
      ],
      "theses": [
        {
          "id": "growth",
          "name": "성장 Thesis",
          "statement": "매출·EPS 성장 전망이 유지되고 본업 수익성이 함께 개선된다.",
          "status": "strengthening",
          "score": 47.3,
          "confidence": 100,
          "falsificationRules": [
            "내년 매출·EPS 추정치가 함께 하향",
            "매출 둔화와 마진 하락이 동시에 확인"
          ]
        },
        {
          "id": "cashFlow",
          "name": "현금창출 Thesis",
          "statement": "본업 성장이 영업현금과 잉여현금흐름으로 전환된다.",
          "status": "strengthening",
          "score": 100,
          "confidence": 100,
          "falsificationRules": [
            "FCF가 2개 연도 연속 감소",
            "OCF 감소와 CAPEX 부담 증가가 동시에 발생"
          ]
        },
        {
          "id": "resilience",
          "name": "경쟁·재무 Thesis",
          "statement": "경쟁·고객 집중·재무 부담이 장기 사업 경쟁력을 훼손하지 않는다.",
          "status": "intact",
          "score": -2.4,
          "confidence": 100,
          "falsificationRules": [
            "핵심 고객 이탈 또는 점유율 하락이 공식 수치로 확인",
            "부채 부담 상승과 사업 리스크 확대가 동시 발생"
          ]
        }
      ],
      "scenarios": {
        "bull": 37.6,
        "base": 37.9,
        "bear": 24.5
      },
      "alerts": [],
      "businessProfile": {
        "updatedAt": null,
        "customers": [],
        "strengths": [],
        "risks": [],
        "sources": [],
        "latestChanges": [
          {
            "headline": "Quantinuum-Oracle 파트너십이 엔터프라이즈 컴퓨팅에 미치는 영향",
            "eventLabel": "장기 공급계약",
            "publishedAt": 1787219040,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=26e39312b0a20c9b8e439281fdf5f2daa8121afdd5d8536f433547e1c3cc9c96",
            "reason": "OCI 서비스 범위 확대 가능성, 매출화 시점 불확실"
          },
          {
            "headline": "Oracle은 X에 대해 \"Jupiter 프로젝트는 일정대로 유지되고 있으며 프로젝트를 발전시키기 위해 파트너와 계속 긴밀하게 협력하고 있습니다\"라고 게시했습니다.",
            "eventLabel": "주요 고객 계약",
            "publishedAt": 1786722030,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=2a67af2b029a3acd2bb45f4837b0db9ac60d0d62f0f4d983e7779b622cc60c91",
            "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
          },
          {
            "headline": "새로운 AI 및 Quantum 거래를 통해 Oracle(ORCL)은 무엇을 구축하고 있습니까?",
            "eventLabel": "장기 공급계약",
            "publishedAt": 1786637443,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=f83d95c50c2851a3ac8fc9f8de93137a2207f286a8a879c84b5c044690283171",
            "reason": "OCI 서비스 범위 확대 가능성, 매출화 시점 불확실"
          },
          {
            "headline": "Oracle 파트너십을 맺은 Quantinuum CEO: '빙산의 일각'",
            "eventLabel": "주요 고객 계약",
            "publishedAt": 1786536581,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=d79f08414cca50954c6b154b44a0879cf7c5103e710110d575988f156f77dc86",
            "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
          },
          {
            "headline": "Quantum Cloud 경쟁이 가열됨에 따라 Quantinuum, Oracle 계약 성사: '엔터프라이즈 컴퓨팅의 다음 단계'",
            "eventLabel": "주요 고객 계약",
            "publishedAt": 1786514798,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=22aa240f54a202d18a701589ae11d3cc64385d6f83e41a447c68b041e86befd6",
            "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
          },
          {
            "headline": "Quantinuum, Oracle Cloud 인프라에 Quantum 컴퓨팅을 도입하기 위해 Oracle과 다년간의 전략적 파트너십 체결",
            "eventLabel": "장기 공급계약",
            "publishedAt": 1786464233,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=d734868e811b464cf00c58c7a1cf76cbab3039307bb6833dd33fa42f4d5ffab4",
            "reason": "OCI 서비스 범위 확대 가능성, 매출화 시점 불확실"
          }
        ],
        "status": "available",
        "notice": "정성 사업정보는 마지막 확인일 이후의 구조화 중요 뉴스를 별도 변경 항목으로 덧붙입니다."
      },
      "earningsQualityReview": {
        "status": "reviewed",
        "period": "Q2'26",
        "reportedNetIncome": 4304000000.0,
        "normalizedIncome": 4677563792.140063,
        "normalizedGap": -0.0799,
        "findings": [
          {
            "key": "unusualItems",
            "label": "비경상 항목",
            "amount": -466000000.0,
            "revenueRatio": 0.0243,
            "repeatCount": 3,
            "classification": "recurring_risk",
            "recurrenceRead": "최근 6개 기간 중 두 번 이상 나타나 반복 가능성을 열어둡니다."
          },
          {
            "key": "unusualItemsExGoodwill",
            "label": "영업권 제외 비경상 항목",
            "amount": -466000000.0,
            "revenueRatio": 0.0243,
            "repeatCount": 3,
            "classification": "recurring_risk",
            "recurrenceRead": "최근 6개 기간 중 두 번 이상 나타나 반복 가능성을 열어둡니다."
          },
          {
            "key": "specialIncomeCharges",
            "label": "특별손익",
            "amount": -822000000.0,
            "revenueRatio": 0.0428,
            "repeatCount": 3,
            "classification": "recurring_risk",
            "recurrenceRead": "최근 6개 기간 중 두 번 이상 나타나 반복 가능성을 열어둡니다."
          },
          {
            "key": "restructuring",
            "label": "구조조정 비용",
            "amount": 822000000.0,
            "revenueRatio": 0.0428,
            "repeatCount": 3,
            "classification": "recurring_risk",
            "recurrenceRead": "최근 6개 기간 중 두 번 이상 나타나 반복 가능성을 열어둡니다."
          }
        ],
        "coreRead": "보고 순이익에 의미 있는 특이항목이 확인됩니다. 본업은 매출·영업이익·정상화이익을 우선해 읽어야 합니다.",
        "manualContext": null
      },
      "valuationScenario": {
        "status": "available",
        "price": 142.15,
        "currentEps": 8.05313,
        "nextEps": 10.91494,
        "epsGrowth": 0.3554,
        "marketPe": 17.65,
        "conservative": 123.31,
        "base": 192.67,
        "optimistic": 298.63,
        "currentVsBase": -0.2622,
        "analystTargetMean": 246.42635,
        "analystTargetLow": 110.0,
        "analystTargetHigh": 400.0,
        "evidenceWeights": {
          "bull": 37.6,
          "base": 37.9,
          "bear": 24.5
        },
        "integratedRead": "현재 시장 PER이 유지된다는 가정의 기준가 아래입니다. 실적 전망 유지 여부를 확인하며 접근할 구간입니다.",
        "formula": "기준=내년 예상 EPS×현재 시장 PER, 보수=기준×0.64, 낙관=기준×1.55",
        "notice": "가격 밴드는 매수 신호가 아니며 EPS 하향·기업 악재가 생기면 즉시 다시 계산합니다."
      },
      "trackRecord": {
        "status": "collecting",
        "settledCount": 0,
        "hitRate20": null,
        "brier20": null,
        "avgExcess20": null,
        "confidenceAdjustment": 0.0,
        "recentOutcomes": [],
        "notice": "20거래일 SPY 대비 방향 적중과 Brier score를 기록하며, 8건 전에는 신뢰도를 보정하지 않습니다."
      },
      "history": [
        {
          "asOf": 1787313613.7807624,
          "date": "2026-08-21",
          "fundamentalScore": 28.7,
          "confidence": 100,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "strengthening",
          "scenarioWeights": {
            "bull": 37.6,
            "base": 37.9,
            "bear": 24.5
          },
          "currentPrice": 142.14999389648438,
          "valuationGap": -0.2622,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        }
      ],
      "thesisHistory": [
        {
          "asOf": 1787313613.7807624,
          "date": "2026-08-21",
          "overallStatus": "strengthening",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        }
      ],
      "limitations": [
        "점수는 현재 캐시에 있는 공시·컨센서스·구조화 뉴스만 사용합니다.",
        "시나리오 수치는 예측 확률이 아니라 현재 근거의 상대 가중치입니다.",
        "특이항목 원인은 공식 공시 또는 수동 검증 기록이 없으면 추정하지 않습니다."
      ]
    },
    "CRM": {
      "ticker": "CRM",
      "asOf": 1787313613.7807624,
      "modelVersion": "fundamental-v1.2",
      "fundamentalScore": 9.7,
      "confidence": 85.0,
      "fundamentalSigma": null,
      "fundamentalSigmaProgress": {
        "status": "collecting",
        "collected": 1,
        "required": 8,
        "remaining": 7,
        "expectedReadyDate": "2026-08-28",
        "notice": "같은 KST 날짜의 반복 실행은 한 건으로 교체하며, 임의 과거 점수를 만들어 채우지 않습니다."
      },
      "priceSigma": 1.67,
      "priceDamage": 55.5,
      "fundamentalDamage": 0,
      "thesisDamage": 0,
      "thesisStatus": "intact",
      "damageRead": "가격 조정이 펀더멘털 변화보다 큽니다. 수급·멀티플 조정 가능성이 있으나, 다음 실적과 중요 뉴스를 확인해야 합니다.",
      "dimensions": {
        "growth": {
          "score": 6.4433333333333325,
          "applicable": true
        },
        "earningsQuality": {
          "score": 12.158876186290279,
          "applicable": true
        },
        "cashFlow": {
          "score": 27.913784783657718,
          "applicable": true
        },
        "competitivePosition": {
          "score": 0.0,
          "applicable": true
        },
        "customerDemand": {
          "score": 0.0,
          "applicable": true
        },
        "balanceSheet": {
          "score": 9.6734,
          "applicable": true
        }
      },
      "officialEvidence": [
        {
          "id": "sec-quarterly",
          "kind": "confirmed_fact",
          "label": "분기 손익 수치",
          "source": "SEC Company Facts",
          "period": "Q2'26",
          "detail": "최근 분기 매출·영업이익·순이익을 SEC 3개월 보고값과 교차검증했습니다.",
          "url": "https://data.sec.gov/api/xbrl/companyfacts/"
        }
      ],
      "evidenceSummary": {
        "confirmedFacts": 1,
        "credibleReports": 0,
        "needsConfirmation": 1,
        "aiInferences": 1
      },
      "evidence": [
        {
          "headline": "BMO Capital은 Salesforce에서 우수한 성과를 유지하고 목표 가격을 230달러로 높였습니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1787232003,
          "sourceUrl": "https://finnhub.io/api/news?id=577f00b4dc8186ab9553d9fc43ff117d55928e5bfa1319baa5b1f9729b9f1c4b",
          "verificationStatus": "needs_confirmation",
          "reason": "사업·실적 연결 경로 확인 필요",
          "direction": "positive",
          "impact": 1.0
        }
      ],
      "topPositive": [
        "사업·실적 연결 경로 확인 필요"
      ],
      "topNegative": [],
      "nextChecks": [
        "다음 실적의 매출·EPS·마진",
        "핵심 고객 수요·CAPEX",
        "FCF와 부채·CAPEX 변화"
      ],
      "theses": [
        {
          "id": "growth",
          "name": "성장 Thesis",
          "statement": "매출·EPS 성장 전망이 유지되고 본업 수익성이 함께 개선된다.",
          "status": "intact",
          "score": 6.4,
          "confidence": 85.0,
          "falsificationRules": [
            "내년 매출·EPS 추정치가 함께 하향",
            "매출 둔화와 마진 하락이 동시에 확인"
          ]
        },
        {
          "id": "cashFlow",
          "name": "현금창출 Thesis",
          "statement": "본업 성장이 영업현금과 잉여현금흐름으로 전환된다.",
          "status": "strengthening",
          "score": 27.9,
          "confidence": 85.0,
          "falsificationRules": [
            "FCF가 2개 연도 연속 감소",
            "OCF 감소와 CAPEX 부담 증가가 동시에 발생"
          ]
        },
        {
          "id": "resilience",
          "name": "경쟁·재무 Thesis",
          "statement": "경쟁·고객 집중·재무 부담이 장기 사업 경쟁력을 훼손하지 않는다.",
          "status": "intact",
          "score": 3.2,
          "confidence": 85.0,
          "falsificationRules": [
            "핵심 고객 이탈 또는 점유율 하락이 공식 수치로 확인",
            "부채 부담 상승과 사업 리스크 확대가 동시 발생"
          ]
        }
      ],
      "scenarios": {
        "bull": 33.2,
        "base": 39.5,
        "bear": 27.3
      },
      "alerts": [],
      "businessProfile": {
        "updatedAt": null,
        "customers": [],
        "strengths": [],
        "risks": [],
        "sources": [],
        "latestChanges": [
          {
            "headline": "BMO Capital은 Salesforce에서 우수한 성과를 유지하고 목표 가격을 230달러로 높였습니다.",
            "eventLabel": "애널리스트 목표주가 변경",
            "publishedAt": 1787232003,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=577f00b4dc8186ab9553d9fc43ff117d55928e5bfa1319baa5b1f9729b9f1c4b",
            "reason": "사업·실적 연결 경로 확인 필요"
          }
        ],
        "status": "available",
        "notice": "정성 사업정보는 마지막 확인일 이후의 구조화 중요 뉴스를 별도 변경 항목으로 덧붙입니다."
      },
      "earningsQualityReview": {
        "status": "reviewed",
        "period": "Q2'26",
        "reportedNetIncome": 2107000000.0,
        "normalizedIncome": 1738940000.0,
        "normalizedGap": 0.2117,
        "findings": [
          {
            "key": "unusualItems",
            "label": "비경상 항목",
            "amount": 478000000.0,
            "revenueRatio": 0.0429,
            "repeatCount": 2,
            "classification": "recurring_risk",
            "recurrenceRead": "최근 6개 기간 중 두 번 이상 나타나 반복 가능성을 열어둡니다."
          },
          {
            "key": "unusualItemsExGoodwill",
            "label": "영업권 제외 비경상 항목",
            "amount": 478000000.0,
            "revenueRatio": 0.0429,
            "repeatCount": 2,
            "classification": "recurring_risk",
            "recurrenceRead": "최근 6개 기간 중 두 번 이상 나타나 반복 가능성을 열어둡니다."
          }
        ],
        "coreRead": "보고 순이익에 의미 있는 특이항목이 확인됩니다. 본업은 매출·영업이익·정상화이익을 우선해 읽어야 합니다.",
        "manualContext": null
      },
      "valuationScenario": {
        "status": "available",
        "price": 207.43,
        "currentEps": 14.13589,
        "nextEps": 15.5141,
        "epsGrowth": 0.0975,
        "marketPe": 14.67,
        "conservative": 145.7,
        "base": 227.65,
        "optimistic": 352.86,
        "currentVsBase": -0.0888,
        "analystTargetMean": 243.0798,
        "analystTargetLow": 160.0,
        "analystTargetHigh": 475.0,
        "evidenceWeights": {
          "bull": 33.2,
          "base": 39.5,
          "bear": 27.3
        },
        "integratedRead": "현재 시장 PER이 유지된다는 가정의 기준가 아래입니다. 실적 전망 유지 여부를 확인하며 접근할 구간입니다.",
        "formula": "기준=내년 예상 EPS×현재 시장 PER, 보수=기준×0.64, 낙관=기준×1.55",
        "notice": "가격 밴드는 매수 신호가 아니며 EPS 하향·기업 악재가 생기면 즉시 다시 계산합니다."
      },
      "trackRecord": {
        "status": "collecting",
        "settledCount": 0,
        "hitRate20": null,
        "brier20": null,
        "avgExcess20": null,
        "confidenceAdjustment": 0.0,
        "recentOutcomes": [],
        "notice": "20거래일 SPY 대비 방향 적중과 Brier score를 기록하며, 8건 전에는 신뢰도를 보정하지 않습니다."
      },
      "history": [
        {
          "asOf": 1787313613.7807624,
          "date": "2026-08-21",
          "fundamentalScore": 9.7,
          "confidence": 85.0,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 33.2,
            "base": 39.5,
            "bear": 27.3
          },
          "currentPrice": 207.42999267578125,
          "valuationGap": -0.0888,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        }
      ],
      "thesisHistory": [
        {
          "asOf": 1787313613.7807624,
          "date": "2026-08-21",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        }
      ],
      "limitations": [
        "점수는 현재 캐시에 있는 공시·컨센서스·구조화 뉴스만 사용합니다.",
        "시나리오 수치는 예측 확률이 아니라 현재 근거의 상대 가중치입니다.",
        "특이항목 원인은 공식 공시 또는 수동 검증 기록이 없으면 추정하지 않습니다."
      ]
    },
    "PLTR": {
      "ticker": "PLTR",
      "asOf": 1787313613.7807624,
      "modelVersion": "fundamental-v1.2",
      "fundamentalScore": 34.3,
      "confidence": 90.0,
      "fundamentalSigma": null,
      "fundamentalSigmaProgress": {
        "status": "collecting",
        "collected": 1,
        "required": 8,
        "remaining": 7,
        "expectedReadyDate": "2026-08-28",
        "notice": "같은 KST 날짜의 반복 실행은 한 건으로 교체하며, 임의 과거 점수를 만들어 채우지 않습니다."
      },
      "priceSigma": 0.93,
      "priceDamage": 31.0,
      "fundamentalDamage": 0,
      "thesisDamage": 0,
      "thesisStatus": "intact",
      "damageRead": "현재 가격 변동과 펀더멘털 변화 사이에 큰 괴리는 확인되지 않았습니다.",
      "dimensions": {
        "growth": {
          "score": 35.22333366666667,
          "applicable": true
        },
        "earningsQuality": {
          "score": 73.30639486235981,
          "applicable": true
        },
        "cashFlow": {
          "score": 62.03180600597075,
          "applicable": true
        },
        "competitivePosition": {
          "score": -9.799999999999999,
          "applicable": true
        },
        "customerDemand": {
          "score": 0.0,
          "applicable": true
        },
        "balanceSheet": {
          "score": 20.0,
          "applicable": true
        }
      },
      "officialEvidence": [
        {
          "id": "sec-annual",
          "kind": "confirmed_fact",
          "label": "연간 재무 수치",
          "source": "SEC Company Facts",
          "period": "2025",
          "detail": "매출·영업이익·순이익·현금흐름 핵심 항목을 SEC 원문 수치로 교차검증했습니다.",
          "url": "https://data.sec.gov/api/xbrl/companyfacts/"
        },
        {
          "id": "sec-quarterly",
          "kind": "confirmed_fact",
          "label": "분기 손익 수치",
          "source": "SEC Company Facts",
          "period": "Q2'26",
          "detail": "최근 분기 매출·영업이익·순이익을 SEC 3개월 보고값과 교차검증했습니다.",
          "url": "https://data.sec.gov/api/xbrl/companyfacts/"
        }
      ],
      "evidenceSummary": {
        "confirmedFacts": 2,
        "credibleReports": 0,
        "needsConfirmation": 2,
        "aiInferences": 2
      },
      "evidence": [
        {
          "headline": "비교 연구: Palantir 기술과 소프트웨어 산업의 업계 경쟁업체",
          "eventLabel": "경쟁사 기술·시장 진입",
          "publishedAt": 1786427893,
          "sourceUrl": "https://finnhub.io/api/news?id=54ca110a49a968016a935b5cb0a0753251474f61448e8e40279b6248aefa4127",
          "verificationStatus": "needs_confirmation",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "direction": "negative",
          "impact": -4.0
        },
        {
          "headline": "USA Today, Palantir와 협력하여 청중에 대한 \"실행 가능한 인텔리전스\" 확보",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1786291260,
          "sourceUrl": "https://finnhub.io/api/news?id=2924d64c2d603f07bcf03f9ce4729aed346f0cd5375b69ad2c89d7ce77376fb0",
          "verificationStatus": "needs_confirmation",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "direction": "positive",
          "impact": 4.0
        }
      ],
      "topPositive": [
        "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
      ],
      "topNegative": [
        "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
      ],
      "nextChecks": [
        "다음 실적의 매출·EPS·마진",
        "핵심 고객 수요·CAPEX",
        "FCF와 부채·CAPEX 변화"
      ],
      "theses": [
        {
          "id": "growth",
          "name": "성장 Thesis",
          "statement": "매출·EPS 성장 전망이 유지되고 본업 수익성이 함께 개선된다.",
          "status": "strengthening",
          "score": 35.2,
          "confidence": 90.0,
          "falsificationRules": [
            "내년 매출·EPS 추정치가 함께 하향",
            "매출 둔화와 마진 하락이 동시에 확인"
          ]
        },
        {
          "id": "cashFlow",
          "name": "현금창출 Thesis",
          "statement": "본업 성장이 영업현금과 잉여현금흐름으로 전환된다.",
          "status": "strengthening",
          "score": 62.0,
          "confidence": 90.0,
          "falsificationRules": [
            "FCF가 2개 연도 연속 감소",
            "OCF 감소와 CAPEX 부담 증가가 동시에 발생"
          ]
        },
        {
          "id": "resilience",
          "name": "경쟁·재무 Thesis",
          "statement": "경쟁·고객 집중·재무 부담이 장기 사업 경쟁력을 훼손하지 않는다.",
          "status": "intact",
          "score": 3.4,
          "confidence": 90.0,
          "falsificationRules": [
            "핵심 고객 이탈 또는 점유율 하락이 공식 수치로 확인",
            "부채 부담 상승과 사업 리스크 확대가 동시 발생"
          ]
        }
      ],
      "scenarios": {
        "bull": 38.6,
        "base": 37.7,
        "bear": 23.7
      },
      "alerts": [],
      "businessProfile": {
        "updatedAt": null,
        "customers": [],
        "strengths": [],
        "risks": [],
        "sources": [],
        "latestChanges": [
          {
            "headline": "비교 연구: Palantir 기술과 소프트웨어 산업의 업계 경쟁업체",
            "eventLabel": "경쟁사 기술·시장 진입",
            "publishedAt": 1786427893,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=54ca110a49a968016a935b5cb0a0753251474f61448e8e40279b6248aefa4127",
            "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
          },
          {
            "headline": "USA Today, Palantir와 협력하여 청중에 대한 \"실행 가능한 인텔리전스\" 확보",
            "eventLabel": "주요 고객 계약",
            "publishedAt": 1786291260,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=2924d64c2d603f07bcf03f9ce4729aed346f0cd5375b69ad2c89d7ce77376fb0",
            "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
          }
        ],
        "status": "available",
        "notice": "정성 사업정보는 마지막 확인일 이후의 구조화 중요 뉴스를 별도 변경 항목으로 덧붙입니다."
      },
      "earningsQualityReview": {
        "status": "reviewed",
        "period": "Q2'26",
        "reportedNetIncome": 1061890000.0,
        "normalizedIncome": 1061890000.0,
        "normalizedGap": 0.0,
        "findings": [],
        "coreRead": "현재 수집된 항목만 보면 최신 기간 순이익을 크게 왜곡하는 특이항목은 확인되지 않았습니다.",
        "manualContext": {
          "date": "2026-08-11",
          "period": "5개 분기 연속 마진 상승 (2025-03 마감 24.2% → 2026-03 마감 53.3%)",
          "headline": "순이익률이 5개 분기 연속 상승: 24.2%→32.6%→40.3%→43.3%→53.3%. 매출도 같은 기간 $884M→$1.633B로 거의 2배, 성장률이 오히려 가속(YoY +85%).",
          "oneTime": "1회성 항목 없음 - 조사 범위 안에서는 특정 분기의 회계 이벤트가 발견되지 않았고, 고성장 소프트웨어 사업 특유의 영업레버리지(매출이 늘어도 비용은 덜 늘어나는 구조)로 설명됨. 'Rule of 40'(매출성장률+이익률) 점수가 145%까지 나옴 - 이 지표를 발표하는 기업 중 엔비디아·마이크론·SK하이닉스급 소수만 도달하는 수준.",
          "coreRead": "본업이 정말로 좋아지고 있는 케이스로 보임 - 미국 상업(commercial) 부문 매출이 전년비 +133%, 정부 부문도 +84%로 두 축 다 가속 중. 조정 매출총이익률이 88%로 소프트웨어 사업 특성상 원가 부담이 거의 없는 구조.",
          "forecast": "회사가 2026년 연간 매출 가이던스를 71% 성장으로 상향(컨센서스를 크게 상회)했다는 점에서 경영진 자신감이 높아 보임 - 다음 분기도 상업 부문 성장률(현재 +133%)이 유지되는지가 핵심 지표. 다만 이 종목은 이미 매우 높은 밸류에이션(FWD PER 60배 이상)에 거래되고 있어서, 실적이 아무리 좋아도 '기대치를 얼마나 더 뛰어넘는지'가 주가에는 실적 자체보다 중요할 수 있음 - 실적이 잘 나와도 기대치보다 낮으면 주가는 하락할 수 있다는 점은 밸류에이션 민감도(05 탭)와 함께 봐야 함.",
          "confidence": "매출·마진 성장 숫자는 회사 공식 발표 기준(신뢰도 높음) · 밸류에이션 관련 해석은 일반적 시장 논리에 기반한 추정(신뢰도 중간)"
        }
      },
      "valuationScenario": {
        "status": "available",
        "price": 175.6,
        "currentEps": 1.60272,
        "nextEps": 2.31424,
        "epsGrowth": 0.4439,
        "marketPe": 109.56,
        "conservative": 162.28,
        "base": 253.56,
        "optimistic": 393.01,
        "currentVsBase": -0.3075,
        "analystTargetMean": 191.68,
        "analystTargetLow": 80.0,
        "analystTargetHigh": 255.0,
        "evidenceWeights": {
          "bull": 38.6,
          "base": 37.7,
          "bear": 23.7
        },
        "integratedRead": "현재 시장 PER이 유지된다는 가정의 기준가 아래입니다. 실적 전망 유지 여부를 확인하며 접근할 구간입니다.",
        "formula": "기준=내년 예상 EPS×현재 시장 PER, 보수=기준×0.64, 낙관=기준×1.55",
        "notice": "가격 밴드는 매수 신호가 아니며 EPS 하향·기업 악재가 생기면 즉시 다시 계산합니다."
      },
      "trackRecord": {
        "status": "collecting",
        "settledCount": 0,
        "hitRate20": null,
        "brier20": null,
        "avgExcess20": null,
        "confidenceAdjustment": 0.0,
        "recentOutcomes": [],
        "notice": "20거래일 SPY 대비 방향 적중과 Brier score를 기록하며, 8건 전에는 신뢰도를 보정하지 않습니다."
      },
      "history": [
        {
          "asOf": 1787313613.7807624,
          "date": "2026-08-21",
          "fundamentalScore": 34.3,
          "confidence": 90.0,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 38.6,
            "base": 37.7,
            "bear": 23.7
          },
          "currentPrice": 175.60000610351562,
          "valuationGap": -0.3075,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        }
      ],
      "thesisHistory": [
        {
          "asOf": 1787313613.7807624,
          "date": "2026-08-21",
          "overallStatus": "intact",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        }
      ],
      "limitations": [
        "점수는 현재 캐시에 있는 공시·컨센서스·구조화 뉴스만 사용합니다.",
        "시나리오 수치는 예측 확률이 아니라 현재 근거의 상대 가중치입니다.",
        "특이항목 원인은 공식 공시 또는 수동 검증 기록이 없으면 추정하지 않습니다."
      ]
    },
    "NVDA": {
      "ticker": "NVDA",
      "asOf": 1787313613.7807624,
      "modelVersion": "fundamental-v1.2",
      "fundamentalScore": 28.1,
      "confidence": 100,
      "fundamentalSigma": null,
      "fundamentalSigmaProgress": {
        "status": "collecting",
        "collected": 1,
        "required": 8,
        "remaining": 7,
        "expectedReadyDate": "2026-08-28",
        "notice": "같은 KST 날짜의 반복 실행은 한 건으로 교체하며, 임의 과거 점수를 만들어 채우지 않습니다."
      },
      "priceSigma": 0.4,
      "priceDamage": 13.4,
      "fundamentalDamage": 0,
      "thesisDamage": 0,
      "thesisStatus": "strengthening",
      "damageRead": "현재 가격 변동과 펀더멘털 변화 사이에 큰 괴리는 확인되지 않았습니다.",
      "dimensions": {
        "growth": {
          "score": 49.37333266666667,
          "applicable": true
        },
        "earningsQuality": {
          "score": 26.920391979288127,
          "applicable": true
        },
        "cashFlow": {
          "score": 49.43404597965589,
          "applicable": true
        },
        "competitivePosition": {
          "score": 0.0,
          "applicable": true
        },
        "customerDemand": {
          "score": 0.0,
          "applicable": true
        },
        "balanceSheet": {
          "score": 19.6103,
          "applicable": true
        }
      },
      "officialEvidence": [
        {
          "id": "sec-quarterly",
          "kind": "confirmed_fact",
          "label": "분기 손익 수치",
          "source": "SEC Company Facts",
          "period": "Q2'26",
          "detail": "최근 분기 매출·영업이익·순이익을 SEC 3개월 보고값과 교차검증했습니다.",
          "url": "https://data.sec.gov/api/xbrl/companyfacts/"
        }
      ],
      "evidenceSummary": {
        "confirmedFacts": 1,
        "credibleReports": 0,
        "needsConfirmation": 8,
        "aiInferences": 8
      },
      "evidence": [
        {
          "headline": "'Broadcom, 최신 AI 부채 거래에서 600억 달러 이상 모색' - Bloomberg",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787242528,
          "sourceUrl": "https://finnhub.io/api/news?id=be47314eef46f3b29cea6eeebfb187ebbd7607353b02e61277f02148e320b8f9",
          "verificationStatus": "needs_confirmation",
          "reason": "AI 컴퓨팅 수요 확대 가능성",
          "direction": "positive",
          "impact": 2.0
        },
        {
          "headline": "BMO Capital은 Salesforce에서 우수한 성과를 유지하고 목표 가격을 230달러로 높였습니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1787232003,
          "sourceUrl": "https://finnhub.io/api/news?id=577f00b4dc8186ab9553d9fc43ff117d55928e5bfa1319baa5b1f9729b9f1c4b",
          "verificationStatus": "needs_confirmation",
          "reason": "AI 컴퓨팅 수요 확대 가능성",
          "direction": "positive",
          "impact": 1.0
        },
        {
          "headline": "분석가는 Marvell의 Google AI 거래로 1,200억 달러의 엄청난 기회를 얻을 수 있다고 말합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787228312,
          "sourceUrl": "https://finnhub.io/api/news?id=a1db5cb0d5fde30c9941cc028cc4062f471dd101bfa5a86d3c6b5fb160f71f58",
          "verificationStatus": "needs_confirmation",
          "reason": "AI 컴퓨팅 수요 확대 가능성",
          "direction": "positive",
          "impact": 2.0
        },
        {
          "headline": "Micron, 메모리 및 AI 발전을 위해 100억 달러 규모의 연구실 공개",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787220296,
          "sourceUrl": "https://finnhub.io/api/news?id=51b5addae5e8d30c7c91c2a81c0092a081a4dbe5ff962ef44222663b91c57f83",
          "verificationStatus": "needs_confirmation",
          "reason": "AI 컴퓨팅 수요 확대 가능성",
          "direction": "positive",
          "impact": 2.0
        },
        {
          "headline": "CoreWeave, Nvidia 칩을 위한 월스트리트 경쟁으로 수십억 달러 규모의 Hudson River 거래 성사",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1787219841,
          "sourceUrl": "https://finnhub.io/api/news?id=8cfc4b742ab1b52daa98e5678147ad342d5e9dcaefdd61ad243bcce4ee50dc4c",
          "verificationStatus": "needs_confirmation",
          "reason": "회사 실적과의 연결고리 확인",
          "direction": "positive",
          "impact": 4.0
        },
        {
          "headline": "'중국은 AI 경쟁이 확대됨에 따라 NVIDIA H200 칩에 대한 제한을 완화합니다. 베이징, 미국 라이벌을 따라잡기 위해 선도적인 기술 그룹을 돕기 위해 소규모 선적 허용 - Financial Times",
          "eventLabel": "경쟁사 공급 계약",
          "publishedAt": 1787157622,
          "sourceUrl": "https://finnhub.io/api/news?id=f3b54bed45cae16d5770db0c5b6a6167e474b3acd789e09a814bf92dc512a5f8",
          "verificationStatus": "needs_confirmation",
          "reason": "AI 컴퓨팅 수요 확대 가능성",
          "direction": "positive",
          "impact": 3.0
        },
        {
          "headline": "AMD, 팀 라이언(Tim Ryan)을 이사회에 임명하고, 집주인 은퇴 후 KC McClure 감사 및 재무 위원회 의장으로 임명",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787156452,
          "sourceUrl": "https://finnhub.io/api/news?id=da69e4b6f7750cb1bbe806db07447d752ca772be9efc07c6e091723c8a097974",
          "verificationStatus": "needs_confirmation",
          "reason": "AI 컴퓨팅 수요 확대 가능성",
          "direction": "positive",
          "impact": 2.0
        },
        {
          "headline": "수요일 AMD 주식에 무슨 일이 일어나고 있나요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787131813,
          "sourceUrl": "https://finnhub.io/api/news?id=a4e1d89b47e11158614ea23439c8622abbb8fb1d63e7ce00d78c6704ec52140e",
          "verificationStatus": "needs_confirmation",
          "reason": "AI 컴퓨팅 수요 확대 가능성",
          "direction": "positive",
          "impact": 2.0
        }
      ],
      "topPositive": [
        "AI 컴퓨팅 수요 확대 가능성",
        "AI 컴퓨팅 수요 확대 가능성",
        "AI 컴퓨팅 수요 확대 가능성"
      ],
      "topNegative": [],
      "nextChecks": [
        "다음 실적의 매출·EPS·마진",
        "핵심 고객 수요·CAPEX",
        "FCF와 부채·CAPEX 변화"
      ],
      "theses": [
        {
          "id": "growth",
          "name": "성장 Thesis",
          "statement": "매출·EPS 성장 전망이 유지되고 본업 수익성이 함께 개선된다.",
          "status": "strengthening",
          "score": 49.4,
          "confidence": 100,
          "falsificationRules": [
            "내년 매출·EPS 추정치가 함께 하향",
            "매출 둔화와 마진 하락이 동시에 확인"
          ]
        },
        {
          "id": "cashFlow",
          "name": "현금창출 Thesis",
          "statement": "본업 성장이 영업현금과 잉여현금흐름으로 전환된다.",
          "status": "strengthening",
          "score": 49.4,
          "confidence": 100,
          "falsificationRules": [
            "FCF가 2개 연도 연속 감소",
            "OCF 감소와 CAPEX 부담 증가가 동시에 발생"
          ]
        },
        {
          "id": "resilience",
          "name": "경쟁·재무 Thesis",
          "statement": "경쟁·고객 집중·재무 부담이 장기 사업 경쟁력을 훼손하지 않는다.",
          "status": "intact",
          "score": 6.5,
          "confidence": 100,
          "falsificationRules": [
            "핵심 고객 이탈 또는 점유율 하락이 공식 수치로 확인",
            "부채 부담 상승과 사업 리스크 확대가 동시 발생"
          ]
        }
      ],
      "scenarios": {
        "bull": 37.4,
        "base": 38.1,
        "bear": 24.5
      },
      "alerts": [],
      "businessProfile": {
        "updatedAt": "2026-08-10",
        "customers": [
          "매출의 약 90%가 데이터센터(AI 가속기)에서 발생하며, 소수 대형 클라우드 업체(하이퍼스케일러)에 집중 - 2026년 공시 기준 상위 4개 고객사가 전체 매출의 61%를 차지",
          "다만 고객 다각화도 진행 중: 상위 5개 하이퍼스케일러 이외 고객 비중이 약 40%까지 확대됐고, 국가 단위 AI 인프라 프로젝트('소버린 AI')향 매출만 2026 회계연도 300억달러 이상"
        ],
        "strengths": [
          "AI 가속기(GPU) 시장에서 사실상 독점적 지위",
          "CUDA 소프트웨어 생태계가 강력한 진입장벽 - 경쟁사가 하드웨어를 따라와도 소프트웨어 생태계 대체가 어려움",
          "하이퍼스케일러 의존도를 낮추려는 고객 다각화(소버린 AI 등)가 실제 매출로 나타나는 중"
        ],
        "risks": [
          "⚠️ 고객 집중 리스크 - 소수 대형 고객사의 설비투자(capex) 계획이 조금만 바뀌어도 매출에 큰 영향",
          "⚠️ 중국 수출규제로 타격이 실제로 발생함 - CEO가 '중국 내 점유율이 사실상 0으로 떨어졌다'고 직접 인정(2026년), H20 재고 관련 45억달러 손실 인식. 작년 약 200억달러였던 중국 매출이 올해 1분기 약 45억달러로 급감",
          "AI 인프라 투자 사이클이 꺾이면 밸류에이션 부담이 큰 구조(고성장 기대가 주가에 많이 반영돼 있음)"
        ],
        "sources": [
          {
            "title": "Nvidia Faces Customer Concentration Risk Amid AI Boom (Intellectia)",
            "url": "https://intellectia.ai/news/stock/nvidia-faces-customer-concentration-risk-amid-ai-boom"
          },
          {
            "title": "NVIDIA Customer Concentration: A Big 4 Earnings Preview (Daloopa)",
            "url": "https://daloopa.com/blog/analyst-pov/nvidia-customer-concentration-a-big-4-earnings-preview"
          },
          {
            "title": "Jensen Huang Admitted Nvidia's China Revenue Has Fallen to Zero (The Motley Fool, 2026-06-26)",
            "url": "https://www.fool.com/investing/2026/06/26/jensen-huangs-nvidias-china-zero-20-billion-plan/"
          },
          {
            "title": "NVIDIA Q1 FY 2026 Revenue Jumps 69% Despite China Export Setback (Futurum Group)",
            "url": "https://futurumgroup.com/insights/nvidia-q1-fy-2026-revenue-jumps-69-despite-china-export-setback/"
          }
        ],
        "latestChanges": [
          {
            "headline": "'Broadcom, 최신 AI 부채 거래에서 600억 달러 이상 모색' - Bloomberg",
            "eventLabel": "AI·데이터센터 투자 변화",
            "publishedAt": 1787242528,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=be47314eef46f3b29cea6eeebfb187ebbd7607353b02e61277f02148e320b8f9",
            "reason": "AI 컴퓨팅 수요 확대 가능성"
          },
          {
            "headline": "BMO Capital은 Salesforce에서 우수한 성과를 유지하고 목표 가격을 230달러로 높였습니다.",
            "eventLabel": "애널리스트 목표주가 변경",
            "publishedAt": 1787232003,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=577f00b4dc8186ab9553d9fc43ff117d55928e5bfa1319baa5b1f9729b9f1c4b",
            "reason": "AI 컴퓨팅 수요 확대 가능성"
          },
          {
            "headline": "분석가는 Marvell의 Google AI 거래로 1,200억 달러의 엄청난 기회를 얻을 수 있다고 말합니다.",
            "eventLabel": "AI·데이터센터 투자 변화",
            "publishedAt": 1787228312,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=a1db5cb0d5fde30c9941cc028cc4062f471dd101bfa5a86d3c6b5fb160f71f58",
            "reason": "AI 컴퓨팅 수요 확대 가능성"
          },
          {
            "headline": "Micron, 메모리 및 AI 발전을 위해 100억 달러 규모의 연구실 공개",
            "eventLabel": "AI·데이터센터 투자 변화",
            "publishedAt": 1787220296,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=51b5addae5e8d30c7c91c2a81c0092a081a4dbe5ff962ef44222663b91c57f83",
            "reason": "AI 컴퓨팅 수요 확대 가능성"
          },
          {
            "headline": "CoreWeave, Nvidia 칩을 위한 월스트리트 경쟁으로 수십억 달러 규모의 Hudson River 거래 성사",
            "eventLabel": "주요 고객 계약",
            "publishedAt": 1787219841,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=8cfc4b742ab1b52daa98e5678147ad342d5e9dcaefdd61ad243bcce4ee50dc4c",
            "reason": "회사 실적과의 연결고리 확인"
          },
          {
            "headline": "'중국은 AI 경쟁이 확대됨에 따라 NVIDIA H200 칩에 대한 제한을 완화합니다. 베이징, 미국 라이벌을 따라잡기 위해 선도적인 기술 그룹을 돕기 위해 소규모 선적 허용 - Financial Times",
            "eventLabel": "경쟁사 공급 계약",
            "publishedAt": 1787157622,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=f3b54bed45cae16d5770db0c5b6a6167e474b3acd789e09a814bf92dc512a5f8",
            "reason": "AI 컴퓨팅 수요 확대 가능성"
          }
        ],
        "status": "available",
        "notice": "정성 사업정보는 마지막 확인일 이후의 구조화 중요 뉴스를 별도 변경 항목으로 덧붙입니다."
      },
      "earningsQualityReview": {
        "status": "reviewed",
        "period": "Q2'26",
        "reportedNetIncome": 58321000000.0,
        "normalizedIncome": 58321000000.0,
        "normalizedGap": 0.0,
        "findings": [
          {
            "key": "otherNonOperating",
            "label": "기타 영업외손익",
            "amount": 15929000000.0,
            "revenueRatio": 0.1952,
            "repeatCount": 4,
            "classification": "recurring_risk",
            "recurrenceRead": "최근 6개 기간 중 두 번 이상 나타나 반복 가능성을 열어둡니다."
          }
        ],
        "coreRead": "보고 순이익에 의미 있는 특이항목이 확인됩니다. 본업은 매출·영업이익·정상화이익을 우선해 읽어야 합니다.",
        "manualContext": {
          "date": "2026-08-11",
          "period": "5개 분기 연속 마진 상승 (2025-07 마감 42.6% → 2026-07 마감 71.5%로 추정)",
          "headline": "순이익률이 5개 분기 연속 계속 올라감: 42.6%→56.5%→56.0%→63.1%→71.5%. 매출도 같은 기간 $44.1B→$81.6B로 거의 2배.",
          "oneTime": "1회성 아님 - 특정 분기의 회계 이벤트가 아니라 '블랙웰(Blackwell)' 신제품으로의 믹스 전환이 원인. 블랙웰 GPU 1개당 판매가가 약 $4만 수준인데 생산원가는 $3천~3천5백 수준으로 알려져 있어, 신제품 비중이 늘수록 전사 마진이 구조적으로 올라가는 구조. 블랙웰이 이미 데이터센터 매출의 약 70%를 차지.",
          "coreRead": "이건 진짜 본업 개선 - 회계 눈속임이 아니라 제품 하나(블랙웰)의 가격결정력이 극단적으로 좋다는 뜻. 다만 '마진이 회복(recovered)'이라는 표현이 쓰인 걸 보면 그 이전엔 마진이 눌려있던 시기가 있었다는 뜻인데, 이건 앞서 조사한 중국 수출규제 관련 H20 재고손실($45억)과 시점이 겹침 - 그 일회성 손실이 빠지면서 + 블랙웰 믹스 개선이 겹쳐 마진이 가파르게 올라간 것으로 해석됨.",
          "forecast": "회사 자체 가이던스가 '연말까지 마진 70%대 중반' 목표라고 밝혀서, 최소 다음 1~2개 분기는 지금 수준이 유지되거나 소폭 더 오를 가능성이 높음(비교적 신뢰도 있는 전망 - 회사가 직접 제시한 목표). 다음 위험 요인은 ①중국 수출규제가 더 강화되면 이번에 뺀 것과 별개로 또 다른 일회성 손실이 재발할 수 있음 ②경쟁사(AMD 등)의 저가 대안이 늘면 블랙웰의 가격결정력이 흔들릴 수 있음 - 지금은 둘 다 실현되지 않은 리스크.",
          "confidence": "마진 추이 숫자와 블랙웰 원가/판가 구조는 업계 보도 기준(신뢰도 높음) · 향후 지속 여부는 회사 가이던스 기반이라 상대적으로 신뢰도 중상"
        }
      },
      "valuationScenario": {
        "status": "available",
        "price": 217.3,
        "currentEps": 9.00521,
        "nextEps": 12.99922,
        "epsGrowth": 0.4435,
        "marketPe": 24.13,
        "conservative": 200.75,
        "base": 313.68,
        "optimistic": 486.2,
        "currentVsBase": -0.3072,
        "analystTargetMean": 304.1207,
        "analystTargetLow": 180.0,
        "analystTargetHigh": 500.0,
        "evidenceWeights": {
          "bull": 37.4,
          "base": 38.1,
          "bear": 24.5
        },
        "integratedRead": "현재 시장 PER이 유지된다는 가정의 기준가 아래입니다. 실적 전망 유지 여부를 확인하며 접근할 구간입니다.",
        "formula": "기준=내년 예상 EPS×현재 시장 PER, 보수=기준×0.64, 낙관=기준×1.55",
        "notice": "가격 밴드는 매수 신호가 아니며 EPS 하향·기업 악재가 생기면 즉시 다시 계산합니다."
      },
      "trackRecord": {
        "status": "collecting",
        "settledCount": 0,
        "hitRate20": null,
        "brier20": null,
        "avgExcess20": null,
        "confidenceAdjustment": 0.0,
        "recentOutcomes": [],
        "notice": "20거래일 SPY 대비 방향 적중과 Brier score를 기록하며, 8건 전에는 신뢰도를 보정하지 않습니다."
      },
      "history": [
        {
          "asOf": 1787313613.7807624,
          "date": "2026-08-21",
          "fundamentalScore": 28.1,
          "confidence": 100,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "strengthening",
          "scenarioWeights": {
            "bull": 37.4,
            "base": 38.1,
            "bear": 24.5
          },
          "currentPrice": 217.3000030517578,
          "valuationGap": -0.3072,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        }
      ],
      "thesisHistory": [
        {
          "asOf": 1787313613.7807624,
          "date": "2026-08-21",
          "overallStatus": "strengthening",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        }
      ],
      "limitations": [
        "점수는 현재 캐시에 있는 공시·컨센서스·구조화 뉴스만 사용합니다.",
        "시나리오 수치는 예측 확률이 아니라 현재 근거의 상대 가중치입니다.",
        "특이항목 원인은 공식 공시 또는 수동 검증 기록이 없으면 추정하지 않습니다."
      ]
    },
    "AMD": {
      "ticker": "AMD",
      "asOf": 1787313613.7807624,
      "modelVersion": "fundamental-v1.2",
      "fundamentalScore": 38.6,
      "confidence": 100,
      "fundamentalSigma": null,
      "fundamentalSigmaProgress": {
        "status": "collecting",
        "collected": 1,
        "required": 8,
        "remaining": 7,
        "expectedReadyDate": "2026-08-28",
        "notice": "같은 KST 날짜의 반복 실행은 한 건으로 교체하며, 임의 과거 점수를 만들어 채우지 않습니다."
      },
      "priceSigma": -0.9,
      "priceDamage": 29.9,
      "fundamentalDamage": 0,
      "thesisDamage": 0,
      "thesisStatus": "strengthening",
      "damageRead": "현재 가격 변동과 펀더멘털 변화 사이에 큰 괴리는 확인되지 않았습니다.",
      "dimensions": {
        "growth": {
          "score": 78.82333200000001,
          "applicable": true
        },
        "earningsQuality": {
          "score": 16.094137442458035,
          "applicable": true
        },
        "cashFlow": {
          "score": 100,
          "applicable": true
        },
        "competitivePosition": {
          "score": 0.0,
          "applicable": true
        },
        "customerDemand": {
          "score": 0.0,
          "applicable": true
        },
        "balanceSheet": {
          "score": 4.568000000000001,
          "applicable": true
        }
      },
      "officialEvidence": [
        {
          "id": "sec-annual",
          "kind": "confirmed_fact",
          "label": "연간 재무 수치",
          "source": "SEC Company Facts",
          "period": "2025",
          "detail": "매출·영업이익·순이익·현금흐름 핵심 항목을 SEC 원문 수치로 교차검증했습니다.",
          "url": "https://data.sec.gov/api/xbrl/companyfacts/"
        },
        {
          "id": "sec-quarterly",
          "kind": "confirmed_fact",
          "label": "분기 손익 수치",
          "source": "SEC Company Facts",
          "period": "Q2'26",
          "detail": "최근 분기 매출·영업이익·순이익을 SEC 3개월 보고값과 교차검증했습니다.",
          "url": "https://data.sec.gov/api/xbrl/companyfacts/"
        }
      ],
      "evidenceSummary": {
        "confirmedFacts": 2,
        "credibleReports": 0,
        "needsConfirmation": 8,
        "aiInferences": 8
      },
      "evidence": [
        {
          "headline": "'Broadcom, 최신 AI 부채 거래에서 600억 달러 이상 모색' - Bloomberg",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787242528,
          "sourceUrl": "https://finnhub.io/api/news?id=be47314eef46f3b29cea6eeebfb187ebbd7607353b02e61277f02148e320b8f9",
          "verificationStatus": "needs_confirmation",
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성",
          "direction": "positive",
          "impact": 2.0
        },
        {
          "headline": "BMO Capital은 Salesforce에서 우수한 성과를 유지하고 목표 가격을 230달러로 높였습니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1787232003,
          "sourceUrl": "https://finnhub.io/api/news?id=577f00b4dc8186ab9553d9fc43ff117d55928e5bfa1319baa5b1f9729b9f1c4b",
          "verificationStatus": "needs_confirmation",
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성",
          "direction": "positive",
          "impact": 1.0
        },
        {
          "headline": "분석가는 Marvell의 Google AI 거래로 1,200억 달러의 엄청난 기회를 얻을 수 있다고 말합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787228312,
          "sourceUrl": "https://finnhub.io/api/news?id=a1db5cb0d5fde30c9941cc028cc4062f471dd101bfa5a86d3c6b5fb160f71f58",
          "verificationStatus": "needs_confirmation",
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성",
          "direction": "positive",
          "impact": 2.0
        },
        {
          "headline": "Micron, 메모리 및 AI 발전을 위해 100억 달러 규모의 연구실 공개",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787220296,
          "sourceUrl": "https://finnhub.io/api/news?id=51b5addae5e8d30c7c91c2a81c0092a081a4dbe5ff962ef44222663b91c57f83",
          "verificationStatus": "needs_confirmation",
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성",
          "direction": "positive",
          "impact": 2.0
        },
        {
          "headline": "'중국은 AI 경쟁이 확대됨에 따라 NVIDIA H200 칩에 대한 제한을 완화합니다. 베이징, 미국 라이벌을 따라잡기 위해 선도적인 기술 그룹을 돕기 위해 소규모 선적 허용 - Financial Times",
          "eventLabel": "경쟁사 공급 계약",
          "publishedAt": 1787157622,
          "sourceUrl": "https://finnhub.io/api/news?id=f3b54bed45cae16d5770db0c5b6a6167e474b3acd789e09a814bf92dc512a5f8",
          "verificationStatus": "needs_confirmation",
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성",
          "direction": "positive",
          "impact": 3.0
        },
        {
          "headline": "AMD, 팀 라이언(Tim Ryan)을 이사회에 임명하고, 집주인 은퇴 후 KC McClure 감사 및 재무 위원회 의장으로 임명",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787156452,
          "sourceUrl": "https://finnhub.io/api/news?id=da69e4b6f7750cb1bbe806db07447d752ca772be9efc07c6e091723c8a097974",
          "verificationStatus": "needs_confirmation",
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성",
          "direction": "positive",
          "impact": 2.0
        },
        {
          "headline": "수요일 AMD 주식에 무슨 일이 일어나고 있나요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787131813,
          "sourceUrl": "https://finnhub.io/api/news?id=a4e1d89b47e11158614ea23439c8622abbb8fb1d63e7ce00d78c6704ec52140e",
          "verificationStatus": "needs_confirmation",
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성",
          "direction": "positive",
          "impact": 2.0
        },
        {
          "headline": "Tesla Optimus 라이벌 Unitree Robotics, 상하이 데뷔에서 629% 폭발, 일시적으로 660억 달러 가치 달성",
          "eventLabel": "경쟁사 공급 계약",
          "publishedAt": 1787108869,
          "sourceUrl": "https://finnhub.io/api/news?id=f1e9f6f7defea1395e1ca247dcfabde935aa8775c4294cbe5f77f86a7ab1563e",
          "verificationStatus": "needs_confirmation",
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성",
          "direction": "positive",
          "impact": 3.0
        }
      ],
      "topPositive": [
        "AI 가속기·서버 경쟁 수요 확대 가능성",
        "AI 가속기·서버 경쟁 수요 확대 가능성",
        "AI 가속기·서버 경쟁 수요 확대 가능성"
      ],
      "topNegative": [],
      "nextChecks": [
        "다음 실적의 매출·EPS·마진",
        "핵심 고객 수요·CAPEX",
        "FCF와 부채·CAPEX 변화"
      ],
      "theses": [
        {
          "id": "growth",
          "name": "성장 Thesis",
          "statement": "매출·EPS 성장 전망이 유지되고 본업 수익성이 함께 개선된다.",
          "status": "strengthening",
          "score": 78.8,
          "confidence": 100,
          "falsificationRules": [
            "내년 매출·EPS 추정치가 함께 하향",
            "매출 둔화와 마진 하락이 동시에 확인"
          ]
        },
        {
          "id": "cashFlow",
          "name": "현금창출 Thesis",
          "statement": "본업 성장이 영업현금과 잉여현금흐름으로 전환된다.",
          "status": "strengthening",
          "score": 100,
          "confidence": 100,
          "falsificationRules": [
            "FCF가 2개 연도 연속 감소",
            "OCF 감소와 CAPEX 부담 증가가 동시에 발생"
          ]
        },
        {
          "id": "resilience",
          "name": "경쟁·재무 Thesis",
          "statement": "경쟁·고객 집중·재무 부담이 장기 사업 경쟁력을 훼손하지 않는다.",
          "status": "intact",
          "score": 1.5,
          "confidence": 100,
          "falsificationRules": [
            "핵심 고객 이탈 또는 점유율 하락이 공식 수치로 확인",
            "부채 부담 상승과 사업 리스크 확대가 동시 발생"
          ]
        }
      ],
      "scenarios": {
        "bull": 39.8,
        "base": 37.2,
        "bear": 23.0
      },
      "alerts": [],
      "businessProfile": {
        "updatedAt": null,
        "customers": [],
        "strengths": [],
        "risks": [],
        "sources": [],
        "latestChanges": [
          {
            "headline": "'Broadcom, 최신 AI 부채 거래에서 600억 달러 이상 모색' - Bloomberg",
            "eventLabel": "AI·데이터센터 투자 변화",
            "publishedAt": 1787242528,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=be47314eef46f3b29cea6eeebfb187ebbd7607353b02e61277f02148e320b8f9",
            "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
          },
          {
            "headline": "BMO Capital은 Salesforce에서 우수한 성과를 유지하고 목표 가격을 230달러로 높였습니다.",
            "eventLabel": "애널리스트 목표주가 변경",
            "publishedAt": 1787232003,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=577f00b4dc8186ab9553d9fc43ff117d55928e5bfa1319baa5b1f9729b9f1c4b",
            "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
          },
          {
            "headline": "분석가는 Marvell의 Google AI 거래로 1,200억 달러의 엄청난 기회를 얻을 수 있다고 말합니다.",
            "eventLabel": "AI·데이터센터 투자 변화",
            "publishedAt": 1787228312,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=a1db5cb0d5fde30c9941cc028cc4062f471dd101bfa5a86d3c6b5fb160f71f58",
            "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
          },
          {
            "headline": "Micron, 메모리 및 AI 발전을 위해 100억 달러 규모의 연구실 공개",
            "eventLabel": "AI·데이터센터 투자 변화",
            "publishedAt": 1787220296,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=51b5addae5e8d30c7c91c2a81c0092a081a4dbe5ff962ef44222663b91c57f83",
            "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
          },
          {
            "headline": "'중국은 AI 경쟁이 확대됨에 따라 NVIDIA H200 칩에 대한 제한을 완화합니다. 베이징, 미국 라이벌을 따라잡기 위해 선도적인 기술 그룹을 돕기 위해 소규모 선적 허용 - Financial Times",
            "eventLabel": "경쟁사 공급 계약",
            "publishedAt": 1787157622,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=f3b54bed45cae16d5770db0c5b6a6167e474b3acd789e09a814bf92dc512a5f8",
            "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
          },
          {
            "headline": "AMD, 팀 라이언(Tim Ryan)을 이사회에 임명하고, 집주인 은퇴 후 KC McClure 감사 및 재무 위원회 의장으로 임명",
            "eventLabel": "AI·데이터센터 투자 변화",
            "publishedAt": 1787156452,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=da69e4b6f7750cb1bbe806db07447d752ca772be9efc07c6e091723c8a097974",
            "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
          }
        ],
        "status": "available",
        "notice": "정성 사업정보는 마지막 확인일 이후의 구조화 중요 뉴스를 별도 변경 항목으로 덧붙입니다."
      },
      "earningsQualityReview": {
        "status": "reviewed",
        "period": "Q2'26",
        "reportedNetIncome": 2297000000.0,
        "normalizedIncome": 2305000000.0,
        "normalizedGap": -0.0035,
        "findings": [
          {
            "key": "otherNonOperating",
            "label": "기타 영업외손익",
            "amount": 598000000.0,
            "revenueRatio": 0.0518,
            "repeatCount": 2,
            "classification": "recurring_risk",
            "recurrenceRead": "최근 6개 기간 중 두 번 이상 나타나 반복 가능성을 열어둡니다."
          }
        ],
        "coreRead": "보고 순이익에 의미 있는 특이항목이 확인됩니다. 본업은 매출·영업이익·정상화이익을 우선해 읽어야 합니다.",
        "manualContext": null
      },
      "valuationScenario": {
        "status": "available",
        "price": 464.16,
        "currentEps": 7.56185,
        "nextEps": 15.46743,
        "epsGrowth": 1.0455,
        "marketPe": 61.38,
        "conservative": 607.63,
        "base": 949.42,
        "optimistic": 1471.61,
        "currentVsBase": -0.5111,
        "analystTargetMean": 614.434,
        "analystTargetLow": 365.0,
        "analystTargetHigh": 1250.0,
        "evidenceWeights": {
          "bull": 39.8,
          "base": 37.2,
          "bear": 23.0
        },
        "integratedRead": "실적 기준 보수 가격 이하이면서 펀더멘털 훼손이 크지 않아 가격 부담이 낮은 후보입니다.",
        "formula": "기준=내년 예상 EPS×현재 시장 PER, 보수=기준×0.64, 낙관=기준×1.55",
        "notice": "가격 밴드는 매수 신호가 아니며 EPS 하향·기업 악재가 생기면 즉시 다시 계산합니다."
      },
      "trackRecord": {
        "status": "collecting",
        "settledCount": 0,
        "hitRate20": null,
        "brier20": null,
        "avgExcess20": null,
        "confidenceAdjustment": 0.0,
        "recentOutcomes": [],
        "notice": "20거래일 SPY 대비 방향 적중과 Brier score를 기록하며, 8건 전에는 신뢰도를 보정하지 않습니다."
      },
      "history": [
        {
          "asOf": 1787313613.7807624,
          "date": "2026-08-21",
          "fundamentalScore": 38.6,
          "confidence": 100,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "strengthening",
          "scenarioWeights": {
            "bull": 39.8,
            "base": 37.2,
            "bear": 23.0
          },
          "currentPrice": 464.1619873046875,
          "valuationGap": -0.5111,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        }
      ],
      "thesisHistory": [
        {
          "asOf": 1787313613.7807624,
          "date": "2026-08-21",
          "overallStatus": "strengthening",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        }
      ],
      "limitations": [
        "점수는 현재 캐시에 있는 공시·컨센서스·구조화 뉴스만 사용합니다.",
        "시나리오 수치는 예측 확률이 아니라 현재 근거의 상대 가중치입니다.",
        "특이항목 원인은 공식 공시 또는 수동 검증 기록이 없으면 추정하지 않습니다."
      ]
    },
    "AVGO": {
      "ticker": "AVGO",
      "asOf": 1787313613.7807624,
      "modelVersion": "fundamental-v1.2",
      "fundamentalScore": 24.5,
      "confidence": 100,
      "fundamentalSigma": null,
      "fundamentalSigmaProgress": {
        "status": "collecting",
        "collected": 1,
        "required": 8,
        "remaining": 7,
        "expectedReadyDate": "2026-08-28",
        "notice": "같은 KST 날짜의 반복 실행은 한 건으로 교체하며, 임의 과거 점수를 만들어 채우지 않습니다."
      },
      "priceSigma": -1.61,
      "priceDamage": 53.6,
      "fundamentalDamage": 20.6,
      "thesisDamage": 98.0,
      "thesisStatus": "damaged",
      "damageRead": "현재 가격 변동과 펀더멘털 변화 사이에 큰 괴리는 확인되지 않았습니다.",
      "dimensions": {
        "growth": {
          "score": 50.89666666666667,
          "applicable": true
        },
        "earningsQuality": {
          "score": 56.17735190609129,
          "applicable": true
        },
        "cashFlow": {
          "score": 39.315957556402594,
          "applicable": true
        },
        "competitivePosition": {
          "score": -44.1,
          "applicable": true
        },
        "customerDemand": {
          "score": -7.28,
          "applicable": true
        },
        "balanceSheet": {
          "score": 13.3382,
          "applicable": true
        }
      },
      "officialEvidence": [
        {
          "id": "sec-annual",
          "kind": "confirmed_fact",
          "label": "연간 재무 수치",
          "source": "SEC Company Facts",
          "period": "2025",
          "detail": "매출·영업이익·순이익·현금흐름 핵심 항목을 SEC 원문 수치로 교차검증했습니다.",
          "url": "https://data.sec.gov/api/xbrl/companyfacts/"
        },
        {
          "id": "sec-quarterly",
          "kind": "confirmed_fact",
          "label": "분기 손익 수치",
          "source": "SEC Company Facts",
          "period": "Q2'26",
          "detail": "최근 분기 매출·영업이익·순이익을 SEC 3개월 보고값과 교차검증했습니다.",
          "url": "https://data.sec.gov/api/xbrl/companyfacts/"
        }
      ],
      "evidenceSummary": {
        "confirmedFacts": 2,
        "credibleReports": 0,
        "needsConfirmation": 8,
        "aiInferences": 8
      },
      "evidence": [
        {
          "headline": "'Broadcom, 최신 AI 부채 거래에서 600억 달러 이상 모색' - Bloomberg",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787242528,
          "sourceUrl": "https://finnhub.io/api/news?id=be47314eef46f3b29cea6eeebfb187ebbd7607353b02e61277f02148e320b8f9",
          "verificationStatus": "needs_confirmation",
          "reason": "사업·실적 연결 경로 확인 필요",
          "direction": "positive",
          "impact": 2.0
        },
        {
          "headline": "성능 비교: Broadcom과 반도체 및 반도체 장비 산업의 경쟁업체",
          "eventLabel": "경쟁사 기술·시장 진입",
          "publishedAt": 1787205521,
          "sourceUrl": "https://finnhub.io/api/news?id=860a6a46b2fa8c28931a3ec0b03e217324af1036a4b3a94b9d42db3294065fe2",
          "verificationStatus": "needs_confirmation",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "direction": "negative",
          "impact": -4.0
        },
        {
          "headline": "Marvell은 Google이 최대 122억 달러의 주식을 매입할 수 있는 AI 칩 거래에서 6%의 이익을 얻습니다.",
          "eventLabel": "경쟁사 공급 계약",
          "publishedAt": 1787137685,
          "sourceUrl": "https://finnhub.io/api/news?id=c9b4190634fc00669c88233fc42770d49901fdc0f4b44de410eb9b78af92c5fb",
          "verificationStatus": "needs_confirmation",
          "reason": "Google 관련 고객 집중도와 AI 커스텀 실리콘 경쟁 심화 가능성",
          "direction": "negative",
          "impact": -4.0
        },
        {
          "headline": "산업 비교: 반도체 및 반도체 장비 산업의 경쟁사와 Broadcom 평가",
          "eventLabel": "경쟁사 기술·시장 진입",
          "publishedAt": 1787119132,
          "sourceUrl": "https://finnhub.io/api/news?id=66c895b62d64dee0439b63f581116edbd2c44fce2e2d06a34d6b779ec506194a",
          "verificationStatus": "needs_confirmation",
          "reason": "회사 실적과의 연결고리 확인",
          "direction": "negative",
          "impact": -4.0
        },
        {
          "headline": "경쟁사 분석: 반도체 및 반도체 장비 산업의 Broadcom 및 경쟁사 평가",
          "eventLabel": "경쟁사 기술·시장 진입",
          "publishedAt": 1787032728,
          "sourceUrl": "https://finnhub.io/api/news?id=1b21c5056a4d186b9fba9774e73719a97969f6d8eaf9340929388ae2170d0622",
          "verificationStatus": "needs_confirmation",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "direction": "negative",
          "impact": -4.0
        },
        {
          "headline": "SNDK, WDC, MU, SMCI 주식은 최고의 S&P 500 상승주입니다. SanDisk의 장밋빛 전망이 뒷받침하는 지속적인 기업 수요가 메모리 주식을 돕고 있습니다.",
          "eventLabel": "실적 발표",
          "publishedAt": 1786647929,
          "sourceUrl": "https://finnhub.io/api/news?id=45f2789ca5cf4e831eafc73eb25852d2de89e03837693f4006bcebe38cb58c5e",
          "verificationStatus": "needs_confirmation",
          "reason": "사업·실적 연결 경로 확인 필요",
          "direction": "negative",
          "impact": -2.0
        },
        {
          "headline": "Broadcom(AVGO), 주요 고객 및 전략적 계약을 통해 시장 입지 강화",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1786625104,
          "sourceUrl": "https://finnhub.io/api/news?id=259042175823bd04dbed68a3cae047c802d73b88d51e977025ee26a649edb4a0",
          "verificationStatus": "needs_confirmation",
          "reason": "회사 실적과의 연결고리 확인",
          "direction": "positive",
          "impact": 4.0
        },
        {
          "headline": "인텔은 올해 176% 상승했습니다. INTC, AMD, Broadcom 및 NVIDIA에서 이익을 얻을 때입니까?",
          "eventLabel": "실적 발표",
          "publishedAt": 1786558077,
          "sourceUrl": "https://finnhub.io/api/news?id=e79098a589836c215d4ec48d5a9982b2bba6a01043dc03e604391be3f939e6de",
          "verificationStatus": "needs_confirmation",
          "reason": "사업·실적 연결 경로 확인 필요",
          "direction": "negative",
          "impact": -2.0
        }
      ],
      "topPositive": [
        "사업·실적 연결 경로 확인 필요",
        "회사 실적과의 연결고리 확인"
      ],
      "topNegative": [
        "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
        "Google 관련 고객 집중도와 AI 커스텀 실리콘 경쟁 심화 가능성",
        "회사 실적과의 연결고리 확인"
      ],
      "nextChecks": [
        "다음 실적의 매출·EPS·마진",
        "핵심 고객 수요·CAPEX",
        "FCF와 부채·CAPEX 변화"
      ],
      "theses": [
        {
          "id": "growth",
          "name": "성장 Thesis",
          "statement": "매출·EPS 성장 전망이 유지되고 본업 수익성이 함께 개선된다.",
          "status": "strengthening",
          "score": 50.9,
          "confidence": 100,
          "falsificationRules": [
            "내년 매출·EPS 추정치가 함께 하향",
            "매출 둔화와 마진 하락이 동시에 확인"
          ]
        },
        {
          "id": "cashFlow",
          "name": "현금창출 Thesis",
          "statement": "본업 성장이 영업현금과 잉여현금흐름으로 전환된다.",
          "status": "strengthening",
          "score": 39.3,
          "confidence": 100,
          "falsificationRules": [
            "FCF가 2개 연도 연속 감소",
            "OCF 감소와 CAPEX 부담 증가가 동시에 발생"
          ]
        },
        {
          "id": "resilience",
          "name": "경쟁·재무 Thesis",
          "statement": "경쟁·고객 집중·재무 부담이 장기 사업 경쟁력을 훼손하지 않는다.",
          "status": "weakening",
          "score": -12.7,
          "confidence": 100,
          "falsificationRules": [
            "핵심 고객 이탈 또는 점유율 하락이 공식 수치로 확인",
            "부채 부담 상승과 사업 리스크 확대가 동시 발생"
          ]
        }
      ],
      "scenarios": {
        "bull": 25.1,
        "base": 35.4,
        "bear": 39.5
      },
      "alerts": [],
      "businessProfile": {
        "updatedAt": null,
        "customers": [],
        "strengths": [],
        "risks": [],
        "sources": [],
        "latestChanges": [
          {
            "headline": "'Broadcom, 최신 AI 부채 거래에서 600억 달러 이상 모색' - Bloomberg",
            "eventLabel": "AI·데이터센터 투자 변화",
            "publishedAt": 1787242528,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=be47314eef46f3b29cea6eeebfb187ebbd7607353b02e61277f02148e320b8f9",
            "reason": "사업·실적 연결 경로 확인 필요"
          },
          {
            "headline": "성능 비교: Broadcom과 반도체 및 반도체 장비 산업의 경쟁업체",
            "eventLabel": "경쟁사 기술·시장 진입",
            "publishedAt": 1787205521,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=860a6a46b2fa8c28931a3ec0b03e217324af1036a4b3a94b9d42db3294065fe2",
            "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
          },
          {
            "headline": "Marvell은 Google이 최대 122억 달러의 주식을 매입할 수 있는 AI 칩 거래에서 6%의 이익을 얻습니다.",
            "eventLabel": "경쟁사 공급 계약",
            "publishedAt": 1787137685,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=c9b4190634fc00669c88233fc42770d49901fdc0f4b44de410eb9b78af92c5fb",
            "reason": "Google 관련 고객 집중도와 AI 커스텀 실리콘 경쟁 심화 가능성"
          },
          {
            "headline": "산업 비교: 반도체 및 반도체 장비 산업의 경쟁사와 Broadcom 평가",
            "eventLabel": "경쟁사 기술·시장 진입",
            "publishedAt": 1787119132,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=66c895b62d64dee0439b63f581116edbd2c44fce2e2d06a34d6b779ec506194a",
            "reason": "회사 실적과의 연결고리 확인"
          },
          {
            "headline": "경쟁사 분석: 반도체 및 반도체 장비 산업의 Broadcom 및 경쟁사 평가",
            "eventLabel": "경쟁사 기술·시장 진입",
            "publishedAt": 1787032728,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=1b21c5056a4d186b9fba9774e73719a97969f6d8eaf9340929388ae2170d0622",
            "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
          },
          {
            "headline": "SNDK, WDC, MU, SMCI 주식은 최고의 S&P 500 상승주입니다. SanDisk의 장밋빛 전망이 뒷받침하는 지속적인 기업 수요가 메모리 주식을 돕고 있습니다.",
            "eventLabel": "실적 발표",
            "publishedAt": 1786647929,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=45f2789ca5cf4e831eafc73eb25852d2de89e03837693f4006bcebe38cb58c5e",
            "reason": "사업·실적 연결 경로 확인 필요"
          }
        ],
        "status": "collecting",
        "notice": "정성 사업정보는 마지막 확인일 이후의 구조화 중요 뉴스를 별도 변경 항목으로 덧붙입니다."
      },
      "earningsQualityReview": {
        "status": "reviewed",
        "period": "Q2'26",
        "reportedNetIncome": 9310000000.0,
        "normalizedIncome": 9375252714.708786,
        "normalizedGap": -0.007,
        "findings": [],
        "coreRead": "현재 수집된 항목만 보면 최신 기간 순이익을 크게 왜곡하는 특이항목은 확인되지 않았습니다.",
        "manualContext": null
      },
      "valuationScenario": {
        "status": "available",
        "price": 363.83,
        "currentEps": 11.62599,
        "nextEps": 19.53226,
        "epsGrowth": 0.6801,
        "marketPe": 31.29,
        "conservative": 391.2,
        "base": 611.25,
        "optimistic": 947.44,
        "currentVsBase": -0.4048,
        "analystTargetMean": 527.88446,
        "analystTargetLow": 215.88,
        "analystTargetHigh": 675.0,
        "evidenceWeights": {
          "bull": 25.1,
          "base": 35.4,
          "bear": 39.5
        },
        "integratedRead": "현재 시장 PER이 유지된다는 가정의 기준가 아래입니다. 실적 전망 유지 여부를 확인하며 접근할 구간입니다.",
        "formula": "기준=내년 예상 EPS×현재 시장 PER, 보수=기준×0.64, 낙관=기준×1.55",
        "notice": "가격 밴드는 매수 신호가 아니며 EPS 하향·기업 악재가 생기면 즉시 다시 계산합니다."
      },
      "trackRecord": {
        "status": "collecting",
        "settledCount": 0,
        "hitRate20": null,
        "brier20": null,
        "avgExcess20": null,
        "confidenceAdjustment": 0.0,
        "recentOutcomes": [],
        "notice": "20거래일 SPY 대비 방향 적중과 Brier score를 기록하며, 8건 전에는 신뢰도를 보정하지 않습니다."
      },
      "history": [
        {
          "asOf": 1787313613.7807624,
          "date": "2026-08-21",
          "fundamentalScore": 24.5,
          "confidence": 100,
          "fundamentalDamage": 20.6,
          "thesisDamage": 98.0,
          "thesisStatus": "damaged",
          "scenarioWeights": {
            "bull": 25.1,
            "base": 35.4,
            "bear": 39.5
          },
          "currentPrice": 363.8299865722656,
          "valuationGap": -0.4048,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "weakening"
          }
        }
      ],
      "thesisHistory": [
        {
          "asOf": 1787313613.7807624,
          "date": "2026-08-21",
          "overallStatus": "damaged",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "weakening"
          }
        }
      ],
      "limitations": [
        "점수는 현재 캐시에 있는 공시·컨센서스·구조화 뉴스만 사용합니다.",
        "시나리오 수치는 예측 확률이 아니라 현재 근거의 상대 가중치입니다.",
        "특이항목 원인은 공식 공시 또는 수동 검증 기록이 없으면 추정하지 않습니다."
      ]
    },
    "QCOM": {
      "ticker": "QCOM",
      "asOf": 1787313613.7807624,
      "modelVersion": "fundamental-v1.2",
      "fundamentalScore": 10.1,
      "confidence": 95.0,
      "fundamentalSigma": null,
      "fundamentalSigmaProgress": {
        "status": "collecting",
        "collected": 1,
        "required": 8,
        "remaining": 7,
        "expectedReadyDate": "2026-08-28",
        "notice": "같은 KST 날짜의 반복 실행은 한 건으로 교체하며, 임의 과거 점수를 만들어 채우지 않습니다."
      },
      "priceSigma": 0.46,
      "priceDamage": 15.4,
      "fundamentalDamage": 0,
      "thesisDamage": 0,
      "thesisStatus": "intact",
      "damageRead": "현재 가격 변동과 펀더멘털 변화 사이에 큰 괴리는 확인되지 않았습니다.",
      "dimensions": {
        "growth": {
          "score": 4.626666666666668,
          "applicable": true
        },
        "earningsQuality": {
          "score": 16.628011666544126,
          "applicable": true
        },
        "cashFlow": {
          "score": 27.43212973747872,
          "applicable": true
        },
        "competitivePosition": {
          "score": 0.0,
          "applicable": true
        },
        "customerDemand": {
          "score": 0.0,
          "applicable": true
        },
        "balanceSheet": {
          "score": 9.781099999999999,
          "applicable": true
        }
      },
      "officialEvidence": [
        {
          "id": "sec-annual",
          "kind": "confirmed_fact",
          "label": "연간 재무 수치",
          "source": "SEC Company Facts",
          "period": "2025",
          "detail": "매출·영업이익·순이익·현금흐름 핵심 항목을 SEC 원문 수치로 교차검증했습니다.",
          "url": "https://data.sec.gov/api/xbrl/companyfacts/"
        },
        {
          "id": "sec-quarterly",
          "kind": "confirmed_fact",
          "label": "분기 손익 수치",
          "source": "SEC Company Facts",
          "period": "Q2'26",
          "detail": "최근 분기 매출·영업이익·순이익을 SEC 3개월 보고값과 교차검증했습니다.",
          "url": "https://data.sec.gov/api/xbrl/companyfacts/"
        }
      ],
      "evidenceSummary": {
        "confirmedFacts": 2,
        "credibleReports": 0,
        "needsConfirmation": 3,
        "aiInferences": 3
      },
      "evidence": [
        {
          "headline": "Apple 제품을 구매하시나요? 비용을 지불하는 데 도움이 되는 4가지 도구",
          "eventLabel": "공급망 문제",
          "publishedAt": 1787212801,
          "sourceUrl": "https://finnhub.io/api/news?id=a03b08e1b2008c44e24564b7729d0b10f7da5eb33418846cce278009d8d4233d",
          "verificationStatus": "needs_confirmation",
          "reason": "스마트폰 수요가 줄면 고객 칩 수요에 부담",
          "direction": "negative",
          "impact": -4.0
        },
        {
          "headline": "Qualcomm의 새로운 EMEA 리더십은 QCOM의 다각화 스토리에서 누락된 고리입니까?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1786551109,
          "sourceUrl": "https://finnhub.io/api/news?id=2c735624fb50ccd89a37ffa477005a31cd44fe916a417b6d1b71673a990792f4",
          "verificationStatus": "needs_confirmation",
          "reason": "자동차 고객·설계 채택 확대 가능성",
          "direction": "positive",
          "impact": 4.0
        },
        {
          "headline": "Matrix Asset의 David Katz는 지금이 Qualcomm을 인수하기에 좋은 시기라고 말합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1786455466,
          "sourceUrl": "https://finnhub.io/api/news?id=35e5940fda796b0603800d298b6751ee37ab5020ddb7526b898657638f9d07a0",
          "verificationStatus": "needs_confirmation",
          "reason": "사업·실적 연결 경로 확인 필요",
          "direction": "positive",
          "impact": 2.0
        }
      ],
      "topPositive": [
        "자동차 고객·설계 채택 확대 가능성",
        "사업·실적 연결 경로 확인 필요"
      ],
      "topNegative": [
        "스마트폰 수요가 줄면 고객 칩 수요에 부담"
      ],
      "nextChecks": [
        "다음 실적의 매출·EPS·마진",
        "핵심 고객 수요·CAPEX",
        "FCF와 부채·CAPEX 변화"
      ],
      "theses": [
        {
          "id": "growth",
          "name": "성장 Thesis",
          "statement": "매출·EPS 성장 전망이 유지되고 본업 수익성이 함께 개선된다.",
          "status": "intact",
          "score": 4.6,
          "confidence": 95.0,
          "falsificationRules": [
            "내년 매출·EPS 추정치가 함께 하향",
            "매출 둔화와 마진 하락이 동시에 확인"
          ]
        },
        {
          "id": "cashFlow",
          "name": "현금창출 Thesis",
          "statement": "본업 성장이 영업현금과 잉여현금흐름으로 전환된다.",
          "status": "strengthening",
          "score": 27.4,
          "confidence": 95.0,
          "falsificationRules": [
            "FCF가 2개 연도 연속 감소",
            "OCF 감소와 CAPEX 부담 증가가 동시에 발생"
          ]
        },
        {
          "id": "resilience",
          "name": "경쟁·재무 Thesis",
          "statement": "경쟁·고객 집중·재무 부담이 장기 사업 경쟁력을 훼손하지 않는다.",
          "status": "intact",
          "score": 3.3,
          "confidence": 95.0,
          "falsificationRules": [
            "핵심 고객 이탈 또는 점유율 하락이 공식 수치로 확인",
            "부채 부담 상승과 사업 리스크 확대가 동시 발생"
          ]
        }
      ],
      "scenarios": {
        "bull": 33.5,
        "base": 39.3,
        "bear": 27.2
      },
      "alerts": [],
      "businessProfile": {
        "updatedAt": "2026-08-10",
        "customers": [
          "모바일: 삼성전자·애플(5G 모뎀, 2026년까지는 공급 지속)·샤오미 등 안드로이드 진영 대부분에 공급 중",
          "자동차(급성장 중): 폭스바겐·토요타·현대모비스·BMW(디지털 콕핏)·리오토·니오 등에 '디지털 섀시' 공급 - 2026 회계연도 2분기 자동차 매출이 전년비 +38%로 사상 최대($13.3억), 연간 60억달러 이상 전망",
          "AI 데이터센터(신규 진출): 데이터센터용 CPU 'Dragonfly C1000' 공개, 메타(Meta)가 2028년 양산 시작 시 사용하기로 계약 - 아직 매출은 발생 전 단계"
        ],
        "strengths": [
          "통신 표준 특허 라이선싱(QTL) 기반 로열티 수익 - 칩 판매량과 별개로 안정적인 수익 구조",
          "저전력·고효율 모바일 칩 설계 역량이 시장에서 검증됨",
          "자동차·AI 데이터센터로 사업 다각화가 실제 매출(자동차)과 계약(데이터센터) 양쪽에서 진행 중"
        ],
        "risks": [
          "⚠️ 최대 고객이었던 애플이 자체 모뎀(C1 시리즈)으로 전환 중 - 2026년 8월 3분기 실적발표에서 CEO가 '애플向 매출 감소 속도가 예상보다 빠르다'고 직접 언급함. 이미 아이폰16e·아이폰 에어 등 일부 기기는 애플 자체 모뎀으로 전환됨",
          "라이선싱 로열티는 고객·규제당국과의 소송·요율 협상 리스크가 상존함",
          "AI 데이터센터 사업(메타향)은 2028년부터 매출이 잡히는 계약 단계라, 지금 당장 실적에 기여하는 사업은 아님"
        ],
        "sources": [
          {
            "title": "Qualcomm rolls out AI data center CPU, signs Meta as major customer (CNBC, 2026-06-24)",
            "url": "https://www.cnbc.com/2026/06/24/qualcomm-data-center-cpu-meta.html"
          },
          {
            "title": "Qualcomm Inc (QCOM) Q2 2026 Earnings Call Highlights: Record Automotive Revenues (Yahoo Finance)",
            "url": "https://finance.yahoo.com/markets/stocks/articles/qualcomm-inc-qcom-q2-2026-071706074.html"
          },
          {
            "title": "Qualcomm earnings call suggests Apple will again extend 5G modem license, to 2027 (Tom's Hardware)",
            "url": "https://www.tomshardware.com/tech-industry/manufacturing/qualcomm-earnings-call-suggests-apple-will-again-extend-5g-modem-license-to-2027"
          },
          {
            "title": "Qualcomm Now Relies on Android as Apple Modems Roll Out (MacRumors, 2025-11-06)",
            "url": "https://www.macrumors.com/2025/11/06/qualcomm-now-relies-on-android/"
          }
        ],
        "latestChanges": [
          {
            "headline": "Apple 제품을 구매하시나요? 비용을 지불하는 데 도움이 되는 4가지 도구",
            "eventLabel": "공급망 문제",
            "publishedAt": 1787212801,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=a03b08e1b2008c44e24564b7729d0b10f7da5eb33418846cce278009d8d4233d",
            "reason": "스마트폰 수요가 줄면 고객 칩 수요에 부담"
          },
          {
            "headline": "Qualcomm의 새로운 EMEA 리더십은 QCOM의 다각화 스토리에서 누락된 고리입니까?",
            "eventLabel": "주요 고객 계약",
            "publishedAt": 1786551109,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=2c735624fb50ccd89a37ffa477005a31cd44fe916a417b6d1b71673a990792f4",
            "reason": "자동차 고객·설계 채택 확대 가능성"
          },
          {
            "headline": "Matrix Asset의 David Katz는 지금이 Qualcomm을 인수하기에 좋은 시기라고 말합니다.",
            "eventLabel": "AI·데이터센터 투자 변화",
            "publishedAt": 1786455466,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=35e5940fda796b0603800d298b6751ee37ab5020ddb7526b898657638f9d07a0",
            "reason": "사업·실적 연결 경로 확인 필요"
          }
        ],
        "status": "available",
        "notice": "정성 사업정보는 마지막 확인일 이후의 구조화 중요 뉴스를 별도 변경 항목으로 덧붙입니다."
      },
      "earningsQualityReview": {
        "status": "reviewed",
        "period": "Q2'26",
        "reportedNetIncome": 2002000000.0,
        "normalizedIncome": 1433380000.0,
        "normalizedGap": 0.3967,
        "findings": [
          {
            "key": "unusualItems",
            "label": "비경상 항목",
            "amount": 702000000.0,
            "revenueRatio": 0.0706,
            "repeatCount": 1,
            "classification": "one_time_candidate",
            "recurrenceRead": "현재 자료에서는 한 번만 확인돼 일회성 후보로 분류합니다."
          },
          {
            "key": "unusualItemsExGoodwill",
            "label": "영업권 제외 비경상 항목",
            "amount": 702000000.0,
            "revenueRatio": 0.0706,
            "repeatCount": 1,
            "classification": "one_time_candidate",
            "recurrenceRead": "현재 자료에서는 한 번만 확인돼 일회성 후보로 분류합니다."
          }
        ],
        "coreRead": "보고 순이익에 의미 있는 특이항목이 확인됩니다. 본업은 매출·영업이익·정상화이익을 우선해 읽어야 합니다.",
        "manualContext": {
          "date": "2026-08-10",
          "period": "2025-09-28 마감 분기(회사 발표 기준 FY25 4분기) · 2026-03-29 마감 분기(FY26 2분기), 순이익이 두 번 다 크게 왜곡됨",
          "headline": "매출은 두 분기 다 견조했는데 순이익만 극과 극: 2025-09-28 분기는 매출 $11.27B(예상 상회)인데 순이익 -$3.12B(적자) · 2026-03-29 분기는 매출 $10.60B에 순이익 $7.37B(마진 69.5%, 평소의 2.5배 이상).",
          "oneTime": "둘 다 세금(법인세) 관련 일회성 항목이 원인 - 영업이 나빠지거나 좋아진 게 아님. ①2025-09-28 분기 적자는 일회성 법인세 '비용' 때문 - 조정(비GAAP) EPS는 오히려 예상 상회($3.00 vs $2.88 예상), 매출도 예상($10.79B) 상회. ②2026-03-29 분기의 순이익 급증은 $5.7B(주당 $5.33) 규모의 일회성 법인세 '환입' 때문 - 2025년 발효된 미국 세제개편법(OBBB Act)으로 R&D 비용 처리 방식이 바뀌면서, 쌓아뒀던 세금 충당금을 되돌린 회계상 이벤트.",
          "coreRead": "본업 관점에서는 두 분기 다 정상~견조했음(매출 예상 상회, 자동차 매출은 오히려 사상 최대). 순이익만 세무 이벤트로 크게 출렁인 것 - '실적이 안 좋아졌다/좋아졌다'로 읽으면 완전히 틀린 해석.",
          "forecast": "2026년 8월 발표 예정 분기(2026-06-28 마감)부터는 이런 대형 일회성 세금 항목이 없을 가능성이 높아서, 순이익이 다시 매출의 20%대 초반 수준(평소 수준)으로 '정상화'되어 보일 텐데 이건 실적 악화가 아니라 기저효과임. 매출 방향성의 핵심은 자동차(전년비 +38%, 사상 최대 행진 중)가 애플向 모뎀 이탈분(CEO가 예상보다 빠르다고 언급)을 얼마나 상쇄하느냐 - 자동차 성장 속도가 애플 감소 속도를 웃돌면 전체 매출은 계속 성장, 역전되면 정체 가능. 이건 예측이라 틀릴 수 있음.",
          "confidence": "일회성 세금 항목의 존재와 규모는 회사 발표·언론 보도 기준(신뢰도 높음) · 다음 분기 매출 방향 예측은 추정(신뢰도 중간)"
        }
      },
      "valuationScenario": {
        "status": "available",
        "price": 163.64,
        "currentEps": 10.52302,
        "nextEps": 10.20195,
        "epsGrowth": -0.0305,
        "marketPe": 15.55,
        "conservative": 101.53,
        "base": 158.65,
        "optimistic": 245.9,
        "currentVsBase": 0.0315,
        "analystTargetMean": 193.1,
        "analystTargetLow": 100.0,
        "analystTargetHigh": 400.0,
        "evidenceWeights": {
          "bull": 33.5,
          "base": 39.3,
          "bear": 27.2
        },
        "integratedRead": "현재 가격과 실적 기준가가 크게 어긋나지 않습니다. 다음 EPS 추정치와 PER 변화가 방향을 좌우합니다.",
        "formula": "기준=내년 예상 EPS×현재 시장 PER, 보수=기준×0.64, 낙관=기준×1.55",
        "notice": "가격 밴드는 매수 신호가 아니며 EPS 하향·기업 악재가 생기면 즉시 다시 계산합니다."
      },
      "trackRecord": {
        "status": "collecting",
        "settledCount": 0,
        "hitRate20": null,
        "brier20": null,
        "avgExcess20": null,
        "confidenceAdjustment": 0.0,
        "recentOutcomes": [],
        "notice": "20거래일 SPY 대비 방향 적중과 Brier score를 기록하며, 8건 전에는 신뢰도를 보정하지 않습니다."
      },
      "history": [
        {
          "asOf": 1787313613.7807624,
          "date": "2026-08-21",
          "fundamentalScore": 10.1,
          "confidence": 95.0,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 33.5,
            "base": 39.3,
            "bear": 27.2
          },
          "currentPrice": 163.63999938964844,
          "valuationGap": 0.0315,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        }
      ],
      "thesisHistory": [
        {
          "asOf": 1787313613.7807624,
          "date": "2026-08-21",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        }
      ],
      "limitations": [
        "점수는 현재 캐시에 있는 공시·컨센서스·구조화 뉴스만 사용합니다.",
        "시나리오 수치는 예측 확률이 아니라 현재 근거의 상대 가중치입니다.",
        "특이항목 원인은 공식 공시 또는 수동 검증 기록이 없으면 추정하지 않습니다."
      ]
    },
    "ARM": {
      "ticker": "ARM",
      "asOf": 1787313613.7807624,
      "modelVersion": "fundamental-v1.2",
      "fundamentalScore": 25.3,
      "confidence": 78.5,
      "fundamentalSigma": null,
      "fundamentalSigmaProgress": {
        "status": "collecting",
        "collected": 1,
        "required": 8,
        "remaining": 7,
        "expectedReadyDate": "2026-08-28",
        "notice": "같은 KST 날짜의 반복 실행은 한 건으로 교체하며, 임의 과거 점수를 만들어 채우지 않습니다."
      },
      "priceSigma": -0.78,
      "priceDamage": 26.1,
      "fundamentalDamage": 0,
      "thesisDamage": 0,
      "thesisStatus": "intact",
      "damageRead": "현재 가격 변동과 펀더멘털 변화 사이에 큰 괴리는 확인되지 않았습니다.",
      "dimensions": {
        "growth": {
          "score": 27.146666,
          "applicable": true
        },
        "earningsQuality": {
          "score": 2.7964432263863452,
          "applicable": true
        },
        "cashFlow": {
          "score": 100,
          "applicable": true
        },
        "competitivePosition": {
          "score": 0.0,
          "applicable": true
        },
        "customerDemand": {
          "score": 0.0,
          "applicable": true
        },
        "balanceSheet": {
          "score": 19.9784,
          "applicable": true
        }
      },
      "officialEvidence": [],
      "evidenceSummary": {
        "confirmedFacts": 1,
        "credibleReports": 0,
        "needsConfirmation": 2,
        "aiInferences": 3
      },
      "evidence": [
        {
          "headline": "훌륭한 회사, 정가: Arm의 수치가 향후 1년에 대해 말해주는 것",
          "eventLabel": "내부자 매도",
          "publishedAt": 1786627807,
          "sourceUrl": "https://finnhub.io/api/news?id=e5c68441c34702b7547b979a0f03e5f1f1106b77e3c372730060d55bc46c151e",
          "verificationStatus": "needs_confirmation",
          "reason": "회사 실적과의 연결고리 확인",
          "direction": "negative",
          "impact": -3.0
        },
        {
          "headline": "Arm Holdings(ARM)가 임베디드 AI 도구 거래 및 2026년 1분기 실적 이후 18.2% 상승한 이유",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1786381956,
          "sourceUrl": "https://finnhub.io/api/news?id=69da1ad2660a9ed0f7f4fe85689ab1bf558c2fd0500dc843d1fbaf68788baecd",
          "verificationStatus": "needs_confirmation",
          "reason": "회사 실적과의 연결고리 확인",
          "direction": "positive",
          "impact": 4.0
        },
        {
          "headline": "ARM SEC Form 6-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1786287600.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1973239/000197323926000117/arm-20260810.htm",
          "verificationStatus": "confirmed",
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기",
          "direction": "mixed",
          "impact": 0
        }
      ],
      "topPositive": [
        "회사 실적과의 연결고리 확인"
      ],
      "topNegative": [
        "회사 실적과의 연결고리 확인"
      ],
      "nextChecks": [
        "다음 실적의 매출·EPS·마진",
        "핵심 고객 수요·CAPEX",
        "FCF와 부채·CAPEX 변화"
      ],
      "theses": [
        {
          "id": "growth",
          "name": "성장 Thesis",
          "statement": "매출·EPS 성장 전망이 유지되고 본업 수익성이 함께 개선된다.",
          "status": "strengthening",
          "score": 27.1,
          "confidence": 78.5,
          "falsificationRules": [
            "내년 매출·EPS 추정치가 함께 하향",
            "매출 둔화와 마진 하락이 동시에 확인"
          ]
        },
        {
          "id": "cashFlow",
          "name": "현금창출 Thesis",
          "statement": "본업 성장이 영업현금과 잉여현금흐름으로 전환된다.",
          "status": "strengthening",
          "score": 100,
          "confidence": 78.5,
          "falsificationRules": [
            "FCF가 2개 연도 연속 감소",
            "OCF 감소와 CAPEX 부담 증가가 동시에 발생"
          ]
        },
        {
          "id": "resilience",
          "name": "경쟁·재무 Thesis",
          "statement": "경쟁·고객 집중·재무 부담이 장기 사업 경쟁력을 훼손하지 않는다.",
          "status": "intact",
          "score": 6.7,
          "confidence": 78.5,
          "falsificationRules": [
            "핵심 고객 이탈 또는 점유율 하락이 공식 수치로 확인",
            "부채 부담 상승과 사업 리스크 확대가 동시 발생"
          ]
        }
      ],
      "scenarios": {
        "bull": 36.4,
        "base": 38.5,
        "bear": 25.1
      },
      "alerts": [],
      "businessProfile": {
        "updatedAt": null,
        "customers": [],
        "strengths": [],
        "risks": [],
        "sources": [],
        "latestChanges": [
          {
            "headline": "훌륭한 회사, 정가: Arm의 수치가 향후 1년에 대해 말해주는 것",
            "eventLabel": "내부자 매도",
            "publishedAt": 1786627807,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=e5c68441c34702b7547b979a0f03e5f1f1106b77e3c372730060d55bc46c151e",
            "reason": "회사 실적과의 연결고리 확인"
          },
          {
            "headline": "Arm Holdings(ARM)가 임베디드 AI 도구 거래 및 2026년 1분기 실적 이후 18.2% 상승한 이유",
            "eventLabel": "주요 고객 계약",
            "publishedAt": 1786381956,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=69da1ad2660a9ed0f7f4fe85689ab1bf558c2fd0500dc843d1fbaf68788baecd",
            "reason": "회사 실적과의 연결고리 확인"
          },
          {
            "headline": "ARM SEC Form 6-K 공식 제출",
            "eventLabel": "중요사항 공시",
            "publishedAt": 1786287600.0,
            "direction": "mixed",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1973239/000197323926000117/arm-20260810.htm",
            "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
          }
        ],
        "status": "available",
        "notice": "정성 사업정보는 마지막 확인일 이후의 구조화 중요 뉴스를 별도 변경 항목으로 덧붙입니다."
      },
      "earningsQualityReview": {
        "status": "reviewed",
        "period": "Q2'26",
        "reportedNetIncome": 270000000.0,
        "normalizedIncome": 197400000.0,
        "normalizedGap": 0.3678,
        "findings": [
          {
            "key": "unusualItems",
            "label": "비경상 항목",
            "amount": 121000000.0,
            "revenueRatio": 0.0939,
            "repeatCount": 1,
            "classification": "one_time_candidate",
            "recurrenceRead": "현재 자료에서는 한 번만 확인돼 일회성 후보로 분류합니다."
          },
          {
            "key": "unusualItemsExGoodwill",
            "label": "영업권 제외 비경상 항목",
            "amount": 121000000.0,
            "revenueRatio": 0.0939,
            "repeatCount": 1,
            "classification": "one_time_candidate",
            "recurrenceRead": "현재 자료에서는 한 번만 확인돼 일회성 후보로 분류합니다."
          },
          {
            "key": "unusualTaxEffect",
            "label": "비경상 세금 효과",
            "amount": 48400000.0,
            "revenueRatio": 0.0375,
            "repeatCount": 1,
            "classification": "one_time_candidate",
            "recurrenceRead": "현재 자료에서는 한 번만 확인돼 일회성 후보로 분류합니다."
          }
        ],
        "coreRead": "보고 순이익에 의미 있는 특이항목이 확인됩니다. 본업은 매출·영업이익·정상화이익을 우선해 읽어야 합니다.",
        "manualContext": null
      },
      "valuationScenario": {
        "status": "available",
        "price": 247.99,
        "currentEps": 2.22806,
        "nextEps": 3.06033,
        "epsGrowth": 0.3735,
        "marketPe": 111.3,
        "conservative": 218.0,
        "base": 340.62,
        "optimistic": 527.97,
        "currentVsBase": -0.272,
        "analystTargetMean": 286.0842,
        "analystTargetLow": 125.0,
        "analystTargetHigh": 500.0,
        "evidenceWeights": {
          "bull": 36.4,
          "base": 38.5,
          "bear": 25.1
        },
        "integratedRead": "현재 시장 PER이 유지된다는 가정의 기준가 아래입니다. 실적 전망 유지 여부를 확인하며 접근할 구간입니다.",
        "formula": "기준=내년 예상 EPS×현재 시장 PER, 보수=기준×0.64, 낙관=기준×1.55",
        "notice": "가격 밴드는 매수 신호가 아니며 EPS 하향·기업 악재가 생기면 즉시 다시 계산합니다."
      },
      "trackRecord": {
        "status": "collecting",
        "settledCount": 0,
        "hitRate20": null,
        "brier20": null,
        "avgExcess20": null,
        "confidenceAdjustment": 0.0,
        "recentOutcomes": [],
        "notice": "20거래일 SPY 대비 방향 적중과 Brier score를 기록하며, 8건 전에는 신뢰도를 보정하지 않습니다."
      },
      "history": [
        {
          "asOf": 1787313613.7807624,
          "date": "2026-08-21",
          "fundamentalScore": 25.3,
          "confidence": 78.5,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 36.4,
            "base": 38.5,
            "bear": 25.1
          },
          "currentPrice": 247.99000549316406,
          "valuationGap": -0.272,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        }
      ],
      "thesisHistory": [
        {
          "asOf": 1787313613.7807624,
          "date": "2026-08-21",
          "overallStatus": "intact",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        }
      ],
      "limitations": [
        "점수는 현재 캐시에 있는 공시·컨센서스·구조화 뉴스만 사용합니다.",
        "시나리오 수치는 예측 확률이 아니라 현재 근거의 상대 가중치입니다.",
        "특이항목 원인은 공식 공시 또는 수동 검증 기록이 없으면 추정하지 않습니다."
      ]
    },
    "MRVL": {
      "ticker": "MRVL",
      "asOf": 1787313613.7807624,
      "modelVersion": "fundamental-v1.2",
      "fundamentalScore": 35.9,
      "confidence": 100,
      "fundamentalSigma": null,
      "fundamentalSigmaProgress": {
        "status": "collecting",
        "collected": 1,
        "required": 8,
        "remaining": 7,
        "expectedReadyDate": "2026-08-28",
        "notice": "같은 KST 날짜의 반복 실행은 한 건으로 교체하며, 임의 과거 점수를 만들어 채우지 않습니다."
      },
      "priceSigma": 1.71,
      "priceDamage": 57.0,
      "fundamentalDamage": 0,
      "thesisDamage": 0,
      "thesisStatus": "strengthening",
      "damageRead": "가격 조정이 펀더멘털 변화보다 큽니다. 수급·멀티플 조정 가능성이 있으나, 다음 실적과 중요 뉴스를 확인해야 합니다.",
      "dimensions": {
        "growth": {
          "score": 53.12333266666667,
          "applicable": true
        },
        "earningsQuality": {
          "score": 89.88734432974397,
          "applicable": true
        },
        "cashFlow": {
          "score": 19.99283975368753,
          "applicable": true
        },
        "competitivePosition": {
          "score": 0.0,
          "applicable": true
        },
        "customerDemand": {
          "score": 0.0,
          "applicable": true
        },
        "balanceSheet": {
          "score": 10.7984,
          "applicable": true
        }
      },
      "officialEvidence": [
        {
          "id": "sec-annual",
          "kind": "confirmed_fact",
          "label": "연간 재무 수치",
          "source": "SEC Company Facts",
          "period": "2026",
          "detail": "매출·영업이익·순이익·현금흐름 핵심 항목을 SEC 원문 수치로 교차검증했습니다.",
          "url": "https://data.sec.gov/api/xbrl/companyfacts/"
        },
        {
          "id": "sec-quarterly",
          "kind": "confirmed_fact",
          "label": "분기 손익 수치",
          "source": "SEC Company Facts",
          "period": "Q2'26",
          "detail": "최근 분기 매출·영업이익·순이익을 SEC 3개월 보고값과 교차검증했습니다.",
          "url": "https://data.sec.gov/api/xbrl/companyfacts/"
        }
      ],
      "evidenceSummary": {
        "confirmedFacts": 2,
        "credibleReports": 0,
        "needsConfirmation": 8,
        "aiInferences": 8
      },
      "evidence": [
        {
          "headline": "분석가는 Marvell의 Google AI 거래로 1,200억 달러의 엄청난 기회를 얻을 수 있다고 말합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787228312,
          "sourceUrl": "https://finnhub.io/api/news?id=a1db5cb0d5fde30c9941cc028cc4062f471dd101bfa5a86d3c6b5fb160f71f58",
          "verificationStatus": "needs_confirmation",
          "reason": "사업·실적 연결 경로 확인 필요",
          "direction": "positive",
          "impact": 2.0
        },
        {
          "headline": "Marvell Technology: Google과의 122억 달러 규모의 거래가 엄청나게 유익한 이유",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1787221144,
          "sourceUrl": "https://finnhub.io/api/news?id=0cc7f51ab765279a8768d07c2f8734e8112595c50744b39a0c87b0b99b7ed788",
          "verificationStatus": "needs_confirmation",
          "reason": "회사 실적과의 연결고리 확인",
          "direction": "positive",
          "impact": 4.0
        },
        {
          "headline": "Marvell: 거래와 희석은 모두 현실입니다",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1787214238,
          "sourceUrl": "https://finnhub.io/api/news?id=b5fbd015aa9fe59291856988109e96ec2f864c527b3f49ec724d7fc320554a99",
          "verificationStatus": "needs_confirmation",
          "reason": "회사 실적과의 연결고리 확인",
          "direction": "negative",
          "impact": -5.0
        },
        {
          "headline": "Marvell, Google 거래에 뛰어들다",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1787161425,
          "sourceUrl": "https://finnhub.io/api/news?id=51ace3d5fb5d7a5b702eb2d19980758b78e0c04d20dd7e908a3abb0d3b8ae002",
          "verificationStatus": "needs_confirmation",
          "reason": "사업·실적 연결 경로 확인 필요",
          "direction": "positive",
          "impact": 4.0
        },
        {
          "headline": "Marvell은 Alphabet과의 새로운 AI 거래에도 불구하고 매우 위험합니다",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1787148912,
          "sourceUrl": "https://finnhub.io/api/news?id=1fc826bb58c12a64eda93eedb38f7fef433fbd62aeeb51b0835e971898cc5918",
          "verificationStatus": "needs_confirmation",
          "reason": "사업·실적 연결 경로 확인 필요",
          "direction": "positive",
          "impact": 4.0
        },
        {
          "headline": "Marvell은 Alphabet의 거래를 따냈습니다. 모든 것이 변경됩니다(업그레이드)",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1787147454,
          "sourceUrl": "https://finnhub.io/api/news?id=3d43c746f0dbb97241e734fe4bda17e4e10a8f572faa86b8719fb158727659c3",
          "verificationStatus": "needs_confirmation",
          "reason": "사업·실적 연결 경로 확인 필요",
          "direction": "positive",
          "impact": 4.0
        },
        {
          "headline": "Marvell은 Google이 최대 122억 달러의 주식을 매입할 수 있는 AI 칩 거래에서 6%의 이익을 얻습니다.",
          "eventLabel": "경쟁사 공급 계약",
          "publishedAt": 1787137685,
          "sourceUrl": "https://finnhub.io/api/news?id=c9b4190634fc00669c88233fc42770d49901fdc0f4b44de410eb9b78af92c5fb",
          "verificationStatus": "needs_confirmation",
          "reason": "Google TPU 생태계 진입 가능성과 커스텀 실리콘 성장 기회",
          "direction": "positive",
          "impact": 3.0
        },
        {
          "headline": "Broadcom의 라이벌 Marvell, Google이 AI 칩 거래를 성사시킨 후 급등, 122억 달러 규모의 지분 매입 옵션 확보",
          "eventLabel": "경쟁사 공급 계약",
          "publishedAt": 1787135863,
          "sourceUrl": "https://finnhub.io/api/news?id=ee610846551e06b5814d7484d6a8749e30197f4ffe09530a339f56f4264a3b15",
          "verificationStatus": "needs_confirmation",
          "reason": "Google TPU 생태계 진입 가능성과 커스텀 실리콘 성장 기회",
          "direction": "positive",
          "impact": 3.0
        }
      ],
      "topPositive": [
        "사업·실적 연결 경로 확인 필요",
        "회사 실적과의 연결고리 확인",
        "사업·실적 연결 경로 확인 필요"
      ],
      "topNegative": [
        "회사 실적과의 연결고리 확인"
      ],
      "nextChecks": [
        "다음 실적의 매출·EPS·마진",
        "핵심 고객 수요·CAPEX",
        "FCF와 부채·CAPEX 변화"
      ],
      "theses": [
        {
          "id": "growth",
          "name": "성장 Thesis",
          "statement": "매출·EPS 성장 전망이 유지되고 본업 수익성이 함께 개선된다.",
          "status": "strengthening",
          "score": 53.1,
          "confidence": 100,
          "falsificationRules": [
            "내년 매출·EPS 추정치가 함께 하향",
            "매출 둔화와 마진 하락이 동시에 확인"
          ]
        },
        {
          "id": "cashFlow",
          "name": "현금창출 Thesis",
          "statement": "본업 성장이 영업현금과 잉여현금흐름으로 전환된다.",
          "status": "intact",
          "score": 20.0,
          "confidence": 100,
          "falsificationRules": [
            "FCF가 2개 연도 연속 감소",
            "OCF 감소와 CAPEX 부담 증가가 동시에 발생"
          ]
        },
        {
          "id": "resilience",
          "name": "경쟁·재무 Thesis",
          "statement": "경쟁·고객 집중·재무 부담이 장기 사업 경쟁력을 훼손하지 않는다.",
          "status": "intact",
          "score": 3.6,
          "confidence": 100,
          "falsificationRules": [
            "핵심 고객 이탈 또는 점유율 하락이 공식 수치로 확인",
            "부채 부담 상승과 사업 리스크 확대가 동시 발생"
          ]
        }
      ],
      "scenarios": {
        "bull": 39.2,
        "base": 37.4,
        "bear": 23.4
      },
      "alerts": [],
      "businessProfile": {
        "updatedAt": null,
        "customers": [],
        "strengths": [],
        "risks": [],
        "sources": [],
        "latestChanges": [
          {
            "headline": "분석가는 Marvell의 Google AI 거래로 1,200억 달러의 엄청난 기회를 얻을 수 있다고 말합니다.",
            "eventLabel": "AI·데이터센터 투자 변화",
            "publishedAt": 1787228312,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=a1db5cb0d5fde30c9941cc028cc4062f471dd101bfa5a86d3c6b5fb160f71f58",
            "reason": "사업·실적 연결 경로 확인 필요"
          },
          {
            "headline": "Marvell Technology: Google과의 122억 달러 규모의 거래가 엄청나게 유익한 이유",
            "eventLabel": "주요 고객 계약",
            "publishedAt": 1787221144,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=0cc7f51ab765279a8768d07c2f8734e8112595c50744b39a0c87b0b99b7ed788",
            "reason": "회사 실적과의 연결고리 확인"
          },
          {
            "headline": "Marvell: 거래와 희석은 모두 현실입니다",
            "eventLabel": "워런트·신주·희석 가능성",
            "publishedAt": 1787214238,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=b5fbd015aa9fe59291856988109e96ec2f864c527b3f49ec724d7fc320554a99",
            "reason": "회사 실적과의 연결고리 확인"
          },
          {
            "headline": "Marvell, Google 거래에 뛰어들다",
            "eventLabel": "주요 고객 계약",
            "publishedAt": 1787161425,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=51ace3d5fb5d7a5b702eb2d19980758b78e0c04d20dd7e908a3abb0d3b8ae002",
            "reason": "사업·실적 연결 경로 확인 필요"
          },
          {
            "headline": "Marvell은 Alphabet과의 새로운 AI 거래에도 불구하고 매우 위험합니다",
            "eventLabel": "주요 고객 계약",
            "publishedAt": 1787148912,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=1fc826bb58c12a64eda93eedb38f7fef433fbd62aeeb51b0835e971898cc5918",
            "reason": "사업·실적 연결 경로 확인 필요"
          },
          {
            "headline": "Marvell은 Alphabet의 거래를 따냈습니다. 모든 것이 변경됩니다(업그레이드)",
            "eventLabel": "주요 고객 계약",
            "publishedAt": 1787147454,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=3d43c746f0dbb97241e734fe4bda17e4e10a8f572faa86b8719fb158727659c3",
            "reason": "사업·실적 연결 경로 확인 필요"
          }
        ],
        "status": "available",
        "notice": "정성 사업정보는 마지막 확인일 이후의 구조화 중요 뉴스를 별도 변경 항목으로 덧붙입니다."
      },
      "earningsQualityReview": {
        "status": "reviewed",
        "period": "Q2'26",
        "reportedNetIncome": 34500000.0,
        "normalizedIncome": 40920000.0,
        "normalizedGap": -0.1569,
        "findings": [],
        "coreRead": "보고 순이익과 정상화이익 차이가 커 헤드라인 순이익을 그대로 본업 성과로 보기 어렵습니다.",
        "manualContext": {
          "date": "2026-08-10",
          "period": "2026-06-01 마감 분기(회사 발표 기준 FY2027 1분기)",
          "headline": "매출은 견조($2.418B, 가이던스 중간값 상회)한데 GAAP 순이익은 단 $34.5M(마진 1.4%) - 직전 4분기 평균 마진(32%대)에서 크게 추락.",
          "oneTime": "완전한 '1회성'이라기보다 이 회사 특유의 구조적 회계 특성: 같은 분기 비GAAP(조정) 순이익은 $718.0M으로 GAAP과 684백만달러 차이가 남. 이 차이는 주식보상비용(SBC)·인수한 무형자산 상각·구조조정 비용 등 비현금성·M&A 관련 항목들 - 마벨이 AI 커스텀 실리콘 사업 확장을 위해 인수를 많이 해온 회사라 매 분기 반복되는 구조적 항목임(한 번성 이벤트 아님).",
          "coreRead": "본업은 실제로 좋음 - 매출이 가이던스를 웃돌았고, 영업활동현금흐름은 $638.8M으로 역대 최고. GAAP 순이익만 놓고 '실적이 나빠졌다'고 보면 완전히 틀린 해석 - 비GAAP 순이익(+$718M)과 영업현금흐름이 본업 실력에 훨씬 가까움.",
          "forecast": "이 회사는 GAAP-비GAAP 괴리가 매 분기 반복되는 구조라, 앞으로도 GAAP 순이익만 보면 계속 실제보다 나빠 보일 수 있음 - 다음 분기부터는 매출·영업현금흐름·비GAAP 순이익 위주로 판단하는 게 나음. 다만 커스텀 AI 반도체(XPU) 사업 자체의 원가율이 구조적으로 낮아서(마진이 얇은 사업) 장기적으로 전사 마진 자체가 눌릴 수 있다는 점은 별개의 진짜 리스크로 남아있음.",
          "confidence": "GAAP-비GAAP 괴리와 영업현금흐름 수치는 회사 공식 발표 기준(신뢰도 높음) · 향후 마진 추세 전망은 추정(신뢰도 중간)"
        }
      },
      "valuationScenario": {
        "status": "available",
        "price": 243.07,
        "currentEps": 4.05405,
        "nextEps": 6.24898,
        "epsGrowth": 0.5414,
        "marketPe": 59.96,
        "conservative": 239.79,
        "base": 374.67,
        "optimistic": 580.74,
        "currentVsBase": -0.3512,
        "analystTargetMean": 259.9142,
        "analystTargetLow": 126.0,
        "analystTargetHigh": 400.0,
        "evidenceWeights": {
          "bull": 39.2,
          "base": 37.4,
          "bear": 23.4
        },
        "integratedRead": "현재 시장 PER이 유지된다는 가정의 기준가 아래입니다. 실적 전망 유지 여부를 확인하며 접근할 구간입니다.",
        "formula": "기준=내년 예상 EPS×현재 시장 PER, 보수=기준×0.64, 낙관=기준×1.55",
        "notice": "가격 밴드는 매수 신호가 아니며 EPS 하향·기업 악재가 생기면 즉시 다시 계산합니다."
      },
      "trackRecord": {
        "status": "collecting",
        "settledCount": 0,
        "hitRate20": null,
        "brier20": null,
        "avgExcess20": null,
        "confidenceAdjustment": 0.0,
        "recentOutcomes": [],
        "notice": "20거래일 SPY 대비 방향 적중과 Brier score를 기록하며, 8건 전에는 신뢰도를 보정하지 않습니다."
      },
      "history": [
        {
          "asOf": 1787313613.7807624,
          "date": "2026-08-21",
          "fundamentalScore": 35.9,
          "confidence": 100,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "strengthening",
          "scenarioWeights": {
            "bull": 39.2,
            "base": 37.4,
            "bear": 23.4
          },
          "currentPrice": 243.07000732421875,
          "valuationGap": -0.3512,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        }
      ],
      "thesisHistory": [
        {
          "asOf": 1787313613.7807624,
          "date": "2026-08-21",
          "overallStatus": "strengthening",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        }
      ],
      "limitations": [
        "점수는 현재 캐시에 있는 공시·컨센서스·구조화 뉴스만 사용합니다.",
        "시나리오 수치는 예측 확률이 아니라 현재 근거의 상대 가중치입니다.",
        "특이항목 원인은 공식 공시 또는 수동 검증 기록이 없으면 추정하지 않습니다."
      ]
    },
    "INTC": {
      "ticker": "INTC",
      "asOf": 1787313613.7807624,
      "modelVersion": "fundamental-v1.2",
      "fundamentalScore": 7.3,
      "confidence": 100,
      "fundamentalSigma": null,
      "fundamentalSigmaProgress": {
        "status": "collecting",
        "collected": 1,
        "required": 8,
        "remaining": 7,
        "expectedReadyDate": "2026-08-28",
        "notice": "같은 KST 날짜의 반복 실행은 한 건으로 교체하며, 임의 과거 점수를 만들어 채우지 않습니다."
      },
      "priceSigma": -0.62,
      "priceDamage": 20.7,
      "fundamentalDamage": 84.5,
      "thesisDamage": 63.0,
      "thesisStatus": "damaged",
      "damageRead": "펀더멘털 위험 신호가 가격에 충분히 반영되지 않았을 가능성이 있습니다.",
      "dimensions": {
        "growth": {
          "score": 28.56999933333333,
          "applicable": true
        },
        "earningsQuality": {
          "score": 49.18768976622286,
          "applicable": true
        },
        "cashFlow": {
          "score": -54.19455799693408,
          "applicable": true
        },
        "competitivePosition": {
          "score": 0.0,
          "applicable": true
        },
        "customerDemand": {
          "score": 0.0,
          "applicable": true
        },
        "balanceSheet": {
          "score": -10.1957,
          "applicable": true
        }
      },
      "officialEvidence": [
        {
          "id": "sec-annual",
          "kind": "confirmed_fact",
          "label": "연간 재무 수치",
          "source": "SEC Company Facts",
          "period": "2025",
          "detail": "매출·영업이익·순이익·현금흐름 핵심 항목을 SEC 원문 수치로 교차검증했습니다.",
          "url": "https://data.sec.gov/api/xbrl/companyfacts/"
        },
        {
          "id": "sec-quarterly",
          "kind": "confirmed_fact",
          "label": "분기 손익 수치",
          "source": "SEC Company Facts",
          "period": "Q2'26",
          "detail": "최근 분기 매출·영업이익·순이익을 SEC 3개월 보고값과 교차검증했습니다.",
          "url": "https://data.sec.gov/api/xbrl/companyfacts/"
        }
      ],
      "evidenceSummary": {
        "confirmedFacts": 4,
        "credibleReports": 0,
        "needsConfirmation": 6,
        "aiInferences": 8
      },
      "evidence": [
        {
          "headline": "텐센트, 메타딜 청산으로 마누스 최대주주로 올라 텐센트, 페이스북 모기업 메타로부터 중국 인공지능 개발자 마누스 지분 인수해 최대 기업으로 성장",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1786621274,
          "sourceUrl": "https://finnhub.io/api/news?id=d11879ecc00cfe961d0b9427413876c6169fb16bcb2b9b809664dd9b3c2a0d0d",
          "verificationStatus": "needs_confirmation",
          "reason": "사업·실적 연결 경로 확인 필요",
          "direction": "positive",
          "impact": 4.0
        },
        {
          "headline": "Alphabet, Amazon, Meta Platform 및 Microsoft: 이러한 주식 중 하나는 향후 12개월 동안 상승 여력이 가장 적은 것처럼 보이지만 문제가 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1786563660,
          "sourceUrl": "https://finnhub.io/api/news?id=2743c4a0a093bef477eba4a0a9e9bc0ccb4677ce6623fa9695f0ae0caa6d1d6c",
          "verificationStatus": "needs_confirmation",
          "reason": "사업·실적 연결 경로 확인 필요",
          "direction": "positive",
          "impact": 2.0
        },
        {
          "headline": "분석가는 인텔의 200억 달러 자본 조달이 파운드리 사업에 대한 낙관적인 소식이라고 말합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1786538449,
          "sourceUrl": "https://finnhub.io/api/news?id=a56b79e8ef5dbb4aafe65515c8c15168b7e26bb4b9a60b5355b74b1b2aff97a5",
          "verificationStatus": "needs_confirmation",
          "reason": "사업·실적 연결 경로 확인 필요",
          "direction": "positive",
          "impact": 2.0
        },
        {
          "headline": "인텔은 주식 공모를 200억 달러로 늘렸습니다. 이것이 ASML에게 좋은 소식인 이유.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1786480020,
          "sourceUrl": "https://finnhub.io/api/news?id=a1496c06da8bffd21287216bd5731d6fa5deaa76fed8fba32205f989887bb8cb",
          "verificationStatus": "needs_confirmation",
          "reason": "사업·실적 연결 경로 확인 필요",
          "direction": "negative",
          "impact": -5.0
        },
        {
          "headline": "INTC SEC Form 8-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1786460400.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/50863/000119312526346806/d117670d8k.htm",
          "verificationStatus": "confirmed",
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기",
          "direction": "mixed",
          "impact": 0
        },
        {
          "headline": "INTC SEC Form 424B5 공식 제출",
          "eventLabel": "증권등록·투자설명서 제출",
          "publishedAt": 1786460400.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/50863/000119312526345221/d98483d424b5.htm",
          "verificationStatus": "confirmed",
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기",
          "direction": "negative",
          "impact": -5.0
        },
        {
          "headline": "인텔이 주식 공모를 200억 달러로 늘리는 이유",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1786437660,
          "sourceUrl": "https://finnhub.io/api/news?id=cc3e9a957ec2390155fa739eefbc9e828aa31b53ed3f2e4c76dca4ccfd216c26",
          "verificationStatus": "needs_confirmation",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "direction": "negative",
          "impact": -5.0
        },
        {
          "headline": "CPI 카운트다운이 시작되면서 S&P 500, Nasdaq, Dow 선물이 혼합되었습니다: INTC, SLS, SPCX, RKLB, ASTS, RIOT, FRMI 주식이 주목받는 이유",
          "eventLabel": "실적 발표",
          "publishedAt": 1786437214,
          "sourceUrl": "https://finnhub.io/api/news?id=ed3ebaad429867949cc2a2be8ad01fbb1079e34a31499f03efa43a5b02c3e876",
          "verificationStatus": "needs_confirmation",
          "reason": "사업·실적 연결 경로 확인 필요",
          "direction": "negative",
          "impact": -2.0
        }
      ],
      "topPositive": [
        "사업·실적 연결 경로 확인 필요",
        "사업·실적 연결 경로 확인 필요",
        "사업·실적 연결 경로 확인 필요"
      ],
      "topNegative": [
        "사업·실적 연결 경로 확인 필요",
        "SEC 제출 사실 확인, 세부 내용 분석 대기",
        "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
      ],
      "nextChecks": [
        "다음 실적의 매출·EPS·마진",
        "핵심 고객 수요·CAPEX",
        "FCF와 부채·CAPEX 변화"
      ],
      "theses": [
        {
          "id": "growth",
          "name": "성장 Thesis",
          "statement": "매출·EPS 성장 전망이 유지되고 본업 수익성이 함께 개선된다.",
          "status": "strengthening",
          "score": 28.6,
          "confidence": 100,
          "falsificationRules": [
            "내년 매출·EPS 추정치가 함께 하향",
            "매출 둔화와 마진 하락이 동시에 확인"
          ]
        },
        {
          "id": "cashFlow",
          "name": "현금창출 Thesis",
          "statement": "본업 성장이 영업현금과 잉여현금흐름으로 전환된다.",
          "status": "damaged",
          "score": -54.2,
          "confidence": 100,
          "falsificationRules": [
            "FCF가 2개 연도 연속 감소",
            "OCF 감소와 CAPEX 부담 증가가 동시에 발생"
          ]
        },
        {
          "id": "resilience",
          "name": "경쟁·재무 Thesis",
          "statement": "경쟁·고객 집중·재무 부담이 장기 사업 경쟁력을 훼손하지 않는다.",
          "status": "intact",
          "score": -3.4,
          "confidence": 100,
          "falsificationRules": [
            "핵심 고객 이탈 또는 점유율 하락이 공식 수치로 확인",
            "부채 부담 상승과 사업 리스크 확대가 동시 발생"
          ]
        }
      ],
      "scenarios": {
        "bull": 25.7,
        "base": 37.7,
        "bear": 36.6
      },
      "alerts": [],
      "businessProfile": {
        "updatedAt": null,
        "customers": [],
        "strengths": [],
        "risks": [],
        "sources": [],
        "latestChanges": [
          {
            "headline": "텐센트, 메타딜 청산으로 마누스 최대주주로 올라 텐센트, 페이스북 모기업 메타로부터 중국 인공지능 개발자 마누스 지분 인수해 최대 기업으로 성장",
            "eventLabel": "주요 고객 계약",
            "publishedAt": 1786621274,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=d11879ecc00cfe961d0b9427413876c6169fb16bcb2b9b809664dd9b3c2a0d0d",
            "reason": "사업·실적 연결 경로 확인 필요"
          },
          {
            "headline": "Alphabet, Amazon, Meta Platform 및 Microsoft: 이러한 주식 중 하나는 향후 12개월 동안 상승 여력이 가장 적은 것처럼 보이지만 문제가 있습니다.",
            "eventLabel": "AI·데이터센터 투자 변화",
            "publishedAt": 1786563660,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=2743c4a0a093bef477eba4a0a9e9bc0ccb4677ce6623fa9695f0ae0caa6d1d6c",
            "reason": "사업·실적 연결 경로 확인 필요"
          },
          {
            "headline": "분석가는 인텔의 200억 달러 자본 조달이 파운드리 사업에 대한 낙관적인 소식이라고 말합니다.",
            "eventLabel": "AI·데이터센터 투자 변화",
            "publishedAt": 1786538449,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=a56b79e8ef5dbb4aafe65515c8c15168b7e26bb4b9a60b5355b74b1b2aff97a5",
            "reason": "사업·실적 연결 경로 확인 필요"
          },
          {
            "headline": "인텔은 주식 공모를 200억 달러로 늘렸습니다. 이것이 ASML에게 좋은 소식인 이유.",
            "eventLabel": "워런트·신주·희석 가능성",
            "publishedAt": 1786480020,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=a1496c06da8bffd21287216bd5731d6fa5deaa76fed8fba32205f989887bb8cb",
            "reason": "사업·실적 연결 경로 확인 필요"
          },
          {
            "headline": "INTC SEC Form 8-K 공식 제출",
            "eventLabel": "중요사항 공시",
            "publishedAt": 1786460400.0,
            "direction": "mixed",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/50863/000119312526346806/d117670d8k.htm",
            "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
          },
          {
            "headline": "INTC SEC Form 424B5 공식 제출",
            "eventLabel": "증권등록·투자설명서 제출",
            "publishedAt": 1786460400.0,
            "direction": "negative",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/50863/000119312526345221/d98483d424b5.htm",
            "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
          }
        ],
        "status": "available",
        "notice": "정성 사업정보는 마지막 확인일 이후의 구조화 중요 뉴스를 별도 변경 항목으로 덧붙입니다."
      },
      "earningsQualityReview": {
        "status": "reviewed",
        "period": "Q2'26",
        "reportedNetIncome": -11033000000.0,
        "normalizedIncome": -3390200000.0,
        "normalizedGap": 2.2544,
        "findings": [
          {
            "key": "unusualItems",
            "label": "비경상 항목",
            "amount": -12738000000.0,
            "revenueRatio": 0.7898,
            "repeatCount": 5,
            "classification": "recurring_risk",
            "recurrenceRead": "최근 6개 기간 중 두 번 이상 나타나 반복 가능성을 열어둡니다."
          },
          {
            "key": "unusualItemsExGoodwill",
            "label": "영업권 제외 비경상 항목",
            "amount": -12738000000.0,
            "revenueRatio": 0.7898,
            "repeatCount": 5,
            "classification": "recurring_risk",
            "recurrenceRead": "최근 6개 기간 중 두 번 이상 나타나 반복 가능성을 열어둡니다."
          },
          {
            "key": "unusualTaxEffect",
            "label": "비경상 세금 효과",
            "amount": -5095200000.0,
            "revenueRatio": 0.3159,
            "repeatCount": 3,
            "classification": "recurring_risk",
            "recurrenceRead": "최근 6개 기간 중 두 번 이상 나타나 반복 가능성을 열어둡니다."
          }
        ],
        "coreRead": "보고 순이익에 의미 있는 특이항목이 확인됩니다. 본업은 매출·영업이익·정상화이익을 우선해 읽어야 합니다.",
        "manualContext": {
          "date": "2026-08-10",
          "period": "2026년 여러 분기 연속 대규모 GAAP 순손실 (2026-03 마감 분기 -$3.7B 등)",
          "headline": "매출은 AI 수요 덕에 회복세($13.6B, 이후 분기엔 $16.1B로 +25% YoY)인데, GAAP 순손실이 분기마다 수십억달러 규모로 반복됨(-$3.7B, 이후 분기 -$11.0B 등).",
          "oneTime": "매 분기 다른 대형 비현금성/구조조정 항목이 원인 - ①모빌아이(Mobileye) 사업 관련 $3.9B 영업권 손상차손 ②CHIPS Act(미국 반도체지원법) 에스크로 주식 관련 $12.5B 비현금 비용 ③수억달러 규모의 인력감축·구조조정 비용이 여러 분기에 걸쳐 반복적으로 발생 - 하나의 '1회성 이벤트'가 아니라 파운드리 사업 턴어라운드 과정에서 계속 나오는 대형 비용들의 연속.",
          "coreRead": "제품 매출 자체는 AI 수요로 개선되고 있음(+25% YoY) - 문제는 본업(제품 판매)이 아니라 ①파운드리(위탁생산) 사업부의 지속적인 영업손실과 ②그 사업을 정상화하는 과정에서 나오는 대형 손상차손·구조조정 비용. 반도체 설계 자체보다 '파운드리 사업으로의 전환 비용'이 GAAP 실적을 계속 짓누르는 구조.",
          "forecast": "이런 대형 일회성 성격의 비용들이 앞으로도 몇 분기는 더 나올 가능성이 높음(파운드리 턴어라운드가 진행형) - GAAP 순손실이 계속돼도 그 자체를 '악화'로 보지 말고, 매 분기 손실의 '항목'이 반복되는 구조조정 성격인지 새로운 악재인지를 확인해야 함. 제품 매출 성장률(AI 수요)이 계속 유지되는지가 진짜 본업 신호. 파운드리 부문이 흑자 전환하는 시점이 이 종목의 실질적 반등 신호가 될 가능성이 높음(아직 요원함).",
          "confidence": "손상차손·구조조정 비용 항목과 매출 성장률은 회사 공식 발표 기준(신뢰도 높음) · 향후 몇 분기 더 지속될지에 대한 전망은 추정(신뢰도 중간)"
        }
      },
      "valuationScenario": {
        "status": "available",
        "price": 92.05,
        "currentEps": 1.5129,
        "nextEps": 2.04013,
        "epsGrowth": 0.3485,
        "marketPe": 60.84,
        "conservative": 79.44,
        "base": 124.13,
        "optimistic": 192.4,
        "currentVsBase": -0.2584,
        "analystTargetMean": 114.87805,
        "analystTargetLow": 75.0,
        "analystTargetHigh": 200.0,
        "evidenceWeights": {
          "bull": 25.7,
          "base": 37.7,
          "bear": 36.6
        },
        "integratedRead": "현재 시장 PER이 유지된다는 가정의 기준가 아래입니다. 실적 전망 유지 여부를 확인하며 접근할 구간입니다.",
        "formula": "기준=내년 예상 EPS×현재 시장 PER, 보수=기준×0.64, 낙관=기준×1.55",
        "notice": "가격 밴드는 매수 신호가 아니며 EPS 하향·기업 악재가 생기면 즉시 다시 계산합니다."
      },
      "trackRecord": {
        "status": "collecting",
        "settledCount": 0,
        "hitRate20": null,
        "brier20": null,
        "avgExcess20": null,
        "confidenceAdjustment": 0.0,
        "recentOutcomes": [],
        "notice": "20거래일 SPY 대비 방향 적중과 Brier score를 기록하며, 8건 전에는 신뢰도를 보정하지 않습니다."
      },
      "history": [
        {
          "asOf": 1787313613.7807624,
          "date": "2026-08-21",
          "fundamentalScore": 7.3,
          "confidence": 100,
          "fundamentalDamage": 84.5,
          "thesisDamage": 63.0,
          "thesisStatus": "damaged",
          "scenarioWeights": {
            "bull": 25.7,
            "base": 37.7,
            "bear": 36.6
          },
          "currentPrice": 92.05010223388672,
          "valuationGap": -0.2584,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "damaged",
            "resilience": "intact"
          }
        }
      ],
      "thesisHistory": [
        {
          "asOf": 1787313613.7807624,
          "date": "2026-08-21",
          "overallStatus": "damaged",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "damaged",
            "resilience": "intact"
          }
        }
      ],
      "limitations": [
        "점수는 현재 캐시에 있는 공시·컨센서스·구조화 뉴스만 사용합니다.",
        "시나리오 수치는 예측 확률이 아니라 현재 근거의 상대 가중치입니다.",
        "특이항목 원인은 공식 공시 또는 수동 검증 기록이 없으면 추정하지 않습니다."
      ]
    },
    "TSM": {
      "ticker": "TSM",
      "asOf": 1787313613.7807624,
      "modelVersion": "fundamental-v1.2",
      "fundamentalScore": 21.6,
      "confidence": 87.1,
      "fundamentalSigma": null,
      "fundamentalSigmaProgress": {
        "status": "collecting",
        "collected": 1,
        "required": 8,
        "remaining": 7,
        "expectedReadyDate": "2026-08-28",
        "notice": "같은 KST 날짜의 반복 실행은 한 건으로 교체하며, 임의 과거 점수를 만들어 채우지 않습니다."
      },
      "priceSigma": 0.24,
      "priceDamage": 7.9,
      "fundamentalDamage": 0,
      "thesisDamage": 0,
      "thesisStatus": "strengthening",
      "damageRead": "현재 가격 변동과 펀더멘털 변화 사이에 큰 괴리는 확인되지 않았습니다.",
      "dimensions": {
        "growth": {
          "score": 25.896666666666665,
          "applicable": true
        },
        "earningsQuality": {
          "score": 41.07201133709775,
          "applicable": true
        },
        "cashFlow": {
          "score": 27.616325213032347,
          "applicable": true
        },
        "competitivePosition": {
          "score": 0.0,
          "applicable": true
        },
        "customerDemand": {
          "score": 0.0,
          "applicable": true
        },
        "balanceSheet": {
          "score": 18.6257,
          "applicable": true
        }
      },
      "officialEvidence": [],
      "evidenceSummary": {
        "confirmedFacts": 4,
        "credibleReports": 0,
        "needsConfirmation": 3,
        "aiInferences": 7
      },
      "evidence": [
        {
          "headline": "20년 전 대만 반도체에 투자한 1000달러가 오늘날 이 정도 가치가 될 것입니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1786962640,
          "sourceUrl": "https://finnhub.io/api/news?id=5b38c8d8239c2a11948fc03b2c539db254ba530969e46d4f3d592c03fbc0d3ce",
          "verificationStatus": "needs_confirmation",
          "reason": "사업·실적 연결 경로 확인 필요",
          "direction": "positive",
          "impact": 2.0
        },
        {
          "headline": "TSM SEC Form 6-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1786633200.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1046179/000104617926000541/tsm-fsx20260814x6k.htm",
          "verificationStatus": "confirmed",
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기",
          "direction": "mixed",
          "impact": 0
        },
        {
          "headline": "ASML Holding N.V.(ASML) 대 Taiwan Semiconductor Manufacturing Company Limited(TSM): 주요 공급업체는 AI 붐을 따라잡을 수 있다고 말합니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1786541926,
          "sourceUrl": "https://finnhub.io/api/news?id=14826e30a1bdde9f772f4961c2bcc688f62b80dd8111d0872189a8cd821cb167",
          "verificationStatus": "needs_confirmation",
          "reason": "사업·실적 연결 경로 확인 필요",
          "direction": "positive",
          "impact": 4.0
        },
        {
          "headline": "MSFT 주식, 올해 최고 수준 기록: Microsoft, AI 칩 생산량 증가 보도",
          "eventLabel": "실적 발표",
          "publishedAt": 1786380865,
          "sourceUrl": "https://finnhub.io/api/news?id=d83f4d38a5ddf96afc007fea6d9b45885d617167e90700791ab7fc9ecca51282",
          "verificationStatus": "needs_confirmation",
          "reason": "사업·실적 연결 경로 확인 필요",
          "direction": "negative",
          "impact": -2.0
        },
        {
          "headline": "TSM SEC Form 6-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1786374000.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1046179/000104617926000539/sonysemiconductorsolutions.htm",
          "verificationStatus": "confirmed",
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기",
          "direction": "mixed",
          "impact": 0
        },
        {
          "headline": "TSM SEC Form 6-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1786374000.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1046179/000104617926000536/tsm-boardx20260811.htm",
          "verificationStatus": "confirmed",
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기",
          "direction": "mixed",
          "impact": 0
        },
        {
          "headline": "TSM SEC Form 6-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1786287600.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1046179/000104617926000471/tsm-revenue20260810.htm",
          "verificationStatus": "confirmed",
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기",
          "direction": "mixed",
          "impact": 0
        }
      ],
      "topPositive": [
        "사업·실적 연결 경로 확인 필요",
        "사업·실적 연결 경로 확인 필요"
      ],
      "topNegative": [
        "사업·실적 연결 경로 확인 필요"
      ],
      "nextChecks": [
        "다음 실적의 매출·EPS·마진",
        "핵심 고객 수요·CAPEX",
        "FCF와 부채·CAPEX 변화"
      ],
      "theses": [
        {
          "id": "growth",
          "name": "성장 Thesis",
          "statement": "매출·EPS 성장 전망이 유지되고 본업 수익성이 함께 개선된다.",
          "status": "strengthening",
          "score": 25.9,
          "confidence": 87.1,
          "falsificationRules": [
            "내년 매출·EPS 추정치가 함께 하향",
            "매출 둔화와 마진 하락이 동시에 확인"
          ]
        },
        {
          "id": "cashFlow",
          "name": "현금창출 Thesis",
          "statement": "본업 성장이 영업현금과 잉여현금흐름으로 전환된다.",
          "status": "strengthening",
          "score": 27.6,
          "confidence": 87.1,
          "falsificationRules": [
            "FCF가 2개 연도 연속 감소",
            "OCF 감소와 CAPEX 부담 증가가 동시에 발생"
          ]
        },
        {
          "id": "resilience",
          "name": "경쟁·재무 Thesis",
          "statement": "경쟁·고객 집중·재무 부담이 장기 사업 경쟁력을 훼손하지 않는다.",
          "status": "intact",
          "score": 6.2,
          "confidence": 87.1,
          "falsificationRules": [
            "핵심 고객 이탈 또는 점유율 하락이 공식 수치로 확인",
            "부채 부담 상승과 사업 리스크 확대가 동시 발생"
          ]
        }
      ],
      "scenarios": {
        "bull": 35.8,
        "base": 38.6,
        "bear": 25.6
      },
      "alerts": [],
      "businessProfile": {
        "updatedAt": "2026-08-10",
        "customers": [
          "엔비디아·애플·AMD·퀄컴·브로드컴·아마존·구글·인텔·테슬라 등 사실상 전세계 팹리스(설계전문) 반도체 기업 대부분에 위탁생산 공급",
          "2026년 들어 엔비디아가 애플을 제치고 최대 고객으로 올라섬(추정 매출 비중 엔비디아 약 22% vs 애플 약 18%) - AI 반도체 수요 급증이 배경",
          "고성능컴퓨팅(HPC, AI 가속기 등)이 2025년부터 매출 비중 1위(58%)로 모바일(애플向)을 추월"
        ],
        "strengths": [
          "첨단 파운드리(위탁생산) 시장 점유율 72%대(2026년 1분기)로 압도적 1위, 격차가 더 벌어지는 추세",
          "가장 앞선 공정기술 보유 - 2nm 양산 시작(애플이 초기 고객), 3nm은 수요가 공급을 초과할 정도로 강세"
        ],
        "risks": [
          "⚠️ 대만해협 지정학적 리스크 - 첨단 공정(5nm 이하)의 90%가 여전히 대만에 집중돼 있음. 미국 애리조나 공장에 1650억달러 투자를 발표했지만, 2nm 이하 첨단 공정이 대만 밖에서 의미 있는 규모로 돌아가려면 2027~2028년 이후로 예상됨 - 지정학적 리스크가 단기간엔 구조적으로 해소되기 어려움",
          "고객사(엔비디아 등)의 AI 설비투자 사이클에 실적이 크게 연동 - AI 수요가 꺾이면 영향이 큼",
          "이 종목은 대만 현지 상장 기준으로 잡혀 시가총액·52주 고저가가 이 대시보드에서 의도적으로 숨겨져 있음(CLAUDE.md '데이터 소스' 항목 참고) - 재무 수치 비교 시 통화 단위에 유의"
        ],
        "sources": [
          {
            "title": "Nvidia set to supplant Apple as TSMC's top customer (CNBC, 2026-01-26)",
            "url": "https://www.cnbc.com/2026/01/26/nvidia-set-to-supplant-apple-as-tsmcs-largest-customer.html"
          },
          {
            "title": "TSMC Gains Foundry Share in Q1 '26 (Semiecosystem)",
            "url": "https://marklapedus.substack.com/p/tsmc-gains-foundry-share-in-q1-26"
          },
          {
            "title": "Geopolitical Tension Puts TSMC Valuation And Supply Chain Resilience In Focus (Yahoo Finance)",
            "url": "https://finance.yahoo.com/markets/stocks/articles/geopolitical-tension-puts-tsmc-valuation-140635317.html"
          }
        ],
        "latestChanges": [
          {
            "headline": "20년 전 대만 반도체에 투자한 1000달러가 오늘날 이 정도 가치가 될 것입니다.",
            "eventLabel": "AI·데이터센터 투자 변화",
            "publishedAt": 1786962640,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=5b38c8d8239c2a11948fc03b2c539db254ba530969e46d4f3d592c03fbc0d3ce",
            "reason": "사업·실적 연결 경로 확인 필요"
          },
          {
            "headline": "TSM SEC Form 6-K 공식 제출",
            "eventLabel": "중요사항 공시",
            "publishedAt": 1786633200.0,
            "direction": "mixed",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1046179/000104617926000541/tsm-fsx20260814x6k.htm",
            "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
          },
          {
            "headline": "ASML Holding N.V.(ASML) 대 Taiwan Semiconductor Manufacturing Company Limited(TSM): 주요 공급업체는 AI 붐을 따라잡을 수 있다고 말합니다.",
            "eventLabel": "주요 고객 계약",
            "publishedAt": 1786541926,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=14826e30a1bdde9f772f4961c2bcc688f62b80dd8111d0872189a8cd821cb167",
            "reason": "사업·실적 연결 경로 확인 필요"
          },
          {
            "headline": "MSFT 주식, 올해 최고 수준 기록: Microsoft, AI 칩 생산량 증가 보도",
            "eventLabel": "실적 발표",
            "publishedAt": 1786380865,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=d83f4d38a5ddf96afc007fea6d9b45885d617167e90700791ab7fc9ecca51282",
            "reason": "사업·실적 연결 경로 확인 필요"
          },
          {
            "headline": "TSM SEC Form 6-K 공식 제출",
            "eventLabel": "중요사항 공시",
            "publishedAt": 1786374000.0,
            "direction": "mixed",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1046179/000104617926000539/sonysemiconductorsolutions.htm",
            "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
          },
          {
            "headline": "TSM SEC Form 6-K 공식 제출",
            "eventLabel": "중요사항 공시",
            "publishedAt": 1786374000.0,
            "direction": "mixed",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1046179/000104617926000536/tsm-boardx20260811.htm",
            "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
          }
        ],
        "status": "available",
        "notice": "정성 사업정보는 마지막 확인일 이후의 구조화 중요 뉴스를 별도 변경 항목으로 덧붙입니다."
      },
      "earningsQualityReview": {
        "status": "reviewed",
        "period": "Q2'26",
        "reportedNetIncome": 706562000000.0,
        "normalizedIncome": 706562000000.0,
        "normalizedGap": 0.0,
        "findings": [],
        "coreRead": "현재 수집된 항목만 보면 최신 기간 순이익을 크게 왜곡하는 특이항목은 확인되지 않았습니다.",
        "manualContext": null
      },
      "valuationScenario": {
        "status": "available",
        "price": 415.78,
        "currentEps": 16.89809,
        "nextEps": 21.78127,
        "epsGrowth": 0.289,
        "marketPe": 24.61,
        "conservative": 343.0,
        "base": 535.93,
        "optimistic": 830.69,
        "currentVsBase": -0.2242,
        "analystTargetMean": 554.45483,
        "analystTargetLow": 440.0,
        "analystTargetHigh": 700.0,
        "evidenceWeights": {
          "bull": 35.8,
          "base": 38.6,
          "bear": 25.6
        },
        "integratedRead": "현재 시장 PER이 유지된다는 가정의 기준가 아래입니다. 실적 전망 유지 여부를 확인하며 접근할 구간입니다.",
        "formula": "기준=내년 예상 EPS×현재 시장 PER, 보수=기준×0.64, 낙관=기준×1.55",
        "notice": "가격 밴드는 매수 신호가 아니며 EPS 하향·기업 악재가 생기면 즉시 다시 계산합니다."
      },
      "trackRecord": {
        "status": "collecting",
        "settledCount": 0,
        "hitRate20": null,
        "brier20": null,
        "avgExcess20": null,
        "confidenceAdjustment": 0.0,
        "recentOutcomes": [],
        "notice": "20거래일 SPY 대비 방향 적중과 Brier score를 기록하며, 8건 전에는 신뢰도를 보정하지 않습니다."
      },
      "history": [
        {
          "asOf": 1787313613.7807624,
          "date": "2026-08-21",
          "fundamentalScore": 21.6,
          "confidence": 87.1,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "strengthening",
          "scenarioWeights": {
            "bull": 35.8,
            "base": 38.6,
            "bear": 25.6
          },
          "currentPrice": 415.7799987792969,
          "valuationGap": -0.2242,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        }
      ],
      "thesisHistory": [
        {
          "asOf": 1787313613.7807624,
          "date": "2026-08-21",
          "overallStatus": "strengthening",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        }
      ],
      "limitations": [
        "점수는 현재 캐시에 있는 공시·컨센서스·구조화 뉴스만 사용합니다.",
        "시나리오 수치는 예측 확률이 아니라 현재 근거의 상대 가중치입니다.",
        "특이항목 원인은 공식 공시 또는 수동 검증 기록이 없으면 추정하지 않습니다."
      ]
    },
    "ASML": {
      "ticker": "ASML",
      "asOf": 1787313613.7807624,
      "modelVersion": "fundamental-v1.2",
      "fundamentalScore": 18.0,
      "confidence": 73.5,
      "fundamentalSigma": null,
      "fundamentalSigmaProgress": {
        "status": "collecting",
        "collected": 1,
        "required": 8,
        "remaining": 7,
        "expectedReadyDate": "2026-08-28",
        "notice": "같은 KST 날짜의 반복 실행은 한 건으로 교체하며, 임의 과거 점수를 만들어 채우지 않습니다."
      },
      "priceSigma": 0.36,
      "priceDamage": 11.9,
      "fundamentalDamage": 1.5,
      "thesisDamage": 7.0,
      "thesisStatus": "intact",
      "damageRead": "현재 가격 변동과 펀더멘털 변화 사이에 큰 괴리는 확인되지 않았습니다.",
      "dimensions": {
        "growth": {
          "score": 24.516666666666666,
          "applicable": true
        },
        "earningsQuality": {
          "score": 24.08905562068638,
          "applicable": true
        },
        "cashFlow": {
          "score": 30.70229326991886,
          "applicable": true
        },
        "competitivePosition": {
          "score": 0.0,
          "applicable": true
        },
        "customerDemand": {
          "score": 0.0,
          "applicable": true
        },
        "balanceSheet": {
          "score": 16.112099999999998,
          "applicable": true
        }
      },
      "officialEvidence": [],
      "evidenceSummary": {
        "confirmedFacts": 0,
        "credibleReports": 0,
        "needsConfirmation": 2,
        "aiInferences": 2
      },
      "evidence": [
        {
          "headline": "ASML Holding N.V.(ASML) 대 Taiwan Semiconductor Manufacturing Company Limited(TSM): 주요 공급업체는 AI 붐을 따라잡을 수 있다고 말합니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1786541926,
          "sourceUrl": "https://finnhub.io/api/news?id=14826e30a1bdde9f772f4961c2bcc688f62b80dd8111d0872189a8cd821cb167",
          "verificationStatus": "needs_confirmation",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "direction": "positive",
          "impact": 4.0
        },
        {
          "headline": "인텔은 주식 공모를 200억 달러로 늘렸습니다. 이것이 ASML에게 좋은 소식인 이유.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1786480020,
          "sourceUrl": "https://finnhub.io/api/news?id=a1496c06da8bffd21287216bd5731d6fa5deaa76fed8fba32205f989887bb8cb",
          "verificationStatus": "needs_confirmation",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "direction": "negative",
          "impact": -5.0
        }
      ],
      "topPositive": [
        "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
      ],
      "topNegative": [
        "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
      ],
      "nextChecks": [
        "다음 실적의 매출·EPS·마진",
        "핵심 고객 수요·CAPEX",
        "FCF와 부채·CAPEX 변화"
      ],
      "theses": [
        {
          "id": "growth",
          "name": "성장 Thesis",
          "statement": "매출·EPS 성장 전망이 유지되고 본업 수익성이 함께 개선된다.",
          "status": "strengthening",
          "score": 24.5,
          "confidence": 73.5,
          "falsificationRules": [
            "내년 매출·EPS 추정치가 함께 하향",
            "매출 둔화와 마진 하락이 동시에 확인"
          ]
        },
        {
          "id": "cashFlow",
          "name": "현금창출 Thesis",
          "statement": "본업 성장이 영업현금과 잉여현금흐름으로 전환된다.",
          "status": "strengthening",
          "score": 30.7,
          "confidence": 73.5,
          "falsificationRules": [
            "FCF가 2개 연도 연속 감소",
            "OCF 감소와 CAPEX 부담 증가가 동시에 발생"
          ]
        },
        {
          "id": "resilience",
          "name": "경쟁·재무 Thesis",
          "statement": "경쟁·고객 집중·재무 부담이 장기 사업 경쟁력을 훼손하지 않는다.",
          "status": "intact",
          "score": 5.4,
          "confidence": 73.5,
          "falsificationRules": [
            "핵심 고객 이탈 또는 점유율 하락이 공식 수치로 확인",
            "부채 부담 상승과 사업 리스크 확대가 동시 발생"
          ]
        }
      ],
      "scenarios": {
        "bull": 33.9,
        "base": 38.8,
        "bear": 27.3
      },
      "alerts": [],
      "businessProfile": {
        "updatedAt": null,
        "customers": [],
        "strengths": [],
        "risks": [],
        "sources": [],
        "latestChanges": [
          {
            "headline": "ASML Holding N.V.(ASML) 대 Taiwan Semiconductor Manufacturing Company Limited(TSM): 주요 공급업체는 AI 붐을 따라잡을 수 있다고 말합니다.",
            "eventLabel": "주요 고객 계약",
            "publishedAt": 1786541926,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=14826e30a1bdde9f772f4961c2bcc688f62b80dd8111d0872189a8cd821cb167",
            "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
          },
          {
            "headline": "인텔은 주식 공모를 200억 달러로 늘렸습니다. 이것이 ASML에게 좋은 소식인 이유.",
            "eventLabel": "워런트·신주·희석 가능성",
            "publishedAt": 1786480020,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=a1496c06da8bffd21287216bd5731d6fa5deaa76fed8fba32205f989887bb8cb",
            "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
          }
        ],
        "status": "available",
        "notice": "정성 사업정보는 마지막 확인일 이후의 구조화 중요 뉴스를 별도 변경 항목으로 덧붙입니다."
      },
      "earningsQualityReview": {
        "status": "reviewed",
        "period": "Q2'26",
        "reportedNetIncome": 2917600000.0,
        "normalizedIncome": 2917600000.0,
        "normalizedGap": 0.0,
        "findings": [],
        "coreRead": "현재 수집된 항목만 보면 최신 기간 순이익을 크게 왜곡하는 특이항목은 확인되지 않았습니다.",
        "manualContext": null
      },
      "valuationScenario": {
        "status": "available",
        "price": 1758.2,
        "currentEps": 38.02898,
        "nextEps": 51.42462,
        "epsGrowth": 0.3522,
        "marketPe": 46.23,
        "conservative": 1521.61,
        "base": 2377.52,
        "optimistic": 3685.16,
        "currentVsBase": -0.2605,
        "analystTargetMean": 2200.0234,
        "analystTargetLow": 905.1597,
        "analystTargetHigh": 2905.4954,
        "evidenceWeights": {
          "bull": 33.9,
          "base": 38.8,
          "bear": 27.3
        },
        "integratedRead": "현재 시장 PER이 유지된다는 가정의 기준가 아래입니다. 실적 전망 유지 여부를 확인하며 접근할 구간입니다.",
        "formula": "기준=내년 예상 EPS×현재 시장 PER, 보수=기준×0.64, 낙관=기준×1.55",
        "notice": "가격 밴드는 매수 신호가 아니며 EPS 하향·기업 악재가 생기면 즉시 다시 계산합니다."
      },
      "trackRecord": {
        "status": "collecting",
        "settledCount": 0,
        "hitRate20": null,
        "brier20": null,
        "avgExcess20": null,
        "confidenceAdjustment": 0.0,
        "recentOutcomes": [],
        "notice": "20거래일 SPY 대비 방향 적중과 Brier score를 기록하며, 8건 전에는 신뢰도를 보정하지 않습니다."
      },
      "history": [
        {
          "asOf": 1787313613.7807624,
          "date": "2026-08-21",
          "fundamentalScore": 18.0,
          "confidence": 73.5,
          "fundamentalDamage": 1.5,
          "thesisDamage": 7.0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 33.9,
            "base": 38.8,
            "bear": 27.3
          },
          "currentPrice": 1758.199951171875,
          "valuationGap": -0.2605,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        }
      ],
      "thesisHistory": [
        {
          "asOf": 1787313613.7807624,
          "date": "2026-08-21",
          "overallStatus": "intact",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        }
      ],
      "limitations": [
        "점수는 현재 캐시에 있는 공시·컨센서스·구조화 뉴스만 사용합니다.",
        "시나리오 수치는 예측 확률이 아니라 현재 근거의 상대 가중치입니다.",
        "특이항목 원인은 공식 공시 또는 수동 검증 기록이 없으면 추정하지 않습니다."
      ]
    },
    "AMAT": {
      "ticker": "AMAT",
      "asOf": 1787313613.7807624,
      "modelVersion": "fundamental-v1.2",
      "fundamentalScore": 12.6,
      "confidence": 100,
      "fundamentalSigma": null,
      "fundamentalSigmaProgress": {
        "status": "collecting",
        "collected": 1,
        "required": 8,
        "remaining": 7,
        "expectedReadyDate": "2026-08-28",
        "notice": "같은 KST 날짜의 반복 실행은 한 건으로 교체하며, 임의 과거 점수를 만들어 채우지 않습니다."
      },
      "priceSigma": -0.85,
      "priceDamage": 28.2,
      "fundamentalDamage": 16.0,
      "thesisDamage": 42.0,
      "thesisStatus": "damaged",
      "damageRead": "현재 가격 변동과 펀더멘털 변화 사이에 큰 괴리는 확인되지 않았습니다.",
      "dimensions": {
        "growth": {
          "score": 23.783333333333335,
          "applicable": true
        },
        "earningsQuality": {
          "score": 15.498015948679708,
          "applicable": true
        },
        "cashFlow": {
          "score": 8.052624549218644,
          "applicable": true
        },
        "competitivePosition": {
          "score": 0.0,
          "applicable": true
        },
        "customerDemand": {
          "score": 0.0,
          "applicable": true
        },
        "balanceSheet": {
          "score": 15.82,
          "applicable": true
        }
      },
      "officialEvidence": [
        {
          "id": "sec-annual",
          "kind": "confirmed_fact",
          "label": "연간 재무 수치",
          "source": "SEC Company Facts",
          "period": "2025",
          "detail": "매출·영업이익·순이익·현금흐름 핵심 항목을 SEC 원문 수치로 교차검증했습니다.",
          "url": "https://data.sec.gov/api/xbrl/companyfacts/"
        },
        {
          "id": "sec-quarterly",
          "kind": "confirmed_fact",
          "label": "분기 손익 수치",
          "source": "SEC Company Facts",
          "period": "Q3'26",
          "detail": "최근 분기 매출·영업이익·순이익을 SEC 3개월 보고값과 교차검증했습니다.",
          "url": "https://data.sec.gov/api/xbrl/companyfacts/"
        }
      ],
      "evidenceSummary": {
        "confirmedFacts": 4,
        "credibleReports": 0,
        "needsConfirmation": 2,
        "aiInferences": 4
      },
      "evidence": [
        {
          "headline": "AMAT SEC Form 10-Q 공식 제출",
          "eventLabel": "정기 실적 공시",
          "publishedAt": 1787151600.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/6951/000162828026058235/amat-20260726.htm",
          "verificationStatus": "confirmed",
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기",
          "direction": "mixed",
          "impact": 0
        },
        {
          "headline": "Tesla 인수 후 스웨덴 연합이 거의 3 년간의 파업을 종료함에 따라 TSLA 주가 상승",
          "eventLabel": "실적 발표",
          "publishedAt": 1786658320,
          "sourceUrl": "https://finnhub.io/api/news?id=8c3b3e474ad5c6247d385c0e99bc647cc12745d3382f82defc8ff1b2e76262f6",
          "verificationStatus": "needs_confirmation",
          "reason": "사업·실적 연결 경로 확인 필요",
          "direction": "negative",
          "impact": -2.0
        },
        {
          "headline": "SanDisk가 새로운 다년간 성장 계획을 수립하고 조정된 무료 현금 흐름 마진 50%를 목표로 한 후 SNDK 주가 상승",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1786636066,
          "sourceUrl": "https://finnhub.io/api/news?id=0da710356de174e0f4c5f4296fdb7c884c5e5de83a1d66cd424e9790925d757b",
          "verificationStatus": "needs_confirmation",
          "reason": "사업·실적 연결 경로 확인 필요",
          "direction": "negative",
          "impact": -4.0
        },
        {
          "headline": "AMAT SEC Form 8-K 공식 제출",
          "eventLabel": "실적·재무 공식 공시",
          "publishedAt": 1786546800.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/6951/000162828026056699/amat-20260813.htm",
          "verificationStatus": "confirmed",
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기",
          "direction": "mixed",
          "impact": 0
        }
      ],
      "topPositive": [],
      "topNegative": [
        "사업·실적 연결 경로 확인 필요",
        "사업·실적 연결 경로 확인 필요"
      ],
      "nextChecks": [
        "다음 실적의 매출·EPS·마진",
        "핵심 고객 수요·CAPEX",
        "FCF와 부채·CAPEX 변화"
      ],
      "theses": [
        {
          "id": "growth",
          "name": "성장 Thesis",
          "statement": "매출·EPS 성장 전망이 유지되고 본업 수익성이 함께 개선된다.",
          "status": "strengthening",
          "score": 23.8,
          "confidence": 100,
          "falsificationRules": [
            "내년 매출·EPS 추정치가 함께 하향",
            "매출 둔화와 마진 하락이 동시에 확인"
          ]
        },
        {
          "id": "cashFlow",
          "name": "현금창출 Thesis",
          "statement": "본업 성장이 영업현금과 잉여현금흐름으로 전환된다.",
          "status": "intact",
          "score": 8.1,
          "confidence": 100,
          "falsificationRules": [
            "FCF가 2개 연도 연속 감소",
            "OCF 감소와 CAPEX 부담 증가가 동시에 발생"
          ]
        },
        {
          "id": "resilience",
          "name": "경쟁·재무 Thesis",
          "statement": "경쟁·고객 집중·재무 부담이 장기 사업 경쟁력을 훼손하지 않는다.",
          "status": "intact",
          "score": 5.3,
          "confidence": 100,
          "falsificationRules": [
            "핵심 고객 이탈 또는 점유율 하락이 공식 수치로 확인",
            "부채 부담 상승과 사업 리스크 확대가 동시 발생"
          ]
        }
      ],
      "scenarios": {
        "bull": 29.2,
        "base": 37.9,
        "bear": 32.9
      },
      "alerts": [],
      "businessProfile": {
        "updatedAt": null,
        "customers": [],
        "strengths": [],
        "risks": [],
        "sources": [],
        "latestChanges": [
          {
            "headline": "AMAT SEC Form 10-Q 공식 제출",
            "eventLabel": "정기 실적 공시",
            "publishedAt": 1787151600.0,
            "direction": "mixed",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/6951/000162828026058235/amat-20260726.htm",
            "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
          },
          {
            "headline": "Tesla 인수 후 스웨덴 연합이 거의 3 년간의 파업을 종료함에 따라 TSLA 주가 상승",
            "eventLabel": "실적 발표",
            "publishedAt": 1786658320,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=8c3b3e474ad5c6247d385c0e99bc647cc12745d3382f82defc8ff1b2e76262f6",
            "reason": "사업·실적 연결 경로 확인 필요"
          },
          {
            "headline": "SanDisk가 새로운 다년간 성장 계획을 수립하고 조정된 무료 현금 흐름 마진 50%를 목표로 한 후 SNDK 주가 상승",
            "eventLabel": "AI·데이터센터 투자 변화",
            "publishedAt": 1786636066,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=0da710356de174e0f4c5f4296fdb7c884c5e5de83a1d66cd424e9790925d757b",
            "reason": "사업·실적 연결 경로 확인 필요"
          },
          {
            "headline": "AMAT SEC Form 8-K 공식 제출",
            "eventLabel": "실적·재무 공식 공시",
            "publishedAt": 1786546800.0,
            "direction": "mixed",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/6951/000162828026056699/amat-20260813.htm",
            "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
          }
        ],
        "status": "available",
        "notice": "정성 사업정보는 마지막 확인일 이후의 구조화 중요 뉴스를 별도 변경 항목으로 덧붙입니다."
      },
      "earningsQualityReview": {
        "status": "reviewed",
        "period": "Q3'26",
        "reportedNetIncome": 2538000000.0,
        "normalizedIncome": null,
        "normalizedGap": null,
        "findings": [],
        "coreRead": "현재 수집된 항목만 보면 최신 기간 순이익을 크게 왜곡하는 특이항목은 확인되지 않았습니다.",
        "manualContext": null
      },
      "valuationScenario": {
        "status": "available",
        "price": 494.05,
        "currentEps": 12.79222,
        "nextEps": 18.34123,
        "epsGrowth": 0.4338,
        "marketPe": 38.62,
        "conservative": 453.35,
        "base": 708.36,
        "optimistic": 1097.96,
        "currentVsBase": -0.3025,
        "analystTargetMean": 641.02856,
        "analystTargetLow": 358.0,
        "analystTargetHigh": 900.0,
        "evidenceWeights": {
          "bull": 29.2,
          "base": 37.9,
          "bear": 32.9
        },
        "integratedRead": "현재 시장 PER이 유지된다는 가정의 기준가 아래입니다. 실적 전망 유지 여부를 확인하며 접근할 구간입니다.",
        "formula": "기준=내년 예상 EPS×현재 시장 PER, 보수=기준×0.64, 낙관=기준×1.55",
        "notice": "가격 밴드는 매수 신호가 아니며 EPS 하향·기업 악재가 생기면 즉시 다시 계산합니다."
      },
      "trackRecord": {
        "status": "collecting",
        "settledCount": 0,
        "hitRate20": null,
        "brier20": null,
        "avgExcess20": null,
        "confidenceAdjustment": 0.0,
        "recentOutcomes": [],
        "notice": "20거래일 SPY 대비 방향 적중과 Brier score를 기록하며, 8건 전에는 신뢰도를 보정하지 않습니다."
      },
      "history": [
        {
          "asOf": 1787313613.7807624,
          "date": "2026-08-21",
          "fundamentalScore": 12.6,
          "confidence": 100,
          "fundamentalDamage": 16.0,
          "thesisDamage": 42.0,
          "thesisStatus": "damaged",
          "scenarioWeights": {
            "bull": 29.2,
            "base": 37.9,
            "bear": 32.9
          },
          "currentPrice": 494.04998779296875,
          "valuationGap": -0.3025,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        }
      ],
      "thesisHistory": [
        {
          "asOf": 1787313613.7807624,
          "date": "2026-08-21",
          "overallStatus": "damaged",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        }
      ],
      "limitations": [
        "점수는 현재 캐시에 있는 공시·컨센서스·구조화 뉴스만 사용합니다.",
        "시나리오 수치는 예측 확률이 아니라 현재 근거의 상대 가중치입니다.",
        "특이항목 원인은 공식 공시 또는 수동 검증 기록이 없으면 추정하지 않습니다."
      ]
    },
    "LRCX": {
      "ticker": "LRCX",
      "asOf": 1787313613.7807624,
      "modelVersion": "fundamental-v1.2",
      "fundamentalScore": 12.4,
      "confidence": 85.0,
      "fundamentalSigma": null,
      "fundamentalSigmaProgress": {
        "status": "collecting",
        "collected": 1,
        "required": 8,
        "remaining": 7,
        "expectedReadyDate": "2026-08-28",
        "notice": "같은 KST 날짜의 반복 실행은 한 건으로 교체하며, 임의 과거 점수를 만들어 채우지 않습니다."
      },
      "priceSigma": 0.08,
      "priceDamage": 2.5,
      "fundamentalDamage": 10.7,
      "thesisDamage": 28.0,
      "thesisStatus": "intact",
      "damageRead": "현재 가격 변동과 펀더멘털 변화 사이에 큰 괴리는 확인되지 않았습니다.",
      "dimensions": {
        "growth": {
          "score": 11.60666666666667,
          "applicable": true
        },
        "earningsQuality": {
          "score": 25.859120726801372,
          "applicable": true
        },
        "cashFlow": {
          "score": 15.17160631967253,
          "applicable": true
        },
        "competitivePosition": {
          "score": 0.0,
          "applicable": true
        },
        "customerDemand": {
          "score": 0.0,
          "applicable": true
        },
        "balanceSheet": {
          "score": 13.8045,
          "applicable": true
        }
      },
      "officialEvidence": [
        {
          "id": "sec-annual",
          "kind": "confirmed_fact",
          "label": "연간 재무 수치",
          "source": "SEC Company Facts",
          "period": "2026",
          "detail": "매출·영업이익·순이익·현금흐름 핵심 항목을 SEC 원문 수치로 교차검증했습니다.",
          "url": "https://data.sec.gov/api/xbrl/companyfacts/"
        },
        {
          "id": "sec-quarterly",
          "kind": "confirmed_fact",
          "label": "분기 손익 수치",
          "source": "SEC Company Facts",
          "period": "Q2'26",
          "detail": "최근 분기 매출·영업이익·순이익을 SEC 3개월 보고값과 교차검증했습니다.",
          "url": "https://data.sec.gov/api/xbrl/companyfacts/"
        }
      ],
      "evidenceSummary": {
        "confirmedFacts": 2,
        "credibleReports": 0,
        "needsConfirmation": 1,
        "aiInferences": 1
      },
      "evidence": [
        {
          "headline": "Lam Research(LRCX), 고객 수요 급증으로 AI 공급망 순풍 확보",
          "eventLabel": "공급망 문제",
          "publishedAt": 1786439482,
          "sourceUrl": "https://finnhub.io/api/news?id=0b8fba81d9e8efc083788830c1261fbe8d3e8364d9b983ce373d0708ac1c5995",
          "verificationStatus": "needs_confirmation",
          "reason": "회사 실적과의 연결고리 확인",
          "direction": "negative",
          "impact": -4.0
        }
      ],
      "topPositive": [],
      "topNegative": [
        "회사 실적과의 연결고리 확인"
      ],
      "nextChecks": [
        "다음 실적의 매출·EPS·마진",
        "핵심 고객 수요·CAPEX",
        "FCF와 부채·CAPEX 변화"
      ],
      "theses": [
        {
          "id": "growth",
          "name": "성장 Thesis",
          "statement": "매출·EPS 성장 전망이 유지되고 본업 수익성이 함께 개선된다.",
          "status": "intact",
          "score": 11.6,
          "confidence": 85.0,
          "falsificationRules": [
            "내년 매출·EPS 추정치가 함께 하향",
            "매출 둔화와 마진 하락이 동시에 확인"
          ]
        },
        {
          "id": "cashFlow",
          "name": "현금창출 Thesis",
          "statement": "본업 성장이 영업현금과 잉여현금흐름으로 전환된다.",
          "status": "intact",
          "score": 15.2,
          "confidence": 85.0,
          "falsificationRules": [
            "FCF가 2개 연도 연속 감소",
            "OCF 감소와 CAPEX 부담 증가가 동시에 발생"
          ]
        },
        {
          "id": "resilience",
          "name": "경쟁·재무 Thesis",
          "statement": "경쟁·고객 집중·재무 부담이 장기 사업 경쟁력을 훼손하지 않는다.",
          "status": "intact",
          "score": 4.6,
          "confidence": 85.0,
          "falsificationRules": [
            "핵심 고객 이탈 또는 점유율 하락이 공식 수치로 확인",
            "부채 부담 상승과 사업 리스크 확대가 동시 발생"
          ]
        }
      ],
      "scenarios": {
        "bull": 30.5,
        "base": 38.5,
        "bear": 31.0
      },
      "alerts": [],
      "businessProfile": {
        "updatedAt": null,
        "customers": [],
        "strengths": [],
        "risks": [],
        "sources": [],
        "latestChanges": [
          {
            "headline": "Lam Research(LRCX), 고객 수요 급증으로 AI 공급망 순풍 확보",
            "eventLabel": "공급망 문제",
            "publishedAt": 1786439482,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=0b8fba81d9e8efc083788830c1261fbe8d3e8364d9b983ce373d0708ac1c5995",
            "reason": "회사 실적과의 연결고리 확인"
          }
        ],
        "status": "available",
        "notice": "정성 사업정보는 마지막 확인일 이후의 구조화 중요 뉴스를 별도 변경 항목으로 덧붙입니다."
      },
      "earningsQualityReview": {
        "status": "reviewed",
        "period": "Q2'26",
        "reportedNetIncome": 2277282000.0,
        "normalizedIncome": 2291064360.764294,
        "normalizedGap": -0.006,
        "findings": [],
        "coreRead": "현재 수집된 항목만 보면 최신 기간 순이익을 크게 왜곡하는 특이항목은 확인되지 않았습니다.",
        "manualContext": null
      },
      "valuationScenario": {
        "status": "available",
        "price": 308.98,
        "currentEps": 9.45969,
        "nextEps": 11.55714,
        "epsGrowth": 0.2217,
        "marketPe": 32.66,
        "conservative": 241.59,
        "base": 377.49,
        "optimistic": 585.11,
        "currentVsBase": -0.1815,
        "analystTargetMean": 371.35483,
        "analystTargetLow": 290.0,
        "analystTargetHigh": 500.0,
        "evidenceWeights": {
          "bull": 30.5,
          "base": 38.5,
          "bear": 31.0
        },
        "integratedRead": "현재 시장 PER이 유지된다는 가정의 기준가 아래입니다. 실적 전망 유지 여부를 확인하며 접근할 구간입니다.",
        "formula": "기준=내년 예상 EPS×현재 시장 PER, 보수=기준×0.64, 낙관=기준×1.55",
        "notice": "가격 밴드는 매수 신호가 아니며 EPS 하향·기업 악재가 생기면 즉시 다시 계산합니다."
      },
      "trackRecord": {
        "status": "collecting",
        "settledCount": 0,
        "hitRate20": null,
        "brier20": null,
        "avgExcess20": null,
        "confidenceAdjustment": 0.0,
        "recentOutcomes": [],
        "notice": "20거래일 SPY 대비 방향 적중과 Brier score를 기록하며, 8건 전에는 신뢰도를 보정하지 않습니다."
      },
      "history": [
        {
          "asOf": 1787313613.7807624,
          "date": "2026-08-21",
          "fundamentalScore": 12.4,
          "confidence": 85.0,
          "fundamentalDamage": 10.7,
          "thesisDamage": 28.0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 30.5,
            "base": 38.5,
            "bear": 31.0
          },
          "currentPrice": 308.9800109863281,
          "valuationGap": -0.1815,
          "theses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        }
      ],
      "thesisHistory": [
        {
          "asOf": 1787313613.7807624,
          "date": "2026-08-21",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        }
      ],
      "limitations": [
        "점수는 현재 캐시에 있는 공시·컨센서스·구조화 뉴스만 사용합니다.",
        "시나리오 수치는 예측 확률이 아니라 현재 근거의 상대 가중치입니다.",
        "특이항목 원인은 공식 공시 또는 수동 검증 기록이 없으면 추정하지 않습니다."
      ]
    },
    "KLAC": {
      "ticker": "KLAC",
      "asOf": 1787313613.7807624,
      "modelVersion": "fundamental-v1.2",
      "fundamentalScore": 16.3,
      "confidence": 68.8,
      "fundamentalSigma": null,
      "fundamentalSigmaProgress": {
        "status": "collecting",
        "collected": 1,
        "required": 8,
        "remaining": 7,
        "expectedReadyDate": "2026-08-28",
        "notice": "같은 KST 날짜의 반복 실행은 한 건으로 교체하며, 임의 과거 점수를 만들어 채우지 않습니다."
      },
      "priceSigma": -0.69,
      "priceDamage": 23.0,
      "fundamentalDamage": 0,
      "thesisDamage": 0,
      "thesisStatus": "intact",
      "damageRead": "현재 가격 변동과 펀더멘털 변화 사이에 큰 괴리는 확인되지 않았습니다.",
      "dimensions": {
        "growth": {
          "score": 12.673333666666666,
          "applicable": true
        },
        "earningsQuality": {
          "score": 41.77,
          "applicable": true
        },
        "cashFlow": {
          "score": 20.273444714790095,
          "applicable": true
        },
        "competitivePosition": {
          "score": 0.0,
          "applicable": true
        },
        "customerDemand": {
          "score": 0.0,
          "applicable": true
        },
        "balanceSheet": {
          "score": 11.6552,
          "applicable": true
        }
      },
      "officialEvidence": [
        {
          "id": "sec-annual",
          "kind": "confirmed_fact",
          "label": "연간 재무 수치",
          "source": "SEC Company Facts",
          "period": "2026",
          "detail": "매출·영업이익·순이익·현금흐름 핵심 항목을 SEC 원문 수치로 교차검증했습니다.",
          "url": "https://data.sec.gov/api/xbrl/companyfacts/"
        },
        {
          "id": "sec-quarterly",
          "kind": "confirmed_fact",
          "label": "분기 손익 수치",
          "source": "SEC Company Facts",
          "period": "Q2'26",
          "detail": "최근 분기 매출·영업이익·순이익을 SEC 3개월 보고값과 교차검증했습니다.",
          "url": "https://data.sec.gov/api/xbrl/companyfacts/"
        }
      ],
      "evidenceSummary": {
        "confirmedFacts": 2,
        "credibleReports": 0,
        "needsConfirmation": 0,
        "aiInferences": 0
      },
      "evidence": [],
      "topPositive": [],
      "topNegative": [],
      "nextChecks": [
        "다음 실적의 매출·EPS·마진",
        "핵심 고객 수요·CAPEX",
        "FCF와 부채·CAPEX 변화"
      ],
      "theses": [
        {
          "id": "growth",
          "name": "성장 Thesis",
          "statement": "매출·EPS 성장 전망이 유지되고 본업 수익성이 함께 개선된다.",
          "status": "intact",
          "score": 12.7,
          "confidence": 68.8,
          "falsificationRules": [
            "내년 매출·EPS 추정치가 함께 하향",
            "매출 둔화와 마진 하락이 동시에 확인"
          ]
        },
        {
          "id": "cashFlow",
          "name": "현금창출 Thesis",
          "statement": "본업 성장이 영업현금과 잉여현금흐름으로 전환된다.",
          "status": "strengthening",
          "score": 20.3,
          "confidence": 68.8,
          "falsificationRules": [
            "FCF가 2개 연도 연속 감소",
            "OCF 감소와 CAPEX 부담 증가가 동시에 발생"
          ]
        },
        {
          "id": "resilience",
          "name": "경쟁·재무 Thesis",
          "statement": "경쟁·고객 집중·재무 부담이 장기 사업 경쟁력을 훼손하지 않는다.",
          "status": "intact",
          "score": 3.9,
          "confidence": 68.8,
          "falsificationRules": [
            "핵심 고객 이탈 또는 점유율 하락이 공식 수치로 확인",
            "부채 부담 상승과 사업 리스크 확대가 동시 발생"
          ]
        }
      ],
      "scenarios": {
        "bull": 34.3,
        "base": 39.2,
        "bear": 26.5
      },
      "alerts": [],
      "businessProfile": {
        "updatedAt": null,
        "customers": [],
        "strengths": [],
        "risks": [],
        "sources": [],
        "latestChanges": [],
        "status": "available",
        "notice": "정성 사업정보는 마지막 확인일 이후의 구조화 중요 뉴스를 별도 변경 항목으로 덧붙입니다."
      },
      "earningsQualityReview": {
        "status": "reviewed",
        "period": "Q2'26",
        "reportedNetIncome": 1363059000.0,
        "normalizedIncome": 1348248544.067485,
        "normalizedGap": 0.011,
        "findings": [],
        "coreRead": "현재 수집된 항목만 보면 최신 기간 순이익을 크게 왜곡하는 특이항목은 확인되지 않았습니다.",
        "manualContext": null
      },
      "valuationScenario": {
        "status": "available",
        "price": 187.26,
        "currentEps": 5.4493,
        "nextEps": 6.60384,
        "epsGrowth": 0.2119,
        "marketPe": 34.36,
        "conservative": 145.24,
        "base": 226.93,
        "optimistic": 351.75,
        "currentVsBase": -0.1748,
        "analystTargetMean": 231.77779,
        "analystTargetLow": 165.0,
        "analystTargetHigh": 325.0,
        "evidenceWeights": {
          "bull": 34.3,
          "base": 39.2,
          "bear": 26.5
        },
        "integratedRead": "현재 시장 PER이 유지된다는 가정의 기준가 아래입니다. 실적 전망 유지 여부를 확인하며 접근할 구간입니다.",
        "formula": "기준=내년 예상 EPS×현재 시장 PER, 보수=기준×0.64, 낙관=기준×1.55",
        "notice": "가격 밴드는 매수 신호가 아니며 EPS 하향·기업 악재가 생기면 즉시 다시 계산합니다."
      },
      "trackRecord": {
        "status": "collecting",
        "settledCount": 0,
        "hitRate20": null,
        "brier20": null,
        "avgExcess20": null,
        "confidenceAdjustment": 0.0,
        "recentOutcomes": [],
        "notice": "20거래일 SPY 대비 방향 적중과 Brier score를 기록하며, 8건 전에는 신뢰도를 보정하지 않습니다."
      },
      "history": [
        {
          "asOf": 1787313613.7807624,
          "date": "2026-08-21",
          "fundamentalScore": 16.3,
          "confidence": 68.8,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 34.3,
            "base": 39.2,
            "bear": 26.5
          },
          "currentPrice": 187.25999450683594,
          "valuationGap": -0.1748,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        }
      ],
      "thesisHistory": [
        {
          "asOf": 1787313613.7807624,
          "date": "2026-08-21",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        }
      ],
      "limitations": [
        "점수는 현재 캐시에 있는 공시·컨센서스·구조화 뉴스만 사용합니다.",
        "시나리오 수치는 예측 확률이 아니라 현재 근거의 상대 가중치입니다.",
        "특이항목 원인은 공식 공시 또는 수동 검증 기록이 없으면 추정하지 않습니다."
      ]
    },
    "MU": {
      "ticker": "MU",
      "asOf": 1787313613.7807624,
      "modelVersion": "fundamental-v1.2",
      "fundamentalScore": 55.1,
      "confidence": 100,
      "fundamentalSigma": null,
      "fundamentalSigmaProgress": {
        "status": "collecting",
        "collected": 1,
        "required": 8,
        "remaining": 7,
        "expectedReadyDate": "2026-08-28",
        "notice": "같은 KST 날짜의 반복 실행은 한 건으로 교체하며, 임의 과거 점수를 만들어 채우지 않습니다."
      },
      "priceSigma": 1.08,
      "priceDamage": 36.1,
      "fundamentalDamage": 0,
      "thesisDamage": 0,
      "thesisStatus": "strengthening",
      "damageRead": "현재 가격 변동과 펀더멘털 변화 사이에 큰 괴리는 확인되지 않았습니다.",
      "dimensions": {
        "growth": {
          "score": 85.80999666666666,
          "applicable": true
        },
        "earningsQuality": {
          "score": 85.17856708165021,
          "applicable": true
        },
        "cashFlow": {
          "score": 100,
          "applicable": true
        },
        "competitivePosition": {
          "score": 0.0,
          "applicable": true
        },
        "customerDemand": {
          "score": 0.0,
          "applicable": true
        },
        "balanceSheet": {
          "score": 10.738800000000001,
          "applicable": true
        }
      },
      "officialEvidence": [
        {
          "id": "sec-quarterly",
          "kind": "confirmed_fact",
          "label": "분기 손익 수치",
          "source": "SEC Company Facts",
          "period": "Q2'26",
          "detail": "최근 분기 매출·영업이익·순이익을 SEC 3개월 보고값과 교차검증했습니다.",
          "url": "https://data.sec.gov/api/xbrl/companyfacts/"
        }
      ],
      "evidenceSummary": {
        "confirmedFacts": 1,
        "credibleReports": 0,
        "needsConfirmation": 8,
        "aiInferences": 8
      },
      "evidence": [
        {
          "headline": "'Broadcom, 최신 AI 부채 거래에서 600억 달러 이상 모색' - Bloomberg",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787242528,
          "sourceUrl": "https://finnhub.io/api/news?id=be47314eef46f3b29cea6eeebfb187ebbd7607353b02e61277f02148e320b8f9",
          "verificationStatus": "needs_confirmation",
          "reason": "AI 서버 메모리 수요와 가격 강세",
          "direction": "positive",
          "impact": 2.0
        },
        {
          "headline": "BMO Capital은 Salesforce에서 우수한 성과를 유지하고 목표 가격을 230달러로 높였습니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1787232003,
          "sourceUrl": "https://finnhub.io/api/news?id=577f00b4dc8186ab9553d9fc43ff117d55928e5bfa1319baa5b1f9729b9f1c4b",
          "verificationStatus": "needs_confirmation",
          "reason": "AI 서버 메모리 수요와 가격 강세",
          "direction": "positive",
          "impact": 1.0
        },
        {
          "headline": "분석가는 Marvell의 Google AI 거래로 1,200억 달러의 엄청난 기회를 얻을 수 있다고 말합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787228312,
          "sourceUrl": "https://finnhub.io/api/news?id=a1db5cb0d5fde30c9941cc028cc4062f471dd101bfa5a86d3c6b5fb160f71f58",
          "verificationStatus": "needs_confirmation",
          "reason": "AI 서버 메모리 수요와 가격 강세",
          "direction": "positive",
          "impact": 2.0
        },
        {
          "headline": "Micron, 메모리 및 AI 발전을 위해 100억 달러 규모의 연구실 공개",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787220296,
          "sourceUrl": "https://finnhub.io/api/news?id=51b5addae5e8d30c7c91c2a81c0092a081a4dbe5ff962ef44222663b91c57f83",
          "verificationStatus": "needs_confirmation",
          "reason": "AI 서버 메모리 수요와 가격 강세",
          "direction": "positive",
          "impact": 2.0
        },
        {
          "headline": "Apple 제품을 구매하시나요? 비용을 지불하는 데 도움이 되는 4가지 도구",
          "eventLabel": "공급망 문제",
          "publishedAt": 1787212801,
          "sourceUrl": "https://finnhub.io/api/news?id=a03b08e1b2008c44e24564b7729d0b10f7da5eb33418846cce278009d8d4233d",
          "verificationStatus": "needs_confirmation",
          "reason": "메모리 ASP와 이익률 개선 가능성",
          "direction": "negative",
          "impact": -4.0
        },
        {
          "headline": "Micron의 500억 달러 규모의 Boise 증설이 어떻게 고향을 재편하고 있습니까?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1787209201,
          "sourceUrl": "https://finnhub.io/api/news?id=98636f5c0886d4bbd536f226b881f9749309da395293b977b98142800972e949",
          "verificationStatus": "needs_confirmation",
          "reason": "회사 실적과의 연결고리 확인",
          "direction": "negative",
          "impact": -4.0
        },
        {
          "headline": "'중국은 AI 경쟁이 확대됨에 따라 NVIDIA H200 칩에 대한 제한을 완화합니다. 베이징, 미국 라이벌을 따라잡기 위해 선도적인 기술 그룹을 돕기 위해 소규모 선적 허용 - Financial Times",
          "eventLabel": "경쟁사 공급 계약",
          "publishedAt": 1787157622,
          "sourceUrl": "https://finnhub.io/api/news?id=f3b54bed45cae16d5770db0c5b6a6167e474b3acd789e09a814bf92dc512a5f8",
          "verificationStatus": "needs_confirmation",
          "reason": "AI 서버 메모리 수요와 가격 강세",
          "direction": "positive",
          "impact": 3.0
        },
        {
          "headline": "AMD, 팀 라이언(Tim Ryan)을 이사회에 임명하고, 집주인 은퇴 후 KC McClure 감사 및 재무 위원회 의장으로 임명",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787156452,
          "sourceUrl": "https://finnhub.io/api/news?id=da69e4b6f7750cb1bbe806db07447d752ca772be9efc07c6e091723c8a097974",
          "verificationStatus": "needs_confirmation",
          "reason": "AI 서버 메모리 수요와 가격 강세",
          "direction": "positive",
          "impact": 2.0
        }
      ],
      "topPositive": [
        "AI 서버 메모리 수요와 가격 강세",
        "AI 서버 메모리 수요와 가격 강세",
        "AI 서버 메모리 수요와 가격 강세"
      ],
      "topNegative": [
        "메모리 ASP와 이익률 개선 가능성",
        "회사 실적과의 연결고리 확인"
      ],
      "nextChecks": [
        "다음 실적의 매출·EPS·마진",
        "핵심 고객 수요·CAPEX",
        "FCF와 부채·CAPEX 변화"
      ],
      "theses": [
        {
          "id": "growth",
          "name": "성장 Thesis",
          "statement": "매출·EPS 성장 전망이 유지되고 본업 수익성이 함께 개선된다.",
          "status": "strengthening",
          "score": 85.8,
          "confidence": 100,
          "falsificationRules": [
            "내년 매출·EPS 추정치가 함께 하향",
            "매출 둔화와 마진 하락이 동시에 확인"
          ]
        },
        {
          "id": "cashFlow",
          "name": "현금창출 Thesis",
          "statement": "본업 성장이 영업현금과 잉여현금흐름으로 전환된다.",
          "status": "strengthening",
          "score": 100,
          "confidence": 100,
          "falsificationRules": [
            "FCF가 2개 연도 연속 감소",
            "OCF 감소와 CAPEX 부담 증가가 동시에 발생"
          ]
        },
        {
          "id": "resilience",
          "name": "경쟁·재무 Thesis",
          "statement": "경쟁·고객 집중·재무 부담이 장기 사업 경쟁력을 훼손하지 않는다.",
          "status": "intact",
          "score": 3.6,
          "confidence": 100,
          "falsificationRules": [
            "핵심 고객 이탈 또는 점유율 하락이 공식 수치로 확인",
            "부채 부담 상승과 사업 리스크 확대가 동시 발생"
          ]
        }
      ],
      "scenarios": {
        "bull": 43.6,
        "base": 36.0,
        "bear": 20.4
      },
      "alerts": [],
      "businessProfile": {
        "updatedAt": null,
        "customers": [],
        "strengths": [],
        "risks": [],
        "sources": [],
        "latestChanges": [
          {
            "headline": "'Broadcom, 최신 AI 부채 거래에서 600억 달러 이상 모색' - Bloomberg",
            "eventLabel": "AI·데이터센터 투자 변화",
            "publishedAt": 1787242528,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=be47314eef46f3b29cea6eeebfb187ebbd7607353b02e61277f02148e320b8f9",
            "reason": "AI 서버 메모리 수요와 가격 강세"
          },
          {
            "headline": "BMO Capital은 Salesforce에서 우수한 성과를 유지하고 목표 가격을 230달러로 높였습니다.",
            "eventLabel": "애널리스트 목표주가 변경",
            "publishedAt": 1787232003,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=577f00b4dc8186ab9553d9fc43ff117d55928e5bfa1319baa5b1f9729b9f1c4b",
            "reason": "AI 서버 메모리 수요와 가격 강세"
          },
          {
            "headline": "분석가는 Marvell의 Google AI 거래로 1,200억 달러의 엄청난 기회를 얻을 수 있다고 말합니다.",
            "eventLabel": "AI·데이터센터 투자 변화",
            "publishedAt": 1787228312,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=a1db5cb0d5fde30c9941cc028cc4062f471dd101bfa5a86d3c6b5fb160f71f58",
            "reason": "AI 서버 메모리 수요와 가격 강세"
          },
          {
            "headline": "Micron, 메모리 및 AI 발전을 위해 100억 달러 규모의 연구실 공개",
            "eventLabel": "AI·데이터센터 투자 변화",
            "publishedAt": 1787220296,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=51b5addae5e8d30c7c91c2a81c0092a081a4dbe5ff962ef44222663b91c57f83",
            "reason": "AI 서버 메모리 수요와 가격 강세"
          },
          {
            "headline": "Apple 제품을 구매하시나요? 비용을 지불하는 데 도움이 되는 4가지 도구",
            "eventLabel": "공급망 문제",
            "publishedAt": 1787212801,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=a03b08e1b2008c44e24564b7729d0b10f7da5eb33418846cce278009d8d4233d",
            "reason": "메모리 ASP와 이익률 개선 가능성"
          },
          {
            "headline": "Micron의 500억 달러 규모의 Boise 증설이 어떻게 고향을 재편하고 있습니까?",
            "eventLabel": "공급망 문제",
            "publishedAt": 1787209201,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=98636f5c0886d4bbd536f226b881f9749309da395293b977b98142800972e949",
            "reason": "회사 실적과의 연결고리 확인"
          }
        ],
        "status": "available",
        "notice": "정성 사업정보는 마지막 확인일 이후의 구조화 중요 뉴스를 별도 변경 항목으로 덧붙입니다."
      },
      "earningsQualityReview": {
        "status": "reviewed",
        "period": "Q2'26",
        "reportedNetIncome": 28243000000.0,
        "normalizedIncome": 28243000000.0,
        "normalizedGap": 0.0,
        "findings": [],
        "coreRead": "현재 수집된 항목만 보면 최신 기간 순이익을 크게 왜곡하는 특이항목은 확인되지 않았습니다.",
        "manualContext": {
          "date": "2026-08-10",
          "period": "최근 3개 분기 연속 매출·마진 폭증 (2025-11 마감→2026-02 마감→2026-05 마감 추정)",
          "headline": "매출이 2분기 만에 거의 3배: $13.6B → $23.9B → $41.5B. 순이익률도 38% → 58% → 68%로 계속 올라감.",
          "oneTime": "1회성 아님 - 메모리(D램·낸드) 업계 전체의 '슈퍼사이클' 때문. AI 데이터센터가 메모리 공급의 약 70%를 소비하면서 2026년 D램 계약가가 분기마다 +93~98%, 그다음 분기 또 +58~63% 뛰는 등 가격 자체가 폭등 중(TrendForce 집계). 마이크론 개별 실적이 아니라 산업 전체가 겪고 있는 현상.",
          "coreRead": "회사가 갑자기 잘하게 된 게 아니라 '팔리는 가격'이 몇 배로 뛴 것 - 매출 성장의 대부분이 가격 요인. 다만 진짜 성장이긴 함(가격도 매출이니까), 다만 성격이 다름: 회사의 구조적 경쟁력 개선이 아니라 업계 전체가 누리는 사이클.",
          "forecast": "메모리는 역사적으로 항상 호황-불황을 반복해온 산업 - 지금 마진(68%)은 지속가능한 '정상' 수준이 아니라 사이클 정점에 가까울 가능성이 높음. 다음 분기도 가격이 계속 오르면 매출·마진이 더 좋아 보이겠지만, 가격 상승이 멈추거나 꺾이는 순간(공급 증설·수요 둔화) 마진이 빠르게 정상화될 수 있음 - '한 분기 더 좋았다'를 추세로 보지 말 것. 업계 재고·가격 동향(TrendForce 등)을 다음 분기 판단 기준으로 삼는 게 실적 숫자 자체보다 유용함.",
          "confidence": "가격 급등이라는 산업 현상 자체는 여러 소스로 교차 확인됨(신뢰도 높음) · 사이클 정점 여부·다음 분기 방향은 추정(신뢰도 중간, 메모리 사이클 타이밍은 예측이 특히 어려운 영역)"
        }
      },
      "valuationScenario": {
        "status": "available",
        "price": 958.91,
        "currentEps": 73.42721,
        "nextEps": 155.63986,
        "epsGrowth": 1.1196,
        "marketPe": 13.06,
        "conservative": 1300.84,
        "base": 2032.56,
        "optimistic": 3150.47,
        "currentVsBase": -0.5282,
        "analystTargetMean": 1521.6232,
        "analystTargetLow": 361.0,
        "analystTargetHigh": 2200.0,
        "evidenceWeights": {
          "bull": 43.6,
          "base": 36.0,
          "bear": 20.4
        },
        "integratedRead": "실적 기준 보수 가격 이하이면서 펀더멘털 훼손이 크지 않아 가격 부담이 낮은 후보입니다.",
        "formula": "기준=내년 예상 EPS×현재 시장 PER, 보수=기준×0.64, 낙관=기준×1.55",
        "notice": "가격 밴드는 매수 신호가 아니며 EPS 하향·기업 악재가 생기면 즉시 다시 계산합니다."
      },
      "trackRecord": {
        "status": "collecting",
        "settledCount": 0,
        "hitRate20": null,
        "brier20": null,
        "avgExcess20": null,
        "confidenceAdjustment": 0.0,
        "recentOutcomes": [],
        "notice": "20거래일 SPY 대비 방향 적중과 Brier score를 기록하며, 8건 전에는 신뢰도를 보정하지 않습니다."
      },
      "history": [
        {
          "asOf": 1787313613.7807624,
          "date": "2026-08-21",
          "fundamentalScore": 55.1,
          "confidence": 100,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "strengthening",
          "scenarioWeights": {
            "bull": 43.6,
            "base": 36.0,
            "bear": 20.4
          },
          "currentPrice": 958.9149780273438,
          "valuationGap": -0.5282,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        }
      ],
      "thesisHistory": [
        {
          "asOf": 1787313613.7807624,
          "date": "2026-08-21",
          "overallStatus": "strengthening",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        }
      ],
      "limitations": [
        "점수는 현재 캐시에 있는 공시·컨센서스·구조화 뉴스만 사용합니다.",
        "시나리오 수치는 예측 확률이 아니라 현재 근거의 상대 가중치입니다.",
        "특이항목 원인은 공식 공시 또는 수동 검증 기록이 없으면 추정하지 않습니다."
      ]
    },
    "SNDK": {
      "ticker": "SNDK",
      "asOf": 1787313613.7807624,
      "modelVersion": "fundamental-v1.2",
      "fundamentalScore": 10.3,
      "confidence": 100,
      "fundamentalSigma": null,
      "fundamentalSigmaProgress": {
        "status": "collecting",
        "collected": 1,
        "required": 8,
        "remaining": 7,
        "expectedReadyDate": "2026-08-28",
        "notice": "같은 KST 날짜의 반복 실행은 한 건으로 교체하며, 임의 과거 점수를 만들어 채우지 않습니다."
      },
      "priceSigma": 1.17,
      "priceDamage": 39.1,
      "fundamentalDamage": 16.7,
      "thesisDamage": 28.0,
      "thesisStatus": "intact",
      "damageRead": "현재 가격 변동과 펀더멘털 변화 사이에 큰 괴리는 확인되지 않았습니다.",
      "dimensions": {
        "growth": {
          "score": 13.890000333333333,
          "applicable": true
        },
        "earningsQuality": {
          "score": 100,
          "applicable": true
        },
        "cashFlow": {
          "score": -100,
          "applicable": true
        },
        "competitivePosition": {
          "score": 0.0,
          "applicable": true
        },
        "customerDemand": {
          "score": 0.0,
          "applicable": true
        },
        "balanceSheet": {
          "score": 12.149999999999999,
          "applicable": true
        }
      },
      "officialEvidence": [
        {
          "id": "sec-annual",
          "kind": "confirmed_fact",
          "label": "연간 재무 수치",
          "source": "SEC Company Facts",
          "period": "2026",
          "detail": "매출·영업이익·순이익·현금흐름 핵심 항목을 SEC 원문 수치로 교차검증했습니다.",
          "url": "https://data.sec.gov/api/xbrl/companyfacts/"
        },
        {
          "id": "sec-quarterly",
          "kind": "confirmed_fact",
          "label": "분기 손익 수치",
          "source": "SEC Company Facts",
          "period": "Q2'26",
          "detail": "최근 분기 매출·영업이익·순이익을 SEC 3개월 보고값과 교차검증했습니다.",
          "url": "https://data.sec.gov/api/xbrl/companyfacts/"
        }
      ],
      "evidenceSummary": {
        "confirmedFacts": 3,
        "credibleReports": 0,
        "needsConfirmation": 3,
        "aiInferences": 4
      },
      "evidence": [
        {
          "headline": "Sandisk: 강세론자들은 가치 평가와 순환성을 잘못 판단하고 있습니다",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1787239454,
          "sourceUrl": "https://finnhub.io/api/news?id=c7c5b25c2eafdadc430f1ba94c14e82aa7f27535dadac8fe761bc841e68ba1d6",
          "verificationStatus": "needs_confirmation",
          "reason": "회사 실적과의 연결고리 확인",
          "direction": "negative",
          "impact": -4.0
        },
        {
          "headline": "정오에 가장 큰 움직임을 보이는 주식: Meta, Amylyx, Baidu, Klarna, Coherent, Sandisk 등",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787057783,
          "sourceUrl": "https://finnhub.io/api/news?id=c72c281529f57a71ec992c40b253a421c53b8fa4b522b66a5a9c0b159bc2e730",
          "verificationStatus": "needs_confirmation",
          "reason": "사업·실적 연결 경로 확인 필요",
          "direction": "negative",
          "impact": -4.0
        },
        {
          "headline": "SNDK SEC Form 10-K 공식 제출",
          "eventLabel": "정기 실적 공시",
          "publishedAt": 1786892400.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/2023554/000162828026057406/sndk-20260703.htm",
          "verificationStatus": "confirmed",
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기",
          "direction": "mixed",
          "impact": 0
        },
        {
          "headline": "Sandisk: 순환 라벨의 가격은 책정되지만 계약은 무시됩니다(구매 시작).",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1786444989,
          "sourceUrl": "https://finnhub.io/api/news?id=6961ffda41f1c85b42a6c9d98c2b6dd3bfcd29e2bbb196e3287a32fa4f81739f",
          "verificationStatus": "needs_confirmation",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "direction": "positive",
          "impact": 4.0
        }
      ],
      "topPositive": [
        "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
      ],
      "topNegative": [
        "회사 실적과의 연결고리 확인",
        "사업·실적 연결 경로 확인 필요"
      ],
      "nextChecks": [
        "다음 실적의 매출·EPS·마진",
        "핵심 고객 수요·CAPEX",
        "FCF와 부채·CAPEX 변화"
      ],
      "theses": [
        {
          "id": "growth",
          "name": "성장 Thesis",
          "statement": "매출·EPS 성장 전망이 유지되고 본업 수익성이 함께 개선된다.",
          "status": "intact",
          "score": 13.9,
          "confidence": 100,
          "falsificationRules": [
            "내년 매출·EPS 추정치가 함께 하향",
            "매출 둔화와 마진 하락이 동시에 확인"
          ]
        },
        {
          "id": "cashFlow",
          "name": "현금창출 Thesis",
          "statement": "본업 성장이 영업현금과 잉여현금흐름으로 전환된다.",
          "status": "damaged",
          "score": -100,
          "confidence": 100,
          "falsificationRules": [
            "FCF가 2개 연도 연속 감소",
            "OCF 감소와 CAPEX 부담 증가가 동시에 발생"
          ]
        },
        {
          "id": "resilience",
          "name": "경쟁·재무 Thesis",
          "statement": "경쟁·고객 집중·재무 부담이 장기 사업 경쟁력을 훼손하지 않는다.",
          "status": "intact",
          "score": 4.0,
          "confidence": 100,
          "falsificationRules": [
            "핵심 고객 이탈 또는 점유율 하락이 공식 수치로 확인",
            "부채 부담 상승과 사업 리스크 확대가 동시 발생"
          ]
        }
      ],
      "scenarios": {
        "bull": 30.4,
        "base": 38.4,
        "bear": 31.2
      },
      "alerts": [],
      "businessProfile": {
        "updatedAt": null,
        "customers": [],
        "strengths": [],
        "risks": [],
        "sources": [],
        "latestChanges": [
          {
            "headline": "Sandisk: 강세론자들은 가치 평가와 순환성을 잘못 판단하고 있습니다",
            "eventLabel": "규제·소송·수출 제한",
            "publishedAt": 1787239454,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=c7c5b25c2eafdadc430f1ba94c14e82aa7f27535dadac8fe761bc841e68ba1d6",
            "reason": "회사 실적과의 연결고리 확인"
          },
          {
            "headline": "정오에 가장 큰 움직임을 보이는 주식: Meta, Amylyx, Baidu, Klarna, Coherent, Sandisk 등",
            "eventLabel": "AI·데이터센터 투자 변화",
            "publishedAt": 1787057783,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=c72c281529f57a71ec992c40b253a421c53b8fa4b522b66a5a9c0b159bc2e730",
            "reason": "사업·실적 연결 경로 확인 필요"
          },
          {
            "headline": "SNDK SEC Form 10-K 공식 제출",
            "eventLabel": "정기 실적 공시",
            "publishedAt": 1786892400.0,
            "direction": "mixed",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/2023554/000162828026057406/sndk-20260703.htm",
            "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
          },
          {
            "headline": "Sandisk: 순환 라벨의 가격은 책정되지만 계약은 무시됩니다(구매 시작).",
            "eventLabel": "주요 고객 계약",
            "publishedAt": 1786444989,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=6961ffda41f1c85b42a6c9d98c2b6dd3bfcd29e2bbb196e3287a32fa4f81739f",
            "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
          }
        ],
        "status": "available",
        "notice": "정성 사업정보는 마지막 확인일 이후의 구조화 중요 뉴스를 별도 변경 항목으로 덧붙입니다."
      },
      "earningsQualityReview": {
        "status": "reviewed",
        "period": "Q2'26",
        "reportedNetIncome": 3615000000.0,
        "normalizedIncome": null,
        "normalizedGap": null,
        "findings": [],
        "coreRead": "현재 수집된 항목만 보면 최신 기간 순이익을 크게 왜곡하는 특이항목은 확인되지 않았습니다.",
        "manualContext": {
          "date": "2026-08-10",
          "period": "최근 2개 분기 매출 급증 (2026-01 마감→2026-04 마감 추정, SNDK는 2025년 WDC에서 분사)",
          "headline": "매출 $3.0B → $5.95B(+97%), 순이익률 26.5% → 60.8%로 급등. 1년 전(2025년 초)엔 대규모 적자(마진 -114%)였음.",
          "oneTime": "1년 전 대규모 적자는 WDC로부터의 분사(spin-off) 관련 일회성 비용일 가능성이 높음(정확한 항목은 미확인). 최근 급등은 MU와 동일한 메모리(낸드) 슈퍼사이클 - 낸드 가격이 분기마다 +85~90%, +55~60%씩 뛰는 업계 전체 현상. 실제로 SNDK의 최근 분기 매출은 전년비 +251%로 보도됨(낸드 가격 급등이 원인).",
          "coreRead": "MU와 같은 논리 - 회사 경쟁력이 아니라 낸드 가격 급등이 매출·마진을 밀어올림. 다만 1년 전 적자에서 지금 60%대 마진까지의 낙폭이 워낙 커서, 이 회사는 사이클에 특히 민감한(레버리지 큰) 구조로 보임 - 오르는 국면에서 크게 오르고, 내리는 국면에서도 크게 내렸었다는 뜻.",
          "forecast": "MU와 동일한 리스크: 낸드 가격 상승이 멈추면 마진이 빠르게 되돌아갈 수 있음. 이 회사는 순수 낸드 플레이어라 D램도 같이 파는 MU보다 사이클 방향에 더 크게 흔들릴 가능성 - 다음 분기도 낸드 가격 동향이 핵심 변수.",
          "confidence": "산업 가격 상승 현상은 신뢰도 높음 · 회사별 민감도 비교(SNDK가 더 크게 흔들릴 것이라는 판단)는 추정(신뢰도 중간)"
        }
      },
      "valuationScenario": {
        "status": "available",
        "price": 1600.79,
        "currentEps": 214.09818,
        "nextEps": 264.72162,
        "epsGrowth": 0.2364,
        "marketPe": 7.48,
        "conservative": 1266.75,
        "base": 1979.3,
        "optimistic": 3067.91,
        "currentVsBase": -0.1912,
        "analystTargetMean": 2126.1738,
        "analystTargetLow": 1000.0,
        "analystTargetHigh": 3600.0,
        "evidenceWeights": {
          "bull": 30.4,
          "base": 38.4,
          "bear": 31.2
        },
        "integratedRead": "현재 시장 PER이 유지된다는 가정의 기준가 아래입니다. 실적 전망 유지 여부를 확인하며 접근할 구간입니다.",
        "formula": "기준=내년 예상 EPS×현재 시장 PER, 보수=기준×0.64, 낙관=기준×1.55",
        "notice": "가격 밴드는 매수 신호가 아니며 EPS 하향·기업 악재가 생기면 즉시 다시 계산합니다."
      },
      "trackRecord": {
        "status": "collecting",
        "settledCount": 0,
        "hitRate20": null,
        "brier20": null,
        "avgExcess20": null,
        "confidenceAdjustment": 0.0,
        "recentOutcomes": [],
        "notice": "20거래일 SPY 대비 방향 적중과 Brier score를 기록하며, 8건 전에는 신뢰도를 보정하지 않습니다."
      },
      "history": [
        {
          "asOf": 1787313613.7807624,
          "date": "2026-08-21",
          "fundamentalScore": 10.3,
          "confidence": 100,
          "fundamentalDamage": 16.7,
          "thesisDamage": 28.0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 30.4,
            "base": 38.4,
            "bear": 31.2
          },
          "currentPrice": 1600.7900390625,
          "valuationGap": -0.1912,
          "theses": {
            "growth": "intact",
            "cashFlow": "damaged",
            "resilience": "intact"
          }
        }
      ],
      "thesisHistory": [
        {
          "asOf": 1787313613.7807624,
          "date": "2026-08-21",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "damaged",
            "resilience": "intact"
          }
        }
      ],
      "limitations": [
        "점수는 현재 캐시에 있는 공시·컨센서스·구조화 뉴스만 사용합니다.",
        "시나리오 수치는 예측 확률이 아니라 현재 근거의 상대 가중치입니다.",
        "특이항목 원인은 공식 공시 또는 수동 검증 기록이 없으면 추정하지 않습니다."
      ]
    },
    "WDC": {
      "ticker": "WDC",
      "asOf": 1787313613.7807624,
      "modelVersion": "fundamental-v1.2",
      "fundamentalScore": 32.3,
      "confidence": 95.0,
      "fundamentalSigma": null,
      "fundamentalSigmaProgress": {
        "status": "collecting",
        "collected": 1,
        "required": 8,
        "remaining": 7,
        "expectedReadyDate": "2026-08-28",
        "notice": "같은 KST 날짜의 반복 실행은 한 건으로 교체하며, 임의 과거 점수를 만들어 채우지 않습니다."
      },
      "priceSigma": -0.56,
      "priceDamage": 18.6,
      "fundamentalDamage": 21.3,
      "thesisDamage": 42.0,
      "thesisStatus": "damaged",
      "damageRead": "현재 가격 변동과 펀더멘털 변화 사이에 큰 괴리는 확인되지 않았습니다.",
      "dimensions": {
        "growth": {
          "score": 28.8,
          "applicable": true
        },
        "earningsQuality": {
          "score": 40.00451349748043,
          "applicable": true
        },
        "cashFlow": {
          "score": 100,
          "applicable": true
        },
        "competitivePosition": {
          "score": 0.0,
          "applicable": true
        },
        "customerDemand": {
          "score": 0.0,
          "applicable": true
        },
        "balanceSheet": {
          "score": 13.6817,
          "applicable": true
        }
      },
      "officialEvidence": [
        {
          "id": "sec-annual",
          "kind": "confirmed_fact",
          "label": "연간 재무 수치",
          "source": "SEC Company Facts",
          "period": "2026",
          "detail": "매출·영업이익·순이익·현금흐름 핵심 항목을 SEC 원문 수치로 교차검증했습니다.",
          "url": "https://data.sec.gov/api/xbrl/companyfacts/"
        },
        {
          "id": "sec-quarterly",
          "kind": "confirmed_fact",
          "label": "분기 손익 수치",
          "source": "SEC Company Facts",
          "period": "Q2'26",
          "detail": "최근 분기 매출·영업이익·순이익을 SEC 3개월 보고값과 교차검증했습니다.",
          "url": "https://data.sec.gov/api/xbrl/companyfacts/"
        }
      ],
      "evidenceSummary": {
        "confirmedFacts": 3,
        "credibleReports": 0,
        "needsConfirmation": 2,
        "aiInferences": 3
      },
      "evidence": [
        {
          "headline": "Apple 제품을 구매하시나요? 비용을 지불하는 데 도움이 되는 4가지 도구",
          "eventLabel": "공급망 문제",
          "publishedAt": 1787212801,
          "sourceUrl": "https://finnhub.io/api/news?id=a03b08e1b2008c44e24564b7729d0b10f7da5eb33418846cce278009d8d4233d",
          "verificationStatus": "needs_confirmation",
          "reason": "메모리·스토리지 가격 강세 수혜 가능성",
          "direction": "negative",
          "impact": -4.0
        },
        {
          "headline": "SNDK, WDC, MU, SMCI 주식은 최고의 S&P 500 상승주입니다. SanDisk의 장밋빛 전망이 뒷받침하는 지속적인 기업 수요가 메모리 주식을 돕고 있습니다.",
          "eventLabel": "실적 발표",
          "publishedAt": 1786647929,
          "sourceUrl": "https://finnhub.io/api/news?id=45f2789ca5cf4e831eafc73eb25852d2de89e03837693f4006bcebe38cb58c5e",
          "verificationStatus": "needs_confirmation",
          "reason": "사업·실적 연결 경로 확인 필요",
          "direction": "negative",
          "impact": -2.0
        },
        {
          "headline": "WDC SEC Form 10-K 공식 제출",
          "eventLabel": "정기 실적 공시",
          "publishedAt": 1786633200.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/106040/000162828026057139/wdc-20260703.htm",
          "verificationStatus": "confirmed",
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기",
          "direction": "mixed",
          "impact": 0
        }
      ],
      "topPositive": [],
      "topNegative": [
        "메모리·스토리지 가격 강세 수혜 가능성",
        "사업·실적 연결 경로 확인 필요"
      ],
      "nextChecks": [
        "다음 실적의 매출·EPS·마진",
        "핵심 고객 수요·CAPEX",
        "FCF와 부채·CAPEX 변화"
      ],
      "theses": [
        {
          "id": "growth",
          "name": "성장 Thesis",
          "statement": "매출·EPS 성장 전망이 유지되고 본업 수익성이 함께 개선된다.",
          "status": "strengthening",
          "score": 28.8,
          "confidence": 95.0,
          "falsificationRules": [
            "내년 매출·EPS 추정치가 함께 하향",
            "매출 둔화와 마진 하락이 동시에 확인"
          ]
        },
        {
          "id": "cashFlow",
          "name": "현금창출 Thesis",
          "statement": "본업 성장이 영업현금과 잉여현금흐름으로 전환된다.",
          "status": "strengthening",
          "score": 100,
          "confidence": 95.0,
          "falsificationRules": [
            "FCF가 2개 연도 연속 감소",
            "OCF 감소와 CAPEX 부담 증가가 동시에 발생"
          ]
        },
        {
          "id": "resilience",
          "name": "경쟁·재무 Thesis",
          "statement": "경쟁·고객 집중·재무 부담이 장기 사업 경쟁력을 훼손하지 않는다.",
          "status": "intact",
          "score": 4.6,
          "confidence": 95.0,
          "falsificationRules": [
            "핵심 고객 이탈 또는 점유율 하락이 공식 수치로 확인",
            "부채 부담 상승과 사업 리스크 확대가 동시 발생"
          ]
        }
      ],
      "scenarios": {
        "bull": 33.3,
        "base": 36.5,
        "bear": 30.2
      },
      "alerts": [],
      "businessProfile": {
        "updatedAt": null,
        "customers": [],
        "strengths": [],
        "risks": [],
        "sources": [],
        "latestChanges": [
          {
            "headline": "Apple 제품을 구매하시나요? 비용을 지불하는 데 도움이 되는 4가지 도구",
            "eventLabel": "공급망 문제",
            "publishedAt": 1787212801,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=a03b08e1b2008c44e24564b7729d0b10f7da5eb33418846cce278009d8d4233d",
            "reason": "메모리·스토리지 가격 강세 수혜 가능성"
          },
          {
            "headline": "SNDK, WDC, MU, SMCI 주식은 최고의 S&P 500 상승주입니다. SanDisk의 장밋빛 전망이 뒷받침하는 지속적인 기업 수요가 메모리 주식을 돕고 있습니다.",
            "eventLabel": "실적 발표",
            "publishedAt": 1786647929,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=45f2789ca5cf4e831eafc73eb25852d2de89e03837693f4006bcebe38cb58c5e",
            "reason": "사업·실적 연결 경로 확인 필요"
          },
          {
            "headline": "WDC SEC Form 10-K 공식 제출",
            "eventLabel": "정기 실적 공시",
            "publishedAt": 1786633200.0,
            "direction": "mixed",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/106040/000162828026057139/wdc-20260703.htm",
            "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
          }
        ],
        "status": "available",
        "notice": "정성 사업정보는 마지막 확인일 이후의 구조화 중요 뉴스를 별도 변경 항목으로 덧붙입니다."
      },
      "earningsQualityReview": {
        "status": "reviewed",
        "period": "Q2'26",
        "reportedNetIncome": 3205000000.0,
        "normalizedIncome": null,
        "normalizedGap": null,
        "findings": [],
        "coreRead": "현재 수집된 항목만 보면 최신 기간 순이익을 크게 왜곡하는 특이항목은 확인되지 않았습니다.",
        "manualContext": {
          "date": "2026-08-10",
          "period": "최근 3개 분기 연속 마진 급등 (2025-12 마감→2026-03 마감→2026-06 마감 추정)",
          "headline": "매출은 완만히 증가($2.8B→$3.0B→$3.3B)하는데 순이익률이 42%→61%→96%로 가파르게 치솟음. 96%는 하드웨어 회사로선 극단적으로 높은 수치.",
          "oneTime": "MU·SNDK와 같은 메모리(스토리지) 업계 가격 상승 사이클이 배경일 가능성이 높으나, 매출 증가폭에 비해 순이익률 상승폭이 유독 커서(96%는 다른 두 종목보다도 높음) 이 회사 특유의 요인(지분법 이익, 세금 효과, 자산 매각 등)이 섞여 있을 수 있음 - 이 부분은 이번 조사에서 정확한 항목까지는 확인하지 못함.",
          "coreRead": "방향성(메모리 업사이클 수혜)은 MU·SNDK와 같다고 보되, 96%라는 마진 자체는 그대로 믿기보다 다음 분기 실적 발표에서 세부 항목(영업이익 vs 순이익 괴리, 일회성 항목 공시 여부)을 확인해서 갱신이 필요함.",
          "forecast": "메모리 사이클 공통 리스크(가격 상승 둔화 시 마진 정상화)에 더해, 이 종목은 마진의 '질'부터 다음 분기에 재확인이 필요함. 지금 이 96%를 그대로 미래에 투영하는 건 위험 - 확인 안 된 부분을 확인 안 됐다고 그대로 남겨둠(추측으로 채우지 않음).",
          "confidence": "매출·순이익 숫자 자체는 캐시 데이터 기준(신뢰도 높음) · 96% 마진의 구체적 원인은 미확인(신뢰도 낮음 - 다음 갱신 때 우선 확인할 것)"
        }
      },
      "valuationScenario": {
        "status": "available",
        "price": 468.65,
        "currentEps": 20.09143,
        "nextEps": 31.74953,
        "epsGrowth": 0.5803,
        "marketPe": 23.33,
        "conservative": 473.97,
        "base": 740.59,
        "optimistic": 1147.91,
        "currentVsBase": -0.3672,
        "analystTargetMean": 664.9167,
        "analystTargetLow": 420.0,
        "analystTargetHigh": 1050.0,
        "evidenceWeights": {
          "bull": 33.3,
          "base": 36.5,
          "bear": 30.2
        },
        "integratedRead": "현재 시장 PER이 유지된다는 가정의 기준가 아래입니다. 실적 전망 유지 여부를 확인하며 접근할 구간입니다.",
        "formula": "기준=내년 예상 EPS×현재 시장 PER, 보수=기준×0.64, 낙관=기준×1.55",
        "notice": "가격 밴드는 매수 신호가 아니며 EPS 하향·기업 악재가 생기면 즉시 다시 계산합니다."
      },
      "trackRecord": {
        "status": "collecting",
        "settledCount": 0,
        "hitRate20": null,
        "brier20": null,
        "avgExcess20": null,
        "confidenceAdjustment": 0.0,
        "recentOutcomes": [],
        "notice": "20거래일 SPY 대비 방향 적중과 Brier score를 기록하며, 8건 전에는 신뢰도를 보정하지 않습니다."
      },
      "history": [
        {
          "asOf": 1787313613.7807624,
          "date": "2026-08-21",
          "fundamentalScore": 32.3,
          "confidence": 95.0,
          "fundamentalDamage": 21.3,
          "thesisDamage": 42.0,
          "thesisStatus": "damaged",
          "scenarioWeights": {
            "bull": 33.3,
            "base": 36.5,
            "bear": 30.2
          },
          "currentPrice": 468.6499938964844,
          "valuationGap": -0.3672,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        }
      ],
      "thesisHistory": [
        {
          "asOf": 1787313613.7807624,
          "date": "2026-08-21",
          "overallStatus": "damaged",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        }
      ],
      "limitations": [
        "점수는 현재 캐시에 있는 공시·컨센서스·구조화 뉴스만 사용합니다.",
        "시나리오 수치는 예측 확률이 아니라 현재 근거의 상대 가중치입니다.",
        "특이항목 원인은 공식 공시 또는 수동 검증 기록이 없으면 추정하지 않습니다."
      ]
    },
    "ANET": {
      "ticker": "ANET",
      "asOf": 1787313613.7807624,
      "modelVersion": "fundamental-v1.2",
      "fundamentalScore": 16.3,
      "confidence": 71.7,
      "fundamentalSigma": null,
      "fundamentalSigmaProgress": {
        "status": "collecting",
        "collected": 1,
        "required": 8,
        "remaining": 7,
        "expectedReadyDate": "2026-08-28",
        "notice": "같은 KST 날짜의 반복 실행은 한 건으로 교체하며, 임의 과거 점수를 만들어 채우지 않습니다."
      },
      "priceSigma": -0.1,
      "priceDamage": 3.2,
      "fundamentalDamage": 0,
      "thesisDamage": 0,
      "thesisStatus": "intact",
      "damageRead": "현재 가격 변동과 펀더멘털 변화 사이에 큰 괴리는 확인되지 않았습니다.",
      "dimensions": {
        "growth": {
          "score": 17.666666666666668,
          "applicable": true
        },
        "earningsQuality": {
          "score": 23.49904991820271,
          "applicable": true
        },
        "cashFlow": {
          "score": 27.836896795604154,
          "applicable": true
        },
        "competitivePosition": {
          "score": 0.0,
          "applicable": true
        },
        "customerDemand": {
          "score": 0.0,
          "applicable": true
        },
        "balanceSheet": {
          "score": 20.0,
          "applicable": true
        }
      },
      "officialEvidence": [
        {
          "id": "sec-annual",
          "kind": "confirmed_fact",
          "label": "연간 재무 수치",
          "source": "SEC Company Facts",
          "period": "2025",
          "detail": "매출·영업이익·순이익·현금흐름 핵심 항목을 SEC 원문 수치로 교차검증했습니다.",
          "url": "https://data.sec.gov/api/xbrl/companyfacts/"
        },
        {
          "id": "sec-quarterly",
          "kind": "confirmed_fact",
          "label": "분기 손익 수치",
          "source": "SEC Company Facts",
          "period": "Q2'26",
          "detail": "최근 분기 매출·영업이익·순이익을 SEC 3개월 보고값과 교차검증했습니다.",
          "url": "https://data.sec.gov/api/xbrl/companyfacts/"
        }
      ],
      "evidenceSummary": {
        "confirmedFacts": 2,
        "credibleReports": 0,
        "needsConfirmation": 0,
        "aiInferences": 0
      },
      "evidence": [],
      "topPositive": [],
      "topNegative": [],
      "nextChecks": [
        "다음 실적의 매출·EPS·마진",
        "핵심 고객 수요·CAPEX",
        "FCF와 부채·CAPEX 변화"
      ],
      "theses": [
        {
          "id": "growth",
          "name": "성장 Thesis",
          "statement": "매출·EPS 성장 전망이 유지되고 본업 수익성이 함께 개선된다.",
          "status": "intact",
          "score": 17.7,
          "confidence": 71.7,
          "falsificationRules": [
            "내년 매출·EPS 추정치가 함께 하향",
            "매출 둔화와 마진 하락이 동시에 확인"
          ]
        },
        {
          "id": "cashFlow",
          "name": "현금창출 Thesis",
          "statement": "본업 성장이 영업현금과 잉여현금흐름으로 전환된다.",
          "status": "strengthening",
          "score": 27.8,
          "confidence": 71.7,
          "falsificationRules": [
            "FCF가 2개 연도 연속 감소",
            "OCF 감소와 CAPEX 부담 증가가 동시에 발생"
          ]
        },
        {
          "id": "resilience",
          "name": "경쟁·재무 Thesis",
          "statement": "경쟁·고객 집중·재무 부담이 장기 사업 경쟁력을 훼손하지 않는다.",
          "status": "intact",
          "score": 6.7,
          "confidence": 71.7,
          "falsificationRules": [
            "핵심 고객 이탈 또는 점유율 하락이 공식 수치로 확인",
            "부채 부담 상승과 사업 리스크 확대가 동시 발생"
          ]
        }
      ],
      "scenarios": {
        "bull": 34.3,
        "base": 39.2,
        "bear": 26.5
      },
      "alerts": [],
      "businessProfile": {
        "updatedAt": null,
        "customers": [],
        "strengths": [],
        "risks": [],
        "sources": [],
        "latestChanges": [],
        "status": "collecting",
        "notice": "정성 사업정보는 마지막 확인일 이후의 구조화 중요 뉴스를 별도 변경 항목으로 덧붙입니다."
      },
      "earningsQualityReview": {
        "status": "reviewed",
        "period": "Q2'26",
        "reportedNetIncome": 1212900000.0,
        "normalizedIncome": 1212900000.0,
        "normalizedGap": 0.0,
        "findings": [],
        "coreRead": "현재 수집된 항목만 보면 최신 기간 순이익을 크게 왜곡하는 특이항목은 확인되지 않았습니다.",
        "manualContext": null
      },
      "valuationScenario": {
        "status": "available",
        "price": 186.12,
        "currentEps": 4.11295,
        "nextEps": 5.15956,
        "epsGrowth": 0.2545,
        "marketPe": 45.25,
        "conservative": 149.42,
        "base": 233.48,
        "optimistic": 361.89,
        "currentVsBase": -0.2028,
        "analystTargetMean": 241.81519,
        "analystTargetLow": 185.0,
        "analystTargetHigh": 289.0,
        "evidenceWeights": {
          "bull": 34.3,
          "base": 39.2,
          "bear": 26.5
        },
        "integratedRead": "현재 시장 PER이 유지된다는 가정의 기준가 아래입니다. 실적 전망 유지 여부를 확인하며 접근할 구간입니다.",
        "formula": "기준=내년 예상 EPS×현재 시장 PER, 보수=기준×0.64, 낙관=기준×1.55",
        "notice": "가격 밴드는 매수 신호가 아니며 EPS 하향·기업 악재가 생기면 즉시 다시 계산합니다."
      },
      "trackRecord": {
        "status": "collecting",
        "settledCount": 0,
        "hitRate20": null,
        "brier20": null,
        "avgExcess20": null,
        "confidenceAdjustment": 0.0,
        "recentOutcomes": [],
        "notice": "20거래일 SPY 대비 방향 적중과 Brier score를 기록하며, 8건 전에는 신뢰도를 보정하지 않습니다."
      },
      "history": [
        {
          "asOf": 1787313613.7807624,
          "date": "2026-08-21",
          "fundamentalScore": 16.3,
          "confidence": 71.7,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 34.3,
            "base": 39.2,
            "bear": 26.5
          },
          "currentPrice": 186.11500549316406,
          "valuationGap": -0.2028,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        }
      ],
      "thesisHistory": [
        {
          "asOf": 1787313613.7807624,
          "date": "2026-08-21",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        }
      ],
      "limitations": [
        "점수는 현재 캐시에 있는 공시·컨센서스·구조화 뉴스만 사용합니다.",
        "시나리오 수치는 예측 확률이 아니라 현재 근거의 상대 가중치입니다.",
        "특이항목 원인은 공식 공시 또는 수동 검증 기록이 없으면 추정하지 않습니다."
      ]
    },
    "COHR": {
      "ticker": "COHR",
      "asOf": 1787313613.7807624,
      "modelVersion": "fundamental-v1.2",
      "fundamentalScore": -2.3,
      "confidence": 87.1,
      "fundamentalSigma": null,
      "fundamentalSigmaProgress": {
        "status": "collecting",
        "collected": 1,
        "required": 8,
        "remaining": 7,
        "expectedReadyDate": "2026-08-28",
        "notice": "같은 KST 날짜의 반복 실행은 한 건으로 교체하며, 임의 과거 점수를 만들어 채우지 않습니다."
      },
      "priceSigma": -0.42,
      "priceDamage": 14.1,
      "fundamentalDamage": 0,
      "thesisDamage": 0,
      "thesisStatus": "intact",
      "damageRead": "현재 가격 변동과 펀더멘털 변화 사이에 큰 괴리는 확인되지 않았습니다.",
      "dimensions": {
        "growth": {
          "score": 28.596666,
          "applicable": true
        },
        "earningsQuality": {
          "score": 14.58,
          "applicable": true
        },
        "cashFlow": {
          "score": -100,
          "applicable": true
        },
        "competitivePosition": {
          "score": 0.0,
          "applicable": true
        },
        "customerDemand": {
          "score": 0.0,
          "applicable": true
        },
        "balanceSheet": {
          "score": 17.3405,
          "applicable": true
        }
      },
      "officialEvidence": [
        {
          "id": "sec-annual",
          "kind": "confirmed_fact",
          "label": "연간 재무 수치",
          "source": "SEC Company Facts",
          "period": "2026",
          "detail": "매출·영업이익·순이익·현금흐름 핵심 항목을 SEC 원문 수치로 교차검증했습니다.",
          "url": "https://data.sec.gov/api/xbrl/companyfacts/"
        },
        {
          "id": "sec-quarterly",
          "kind": "confirmed_fact",
          "label": "분기 손익 수치",
          "source": "SEC Company Facts",
          "period": "Q1'26",
          "detail": "최근 분기 매출·영업이익·순이익을 SEC 3개월 보고값과 교차검증했습니다.",
          "url": "https://data.sec.gov/api/xbrl/companyfacts/"
        }
      ],
      "evidenceSummary": {
        "confirmedFacts": 4,
        "credibleReports": 0,
        "needsConfirmation": 0,
        "aiInferences": 2
      },
      "evidence": [
        {
          "headline": "COHR SEC Form 10-K 공식 제출",
          "eventLabel": "정기 실적 공시",
          "publishedAt": 1786633200.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/820318/000082031826000020/iivi-20260630.htm",
          "verificationStatus": "confirmed",
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기",
          "direction": "mixed",
          "impact": 0
        },
        {
          "headline": "COHR SEC Form 8-K 공식 제출",
          "eventLabel": "실적·재무 공식 공시",
          "publishedAt": 1786460400.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/820318/000119312526346860/d128030d8k.htm",
          "verificationStatus": "confirmed",
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기",
          "direction": "mixed",
          "impact": 0
        }
      ],
      "topPositive": [],
      "topNegative": [],
      "nextChecks": [
        "다음 실적의 매출·EPS·마진",
        "핵심 고객 수요·CAPEX",
        "FCF와 부채·CAPEX 변화"
      ],
      "theses": [
        {
          "id": "growth",
          "name": "성장 Thesis",
          "statement": "매출·EPS 성장 전망이 유지되고 본업 수익성이 함께 개선된다.",
          "status": "strengthening",
          "score": 28.6,
          "confidence": 87.1,
          "falsificationRules": [
            "내년 매출·EPS 추정치가 함께 하향",
            "매출 둔화와 마진 하락이 동시에 확인"
          ]
        },
        {
          "id": "cashFlow",
          "name": "현금창출 Thesis",
          "statement": "본업 성장이 영업현금과 잉여현금흐름으로 전환된다.",
          "status": "damaged",
          "score": -100,
          "confidence": 87.1,
          "falsificationRules": [
            "FCF가 2개 연도 연속 감소",
            "OCF 감소와 CAPEX 부담 증가가 동시에 발생"
          ]
        },
        {
          "id": "resilience",
          "name": "경쟁·재무 Thesis",
          "statement": "경쟁·고객 집중·재무 부담이 장기 사업 경쟁력을 훼손하지 않는다.",
          "status": "intact",
          "score": 5.8,
          "confidence": 87.1,
          "falsificationRules": [
            "핵심 고객 이탈 또는 점유율 하락이 공식 수치로 확인",
            "부채 부담 상승과 사업 리스크 확대가 동시 발생"
          ]
        }
      ],
      "scenarios": {
        "bull": 30.9,
        "base": 40.0,
        "bear": 29.1
      },
      "alerts": [],
      "businessProfile": {
        "updatedAt": null,
        "customers": [],
        "strengths": [],
        "risks": [],
        "sources": [],
        "latestChanges": [
          {
            "headline": "COHR SEC Form 10-K 공식 제출",
            "eventLabel": "정기 실적 공시",
            "publishedAt": 1786633200.0,
            "direction": "mixed",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/820318/000082031826000020/iivi-20260630.htm",
            "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
          },
          {
            "headline": "COHR SEC Form 8-K 공식 제출",
            "eventLabel": "실적·재무 공식 공시",
            "publishedAt": 1786460400.0,
            "direction": "mixed",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/820318/000119312526346860/d128030d8k.htm",
            "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
          }
        ],
        "status": "collecting",
        "notice": "정성 사업정보는 마지막 확인일 이후의 구조화 중요 뉴스를 별도 변경 항목으로 덧붙입니다."
      },
      "earningsQualityReview": {
        "status": "reviewed",
        "period": "Q1'26",
        "reportedNetIncome": 191402000.0,
        "normalizedIncome": 216516348.115239,
        "normalizedGap": -0.116,
        "findings": [],
        "coreRead": "보고 순이익과 정상화이익 차이가 커 헤드라인 순이익을 그대로 본업 성과로 보기 어렵습니다.",
        "manualContext": null
      },
      "valuationScenario": {
        "status": "available",
        "price": 287.07,
        "currentEps": 9.40614,
        "nextEps": 13.94894,
        "epsGrowth": 0.483,
        "marketPe": 30.52,
        "conservative": 272.45,
        "base": 425.71,
        "optimistic": 659.84,
        "currentVsBase": -0.3257,
        "analystTargetMean": 416.09348,
        "analystTargetLow": 280.0,
        "analystTargetHigh": 500.0,
        "evidenceWeights": {
          "bull": 30.9,
          "base": 40.0,
          "bear": 29.1
        },
        "integratedRead": "현재 가격과 실적 기준가가 크게 어긋나지 않습니다. 다음 EPS 추정치와 PER 변화가 방향을 좌우합니다.",
        "formula": "기준=내년 예상 EPS×현재 시장 PER, 보수=기준×0.64, 낙관=기준×1.55",
        "notice": "가격 밴드는 매수 신호가 아니며 EPS 하향·기업 악재가 생기면 즉시 다시 계산합니다."
      },
      "trackRecord": {
        "status": "collecting",
        "settledCount": 0,
        "hitRate20": null,
        "brier20": null,
        "avgExcess20": null,
        "confidenceAdjustment": 0.0,
        "recentOutcomes": [],
        "notice": "20거래일 SPY 대비 방향 적중과 Brier score를 기록하며, 8건 전에는 신뢰도를 보정하지 않습니다."
      },
      "history": [
        {
          "asOf": 1787313613.7807624,
          "date": "2026-08-21",
          "fundamentalScore": -2.3,
          "confidence": 87.1,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 30.9,
            "base": 40.0,
            "bear": 29.1
          },
          "currentPrice": 287.06500244140625,
          "valuationGap": -0.3257,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "damaged",
            "resilience": "intact"
          }
        }
      ],
      "thesisHistory": [
        {
          "asOf": 1787313613.7807624,
          "date": "2026-08-21",
          "overallStatus": "intact",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "damaged",
            "resilience": "intact"
          }
        }
      ],
      "limitations": [
        "점수는 현재 캐시에 있는 공시·컨센서스·구조화 뉴스만 사용합니다.",
        "시나리오 수치는 예측 확률이 아니라 현재 근거의 상대 가중치입니다.",
        "특이항목 원인은 공식 공시 또는 수동 검증 기록이 없으면 추정하지 않습니다."
      ]
    },
    "LITE": {
      "ticker": "LITE",
      "asOf": 1787313613.7807624,
      "modelVersion": "fundamental-v1.2",
      "fundamentalScore": 0.7,
      "confidence": 100,
      "fundamentalSigma": null,
      "fundamentalSigmaProgress": {
        "status": "collecting",
        "collected": 1,
        "required": 8,
        "remaining": 7,
        "expectedReadyDate": "2026-08-28",
        "notice": "같은 KST 날짜의 반복 실행은 한 건으로 교체하며, 임의 과거 점수를 만들어 채우지 않습니다."
      },
      "priceSigma": 0.61,
      "priceDamage": 20.3,
      "fundamentalDamage": 25.2,
      "thesisDamage": 56.0,
      "thesisStatus": "damaged",
      "damageRead": "펀더멘털 위험 신호가 가격에 충분히 반영되지 않았을 가능성이 있습니다.",
      "dimensions": {
        "growth": {
          "score": 100,
          "applicable": true
        },
        "earningsQuality": {
          "score": -48.61398689600506,
          "applicable": true
        },
        "cashFlow": {
          "score": -100,
          "applicable": true
        },
        "competitivePosition": {
          "score": 0.0,
          "applicable": true
        },
        "customerDemand": {
          "score": 0.0,
          "applicable": true
        },
        "balanceSheet": {
          "score": 3.066700000000001,
          "applicable": true
        }
      },
      "officialEvidence": [
        {
          "id": "sec-annual",
          "kind": "confirmed_fact",
          "label": "연간 재무 수치",
          "source": "SEC Company Facts",
          "period": "2026",
          "detail": "매출·영업이익·순이익·현금흐름 핵심 항목을 SEC 원문 수치로 교차검증했습니다.",
          "url": "https://data.sec.gov/api/xbrl/companyfacts/"
        },
        {
          "id": "sec-quarterly",
          "kind": "confirmed_fact",
          "label": "분기 손익 수치",
          "source": "SEC Company Facts",
          "period": "Q1'26",
          "detail": "최근 분기 매출·영업이익·순이익을 SEC 3개월 보고값과 교차검증했습니다.",
          "url": "https://data.sec.gov/api/xbrl/companyfacts/"
        }
      ],
      "evidenceSummary": {
        "confirmedFacts": 4,
        "credibleReports": 0,
        "needsConfirmation": 2,
        "aiInferences": 4
      },
      "evidence": [
        {
          "headline": "루멘텀(Lumentum): 시력 부족이 점점 더 커지고 있습니다",
          "eventLabel": "공급망 문제",
          "publishedAt": 1787066566,
          "sourceUrl": "https://finnhub.io/api/news?id=bd6c9f881646850fb77de7101295ec91a1bfab48195f2c13595f10972a40843c",
          "verificationStatus": "needs_confirmation",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "direction": "negative",
          "impact": -4.0
        },
        {
          "headline": "LITE SEC Form 10-K 공식 제출",
          "eventLabel": "정기 실적 공시",
          "publishedAt": 1786892400.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1633978/000162828026057358/lite-20260627.htm",
          "verificationStatus": "confirmed",
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기",
          "direction": "mixed",
          "impact": 0
        },
        {
          "headline": "애플이 전 세계적인 부족 상황 속에서 아이폰, 맥북용 중국산 메모리 칩을 테스트하고 있는 것으로 알려졌습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1786385747,
          "sourceUrl": "https://finnhub.io/api/news?id=29aaf140cb2ed909321ab2a99380f77b4f570ee5733f216a0da8df65ad82f421",
          "verificationStatus": "needs_confirmation",
          "reason": "사업·실적 연결 경로 확인 필요",
          "direction": "negative",
          "impact": -4.0
        },
        {
          "headline": "LITE SEC Form 8-K 공식 제출",
          "eventLabel": "실적·재무 공식 공시",
          "publishedAt": 1786374000.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1633978/000162828026055726/lite-20260811.htm",
          "verificationStatus": "confirmed",
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기",
          "direction": "mixed",
          "impact": 0
        }
      ],
      "topPositive": [],
      "topNegative": [
        "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
        "사업·실적 연결 경로 확인 필요"
      ],
      "nextChecks": [
        "다음 실적의 매출·EPS·마진",
        "핵심 고객 수요·CAPEX",
        "FCF와 부채·CAPEX 변화"
      ],
      "theses": [
        {
          "id": "growth",
          "name": "성장 Thesis",
          "statement": "매출·EPS 성장 전망이 유지되고 본업 수익성이 함께 개선된다.",
          "status": "strengthening",
          "score": 100,
          "confidence": 100,
          "falsificationRules": [
            "내년 매출·EPS 추정치가 함께 하향",
            "매출 둔화와 마진 하락이 동시에 확인"
          ]
        },
        {
          "id": "cashFlow",
          "name": "현금창출 Thesis",
          "statement": "본업 성장이 영업현금과 잉여현금흐름으로 전환된다.",
          "status": "damaged",
          "score": -100,
          "confidence": 100,
          "falsificationRules": [
            "FCF가 2개 연도 연속 감소",
            "OCF 감소와 CAPEX 부담 증가가 동시에 발생"
          ]
        },
        {
          "id": "resilience",
          "name": "경쟁·재무 Thesis",
          "statement": "경쟁·고객 집중·재무 부담이 장기 사업 경쟁력을 훼손하지 않는다.",
          "status": "intact",
          "score": 1.0,
          "confidence": 100,
          "falsificationRules": [
            "핵심 고객 이탈 또는 점유율 하락이 공식 수치로 확인",
            "부채 부담 상승과 사업 리스크 확대가 동시 발생"
          ]
        }
      ],
      "scenarios": {
        "bull": 25.2,
        "base": 38.3,
        "bear": 36.5
      },
      "alerts": [],
      "businessProfile": {
        "updatedAt": null,
        "customers": [],
        "strengths": [],
        "risks": [],
        "sources": [],
        "latestChanges": [
          {
            "headline": "루멘텀(Lumentum): 시력 부족이 점점 더 커지고 있습니다",
            "eventLabel": "공급망 문제",
            "publishedAt": 1787066566,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=bd6c9f881646850fb77de7101295ec91a1bfab48195f2c13595f10972a40843c",
            "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
          },
          {
            "headline": "LITE SEC Form 10-K 공식 제출",
            "eventLabel": "정기 실적 공시",
            "publishedAt": 1786892400.0,
            "direction": "mixed",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1633978/000162828026057358/lite-20260627.htm",
            "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
          },
          {
            "headline": "애플이 전 세계적인 부족 상황 속에서 아이폰, 맥북용 중국산 메모리 칩을 테스트하고 있는 것으로 알려졌습니다.",
            "eventLabel": "공급망 문제",
            "publishedAt": 1786385747,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=29aaf140cb2ed909321ab2a99380f77b4f570ee5733f216a0da8df65ad82f421",
            "reason": "사업·실적 연결 경로 확인 필요"
          },
          {
            "headline": "LITE SEC Form 8-K 공식 제출",
            "eventLabel": "실적·재무 공식 공시",
            "publishedAt": 1786374000.0,
            "direction": "mixed",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1633978/000162828026055726/lite-20260811.htm",
            "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
          }
        ],
        "status": "collecting",
        "notice": "정성 사업정보는 마지막 확인일 이후의 구조화 중요 뉴스를 별도 변경 항목으로 덧붙입니다."
      },
      "earningsQualityReview": {
        "status": "reviewed",
        "period": "Q1'26",
        "reportedNetIncome": 144200000.0,
        "normalizedIncome": 145063003.264418,
        "normalizedGap": -0.0059,
        "findings": [],
        "coreRead": "현재 수집된 항목만 보면 최신 기간 순이익을 크게 왜곡하는 특이항목은 확인되지 않았습니다.",
        "manualContext": null
      },
      "valuationScenario": {
        "status": "available",
        "price": 869.2,
        "currentEps": 8.22662,
        "nextEps": 33.01317,
        "epsGrowth": 3.013,
        "marketPe": 105.66,
        "conservative": 2232.35,
        "base": 3488.05,
        "optimistic": 5406.48,
        "currentVsBase": -0.7508,
        "analystTargetMean": 1148.303,
        "analystTargetLow": 820.0,
        "analystTargetHigh": 1400.0,
        "evidenceWeights": {
          "bull": 25.2,
          "base": 38.3,
          "bear": 36.5
        },
        "integratedRead": "현재 시장 PER이 유지된다는 가정의 기준가 아래입니다. 실적 전망 유지 여부를 확인하며 접근할 구간입니다.",
        "formula": "기준=내년 예상 EPS×현재 시장 PER, 보수=기준×0.64, 낙관=기준×1.55",
        "notice": "가격 밴드는 매수 신호가 아니며 EPS 하향·기업 악재가 생기면 즉시 다시 계산합니다."
      },
      "trackRecord": {
        "status": "collecting",
        "settledCount": 0,
        "hitRate20": null,
        "brier20": null,
        "avgExcess20": null,
        "confidenceAdjustment": 0.0,
        "recentOutcomes": [],
        "notice": "20거래일 SPY 대비 방향 적중과 Brier score를 기록하며, 8건 전에는 신뢰도를 보정하지 않습니다."
      },
      "history": [
        {
          "asOf": 1787313613.7807624,
          "date": "2026-08-21",
          "fundamentalScore": 0.7,
          "confidence": 100,
          "fundamentalDamage": 25.2,
          "thesisDamage": 56.0,
          "thesisStatus": "damaged",
          "scenarioWeights": {
            "bull": 25.2,
            "base": 38.3,
            "bear": 36.5
          },
          "currentPrice": 869.1950073242188,
          "valuationGap": -0.7508,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "damaged",
            "resilience": "intact"
          }
        }
      ],
      "thesisHistory": [
        {
          "asOf": 1787313613.7807624,
          "date": "2026-08-21",
          "overallStatus": "damaged",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "damaged",
            "resilience": "intact"
          }
        }
      ],
      "limitations": [
        "점수는 현재 캐시에 있는 공시·컨센서스·구조화 뉴스만 사용합니다.",
        "시나리오 수치는 예측 확률이 아니라 현재 근거의 상대 가중치입니다.",
        "특이항목 원인은 공식 공시 또는 수동 검증 기록이 없으면 추정하지 않습니다."
      ]
    },
    "GEV": {
      "ticker": "GEV",
      "asOf": 1787313613.7807624,
      "modelVersion": "fundamental-v1.2",
      "fundamentalScore": 17.5,
      "confidence": 85.0,
      "fundamentalSigma": null,
      "fundamentalSigmaProgress": {
        "status": "collecting",
        "collected": 1,
        "required": 8,
        "remaining": 7,
        "expectedReadyDate": "2026-08-28",
        "notice": "같은 KST 날짜의 반복 실행은 한 건으로 교체하며, 임의 과거 점수를 만들어 채우지 않습니다."
      },
      "priceSigma": -1.35,
      "priceDamage": 44.9,
      "fundamentalDamage": 0,
      "thesisDamage": 0,
      "thesisStatus": "intact",
      "damageRead": "현재 가격 변동과 펀더멘털 변화 사이에 큰 괴리는 확인되지 않았습니다.",
      "dimensions": {
        "growth": {
          "score": 0.8866670000000004,
          "applicable": true
        },
        "earningsQuality": {
          "score": 13.464722117791249,
          "applicable": true
        },
        "cashFlow": {
          "score": 79.11764705882352,
          "applicable": true
        },
        "competitivePosition": {
          "score": 0.0,
          "applicable": true
        },
        "customerDemand": {
          "score": 0.0,
          "applicable": true
        },
        "balanceSheet": {
          "score": 17.8967,
          "applicable": true
        }
      },
      "officialEvidence": [
        {
          "id": "sec-annual",
          "kind": "confirmed_fact",
          "label": "연간 재무 수치",
          "source": "SEC Company Facts",
          "period": "2025",
          "detail": "매출·영업이익·순이익·현금흐름 핵심 항목을 SEC 원문 수치로 교차검증했습니다.",
          "url": "https://data.sec.gov/api/xbrl/companyfacts/"
        },
        {
          "id": "sec-quarterly",
          "kind": "confirmed_fact",
          "label": "분기 손익 수치",
          "source": "SEC Company Facts",
          "period": "Q2'26",
          "detail": "최근 분기 매출·영업이익·순이익을 SEC 3개월 보고값과 교차검증했습니다.",
          "url": "https://data.sec.gov/api/xbrl/companyfacts/"
        }
      ],
      "evidenceSummary": {
        "confirmedFacts": 2,
        "credibleReports": 0,
        "needsConfirmation": 1,
        "aiInferences": 1
      },
      "evidence": [
        {
          "headline": "GE Vernova와 Blue Energy, 2.5GW 텍사스 가스-원자력 발전 프로젝트 추진",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1786628029,
          "sourceUrl": "https://finnhub.io/api/news?id=3f3e9ce2217d0360a5ea341b991a062971eae46a13cf20342f5b2c94f342c665",
          "verificationStatus": "needs_confirmation",
          "reason": "회사 실적과의 연결고리 확인",
          "direction": "positive",
          "impact": 4.0
        }
      ],
      "topPositive": [
        "회사 실적과의 연결고리 확인"
      ],
      "topNegative": [],
      "nextChecks": [
        "다음 실적의 매출·EPS·마진",
        "핵심 고객 수요·CAPEX",
        "FCF와 부채·CAPEX 변화"
      ],
      "theses": [
        {
          "id": "growth",
          "name": "성장 Thesis",
          "statement": "매출·EPS 성장 전망이 유지되고 본업 수익성이 함께 개선된다.",
          "status": "intact",
          "score": 0.9,
          "confidence": 85.0,
          "falsificationRules": [
            "내년 매출·EPS 추정치가 함께 하향",
            "매출 둔화와 마진 하락이 동시에 확인"
          ]
        },
        {
          "id": "cashFlow",
          "name": "현금창출 Thesis",
          "statement": "본업 성장이 영업현금과 잉여현금흐름으로 전환된다.",
          "status": "strengthening",
          "score": 79.1,
          "confidence": 85.0,
          "falsificationRules": [
            "FCF가 2개 연도 연속 감소",
            "OCF 감소와 CAPEX 부담 증가가 동시에 발생"
          ]
        },
        {
          "id": "resilience",
          "name": "경쟁·재무 Thesis",
          "statement": "경쟁·고객 집중·재무 부담이 장기 사업 경쟁력을 훼손하지 않는다.",
          "status": "intact",
          "score": 6.0,
          "confidence": 85.0,
          "falsificationRules": [
            "핵심 고객 이탈 또는 점유율 하락이 공식 수치로 확인",
            "부채 부담 상승과 사업 리스크 확대가 동시 발생"
          ]
        }
      ],
      "scenarios": {
        "bull": 34.8,
        "base": 39.0,
        "bear": 26.2
      },
      "alerts": [],
      "businessProfile": {
        "updatedAt": null,
        "customers": [],
        "strengths": [],
        "risks": [],
        "sources": [],
        "latestChanges": [
          {
            "headline": "GE Vernova와 Blue Energy, 2.5GW 텍사스 가스-원자력 발전 프로젝트 추진",
            "eventLabel": "주요 고객 계약",
            "publishedAt": 1786628029,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=3f3e9ce2217d0360a5ea341b991a062971eae46a13cf20342f5b2c94f342c665",
            "reason": "회사 실적과의 연결고리 확인"
          }
        ],
        "status": "collecting",
        "notice": "정성 사업정보는 마지막 확인일 이후의 구조화 중요 뉴스를 별도 변경 항목으로 덧붙입니다."
      },
      "earningsQualityReview": {
        "status": "reviewed",
        "period": "Q2'26",
        "reportedNetIncome": 668000000.0,
        "normalizedIncome": 653960000.0,
        "normalizedGap": 0.0215,
        "findings": [],
        "coreRead": "현재 수집된 항목만 보면 최신 기간 순이익을 크게 왜곡하는 특이항목은 확인되지 않았습니다.",
        "manualContext": null
      },
      "valuationScenario": {
        "status": "available",
        "price": 947.94,
        "currentEps": 30.84574,
        "nextEps": 24.78641,
        "epsGrowth": -0.1964,
        "marketPe": 30.73,
        "conservative": 487.51,
        "base": 761.73,
        "optimistic": 1180.68,
        "currentVsBase": 0.2445,
        "analystTargetMean": 1236.4318,
        "analystTargetLow": 940.0,
        "analystTargetHigh": 1450.0,
        "evidenceWeights": {
          "bull": 34.8,
          "base": 39.0,
          "bear": 26.2
        },
        "integratedRead": "현재 가격과 실적 기준가가 크게 어긋나지 않습니다. 다음 EPS 추정치와 PER 변화가 방향을 좌우합니다.",
        "formula": "기준=내년 예상 EPS×현재 시장 PER, 보수=기준×0.64, 낙관=기준×1.55",
        "notice": "가격 밴드는 매수 신호가 아니며 EPS 하향·기업 악재가 생기면 즉시 다시 계산합니다."
      },
      "trackRecord": {
        "status": "collecting",
        "settledCount": 0,
        "hitRate20": null,
        "brier20": null,
        "avgExcess20": null,
        "confidenceAdjustment": 0.0,
        "recentOutcomes": [],
        "notice": "20거래일 SPY 대비 방향 적중과 Brier score를 기록하며, 8건 전에는 신뢰도를 보정하지 않습니다."
      },
      "history": [
        {
          "asOf": 1787313613.7807624,
          "date": "2026-08-21",
          "fundamentalScore": 17.5,
          "confidence": 85.0,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 34.8,
            "base": 39.0,
            "bear": 26.2
          },
          "currentPrice": 947.9400024414062,
          "valuationGap": 0.2445,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        }
      ],
      "thesisHistory": [
        {
          "asOf": 1787313613.7807624,
          "date": "2026-08-21",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        }
      ],
      "limitations": [
        "점수는 현재 캐시에 있는 공시·컨센서스·구조화 뉴스만 사용합니다.",
        "시나리오 수치는 예측 확률이 아니라 현재 근거의 상대 가중치입니다.",
        "특이항목 원인은 공식 공시 또는 수동 검증 기록이 없으면 추정하지 않습니다."
      ]
    },
    "CEG": {
      "ticker": "CEG",
      "asOf": 1787313613.7807624,
      "modelVersion": "fundamental-v1.2",
      "fundamentalScore": -5.0,
      "confidence": 85.0,
      "fundamentalSigma": null,
      "fundamentalSigmaProgress": {
        "status": "collecting",
        "collected": 1,
        "required": 8,
        "remaining": 7,
        "expectedReadyDate": "2026-08-28",
        "notice": "같은 KST 날짜의 반복 실행은 한 건으로 교체하며, 임의 과거 점수를 만들어 채우지 않습니다."
      },
      "priceSigma": 0.46,
      "priceDamage": 15.4,
      "fundamentalDamage": 0,
      "thesisDamage": 0,
      "thesisStatus": "intact",
      "damageRead": "현재 가격 변동과 펀더멘털 변화 사이에 큰 괴리는 확인되지 않았습니다.",
      "dimensions": {
        "growth": {
          "score": 4.813333333333333,
          "applicable": true
        },
        "earningsQuality": {
          "score": -8.598491401606948,
          "applicable": true
        },
        "cashFlow": {
          "score": -42.80572678464904,
          "applicable": true
        },
        "competitivePosition": {
          "score": 0.0,
          "applicable": true
        },
        "customerDemand": {
          "score": 0.0,
          "applicable": true
        },
        "balanceSheet": {
          "score": 13.0484,
          "applicable": true
        }
      },
      "officialEvidence": [
        {
          "id": "sec-annual",
          "kind": "confirmed_fact",
          "label": "연간 재무 수치",
          "source": "SEC Company Facts",
          "period": "2025",
          "detail": "매출·영업이익·순이익·현금흐름 핵심 항목을 SEC 원문 수치로 교차검증했습니다.",
          "url": "https://data.sec.gov/api/xbrl/companyfacts/"
        },
        {
          "id": "sec-quarterly",
          "kind": "confirmed_fact",
          "label": "분기 손익 수치",
          "source": "SEC Company Facts",
          "period": "Q2'26",
          "detail": "최근 분기 매출·영업이익·순이익을 SEC 3개월 보고값과 교차검증했습니다.",
          "url": "https://data.sec.gov/api/xbrl/companyfacts/"
        }
      ],
      "evidenceSummary": {
        "confirmedFacts": 2,
        "credibleReports": 0,
        "needsConfirmation": 1,
        "aiInferences": 1
      },
      "evidence": [
        {
          "headline": "Constellation(CEG)은 원자력 생산량이 감소함에 따라 더 많은 전력 거래를 체결했습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1786274516,
          "sourceUrl": "https://finnhub.io/api/news?id=af546604142d92c324404f859d1cd66395c5ea5075800be31aa8debfb336adef",
          "verificationStatus": "needs_confirmation",
          "reason": "회사 실적과의 연결고리 확인",
          "direction": "positive",
          "impact": 4.0
        }
      ],
      "topPositive": [
        "회사 실적과의 연결고리 확인"
      ],
      "topNegative": [],
      "nextChecks": [
        "다음 실적의 매출·EPS·마진",
        "핵심 고객 수요·CAPEX",
        "FCF와 부채·CAPEX 변화"
      ],
      "theses": [
        {
          "id": "growth",
          "name": "성장 Thesis",
          "statement": "매출·EPS 성장 전망이 유지되고 본업 수익성이 함께 개선된다.",
          "status": "intact",
          "score": 4.8,
          "confidence": 85.0,
          "falsificationRules": [
            "내년 매출·EPS 추정치가 함께 하향",
            "매출 둔화와 마진 하락이 동시에 확인"
          ]
        },
        {
          "id": "cashFlow",
          "name": "현금창출 Thesis",
          "statement": "본업 성장이 영업현금과 잉여현금흐름으로 전환된다.",
          "status": "damaged",
          "score": -42.8,
          "confidence": 85.0,
          "falsificationRules": [
            "FCF가 2개 연도 연속 감소",
            "OCF 감소와 CAPEX 부담 증가가 동시에 발생"
          ]
        },
        {
          "id": "resilience",
          "name": "경쟁·재무 Thesis",
          "statement": "경쟁·고객 집중·재무 부담이 장기 사업 경쟁력을 훼손하지 않는다.",
          "status": "intact",
          "score": 4.3,
          "confidence": 85.0,
          "falsificationRules": [
            "핵심 고객 이탈 또는 점유율 하락이 공식 수치로 확인",
            "부채 부담 상승과 사업 리스크 확대가 동시 발생"
          ]
        }
      ],
      "scenarios": {
        "bull": 30.4,
        "base": 39.9,
        "bear": 29.7
      },
      "alerts": [],
      "businessProfile": {
        "updatedAt": null,
        "customers": [],
        "strengths": [],
        "risks": [],
        "sources": [],
        "latestChanges": [
          {
            "headline": "Constellation(CEG)은 원자력 생산량이 감소함에 따라 더 많은 전력 거래를 체결했습니다.",
            "eventLabel": "주요 고객 계약",
            "publishedAt": 1786274516,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=af546604142d92c324404f859d1cd66395c5ea5075800be31aa8debfb336adef",
            "reason": "회사 실적과의 연결고리 확인"
          }
        ],
        "status": "collecting",
        "notice": "정성 사업정보는 마지막 확인일 이후의 구조화 중요 뉴스를 별도 변경 항목으로 덧붙입니다."
      },
      "earningsQualityReview": {
        "status": "reviewed",
        "period": "Q2'26",
        "reportedNetIncome": 513000000.0,
        "normalizedIncome": -223800000.0,
        "normalizedGap": -3.2922,
        "findings": [
          {
            "key": "unusualItems",
            "label": "비경상 항목",
            "amount": 1228000000.0,
            "revenueRatio": 0.1636,
            "repeatCount": 2,
            "classification": "recurring_risk",
            "recurrenceRead": "최근 6개 기간 중 두 번 이상 나타나 반복 가능성을 열어둡니다."
          },
          {
            "key": "unusualItemsExGoodwill",
            "label": "영업권 제외 비경상 항목",
            "amount": 1228000000.0,
            "revenueRatio": 0.1636,
            "repeatCount": 2,
            "classification": "recurring_risk",
            "recurrenceRead": "최근 6개 기간 중 두 번 이상 나타나 반복 가능성을 열어둡니다."
          },
          {
            "key": "unusualTaxEffect",
            "label": "비경상 세금 효과",
            "amount": 491200000.0,
            "revenueRatio": 0.0655,
            "repeatCount": 2,
            "classification": "recurring_risk",
            "recurrenceRead": "최근 6개 기간 중 두 번 이상 나타나 반복 가능성을 열어둡니다."
          }
        ],
        "coreRead": "보고 순이익에 의미 있는 특이항목이 확인됩니다. 본업은 매출·영업이익·정상화이익을 우선해 읽어야 합니다.",
        "manualContext": null
      },
      "valuationScenario": {
        "status": "available",
        "price": 273.57,
        "currentEps": 12.09575,
        "nextEps": 13.30665,
        "epsGrowth": 0.1001,
        "marketPe": 22.62,
        "conservative": 192.61,
        "base": 300.95,
        "optimistic": 466.47,
        "currentVsBase": -0.091,
        "analystTargetMean": 347.504,
        "analystTargetLow": 290.0,
        "analystTargetHigh": 441.0,
        "evidenceWeights": {
          "bull": 30.4,
          "base": 39.9,
          "bear": 29.7
        },
        "integratedRead": "현재 가격과 실적 기준가가 크게 어긋나지 않습니다. 다음 EPS 추정치와 PER 변화가 방향을 좌우합니다.",
        "formula": "기준=내년 예상 EPS×현재 시장 PER, 보수=기준×0.64, 낙관=기준×1.55",
        "notice": "가격 밴드는 매수 신호가 아니며 EPS 하향·기업 악재가 생기면 즉시 다시 계산합니다."
      },
      "trackRecord": {
        "status": "collecting",
        "settledCount": 0,
        "hitRate20": null,
        "brier20": null,
        "avgExcess20": null,
        "confidenceAdjustment": 0.0,
        "recentOutcomes": [],
        "notice": "20거래일 SPY 대비 방향 적중과 Brier score를 기록하며, 8건 전에는 신뢰도를 보정하지 않습니다."
      },
      "history": [
        {
          "asOf": 1787313613.7807624,
          "date": "2026-08-21",
          "fundamentalScore": -5.0,
          "confidence": 85.0,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 30.4,
            "base": 39.9,
            "bear": 29.7
          },
          "currentPrice": 273.56500244140625,
          "valuationGap": -0.091,
          "theses": {
            "growth": "intact",
            "cashFlow": "damaged",
            "resilience": "intact"
          }
        }
      ],
      "thesisHistory": [
        {
          "asOf": 1787313613.7807624,
          "date": "2026-08-21",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "damaged",
            "resilience": "intact"
          }
        }
      ],
      "limitations": [
        "점수는 현재 캐시에 있는 공시·컨센서스·구조화 뉴스만 사용합니다.",
        "시나리오 수치는 예측 확률이 아니라 현재 근거의 상대 가중치입니다.",
        "특이항목 원인은 공식 공시 또는 수동 검증 기록이 없으면 추정하지 않습니다."
      ]
    },
    "VST": {
      "ticker": "VST",
      "asOf": 1787313613.7807624,
      "modelVersion": "fundamental-v1.2",
      "fundamentalScore": -5.0,
      "confidence": 85.0,
      "fundamentalSigma": null,
      "fundamentalSigmaProgress": {
        "status": "collecting",
        "collected": 1,
        "required": 8,
        "remaining": 7,
        "expectedReadyDate": "2026-08-28",
        "notice": "같은 KST 날짜의 반복 실행은 한 건으로 교체하며, 임의 과거 점수를 만들어 채우지 않습니다."
      },
      "priceSigma": -1.19,
      "priceDamage": 39.5,
      "fundamentalDamage": 0,
      "thesisDamage": 0,
      "thesisStatus": "intact",
      "damageRead": "현재 가격 변동과 펀더멘털 변화 사이에 큰 괴리는 확인되지 않았습니다.",
      "dimensions": {
        "growth": {
          "score": 7.849999666666666,
          "applicable": true
        },
        "earningsQuality": {
          "score": -22.65097660130892,
          "applicable": true
        },
        "cashFlow": {
          "score": -3.4808853118712264,
          "applicable": true
        },
        "competitivePosition": {
          "score": 0.0,
          "applicable": true
        },
        "customerDemand": {
          "score": 0.0,
          "applicable": true
        },
        "balanceSheet": {
          "score": -13.050699999999999,
          "applicable": true
        }
      },
      "officialEvidence": [
        {
          "id": "sec-annual",
          "kind": "confirmed_fact",
          "label": "연간 재무 수치",
          "source": "SEC Company Facts",
          "period": "2025",
          "detail": "매출·영업이익·순이익·현금흐름 핵심 항목을 SEC 원문 수치로 교차검증했습니다.",
          "url": "https://data.sec.gov/api/xbrl/companyfacts/"
        },
        {
          "id": "sec-quarterly",
          "kind": "confirmed_fact",
          "label": "분기 손익 수치",
          "source": "SEC Company Facts",
          "period": "Q2'26",
          "detail": "최근 분기 매출·영업이익·순이익을 SEC 3개월 보고값과 교차검증했습니다.",
          "url": "https://data.sec.gov/api/xbrl/companyfacts/"
        }
      ],
      "evidenceSummary": {
        "confirmedFacts": 3,
        "credibleReports": 0,
        "needsConfirmation": 0,
        "aiInferences": 1
      },
      "evidence": [
        {
          "headline": "VST SEC Form 10-Q 공식 제출",
          "eventLabel": "정기 실적 공시",
          "publishedAt": 1786287600.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1692819/000169281926000019/vistra-20260630.htm",
          "verificationStatus": "confirmed",
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기",
          "direction": "mixed",
          "impact": 0
        }
      ],
      "topPositive": [],
      "topNegative": [],
      "nextChecks": [
        "다음 실적의 매출·EPS·마진",
        "핵심 고객 수요·CAPEX",
        "FCF와 부채·CAPEX 변화"
      ],
      "theses": [
        {
          "id": "growth",
          "name": "성장 Thesis",
          "statement": "매출·EPS 성장 전망이 유지되고 본업 수익성이 함께 개선된다.",
          "status": "intact",
          "score": 7.8,
          "confidence": 85.0,
          "falsificationRules": [
            "내년 매출·EPS 추정치가 함께 하향",
            "매출 둔화와 마진 하락이 동시에 확인"
          ]
        },
        {
          "id": "cashFlow",
          "name": "현금창출 Thesis",
          "statement": "본업 성장이 영업현금과 잉여현금흐름으로 전환된다.",
          "status": "intact",
          "score": -3.5,
          "confidence": 85.0,
          "falsificationRules": [
            "FCF가 2개 연도 연속 감소",
            "OCF 감소와 CAPEX 부담 증가가 동시에 발생"
          ]
        },
        {
          "id": "resilience",
          "name": "경쟁·재무 Thesis",
          "statement": "경쟁·고객 집중·재무 부담이 장기 사업 경쟁력을 훼손하지 않는다.",
          "status": "intact",
          "score": -4.4,
          "confidence": 85.0,
          "falsificationRules": [
            "핵심 고객 이탈 또는 점유율 하락이 공식 수치로 확인",
            "부채 부담 상승과 사업 리스크 확대가 동시 발생"
          ]
        }
      ],
      "scenarios": {
        "bull": 30.4,
        "base": 39.9,
        "bear": 29.7
      },
      "alerts": [],
      "businessProfile": {
        "updatedAt": null,
        "customers": [],
        "strengths": [],
        "risks": [],
        "sources": [],
        "latestChanges": [
          {
            "headline": "VST SEC Form 10-Q 공식 제출",
            "eventLabel": "정기 실적 공시",
            "publishedAt": 1786287600.0,
            "direction": "mixed",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1692819/000169281926000019/vistra-20260630.htm",
            "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
          }
        ],
        "status": "collecting",
        "notice": "정성 사업정보는 마지막 확인일 이후의 구조화 중요 뉴스를 별도 변경 항목으로 덧붙입니다."
      },
      "earningsQualityReview": {
        "status": "reviewed",
        "period": "Q2'26",
        "reportedNetIncome": 305000000.0,
        "normalizedIncome": 300000000.0,
        "normalizedGap": 0.0167,
        "findings": [
          {
            "key": "otherNonOperating",
            "label": "기타 영업외손익",
            "amount": 131000000.0,
            "revenueRatio": 0.0298,
            "repeatCount": 3,
            "classification": "recurring_risk",
            "recurrenceRead": "최근 6개 기간 중 두 번 이상 나타나 반복 가능성을 열어둡니다."
          }
        ],
        "coreRead": "보고 순이익에 의미 있는 특이항목이 확인됩니다. 본업은 매출·영업이익·정상화이익을 우선해 읽어야 합니다.",
        "manualContext": null
      },
      "valuationScenario": {
        "status": "available",
        "price": 139.18,
        "currentEps": 9.23402,
        "nextEps": 10.45682,
        "epsGrowth": 0.1324,
        "marketPe": 15.07,
        "conservative": 100.87,
        "base": 157.61,
        "optimistic": 244.29,
        "currentVsBase": -0.1169,
        "analystTargetMean": 219.72221,
        "analystTargetLow": 106.0,
        "analystTargetHigh": 313.0,
        "evidenceWeights": {
          "bull": 30.4,
          "base": 39.9,
          "bear": 29.7
        },
        "integratedRead": "현재 가격과 실적 기준가가 크게 어긋나지 않습니다. 다음 EPS 추정치와 PER 변화가 방향을 좌우합니다.",
        "formula": "기준=내년 예상 EPS×현재 시장 PER, 보수=기준×0.64, 낙관=기준×1.55",
        "notice": "가격 밴드는 매수 신호가 아니며 EPS 하향·기업 악재가 생기면 즉시 다시 계산합니다."
      },
      "trackRecord": {
        "status": "collecting",
        "settledCount": 0,
        "hitRate20": null,
        "brier20": null,
        "avgExcess20": null,
        "confidenceAdjustment": 0.0,
        "recentOutcomes": [],
        "notice": "20거래일 SPY 대비 방향 적중과 Brier score를 기록하며, 8건 전에는 신뢰도를 보정하지 않습니다."
      },
      "history": [
        {
          "asOf": 1787313613.7807624,
          "date": "2026-08-21",
          "fundamentalScore": -5.0,
          "confidence": 85.0,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 30.4,
            "base": 39.9,
            "bear": 29.7
          },
          "currentPrice": 139.1790008544922,
          "valuationGap": -0.1169,
          "theses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        }
      ],
      "thesisHistory": [
        {
          "asOf": 1787313613.7807624,
          "date": "2026-08-21",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        }
      ],
      "limitations": [
        "점수는 현재 캐시에 있는 공시·컨센서스·구조화 뉴스만 사용합니다.",
        "시나리오 수치는 예측 확률이 아니라 현재 근거의 상대 가중치입니다.",
        "특이항목 원인은 공식 공시 또는 수동 검증 기록이 없으면 추정하지 않습니다."
      ]
    },
    "ETN": {
      "ticker": "ETN",
      "asOf": 1787313613.7807624,
      "modelVersion": "fundamental-v1.2",
      "fundamentalScore": 11.4,
      "confidence": 82.1,
      "fundamentalSigma": null,
      "fundamentalSigmaProgress": {
        "status": "collecting",
        "collected": 1,
        "required": 8,
        "remaining": 7,
        "expectedReadyDate": "2026-08-28",
        "notice": "같은 KST 날짜의 반복 실행은 한 건으로 교체하며, 임의 과거 점수를 만들어 채우지 않습니다."
      },
      "priceSigma": -0.37,
      "priceDamage": 12.5,
      "fundamentalDamage": 0,
      "thesisDamage": 0,
      "thesisStatus": "intact",
      "damageRead": "현재 가격 변동과 펀더멘털 변화 사이에 큰 괴리는 확인되지 않았습니다.",
      "dimensions": {
        "growth": {
          "score": 12.866666666666667,
          "applicable": true
        },
        "earningsQuality": {
          "score": 17.53,
          "applicable": true
        },
        "cashFlow": {
          "score": 20.483091787439616,
          "applicable": true
        },
        "competitivePosition": {
          "score": 0.0,
          "applicable": true
        },
        "customerDemand": {
          "score": 0.0,
          "applicable": true
        },
        "balanceSheet": {
          "score": 10.8416,
          "applicable": true
        }
      },
      "officialEvidence": [
        {
          "id": "sec-annual",
          "kind": "confirmed_fact",
          "label": "연간 재무 수치",
          "source": "SEC Company Facts",
          "period": "2025",
          "detail": "매출·영업이익·순이익·현금흐름 핵심 항목을 SEC 원문 수치로 교차검증했습니다.",
          "url": "https://data.sec.gov/api/xbrl/companyfacts/"
        },
        {
          "id": "sec-quarterly",
          "kind": "confirmed_fact",
          "label": "분기 손익 수치",
          "source": "SEC Company Facts",
          "period": "Q2'26",
          "detail": "최근 분기 매출·영업이익·순이익을 SEC 3개월 보고값과 교차검증했습니다.",
          "url": "https://data.sec.gov/api/xbrl/companyfacts/"
        }
      ],
      "evidenceSummary": {
        "confirmedFacts": 2,
        "credibleReports": 0,
        "needsConfirmation": 1,
        "aiInferences": 1
      },
      "evidence": [
        {
          "headline": "Trane Technologies와 Eaton, 통합된 고급 열 관리 및 전기 시스템 아키텍처를 통해 AI 공장 효율성을 가속화하기 위해 협력",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1786948356,
          "sourceUrl": "https://finnhub.io/api/news?id=5c42d54a070b06b70b801e32403c39d65dbb427851d4b3df69e487ef3ddd0bc0",
          "verificationStatus": "needs_confirmation",
          "reason": "회사 실적과의 연결고리 확인",
          "direction": "positive",
          "impact": 4.0
        }
      ],
      "topPositive": [
        "회사 실적과의 연결고리 확인"
      ],
      "topNegative": [],
      "nextChecks": [
        "다음 실적의 매출·EPS·마진",
        "핵심 고객 수요·CAPEX",
        "FCF와 부채·CAPEX 변화"
      ],
      "theses": [
        {
          "id": "growth",
          "name": "성장 Thesis",
          "statement": "매출·EPS 성장 전망이 유지되고 본업 수익성이 함께 개선된다.",
          "status": "intact",
          "score": 12.9,
          "confidence": 82.1,
          "falsificationRules": [
            "내년 매출·EPS 추정치가 함께 하향",
            "매출 둔화와 마진 하락이 동시에 확인"
          ]
        },
        {
          "id": "cashFlow",
          "name": "현금창출 Thesis",
          "statement": "본업 성장이 영업현금과 잉여현금흐름으로 전환된다.",
          "status": "strengthening",
          "score": 20.5,
          "confidence": 82.1,
          "falsificationRules": [
            "FCF가 2개 연도 연속 감소",
            "OCF 감소와 CAPEX 부담 증가가 동시에 발생"
          ]
        },
        {
          "id": "resilience",
          "name": "경쟁·재무 Thesis",
          "statement": "경쟁·고객 집중·재무 부담이 장기 사업 경쟁력을 훼손하지 않는다.",
          "status": "intact",
          "score": 3.6,
          "confidence": 82.1,
          "falsificationRules": [
            "핵심 고객 이탈 또는 점유율 하락이 공식 수치로 확인",
            "부채 부담 상승과 사업 리스크 확대가 동시 발생"
          ]
        }
      ],
      "scenarios": {
        "bull": 33.5,
        "base": 39.4,
        "bear": 27.1
      },
      "alerts": [],
      "businessProfile": {
        "updatedAt": null,
        "customers": [],
        "strengths": [],
        "risks": [],
        "sources": [],
        "latestChanges": [
          {
            "headline": "Trane Technologies와 Eaton, 통합된 고급 열 관리 및 전기 시스템 아키텍처를 통해 AI 공장 효율성을 가속화하기 위해 협력",
            "eventLabel": "주요 고객 계약",
            "publishedAt": 1786948356,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=5c42d54a070b06b70b801e32403c39d65dbb427851d4b3df69e487ef3ddd0bc0",
            "reason": "회사 실적과의 연결고리 확인"
          }
        ],
        "status": "collecting",
        "notice": "정성 사업정보는 마지막 확인일 이후의 구조화 중요 뉴스를 별도 변경 항목으로 덧붙입니다."
      },
      "earningsQualityReview": {
        "status": "reviewed",
        "period": "Q2'26",
        "reportedNetIncome": 821000000.0,
        "normalizedIncome": null,
        "normalizedGap": null,
        "findings": [],
        "coreRead": "현재 수집된 항목만 보면 최신 기간 순이익을 크게 왜곡하는 특이항목은 확인되지 않았습니다.",
        "manualContext": null
      },
      "valuationScenario": {
        "status": "available",
        "price": 418.61,
        "currentEps": 13.51196,
        "nextEps": 16.0337,
        "epsGrowth": 0.1866,
        "marketPe": 30.98,
        "conservative": 317.91,
        "base": 496.74,
        "optimistic": 769.94,
        "currentVsBase": -0.1573,
        "analystTargetMean": 476.42792,
        "analystTargetLow": 333.0,
        "analystTargetHigh": 534.0,
        "evidenceWeights": {
          "bull": 33.5,
          "base": 39.4,
          "bear": 27.1
        },
        "integratedRead": "현재 시장 PER이 유지된다는 가정의 기준가 아래입니다. 실적 전망 유지 여부를 확인하며 접근할 구간입니다.",
        "formula": "기준=내년 예상 EPS×현재 시장 PER, 보수=기준×0.64, 낙관=기준×1.55",
        "notice": "가격 밴드는 매수 신호가 아니며 EPS 하향·기업 악재가 생기면 즉시 다시 계산합니다."
      },
      "trackRecord": {
        "status": "collecting",
        "settledCount": 0,
        "hitRate20": null,
        "brier20": null,
        "avgExcess20": null,
        "confidenceAdjustment": 0.0,
        "recentOutcomes": [],
        "notice": "20거래일 SPY 대비 방향 적중과 Brier score를 기록하며, 8건 전에는 신뢰도를 보정하지 않습니다."
      },
      "history": [
        {
          "asOf": 1787313613.7807624,
          "date": "2026-08-21",
          "fundamentalScore": 11.4,
          "confidence": 82.1,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 33.5,
            "base": 39.4,
            "bear": 27.1
          },
          "currentPrice": 418.6099853515625,
          "valuationGap": -0.1573,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        }
      ],
      "thesisHistory": [
        {
          "asOf": 1787313613.7807624,
          "date": "2026-08-21",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        }
      ],
      "limitations": [
        "점수는 현재 캐시에 있는 공시·컨센서스·구조화 뉴스만 사용합니다.",
        "시나리오 수치는 예측 확률이 아니라 현재 근거의 상대 가중치입니다.",
        "특이항목 원인은 공식 공시 또는 수동 검증 기록이 없으면 추정하지 않습니다."
      ]
    },
    "PWR": {
      "ticker": "PWR",
      "asOf": 1787313613.7807624,
      "modelVersion": "fundamental-v1.2",
      "fundamentalScore": 9.2,
      "confidence": 71.7,
      "fundamentalSigma": null,
      "fundamentalSigmaProgress": {
        "status": "collecting",
        "collected": 1,
        "required": 8,
        "remaining": 7,
        "expectedReadyDate": "2026-08-28",
        "notice": "같은 KST 날짜의 반복 실행은 한 건으로 교체하며, 임의 과거 점수를 만들어 채우지 않습니다."
      },
      "priceSigma": 0.13,
      "priceDamage": 4.2,
      "fundamentalDamage": 0,
      "thesisDamage": 0,
      "thesisStatus": "intact",
      "damageRead": "현재 가격 변동과 펀더멘털 변화 사이에 큰 괴리는 확인되지 않았습니다.",
      "dimensions": {
        "growth": {
          "score": 10.71666633333333,
          "applicable": true
        },
        "earningsQuality": {
          "score": 3.02154990473949,
          "applicable": true
        },
        "cashFlow": {
          "score": 24.864134077304595,
          "applicable": true
        },
        "competitivePosition": {
          "score": 0.0,
          "applicable": true
        },
        "customerDemand": {
          "score": 0.0,
          "applicable": true
        },
        "balanceSheet": {
          "score": 14.2994,
          "applicable": true
        }
      },
      "officialEvidence": [
        {
          "id": "sec-annual",
          "kind": "confirmed_fact",
          "label": "연간 재무 수치",
          "source": "SEC Company Facts",
          "period": "2025",
          "detail": "매출·영업이익·순이익·현금흐름 핵심 항목을 SEC 원문 수치로 교차검증했습니다.",
          "url": "https://data.sec.gov/api/xbrl/companyfacts/"
        },
        {
          "id": "sec-quarterly",
          "kind": "confirmed_fact",
          "label": "분기 손익 수치",
          "source": "SEC Company Facts",
          "period": "Q2'26",
          "detail": "최근 분기 매출·영업이익·순이익을 SEC 3개월 보고값과 교차검증했습니다.",
          "url": "https://data.sec.gov/api/xbrl/companyfacts/"
        }
      ],
      "evidenceSummary": {
        "confirmedFacts": 2,
        "credibleReports": 0,
        "needsConfirmation": 0,
        "aiInferences": 0
      },
      "evidence": [],
      "topPositive": [],
      "topNegative": [],
      "nextChecks": [
        "다음 실적의 매출·EPS·마진",
        "핵심 고객 수요·CAPEX",
        "FCF와 부채·CAPEX 변화"
      ],
      "theses": [
        {
          "id": "growth",
          "name": "성장 Thesis",
          "statement": "매출·EPS 성장 전망이 유지되고 본업 수익성이 함께 개선된다.",
          "status": "intact",
          "score": 10.7,
          "confidence": 71.7,
          "falsificationRules": [
            "내년 매출·EPS 추정치가 함께 하향",
            "매출 둔화와 마진 하락이 동시에 확인"
          ]
        },
        {
          "id": "cashFlow",
          "name": "현금창출 Thesis",
          "statement": "본업 성장이 영업현금과 잉여현금흐름으로 전환된다.",
          "status": "strengthening",
          "score": 24.9,
          "confidence": 71.7,
          "falsificationRules": [
            "FCF가 2개 연도 연속 감소",
            "OCF 감소와 CAPEX 부담 증가가 동시에 발생"
          ]
        },
        {
          "id": "resilience",
          "name": "경쟁·재무 Thesis",
          "statement": "경쟁·고객 집중·재무 부담이 장기 사업 경쟁력을 훼손하지 않는다.",
          "status": "intact",
          "score": 4.8,
          "confidence": 71.7,
          "falsificationRules": [
            "핵심 고객 이탈 또는 점유율 하락이 공식 수치로 확인",
            "부채 부담 상승과 사업 리스크 확대가 동시 발생"
          ]
        }
      ],
      "scenarios": {
        "bull": 32.8,
        "base": 39.7,
        "bear": 27.5
      },
      "alerts": [],
      "businessProfile": {
        "updatedAt": null,
        "customers": [],
        "strengths": [],
        "risks": [],
        "sources": [],
        "latestChanges": [],
        "status": "collecting",
        "notice": "정성 사업정보는 마지막 확인일 이후의 구조화 중요 뉴스를 별도 변경 항목으로 덧붙입니다."
      },
      "earningsQualityReview": {
        "status": "reviewed",
        "period": "Q2'26",
        "reportedNetIncome": 451381000.0,
        "normalizedIncome": 456213815.0,
        "normalizedGap": -0.0106,
        "findings": [],
        "coreRead": "현재 수집된 항목만 보면 최신 기간 순이익을 크게 왜곡하는 특이항목은 확인되지 않았습니다.",
        "manualContext": null
      },
      "valuationScenario": {
        "status": "available",
        "price": 666.99,
        "currentEps": 16.72777,
        "nextEps": 19.6413,
        "epsGrowth": 0.1742,
        "marketPe": 39.87,
        "conservative": 501.23,
        "base": 783.17,
        "optimistic": 1213.91,
        "currentVsBase": -0.1483,
        "analystTargetMean": 770.0421,
        "analystTargetLow": 410.0,
        "analystTargetHigh": 976.0,
        "evidenceWeights": {
          "bull": 32.8,
          "base": 39.7,
          "bear": 27.5
        },
        "integratedRead": "현재 시장 PER이 유지된다는 가정의 기준가 아래입니다. 실적 전망 유지 여부를 확인하며 접근할 구간입니다.",
        "formula": "기준=내년 예상 EPS×현재 시장 PER, 보수=기준×0.64, 낙관=기준×1.55",
        "notice": "가격 밴드는 매수 신호가 아니며 EPS 하향·기업 악재가 생기면 즉시 다시 계산합니다."
      },
      "trackRecord": {
        "status": "collecting",
        "settledCount": 0,
        "hitRate20": null,
        "brier20": null,
        "avgExcess20": null,
        "confidenceAdjustment": 0.0,
        "recentOutcomes": [],
        "notice": "20거래일 SPY 대비 방향 적중과 Brier score를 기록하며, 8건 전에는 신뢰도를 보정하지 않습니다."
      },
      "history": [
        {
          "asOf": 1787313613.7807624,
          "date": "2026-08-21",
          "fundamentalScore": 9.2,
          "confidence": 71.7,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 32.8,
            "base": 39.7,
            "bear": 27.5
          },
          "currentPrice": 666.9949951171875,
          "valuationGap": -0.1483,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        }
      ],
      "thesisHistory": [
        {
          "asOf": 1787313613.7807624,
          "date": "2026-08-21",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        }
      ],
      "limitations": [
        "점수는 현재 캐시에 있는 공시·컨센서스·구조화 뉴스만 사용합니다.",
        "시나리오 수치는 예측 확률이 아니라 현재 근거의 상대 가중치입니다.",
        "특이항목 원인은 공식 공시 또는 수동 검증 기록이 없으면 추정하지 않습니다."
      ]
    },
    "HUBB": {
      "ticker": "HUBB",
      "asOf": 1787313613.7807624,
      "modelVersion": "fundamental-v1.2",
      "fundamentalScore": 9.2,
      "confidence": 71.7,
      "fundamentalSigma": null,
      "fundamentalSigmaProgress": {
        "status": "collecting",
        "collected": 1,
        "required": 8,
        "remaining": 7,
        "expectedReadyDate": "2026-08-28",
        "notice": "같은 KST 날짜의 반복 실행은 한 건으로 교체하며, 임의 과거 점수를 만들어 채우지 않습니다."
      },
      "priceSigma": -1.25,
      "priceDamage": 41.8,
      "fundamentalDamage": 0,
      "thesisDamage": 0,
      "thesisStatus": "intact",
      "damageRead": "현재 가격 변동과 펀더멘털 변화 사이에 큰 괴리는 확인되지 않았습니다.",
      "dimensions": {
        "growth": {
          "score": 7.243333333333333,
          "applicable": true
        },
        "earningsQuality": {
          "score": 13.233836051948057,
          "applicable": true
        },
        "cashFlow": {
          "score": 23.940552540700548,
          "applicable": true
        },
        "competitivePosition": {
          "score": 0.0,
          "applicable": true
        },
        "customerDemand": {
          "score": 0.0,
          "applicable": true
        },
        "balanceSheet": {
          "score": 7.6394,
          "applicable": true
        }
      },
      "officialEvidence": [
        {
          "id": "sec-annual",
          "kind": "confirmed_fact",
          "label": "연간 재무 수치",
          "source": "SEC Company Facts",
          "period": "2025",
          "detail": "매출·영업이익·순이익·현금흐름 핵심 항목을 SEC 원문 수치로 교차검증했습니다.",
          "url": "https://data.sec.gov/api/xbrl/companyfacts/"
        },
        {
          "id": "sec-quarterly",
          "kind": "confirmed_fact",
          "label": "분기 손익 수치",
          "source": "SEC Company Facts",
          "period": "Q2'26",
          "detail": "최근 분기 매출·영업이익·순이익을 SEC 3개월 보고값과 교차검증했습니다.",
          "url": "https://data.sec.gov/api/xbrl/companyfacts/"
        }
      ],
      "evidenceSummary": {
        "confirmedFacts": 2,
        "credibleReports": 0,
        "needsConfirmation": 0,
        "aiInferences": 0
      },
      "evidence": [],
      "topPositive": [],
      "topNegative": [],
      "nextChecks": [
        "다음 실적의 매출·EPS·마진",
        "핵심 고객 수요·CAPEX",
        "FCF와 부채·CAPEX 변화"
      ],
      "theses": [
        {
          "id": "growth",
          "name": "성장 Thesis",
          "statement": "매출·EPS 성장 전망이 유지되고 본업 수익성이 함께 개선된다.",
          "status": "intact",
          "score": 7.2,
          "confidence": 71.7,
          "falsificationRules": [
            "내년 매출·EPS 추정치가 함께 하향",
            "매출 둔화와 마진 하락이 동시에 확인"
          ]
        },
        {
          "id": "cashFlow",
          "name": "현금창출 Thesis",
          "statement": "본업 성장이 영업현금과 잉여현금흐름으로 전환된다.",
          "status": "strengthening",
          "score": 23.9,
          "confidence": 71.7,
          "falsificationRules": [
            "FCF가 2개 연도 연속 감소",
            "OCF 감소와 CAPEX 부담 증가가 동시에 발생"
          ]
        },
        {
          "id": "resilience",
          "name": "경쟁·재무 Thesis",
          "statement": "경쟁·고객 집중·재무 부담이 장기 사업 경쟁력을 훼손하지 않는다.",
          "status": "intact",
          "score": 2.5,
          "confidence": 71.7,
          "falsificationRules": [
            "핵심 고객 이탈 또는 점유율 하락이 공식 수치로 확인",
            "부채 부담 상승과 사업 리스크 확대가 동시 발생"
          ]
        }
      ],
      "scenarios": {
        "bull": 32.8,
        "base": 39.7,
        "bear": 27.5
      },
      "alerts": [],
      "businessProfile": {
        "updatedAt": null,
        "customers": [],
        "strengths": [],
        "risks": [],
        "sources": [],
        "latestChanges": [],
        "status": "collecting",
        "notice": "정성 사업정보는 마지막 확인일 이후의 구조화 중요 뉴스를 별도 변경 항목으로 덧붙입니다."
      },
      "earningsQualityReview": {
        "status": "reviewed",
        "period": "Q2'26",
        "reportedNetIncome": 240400000.0,
        "normalizedIncome": 240400000.0,
        "normalizedGap": 0.0,
        "findings": [],
        "coreRead": "현재 수집된 항목만 보면 최신 기간 순이익을 크게 왜곡하는 특이항목은 확인되지 않았습니다.",
        "manualContext": null
      },
      "valuationScenario": {
        "status": "available",
        "price": 472.02,
        "currentEps": 20.45252,
        "nextEps": 22.87081,
        "epsGrowth": 0.1182,
        "marketPe": 23.08,
        "conservative": 337.81,
        "base": 527.83,
        "optimistic": 818.14,
        "currentVsBase": -0.1057,
        "analystTargetMean": 566.3,
        "analystTargetLow": 502.0,
        "analystTargetHigh": 630.0,
        "evidenceWeights": {
          "bull": 32.8,
          "base": 39.7,
          "bear": 27.5
        },
        "integratedRead": "현재 시장 PER이 유지된다는 가정의 기준가 아래입니다. 실적 전망 유지 여부를 확인하며 접근할 구간입니다.",
        "formula": "기준=내년 예상 EPS×현재 시장 PER, 보수=기준×0.64, 낙관=기준×1.55",
        "notice": "가격 밴드는 매수 신호가 아니며 EPS 하향·기업 악재가 생기면 즉시 다시 계산합니다."
      },
      "trackRecord": {
        "status": "collecting",
        "settledCount": 0,
        "hitRate20": null,
        "brier20": null,
        "avgExcess20": null,
        "confidenceAdjustment": 0.0,
        "recentOutcomes": [],
        "notice": "20거래일 SPY 대비 방향 적중과 Brier score를 기록하며, 8건 전에는 신뢰도를 보정하지 않습니다."
      },
      "history": [
        {
          "asOf": 1787313613.7807624,
          "date": "2026-08-21",
          "fundamentalScore": 9.2,
          "confidence": 71.7,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 32.8,
            "base": 39.7,
            "bear": 27.5
          },
          "currentPrice": 472.0199890136719,
          "valuationGap": -0.1057,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        }
      ],
      "thesisHistory": [
        {
          "asOf": 1787313613.7807624,
          "date": "2026-08-21",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        }
      ],
      "limitations": [
        "점수는 현재 캐시에 있는 공시·컨센서스·구조화 뉴스만 사용합니다.",
        "시나리오 수치는 예측 확률이 아니라 현재 근거의 상대 가중치입니다.",
        "특이항목 원인은 공식 공시 또는 수동 검증 기록이 없으면 추정하지 않습니다."
      ]
    },
    "VRT": {
      "ticker": "VRT",
      "asOf": 1787313613.7807624,
      "modelVersion": "fundamental-v1.2",
      "fundamentalScore": 18.7,
      "confidence": 85.0,
      "fundamentalSigma": null,
      "fundamentalSigmaProgress": {
        "status": "collecting",
        "collected": 1,
        "required": 8,
        "remaining": 7,
        "expectedReadyDate": "2026-08-28",
        "notice": "같은 KST 날짜의 반복 실행은 한 건으로 교체하며, 임의 과거 점수를 만들어 채우지 않습니다."
      },
      "priceSigma": -0.58,
      "priceDamage": 19.2,
      "fundamentalDamage": 0,
      "thesisDamage": 0,
      "thesisStatus": "strengthening",
      "damageRead": "현재 가격 변동과 펀더멘털 변화 사이에 큰 괴리는 확인되지 않았습니다.",
      "dimensions": {
        "growth": {
          "score": 25.913334333333335,
          "applicable": true
        },
        "earningsQuality": {
          "score": 11.251199101850144,
          "applicable": true
        },
        "cashFlow": {
          "score": 52.17478087303653,
          "applicable": true
        },
        "competitivePosition": {
          "score": 0.0,
          "applicable": true
        },
        "customerDemand": {
          "score": 0.0,
          "applicable": true
        },
        "balanceSheet": {
          "score": 14.4389,
          "applicable": true
        }
      },
      "officialEvidence": [
        {
          "id": "sec-annual",
          "kind": "confirmed_fact",
          "label": "연간 재무 수치",
          "source": "SEC Company Facts",
          "period": "2025",
          "detail": "매출·영업이익·순이익·현금흐름 핵심 항목을 SEC 원문 수치로 교차검증했습니다.",
          "url": "https://data.sec.gov/api/xbrl/companyfacts/"
        },
        {
          "id": "sec-quarterly",
          "kind": "confirmed_fact",
          "label": "분기 손익 수치",
          "source": "SEC Company Facts",
          "period": "Q2'26",
          "detail": "최근 분기 매출·영업이익·순이익을 SEC 3개월 보고값과 교차검증했습니다.",
          "url": "https://data.sec.gov/api/xbrl/companyfacts/"
        }
      ],
      "evidenceSummary": {
        "confirmedFacts": 2,
        "credibleReports": 0,
        "needsConfirmation": 1,
        "aiInferences": 1
      },
      "evidence": [
        {
          "headline": "더 강력한 결과, AI 거래 및 환매는 Vertiv Holdings Co(VRT)의 게임 체인저가 될 수 있습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1786533168,
          "sourceUrl": "https://finnhub.io/api/news?id=6dddc2638d017cb8d7e83ad4c4f381765721fc9bb85f187e150b16b49e2914b0",
          "verificationStatus": "needs_confirmation",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "direction": "positive",
          "impact": 4.0
        }
      ],
      "topPositive": [
        "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
      ],
      "topNegative": [],
      "nextChecks": [
        "다음 실적의 매출·EPS·마진",
        "핵심 고객 수요·CAPEX",
        "FCF와 부채·CAPEX 변화"
      ],
      "theses": [
        {
          "id": "growth",
          "name": "성장 Thesis",
          "statement": "매출·EPS 성장 전망이 유지되고 본업 수익성이 함께 개선된다.",
          "status": "strengthening",
          "score": 25.9,
          "confidence": 85.0,
          "falsificationRules": [
            "내년 매출·EPS 추정치가 함께 하향",
            "매출 둔화와 마진 하락이 동시에 확인"
          ]
        },
        {
          "id": "cashFlow",
          "name": "현금창출 Thesis",
          "statement": "본업 성장이 영업현금과 잉여현금흐름으로 전환된다.",
          "status": "strengthening",
          "score": 52.2,
          "confidence": 85.0,
          "falsificationRules": [
            "FCF가 2개 연도 연속 감소",
            "OCF 감소와 CAPEX 부담 증가가 동시에 발생"
          ]
        },
        {
          "id": "resilience",
          "name": "경쟁·재무 Thesis",
          "statement": "경쟁·고객 집중·재무 부담이 장기 사업 경쟁력을 훼손하지 않는다.",
          "status": "intact",
          "score": 4.8,
          "confidence": 85.0,
          "falsificationRules": [
            "핵심 고객 이탈 또는 점유율 하락이 공식 수치로 확인",
            "부채 부담 상승과 사업 리스크 확대가 동시 발생"
          ]
        }
      ],
      "scenarios": {
        "bull": 35.1,
        "base": 38.9,
        "bear": 26.0
      },
      "alerts": [],
      "businessProfile": {
        "updatedAt": null,
        "customers": [],
        "strengths": [],
        "risks": [],
        "sources": [],
        "latestChanges": [
          {
            "headline": "더 강력한 결과, AI 거래 및 환매는 Vertiv Holdings Co(VRT)의 게임 체인저가 될 수 있습니다.",
            "eventLabel": "주요 고객 계약",
            "publishedAt": 1786533168,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=6dddc2638d017cb8d7e83ad4c4f381765721fc9bb85f187e150b16b49e2914b0",
            "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
          }
        ],
        "status": "collecting",
        "notice": "정성 사업정보는 마지막 확인일 이후의 구조화 중요 뉴스를 별도 변경 항목으로 덧붙입니다."
      },
      "earningsQualityReview": {
        "status": "reviewed",
        "period": "Q2'26",
        "reportedNetIncome": 497800000.0,
        "normalizedIncome": 497800000.0,
        "normalizedGap": 0.0,
        "findings": [],
        "coreRead": "현재 수집된 항목만 보면 최신 기간 순이익을 크게 왜곡하는 특이항목은 확인되지 않았습니다.",
        "manualContext": null
      },
      "valuationScenario": {
        "status": "available",
        "price": 258.86,
        "currentEps": 6.70757,
        "nextEps": 9.09879,
        "epsGrowth": 0.3565,
        "marketPe": 38.59,
        "conservative": 224.73,
        "base": 351.14,
        "optimistic": 544.27,
        "currentVsBase": -0.2628,
        "analystTargetMean": 338.15384,
        "analystTargetLow": 236.0,
        "analystTargetHigh": 427.0,
        "evidenceWeights": {
          "bull": 35.1,
          "base": 38.9,
          "bear": 26.0
        },
        "integratedRead": "현재 시장 PER이 유지된다는 가정의 기준가 아래입니다. 실적 전망 유지 여부를 확인하며 접근할 구간입니다.",
        "formula": "기준=내년 예상 EPS×현재 시장 PER, 보수=기준×0.64, 낙관=기준×1.55",
        "notice": "가격 밴드는 매수 신호가 아니며 EPS 하향·기업 악재가 생기면 즉시 다시 계산합니다."
      },
      "trackRecord": {
        "status": "collecting",
        "settledCount": 0,
        "hitRate20": null,
        "brier20": null,
        "avgExcess20": null,
        "confidenceAdjustment": 0.0,
        "recentOutcomes": [],
        "notice": "20거래일 SPY 대비 방향 적중과 Brier score를 기록하며, 8건 전에는 신뢰도를 보정하지 않습니다."
      },
      "history": [
        {
          "asOf": 1787313613.7807624,
          "date": "2026-08-21",
          "fundamentalScore": 18.7,
          "confidence": 85.0,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "strengthening",
          "scenarioWeights": {
            "bull": 35.1,
            "base": 38.9,
            "bear": 26.0
          },
          "currentPrice": 258.8599853515625,
          "valuationGap": -0.2628,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        }
      ],
      "thesisHistory": [
        {
          "asOf": 1787313613.7807624,
          "date": "2026-08-21",
          "overallStatus": "strengthening",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        }
      ],
      "limitations": [
        "점수는 현재 캐시에 있는 공시·컨센서스·구조화 뉴스만 사용합니다.",
        "시나리오 수치는 예측 확률이 아니라 현재 근거의 상대 가중치입니다.",
        "특이항목 원인은 공식 공시 또는 수동 검증 기록이 없으면 추정하지 않습니다."
      ]
    },
    "MOD": {
      "ticker": "MOD",
      "asOf": 1787313613.7807624,
      "modelVersion": "fundamental-v1.2",
      "fundamentalScore": 10.5,
      "confidence": 71.7,
      "fundamentalSigma": null,
      "fundamentalSigmaProgress": {
        "status": "collecting",
        "collected": 1,
        "required": 8,
        "remaining": 7,
        "expectedReadyDate": "2026-08-28",
        "notice": "같은 KST 날짜의 반복 실행은 한 건으로 교체하며, 임의 과거 점수를 만들어 채우지 않습니다."
      },
      "priceSigma": -0.81,
      "priceDamage": 27.0,
      "fundamentalDamage": 0,
      "thesisDamage": 0,
      "thesisStatus": "intact",
      "damageRead": "현재 가격 변동과 펀더멘털 변화 사이에 큰 괴리는 확인되지 않았습니다.",
      "dimensions": {
        "growth": {
          "score": 23.52999966666667,
          "applicable": true
        },
        "earningsQuality": {
          "score": 2.8152169190300147,
          "applicable": true
        },
        "cashFlow": {
          "score": 10.757927300850733,
          "applicable": true
        },
        "competitivePosition": {
          "score": 0.0,
          "applicable": true
        },
        "customerDemand": {
          "score": 0.0,
          "applicable": true
        },
        "balanceSheet": {
          "score": 16.0436,
          "applicable": true
        }
      },
      "officialEvidence": [
        {
          "id": "sec-annual",
          "kind": "confirmed_fact",
          "label": "연간 재무 수치",
          "source": "SEC Company Facts",
          "period": "2026",
          "detail": "매출·영업이익·순이익·현금흐름 핵심 항목을 SEC 원문 수치로 교차검증했습니다.",
          "url": "https://data.sec.gov/api/xbrl/companyfacts/"
        },
        {
          "id": "sec-quarterly",
          "kind": "confirmed_fact",
          "label": "분기 손익 수치",
          "source": "SEC Company Facts",
          "period": "Q2'26",
          "detail": "최근 분기 매출·영업이익·순이익을 SEC 3개월 보고값과 교차검증했습니다.",
          "url": "https://data.sec.gov/api/xbrl/companyfacts/"
        }
      ],
      "evidenceSummary": {
        "confirmedFacts": 2,
        "credibleReports": 0,
        "needsConfirmation": 0,
        "aiInferences": 0
      },
      "evidence": [],
      "topPositive": [],
      "topNegative": [],
      "nextChecks": [
        "다음 실적의 매출·EPS·마진",
        "핵심 고객 수요·CAPEX",
        "FCF와 부채·CAPEX 변화"
      ],
      "theses": [
        {
          "id": "growth",
          "name": "성장 Thesis",
          "statement": "매출·EPS 성장 전망이 유지되고 본업 수익성이 함께 개선된다.",
          "status": "strengthening",
          "score": 23.5,
          "confidence": 71.7,
          "falsificationRules": [
            "내년 매출·EPS 추정치가 함께 하향",
            "매출 둔화와 마진 하락이 동시에 확인"
          ]
        },
        {
          "id": "cashFlow",
          "name": "현금창출 Thesis",
          "statement": "본업 성장이 영업현금과 잉여현금흐름으로 전환된다.",
          "status": "intact",
          "score": 10.8,
          "confidence": 71.7,
          "falsificationRules": [
            "FCF가 2개 연도 연속 감소",
            "OCF 감소와 CAPEX 부담 증가가 동시에 발생"
          ]
        },
        {
          "id": "resilience",
          "name": "경쟁·재무 Thesis",
          "statement": "경쟁·고객 집중·재무 부담이 장기 사업 경쟁력을 훼손하지 않는다.",
          "status": "intact",
          "score": 5.3,
          "confidence": 71.7,
          "falsificationRules": [
            "핵심 고객 이탈 또는 점유율 하락이 공식 수치로 확인",
            "부채 부담 상승과 사업 리스크 확대가 동시 발생"
          ]
        }
      ],
      "scenarios": {
        "bull": 33.1,
        "base": 39.6,
        "bear": 27.3
      },
      "alerts": [],
      "businessProfile": {
        "updatedAt": null,
        "customers": [],
        "strengths": [],
        "risks": [],
        "sources": [],
        "latestChanges": [],
        "status": "collecting",
        "notice": "정성 사업정보는 마지막 확인일 이후의 구조화 중요 뉴스를 별도 변경 항목으로 덧붙입니다."
      },
      "earningsQualityReview": {
        "status": "reviewed",
        "period": "Q2'26",
        "reportedNetIncome": 73900000.0,
        "normalizedIncome": 76360000.0,
        "normalizedGap": -0.0322,
        "findings": [],
        "coreRead": "현재 수집된 항목만 보면 최신 기간 순이익을 크게 왜곡하는 특이항목은 확인되지 않았습니다.",
        "manualContext": null
      },
      "valuationScenario": {
        "status": "available",
        "price": 190.65,
        "currentEps": 7.6441,
        "nextEps": 11.18208,
        "epsGrowth": 0.4628,
        "marketPe": 24.94,
        "conservative": 178.49,
        "base": 278.89,
        "optimistic": 432.28,
        "currentVsBase": -0.3164,
        "analystTargetMean": 310.2857,
        "analystTargetLow": 280.0,
        "analystTargetHigh": 355.0,
        "evidenceWeights": {
          "bull": 33.1,
          "base": 39.6,
          "bear": 27.3
        },
        "integratedRead": "현재 시장 PER이 유지된다는 가정의 기준가 아래입니다. 실적 전망 유지 여부를 확인하며 접근할 구간입니다.",
        "formula": "기준=내년 예상 EPS×현재 시장 PER, 보수=기준×0.64, 낙관=기준×1.55",
        "notice": "가격 밴드는 매수 신호가 아니며 EPS 하향·기업 악재가 생기면 즉시 다시 계산합니다."
      },
      "trackRecord": {
        "status": "collecting",
        "settledCount": 0,
        "hitRate20": null,
        "brier20": null,
        "avgExcess20": null,
        "confidenceAdjustment": 0.0,
        "recentOutcomes": [],
        "notice": "20거래일 SPY 대비 방향 적중과 Brier score를 기록하며, 8건 전에는 신뢰도를 보정하지 않습니다."
      },
      "history": [
        {
          "asOf": 1787313613.7807624,
          "date": "2026-08-21",
          "fundamentalScore": 10.5,
          "confidence": 71.7,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 33.1,
            "base": 39.6,
            "bear": 27.3
          },
          "currentPrice": 190.64999389648438,
          "valuationGap": -0.3164,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        }
      ],
      "thesisHistory": [
        {
          "asOf": 1787313613.7807624,
          "date": "2026-08-21",
          "overallStatus": "intact",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        }
      ],
      "limitations": [
        "점수는 현재 캐시에 있는 공시·컨센서스·구조화 뉴스만 사용합니다.",
        "시나리오 수치는 예측 확률이 아니라 현재 근거의 상대 가중치입니다.",
        "특이항목 원인은 공식 공시 또는 수동 검증 기록이 없으면 추정하지 않습니다."
      ]
    },
    "STX": {
      "ticker": "STX",
      "asOf": 1787313613.7807624,
      "modelVersion": "fundamental-v1.2",
      "fundamentalScore": 33.5,
      "confidence": 85.0,
      "fundamentalSigma": null,
      "fundamentalSigmaProgress": {
        "status": "collecting",
        "collected": 1,
        "required": 8,
        "remaining": 7,
        "expectedReadyDate": "2026-08-28",
        "notice": "같은 KST 날짜의 반복 실행은 한 건으로 교체하며, 임의 과거 점수를 만들어 채우지 않습니다."
      },
      "priceSigma": 0.03,
      "priceDamage": 0.9,
      "fundamentalDamage": 0,
      "thesisDamage": 0,
      "thesisStatus": "intact",
      "damageRead": "현재 가격 변동과 펀더멘털 변화 사이에 큰 괴리는 확인되지 않았습니다.",
      "dimensions": {
        "growth": {
          "score": 32.26666733333334,
          "applicable": true
        },
        "earningsQuality": {
          "score": 48.15263921243697,
          "applicable": true
        },
        "cashFlow": {
          "score": 100,
          "applicable": true
        },
        "competitivePosition": {
          "score": 0.0,
          "applicable": true
        },
        "customerDemand": {
          "score": 0.0,
          "applicable": true
        },
        "balanceSheet": {
          "score": 5.194100000000001,
          "applicable": true
        }
      },
      "officialEvidence": [
        {
          "id": "sec-annual",
          "kind": "confirmed_fact",
          "label": "연간 재무 수치",
          "source": "SEC Company Facts",
          "period": "2026",
          "detail": "매출·영업이익·순이익·현금흐름 핵심 항목을 SEC 원문 수치로 교차검증했습니다.",
          "url": "https://data.sec.gov/api/xbrl/companyfacts/"
        },
        {
          "id": "sec-quarterly",
          "kind": "confirmed_fact",
          "label": "분기 손익 수치",
          "source": "SEC Company Facts",
          "period": "Q2'26",
          "detail": "최근 분기 매출·영업이익·순이익을 SEC 3개월 보고값과 교차검증했습니다.",
          "url": "https://data.sec.gov/api/xbrl/companyfacts/"
        }
      ],
      "evidenceSummary": {
        "confirmedFacts": 2,
        "credibleReports": 0,
        "needsConfirmation": 1,
        "aiInferences": 1
      },
      "evidence": [
        {
          "headline": "STX 주식을 보유하고 있는 동안 연간 26%의 이자를 지급하도록 하세요",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1786650714,
          "sourceUrl": "https://finnhub.io/api/news?id=bb20357837052229f0c2e0c5c971a33a470bf8a8336d37e287200a776efdf370",
          "verificationStatus": "needs_confirmation",
          "reason": "회사 실적과의 연결고리 확인",
          "direction": "positive",
          "impact": 4.0
        }
      ],
      "topPositive": [
        "회사 실적과의 연결고리 확인"
      ],
      "topNegative": [],
      "nextChecks": [
        "다음 실적의 매출·EPS·마진",
        "핵심 고객 수요·CAPEX",
        "FCF와 부채·CAPEX 변화"
      ],
      "theses": [
        {
          "id": "growth",
          "name": "성장 Thesis",
          "statement": "매출·EPS 성장 전망이 유지되고 본업 수익성이 함께 개선된다.",
          "status": "strengthening",
          "score": 32.3,
          "confidence": 85.0,
          "falsificationRules": [
            "내년 매출·EPS 추정치가 함께 하향",
            "매출 둔화와 마진 하락이 동시에 확인"
          ]
        },
        {
          "id": "cashFlow",
          "name": "현금창출 Thesis",
          "statement": "본업 성장이 영업현금과 잉여현금흐름으로 전환된다.",
          "status": "strengthening",
          "score": 100,
          "confidence": 85.0,
          "falsificationRules": [
            "FCF가 2개 연도 연속 감소",
            "OCF 감소와 CAPEX 부담 증가가 동시에 발생"
          ]
        },
        {
          "id": "resilience",
          "name": "경쟁·재무 Thesis",
          "statement": "경쟁·고객 집중·재무 부담이 장기 사업 경쟁력을 훼손하지 않는다.",
          "status": "intact",
          "score": 1.7,
          "confidence": 85.0,
          "falsificationRules": [
            "핵심 고객 이탈 또는 점유율 하락이 공식 수치로 확인",
            "부채 부담 상승과 사업 리스크 확대가 동시 발생"
          ]
        }
      ],
      "scenarios": {
        "bull": 38.4,
        "base": 37.8,
        "bear": 23.8
      },
      "alerts": [],
      "businessProfile": {
        "updatedAt": null,
        "customers": [],
        "strengths": [],
        "risks": [],
        "sources": [],
        "latestChanges": [
          {
            "headline": "STX 주식을 보유하고 있는 동안 연간 26%의 이자를 지급하도록 하세요",
            "eventLabel": "장기 공급계약",
            "publishedAt": 1786650714,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=bb20357837052229f0c2e0c5c971a33a470bf8a8336d37e287200a776efdf370",
            "reason": "회사 실적과의 연결고리 확인"
          }
        ],
        "status": "collecting",
        "notice": "정성 사업정보는 마지막 확인일 이후의 구조화 중요 뉴스를 별도 변경 항목으로 덧붙입니다."
      },
      "earningsQualityReview": {
        "status": "reviewed",
        "period": "Q2'26",
        "reportedNetIncome": 748000000.0,
        "normalizedIncome": 1306037209.302326,
        "normalizedGap": -0.4273,
        "findings": [],
        "coreRead": "보고 순이익과 정상화이익 차이가 커 헤드라인 순이익을 그대로 본업 성과로 보기 어렵습니다.",
        "manualContext": null
      },
      "valuationScenario": {
        "status": "available",
        "price": 854.01,
        "currentEps": 35.78091,
        "nextEps": 55.3714,
        "epsGrowth": 0.5475,
        "marketPe": 23.87,
        "conservative": 845.82,
        "base": 1321.59,
        "optimistic": 2048.47,
        "currentVsBase": -0.3538,
        "analystTargetMean": 1125.0,
        "analystTargetLow": 700.0,
        "analystTargetHigh": 1600.0,
        "evidenceWeights": {
          "bull": 38.4,
          "base": 37.8,
          "bear": 23.8
        },
        "integratedRead": "현재 시장 PER이 유지된다는 가정의 기준가 아래입니다. 실적 전망 유지 여부를 확인하며 접근할 구간입니다.",
        "formula": "기준=내년 예상 EPS×현재 시장 PER, 보수=기준×0.64, 낙관=기준×1.55",
        "notice": "가격 밴드는 매수 신호가 아니며 EPS 하향·기업 악재가 생기면 즉시 다시 계산합니다."
      },
      "trackRecord": {
        "status": "collecting",
        "settledCount": 0,
        "hitRate20": null,
        "brier20": null,
        "avgExcess20": null,
        "confidenceAdjustment": 0.0,
        "recentOutcomes": [],
        "notice": "20거래일 SPY 대비 방향 적중과 Brier score를 기록하며, 8건 전에는 신뢰도를 보정하지 않습니다."
      },
      "history": [
        {
          "asOf": 1787313613.7807624,
          "date": "2026-08-21",
          "fundamentalScore": 33.5,
          "confidence": 85.0,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 38.4,
            "base": 37.8,
            "bear": 23.8
          },
          "currentPrice": 854.010009765625,
          "valuationGap": -0.3538,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        }
      ],
      "thesisHistory": [
        {
          "asOf": 1787313613.7807624,
          "date": "2026-08-21",
          "overallStatus": "intact",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        }
      ],
      "limitations": [
        "점수는 현재 캐시에 있는 공시·컨센서스·구조화 뉴스만 사용합니다.",
        "시나리오 수치는 예측 확률이 아니라 현재 근거의 상대 가중치입니다.",
        "특이항목 원인은 공식 공시 또는 수동 검증 기록이 없으면 추정하지 않습니다."
      ]
    },
    "EME": {
      "ticker": "EME",
      "asOf": 1787313613.7807624,
      "modelVersion": "fundamental-v1.2",
      "fundamentalScore": 8.5,
      "confidence": 71.7,
      "fundamentalSigma": null,
      "fundamentalSigmaProgress": {
        "status": "collecting",
        "collected": 1,
        "required": 8,
        "remaining": 7,
        "expectedReadyDate": "2026-08-28",
        "notice": "같은 KST 날짜의 반복 실행은 한 건으로 교체하며, 임의 과거 점수를 만들어 채우지 않습니다."
      },
      "priceSigma": -0.23,
      "priceDamage": 7.8,
      "fundamentalDamage": 0,
      "thesisDamage": 0,
      "thesisStatus": "intact",
      "damageRead": "현재 가격 변동과 펀더멘털 변화 사이에 큰 괴리는 확인되지 않았습니다.",
      "dimensions": {
        "growth": {
          "score": 7.219999666666666,
          "applicable": true
        },
        "earningsQuality": {
          "score": 7.325419522799238,
          "applicable": true
        },
        "cashFlow": {
          "score": 14.6122642811701,
          "applicable": true
        },
        "competitivePosition": {
          "score": 0.0,
          "applicable": true
        },
        "customerDemand": {
          "score": 0.0,
          "applicable": true
        },
        "balanceSheet": {
          "score": 19.9865,
          "applicable": true
        }
      },
      "officialEvidence": [
        {
          "id": "sec-quarterly",
          "kind": "confirmed_fact",
          "label": "분기 손익 수치",
          "source": "SEC Company Facts",
          "period": "Q2'26",
          "detail": "최근 분기 매출·영업이익·순이익을 SEC 3개월 보고값과 교차검증했습니다.",
          "url": "https://data.sec.gov/api/xbrl/companyfacts/"
        }
      ],
      "evidenceSummary": {
        "confirmedFacts": 1,
        "credibleReports": 0,
        "needsConfirmation": 0,
        "aiInferences": 0
      },
      "evidence": [],
      "topPositive": [],
      "topNegative": [],
      "nextChecks": [
        "다음 실적의 매출·EPS·마진",
        "핵심 고객 수요·CAPEX",
        "FCF와 부채·CAPEX 변화"
      ],
      "theses": [
        {
          "id": "growth",
          "name": "성장 Thesis",
          "statement": "매출·EPS 성장 전망이 유지되고 본업 수익성이 함께 개선된다.",
          "status": "intact",
          "score": 7.2,
          "confidence": 71.7,
          "falsificationRules": [
            "내년 매출·EPS 추정치가 함께 하향",
            "매출 둔화와 마진 하락이 동시에 확인"
          ]
        },
        {
          "id": "cashFlow",
          "name": "현금창출 Thesis",
          "statement": "본업 성장이 영업현금과 잉여현금흐름으로 전환된다.",
          "status": "intact",
          "score": 14.6,
          "confidence": 71.7,
          "falsificationRules": [
            "FCF가 2개 연도 연속 감소",
            "OCF 감소와 CAPEX 부담 증가가 동시에 발생"
          ]
        },
        {
          "id": "resilience",
          "name": "경쟁·재무 Thesis",
          "statement": "경쟁·고객 집중·재무 부담이 장기 사업 경쟁력을 훼손하지 않는다.",
          "status": "intact",
          "score": 6.7,
          "confidence": 71.7,
          "falsificationRules": [
            "핵심 고객 이탈 또는 점유율 하락이 공식 수치로 확인",
            "부채 부담 상승과 사업 리스크 확대가 동시 발생"
          ]
        }
      ],
      "scenarios": {
        "bull": 32.7,
        "base": 39.7,
        "bear": 27.6
      },
      "alerts": [],
      "businessProfile": {
        "updatedAt": null,
        "customers": [],
        "strengths": [],
        "risks": [],
        "sources": [],
        "latestChanges": [],
        "status": "collecting",
        "notice": "정성 사업정보는 마지막 확인일 이후의 구조화 중요 뉴스를 별도 변경 항목으로 덧붙입니다."
      },
      "earningsQualityReview": {
        "status": "reviewed",
        "period": "Q2'26",
        "reportedNetIncome": 403694000.0,
        "normalizedIncome": 403694000.0,
        "normalizedGap": 0.0,
        "findings": [],
        "coreRead": "현재 수집된 항목만 보면 최신 기간 순이익을 크게 왜곡하는 특이항목은 확인되지 않았습니다.",
        "manualContext": null
      },
      "valuationScenario": {
        "status": "available",
        "price": 787.28,
        "currentEps": 32.85395,
        "nextEps": 36.74499,
        "epsGrowth": 0.1184,
        "marketPe": 23.96,
        "conservative": 563.53,
        "base": 880.52,
        "optimistic": 1364.81,
        "currentVsBase": -0.1059,
        "analystTargetMean": 1033.2858,
        "analystTargetLow": 885.0,
        "analystTargetHigh": 1200.0,
        "evidenceWeights": {
          "bull": 32.7,
          "base": 39.7,
          "bear": 27.6
        },
        "integratedRead": "현재 시장 PER이 유지된다는 가정의 기준가 아래입니다. 실적 전망 유지 여부를 확인하며 접근할 구간입니다.",
        "formula": "기준=내년 예상 EPS×현재 시장 PER, 보수=기준×0.64, 낙관=기준×1.55",
        "notice": "가격 밴드는 매수 신호가 아니며 EPS 하향·기업 악재가 생기면 즉시 다시 계산합니다."
      },
      "trackRecord": {
        "status": "collecting",
        "settledCount": 0,
        "hitRate20": null,
        "brier20": null,
        "avgExcess20": null,
        "confidenceAdjustment": 0.0,
        "recentOutcomes": [],
        "notice": "20거래일 SPY 대비 방향 적중과 Brier score를 기록하며, 8건 전에는 신뢰도를 보정하지 않습니다."
      },
      "history": [
        {
          "asOf": 1787313613.7807624,
          "date": "2026-08-21",
          "fundamentalScore": 8.5,
          "confidence": 71.7,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 32.7,
            "base": 39.7,
            "bear": 27.6
          },
          "currentPrice": 787.280029296875,
          "valuationGap": -0.1059,
          "theses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        }
      ],
      "thesisHistory": [
        {
          "asOf": 1787313613.7807624,
          "date": "2026-08-21",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        }
      ],
      "limitations": [
        "점수는 현재 캐시에 있는 공시·컨센서스·구조화 뉴스만 사용합니다.",
        "시나리오 수치는 예측 확률이 아니라 현재 근거의 상대 가중치입니다.",
        "특이항목 원인은 공식 공시 또는 수동 검증 기록이 없으면 추정하지 않습니다."
      ]
    },
    "FIX": {
      "ticker": "FIX",
      "asOf": 1787313613.7807624,
      "modelVersion": "fundamental-v1.2",
      "fundamentalScore": 15.9,
      "confidence": 71.7,
      "fundamentalSigma": null,
      "fundamentalSigmaProgress": {
        "status": "collecting",
        "collected": 1,
        "required": 8,
        "remaining": 7,
        "expectedReadyDate": "2026-08-28",
        "notice": "같은 KST 날짜의 반복 실행은 한 건으로 교체하며, 임의 과거 점수를 만들어 채우지 않습니다."
      },
      "priceSigma": -0.7,
      "priceDamage": 23.2,
      "fundamentalDamage": 0,
      "thesisDamage": 0,
      "thesisStatus": "intact",
      "damageRead": "현재 가격 변동과 펀더멘털 변화 사이에 큰 괴리는 확인되지 않았습니다.",
      "dimensions": {
        "growth": {
          "score": 13.78333366666667,
          "applicable": true
        },
        "earningsQuality": {
          "score": 17.685030977292293,
          "applicable": true
        },
        "cashFlow": {
          "score": 39.88296525950357,
          "applicable": true
        },
        "competitivePosition": {
          "score": 0.0,
          "applicable": true
        },
        "customerDemand": {
          "score": 0.0,
          "applicable": true
        },
        "balanceSheet": {
          "score": 19.8488,
          "applicable": true
        }
      },
      "officialEvidence": [
        {
          "id": "sec-quarterly",
          "kind": "confirmed_fact",
          "label": "분기 손익 수치",
          "source": "SEC Company Facts",
          "period": "Q2'26",
          "detail": "최근 분기 매출·영업이익·순이익을 SEC 3개월 보고값과 교차검증했습니다.",
          "url": "https://data.sec.gov/api/xbrl/companyfacts/"
        }
      ],
      "evidenceSummary": {
        "confirmedFacts": 1,
        "credibleReports": 0,
        "needsConfirmation": 0,
        "aiInferences": 0
      },
      "evidence": [],
      "topPositive": [],
      "topNegative": [],
      "nextChecks": [
        "다음 실적의 매출·EPS·마진",
        "핵심 고객 수요·CAPEX",
        "FCF와 부채·CAPEX 변화"
      ],
      "theses": [
        {
          "id": "growth",
          "name": "성장 Thesis",
          "statement": "매출·EPS 성장 전망이 유지되고 본업 수익성이 함께 개선된다.",
          "status": "intact",
          "score": 13.8,
          "confidence": 71.7,
          "falsificationRules": [
            "내년 매출·EPS 추정치가 함께 하향",
            "매출 둔화와 마진 하락이 동시에 확인"
          ]
        },
        {
          "id": "cashFlow",
          "name": "현금창출 Thesis",
          "statement": "본업 성장이 영업현금과 잉여현금흐름으로 전환된다.",
          "status": "strengthening",
          "score": 39.9,
          "confidence": 71.7,
          "falsificationRules": [
            "FCF가 2개 연도 연속 감소",
            "OCF 감소와 CAPEX 부담 증가가 동시에 발생"
          ]
        },
        {
          "id": "resilience",
          "name": "경쟁·재무 Thesis",
          "statement": "경쟁·고객 집중·재무 부담이 장기 사업 경쟁력을 훼손하지 않는다.",
          "status": "intact",
          "score": 6.6,
          "confidence": 71.7,
          "falsificationRules": [
            "핵심 고객 이탈 또는 점유율 하락이 공식 수치로 확인",
            "부채 부담 상승과 사업 리스크 확대가 동시 발생"
          ]
        }
      ],
      "scenarios": {
        "bull": 34.2,
        "base": 39.3,
        "bear": 26.5
      },
      "alerts": [],
      "businessProfile": {
        "updatedAt": null,
        "customers": [],
        "strengths": [],
        "risks": [],
        "sources": [],
        "latestChanges": [],
        "status": "collecting",
        "notice": "정성 사업정보는 마지막 확인일 이후의 구조화 중요 뉴스를 별도 변경 항목으로 덧붙입니다."
      },
      "earningsQualityReview": {
        "status": "reviewed",
        "period": "Q2'26",
        "reportedNetIncome": 441602000.0,
        "normalizedIncome": 442584649.71046,
        "normalizedGap": -0.0022,
        "findings": [],
        "coreRead": "현재 수집된 항목만 보면 최신 기간 순이익을 크게 왜곡하는 특이항목은 확인되지 않았습니다.",
        "manualContext": null
      },
      "valuationScenario": {
        "status": "available",
        "price": 1668.7,
        "currentEps": 48.97116,
        "nextEps": 60.04276,
        "epsGrowth": 0.2261,
        "marketPe": 34.08,
        "conservative": 1309.42,
        "base": 2045.97,
        "optimistic": 3171.25,
        "currentVsBase": -0.1844,
        "analystTargetMean": 2210.8572,
        "analystTargetLow": 1910.0,
        "analystTargetHigh": 2500.0,
        "evidenceWeights": {
          "bull": 34.2,
          "base": 39.3,
          "bear": 26.5
        },
        "integratedRead": "현재 시장 PER이 유지된다는 가정의 기준가 아래입니다. 실적 전망 유지 여부를 확인하며 접근할 구간입니다.",
        "formula": "기준=내년 예상 EPS×현재 시장 PER, 보수=기준×0.64, 낙관=기준×1.55",
        "notice": "가격 밴드는 매수 신호가 아니며 EPS 하향·기업 악재가 생기면 즉시 다시 계산합니다."
      },
      "trackRecord": {
        "status": "collecting",
        "settledCount": 0,
        "hitRate20": null,
        "brier20": null,
        "avgExcess20": null,
        "confidenceAdjustment": 0.0,
        "recentOutcomes": [],
        "notice": "20거래일 SPY 대비 방향 적중과 Brier score를 기록하며, 8건 전에는 신뢰도를 보정하지 않습니다."
      },
      "history": [
        {
          "asOf": 1787313613.7807624,
          "date": "2026-08-21",
          "fundamentalScore": 15.9,
          "confidence": 71.7,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 34.2,
            "base": 39.3,
            "bear": 26.5
          },
          "currentPrice": 1668.699951171875,
          "valuationGap": -0.1844,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        }
      ],
      "thesisHistory": [
        {
          "asOf": 1787313613.7807624,
          "date": "2026-08-21",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        }
      ],
      "limitations": [
        "점수는 현재 캐시에 있는 공시·컨센서스·구조화 뉴스만 사용합니다.",
        "시나리오 수치는 예측 확률이 아니라 현재 근거의 상대 가중치입니다.",
        "특이항목 원인은 공식 공시 또는 수동 검증 기록이 없으면 추정하지 않습니다."
      ]
    },
    "SBGSY": {
      "ticker": "SBGSY",
      "asOf": 1787313613.7807624,
      "modelVersion": "fundamental-v1.2",
      "fundamentalScore": 10.3,
      "confidence": 55.2,
      "fundamentalSigma": null,
      "fundamentalSigmaProgress": {
        "status": "collecting",
        "collected": 1,
        "required": 8,
        "remaining": 7,
        "expectedReadyDate": "2026-08-28",
        "notice": "같은 KST 날짜의 반복 실행은 한 건으로 교체하며, 임의 과거 점수를 만들어 채우지 않습니다."
      },
      "priceSigma": 0.32,
      "priceDamage": 10.6,
      "fundamentalDamage": 0,
      "thesisDamage": 0,
      "thesisStatus": "intact",
      "damageRead": "현재 가격 변동과 펀더멘털 변화 사이에 큰 괴리는 확인되지 않았습니다.",
      "dimensions": {
        "growth": {
          "score": 11.306666666666667,
          "applicable": true
        },
        "earningsQuality": {
          "score": 8.866292850567836,
          "applicable": true
        },
        "cashFlow": {
          "score": 25.130978130257148,
          "applicable": true
        },
        "competitivePosition": {
          "score": 0.0,
          "applicable": true
        },
        "customerDemand": {
          "score": 0.0,
          "applicable": true
        },
        "balanceSheet": {
          "score": 13.0664,
          "applicable": true
        }
      },
      "officialEvidence": [],
      "evidenceSummary": {
        "confirmedFacts": 0,
        "credibleReports": 0,
        "needsConfirmation": 0,
        "aiInferences": 0
      },
      "evidence": [],
      "topPositive": [],
      "topNegative": [],
      "nextChecks": [
        "다음 실적의 매출·EPS·마진",
        "핵심 고객 수요·CAPEX",
        "FCF와 부채·CAPEX 변화"
      ],
      "theses": [
        {
          "id": "growth",
          "name": "성장 Thesis",
          "statement": "매출·EPS 성장 전망이 유지되고 본업 수익성이 함께 개선된다.",
          "status": "intact",
          "score": 11.3,
          "confidence": 55.2,
          "falsificationRules": [
            "내년 매출·EPS 추정치가 함께 하향",
            "매출 둔화와 마진 하락이 동시에 확인"
          ]
        },
        {
          "id": "cashFlow",
          "name": "현금창출 Thesis",
          "statement": "본업 성장이 영업현금과 잉여현금흐름으로 전환된다.",
          "status": "strengthening",
          "score": 25.1,
          "confidence": 55.2,
          "falsificationRules": [
            "FCF가 2개 연도 연속 감소",
            "OCF 감소와 CAPEX 부담 증가가 동시에 발생"
          ]
        },
        {
          "id": "resilience",
          "name": "경쟁·재무 Thesis",
          "statement": "경쟁·고객 집중·재무 부담이 장기 사업 경쟁력을 훼손하지 않는다.",
          "status": "intact",
          "score": 4.4,
          "confidence": 55.2,
          "falsificationRules": [
            "핵심 고객 이탈 또는 점유율 하락이 공식 수치로 확인",
            "부채 부담 상승과 사업 리스크 확대가 동시 발생"
          ]
        }
      ],
      "scenarios": {
        "bull": 32.7,
        "base": 39.8,
        "bear": 27.5
      },
      "alerts": [],
      "businessProfile": {
        "updatedAt": null,
        "customers": [],
        "strengths": [],
        "risks": [],
        "sources": [],
        "latestChanges": [],
        "status": "collecting",
        "notice": "정성 사업정보는 마지막 확인일 이후의 구조화 중요 뉴스를 별도 변경 항목으로 덧붙입니다."
      },
      "earningsQualityReview": {
        "status": "reviewed",
        "period": "2025",
        "reportedNetIncome": 4163000000.0,
        "normalizedIncome": 4808805000.0,
        "normalizedGap": -0.1343,
        "findings": [],
        "coreRead": "보고 순이익과 정상화이익 차이가 커 헤드라인 순이익을 그대로 본업 성과로 보기 어렵습니다.",
        "manualContext": null
      },
      "valuationScenario": {
        "status": "available",
        "price": 68.65,
        "currentEps": 2.30922,
        "nextEps": 2.878,
        "epsGrowth": 0.2463,
        "marketPe": 29.73,
        "conservative": 54.76,
        "base": 85.56,
        "optimistic": 132.62,
        "currentVsBase": -0.1976,
        "analystTargetMean": 77.8,
        "analystTargetLow": 76.0,
        "analystTargetHigh": 79.0,
        "evidenceWeights": {
          "bull": 32.7,
          "base": 39.8,
          "bear": 27.5
        },
        "integratedRead": "현재 시장 PER이 유지된다는 가정의 기준가 아래입니다. 실적 전망 유지 여부를 확인하며 접근할 구간입니다.",
        "formula": "기준=내년 예상 EPS×현재 시장 PER, 보수=기준×0.64, 낙관=기준×1.55",
        "notice": "가격 밴드는 매수 신호가 아니며 EPS 하향·기업 악재가 생기면 즉시 다시 계산합니다."
      },
      "trackRecord": {
        "status": "collecting",
        "settledCount": 0,
        "hitRate20": null,
        "brier20": null,
        "avgExcess20": null,
        "confidenceAdjustment": 0.0,
        "recentOutcomes": [],
        "notice": "20거래일 SPY 대비 방향 적중과 Brier score를 기록하며, 8건 전에는 신뢰도를 보정하지 않습니다."
      },
      "history": [
        {
          "asOf": 1787313613.7807624,
          "date": "2026-08-21",
          "fundamentalScore": 10.3,
          "confidence": 55.2,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 32.7,
            "base": 39.8,
            "bear": 27.5
          },
          "currentPrice": 68.6500015258789,
          "valuationGap": -0.1976,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        }
      ],
      "thesisHistory": [
        {
          "asOf": 1787313613.7807624,
          "date": "2026-08-21",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        }
      ],
      "limitations": [
        "점수는 현재 캐시에 있는 공시·컨센서스·구조화 뉴스만 사용합니다.",
        "시나리오 수치는 예측 확률이 아니라 현재 근거의 상대 가중치입니다.",
        "특이항목 원인은 공식 공시 또는 수동 검증 기록이 없으면 추정하지 않습니다."
      ]
    }
  }
};
