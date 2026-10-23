const PRICE_MAP_DATA = {
  "_meta": {
    "title": "WO17 가격지도(price_map) - 화면용 production 데이터",
    "as_of": "2026-10-23",
    "input_snapshot_hash": "1cc50cabf3f2a9d29d694f61b7e54544eb65186c79cfdfb2d00e4beb4f8f57f4",
    "generated_by": "price_map_engine.py write_price_map_data_js()",
    "note": "142 엔진(computePriceValidity/pvIntegratedAction)과 완전히 독립된 산출물 - 기존 판정 로직을 전혀 안 건드림."
  },
  "tickers": {
    "AMAT": {
      "ticker": "AMAT",
      "asOf": "2026-10-23",
      "verdict": "매수",
      "action": "적극 모아가기",
      "currentPrice": 375.5799865722656,
      "fairPrice": 550.976717260274,
      "ratio": 0.6816621733851718,
      "bandAggressiveLe": 440.7813738082192,
      "bandDcaHigh": 495.8790455342466,
      "bandFairHigh": 606.0743889863014,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±58% (±40% 밖)",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "고성장형",
      "stockTypeReason": "다음 회계연도 성장률 35.7%(기준 30% 초과)",
      "candidates": {
        "historicalPer": 21.351561546325684,
        "historicalPerYearsUsed": 5,
        "historicalPerEpsBasis": "TTM EPS",
        "sectorPer": 31.43094,
        "sectorPerValidPeers": 3,
        "sectorPerEpsBasis": "NTM EPS",
        "growthPerPeg": 30.0,
        "growthPerPegEpsBasis": "NTM EPS"
      },
      "sectorPeerDisplay": {
        "basis": "forwardPE",
        "medianPer": 31.43094,
        "peers": [
          {
            "ticker": "LRCX",
            "per": 31.43094
          },
          {
            "ticker": "KLAC",
            "per": 32.665
          },
          {
            "ticker": "ASML",
            "per": 30.59394
          }
        ],
        "excluded": [],
        "note": "유효 비교군 3개 중앙값 (제외 0개)"
      },
      "epsUsedForCandidates": 18.365890575342465,
      "ttmEps": 10.72460584608587,
      "diag": {
        "epsTtmNtmRatio": 0.583941508422381,
        "candSpread": 2.5209160282139016,
        "fairAltExCappedGrowth": 403.1221432514706,
        "fairAltGapPct": -26.834994905775456,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 30.0,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "dispersionFlag": null,
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-10-20",
          "prevFairPrice": 548.5722131506849,
          "newFairPrice": 549.5699112328766,
          "changePct": 0.18187178611572857,
          "epsEffect": null,
          "perEffect": null,
          "otherEffect": 0.9976980821917323,
          "note": "기타(종목유형 변경: None -> 고성장형)"
        }
      ],
      "nextUpdateDate": "2026-11-13"
    },
    "LRCX": {
      "ticker": "LRCX",
      "asOf": "2026-10-23",
      "verdict": "매수",
      "action": "적극 모아가기",
      "currentPrice": 230.14999389648438,
      "fairPrice": 310.9639520547945,
      "ratio": 0.740117921629482,
      "bandAggressiveLe": 248.77116164383563,
      "bandDcaHigh": 279.86755684931506,
      "bandFairHigh": 342.060347260274,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±61% (±40% 밖)",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "고성장형",
      "stockTypeReason": "다음 회계연도 성장률 64.3%(기준 30% 초과)",
      "candidates": {
        "historicalPer": 23.421686011624622,
        "historicalPerYearsUsed": 5,
        "historicalPerEpsBasis": "TTM EPS",
        "sectorPer": 30.59394,
        "sectorPerValidPeers": 3,
        "sectorPerEpsBasis": "NTM EPS",
        "growthPerPeg": 30.0,
        "growthPerPegEpsBasis": "NTM EPS"
      },
      "sectorPeerDisplay": {
        "basis": "forwardPE",
        "medianPer": 30.59394,
        "peers": [
          {
            "ticker": "AMAT",
            "per": 26.12755
          },
          {
            "ticker": "KLAC",
            "per": 32.665
          },
          {
            "ticker": "ASML",
            "per": 30.59394
          }
        ],
        "excluded": [],
        "note": "유효 비교군 3개 중앙값 (제외 0개)"
      },
      "epsUsedForCandidates": 10.365465068493151,
      "ttmEps": 5.123199287148135,
      "diag": {
        "epsTtmNtmRatio": 0.494256577326241,
        "candSpread": 2.642803045719421,
        "fairAltExCappedGrowth": 218.55719072806903,
        "fairAltGapPct": -29.71622939447419,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 29.999999999999996,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "dispersionFlag": null,
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-10-20",
          "prevFairPrice": 305.36746767123293,
          "newFairPrice": 307.1821956164383,
          "changePct": 0.5942767771055354,
          "epsEffect": null,
          "perEffect": null,
          "otherEffect": 1.8147279452053908,
          "note": "기타(종목유형 변경: None -> 고성장형)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "KLAC": {
      "ticker": "KLAC",
      "asOf": "2026-10-23",
      "verdict": "매수",
      "action": "분할매수",
      "currentPrice": 147.8300018310547,
      "fairPrice": 175.44060410958903,
      "ratio": 0.8426213679628727,
      "bandAggressiveLe": 140.35248328767122,
      "bandDcaHigh": 157.89654369863013,
      "bandFairHigh": 192.98466452054794,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±49% (±40% 밖)",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "고성장형",
      "stockTypeReason": "다음 회계연도 성장률 44.6%(기준 30% 초과)",
      "candidates": {
        "historicalPer": 24.249066143849046,
        "historicalPerYearsUsed": 5,
        "historicalPerEpsBasis": "TTM EPS",
        "sectorPer": 30.59394,
        "sectorPerValidPeers": 3,
        "sectorPerEpsBasis": "NTM EPS",
        "growthPerPeg": 30.0,
        "growthPerPegEpsBasis": "NTM EPS"
      },
      "sectorPeerDisplay": {
        "basis": "forwardPE",
        "medianPer": 30.59394,
        "peers": [
          {
            "ticker": "AMAT",
            "per": 26.12755
          },
          {
            "ticker": "LRCX",
            "per": 31.43094
          },
          {
            "ticker": "ASML",
            "per": 30.59394
          }
        ],
        "excluded": [],
        "note": "유효 비교군 3개 중앙값 (제외 0개)"
      },
      "epsUsedForCandidates": 5.848020136986301,
      "ttmEps": 3.718956333296135,
      "diag": {
        "epsTtmNtmRatio": 0.6359342557278965,
        "candSpread": 1.98393835141131,
        "fairAltExCappedGrowth": 134.54759765096748,
        "fairAltGapPct": -23.308746949524707,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 29.999999999999996,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "dispersionFlag": null,
      "qualityWarnings": [],
      "recentChanges": [],
      "nextUpdateDate": "2026-10-29"
    },
    "ASML": {
      "ticker": "ASML",
      "asOf": "2026-10-23",
      "verdict": "적정",
      "action": "선별 매수",
      "currentPrice": 1560.5400390625,
      "fairPrice": 1594.4008101369861,
      "ratio": 0.978762698275613,
      "bandAggressiveLe": 1275.520648109589,
      "bandDcaHigh": 1434.9607291232876,
      "bandFairHigh": 1753.840891150685,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "EPS 품질 경고: ADR 통화환산 적용(EUR->USD); WO8-B 분류 불가(이력 부족 - 유효 4개년 <5년; 필터 없음(원본 그대로))",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "분류불가(이력부족)",
      "stockTypeReason": "유효 연간 EPS 4개년(<5년 기준) - 필터 없음(원본 그대로)",
      "candidates": {
        "historicalPer": 32.49013650866106,
        "historicalPerYearsUsed": 4,
        "historicalPerEpsBasis": "TTM EPS",
        "sectorPer": 31.43094,
        "sectorPerValidPeers": 3,
        "sectorPerEpsBasis": "NTM EPS",
        "growthPerPeg": 30.0,
        "growthPerPegEpsBasis": "NTM EPS"
      },
      "sectorPeerDisplay": {
        "basis": "forwardPE",
        "medianPer": 31.43094,
        "peers": [
          {
            "ticker": "AMAT",
            "per": 26.12755
          },
          {
            "ticker": "LRCX",
            "per": 31.43094
          },
          {
            "ticker": "KLAC",
            "per": 32.665
          }
        ],
        "excluded": [],
        "note": "유효 비교군 3개 중앙값 (제외 0개)"
      },
      "epsUsedForCandidates": 53.146693671232875,
      "ttmEps": 28.490473400064996,
      "diag": {
        "epsTtmNtmRatio": 0.5360723580719426,
        "candSpread": 1.804606093970598,
        "fairAltExCappedGrowth": 1298.0549549716943,
        "fairAltGapPct": -18.58665984620459,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": "WO8-B 분류 불가(이력 부족, 유효 4개년 <5년) - 필터 없음(원본 그대로) - 경기순환 여부 판단 안 함, NTM EPS 그대로 사용",
      "convertedFairPer": 29.999999999999996,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "dispersionFlag": null,
      "qualityWarnings": [
        "ADR 통화환산 적용(EUR->USD)",
        "WO8-B 분류 불가(이력 부족 - 유효 4개년 <5년; 필터 없음(원본 그대로))"
      ],
      "recentChanges": [],
      "nextUpdateDate": "2027-01-01"
    },
    "MU": {
      "ticker": "MU",
      "asOf": "2026-10-23",
      "verdict": "매수",
      "action": "적극 모아가기",
      "currentPrice": 856.489990234375,
      "fairPrice": 1185.700090067229,
      "ratio": 0.7223496037567242,
      "bandAggressiveLe": 948.5600720537832,
      "bandDcaHigh": 1067.1300810605062,
      "bandFairHigh": 1304.270099073952,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "EPS 품질 경고: 경기순환형(WO8-B 최종본, 39종목 적용) - 정상화 EPS 사용(과거PER 후보 포함); 경기순환형(item2)인데 비교군 정상화 EPS 유효 비교군 부족 - 업종PER 후보를 비움(forwardPE 기준으로 섞어 쓰지 않음, 원래 forwardPE 기준 업종PER 19.8764는 참고용으로만 보관) - 업종 비교 불가(정상화기준 유효 비교군 1개 <3개)",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "경기순환형",
      "stockTypeReason": "(A) EPS 30%+·매출 5%+ 동반 감소 2회(2019→2020 EPS -57%·매출 -8%, 2022→2023 EPS -169%·매출 -49%, 기준 2회 이상)",
      "candidates": {
        "historicalPer": 14.394941218632205,
        "historicalPerYearsUsed": 5,
        "historicalPerEpsBasis": "정상화 EPS",
        "sectorPer": null,
        "sectorPerValidPeers": 1,
        "sectorPerEpsBasis": null,
        "growthPerPeg": 30.0,
        "growthPerPegEpsBasis": "NTM EPS(또는 정상화 EPS)"
      },
      "sectorPeerDisplay": {
        "basis": "normalized_eps",
        "medianPer": null,
        "peers": [
          {
            "ticker": "STX",
            "per": 58.120634177658076
          }
        ],
        "excluded": [
          {
            "ticker": "SNDK",
            "reason": "정상화 EPS 산출 제한(종목 고유 5년 중앙값 PER(perMedian5Y) 미확보 - 평균 기반(avgPe3Y)은 트로프 연도 왜곡 위험이 커 대체하지 않고 산출 제한)"
          },
          {
            "ticker": "WDC",
            "reason": "정상화 EPS 산출 제한(순이익률 계산 가능 연도 1개(3개 미만) - 정상화 모델 산출 제한)"
          }
        ],
        "note": "업종 비교 불가(정상화 비교군 부족) - 업종 비교 불가(정상화기준 유효 비교군 1개 <3개)"
      },
      "epsUsedForCandidates": 53.416000000000004,
      "ttmEps": 73.97436477469512,
      "diag": {
        "epsTtmNtmRatio": 1.3848727867061388,
        "candSpread": 2.0840654744160583,
        "fairAltExCappedGrowth": 768.920180134458,
        "fairAltGapPct": -35.150533716257,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": "경기순환형(WO8-B 최종본: (A) EPS 30%+·매출 5%+ 동반 감소 2회(2019→2020 EPS -57%·매출 -8%, 2022→2023 EPS -169%·매출 -49%, 기준 2회 이상)) - NTM EPS(180.9104) 대신 정상화 EPS 53.4160(순이익률 사이클 중앙값 22% x NTM매출/주식수 242.8, 기준연수 8) 사용 - 업종PER·성장PER·과거PER 후보 전부 동일 기준 적용(item3)",
      "convertedFairPer": 22.197470609316102,
      "fairPriceBasis": "적정가 후보 2개 평균",
      "dispersionFlag": "최대/최소 2.08배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [
        "경기순환형(WO8-B 최종본, 39종목 적용) - 정상화 EPS 사용(과거PER 후보 포함)",
        "경기순환형(item2)인데 비교군 정상화 EPS 유효 비교군 부족 - 업종PER 후보를 비움(forwardPE 기준으로 섞어 쓰지 않음, 원래 forwardPE 기준 업종PER 19.8764는 참고용으로만 보관) - 업종 비교 불가(정상화기준 유효 비교군 1개 <3개)"
      ],
      "recentChanges": [],
      "nextUpdateDate": "2026-12-16"
    },
    "SNDK": {
      "ticker": "SNDK",
      "asOf": "2026-10-23",
      "verdict": "매수",
      "action": "적극 모아가기 · 모델 점검 필요(적정가/현재가 비율 0.27배)",
      "currentPrice": 1260.9300537109375,
      "fairPrice": 4592.264230922192,
      "ratio": 0.27457698213887943,
      "bandAggressiveLe": 3673.8113847377535,
      "bandDcaHigh": 4133.037807829973,
      "bandFairHigh": 5051.490654014411,
      "modelCheckNeeded": true,
      "confidence": "낮음",
      "confidenceNote": "적정가/현재가 비율이 2배 초과 또는 0.5배 미만 - 모델 점검 필요로 강제 낮음",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "분류불가(이력부족)",
      "stockTypeReason": "유효 연간 EPS 4개년(<5년 기준) - 필터 없음(원본 그대로)",
      "candidates": {
        "historicalPer": 23.657809110629067,
        "historicalPerYearsUsed": 1,
        "historicalPerEpsBasis": "TTM EPS",
        "sectorPer": 19.8764,
        "sectorPerValidPeers": 3,
        "sectorPerEpsBasis": "NTM EPS",
        "growthPerPeg": 30.0,
        "growthPerPegEpsBasis": "NTM EPS"
      },
      "sectorPeerDisplay": {
        "basis": "forwardPE",
        "medianPer": 19.8764,
        "peers": [
          {
            "ticker": "MU",
            "per": 6.52257
          },
          {
            "ticker": "WDC",
            "per": 19.8764
          },
          {
            "ticker": "STX",
            "per": 22.4542
          }
        ],
        "excluded": [],
        "note": "유효 비교군 3개 중앙값 (제외 0개)"
      },
      "epsUsedForCandidates": 231.04104520547946,
      "ttmEps": 72.3740732454161,
      "diag": {
        "epsTtmNtmRatio": 0.3132520162426085,
        "candSpread": 4.048115138847994,
        "fairAltExCappedGrowth": 3152.238120160466,
        "fairAltGapPct": -31.357649262976928,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": "WO8-B 분류 불가(이력 부족, 유효 4개년 <5년) - 필터 없음(원본 그대로) - 경기순환 여부 판단 안 함, NTM EPS 그대로 사용",
      "convertedFairPer": 19.8764,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "dispersionFlag": "최대/최소 1.51배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [
        "과거 PER 이력 부족(1년치)",
        "WO8-B 분류 불가(이력 부족 - 유효 4개년 <5년; 필터 없음(원본 그대로))"
      ],
      "recentChanges": [],
      "nextUpdateDate": "2026-10-30"
    },
    "WDC": {
      "ticker": "WDC",
      "asOf": "2026-10-23",
      "verdict": "매수",
      "action": "적극 모아가기",
      "currentPrice": 354.19000244140625,
      "fairPrice": 524.0389124760552,
      "ratio": 0.6758849276437848,
      "bandAggressiveLe": 419.2311299808442,
      "bandDcaHigh": 471.6350212284497,
      "bandFairHigh": 576.4428037236607,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "EPS 품질 경고: 과거 PER 이력 부족(1년치); WO8-B 분류 불가(이력 부족 - 유효 1개년 <5년; corporate_events.json 기업분할/분리상장(2025-02-21) 이전 회계연도 7개 제외)",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "분류불가(이력부족)",
      "stockTypeReason": "유효 연간 EPS 1개년(<5년 기준) - corporate_events.json 기업분할/분리상장(2025-02-21) 이전 회계연도 7개 제외",
      "candidates": {
        "historicalPer": 22.199341021416803,
        "historicalPerYearsUsed": 1,
        "historicalPerEpsBasis": "TTM EPS",
        "sectorPer": 8.43042,
        "sectorPerValidPeers": 3,
        "sectorPerEpsBasis": "NTM EPS",
        "growthPerPeg": 30.0,
        "growthPerPegEpsBasis": "NTM EPS"
      },
      "sectorPeerDisplay": {
        "basis": "forwardPE",
        "medianPer": 8.43042,
        "peers": [
          {
            "ticker": "MU",
            "per": 6.52257
          },
          {
            "ticker": "SNDK",
            "per": 8.43042
          },
          {
            "ticker": "STX",
            "per": 22.4542
          }
        ],
        "excluded": [],
        "note": "유효 비교군 3개 중앙값 (제외 0개)"
      },
      "epsUsedForCandidates": 24.906812602739727,
      "ttmEps": 23.606057133429722,
      "diag": {
        "epsTtmNtmRatio": 0.9477751131765884,
        "candSpread": 3.558541567324048,
        "fairAltExCappedGrowth": 367.0069017892221,
        "fairAltGapPct": -29.965715703222383,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": "WO8-B 분류 불가(이력 부족, 유효 1개년 <5년) - corporate_events.json 기업분할/분리상장(2025-02-21) 이전 회계연도 7개 제외 - 경기순환 여부 판단 안 함, NTM EPS 그대로 사용",
      "convertedFairPer": 21.03998294901899,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "dispersionFlag": "최대/최소 3.56배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [
        "과거 PER 이력 부족(1년치)",
        "WO8-B 분류 불가(이력 부족 - 유효 1개년 <5년; corporate_events.json 기업분할/분리상장(2025-02-21) 이전 회계연도 7개 제외)"
      ],
      "recentChanges": [
        {
          "date": "2026-10-20",
          "prevFairPrice": 552.2435399349906,
          "newFairPrice": 571.2312977910766,
          "changePct": 3.4382942457454893,
          "epsEffect": 0.06489033124789576,
          "perEffect": 18.922867524838065,
          "otherEffect": 0.0,
          "note": "EPS 24.4806->24.4835(적정PER 22.56배 유지 가정 시 +0.06) + 적정PER 22.56->23.33배(EPS 24.4835 유지 가정 시 +18.92)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "STX": {
      "ticker": "STX",
      "asOf": "2026-10-23",
      "verdict": "고평가",
      "action": "신규 추격 금지 · 모델 점검 필요(적정가/현재가 비율 2.28배)",
      "currentPrice": 642.1400146484375,
      "fairPrice": 281.13853493158297,
      "ratio": 2.2840697195946715,
      "bandAggressiveLe": 224.9108279452664,
      "bandDcaHigh": 253.02468143842466,
      "bandFairHigh": 309.2523884247413,
      "modelCheckNeeded": true,
      "confidence": "낮음",
      "confidenceNote": "적정가/현재가 비율이 2배 초과 또는 0.5배 미만 - 모델 점검 필요로 강제 낮음 / 사업 위험으로 신뢰도 1단계 하향(낮음→낮음): 현금흐름 거부권 발동(2/3: 부채/자본 1.65, 발행주식수 +3.9%(3개분기))",
      "bizRiskBadge": true,
      "bizRiskDetail": [
        "현금흐름 거부권(2/3: 부채/자본 1.65, 발행주식수 +3.9%(3개분기))"
      ],
      "stockType": "경기순환형",
      "stockTypeReason": "(B) EPS 30%+·매출 5%+ 동반 감소 1회(2022→2023 EPS -135%·매출 -37%) + 이익 정점 의심(NTM EPS $36.66가 과거 8년 EPS 중앙값 $6.06의 3배 초과)",
      "candidates": {
        "historicalPer": 20.892171704786744,
        "historicalPerYearsUsed": 5,
        "historicalPerEpsBasis": "정상화 EPS",
        "sectorPer": null,
        "sectorPerValidPeers": 1,
        "sectorPerEpsBasis": null,
        "growthPerPeg": 30.0,
        "growthPerPegEpsBasis": "NTM EPS(또는 정상화 EPS)"
      },
      "sectorPeerDisplay": {
        "basis": "normalized_eps",
        "medianPer": null,
        "peers": [
          {
            "ticker": "MU",
            "per": 16.034334099041015
          }
        ],
        "excluded": [
          {
            "ticker": "SNDK",
            "reason": "정상화 EPS 산출 제한(종목 고유 5년 중앙값 PER(perMedian5Y) 미확보 - 평균 기반(avgPe3Y)은 트로프 연도 왜곡 위험이 커 대체하지 않고 산출 제한)"
          },
          {
            "ticker": "WDC",
            "reason": "정상화 EPS 산출 제한(순이익률 계산 가능 연도 1개(3개 미만) - 정상화 모델 산출 제한)"
          }
        ],
        "note": "업종 비교 불가(정상화 비교군 부족) - 업종 비교 불가(정상화기준 유효 비교군 1개 <3개)"
      },
      "epsUsedForCandidates": 11.0484,
      "ttmEps": 14.002180868914904,
      "diag": {
        "epsTtmNtmRatio": 1.2673491970706077,
        "candSpread": 1.4359445453498019,
        "fairAltExCappedGrowth": 230.82506986316588,
        "fairAltGapPct": -17.896324700084687,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": "경기순환형(WO8-B 최종본: (B) EPS 30%+·매출 5%+ 동반 감소 1회(2022→2023 EPS -135%·매출 -37%) + 이익 정점 의심(NTM EPS $36.66가 과거 8년 EPS 중앙값 $6.06의 3배 초과)) - NTM EPS(43.2089) 대신 정상화 EPS 11.0484(순이익률 사이클 중앙값 13.2% x NTM매출/주식수 83.7, 기준연수 8) 사용 - 업종PER·성장PER·과거PER 후보 전부 동일 기준 적용(item3)",
      "convertedFairPer": 25.446085852393374,
      "fairPriceBasis": "적정가 후보 2개 평균",
      "dispersionFlag": null,
      "qualityWarnings": [
        "경기순환형(WO8-B 최종본, 39종목 적용) - 정상화 EPS 사용(과거PER 후보 포함)",
        "경기순환형(item2)인데 비교군 정상화 EPS 유효 비교군 부족 - 업종PER 후보를 비움(forwardPE 기준으로 섞어 쓰지 않음, 원래 forwardPE 기준 업종PER 8.43042는 참고용으로만 보관) - 업종 비교 불가(정상화기준 유효 비교군 1개 <3개)",
        "⚠ 사업 경고(현금흐름/EPS 하향): 현금흐름 거부권 발동(2/3: 부채/자본 1.65, 발행주식수 +3.9%(3개분기))"
      ],
      "recentChanges": [],
      "nextUpdateDate": "2026-10-28"
    },
    "NVDA": {
      "ticker": "NVDA",
      "asOf": "2026-10-23",
      "verdict": "매수",
      "action": "분할매수",
      "currentPrice": 212.2100067138672,
      "fairPrice": 248.51900462897802,
      "ratio": 0.8538985057930772,
      "bandAggressiveLe": 198.81520370318242,
      "bandDcaHigh": 223.66710416608024,
      "bandFairHigh": 273.37090509187584,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "EPS 품질 경고: 경기순환형(WO8-B 최종본, 39종목 적용) - 정상화 EPS 사용(과거PER 후보 포함); 경기순환형(item2)인데 비교군 정상화 EPS 유효 비교군 부족 - 업종PER 후보를 비움(forwardPE 기준으로 섞어 쓰지 않음, 원래 forwardPE 기준 업종PER 44.98982는 참고용으로만 보관) - 업종 비교 불가(정상화기준 유효 비교군 1개 <3개)",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "경기순환형",
      "stockTypeReason": "(B) EPS 30%+·매출 5%+ 동반 감소 1회(2019→2020 EPS -32%·매출 -7%) + 이익 정점 의심(NTM EPS $9.31가 과거 8년 EPS 중앙값 $0.28의 3배 초과)",
      "candidates": {
        "historicalPer": 51.28655313443737,
        "historicalPerYearsUsed": 5,
        "historicalPerEpsBasis": "정상화 EPS",
        "sectorPer": null,
        "sectorPerValidPeers": 1,
        "sectorPerEpsBasis": null,
        "growthPerPeg": 30.0,
        "growthPerPegEpsBasis": "NTM EPS(또는 정상화 EPS)"
      },
      "sectorPeerDisplay": {
        "basis": "normalized_eps",
        "medianPer": null,
        "peers": [
          {
            "ticker": "AVGO",
            "per": 50.91034937226343
          }
        ],
        "excluded": [
          {
            "ticker": "AMD",
            "reason": "정상화기준 PER 271.2배 >80배 제외"
          },
          {
            "ticker": "MRVL",
            "reason": "정상화 EPS 산출 제한(사이클 중앙 순이익률(-9.3%)이 0 이하 - 정상화 모델 산출 제한)"
          }
        ],
        "note": "업종 비교 불가(정상화 비교군 부족) - 업종 비교 불가(정상화기준 유효 비교군 1개 <3개)"
      },
      "epsUsedForCandidates": 6.114639999999999,
      "ttmEps": 7.651370897817089,
      "diag": {
        "epsTtmNtmRatio": 1.2513199301703928,
        "candSpread": 1.7095517711479125,
        "fairAltExCappedGrowth": 313.5988092579561,
        "fairAltGapPct": 26.187053471479093,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": "경기순환형(WO8-B 최종본: (B) EPS 30%+·매출 5%+ 동반 감소 1회(2019→2020 EPS -32%·매출 -7%) + 이익 정점 의심(NTM EPS $9.31가 과거 8년 EPS 중앙값 $0.28의 3배 초과)) - NTM EPS(14.1058) 대신 정상화 EPS 6.1146(순이익률 사이클 중앙값 35.8% x NTM매출/주식수 17.08, 기준연수 8) 사용 - 업종PER·성장PER·과거PER 후보 전부 동일 기준 적용(item3)",
      "convertedFairPer": 40.643276567218685,
      "fairPriceBasis": "적정가 후보 2개 평균",
      "dispersionFlag": "최대/최소 1.71배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [
        "경기순환형(WO8-B 최종본, 39종목 적용) - 정상화 EPS 사용(과거PER 후보 포함)",
        "경기순환형(item2)인데 비교군 정상화 EPS 유효 비교군 부족 - 업종PER 후보를 비움(forwardPE 기준으로 섞어 쓰지 않음, 원래 forwardPE 기준 업종PER 44.98982는 참고용으로만 보관) - 업종 비교 불가(정상화기준 유효 비교군 1개 <3개)"
      ],
      "recentChanges": [],
      "nextUpdateDate": "2026-11-18"
    },
    "AMD": {
      "ticker": "AMD",
      "asOf": "2026-10-23",
      "verdict": "고평가",
      "action": "신규 추격 금지",
      "currentPrice": 507.92999267578125,
      "fairPrice": 270.20854146755175,
      "ratio": 1.8797703059907767,
      "bandAggressiveLe": 216.16683317404141,
      "bandDcaHigh": 243.18768732079658,
      "bandFairHigh": 297.22939561430695,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±58% (±40% 밖)",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "기타",
      "stockTypeReason": "경기순환형·이익훼손형·고성장형 조건 모두 미해당",
      "candidates": {
        "historicalPer": 56.86381299208111,
        "historicalPerYearsUsed": 3,
        "historicalPerEpsBasis": "TTM EPS",
        "sectorPer": 19.00524,
        "sectorPerValidPeers": 3,
        "sectorPerEpsBasis": "NTM EPS",
        "growthPerPeg": 30.0,
        "growthPerPegEpsBasis": "NTM EPS"
      },
      "sectorPeerDisplay": {
        "basis": "forwardPE",
        "medianPer": 19.00524,
        "peers": [
          {
            "ticker": "NVDA",
            "per": 17.02191
          },
          {
            "ticker": "AVGO",
            "per": 19.00524
          },
          {
            "ticker": "MRVL",
            "per": 44.98982
          }
        ],
        "excluded": [],
        "note": "유효 비교군 3개 중앙값 (제외 0개)"
      },
      "epsUsedForCandidates": 14.21758112328767,
      "ttmEps": 3.9753804930290646,
      "diag": {
        "epsTtmNtmRatio": 0.2796101853442281,
        "candSpread": 1.8868279002630333,
        "fairAltExCappedGrowth": 248.13191719776182,
        "fairAltGapPct": -8.17021702936842,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 19.005239999999997,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "dispersionFlag": "최대/최소 2.99배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-10-20",
          "prevFairPrice": 268.80957147875836,
          "newFairPrice": 268.9186750943376,
          "changePct": 0.04058769744656835,
          "epsEffect": 0.10910361557919147,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 14.1440->14.1497(적정PER 19.01배 유지 가정 시 +0.11) + 적정PER 19.01->19.01배(EPS 14.1497 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2026-11-04"
    },
    "AVGO": {
      "ticker": "AVGO",
      "asOf": "2026-10-23",
      "verdict": "매수",
      "action": "적극 모아가기",
      "currentPrice": 323.239990234375,
      "fairPrice": 576.8198556164383,
      "ratio": 0.560382911730619,
      "bandAggressiveLe": 461.4558844931507,
      "bandDcaHigh": 519.1378700547945,
      "bandFairHigh": 634.5018411780821,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±51% (±40% 밖) / 사업 위험으로 신뢰도 1단계 하향(낮음→낮음): EPS 하향 수정이 상향보다 많음(방향은 보합)",
      "bizRiskBadge": true,
      "bizRiskDetail": [
        "EPS 하향 수정이 상향보다 많음(방향은 보합)"
      ],
      "stockType": "기타",
      "stockTypeReason": "경기순환형·이익훼손형·고성장형 조건 모두 미해당",
      "candidates": {
        "historicalPer": 35.44466654459635,
        "historicalPerYearsUsed": 5,
        "historicalPerEpsBasis": "TTM EPS",
        "sectorPer": 44.98982,
        "sectorPerValidPeers": 3,
        "sectorPerEpsBasis": "NTM EPS",
        "growthPerPeg": 30.0,
        "growthPerPegEpsBasis": "NTM EPS"
      },
      "sectorPeerDisplay": {
        "basis": "forwardPE",
        "medianPer": 44.98982,
        "peers": [
          {
            "ticker": "NVDA",
            "per": 17.02191
          },
          {
            "ticker": "AMD",
            "per": 46.1861
          },
          {
            "ticker": "MRVL",
            "per": 44.98982
          }
        ],
        "excluded": [],
        "note": "유효 비교군 3개 중앙값 (제외 0개)"
      },
      "epsUsedForCandidates": 19.227328520547943,
      "ttmEps": 7.975326677384036,
      "diag": {
        "epsTtmNtmRatio": 0.41479120039276024,
        "candSpread": 3.060087368416601,
        "fairAltExCappedGrowth": 573.8584219422095,
        "fairAltGapPct": -0.5134070274096181,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 30.0,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "dispersionFlag": null,
      "qualityWarnings": [
        "⚠ 사업 경고(현금흐름/EPS 하향): EPS 하향 수정이 상향보다 많음(방향은 보합)"
      ],
      "recentChanges": [],
      "nextUpdateDate": "2026-12-10"
    },
    "MRVL": {
      "ticker": "MRVL",
      "asOf": "2026-10-23",
      "verdict": "고평가",
      "action": "신규 추격 금지",
      "currentPrice": 223.47000122070312,
      "fairPrice": 123.10295867381917,
      "ratio": 1.8153097507008127,
      "bandAggressiveLe": 98.48236693905534,
      "bandDcaHigh": 110.79266280643726,
      "bandFairHigh": 135.4132545412011,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "EPS 품질 경고: 과거 PER 이력 부족(1년치)",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "기타",
      "stockTypeReason": "경기순환형·이익훼손형·고성장형 조건 모두 미해당",
      "candidates": {
        "historicalPer": 10.273504664755276,
        "historicalPerYearsUsed": 1,
        "historicalPerEpsBasis": "TTM EPS",
        "sectorPer": 19.00524,
        "sectorPerValidPeers": 3,
        "sectorPerEpsBasis": "NTM EPS",
        "growthPerPeg": 30.0,
        "growthPerPegEpsBasis": "NTM EPS"
      },
      "sectorPeerDisplay": {
        "basis": "forwardPE",
        "medianPer": 19.00524,
        "peers": [
          {
            "ticker": "NVDA",
            "per": 17.02191
          },
          {
            "ticker": "AMD",
            "per": 46.1861
          },
          {
            "ticker": "AVGO",
            "per": 19.00524
          }
        ],
        "excluded": [],
        "note": "유효 비교군 3개 중앙값 (제외 0개)"
      },
      "epsUsedForCandidates": 6.477316712328767,
      "ttmEps": 3.010491674848891,
      "diag": {
        "epsTtmNtmRatio": 0.4647745059491679,
        "candSpread": 6.282902704201578,
        "fairAltExCappedGrowth": 77.01562946929309,
        "fairAltGapPct": -37.43803536569887,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 19.00524,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "dispersionFlag": "최대/최소 2.92배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [
        "과거 PER 이력 부족(1년치)"
      ],
      "recentChanges": [
        {
          "date": "2026-10-20",
          "prevFairPrice": 122.17007110801971,
          "newFairPrice": 122.61734250894575,
          "changePct": 0.3661055419461738,
          "epsEffect": null,
          "perEffect": null,
          "otherEffect": 0.44727140092604145,
          "note": "기타(종목유형 변경: None -> 기타)"
        }
      ],
      "nextUpdateDate": "2026-12-01"
    },
    "TSM": {
      "ticker": "TSM",
      "asOf": "2026-10-23",
      "verdict": "매수",
      "action": "적극 모아가기",
      "currentPrice": 412.3500061035156,
      "fairPrice": 525.048440202726,
      "ratio": 0.785356120559664,
      "bandAggressiveLe": 420.03875216218086,
      "bandDcaHigh": 472.5435961824535,
      "bandFairHigh": 577.5532842229987,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "EPS 품질 경고: ADR 통화환산 적용(TWD->USD); WO8-B 분류 불가(이력 부족 - 유효 4개년 <5년; 필터 없음(원본 그대로))",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "분류불가(이력부족)",
      "stockTypeReason": "유효 연간 EPS 4개년(<5년 기준) - 필터 없음(원본 그대로)",
      "candidates": {
        "historicalPer": 24.691373935371374,
        "historicalPerYearsUsed": 4,
        "historicalPerEpsBasis": "TTM EPS",
        "sectorPer": 23.57275,
        "sectorPerValidPeers": 3,
        "sectorPerEpsBasis": "NTM EPS",
        "growthPerPeg": 30.0,
        "growthPerPegEpsBasis": "NTM EPS"
      },
      "sectorPeerDisplay": {
        "basis": "forwardPE",
        "medianPer": 23.57275,
        "peers": [
          {
            "ticker": "INTC",
            "per": 63.01586
          },
          {
            "ticker": "UMC",
            "per": 23.57275
          },
          {
            "ticker": "GFS",
            "per": 20.04289
          }
        ],
        "excluded": [],
        "note": "유효 비교군 3개 중앙값 (제외 0개)"
      },
      "epsUsedForCandidates": 22.273533643835616,
      "ttmEps": 16.74103089604263,
      "diag": {
        "epsTtmNtmRatio": 0.7516109102282407,
        "candSpread": 1.6165268499186107,
        "fairAltExCappedGrowth": 469.20374706025996,
        "fairAltGapPct": -10.636103046207312,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": "WO8-B 분류 불가(이력 부족, 유효 4개년 <5년) - 필터 없음(원본 그대로) - 경기순환 여부 판단 안 함, NTM EPS 그대로 사용",
      "convertedFairPer": 23.572750000000003,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "dispersionFlag": null,
      "qualityWarnings": [
        "ADR 통화환산 적용(TWD->USD)",
        "WO8-B 분류 불가(이력 부족 - 유효 4개년 <5년; 필터 없음(원본 그대로))"
      ],
      "recentChanges": [
        {
          "date": "2026-10-20",
          "prevFairPrice": 382.71489496234824,
          "newFairPrice": 383.69802775612203,
          "changePct": 0.2568838596863371,
          "epsEffect": 0.0,
          "perEffect": 0.9831327937738022,
          "otherEffect": 0.0,
          "note": "EPS 22.2252->22.2252(적정PER 17.22배 유지 가정 시 +0.00) + 적정PER 17.22->17.26배(EPS 22.2252 유지 가정 시 +0.98)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "INTC": {
      "ticker": "INTC",
      "asOf": "2026-10-23",
      "verdict": "고평가",
      "action": "신규 추격 금지",
      "currentPrice": 85.48999786376953,
      "fairPrice": 61.68590786198535,
      "ratio": 1.3858918645575082,
      "bandAggressiveLe": 49.348726289588285,
      "bandDcaHigh": 55.51731707578681,
      "bandFairHigh": 67.85449864818389,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "EPS 품질 경고: EPS 일회성 정상화 적용; TTM EPS 미확보(peTTM 없음) - 과거PER 후보가 적정가에 못 들어감",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "이익훼손형",
      "stockTypeReason": "TTM EPS $-2.11(적자)",
      "candidates": {
        "historicalPer": 11.656726240621182,
        "historicalPerYearsUsed": 4,
        "historicalPerEpsBasis": null,
        "sectorPer": 20.04289,
        "sectorPerValidPeers": 3,
        "sectorPerEpsBasis": "NTM EPS",
        "growthPerPeg": 30.0,
        "growthPerPegEpsBasis": "NTM EPS"
      },
      "sectorPeerDisplay": {
        "basis": "forwardPE",
        "medianPer": 20.04289,
        "peers": [
          {
            "ticker": "TSM",
            "per": 18.88111
          },
          {
            "ticker": "UMC",
            "per": 23.57275
          },
          {
            "ticker": "GFS",
            "per": 20.04289
          }
        ],
        "excluded": [],
        "note": "유효 비교군 3개 중앙값 (제외 0개)"
      },
      "epsUsedForCandidates": 2.4653215616438358,
      "ttmEps": null,
      "diag": {
        "epsTtmNtmRatio": null,
        "candSpread": 1.4967901335585836,
        "fairAltExCappedGrowth": 49.41216887465562,
        "fairAltGapPct": -19.897152222823266,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 25.021445,
      "fairPriceBasis": "적정가 후보 2개 평균",
      "dispersionFlag": "최대/최소 2.57배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [
        "EPS 일회성 정상화 적용",
        "TTM EPS 미확보(peTTM 없음) - 과거PER 후보가 적정가에 못 들어감"
      ],
      "recentChanges": [
        {
          "date": "2026-10-20",
          "prevFairPrice": 74.23218328767123,
          "newFairPrice": 74.42009671232877,
          "changePct": 0.25314279647322047,
          "epsEffect": null,
          "perEffect": null,
          "otherEffect": 0.18791342465753758,
          "note": "기타(종목유형 변경: 기타 -> 이익훼손형)"
        }
      ],
      "nextUpdateDate": "2026-10-30"
    },
    "QCOM": {
      "ticker": "QCOM",
      "asOf": "2026-10-23",
      "verdict": "고평가",
      "action": "신규 추격 금지",
      "currentPrice": 172.8300018310547,
      "fairPrice": 111.17557910489137,
      "ratio": 1.5545680375363182,
      "bandAggressiveLe": 88.9404632839131,
      "bandDcaHigh": 100.05802119440223,
      "bandFairHigh": 122.29313701538051,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±31% / 사업 위험으로 신뢰도 1단계 하향(보통→낮음): EPS 수정 방향 하향(하향)",
      "bizRiskBadge": true,
      "bizRiskDetail": [
        "EPS 수정 방향 하향(하향)"
      ],
      "stockType": "기타",
      "stockTypeReason": "경기순환형·이익훼손형·고성장형 조건 모두 미해당",
      "candidates": {
        "historicalPer": 17.011436452708068,
        "historicalPerYearsUsed": 5,
        "historicalPerEpsBasis": "TTM EPS",
        "sectorPer": null,
        "sectorPerValidPeers": 2,
        "sectorPerEpsBasis": null,
        "growthPerPeg": 7.5,
        "growthPerPegEpsBasis": "NTM EPS"
      },
      "sectorPeerDisplay": {
        "basis": "forwardPE",
        "medianPer": null,
        "peers": [
          {
            "ticker": "SWKS",
            "per": 17.86756
          },
          {
            "ticker": "QRVO",
            "per": 15.2291
          }
        ],
        "excluded": [
          {
            "ticker": "ARM",
            "reason": "NTM PER 127.2배 >80배 제외"
          }
        ],
        "note": "유효 비교군 2개 이하(최소 3개 기준 미달)"
      },
      "epsUsedForCandidates": 10.19254,
      "ttmEps": 8.57700104370408,
      "diag": {
        "epsTtmNtmRatio": 0.841497903731953,
        "candSpread": 1.908678415256423,
        "fairAltExCappedGrowth": null,
        "fairAltGapPct": null,
        "fairAltApplicable": false,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 10.907544057211586,
      "fairPriceBasis": "적정가 후보 2개 평균",
      "dispersionFlag": "최대/최소 2.27배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [
        "⚠ 사업 경고(현금흐름/EPS 하향): EPS 수정 방향 하향(하향)"
      ],
      "recentChanges": [
        {
          "date": "2026-10-20",
          "prevFairPrice": 112.57296791244363,
          "newFairPrice": 111.42683890013078,
          "changePct": -1.0181209872731478,
          "epsEffect": 0.0,
          "perEffect": -1.1461290123128576,
          "otherEffect": 0.0,
          "note": "EPS 10.1902->10.1902(적정PER 11.05배 유지 가정 시 +0.00) + 적정PER 11.05->10.93배(EPS 10.1902 유지 가정 시 -1.15)"
        }
      ],
      "nextUpdateDate": "2026-11-05"
    },
    "ARM": {
      "ticker": "ARM",
      "asOf": "2026-10-23",
      "verdict": "고평가",
      "action": "신규 추격 금지 · 모델 점검 필요(적정가/현재가 비율 2.59배)",
      "currentPrice": 210.10000610351562,
      "fairPrice": 81.05618712328766,
      "ratio": 2.592029227626392,
      "bandAggressiveLe": 64.84494969863013,
      "bandDcaHigh": 72.9505684109589,
      "bandFairHigh": 89.16180583561643,
      "modelCheckNeeded": true,
      "confidence": "낮음",
      "confidenceNote": "적정가/현재가 비율이 2배 초과 또는 0.5배 미만 - 모델 점검 필요로 강제 낮음",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "분류불가(이력부족)",
      "stockTypeReason": "유효 연간 EPS 4개년(<5년 기준) - 필터 없음(원본 그대로)",
      "candidates": {
        "historicalPer": null,
        "historicalPerYearsUsed": 0,
        "historicalPerEpsBasis": null,
        "sectorPer": null,
        "sectorPerValidPeers": 2,
        "sectorPerEpsBasis": null,
        "growthPerPeg": 30.0,
        "growthPerPegEpsBasis": "NTM EPS"
      },
      "sectorPeerDisplay": {
        "basis": "forwardPE",
        "medianPer": null,
        "peers": [
          {
            "ticker": "CDNS",
            "per": 33.18013
          },
          {
            "ticker": "SNPS",
            "per": 23.51047
          }
        ],
        "excluded": [],
        "note": "유효 비교군 2개 이하(최소 3개 기준 미달)"
      },
      "epsUsedForCandidates": 2.701872904109589,
      "ttmEps": 0.9063887510451538,
      "diag": {
        "epsTtmNtmRatio": 0.33546683475248706,
        "candSpread": null,
        "fairAltExCappedGrowth": null,
        "fairAltGapPct": null,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": "WO8-B 분류 불가(이력 부족, 유효 4개년 <5년) - 필터 없음(원본 그대로) - 경기순환 여부 판단 안 함, NTM EPS 그대로 사용",
      "convertedFairPer": 29.999999999999996,
      "fairPriceBasis": "적정가 후보 1개(growth_per_peg)만 사용",
      "dispersionFlag": null,
      "qualityWarnings": [
        "과거 PER 이력 부족(0년치)",
        "WO8-B 분류 불가(이력 부족 - 유효 4개년 <5년; 필터 없음(원본 그대로))"
      ],
      "recentChanges": [],
      "nextUpdateDate": "2026-11-06"
    },
    "ANET": {
      "ticker": "ANET",
      "asOf": "2026-10-23",
      "verdict": "고평가",
      "action": "신규 추격 금지",
      "currentPrice": 171.07000732421875,
      "fairPrice": 146.1042640970139,
      "ratio": 1.1708762121455092,
      "bandAggressiveLe": 116.88341127761112,
      "bandDcaHigh": 131.49383768731252,
      "bandFairHigh": 160.7146905067153,
      "modelCheckNeeded": false,
      "confidence": "높음",
      "confidenceNote": "적정가 후보 모두 중앙값 ±3% 안",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "고성장형",
      "stockTypeReason": "NTM PER 41.6배(기준 40 초과); 다음 회계연도 성장률 38.1%(기준 30% 초과)",
      "candidates": {
        "historicalPer": 47.64727228338068,
        "historicalPerYearsUsed": 5,
        "historicalPerEpsBasis": "TTM EPS",
        "sectorPer": null,
        "sectorPerValidPeers": 2,
        "sectorPerEpsBasis": null,
        "growthPerPeg": 30.0,
        "growthPerPegEpsBasis": "NTM EPS"
      },
      "sectorPeerDisplay": {
        "basis": "forwardPE",
        "medianPer": null,
        "peers": [
          {
            "ticker": "CSCO",
            "per": 20.50504
          },
          {
            "ticker": "CIEN",
            "per": 45.02755607161647
          }
        ],
        "excluded": [],
        "note": "유효 비교군 2개 이하(최소 3개 기준 미달)"
      },
      "epsUsedForCandidates": 5.013370493150685,
      "ttmEps": 2.9761916391795116,
      "diag": {
        "epsTtmNtmRatio": 0.5936508469193755,
        "candSpread": 1.0606012139210428,
        "fairAltExCappedGrowth": 141.80741339950725,
        "fairAltGapPct": -2.940948181124625,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 29.142921772213516,
      "fairPriceBasis": "적정가 후보 2개 평균",
      "dispersionFlag": "최대/최소 1.59배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-10-20",
          "prevFairPrice": 154.0410832600653,
          "newFairPrice": 153.28131938704638,
          "changePct": -0.49322158539759664,
          "epsEffect": null,
          "perEffect": null,
          "otherEffect": -0.759763873018926,
          "note": "기타(종목유형 변경: 기타 -> 고성장형)"
        }
      ],
      "nextUpdateDate": "2026-11-04"
    },
    "ETN": {
      "ticker": "ETN",
      "asOf": "2026-10-23",
      "verdict": "고평가",
      "action": "신규 추격 금지",
      "currentPrice": 368.989990234375,
      "fairPrice": 327.3791522949345,
      "ratio": 1.1271028947559663,
      "bandAggressiveLe": 261.9033218359476,
      "bandDcaHigh": 294.64123706544103,
      "bandFairHigh": 360.11706752442797,
      "modelCheckNeeded": false,
      "confidence": "높음",
      "confidenceNote": "적정가 후보 모두 중앙값 ±18% 안",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "기타",
      "stockTypeReason": "경기순환형·이익훼손형·고성장형 조건 모두 미해당",
      "candidates": {
        "historicalPer": 30.479426771830145,
        "historicalPerYearsUsed": 5,
        "historicalPerEpsBasis": "TTM EPS",
        "sectorPer": 20.73801,
        "sectorPerValidPeers": 3,
        "sectorPerEpsBasis": "NTM EPS",
        "growthPerPeg": 24.375,
        "growthPerPegEpsBasis": "NTM EPS"
      },
      "sectorPeerDisplay": {
        "basis": "forwardPE",
        "medianPer": 20.73801,
        "peers": [
          {
            "ticker": "HUBB",
            "per": 20.73801
          },
          {
            "ticker": "VRT",
            "per": 28.30812
          },
          {
            "ticker": "MOD",
            "per": 18.879330115499542
          }
        ],
        "excluded": [],
        "note": "유효 비교군 3개 중앙값 (제외 0개)"
      },
      "epsUsedForCandidates": 15.786430438356163,
      "ttmEps": 9.769419305700438,
      "diag": {
        "epsTtmNtmRatio": 0.6188491656710284,
        "candSpread": 1.292269277976296,
        "fairAltExCappedGrowth": null,
        "fairAltGapPct": null,
        "fairAltApplicable": false,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 20.73801,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "dispersionFlag": null,
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-10-20",
          "prevFairPrice": 326.7328672696479,
          "newFairPrice": 328.90963748122084,
          "changePct": 0.666223214628875,
          "epsEffect": null,
          "perEffect": null,
          "otherEffect": 2.1767702115729435,
          "note": "기타(종목유형 변경: None -> 기타)"
        }
      ],
      "nextUpdateDate": "2026-11-04"
    },
    "HUBB": {
      "ticker": "HUBB",
      "asOf": "2026-10-23",
      "verdict": "적정",
      "action": "선별 매수",
      "currentPrice": 445.79998779296875,
      "fairPrice": 461.1784783328894,
      "ratio": 0.9666539284410837,
      "bandAggressiveLe": 368.9427826663116,
      "bandDcaHigh": 415.0606304996005,
      "bandFairHigh": 507.2963261661784,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±39% / 사업 위험으로 신뢰도 1단계 하향(보통→낮음): EPS 하향 수정이 상향보다 많음(방향은 혼조)",
      "bizRiskBadge": true,
      "bizRiskDetail": [
        "EPS 하향 수정이 상향보다 많음(방향은 혼조)"
      ],
      "stockType": "기타",
      "stockTypeReason": "경기순환형·이익훼손형·고성장형 조건 모두 미해당",
      "candidates": {
        "historicalPer": 26.85066416877645,
        "historicalPerYearsUsed": 5,
        "historicalPerEpsBasis": "TTM EPS",
        "sectorPer": 28.30812,
        "sectorPerValidPeers": 3,
        "sectorPerEpsBasis": "NTM EPS",
        "growthPerPeg": 18.7500003,
        "growthPerPegEpsBasis": "NTM EPS"
      },
      "sectorPeerDisplay": {
        "basis": "forwardPE",
        "medianPer": 28.30812,
        "peers": [
          {
            "ticker": "ETN",
            "per": 28.83915
          },
          {
            "ticker": "VRT",
            "per": 28.30812
          },
          {
            "ticker": "MOD",
            "per": 18.879330115499542
          }
        ],
        "excluded": [],
        "note": "유효 비교군 3개 중앙값 (제외 0개)"
      },
      "epsUsedForCandidates": 22.56794402739726,
      "ttmEps": 17.17568233821103,
      "diag": {
        "epsTtmNtmRatio": 0.7610654438596587,
        "candSpread": 1.5097663758437379,
        "fairAltExCappedGrowth": null,
        "fairAltGapPct": null,
        "fairAltApplicable": false,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 20.435112643536485,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "dispersionFlag": "최대/최소 1.51배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [
        "⚠ 사업 경고(현금흐름/EPS 하향): EPS 하향 수정이 상향보다 많음(방향은 혼조)"
      ],
      "recentChanges": [
        {
          "date": "2026-10-20",
          "prevFairPrice": 462.1619844540957,
          "newFairPrice": 451.8675605057078,
          "changePct": -2.2274493131553585,
          "epsEffect": null,
          "perEffect": null,
          "otherEffect": -10.29442394838793,
          "note": "기타(종목유형 변경: None -> 기타)"
        }
      ],
      "nextUpdateDate": "2026-10-28"
    },
    "VRT": {
      "ticker": "VRT",
      "asOf": "2026-10-23",
      "verdict": "적정",
      "action": "선별 매수",
      "currentPrice": 195.58999633789062,
      "fairPrice": 213.85593013328892,
      "ratio": 0.9145876675759528,
      "bandAggressiveLe": 171.08474410663115,
      "bandDcaHigh": 192.47033711996002,
      "bandFairHigh": 235.24152314661782,
      "modelCheckNeeded": false,
      "confidence": "보통",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±22%",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "고성장형",
      "stockTypeReason": "다음 회계연도 성장률 60.3%(기준 30% 초과)",
      "candidates": {
        "historicalPer": 47.510262318720216,
        "historicalPerYearsUsed": 3,
        "historicalPerEpsBasis": "TTM EPS",
        "sectorPer": 20.73801,
        "sectorPerValidPeers": 3,
        "sectorPerEpsBasis": "NTM EPS",
        "growthPerPeg": 30.0,
        "growthPerPegEpsBasis": "NTM EPS"
      },
      "sectorPeerDisplay": {
        "basis": "forwardPE",
        "medianPer": 20.73801,
        "peers": [
          {
            "ticker": "ETN",
            "per": 28.83915
          },
          {
            "ticker": "HUBB",
            "per": 20.73801
          },
          {
            "ticker": "MOD",
            "per": 18.879330115499542
          }
        ],
        "excluded": [],
        "note": "유효 비교군 3개 중앙값 (제외 0개)"
      },
      "epsUsedForCandidates": 8.72937084931507,
      "ttmEps": 4.501257616694413,
      "diag": {
        "epsTtmNtmRatio": 0.5156451357599952,
        "candSpread": 1.4466190343239298,
        "fairAltExCappedGrowth": 197.44285505004666,
        "fairAltGapPct": -7.674828129859468,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 24.498435663329467,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "dispersionFlag": "최대/최소 2.29배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-10-20",
          "prevFairPrice": 213.3891917388777,
          "newFairPrice": 210.77980863473834,
          "changePct": -1.2228281492965423,
          "epsEffect": null,
          "perEffect": null,
          "otherEffect": -2.6093831041393685,
          "note": "기타(종목유형 변경: 기타 -> 고성장형)"
        }
      ],
      "nextUpdateDate": "2026-10-29"
    },
    "MOD": {
      "ticker": "MOD",
      "asOf": "2026-10-23",
      "verdict": "매수",
      "action": "적극 모아가기",
      "currentPrice": 135.1699981689453,
      "fairPrice": 252.79118004969862,
      "ratio": 0.5347101039774053,
      "bandAggressiveLe": 202.2329440397589,
      "bandDcaHigh": 227.51206204472876,
      "bandFairHigh": 278.0702980546685,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "EPS 품질 경고: 과거 PER 이력 부족(0년치); WO8-B 분류 불가(이력 부족 - 유효 0개년 <5년; corporate_events.json 기업분할/분리상장(2026-10-01) 이전 회계연도 8개 제외)",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "분류불가(이력부족)",
      "stockTypeReason": "유효 연간 EPS 0개년(<5년 기준) - corporate_events.json 기업분할/분리상장(2026-10-01) 이전 회계연도 8개 제외",
      "candidates": {
        "historicalPer": null,
        "historicalPerYearsUsed": 0,
        "historicalPerEpsBasis": null,
        "sectorPer": 28.30812,
        "sectorPerValidPeers": 3,
        "sectorPerEpsBasis": "NTM EPS",
        "growthPerPeg": 30.0,
        "growthPerPegEpsBasis": "NTM EPS"
      },
      "sectorPeerDisplay": {
        "basis": "forwardPE",
        "medianPer": 28.30812,
        "peers": [
          {
            "ticker": "ETN",
            "per": 28.83915
          },
          {
            "ticker": "HUBB",
            "per": 20.73801
          },
          {
            "ticker": "VRT",
            "per": 28.30812
          }
        ],
        "excluded": [],
        "note": "유효 비교군 3개 중앙값 (제외 0개)"
      },
      "epsUsedForCandidates": 8.67087397260274,
      "ttmEps": 2.693546968567885,
      "diag": {
        "epsTtmNtmRatio": 0.31064307670468444,
        "candSpread": 1.0597665970046757,
        "fairAltExCappedGrowth": 245.45614092131507,
        "fairAltGapPct": -2.90161987730011,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": "WO8-B 분류 불가(이력 부족, 유효 0개년 <5년) - corporate_events.json 기업분할/분리상장(2026-10-01) 이전 회계연도 8개 제외 - 경기순환 여부 판단 안 함, NTM EPS 그대로 사용",
      "convertedFairPer": 29.154059999999998,
      "fairPriceBasis": "적정가 후보 2개 평균",
      "dispersionFlag": null,
      "qualityWarnings": [
        "과거 PER 이력 부족(0년치)",
        "WO8-B 분류 불가(이력 부족 - 유효 0개년 <5년; corporate_events.json 기업분할/분리상장(2026-10-01) 이전 회계연도 8개 제외)"
      ],
      "recentChanges": [],
      "nextUpdateDate": "2026-11-04"
    },
    "PWR": {
      "ticker": "PWR",
      "asOf": "2026-10-23",
      "verdict": "고평가",
      "action": "신규 추격 금지",
      "currentPrice": 552.4400024414062,
      "fairPrice": 406.01716605198897,
      "ratio": 1.3606321324125208,
      "bandAggressiveLe": 324.8137328415912,
      "bandDcaHigh": 365.4154494467901,
      "bandFairHigh": 446.6188826571879,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±43% (±40% 밖)",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "고성장형",
      "stockTypeReason": "다음 회계연도 성장률 55.8%(기준 30% 초과)",
      "candidates": {
        "historicalPer": 43.16000061035156,
        "historicalPerYearsUsed": 5,
        "historicalPerEpsBasis": "TTM EPS",
        "sectorPer": 21.04336,
        "sectorPerValidPeers": 3,
        "sectorPerEpsBasis": "NTM EPS",
        "growthPerPeg": 30.0,
        "growthPerPegEpsBasis": "NTM EPS"
      },
      "sectorPeerDisplay": {
        "basis": "forwardPE",
        "medianPer": 21.04336,
        "peers": [
          {
            "ticker": "EME",
            "per": 21.04336
          },
          {
            "ticker": "FIX",
            "per": 28.51361
          },
          {
            "ticker": "MTZ",
            "per": 18.49236805795102
          }
        ],
        "excluded": [],
        "note": "유효 비교군 3개 중앙값 (제외 0개)"
      },
      "epsUsedForCandidates": 19.294312602739723,
      "ttmEps": 8.500018501147915,
      "diag": {
        "epsTtmNtmRatio": 0.440545287938423,
        "candSpread": 1.5777901924878417,
        "fairAltExCappedGrowth": 386.4389848747663,
        "fairAltGapPct": -4.822008233690244,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 21.04336,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "dispersionFlag": "최대/최소 2.05배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-10-20",
          "prevFairPrice": 475.0570140351022,
          "newFairPrice": 468.64565766458895,
          "changePct": -1.349597244350869,
          "epsEffect": null,
          "perEffect": null,
          "otherEffect": -6.411356370513261,
          "note": "기타(종목유형 변경: None -> 고성장형)"
        }
      ],
      "nextUpdateDate": "2026-10-30"
    },
    "EME": {
      "ticker": "EME",
      "asOf": "2026-10-23",
      "verdict": "매수",
      "action": "적극 모아가기",
      "currentPrice": 660.4099731445312,
      "fairPrice": 1052.3674508205393,
      "ratio": 0.6275469396450872,
      "bandAggressiveLe": 841.8939606564314,
      "bandDcaHigh": 947.1307057384854,
      "bandFairHigh": 1157.6041959025933,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±43% (±40% 밖)",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "기타",
      "stockTypeReason": "경기순환형·이익훼손형·고성장형 조건 모두 미해당",
      "candidates": {
        "historicalPer": 18.28518526053723,
        "historicalPerYearsUsed": 5,
        "historicalPerEpsBasis": "TTM EPS",
        "sectorPer": 28.51361,
        "sectorPerValidPeers": 3,
        "sectorPerEpsBasis": "NTM EPS",
        "growthPerPeg": 30.0,
        "growthPerPegEpsBasis": "NTM EPS"
      },
      "sectorPeerDisplay": {
        "basis": "forwardPE",
        "medianPer": 28.51361,
        "peers": [
          {
            "ticker": "PWR",
            "per": 34.1722
          },
          {
            "ticker": "FIX",
            "per": 28.51361
          },
          {
            "ticker": "MTZ",
            "per": 18.49236805795102
          }
        ],
        "excluded": [],
        "note": "유효 비교군 3개 중앙값 (제외 0개)"
      },
      "epsUsedForCandidates": 36.907548739726025,
      "ttmEps": 32.7157514326316,
      "diag": {
        "epsTtmNtmRatio": 0.886424391480041,
        "candSpread": 1.8508882225830285,
        "fairAltExCappedGrowth": 825.2905133519471,
        "fairAltGapPct": -21.577723378990722,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 28.513609999999996,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "dispersionFlag": "최대/최소 1.64배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-10-20",
          "prevFairPrice": 843.912480279945,
          "newFairPrice": 842.1104472681689,
          "changePct": -0.21353316296239788,
          "epsEffect": 8.40604505388015,
          "perEffect": -10.208078065656368,
          "otherEffect": 0.0,
          "note": "EPS 36.5089->36.8725(적정PER 23.12배 유지 가정 시 +8.41) + 적정PER 23.12->22.84배(EPS 36.8725 유지 가정 시 -10.21)"
        }
      ],
      "nextUpdateDate": "2026-10-30"
    },
    "FIX": {
      "ticker": "FIX",
      "asOf": "2026-10-23",
      "verdict": "적정",
      "action": "선별 매수",
      "currentPrice": 1279.3699951171875,
      "fairPrice": 1222.7977167335978,
      "ratio": 1.0462646254645525,
      "bandAggressiveLe": 978.2381733868783,
      "bandDcaHigh": 1100.517945060238,
      "bandFairHigh": 1345.0774884069576,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±43% (±40% 밖)",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "고성장형",
      "stockTypeReason": "다음 회계연도 성장률 69.8%(기준 30% 초과)",
      "candidates": {
        "historicalPer": 25.175573140306934,
        "historicalPerYearsUsed": 5,
        "historicalPerEpsBasis": "TTM EPS",
        "sectorPer": 21.04336,
        "sectorPerValidPeers": 3,
        "sectorPerEpsBasis": "NTM EPS",
        "growthPerPeg": 30.0,
        "growthPerPegEpsBasis": "NTM EPS"
      },
      "sectorPeerDisplay": {
        "basis": "forwardPE",
        "medianPer": 21.04336,
        "peers": [
          {
            "ticker": "PWR",
            "per": 34.1722
          },
          {
            "ticker": "EME",
            "per": 21.04336
          },
          {
            "ticker": "MTZ",
            "per": 18.49236805795102
          }
        ],
        "excluded": [],
        "note": "유효 비교군 3개 중앙값 (제외 0개)"
      },
      "epsUsedForCandidates": 58.108482520547945,
      "ttmEps": 40.80417412561715,
      "diag": {
        "epsTtmNtmRatio": 0.7022068440900732,
        "candSpread": 1.6969804158371846,
        "fairAltExCappedGrowth": 1125.033093431446,
        "fairAltGapPct": -7.9951591309236125,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 21.04336,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "dispersionFlag": null,
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-10-20",
          "prevFairPrice": 1392.1949638972446,
          "newFairPrice": 1350.270339739177,
          "changePct": -3.0114046699828494,
          "epsEffect": null,
          "perEffect": null,
          "otherEffect": -41.92462415806767,
          "note": "기타(종목유형 변경: 기타 -> 고성장형)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "COHR": {
      "ticker": "COHR",
      "asOf": "2026-10-23",
      "verdict": "적정",
      "action": "선별 매수",
      "currentPrice": 207.82000732421875,
      "fairPrice": 221.01777489246578,
      "ratio": 0.9402863974417067,
      "bandAggressiveLe": 176.81421991397264,
      "bandDcaHigh": 198.9159974032192,
      "bandFairHigh": 243.11955238171237,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "EPS 품질 경고: 과거 PER 이력 부족(2년치) / 사업 위험으로 신뢰도 1단계 하향(낮음→낮음): 현금흐름 거부권 발동(2/3: FCF 2년 연속 악화(0.2B→0.2B→-1.0B), 발행주식수 +4.5%(3개분기))",
      "bizRiskBadge": true,
      "bizRiskDetail": [
        "현금흐름 거부권(2/3: FCF 2년 연속 악화(0.2B→0.2B→-1.0B), 발행주식수 +4.5%(3개분기))"
      ],
      "stockType": "기타",
      "stockTypeReason": "경기순환형·이익훼손형·고성장형 조건 모두 미해당",
      "candidates": {
        "historicalPer": 32.88331099928821,
        "historicalPerYearsUsed": 2,
        "historicalPerEpsBasis": "TTM EPS",
        "sectorPer": null,
        "sectorPerValidPeers": 2,
        "sectorPerEpsBasis": null,
        "growthPerPeg": 30.0,
        "growthPerPegEpsBasis": "NTM EPS"
      },
      "sectorPeerDisplay": {
        "basis": "forwardPE",
        "medianPer": null,
        "peers": [
          {
            "ticker": "LITE",
            "per": 39.13663
          },
          {
            "ticker": "AAOI",
            "per": 31.88424
          }
        ],
        "excluded": [],
        "note": "유효 비교군 2개 이하(최소 3개 기준 미달)"
      },
      "epsUsedForCandidates": 10.814361232876713,
      "ttmEps": 3.57642552482552,
      "diag": {
        "epsTtmNtmRatio": 0.3307107509921934,
        "candSpread": 2.7586550680312567,
        "fairAltExCappedGrowth": 117.60471279863013,
        "fairAltGapPct": -46.78947751788305,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 20.43743223784223,
      "fairPriceBasis": "적정가 후보 2개 평균",
      "dispersionFlag": null,
      "qualityWarnings": [
        "과거 PER 이력 부족(2년치)",
        "⚠ 사업 경고(현금흐름/EPS 하향): 현금흐름 거부권 발동(2/3: FCF 2년 연속 악화(0.2B→0.2B→-1.0B), 발행주식수 +4.5%(3개분기))"
      ],
      "recentChanges": [
        {
          "date": "2026-10-20",
          "prevFairPrice": 229.5862455017832,
          "newFairPrice": 229.52275895174597,
          "changePct": -0.027652592993308304,
          "epsEffect": 0.0,
          "perEffect": -0.0634865500372039,
          "otherEffect": 0.0,
          "note": "EPS 10.8421->10.8421(적정PER 21.18배 유지 가정 시 +0.00) + 적정PER 21.18->21.17배(EPS 10.8421 유지 가정 시 -0.06)"
        }
      ],
      "nextUpdateDate": "2026-11-05"
    },
    "LITE": {
      "ticker": "LITE",
      "asOf": "2026-10-23",
      "verdict": "적정",
      "action": "선별 매수",
      "currentPrice": 752.5399780273438,
      "fairPrice": 787.1583657534246,
      "ratio": 0.9560210635722,
      "bandAggressiveLe": 629.7266926027397,
      "bandDcaHigh": 708.4425291780822,
      "bandFairHigh": 865.8742023287672,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "적정가 후보 부족(2개 미만)",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "이익훼손형",
      "stockTypeReason": "TTM EPS $-82.21(적자)",
      "candidates": {
        "historicalPer": 29.03731331896426,
        "historicalPerYearsUsed": 3,
        "historicalPerEpsBasis": null,
        "sectorPer": null,
        "sectorPerValidPeers": 2,
        "sectorPerEpsBasis": null,
        "growthPerPeg": 30.0,
        "growthPerPegEpsBasis": "NTM EPS"
      },
      "sectorPeerDisplay": {
        "basis": "forwardPE",
        "medianPer": null,
        "peers": [
          {
            "ticker": "COHR",
            "per": 22.016836279576317
          },
          {
            "ticker": "AAOI",
            "per": 31.88424
          }
        ],
        "excluded": [],
        "note": "유효 비교군 2개 이하(최소 3개 기준 미달)"
      },
      "epsUsedForCandidates": 26.23861219178082,
      "ttmEps": null,
      "diag": {
        "epsTtmNtmRatio": null,
        "candSpread": null,
        "fairAltExCappedGrowth": null,
        "fairAltGapPct": null,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 30.0,
      "fairPriceBasis": "적정가 후보 1개(growth_per_peg)만 사용",
      "dispersionFlag": null,
      "qualityWarnings": [
        "TTM EPS 미확보(peTTM 없음) - 과거PER 후보가 적정가에 못 들어감"
      ],
      "recentChanges": [],
      "nextUpdateDate": "2026-11-06"
    },
    "CEG": {
      "ticker": "CEG",
      "asOf": "2026-10-23",
      "verdict": "고평가",
      "action": "신규 추격 금지",
      "currentPrice": 255.2100067138672,
      "fairPrice": 228.17254461812206,
      "ratio": 1.118495685539187,
      "bandAggressiveLe": 182.53803569449767,
      "bandDcaHigh": 205.35529015630985,
      "bandFairHigh": 250.9897990799343,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±67% (±40% 밖)",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "기타",
      "stockTypeReason": "경기순환형·이익훼손형·고성장형 조건 모두 미해당",
      "candidates": {
        "historicalPer": 23.331337203522644,
        "historicalPerYearsUsed": 3,
        "historicalPerEpsBasis": "TTM EPS",
        "sectorPer": 10.29848,
        "sectorPerValidPeers": 3,
        "sectorPerEpsBasis": "NTM EPS",
        "growthPerPeg": 29.145,
        "growthPerPegEpsBasis": "NTM EPS"
      },
      "sectorPeerDisplay": {
        "basis": "forwardPE",
        "medianPer": 10.29848,
        "peers": [
          {
            "ticker": "VST",
            "per": 13.81744
          },
          {
            "ticker": "NRG",
            "per": 9.9788
          },
          {
            "ticker": "TLN",
            "per": 10.29848
          }
        ],
        "excluded": [],
        "note": "유효 비교군 3개 중앙값 (제외 0개)"
      },
      "epsUsedForCandidates": 13.081627671232878,
      "ttmEps": 9.77965997524016,
      "diag": {
        "epsTtmNtmRatio": 0.7475873966926988,
        "candSpread": 2.8300292858751974,
        "fairAltExCappedGrowth": null,
        "fairAltGapPct": null,
        "fairAltApplicable": false,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 17.442213641341002,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "dispersionFlag": "최대/최소 2.83배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-10-20",
          "prevFairPrice": 300.3988322584465,
          "newFairPrice": 301.9524313143796,
          "changePct": 0.5171787933571319,
          "epsEffect": 0.0,
          "perEffect": 1.553599055933173,
          "otherEffect": 0.0,
          "note": "EPS 13.0616->13.0616(적정PER 23.00배 유지 가정 시 +0.00) + 적정PER 23.00->23.12배(EPS 13.0616 유지 가정 시 +1.55)"
        }
      ],
      "nextUpdateDate": "2026-11-10"
    },
    "VST": {
      "ticker": "VST",
      "asOf": "2026-10-23",
      "verdict": "고평가",
      "action": "신규 추격 금지",
      "currentPrice": 140.8300018310547,
      "fairPrice": 105.09562357987289,
      "ratio": 1.3400177574856253,
      "bandAggressiveLe": 84.07649886389832,
      "bandDcaHigh": 94.5860612218856,
      "bandFairHigh": 115.60518593786018,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±191% (±40% 밖) / 사업 위험으로 신뢰도 1단계 하향(낮음→낮음): 현금흐름 거부권 발동(2/3: FCF 2년 연속 악화(3.8B→2.5B→1.3B), 부채/자본 3.74); EPS 수정 방향 하향(하향)",
      "bizRiskBadge": true,
      "bizRiskDetail": [
        "현금흐름 거부권(2/3: FCF 2년 연속 악화(3.8B→2.5B→1.3B), 부채/자본 3.74)",
        "EPS 수정 방향 하향(하향)"
      ],
      "stockType": "기타",
      "stockTypeReason": "경기순환형·이익훼손형·고성장형 조건 모두 미해당",
      "candidates": {
        "historicalPer": 15.123076805701622,
        "historicalPerYearsUsed": 5,
        "historicalPerEpsBasis": "TTM EPS",
        "sectorPer": 10.29848,
        "sectorPerValidPeers": 3,
        "sectorPerEpsBasis": "NTM EPS",
        "growthPerPeg": 30.0,
        "growthPerPegEpsBasis": "NTM EPS"
      },
      "sectorPeerDisplay": {
        "basis": "forwardPE",
        "medianPer": 10.29848,
        "peers": [
          {
            "ticker": "CEG",
            "per": 20.24048
          },
          {
            "ticker": "NRG",
            "per": 9.9788
          },
          {
            "ticker": "TLN",
            "per": 10.29848
          }
        ],
        "excluded": [],
        "note": "유효 비교군 3개 중앙값 (제외 0개)"
      },
      "epsUsedForCandidates": 10.204964575342467,
      "ttmEps": 6.557338968791979,
      "diag": {
        "epsTtmNtmRatio": 0.6425636189503305,
        "candSpread": 3.087201411541849,
        "fairAltExCappedGrowth": 102.13138222296712,
        "fairAltGapPct": -2.8205183583624116,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 10.29848,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "dispersionFlag": "최대/최소 2.91배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [
        "⚠ 사업 경고(현금흐름/EPS 하향): 현금흐름 거부권 발동(2/3: FCF 2년 연속 악화(3.8B→2.5B→1.3B), 부채/자본 3.74); EPS 수정 방향 하향(하향)"
      ],
      "recentChanges": [
        {
          "date": "2026-10-20",
          "prevFairPrice": 202.27007059607084,
          "newFairPrice": 202.47396174360244,
          "changePct": 0.10080144182021541,
          "epsEffect": 0.0,
          "perEffect": 0.20389114753162035,
          "otherEffect": 0.0,
          "note": "EPS 10.2027->10.2027(적정PER 19.83배 유지 가정 시 +0.00) + 적정PER 19.83->19.85배(EPS 10.2027 유지 가정 시 +0.20)"
        }
      ],
      "nextUpdateDate": "2026-11-09"
    },
    "GEV": {
      "ticker": "GEV",
      "asOf": "2026-10-23",
      "verdict": "고평가",
      "action": "신규 추격 금지",
      "currentPrice": 827.4199829101562,
      "fairPrice": 734.5521,
      "ratio": 1.1264279047192927,
      "bandAggressiveLe": 587.6416800000001,
      "bandDcaHigh": 661.09689,
      "bandFairHigh": 808.0073100000001,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "EPS 품질 경고: 다음회계연도 대안 기준 사용; 과거 PER 이력 부족(2년치); WO8-B 분류 불가(이력 부족 - 유효 4개년 <5년; 필터 없음(원본 그대로))",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "분류불가(이력부족)",
      "stockTypeReason": "유효 연간 EPS 4개년(<5년 기준) - 필터 없음(원본 그대로)",
      "candidates": {
        "historicalPer": 47.94687991364474,
        "historicalPerYearsUsed": 2,
        "historicalPerEpsBasis": "TTM EPS",
        "sectorPer": 23.06984,
        "sectorPerValidPeers": 3,
        "sectorPerEpsBasis": "NTM EPS",
        "growthPerPeg": 30.0,
        "growthPerPegEpsBasis": "NTM EPS"
      },
      "sectorPeerDisplay": {
        "basis": "forwardPE",
        "medianPer": 23.06984,
        "peers": [
          {
            "ticker": "ETN",
            "per": 28.83915
          },
          {
            "ticker": "HUBB",
            "per": 20.73801
          },
          {
            "ticker": "SMNEY",
            "per": 23.06984
          }
        ],
        "excluded": [],
        "note": "유효 비교군 3개 중앙값 (제외 0개)"
      },
      "epsUsedForCandidates": 24.48507,
      "ttmEps": 35.774754326252186,
      "diag": {
        "epsTtmNtmRatio": 1.4610844210881238,
        "candSpread": 3.0366244101220214,
        "fairAltExCappedGrowth": 1140.0772484548781,
        "fairAltGapPct": 55.20713213601569,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": "WO8-B 분류 불가(이력 부족, 유효 4개년 <5년) - 필터 없음(원본 그대로) - 경기순환 여부 판단 안 함, NTM EPS 그대로 사용",
      "convertedFairPer": 30.0,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "dispersionFlag": "최대/최소 2.08배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [
        "다음회계연도 대안 기준 사용",
        "과거 PER 이력 부족(2년치)",
        "WO8-B 분류 불가(이력 부족 - 유효 4개년 <5년; 필터 없음(원본 그대로))"
      ],
      "recentChanges": [
        {
          "date": "2026-10-20",
          "prevFairPrice": 1213.037109293153,
          "newFairPrice": 1207.8201758933426,
          "changePct": -0.4300720365307157,
          "epsEffect": null,
          "perEffect": null,
          "otherEffect": -5.216933399810387,
          "note": "기타(종목유형 변경: None -> 분류불가(이력부족))"
        }
      ],
      "nextUpdateDate": "2026-10-29"
    },
    "BE": {
      "ticker": "BE",
      "asOf": "2026-10-23",
      "verdict": "고평가",
      "action": "신규 추격 금지",
      "currentPrice": 217.77000427246094,
      "fairPrice": 135.5030778082192,
      "ratio": 1.6071221982180814,
      "bandAggressiveLe": 108.40246224657535,
      "bandDcaHigh": 121.95277002739728,
      "bandFairHigh": 149.0533855890411,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "적정가 후보 부족(2개 미만) / 사업 위험으로 신뢰도 1단계 하향(낮음→낮음): 현금흐름 거부권 발동(2/3: 부채/자본 1.67, 발행주식수 +3.9%(3개분기))",
      "bizRiskBadge": true,
      "bizRiskDetail": [
        "현금흐름 거부권(2/3: 부채/자본 1.67, 발행주식수 +3.9%(3개분기))"
      ],
      "stockType": "기타",
      "stockTypeReason": "경기순환형·이익훼손형·고성장형 조건 모두 미해당",
      "candidates": {
        "historicalPer": null,
        "historicalPerYearsUsed": 0,
        "historicalPerEpsBasis": null,
        "sectorPer": null,
        "sectorPerValidPeers": 0,
        "sectorPerEpsBasis": null,
        "growthPerPeg": 30.0,
        "growthPerPegEpsBasis": "NTM EPS"
      },
      "sectorPeerDisplay": {
        "basis": "forwardPE",
        "medianPer": null,
        "peers": [],
        "excluded": [],
        "note": "비교군 없음(peer_groups.json에 비교군 정의 자체가 없음)"
      },
      "epsUsedForCandidates": 4.516769260273973,
      "ttmEps": 0.8493114842980962,
      "diag": {
        "epsTtmNtmRatio": 0.1880351719021794,
        "candSpread": null,
        "fairAltExCappedGrowth": null,
        "fairAltGapPct": null,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 30.0,
      "fairPriceBasis": "적정가 후보 1개(growth_per_peg)만 사용",
      "dispersionFlag": null,
      "qualityWarnings": [
        "과거 PER 이력 부족(0년치)",
        "⚠ 사업 경고(현금흐름/EPS 하향): 현금흐름 거부권 발동(2/3: 부채/자본 1.67, 발행주식수 +3.9%(3개분기))"
      ],
      "recentChanges": [
        {
          "date": "2026-10-20",
          "prevFairPrice": 134.9524512328767,
          "newFairPrice": 134.9530594520548,
          "changePct": 0.00045069146393402035,
          "epsEffect": null,
          "perEffect": null,
          "otherEffect": 0.0006082191780762969,
          "note": "기타(종목유형 변경: None -> 기타)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "AAPL": {
      "ticker": "AAPL",
      "asOf": "2026-10-23",
      "verdict": "고평가",
      "action": "신규 추격 금지",
      "currentPrice": 348.2200012207031,
      "fairPrice": 215.33116618975,
      "ratio": 1.617137023787125,
      "bandAggressiveLe": 172.2649329518,
      "bandDcaHigh": 193.79804957077502,
      "bandFairHigh": 236.86428280872502,
      "modelCheckNeeded": false,
      "confidence": "높음",
      "confidenceNote": "적정가 후보 모두 중앙값 ±16% 안",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "기타",
      "stockTypeReason": "경기순환형·이익훼손형·고성장형 조건 모두 미해당",
      "candidates": {
        "historicalPer": 27.929854276324175,
        "historicalPerYearsUsed": 5,
        "historicalPerEpsBasis": "TTM EPS",
        "sectorPer": 22.516055,
        "sectorPerValidPeers": 4,
        "sectorPerEpsBasis": "NTM EPS",
        "growthPerPeg": 19.9950003,
        "growthPerPegEpsBasis": "NTM EPS"
      },
      "sectorPeerDisplay": {
        "basis": "forwardPE",
        "medianPer": 22.516055,
        "peers": [
          {
            "ticker": "MSFT",
            "per": 24.19122
          },
          {
            "ticker": "GOOGL",
            "per": 21.39245
          },
          {
            "ticker": "META",
            "per": 22.28369
          },
          {
            "ticker": "AMZN",
            "per": 22.74842
          }
        ],
        "excluded": [],
        "note": "유효 비교군 4개 중앙값 (제외 0개)"
      },
      "epsUsedForCandidates": 9.56345,
      "ttmEps": 8.911238243463542,
      "diag": {
        "epsTtmNtmRatio": 0.9318016242531244,
        "candSpread": 1.3015795543564925,
        "fairAltExCappedGrowth": null,
        "fairAltGapPct": null,
        "fairAltApplicable": false,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 22.516055,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "dispersionFlag": null,
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-10-20",
          "prevFairPrice": 215.49215598300003,
          "newFairPrice": 215.33116618975,
          "changePct": -0.07470795979354578,
          "epsEffect": null,
          "perEffect": null,
          "otherEffect": -0.1609897932500246,
          "note": "기타(종목유형 변경: None -> 기타)"
        }
      ],
      "nextUpdateDate": "2026-11-03"
    },
    "MSFT": {
      "ticker": "MSFT",
      "asOf": "2026-10-23",
      "verdict": "적정",
      "action": "선별 매수",
      "currentPrice": 521.0800170898438,
      "fairPrice": 540.4733127026464,
      "ratio": 0.9641179404107373,
      "bandAggressiveLe": 432.3786501621171,
      "bandDcaHigh": 486.4259814323817,
      "bandFairHigh": 594.520643972911,
      "modelCheckNeeded": false,
      "confidence": "높음",
      "confidenceNote": "적정가 후보 모두 중앙값 ±15% 안",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "기타",
      "stockTypeReason": "경기순환형·이익훼손형·고성장형 조건 모두 미해당",
      "candidates": {
        "historicalPer": 35.179752948855565,
        "historicalPerYearsUsed": 5,
        "historicalPerEpsBasis": "TTM EPS",
        "sectorPer": 22.516055,
        "sectorPerValidPeers": 4,
        "sectorPerEpsBasis": "NTM EPS",
        "growthPerPeg": 25.73250075,
        "growthPerPegEpsBasis": "NTM EPS"
      },
      "sectorPeerDisplay": {
        "basis": "forwardPE",
        "medianPer": 22.516055,
        "peers": [
          {
            "ticker": "AAPL",
            "per": 35.33932
          },
          {
            "ticker": "GOOGL",
            "per": 21.39245
          },
          {
            "ticker": "META",
            "per": 22.28369
          },
          {
            "ticker": "AMZN",
            "per": 22.74842
          }
        ],
        "excluded": [],
        "note": "유효 비교군 4개 중앙값 (제외 0개)"
      },
      "epsUsedForCandidates": 21.003528493150686,
      "ttmEps": 17.720736099854914,
      "diag": {
        "epsTtmNtmRatio": 0.8437028142977834,
        "candSpread": 1.3182263309114397,
        "fairAltExCappedGrowth": null,
        "fairAltGapPct": null,
        "fairAltApplicable": false,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 25.73250075,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "dispersionFlag": "최대/최소 1.56배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-10-20",
          "prevFairPrice": 541.3389844596577,
          "newFairPrice": 539.1428121912329,
          "changePct": -0.4056926124795756,
          "epsEffect": null,
          "perEffect": null,
          "otherEffect": -2.196172268424789,
          "note": "기타(종목유형 변경: None -> 기타)"
        }
      ],
      "nextUpdateDate": "2026-10-29"
    },
    "GOOGL": {
      "ticker": "GOOGL",
      "asOf": "2026-10-23",
      "verdict": "매수",
      "action": "적극 모아가기",
      "currentPrice": 324.2200012207031,
      "fairPrice": 453.3195,
      "ratio": 0.7152130036777662,
      "bandAggressiveLe": 362.65560000000005,
      "bandDcaHigh": 407.98755,
      "bandFairHigh": 498.65145000000007,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "EPS 품질 경고: EPS 일회성 정상화 적용; 다음회계연도 대안 기준 사용",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "고성장형",
      "stockTypeReason": "다음 회계연도 성장률 90.5%(기준 30% 초과)",
      "candidates": {
        "historicalPer": 24.0844831795528,
        "historicalPerYearsUsed": 5,
        "historicalPerEpsBasis": "TTM EPS",
        "sectorPer": 23.46982,
        "sectorPerValidPeers": 4,
        "sectorPerEpsBasis": "NTM EPS",
        "growthPerPeg": 30.0,
        "growthPerPegEpsBasis": "NTM EPS"
      },
      "sectorPeerDisplay": {
        "basis": "forwardPE",
        "medianPer": 23.46982,
        "peers": [
          {
            "ticker": "AAPL",
            "per": 35.33932
          },
          {
            "ticker": "MSFT",
            "per": 24.19122
          },
          {
            "ticker": "META",
            "per": 22.28369
          },
          {
            "ticker": "AMZN",
            "per": 22.74842
          }
        ],
        "excluded": [],
        "note": "유효 비교군 4개 중앙값 (제외 0개)"
      },
      "epsUsedForCandidates": 15.11065,
      "ttmEps": 19.862892085395554,
      "diag": {
        "epsTtmNtmRatio": 1.3144962053515603,
        "candSpread": 1.3489222221293407,
        "fairAltExCappedGrowth": 416.51586295549083,
        "fairAltGapPct": -8.118697087707272,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 30.0,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "dispersionFlag": null,
      "qualityWarnings": [
        "EPS 일회성 정상화 적용",
        "다음회계연도 대안 기준 사용"
      ],
      "recentChanges": [
        {
          "date": "2026-10-20",
          "prevFairPrice": 452.2833,
          "newFairPrice": 452.9214,
          "changePct": 0.14108413907831852,
          "epsEffect": null,
          "perEffect": null,
          "otherEffect": 0.6381000000000085,
          "note": "기타(종목유형 변경: None -> 고성장형)"
        }
      ],
      "nextUpdateDate": "2026-10-29"
    },
    "META": {
      "ticker": "META",
      "asOf": "2026-10-23",
      "verdict": "매수",
      "action": "분할매수",
      "currentPrice": 648.8499755859375,
      "fairPrice": 773.9522710286159,
      "ratio": 0.8383591596980366,
      "bandAggressiveLe": 619.1618168228928,
      "bandDcaHigh": 696.5570439257543,
      "bandFairHigh": 851.3474981314776,
      "modelCheckNeeded": false,
      "confidence": "보통",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±28%",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "기타",
      "stockTypeReason": "경기순환형·이익훼손형·고성장형 조건 모두 미해당",
      "candidates": {
        "historicalPer": 24.426289477379495,
        "historicalPerYearsUsed": 5,
        "historicalPerEpsBasis": "TTM EPS",
        "sectorPer": 23.46982,
        "sectorPerValidPeers": 4,
        "sectorPerEpsBasis": "NTM EPS",
        "growthPerPeg": 30.0,
        "growthPerPegEpsBasis": "NTM EPS"
      },
      "sectorPeerDisplay": {
        "basis": "forwardPE",
        "medianPer": 23.46982,
        "peers": [
          {
            "ticker": "AAPL",
            "per": 35.33932
          },
          {
            "ticker": "MSFT",
            "per": 24.19122
          },
          {
            "ticker": "GOOGL",
            "per": 21.39245
          },
          {
            "ticker": "AMZN",
            "per": 22.74842
          }
        ],
        "excluded": [],
        "note": "유효 비교군 4개 중앙값 (제외 0개)"
      },
      "epsUsedForCandidates": 32.97648942465754,
      "ttmEps": 24.866059201263806,
      "diag": {
        "epsTtmNtmRatio": 0.7540541651068136,
        "candSpread": 1.6287754394340106,
        "fairAltExCappedGrowth": 690.6689156201708,
        "fairAltGapPct": -10.760787005348272,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 23.46982,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "dispersionFlag": null,
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-10-20",
          "prevFairPrice": 780.7574745823781,
          "newFairPrice": 778.3118080978614,
          "changePct": -0.3132427884631953,
          "epsEffect": null,
          "perEffect": null,
          "otherEffect": -2.4456664845166642,
          "note": "기타(종목유형 변경: None -> 기타)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "AMZN": {
      "ticker": "AMZN",
      "asOf": "2026-10-23",
      "verdict": "매수",
      "action": "적극 모아가기",
      "currentPrice": 250.3800048828125,
      "fairPrice": 316.746,
      "ratio": 0.7904756646739423,
      "bandAggressiveLe": 253.39679999999998,
      "bandDcaHigh": 285.0714,
      "bandFairHigh": 348.4206,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "EPS 품질 경고: 다음회계연도 대안 기준 사용",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "고성장형",
      "stockTypeReason": "다음 회계연도 성장률 80.0%(기준 30% 초과)",
      "candidates": {
        "historicalPer": 51.45586272816599,
        "historicalPerYearsUsed": 5,
        "historicalPerEpsBasis": "TTM EPS",
        "sectorPer": 23.237455,
        "sectorPerValidPeers": 4,
        "sectorPerEpsBasis": "NTM EPS",
        "growthPerPeg": 30.0,
        "growthPerPegEpsBasis": "NTM EPS"
      },
      "sectorPeerDisplay": {
        "basis": "forwardPE",
        "medianPer": 23.237455,
        "peers": [
          {
            "ticker": "AAPL",
            "per": 35.33932
          },
          {
            "ticker": "MSFT",
            "per": 24.19122
          },
          {
            "ticker": "GOOGL",
            "per": 21.39245
          },
          {
            "ticker": "META",
            "per": 22.28369
          }
        ],
        "excluded": [],
        "note": "유효 비교군 4개 중앙값 (제외 0개)"
      },
      "epsUsedForCandidates": 10.5582,
      "ttmEps": 11.968737535926408,
      "diag": {
        "epsTtmNtmRatio": 1.1335964024101086,
        "candSpread": 2.5101794009523575,
        "fairAltExCappedGrowth": 430.6037065295385,
        "fairAltGapPct": 35.94605978592895,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 30.0,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "dispersionFlag": "최대/최소 2.21배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [
        "다음회계연도 대안 기준 사용"
      ],
      "recentChanges": [
        {
          "date": "2026-10-20",
          "prevFairPrice": 316.5582,
          "newFairPrice": 317.0733,
          "changePct": 0.16271889339780746,
          "epsEffect": null,
          "perEffect": null,
          "otherEffect": 0.5151000000000181,
          "note": "기타(종목유형 변경: 기타 -> 고성장형)"
        }
      ],
      "nextUpdateDate": "2026-10-30"
    },
    "ORCL": {
      "ticker": "ORCL",
      "asOf": "2026-10-23",
      "verdict": "매수",
      "action": "적극 모아가기",
      "currentPrice": 125.54000091552734,
      "fairPrice": 214.23391047849614,
      "ratio": 0.5859950025424593,
      "bandAggressiveLe": 171.38712838279693,
      "bandDcaHigh": 192.81051943064654,
      "bandFairHigh": 235.65730152634578,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±30% / 사업 위험으로 신뢰도 1단계 하향(보통→낮음): 현금흐름 거부권 발동(3/3: FCF 2년 연속 악화(11.8B→-0.4B→-23.7B), 부채/자본 2.01, 발행주식수 +5.1%(3개분기))",
      "bizRiskBadge": true,
      "bizRiskDetail": [
        "현금흐름 거부권(3/3: FCF 2년 연속 악화(11.8B→-0.4B→-23.7B), 부채/자본 2.01, 발행주식수 +5.1%(3개분기))"
      ],
      "stockType": "기타",
      "stockTypeReason": "경기순환형·이익훼손형·고성장형 조건 모두 미해당",
      "candidates": {
        "historicalPer": 34.508144117721905,
        "historicalPerYearsUsed": 5,
        "historicalPerEpsBasis": "TTM EPS",
        "sectorPer": 18.72696,
        "sectorPerValidPeers": 4,
        "sectorPerEpsBasis": "NTM EPS",
        "growthPerPeg": 30.0,
        "growthPerPegEpsBasis": "NTM EPS"
      },
      "sectorPeerDisplay": {
        "basis": "forwardPE",
        "medianPer": 18.72696,
        "peers": [
          {
            "ticker": "CRM",
            "per": 14.33785
          },
          {
            "ticker": "SAP",
            "per": 23.11607
          },
          {
            "ticker": "NOW",
            "per": 38.54317596751964
          },
          {
            "ticker": "ADBE",
            "per": 8.79127
          }
        ],
        "excluded": [],
        "note": "유효 비교군 4개 중앙값 (제외 0개)"
      },
      "epsUsedForCandidates": 9.274796575342464,
      "ttmEps": 6.208213045235162,
      "diag": {
        "epsTtmNtmRatio": 0.6693637962626613,
        "candSpread": 1.601968498891438,
        "fairAltExCappedGrowth": 193.9613274765357,
        "fairAltGapPct": -9.462826382938715,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 23.09850234861736,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "dispersionFlag": "최대/최소 1.84배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [
        "⚠ 사업 경고(현금흐름/EPS 하향): 현금흐름 거부권 발동(3/3: FCF 2년 연속 악화(11.8B→-0.4B→-23.7B), 부채/자본 2.01, 발행주식수 +5.1%(3개분기))"
      ],
      "recentChanges": [
        {
          "date": "2026-10-20",
          "prevFairPrice": 247.85260047617425,
          "newFairPrice": 249.1576057386983,
          "changePct": 0.5265247409213674,
          "epsEffect": null,
          "perEffect": null,
          "otherEffect": 1.3050052625240482,
          "note": "기타(종목유형 변경: None -> 기타)"
        }
      ],
      "nextUpdateDate": "2026-12-09"
    },
    "CRM": {
      "ticker": "CRM",
      "asOf": "2026-10-23",
      "verdict": "매수",
      "action": "적극 모아가기",
      "currentPrice": 250.2899932861328,
      "fairPrice": 357.7255128357616,
      "ratio": 0.6996705135790681,
      "bandAggressiveLe": 286.1804102686093,
      "bandDcaHigh": 321.95296155218546,
      "bandFairHigh": 393.4980641193378,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±75% (±40% 밖)",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "고성장형",
      "stockTypeReason": "다음 회계연도 성장률 33.8%(기준 30% 초과)",
      "candidates": {
        "historicalPer": 52.61206667563132,
        "historicalPerYearsUsed": 4,
        "historicalPerEpsBasis": "TTM EPS",
        "sectorPer": 19.82851,
        "sectorPerValidPeers": 4,
        "sectorPerEpsBasis": "NTM EPS",
        "growthPerPeg": 22.05750015,
        "growthPerPegEpsBasis": "NTM EPS"
      },
      "sectorPeerDisplay": {
        "basis": "forwardPE",
        "medianPer": 19.82851,
        "peers": [
          {
            "ticker": "ORCL",
            "per": 16.54095
          },
          {
            "ticker": "SAP",
            "per": 23.11607
          },
          {
            "ticker": "NOW",
            "per": 38.54317596751964
          },
          {
            "ticker": "ADBE",
            "per": 8.79127
          }
        ],
        "excluded": [],
        "note": "유효 비교군 4개 중앙값 (제외 0개)"
      },
      "epsUsedForCandidates": 16.217862876712328,
      "ttmEps": 11.881906938880634,
      "diag": {
        "epsTtmNtmRatio": 0.7326431989964713,
        "candSpread": 1.9439621451662363,
        "fairAltExCappedGrowth": null,
        "fairAltGapPct": null,
        "fairAltApplicable": false,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 22.05750015,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "dispersionFlag": "최대/최소 2.65배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-10-20",
          "prevFairPrice": 490.3758881747334,
          "newFairPrice": 493.9707976039363,
          "changePct": 0.7330926164791277,
          "epsEffect": null,
          "perEffect": null,
          "otherEffect": 3.5949094292029145,
          "note": "기타(종목유형 변경: 기타 -> 고성장형)"
        }
      ],
      "nextUpdateDate": "2026-12-02"
    },
    "PLTR": {
      "ticker": "PLTR",
      "asOf": "2026-10-23",
      "verdict": "고평가",
      "action": "신규 추격 금지 · 모델 점검 필요(적정가/현재가 비율 2.96배)",
      "currentPrice": 196.19000244140625,
      "fairPrice": 66.36496191780823,
      "ratio": 2.9562286600026066,
      "bandAggressiveLe": 53.09196953424659,
      "bandDcaHigh": 59.72846572602741,
      "bandFairHigh": 73.00145810958907,
      "modelCheckNeeded": true,
      "confidence": "낮음",
      "confidenceNote": "적정가/현재가 비율이 2배 초과 또는 0.5배 미만 - 모델 점검 필요로 강제 낮음",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "고성장형",
      "stockTypeReason": "NTM PER 86.7배(기준 40 초과); 다음 회계연도 성장률 115.8%(기준 30% 초과)",
      "candidates": {
        "historicalPer": null,
        "historicalPerYearsUsed": 0,
        "historicalPerEpsBasis": null,
        "sectorPer": null,
        "sectorPerValidPeers": 1,
        "sectorPerEpsBasis": null,
        "growthPerPeg": 30.0,
        "growthPerPegEpsBasis": "NTM EPS"
      },
      "sectorPeerDisplay": {
        "basis": "forwardPE",
        "medianPer": null,
        "peers": [
          {
            "ticker": "NOW",
            "per": 38.54317596751964
          }
        ],
        "excluded": [
          {
            "ticker": "SNOW",
            "reason": "NTM PER 141.6배 >80배 제외"
          },
          {
            "ticker": "DDOG",
            "reason": "NTM PER 86.3배 >80배 제외"
          }
        ],
        "note": "유효 비교군 2개 이하(최소 3개 기준 미달)"
      },
      "epsUsedForCandidates": 2.212165397260274,
      "ttmEps": 1.2614635551642348,
      "diag": {
        "epsTtmNtmRatio": 0.5702392582067028,
        "candSpread": null,
        "fairAltExCappedGrowth": null,
        "fairAltGapPct": null,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 30.000000000000004,
      "fairPriceBasis": "적정가 후보 1개(growth_per_peg)만 사용",
      "dispersionFlag": null,
      "qualityWarnings": [
        "과거 PER 이력 부족(0년치)"
      ],
      "recentChanges": [],
      "nextUpdateDate": "2026-11-03"
    },
    "TSLA": {
      "ticker": "TSLA",
      "asOf": "2026-10-23",
      "verdict": "고평가",
      "action": "신규 추격 금지 · 모델 점검 필요(적정가/현재가 비율 9.16배)",
      "currentPrice": 374.5799865722656,
      "fairPrice": 40.87589907473557,
      "ratio": 9.163834803667589,
      "bandAggressiveLe": 32.70071925978846,
      "bandDcaHigh": 36.788309167262014,
      "bandFairHigh": 44.963488982209135,
      "modelCheckNeeded": true,
      "confidence": "낮음",
      "confidenceNote": "적정가/현재가 비율이 2배 초과 또는 0.5배 미만 - 모델 점검 필요로 강제 낮음 / 사업 위험으로 신뢰도 1단계 하향(낮음→낮음): EPS 수정 방향 하향(하향)",
      "bizRiskBadge": true,
      "bizRiskDetail": [
        "EPS 수정 방향 하향(하향)"
      ],
      "stockType": "기타",
      "stockTypeReason": "경기순환형·이익훼손형·고성장형 조건 모두 미해당",
      "candidates": {
        "historicalPer": 45.90683495586366,
        "historicalPerYearsUsed": 2,
        "historicalPerEpsBasis": "TTM EPS",
        "sectorPer": null,
        "sectorPerValidPeers": 0,
        "sectorPerEpsBasis": null,
        "growthPerPeg": 21.43500075,
        "growthPerPegEpsBasis": "NTM EPS"
      },
      "sectorPeerDisplay": {
        "basis": "forwardPE",
        "medianPer": null,
        "peers": [],
        "excluded": [],
        "note": "비교군 없음(peer_groups.json에 비교군 정의 자체가 없음)"
      },
      "epsUsedForCandidates": 2.06927298630137,
      "ttmEps": 0.8146266274314308,
      "diag": {
        "epsTtmNtmRatio": 0.39367769879773035,
        "candSpread": 1.186056391576719,
        "fairAltExCappedGrowth": null,
        "fairAltGapPct": null,
        "fairAltApplicable": false,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 19.753748947255808,
      "fairPriceBasis": "적정가 후보 2개 평균",
      "dispersionFlag": "최대/최소 2.14배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [
        "과거 PER 이력 부족(2년치)",
        "⚠ 사업 경고(현금흐름/EPS 하향): EPS 수정 방향 하향(하향)"
      ],
      "recentChanges": [
        {
          "date": "2026-10-20",
          "prevFairPrice": 45.934416139740705,
          "newFairPrice": 45.44212549099997,
          "changePct": -1.0717250595786358,
          "epsEffect": 0.0,
          "perEffect": -0.4922906487407294,
          "otherEffect": 0.0,
          "note": "EPS 2.0847->2.0847(적정PER 22.03배 유지 가정 시 +0.00) + 적정PER 22.03->21.80배(EPS 2.0847 유지 가정 시 -0.49)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    }
  }
};
if (typeof window !== 'undefined') { window.PRICE_MAP_DATA = PRICE_MAP_DATA; }
