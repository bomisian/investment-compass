const PRICE_MAP_DATA = {
  "_meta": {
    "title": "WO17 가격지도(price_map) - 화면용 production 데이터",
    "as_of": "2026-11-17",
    "input_snapshot_hash": "f9d25933b02f183f25575223ad2bd1092b2db9c81463c5a1b47302276d43e5a0",
    "generated_by": "price_map_engine.py write_price_map_data_js()",
    "session_date": "2026-11-16",
    "session_date_source": "daily_run_arg(확정 종가 거래일)",
    "fxRates": {
      "EURUSD": {
        "rate": 1.0999,
        "asOf": "2026-11-16",
        "source": "Yahoo Finance chart API(query1.finance.yahoo.com)"
      },
      "TWDUSD": {
        "rate": 0.0304,
        "asOf": "2026-11-16",
        "source": "Yahoo Finance chart API(query1.finance.yahoo.com)"
      }
    },
    "ttmEpsRule": {
      "mode": "verified_quarterly_sum",
      "status": "applied",
      "quarterly_sum_count": 32,
      "fair_changed": [
        "ASML",
        "SNDK",
        "WDC",
        "AVGO",
        "ANET",
        "HUBB",
        "VRT",
        "PWR",
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
      "asOf": "2026-11-17",
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
      "currentPrice": 350.25,
      "fairPrice": 497.662747902125,
      "ratio": 0.7037898686941371,
      "bandAggressiveLe": 398.1301983217,
      "bandDcaHigh": 447.8964731119125,
      "bandFairHigh": 547.4290226923375,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±45% (±40% 밖)",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "고성장형",
      "stockTypeReason": "다음 회계연도 성장률 48.9%(기준 30% 초과)",
      "candidates": {
        "historicalPer": 21.66318284232996,
        "historicalPerYearsUsed": 5,
        "historicalPerEpsBasis": "TTM EPS",
        "sectorPer": 25.59516,
        "sectorPerValidPeers": 3,
        "sectorPerEpsBasis": "NTM EPS",
        "growthPerPeg": 30.0,
        "growthPerPegEpsBasis": "NTM EPS"
      },
      "sectorPeerDisplay": {
        "basis": "forwardPE",
        "medianPer": 25.59516,
        "peers": [
          {
            "ticker": "LRCX",
            "per": 22.60512
          },
          {
            "ticker": "KLAC",
            "per": 25.59516
          },
          {
            "ticker": "ASML",
            "per": 30.59394
          }
        ],
        "excluded": [],
        "note": "유효 비교군 3개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 19.443627150684932,
      "ttmEps": 12.62,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 12.016962701955308,
        "peTTM": 29.1463,
        "finnhubUpdated": "2026-11-17 06:33",
        "periods": "Q1'26~Q4'26",
        "endDates": [
          "2026-01-25",
          "2026-04-26",
          "2026-07-26",
          "2026-10-31"
        ],
        "secVerified": false,
        "quarterly": 12.62,
        "checks": [
          "분기 연속 OK",
          "최신성 OK(승인 근거 2026-07-26)",
          "역산 주식수 일관(±0.4%)",
          "공시 주식수 대조 +0.9%"
        ],
        "gapPct": -4.778425499561745,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 273.3893674702041,
        "fairHistProxy": 352.43500084938023,
        "proxyPer": 18.125990491283677,
        "trailingPer": 21.66318284232996,
        "modelSplitEligible": false,
        "modelSplitRatio": null,
        "actionBeforeModelSplit": null,
        "modelSplitMode": "on"
      },
      "earningsStatus": {
        "latestOfficialPeriodEnd": "2026-12-31",
        "latestOfficialSource": "8-K(실적) 2026-11-12",
        "valuationActualPeriodEnd": "2026-10-31",
        "valuationPeriods": "Q1'26~Q4'26",
        "earningsReleaseDate": "2026-11-12",
        "earningsReleaseAtUtc": "2026-11-13T04:59:00+00:00",
        "consensusUpdatedAtUtc": "2026-11-16T00:00:54.699675+00:00",
        "periodCompareMethod": "fallback_45d",
        "pendingReflection": true,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.6490558527067538,
        "candSpread": 2.1336192402732013,
        "fairAltExCappedGrowth": 385.52605768616456,
        "fairAltGapPct": -22.532667090045944,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 25.59516,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 273.3893674702041,
          "per": 21.66318284232996,
          "eps": 12.62,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "sector_per",
          "fairPrice": 497.662747902125,
          "per": 25.59516,
          "eps": 19.443627150684932,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 583.3088145205479,
          "per": 30.0,
          "eps": 19.443627150684932,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": null,
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-11-13",
          "prevFairPrice": 474.95530678200004,
          "newFairPrice": 476.45441530320005,
          "changePct": 0.31563149201490887,
          "epsEffect": 1.4991085211999888,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 18.5565->18.6150(적정PER 25.60배 유지 가정 시 +1.50) + 적정PER 25.60->25.60배(EPS 18.6150 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-14",
          "prevFairPrice": 476.45441530320005,
          "newFairPrice": 482.9518665807715,
          "changePct": 1.3637089024427789,
          "epsEffect": 6.497451277571433,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 18.6150->18.8689(적정PER 25.60배 유지 가정 시 +6.50) + 적정PER 25.60->25.60배(EPS 18.8689 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-17",
          "prevFairPrice": 482.9518665807715,
          "newFairPrice": 497.662747902125,
          "changePct": 3.046034675361001,
          "epsEffect": 14.710881321353487,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 18.8689->19.4436(적정PER 25.60배 유지 가정 시 +14.71) + 적정PER 25.60->25.60배(EPS 19.4436 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "LRCX": {
      "ticker": "LRCX",
      "asOf": "2026-11-17",
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
      "currentPrice": 210.8300018310547,
      "fairPrice": 272.38791416830685,
      "ratio": 0.7740064476604644,
      "bandAggressiveLe": 217.9103313346455,
      "bandDcaHigh": 245.14912275147617,
      "bandFairHigh": 299.6267055851376,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±42% (±40% 밖)",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "고성장형",
      "stockTypeReason": "다음 회계연도 성장률 65.8%(기준 30% 초과)",
      "candidates": {
        "historicalPer": 23.421686011624622,
        "historicalPerYearsUsed": 5,
        "historicalPerEpsBasis": "TTM EPS",
        "sectorPer": 25.59516,
        "sectorPerValidPeers": 3,
        "sectorPerEpsBasis": "NTM EPS",
        "growthPerPeg": 30.0,
        "growthPerPegEpsBasis": "NTM EPS"
      },
      "sectorPeerDisplay": {
        "basis": "forwardPE",
        "medianPer": 25.59516,
        "peers": [
          {
            "ticker": "AMAT",
            "per": 20.81932
          },
          {
            "ticker": "KLAC",
            "per": 25.59516
          },
          {
            "ticker": "ASML",
            "per": 30.59394
          }
        ],
        "excluded": [],
        "note": "유효 비교군 3개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 10.64216493150685,
      "ttmEps": 6.71,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 6.31255900208257,
        "peTTM": 33.3985,
        "finnhubUpdated": "2026-11-16 10:52",
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
        "gapPct": -5.923114723061551,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 157.15951313800122,
        "fairHistProxy": 204.86248314548018,
        "proxyPer": 19.250075944507394,
        "trailingPer": 23.421686011624622,
        "modelSplitEligible": false,
        "modelSplitRatio": null,
        "actionBeforeModelSplit": null,
        "modelSplitMode": "on"
      },
      "earningsStatus": {
        "latestOfficialPeriodEnd": "2026-09-30",
        "latestOfficialSource": "8-K(실적) 2026-10-21",
        "valuationActualPeriodEnd": "2026-09-27",
        "valuationPeriods": "Q4'25~Q3'26",
        "earningsReleaseDate": "2026-10-21",
        "earningsReleaseAtUtc": "2026-10-22T04:59:00+00:00",
        "consensusUpdatedAtUtc": "2026-11-16T00:00:54.699675+00:00",
        "periodCompareMethod": "fallback_45d",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.630510807075973,
        "candSpread": 2.031470711320288,
        "fairAltExCappedGrowth": 214.77371365315403,
        "fairAltGapPct": -21.15152601064133,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 25.59516,
      "fairPriceBasis": "세 적정가 후보 중앙값",
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
          "fairPrice": 272.38791416830685,
          "per": 25.59516,
          "eps": 10.64216493150685,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 319.2649479452055,
          "per": 30.0,
          "eps": 10.64216493150685,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": null,
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-11-13",
          "prevFairPrice": 271.4811828350959,
          "newFairPrice": 271.6625291017381,
          "changePct": 0.06679883472892686,
          "epsEffect": 0.1813462666421207,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 10.6067->10.6138(적정PER 25.60배 유지 가정 시 +0.18) + 적정PER 25.60->25.60배(EPS 10.6138 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-14",
          "prevFairPrice": 271.6625291017381,
          "newFairPrice": 271.8438753683803,
          "changePct": 0.06675424367204276,
          "epsEffect": 0.18134626664221162,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 10.6138->10.6209(적정PER 25.60배 유지 가정 시 +0.18) + 적정PER 25.60->25.60배(EPS 10.6209 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-17",
          "prevFairPrice": 271.8438753683803,
          "newFairPrice": 272.38791416830685,
          "changePct": 0.20012913632478638,
          "epsEffect": 0.5440387999265894,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 10.6209->10.6422(적정PER 25.60배 유지 가정 시 +0.54) + 적정PER 25.60->25.60배(EPS 10.6422 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "KLAC": {
      "ticker": "KLAC",
      "asOf": "2026-11-17",
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
      "currentPrice": 143.9600067138672,
      "fairPrice": 141.92183946989587,
      "ratio": 1.0143611952296014,
      "bandAggressiveLe": 113.5374715759167,
      "bandDcaHigh": 127.72965552290628,
      "bandFairHigh": 156.11402341688546,
      "modelCheckNeeded": false,
      "confidence": "보통",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±33%",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "고성장형",
      "stockTypeReason": "다음 회계연도 성장률 53.4%(기준 30% 초과)",
      "candidates": {
        "historicalPer": 24.249066143849046,
        "historicalPerYearsUsed": 5,
        "historicalPerEpsBasis": "TTM EPS",
        "sectorPer": 22.60512,
        "sectorPerValidPeers": 3,
        "sectorPerEpsBasis": "NTM EPS",
        "growthPerPeg": 30.0,
        "growthPerPegEpsBasis": "NTM EPS"
      },
      "sectorPeerDisplay": {
        "basis": "forwardPE",
        "medianPer": 22.60512,
        "peers": [
          {
            "ticker": "AMAT",
            "per": 20.81932
          },
          {
            "ticker": "LRCX",
            "per": 22.60512
          },
          {
            "ticker": "ASML",
            "per": 30.59394
          }
        ],
        "excluded": [],
        "note": "유효 비교군 3개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 6.27830506849315,
      "ttmEps": 4.0,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 3.8141668555875103,
        "peTTM": 37.7435,
        "finnhubUpdated": "2026-11-17 06:33",
        "periods": "Q4'25~Q3'26",
        "endDates": [
          "2025-12-31",
          "2026-03-31",
          "2026-06-30",
          "2026-09-30"
        ],
        "secVerified": false,
        "quarterly": 4.0,
        "checks": [
          "분기 연속 OK",
          "최신성 OK(승인 근거 2026-06-30)",
          "역산 주식수 일관(±0.7%)",
          "공시 주식수 대조 +0.7%"
        ],
        "gapPct": -4.6458286103122415,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 96.99626457539618,
        "fairHistProxy": 150.0050963224152,
        "proxyPer": 23.892610296239997,
        "trailingPer": 24.249066143849046,
        "modelSplitEligible": false,
        "modelSplitRatio": null,
        "actionBeforeModelSplit": null,
        "modelSplitMode": "on"
      },
      "earningsStatus": {
        "latestOfficialPeriodEnd": "2026-09-30",
        "latestOfficialSource": "10-Q 2026-10-29",
        "valuationActualPeriodEnd": "2026-09-30",
        "valuationPeriods": "Q4'25~Q3'26",
        "earningsReleaseDate": "2026-10-28",
        "earningsReleaseAtUtc": "2026-10-29T04:59:00+00:00",
        "consensusUpdatedAtUtc": "2026-11-16T00:00:54.699675+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.6371146282893252,
        "candSpread": 1.941818614142494,
        "fairAltExCappedGrowth": 119.45905202264603,
        "fairAltGapPct": -15.827576313238668,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 22.60512,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 96.99626457539618,
          "per": 24.249066143849046,
          "eps": 4.0,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "sector_per",
          "fairPrice": 141.92183946989587,
          "per": 22.60512,
          "eps": 6.27830506849315,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 188.3491520547945,
          "per": 30.0,
          "eps": 6.27830506849315,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": null,
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-11-13",
          "prevFairPrice": 141.5096552345425,
          "newFairPrice": 141.59209208161315,
          "changePct": 0.05825528083862529,
          "epsEffect": 0.08243684707066659,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 6.2601->6.2637(적정PER 22.61배 유지 가정 시 +0.08) + 적정PER 22.61->22.61배(EPS 6.2637 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-14",
          "prevFairPrice": 141.59209208161315,
          "newFairPrice": 141.67452892868383,
          "changePct": 0.058221363819644156,
          "epsEffect": 0.08243684707068667,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 6.2637->6.2674(적정PER 22.61배 유지 가정 시 +0.08) + 적정PER 22.61->22.61배(EPS 6.2674 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-17",
          "prevFairPrice": 141.67452892868383,
          "newFairPrice": 141.92183946989587,
          "changePct": 0.17456245881469346,
          "epsEffect": 0.24731054121203994,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 6.2674->6.2783(적정PER 22.61배 유지 가정 시 +0.25) + 적정PER 22.61->22.61배(EPS 6.2783 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "ASML": {
      "ticker": "ASML",
      "asOf": "2026-11-17",
      "verdict": "고평가",
      "action": "신규 추격 금지",
      "actionRaw": "신규 추격 금지",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "a_kept_capped_not_used",
      "candidateBadge": null,
      "lowConfidenceCapEligible": false,
      "sectorPerMethod": "median",
      "sectorFewPeers": true,
      "currentPrice": 1406.7850341796875,
      "fairPrice": 1273.727066617294,
      "ratio": 1.1044634844070345,
      "bandAggressiveLe": 1018.9816532938353,
      "bandDcaHigh": 1146.3543599555646,
      "bandFairHigh": 1401.0997732790236,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "EPS 품질 경고: ADR 통화환산 적용(EUR->USD); WO8-B 분류 불가(이력 부족 - 유효 4개년 <5년; 필터 없음(원본 그대로))",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "분류불가(이력부족)",
      "stockTypeReason": "유효 연간 EPS 4개년(<5년 기준) - 필터 없음(원본 그대로)",
      "candidates": {
        "historicalPer": 33.08682780557437,
        "historicalPerYearsUsed": 4,
        "historicalPerEpsBasis": "TTM EPS",
        "sectorPer": 22.60512,
        "sectorPerValidPeers": 3,
        "sectorPerEpsBasis": "NTM EPS",
        "growthPerPeg": 30.0,
        "growthPerPegEpsBasis": "NTM EPS"
      },
      "sectorPeerDisplay": {
        "basis": "forwardPE",
        "medianPer": 22.60512,
        "peers": [
          {
            "ticker": "AMAT",
            "per": 20.81932
          },
          {
            "ticker": "LRCX",
            "per": 22.60512
          },
          {
            "ticker": "KLAC",
            "per": 25.59516
          }
        ],
        "excluded": [],
        "note": "유효 비교군 3개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 54.623519726027396,
      "ttmEps": 38.496500000000005,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 28.656912610147103,
        "peTTM": 49.0906,
        "finnhubUpdated": "2026-11-17 06:33",
        "periods": "Q4'25~Q3'26",
        "endDates": [
          "2025-12-31",
          "2026-03-31",
          "2026-06-30",
          "2026-09-30"
        ],
        "secVerified": false,
        "quarterly": 38.496500000000005,
        "checks": [
          "분기 연속 OK",
          "최신성 OK(승인 근거 2026-09-30)",
          "역산 주식수 일관(±0.8%)",
          "EUR35.00(보통주1주) x ADR비율1 x EURUSD=X(1.0999) = $38.50(ADR 1주)"
        ],
        "gapPct": -25.55969345226943,
        "gapPrevPct": -5.42973759816443,
        "gapCause": "period",
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 1273.727066617294,
        "fairHistProxy": 1392.9550780773486,
        "proxyPer": 25.5010128432574,
        "trailingPer": 33.08682780557437,
        "modelSplitEligible": false,
        "modelSplitRatio": null,
        "actionBeforeModelSplit": null,
        "modelSplitMode": "on"
      },
      "earningsStatus": {
        "latestOfficialPeriodEnd": null,
        "latestOfficialSource": null,
        "valuationActualPeriodEnd": "2026-09-30",
        "valuationPeriods": "Q4'25~Q3'26",
        "earningsReleaseDate": null,
        "earningsReleaseAtUtc": null,
        "consensusUpdatedAtUtc": "2026-11-16T00:00:54.699675+00:00",
        "periodCompareMethod": null,
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.7047605169546942,
        "candSpread": 1.3271329681063404,
        "fairAltExCappedGrowth": 1254.2491424232553,
        "fairAltGapPct": -1.5292070573460603,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": "WO8-B 분류 불가(이력 부족, 유효 4개년 <5년) - 필터 없음(원본 그대로) - 경기순환 여부 판단 안 함, NTM EPS 그대로 사용",
      "convertedFairPer": 23.318289868647547,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 1273.727066617294,
          "per": 33.08682780557437,
          "eps": 38.496500000000005,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "sector_per",
          "fairPrice": 1234.7712182292164,
          "per": 22.60512,
          "eps": 54.623519726027396,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 1638.7055917808218,
          "per": 30.0,
          "eps": 54.623519726027396,
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
          "date": "2026-11-12",
          "prevFairPrice": 1273.7270666172938,
          "newFairPrice": 1273.727066617294,
          "changePct": 1.785105156374518e-14,
          "epsEffect": 0.9639367399033367,
          "perEffect": -0.9639367399031776,
          "otherEffect": 0.0,
          "note": "EPS 54.3766->54.4178(적정PER 23.42배 유지 가정 시 +0.96) + 적정PER 23.42->23.41배(EPS 54.4178 유지 가정 시 -0.96)"
        },
        {
          "date": "2026-11-13",
          "prevFairPrice": 1273.727066617294,
          "newFairPrice": 1273.7270666172938,
          "changePct": -1.7851051563745178e-14,
          "epsEffect": 0.9632077992925627,
          "perEffect": -0.9632077992926499,
          "otherEffect": 0.0,
          "note": "EPS 54.4178->54.4589(적정PER 23.41배 유지 가정 시 +0.96) + 적정PER 23.41->23.39배(EPS 54.4589 유지 가정 시 -0.96)"
        },
        {
          "date": "2026-11-14",
          "prevFairPrice": 1273.7270666172938,
          "newFairPrice": 1273.727066617294,
          "changePct": 1.785105156374518e-14,
          "epsEffect": 0.9624799603161158,
          "perEffect": -0.9624799603159208,
          "otherEffect": 0.0,
          "note": "EPS 54.4589->54.5001(적정PER 23.39배 유지 가정 시 +0.96) + 적정PER 23.39->23.37배(EPS 54.5001 유지 가정 시 -0.96)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "MU": {
      "ticker": "MU",
      "asOf": "2026-11-17",
      "verdict": "매수",
      "action": "분할매수",
      "actionRaw": "적극 모아가기",
      "actionCapReason": "low_confidence_cap",
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "a_kept_two_candidates",
      "candidateBadge": "후보 2개",
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": null,
      "sectorFewPeers": null,
      "currentPrice": 719.02001953125,
      "fairPrice": 1189.1185005410634,
      "ratio": 0.6046664139899321,
      "bandAggressiveLe": 951.2948004328508,
      "bandDcaHigh": 1070.2066504869572,
      "bandFairHigh": 1308.03035059517,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "EPS 품질 경고: 경기순환형(WO8-B 최종본, 39종목 적용) - 정상화 EPS 사용(과거PER 후보 포함); 경기순환형(item2)인데 비교군 정상화 EPS 유효 비교군 부족 - 업종PER 후보를 비움(forwardPE 기준으로 섞어 쓰지 않음, 원래 forwardPE 기준 업종PER None는 참고용으로만 보관) - 업종 비교 불가(정상화기준 유효 비교군 1개 <3개)",
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
            "per": 45.7442283434539
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
        "finnhub": 74.32038735774606,
        "peTTM": 9.6746,
        "finnhubUpdated": "2026-11-17 06:33",
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
        "gapPct": 0.14874997674985124,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": {
        "ntm_eps_raw": 183.18164273972602,
        "normalized_eps": 53.57,
        "change_pct": -70.75580325692621,
        "fair_without_normalization": 3281.848935013238,
        "basis_without_normalization": "적정가 후보 2개 평균",
        "candidates_without_normalization": [
          {
            "candidate": "historical_per",
            "fairPrice": 1068.2485878346959,
            "per": 14.394941218632205,
            "eps": 74.21,
            "epsBasis": "TTM EPS"
          },
          {
            "candidate": "growth_per_peg",
            "fairPrice": 5495.44928219178,
            "per": 30.0,
            "eps": 183.18164273972602,
            "epsBasis": "NTM EPS"
          }
        ],
        "note": "표시 전용 참고값 - 정상화 EPS 대신 NTM EPS, 정상화 기준 업종PER 대신 forwardPE 기준 업종PER, 과거PER 후보는 TTM EPS. 판정·행동에 쓰지 않음."
      },
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 771.1370010821272,
        "fairHistProxy": 592.9841235642614,
        "proxyPer": 11.069332155390356,
        "trailingPer": 14.394941218632205,
        "modelSplitEligible": false,
        "modelSplitRatio": 2.0840654744160583,
        "actionBeforeModelSplit": null,
        "modelSplitMode": "on"
      },
      "earningsStatus": {
        "latestOfficialPeriodEnd": "2026-09-03",
        "latestOfficialSource": "10-K 2026-10-09",
        "valuationActualPeriodEnd": "2026-09-03",
        "valuationPeriods": "Q4'25~Q3'26",
        "earningsReleaseDate": null,
        "earningsReleaseAtUtc": null,
        "consensusUpdatedAtUtc": "2026-11-16T00:00:54.699675+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 1.3852902744073174,
        "candSpread": 2.0840654744160583,
        "fairAltExCappedGrowth": 771.1370010821272,
        "fairAltGapPct": -35.150533716257,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": "경기순환형(WO8-B 최종본: (A) EPS 30%+·매출 5%+ 동반 감소 2회(2019→2020 EPS -57%·매출 -8%, 2022→2023 EPS -169%·매출 -49%, 기준 2회 이상)) - NTM EPS(183.1816) 대신 정상화 EPS 53.5700(순이익률 사이클 중앙값 22% x NTM매출/주식수 243.5, 기준연수 8) 사용 - 업종PER·성장PER·과거PER 후보 전부 동일 기준 적용(item3)",
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
        "경기순환형(item2)인데 비교군 정상화 EPS 유효 비교군 부족 - 업종PER 후보를 비움(forwardPE 기준으로 섞어 쓰지 않음, 원래 forwardPE 기준 업종PER None는 참고용으로만 보관) - 업종 비교 불가(정상화기준 유효 비교군 1개 <3개)"
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
      "asOf": "2026-11-17",
      "verdict": "매수",
      "action": "분할매수 · 모델 점검 필요(적정가/현재가 비율 0.15배)",
      "actionRaw": "적극 모아가기 · 모델 점검 필요(적정가/현재가 비율 0.15배)",
      "actionCapReason": "low_confidence_cap",
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "a_kept_two_candidates",
      "candidateBadge": "후보 2개",
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": null,
      "sectorFewPeers": null,
      "currentPrice": 809.1099853515625,
      "fairPrice": 5242.124380261789,
      "ratio": 0.15434772749729297,
      "bandAggressiveLe": 4193.699504209431,
      "bandDcaHigh": 4717.911942235611,
      "bandFairHigh": 5766.3368182879685,
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
            "ticker": "WDC",
            "per": 12.21712
          },
          {
            "ticker": "STX",
            "per": 13.41285
          }
        ],
        "excluded": [
          {
            "ticker": "MU",
            "reason": "NTM PER 4.9배 <5배 제외"
          }
        ],
        "note": "유효 비교군 2개 이하(최소 3개 기준 미달)"
      },
      "epsUsedForCandidates": 251.0979024657534,
      "ttmEps": 124.75,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 124.78947304845346,
        "peTTM": 6.4838,
        "finnhubUpdated": "2026-11-16 10:53",
        "periods": "Q1'26~Q4'26",
        "endDates": [
          "2026-01-02",
          "2026-04-03",
          "2026-07-03",
          "2026-10-02"
        ],
        "secVerified": false,
        "quarterly": 124.75,
        "checks": [
          "분기 연속 OK",
          "최신성 OK(승인 근거 2026-07-03)",
          "역산 주식수 일관(±1.9%)",
          "공시 주식수 대조 +8.2%"
        ],
        "gapPct": 0.031641722207176315,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 2951.311686550976,
        "fairHistProxy": null,
        "proxyPer": null,
        "trailingPer": 23.657809110629067,
        "modelSplitEligible": false,
        "modelSplitRatio": 2.5524030919200884,
        "actionBeforeModelSplit": null,
        "modelSplitMode": "on"
      },
      "earningsStatus": {
        "latestOfficialPeriodEnd": "2026-10-02",
        "latestOfficialSource": "10-Q 2026-10-30",
        "valuationActualPeriodEnd": "2026-10-02",
        "valuationPeriods": "Q1'26~Q4'26",
        "earningsReleaseDate": "2026-10-29",
        "earningsReleaseAtUtc": "2026-10-30T04:59:00+00:00",
        "consensusUpdatedAtUtc": "2026-11-16T00:00:54.699675+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.4968181684313923,
        "candSpread": 2.5524030919200884,
        "fairAltExCappedGrowth": 2951.311686550976,
        "fairAltGapPct": -43.70008278201921,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": "WO8-B 분류 불가(이력 부족, 유효 4개년 <5년) - 필터 없음(원본 그대로) - 경기순환 여부 판단 안 함, NTM EPS 그대로 사용",
      "convertedFairPer": 20.87681469572112,
      "fairPriceBasis": "적정가 후보 2개 평균",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 2951.311686550976,
          "per": 23.657809110629067,
          "eps": 124.75,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 7532.937073972602,
          "per": 30.0,
          "eps": 251.0979024657534,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": null,
      "qualityWarnings": [
        "과거 PER 이력 부족(1년치)",
        "WO8-B 분류 불가(이력 부족 - 유효 4개년 <5년; 필터 없음(원본 그대로))"
      ],
      "recentChanges": [
        {
          "date": "2026-11-13",
          "prevFairPrice": 5534.499493706202,
          "newFairPrice": 5232.002764919323,
          "changePct": -5.465656454226365,
          "epsEffect": 3.7307414149446396,
          "perEffect": -306.22747020182305,
          "otherEffect": 0.0,
          "note": "EPS 250.2544->250.4231(적정PER 22.12배 유지 가정 시 +3.73) + 적정PER 22.12->20.89배(EPS 250.4231 유지 가정 시 -306.23)"
        },
        {
          "date": "2026-11-14",
          "prevFairPrice": 5232.002764919323,
          "newFairPrice": 5234.533168754941,
          "changePct": 0.048363962125240315,
          "epsEffect": 3.524456111342757,
          "perEffect": -0.9940522757256488,
          "otherEffect": 0.0,
          "note": "EPS 250.4231->250.5918(적정PER 20.89배 유지 가정 시 +3.52) + 적정PER 20.89->20.89배(EPS 250.5918 유지 가정 시 -0.99)"
        },
        {
          "date": "2026-11-17",
          "prevFairPrice": 5234.533168754941,
          "newFairPrice": 5242.124380261789,
          "changePct": 0.1450217481123384,
          "epsEffect": 10.571360803472237,
          "perEffect": -2.9801492966235434,
          "otherEffect": 0.0,
          "note": "EPS 250.5918->251.0979(적정PER 20.89배 유지 가정 시 +10.57) + 적정PER 20.89->20.88배(EPS 251.0979 유지 가정 시 -2.98)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "WDC": {
      "ticker": "WDC",
      "asOf": "2026-11-17",
      "verdict": "매수",
      "action": "분할매수 · 모델 점검 필요(적정가/현재가 비율 0.38배)",
      "actionRaw": "적극 모아가기 · 모델 점검 필요(적정가/현재가 비율 0.38배)",
      "actionCapReason": "low_confidence_cap",
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "a_kept_two_candidates",
      "candidateBadge": "후보 2개",
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": null,
      "sectorFewPeers": null,
      "currentPrice": 280.92999267578125,
      "fairPrice": 747.1615441210985,
      "ratio": 0.3759963221959516,
      "bandAggressiveLe": 597.7292352968788,
      "bandDcaHigh": 672.4453897089886,
      "bandFairHigh": 821.8776985332083,
      "modelCheckNeeded": true,
      "confidence": "낮음",
      "confidenceNote": "적정가/현재가 비율이 2배 초과 또는 0.5배 미만 - 모델 점검 필요로 강제 낮음",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "분류불가(이력부족)",
      "stockTypeReason": "유효 연간 EPS 1개년(<5년 기준) - corporate_events.json 기업분할/분리상장(2025-02-21) 이전 회계연도 7개 제외",
      "candidates": {
        "historicalPer": 22.199341021416803,
        "historicalPerYearsUsed": 1,
        "historicalPerEpsBasis": "TTM EPS",
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
            "ticker": "STX",
            "per": 13.41285
          }
        ],
        "excluded": [
          {
            "ticker": "MU",
            "reason": "NTM PER 4.9배 <5배 제외"
          },
          {
            "ticker": "SNDK",
            "reason": "NTM PER 4.9배 <5배 제외"
          }
        ],
        "note": "유효 비교군 2개 이하(최소 3개 기준 미달)"
      },
      "epsUsedForCandidates": 30.73904342465753,
      "ttmEps": 25.773367999999998,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 26.222789892448684,
        "peTTM": 10.7132,
        "finnhubUpdated": "2026-11-17 06:33",
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
        "gapPct": 1.7437452972723033,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 572.1517855024711,
        "fairHistProxy": null,
        "proxyPer": null,
        "trailingPer": 22.199341021416803,
        "modelSplitEligible": false,
        "modelSplitRatio": 1.6117598967726077,
        "actionBeforeModelSplit": null,
        "modelSplitMode": "on"
      },
      "earningsStatus": {
        "latestOfficialPeriodEnd": "2026-10-02",
        "latestOfficialSource": "10-Q 2026-10-23",
        "valuationActualPeriodEnd": "2026-10-02",
        "valuationPeriods": "Q1'26~Q4'26",
        "earningsReleaseDate": "2026-10-22",
        "earningsReleaseAtUtc": "2026-10-23T04:59:00+00:00",
        "consensusUpdatedAtUtc": "2026-11-16T00:00:54.699675+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.8384570607465851,
        "candSpread": 1.6117598967726077,
        "fairAltExCappedGrowth": 572.1517855024711,
        "fairAltGapPct": -23.4232824207374,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": "WO8-B 분류 불가(이력 부족, 유효 1개년 <5년) - corporate_events.json 기업분할/분리상장(2025-02-21) 이전 회계연도 7개 제외 - 경기순환 여부 판단 안 함, NTM EPS 그대로 사용",
      "convertedFairPer": 24.30659711166411,
      "fairPriceBasis": "적정가 후보 2개 평균",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 572.1517855024711,
          "per": 22.199341021416803,
          "eps": 25.773367999999998,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 922.1713027397259,
          "per": 30.0,
          "eps": 30.73904342465753,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": null,
      "qualityWarnings": [
        "과거 PER 이력 부족(1년치)",
        "WO8-B 분류 불가(이력 부족 - 유효 1개년 <5년; corporate_events.json 기업분할/분리상장(2025-02-21) 이전 회계연도 7개 제외)"
      ],
      "recentChanges": [
        {
          "date": "2026-11-13",
          "prevFairPrice": 781.7777063627962,
          "newFairPrice": 744.5839983676739,
          "changePct": -4.757581047963775,
          "epsEffect": 1.1002552302979627,
          "perEffect": -38.29396322542023,
          "otherEffect": 0.0,
          "note": "EPS 30.5242->30.5672(적정PER 25.61배 유지 가정 시 +1.10) + 적정PER 25.61->24.36배(EPS 30.5672 유지 가정 시 -38.29)"
        },
        {
          "date": "2026-11-14",
          "prevFairPrice": 744.5839983676739,
          "newFairPrice": 745.22838480603,
          "changePct": 0.08654314889506312,
          "epsEffect": 1.0464369656454888,
          "perEffect": -0.4020505272893833,
          "otherEffect": 0.0,
          "note": "EPS 30.5672->30.6102(적정PER 24.36배 유지 가정 시 +1.05) + 적정PER 24.36->24.35배(EPS 30.6102 유지 가정 시 -0.40)"
        },
        {
          "date": "2026-11-17",
          "prevFairPrice": 745.22838480603,
          "newFairPrice": 747.1615441210985,
          "changePct": 0.2594049494735253,
          "epsEffect": 3.137618152727501,
          "perEffect": -1.2044588376590506,
          "otherEffect": 0.0,
          "note": "EPS 30.6102->30.7390(적정PER 24.35배 유지 가정 시 +3.14) + 적정PER 24.35->24.31배(EPS 30.7390 유지 가정 시 -1.20)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "STX": {
      "ticker": "STX",
      "asOf": "2026-11-17",
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
      "sectorPerMethod": null,
      "sectorFewPeers": null,
      "currentPrice": 499.0,
      "fairPrice": 277.57811859911607,
      "ratio": 1.7976921326448858,
      "bandAggressiveLe": 222.06249487929287,
      "bandDcaHigh": 249.82030673920445,
      "bandFairHigh": 305.3359304590277,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "EPS 품질 경고: 경기순환형(WO8-B 최종본, 39종목 적용) - 정상화 EPS 사용(과거PER 후보 포함); 경기순환형(item2)인데 비교군 정상화 EPS 유효 비교군 부족 - 업종PER 후보를 비움(forwardPE 기준으로 섞어 쓰지 않음, 원래 forwardPE 기준 업종PER None는 참고용으로만 보관) - 업종 비교 불가(정상화기준 유효 비교군 1개 <3개)",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "경기순환형",
      "stockTypeReason": "(B) EPS 30%+·매출 5%+ 동반 감소 1회(2022→2023 EPS -135%·매출 -37%) + 이익 정점 의심(NTM EPS $39.98가 과거 8년 EPS 중앙값 $6.06의 3배 초과)",
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
            "per": 13.42206495298208
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
      "epsUsedForCandidates": 10.90848,
      "ttmEps": 19.040250999999998,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 18.087902129587675,
        "peTTM": 27.5875,
        "finnhubUpdated": "2026-11-17 06:33",
        "periods": "Q1'26~Q4'26",
        "endDates": [
          "2026-01-02",
          "2026-04-03",
          "2026-07-03",
          "2026-10-02"
        ],
        "secVerified": false,
        "quarterly": 19.040250999999998,
        "checks": [
          "분기 연속 OK",
          "최신성 OK(승인 근거 2026-07-03)",
          "역산 주식수 일관(±1.7%)",
          "공시 주식수 대조 +1.1%"
        ],
        "gapPct": -5.00176636543459,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": {
        "ntm_eps_raw": 49.707047397260276,
        "normalized_eps": 10.90848,
        "change_pct": -78.05445993840856,
        "fair_without_normalization": 944.5018075560229,
        "basis_without_normalization": "적정가 후보 2개 평균",
        "candidates_without_normalization": [
          {
            "candidate": "historical_per",
            "fairPrice": 397.7921931942375,
            "per": 20.892171704786744,
            "eps": 19.040250999999998,
            "epsBasis": "TTM EPS"
          },
          {
            "candidate": "growth_per_peg",
            "fairPrice": 1491.2114219178084,
            "per": 30.0,
            "eps": 49.707047397260276,
            "epsBasis": "NTM EPS"
          }
        ],
        "note": "표시 전용 참고값 - 정상화 EPS 대신 NTM EPS, 정상화 기준 업종PER 대신 forwardPE 기준 업종PER, 과거PER 후보는 TTM EPS. 판정·행동에 쓰지 않음."
      },
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 227.90183719823213,
        "fairHistProxy": 128.9898099298892,
        "proxyPer": 11.824728095013162,
        "trailingPer": 20.892171704786744,
        "modelSplitEligible": false,
        "modelSplitRatio": 1.435944545349802,
        "actionBeforeModelSplit": null,
        "modelSplitMode": "on"
      },
      "earningsStatus": {
        "latestOfficialPeriodEnd": "2026-10-02",
        "latestOfficialSource": "10-Q 2026-10-29",
        "valuationActualPeriodEnd": "2026-10-02",
        "valuationPeriods": "Q1'26~Q4'26",
        "earningsReleaseDate": "2026-10-27",
        "earningsReleaseAtUtc": "2026-10-28T04:59:00+00:00",
        "consensusUpdatedAtUtc": "2026-11-16T00:00:54.699675+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 1.7454540870955437,
        "candSpread": 1.435944545349802,
        "fairAltExCappedGrowth": 227.90183719823213,
        "fairAltGapPct": -17.896324700084676,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": "경기순환형(WO8-B 최종본: (B) EPS 30%+·매출 5%+ 동반 감소 1회(2022→2023 EPS -135%·매출 -37%) + 이익 정점 의심(NTM EPS $39.98가 과거 8년 EPS 중앙값 $6.06의 3배 초과)) - NTM EPS(49.7070) 대신 정상화 EPS 10.9085(순이익률 사이클 중앙값 13.2% x NTM매출/주식수 82.64, 기준연수 8) 사용 - 업종PER·성장PER·과거PER 후보 전부 동일 기준 적용(item3)",
      "convertedFairPer": 25.44608585239337,
      "fairPriceBasis": "적정가 후보 2개 평균",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 227.90183719823213,
          "per": 20.892171704786744,
          "eps": 10.90848,
          "epsBasis": "정상화 EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 327.25440000000003,
          "per": 30.0,
          "eps": 10.90848,
          "epsBasis": "NTM EPS(또는 정상화 EPS)"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": null,
      "qualityWarnings": [
        "경기순환형(WO8-B 최종본, 39종목 적용) - 정상화 EPS 사용(과거PER 후보 포함)",
        "경기순환형(item2)인데 비교군 정상화 EPS 유효 비교군 부족 - 업종PER 후보를 비움(forwardPE 기준으로 섞어 쓰지 않음, 원래 forwardPE 기준 업종PER None는 참고용으로만 보관) - 업종 비교 불가(정상화기준 유효 비교군 1개 <3개)"
      ],
      "recentChanges": [
        {
          "date": "2026-10-31",
          "prevFairPrice": 281.13853493158297,
          "newFairPrice": 277.57811859911607,
          "changePct": -1.2664277180406283,
          "epsEffect": -3.560416332466882,
          "perEffect": -3.875470611092169e-14,
          "otherEffect": 0.0,
          "note": "EPS 11.0484->10.9085(적정PER 25.45배 유지 가정 시 -3.56) + 적정PER 25.45->25.45배(EPS 10.9085 유지 가정 시 -0.00)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "NVDA": {
      "ticker": "NVDA",
      "asOf": "2026-11-17",
      "verdict": "매수",
      "action": "분할매수",
      "actionRaw": "적극 모아가기",
      "actionCapReason": "low_confidence_cap",
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "a_kept_two_candidates",
      "candidateBadge": "후보 2개",
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": null,
      "sectorFewPeers": null,
      "currentPrice": 156.13999938964844,
      "fairPrice": 248.51900462897802,
      "ratio": 0.6282819280672512,
      "bandAggressiveLe": 198.81520370318242,
      "bandDcaHigh": 223.66710416608024,
      "bandFairHigh": 273.37090509187584,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "EPS 품질 경고: 경기순환형(WO8-B 최종본, 39종목 적용) - 정상화 EPS 사용(과거PER 후보 포함); 경기순환형(item2)인데 비교군 정상화 EPS 유효 비교군 부족 - 업종PER 후보를 비움(forwardPE 기준으로 섞어 쓰지 않음, 원래 forwardPE 기준 업종PER 30.06626는 참고용으로만 보관) - 업종 비교 불가(정상화기준 유효 비교군 1개 <3개)",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "경기순환형",
      "stockTypeReason": "(B) EPS 30%+·매출 5%+ 동반 감소 1회(2019→2020 EPS -32%·매출 -7%) + 이익 정점 의심(NTM EPS $9.33가 과거 8년 EPS 중앙값 $0.28의 3배 초과)",
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
            "per": 31.712030587413
          }
        ],
        "excluded": [
          {
            "ticker": "AMD",
            "reason": "정상화기준 PER 263.9배 >80배 제외"
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
        "finnhub": 7.673519104656915,
        "peTTM": 20.3479,
        "finnhubUpdated": "2026-11-17 06:32",
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
        "gapPct": -2.9896446946028443,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": {
        "ntm_eps_raw": 14.512595479452056,
        "normalized_eps": 6.114639999999999,
        "change_pct": -57.86666824237241,
        "fair_without_normalization": 421.0080521267149,
        "basis_without_normalization": "B안: 성장 PER 상한 후보 제외, 나머지 두 후보의 평균 (A안 상한 포함 $435.38, 낮은 쪽 적용)",
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
            "fairPrice": 436.33946896003016,
            "per": 30.06626,
            "eps": 14.512595479452056,
            "epsBasis": "NTM EPS"
          },
          {
            "candidate": "growth_per_peg",
            "fairPrice": 435.3778643835617,
            "per": 30.0,
            "eps": 14.512595479452056,
            "epsBasis": "NTM EPS"
          }
        ],
        "note": "표시 전용 참고값 - 정상화 EPS 대신 NTM EPS, 정상화 기준 업종PER 대신 forwardPE 기준 업종PER, 과거PER 후보는 TTM EPS. 판정·행동에 쓰지 않음."
      },
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 313.5988092579561,
        "fairHistProxy": 177.97345447823656,
        "proxyPer": 29.106121452487244,
        "trailingPer": 51.28655313443737,
        "modelSplitEligible": false,
        "modelSplitRatio": 1.7095517711479125,
        "actionBeforeModelSplit": null,
        "modelSplitMode": "on"
      },
      "earningsStatus": {
        "latestOfficialPeriodEnd": "2026-07-26",
        "latestOfficialSource": "10-Q 2026-08-26",
        "valuationActualPeriodEnd": "2026-07-26",
        "valuationPeriods": "Q4'25~Q3'26",
        "earningsReleaseDate": null,
        "earningsReleaseAtUtc": null,
        "consensusUpdatedAtUtc": "2026-11-16T00:00:54.699675+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 1.2936166315596669,
        "candSpread": 1.7095517711479125,
        "fairAltExCappedGrowth": 313.5988092579561,
        "fairAltGapPct": 26.187053471479093,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": "경기순환형(WO8-B 최종본: (B) EPS 30%+·매출 5%+ 동반 감소 1회(2019→2020 EPS -32%·매출 -7%) + 이익 정점 의심(NTM EPS $9.33가 과거 8년 EPS 중앙값 $0.28의 3배 초과)) - NTM EPS(14.5126) 대신 정상화 EPS 6.1146(순이익률 사이클 중앙값 35.8% x NTM매출/주식수 17.08, 기준연수 8) 사용 - 업종PER·성장PER·과거PER 후보 전부 동일 기준 적용(item3)",
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
        "경기순환형(item2)인데 비교군 정상화 EPS 유효 비교군 부족 - 업종PER 후보를 비움(forwardPE 기준으로 섞어 쓰지 않음, 원래 forwardPE 기준 업종PER 30.06626는 참고용으로만 보관) - 업종 비교 불가(정상화기준 유효 비교군 1개 <3개)"
      ],
      "recentChanges": [],
      "nextUpdateDate": "2026-11-18"
    },
    "AMD": {
      "ticker": "AMD",
      "asOf": "2026-11-17",
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
      "currentPrice": 504.2799987792969,
      "fairPrice": 280.89089001441096,
      "ratio": 1.7952878384679014,
      "bandAggressiveLe": 224.71271201152877,
      "bandDcaHigh": 252.80180101296986,
      "bandFairHigh": 308.97997901585205,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±77% (±40% 밖)",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "기타",
      "stockTypeReason": "경기순환형·이익훼손형·고성장형 조건 모두 미해당",
      "candidates": {
        "historicalPer": 56.86381299208111,
        "historicalPerYearsUsed": 3,
        "historicalPerEpsBasis": "TTM EPS",
        "sectorPer": 16.99006,
        "sectorPerValidPeers": 3,
        "sectorPerEpsBasis": "NTM EPS",
        "growthPerPeg": 30.0,
        "growthPerPegEpsBasis": "NTM EPS"
      },
      "sectorPeerDisplay": {
        "basis": "forwardPE",
        "medianPer": 16.99006,
        "peers": [
          {
            "ticker": "NVDA",
            "per": 14.47479
          },
          {
            "ticker": "AVGO",
            "per": 16.99006
          },
          {
            "ticker": "MRVL",
            "per": 30.06626
          }
        ],
        "excluded": [],
        "note": "유효 비교군 3개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 16.532660273972603,
      "ttmEps": 4.6,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 4.386447130727893,
        "peTTM": 114.9632,
        "finnhubUpdated": "2026-11-16 10:52",
        "periods": "Q4'25~Q3'26",
        "endDates": [
          "2025-12-27",
          "2026-03-28",
          "2026-06-27",
          "2026-09-26"
        ],
        "secVerified": false,
        "quarterly": 4.6,
        "checks": [
          "분기 연속 OK",
          "최신성 OK(승인 근거 2026-06-27)",
          "역산 주식수 일관(±1.3%)",
          "공시 주식수 대조 +1.4%"
        ],
        "gapPct": -4.642453679828407,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 261.5735397635731,
        "fairHistProxy": 685.8181035271288,
        "proxyPer": 41.48262240692222,
        "trailingPer": 56.86381299208111,
        "modelSplitEligible": false,
        "modelSplitRatio": null,
        "actionBeforeModelSplit": null,
        "modelSplitMode": "on"
      },
      "earningsStatus": {
        "latestOfficialPeriodEnd": "2026-09-30",
        "latestOfficialSource": "8-K(실적) 2026-11-03",
        "valuationActualPeriodEnd": "2026-09-26",
        "valuationPeriods": "Q4'25~Q3'26",
        "earningsReleaseDate": "2026-11-03",
        "earningsReleaseAtUtc": "2026-11-04T04:59:00+00:00",
        "consensusUpdatedAtUtc": "2026-11-16T00:00:54.699675+00:00",
        "periodCompareMethod": "fallback_45d",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.2782371332726039,
        "candSpread": 1.8961390692173086,
        "fairAltExCappedGrowth": 271.232214888992,
        "fairAltGapPct": -3.4385861089775482,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 16.99006,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 261.5735397635731,
          "per": 56.86381299208111,
          "eps": 4.6,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "sector_per",
          "fairPrice": 280.89089001441096,
          "per": 16.99006,
          "eps": 16.532660273972603,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 495.9798082191781,
          "per": 30.0,
          "eps": 16.532660273972603,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": "최대/최소 3.35배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-11-13",
          "prevFairPrice": 278.63701984204437,
          "newFairPrice": 279.08412467523124,
          "changePct": 0.16046138931586618,
          "epsEffect": 0.4471048331868944,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 16.4000->16.4263(적정PER 16.99배 유지 가정 시 +0.45) + 적정PER 16.99->16.99배(EPS 16.4263 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-14",
          "prevFairPrice": 279.08412467523124,
          "newFairPrice": 279.53122950841805,
          "changePct": 0.16020432323304196,
          "epsEffect": 0.4471048331868341,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 16.4263->16.4526(적정PER 16.99배 유지 가정 시 +0.45) + 적정PER 16.99->16.99배(EPS 16.4526 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-17",
          "prevFairPrice": 279.53122950841805,
          "newFairPrice": 280.89089001441096,
          "changePct": 0.48640737150693214,
          "epsEffect": 1.3596605059928837,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 16.4526->16.5327(적정PER 16.99배 유지 가정 시 +1.36) + 적정PER 16.99->16.99배(EPS 16.5327 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "AVGO": {
      "ticker": "AVGO",
      "asOf": "2026-11-17",
      "verdict": "매수",
      "action": "적극 모아가기",
      "actionRaw": "적극 모아가기",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": 582.4212,
      "fairPriceB": 430.61965666729475,
      "fairBasisMode": "ex_capped_growth_floor_b",
      "candidateBadge": null,
      "lowConfidenceCapEligible": false,
      "sectorPerMethod": "median",
      "sectorFewPeers": true,
      "currentPrice": 333.3999938964844,
      "fairPrice": 430.61965666729475,
      "ratio": 0.7742331050950509,
      "bandAggressiveLe": 344.4957253338358,
      "bandDcaHigh": 387.5576910005653,
      "bandFairHigh": 473.68162233402427,
      "modelCheckNeeded": false,
      "confidence": "보통",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±36%",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "기타",
      "stockTypeReason": "경기순환형·이익훼손형·고성장형 조건 모두 미해당",
      "candidates": {
        "historicalPer": 35.44466654459635,
        "historicalPerYearsUsed": 5,
        "historicalPerEpsBasis": "TTM EPS",
        "sectorPer": 30.06626,
        "sectorPerValidPeers": 3,
        "sectorPerEpsBasis": "NTM EPS",
        "growthPerPeg": 30.0,
        "growthPerPegEpsBasis": "NTM EPS"
      },
      "sectorPeerDisplay": {
        "basis": "forwardPE",
        "medianPer": 30.06626,
        "peers": [
          {
            "ticker": "NVDA",
            "per": 14.47479
          },
          {
            "ticker": "AMD",
            "per": 39.75855
          },
          {
            "ticker": "MRVL",
            "per": 30.06626
          }
        ],
        "excluded": [],
        "note": "유효 비교군 3개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 19.41404,
      "ttmEps": 7.83,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 7.7015297700047896,
        "peTTM": 43.2901,
        "finnhubUpdated": "2026-11-17 06:32",
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
        "gapPct": -1.6407436780997542,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 277.53173904418946,
        "fairHistProxy": 452.51540320749916,
        "proxyPer": 23.3086675008138,
        "trailingPer": 35.44466654459635,
        "modelSplitEligible": false,
        "modelSplitRatio": null,
        "actionBeforeModelSplit": null,
        "modelSplitMode": "on"
      },
      "earningsStatus": {
        "latestOfficialPeriodEnd": "2026-08-02",
        "latestOfficialSource": "10-Q 2026-09-10",
        "valuationActualPeriodEnd": "2026-08-02",
        "valuationPeriods": "Q4'25~Q3'26",
        "earningsReleaseDate": null,
        "earningsReleaseAtUtc": null,
        "consensusUpdatedAtUtc": "2026-11-16T00:00:54.699675+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.4033163627972334,
        "candSpread": 2.103210163639915,
        "fairAltExCappedGrowth": 430.61965666729475,
        "fairAltGapPct": 0.0,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 22.180836995663693,
      "fairPriceBasis": "B안: 성장 PER 상한 후보 제외, 나머지 두 후보의 평균 (A안 상한 포함 $582.42, 낮은 쪽 적용)",
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
          "fairPrice": 583.7075742904,
          "per": 30.06626,
          "eps": 19.41404,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 582.4212,
          "per": 30.0,
          "eps": 19.41404,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": null,
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-11-12",
          "prevFairPrice": 431.38679729119474,
          "newFairPrice": 443.4364693917196,
          "changePct": 2.7932408168697553,
          "epsEffect": 0.0,
          "perEffect": 12.049672100524825,
          "otherEffect": 0.0,
          "note": "EPS 19.4651->19.4651(적정PER 22.16배 유지 가정 시 +0.00) + 적정PER 22.16->22.78배(EPS 19.4651 유지 가정 시 +12.05)"
        },
        {
          "date": "2026-11-13",
          "prevFairPrice": 443.4364693917196,
          "newFairPrice": 431.38679729119474,
          "changePct": -2.7173389949306346,
          "epsEffect": 0.0,
          "perEffect": -12.049672100524825,
          "otherEffect": 0.0,
          "note": "EPS 19.4651->19.4651(적정PER 22.78배 유지 가정 시 +0.00) + 적정PER 22.78->22.16배(EPS 19.4651 유지 가정 시 -12.05)"
        },
        {
          "date": "2026-11-17",
          "prevFairPrice": 431.38679729119474,
          "newFairPrice": 430.61965666729475,
          "changePct": -0.1778312708495238,
          "epsEffect": -1.1309318828943338,
          "perEffect": 0.36379125899435666,
          "otherEffect": 0.0,
          "note": "EPS 19.4651->19.4140(적정PER 22.16배 유지 가정 시 -1.13) + 적정PER 22.16->22.18배(EPS 19.4140 유지 가정 시 +0.36)"
        }
      ],
      "nextUpdateDate": "2026-12-10"
    },
    "MRVL": {
      "ticker": "MRVL",
      "asOf": "2026-11-17",
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
      "currentPrice": 145.36000061035156,
      "fairPrice": 113.94706084658905,
      "ratio": 1.275680123123622,
      "bandAggressiveLe": 91.15764867727125,
      "bandDcaHigh": 102.55235476193015,
      "bandFairHigh": 125.34176693124797,
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
        "sectorPer": 16.99006,
        "sectorPerValidPeers": 3,
        "sectorPerEpsBasis": "NTM EPS",
        "growthPerPeg": 30.0,
        "growthPerPegEpsBasis": "NTM EPS"
      },
      "sectorPeerDisplay": {
        "basis": "forwardPE",
        "medianPer": 16.99006,
        "peers": [
          {
            "ticker": "NVDA",
            "per": 14.47479
          },
          {
            "ticker": "AMD",
            "per": 39.75855
          },
          {
            "ticker": "AVGO",
            "per": 16.99006
          }
        ],
        "excluded": [],
        "note": "유효 비교군 3개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 6.706689726027398,
      "ttmEps": 0.9100000000000001,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 2.7915623340800972,
        "peTTM": 52.0712,
        "finnhubUpdated": "2026-11-16 11:25",
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
        "gapPct": -7.86922989834663,
        "gapCause": null,
        "oneOffApplied": [
          {
            "quarterEnd": "2025-11-01",
            "matchedEnd": "2025-11-01",
            "impact": -2.12,
            "op": "-2.12",
            "category": "자동차 이더넷 사업부 매각이익 (Infineon에 $2.5B 현금 매각)"
          }
        ],
        "oneOffAdjust": -2.12,
        "quarterlyRaw": 3.0300000000000002,
        "oneOffNote": "#13-1 일회성 보정(최근 4분기): 3.0300 -2.1200 = 0.9100",
        "source": "quarterly_sum(검증 통과) + 일회성 보정"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 9.348889244927303,
        "fairHistProxy": null,
        "proxyPer": null,
        "trailingPer": 10.273504664755276,
        "modelSplitEligible": false,
        "modelSplitRatio": null,
        "actionBeforeModelSplit": null,
        "modelSplitMode": "on"
      },
      "earningsStatus": {
        "latestOfficialPeriodEnd": "2026-09-30",
        "latestOfficialSource": "8-K(실적) 2026-11-02",
        "valuationActualPeriodEnd": "2026-08-01",
        "valuationPeriods": "Q4'25~Q3'26",
        "earningsReleaseDate": "2026-11-02",
        "earningsReleaseAtUtc": "2026-11-03T04:59:00+00:00",
        "consensusUpdatedAtUtc": "2026-11-16T00:00:54.699675+00:00",
        "periodCompareMethod": "fallback_45d",
        "pendingReflection": true,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.13568541816814064,
        "candSpread": 21.521347243469936,
        "fairAltExCappedGrowth": 61.64797504575818,
        "fairAltGapPct": -45.897704962520244,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 16.99006,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 9.348889244927303,
          "per": 10.273504664755276,
          "eps": 0.9100000000000001,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "sector_per",
          "fairPrice": 113.94706084658905,
          "per": 16.99006,
          "eps": 6.706689726027398,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 201.20069178082196,
          "per": 30.0,
          "eps": 6.706689726027398,
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
          "date": "2026-11-13",
          "prevFairPrice": 113.21851543676163,
          "newFairPrice": 113.36422451872713,
          "changePct": 0.12869722006457351,
          "epsEffect": 0.1457090819654901,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 6.6638->6.6724(적정PER 16.99배 유지 가정 시 +0.15) + 적정PER 16.99->16.99배(EPS 6.6724 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-14",
          "prevFairPrice": 113.36422451872713,
          "newFairPrice": 113.5099336006926,
          "changePct": 0.12853180320693477,
          "epsEffect": 0.145709081965475,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 6.6724->6.6810(적정PER 16.99배 유지 가정 시 +0.15) + 적정PER 16.99->16.99배(EPS 6.6810 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-17",
          "prevFairPrice": 113.5099336006926,
          "newFairPrice": 113.94706084658905,
          "changePct": 0.3851004330900085,
          "epsEffect": 0.4371272458964552,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 6.6810->6.7067(적정PER 16.99배 유지 가정 시 +0.44) + 적정PER 16.99->16.99배(EPS 6.7067 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2026-11-27"
    },
    "TSM": {
      "ticker": "TSM",
      "asOf": "2026-11-17",
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
      "currentPrice": 373.45001220703125,
      "fairPrice": 534.5437860885137,
      "ratio": 0.6986331558350445,
      "bandAggressiveLe": 427.63502887081097,
      "bandDcaHigh": 481.0894074796623,
      "bandFairHigh": 587.9981646973652,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "EPS 품질 경고: ADR 통화환산 적용(TWD->USD); WO8-B 분류 불가(이력 부족 - 유효 4개년 <5년; 필터 없음(원본 그대로))",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "분류불가(이력부족)",
      "stockTypeReason": "유효 연간 EPS 4개년(<5년 기준) - 필터 없음(원본 그대로)",
      "candidates": {
        "historicalPer": 24.93503880973359,
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
            "per": 36.93003
          },
          {
            "ticker": "UMC",
            "per": 23.57275
          },
          {
            "ticker": "GFS",
            "per": 17.25392
          }
        ],
        "excluded": [],
        "note": "유효 비교군 3개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 22.67634391780822,
      "ttmEps": 14.9347834992,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 15.613372530458774,
        "peTTM": 23.9186,
        "finnhubUpdated": "2026-11-17 06:33",
        "periods": "Q4'25~Q3'26",
        "endDates": [
          "2025-12-31",
          "2026-03-31",
          "2026-06-30",
          "2026-09-30"
        ],
        "secVerified": false,
        "quarterly": 14.9347834992,
        "checks": [
          "분기 연속 OK",
          "최신성 OK(승인 근거 2026-09-30)",
          "역산 주식수 일관(±4.2%)",
          "TWD491.28(원천값이 이미 ADR 1주 기준, ADR비율 미적용) x TWDUSD=X(0.0304) = $14.93(ADR 1주)"
        ],
        "gapPct": 4.543681743328398,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 372.39940616752085,
        "fairHistProxy": 343.62708923193486,
        "proxyPer": 15.153549023485974,
        "trailingPer": 24.93503880973359,
        "modelSplitEligible": false,
        "modelSplitRatio": null,
        "actionBeforeModelSplit": null,
        "modelSplitMode": "on"
      },
      "earningsStatus": {
        "latestOfficialPeriodEnd": null,
        "latestOfficialSource": null,
        "valuationActualPeriodEnd": "2026-09-30",
        "valuationPeriods": "Q4'25~Q3'26",
        "earningsReleaseDate": null,
        "earningsReleaseAtUtc": null,
        "consensusUpdatedAtUtc": "2026-11-16T00:00:54.699675+00:00",
        "periodCompareMethod": null,
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.6586063235472184,
        "candSpread": 1.8267760535263142,
        "fairAltExCappedGrowth": 453.47159612801727,
        "fairAltGapPct": -15.166613488061742,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": "WO8-B 분류 불가(이력 부족, 유효 4개년 <5년) - 필터 없음(원본 그대로) - 경기순환 여부 판단 안 함, NTM EPS 그대로 사용",
      "convertedFairPer": 23.572749999999996,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 372.39940616752085,
          "per": 24.93503880973359,
          "eps": 14.9347834992,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "sector_per",
          "fairPrice": 534.5437860885137,
          "per": 23.57275,
          "eps": 22.67634391780822,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 680.2903175342467,
          "per": 30.0,
          "eps": 22.67634391780822,
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
          "date": "2026-11-13",
          "prevFairPrice": 532.6447169113561,
          "newFairPrice": 533.0245307467876,
          "changePct": 0.07130716279960793,
          "epsEffect": 0.37981383543150243,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 22.5958->22.6119(적정PER 23.57배 유지 가정 시 +0.38) + 적정PER 23.57->23.57배(EPS 22.6119 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-14",
          "prevFairPrice": 533.0245307467876,
          "newFairPrice": 533.4043445822191,
          "changePct": 0.07125635191674161,
          "epsEffect": 0.37981383543150243,
          "perEffect": -8.039082887354534e-14,
          "otherEffect": 0.0,
          "note": "EPS 22.6119->22.6280(적정PER 23.57배 유지 가정 시 +0.38) + 적정PER 23.57->23.57배(EPS 22.6280 유지 가정 시 -0.00)"
        },
        {
          "date": "2026-11-17",
          "prevFairPrice": 533.4043445822191,
          "newFairPrice": 534.5437860885137,
          "changePct": 0.213616840182852,
          "epsEffect": 1.1394415062945908,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 22.6280->22.6763(적정PER 23.57배 유지 가정 시 +1.14) + 적정PER 23.57->23.57배(EPS 22.6763 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "INTC": {
      "ticker": "INTC",
      "asOf": "2026-11-17",
      "verdict": "고평가",
      "action": "관망(모델 민감도 높음)",
      "actionRaw": "신규 추격 금지",
      "actionCapReason": "model_split",
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "a_kept_two_candidates",
      "candidateBadge": "후보 2개",
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": "median",
      "sectorFewPeers": true,
      "currentPrice": 55.470001220703125,
      "fairPrice": 50.083037569726294,
      "ratio": 1.1075606415341128,
      "bandAggressiveLe": 40.06643005578104,
      "bandDcaHigh": 45.074733812753664,
      "bandFairHigh": 55.09134132669893,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "EPS 품질 경고: EPS 일회성 정상화 적용; TTM EPS 미확보(peTTM 없음) - 과거PER 후보가 적정가에 못 들어감",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "이익훼손형",
      "stockTypeReason": "TTM EPS $-2.41(적자)",
      "candidates": {
        "historicalPer": 11.656726240621182,
        "historicalPerYearsUsed": 4,
        "historicalPerEpsBasis": null,
        "sectorPer": 18.88111,
        "sectorPerValidPeers": 3,
        "sectorPerEpsBasis": "NTM EPS",
        "growthPerPeg": 30.0,
        "growthPerPegEpsBasis": "NTM EPS"
      },
      "sectorPeerDisplay": {
        "basis": "forwardPE",
        "medianPer": 18.88111,
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
            "per": 17.25392
          }
        ],
        "excluded": [],
        "note": "유효 비교군 3개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 2.0491775890410957,
      "ttmEps": null,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": null,
        "peTTM": null,
        "finnhubUpdated": "2026-11-16 10:52",
        "periods": "Q4'25~Q3'26",
        "endDates": [
          "2025-12-27",
          "2026-03-28",
          "2026-06-27",
          "2026-09-26"
        ],
        "secVerified": false,
        "quarterly": null,
        "checks": [
          "분기 연속 OK",
          "최신성 OK(승인 근거 2026-06-27)"
        ],
        "gapPct": null,
        "gapCause": null,
        "failReason": "분기별 역산 주식수 불일치(최대 12.4% - 분할·단위·기본/희석 섞임 의심)",
        "source": "없음(분기 검증 실패·peTTM 없음)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": null,
        "fairHistProxy": 24.921982449746004,
        "proxyPer": 12.1619436904969,
        "trailingPer": 11.656726240621182,
        "modelSplitEligible": true,
        "modelSplitRatio": 1.5888896362554956,
        "actionBeforeModelSplit": "신규 추격 금지",
        "modelSplitMode": "on"
      },
      "earningsStatus": {
        "latestOfficialPeriodEnd": "2026-09-30",
        "latestOfficialSource": "8-K(실적) 2026-10-29",
        "valuationActualPeriodEnd": "2026-09-26",
        "valuationPeriods": "Q4'25~Q3'26",
        "earningsReleaseDate": "2026-10-29",
        "earningsReleaseAtUtc": "2026-10-30T04:59:00+00:00",
        "consensusUpdatedAtUtc": "2026-11-16T00:00:54.699675+00:00",
        "periodCompareMethod": "fallback_45d",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": null,
        "candSpread": 1.5888896362554956,
        "fairAltExCappedGrowth": 38.69074746821972,
        "fairAltGapPct": -22.746803417516503,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 24.440555,
      "fairPriceBasis": "적정가 후보 2개 평균",
      "fairPriceCandidates": [
        {
          "candidate": "sector_per",
          "fairPrice": 38.69074746821972,
          "per": 18.88111,
          "eps": 2.0491775890410957,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 61.47532767123287,
          "per": 30.0,
          "eps": 2.0491775890410957,
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
          "date": "2026-11-13",
          "prevFairPrice": 50.801583190683836,
          "newFairPrice": 50.657874066492326,
          "changePct": -0.2828831606528824,
          "epsEffect": -0.14370912419150578,
          "perEffect": -7.36370029792615e-15,
          "otherEffect": 0.0,
          "note": "EPS 2.0786->2.0727(적정PER 24.44배 유지 가정 시 -0.14) + 적정PER 24.44->24.44배(EPS 2.0727 유지 가정 시 -0.00)"
        },
        {
          "date": "2026-11-14",
          "prevFairPrice": 50.657874066492326,
          "newFairPrice": 50.51416494230082,
          "changePct": -0.2836856596131009,
          "epsEffect": -0.14370912419150578,
          "perEffect": 7.342810536164046e-15,
          "otherEffect": 0.0,
          "note": "EPS 2.0727->2.0668(적정PER 24.44배 유지 가정 시 -0.14) + 적정PER 24.44->24.44배(EPS 2.0668 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-17",
          "prevFairPrice": 50.51416494230082,
          "newFairPrice": 50.083037569726294,
          "changePct": -0.853478174026987,
          "epsEffect": -0.4311273725745282,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 2.0668->2.0492(적정PER 24.44배 유지 가정 시 -0.43) + 적정PER 24.44->24.44배(EPS 2.0492 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "QCOM": {
      "ticker": "QCOM",
      "asOf": "2026-11-17",
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
      "currentPrice": 168.52000427246094,
      "fairPrice": 169.23175892666438,
      "ratio": 0.9957942016397059,
      "bandAggressiveLe": 135.3854071413315,
      "bandDcaHigh": 152.30858303399796,
      "bandFairHigh": 186.15493481933083,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±26% / 사업 위험으로 신뢰도 1단계 하향(보통→낮음): EPS 수정 방향 하향(하향)",
      "bizRiskBadge": true,
      "bizRiskDetail": [
        "EPS 수정 방향 하향(하향)"
      ],
      "stockType": "기타",
      "stockTypeReason": "경기순환형·이익훼손형·고성장형 조건 모두 미해당",
      "candidates": {
        "historicalPer": 16.7725857173171,
        "historicalPerYearsUsed": 5,
        "historicalPerEpsBasis": "TTM EPS",
        "sectorPer": 17.03275,
        "sectorPerValidPeers": 3,
        "sectorPerEpsBasis": "NTM EPS",
        "growthPerPeg": 13.695,
        "growthPerPegEpsBasis": "NTM EPS"
      },
      "sectorPeerDisplay": {
        "basis": "forwardPE",
        "medianPer": 17.03275,
        "peers": [
          {
            "ticker": "ARM",
            "per": 75.93895
          },
          {
            "ticker": "SWKS",
            "per": 17.03275
          },
          {
            "ticker": "QRVO",
            "per": 15.2291
          }
        ],
        "excluded": [],
        "note": "유효 비교군 3개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 9.935668575342465,
      "ttmEps": 12.7,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 12.584666024872185,
        "peTTM": 13.3909,
        "finnhubUpdated": "2026-11-17 06:32",
        "periods": "Q4'25~Q3'26",
        "endDates": [
          "2025-12-28",
          "2026-03-29",
          "2026-06-28",
          "2026-09-27"
        ],
        "secVerified": false,
        "quarterly": 12.7,
        "checks": [
          "분기 연속 OK",
          "최신성 OK(승인 근거 2026-06-28)",
          "역산 주식수 일관(±1.1%)",
          "공시 주식수 대조 -0.1%"
        ],
        "gapPct": -0.9081415364394885,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 213.01183860992714,
        "fairHistProxy": 132.37126713595993,
        "proxyPer": 13.322834405373401,
        "trailingPer": 16.7725857173171,
        "modelSplitEligible": false,
        "modelSplitRatio": null,
        "actionBeforeModelSplit": null,
        "modelSplitMode": "on"
      },
      "earningsStatus": {
        "latestOfficialPeriodEnd": "2026-09-30",
        "latestOfficialSource": "8-K(실적) 2026-11-04",
        "valuationActualPeriodEnd": "2026-09-27",
        "valuationPeriods": "Q4'25~Q3'26",
        "earningsReleaseDate": "2026-11-04",
        "earningsReleaseAtUtc": "2026-11-05T04:59:00+00:00",
        "consensusUpdatedAtUtc": "2026-11-16T00:00:54.699675+00:00",
        "periodCompareMethod": "fallback_45d",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 1.2782229906015412,
        "candSpread": 1.5654694907418587,
        "fairAltExCappedGrowth": null,
        "fairAltGapPct": null,
        "fairAltApplicable": false,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 17.03275,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 213.01183860992714,
          "per": 16.7725857173171,
          "eps": 12.7,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "sector_per",
          "fairPrice": 169.23175892666438,
          "per": 17.03275,
          "eps": 9.935668575342465,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 136.06898113931507,
          "per": 13.695,
          "eps": 9.935668575342465,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": false,
      "dispersionFlag": null,
      "qualityWarnings": [
        "⚠ 사업 경고(현금흐름/EPS 하향): EPS 수정 방향 하향(하향)"
      ],
      "recentChanges": [
        {
          "date": "2026-11-13",
          "prevFairPrice": 168.5977439735822,
          "newFairPrice": 168.72003725197948,
          "changePct": 0.07253553666556875,
          "epsEffect": 0.12229327839727723,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 9.8984->9.9056(적정PER 17.03배 유지 가정 시 +0.12) + 적정PER 17.03->17.03배(EPS 9.9056 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-14",
          "prevFairPrice": 168.72003725197948,
          "newFairPrice": 168.8423305303767,
          "changePct": 0.07248296076095598,
          "epsEffect": 0.12229327839721671,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 9.9056->9.9128(적정PER 17.03배 유지 가정 시 +0.12) + 적정PER 17.03->17.03배(EPS 9.9128 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-17",
          "prevFairPrice": 168.8423305303767,
          "newFairPrice": 169.23175892666438,
          "changePct": 0.2306461863351391,
          "epsEffect": 0.38942839628767834,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 9.9128->9.9357(적정PER 17.03배 유지 가정 시 +0.39) + 적정PER 17.03->17.03배(EPS 9.9357 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "ARM": {
      "ticker": "ARM",
      "asOf": "2026-11-17",
      "verdict": "고평가",
      "action": "신규 추격 금지 · 모델 점검 필요(적정가/현재가 비율 2.10배)",
      "actionRaw": "신규 추격 금지 · 모델 점검 필요(적정가/현재가 비율 2.10배)",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "a_kept_one_candidate",
      "candidateBadge": "후보 1개",
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": null,
      "sectorFewPeers": null,
      "currentPrice": 175.0500030517578,
      "fairPrice": 83.36213917808219,
      "ratio": 2.0998741728281183,
      "bandAggressiveLe": 66.68971134246576,
      "bandDcaHigh": 75.02592526027397,
      "bandFairHigh": 91.69835309589041,
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
            "per": 34.05574
          },
          {
            "ticker": "SNPS",
            "per": 25.31176
          }
        ],
        "excluded": [],
        "note": "유효 비교군 2개 이하(최소 3개 기준 미달)"
      },
      "epsUsedForCandidates": 2.7787379726027397,
      "ttmEps": 0.7707647591288963,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 0.7707647591288963,
        "peTTM": 227.1121,
        "finnhubUpdated": "2026-11-17 06:32",
        "periods": "Q4'25~Q3'26",
        "endDates": [
          "2025-12-31",
          "2026-03-31",
          "2026-06-30",
          "2026-09-30"
        ],
        "secVerified": false,
        "quarterly": 0.87,
        "checks": [
          "분기 연속 OK",
          "최신성 OK(승인 근거 2026-06-30)",
          "역산 주식수 일관(±2.0%)"
        ],
        "gapPct": -11.406349525414218,
        "gapPrevPct": -20.539715553722026,
        "gapCause": "definition_unexplained",
        "source": "finnhub_peTTM(차이 원인 미확인 - 검증 전 유지)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": null,
        "fairHistProxy": null,
        "proxyPer": null,
        "trailingPer": null,
        "modelSplitEligible": false,
        "modelSplitRatio": null,
        "actionBeforeModelSplit": null,
        "modelSplitMode": "on"
      },
      "earningsStatus": {
        "latestOfficialPeriodEnd": null,
        "latestOfficialSource": null,
        "valuationActualPeriodEnd": "2026-09-30",
        "valuationPeriods": "Q4'25~Q3'26",
        "earningsReleaseDate": null,
        "earningsReleaseAtUtc": null,
        "consensusUpdatedAtUtc": "2026-11-16T00:00:54.699675+00:00",
        "periodCompareMethod": null,
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.2773794315003188,
        "candSpread": null,
        "fairAltExCappedGrowth": null,
        "fairAltGapPct": null,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": "WO8-B 분류 불가(이력 부족, 유효 4개년 <5년) - 필터 없음(원본 그대로) - 경기순환 여부 판단 안 함, NTM EPS 그대로 사용",
      "convertedFairPer": 30.0,
      "fairPriceBasis": "적정가 후보 1개(growth_per_peg)만 사용",
      "fairPriceCandidates": [
        {
          "candidate": "growth_per_peg",
          "fairPrice": 83.36213917808219,
          "per": 30.0,
          "eps": 2.7787379726027397,
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
          "date": "2026-11-13",
          "prevFairPrice": 83.09726054794521,
          "newFairPrice": 83.06713232876713,
          "changePct": -0.03625657329665893,
          "epsEffect": -0.030128219178084947,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 2.7699->2.7689(적정PER 30.00배 유지 가정 시 -0.03) + 적정PER 30.00->30.00배(EPS 2.7689 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-14",
          "prevFairPrice": 83.06713232876713,
          "newFairPrice": 83.13338136986302,
          "changePct": 0.07975361522495206,
          "epsEffect": 0.06624904109588492,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 2.7689->2.7711(적정PER 30.00배 유지 가정 시 +0.07) + 적정PER 30.00->30.00배(EPS 2.7711 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-17",
          "prevFairPrice": 83.13338136986302,
          "newFairPrice": 83.36213917808219,
          "changePct": 0.2751696183286721,
          "epsEffect": 0.22875780821917768,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 2.7711->2.7787(적정PER 30.00배 유지 가정 시 +0.23) + 적정PER 30.00->30.00배(EPS 2.7787 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "ANET": {
      "ticker": "ANET",
      "asOf": "2026-11-17",
      "verdict": "적정",
      "action": "관망(적정가 근처)",
      "actionRaw": "관망(적정가 근처)",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "a_kept_two_candidates",
      "candidateBadge": "후보 2개",
      "lowConfidenceCapEligible": false,
      "sectorPerMethod": null,
      "sectorFewPeers": null,
      "currentPrice": 187.02000427246094,
      "fairPrice": 176.17706562517026,
      "ratio": 1.0615456876229272,
      "bandAggressiveLe": 140.9416525001362,
      "bandDcaHigh": 158.55935906265324,
      "bandFairHigh": 193.7947721876873,
      "modelCheckNeeded": false,
      "confidence": "높음",
      "confidenceNote": "적정가 후보 모두 중앙값 ±1% 안",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "고성장형",
      "stockTypeReason": "NTM PER 45.1배(기준 40 초과); 다음 회계연도 성장률 46.9%(기준 30% 초과)",
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
            "per": 19.97198
          },
          {
            "ticker": "CIEN",
            "per": 35.946669361120065
          }
        ],
        "excluded": [],
        "note": "유효 비교군 2개 이하(최소 3개 기준 미달)"
      },
      "epsUsedForCandidates": 5.836875945205479,
      "ttmEps": 3.7199999999999998,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 3.565477747172915,
        "peTTM": 52.453,
        "finnhubUpdated": "2026-11-16 10:53",
        "periods": "Q4'25~Q3'26",
        "endDates": [
          "2025-12-31",
          "2026-03-31",
          "2026-06-30",
          "2026-09-30"
        ],
        "secVerified": false,
        "quarterly": 3.7199999999999998,
        "checks": [
          "분기 연속 OK",
          "최신성 OK(승인 근거 2026-06-30)",
          "역산 주식수 일관(±0.4%)",
          "공시 주식수 대조 +1.2%"
        ],
        "gapPct": -4.153824000728079,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 177.2478528941761,
        "fairHistProxy": 161.21873442480154,
        "proxyPer": 27.620723129678588,
        "trailingPer": 47.64727228338068,
        "modelSplitEligible": false,
        "modelSplitRatio": 1.0122301413639538,
        "actionBeforeModelSplit": null,
        "modelSplitMode": "on"
      },
      "earningsStatus": {
        "latestOfficialPeriodEnd": "2026-09-30",
        "latestOfficialSource": "10-Q 2026-11-04",
        "valuationActualPeriodEnd": "2026-09-30",
        "valuationPeriods": "Q4'25~Q3'26",
        "earningsReleaseDate": "2026-11-03",
        "earningsReleaseAtUtc": "2026-11-04T04:59:00+00:00",
        "consensusUpdatedAtUtc": "2026-11-16T00:00:54.699675+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.6373272337671796,
        "candSpread": 1.0122301413639538,
        "fairAltExCappedGrowth": 177.2478528941761,
        "fairAltGapPct": 0.607790387021212,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 30.18345212045931,
      "fairPriceBasis": "적정가 후보 2개 평균",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 177.2478528941761,
          "per": 47.64727228338068,
          "eps": 3.7199999999999998,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 175.10627835616438,
          "per": 30.0,
          "eps": 5.836875945205479,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": "최대/최소 1.59배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-11-13",
          "prevFairPrice": 181.71401308396105,
          "newFairPrice": 175.90416918681407,
          "changePct": -3.1972459352722207,
          "epsEffect": 0.4842519727237769,
          "perEffect": -6.294095869870762,
          "otherEffect": 0.0,
          "note": "EPS 5.8032->5.8187(적정PER 31.31배 유지 가정 시 +0.48) + 적정PER 31.31->30.23배(EPS 5.8187 유지 가정 시 -6.29)"
        },
        {
          "date": "2026-11-14",
          "prevFairPrice": 175.90416918681407,
          "newFairPrice": 175.9723932964031,
          "changePct": 0.03878481670129349,
          "epsEffect": 0.1374985327613874,
          "perEffect": -0.06927442317234965,
          "otherEffect": 0.0,
          "note": "EPS 5.8187->5.8232(적정PER 30.23배 유지 가정 시 +0.14) + 적정PER 30.23->30.22배(EPS 5.8232 유지 가정 시 -0.07)"
        },
        {
          "date": "2026-11-17",
          "prevFairPrice": 175.9723932964031,
          "newFairPrice": 176.17706562517026,
          "changePct": 0.1163093397396721,
          "epsEffect": 0.4123332765168346,
          "perEffect": -0.2076609477496746,
          "otherEffect": 0.0,
          "note": "EPS 5.8232->5.8369(적정PER 30.22배 유지 가정 시 +0.41) + 적정PER 30.22->30.18배(EPS 5.8369 유지 가정 시 -0.21)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "ETN": {
      "ticker": "ETN",
      "asOf": "2026-11-17",
      "verdict": "매수",
      "action": "분할매수",
      "actionRaw": "분할매수",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "median",
      "candidateBadge": null,
      "lowConfidenceCapEligible": false,
      "sectorPerMethod": "median",
      "sectorFewPeers": true,
      "currentPrice": 336.8800048828125,
      "fairPrice": 404.2108483934505,
      "ratio": 0.8334264313334324,
      "bandAggressiveLe": 323.3686787147604,
      "bandDcaHigh": 363.78976355410543,
      "bandFairHigh": 444.6319332327956,
      "modelCheckNeeded": false,
      "confidence": "보통",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±25%",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "기타",
      "stockTypeReason": "경기순환형·이익훼손형·고성장형 조건 모두 미해당",
      "candidates": {
        "historicalPer": 30.479426771830145,
        "historicalPerYearsUsed": 5,
        "historicalPerEpsBasis": "TTM EPS",
        "sectorPer": 25.115259714112586,
        "sectorPerValidPeers": 3,
        "sectorPerEpsBasis": "NTM EPS",
        "growthPerPeg": 25.07999925,
        "growthPerPegEpsBasis": "NTM EPS"
      },
      "sectorPeerDisplay": {
        "basis": "forwardPE",
        "medianPer": 25.115259714112586,
        "peers": [
          {
            "ticker": "HUBB",
            "per": 18.66361
          },
          {
            "ticker": "VRT",
            "per": 26.89923
          },
          {
            "ticker": "MOD",
            "per": 25.115259714112586
          }
        ],
        "excluded": [],
        "note": "유효 비교군 3개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 16.116860465753422,
      "ttmEps": 10.01,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 9.89851160574061,
        "peTTM": 34.0334,
        "finnhubUpdated": "2026-11-17 06:33",
        "periods": "Q4'25~Q3'26",
        "endDates": [
          "2025-12-31",
          "2026-03-31",
          "2026-06-30",
          "2026-09-30"
        ],
        "secVerified": false,
        "quarterly": 10.01,
        "checks": [
          "분기 연속 OK",
          "최신성 OK(승인 근거 2026-06-30)",
          "역산 주식수 일관(±0.3%)",
          "공시 주식수 대조 +0.2%"
        ],
        "gapPct": -1.1137701724214688,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 305.09906198601976,
        "fairHistProxy": 408.55394267433167,
        "proxyPer": 25.34947445518092,
        "trailingPer": 30.479426771830145,
        "modelSplitEligible": false,
        "modelSplitRatio": null,
        "actionBeforeModelSplit": null,
        "modelSplitMode": "on"
      },
      "earningsStatus": {
        "latestOfficialPeriodEnd": "2026-09-30",
        "latestOfficialSource": "10-Q 2026-11-03",
        "valuationActualPeriodEnd": "2026-09-30",
        "valuationPeriods": "Q4'25~Q3'26",
        "earningsReleaseDate": "2026-11-03",
        "earningsReleaseAtUtc": "2026-11-04T04:59:00+00:00",
        "consensusUpdatedAtUtc": "2026-11-16T00:00:54.699675+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.6210887052891078,
        "candSpread": 1.326713801539182,
        "fairAltExCappedGrowth": null,
        "fairAltGapPct": null,
        "fairAltApplicable": false,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 25.07999925,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 305.09906198601976,
          "per": 30.479426771830145,
          "eps": 10.01,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "sector_per",
          "fairPrice": 404.77913637351077,
          "per": 25.115259714112586,
          "eps": 16.116860465753422,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 404.2108483934505,
          "per": 25.07999925,
          "eps": 16.116860465753422,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": false,
      "dispersionFlag": null,
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-11-13",
          "prevFairPrice": 306.9515118533566,
          "newFairPrice": 317.94795349506376,
          "changePct": 3.5824686365971163,
          "epsEffect": 0.26603353650199696,
          "perEffect": 10.73040810520518,
          "otherEffect": 0.0,
          "note": "EPS 16.0861->16.1001(적정PER 19.08배 유지 가정 시 +0.27) + 적정PER 19.08->19.75배(EPS 16.1001 유지 가정 시 +10.73)"
        },
        {
          "date": "2026-11-14",
          "prevFairPrice": 317.94795349506376,
          "newFairPrice": 316.1598250161401,
          "changePct": -0.5623965995904556,
          "epsEffect": -0.08962612021297248,
          "perEffect": -1.698502358710672,
          "otherEffect": 0.0,
          "note": "EPS 16.1001->16.0955(적정PER 19.75배 유지 가정 시 -0.09) + 적정PER 19.75->19.64배(EPS 16.0955 유지 가정 시 -1.70)"
        },
        {
          "date": "2026-11-17",
          "prevFairPrice": 316.1598250161401,
          "newFairPrice": 404.2108483934505,
          "changePct": 27.850161978301752,
          "epsEffect": 0.4188744474416096,
          "perEffect": 87.63214892986879,
          "otherEffect": 0.0,
          "note": "EPS 16.0955->16.1169(적정PER 19.64배 유지 가정 시 +0.42) + 적정PER 19.64->25.08배(EPS 16.1169 유지 가정 시 +87.63)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "HUBB": {
      "ticker": "HUBB",
      "asOf": "2026-11-17",
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
      "currentPrice": 424.42999267578125,
      "fairPrice": 458.0723307193263,
      "ratio": 0.9265567121447493,
      "bandAggressiveLe": 366.4578645754611,
      "bandDcaHigh": 412.2650976473937,
      "bandFairHigh": 503.879563791259,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±25% / 사업 위험으로 신뢰도 1단계 하향(보통→낮음): EPS 하향 수정이 상향보다 많음(방향은 혼조)",
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
        "sectorPer": 25.115259714112586,
        "sectorPerValidPeers": 3,
        "sectorPerEpsBasis": "NTM EPS",
        "growthPerPeg": 18.817499624999996,
        "growthPerPegEpsBasis": "NTM EPS"
      },
      "sectorPeerDisplay": {
        "basis": "forwardPE",
        "medianPer": 25.115259714112586,
        "peers": [
          {
            "ticker": "ETN",
            "per": 23.57188
          },
          {
            "ticker": "VRT",
            "per": 26.89923
          },
          {
            "ticker": "MOD",
            "per": 25.115259714112586
          }
        ],
        "excluded": [],
        "note": "유효 비교군 3개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 22.766639260273973,
      "ttmEps": 17.060000000000002,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 16.708526599314276,
        "peTTM": 25.402,
        "finnhubUpdated": "2026-11-17 06:33",
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
        "gapPct": -2.0602192302797584,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 458.0723307193263,
        "fairHistProxy": 490.3270902151324,
        "proxyPer": 21.537086989853407,
        "trailingPer": 26.85066416877645,
        "modelSplitEligible": false,
        "modelSplitRatio": null,
        "actionBeforeModelSplit": null,
        "modelSplitMode": "on"
      },
      "earningsStatus": {
        "latestOfficialPeriodEnd": "2026-09-30",
        "latestOfficialSource": "10-Q 2026-10-28",
        "valuationActualPeriodEnd": "2026-09-30",
        "valuationPeriods": "Q4'25~Q3'26",
        "earningsReleaseDate": "2026-10-27",
        "earningsReleaseAtUtc": "2026-10-28T04:59:00+00:00",
        "consensusUpdatedAtUtc": "2026-11-16T00:00:54.699675+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.7493420440744798,
        "candSpread": 1.3346757122155433,
        "fairAltExCappedGrowth": null,
        "fairAltGapPct": null,
        "fairAltApplicable": false,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 20.12033157298834,
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
          "fairPrice": 571.7900578392929,
          "per": 25.115259714112586,
          "eps": 22.766639260273973,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 428.41122574271566,
          "per": 18.817499624999996,
          "eps": 22.766639260273973,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": false,
      "dispersionFlag": null,
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
      "asOf": "2026-11-17",
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
      "currentPrice": 188.6699981689453,
      "fairPrice": 254.17990340515314,
      "ratio": 0.7422695328836146,
      "bandAggressiveLe": 203.34392272412254,
      "bandDcaHigh": 228.76191306463784,
      "bandFairHigh": 279.5978937456685,
      "modelCheckNeeded": false,
      "confidence": "높음",
      "confidenceNote": "적정가 후보 모두 중앙값 ±13% 안",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "고성장형",
      "stockTypeReason": "다음 회계연도 성장률 71.2%(기준 30% 초과)",
      "candidates": {
        "historicalPer": 47.510262318720216,
        "historicalPerYearsUsed": 3,
        "historicalPerEpsBasis": "TTM EPS",
        "sectorPer": 23.57188,
        "sectorPerValidPeers": 3,
        "sectorPerEpsBasis": "NTM EPS",
        "growthPerPeg": 30.0,
        "growthPerPegEpsBasis": "NTM EPS"
      },
      "sectorPeerDisplay": {
        "basis": "forwardPE",
        "medianPer": 23.57188,
        "peers": [
          {
            "ticker": "ETN",
            "per": 23.57188
          },
          {
            "ticker": "HUBB",
            "per": 18.66361
          },
          {
            "ticker": "MOD",
            "per": 25.115259714112586
          }
        ],
        "excluded": [],
        "note": "유효 비교군 3개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 9.550419369863015,
      "ttmEps": 5.35,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 5.063933215476717,
        "peTTM": 37.2576,
        "finnhubUpdated": "2026-11-17 06:33",
        "periods": "Q4'25~Q3'26",
        "endDates": [
          "2025-12-31",
          "2026-03-31",
          "2026-06-30",
          "2026-09-30"
        ],
        "secVerified": false,
        "quarterly": 5.35,
        "checks": [
          "분기 연속 OK",
          "최신성 OK(승인 근거 2026-06-30)",
          "역산 주식수 일관(±0.8%)",
          "공시 주식수 대조 +1.8%"
        ],
        "gapPct": -5.347042701369775,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 254.17990340515314,
        "fairHistProxy": 338.27658119139505,
        "proxyPer": 35.4200761339182,
        "trailingPer": 47.510262318720216,
        "modelSplitEligible": false,
        "modelSplitRatio": null,
        "actionBeforeModelSplit": null,
        "modelSplitMode": "on"
      },
      "earningsStatus": {
        "latestOfficialPeriodEnd": "2026-09-30",
        "latestOfficialSource": "10-Q 2026-10-28",
        "valuationActualPeriodEnd": "2026-09-30",
        "valuationPeriods": "Q4'25~Q3'26",
        "earningsReleaseDate": "2026-10-28",
        "earningsReleaseAtUtc": "2026-10-29T04:59:00+00:00",
        "consensusUpdatedAtUtc": "2026-11-16T00:00:54.699675+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.5601848246457408,
        "candSpread": 1.2727028985384279,
        "fairAltExCappedGrowth": 239.6506213706199,
        "fairAltGapPct": -5.716141142509656,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 26.614527965885433,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 254.17990340515314,
          "per": 47.510262318720216,
          "eps": 5.35,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "sector_per",
          "fairPrice": 225.1213393360866,
          "per": 23.57188,
          "eps": 9.550419369863015,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 286.5125810958904,
          "per": 30.0,
          "eps": 9.550419369863015,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": "최대/최소 2.02배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-11-13",
          "prevFairPrice": 275.94991422978745,
          "newFairPrice": 254.17990340515314,
          "changePct": -7.889116720835837,
          "epsEffect": 0.8434256297791852,
          "perEffect": -22.6134364544135,
          "otherEffect": 0.0,
          "note": "EPS 9.4860->9.5150(적정PER 29.09배 유지 가정 시 +0.84) + 적정PER 29.09->26.71배(EPS 9.5150 유지 가정 시 -22.61)"
        },
        {
          "date": "2026-11-14",
          "prevFairPrice": 254.17990340515314,
          "newFairPrice": 244.0818722009765,
          "changePct": -3.9727889848477735,
          "epsEffect": 1.5705738648667644,
          "perEffect": -11.668605069043412,
          "otherEffect": 0.0,
          "note": "EPS 9.5150->9.5738(적정PER 26.71배 유지 가정 시 +1.57) + 적정PER 26.71->25.49배(EPS 9.5738 유지 가정 시 -11.67)"
        },
        {
          "date": "2026-11-17",
          "prevFairPrice": 244.0818722009765,
          "newFairPrice": 254.17990340515314,
          "changePct": 4.13714919224396,
          "epsEffect": -0.5958936718305741,
          "perEffect": 10.69392487600721,
          "otherEffect": 0.0,
          "note": "EPS 9.5738->9.5504(적정PER 25.49배 유지 가정 시 -0.60) + 적정PER 25.49->26.61배(EPS 9.5504 유지 가정 시 +10.69)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "MOD": {
      "ticker": "MOD",
      "asOf": "2026-11-17",
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
      "currentPrice": 130.5500030517578,
      "fairPrice": 209.63565937208,
      "ratio": 0.6227471196589034,
      "bandAggressiveLe": 167.70852749766402,
      "bandDcaHigh": 188.672093434872,
      "bandFairHigh": 230.59922530928802,
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
        "sectorPer": 23.57188,
        "sectorPerValidPeers": 3,
        "sectorPerEpsBasis": "NTM EPS",
        "growthPerPeg": 30.0,
        "growthPerPegEpsBasis": "NTM EPS"
      },
      "sectorPeerDisplay": {
        "basis": "forwardPE",
        "medianPer": 23.57188,
        "peers": [
          {
            "ticker": "ETN",
            "per": 23.57188
          },
          {
            "ticker": "HUBB",
            "per": 18.66361
          },
          {
            "ticker": "VRT",
            "per": 26.89923
          }
        ],
        "excluded": [],
        "note": "유효 비교군 3개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 7.826331999999999,
      "ttmEps": 2.39,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 2.3480807619572763,
        "peTTM": 55.5986,
        "finnhubUpdated": "2026-11-16 10:53",
        "periods": "Q4'25~Q3'26",
        "endDates": [
          "2025-12-31",
          "2026-03-31",
          "2026-06-30",
          "2026-09-30"
        ],
        "secVerified": false,
        "quarterly": 2.39,
        "checks": [
          "분기 연속 OK",
          "최신성 OK(승인 근거 2026-06-30)",
          "역산 주식수 일관(±2.4%)",
          "공시 주식수 대조 +0.7%"
        ],
        "gapPct": -1.7539430143399093,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": null,
        "fairHistProxy": null,
        "proxyPer": null,
        "trailingPer": null,
        "modelSplitEligible": false,
        "modelSplitRatio": 1.2727028985384279,
        "actionBeforeModelSplit": null,
        "modelSplitMode": "on"
      },
      "earningsStatus": {
        "latestOfficialPeriodEnd": "2026-09-30",
        "latestOfficialSource": "10-Q 2026-11-04",
        "valuationActualPeriodEnd": "2026-09-30",
        "valuationPeriods": "Q4'25~Q3'26",
        "earningsReleaseDate": "2026-11-03",
        "earningsReleaseAtUtc": "2026-11-04T04:59:00+00:00",
        "consensusUpdatedAtUtc": "2026-11-16T00:00:54.699675+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.3053793271228464,
        "candSpread": 1.2727028985384279,
        "fairAltExCappedGrowth": 184.48135874416,
        "fairAltGapPct": -11.999056221286242,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": "WO8-B 분류 불가(이력 부족, 유효 0개년 <5년) - corporate_events.json 기업분할/분리상장(2026-10-01) 이전 회계연도 8개 제외 - 경기순환 여부 판단 안 함, NTM EPS 그대로 사용",
      "convertedFairPer": 26.785940000000004,
      "fairPriceBasis": "적정가 후보 2개 평균",
      "fairPriceCandidates": [
        {
          "candidate": "sector_per",
          "fairPrice": 184.48135874416,
          "per": 23.57188,
          "eps": 7.826331999999999,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 234.78995999999998,
          "per": 30.0,
          "eps": 7.826331999999999,
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
          "date": "2026-11-13",
          "prevFairPrice": 206.17920754537096,
          "newFairPrice": 208.36472009096,
          "changePct": 1.0600062788135898,
          "epsEffect": 2.18551254558904,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 7.6973->7.7789(적정PER 26.79배 유지 가정 시 +2.19) + 적정PER 26.79->26.79배(EPS 7.7789 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-14",
          "prevFairPrice": 208.36472009096,
          "newFairPrice": 208.68245491123997,
          "changePct": 0.15248974017351688,
          "epsEffect": 0.3177348202799951,
          "perEffect": -2.7678289882260286e-14,
          "otherEffect": 0.0,
          "note": "EPS 7.7789->7.7907(적정PER 26.79배 유지 가정 시 +0.32) + 적정PER 26.79->26.79배(EPS 7.7907 유지 가정 시 -0.00)"
        },
        {
          "date": "2026-11-17",
          "prevFairPrice": 208.68245491123997,
          "newFairPrice": 209.63565937208,
          "changePct": 0.45677268903390006,
          "epsEffect": 0.9532044608399852,
          "perEffect": 5.5609433502468157e-14,
          "otherEffect": 0.0,
          "note": "EPS 7.7907->7.8263(적정PER 26.79배 유지 가정 시 +0.95) + 적정PER 26.79->26.79배(EPS 7.8263 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "PWR": {
      "ticker": "PWR",
      "asOf": "2026-11-17",
      "verdict": "고평가",
      "action": "신규 추격 금지",
      "actionRaw": "신규 추격 금지",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "a_kept_capped_not_used",
      "candidateBadge": null,
      "lowConfidenceCapEligible": false,
      "sectorPerMethod": "median",
      "sectorFewPeers": true,
      "currentPrice": 585.9000244140625,
      "fairPrice": 476.4864067382812,
      "ratio": 1.2296258951535606,
      "bandAggressiveLe": 381.18912539062495,
      "bandDcaHigh": 428.8377660644531,
      "bandFairHigh": 524.1350474121093,
      "modelCheckNeeded": false,
      "confidence": "보통",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±34%",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "고성장형",
      "stockTypeReason": "다음 회계연도 성장률 69.0%(기준 30% 초과)",
      "candidates": {
        "historicalPer": 43.16000061035156,
        "historicalPerYearsUsed": 5,
        "historicalPerEpsBasis": "TTM EPS",
        "sectorPer": 19.40473,
        "sectorPerValidPeers": 3,
        "sectorPerEpsBasis": "NTM EPS",
        "growthPerPeg": 30.0,
        "growthPerPegEpsBasis": "NTM EPS"
      },
      "sectorPeerDisplay": {
        "basis": "forwardPE",
        "medianPer": 19.40473,
        "peers": [
          {
            "ticker": "EME",
            "per": 17.70811
          },
          {
            "ticker": "FIX",
            "per": 19.40473
          },
          {
            "ticker": "MTZ",
            "per": 19.69813616710029
          }
        ],
        "excluded": [],
        "note": "유효 비교군 3개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 21.304620246575343,
      "ttmEps": 11.04,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 10.866259596100509,
        "peTTM": 53.9192,
        "finnhubUpdated": "2026-11-17 06:33",
        "periods": "Q4'25~Q3'26",
        "endDates": [
          "2025-12-31",
          "2026-03-31",
          "2026-06-30",
          "2026-09-30"
        ],
        "secVerified": false,
        "quarterly": 11.04,
        "checks": [
          "분기 연속 OK",
          "최신성 OK(승인 근거 2026-06-30)",
          "역산 주식수 일관(±0.7%)",
          "공시 주식수 대조 +1.4%"
        ],
        "gapPct": -1.5737355425678445,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 476.4864067382812,
        "fairHistProxy": 735.7794685217406,
        "proxyPer": 34.53614568135825,
        "trailingPer": 43.16000061035156,
        "modelSplitEligible": false,
        "modelSplitRatio": null,
        "actionBeforeModelSplit": null,
        "modelSplitMode": "on"
      },
      "earningsStatus": {
        "latestOfficialPeriodEnd": "2026-09-30",
        "latestOfficialSource": "10-Q 2026-10-29",
        "valuationActualPeriodEnd": "2026-09-30",
        "valuationPeriods": "Q4'25~Q3'26",
        "earningsReleaseDate": "2026-10-29",
        "earningsReleaseAtUtc": "2026-10-30T04:59:00+00:00",
        "consensusUpdatedAtUtc": "2026-11-16T00:00:54.699675+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.5181974553981852,
        "candSpread": 1.546014811852574,
        "fairAltExCappedGrowth": 444.9484051878046,
        "fairAltGapPct": -6.618867003230033,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 22.3654024912683,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 476.4864067382812,
          "per": 43.16000061035156,
          "eps": 11.04,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "sector_per",
          "fairPrice": 413.410403637328,
          "per": 19.40473,
          "eps": 21.304620246575343,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 639.1386073972603,
          "per": 30.0,
          "eps": 21.304620246575343,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": "최대/최소 2.22배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [],
      "recentChanges": [
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
        },
        {
          "date": "2026-10-30",
          "prevFairPrice": 407.9253739010761,
          "newFairPrice": 476.4864067382812,
          "changePct": 16.807248880240397,
          "epsEffect": 0.183393747195679,
          "perEffect": 68.37763909000938,
          "otherEffect": 0.0,
          "note": "EPS 19.3850->19.3937(적정PER 21.04배 유지 가정 시 +0.18) + 적정PER 21.04->24.57배(EPS 19.3937 유지 가정 시 +68.38)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "EME": {
      "ticker": "EME",
      "asOf": "2026-11-17",
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
      "currentPrice": 638.719970703125,
      "fairPrice": 791.54721507809,
      "ratio": 0.8069259275204603,
      "bandAggressiveLe": 633.237772062472,
      "bandDcaHigh": 712.392493570281,
      "bandFairHigh": 870.701936585899,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±52% (±40% 밖)",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "고성장형",
      "stockTypeReason": "다음 회계연도 성장률 34.9%(기준 30% 초과)",
      "candidates": {
        "historicalPer": 18.28518526053723,
        "historicalPerYearsUsed": 5,
        "historicalPerEpsBasis": "TTM EPS",
        "sectorPer": 19.69813616710029,
        "sectorPerValidPeers": 3,
        "sectorPerEpsBasis": "NTM EPS",
        "growthPerPeg": 30.0,
        "growthPerPegEpsBasis": "NTM EPS"
      },
      "sectorPeerDisplay": {
        "basis": "forwardPE",
        "medianPer": 19.69813616710029,
        "peers": [
          {
            "ticker": "PWR",
            "per": 30.49887
          },
          {
            "ticker": "FIX",
            "per": 19.40473
          },
          {
            "ticker": "MTZ",
            "per": 19.69813616710029
          }
        ],
        "excluded": [],
        "note": "유효 비교군 3개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 40.18386350684931,
      "ttmEps": 34.62,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 34.15541756877527,
        "peTTM": 18.7004,
        "finnhubUpdated": "2026-11-17 06:33",
        "periods": "Q4'25~Q3'26",
        "endDates": [
          "2025-12-31",
          "2026-03-31",
          "2026-06-30",
          "2026-09-30"
        ],
        "secVerified": false,
        "quarterly": 34.62,
        "checks": [
          "분기 연속 OK",
          "최신성 OK(승인 근거 2026-06-30)",
          "역산 주식수 일관(±1.5%)",
          "공시 주식수 대조 +1.0%"
        ],
        "gapPct": -1.3419480971251452,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 633.0331137197988,
        "fairHistProxy": 520.5688554599168,
        "proxyPer": 12.95467409128508,
        "trailingPer": 18.28518526053723,
        "modelSplitEligible": false,
        "modelSplitRatio": null,
        "actionBeforeModelSplit": null,
        "modelSplitMode": "on"
      },
      "earningsStatus": {
        "latestOfficialPeriodEnd": "2026-09-30",
        "latestOfficialSource": "8-K(실적) 2026-10-29",
        "valuationActualPeriodEnd": "2026-09-30",
        "valuationPeriods": "Q4'25~Q3'26",
        "earningsReleaseDate": "2026-10-29",
        "earningsReleaseAtUtc": "2026-10-30T04:59:00+00:00",
        "consensusUpdatedAtUtc": "2026-11-16T00:00:54.699675+00:00",
        "periodCompareMethod": "fallback_45d",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.8615398565172571,
        "candSpread": 1.9043488864613805,
        "fairAltExCappedGrowth": 712.2901643989444,
        "fairAltGapPct": -10.012927740681455,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 19.69813616710029,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 633.0331137197988,
          "per": 18.28518526053723,
          "eps": 34.62,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "sector_per",
          "fairPrice": 791.54721507809,
          "per": 19.69813616710029,
          "eps": 40.18386350684931,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 1205.5159052054794,
          "per": 30.0,
          "eps": 40.18386350684931,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": "최대/최소 1.64배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-11-13",
          "prevFairPrice": 796.448367590021,
          "newFairPrice": 812.8116077960944,
          "changePct": 2.054526177960172,
          "epsEffect": 0.3255436949190115,
          "perEffect": 16.03769651115449,
          "otherEffect": 0.0,
          "note": "EPS 40.1018->40.1182(적정PER 19.86배 유지 가정 시 +0.33) + 적정PER 19.86->20.26배(EPS 40.1182 유지 가정 시 +16.04)"
        },
        {
          "date": "2026-11-14",
          "prevFairPrice": 812.8116077960944,
          "newFairPrice": 789.7391457553425,
          "changePct": -2.8385989840022057,
          "epsEffect": 0.3327668701195856,
          "perEffect": -23.40522891087156,
          "otherEffect": 0.0,
          "note": "EPS 40.1182->40.1346(적정PER 20.26배 유지 가정 시 +0.33) + 적정PER 20.26->19.68배(EPS 40.1346 유지 가정 시 -23.41)"
        },
        {
          "date": "2026-11-17",
          "prevFairPrice": 789.7391457553425,
          "newFairPrice": 791.54721507809,
          "changePct": 0.2289451311189733,
          "epsEffect": 0.9695659169443901,
          "perEffect": 0.8385034058030885,
          "otherEffect": 0.0,
          "note": "EPS 40.1346->40.1839(적정PER 19.68배 유지 가정 시 +0.97) + 적정PER 19.68->19.70배(EPS 40.1839 유지 가정 시 +0.84)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "FIX": {
      "ticker": "FIX",
      "asOf": "2026-11-17",
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
      "currentPrice": 1057.6800537109375,
      "fairPrice": 1283.8569674944677,
      "ratio": 0.8238301309958777,
      "bandAggressiveLe": 1027.0855739955741,
      "bandDcaHigh": 1155.471270745021,
      "bandFairHigh": 1412.2426642439145,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±52% (±40% 밖)",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "고성장형",
      "stockTypeReason": "다음 회계연도 성장률 75.7%(기준 30% 초과)",
      "candidates": {
        "historicalPer": 25.175573140306934,
        "historicalPerYearsUsed": 5,
        "historicalPerEpsBasis": "TTM EPS",
        "sectorPer": 19.69813616710029,
        "sectorPerValidPeers": 3,
        "sectorPerEpsBasis": "NTM EPS",
        "growthPerPeg": 30.0,
        "growthPerPegEpsBasis": "NTM EPS"
      },
      "sectorPeerDisplay": {
        "basis": "forwardPE",
        "medianPer": 19.69813616710029,
        "peers": [
          {
            "ticker": "PWR",
            "per": 30.49887
          },
          {
            "ticker": "EME",
            "per": 17.70811
          },
          {
            "ticker": "MTZ",
            "per": 19.69813616710029
          }
        ],
        "excluded": [],
        "note": "유효 비교군 3개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 65.17657084931507,
      "ttmEps": 46.32,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 44.344197190584175,
        "peTTM": 23.8516,
        "finnhubUpdated": "2026-11-16 10:53",
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
        "gapPct": -4.265550106683557,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 1166.1325478590172,
        "fairHistProxy": 918.1414525504634,
        "proxyPer": 14.08698617595516,
        "trailingPer": 25.175573140306934,
        "modelSplitEligible": false,
        "modelSplitRatio": null,
        "actionBeforeModelSplit": null,
        "modelSplitMode": "on"
      },
      "earningsStatus": {
        "latestOfficialPeriodEnd": "2026-09-30",
        "latestOfficialSource": "10-Q 2026-10-22",
        "valuationActualPeriodEnd": "2026-09-30",
        "valuationPeriods": "Q4'25~Q3'26",
        "earningsReleaseDate": "2026-10-22",
        "earningsReleaseAtUtc": "2026-10-23T04:59:00+00:00",
        "consensusUpdatedAtUtc": "2026-11-16T00:00:54.699675+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.7106848273298927,
        "candSpread": 1.6767366017433578,
        "fairAltExCappedGrowth": 1224.9947576767424,
        "fairAltGapPct": -4.5847949816870015,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 19.69813616710029,
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
          "fairPrice": 1283.8569674944677,
          "per": 19.69813616710029,
          "eps": 65.17657084931507,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 1955.297125479452,
          "per": 30.0,
          "eps": 65.17657084931507,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": "최대/최소 1.52배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-11-13",
          "prevFairPrice": 1289.988592851061,
          "newFairPrice": 1316.863066130267,
          "changePct": 2.083310924464039,
          "epsEffect": 0.8912688087259331,
          "perEffect": 25.983204470480082,
          "otherEffect": 0.0,
          "note": "EPS 64.9519->64.9968(적정PER 19.86배 유지 가정 시 +0.89) + 적정PER 19.86->20.26배(EPS 64.9968 유지 가정 시 +25.98)"
        },
        {
          "date": "2026-11-14",
          "prevFairPrice": 1316.863066130267,
          "newFairPrice": 1279.8434842844865,
          "changePct": -2.811194481637809,
          "epsEffect": 0.910701692482545,
          "perEffect": -37.93028353826313,
          "otherEffect": 0.0,
          "note": "EPS 64.9968->65.0417(적정PER 20.26배 유지 가정 시 +0.91) + 적정PER 20.26->19.68배(EPS 65.0417 유지 가정 시 -37.93)"
        },
        {
          "date": "2026-11-17",
          "prevFairPrice": 1279.8434842844865,
          "newFairPrice": 1283.8569674944677,
          "changePct": 0.31359172111775235,
          "epsEffect": 2.653465235940442,
          "perEffect": 1.3600179740407936,
          "otherEffect": 0.0,
          "note": "EPS 65.0417->65.1766(적정PER 19.68배 유지 가정 시 +2.65) + 적정PER 19.68->19.70배(EPS 65.1766 유지 가정 시 +1.36)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "COHR": {
      "ticker": "COHR",
      "asOf": "2026-11-17",
      "verdict": "매수",
      "action": "관망(모델 민감도 높음)",
      "actionRaw": "적극 모아가기",
      "actionCapReason": "model_split",
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "a_kept_two_candidates",
      "candidateBadge": "후보 2개",
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": null,
      "sectorFewPeers": null,
      "currentPrice": 203.42999267578125,
      "fairPrice": 262.0478423255218,
      "ratio": 0.7763085964397137,
      "bandAggressiveLe": 209.63827386041746,
      "bandDcaHigh": 235.8430580929696,
      "bandFairHigh": 288.252626558074,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "EPS 품질 경고: 과거 PER 이력 부족(2년치)",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
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
            "per": 32.50994
          },
          {
            "ticker": "AAOI",
            "per": 17.8492
          }
        ],
        "excluded": [],
        "note": "유효 비교군 2개 이하(최소 3개 기준 미달)"
      },
      "epsUsedForCandidates": 12.470546164383562,
      "ttmEps": 4.5609549392025395,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 4.5609549392025395,
        "peTTM": 44.6025,
        "finnhubUpdated": "2026-11-17 06:33",
        "periods": "Q4'25~Q3'26",
        "endDates": [
          "2025-12-31",
          "2026-03-31",
          "2026-06-30",
          "2026-09-30"
        ],
        "secVerified": false,
        "quarterly": null,
        "checks": [
          "분기 연속 OK",
          "최신성 OK(승인 근거 2026-06-30)"
        ],
        "gapPct": null,
        "gapCause": null,
        "failReason": "분기별 역산 주식수 불일치(최대 6.0% - 분할·단위·기본/희석 섞임 의심)",
        "source": "finnhub_peTTM(분기 검증 실패 - 임시)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 149.97929971953675,
        "fairHistProxy": 270.0236436668766,
        "proxyPer": 21.652912399143847,
        "trailingPer": 32.88331099928821,
        "modelSplitEligible": true,
        "modelSplitRatio": 2.4944534721198814,
        "actionBeforeModelSplit": "분할매수",
        "modelSplitMode": "on"
      },
      "earningsStatus": {
        "latestOfficialPeriodEnd": "2026-09-30",
        "latestOfficialSource": "10-Q 2026-11-04",
        "valuationActualPeriodEnd": "2026-09-30",
        "valuationPeriods": "Q4'25~Q3'26",
        "earningsReleaseDate": "2026-11-04",
        "earningsReleaseAtUtc": "2026-11-05T04:59:00+00:00",
        "consensusUpdatedAtUtc": "2026-11-16T00:00:54.699675+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.3657381865301803,
        "candSpread": 2.4944534721198814,
        "fairAltExCappedGrowth": 149.97929971953675,
        "fairAltGapPct": -42.766443566732725,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 21.0133412659938,
      "fairPriceBasis": "적정가 후보 2개 평균",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 149.97929971953675,
          "per": 32.88331099928821,
          "eps": 4.5609549392025395,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 374.11638493150684,
          "per": 30.0,
          "eps": 12.470546164383562,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": null,
      "qualityWarnings": [
        "과거 PER 이력 부족(2년치)"
      ],
      "recentChanges": [
        {
          "date": "2026-11-13",
          "prevFairPrice": 269.6952910993127,
          "newFairPrice": 265.755928359016,
          "changePct": -1.4606716803394495,
          "epsEffect": 0.3222656941917057,
          "perEffect": -4.261628434488395,
          "otherEffect": 0.0,
          "note": "EPS 12.3967->12.4116(적정PER 21.76배 유지 가정 시 +0.32) + 적정PER 21.76->21.41배(EPS 12.4116 유지 가정 시 -4.26)"
        },
        {
          "date": "2026-11-14",
          "prevFairPrice": 265.755928359016,
          "newFairPrice": 261.20040527655635,
          "changePct": -1.7141755258627784,
          "epsEffect": 0.31578326645792176,
          "perEffect": -4.871306348917579,
          "otherEffect": 0.0,
          "note": "EPS 12.4116->12.4263(적정PER 21.41배 유지 가정 시 +0.32) + 적정PER 21.41->21.02배(EPS 12.4263 유지 가정 시 -4.87)"
        },
        {
          "date": "2026-11-17",
          "prevFairPrice": 261.20040527655635,
          "newFairPrice": 262.0478423255218,
          "changePct": 0.32443940815030065,
          "epsEffect": 0.9300054862028074,
          "perEffect": -0.0825684372373625,
          "otherEffect": 0.0,
          "note": "EPS 12.4263->12.4705(적정PER 21.02배 유지 가정 시 +0.93) + 적정PER 21.02->21.01배(EPS 12.4705 유지 가정 시 -0.08)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "LITE": {
      "ticker": "LITE",
      "asOf": "2026-11-17",
      "verdict": "매수",
      "action": "분할매수",
      "actionRaw": "적극 모아가기",
      "actionCapReason": "low_confidence_cap",
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "a_kept_one_candidate",
      "candidateBadge": "후보 1개",
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": null,
      "sectorFewPeers": null,
      "currentPrice": 546.0,
      "fairPrice": 923.0387630136986,
      "ratio": 0.5915244536614298,
      "bandAggressiveLe": 738.431010410959,
      "bandDcaHigh": 830.7348867123287,
      "bandFairHigh": 1015.3426393150686,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "적정가 후보 부족(2개 미만)",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "이익훼손형",
      "stockTypeReason": "TTM EPS $-78.72(적자)",
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
            "per": 19.31386132210312
          },
          {
            "ticker": "AAOI",
            "per": 17.8492
          }
        ],
        "excluded": [],
        "note": "유효 비교군 2개 이하(최소 3개 기준 미달)"
      },
      "epsUsedForCandidates": 30.767958767123286,
      "ttmEps": null,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": null,
        "peTTM": null,
        "finnhubUpdated": "2026-11-17 06:33",
        "periods": "Q4'25~Q3'26",
        "endDates": [
          "2025-12-27",
          "2026-03-28",
          "2026-06-27",
          "2026-09-26"
        ],
        "secVerified": false,
        "quarterly": null,
        "checks": [
          "분기 연속 OK",
          "최신성 OK(승인 근거 2026-06-27)"
        ],
        "gapPct": null,
        "gapCause": null,
        "failReason": "분기별 역산 주식수 불일치(최대 20.3% - 분할·단위·기본/희석 섞임 의심)",
        "source": "없음(분기 검증 실패·peTTM 없음)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": null,
        "fairHistProxy": 939.0380988898496,
        "proxyPer": 30.51999991280692,
        "trailingPer": 29.03731331896426,
        "modelSplitEligible": false,
        "modelSplitRatio": null,
        "actionBeforeModelSplit": null,
        "modelSplitMode": "on"
      },
      "earningsStatus": {
        "latestOfficialPeriodEnd": "2026-09-30",
        "latestOfficialSource": "8-K(실적) 2026-11-02",
        "valuationActualPeriodEnd": "2026-09-26",
        "valuationPeriods": "Q4'25~Q3'26",
        "earningsReleaseDate": "2026-11-02",
        "earningsReleaseAtUtc": "2026-11-03T04:59:00+00:00",
        "consensusUpdatedAtUtc": "2026-11-16T00:00:54.699675+00:00",
        "periodCompareMethod": "fallback_45d",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
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
          "fairPrice": 923.0387630136986,
          "per": 30.0,
          "eps": 30.767958767123286,
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
          "date": "2026-11-13",
          "prevFairPrice": 916.7943821917809,
          "newFairPrice": 918.0432583561644,
          "changePct": 0.13622205683654573,
          "epsEffect": 1.2488761643835746,
          "perEffect": -1.0871816138975092e-13,
          "otherEffect": 0.0,
          "note": "EPS 30.5598->30.6014(적정PER 30.00배 유지 가정 시 +1.25) + 적정PER 30.00->30.00배(EPS 30.6014 유지 가정 시 -0.00)"
        },
        {
          "date": "2026-11-14",
          "prevFairPrice": 918.0432583561644,
          "newFairPrice": 919.292134520548,
          "changePct": 0.13603674478474645,
          "epsEffect": 1.2488761643835744,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 30.6014->30.6431(적정PER 30.00배 유지 가정 시 +1.25) + 적정PER 30.00->30.00배(EPS 30.6431 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-17",
          "prevFairPrice": 919.292134520548,
          "newFairPrice": 923.0387630136986,
          "changePct": 0.4075558086989043,
          "epsEffect": 3.7466284931506166,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 30.6431->30.7680(적정PER 30.00배 유지 가정 시 +3.75) + 적정PER 30.00->30.00배(EPS 30.7680 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "CEG": {
      "ticker": "CEG",
      "asOf": "2026-11-17",
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
      "currentPrice": 277.82000732421875,
      "fairPrice": 285.3230626542393,
      "ratio": 0.9737032987792055,
      "bandAggressiveLe": 228.25845012339147,
      "bandDcaHigh": 256.7907563888154,
      "bandFairHigh": 313.8553689196633,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±44% (±40% 밖)",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "고성장형",
      "stockTypeReason": "다음 회계연도 성장률 33.0%(기준 30% 초과)",
      "candidates": {
        "historicalPer": 23.331337203522644,
        "historicalPerYearsUsed": 3,
        "historicalPerEpsBasis": "TTM EPS",
        "sectorPer": 11.8974,
        "sectorPerValidPeers": 3,
        "sectorPerEpsBasis": "NTM EPS",
        "growthPerPeg": 30.0,
        "growthPerPegEpsBasis": "NTM EPS"
      },
      "sectorPeerDisplay": {
        "basis": "forwardPE",
        "medianPer": 11.8974,
        "peers": [
          {
            "ticker": "VST",
            "per": 13.65204
          },
          {
            "ticker": "NRG",
            "per": 9.74034
          },
          {
            "ticker": "TLN",
            "per": 11.8974
          }
        ],
        "excluded": [],
        "note": "유효 비교군 3개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 13.324800712328768,
      "ttmEps": 12.229177443424044,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 12.229177443424044,
        "peTTM": 22.7178,
        "finnhubUpdated": "2026-11-17 06:33",
        "periods": "Q4'25~Q3'26",
        "endDates": [
          "2025-12-31",
          "2026-03-31",
          "2026-06-30",
          "2026-09-30"
        ],
        "secVerified": false,
        "quarterly": null,
        "checks": [
          "분기 연속 OK",
          "최신성 OK(승인 근거 2026-06-30)"
        ],
        "gapPct": null,
        "gapCause": null,
        "failReason": "분기별 역산 주식수 불일치(최대 15.4% - 분할·단위·기본/희석 섞임 의심)",
        "source": "finnhub_peTTM(분기 검증 실패 - 임시)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 285.3230626542393,
        "fairHistProxy": 229.28763616978918,
        "proxyPer": 17.207584647599333,
        "trailingPer": 23.331337203522644,
        "modelSplitEligible": false,
        "modelSplitRatio": null,
        "actionBeforeModelSplit": null,
        "modelSplitMode": "on"
      },
      "earningsStatus": {
        "latestOfficialPeriodEnd": "2026-09-30",
        "latestOfficialSource": "10-Q 2026-11-09",
        "valuationActualPeriodEnd": "2026-09-30",
        "valuationPeriods": "Q4'25~Q3'26",
        "earningsReleaseDate": "2026-11-09",
        "earningsReleaseAtUtc": "2026-11-10T04:59:00+00:00",
        "consensusUpdatedAtUtc": "2026-11-16T00:00:54.699675+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.9177756356317586,
        "candSpread": 2.521559332291089,
        "fairAltExCappedGrowth": 221.9267733245498,
        "fairAltGapPct": -22.21912548531505,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 21.41293283210189,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 285.3230626542393,
          "per": 23.331337203522644,
          "eps": 12.229177443424044,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "sector_per",
          "fairPrice": 158.53048399486028,
          "per": 11.8974,
          "eps": 13.324800712328768,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 399.74402136986305,
          "per": 30.0,
          "eps": 13.324800712328768,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": "최대/최소 2.52배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-11-13",
          "prevFairPrice": 227.04813224598055,
          "newFairPrice": 295.8014161554623,
          "changePct": 30.281369518158137,
          "epsEffect": -0.7310304684260149,
          "perEffect": 69.48431437790775,
          "otherEffect": 0.0,
          "note": "EPS 13.3191->13.2762(적정PER 17.05배 유지 가정 시 -0.73) + 적정PER 17.05->22.28배(EPS 13.2762 유지 가정 시 +69.48)"
        },
        {
          "date": "2026-11-14",
          "prevFairPrice": 295.8014161554623,
          "newFairPrice": 285.52515130167484,
          "changePct": -3.4740418039062444,
          "epsEffect": 0.1605898392606407,
          "perEffect": -10.436854693048085,
          "otherEffect": 0.0,
          "note": "EPS 13.2762->13.2834(적정PER 22.28배 유지 가정 시 +0.16) + 적정PER 22.28->21.49배(EPS 13.2834 유지 가정 시 -10.44)"
        },
        {
          "date": "2026-11-17",
          "prevFairPrice": 285.52515130167484,
          "newFairPrice": 285.3230626542393,
          "changePct": -0.07077787946673655,
          "epsEffect": 0.8896955985641463,
          "perEffect": -1.0917842459996294,
          "otherEffect": 0.0,
          "note": "EPS 13.2834->13.3248(적정PER 21.49배 유지 가정 시 +0.89) + 적정PER 21.49->21.41배(EPS 13.3248 유지 가정 시 -1.09)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "VST": {
      "ticker": "VST",
      "asOf": "2026-11-17",
      "verdict": "적정",
      "action": "관망(적정가 근처)",
      "actionRaw": "관망(적정가 근처)",
      "actionCapReason": null,
      "cashflowVeto": true,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "a_kept_capped_not_used",
      "candidateBadge": null,
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": "median",
      "sectorFewPeers": true,
      "currentPrice": 130.16000366210938,
      "fairPrice": 119.40368812818082,
      "ratio": 1.0900836121777207,
      "bandAggressiveLe": 95.52295050254466,
      "bandDcaHigh": 107.46331931536274,
      "bandFairHigh": 131.3440569409989,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±152% (±40% 밖) / 사업 위험으로 신뢰도 1단계 하향(낮음→낮음): 현금흐름 거부권 발동(2/3: FCF 2년 연속 악화(3.8B→2.5B→1.3B), 부채/자본 3.45); EPS 수정 방향 하향(하향)",
      "bizRiskBadge": true,
      "bizRiskDetail": [
        "현금흐름 거부권(2/3: FCF 2년 연속 악화(3.8B→2.5B→1.3B), 부채/자본 3.45)",
        "EPS 수정 방향 하향(하향)"
      ],
      "stockType": "기타",
      "stockTypeReason": "경기순환형·이익훼손형·고성장형 조건 모두 미해당",
      "candidates": {
        "historicalPer": 15.123076805701622,
        "historicalPerYearsUsed": 5,
        "historicalPerEpsBasis": "TTM EPS",
        "sectorPer": 11.8974,
        "sectorPerValidPeers": 3,
        "sectorPerEpsBasis": "NTM EPS",
        "growthPerPeg": 30.0,
        "growthPerPegEpsBasis": "NTM EPS"
      },
      "sectorPeerDisplay": {
        "basis": "forwardPE",
        "medianPer": 11.8974,
        "peers": [
          {
            "ticker": "CEG",
            "per": 19.95291
          },
          {
            "ticker": "NRG",
            "per": 9.74034
          },
          {
            "ticker": "TLN",
            "per": 11.8974
          }
        ],
        "excluded": [],
        "note": "유효 비교군 3개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 10.036116136986301,
      "ttmEps": 7.72921636948393,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 7.72921636948393,
        "peTTM": 16.84,
        "finnhubUpdated": "2026-11-17 06:33",
        "periods": "Q4'25~Q3'26",
        "endDates": [
          "2025-12-31",
          "2026-03-31",
          "2026-06-30",
          "2026-09-30"
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
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 116.88953280359172,
        "fairHistProxy": 123.50897432798777,
        "proxyPer": 12.306451284757223,
        "trailingPer": 15.123076805701622,
        "modelSplitEligible": false,
        "modelSplitRatio": null,
        "actionBeforeModelSplit": null,
        "modelSplitMode": "on"
      },
      "earningsStatus": {
        "latestOfficialPeriodEnd": "2026-09-30",
        "latestOfficialSource": "10-Q 2026-11-09",
        "valuationActualPeriodEnd": "2026-09-30",
        "valuationPeriods": "Q4'25~Q3'26",
        "earningsReleaseDate": "2026-11-06",
        "earningsReleaseAtUtc": "2026-11-07T04:59:00+00:00",
        "consensusUpdatedAtUtc": "2026-11-16T00:00:54.699675+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.7701401880952028,
        "candSpread": 2.575795085223726,
        "fairAltExCappedGrowth": 118.14661046588627,
        "fairAltGapPct": -1.052796343229423,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 11.8974,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 116.88953280359172,
          "per": 15.123076805701622,
          "eps": 7.72921636948393,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "sector_per",
          "fairPrice": 119.40368812818082,
          "per": 11.8974,
          "eps": 10.036116136986301,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 301.08348410958905,
          "per": 30.0,
          "eps": 10.036116136986301,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": "최대/최소 2.52배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [
        "⚠ 사업 경고(현금흐름/EPS 하향): 현금흐름 거부권 발동(2/3: FCF 2년 연속 악화(3.8B→2.5B→1.3B), 부채/자본 3.45); EPS 수정 방향 하향(하향)"
      ],
      "recentChanges": [
        {
          "date": "2026-11-13",
          "prevFairPrice": 126.9919049347726,
          "newFairPrice": 127.03956233365479,
          "changePct": 0.03752790298457076,
          "epsEffect": 0.0476573988821827,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 10.6739->10.6779(적정PER 11.90배 유지 가정 시 +0.05) + 적정PER 11.90->11.90배(EPS 10.6779 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-14",
          "prevFairPrice": 127.03956233365479,
          "newFairPrice": 127.087219732537,
          "changePct": 0.037513824832804084,
          "epsEffect": 0.04765739888220383,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 10.6779->10.6819(적정PER 11.90배 유지 가정 시 +0.05) + 적정PER 11.90->11.90배(EPS 10.6819 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-17",
          "prevFairPrice": 127.087219732537,
          "newFairPrice": 119.40368812818082,
          "changePct": -6.045872764017223,
          "epsEffect": -7.683531604356176,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 10.6819->10.0361(적정PER 11.90배 유지 가정 시 -7.68) + 적정PER 11.90->11.90배(EPS 10.0361 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "GEV": {
      "ticker": "GEV",
      "asOf": "2026-11-17",
      "verdict": "적정",
      "action": "관망(적정가 근처)",
      "actionRaw": "관망(적정가 근처)",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": 1213.0234509573006,
      "fairBasisMode": "a_kept_b_higher",
      "candidateBadge": null,
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": "median",
      "sectorFewPeers": true,
      "currentPrice": 763.5700073242188,
      "fairPrice": 778.6677,
      "ratio": 0.9806108656159986,
      "bandAggressiveLe": 622.93416,
      "bandDcaHigh": 700.80093,
      "bandFairHigh": 856.53447,
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
            "per": 23.57188
          },
          {
            "ticker": "HUBB",
            "per": 18.66361
          },
          {
            "ticker": "SMNEY",
            "per": 23.06984
          }
        ],
        "excluded": [],
        "note": "유효 비교군 3개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 25.95559,
      "ttmEps": 38.11,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 37.239142984428725,
        "peTTM": 20.5045,
        "finnhubUpdated": "2026-11-17 06:33",
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
        "gapPct": -2.285114184128245,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 1827.255593509001,
        "fairHistProxy": null,
        "proxyPer": null,
        "trailingPer": 47.94687991364474,
        "modelSplitEligible": false,
        "modelSplitRatio": null,
        "actionBeforeModelSplit": null,
        "modelSplitMode": "on"
      },
      "earningsStatus": {
        "latestOfficialPeriodEnd": "2026-09-30",
        "latestOfficialSource": "10-Q 2026-10-28",
        "valuationActualPeriodEnd": "2026-09-30",
        "valuationPeriods": "Q4'25~Q3'26",
        "earningsReleaseDate": "2026-10-28",
        "earningsReleaseAtUtc": "2026-10-29T04:59:00+00:00",
        "consensusUpdatedAtUtc": "2026-11-16T00:00:54.699675+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 1.4682771611047947,
        "candSpread": 3.0515733409264567,
        "fairAltExCappedGrowth": 1213.0234509573006,
        "fairAltGapPct": 55.781914539064694,
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
          "fairPrice": 598.7913084056,
          "per": 23.06984,
          "eps": 25.95559,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 778.6677,
          "per": 30.0,
          "eps": 25.95559,
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
          "date": "2026-11-04",
          "prevFairPrice": 771.4671,
          "newFairPrice": 776.4111,
          "changePct": 0.6408568816479762,
          "epsEffect": 4.943999999999988,
          "perEffect": 9.194554451141812e-14,
          "otherEffect": 0.0,
          "note": "EPS 25.7156->25.8804(적정PER 30.00배 유지 가정 시 +4.94) + 적정PER 30.00->30.00배(EPS 25.8804 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-11",
          "prevFairPrice": 776.4111,
          "newFairPrice": 775.3488,
          "changePct": -0.1368218460555304,
          "epsEffect": -1.0622999999999652,
          "perEffect": -9.18197429200518e-14,
          "otherEffect": 0.0,
          "note": "EPS 25.8804->25.8450(적정PER 30.00배 유지 가정 시 -1.06) + 적정PER 30.00->30.00배(EPS 25.8450 유지 가정 시 -0.00)"
        },
        {
          "date": "2026-11-17",
          "prevFairPrice": 775.3488,
          "newFairPrice": 778.6677,
          "changePct": 0.4280525100445097,
          "epsEffect": 3.3189000000000135,
          "perEffect": -9.22127796343375e-14,
          "otherEffect": 0.0,
          "note": "EPS 25.8450->25.9556(적정PER 30.00배 유지 가정 시 +3.32) + 적정PER 30.00->30.00배(EPS 25.9556 유지 가정 시 -0.00)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "BE": {
      "ticker": "BE",
      "asOf": "2026-11-17",
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
      "currentPrice": 177.27999877929688,
      "fairPrice": 152.30027424657533,
      "ratio": 1.1640162807079335,
      "bandAggressiveLe": 121.84021939726027,
      "bandDcaHigh": 137.0702468219178,
      "bandFairHigh": 167.53030167123288,
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
      "epsUsedForCandidates": 5.076675808219178,
      "ttmEps": 1.6300000000000001,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 1.6187500230951004,
        "peTTM": 109.5166,
        "finnhubUpdated": "2026-11-17 06:33",
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
        "gapPct": -0.6901826322024407,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": null,
        "fairHistProxy": null,
        "proxyPer": null,
        "trailingPer": null,
        "modelSplitEligible": false,
        "modelSplitRatio": null,
        "actionBeforeModelSplit": null,
        "modelSplitMode": "on"
      },
      "earningsStatus": {
        "latestOfficialPeriodEnd": "2026-09-30",
        "latestOfficialSource": "10-Q 2026-10-22",
        "valuationActualPeriodEnd": "2026-09-30",
        "valuationPeriods": "Q4'25~Q3'26",
        "earningsReleaseDate": "2026-10-22",
        "earningsReleaseAtUtc": "2026-10-23T04:59:00+00:00",
        "consensusUpdatedAtUtc": "2026-11-16T00:00:54.699675+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.321076243899801,
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
          "fairPrice": 152.30027424657533,
          "per": 30.0,
          "eps": 5.076675808219178,
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
          "date": "2026-11-13",
          "prevFairPrice": 151.4574304109589,
          "newFairPrice": 151.62599917808217,
          "changePct": 0.11129778622672223,
          "epsEffect": 0.16856876712330052,
          "perEffect": -3.591225075611774e-14,
          "otherEffect": 0.0,
          "note": "EPS 5.0486->5.0542(적정PER 30.00배 유지 가정 시 +0.17) + 적정PER 30.00->30.00배(EPS 5.0542 유지 가정 시 -0.00)"
        },
        {
          "date": "2026-11-14",
          "prevFairPrice": 151.62599917808217,
          "newFairPrice": 151.79456794520544,
          "changePct": 0.11117405196802328,
          "epsEffect": 0.16856876712327382,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 5.0542->5.0598(적정PER 30.00배 유지 가정 시 +0.17) + 적정PER 30.00->30.00배(EPS 5.0598 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-17",
          "prevFairPrice": 151.79456794520544,
          "newFairPrice": 152.30027424657533,
          "changePct": 0.33315177757377507,
          "epsEffect": 0.5057063013698747,
          "perEffect": 1.803597558669586e-14,
          "otherEffect": 0.0,
          "note": "EPS 5.0598->5.0767(적정PER 30.00배 유지 가정 시 +0.51) + 적정PER 30.00->30.00배(EPS 5.0767 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "AAPL": {
      "ticker": "AAPL",
      "asOf": "2026-11-17",
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
      "sectorPerMethod": "median",
      "sectorFewPeers": true,
      "currentPrice": 352.7799987792969,
      "fairPrice": 193.50364160931505,
      "ratio": 1.8231181379602235,
      "bandAggressiveLe": 154.80291328745204,
      "bandDcaHigh": 174.15327744838356,
      "bandFairHigh": 212.85400577024657,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±59% (±40% 밖) / 사업 위험으로 신뢰도 1단계 하향(낮음→낮음): EPS 수정 방향 하향(하향)",
      "bizRiskBadge": true,
      "bizRiskDetail": [
        "EPS 수정 방향 하향(하향)"
      ],
      "stockType": "기타",
      "stockTypeReason": "경기순환형·이익훼손형·고성장형 조건 모두 미해당",
      "candidates": {
        "historicalPer": 34.243968728400425,
        "historicalPerYearsUsed": 5,
        "historicalPerEpsBasis": "TTM EPS",
        "sectorPer": 20.192149999999998,
        "sectorPerValidPeers": 4,
        "sectorPerEpsBasis": "NTM EPS",
        "growthPerPeg": 13.042500299999999,
        "growthPerPegEpsBasis": "NTM EPS"
      },
      "sectorPeerDisplay": {
        "basis": "forwardPE",
        "medianPer": 20.192149999999998,
        "peers": [
          {
            "ticker": "MSFT",
            "per": 24.5902
          },
          {
            "ticker": "GOOGL",
            "per": 17.65699
          },
          {
            "ticker": "META",
            "per": 18.7048
          },
          {
            "ticker": "AMZN",
            "per": 21.6795
          }
        ],
        "excluded": [],
        "note": "유효 비교군 4개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 9.583112328767124,
      "ttmEps": 9.006244448114067,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 9.006244448114067,
        "peTTM": 39.1706,
        "finnhubUpdated": "2026-11-16 11:25",
        "periods": "Q4'25~Q3'26",
        "endDates": [
          "2025-12-27",
          "2026-03-28",
          "2026-06-27",
          "2026-09-26"
        ],
        "secVerified": false,
        "quarterly": null,
        "checks": [],
        "gapPct": null,
        "gapCause": null,
        "failReason": "분기 EPS 결측(Q3'26)",
        "source": "finnhub_peTTM(분기 검증 실패 - 임시)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 308.40955324154805,
        "fairHistProxy": 269.85604048486226,
        "proxyPer": 28.15954057793868,
        "trailingPer": 34.243968728400425,
        "modelSplitEligible": false,
        "modelSplitRatio": null,
        "actionBeforeModelSplit": null,
        "modelSplitMode": "on"
      },
      "earningsStatus": {
        "latestOfficialPeriodEnd": "2026-09-30",
        "latestOfficialSource": "8-K(실적) 2026-11-02",
        "valuationActualPeriodEnd": "2026-09-26",
        "valuationPeriods": "Q4'25~Q3'26",
        "earningsReleaseDate": "2026-11-02",
        "earningsReleaseAtUtc": "2026-11-03T04:59:00+00:00",
        "consensusUpdatedAtUtc": "2026-11-16T00:00:54.699675+00:00",
        "periodCompareMethod": "fallback_45d",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.9398037025068169,
        "candSpread": 2.4675183330820687,
        "fairAltExCappedGrowth": null,
        "fairAltGapPct": null,
        "fairAltApplicable": false,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 20.192149999999998,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 308.40955324154805,
          "per": 34.243968728400425,
          "eps": 9.006244448114067,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "sector_per",
          "fairPrice": 193.50364160931505,
          "per": 20.192149999999998,
          "eps": 9.583112328767124,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 124.98774542287889,
          "per": 13.042500299999999,
          "eps": 9.583112328767124,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": false,
      "dispersionFlag": "최대/최소 2.63배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [
        "⚠ 사업 경고(현금흐름/EPS 하향): EPS 수정 방향 하향(하향)"
      ],
      "recentChanges": [
        {
          "date": "2026-11-13",
          "prevFairPrice": 255.45217090134142,
          "newFairPrice": 252.53180014641728,
          "changePct": -1.1432162602571956,
          "epsEffect": 0.26799467918605535,
          "perEffect": -3.188365434110174,
          "otherEffect": 0.0,
          "note": "EPS 9.5314->9.5414(적정PER 26.80배 유지 가정 시 +0.27) + 적정PER 26.80->26.47배(EPS 9.5414 유지 가정 시 -3.19)"
        },
        {
          "date": "2026-11-14",
          "prevFairPrice": 252.53180014641728,
          "newFairPrice": 193.19543195097262,
          "changePct": -23.49659257212026,
          "epsEffect": 0.6997049439162922,
          "perEffect": -60.036073139360965,
          "otherEffect": 0.0,
          "note": "EPS 9.5414->9.5678(적정PER 26.47배 유지 가정 시 +0.70) + 적정PER 26.47->20.19배(EPS 9.5678 유지 가정 시 -60.04)"
        },
        {
          "date": "2026-11-17",
          "prevFairPrice": 193.19543195097262,
          "newFairPrice": 193.50364160931505,
          "changePct": 0.15953258067750234,
          "epsEffect": 0.3082096583424465,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 9.5678->9.5831(적정PER 20.19배 유지 가정 시 +0.31) + 적정PER 20.19->20.19배(EPS 9.5831 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "MSFT": {
      "ticker": "MSFT",
      "asOf": "2026-11-17",
      "verdict": "매수",
      "action": "분할매수",
      "actionRaw": "분할매수",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "median",
      "candidateBadge": null,
      "lowConfidenceCapEligible": false,
      "sectorPerMethod": "median",
      "sectorFewPeers": true,
      "currentPrice": 517.989990234375,
      "fairPrice": 595.3506382223634,
      "ratio": 0.870058679673248,
      "bandAggressiveLe": 476.2805105778907,
      "bandDcaHigh": 535.815574400127,
      "bandFairHigh": 654.8857020445997,
      "modelCheckNeeded": false,
      "confidence": "보통",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±27%",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "기타",
      "stockTypeReason": "경기순환형·이익훼손형·고성장형 조건 모두 미해당",
      "candidates": {
        "historicalPer": 35.179752948855565,
        "historicalPerYearsUsed": 5,
        "historicalPerEpsBasis": "TTM EPS",
        "sectorPer": 20.192149999999998,
        "sectorPerValidPeers": 4,
        "sectorPerEpsBasis": "NTM EPS",
        "growthPerPeg": 27.53999925,
        "growthPerPegEpsBasis": "NTM EPS"
      },
      "sectorPeerDisplay": {
        "basis": "forwardPE",
        "medianPer": 20.192149999999998,
        "peers": [
          {
            "ticker": "AAPL",
            "per": 35.75579
          },
          {
            "ticker": "GOOGL",
            "per": 17.65699
          },
          {
            "ticker": "META",
            "per": 18.7048
          },
          {
            "ticker": "AMZN",
            "per": 21.6795
          }
        ],
        "excluded": [],
        "note": "유효 비교군 4개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 21.61767082191781,
      "ttmEps": 19.16,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 18.990548178792316,
        "peTTM": 27.2762,
        "finnhubUpdated": "2026-11-17 06:32",
        "periods": "Q4'25~Q3'26",
        "endDates": [
          "2025-12-31",
          "2026-03-31",
          "2026-06-30",
          "2026-09-30"
        ],
        "secVerified": false,
        "quarterly": 19.16,
        "checks": [
          "분기 연속 OK",
          "최신성 OK(승인 근거 2026-06-30)",
          "역산 주식수 일관(±0.2%)",
          "공시 주식수 대조 +0.3%"
        ],
        "gapPct": -0.884404077284362,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 674.0440665000726,
        "fairHistProxy": 606.8628905402842,
        "proxyPer": 28.07253822761496,
        "trailingPer": 35.179752948855565,
        "modelSplitEligible": false,
        "modelSplitRatio": null,
        "actionBeforeModelSplit": null,
        "modelSplitMode": "on"
      },
      "earningsStatus": {
        "latestOfficialPeriodEnd": "2026-09-30",
        "latestOfficialSource": "10-Q 2026-10-28",
        "valuationActualPeriodEnd": "2026-09-30",
        "valuationPeriods": "Q4'25~Q3'26",
        "earningsReleaseDate": "2026-10-28",
        "earningsReleaseAtUtc": "2026-10-29T04:59:00+00:00",
        "consensusUpdatedAtUtc": "2026-11-16T00:00:54.699675+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.8863119508959302,
        "candSpread": 1.5441761015115791,
        "fairAltExCappedGrowth": null,
        "fairAltGapPct": null,
        "fairAltApplicable": false,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 27.53999925,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 674.0440665000726,
          "per": 35.179752948855565,
          "eps": 19.16,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "sector_per",
          "fairPrice": 436.5072518867876,
          "per": 20.192149999999998,
          "eps": 21.61767082191781,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 595.3506382223634,
          "per": 27.53999925,
          "eps": 21.61767082191781,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": false,
      "dispersionFlag": "최대/최소 1.74배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-11-13",
          "prevFairPrice": 593.7728905283441,
          "newFairPrice": 594.0884400671479,
          "changePct": 0.05314313668362576,
          "epsEffect": 0.31554953880379366,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 21.5604->21.5718(적정PER 27.54배 유지 가정 시 +0.32) + 적정PER 27.54->27.54배(EPS 21.5718 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-14",
          "prevFairPrice": 594.0884400671479,
          "newFairPrice": 594.4039896059518,
          "changePct": 0.05311490975455466,
          "epsEffect": 0.3155495388038915,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 21.5718->21.5833(적정PER 27.54배 유지 가정 시 +0.32) + 적정PER 27.54->27.54배(EPS 21.5833 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-17",
          "prevFairPrice": 594.4039896059518,
          "newFairPrice": 595.3506382223634,
          "changePct": 0.15926013838486675,
          "epsEffect": 0.9466486164115767,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 21.5833->21.6177(적정PER 27.54배 유지 가정 시 +0.95) + 적정PER 27.54->27.54배(EPS 21.6177 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "GOOGL": {
      "ticker": "GOOGL",
      "asOf": "2026-11-17",
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
      "currentPrice": 283.7200012207031,
      "fairPrice": 346.3132041505,
      "ratio": 0.8192583991033872,
      "bandAggressiveLe": 277.0505633204,
      "bandDcaHigh": 311.68188373545,
      "bandFairHigh": 380.94452456555,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "EPS 품질 경고: EPS 일회성 정상화 적용; 다음회계연도 대안 기준 사용; 과거 PER 중 일회성 정상화 적용된 연도 있음 / 사업 위험으로 신뢰도 1단계 하향(낮음→낮음): EPS 하향 수정이 상향보다 많음(방향은 혼조)",
      "bizRiskBadge": true,
      "bizRiskDetail": [
        "EPS 하향 수정이 상향보다 많음(방향은 혼조)"
      ],
      "stockType": "고성장형",
      "stockTypeReason": "다음 회계연도 성장률 81.0%(기준 30% 초과)",
      "candidates": {
        "historicalPer": 24.0844831795528,
        "historicalPerYearsUsed": 5,
        "historicalPerEpsBasis": "TTM EPS",
        "sectorPer": 23.13485,
        "sectorPerValidPeers": 4,
        "sectorPerEpsBasis": "NTM EPS",
        "growthPerPeg": 30.0,
        "growthPerPegEpsBasis": "NTM EPS"
      },
      "sectorPeerDisplay": {
        "basis": "forwardPE",
        "medianPer": 23.13485,
        "peers": [
          {
            "ticker": "AAPL",
            "per": 35.75579
          },
          {
            "ticker": "MSFT",
            "per": 24.5902
          },
          {
            "ticker": "META",
            "per": 18.7048
          },
          {
            "ticker": "AMZN",
            "per": 21.6795
          }
        ],
        "excluded": [],
        "note": "유효 비교군 4개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 14.96933,
      "ttmEps": 10.950000000000001,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 18.390417253539315,
        "peTTM": 15.4276,
        "finnhubUpdated": "2026-11-17 06:32",
        "periods": "Q4'25~Q3'26",
        "endDates": [
          "2025-12-31",
          "2026-03-31",
          "2026-06-30",
          "2026-09-30"
        ],
        "secVerified": false,
        "quarterly": 19.16,
        "checks": [
          "분기 연속 OK",
          "최신성 OK(승인 근거 2026-06-30)",
          "역산 주식수 일관(±1.0%)"
        ],
        "gapPct": -4.01661141159021,
        "gapCause": null,
        "oneOffApplied": [
          {
            "quarterEnd": "2026-06-30",
            "matchedEnd": "2026-06-30",
            "impact": 6.26,
            "op": "-6.26",
            "category": "지분증권 미실현 평가이익 (Other income (expense), net에 포함)"
          },
          {
            "quarterEnd": "2025-12-31",
            "matchedEnd": "2025-12-31",
            "impact": 0.15,
            "op": "-0.15",
            "category": "지분증권 평가손익 (Other income (expense), net에 포함)"
          },
          {
            "quarterEnd": "2026-03-31",
            "matchedEnd": "2026-03-31",
            "impact": 2.35,
            "op": "-2.35",
            "category": "지분증권 평가손익 (Other income (expense), net에 포함)"
          },
          {
            "quarterEnd": "2026-09-30",
            "matchedEnd": "2026-09-30",
            "impact": -0.55,
            "op": "+0.55",
            "category": "지분증권 평가손익 (Other income (expense), net에 포함)"
          }
        ],
        "oneOffAdjust": -8.209999999999999,
        "quarterlyRaw": 19.16,
        "oneOffNote": "#13-1 일회성 보정(최근 4분기): 19.1600 -8.2100 = 10.9500",
        "source": "quarterly_sum(검증 통과) + 일회성 보정"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 263.7250908161032,
        "fairHistProxy": 260.0828040107234,
        "proxyPer": 17.374378413110232,
        "trailingPer": 24.0844831795528,
        "modelSplitEligible": false,
        "modelSplitRatio": null,
        "actionBeforeModelSplit": null,
        "modelSplitMode": "on"
      },
      "earningsStatus": {
        "latestOfficialPeriodEnd": "2026-09-30",
        "latestOfficialSource": "10-Q 2026-10-29",
        "valuationActualPeriodEnd": "2026-09-30",
        "valuationPeriods": "Q4'25~Q3'26",
        "earningsReleaseDate": "2026-10-28",
        "earningsReleaseAtUtc": "2026-10-29T04:59:00+00:00",
        "consensusUpdatedAtUtc": "2026-11-16T00:00:54.699675+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.7314956648026332,
        "candSpread": 1.7028334263164424,
        "fairAltExCappedGrowth": 305.0191474833016,
        "fairAltGapPct": -11.923904769525596,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 23.13485,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 263.7250908161032,
          "per": 24.0844831795528,
          "eps": 10.950000000000001,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "sector_per",
          "fairPrice": 346.3132041505,
          "per": 23.13485,
          "eps": 14.96933,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 449.07989999999995,
          "per": 30.0,
          "eps": 14.96933,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": null,
      "qualityWarnings": [
        "EPS 일회성 정상화 적용",
        "다음회계연도 대안 기준 사용",
        "과거 PER 중 일회성 정상화 적용된 연도 있음",
        "⚠ 사업 경고(현금흐름/EPS 하향): EPS 하향 수정이 상향보다 많음(방향은 혼조)"
      ],
      "recentChanges": [
        {
          "date": "2026-11-11",
          "prevFairPrice": 345.39405656,
          "newFairPrice": 345.948367566,
          "changePct": 0.16048655020897432,
          "epsEffect": 0.5543110059999738,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 14.9296->14.9536(적정PER 23.13배 유지 가정 시 +0.55) + 적정PER 23.13->23.13배(EPS 14.9536 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-12",
          "prevFairPrice": 345.948367566,
          "newFairPrice": 345.950218354,
          "changePct": 0.0005349896613285314,
          "epsEffect": 0.001850788000012125,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 14.9536->14.9536(적정PER 23.13배 유지 가정 시 +0.00) + 적정PER 23.13->23.13배(EPS 14.9536 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-13",
          "prevFairPrice": 345.950218354,
          "newFairPrice": 346.3132041505,
          "changePct": 0.10492428599323447,
          "epsEffect": 0.3629857964999842,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 14.9536->14.9693(적정PER 23.13배 유지 가정 시 +0.36) + 적정PER 23.13->23.13배(EPS 14.9693 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "META": {
      "ticker": "META",
      "asOf": "2026-11-17",
      "verdict": "매수",
      "action": "분할매수",
      "actionRaw": "분할매수",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "a_kept_capped_not_used",
      "candidateBadge": null,
      "lowConfidenceCapEligible": false,
      "sectorPerMethod": "median",
      "sectorFewPeers": true,
      "currentPrice": 626.4099731445312,
      "fairPrice": 771.7746117351481,
      "ratio": 0.811648846204205,
      "bandAggressiveLe": 617.4196893881185,
      "bandDcaHigh": 694.5971505616334,
      "bandFairHigh": 848.952072908663,
      "modelCheckNeeded": false,
      "confidence": "보통",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±30%",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "기타",
      "stockTypeReason": "경기순환형·이익훼손형·고성장형 조건 모두 미해당",
      "candidates": {
        "historicalPer": 24.426289477379495,
        "historicalPerYearsUsed": 5,
        "historicalPerEpsBasis": "TTM EPS",
        "sectorPer": 23.13485,
        "sectorPerValidPeers": 4,
        "sectorPerEpsBasis": "NTM EPS",
        "growthPerPeg": 30.0,
        "growthPerPegEpsBasis": "NTM EPS"
      },
      "sectorPeerDisplay": {
        "basis": "forwardPE",
        "medianPer": 23.13485,
        "peers": [
          {
            "ticker": "AAPL",
            "per": 35.75579
          },
          {
            "ticker": "MSFT",
            "per": 24.5902
          },
          {
            "ticker": "GOOGL",
            "per": 17.65699
          },
          {
            "ticker": "AMZN",
            "per": 21.6795
          }
        ],
        "excluded": [],
        "note": "유효 비교군 4개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 33.359827780821924,
      "ttmEps": 29.33,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 28.736379711655903,
        "peTTM": 21.7985,
        "finnhubUpdated": "2026-11-17 06:32",
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
        "gapPct": -2.023935521118636,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 716.4230703715406,
        "fairHistProxy": 661.7698386911152,
        "proxyPer": 19.83732778955043,
        "trailingPer": 24.426289477379495,
        "modelSplitEligible": false,
        "modelSplitRatio": null,
        "actionBeforeModelSplit": null,
        "modelSplitMode": "on"
      },
      "earningsStatus": {
        "latestOfficialPeriodEnd": "2026-09-30",
        "latestOfficialSource": "10-Q 2026-10-22",
        "valuationActualPeriodEnd": "2026-09-30",
        "valuationPeriods": "Q4'25~Q3'26",
        "earningsReleaseDate": "2026-10-21",
        "earningsReleaseAtUtc": "2026-10-22T04:59:00+00:00",
        "consensusUpdatedAtUtc": "2026-11-16T00:00:54.699675+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.8792011815139341,
        "candSpread": 1.3969327270625729,
        "fairAltExCappedGrowth": 744.0988410533444,
        "fairAltGapPct": -3.5859913323115777,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 23.13485,
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
          "fairPrice": 771.7746117351481,
          "per": 23.13485,
          "eps": 33.359827780821924,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 1000.7948334246577,
          "per": 30.0,
          "eps": 33.359827780821924,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": null,
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-11-13",
          "prevFairPrice": 770.8793608601192,
          "newFairPrice": 771.1866810383616,
          "changePct": 0.0398661831988261,
          "epsEffect": 0.3073201782424356,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 33.3211->33.3344(적정PER 23.13배 유지 가정 시 +0.31) + 적정PER 23.13->23.13배(EPS 33.3344 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-14",
          "prevFairPrice": 771.1866810383616,
          "newFairPrice": 771.494001216604,
          "changePct": 0.03985029640665535,
          "epsEffect": 0.3073201782424356,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 33.3344->33.3477(적정PER 23.13배 유지 가정 시 +0.31) + 적정PER 23.13->23.13배(EPS 33.3477 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-17",
          "prevFairPrice": 771.494001216604,
          "newFairPrice": 771.7746117351481,
          "changePct": 0.03637235261733738,
          "epsEffect": 0.2806105185440398,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 33.3477->33.3598(적정PER 23.13배 유지 가정 시 +0.28) + 적정PER 23.13->23.13배(EPS 33.3598 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "AMZN": {
      "ticker": "AMZN",
      "asOf": "2026-11-17",
      "verdict": "매수",
      "action": "분할매수",
      "actionRaw": "분할매수",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": 433.8803027237066,
      "fairBasisMode": "a_kept_b_higher",
      "candidateBadge": null,
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": "median",
      "sectorFewPeers": true,
      "currentPrice": 257.75,
      "fairPrice": 320.478,
      "ratio": 0.804267375607686,
      "bandAggressiveLe": 256.3824,
      "bandDcaHigh": 288.4302,
      "bandFairHigh": 352.52580000000006,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "EPS 품질 경고: 다음회계연도 대안 기준 사용",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "고성장형",
      "stockTypeReason": "다음 회계연도 성장률 78.6%(기준 30% 초과)",
      "candidates": {
        "historicalPer": 51.45586272816599,
        "historicalPerYearsUsed": 5,
        "historicalPerEpsBasis": "TTM EPS",
        "sectorPer": 21.6475,
        "sectorPerValidPeers": 4,
        "sectorPerEpsBasis": "NTM EPS",
        "growthPerPeg": 30.0,
        "growthPerPegEpsBasis": "NTM EPS"
      },
      "sectorPeerDisplay": {
        "basis": "forwardPE",
        "medianPer": 21.6475,
        "peers": [
          {
            "ticker": "AAPL",
            "per": 35.75579
          },
          {
            "ticker": "MSFT",
            "per": 24.5902
          },
          {
            "ticker": "GOOGL",
            "per": 17.65699
          },
          {
            "ticker": "META",
            "per": 18.7048
          }
        ],
        "excluded": [],
        "note": "유효 비교군 4개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 10.6826,
      "ttmEps": 12.37,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 12.047883031532502,
        "peTTM": 21.3938,
        "finnhubUpdated": "2026-11-16 10:52",
        "periods": "Q4'25~Q3'26",
        "endDates": [
          "2025-12-31",
          "2026-03-31",
          "2026-06-30",
          "2026-09-30"
        ],
        "secVerified": false,
        "quarterly": 12.37,
        "checks": [
          "분기 연속 OK",
          "최신성 OK(승인 근거 2026-06-30)",
          "역산 주식수 일관(±0.7%)",
          "공시 주식수 대조 +1.2%"
        ],
        "gapPct": -2.604017530052527,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 636.5090219474132,
        "fairHistProxy": 326.8696802621839,
        "proxyPer": 30.598326274706896,
        "trailingPer": 51.45586272816599,
        "modelSplitEligible": false,
        "modelSplitRatio": null,
        "actionBeforeModelSplit": null,
        "modelSplitMode": "on"
      },
      "earningsStatus": {
        "latestOfficialPeriodEnd": "2026-09-30",
        "latestOfficialSource": "10-Q 2026-10-30",
        "valuationActualPeriodEnd": "2026-09-30",
        "valuationPeriods": "Q4'25~Q3'26",
        "earningsReleaseDate": "2026-10-29",
        "earningsReleaseAtUtc": "2026-10-30T04:59:00+00:00",
        "consensusUpdatedAtUtc": "2026-11-16T00:00:54.699675+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 1.15795780053545,
        "candSpread": 2.752452598653938,
        "fairAltExCappedGrowth": 433.8803027237066,
        "fairAltGapPct": 35.385362715601886,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 30.0,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 636.5090219474132,
          "per": 51.45586272816599,
          "eps": 12.37,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "sector_per",
          "fairPrice": 231.25158350000004,
          "per": 21.6475,
          "eps": 10.6826,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 320.478,
          "per": 30.0,
          "eps": 10.6826,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": "최대/최소 2.38배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [
        "다음회계연도 대안 기준 사용"
      ],
      "recentChanges": [
        {
          "date": "2026-11-04",
          "prevFairPrice": 319.875,
          "newFairPrice": 319.96590000000003,
          "changePct": 0.028417350527560233,
          "epsEffect": 0.09090000000002263,
          "perEffect": 3.789157432265711e-14,
          "otherEffect": 0.0,
          "note": "EPS 10.6625->10.6655(적정PER 30.00배 유지 가정 시 +0.09) + 적정PER 30.00->30.00배(EPS 10.6655 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-11",
          "prevFairPrice": 319.96590000000003,
          "newFairPrice": 320.13719999999995,
          "changePct": 0.05353695503174462,
          "epsEffect": 0.17129999999996318,
          "perEffect": -7.582372063552611e-14,
          "otherEffect": 0.0,
          "note": "EPS 10.6655->10.6712(적정PER 30.00배 유지 가정 시 +0.17) + 적정PER 30.00->30.00배(EPS 10.6712 유지 가정 시 -0.00)"
        },
        {
          "date": "2026-11-17",
          "prevFairPrice": 320.13719999999995,
          "newFairPrice": 320.478,
          "changePct": 0.1064543576941569,
          "epsEffect": 0.3408000000000477,
          "perEffect": 3.7952219145154234e-14,
          "otherEffect": 0.0,
          "note": "EPS 10.6712->10.6826(적정PER 30.00배 유지 가정 시 +0.34) + 적정PER 30.00->30.00배(EPS 10.6826 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "ORCL": {
      "ticker": "ORCL",
      "asOf": "2026-11-17",
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
      "currentPrice": 119.08999633789062,
      "fairPrice": 220.16195947106576,
      "ratio": 0.5409199510396878,
      "bandAggressiveLe": 176.12956757685262,
      "bandDcaHigh": 198.14576352395918,
      "bandFairHigh": 242.17815541817234,
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
        "sectorPer": 18.632179999999998,
        "sectorPerValidPeers": 4,
        "sectorPerEpsBasis": "NTM EPS",
        "growthPerPeg": 30.0,
        "growthPerPegEpsBasis": "NTM EPS"
      },
      "sectorPeerDisplay": {
        "basis": "forwardPE",
        "medianPer": 18.632179999999998,
        "peers": [
          {
            "ticker": "CRM",
            "per": 14.14829
          },
          {
            "ticker": "SAP",
            "per": 23.11607
          },
          {
            "ticker": "NOW",
            "per": 25.29198803236138
          },
          {
            "ticker": "ADBE",
            "per": 9.15169
          }
        ],
        "excluded": [],
        "note": "유효 비교군 4개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 9.505039315068492,
      "ttmEps": 6.38,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 5.944691076618111,
        "peTTM": 20.033,
        "finnhubUpdated": "2026-11-17 06:32",
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
        "gapPct": -6.823023877459078,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 220.16195947106576,
        "fairHistProxy": 269.87463914587585,
        "proxyPer": 28.39279567397888,
        "trailingPer": 34.508144117721905,
        "modelSplitEligible": false,
        "modelSplitRatio": null,
        "actionBeforeModelSplit": null,
        "modelSplitMode": "on"
      },
      "earningsStatus": {
        "latestOfficialPeriodEnd": "2026-08-31",
        "latestOfficialSource": "10-Q 2026-09-11",
        "valuationActualPeriodEnd": "2026-08-31",
        "valuationPeriods": "Q4'25~Q3'26",
        "earningsReleaseDate": null,
        "earningsReleaseAtUtc": null,
        "consensusUpdatedAtUtc": "2026-11-16T00:00:54.699675+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.6712228943530705,
        "candSpread": 1.6101175493152171,
        "fairAltExCappedGrowth": 198.6307814482493,
        "fairAltGapPct": -9.779699487842786,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 23.162656373450183,
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
          "fairPrice": 177.09960342543283,
          "per": 18.632179999999998,
          "eps": 9.505039315068492,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 285.15117945205475,
          "per": 30.0,
          "eps": 9.505039315068492,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": "최대/최소 1.85배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
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
      "nextUpdateDate": "2026-12-15"
    },
    "CRM": {
      "ticker": "CRM",
      "asOf": "2026-11-17",
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
      "currentPrice": 214.8300018310547,
      "fairPrice": 356.6081191586423,
      "ratio": 0.6024259973045775,
      "bandAggressiveLe": 285.28649532691384,
      "bandDcaHigh": 320.9473072427781,
      "bandFairHigh": 392.26893107450655,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±62% (±40% 밖)",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "고성장형",
      "stockTypeReason": "다음 회계연도 성장률 33.8%(기준 30% 초과)",
      "candidates": {
        "historicalPer": 52.61206667563132,
        "historicalPerYearsUsed": 4,
        "historicalPerEpsBasis": "TTM EPS",
        "sectorPer": 18.56165,
        "sectorPerValidPeers": 4,
        "sectorPerEpsBasis": "NTM EPS",
        "growthPerPeg": 22.05750015,
        "growthPerPegEpsBasis": "NTM EPS"
      },
      "sectorPeerDisplay": {
        "basis": "forwardPE",
        "medianPer": 18.56165,
        "peers": [
          {
            "ticker": "ORCL",
            "per": 14.00723
          },
          {
            "ticker": "SAP",
            "per": 23.11607
          },
          {
            "ticker": "NOW",
            "per": 25.29198803236138
          },
          {
            "ticker": "ADBE",
            "per": 9.15169
          }
        ],
        "excluded": [],
        "note": "유효 비교군 4개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 16.167204657534246,
      "ttmEps": 10.969999999999999,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 11.577761828419474,
        "peTTM": 18.5554,
        "finnhubUpdated": "2026-11-17 06:32",
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
        "gapPct": 5.540217214398124,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 577.1543714316755,
        "fairHistProxy": 690.5900768515777,
        "proxyPer": 42.71549049326525,
        "trailingPer": 52.61206667563132,
        "modelSplitEligible": false,
        "modelSplitRatio": null,
        "actionBeforeModelSplit": null,
        "modelSplitMode": "on"
      },
      "earningsStatus": {
        "latestOfficialPeriodEnd": "2026-07-31",
        "latestOfficialSource": "10-Q 2026-08-27",
        "valuationActualPeriodEnd": "2026-07-31",
        "valuationPeriods": "Q4'25~Q3'26",
        "earningsReleaseDate": null,
        "earningsReleaseAtUtc": null,
        "consensusUpdatedAtUtc": "2026-11-16T00:00:54.699675+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.6785341209179137,
        "candSpread": 1.9232709598243776,
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
          "fairPrice": 300.08999433152053,
          "per": 18.56165,
          "eps": 16.167204657534246,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 356.6081191586423,
          "per": 22.05750015,
          "eps": 16.167204657534246,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": false,
      "dispersionFlag": "최대/최소 2.83배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-11-13",
          "prevFairPrice": 356.8315978940662,
          "newFairPrice": 356.78690214698145,
          "changePct": -0.012525725678030926,
          "epsEffect": -0.044695747084758715,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 16.1773->16.1753(적정PER 22.06배 유지 가정 시 -0.04) + 적정PER 22.06->22.06배(EPS 16.1753 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-14",
          "prevFairPrice": 356.78690214698145,
          "newFairPrice": 356.74220639989665,
          "changePct": -0.012527294812629965,
          "epsEffect": -0.044695747084758715,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 16.1753->16.1733(적정PER 22.06배 유지 가정 시 -0.04) + 적정PER 22.06->22.06배(EPS 16.1733 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-17",
          "prevFairPrice": 356.74220639989665,
          "newFairPrice": 356.6081191586423,
          "changePct": -0.037586593021191744,
          "epsEffect": -0.1340872412543545,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 16.1733->16.1672(적정PER 22.06배 유지 가정 시 -0.13) + 적정PER 22.06->22.06배(EPS 16.1672 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2026-12-03"
    },
    "PLTR": {
      "ticker": "PLTR",
      "asOf": "2026-11-17",
      "verdict": "고평가",
      "action": "신규 추격 금지 · 모델 점검 필요(적정가/현재가 비율 2.19배)",
      "actionRaw": "신규 추격 금지 · 모델 점검 필요(적정가/현재가 비율 2.19배)",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "a_kept_one_candidate",
      "candidateBadge": "후보 1개",
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": null,
      "sectorFewPeers": null,
      "currentPrice": 160.38999938964844,
      "fairPrice": 73.13570712328769,
      "ratio": 2.1930464023445184,
      "bandAggressiveLe": 58.50856569863015,
      "bandDcaHigh": 65.82213641095892,
      "bandFairHigh": 80.44927783561646,
      "modelCheckNeeded": true,
      "confidence": "낮음",
      "confidenceNote": "적정가/현재가 비율이 2배 초과 또는 0.5배 미만 - 모델 점검 필요로 강제 낮음",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "고성장형",
      "stockTypeReason": "NTM PER 83.7배(기준 40 초과); 다음 회계연도 성장률 126.9%(기준 30% 초과)",
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
            "per": 25.29198803236138
          }
        ],
        "excluded": [
          {
            "ticker": "SNOW",
            "reason": "NTM PER 125.9배 >80배 제외"
          },
          {
            "ticker": "DDOG",
            "reason": "NTM PER 80.2배 >80배 제외"
          }
        ],
        "note": "유효 비교군 2개 이하(최소 3개 기준 미달)"
      },
      "epsUsedForCandidates": 2.4378569041095894,
      "ttmEps": 1.43,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 1.453875984891514,
        "peTTM": 110.3189,
        "finnhubUpdated": "2026-11-17 06:32",
        "periods": "Q4'25~Q3'26",
        "endDates": [
          "2025-12-31",
          "2026-03-31",
          "2026-06-30",
          "2026-09-30"
        ],
        "secVerified": false,
        "quarterly": 1.43,
        "checks": [
          "분기 연속 OK",
          "최신성 OK(승인 근거 2026-06-30)",
          "역산 주식수 일관(±2.1%)"
        ],
        "gapPct": 1.6696492931128626,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": null,
        "fairHistProxy": null,
        "proxyPer": null,
        "trailingPer": null,
        "modelSplitEligible": false,
        "modelSplitRatio": null,
        "actionBeforeModelSplit": null,
        "modelSplitMode": "on"
      },
      "earningsStatus": {
        "latestOfficialPeriodEnd": "2026-09-30",
        "latestOfficialSource": "10-Q 2026-11-03",
        "valuationActualPeriodEnd": "2026-09-30",
        "valuationPeriods": "Q4'25~Q3'26",
        "earningsReleaseDate": "2026-11-02",
        "earningsReleaseAtUtc": "2026-11-03T04:59:00+00:00",
        "consensusUpdatedAtUtc": "2026-11-16T00:00:54.699675+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.5865807782193425,
        "candSpread": null,
        "fairAltExCappedGrowth": null,
        "fairAltGapPct": null,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 30.000000000000004,
      "fairPriceBasis": "적정가 후보 1개(growth_per_peg)만 사용",
      "fairPriceCandidates": [
        {
          "candidate": "growth_per_peg",
          "fairPrice": 73.13570712328769,
          "per": 30.0,
          "eps": 2.4378569041095894,
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
          "date": "2026-11-13",
          "prevFairPrice": 72.79168520547945,
          "newFairPrice": 72.8604895890411,
          "changePct": 0.09452231167257259,
          "epsEffect": 0.06880438356163142,
          "perEffect": 8.628415266902926e-15,
          "otherEffect": 0.0,
          "note": "EPS 2.4264->2.4287(적정PER 30.00배 유지 가정 시 +0.07) + 적정PER 30.00->30.00배(EPS 2.4287 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-14",
          "prevFairPrice": 72.8604895890411,
          "newFairPrice": 72.92929397260274,
          "changePct": 0.09443305136943525,
          "epsEffect": 0.06880438356164476,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 2.4287->2.4310(적정PER 30.00배 유지 가정 시 +0.07) + 적정PER 30.00->30.00배(EPS 2.4310 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-17",
          "prevFairPrice": 72.92929397260274,
          "newFairPrice": 73.13570712328769,
          "changePct": 0.2830318784691581,
          "epsEffect": 0.2064131506849476,
          "perEffect": 8.66100757018838e-15,
          "otherEffect": 0.0,
          "note": "EPS 2.4310->2.4379(적정PER 30.00배 유지 가정 시 +0.21) + 적정PER 30.00->30.00배(EPS 2.4379 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "TSLA": {
      "ticker": "TSLA",
      "asOf": "2026-11-17",
      "verdict": "고평가",
      "action": "신규 추격 금지 · 모델 점검 필요(적정가/현재가 비율 8.65배)",
      "actionRaw": "신규 추격 금지 · 모델 점검 필요(적정가/현재가 비율 8.65배)",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "median",
      "candidateBadge": null,
      "lowConfidenceCapEligible": false,
      "sectorPerMethod": null,
      "sectorFewPeers": null,
      "currentPrice": 379.739990234375,
      "fairPrice": 43.87789090286317,
      "ratio": 8.654472273406281,
      "bandAggressiveLe": 35.10231272229054,
      "bandDcaHigh": 39.49010181257685,
      "bandFairHigh": 48.26567999314949,
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
        "growthPerPeg": 21.825000000000003,
        "growthPerPegEpsBasis": "NTM EPS"
      },
      "sectorPeerDisplay": {
        "basis": "forwardPE",
        "medianPer": null,
        "peers": [],
        "excluded": [],
        "note": "비교군 없음(peer_groups.json에 비교군 정의 자체가 없음)"
      },
      "epsUsedForCandidates": 2.1067840547945207,
      "ttmEps": 0.91,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 0.8279853342638738,
        "peTTM": 458.6313,
        "finnhubUpdated": "2026-11-17 06:32",
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
        "gapPct": -9.012600630343549,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 41.77521980983593,
        "fairHistProxy": null,
        "proxyPer": null,
        "trailingPer": 45.90683495586366,
        "modelSplitEligible": false,
        "modelSplitRatio": 1.1006659499386846,
        "actionBeforeModelSplit": null,
        "modelSplitMode": "on"
      },
      "earningsStatus": {
        "latestOfficialPeriodEnd": "2026-09-30",
        "latestOfficialSource": "10-Q 2026-10-22",
        "valuationActualPeriodEnd": "2026-09-30",
        "valuationPeriods": "Q4'25~Q3'26",
        "earningsReleaseDate": "2026-10-21",
        "earningsReleaseAtUtc": "2026-10-22T04:59:00+00:00",
        "consensusUpdatedAtUtc": "2026-11-16T00:00:54.699675+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.4319379567778029,
        "candSpread": 1.1006659499386846,
        "fairAltExCappedGrowth": null,
        "fairAltGapPct": null,
        "fairAltApplicable": false,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 20.826952246485785,
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
          "fairPrice": 45.98056199589042,
          "per": 21.825000000000003,
          "eps": 2.1067840547945207,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": false,
      "dispersionFlag": "최대/최소 2.10배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [
        "과거 PER 이력 부족(2년치)",
        "⚠ 사업 경고(현금흐름/EPS 하향): EPS 수정 방향 하향(하향)"
      ],
      "recentChanges": [
        {
          "date": "2026-11-13",
          "prevFairPrice": 43.81286735149331,
          "newFairPrice": 43.825872061767285,
          "changePct": 0.0296823993956925,
          "epsEffect": 0.024853533161228524,
          "perEffect": -0.011848822887254517,
          "otherEffect": 0.0,
          "note": "EPS 2.1008->2.1020(적정PER 20.86배 유지 가정 시 +0.02) + 적정PER 20.86->20.85배(EPS 2.1020 유지 가정 시 -0.01)"
        },
        {
          "date": "2026-11-14",
          "prevFairPrice": 43.825872061767285,
          "newFairPrice": 43.83887677204125,
          "changePct": 0.029673591561713886,
          "epsEffect": 0.024846815542086537,
          "perEffect": -0.011842105268122818,
          "otherEffect": 0.0,
          "note": "EPS 2.1020->2.1032(적정PER 20.85배 유지 가정 시 +0.02) + 적정PER 20.85->20.84배(EPS 2.1032 유지 가정 시 -0.01)"
        },
        {
          "date": "2026-11-17",
          "prevFairPrice": 43.83887677204125,
          "newFairPrice": 43.87789090286317,
          "changePct": 0.08899436686023905,
          "epsEffect": 0.074520316607034,
          "perEffect": -0.03550618578511008,
          "otherEffect": 0.0,
          "note": "EPS 2.1032->2.1068(적정PER 20.84배 유지 가정 시 +0.07) + 적정PER 20.84->20.83배(EPS 2.1068 유지 가정 시 -0.04)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    }
  }
};
if (typeof window !== 'undefined') { window.PRICE_MAP_DATA = PRICE_MAP_DATA; }
