const PRICE_MAP_DATA = {
  "_meta": {
    "title": "WO17 가격지도(price_map) - 화면용 production 데이터",
    "as_of": "2026-11-13",
    "input_snapshot_hash": "3db0f7c99a914040d4f0f8aace3b36cc30fbd85a5110fcb3319adeaf6f27b56f",
    "generated_by": "price_map_engine.py write_price_map_data_js()",
    "session_date": "2026-11-12",
    "session_date_source": "daily_run_arg(확정 종가 거래일)",
    "fxRates": {
      "EURUSD": {
        "rate": 1.1056,
        "asOf": "2026-11-12",
        "source": "Yahoo Finance chart API(query1.finance.yahoo.com)"
      },
      "TWDUSD": {
        "rate": 0.0303,
        "asOf": "2026-11-12",
        "source": "Yahoo Finance chart API(query1.finance.yahoo.com)"
      }
    },
    "ttmEpsRule": {
      "mode": "verified_quarterly_sum",
      "status": "applied",
      "quarterly_sum_count": 33,
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
      "asOf": "2026-11-13",
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
      "currentPrice": 380.95001220703125,
      "fairPrice": 476.45441530320005,
      "ratio": 0.7995518563189452,
      "bandAggressiveLe": 381.16353224256005,
      "bandDcaHigh": 428.80897377288005,
      "bandFairHigh": 524.0998568335201,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±48% (±40% 밖)",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "고성장형",
      "stockTypeReason": "다음 회계연도 성장률 35.8%(기준 30% 초과)",
      "candidates": {
        "historicalPer": 21.351561546325684,
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
      "epsUsedForCandidates": 18.61502,
      "ttmEps": 11.6,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 11.259584085756421,
        "peTTM": 33.8334,
        "finnhubUpdated": "2026-11-13 01:53",
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
        "gapPct": -2.934619950375683,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 247.67811393737793,
        "fairHistProxy": 283.8736565398993,
        "proxyPer": 15.249709994396959,
        "trailingPer": 21.351561546325684,
        "modelSplitEligible": false,
        "modelSplitRatio": null,
        "actionBeforeModelSplit": null,
        "modelSplitMode": "on"
      },
      "earningsStatus": {
        "latestOfficialPeriodEnd": "2026-07-26",
        "latestOfficialSource": "10-Q 2026-08-20",
        "valuationActualPeriodEnd": "2026-07-26",
        "valuationPeriods": "Q4'25~Q3'26",
        "earningsReleaseDate": null,
        "earningsReleaseAtUtc": null,
        "consensusUpdatedAtUtc": "2026-11-11T23:17:43.518667+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.6231527014206807,
        "candSpread": 2.254743429373807,
        "fairAltExCappedGrowth": 362.06626462028896,
        "fairAltGapPct": -24.008204564568516,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 25.59516,
      "fairPriceBasis": "세 적정가 후보 중앙값",
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
          "fairPrice": 476.45441530320005,
          "per": 25.59516,
          "eps": 18.61502,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 558.4506,
          "per": 30.0,
          "eps": 18.61502,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": null,
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-11-03",
          "prevFairPrice": 415.43394524948894,
          "newFairPrice": 474.9089795424,
          "changePct": 14.316363641683955,
          "epsEffect": 0.0,
          "perEffect": 59.47503429291101,
          "otherEffect": 0.0,
          "note": "EPS 18.5546->18.5546(적정PER 22.39배 유지 가정 시 +0.00) + 적정PER 22.39->25.60배(EPS 18.5546 유지 가정 시 +59.48)"
        },
        {
          "date": "2026-11-04",
          "prevFairPrice": 474.9089795424,
          "newFairPrice": 474.95530678200004,
          "changePct": 0.009754972341156992,
          "epsEffect": 0.0463272396000648,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 18.5546->18.5565(적정PER 25.60배 유지 가정 시 +0.05) + 적정PER 25.60->25.60배(EPS 18.5565 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-13",
          "prevFairPrice": 474.95530678200004,
          "newFairPrice": 476.45441530320005,
          "changePct": 0.31563149201490887,
          "epsEffect": 1.4991085211999888,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 18.5565->18.6150(적정PER 25.60배 유지 가정 시 +1.50) + 적정PER 25.60->25.60배(EPS 18.6150 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "LRCX": {
      "ticker": "LRCX",
      "asOf": "2026-11-13",
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
      "currentPrice": 233.77999877929688,
      "fairPrice": 271.6625291017381,
      "ratio": 0.8605529792875699,
      "bandAggressiveLe": 217.33002328139048,
      "bandDcaHigh": 244.49627619156428,
      "bandFairHigh": 298.8287820119119,
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
      "epsUsedForCandidates": 10.613824219178081,
      "ttmEps": 6.71,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 6.704157299619364,
        "peTTM": 34.8709,
        "finnhubUpdated": "2026-11-13 02:28",
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
        "gapPct": -0.08707452132095117,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 157.15951313800122,
        "fairHistProxy": 204.31692228082994,
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
        "consensusUpdatedAtUtc": "2026-11-11T23:17:43.518667+00:00",
        "periodCompareMethod": "fallback_45d",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.6321943779581091,
        "candSpread": 2.0260607851065533,
        "fairAltExCappedGrowth": 214.41102111986964,
        "fairAltGapPct": -21.074495688151252,
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
          "fairPrice": 271.6625291017381,
          "per": 25.59516,
          "eps": 10.613824219178081,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 318.41472657534246,
          "per": 30.0,
          "eps": 10.613824219178081,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": null,
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-11-11",
          "prevFairPrice": 270.0304127019583,
          "newFairPrice": 271.2998365684537,
          "changePct": 0.47010403524306255,
          "epsEffect": 1.2694238664953903,
          "perEffect": 3.765753526967934e-14,
          "otherEffect": 0.0,
          "note": "EPS 10.5501->10.5997(적정PER 25.60배 유지 가정 시 +1.27) + 적정PER 25.60->25.60배(EPS 10.5997 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-12",
          "prevFairPrice": 271.2998365684537,
          "newFairPrice": 271.4811828350959,
          "changePct": 0.06684348539828606,
          "epsEffect": 0.18134626664221162,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 10.5997->10.6067(적정PER 25.60배 유지 가정 시 +0.18) + 적정PER 25.60->25.60배(EPS 10.6067 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-13",
          "prevFairPrice": 271.4811828350959,
          "newFairPrice": 271.6625291017381,
          "changePct": 0.06679883472892686,
          "epsEffect": 0.1813462666421207,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 10.6067->10.6138(적정PER 25.60배 유지 가정 시 +0.18) + 적정PER 25.60->25.60배(EPS 10.6138 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "KLAC": {
      "ticker": "KLAC",
      "asOf": "2026-11-13",
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
      "currentPrice": 157.3000030517578,
      "fairPrice": 141.59209208161315,
      "ratio": 1.110937770176393,
      "bandAggressiveLe": 113.27367366529052,
      "bandDcaHigh": 127.43288287345183,
      "bandFairHigh": 155.75130128977446,
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
      "epsUsedForCandidates": 6.263717780821918,
      "ttmEps": 4.0,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 3.91846218551434,
        "peTTM": 40.1433,
        "finnhubUpdated": "2026-11-13 01:53",
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
        "gapPct": -2.0384453621415055,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 96.99626457539618,
        "fairHistProxy": 149.6565679428073,
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
        "consensusUpdatedAtUtc": "2026-11-11T23:17:43.518667+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.6385983755920632,
        "candSpread": 1.9373069081293537,
        "fairAltExCappedGrowth": 119.29417832850467,
        "fairAltGapPct": -15.747993708756026,
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
          "fairPrice": 141.59209208161315,
          "per": 22.60512,
          "eps": 6.263717780821918,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 187.91153342465753,
          "per": 30.0,
          "eps": 6.263717780821918,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": null,
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-11-11",
          "prevFairPrice": 140.75901661413698,
          "newFairPrice": 141.4272183874718,
          "changePct": 0.47471330036822573,
          "epsEffect": 0.6682017733348176,
          "perEffect": 2.2227283611848855e-14,
          "otherEffect": 0.0,
          "note": "EPS 6.2269->6.2564(적정PER 22.61배 유지 가정 시 +0.67) + 적정PER 22.61->22.61배(EPS 6.2564 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-12",
          "prevFairPrice": 141.4272183874718,
          "newFairPrice": 141.5096552345425,
          "changePct": 0.05828923739759004,
          "epsEffect": 0.08243684707068669,
          "perEffect": -2.2240239725960402e-14,
          "otherEffect": 0.0,
          "note": "EPS 6.2564->6.2601(적정PER 22.61배 유지 가정 시 +0.08) + 적정PER 22.61->22.61배(EPS 6.2601 유지 가정 시 -0.00)"
        },
        {
          "date": "2026-11-13",
          "prevFairPrice": 141.5096552345425,
          "newFairPrice": 141.59209208161315,
          "changePct": 0.05825528083862529,
          "epsEffect": 0.08243684707066659,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 6.2601->6.2637(적정PER 22.61배 유지 가정 시 +0.08) + 적정PER 22.61->22.61배(EPS 6.2637 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "ASML": {
      "ticker": "ASML",
      "asOf": "2026-11-13",
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
      "currentPrice": 1497.1199951171875,
      "fairPrice": 1273.7270666172938,
      "ratio": 1.1753852409630978,
      "bandAggressiveLe": 1018.981653293835,
      "bandDcaHigh": 1146.3543599555644,
      "bandFairHigh": 1401.0997732790233,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "EPS 품질 경고: ADR 통화환산 적용(EUR->USD); WO8-B 분류 불가(이력 부족 - 유효 4개년 <5년; 필터 없음(원본 그대로))",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "분류불가(이력부족)",
      "stockTypeReason": "유효 연간 EPS 4개년(<5년 기준) - 필터 없음(원본 그대로)",
      "candidates": {
        "historicalPer": 32.91624629463753,
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
      "epsUsedForCandidates": 54.45891424657534,
      "ttmEps": 38.696,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 29.99963921396399,
        "peTTM": 49.9046,
        "finnhubUpdated": "2026-11-13 01:53",
        "periods": "Q4'25~Q3'26",
        "endDates": [
          "2025-12-31",
          "2026-03-31",
          "2026-06-30",
          "2026-09-30"
        ],
        "secVerified": false,
        "quarterly": 38.696,
        "checks": [
          "분기 연속 OK",
          "최신성 OK(승인 근거 2026-09-30)",
          "역산 주식수 일관(±0.8%)",
          "EUR35.00(보통주1주) x ADR비율1 x EURUSD=X(1.1056) = $38.70(ADR 1주)"
        ],
        "gapPct": -22.473539347829252,
        "gapPrevPct": -1.5090336542295413,
        "gapCause": "period",
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 1273.7270666172938,
        "fairHistProxy": 1381.5976330027001,
        "proxyPer": 25.369540544771,
        "trailingPer": 32.91624629463753,
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
        "consensusUpdatedAtUtc": "2026-11-11T23:17:43.518667+00:00",
        "periodCompareMethod": null,
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.7105540118702128,
        "candSpread": 1.3271329681063406,
        "fairAltExCappedGrowth": 1252.3886791154196,
        "fairAltGapPct": -1.6752715759227543,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": "WO8-B 분류 불가(이력 부족, 유효 4개년 <5년) - 필터 없음(원본 그대로) - 경기순환 여부 판단 안 함, NTM EPS 그대로 사용",
      "convertedFairPer": 23.388770860362726,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 1273.7270666172938,
          "per": 32.91624629463753,
          "eps": 38.696,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "sector_per",
          "fairPrice": 1231.0502916135451,
          "per": 22.60512,
          "eps": 54.45891424657534,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 1633.7674273972602,
          "per": 30.0,
          "eps": 54.45891424657534,
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
          "date": "2026-11-11",
          "prevFairPrice": 1273.7270666172942,
          "newFairPrice": 1273.7270666172938,
          "changePct": -3.5702103127490356e-14,
          "epsEffect": 11.41144899600475,
          "perEffect": -11.41144899600517,
          "otherEffect": 0.0,
          "note": "EPS 53.8938->54.3766(적정PER 23.63배 유지 가정 시 +11.41) + 적정PER 23.63->23.42배(EPS 54.3766 유지 가정 시 -11.41)"
        },
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
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "MU": {
      "ticker": "MU",
      "asOf": "2026-11-13",
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
      "currentPrice": 798.4400024414062,
      "fairPrice": 1189.1185005410634,
      "ratio": 0.671455369736579,
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
            "per": 49.97396655156699
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
        "finnhub": 74.07366197619503,
        "peTTM": 10.779,
        "finnhubUpdated": "2026-11-13 01:53",
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
        "gapPct": -0.183719207391142,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": {
        "ntm_eps_raw": 182.83908054794523,
        "normalized_eps": 53.57,
        "change_pct": -70.70101214715278,
        "fair_without_normalization": 3276.7105021365264,
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
            "fairPrice": 5485.172416438357,
            "per": 30.0,
            "eps": 182.83908054794523,
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
        "modelSplitEligible": true,
        "modelSplitRatio": 2.0840654744160583,
        "actionBeforeModelSplit": "분할매수",
        "modelSplitMode": "on"
      },
      "earningsStatus": {
        "latestOfficialPeriodEnd": "2026-09-30",
        "latestOfficialSource": "8-K(실적) 2026-09-30",
        "valuationActualPeriodEnd": "2026-09-03",
        "valuationPeriods": "Q4'25~Q3'26",
        "earningsReleaseDate": "2026-09-30",
        "earningsReleaseAtUtc": "2026-10-01T04:59:00+00:00",
        "consensusUpdatedAtUtc": "2026-11-11T23:17:43.518667+00:00",
        "periodCompareMethod": "fallback_45d",
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
      "epsBasisNote": "경기순환형(WO8-B 최종본: (A) EPS 30%+·매출 5%+ 동반 감소 2회(2019→2020 EPS -57%·매출 -8%, 2022→2023 EPS -169%·매출 -49%, 기준 2회 이상)) - NTM EPS(182.8391) 대신 정상화 EPS 53.5700(순이익률 사이클 중앙값 22% x NTM매출/주식수 243.5, 기준연수 8) 사용 - 업종PER·성장PER·과거PER 후보 전부 동일 기준 적용(item3)",
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
      "asOf": "2026-11-13",
      "verdict": "매수",
      "action": "분할매수 · 모델 점검 필요(적정가/현재가 비율 0.18배)",
      "actionRaw": "적극 모아가기 · 모델 점검 필요(적정가/현재가 비율 0.18배)",
      "actionCapReason": "low_confidence_cap",
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "a_kept_two_candidates",
      "candidateBadge": "후보 2개",
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": null,
      "sectorFewPeers": null,
      "currentPrice": 937.4600219726562,
      "fairPrice": 5232.002764919323,
      "ratio": 0.17917804406724386,
      "bandAggressiveLe": 4185.602211935459,
      "bandDcaHigh": 4708.802488427391,
      "bandFairHigh": 5755.203041411256,
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
      "epsUsedForCandidates": 250.42312810958902,
      "ttmEps": 124.75,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 130.8808161688548,
        "peTTM": 7.1627,
        "finnhubUpdated": "2026-11-13 01:53",
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
        "gapPct": 4.9144818988816175,
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
        "modelSplitRatio": 2.5455440296335876,
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
        "consensusUpdatedAtUtc": "2026-11-11T23:17:43.518667+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.498156863312591,
        "candSpread": 2.5455440296335876,
        "fairAltExCappedGrowth": 2951.311686550976,
        "fairAltGapPct": -43.591167299459855,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": "WO8-B 분류 불가(이력 부족, 유효 4개년 <5년) - 필터 없음(원본 그대로) - 경기순환 여부 판단 안 함, NTM EPS 그대로 사용",
      "convertedFairPer": 20.892649989699507,
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
          "fairPrice": 7512.6938432876705,
          "per": 30.0,
          "eps": 250.42312810958902,
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
          "date": "2026-11-11",
          "prevFairPrice": 5203.003067248091,
          "newFairPrice": 5414.096194885398,
          "changePct": 4.057140172876285,
          "epsEffect": 33.41629062498947,
          "perEffect": 177.676837012318,
          "otherEffect": 0.0,
          "note": "EPS 248.4898->250.0857(적정PER 20.94배 유지 가정 시 +33.42) + 적정PER 20.94->21.65배(EPS 250.0857 유지 가정 시 +177.68)"
        },
        {
          "date": "2026-11-12",
          "prevFairPrice": 5414.096194885398,
          "newFairPrice": 5534.499493706202,
          "changePct": 2.2238854738958382,
          "epsEffect": 3.6520407566100777,
          "perEffect": 116.75125806419342,
          "otherEffect": 0.0,
          "note": "EPS 250.0857->250.2544(적정PER 21.65배 유지 가정 시 +3.65) + 적정PER 21.65->22.12배(EPS 250.2544 유지 가정 시 +116.75)"
        },
        {
          "date": "2026-11-13",
          "prevFairPrice": 5534.499493706202,
          "newFairPrice": 5232.002764919323,
          "changePct": -5.465656454226365,
          "epsEffect": 3.7307414149446396,
          "perEffect": -306.22747020182305,
          "otherEffect": 0.0,
          "note": "EPS 250.2544->250.4231(적정PER 22.12배 유지 가정 시 +3.73) + 적정PER 22.12->20.89배(EPS 250.4231 유지 가정 시 -306.23)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "WDC": {
      "ticker": "WDC",
      "asOf": "2026-11-13",
      "verdict": "매수",
      "action": "분할매수 · 모델 점검 필요(적정가/현재가 비율 0.42배)",
      "actionRaw": "적극 모아가기 · 모델 점검 필요(적정가/현재가 비율 0.42배)",
      "actionCapReason": "low_confidence_cap",
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "a_kept_two_candidates",
      "candidateBadge": "후보 2개",
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": null,
      "sectorFewPeers": null,
      "currentPrice": 311.2099914550781,
      "fairPrice": 744.5839983676739,
      "ratio": 0.41796492019346804,
      "bandAggressiveLe": 595.6671986941391,
      "bandDcaHigh": 670.1255985309065,
      "bandFairHigh": 819.0423982044413,
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
      "epsUsedForCandidates": 30.56720704109589,
      "ttmEps": 25.773367999999998,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 27.21746964851744,
        "peTTM": 11.4342,
        "finnhubUpdated": "2026-11-13 01:53",
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
        "gapPct": 5.603076976658405,
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
        "modelSplitRatio": 1.6027498899222017,
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
        "consensusUpdatedAtUtc": "2026-11-11T23:17:43.518667+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.8431705247178506,
        "candSpread": 1.6027498899222017,
        "fairAltExCappedGrowth": 572.1517855024711,
        "fairAltGapPct": -23.158194809883113,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": "WO8-B 분류 불가(이력 부족, 유효 1개년 <5년) - corporate_events.json 기업분할/분리상장(2025-02-21) 이전 회계연도 7개 제외 - 경기순환 여부 판단 안 함, NTM EPS 그대로 사용",
      "convertedFairPer": 24.358915008709253,
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
          "fairPrice": 917.0162112328767,
          "per": 30.0,
          "eps": 30.56720704109589,
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
          "date": "2026-11-11",
          "prevFairPrice": 738.7845204224684,
          "newFairPrice": 783.004341385739,
          "changePct": 5.985482876385103,
          "epsEffect": 7.361112373617071,
          "perEffect": 36.85870858965365,
          "otherEffect": 0.0,
          "note": "EPS 30.1806->30.4813(적정PER 24.48배 유지 가정 시 +7.36) + 적정PER 24.48->25.69배(EPS 30.4813 유지 가정 시 +36.86)"
        },
        {
          "date": "2026-11-12",
          "prevFairPrice": 783.004341385739,
          "newFairPrice": 781.7777063627962,
          "changePct": -0.15665749959598393,
          "epsEffect": 1.1035346553252179,
          "perEffect": -2.3301696782681804,
          "otherEffect": 0.0,
          "note": "EPS 30.4813->30.5242(적정PER 25.69배 유지 가정 시 +1.10) + 적정PER 25.69->25.61배(EPS 30.5242 유지 가정 시 -2.33)"
        },
        {
          "date": "2026-11-13",
          "prevFairPrice": 781.7777063627962,
          "newFairPrice": 744.5839983676739,
          "changePct": -4.757581047963775,
          "epsEffect": 1.1002552302979627,
          "perEffect": -38.29396322542023,
          "otherEffect": 0.0,
          "note": "EPS 30.5242->30.5672(적정PER 25.61배 유지 가정 시 +1.10) + 적정PER 25.61->24.36배(EPS 30.5672 유지 가정 시 -38.29)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "STX": {
      "ticker": "STX",
      "asOf": "2026-11-13",
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
      "currentPrice": 545.1400146484375,
      "fairPrice": 277.57811859911607,
      "ratio": 1.963915662371571,
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
            "per": 14.904610835195188
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
        "finnhub": 18.921180192649274,
        "peTTM": 28.8111,
        "finnhubUpdated": "2026-11-13 01:54",
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
        "gapPct": -0.6253636433192211,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": {
        "ntm_eps_raw": 49.42910032876713,
        "normalized_eps": 10.90848,
        "change_pct": -77.93105695340483,
        "fair_without_normalization": 940.3326015286257,
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
            "fairPrice": 1482.8730098630137,
            "per": 30.0,
            "eps": 49.42910032876713,
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
        "consensusUpdatedAtUtc": "2026-11-11T23:17:43.518667+00:00",
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
      "epsBasisNote": "경기순환형(WO8-B 최종본: (B) EPS 30%+·매출 5%+ 동반 감소 1회(2022→2023 EPS -135%·매출 -37%) + 이익 정점 의심(NTM EPS $39.98가 과거 8년 EPS 중앙값 $6.06의 3배 초과)) - NTM EPS(49.4291) 대신 정상화 EPS 10.9085(순이익률 사이클 중앙값 13.2% x NTM매출/주식수 82.64, 기준연수 8) 사용 - 업종PER·성장PER·과거PER 후보 전부 동일 기준 적용(item3)",
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
      "asOf": "2026-11-13",
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
      "currentPrice": 166.19000244140625,
      "fairPrice": 248.51900462897802,
      "ratio": 0.6687215035707897,
      "bandAggressiveLe": 198.81520370318242,
      "bandDcaHigh": 223.66710416608024,
      "bandFairHigh": 273.37090509187584,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "EPS 품질 경고: 경기순환형(WO8-B 최종본, 39종목 적용) - 정상화 EPS 사용(과거PER 후보 포함); 경기순환형(item2)인데 비교군 정상화 EPS 유효 비교군 부족 - 업종PER 후보를 비움(forwardPE 기준으로 섞어 쓰지 않음, 원래 forwardPE 기준 업종PER 30.06626는 참고용으로만 보관) - 업종 비교 불가(정상화기준 유효 비교군 1개 <3개)",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "경기순환형",
      "stockTypeReason": "(B) EPS 30%+·매출 5%+ 동반 감소 1회(2019→2020 EPS -32%·매출 -7%) + 이익 정점 의심(NTM EPS $9.32가 과거 8년 EPS 중앙값 $0.28의 3배 초과)",
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
            "per": 34.903725007334266
          }
        ],
        "excluded": [
          {
            "ticker": "AMD",
            "reason": "정상화기준 PER 306.3배 >80배 제외"
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
        "finnhub": 7.655914685379467,
        "peTTM": 21.7074,
        "finnhubUpdated": "2026-11-13 01:52",
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
        "gapPct": -3.2122037246590796,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": {
        "ntm_eps_raw": 14.482048876712328,
        "normalized_eps": 6.114639999999999,
        "change_pct": -57.777797519848406,
        "fair_without_normalization": 420.5488410766702,
        "basis_without_normalization": "B안: 성장 PER 상한 후보 제외, 나머지 두 후보의 평균 (A안 상한 포함 $434.46, 낮은 쪽 적용)",
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
            "fairPrice": 435.4210468599408,
            "per": 30.06626,
            "eps": 14.482048876712328,
            "epsBasis": "NTM EPS"
          },
          {
            "candidate": "growth_per_peg",
            "fairPrice": 434.46146630136985,
            "per": 30.0,
            "eps": 14.482048876712328,
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
        "consensusUpdatedAtUtc": "2026-11-11T23:17:43.518667+00:00",
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
      "epsBasisNote": "경기순환형(WO8-B 최종본: (B) EPS 30%+·매출 5%+ 동반 감소 1회(2019→2020 EPS -32%·매출 -7%) + 이익 정점 의심(NTM EPS $9.32가 과거 8년 EPS 중앙값 $0.28의 3배 초과)) - NTM EPS(14.4820) 대신 정상화 EPS 6.1146(순이익률 사이클 중앙값 35.8% x NTM매출/주식수 17.08, 기준연수 8) 사용 - 업종PER·성장PER·과거PER 후보 전부 동일 기준 적용(item3)",
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
      "asOf": "2026-11-13",
      "verdict": "고평가",
      "action": "신규 추격 금지 · 모델 점검 필요(적정가/현재가 비율 2.10배)",
      "actionRaw": "신규 추격 금지 · 모델 점검 필요(적정가/현재가 비율 2.10배)",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "a_kept_capped_not_used",
      "candidateBadge": null,
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": "median",
      "sectorFewPeers": true,
      "currentPrice": 585.2999877929688,
      "fairPrice": 279.08412467523124,
      "ratio": 2.097217061250185,
      "bandAggressiveLe": 223.267299740185,
      "bandDcaHigh": 251.17571220770813,
      "bandFairHigh": 306.9925371427544,
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
      "epsUsedForCandidates": 16.42631778082192,
      "ttmEps": 4.6,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 4.851029447589062,
        "peTTM": 120.6548,
        "finnhubUpdated": "2026-11-13 02:28",
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
        "gapPct": 5.457161904110053,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 261.5735397635731,
        "fairHistProxy": 681.4067380379481,
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
        "consensusUpdatedAtUtc": "2026-11-11T23:17:43.518667+00:00",
        "periodCompareMethod": "fallback_45d",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.28003841526617723,
        "candSpread": 1.8839425955319191,
        "fairAltExCappedGrowth": 270.32883221940216,
        "fairAltGapPct": -3.1371517337353216,
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
          "fairPrice": 279.08412467523124,
          "per": 16.99006,
          "eps": 16.42631778082192,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 492.7895334246575,
          "per": 30.0,
          "eps": 16.42631778082192,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": "최대/최소 3.35배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-11-11",
          "prevFairPrice": 250.62485066073697,
          "newFairPrice": 277.6559174230576,
          "changePct": 10.78546947401945,
          "epsEffect": 27.031066762320588,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 14.7513->16.3423(적정PER 16.99배 유지 가정 시 +27.03) + 적정PER 16.99->16.99배(EPS 16.3423 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-12",
          "prevFairPrice": 277.6559174230576,
          "newFairPrice": 278.63701984204437,
          "changePct": 0.3533518853451617,
          "epsEffect": 0.9811024189867786,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 16.3423->16.4000(적정PER 16.99배 유지 가정 시 +0.98) + 적정PER 16.99->16.99배(EPS 16.4000 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-13",
          "prevFairPrice": 278.63701984204437,
          "newFairPrice": 279.08412467523124,
          "changePct": 0.16046138931586618,
          "epsEffect": 0.4471048331868944,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 16.4000->16.4263(적정PER 16.99배 유지 가정 시 +0.45) + 적정PER 16.99->16.99배(EPS 16.4263 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "AVGO": {
      "ticker": "AVGO",
      "asOf": "2026-11-13",
      "verdict": "매수",
      "action": "분할매수",
      "actionRaw": "분할매수",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": 583.9521,
      "fairPriceB": 431.38679729119474,
      "fairBasisMode": "ex_capped_growth_floor_b",
      "candidateBadge": null,
      "lowConfidenceCapEligible": false,
      "sectorPerMethod": "median",
      "sectorFewPeers": true,
      "currentPrice": 364.3599853515625,
      "fairPrice": 431.38679729119474,
      "ratio": 0.8446247952869365,
      "bandAggressiveLe": 345.1094378329558,
      "bandDcaHigh": 388.24811756207527,
      "bandFairHigh": 474.52547702031427,
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
      "epsUsedForCandidates": 19.46507,
      "ttmEps": 7.83,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 8.21754031641371,
        "peTTM": 44.3393,
        "finnhubUpdated": "2026-11-13 01:52",
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
        "gapPct": 4.949429328399879,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 277.53173904418946,
        "fairHistProxy": 453.7048445100657,
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
        "consensusUpdatedAtUtc": "2026-11-11T23:17:43.518667+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.4022590209025706,
        "candSpread": 2.1087384727734366,
        "fairAltExCappedGrowth": 431.38679729119474,
        "fairAltGapPct": 0.0,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 22.162098430223715,
      "fairPriceBasis": "B안: 성장 PER 상한 후보 제외, 나머지 두 후보의 평균 (A안 상한 포함 $583.95, 낮은 쪽 적용)",
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
          "fairPrice": 585.2418555382001,
          "per": 30.06626,
          "eps": 19.46507,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 583.9521,
          "per": 30.0,
          "eps": 19.46507,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": null,
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-11-03",
          "prevFairPrice": 576.6308673157947,
          "newFairPrice": 431.38679729119474,
          "changePct": -25.188396642848527,
          "epsEffect": 0.0,
          "perEffect": -145.24407002459995,
          "otherEffect": 0.0,
          "note": "EPS 19.4651->19.4651(적정PER 29.62배 유지 가정 시 +0.00) + 적정PER 29.62->22.16배(EPS 19.4651 유지 가정 시 -145.24)"
        },
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
        }
      ],
      "nextUpdateDate": "2026-12-10"
    },
    "MRVL": {
      "ticker": "MRVL",
      "asOf": "2026-11-13",
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
      "currentPrice": 164.4499969482422,
      "fairPrice": 113.36422451872713,
      "ratio": 1.4506339865719804,
      "bandAggressiveLe": 90.69137961498171,
      "bandDcaHigh": 102.02780206685442,
      "bandFairHigh": 124.70064697059985,
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
      "epsUsedForCandidates": 6.672385178082192,
      "ttmEps": 0.9100000000000001,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 2.9329095274215398,
        "peTTM": 56.0706,
        "finnhubUpdated": "2026-11-13 02:28",
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
        "gapPct": -3.204306025691761,
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
        "consensusUpdatedAtUtc": "2026-11-11T23:17:43.518667+00:00",
        "periodCompareMethod": "fallback_45d",
        "pendingReflection": true,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.1363830138267822,
        "candSpread": 21.411266097849925,
        "fairAltExCappedGrowth": 61.35655688182722,
        "fairAltGapPct": -45.87661394738208,
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
          "fairPrice": 113.36422451872713,
          "per": 16.99006,
          "eps": 6.672385178082192,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 200.17155534246575,
          "per": 30.0,
          "eps": 6.672385178082192,
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
          "date": "2026-11-11",
          "prevFairPrice": 111.97233829098465,
          "newFairPrice": 113.05054099753644,
          "changePct": 0.9629188092418383,
          "epsEffect": 1.0782027065517983,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 6.5905->6.6539(적정PER 16.99배 유지 가정 시 +1.08) + 적정PER 16.99->16.99배(EPS 6.6539 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-12",
          "prevFairPrice": 113.05054099753644,
          "newFairPrice": 113.21851543676163,
          "changePct": 0.14858348995326873,
          "epsEffect": 0.167974439225185,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 6.6539->6.6638(적정PER 16.99배 유지 가정 시 +0.17) + 적정PER 16.99->16.99배(EPS 6.6638 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-13",
          "prevFairPrice": 113.21851543676163,
          "newFairPrice": 113.36422451872713,
          "changePct": 0.12869722006457351,
          "epsEffect": 0.1457090819654901,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 6.6638->6.6724(적정PER 16.99배 유지 가정 시 +0.15) + 적정PER 16.99->16.99배(EPS 6.6724 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2026-11-27"
    },
    "TSM": {
      "ticker": "TSM",
      "asOf": "2026-11-13",
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
      "currentPrice": 405.489990234375,
      "fairPrice": 533.0245307467876,
      "ratio": 0.76073420048092,
      "bandAggressiveLe": 426.41962459743013,
      "bandDcaHigh": 479.72207767210887,
      "bandFairHigh": 586.3269838214665,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "EPS 품질 경고: ADR 통화환산 적용(TWD->USD); WO8-B 분류 불가(이력 부족 - 유효 4개년 <5년; 필터 없음(원본 그대로))",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "분류불가(이력부족)",
      "stockTypeReason": "유효 연간 EPS 4개년(<5년 기준) - 필터 없음(원본 그대로)",
      "candidates": {
        "historicalPer": 25.01733266719146,
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
      "epsUsedForCandidates": 22.611894273972602,
      "ttmEps": 14.885655921900002,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 16.634394880105305,
        "peTTM": 24.3766,
        "finnhubUpdated": "2026-11-13 01:53",
        "periods": "Q4'25~Q3'26",
        "endDates": [
          "2025-12-31",
          "2026-03-31",
          "2026-06-30",
          "2026-09-30"
        ],
        "secVerified": false,
        "quarterly": 14.885655921900002,
        "checks": [
          "분기 연속 OK",
          "최신성 OK(승인 근거 2026-09-30)",
          "역산 주식수 일관(±4.2%)",
          "TWD491.28(원천값이 이미 ADR 1주 기준, ADR비율 미적용) x TWDUSD=X(0.0303) = $14.89(ADR 1주)"
        ],
        "gapPct": 11.747812574604332,
        "gapPrevPct": 27.27250029824473,
        "gapCause": "fx_adr",
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 372.3994061675209,
        "fairHistProxy": 343.78130796018417,
        "proxyPer": 15.203560736434774,
        "trailingPer": 25.01733266719146,
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
        "consensusUpdatedAtUtc": "2026-11-11T23:17:43.518667+00:00",
        "periodCompareMethod": null,
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.658310875751534,
        "candSpread": 1.8215840760874484,
        "fairAltExCappedGrowth": 452.7119684571543,
        "fairAltGapPct": -15.06732948615186,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": "WO8-B 분류 불가(이력 부족, 유효 4개년 <5년) - 필터 없음(원본 그대로) - 경기순환 여부 판단 안 함, NTM EPS 그대로 사용",
      "convertedFairPer": 23.57275,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 372.3994061675209,
          "per": 25.01733266719146,
          "eps": 14.885655921900002,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "sector_per",
          "fairPrice": 533.0245307467876,
          "per": 23.57275,
          "eps": 22.611894273972602,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 678.356828219178,
          "per": 30.0,
          "eps": 22.611894273972602,
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
          "date": "2026-11-11",
          "prevFairPrice": 529.6062062279041,
          "newFairPrice": 532.2649030759246,
          "changePct": 0.5020139146323455,
          "epsEffect": 2.6586968480205164,
          "perEffect": 8.021910052510888e-14,
          "otherEffect": 0.0,
          "note": "EPS 22.4669->22.5797(적정PER 23.57배 유지 가정 시 +2.66) + 적정PER 23.57->23.57배(EPS 22.5797 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-12",
          "prevFairPrice": 532.2649030759246,
          "newFairPrice": 532.6447169113561,
          "changePct": 0.0713580461977808,
          "epsEffect": 0.37981383543150243,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 22.5797->22.5958(적정PER 23.57배 유지 가정 시 +0.38) + 적정PER 23.57->23.57배(EPS 22.5958 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-13",
          "prevFairPrice": 532.6447169113561,
          "newFairPrice": 533.0245307467876,
          "changePct": 0.07130716279960793,
          "epsEffect": 0.37981383543150243,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 22.5958->22.6119(적정PER 23.57배 유지 가정 시 +0.38) + 적정PER 23.57->23.57배(EPS 22.6119 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "INTC": {
      "ticker": "INTC",
      "asOf": "2026-11-13",
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
      "currentPrice": 61.20000076293945,
      "fairPrice": 50.657874066492326,
      "ratio": 1.2081044041171127,
      "bandAggressiveLe": 40.52629925319386,
      "bandDcaHigh": 45.5920866598431,
      "bandFairHigh": 55.72366147314156,
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
      "epsUsedForCandidates": 2.072697369863014,
      "ttmEps": null,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": null,
        "peTTM": null,
        "finnhubUpdated": "2026-11-13 02:28",
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
        "fairHistProxy": 25.208028699714998,
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
        "consensusUpdatedAtUtc": "2026-11-11T23:17:43.518667+00:00",
        "periodCompareMethod": "fallback_45d",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": null,
        "candSpread": 1.5888896362554956,
        "fairAltExCappedGrowth": 39.13482703709425,
        "fairAltGapPct": -22.746803417516492,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 24.440554999999996,
      "fairPriceBasis": "적정가 후보 2개 평균",
      "fairPriceCandidates": [
        {
          "candidate": "sector_per",
          "fairPrice": 39.13482703709425,
          "per": 18.88111,
          "eps": 2.072697369863014,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 62.18092109589041,
          "per": 30.0,
          "eps": 2.072697369863014,
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
          "date": "2026-11-11",
          "prevFairPrice": 52.16906639275041,
          "newFairPrice": 50.945292314875346,
          "changePct": -2.345784892261601,
          "epsEffect": -1.223774077875067,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 2.1345->2.0845(적정PER 24.44배 유지 가정 시 -1.22) + 적정PER 24.44->24.44배(EPS 2.0845 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-12",
          "prevFairPrice": 50.945292314875346,
          "newFairPrice": 50.801583190683836,
          "changePct": -0.28208518915406966,
          "epsEffect": -0.14370912419150578,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 2.0845->2.0786(적정PER 24.44배 유지 가정 시 -0.14) + 적정PER 24.44->24.44배(EPS 2.0786 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-13",
          "prevFairPrice": 50.801583190683836,
          "newFairPrice": 50.657874066492326,
          "changePct": -0.2828831606528824,
          "epsEffect": -0.14370912419150578,
          "perEffect": -7.36370029792615e-15,
          "otherEffect": 0.0,
          "note": "EPS 2.0786->2.0727(적정PER 24.44배 유지 가정 시 -0.14) + 적정PER 24.44->24.44배(EPS 2.0727 유지 가정 시 -0.00)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "QCOM": {
      "ticker": "QCOM",
      "asOf": "2026-11-13",
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
      "currentPrice": 177.13999938964844,
      "fairPrice": 168.72003725197948,
      "ratio": 1.0499049328983607,
      "bandAggressiveLe": 134.9760298015836,
      "bandDcaHigh": 151.84803352678153,
      "bandFairHigh": 185.59204097717745,
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
        "growthPerPeg": 13.732499249999998,
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
      "epsUsedForCandidates": 9.905625178082193,
      "ttmEps": 12.7,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 12.85635482999829,
        "peTTM": 13.7784,
        "finnhubUpdated": "2026-11-13 01:53",
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
        "gapPct": 1.2311403936873244,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 213.01183860992714,
        "fairHistProxy": 131.97100392928647,
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
        "consensusUpdatedAtUtc": "2026-11-11T23:17:43.518667+00:00",
        "periodCompareMethod": "fallback_45d",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 1.2820997939737124,
        "candSpread": 1.5659297190625143,
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
          "fairPrice": 168.72003725197948,
          "per": 17.03275,
          "eps": 9.905625178082193,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 136.0289903287948,
          "per": 13.732499249999998,
          "eps": 9.905625178082193,
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
          "date": "2026-11-11",
          "prevFairPrice": 146.97881095139772,
          "newFairPrice": 168.72736833423974,
          "changePct": 14.79706989195452,
          "epsEffect": -4.306144142085053,
          "perEffect": 26.054701524927072,
          "otherEffect": 0.0,
          "note": "EPS 10.2050->9.9061(적정PER 14.40배 유지 가정 시 -4.31) + 적정PER 14.40->17.03배(EPS 9.9061 유지 가정 시 +26.05)"
        },
        {
          "date": "2026-11-12",
          "prevFairPrice": 168.72736833423974,
          "newFairPrice": 168.5977439735822,
          "changePct": -0.0768247391856226,
          "epsEffect": -0.12962436065754845,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 9.9061->9.8984(적정PER 17.03배 유지 가정 시 -0.13) + 적정PER 17.03->17.03배(EPS 9.8984 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-13",
          "prevFairPrice": 168.5977439735822,
          "newFairPrice": 168.72003725197948,
          "changePct": 0.07253553666556875,
          "epsEffect": 0.12229327839727723,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 9.8984->9.9056(적정PER 17.03배 유지 가정 시 +0.12) + 적정PER 17.03->17.03배(EPS 9.9056 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "ARM": {
      "ticker": "ARM",
      "asOf": "2026-11-13",
      "verdict": "고평가",
      "action": "신규 추격 금지 · 모델 점검 필요(적정가/현재가 비율 2.41배)",
      "actionRaw": "신규 추격 금지 · 모델 점검 필요(적정가/현재가 비율 2.41배)",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "a_kept_one_candidate",
      "candidateBadge": "후보 1개",
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": null,
      "sectorFewPeers": null,
      "currentPrice": 199.77999877929688,
      "fairPrice": 83.06713232876713,
      "ratio": 2.405042682689441,
      "bandAggressiveLe": 66.45370586301371,
      "bandDcaHigh": 74.76041909589041,
      "bandFairHigh": 91.37384556164385,
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
      "epsUsedForCandidates": 2.7689044109589043,
      "ttmEps": 0.87,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 0.9683021307168959,
        "peTTM": 206.3199,
        "finnhubUpdated": "2026-11-13 01:53",
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
        "gapPct": 11.299095484700672,
        "gapPrevPct": -0.17503807042310582,
        "gapCause": "period",
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
        "latestOfficialPeriodEnd": null,
        "latestOfficialSource": null,
        "valuationActualPeriodEnd": "2026-09-30",
        "valuationPeriods": "Q4'25~Q3'26",
        "earningsReleaseDate": null,
        "earningsReleaseAtUtc": null,
        "consensusUpdatedAtUtc": "2026-11-11T23:17:43.518667+00:00",
        "periodCompareMethod": null,
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.314203696074401,
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
          "fairPrice": 83.06713232876713,
          "per": 30.0,
          "eps": 2.7689044109589043,
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
          "date": "2026-11-11",
          "prevFairPrice": 81.77767808219178,
          "newFairPrice": 83.03088904109589,
          "changePct": 1.5324609212364144,
          "epsEffect": 1.2532109589041072,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 2.7259->2.7677(적정PER 30.00배 유지 가정 시 +1.25) + 적정PER 30.00->30.00배(EPS 2.7677 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-12",
          "prevFairPrice": 83.03088904109589,
          "newFairPrice": 83.09726054794521,
          "changePct": 0.0799359221800834,
          "epsEffect": 0.06637150684931646,
          "perEffect": 9.840692473984472e-15,
          "otherEffect": 0.0,
          "note": "EPS 2.7677->2.7699(적정PER 30.00배 유지 가정 시 +0.07) + 적정PER 30.00->30.00배(EPS 2.7699 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-13",
          "prevFairPrice": 83.09726054794521,
          "newFairPrice": 83.06713232876713,
          "changePct": -0.03625657329665893,
          "epsEffect": -0.030128219178084947,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 2.7699->2.7689(적정PER 30.00배 유지 가정 시 -0.03) + 적정PER 30.00->30.00배(EPS 2.7689 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "ANET": {
      "ticker": "ANET",
      "asOf": "2026-11-13",
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
      "currentPrice": 206.6300048828125,
      "fairPrice": 175.90416918681407,
      "ratio": 1.1746737205720628,
      "bandAggressiveLe": 140.72333534945128,
      "bandDcaHigh": 158.31375226813267,
      "bandFairHigh": 193.4945861054955,
      "modelCheckNeeded": false,
      "confidence": "높음",
      "confidenceNote": "적정가 후보 모두 중앙값 ±1% 안",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "고성장형",
      "stockTypeReason": "NTM PER 46.0배(기준 40 초과); 다음 회계연도 성장률 46.9%(기준 30% 초과)",
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
            "per": 41.17273779168035
          }
        ],
        "excluded": [],
        "note": "유효 비교군 2개 이하(최소 3개 기준 미달)"
      },
      "epsUsedForCandidates": 5.818682849315068,
      "ttmEps": 3.7199999999999998,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 3.9515556251350623,
        "peTTM": 52.2908,
        "finnhubUpdated": "2026-11-13 02:28",
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
        "gapPct": 6.2246135788995405,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 177.2478528941761,
        "fairHistProxy": 160.7162279603408,
        "proxyPer": 27.620723129678588,
        "trailingPer": 47.64727228338068,
        "modelSplitEligible": false,
        "modelSplitRatio": 1.015395050073004,
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
        "consensusUpdatedAtUtc": "2026-11-11T23:17:43.518667+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.6393199451380805,
        "candSpread": 1.015395050073004,
        "fairAltExCappedGrowth": 177.2478528941761,
        "fairAltGapPct": 0.7638725753765563,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 30.23092575109506,
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
          "fairPrice": 174.56048547945204,
          "per": 30.0,
          "eps": 5.818682849315068,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": "최대/최소 1.59배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-11-11",
          "prevFairPrice": 151.26597615819946,
          "newFairPrice": 175.32182644708803,
          "changePct": 15.903014610324584,
          "epsEffect": 21.87329228929756,
          "perEffect": 2.1825579995910034,
          "otherEffect": 0.0,
          "note": "EPS 5.0497->5.7799(적정PER 29.96배 유지 가정 시 +21.87) + 적정PER 29.96->30.33배(EPS 5.7799 유지 가정 시 +2.18)"
        },
        {
          "date": "2026-11-12",
          "prevFairPrice": 175.32182644708803,
          "newFairPrice": 181.71401308396105,
          "changePct": 3.645973103526946,
          "epsEffect": 0.7085169529105279,
          "perEffect": 5.683669683962505,
          "otherEffect": 0.0,
          "note": "EPS 5.7799->5.8032(적정PER 30.33배 유지 가정 시 +0.71) + 적정PER 30.33->31.31배(EPS 5.8032 유지 가정 시 +5.68)"
        },
        {
          "date": "2026-11-13",
          "prevFairPrice": 181.71401308396105,
          "newFairPrice": 175.90416918681407,
          "changePct": -3.1972459352722207,
          "epsEffect": 0.4842519727237769,
          "perEffect": -6.294095869870762,
          "otherEffect": 0.0,
          "note": "EPS 5.8032->5.8187(적정PER 31.31배 유지 가정 시 +0.48) + 적정PER 31.31->30.23배(EPS 5.8187 유지 가정 시 -6.29)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "ETN": {
      "ticker": "ETN",
      "asOf": "2026-11-13",
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
      "currentPrice": 359.0400085449219,
      "fairPrice": 317.94795349506376,
      "ratio": 1.129241451621723,
      "bandAggressiveLe": 254.358362796051,
      "bandDcaHigh": 286.15315814555737,
      "bandFairHigh": 349.74274884457014,
      "modelCheckNeeded": false,
      "confidence": "보통",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±27%",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "기타",
      "stockTypeReason": "경기순환형·이익훼손형·고성장형 조건 모두 미해당",
      "candidates": {
        "historicalPer": 30.479426771830145,
        "historicalPerYearsUsed": 5,
        "historicalPerEpsBasis": "TTM EPS",
        "sectorPer": 19.748229055759914,
        "sectorPerValidPeers": 3,
        "sectorPerEpsBasis": "NTM EPS",
        "growthPerPeg": 25.1625,
        "growthPerPegEpsBasis": "NTM EPS"
      },
      "sectorPeerDisplay": {
        "basis": "forwardPE",
        "medianPer": 19.748229055759914,
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
            "per": 19.748229055759914
          }
        ],
        "excluded": [],
        "note": "유효 비교군 3개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 16.100074219178083,
      "ttmEps": 10.01,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 10.172603571770399,
        "peTTM": 35.2948,
        "finnhubUpdated": "2026-11-13 01:53",
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
        "gapPct": 1.6244113063975885,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 305.09906198601976,
        "fairHistProxy": 408.12842014557174,
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
        "consensusUpdatedAtUtc": "2026-11-11T23:17:43.518667+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.6217362643009614,
        "candSpread": 1.3278248543374145,
        "fairAltExCappedGrowth": null,
        "fairAltGapPct": null,
        "fairAltApplicable": false,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 19.748229055759914,
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
          "fairPrice": 317.94795349506376,
          "per": 19.748229055759914,
          "eps": 16.100074219178083,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 405.1181175400685,
          "per": 25.1625,
          "eps": 16.100074219178083,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": false,
      "dispersionFlag": "최대/최소 1.54배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-11-11",
          "prevFairPrice": 305.09906198601976,
          "newFairPrice": 318.11745803082965,
          "changePct": 4.2669406979056586,
          "epsEffect": 3.8993627687706547,
          "perEffect": 9.119033276039254,
          "otherEffect": 0.0,
          "note": "EPS 15.8877->16.0907(적정PER 19.20배 유지 가정 시 +3.90) + 적정PER 19.20->19.77배(EPS 16.0907 유지 가정 시 +9.12)"
        },
        {
          "date": "2026-11-12",
          "prevFairPrice": 318.11745803082965,
          "newFairPrice": 306.9515118533566,
          "changePct": -3.510007355959367,
          "epsEffect": -0.09098691249287187,
          "perEffect": -11.074959264980249,
          "otherEffect": 0.0,
          "note": "EPS 16.0907->16.0861(적정PER 19.77배 유지 가정 시 -0.09) + 적정PER 19.77->19.08배(EPS 16.0861 유지 가정 시 -11.07)"
        },
        {
          "date": "2026-11-13",
          "prevFairPrice": 306.9515118533566,
          "newFairPrice": 317.94795349506376,
          "changePct": 3.5824686365971163,
          "epsEffect": 0.26603353650199696,
          "perEffect": 10.73040810520518,
          "otherEffect": 0.0,
          "note": "EPS 16.0861->16.1001(적정PER 19.08배 유지 가정 시 +0.27) + 적정PER 19.08->19.75배(EPS 16.1001 유지 가정 시 +10.73)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "HUBB": {
      "ticker": "HUBB",
      "asOf": "2026-11-13",
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
      "currentPrice": 437.9800109863281,
      "fairPrice": 458.0723307193263,
      "ratio": 0.9561372333896558,
      "bandAggressiveLe": 366.4578645754611,
      "bandDcaHigh": 412.2650976473937,
      "bandFairHigh": 503.879563791259,
      "modelCheckNeeded": false,
      "confidence": "보통",
      "confidenceNote": "적정가 후보 모두 중앙값 ±17% 안 / 사업 위험으로 신뢰도 1단계 하향(높음→보통): EPS 하향 수정이 상향보다 많음(방향은 혼조)",
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
        "sectorPer": 23.57188,
        "sectorPerValidPeers": 3,
        "sectorPerEpsBasis": "NTM EPS",
        "growthPerPeg": 18.77249955,
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
            "ticker": "VRT",
            "per": 26.89923
          },
          {
            "ticker": "MOD",
            "per": 19.748229055759914
          }
        ],
        "excluded": [],
        "note": "유효 비교군 3개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 22.728811534246574,
      "ttmEps": 17.060000000000002,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 16.880379362845595,
        "peTTM": 25.9461,
        "finnhubUpdated": "2026-11-13 01:53",
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
        "gapPct": -1.0528759504947693,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 458.0723307193263,
        "fairHistProxy": 489.5123911890519,
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
        "consensusUpdatedAtUtc": "2026-11-11T23:17:43.518667+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.7505891794779896,
        "candSpread": 1.255660171263661,
        "fairAltExCappedGrowth": null,
        "fairAltGapPct": null,
        "fairAltApplicable": false,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 20.153817986880973,
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
          "fairPrice": 535.7608180278761,
          "per": 23.57188,
          "eps": 22.728811534246574,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 426.6766042986786,
          "per": 18.77249955,
          "eps": 22.728811534246574,
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
      "asOf": "2026-11-13",
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
      "currentPrice": 209.63999938964844,
      "fairPrice": 254.17990340515314,
      "ratio": 0.8247701591714363,
      "bandAggressiveLe": 203.34392272412254,
      "bandDcaHigh": 228.76191306463784,
      "bandFairHigh": 279.5978937456685,
      "modelCheckNeeded": false,
      "confidence": "보통",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±26%",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "고성장형",
      "stockTypeReason": "다음 회계연도 성장률 71.2%(기준 30% 초과)",
      "candidates": {
        "historicalPer": 47.510262318720216,
        "historicalPerYearsUsed": 3,
        "historicalPerEpsBasis": "TTM EPS",
        "sectorPer": 19.748229055759914,
        "sectorPerValidPeers": 3,
        "sectorPerEpsBasis": "NTM EPS",
        "growthPerPeg": 30.0,
        "growthPerPegEpsBasis": "NTM EPS"
      },
      "sectorPeerDisplay": {
        "basis": "forwardPE",
        "medianPer": 19.748229055759914,
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
            "per": 19.748229055759914
          }
        ],
        "excluded": [],
        "note": "유효 비교군 3개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 9.514999479452056,
      "ttmEps": 5.35,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 5.507609596272786,
        "peTTM": 38.0637,
        "finnhubUpdated": "2026-11-13 01:54",
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
        "gapPct": 2.945973762108167,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 254.17990340515314,
        "fairHistProxy": 337.02200597638387,
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
        "consensusUpdatedAtUtc": "2026-11-11T23:17:43.518667+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.5622701306031067,
        "candSpread": 1.5191235586387923,
        "fairAltExCappedGrowth": 221.04214629540434,
        "fairAltGapPct": -13.037127115800528,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 26.713601398934674,
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
          "fairPrice": 187.90438918565556,
          "per": 19.748229055759914,
          "eps": 9.514999479452056,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 285.4499843835617,
          "per": 30.0,
          "eps": 9.514999479452056,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": "최대/최소 2.41배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-11-04",
          "prevFairPrice": 237.36501593762225,
          "newFairPrice": 254.17990340515314,
          "changePct": 7.083978825232494,
          "epsEffect": 0.1776801658135728,
          "perEffect": 16.637207301717318,
          "otherEffect": 0.0,
          "note": "EPS 9.3371->9.3441(적정PER 25.42배 유지 가정 시 +0.18) + 적정PER 25.42->27.20배(EPS 9.3441 유지 가정 시 +16.64)"
        },
        {
          "date": "2026-11-12",
          "prevFairPrice": 254.17990340515314,
          "newFairPrice": 275.94991422978745,
          "changePct": 8.564804114325963,
          "epsEffect": 3.8612414732923117,
          "perEffect": 17.908769351342006,
          "otherEffect": 0.0,
          "note": "EPS 9.3441->9.4860(적정PER 27.20배 유지 가정 시 +3.86) + 적정PER 27.20->29.09배(EPS 9.4860 유지 가정 시 +17.91)"
        },
        {
          "date": "2026-11-13",
          "prevFairPrice": 275.94991422978745,
          "newFairPrice": 254.17990340515314,
          "changePct": -7.889116720835837,
          "epsEffect": 0.8434256297791852,
          "perEffect": -22.6134364544135,
          "otherEffect": 0.0,
          "note": "EPS 9.4860->9.5150(적정PER 29.09배 유지 가정 시 +0.84) + 적정PER 29.09->26.71배(EPS 9.5150 유지 가정 시 -22.61)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "MOD": {
      "ticker": "MOD",
      "asOf": "2026-11-13",
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
      "currentPrice": 106.0999984741211,
      "fairPrice": 208.36472009096,
      "ratio": 0.5092032779244201,
      "bandAggressiveLe": 166.691776072768,
      "bandDcaHigh": 187.528248081864,
      "bandFairHigh": 229.201192100056,
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
      "epsUsedForCandidates": 7.778884,
      "ttmEps": 2.39,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 2.3646615363418193,
        "peTTM": 44.869,
        "finnhubUpdated": "2026-11-13 01:54",
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
        "gapPct": -1.0601867639406182,
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
        "consensusUpdatedAtUtc": "2026-11-11T23:17:43.518667+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.3072420156927395,
        "candSpread": 1.2727028985384279,
        "fairAltExCappedGrowth": 183.36292018192,
        "fairAltGapPct": -11.999056221286242,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": "WO8-B 분류 불가(이력 부족, 유효 0개년 <5년) - corporate_events.json 기업분할/분리상장(2026-10-01) 이전 회계연도 8개 제외 - 경기순환 여부 판단 안 함, NTM EPS 그대로 사용",
      "convertedFairPer": 26.78594,
      "fairPriceBasis": "적정가 후보 2개 평균",
      "fairPriceCandidates": [
        {
          "candidate": "sector_per",
          "fairPrice": 183.36292018192,
          "per": 23.57188,
          "eps": 7.778884,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 233.36651999999998,
          "per": 30.0,
          "eps": 7.778884,
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
          "date": "2026-11-11",
          "prevFairPrice": 225.81358263427563,
          "newFairPrice": 205.8584029829808,
          "changePct": -8.837014770548123,
          "epsEffect": -19.955179651294827,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 8.4303->7.6853(적정PER 26.79배 유지 가정 시 -19.96) + 적정PER 26.79->26.79배(EPS 7.6853 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-12",
          "prevFairPrice": 205.8584029829808,
          "newFairPrice": 206.17920754537096,
          "changePct": 0.15583748719583407,
          "epsEffect": 0.3208045623901453,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 7.6853->7.6973(적정PER 26.79배 유지 가정 시 +0.32) + 적정PER 26.79->26.79배(EPS 7.6973 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-13",
          "prevFairPrice": 206.17920754537096,
          "newFairPrice": 208.36472009096,
          "changePct": 1.0600062788135898,
          "epsEffect": 2.18551254558904,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 7.6973->7.7789(적정PER 26.79배 유지 가정 시 +2.19) + 적정PER 26.79->26.79배(EPS 7.7789 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "PWR": {
      "ticker": "PWR",
      "asOf": "2026-11-13",
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
      "currentPrice": 606.1599731445312,
      "fairPrice": 476.4864067382812,
      "ratio": 1.2721453635874143,
      "bandAggressiveLe": 381.18912539062495,
      "bandDcaHigh": 428.8377660644531,
      "bandFairHigh": 524.1350474121093,
      "modelCheckNeeded": false,
      "confidence": "보통",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±33%",
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
            "per": 20.260438002378798
          }
        ],
        "excluded": [],
        "note": "유효 비교군 3개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 21.181512931506845,
      "ttmEps": 11.04,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 11.132332786251915,
        "peTTM": 54.4504,
        "finnhubUpdated": "2026-11-13 01:53",
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
        "gapPct": 0.8363477015572052,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 476.4864067382812,
        "fairHistProxy": 731.527816354094,
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
        "consensusUpdatedAtUtc": "2026-11-11T23:17:43.518667+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.5212092278629606,
        "candSpread": 1.546014811852574,
        "fairAltExCappedGrowth": 443.75397308284,
        "fairAltGapPct": -6.869541962278913,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 22.49539059268625,
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
          "fairPrice": 411.0215394273988,
          "per": 19.40473,
          "eps": 21.181512931506845,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 635.4453879452053,
          "per": 30.0,
          "eps": 21.181512931506845,
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
      "asOf": "2026-11-13",
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
      "currentPrice": 662.77001953125,
      "fairPrice": 812.8116077960944,
      "ratio": 0.8154042254986047,
      "bandAggressiveLe": 650.2492862368756,
      "bandDcaHigh": 731.530447016485,
      "bandFairHigh": 894.092768575704,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±48% (±40% 밖)",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "고성장형",
      "stockTypeReason": "다음 회계연도 성장률 34.9%(기준 30% 초과)",
      "candidates": {
        "historicalPer": 18.28518526053723,
        "historicalPerYearsUsed": 5,
        "historicalPerEpsBasis": "TTM EPS",
        "sectorPer": 20.260438002378798,
        "sectorPerValidPeers": 3,
        "sectorPerEpsBasis": "NTM EPS",
        "growthPerPeg": 30.0,
        "growthPerPegEpsBasis": "NTM EPS"
      },
      "sectorPeerDisplay": {
        "basis": "forwardPE",
        "medianPer": 20.260438002378798,
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
            "per": 20.260438002378798
          }
        ],
        "excluded": [],
        "note": "유효 비교군 3개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 40.11816564383561,
      "ttmEps": 34.62,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 34.90982552363157,
        "peTTM": 18.9852,
        "finnhubUpdated": "2026-11-13 01:54",
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
        "gapPct": 0.8371621133205442,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 633.0331137197988,
        "fairHistProxy": 519.7177610560803,
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
        "consensusUpdatedAtUtc": "2026-11-11T23:17:43.518667+00:00",
        "periodCompareMethod": "fallback_45d",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.8629507218089759,
        "candSpread": 1.901235406537985,
        "fairAltExCappedGrowth": 722.9223607579466,
        "fairAltGapPct": -11.05905060606588,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 20.260438002378798,
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
          "fairPrice": 812.8116077960944,
          "per": 20.260438002378798,
          "eps": 40.11816564383561,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 1203.5449693150683,
          "per": 30.0,
          "eps": 40.11816564383561,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": "최대/최소 1.64배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-11-11",
          "prevFairPrice": 831.2028335147023,
          "newFairPrice": 831.5127356250574,
          "changePct": 0.037283572415735176,
          "epsEffect": 18.366665226709916,
          "perEffect": -18.056763116354837,
          "otherEffect": 0.0,
          "note": "EPS 39.1833->40.0491(적정PER 21.21배 유지 가정 시 +18.37) + 적정PER 21.21->20.76배(EPS 40.0491 유지 가정 시 -18.06)"
        },
        {
          "date": "2026-11-12",
          "prevFairPrice": 831.5127356250574,
          "newFairPrice": 796.448367590021,
          "changePct": -4.216936979164623,
          "epsEffect": 1.0937888877356154,
          "perEffect": -36.15815692277208,
          "otherEffect": 0.0,
          "note": "EPS 40.0491->40.1018(적정PER 20.76배 유지 가정 시 +1.09) + 적정PER 20.76->19.86배(EPS 40.1018 유지 가정 시 -36.16)"
        },
        {
          "date": "2026-11-13",
          "prevFairPrice": 796.448367590021,
          "newFairPrice": 812.8116077960944,
          "changePct": 2.054526177960172,
          "epsEffect": 0.3255436949190115,
          "perEffect": 16.03769651115449,
          "otherEffect": 0.0,
          "note": "EPS 40.1018->40.1182(적정PER 19.86배 유지 가정 시 +0.33) + 적정PER 19.86->20.26배(EPS 40.1182 유지 가정 시 +16.04)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "FIX": {
      "ticker": "FIX",
      "asOf": "2026-11-13",
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
      "currentPrice": 1128.0899658203125,
      "fairPrice": 1316.863066130267,
      "ratio": 0.8566494078502156,
      "bandAggressiveLe": 1053.4904529042137,
      "bandDcaHigh": 1185.1767595172403,
      "bandFairHigh": 1448.5493727432938,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±48% (±40% 밖)",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "고성장형",
      "stockTypeReason": "다음 회계연도 성장률 75.7%(기준 30% 초과)",
      "candidates": {
        "historicalPer": 25.175573140306934,
        "historicalPerYearsUsed": 5,
        "historicalPerEpsBasis": "TTM EPS",
        "sectorPer": 20.260438002378798,
        "sectorPerValidPeers": 3,
        "sectorPerEpsBasis": "NTM EPS",
        "growthPerPeg": 30.0,
        "growthPerPegEpsBasis": "NTM EPS"
      },
      "sectorPeerDisplay": {
        "basis": "forwardPE",
        "medianPer": 20.260438002378798,
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
            "per": 20.260438002378798
          }
        ],
        "excluded": [],
        "note": "유효 비교군 3개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 64.99677183561643,
      "ttmEps": 46.32,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 45.53725909442627,
        "peTTM": 24.7729,
        "finnhubUpdated": "2026-11-13 01:54",
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
        "gapPct": -1.6898551502023573,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 1166.1325478590172,
        "fairHistProxy": 915.6086263300402,
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
        "consensusUpdatedAtUtc": "2026-11-11T23:17:43.518667+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.7126507777516717,
        "candSpread": 1.672111080895953,
        "fairAltExCappedGrowth": 1241.4978069946421,
        "fairAltGapPct": -5.723090051959101,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 20.260438002378798,
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
          "fairPrice": 1316.863066130267,
          "per": 20.260438002378798,
          "eps": 64.99677183561643,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 1949.9031550684929,
          "per": 30.0,
          "eps": 64.99677183561643,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": null,
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-11-11",
          "prevFairPrice": 1364.5757829497575,
          "newFairPrice": 1346.3324017481125,
          "changePct": -1.3369269357989688,
          "epsEffect": 10.992978282331366,
          "perEffect": -29.236359483976315,
          "otherEffect": 0.0,
          "note": "EPS 64.3267->64.8449(적정PER 21.21배 유지 가정 시 +10.99) + 적정PER 21.21->20.76배(EPS 64.8449 유지 가정 시 -29.24)"
        },
        {
          "date": "2026-11-12",
          "prevFairPrice": 1346.3324017481125,
          "newFairPrice": 1289.988592851061,
          "changePct": -4.184984987651882,
          "epsEffect": 2.220703087616046,
          "perEffect": -58.56451198466744,
          "otherEffect": 0.0,
          "note": "EPS 64.8449->64.9519(적정PER 20.76배 유지 가정 시 +2.22) + 적정PER 20.76->19.86배(EPS 64.9519 유지 가정 시 -58.56)"
        },
        {
          "date": "2026-11-13",
          "prevFairPrice": 1289.988592851061,
          "newFairPrice": 1316.863066130267,
          "changePct": 2.083310924464039,
          "epsEffect": 0.8912688087259331,
          "perEffect": 25.983204470480082,
          "otherEffect": 0.0,
          "note": "EPS 64.9519->64.9968(적정PER 19.86배 유지 가정 시 +0.89) + 적정PER 19.86->20.26배(EPS 64.9968 유지 가정 시 +25.98)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "COHR": {
      "ticker": "COHR",
      "asOf": "2026-11-13",
      "verdict": "매수",
      "action": "관망(모델 민감도 높음)",
      "actionRaw": "분할매수",
      "actionCapReason": "model_split",
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "a_kept_two_candidates",
      "candidateBadge": "후보 2개",
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": null,
      "sectorFewPeers": null,
      "currentPrice": 232.0800018310547,
      "fairPrice": 265.755928359016,
      "ratio": 0.8732825012186831,
      "bandAggressiveLe": 212.60474268721282,
      "bandDcaHigh": 239.18033552311442,
      "bandFairHigh": 292.3315211949176,
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
      "epsUsedForCandidates": 12.411554273972602,
      "ttmEps": 4.840304204838108,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 4.840304204838108,
        "peTTM": 47.9474,
        "finnhubUpdated": "2026-11-13 01:53",
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
        "fairHistTrailing": 159.16522849885393,
        "fairHistProxy": 268.74629743154816,
        "proxyPer": 21.652912399143847,
        "trailingPer": 32.88331099928821,
        "modelSplitEligible": true,
        "modelSplitRatio": 2.3393716814339203,
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
        "consensusUpdatedAtUtc": "2026-11-11T23:17:43.518667+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.38998372790331104,
        "candSpread": 2.3393716814339203,
        "fairAltExCappedGrowth": 159.16522849885393,
        "fairAltGapPct": -40.108493728939955,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 21.411978104653187,
      "fairPriceBasis": "적정가 후보 2개 평균",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 159.16522849885393,
          "per": 32.88331099928821,
          "eps": 4.840304204838108,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 372.34662821917806,
          "per": 30.0,
          "eps": 12.411554273972602,
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
          "date": "2026-11-11",
          "prevFairPrice": 232.58521095285232,
          "newFairPrice": 274.39831460495407,
          "changePct": 17.977541856940224,
          "epsEffect": 27.992187079360423,
          "perEffect": 13.82091657274131,
          "otherEffect": 0.0,
          "note": "EPS 11.0007->12.3246(적정PER 21.14배 유지 가정 시 +27.99) + 적정PER 21.14->22.26배(EPS 12.3246 유지 가정 시 +13.82)"
        },
        {
          "date": "2026-11-12",
          "prevFairPrice": 274.39831460495407,
          "newFairPrice": 269.6952910993127,
          "changePct": -1.7139403762053684,
          "epsEffect": 1.6056374313976847,
          "perEffect": -6.308660937039017,
          "otherEffect": 0.0,
          "note": "EPS 12.3246->12.3967(적정PER 22.26배 유지 가정 시 +1.61) + 적정PER 22.26->21.76배(EPS 12.3967 유지 가정 시 -6.31)"
        },
        {
          "date": "2026-11-13",
          "prevFairPrice": 269.6952910993127,
          "newFairPrice": 265.755928359016,
          "changePct": -1.4606716803394495,
          "epsEffect": 0.3222656941917057,
          "perEffect": -4.261628434488395,
          "otherEffect": 0.0,
          "note": "EPS 12.3967->12.4116(적정PER 21.76배 유지 가정 시 +0.32) + 적정PER 21.76->21.41배(EPS 12.4116 유지 가정 시 -4.26)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "LITE": {
      "ticker": "LITE",
      "asOf": "2026-11-13",
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
      "currentPrice": 624.6500244140625,
      "fairPrice": 918.0432583561644,
      "ratio": 0.680414586925405,
      "bandAggressiveLe": 734.4346066849316,
      "bandDcaHigh": 826.238932520548,
      "bandFairHigh": 1009.8475841917809,
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
            "per": 22.53690753765425
          },
          {
            "ticker": "AAOI",
            "per": 17.8492
          }
        ],
        "excluded": [],
        "note": "유효 비교군 2개 이하(최소 3개 기준 미달)"
      },
      "epsUsedForCandidates": 30.60144194520548,
      "ttmEps": null,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": null,
        "peTTM": null,
        "finnhubUpdated": "2026-11-13 01:53",
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
        "fairHistProxy": 933.9560054994373,
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
        "consensusUpdatedAtUtc": "2026-11-11T23:17:43.518667+00:00",
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
          "fairPrice": 918.0432583561644,
          "per": 30.0,
          "eps": 30.60144194520548,
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
          "date": "2026-11-11",
          "prevFairPrice": 883.6643030136986,
          "newFairPrice": 910.8463693150686,
          "changePct": 3.076062505712493,
          "epsEffect": 27.18206630136997,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 29.4555->30.3615(적정PER 30.00배 유지 가정 시 +27.18) + 적정PER 30.00->30.00배(EPS 30.3615 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-12",
          "prevFairPrice": 910.8463693150686,
          "newFairPrice": 916.7943821917809,
          "changePct": 0.6530204299090523,
          "epsEffect": 5.948012876712241,
          "perEffect": 1.0857026474200647e-13,
          "otherEffect": 0.0,
          "note": "EPS 30.3615->30.5598(적정PER 30.00배 유지 가정 시 +5.95) + 적정PER 30.00->30.00배(EPS 30.5598 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-13",
          "prevFairPrice": 916.7943821917809,
          "newFairPrice": 918.0432583561644,
          "changePct": 0.13622205683654573,
          "epsEffect": 1.2488761643835746,
          "perEffect": -1.0871816138975092e-13,
          "otherEffect": 0.0,
          "note": "EPS 30.5598->30.6014(적정PER 30.00배 유지 가정 시 +1.25) + 적정PER 30.00->30.00배(EPS 30.6014 유지 가정 시 -0.00)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "CEG": {
      "ticker": "CEG",
      "asOf": "2026-11-13",
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
      "currentPrice": 282.3999938964844,
      "fairPrice": 295.8014161554623,
      "ratio": 0.9546945297518974,
      "bandAggressiveLe": 236.64113292436983,
      "bandDcaHigh": 266.22127453991607,
      "bandFairHigh": 325.38155777100854,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±47% (±40% 밖)",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "고성장형",
      "stockTypeReason": "다음 회계연도 성장률 32.2%(기준 30% 초과)",
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
      "epsUsedForCandidates": 13.27620202739726,
      "ttmEps": 12.67828815704576,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 12.67828815704576,
        "peTTM": 22.2743,
        "finnhubUpdated": "2026-11-13 01:53",
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
        "fairHistTrailing": 295.8014161554623,
        "fairHistProxy": 228.4513701850682,
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
        "consensusUpdatedAtUtc": "2026-11-11T23:17:43.518667+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.9549634851053319,
        "candSpread": 2.5215593322910888,
        "fairAltExCappedGrowth": 226.8768510781092,
        "fairAltGapPct": -23.300958451506826,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 22.280575088043673,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 295.8014161554623,
          "per": 23.331337203522644,
          "eps": 12.67828815704576,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "sector_per",
          "fairPrice": 157.95228600075615,
          "per": 11.8974,
          "eps": 13.27620202739726,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 398.2860608219178,
          "per": 30.0,
          "eps": 13.27620202739726,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": "최대/최소 2.52배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-11-11",
          "prevFairPrice": 239.3795197081423,
          "newFairPrice": 221.28783779095792,
          "changePct": -7.557740085385014,
          "epsEffect": null,
          "perEffect": null,
          "otherEffect": -18.09168191718439,
          "note": "기타(종목유형 변경: 기타 -> 고성장형)"
        },
        {
          "date": "2026-11-12",
          "prevFairPrice": 221.28783779095792,
          "newFairPrice": 227.04813224598055,
          "changePct": 2.603077743687007,
          "epsEffect": 1.354124078657459,
          "perEffect": 4.406170376365139,
          "otherEffect": 0.0,
          "note": "EPS 13.2381->13.3191(적정PER 16.72배 유지 가정 시 +1.35) + 적정PER 16.72->17.05배(EPS 13.3191 유지 가정 시 +4.41)"
        },
        {
          "date": "2026-11-13",
          "prevFairPrice": 227.04813224598055,
          "newFairPrice": 295.8014161554623,
          "changePct": 30.281369518158137,
          "epsEffect": -0.7310304684260149,
          "perEffect": 69.48431437790775,
          "otherEffect": 0.0,
          "note": "EPS 13.3191->13.2762(적정PER 17.05배 유지 가정 시 -0.73) + 적정PER 17.05->22.28배(EPS 13.2762 유지 가정 시 +69.48)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "VST": {
      "ticker": "VST",
      "asOf": "2026-11-13",
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
      "currentPrice": 134.50999450683594,
      "fairPrice": 127.03956233365479,
      "ratio": 1.058803982286722,
      "bandAggressiveLe": 101.63164986692384,
      "bandDcaHigh": 114.33560610028931,
      "bandFairHigh": 139.7435185670203,
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
      "epsUsedForCandidates": 10.677926465753425,
      "ttmEps": 8.003212620148506,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 8.003212620148506,
        "peTTM": 16.807,
        "finnhubUpdated": "2026-11-13 01:53",
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
        "fairHistTrailing": 121.03319914686638,
        "fairHistProxy": 131.40738187301437,
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
        "consensusUpdatedAtUtc": "2026-11-11T23:17:43.518667+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.7495099957671236,
        "candSpread": 2.6466936033302106,
        "fairAltExCappedGrowth": 124.03638074026058,
        "fairAltGapPct": -2.3639735041802945,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 11.8974,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 121.03319914686638,
          "per": 15.123076805701622,
          "eps": 8.003212620148506,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "sector_per",
          "fairPrice": 127.03956233365479,
          "per": 11.8974,
          "eps": 10.677926465753425,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 320.33779397260275,
          "per": 30.0,
          "eps": 10.677926465753425,
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
          "date": "2026-11-11",
          "prevFairPrice": 120.9595085185315,
          "newFairPrice": 124.12440401736984,
          "changePct": 2.616491698421095,
          "epsEffect": 3.1648954988383395,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 10.1669->10.4329(적정PER 11.90배 유지 가정 시 +3.16) + 적정PER 11.90->11.90배(EPS 10.4329 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-12",
          "prevFairPrice": 124.12440401736984,
          "newFairPrice": 126.9919049347726,
          "changePct": 2.310183029762213,
          "epsEffect": 2.867500917402761,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 10.4329->10.6739(적정PER 11.90배 유지 가정 시 +2.87) + 적정PER 11.90->11.90배(EPS 10.6739 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-13",
          "prevFairPrice": 126.9919049347726,
          "newFairPrice": 127.03956233365479,
          "changePct": 0.03752790298457076,
          "epsEffect": 0.0476573988821827,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 10.6739->10.6779(적정PER 11.90배 유지 가정 시 +0.05) + 적정PER 11.90->11.90배(EPS 10.6779 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "GEV": {
      "ticker": "GEV",
      "asOf": "2026-11-13",
      "verdict": "적정",
      "action": "관망(적정가 근처)",
      "actionRaw": "관망(적정가 근처)",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": 1211.7473427577006,
      "fairBasisMode": "a_kept_b_higher",
      "candidateBadge": null,
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": "median",
      "sectorFewPeers": true,
      "currentPrice": 818.489990234375,
      "fairPrice": 775.3488,
      "ratio": 1.055641009871138,
      "bandAggressiveLe": 620.27904,
      "bandDcaHigh": 697.81392,
      "bandFairHigh": 852.88368,
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
      "epsUsedForCandidates": 25.84496,
      "ttmEps": 38.11,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 39.665131583929,
        "peTTM": 20.635,
        "finnhubUpdated": "2026-11-13 01:53",
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
        "gapPct": 4.080639160139077,
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
        "consensusUpdatedAtUtc": "2026-11-11T23:17:43.518667+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 1.474562158347314,
        "candSpread": 3.0646356772081416,
        "fairAltExCappedGrowth": 1211.7473427577006,
        "fairAltGapPct": 56.28415788580581,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": "WO8-B 분류 불가(이력 부족, 유효 4개년 <5년) - 필터 없음(원본 그대로) - 경기순환 여부 판단 안 함, NTM EPS 그대로 사용",
      "convertedFairPer": 30.0,
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
          "fairPrice": 596.2390920064,
          "per": 23.06984,
          "eps": 25.84496,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 775.3488,
          "per": 30.0,
          "eps": 25.84496,
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
          "date": "2026-11-03",
          "prevFairPrice": 767.9871,
          "newFairPrice": 771.4671,
          "changePct": 0.4531326112118165,
          "epsEffect": 3.47999999999999,
          "perEffect": -9.13600572971518e-14,
          "otherEffect": 0.0,
          "note": "EPS 25.5996->25.7156(적정PER 30.00배 유지 가정 시 +3.48) + 적정PER 30.00->30.00배(EPS 25.7156 유지 가정 시 -0.00)"
        },
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
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "BE": {
      "ticker": "BE",
      "asOf": "2026-11-13",
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
      "currentPrice": 201.92999267578125,
      "fairPrice": 151.62599917808217,
      "ratio": 1.3317636406050515,
      "bandAggressiveLe": 121.30079934246574,
      "bandDcaHigh": 136.46339926027395,
      "bandFairHigh": 166.7885990958904,
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
      "epsUsedForCandidates": 5.054199972602739,
      "ttmEps": 1.6300000000000001,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 1.6721235935279735,
        "peTTM": 120.7626,
        "finnhubUpdated": "2026-11-13 01:54",
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
        "gapPct": 2.5842695415934536,
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
        "consensusUpdatedAtUtc": "2026-11-11T23:17:43.518667+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.32250405778080166,
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
          "fairPrice": 151.62599917808217,
          "per": 30.0,
          "eps": 5.054199972602739,
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
          "date": "2026-11-11",
          "prevFairPrice": 150.0851219178082,
          "newFairPrice": 151.28886164383562,
          "changePct": 0.8020380105941595,
          "epsEffect": 1.203739726027386,
          "perEffect": 3.5832400547480746e-14,
          "otherEffect": 0.0,
          "note": "EPS 5.0028->5.0430(적정PER 30.00배 유지 가정 시 +1.20) + 적정PER 30.00->30.00배(EPS 5.0430 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-12",
          "prevFairPrice": 151.28886164383562,
          "newFairPrice": 151.4574304109589,
          "changePct": 0.11142179621928835,
          "epsEffect": 0.16856876712327387,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 5.0430->5.0486(적정PER 30.00배 유지 가정 시 +0.17) + 적정PER 30.00->30.00배(EPS 5.0486 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-13",
          "prevFairPrice": 151.4574304109589,
          "newFairPrice": 151.62599917808217,
          "changePct": 0.11129778622672223,
          "epsEffect": 0.16856876712330052,
          "perEffect": -3.591225075611774e-14,
          "otherEffect": 0.0,
          "note": "EPS 5.0486->5.0542(적정PER 30.00배 유지 가정 시 +0.17) + 적정PER 30.00->30.00배(EPS 5.0542 유지 가정 시 -0.00)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "AAPL": {
      "ticker": "AAPL",
      "asOf": "2026-11-13",
      "verdict": "고평가",
      "action": "신규 추격 금지",
      "actionRaw": "신규 추격 금지",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": 286.2423460273972,
      "fairPriceB": 252.53180014641728,
      "fairBasisMode": "ex_capped_growth_floor_b",
      "candidateBadge": null,
      "lowConfidenceCapEligible": false,
      "sectorPerMethod": "median",
      "sectorFewPeers": true,
      "currentPrice": 354.8800048828125,
      "fairPrice": 252.53180014641728,
      "ratio": 1.4052883822039601,
      "bandAggressiveLe": 202.02544011713383,
      "bandDcaHigh": 227.27862013177557,
      "bandFairHigh": 277.784980161059,
      "modelCheckNeeded": false,
      "confidence": "보통",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±24%",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "기타",
      "stockTypeReason": "경기순환형·이익훼손형·고성장형 조건 모두 미해당",
      "candidates": {
        "historicalPer": 34.243968728400425,
        "historicalPerYearsUsed": 5,
        "historicalPerEpsBasis": "TTM EPS",
        "sectorPer": 20.192149999999998,
        "sectorPerValidPeers": 4,
        "sectorPerEpsBasis": "NTM EPS",
        "growthPerPeg": 30.0,
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
      "epsUsedForCandidates": 9.541411534246574,
      "ttmEps": 9.12283239887745,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 9.12283239887745,
        "peTTM": 38.9002,
        "finnhubUpdated": "2026-11-13 01:52",
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
        "fairHistTrailing": 312.4019873815976,
        "fairHistProxy": 268.6817652694286,
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
        "consensusUpdatedAtUtc": "2026-11-11T23:17:43.518667+00:00",
        "periodCompareMethod": "fallback_45d",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.9561302713055886,
        "candSpread": 1.6215061353479245,
        "fairAltExCappedGrowth": 252.53180014641728,
        "fairAltGapPct": 0.0,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 26.466922555432795,
      "fairPriceBasis": "B안: 성장 PER 상한 후보 제외, 나머지 두 후보의 평균 (A안 상한 포함 $286.24, 낮은 쪽 적용)",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 312.4019873815976,
          "per": 34.243968728400425,
          "eps": 9.12283239887745,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "sector_per",
          "fairPrice": 192.66161291123694,
          "per": 20.192149999999998,
          "eps": 9.541411534246574,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 286.2423460273972,
          "per": 30.0,
          "eps": 9.541411534246574,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": "최대/최소 1.70배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-11-11",
          "prevFairPrice": 245.34012586298303,
          "newFairPrice": 251.71041068985116,
          "changePct": 2.5965115997477684,
          "epsEffect": -0.9229716340669678,
          "perEffect": 7.293256460935071,
          "otherEffect": 0.0,
          "note": "EPS 9.5643->9.5283(적정PER 25.65배 유지 가정 시 -0.92) + 적정PER 25.65->26.42배(EPS 9.5283 유지 가정 시 +7.29)"
        },
        {
          "date": "2026-11-12",
          "prevFairPrice": 251.71041068985116,
          "newFairPrice": 255.45217090134142,
          "changePct": 1.4865337517170583,
          "epsEffect": 0.08126749444759729,
          "perEffect": 3.660492717042663,
          "otherEffect": 0.0,
          "note": "EPS 9.5283->9.5314(적정PER 26.42배 유지 가정 시 +0.08) + 적정PER 26.42->26.80배(EPS 9.5314 유지 가정 시 +3.66)"
        },
        {
          "date": "2026-11-13",
          "prevFairPrice": 255.45217090134142,
          "newFairPrice": 252.53180014641728,
          "changePct": -1.1432162602571956,
          "epsEffect": 0.26799467918605535,
          "perEffect": -3.188365434110174,
          "otherEffect": 0.0,
          "note": "EPS 9.5314->9.5414(적정PER 26.80배 유지 가정 시 +0.27) + 적정PER 26.80->26.47배(EPS 9.5414 유지 가정 시 -3.19)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "MSFT": {
      "ticker": "MSFT",
      "asOf": "2026-11-13",
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
      "currentPrice": 523.0,
      "fairPrice": 594.0884400671479,
      "ratio": 0.8803403074816386,
      "bandAggressiveLe": 475.2707520537183,
      "bandDcaHigh": 534.6795960604331,
      "bandFairHigh": 653.4972840738627,
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
      "epsUsedForCandidates": 21.571839369863014,
      "ttmEps": 19.16,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 19.27556315603255,
        "peTTM": 27.1328,
        "finnhubUpdated": "2026-11-13 01:52",
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
        "gapPct": 0.6031479959945241,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 674.0440665000726,
        "fairHistProxy": 605.5762853504489,
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
        "consensusUpdatedAtUtc": "2026-11-11T23:17:43.518667+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.8881950060673788,
        "candSpread": 1.5474568524826557,
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
          "fairPrice": 435.5818163321794,
          "per": 20.192149999999998,
          "eps": 21.571839369863014,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 594.0884400671479,
          "per": 27.53999925,
          "eps": 21.571839369863014,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": false,
      "dispersionFlag": "최대/최소 1.74배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-11-11",
          "prevFairPrice": 589.4694052613013,
          "newFairPrice": 593.4573409895402,
          "changePct": 0.6765297219235832,
          "epsEffect": 2.5333995439726347,
          "perEffect": 1.4545361842662672,
          "otherEffect": 0.0,
          "note": "EPS 21.4567->21.5489(적정PER 27.47배 유지 가정 시 +2.53) + 적정PER 27.47->27.54배(EPS 21.5489 유지 가정 시 +1.45)"
        },
        {
          "date": "2026-11-12",
          "prevFairPrice": 593.4573409895402,
          "newFairPrice": 593.7728905283441,
          "changePct": 0.05317139363003831,
          "epsEffect": 0.3155495388038915,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 21.5489->21.5604(적정PER 27.54배 유지 가정 시 +0.32) + 적정PER 27.54->27.54배(EPS 21.5604 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-13",
          "prevFairPrice": 593.7728905283441,
          "newFairPrice": 594.0884400671479,
          "changePct": 0.05314313668362576,
          "epsEffect": 0.31554953880379366,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 21.5604->21.5718(적정PER 27.54배 유지 가정 시 +0.32) + 적정PER 27.54->27.54배(EPS 21.5718 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "GOOGL": {
      "ticker": "GOOGL",
      "asOf": "2026-11-13",
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
      "currentPrice": 298.70001220703125,
      "fairPrice": 346.3132041505,
      "ratio": 0.8625140728888376,
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
        "finnhub": 19.473365900229563,
        "peTTM": 15.3389,
        "finnhubUpdated": "2026-11-13 01:52",
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
        "gapPct": 1.6355213999455165,
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
        "consensusUpdatedAtUtc": "2026-11-11T23:17:43.518667+00:00",
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
      "asOf": "2026-11-13",
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
      "currentPrice": 623.6099853515625,
      "fairPrice": 771.1866810383616,
      "ratio": 0.8086368718296651,
      "bandAggressiveLe": 616.9493448306894,
      "bandDcaHigh": 694.0680129345254,
      "bandFairHigh": 848.3053491421979,
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
      "epsUsedForCandidates": 33.334414575342464,
      "ttmEps": 29.33,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 29.1957707705932,
        "peTTM": 21.3596,
        "finnhubUpdated": "2026-11-13 01:52",
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
        "gapPct": -0.4576516515744977,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 716.4230703715406,
        "fairHistProxy": 661.265708603836,
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
        "consensusUpdatedAtUtc": "2026-11-11T23:17:43.518667+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.8798714593804644,
        "candSpread": 1.395868556747694,
        "fairAltExCappedGrowth": 743.8048757049511,
        "fairAltGapPct": -3.5506066179128437,
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
          "fairPrice": 771.1866810383616,
          "per": 23.13485,
          "eps": 33.334414575342464,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 1000.0324372602739,
          "per": 30.0,
          "eps": 33.334414575342464,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": null,
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-11-11",
          "prevFairPrice": 767.5056075861137,
          "newFairPrice": 770.5720406818767,
          "changePct": 0.3995323376733757,
          "epsEffect": 3.0664330957630956,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 33.1753->33.3078(적정PER 23.13배 유지 가정 시 +3.07) + 적정PER 23.13->23.13배(EPS 33.3078 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-12",
          "prevFairPrice": 770.5720406818767,
          "newFairPrice": 770.8793608601192,
          "changePct": 0.03988208266296402,
          "epsEffect": 0.3073201782424356,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 33.3078->33.3211(적정PER 23.13배 유지 가정 시 +0.31) + 적정PER 23.13->23.13배(EPS 33.3211 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-13",
          "prevFairPrice": 770.8793608601192,
          "newFairPrice": 771.1866810383616,
          "changePct": 0.0398661831988261,
          "epsEffect": 0.3073201782424356,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 33.3211->33.3344(적정PER 23.13배 유지 가정 시 +0.31) + 적정PER 23.13->23.13배(EPS 33.3344 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "AMZN": {
      "ticker": "AMZN",
      "asOf": "2026-11-13",
      "verdict": "매수",
      "action": "분할매수",
      "actionRaw": "분할매수",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": 433.75734492370657,
      "fairBasisMode": "a_kept_b_higher",
      "candidateBadge": null,
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": "median",
      "sectorFewPeers": true,
      "currentPrice": 267.44000244140625,
      "fairPrice": 320.13719999999995,
      "ratio": 0.8353918333808327,
      "bandAggressiveLe": 256.10976,
      "bandDcaHigh": 288.12348,
      "bandFairHigh": 352.15092,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "EPS 품질 경고: 다음회계연도 대안 기준 사용",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "고성장형",
      "stockTypeReason": "다음 회계연도 성장률 78.5%(기준 30% 초과)",
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
      "epsUsedForCandidates": 10.67124,
      "ttmEps": 12.37,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 12.52382413268427,
        "peTTM": 21.3545,
        "finnhubUpdated": "2026-11-13 02:28",
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
        "gapPct": 1.2435257290563495,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 636.5090219474132,
        "fairHistProxy": 326.5220832757032,
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
        "consensusUpdatedAtUtc": "2026-11-11T23:17:43.518667+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 1.1591904970743794,
        "candSpread": 2.755382704388671,
        "fairAltExCappedGrowth": 433.75734492370657,
        "fairAltGapPct": 35.49107848875628,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 29.999999999999996,
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
          "fairPrice": 231.0056679,
          "per": 21.6475,
          "eps": 10.67124,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 320.13719999999995,
          "per": 30.0,
          "eps": 10.67124,
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
          "date": "2026-11-03",
          "prevFairPrice": 316.5804,
          "newFairPrice": 319.875,
          "changePct": 1.0406835040956428,
          "epsEffect": 3.294599999999974,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 10.5527->10.6625(적정PER 30.00배 유지 가정 시 +3.29) + 적정PER 30.00->30.00배(EPS 10.6625 유지 가정 시 +0.00)"
        },
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
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "ORCL": {
      "ticker": "ORCL",
      "asOf": "2026-11-13",
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
      "currentPrice": 127.11000061035156,
      "fairPrice": 220.16195947106576,
      "ratio": 0.5773476985566922,
      "bandAggressiveLe": 176.12956757685262,
      "bandDcaHigh": 198.14576352395918,
      "bandFairHigh": 242.17815541817234,
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
            "per": 25.631545831813984
          },
          {
            "ticker": "ADBE",
            "per": 9.15169
          }
        ],
        "excluded": [],
        "note": "유효 비교군 4개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 9.47316709589041,
      "ttmEps": 6.38,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 6.195259639930769,
        "peTTM": 20.5173,
        "finnhubUpdated": "2026-11-13 01:52",
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
        "gapPct": -2.895616928984812,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 220.16195947106576,
        "fairHistProxy": 268.9696977390763,
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
        "consensusUpdatedAtUtc": "2026-11-11T23:17:43.518667+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.6734812059599087,
        "candSpread": 1.6101175493152171,
        "fairAltExCappedGrowth": 198.33385698588657,
        "fairAltGapPct": -9.914565866701363,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 23.24058651584168,
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
          "fairPrice": 176.50575450070738,
          "per": 18.632179999999998,
          "eps": 9.47316709589041,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 284.1950128767123,
          "per": 30.0,
          "eps": 9.47316709589041,
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
      "asOf": "2026-11-13",
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
      "currentPrice": 217.57000732421875,
      "fairPrice": 356.78690214698145,
      "ratio": 0.6098037960894341,
      "bandAggressiveLe": 285.42952171758515,
      "bandDcaHigh": 321.1082119322833,
      "bandFairHigh": 392.4655923616796,
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
            "per": 25.631545831813984
          },
          {
            "ticker": "ADBE",
            "per": 9.15169
          }
        ],
        "excluded": [],
        "note": "유효 비교군 4개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 16.17530997260274,
      "ttmEps": 10.969999999999999,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 11.716272426034537,
        "peTTM": 18.5699,
        "finnhubUpdated": "2026-11-13 01:52",
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
        "gapPct": 6.802848003961159,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 577.1543714316755,
        "fairHistProxy": 690.936299360331,
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
        "consensusUpdatedAtUtc": "2026-11-11T23:17:43.518667+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.6781941130389871,
        "candSpread": 1.9223072245316462,
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
          "fairPrice": 300.2404423529617,
          "per": 18.56165,
          "eps": 16.17530997260274,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 356.78690214698145,
          "per": 22.05750015,
          "eps": 16.17530997260274,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": false,
      "dispersionFlag": "최대/최소 2.83배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-11-11",
          "prevFairPrice": 357.1891638707444,
          "newFairPrice": 356.87629364115094,
          "changePct": -0.08759230716939137,
          "epsEffect": -0.3128702295934678,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 16.1935->16.1794(적정PER 22.06배 유지 가정 시 -0.31) + 적정PER 22.06->22.06배(EPS 16.1794 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-12",
          "prevFairPrice": 356.87629364115094,
          "newFairPrice": 356.8315978940662,
          "changePct": -0.012524156936489575,
          "epsEffect": -0.044695747084758715,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 16.1794->16.1773(적정PER 22.06배 유지 가정 시 -0.04) + 적정PER 22.06->22.06배(EPS 16.1773 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-13",
          "prevFairPrice": 356.8315978940662,
          "newFairPrice": 356.78690214698145,
          "changePct": -0.012525725678030926,
          "epsEffect": -0.044695747084758715,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 16.1773->16.1753(적정PER 22.06배 유지 가정 시 -0.04) + 적정PER 22.06->22.06배(EPS 16.1753 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2026-12-03"
    },
    "PLTR": {
      "ticker": "PLTR",
      "asOf": "2026-11-13",
      "verdict": "고평가",
      "action": "신규 추격 금지 · 모델 점검 필요(적정가/현재가 비율 2.35배)",
      "actionRaw": "신규 추격 금지 · 모델 점검 필요(적정가/현재가 비율 2.35배)",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "a_kept_one_candidate",
      "candidateBadge": "후보 1개",
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": null,
      "sectorFewPeers": null,
      "currentPrice": 171.5800018310547,
      "fairPrice": 72.8604895890411,
      "ratio": 2.3549114588554994,
      "bandAggressiveLe": 58.28839167123288,
      "bandDcaHigh": 65.57444063013699,
      "bandFairHigh": 80.14653854794521,
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
            "per": 25.631545831813984
          }
        ],
        "excluded": [
          {
            "ticker": "SNOW",
            "reason": "NTM PER 134.3배 >80배 제외"
          },
          {
            "ticker": "DDOG",
            "reason": "NTM PER 80.2배 >80배 제외"
          }
        ],
        "note": "유효 비교군 2개 이하(최소 3개 기준 미달)"
      },
      "epsUsedForCandidates": 2.4286829863013697,
      "ttmEps": 1.43,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 1.5106173900695676,
        "peTTM": 113.5827,
        "finnhubUpdated": "2026-11-13 01:52",
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
        "gapPct": 5.637579725144604,
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
        "consensusUpdatedAtUtc": "2026-11-11T23:17:43.518667+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.5887964827298191,
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
          "fairPrice": 72.8604895890411,
          "per": 30.0,
          "eps": 2.4286829863013697,
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
          "date": "2026-11-11",
          "prevFairPrice": 70.14030739726027,
          "newFairPrice": 72.7228808219178,
          "changePct": 3.682010416678616,
          "epsEffect": 2.582573424657526,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 2.3380->2.4241(적정PER 30.00배 유지 가정 시 +2.58) + 적정PER 30.00->30.00배(EPS 2.4241 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-12",
          "prevFairPrice": 72.7228808219178,
          "newFairPrice": 72.79168520547945,
          "changePct": 0.09461174087718291,
          "epsEffect": 0.06880438356165808,
          "perEffect": -8.620267191081564e-15,
          "otherEffect": 0.0,
          "note": "EPS 2.4241->2.4264(적정PER 30.00배 유지 가정 시 +0.07) + 적정PER 30.00->30.00배(EPS 2.4264 유지 가정 시 -0.00)"
        },
        {
          "date": "2026-11-13",
          "prevFairPrice": 72.79168520547945,
          "newFairPrice": 72.8604895890411,
          "changePct": 0.09452231167257259,
          "epsEffect": 0.06880438356163142,
          "perEffect": 8.628415266902926e-15,
          "otherEffect": 0.0,
          "note": "EPS 2.4264->2.4287(적정PER 30.00배 유지 가정 시 +0.07) + 적정PER 30.00->30.00배(EPS 2.4287 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "TSLA": {
      "ticker": "TSLA",
      "asOf": "2026-11-13",
      "verdict": "고평가",
      "action": "신규 추격 금지 · 모델 점검 필요(적정가/현재가 비율 9.07배)",
      "actionRaw": "신규 추격 금지 · 모델 점검 필요(적정가/현재가 비율 9.07배)",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "median",
      "candidateBadge": null,
      "lowConfidenceCapEligible": false,
      "sectorPerMethod": null,
      "sectorFewPeers": null,
      "currentPrice": 397.45001220703125,
      "fairPrice": 43.825872061767285,
      "ratio": 9.068844349448959,
      "bandAggressiveLe": 35.06069764941383,
      "bandDcaHigh": 39.443284855590555,
      "bandFairHigh": 48.208459267944015,
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
      "epsUsedForCandidates": 2.1020171506849317,
      "ttmEps": 0.91,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 0.8525228997296921,
        "peTTM": 466.2045,
        "finnhubUpdated": "2026-11-13 01:52",
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
        "gapPct": -6.316164864869,
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
        "modelSplitRatio": 1.0981755337861097,
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
        "consensusUpdatedAtUtc": "2026-11-11T23:17:43.518667+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.43291749532275753,
        "candSpread": 1.0981755337861097,
        "fairAltExCappedGrowth": null,
        "fairAltGapPct": null,
        "fairAltApplicable": false,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 20.849436003643856,
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
          "fairPrice": 45.87652431369864,
          "per": 21.825000000000003,
          "eps": 2.1020171506849317,
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
          "date": "2026-11-11",
          "prevFairPrice": 43.60000842044864,
          "newFairPrice": 43.799862641219335,
          "changePct": 0.45838115177281347,
          "epsEffect": 0.12670349092709088,
          "perEffect": 0.07315072984360048,
          "otherEffect": 0.0,
          "note": "EPS 2.0935->2.0996(적정PER 20.83배 유지 가정 시 +0.13) + 적정PER 20.83->20.86배(EPS 2.0996 유지 가정 시 +0.07)"
        },
        {
          "date": "2026-11-12",
          "prevFairPrice": 43.799862641219335,
          "newFairPrice": 43.81286735149331,
          "changePct": 0.029691212459960287,
          "epsEffect": 0.024860258406045003,
          "perEffect": -0.011855548132063696,
          "otherEffect": 0.0,
          "note": "EPS 2.0996->2.1008(적정PER 20.86배 유지 가정 시 +0.02) + 적정PER 20.86->20.86배(EPS 2.1008 유지 가정 시 -0.01)"
        },
        {
          "date": "2026-11-13",
          "prevFairPrice": 43.81286735149331,
          "newFairPrice": 43.825872061767285,
          "changePct": 0.0296823993956925,
          "epsEffect": 0.024853533161228524,
          "perEffect": -0.011848822887254517,
          "otherEffect": 0.0,
          "note": "EPS 2.1008->2.1020(적정PER 20.86배 유지 가정 시 +0.02) + 적정PER 20.86->20.85배(EPS 2.1020 유지 가정 시 -0.01)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    }
  }
};
if (typeof window !== 'undefined') { window.PRICE_MAP_DATA = PRICE_MAP_DATA; }
