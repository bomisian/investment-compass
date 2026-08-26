// 자동 생성 파일 - 펀더멘털 인텔리전스 MVP
const FUNDAMENTAL_INTELLIGENCE_DATA = {
  "schemaVersion": 2,
  "modelVersion": "fundamental-v1.3",
  "generatedAt": 1787788668.347003,
  "records": {
    "MSFT": {
      "ticker": "MSFT",
      "asOf": 1787788668.347003,
      "modelVersion": "fundamental-v1.3",
      "fundamentalScore": 6.2,
      "confidence": 100,
      "fundamentalSigma": null,
      "fundamentalSigmaProgress": {
        "status": "collecting",
        "collected": 7,
        "required": 8,
        "remaining": 1,
        "expectedReadyDate": "2026-08-28",
        "notice": "같은 KST 날짜의 반복 실행은 한 건으로 교체하며, 임의 과거 점수를 만들어 채우지 않습니다."
      },
      "priceSigma": 0.64,
      "priceDamage": 21.5,
      "fundamentalDamage": 67.2,
      "thesisDamage": 100,
      "thesisStatus": "damaged",
      "damageRead": "펀더멘털 위험 신호가 가격에 충분히 반영되지 않았을 가능성이 있습니다.",
      "dimensions": {
        "growth": {
          "score": 12.946666666666667,
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
          "score": -39.199999999999996,
          "applicable": true
        },
        "customerDemand": {
          "score": 0.0,
          "applicable": true
        },
        "balanceSheet": {
          "score": 7.325600000000001,
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
          "headline": "Microsoft, 장기 HUMAIN 거래를 통해 중동 AI 입지 확장",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1787731686,
          "sourceUrl": "https://finnhub.io/api/news?id=ccd74fc2c117b4b6acc7a504cc535ecf7cdc01bec7f5626690ced1879d7d8419",
          "verificationStatus": "needs_confirmation",
          "reason": "회사 실적과의 연결고리 확인",
          "direction": "positive",
          "impact": 4.0
        },
        {
          "headline": "Amazon 및 Microsoft에서 AI 투자가 성과를 내기 시작하면 SanDisk가 혜택을 볼 수 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787645530,
          "sourceUrl": "https://finnhub.io/api/news?id=4149fc64b4cd21b278e0a067b703e12566c3056dad0e555e5cc45b39bb8f51a4",
          "verificationStatus": "needs_confirmation",
          "reason": "사업·실적 연결 경로 확인 필요",
          "direction": "positive",
          "impact": 2.0
        },
        {
          "headline": "경쟁사와 비교하여 소프트웨어 산업에서 Microsoft의 위치 이해",
          "eventLabel": "경쟁사 기술·시장 진입",
          "publishedAt": 1787637509,
          "sourceUrl": "https://finnhub.io/api/news?id=15b2920fc24b9ff12d0e708c84e07adade1edc4a4b664332aed632bf6b491b38",
          "verificationStatus": "needs_confirmation",
          "reason": "회사 실적과의 연결고리 확인",
          "direction": "negative",
          "impact": -4.0
        },
        {
          "headline": "엔비디아: 차세대 AI 업그레이드 슈퍼사이클은 독점적이며 GPU보다 큽니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1787563834,
          "sourceUrl": "https://finnhub.io/api/news?id=2b119cb948dbc9e29f9e032f928f4b695c25d81281e877ecbe16b7d4de27e69d",
          "verificationStatus": "needs_confirmation",
          "reason": "사업·실적 연결 경로 확인 필요",
          "direction": "negative",
          "impact": -4.0
        },
        {
          "headline": "경쟁사 분석: 소프트웨어 업계의 Microsoft 및 경쟁사 평가",
          "eventLabel": "경쟁사 기술·시장 진입",
          "publishedAt": 1787551105,
          "sourceUrl": "https://finnhub.io/api/news?id=f869c832dd27f0d5c0fbcfb23a5a59d02fbd8a63da0dd7e3efab8c43394e29b3",
          "verificationStatus": "needs_confirmation",
          "reason": "회사 실적과의 연결고리 확인",
          "direction": "negative",
          "impact": -4.0
        },
        {
          "headline": "Microsoft: 측정된 자본 지출을 충족한 더 높은 수익 가시성",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1787381348,
          "sourceUrl": "https://finnhub.io/api/news?id=9180ed2f1e5947e13ec865da5f72aa4215ea7e1cfa9879a73e7b475c77724453",
          "verificationStatus": "needs_confirmation",
          "reason": "회사 실적과의 연결고리 확인",
          "direction": "negative",
          "impact": -4.0
        },
        {
          "headline": "성능 비교: Microsoft와 소프트웨어 산업의 경쟁업체",
          "eventLabel": "경쟁사 기술·시장 진입",
          "publishedAt": 1787291901,
          "sourceUrl": "https://finnhub.io/api/news?id=03ec54d9efdf243476552f8c91ff6fe9fa68cf758c466dace0d950ed7d1de3b5",
          "verificationStatus": "needs_confirmation",
          "reason": "회사 실적과의 연결고리 확인",
          "direction": "negative",
          "impact": -4.0
        },
        {
          "headline": "비교 연구: 소프트웨어 산업의 Microsoft와 업계 경쟁업체",
          "eventLabel": "경쟁사 기술·시장 진입",
          "publishedAt": 1787119120,
          "sourceUrl": "https://finnhub.io/api/news?id=5472286926ad547dca238fda7db1a25ef36e61957bbc612fe5d811b128c36e6d",
          "verificationStatus": "needs_confirmation",
          "reason": "회사 실적과의 연결고리 확인",
          "direction": "negative",
          "impact": -4.0
        }
      ],
      "topPositive": [
        "회사 실적과의 연결고리 확인",
        "사업·실적 연결 경로 확인 필요"
      ],
      "topNegative": [
        "회사 실적과의 연결고리 확인",
        "사업·실적 연결 경로 확인 필요",
        "회사 실적과의 연결고리 확인"
      ],
      "nextChecks": [
        "다음 실적의 매출·EPS·마진",
        "공식 가이던스 대비 실제 매출 달성 여부",
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
          "status": "weakening",
          "score": -10.6,
          "confidence": 100,
          "falsificationRules": [
            "핵심 고객 이탈 또는 점유율 하락이 공식 수치로 확인",
            "부채 부담 상승과 사업 리스크 확대가 동시 발생"
          ]
        }
      ],
      "scenarios": {
        "bull": 21.2,
        "base": 36.7,
        "bear": 42.1
      },
      "alerts": [],
      "businessProfile": {
        "updatedAt": "2026-08-13",
        "customers": [
          "기업 고객 전반(Azure 클라우드) - 포춘500 대부분 포함, 클라우드 매출이 연 $2,000억 규모 연환산 페이스",
          "오피스365/M365 구독 - 전세계 기업·개인 사용자, 소비자용은 +24% 성장 중",
          "링크드인 사용자(구인+광고) - 매출 $198억으로 윈도우 사업을 이미 추월",
          "게임 사용자(엑스박스, 액티비전블리자드 인수 이후 콘텐츠 확장)"
        ],
        "strengths": [
          "생산성·클라우드·PC 3대 사업 균형 - 인텔리전트클라우드 매출 $393억(+32%), 그 중 Azure는 +43%로 더 빠르게 성장",
          "AI(Copilot) 사업이 연환산 매출 $370억 돌파(전년비 +123%)로 빠르게 확대 중",
          "링크드인이 윈도우를 추월할 만큼 신사업 다각화에 성공 - 특정 사업 하나에 대한 의존도가 낮음"
        ],
        "risks": [
          "⚠️ FTC가 클라우드·AI·소프트웨어 번들링(Entra ID, Copilot 등)까지 조사 범위를 넓힌 대형 반독점 조사가 진행 중(2026-02 경쟁사 6곳에 조사 요청서 발송) - 미국·영국·EU에서 동시 진행",
          "AI 투자 대비 회수(ROI)에 대한 시장 의구심 - 연 $50B 이상 GPU 투자와 실제 고객 ROI 사이 격차가 우려 요인으로 지목됨",
          "Copilot 유료전환율이 기대만큼 높지 않고, 엑스박스 하드웨어 매출은 감소 중(위 newsLog의 감원·스튜디오 분사와 같은 맥락)"
        ],
        "sources": [
          {
            "title": "Which Microsoft businesses are growing and shrinking, according to obscure table in regulatory filing (GeekWire)",
            "url": "https://www.geekwire.com/2026/which-microsoft-businesses-are-growing-and-shrinking-according-to-obscure-table-in-regulatory-filing/"
          },
          {
            "title": "Microsoft facing its biggest US FTC antitrust investigation yet (TechRadar)",
            "url": "https://www.techradar.com/pro/microsoft-facing-its-biggest-us-ftc-antitrust-investigation-yet"
          },
          {
            "title": "Microsoft Antitrust Probe Widens: 6 Rivals Queried (Tech Insider)",
            "url": "https://tech-insider.org/microsoft-antitrust-probe-cloud-ai-2026/"
          }
        ],
        "latestChanges": [
          {
            "headline": "Microsoft, 장기 HUMAIN 거래를 통해 중동 AI 입지 확장",
            "eventLabel": "장기 공급계약",
            "publishedAt": 1787731686,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=ccd74fc2c117b4b6acc7a504cc535ecf7cdc01bec7f5626690ced1879d7d8419",
            "reason": "회사 실적과의 연결고리 확인"
          },
          {
            "headline": "Amazon 및 Microsoft에서 AI 투자가 성과를 내기 시작하면 SanDisk가 혜택을 볼 수 있습니다.",
            "eventLabel": "AI·데이터센터 투자 변화",
            "publishedAt": 1787645530,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=4149fc64b4cd21b278e0a067b703e12566c3056dad0e555e5cc45b39bb8f51a4",
            "reason": "사업·실적 연결 경로 확인 필요"
          },
          {
            "headline": "경쟁사와 비교하여 소프트웨어 산업에서 Microsoft의 위치 이해",
            "eventLabel": "경쟁사 기술·시장 진입",
            "publishedAt": 1787637509,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=15b2920fc24b9ff12d0e708c84e07adade1edc4a4b664332aed632bf6b491b38",
            "reason": "회사 실적과의 연결고리 확인"
          },
          {
            "headline": "엔비디아: 차세대 AI 업그레이드 슈퍼사이클은 독점적이며 GPU보다 큽니다.",
            "eventLabel": "규제·소송·수출 제한",
            "publishedAt": 1787563834,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=2b119cb948dbc9e29f9e032f928f4b695c25d81281e877ecbe16b7d4de27e69d",
            "reason": "사업·실적 연결 경로 확인 필요"
          },
          {
            "headline": "경쟁사 분석: 소프트웨어 업계의 Microsoft 및 경쟁사 평가",
            "eventLabel": "경쟁사 기술·시장 진입",
            "publishedAt": 1787551105,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=f869c832dd27f0d5c0fbcfb23a5a59d02fbd8a63da0dd7e3efab8c43394e29b3",
            "reason": "회사 실적과의 연결고리 확인"
          },
          {
            "headline": "Microsoft: 측정된 자본 지출을 충족한 더 높은 수익 가시성",
            "eventLabel": "규제·소송·수출 제한",
            "publishedAt": 1787381348,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=9180ed2f1e5947e13ec865da5f72aa4215ea7e1cfa9879a73e7b475c77724453",
            "reason": "회사 실적과의 연결고리 확인"
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
      "guidanceTrackRecord": {
        "status": "collecting",
        "settledCount": 0,
        "metCount": 0,
        "hitRate": null,
        "confidenceAdjustment": 0.0,
        "worseningTwo": false,
        "recentOutcomes": [],
        "notice": "SEC Company Facts의 분기 매출만 회사 공식 가이던스와 대조합니다. 2개 결과 전에는 신뢰도에 반영하지 않습니다."
      },
      "valuationScenario": {
        "status": "available",
        "price": 496.37,
        "currentEps": 19.75306,
        "nextEps": 23.57328,
        "epsGrowth": 0.1934,
        "marketPe": 25.13,
        "conservative": 379.12,
        "base": 592.37,
        "optimistic": 918.17,
        "currentVsBase": -0.1621,
        "analystTargetMean": 569.4537,
        "analystTargetLow": 400.0,
        "analystTargetHigh": 870.0,
        "evidenceWeights": {
          "bull": 21.2,
          "base": 36.7,
          "bear": 42.1
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
          "asOf": 1787322925.8647835,
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
          "currentPrice": 481.1499938964844,
          "valuationGap": -0.1639,
          "theses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787407899.9208522,
          "date": "2026-08-22",
          "fundamentalScore": 8.2,
          "confidence": 100,
          "fundamentalDamage": 43.4,
          "thesisDamage": 98.0,
          "thesisStatus": "damaged",
          "scenarioWeights": {
            "bull": 21.8,
            "base": 36.6,
            "bear": 41.6
          },
          "currentPrice": 483.239990234375,
          "valuationGap": -0.1639,
          "theses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787496888.8915975,
          "date": "2026-08-23",
          "fundamentalScore": 6.9,
          "confidence": 100,
          "fundamentalDamage": 62.2,
          "thesisDamage": 100,
          "thesisStatus": "damaged",
          "scenarioWeights": {
            "bull": 21.4,
            "base": 36.6,
            "bear": 42.0
          },
          "currentPrice": 483.239990234375,
          "valuationGap": -0.1631,
          "theses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787582269.4850764,
          "date": "2026-08-24",
          "fundamentalScore": 6.5,
          "confidence": 100,
          "fundamentalDamage": 69.2,
          "thesisDamage": 100,
          "thesisStatus": "damaged",
          "scenarioWeights": {
            "bull": 21.3,
            "base": 36.6,
            "bear": 42.1
          },
          "currentPrice": 483.239990234375,
          "valuationGap": -0.1631,
          "theses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787667920.4111497,
          "date": "2026-08-25",
          "fundamentalScore": 3.7,
          "confidence": 100,
          "fundamentalDamage": 100,
          "thesisDamage": 100,
          "thesisStatus": "damaged",
          "scenarioWeights": {
            "bull": 20.7,
            "base": 36.9,
            "bear": 42.4
          },
          "currentPrice": 487.30999755859375,
          "valuationGap": -0.1621,
          "theses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "weakening"
          }
        },
        {
          "asOf": 1787754142.7259922,
          "date": "2026-08-26",
          "fundamentalScore": 2.6,
          "confidence": 100,
          "fundamentalDamage": 100,
          "thesisDamage": 100,
          "thesisStatus": "damaged",
          "scenarioWeights": {
            "bull": 20.5,
            "base": 37.0,
            "bear": 42.5
          },
          "currentPrice": 491.7099914550781,
          "valuationGap": -0.1621,
          "theses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "weakening"
          }
        },
        {
          "asOf": 1787788668.347003,
          "date": "2026-08-27",
          "fundamentalScore": 6.2,
          "confidence": 100,
          "fundamentalDamage": 67.2,
          "thesisDamage": 100,
          "thesisStatus": "damaged",
          "scenarioWeights": {
            "bull": 21.2,
            "base": 36.7,
            "bear": 42.1
          },
          "currentPrice": 496.3699951171875,
          "valuationGap": -0.1621,
          "theses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "weakening"
          }
        }
      ],
      "thesisHistory": [
        {
          "asOf": 1787322925.8647835,
          "date": "2026-08-21",
          "overallStatus": "damaged",
          "statuses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787407899.9208522,
          "date": "2026-08-22",
          "overallStatus": "damaged",
          "statuses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787496888.8915975,
          "date": "2026-08-23",
          "overallStatus": "damaged",
          "statuses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787582269.4850764,
          "date": "2026-08-24",
          "overallStatus": "damaged",
          "statuses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787667920.4111497,
          "date": "2026-08-25",
          "overallStatus": "damaged",
          "statuses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "weakening"
          }
        },
        {
          "asOf": 1787754142.7259922,
          "date": "2026-08-26",
          "overallStatus": "damaged",
          "statuses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "weakening"
          }
        },
        {
          "asOf": 1787788668.347003,
          "date": "2026-08-27",
          "overallStatus": "damaged",
          "statuses": {
            "growth": "intact",
            "cashFlow": "intact",
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
    "GOOGL": {
      "ticker": "GOOGL",
      "asOf": 1787788668.347003,
      "modelVersion": "fundamental-v1.3",
      "fundamentalScore": 12.4,
      "confidence": 100,
      "fundamentalSigma": null,
      "fundamentalSigmaProgress": {
        "status": "collecting",
        "collected": 7,
        "required": 8,
        "remaining": 1,
        "expectedReadyDate": "2026-08-28",
        "notice": "같은 KST 날짜의 반복 실행은 한 건으로 교체하며, 임의 과거 점수를 만들어 채우지 않습니다."
      },
      "priceSigma": -0.78,
      "priceDamage": 26.1,
      "fundamentalDamage": 0,
      "thesisDamage": 91.0,
      "thesisStatus": "damaged",
      "damageRead": "현재 가격 변동과 펀더멘털 변화 사이에 큰 괴리는 확인되지 않았습니다.",
      "dimensions": {
        "growth": {
          "score": 12.090000666666667,
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
          "score": 3.770299999999999,
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
          "headline": "Marvell: Google은 AI 논문을 강화하지만 2분기는 프리미엄을 정당화해야 합니다",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1787598125,
          "sourceUrl": "https://finnhub.io/api/news?id=d367226c7afd0def73450d4508a39879b195389ed00dee3bb31ce07eeba5fa78",
          "verificationStatus": "needs_confirmation",
          "reason": "회사 실적과의 연결고리 확인",
          "direction": "negative",
          "impact": -5.0
        },
        {
          "headline": "Google Cloud는 Verizon과 협력하여 Verizon 운영에 전체 지분 AI를 배포합니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1787562291,
          "sourceUrl": "https://finnhub.io/api/news?id=936fd0342e2fccaf85f8413669dd855cd0f2e5c0e83a27a7b4ba1f8274a10eb2",
          "verificationStatus": "needs_confirmation",
          "reason": "회사 실적과의 연결고리 확인",
          "direction": "positive",
          "impact": 4.0
        },
        {
          "headline": "Marvell 투자자는 최신 Google 거래를 신중하게 고려해야합니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1787429580,
          "sourceUrl": "https://finnhub.io/api/news?id=15f1670bbdc24b40cb41c83b37f90403c53024b5a1c3128e6de13a2ef973beb5",
          "verificationStatus": "needs_confirmation",
          "reason": "사업·실적 연결 경로 확인 필요",
          "direction": "positive",
          "impact": 4.0
        },
        {
          "headline": "알파벳은 Marvell의 7% 를 소유할 수 있습니다. 하지만 이를 얻기 위해 Google이 해야 할 일은 다음과 같습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1787417327,
          "sourceUrl": "https://finnhub.io/api/news?id=b3823748f09349ce02b5ea4ecf5c32ee421449de52fa4e7800bb5233d0896f24",
          "verificationStatus": "needs_confirmation",
          "reason": "사업·실적 연결 경로 확인 필요",
          "direction": "negative",
          "impact": -5.0
        },
        {
          "headline": "Meta는 법정에 상륙한 최신 기술 거인입니다. 이본느 곤잘레스 로저스 판사를 만나보세요",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1787385601,
          "sourceUrl": "https://finnhub.io/api/news?id=0c3e4671d412eba59683f5b4fd378521ca4434e4b991bed8d8da4491d9fa3690",
          "verificationStatus": "needs_confirmation",
          "reason": "사업·실적 연결 경로 확인 필요",
          "direction": "negative",
          "impact": -4.0
        },
        {
          "headline": "Google은 Marvell의 칩 구매에 대해 Marvell 주식 영장으로 돈을 받고 있습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1787374021,
          "sourceUrl": "https://finnhub.io/api/news?id=6caf38ab8ba9a2f6e73801672417a6805cfa580a5d37e9b2fab25f94c2f75c24",
          "verificationStatus": "needs_confirmation",
          "reason": "TPU 공급업체 다변화와 특정 공급사 의존도 완화 가능성",
          "direction": "negative",
          "impact": -5.0
        },
        {
          "headline": "Marvell의 전망은 계속 좋아지고 있지만 위험 보상은 그렇지 않습니다(등급 하향)",
          "eventLabel": "실적 전망 변경",
          "publishedAt": 1787361786,
          "sourceUrl": "https://finnhub.io/api/news?id=3a13ec5d8b96e4090b06fef861716004198b53e96b80957597f7cbc14620f360",
          "verificationStatus": "needs_confirmation",
          "reason": "사업·실적 연결 경로 확인 필요",
          "direction": "negative",
          "impact": -4.0
        },
        {
          "headline": "Broadcom(AVGO)은 Google이 Marvell과 AI 칩 관계를 확장한 후 6.2% 하락했습니다. - 변경된 사항",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787353957,
          "sourceUrl": "https://finnhub.io/api/news?id=385f87dc5a3077a001a300dcab06754fae86880aa05bd125bcc9fb850f436b75",
          "verificationStatus": "needs_confirmation",
          "reason": "TPU 공급업체 다변화와 특정 공급사 의존도 완화 가능성",
          "direction": "positive",
          "impact": 2.0
        }
      ],
      "topPositive": [
        "회사 실적과의 연결고리 확인",
        "사업·실적 연결 경로 확인 필요",
        "TPU 공급업체 다변화와 특정 공급사 의존도 완화 가능성"
      ],
      "topNegative": [
        "회사 실적과의 연결고리 확인",
        "사업·실적 연결 경로 확인 필요",
        "사업·실적 연결 경로 확인 필요"
      ],
      "nextChecks": [
        "다음 실적의 매출·EPS·마진",
        "공식 가이던스 대비 실제 매출 달성 여부",
        "핵심 고객 수요·CAPEX",
        "FCF와 부채·CAPEX 변화"
      ],
      "theses": [
        {
          "id": "growth",
          "name": "성장 Thesis",
          "statement": "매출·EPS 성장 전망이 유지되고 본업 수익성이 함께 개선된다.",
          "status": "intact",
          "score": 12.1,
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
          "score": 9.4,
          "confidence": 100,
          "falsificationRules": [
            "핵심 고객 이탈 또는 점유율 하락이 공식 수치로 확인",
            "부채 부담 상승과 사업 리스크 확대가 동시 발생"
          ]
        }
      ],
      "scenarios": {
        "bull": 23.5,
        "base": 36.5,
        "bear": 40.0
      },
      "alerts": [],
      "businessProfile": {
        "updatedAt": "2026-08-13",
        "customers": [
          "광고주 전반(검색+유튜브) - 매출의 절대다수 비중, 여전히 핵심 수익원",
          "기업 고객(구글 클라우드) - 백로그가 2026년 1분기에 전분기 대비 거의 2배로 늘어 $460B에 육박, AI 인프라 수요가 배경",
          "구독자 약 3.5억명(유튜브 프리미엄·뮤직·구글원 등, 2026년 1분기 기준)"
        ],
        "strengths": [
          "검색이 AI 기능(AI Overviews 등) 힘입어 여전히 성장 중(2026년 1분기 +19%) - 'AI가 검색을 대체한다'는 우려와 달리 아직은 성장 동력",
          "구글클라우드 매출 성장이 오히려 가속(1분기 +63% → 2분기 +82%, 2분기 매출 $247.7억) - AI 인프라 수요 직접 수혜",
          "유튜브 광고 매출 견조(2분기 $110.6억)로 검색 의존도를 낮추는 다각화 진행 중"
        ],
        "risks": [
          "⚠️ 차세대 플래그십 AI모델 '제미나이 3.5 프로' 출시가 CEO의 공개 약속을 어기며 수개월째 지연 중 - 앤트로픽·오픈AI 대비 AI 모델 경쟁력 우려(상세 내용은 아래 newsLog 참고)",
          "광고 매출 의존도가 여전히 높음 - AI 검색으로 사용자가 링크 클릭 없이 AI 답변만 보고 끝내는 행동이 늘면 기존 광고 수익모델 자체가 구조적으로 위협받을 수 있다는 업계 우려가 있음(아직 매출 숫자로는 확인 안 됨 - 위 강점의 +19% 성장과 상충되는 우려라는 점에 유의)"
        ],
        "sources": [
          {
            "title": "Google Revenue Breakdown by Segment: $307B (2026) (FourWeekMBA)",
            "url": "https://fourweekmba.com/google-revenue-breakdown/"
          },
          {
            "title": "Alphabet reports Q2 2026 revenue of $119.8 billion (9to5Google)",
            "url": "https://9to5google.com/2026/07/22/alphabet-q2-2026-earnings/"
          },
          {
            "title": "YouTube Ad Sales Increase 13% in Q2 2026: Alphabet Earnings Results (Variety)",
            "url": "https://variety.com/2026/digital/news/youtube-q2-2026-ad-sales-alphabet-google-earnings-results-1236818132/"
          }
        ],
        "latestChanges": [
          {
            "headline": "Marvell: Google은 AI 논문을 강화하지만 2분기는 프리미엄을 정당화해야 합니다",
            "eventLabel": "워런트·신주·희석 가능성",
            "publishedAt": 1787598125,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=d367226c7afd0def73450d4508a39879b195389ed00dee3bb31ce07eeba5fa78",
            "reason": "회사 실적과의 연결고리 확인"
          },
          {
            "headline": "Google Cloud는 Verizon과 협력하여 Verizon 운영에 전체 지분 AI를 배포합니다.",
            "eventLabel": "주요 고객 계약",
            "publishedAt": 1787562291,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=936fd0342e2fccaf85f8413669dd855cd0f2e5c0e83a27a7b4ba1f8274a10eb2",
            "reason": "회사 실적과의 연결고리 확인"
          },
          {
            "headline": "Marvell 투자자는 최신 Google 거래를 신중하게 고려해야합니다.",
            "eventLabel": "주요 고객 계약",
            "publishedAt": 1787429580,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=15f1670bbdc24b40cb41c83b37f90403c53024b5a1c3128e6de13a2ef973beb5",
            "reason": "사업·실적 연결 경로 확인 필요"
          },
          {
            "headline": "알파벳은 Marvell의 7% 를 소유할 수 있습니다. 하지만 이를 얻기 위해 Google이 해야 할 일은 다음과 같습니다.",
            "eventLabel": "워런트·신주·희석 가능성",
            "publishedAt": 1787417327,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=b3823748f09349ce02b5ea4ecf5c32ee421449de52fa4e7800bb5233d0896f24",
            "reason": "사업·실적 연결 경로 확인 필요"
          },
          {
            "headline": "Meta는 법정에 상륙한 최신 기술 거인입니다. 이본느 곤잘레스 로저스 판사를 만나보세요",
            "eventLabel": "규제·소송·수출 제한",
            "publishedAt": 1787385601,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=0c3e4671d412eba59683f5b4fd378521ca4434e4b991bed8d8da4491d9fa3690",
            "reason": "사업·실적 연결 경로 확인 필요"
          },
          {
            "headline": "Google은 Marvell의 칩 구매에 대해 Marvell 주식 영장으로 돈을 받고 있습니다.",
            "eventLabel": "워런트·신주·희석 가능성",
            "publishedAt": 1787374021,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=6caf38ab8ba9a2f6e73801672417a6805cfa580a5d37e9b2fab25f94c2f75c24",
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
      "guidanceTrackRecord": {
        "status": "collecting",
        "settledCount": 0,
        "metCount": 0,
        "hitRate": null,
        "confidenceAdjustment": 0.0,
        "worseningTwo": false,
        "recentOutcomes": [],
        "notice": "SEC Company Facts의 분기 매출만 회사 공식 가이던스와 대조합니다. 2개 결과 전에는 신뢰도에 반영하지 않습니다."
      },
      "valuationScenario": {
        "status": "available",
        "price": 342.0,
        "currentEps": 20.60434,
        "nextEps": 14.83729,
        "epsGrowth": -0.2799,
        "marketPe": 16.6,
        "conservative": 157.62,
        "base": 246.28,
        "optimistic": 381.73,
        "currentVsBase": 0.3887,
        "analystTargetMean": 428.06668,
        "analystTargetLow": 340.0,
        "analystTargetHigh": 515.0,
        "evidenceWeights": {
          "bull": 23.5,
          "base": 36.5,
          "bear": 40.0
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
          "asOf": 1787322925.8647835,
          "date": "2026-08-21",
          "fundamentalScore": 15.8,
          "confidence": 100,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "strengthening",
          "scenarioWeights": {
            "bull": 34.8,
            "base": 38.9,
            "bear": 26.3
          },
          "currentPrice": 340.6700134277344,
          "valuationGap": 0.3892,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787407899.9208522,
          "date": "2026-08-22",
          "fundamentalScore": 12.8,
          "confidence": 100,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "strengthening",
          "scenarioWeights": {
            "bull": 34.1,
            "base": 39.1,
            "bear": 26.8
          },
          "currentPrice": 344.82000732421875,
          "valuationGap": 0.3892,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787496888.8915975,
          "date": "2026-08-23",
          "fundamentalScore": 11.5,
          "confidence": 100,
          "fundamentalDamage": 0,
          "thesisDamage": 91.0,
          "thesisStatus": "damaged",
          "scenarioWeights": {
            "bull": 23.3,
            "base": 36.6,
            "bear": 40.1
          },
          "currentPrice": 344.82000732421875,
          "valuationGap": 0.3887,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787582269.4850764,
          "date": "2026-08-24",
          "fundamentalScore": 12.7,
          "confidence": 100,
          "fundamentalDamage": 0,
          "thesisDamage": 28.0,
          "thesisStatus": "strengthening",
          "scenarioWeights": {
            "bull": 30.9,
            "base": 38.3,
            "bear": 30.8
          },
          "currentPrice": 344.82000732421875,
          "valuationGap": 0.3887,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787667920.4111497,
          "date": "2026-08-25",
          "fundamentalScore": 12.4,
          "confidence": 100,
          "fundamentalDamage": 0,
          "thesisDamage": 91.0,
          "thesisStatus": "damaged",
          "scenarioWeights": {
            "bull": 23.5,
            "base": 36.5,
            "bear": 40.0
          },
          "currentPrice": 348.05999755859375,
          "valuationGap": 0.3887,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787754142.7259922,
          "date": "2026-08-26",
          "fundamentalScore": 12.4,
          "confidence": 100,
          "fundamentalDamage": 0,
          "thesisDamage": 91.0,
          "thesisStatus": "damaged",
          "scenarioWeights": {
            "bull": 23.5,
            "base": 36.5,
            "bear": 40.0
          },
          "currentPrice": 346.9599914550781,
          "valuationGap": 0.3887,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787788668.347003,
          "date": "2026-08-27",
          "fundamentalScore": 12.4,
          "confidence": 100,
          "fundamentalDamage": 0,
          "thesisDamage": 91.0,
          "thesisStatus": "damaged",
          "scenarioWeights": {
            "bull": 23.5,
            "base": 36.5,
            "bear": 40.0
          },
          "currentPrice": 342.0,
          "valuationGap": 0.3887,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        }
      ],
      "thesisHistory": [
        {
          "asOf": 1787322925.8647835,
          "date": "2026-08-21",
          "overallStatus": "strengthening",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787407899.9208522,
          "date": "2026-08-22",
          "overallStatus": "strengthening",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787496888.8915975,
          "date": "2026-08-23",
          "overallStatus": "damaged",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787582269.4850764,
          "date": "2026-08-24",
          "overallStatus": "strengthening",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787667920.4111497,
          "date": "2026-08-25",
          "overallStatus": "damaged",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787754142.7259922,
          "date": "2026-08-26",
          "overallStatus": "damaged",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787788668.347003,
          "date": "2026-08-27",
          "overallStatus": "damaged",
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
      "asOf": 1787788668.347003,
      "modelVersion": "fundamental-v1.3",
      "fundamentalScore": -0.7,
      "confidence": 100,
      "fundamentalSigma": null,
      "fundamentalSigmaProgress": {
        "status": "collecting",
        "collected": 7,
        "required": 8,
        "remaining": 1,
        "expectedReadyDate": "2026-08-28",
        "notice": "같은 KST 날짜의 반복 실행은 한 건으로 교체하며, 임의 과거 점수를 만들어 채우지 않습니다."
      },
      "priceSigma": -0.58,
      "priceDamage": 19.4,
      "fundamentalDamage": 0,
      "thesisDamage": 0,
      "thesisStatus": "intact",
      "damageRead": "현재 가격 변동과 펀더멘털 변화 사이에 큰 괴리는 확인되지 않았습니다.",
      "dimensions": {
        "growth": {
          "score": 9.883333333333333,
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
          "score": -29.400000000000002,
          "applicable": true
        },
        "customerDemand": {
          "score": 0.0,
          "applicable": true
        },
        "balanceSheet": {
          "score": 17.4656,
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
        "needsConfirmation": 7,
        "aiInferences": 7
      },
      "evidence": [
        {
          "headline": "Amazon 및 Microsoft에서 AI 투자가 성과를 내기 시작하면 SanDisk가 혜택을 볼 수 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787645530,
          "sourceUrl": "https://finnhub.io/api/news?id=4149fc64b4cd21b278e0a067b703e12566c3056dad0e555e5cc45b39bb8f51a4",
          "verificationStatus": "needs_confirmation",
          "reason": "사업·실적 연결 경로 확인 필요",
          "direction": "positive",
          "impact": 2.0
        },
        {
          "headline": "심층 분석: Amazon.com과 브로드라인 소매 업계의 경쟁업체 비교",
          "eventLabel": "경쟁사 기술·시장 진입",
          "publishedAt": 1787637530,
          "sourceUrl": "https://finnhub.io/api/news?id=5cfb51c4985eac3cf6e798fff9e1688a4f85d0595a79270950753b584bc51759",
          "verificationStatus": "needs_confirmation",
          "reason": "회사 실적과의 연결고리 확인",
          "direction": "negative",
          "impact": -4.0
        },
        {
          "headline": "성능 비교: Amazon.com 및 브로드라인 소매 산업의 경쟁업체",
          "eventLabel": "경쟁사 기술·시장 진입",
          "publishedAt": 1787551121,
          "sourceUrl": "https://finnhub.io/api/news?id=d357a2a3539cd8d0082afd938e9ff6ce31031362abbfb31f3240233d6f6e6f83",
          "verificationStatus": "needs_confirmation",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "direction": "negative",
          "impact": -4.0
        },
        {
          "headline": "아마존의 잉여현금흐름 (Free Cash Flow) 은 영업현금흐름 (Operating Cash Flow) 이 33% 상승하더라도 마이너스 76억 $ 를 기록했다. Gap AI Capex가 실제로 만들고 있습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1787499300,
          "sourceUrl": "https://finnhub.io/api/news?id=a9905b210869231b722441eba4e31cff86108bf3179b3579bcc7fa5dfcd60758",
          "verificationStatus": "needs_confirmation",
          "reason": "클라우드 CAPEX 경쟁과 가격·마진 압력 비교 필요",
          "direction": "positive",
          "impact": 4.0
        },
        {
          "headline": "아마존이 최고 성장 주식이라면 S&P 500이 20.4배로 거래되는 동안 왜 단지 21.3배의 순이익으로 거래됩니까? 이것이 내가 생각할 수 있는 유일한 해답입니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1787488500,
          "sourceUrl": "https://finnhub.io/api/news?id=9dcc2287ef66a958ed72e89b6c823acb682681976b1000979d8ef38026bd6060",
          "verificationStatus": "needs_confirmation",
          "reason": "회사 실적과의 연결고리 확인",
          "direction": "positive",
          "impact": 4.0
        },
        {
          "headline": "억만장자 데이비드 테퍼는 아마존 주식에서 75억 $ Appaloosa 포트폴리오의 16% 를 보유하고 있습니다. 여전히 구매인가요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787484120,
          "sourceUrl": "https://finnhub.io/api/news?id=d1a2fe8374bda66402021b3d6c7cac518a1fd05ef6031ff44d3525ca525fe7b7",
          "verificationStatus": "needs_confirmation",
          "reason": "사업·실적 연결 경로 확인 필요",
          "direction": "positive",
          "impact": 2.0
        },
        {
          "headline": "광범위한 소매 산업의 경쟁사와 비교하여 Amazon.com의 성과 평가",
          "eventLabel": "경쟁사 기술·시장 진입",
          "publishedAt": 1787291906,
          "sourceUrl": "https://finnhub.io/api/news?id=9d79cdecc5fa42b3b1a0d63f1cf5967e0ae1cc258a0ddba105e8ece418391dc0",
          "verificationStatus": "needs_confirmation",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "direction": "negative",
          "impact": -4.0
        }
      ],
      "topPositive": [
        "사업·실적 연결 경로 확인 필요",
        "클라우드 CAPEX 경쟁과 가격·마진 압력 비교 필요",
        "회사 실적과의 연결고리 확인"
      ],
      "topNegative": [
        "회사 실적과의 연결고리 확인",
        "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
        "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
      ],
      "nextChecks": [
        "다음 실적의 매출·EPS·마진",
        "공식 가이던스 대비 실제 매출 달성 여부",
        "핵심 고객 수요·CAPEX",
        "FCF와 부채·CAPEX 변화"
      ],
      "theses": [
        {
          "id": "growth",
          "name": "성장 Thesis",
          "statement": "매출·EPS 성장 전망이 유지되고 본업 수익성이 함께 개선된다.",
          "status": "intact",
          "score": 9.9,
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
          "status": "weakening",
          "score": -18.3,
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
          "score": -4.0,
          "confidence": 100,
          "falsificationRules": [
            "핵심 고객 이탈 또는 점유율 하락이 공식 수치로 확인",
            "부채 부담 상승과 사업 리스크 확대가 동시 발생"
          ]
        }
      ],
      "scenarios": {
        "bull": 31.3,
        "base": 40.0,
        "bear": 28.7
      },
      "alerts": [],
      "businessProfile": {
        "updatedAt": "2026-08-13",
        "customers": [
          "전세계 소비자(온라인 리테일) - 매출 비중 약 74%로 여전히 핵심",
          "기업 고객(AWS 클라우드) - 매출 비중 약 17%, AI 워크로드 수요로 연 $1,470억까지 성장(+28%)",
          "광고주(아마존 광고) - 매출 비중 약 9%, 2분기 $198억(+26%)로 2026년 연 $800억 돌파 전망"
        ],
        "strengths": [
          "AWS AI 매출 연환산 $250억 돌파, 세자릿수(100%대) 성장률 지속 - 클라우드 내 AI 비중이 빠르게 확대",
          "광고 사업이 고마진 사업으로 빠르게 성장하며 전체 수익성 개선에 기여",
          "북미 리테일이 AI 기반 재고관리·추천 시스템으로 매출 $3,850억까지 확대, 국제 부문도 $1,420억로 회복세"
        ],
        "risks": [
          "⚠️ 2026년 10월 FTC 독점 재판이 예정돼 있음 - 패소 시 3자 판매자(마켓플레이스) 생태계 강제 분리 등 사업구조 재편 리스크",
          "EU 디지털시장법(DMA)으로 이미 Buy Box 노출 방식·데이터 공유 방식이 강제 변경됨(2026-03) - 미준수 시 대규모 벌금 위험 지속",
          "2026년 설비투자 $2,000억(AI 데이터센터 + 위성인터넷 '프로젝트 리오') - 이 정도 규모의 투자는 2027~2028년까지 ROI가 안 나올 경우 마진 압박으로 이어질 수 있음(같은 맥락의 감원 소식은 위 newsLog 참고)"
        ],
        "sources": [
          {
            "title": "How Should Amazon Be Regulated? (GovFacts)",
            "url": "https://govfacts.org/tech-innovation/tech-competition/platform-regulation/debating-how-to-regulate-amazon-antitrust-labor-practices-and-privacy/"
          },
          {
            "title": "Amazon Risk Management: Six Threats That Could Derail Your Business in 2026 (Canopy Management)",
            "url": "https://canopymanagement.com/navigating-amazons-invisible-challenges-a-strategic-analysis/"
          },
          {
            "title": "Amazon Statistics 2026: $574B Revenue, AWS Breakdown & Market Dominance (BusinessStats)",
            "url": "https://businesstats.com/amazon-statistics-facts/"
          }
        ],
        "latestChanges": [
          {
            "headline": "Amazon 및 Microsoft에서 AI 투자가 성과를 내기 시작하면 SanDisk가 혜택을 볼 수 있습니다.",
            "eventLabel": "AI·데이터센터 투자 변화",
            "publishedAt": 1787645530,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=4149fc64b4cd21b278e0a067b703e12566c3056dad0e555e5cc45b39bb8f51a4",
            "reason": "사업·실적 연결 경로 확인 필요"
          },
          {
            "headline": "심층 분석: Amazon.com과 브로드라인 소매 업계의 경쟁업체 비교",
            "eventLabel": "경쟁사 기술·시장 진입",
            "publishedAt": 1787637530,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=5cfb51c4985eac3cf6e798fff9e1688a4f85d0595a79270950753b584bc51759",
            "reason": "회사 실적과의 연결고리 확인"
          },
          {
            "headline": "성능 비교: Amazon.com 및 브로드라인 소매 산업의 경쟁업체",
            "eventLabel": "경쟁사 기술·시장 진입",
            "publishedAt": 1787551121,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=d357a2a3539cd8d0082afd938e9ff6ce31031362abbfb31f3240233d6f6e6f83",
            "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
          },
          {
            "headline": "아마존의 잉여현금흐름 (Free Cash Flow) 은 영업현금흐름 (Operating Cash Flow) 이 33% 상승하더라도 마이너스 76억 $ 를 기록했다. Gap AI Capex가 실제로 만들고 있습니다.",
            "eventLabel": "장기 공급계약",
            "publishedAt": 1787499300,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=a9905b210869231b722441eba4e31cff86108bf3179b3579bcc7fa5dfcd60758",
            "reason": "클라우드 CAPEX 경쟁과 가격·마진 압력 비교 필요"
          },
          {
            "headline": "아마존이 최고 성장 주식이라면 S&P 500이 20.4배로 거래되는 동안 왜 단지 21.3배의 순이익으로 거래됩니까? 이것이 내가 생각할 수 있는 유일한 해답입니다.",
            "eventLabel": "장기 공급계약",
            "publishedAt": 1787488500,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=9dcc2287ef66a958ed72e89b6c823acb682681976b1000979d8ef38026bd6060",
            "reason": "회사 실적과의 연결고리 확인"
          },
          {
            "headline": "억만장자 데이비드 테퍼는 아마존 주식에서 75억 $ Appaloosa 포트폴리오의 16% 를 보유하고 있습니다. 여전히 구매인가요?",
            "eventLabel": "AI·데이터센터 투자 변화",
            "publishedAt": 1787484120,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=d1a2fe8374bda66402021b3d6c7cac518a1fd05ef6031ff44d3525ca525fe7b7",
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
      "guidanceTrackRecord": {
        "status": "collecting",
        "settledCount": 0,
        "metCount": 0,
        "hitRate": null,
        "confidenceAdjustment": 0.0,
        "worseningTwo": false,
        "recentOutcomes": [],
        "notice": "SEC Company Facts의 분기 매출만 회사 공식 가이던스와 대조합니다. 2개 결과 전에는 신뢰도에 반영하지 않습니다."
      },
      "valuationScenario": {
        "status": "available",
        "price": 260.28,
        "currentEps": 12.4927,
        "nextEps": 10.48206,
        "epsGrowth": -0.1609,
        "marketPe": 20.83,
        "conservative": 139.77,
        "base": 218.39,
        "optimistic": 338.5,
        "currentVsBase": 0.1918,
        "analystTargetMean": 327.004,
        "analystTargetLow": 230.0,
        "analystTargetHigh": 405.0,
        "evidenceWeights": {
          "bull": 31.3,
          "base": 40.0,
          "bear": 28.7
        },
        "integratedRead": "실적 기준가보다 높은데 펀더멘털 근거가 약해, 가격 조정 또는 추정치 상향이 필요합니다.",
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
          "asOf": 1787322925.8647835,
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
          "currentPrice": 260.1099853515625,
          "valuationGap": 0.1861,
          "theses": {
            "growth": "intact",
            "cashFlow": "weakening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787407899.9208522,
          "date": "2026-08-22",
          "fundamentalScore": -0.7,
          "confidence": 95.0,
          "fundamentalDamage": 47.1,
          "thesisDamage": 49.0,
          "thesisStatus": "damaged",
          "scenarioWeights": {
            "bull": 25.6,
            "base": 38.6,
            "bear": 35.8
          },
          "currentPrice": 258.6300048828125,
          "valuationGap": 0.1861,
          "theses": {
            "growth": "intact",
            "cashFlow": "weakening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787496888.8915975,
          "date": "2026-08-23",
          "fundamentalScore": -0.7,
          "confidence": 95.0,
          "fundamentalDamage": 47.1,
          "thesisDamage": 49.0,
          "thesisStatus": "damaged",
          "scenarioWeights": {
            "bull": 25.6,
            "base": 38.6,
            "bear": 35.8
          },
          "currentPrice": 258.6300048828125,
          "valuationGap": 0.1918,
          "theses": {
            "growth": "intact",
            "cashFlow": "weakening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787582269.4850764,
          "date": "2026-08-24",
          "fundamentalScore": 1.2,
          "confidence": 100,
          "fundamentalDamage": 11.2,
          "thesisDamage": 0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 31.7,
            "base": 39.9,
            "bear": 28.4
          },
          "currentPrice": 258.6300048828125,
          "valuationGap": 0.1918,
          "theses": {
            "growth": "intact",
            "cashFlow": "weakening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787667920.4111497,
          "date": "2026-08-25",
          "fundamentalScore": -2.9,
          "confidence": 100,
          "fundamentalDamage": 61.6,
          "thesisDamage": 77.0,
          "thesisStatus": "damaged",
          "scenarioWeights": {
            "bull": 22.2,
            "base": 37.6,
            "bear": 40.2
          },
          "currentPrice": 262.07000732421875,
          "valuationGap": 0.1918,
          "theses": {
            "growth": "intact",
            "cashFlow": "weakening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787754142.7259922,
          "date": "2026-08-26",
          "fundamentalScore": -1.4,
          "confidence": 100,
          "fundamentalDamage": 29.4,
          "thesisDamage": 35.0,
          "thesisStatus": "damaged",
          "scenarioWeights": {
            "bull": 27.2,
            "base": 38.9,
            "bear": 33.9
          },
          "currentPrice": 261.05999755859375,
          "valuationGap": 0.1918,
          "theses": {
            "growth": "intact",
            "cashFlow": "weakening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787788668.347003,
          "date": "2026-08-27",
          "fundamentalScore": -0.7,
          "confidence": 100,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 31.3,
            "base": 40.0,
            "bear": 28.7
          },
          "currentPrice": 260.2799987792969,
          "valuationGap": 0.1918,
          "theses": {
            "growth": "intact",
            "cashFlow": "weakening",
            "resilience": "intact"
          }
        }
      ],
      "thesisHistory": [
        {
          "asOf": 1787322925.8647835,
          "date": "2026-08-21",
          "overallStatus": "weakening",
          "statuses": {
            "growth": "intact",
            "cashFlow": "weakening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787407899.9208522,
          "date": "2026-08-22",
          "overallStatus": "damaged",
          "statuses": {
            "growth": "intact",
            "cashFlow": "weakening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787496888.8915975,
          "date": "2026-08-23",
          "overallStatus": "damaged",
          "statuses": {
            "growth": "intact",
            "cashFlow": "weakening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787582269.4850764,
          "date": "2026-08-24",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "weakening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787667920.4111497,
          "date": "2026-08-25",
          "overallStatus": "damaged",
          "statuses": {
            "growth": "intact",
            "cashFlow": "weakening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787754142.7259922,
          "date": "2026-08-26",
          "overallStatus": "damaged",
          "statuses": {
            "growth": "intact",
            "cashFlow": "weakening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787788668.347003,
          "date": "2026-08-27",
          "overallStatus": "intact",
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
      "asOf": 1787788668.347003,
      "modelVersion": "fundamental-v1.3",
      "fundamentalScore": 6.9,
      "confidence": 100,
      "fundamentalSigma": null,
      "fundamentalSigmaProgress": {
        "status": "collecting",
        "collected": 7,
        "required": 8,
        "remaining": 1,
        "expectedReadyDate": "2026-08-28",
        "notice": "같은 KST 날짜의 반복 실행은 한 건으로 교체하며, 임의 과거 점수를 만들어 채우지 않습니다."
      },
      "priceSigma": 0.15,
      "priceDamage": 5.1,
      "fundamentalDamage": 37.8,
      "thesisDamage": 56.0,
      "thesisStatus": "damaged",
      "damageRead": "펀더멘털 위험 신호가 가격에 충분히 반영되지 않았을 가능성이 있습니다.",
      "dimensions": {
        "growth": {
          "score": 7.616666666666667,
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
          "score": -2.1327,
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
        "needsConfirmation": 7,
        "aiInferences": 7
      },
      "evidence": [
        {
          "headline": "마크 주커버그 (Mark Zuckerberg) 는 이번 주에 메타의 무제한 AI 구축을 방어하는 6,500단어 AI 선언문을 발표했습니다. 투자자가 관심을 가져야 하는 이유는 다음과 같습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787462400,
          "sourceUrl": "https://finnhub.io/api/news?id=e79f44d2940251377f849af19d030c8f19209e97d2d57cfe1b276158b1728d80",
          "verificationStatus": "needs_confirmation",
          "reason": "사업·실적 연결 경로 확인 필요",
          "direction": "positive",
          "impact": 2.0
        },
        {
          "headline": "메타: 우리는 전에도 이런 상황을 본 적이 있습니다(등급 업그레이드)",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1787387443,
          "sourceUrl": "https://finnhub.io/api/news?id=ae7b8de08aa2e1923c854462aad4d7a236ddd84cf640268226a5120b025d2a95",
          "verificationStatus": "needs_confirmation",
          "reason": "회사 실적과의 연결고리 확인",
          "direction": "negative",
          "impact": -4.0
        },
        {
          "headline": "Meta는 법정에 상륙한 최신 기술 거인입니다. 이본느 곤잘레스 로저스 판사를 만나보세요",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1787385601,
          "sourceUrl": "https://finnhub.io/api/news?id=0c3e4671d412eba59683f5b4fd378521ca4434e4b991bed8d8da4491d9fa3690",
          "verificationStatus": "needs_confirmation",
          "reason": "회사 실적과의 연결고리 확인",
          "direction": "negative",
          "impact": -4.0
        },
        {
          "headline": "Broadcom의 최신 부채 거래",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787310979,
          "sourceUrl": "https://finnhub.io/api/news?id=2c04227ae5351fa6a90d147eba0b15cb06cef2dd3553225b4a061c65c3016eeb",
          "verificationStatus": "needs_confirmation",
          "reason": "사업·실적 연결 경로 확인 필요",
          "direction": "positive",
          "impact": 2.0
        },
        {
          "headline": "Meta, Google 및 Snap은 청소년이 주요 재판을 앞두고 소셜 미디어 중독 소송을 제기함에 따라 휴식을 취합니다(업데이트됨)",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1787300740,
          "sourceUrl": "https://finnhub.io/api/news?id=b900c64d3b6d10f749db951b4aa543bb3fc992e0717798efb60a5f171b692dfa",
          "verificationStatus": "needs_confirmation",
          "reason": "사업·실적 연결 경로 확인 필요",
          "direction": "negative",
          "impact": -4.0
        },
        {
          "headline": "더 이상 둠 스크롤이나 인스타그램 스토리가 없나요? 메타 시험에서 패배하면 우리가 알고 있는 소셜 미디어가 종료될 수 있습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1787295601,
          "sourceUrl": "https://finnhub.io/api/news?id=1e5a0aa94129cb28a903a31cddf27ec507b838c34d1913e6987fa3f4ad78221a",
          "verificationStatus": "needs_confirmation",
          "reason": "회사 실적과의 연결고리 확인",
          "direction": "negative",
          "impact": -4.0
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
        }
      ],
      "topPositive": [
        "사업·실적 연결 경로 확인 필요",
        "사업·실적 연결 경로 확인 필요",
        "사업·실적 연결 경로 확인 필요"
      ],
      "topNegative": [
        "회사 실적과의 연결고리 확인",
        "회사 실적과의 연결고리 확인",
        "사업·실적 연결 경로 확인 필요"
      ],
      "nextChecks": [
        "다음 실적의 매출·EPS·마진",
        "공식 가이던스 대비 실제 매출 달성 여부",
        "핵심 고객 수요·CAPEX",
        "FCF와 부채·CAPEX 변화"
      ],
      "theses": [
        {
          "id": "growth",
          "name": "성장 Thesis",
          "statement": "매출·EPS 성장 전망이 유지되고 본업 수익성이 함께 개선된다.",
          "status": "intact",
          "score": 7.6,
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
          "score": -0.7,
          "confidence": 100,
          "falsificationRules": [
            "핵심 고객 이탈 또는 점유율 하락이 공식 수치로 확인",
            "부채 부담 상승과 사업 리스크 확대가 동시 발생"
          ]
        }
      ],
      "scenarios": {
        "bull": 26.4,
        "base": 37.9,
        "bear": 35.7
      },
      "alerts": [],
      "businessProfile": {
        "updatedAt": "2026-08-20",
        "customers": [
          "광고주 전반(Family of Apps: 페이스북·인스타그램·왓츠앱·메신저) - 매출 절대다수 비중",
          "리얼리티랩(Reality Labs) 소비자 - 퀘스트 VR 헤드셋, AI 글래스"
        ],
        "strengths": [
          "광고 매출 견조 성장(2026년 2분기 +27%, $593.6억) - 광고 노출수 +14%·평균단가 +12% 둘 다 오르는 건강한 성장",
          "AI 글래스 매출이 리얼리티랩 성장을 이끔(2분기 +16%) - 퀘스트 헤드셋 판매 둔화를 일부 상쇄"
        ],
        "risks": [
          "⚠️ 리얼리티랩(VR/AI 하드웨어) 손실이 계속 확대 중(2분기 영업손실 $46.2억) - AI·VR 투자가 아직 수익으로 안 이어지는 구조",
          "2026년 AI 설비투자 가이던스가 $1,250~1,450억으로 막대함(엔비디아·AMD 등과 파트너십으로 데이터센터·커스텀칩 투자) - 투자 회수 시점이 불확실",
          "EU 규제 압박 심화 - 디지털시장법(DMA) 준수, AI법 '시스템 리스크' 조사, 반독점 잠정조치까지 받은 상태(2026년 기준 진행 중)"
        ],
        "sources": [
          {
            "title": "Meta Platforms (META): Navigating AI Spending Surge and Regulatory Challenges in 2026 (Tickeron)",
            "url": "https://tickeron.com/blogs/meta-platforms-meta-navigating-ai-spending-surge-and-regulatory-challenges-in-2026-13247/"
          },
          {
            "title": "Meta Q2 2026: Revenue Hits $60.8B, EPS Misses as Reality Labs Loses $4.6B (GamesReviews)",
            "url": "https://gamesreviews.com/news/07/meta-q2-2026-revenue-hits-60-8b-eps-misses-as-reality-labs-loses-4-6b/"
          },
          {
            "title": "The Brussels Reckoning: EU Launches High-Stakes Systemic Risk Probes into X and Meta (FinancialContent)",
            "url": "https://markets.financialcontent.com/wral/article/tokenring-2026-1-16-the-brussels-reckoning-eu-launches-high-stakes-systemic-risk-probes-into-x-and-meta-as-ai-act-enforcement-hits-full-gear"
          }
        ],
        "latestChanges": [
          {
            "headline": "마크 주커버그 (Mark Zuckerberg) 는 이번 주에 메타의 무제한 AI 구축을 방어하는 6,500단어 AI 선언문을 발표했습니다. 투자자가 관심을 가져야 하는 이유는 다음과 같습니다.",
            "eventLabel": "AI·데이터센터 투자 변화",
            "publishedAt": 1787462400,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=e79f44d2940251377f849af19d030c8f19209e97d2d57cfe1b276158b1728d80",
            "reason": "사업·실적 연결 경로 확인 필요"
          },
          {
            "headline": "메타: 우리는 전에도 이런 상황을 본 적이 있습니다(등급 업그레이드)",
            "eventLabel": "규제·소송·수출 제한",
            "publishedAt": 1787387443,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=ae7b8de08aa2e1923c854462aad4d7a236ddd84cf640268226a5120b025d2a95",
            "reason": "회사 실적과의 연결고리 확인"
          },
          {
            "headline": "Meta는 법정에 상륙한 최신 기술 거인입니다. 이본느 곤잘레스 로저스 판사를 만나보세요",
            "eventLabel": "규제·소송·수출 제한",
            "publishedAt": 1787385601,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=0c3e4671d412eba59683f5b4fd378521ca4434e4b991bed8d8da4491d9fa3690",
            "reason": "회사 실적과의 연결고리 확인"
          },
          {
            "headline": "Broadcom의 최신 부채 거래",
            "eventLabel": "AI·데이터센터 투자 변화",
            "publishedAt": 1787310979,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=2c04227ae5351fa6a90d147eba0b15cb06cef2dd3553225b4a061c65c3016eeb",
            "reason": "사업·실적 연결 경로 확인 필요"
          },
          {
            "headline": "Meta, Google 및 Snap은 청소년이 주요 재판을 앞두고 소셜 미디어 중독 소송을 제기함에 따라 휴식을 취합니다(업데이트됨)",
            "eventLabel": "규제·소송·수출 제한",
            "publishedAt": 1787300740,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=b900c64d3b6d10f749db951b4aa543bb3fc992e0717798efb60a5f171b692dfa",
            "reason": "사업·실적 연결 경로 확인 필요"
          },
          {
            "headline": "더 이상 둠 스크롤이나 인스타그램 스토리가 없나요? 메타 시험에서 패배하면 우리가 알고 있는 소셜 미디어가 종료될 수 있습니다.",
            "eventLabel": "규제·소송·수출 제한",
            "publishedAt": 1787295601,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=1e5a0aa94129cb28a903a31cddf27ec507b838c34d1913e6987fa3f4ad78221a",
            "reason": "회사 실적과의 연결고리 확인"
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
      "guidanceTrackRecord": {
        "status": "collecting",
        "settledCount": 0,
        "metCount": 0,
        "hitRate": null,
        "confidenceAdjustment": 0.0,
        "worseningTwo": false,
        "recentOutcomes": [],
        "notice": "SEC Company Facts의 분기 매출만 회사 공식 가이던스와 대조합니다. 2개 결과 전에는 신뢰도에 반영하지 않습니다."
      },
      "valuationScenario": {
        "status": "available",
        "price": 576.14,
        "currentEps": 31.73427,
        "nextEps": 33.92838,
        "epsGrowth": 0.0691,
        "marketPe": 18.16,
        "conservative": 394.22,
        "base": 615.97,
        "optimistic": 954.76,
        "currentVsBase": -0.0647,
        "analystTargetMean": 754.14246,
        "analystTargetLow": 580.0,
        "analystTargetHigh": 1000.0,
        "evidenceWeights": {
          "bull": 26.4,
          "base": 37.9,
          "bear": 35.7
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
          "asOf": 1787322925.8647835,
          "date": "2026-08-21",
          "fundamentalScore": 10.6,
          "confidence": 100,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 33.7,
            "base": 39.2,
            "bear": 27.1
          },
          "currentPrice": 545.8300170898438,
          "valuationGap": -0.064,
          "theses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787407899.9208522,
          "date": "2026-08-22",
          "fundamentalScore": 9.1,
          "confidence": 100,
          "fundamentalDamage": 7.5,
          "thesisDamage": 0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 33.3,
            "base": 39.4,
            "bear": 27.3
          },
          "currentPrice": 549.9000244140625,
          "valuationGap": -0.064,
          "theses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787496888.8915975,
          "date": "2026-08-23",
          "fundamentalScore": 6.4,
          "confidence": 100,
          "fundamentalDamage": 45.3,
          "thesisDamage": 84.0,
          "thesisStatus": "damaged",
          "scenarioWeights": {
            "bull": 23.1,
            "base": 37.1,
            "bear": 39.8
          },
          "currentPrice": 549.9000244140625,
          "valuationGap": -0.064,
          "theses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787582269.4850764,
          "date": "2026-08-24",
          "fundamentalScore": 7.0,
          "confidence": 100,
          "fundamentalDamage": 34.9,
          "thesisDamage": 84.0,
          "thesisStatus": "damaged",
          "scenarioWeights": {
            "bull": 23.2,
            "base": 37.1,
            "bear": 39.7
          },
          "currentPrice": 549.9000244140625,
          "valuationGap": -0.064,
          "theses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787667920.4111497,
          "date": "2026-08-25",
          "fundamentalScore": 5.8,
          "confidence": 100,
          "fundamentalDamage": 60.2,
          "thesisDamage": 84.0,
          "thesisStatus": "damaged",
          "scenarioWeights": {
            "bull": 23.0,
            "base": 37.2,
            "bear": 39.8
          },
          "currentPrice": 559.02001953125,
          "valuationGap": -0.0647,
          "theses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787754142.7259922,
          "date": "2026-08-26",
          "fundamentalScore": 6.0,
          "confidence": 100,
          "fundamentalDamage": 56.6,
          "thesisDamage": 84.0,
          "thesisStatus": "damaged",
          "scenarioWeights": {
            "bull": 23.0,
            "base": 37.2,
            "bear": 39.8
          },
          "currentPrice": 570.0499877929688,
          "valuationGap": -0.0647,
          "theses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787788668.347003,
          "date": "2026-08-27",
          "fundamentalScore": 6.9,
          "confidence": 100,
          "fundamentalDamage": 37.8,
          "thesisDamage": 56.0,
          "thesisStatus": "damaged",
          "scenarioWeights": {
            "bull": 26.4,
            "base": 37.9,
            "bear": 35.7
          },
          "currentPrice": 576.1400146484375,
          "valuationGap": -0.0647,
          "theses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        }
      ],
      "thesisHistory": [
        {
          "asOf": 1787322925.8647835,
          "date": "2026-08-21",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787407899.9208522,
          "date": "2026-08-22",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787496888.8915975,
          "date": "2026-08-23",
          "overallStatus": "damaged",
          "statuses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787582269.4850764,
          "date": "2026-08-24",
          "overallStatus": "damaged",
          "statuses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787667920.4111497,
          "date": "2026-08-25",
          "overallStatus": "damaged",
          "statuses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787754142.7259922,
          "date": "2026-08-26",
          "overallStatus": "damaged",
          "statuses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787788668.347003,
          "date": "2026-08-27",
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
    "AAPL": {
      "ticker": "AAPL",
      "asOf": 1787788668.347003,
      "modelVersion": "fundamental-v1.3",
      "fundamentalScore": -2.8,
      "confidence": 100,
      "fundamentalSigma": null,
      "fundamentalSigmaProgress": {
        "status": "collecting",
        "collected": 7,
        "required": 8,
        "remaining": 1,
        "expectedReadyDate": "2026-08-28",
        "notice": "같은 KST 날짜의 반복 실행은 한 건으로 교체하며, 임의 과거 점수를 만들어 채우지 않습니다."
      },
      "priceSigma": 0.5,
      "priceDamage": 16.6,
      "fundamentalDamage": 100,
      "thesisDamage": 100,
      "thesisStatus": "damaged",
      "damageRead": "펀더멘털 위험 신호가 가격에 충분히 반영되지 않았을 가능성이 있습니다.",
      "dimensions": {
        "growth": {
          "score": -3.776666833333334,
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
          "score": -39.199999999999996,
          "applicable": true
        },
        "customerDemand": {
          "score": 0.0,
          "applicable": true
        },
        "balanceSheet": {
          "score": -12.0596,
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
          "headline": "Apple, AI 업그레이드가 포함된 새로운 Mac Mini 및 Mac Studio 모델 발표",
          "eventLabel": "경쟁사 기술·시장 진입",
          "publishedAt": 1787648401,
          "sourceUrl": "https://finnhub.io/api/news?id=a7ff5dcc42a625cae9e085a8cce28c6ff2b713534fb0a8a0e99cb5054e003202",
          "verificationStatus": "needs_confirmation",
          "reason": "회사 실적과의 연결고리 확인",
          "direction": "negative",
          "impact": -4.0
        },
        {
          "headline": "경쟁사 분석: 기술 하드웨어, 스토리지 및 주변 장치 산업에서 Apple 및 경쟁사 평가",
          "eventLabel": "경쟁사 기술·시장 진입",
          "publishedAt": 1787637514,
          "sourceUrl": "https://finnhub.io/api/news?id=7eac5c1858f7c0b533e8daafee53dc942f65f199458d44c7af2b2a3b47c080e7",
          "verificationStatus": "needs_confirmation",
          "reason": "회사 실적과의 연결고리 확인",
          "direction": "negative",
          "impact": -4.0
        },
        {
          "headline": "Cowell은 여전히 Apple에 묶여 있지만 투자자들은 강력한 수입을 응원합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787593932,
          "sourceUrl": "https://finnhub.io/api/news?id=2f48d983bd7a3006b3e02d1bc4ccadf789ebd14740b2a1b1eea7f1de4f5449ee",
          "verificationStatus": "needs_confirmation",
          "reason": "사업·실적 연결 경로 확인 필요",
          "direction": "positive",
          "impact": 2.0
        },
        {
          "headline": "기술 하드웨어, 스토리지 및 주변 장치 업계에서 Apple의 경쟁업체 역학 관계에 대한 문의",
          "eventLabel": "경쟁사 기술·시장 진입",
          "publishedAt": 1787551109,
          "sourceUrl": "https://finnhub.io/api/news?id=bf8e169ffbc4a3dc5fd47415ac9da02ae465db7ff168f6db0384b4507963d06c",
          "verificationStatus": "needs_confirmation",
          "reason": "회사 실적과의 연결고리 확인",
          "direction": "negative",
          "impact": -4.0
        },
        {
          "headline": "Apple, EU 표준 앱스토어 커미션 30% 에서 26% 로 삭감",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1787460181,
          "sourceUrl": "https://finnhub.io/api/news?id=d48f1ed8d15eae99f6ae5306f20167c82d36f8ec33de008f03f4a4d7b36f22c7",
          "verificationStatus": "needs_confirmation",
          "reason": "회사 실적과의 연결고리 확인",
          "direction": "negative",
          "impact": -4.0
        },
        {
          "headline": "모든 S&P 500 인덱스 펀드 소유자는 Apple보다 Nvidia를 더 많이 보유하고 있습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1787391121,
          "sourceUrl": "https://finnhub.io/api/news?id=bd4f750c40540d512caea103877ee7b76543da7f09a057e562044f77890fed31",
          "verificationStatus": "needs_confirmation",
          "reason": "회사 실적과의 연결고리 확인",
          "direction": "negative",
          "impact": -4.0
        },
        {
          "headline": "Meta는 법정에 상륙한 최신 기술 거인입니다. 이본느 곤잘레스 로저스 판사를 만나보세요",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1787385601,
          "sourceUrl": "https://finnhub.io/api/news?id=0c3e4671d412eba59683f5b4fd378521ca4434e4b991bed8d8da4491d9fa3690",
          "verificationStatus": "needs_confirmation",
          "reason": "사업·실적 연결 경로 확인 필요",
          "direction": "negative",
          "impact": -4.0
        },
        {
          "headline": "'애플은 법원의 체납금 판결 이후 아일랜드에 170억 달러의 세금을 납부했습니다' - Financial Times",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1787301459,
          "sourceUrl": "https://finnhub.io/api/news?id=78ec50cf42fcc10fcff5bdf09a62da923d9804a1534ff1738bdbbea873a9474a",
          "verificationStatus": "needs_confirmation",
          "reason": "사업·실적 연결 경로 확인 필요",
          "direction": "negative",
          "impact": -4.0
        }
      ],
      "topPositive": [
        "사업·실적 연결 경로 확인 필요"
      ],
      "topNegative": [
        "회사 실적과의 연결고리 확인",
        "회사 실적과의 연결고리 확인",
        "회사 실적과의 연결고리 확인"
      ],
      "nextChecks": [
        "다음 실적의 매출·EPS·마진",
        "공식 가이던스 대비 실제 매출 달성 여부",
        "핵심 고객 수요·CAPEX",
        "FCF와 부채·CAPEX 변화"
      ],
      "theses": [
        {
          "id": "growth",
          "name": "성장 Thesis",
          "statement": "매출·EPS 성장 전망이 유지되고 본업 수익성이 함께 개선된다.",
          "status": "intact",
          "score": -3.8,
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
          "status": "weakening",
          "score": -17.1,
          "confidence": 100,
          "falsificationRules": [
            "핵심 고객 이탈 또는 점유율 하락이 공식 수치로 확인",
            "부채 부담 상승과 사업 리스크 확대가 동시 발생"
          ]
        }
      ],
      "scenarios": {
        "bull": 19.6,
        "base": 36.9,
        "bear": 43.5
      },
      "alerts": [],
      "businessProfile": {
        "updatedAt": "2026-08-20",
        "customers": [
          "전세계 소비자 - 활성기기 25억대 설치기반(아이폰이 매출의 절반 이상), 아이폰 고객 재구매율 89%로 업계 최고 수준(삼성 약 77%)",
          "서비스 구독자 - 앱스토어·아이클라우드·애플페이 등, 서비스가 매출 비중 2위(약 28%)로 확대 중"
        ],
        "strengths": [
          "아이폰 매출이 여전히 사상 최대 경신 중(2026 회계연도 1분기 $852.7억, +23% YoY) - 매출 절반 이상을 차지하는 핵심 사업이 꺾이지 않음",
          "서비스 매출도 사상 최대(1분기 $300억, +14%) - 하드웨어 판매주기가 길어져도 서비스로 수익을 보완하는 구조",
          "25억대라는 압도적 설치기반과 89% 재구매율 - 한 번 아이폰을 쓰면 계속 애플 생태계에 머무는 '락인' 효과가 강함"
        ],
        "risks": [
          "⚠️ AI 경쟁에서 1~2년 뒤처졌다는 평가(Needham 등) - 대대적으로 개편된 시리(Siri) 2.0이 2026년으로 미뤄졌고, 경쟁사(오픈AI 등) 수준에 못 미치면 '혁신 기업' 이미지에 타격 가능",
          "중국 매출 비중 18%($205억, 2026 2분기)인데 미중 무역긴장·관세 위협 + 중국 내 자국 브랜드 점유율 확대로 압박 지속. 대만해협 긴장 고조 시엔 생산기지 자체가 리스크",
          "DOJ 반독점 소송이 최대 위협 - 아이메시지·NFC칩 개방이 강제되면 '울타리 정원' 전략(프리미엄 가격의 기반)이 흔들릴 수 있음. EU에서 이미 DMA 위반으로 벌금 부과됨",
          "팀 쿡→존 터너스 CEO 교체가 2026-09-01 예정(상세 내용은 아래 newsLog 참고) - 리더십 전환 시기와 위 리스크들이 겹침"
        ],
        "sources": [
          {
            "title": "Apple Stock Analysis: Challenges to Growth and Value Transition (IndexBox)",
            "url": "https://www.indexbox.io/blog/apple-stock-growth-challenges-iphone-saturation-china-competition-and-regulatory-risks/"
          },
          {
            "title": "Apple's Services Business Was a Major Catalyst Last Year, and 2026 Will Likely Be Even Better (Yahoo Finance)",
            "url": "https://finance.yahoo.com/news/apples-services-business-major-catalyst-182600661.html"
          }
        ],
        "latestChanges": [
          {
            "headline": "Apple, AI 업그레이드가 포함된 새로운 Mac Mini 및 Mac Studio 모델 발표",
            "eventLabel": "경쟁사 기술·시장 진입",
            "publishedAt": 1787648401,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=a7ff5dcc42a625cae9e085a8cce28c6ff2b713534fb0a8a0e99cb5054e003202",
            "reason": "회사 실적과의 연결고리 확인"
          },
          {
            "headline": "경쟁사 분석: 기술 하드웨어, 스토리지 및 주변 장치 산업에서 Apple 및 경쟁사 평가",
            "eventLabel": "경쟁사 기술·시장 진입",
            "publishedAt": 1787637514,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=7eac5c1858f7c0b533e8daafee53dc942f65f199458d44c7af2b2a3b47c080e7",
            "reason": "회사 실적과의 연결고리 확인"
          },
          {
            "headline": "Cowell은 여전히 Apple에 묶여 있지만 투자자들은 강력한 수입을 응원합니다.",
            "eventLabel": "AI·데이터센터 투자 변화",
            "publishedAt": 1787593932,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=2f48d983bd7a3006b3e02d1bc4ccadf789ebd14740b2a1b1eea7f1de4f5449ee",
            "reason": "사업·실적 연결 경로 확인 필요"
          },
          {
            "headline": "기술 하드웨어, 스토리지 및 주변 장치 업계에서 Apple의 경쟁업체 역학 관계에 대한 문의",
            "eventLabel": "경쟁사 기술·시장 진입",
            "publishedAt": 1787551109,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=bf8e169ffbc4a3dc5fd47415ac9da02ae465db7ff168f6db0384b4507963d06c",
            "reason": "회사 실적과의 연결고리 확인"
          },
          {
            "headline": "Apple, EU 표준 앱스토어 커미션 30% 에서 26% 로 삭감",
            "eventLabel": "규제·소송·수출 제한",
            "publishedAt": 1787460181,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=d48f1ed8d15eae99f6ae5306f20167c82d36f8ec33de008f03f4a4d7b36f22c7",
            "reason": "회사 실적과의 연결고리 확인"
          },
          {
            "headline": "모든 S&P 500 인덱스 펀드 소유자는 Apple보다 Nvidia를 더 많이 보유하고 있습니다.",
            "eventLabel": "공급망 문제",
            "publishedAt": 1787391121,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=bd4f750c40540d512caea103877ee7b76543da7f09a057e562044f77890fed31",
            "reason": "회사 실적과의 연결고리 확인"
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
      "guidanceTrackRecord": {
        "status": "collecting",
        "settledCount": 0,
        "metCount": 0,
        "hitRate": null,
        "confidenceAdjustment": 0.0,
        "worseningTwo": false,
        "recentOutcomes": [],
        "notice": "SEC Company Facts의 분기 매출만 회사 공식 가이던스와 대조합니다. 2개 결과 전에는 신뢰도에 반영하지 않습니다."
      },
      "valuationScenario": {
        "status": "available",
        "price": 313.45,
        "currentEps": 8.81249,
        "nextEps": 9.53127,
        "epsGrowth": 0.0816,
        "marketPe": 35.57,
        "conservative": 216.97,
        "base": 339.02,
        "optimistic": 525.48,
        "currentVsBase": -0.0754,
        "analystTargetMean": 324.45282,
        "analystTargetLow": 215.0,
        "analystTargetHigh": 400.0,
        "evidenceWeights": {
          "bull": 19.6,
          "base": 36.9,
          "bear": 43.5
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
          "asOf": 1787322925.8647835,
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
          "currentPrice": 311.29998779296875,
          "valuationGap": -0.0763,
          "theses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787407899.9208522,
          "date": "2026-08-22",
          "fundamentalScore": 6.9,
          "confidence": 100,
          "fundamentalDamage": 9.9,
          "thesisDamage": 98.0,
          "thesisStatus": "damaged",
          "scenarioWeights": {
            "bull": 21.6,
            "base": 36.7,
            "bear": 41.7
          },
          "currentPrice": 309.3500061035156,
          "valuationGap": -0.0763,
          "theses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787496888.8915975,
          "date": "2026-08-23",
          "fundamentalScore": 1.7,
          "confidence": 100,
          "fundamentalDamage": 100,
          "thesisDamage": 100,
          "thesisStatus": "damaged",
          "scenarioWeights": {
            "bull": 20.3,
            "base": 37.1,
            "bear": 42.6
          },
          "currentPrice": 309.3500061035156,
          "valuationGap": -0.0754,
          "theses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787582269.4850764,
          "date": "2026-08-24",
          "fundamentalScore": 0.8,
          "confidence": 100,
          "fundamentalDamage": 100,
          "thesisDamage": 100,
          "thesisStatus": "damaged",
          "scenarioWeights": {
            "bull": 20.2,
            "base": 37.0,
            "bear": 42.8
          },
          "currentPrice": 309.3500061035156,
          "valuationGap": -0.0754,
          "theses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787667920.4111497,
          "date": "2026-08-25",
          "fundamentalScore": -0.4,
          "confidence": 100,
          "fundamentalDamage": 100,
          "thesisDamage": 100,
          "thesisStatus": "damaged",
          "scenarioWeights": {
            "bull": 19.9,
            "base": 37.2,
            "bear": 42.9
          },
          "currentPrice": 310.3399963378906,
          "valuationGap": -0.0754,
          "theses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "weakening"
          }
        },
        {
          "asOf": 1787754142.7259922,
          "date": "2026-08-26",
          "fundamentalScore": -3.1,
          "confidence": 100,
          "fundamentalDamage": 100,
          "thesisDamage": 100,
          "thesisStatus": "damaged",
          "scenarioWeights": {
            "bull": 19.5,
            "base": 37.0,
            "bear": 43.5
          },
          "currentPrice": 309.8999938964844,
          "valuationGap": -0.0754,
          "theses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "weakening"
          }
        },
        {
          "asOf": 1787788668.347003,
          "date": "2026-08-27",
          "fundamentalScore": -2.8,
          "confidence": 100,
          "fundamentalDamage": 100,
          "thesisDamage": 100,
          "thesisStatus": "damaged",
          "scenarioWeights": {
            "bull": 19.6,
            "base": 36.9,
            "bear": 43.5
          },
          "currentPrice": 313.45001220703125,
          "valuationGap": -0.0754,
          "theses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "weakening"
          }
        }
      ],
      "thesisHistory": [
        {
          "asOf": 1787322925.8647835,
          "date": "2026-08-21",
          "overallStatus": "damaged",
          "statuses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787407899.9208522,
          "date": "2026-08-22",
          "overallStatus": "damaged",
          "statuses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787496888.8915975,
          "date": "2026-08-23",
          "overallStatus": "damaged",
          "statuses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787582269.4850764,
          "date": "2026-08-24",
          "overallStatus": "damaged",
          "statuses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787667920.4111497,
          "date": "2026-08-25",
          "overallStatus": "damaged",
          "statuses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "weakening"
          }
        },
        {
          "asOf": 1787754142.7259922,
          "date": "2026-08-26",
          "overallStatus": "damaged",
          "statuses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "weakening"
          }
        },
        {
          "asOf": 1787788668.347003,
          "date": "2026-08-27",
          "overallStatus": "damaged",
          "statuses": {
            "growth": "intact",
            "cashFlow": "intact",
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
    "TSLA": {
      "ticker": "TSLA",
      "asOf": 1787788668.347003,
      "modelVersion": "fundamental-v1.3",
      "fundamentalScore": 7.4,
      "confidence": 100,
      "fundamentalSigma": null,
      "fundamentalSigmaProgress": {
        "status": "collecting",
        "collected": 7,
        "required": 8,
        "remaining": 1,
        "expectedReadyDate": "2026-08-28",
        "notice": "같은 KST 날짜의 반복 실행은 한 건으로 교체하며, 임의 과거 점수를 만들어 채우지 않습니다."
      },
      "priceSigma": 0.81,
      "priceDamage": 27.0,
      "fundamentalDamage": 77.7,
      "thesisDamage": 100,
      "thesisStatus": "damaged",
      "damageRead": "펀더멘털 위험 신호가 가격에 충분히 반영되지 않았을 가능성이 있습니다.",
      "dimensions": {
        "growth": {
          "score": 6.290000000000002,
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
          "score": -9.799999999999999,
          "applicable": true
        },
        "customerDemand": {
          "score": 0.0,
          "applicable": true
        },
        "balanceSheet": {
          "score": -1.968399999999999,
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
        "needsConfirmation": 6,
        "aiInferences": 6
      },
      "evidence": [
        {
          "headline": "Tesla: 잠재적인 합병으로 인해 어느 정도 긍정적인 면이 있지만 여전히 약세입니다(업그레이드)",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1787751630,
          "sourceUrl": "https://finnhub.io/api/news?id=b382890d9c645179fedf5db41f4f6b4f29473bfc3286616827ab24d4f7656204",
          "verificationStatus": "needs_confirmation",
          "reason": "회사 실적과의 연결고리 확인",
          "direction": "negative",
          "impact": -4.0
        },
        {
          "headline": "XPeng Q2: 테슬라보다 나은 점",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1787582385,
          "sourceUrl": "https://finnhub.io/api/news?id=03e43707ec88b1cbb3d7bf62c30654eef16c1aba21213c240d939987abd8f3b0",
          "verificationStatus": "needs_confirmation",
          "reason": "회사 실적과의 연결고리 확인",
          "direction": "negative",
          "impact": -4.0
        },
        {
          "headline": "테슬라: SpaceX만이 유일한 희망입니다",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1787578131,
          "sourceUrl": "https://finnhub.io/api/news?id=6cda9280ff0d8b18a0b37e2fb9355148d2c4ca08ec9b14be1d27ad880b3a0581",
          "verificationStatus": "needs_confirmation",
          "reason": "회사 실적과의 연결고리 확인",
          "direction": "negative",
          "impact": -4.0
        },
        {
          "headline": "TSLA 경쟁자? 샤오미, NIO와 함께 자율주행차 사내 칩 개발 경주에 참여",
          "eventLabel": "경쟁사 기술·시장 진입",
          "publishedAt": 1787553071,
          "sourceUrl": "https://finnhub.io/api/news?id=6ab1c7962d91710079f7dd3a76f0e68630e1692b673bf5b0e0dbfc766b509a19",
          "verificationStatus": "needs_confirmation",
          "reason": "회사 실적과의 연결고리 확인",
          "direction": "negative",
          "impact": -4.0
        },
        {
          "headline": "미국 주식 지수는 장기 국채 수익률 상승으로 인한 압력으로 주말 하락세 — PSKY, MSTR, WMT, TSLA, NVDA 집중",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1787352524,
          "sourceUrl": "https://finnhub.io/api/news?id=c391ed03d42e61632a99f98d9ca8ec0f32a5195b33a7b6127966b427202f7024",
          "verificationStatus": "needs_confirmation",
          "reason": "회사 실적과의 연결고리 확인",
          "direction": "negative",
          "impact": -4.0
        },
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
      "topNegative": [
        "회사 실적과의 연결고리 확인",
        "회사 실적과의 연결고리 확인",
        "회사 실적과의 연결고리 확인"
      ],
      "nextChecks": [
        "다음 실적의 매출·EPS·마진",
        "공식 가이던스 대비 실제 매출 달성 여부",
        "핵심 고객 수요·CAPEX",
        "FCF와 부채·CAPEX 변화"
      ],
      "theses": [
        {
          "id": "growth",
          "name": "성장 Thesis",
          "statement": "매출·EPS 성장 전망이 유지되고 본업 수익성이 함께 개선된다.",
          "status": "intact",
          "score": 6.3,
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
          "score": 56.8,
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
        "bull": 21.4,
        "base": 36.7,
        "bear": 41.9
      },
      "alerts": [],
      "businessProfile": {
        "updatedAt": "2026-08-13",
        "customers": [
          "전기차 구매 소비자(자동차 부문이 매출 대부분, 2026 1분기 $199.8억) - 판매·리스, 중고차·유지보수·충전·보험 등 부가서비스 포함",
          "에너지 저장 고객(메가팩-유틸리티급, 파워월-가정용, 솔라루프) - 마진율 기준 가장 빠르게 크는 사업(1분기 매출 $24.1억)",
          "(미래) 로보택시 승객, 옵티머스 휴머노이드 로봇 구매 기업 - 아직 본격 매출 전 단계"
        ],
        "strengths": [
          "에너지 저장 사업이 마진 기준 최고 성장 사업 - 자동차 판매 둔화를 일부 상쇄",
          "로보택시가 미국 7개 도시로 확대(newsLog 참고), 그록(Grok) AI 어시스턴트 등 소프트웨어 기능 지속 확장",
          "1분기 82만대 이상 생산 등 대량생산 능력 유지"
        ],
        "risks": [
          "⚠️ 영업이익률이 4.1%→1.4%로 급락(로보택시·AI 투자 확대가 원인) - 자세한 내용은 아래 newsLog 참고",
          "로보택시 매출 확대 시점이 머스크가 예고했던 속도보다 계속 늦어지는 중 - 계획 신뢰도에 대한 의구심",
          "2025년 판매량이 전년비 -9%, 사이버트럭은 -48%로 감소 - 핵심 자동차 사업 자체는 정체·역성장 국면"
        ],
        "sources": [
          {
            "title": "Tesla in 10 Charts: How the Business Works, Visualized (2026) (Business Model Analyst)",
            "url": "https://businessmodelanalyst.com/tesla-in-charts/"
          },
          {
            "title": "Tesla (TSLA) Stock in 2026: Robotaxis, Optimus, Declining EV Sales, and How to Trade (Phemex)",
            "url": "https://phemex.com/academy/tesla-tsla-stock-2026"
          }
        ],
        "latestChanges": [
          {
            "headline": "Tesla: 잠재적인 합병으로 인해 어느 정도 긍정적인 면이 있지만 여전히 약세입니다(업그레이드)",
            "eventLabel": "규제·소송·수출 제한",
            "publishedAt": 1787751630,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=b382890d9c645179fedf5db41f4f6b4f29473bfc3286616827ab24d4f7656204",
            "reason": "회사 실적과의 연결고리 확인"
          },
          {
            "headline": "XPeng Q2: 테슬라보다 나은 점",
            "eventLabel": "규제·소송·수출 제한",
            "publishedAt": 1787582385,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=03e43707ec88b1cbb3d7bf62c30654eef16c1aba21213c240d939987abd8f3b0",
            "reason": "회사 실적과의 연결고리 확인"
          },
          {
            "headline": "테슬라: SpaceX만이 유일한 희망입니다",
            "eventLabel": "규제·소송·수출 제한",
            "publishedAt": 1787578131,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=6cda9280ff0d8b18a0b37e2fb9355148d2c4ca08ec9b14be1d27ad880b3a0581",
            "reason": "회사 실적과의 연결고리 확인"
          },
          {
            "headline": "TSLA 경쟁자? 샤오미, NIO와 함께 자율주행차 사내 칩 개발 경주에 참여",
            "eventLabel": "경쟁사 기술·시장 진입",
            "publishedAt": 1787553071,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=6ab1c7962d91710079f7dd3a76f0e68630e1692b673bf5b0e0dbfc766b509a19",
            "reason": "회사 실적과의 연결고리 확인"
          },
          {
            "headline": "미국 주식 지수는 장기 국채 수익률 상승으로 인한 압력으로 주말 하락세 — PSKY, MSTR, WMT, TSLA, NVDA 집중",
            "eventLabel": "규제·소송·수출 제한",
            "publishedAt": 1787352524,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=c391ed03d42e61632a99f98d9ca8ec0f32a5195b33a7b6127966b427202f7024",
            "reason": "회사 실적과의 연결고리 확인"
          },
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
      "guidanceTrackRecord": {
        "status": "collecting",
        "settledCount": 0,
        "metCount": 0,
        "hitRate": null,
        "confidenceAdjustment": 0.0,
        "worseningTwo": false,
        "recentOutcomes": [],
        "notice": "SEC Company Facts의 분기 매출만 회사 공식 가이던스와 대조합니다. 2개 결과 전에는 신뢰도에 반영하지 않습니다."
      },
      "valuationScenario": {
        "status": "available",
        "price": 345.82,
        "currentEps": 1.77267,
        "nextEps": 2.15858,
        "epsGrowth": 0.2177,
        "marketPe": 195.08,
        "conservative": 269.51,
        "base": 421.1,
        "optimistic": 652.71,
        "currentVsBase": -0.1788,
        "analystTargetMean": 390.09283,
        "analystTargetLow": 125.0,
        "analystTargetHigh": 600.0,
        "evidenceWeights": {
          "bull": 21.4,
          "base": 36.7,
          "bear": 41.9
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
          "asOf": 1787322925.8647835,
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
          "currentPrice": 345.1300048828125,
          "valuationGap": -0.1813,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787407899.9208522,
          "date": "2026-08-22",
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
          "currentPrice": 362.8599853515625,
          "valuationGap": -0.1813,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787496888.8915975,
          "date": "2026-08-23",
          "fundamentalScore": 12.8,
          "confidence": 90.0,
          "fundamentalDamage": 7.5,
          "thesisDamage": 7.0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 33.1,
            "base": 39.0,
            "bear": 27.9
          },
          "currentPrice": 362.8599853515625,
          "valuationGap": -0.1788,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787582269.4850764,
          "date": "2026-08-24",
          "fundamentalScore": 12.8,
          "confidence": 90.0,
          "fundamentalDamage": 7.5,
          "thesisDamage": 7.0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 33.1,
            "base": 39.0,
            "bear": 27.9
          },
          "currentPrice": 362.8599853515625,
          "valuationGap": -0.1788,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787667920.4111497,
          "date": "2026-08-25",
          "fundamentalScore": 8.7,
          "confidence": 100,
          "fundamentalDamage": 58.7,
          "thesisDamage": 91.0,
          "thesisStatus": "damaged",
          "scenarioWeights": {
            "bull": 22.7,
            "base": 36.8,
            "bear": 40.5
          },
          "currentPrice": 348.95001220703125,
          "valuationGap": -0.1788,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787754142.7259922,
          "date": "2026-08-26",
          "fundamentalScore": 8.7,
          "confidence": 100,
          "fundamentalDamage": 58.7,
          "thesisDamage": 91.0,
          "thesisStatus": "damaged",
          "scenarioWeights": {
            "bull": 22.7,
            "base": 36.8,
            "bear": 40.5
          },
          "currentPrice": 350.25,
          "valuationGap": -0.1788,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787788668.347003,
          "date": "2026-08-27",
          "fundamentalScore": 7.4,
          "confidence": 100,
          "fundamentalDamage": 77.7,
          "thesisDamage": 100,
          "thesisStatus": "damaged",
          "scenarioWeights": {
            "bull": 21.4,
            "base": 36.7,
            "bear": 41.9
          },
          "currentPrice": 345.82000732421875,
          "valuationGap": -0.1788,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        }
      ],
      "thesisHistory": [
        {
          "asOf": 1787322925.8647835,
          "date": "2026-08-21",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787407899.9208522,
          "date": "2026-08-22",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787496888.8915975,
          "date": "2026-08-23",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787582269.4850764,
          "date": "2026-08-24",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787667920.4111497,
          "date": "2026-08-25",
          "overallStatus": "damaged",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787754142.7259922,
          "date": "2026-08-26",
          "overallStatus": "damaged",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787788668.347003,
          "date": "2026-08-27",
          "overallStatus": "damaged",
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
      "asOf": 1787788668.347003,
      "modelVersion": "fundamental-v1.3",
      "fundamentalScore": 26.3,
      "confidence": 100,
      "fundamentalSigma": null,
      "fundamentalSigmaProgress": {
        "status": "collecting",
        "collected": 7,
        "required": 8,
        "remaining": 1,
        "expectedReadyDate": "2026-08-28",
        "notice": "같은 KST 날짜의 반복 실행은 한 건으로 교체하며, 임의 과거 점수를 만들어 채우지 않습니다."
      },
      "priceSigma": 0.64,
      "priceDamage": 21.2,
      "fundamentalDamage": 0,
      "thesisDamage": 0,
      "thesisStatus": "strengthening",
      "damageRead": "현재 가격 변동과 펀더멘털 변화 사이에 큰 괴리는 확인되지 않았습니다.",
      "dimensions": {
        "growth": {
          "score": 39.85666666666666,
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
          "score": -10.578300000000002,
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
        "needsConfirmation": 5,
        "aiInferences": 5
      },
      "evidence": [
        {
          "headline": "9월 이전에 오라클 주식을 매입해야 합니까? 대답은 당신을 놀라게 할 수 있습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1787508600,
          "sourceUrl": "https://finnhub.io/api/news?id=3d1cccd4fe41315a157b13f0f470600fd0876205c14ede0837ef75c37b002d65",
          "verificationStatus": "needs_confirmation",
          "reason": "회사 실적과의 연결고리 확인",
          "direction": "positive",
          "impact": 4.0
        },
        {
          "headline": "아마존의 잉여현금흐름 (Free Cash Flow) 은 영업현금흐름 (Operating Cash Flow) 이 33% 상승하더라도 마이너스 76억 $ 를 기록했다. Gap AI Capex가 실제로 만들고 있습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1787499300,
          "sourceUrl": "https://finnhub.io/api/news?id=a9905b210869231b722441eba4e31cff86108bf3179b3579bcc7fa5dfcd60758",
          "verificationStatus": "needs_confirmation",
          "reason": "AI 매출 기회와 FCF·부채·신용 부담이 동시에 존재",
          "direction": "positive",
          "impact": 4.0
        },
        {
          "headline": "Oracle의 VA 계약이 170억 달러 증가했습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1787344885,
          "sourceUrl": "https://finnhub.io/api/news?id=b9983b40991e9ebf3fe564ca0e83bc6f35ad1292e859367d5059a557de848eb8",
          "verificationStatus": "needs_confirmation",
          "reason": "회사 실적과의 연결고리 확인",
          "direction": "positive",
          "impact": 4.0
        },
        {
          "headline": "'애플은 법원의 체납금 판결 이후 아일랜드에 170억 달러의 세금을 납부했습니다' - Financial Times",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1787301459,
          "sourceUrl": "https://finnhub.io/api/news?id=78ec50cf42fcc10fcff5bdf09a62da923d9804a1534ff1738bdbbea873a9474a",
          "verificationStatus": "needs_confirmation",
          "reason": "클라우드 수요와 자본 부담 동시 확대",
          "direction": "negative",
          "impact": -4.0
        },
        {
          "headline": "Quantinuum-Oracle 파트너십이 엔터프라이즈 컴퓨팅에 미치는 영향",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1787219040,
          "sourceUrl": "https://finnhub.io/api/news?id=26e39312b0a20c9b8e439281fdf5f2daa8121afdd5d8536f433547e1c3cc9c96",
          "verificationStatus": "needs_confirmation",
          "reason": "OCI 서비스 범위 확대 가능성, 매출화 시점 불확실",
          "direction": "positive",
          "impact": 4.0
        }
      ],
      "topPositive": [
        "회사 실적과의 연결고리 확인",
        "AI 매출 기회와 FCF·부채·신용 부담이 동시에 존재",
        "회사 실적과의 연결고리 확인"
      ],
      "topNegative": [
        "클라우드 수요와 자본 부담 동시 확대"
      ],
      "nextChecks": [
        "다음 실적의 매출·EPS·마진",
        "공식 가이던스 대비 실제 매출 달성 여부",
        "핵심 고객 수요·CAPEX",
        "FCF와 부채·CAPEX 변화"
      ],
      "theses": [
        {
          "id": "growth",
          "name": "성장 Thesis",
          "statement": "매출·EPS 성장 전망이 유지되고 본업 수익성이 함께 개선된다.",
          "status": "strengthening",
          "score": 39.9,
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
          "score": -3.5,
          "confidence": 100,
          "falsificationRules": [
            "핵심 고객 이탈 또는 점유율 하락이 공식 수치로 확인",
            "부채 부담 상승과 사업 리스크 확대가 동시 발생"
          ]
        }
      ],
      "scenarios": {
        "bull": 37.1,
        "base": 38.1,
        "bear": 24.8
      },
      "alerts": [],
      "businessProfile": {
        "updatedAt": "2026-08-13",
        "customers": [
          "전세계 기업 데이터베이스·ERP 고객 - 오라클의 전통적 핵심 사업(레거시 강점)",
          "AI 인프라 대형 고객(OCI 클라우드) - 메타·엔비디아·오픈AI·록히드마틴·에어프랑스-KLM 등과 수십억달러 규모 장기 계약 체결. 특히 오픈AI 한 곳이 전체 미청구잔고(RPO)의 약 54%(추정 $3,000억)를 차지할 정도로 비중이 큼"
        ],
        "strengths": [
          "미청구잔고(RPO, 앞으로 받을 계약금액)가 2026 회계연도 말 $638B로 전년비 +363%, 분기 대비로도 $850억 증가 - 향후 매출 성장이 상당 부분 이미 계약으로 확보된 상태",
          "OCI(오라클 클라우드) 매출 +68% 성장, GPU 관련 매출은 세자릿수(100%대) 성장, 멀티클라우드 데이터베이스 사용량은 800% 넘게 급증"
        ],
        "risks": [
          "⚠️ RPO 중 오픈AI 한 회사 비중이 지나치게 커서(약 54%), 오픈AI의 계약 이행 능력이나 AI 투자 지속 여부에 오라클 미래 매출이 크게 좌우됨 - 고객 집중 리스크",
          "이 막대한 수주를 실제로 지어내려면(데이터센터 건설) 계속 빚을 내야 하고, 감원·신용등급 강등·CDS 급등까지 겹친 재무 부담 심화 상황 - 상세 내용은 아래 newsLog 참고"
        ],
        "sources": [
          {
            "title": "Oracle Q4 2026 Earnings: $638B Backlog Turns AI Cloud Growth into Funding Test (ERP Today)",
            "url": "https://erp.today/oracle-q4-2026-earnings-ai-cloud-backlog-funding/"
          },
          {
            "title": "Oracle Reports on June 10, and Its Cloud Backlog Could Be the Next Big Test for the AI Infrastructure Trade (The Motley Fool)",
            "url": "https://www.fool.com/investing/2026/06/08/oracle-reports-on-june-10-and-its-cloud-backlog-co/"
          },
          {
            "title": "Will Oracle's RPO Expansion Strengthen Long-Term Revenue Outlook? (Yahoo Finance)",
            "url": "https://finance.yahoo.com/news/oracles-rpo-expansion-strengthen-long-165600242.html"
          }
        ],
        "latestChanges": [
          {
            "headline": "9월 이전에 오라클 주식을 매입해야 합니까? 대답은 당신을 놀라게 할 수 있습니다.",
            "eventLabel": "장기 공급계약",
            "publishedAt": 1787508600,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=3d1cccd4fe41315a157b13f0f470600fd0876205c14ede0837ef75c37b002d65",
            "reason": "회사 실적과의 연결고리 확인"
          },
          {
            "headline": "아마존의 잉여현금흐름 (Free Cash Flow) 은 영업현금흐름 (Operating Cash Flow) 이 33% 상승하더라도 마이너스 76억 $ 를 기록했다. Gap AI Capex가 실제로 만들고 있습니다.",
            "eventLabel": "장기 공급계약",
            "publishedAt": 1787499300,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=a9905b210869231b722441eba4e31cff86108bf3179b3579bcc7fa5dfcd60758",
            "reason": "AI 매출 기회와 FCF·부채·신용 부담이 동시에 존재"
          },
          {
            "headline": "Oracle의 VA 계약이 170억 달러 증가했습니다.",
            "eventLabel": "주요 고객 계약",
            "publishedAt": 1787344885,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=b9983b40991e9ebf3fe564ca0e83bc6f35ad1292e859367d5059a557de848eb8",
            "reason": "회사 실적과의 연결고리 확인"
          },
          {
            "headline": "'애플은 법원의 체납금 판결 이후 아일랜드에 170억 달러의 세금을 납부했습니다' - Financial Times",
            "eventLabel": "규제·소송·수출 제한",
            "publishedAt": 1787301459,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=78ec50cf42fcc10fcff5bdf09a62da923d9804a1534ff1738bdbbea873a9474a",
            "reason": "클라우드 수요와 자본 부담 동시 확대"
          },
          {
            "headline": "Quantinuum-Oracle 파트너십이 엔터프라이즈 컴퓨팅에 미치는 영향",
            "eventLabel": "장기 공급계약",
            "publishedAt": 1787219040,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=26e39312b0a20c9b8e439281fdf5f2daa8121afdd5d8536f433547e1c3cc9c96",
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
      "guidanceTrackRecord": {
        "status": "collecting",
        "settledCount": 0,
        "metCount": 0,
        "hitRate": null,
        "confidenceAdjustment": 0.0,
        "worseningTwo": false,
        "recentOutcomes": [],
        "notice": "SEC Company Facts의 분기 매출만 회사 공식 가이던스와 대조합니다. 2개 결과 전에는 신뢰도에 반영하지 않습니다."
      },
      "valuationScenario": {
        "status": "available",
        "price": 148.87,
        "currentEps": 8.05313,
        "nextEps": 10.91494,
        "epsGrowth": 0.3554,
        "marketPe": 18.49,
        "conservative": 129.13,
        "base": 201.77,
        "optimistic": 312.75,
        "currentVsBase": -0.2622,
        "analystTargetMean": 246.42635,
        "analystTargetLow": 110.0,
        "analystTargetHigh": 400.0,
        "evidenceWeights": {
          "bull": 37.1,
          "base": 38.1,
          "bear": 24.8
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
          "asOf": 1787322925.8647835,
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
          "currentPrice": 142.07000732421875,
          "valuationGap": -0.2622,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787407899.9208522,
          "date": "2026-08-22",
          "fundamentalScore": 28.2,
          "confidence": 100,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "strengthening",
          "scenarioWeights": {
            "bull": 37.5,
            "base": 38.0,
            "bear": 24.5
          },
          "currentPrice": 146.47000122070312,
          "valuationGap": -0.2622,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787496888.8915975,
          "date": "2026-08-23",
          "fundamentalScore": 28.2,
          "confidence": 100,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "strengthening",
          "scenarioWeights": {
            "bull": 37.5,
            "base": 38.0,
            "bear": 24.5
          },
          "currentPrice": 146.47000122070312,
          "valuationGap": -0.2622,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787582269.4850764,
          "date": "2026-08-24",
          "fundamentalScore": 28.2,
          "confidence": 100,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "strengthening",
          "scenarioWeights": {
            "bull": 37.5,
            "base": 38.0,
            "bear": 24.5
          },
          "currentPrice": 146.47000122070312,
          "valuationGap": -0.2622,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787667920.4111497,
          "date": "2026-08-25",
          "fundamentalScore": 27.7,
          "confidence": 100,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "strengthening",
          "scenarioWeights": {
            "bull": 37.4,
            "base": 38.0,
            "bear": 24.6
          },
          "currentPrice": 142.4499969482422,
          "valuationGap": -0.2622,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787754142.7259922,
          "date": "2026-08-26",
          "fundamentalScore": 26.3,
          "confidence": 100,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "strengthening",
          "scenarioWeights": {
            "bull": 37.1,
            "base": 38.1,
            "bear": 24.8
          },
          "currentPrice": 144.75999450683594,
          "valuationGap": -0.2622,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787788668.347003,
          "date": "2026-08-27",
          "fundamentalScore": 26.3,
          "confidence": 100,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "strengthening",
          "scenarioWeights": {
            "bull": 37.1,
            "base": 38.1,
            "bear": 24.8
          },
          "currentPrice": 148.8699951171875,
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
          "asOf": 1787322925.8647835,
          "date": "2026-08-21",
          "overallStatus": "strengthening",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787407899.9208522,
          "date": "2026-08-22",
          "overallStatus": "strengthening",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787496888.8915975,
          "date": "2026-08-23",
          "overallStatus": "strengthening",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787582269.4850764,
          "date": "2026-08-24",
          "overallStatus": "strengthening",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787667920.4111497,
          "date": "2026-08-25",
          "overallStatus": "strengthening",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787754142.7259922,
          "date": "2026-08-26",
          "overallStatus": "strengthening",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787788668.347003,
          "date": "2026-08-27",
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
      "asOf": 1787788668.347003,
      "modelVersion": "fundamental-v1.3",
      "fundamentalScore": 9.4,
      "confidence": 100,
      "fundamentalSigma": null,
      "fundamentalSigmaProgress": {
        "status": "collecting",
        "collected": 7,
        "required": 8,
        "remaining": 1,
        "expectedReadyDate": "2026-08-28",
        "notice": "같은 KST 날짜의 반복 실행은 한 건으로 교체하며, 임의 과거 점수를 만들어 채우지 않습니다."
      },
      "priceSigma": 1.1,
      "priceDamage": 36.8,
      "fundamentalDamage": 0,
      "thesisDamage": 0,
      "thesisStatus": "intact",
      "damageRead": "현재 가격 변동과 펀더멘털 변화 사이에 큰 괴리는 확인되지 않았습니다.",
      "dimensions": {
        "growth": {
          "score": 8.533333133333334,
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
          "score": 4.423400000000001,
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
        "needsConfirmation": 4,
        "aiInferences": 5
      },
      "evidence": [
        {
          "headline": "CRM SEC Form 8-K 공식 제출",
          "eventLabel": "실적·재무 공식 공시",
          "publishedAt": 1787670000.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1108524/000110852426000187/crm-20260826.htm",
          "verificationStatus": "confirmed",
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기",
          "direction": "mixed",
          "impact": 0
        },
        {
          "headline": "Salesforce, 2분기 혼합 보고서 작성, 투자자들은 H2 가속화에 대해 회의적 태도 유지",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787570681,
          "sourceUrl": "https://finnhub.io/api/news?id=d3bde0ff5073e01d5f7d622876a639af648b59960068b47f82b6e23556dfc694",
          "verificationStatus": "needs_confirmation",
          "reason": "사업·실적 연결 경로 확인 필요",
          "direction": "positive",
          "impact": 2.0
        },
        {
          "headline": "Salesforce(CRM)는 AgentExchange에 코드 계약 관리 앱을 추가하지 않습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1787378897,
          "sourceUrl": "https://finnhub.io/api/news?id=e1d5fa24a1b5d9aae612b93d57781a8f53af8ce1888ad84da28487ab921cbb64",
          "verificationStatus": "needs_confirmation",
          "reason": "회사 실적과의 연결고리 확인",
          "direction": "positive",
          "impact": 4.0
        },
        {
          "headline": "Arista Networks vs. Salesforce: 2026년에는 어떤 기술 주식을 구매하는 것이 더 나은가요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1787361159,
          "sourceUrl": "https://finnhub.io/api/news?id=6ea1b2100a38d7a49a7bdb4e6a2dfa06eaba295f18ed95892b4ec945feb3a97f",
          "verificationStatus": "needs_confirmation",
          "reason": "회사 실적과의 연결고리 확인",
          "direction": "negative",
          "impact": -4.0
        },
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
        "사업·실적 연결 경로 확인 필요",
        "회사 실적과의 연결고리 확인",
        "사업·실적 연결 경로 확인 필요"
      ],
      "topNegative": [
        "회사 실적과의 연결고리 확인"
      ],
      "nextChecks": [
        "다음 실적의 매출·EPS·마진",
        "공식 가이던스 대비 실제 매출 달성 여부",
        "핵심 고객 수요·CAPEX",
        "FCF와 부채·CAPEX 변화"
      ],
      "theses": [
        {
          "id": "growth",
          "name": "성장 Thesis",
          "statement": "매출·EPS 성장 전망이 유지되고 본업 수익성이 함께 개선된다.",
          "status": "intact",
          "score": 8.5,
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
          "score": 27.9,
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
        "bull": 33.4,
        "base": 39.3,
        "bear": 27.3
      },
      "alerts": [],
      "businessProfile": {
        "updatedAt": "2026-08-13",
        "customers": [
          "영업·고객서비스 부서 - Sales Cloud(매출 비중 22%)·Service Cloud(24%, 최대 매출원) 사용 기업",
          "마케팅·커머스·통합분석 고객 - Marketing/Commerce Cloud(13%), Integration/Analytics(15%, Slack·Tableau·MuleSoft 포함)",
          "AI 에이전트 도입 기업 - 2025년 대대적 리브랜딩으로 전 제품군을 'Agentforce'(AI 자율 에이전트) 중심으로 재편 중"
        ],
        "strengths": [
          "여러 클라우드(영업·서비스·마케팅·커머스)에 걸친 매출 다각화 - 특정 제품 하나에 대한 의존도가 낮음",
          "구독 기반 매출 구조로 안정적 반복 매출(recurring revenue)",
          "Agentforce로 AI 에이전트를 전 제품에 결합하는 대규모 전환 진행 중 - 시장이 주목하는 차기 성장동력"
        ],
        "risks": [
          "⚠️ Agentforce가 기대만큼 빠르게 수익화될 수 있을지가 시장의 핵심 의문 - 8/26 실적 발표를 앞두고 주가가 크게 흔들리는 배경(상세는 아래 newsLog 참고)",
          "8/5 엔지니어링·고객성공 총괄 사장 사임 - 실행 리스크에 대한 불확실성 추가(아래 newsLog 참고)",
          "마이크로소프트 Dynamics 365, 허브스팟 등과 CRM·AI 에이전트 시장에서 경쟁 심화"
        ],
        "sources": [
          {
            "title": "Salesforce Revenue Breakdown By Segment (Bullfincher)",
            "url": "https://bullfincher.io/companies/salesforce/revenue-by-segment"
          },
          {
            "title": "Salesforce Agentforce Guide 2026: Products, AI Agents & Use Cases (Vantage Point)",
            "url": "https://vantagepoint.io/blog/sf/the-complete-guide-to-salesforces-agentforce-ecosystem-understanding-the-full-product-portfolio-in-2026"
          }
        ],
        "latestChanges": [
          {
            "headline": "CRM SEC Form 8-K 공식 제출",
            "eventLabel": "실적·재무 공식 공시",
            "publishedAt": 1787670000.0,
            "direction": "mixed",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1108524/000110852426000187/crm-20260826.htm",
            "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
          },
          {
            "headline": "Salesforce, 2분기 혼합 보고서 작성, 투자자들은 H2 가속화에 대해 회의적 태도 유지",
            "eventLabel": "AI·데이터센터 투자 변화",
            "publishedAt": 1787570681,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=d3bde0ff5073e01d5f7d622876a639af648b59960068b47f82b6e23556dfc694",
            "reason": "사업·실적 연결 경로 확인 필요"
          },
          {
            "headline": "Salesforce(CRM)는 AgentExchange에 코드 계약 관리 앱을 추가하지 않습니다.",
            "eventLabel": "주요 고객 계약",
            "publishedAt": 1787378897,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=e1d5fa24a1b5d9aae612b93d57781a8f53af8ce1888ad84da28487ab921cbb64",
            "reason": "회사 실적과의 연결고리 확인"
          },
          {
            "headline": "Arista Networks vs. Salesforce: 2026년에는 어떤 기술 주식을 구매하는 것이 더 나은가요?",
            "eventLabel": "규제·소송·수출 제한",
            "publishedAt": 1787361159,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=6ea1b2100a38d7a49a7bdb4e6a2dfa06eaba295f18ed95892b4ec945feb3a97f",
            "reason": "회사 실적과의 연결고리 확인"
          },
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
      "guidanceTrackRecord": {
        "status": "collecting",
        "settledCount": 0,
        "metCount": 0,
        "hitRate": null,
        "confidenceAdjustment": 0.0,
        "worseningTwo": false,
        "recentOutcomes": [],
        "notice": "SEC Company Facts의 분기 매출만 회사 공식 가이던스와 대조합니다. 2개 결과 전에는 신뢰도에 반영하지 않습니다."
      },
      "valuationScenario": {
        "status": "available",
        "price": 205.62,
        "currentEps": 14.13597,
        "nextEps": 15.51821,
        "epsGrowth": 0.0978,
        "marketPe": 14.55,
        "conservative": 144.46,
        "base": 225.73,
        "optimistic": 349.88,
        "currentVsBase": -0.0891,
        "analystTargetMean": 243.98425,
        "analystTargetLow": 160.0,
        "analystTargetHigh": 475.0,
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
          "asOf": 1787322925.8647835,
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
          "currentPrice": 205.42999267578125,
          "valuationGap": -0.0888,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787407899.9208522,
          "date": "2026-08-22",
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
          "currentPrice": 209.1699981689453,
          "valuationGap": -0.0888,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787496888.8915975,
          "date": "2026-08-23",
          "fundamentalScore": 9.1,
          "confidence": 95.0,
          "fundamentalDamage": 1.2,
          "thesisDamage": 0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 33.2,
            "base": 39.5,
            "bear": 27.3
          },
          "currentPrice": 209.1699981689453,
          "valuationGap": -0.0891,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787582269.4850764,
          "date": "2026-08-24",
          "fundamentalScore": 9.1,
          "confidence": 95.0,
          "fundamentalDamage": 1.2,
          "thesisDamage": 0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 33.2,
            "base": 39.5,
            "bear": 27.3
          },
          "currentPrice": 209.1699981689453,
          "valuationGap": -0.0891,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787667920.4111497,
          "date": "2026-08-25",
          "fundamentalScore": 8.5,
          "confidence": 100,
          "fundamentalDamage": 6.3,
          "thesisDamage": 7.0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 32.4,
            "base": 39.2,
            "bear": 28.4
          },
          "currentPrice": 209.05999755859375,
          "valuationGap": -0.0891,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787754142.7259922,
          "date": "2026-08-26",
          "fundamentalScore": 9.4,
          "confidence": 100,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 33.4,
            "base": 39.3,
            "bear": 27.3
          },
          "currentPrice": 205.69000244140625,
          "valuationGap": -0.0891,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787788668.347003,
          "date": "2026-08-27",
          "fundamentalScore": 9.4,
          "confidence": 100,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 33.4,
            "base": 39.3,
            "bear": 27.3
          },
          "currentPrice": 205.6199951171875,
          "valuationGap": -0.0891,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        }
      ],
      "thesisHistory": [
        {
          "asOf": 1787322925.8647835,
          "date": "2026-08-21",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787407899.9208522,
          "date": "2026-08-22",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787496888.8915975,
          "date": "2026-08-23",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787582269.4850764,
          "date": "2026-08-24",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787667920.4111497,
          "date": "2026-08-25",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787754142.7259922,
          "date": "2026-08-26",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787788668.347003,
          "date": "2026-08-27",
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
      "asOf": 1787788668.347003,
      "modelVersion": "fundamental-v1.3",
      "fundamentalScore": 35.2,
      "confidence": 95.0,
      "fundamentalSigma": null,
      "fundamentalSigmaProgress": {
        "status": "collecting",
        "collected": 7,
        "required": 8,
        "remaining": 1,
        "expectedReadyDate": "2026-08-28",
        "notice": "같은 KST 날짜의 반복 실행은 한 건으로 교체하며, 임의 과거 점수를 만들어 채우지 않습니다."
      },
      "priceSigma": 0.7,
      "priceDamage": 23.4,
      "fundamentalDamage": 0,
      "thesisDamage": 0,
      "thesisStatus": "intact",
      "damageRead": "현재 가격 변동과 펀더멘털 변화 사이에 큰 괴리는 확인되지 않았습니다.",
      "dimensions": {
        "growth": {
          "score": 33.82333366666666,
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
          "score": 0.0,
          "applicable": true
        },
        "customerDemand": {
          "score": 0.0,
          "applicable": true
        },
        "balanceSheet": {
          "score": 18.25,
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
          "headline": "트럼프, 워프 속도로 주식 거래 계속: 버크셔 매수, 메타 판매",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787496293,
          "sourceUrl": "https://finnhub.io/api/news?id=9e0bdc9badb8609b9eb8174cf6711e4131b5f18c8a220c9ca0c969805b9bdd83",
          "verificationStatus": "needs_confirmation",
          "reason": "사업·실적 연결 경로 확인 필요",
          "direction": "negative",
          "impact": -4.0
        },
        {
          "headline": "Sky News는 Arcturis Data와 Akrivia Health가 1억 4천만 파운드 규모의 거래로 합병하여 Palantir Technologies와의 NHS 환자 데이터 전쟁에서 기반을 확보할 것이라고 보도했습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1787290440,
          "sourceUrl": "https://finnhub.io/api/news?id=4ceea1716bfafab0a89f62ff7a87b851250c9392aaebbd538ea60cb7d4b0ebdb",
          "verificationStatus": "needs_confirmation",
          "reason": "회사 실적과의 연결고리 확인",
          "direction": "positive",
          "impact": 4.0
        },
        {
          "headline": "Palantir: Michael Burry의 풋 매수가 소매 투자자를 방해해서는 안 되는 이유",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787289244,
          "sourceUrl": "https://finnhub.io/api/news?id=fb6d0b4e229c71f8998c80f8371c3b91003c4401f6d439d64fb5bfb42f9d5191",
          "verificationStatus": "needs_confirmation",
          "reason": "사업·실적 연결 경로 확인 필요",
          "direction": "positive",
          "impact": 2.0
        }
      ],
      "topPositive": [
        "회사 실적과의 연결고리 확인",
        "사업·실적 연결 경로 확인 필요"
      ],
      "topNegative": [
        "사업·실적 연결 경로 확인 필요"
      ],
      "nextChecks": [
        "다음 실적의 매출·EPS·마진",
        "공식 가이던스 대비 실제 매출 달성 여부",
        "핵심 고객 수요·CAPEX",
        "FCF와 부채·CAPEX 변화"
      ],
      "theses": [
        {
          "id": "growth",
          "name": "성장 Thesis",
          "statement": "매출·EPS 성장 전망이 유지되고 본업 수익성이 함께 개선된다.",
          "status": "strengthening",
          "score": 33.8,
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
          "score": 62.0,
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
          "score": 6.1,
          "confidence": 95.0,
          "falsificationRules": [
            "핵심 고객 이탈 또는 점유율 하락이 공식 수치로 확인",
            "부채 부담 상승과 사업 리스크 확대가 동시 발생"
          ]
        }
      ],
      "scenarios": {
        "bull": 38.9,
        "base": 37.6,
        "bear": 23.5
      },
      "alerts": [],
      "businessProfile": {
        "updatedAt": "2026-08-13",
        "customers": [
          "미국·동맹국 정부기관(국방·정보·국경보안·의료·재난대응) - Gotham·Foundry 플랫폼 사용, 전통적으로 매출의 큰 축",
          "상업(민간기업) 고객 - AIP(AI 플랫폼) 출시 이후 급성장, 2026년 미국 상업 고객 수 전년비 +42%",
          "전체 고객사 수 2026년 약 1,166개 전망(2025년 954개) - 고객당 평균 매출은 약 $670만로 증가 추세"
        ],
        "strengths": [
          "정부·상업 두 축 모두 고성장 - 2026년 상업 매출 +89%(전망 $39억)로 정부 매출 +58%($38억)보다 더 빠르게 성장, 상업 비중이 처음으로 정부를 추월할 전망(51%)",
          "AIP(AI 플랫폼)가 정부·상업 양쪽에서 실적 변곡점 역할 - 도입 기업의 실제 업무 적용 사례가 빠르게 늘고 있음",
          "'Rule of 40'(매출성장률+이익률) 145%로 엔비디아·마이크론급 소수만 도달하는 수준(analystLog 참고)"
        ],
        "risks": [
          "⚠️ 매우 높은 밸류에이션이 핵심 리스크 - 트레일링 PER 150배 이상, 선행 PSR 40배 이상. 85~100배 선행 PER에서는 매출 성장률이 예상치를 10%p만 밑돌아도 배수가 100배→60배로 압축되며 주가 40% 하락 가능성이 있다는 분석이 있음",
          "고객 집중 리스크 - 전체 고객사는 125개 안팎(정부+상업)뿐이고 매출의 3분의 2가 상위 20개 고객에서 나옴. 대형 고객 하나를 잃으면 영향이 큼",
          "정부 계약 의존도가 높아 규제·예산 변화에 민감하고, 앤트로픽 등 민첩한 AI 경쟁사의 추격이 거세지는 중"
        ],
        "sources": [
          {
            "title": "Consensus shows Palantir's revenue shifting toward commercial segment (S&P Global)",
            "url": "https://www.spglobal.com/market-intelligence/en/news-insights/research/2026/06/consensus-shows-palantir-s-revenue-shifting-toward-commercial-segment"
          },
          {
            "title": "Palantir: 3 Reasons That Could Pressure The Stock Down To $100 (Seeking Alpha)",
            "url": "https://seekingalpha.com/article/4890388-palantir-3-reasons-that-could-pressure-the-stock"
          },
          {
            "title": "Palantir Q1 FY 2026 Revenue Beats Estimates, US Demand Drives Outlook Raise (Futurum Group)",
            "url": "https://futurumgroup.com/insights/palantir-q1-fy-2026-revenue-beats-estimates-us-demand-drives-outlook-raise/"
          }
        ],
        "latestChanges": [
          {
            "headline": "트럼프, 워프 속도로 주식 거래 계속: 버크셔 매수, 메타 판매",
            "eventLabel": "AI·데이터센터 투자 변화",
            "publishedAt": 1787496293,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=9e0bdc9badb8609b9eb8174cf6711e4131b5f18c8a220c9ca0c969805b9bdd83",
            "reason": "사업·실적 연결 경로 확인 필요"
          },
          {
            "headline": "Sky News는 Arcturis Data와 Akrivia Health가 1억 4천만 파운드 규모의 거래로 합병하여 Palantir Technologies와의 NHS 환자 데이터 전쟁에서 기반을 확보할 것이라고 보도했습니다.",
            "eventLabel": "주요 고객 계약",
            "publishedAt": 1787290440,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=4ceea1716bfafab0a89f62ff7a87b851250c9392aaebbd538ea60cb7d4b0ebdb",
            "reason": "회사 실적과의 연결고리 확인"
          },
          {
            "headline": "Palantir: Michael Burry의 풋 매수가 소매 투자자를 방해해서는 안 되는 이유",
            "eventLabel": "AI·데이터센터 투자 변화",
            "publishedAt": 1787289244,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=fb6d0b4e229c71f8998c80f8371c3b91003c4401f6d439d64fb5bfb42f9d5191",
            "reason": "사업·실적 연결 경로 확인 필요"
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
      "guidanceTrackRecord": {
        "status": "collecting",
        "settledCount": 0,
        "metCount": 0,
        "hitRate": null,
        "confidenceAdjustment": 0.0,
        "worseningTwo": false,
        "recentOutcomes": [],
        "notice": "SEC Company Facts의 분기 매출만 회사 공식 가이던스와 대조합니다. 2개 결과 전에는 신뢰도에 반영하지 않습니다."
      },
      "valuationScenario": {
        "status": "available",
        "price": 177.5,
        "currentEps": 1.60272,
        "nextEps": 2.31424,
        "epsGrowth": 0.4439,
        "marketPe": 110.75,
        "conservative": 164.03,
        "base": 256.3,
        "optimistic": 397.27,
        "currentVsBase": -0.3075,
        "analystTargetMean": 191.68,
        "analystTargetLow": 80.0,
        "analystTargetHigh": 255.0,
        "evidenceWeights": {
          "bull": 38.9,
          "base": 37.6,
          "bear": 23.5
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
          "asOf": 1787322925.8647835,
          "date": "2026-08-21",
          "fundamentalScore": 34.7,
          "confidence": 95.0,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 38.8,
            "base": 37.6,
            "bear": 23.6
          },
          "currentPrice": 173.9600067138672,
          "valuationGap": -0.3075,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787407899.9208522,
          "date": "2026-08-22",
          "fundamentalScore": 34.3,
          "confidence": 95.0,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 38.7,
            "base": 37.6,
            "bear": 23.7
          },
          "currentPrice": 179.94000244140625,
          "valuationGap": -0.3075,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787496888.8915975,
          "date": "2026-08-23",
          "fundamentalScore": 35.8,
          "confidence": 90.0,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "strengthening",
          "scenarioWeights": {
            "bull": 39.0,
            "base": 37.5,
            "bear": 23.5
          },
          "currentPrice": 179.94000244140625,
          "valuationGap": -0.3075,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787582269.4850764,
          "date": "2026-08-24",
          "fundamentalScore": 35.2,
          "confidence": 95.0,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 38.9,
            "base": 37.6,
            "bear": 23.5
          },
          "currentPrice": 179.94000244140625,
          "valuationGap": -0.3075,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787667920.4111497,
          "date": "2026-08-25",
          "fundamentalScore": 35.2,
          "confidence": 95.0,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 38.9,
            "base": 37.6,
            "bear": 23.5
          },
          "currentPrice": 175.88999938964844,
          "valuationGap": -0.3075,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787754142.7259922,
          "date": "2026-08-26",
          "fundamentalScore": 35.2,
          "confidence": 95.0,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 38.9,
            "base": 37.6,
            "bear": 23.5
          },
          "currentPrice": 172.72999572753906,
          "valuationGap": -0.3075,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787788668.347003,
          "date": "2026-08-27",
          "fundamentalScore": 35.2,
          "confidence": 95.0,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 38.9,
            "base": 37.6,
            "bear": 23.5
          },
          "currentPrice": 177.5,
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
          "asOf": 1787322925.8647835,
          "date": "2026-08-21",
          "overallStatus": "intact",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787407899.9208522,
          "date": "2026-08-22",
          "overallStatus": "intact",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787496888.8915975,
          "date": "2026-08-23",
          "overallStatus": "strengthening",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787582269.4850764,
          "date": "2026-08-24",
          "overallStatus": "intact",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787667920.4111497,
          "date": "2026-08-25",
          "overallStatus": "intact",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787754142.7259922,
          "date": "2026-08-26",
          "overallStatus": "intact",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787788668.347003,
          "date": "2026-08-27",
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
      "asOf": 1787788668.347003,
      "modelVersion": "fundamental-v1.3",
      "fundamentalScore": 22.9,
      "confidence": 100,
      "fundamentalSigma": null,
      "fundamentalSigmaProgress": {
        "status": "collecting",
        "collected": 7,
        "required": 8,
        "remaining": 1,
        "expectedReadyDate": "2026-08-28",
        "notice": "같은 KST 날짜의 반복 실행은 한 건으로 교체하며, 임의 과거 점수를 만들어 채우지 않습니다."
      },
      "priceSigma": -0.73,
      "priceDamage": 24.4,
      "fundamentalDamage": 0,
      "thesisDamage": 0,
      "thesisStatus": "strengthening",
      "damageRead": "현재 가격 변동과 펀더멘털 변화 사이에 큰 괴리는 확인되지 않았습니다.",
      "dimensions": {
        "growth": {
          "score": 49.55333266666667,
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
          "score": -9.799999999999999,
          "applicable": true
        },
        "customerDemand": {
          "score": 0.0,
          "applicable": true
        },
        "balanceSheet": {
          "score": -5.389700000000001,
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
        "confirmedFacts": 3,
        "credibleReports": 0,
        "needsConfirmation": 6,
        "aiInferences": 8
      },
      "evidence": [
        {
          "headline": "RBC Capital, Broadcom 부문에서 실적을 유지하고 목표 가격 400달러 유지",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1787734386,
          "sourceUrl": "https://finnhub.io/api/news?id=4481eba7a3af2264a31e545919a5f64097bc00f6a382588094477dc6abd03663",
          "verificationStatus": "needs_confirmation",
          "reason": "AI 컴퓨팅 수요 확대 가능성",
          "direction": "positive",
          "impact": 1.0
        },
        {
          "headline": "NVDA SEC Form 10-Q 공식 제출",
          "eventLabel": "정기 실적 공시",
          "publishedAt": 1787670000.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1045810/000104581026000075/nvda-20260726.htm",
          "verificationStatus": "confirmed",
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기",
          "direction": "mixed",
          "impact": 0
        },
        {
          "headline": "NVDA SEC Form 8-K 공식 제출",
          "eventLabel": "실적·재무 공식 공시",
          "publishedAt": 1787670000.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1045810/000104581026000073/nvda-20260826.htm",
          "verificationStatus": "confirmed",
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기",
          "direction": "mixed",
          "impact": 0
        },
        {
          "headline": "'OpenAI는 자사의 새로운 칩이 테스트에서 Nvidia 프로세서보다 성능이 뛰어날 수 있다고 주장합니다' - Bloomberg",
          "eventLabel": "경쟁사 기술·시장 진입",
          "publishedAt": 1787652827,
          "sourceUrl": "https://finnhub.io/api/news?id=903e5212809579008dc7e473dd0a14501e4d115a30dfe9b9eae22f6c1a3092ed",
          "verificationStatus": "needs_confirmation",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "direction": "negative",
          "impact": -4.0
        },
        {
          "headline": "Amazon 및 Microsoft에서 AI 투자가 성과를 내기 시작하면 SanDisk가 혜택을 볼 수 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787645530,
          "sourceUrl": "https://finnhub.io/api/news?id=4149fc64b4cd21b278e0a067b703e12566c3056dad0e555e5cc45b39bb8f51a4",
          "verificationStatus": "needs_confirmation",
          "reason": "AI 컴퓨팅 수요 확대 가능성",
          "direction": "positive",
          "impact": 2.0
        },
        {
          "headline": "Cowell은 여전히 Apple에 묶여 있지만 투자자들은 강력한 수입을 응원합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787593932,
          "sourceUrl": "https://finnhub.io/api/news?id=2f48d983bd7a3006b3e02d1bc4ccadf789ebd14740b2a1b1eea7f1de4f5449ee",
          "verificationStatus": "needs_confirmation",
          "reason": "AI 컴퓨팅 수요 확대 가능성",
          "direction": "positive",
          "impact": 2.0
        },
        {
          "headline": "Elon Musk Post On X \"SpaceX는 Nvidia와 협력하여 2028년에 상당한 규모로 내년 4분기에 궤도에 진입하기 위해 공간에 최적화된 Vera Rubin NVL72 시스템을 설계했습니다.\"",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1787578310,
          "sourceUrl": "https://finnhub.io/api/news?id=cd16d90ec914175a485d3782e9bf7670a2e2ea49a854ff220c4af8693fff3bda",
          "verificationStatus": "needs_confirmation",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "direction": "positive",
          "impact": 4.0
        },
        {
          "headline": "Nvidia Q2 미리보기: 비트의 가격이 책정되었지만 AI 투자에 대해 궁금한 점이 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787578175,
          "sourceUrl": "https://finnhub.io/api/news?id=2e89ef21adffa834d2233b744bf1c031a94c4326cda283b7f8d865627254cd23",
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
      "topNegative": [
        "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
      ],
      "nextChecks": [
        "다음 실적의 매출·EPS·마진",
        "공식 가이던스 대비 실제 매출 달성 여부",
        "핵심 고객 수요·CAPEX",
        "FCF와 부채·CAPEX 변화"
      ],
      "theses": [
        {
          "id": "growth",
          "name": "성장 Thesis",
          "statement": "매출·EPS 성장 전망이 유지되고 본업 수익성이 함께 개선된다.",
          "status": "strengthening",
          "score": 49.6,
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
          "score": -5.1,
          "confidence": 100,
          "falsificationRules": [
            "핵심 고객 이탈 또는 점유율 하락이 공식 수치로 확인",
            "부채 부담 상승과 사업 리스크 확대가 동시 발생"
          ]
        }
      ],
      "scenarios": {
        "bull": 36.3,
        "base": 38.4,
        "bear": 25.3
      },
      "alerts": [],
      "businessProfile": {
        "updatedAt": "2026-08-20",
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
            "headline": "RBC Capital, Broadcom 부문에서 실적을 유지하고 목표 가격 400달러 유지",
            "eventLabel": "애널리스트 목표주가 변경",
            "publishedAt": 1787734386,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=4481eba7a3af2264a31e545919a5f64097bc00f6a382588094477dc6abd03663",
            "reason": "AI 컴퓨팅 수요 확대 가능성"
          },
          {
            "headline": "NVDA SEC Form 10-Q 공식 제출",
            "eventLabel": "정기 실적 공시",
            "publishedAt": 1787670000.0,
            "direction": "mixed",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1045810/000104581026000075/nvda-20260726.htm",
            "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
          },
          {
            "headline": "NVDA SEC Form 8-K 공식 제출",
            "eventLabel": "실적·재무 공식 공시",
            "publishedAt": 1787670000.0,
            "direction": "mixed",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1045810/000104581026000073/nvda-20260826.htm",
            "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
          },
          {
            "headline": "'OpenAI는 자사의 새로운 칩이 테스트에서 Nvidia 프로세서보다 성능이 뛰어날 수 있다고 주장합니다' - Bloomberg",
            "eventLabel": "경쟁사 기술·시장 진입",
            "publishedAt": 1787652827,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=903e5212809579008dc7e473dd0a14501e4d115a30dfe9b9eae22f6c1a3092ed",
            "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
          },
          {
            "headline": "Amazon 및 Microsoft에서 AI 투자가 성과를 내기 시작하면 SanDisk가 혜택을 볼 수 있습니다.",
            "eventLabel": "AI·데이터센터 투자 변화",
            "publishedAt": 1787645530,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=4149fc64b4cd21b278e0a067b703e12566c3056dad0e555e5cc45b39bb8f51a4",
            "reason": "AI 컴퓨팅 수요 확대 가능성"
          },
          {
            "headline": "Cowell은 여전히 Apple에 묶여 있지만 투자자들은 강력한 수입을 응원합니다.",
            "eventLabel": "AI·데이터센터 투자 변화",
            "publishedAt": 1787593932,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=2f48d983bd7a3006b3e02d1bc4ccadf789ebd14740b2a1b1eea7f1de4f5449ee",
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
      "guidanceTrackRecord": {
        "status": "collecting",
        "settledCount": 0,
        "metCount": 0,
        "hitRate": null,
        "confidenceAdjustment": 0.0,
        "worseningTwo": false,
        "recentOutcomes": [],
        "notice": "SEC Company Facts의 분기 매출만 회사 공식 가이던스와 대조합니다. 2개 결과 전에는 신뢰도에 반영하지 않습니다."
      },
      "valuationScenario": {
        "status": "available",
        "price": 209.66,
        "currentEps": 9.01734,
        "nextEps": 13.041,
        "epsGrowth": 0.4462,
        "marketPe": 23.25,
        "conservative": 194.06,
        "base": 303.21,
        "optimistic": 469.98,
        "currentVsBase": -0.3085,
        "analystTargetMean": 304.72882,
        "analystTargetLow": 180.0,
        "analystTargetHigh": 500.0,
        "evidenceWeights": {
          "bull": 36.3,
          "base": 38.4,
          "bear": 25.3
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
          "asOf": 1787322925.8647835,
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
          "currentPrice": 216.85000610351562,
          "valuationGap": -0.3072,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787407899.9208522,
          "date": "2026-08-22",
          "fundamentalScore": 27.6,
          "confidence": 100,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "strengthening",
          "scenarioWeights": {
            "bull": 37.3,
            "base": 38.1,
            "bear": 24.6
          },
          "currentPrice": 214.72000122070312,
          "valuationGap": -0.3072,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787496888.8915975,
          "date": "2026-08-23",
          "fundamentalScore": 26.3,
          "confidence": 100,
          "fundamentalDamage": 0,
          "thesisDamage": 21.0,
          "thesisStatus": "strengthening",
          "scenarioWeights": {
            "bull": 34.6,
            "base": 37.5,
            "bear": 27.9
          },
          "currentPrice": 214.72000122070312,
          "valuationGap": -0.3085,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787582269.4850764,
          "date": "2026-08-24",
          "fundamentalScore": 24.5,
          "confidence": 100,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "strengthening",
          "scenarioWeights": {
            "bull": 36.7,
            "base": 38.2,
            "bear": 25.1
          },
          "currentPrice": 214.72000122070312,
          "valuationGap": -0.3085,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787667920.4111497,
          "date": "2026-08-25",
          "fundamentalScore": 24.4,
          "confidence": 100,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "strengthening",
          "scenarioWeights": {
            "bull": 36.6,
            "base": 38.3,
            "bear": 25.1
          },
          "currentPrice": 208.47999572753906,
          "valuationGap": -0.3085,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787754142.7259922,
          "date": "2026-08-26",
          "fundamentalScore": 22.9,
          "confidence": 100,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "strengthening",
          "scenarioWeights": {
            "bull": 36.3,
            "base": 38.4,
            "bear": 25.3
          },
          "currentPrice": 213.0500030517578,
          "valuationGap": -0.3085,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787788668.347003,
          "date": "2026-08-27",
          "fundamentalScore": 22.9,
          "confidence": 100,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "strengthening",
          "scenarioWeights": {
            "bull": 36.3,
            "base": 38.4,
            "bear": 25.3
          },
          "currentPrice": 209.66000366210938,
          "valuationGap": -0.3085,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        }
      ],
      "thesisHistory": [
        {
          "asOf": 1787322925.8647835,
          "date": "2026-08-21",
          "overallStatus": "strengthening",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787407899.9208522,
          "date": "2026-08-22",
          "overallStatus": "strengthening",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787496888.8915975,
          "date": "2026-08-23",
          "overallStatus": "strengthening",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787582269.4850764,
          "date": "2026-08-24",
          "overallStatus": "strengthening",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787667920.4111497,
          "date": "2026-08-25",
          "overallStatus": "strengthening",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787754142.7259922,
          "date": "2026-08-26",
          "overallStatus": "strengthening",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787788668.347003,
          "date": "2026-08-27",
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
      "asOf": 1787788668.347003,
      "modelVersion": "fundamental-v1.3",
      "fundamentalScore": 39.3,
      "confidence": 100,
      "fundamentalSigma": null,
      "fundamentalSigmaProgress": {
        "status": "collecting",
        "collected": 7,
        "required": 8,
        "remaining": 1,
        "expectedReadyDate": "2026-08-28",
        "notice": "같은 KST 날짜의 반복 실행은 한 건으로 교체하며, 임의 과거 점수를 만들어 채우지 않습니다."
      },
      "priceSigma": -0.14,
      "priceDamage": 4.7,
      "fundamentalDamage": 0,
      "thesisDamage": 0,
      "thesisStatus": "strengthening",
      "damageRead": "현재 가격 변동과 펀더멘털 변화 사이에 큰 괴리는 확인되지 않았습니다.",
      "dimensions": {
        "growth": {
          "score": 78.990002,
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
          "score": 9.068000000000001,
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
          "headline": "RBC Capital, Broadcom 부문에서 실적을 유지하고 목표 가격 400달러 유지",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1787734386,
          "sourceUrl": "https://finnhub.io/api/news?id=4481eba7a3af2264a31e545919a5f64097bc00f6a382588094477dc6abd03663",
          "verificationStatus": "needs_confirmation",
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성",
          "direction": "positive",
          "impact": 1.0
        },
        {
          "headline": "Amazon 및 Microsoft에서 AI 투자가 성과를 내기 시작하면 SanDisk가 혜택을 볼 수 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787645530,
          "sourceUrl": "https://finnhub.io/api/news?id=4149fc64b4cd21b278e0a067b703e12566c3056dad0e555e5cc45b39bb8f51a4",
          "verificationStatus": "needs_confirmation",
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성",
          "direction": "positive",
          "impact": 2.0
        },
        {
          "headline": "Cowell은 여전히 Apple에 묶여 있지만 투자자들은 강력한 수입을 응원합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787593932,
          "sourceUrl": "https://finnhub.io/api/news?id=2f48d983bd7a3006b3e02d1bc4ccadf789ebd14740b2a1b1eea7f1de4f5449ee",
          "verificationStatus": "needs_confirmation",
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성",
          "direction": "positive",
          "impact": 2.0
        },
        {
          "headline": "Nvidia Q2 미리보기: 비트의 가격이 책정되었지만 AI 투자에 대해 궁금한 점이 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787578175,
          "sourceUrl": "https://finnhub.io/api/news?id=2e89ef21adffa834d2233b744bf1c031a94c4326cda283b7f8d865627254cd23",
          "verificationStatus": "needs_confirmation",
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성",
          "direction": "positive",
          "impact": 2.0
        },
        {
          "headline": "Salesforce, 2분기 혼합 보고서 작성, 투자자들은 H2 가속화에 대해 회의적 태도 유지",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787570681,
          "sourceUrl": "https://finnhub.io/api/news?id=d3bde0ff5073e01d5f7d622876a639af648b59960068b47f82b6e23556dfc694",
          "verificationStatus": "needs_confirmation",
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성",
          "direction": "positive",
          "impact": 2.0
        },
        {
          "headline": "엔비디아: AI 칩과 재무화 전략을 모두 갖춘 디스럽터",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787569791,
          "sourceUrl": "https://finnhub.io/api/news?id=e0665b2f98336b15334e7573b52b4a913863de3d52074a520fe3e0acca62154f",
          "verificationStatus": "needs_confirmation",
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성",
          "direction": "positive",
          "impact": 2.0
        },
        {
          "headline": "Broadcom: $ 1,000억의 AI 수익은 물어볼 것이 많습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787562824,
          "sourceUrl": "https://finnhub.io/api/news?id=d6581f1a65860a5b7f92df7eebf715ff68f6df0ca68e08e235901cb8678b7c9a",
          "verificationStatus": "needs_confirmation",
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성",
          "direction": "positive",
          "impact": 2.0
        },
        {
          "headline": "AMD는 TSMC와 함께 첨단 칩 패키징을 구축하기 위해 대만에 $ 100억 이상을 투자하고 있습니다. Lisa Su가 실제로 그 돈으로 구매하는 것은 다음과 같습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787503800,
          "sourceUrl": "https://finnhub.io/api/news?id=7b88ad01664211237a7e92988a4351927f4bb52466ecdbb4a762bbe0ffa7ade1",
          "verificationStatus": "needs_confirmation",
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성",
          "direction": "positive",
          "impact": 2.0
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
        "공식 가이던스 대비 실제 매출 달성 여부",
        "핵심 고객 수요·CAPEX",
        "FCF와 부채·CAPEX 변화"
      ],
      "theses": [
        {
          "id": "growth",
          "name": "성장 Thesis",
          "statement": "매출·EPS 성장 전망이 유지되고 본업 수익성이 함께 개선된다.",
          "status": "strengthening",
          "score": 79.0,
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
          "score": 3.0,
          "confidence": 100,
          "falsificationRules": [
            "핵심 고객 이탈 또는 점유율 하락이 공식 수치로 확인",
            "부채 부담 상승과 사업 리스크 확대가 동시 발생"
          ]
        }
      ],
      "scenarios": {
        "bull": 40.0,
        "base": 37.1,
        "bear": 22.9
      },
      "alerts": [],
      "businessProfile": {
        "updatedAt": "2026-08-20",
        "customers": [
          "클라우드·AI 기업(데이터센터 부문, 매출 최대 비중) - EPYC 서버CPU·Instinct AI가속기, 메타·오픈AI·오라클 등에 'Helios' AI시스템 출하 시작(newsLog 참고)",
          "PC 제조사·소비자(클라이언트 부문) - Ryzen 프로세서",
          "게임기 제조사(게이밍 부문) - Radeon GPU + 콘솔용 반주문형(세미커스텀) 칩",
          "산업·통신 고객(임베디드 부문) - 적응형·임베디드 컴퓨팅 플랫폼"
        ],
        "strengths": [
          "데이터센터 매출이 압도적으로 성장(2026 2분기 +107% YoY, $67억) - 전체 성장을 견인하는 핵심 엔진",
          "클라이언트(PC) 부문도 견조(2분기 +23%) - 데이터센터 한 곳에 의존하지 않는 사업 균형",
          "엔터프라이즈 신규 고객 확대 중(금융·헬스케어·산업·디지털인프라 분야) - 대형 고객 외 중견기업까지 저변 확대"
        ],
        "risks": [
          "⚠️ 어닝비트에도 주가가 하락하는 패턴 반복 - 이미 높은 기대치가 선반영돼 있다는 신호(상세는 아래 newsLog 참고)",
          "게이밍 부문 매출 감소(2분기 -31%, 반주문형 매출 감소가 원인) - 데이터센터 외 사업의 변동성",
          "엔비디아라는 압도적 1위 경쟁자가 있는 AI가속기 시장에서 점유율 확대가 관건"
        ],
        "sources": [
          {
            "title": "AMD Q2 2026 slides: data center revenue doubles, stock falls after hours (Investing.com)",
            "url": "https://www.investing.com/news/company-news/amd-q2-2026-slides-data-center-revenue-doubles-stock-falls-after-hours-93CH-4836240"
          },
          {
            "title": "AMD Reports Second Quarter 2026 Financial Results (AMD IR, 공식)",
            "url": "https://ir.amd.com/news-events/press-releases/detail/1295/amd-reports-second-quarter-2026-financial-results"
          }
        ],
        "latestChanges": [
          {
            "headline": "RBC Capital, Broadcom 부문에서 실적을 유지하고 목표 가격 400달러 유지",
            "eventLabel": "애널리스트 목표주가 변경",
            "publishedAt": 1787734386,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=4481eba7a3af2264a31e545919a5f64097bc00f6a382588094477dc6abd03663",
            "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
          },
          {
            "headline": "Amazon 및 Microsoft에서 AI 투자가 성과를 내기 시작하면 SanDisk가 혜택을 볼 수 있습니다.",
            "eventLabel": "AI·데이터센터 투자 변화",
            "publishedAt": 1787645530,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=4149fc64b4cd21b278e0a067b703e12566c3056dad0e555e5cc45b39bb8f51a4",
            "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
          },
          {
            "headline": "Cowell은 여전히 Apple에 묶여 있지만 투자자들은 강력한 수입을 응원합니다.",
            "eventLabel": "AI·데이터센터 투자 변화",
            "publishedAt": 1787593932,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=2f48d983bd7a3006b3e02d1bc4ccadf789ebd14740b2a1b1eea7f1de4f5449ee",
            "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
          },
          {
            "headline": "Nvidia Q2 미리보기: 비트의 가격이 책정되었지만 AI 투자에 대해 궁금한 점이 있습니다.",
            "eventLabel": "AI·데이터센터 투자 변화",
            "publishedAt": 1787578175,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=2e89ef21adffa834d2233b744bf1c031a94c4326cda283b7f8d865627254cd23",
            "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
          },
          {
            "headline": "Salesforce, 2분기 혼합 보고서 작성, 투자자들은 H2 가속화에 대해 회의적 태도 유지",
            "eventLabel": "AI·데이터센터 투자 변화",
            "publishedAt": 1787570681,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=d3bde0ff5073e01d5f7d622876a639af648b59960068b47f82b6e23556dfc694",
            "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
          },
          {
            "headline": "엔비디아: AI 칩과 재무화 전략을 모두 갖춘 디스럽터",
            "eventLabel": "AI·데이터센터 투자 변화",
            "publishedAt": 1787569791,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=e0665b2f98336b15334e7573b52b4a913863de3d52074a520fe3e0acca62154f",
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
      "guidanceTrackRecord": {
        "status": "collecting",
        "settledCount": 0,
        "metCount": 0,
        "hitRate": null,
        "confidenceAdjustment": 0.0,
        "worseningTwo": false,
        "recentOutcomes": [],
        "notice": "SEC Company Facts의 분기 매출만 회사 공식 가이던스와 대조합니다. 2개 결과 전에는 신뢰도에 반영하지 않습니다."
      },
      "valuationScenario": {
        "status": "available",
        "price": 480.93,
        "currentEps": 7.56116,
        "nextEps": 15.48597,
        "epsGrowth": 1.0481,
        "marketPe": 63.61,
        "conservative": 630.39,
        "base": 984.99,
        "optimistic": 1526.73,
        "currentVsBase": -0.5117,
        "analystTargetMean": 613.0917,
        "analystTargetLow": 365.0,
        "analystTargetHigh": 1250.0,
        "evidenceWeights": {
          "bull": 40.0,
          "base": 37.1,
          "bear": 22.9
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
          "asOf": 1787322925.8647835,
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
          "currentPrice": 469.4599914550781,
          "valuationGap": -0.5111,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787407899.9208522,
          "date": "2026-08-22",
          "fundamentalScore": 38.1,
          "confidence": 100,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 39.7,
            "base": 37.3,
            "bear": 23.0
          },
          "currentPrice": 473.25,
          "valuationGap": -0.5111,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787496888.8915975,
          "date": "2026-08-23",
          "fundamentalScore": 38.1,
          "confidence": 100,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 39.7,
            "base": 37.3,
            "bear": 23.0
          },
          "currentPrice": 473.25,
          "valuationGap": -0.5117,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787582269.4850764,
          "date": "2026-08-24",
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
          "currentPrice": 473.25,
          "valuationGap": -0.5117,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787667920.4111497,
          "date": "2026-08-25",
          "fundamentalScore": 39.3,
          "confidence": 100,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "strengthening",
          "scenarioWeights": {
            "bull": 40.0,
            "base": 37.1,
            "bear": 22.9
          },
          "currentPrice": 456.7449951171875,
          "valuationGap": -0.5117,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787754142.7259922,
          "date": "2026-08-26",
          "fundamentalScore": 39.3,
          "confidence": 100,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "strengthening",
          "scenarioWeights": {
            "bull": 40.0,
            "base": 37.1,
            "bear": 22.9
          },
          "currentPrice": 479.17999267578125,
          "valuationGap": -0.5117,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787788668.347003,
          "date": "2026-08-27",
          "fundamentalScore": 39.3,
          "confidence": 100,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "strengthening",
          "scenarioWeights": {
            "bull": 40.0,
            "base": 37.1,
            "bear": 22.9
          },
          "currentPrice": 480.92999267578125,
          "valuationGap": -0.5117,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        }
      ],
      "thesisHistory": [
        {
          "asOf": 1787322925.8647835,
          "date": "2026-08-21",
          "overallStatus": "strengthening",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787407899.9208522,
          "date": "2026-08-22",
          "overallStatus": "intact",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787496888.8915975,
          "date": "2026-08-23",
          "overallStatus": "intact",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787582269.4850764,
          "date": "2026-08-24",
          "overallStatus": "strengthening",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787667920.4111497,
          "date": "2026-08-25",
          "overallStatus": "strengthening",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787754142.7259922,
          "date": "2026-08-26",
          "overallStatus": "strengthening",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787788668.347003,
          "date": "2026-08-27",
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
      "asOf": 1787788668.347003,
      "modelVersion": "fundamental-v1.3",
      "fundamentalScore": 22.0,
      "confidence": 100,
      "fundamentalSigma": null,
      "fundamentalSigmaProgress": {
        "status": "collecting",
        "collected": 7,
        "required": 8,
        "remaining": 1,
        "expectedReadyDate": "2026-08-28",
        "notice": "같은 KST 날짜의 반복 실행은 한 건으로 교체하며, 임의 과거 점수를 만들어 채우지 않습니다."
      },
      "priceSigma": -1.51,
      "priceDamage": 50.2,
      "fundamentalDamage": 100,
      "thesisDamage": 100,
      "thesisStatus": "damaged",
      "damageRead": "현재 가격 변동과 펀더멘털 변화 사이에 큰 괴리는 확인되지 않았습니다.",
      "dimensions": {
        "growth": {
          "score": 43.736668,
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
          "score": -34.300000000000004,
          "applicable": true
        },
        "customerDemand": {
          "score": -7.28,
          "applicable": true
        },
        "balanceSheet": {
          "score": -1.511800000000001,
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
          "headline": "RBC Capital, Broadcom 부문에서 실적을 유지하고 목표 가격 400달러 유지",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1787734386,
          "sourceUrl": "https://finnhub.io/api/news?id=4481eba7a3af2264a31e545919a5f64097bc00f6a382588094477dc6abd03663",
          "verificationStatus": "needs_confirmation",
          "reason": "사업·실적 연결 경로 확인 필요",
          "direction": "positive",
          "impact": 1.0
        },
        {
          "headline": "성능 비교: Broadcom과 반도체 및 반도체 장비 산업의 경쟁업체",
          "eventLabel": "경쟁사 기술·시장 진입",
          "publishedAt": 1787723914,
          "sourceUrl": "https://finnhub.io/api/news?id=94ef2ff6f34b60cb54311b1a8b97f72dfb3c8740b26914dc9c404085950c2192",
          "verificationStatus": "needs_confirmation",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "direction": "negative",
          "impact": -4.0
        },
        {
          "headline": "Broadcom: 대규모 벤더 자금 조달",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1787678675,
          "sourceUrl": "https://finnhub.io/api/news?id=1e3a378c6c5ede2d5185cdc9938738b11f392691a0fd607ae87896267a54b8a3",
          "verificationStatus": "needs_confirmation",
          "reason": "회사 실적과의 연결고리 확인",
          "direction": "negative",
          "impact": -5.0
        },
        {
          "headline": "Broadcom 3분기 실적 미리보기: 지속적인 마진 계약이 확인됨",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1787666784,
          "sourceUrl": "https://finnhub.io/api/news?id=47b43a5df59caa71cc5d7b2540dd8cfd706d3d6eee70d159cd692ca42ac81686",
          "verificationStatus": "needs_confirmation",
          "reason": "회사 실적과의 연결고리 확인",
          "direction": "positive",
          "impact": 4.0
        },
        {
          "headline": "Broadcom: $ 1,000억의 AI 수익은 물어볼 것이 많습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787562824,
          "sourceUrl": "https://finnhub.io/api/news?id=d6581f1a65860a5b7f92df7eebf715ff68f6df0ca68e08e235901cb8678b7c9a",
          "verificationStatus": "needs_confirmation",
          "reason": "사업·실적 연결 경로 확인 필요",
          "direction": "positive",
          "impact": 2.0
        },
        {
          "headline": "Google은 Marvell의 칩 구매에 대해 Marvell 주식 영장으로 돈을 받고 있습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1787374021,
          "sourceUrl": "https://finnhub.io/api/news?id=6caf38ab8ba9a2f6e73801672417a6805cfa580a5d37e9b2fab25f94c2f75c24",
          "verificationStatus": "needs_confirmation",
          "reason": "Google 관련 고객 집중도와 AI 커스텀 실리콘 경쟁 심화 가능성",
          "direction": "negative",
          "impact": -5.0
        },
        {
          "headline": "Broadcom: 시장에는 이것이 잘못되었습니다",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1787371290,
          "sourceUrl": "https://finnhub.io/api/news?id=c958e6fc4f170f0735375bb2c1d20177889e3f3acf7b82f35c7b194ecc6ac73a",
          "verificationStatus": "needs_confirmation",
          "reason": "회사 실적과의 연결고리 확인",
          "direction": "negative",
          "impact": -4.0
        },
        {
          "headline": "Broadcom(AVGO)은 Google이 Marvell과 AI 칩 관계를 확장한 후 6.2% 하락했습니다. - 변경된 사항",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787353957,
          "sourceUrl": "https://finnhub.io/api/news?id=385f87dc5a3077a001a300dcab06754fae86880aa05bd125bcc9fb850f436b75",
          "verificationStatus": "needs_confirmation",
          "reason": "Google 관련 고객 집중도와 AI 커스텀 실리콘 경쟁 심화 가능성",
          "direction": "negative",
          "impact": -4.0
        }
      ],
      "topPositive": [
        "사업·실적 연결 경로 확인 필요",
        "회사 실적과의 연결고리 확인",
        "사업·실적 연결 경로 확인 필요"
      ],
      "topNegative": [
        "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
        "회사 실적과의 연결고리 확인",
        "Google 관련 고객 집중도와 AI 커스텀 실리콘 경쟁 심화 가능성"
      ],
      "nextChecks": [
        "다음 실적의 매출·EPS·마진",
        "공식 가이던스 대비 실제 매출 달성 여부",
        "핵심 고객 수요·CAPEX",
        "FCF와 부채·CAPEX 변화"
      ],
      "theses": [
        {
          "id": "growth",
          "name": "성장 Thesis",
          "statement": "매출·EPS 성장 전망이 유지되고 본업 수익성이 함께 개선된다.",
          "status": "strengthening",
          "score": 43.7,
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
          "score": -14.4,
          "confidence": 100,
          "falsificationRules": [
            "핵심 고객 이탈 또는 점유율 하락이 공식 수치로 확인",
            "부채 부담 상승과 사업 리스크 확대가 동시 발생"
          ]
        }
      ],
      "scenarios": {
        "bull": 24.4,
        "base": 35.5,
        "bear": 40.1
      },
      "alerts": [],
      "businessProfile": {
        "updatedAt": "2026-08-20",
        "customers": [
          "클라우드·하이퍼스케일러(반도체 부문 최대 고객) - AI 커스텀칩(맞춤형 ASIC/TPU류) 설계, 핵심 고객사 단 6곳에 집중",
          "통신사·네트워크 장비사 - 이더넷 스위칭/라우팅 ASIC, 무선(5G)·광대역 부품",
          "기업 IT 부서(VMware, 2023년 인수) - 가상화·프라이빗클라우드 소프트웨어, AI 워크로드 확장용 VMware Cloud Foundation"
        ],
        "strengths": [
          "AI 반도체 매출 급성장(2026 1분기 +106% YoY $84억, 3분기 가이던스 $160억·+200%대) - 커스텀 AI가속기·AI네트워킹 양쪽에서 고성장",
          "VMware 인수로 소프트웨어 매출 안정화(2분기 약 $72억 전망) - 반도체 사이클 변동성을 완화하는 역할",
          "반도체(팹리스 설계) + 소프트웨어(인프라) 두 축의 수익 다각화"
        ],
        "risks": [
          "⚠️ 고객 집중 리스크가 매우 큼 - AI 매출 대부분이 핵심 고객 단 6곳에 의존, 유통사 한 곳이 매출의 42%·상위 5개 고객이 약 50%를 차지",
          "⚠️ 2026-08-19 실현: 구글이 마벨과도 TPU 커스텀칩 계약을 체결하며 브로드컴의 단독 공급 지위가 깨짐 - 자세한 내용은 아래 newsLog 참고",
          "커스텀칩(TPU류) 비중이 커질수록 마진 압박 우려, 밸류에이션도 부담스러운 수준(선행 PER 약 39배)"
        ],
        "sources": [
          {
            "title": "The Real Risk Inside Broadcom Stock (Trefis)",
            "url": "https://www.trefis.com/stock/avgo/articles-v3/607057/the-real-risk-inside-broadcom-stock/2026-07-14"
          },
          {
            "title": "Broadcom Q2 FY 2026: VMware Stability Supports AI-Led Semiconductor Expansion (Futurum Group)",
            "url": "https://futurumgroup.com/insights/broadcom-q2-fy-2026-vmware-stability-supports-ai-led-semiconductor-expansion/"
          }
        ],
        "latestChanges": [
          {
            "headline": "RBC Capital, Broadcom 부문에서 실적을 유지하고 목표 가격 400달러 유지",
            "eventLabel": "애널리스트 목표주가 변경",
            "publishedAt": 1787734386,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=4481eba7a3af2264a31e545919a5f64097bc00f6a382588094477dc6abd03663",
            "reason": "사업·실적 연결 경로 확인 필요"
          },
          {
            "headline": "성능 비교: Broadcom과 반도체 및 반도체 장비 산업의 경쟁업체",
            "eventLabel": "경쟁사 기술·시장 진입",
            "publishedAt": 1787723914,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=94ef2ff6f34b60cb54311b1a8b97f72dfb3c8740b26914dc9c404085950c2192",
            "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
          },
          {
            "headline": "Broadcom: 대규모 벤더 자금 조달",
            "eventLabel": "워런트·신주·희석 가능성",
            "publishedAt": 1787678675,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=1e3a378c6c5ede2d5185cdc9938738b11f392691a0fd607ae87896267a54b8a3",
            "reason": "회사 실적과의 연결고리 확인"
          },
          {
            "headline": "Broadcom 3분기 실적 미리보기: 지속적인 마진 계약이 확인됨",
            "eventLabel": "주요 고객 계약",
            "publishedAt": 1787666784,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=47b43a5df59caa71cc5d7b2540dd8cfd706d3d6eee70d159cd692ca42ac81686",
            "reason": "회사 실적과의 연결고리 확인"
          },
          {
            "headline": "Broadcom: $ 1,000억의 AI 수익은 물어볼 것이 많습니다.",
            "eventLabel": "AI·데이터센터 투자 변화",
            "publishedAt": 1787562824,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=d6581f1a65860a5b7f92df7eebf715ff68f6df0ca68e08e235901cb8678b7c9a",
            "reason": "사업·실적 연결 경로 확인 필요"
          },
          {
            "headline": "Google은 Marvell의 칩 구매에 대해 Marvell 주식 영장으로 돈을 받고 있습니다.",
            "eventLabel": "워런트·신주·희석 가능성",
            "publishedAt": 1787374021,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=6caf38ab8ba9a2f6e73801672417a6805cfa580a5d37e9b2fab25f94c2f75c24",
            "reason": "Google 관련 고객 집중도와 AI 커스텀 실리콘 경쟁 심화 가능성"
          }
        ],
        "status": "available",
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
      "guidanceTrackRecord": {
        "status": "collecting",
        "settledCount": 0,
        "metCount": 0,
        "hitRate": null,
        "confidenceAdjustment": 0.0,
        "worseningTwo": false,
        "recentOutcomes": [],
        "notice": "SEC Company Facts의 분기 매출만 회사 공식 가이던스와 대조합니다. 2개 결과 전에는 신뢰도에 반영하지 않습니다."
      },
      "valuationScenario": {
        "status": "available",
        "price": 355.59,
        "currentEps": 11.62853,
        "nextEps": 19.50413,
        "epsGrowth": 0.6773,
        "marketPe": 30.58,
        "conservative": 381.71,
        "base": 596.42,
        "optimistic": 924.45,
        "currentVsBase": -0.4038,
        "analystTargetMean": 526.30005,
        "analystTargetLow": 215.88,
        "analystTargetHigh": 675.0,
        "evidenceWeights": {
          "bull": 24.4,
          "base": 35.5,
          "bear": 40.1
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
          "asOf": 1787322925.8647835,
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
          "currentPrice": 364.0299987792969,
          "valuationGap": -0.4048,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "weakening"
          }
        },
        {
          "asOf": 1787407899.9208522,
          "date": "2026-08-22",
          "fundamentalScore": 24.6,
          "confidence": 100,
          "fundamentalDamage": 18.5,
          "thesisDamage": 100,
          "thesisStatus": "damaged",
          "scenarioWeights": {
            "bull": 24.9,
            "base": 35.3,
            "bear": 39.8
          },
          "currentPrice": 368.45001220703125,
          "valuationGap": -0.4048,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "weakening"
          }
        },
        {
          "asOf": 1787496888.8915975,
          "date": "2026-08-23",
          "fundamentalScore": 20.2,
          "confidence": 100,
          "fundamentalDamage": 100,
          "thesisDamage": 100,
          "thesisStatus": "damaged",
          "scenarioWeights": {
            "bull": 24.0,
            "base": 35.7,
            "bear": 40.3
          },
          "currentPrice": 368.45001220703125,
          "valuationGap": -0.4038,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "weakening"
          }
        },
        {
          "asOf": 1787582269.4850764,
          "date": "2026-08-24",
          "fundamentalScore": 20.8,
          "confidence": 100,
          "fundamentalDamage": 88.4,
          "thesisDamage": 100,
          "thesisStatus": "damaged",
          "scenarioWeights": {
            "bull": 24.1,
            "base": 35.7,
            "bear": 40.2
          },
          "currentPrice": 368.45001220703125,
          "valuationGap": -0.4038,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "weakening"
          }
        },
        {
          "asOf": 1787667920.4111497,
          "date": "2026-08-25",
          "fundamentalScore": 19.8,
          "confidence": 100,
          "fundamentalDamage": 100,
          "thesisDamage": 100,
          "thesisStatus": "damaged",
          "scenarioWeights": {
            "bull": 23.9,
            "base": 35.7,
            "bear": 40.4
          },
          "currentPrice": 358.760009765625,
          "valuationGap": -0.4038,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "weakening"
          }
        },
        {
          "asOf": 1787754142.7259922,
          "date": "2026-08-26",
          "fundamentalScore": 20.5,
          "confidence": 100,
          "fundamentalDamage": 100,
          "thesisDamage": 98.0,
          "thesisStatus": "damaged",
          "scenarioWeights": {
            "bull": 24.3,
            "base": 35.7,
            "bear": 40.0
          },
          "currentPrice": 356.739990234375,
          "valuationGap": -0.4038,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "weakening"
          }
        },
        {
          "asOf": 1787788668.347003,
          "date": "2026-08-27",
          "fundamentalScore": 22.0,
          "confidence": 100,
          "fundamentalDamage": 100,
          "thesisDamage": 100,
          "thesisStatus": "damaged",
          "scenarioWeights": {
            "bull": 24.4,
            "base": 35.5,
            "bear": 40.1
          },
          "currentPrice": 355.5899963378906,
          "valuationGap": -0.4038,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "weakening"
          }
        }
      ],
      "thesisHistory": [
        {
          "asOf": 1787322925.8647835,
          "date": "2026-08-21",
          "overallStatus": "damaged",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "weakening"
          }
        },
        {
          "asOf": 1787407899.9208522,
          "date": "2026-08-22",
          "overallStatus": "damaged",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "weakening"
          }
        },
        {
          "asOf": 1787496888.8915975,
          "date": "2026-08-23",
          "overallStatus": "damaged",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "weakening"
          }
        },
        {
          "asOf": 1787582269.4850764,
          "date": "2026-08-24",
          "overallStatus": "damaged",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "weakening"
          }
        },
        {
          "asOf": 1787667920.4111497,
          "date": "2026-08-25",
          "overallStatus": "damaged",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "weakening"
          }
        },
        {
          "asOf": 1787754142.7259922,
          "date": "2026-08-26",
          "overallStatus": "damaged",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "weakening"
          }
        },
        {
          "asOf": 1787788668.347003,
          "date": "2026-08-27",
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
      "asOf": 1787788668.347003,
      "modelVersion": "fundamental-v1.3",
      "fundamentalScore": 8.5,
      "confidence": 90.0,
      "fundamentalSigma": null,
      "fundamentalSigmaProgress": {
        "status": "collecting",
        "collected": 7,
        "required": 8,
        "remaining": 1,
        "expectedReadyDate": "2026-08-28",
        "notice": "같은 KST 날짜의 반복 실행은 한 건으로 교체하며, 임의 과거 점수를 만들어 채우지 않습니다."
      },
      "priceSigma": 0.7,
      "priceDamage": 23.4,
      "fundamentalDamage": 13.8,
      "thesisDamage": 21.0,
      "thesisStatus": "intact",
      "damageRead": "현재 가격 변동과 펀더멘털 변화 사이에 큰 괴리는 확인되지 않았습니다.",
      "dimensions": {
        "growth": {
          "score": -1.6533333333333333,
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
        "needsConfirmation": 2,
        "aiInferences": 2
      },
      "evidence": [
        {
          "headline": "매수해야 할 최고의 반도체 주식은 AMD나 Qualcomm이 아닙니다. 바로 Nvidia이며, 우리의 데이터가 이를 증명합니다",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1787357580,
          "sourceUrl": "https://finnhub.io/api/news?id=2ec3c53052e5e56bf744c5cccdbb59776bc76160fcad6a76ec0da00a099b49d6",
          "verificationStatus": "needs_confirmation",
          "reason": "사업·실적 연결 경로 확인 필요",
          "direction": "positive",
          "impact": 1.0
        },
        {
          "headline": "Apple 제품을 구매하시나요? 비용을 지불하는 데 도움이 되는 4가지 도구",
          "eventLabel": "공급망 문제",
          "publishedAt": 1787212801,
          "sourceUrl": "https://finnhub.io/api/news?id=a03b08e1b2008c44e24564b7729d0b10f7da5eb33418846cce278009d8d4233d",
          "verificationStatus": "needs_confirmation",
          "reason": "스마트폰 수요가 줄면 고객 칩 수요에 부담",
          "direction": "negative",
          "impact": -4.0
        }
      ],
      "topPositive": [
        "사업·실적 연결 경로 확인 필요"
      ],
      "topNegative": [
        "스마트폰 수요가 줄면 고객 칩 수요에 부담"
      ],
      "nextChecks": [
        "다음 실적의 매출·EPS·마진",
        "공식 가이던스 대비 실제 매출 달성 여부",
        "핵심 고객 수요·CAPEX",
        "FCF와 부채·CAPEX 변화"
      ],
      "theses": [
        {
          "id": "growth",
          "name": "성장 Thesis",
          "statement": "매출·EPS 성장 전망이 유지되고 본업 수익성이 함께 개선된다.",
          "status": "intact",
          "score": -1.7,
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
          "score": 27.4,
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
          "score": 3.3,
          "confidence": 90.0,
          "falsificationRules": [
            "핵심 고객 이탈 또는 점유율 하락이 공식 수치로 확인",
            "부채 부담 상승과 사업 리스크 확대가 동시 발생"
          ]
        }
      ],
      "scenarios": {
        "bull": 30.6,
        "base": 38.9,
        "bear": 30.5
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
            "headline": "매수해야 할 최고의 반도체 주식은 AMD나 Qualcomm이 아닙니다. 바로 Nvidia이며, 우리의 데이터가 이를 증명합니다",
            "eventLabel": "애널리스트 목표주가 변경",
            "publishedAt": 1787357580,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=2ec3c53052e5e56bf744c5cccdbb59776bc76160fcad6a76ec0da00a099b49d6",
            "reason": "사업·실적 연결 경로 확인 필요"
          },
          {
            "headline": "Apple 제품을 구매하시나요? 비용을 지불하는 데 도움이 되는 4가지 도구",
            "eventLabel": "공급망 문제",
            "publishedAt": 1787212801,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=a03b08e1b2008c44e24564b7729d0b10f7da5eb33418846cce278009d8d4233d",
            "reason": "스마트폰 수요가 줄면 고객 칩 수요에 부담"
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
      "guidanceTrackRecord": {
        "status": "collecting",
        "settledCount": 0,
        "metCount": 0,
        "hitRate": null,
        "confidenceAdjustment": 0.0,
        "worseningTwo": false,
        "recentOutcomes": [],
        "notice": "SEC Company Facts의 분기 매출만 회사 공식 가이던스와 대조합니다. 2개 결과 전에는 신뢰도에 반영하지 않습니다."
      },
      "valuationScenario": {
        "status": "available",
        "price": 163.72,
        "currentEps": 10.52302,
        "nextEps": 10.20195,
        "epsGrowth": -0.0305,
        "marketPe": 15.56,
        "conservative": 101.58,
        "base": 158.72,
        "optimistic": 246.02,
        "currentVsBase": 0.0315,
        "analystTargetMean": 193.1,
        "analystTargetLow": 100.0,
        "analystTargetHigh": 400.0,
        "evidenceWeights": {
          "bull": 30.6,
          "base": 38.9,
          "bear": 30.5
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
          "asOf": 1787322925.8647835,
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
          "currentPrice": 160.74000549316406,
          "valuationGap": 0.0315,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787407899.9208522,
          "date": "2026-08-22",
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
          "currentPrice": 160.75,
          "valuationGap": 0.0315,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787496888.8915975,
          "date": "2026-08-23",
          "fundamentalScore": 9.5,
          "confidence": 95.0,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 33.3,
            "base": 39.4,
            "bear": 27.3
          },
          "currentPrice": 160.75,
          "valuationGap": 0.0315,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787582269.4850764,
          "date": "2026-08-24",
          "fundamentalScore": 8.5,
          "confidence": 90.0,
          "fundamentalDamage": 13.8,
          "thesisDamage": 21.0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 30.6,
            "base": 38.9,
            "bear": 30.5
          },
          "currentPrice": 160.75,
          "valuationGap": 0.0315,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787667920.4111497,
          "date": "2026-08-25",
          "fundamentalScore": 8.5,
          "confidence": 90.0,
          "fundamentalDamage": 13.8,
          "thesisDamage": 21.0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 30.6,
            "base": 38.9,
            "bear": 30.5
          },
          "currentPrice": 158.52999877929688,
          "valuationGap": 0.0315,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787754142.7259922,
          "date": "2026-08-26",
          "fundamentalScore": 8.5,
          "confidence": 90.0,
          "fundamentalDamage": 13.8,
          "thesisDamage": 21.0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 30.6,
            "base": 38.9,
            "bear": 30.5
          },
          "currentPrice": 160.55999755859375,
          "valuationGap": 0.0315,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787788668.347003,
          "date": "2026-08-27",
          "fundamentalScore": 8.5,
          "confidence": 90.0,
          "fundamentalDamage": 13.8,
          "thesisDamage": 21.0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 30.6,
            "base": 38.9,
            "bear": 30.5
          },
          "currentPrice": 163.72000122070312,
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
          "asOf": 1787322925.8647835,
          "date": "2026-08-21",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787407899.9208522,
          "date": "2026-08-22",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787496888.8915975,
          "date": "2026-08-23",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787582269.4850764,
          "date": "2026-08-24",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787667920.4111497,
          "date": "2026-08-25",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787754142.7259922,
          "date": "2026-08-26",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787788668.347003,
          "date": "2026-08-27",
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
      "asOf": 1787788668.347003,
      "modelVersion": "fundamental-v1.3",
      "fundamentalScore": 24.6,
      "confidence": 55.2,
      "fundamentalSigma": null,
      "fundamentalSigmaProgress": {
        "status": "collecting",
        "collected": 7,
        "required": 8,
        "remaining": 1,
        "expectedReadyDate": "2026-08-28",
        "notice": "같은 KST 날짜의 반복 실행은 한 건으로 교체하며, 임의 과거 점수를 만들어 채우지 않습니다."
      },
      "priceSigma": -0.57,
      "priceDamage": 18.9,
      "fundamentalDamage": 0,
      "thesisDamage": 0,
      "thesisStatus": "intact",
      "damageRead": "현재 가격 변동과 펀더멘털 변화 사이에 큰 괴리는 확인되지 않았습니다.",
      "dimensions": {
        "growth": {
          "score": 24.360001,
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
        "공식 가이던스 대비 실제 매출 달성 여부",
        "핵심 고객 수요·CAPEX",
        "FCF와 부채·CAPEX 변화"
      ],
      "theses": [
        {
          "id": "growth",
          "name": "성장 Thesis",
          "statement": "매출·EPS 성장 전망이 유지되고 본업 수익성이 함께 개선된다.",
          "status": "strengthening",
          "score": 24.4,
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
          "score": 100,
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
          "score": 6.7,
          "confidence": 55.2,
          "falsificationRules": [
            "핵심 고객 이탈 또는 점유율 하락이 공식 수치로 확인",
            "부채 부담 상승과 사업 리스크 확대가 동시 발생"
          ]
        }
      ],
      "scenarios": {
        "bull": 35.8,
        "base": 38.8,
        "bear": 25.4
      },
      "alerts": [],
      "businessProfile": {
        "updatedAt": "2026-08-13",
        "customers": [
          "전세계 반도체 설계사·기기 제조사(칩 자체는 안 만들고 설계도만 라이선스) - 퀄컴·애플·삼성 등 모바일 칩 대부분에 Arm 아키텍처 탑재",
          "데이터센터·하이퍼스케일러 - 데이터센터향 로열티 매출이 전년비 2배 넘게 늘며 모바일을 제치고 최대 매출원으로 부상 중"
        ],
        "strengths": [
          "칩을 직접 만들지 않고 설계만 라이선스하는 '자산 가벼운(asset-light)' 사업모델 - 라이선스비 + 출하량당 로열티 이중 수익구조",
          "고부가가치 Armv9 아키텍처 전환이 매출 성장과 마진 개선을 동시에 견인",
          "2026-03 자체 설계 실리콘 'Arm AGI CPU'까지 영역 확장(2026년말 양산 목표) - 순수 라이선싱을 넘어선 신사업"
        ],
        "risks": [
          "⚠️ 극단적인 주가 변동성 - 한 달 새 시총이 반토막 났다가 실적 발표 하루 만에 18% 급반등(상세는 아래 newsLog 참고), 펀더멘털보다 밸류에이션 논쟁이 주가를 더 크게 움직이는 상태",
          "로열티 수익 구조상 고객사(퀄컴 등)의 최종 기기 판매량에 실적이 연동 - 스마트폰 시장 둔화 시 영향"
        ],
        "sources": [
          {
            "title": "Arm Holdings' Robust Licensing Business Drives AI-Fueled Growth (Yahoo Finance)",
            "url": "https://finance.yahoo.com/technology/ai/articles/arm-holdings-robust-licensing-business-140600801.html"
          },
          {
            "title": "Arm 2026 Q2 Financials (More Than Moore / Ryan Smith, Dr. Ian Cutress)",
            "url": "https://morethanmoore.substack.com/p/arm-2026-q2-financials"
          }
        ],
        "latestChanges": [],
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
      "guidanceTrackRecord": {
        "status": "collecting",
        "settledCount": 0,
        "metCount": 0,
        "hitRate": null,
        "confidenceAdjustment": 0.0,
        "worseningTwo": false,
        "recentOutcomes": [],
        "notice": "SEC Company Facts의 분기 매출만 회사 공식 가이던스와 대조합니다. 2개 결과 전에는 신뢰도에 반영하지 않습니다."
      },
      "valuationScenario": {
        "status": "available",
        "price": 251.06,
        "currentEps": 2.22863,
        "nextEps": 3.06084,
        "epsGrowth": 0.3734,
        "marketPe": 112.65,
        "conservative": 220.68,
        "base": 344.81,
        "optimistic": 534.46,
        "currentVsBase": -0.2719,
        "analystTargetMean": 285.72308,
        "analystTargetLow": 125.0,
        "analystTargetHigh": 500.0,
        "evidenceWeights": {
          "bull": 35.8,
          "base": 38.8,
          "bear": 25.4
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
          "asOf": 1787322925.8647835,
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
          "currentPrice": 250.72000122070312,
          "valuationGap": -0.272,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787407899.9208522,
          "date": "2026-08-22",
          "fundamentalScore": 25.3,
          "confidence": 73.5,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 36.3,
            "base": 38.5,
            "bear": 25.2
          },
          "currentPrice": 243.32000732421875,
          "valuationGap": -0.272,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787496888.8915975,
          "date": "2026-08-23",
          "fundamentalScore": 25.7,
          "confidence": 73.5,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 36.4,
            "base": 38.5,
            "bear": 25.1
          },
          "currentPrice": 243.32000732421875,
          "valuationGap": -0.2719,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787582269.4850764,
          "date": "2026-08-24",
          "fundamentalScore": 24.4,
          "confidence": 78.5,
          "fundamentalDamage": 5.6,
          "thesisDamage": 21.0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 33.7,
            "base": 37.9,
            "bear": 28.4
          },
          "currentPrice": 243.32000732421875,
          "valuationGap": -0.2719,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787667920.4111497,
          "date": "2026-08-25",
          "fundamentalScore": 24.4,
          "confidence": 73.5,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 36.1,
            "base": 38.6,
            "bear": 25.3
          },
          "currentPrice": 238.77999877929688,
          "valuationGap": -0.2719,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787754142.7259922,
          "date": "2026-08-26",
          "fundamentalScore": 25.7,
          "confidence": 68.5,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "strengthening",
          "scenarioWeights": {
            "bull": 36.3,
            "base": 38.6,
            "bear": 25.1
          },
          "currentPrice": 241.55999755859375,
          "valuationGap": -0.2719,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787788668.347003,
          "date": "2026-08-27",
          "fundamentalScore": 24.6,
          "confidence": 55.2,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 35.8,
            "base": 38.8,
            "bear": 25.4
          },
          "currentPrice": 251.05999755859375,
          "valuationGap": -0.2719,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        }
      ],
      "thesisHistory": [
        {
          "asOf": 1787322925.8647835,
          "date": "2026-08-21",
          "overallStatus": "intact",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787407899.9208522,
          "date": "2026-08-22",
          "overallStatus": "intact",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787496888.8915975,
          "date": "2026-08-23",
          "overallStatus": "intact",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787582269.4850764,
          "date": "2026-08-24",
          "overallStatus": "intact",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787667920.4111497,
          "date": "2026-08-25",
          "overallStatus": "intact",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787754142.7259922,
          "date": "2026-08-26",
          "overallStatus": "strengthening",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787788668.347003,
          "date": "2026-08-27",
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
      "asOf": 1787788668.347003,
      "modelVersion": "fundamental-v1.3",
      "fundamentalScore": 34.1,
      "confidence": 100,
      "fundamentalSigma": null,
      "fundamentalSigmaProgress": {
        "status": "collecting",
        "collected": 7,
        "required": 8,
        "remaining": 1,
        "expectedReadyDate": "2026-08-28",
        "notice": "같은 KST 날짜의 반복 실행은 한 건으로 교체하며, 임의 과거 점수를 만들어 채우지 않습니다."
      },
      "priceSigma": 1.42,
      "priceDamage": 47.3,
      "fundamentalDamage": 24.7,
      "thesisDamage": 100,
      "thesisStatus": "damaged",
      "damageRead": "현재 가격 변동과 펀더멘털 변화 사이에 큰 괴리는 확인되지 않았습니다.",
      "dimensions": {
        "growth": {
          "score": 53.199999999999996,
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
          "score": -1.4515999999999991,
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
          "headline": "한낮에 가장 큰 움직임을 보이는 주식: Dick's Sporting Goods, Marvell, AMD, Kura Oncology 등",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1787659503,
          "sourceUrl": "https://finnhub.io/api/news?id=b0296d9ed0160108953be1b90a0b93a55834e9460c42c9978afba664f9529302",
          "verificationStatus": "needs_confirmation",
          "reason": "사업·실적 연결 경로 확인 필요",
          "direction": "positive",
          "impact": 1.0
        },
        {
          "headline": "Marvell: Google은 AI 논문을 강화하지만 2분기는 프리미엄을 정당화해야 합니다",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1787598125,
          "sourceUrl": "https://finnhub.io/api/news?id=d367226c7afd0def73450d4508a39879b195389ed00dee3bb31ce07eeba5fa78",
          "verificationStatus": "needs_confirmation",
          "reason": "사업·실적 연결 경로 확인 필요",
          "direction": "negative",
          "impact": -5.0
        },
        {
          "headline": "가장 큰 움직임을 보이는 주식 프리마켓: 알리바바, 마벨, 샌디스크, 코인베이스 등",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1787556683,
          "sourceUrl": "https://finnhub.io/api/news?id=9aa75525346d31a1dfb90d34d8747ec329f9b8486db12c5b152cef660cddf179",
          "verificationStatus": "needs_confirmation",
          "reason": "사업·실적 연결 경로 확인 필요",
          "direction": "negative",
          "impact": -5.0
        },
        {
          "headline": "Broadcom vs. Marvell 기술: 1 치명적인 메트릭이 더 나은 맞춤형 AI 칩 스톡을 결정합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787509560,
          "sourceUrl": "https://finnhub.io/api/news?id=12f1e456221807cd220275e57f4df8b49a9783c2523e582ee86b95a6dfcf70a1",
          "verificationStatus": "needs_confirmation",
          "reason": "사업·실적 연결 경로 확인 필요",
          "direction": "negative",
          "impact": -4.0
        },
        {
          "headline": "Marvell 투자자는 최신 Google 거래를 신중하게 고려해야합니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1787429580,
          "sourceUrl": "https://finnhub.io/api/news?id=15f1670bbdc24b40cb41c83b37f90403c53024b5a1c3128e6de13a2ef973beb5",
          "verificationStatus": "needs_confirmation",
          "reason": "회사 실적과의 연결고리 확인",
          "direction": "positive",
          "impact": 4.0
        },
        {
          "headline": "알파벳은 Marvell의 7% 를 소유할 수 있습니다. 하지만 이를 얻기 위해 Google이 해야 할 일은 다음과 같습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1787417327,
          "sourceUrl": "https://finnhub.io/api/news?id=b3823748f09349ce02b5ea4ecf5c32ee421449de52fa4e7800bb5233d0896f24",
          "verificationStatus": "needs_confirmation",
          "reason": "회사 실적과의 연결고리 확인",
          "direction": "negative",
          "impact": -5.0
        },
        {
          "headline": "Google은 Marvell의 칩 구매에 대해 Marvell 주식 영장으로 돈을 받고 있습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1787374021,
          "sourceUrl": "https://finnhub.io/api/news?id=6caf38ab8ba9a2f6e73801672417a6805cfa580a5d37e9b2fab25f94c2f75c24",
          "verificationStatus": "needs_confirmation",
          "reason": "회사 실적과의 연결고리 확인",
          "direction": "negative",
          "impact": -5.0
        },
        {
          "headline": "Broadcom(AVGO)은 Google이 Marvell과 AI 칩 관계를 확장한 후 6.2% 하락했습니다. - 변경된 사항",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787353957,
          "sourceUrl": "https://finnhub.io/api/news?id=385f87dc5a3077a001a300dcab06754fae86880aa05bd125bcc9fb850f436b75",
          "verificationStatus": "needs_confirmation",
          "reason": "Google TPU 생태계 진입 가능성과 커스텀 실리콘 성장 기회",
          "direction": "positive",
          "impact": 2.0
        }
      ],
      "topPositive": [
        "사업·실적 연결 경로 확인 필요",
        "회사 실적과의 연결고리 확인",
        "Google TPU 생태계 진입 가능성과 커스텀 실리콘 성장 기회"
      ],
      "topNegative": [
        "사업·실적 연결 경로 확인 필요",
        "사업·실적 연결 경로 확인 필요",
        "사업·실적 연결 경로 확인 필요"
      ],
      "nextChecks": [
        "다음 실적의 매출·EPS·마진",
        "공식 가이던스 대비 실제 매출 달성 여부",
        "핵심 고객 수요·CAPEX",
        "FCF와 부채·CAPEX 변화"
      ],
      "theses": [
        {
          "id": "growth",
          "name": "성장 Thesis",
          "statement": "매출·EPS 성장 전망이 유지되고 본업 수익성이 함께 개선된다.",
          "status": "strengthening",
          "score": 53.2,
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
          "score": -0.5,
          "confidence": 100,
          "falsificationRules": [
            "핵심 고객 이탈 또는 점유율 하락이 공식 수치로 확인",
            "부채 부담 상승과 사업 리스크 확대가 동시 발생"
          ]
        }
      ],
      "scenarios": {
        "bull": 26.9,
        "base": 34.6,
        "bear": 38.5
      },
      "alerts": [],
      "businessProfile": {
        "updatedAt": "2026-08-20",
        "customers": [
          "4대 하이퍼스케일러(구글·아마존·마이크로소프트 등으로 추정) - AI 커스텀 실리콘(XPU) 설계, 현재 활성 프로그램 18개 중 12개가 이들 대상",
          "신흥 AI 고객사 6곳 - 나머지 커스텀 실리콘 프로그램",
          "통신사(캐리어 인프라)·기업 네트워킹·자동차/산업 고객 - 전통적 사업 축"
        ],
        "strengths": [
          "AI 관련 매출이 전체의 35% 이상까지 확대 - '데이터센터 우선' 전략으로 성공적 전환 중",
          "데이터센터 부문 매출 +37.8% 성장(3분기 $15.2억), 커스텀 실리콘이 데이터센터 매출의 약 4분의 1 차지하며 내년에도 20%+ 성장 전망",
          "커넥티비티·광통신·스토리지 등 AI 인프라 전반에 걸친 폭넓은 제품 포트폴리오"
        ],
        "risks": [
          "⚠️ GAAP 순이익과 비GAAP 순이익 괴리가 매우 큼(2026 회계연도 1분기 GAAP $34.5M vs 비GAAP $718.0M) - 잦은 인수합병에 따른 주식보상비용·무형자산 상각이 구조적으로 GAAP 이익을 짓누름(상세는 analystLog 참고)",
          "소수 하이퍼스케일러 고객에 대한 커스텀 실리콘 매출 의존도가 높음 - 이들의 자체 반도체 내재화(인하우스 설계) 전환 시 리스크"
        ],
        "sources": [
          {
            "title": "Is Surging AI Custom Silicon Demand Reshaping the Investment Case for Marvell Technology (Yahoo Finance)",
            "url": "https://finance.yahoo.com/news/surging-ai-custom-silicon-demand-042534281.html"
          },
          {
            "title": "Marvell Q1 FY 2026 Results Driven by Custom Silicon and Data Center Momentum (Futurum Group)",
            "url": "https://futurumgroup.com/insights/marvell-q1-fy-2026-results-driven-by-custom-silicon-and-data-center-momentum/"
          }
        ],
        "latestChanges": [
          {
            "headline": "한낮에 가장 큰 움직임을 보이는 주식: Dick's Sporting Goods, Marvell, AMD, Kura Oncology 등",
            "eventLabel": "애널리스트 목표주가 변경",
            "publishedAt": 1787659503,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=b0296d9ed0160108953be1b90a0b93a55834e9460c42c9978afba664f9529302",
            "reason": "사업·실적 연결 경로 확인 필요"
          },
          {
            "headline": "Marvell: Google은 AI 논문을 강화하지만 2분기는 프리미엄을 정당화해야 합니다",
            "eventLabel": "워런트·신주·희석 가능성",
            "publishedAt": 1787598125,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=d367226c7afd0def73450d4508a39879b195389ed00dee3bb31ce07eeba5fa78",
            "reason": "사업·실적 연결 경로 확인 필요"
          },
          {
            "headline": "가장 큰 움직임을 보이는 주식 프리마켓: 알리바바, 마벨, 샌디스크, 코인베이스 등",
            "eventLabel": "워런트·신주·희석 가능성",
            "publishedAt": 1787556683,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=9aa75525346d31a1dfb90d34d8747ec329f9b8486db12c5b152cef660cddf179",
            "reason": "사업·실적 연결 경로 확인 필요"
          },
          {
            "headline": "Broadcom vs. Marvell 기술: 1 치명적인 메트릭이 더 나은 맞춤형 AI 칩 스톡을 결정합니다.",
            "eventLabel": "AI·데이터센터 투자 변화",
            "publishedAt": 1787509560,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=12f1e456221807cd220275e57f4df8b49a9783c2523e582ee86b95a6dfcf70a1",
            "reason": "사업·실적 연결 경로 확인 필요"
          },
          {
            "headline": "Marvell 투자자는 최신 Google 거래를 신중하게 고려해야합니다.",
            "eventLabel": "주요 고객 계약",
            "publishedAt": 1787429580,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=15f1670bbdc24b40cb41c83b37f90403c53024b5a1c3128e6de13a2ef973beb5",
            "reason": "회사 실적과의 연결고리 확인"
          },
          {
            "headline": "알파벳은 Marvell의 7% 를 소유할 수 있습니다. 하지만 이를 얻기 위해 Google이 해야 할 일은 다음과 같습니다.",
            "eventLabel": "워런트·신주·희석 가능성",
            "publishedAt": 1787417327,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=b3823748f09349ce02b5ea4ecf5c32ee421449de52fa4e7800bb5233d0896f24",
            "reason": "회사 실적과의 연결고리 확인"
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
      "guidanceTrackRecord": {
        "status": "collecting",
        "settledCount": 0,
        "metCount": 0,
        "hitRate": null,
        "confidenceAdjustment": 0.0,
        "worseningTwo": false,
        "recentOutcomes": [],
        "notice": "SEC Company Facts의 분기 매출만 회사 공식 가이던스와 대조합니다. 2개 결과 전에는 신뢰도에 반영하지 않습니다."
      },
      "valuationScenario": {
        "status": "available",
        "price": 245.11,
        "currentEps": 4.06057,
        "nextEps": 6.25156,
        "epsGrowth": 0.5396,
        "marketPe": 60.36,
        "conservative": 241.51,
        "base": 377.37,
        "optimistic": 584.92,
        "currentVsBase": -0.3505,
        "analystTargetMean": 266.35535,
        "analystTargetLow": 126.0,
        "analystTargetHigh": 400.0,
        "evidenceWeights": {
          "bull": 26.9,
          "base": 34.6,
          "bear": 38.5
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
          "asOf": 1787322925.8647835,
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
          "currentPrice": 251.00999450683594,
          "valuationGap": -0.3512,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787407899.9208522,
          "date": "2026-08-22",
          "fundamentalScore": 35.8,
          "confidence": 100,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "strengthening",
          "scenarioWeights": {
            "bull": 39.2,
            "base": 37.4,
            "bear": 23.4
          },
          "currentPrice": 237.0399932861328,
          "valuationGap": -0.3512,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787496888.8915975,
          "date": "2026-08-23",
          "fundamentalScore": 35.5,
          "confidence": 100,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "strengthening",
          "scenarioWeights": {
            "bull": 39.1,
            "base": 37.5,
            "bear": 23.4
          },
          "currentPrice": 237.0399932861328,
          "valuationGap": -0.3501,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787582269.4850764,
          "date": "2026-08-24",
          "fundamentalScore": 34.8,
          "confidence": 100,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 38.9,
            "base": 37.6,
            "bear": 23.5
          },
          "currentPrice": 237.0399932861328,
          "valuationGap": -0.3501,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787667920.4111497,
          "date": "2026-08-25",
          "fundamentalScore": 34.1,
          "confidence": 100,
          "fundamentalDamage": 28.2,
          "thesisDamage": 98.0,
          "thesisStatus": "damaged",
          "scenarioWeights": {
            "bull": 27.1,
            "base": 34.7,
            "bear": 38.2
          },
          "currentPrice": 229.2899932861328,
          "valuationGap": -0.3505,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787754142.7259922,
          "date": "2026-08-26",
          "fundamentalScore": 34.1,
          "confidence": 100,
          "fundamentalDamage": 24.7,
          "thesisDamage": 100,
          "thesisStatus": "damaged",
          "scenarioWeights": {
            "bull": 26.9,
            "base": 34.6,
            "bear": 38.5
          },
          "currentPrice": 240.3800048828125,
          "valuationGap": -0.3505,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787788668.347003,
          "date": "2026-08-27",
          "fundamentalScore": 34.1,
          "confidence": 100,
          "fundamentalDamage": 24.7,
          "thesisDamage": 100,
          "thesisStatus": "damaged",
          "scenarioWeights": {
            "bull": 26.9,
            "base": 34.6,
            "bear": 38.5
          },
          "currentPrice": 245.11000061035156,
          "valuationGap": -0.3505,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        }
      ],
      "thesisHistory": [
        {
          "asOf": 1787322925.8647835,
          "date": "2026-08-21",
          "overallStatus": "strengthening",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787407899.9208522,
          "date": "2026-08-22",
          "overallStatus": "strengthening",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787496888.8915975,
          "date": "2026-08-23",
          "overallStatus": "strengthening",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787582269.4850764,
          "date": "2026-08-24",
          "overallStatus": "intact",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787667920.4111497,
          "date": "2026-08-25",
          "overallStatus": "damaged",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787754142.7259922,
          "date": "2026-08-26",
          "overallStatus": "damaged",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787788668.347003,
          "date": "2026-08-27",
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
    "INTC": {
      "ticker": "INTC",
      "asOf": 1787788668.347003,
      "modelVersion": "fundamental-v1.3",
      "fundamentalScore": 5.2,
      "confidence": 100,
      "fundamentalSigma": null,
      "fundamentalSigmaProgress": {
        "status": "collecting",
        "collected": 7,
        "required": 8,
        "remaining": 1,
        "expectedReadyDate": "2026-08-28",
        "notice": "같은 KST 날짜의 반복 실행은 한 건으로 교체하며, 임의 과거 점수를 만들어 채우지 않습니다."
      },
      "priceSigma": -1.34,
      "priceDamage": 44.6,
      "fundamentalDamage": 73.5,
      "thesisDamage": 100,
      "thesisStatus": "damaged",
      "damageRead": "현재 가격 변동과 펀더멘털 변화 사이에 큰 괴리는 확인되지 않았습니다.",
      "dimensions": {
        "growth": {
          "score": 16.649999333333334,
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
          "score": -4.4457,
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
          "headline": "NVIDIA, 데이터 센터 개발 발전을 위한 Cloverleaf 파트너십",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1787502323,
          "sourceUrl": "https://finnhub.io/api/news?id=4f1513663152e58106526751dba1deddb9f809f8ba6b9d18cbc805e7ccb0b3e5",
          "verificationStatus": "needs_confirmation",
          "reason": "사업·실적 연결 경로 확인 필요",
          "direction": "negative",
          "impact": -4.0
        },
        {
          "headline": "메타가 5년 이상 사고 보유할 수 있는 최고의 인공지능 (AI) 주식이 될 수 있는 1가지 이유",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787489400,
          "sourceUrl": "https://finnhub.io/api/news?id=44d90aae0b5b834375b618ae37a566ff4b64ad0b8fbc6f7884a4dcebbcc1d404",
          "verificationStatus": "needs_confirmation",
          "reason": "사업·실적 연결 경로 확인 필요",
          "direction": "positive",
          "impact": 2.0
        },
        {
          "headline": "브로드컴은 잊어라: 엔비디아 (NVDA) 는 여전히 2027년 이후 최고의 반도체 주식이다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787481000,
          "sourceUrl": "https://finnhub.io/api/news?id=b40be1909044dd7a0c90eeb83fd286d6cccfbb4425b8e58d4185c1043fe67018",
          "verificationStatus": "needs_confirmation",
          "reason": "사업·실적 연결 경로 확인 필요",
          "direction": "negative",
          "impact": -4.0
        },
        {
          "headline": "마이크론 vs. 샌디스크: 어떤 AI 메모리 스톡을 소유해야 할까요?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1787480100,
          "sourceUrl": "https://finnhub.io/api/news?id=a9f95a3ddc0f438beae6bdd8d5b0aef37b17bfc7403c2ad950068d215fca7ce1",
          "verificationStatus": "needs_confirmation",
          "reason": "사업·실적 연결 경로 확인 필요",
          "direction": "negative",
          "impact": -4.0
        },
        {
          "headline": "Palantir는 모든 수익 달러의 55 센트를 이익으로 유지합니다",
          "eventLabel": "실적 발표",
          "publishedAt": 1787453881,
          "sourceUrl": "https://finnhub.io/api/news?id=d2ec5c00db1df302373f5a9efafef31d30058f44460268739459ffa06f96978e",
          "verificationStatus": "needs_confirmation",
          "reason": "사업·실적 연결 경로 확인 필요",
          "direction": "negative",
          "impact": -2.0
        },
        {
          "headline": "예측: 2030년 말까지 Palantir의 주가가 될 것입니다.",
          "eventLabel": "실적 발표",
          "publishedAt": 1787394900,
          "sourceUrl": "https://finnhub.io/api/news?id=1a1e9cee3c5f01b21c88074e05d2c81bbf596cd5ce6df16601d859cf3bfeccf0",
          "verificationStatus": "needs_confirmation",
          "reason": "사업·실적 연결 경로 확인 필요",
          "direction": "positive",
          "impact": 2.0
        },
        {
          "headline": "Google은 Marvell의 칩 구매에 대해 Marvell 주식 영장으로 돈을 받고 있습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1787374021,
          "sourceUrl": "https://finnhub.io/api/news?id=6caf38ab8ba9a2f6e73801672417a6805cfa580a5d37e9b2fab25f94c2f75c24",
          "verificationStatus": "needs_confirmation",
          "reason": "사업·실적 연결 경로 확인 필요",
          "direction": "negative",
          "impact": -5.0
        },
        {
          "headline": "인텔은 주당 95달러에 200억 달러 규모의 주식을 매각했습니다. 현재 $93 이하로 거래되고 있습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1787362321,
          "sourceUrl": "https://finnhub.io/api/news?id=df168fa33197a3cfe327cfb541dff88c722f6f5e002b77a51a8184aa265c1f3f",
          "verificationStatus": "needs_confirmation",
          "reason": "회사 실적과의 연결고리 확인",
          "direction": "negative",
          "impact": -5.0
        }
      ],
      "topPositive": [
        "사업·실적 연결 경로 확인 필요",
        "사업·실적 연결 경로 확인 필요"
      ],
      "topNegative": [
        "사업·실적 연결 경로 확인 필요",
        "사업·실적 연결 경로 확인 필요",
        "사업·실적 연결 경로 확인 필요"
      ],
      "nextChecks": [
        "다음 실적의 매출·EPS·마진",
        "공식 가이던스 대비 실제 매출 달성 여부",
        "핵심 고객 수요·CAPEX",
        "FCF와 부채·CAPEX 변화"
      ],
      "theses": [
        {
          "id": "growth",
          "name": "성장 Thesis",
          "statement": "매출·EPS 성장 전망이 유지되고 본업 수익성이 함께 개선된다.",
          "status": "intact",
          "score": 16.6,
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
          "score": -1.5,
          "confidence": 100,
          "falsificationRules": [
            "핵심 고객 이탈 또는 점유율 하락이 공식 수치로 확인",
            "부채 부담 상승과 사업 리스크 확대가 동시 발생"
          ]
        }
      ],
      "scenarios": {
        "bull": 21.0,
        "base": 36.8,
        "bear": 42.2
      },
      "alerts": [],
      "businessProfile": {
        "updatedAt": "2026-08-20",
        "customers": [
          "PC 제조사·소비자(CCG 부문) - 유통사·OEM에 프로세서 공급, 매출 $77억(+1%)",
          "클라우드서비스사업자·기업(DCAI 부문) - 서버·통신·고성능컴퓨팅용, 매출 $51억(+22%, 하이퍼스케일러 서버 수요 견인)",
          "외부 반도체 설계사(파운드리 부문) - 인텔 파운드리가 타사 칩 위탁생산 서비스 시작, 매출 $54억(+16%)"
        ],
        "strengths": [
          "데이터센터·AI(DCAI) 부문이 하이퍼스케일러 서버 수요에 힘입어 +22~59%(분기별) 고성장 중",
          "파운드리 사업도 외부 고객 확보하며 +16% 성장 - 위탁생산 진입이 실제 매출로 나타나기 시작",
          "CCG(PC) 부문은 정체 수준이지만 감소하진 않는 안정적 캐시카우 역할"
        ],
        "risks": [
          "⚠️ 파운드리 사업 턴어라운드 과정에서 대형 비현금 손상차손·구조조정 비용이 반복돼 GAAP 순손실이 여러 분기 지속됨(상세는 analystLog 참고) - 제품 매출 자체는 개선 중이라는 점과 구분해서 봐야 함",
          "파운드리가 TSMC·삼성 대비 후발주자라 외부 고객을 얼마나 더 확보하느냐가 관건 - 아직 흑자전환 시점 불투명"
        ],
        "sources": [
          {
            "title": "Intel Q2 FY 2026: Hyperscaler Server Demand Drives 59% DCAI Growth (Futurum Group)",
            "url": "https://futurumgroup.com/insights/intel-q2-fy-2026-hyperscaler-server-demand-drives-59-dcai-growth/"
          },
          {
            "title": "Intel Outlines Financial Framework for Foundry Business, Sets Path to Margin Expansion (Intel Newsroom)",
            "url": "https://newsroom.intel.com/corporate/intel-outlines-financial-framework-for-foundry-business-sets-path-to-margin-expansion"
          }
        ],
        "latestChanges": [
          {
            "headline": "NVIDIA, 데이터 센터 개발 발전을 위한 Cloverleaf 파트너십",
            "eventLabel": "규제·소송·수출 제한",
            "publishedAt": 1787502323,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=4f1513663152e58106526751dba1deddb9f809f8ba6b9d18cbc805e7ccb0b3e5",
            "reason": "사업·실적 연결 경로 확인 필요"
          },
          {
            "headline": "메타가 5년 이상 사고 보유할 수 있는 최고의 인공지능 (AI) 주식이 될 수 있는 1가지 이유",
            "eventLabel": "AI·데이터센터 투자 변화",
            "publishedAt": 1787489400,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=44d90aae0b5b834375b618ae37a566ff4b64ad0b8fbc6f7884a4dcebbcc1d404",
            "reason": "사업·실적 연결 경로 확인 필요"
          },
          {
            "headline": "브로드컴은 잊어라: 엔비디아 (NVDA) 는 여전히 2027년 이후 최고의 반도체 주식이다.",
            "eventLabel": "AI·데이터센터 투자 변화",
            "publishedAt": 1787481000,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=b40be1909044dd7a0c90eeb83fd286d6cccfbb4425b8e58d4185c1043fe67018",
            "reason": "사업·실적 연결 경로 확인 필요"
          },
          {
            "headline": "마이크론 vs. 샌디스크: 어떤 AI 메모리 스톡을 소유해야 할까요?",
            "eventLabel": "공급망 문제",
            "publishedAt": 1787480100,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=a9f95a3ddc0f438beae6bdd8d5b0aef37b17bfc7403c2ad950068d215fca7ce1",
            "reason": "사업·실적 연결 경로 확인 필요"
          },
          {
            "headline": "Palantir는 모든 수익 달러의 55 센트를 이익으로 유지합니다",
            "eventLabel": "실적 발표",
            "publishedAt": 1787453881,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=d2ec5c00db1df302373f5a9efafef31d30058f44460268739459ffa06f96978e",
            "reason": "사업·실적 연결 경로 확인 필요"
          },
          {
            "headline": "예측: 2030년 말까지 Palantir의 주가가 될 것입니다.",
            "eventLabel": "실적 발표",
            "publishedAt": 1787394900,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=1a1e9cee3c5f01b21c88074e05d2c81bbf596cd5ce6df16601d859cf3bfeccf0",
            "reason": "사업·실적 연결 경로 확인 필요"
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
      "guidanceTrackRecord": {
        "status": "collecting",
        "settledCount": 0,
        "metCount": 0,
        "hitRate": null,
        "confidenceAdjustment": 0.0,
        "worseningTwo": false,
        "recentOutcomes": [],
        "notice": "SEC Company Facts의 분기 매출만 회사 공식 가이던스와 대조합니다. 2개 결과 전에는 신뢰도에 반영하지 않습니다."
      },
      "valuationScenario": {
        "status": "available",
        "price": 88.24,
        "currentEps": 1.5129,
        "nextEps": 2.04013,
        "epsGrowth": 0.3485,
        "marketPe": 58.33,
        "conservative": 76.15,
        "base": 118.99,
        "optimistic": 184.44,
        "currentVsBase": -0.2584,
        "analystTargetMean": 114.87805,
        "analystTargetLow": 75.0,
        "analystTargetHigh": 200.0,
        "evidenceWeights": {
          "bull": 21.0,
          "base": 36.8,
          "bear": 42.2
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
          "asOf": 1787322925.8647835,
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
          "currentPrice": 92.12999725341797,
          "valuationGap": -0.2584,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "damaged",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787407899.9208522,
          "date": "2026-08-22",
          "fundamentalScore": 7.7,
          "confidence": 100,
          "fundamentalDamage": 85.1,
          "thesisDamage": 28.0,
          "thesisStatus": "damaged",
          "scenarioWeights": {
            "bull": 29.8,
            "base": 38.7,
            "bear": 31.5
          },
          "currentPrice": 90.06999969482422,
          "valuationGap": -0.2584,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "damaged",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787496888.8915975,
          "date": "2026-08-23",
          "fundamentalScore": 10.2,
          "confidence": 100,
          "fundamentalDamage": 0,
          "thesisDamage": 28.0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 30.3,
            "base": 38.5,
            "bear": 31.2
          },
          "currentPrice": 90.06999969482422,
          "valuationGap": -0.2584,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "damaged",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787582269.4850764,
          "date": "2026-08-24",
          "fundamentalScore": 6.3,
          "confidence": 100,
          "fundamentalDamage": 36.4,
          "thesisDamage": 100,
          "thesisStatus": "damaged",
          "scenarioWeights": {
            "bull": 21.2,
            "base": 36.7,
            "bear": 42.1
          },
          "currentPrice": 90.06999969482422,
          "valuationGap": -0.2584,
          "theses": {
            "growth": "intact",
            "cashFlow": "damaged",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787667920.4111497,
          "date": "2026-08-25",
          "fundamentalScore": 4.3,
          "confidence": 100,
          "fundamentalDamage": 100,
          "thesisDamage": 100,
          "thesisStatus": "damaged",
          "scenarioWeights": {
            "bull": 20.8,
            "base": 36.9,
            "bear": 42.3
          },
          "currentPrice": 87.26000213623047,
          "valuationGap": -0.2584,
          "theses": {
            "growth": "intact",
            "cashFlow": "damaged",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787754142.7259922,
          "date": "2026-08-26",
          "fundamentalScore": 5.2,
          "confidence": 100,
          "fundamentalDamage": 73.5,
          "thesisDamage": 100,
          "thesisStatus": "damaged",
          "scenarioWeights": {
            "bull": 21.0,
            "base": 36.8,
            "bear": 42.2
          },
          "currentPrice": 87.4800033569336,
          "valuationGap": -0.2584,
          "theses": {
            "growth": "intact",
            "cashFlow": "damaged",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787788668.347003,
          "date": "2026-08-27",
          "fundamentalScore": 5.2,
          "confidence": 100,
          "fundamentalDamage": 73.5,
          "thesisDamage": 100,
          "thesisStatus": "damaged",
          "scenarioWeights": {
            "bull": 21.0,
            "base": 36.8,
            "bear": 42.2
          },
          "currentPrice": 88.23999786376953,
          "valuationGap": -0.2584,
          "theses": {
            "growth": "intact",
            "cashFlow": "damaged",
            "resilience": "intact"
          }
        }
      ],
      "thesisHistory": [
        {
          "asOf": 1787322925.8647835,
          "date": "2026-08-21",
          "overallStatus": "damaged",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "damaged",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787407899.9208522,
          "date": "2026-08-22",
          "overallStatus": "damaged",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "damaged",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787496888.8915975,
          "date": "2026-08-23",
          "overallStatus": "intact",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "damaged",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787582269.4850764,
          "date": "2026-08-24",
          "overallStatus": "damaged",
          "statuses": {
            "growth": "intact",
            "cashFlow": "damaged",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787667920.4111497,
          "date": "2026-08-25",
          "overallStatus": "damaged",
          "statuses": {
            "growth": "intact",
            "cashFlow": "damaged",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787754142.7259922,
          "date": "2026-08-26",
          "overallStatus": "damaged",
          "statuses": {
            "growth": "intact",
            "cashFlow": "damaged",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787788668.347003,
          "date": "2026-08-27",
          "overallStatus": "damaged",
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
    "TSM": {
      "ticker": "TSM",
      "asOf": 1787788668.347003,
      "modelVersion": "fundamental-v1.3",
      "fundamentalScore": 20.0,
      "confidence": 83.5,
      "fundamentalSigma": null,
      "fundamentalSigmaProgress": {
        "status": "collecting",
        "collected": 7,
        "required": 8,
        "remaining": 1,
        "expectedReadyDate": "2026-08-28",
        "notice": "같은 KST 날짜의 반복 실행은 한 건으로 교체하며, 임의 과거 점수를 만들어 채우지 않습니다."
      },
      "priceSigma": 0.05,
      "priceDamage": 1.6,
      "fundamentalDamage": 6.5,
      "thesisDamage": 28.0,
      "thesisStatus": "intact",
      "damageRead": "현재 가격 변동과 펀더멘털 변화 사이에 큰 괴리는 확인되지 않았습니다.",
      "dimensions": {
        "growth": {
          "score": 21.69666666666667,
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
          "score": 15.125699999999998,
          "applicable": true
        }
      },
      "officialEvidence": [],
      "evidenceSummary": {
        "confirmedFacts": 1,
        "credibleReports": 0,
        "needsConfirmation": 4,
        "aiInferences": 5
      },
      "evidence": [
        {
          "headline": "TSM SEC Form 6-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1787583600.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1046179/000104617926000545/tsm-monthend6kx20260825.htm",
          "verificationStatus": "confirmed",
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기",
          "direction": "mixed",
          "impact": 0
        },
        {
          "headline": "AMD는 TSMC와 함께 첨단 칩 패키징을 구축하기 위해 대만에 $ 100억 이상을 투자하고 있습니다. Lisa Su가 실제로 그 돈으로 구매하는 것은 다음과 같습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787503800,
          "sourceUrl": "https://finnhub.io/api/news?id=7b88ad01664211237a7e92988a4351927f4bb52466ecdbb4a762bbe0ffa7ade1",
          "verificationStatus": "needs_confirmation",
          "reason": "사업·실적 연결 경로 확인 필요",
          "direction": "positive",
          "impact": 2.0
        },
        {
          "headline": "TSMC vs. ASML: 더 넓은 해자를 가진 세미 모노폴리는 무엇입니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787406772,
          "sourceUrl": "https://finnhub.io/api/news?id=45c2ea3817192ec133825430adebe9a42a48ee1ee61eee77b7489357f53fa9b2",
          "verificationStatus": "needs_confirmation",
          "reason": "사업·실적 연결 경로 확인 필요",
          "direction": "negative",
          "impact": -4.0
        },
        {
          "headline": "TSMC의 지출 예측이 850억 달러에 도달함에 따라 ASML이 이익을 얻습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787256478,
          "sourceUrl": "https://finnhub.io/api/news?id=54269e0ef76fffb5e35aa26a20c5f9c1e274bdf1e56b5c04462f9ba85d9c4956",
          "verificationStatus": "needs_confirmation",
          "reason": "사업·실적 연결 경로 확인 필요",
          "direction": "positive",
          "impact": 2.0
        },
        {
          "headline": "대만 반도체 대 ASML: 현재 어느 반도체 타이탄이 더 나은 구매인가요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787219700,
          "sourceUrl": "https://finnhub.io/api/news?id=1c69e4aaa4be8baa7aafad761b37f5892a77147655c0ac3ca8dc1af1d5ec17e8",
          "verificationStatus": "needs_confirmation",
          "reason": "사업·실적 연결 경로 확인 필요",
          "direction": "negative",
          "impact": -4.0
        }
      ],
      "topPositive": [
        "사업·실적 연결 경로 확인 필요",
        "사업·실적 연결 경로 확인 필요"
      ],
      "topNegative": [
        "사업·실적 연결 경로 확인 필요",
        "사업·실적 연결 경로 확인 필요"
      ],
      "nextChecks": [
        "다음 실적의 매출·EPS·마진",
        "공식 가이던스 대비 실제 매출 달성 여부",
        "핵심 고객 수요·CAPEX",
        "FCF와 부채·CAPEX 변화"
      ],
      "theses": [
        {
          "id": "growth",
          "name": "성장 Thesis",
          "statement": "매출·EPS 성장 전망이 유지되고 본업 수익성이 함께 개선된다.",
          "status": "strengthening",
          "score": 21.7,
          "confidence": 83.5,
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
          "confidence": 83.5,
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
          "score": 5.0,
          "confidence": 83.5,
          "falsificationRules": [
            "핵심 고객 이탈 또는 점유율 하락이 공식 수치로 확인",
            "부채 부담 상승과 사업 리스크 확대가 동시 발생"
          ]
        }
      ],
      "scenarios": {
        "bull": 32.1,
        "base": 37.9,
        "bear": 30.0
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
            "headline": "TSM SEC Form 6-K 공식 제출",
            "eventLabel": "중요사항 공시",
            "publishedAt": 1787583600.0,
            "direction": "mixed",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1046179/000104617926000545/tsm-monthend6kx20260825.htm",
            "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
          },
          {
            "headline": "AMD는 TSMC와 함께 첨단 칩 패키징을 구축하기 위해 대만에 $ 100억 이상을 투자하고 있습니다. Lisa Su가 실제로 그 돈으로 구매하는 것은 다음과 같습니다.",
            "eventLabel": "AI·데이터센터 투자 변화",
            "publishedAt": 1787503800,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=7b88ad01664211237a7e92988a4351927f4bb52466ecdbb4a762bbe0ffa7ade1",
            "reason": "사업·실적 연결 경로 확인 필요"
          },
          {
            "headline": "TSMC vs. ASML: 더 넓은 해자를 가진 세미 모노폴리는 무엇입니까?",
            "eventLabel": "AI·데이터센터 투자 변화",
            "publishedAt": 1787406772,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=45c2ea3817192ec133825430adebe9a42a48ee1ee61eee77b7489357f53fa9b2",
            "reason": "사업·실적 연결 경로 확인 필요"
          },
          {
            "headline": "TSMC의 지출 예측이 850억 달러에 도달함에 따라 ASML이 이익을 얻습니다.",
            "eventLabel": "AI·데이터센터 투자 변화",
            "publishedAt": 1787256478,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=54269e0ef76fffb5e35aa26a20c5f9c1e274bdf1e56b5c04462f9ba85d9c4956",
            "reason": "사업·실적 연결 경로 확인 필요"
          },
          {
            "headline": "대만 반도체 대 ASML: 현재 어느 반도체 타이탄이 더 나은 구매인가요?",
            "eventLabel": "AI·데이터센터 투자 변화",
            "publishedAt": 1787219700,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=1c69e4aaa4be8baa7aafad761b37f5892a77147655c0ac3ca8dc1af1d5ec17e8",
            "reason": "사업·실적 연결 경로 확인 필요"
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
      "guidanceTrackRecord": {
        "status": "collecting",
        "settledCount": 0,
        "metCount": 0,
        "hitRate": null,
        "confidenceAdjustment": 0.0,
        "worseningTwo": false,
        "recentOutcomes": [],
        "notice": "SEC Company Facts의 분기 매출만 회사 공식 가이던스와 대조합니다. 2개 결과 전에는 신뢰도에 반영하지 않습니다."
      },
      "valuationScenario": {
        "status": "available",
        "price": 417.69,
        "currentEps": 16.89809,
        "nextEps": 21.78127,
        "epsGrowth": 0.289,
        "marketPe": 24.72,
        "conservative": 344.57,
        "base": 538.39,
        "optimistic": 834.51,
        "currentVsBase": -0.2242,
        "analystTargetMean": 554.45483,
        "analystTargetLow": 440.0,
        "analystTargetHigh": 700.0,
        "evidenceWeights": {
          "bull": 32.1,
          "base": 37.9,
          "bear": 30.0
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
          "asOf": 1787322925.8647835,
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
          "currentPrice": 416.0,
          "valuationGap": -0.2242,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787407899.9208522,
          "date": "2026-08-22",
          "fundamentalScore": 21.6,
          "confidence": 85.0,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "strengthening",
          "scenarioWeights": {
            "bull": 35.7,
            "base": 38.7,
            "bear": 25.6
          },
          "currentPrice": 418.95001220703125,
          "valuationGap": -0.2242,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787496888.8915975,
          "date": "2026-08-23",
          "fundamentalScore": 21.2,
          "confidence": 83.5,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 35.6,
            "base": 38.7,
            "bear": 25.7
          },
          "currentPrice": 418.95001220703125,
          "valuationGap": -0.2242,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787582269.4850764,
          "date": "2026-08-24",
          "fundamentalScore": 20.4,
          "confidence": 83.5,
          "fundamentalDamage": 0.7,
          "thesisDamage": 14.0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 33.8,
            "base": 38.3,
            "bear": 27.9
          },
          "currentPrice": 418.95001220703125,
          "valuationGap": -0.2242,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787667920.4111497,
          "date": "2026-08-25",
          "fundamentalScore": 20.4,
          "confidence": 83.5,
          "fundamentalDamage": 0.7,
          "thesisDamage": 14.0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 33.8,
            "base": 38.3,
            "bear": 27.9
          },
          "currentPrice": 410.1199951171875,
          "valuationGap": -0.2242,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787754142.7259922,
          "date": "2026-08-26",
          "fundamentalScore": 20.4,
          "confidence": 83.5,
          "fundamentalDamage": 0.7,
          "thesisDamage": 14.0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 33.8,
            "base": 38.3,
            "bear": 27.9
          },
          "currentPrice": 417.4100036621094,
          "valuationGap": -0.2242,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787788668.347003,
          "date": "2026-08-27",
          "fundamentalScore": 20.0,
          "confidence": 83.5,
          "fundamentalDamage": 6.5,
          "thesisDamage": 28.0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 32.1,
            "base": 37.9,
            "bear": 30.0
          },
          "currentPrice": 417.69000244140625,
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
          "asOf": 1787322925.8647835,
          "date": "2026-08-21",
          "overallStatus": "strengthening",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787407899.9208522,
          "date": "2026-08-22",
          "overallStatus": "strengthening",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787496888.8915975,
          "date": "2026-08-23",
          "overallStatus": "intact",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787582269.4850764,
          "date": "2026-08-24",
          "overallStatus": "intact",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787667920.4111497,
          "date": "2026-08-25",
          "overallStatus": "intact",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787754142.7259922,
          "date": "2026-08-26",
          "overallStatus": "intact",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787788668.347003,
          "date": "2026-08-27",
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
    "ASML": {
      "ticker": "ASML",
      "asOf": 1787788668.347003,
      "modelVersion": "fundamental-v1.3",
      "fundamentalScore": 17.7,
      "confidence": 68.5,
      "fundamentalSigma": null,
      "fundamentalSigmaProgress": {
        "status": "collecting",
        "collected": 7,
        "required": 8,
        "remaining": 1,
        "expectedReadyDate": "2026-08-28",
        "notice": "같은 KST 날짜의 반복 실행은 한 건으로 교체하며, 임의 과거 점수를 만들어 채우지 않습니다."
      },
      "priceSigma": -0.05,
      "priceDamage": 1.5,
      "fundamentalDamage": 0,
      "thesisDamage": 0,
      "thesisStatus": "intact",
      "damageRead": "현재 가격 변동과 펀더멘털 변화 사이에 큰 괴리는 확인되지 않았습니다.",
      "dimensions": {
        "growth": {
          "score": 21.746666,
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
          "score": 18.7121,
          "applicable": true
        }
      },
      "officialEvidence": [],
      "evidenceSummary": {
        "confirmedFacts": 0,
        "credibleReports": 0,
        "needsConfirmation": 1,
        "aiInferences": 1
      },
      "evidence": [
        {
          "headline": "TSMC의 지출 예측이 850억 달러에 도달함에 따라 ASML이 이익을 얻습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787256478,
          "sourceUrl": "https://finnhub.io/api/news?id=54269e0ef76fffb5e35aa26a20c5f9c1e274bdf1e56b5c04462f9ba85d9c4956",
          "verificationStatus": "needs_confirmation",
          "reason": "사업·실적 연결 경로 확인 필요",
          "direction": "positive",
          "impact": 2.0
        }
      ],
      "topPositive": [
        "사업·실적 연결 경로 확인 필요"
      ],
      "topNegative": [],
      "nextChecks": [
        "다음 실적의 매출·EPS·마진",
        "공식 가이던스 대비 실제 매출 달성 여부",
        "핵심 고객 수요·CAPEX",
        "FCF와 부채·CAPEX 변화"
      ],
      "theses": [
        {
          "id": "growth",
          "name": "성장 Thesis",
          "statement": "매출·EPS 성장 전망이 유지되고 본업 수익성이 함께 개선된다.",
          "status": "strengthening",
          "score": 21.7,
          "confidence": 68.5,
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
          "confidence": 68.5,
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
          "confidence": 68.5,
          "falsificationRules": [
            "핵심 고객 이탈 또는 점유율 하락이 공식 수치로 확인",
            "부채 부담 상승과 사업 리스크 확대가 동시 발생"
          ]
        }
      ],
      "scenarios": {
        "bull": 34.6,
        "base": 39.1,
        "bear": 26.3
      },
      "alerts": [],
      "businessProfile": {
        "updatedAt": "2026-08-13",
        "customers": [
          "대형 반도체 제조사(로직·파운드리·메모리) - 인텔·삼성·TSMC가 핵심 고객, 특히 TSMC가 전세계 EUV 장비 설치기반의 절반 이상을 보유"
        ],
        "strengths": [
          "EUV(극자외선 노광장비) 시장 점유율 90% 이상의 사실상 독점적 지위 - 첨단 반도체(5nm 이하) 생산에 필수 장비",
          "시스템 판매(약 75%) + 설치기반 관리·서비스(약 25%)의 반복매출 구조로 경기 방어력 일부 확보",
          "EUV 장비 한 대당 가격이 매우 높음(표준 EUV 약 €1.8억, 최신 High-NA는 €3.5억 이상) - 진입장벽이 극도로 높은 시장"
        ],
        "risks": [
          "⚠️ 중국向 매출 비중 축소 - 수출규제로 최선단 EUV는 애초에 중국에 못 팔고, DUV(구형)만 판매 가능(상세는 아래 newsLog 참고)",
          "소수 초대형 고객(TSMC·삼성·인텔)에 대한 매출 집중도가 높음 - 이들의 설비투자 사이클에 실적이 크게 좌우됨"
        ],
        "sources": [
          {
            "title": "ASML's Monopoly on EUV Lithography (Science & Technology News)",
            "url": "https://science-technology.news-articles.net/content/2026/08/02/asml-s-monopoly-on-euv-lithography.html"
          },
          {
            "title": "ASML: The $360B EUV Lithography Equipment Giant (Data Gravity)",
            "url": "https://www.datagravity.dev/p/asml-the-360b-euv-lithography-equipment"
          }
        ],
        "latestChanges": [
          {
            "headline": "TSMC의 지출 예측이 850억 달러에 도달함에 따라 ASML이 이익을 얻습니다.",
            "eventLabel": "AI·데이터센터 투자 변화",
            "publishedAt": 1787256478,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=54269e0ef76fffb5e35aa26a20c5f9c1e274bdf1e56b5c04462f9ba85d9c4956",
            "reason": "사업·실적 연결 경로 확인 필요"
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
      "guidanceTrackRecord": {
        "status": "collecting",
        "settledCount": 0,
        "metCount": 0,
        "hitRate": null,
        "confidenceAdjustment": 0.0,
        "worseningTwo": false,
        "recentOutcomes": [],
        "notice": "SEC Company Facts의 분기 매출만 회사 공식 가이던스와 대조합니다. 2개 결과 전에는 신뢰도에 반영하지 않습니다."
      },
      "valuationScenario": {
        "status": "available",
        "price": 1745.64,
        "currentEps": 38.18989,
        "nextEps": 51.6893,
        "epsGrowth": 0.3535,
        "marketPe": 45.71,
        "conservative": 1512.12,
        "base": 2362.69,
        "optimistic": 3662.17,
        "currentVsBase": -0.2612,
        "analystTargetMean": 2194.631,
        "analystTargetLow": 902.94116,
        "analystTargetHigh": 2898.3738,
        "evidenceWeights": {
          "bull": 34.6,
          "base": 39.1,
          "bear": 26.3
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
          "asOf": 1787322925.8647835,
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
          "currentPrice": 1750.31005859375,
          "valuationGap": -0.2605,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787407899.9208522,
          "date": "2026-08-22",
          "fundamentalScore": 18.1,
          "confidence": 73.5,
          "fundamentalDamage": 0,
          "thesisDamage": 7.0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 33.9,
            "base": 38.9,
            "bear": 27.2
          },
          "currentPrice": 1763.760009765625,
          "valuationGap": -0.2605,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787496888.8915975,
          "date": "2026-08-23",
          "fundamentalScore": 18.4,
          "confidence": 73.5,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "strengthening",
          "scenarioWeights": {
            "bull": 34.8,
            "base": 39.0,
            "bear": 26.2
          },
          "currentPrice": 1763.760009765625,
          "valuationGap": -0.2612,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787582269.4850764,
          "date": "2026-08-24",
          "fundamentalScore": 17.7,
          "confidence": 68.5,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 34.6,
            "base": 39.1,
            "bear": 26.3
          },
          "currentPrice": 1763.760009765625,
          "valuationGap": -0.2612,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787667920.4111497,
          "date": "2026-08-25",
          "fundamentalScore": 17.7,
          "confidence": 68.5,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 34.6,
            "base": 39.1,
            "bear": 26.3
          },
          "currentPrice": 1740.1300048828125,
          "valuationGap": -0.2612,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787754142.7259922,
          "date": "2026-08-26",
          "fundamentalScore": 17.7,
          "confidence": 68.5,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 34.6,
            "base": 39.1,
            "bear": 26.3
          },
          "currentPrice": 1744.1600341796875,
          "valuationGap": -0.2612,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787788668.347003,
          "date": "2026-08-27",
          "fundamentalScore": 17.7,
          "confidence": 68.5,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 34.6,
            "base": 39.1,
            "bear": 26.3
          },
          "currentPrice": 1745.6400146484375,
          "valuationGap": -0.2612,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        }
      ],
      "thesisHistory": [
        {
          "asOf": 1787322925.8647835,
          "date": "2026-08-21",
          "overallStatus": "intact",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787407899.9208522,
          "date": "2026-08-22",
          "overallStatus": "intact",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787496888.8915975,
          "date": "2026-08-23",
          "overallStatus": "strengthening",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787582269.4850764,
          "date": "2026-08-24",
          "overallStatus": "intact",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787667920.4111497,
          "date": "2026-08-25",
          "overallStatus": "intact",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787754142.7259922,
          "date": "2026-08-26",
          "overallStatus": "intact",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787788668.347003,
          "date": "2026-08-27",
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
      "asOf": 1787788668.347003,
      "modelVersion": "fundamental-v1.3",
      "fundamentalScore": 12.2,
      "confidence": 95.0,
      "fundamentalSigma": null,
      "fundamentalSigmaProgress": {
        "status": "collecting",
        "collected": 7,
        "required": 8,
        "remaining": 1,
        "expectedReadyDate": "2026-08-28",
        "notice": "같은 KST 날짜의 반복 실행은 한 건으로 교체하며, 임의 과거 점수를 만들어 채우지 않습니다."
      },
      "priceSigma": -1.63,
      "priceDamage": 54.4,
      "fundamentalDamage": 23.9,
      "thesisDamage": 56.0,
      "thesisStatus": "damaged",
      "damageRead": "현재 가격 변동과 펀더멘털 변화 사이에 큰 괴리는 확인되지 않았습니다.",
      "dimensions": {
        "growth": {
          "score": 23.063333333333333,
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
          "score": 14.07,
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
        "confirmedFacts": 3,
        "credibleReports": 0,
        "needsConfirmation": 2,
        "aiInferences": 3
      },
      "evidence": [
        {
          "headline": "Applied Materials 4% 하락, Lam Research 및 Teradyne Sink 5%: 칩 장비 주식 매도를 촉진하는 요인은 무엇입니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787163259,
          "sourceUrl": "https://finnhub.io/api/news?id=a19157318a679304836f7d2fc5d4ba80a2578ae575634b1681497cf3ab94884c",
          "verificationStatus": "needs_confirmation",
          "reason": "사업·실적 연결 경로 확인 필요",
          "direction": "negative",
          "impact": -4.0
        },
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
          "headline": "2026년 Applied Materials Rockets 98% 상승: AI Capex가 칩 기어 주식에 힘을 실어주기 때문에 AMAT는 Lam Research 및 KLA와 어떻게 비교됩니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787084558,
          "sourceUrl": "https://finnhub.io/api/news?id=593fbaba321fa99b238fa918201b88d19e76993e3de6d0d47edbf81a58801ef5",
          "verificationStatus": "needs_confirmation",
          "reason": "사업·실적 연결 경로 확인 필요",
          "direction": "negative",
          "impact": -4.0
        }
      ],
      "topPositive": [],
      "topNegative": [
        "사업·실적 연결 경로 확인 필요",
        "사업·실적 연결 경로 확인 필요"
      ],
      "nextChecks": [
        "다음 실적의 매출·EPS·마진",
        "공식 가이던스 대비 실제 매출 달성 여부",
        "핵심 고객 수요·CAPEX",
        "FCF와 부채·CAPEX 변화"
      ],
      "theses": [
        {
          "id": "growth",
          "name": "성장 Thesis",
          "statement": "매출·EPS 성장 전망이 유지되고 본업 수익성이 함께 개선된다.",
          "status": "strengthening",
          "score": 23.1,
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
          "status": "intact",
          "score": 8.1,
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
          "score": 4.7,
          "confidence": 95.0,
          "falsificationRules": [
            "핵심 고객 이탈 또는 점유율 하락이 공식 수치로 확인",
            "부채 부담 상승과 사업 리스크 확대가 동시 발생"
          ]
        }
      ],
      "scenarios": {
        "bull": 27.4,
        "base": 37.6,
        "bear": 35.0
      },
      "alerts": [],
      "businessProfile": {
        "updatedAt": "2026-08-13",
        "customers": [
          "파운드리·로직 제조사(매출 비중 62%) - TSMC·삼성·인텔 등",
          "메모리 제조사(D램 34%·낸드 4%) - 마이크론·삼성·SK하이닉스 등, 특히 1분기 D램향 매출이 사상 최대",
          "디스플레이(OLED·LCD) 제조사 - 반도체 외 인접 시장"
        ],
        "strengths": [
          "2026년 반도체장비 사업 20%대 성장 전망 - 증착(deposition)·식각(etch)·전자빔 검사 분야에서 점유율 확대 중",
          "첨단 패키징(HBM, 3D 칩렛 적층) 분야에서 강한 지위 - AI 반도체 트렌드의 직접 수혜",
          "반도체 장비 외에도 서비스(Applied Global Services) 부문이 안정적 매출 기여"
        ],
        "risks": [
          "⚠️ 좋은 가이던스에도 주가가 고점대비 크게 하락하는 패턴(상세는 아래 newsLog 참고) - 반도체장비 섹터 전반의 밸류에이션 재평가 국면과 연동",
          "소수 대형 고객사(TSMC·삼성·마이크론 등)의 설비투자 사이클에 실적이 크게 연동됨"
        ],
        "sources": [
          {
            "title": "Applied Materials Q1 FY 2026: AI Demand Lifts Outlook (Futurum Group)",
            "url": "https://futurumgroup.com/insights/applied-materials-q1-fy-2026-ai-demand-lifts-outlook/"
          },
          {
            "title": "Applied Materials expects 20% growth in semiconductor business in 2026 (Manufacturing Dive)",
            "url": "https://www.manufacturingdive.com/news/applied-materials-reports-7b-q1-2026-revenue/812715/"
          }
        ],
        "latestChanges": [
          {
            "headline": "Applied Materials 4% 하락, Lam Research 및 Teradyne Sink 5%: 칩 장비 주식 매도를 촉진하는 요인은 무엇입니까?",
            "eventLabel": "AI·데이터센터 투자 변화",
            "publishedAt": 1787163259,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=a19157318a679304836f7d2fc5d4ba80a2578ae575634b1681497cf3ab94884c",
            "reason": "사업·실적 연결 경로 확인 필요"
          },
          {
            "headline": "AMAT SEC Form 10-Q 공식 제출",
            "eventLabel": "정기 실적 공시",
            "publishedAt": 1787151600.0,
            "direction": "mixed",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/6951/000162828026058235/amat-20260726.htm",
            "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
          },
          {
            "headline": "2026년 Applied Materials Rockets 98% 상승: AI Capex가 칩 기어 주식에 힘을 실어주기 때문에 AMAT는 Lam Research 및 KLA와 어떻게 비교됩니까?",
            "eventLabel": "AI·데이터센터 투자 변화",
            "publishedAt": 1787084558,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=593fbaba321fa99b238fa918201b88d19e76993e3de6d0d47edbf81a58801ef5",
            "reason": "사업·실적 연결 경로 확인 필요"
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
      "guidanceTrackRecord": {
        "status": "collecting",
        "settledCount": 0,
        "metCount": 0,
        "hitRate": null,
        "confidenceAdjustment": 0.0,
        "worseningTwo": false,
        "recentOutcomes": [],
        "notice": "SEC Company Facts의 분기 매출만 회사 공식 가이던스와 대조합니다. 2개 결과 전에는 신뢰도에 반영하지 않습니다."
      },
      "valuationScenario": {
        "status": "available",
        "price": 479.76,
        "currentEps": 12.79222,
        "nextEps": 18.34123,
        "epsGrowth": 0.4338,
        "marketPe": 37.5,
        "conservative": 440.24,
        "base": 687.87,
        "optimistic": 1066.2,
        "currentVsBase": -0.3025,
        "analystTargetMean": 641.02856,
        "analystTargetLow": 358.0,
        "analystTargetHigh": 900.0,
        "evidenceWeights": {
          "bull": 27.4,
          "base": 37.6,
          "bear": 35.0
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
          "asOf": 1787322925.8647835,
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
          "currentPrice": 496.2099914550781,
          "valuationGap": -0.3025,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787407899.9208522,
          "date": "2026-08-22",
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
          "currentPrice": 492.32000732421875,
          "valuationGap": -0.3025,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787496888.8915975,
          "date": "2026-08-23",
          "fundamentalScore": 11.4,
          "confidence": 100,
          "fundamentalDamage": 41.4,
          "thesisDamage": 98.0,
          "thesisStatus": "damaged",
          "scenarioWeights": {
            "bull": 22.5,
            "base": 36.3,
            "bear": 41.2
          },
          "currentPrice": 492.32000732421875,
          "valuationGap": -0.3025,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787582269.4850764,
          "date": "2026-08-24",
          "fundamentalScore": 12.0,
          "confidence": 100,
          "fundamentalDamage": 28.6,
          "thesisDamage": 70.0,
          "thesisStatus": "damaged",
          "scenarioWeights": {
            "bull": 25.8,
            "base": 37.2,
            "bear": 37.0
          },
          "currentPrice": 492.32000732421875,
          "valuationGap": -0.3025,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787667920.4111497,
          "date": "2026-08-25",
          "fundamentalScore": 12.8,
          "confidence": 90.0,
          "fundamentalDamage": 11.3,
          "thesisDamage": 28.0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 30.7,
            "base": 38.4,
            "bear": 30.9
          },
          "currentPrice": 484.19000244140625,
          "valuationGap": -0.3025,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787754142.7259922,
          "date": "2026-08-26",
          "fundamentalScore": 12.2,
          "confidence": 95.0,
          "fundamentalDamage": 23.9,
          "thesisDamage": 56.0,
          "thesisStatus": "damaged",
          "scenarioWeights": {
            "bull": 27.4,
            "base": 37.6,
            "bear": 35.0
          },
          "currentPrice": 480.0400085449219,
          "valuationGap": -0.3025,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787788668.347003,
          "date": "2026-08-27",
          "fundamentalScore": 12.2,
          "confidence": 95.0,
          "fundamentalDamage": 23.9,
          "thesisDamage": 56.0,
          "thesisStatus": "damaged",
          "scenarioWeights": {
            "bull": 27.4,
            "base": 37.6,
            "bear": 35.0
          },
          "currentPrice": 479.760009765625,
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
          "asOf": 1787322925.8647835,
          "date": "2026-08-21",
          "overallStatus": "damaged",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787407899.9208522,
          "date": "2026-08-22",
          "overallStatus": "damaged",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787496888.8915975,
          "date": "2026-08-23",
          "overallStatus": "damaged",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787582269.4850764,
          "date": "2026-08-24",
          "overallStatus": "damaged",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787667920.4111497,
          "date": "2026-08-25",
          "overallStatus": "intact",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787754142.7259922,
          "date": "2026-08-26",
          "overallStatus": "damaged",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787788668.347003,
          "date": "2026-08-27",
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
      "asOf": 1787788668.347003,
      "modelVersion": "fundamental-v1.3",
      "fundamentalScore": 12.7,
      "confidence": 85.0,
      "fundamentalSigma": null,
      "fundamentalSigmaProgress": {
        "status": "collecting",
        "collected": 7,
        "required": 8,
        "remaining": 1,
        "expectedReadyDate": "2026-08-28",
        "notice": "같은 KST 날짜의 반복 실행은 한 건으로 교체하며, 임의 과거 점수를 만들어 채우지 않습니다."
      },
      "priceSigma": -0.09,
      "priceDamage": 3.1,
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
          "score": 15.5545,
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
          "headline": "2026년 Applied Materials Rockets 98% 상승: AI Capex가 칩 기어 주식에 힘을 실어주기 때문에 AMAT는 Lam Research 및 KLA와 어떻게 비교됩니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787084558,
          "sourceUrl": "https://finnhub.io/api/news?id=593fbaba321fa99b238fa918201b88d19e76993e3de6d0d47edbf81a58801ef5",
          "verificationStatus": "needs_confirmation",
          "reason": "사업·실적 연결 경로 확인 필요",
          "direction": "negative",
          "impact": -4.0
        }
      ],
      "topPositive": [],
      "topNegative": [
        "사업·실적 연결 경로 확인 필요"
      ],
      "nextChecks": [
        "다음 실적의 매출·EPS·마진",
        "공식 가이던스 대비 실제 매출 달성 여부",
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
          "score": 5.2,
          "confidence": 85.0,
          "falsificationRules": [
            "핵심 고객 이탈 또는 점유율 하락이 공식 수치로 확인",
            "부채 부담 상승과 사업 리스크 확대가 동시 발생"
          ]
        }
      ],
      "scenarios": {
        "bull": 30.6,
        "base": 38.4,
        "bear": 31.0
      },
      "alerts": [],
      "businessProfile": {
        "updatedAt": "2026-08-20",
        "customers": [
          "메모리·파운드리·로직 제조사 - 3D낸드·D램·첨단 로직 생산업체가 핵심 고객, 아시아(대만·한국 등)에 고객이 집중"
        ],
        "strengths": [
          "식각(etch) 시장 점유율 약 55%, 증착(deposition) 시장 약 24%로 두 핵심 공정에서 지배적 지위",
          "AI·클라우드발 고성능 반도체 수요가 3D 구조·게이트올어라운드(GAA) 트랜지스터 전환을 가속하며 직접 수혜",
          "파운드리·로직 부문 매출이 TSMC의 2nm·GAA 전환에 힘입어 크게 성장 중"
        ],
        "risks": [
          "⚠️ 실적 서프라이즈에도 주가가 한 달 새 20% 넘게 하락하는 패턴(상세는 아래 newsLog 참고) - 반도체장비 섹터 전반의 밸류에이션 조정과 맞물림",
          "고객사가 소수 대형 메모리·파운드리 업체에 집중돼 있어 이들의 설비투자 사이클(특히 메모리 가격 사이클)에 실적이 크게 좌우됨"
        ],
        "sources": [
          {
            "title": "Lam Research 2026 10-K: Driving Semiconductor Breakthroughs with Advanced Etch, Deposition & Clean Technologies (Minichart)",
            "url": "https://www.minichart.com.sg/2026/08/08/lam-research-2026-10-k-driving-semiconductor-breakthroughs-with-advanced-etch-deposition-clean-technologies/"
          },
          {
            "title": "Lam Research Corporation (LRCX): A Bull Case Theory (Yahoo Finance)",
            "url": "https://finance.yahoo.com/news/lam-research-corporation-lrcx-bull-165904289.html"
          }
        ],
        "latestChanges": [
          {
            "headline": "2026년 Applied Materials Rockets 98% 상승: AI Capex가 칩 기어 주식에 힘을 실어주기 때문에 AMAT는 Lam Research 및 KLA와 어떻게 비교됩니까?",
            "eventLabel": "AI·데이터센터 투자 변화",
            "publishedAt": 1787084558,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=593fbaba321fa99b238fa918201b88d19e76993e3de6d0d47edbf81a58801ef5",
            "reason": "사업·실적 연결 경로 확인 필요"
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
      "guidanceTrackRecord": {
        "status": "collecting",
        "settledCount": 0,
        "metCount": 0,
        "hitRate": null,
        "confidenceAdjustment": 0.0,
        "worseningTwo": false,
        "recentOutcomes": [],
        "notice": "SEC Company Facts의 분기 매출만 회사 공식 가이던스와 대조합니다. 2개 결과 전에는 신뢰도에 반영하지 않습니다."
      },
      "valuationScenario": {
        "status": "available",
        "price": 312.88,
        "currentEps": 9.45969,
        "nextEps": 11.55714,
        "epsGrowth": 0.2217,
        "marketPe": 33.08,
        "conservative": 244.64,
        "base": 382.25,
        "optimistic": 592.49,
        "currentVsBase": -0.1815,
        "analystTargetMean": 371.35483,
        "analystTargetLow": 290.0,
        "analystTargetHigh": 500.0,
        "evidenceWeights": {
          "bull": 30.6,
          "base": 38.4,
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
          "asOf": 1787322925.8647835,
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
          "currentPrice": 310.5299987792969,
          "valuationGap": -0.1815,
          "theses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787407899.9208522,
          "date": "2026-08-22",
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
          "currentPrice": 314.0,
          "valuationGap": -0.1815,
          "theses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787496888.8915975,
          "date": "2026-08-23",
          "fundamentalScore": 12.7,
          "confidence": 85.0,
          "fundamentalDamage": 10.7,
          "thesisDamage": 28.0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 30.6,
            "base": 38.4,
            "bear": 31.0
          },
          "currentPrice": 314.0,
          "valuationGap": -0.1815,
          "theses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787582269.4850764,
          "date": "2026-08-24",
          "fundamentalScore": 13.3,
          "confidence": 71.7,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 33.7,
            "base": 39.4,
            "bear": 26.9
          },
          "currentPrice": 314.0,
          "valuationGap": -0.1815,
          "theses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787667920.4111497,
          "date": "2026-08-25",
          "fundamentalScore": 13.3,
          "confidence": 71.7,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 33.7,
            "base": 39.4,
            "bear": 26.9
          },
          "currentPrice": 310.1700134277344,
          "valuationGap": -0.1815,
          "theses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787754142.7259922,
          "date": "2026-08-26",
          "fundamentalScore": 12.7,
          "confidence": 85.0,
          "fundamentalDamage": 10.7,
          "thesisDamage": 28.0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 30.6,
            "base": 38.4,
            "bear": 31.0
          },
          "currentPrice": 314.6600036621094,
          "valuationGap": -0.1815,
          "theses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787788668.347003,
          "date": "2026-08-27",
          "fundamentalScore": 12.7,
          "confidence": 85.0,
          "fundamentalDamage": 10.7,
          "thesisDamage": 28.0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 30.6,
            "base": 38.4,
            "bear": 31.0
          },
          "currentPrice": 312.8800048828125,
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
          "asOf": 1787322925.8647835,
          "date": "2026-08-21",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787407899.9208522,
          "date": "2026-08-22",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787496888.8915975,
          "date": "2026-08-23",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787582269.4850764,
          "date": "2026-08-24",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787667920.4111497,
          "date": "2026-08-25",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787754142.7259922,
          "date": "2026-08-26",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787788668.347003,
          "date": "2026-08-27",
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
      "asOf": 1787788668.347003,
      "modelVersion": "fundamental-v1.3",
      "fundamentalScore": 16.3,
      "confidence": 68.8,
      "fundamentalSigma": null,
      "fundamentalSigmaProgress": {
        "status": "collecting",
        "collected": 7,
        "required": 8,
        "remaining": 1,
        "expectedReadyDate": "2026-08-28",
        "notice": "같은 KST 날짜의 반복 실행은 한 건으로 교체하며, 임의 과거 점수를 만들어 채우지 않습니다."
      },
      "priceSigma": -0.92,
      "priceDamage": 30.7,
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
        "공식 가이던스 대비 실제 매출 달성 여부",
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
        "updatedAt": "2026-08-20",
        "customers": [
          "선단 로직·메모리 파운드리(TSMC·삼성 등) - 결함 검사·계측(공정관리) 장비, 반도체 패키징·PCB·컴포넌트 업체까지 폭넓게 포함"
        ],
        "strengths": [
          "공정관리(결함검사·계측) 시장 점유율 약 60%로 경쟁사가 사실상 없는 독점적 지위 - 2021년 이후 점유율이 360bp 더 확대돼 2위 경쟁사 대비 7배 규모",
          "반도체 설계가 복잡해질수록(첨단공정 전환) 웨이퍼 수량 증가보다 검사·계측 수요가 더 빠르게 늘어나는 구조적 수혜",
          "2026년 공정관리 장비 시장이 전체 웨이퍼장비 시장보다 더 빠르게(20%대) 성장할 전망"
        ],
        "risks": [
          "⚠️ 좋은 실적에도 중국 수출규제 우려로 주가가 크게 흔들림(상세는 아래 newsLog 참고) - 매출의 약 30%가 중국에서 발생해 지정학적 정책 변화에 민감",
          "소수 초대형 고객(TSMC·삼성 등)에 대한 매출 의존도가 높음"
        ],
        "sources": [
          {
            "title": "Can Rising Process Control Intensity Drive KLA's Next Growth Phase? (Yahoo Finance)",
            "url": "https://finance.yahoo.com/markets/stocks/articles/rising-process-control-intensity-drive-130000496.html"
          },
          {
            "title": "KLA (KLAC) Has a Services-and-Process-Control Engine Bigger Than the Wafer-Fab Cycle (Alphastreet)",
            "url": "https://news.alphastreet.com/kla-klac-has-a-services-and-process-control-engine-bigger-than-the-wafer-fab-cycle/"
          }
        ],
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
      "guidanceTrackRecord": {
        "status": "collecting",
        "settledCount": 0,
        "metCount": 0,
        "hitRate": null,
        "confidenceAdjustment": 0.0,
        "worseningTwo": false,
        "recentOutcomes": [],
        "notice": "SEC Company Facts의 분기 매출만 회사 공식 가이던스와 대조합니다. 2개 결과 전에는 신뢰도에 반영하지 않습니다."
      },
      "valuationScenario": {
        "status": "available",
        "price": 183.83,
        "currentEps": 5.4493,
        "nextEps": 6.60384,
        "epsGrowth": 0.2119,
        "marketPe": 33.73,
        "conservative": 142.58,
        "base": 222.78,
        "optimistic": 345.31,
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
          "asOf": 1787322925.8647835,
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
          "currentPrice": 185.86000061035156,
          "valuationGap": -0.1748,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787407899.9208522,
          "date": "2026-08-22",
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
          "currentPrice": 183.99000549316406,
          "valuationGap": -0.1748,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787496888.8915975,
          "date": "2026-08-23",
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
          "currentPrice": 183.99000549316406,
          "valuationGap": -0.1748,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787582269.4850764,
          "date": "2026-08-24",
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
          "currentPrice": 183.99000549316406,
          "valuationGap": -0.1748,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787667920.4111497,
          "date": "2026-08-25",
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
          "currentPrice": 181.57000732421875,
          "valuationGap": -0.1748,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787754142.7259922,
          "date": "2026-08-26",
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
          "currentPrice": 183.33999633789062,
          "valuationGap": -0.1748,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787788668.347003,
          "date": "2026-08-27",
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
          "currentPrice": 183.8300018310547,
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
          "asOf": 1787322925.8647835,
          "date": "2026-08-21",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787407899.9208522,
          "date": "2026-08-22",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787496888.8915975,
          "date": "2026-08-23",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787582269.4850764,
          "date": "2026-08-24",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787667920.4111497,
          "date": "2026-08-25",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787754142.7259922,
          "date": "2026-08-26",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787788668.347003,
          "date": "2026-08-27",
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
      "asOf": 1787788668.347003,
      "modelVersion": "fundamental-v1.3",
      "fundamentalScore": 54.0,
      "confidence": 100,
      "fundamentalSigma": null,
      "fundamentalSigmaProgress": {
        "status": "collecting",
        "collected": 7,
        "required": 8,
        "remaining": 1,
        "expectedReadyDate": "2026-08-28",
        "notice": "같은 KST 날짜의 반복 실행은 한 건으로 교체하며, 임의 과거 점수를 만들어 채우지 않습니다."
      },
      "priceSigma": 0.53,
      "priceDamage": 17.8,
      "fundamentalDamage": 0,
      "thesisDamage": 0,
      "thesisStatus": "strengthening",
      "damageRead": "현재 가격 변동과 펀더멘털 변화 사이에 큰 괴리는 확인되지 않았습니다.",
      "dimensions": {
        "growth": {
          "score": 85.49000000000001,
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
          "score": 3.7388000000000012,
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
        "needsConfirmation": 7,
        "aiInferences": 8
      },
      "evidence": [
        {
          "headline": "RBC Capital, Broadcom 부문에서 실적을 유지하고 목표 가격 400달러 유지",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1787734386,
          "sourceUrl": "https://finnhub.io/api/news?id=4481eba7a3af2264a31e545919a5f64097bc00f6a382588094477dc6abd03663",
          "verificationStatus": "needs_confirmation",
          "reason": "AI 서버 메모리 수요와 가격 강세",
          "direction": "positive",
          "impact": 1.0
        },
        {
          "headline": "MU SEC Form 8-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1787670000.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/723125/000110465926101067/tm2624017d1_8k.htm",
          "verificationStatus": "confirmed",
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기",
          "direction": "mixed",
          "impact": 0
        },
        {
          "headline": "Amazon 및 Microsoft에서 AI 투자가 성과를 내기 시작하면 SanDisk가 혜택을 볼 수 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787645530,
          "sourceUrl": "https://finnhub.io/api/news?id=4149fc64b4cd21b278e0a067b703e12566c3056dad0e555e5cc45b39bb8f51a4",
          "verificationStatus": "needs_confirmation",
          "reason": "AI 서버 메모리 수요와 가격 강세",
          "direction": "positive",
          "impact": 2.0
        },
        {
          "headline": "Cowell은 여전히 Apple에 묶여 있지만 투자자들은 강력한 수입을 응원합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787593932,
          "sourceUrl": "https://finnhub.io/api/news?id=2f48d983bd7a3006b3e02d1bc4ccadf789ebd14740b2a1b1eea7f1de4f5449ee",
          "verificationStatus": "needs_confirmation",
          "reason": "AI 서버 메모리 수요와 가격 강세",
          "direction": "positive",
          "impact": 2.0
        },
        {
          "headline": "Nvidia Q2 미리보기: 비트의 가격이 책정되었지만 AI 투자에 대해 궁금한 점이 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787578175,
          "sourceUrl": "https://finnhub.io/api/news?id=2e89ef21adffa834d2233b744bf1c031a94c4326cda283b7f8d865627254cd23",
          "verificationStatus": "needs_confirmation",
          "reason": "AI 서버 메모리 수요와 가격 강세",
          "direction": "positive",
          "impact": 2.0
        },
        {
          "headline": "Salesforce, 2분기 혼합 보고서 작성, 투자자들은 H2 가속화에 대해 회의적 태도 유지",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787570681,
          "sourceUrl": "https://finnhub.io/api/news?id=d3bde0ff5073e01d5f7d622876a639af648b59960068b47f82b6e23556dfc694",
          "verificationStatus": "needs_confirmation",
          "reason": "AI 서버 메모리 수요와 가격 강세",
          "direction": "positive",
          "impact": 2.0
        },
        {
          "headline": "엔비디아: AI 칩과 재무화 전략을 모두 갖춘 디스럽터",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787569791,
          "sourceUrl": "https://finnhub.io/api/news?id=e0665b2f98336b15334e7573b52b4a913863de3d52074a520fe3e0acca62154f",
          "verificationStatus": "needs_confirmation",
          "reason": "AI 서버 메모리 수요와 가격 강세",
          "direction": "positive",
          "impact": 2.0
        },
        {
          "headline": "Broadcom: $ 1,000억의 AI 수익은 물어볼 것이 많습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787562824,
          "sourceUrl": "https://finnhub.io/api/news?id=d6581f1a65860a5b7f92df7eebf715ff68f6df0ca68e08e235901cb8678b7c9a",
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
      "topNegative": [],
      "nextChecks": [
        "다음 실적의 매출·EPS·마진",
        "공식 가이던스 대비 실제 매출 달성 여부",
        "핵심 고객 수요·CAPEX",
        "FCF와 부채·CAPEX 변화"
      ],
      "theses": [
        {
          "id": "growth",
          "name": "성장 Thesis",
          "statement": "매출·EPS 성장 전망이 유지되고 본업 수익성이 함께 개선된다.",
          "status": "strengthening",
          "score": 85.5,
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
          "score": 1.2,
          "confidence": 100,
          "falsificationRules": [
            "핵심 고객 이탈 또는 점유율 하락이 공식 수치로 확인",
            "부채 부담 상승과 사업 리스크 확대가 동시 발생"
          ]
        }
      ],
      "scenarios": {
        "bull": 43.4,
        "base": 36.0,
        "bear": 20.6
      },
      "alerts": [],
      "businessProfile": {
        "updatedAt": "2026-08-20",
        "customers": [
          "AI 데이터센터 기업(클라우드메모리 부문, +100% YoY 최대 성장) - 엔비디아 등에 HBM(고대역폭메모리) 공급, 블랙웰 B200/B300 플랫폼에 탑재",
          "전략적 고객 16곳과 장기공급계약 체결 - D램 물량의 약 20%·낸드 물량의 약 3분의 1을 차지(대형고객 4곳+중견고객 3곳)",
          "모바일·PC 제조사(모바일&클라이언트 부문, +63%), 자동차·산업(+49%)"
        ],
        "strengths": [
          "2026년 HBM 공급이 이미 완판(가격·물량 모두 계약 완료) - 차세대 HBM4까지 포함해 공급부족 상태가 지속될 전망",
          "메모리(D램·낸드) 슈퍼사이클 한가운데 있음 - AI 데이터센터가 전세계 메모리 공급의 상당 부분을 소비하며 가격이 분기마다 급등",
          "4대 사업부문(클라우드메모리·코어데이터센터·모바일클라이언트·자동차임베디드) 전부 두 자릿수 이상 성장"
        ],
        "risks": [
          "⚠️ 현재의 폭발적 성장은 회계상 '1회성'이 아니라 산업 사이클(메모리 슈퍼사이클)이라는 점을 명확히 구분해야 함 - 사이클은 과거에도 항상 꺾인 전례가 있어서 영원하지 않음(상세는 analystLog 참고)",
          "메모리는 전통적으로 가격 변동성이 매우 큰 상품(commodity) 성격의 사업 - 공급 과잉 국면이 오면 가격·마진이 빠르게 반전될 수 있음"
        ],
        "sources": [
          {
            "title": "Micron Technology Q1 FY 2026 Sets Records; Strong Q2 Outlook (Futurum Group)",
            "url": "https://futurumgroup.com/insights/micron-technology-q1-fy-2026-sets-records-strong-q2-outlook/"
          },
          {
            "title": "Micron Technology (MU): Sold-Out HBM Supply and AI Tailwinds Point to Strong 2026 Growth (Tickeron)",
            "url": "https://tickeron.com/blogs/micron-technology-mu-sold-out-hbm-supply-and-ai-tailwinds-point-to-strong-2026-growth-12100/"
          }
        ],
        "latestChanges": [
          {
            "headline": "RBC Capital, Broadcom 부문에서 실적을 유지하고 목표 가격 400달러 유지",
            "eventLabel": "애널리스트 목표주가 변경",
            "publishedAt": 1787734386,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=4481eba7a3af2264a31e545919a5f64097bc00f6a382588094477dc6abd03663",
            "reason": "AI 서버 메모리 수요와 가격 강세"
          },
          {
            "headline": "MU SEC Form 8-K 공식 제출",
            "eventLabel": "중요사항 공시",
            "publishedAt": 1787670000.0,
            "direction": "mixed",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/723125/000110465926101067/tm2624017d1_8k.htm",
            "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
          },
          {
            "headline": "Amazon 및 Microsoft에서 AI 투자가 성과를 내기 시작하면 SanDisk가 혜택을 볼 수 있습니다.",
            "eventLabel": "AI·데이터센터 투자 변화",
            "publishedAt": 1787645530,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=4149fc64b4cd21b278e0a067b703e12566c3056dad0e555e5cc45b39bb8f51a4",
            "reason": "AI 서버 메모리 수요와 가격 강세"
          },
          {
            "headline": "Cowell은 여전히 Apple에 묶여 있지만 투자자들은 강력한 수입을 응원합니다.",
            "eventLabel": "AI·데이터센터 투자 변화",
            "publishedAt": 1787593932,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=2f48d983bd7a3006b3e02d1bc4ccadf789ebd14740b2a1b1eea7f1de4f5449ee",
            "reason": "AI 서버 메모리 수요와 가격 강세"
          },
          {
            "headline": "Nvidia Q2 미리보기: 비트의 가격이 책정되었지만 AI 투자에 대해 궁금한 점이 있습니다.",
            "eventLabel": "AI·데이터센터 투자 변화",
            "publishedAt": 1787578175,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=2e89ef21adffa834d2233b744bf1c031a94c4326cda283b7f8d865627254cd23",
            "reason": "AI 서버 메모리 수요와 가격 강세"
          },
          {
            "headline": "Salesforce, 2분기 혼합 보고서 작성, 투자자들은 H2 가속화에 대해 회의적 태도 유지",
            "eventLabel": "AI·데이터센터 투자 변화",
            "publishedAt": 1787570681,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=d3bde0ff5073e01d5f7d622876a639af648b59960068b47f82b6e23556dfc694",
            "reason": "AI 서버 메모리 수요와 가격 강세"
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
      "guidanceTrackRecord": {
        "status": "collecting",
        "settledCount": 0,
        "metCount": 0,
        "hitRate": null,
        "confidenceAdjustment": 0.0,
        "worseningTwo": false,
        "recentOutcomes": [],
        "notice": "SEC Company Facts의 분기 매출만 회사 공식 가이던스와 대조합니다. 2개 결과 전에는 신뢰도에 반영하지 않습니다."
      },
      "valuationScenario": {
        "status": "available",
        "price": 938.4,
        "currentEps": 73.40044,
        "nextEps": 155.02524,
        "epsGrowth": 1.112,
        "marketPe": 12.78,
        "conservative": 1268.45,
        "base": 1981.95,
        "optimistic": 3072.02,
        "currentVsBase": -0.5265,
        "analystTargetMean": 1515.1136,
        "analystTargetLow": 361.0,
        "analystTargetHigh": 2200.0,
        "evidenceWeights": {
          "bull": 43.4,
          "base": 36.0,
          "bear": 20.6
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
          "asOf": 1787322925.8647835,
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
          "currentPrice": 974.3300170898438,
          "valuationGap": -0.5282,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787407899.9208522,
          "date": "2026-08-22",
          "fundamentalScore": 54.6,
          "confidence": 100,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "strengthening",
          "scenarioWeights": {
            "bull": 43.5,
            "base": 36.0,
            "bear": 20.5
          },
          "currentPrice": 966.780029296875,
          "valuationGap": -0.5282,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787496888.8915975,
          "date": "2026-08-23",
          "fundamentalScore": 54.5,
          "confidence": 100,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "strengthening",
          "scenarioWeights": {
            "bull": 43.5,
            "base": 36.0,
            "bear": 20.5
          },
          "currentPrice": 966.780029296875,
          "valuationGap": -0.5265,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787582269.4850764,
          "date": "2026-08-24",
          "fundamentalScore": 54.0,
          "confidence": 100,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "strengthening",
          "scenarioWeights": {
            "bull": 43.4,
            "base": 36.0,
            "bear": 20.6
          },
          "currentPrice": 966.780029296875,
          "valuationGap": -0.5265,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787667920.4111497,
          "date": "2026-08-25",
          "fundamentalScore": 54.0,
          "confidence": 100,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "strengthening",
          "scenarioWeights": {
            "bull": 43.4,
            "base": 36.0,
            "bear": 20.6
          },
          "currentPrice": 910.4299926757812,
          "valuationGap": -0.5265,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787754142.7259922,
          "date": "2026-08-26",
          "fundamentalScore": 54.0,
          "confidence": 100,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "strengthening",
          "scenarioWeights": {
            "bull": 43.4,
            "base": 36.0,
            "bear": 20.6
          },
          "currentPrice": 932.969970703125,
          "valuationGap": -0.5265,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787788668.347003,
          "date": "2026-08-27",
          "fundamentalScore": 54.0,
          "confidence": 100,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "strengthening",
          "scenarioWeights": {
            "bull": 43.4,
            "base": 36.0,
            "bear": 20.6
          },
          "currentPrice": 938.4000244140625,
          "valuationGap": -0.5265,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        }
      ],
      "thesisHistory": [
        {
          "asOf": 1787322925.8647835,
          "date": "2026-08-21",
          "overallStatus": "strengthening",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787407899.9208522,
          "date": "2026-08-22",
          "overallStatus": "strengthening",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787496888.8915975,
          "date": "2026-08-23",
          "overallStatus": "strengthening",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787582269.4850764,
          "date": "2026-08-24",
          "overallStatus": "strengthening",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787667920.4111497,
          "date": "2026-08-25",
          "overallStatus": "strengthening",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787754142.7259922,
          "date": "2026-08-26",
          "overallStatus": "strengthening",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787788668.347003,
          "date": "2026-08-27",
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
      "asOf": 1787788668.347003,
      "modelVersion": "fundamental-v1.3",
      "fundamentalScore": 10.7,
      "confidence": 100,
      "fundamentalSigma": null,
      "fundamentalSigmaProgress": {
        "status": "collecting",
        "collected": 7,
        "required": 8,
        "remaining": 1,
        "expectedReadyDate": "2026-08-28",
        "notice": "같은 KST 날짜의 반복 실행은 한 건으로 교체하며, 임의 과거 점수를 만들어 채우지 않습니다."
      },
      "priceSigma": 0.39,
      "priceDamage": 12.9,
      "fundamentalDamage": 27.9,
      "thesisDamage": 56.0,
      "thesisStatus": "damaged",
      "damageRead": "펀더멘털 위험 신호가 가격에 충분히 반영되지 않았을 가능성이 있습니다.",
      "dimensions": {
        "growth": {
          "score": 18.810000333333335,
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
          "score": 6.899999999999999,
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
          "headline": "SNXX: Sandisk의 회복에 대한 레버리지 노출 그러나 단기 변동성으로 인해 주의가 요구됨",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1787727600,
          "sourceUrl": "https://finnhub.io/api/news?id=2655b5499832086dd089e5178af7978d49bb40a69b0518d9322e793fbb21256c",
          "verificationStatus": "needs_confirmation",
          "reason": "회사 실적과의 연결고리 확인",
          "direction": "negative",
          "impact": -5.0
        },
        {
          "headline": "Amazon 및 Microsoft에서 AI 투자가 성과를 내기 시작하면 SanDisk가 혜택을 볼 수 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787645530,
          "sourceUrl": "https://finnhub.io/api/news?id=4149fc64b4cd21b278e0a067b703e12566c3056dad0e555e5cc45b39bb8f51a4",
          "verificationStatus": "needs_confirmation",
          "reason": "사업·실적 연결 경로 확인 필요",
          "direction": "positive",
          "impact": 2.0
        },
        {
          "headline": "가장 큰 움직임을 보이는 주식 프리마켓: 알리바바, 마벨, 샌디스크, 코인베이스 등",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1787556683,
          "sourceUrl": "https://finnhub.io/api/news?id=9aa75525346d31a1dfb90d34d8747ec329f9b8486db12c5b152cef660cddf179",
          "verificationStatus": "needs_confirmation",
          "reason": "회사 실적과의 연결고리 확인",
          "direction": "negative",
          "impact": -5.0
        },
        {
          "headline": "왜 샌디스크인가? 순환성만이 열린 질문이 아닙니다",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1787529484,
          "sourceUrl": "https://finnhub.io/api/news?id=d871a4b9f9be55eade90d6bcac76248076964637eac0d530c31f0911db394e0d",
          "verificationStatus": "needs_confirmation",
          "reason": "회사 실적과의 연결고리 확인",
          "direction": "negative",
          "impact": -4.0
        },
        {
          "headline": "마이크론 vs. 샌디스크: 어떤 AI 메모리 스톡을 소유해야 할까요?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1787480100,
          "sourceUrl": "https://finnhub.io/api/news?id=a9f95a3ddc0f438beae6bdd8d5b0aef37b17bfc7403c2ad950068d215fca7ce1",
          "verificationStatus": "needs_confirmation",
          "reason": "사업·실적 연결 경로 확인 필요",
          "direction": "negative",
          "impact": -4.0
        },
        {
          "headline": "샌디스크 (SNDK) 주식은 투자자의 날 및 수익 후 공정가치 상승을 봅니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787454484,
          "sourceUrl": "https://finnhub.io/api/news?id=17347806dc7705dd4c86d3a06f09b418fec541f29bd63178bfb8a86d5dd7a8c4",
          "verificationStatus": "needs_confirmation",
          "reason": "사업·실적 연결 경로 확인 필요",
          "direction": "positive",
          "impact": 2.0
        },
        {
          "headline": "Don 't Sell SanDisk Corporation (NASDAQ: SNDK) Because A Billionaire Did So, Says Jim Cramer",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787448450,
          "sourceUrl": "https://finnhub.io/api/news?id=585e4c040966a311a704971332a9f168c11e751eab650107ff0b5bdcbc5651eb",
          "verificationStatus": "needs_confirmation",
          "reason": "사업·실적 연결 경로 확인 필요",
          "direction": "positive",
          "impact": 2.0
        },
        {
          "headline": "SNDK, MU, BE, NBIS 주식 하락: Ken Griffin의 Citadel, 상황 인식 포트폴리오에서 40억 달러 손실",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1787355216,
          "sourceUrl": "https://finnhub.io/api/news?id=06321b39f10122eebcadf0aebf8e66dbc9423feca1fb6851ccc0b7b0a9803206",
          "verificationStatus": "needs_confirmation",
          "reason": "회사 실적과의 연결고리 확인",
          "direction": "positive",
          "impact": 4.0
        }
      ],
      "topPositive": [
        "사업·실적 연결 경로 확인 필요",
        "사업·실적 연결 경로 확인 필요",
        "사업·실적 연결 경로 확인 필요"
      ],
      "topNegative": [
        "회사 실적과의 연결고리 확인",
        "회사 실적과의 연결고리 확인",
        "회사 실적과의 연결고리 확인"
      ],
      "nextChecks": [
        "다음 실적의 매출·EPS·마진",
        "공식 가이던스 대비 실제 매출 달성 여부",
        "핵심 고객 수요·CAPEX",
        "FCF와 부채·CAPEX 변화"
      ],
      "theses": [
        {
          "id": "growth",
          "name": "성장 Thesis",
          "statement": "매출·EPS 성장 전망이 유지되고 본업 수익성이 함께 개선된다.",
          "status": "intact",
          "score": 18.8,
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
          "score": 2.3,
          "confidence": 100,
          "falsificationRules": [
            "핵심 고객 이탈 또는 점유율 하락이 공식 수치로 확인",
            "부채 부담 상승과 사업 리스크 확대가 동시 발생"
          ]
        }
      ],
      "scenarios": {
        "bull": 27.2,
        "base": 37.6,
        "bear": 35.2
      },
      "alerts": [],
      "businessProfile": {
        "updatedAt": "2026-08-20",
        "customers": [
          "하이퍼스케일러(아마존·마이크로소프트·구글 등) - 엔터프라이즈·데이터센터向 고용량 SSD, 현재 최대 성장엔진",
          "PC 제조사(OEM), NAS(네트워크 스토리지) 업체 - USB드라이브·메모리카드·내장형 SSD"
        ],
        "strengths": [
          "낸드(NAND) 플래시 메모리 한 분야에 집중된 전문 사업모델 - 2025년 2월 웨스턴디지털에서 분사 이후 독립기업으로서 고속 성장",
          "2026년 들어 주가 약 500% 급등 - S&P500 내 최고 상승률 종목 중 하나로 낸드 슈퍼사이클의 대표 수혜주",
          "매출 성장 +250% YoY(3분기), 비GAAP 매출총이익률 78.4%까지 확대"
        ],
        "risks": [
          "⚠️ 현재의 폭발적 성장·마진 확대는 산업 사이클(낸드 슈퍼사이클)에 기인 - 1회성 회계 이벤트가 아니지만 동시에 영원한 추세도 아님, 사이클 하강 국면에서는 반대로 급락할 수 있음(상세는 analystLog 참고)",
          "낸드 단일 제품 집중 사업모델이라 D램 등으로 다각화된 경쟁사 대비 사이클 변동에 더 크게 노출됨"
        ],
        "sources": [
          {
            "title": "Deep Dive: SanDisk (SNDK) and the 2026 NAND Flash Shortage (FinancialContent)",
            "url": "https://www.financialcontent.com/article/finterra-2026-3-31-deep-dive-sandisk-sndk-and-the-2026-nand-flash-shortage"
          },
          {
            "title": "SanDisk Stock Analysis 2026: NAND Supercycle, HBF & AI Storage (Market Digests)",
            "url": "https://marketdigests.com/sandisk-stock-analysis-2026/"
          }
        ],
        "latestChanges": [
          {
            "headline": "SNXX: Sandisk의 회복에 대한 레버리지 노출 그러나 단기 변동성으로 인해 주의가 요구됨",
            "eventLabel": "워런트·신주·희석 가능성",
            "publishedAt": 1787727600,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=2655b5499832086dd089e5178af7978d49bb40a69b0518d9322e793fbb21256c",
            "reason": "회사 실적과의 연결고리 확인"
          },
          {
            "headline": "Amazon 및 Microsoft에서 AI 투자가 성과를 내기 시작하면 SanDisk가 혜택을 볼 수 있습니다.",
            "eventLabel": "AI·데이터센터 투자 변화",
            "publishedAt": 1787645530,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=4149fc64b4cd21b278e0a067b703e12566c3056dad0e555e5cc45b39bb8f51a4",
            "reason": "사업·실적 연결 경로 확인 필요"
          },
          {
            "headline": "가장 큰 움직임을 보이는 주식 프리마켓: 알리바바, 마벨, 샌디스크, 코인베이스 등",
            "eventLabel": "워런트·신주·희석 가능성",
            "publishedAt": 1787556683,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=9aa75525346d31a1dfb90d34d8747ec329f9b8486db12c5b152cef660cddf179",
            "reason": "회사 실적과의 연결고리 확인"
          },
          {
            "headline": "왜 샌디스크인가? 순환성만이 열린 질문이 아닙니다",
            "eventLabel": "규제·소송·수출 제한",
            "publishedAt": 1787529484,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=d871a4b9f9be55eade90d6bcac76248076964637eac0d530c31f0911db394e0d",
            "reason": "회사 실적과의 연결고리 확인"
          },
          {
            "headline": "마이크론 vs. 샌디스크: 어떤 AI 메모리 스톡을 소유해야 할까요?",
            "eventLabel": "공급망 문제",
            "publishedAt": 1787480100,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=a9f95a3ddc0f438beae6bdd8d5b0aef37b17bfc7403c2ad950068d215fca7ce1",
            "reason": "사업·실적 연결 경로 확인 필요"
          },
          {
            "headline": "샌디스크 (SNDK) 주식은 투자자의 날 및 수익 후 공정가치 상승을 봅니다",
            "eventLabel": "AI·데이터센터 투자 변화",
            "publishedAt": 1787454484,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=17347806dc7705dd4c86d3a06f09b418fec541f29bd63178bfb8a86d5dd7a8c4",
            "reason": "사업·실적 연결 경로 확인 필요"
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
      "guidanceTrackRecord": {
        "status": "collecting",
        "settledCount": 0,
        "metCount": 0,
        "hitRate": null,
        "confidenceAdjustment": 0.0,
        "worseningTwo": false,
        "recentOutcomes": [],
        "notice": "SEC Company Facts의 분기 매출만 회사 공식 가이던스와 대조합니다. 2개 결과 전에는 신뢰도에 반영하지 않습니다."
      },
      "valuationScenario": {
        "status": "available",
        "price": 1499.37,
        "currentEps": 214.09818,
        "nextEps": 264.72162,
        "epsGrowth": 0.2364,
        "marketPe": 7.0,
        "conservative": 1186.49,
        "base": 1853.9,
        "optimistic": 2873.54,
        "currentVsBase": -0.1912,
        "analystTargetMean": 2126.1738,
        "analystTargetLow": 1000.0,
        "analystTargetHigh": 3600.0,
        "evidenceWeights": {
          "bull": 27.2,
          "base": 37.6,
          "bear": 35.2
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
          "asOf": 1787322925.8647835,
          "date": "2026-08-21",
          "fundamentalScore": 11.6,
          "confidence": 95.0,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 33.8,
            "base": 39.2,
            "bear": 27.0
          },
          "currentPrice": 1600.6199951171875,
          "valuationGap": -0.1912,
          "theses": {
            "growth": "intact",
            "cashFlow": "damaged",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787407899.9208522,
          "date": "2026-08-22",
          "fundamentalScore": 12.0,
          "confidence": 100,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 34.0,
            "base": 39.1,
            "bear": 26.9
          },
          "currentPrice": 1596.0799560546875,
          "valuationGap": -0.1912,
          "theses": {
            "growth": "intact",
            "cashFlow": "damaged",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787496888.8915975,
          "date": "2026-08-23",
          "fundamentalScore": 11.6,
          "confidence": 100,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 33.9,
            "base": 39.2,
            "bear": 26.9
          },
          "currentPrice": 1596.0799560546875,
          "valuationGap": -0.1912,
          "theses": {
            "growth": "intact",
            "cashFlow": "damaged",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787582269.4850764,
          "date": "2026-08-24",
          "fundamentalScore": 10.1,
          "confidence": 100,
          "fundamentalDamage": 15.3,
          "thesisDamage": 14.0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 31.9,
            "base": 38.9,
            "bear": 29.2
          },
          "currentPrice": 1596.0799560546875,
          "valuationGap": -0.1912,
          "theses": {
            "growth": "intact",
            "cashFlow": "damaged",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787667920.4111497,
          "date": "2026-08-25",
          "fundamentalScore": 9.7,
          "confidence": 100,
          "fundamentalDamage": 38.5,
          "thesisDamage": 49.0,
          "thesisStatus": "damaged",
          "scenarioWeights": {
            "bull": 27.8,
            "base": 37.9,
            "bear": 34.3
          },
          "currentPrice": 1493.1199951171875,
          "valuationGap": -0.1912,
          "theses": {
            "growth": "intact",
            "cashFlow": "damaged",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787754142.7259922,
          "date": "2026-08-26",
          "fundamentalScore": 9.8,
          "confidence": 100,
          "fundamentalDamage": 46.9,
          "thesisDamage": 56.0,
          "thesisStatus": "damaged",
          "scenarioWeights": {
            "bull": 27.0,
            "base": 37.7,
            "bear": 35.3
          },
          "currentPrice": 1480.77001953125,
          "valuationGap": -0.1912,
          "theses": {
            "growth": "intact",
            "cashFlow": "damaged",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787788668.347003,
          "date": "2026-08-27",
          "fundamentalScore": 10.7,
          "confidence": 100,
          "fundamentalDamage": 27.9,
          "thesisDamage": 56.0,
          "thesisStatus": "damaged",
          "scenarioWeights": {
            "bull": 27.2,
            "base": 37.6,
            "bear": 35.2
          },
          "currentPrice": 1499.3699951171875,
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
          "asOf": 1787322925.8647835,
          "date": "2026-08-21",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "damaged",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787407899.9208522,
          "date": "2026-08-22",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "damaged",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787496888.8915975,
          "date": "2026-08-23",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "damaged",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787582269.4850764,
          "date": "2026-08-24",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "damaged",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787667920.4111497,
          "date": "2026-08-25",
          "overallStatus": "damaged",
          "statuses": {
            "growth": "intact",
            "cashFlow": "damaged",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787754142.7259922,
          "date": "2026-08-26",
          "overallStatus": "damaged",
          "statuses": {
            "growth": "intact",
            "cashFlow": "damaged",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787788668.347003,
          "date": "2026-08-27",
          "overallStatus": "damaged",
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
      "asOf": 1787788668.347003,
      "modelVersion": "fundamental-v1.3",
      "fundamentalScore": 32.4,
      "confidence": 95.0,
      "fundamentalSigma": null,
      "fundamentalSigmaProgress": {
        "status": "collecting",
        "collected": 7,
        "required": 8,
        "remaining": 1,
        "expectedReadyDate": "2026-08-28",
        "notice": "같은 KST 날짜의 반복 실행은 한 건으로 교체하며, 임의 과거 점수를 만들어 채우지 않습니다."
      },
      "priceSigma": -0.37,
      "priceDamage": 12.2,
      "fundamentalDamage": 46.4,
      "thesisDamage": 35.0,
      "thesisStatus": "damaged",
      "damageRead": "펀더멘털 위험 신호가 가격에 충분히 반영되지 않았을 가능성이 있습니다.",
      "dimensions": {
        "growth": {
          "score": 32.32,
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
          "score": 8.6817,
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
          "headline": "WDC SEC Form 8-K 공식 제출",
          "eventLabel": "증권등록·투자설명서 제출",
          "publishedAt": 1787670000.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/106040/000119312526365796/d376254d8k.htm",
          "verificationStatus": "confirmed",
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기",
          "direction": "negative",
          "impact": -5.0
        },
        {
          "headline": "슈퍼마이크로 컴퓨터와 웨스턴 디지털: 최근 매출 동향 및 사업 규모 분석",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1787234401,
          "sourceUrl": "https://finnhub.io/api/news?id=c019df79aeb64a57110444a7f5ae48b96950fa80d5e4741bb27b74b09096dfe6",
          "verificationStatus": "needs_confirmation",
          "reason": "회사 실적과의 연결고리 확인",
          "direction": "positive",
          "impact": 4.0
        },
        {
          "headline": "Apple 제품을 구매하시나요? 비용을 지불하는 데 도움이 되는 4가지 도구",
          "eventLabel": "공급망 문제",
          "publishedAt": 1787212801,
          "sourceUrl": "https://finnhub.io/api/news?id=a03b08e1b2008c44e24564b7729d0b10f7da5eb33418846cce278009d8d4233d",
          "verificationStatus": "needs_confirmation",
          "reason": "메모리·스토리지 가격 강세 수혜 가능성",
          "direction": "negative",
          "impact": -4.0
        }
      ],
      "topPositive": [
        "회사 실적과의 연결고리 확인"
      ],
      "topNegative": [
        "SEC 제출 사실 확인, 세부 내용 분석 대기",
        "메모리·스토리지 가격 강세 수혜 가능성"
      ],
      "nextChecks": [
        "다음 실적의 매출·EPS·마진",
        "공식 가이던스 대비 실제 매출 달성 여부",
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
          "score": 2.9,
          "confidence": 95.0,
          "falsificationRules": [
            "핵심 고객 이탈 또는 점유율 하락이 공식 수치로 확인",
            "부채 부담 상승과 사업 리스크 확대가 동시 발생"
          ]
        }
      ],
      "scenarios": {
        "bull": 34.2,
        "base": 36.7,
        "bear": 29.1
      },
      "alerts": [
        {
          "type": "thesis_damage",
          "level": "중요",
          "message": "Thesis 손상이 +35.0점 확대됐습니다."
        }
      ],
      "businessProfile": {
        "updatedAt": "2026-08-13",
        "customers": [
          "AI 데이터센터·클라우드 기업(매출의 약 90%) - 대용량 HDD(하드디스크) 대량 구매, 상위 7개 고객사가 생산량 대부분을 차지",
          "일부 고객사와는 2027~2028년까지의 장기공급계약까지 이미 체결"
        ],
        "strengths": [
          "2026년 HDD 생산능력이 이미 전량 매진 - AI 데이터센터가 예정보다 앞당겨 몇 년치 물량을 미리 확보하려는 수요",
          "SSD 사업에서 철수하고 HDD(하드디스크)에만 집중하는 전략 - 대용량 저장에서는 HDD가 SSD보다 약 7배 저렴해 AI 시대 벌크 스토리지 수요에 최적화",
          "레거시 소비자·PC용 HDD 사업도 여전히 이익을 내는 캐시카우로 유지"
        ],
        "risks": [
          "⚠️ 마진이 급격히 확대된 배경(96%까지 치솟은 사례 등)에 지분법 이익 등 정확한 요인이 아직 다 확인되지 않음 - 산업 사이클(메모리·스토리지 슈퍼사이클) 자체는 맞지만 세부 요인은 다음 갱신 때 추가 확인 필요(정직하게 미확정으로 남겨둠, analystLog 참고)",
          "생산능력이 이미 매진된 상태라 추가 수요가 와도 단기간에 공급을 늘리기 어려움 - 반대로 수요가 꺾이면 고정비 부담 노출"
        ],
        "sources": [
          {
            "title": "Western Digital's HDD production for 2026 is already sold out (TechSpot)",
            "url": "https://www.techspot.com/news/111346-western-digital-hdd-production-capacity-2026-already-sold.html"
          },
          {
            "title": "Western Digital's entire 2026 HDD stock is gone as enterprise AI contracts gobble up all available storage capacity (TechRadar)",
            "url": "https://www.techradar.com/pro/were-pretty-much-sold-out-for-calendar-2026-western-digital-ceo-says-storage-firm-is-completely-sold-out-of-hdd-capacity-already-so-does-that-mean-more-price-rises-to-come"
          }
        ],
        "latestChanges": [
          {
            "headline": "WDC SEC Form 8-K 공식 제출",
            "eventLabel": "증권등록·투자설명서 제출",
            "publishedAt": 1787670000.0,
            "direction": "negative",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/106040/000119312526365796/d376254d8k.htm",
            "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
          },
          {
            "headline": "슈퍼마이크로 컴퓨터와 웨스턴 디지털: 최근 매출 동향 및 사업 규모 분석",
            "eventLabel": "장기 공급계약",
            "publishedAt": 1787234401,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=c019df79aeb64a57110444a7f5ae48b96950fa80d5e4741bb27b74b09096dfe6",
            "reason": "회사 실적과의 연결고리 확인"
          },
          {
            "headline": "Apple 제품을 구매하시나요? 비용을 지불하는 데 도움이 되는 4가지 도구",
            "eventLabel": "공급망 문제",
            "publishedAt": 1787212801,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=a03b08e1b2008c44e24564b7729d0b10f7da5eb33418846cce278009d8d4233d",
            "reason": "메모리·스토리지 가격 강세 수혜 가능성"
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
      "guidanceTrackRecord": {
        "status": "collecting",
        "settledCount": 0,
        "metCount": 0,
        "hitRate": null,
        "confidenceAdjustment": 0.0,
        "worseningTwo": false,
        "recentOutcomes": [],
        "notice": "SEC Company Facts의 분기 매출만 회사 공식 가이던스와 대조합니다. 2개 결과 전에는 신뢰도에 반영하지 않습니다."
      },
      "valuationScenario": {
        "status": "available",
        "price": 468.88,
        "currentEps": 20.09143,
        "nextEps": 31.74953,
        "epsGrowth": 0.5803,
        "marketPe": 23.34,
        "conservative": 474.21,
        "base": 740.95,
        "optimistic": 1148.47,
        "currentVsBase": -0.3672,
        "analystTargetMean": 664.9167,
        "analystTargetLow": 420.0,
        "analystTargetHigh": 1050.0,
        "evidenceWeights": {
          "bull": 34.2,
          "base": 36.7,
          "bear": 29.1
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
          "asOf": 1787322925.8647835,
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
          "currentPrice": 469.04998779296875,
          "valuationGap": -0.3672,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787407899.9208522,
          "date": "2026-08-22",
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
          "currentPrice": 459.44000244140625,
          "valuationGap": -0.3672,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787496888.8915975,
          "date": "2026-08-23",
          "fundamentalScore": 33.0,
          "confidence": 100,
          "fundamentalDamage": 8.4,
          "thesisDamage": 14.0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 36.9,
            "base": 37.2,
            "bear": 25.9
          },
          "currentPrice": 459.44000244140625,
          "valuationGap": -0.3672,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787582269.4850764,
          "date": "2026-08-24",
          "fundamentalScore": 31.6,
          "confidence": 100,
          "fundamentalDamage": 27.2,
          "thesisDamage": 42.0,
          "thesisStatus": "damaged",
          "scenarioWeights": {
            "bull": 33.2,
            "base": 36.6,
            "bear": 30.2
          },
          "currentPrice": 459.44000244140625,
          "valuationGap": -0.3672,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787667920.4111497,
          "date": "2026-08-25",
          "fundamentalScore": 32.9,
          "confidence": 100,
          "fundamentalDamage": 2.8,
          "thesisDamage": 0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 38.5,
            "base": 37.7,
            "bear": 23.8
          },
          "currentPrice": 435.3800048828125,
          "valuationGap": -0.3672,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787754142.7259922,
          "date": "2026-08-26",
          "fundamentalScore": 33.1,
          "confidence": 90.0,
          "fundamentalDamage": 4.3,
          "thesisDamage": 0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 38.4,
            "base": 37.7,
            "bear": 23.9
          },
          "currentPrice": 450.75,
          "valuationGap": -0.3672,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787788668.347003,
          "date": "2026-08-27",
          "fundamentalScore": 32.4,
          "confidence": 95.0,
          "fundamentalDamage": 46.4,
          "thesisDamage": 35.0,
          "thesisStatus": "damaged",
          "scenarioWeights": {
            "bull": 34.2,
            "base": 36.7,
            "bear": 29.1
          },
          "currentPrice": 468.8800048828125,
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
          "asOf": 1787322925.8647835,
          "date": "2026-08-21",
          "overallStatus": "damaged",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787407899.9208522,
          "date": "2026-08-22",
          "overallStatus": "damaged",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787496888.8915975,
          "date": "2026-08-23",
          "overallStatus": "intact",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787582269.4850764,
          "date": "2026-08-24",
          "overallStatus": "damaged",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787667920.4111497,
          "date": "2026-08-25",
          "overallStatus": "intact",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787754142.7259922,
          "date": "2026-08-26",
          "overallStatus": "intact",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787788668.347003,
          "date": "2026-08-27",
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
      "asOf": 1787788668.347003,
      "modelVersion": "fundamental-v1.3",
      "fundamentalScore": 15.0,
      "confidence": 85.0,
      "fundamentalSigma": null,
      "fundamentalSigmaProgress": {
        "status": "collecting",
        "collected": 7,
        "required": 8,
        "remaining": 1,
        "expectedReadyDate": "2026-08-28",
        "notice": "같은 KST 날짜의 반복 실행은 한 건으로 교체하며, 임의 과거 점수를 만들어 채우지 않습니다."
      },
      "priceSigma": 1.15,
      "priceDamage": 38.3,
      "fundamentalDamage": 16.0,
      "thesisDamage": 28.0,
      "thesisStatus": "intact",
      "damageRead": "현재 가격 변동과 펀더멘털 변화 사이에 큰 괴리는 확인되지 않았습니다.",
      "dimensions": {
        "growth": {
          "score": 15.586666666666666,
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
          "score": 14.75,
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
          "headline": "Arista Networks vs. Salesforce: 2026년에는 어떤 기술 주식을 구매하는 것이 더 나은가요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1787361159,
          "sourceUrl": "https://finnhub.io/api/news?id=6ea1b2100a38d7a49a7bdb4e6a2dfa06eaba295f18ed95892b4ec945feb3a97f",
          "verificationStatus": "needs_confirmation",
          "reason": "사업·실적 연결 경로 확인 필요",
          "direction": "negative",
          "impact": -4.0
        }
      ],
      "topPositive": [],
      "topNegative": [
        "사업·실적 연결 경로 확인 필요"
      ],
      "nextChecks": [
        "다음 실적의 매출·EPS·마진",
        "공식 가이던스 대비 실제 매출 달성 여부",
        "핵심 고객 수요·CAPEX",
        "FCF와 부채·CAPEX 변화"
      ],
      "theses": [
        {
          "id": "growth",
          "name": "성장 Thesis",
          "statement": "매출·EPS 성장 전망이 유지되고 본업 수익성이 함께 개선된다.",
          "status": "intact",
          "score": 15.6,
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
          "score": 27.8,
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
          "score": 4.9,
          "confidence": 85.0,
          "falsificationRules": [
            "핵심 고객 이탈 또는 점유율 하락이 공식 수치로 확인",
            "부채 부담 상승과 사업 리스크 확대가 동시 발생"
          ]
        }
      ],
      "scenarios": {
        "bull": 31.0,
        "base": 38.3,
        "bear": 30.7
      },
      "alerts": [],
      "businessProfile": {
        "updatedAt": "2026-08-19",
        "customers": [],
        "strengths": [],
        "risks": [],
        "sources": [],
        "latestChanges": [
          {
            "headline": "Arista Networks vs. Salesforce: 2026년에는 어떤 기술 주식을 구매하는 것이 더 나은가요?",
            "eventLabel": "규제·소송·수출 제한",
            "publishedAt": 1787361159,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=6ea1b2100a38d7a49a7bdb4e6a2dfa06eaba295f18ed95892b4ec945feb3a97f",
            "reason": "사업·실적 연결 경로 확인 필요"
          }
        ],
        "status": "available",
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
      "guidanceTrackRecord": {
        "status": "collecting",
        "settledCount": 0,
        "metCount": 0,
        "hitRate": null,
        "confidenceAdjustment": 0.0,
        "worseningTwo": false,
        "recentOutcomes": [],
        "notice": "SEC Company Facts의 분기 매출만 회사 공식 가이던스와 대조합니다. 2개 결과 전에는 신뢰도에 반영하지 않습니다."
      },
      "valuationScenario": {
        "status": "available",
        "price": 202.25,
        "currentEps": 4.11295,
        "nextEps": 5.15956,
        "epsGrowth": 0.2545,
        "marketPe": 49.17,
        "conservative": 162.38,
        "base": 253.72,
        "optimistic": 393.26,
        "currentVsBase": -0.2028,
        "analystTargetMean": 241.81519,
        "analystTargetLow": 185.0,
        "analystTargetHigh": 289.0,
        "evidenceWeights": {
          "bull": 31.0,
          "base": 38.3,
          "bear": 30.7
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
          "asOf": 1787322925.8647835,
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
          "currentPrice": 183.75,
          "valuationGap": -0.2028,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787407899.9208522,
          "date": "2026-08-22",
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
          "currentPrice": 188.64999389648438,
          "valuationGap": -0.2028,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787496888.8915975,
          "date": "2026-08-23",
          "fundamentalScore": 15.0,
          "confidence": 85.0,
          "fundamentalDamage": 16.0,
          "thesisDamage": 28.0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 31.0,
            "base": 38.3,
            "bear": 30.7
          },
          "currentPrice": 188.64999389648438,
          "valuationGap": -0.2028,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787582269.4850764,
          "date": "2026-08-24",
          "fundamentalScore": 15.0,
          "confidence": 85.0,
          "fundamentalDamage": 16.0,
          "thesisDamage": 28.0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 31.0,
            "base": 38.3,
            "bear": 30.7
          },
          "currentPrice": 188.64999389648438,
          "valuationGap": -0.2028,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787667920.4111497,
          "date": "2026-08-25",
          "fundamentalScore": 15.0,
          "confidence": 85.0,
          "fundamentalDamage": 16.0,
          "thesisDamage": 28.0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 31.0,
            "base": 38.3,
            "bear": 30.7
          },
          "currentPrice": 188.14999389648438,
          "valuationGap": -0.2028,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787754142.7259922,
          "date": "2026-08-26",
          "fundamentalScore": 15.0,
          "confidence": 85.0,
          "fundamentalDamage": 16.0,
          "thesisDamage": 28.0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 31.0,
            "base": 38.3,
            "bear": 30.7
          },
          "currentPrice": 190.94000244140625,
          "valuationGap": -0.2028,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787788668.347003,
          "date": "2026-08-27",
          "fundamentalScore": 15.0,
          "confidence": 85.0,
          "fundamentalDamage": 16.0,
          "thesisDamage": 28.0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 31.0,
            "base": 38.3,
            "bear": 30.7
          },
          "currentPrice": 202.25,
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
          "asOf": 1787322925.8647835,
          "date": "2026-08-21",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787407899.9208522,
          "date": "2026-08-22",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787496888.8915975,
          "date": "2026-08-23",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787582269.4850764,
          "date": "2026-08-24",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787667920.4111497,
          "date": "2026-08-25",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787754142.7259922,
          "date": "2026-08-26",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787788668.347003,
          "date": "2026-08-27",
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
      "asOf": 1787788668.347003,
      "modelVersion": "fundamental-v1.3",
      "fundamentalScore": -2.3,
      "confidence": 68.8,
      "fundamentalSigma": null,
      "fundamentalSigmaProgress": {
        "status": "collecting",
        "collected": 7,
        "required": 8,
        "remaining": 1,
        "expectedReadyDate": "2026-08-28",
        "notice": "같은 KST 날짜의 반복 실행은 한 건으로 교체하며, 임의 과거 점수를 만들어 채우지 않습니다."
      },
      "priceSigma": -0.51,
      "priceDamage": 16.8,
      "fundamentalDamage": 0,
      "thesisDamage": 0,
      "thesisStatus": "intact",
      "damageRead": "현재 가격 변동과 펀더멘털 변화 사이에 큰 괴리는 확인되지 않았습니다.",
      "dimensions": {
        "growth": {
          "score": 28.906665333333336,
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
        "공식 가이던스 대비 실제 매출 달성 여부",
        "핵심 고객 수요·CAPEX",
        "FCF와 부채·CAPEX 변화"
      ],
      "theses": [
        {
          "id": "growth",
          "name": "성장 Thesis",
          "statement": "매출·EPS 성장 전망이 유지되고 본업 수익성이 함께 개선된다.",
          "status": "strengthening",
          "score": 28.9,
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
          "status": "damaged",
          "score": -100,
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
          "score": 5.8,
          "confidence": 68.8,
          "falsificationRules": [
            "핵심 고객 이탈 또는 점유율 하락이 공식 수치로 확인",
            "부채 부담 상승과 사업 리스크 확대가 동시 발생"
          ]
        }
      ],
      "scenarios": {
        "bull": 30.5,
        "base": 40.2,
        "bear": 29.3
      },
      "alerts": [],
      "businessProfile": {
        "updatedAt": "2026-08-19",
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
        "period": "Q1'26",
        "reportedNetIncome": 191402000.0,
        "normalizedIncome": 216516348.115239,
        "normalizedGap": -0.116,
        "findings": [],
        "coreRead": "보고 순이익과 정상화이익 차이가 커 헤드라인 순이익을 그대로 본업 성과로 보기 어렵습니다.",
        "manualContext": null
      },
      "guidanceTrackRecord": {
        "status": "collecting",
        "settledCount": 0,
        "metCount": 0,
        "hitRate": null,
        "confidenceAdjustment": 0.0,
        "worseningTwo": false,
        "recentOutcomes": [],
        "notice": "SEC Company Facts의 분기 매출만 회사 공식 가이던스와 대조합니다. 2개 결과 전에는 신뢰도에 반영하지 않습니다."
      },
      "valuationScenario": {
        "status": "available",
        "price": 294.37,
        "currentEps": 9.40614,
        "nextEps": 13.94894,
        "epsGrowth": 0.483,
        "marketPe": 31.3,
        "conservative": 279.39,
        "base": 436.54,
        "optimistic": 676.64,
        "currentVsBase": -0.3257,
        "analystTargetMean": 416.09348,
        "analystTargetLow": 280.0,
        "analystTargetHigh": 500.0,
        "evidenceWeights": {
          "bull": 30.5,
          "base": 40.2,
          "bear": 29.3
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
          "asOf": 1787322925.8647835,
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
          "currentPrice": 290.0299987792969,
          "valuationGap": -0.3257,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "damaged",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787407899.9208522,
          "date": "2026-08-22",
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
          "currentPrice": 289.5199890136719,
          "valuationGap": -0.3257,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "damaged",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787496888.8915975,
          "date": "2026-08-23",
          "fundamentalScore": -2.3,
          "confidence": 82.1,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 30.8,
            "base": 40.0,
            "bear": 29.2
          },
          "currentPrice": 289.5199890136719,
          "valuationGap": -0.3257,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "damaged",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787582269.4850764,
          "date": "2026-08-24",
          "fundamentalScore": -2.3,
          "confidence": 82.1,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 30.8,
            "base": 40.0,
            "bear": 29.2
          },
          "currentPrice": 289.5199890136719,
          "valuationGap": -0.3257,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "damaged",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787667920.4111497,
          "date": "2026-08-25",
          "fundamentalScore": -2.3,
          "confidence": 68.8,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 30.5,
            "base": 40.2,
            "bear": 29.3
          },
          "currentPrice": 275.489990234375,
          "valuationGap": -0.3257,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "damaged",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787754142.7259922,
          "date": "2026-08-26",
          "fundamentalScore": -2.3,
          "confidence": 68.8,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 30.5,
            "base": 40.2,
            "bear": 29.3
          },
          "currentPrice": 288.1400146484375,
          "valuationGap": -0.3257,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "damaged",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787788668.347003,
          "date": "2026-08-27",
          "fundamentalScore": -2.3,
          "confidence": 68.8,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 30.5,
            "base": 40.2,
            "bear": 29.3
          },
          "currentPrice": 294.3699951171875,
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
          "asOf": 1787322925.8647835,
          "date": "2026-08-21",
          "overallStatus": "intact",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "damaged",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787407899.9208522,
          "date": "2026-08-22",
          "overallStatus": "intact",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "damaged",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787496888.8915975,
          "date": "2026-08-23",
          "overallStatus": "intact",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "damaged",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787582269.4850764,
          "date": "2026-08-24",
          "overallStatus": "intact",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "damaged",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787667920.4111497,
          "date": "2026-08-25",
          "overallStatus": "intact",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "damaged",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787754142.7259922,
          "date": "2026-08-26",
          "overallStatus": "intact",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "damaged",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787788668.347003,
          "date": "2026-08-27",
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
      "asOf": 1787788668.347003,
      "modelVersion": "fundamental-v1.3",
      "fundamentalScore": 1.3,
      "confidence": 85.0,
      "fundamentalSigma": null,
      "fundamentalSigmaProgress": {
        "status": "collecting",
        "collected": 7,
        "required": 8,
        "remaining": 1,
        "expectedReadyDate": "2026-08-28",
        "notice": "같은 KST 날짜의 반복 실행은 한 건으로 교체하며, 임의 과거 점수를 만들어 채우지 않습니다."
      },
      "priceSigma": 1.29,
      "priceDamage": 42.9,
      "fundamentalDamage": 10.7,
      "thesisDamage": 28.0,
      "thesisStatus": "intact",
      "damageRead": "현재 가격 변동과 펀더멘털 변화 사이에 큰 괴리는 확인되지 않았습니다.",
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
          "score": 6.566700000000001,
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
        "confirmedFacts": 2,
        "credibleReports": 0,
        "needsConfirmation": 1,
        "aiInferences": 1
      },
      "evidence": [
        {
          "headline": "루멘텀(Lumentum): 시력 부족이 점점 더 커지고 있습니다",
          "eventLabel": "공급망 문제",
          "publishedAt": 1787066566,
          "sourceUrl": "https://finnhub.io/api/news?id=bd6c9f881646850fb77de7101295ec91a1bfab48195f2c13595f10972a40843c",
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
        "공식 가이던스 대비 실제 매출 달성 여부",
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
          "score": -100,
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
          "score": 2.2,
          "confidence": 85.0,
          "falsificationRules": [
            "핵심 고객 이탈 또는 점유율 하락이 공식 수치로 확인",
            "부채 부담 상승과 사업 리스크 확대가 동시 발생"
          ]
        }
      ],
      "scenarios": {
        "bull": 28.2,
        "base": 39.3,
        "bear": 32.5
      },
      "alerts": [],
      "businessProfile": {
        "updatedAt": "2026-08-19",
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
            "reason": "회사 실적과의 연결고리 확인"
          }
        ],
        "status": "available",
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
      "guidanceTrackRecord": {
        "status": "collecting",
        "settledCount": 0,
        "metCount": 0,
        "hitRate": null,
        "confidenceAdjustment": 0.0,
        "worseningTwo": false,
        "recentOutcomes": [],
        "notice": "SEC Company Facts의 분기 매출만 회사 공식 가이던스와 대조합니다. 2개 결과 전에는 신뢰도에 반영하지 않습니다."
      },
      "valuationScenario": {
        "status": "available",
        "price": 939.03,
        "currentEps": 8.22662,
        "nextEps": 33.01317,
        "epsGrowth": 3.013,
        "marketPe": 114.15,
        "conservative": 2411.71,
        "base": 3768.3,
        "optimistic": 5840.86,
        "currentVsBase": -0.7508,
        "analystTargetMean": 1148.303,
        "analystTargetLow": 820.0,
        "analystTargetHigh": 1400.0,
        "evidenceWeights": {
          "bull": 28.2,
          "base": 39.3,
          "bear": 32.5
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
          "asOf": 1787322925.8647835,
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
          "currentPrice": 879.280029296875,
          "valuationGap": -0.7508,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "damaged",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787407899.9208522,
          "date": "2026-08-22",
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
          "currentPrice": 866.7100219726562,
          "valuationGap": -0.7508,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "damaged",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787496888.8915975,
          "date": "2026-08-23",
          "fundamentalScore": 1.3,
          "confidence": 90.0,
          "fundamentalDamage": 11.3,
          "thesisDamage": 28.0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 28.3,
            "base": 39.2,
            "bear": 32.5
          },
          "currentPrice": 866.7100219726562,
          "valuationGap": -0.7508,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "damaged",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787582269.4850764,
          "date": "2026-08-24",
          "fundamentalScore": 1.3,
          "confidence": 90.0,
          "fundamentalDamage": 11.3,
          "thesisDamage": 28.0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 28.3,
            "base": 39.2,
            "bear": 32.5
          },
          "currentPrice": 866.7100219726562,
          "valuationGap": -0.7508,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "damaged",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787667920.4111497,
          "date": "2026-08-25",
          "fundamentalScore": 1.3,
          "confidence": 90.0,
          "fundamentalDamage": 11.3,
          "thesisDamage": 28.0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 28.3,
            "base": 39.2,
            "bear": 32.5
          },
          "currentPrice": 830.1699829101562,
          "valuationGap": -0.7508,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "damaged",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787754142.7259922,
          "date": "2026-08-26",
          "fundamentalScore": 1.3,
          "confidence": 85.0,
          "fundamentalDamage": 10.7,
          "thesisDamage": 28.0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 28.2,
            "base": 39.3,
            "bear": 32.5
          },
          "currentPrice": 885.5650024414062,
          "valuationGap": -0.7508,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "damaged",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787788668.347003,
          "date": "2026-08-27",
          "fundamentalScore": 1.3,
          "confidence": 85.0,
          "fundamentalDamage": 10.7,
          "thesisDamage": 28.0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 28.2,
            "base": 39.3,
            "bear": 32.5
          },
          "currentPrice": 939.030029296875,
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
          "asOf": 1787322925.8647835,
          "date": "2026-08-21",
          "overallStatus": "damaged",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "damaged",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787407899.9208522,
          "date": "2026-08-22",
          "overallStatus": "damaged",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "damaged",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787496888.8915975,
          "date": "2026-08-23",
          "overallStatus": "intact",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "damaged",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787582269.4850764,
          "date": "2026-08-24",
          "overallStatus": "intact",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "damaged",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787667920.4111497,
          "date": "2026-08-25",
          "overallStatus": "intact",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "damaged",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787754142.7259922,
          "date": "2026-08-26",
          "overallStatus": "intact",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "damaged",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787788668.347003,
          "date": "2026-08-27",
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
    "GEV": {
      "ticker": "GEV",
      "asOf": 1787788668.347003,
      "modelVersion": "fundamental-v1.3",
      "fundamentalScore": 15.5,
      "confidence": 100,
      "fundamentalSigma": null,
      "fundamentalSigmaProgress": {
        "status": "collecting",
        "collected": 7,
        "required": 8,
        "remaining": 1,
        "expectedReadyDate": "2026-08-28",
        "notice": "같은 KST 날짜의 반복 실행은 한 건으로 교체하며, 임의 과거 점수를 만들어 채우지 않습니다."
      },
      "priceSigma": -1.19,
      "priceDamage": 39.5,
      "fundamentalDamage": 9.8,
      "thesisDamage": 0,
      "thesisStatus": "intact",
      "damageRead": "현재 가격 변동과 펀더멘털 변화 사이에 큰 괴리는 확인되지 않았습니다.",
      "dimensions": {
        "growth": {
          "score": -0.506666333333334,
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
          "score": 7.396699999999999,
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
        "needsConfirmation": 4,
        "aiInferences": 4
      },
      "evidence": [
        {
          "headline": "GE Vernova의 잔고는 일부 국가의 GDP보다 큽니다. 여기에 실제로 $ 1760억 안에 있는 것이 있습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1787444700,
          "sourceUrl": "https://finnhub.io/api/news?id=aaade768f9f996e2350da0fbe381bfc606abd645683aedcf32005330567aaca0",
          "verificationStatus": "needs_confirmation",
          "reason": "회사 실적과의 연결고리 확인",
          "direction": "negative",
          "impact": -4.0
        },
        {
          "headline": "GE Vernova, 퀸즈랜드 슈퍼노드 배터리 프로젝트 3단계 계약 체결",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1787319770,
          "sourceUrl": "https://finnhub.io/api/news?id=2b8291ab8a1fad046f97f122a145b5809ffca5f3df10cdd5326dca1cc4fdde8e",
          "verificationStatus": "needs_confirmation",
          "reason": "회사 실적과의 연결고리 확인",
          "direction": "negative",
          "impact": -4.0
        },
        {
          "headline": "GE Vernova, 최대 배터리 프로젝트 중 하나에 전력을 공급하기 위해 호주와 주요 계약 체결",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1787302246,
          "sourceUrl": "https://finnhub.io/api/news?id=1940dd03378e1c2642650f3af5bf911668697efc181df0b8af99824be8e80fd4",
          "verificationStatus": "needs_confirmation",
          "reason": "회사 실적과의 연결고리 확인",
          "direction": "positive",
          "impact": 4.0
        },
        {
          "headline": "Queensland의 슈퍼노드 배터리 에너지 저장 시스템 프로젝트 3단계에 GE Vernova가 Quinbrook에 의해 선정되었습니다. 공개되지 않은 약관",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1787292551,
          "sourceUrl": "https://finnhub.io/api/news?id=e39205d060bb77236887e7c66794f266631a1307a15269e401803f78edddb583",
          "verificationStatus": "needs_confirmation",
          "reason": "회사 실적과의 연결고리 확인",
          "direction": "positive",
          "impact": 4.0
        }
      ],
      "topPositive": [
        "회사 실적과의 연결고리 확인",
        "회사 실적과의 연결고리 확인"
      ],
      "topNegative": [
        "회사 실적과의 연결고리 확인",
        "회사 실적과의 연결고리 확인"
      ],
      "nextChecks": [
        "다음 실적의 매출·EPS·마진",
        "공식 가이던스 대비 실제 매출 달성 여부",
        "핵심 고객 수요·CAPEX",
        "FCF와 부채·CAPEX 변화"
      ],
      "theses": [
        {
          "id": "growth",
          "name": "성장 Thesis",
          "statement": "매출·EPS 성장 전망이 유지되고 본업 수익성이 함께 개선된다.",
          "status": "intact",
          "score": -0.5,
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
          "score": 79.1,
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
          "score": 2.5,
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
        "updatedAt": "2026-08-19",
        "customers": [],
        "strengths": [],
        "risks": [],
        "sources": [],
        "latestChanges": [
          {
            "headline": "GE Vernova의 잔고는 일부 국가의 GDP보다 큽니다. 여기에 실제로 $ 1760억 안에 있는 것이 있습니다.",
            "eventLabel": "규제·소송·수출 제한",
            "publishedAt": 1787444700,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=aaade768f9f996e2350da0fbe381bfc606abd645683aedcf32005330567aaca0",
            "reason": "회사 실적과의 연결고리 확인"
          },
          {
            "headline": "GE Vernova, 퀸즈랜드 슈퍼노드 배터리 프로젝트 3단계 계약 체결",
            "eventLabel": "규제·소송·수출 제한",
            "publishedAt": 1787319770,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=2b8291ab8a1fad046f97f122a145b5809ffca5f3df10cdd5326dca1cc4fdde8e",
            "reason": "회사 실적과의 연결고리 확인"
          },
          {
            "headline": "GE Vernova, 최대 배터리 프로젝트 중 하나에 전력을 공급하기 위해 호주와 주요 계약 체결",
            "eventLabel": "주요 고객 계약",
            "publishedAt": 1787302246,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=1940dd03378e1c2642650f3af5bf911668697efc181df0b8af99824be8e80fd4",
            "reason": "회사 실적과의 연결고리 확인"
          },
          {
            "headline": "Queensland의 슈퍼노드 배터리 에너지 저장 시스템 프로젝트 3단계에 GE Vernova가 Quinbrook에 의해 선정되었습니다. 공개되지 않은 약관",
            "eventLabel": "주요 고객 계약",
            "publishedAt": 1787292551,
            "direction": "positive",
            "sourceUrl": "https://finnhub.io/api/news?id=e39205d060bb77236887e7c66794f266631a1307a15269e401803f78edddb583",
            "reason": "회사 실적과의 연결고리 확인"
          }
        ],
        "status": "available",
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
      "guidanceTrackRecord": {
        "status": "collecting",
        "settledCount": 0,
        "metCount": 0,
        "hitRate": null,
        "confidenceAdjustment": 0.0,
        "worseningTwo": false,
        "recentOutcomes": [],
        "notice": "SEC Company Facts의 분기 매출만 회사 공식 가이던스와 대조합니다. 2개 결과 전에는 신뢰도에 반영하지 않습니다."
      },
      "valuationScenario": {
        "status": "available",
        "price": 953.09,
        "currentEps": 30.78603,
        "nextEps": 24.74332,
        "epsGrowth": -0.1963,
        "marketPe": 30.96,
        "conservative": 490.25,
        "base": 766.02,
        "optimistic": 1187.33,
        "currentVsBase": 0.2442,
        "analystTargetMean": 1236.4318,
        "analystTargetLow": 940.0,
        "analystTargetHigh": 1450.0,
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
          "asOf": 1787322925.8647835,
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
          "currentPrice": 966.010009765625,
          "valuationGap": 0.2445,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787407899.9208522,
          "date": "2026-08-22",
          "fundamentalScore": 18.9,
          "confidence": 95.0,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "strengthening",
          "scenarioWeights": {
            "bull": 35.3,
            "base": 38.8,
            "bear": 25.9
          },
          "currentPrice": 956.8499755859375,
          "valuationGap": 0.2445,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787496888.8915975,
          "date": "2026-08-23",
          "fundamentalScore": 18.3,
          "confidence": 100,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "strengthening",
          "scenarioWeights": {
            "bull": 35.3,
            "base": 38.7,
            "bear": 26.0
          },
          "currentPrice": 956.8499755859375,
          "valuationGap": 0.2442,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787582269.4850764,
          "date": "2026-08-24",
          "fundamentalScore": 17.3,
          "confidence": 100,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "strengthening",
          "scenarioWeights": {
            "bull": 35.1,
            "base": 38.8,
            "bear": 26.1
          },
          "currentPrice": 956.8499755859375,
          "valuationGap": 0.2442,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787667920.4111497,
          "date": "2026-08-25",
          "fundamentalScore": 14.2,
          "confidence": 100,
          "fundamentalDamage": 28.6,
          "thesisDamage": 28.0,
          "thesisStatus": "weakening",
          "scenarioWeights": {
            "bull": 31.2,
            "base": 38.2,
            "bear": 30.6
          },
          "currentPrice": 942.0999755859375,
          "valuationGap": 0.2442,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787754142.7259922,
          "date": "2026-08-26",
          "fundamentalScore": 15.5,
          "confidence": 100,
          "fundamentalDamage": 9.8,
          "thesisDamage": 0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 34.7,
            "base": 38.9,
            "bear": 26.4
          },
          "currentPrice": 926.72998046875,
          "valuationGap": 0.2442,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787788668.347003,
          "date": "2026-08-27",
          "fundamentalScore": 15.5,
          "confidence": 100,
          "fundamentalDamage": 9.8,
          "thesisDamage": 0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 34.7,
            "base": 38.9,
            "bear": 26.4
          },
          "currentPrice": 953.0900268554688,
          "valuationGap": 0.2442,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        }
      ],
      "thesisHistory": [
        {
          "asOf": 1787322925.8647835,
          "date": "2026-08-21",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787407899.9208522,
          "date": "2026-08-22",
          "overallStatus": "strengthening",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787496888.8915975,
          "date": "2026-08-23",
          "overallStatus": "strengthening",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787582269.4850764,
          "date": "2026-08-24",
          "overallStatus": "strengthening",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787667920.4111497,
          "date": "2026-08-25",
          "overallStatus": "weakening",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787754142.7259922,
          "date": "2026-08-26",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787788668.347003,
          "date": "2026-08-27",
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
      "asOf": 1787788668.347003,
      "modelVersion": "fundamental-v1.3",
      "fundamentalScore": -6.3,
      "confidence": 85.0,
      "fundamentalSigma": null,
      "fundamentalSigmaProgress": {
        "status": "collecting",
        "collected": 7,
        "required": 8,
        "remaining": 1,
        "expectedReadyDate": "2026-08-28",
        "notice": "같은 KST 날짜의 반복 실행은 한 건으로 교체하며, 임의 과거 점수를 만들어 채우지 않습니다."
      },
      "priceSigma": 1.15,
      "priceDamage": 38.3,
      "fundamentalDamage": 16.0,
      "thesisDamage": 28.0,
      "thesisStatus": "intact",
      "damageRead": "현재 가격 변동과 펀더멘털 변화 사이에 큰 괴리는 확인되지 않았습니다.",
      "dimensions": {
        "growth": {
          "score": 2.49,
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
          "score": 7.798400000000001,
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
          "headline": "Constellation Energy vs. Vistra: AI 전력 수익 경쟁을 주도하는 사람은 누구입니까?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1787314684,
          "sourceUrl": "https://finnhub.io/api/news?id=fa80810a001357d7eb9d8985ade214e9e13891a64b16cbcc5bd5e764056ccd08",
          "verificationStatus": "needs_confirmation",
          "reason": "사업·실적 연결 경로 확인 필요",
          "direction": "negative",
          "impact": -4.0
        }
      ],
      "topPositive": [],
      "topNegative": [
        "사업·실적 연결 경로 확인 필요"
      ],
      "nextChecks": [
        "다음 실적의 매출·EPS·마진",
        "공식 가이던스 대비 실제 매출 달성 여부",
        "핵심 고객 수요·CAPEX",
        "FCF와 부채·CAPEX 변화"
      ],
      "theses": [
        {
          "id": "growth",
          "name": "성장 Thesis",
          "statement": "매출·EPS 성장 전망이 유지되고 본업 수익성이 함께 개선된다.",
          "status": "intact",
          "score": 2.5,
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
          "score": 2.6,
          "confidence": 85.0,
          "falsificationRules": [
            "핵심 고객 이탈 또는 점유율 하락이 공식 수치로 확인",
            "부채 부담 상승과 사업 리스크 확대가 동시 발생"
          ]
        }
      ],
      "scenarios": {
        "bull": 27.0,
        "base": 39.0,
        "bear": 34.0
      },
      "alerts": [],
      "businessProfile": {
        "updatedAt": "2026-08-19",
        "customers": [],
        "strengths": [],
        "risks": [],
        "sources": [],
        "latestChanges": [
          {
            "headline": "Constellation Energy vs. Vistra: AI 전력 수익 경쟁을 주도하는 사람은 누구입니까?",
            "eventLabel": "규제·소송·수출 제한",
            "publishedAt": 1787314684,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=fa80810a001357d7eb9d8985ade214e9e13891a64b16cbcc5bd5e764056ccd08",
            "reason": "사업·실적 연결 경로 확인 필요"
          }
        ],
        "status": "available",
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
      "guidanceTrackRecord": {
        "status": "collecting",
        "settledCount": 0,
        "metCount": 0,
        "hitRate": null,
        "confidenceAdjustment": 0.0,
        "worseningTwo": false,
        "recentOutcomes": [],
        "notice": "SEC Company Facts의 분기 매출만 회사 공식 가이던스와 대조합니다. 2개 결과 전에는 신뢰도에 반영하지 않습니다."
      },
      "valuationScenario": {
        "status": "available",
        "price": 279.52,
        "currentEps": 12.11777,
        "nextEps": 13.34165,
        "epsGrowth": 0.101,
        "marketPe": 23.07,
        "conservative": 196.96,
        "base": 307.75,
        "optimistic": 477.01,
        "currentVsBase": -0.0917,
        "analystTargetMean": 348.304,
        "analystTargetLow": 290.0,
        "analystTargetHigh": 441.0,
        "evidenceWeights": {
          "bull": 27.0,
          "base": 39.0,
          "bear": 34.0
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
          "asOf": 1787322925.8647835,
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
          "currentPrice": 272.9200134277344,
          "valuationGap": -0.091,
          "theses": {
            "growth": "intact",
            "cashFlow": "damaged",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787407899.9208522,
          "date": "2026-08-22",
          "fundamentalScore": -7.0,
          "confidence": 85.0,
          "fundamentalDamage": 16.0,
          "thesisDamage": 28.0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 26.9,
            "base": 38.9,
            "bear": 34.2
          },
          "currentPrice": 272.8800048828125,
          "valuationGap": -0.091,
          "theses": {
            "growth": "intact",
            "cashFlow": "damaged",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787496888.8915975,
          "date": "2026-08-23",
          "fundamentalScore": -7.7,
          "confidence": 90.0,
          "fundamentalDamage": 34.0,
          "thesisDamage": 56.0,
          "thesisStatus": "damaged",
          "scenarioWeights": {
            "bull": 23.7,
            "base": 38.0,
            "bear": 38.3
          },
          "currentPrice": 272.8800048828125,
          "valuationGap": -0.0879,
          "theses": {
            "growth": "intact",
            "cashFlow": "damaged",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787582269.4850764,
          "date": "2026-08-24",
          "fundamentalScore": -7.7,
          "confidence": 90.0,
          "fundamentalDamage": 34.0,
          "thesisDamage": 56.0,
          "thesisStatus": "damaged",
          "scenarioWeights": {
            "bull": 23.7,
            "base": 38.0,
            "bear": 38.3
          },
          "currentPrice": 272.8800048828125,
          "valuationGap": -0.0879,
          "theses": {
            "growth": "intact",
            "cashFlow": "damaged",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787667920.4111497,
          "date": "2026-08-25",
          "fundamentalScore": -7.7,
          "confidence": 90.0,
          "fundamentalDamage": 34.0,
          "thesisDamage": 56.0,
          "thesisStatus": "damaged",
          "scenarioWeights": {
            "bull": 23.7,
            "base": 38.0,
            "bear": 38.3
          },
          "currentPrice": 273.42999267578125,
          "valuationGap": -0.0917,
          "theses": {
            "growth": "intact",
            "cashFlow": "damaged",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787754142.7259922,
          "date": "2026-08-26",
          "fundamentalScore": -6.3,
          "confidence": 85.0,
          "fundamentalDamage": 16.0,
          "thesisDamage": 28.0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 27.0,
            "base": 39.0,
            "bear": 34.0
          },
          "currentPrice": 278.4200134277344,
          "valuationGap": -0.0917,
          "theses": {
            "growth": "intact",
            "cashFlow": "damaged",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787788668.347003,
          "date": "2026-08-27",
          "fundamentalScore": -6.3,
          "confidence": 85.0,
          "fundamentalDamage": 16.0,
          "thesisDamage": 28.0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 27.0,
            "base": 39.0,
            "bear": 34.0
          },
          "currentPrice": 279.5199890136719,
          "valuationGap": -0.0917,
          "theses": {
            "growth": "intact",
            "cashFlow": "damaged",
            "resilience": "intact"
          }
        }
      ],
      "thesisHistory": [
        {
          "asOf": 1787322925.8647835,
          "date": "2026-08-21",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "damaged",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787407899.9208522,
          "date": "2026-08-22",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "damaged",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787496888.8915975,
          "date": "2026-08-23",
          "overallStatus": "damaged",
          "statuses": {
            "growth": "intact",
            "cashFlow": "damaged",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787582269.4850764,
          "date": "2026-08-24",
          "overallStatus": "damaged",
          "statuses": {
            "growth": "intact",
            "cashFlow": "damaged",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787667920.4111497,
          "date": "2026-08-25",
          "overallStatus": "damaged",
          "statuses": {
            "growth": "intact",
            "cashFlow": "damaged",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787754142.7259922,
          "date": "2026-08-26",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "damaged",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787788668.347003,
          "date": "2026-08-27",
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
      "asOf": 1787788668.347003,
      "modelVersion": "fundamental-v1.3",
      "fundamentalScore": -8.6,
      "confidence": 95.0,
      "fundamentalSigma": null,
      "fundamentalSigmaProgress": {
        "status": "collecting",
        "collected": 7,
        "required": 8,
        "remaining": 1,
        "expectedReadyDate": "2026-08-28",
        "notice": "같은 KST 날짜의 반복 실행은 한 건으로 교체하며, 임의 과거 점수를 만들어 채우지 않습니다."
      },
      "priceSigma": -0.7,
      "priceDamage": 23.2,
      "fundamentalDamage": 39.9,
      "thesisDamage": 70.0,
      "thesisStatus": "damaged",
      "damageRead": "펀더멘털 위험 신호가 가격에 충분히 반영되지 않았을 가능성이 있습니다.",
      "dimensions": {
        "growth": {
          "score": -1.296666666666666,
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
          "score": -21.8007,
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
          "headline": "Vistra: 시장은 전력 부족에 대한 가격을 책정하고 있지만 계약 수입 업그레이드는 아닙니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1787663760,
          "sourceUrl": "https://finnhub.io/api/news?id=976b0e6c23eb5be32d099a3f07581040104e6978ae0999653761b44c0b776eb3",
          "verificationStatus": "needs_confirmation",
          "reason": "회사 실적과의 연결고리 확인",
          "direction": "negative",
          "impact": -4.0
        },
        {
          "headline": "Constellation Energy vs. Vistra: AI 전력 수익 경쟁을 주도하는 사람은 누구입니까?",
          "eventLabel": "실적 발표",
          "publishedAt": 1787318284,
          "sourceUrl": "https://finnhub.io/api/news?id=fa80810a001357d7eb9d8985ade214e9e13891a64b16cbcc5bd5e764056ccd08",
          "verificationStatus": "needs_confirmation",
          "reason": "사업·실적 연결 경로 확인 필요",
          "direction": "negative",
          "impact": -2.0
        },
        {
          "headline": "Constellation Energy vs. Vistra: AI 전력 수익 경쟁을 주도하는 사람은 누구입니까?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1787314684,
          "sourceUrl": "https://finnhub.io/api/news?id=fa80810a001357d7eb9d8985ade214e9e13891a64b16cbcc5bd5e764056ccd08",
          "verificationStatus": "needs_confirmation",
          "reason": "회사 실적과의 연결고리 확인",
          "direction": "negative",
          "impact": -4.0
        }
      ],
      "topPositive": [],
      "topNegative": [
        "회사 실적과의 연결고리 확인",
        "사업·실적 연결 경로 확인 필요",
        "회사 실적과의 연결고리 확인"
      ],
      "nextChecks": [
        "다음 실적의 매출·EPS·마진",
        "공식 가이던스 대비 실제 매출 달성 여부",
        "핵심 고객 수요·CAPEX",
        "FCF와 부채·CAPEX 변화"
      ],
      "theses": [
        {
          "id": "growth",
          "name": "성장 Thesis",
          "statement": "매출·EPS 성장 전망이 유지되고 본업 수익성이 함께 개선된다.",
          "status": "intact",
          "score": -1.3,
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
          "status": "intact",
          "score": -3.5,
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
          "score": -7.3,
          "confidence": 95.0,
          "falsificationRules": [
            "핵심 고객 이탈 또는 점유율 하락이 공식 수치로 확인",
            "부채 부담 상승과 사업 리스크 확대가 동시 발생"
          ]
        }
      ],
      "scenarios": {
        "bull": 22.1,
        "base": 37.4,
        "bear": 40.5
      },
      "alerts": [],
      "businessProfile": {
        "updatedAt": "2026-08-19",
        "customers": [],
        "strengths": [],
        "risks": [],
        "sources": [],
        "latestChanges": [
          {
            "headline": "Vistra: 시장은 전력 부족에 대한 가격을 책정하고 있지만 계약 수입 업그레이드는 아닙니다.",
            "eventLabel": "공급망 문제",
            "publishedAt": 1787663760,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=976b0e6c23eb5be32d099a3f07581040104e6978ae0999653761b44c0b776eb3",
            "reason": "회사 실적과의 연결고리 확인"
          },
          {
            "headline": "Constellation Energy vs. Vistra: AI 전력 수익 경쟁을 주도하는 사람은 누구입니까?",
            "eventLabel": "실적 발표",
            "publishedAt": 1787318284,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=fa80810a001357d7eb9d8985ade214e9e13891a64b16cbcc5bd5e764056ccd08",
            "reason": "사업·실적 연결 경로 확인 필요"
          },
          {
            "headline": "Constellation Energy vs. Vistra: AI 전력 수익 경쟁을 주도하는 사람은 누구입니까?",
            "eventLabel": "규제·소송·수출 제한",
            "publishedAt": 1787314684,
            "direction": "negative",
            "sourceUrl": "https://finnhub.io/api/news?id=fa80810a001357d7eb9d8985ade214e9e13891a64b16cbcc5bd5e764056ccd08",
            "reason": "회사 실적과의 연결고리 확인"
          }
        ],
        "status": "available",
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
      "guidanceTrackRecord": {
        "status": "collecting",
        "settledCount": 0,
        "metCount": 0,
        "hitRate": null,
        "confidenceAdjustment": 0.0,
        "worseningTwo": false,
        "recentOutcomes": [],
        "notice": "SEC Company Facts의 분기 매출만 회사 공식 가이던스와 대조합니다. 2개 결과 전에는 신뢰도에 반영하지 않습니다."
      },
      "valuationScenario": {
        "status": "available",
        "price": 140.03,
        "currentEps": 9.58625,
        "nextEps": 10.34614,
        "epsGrowth": 0.0793,
        "marketPe": 14.61,
        "conservative": 96.72,
        "base": 151.13,
        "optimistic": 234.25,
        "currentVsBase": -0.0734,
        "analystTargetMean": 217.84212,
        "analystTargetLow": 106.0,
        "analystTargetHigh": 313.0,
        "evidenceWeights": {
          "bull": 22.1,
          "base": 37.4,
          "bear": 40.5
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
          "asOf": 1787322925.8647835,
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
          "currentPrice": 138.94000244140625,
          "valuationGap": -0.1169,
          "theses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787407899.9208522,
          "date": "2026-08-22",
          "fundamentalScore": -6.4,
          "confidence": 85.0,
          "fundamentalDamage": 16.0,
          "thesisDamage": 28.0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 27.0,
            "base": 38.9,
            "bear": 34.1
          },
          "currentPrice": 136.2100067138672,
          "valuationGap": -0.1169,
          "theses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787496888.8915975,
          "date": "2026-08-23",
          "fundamentalScore": -8.4,
          "confidence": 90.0,
          "fundamentalDamage": 34.0,
          "thesisDamage": 56.0,
          "thesisStatus": "damaged",
          "scenarioWeights": {
            "bull": 23.6,
            "base": 37.9,
            "bear": 38.5
          },
          "currentPrice": 136.2100067138672,
          "valuationGap": -0.0745,
          "theses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787582269.4850764,
          "date": "2026-08-24",
          "fundamentalScore": -8.4,
          "confidence": 90.0,
          "fundamentalDamage": 34.0,
          "thesisDamage": 56.0,
          "thesisStatus": "damaged",
          "scenarioWeights": {
            "bull": 23.6,
            "base": 37.9,
            "bear": 38.5
          },
          "currentPrice": 136.2100067138672,
          "valuationGap": -0.0745,
          "theses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787667920.4111497,
          "date": "2026-08-25",
          "fundamentalScore": -8.6,
          "confidence": 90.0,
          "fundamentalDamage": 34.0,
          "thesisDamage": 56.0,
          "thesisStatus": "damaged",
          "scenarioWeights": {
            "bull": 23.6,
            "base": 37.9,
            "bear": 38.5
          },
          "currentPrice": 135.66000366210938,
          "valuationGap": -0.0734,
          "theses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787754142.7259922,
          "date": "2026-08-26",
          "fundamentalScore": -8.6,
          "confidence": 95.0,
          "fundamentalDamage": 39.9,
          "thesisDamage": 70.0,
          "thesisStatus": "damaged",
          "scenarioWeights": {
            "bull": 22.1,
            "base": 37.4,
            "bear": 40.5
          },
          "currentPrice": 139.02999877929688,
          "valuationGap": -0.0734,
          "theses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787788668.347003,
          "date": "2026-08-27",
          "fundamentalScore": -8.6,
          "confidence": 95.0,
          "fundamentalDamage": 39.9,
          "thesisDamage": 70.0,
          "thesisStatus": "damaged",
          "scenarioWeights": {
            "bull": 22.1,
            "base": 37.4,
            "bear": 40.5
          },
          "currentPrice": 140.02999877929688,
          "valuationGap": -0.0734,
          "theses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        }
      ],
      "thesisHistory": [
        {
          "asOf": 1787322925.8647835,
          "date": "2026-08-21",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787407899.9208522,
          "date": "2026-08-22",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787496888.8915975,
          "date": "2026-08-23",
          "overallStatus": "damaged",
          "statuses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787582269.4850764,
          "date": "2026-08-24",
          "overallStatus": "damaged",
          "statuses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787667920.4111497,
          "date": "2026-08-25",
          "overallStatus": "damaged",
          "statuses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787754142.7259922,
          "date": "2026-08-26",
          "overallStatus": "damaged",
          "statuses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787788668.347003,
          "date": "2026-08-27",
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
    "ETN": {
      "ticker": "ETN",
      "asOf": 1787788668.347003,
      "modelVersion": "fundamental-v1.3",
      "fundamentalScore": 10.7,
      "confidence": 68.8,
      "fundamentalSigma": null,
      "fundamentalSigmaProgress": {
        "status": "collecting",
        "collected": 7,
        "required": 8,
        "remaining": 1,
        "expectedReadyDate": "2026-08-28",
        "notice": "같은 KST 날짜의 반복 실행은 한 건으로 교체하며, 임의 과거 점수를 만들어 채우지 않습니다."
      },
      "priceSigma": -0.73,
      "priceDamage": 24.4,
      "fundamentalDamage": 0,
      "thesisDamage": 0,
      "thesisStatus": "intact",
      "damageRead": "현재 가격 변동과 펀더멘털 변화 사이에 큰 괴리는 확인되지 않았습니다.",
      "dimensions": {
        "growth": {
          "score": 10.043333333333333,
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
        "needsConfirmation": 0,
        "aiInferences": 0
      },
      "evidence": [],
      "topPositive": [],
      "topNegative": [],
      "nextChecks": [
        "다음 실적의 매출·EPS·마진",
        "공식 가이던스 대비 실제 매출 달성 여부",
        "핵심 고객 수요·CAPEX",
        "FCF와 부채·CAPEX 변화"
      ],
      "theses": [
        {
          "id": "growth",
          "name": "성장 Thesis",
          "statement": "매출·EPS 성장 전망이 유지되고 본업 수익성이 함께 개선된다.",
          "status": "intact",
          "score": 10.0,
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
          "score": 20.5,
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
          "score": 3.6,
          "confidence": 68.8,
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
        "updatedAt": "2026-08-19",
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
        "reportedNetIncome": 821000000.0,
        "normalizedIncome": null,
        "normalizedGap": null,
        "findings": [],
        "coreRead": "현재 수집된 항목만 보면 최신 기간 순이익을 크게 왜곡하는 특이항목은 확인되지 않았습니다.",
        "manualContext": null
      },
      "guidanceTrackRecord": {
        "status": "collecting",
        "settledCount": 0,
        "metCount": 0,
        "hitRate": null,
        "confidenceAdjustment": 0.0,
        "worseningTwo": false,
        "recentOutcomes": [],
        "notice": "SEC Company Facts의 분기 매출만 회사 공식 가이던스와 대조합니다. 2개 결과 전에는 신뢰도에 반영하지 않습니다."
      },
      "valuationScenario": {
        "status": "available",
        "price": 419.44,
        "currentEps": 13.51521,
        "nextEps": 16.0337,
        "epsGrowth": 0.1863,
        "marketPe": 31.03,
        "conservative": 318.46,
        "base": 497.6,
        "optimistic": 771.28,
        "currentVsBase": -0.1571,
        "analystTargetMean": 477.3708,
        "analystTargetLow": 333.0,
        "analystTargetHigh": 534.0,
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
          "asOf": 1787322925.8647835,
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
          "currentPrice": 415.2900085449219,
          "valuationGap": -0.1573,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787407899.9208522,
          "date": "2026-08-22",
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
          "currentPrice": 419.20001220703125,
          "valuationGap": -0.1573,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787496888.8915975,
          "date": "2026-08-23",
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
          "currentPrice": 419.20001220703125,
          "valuationGap": -0.1571,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787582269.4850764,
          "date": "2026-08-24",
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
          "currentPrice": 419.20001220703125,
          "valuationGap": -0.1571,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787667920.4111497,
          "date": "2026-08-25",
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
          "currentPrice": 408.6700134277344,
          "valuationGap": -0.1571,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787754142.7259922,
          "date": "2026-08-26",
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
          "currentPrice": 409.20001220703125,
          "valuationGap": -0.1571,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787788668.347003,
          "date": "2026-08-27",
          "fundamentalScore": 10.7,
          "confidence": 68.8,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 33.1,
            "base": 39.6,
            "bear": 27.3
          },
          "currentPrice": 419.44000244140625,
          "valuationGap": -0.1571,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        }
      ],
      "thesisHistory": [
        {
          "asOf": 1787322925.8647835,
          "date": "2026-08-21",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787407899.9208522,
          "date": "2026-08-22",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787496888.8915975,
          "date": "2026-08-23",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787582269.4850764,
          "date": "2026-08-24",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787667920.4111497,
          "date": "2026-08-25",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787754142.7259922,
          "date": "2026-08-26",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787788668.347003,
          "date": "2026-08-27",
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
      "asOf": 1787788668.347003,
      "modelVersion": "fundamental-v1.3",
      "fundamentalScore": 9.2,
      "confidence": 71.7,
      "fundamentalSigma": null,
      "fundamentalSigmaProgress": {
        "status": "collecting",
        "collected": 7,
        "required": 8,
        "remaining": 1,
        "expectedReadyDate": "2026-08-28",
        "notice": "같은 KST 날짜의 반복 실행은 한 건으로 교체하며, 임의 과거 점수를 만들어 채우지 않습니다."
      },
      "priceSigma": -1.77,
      "priceDamage": 59.0,
      "fundamentalDamage": 0,
      "thesisDamage": 0,
      "thesisStatus": "intact",
      "damageRead": "가격 조정이 펀더멘털 변화보다 큽니다. 수급·멀티플 조정 가능성이 있으나, 다음 실적과 중요 뉴스를 확인해야 합니다.",
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
        "공식 가이던스 대비 실제 매출 달성 여부",
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
        "updatedAt": "2026-08-19",
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
        "reportedNetIncome": 451381000.0,
        "normalizedIncome": 456213815.0,
        "normalizedGap": -0.0106,
        "findings": [],
        "coreRead": "현재 수집된 항목만 보면 최신 기간 순이익을 크게 왜곡하는 특이항목은 확인되지 않았습니다.",
        "manualContext": null
      },
      "guidanceTrackRecord": {
        "status": "collecting",
        "settledCount": 0,
        "metCount": 0,
        "hitRate": null,
        "confidenceAdjustment": 0.0,
        "worseningTwo": false,
        "recentOutcomes": [],
        "notice": "SEC Company Facts의 분기 매출만 회사 공식 가이던스와 대조합니다. 2개 결과 전에는 신뢰도에 반영하지 않습니다."
      },
      "valuationScenario": {
        "status": "available",
        "price": 616.73,
        "currentEps": 16.72777,
        "nextEps": 19.6413,
        "epsGrowth": 0.1742,
        "marketPe": 36.87,
        "conservative": 463.45,
        "base": 724.15,
        "optimistic": 1122.43,
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
          "asOf": 1787322925.8647835,
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
          "currentPrice": 662.469970703125,
          "valuationGap": -0.1483,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787407899.9208522,
          "date": "2026-08-22",
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
          "currentPrice": 639.3400268554688,
          "valuationGap": -0.1483,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787496888.8915975,
          "date": "2026-08-23",
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
          "currentPrice": 639.3400268554688,
          "valuationGap": -0.1483,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787582269.4850764,
          "date": "2026-08-24",
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
          "currentPrice": 639.3400268554688,
          "valuationGap": -0.1483,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787667920.4111497,
          "date": "2026-08-25",
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
          "currentPrice": 616.780029296875,
          "valuationGap": -0.1483,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787754142.7259922,
          "date": "2026-08-26",
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
          "currentPrice": 603.780029296875,
          "valuationGap": -0.1483,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787788668.347003,
          "date": "2026-08-27",
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
          "currentPrice": 616.72998046875,
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
          "asOf": 1787322925.8647835,
          "date": "2026-08-21",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787407899.9208522,
          "date": "2026-08-22",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787496888.8915975,
          "date": "2026-08-23",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787582269.4850764,
          "date": "2026-08-24",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787667920.4111497,
          "date": "2026-08-25",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787754142.7259922,
          "date": "2026-08-26",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787788668.347003,
          "date": "2026-08-27",
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
      "asOf": 1787788668.347003,
      "modelVersion": "fundamental-v1.3",
      "fundamentalScore": 9.2,
      "confidence": 71.7,
      "fundamentalSigma": null,
      "fundamentalSigmaProgress": {
        "status": "collecting",
        "collected": 7,
        "required": 8,
        "remaining": 1,
        "expectedReadyDate": "2026-08-28",
        "notice": "같은 KST 날짜의 반복 실행은 한 건으로 교체하며, 임의 과거 점수를 만들어 채우지 않습니다."
      },
      "priceSigma": -0.97,
      "priceDamage": 32.2,
      "fundamentalDamage": 0,
      "thesisDamage": 0,
      "thesisStatus": "intact",
      "damageRead": "현재 가격 변동과 펀더멘털 변화 사이에 큰 괴리는 확인되지 않았습니다.",
      "dimensions": {
        "growth": {
          "score": 7.28,
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
        "공식 가이던스 대비 실제 매출 달성 여부",
        "핵심 고객 수요·CAPEX",
        "FCF와 부채·CAPEX 변화"
      ],
      "theses": [
        {
          "id": "growth",
          "name": "성장 Thesis",
          "statement": "매출·EPS 성장 전망이 유지되고 본업 수익성이 함께 개선된다.",
          "status": "intact",
          "score": 7.3,
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
        "updatedAt": "2026-08-19",
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
        "reportedNetIncome": 240400000.0,
        "normalizedIncome": 240400000.0,
        "normalizedGap": 0.0,
        "findings": [],
        "coreRead": "현재 수집된 항목만 보면 최신 기간 순이익을 크게 왜곡하는 특이항목은 확인되지 않았습니다.",
        "manualContext": null
      },
      "guidanceTrackRecord": {
        "status": "collecting",
        "settledCount": 0,
        "metCount": 0,
        "hitRate": null,
        "confidenceAdjustment": 0.0,
        "worseningTwo": false,
        "recentOutcomes": [],
        "notice": "SEC Company Facts의 분기 매출만 회사 공식 가이던스와 대조합니다. 2개 결과 전에는 신뢰도에 반영하지 않습니다."
      },
      "valuationScenario": {
        "status": "available",
        "price": 472.46,
        "currentEps": 20.45775,
        "nextEps": 22.87801,
        "epsGrowth": 0.1183,
        "marketPe": 23.09,
        "conservative": 338.15,
        "base": 528.35,
        "optimistic": 818.95,
        "currentVsBase": -0.1058,
        "analystTargetMean": 564.8182,
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
          "asOf": 1787322925.8647835,
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
          "currentPrice": 469.760009765625,
          "valuationGap": -0.1057,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787407899.9208522,
          "date": "2026-08-22",
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
          "currentPrice": 470.0299987792969,
          "valuationGap": -0.1057,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787496888.8915975,
          "date": "2026-08-23",
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
          "currentPrice": 470.0299987792969,
          "valuationGap": -0.1058,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787582269.4850764,
          "date": "2026-08-24",
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
          "currentPrice": 470.0299987792969,
          "valuationGap": -0.1058,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787667920.4111497,
          "date": "2026-08-25",
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
          "currentPrice": 466.760009765625,
          "valuationGap": -0.1058,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787754142.7259922,
          "date": "2026-08-26",
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
          "currentPrice": 464.19000244140625,
          "valuationGap": -0.1058,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787788668.347003,
          "date": "2026-08-27",
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
          "currentPrice": 472.4599914550781,
          "valuationGap": -0.1058,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        }
      ],
      "thesisHistory": [
        {
          "asOf": 1787322925.8647835,
          "date": "2026-08-21",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787407899.9208522,
          "date": "2026-08-22",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787496888.8915975,
          "date": "2026-08-23",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787582269.4850764,
          "date": "2026-08-24",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787667920.4111497,
          "date": "2026-08-25",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787754142.7259922,
          "date": "2026-08-26",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787788668.347003,
          "date": "2026-08-27",
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
      "asOf": 1787788668.347003,
      "modelVersion": "fundamental-v1.3",
      "fundamentalScore": 17.7,
      "confidence": 71.7,
      "fundamentalSigma": null,
      "fundamentalSigmaProgress": {
        "status": "collecting",
        "collected": 7,
        "required": 8,
        "remaining": 1,
        "expectedReadyDate": "2026-08-28",
        "notice": "같은 KST 날짜의 반복 실행은 한 건으로 교체하며, 임의 과거 점수를 만들어 채우지 않습니다."
      },
      "priceSigma": -0.31,
      "priceDamage": 10.3,
      "fundamentalDamage": 0,
      "thesisDamage": 0,
      "thesisStatus": "intact",
      "damageRead": "현재 가격 변동과 펀더멘털 변화 사이에 큰 괴리는 확인되지 않았습니다.",
      "dimensions": {
        "growth": {
          "score": 21.713334333333336,
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
        "needsConfirmation": 0,
        "aiInferences": 0
      },
      "evidence": [],
      "topPositive": [],
      "topNegative": [],
      "nextChecks": [
        "다음 실적의 매출·EPS·마진",
        "공식 가이던스 대비 실제 매출 달성 여부",
        "핵심 고객 수요·CAPEX",
        "FCF와 부채·CAPEX 변화"
      ],
      "theses": [
        {
          "id": "growth",
          "name": "성장 Thesis",
          "statement": "매출·EPS 성장 전망이 유지되고 본업 수익성이 함께 개선된다.",
          "status": "strengthening",
          "score": 21.7,
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
          "score": 52.2,
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
        "bull": 34.6,
        "base": 39.1,
        "bear": 26.3
      },
      "alerts": [],
      "businessProfile": {
        "updatedAt": "2026-08-19",
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
        "reportedNetIncome": 497800000.0,
        "normalizedIncome": 497800000.0,
        "normalizedGap": 0.0,
        "findings": [],
        "coreRead": "현재 수집된 항목만 보면 최신 기간 순이익을 크게 왜곡하는 특이항목은 확인되지 않았습니다.",
        "manualContext": null
      },
      "guidanceTrackRecord": {
        "status": "collecting",
        "settledCount": 0,
        "metCount": 0,
        "hitRate": null,
        "confidenceAdjustment": 0.0,
        "worseningTwo": false,
        "recentOutcomes": [],
        "notice": "SEC Company Facts의 분기 매출만 회사 공식 가이던스와 대조합니다. 2개 결과 전에는 신뢰도에 반영하지 않습니다."
      },
      "valuationScenario": {
        "status": "available",
        "price": 263.81,
        "currentEps": 6.70757,
        "nextEps": 9.09879,
        "epsGrowth": 0.3565,
        "marketPe": 39.33,
        "conservative": 229.03,
        "base": 357.86,
        "optimistic": 554.68,
        "currentVsBase": -0.2628,
        "analystTargetMean": 338.15384,
        "analystTargetLow": 236.0,
        "analystTargetHigh": 427.0,
        "evidenceWeights": {
          "bull": 34.6,
          "base": 39.1,
          "bear": 26.3
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
          "asOf": 1787322925.8647835,
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
          "currentPrice": 264.6300048828125,
          "valuationGap": -0.2628,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787407899.9208522,
          "date": "2026-08-22",
          "fundamentalScore": 18.4,
          "confidence": 85.0,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 35.0,
            "base": 38.9,
            "bear": 26.1
          },
          "currentPrice": 261.95001220703125,
          "valuationGap": -0.2628,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787496888.8915975,
          "date": "2026-08-23",
          "fundamentalScore": 18.4,
          "confidence": 85.0,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 35.0,
            "base": 38.9,
            "bear": 26.1
          },
          "currentPrice": 261.95001220703125,
          "valuationGap": -0.2628,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787582269.4850764,
          "date": "2026-08-24",
          "fundamentalScore": 17.7,
          "confidence": 71.7,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 34.6,
            "base": 39.1,
            "bear": 26.3
          },
          "currentPrice": 261.95001220703125,
          "valuationGap": -0.2628,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787667920.4111497,
          "date": "2026-08-25",
          "fundamentalScore": 17.7,
          "confidence": 71.7,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 34.6,
            "base": 39.1,
            "bear": 26.3
          },
          "currentPrice": 254.97000122070312,
          "valuationGap": -0.2628,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787754142.7259922,
          "date": "2026-08-26",
          "fundamentalScore": 17.7,
          "confidence": 71.7,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 34.6,
            "base": 39.1,
            "bear": 26.3
          },
          "currentPrice": 255.75,
          "valuationGap": -0.2628,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787788668.347003,
          "date": "2026-08-27",
          "fundamentalScore": 17.7,
          "confidence": 71.7,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 34.6,
            "base": 39.1,
            "bear": 26.3
          },
          "currentPrice": 263.80999755859375,
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
          "asOf": 1787322925.8647835,
          "date": "2026-08-21",
          "overallStatus": "strengthening",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787407899.9208522,
          "date": "2026-08-22",
          "overallStatus": "intact",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787496888.8915975,
          "date": "2026-08-23",
          "overallStatus": "intact",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787582269.4850764,
          "date": "2026-08-24",
          "overallStatus": "intact",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787667920.4111497,
          "date": "2026-08-25",
          "overallStatus": "intact",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787754142.7259922,
          "date": "2026-08-26",
          "overallStatus": "intact",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787788668.347003,
          "date": "2026-08-27",
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
    "MOD": {
      "ticker": "MOD",
      "asOf": 1787788668.347003,
      "modelVersion": "fundamental-v1.3",
      "fundamentalScore": 10.5,
      "confidence": 85.0,
      "fundamentalSigma": null,
      "fundamentalSigmaProgress": {
        "status": "collecting",
        "collected": 7,
        "required": 8,
        "remaining": 1,
        "expectedReadyDate": "2026-08-28",
        "notice": "같은 KST 날짜의 반복 실행은 한 건으로 교체하며, 임의 과거 점수를 만들어 채우지 않습니다."
      },
      "priceSigma": -1.37,
      "priceDamage": 45.8,
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
        "confirmedFacts": 3,
        "credibleReports": 0,
        "needsConfirmation": 0,
        "aiInferences": 1
      },
      "evidence": [
        {
          "headline": "MOD SEC Form 8-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1787238000.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/67347/000110465926099432/mod-20260820x8k.htm",
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
        "공식 가이던스 대비 실제 매출 달성 여부",
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
          "score": 10.8,
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
          "score": 5.3,
          "confidence": 85.0,
          "falsificationRules": [
            "핵심 고객 이탈 또는 점유율 하락이 공식 수치로 확인",
            "부채 부담 상승과 사업 리스크 확대가 동시 발생"
          ]
        }
      ],
      "scenarios": {
        "bull": 33.3,
        "base": 39.5,
        "bear": 27.2
      },
      "alerts": [],
      "businessProfile": {
        "updatedAt": "2026-08-19",
        "customers": [],
        "strengths": [],
        "risks": [],
        "sources": [],
        "latestChanges": [
          {
            "headline": "MOD SEC Form 8-K 공식 제출",
            "eventLabel": "중요사항 공시",
            "publishedAt": 1787238000.0,
            "direction": "mixed",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/67347/000110465926099432/mod-20260820x8k.htm",
            "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
          }
        ],
        "status": "available",
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
      "guidanceTrackRecord": {
        "status": "collecting",
        "settledCount": 0,
        "metCount": 0,
        "hitRate": null,
        "confidenceAdjustment": 0.0,
        "worseningTwo": false,
        "recentOutcomes": [],
        "notice": "SEC Company Facts의 분기 매출만 회사 공식 가이던스와 대조합니다. 2개 결과 전에는 신뢰도에 반영하지 않습니다."
      },
      "valuationScenario": {
        "status": "available",
        "price": 187.3,
        "currentEps": 7.6441,
        "nextEps": 11.18208,
        "epsGrowth": 0.4628,
        "marketPe": 24.5,
        "conservative": 175.35,
        "base": 273.99,
        "optimistic": 424.68,
        "currentVsBase": -0.3164,
        "analystTargetMean": 310.2857,
        "analystTargetLow": 280.0,
        "analystTargetHigh": 355.0,
        "evidenceWeights": {
          "bull": 33.3,
          "base": 39.5,
          "bear": 27.2
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
          "asOf": 1787322925.8647835,
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
          "currentPrice": 190.74000549316406,
          "valuationGap": -0.3164,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787407899.9208522,
          "date": "2026-08-22",
          "fundamentalScore": 10.5,
          "confidence": 85.0,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 33.3,
            "base": 39.5,
            "bear": 27.2
          },
          "currentPrice": 197.67999267578125,
          "valuationGap": -0.3164,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787496888.8915975,
          "date": "2026-08-23",
          "fundamentalScore": 10.5,
          "confidence": 85.0,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 33.3,
            "base": 39.5,
            "bear": 27.2
          },
          "currentPrice": 197.67999267578125,
          "valuationGap": -0.3164,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787582269.4850764,
          "date": "2026-08-24",
          "fundamentalScore": 10.5,
          "confidence": 85.0,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 33.3,
            "base": 39.5,
            "bear": 27.2
          },
          "currentPrice": 197.67999267578125,
          "valuationGap": -0.3164,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787667920.4111497,
          "date": "2026-08-25",
          "fundamentalScore": 10.5,
          "confidence": 85.0,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 33.3,
            "base": 39.5,
            "bear": 27.2
          },
          "currentPrice": 188.3699951171875,
          "valuationGap": -0.3164,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787754142.7259922,
          "date": "2026-08-26",
          "fundamentalScore": 10.5,
          "confidence": 85.0,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 33.3,
            "base": 39.5,
            "bear": 27.2
          },
          "currentPrice": 188.00999450683594,
          "valuationGap": -0.3164,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787788668.347003,
          "date": "2026-08-27",
          "fundamentalScore": 10.5,
          "confidence": 85.0,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 33.3,
            "base": 39.5,
            "bear": 27.2
          },
          "currentPrice": 187.3000030517578,
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
          "asOf": 1787322925.8647835,
          "date": "2026-08-21",
          "overallStatus": "intact",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787407899.9208522,
          "date": "2026-08-22",
          "overallStatus": "intact",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787496888.8915975,
          "date": "2026-08-23",
          "overallStatus": "intact",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787582269.4850764,
          "date": "2026-08-24",
          "overallStatus": "intact",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787667920.4111497,
          "date": "2026-08-25",
          "overallStatus": "intact",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787754142.7259922,
          "date": "2026-08-26",
          "overallStatus": "intact",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787788668.347003,
          "date": "2026-08-27",
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
      "asOf": 1787788668.347003,
      "modelVersion": "fundamental-v1.3",
      "fundamentalScore": 32.8,
      "confidence": 71.7,
      "fundamentalSigma": null,
      "fundamentalSigmaProgress": {
        "status": "collecting",
        "collected": 7,
        "required": 8,
        "remaining": 1,
        "expectedReadyDate": "2026-08-28",
        "notice": "같은 KST 날짜의 반복 실행은 한 건으로 교체하며, 임의 과거 점수를 만들어 채우지 않습니다."
      },
      "priceSigma": -0.24,
      "priceDamage": 8.1,
      "fundamentalDamage": 0,
      "thesisDamage": 0,
      "thesisStatus": "intact",
      "damageRead": "현재 가격 변동과 펀더멘털 변화 사이에 큰 괴리는 확인되지 않았습니다.",
      "dimensions": {
        "growth": {
          "score": 29.466667333333334,
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
        "needsConfirmation": 0,
        "aiInferences": 0
      },
      "evidence": [],
      "topPositive": [],
      "topNegative": [],
      "nextChecks": [
        "다음 실적의 매출·EPS·마진",
        "공식 가이던스 대비 실제 매출 달성 여부",
        "핵심 고객 수요·CAPEX",
        "FCF와 부채·CAPEX 변화"
      ],
      "theses": [
        {
          "id": "growth",
          "name": "성장 Thesis",
          "statement": "매출·EPS 성장 전망이 유지되고 본업 수익성이 함께 개선된다.",
          "status": "strengthening",
          "score": 29.5,
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
          "score": 100,
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
          "score": 1.7,
          "confidence": 71.7,
          "falsificationRules": [
            "핵심 고객 이탈 또는 점유율 하락이 공식 수치로 확인",
            "부채 부담 상승과 사업 리스크 확대가 동시 발생"
          ]
        }
      ],
      "scenarios": {
        "bull": 38.0,
        "base": 38.0,
        "bear": 24.0
      },
      "alerts": [],
      "businessProfile": {
        "updatedAt": "2026-08-19",
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
        "reportedNetIncome": 748000000.0,
        "normalizedIncome": 1306037209.302326,
        "normalizedGap": -0.4273,
        "findings": [],
        "coreRead": "보고 순이익과 정상화이익 차이가 커 헤드라인 순이익을 그대로 본업 성과로 보기 어렵습니다.",
        "manualContext": null
      },
      "guidanceTrackRecord": {
        "status": "collecting",
        "settledCount": 0,
        "metCount": 0,
        "hitRate": null,
        "confidenceAdjustment": 0.0,
        "worseningTwo": false,
        "recentOutcomes": [],
        "notice": "SEC Company Facts의 분기 매출만 회사 공식 가이던스와 대조합니다. 2개 결과 전에는 신뢰도에 반영하지 않습니다."
      },
      "valuationScenario": {
        "status": "available",
        "price": 846.37,
        "currentEps": 35.78091,
        "nextEps": 55.3714,
        "epsGrowth": 0.5475,
        "marketPe": 23.65,
        "conservative": 838.25,
        "base": 1309.77,
        "optimistic": 2030.14,
        "currentVsBase": -0.3538,
        "analystTargetMean": 1125.0,
        "analystTargetLow": 700.0,
        "analystTargetHigh": 1600.0,
        "evidenceWeights": {
          "bull": 38.0,
          "base": 38.0,
          "bear": 24.0
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
          "asOf": 1787322925.8647835,
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
          "currentPrice": 850.239990234375,
          "valuationGap": -0.3538,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787407899.9208522,
          "date": "2026-08-22",
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
          "currentPrice": 850.0,
          "valuationGap": -0.3538,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787496888.8915975,
          "date": "2026-08-23",
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
          "currentPrice": 850.0,
          "valuationGap": -0.3538,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787582269.4850764,
          "date": "2026-08-24",
          "fundamentalScore": 32.2,
          "confidence": 90.0,
          "fundamentalDamage": 4.3,
          "thesisDamage": 0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 38.2,
            "base": 37.8,
            "bear": 24.0
          },
          "currentPrice": 850.0,
          "valuationGap": -0.3538,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787667920.4111497,
          "date": "2026-08-25",
          "fundamentalScore": 31.5,
          "confidence": 85.0,
          "fundamentalDamage": 16.0,
          "thesisDamage": 28.0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 34.6,
            "base": 37.1,
            "bear": 28.3
          },
          "currentPrice": 794.6500244140625,
          "valuationGap": -0.3538,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787754142.7259922,
          "date": "2026-08-26",
          "fundamentalScore": 32.8,
          "confidence": 71.7,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 38.0,
            "base": 38.0,
            "bear": 24.0
          },
          "currentPrice": 821.6699829101562,
          "valuationGap": -0.3538,
          "theses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787788668.347003,
          "date": "2026-08-27",
          "fundamentalScore": 32.8,
          "confidence": 71.7,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 38.0,
            "base": 38.0,
            "bear": 24.0
          },
          "currentPrice": 846.3699951171875,
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
          "asOf": 1787322925.8647835,
          "date": "2026-08-21",
          "overallStatus": "intact",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787407899.9208522,
          "date": "2026-08-22",
          "overallStatus": "intact",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787496888.8915975,
          "date": "2026-08-23",
          "overallStatus": "intact",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787582269.4850764,
          "date": "2026-08-24",
          "overallStatus": "intact",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787667920.4111497,
          "date": "2026-08-25",
          "overallStatus": "intact",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787754142.7259922,
          "date": "2026-08-26",
          "overallStatus": "intact",
          "statuses": {
            "growth": "strengthening",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787788668.347003,
          "date": "2026-08-27",
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
      "asOf": 1787788668.347003,
      "modelVersion": "fundamental-v1.3",
      "fundamentalScore": 8.5,
      "confidence": 71.7,
      "fundamentalSigma": null,
      "fundamentalSigmaProgress": {
        "status": "collecting",
        "collected": 7,
        "required": 8,
        "remaining": 1,
        "expectedReadyDate": "2026-08-28",
        "notice": "같은 KST 날짜의 반복 실행은 한 건으로 교체하며, 임의 과거 점수를 만들어 채우지 않습니다."
      },
      "priceSigma": -1.54,
      "priceDamage": 51.3,
      "fundamentalDamage": 0,
      "thesisDamage": 0,
      "thesisStatus": "intact",
      "damageRead": "현재 가격 변동과 펀더멘털 변화 사이에 큰 괴리는 확인되지 않았습니다.",
      "dimensions": {
        "growth": {
          "score": 7.246666666666666,
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
        "공식 가이던스 대비 실제 매출 달성 여부",
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
        "updatedAt": "2026-08-19",
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
        "reportedNetIncome": 403694000.0,
        "normalizedIncome": 403694000.0,
        "normalizedGap": 0.0,
        "findings": [],
        "coreRead": "현재 수집된 항목만 보면 최신 기간 순이익을 크게 왜곡하는 특이항목은 확인되지 않았습니다.",
        "manualContext": null
      },
      "guidanceTrackRecord": {
        "status": "collecting",
        "settledCount": 0,
        "metCount": 0,
        "hitRate": null,
        "confidenceAdjustment": 0.0,
        "worseningTwo": false,
        "recentOutcomes": [],
        "notice": "SEC Company Facts의 분기 매출만 회사 공식 가이던스와 대조합니다. 2개 결과 전에는 신뢰도에 반영하지 않습니다."
      },
      "valuationScenario": {
        "status": "available",
        "price": 763.59,
        "currentEps": 32.85062,
        "nextEps": 36.74899,
        "epsGrowth": 0.1187,
        "marketPe": 23.24,
        "conservative": 546.69,
        "base": 854.2,
        "optimistic": 1324.02,
        "currentVsBase": -0.1061,
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
          "asOf": 1787322925.8647835,
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
          "currentPrice": 787.3900146484375,
          "valuationGap": -0.1059,
          "theses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787407899.9208522,
          "date": "2026-08-22",
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
          "currentPrice": 776.6199951171875,
          "valuationGap": -0.1059,
          "theses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787496888.8915975,
          "date": "2026-08-23",
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
          "currentPrice": 776.6199951171875,
          "valuationGap": -0.1061,
          "theses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787582269.4850764,
          "date": "2026-08-24",
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
          "currentPrice": 776.6199951171875,
          "valuationGap": -0.1061,
          "theses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787667920.4111497,
          "date": "2026-08-25",
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
          "currentPrice": 764.9000244140625,
          "valuationGap": -0.1061,
          "theses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787754142.7259922,
          "date": "2026-08-26",
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
          "currentPrice": 739.8699951171875,
          "valuationGap": -0.1061,
          "theses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787788668.347003,
          "date": "2026-08-27",
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
          "currentPrice": 763.5900268554688,
          "valuationGap": -0.1061,
          "theses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        }
      ],
      "thesisHistory": [
        {
          "asOf": 1787322925.8647835,
          "date": "2026-08-21",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787407899.9208522,
          "date": "2026-08-22",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787496888.8915975,
          "date": "2026-08-23",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787582269.4850764,
          "date": "2026-08-24",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787667920.4111497,
          "date": "2026-08-25",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787754142.7259922,
          "date": "2026-08-26",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "intact",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787788668.347003,
          "date": "2026-08-27",
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
      "asOf": 1787788668.347003,
      "modelVersion": "fundamental-v1.3",
      "fundamentalScore": 16.0,
      "confidence": 71.7,
      "fundamentalSigma": null,
      "fundamentalSigmaProgress": {
        "status": "collecting",
        "collected": 7,
        "required": 8,
        "remaining": 1,
        "expectedReadyDate": "2026-08-28",
        "notice": "같은 KST 날짜의 반복 실행은 한 건으로 교체하며, 임의 과거 점수를 만들어 채우지 않습니다."
      },
      "priceSigma": -1.36,
      "priceDamage": 45.3,
      "fundamentalDamage": 0,
      "thesisDamage": 0,
      "thesisStatus": "intact",
      "damageRead": "현재 가격 변동과 펀더멘털 변화 사이에 큰 괴리는 확인되지 않았습니다.",
      "dimensions": {
        "growth": {
          "score": 13.926666333333335,
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
        "공식 가이던스 대비 실제 매출 달성 여부",
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
        "bull": 34.3,
        "base": 39.2,
        "bear": 26.5
      },
      "alerts": [],
      "businessProfile": {
        "updatedAt": "2026-08-19",
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
        "reportedNetIncome": 441602000.0,
        "normalizedIncome": 442584649.71046,
        "normalizedGap": -0.0022,
        "findings": [],
        "coreRead": "현재 수집된 항목만 보면 최신 기간 순이익을 크게 왜곡하는 특이항목은 확인되지 않았습니다.",
        "manualContext": null
      },
      "guidanceTrackRecord": {
        "status": "collecting",
        "settledCount": 0,
        "metCount": 0,
        "hitRate": null,
        "confidenceAdjustment": 0.0,
        "worseningTwo": false,
        "recentOutcomes": [],
        "notice": "SEC Company Facts의 분기 매출만 회사 공식 가이던스와 대조합니다. 2개 결과 전에는 신뢰도에 반영하지 않습니다."
      },
      "valuationScenario": {
        "status": "available",
        "price": 1615.69,
        "currentEps": 49.00705,
        "nextEps": 60.17848,
        "epsGrowth": 0.228,
        "marketPe": 32.97,
        "conservative": 1269.76,
        "base": 1984.0,
        "optimistic": 3075.19,
        "currentVsBase": -0.1856,
        "analystTargetMean": 2197.0,
        "analystTargetLow": 1910.0,
        "analystTargetHigh": 2500.0,
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
          "asOf": 1787322925.8647835,
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
          "currentPrice": 1672.93994140625,
          "valuationGap": -0.1844,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787407899.9208522,
          "date": "2026-08-22",
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
          "currentPrice": 1655.6099853515625,
          "valuationGap": -0.1844,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787496888.8915975,
          "date": "2026-08-23",
          "fundamentalScore": 16.0,
          "confidence": 71.7,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 34.3,
            "base": 39.2,
            "bear": 26.5
          },
          "currentPrice": 1655.6099853515625,
          "valuationGap": -0.1856,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787582269.4850764,
          "date": "2026-08-24",
          "fundamentalScore": 16.0,
          "confidence": 71.7,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 34.3,
            "base": 39.2,
            "bear": 26.5
          },
          "currentPrice": 1655.6099853515625,
          "valuationGap": -0.1856,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787667920.4111497,
          "date": "2026-08-25",
          "fundamentalScore": 14.7,
          "confidence": 85.0,
          "fundamentalDamage": 16.0,
          "thesisDamage": 28.0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 31.0,
            "base": 38.3,
            "bear": 30.7
          },
          "currentPrice": 1609.68994140625,
          "valuationGap": -0.1856,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787754142.7259922,
          "date": "2026-08-26",
          "fundamentalScore": 16.0,
          "confidence": 71.7,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 34.3,
            "base": 39.2,
            "bear": 26.5
          },
          "currentPrice": 1561.9599609375,
          "valuationGap": -0.1856,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787788668.347003,
          "date": "2026-08-27",
          "fundamentalScore": 16.0,
          "confidence": 71.7,
          "fundamentalDamage": 0,
          "thesisDamage": 0,
          "thesisStatus": "intact",
          "scenarioWeights": {
            "bull": 34.3,
            "base": 39.2,
            "bear": 26.5
          },
          "currentPrice": 1615.68994140625,
          "valuationGap": -0.1856,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        }
      ],
      "thesisHistory": [
        {
          "asOf": 1787322925.8647835,
          "date": "2026-08-21",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787407899.9208522,
          "date": "2026-08-22",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787496888.8915975,
          "date": "2026-08-23",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787582269.4850764,
          "date": "2026-08-24",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787667920.4111497,
          "date": "2026-08-25",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787754142.7259922,
          "date": "2026-08-26",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787788668.347003,
          "date": "2026-08-27",
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
      "asOf": 1787788668.347003,
      "modelVersion": "fundamental-v1.3",
      "fundamentalScore": 10.3,
      "confidence": 55.2,
      "fundamentalSigma": null,
      "fundamentalSigmaProgress": {
        "status": "collecting",
        "collected": 7,
        "required": 8,
        "remaining": 1,
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
        "공식 가이던스 대비 실제 매출 달성 여부",
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
        "updatedAt": "2026-08-19",
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
        "period": "2025",
        "reportedNetIncome": 4163000000.0,
        "normalizedIncome": 4808805000.0,
        "normalizedGap": -0.1343,
        "findings": [],
        "coreRead": "보고 순이익과 정상화이익 차이가 커 헤드라인 순이익을 그대로 본업 성과로 보기 어렵습니다.",
        "manualContext": null
      },
      "guidanceTrackRecord": {
        "status": "collecting",
        "settledCount": 0,
        "metCount": 0,
        "hitRate": null,
        "confidenceAdjustment": 0.0,
        "worseningTwo": false,
        "recentOutcomes": [],
        "notice": "SEC Company Facts의 분기 매출만 회사 공식 가이던스와 대조합니다. 2개 결과 전에는 신뢰도에 반영하지 않습니다."
      },
      "valuationScenario": {
        "status": "available",
        "price": 69.67,
        "currentEps": 2.30922,
        "nextEps": 2.878,
        "epsGrowth": 0.2463,
        "marketPe": 30.17,
        "conservative": 55.57,
        "base": 86.83,
        "optimistic": 134.59,
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
          "asOf": 1787322925.8647835,
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
          "currentPrice": 68.81999969482422,
          "valuationGap": -0.1976,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787407899.9208522,
          "date": "2026-08-22",
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
          "currentPrice": 69.22000122070312,
          "valuationGap": -0.1976,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787496888.8915975,
          "date": "2026-08-23",
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
          "currentPrice": 69.22000122070312,
          "valuationGap": -0.1976,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787582269.4850764,
          "date": "2026-08-24",
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
          "currentPrice": 69.22000122070312,
          "valuationGap": -0.1976,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787667920.4111497,
          "date": "2026-08-25",
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
          "currentPrice": 68.06999969482422,
          "valuationGap": -0.1976,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787754142.7259922,
          "date": "2026-08-26",
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
          "currentPrice": 69.19999694824219,
          "valuationGap": -0.1976,
          "theses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787788668.347003,
          "date": "2026-08-27",
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
          "currentPrice": 69.66999816894531,
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
          "asOf": 1787322925.8647835,
          "date": "2026-08-21",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787407899.9208522,
          "date": "2026-08-22",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787496888.8915975,
          "date": "2026-08-23",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787582269.4850764,
          "date": "2026-08-24",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787667920.4111497,
          "date": "2026-08-25",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787754142.7259922,
          "date": "2026-08-26",
          "overallStatus": "intact",
          "statuses": {
            "growth": "intact",
            "cashFlow": "strengthening",
            "resilience": "intact"
          }
        },
        {
          "asOf": 1787788668.347003,
          "date": "2026-08-27",
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
