const PRICE_MAP_DATA = {
  "_meta": {
    "title": "WO17 가격지도(price_map) - 화면용 production 데이터",
    "as_of": "2026-10-24",
    "input_snapshot_hash": "2098853db42df6ab5fef36402812e27f4d972f831f66221de8e8dac21c92e98e",
    "generated_by": "price_map_engine.py write_price_map_data_js()",
    "session_date": "2026-10-23",
    "session_date_source": "daily_run_arg(확정 종가 거래일)",
    "note": "142 엔진(computePriceValidity/pvIntegratedAction)과 완전히 독립된 산출물 - 기존 판정 로직을 전혀 안 건드림."
  },
  "tickers": {
    "AMAT": {
      "ticker": "AMAT",
      "asOf": "2026-10-24",
      "verdict": "매수",
      "action": "적극 모아가기",
      "currentPrice": 377.239990234375,
      "fairPrice": 551.4456526027396,
      "ratio": 0.6840927813173603,
      "bandAggressiveLe": 441.1565220821917,
      "bandDcaHigh": 496.3010873424657,
      "bandFairHigh": 606.5902178630137,
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
      "epsUsedForCandidates": 18.381521753424654,
      "ttmEps": 10.77200689410672,
      "diag": {
        "epsTtmNtmRatio": 0.5860236730454481,
        "candSpread": 2.5119591167219273,
        "fairAltExCappedGrowth": 403.87383775877464,
        "fairAltGapPct": -26.760899128943795,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 30.000000000000004,
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
        },
        {
          "date": "2026-10-24",
          "prevFairPrice": 549.5699112328766,
          "newFairPrice": 551.4456526027396,
          "changePct": 0.34131078349159993,
          "epsEffect": 1.8757413698629932,
          "perEffect": 6.530428377056074e-14,
          "otherEffect": 0.0,
          "note": "EPS 18.3190->18.3815(적정PER 30.00배 유지 가정 시 +1.88) + 적정PER 30.00->30.00배(EPS 18.3815 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2026-11-13"
    },
    "LRCX": {
      "ticker": "LRCX",
      "asOf": "2026-10-24",
      "verdict": "매수",
      "action": "적극 모아가기",
      "currentPrice": 230.10000610351562,
      "fairPrice": 312.4813528767123,
      "ratio": 0.7363639589537371,
      "bandAggressiveLe": 249.98508230136986,
      "bandDcaHigh": 281.2332175890411,
      "bandFairHigh": 343.72948816438355,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±62% (±40% 밖)",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "고성장형",
      "stockTypeReason": "다음 회계연도 성장률 65.4%(기준 30% 초과)",
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
      "epsUsedForCandidates": 10.41604509589041,
      "ttmEps": 5.122086545752978,
      "diag": {
        "epsTtmNtmRatio": 0.49174965148469524,
        "candSpread": 2.656275981042154,
        "fairAltExCappedGrowth": 219.31788074997934,
        "fairAltGapPct": -29.81409011099938,
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
          "prevFairPrice": 305.36746767123293,
          "newFairPrice": 307.1821956164383,
          "changePct": 0.5942767771055354,
          "epsEffect": null,
          "perEffect": null,
          "otherEffect": 1.8147279452053908,
          "note": "기타(종목유형 변경: None -> 고성장형)"
        },
        {
          "date": "2026-10-24",
          "prevFairPrice": 307.1821956164383,
          "newFairPrice": 312.4813528767123,
          "changePct": 1.7250860681036249,
          "epsEffect": 5.299157260273971,
          "perEffect": 3.700522589117274e-14,
          "otherEffect": 0.0,
          "note": "EPS 10.2394->10.4160(적정PER 30.00배 유지 가정 시 +5.30) + 적정PER 30.00->30.00배(EPS 10.4160 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "KLAC": {
      "ticker": "KLAC",
      "asOf": "2026-10-24",
      "verdict": "매수",
      "action": "분할매수",
      "currentPrice": 145.61000061035156,
      "fairPrice": 175.54768849315067,
      "ratio": 0.8294612242418266,
      "bandAggressiveLe": 140.43815079452054,
      "bandDcaHigh": 157.99291964383562,
      "bandFairHigh": 193.10245734246575,
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
      "epsUsedForCandidates": 5.851589616438356,
      "ttmEps": 3.663107807980588,
      "diag": {
        "epsTtmNtmRatio": 0.6260021717329837,
        "candSpread": 2.0154153066627543,
        "fairAltExCappedGrowth": 133.92506257885464,
        "fairAltGapPct": -23.710153219089534,
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
          "date": "2026-10-24",
          "prevFairPrice": 175.1193509589041,
          "newFairPrice": 175.54768849315067,
          "changePct": 0.2445974884563646,
          "epsEffect": null,
          "perEffect": null,
          "otherEffect": 0.42833753424656607,
          "note": "기타(종목유형 변경: None -> 고성장형)"
        }
      ],
      "nextUpdateDate": "2026-10-29"
    },
    "ASML": {
      "ticker": "ASML",
      "asOf": "2026-10-24",
      "verdict": "적정",
      "action": "선별 매수",
      "currentPrice": 1571.800048828125,
      "fairPrice": 1595.6106476712328,
      "ratio": 0.9850774379840979,
      "bandAggressiveLe": 1276.4885181369864,
      "bandDcaHigh": 1436.0495829041095,
      "bandFairHigh": 1755.1717124383563,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "EPS 품질 경고: ADR 통화환산 적용(EUR->USD); WO8-B 분류 불가(이력 부족 - 유효 4개년 <5년; 필터 없음(원본 그대로))",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "분류불가(이력부족)",
      "stockTypeReason": "유효 연간 EPS 4개년(<5년 기준) - 필터 없음(원본 그대로)",
      "candidates": {
        "historicalPer": 32.504646215926456,
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
      "epsUsedForCandidates": 53.187021589041095,
      "ttmEps": 28.696045189754376,
      "diag": {
        "epsTtmNtmRatio": 0.5395309669994202,
        "candSpread": 1.7922374564865147,
        "fairAltExCappedGrowth": 1302.2364405165297,
        "fairAltGapPct": -18.386327991911934,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": "WO8-B 분류 불가(이력 부족, 유효 4개년 <5년) - 필터 없음(원본 그대로) - 경기순환 여부 판단 안 함, NTM EPS 그대로 사용",
      "convertedFairPer": 30.0,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "dispersionFlag": null,
      "qualityWarnings": [
        "ADR 통화환산 적용(EUR->USD)",
        "WO8-B 분류 불가(이력 부족 - 유효 4개년 <5년; 필터 없음(원본 그대로))"
      ],
      "recentChanges": [
        {
          "date": "2026-10-24",
          "prevFairPrice": 1590.7712975342467,
          "newFairPrice": 1595.6106476712328,
          "changePct": 0.3042140717831143,
          "epsEffect": null,
          "perEffect": null,
          "otherEffect": 4.839350136986013,
          "note": "기타(종목유형 변경: None -> 분류불가(이력부족))"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "MU": {
      "ticker": "MU",
      "asOf": "2026-10-24",
      "verdict": "매수",
      "action": "적극 모아가기",
      "currentPrice": 877.5499877929688,
      "fairPrice": 1185.700090067229,
      "ratio": 0.7401112601275183,
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
            "per": 57.066180644652164
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
      "ttmEps": 75.79330014967513,
      "diag": {
        "epsTtmNtmRatio": 1.4189250439882268,
        "candSpread": 2.0840654744160583,
        "fairAltExCappedGrowth": 768.920180134458,
        "fairAltGapPct": -35.150533716257,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": "경기순환형(WO8-B 최종본: (A) EPS 30%+·매출 5%+ 동반 감소 2회(2019→2020 EPS -57%·매출 -8%, 2022→2023 EPS -169%·매출 -49%, 기준 2회 이상)) - NTM EPS(181.0363) 대신 정상화 EPS 53.4160(순이익률 사이클 중앙값 22% x NTM매출/주식수 242.8, 기준연수 8) 사용 - 업종PER·성장PER·과거PER 후보 전부 동일 기준 적용(item3)",
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
      "asOf": "2026-10-24",
      "verdict": "매수",
      "action": "적극 모아가기 · 모델 점검 필요(적정가/현재가 비율 0.27배)",
      "currentPrice": 1238.030029296875,
      "fairPrice": 4595.067284712263,
      "ratio": 0.26942587618157127,
      "bandAggressiveLe": 3676.0538277698106,
      "bandDcaHigh": 4135.560556241037,
      "bandFairHigh": 5054.57401318349,
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
      "epsUsedForCandidates": 231.18206942465753,
      "ttmEps": 71.05967199105032,
      "diag": {
        "epsTtmNtmRatio": 0.30737536076174254,
        "candSpread": 4.125510340463804,
        "fairAltExCappedGrowth": 3138.0917200702233,
        "fairAltGapPct": -31.70738259893128,
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
      "recentChanges": [
        {
          "date": "2026-10-24",
          "prevFairPrice": 4583.855069551978,
          "newFairPrice": 4595.067284712263,
          "changePct": 0.24460230505021488,
          "epsEffect": null,
          "perEffect": null,
          "otherEffect": 11.212215160285268,
          "note": "기타(종목유형 변경: None -> 분류불가(이력부족))"
        }
      ],
      "nextUpdateDate": "2026-10-30"
    },
    "WDC": {
      "ticker": "WDC",
      "asOf": "2026-10-24",
      "verdict": "매수",
      "action": "적극 모아가기",
      "currentPrice": 343.6700134277344,
      "fairPrice": 508.47414903274864,
      "ratio": 0.6758849276437848,
      "bandAggressiveLe": 406.77931922619894,
      "bandDcaHigh": 457.6267341294738,
      "bandFairHigh": 559.3215639360235,
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
      "epsUsedForCandidates": 26.32029802739726,
      "ttmEps": 22.904920850677435,
      "diag": {
        "epsTtmNtmRatio": 0.8702378987819704,
        "candSpread": 3.558541567324048,
        "fairAltExCappedGrowth": 365.1826579644395,
        "fairAltGapPct": -28.18068358851422,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": "WO8-B 분류 불가(이력 부족, 유효 1개년 <5년) - corporate_events.json 기업분할/분리상장(2025-02-21) 이전 회계연도 7개 제외 - 경기순환 여부 판단 안 함, NTM EPS 그대로 사용",
      "convertedFairPer": 19.31870788482216,
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
        },
        {
          "date": "2026-10-24",
          "prevFairPrice": 571.2312977910766,
          "newFairPrice": 508.47414903274864,
          "changePct": -10.986293818459663,
          "epsEffect": 42.8551297954104,
          "perEffect": -105.61227855373842,
          "otherEffect": 0.0,
          "note": "EPS 24.4835->26.3203(적정PER 23.33배 유지 가정 시 +42.86) + 적정PER 23.33->19.32배(EPS 26.3203 유지 가정 시 -105.61)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "STX": {
      "ticker": "STX",
      "asOf": "2026-10-24",
      "verdict": "고평가",
      "action": "신규 추격 금지 · 모델 점검 필요(적정가/현재가 비율 2.24배)",
      "currentPrice": 630.489990234375,
      "fairPrice": 281.13853493158297,
      "ratio": 2.242630987558533,
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
            "per": 16.428597944304492
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
      "ttmEps": 13.74814631998201,
      "diag": {
        "epsTtmNtmRatio": 1.2443563158450102,
        "candSpread": 1.4359445453498019,
        "fairAltExCappedGrowth": 230.82506986316588,
        "fairAltGapPct": -17.896324700084687,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": "경기순환형(WO8-B 최종본: (B) EPS 30%+·매출 5%+ 동반 감소 1회(2022→2023 EPS -135%·매출 -37%) + 이익 정점 의심(NTM EPS $36.66가 과거 8년 EPS 중앙값 $6.06의 3배 초과)) - NTM EPS(43.2658) 대신 정상화 EPS 11.0484(순이익률 사이클 중앙값 13.2% x NTM매출/주식수 83.7, 기준연수 8) 사용 - 업종PER·성장PER·과거PER 후보 전부 동일 기준 적용(item3)",
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
      "asOf": "2026-10-24",
      "verdict": "매수",
      "action": "분할매수",
      "currentPrice": 210.9600067138672,
      "fairPrice": 248.51900462897802,
      "ratio": 0.8488687093722114,
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
            "per": 50.66464951108505
          }
        ],
        "excluded": [
          {
            "ticker": "AMD",
            "reason": "정상화기준 PER 276.0배 >80배 제외"
          },
          {
            "ticker": "MRVL",
            "reason": "정상화 EPS 산출 제한(사이클 중앙 순이익률(-9.3%)이 0 이하 - 정상화 모델 산출 제한)"
          }
        ],
        "note": "업종 비교 불가(정상화 비교군 부족) - 업종 비교 불가(정상화기준 유효 비교군 1개 <3개)"
      },
      "epsUsedForCandidates": 6.114639999999999,
      "ttmEps": 7.606301328429783,
      "diag": {
        "epsTtmNtmRatio": 1.2439491660064672,
        "candSpread": 1.7095517711479125,
        "fairAltExCappedGrowth": 313.5988092579561,
        "fairAltGapPct": 26.187053471479093,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": "경기순환형(WO8-B 최종본: (B) EPS 30%+·매출 5%+ 동반 감소 1회(2019→2020 EPS -32%·매출 -7%) + 이익 정점 의심(NTM EPS $9.31가 과거 8년 EPS 중앙값 $0.28의 3배 초과)) - NTM EPS(14.1239) 대신 정상화 EPS 6.1146(순이익률 사이클 중앙값 35.8% x NTM매출/주식수 17.08, 기준연수 8) 사용 - 업종PER·성장PER·과거PER 후보 전부 동일 기준 적용(item3)",
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
      "asOf": "2026-10-24",
      "verdict": "고평가",
      "action": "신규 추격 금지",
      "currentPrice": 516.7899780273438,
      "fairPrice": 270.63417865705975,
      "ratio": 1.9095517816402854,
      "bandAggressiveLe": 216.5073429256478,
      "bandDcaHigh": 243.5707607913538,
      "bandFairHigh": 297.69759652276576,
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
      "epsUsedForCandidates": 14.23997690410959,
      "ttmEps": 4.044724326712868,
      "diag": {
        "epsTtmNtmRatio": 0.28404009037020134,
        "candSpread": 1.857400827529646,
        "fairAltExCappedGrowth": 250.31631318789073,
        "fairAltGapPct": -7.507501665159322,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 19.00524,
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
        },
        {
          "date": "2026-10-24",
          "prevFairPrice": 268.9186750943376,
          "newFairPrice": 270.63417865705975,
          "changePct": 0.6379265263449525,
          "epsEffect": 1.7155035627221793,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 14.1497->14.2400(적정PER 19.01배 유지 가정 시 +1.72) + 적정PER 19.01->19.01배(EPS 14.2400 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2026-11-04"
    },
    "AVGO": {
      "ticker": "AVGO",
      "asOf": "2026-10-24",
      "verdict": "매수",
      "action": "적극 모아가기",
      "currentPrice": 321.67999267578125,
      "fairPrice": 578.4732887671233,
      "ratio": 0.5560844362604275,
      "bandAggressiveLe": 462.7786310136987,
      "bandDcaHigh": 520.625959890411,
      "bandFairHigh": 636.3206176438357,
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
      "epsUsedForCandidates": 19.28244295890411,
      "ttmEps": 7.936836730219127,
      "diag": {
        "epsTtmNtmRatio": 0.4116095013030551,
        "candSpread": 3.0837415288858967,
        "fairAltExCappedGrowth": 574.4160846014424,
        "fairAltGapPct": -0.7013641328760145,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 30.000000000000004,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "dispersionFlag": null,
      "qualityWarnings": [
        "⚠ 사업 경고(현금흐름/EPS 하향): EPS 하향 수정이 상향보다 많음(방향은 보합)"
      ],
      "recentChanges": [
        {
          "date": "2026-10-24",
          "prevFairPrice": 574.9116139726027,
          "newFairPrice": 578.4732887671233,
          "changePct": 0.6195169323349864,
          "epsEffect": 3.5616747945205414,
          "perEffect": 1.3700999772157807e-13,
          "otherEffect": 0.0,
          "note": "EPS 19.1637->19.2824(적정PER 30.00배 유지 가정 시 +3.56) + 적정PER 30.00->30.00배(EPS 19.2824 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2026-12-10"
    },
    "MRVL": {
      "ticker": "MRVL",
      "asOf": "2026-10-24",
      "verdict": "고평가",
      "action": "신규 추격 금지",
      "currentPrice": 228.50999450683594,
      "fairPrice": 123.264830728777,
      "ratio": 1.8538133963744514,
      "bandAggressiveLe": 98.6118645830216,
      "bandDcaHigh": 110.9383476558993,
      "bandFairHigh": 135.5913138016547,
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
      "epsUsedForCandidates": 6.48583394520548,
      "ttmEps": 3.0783882951841286,
      "diag": {
        "epsTtmNtmRatio": 0.47463261026899467,
        "candSpread": 6.152407013536248,
        "fairAltExCappedGrowth": 77.4453336196396,
        "fairAltGapPct": -37.17158968883453,
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
        },
        {
          "date": "2026-10-24",
          "prevFairPrice": 122.61734250894575,
          "newFairPrice": 123.264830728777,
          "changePct": 0.5280559883150355,
          "epsEffect": 0.6474882198312434,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 6.4518->6.4858(적정PER 19.01배 유지 가정 시 +0.65) + 적정PER 19.01->19.01배(EPS 6.4858 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2026-12-01"
    },
    "TSM": {
      "ticker": "TSM",
      "asOf": "2026-10-24",
      "verdict": "매수",
      "action": "적극 모아가기",
      "currentPrice": 418.510009765625,
      "fairPrice": 525.4282540381575,
      "ratio": 0.7965121908637065,
      "bandAggressiveLe": 420.34260323052604,
      "bandDcaHigh": 472.8854286343418,
      "bandFairHigh": 577.9710794419733,
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
      "epsUsedForCandidates": 22.28964605479452,
      "ttmEps": 16.991121377673956,
      "diag": {
        "epsTtmNtmRatio": 0.7622876260979995,
        "candSpread": 1.593885530183744,
        "fairAltExCappedGrowth": 472.4811927777938,
        "fairAltGapPct": -10.076934548806848,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": "WO8-B 분류 불가(이력 부족, 유효 4개년 <5년) - 필터 없음(원본 그대로) - 경기순환 여부 판단 안 함, NTM EPS 그대로 사용",
      "convertedFairPer": 23.57275,
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
        },
        {
          "date": "2026-10-24",
          "prevFairPrice": 383.69802775612203,
          "newFairPrice": 525.4282540381575,
          "changePct": 36.93796059126973,
          "epsEffect": 1.1126651378935242,
          "perEffect": 140.61756114414194,
          "otherEffect": 0.0,
          "note": "EPS 22.2252->22.2896(적정PER 17.26배 유지 가정 시 +1.11) + 적정PER 17.26->23.57배(EPS 22.2896 유지 가정 시 +140.62)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "INTC": {
      "ticker": "INTC",
      "asOf": "2026-10-24",
      "verdict": "고평가",
      "action": "신규 추격 금지",
      "currentPrice": 86.95999908447266,
      "fairPrice": 61.55789540728918,
      "ratio": 1.4126538685105139,
      "bandAggressiveLe": 49.246316325831344,
      "bandDcaHigh": 55.40210586656026,
      "bandFairHigh": 67.7136849480181,
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
      "epsUsedForCandidates": 2.4602054520547947,
      "ttmEps": null,
      "diag": {
        "epsTtmNtmRatio": null,
        "candSpread": 1.4967901335585836,
        "fairAltExCappedGrowth": 49.309627252934526,
        "fairAltGapPct": -19.897152222823255,
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
        },
        {
          "date": "2026-10-24",
          "prevFairPrice": 74.42009671232877,
          "newFairPrice": 61.55789540728918,
          "changePct": -17.283236482154127,
          "epsEffect": -0.6139331506849288,
          "perEffect": -12.248268154354658,
          "otherEffect": 0.0,
          "note": "EPS 2.4807->2.4602(적정PER 30.00배 유지 가정 시 -0.61) + 적정PER 30.00->25.02배(EPS 2.4602 유지 가정 시 -12.25)"
        }
      ],
      "nextUpdateDate": "2026-10-30"
    },
    "QCOM": {
      "ticker": "QCOM",
      "asOf": "2026-10-24",
      "verdict": "고평가",
      "action": "신규 추격 금지",
      "currentPrice": 175.91000366210938,
      "fairPrice": 112.4756837038872,
      "ratio": 1.5639825237713123,
      "bandAggressiveLe": 89.98054696310976,
      "bandDcaHigh": 101.22811533349848,
      "bandFairHigh": 123.72325207427593,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±32% / 사업 위험으로 신뢰도 1단계 하향(보통→낮음): EPS 수정 방향 하향(하향)",
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
      "ttmEps": 8.729851698333997,
      "diag": {
        "epsTtmNtmRatio": 0.8564942299303213,
        "candSpread": 1.942692955276106,
        "fairAltExCappedGrowth": null,
        "fairAltGapPct": null,
        "fairAltApplicable": false,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 11.035098582285398,
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
        },
        {
          "date": "2026-10-24",
          "prevFairPrice": 111.42683890013078,
          "newFairPrice": 112.4756837038872,
          "changePct": 0.9412856131514945,
          "epsEffect": 0.02580595630344606,
          "perEffect": 1.0230388474529792,
          "otherEffect": 0.0,
          "note": "EPS 10.1902->10.1925(적정PER 10.93배 유지 가정 시 +0.03) + 적정PER 10.93->11.04배(EPS 10.1925 유지 가정 시 +1.02)"
        }
      ],
      "nextUpdateDate": "2026-11-05"
    },
    "ARM": {
      "ticker": "ARM",
      "asOf": "2026-10-24",
      "verdict": "고평가",
      "action": "신규 추격 금지 · 모델 점검 필요(적정가/현재가 비율 2.59배)",
      "currentPrice": 210.3300018310547,
      "fairPrice": 81.12498657534246,
      "ratio": 2.5926660910534247,
      "bandAggressiveLe": 64.89998926027397,
      "bandDcaHigh": 73.01248791780822,
      "bandFairHigh": 89.23748523287672,
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
      "epsUsedForCandidates": 2.704166219178082,
      "ttmEps": 0.9073809715790606,
      "diag": {
        "epsTtmNtmRatio": 0.33554925919267437,
        "candSpread": null,
        "fairAltExCappedGrowth": null,
        "fairAltGapPct": null,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": "WO8-B 분류 불가(이력 부족, 유효 4개년 <5년) - 필터 없음(원본 그대로) - 경기순환 여부 판단 안 함, NTM EPS 그대로 사용",
      "convertedFairPer": 30.0,
      "fairPriceBasis": "적정가 후보 1개(growth_per_peg)만 사용",
      "dispersionFlag": null,
      "qualityWarnings": [
        "과거 PER 이력 부족(0년치)",
        "WO8-B 분류 불가(이력 부족 - 유효 4개년 <5년; 필터 없음(원본 그대로))"
      ],
      "recentChanges": [
        {
          "date": "2026-10-24",
          "prevFairPrice": 80.77017698630138,
          "newFairPrice": 81.12498657534246,
          "changePct": 0.4392829163928387,
          "epsEffect": null,
          "perEffect": null,
          "otherEffect": 0.35480958904108206,
          "note": "기타(종목유형 변경: None -> 분류불가(이력부족))"
        }
      ],
      "nextUpdateDate": "2026-11-06"
    },
    "ANET": {
      "ticker": "ANET",
      "asOf": "2026-10-24",
      "verdict": "고평가",
      "action": "신규 추격 금지",
      "currentPrice": 172.3699951171875,
      "fairPrice": 146.68850932441728,
      "ratio": 1.175074966069584,
      "bandAggressiveLe": 117.35080745953383,
      "bandDcaHigh": 132.01965839197555,
      "bandFairHigh": 161.357360256859,
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
      "epsUsedForCandidates": 5.016399616438356,
      "ttmEps": 2.9988081858260336,
      "diag": {
        "epsTtmNtmRatio": 0.5978008960847476,
        "candSpread": 1.0532383156526508,
        "fairAltExCappedGrowth": 142.88503015568386,
        "fairAltGapPct": -2.592895098771242,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 29.241791033499467,
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
        },
        {
          "date": "2026-10-24",
          "prevFairPrice": 153.28131938704638,
          "newFairPrice": 146.68850932441728,
          "changePct": -4.301117767639889,
          "epsEffect": 0.3711284934775805,
          "perEffect": -6.963938556106672,
          "otherEffect": 0.0,
          "note": "EPS 5.0043->5.0164(적정PER 30.63배 유지 가정 시 +0.37) + 적정PER 30.63->29.24배(EPS 5.0164 유지 가정 시 -6.96)"
        }
      ],
      "nextUpdateDate": "2026-11-04"
    },
    "ETN": {
      "ticker": "ETN",
      "asOf": "2026-10-24",
      "verdict": "고평가",
      "action": "신규 추격 금지",
      "currentPrice": 366.1099853515625,
      "fairPrice": 327.5321596053731,
      "ratio": 1.1177833217741728,
      "bandAggressiveLe": 262.0257276842985,
      "bandDcaHigh": 294.7789436448358,
      "bandFairHigh": 360.28537556591044,
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
      "epsUsedForCandidates": 15.793808547945204,
      "ttmEps": 9.69316798168813,
      "diag": {
        "epsTtmNtmRatio": 0.6137321439767119,
        "candSpread": 1.3030436361310713,
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
        },
        {
          "date": "2026-10-24",
          "prevFairPrice": 328.90963748122084,
          "newFairPrice": 327.5321596053731,
          "changePct": -0.4188013116296613,
          "epsEffect": 1.0765016639427574,
          "perEffect": -2.4539795397904625,
          "otherEffect": 0.0,
          "note": "EPS 15.7423->15.7938(적정PER 20.89배 유지 가정 시 +1.08) + 적정PER 20.89->20.74배(EPS 15.7938 유지 가정 시 -2.45)"
        }
      ],
      "nextUpdateDate": "2026-11-04"
    },
    "HUBB": {
      "ticker": "HUBB",
      "asOf": "2026-10-24",
      "verdict": "적정",
      "action": "선별 매수",
      "currentPrice": 448.1000061035156,
      "fairPrice": 463.5578389736268,
      "ratio": 0.9666539284410837,
      "bandAggressiveLe": 370.8462711789015,
      "bandDcaHigh": 417.2020550762641,
      "bandFairHigh": 509.9136228709895,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±38% / 사업 위험으로 신뢰도 1단계 하향(보통→낮음): EPS 하향 수정이 상향보다 많음(방향은 혼조)",
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
      "epsUsedForCandidates": 22.574883534246574,
      "ttmEps": 17.264296929856933,
      "diag": {
        "epsTtmNtmRatio": 0.7647568548323463,
        "candSpread": 1.509766375843738,
        "fairAltExCappedGrowth": null,
        "fairAltGapPct": null,
        "fairAltApplicable": false,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 20.534229479873055,
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
        },
        {
          "date": "2026-10-24",
          "prevFairPrice": 451.8675605057078,
          "newFairPrice": 463.5578389736268,
          "changePct": 2.5871028349182335,
          "epsEffect": 0.5562993881699464,
          "perEffect": 11.133979079749048,
          "otherEffect": 0.0,
          "note": "EPS 22.5471->22.5749(적정PER 20.04배 유지 가정 시 +0.56) + 적정PER 20.04->20.53배(EPS 22.5749 유지 가정 시 +11.13)"
        }
      ],
      "nextUpdateDate": "2026-10-28"
    },
    "VRT": {
      "ticker": "VRT",
      "asOf": "2026-10-24",
      "verdict": "적정",
      "action": "선별 매수",
      "currentPrice": 194.32000732421875,
      "fairPrice": 212.46733824790095,
      "ratio": 0.9145876675759528,
      "bandAggressiveLe": 169.9738705983208,
      "bandDcaHigh": 191.22060442311087,
      "bandFairHigh": 233.71407207269107,
      "modelCheckNeeded": false,
      "confidence": "보통",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±23%",
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
      "epsUsedForCandidates": 8.736111561643837,
      "ttmEps": 4.472030417819512,
      "diag": {
        "epsTtmNtmRatio": 0.5119017066418997,
        "candSpread": 1.44661903432393,
        "fairAltExCappedGrowth": 196.81845358719323,
        "fairAltGapPct": -7.365313082827363,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 24.320584363957217,
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
        },
        {
          "date": "2026-10-24",
          "prevFairPrice": 210.77980863473834,
          "newFairPrice": 212.46733824790095,
          "changePct": 0.8006125558672182,
          "epsEffect": 0.6525579487272176,
          "perEffect": 1.0349716644353777,
          "otherEffect": 0.0,
          "note": "EPS 8.7091->8.7361(적정PER 24.20배 유지 가정 시 +0.65) + 적정PER 24.20->24.32배(EPS 8.7361 유지 가정 시 +1.03)"
        }
      ],
      "nextUpdateDate": "2026-10-29"
    },
    "MOD": {
      "ticker": "MOD",
      "asOf": "2026-10-24",
      "verdict": "매수",
      "action": "적극 모아가기",
      "currentPrice": 133.33999633789062,
      "fairPrice": 253.09062818926031,
      "ratio": 0.5268468346373515,
      "bandAggressiveLe": 202.47250255140827,
      "bandDcaHigh": 227.78156537033428,
      "bandFairHigh": 278.3996910081864,
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
      "epsUsedForCandidates": 8.681145205479453,
      "ttmEps": 2.6570803269219323,
      "diag": {
        "epsTtmNtmRatio": 0.30607486270875983,
        "candSpread": 1.0597665970046757,
        "fairAltExCappedGrowth": 245.746900214137,
        "fairAltGapPct": -2.90161987730011,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": "WO8-B 분류 불가(이력 부족, 유효 0개년 <5년) - corporate_events.json 기업분할/분리상장(2026-10-01) 이전 회계연도 8개 제외 - 경기순환 여부 판단 안 함, NTM EPS 그대로 사용",
      "convertedFairPer": 29.15406,
      "fairPriceBasis": "적정가 후보 2개 평균",
      "dispersionFlag": null,
      "qualityWarnings": [
        "과거 PER 이력 부족(0년치)",
        "WO8-B 분류 불가(이력 부족 - 유효 0개년 <5년; corporate_events.json 기업분할/분리상장(2026-10-01) 이전 회계연도 8개 제외)"
      ],
      "recentChanges": [
        {
          "date": "2026-10-24",
          "prevFairPrice": 248.96476718407726,
          "newFairPrice": 253.09062818926031,
          "changePct": 1.6572067814449076,
          "epsEffect": 4.125861005183045,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 8.5396->8.6811(적정PER 29.15배 유지 가정 시 +4.13) + 적정PER 29.15->29.15배(EPS 8.6811 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2026-11-04"
    },
    "PWR": {
      "ticker": "PWR",
      "asOf": "2026-10-24",
      "verdict": "고평가",
      "action": "신규 추격 금지",
      "currentPrice": 546.4299926757812,
      "fairPrice": 406.19799481538627,
      "ratio": 1.3452306502008442,
      "bandAggressiveLe": 324.958395852309,
      "bandDcaHigh": 365.57819533384765,
      "bandFairHigh": 446.81779429692494,
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
      "epsUsedForCandidates": 19.302905753424657,
      "ttmEps": 8.407546569401244,
      "diag": {
        "epsTtmNtmRatio": 0.4355585981094896,
        "candSpread": 1.5958542379210403,
        "fairAltExCappedGrowth": 384.53385494115156,
        "fairAltGapPct": -5.333394096167532,
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
        },
        {
          "date": "2026-10-24",
          "prevFairPrice": 468.64565766458895,
          "newFairPrice": 406.19799481538627,
          "changePct": -13.325134209159078,
          "epsEffect": 1.4450740360642909,
          "perEffect": -63.89273688526695,
          "otherEffect": 0.0,
          "note": "EPS 19.2436->19.3029(적정PER 24.35배 유지 가정 시 +1.45) + 적정PER 24.35->21.04배(EPS 19.3029 유지 가정 시 -63.89)"
        }
      ],
      "nextUpdateDate": "2026-10-30"
    },
    "EME": {
      "ticker": "EME",
      "asOf": "2026-10-24",
      "verdict": "매수",
      "action": "적극 모아가기",
      "currentPrice": 647.6599731445312,
      "fairPrice": 1058.3930781264648,
      "ratio": 0.6119276349491998,
      "bandAggressiveLe": 846.714462501172,
      "bandDcaHigh": 952.5537703138184,
      "bandFairHigh": 1164.2323859391115,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±45% (±40% 밖)",
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
      "epsUsedForCandidates": 37.118873342465754,
      "ttmEps": 32.08413494025806,
      "diag": {
        "epsTtmNtmRatio": 0.8643617667013693,
        "candSpread": 1.8981316962479393,
        "fairAltExCappedGrowth": 822.5287147165795,
        "fairAltGapPct": -22.28513850708521,
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
        },
        {
          "date": "2026-10-24",
          "prevFairPrice": 842.1104472681689,
          "newFairPrice": 1058.3930781264648,
          "changePct": 25.6834043040225,
          "epsEffect": 5.626353670478782,
          "perEffect": 210.65627718781724,
          "otherEffect": 0.0,
          "note": "EPS 36.8725->37.1189(적정PER 22.84배 유지 가정 시 +5.63) + 적정PER 22.84->28.51배(EPS 37.1189 유지 가정 시 +210.66)"
        }
      ],
      "nextUpdateDate": "2026-10-30"
    },
    "FIX": {
      "ticker": "FIX",
      "asOf": "2026-10-24",
      "verdict": "적정",
      "action": "선별 매수",
      "currentPrice": 1160.8599853515625,
      "fairPrice": 1223.4430456715572,
      "ratio": 0.9488467726050603,
      "bandAggressiveLe": 978.7544365372459,
      "bandDcaHigh": 1101.0987411044016,
      "bandFairHigh": 1345.787350238713,
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
      "epsUsedForCandidates": 58.13914915068493,
      "ttmEps": 37.024420737183014,
      "diag": {
        "epsTtmNtmRatio": 0.6368242617590291,
        "candSpread": 1.8712089564492695,
        "fairAltExCappedGrowth": 1077.7770289590026,
        "fairAltGapPct": -11.906236030186223,
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
        },
        {
          "date": "2026-10-24",
          "prevFairPrice": 1350.270339739177,
          "newFairPrice": 1223.4430456715572,
          "changePct": -9.392733464923635,
          "epsEffect": 2.8549294418765285,
          "perEffect": -129.6822235094962,
          "otherEffect": 0.0,
          "note": "EPS 58.0165->58.1391(적정PER 23.27배 유지 가정 시 +2.85) + 적정PER 23.27->21.04배(EPS 58.1391 유지 가정 시 -129.68)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "COHR": {
      "ticker": "COHR",
      "asOf": "2026-10-24",
      "verdict": "적정",
      "action": "선별 매수",
      "currentPrice": 209.2899932861328,
      "fairPrice": 221.61987492062042,
      "ratio": 0.9443647297477091,
      "bandAggressiveLe": 177.29589993649634,
      "bandDcaHigh": 199.4578874285584,
      "bandFairHigh": 243.78186241268247,
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
      "epsUsedForCandidates": 10.826772547945204,
      "ttmEps": 3.6017228741183756,
      "diag": {
        "epsTtmNtmRatio": 0.33266819434587097,
        "candSpread": 2.742422945093791,
        "fairAltExCappedGrowth": 118.43657340288473,
        "fairAltGapPct": -46.5586859277372,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 20.469615847123464,
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
        },
        {
          "date": "2026-10-24",
          "prevFairPrice": 229.52275895174597,
          "newFairPrice": 221.61987492062042,
          "changePct": -3.4431810018400073,
          "epsEffect": -0.3243229004792953,
          "perEffect": -7.578561130646255,
          "otherEffect": 0.0,
          "note": "EPS 10.8421->10.8268(적정PER 21.17배 유지 가정 시 -0.32) + 적정PER 21.17->20.47배(EPS 10.8268 유지 가정 시 -7.58)"
        }
      ],
      "nextUpdateDate": "2026-11-05"
    },
    "LITE": {
      "ticker": "LITE",
      "asOf": "2026-10-24",
      "verdict": "적정",
      "action": "선별 매수",
      "currentPrice": 756.1699829101562,
      "fairPrice": 788.319895890411,
      "ratio": 0.9592171742108053,
      "bandAggressiveLe": 630.6559167123288,
      "bandDcaHigh": 709.4879063013699,
      "bandFairHigh": 867.1518854794522,
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
      "epsUsedForCandidates": 26.277329863013698,
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
      "recentChanges": [
        {
          "date": "2026-10-24",
          "prevFairPrice": 784.723581369863,
          "newFairPrice": 788.319895890411,
          "changePct": 0.45829061416377737,
          "epsEffect": null,
          "perEffect": null,
          "otherEffect": 3.596314520547935,
          "note": "기타(종목유형 변경: None -> 이익훼손형)"
        }
      ],
      "nextUpdateDate": "2026-11-06"
    },
    "CEG": {
      "ticker": "CEG",
      "asOf": "2026-10-24",
      "verdict": "고평가",
      "action": "신규 추격 금지",
      "currentPrice": 253.4499969482422,
      "fairPrice": 226.59899383166857,
      "ratio": 1.1184956855391872,
      "bandAggressiveLe": 181.27919506533487,
      "bandDcaHigh": 203.93909444850172,
      "bandFairHigh": 249.25889321483544,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±68% (±40% 밖)",
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
      "epsUsedForCandidates": 13.084919589041096,
      "ttmEps": 9.712216314693523,
      "diag": {
        "epsTtmNtmRatio": 0.7422450133226431,
        "candSpread": 2.8300292858751974,
        "fairAltExCappedGrowth": null,
        "fairAltGapPct": null,
        "fairAltApplicable": false,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 17.317568693463745,
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
        },
        {
          "date": "2026-10-24",
          "prevFairPrice": 301.9524313143796,
          "newFairPrice": 226.59899383166857,
          "changePct": -24.95540014521571,
          "epsEffect": 0.539934163530922,
          "perEffect": -75.89337164624199,
          "otherEffect": 0.0,
          "note": "EPS 13.0616->13.0849(적정PER 23.12배 유지 가정 시 +0.54) + 적정PER 23.12->17.32배(EPS 13.0849 유지 가정 시 -75.89)"
        }
      ],
      "nextUpdateDate": "2026-11-10"
    },
    "VST": {
      "ticker": "VST",
      "asOf": "2026-10-24",
      "verdict": "고평가",
      "action": "신규 추격 금지",
      "currentPrice": 140.16000366210938,
      "fairPrice": 105.11940940072108,
      "ratio": 1.333340859325147,
      "bandAggressiveLe": 84.09552752057687,
      "bandDcaHigh": 94.60746846064897,
      "bandFairHigh": 115.6313503407932,
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
      "epsUsedForCandidates": 10.207274219178082,
      "ttmEps": 6.526142454944631,
      "diag": {
        "epsTtmNtmRatio": 0.6393619211956603,
        "candSpread": 3.102661021349489,
        "fairAltExCappedGrowth": 101.90738149589944,
        "fairAltGapPct": -3.0555992686157607,
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
        },
        {
          "date": "2026-10-24",
          "prevFairPrice": 202.47396174360244,
          "newFairPrice": 105.11940940072108,
          "changePct": -48.08250478457261,
          "epsEffect": 0.09004928902114552,
          "perEffect": -97.4446016319025,
          "otherEffect": 0.0,
          "note": "EPS 10.2027->10.2073(적정PER 19.85배 유지 가정 시 +0.09) + 적정PER 19.85->10.30배(EPS 10.2073 유지 가정 시 -97.44)"
        }
      ],
      "nextUpdateDate": "2026-11-09"
    },
    "GEV": {
      "ticker": "GEV",
      "asOf": "2026-10-24",
      "verdict": "고평가",
      "action": "신규 추격 금지",
      "currentPrice": 815.0,
      "fairPrice": 733.2077999999999,
      "ratio": 1.1115539141836737,
      "bandAggressiveLe": 586.56624,
      "bandDcaHigh": 659.8870199999999,
      "bandFairHigh": 806.5285799999999,
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
      "epsUsedForCandidates": 24.44026,
      "ttmEps": 35.237757581522445,
      "diag": {
        "epsTtmNtmRatio": 1.441791436814602,
        "candSpread": 2.9965271055833522,
        "fairAltExCappedGrowth": 1126.6867094728905,
        "fairAltGapPct": 53.66540146911838,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": "WO8-B 분류 불가(이력 부족, 유효 4개년 <5년) - 필터 없음(원본 그대로) - 경기순환 여부 판단 안 함, NTM EPS 그대로 사용",
      "convertedFairPer": 29.999999999999996,
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
        },
        {
          "date": "2026-10-24",
          "prevFairPrice": 1207.8201758933426,
          "newFairPrice": 733.2077999999999,
          "changePct": -39.294953451353315,
          "epsEffect": -2.2104254585256586,
          "perEffect": -472.40195043481714,
          "otherEffect": 0.0,
          "note": "EPS 24.4851->24.4403(적정PER 49.33배 유지 가정 시 -2.21) + 적정PER 49.33->30.00배(EPS 24.4403 유지 가정 시 -472.40)"
        }
      ],
      "nextUpdateDate": "2026-10-29"
    },
    "BE": {
      "ticker": "BE",
      "asOf": "2026-10-24",
      "verdict": "고평가",
      "action": "신규 추격 금지",
      "currentPrice": 193.3000030517578,
      "fairPrice": 141.15810657534246,
      "ratio": 1.3693864825863533,
      "bandAggressiveLe": 112.92648526027398,
      "bandDcaHigh": 127.04229591780822,
      "bandFairHigh": 155.27391723287673,
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
      "epsUsedForCandidates": 4.7052702191780815,
      "ttmEps": 0.7538775280608103,
      "diag": {
        "epsTtmNtmRatio": 0.16021981585416745,
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
        },
        {
          "date": "2026-10-24",
          "prevFairPrice": 134.9530594520548,
          "newFairPrice": 141.15810657534246,
          "changePct": 4.597929938366575,
          "epsEffect": 6.205047123287661,
          "perEffect": 1.67164778701266e-14,
          "otherEffect": 0.0,
          "note": "EPS 4.4984->4.7053(적정PER 30.00배 유지 가정 시 +6.21) + 적정PER 30.00->30.00배(EPS 4.7053 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "AAPL": {
      "ticker": "AAPL",
      "asOf": "2026-10-24",
      "verdict": "고평가",
      "action": "신규 추격 금지",
      "currentPrice": 347.7250061035156,
      "fairPrice": 215.33116618975,
      "ratio": 1.6148382617177677,
      "bandAggressiveLe": 172.2649329518,
      "bandDcaHigh": 193.79804957077502,
      "bandFairHigh": 236.86428280872502,
      "modelCheckNeeded": false,
      "confidence": "높음",
      "confidenceNote": "적정가 후보 모두 중앙값 ±15% 안",
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
      "ttmEps": 8.898570908436415,
      "diag": {
        "epsTtmNtmRatio": 0.9304770672128171,
        "candSpread": 1.2997293575792281,
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
      "asOf": "2026-10-24",
      "verdict": "적정",
      "action": "선별 매수",
      "currentPrice": 524.510009765625,
      "fairPrice": 540.7512681257477,
      "ratio": 0.9699653809108665,
      "bandAggressiveLe": 432.60101450059824,
      "bandDcaHigh": 486.676141313173,
      "bandFairHigh": 594.8263949383226,
      "modelCheckNeeded": false,
      "confidence": "높음",
      "confidenceNote": "적정가 후보 모두 중앙값 ±16% 안",
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
      "epsUsedForCandidates": 21.014330219178085,
      "ttmEps": 17.837382282856545,
      "diag": {
        "epsTtmNtmRatio": 0.8488199289158311,
        "candSpread": 1.3262214627439879,
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
        },
        {
          "date": "2026-10-24",
          "prevFairPrice": 539.1428121912329,
          "newFairPrice": 540.7512681257477,
          "changePct": 0.29833578379309267,
          "epsEffect": 1.1356177438356483,
          "perEffect": 0.4728381906791494,
          "otherEffect": 0.0,
          "note": "EPS 20.9702->21.0143(적정PER 25.71배 유지 가정 시 +1.14) + 적정PER 25.71->25.73배(EPS 21.0143 유지 가정 시 +0.47)"
        }
      ],
      "nextUpdateDate": "2026-10-29"
    },
    "GOOGL": {
      "ticker": "GOOGL",
      "asOf": "2026-10-24",
      "verdict": "매수",
      "action": "적극 모아가기",
      "currentPrice": 320.2099914550781,
      "fairPrice": 453.4809,
      "ratio": 0.7061157183358288,
      "bandAggressiveLe": 362.78472000000005,
      "bandDcaHigh": 408.13281,
      "bandFairHigh": 498.8289900000001,
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
      "epsUsedForCandidates": 15.11603,
      "ttmEps": 19.6172243568899,
      "diag": {
        "epsTtmNtmRatio": 1.2977762254302154,
        "candSpread": 1.331764354059705,
        "fairAltExCappedGrowth": 413.6206066338142,
        "fairAltGapPct": -8.78985054633742,
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
        },
        {
          "date": "2026-10-24",
          "prevFairPrice": 452.9214,
          "newFairPrice": 453.4809,
          "changePct": 0.1235313676942653,
          "epsEffect": 0.5595000000000283,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 15.0974->15.1160(적정PER 30.00배 유지 가정 시 +0.56) + 적정PER 30.00->30.00배(EPS 15.1160 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2026-10-29"
    },
    "META": {
      "ticker": "META",
      "asOf": "2026-10-24",
      "verdict": "매수",
      "action": "분할매수",
      "currentPrice": 642.6199951171875,
      "fairPrice": 775.6758663170301,
      "ratio": 0.8284645984519251,
      "bandAggressiveLe": 620.5406930536242,
      "bandDcaHigh": 698.1082796853271,
      "bandFairHigh": 853.2434529487332,
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
      "epsUsedForCandidates": 33.049928219178085,
      "ttmEps": 24.627305916240157,
      "diag": {
        "epsTtmNtmRatio": 0.7451545961890931,
        "candSpread": 1.6482283145137142,
        "fairAltExCappedGrowth": 688.6147848375465,
        "fairAltGapPct": -11.223899731837273,
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
        },
        {
          "date": "2026-10-24",
          "prevFairPrice": 778.3118080978614,
          "newFairPrice": 775.6758663170301,
          "changePct": -0.33867426311742393,
          "epsEffect": -2.635941780831233,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 33.1622->33.0499(적정PER 23.47배 유지 가정 시 -2.64) + 적정PER 23.47->23.47배(EPS 33.0499 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "AMZN": {
      "ticker": "AMZN",
      "asOf": "2026-10-24",
      "verdict": "매수",
      "action": "적극 모아가기",
      "currentPrice": 248.0,
      "fairPrice": 316.7736,
      "ratio": 0.7828935239552791,
      "bandAggressiveLe": 253.41888,
      "bandDcaHigh": 285.09624,
      "bandFairHigh": 348.45096,
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
      "epsUsedForCandidates": 10.55912,
      "ttmEps": 11.854967852960158,
      "diag": {
        "epsTtmNtmRatio": 1.122723091787967,
        "candSpread": 2.486102083588058,
        "fairAltExCappedGrowth": 427.6873371641693,
        "fairAltGapPct": 35.01356715463957,
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
        },
        {
          "date": "2026-10-24",
          "prevFairPrice": 317.0733,
          "newFairPrice": 316.7736,
          "changePct": -0.09452073069540382,
          "epsEffect": -0.29970000000000496,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 10.5691->10.5591(적정PER 30.00배 유지 가정 시 -0.30) + 적정PER 30.00->30.00배(EPS 10.5591 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2026-10-30"
    },
    "ORCL": {
      "ticker": "ORCL",
      "asOf": "2026-10-24",
      "verdict": "매수",
      "action": "적극 모아가기",
      "currentPrice": 126.16000366210938,
      "fairPrice": 215.2919446663169,
      "ratio": 0.5859950025424593,
      "bandAggressiveLe": 172.23355573305355,
      "bandDcaHigh": 193.76275019968523,
      "bandFairHigh": 236.82113913294862,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±29% / 사업 위험으로 신뢰도 1단계 하향(보통→낮음): 현금흐름 거부권 발동(3/3: FCF 2년 연속 악화(11.8B→-0.4B→-23.7B), 부채/자본 2.01, 발행주식수 +5.1%(3개분기))",
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
      "epsUsedForCandidates": 9.280362,
      "ttmEps": 6.238873465112028,
      "diag": {
        "epsTtmNtmRatio": 0.6722661750815354,
        "candSpread": 1.601968498891438,
        "fairAltExCappedGrowth": 194.54245631291843,
        "fairAltGapPct": -9.637837767482804,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 23.19865805518329,
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
        },
        {
          "date": "2026-10-24",
          "prevFairPrice": 249.1576057386983,
          "newFairPrice": 215.2919446663169,
          "changePct": -13.59206393558689,
          "epsEffect": 0.8251100415335597,
          "perEffect": -34.690771113914934,
          "otherEffect": 0.0,
          "note": "EPS 9.2497->9.2804(적정PER 26.94배 유지 가정 시 +0.83) + 적정PER 26.94->23.20배(EPS 9.2804 유지 가정 시 -34.69)"
        }
      ],
      "nextUpdateDate": "2026-12-09"
    },
    "CRM": {
      "ticker": "CRM",
      "asOf": "2026-10-24",
      "verdict": "매수",
      "action": "적극 모아가기",
      "currentPrice": 248.57000732421875,
      "fairPrice": 357.6808170886768,
      "ratio": 0.6949492269321026,
      "bandAggressiveLe": 286.14465367094147,
      "bandDcaHigh": 321.91273537980913,
      "bandFairHigh": 393.44889879754453,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±74% (±40% 밖)",
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
      "epsUsedForCandidates": 16.215836547945205,
      "ttmEps": 11.800254800625629,
      "diag": {
        "epsTtmNtmRatio": 0.7276994169086455,
        "candSpread": 1.9308445386070707,
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
        },
        {
          "date": "2026-10-24",
          "prevFairPrice": 493.9707976039363,
          "newFairPrice": 357.6808170886768,
          "changePct": -27.590695882499567,
          "epsEffect": -0.4240373592232774,
          "perEffect": -135.8659431560362,
          "otherEffect": 0.0,
          "note": "EPS 16.2298->16.2158(적정PER 30.44배 유지 가정 시 -0.42) + 적정PER 30.44->22.06배(EPS 16.2158 유지 가정 시 -135.87)"
        }
      ],
      "nextUpdateDate": "2026-12-02"
    },
    "PLTR": {
      "ticker": "PLTR",
      "asOf": "2026-10-24",
      "verdict": "고평가",
      "action": "신규 추격 금지 · 모델 점검 필요(적정가/현재가 비율 2.96배)",
      "currentPrice": 196.75,
      "fairPrice": 66.42510739726028,
      "ratio": 2.9619824146210565,
      "bandAggressiveLe": 53.14008591780822,
      "bandDcaHigh": 59.78259665753425,
      "bandFairHigh": 73.06761813698631,
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
      "epsUsedForCandidates": 2.2141702465753426,
      "ttmEps": 1.265064230541962,
      "diag": {
        "epsTtmNtmRatio": 0.5713491238980548,
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
        "과거 PER 이력 부족(0년치)"
      ],
      "recentChanges": [
        {
          "date": "2026-10-24",
          "prevFairPrice": 66.18452547945206,
          "newFairPrice": 66.42510739726028,
          "changePct": 0.3635017642951994,
          "epsEffect": null,
          "perEffect": null,
          "otherEffect": 0.24058191780821403,
          "note": "기타(종목유형 변경: None -> 고성장형)"
        }
      ],
      "nextUpdateDate": "2026-11-03"
    },
    "TSLA": {
      "ticker": "TSLA",
      "asOf": "2026-10-24",
      "verdict": "고평가",
      "action": "신규 추격 금지 · 모델 점검 필요(적정가/현재가 비율 8.75배)",
      "currentPrice": 372.2200012207031,
      "fairPrice": 42.55503512111548,
      "ratio": 8.746791070935116,
      "bandAggressiveLe": 34.04402809689238,
      "bandDcaHigh": 38.299531609003935,
      "bandFairHigh": 46.81053863322703,
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
        "growthPerPeg": 22.71749895,
        "growthPerPegEpsBasis": "NTM EPS"
      },
      "sectorPeerDisplay": {
        "basis": "forwardPE",
        "medianPer": null,
        "peers": [],
        "excluded": [],
        "note": "비교군 없음(peer_groups.json에 비교군 정의 자체가 없음)"
      },
      "epsUsedForCandidates": 2.1106528493150685,
      "ttmEps": 0.8094941938347414,
      "diag": {
        "epsTtmNtmRatio": 0.38352787105536174,
        "candSpread": 1.2902867441841204,
        "fairAltExCappedGrowth": null,
        "fairAltGapPct": null,
        "fairAltApplicable": false,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 20.162024813756126,
      "fairPriceBasis": "적정가 후보 2개 평균",
      "dispersionFlag": "최대/최소 2.02배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
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
        },
        {
          "date": "2026-10-24",
          "prevFairPrice": 45.44212549099997,
          "newFairPrice": 42.55503512111548,
          "changePct": -6.353334793849578,
          "epsEffect": 0.5665314063981586,
          "perEffect": -3.45362177628265,
          "otherEffect": 0.0,
          "note": "EPS 2.0847->2.1107(적정PER 21.80배 유지 가정 시 +0.57) + 적정PER 21.80->20.16배(EPS 2.1107 유지 가정 시 -3.45)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    }
  }
};
if (typeof window !== 'undefined') { window.PRICE_MAP_DATA = PRICE_MAP_DATA; }
