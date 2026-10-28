const PRICE_MAP_DATA = {
  "_meta": {
    "title": "WO17 가격지도(price_map) - 화면용 production 데이터",
    "as_of": "2026-10-29",
    "input_snapshot_hash": "a35f308cdd2f63d7a258aa76d7820a79f27096c5cbe52d56a14f5f750fc95c4d",
    "generated_by": "price_map_engine.py write_price_map_data_js()",
    "session_date": "2026-10-28",
    "session_date_source": "daily_run_arg(확정 종가 거래일)",
    "fxRates": {
      "EURUSD": {
        "rate": 1.1159,
        "asOf": "2026-10-28",
        "source": "Yahoo Finance chart API(query1.finance.yahoo.com)"
      },
      "TWDUSD": {
        "rate": 0.0309,
        "asOf": "2026-10-28",
        "source": "Yahoo Finance chart API(query1.finance.yahoo.com)"
      }
    },
    "ttmEpsRule": {
      "mode": "verified_quarterly_sum",
      "status": "applied",
      "changed": [
        "CEG"
      ],
      "changed_approved": [
        "CEG"
      ],
      "pending_approval": [],
      "auto_reverted": [],
      "quarterly_sum_count": 31,
      "fair_changed": [
        "AMAT",
        "LRCX",
        "KLAC",
        "ASML",
        "AVGO",
        "QCOM",
        "ANET",
        "HUBB",
        "COHR",
        "CEG",
        "GOOGL",
        "ORCL",
        "TSLA"
      ]
    },
    "biasFixModes": {
      "fair_basis": "ex_capped_growth_floor",
      "low_conf_cap": "on",
      "sector_per": "trimmed_mean"
    },
    "note": "142 엔진(computePriceValidity/pvIntegratedAction)과 완전히 독립된 산출물 - 기존 판정 로직을 전혀 안 건드림."
  },
  "tickers": {
    "AMAT": {
      "ticker": "AMAT",
      "asOf": "2026-10-29",
      "verdict": "적정",
      "action": "관망(적정가 근처)",
      "actionRaw": "관망(적정가 근처)",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": 553.7903293150684,
      "fairPriceB": 413.94156719005827,
      "fairBasisMode": "ex_capped_growth_floor_b",
      "candidateBadge": null,
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": "median",
      "sectorFewPeers": true,
      "currentPrice": 416.0,
      "fairPrice": 413.94156719005827,
      "ratio": 1.004972761793204,
      "bandAggressiveLe": 331.1532537520466,
      "bandDcaHigh": 372.54741047105244,
      "bandFairHigh": 455.33572390906414,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±40% (±40% 밖)",
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
        "note": "유효 비교군 3개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 18.459677643835615,
      "ttmEps": 11.6,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 12.453784783031718,
        "peTTM": 33.4035,
        "finnhubUpdated": "2026-10-28 17:27",
        "periods": "Q4'25~Q3'26",
        "endDates": [
          "2025-10-26",
          "2026-01-25",
          "2026-04-26",
          "2026-07-26"
        ],
        "secVerified": false,
        "quarterly": 11.6,
        "checks": [
          "분기 연속 OK",
          "최신성 OK(승인 근거 2026-07-26)",
          "역산 주식수 일관(±0.4%)",
          "공시 주식수 대조 +0.9%"
        ],
        "gapPct": 7.360213646825153,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "diag": {
        "epsTtmNtmRatio": 0.6283966721311451,
        "candSpread": 2.3425768680935435,
        "fairAltExCappedGrowth": 413.94156719005827,
        "fairAltGapPct": 0.0,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 22.424095110257195,
      "fairPriceBasis": "B안: 성장 PER 상한 후보 제외, 나머지 두 후보의 평균 (A안 상한 포함 $553.79, 낮은 쪽 적용)",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 247.67811393737793,
          "per": 21.351561546325684,
          "eps": 11.6,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "sector_per",
          "fairPrice": 580.2050204427386,
          "per": 31.43094,
          "eps": 18.459677643835615,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 553.7903293150684,
          "per": 30.0,
          "eps": 18.459677643835615,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": null,
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-10-27",
          "prevFairPrice": 551.4456526027396,
          "newFairPrice": 552.852458630137,
          "changePct": 0.2551123616184915,
          "epsEffect": 1.4068060273973517,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 18.3815->18.4284(적정PER 30.00배 유지 가정 시 +1.41) + 적정PER 30.00->30.00배(EPS 18.4284 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-10-28",
          "prevFairPrice": 552.852458630137,
          "newFairPrice": 553.3213939726027,
          "changePct": 0.08482106485111825,
          "epsEffect": 0.46893534246574836,
          "perEffect": -1.3105283234262845e-13,
          "otherEffect": 0.0,
          "note": "EPS 18.4284->18.4440(적정PER 30.00배 유지 가정 시 +0.47) + 적정PER 30.00->30.00배(EPS 18.4440 유지 가정 시 -0.00)"
        },
        {
          "date": "2026-10-29",
          "prevFairPrice": 553.3213939726027,
          "newFairPrice": 413.94156719005827,
          "changePct": -25.189668843609848,
          "epsEffect": 0.46893534246574825,
          "perEffect": -139.84876212501013,
          "otherEffect": 0.0,
          "note": "EPS 18.4440->18.4597(적정PER 30.00배 유지 가정 시 +0.47) + 적정PER 30.00->22.42배(EPS 18.4597 유지 가정 시 -139.85)"
        }
      ],
      "nextUpdateDate": "2026-11-13"
    },
    "LRCX": {
      "ticker": "LRCX",
      "asOf": "2026-10-29",
      "verdict": "적정",
      "action": "관망(적정가 근처)",
      "actionRaw": "관망(적정가 근처)",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": 313.95253726027397,
      "fairPriceB": 238.66384136547705,
      "fairBasisMode": "ex_capped_growth_floor_b",
      "candidateBadge": null,
      "lowConfidenceCapEligible": false,
      "sectorPerMethod": "median",
      "sectorFewPeers": true,
      "currentPrice": 253.82000732421875,
      "fairPrice": 238.66384136547705,
      "ratio": 1.0635042404078814,
      "bandAggressiveLe": 190.93107309238167,
      "bandDcaHigh": 214.79745722892935,
      "bandFairHigh": 262.5302255020248,
      "modelCheckNeeded": false,
      "confidence": "보통",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±34%",
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
        "note": "유효 비교군 3개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 10.465084575342466,
      "ttmEps": 6.71,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 7.203428519815494,
        "peTTM": 35.236,
        "finnhubUpdated": "2026-10-28 17:27",
        "periods": "Q4'25~Q3'26",
        "endDates": [
          "2025-12-28",
          "2026-03-29",
          "2026-06-28",
          "2026-09-27"
        ],
        "secVerified": false,
        "quarterly": 6.71,
        "checks": [
          "분기 연속 OK",
          "최신성 OK(승인 근거 2026-09-27)",
          "역산 주식수 일관(±0.6%)",
          "공시 주식수 대조 +0.6%"
        ],
        "gapPct": 7.353629207384427,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "diag": {
        "epsTtmNtmRatio": 0.6411797202107579,
        "candSpread": 2.037217876284806,
        "fairAltExCappedGrowth": 238.66384136547705,
        "fairAltGapPct": 0.0,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 22.80572504189885,
      "fairPriceBasis": "B안: 성장 PER 상한 후보 제외, 나머지 두 후보의 평균 (A안 상한 포함 $313.95, 낮은 쪽 적용)",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 157.15951313800122,
          "per": 23.421686011624622,
          "eps": 6.71,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "sector_per",
          "fairPrice": 320.1681695929529,
          "per": 30.59394,
          "eps": 10.465084575342466,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 313.95253726027397,
          "per": 30.0,
          "eps": 10.465084575342466,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": null,
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-10-27",
          "prevFairPrice": 312.4813528767123,
          "newFairPrice": 313.53744904109584,
          "changePct": 0.3379709395972165,
          "epsEffect": 1.0560961643835398,
          "perEffect": -3.713029280081721e-14,
          "otherEffect": 0.0,
          "note": "EPS 10.4160->10.4512(적정PER 30.00배 유지 가정 시 +1.06) + 적정PER 30.00->30.00배(EPS 10.4512 유지 가정 시 -0.00)"
        },
        {
          "date": "2026-10-28",
          "prevFairPrice": 313.53744904109584,
          "newFairPrice": 313.74499315068493,
          "changePct": 0.06619436058558052,
          "epsEffect": 0.20754410958906175,
          "perEffect": 3.715487096072026e-14,
          "otherEffect": 0.0,
          "note": "EPS 10.4512->10.4582(적정PER 30.00배 유지 가정 시 +0.21) + 적정PER 30.00->30.00배(EPS 10.4582 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-10-29",
          "prevFairPrice": 313.74499315068493,
          "newFairPrice": 238.66384136547705,
          "changePct": -23.930629467973063,
          "epsEffect": 0.20754410958906178,
          "perEffect": -75.28869589479692,
          "otherEffect": 0.0,
          "note": "EPS 10.4582->10.4651(적정PER 30.00배 유지 가정 시 +0.21) + 적정PER 30.00->22.81배(EPS 10.4651 유지 가정 시 -75.29)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "KLAC": {
      "ticker": "KLAC",
      "asOf": "2026-10-29",
      "verdict": "고평가",
      "action": "신규 추격 금지",
      "actionRaw": "신규 추격 금지",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": 176.62178219178082,
      "fairPriceB": 134.51993289255407,
      "fairBasisMode": "ex_capped_growth_floor_b",
      "candidateBadge": null,
      "lowConfidenceCapEligible": false,
      "sectorPerMethod": "median",
      "sectorFewPeers": true,
      "currentPrice": 158.77000427246094,
      "fairPrice": 134.51993289255407,
      "ratio": 1.1802712122914623,
      "bandAggressiveLe": 107.61594631404326,
      "bandDcaHigh": 121.06793960329867,
      "bandFairHigh": 147.9719261818095,
      "modelCheckNeeded": false,
      "confidence": "보통",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±34%",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "고성장형",
      "stockTypeReason": "다음 회계연도 성장률 45.3%(기준 30% 초과)",
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
        "note": "유효 비교군 3개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 5.887392739726027,
      "ttmEps": 3.667,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 3.826317997996369,
        "peTTM": 41.4942,
        "finnhubUpdated": "2026-10-28 17:27",
        "periods": "Q3'25~Q2'26",
        "endDates": [
          "2025-09-30",
          "2025-12-31",
          "2026-03-31",
          "2026-06-30"
        ],
        "secVerified": false,
        "quarterly": 3.667,
        "checks": [
          "분기 연속 OK",
          "최신성 OK(승인 근거 2026-06-30)",
          "역산 주식수 일관(±1.0%)",
          "공시 주식수 대조 +0.3%"
        ],
        "gapPct": 4.3446413415972,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "diag": {
        "epsTtmNtmRatio": 0.6228563580031601,
        "candSpread": 2.0255944130675156,
        "fairAltExCappedGrowth": 134.51993289255407,
        "fairAltGapPct": 0.0,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 22.848812511667774,
      "fairPriceBasis": "B안: 성장 PER 상한 후보 제외, 나머지 두 후보의 평균 (A안 상한 포함 $176.62, 낮은 쪽 적용)",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 88.92132554949444,
          "per": 24.249066143849046,
          "eps": 3.667,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "sector_per",
          "fairPrice": 180.1185402356137,
          "per": 30.59394,
          "eps": 5.887392739726027,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 176.62178219178082,
          "per": 30.0,
          "eps": 5.887392739726027,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": null,
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-10-27",
          "prevFairPrice": 175.54768849315067,
          "newFairPrice": 176.4120287671233,
          "changePct": 0.4923677898534982,
          "epsEffect": 0.8643402739726103,
          "perEffect": 2.0891380923530213e-14,
          "otherEffect": 0.0,
          "note": "EPS 5.8516->5.8804(적정PER 30.00배 유지 가정 시 +0.86) + 적정PER 30.00->30.00배(EPS 5.8804 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-10-28",
          "prevFairPrice": 176.4120287671233,
          "newFairPrice": 176.51690547945205,
          "changePct": 0.05944986465021105,
          "epsEffect": 0.10487671232874975,
          "perEffect": -2.0903800821212812e-14,
          "otherEffect": 0.0,
          "note": "EPS 5.8804->5.8839(적정PER 30.00배 유지 가정 시 +0.10) + 적정PER 30.00->30.00배(EPS 5.8839 유지 가정 시 -0.00)"
        },
        {
          "date": "2026-10-29",
          "prevFairPrice": 176.51690547945205,
          "newFairPrice": 134.51993289255407,
          "changePct": -23.79203990282209,
          "epsEffect": 0.10487671232877638,
          "perEffect": -42.10184929922676,
          "otherEffect": 0.0,
          "note": "EPS 5.8839->5.8874(적정PER 30.00배 유지 가정 시 +0.10) + 적정PER 30.00->22.85배(EPS 5.8874 유지 가정 시 -42.10)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "ASML": {
      "ticker": "ASML",
      "asOf": "2026-10-29",
      "verdict": "고평가",
      "action": "신규 추격 금지",
      "actionRaw": "신규 추격 금지",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": 1601.6598353424654,
      "fairPriceB": 1475.891436392962,
      "fairBasisMode": "ex_capped_growth_floor_b",
      "candidateBadge": null,
      "lowConfidenceCapEligible": false,
      "sectorPerMethod": "median",
      "sectorFewPeers": true,
      "currentPrice": 1662.8499755859375,
      "fairPrice": 1475.891436392962,
      "ratio": 1.1266749942325682,
      "bandAggressiveLe": 1180.7131491143698,
      "bandDcaHigh": 1328.3022927536658,
      "bandFairHigh": 1623.4805800322583,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "EPS 품질 경고: ADR 통화환산 적용(EUR->USD); WO8-B 분류 불가(이력 부족 - 유효 4개년 <5년; 필터 없음(원본 그대로))",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "분류불가(이력부족)",
      "stockTypeReason": "유효 연간 EPS 4개년(<5년 기준) - 필터 없음(원본 그대로)",
      "candidates": {
        "historicalPer": 32.612422173448564,
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
        "note": "유효 비교군 3개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 53.38866117808218,
      "ttmEps": 39.0565,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 31.71277752301315,
        "peTTM": 52.4347,
        "finnhubUpdated": "2026-10-28 17:27",
        "periods": "Q4'25~Q3'26",
        "endDates": [
          "2025-12-31",
          "2026-03-31",
          "2026-06-30",
          "2026-09-30"
        ],
        "secVerified": false,
        "quarterly": 39.0565,
        "checks": [
          "분기 연속 OK",
          "최신성 OK(승인 근거 2026-09-30)",
          "역산 주식수 일관(±0.8%)",
          "EUR35.00(보통주1주) x ADR비율1 x EURUSD=X(1.1159) = $39.06(ADR 1주)"
        ],
        "gapPct": -18.80281765387798,
        "gapPrevPct": 3.154315140263919,
        "gapCause": "period",
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "diag": {
        "epsTtmNtmRatio": 0.7315504666753845,
        "candSpread": 1.3174375030163523,
        "fairAltExCappedGrowth": 1475.891436392962,
        "fairAltGapPct": 0.0,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": "WO8-B 분류 불가(이력 부족, 유효 4개년 <5년) - 필터 없음(원본 그대로) - 경기순환 여부 판단 안 함, NTM EPS 그대로 사용",
      "convertedFairPer": 27.644286330200476,
      "fairPriceBasis": "B안: 성장 PER 상한 후보 제외, 나머지 두 후보의 평균 (A안 상한 포함 $1601.66, 낮은 쪽 적용)",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 1273.7270666172938,
          "per": 32.612422173448564,
          "eps": 39.0565,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "sector_per",
          "fairPrice": 1678.0558061686304,
          "per": 31.43094,
          "eps": 53.38866117808218,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 1601.6598353424654,
          "per": 30.0,
          "eps": 53.38866117808218,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": null,
      "qualityWarnings": [
        "ADR 통화환산 적용(EUR->USD)",
        "WO8-B 분류 불가(이력 부족 - 유효 4개년 <5년; 필터 없음(원본 그대로))"
      ],
      "recentChanges": [
        {
          "date": "2026-10-27",
          "prevFairPrice": 1595.6106476712328,
          "newFairPrice": 1599.2401602739724,
          "changePct": 0.22746856246145244,
          "epsEffect": 3.629512602739595,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 53.1870->53.3080(적정PER 30.00배 유지 가정 시 +3.63) + 적정PER 30.00->30.00배(EPS 53.3080 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-10-28",
          "prevFairPrice": 1599.2401602739724,
          "newFairPrice": 1600.449997808219,
          "changePct": 0.07565077242928635,
          "epsEffect": 1.2098375342466028,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 53.3080->53.3483(적정PER 30.00배 유지 가정 시 +1.21) + 적정PER 30.00->30.00배(EPS 53.3483 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-10-29",
          "prevFairPrice": 1600.449997808219,
          "newFairPrice": 1475.891436392962,
          "changePct": -7.782721208774852,
          "epsEffect": 1.2098375342463896,
          "perEffect": -125.76839894950335,
          "otherEffect": 0.0,
          "note": "EPS 53.3483->53.3887(적정PER 30.00배 유지 가정 시 +1.21) + 적정PER 30.00->27.64배(EPS 53.3887 유지 가정 시 -125.77)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "MU": {
      "ticker": "MU",
      "asOf": "2026-10-29",
      "verdict": "매수",
      "action": "분할매수",
      "actionRaw": "분할매수",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "a_kept_two_candidates",
      "candidateBadge": "후보 2개",
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": null,
      "sectorFewPeers": null,
      "currentPrice": 983.22998046875,
      "fairPrice": 1189.1185005410634,
      "ratio": 0.8268561796165549,
      "bandAggressiveLe": 951.2948004328508,
      "bandDcaHigh": 1070.2066504869572,
      "bandFairHigh": 1308.03035059517,
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
            "per": 63.1738505759318
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
      "epsUsedForCandidates": 53.57,
      "ttmEps": 74.21,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 79.53712458996999,
        "peTTM": 12.3619,
        "finnhubUpdated": "2026-10-28 17:27",
        "periods": "Q4'25~Q3'26",
        "endDates": [
          "2025-11-27",
          "2026-02-26",
          "2026-05-28",
          "2026-09-03"
        ],
        "secVerified": false,
        "quarterly": 74.21,
        "checks": [
          "분기 연속 OK",
          "최신성 OK(승인 근거 2026-09-03)",
          "역산 주식수 일관(±0.7%)",
          "공시 주식수 대조 +1.4%"
        ],
        "gapPct": 7.1784457485109865,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": {
        "ntm_eps_raw": 181.48340232876714,
        "normalized_eps": 53.57,
        "change_pct": -70.48214915931817,
        "fair_without_normalization": 3607.236698047507,
        "basis_without_normalization": "세 적정가 후보 중앙값",
        "candidates_without_normalization": [
          {
            "candidate": "historical_per",
            "fairPrice": 1068.2485878346959,
            "per": 14.394941218632205,
            "eps": 74.21,
            "epsBasis": "TTM EPS"
          },
          {
            "candidate": "sector_per",
            "fairPrice": 3607.236698047507,
            "per": 19.8764,
            "eps": 181.48340232876714,
            "epsBasis": "NTM EPS"
          },
          {
            "candidate": "growth_per_peg",
            "fairPrice": 5444.502069863014,
            "per": 30.0,
            "eps": 181.48340232876714,
            "epsBasis": "NTM EPS"
          }
        ],
        "note": "표시 전용 참고값 - 정상화 EPS 대신 NTM EPS, 정상화 기준 업종PER 대신 forwardPE 기준 업종PER, 과거PER 후보는 TTM EPS. 판정·행동에 쓰지 않음."
      },
      "diag": {
        "epsTtmNtmRatio": 1.3852902744073174,
        "candSpread": 2.0840654744160583,
        "fairAltExCappedGrowth": 771.1370010821272,
        "fairAltGapPct": -35.150533716257,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": "경기순환형(WO8-B 최종본: (A) EPS 30%+·매출 5%+ 동반 감소 2회(2019→2020 EPS -57%·매출 -8%, 2022→2023 EPS -169%·매출 -49%, 기준 2회 이상)) - NTM EPS(181.4834) 대신 정상화 EPS 53.5700(순이익률 사이클 중앙값 22% x NTM매출/주식수 243.5, 기준연수 8) 사용 - 업종PER·성장PER·과거PER 후보 전부 동일 기준 적용(item3)",
      "convertedFairPer": 22.1974706093161,
      "fairPriceBasis": "적정가 후보 2개 평균",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 771.1370010821272,
          "per": 14.394941218632205,
          "eps": 53.57,
          "epsBasis": "정상화 EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 1607.1,
          "per": 30.0,
          "eps": 53.57,
          "epsBasis": "NTM EPS(또는 정상화 EPS)"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": "최대/최소 2.08배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [
        "경기순환형(WO8-B 최종본, 39종목 적용) - 정상화 EPS 사용(과거PER 후보 포함)",
        "경기순환형(item2)인데 비교군 정상화 EPS 유효 비교군 부족 - 업종PER 후보를 비움(forwardPE 기준으로 섞어 쓰지 않음, 원래 forwardPE 기준 업종PER 19.8764는 참고용으로만 보관) - 업종 비교 불가(정상화기준 유효 비교군 1개 <3개)"
      ],
      "recentChanges": [
        {
          "date": "2026-10-27",
          "prevFairPrice": 1185.700090067229,
          "newFairPrice": 1189.1185005410634,
          "changePct": 0.28830313014825126,
          "epsEffect": 3.418410473834599,
          "perEffect": -1.9031887177334284e-13,
          "otherEffect": 0.0,
          "note": "EPS 53.4160->53.5700(적정PER 22.20배 유지 가정 시 +3.42) + 적정PER 22.20->22.20배(EPS 53.5700 유지 가정 시 -0.00)"
        }
      ],
      "nextUpdateDate": "2026-12-16"
    },
    "SNDK": {
      "ticker": "SNDK",
      "asOf": "2026-10-29",
      "verdict": "매수",
      "action": "분할매수 · 모델 점검 필요(적정가/현재가 비율 0.30배)",
      "actionRaw": "적극 모아가기 · 모델 점검 필요(적정가/현재가 비율 0.30배)",
      "actionCapReason": "low_confidence_cap",
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "a_kept_capped_not_used",
      "candidateBadge": null,
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": "median",
      "sectorFewPeers": true,
      "currentPrice": 1404.77001953125,
      "fairPrice": 4609.08255366262,
      "ratio": 0.3047830025120608,
      "bandAggressiveLe": 3687.266042930096,
      "bandDcaHigh": 4148.174298296358,
      "bandFairHigh": 5069.990809028882,
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
        "note": "유효 비교군 3개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 231.88719052054796,
      "ttmEps": 88.50561800462762,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 88.50561800462762,
        "peTTM": 15.8721,
        "finnhubUpdated": "2026-10-28 17:27",
        "periods": "Q4'25~Q3'26",
        "endDates": [
          "2025-10-03",
          "2026-01-02",
          "2026-04-03",
          "2026-07-03"
        ],
        "secVerified": true,
        "quarterly": 72.9,
        "checks": [
          "분기 연속 OK",
          "최신성 OK(승인 근거 2026-07-03)",
          "역산 주식수 일관(±5.1%)",
          "공시 주식수 대조 +7.2%",
          "Q3'26 EPS 43.97 크기 이례적 - SEC 대조 확인(GAAP 희석 EPS 맞음)"
        ],
        "gapPct": 21.406883408268328,
        "gapPrevPct": 207.6316232347154,
        "gapCause": "definition_unexplained",
        "source": "finnhub_peTTM(차이 원인 미확인 - 검증 전 유지)"
      },
      "normalizationSensitivity": null,
      "diag": {
        "epsTtmNtmRatio": 0.38167532154728906,
        "candSpread": 3.3224056092640186,
        "fairAltExCappedGrowth": 3351.4657848171773,
        "fairAltGapPct": -27.285620385472896,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": "WO8-B 분류 불가(이력 부족, 유효 4개년 <5년) - 필터 없음(원본 그대로) - 경기순환 여부 판단 안 함, NTM EPS 그대로 사용",
      "convertedFairPer": 19.8764,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 2093.8490159717353,
          "per": 23.657809110629067,
          "eps": 88.50561800462762,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "sector_per",
          "fairPrice": 4609.08255366262,
          "per": 19.8764,
          "eps": 231.88719052054796,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 6956.615715616439,
          "per": 30.0,
          "eps": 231.88719052054796,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": "최대/최소 1.51배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [
        "과거 PER 이력 부족(1년치)",
        "WO8-B 분류 불가(이력 부족 - 유효 4개년 <5년; 필터 없음(원본 그대로))"
      ],
      "recentChanges": [
        {
          "date": "2026-10-27",
          "prevFairPrice": 4595.067284712263,
          "newFairPrice": 4603.476446082476,
          "changePct": 0.1830040965491458,
          "epsEffect": 8.409161370213742,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 231.1821->231.6051(적정PER 19.88배 유지 가정 시 +8.41) + 적정PER 19.88->19.88배(EPS 231.6051 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-10-28",
          "prevFairPrice": 4603.476446082476,
          "newFairPrice": 4606.279499872548,
          "changePct": 0.06088993444197362,
          "epsEffect": 2.8030537900708703,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 231.6051->231.7462(적정PER 19.88배 유지 가정 시 +2.80) + 적정PER 19.88->19.88배(EPS 231.7462 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-10-29",
          "prevFairPrice": 4606.279499872548,
          "newFairPrice": 4609.08255366262,
          "changePct": 0.06085288116254745,
          "epsEffect": 2.8030537900720005,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 231.7462->231.8872(적정PER 19.88배 유지 가정 시 +2.80) + 적정PER 19.88->19.88배(EPS 231.8872 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2026-10-30"
    },
    "WDC": {
      "ticker": "WDC",
      "asOf": "2026-10-29",
      "verdict": "매수",
      "action": "분할매수",
      "actionRaw": "적극 모아가기",
      "actionCapReason": "low_confidence_cap",
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "a_kept_capped_not_used",
      "candidateBadge": null,
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": "median",
      "sectorFewPeers": true,
      "currentPrice": 396.4200134277344,
      "fairPrice": 642.5988744484697,
      "ratio": 0.6169011948051949,
      "bandAggressiveLe": 514.0790995587757,
      "bandDcaHigh": 578.3389870036227,
      "bandFairHigh": 706.8587618933167,
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
        "note": "유효 비교군 3개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 29.922820602739726,
      "ttmEps": 28.94675449278079,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 28.94675449278079,
        "peTTM": 13.6948,
        "finnhubUpdated": "2026-10-28 17:27",
        "periods": "Q1'26~Q4'26",
        "endDates": [
          "2026-01-02",
          "2026-04-03",
          "2026-07-03",
          "2026-10-02"
        ],
        "secVerified": false,
        "quarterly": 25.773367999999998,
        "checks": [
          "분기 연속 OK",
          "최신성 OK(승인 근거 2026-07-03)",
          "역산 주식수 일관(±1.9%)",
          "공시 주식수 대조 +2.6%"
        ],
        "gapPct": 12.312657363138534,
        "gapPrevPct": 19.548649707801037,
        "gapCause": "definition_unexplained",
        "source": "finnhub_peTTM(차이 원인 미확인 - 검증 전 유지)"
      },
      "normalizationSensitivity": null,
      "diag": {
        "epsTtmNtmRatio": 0.967380544671328,
        "candSpread": 3.558541567324048,
        "fairAltExCappedGrowth": 447.43040985710934,
        "fairAltGapPct": -30.371740809361004,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": "WO8-B 분류 불가(이력 부족, 유효 1개년 <5년) - corporate_events.json 기업분할/분리상장(2025-02-21) 이전 회계연도 7개 제외 - 경기순환 여부 판단 안 함, NTM EPS 그대로 사용",
      "convertedFairPer": 21.47521060864274,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 642.5988744484697,
          "per": 22.199341021416803,
          "eps": 28.94675449278079,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "sector_per",
          "fairPrice": 252.26194526574903,
          "per": 8.43042,
          "eps": 29.922820602739726,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 897.6846180821918,
          "per": 30.0,
          "eps": 29.922820602739726,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": "최대/최소 3.56배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [
        "과거 PER 이력 부족(1년치)",
        "WO8-B 분류 불가(이력 부족 - 유효 1개년 <5년; corporate_events.json 기업분할/분리상장(2025-02-21) 이전 회계연도 7개 제외)"
      ],
      "recentChanges": [
        {
          "date": "2026-10-27",
          "prevFairPrice": 508.47414903274864,
          "newFairPrice": 572.1517855024711,
          "changePct": 12.523279028216871,
          "epsEffect": 64.25858904989465,
          "perEffect": -0.5809525801722352,
          "otherEffect": 0.0,
          "note": "EPS 26.3203->29.6465(적정PER 19.32배 유지 가정 시 +64.26) + 적정PER 19.32->19.30배(EPS 29.6465 유지 가정 시 -0.58)"
        },
        {
          "date": "2026-10-28",
          "prevFairPrice": 572.1517855024711,
          "newFairPrice": 638.9496880271781,
          "changePct": 11.67485695531725,
          "epsEffect": 4.503005736497082,
          "perEffect": 62.29489678820999,
          "otherEffect": 0.0,
          "note": "EPS 29.6465->29.8799(적정PER 19.30배 유지 가정 시 +4.50) + 적정PER 19.30->21.38배(EPS 29.8799 유지 가정 시 +62.29)"
        },
        {
          "date": "2026-10-29",
          "prevFairPrice": 638.9496880271781,
          "newFairPrice": 642.5988744484697,
          "changePct": 0.5711226548304307,
          "epsEffect": 0.9186354799808925,
          "perEffect": 2.730550941310738,
          "otherEffect": 0.0,
          "note": "EPS 29.8799->29.9228(적정PER 21.38배 유지 가정 시 +0.92) + 적정PER 21.38->21.48배(EPS 29.9228 유지 가정 시 +2.73)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "STX": {
      "ticker": "STX",
      "asOf": "2026-10-29",
      "verdict": "고평가",
      "action": "신규 추격 금지 · 모델 점검 필요(적정가/현재가 비율 2.48배)",
      "actionRaw": "신규 추격 금지 · 모델 점검 필요(적정가/현재가 비율 2.48배)",
      "actionCapReason": null,
      "cashflowVeto": true,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "a_kept_two_candidates",
      "candidateBadge": "후보 2개",
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": null,
      "sectorFewPeers": null,
      "currentPrice": 697.969970703125,
      "fairPrice": 281.13853493158297,
      "ratio": 2.4826549333515624,
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
            "per": 18.35411574516987
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
      "ttmEps": 13.880251,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 14.6336906099896,
        "peTTM": 47.6961,
        "finnhubUpdated": "2026-10-28 17:28",
        "periods": "Q4'25~Q3'26",
        "endDates": [
          "2025-10-03",
          "2026-01-02",
          "2026-04-03",
          "2026-07-03"
        ],
        "secVerified": false,
        "quarterly": 13.880251,
        "checks": [
          "분기 연속 OK",
          "최신성 OK(승인 근거 2026-07-03)",
          "역산 주식수 일관(±2.6%)",
          "공시 주식수 대조 +2.3%"
        ],
        "gapPct": 5.42814110486618,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": {
        "ntm_eps_raw": 43.55044408219178,
        "normalized_eps": 11.0484,
        "change_pct": -74.63079830104924,
        "fair_without_normalization": 367.1485347993912,
        "basis_without_normalization": "세 적정가 후보 중앙값",
        "candidates_without_normalization": [
          {
            "candidate": "historical_per",
            "fairPrice": 289.98858719753787,
            "per": 20.892171704786744,
            "eps": 13.880251,
            "epsBasis": "TTM EPS"
          },
          {
            "candidate": "sector_per",
            "fairPrice": 367.1485347993912,
            "per": 8.43042,
            "eps": 43.55044408219178,
            "epsBasis": "NTM EPS"
          },
          {
            "candidate": "growth_per_peg",
            "fairPrice": 1306.5133224657534,
            "per": 30.0,
            "eps": 43.55044408219178,
            "epsBasis": "NTM EPS"
          }
        ],
        "note": "표시 전용 참고값 - 정상화 EPS 대신 NTM EPS, 정상화 기준 업종PER 대신 forwardPE 기준 업종PER, 과거PER 후보는 TTM EPS. 판정·행동에 쓰지 않음."
      },
      "diag": {
        "epsTtmNtmRatio": 1.2563132218239743,
        "candSpread": 1.4359445453498019,
        "fairAltExCappedGrowth": 230.82506986316588,
        "fairAltGapPct": -17.896324700084687,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": "경기순환형(WO8-B 최종본: (B) EPS 30%+·매출 5%+ 동반 감소 1회(2022→2023 EPS -135%·매출 -37%) + 이익 정점 의심(NTM EPS $36.66가 과거 8년 EPS 중앙값 $6.06의 3배 초과)) - NTM EPS(43.5504) 대신 정상화 EPS 11.0484(순이익률 사이클 중앙값 13.2% x NTM매출/주식수 83.7, 기준연수 8) 사용 - 업종PER·성장PER·과거PER 후보 전부 동일 기준 적용(item3)",
      "convertedFairPer": 25.446085852393374,
      "fairPriceBasis": "적정가 후보 2개 평균",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 230.82506986316588,
          "per": 20.892171704786744,
          "eps": 11.0484,
          "epsBasis": "정상화 EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 331.452,
          "per": 30.0,
          "eps": 11.0484,
          "epsBasis": "NTM EPS(또는 정상화 EPS)"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": null,
      "qualityWarnings": [
        "경기순환형(WO8-B 최종본, 39종목 적용) - 정상화 EPS 사용(과거PER 후보 포함)",
        "경기순환형(item2)인데 비교군 정상화 EPS 유효 비교군 부족 - 업종PER 후보를 비움(forwardPE 기준으로 섞어 쓰지 않음, 원래 forwardPE 기준 업종PER 8.43042는 참고용으로만 보관) - 업종 비교 불가(정상화기준 유효 비교군 1개 <3개)",
        "⚠ 사업 경고(현금흐름/EPS 하향): 현금흐름 거부권 발동(2/3: 부채/자본 1.65, 발행주식수 +3.9%(3개분기))"
      ],
      "recentChanges": [],
      "nextUpdateDate": "2027-01-01"
    },
    "NVDA": {
      "ticker": "NVDA",
      "asOf": "2026-10-29",
      "verdict": "매수",
      "action": "분할매수",
      "actionRaw": "분할매수",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "a_kept_two_candidates",
      "candidateBadge": "후보 2개",
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": null,
      "sectorFewPeers": null,
      "currentPrice": 215.3800048828125,
      "fairPrice": 248.51900462897802,
      "ratio": 0.8666540621485275,
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
            "per": 55.41013002560854
          }
        ],
        "excluded": [
          {
            "ticker": "AMD",
            "reason": "정상화기준 PER 308.8배 >80배 제외"
          },
          {
            "ticker": "MRVL",
            "reason": "정상화 EPS 산출 제한(사이클 중앙 순이익률(-9.3%)이 0 이하 - 정상화 모델 산출 제한)"
          }
        ],
        "note": "업종 비교 불가(정상화 비교군 부족) - 업종 비교 불가(정상화기준 유효 비교군 1개 <3개)"
      },
      "epsUsedForCandidates": 6.114639999999999,
      "ttmEps": 7.91,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 7.91651982191001,
        "peTTM": 27.2064,
        "finnhubUpdated": "2026-10-28 17:26",
        "periods": "Q4'25~Q3'26",
        "endDates": [
          "2025-10-26",
          "2026-01-25",
          "2026-04-26",
          "2026-07-26"
        ],
        "secVerified": false,
        "quarterly": 7.91,
        "checks": [
          "분기 연속 OK",
          "최신성 OK(승인 근거 2026-07-26)",
          "역산 주식수 일관(±1.2%)",
          "공시 주식수 대조 +0.7%"
        ],
        "gapPct": 0.08242505575233317,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": {
        "ntm_eps_raw": 14.214312547945205,
        "normalized_eps": 6.114639999999999,
        "change_pct": -56.98251336900623,
        "fair_without_normalization": 426.42937643835614,
        "basis_without_normalization": "세 적정가 후보 중앙값",
        "candidates_without_normalization": [
          {
            "candidate": "historical_per",
            "fairPrice": 405.6766352933996,
            "per": 51.28655313443737,
            "eps": 7.91,
            "epsBasis": "TTM EPS"
          },
          {
            "candidate": "sector_per",
            "fairPrice": 639.4993629557962,
            "per": 44.98982,
            "eps": 14.214312547945205,
            "epsBasis": "NTM EPS"
          },
          {
            "candidate": "growth_per_peg",
            "fairPrice": 426.42937643835614,
            "per": 30.0,
            "eps": 14.214312547945205,
            "epsBasis": "NTM EPS"
          }
        ],
        "note": "표시 전용 참고값 - 정상화 EPS 대신 NTM EPS, 정상화 기준 업종PER 대신 forwardPE 기준 업종PER, 과거PER 후보는 TTM EPS. 판정·행동에 쓰지 않음."
      },
      "diag": {
        "epsTtmNtmRatio": 1.2936166315596669,
        "candSpread": 1.7095517711479125,
        "fairAltExCappedGrowth": 313.5988092579561,
        "fairAltGapPct": 26.187053471479093,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": "경기순환형(WO8-B 최종본: (B) EPS 30%+·매출 5%+ 동반 감소 1회(2019→2020 EPS -32%·매출 -7%) + 이익 정점 의심(NTM EPS $9.31가 과거 8년 EPS 중앙값 $0.28의 3배 초과)) - NTM EPS(14.2143) 대신 정상화 EPS 6.1146(순이익률 사이클 중앙값 35.8% x NTM매출/주식수 17.08, 기준연수 8) 사용 - 업종PER·성장PER·과거PER 후보 전부 동일 기준 적용(item3)",
      "convertedFairPer": 40.643276567218685,
      "fairPriceBasis": "적정가 후보 2개 평균",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 313.5988092579561,
          "per": 51.28655313443737,
          "eps": 6.114639999999999,
          "epsBasis": "정상화 EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 183.43919999999997,
          "per": 30.0,
          "eps": 6.114639999999999,
          "epsBasis": "NTM EPS(또는 정상화 EPS)"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": "최대/최소 1.71배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [
        "경기순환형(WO8-B 최종본, 39종목 적용) - 정상화 EPS 사용(과거PER 후보 포함)",
        "경기순환형(item2)인데 비교군 정상화 EPS 유효 비교군 부족 - 업종PER 후보를 비움(forwardPE 기준으로 섞어 쓰지 않음, 원래 forwardPE 기준 업종PER 44.98982는 참고용으로만 보관) - 업종 비교 불가(정상화기준 유효 비교군 1개 <3개)"
      ],
      "recentChanges": [],
      "nextUpdateDate": "2026-11-26"
    },
    "AMD": {
      "ticker": "AMD",
      "asOf": "2026-10-29",
      "verdict": "고평가",
      "action": "신규 추격 금지 · 모델 점검 필요(적정가/현재가 비율 2.12배)",
      "actionRaw": "신규 추격 금지 · 모델 점검 필요(적정가/현재가 비율 2.12배)",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "a_kept_capped_not_used",
      "candidateBadge": null,
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": "median",
      "sectorFewPeers": true,
      "currentPrice": 578.4400024414062,
      "fairPrice": 272.65103242937096,
      "ratio": 2.12153974730042,
      "bandAggressiveLe": 218.12082594349678,
      "bandDcaHigh": 245.38592918643386,
      "bandFairHigh": 299.9161356723081,
      "modelCheckNeeded": true,
      "confidence": "낮음",
      "confidenceNote": "적정가/현재가 비율이 2배 초과 또는 0.5배 미만 - 모델 점검 필요로 강제 낮음",
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
        "note": "유효 비교군 3개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 14.346097835616437,
      "ttmEps": 3.8899999999999997,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 4.054095744344747,
        "peTTM": 142.6804,
        "finnhubUpdated": "2026-10-28 17:26",
        "periods": "Q3'25~Q2'26",
        "endDates": [
          "2025-09-27",
          "2025-12-27",
          "2026-03-28",
          "2026-06-27"
        ],
        "secVerified": false,
        "quarterly": 3.8899999999999997,
        "checks": [
          "분기 연속 OK",
          "최신성 OK(승인 근거 2026-06-27)",
          "역산 주식수 일관(±1.3%)",
          "공시 주식수 대조 +2.0%"
        ],
        "gapPct": 4.218399597551348,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "diag": {
        "epsTtmNtmRatio": 0.2711538736577179,
        "candSpread": 1.9456712596006496,
        "fairAltExCappedGrowth": 246.92563248428323,
        "fairAltGapPct": -9.435284259102072,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 19.00524,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 221.2002325391955,
          "per": 56.86381299208111,
          "eps": 3.8899999999999997,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "sector_per",
          "fairPrice": 272.65103242937096,
          "per": 19.00524,
          "eps": 14.346097835616437,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 430.3829350684931,
          "per": 30.0,
          "eps": 14.346097835616437,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": "최대/최소 2.99배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-10-27",
          "prevFairPrice": 270.63417865705975,
          "newFairPrice": 271.8004953495288,
          "changePct": 0.43095690952876625,
          "epsEffect": 1.166316692469026,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 14.2400->14.3013(적정PER 19.01배 유지 가정 시 +1.17) + 적정PER 19.01->19.01배(EPS 14.3013 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-10-28",
          "prevFairPrice": 271.8004953495288,
          "newFairPrice": 272.22576388944987,
          "changePct": 0.15646348965413287,
          "epsEffect": 0.42526853992110236,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 14.3013->14.3237(적정PER 19.01배 유지 가정 시 +0.43) + 적정PER 19.01->19.01배(EPS 14.3237 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-10-29",
          "prevFairPrice": 272.22576388944987,
          "newFairPrice": 272.65103242937096,
          "changePct": 0.1562190638553198,
          "epsEffect": 0.4252685399210686,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 14.3237->14.3461(적정PER 19.01배 유지 가정 시 +0.43) + 적정PER 19.01->19.01배(EPS 14.3461 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2026-11-04"
    },
    "AVGO": {
      "ticker": "AVGO",
      "asOf": "2026-10-29",
      "verdict": "매수",
      "action": "분할매수",
      "actionRaw": "적극 모아가기",
      "actionCapReason": "low_confidence_cap",
      "cashflowVeto": false,
      "fairPriceUpper": 582.6700084931507,
      "fairPriceB": 575.6695162138501,
      "fairBasisMode": "ex_capped_growth_floor_b",
      "candidateBadge": null,
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": "median",
      "sectorFewPeers": true,
      "currentPrice": 351.80999755859375,
      "fairPrice": 575.6695162138501,
      "ratio": 0.6111318866985188,
      "bandAggressiveLe": 460.5356129710801,
      "bandDcaHigh": 518.1025645924651,
      "bandFairHigh": 633.2364678352352,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±52% (±40% 밖) / 사업 위험으로 신뢰도 1단계 하향(낮음→낮음): EPS 하향 수정이 상향보다 많음(방향은 보합)",
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
        "note": "유효 비교군 3개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 19.422333616438358,
      "ttmEps": 7.83,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 8.225163833654268,
        "peTTM": 42.7724,
        "finnhubUpdated": "2026-10-28 17:26",
        "periods": "Q4'25~Q3'26",
        "endDates": [
          "2025-11-02",
          "2026-02-01",
          "2026-05-03",
          "2026-08-02"
        ],
        "secVerified": false,
        "quarterly": 7.83,
        "checks": [
          "분기 연속 OK",
          "최신성 OK(승인 근거 2026-08-02)",
          "역산 주식수 일관(±0.5%)",
          "공시 주식수 대조 +2.3%"
        ],
        "gapPct": 5.046792256120924,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "diag": {
        "epsTtmNtmRatio": 0.403144140896281,
        "candSpread": 3.148495002383783,
        "fairAltExCappedGrowth": 575.6695162138501,
        "fairAltGapPct": 0.0,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 29.639564821738222,
      "fairPriceBasis": "B안: 성장 PER 상한 후보 제외, 나머지 두 후보의 평균 (A안 상한 포함 $582.67, 낮은 쪽 적용)",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 277.53173904418946,
          "per": 35.44466654459635,
          "eps": 7.83,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "sector_per",
          "fairPrice": 873.8072933835108,
          "per": 44.98982,
          "eps": 19.422333616438358,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 582.6700084931507,
          "per": 30.0,
          "eps": 19.422333616438358,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": null,
      "qualityWarnings": [
        "⚠ 사업 경고(현금흐름/EPS 하향): EPS 하향 수정이 상향보다 많음(방향은 보합)"
      ],
      "recentChanges": [
        {
          "date": "2026-10-27",
          "prevFairPrice": 578.4732887671233,
          "newFairPrice": 580.3897364383563,
          "changePct": 0.33129406464340055,
          "epsEffect": 1.916447671232966,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 19.2824->19.3463(적정PER 30.00배 유지 가정 시 +1.92) + 적정PER 30.00->30.00배(EPS 19.3463 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-10-28",
          "prevFairPrice": 580.3897364383563,
          "newFairPrice": 582.028962739726,
          "changePct": 0.28243543923244774,
          "epsEffect": 1.639226301369803,
          "perEffect": -1.378521504922328e-13,
          "otherEffect": 0.0,
          "note": "EPS 19.3463->19.4010(적정PER 30.00배 유지 가정 시 +1.64) + 적정PER 30.00->30.00배(EPS 19.4010 유지 가정 시 -0.00)"
        },
        {
          "date": "2026-10-29",
          "prevFairPrice": 582.028962739726,
          "newFairPrice": 575.6695162138501,
          "changePct": -1.092634032495691,
          "epsEffect": 0.6410457534246915,
          "perEffect": -7.000492279300607,
          "otherEffect": 0.0,
          "note": "EPS 19.4010->19.4223(적정PER 30.00배 유지 가정 시 +0.64) + 적정PER 30.00->29.64배(EPS 19.4223 유지 가정 시 -7.00)"
        }
      ],
      "nextUpdateDate": "2026-12-10"
    },
    "MRVL": {
      "ticker": "MRVL",
      "asOf": "2026-10-29",
      "verdict": "고평가",
      "action": "신규 추격 금지 · 모델 점검 필요(적정가/현재가 비율 2.03배)",
      "actionRaw": "신규 추격 금지 · 모델 점검 필요(적정가/현재가 비율 2.03배)",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "a_kept_capped_not_used",
      "candidateBadge": null,
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": "median",
      "sectorFewPeers": true,
      "currentPrice": 251.64999389648438,
      "fairPrice": 124.07419100356603,
      "ratio": 2.028221919974088,
      "bandAggressiveLe": 99.25935280285283,
      "bandDcaHigh": 111.66677190320942,
      "bandFairHigh": 136.48161010392263,
      "modelCheckNeeded": true,
      "confidence": "낮음",
      "confidenceNote": "적정가/현재가 비율이 2배 초과 또는 0.5배 미만 - 모델 점검 필요로 강제 낮음",
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
        "note": "유효 비교군 3개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 6.528420109589041,
      "ttmEps": 3.0300000000000002,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 3.110357359199432,
        "peTTM": 80.9071,
        "finnhubUpdated": "2026-10-28 17:26",
        "periods": "Q4'25~Q3'26",
        "endDates": [
          "2025-11-01",
          "2026-01-31",
          "2026-05-02",
          "2026-08-01"
        ],
        "secVerified": true,
        "quarterly": 3.0300000000000002,
        "checks": [
          "분기 연속 OK",
          "최신성 OK(승인 근거 2026-08-01)",
          "역산 주식수 흔들림 8.4% - SEC 대조 확인(2026-10-26): 분기 EPS = SEC GAAP 희석 EPS(직접 일치 4개, FY 3.07 vs 3.08). 흔들림은 실제 주식수 증가(864M→921M)와 소액 EPS(0.04) 반올림",
          "공시 주식수 대조 +6.4%",
          "Q4'25 EPS 2.2 크기 이례적 - SEC 대조 확인(GAAP 희석 EPS 맞음)"
        ],
        "gapPct": 2.6520580593871967,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "diag": {
        "epsTtmNtmRatio": 0.4641245430191435,
        "candSpread": 6.291701320676624,
        "fairAltExCappedGrowth": 77.60145506888726,
        "fairAltGapPct": -37.4556026187131,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 19.00524,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 31.128719134208488,
          "per": 10.273504664755276,
          "eps": 3.0300000000000002,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "sector_per",
          "fairPrice": 124.07419100356603,
          "per": 19.00524,
          "eps": 6.528420109589041,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 195.85260328767123,
          "per": 30.0,
          "eps": 6.528420109589041,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": "최대/최소 2.92배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [
        "과거 PER 이력 부족(1년치)"
      ],
      "recentChanges": [
        {
          "date": "2026-10-27",
          "prevFairPrice": 123.264830728777,
          "newFairPrice": 123.75044689365042,
          "changePct": 0.39396165313521964,
          "epsEffect": 0.48561616487342407,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 6.4858->6.5114(적정PER 19.01배 유지 가정 시 +0.49) + 적정PER 19.01->19.01배(EPS 6.5114 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-10-28",
          "prevFairPrice": 123.75044689365042,
          "newFairPrice": 123.91231894860823,
          "changePct": 0.13080522860408111,
          "epsEffect": 0.16187205495781928,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 6.5114->6.5199(적정PER 19.01배 유지 가정 시 +0.16) + 적정PER 19.01->19.01배(EPS 6.5199 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-10-29",
          "prevFairPrice": 123.91231894860823,
          "newFairPrice": 124.07419100356603,
          "changePct": 0.1306343520412466,
          "epsEffect": 0.1618720549577855,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 6.5199->6.5284(적정PER 19.01배 유지 가정 시 +0.16) + 적정PER 19.01->19.01배(EPS 6.5284 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2026-11-27"
    },
    "TSM": {
      "ticker": "TSM",
      "asOf": "2026-10-29",
      "verdict": "매수",
      "action": "분할매수",
      "actionRaw": "분할매수",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "a_kept_capped_not_used",
      "candidateBadge": null,
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": "median",
      "sectorFewPeers": true,
      "currentPrice": 439.510009765625,
      "fairPrice": 527.327323215315,
      "ratio": 0.8334671662484043,
      "bandAggressiveLe": 421.861858572252,
      "bandDcaHigh": 474.5945908937835,
      "bandFairHigh": 580.0600555368466,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "EPS 품질 경고: ADR 통화환산 적용(TWD->USD); WO8-B 분류 불가(이력 부족 - 유효 4개년 <5년; 필터 없음(원본 그대로))",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "분류불가(이력부족)",
      "stockTypeReason": "유효 연간 EPS 4개년(<5년 기준) - 필터 없음(원본 그대로)",
      "candidates": {
        "historicalPer": 24.53155921734308,
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
        "note": "유효 비교군 3개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 22.37020810958904,
      "ttmEps": 15.1804862757,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 18.10553327781474,
        "peTTM": 24.2749,
        "finnhubUpdated": "2026-10-28 17:27",
        "periods": "Q4'25~Q3'26",
        "endDates": [
          "2025-12-31",
          "2026-03-31",
          "2026-06-30",
          "2026-09-30"
        ],
        "secVerified": false,
        "quarterly": 15.1804862757,
        "checks": [
          "분기 연속 OK",
          "최신성 OK(승인 근거 2026-09-30)",
          "역산 주식수 일관(±4.2%)",
          "TWD491.28(원천값이 이미 ADR 1주 기준, ADR비율 미적용) x TWDUSD=X(0.0309) = $15.18(ADR 1주)"
        ],
        "gapPct": 19.26846708986507,
        "gapPrevPct": 35.83855066159596,
        "gapCause": "fx_adr",
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "diag": {
        "epsTtmNtmRatio": 0.6786028185939339,
        "candSpread": 1.8021064574346577,
        "fairAltExCappedGrowth": 449.8641606178567,
        "fairAltGapPct": -14.689768420330651,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": "WO8-B 분류 불가(이력 부족, 유효 4개년 <5년) - 필터 없음(원본 그대로) - 경기순환 여부 판단 안 함, NTM EPS 그대로 사용",
      "convertedFairPer": 23.57275,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 372.40099802039845,
          "per": 24.53155921734308,
          "eps": 15.1804862757,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "sector_per",
          "fairPrice": 527.327323215315,
          "per": 23.57275,
          "eps": 22.37020810958904,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 671.1062432876712,
          "per": 30.0,
          "eps": 22.37020810958904,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": null,
      "qualityWarnings": [
        "ADR 통화환산 적용(TWD->USD)",
        "WO8-B 분류 불가(이력 부족 - 유효 4개년 <5년; 필터 없음(원본 그대로))"
      ],
      "recentChanges": [
        {
          "date": "2026-10-27",
          "prevFairPrice": 525.4282540381575,
          "newFairPrice": 526.567695544452,
          "changePct": 0.2168595802637835,
          "epsEffect": 1.1394415062945074,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 22.2896->22.3380(적정PER 23.57배 유지 가정 시 +1.14) + 적정PER 23.57->23.57배(EPS 22.3380 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-10-28",
          "prevFairPrice": 526.567695544452,
          "newFairPrice": 526.9475093798836,
          "changePct": 0.07213010571012933,
          "epsEffect": 0.37981383543158614,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 22.3380->22.3541(적정PER 23.57배 유지 가정 시 +0.38) + 적정PER 23.57->23.57배(EPS 22.3541 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-10-29",
          "prevFairPrice": 526.9475093798836,
          "newFairPrice": 527.327323215315,
          "changePct": 0.07207811568904576,
          "epsEffect": 0.37981383543141867,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 22.3541->22.3702(적정PER 23.57배 유지 가정 시 +0.38) + 적정PER 23.57->23.57배(EPS 22.3702 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "INTC": {
      "ticker": "INTC",
      "asOf": "2026-10-29",
      "verdict": "고평가",
      "action": "신규 추격 금지",
      "actionRaw": "신규 추격 금지",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "a_kept_two_candidates",
      "candidateBadge": "후보 2개",
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": "median",
      "sectorFewPeers": true,
      "currentPrice": 95.52999877929688,
      "fairPrice": 62.25501137400329,
      "ratio": 1.5344949213066676,
      "bandAggressiveLe": 49.80400909920263,
      "bandDcaHigh": 56.02951023660296,
      "bandFairHigh": 68.48051251140362,
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
        "note": "유효 비교군 3개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 2.4880661917808222,
      "ttmEps": null,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": null,
        "peTTM": null,
        "finnhubUpdated": "2026-10-28 17:27",
        "periods": "Q3'25~Q2'26",
        "endDates": [
          "2025-09-27",
          "2025-12-27",
          "2026-03-28",
          "2026-06-27"
        ],
        "secVerified": false,
        "quarterly": null,
        "checks": [
          "분기 연속 OK",
          "최신성 OK(승인 근거 2026-06-27)"
        ],
        "gapPct": null,
        "gapCause": null,
        "failReason": "분기별 역산 주식수 불일치(최대 13.1% - 분할·단위·기본/희석 섞임 의심)",
        "source": "없음(분기 검증 실패·peTTM 없음)"
      },
      "normalizationSensitivity": null,
      "diag": {
        "epsTtmNtmRatio": null,
        "candSpread": 1.4967901335585836,
        "fairAltExCappedGrowth": 49.86803699458192,
        "fairAltGapPct": -19.897152222823255,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 25.021444999999996,
      "fairPriceBasis": "적정가 후보 2개 평균",
      "fairPriceCandidates": [
        {
          "candidate": "sector_per",
          "fairPrice": 49.86803699458192,
          "per": 20.04289,
          "eps": 2.4880661917808222,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 74.64198575342466,
          "per": 30.0,
          "eps": 2.4880661917808222,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": "최대/최소 2.57배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [
        "EPS 일회성 정상화 적용",
        "TTM EPS 미확보(peTTM 없음) - 과거PER 후보가 적정가에 못 들어감"
      ],
      "recentChanges": [
        {
          "date": "2026-10-27",
          "prevFairPrice": 61.55789540728918,
          "newFairPrice": 61.83750902688562,
          "changePct": 0.45422868625773366,
          "epsEffect": 0.27961361959643527,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 2.4602->2.4714(적정PER 25.02배 유지 가정 시 +0.28) + 적정PER 25.02->25.02배(EPS 2.4714 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-10-28",
          "prevFairPrice": 61.83750902688562,
          "newFairPrice": 62.37911225705096,
          "changePct": 0.8758490416065525,
          "epsEffect": 0.541603230165347,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 2.4714->2.4930(적정PER 25.02배 유지 가정 시 +0.54) + 적정PER 25.02->25.02배(EPS 2.4930 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-10-29",
          "prevFairPrice": 62.37911225705096,
          "newFairPrice": 62.25501137400329,
          "changePct": -0.1989462154194841,
          "epsEffect": -0.12410088304766916,
          "perEffect": -8.839386793300798e-15,
          "otherEffect": 0.0,
          "note": "EPS 2.4930->2.4881(적정PER 25.02배 유지 가정 시 -0.12) + 적정PER 25.02->25.02배(EPS 2.4881 유지 가정 시 -0.00)"
        }
      ],
      "nextUpdateDate": "2026-10-30"
    },
    "QCOM": {
      "ticker": "QCOM",
      "asOf": "2026-10-29",
      "verdict": "고평가",
      "action": "신규 추격 금지",
      "actionRaw": "신규 추격 금지",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "median",
      "candidateBadge": null,
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": null,
      "sectorFewPeers": null,
      "currentPrice": 182.97000122070312,
      "fairPrice": 111.68829297569886,
      "ratio": 1.6382200528439783,
      "bandAggressiveLe": 89.35063438055909,
      "bandDcaHigh": 100.51946367812897,
      "bandFairHigh": 122.85712227326876,
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
      "epsUsedForCandidates": 10.18637,
      "ttmEps": 8.64,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 8.746050545197875,
        "peTTM": 20.9203,
        "finnhubUpdated": "2026-10-28 17:26",
        "periods": "Q3'25~Q2'26",
        "endDates": [
          "2025-09-28",
          "2025-12-28",
          "2026-03-29",
          "2026-06-28"
        ],
        "secVerified": false,
        "quarterly": 8.64,
        "checks": [
          "분기 연속 OK",
          "최신성 OK(승인 근거 2026-06-28)",
          "역산 주식수 일관(±0.9%)",
          "공시 주식수 대조 +2.0%"
        ],
        "gapPct": 1.227436865716136,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "diag": {
        "epsTtmNtmRatio": 0.8481922412007418,
        "candSpread": 1.9238624547821939,
        "fairAltExCappedGrowth": null,
        "fairAltGapPct": null,
        "fairAltApplicable": false,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 10.964484205433227,
      "fairPriceBasis": "적정가 후보 2개 평균",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 146.97881095139772,
          "per": 17.011436452708068,
          "eps": 8.64,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 76.397775,
          "per": 7.5,
          "eps": 10.18637,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": false,
      "dispersionFlag": "최대/최소 2.27배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [
        "⚠ 사업 경고(현금흐름/EPS 하향): EPS 수정 방향 하향(하향)"
      ],
      "recentChanges": [
        {
          "date": "2026-10-24",
          "prevFairPrice": 111.42683890013078,
          "newFairPrice": 112.4756837038872,
          "changePct": 0.9412856131514945,
          "epsEffect": 0.02580595630344606,
          "perEffect": 1.0230388474529792,
          "otherEffect": 0.0,
          "note": "EPS 10.1902->10.1925(적정PER 10.93배 유지 가정 시 +0.03) + 적정PER 10.93->11.04배(EPS 10.1925 유지 가정 시 +1.02)"
        },
        {
          "date": "2026-10-27",
          "prevFairPrice": 112.4756837038872,
          "newFairPrice": 111.68938047569887,
          "changePct": -0.6990873069582023,
          "epsEffect": -0.06488637966383197,
          "perEffect": -0.7214168485245054,
          "otherEffect": 0.0,
          "note": "EPS 10.1925->10.1867(적정PER 11.04배 유지 가정 시 -0.06) + 적정PER 11.04->10.96배(EPS 10.1867 유지 가정 시 -0.72)"
        },
        {
          "date": "2026-10-28",
          "prevFairPrice": 111.68938047569887,
          "newFairPrice": 111.68829297569886,
          "changePct": -0.000973682542941357,
          "epsEffect": -0.003179640857544756,
          "perEffect": 0.0020921408575352,
          "otherEffect": 0.0,
          "note": "EPS 10.1867->10.1864(적정PER 10.96배 유지 가정 시 -0.00) + 적정PER 10.96->10.96배(EPS 10.1864 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2026-11-05"
    },
    "ARM": {
      "ticker": "ARM",
      "asOf": "2026-10-29",
      "verdict": "고평가",
      "action": "신규 추격 금지 · 모델 점검 필요(적정가/현재가 비율 2.90배)",
      "actionRaw": "신규 추격 금지 · 모델 점검 필요(적정가/현재가 비율 2.90배)",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "a_kept_one_candidate",
      "candidateBadge": "후보 1개",
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": null,
      "sectorFewPeers": null,
      "currentPrice": 235.89999389648438,
      "fairPrice": 81.46898383561646,
      "ratio": 2.895580413430345,
      "bandAggressiveLe": 65.17518706849317,
      "bandDcaHigh": 73.32208545205481,
      "bandFairHigh": 89.6158822191781,
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
      "epsUsedForCandidates": 2.7156327945205483,
      "ttmEps": 1.0963668562410853,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 1.0963668562410853,
        "peTTM": 215.1652,
        "finnhubUpdated": "2026-10-28 17:26",
        "periods": "Q3'25~Q2'26",
        "endDates": [
          "2025-09-30",
          "2025-12-31",
          "2026-03-31",
          "2026-06-30"
        ],
        "secVerified": false,
        "quarterly": 0.97,
        "checks": [
          "분기 연속 OK",
          "최신성 OK(승인 근거 2026-06-30)",
          "역산 주식수 일관(±1.9%)"
        ],
        "gapPct": 13.027510952689214,
        "gapPrevPct": 30.51986383822445,
        "gapCause": "definition_unexplained",
        "source": "finnhub_peTTM(차이 원인 미확인 - 검증 전 유지)"
      },
      "normalizationSensitivity": null,
      "diag": {
        "epsTtmNtmRatio": 0.40372426583346355,
        "candSpread": null,
        "fairAltExCappedGrowth": null,
        "fairAltGapPct": null,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": "WO8-B 분류 불가(이력 부족, 유효 4개년 <5년) - 필터 없음(원본 그대로) - 경기순환 여부 판단 안 함, NTM EPS 그대로 사용",
      "convertedFairPer": 30.000000000000004,
      "fairPriceBasis": "적정가 후보 1개(growth_per_peg)만 사용",
      "fairPriceCandidates": [
        {
          "candidate": "growth_per_peg",
          "fairPrice": 81.46898383561646,
          "per": 30.0,
          "eps": 2.7156327945205483,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": null,
      "qualityWarnings": [
        "과거 PER 이력 부족(0년치)",
        "WO8-B 분류 불가(이력 부족 - 유효 4개년 <5년; 필터 없음(원본 그대로))"
      ],
      "recentChanges": [
        {
          "date": "2026-10-27",
          "prevFairPrice": 81.12498657534246,
          "newFairPrice": 81.33138493150686,
          "changePct": 0.25442020378359376,
          "epsEffect": 0.20639835616439228,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 2.7042->2.7110(적정PER 30.00배 유지 가정 시 +0.21) + 적정PER 30.00->30.00배(EPS 2.7110 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-10-28",
          "prevFairPrice": 81.33138493150686,
          "newFairPrice": 81.40018438356164,
          "changePct": 0.08459151668536752,
          "epsEffect": 0.06879945205477522,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 2.7110->2.7133(적정PER 30.00배 유지 가정 시 +0.07) + 적정PER 30.00->30.00배(EPS 2.7133 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-10-29",
          "prevFairPrice": 81.40018438356164,
          "newFairPrice": 81.46898383561646,
          "changePct": 0.08452001991866796,
          "epsEffect": 0.06879945205481519,
          "perEffect": 9.647865775692382e-15,
          "otherEffect": 0.0,
          "note": "EPS 2.7133->2.7156(적정PER 30.00배 유지 가정 시 +0.07) + 적정PER 30.00->30.00배(EPS 2.7156 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2026-11-06"
    },
    "ANET": {
      "ticker": "ANET",
      "asOf": "2026-10-29",
      "verdict": "고평가",
      "action": "신규 추격 금지",
      "actionRaw": "신규 추격 금지",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "a_kept_two_candidates",
      "candidateBadge": "후보 2개",
      "lowConfidenceCapEligible": false,
      "sectorPerMethod": null,
      "sectorFewPeers": null,
      "currentPrice": 186.72000122070312,
      "fairPrice": 150.99410506230907,
      "ratio": 1.2366045756796362,
      "bandAggressiveLe": 120.79528404984727,
      "bandDcaHigh": 135.89469455607818,
      "bandFairHigh": 166.09351556854,
      "modelCheckNeeded": false,
      "confidence": "높음",
      "confidenceNote": "적정가 후보 모두 중앙값 ±0% 안",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "고성장형",
      "stockTypeReason": "NTM PER 45.5배(기준 40 초과); 다음 회계연도 성장률 38.1%(기준 30% 초과)",
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
            "per": 50.867433593984416
          }
        ],
        "excluded": [],
        "note": "유효 비교군 2개 이하(최소 3개 기준 미달)"
      },
      "epsUsedForCandidates": 5.031545232876712,
      "ttmEps": 3.17,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 3.3784101862667613,
        "peTTM": 55.2686,
        "finnhubUpdated": "2026-10-28 17:27",
        "periods": "Q3'25~Q2'26",
        "endDates": [
          "2025-09-30",
          "2025-12-31",
          "2026-03-31",
          "2026-06-30"
        ],
        "secVerified": false,
        "quarterly": 3.17,
        "checks": [
          "분기 연속 OK",
          "최신성 OK(승인 근거 2026-06-30)",
          "역산 주식수 일관(±0.4%)",
          "공시 주식수 대조 +1.2%"
        ],
        "gapPct": 6.574453825449877,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "diag": {
        "epsTtmNtmRatio": 0.6300251420352628,
        "candSpread": 1.0006326495976583,
        "fairAltExCappedGrowth": 151.04185313831675,
        "fairAltGapPct": 0.03162247690926545,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 30.00948974396488,
      "fairPriceBasis": "적정가 후보 2개 평균",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 151.04185313831675,
          "per": 47.64727228338068,
          "eps": 3.17,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 150.94635698630137,
          "per": 30.0,
          "eps": 5.031545232876712,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": "최대/최소 1.59배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-10-27",
          "prevFairPrice": 146.68850932441728,
          "newFairPrice": 150.9032313636789,
          "changePct": 2.873246213130657,
          "epsEffect": 0.26573097057837786,
          "perEffect": 3.948991068683251,
          "otherEffect": 0.0,
          "note": "EPS 5.0164->5.0255(적정PER 29.24배 유지 가정 시 +0.27) + 적정PER 29.24->30.03배(EPS 5.0255 유지 가정 시 +3.95)"
        },
        {
          "date": "2026-10-28",
          "prevFairPrice": 150.9032313636789,
          "newFairPrice": 150.948668212994,
          "changePct": 0.030109924687813684,
          "epsEffect": 0.090957253208409,
          "perEffect": -0.045520403893331084,
          "otherEffect": 0.0,
          "note": "EPS 5.0255->5.0285(적정PER 30.03배 유지 가정 시 +0.09) + 적정PER 30.03->30.02배(EPS 5.0285 유지 가정 시 -0.05)"
        },
        {
          "date": "2026-10-29",
          "prevFairPrice": 150.948668212994,
          "newFairPrice": 150.99410506230907,
          "changePct": 0.030100861341133486,
          "epsEffect": 0.09092983221330299,
          "perEffect": -0.045492982898220485,
          "otherEffect": 0.0,
          "note": "EPS 5.0285->5.0315(적정PER 30.02배 유지 가정 시 +0.09) + 적정PER 30.02->30.01배(EPS 5.0315 유지 가정 시 -0.05)"
        }
      ],
      "nextUpdateDate": "2026-11-04"
    },
    "ETN": {
      "ticker": "ETN",
      "asOf": "2026-10-29",
      "verdict": "고평가",
      "action": "신규 추격 금지",
      "actionRaw": "신규 추격 금지",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "median",
      "candidateBadge": null,
      "lowConfidenceCapEligible": false,
      "sectorPerMethod": "median",
      "sectorFewPeers": true,
      "currentPrice": 392.8800048828125,
      "fairPrice": 328.29719615756625,
      "ratio": 1.1967205613728413,
      "bandAggressiveLe": 262.637756926053,
      "bandDcaHigh": 295.4674765418096,
      "bandFairHigh": 361.1269157733229,
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
            "per": 19.458328374079983
          }
        ],
        "excluded": [],
        "note": "유효 비교군 3개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 15.83069909589041,
      "ttmEps": 9.83,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 10.092685959504216,
        "peTTM": 38.9272,
        "finnhubUpdated": "2026-10-28 17:27",
        "periods": "Q3'25~Q2'26",
        "endDates": [
          "2025-09-30",
          "2025-12-31",
          "2026-03-31",
          "2026-06-30"
        ],
        "secVerified": false,
        "quarterly": 9.83,
        "checks": [
          "분기 연속 OK",
          "최신성 OK(승인 근거 2026-06-30)",
          "역산 주식수 일관(±0.3%)",
          "공시 주식수 대조 +0.2%"
        ],
        "gapPct": 2.6722884995342477,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "diag": {
        "epsTtmNtmRatio": 0.6209454137468782,
        "candSpread": 1.2879067093390761,
        "fairAltExCappedGrowth": null,
        "fairAltGapPct": null,
        "fairAltApplicable": false,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 20.73801,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 299.61276516709034,
          "per": 30.479426771830145,
          "eps": 9.83,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "sector_per",
          "fairPrice": 328.29719615756625,
          "per": 20.73801,
          "eps": 15.83069909589041,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 385.8732904623287,
          "per": 24.375,
          "eps": 15.83069909589041,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": false,
      "dispersionFlag": null,
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-10-27",
          "prevFairPrice": 327.5321596053731,
          "newFairPrice": 327.991181536689,
          "changePct": 0.14014560642500765,
          "epsEffect": 0.45902193131588814,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 15.7938->15.8159(적정PER 20.74배 유지 가정 시 +0.46) + 적정PER 20.74->20.74배(EPS 15.8159 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-10-28",
          "prevFairPrice": 327.991181536689,
          "newFairPrice": 328.1441888471277,
          "changePct": 0.04664982446229768,
          "epsEffect": 0.15300731043866622,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 15.8159->15.8233(적정PER 20.74배 유지 가정 시 +0.15) + 적정PER 20.74->20.74배(EPS 15.8233 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-10-29",
          "prevFairPrice": 328.1441888471277,
          "newFairPrice": 328.29719615756625,
          "changePct": 0.0466280725482691,
          "epsEffect": 0.15300731043859253,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 15.8233->15.8307(적정PER 20.74배 유지 가정 시 +0.15) + 적정PER 20.74->20.74배(EPS 15.8307 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2026-11-04"
    },
    "HUBB": {
      "ticker": "HUBB",
      "asOf": "2026-10-29",
      "verdict": "적정",
      "action": "관망(적정가 근처)",
      "actionRaw": "관망(적정가 근처)",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "median",
      "candidateBadge": null,
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": "median",
      "sectorFewPeers": true,
      "currentPrice": 437.3299865722656,
      "fairPrice": 458.0723307193263,
      "ratio": 0.9547181902157498,
      "bandAggressiveLe": 366.4578645754611,
      "bandDcaHigh": 412.2650976473937,
      "bandFairHigh": 503.879563791259,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±40% / 사업 위험으로 신뢰도 1단계 하향(보통→낮음): EPS 하향 수정이 상향보다 많음(방향은 혼조)",
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
        "growthPerPeg": 18.86249955,
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
            "per": 19.458328374079983
          }
        ],
        "excluded": [],
        "note": "유효 비교군 3개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 22.644715835616438,
      "ttmEps": 17.060000000000002,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 17.107259684410327,
        "peTTM": 25.564,
        "finnhubUpdated": "2026-10-28 17:27",
        "periods": "Q4'25~Q3'26",
        "endDates": [
          "2025-12-31",
          "2026-03-31",
          "2026-06-30",
          "2026-09-30"
        ],
        "secVerified": false,
        "quarterly": 17.060000000000002,
        "checks": [
          "분기 연속 OK",
          "최신성 OK(승인 근거 2026-06-30)",
          "역산 주식수 일관(±0.7%)",
          "공시 주식수 대조 +0.4%"
        ],
        "gapPct": 0.27702042444504027,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "diag": {
        "epsTtmNtmRatio": 0.7533766430916041,
        "candSpread": 1.5007618648293088,
        "fairAltExCappedGrowth": null,
        "fairAltGapPct": null,
        "fairAltApplicable": false,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 20.22866323625282,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 458.0723307193263,
          "per": 26.85066416877645,
          "eps": 17.060000000000002,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "sector_per",
          "fairPrice": 641.0293332405304,
          "per": 28.30812,
          "eps": 22.644715835616438,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 427.1359422591929,
          "per": 18.86249955,
          "eps": 22.644715835616438,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": false,
      "dispersionFlag": "최대/최소 1.50배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [
        "⚠ 사업 경고(현금흐름/EPS 하향): EPS 하향 수정이 상향보다 많음(방향은 혼조)"
      ],
      "recentChanges": [
        {
          "date": "2026-10-24",
          "prevFairPrice": 451.8675605057078,
          "newFairPrice": 463.5578389736268,
          "changePct": 2.5871028349182335,
          "epsEffect": 0.5562993881699464,
          "perEffect": 11.133979079749048,
          "otherEffect": 0.0,
          "note": "EPS 22.5471->22.5749(적정PER 20.04배 유지 가정 시 +0.56) + 적정PER 20.04->20.53배(EPS 22.5749 유지 가정 시 +11.13)"
        },
        {
          "date": "2026-10-27",
          "prevFairPrice": 463.5578389736268,
          "newFairPrice": 453.5077178106343,
          "changePct": -2.16804038633986,
          "epsEffect": 0.4274922783629455,
          "perEffect": -10.477613441355473,
          "otherEffect": 0.0,
          "note": "EPS 22.5749->22.5957(적정PER 20.53배 유지 가정 시 +0.43) + 적정PER 20.53->20.07배(EPS 22.5957 유지 가정 시 -10.48)"
        },
        {
          "date": "2026-10-29",
          "prevFairPrice": 453.5077178106343,
          "newFairPrice": 458.0723307193263,
          "changePct": 1.0065127294257024,
          "epsEffect": 0.9837325624101527,
          "perEffect": 3.5808803462818743,
          "otherEffect": 0.0,
          "note": "EPS 22.5957->22.6447(적정PER 20.07배 유지 가정 시 +0.98) + 적정PER 20.07->20.23배(EPS 22.6447 유지 가정 시 +3.58)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "VRT": {
      "ticker": "VRT",
      "asOf": "2026-10-29",
      "verdict": "적정",
      "action": "관망(적정가 근처)",
      "actionRaw": "관망(적정가 근처)",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "a_kept_capped_not_used",
      "candidateBadge": null,
      "lowConfidenceCapEligible": false,
      "sectorPerMethod": "median",
      "sectorFewPeers": true,
      "currentPrice": 242.94000244140625,
      "fairPrice": 244.1355577208179,
      "ratio": 0.9951029039334826,
      "bandAggressiveLe": 195.30844617665434,
      "bandDcaHigh": 219.7220019487361,
      "bandFairHigh": 268.5491134928997,
      "modelCheckNeeded": false,
      "confidence": "보통",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±26%",
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
            "per": 19.458328374079983
          }
        ],
        "excluded": [],
        "note": "유효 비교군 3개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 8.769815123287671,
      "ttmEps": 5.138585766650723,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 5.138585766650723,
        "peTTM": 47.2776,
        "finnhubUpdated": "2026-10-28 17:27",
        "periods": "Q3'25~Q2'26",
        "endDates": [
          "2025-09-30",
          "2025-12-31",
          "2026-03-31",
          "2026-06-30"
        ],
        "secVerified": false,
        "quarterly": 4.42,
        "checks": [
          "분기 연속 OK",
          "최신성 OK(승인 근거 2026-06-30)",
          "역산 주식수 일관(±0.9%)",
          "공시 주식수 대조 +1.8%"
        ],
        "gapPct": 16.25759653055936,
        "gapPrevPct": 29.110195141977968,
        "gapCause": "definition_unexplained",
        "source": "finnhub_peTTM(차이 원인 미확인 - 검증 전 유지)"
      },
      "normalizationSensitivity": null,
      "diag": {
        "epsTtmNtmRatio": 0.5859400334455791,
        "candSpread": 1.4466190343239296,
        "fairAltExCappedGrowth": 213.00203572285443,
        "fairAltGapPct": -12.752555296990497,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 27.83816469203916,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 244.1355577208179,
          "per": 47.510262318720216,
          "eps": 5.138585766650723,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "sector_per",
          "fairPrice": 181.86851372489096,
          "per": 20.73801,
          "eps": 8.769815123287671,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 263.0944536986301,
          "per": 30.0,
          "eps": 8.769815123287671,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": "최대/최소 2.29배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-10-24",
          "prevFairPrice": 210.77980863473834,
          "newFairPrice": 212.46733824790095,
          "changePct": 0.8006125558672182,
          "epsEffect": 0.6525579487272176,
          "perEffect": 1.0349716644353777,
          "otherEffect": 0.0,
          "note": "EPS 8.7091->8.7361(적정PER 24.20배 유지 가정 시 +0.65) + 적정PER 24.20->24.32배(EPS 8.7361 유지 가정 시 +1.03)"
        },
        {
          "date": "2026-10-27",
          "prevFairPrice": 212.46733824790095,
          "newFairPrice": 209.99535944874336,
          "changePct": -1.163462967787247,
          "epsEffect": 0.49181418859480974,
          "perEffect": -2.963792987752389,
          "otherEffect": 0.0,
          "note": "EPS 8.7361->8.7563(적정PER 24.32배 유지 가정 시 +0.49) + 적정PER 24.32->23.98배(EPS 8.7563 유지 가정 시 -2.96)"
        },
        {
          "date": "2026-10-29",
          "prevFairPrice": 209.99535944874336,
          "newFairPrice": 244.1355577208179,
          "changePct": 16.257596530559354,
          "epsEffect": 0.32331301139003116,
          "perEffect": 33.8168852606845,
          "otherEffect": 0.0,
          "note": "EPS 8.7563->8.7698(적정PER 23.98배 유지 가정 시 +0.32) + 적정PER 23.98->27.84배(EPS 8.7698 유지 가정 시 +33.82)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "MOD": {
      "ticker": "MOD",
      "asOf": "2026-10-29",
      "verdict": "매수",
      "action": "적극 모아가기",
      "actionRaw": "적극 모아가기",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "a_kept_two_candidates",
      "candidateBadge": "후보 2개",
      "lowConfidenceCapEligible": false,
      "sectorPerMethod": "median",
      "sectorFewPeers": true,
      "currentPrice": 143.5399932861328,
      "fairPrice": 253.53241523589696,
      "ratio": 0.5661603197862384,
      "bandAggressiveLe": 202.8259321887176,
      "bandDcaHigh": 228.17917371230726,
      "bandFairHigh": 278.88565675948666,
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
        "note": "유효 비교군 3개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 8.696298739726027,
      "ttmEps": 2.66,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 2.8279061847129303,
        "peTTM": 50.7584,
        "finnhubUpdated": "2026-10-28 17:27",
        "periods": "Q3'25~Q2'26",
        "endDates": [
          "2025-09-30",
          "2025-12-31",
          "2026-03-31",
          "2026-06-30"
        ],
        "secVerified": false,
        "quarterly": 2.66,
        "checks": [
          "분기 연속 OK",
          "최신성 OK(승인 근거 2026-06-30)",
          "역산 주식수 일관(±2.4%)",
          "공시 주식수 대조 +1.6%"
        ],
        "gapPct": 6.3122625831928625,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "diag": {
        "epsTtmNtmRatio": 0.3058772564756443,
        "candSpread": 1.0597665970046757,
        "fairAltExCappedGrowth": 246.17586828001313,
        "fairAltGapPct": -2.90161987730011,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": "WO8-B 분류 불가(이력 부족, 유효 0개년 <5년) - corporate_events.json 기업분할/분리상장(2026-10-01) 이전 회계연도 8개 제외 - 경기순환 여부 판단 안 함, NTM EPS 그대로 사용",
      "convertedFairPer": 29.15406,
      "fairPriceBasis": "적정가 후보 2개 평균",
      "fairPriceCandidates": [
        {
          "candidate": "sector_per",
          "fairPrice": 246.17586828001313,
          "per": 28.30812,
          "eps": 8.696298739726027,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 260.8889621917808,
          "per": 30.0,
          "eps": 8.696298739726027,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": null,
      "qualityWarnings": [
        "과거 PER 이력 부족(0년치)",
        "WO8-B 분류 불가(이력 부족 - 유효 0개년 <5년; corporate_events.json 기업분할/분리상장(2026-10-01) 이전 회계연도 8개 제외)"
      ],
      "recentChanges": [
        {
          "date": "2026-10-27",
          "prevFairPrice": 253.09062818926031,
          "newFairPrice": 253.98897260794524,
          "changePct": 0.3549496973128335,
          "epsEffect": 0.8983444186849335,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 8.6811->8.7120(적정PER 29.15배 유지 가정 시 +0.90) + 적정PER 29.15->29.15배(EPS 8.7120 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-10-28",
          "prevFairPrice": 253.98897260794524,
          "newFairPrice": 251.28214753304707,
          "changePct": -1.0657254317400637,
          "epsEffect": -2.706825074898144,
          "perEffect": -3.0621241870909984e-14,
          "otherEffect": 0.0,
          "note": "EPS 8.7120->8.6191(적정PER 29.15배 유지 가정 시 -2.71) + 적정PER 29.15->29.15배(EPS 8.6191 유지 가정 시 -0.00)"
        },
        {
          "date": "2026-10-29",
          "prevFairPrice": 251.28214753304707,
          "newFairPrice": 253.53241523589696,
          "changePct": 0.8955143550553886,
          "epsEffect": 2.2502677028498788,
          "perEffect": 3.089545948756021e-14,
          "otherEffect": 0.0,
          "note": "EPS 8.6191->8.6963(적정PER 29.15배 유지 가정 시 +2.25) + 적정PER 29.15->29.15배(EPS 8.6963 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2026-11-04"
    },
    "PWR": {
      "ticker": "PWR",
      "asOf": "2026-10-29",
      "verdict": "고평가",
      "action": "신규 추격 금지",
      "actionRaw": "신규 추격 금지",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "a_kept_capped_not_used",
      "candidateBadge": null,
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": "median",
      "sectorFewPeers": true,
      "currentPrice": 606.8900146484375,
      "fairPrice": 407.9253739010761,
      "ratio": 1.4877476457142655,
      "bandAggressiveLe": 326.3402991208609,
      "bandDcaHigh": 367.1328365109685,
      "bandFairHigh": 448.7179112911838,
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
            "per": 19.533521469072713
          }
        ],
        "excluded": [],
        "note": "유효 비교군 3개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 19.3849924109589,
      "ttmEps": 8.73,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 9.355465995095392,
        "peTTM": 64.8701,
        "finnhubUpdated": "2026-10-28 17:27",
        "periods": "Q3'25~Q2'26",
        "endDates": [
          "2025-09-30",
          "2025-12-31",
          "2026-03-31",
          "2026-06-30"
        ],
        "secVerified": false,
        "quarterly": 8.73,
        "checks": [
          "분기 연속 OK",
          "최신성 OK(승인 근거 2026-06-30)",
          "역산 주식수 일관(±0.6%)",
          "공시 주식수 대조 +1.4%"
        ],
        "gapPct": 7.164558935800591,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "diag": {
        "epsTtmNtmRatio": 0.45034838368389957,
        "candSpread": 1.543445163431207,
        "fairAltExCappedGrowth": 392.35608961472263,
        "fairAltGapPct": -3.81669915197016,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 21.04336,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 376.78680532836916,
          "per": 43.16000061035156,
          "eps": 8.73,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "sector_per",
          "fairPrice": 407.9253739010761,
          "per": 21.04336,
          "eps": 19.3849924109589,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 581.5497723287671,
          "per": 30.0,
          "eps": 19.3849924109589,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": "최대/최소 2.05배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-10-27",
          "prevFairPrice": 406.19799481538627,
          "newFairPrice": 406.9705253875068,
          "changePct": 0.19018571779795898,
          "epsEffect": 0.7725305721205435,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 19.3029->19.3396(적정PER 21.04배 유지 가정 시 +0.77) + 적정PER 21.04->21.04배(EPS 19.3396 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-10-28",
          "prevFairPrice": 406.9705253875068,
          "newFairPrice": 407.74198015388055,
          "changePct": 0.18956035345290984,
          "epsEffect": 0.7714547663737414,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 19.3396->19.3763(적정PER 21.04배 유지 가정 시 +0.77) + 적정PER 21.04->21.04배(EPS 19.3763 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-10-29",
          "prevFairPrice": 407.74198015388055,
          "newFairPrice": 407.9253739010761,
          "changePct": 0.04497789193213665,
          "epsEffect": 0.18339374719552945,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 19.3763->19.3850(적정PER 21.04배 유지 가정 시 +0.18) + 적정PER 21.04->21.04배(EPS 19.3850 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2026-10-30"
    },
    "EME": {
      "ticker": "EME",
      "asOf": "2026-10-29",
      "verdict": "매수",
      "action": "분할매수",
      "actionRaw": "적극 모아가기",
      "actionCapReason": "low_confidence_cap",
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "a_kept_capped_not_used",
      "candidateBadge": null,
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": "median",
      "sectorFewPeers": true,
      "currentPrice": 678.5499877929688,
      "fairPrice": 1060.13797825535,
      "ratio": 0.6400581827184857,
      "bandAggressiveLe": 848.11038260428,
      "bandDcaHigh": 954.1241804298149,
      "bandFairHigh": 1166.151776080885,
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
            "per": 19.533521469072713
          }
        ],
        "excluded": [],
        "note": "유효 비교군 3개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 37.180068684931506,
      "ttmEps": 32.15,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 33.22853711150787,
        "peTTM": 20.4207,
        "finnhubUpdated": "2026-10-28 17:28",
        "periods": "Q3'25~Q2'26",
        "endDates": [
          "2025-09-30",
          "2025-12-31",
          "2026-03-31",
          "2026-06-30"
        ],
        "secVerified": false,
        "quarterly": 32.15,
        "checks": [
          "분기 연속 OK",
          "최신성 OK(승인 근거 2026-06-30)",
          "역산 주식수 일관(±0.9%)",
          "공시 주식수 대조 +1.0%"
        ],
        "gapPct": 3.354703301735218,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "diag": {
        "epsTtmNtmRatio": 0.8647106134322416,
        "candSpread": 1.897365940598922,
        "fairAltExCappedGrowth": 824.0033421908109,
        "fairAltGapPct": -22.273953099307086,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 28.513610000000003,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 587.868706126272,
          "per": 18.28518526053723,
          "eps": 32.15,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "sector_per",
          "fairPrice": 1060.13797825535,
          "per": 28.51361,
          "eps": 37.180068684931506,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 1115.4020605479452,
          "per": 30.0,
          "eps": 37.180068684931506,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": "최대/최소 1.64배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-10-27",
          "prevFairPrice": 1058.3930781264648,
          "newFairPrice": 1059.4400182037957,
          "changePct": 0.0989178877836328,
          "epsEffect": 1.0469400773308435,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 37.1189->37.1556(적정PER 28.51배 유지 가정 시 +1.05) + 적정PER 28.51->28.51배(EPS 37.1556 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-10-28",
          "prevFairPrice": 1059.4400182037957,
          "newFairPrice": 1059.788998229573,
          "changePct": 0.0329400456638411,
          "epsEffect": 0.348980025777218,
          "perEffect": 1.3204665668964694e-13,
          "otherEffect": 0.0,
          "note": "EPS 37.1556->37.1678(적정PER 28.51배 유지 가정 시 +0.35) + 적정PER 28.51->28.51배(EPS 37.1678 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-10-29",
          "prevFairPrice": 1059.788998229573,
          "newFairPrice": 1060.13797825535,
          "changePct": 0.032929198770686376,
          "epsEffect": 0.3489800257768128,
          "perEffect": 1.320901385956983e-13,
          "otherEffect": 0.0,
          "note": "EPS 37.1678->37.1801(적정PER 28.51배 유지 가정 시 +0.35) + 적정PER 28.51->28.51배(EPS 37.1801 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2026-10-30"
    },
    "FIX": {
      "ticker": "FIX",
      "asOf": "2026-10-29",
      "verdict": "적정",
      "action": "관망(적정가 근처)",
      "actionRaw": "관망(적정가 근처)",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "a_kept_capped_not_used",
      "candidateBadge": null,
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": "median",
      "sectorFewPeers": true,
      "currentPrice": 1345.77001953125,
      "fairPrice": 1331.9839078579548,
      "ratio": 1.0103500587296625,
      "bandAggressiveLe": 1065.5871262863639,
      "bandDcaHigh": 1198.7855170721593,
      "bandFairHigh": 1465.1822986437505,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±43% (±40% 밖)",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "고성장형",
      "stockTypeReason": "다음 회계연도 성장률 76.6%(기준 30% 초과)",
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
            "per": 19.533521469072713
          }
        ],
        "excluded": [],
        "note": "유효 비교군 3개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 63.29711167123287,
      "ttmEps": 46.32,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 49.00926890625285,
        "peTTM": 27.4595,
        "finnhubUpdated": "2026-10-28 17:28",
        "periods": "Q4'25~Q3'26",
        "endDates": [
          "2025-12-31",
          "2026-03-31",
          "2026-06-30",
          "2026-09-30"
        ],
        "secVerified": false,
        "quarterly": 46.32,
        "checks": [
          "분기 연속 OK",
          "최신성 OK(승인 근거 2026-06-30)",
          "역산 주식수 일관(±0.4%)",
          "공시 주식수 대조 +0.5%"
        ],
        "gapPct": 5.805848243205625,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "diag": {
        "epsTtmNtmRatio": 0.7317869453599636,
        "candSpread": 1.6283855155430929,
        "fairAltExCappedGrowth": 1249.0582278584861,
        "fairAltGapPct": -6.225726865786729,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 21.04336,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 1166.1325478590172,
          "per": 25.175573140306934,
          "eps": 46.32,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "sector_per",
          "fairPrice": 1331.9839078579548,
          "per": 21.04336,
          "eps": 63.29711167123287,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 1898.913350136986,
          "per": 30.0,
          "eps": 63.29711167123287,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": null,
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-10-27",
          "prevFairPrice": 1223.4430456715572,
          "newFairPrice": 1244.5846787392875,
          "changePct": 1.7280439120176165,
          "epsEffect": 21.141633067730265,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 58.1391->59.1438(적정PER 21.04배 유지 가정 시 +21.14) + 적정PER 21.04->21.04배(EPS 59.1438 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-10-28",
          "prevFairPrice": 1244.5846787392875,
          "newFairPrice": 1331.1274269631037,
          "changePct": 6.953544399363848,
          "epsEffect": 86.54274822381632,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 59.1438->63.2564(적정PER 21.04배 유지 가정 시 +86.54) + 적정PER 21.04->21.04배(EPS 63.2564 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-10-29",
          "prevFairPrice": 1331.1274269631037,
          "newFairPrice": 1331.9839078579548,
          "changePct": 0.06434251729040623,
          "epsEffect": 0.8564808948511158,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 63.2564->63.2971(적정PER 21.04배 유지 가정 시 +0.86) + 적정PER 21.04->21.04배(EPS 63.2971 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "COHR": {
      "ticker": "COHR",
      "asOf": "2026-10-29",
      "verdict": "적정",
      "action": "관망(적정가 근처)",
      "actionRaw": "관망(적정가 근처)",
      "actionCapReason": null,
      "cashflowVeto": true,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "a_kept_two_candidates",
      "candidateBadge": "후보 2개",
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": null,
      "sectorFewPeers": null,
      "currentPrice": 239.58999633789062,
      "fairPrice": 230.86601328161947,
      "ratio": 1.0377880786013716,
      "bandAggressiveLe": 184.69281062529558,
      "bandDcaHigh": 207.77941195345753,
      "bandFairHigh": 253.95261460978145,
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
      "epsUsedForCandidates": 10.886053945205479,
      "ttmEps": 4.109999999999999,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 4.283762794393876,
        "peTTM": 55.9298,
        "finnhubUpdated": "2026-10-28 17:27",
        "periods": "Q3'25~Q2'26",
        "endDates": [
          "2025-09-30",
          "2025-12-31",
          "2026-03-31",
          "2026-06-30"
        ],
        "secVerified": true,
        "quarterly": 4.109999999999999,
        "checks": [
          "분기 연속 OK",
          "최신성 OK(승인 근거 2026-06-30)",
          "역산 주식수 흔들림 24.7% - SEC 대조 확인(2026-10-26): 분기 EPS = SEC GAAP 희석 EPS(직접 일치 3개, FY 4.12 vs 4.11). 순이익은 보통주 귀속(우선주 배당 차감) 기준이라 SEC NetIncomeLoss와 일부 분기 차이 - EPS와는 일치. 흔들림은 희석주식수 변화(전환우선주)",
          "공시 주식수 대조 +3.2%"
        ],
        "gapPct": 4.22780521639603,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "diag": {
        "epsTtmNtmRatio": 0.3775472747689403,
        "candSpread": 2.4164308690491194,
        "fairAltExCappedGrowth": 135.15040820707455,
        "fairAltGapPct": -41.45937451511637,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 21.207502226580395,
      "fairPriceBasis": "적정가 후보 2개 평균",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 135.15040820707455,
          "per": 32.88331099928821,
          "eps": 4.109999999999999,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 326.58161835616437,
          "per": 30.0,
          "eps": 10.886053945205479,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": null,
      "qualityWarnings": [
        "과거 PER 이력 부족(2년치)",
        "⚠ 사업 경고(현금흐름/EPS 하향): 현금흐름 거부권 발동(2/3: FCF 2년 연속 악화(0.2B→0.2B→-1.0B), 발행주식수 +4.5%(3개분기))"
      ],
      "recentChanges": [
        {
          "date": "2026-10-27",
          "prevFairPrice": 221.61987492062042,
          "newFairPrice": 230.53530150079752,
          "changePct": 4.022846138402712,
          "epsEffect": 0.7621645548290329,
          "perEffect": 8.153262025348072,
          "otherEffect": 0.0,
          "note": "EPS 10.8268->10.8640(적정PER 20.47배 유지 가정 시 +0.76) + 적정PER 20.47->21.22배(EPS 10.8640 유지 가정 시 +8.15)"
        },
        {
          "date": "2026-10-28",
          "prevFairPrice": 230.53530150079752,
          "newFairPrice": 230.68025204874277,
          "changePct": 0.06287564073771817,
          "epsEffect": 0.20505767244232637,
          "perEffect": -0.060107124497073026,
          "otherEffect": 0.0,
          "note": "EPS 10.8640->10.8737(적정PER 21.22배 유지 가정 시 +0.21) + 적정PER 21.22->21.21배(EPS 10.8737 유지 가정 시 -0.06)"
        },
        {
          "date": "2026-10-29",
          "prevFairPrice": 230.68025204874277,
          "newFairPrice": 230.86601328161947,
          "changePct": 0.08052758362577524,
          "epsEffect": 0.26272300312419883,
          "perEffect": -0.07696177024750119,
          "otherEffect": 0.0,
          "note": "EPS 10.8737->10.8861(적정PER 21.21배 유지 가정 시 +0.26) + 적정PER 21.21->21.21배(EPS 10.8861 유지 가정 시 -0.08)"
        }
      ],
      "nextUpdateDate": "2026-11-05"
    },
    "LITE": {
      "ticker": "LITE",
      "asOf": "2026-10-29",
      "verdict": "고평가",
      "action": "신규 추격 금지",
      "actionRaw": "신규 추격 금지",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "a_kept_one_candidate",
      "candidateBadge": "후보 1개",
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": null,
      "sectorFewPeers": null,
      "currentPrice": 913.9500122070312,
      "fairPrice": 792.2820073972603,
      "ratio": 1.1535665377653403,
      "bandAggressiveLe": 633.8256059178083,
      "bandDcaHigh": 713.0538066575342,
      "bandFairHigh": 871.5102081369863,
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
            "per": 24.983560797922735
          },
          {
            "ticker": "AAOI",
            "per": 31.88424
          }
        ],
        "excluded": [],
        "note": "유효 비교군 2개 이하(최소 3개 기준 미달)"
      },
      "epsUsedForCandidates": 26.40940024657534,
      "ttmEps": null,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": null,
        "peTTM": null,
        "finnhubUpdated": "2026-10-28 17:27",
        "periods": "Q3'25~Q2'26",
        "endDates": [
          "2025-09-27",
          "2025-12-27",
          "2026-03-28",
          "2026-06-27"
        ],
        "secVerified": false,
        "quarterly": null,
        "checks": [
          "분기 연속 OK",
          "최신성 OK(승인 근거 2026-06-27)"
        ],
        "gapPct": null,
        "gapCause": null,
        "failReason": "분기별 역산 주식수 불일치(최대 13.1% - 분할·단위·기본/희석 섞임 의심)",
        "source": "없음(분기 검증 실패·peTTM 없음)"
      },
      "normalizationSensitivity": null,
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
      "fairPriceCandidates": [
        {
          "candidate": "growth_per_peg",
          "fairPrice": 792.2820073972603,
          "per": 30.0,
          "eps": 26.40940024657534,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": null,
      "qualityWarnings": [
        "TTM EPS 미확보(peTTM 없음) - 과거PER 후보가 적정가에 못 들어감"
      ],
      "recentChanges": [
        {
          "date": "2026-10-27",
          "prevFairPrice": 788.319895890411,
          "newFairPrice": 791.8044863013698,
          "changePct": 0.44202745980716157,
          "epsEffect": 3.484590410958859,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 26.2773->26.3935(적정PER 30.00배 유지 가정 시 +3.48) + 적정PER 30.00->30.00배(EPS 26.3935 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-10-28",
          "prevFairPrice": 791.8044863013698,
          "newFairPrice": 794.0857273972603,
          "changePct": 0.28810661411460736,
          "epsEffect": 2.2812410958905005,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 26.3935->26.4695(적정PER 30.00배 유지 가정 시 +2.28) + 적정PER 30.00->30.00배(EPS 26.4695 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-10-29",
          "prevFairPrice": 794.0857273972603,
          "newFairPrice": 792.2820073972603,
          "changePct": -0.22714424120327306,
          "epsEffect": -1.8037200000000553,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 26.4695->26.4094(적정PER 30.00배 유지 가정 시 -1.80) + 적정PER 30.00->30.00배(EPS 26.4094 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2026-11-06"
    },
    "CEG": {
      "ticker": "CEG",
      "asOf": "2026-10-29",
      "verdict": "적정",
      "action": "관망(적정가 근처)",
      "actionRaw": "관망(적정가 근처)",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "median",
      "candidateBadge": null,
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": "median",
      "sectorFewPeers": true,
      "currentPrice": 258.0799865722656,
      "fairPrice": 239.3795197081423,
      "ratio": 1.0781205797677405,
      "bandAggressiveLe": 191.50361576651386,
      "bandDcaHigh": 215.44156773732809,
      "bandFairHigh": 263.31747167895657,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±60% (±40% 밖)",
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
        "growthPerPeg": 29.2575,
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
        "note": "유효 비교군 3개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 13.116242136986301,
      "ttmEps": 10.26,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 9.745670999462478,
        "peTTM": 26.4815,
        "finnhubUpdated": "2026-10-28 17:27",
        "periods": "Q3'25~Q2'26",
        "endDates": [
          "2025-09-30",
          "2025-12-31",
          "2026-03-31",
          "2026-06-30"
        ],
        "secVerified": true,
        "quarterly": 10.26,
        "checks": [
          "분기 연속 OK",
          "최신성 OK(승인 근거 2026-06-30)",
          "역산 주식수 흔들림 15.4% - SEC 대조 확인(2026-10-26): 분기 EPS = SEC GAAP 희석 EPS(직접 일치 4개, FY2025 7.40 = 7.40). 흔들림은 실제 주식 발행(313M→360M, 인수 대가)",
          "공시 주식수 대조 +2.0%"
        ],
        "gapPct": -5.012953221613281,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과 · 판정 변경 승인 2026-10-26 23:21)"
      },
      "normalizationSensitivity": null,
      "diag": {
        "epsTtmNtmRatio": 0.7822362451717764,
        "candSpread": 2.840953228049188,
        "fairAltExCappedGrowth": null,
        "fairAltGapPct": null,
        "fairAltApplicable": false,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 18.250617608920123,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 239.3795197081423,
          "per": 23.331337203522644,
          "eps": 10.26,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "sector_per",
          "fairPrice": 135.07735732291067,
          "per": 10.29848,
          "eps": 13.116242136986301,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 383.7484543228767,
          "per": 29.2575,
          "eps": 13.116242136986301,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": false,
      "dispersionFlag": "최대/최소 2.84배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
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
        },
        {
          "date": "2026-10-27",
          "prevFairPrice": 226.59899383166857,
          "newFairPrice": 239.3795197081423,
          "changePct": 5.640151202951896,
          "epsEffect": 0.1710240383312068,
          "perEffect": 12.609501838142535,
          "otherEffect": 0.0,
          "note": "EPS 13.0849->13.0948(적정PER 17.32배 유지 가정 시 +0.17) + 적정PER 17.32->18.28배(EPS 13.0948 유지 가정 시 +12.61)"
        }
      ],
      "nextUpdateDate": "2026-11-10"
    },
    "VST": {
      "ticker": "VST",
      "asOf": "2026-10-29",
      "verdict": "고평가",
      "action": "신규 추격 금지",
      "actionRaw": "신규 추격 금지",
      "actionCapReason": null,
      "cashflowVeto": true,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "a_kept_capped_not_used",
      "candidateBadge": null,
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": "median",
      "sectorFewPeers": true,
      "currentPrice": 142.72000122070312,
      "fairPrice": 105.2838402932537,
      "ratio": 1.3555736647065317,
      "bandAggressiveLe": 84.22707223460297,
      "bandDcaHigh": 94.75545626392834,
      "bandFairHigh": 115.81222432257908,
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
        "note": "유효 비교군 3개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 10.223240739726029,
      "ttmEps": 6.328176668427095,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 6.328176668427095,
        "peTTM": 22.5531,
        "finnhubUpdated": "2026-10-28 17:27",
        "periods": "Q3'25~Q2'26",
        "endDates": [
          "2025-09-30",
          "2025-12-31",
          "2026-03-31",
          "2026-06-30"
        ],
        "secVerified": false,
        "quarterly": null,
        "checks": [],
        "gapPct": null,
        "gapCause": null,
        "failReason": "분기 EPS 결측(Q4'25)",
        "source": "finnhub_peTTM(분기 검증 실패 - 임시)"
      },
      "normalizationSensitivity": null,
      "diag": {
        "epsTtmNtmRatio": 0.6189990854697102,
        "candSpread": 3.2047273703540387,
        "fairAltExCappedGrowth": 100.49267104496283,
        "fairAltGapPct": -4.5507166483913615,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 10.29848,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 95.70150179667196,
          "per": 15.123076805701622,
          "eps": 6.328176668427095,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "sector_per",
          "fairPrice": 105.2838402932537,
          "per": 10.29848,
          "eps": 10.223240739726029,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 306.69722219178084,
          "per": 30.0,
          "eps": 10.223240739726029,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": "최대/최소 2.91배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [
        "⚠ 사업 경고(현금흐름/EPS 하향): 현금흐름 거부권 발동(2/3: FCF 2년 연속 악화(3.8B→2.5B→1.3B), 부채/자본 3.74); EPS 수정 방향 하향(하향)"
      ],
      "recentChanges": [
        {
          "date": "2026-10-27",
          "prevFairPrice": 105.11940940072108,
          "newFairPrice": 105.19076686326576,
          "changePct": 0.06788229019881933,
          "epsEffect": 0.07135746254467065,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 10.2073->10.2142(적정PER 10.30배 유지 가정 시 +0.07) + 적정PER 10.30->10.30배(EPS 10.2142 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-10-28",
          "prevFairPrice": 105.19076686326576,
          "newFairPrice": 104.45005898774575,
          "changePct": -0.7041567407554309,
          "epsEffect": -0.7407078755200102,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 10.2142->10.1423(적정PER 10.30배 유지 가정 시 -0.74) + 적정PER 10.30->10.30배(EPS 10.1423 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-10-29",
          "prevFairPrice": 104.45005898774575,
          "newFairPrice": 105.2838402932537,
          "changePct": 0.7982583385671191,
          "epsEffect": 0.8337813055079574,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 10.1423->10.2232(적정PER 10.30배 유지 가정 시 +0.83) + 적정PER 10.30->10.30배(EPS 10.2232 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2026-11-09"
    },
    "GEV": {
      "ticker": "GEV",
      "asOf": "2026-10-29",
      "verdict": "고평가",
      "action": "신규 추격 금지",
      "actionRaw": "신규 추격 금지",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": 1195.5442406337006,
      "fairBasisMode": "a_kept_b_higher",
      "candidateBadge": null,
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": "median",
      "sectorFewPeers": true,
      "currentPrice": 878.030029296875,
      "fairPrice": 733.2077999999999,
      "ratio": 1.197518669737113,
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
        "note": "유효 비교군 3개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 24.44026,
      "ttmEps": 38.11,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 36.73320096293232,
        "peTTM": 23.9029,
        "finnhubUpdated": "2026-10-28 17:27",
        "periods": "Q4'25~Q3'26",
        "endDates": [
          "2025-12-31",
          "2026-03-31",
          "2026-06-30",
          "2026-09-30"
        ],
        "secVerified": false,
        "quarterly": 38.11,
        "checks": [
          "분기 연속 OK",
          "최신성 OK(승인 근거 2026-06-30)",
          "역산 주식수 일관(±2.0%)",
          "공시 주식수 대조 +1.4%"
        ],
        "gapPct": -3.612697552001254,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "diag": {
        "epsTtmNtmRatio": 1.5593123804738576,
        "candSpread": 3.240775118268682,
        "fairAltExCappedGrowth": 1195.5442406337006,
        "fairAltGapPct": 63.056672424065965,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": "WO8-B 분류 불가(이력 부족, 유효 4개년 <5년) - 필터 없음(원본 그대로) - 경기순환 여부 판단 안 함, NTM EPS 그대로 사용",
      "convertedFairPer": 29.999999999999996,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 1827.255593509001,
          "per": 47.94687991364474,
          "eps": 38.11,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "sector_per",
          "fairPrice": 563.8328877583999,
          "per": 23.06984,
          "eps": 24.44026,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 733.2077999999999,
          "per": 30.0,
          "eps": 24.44026,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
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
      "nextUpdateDate": "2027-01-01"
    },
    "BE": {
      "ticker": "BE",
      "asOf": "2026-10-29",
      "verdict": "고평가",
      "action": "신규 추격 금지",
      "actionRaw": "신규 추격 금지",
      "actionCapReason": null,
      "cashflowVeto": true,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "a_kept_one_candidate",
      "candidateBadge": "후보 1개",
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": null,
      "sectorFewPeers": null,
      "currentPrice": 228.0800018310547,
      "fairPrice": 148.70887232876711,
      "ratio": 1.533734996838743,
      "bandAggressiveLe": 118.96709786301369,
      "bandDcaHigh": 133.83798509589042,
      "bandFairHigh": 163.57975956164384,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "적정가 후보 부족(2개 미만) / 사업 위험으로 신뢰도 1단계 하향(낮음→낮음): 현금흐름 거부권 발동(2/3: 부채/자본 1.38, 발행주식수 +3.9%(3개분기))",
      "bizRiskBadge": true,
      "bizRiskDetail": [
        "현금흐름 거부권(2/3: 부채/자본 1.38, 발행주식수 +3.9%(3개분기))"
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
      "epsUsedForCandidates": 4.956962410958904,
      "ttmEps": 1.8221735205709926,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 1.8221735205709926,
        "peTTM": 125.1692,
        "finnhubUpdated": "2026-10-28 17:28",
        "periods": "Q4'25~Q3'26",
        "endDates": [
          "2025-12-31",
          "2026-03-31",
          "2026-06-30",
          "2026-09-30"
        ],
        "secVerified": false,
        "quarterly": 1.6300000000000001,
        "checks": [
          "분기 연속 OK",
          "최신성 OK(승인 근거 2026-06-30)",
          "역산 주식수 일관(±4.5%)",
          "공시 주식수 대조 +8.5%"
        ],
        "gapPct": 11.789786538097701,
        "gapPrevPct": 142.95646940946568,
        "gapCause": "definition_unexplained",
        "source": "finnhub_peTTM(차이 원인 미확인 - 검증 전 유지)"
      },
      "normalizationSensitivity": null,
      "diag": {
        "epsTtmNtmRatio": 0.3675988174819548,
        "candSpread": null,
        "fairAltExCappedGrowth": null,
        "fairAltGapPct": null,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 29.999999999999996,
      "fairPriceBasis": "적정가 후보 1개(growth_per_peg)만 사용",
      "fairPriceCandidates": [
        {
          "candidate": "growth_per_peg",
          "fairPrice": 148.70887232876711,
          "per": 30.0,
          "eps": 4.956962410958904,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": null,
      "qualityWarnings": [
        "과거 PER 이력 부족(0년치)",
        "⚠ 사업 경고(현금흐름/EPS 하향): 현금흐름 거부권 발동(2/3: 부채/자본 1.38, 발행주식수 +3.9%(3개분기))"
      ],
      "recentChanges": [
        {
          "date": "2026-10-27",
          "prevFairPrice": 141.15810657534246,
          "newFairPrice": 148.37256986301367,
          "changePct": 5.110909647842664,
          "epsEffect": 7.214463287671232,
          "perEffect": -3.514168390074078e-14,
          "otherEffect": 0.0,
          "note": "EPS 4.7053->4.9458(적정PER 30.00배 유지 가정 시 +7.21) + 적정PER 30.00->30.00배(EPS 4.9458 유지 가정 시 -0.00)"
        },
        {
          "date": "2026-10-28",
          "prevFairPrice": 148.37256986301367,
          "newFairPrice": 148.5407210958904,
          "changePct": 0.11333040401739045,
          "epsEffect": 0.16815123287673647,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 4.9458->4.9514(적정PER 30.00배 유지 가정 시 +0.17) + 적정PER 30.00->30.00배(EPS 4.9514 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-10-29",
          "prevFairPrice": 148.5407210958904,
          "newFairPrice": 148.70887232876711,
          "changePct": 0.11320211160693093,
          "epsEffect": 0.16815123287670983,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 4.9514->4.9570(적정PER 30.00배 유지 가정 시 +0.17) + 적정PER 30.00->30.00배(EPS 4.9570 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "AAPL": {
      "ticker": "AAPL",
      "asOf": "2026-10-29",
      "verdict": "고평가",
      "action": "신규 추격 금지",
      "actionRaw": "신규 추격 금지",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "median",
      "candidateBadge": null,
      "lowConfidenceCapEligible": false,
      "sectorPerMethod": "median",
      "sectorFewPeers": true,
      "currentPrice": 343.8299865722656,
      "fairPrice": 215.609239469,
      "ratio": 1.5946904103880069,
      "bandAggressiveLe": 172.4873915752,
      "bandDcaHigh": 194.04831552209998,
      "bandFairHigh": 237.1701634159,
      "modelCheckNeeded": false,
      "confidence": "높음",
      "confidenceNote": "적정가 후보 모두 중앙값 ±13% 안",
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
        "growthPerPeg": 20.115000374999997,
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
        "note": "유효 비교군 4개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 9.5758,
      "ttmEps": 8.719999999999999,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 8.778563243860026,
        "peTTM": 39.167,
        "finnhubUpdated": "2026-10-28 17:26",
        "periods": "Q3'25~Q2'26",
        "endDates": [
          "2025-09-27",
          "2025-12-27",
          "2026-03-28",
          "2026-06-27"
        ],
        "secVerified": false,
        "quarterly": 8.719999999999999,
        "checks": [
          "분기 연속 OK",
          "최신성 OK(승인 근거 2026-06-27)",
          "역산 주식수 일관(±0.9%)",
          "공시 주식수 대조 +1.0%"
        ],
        "gapPct": 0.6715968332571931,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "diag": {
        "epsTtmNtmRatio": 0.9106288769606716,
        "candSpread": 1.2644161749524352,
        "fairAltExCappedGrowth": null,
        "fairAltGapPct": null,
        "fairAltApplicable": false,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 22.516055,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 243.54832928954679,
          "per": 27.929854276324175,
          "eps": 8.719999999999999,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "sector_per",
          "fairPrice": 215.609239469,
          "per": 22.516055,
          "eps": 9.5758,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 192.61722059092497,
          "per": 20.115000374999997,
          "eps": 9.5758,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": false,
      "dispersionFlag": null,
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-10-27",
          "prevFairPrice": 215.33116618975,
          "newFairPrice": 215.13415070850002,
          "changePct": -0.09149417835613315,
          "epsEffect": -0.1970154812499808,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 9.5634->9.5547(적정PER 22.52배 유지 가정 시 -0.20) + 적정PER 22.52->22.52배(EPS 9.5547 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-10-28",
          "prevFairPrice": 215.13415070850002,
          "newFairPrice": 215.145408736,
          "changePct": 0.005233026677965999,
          "epsEffect": 0.011258027499973762,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 9.5547->9.5552(적정PER 22.52배 유지 가정 시 +0.01) + 적정PER 22.52->22.52배(EPS 9.5552 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-10-29",
          "prevFairPrice": 215.145408736,
          "newFairPrice": 215.609239469,
          "changePct": 0.21558941728063388,
          "epsEffect": 0.46383073299999894,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 9.5552->9.5758(적정PER 22.52배 유지 가정 시 +0.46) + 적정PER 22.52->22.52배(EPS 9.5758 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2026-11-03"
    },
    "MSFT": {
      "ticker": "MSFT",
      "asOf": "2026-10-29",
      "verdict": "적정",
      "action": "관망(적정가 근처)",
      "actionRaw": "관망(적정가 근처)",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "median",
      "candidateBadge": null,
      "lowConfidenceCapEligible": false,
      "sectorPerMethod": "median",
      "sectorFewPeers": true,
      "currentPrice": 531.010009765625,
      "fairPrice": 540.8884798158904,
      "ratio": 0.9817365863409998,
      "bandAggressiveLe": 432.7107838527123,
      "bandDcaHigh": 486.79963183430135,
      "bandFairHigh": 594.9773277974795,
      "modelCheckNeeded": false,
      "confidence": "높음",
      "confidenceNote": "적정가 후보 모두 중앙값 ±17% 안",
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
        "growthPerPeg": 25.679999999999996,
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
        "note": "유효 비교군 4개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 21.062635506849315,
      "ttmEps": 17.96,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 18.019702859195306,
        "peTTM": 29.4683,
        "finnhubUpdated": "2026-10-28 17:26",
        "periods": "Q3'25~Q2'26",
        "endDates": [
          "2025-09-30",
          "2025-12-31",
          "2026-03-31",
          "2026-06-30"
        ],
        "secVerified": false,
        "quarterly": 17.96,
        "checks": [
          "분기 연속 OK",
          "최신성 OK(승인 근거 2026-06-30)",
          "역산 주식수 일관(±0.3%)",
          "공시 주식수 대조 +0.1%"
        ],
        "gapPct": 0.33242126500725444,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "diag": {
        "epsTtmNtmRatio": 0.852694810873009,
        "candSpread": 1.3322756933789501,
        "fairAltExCappedGrowth": null,
        "fairAltGapPct": null,
        "fairAltApplicable": false,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 25.68,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 631.828362961446,
          "per": 35.179752948855565,
          "eps": 17.96,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "sector_per",
          "fairPrice": 474.2474595171721,
          "per": 22.516055,
          "eps": 21.062635506849315,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 540.8884798158904,
          "per": 25.679999999999996,
          "eps": 21.062635506849315,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": false,
      "dispersionFlag": "최대/최소 1.56배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-10-27",
          "prevFairPrice": 540.7512681257477,
          "newFairPrice": 540.3355000635615,
          "changePct": -0.07688711736678146,
          "epsEffect": 0.6889055750787374,
          "perEffect": -1.1046736372649533,
          "otherEffect": 0.0,
          "note": "EPS 21.0143->21.0411(적정PER 25.73배 유지 가정 시 +0.69) + 적정PER 25.73->25.68배(EPS 21.0411 유지 가정 시 -1.10)"
        },
        {
          "date": "2026-10-28",
          "prevFairPrice": 540.3355000635615,
          "newFairPrice": 540.611989939726,
          "changePct": 0.05117003715874573,
          "epsEffect": 0.27648987616445136,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 21.0411->21.0519(적정PER 25.68배 유지 가정 시 +0.28) + 적정PER 25.68->25.68배(EPS 21.0519 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-10-29",
          "prevFairPrice": 540.611989939726,
          "newFairPrice": 540.8884798158904,
          "changePct": 0.05114386682308794,
          "epsEffect": 0.2764898761643601,
          "perEffect": 7.482951327677268e-14,
          "otherEffect": 0.0,
          "note": "EPS 21.0519->21.0626(적정PER 25.68배 유지 가정 시 +0.28) + 적정PER 25.68->25.68배(EPS 21.0626 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "GOOGL": {
      "ticker": "GOOGL",
      "asOf": "2026-10-29",
      "verdict": "매수",
      "action": "적극 모아가기",
      "actionRaw": "적극 모아가기",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": 455.0157,
      "fairPriceB": 417.74663965534813,
      "fairBasisMode": "ex_capped_growth_floor_b",
      "candidateBadge": null,
      "lowConfidenceCapEligible": false,
      "sectorPerMethod": "median",
      "sectorFewPeers": true,
      "currentPrice": 324.8900146484375,
      "fairPrice": 417.74663965534813,
      "ratio": 0.7777202347252398,
      "bandAggressiveLe": 334.1973117242785,
      "bandDcaHigh": 375.97197568981335,
      "bandFairHigh": 459.521303620883,
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
        "note": "유효 비교군 4개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 15.16719,
      "ttmEps": 19.91,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 20.14259677289671,
        "peTTM": 16.1295,
        "finnhubUpdated": "2026-10-28 17:26",
        "periods": "Q3'25~Q2'26",
        "endDates": [
          "2025-09-30",
          "2025-12-31",
          "2026-03-31",
          "2026-06-30"
        ],
        "secVerified": false,
        "quarterly": 19.91,
        "checks": [
          "분기 연속 OK",
          "최신성 OK(승인 근거 2026-06-30)",
          "역산 주식수 일관(±1.0%)"
        ],
        "gapPct": 1.168240948752941,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "diag": {
        "epsTtmNtmRatio": 1.3127019573170773,
        "candSpread": 1.3470809836108326,
        "fairAltExCappedGrowth": 417.74663965534813,
        "fairAltGapPct": 0.0,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 27.54278410538459,
      "fairPriceBasis": "B안: 성장 PER 상한 후보 제외, 나머지 두 후보의 평균 (A안 상한 포함 $455.02, 낮은 쪽 적용)",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 479.5220601048963,
          "per": 24.0844831795528,
          "eps": 19.91,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "sector_per",
          "fairPrice": 355.97121920579997,
          "per": 23.46982,
          "eps": 15.16719,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 455.0157,
          "per": 30.0,
          "eps": 15.16719,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
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
        },
        {
          "date": "2026-10-29",
          "prevFairPrice": 453.4809,
          "newFairPrice": 417.74663965534813,
          "changePct": -7.8799923755668395,
          "epsEffect": 1.5347999999999828,
          "perEffect": -37.269060344651884,
          "otherEffect": 0.0,
          "note": "EPS 15.1160->15.1672(적정PER 30.00배 유지 가정 시 +1.53) + 적정PER 30.00->27.54배(EPS 15.1672 유지 가정 시 -37.27)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "META": {
      "ticker": "META",
      "asOf": "2026-10-29",
      "verdict": "매수",
      "action": "적극 모아가기",
      "actionRaw": "적극 모아가기",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "a_kept_capped_not_used",
      "candidateBadge": null,
      "lowConfidenceCapEligible": false,
      "sectorPerMethod": "median",
      "sectorFewPeers": true,
      "currentPrice": 612.489990234375,
      "fairPrice": 777.2882828175735,
      "ratio": 0.787983047955097,
      "bandAggressiveLe": 621.8306262540589,
      "bandDcaHigh": 699.5594545358161,
      "bandFairHigh": 855.0171110993309,
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
        "note": "유효 비교군 4개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 33.118629917808214,
      "ttmEps": 29.33,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 28.593769968552174,
        "peTTM": 21.4204,
        "finnhubUpdated": "2026-10-28 17:26",
        "periods": "Q4'25~Q3'26",
        "endDates": [
          "2025-12-31",
          "2026-03-31",
          "2026-06-30",
          "2026-09-30"
        ],
        "secVerified": false,
        "quarterly": 29.33,
        "checks": [
          "분기 연속 OK",
          "최신성 OK(승인 근거 2026-09-30)",
          "역산 주식수 일관(±0.4%)"
        ],
        "gapPct": -2.510160352703117,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "diag": {
        "epsTtmNtmRatio": 0.8856042678332224,
        "candSpread": 1.3868326392936814,
        "fairAltExCappedGrowth": 746.855676594557,
        "fairAltGapPct": -3.915227708399527,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 23.46982,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 716.4230703715406,
          "per": 24.426289477379495,
          "eps": 29.33,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "sector_per",
          "fairPrice": 777.2882828175735,
          "per": 23.46982,
          "eps": 33.118629917808214,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 993.5588975342464,
          "per": 30.0,
          "eps": 33.118629917808214,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": null,
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-10-27",
          "prevFairPrice": 775.6758663170301,
          "newFairPrice": 777.7735248826219,
          "changePct": 0.2704297834547389,
          "epsEffect": 2.097658565591721,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 33.0499->33.1393(적정PER 23.47배 유지 가정 시 +2.10) + 적정PER 23.47->23.47배(EPS 33.1393 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-10-28",
          "prevFairPrice": 777.7735248826219,
          "newFairPrice": 777.5061193986734,
          "changePct": -0.03438089307409973,
          "epsEffect": -0.26740548394855557,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 33.1393->33.1279(적정PER 23.47배 유지 가정 시 -0.27) + 적정PER 23.47->23.47배(EPS 33.1279 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-10-29",
          "prevFairPrice": 777.5061193986734,
          "newFairPrice": 777.2882828175735,
          "changePct": -0.02801734618736139,
          "epsEffect": -0.21783658109979703,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 33.1279->33.1186(적정PER 23.47배 유지 가정 시 -0.22) + 적정PER 23.47->23.47배(EPS 33.1186 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "AMZN": {
      "ticker": "AMZN",
      "asOf": "2026-10-29",
      "verdict": "매수",
      "action": "분할매수",
      "actionRaw": "분할매수",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": 442.3321917524266,
      "fairBasisMode": "a_kept_b_higher",
      "candidateBadge": null,
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": "median",
      "sectorFewPeers": true,
      "currentPrice": 254.60000610351562,
      "fairPrice": 316.38750000000005,
      "ratio": 0.8047094341701729,
      "bandAggressiveLe": 253.11000000000004,
      "bandDcaHigh": 284.74875000000003,
      "bandFairHigh": 348.02625000000006,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "EPS 품질 경고: 다음회계연도 대안 기준 사용",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "고성장형",
      "stockTypeReason": "다음 회계연도 성장률 80.1%(기준 30% 초과)",
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
        "note": "유효 비교군 4개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 10.54625,
      "ttmEps": 12.43,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 12.743635995691172,
        "peTTM": 19.9786,
        "finnhubUpdated": "2026-10-28 17:26",
        "periods": "Q3'25~Q2'26",
        "endDates": [
          "2025-09-30",
          "2025-12-31",
          "2026-03-31",
          "2026-06-30"
        ],
        "secVerified": false,
        "quarterly": 12.43,
        "checks": [
          "분기 연속 OK",
          "최신성 OK(승인 근거 2026-06-30)",
          "역산 주식수 일관(±0.3%)",
          "공시 주식수 대조 +1.0%"
        ],
        "gapPct": 2.5232179862523907,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "diag": {
        "epsTtmNtmRatio": 1.1786179921773141,
        "candSpread": 2.6098729664854643,
        "fairAltExCappedGrowth": 442.3321917524266,
        "fairAltGapPct": 39.807101024037465,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 30.000000000000004,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 639.5963737111032,
          "per": 51.45586272816599,
          "eps": 12.43,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "sector_per",
          "fairPrice": 245.06800979375,
          "per": 23.237455,
          "eps": 10.54625,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 316.38750000000005,
          "per": 30.0,
          "eps": 10.54625,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": "최대/최소 2.21배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [
        "다음회계연도 대안 기준 사용"
      ],
      "recentChanges": [
        {
          "date": "2026-10-24",
          "prevFairPrice": 317.0733,
          "newFairPrice": 316.7736,
          "changePct": -0.09452073069540382,
          "epsEffect": -0.29970000000000496,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 10.5691->10.5591(적정PER 30.00배 유지 가정 시 -0.30) + 적정PER 30.00->30.00배(EPS 10.5591 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-10-27",
          "prevFairPrice": 316.7736,
          "newFairPrice": 316.7625,
          "changePct": -0.0035040798854446835,
          "epsEffect": -0.011100000000006105,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 10.5591->10.5587(적정PER 30.00배 유지 가정 시 -0.01) + 적정PER 30.00->30.00배(EPS 10.5587 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-10-28",
          "prevFairPrice": 316.7625,
          "newFairPrice": 316.38750000000005,
          "changePct": -0.11838522552383669,
          "epsEffect": -0.3749999999999787,
          "perEffect": 3.7467806635049785e-14,
          "otherEffect": 0.0,
          "note": "EPS 10.5587->10.5463(적정PER 30.00배 유지 가정 시 -0.37) + 적정PER 30.00->30.00배(EPS 10.5463 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2026-10-30"
    },
    "ORCL": {
      "ticker": "ORCL",
      "asOf": "2026-10-29",
      "verdict": "매수",
      "action": "분할매수",
      "actionRaw": "적극 모아가기",
      "actionCapReason": "cashflow_veto_cap",
      "cashflowVeto": true,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "a_kept_capped_not_used",
      "candidateBadge": null,
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": "median",
      "sectorFewPeers": true,
      "currentPrice": 144.5399932861328,
      "fairPrice": 220.16195947106576,
      "ratio": 0.6565166554357844,
      "bandAggressiveLe": 176.12956757685262,
      "bandDcaHigh": 198.14576352395918,
      "bandFairHigh": 242.17815541817234,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±27% / 사업 위험으로 신뢰도 1단계 하향(보통→낮음): 현금흐름 거부권 발동(3/3: FCF 2년 연속 악화(11.8B→-0.4B→-23.7B), 부채/자본 2.01, 발행주식수 +5.1%(3개분기))",
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
            "per": 37.05779518516254
          },
          {
            "ticker": "ADBE",
            "per": 8.79127
          }
        ],
        "excluded": [],
        "note": "유효 비교군 4개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 9.320136520547944,
      "ttmEps": 6.38,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 6.928220169497079,
        "peTTM": 20.8625,
        "finnhubUpdated": "2026-10-28 17:26",
        "periods": "Q4'25~Q3'26",
        "endDates": [
          "2025-11-30",
          "2026-02-28",
          "2026-05-31",
          "2026-08-31"
        ],
        "secVerified": false,
        "quarterly": 6.38,
        "checks": [
          "분기 연속 OK",
          "최신성 OK(승인 근거 2026-08-31)",
          "역산 주식수 일관(±3.0%)",
          "공시 주식수 대조 -0.8%"
        ],
        "gapPct": 8.592792625346068,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "diag": {
        "epsTtmNtmRatio": 0.6845393290038321,
        "candSpread": 1.6019684988914378,
        "fairAltExCappedGrowth": 197.34989164295314,
        "fairAltGapPct": -10.361493821602108,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 23.62218181951289,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 220.16195947106576,
          "per": 34.508144117721905,
          "eps": 6.38,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "sector_per",
          "fairPrice": 174.53782381484052,
          "per": 18.72696,
          "eps": 9.320136520547944,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 279.6040956164383,
          "per": 30.0,
          "eps": 9.320136520547944,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
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
        },
        {
          "date": "2026-10-27",
          "prevFairPrice": 215.2919446663169,
          "newFairPrice": 220.16195947106576,
          "changePct": 2.2620515655134854,
          "epsEffect": 0.5432642675972188,
          "perEffect": 4.326750537151603,
          "otherEffect": 0.0,
          "note": "EPS 9.2804->9.3038(적정PER 23.20배 유지 가정 시 +0.54) + 적정PER 23.20->23.66배(EPS 9.3038 유지 가정 시 +4.33)"
        }
      ],
      "nextUpdateDate": "2026-12-09"
    },
    "CRM": {
      "ticker": "CRM",
      "asOf": "2026-10-29",
      "verdict": "매수",
      "action": "분할매수",
      "actionRaw": "적극 모아가기",
      "actionCapReason": "low_confidence_cap",
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "median",
      "candidateBadge": null,
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": "median",
      "sectorFewPeers": true,
      "currentPrice": 242.11000061035156,
      "fairPrice": 357.45733835325296,
      "ratio": 0.6773115967508526,
      "bandAggressiveLe": 285.9658706826024,
      "bandDcaHigh": 321.7116045179277,
      "bandFairHigh": 393.2030721885783,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±61% (±40% 밖)",
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
            "per": 37.05779518516254
          },
          {
            "ticker": "ADBE",
            "per": 8.79127
          }
        ],
        "excluded": [],
        "note": "유효 비교군 4개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 16.205704904109588,
      "ttmEps": 10.969999999999999,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 11.69263315385496,
        "peTTM": 20.7062,
        "finnhubUpdated": "2026-10-28 17:26",
        "periods": "Q4'25~Q3'26",
        "endDates": [
          "2025-10-31",
          "2026-01-31",
          "2026-04-30",
          "2026-07-31"
        ],
        "secVerified": true,
        "quarterly": 10.969999999999999,
        "checks": [
          "분기 연속 OK",
          "최신성 OK(승인 근거 2026-07-31)",
          "역산 주식수 흔들림 15.9% - SEC 대조 확인(2026-10-26): 분기 EPS = SEC GAAP 희석 EPS(4개 분기 직접 일치, FY2026 연간 7.80 vs 분기 합 7.81). 역산 주식수 흔들림은 실제 희석주식수 감소(962M→821M, 자사주 매입) 때문",
          "공시 주식수 대조 -0.1%"
        ],
        "gapPct": 6.5873578291245405,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "diag": {
        "epsTtmNtmRatio": 0.6769221126085128,
        "candSpread": 1.796114348620662,
        "fairAltExCappedGrowth": null,
        "fairAltGapPct": null,
        "fairAltApplicable": false,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 22.05750015,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 577.1543714316755,
          "per": 52.61206667563132,
          "eps": 10.969999999999999,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "sector_per",
          "fairPrice": 321.334981748186,
          "per": 19.82851,
          "eps": 16.205704904109588,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 357.45733835325296,
          "per": 22.05750015,
          "eps": 16.205704904109588,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": false,
      "dispersionFlag": "최대/최소 2.65배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-10-27",
          "prevFairPrice": 357.6808170886768,
          "newFairPrice": 357.54672984742245,
          "changePct": -0.03748795989277387,
          "epsEffect": -0.1340872412543545,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 16.2158->16.2098(적정PER 22.06배 유지 가정 시 -0.13) + 적정PER 22.06->22.06배(EPS 16.2098 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-10-28",
          "prevFairPrice": 357.54672984742245,
          "newFairPrice": 357.5020341003377,
          "changePct": -0.012500672878148914,
          "epsEffect": -0.044695747084758715,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 16.2098->16.2077(적정PER 22.06배 유지 가정 시 -0.04) + 적정PER 22.06->22.06배(EPS 16.2077 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-10-29",
          "prevFairPrice": 357.5020341003377,
          "newFairPrice": 357.45733835325296,
          "changePct": -0.012502235741741445,
          "epsEffect": -0.044695747084758715,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 16.2077->16.2057(적정PER 22.06배 유지 가정 시 -0.04) + 적정PER 22.06->22.06배(EPS 16.2057 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2026-12-02"
    },
    "PLTR": {
      "ticker": "PLTR",
      "asOf": "2026-10-29",
      "verdict": "고평가",
      "action": "신규 추격 금지 · 모델 점검 필요(적정가/현재가 비율 2.97배)",
      "actionRaw": "신규 추격 금지 · 모델 점검 필요(적정가/현재가 비율 2.97배)",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "a_kept_one_candidate",
      "candidateBadge": "후보 1개",
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": null,
      "sectorFewPeers": null,
      "currentPrice": 196.80999755859375,
      "fairPrice": 66.3611194520548,
      "ratio": 2.965742579143604,
      "bandAggressiveLe": 53.08889556164384,
      "bandDcaHigh": 59.725007506849316,
      "bandFairHigh": 72.99723139726028,
      "modelCheckNeeded": true,
      "confidence": "낮음",
      "confidenceNote": "적정가/현재가 비율이 2배 초과 또는 0.5배 미만 - 모델 점검 필요로 강제 낮음",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "고성장형",
      "stockTypeReason": "NTM PER 86.7배(기준 40 초과); 다음 회계연도 성장률 115.3%(기준 30% 초과)",
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
            "per": 37.05779518516254
          }
        ],
        "excluded": [
          {
            "ticker": "SNOW",
            "reason": "NTM PER 153.5배 >80배 제외"
          },
          {
            "ticker": "DDOG",
            "reason": "NTM PER 86.3배 >80배 제외"
          }
        ],
        "note": "유효 비교군 2개 이하(최소 3개 기준 미달)"
      },
      "epsUsedForCandidates": 2.212037315068493,
      "ttmEps": 1.17,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 1.24322670147647,
        "peTTM": 158.3058,
        "finnhubUpdated": "2026-10-28 17:26",
        "periods": "Q3'25~Q2'26",
        "endDates": [
          "2025-09-30",
          "2025-12-31",
          "2026-03-31",
          "2026-06-30"
        ],
        "secVerified": false,
        "quarterly": 1.17,
        "checks": [
          "분기 연속 OK",
          "최신성 OK(승인 근거 2026-06-30)",
          "역산 주식수 일관(±4.2%)"
        ],
        "gapPct": 6.258692433886326,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "diag": {
        "epsTtmNtmRatio": 0.5289241696014393,
        "candSpread": null,
        "fairAltExCappedGrowth": null,
        "fairAltGapPct": null,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 30.0,
      "fairPriceBasis": "적정가 후보 1개(growth_per_peg)만 사용",
      "fairPriceCandidates": [
        {
          "candidate": "growth_per_peg",
          "fairPrice": 66.3611194520548,
          "per": 30.0,
          "eps": 2.212037315068493,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": null,
      "qualityWarnings": [
        "과거 PER 이력 부족(0년치)"
      ],
      "recentChanges": [
        {
          "date": "2026-10-27",
          "prevFairPrice": 66.42510739726028,
          "newFairPrice": 66.72958356164384,
          "changePct": 0.4583751179544449,
          "epsEffect": 0.30447616438355585,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 2.2142->2.2243(적정PER 30.00배 유지 가정 시 +0.30) + 적정PER 30.00->30.00배(EPS 2.2243 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-10-28",
          "prevFairPrice": 66.72958356164384,
          "newFairPrice": 66.30175150684933,
          "changePct": -0.6411430012885994,
          "epsEffect": -0.4278320547945036,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 2.2243->2.2101(적정PER 30.00배 유지 가정 시 -0.43) + 적정PER 30.00->30.00배(EPS 2.2101 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-10-29",
          "prevFairPrice": 66.30175150684933,
          "newFairPrice": 66.3611194520548,
          "changePct": 0.08954204656167011,
          "epsEffect": 0.05936794520546407,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 2.2101->2.2120(적정PER 30.00배 유지 가정 시 +0.06) + 적정PER 30.00->30.00배(EPS 2.2120 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2026-11-03"
    },
    "TSLA": {
      "ticker": "TSLA",
      "asOf": "2026-10-29",
      "verdict": "고평가",
      "action": "신규 추격 금지 · 모델 점검 필요(적정가/현재가 비율 9.33배)",
      "actionRaw": "신규 추격 금지 · 모델 점검 필요(적정가/현재가 비율 9.33배)",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "median",
      "candidateBadge": null,
      "lowConfidenceCapEligible": false,
      "sectorPerMethod": null,
      "sectorFewPeers": null,
      "currentPrice": 404.2200012207031,
      "fairPrice": 43.305660453400435,
      "ratio": 9.334114685900445,
      "bandAggressiveLe": 34.64452836272035,
      "bandDcaHigh": 38.97509440806039,
      "bandFairHigh": 47.636226498740484,
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
        "growthPerPeg": 21.51749985,
        "growthPerPegEpsBasis": "NTM EPS"
      },
      "sectorPeerDisplay": {
        "basis": "forwardPE",
        "medianPer": null,
        "peers": [],
        "excluded": [],
        "note": "비교군 없음(peer_groups.json에 비교군 정의 자체가 없음)"
      },
      "epsUsedForCandidates": 2.0837040273972605,
      "ttmEps": 0.91,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 0.8408306488630379,
        "peTTM": 480.7389,
        "finnhubUpdated": "2026-10-28 17:26",
        "periods": "Q4'25~Q3'26",
        "endDates": [
          "2025-12-31",
          "2026-03-31",
          "2026-06-30",
          "2026-09-30"
        ],
        "secVerified": true,
        "quarterly": 0.91,
        "checks": [
          "분기 연속 OK",
          "최신성 OK(승인 근거 2026-09-30)",
          "역산 주식수 일관(±5.2%)",
          "공시 주식수 대조 -9.5%"
        ],
        "gapPct": -7.601027597468358,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "diag": {
        "epsTtmNtmRatio": 0.4367222926264986,
        "candSpread": 1.0732702616781524,
        "fairAltExCappedGrowth": null,
        "fairAltGapPct": null,
        "fairAltApplicable": false,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 20.78301902957553,
      "fairPriceBasis": "적정가 후보 2개 평균",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 41.77521980983593,
          "per": 45.90683495586366,
          "eps": 0.91,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 44.836101096964946,
          "per": 21.51749985,
          "eps": 2.0837040273972605,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": false,
      "dispersionFlag": "최대/최소 2.13배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [
        "과거 PER 이력 부족(2년치)",
        "⚠ 사업 경고(현금흐름/EPS 하향): EPS 수정 방향 하향(하향)"
      ],
      "recentChanges": [
        {
          "date": "2026-10-27",
          "prevFairPrice": 42.55503512111548,
          "newFairPrice": 44.42292572090898,
          "changePct": 4.389352739287635,
          "epsEffect": -0.06391306627536852,
          "perEffect": 1.931803666068863,
          "otherEffect": 0.0,
          "note": "EPS 2.1107->2.1075(적정PER 20.16배 유지 가정 시 -0.06) + 적정PER 20.16->21.08배(EPS 2.1075 유지 가정 시 +1.93)"
        },
        {
          "date": "2026-10-28",
          "prevFairPrice": 44.42292572090898,
          "newFairPrice": 43.29343202875965,
          "changePct": -2.542591857288892,
          "epsEffect": -0.5251844691899085,
          "perEffect": -0.6043092229594148,
          "otherEffect": 0.0,
          "note": "EPS 2.1075->2.0826(적정PER 21.08배 유지 가정 시 -0.53) + 적정PER 21.08->20.79배(EPS 2.0826 유지 가정 시 -0.60)"
        },
        {
          "date": "2026-10-29",
          "prevFairPrice": 43.29343202875965,
          "newFairPrice": 43.305660453400435,
          "changePct": 0.0282454498702211,
          "epsEffect": 0.023628254659807026,
          "perEffect": -0.011399830019021137,
          "otherEffect": 0.0,
          "note": "EPS 2.0826->2.0837(적정PER 20.79배 유지 가정 시 +0.02) + 적정PER 20.79->20.78배(EPS 2.0837 유지 가정 시 -0.01)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    }
  }
};
if (typeof window !== 'undefined') { window.PRICE_MAP_DATA = PRICE_MAP_DATA; }
