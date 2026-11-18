const PRICE_MAP_DATA = {
  "_meta": {
    "title": "WO17 가격지도(price_map) - 화면용 production 데이터",
    "as_of": "2026-11-19",
    "input_snapshot_hash": "a0918e686ea98ad64b33758d7b4af995552b14a3d805db8a352de2af06e6f0e4",
    "generated_by": "price_map_engine.py write_price_map_data_js()",
    "session_date": "2026-11-18",
    "session_date_source": "daily_run_arg(확정 종가 거래일)",
    "fxRates": {
      "EURUSD": {
        "rate": 1.0972,
        "asOf": "2026-11-18",
        "source": "Yahoo Finance chart API(query1.finance.yahoo.com)"
      },
      "TWDUSD": {
        "rate": 0.0303,
        "asOf": "2026-11-18",
        "source": "Yahoo Finance chart API(query1.finance.yahoo.com)"
      }
    },
    "ttmEpsRule": {
      "mode": "verified_quarterly_sum",
      "status": "applied_with_ticker_fallback",
      "changed": [
        "ASML"
      ],
      "changed_approved": [],
      "pending_approval": [],
      "auto_reverted": [
        "ASML"
      ],
      "quarterly_sum_count": 32,
      "fair_changed": [
        "SNDK",
        "WDC",
        "AVGO",
        "ANET",
        "HUBB",
        "VRT",
        "PWR",
        "FIX",
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
      "asOf": "2026-11-19",
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
      "currentPrice": 349.7699890136719,
      "fairPrice": 500.73217278335676,
      "ratio": 0.6985171075975597,
      "bandAggressiveLe": 400.5857382266854,
      "bandDcaHigh": 450.6589555050211,
      "bandFairHigh": 550.8053900616925,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±45% (±40% 밖)",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "고성장형",
      "stockTypeReason": "다음 회계연도 성장률 49.6%(기준 30% 초과)",
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
      "epsUsedForCandidates": 19.563549232876714,
      "ttmEps": 12.62,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 12.694304820608489,
        "peTTM": 27.5533,
        "finnhubUpdated": "2026-11-18 23:01",
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
        "gapPct": 0.5887862171829683,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 273.3893674702041,
        "fairHistProxy": 354.6087073708834,
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
        "consensusUpdatedAtUtc": "2026-11-18T00:35:33.322636+00:00",
        "periodCompareMethod": "fallback_45d",
        "pendingReflection": true,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.645077222429148,
        "candSpread": 2.146778722293458,
        "fairAltExCappedGrowth": 387.0607701267804,
        "fairAltGapPct": -22.7010383664236,
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
          "fairPrice": 500.73217278335676,
          "per": 25.59516,
          "eps": 19.563549232876714,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 586.9064769863014,
          "per": 30.0,
          "eps": 19.563549232876714,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": null,
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-11-17",
          "prevFairPrice": 482.9518665807715,
          "newFairPrice": 497.662747902125,
          "changePct": 3.046034675361001,
          "epsEffect": 14.710881321353487,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 18.8689->19.4436(적정PER 25.60배 유지 가정 시 +14.71) + 적정PER 25.60->25.60배(EPS 19.4436 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-18",
          "prevFairPrice": 497.662747902125,
          "newFairPrice": 497.88527853430026,
          "changePct": 0.044715147580032095,
          "epsEffect": 0.22253063217532235,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 19.4436->19.4523(적정PER 25.60배 유지 가정 시 +0.22) + 적정PER 25.60->25.60배(EPS 19.4523 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-19",
          "prevFairPrice": 497.88527853430026,
          "newFairPrice": 500.73217278335676,
          "changePct": 0.5717972335790555,
          "epsEffect": 2.846894249056469,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 19.4523->19.5635(적정PER 25.60배 유지 가정 시 +2.85) + 적정PER 25.60->25.60배(EPS 19.5635 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "LRCX": {
      "ticker": "LRCX",
      "asOf": "2026-11-19",
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
      "currentPrice": 209.69500732421875,
      "fairPrice": 273.1752977247682,
      "ratio": 0.767620678263129,
      "bandAggressiveLe": 218.54023817981457,
      "bandDcaHigh": 245.8577679522914,
      "bandFairHigh": 300.49282749724506,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±42% (±40% 밖)",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "고성장형",
      "stockTypeReason": "다음 회계연도 성장률 65.9%(기준 30% 초과)",
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
      "epsUsedForCandidates": 10.672927917808218,
      "ttmEps": 6.71,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 6.727958987163594,
        "peTTM": 31.1677,
        "finnhubUpdated": "2026-11-18 23:02",
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
        "gapPct": 0.26764511421153436,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 157.15951313800122,
        "fairHistProxy": 205.45467296806137,
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
        "consensusUpdatedAtUtc": "2026-11-18T00:35:33.322636+00:00",
        "periodCompareMethod": "fallback_45d",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.6286934617823183,
        "candSpread": 2.03734302264662,
        "fairAltExCappedGrowth": 215.1674054313847,
        "fairAltGapPct": -21.234677065064677,
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
          "fairPrice": 273.1752977247682,
          "per": 25.59516,
          "eps": 10.672927917808218,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 320.18783753424657,
          "per": 30.0,
          "eps": 10.672927917808218,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": null,
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-11-17",
          "prevFairPrice": 271.8438753683803,
          "newFairPrice": 272.38791416830685,
          "changePct": 0.20012913632478638,
          "epsEffect": 0.5440387999265894,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 10.6209->10.6422(적정PER 25.60배 유지 가정 시 +0.54) + 적정PER 25.60->25.60배(EPS 10.6422 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-18",
          "prevFairPrice": 272.38791416830685,
          "newFairPrice": 272.569260434949,
          "changePct": 0.06657647318746261,
          "epsEffect": 0.18134626664216616,
          "perEffect": -3.783373653330472e-14,
          "otherEffect": 0.0,
          "note": "EPS 10.6422->10.6493(적정PER 25.60배 유지 가정 시 +0.18) + 적정PER 25.60->25.60배(EPS 10.6493 유지 가정 시 -0.00)"
        },
        {
          "date": "2026-11-19",
          "prevFairPrice": 272.569260434949,
          "newFairPrice": 273.1752977247682,
          "changePct": 0.22234249337292183,
          "epsEffect": 0.6060372898191753,
          "perEffect": 3.7917857006449006e-14,
          "otherEffect": 0.0,
          "note": "EPS 10.6493->10.6729(적정PER 25.60배 유지 가정 시 +0.61) + 적정PER 25.60->25.60배(EPS 10.6729 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "KLAC": {
      "ticker": "KLAC",
      "asOf": "2026-11-19",
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
      "currentPrice": 143.96400451660156,
      "fairPrice": 142.1662373568789,
      "ratio": 1.0126455281728373,
      "bandAggressiveLe": 113.73298988550312,
      "bandDcaHigh": 127.949613621191,
      "bandFairHigh": 156.3828610925668,
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
      "epsUsedForCandidates": 6.289116684931507,
      "ttmEps": 4.0,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 4.099132831346889,
        "peTTM": 35.1206,
        "finnhubUpdated": "2026-11-18 23:02",
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
        "gapPct": 2.4783207836722276,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 96.99626457539618,
        "fairHistProxy": 150.2634140606493,
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
        "consensusUpdatedAtUtc": "2026-11-18T00:35:33.322636+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.6360193649425926,
        "candSpread": 1.9451625418140444,
        "fairAltExCappedGrowth": 119.58125096613753,
        "fairAltGapPct": -15.886322104766993,
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
          "fairPrice": 142.1662373568789,
          "per": 22.60512,
          "eps": 6.289116684931507,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 188.6735005479452,
          "per": 30.0,
          "eps": 6.289116684931507,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": null,
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-11-17",
          "prevFairPrice": 141.67452892868383,
          "newFairPrice": 141.92183946989587,
          "changePct": 0.17456245881469346,
          "epsEffect": 0.24731054121203994,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 6.2674->6.2783(적정PER 22.61배 유지 가정 시 +0.25) + 적정PER 22.61->22.61배(EPS 6.2783 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-18",
          "prevFairPrice": 141.92183946989587,
          "newFairPrice": 142.00427631696655,
          "changePct": 0.05808608976504132,
          "epsEffect": 0.08243684707068667,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 6.2783->6.2820(적정PER 22.61배 유지 가정 시 +0.08) + 적정PER 22.61->22.61배(EPS 6.2820 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-19",
          "prevFairPrice": 142.00427631696655,
          "newFairPrice": 142.1662373568789,
          "changePct": 0.1140536356460349,
          "epsEffect": 0.16196103991233932,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 6.2820->6.2891(적정PER 22.61배 유지 가정 시 +0.16) + 적정PER 22.61->22.61배(EPS 6.2891 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "ASML": {
      "ticker": "ASML",
      "asOf": "2026-11-19",
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
      "currentPrice": 1383.0,
      "fairPrice": 1236.6316815370521,
      "ratio": 1.1183604792342225,
      "bandAggressiveLe": 989.3053452296417,
      "bandDcaHigh": 1112.968513383347,
      "bandFairHigh": 1360.2948496907575,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "EPS 품질 경고: ADR 통화환산 적용(EUR->USD); WO8-B 분류 불가(이력 부족 - 유효 4개년 <5년; 필터 없음(원본 그대로))",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "분류불가(이력부족)",
      "stockTypeReason": "유효 연간 EPS 4개년(<5년 기준) - 필터 없음(원본 그대로)",
      "candidates": {
        "historicalPer": 33.168248180232645,
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
      "epsUsedForCandidates": 54.70582246575343,
      "ttmEps": 28.866685173627996,
      "ttmEpsSelection": {
        "rule": "finnhub_peTTM",
        "finnhub": 28.866685173627996,
        "peTTM": 47.9099,
        "finnhubUpdated": "2026-11-18 23:01",
        "source": "finnhub_peTTM(판정 변경 + 원자료 검증 미완 - 자동 복귀)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 957.4573779795354,
        "fairHistProxy": 1398.4868429110657,
        "proxyPer": 25.563765973659148,
        "trailingPer": 33.168248180232645,
        "modelSplitEligible": false,
        "modelSplitRatio": null,
        "actionBeforeModelSplit": null,
        "modelSplitMode": "on"
      },
      "earningsStatus": {
        "latestOfficialPeriodEnd": null,
        "latestOfficialSource": null,
        "valuationActualPeriodEnd": null,
        "valuationPeriods": null,
        "earningsReleaseDate": null,
        "earningsReleaseAtUtc": null,
        "consensusUpdatedAtUtc": "2026-11-18T00:35:33.322636+00:00",
        "periodCompareMethod": null,
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.5276711668433268,
        "candSpread": 1.714096848296135,
        "fairAltExCappedGrowth": 1097.0445297582937,
        "fairAltGapPct": -11.287690090978487,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": "WO8-B 분류 불가(이력 부족, 유효 4개년 <5년) - 필터 없음(원본 그대로) - 경기순환 여부 판단 안 함, NTM EPS 그대로 사용",
      "convertedFairPer": 22.60512,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 957.4573779795354,
          "per": 33.168248180232645,
          "eps": 28.866685173627996,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "sector_per",
          "fairPrice": 1236.6316815370521,
          "per": 22.60512,
          "eps": 54.70582246575343,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 1641.174673972603,
          "per": 30.0,
          "eps": 54.70582246575343,
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
          "date": "2026-11-14",
          "prevFairPrice": 1273.7270666172938,
          "newFairPrice": 1273.727066617294,
          "changePct": 1.785105156374518e-14,
          "epsEffect": 0.9624799603161158,
          "perEffect": -0.9624799603159208,
          "otherEffect": 0.0,
          "note": "EPS 54.4589->54.5001(적정PER 23.39배 유지 가정 시 +0.96) + 적정PER 23.39->23.37배(EPS 54.5001 유지 가정 시 -0.96)"
        },
        {
          "date": "2026-11-18",
          "prevFairPrice": 1273.727066617294,
          "newFairPrice": 1235.7014498831343,
          "changePct": -2.985381855403796,
          "epsEffect": 3.8470128819140865,
          "perEffect": -41.87262961607386,
          "otherEffect": 0.0,
          "note": "EPS 54.5001->54.6647(적정PER 23.37배 유지 가정 시 +3.85) + 적정PER 23.37->22.61배(EPS 54.6647 유지 가정 시 -41.87)"
        },
        {
          "date": "2026-11-19",
          "prevFairPrice": 1235.7014498831343,
          "newFairPrice": 1236.6316815370521,
          "changePct": 0.07527964412486916,
          "epsEffect": 0.9302316539178587,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 54.6647->54.7058(적정PER 22.61배 유지 가정 시 +0.93) + 적정PER 22.61->22.61배(EPS 54.7058 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "MU": {
      "ticker": "MU",
      "asOf": "2026-11-19",
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
      "currentPrice": 699.0,
      "fairPrice": 1189.1185005410634,
      "ratio": 0.5878303967871549,
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
            "per": 46.01511728235882
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
        "finnhub": 77.47298420615128,
        "peTTM": 9.0225,
        "finnhubUpdated": "2026-11-18 23:02",
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
        "gapPct": 4.396960256234039,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": {
        "ntm_eps_raw": 183.35292383561645,
        "normalized_eps": 53.57,
        "change_pct": -70.78312203626066,
        "fair_without_normalization": 3284.418151451595,
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
            "fairPrice": 5500.587715068494,
            "per": 30.0,
            "eps": 183.35292383561645,
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
        "consensusUpdatedAtUtc": "2026-11-18T00:35:33.322636+00:00",
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
      "epsBasisNote": "경기순환형(WO8-B 최종본: (A) EPS 30%+·매출 5%+ 동반 감소 2회(2019→2020 EPS -57%·매출 -8%, 2022→2023 EPS -169%·매출 -49%, 기준 2회 이상)) - NTM EPS(183.3529) 대신 정상화 EPS 53.5700(순이익률 사이클 중앙값 22% x NTM매출/주식수 243.5, 기준연수 8) 사용 - 업종PER·성장PER·과거PER 후보 전부 동일 기준 적용(item3)",
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
      "asOf": "2026-11-19",
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
      "currentPrice": 768.02001953125,
      "fairPrice": 5247.1851879330225,
      "ratio": 0.14636800341971337,
      "bandAggressiveLe": 4197.748150346418,
      "bandDcaHigh": 4722.466669139721,
      "bandFairHigh": 5771.903706726325,
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
      "epsUsedForCandidates": 251.43528964383563,
      "ttmEps": 124.75,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 131.4945159880237,
        "peTTM": 5.8407,
        "finnhubUpdated": "2026-11-18 23:02",
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
        "gapPct": 5.40642564170235,
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
        "modelSplitRatio": 2.5558326230633392,
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
        "consensusUpdatedAtUtc": "2026-11-18T00:35:33.322636+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.49615151547227715,
        "candSpread": 2.5558326230633392,
        "fairAltExCappedGrowth": 2951.311686550976,
        "fairAltGapPct": -43.75438295301408,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": "WO8-B 분류 불가(이력 부족, 유효 4개년 <5년) - 필터 없음(원본 그대로) - 경기순환 여부 판단 안 함, NTM EPS 그대로 사용",
      "convertedFairPer": 20.868928921496227,
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
          "fairPrice": 7543.0586893150685,
          "per": 30.0,
          "eps": 251.43528964383563,
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
          "date": "2026-11-17",
          "prevFairPrice": 5234.533168754941,
          "newFairPrice": 5242.124380261789,
          "changePct": 0.1450217481123384,
          "epsEffect": 10.571360803472237,
          "perEffect": -2.9801492966235434,
          "otherEffect": 0.0,
          "note": "EPS 250.5918->251.0979(적정PER 20.89배 유지 가정 시 +10.57) + 적정PER 20.89->20.88배(EPS 251.0979 유지 가정 시 -2.98)"
        },
        {
          "date": "2026-11-18",
          "prevFairPrice": 5242.124380261789,
          "newFairPrice": 5244.654784097405,
          "changePct": 0.04827057986536807,
          "epsEffect": 3.521784798767428,
          "perEffect": -0.9913809631513435,
          "otherEffect": 0.0,
          "note": "EPS 251.0979->251.2666(적정PER 20.88배 유지 가정 시 +3.52) + 적정PER 20.88->20.87배(EPS 251.2666 유지 가정 시 -0.99)"
        },
        {
          "date": "2026-11-19",
          "prevFairPrice": 5244.654784097405,
          "newFairPrice": 5247.1851879330225,
          "changePct": 0.04824729061843458,
          "epsEffect": 3.521119212432408,
          "perEffect": -0.9907153768152795,
          "otherEffect": 0.0,
          "note": "EPS 251.2666->251.4353(적정PER 20.87배 유지 가정 시 +3.52) + 적정PER 20.87->20.87배(EPS 251.4353 유지 가정 시 -0.99)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "WDC": {
      "ticker": "WDC",
      "asOf": "2026-11-19",
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
      "currentPrice": 284.7799987792969,
      "fairPrice": 748.4503169978109,
      "ratio": 0.38049285612117634,
      "bandAggressiveLe": 598.7602535982487,
      "bandDcaHigh": 673.6052852980298,
      "bandFairHigh": 823.2953486975921,
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
      "epsUsedForCandidates": 30.824961616438355,
      "ttmEps": 25.773367999999998,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 27.975009212292665,
        "peTTM": 10.1798,
        "finnhubUpdated": "2026-11-18 23:02",
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
        "gapPct": 8.542310854726743,
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
        "modelSplitRatio": 1.6162649001978107,
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
        "consensusUpdatedAtUtc": "2026-11-18T01:24:57.009830+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.8361200354668263,
        "candSpread": 1.6162649001978107,
        "fairAltExCappedGrowth": 572.1517855024711,
        "fairAltGapPct": -23.55514153598194,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": "WO8-B 분류 불가(이력 부족, 유효 1개년 <5년) - corporate_events.json 기업분할/분리상장(2025-02-21) 이전 회계연도 7개 제외 - 경기순환 여부 판단 안 함, NTM EPS 그대로 사용",
      "convertedFairPer": 24.280656901083596,
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
          "fairPrice": 924.7488484931506,
          "per": 30.0,
          "eps": 30.824961616438355,
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
          "date": "2026-11-17",
          "prevFairPrice": 745.22838480603,
          "newFairPrice": 747.1615441210985,
          "changePct": 0.2594049494735253,
          "epsEffect": 3.137618152727501,
          "perEffect": -1.2044588376590506,
          "otherEffect": 0.0,
          "note": "EPS 30.6102->30.7390(적정PER 24.35배 유지 가정 시 +3.14) + 적정PER 24.35->24.31배(EPS 30.7390 유지 가정 시 -1.20)"
        },
        {
          "date": "2026-11-18",
          "prevFairPrice": 747.1615441210985,
          "newFairPrice": 747.8059305594547,
          "changePct": 0.08624459374635898,
          "epsEffect": 1.0441894360896282,
          "perEffect": -0.3998029977333419,
          "otherEffect": 0.0,
          "note": "EPS 30.7390->30.7820(적정PER 24.31배 유지 가정 시 +1.04) + 적정PER 24.31->24.29배(EPS 30.7820 유지 가정 시 -0.40)"
        },
        {
          "date": "2026-11-19",
          "prevFairPrice": 747.8059305594547,
          "newFairPrice": 748.4503169978109,
          "changePct": 0.08617027654141052,
          "epsEffect": 1.043631474491513,
          "perEffect": -0.3992450361353351,
          "otherEffect": 0.0,
          "note": "EPS 30.7820->30.8250(적정PER 24.29배 유지 가정 시 +1.04) + 적정PER 24.29->24.28배(EPS 30.8250 유지 가정 시 -0.40)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "STX": {
      "ticker": "STX",
      "asOf": "2026-11-19",
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
      "currentPrice": 501.9549865722656,
      "fairPrice": 277.57811859911607,
      "ratio": 1.8083377360778181,
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
            "per": 13.048347955945491
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
        "finnhub": 19.056757273054885,
        "peTTM": 26.34,
        "finnhubUpdated": "2026-11-18 23:03",
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
        "gapPct": 0.08669146774844538,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": {
        "ntm_eps_raw": 49.84602093150685,
        "normalized_eps": 10.90848,
        "change_pct": -78.1156453491257,
        "fair_without_normalization": 946.5864105697215,
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
            "fairPrice": 1495.3806279452056,
            "per": 30.0,
            "eps": 49.84602093150685,
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
        "consensusUpdatedAtUtc": "2026-11-18T00:35:33.322636+00:00",
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
      "epsBasisNote": "경기순환형(WO8-B 최종본: (B) EPS 30%+·매출 5%+ 동반 감소 1회(2022→2023 EPS -135%·매출 -37%) + 이익 정점 의심(NTM EPS $39.98가 과거 8년 EPS 중앙값 $6.06의 3배 초과)) - NTM EPS(49.8460) 대신 정상화 EPS 10.9085(순이익률 사이클 중앙값 13.2% x NTM매출/주식수 82.64, 기준연수 8) 사용 - 업종PER·성장PER·과거PER 후보 전부 동일 기준 적용(item3)",
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
      "asOf": "2026-11-19",
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
      "currentPrice": 152.8209991455078,
      "fairPrice": 248.51900462897802,
      "ratio": 0.6149268116281859,
      "bandAggressiveLe": 198.81520370318242,
      "bandDcaHigh": 223.66710416608024,
      "bandFairHigh": 273.37090509187584,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "EPS 품질 경고: 경기순환형(WO8-B 최종본, 39종목 적용) - 정상화 EPS 사용(과거PER 후보 포함); 경기순환형(item2)인데 비교군 정상화 EPS 유효 비교군 부족 - 업종PER 후보를 비움(forwardPE 기준으로 섞어 쓰지 않음, 원래 forwardPE 기준 업종PER 30.06626는 참고용으로만 보관) - 업종 비교 불가(정상화기준 유효 비교군 1개 <3개)",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "경기순환형",
      "stockTypeReason": "(B) EPS 30%+·매출 5%+ 동반 감소 1회(2019→2020 EPS -32%·매출 -7%) + 이익 정점 의심(NTM EPS $9.34가 과거 8년 EPS 중앙값 $0.28의 3배 초과)",
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
            "per": 33.442686374356356
          }
        ],
        "excluded": [
          {
            "ticker": "AMD",
            "reason": "정상화기준 PER 265.3배 >80배 제외"
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
        "finnhub": 7.833158161178289,
        "peTTM": 19.5095,
        "finnhubUpdated": "2026-11-18 23:01",
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
        "gapPct": -0.9714518182264431,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": {
        "ntm_eps_raw": 14.559124,
        "normalized_eps": 6.114639999999999,
        "change_pct": -58.00131931014532,
        "fair_without_normalization": 421.7075214248198,
        "basis_without_normalization": "B안: 성장 PER 상한 후보 제외, 나머지 두 후보의 평균 (A안 상한 포함 $436.77, 낮은 쪽 적용)",
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
            "fairPrice": 437.73840755624,
            "per": 30.06626,
            "eps": 14.559124,
            "epsBasis": "NTM EPS"
          },
          {
            "candidate": "growth_per_peg",
            "fairPrice": 436.77372,
            "per": 30.0,
            "eps": 14.559124,
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
        "latestOfficialPeriodEnd": "2026-12-31",
        "latestOfficialSource": "8-K(실적) 2026-11-17",
        "valuationActualPeriodEnd": "2026-07-26",
        "valuationPeriods": "Q4'25~Q3'26",
        "earningsReleaseDate": "2026-11-17",
        "earningsReleaseAtUtc": "2026-11-18T04:59:00+00:00",
        "consensusUpdatedAtUtc": "2026-11-18T00:35:33.322636+00:00",
        "periodCompareMethod": "fallback_45d",
        "pendingReflection": true,
        "consensusPreRelease": true
      },
      "diag": {
        "epsTtmNtmRatio": 1.2936166315596669,
        "candSpread": 1.7095517711479125,
        "fairAltExCappedGrowth": 313.5988092579561,
        "fairAltGapPct": 26.187053471479093,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": "경기순환형(WO8-B 최종본: (B) EPS 30%+·매출 5%+ 동반 감소 1회(2019→2020 EPS -32%·매출 -7%) + 이익 정점 의심(NTM EPS $9.34가 과거 8년 EPS 중앙값 $0.28의 3배 초과)) - NTM EPS(14.5591) 대신 정상화 EPS 6.1146(순이익률 사이클 중앙값 35.8% x NTM매출/주식수 17.08, 기준연수 8) 사용 - 업종PER·성장PER·과거PER 후보 전부 동일 기준 적용(item3)",
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
      "nextUpdateDate": "2027-01-01"
    },
    "AMD": {
      "ticker": "AMD",
      "asOf": "2026-11-19",
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
      "currentPrice": 506.94000244140625,
      "fairPrice": 280.99691310910305,
      "ratio": 1.8040767666532194,
      "bandAggressiveLe": 224.79753048728244,
      "bandDcaHigh": 252.89722179819276,
      "bandFairHigh": 309.09660442001336,
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
      "epsUsedForCandidates": 16.538900575342467,
      "ttmEps": 4.6,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 4.798300826043435,
        "peTTM": 105.6499,
        "finnhubUpdated": "2026-11-18 23:01",
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
        "gapPct": 4.310887522683382,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 261.5735397635731,
        "fairHistProxy": 686.0769675925602,
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
        "consensusUpdatedAtUtc": "2026-11-18T00:35:33.322636+00:00",
        "periodCompareMethod": "fallback_45d",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.27813215147190934,
        "candSpread": 1.8968547725000837,
        "fairAltExCappedGrowth": 271.28522643633806,
        "fairAltGapPct": -3.456154220809615,
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
          "fairPrice": 280.99691310910305,
          "per": 16.99006,
          "eps": 16.538900575342467,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 496.167017260274,
          "per": 30.0,
          "eps": 16.538900575342467,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": "최대/최소 3.35배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-11-17",
          "prevFairPrice": 279.53122950841805,
          "newFairPrice": 280.89089001441096,
          "changePct": 0.48640737150693214,
          "epsEffect": 1.3596605059928837,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 16.4526->16.5327(적정PER 16.99배 유지 가정 시 +1.36) + 적정PER 16.99->16.99배(EPS 16.5327 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-18",
          "prevFairPrice": 280.89089001441096,
          "newFairPrice": 280.5551962196011,
          "changePct": -0.11951038881774827,
          "epsEffect": -0.3356937948098679,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 16.5327->16.5129(적정PER 16.99배 유지 가정 시 -0.34) + 적정PER 16.99->16.99배(EPS 16.5129 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-19",
          "prevFairPrice": 280.5551962196011,
          "newFairPrice": 280.99691310910305,
          "changePct": 0.15744384543717335,
          "epsEffect": 0.4417168895019428,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 16.5129->16.5389(적정PER 16.99배 유지 가정 시 +0.44) + 적정PER 16.99->16.99배(EPS 16.5389 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "AVGO": {
      "ticker": "AVGO",
      "asOf": "2026-11-19",
      "verdict": "매수",
      "action": "분할매수",
      "actionRaw": "분할매수",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": 582.4212,
      "fairPriceB": 430.61965666729475,
      "fairBasisMode": "ex_capped_growth_floor_b",
      "candidateBadge": null,
      "lowConfidenceCapEligible": false,
      "sectorPerMethod": "median",
      "sectorFewPeers": true,
      "currentPrice": 351.5950012207031,
      "fairPrice": 430.61965666729475,
      "ratio": 0.816486186306057,
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
        "finnhub": 8.321085856099568,
        "peTTM": 42.2535,
        "finnhubUpdated": "2026-11-18 23:01",
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
        "gapPct": 6.271850014043023,
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
        "consensusUpdatedAtUtc": "2026-11-18T00:35:33.322636+00:00",
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
      "asOf": "2026-11-19",
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
      "currentPrice": 144.92999267578125,
      "fairPrice": 114.52649450764,
      "ratio": 1.2654713068696348,
      "bandAggressiveLe": 91.621195606112,
      "bandDcaHigh": 103.073845056876,
      "bandFairHigh": 125.97914395840401,
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
      "epsUsedForCandidates": 6.740794,
      "ttmEps": 0.9100000000000001,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 2.933377982880658,
        "peTTM": 49.4072,
        "finnhubUpdated": "2026-11-19 00:00",
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
        "gapPct": -3.1888454494832463,
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
        "consensusUpdatedAtUtc": "2026-11-18T00:35:33.322636+00:00",
        "periodCompareMethod": "fallback_45d",
        "pendingReflection": true,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.13499893336007598,
        "candSpread": 21.630785722456434,
        "fairAltExCappedGrowth": 61.93769187628365,
        "fairAltGapPct": -45.918460053667474,
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
          "fairPrice": 114.52649450764,
          "per": 16.99006,
          "eps": 6.740794,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 202.22382000000002,
          "per": 30.0,
          "eps": 6.740794,
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
          "date": "2026-11-17",
          "prevFairPrice": 113.5099336006926,
          "newFairPrice": 113.94706084658905,
          "changePct": 0.3851004330900085,
          "epsEffect": 0.4371272458964552,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 6.6810->6.7067(적정PER 16.99배 유지 가정 시 +0.44) + 적정PER 16.99->16.99배(EPS 6.7067 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-18",
          "prevFairPrice": 113.94706084658905,
          "newFairPrice": 114.09276992855452,
          "changePct": 0.12787436629158613,
          "epsEffect": 0.14570908196545992,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 6.7067->6.7153(적정PER 16.99배 유지 가정 시 +0.15) + 적정PER 16.99->16.99배(EPS 6.7153 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-19",
          "prevFairPrice": 114.09276992855452,
          "newFairPrice": 114.52649450764,
          "changePct": 0.38015080127958906,
          "epsEffect": 0.43372457908548767,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 6.7153->6.7408(적정PER 16.99배 유지 가정 시 +0.43) + 적정PER 16.99->16.99배(EPS 6.7408 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2026-11-27"
    },
    "TSM": {
      "ticker": "TSM",
      "asOf": "2026-11-19",
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
      "currentPrice": 361.07000732421875,
      "fairPrice": 535.3034137593768,
      "ratio": 0.6745146734418598,
      "bandAggressiveLe": 428.24273100750145,
      "bandDcaHigh": 481.7730723834391,
      "bandFairHigh": 588.8337551353145,
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
      "epsUsedForCandidates": 22.70856873972603,
      "ttmEps": 14.88639,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 16.015808988592337,
        "peTTM": 22.5446,
        "finnhubUpdated": "2026-11-18 23:01",
        "periods": "Q4'25~Q3'26",
        "endDates": [
          "2025-12-31",
          "2026-03-31",
          "2026-06-30",
          "2026-09-30"
        ],
        "secVerified": false,
        "quarterly": 14.88639,
        "checks": [
          "분기 연속 OK",
          "최신성 OK(승인 근거 2026-09-30)",
          "역산 주식수 일관(±4.2%)",
          "TWD491.30(원천값이 이미 ADR 1주 기준, ADR비율 미적용) x TWDUSD=X(0.0303) = $14.89(ADR 1주)"
        ],
        "gapPct": 7.586923280878288,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 372.4177708435523,
        "fairHistProxy": 345.25110407192875,
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
        "consensusUpdatedAtUtc": "2026-11-18T00:35:33.322636+00:00",
        "periodCompareMethod": null,
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.6555406538659556,
        "candSpread": 1.82928183219798,
        "fairAltExCappedGrowth": 453.8605923014645,
        "fairAltGapPct": -15.214328802042997,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": "WO8-B 분류 불가(이력 부족, 유효 4개년 <5년) - 필터 없음(원본 그대로) - 경기순환 여부 판단 안 함, NTM EPS 그대로 사용",
      "convertedFairPer": 23.57275,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 372.4177708435523,
          "per": 25.01733266719146,
          "eps": 14.88639,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "sector_per",
          "fairPrice": 535.3034137593768,
          "per": 23.57275,
          "eps": 22.70856873972603,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 681.2570621917808,
          "per": 30.0,
          "eps": 22.70856873972603,
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
          "date": "2026-11-17",
          "prevFairPrice": 533.4043445822191,
          "newFairPrice": 534.5437860885137,
          "changePct": 0.213616840182852,
          "epsEffect": 1.1394415062945908,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 22.6280->22.6763(적정PER 23.57배 유지 가정 시 +1.14) + 적정PER 23.57->23.57배(EPS 22.6763 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-18",
          "prevFairPrice": 534.5437860885137,
          "newFairPrice": 534.9235999239453,
          "changePct": 0.07105383044686872,
          "epsEffect": 0.3798138354315024,
          "perEffect": 1.6123960000958793e-13,
          "otherEffect": 0.0,
          "note": "EPS 22.6763->22.6925(적정PER 23.57배 유지 가정 시 +0.38) + 적정PER 23.57->23.57배(EPS 22.6925 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-19",
          "prevFairPrice": 534.9235999239453,
          "newFairPrice": 535.3034137593768,
          "changePct": 0.07100337982573454,
          "epsEffect": 0.3798138354315025,
          "perEffect": -8.067704278760612e-14,
          "otherEffect": 0.0,
          "note": "EPS 22.6925->22.7086(적정PER 23.57배 유지 가정 시 +0.38) + 적정PER 23.57->23.57배(EPS 22.7086 유지 가정 시 -0.00)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "INTC": {
      "ticker": "INTC",
      "asOf": "2026-11-19",
      "verdict": "적정",
      "action": "관망(모델 민감도 높음)",
      "actionRaw": "관망(적정가 근처)",
      "actionCapReason": "model_split",
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "a_kept_two_candidates",
      "candidateBadge": "후보 2개",
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": "median",
      "sectorFewPeers": true,
      "currentPrice": 53.90829849243164,
      "fairPrice": 49.79561932134328,
      "ratio": 1.0825911842676006,
      "bandAggressiveLe": 39.836495457074626,
      "bandDcaHigh": 44.81605738920896,
      "bandFairHigh": 54.77518125347761,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "EPS 품질 경고: EPS 일회성 정상화 적용; TTM EPS 미확보(peTTM 없음) - 과거PER 후보가 적정가에 못 들어감 / 사업 위험으로 신뢰도 1단계 하향(낮음→낮음): EPS 수정 방향 하향(하향)",
      "bizRiskBadge": true,
      "bizRiskDetail": [
        "EPS 수정 방향 하향(하향)"
      ],
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
      "epsUsedForCandidates": 2.037417698630137,
      "ttmEps": null,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": null,
        "peTTM": null,
        "finnhubUpdated": "2026-11-18 23:01",
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
        "fairHistProxy": 24.77895932476151,
        "proxyPer": 12.1619436904969,
        "trailingPer": 11.656726240621182,
        "modelSplitEligible": true,
        "modelSplitRatio": 1.5888896362554956,
        "actionBeforeModelSplit": "관망(적정가 근처)",
        "modelSplitMode": "on"
      },
      "earningsStatus": {
        "latestOfficialPeriodEnd": "2026-09-30",
        "latestOfficialSource": "8-K(실적) 2026-10-29",
        "valuationActualPeriodEnd": "2026-09-26",
        "valuationPeriods": "Q4'25~Q3'26",
        "earningsReleaseDate": "2026-10-29",
        "earningsReleaseAtUtc": "2026-10-30T04:59:00+00:00",
        "consensusUpdatedAtUtc": "2026-11-18T00:35:33.322636+00:00",
        "periodCompareMethod": "fallback_45d",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": null,
        "candSpread": 1.5888896362554956,
        "fairAltExCappedGrowth": 38.46870768378246,
        "fairAltGapPct": -22.746803417516503,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 24.440554999999996,
      "fairPriceBasis": "적정가 후보 2개 평균",
      "fairPriceCandidates": [
        {
          "candidate": "sector_per",
          "fairPrice": 38.46870768378246,
          "per": 18.88111,
          "eps": 2.037417698630137,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 61.12253095890411,
          "per": 30.0,
          "eps": 2.037417698630137,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": "최대/최소 2.57배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [
        "EPS 일회성 정상화 적용",
        "TTM EPS 미확보(peTTM 없음) - 과거PER 후보가 적정가에 못 들어감",
        "⚠ 사업 경고(현금흐름/EPS 하향): EPS 수정 방향 하향(하향)"
      ],
      "recentChanges": [
        {
          "date": "2026-11-17",
          "prevFairPrice": 50.51416494230082,
          "newFairPrice": 50.083037569726294,
          "changePct": -0.853478174026987,
          "epsEffect": -0.4311273725745282,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 2.0668->2.0492(적정PER 24.44배 유지 가정 시 -0.43) + 적정PER 24.44->24.44배(EPS 2.0492 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-18",
          "prevFairPrice": 50.083037569726294,
          "newFairPrice": 49.93932844553479,
          "changePct": -0.2869417095387414,
          "epsEffect": -0.14370912419150578,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 2.0492->2.0433(적정PER 24.44배 유지 가정 시 -0.14) + 적정PER 24.44->24.44배(EPS 2.0433 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-19",
          "prevFairPrice": 49.93932844553479,
          "newFairPrice": 49.79561932134328,
          "changePct": -0.2877674343343302,
          "epsEffect": -0.14370912419150578,
          "perEffect": -7.238361727353524e-15,
          "otherEffect": 0.0,
          "note": "EPS 2.0433->2.0374(적정PER 24.44배 유지 가정 시 -0.14) + 적정PER 24.44->24.44배(EPS 2.0374 유지 가정 시 -0.00)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "QCOM": {
      "ticker": "QCOM",
      "asOf": "2026-11-19",
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
      "currentPrice": 162.3699951171875,
      "fairPrice": 169.47580883517122,
      "ratio": 0.9580718111521468,
      "bandAggressiveLe": 135.58064706813698,
      "bandDcaHigh": 152.52822795165412,
      "bandFairHigh": 186.42338971868836,
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
      "epsUsedForCandidates": 9.949996849315069,
      "ttmEps": 12.7,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 12.635108991509217,
        "peTTM": 12.8507,
        "finnhubUpdated": "2026-11-18 23:01",
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
        "gapPct": -0.5109528227620674,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 213.01183860992714,
        "fairHistProxy": 132.56216035741173,
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
        "consensusUpdatedAtUtc": "2026-11-18T00:35:33.322636+00:00",
        "periodCompareMethod": "fallback_45d",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 1.2763823137164343,
        "candSpread": 1.5632151708562554,
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
          "fairPrice": 169.47580883517122,
          "per": 17.03275,
          "eps": 9.949996849315069,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 136.26520685136987,
          "per": 13.695,
          "eps": 9.949996849315069,
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
          "date": "2026-11-17",
          "prevFairPrice": 168.8423305303767,
          "newFairPrice": 169.23175892666438,
          "changePct": 0.2306461863351391,
          "epsEffect": 0.38942839628767834,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 9.9128->9.9357(적정PER 17.03배 유지 가정 시 +0.39) + 적정PER 17.03->17.03배(EPS 9.9357 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-18",
          "prevFairPrice": 169.23175892666438,
          "newFairPrice": 169.35378388091783,
          "changePct": 0.07210523310008632,
          "epsEffect": 0.12202495425344721,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 9.9357->9.9428(적정PER 17.03배 유지 가정 시 +0.12) + 적정PER 17.03->17.03배(EPS 9.9428 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-19",
          "prevFairPrice": 169.35378388091783,
          "newFairPrice": 169.47580883517122,
          "changePct": 0.07205327891533458,
          "epsEffect": 0.12202495425341695,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 9.9428->9.9500(적정PER 17.03배 유지 가정 시 +0.12) + 적정PER 17.03->17.03배(EPS 9.9500 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "ARM": {
      "ticker": "ARM",
      "asOf": "2026-11-19",
      "verdict": "고평가",
      "action": "신규 추격 금지 · 모델 점검 필요(적정가/현재가 비율 2.22배)",
      "actionRaw": "신규 추격 금지 · 모델 점검 필요(적정가/현재가 비율 2.22배)",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "a_kept_one_candidate",
      "candidateBadge": "후보 1개",
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": null,
      "sectorFewPeers": null,
      "currentPrice": 185.75999450683594,
      "fairPrice": 83.71522684931506,
      "ratio": 2.2189510976443803,
      "bandAggressiveLe": 66.97218147945205,
      "bandDcaHigh": 75.34370416438355,
      "bandFairHigh": 92.08674953424658,
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
      "epsUsedForCandidates": 2.7905075616438353,
      "ttmEps": 0.87,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 0.9334729380621187,
        "peTTM": 198.9988,
        "finnhubUpdated": "2026-11-18 23:01",
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
        "gapPct": 7.2957400071400835,
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
        "latestOfficialPeriodEnd": null,
        "latestOfficialSource": null,
        "valuationActualPeriodEnd": "2026-09-30",
        "valuationPeriods": "Q4'25~Q3'26",
        "earningsReleaseDate": null,
        "earningsReleaseAtUtc": null,
        "consensusUpdatedAtUtc": "2026-11-18T00:35:33.322636+00:00",
        "periodCompareMethod": null,
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.311771239024165,
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
          "fairPrice": 83.71522684931506,
          "per": 30.0,
          "eps": 2.7905075616438353,
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
          "date": "2026-11-17",
          "prevFairPrice": 83.13338136986302,
          "newFairPrice": 83.36213917808219,
          "changePct": 0.2751696183286721,
          "epsEffect": 0.22875780821917768,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 2.7711->2.7787(적정PER 30.00배 유지 가정 시 +0.23) + 적정PER 30.00->30.00배(EPS 2.7787 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-18",
          "prevFairPrice": 83.36213917808219,
          "newFairPrice": 83.42844410958905,
          "changePct": 0.07953842375040253,
          "epsEffect": 0.06630493150686423,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 2.7787->2.7809(적정PER 30.00배 유지 가정 시 +0.07) + 적정PER 30.00->30.00배(EPS 2.7809 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-19",
          "prevFairPrice": 83.42844410958905,
          "newFairPrice": 83.71522684931506,
          "changePct": 0.34374695918971976,
          "epsEffect": 0.28678273972600365,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 2.7809->2.7905(적정PER 30.00배 유지 가정 시 +0.29) + 적정PER 30.00->30.00배(EPS 2.7905 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "ANET": {
      "ticker": "ANET",
      "asOf": "2026-11-19",
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
      "currentPrice": 186.9499969482422,
      "fairPrice": 176.31351384434834,
      "ratio": 1.0603271006967956,
      "bandAggressiveLe": 141.05081107547866,
      "bandDcaHigh": 158.6821624599135,
      "bandFairHigh": 193.9448652287832,
      "modelCheckNeeded": false,
      "confidence": "높음",
      "confidenceNote": "적정가 후보 모두 중앙값 ±1% 안",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "고성장형",
      "stockTypeReason": "NTM PER 42.6배(기준 40 초과); 다음 회계연도 성장률 46.9%(기준 30% 초과)",
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
            "per": 36.958484995192826
          }
        ],
        "excluded": [],
        "note": "유효 비교군 2개 이하(최소 3개 기준 미달)"
      },
      "epsUsedForCandidates": 5.845972493150685,
      "ttmEps": 3.7199999999999998,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 3.7598672019355863,
        "peTTM": 49.7225,
        "finnhubUpdated": "2026-11-18 23:02",
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
        "gapPct": 1.0716989767630691,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 177.2478528941761,
        "fairHistProxy": 161.46998765703194,
        "proxyPer": 27.620723129678588,
        "trailingPer": 47.64727228338068,
        "modelSplitEligible": false,
        "modelSplitRatio": 1.010655074080745,
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
        "consensusUpdatedAtUtc": "2026-11-18T00:35:33.322636+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.636335529179869,
        "candSpread": 1.010655074080745,
        "fairAltExCappedGrowth": 177.2478528941761,
        "fairAltGapPct": 0.5299304797774074,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 30.159826111211174,
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
          "fairPrice": 175.37917479452057,
          "per": 30.0,
          "eps": 5.845972493150685,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": "최대/최소 1.59배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-11-17",
          "prevFairPrice": 175.9723932964031,
          "newFairPrice": 176.17706562517026,
          "changePct": 0.1163093397396721,
          "epsEffect": 0.4123332765168346,
          "perEffect": -0.2076609477496746,
          "otherEffect": 0.0,
          "note": "EPS 5.8232->5.8369(적정PER 30.22배 유지 가정 시 +0.41) + 적정PER 30.22->30.18배(EPS 5.8369 유지 가정 시 -0.21)"
        },
        {
          "date": "2026-11-18",
          "prevFairPrice": 176.17706562517026,
          "newFairPrice": 176.2452897347593,
          "changePct": 0.038724739424478134,
          "epsEffect": 0.1372826096827819,
          "perEffect": -0.0690585000937527,
          "otherEffect": 0.0,
          "note": "EPS 5.8369->5.8414(적정PER 30.18배 유지 가정 시 +0.14) + 적정PER 30.18->30.17배(EPS 5.8414 유지 가정 시 -0.07)"
        },
        {
          "date": "2026-11-19",
          "prevFairPrice": 176.2452897347593,
          "newFairPrice": 176.31351384434834,
          "changePct": 0.038709749174978256,
          "epsEffect": 0.13722883906681194,
          "perEffect": -0.06900472947778098,
          "otherEffect": 0.0,
          "note": "EPS 5.8414->5.8460(적정PER 30.17배 유지 가정 시 +0.14) + 적정PER 30.17->30.16배(EPS 5.8460 유지 가정 시 -0.07)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "ETN": {
      "ticker": "ETN",
      "asOf": "2026-11-19",
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
      "currentPrice": 336.92999267578125,
      "fairPrice": 388.1180247534675,
      "ratio": 0.8681122008950733,
      "bandAggressiveLe": 310.494419802774,
      "bandDcaHigh": 349.3062222781208,
      "bandFairHigh": 426.9298272288143,
      "modelCheckNeeded": false,
      "confidence": "보통",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±21%",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "기타",
      "stockTypeReason": "경기순환형·이익훼손형·고성장형 조건 모두 미해당",
      "candidates": {
        "historicalPer": 30.479426771830145,
        "historicalPerYearsUsed": 5,
        "historicalPerEpsBasis": "TTM EPS",
        "sectorPer": 24.017415912662727,
        "sectorPerValidPeers": 3,
        "sectorPerEpsBasis": "NTM EPS",
        "growthPerPeg": 25.252500750000003,
        "growthPerPegEpsBasis": "NTM EPS"
      },
      "sectorPeerDisplay": {
        "basis": "forwardPE",
        "medianPer": 24.017415912662727,
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
            "per": 24.017415912662727
          }
        ],
        "excluded": [],
        "note": "유효 비교군 3개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 16.159857753424657,
      "ttmEps": 10.01,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 10.133476675402152,
        "peTTM": 33.2492,
        "finnhubUpdated": "2026-11-18 23:03",
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
        "gapPct": 1.233533220800731,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 305.09906198601976,
        "fairHistProxy": 409.6439013197957,
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
        "consensusUpdatedAtUtc": "2026-11-18T00:35:33.322636+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.6194361455860368,
        "candSpread": 1.3375223685772863,
        "fairAltExCappedGrowth": null,
        "fairAltGapPct": null,
        "fairAltApplicable": false,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 24.017415912662727,
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
          "fairPrice": 388.1180247534675,
          "per": 24.017415912662727,
          "eps": 16.159857753424657,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 408.0768200382495,
          "per": 25.252500750000003,
          "eps": 16.159857753424657,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": false,
      "dispersionFlag": null,
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-11-17",
          "prevFairPrice": 316.1598250161401,
          "newFairPrice": 404.2108483934505,
          "changePct": 27.850161978301752,
          "epsEffect": 0.4188744474416096,
          "perEffect": 87.63214892986879,
          "otherEffect": 0.0,
          "note": "EPS 16.0955->16.1169(적정PER 19.64배 유지 가정 시 +0.42) + 적정PER 19.64->25.08배(EPS 16.1169 유지 가정 시 +87.63)"
        },
        {
          "date": "2026-11-18",
          "prevFairPrice": 404.2108483934505,
          "newFairPrice": 389.70740179686516,
          "changePct": -3.5880893979540014,
          "epsEffect": 0.1819722290788703,
          "perEffect": -14.685418825664186,
          "otherEffect": 0.0,
          "note": "EPS 16.1169->16.1241(적정PER 25.08배 유지 가정 시 +0.18) + 적정PER 25.08->24.17배(EPS 16.1241 유지 가정 시 -14.69)"
        },
        {
          "date": "2026-11-19",
          "prevFairPrice": 389.70740179686516,
          "newFairPrice": 388.1180247534675,
          "changePct": -0.4078385568427297,
          "epsEffect": 0.8638471938477731,
          "perEffect": -2.4532242372454465,
          "otherEffect": 0.0,
          "note": "EPS 16.1241->16.1599(적정PER 24.17배 유지 가정 시 +0.86) + 적정PER 24.17->24.02배(EPS 16.1599 유지 가정 시 -2.45)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "HUBB": {
      "ticker": "HUBB",
      "asOf": "2026-11-19",
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
      "currentPrice": 425.6400146484375,
      "fairPrice": 458.0723307193263,
      "ratio": 0.9291982643440627,
      "bandAggressiveLe": 366.4578645754611,
      "bandDcaHigh": 412.2650976473937,
      "bandFairHigh": 503.879563791259,
      "modelCheckNeeded": false,
      "confidence": "보통",
      "confidenceNote": "적정가 후보 모두 중앙값 ±19% 안 / 사업 위험으로 신뢰도 1단계 하향(높음→보통): EPS 하향 수정이 상향보다 많음(방향은 혼조)",
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
        "sectorPer": 24.017415912662727,
        "sectorPerValidPeers": 3,
        "sectorPerEpsBasis": "NTM EPS",
        "growthPerPeg": 18.817499624999996,
        "growthPerPegEpsBasis": "NTM EPS"
      },
      "sectorPeerDisplay": {
        "basis": "forwardPE",
        "medianPer": 24.017415912662727,
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
            "per": 24.017415912662727
          }
        ],
        "excluded": [],
        "note": "유효 비교군 3개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 22.780210657534248,
      "ttmEps": 17.060000000000002,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 17.304057478887763,
        "peTTM": 24.5977,
        "finnhubUpdated": "2026-11-18 23:03",
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
        "gapPct": 1.4305831118860635,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 458.0723307193263,
        "fairHistProxy": 490.61937857850074,
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
        "consensusUpdatedAtUtc": "2026-11-18T00:35:33.322636+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.7488956206977672,
        "candSpread": 1.2763340715444669,
        "fairAltExCappedGrowth": null,
        "fairAltGapPct": null,
        "fairAltApplicable": false,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 20.108344808823137,
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
          "fairPrice": 547.121793940072,
          "per": 24.017415912662727,
          "eps": 22.780210657534248,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 428.6666055055716,
          "per": 18.817499624999996,
          "eps": 22.780210657534248,
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
      "asOf": "2026-11-19",
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
      "currentPrice": 193.8249969482422,
      "fairPrice": 254.17990340515314,
      "ratio": 0.7625504390852351,
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
            "per": 24.017415912662727
          }
        ],
        "excluded": [],
        "note": "유효 비교군 3개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 9.565121671232877,
      "ttmEps": 5.35,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 5.601020564718184,
        "peTTM": 34.6053,
        "finnhubUpdated": "2026-11-18 23:03",
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
        "gapPct": 4.6919731723025215,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 254.17990340515314,
        "fairHistProxy": 338.7973378252594,
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
        "consensusUpdatedAtUtc": "2026-11-18T00:35:33.322636+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.5593237790262654,
        "candSpread": 1.272702898538428,
        "fairAltExCappedGrowth": 239.82390181242698,
        "fairAltGapPct": -5.647968781325419,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 26.57361946263577,
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
          "fairPrice": 225.46790021970082,
          "per": 23.57188,
          "eps": 9.565121671232877,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 286.9536501369863,
          "per": 30.0,
          "eps": 9.565121671232877,
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
      "asOf": "2026-11-19",
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
      "currentPrice": 129.4499969482422,
      "fairPrice": 210.27112901264,
      "ratio": 0.6156337180291669,
      "bandAggressiveLe": 168.216903210112,
      "bandDcaHigh": 189.244016111376,
      "bandFairHigh": 231.298241913904,
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
      "epsUsedForCandidates": 7.8500559999999995,
      "ttmEps": 2.39,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 2.474589756177723,
        "peTTM": 52.3117,
        "finnhubUpdated": "2026-11-18 23:03",
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
        "gapPct": 3.5393203421641317,
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
        "modelSplitRatio": 1.272702898538428,
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
        "consensusUpdatedAtUtc": "2026-11-18T00:35:33.322636+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.30445642680765594,
        "candSpread": 1.272702898538428,
        "fairAltExCappedGrowth": 185.04057802527998,
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
          "fairPrice": 185.04057802527998,
          "per": 23.57188,
          "eps": 7.8500559999999995,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 235.50168,
          "per": 30.0,
          "eps": 7.8500559999999995,
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
          "date": "2026-11-17",
          "prevFairPrice": 208.68245491123997,
          "newFairPrice": 209.63565937208,
          "changePct": 0.45677268903390006,
          "epsEffect": 0.9532044608399852,
          "perEffect": 5.5609433502468157e-14,
          "otherEffect": 0.0,
          "note": "EPS 7.7907->7.8263(적정PER 26.79배 유지 가정 시 +0.95) + 적정PER 26.79->26.79배(EPS 7.8263 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-18",
          "prevFairPrice": 209.63565937208,
          "newFairPrice": 209.95339419236,
          "changePct": 0.15156525432348558,
          "epsEffect": 0.3177348202800189,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 7.8263->7.8382(적정PER 26.79배 유지 가정 시 +0.32) + 적정PER 26.79->26.79배(EPS 7.8382 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-19",
          "prevFairPrice": 209.95339419236,
          "newFairPrice": 210.27112901264,
          "changePct": 0.15133588170947637,
          "epsEffect": 0.31773482027999517,
          "perEffect": -2.7889001330549943e-14,
          "otherEffect": 0.0,
          "note": "EPS 7.8382->7.8501(적정PER 26.79배 유지 가정 시 +0.32) + 적정PER 26.79->26.79배(EPS 7.8501 유지 가정 시 -0.00)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "PWR": {
      "ticker": "PWR",
      "asOf": "2026-11-19",
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
      "currentPrice": 607.5999755859375,
      "fairPrice": 476.4864067382812,
      "ratio": 1.2751674906009918,
      "bandAggressiveLe": 381.18912539062495,
      "bandDcaHigh": 428.8377660644531,
      "bandFairHigh": 524.1350474121093,
      "modelCheckNeeded": false,
      "confidence": "보통",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±34%",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "고성장형",
      "stockTypeReason": "다음 회계연도 성장률 69.1%(기준 30% 초과)",
      "candidates": {
        "historicalPer": 43.16000061035156,
        "historicalPerYearsUsed": 5,
        "historicalPerEpsBasis": "TTM EPS",
        "sectorPer": 19.194119502871537,
        "sectorPerValidPeers": 3,
        "sectorPerEpsBasis": "NTM EPS",
        "growthPerPeg": 30.0,
        "growthPerPegEpsBasis": "NTM EPS"
      },
      "sectorPeerDisplay": {
        "basis": "forwardPE",
        "medianPer": 19.194119502871537,
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
            "per": 19.194119502871537
          }
        ],
        "excluded": [],
        "note": "유효 비교군 3개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 21.31966394520548,
      "ttmEps": 11.04,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 11.578559760995677,
        "peTTM": 52.4763,
        "finnhubUpdated": "2026-11-18 23:03",
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
        "gapPct": 4.878258704671001,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 476.4864067382812,
        "fairHistProxy": 736.2990198892174,
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
        "consensusUpdatedAtUtc": "2026-11-18T00:35:33.322636+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.5178318020572156,
        "candSpread": 1.5629787026965134,
        "fairAltExCappedGrowth": 442.8492921318084,
        "fairAltGapPct": -7.0594069695987365,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 22.349620892848872,
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
          "fairPrice": 409.2121775253356,
          "per": 19.194119502871537,
          "eps": 21.31966394520548,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 639.5899183561644,
          "per": 30.0,
          "eps": 21.31966394520548,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": "최대/최소 2.25배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
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
      "asOf": "2026-11-19",
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
      "currentPrice": 650.27001953125,
      "fairPrice": 783.1277668501026,
      "ratio": 0.8303498446323347,
      "bandAggressiveLe": 626.5022134800821,
      "bandDcaHigh": 704.8149901650924,
      "bandFairHigh": 861.440543535113,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±55% (±40% 밖)",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "고성장형",
      "stockTypeReason": "다음 회계연도 성장률 35.0%(기준 30% 초과)",
      "candidates": {
        "historicalPer": 18.28518526053723,
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
            "ticker": "PWR",
            "per": 30.49887
          },
          {
            "ticker": "FIX",
            "per": 19.40473
          },
          {
            "ticker": "MTZ",
            "per": 19.194119502871537
          }
        ],
        "excluded": [],
        "note": "유효 비교군 3개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 40.35757090410959,
      "ttmEps": 34.62,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 36.05820258131907,
        "peTTM": 18.0339,
        "finnhubUpdated": "2026-11-18 23:03",
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
        "gapPct": 4.1542535566697625,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 633.0331137197988,
        "fairHistProxy": 522.8191781786692,
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
        "consensusUpdatedAtUtc": "2026-11-18T00:35:33.322636+00:00",
        "periodCompareMethod": "fallback_45d",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.8578316093963588,
        "candSpread": 1.9125810338875815,
        "fairAltExCappedGrowth": 708.0804402849508,
        "fairAltGapPct": -9.583024602359236,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 19.40473,
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
          "fairPrice": 783.1277668501026,
          "per": 19.40473,
          "eps": 40.35757090410959,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 1210.7271271232878,
          "per": 30.0,
          "eps": 40.35757090410959,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": "최대/최소 1.64배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-11-17",
          "prevFairPrice": 789.7391457553425,
          "newFairPrice": 791.54721507809,
          "changePct": 0.2289451311189733,
          "epsEffect": 0.9695659169443901,
          "perEffect": 0.8385034058030885,
          "otherEffect": 0.0,
          "note": "EPS 40.1346->40.1839(적정PER 19.68배 유지 가정 시 +0.97) + 적정PER 19.68->19.70배(EPS 40.1839 유지 가정 시 +0.84)"
        },
        {
          "date": "2026-11-18",
          "prevFairPrice": 791.54721507809,
          "newFairPrice": 780.7891475696143,
          "changePct": -1.3591188628481605,
          "epsEffect": 0.3235313628828223,
          "perEffect": -11.08159887135846,
          "otherEffect": 0.0,
          "note": "EPS 40.1839->40.2003(적정PER 19.70배 유지 가정 시 +0.32) + 적정PER 19.70->19.42배(EPS 40.2003 유지 가정 시 -11.08)"
        },
        {
          "date": "2026-11-19",
          "prevFairPrice": 780.7891475696143,
          "newFairPrice": 783.1277668501026,
          "changePct": 0.2995199520597544,
          "epsEffect": 3.0548240376333116,
          "perEffect": -0.7162047571450789,
          "otherEffect": 0.0,
          "note": "EPS 40.2003->40.3576(적정PER 19.42배 유지 가정 시 +3.05) + 적정PER 19.42->19.40배(EPS 40.3576 유지 가정 시 -0.72)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "FIX": {
      "ticker": "FIX",
      "asOf": "2026-11-19",
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
      "currentPrice": 1148.2550048828125,
      "fairPrice": 1255.2706913584138,
      "ratio": 0.9147469249363319,
      "bandAggressiveLe": 1004.2165530867311,
      "bandDcaHigh": 1129.7436222225724,
      "bandFairHigh": 1380.7977604942553,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±56% (±40% 밖)",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "고성장형",
      "stockTypeReason": "다음 회계연도 성장률 76.0%(기준 30% 초과)",
      "candidates": {
        "historicalPer": 25.175573140306934,
        "historicalPerYearsUsed": 5,
        "historicalPerEpsBasis": "TTM EPS",
        "sectorPer": 19.194119502871537,
        "sectorPerValidPeers": 3,
        "sectorPerEpsBasis": "NTM EPS",
        "growthPerPeg": 30.0,
        "growthPerPegEpsBasis": "NTM EPS"
      },
      "sectorPeerDisplay": {
        "basis": "forwardPE",
        "medianPer": 19.194119502871537,
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
            "per": 19.194119502871537
          }
        ],
        "excluded": [],
        "note": "유효 비교군 3개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 65.39871189041096,
      "ttmEps": 46.32,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 50.408269197765165,
        "peTTM": 22.7791,
        "finnhubUpdated": "2026-11-18 23:03",
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
        "gapPct": 8.826142482221865,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 1166.1325478590172,
        "fairHistProxy": 921.2707503254936,
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
        "consensusUpdatedAtUtc": "2026-11-18T00:35:33.322636+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.708270830740806,
        "candSpread": 1.6824514162771878,
        "fairAltExCappedGrowth": 1210.7016196087156,
        "fairAltGapPct": -3.5505546378579833,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 19.194119502871537,
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
          "fairPrice": 1255.2706913584138,
          "per": 19.194119502871537,
          "eps": 65.39871189041096,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 1961.961356712329,
          "per": 30.0,
          "eps": 65.39871189041096,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": "최대/최소 1.56배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-11-17",
          "prevFairPrice": 1279.8434842844865,
          "newFairPrice": 1283.8569674944677,
          "changePct": 0.31359172111775235,
          "epsEffect": 2.653465235940442,
          "perEffect": 1.3600179740407936,
          "otherEffect": 0.0,
          "note": "EPS 65.0417->65.1766(적정PER 19.68배 유지 가정 시 +2.65) + 적정PER 19.68->19.70배(EPS 65.1766 유지 가정 시 +1.36)"
        },
        {
          "date": "2026-11-18",
          "prevFairPrice": 1283.8569674944677,
          "newFairPrice": 1266.7634497870524,
          "changePct": -1.33141916429946,
          "epsEffect": 0.885426363636542,
          "perEffect": -17.978944071051853,
          "otherEffect": 0.0,
          "note": "EPS 65.1766->65.2215(적정PER 19.70배 유지 가정 시 +0.89) + 적정PER 19.70->19.42배(EPS 65.2215 유지 가정 시 -17.98)"
        },
        {
          "date": "2026-11-19",
          "prevFairPrice": 1266.7634497870524,
          "newFairPrice": 1255.2706913584138,
          "changePct": -0.9072537126462369,
          "epsEffect": 3.4414936169580015,
          "perEffect": -14.934252045596596,
          "otherEffect": 0.0,
          "note": "EPS 65.2215->65.3987(적정PER 19.42배 유지 가정 시 +3.44) + 적정PER 19.42->19.19배(EPS 65.3987 유지 가정 시 -14.93)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "COHR": {
      "ticker": "COHR",
      "asOf": "2026-11-19",
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
      "currentPrice": 210.30999755859375,
      "fairPrice": 270.6362831986574,
      "ratio": 0.7770946122705142,
      "bandAggressiveLe": 216.50902655892594,
      "bandDcaHigh": 243.57265487879167,
      "bandFairHigh": 297.69991151852315,
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
      "epsUsedForCandidates": 12.50004210958904,
      "ttmEps": 5.056403934300979,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 5.056403934300979,
        "peTTM": 41.5928,
        "finnhubUpdated": "2026-11-18 23:02",
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
        "fairHistTrailing": 166.27130310964358,
        "fairHistProxy": 270.66231678454074,
        "proxyPer": 21.652912399143847,
        "trailingPer": 32.88331099928821,
        "modelSplitEligible": true,
        "modelSplitRatio": 2.2553576971751146,
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
        "consensusUpdatedAtUtc": "2026-11-18T00:35:33.322636+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.4045109520408821,
        "candSpread": 2.2553576971751146,
        "fairAltExCappedGrowth": 166.27130310964358,
        "fairAltGapPct": -38.562819018766206,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 21.65082971928924,
      "fairPriceBasis": "적정가 후보 2개 평균",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 166.27130310964358,
          "per": 32.88331099928821,
          "eps": 5.056403934300979,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 375.00126328767124,
          "per": 30.0,
          "eps": 12.50004210958904,
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
          "date": "2026-11-17",
          "prevFairPrice": 261.20040527655635,
          "newFairPrice": 262.0478423255218,
          "changePct": 0.32443940815030065,
          "epsEffect": 0.9300054862028074,
          "perEffect": -0.0825684372373625,
          "otherEffect": 0.0,
          "note": "EPS 12.4263->12.4705(적정PER 21.02배 유지 가정 시 +0.93) + 적정PER 21.02->21.01배(EPS 12.4705 유지 가정 시 -0.08)"
        },
        {
          "date": "2026-11-18",
          "prevFairPrice": 262.0478423255218,
          "newFairPrice": 270.63248010239283,
          "changePct": 3.275981095927896,
          "epsEffect": 0.30990418128289243,
          "perEffect": 8.274733595588124,
          "otherEffect": 0.0,
          "note": "EPS 12.4705->12.4853(적정PER 21.01배 유지 가정 시 +0.31) + 적정PER 21.01->21.68배(EPS 12.4853 유지 가정 시 +8.27)"
        },
        {
          "date": "2026-11-19",
          "prevFairPrice": 270.63248010239283,
          "newFairPrice": 270.6362831986574,
          "changePct": 0.0014052623185226002,
          "epsEffect": 0.31967852404356356,
          "perEffect": -0.3158754277790134,
          "otherEffect": 0.0,
          "note": "EPS 12.4853->12.5000(적정PER 21.68배 유지 가정 시 +0.32) + 적정PER 21.68->21.65배(EPS 12.5000 유지 가정 시 -0.32)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "LITE": {
      "ticker": "LITE",
      "asOf": "2026-11-19",
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
      "currentPrice": 547.5,
      "fairPrice": 925.5365153424657,
      "ratio": 0.5915487837856023,
      "bandAggressiveLe": 740.4292122739726,
      "bandDcaHigh": 832.9828638082191,
      "bandFairHigh": 1018.0901668767124,
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
            "per": 20.263819827099244
          },
          {
            "ticker": "AAOI",
            "per": 17.8492
          }
        ],
        "excluded": [],
        "note": "유효 비교군 2개 이하(최소 3개 기준 미달)"
      },
      "epsUsedForCandidates": 30.85121717808219,
      "ttmEps": null,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": null,
        "peTTM": null,
        "finnhubUpdated": "2026-11-18 23:02",
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
        "fairHistProxy": 941.5791455850558,
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
        "consensusUpdatedAtUtc": "2026-11-18T00:35:33.322636+00:00",
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
          "fairPrice": 925.5365153424657,
          "per": 30.0,
          "eps": 30.85121717808219,
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
          "date": "2026-11-17",
          "prevFairPrice": 919.292134520548,
          "newFairPrice": 923.0387630136986,
          "changePct": 0.4075558086989043,
          "epsEffect": 3.7466284931506166,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 30.6431->30.7680(적정PER 30.00배 유지 가정 시 +3.75) + 적정PER 30.00->30.00배(EPS 30.7680 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-18",
          "prevFairPrice": 923.0387630136986,
          "newFairPrice": 924.2876391780821,
          "changePct": 0.1353005111406152,
          "epsEffect": 1.2488761643835744,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 30.7680->30.8096(적정PER 30.00배 유지 가정 시 +1.25) + 적정PER 30.00->30.00배(EPS 30.8096 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-19",
          "prevFairPrice": 924.2876391780821,
          "newFairPrice": 925.5365153424657,
          "changePct": 0.1351176962070057,
          "epsEffect": 1.2488761643835744,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 30.8096->30.8512(적정PER 30.00배 유지 가정 시 +1.25) + 적정PER 30.00->30.00배(EPS 30.8512 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "CEG": {
      "ticker": "CEG",
      "asOf": "2026-11-19",
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
      "currentPrice": 265.239990234375,
      "fairPrice": 284.7285249198163,
      "ratio": 0.9315539786857338,
      "bandAggressiveLe": 227.78281993585307,
      "bandDcaHigh": 256.2556724278347,
      "bandFairHigh": 313.201377411798,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±44% (±40% 밖)",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "고성장형",
      "stockTypeReason": "다음 회계연도 성장률 33.3%(기준 30% 초과)",
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
      "epsUsedForCandidates": 13.293434876712329,
      "ttmEps": 12.203695074829533,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 12.203695074829533,
        "peTTM": 21.7344,
        "finnhubUpdated": "2026-11-18 23:02",
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
        "fairHistTrailing": 284.7285249198163,
        "fairHistProxy": 228.74790589837662,
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
        "consensusUpdatedAtUtc": "2026-11-18T00:35:33.322636+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.9180242118015848,
        "candSpread": 2.5215593322910888,
        "fairAltExCappedGrowth": 221.44291851100678,
        "fairAltGapPct": -22.226647796047715,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 21.418732446540865,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 284.7285249198163,
          "per": 23.331337203522644,
          "eps": 12.203695074829533,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "sector_per",
          "fairPrice": 158.15731210219727,
          "per": 11.8974,
          "eps": 13.293434876712329,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 398.8030463013699,
          "per": 30.0,
          "eps": 13.293434876712329,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": "최대/최소 2.52배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-11-17",
          "prevFairPrice": 285.52515130167484,
          "newFairPrice": 285.3230626542393,
          "changePct": -0.07077787946673655,
          "epsEffect": 0.8896955985641463,
          "perEffect": -1.0917842459996294,
          "otherEffect": 0.0,
          "note": "EPS 13.2834->13.3248(적정PER 21.49배 유지 가정 시 +0.89) + 적정PER 21.49->21.41배(EPS 13.3248 유지 가정 시 -1.09)"
        },
        {
          "date": "2026-11-18",
          "prevFairPrice": 285.3230626542393,
          "newFairPrice": 277.6674584585118,
          "changePct": -2.6831354340972893,
          "epsEffect": 0.018013849740888054,
          "perEffect": -7.6736180454684035,
          "otherEffect": 0.0,
          "note": "EPS 13.3248->13.3256(적정PER 21.41배 유지 가정 시 +0.02) + 적정PER 21.41->20.84배(EPS 13.3256 유지 가정 시 -7.67)"
        },
        {
          "date": "2026-11-19",
          "prevFairPrice": 277.6674584585118,
          "newFairPrice": 284.7285249198163,
          "changePct": 2.542993874941074,
          "epsEffect": -0.6711018109751523,
          "perEffect": 7.7321682722796465,
          "otherEffect": 0.0,
          "note": "EPS 13.3256->13.2934(적정PER 20.84배 유지 가정 시 -0.67) + 적정PER 20.84->21.42배(EPS 13.2934 유지 가정 시 +7.73)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "VST": {
      "ticker": "VST",
      "asOf": "2026-11-19",
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
      "currentPrice": 127.06500244140625,
      "fairPrice": 120.50601874527123,
      "ratio": 1.0544286813590578,
      "bandAggressiveLe": 96.404814996217,
      "bandDcaHigh": 108.45541687074412,
      "bandFairHigh": 132.55662061979837,
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
      "epsUsedForCandidates": 10.128769205479452,
      "ttmEps": 7.749661655835269,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 7.749661655835269,
        "peTTM": 16.3962,
        "finnhubUpdated": "2026-11-18 23:03",
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
        "fairHistTrailing": 117.19872843939758,
        "fairHistProxy": 124.649204801782,
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
        "consensusUpdatedAtUtc": "2026-11-18T00:35:33.322636+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.7651138552592218,
        "candSpread": 2.5927164928372792,
        "fairAltExCappedGrowth": 118.8523735923344,
        "fairAltGapPct": -1.372251087667542,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 11.8974,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 117.19872843939758,
          "per": 15.123076805701622,
          "eps": 7.749661655835269,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "sector_per",
          "fairPrice": 120.50601874527123,
          "per": 11.8974,
          "eps": 10.128769205479452,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 303.8630761643836,
          "per": 30.0,
          "eps": 10.128769205479452,
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
          "date": "2026-11-17",
          "prevFairPrice": 127.087219732537,
          "newFairPrice": 119.40368812818082,
          "changePct": -6.045872764017223,
          "epsEffect": -7.683531604356176,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 10.6819->10.0361(적정PER 11.90배 유지 가정 시 -7.68) + 적정PER 11.90->11.90배(EPS 10.0361 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-18",
          "prevFairPrice": 119.40368812818082,
          "newFairPrice": 119.72110554488218,
          "changePct": 0.26583552122829757,
          "epsEffect": 0.31741741670136386,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 10.0361->10.0628(적정PER 11.90배 유지 가정 시 +0.32) + 적정PER 11.90->11.90배(EPS 10.0628 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-19",
          "prevFairPrice": 119.72110554488218,
          "newFairPrice": 120.50601874527123,
          "changePct": 0.655618069025265,
          "epsEffect": 0.7849132003890511,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 10.0628->10.1288(적정PER 11.90배 유지 가정 시 +0.78) + 적정PER 11.90->11.90배(EPS 10.1288 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "GEV": {
      "ticker": "GEV",
      "asOf": "2026-11-19",
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
      "currentPrice": 789.2000122070312,
      "fairPrice": 778.6677,
      "ratio": 1.0135260679324842,
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
        "finnhub": 39.63498908717143,
        "peTTM": 19.9117,
        "finnhubUpdated": "2026-11-18 23:02",
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
        "gapPct": 4.001545754844993,
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
        "consensusUpdatedAtUtc": "2026-11-18T00:35:33.322636+00:00",
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
      "asOf": "2026-11-19",
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
      "currentPrice": 171.75,
      "fairPrice": 152.6374117808219,
      "ratio": 1.125215620444499,
      "bandAggressiveLe": 122.10992942465754,
      "bandDcaHigh": 137.3736706027397,
      "bandFairHigh": 167.9011529589041,
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
      "epsUsedForCandidates": 5.087913726027397,
      "ttmEps": 1.6300000000000001,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 1.7714257424517152,
        "peTTM": 96.9558,
        "finnhubUpdated": "2026-11-18 23:03",
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
        "gapPct": 8.676425917283126,
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
        "consensusUpdatedAtUtc": "2026-11-18T00:35:33.322636+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.3203670674802679,
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
          "fairPrice": 152.6374117808219,
          "per": 30.0,
          "eps": 5.087913726027397,
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
          "date": "2026-11-17",
          "prevFairPrice": 151.79456794520544,
          "newFairPrice": 152.30027424657533,
          "changePct": 0.33315177757377507,
          "epsEffect": 0.5057063013698747,
          "perEffect": 1.803597558669586e-14,
          "otherEffect": 0.0,
          "note": "EPS 5.0598->5.0767(적정PER 30.00배 유지 가정 시 +0.51) + 적정PER 30.00->30.00배(EPS 5.0767 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-18",
          "prevFairPrice": 152.30027424657533,
          "newFairPrice": 152.46884301369863,
          "changePct": 0.11068185396067633,
          "epsEffect": 0.1685687671233005,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 5.0767->5.0823(적정PER 30.00배 유지 가정 시 +0.17) + 적정PER 30.00->30.00배(EPS 5.0823 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-19",
          "prevFairPrice": 152.46884301369863,
          "newFairPrice": 152.6374117808219,
          "changePct": 0.1105594846732919,
          "epsEffect": 0.16856876712327384,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 5.0823->5.0879(적정PER 30.00배 유지 가정 시 +0.17) + 적정PER 30.00->30.00배(EPS 5.0879 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "AAPL": {
      "ticker": "AAPL",
      "asOf": "2026-11-19",
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
      "currentPrice": 352.2049865722656,
      "fairPrice": 193.63293222236982,
      "ratio": 1.818931224817637,
      "bandAggressiveLe": 154.90634577789587,
      "bandDcaHigh": 174.26963900013283,
      "bandFairHigh": 212.9962254446068,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±61% (±40% 밖) / 사업 위험으로 신뢰도 1단계 하향(낮음→낮음): EPS 수정 방향 하향(하향)",
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
      "epsUsedForCandidates": 9.589515342465752,
      "ttmEps": 9.102950445507533,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 9.102950445507533,
        "peTTM": 38.6913,
        "finnhubUpdated": "2026-11-19 00:00",
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
        "fairHistTrailing": 311.72115039213867,
        "fairHistProxy": 270.0363464089299,
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
        "consensusUpdatedAtUtc": "2026-11-18T00:35:33.322636+00:00",
        "periodCompareMethod": "fallback_45d",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.9492607415931086,
        "candSpread": 2.4923484303245607,
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
          "fairPrice": 311.72115039213867,
          "per": 34.243968728400425,
          "eps": 9.102950445507533,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "sector_per",
          "fairPrice": 193.63293222236982,
          "per": 20.192149999999998,
          "eps": 9.589515342465752,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 125.07125673096417,
          "per": 13.042500299999999,
          "eps": 9.589515342465752,
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
          "date": "2026-11-17",
          "prevFairPrice": 193.19543195097262,
          "newFairPrice": 193.50364160931505,
          "changePct": 0.15953258067750234,
          "epsEffect": 0.3082096583424465,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 9.5678->9.5831(적정PER 20.19배 유지 가정 시 +0.31) + 적정PER 20.19->20.19배(EPS 9.5831 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-18",
          "prevFairPrice": 193.50364160931505,
          "newFairPrice": 193.5682869158424,
          "changePct": 0.03340779842163001,
          "epsEffect": 0.06464530652736393,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 9.5831->9.5863(적정PER 20.19배 유지 가정 시 +0.06) + 적정PER 20.19->20.19배(EPS 9.5863 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-19",
          "prevFairPrice": 193.5682869158424,
          "newFairPrice": 193.63293222236982,
          "changePct": 0.033396641339041244,
          "epsEffect": 0.06464530652739979,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 9.5863->9.5895(적정PER 20.19배 유지 가정 시 +0.06) + 적정PER 20.19->20.19배(EPS 9.5895 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "MSFT": {
      "ticker": "MSFT",
      "asOf": "2026-11-19",
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
      "currentPrice": 502.8299865722656,
      "fairPrice": 595.9999174720787,
      "ratio": 0.843674590937879,
      "bandAggressiveLe": 476.79993397766293,
      "bandDcaHigh": 536.3999257248709,
      "bandFairHigh": 655.5999092192866,
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
      "epsUsedForCandidates": 21.641246684931506,
      "ttmEps": 19.16,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 18.644324964859162,
        "peTTM": 26.9696,
        "finnhubUpdated": "2026-11-18 23:00",
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
        "gapPct": -2.6914145884177287,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 674.0440665000726,
        "fairHistProxy": 607.5247248559853,
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
        "consensusUpdatedAtUtc": "2026-11-18T00:35:33.322636+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.8853464072077158,
        "candSpread": 1.5424938839957272,
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
          "fairPrice": 436.9832992491397,
          "per": 20.192149999999998,
          "eps": 21.641246684931506,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 595.9999174720787,
          "per": 27.53999925,
          "eps": 21.641246684931506,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": false,
      "dispersionFlag": "최대/최소 1.74배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-11-17",
          "prevFairPrice": 594.4039896059518,
          "newFairPrice": 595.3506382223634,
          "changePct": 0.15926013838486675,
          "epsEffect": 0.9466486164115767,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 21.5833->21.6177(적정PER 27.54배 유지 가정 시 +0.95) + 적정PER 27.54->27.54배(EPS 21.6177 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-18",
          "prevFairPrice": 595.3506382223634,
          "newFairPrice": 595.6661877611673,
          "changePct": 0.05300230125663347,
          "epsEffect": 0.3155495388038915,
          "perEffect": 7.684210133949246e-14,
          "otherEffect": 0.0,
          "note": "EPS 21.6177->21.6291(적정PER 27.54배 유지 가정 시 +0.32) + 적정PER 27.54->27.54배(EPS 21.6291 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-19",
          "prevFairPrice": 595.6661877611673,
          "newFairPrice": 595.9999174720787,
          "changePct": 0.056026297575443335,
          "epsEffect": 0.33372971091142867,
          "perEffect": -7.688515312385216e-14,
          "otherEffect": 0.0,
          "note": "EPS 21.6291->21.6412(적정PER 27.54배 유지 가정 시 +0.33) + 적정PER 27.54->27.54배(EPS 21.6412 유지 가정 시 -0.00)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "GOOGL": {
      "ticker": "GOOGL",
      "asOf": "2026-11-19",
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
      "currentPrice": 281.4549865722656,
      "fairPrice": 345.0666984325,
      "ratio": 0.8156538659070929,
      "bandAggressiveLe": 276.053358746,
      "bandDcaHigh": 310.56002858925,
      "bandFairHigh": 379.57336827575006,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "EPS 품질 경고: EPS 일회성 정상화 적용; 다음회계연도 대안 기준 사용; 과거 PER 중 일회성 정상화 적용된 연도 있음 / 사업 위험으로 신뢰도 1단계 하향(낮음→낮음): EPS 하향 수정이 상향보다 많음(방향은 혼조)",
      "bizRiskBadge": true,
      "bizRiskDetail": [
        "EPS 하향 수정이 상향보다 많음(방향은 혼조)"
      ],
      "stockType": "고성장형",
      "stockTypeReason": "다음 회계연도 성장률 80.9%(기준 30% 초과)",
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
      "epsUsedForCandidates": 14.91545,
      "ttmEps": 10.950000000000001,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 19.12188236784195,
        "peTTM": 14.719,
        "finnhubUpdated": "2026-11-18 23:00",
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
        "gapPct": -0.1989438004073696,
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
        "fairHistProxy": 259.14667250182504,
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
        "consensusUpdatedAtUtc": "2026-11-18T00:35:33.322636+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.7341380917102737,
        "candSpread": 1.696704316662909,
        "fairAltExCappedGrowth": 304.3958946243016,
        "fairAltGapPct": -11.786360142241946,
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
          "fairPrice": 345.0666984325,
          "per": 23.13485,
          "eps": 14.91545,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 447.4635,
          "per": 30.0,
          "eps": 14.91545,
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
          "date": "2026-11-13",
          "prevFairPrice": 345.950218354,
          "newFairPrice": 346.3132041505,
          "changePct": 0.10492428599323447,
          "epsEffect": 0.3629857964999842,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 14.9536->14.9693(적정PER 23.13배 유지 가정 시 +0.36) + 적정PER 23.13->23.13배(EPS 14.9693 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-18",
          "prevFairPrice": 346.3132041505,
          "newFairPrice": 345.440788957,
          "changePct": -0.25191508237175314,
          "epsEffect": -0.8724151934999722,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 14.9693->14.9316(적정PER 23.13배 유지 가정 시 -0.87) + 적정PER 23.13->23.13배(EPS 14.9316 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-19",
          "prevFairPrice": 345.440788957,
          "newFairPrice": 345.0666984325,
          "changePct": -0.10829367476536106,
          "epsEffect": -0.37409052450001584,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 14.9316->14.9154(적정PER 23.13배 유지 가정 시 -0.37) + 적정PER 23.13->23.13배(EPS 14.9154 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "META": {
      "ticker": "META",
      "asOf": "2026-11-19",
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
      "currentPrice": 611.7949829101562,
      "fairPrice": 771.4360804258451,
      "ratio": 0.7930598508854234,
      "bandAggressiveLe": 617.1488643406761,
      "bandDcaHigh": 694.2924723832607,
      "bandFairHigh": 848.5796884684297,
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
      "epsUsedForCandidates": 33.34519482191781,
      "ttmEps": 29.33,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 28.750574871009345,
        "peTTM": 21.2794,
        "finnhubUpdated": "2026-11-18 23:00",
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
        "gapPct": -1.975537432630936,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 716.4230703715406,
        "fairHistProxy": 661.4795598888032,
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
        "consensusUpdatedAtUtc": "2026-11-18T00:35:33.322636+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.8795870036639096,
        "candSpread": 1.396319976321735,
        "fairAltExCappedGrowth": 743.9295753986928,
        "fairAltGapPct": -3.565623351706382,
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
          "fairPrice": 771.4360804258451,
          "per": 23.13485,
          "eps": 33.34519482191781,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 1000.3558446575342,
          "per": 30.0,
          "eps": 33.34519482191781,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": null,
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-11-17",
          "prevFairPrice": 771.494001216604,
          "newFairPrice": 771.7746117351481,
          "changePct": 0.03637235261733738,
          "epsEffect": 0.2806105185440398,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 33.3477->33.3598(적정PER 23.13배 유지 가정 시 +0.28) + 적정PER 23.13->23.13배(EPS 33.3598 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-18",
          "prevFairPrice": 771.7746117351481,
          "newFairPrice": 772.0843201905083,
          "changePct": 0.04012939148954629,
          "epsEffect": 0.3097084553602129,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 33.3598->33.3732(적정PER 23.13배 유지 가정 시 +0.31) + 적정PER 23.13->23.13배(EPS 33.3732 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-19",
          "prevFairPrice": 772.0843201905083,
          "newFairPrice": 771.4360804258451,
          "changePct": -0.08395971109776804,
          "epsEffect": -0.6482397646630979,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 33.3732->33.3452(적정PER 23.13배 유지 가정 시 -0.65) + 적정PER 23.13->23.13배(EPS 33.3452 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "AMZN": {
      "ticker": "AMZN",
      "asOf": "2026-11-19",
      "verdict": "매수",
      "action": "분할매수",
      "actionRaw": "분할매수",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": 433.6086265987066,
      "fairBasisMode": "a_kept_b_higher",
      "candidateBadge": null,
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": "median",
      "sectorFewPeers": true,
      "currentPrice": 262.6300048828125,
      "fairPrice": 319.725,
      "ratio": 0.8214246770906638,
      "bandAggressiveLe": 255.78000000000003,
      "bandDcaHigh": 287.75250000000005,
      "bandFairHigh": 351.69750000000005,
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
      "epsUsedForCandidates": 10.6575,
      "ttmEps": 12.37,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 12.70038565314463,
        "peTTM": 20.6789,
        "finnhubUpdated": "2026-11-18 23:00",
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
        "gapPct": 2.6708621919533604,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 636.5090219474132,
        "fairHistProxy": 326.10166227268877,
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
        "consensusUpdatedAtUtc": "2026-11-18T00:35:33.322636+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 1.1606849636406285,
        "candSpread": 2.758935034518467,
        "fairAltExCappedGrowth": 433.6086265987066,
        "fairAltGapPct": 35.619243599564186,
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
          "fairPrice": 230.70823125,
          "per": 21.6475,
          "eps": 10.6575,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 319.725,
          "per": 30.0,
          "eps": 10.6575,
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
          "date": "2026-11-17",
          "prevFairPrice": 320.13719999999995,
          "newFairPrice": 320.478,
          "changePct": 0.1064543576941569,
          "epsEffect": 0.3408000000000477,
          "perEffect": 3.7952219145154234e-14,
          "otherEffect": 0.0,
          "note": "EPS 10.6712->10.6826(적정PER 30.00배 유지 가정 시 +0.34) + 적정PER 30.00->30.00배(EPS 10.6826 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-18",
          "prevFairPrice": 320.478,
          "newFairPrice": 320.5506,
          "changePct": 0.022653661093730553,
          "epsEffect": 0.07259999999996936,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 10.6826->10.6850(적정PER 30.00배 유지 가정 시 +0.07) + 적정PER 30.00->30.00배(EPS 10.6850 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-19",
          "prevFairPrice": 320.5506,
          "newFairPrice": 319.725,
          "changePct": -0.25755684125999195,
          "epsEffect": -0.825599999999973,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 10.6850->10.6575(적정PER 30.00배 유지 가정 시 -0.83) + 적정PER 30.00->30.00배(EPS 10.6575 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "ORCL": {
      "ticker": "ORCL",
      "asOf": "2026-11-19",
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
      "currentPrice": 114.13999938964844,
      "fairPrice": 220.16195947106576,
      "ratio": 0.5184365167527908,
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
            "per": 23.5409847530946
          },
          {
            "ticker": "ADBE",
            "per": 9.15169
          }
        ],
        "excluded": [],
        "note": "유효 비교군 4개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 9.520975424657534,
      "ttmEps": 6.38,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 5.997078664483489,
        "peTTM": 19.0326,
        "finnhubUpdated": "2026-11-18 23:01",
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
        "gapPct": -6.001901810603627,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 220.16195947106576,
        "fairHistProxy": 270.32710984927564,
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
        "consensusUpdatedAtUtc": "2026-11-18T01:24:57.009830+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.670099408457352,
        "candSpread": 1.6101175493152171,
        "fairAltExCappedGrowth": 198.7792436794307,
        "fairAltGapPct": -9.712266298413486,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 23.1238869602465,
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
          "fairPrice": 177.3965278877956,
          "per": 18.632179999999998,
          "eps": 9.520975424657534,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 285.629262739726,
          "per": 30.0,
          "eps": 9.520975424657534,
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
      "asOf": "2026-11-19",
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
      "currentPrice": 188.5605926513672,
      "fairPrice": 356.5187276644728,
      "ratio": 0.528893934651381,
      "bandAggressiveLe": 285.21498213157827,
      "bandDcaHigh": 320.8668548980255,
      "bandFairHigh": 392.1706004309201,
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
            "per": 23.5409847530946
          },
          {
            "ticker": "ADBE",
            "per": 9.15169
          }
        ],
        "excluded": [],
        "note": "유효 비교군 4개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 16.163152,
      "ttmEps": 10.969999999999999,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 10.304420605025804,
        "peTTM": 18.299,
        "finnhubUpdated": "2026-11-18 23:01",
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
        "gapPct": -6.067268869409248,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 577.1543714316755,
        "fairHistProxy": 690.4169655972012,
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
        "consensusUpdatedAtUtc": "2026-11-18T00:35:33.322636+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.6787042527348626,
        "candSpread": 1.9237531899330673,
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
          "fairPrice": 300.0147703208,
          "per": 18.56165,
          "eps": 16.163152,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 356.5187276644728,
          "per": 22.05750015,
          "eps": 16.163152,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": false,
      "dispersionFlag": "최대/최소 2.83배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-11-17",
          "prevFairPrice": 356.74220639989665,
          "newFairPrice": 356.6081191586423,
          "changePct": -0.037586593021191744,
          "epsEffect": -0.1340872412543545,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 16.1733->16.1672(적정PER 22.06배 유지 가정 시 -0.13) + 적정PER 22.06->22.06배(EPS 16.1672 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-18",
          "prevFairPrice": 356.6081191586423,
          "newFairPrice": 356.56342341155755,
          "changePct": -0.012533575284319746,
          "epsEffect": -0.044695747084758715,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 16.1672->16.1652(적정PER 22.06배 유지 가정 시 -0.04) + 적정PER 22.06->22.06배(EPS 16.1652 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-19",
          "prevFairPrice": 356.56342341155755,
          "newFairPrice": 356.5187276644728,
          "changePct": -0.01253514638632908,
          "epsEffect": -0.044695747084758715,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 16.1652->16.1632(적정PER 22.06배 유지 가정 시 -0.04) + 적정PER 22.06->22.06배(EPS 16.1632 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2026-12-03"
    },
    "PLTR": {
      "ticker": "PLTR",
      "asOf": "2026-11-19",
      "verdict": "고평가",
      "action": "신규 추격 금지 · 모델 점검 필요(적정가/현재가 비율 2.12배)",
      "actionRaw": "신규 추격 금지 · 모델 점검 필요(적정가/현재가 비율 2.12배)",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "a_kept_one_candidate",
      "candidateBadge": "후보 1개",
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": null,
      "sectorFewPeers": null,
      "currentPrice": 155.0,
      "fairPrice": 73.27331589041096,
      "ratio": 2.1153676221207336,
      "bandAggressiveLe": 58.61865271232877,
      "bandDcaHigh": 65.94598430136986,
      "bandFairHigh": 80.60064747945206,
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
            "per": 23.5409847530946
          }
        ],
        "excluded": [
          {
            "ticker": "SNOW",
            "reason": "NTM PER 123.0배 >80배 제외"
          },
          {
            "ticker": "DDOG",
            "reason": "NTM PER 80.2배 >80배 제외"
          }
        ],
        "note": "유효 비교군 2개 이하(최소 3개 기준 미달)"
      },
      "epsUsedForCandidates": 2.4424438630136986,
      "ttmEps": 1.43,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 1.5037521040402422,
        "peTTM": 103.0755,
        "finnhubUpdated": "2026-11-18 23:01",
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
        "gapPct": 5.157489793023928,
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
        "consensusUpdatedAtUtc": "2026-11-18T00:35:33.322636+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.5854791676708353,
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
          "fairPrice": 73.27331589041096,
          "per": 30.0,
          "eps": 2.4424438630136986,
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
          "date": "2026-11-17",
          "prevFairPrice": 72.92929397260274,
          "newFairPrice": 73.13570712328769,
          "changePct": 0.2830318784691581,
          "epsEffect": 0.2064131506849476,
          "perEffect": 8.66100757018838e-15,
          "otherEffect": 0.0,
          "note": "EPS 2.4310->2.4379(적정PER 30.00배 유지 가정 시 +0.21) + 적정PER 30.00->30.00배(EPS 2.4379 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-18",
          "prevFairPrice": 73.13570712328769,
          "newFairPrice": 73.20451150684931,
          "changePct": 0.09407768963748553,
          "epsEffect": 0.06880438356163145,
          "perEffect": -8.669155646009741e-15,
          "otherEffect": 0.0,
          "note": "EPS 2.4379->2.4402(적정PER 30.00배 유지 가정 시 +0.07) + 적정PER 30.00->30.00배(EPS 2.4402 유지 가정 시 -0.00)"
        },
        {
          "date": "2026-11-19",
          "prevFairPrice": 73.20451150684931,
          "newFairPrice": 73.27331589041096,
          "changePct": 0.09398926670687992,
          "epsEffect": 0.06880438356164476,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 2.4402->2.4424(적정PER 30.00배 유지 가정 시 +0.07) + 적정PER 30.00->30.00배(EPS 2.4424 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "TSLA": {
      "ticker": "TSLA",
      "asOf": "2026-11-19",
      "verdict": "고평가",
      "action": "신규 추격 금지 · 모델 점검 필요(적정가/현재가 비율 8.66배)",
      "actionRaw": "신규 추격 금지 · 모델 점검 필요(적정가/현재가 비율 8.66배)",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "median",
      "candidateBadge": null,
      "lowConfidenceCapEligible": false,
      "sectorPerMethod": null,
      "sectorFewPeers": null,
      "currentPrice": 380.05999755859375,
      "fairPrice": 43.903900323411115,
      "ratio": 8.65663402929904,
      "bandAggressiveLe": 35.123120258728896,
      "bandDcaHigh": 39.513510291070006,
      "bandFairHigh": 48.29429035575223,
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
      "epsUsedForCandidates": 2.1091675068493148,
      "ttmEps": 0.91,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 0.8524846623159289,
        "peTTM": 445.8262,
        "finnhubUpdated": "2026-11-18 23:01",
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
        "gapPct": -6.320366778469355,
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
        "modelSplitRatio": 1.1019111580149716,
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
        "consensusUpdatedAtUtc": "2026-11-18T00:35:33.322636+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.4314498478877871,
        "candSpread": 1.1019111580149716,
        "fairAltExCappedGrowth": null,
        "fairAltGapPct": null,
        "fairAltApplicable": false,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 20.815748479358565,
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
          "fairPrice": 46.0325808369863,
          "per": 21.825000000000003,
          "eps": 2.1091675068493148,
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
          "date": "2026-11-17",
          "prevFairPrice": 43.83887677204125,
          "newFairPrice": 43.87789090286317,
          "changePct": 0.08899436686023905,
          "epsEffect": 0.074520316607034,
          "perEffect": -0.03550618578511008,
          "otherEffect": 0.0,
          "note": "EPS 2.1032->2.1068(적정PER 20.84배 유지 가정 시 +0.07) + 적정PER 20.84->20.83배(EPS 2.1068 유지 가정 시 -0.04)"
        },
        {
          "date": "2026-11-18",
          "prevFairPrice": 43.87789090286317,
          "newFairPrice": 43.89089561313715,
          "changePct": 0.02963841243592364,
          "epsEffect": 0.024820021063496844,
          "perEffect": -0.011815310789527335,
          "otherEffect": 0.0,
          "note": "EPS 2.1068->2.1080(적정PER 20.83배 유지 가정 시 +0.02) + 적정PER 20.83->20.82배(EPS 2.1080 유지 가정 시 -0.01)"
        },
        {
          "date": "2026-11-19",
          "prevFairPrice": 43.89089561313715,
          "newFairPrice": 43.903900323411115,
          "changePct": 0.029629630683762155,
          "epsEffect": 0.02481334137887368,
          "perEffect": -0.011808631104898694,
          "otherEffect": 0.0,
          "note": "EPS 2.1080->2.1092(적정PER 20.82배 유지 가정 시 +0.02) + 적정PER 20.82->20.82배(EPS 2.1092 유지 가정 시 -0.01)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    }
  }
};
if (typeof window !== 'undefined') { window.PRICE_MAP_DATA = PRICE_MAP_DATA; }
