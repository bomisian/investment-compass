const PRICE_MAP_DATA = {
  "_meta": {
    "title": "WO17 가격지도(price_map) - 화면용 production 데이터",
    "as_of": "2026-11-04",
    "input_snapshot_hash": "023e4665f9dd524f68073242d710fdf688bf88e0ef26c5dec4b8df0942a61c11",
    "generated_by": "price_map_engine.py write_price_map_data_js()",
    "session_date": "2026-11-03",
    "session_date_source": "daily_run_arg(확정 종가 거래일)",
    "fxRates": {
      "EURUSD": {
        "rate": 1.1196,
        "asOf": "2026-11-03",
        "source": "Yahoo Finance chart API(query1.finance.yahoo.com)"
      },
      "TWDUSD": {
        "rate": 0.0305,
        "asOf": "2026-11-03",
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
        "QCOM",
        "ANET",
        "ETN",
        "HUBB",
        "VRT",
        "PWR",
        "COHR",
        "CEG",
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
      "asOf": "2026-11-04",
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
      "currentPrice": 381.9200134277344,
      "fairPrice": 474.95530678200004,
      "ratio": 0.8041177937675555,
      "bandAggressiveLe": 379.96424542560004,
      "bandDcaHigh": 427.45977610380004,
      "bandFairHigh": 522.4508374602001,
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
      "epsUsedForCandidates": 18.55645,
      "ttmEps": 11.6,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 11.432642943286835,
        "peTTM": 33.4061,
        "finnhubUpdated": "2026-11-03 15:21",
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
        "gapPct": -1.4427332475272836,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 247.67811393737793,
        "fairHistProxy": 282.98048102552747,
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
        "consensusUpdatedAtUtc": "2026-11-03T21:00:24.004875+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.6251195675897059,
        "candSpread": 2.2476491408552657,
        "fairAltExCappedGrowth": 361.31671035968895,
        "fairAltGapPct": -23.926166272834195,
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
          "fairPrice": 474.95530678200004,
          "per": 25.59516,
          "eps": 18.55645,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 556.6935000000001,
          "per": 30.0,
          "eps": 18.55645,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": null,
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-10-31",
          "prevFairPrice": 415.1859051878336,
          "newFairPrice": 415.43394524948894,
          "changePct": 0.05974192730437602,
          "epsEffect": 0.35347125994565937,
          "perEffect": -0.10543119829029195,
          "otherEffect": 0.0,
          "note": "EPS 18.5389->18.5546(적정PER 22.40배 유지 가정 시 +0.35) + 적정PER 22.40->22.39배(EPS 18.5546 유지 가정 시 -0.11)"
        },
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
        }
      ],
      "nextUpdateDate": "2026-11-13"
    },
    "LRCX": {
      "ticker": "LRCX",
      "asOf": "2026-11-04",
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
      "currentPrice": 230.72000122070312,
      "fairPrice": 270.0304127019583,
      "ratio": 0.8544222812241397,
      "bandAggressiveLe": 216.02433016156667,
      "bandDcaHigh": 243.02737143176248,
      "bandFairHigh": 297.0334539721542,
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
      "epsUsedForCandidates": 10.550057616438355,
      "ttmEps": 6.71,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 6.527028131986261,
        "peTTM": 35.3484,
        "finnhubUpdated": "2026-11-03 15:21",
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
        "gapPct": -2.726853472633972,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 157.15951313800122,
        "fairHistProxy": 203.089410335367,
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
        "consensusUpdatedAtUtc": "2026-11-03T21:00:24.004875+00:00",
        "periodCompareMethod": "fallback_45d",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.6360154838912871,
        "candSpread": 2.013888451125651,
        "fairAltExCappedGrowth": 213.59496291997976,
        "fairAltGapPct": -20.899664307171307,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 25.595159999999996,
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
          "fairPrice": 270.0304127019583,
          "per": 25.59516,
          "eps": 10.550057616438355,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 316.50172849315067,
          "per": 30.0,
          "eps": 10.550057616438355,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": null,
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-10-31",
          "prevFairPrice": 239.42176264308992,
          "newFairPrice": 239.53014439965787,
          "changePct": 0.04526813075447846,
          "epsEffect": 0.16133192957003464,
          "perEffect": -0.05295017300208669,
          "otherEffect": 0.0,
          "note": "EPS 10.5146->10.5217(적정PER 22.77배 유지 가정 시 +0.16) + 적정PER 22.77->22.77배(EPS 10.5217 유지 가정 시 -0.05)"
        },
        {
          "date": "2026-11-03",
          "prevFairPrice": 239.53014439965787,
          "newFairPrice": 269.8490664353162,
          "changePct": 12.657664492144669,
          "epsEffect": 0.48388882097616953,
          "perEffect": 29.835033214682177,
          "otherEffect": 0.0,
          "note": "EPS 10.5217->10.5430(적정PER 22.77배 유지 가정 시 +0.48) + 적정PER 22.77->25.60배(EPS 10.5430 유지 가정 시 +29.84)"
        },
        {
          "date": "2026-11-04",
          "prevFairPrice": 269.8490664353162,
          "newFairPrice": 270.0304127019583,
          "changePct": 0.0672028512225978,
          "epsEffect": 0.1813462666421207,
          "perEffect": -3.7481334006053953e-14,
          "otherEffect": 0.0,
          "note": "EPS 10.5430->10.5501(적정PER 25.60배 유지 가정 시 +0.18) + 적정PER 25.60->25.60배(EPS 10.5501 유지 가정 시 -0.00)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "KLAC": {
      "ticker": "KLAC",
      "asOf": "2026-11-04",
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
      "currentPrice": 156.1999969482422,
      "fairPrice": 140.75901661413698,
      "ratio": 1.109697983870075,
      "bandAggressiveLe": 112.60721329130959,
      "bandDcaHigh": 126.68311495272329,
      "bandFairHigh": 154.8349182755507,
      "modelCheckNeeded": false,
      "confidence": "보통",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±33%",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "고성장형",
      "stockTypeReason": "다음 회계연도 성장률 53.3%(기준 30% 초과)",
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
      "epsUsedForCandidates": 6.226864383561644,
      "ttmEps": 4.0,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 4.086683662637774,
        "peTTM": 38.2217,
        "finnhubUpdated": "2026-11-03 15:21",
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
        "gapPct": 2.1670915659443457,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 96.99626457539618,
        "fairHistProxy": 148.77604408397505,
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
        "consensusUpdatedAtUtc": "2026-11-03T21:00:24.004875+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.6423778893530485,
        "candSpread": 1.9259085112668761,
        "fairAltExCappedGrowth": 118.87764059476658,
        "fairAltGapPct": -15.545274857491986,
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
          "fairPrice": 140.75901661413698,
          "per": 22.60512,
          "eps": 6.226864383561644,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 186.8059315068493,
          "per": 30.0,
          "eps": 6.226864383561644,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": null,
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-10-31",
          "prevFairPrice": 137.69112636940557,
          "newFairPrice": 142.31216020043396,
          "changePct": 3.3560868829199832,
          "epsEffect": 0.8618602242978901,
          "perEffect": 3.7591736067304966,
          "otherEffect": 0.0,
          "note": "EPS 6.0947->6.1329(적정PER 22.59배 유지 가정 시 +0.86) + 적정PER 22.59->23.20배(EPS 6.1329 유지 가정 시 +3.76)"
        },
        {
          "date": "2026-11-03",
          "prevFairPrice": 142.31216020043396,
          "newFairPrice": 140.67671539778632,
          "changePct": -1.1491954027992146,
          "epsEffect": 2.0971009154155196,
          "perEffect": -3.7325457180631476,
          "otherEffect": 0.0,
          "note": "EPS 6.1329->6.2232(적정PER 23.20배 유지 가정 시 +2.10) + 적정PER 23.20->22.61배(EPS 6.2232 유지 가정 시 -3.73)"
        },
        {
          "date": "2026-11-04",
          "prevFairPrice": 140.67671539778632,
          "newFairPrice": 140.75901661413698,
          "changePct": 0.05850379440402591,
          "epsEffect": 0.08230121635066773,
          "perEffect": -2.21222662715151e-14,
          "otherEffect": 0.0,
          "note": "EPS 6.2232->6.2269(적정PER 22.61배 유지 가정 시 +0.08) + 적정PER 22.61->22.61배(EPS 6.2269 유지 가정 시 -0.00)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "ASML": {
      "ticker": "ASML",
      "asOf": "2026-11-04",
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
      "currentPrice": 1552.1400146484375,
      "fairPrice": 1273.7270666172942,
      "ratio": 1.2185813235252507,
      "bandAggressiveLe": 1018.9816532938354,
      "bandDcaHigh": 1146.3543599555649,
      "bandFairHigh": 1401.0997732790238,
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
      "epsUsedForCandidates": 53.893771780821915,
      "ttmEps": 39.186,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 29.961779295970146,
        "peTTM": 51.804,
        "finnhubUpdated": "2026-11-03 15:21",
        "periods": "Q4'25~Q3'26",
        "endDates": [
          "2025-12-31",
          "2026-03-31",
          "2026-06-30",
          "2026-09-30"
        ],
        "secVerified": false,
        "quarterly": 39.186,
        "checks": [
          "분기 연속 OK",
          "최신성 OK(승인 근거 2026-09-30)",
          "역산 주식수 일관(±0.8%)",
          "EUR35.00(보통주1주) x ADR비율1 x EURUSD=X(1.1196) = $39.19(ADR 1주)"
        ],
        "gapPct": -23.53958225904622,
        "gapPrevPct": -2.8633531421639824,
        "gapCause": "period",
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 1273.7270666172942,
        "fairHistProxy": 1350.1633694293675,
        "proxyPer": 25.052307990620594,
        "trailingPer": 32.504646215926456,
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
        "consensusUpdatedAtUtc": "2026-11-03T21:00:24.004875+00:00",
        "periodCompareMethod": null,
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.7270970040724507,
        "candSpread": 1.3271329681063406,
        "fairAltExCappedGrowth": 1246.0011224876935,
        "fairAltGapPct": -2.176757082130165,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": "WO8-B 분류 불가(이력 부족, 유효 4개년 <5년) - 필터 없음(원본 그대로) - 경기순환 여부 판단 안 함, NTM EPS 그대로 사용",
      "convertedFairPer": 23.63403088203505,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 1273.7270666172942,
          "per": 32.504646215926456,
          "eps": 39.186,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "sector_per",
          "fairPrice": 1218.275178358093,
          "per": 22.60512,
          "eps": 53.893771780821915,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 1616.8131534246575,
          "per": 30.0,
          "eps": 53.893771780821915,
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
          "date": "2026-10-31",
          "prevFairPrice": 1476.5171631159214,
          "newFairPrice": 1307.39240353641,
          "changePct": -11.454303668411434,
          "epsEffect": 1.114563564369385,
          "perEffect": -170.23932314388094,
          "otherEffect": 0.0,
          "note": "EPS 53.4285->53.4688(적정PER 27.64배 유지 가정 시 +1.11) + 적정PER 27.64->24.45배(EPS 53.4688 유지 가정 시 -170.24)"
        },
        {
          "date": "2026-11-03",
          "prevFairPrice": 1307.39240353641,
          "newFairPrice": 1273.7270666172938,
          "changePct": -2.5749986636035027,
          "epsEffect": 2.9584609838917406,
          "perEffect": -36.62379790300801,
          "otherEffect": 0.0,
          "note": "EPS 53.4688->53.5898(적정PER 24.45배 유지 가정 시 +2.96) + 적정PER 24.45->23.77배(EPS 53.5898 유지 가정 시 -36.62)"
        },
        {
          "date": "2026-11-04",
          "prevFairPrice": 1273.7270666172938,
          "newFairPrice": 1273.7270666172942,
          "changePct": 3.570210312749036e-14,
          "epsEffect": 7.224799132663054,
          "perEffect": -7.224799132662607,
          "otherEffect": 0.0,
          "note": "EPS 53.5898->53.8938(적정PER 23.77배 유지 가정 시 +7.22) + 적정PER 23.77->23.63배(EPS 53.8938 유지 가정 시 -7.22)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "MU": {
      "ticker": "MU",
      "asOf": "2026-11-04",
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
      "currentPrice": 855.0999755859375,
      "fairPrice": 1189.1185005410634,
      "ratio": 0.7191040886142606,
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
            "per": 55.587946705940006
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
        "finnhub": 72.89544142073548,
        "peTTM": 11.7305,
        "finnhubUpdated": "2026-11-03 15:21",
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
        "gapPct": -1.771403556480955,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": {
        "ntm_eps_raw": 182.06831561643835,
        "normalized_eps": 53.57,
        "change_pct": -70.57697830694747,
        "fair_without_normalization": 3265.1490281639235,
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
            "fairPrice": 5462.049468493151,
            "per": 30.0,
            "eps": 182.06831561643835,
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
        "consensusUpdatedAtUtc": "2026-11-03T21:00:24.004875+00:00",
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
      "epsBasisNote": "경기순환형(WO8-B 최종본: (A) EPS 30%+·매출 5%+ 동반 감소 2회(2019→2020 EPS -57%·매출 -8%, 2022→2023 EPS -169%·매출 -49%, 기준 2회 이상)) - NTM EPS(182.0683) 대신 정상화 EPS 53.5700(순이익률 사이클 중앙값 22% x NTM매출/주식수 243.5, 기준연수 8) 사용 - 업종PER·성장PER·과거PER 후보 전부 동일 기준 적용(item3)",
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
      "asOf": "2026-11-04",
      "verdict": "매수",
      "action": "분할매수 · 모델 점검 필요(적정가/현재가 비율 0.22배)",
      "actionRaw": "적극 모아가기 · 모델 점검 필요(적정가/현재가 비율 0.22배)",
      "actionCapReason": "low_confidence_cap",
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "a_kept_two_candidates",
      "candidateBadge": "후보 2개",
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": null,
      "sectorFewPeers": null,
      "currentPrice": 1126.52001953125,
      "fairPrice": 5203.003067248091,
      "ratio": 0.21651342599093937,
      "bandAggressiveLe": 4162.402453798472,
      "bandDcaHigh": 4682.7027605232815,
      "bandFairHigh": 5723.3033739729,
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
      "epsUsedForCandidates": 248.48981493150683,
      "ttmEps": 124.75,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 131.53673032603365,
        "peTTM": 8.5643,
        "finnhubUpdated": "2026-11-03 15:58",
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
        "gapPct": 5.440264790407734,
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
        "modelSplitRatio": 2.525891955741573,
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
        "consensusUpdatedAtUtc": "2026-11-03T21:00:24.004875+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.5020326488407012,
        "candSpread": 2.525891955741573,
        "fairAltExCappedGrowth": 2951.311686550976,
        "fairAltGapPct": -43.27676442997086,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": "WO8-B 분류 불가(이력 부족, 유효 4개년 <5년) - 필터 없음(원본 그대로) - 경기순환 여부 판단 안 함, NTM EPS 그대로 사용",
      "convertedFairPer": 20.938496286788393,
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
          "fairPrice": 7454.694447945205,
          "per": 30.0,
          "eps": 248.48981493150683,
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
          "date": "2026-10-31",
          "prevFairPrice": 4611.88560745269,
          "newFairPrice": 4622.536354065775,
          "changePct": 0.23094125743001603,
          "epsEffect": 10.650746613084797,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 232.0282->232.5641(적정PER 19.88배 유지 가정 시 +10.65) + 적정PER 19.88->19.88배(EPS 232.5641 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-03",
          "prevFairPrice": 4622.536354065775,
          "newFairPrice": 5205.91946094672,
          "changePct": 12.620411440741345,
          "epsEffect": 320.4110972862574,
          "perEffect": 262.9720095946881,
          "otherEffect": 0.0,
          "note": "EPS 232.5641->248.6842(적정PER 19.88배 유지 가정 시 +320.41) + 적정PER 19.88->20.93배(EPS 248.6842 유지 가정 시 +262.97)"
        },
        {
          "date": "2026-11-04",
          "prevFairPrice": 5205.91946094672,
          "newFairPrice": 5203.003067248091,
          "changePct": -0.056020722573747433,
          "epsEffect": -4.070090553267559,
          "perEffect": 1.153696854637534,
          "otherEffect": 0.0,
          "note": "EPS 248.6842->248.4898(적정PER 20.93배 유지 가정 시 -4.07) + 적정PER 20.93->20.94배(EPS 248.4898 유지 가정 시 +1.15)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "WDC": {
      "ticker": "WDC",
      "asOf": "2026-11-04",
      "verdict": "매수",
      "action": "분할매수 · 모델 점검 필요(적정가/현재가 비율 0.47배)",
      "actionRaw": "적극 모아가기 · 모델 점검 필요(적정가/현재가 비율 0.47배)",
      "actionCapReason": "low_confidence_cap",
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "a_kept_two_candidates",
      "candidateBadge": "후보 2개",
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": null,
      "sectorFewPeers": null,
      "currentPrice": 347.3500061035156,
      "fairPrice": 738.7845204224684,
      "ratio": 0.4701641635708422,
      "bandAggressiveLe": 591.0276163379748,
      "bandDcaHigh": 664.9060683802215,
      "bandFairHigh": 812.6629724647153,
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
      "epsUsedForCandidates": 30.180575178082194,
      "ttmEps": 25.773367999999998,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 24.020940513233864,
        "peTTM": 14.4603,
        "finnhubUpdated": "2026-11-03 15:22",
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
        "gapPct": -6.799373239718354,
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
        "modelSplitRatio": 1.5824773745087881,
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
        "consensusUpdatedAtUtc": "2026-11-03T21:00:24.004875+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.8539720614309959,
        "candSpread": 1.5824773745087881,
        "fairAltExCappedGrowth": 572.1517855024711,
        "fairAltGapPct": -22.55498461509584,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": "WO8-B 분류 불가(이력 부족, 유효 1개년 <5년) - corporate_events.json 기업분할/분리상장(2025-02-21) 이전 회계연도 7개 제외 - 경기순환 여부 판단 안 함, NTM EPS 그대로 사용",
      "convertedFairPer": 24.478808507234486,
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
          "fairPrice": 905.4172553424658,
          "per": 30.0,
          "eps": 30.180575178082194,
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
          "date": "2026-10-30",
          "prevFairPrice": 642.5988744484697,
          "newFairPrice": 572.1517855024711,
          "changePct": -10.962840388798071,
          "epsEffect": 0.9225556318034341,
          "perEffect": -71.36964457780215,
          "otherEffect": 0.0,
          "note": "EPS 29.9228->29.9658(적정PER 21.48배 유지 가정 시 +0.92) + 적정PER 21.48->19.09배(EPS 29.9658 유지 가정 시 -71.37)"
        },
        {
          "date": "2026-11-03",
          "prevFairPrice": 572.1517855024711,
          "newFairPrice": 738.1401339841123,
          "changePct": 29.011243639809337,
          "epsEffect": 3.280958969126319,
          "perEffect": 162.7073895125149,
          "otherEffect": 0.0,
          "note": "EPS 29.9658->30.1376(적정PER 19.09배 유지 가정 시 +3.28) + 적정PER 19.09->24.49배(EPS 30.1376 유지 가정 시 +162.71)"
        },
        {
          "date": "2026-11-04",
          "prevFairPrice": 738.1401339841123,
          "newFairPrice": 738.7845204224684,
          "changePct": 0.08729865897930164,
          "epsEffect": 1.052167918985497,
          "perEffect": -0.4077814806293608,
          "otherEffect": 0.0,
          "note": "EPS 30.1376->30.1806(적정PER 24.49배 유지 가정 시 +1.05) + 적정PER 24.49->24.48배(EPS 30.1806 유지 가정 시 -0.41)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "STX": {
      "ticker": "STX",
      "asOf": "2026-11-04",
      "verdict": "고평가",
      "action": "신규 추격 금지 · 모델 점검 필요(적정가/현재가 비율 2.18배)",
      "actionRaw": "신규 추격 금지 · 모델 점검 필요(적정가/현재가 비율 2.18배)",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "a_kept_two_candidates",
      "candidateBadge": "후보 2개",
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": null,
      "sectorFewPeers": null,
      "currentPrice": 606.3800048828125,
      "fairPrice": 277.57811859911607,
      "ratio": 2.184538204751502,
      "bandAggressiveLe": 222.06249487929287,
      "bandDcaHigh": 249.82030673920445,
      "bandFairHigh": 305.3359304590277,
      "modelCheckNeeded": true,
      "confidence": "낮음",
      "confidenceNote": "적정가/현재가 비율이 2배 초과 또는 0.5배 미만 - 모델 점검 필요로 강제 낮음",
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
            "per": 15.962291872054088
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
        "finnhub": 19.5566078255719,
        "peTTM": 31.0064,
        "finnhubUpdated": "2026-11-03 15:23",
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
        "gapPct": 2.7119223668422343,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": {
        "ntm_eps_raw": 48.80371942465754,
        "normalized_eps": 10.90848,
        "change_pct": -77.64826097559971,
        "fair_without_normalization": 930.9518879669818,
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
            "fairPrice": 1464.1115827397261,
            "per": 30.0,
            "eps": 48.80371942465754,
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
        "consensusUpdatedAtUtc": "2026-11-03T21:00:24.004875+00:00",
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
      "epsBasisNote": "경기순환형(WO8-B 최종본: (B) EPS 30%+·매출 5%+ 동반 감소 1회(2022→2023 EPS -135%·매출 -37%) + 이익 정점 의심(NTM EPS $39.98가 과거 8년 EPS 중앙값 $6.06의 3배 초과)) - NTM EPS(48.8037) 대신 정상화 EPS 10.9085(순이익률 사이클 중앙값 13.2% x NTM매출/주식수 82.64, 기준연수 8) 사용 - 업종PER·성장PER·과거PER 후보 전부 동일 기준 적용(item3)",
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
      "asOf": "2026-11-04",
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
      "currentPrice": 206.69000244140625,
      "fairPrice": 248.51900462897802,
      "ratio": 0.8316869076068463,
      "bandAggressiveLe": 198.81520370318242,
      "bandDcaHigh": 223.66710416608024,
      "bandFairHigh": 273.37090509187584,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "EPS 품질 경고: 경기순환형(WO8-B 최종본, 39종목 적용) - 정상화 EPS 사용(과거PER 후보 포함); 경기순환형(item2)인데 비교군 정상화 EPS 유효 비교군 부족 - 업종PER 후보를 비움(forwardPE 기준으로 섞어 쓰지 않음, 원래 forwardPE 기준 업종PER 30.06626는 참고용으로만 보관) - 업종 비교 불가(정상화기준 유효 비교군 1개 <3개)",
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
            "per": 31.81626639360211
          }
        ],
        "excluded": [
          {
            "ticker": "AMD",
            "reason": "정상화기준 PER 258.2배 >80배 제외"
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
        "finnhub": 8.083458903827069,
        "peTTM": 25.5695,
        "finnhubUpdated": "2026-11-03 15:20",
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
        "gapPct": 2.192906495917435,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": {
        "ntm_eps_raw": 14.322841534246574,
        "normalized_eps": 6.114639999999999,
        "change_pct": -57.3084713296617,
        "fair_without_normalization": 418.155456400428,
        "basis_without_normalization": "B안: 성장 PER 상한 후보 제외, 나머지 두 후보의 평균 (A안 상한 포함 $429.69, 낮은 쪽 적용)",
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
            "fairPrice": 430.63427750745643,
            "per": 30.06626,
            "eps": 14.322841534246574,
            "epsBasis": "NTM EPS"
          },
          {
            "candidate": "growth_per_peg",
            "fairPrice": 429.6852460273972,
            "per": 30.0,
            "eps": 14.322841534246574,
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
        "modelSplitEligible": true,
        "modelSplitRatio": 1.7095517711479125,
        "actionBeforeModelSplit": "분할매수",
        "modelSplitMode": "on"
      },
      "earningsStatus": {
        "latestOfficialPeriodEnd": "2026-07-26",
        "latestOfficialSource": "10-Q 2026-08-26",
        "valuationActualPeriodEnd": "2026-07-26",
        "valuationPeriods": "Q4'25~Q3'26",
        "earningsReleaseDate": null,
        "earningsReleaseAtUtc": null,
        "consensusUpdatedAtUtc": "2026-11-03T21:00:24.004875+00:00",
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
      "epsBasisNote": "경기순환형(WO8-B 최종본: (B) EPS 30%+·매출 5%+ 동반 감소 1회(2019→2020 EPS -32%·매출 -7%) + 이익 정점 의심(NTM EPS $9.31가 과거 8년 EPS 중앙값 $0.28의 3배 초과)) - NTM EPS(14.3228) 대신 정상화 EPS 6.1146(순이익률 사이클 중앙값 35.8% x NTM매출/주식수 17.08, 기준연수 8) 사용 - 업종PER·성장PER·과거PER 후보 전부 동일 기준 적용(item3)",
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
      "asOf": "2026-11-04",
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
      "currentPrice": 483.8999938964844,
      "fairPrice": 250.62485066073697,
      "ratio": 1.9307741934638585,
      "bandAggressiveLe": 200.49988052858959,
      "bandDcaHigh": 225.56236559466328,
      "bandFairHigh": 275.68733572681066,
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
      "epsUsedForCandidates": 14.751263424657534,
      "ttmEps": 3.8899999999999997,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 4.035193440759077,
        "peTTM": 119.9199,
        "finnhubUpdated": "2026-11-03 15:20",
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
        "gapPct": 3.732479196891436,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 221.2002325391955,
        "fairHistProxy": 611.9210906701107,
        "proxyPer": 41.48262240692222,
        "trailingPer": 56.86381299208111,
        "modelSplitEligible": false,
        "modelSplitRatio": null,
        "actionBeforeModelSplit": null,
        "modelSplitMode": "on"
      },
      "earningsStatus": {
        "latestOfficialPeriodEnd": "2026-06-27",
        "latestOfficialSource": "10-Q 2026-08-05",
        "valuationActualPeriodEnd": "2026-06-27",
        "valuationPeriods": "Q3'25~Q2'26",
        "earningsReleaseDate": null,
        "earningsReleaseAtUtc": null,
        "consensusUpdatedAtUtc": "2026-11-03T21:00:24.004875+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.2637062255628663,
        "candSpread": 2.0006213269297115,
        "fairAltExCappedGrowth": 235.91254159996623,
        "fairAltGapPct": -5.87025150218895,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 16.99006,
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
          "fairPrice": 250.62485066073697,
          "per": 16.99006,
          "eps": 14.751263424657534,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 442.537902739726,
          "per": 30.0,
          "eps": 14.751263424657534,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": "최대/최소 3.35배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-10-31",
          "prevFairPrice": 274.5787479812417,
          "newFairPrice": 275.99038847716275,
          "changePct": 0.5141113455792657,
          "epsEffect": 1.4116404959210993,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 14.4475->14.5218(적정PER 19.01배 유지 가정 시 +1.41) + 적정PER 19.01->19.01배(EPS 14.5218 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-03",
          "prevFairPrice": 275.99038847716275,
          "newFairPrice": 249.19914955878355,
          "changePct": -9.70730867339465,
          "epsEffect": 2.7661106264646063,
          "perEffect": -29.557349544843845,
          "otherEffect": 0.0,
          "note": "EPS 14.5218->14.6673(적정PER 19.01배 유지 가정 시 +2.77) + 적정PER 19.01->16.99배(EPS 14.6673 유지 가정 시 -29.56)"
        },
        {
          "date": "2026-11-04",
          "prevFairPrice": 249.19914955878355,
          "newFairPrice": 250.62485066073697,
          "changePct": 0.5721131490527472,
          "epsEffect": 1.4257011019534365,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 14.6673->14.7513(적정PER 16.99배 유지 가정 시 +1.43) + 적정PER 16.99->16.99배(EPS 14.7513 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "AVGO": {
      "ticker": "AVGO",
      "asOf": "2026-11-04",
      "verdict": "매수",
      "action": "분할매수",
      "actionRaw": "적극 모아가기",
      "actionCapReason": "low_confidence_cap",
      "cashflowVeto": false,
      "fairPriceUpper": 583.9521,
      "fairPriceB": 431.38679729119474,
      "fairBasisMode": "ex_capped_growth_floor_b",
      "candidateBadge": null,
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": "median",
      "sectorFewPeers": true,
      "currentPrice": 332.1300048828125,
      "fairPrice": 431.38679729119474,
      "ratio": 0.7699123083236553,
      "bandAggressiveLe": 345.1094378329558,
      "bandDcaHigh": 388.24811756207527,
      "bandFairHigh": 474.52547702031427,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±36% / 사업 위험으로 신뢰도 1단계 하향(보통→낮음): EPS 하향 수정이 상향보다 많음(방향은 보합)",
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
        "finnhub": 8.098815765119289,
        "peTTM": 41.0097,
        "finnhubUpdated": "2026-11-03 15:20",
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
        "gapPct": 3.4331515340905394,
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
        "consensusUpdatedAtUtc": "2026-11-03T21:00:24.004875+00:00",
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
      "qualityWarnings": [
        "⚠ 사업 경고(현금흐름/EPS 하향): EPS 하향 수정이 상향보다 많음(방향은 보합)"
      ],
      "recentChanges": [
        {
          "date": "2026-10-30",
          "prevFairPrice": 575.6695162138501,
          "newFairPrice": 576.1501917648225,
          "changePct": 0.08349852431543425,
          "epsEffect": 0.6333439054109335,
          "perEffect": -0.1526683544385309,
          "otherEffect": 0.0,
          "note": "EPS 19.4223->19.4437(적정PER 29.64배 유지 가정 시 +0.63) + 적정PER 29.64->29.63배(EPS 19.4437 유지 가정 시 -0.15)"
        },
        {
          "date": "2026-10-31",
          "prevFairPrice": 576.1501917648225,
          "newFairPrice": 576.6308673157947,
          "changePct": 0.08342886244641859,
          "epsEffect": 0.6331761263168786,
          "perEffect": -0.15250057534465658,
          "otherEffect": 0.0,
          "note": "EPS 19.4437->19.4651(적정PER 29.63배 유지 가정 시 +0.63) + 적정PER 29.63->29.62배(EPS 19.4651 유지 가정 시 -0.15)"
        },
        {
          "date": "2026-11-03",
          "prevFairPrice": 576.6308673157947,
          "newFairPrice": 431.38679729119474,
          "changePct": -25.188396642848527,
          "epsEffect": 0.0,
          "perEffect": -145.24407002459995,
          "otherEffect": 0.0,
          "note": "EPS 19.4651->19.4651(적정PER 29.62배 유지 가정 시 +0.00) + 적정PER 29.62->22.16배(EPS 19.4651 유지 가정 시 -145.24)"
        }
      ],
      "nextUpdateDate": "2026-12-10"
    },
    "MRVL": {
      "ticker": "MRVL",
      "asOf": "2026-11-04",
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
      "currentPrice": 171.97000122070312,
      "fairPrice": 111.97233829098465,
      "ratio": 1.535825757016893,
      "bandAggressiveLe": 89.57787063278772,
      "bandDcaHigh": 100.77510446188619,
      "bandFairHigh": 123.16957212008313,
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
      "epsUsedForCandidates": 6.590461616438356,
      "ttmEps": 0.9100000000000001,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 3.0203293298916027,
        "peTTM": 56.9375,
        "finnhubUpdated": "2026-11-03 15:20",
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
        "gapPct": -0.3191640299801124,
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
        "consensusUpdatedAtUtc": "2026-11-03T21:00:24.004875+00:00",
        "periodCompareMethod": "fallback_45d",
        "pendingReflection": true,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.1380783400255635,
        "candSpread": 21.14837851998621,
        "fairAltExCappedGrowth": 60.66061376795598,
        "fairAltGapPct": -45.825357678683034,
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
          "fairPrice": 111.97233829098465,
          "per": 16.99006,
          "eps": 6.590461616438356,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 197.71384849315066,
          "per": 30.0,
          "eps": 6.590461616438356,
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
          "date": "2026-10-31",
          "prevFairPrice": 124.23572252627838,
          "newFairPrice": 124.39746336697644,
          "changePct": 0.13018867472988474,
          "epsEffect": 0.16174084069806172,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 6.5369->6.5454(적정PER 19.01배 유지 가정 시 +0.16) + 적정PER 19.01->19.01배(EPS 6.5454 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-03",
          "prevFairPrice": 124.39746336697644,
          "newFairPrice": 111.6410172255896,
          "changePct": -10.254587027835871,
          "epsEffect": 0.4852225220942527,
          "perEffect": -13.241668663481102,
          "otherEffect": 0.0,
          "note": "EPS 6.5454->6.5710(적정PER 19.01배 유지 가정 시 +0.49) + 적정PER 19.01->16.99배(EPS 6.5710 유지 가정 시 -13.24)"
        },
        {
          "date": "2026-11-04",
          "prevFairPrice": 111.6410172255896,
          "newFairPrice": 111.97233829098465,
          "changePct": 0.29677359955039534,
          "epsEffect": 0.3313210653950616,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 6.5710->6.5905(적정PER 16.99배 유지 가정 시 +0.33) + 적정PER 16.99->16.99배(EPS 6.5905 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2026-11-27"
    },
    "TSM": {
      "ticker": "TSM",
      "asOf": "2026-11-04",
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
      "currentPrice": 404.79998779296875,
      "fairPrice": 529.6062062279041,
      "ratio": 0.7643414730279279,
      "bandAggressiveLe": 423.68496498232327,
      "bandDcaHigh": 476.6455856051137,
      "bandFairHigh": 582.5668268506945,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "EPS 품질 경고: ADR 통화환산 적용(TWD->USD); WO8-B 분류 불가(이력 부족 - 유효 4개년 <5년; 필터 없음(원본 그대로))",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "분류불가(이력부족)",
      "stockTypeReason": "유효 연간 EPS 4개년(<5년 기준) - 필터 없음(원본 그대로)",
      "candidates": {
        "historicalPer": 24.85328458412791,
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
      "epsUsedForCandidates": 22.466882575342467,
      "ttmEps": 14.9839110765,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 16.78122177052544,
        "peTTM": 24.1222,
        "finnhubUpdated": "2026-11-03 15:21",
        "periods": "Q4'25~Q3'26",
        "endDates": [
          "2025-12-31",
          "2026-03-31",
          "2026-06-30",
          "2026-09-30"
        ],
        "secVerified": false,
        "quarterly": 14.9839110765,
        "checks": [
          "분기 연속 OK",
          "최신성 OK(승인 근거 2026-09-30)",
          "역산 주식수 일관(±4.2%)",
          "TWD491.28(원천값이 이미 ADR 1주 기준, ADR비율 미적용) x TWDUSD=X(0.0305) = $14.98(ADR 1주)"
        ],
        "gapPct": 11.994937001756846,
        "gapPrevPct": 27.55395675814163,
        "gapCause": "fx_adr",
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 372.39940616752085,
        "fairHistProxy": 339.33676714474717,
        "proxyPer": 15.103865256195856,
        "trailingPer": 24.85328458412791,
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
        "consensusUpdatedAtUtc": "2026-11-03T21:00:24.004875+00:00",
        "periodCompareMethod": null,
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.6669332528111812,
        "candSpread": 1.8099021268500026,
        "fairAltExCappedGrowth": 451.00280619771246,
        "fairAltGapPct": -14.841857800353342,
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
          "per": 24.85328458412791,
          "eps": 14.9839110765,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "sector_per",
          "fairPrice": 529.6062062279041,
          "per": 23.57275,
          "eps": 22.466882575342467,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 674.006477260274,
          "per": 30.0,
          "eps": 22.466882575342467,
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
          "date": "2026-10-31",
          "prevFairPrice": 527.7071370507466,
          "newFairPrice": 528.0869508861781,
          "changePct": 0.07197436016389655,
          "epsEffect": 0.37981383543150243,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 22.3863->22.4024(적정PER 23.57배 유지 가정 시 +0.38) + 적정PER 23.57->23.57배(EPS 22.4024 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-03",
          "prevFairPrice": 528.0869508861781,
          "newFairPrice": 529.2263923924726,
          "changePct": 0.21576778301042807,
          "epsEffect": 1.1394415062944234,
          "perEffect": 7.976115826261164e-14,
          "otherEffect": 0.0,
          "note": "EPS 22.4024->22.4508(적정PER 23.57배 유지 가정 시 +1.14) + 적정PER 23.57->23.57배(EPS 22.4508 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-04",
          "prevFairPrice": 529.2263923924726,
          "newFairPrice": 529.6062062279041,
          "changePct": 0.07176774266953466,
          "epsEffect": 0.3798138354315862,
          "perEffect": -1.5963680209084762e-13,
          "otherEffect": 0.0,
          "note": "EPS 22.4508->22.4669(적정PER 23.57배 유지 가정 시 +0.38) + 적정PER 23.57->23.57배(EPS 22.4669 유지 가정 시 -0.00)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "INTC": {
      "ticker": "INTC",
      "asOf": "2026-11-04",
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
      "currentPrice": 60.54999923706055,
      "fairPrice": 52.16906639275041,
      "ratio": 1.1606494695767602,
      "bandAggressiveLe": 41.73525311420033,
      "bandDcaHigh": 46.95215975347537,
      "bandFairHigh": 57.385973032025454,
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
      "epsUsedForCandidates": 2.134528712328767,
      "ttmEps": null,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": null,
        "peTTM": null,
        "finnhubUpdated": "2026-11-03 15:20",
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
        "fairHistProxy": 25.96001800509132,
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
        "consensusUpdatedAtUtc": "2026-11-03T21:00:24.004875+00:00",
        "periodCompareMethod": "fallback_45d",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": null,
        "candSpread": 1.5888896362554956,
        "fairAltExCappedGrowth": 40.302271415637804,
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
          "fairPrice": 40.302271415637804,
          "per": 18.88111,
          "eps": 2.134528712328767,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 64.03586136986301,
          "per": 30.0,
          "eps": 2.134528712328767,
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
          "date": "2026-10-31",
          "prevFairPrice": 61.845131313103565,
          "newFairPrice": 62.39992187306247,
          "changePct": 0.8970642444757095,
          "epsEffect": 0.5547905599589031,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 2.4717->2.4939(적정PER 25.02배 유지 가정 시 +0.55) + 적정PER 25.02->25.02배(EPS 2.4939 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-03",
          "prevFairPrice": 62.39992187306247,
          "newFairPrice": 52.52656542158,
          "changePct": -15.822706431535952,
          "epsEffect": -8.624933222642468,
          "perEffect": -1.2484232288400003,
          "otherEffect": 0.0,
          "note": "EPS 2.4939->2.1492(적정PER 25.02배 유지 가정 시 -8.62) + 적정PER 25.02->24.44배(EPS 2.1492 유지 가정 시 -1.25)"
        },
        {
          "date": "2026-11-04",
          "prevFairPrice": 52.52656542158,
          "newFairPrice": 52.16906639275041,
          "changePct": -0.6806061389323559,
          "epsEffect": -0.3574990288295921,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 2.1492->2.1345(적정PER 24.44배 유지 가정 시 -0.36) + 적정PER 24.44->24.44배(EPS 2.1345 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "QCOM": {
      "ticker": "QCOM",
      "asOf": "2026-11-04",
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
      "currentPrice": 164.42999267578125,
      "fairPrice": 146.97881095139772,
      "ratio": 1.11873263643529,
      "bandAggressiveLe": 117.58304876111818,
      "bandDcaHigh": 132.28092985625796,
      "bandFairHigh": 161.6766920465375,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±48% (±40% 밖) / 사업 위험으로 신뢰도 1단계 하향(낮음→낮음): EPS 수정 방향 하향(하향)",
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
        "sectorPer": 17.03275,
        "sectorPerValidPeers": 3,
        "sectorPerEpsBasis": "NTM EPS",
        "growthPerPeg": 7.5,
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
      "epsUsedForCandidates": 10.15989,
      "ttmEps": 8.64,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 8.46656433856894,
        "peTTM": 19.4211,
        "finnhubUpdated": "2026-11-03 15:20",
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
        "gapPct": -2.007357192489123,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 146.97881095139772,
        "fairHistProxy": 147.81542630241424,
        "proxyPer": 14.548919949174078,
        "trailingPer": 17.011436452708068,
        "modelSplitEligible": false,
        "modelSplitRatio": null,
        "actionBeforeModelSplit": null,
        "modelSplitMode": "on"
      },
      "earningsStatus": {
        "latestOfficialPeriodEnd": "2026-06-28",
        "latestOfficialSource": "10-Q 2026-07-29",
        "valuationActualPeriodEnd": "2026-06-28",
        "valuationPeriods": "Q3'25~Q2'26",
        "earningsReleaseDate": null,
        "earningsReleaseAtUtc": null,
        "consensusUpdatedAtUtc": "2026-11-03T21:00:24.004875+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.850402907905499,
        "candSpread": 2.271033333333333,
        "fairAltExCappedGrowth": null,
        "fairAltGapPct": null,
        "fairAltApplicable": false,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 14.466575027032547,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 146.97881095139772,
          "per": 17.011436452708068,
          "eps": 8.64,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "sector_per",
          "fairPrice": 173.05086639750002,
          "per": 17.03275,
          "eps": 10.15989,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 76.19917500000001,
          "per": 7.5,
          "eps": 10.15989,
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
        },
        {
          "date": "2026-11-03",
          "prevFairPrice": 111.68829297569886,
          "newFairPrice": 146.97881095139772,
          "changePct": 31.59732952797244,
          "epsEffect": 0.2047069201154404,
          "perEffect": 35.08581105558343,
          "otherEffect": 0.0,
          "note": "EPS 10.1864->10.2050(적정PER 10.96배 유지 가정 시 +0.20) + 적정PER 10.96->14.40배(EPS 10.2050 유지 가정 시 +35.09)"
        }
      ],
      "nextUpdateDate": "2026-11-05"
    },
    "ARM": {
      "ticker": "ARM",
      "asOf": "2026-11-04",
      "verdict": "고평가",
      "action": "신규 추격 금지 · 모델 점검 필요(적정가/현재가 비율 2.48배)",
      "actionRaw": "신규 추격 금지 · 모델 점검 필요(적정가/현재가 비율 2.48배)",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "a_kept_one_candidate",
      "candidateBadge": "후보 1개",
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": null,
      "sectorFewPeers": null,
      "currentPrice": 202.49000549316406,
      "fairPrice": 81.77767808219178,
      "ratio": 2.476103629277034,
      "bandAggressiveLe": 65.42214246575342,
      "bandDcaHigh": 73.59991027397261,
      "bandFairHigh": 89.95544589041097,
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
      "epsUsedForCandidates": 2.7259226027397263,
      "ttmEps": 0.97,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 0.8684419446561339,
        "peTTM": 233.1647,
        "finnhubUpdated": "2026-11-03 15:20",
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
        "gapPct": -10.4699026127697,
        "gapPrevPct": 3.385945792396905,
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
        "valuationActualPeriodEnd": "2026-06-30",
        "valuationPeriods": "Q3'25~Q2'26",
        "earningsReleaseDate": null,
        "earningsReleaseAtUtc": null,
        "consensusUpdatedAtUtc": "2026-11-03T21:00:24.004875+00:00",
        "periodCompareMethod": null,
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.3558428251136287,
        "candSpread": null,
        "fairAltExCappedGrowth": null,
        "fairAltGapPct": null,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": "WO8-B 분류 불가(이력 부족, 유효 4개년 <5년) - 필터 없음(원본 그대로) - 경기순환 여부 판단 안 함, NTM EPS 그대로 사용",
      "convertedFairPer": 29.999999999999996,
      "fairPriceBasis": "적정가 후보 1개(growth_per_peg)만 사용",
      "fairPriceCandidates": [
        {
          "candidate": "growth_per_peg",
          "fairPrice": 81.77767808219178,
          "per": 30.0,
          "eps": 2.7259226027397263,
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
          "date": "2026-10-31",
          "prevFairPrice": 81.53778328767122,
          "newFairPrice": 81.60658273972604,
          "changePct": 0.08437738834779121,
          "epsEffect": 0.06879945205481518,
          "perEffect": 9.664160759319652e-15,
          "otherEffect": 0.0,
          "note": "EPS 2.7179->2.7202(적정PER 30.00배 유지 가정 시 +0.07) + 적정PER 30.00->30.00배(EPS 2.7202 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-03",
          "prevFairPrice": 81.60658273972604,
          "newFairPrice": 81.81298109589041,
          "changePct": 0.252918758799952,
          "epsEffect": 0.20639835616436564,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 2.7202->2.7271(적정PER 30.00배 유지 가정 시 +0.21) + 적정PER 30.00->30.00배(EPS 2.7271 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-04",
          "prevFairPrice": 81.81298109589041,
          "newFairPrice": 81.77767808219178,
          "changePct": -0.04315087071237006,
          "epsEffect": -0.03530301369861544,
          "perEffect": -9.68442251810489e-15,
          "otherEffect": 0.0,
          "note": "EPS 2.7271->2.7259(적정PER 30.00배 유지 가정 시 -0.04) + 적정PER 30.00->30.00배(EPS 2.7259 유지 가정 시 -0.00)"
        }
      ],
      "nextUpdateDate": "2026-11-06"
    },
    "ANET": {
      "ticker": "ANET",
      "asOf": "2026-11-04",
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
      "currentPrice": 169.91000366210938,
      "fairPrice": 151.26597615819946,
      "ratio": 1.1232532786117833,
      "bandAggressiveLe": 121.01278092655957,
      "bandDcaHigh": 136.13937854237952,
      "bandFairHigh": 166.3925737740194,
      "modelCheckNeeded": false,
      "confidence": "높음",
      "confidenceNote": "적정가 후보 모두 중앙값 ±0% 안",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "고성장형",
      "stockTypeReason": "다음 회계연도 성장률 38.1%(기준 30% 초과)",
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
            "per": 39.68224616529859
          }
        ],
        "excluded": [],
        "note": "유효 비교군 2개 이하(최소 3개 기준 미달)"
      },
      "epsUsedForCandidates": 5.049669972602739,
      "ttmEps": 3.17,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 3.2268234783091865,
        "peTTM": 52.6555,
        "finnhubUpdated": "2026-11-03 15:22",
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
        "gapPct": 1.7925387479238664,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 151.04185313831675,
        "fairHistProxy": 139.47553620951192,
        "proxyPer": 27.620723129678588,
        "trailingPer": 47.64727228338068,
        "modelSplitEligible": false,
        "modelSplitRatio": 1.002967694254618,
        "actionBeforeModelSplit": null,
        "modelSplitMode": "on"
      },
      "earningsStatus": {
        "latestOfficialPeriodEnd": "2026-06-30",
        "latestOfficialSource": "10-Q 2026-08-05",
        "valuationActualPeriodEnd": "2026-06-30",
        "valuationPeriods": "Q3'25~Q2'26",
        "earningsReleaseDate": null,
        "earningsReleaseAtUtc": null,
        "consensusUpdatedAtUtc": "2026-11-03T21:00:24.004875+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.6277637978717437,
        "candSpread": 1.002967694254618,
        "fairAltExCappedGrowth": 151.04185313831675,
        "fairAltGapPct": -0.14816485873090368,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 29.95561630342206,
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
          "fairPrice": 151.49009917808218,
          "per": 30.0,
          "eps": 5.049669972602739,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": "최대/최소 1.59배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-10-31",
          "prevFairPrice": 151.03954191162416,
          "newFairPrice": 151.0849787609392,
          "changePct": 0.03008275100677836,
          "epsEffect": 0.09087508921256177,
          "perEffect": -0.04543823989750854,
          "otherEffect": 0.0,
          "note": "EPS 5.0346->5.0376(적정PER 30.00배 유지 가정 시 +0.09) + 적정PER 30.00->29.99배(EPS 5.0376 유지 가정 시 -0.05)"
        },
        {
          "date": "2026-11-03",
          "prevFairPrice": 151.0849787609392,
          "newFairPrice": 151.22128930888442,
          "changePct": 0.09022111202788582,
          "epsEffect": 0.27254330126345766,
          "perEffect": -0.13623275331824872,
          "otherEffect": 0.0,
          "note": "EPS 5.0376->5.0467(적정PER 29.99배 유지 가정 시 +0.27) + 적정PER 29.99->29.96배(EPS 5.0467 유지 가정 시 -0.14)"
        },
        {
          "date": "2026-11-04",
          "prevFairPrice": 151.22128930888442,
          "newFairPrice": 151.26597615819946,
          "changePct": 0.029550633723115897,
          "epsEffect": 0.08926777526560999,
          "perEffect": -0.04458092595057121,
          "otherEffect": 0.0,
          "note": "EPS 5.0467->5.0497(적정PER 29.96배 유지 가정 시 +0.09) + 적정PER 29.96->29.96배(EPS 5.0497 유지 가정 시 -0.04)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "ETN": {
      "ticker": "ETN",
      "asOf": "2026-11-04",
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
      "currentPrice": 391.70001220703125,
      "fairPrice": 305.09906198601976,
      "ratio": 1.283845350612647,
      "bandAggressiveLe": 244.07924958881583,
      "bandDcaHigh": 274.5891557874178,
      "bandFairHigh": 335.60896818462174,
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
        "sectorPer": 18.66361,
        "sectorPerValidPeers": 3,
        "sectorPerEpsBasis": "NTM EPS",
        "growthPerPeg": 24.4575,
        "growthPerPegEpsBasis": "NTM EPS"
      },
      "sectorPeerDisplay": {
        "basis": "forwardPE",
        "medianPer": 18.66361,
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
            "per": 17.581057956626072
          }
        ],
        "excluded": [],
        "note": "유효 비교군 3개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 15.887679863013698,
      "ttmEps": 10.01,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 10.257659520271282,
        "peTTM": 38.1861,
        "finnhubUpdated": "2026-11-03 15:22",
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
        "gapPct": 2.4741210816311865,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 305.09906198601976,
        "fairHistProxy": 402.74433483955806,
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
        "consensusUpdatedAtUtc": "2026-11-03T21:00:24.004875+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": true
      },
      "diag": {
        "epsTtmNtmRatio": 0.630047941946712,
        "candSpread": 1.3104377984752147,
        "fairAltExCappedGrowth": null,
        "fairAltGapPct": null,
        "fairAltApplicable": false,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 19.2035001093071,
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
          "fairPrice": 296.5214607681411,
          "per": 18.66361,
          "eps": 15.887679863013698,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 388.57293024965753,
          "per": 24.4575,
          "eps": 15.887679863013698,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": false,
      "dispersionFlag": "최대/최소 1.63배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-10-31",
          "prevFairPrice": 328.45020346800493,
          "newFairPrice": 328.60321077844355,
          "changePct": 0.04658462951858987,
          "epsEffect": 0.1530073104386294,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 15.8381->15.8455(적정PER 20.74배 유지 가정 시 +0.15) + 적정PER 20.74->20.74배(EPS 15.8455 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-03",
          "prevFairPrice": 328.60321077844355,
          "newFairPrice": 299.61276516709034,
          "changePct": -8.82232572916022,
          "epsEffect": 0.45902193131588814,
          "perEffect": -29.44946754266909,
          "otherEffect": 0.0,
          "note": "EPS 15.8455->15.8676(적정PER 20.74배 유지 가정 시 +0.46) + 적정PER 20.74->18.88배(EPS 15.8676 유지 가정 시 -29.45)"
        },
        {
          "date": "2026-11-04",
          "prevFairPrice": 299.61276516709034,
          "newFairPrice": 305.09906198601976,
          "changePct": 1.831129196337739,
          "epsEffect": 0.37934470552031013,
          "perEffect": 5.106952113409109,
          "otherEffect": 0.0,
          "note": "EPS 15.8676->15.8877(적정PER 18.88배 유지 가정 시 +0.38) + 적정PER 18.88->19.20배(EPS 15.8877 유지 가정 시 +5.11)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "HUBB": {
      "ticker": "HUBB",
      "asOf": "2026-11-04",
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
      "currentPrice": 449.2699890136719,
      "fairPrice": 458.0723307193263,
      "ratio": 0.9807839480463013,
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
            "per": 17.581057956626072
          }
        ],
        "excluded": [],
        "note": "유효 비교군 3개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 22.667986821917808,
      "ttmEps": 17.060000000000002,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 17.901057042310036,
        "peTTM": 25.0974,
        "finnhubUpdated": "2026-11-03 15:23",
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
        "gapPct": 4.929994386342518,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 458.0723307193263,
        "fairHistProxy": 488.2024040684945,
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
        "consensusUpdatedAtUtc": "2026-11-03T21:00:24.004875+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.7526032255985163,
        "candSpread": 1.255660171263661,
        "fairAltExCappedGrowth": null,
        "fairAltGapPct": null,
        "fairAltApplicable": false,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 20.20789646288366,
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
          "fairPrice": 534.3270652078279,
          "per": 23.57188,
          "eps": 22.667986821917808,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 425.534772413858,
          "per": 18.77249955,
          "eps": 22.667986821917808,
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
      "asOf": "2026-11-04",
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
      "currentPrice": 235.97000122070312,
      "fairPrice": 254.17990340515314,
      "ratio": 0.928358214239211,
      "bandAggressiveLe": 203.34392272412254,
      "bandDcaHigh": 228.76191306463784,
      "bandFairHigh": 279.5978937456685,
      "modelCheckNeeded": false,
      "confidence": "보통",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±31%",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "고성장형",
      "stockTypeReason": "다음 회계연도 성장률 71.2%(기준 30% 초과)",
      "candidates": {
        "historicalPer": 47.510262318720216,
        "historicalPerYearsUsed": 3,
        "historicalPerEpsBasis": "TTM EPS",
        "sectorPer": 18.66361,
        "sectorPerValidPeers": 3,
        "sectorPerEpsBasis": "NTM EPS",
        "growthPerPeg": 30.0,
        "growthPerPegEpsBasis": "NTM EPS"
      },
      "sectorPeerDisplay": {
        "basis": "forwardPE",
        "medianPer": 18.66361,
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
            "per": 17.581057956626072
          }
        ],
        "excluded": [],
        "note": "유효 비교군 3개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 9.344060602739725,
      "ttmEps": 5.35,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 5.2470426314307375,
        "peTTM": 44.972,
        "finnhubUpdated": "2026-11-03 15:23",
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
        "gapPct": -1.9244367956871455,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 254.17990340515314,
        "fairHistProxy": 330.96733794898665,
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
        "consensusUpdatedAtUtc": "2026-11-03T21:00:24.004875+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.5725562180569925,
        "candSpread": 1.6074060698868013,
        "fairAltExCappedGrowth": 214.28690315552615,
        "fairAltGapPct": -15.69478928711333,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 27.20229611210209,
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
          "fairPrice": 174.39390290589915,
          "per": 18.66361,
          "eps": 9.344060602739725,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 280.3218180821918,
          "per": 30.0,
          "eps": 9.344060602739725,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": "최대/최소 2.55배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-10-30",
          "prevFairPrice": 244.1355577208179,
          "newFairPrice": 254.17990340515314,
          "changePct": 4.114249385917593,
          "epsEffect": 13.59192442111153,
          "perEffect": -3.5475787367762868,
          "otherEffect": 0.0,
          "note": "EPS 8.7698->9.2581(적정PER 27.84배 유지 가정 시 +13.59) + 적정PER 27.84->27.45배(EPS 9.2581 유지 가정 시 -3.55)"
        },
        {
          "date": "2026-11-03",
          "prevFairPrice": 254.17990340515314,
          "newFairPrice": 237.36501593762225,
          "changePct": -6.615348909283596,
          "epsEffect": 2.1691718239490023,
          "perEffect": -18.9840592914799,
          "otherEffect": 0.0,
          "note": "EPS 9.2581->9.3371(적정PER 27.45배 유지 가정 시 +2.17) + 적정PER 27.45->25.42배(EPS 9.3371 유지 가정 시 -18.98)"
        },
        {
          "date": "2026-11-04",
          "prevFairPrice": 237.36501593762225,
          "newFairPrice": 254.17990340515314,
          "changePct": 7.083978825232494,
          "epsEffect": 0.1776801658135728,
          "perEffect": 16.637207301717318,
          "otherEffect": 0.0,
          "note": "EPS 9.3371->9.3441(적정PER 25.42배 유지 가정 시 +0.18) + 적정PER 25.42->27.20배(EPS 9.3441 유지 가정 시 +16.64)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "MOD": {
      "ticker": "MOD",
      "asOf": "2026-11-04",
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
      "currentPrice": 125.44999694824219,
      "fairPrice": 225.81358263427563,
      "ratio": 0.5555467279017452,
      "bandAggressiveLe": 180.6508661074205,
      "bandDcaHigh": 203.2322243708481,
      "bandFairHigh": 248.3949408977032,
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
      "epsUsedForCandidates": 8.430302712328768,
      "ttmEps": 2.66,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 2.5591177000016767,
        "peTTM": 49.0208,
        "finnhubUpdated": "2026-11-03 15:23",
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
        "gapPct": -3.792567669109903,
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
        "latestOfficialPeriodEnd": "2026-06-30",
        "latestOfficialSource": "10-Q 2026-07-30",
        "valuationActualPeriodEnd": "2026-06-30",
        "valuationPeriods": "Q3'25~Q2'26",
        "earningsReleaseDate": null,
        "earningsReleaseAtUtc": null,
        "consensusUpdatedAtUtc": "2026-11-03T21:00:24.004875+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.31552840873791205,
        "candSpread": 1.2727028985384279,
        "fairAltExCappedGrowth": 198.71808389868823,
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
          "fairPrice": 198.71808389868823,
          "per": 23.57188,
          "eps": 8.430302712328768,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 252.90908136986303,
          "per": 30.0,
          "eps": 8.430302712328768,
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
          "date": "2026-10-31",
          "prevFairPrice": 249.4657569410482,
          "newFairPrice": 244.80202269865808,
          "changePct": -1.8694887424939115,
          "epsEffect": -4.66373424239013,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 8.5568->8.3968(적정PER 29.15배 유지 가정 시 -4.66) + 적정PER 29.15->29.15배(EPS 8.3968 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-03",
          "prevFairPrice": 244.80202269865808,
          "newFairPrice": 225.58951054063124,
          "changePct": -7.848183583710297,
          "epsEffect": 0.7316462960531366,
          "perEffect": -19.944158454079947,
          "otherEffect": 0.0,
          "note": "EPS 8.3968->8.4219(적정PER 29.15배 유지 가정 시 +0.73) + 적정PER 29.15->26.79배(EPS 8.4219 유지 가정 시 -19.94)"
        },
        {
          "date": "2026-11-04",
          "prevFairPrice": 225.58951054063124,
          "newFairPrice": 225.81358263427563,
          "changePct": 0.09932735485236005,
          "epsEffect": 0.22407209364441102,
          "perEffect": -2.995045176251938e-14,
          "otherEffect": 0.0,
          "note": "EPS 8.4219->8.4303(적정PER 26.79배 유지 가정 시 +0.22) + 적정PER 26.79->26.79배(EPS 8.4303 유지 가정 시 -0.00)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "PWR": {
      "ticker": "PWR",
      "asOf": "2026-11-04",
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
      "currentPrice": 657.0,
      "fairPrice": 476.4864067382812,
      "ratio": 1.3788431122251703,
      "bandAggressiveLe": 381.18912539062495,
      "bandDcaHigh": 428.8377660644531,
      "bandFairHigh": 524.1350474121093,
      "modelCheckNeeded": false,
      "confidence": "보통",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±32%",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "고성장형",
      "stockTypeReason": "다음 회계연도 성장률 68.9%(기준 30% 초과)",
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
            "per": 21.213202040723832
          }
        ],
        "excluded": [],
        "note": "유효 비교군 3개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 20.962534849315066,
      "ttmEps": 11.04,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 9.320642883185533,
        "peTTM": 70.4887,
        "finnhubUpdated": "2026-11-03 15:23",
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
        "gapPct": -15.57388692766727,
        "gapPrevPct": 6.765668765011834,
        "gapCause": "period",
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 476.4864067382812,
        "fairHistProxy": 723.9651574064943,
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
        "consensusUpdatedAtUtc": "2026-11-03T21:00:24.004875+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.5266538650673118,
        "candSpread": 1.5460148118525738,
        "fairAltExCappedGrowth": 441.62936780241535,
        "fairAltGapPct": -7.315431970971565,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 22.730381137749188,
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
          "fairPrice": 406.77232886654957,
          "per": 19.40473,
          "eps": 20.962534849315066,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 628.8760454794519,
          "per": 30.0,
          "eps": 20.962534849315066,
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
      "asOf": "2026-11-04",
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
      "currentPrice": 707.4299926757812,
      "fairPrice": 831.2028335147023,
      "ratio": 0.8510918925582178,
      "bandAggressiveLe": 664.9622668117619,
      "bandDcaHigh": 748.0825501632321,
      "bandFairHigh": 914.3231168661727,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±41% (±40% 밖)",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "고성장형",
      "stockTypeReason": "다음 회계연도 성장률 34.5%(기준 30% 초과)",
      "candidates": {
        "historicalPer": 18.28518526053723,
        "historicalPerYearsUsed": 5,
        "historicalPerEpsBasis": "TTM EPS",
        "sectorPer": 21.213202040723832,
        "sectorPerValidPeers": 3,
        "sectorPerEpsBasis": "NTM EPS",
        "growthPerPeg": 30.0,
        "growthPerPegEpsBasis": "NTM EPS"
      },
      "sectorPeerDisplay": {
        "basis": "forwardPE",
        "medianPer": 21.213202040723832,
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
            "per": 21.213202040723832
          }
        ],
        "excluded": [],
        "note": "유효 비교군 3개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 39.183279917808214,
      "ttmEps": 34.62,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 36.00885639192615,
        "peTTM": 19.646,
        "finnhubUpdated": "2026-11-03 15:58",
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
        "gapPct": 4.01171690331068,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 633.0331137197988,
        "fairHistProxy": 507.60662116280105,
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
        "consensusUpdatedAtUtc": "2026-11-03T21:00:24.004875+00:00",
        "periodCompareMethod": "fallback_45d",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.8835401240687287,
        "candSpread": 1.8569303438596427,
        "fairAltExCappedGrowth": 732.1179736172505,
        "fairAltGapPct": -11.920659543288137,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 21.213202040723832,
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
          "fairPrice": 831.2028335147023,
          "per": 21.213202040723832,
          "eps": 39.183279917808214,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 1175.4983975342464,
          "per": 30.0,
          "eps": 39.183279917808214,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": "최대/최소 1.64배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-10-31",
          "prevFairPrice": 1060.4869582811268,
          "newFairPrice": 1092.032959456835,
          "changePct": 2.9746712988190818,
          "epsEffect": null,
          "perEffect": null,
          "otherEffect": 31.54600117570817,
          "note": "기타(종목유형 변경: 기타 -> 고성장형)"
        },
        {
          "date": "2026-11-03",
          "prevFairPrice": 1092.032959456835,
          "newFairPrice": 781.6955070046151,
          "changePct": -28.41832288712039,
          "epsEffect": 12.786840129488386,
          "perEffect": -323.12429258170823,
          "otherEffect": 0.0,
          "note": "EPS 38.2987->38.7471(적정PER 28.51배 유지 가정 시 +12.79) + 적정PER 28.51->20.17배(EPS 38.7471 유지 가정 시 -323.12)"
        },
        {
          "date": "2026-11-04",
          "prevFairPrice": 781.6955070046151,
          "newFairPrice": 831.2028335147023,
          "changePct": 6.333326220563129,
          "epsEffect": 8.799550586610891,
          "perEffect": 40.70777592347628,
          "otherEffect": 0.0,
          "note": "EPS 38.7471->39.1833(적정PER 20.17배 유지 가정 시 +8.80) + 적정PER 20.17->21.21배(EPS 39.1833 유지 가정 시 +40.71)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "FIX": {
      "ticker": "FIX",
      "asOf": "2026-11-04",
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
      "currentPrice": 1285.1300048828125,
      "fairPrice": 1364.5757829497575,
      "ratio": 0.9417798710341981,
      "bandAggressiveLe": 1091.660626359806,
      "bandDcaHigh": 1228.1182046547817,
      "bandFairHigh": 1501.0333612447334,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±41% (±40% 밖)",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "고성장형",
      "stockTypeReason": "다음 회계연도 성장률 76.4%(기준 30% 초과)",
      "candidates": {
        "historicalPer": 25.175573140306934,
        "historicalPerYearsUsed": 5,
        "historicalPerEpsBasis": "TTM EPS",
        "sectorPer": 21.213202040723832,
        "sectorPerValidPeers": 3,
        "sectorPerEpsBasis": "NTM EPS",
        "growthPerPeg": 30.0,
        "growthPerPegEpsBasis": "NTM EPS"
      },
      "sectorPeerDisplay": {
        "basis": "forwardPE",
        "medianPer": 21.213202040723832,
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
            "per": 21.213202040723832
          }
        ],
        "excluded": [],
        "note": "유효 비교군 3개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 64.32672353424658,
      "ttmEps": 46.32,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 48.009040659088576,
        "peTTM": 26.7685,
        "finnhubUpdated": "2026-11-03 15:23",
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
        "gapPct": 3.6464608356834516,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 1166.1325478590172,
        "fairHistProxy": 906.169665171421,
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
        "consensusUpdatedAtUtc": "2026-11-03T21:00:24.004875+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.7200739825546987,
        "candSpread": 1.6548733757328469,
        "fairAltExCappedGrowth": 1265.3541654043875,
        "fairAltGapPct": -7.271242739694972,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 21.213202040723832,
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
          "fairPrice": 1364.5757829497575,
          "per": 21.213202040723832,
          "eps": 64.32672353424658,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 1929.8017060273974,
          "per": 30.0,
          "eps": 64.32672353424658,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": null,
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-10-31",
          "prevFairPrice": 1353.708353212002,
          "newFairPrice": 1354.633705276686,
          "changePct": 0.06835682608357242,
          "epsEffect": 0.9253520646839535,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 64.3295->64.3735(적정PER 21.04배 유지 가정 시 +0.93) + 적정PER 21.04->21.04배(EPS 64.3735 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-03",
          "prevFairPrice": 1354.633705276686,
          "newFairPrice": 1296.86907168213,
          "changePct": -4.264225330400849,
          "epsEffect": -1.898334765799615,
          "perEffect": -55.866298828756456,
          "otherEffect": 0.0,
          "note": "EPS 64.3735->64.2832(적정PER 21.04배 유지 가정 시 -1.90) + 적정PER 21.04->20.17배(EPS 64.2832 유지 가정 시 -55.87)"
        },
        {
          "date": "2026-11-04",
          "prevFairPrice": 1296.86907168213,
          "newFairPrice": 1364.5757829497575,
          "changePct": 5.220782324603297,
          "epsEffect": 0.8772408145067647,
          "perEffect": 66.82947045312059,
          "otherEffect": 0.0,
          "note": "EPS 64.2832->64.3267(적정PER 20.17배 유지 가정 시 +0.88) + 적정PER 20.17->21.21배(EPS 64.3267 유지 가정 시 +66.83)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "COHR": {
      "ticker": "COHR",
      "asOf": "2026-11-04",
      "verdict": "매수",
      "action": "관망(모델 민감도 높음)",
      "actionRaw": "분할매수",
      "actionCapReason": "model_split",
      "cashflowVeto": true,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "a_kept_two_candidates",
      "candidateBadge": "후보 2개",
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": null,
      "sectorFewPeers": null,
      "currentPrice": 207.49000549316406,
      "fairPrice": 232.58521095285232,
      "ratio": 0.8921031764793707,
      "bandAggressiveLe": 186.06816876228186,
      "bandDcaHigh": 209.3266898575671,
      "bandFairHigh": 255.84373204813758,
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
      "epsUsedForCandidates": 11.000667123287672,
      "ttmEps": 4.109999999999999,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 4.032706445511412,
        "peTTM": 51.4518,
        "finnhubUpdated": "2026-11-03 15:22",
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
        "gapPct": -1.8806217637125977,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 135.15040820707455,
        "fairHistProxy": 238.1964815526897,
        "proxyPer": 21.652912399143847,
        "trailingPer": 32.88331099928821,
        "modelSplitEligible": true,
        "modelSplitRatio": 2.4418721191946426,
        "actionBeforeModelSplit": "분할매수",
        "modelSplitMode": "on"
      },
      "earningsStatus": {
        "latestOfficialPeriodEnd": "2026-06-30",
        "latestOfficialSource": "10-K 2026-08-14",
        "valuationActualPeriodEnd": "2026-06-30",
        "valuationPeriods": "Q3'25~Q2'26",
        "earningsReleaseDate": null,
        "earningsReleaseAtUtc": null,
        "consensusUpdatedAtUtc": "2026-11-03T21:00:24.004875+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.37361370487244416,
        "candSpread": 2.4418721191946426,
        "fairAltExCappedGrowth": 135.15040820707455,
        "fairAltGapPct": -41.892088644246996,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 21.14282782545843,
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
          "fairPrice": 330.0200136986301,
          "per": 30.0,
          "eps": 11.000667123287672,
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
          "date": "2026-10-31",
          "prevFairPrice": 231.17201903504412,
          "newFairPrice": 223.29439774387464,
          "changePct": -3.407688060195244,
          "epsEffect": 0.26183255330451843,
          "perEffect": -8.139453844474009,
          "otherEffect": 0.0,
          "note": "EPS 10.9065->10.9188(적정PER 21.20배 유지 가정 시 +0.26) + 적정PER 21.20->20.45배(EPS 10.9188 유지 가정 시 -8.14)"
        },
        {
          "date": "2026-11-03",
          "prevFairPrice": 223.29439774387464,
          "newFairPrice": 231.9131982131263,
          "changePct": 3.8598373073101793,
          "epsEffect": 0.7578719608036528,
          "perEffect": 7.860928508448013,
          "otherEffect": 0.0,
          "note": "EPS 10.9188->10.9559(적정PER 20.45배 유지 가정 시 +0.76) + 적정PER 20.45->21.17배(EPS 10.9559 유지 가정 시 +7.86)"
        },
        {
          "date": "2026-11-04",
          "prevFairPrice": 231.9131982131263,
          "newFairPrice": 232.58521095285232,
          "changePct": 0.28976907951071174,
          "epsEffect": 0.9483420103442433,
          "perEffect": -0.2763292706182339,
          "otherEffect": 0.0,
          "note": "EPS 10.9559->11.0007(적정PER 21.17배 유지 가정 시 +0.95) + 적정PER 21.17->21.14배(EPS 11.0007 유지 가정 시 -0.28)"
        }
      ],
      "nextUpdateDate": "2026-11-05"
    },
    "LITE": {
      "ticker": "LITE",
      "asOf": "2026-11-04",
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
      "currentPrice": 680.1599731445312,
      "fairPrice": 883.6643030136986,
      "ratio": 0.7697040276775641,
      "bandAggressiveLe": 706.9314424109589,
      "bandDcaHigh": 795.2978727123287,
      "bandFairHigh": 972.0307333150686,
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
            "per": 21.12401747435352
          },
          {
            "ticker": "AAOI",
            "per": 17.8492
          }
        ],
        "excluded": [],
        "note": "유효 비교군 2개 이하(최소 3개 기준 미달)"
      },
      "epsUsedForCandidates": 29.455476767123287,
      "ttmEps": null,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": null,
        "peTTM": null,
        "finnhubUpdated": "2026-11-03 15:22",
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
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": null,
        "fairHistProxy": 898.981148364289,
        "proxyPer": 30.51999991280692,
        "trailingPer": 29.03731331896426,
        "modelSplitEligible": false,
        "modelSplitRatio": null,
        "actionBeforeModelSplit": null,
        "modelSplitMode": "on"
      },
      "earningsStatus": {
        "latestOfficialPeriodEnd": "2026-06-30",
        "latestOfficialSource": "8-K(실적) 2026-11-02",
        "valuationActualPeriodEnd": "2026-06-27",
        "valuationPeriods": "Q3'25~Q2'26",
        "earningsReleaseDate": "2026-11-02",
        "earningsReleaseAtUtc": "2026-11-03T04:59:00+00:00",
        "consensusUpdatedAtUtc": "2026-11-03T21:00:24.004875+00:00",
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
          "fairPrice": 883.6643030136986,
          "per": 30.0,
          "eps": 29.455476767123287,
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
          "date": "2026-10-31",
          "prevFairPrice": 793.4260463013699,
          "newFairPrice": 795.0549410958905,
          "changePct": 0.205298880987572,
          "epsEffect": 1.628894794520619,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 26.4475->26.5018(적정PER 30.00배 유지 가정 시 +1.63) + 적정PER 30.00->30.00배(EPS 26.5018 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-03",
          "prevFairPrice": 795.0549410958905,
          "newFairPrice": 798.481783561644,
          "changePct": 0.43101957973243327,
          "epsEffect": 3.426842465753488,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 26.5018->26.6161(적정PER 30.00배 유지 가정 시 +3.43) + 적정PER 30.00->30.00배(EPS 26.6161 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-04",
          "prevFairPrice": 798.481783561644,
          "newFairPrice": 883.6643030136986,
          "changePct": 10.668060462456177,
          "epsEffect": 85.18251945205463,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 26.6161->29.4555(적정PER 30.00배 유지 가정 시 +85.18) + 적정PER 30.00->30.00배(EPS 29.4555 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2026-11-06"
    },
    "CEG": {
      "ticker": "CEG",
      "asOf": "2026-11-04",
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
      "currentPrice": 263.3999938964844,
      "fairPrice": 239.3795197081423,
      "ratio": 1.1003447338253016,
      "bandAggressiveLe": 191.50361576651386,
      "bandDcaHigh": 215.44156773732809,
      "bandFairHigh": 263.31747167895657,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±66% (±40% 밖)",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "고성장형",
      "stockTypeReason": "다음 회계연도 성장률 30.1%(기준 30% 초과)",
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
      "epsUsedForCandidates": 13.24347517808219,
      "ttmEps": 10.26,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 10.013457490191236,
        "peTTM": 26.3046,
        "finnhubUpdated": "2026-11-03 15:22",
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
        "gapPct": -2.4029484386819067,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 239.3795197081423,
        "fairHistProxy": 227.88822015522996,
        "proxyPer": 17.207584647599333,
        "trailingPer": 23.331337203522644,
        "modelSplitEligible": false,
        "modelSplitRatio": null,
        "actionBeforeModelSplit": null,
        "modelSplitMode": "on"
      },
      "earningsStatus": {
        "latestOfficialPeriodEnd": "2026-06-30",
        "latestOfficialSource": "10-Q 2026-08-06",
        "valuationActualPeriodEnd": "2026-06-30",
        "valuationPeriods": "Q3'25~Q2'26",
        "earningsReleaseDate": null,
        "earningsReleaseAtUtc": null,
        "consensusUpdatedAtUtc": "2026-11-03T21:00:24.004875+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.7747211258401563,
        "candSpread": 2.521559332291089,
        "fairAltExCappedGrowth": 198.47122064592867,
        "fairAltGapPct": -17.089306182955877,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 18.075279825669387,
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
          "fairPrice": 157.56292158371505,
          "per": 11.8974,
          "eps": 13.24347517808219,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 397.30425534246575,
          "per": 30.0,
          "eps": 13.24347517808219,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": "최대/최소 2.52배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
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
      "asOf": "2026-11-04",
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
      "currentPrice": 139.58999633789062,
      "fairPrice": 120.9595085185315,
      "ratio": 1.1540225158612054,
      "bandAggressiveLe": 96.76760681482521,
      "bandDcaHigh": 108.86355766667836,
      "bandFairHigh": 133.05545937038468,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±152% (±40% 밖) / 사업 위험으로 신뢰도 1단계 하향(낮음→낮음): 현금흐름 거부권 발동(2/3: FCF 2년 연속 악화(3.8B→2.5B→1.3B), 부채/자본 3.74); EPS 수정 방향 하향(하향)",
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
      "epsUsedForCandidates": 10.16688591780822,
      "ttmEps": 6.577360024967988,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 6.577360024967988,
        "peTTM": 21.2228,
        "finnhubUpdated": "2026-11-03 15:22",
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
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 99.46992083634242,
        "fairHistProxy": 125.11828626519109,
        "proxyPer": 12.306451284757223,
        "trailingPer": 15.123076805701622,
        "modelSplitEligible": false,
        "modelSplitRatio": null,
        "actionBeforeModelSplit": null,
        "modelSplitMode": "on"
      },
      "earningsStatus": {
        "latestOfficialPeriodEnd": "2026-06-30",
        "latestOfficialSource": "10-Q 2026-08-10",
        "valuationActualPeriodEnd": "2026-06-30",
        "valuationPeriods": "Q3'25~Q2'26",
        "earningsReleaseDate": null,
        "earningsReleaseAtUtc": null,
        "consensusUpdatedAtUtc": "2026-11-03T21:00:24.004875+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.646939493384808,
        "candSpread": 3.066319697148176,
        "fairAltExCappedGrowth": 110.21471467743697,
        "fairAltGapPct": -8.88296750928711,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 11.8974,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 99.46992083634242,
          "per": 15.123076805701622,
          "eps": 6.577360024967988,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "sector_per",
          "fairPrice": 120.9595085185315,
          "per": 11.8974,
          "eps": 10.16688591780822,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 305.00657753424656,
          "per": 30.0,
          "eps": 10.16688591780822,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": "최대/최소 2.52배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [
        "⚠ 사업 경고(현금흐름/EPS 하향): 현금흐름 거부권 발동(2/3: FCF 2년 연속 악화(3.8B→2.5B→1.3B), 부채/자본 3.74); EPS 수정 방향 하향(하향)"
      ],
      "recentChanges": [
        {
          "date": "2026-10-31",
          "prevFairPrice": 104.58757106430905,
          "newFairPrice": 104.99876933804931,
          "changePct": 0.3931617012956825,
          "epsEffect": 0.4111982737402751,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 10.1556->10.1956(적정PER 10.30배 유지 가정 시 +0.41) + 적정PER 10.30->10.30배(EPS 10.1956 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-03",
          "prevFairPrice": 104.99876933804931,
          "newFairPrice": 120.9251325295233,
          "changePct": 15.168142723842962,
          "epsEffect": -0.32505416896656775,
          "perEffect": 16.251417360440545,
          "otherEffect": 0.0,
          "note": "EPS 10.1956->10.1640(적정PER 10.30배 유지 가정 시 -0.33) + 적정PER 10.30->11.90배(EPS 10.1640 유지 가정 시 +16.25)"
        },
        {
          "date": "2026-11-04",
          "prevFairPrice": 120.9251325295233,
          "newFairPrice": 120.9595085185315,
          "changePct": 0.02842749748470891,
          "epsEffect": 0.03437598900820852,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 10.1640->10.1669(적정PER 11.90배 유지 가정 시 +0.03) + 적정PER 11.90->11.90배(EPS 10.1669 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2026-11-09"
    },
    "GEV": {
      "ticker": "GEV",
      "asOf": "2026-11-04",
      "verdict": "고평가",
      "action": "신규 추격 금지",
      "actionRaw": "신규 추격 금지",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": 1303.5692202853909,
      "fairBasisMode": "a_kept_b_higher",
      "candidateBadge": null,
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": "median",
      "sectorFewPeers": true,
      "currentPrice": 918.2000122070312,
      "fairPrice": 776.4111,
      "ratio": 1.1826209236408793,
      "bandAggressiveLe": 621.1288800000001,
      "bandDcaHigh": 698.76999,
      "bandFairHigh": 854.0522100000001,
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
      "epsUsedForCandidates": 25.88037,
      "ttmEps": 41.92311260190993,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 41.92311260190993,
        "peTTM": 21.902,
        "finnhubUpdated": "2026-11-03 15:22",
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
        "gapPct": 10.005543431933695,
        "gapPrevPct": 19.98601202607304,
        "gapCause": "definition_unexplained",
        "source": "finnhub_peTTM(차이 원인 미확인 - 검증 전 유지)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 2010.082445529982,
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
        "consensusUpdatedAtUtc": "2026-11-03T21:00:24.004875+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 1.6198807282086742,
        "candSpread": 3.3666564982613103,
        "fairAltExCappedGrowth": 1303.5692202853909,
        "fairAltGapPct": 67.89677791641449,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": "WO8-B 분류 불가(이력 부족, 유효 4개년 <5년) - 필터 없음(원본 그대로) - 경기순환 여부 판단 안 함, NTM EPS 그대로 사용",
      "convertedFairPer": 30.000000000000004,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 2010.082445529982,
          "per": 47.94687991364474,
          "eps": 41.92311260190993,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "sector_per",
          "fairPrice": 597.0559950408,
          "per": 23.06984,
          "eps": 25.88037,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 776.4111,
          "per": 30.0,
          "eps": 25.88037,
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
          "date": "2026-10-31",
          "prevFairPrice": 763.3803,
          "newFairPrice": 767.9871,
          "changePct": 0.6034737862635465,
          "epsEffect": 4.606799999999964,
          "perEffect": 9.094794251041094e-14,
          "otherEffect": 0.0,
          "note": "EPS 25.4460->25.5996(적정PER 30.00배 유지 가정 시 +4.61) + 적정PER 30.00->30.00배(EPS 25.5996 유지 가정 시 +0.00)"
        },
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
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "BE": {
      "ticker": "BE",
      "asOf": "2026-11-04",
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
      "currentPrice": 214.00999450683594,
      "fairPrice": 150.0851219178082,
      "ratio": 1.4259241140773113,
      "bandAggressiveLe": 120.06809753424658,
      "bandDcaHigh": 135.07660972602739,
      "bandFairHigh": 165.09363410958903,
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
      "epsUsedForCandidates": 5.002837397260274,
      "ttmEps": 1.8998066948798689,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 1.8998066948798689,
        "peTTM": 112.6483,
        "finnhubUpdated": "2026-11-03 15:24",
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
        "gapPct": 16.5525579680901,
        "gapPrevPct": 153.30755931731582,
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
        "latestOfficialPeriodEnd": "2026-09-30",
        "latestOfficialSource": "10-Q 2026-10-22",
        "valuationActualPeriodEnd": "2026-09-30",
        "valuationPeriods": "Q4'25~Q3'26",
        "earningsReleaseDate": "2026-10-22",
        "earningsReleaseAtUtc": "2026-10-23T04:59:00+00:00",
        "consensusUpdatedAtUtc": "2026-11-03T21:00:24.004875+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.37974584101419495,
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
          "fairPrice": 150.0851219178082,
          "per": 30.0,
          "eps": 5.002837397260274,
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
          "date": "2026-10-31",
          "prevFairPrice": 148.87702356164385,
          "newFairPrice": 149.04517479452056,
          "changePct": 0.11294639619597537,
          "epsEffect": 0.16815123287670986,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 4.9626->4.9682(적정PER 30.00배 유지 가정 시 +0.17) + 적정PER 30.00->30.00배(EPS 4.9682 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-03",
          "prevFairPrice": 149.04517479452056,
          "newFairPrice": 149.9160205479452,
          "changePct": 0.584283090428944,
          "epsEffect": 0.870845753424625,
          "perEffect": 1.7753623229067395e-14,
          "otherEffect": 0.0,
          "note": "EPS 4.9682->4.9972(적정PER 30.00배 유지 가정 시 +0.87) + 적정PER 30.00->30.00배(EPS 4.9972 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-04",
          "prevFairPrice": 149.9160205479452,
          "newFairPrice": 150.0851219178082,
          "changePct": 0.11279739766632828,
          "epsEffect": 0.16910136986302507,
          "perEffect": -3.554729770812254e-14,
          "otherEffect": 0.0,
          "note": "EPS 4.9972->5.0028(적정PER 30.00배 유지 가정 시 +0.17) + 적정PER 30.00->30.00배(EPS 5.0028 유지 가정 시 -0.00)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "AAPL": {
      "ticker": "AAPL",
      "asOf": "2026-11-04",
      "verdict": "고평가",
      "action": "신규 추격 금지",
      "actionRaw": "신규 추격 금지",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": 286.929505479452,
      "fairPriceB": 245.34012586298303,
      "fairBasisMode": "ex_capped_growth_floor_b",
      "candidateBadge": null,
      "lowConfidenceCapEligible": false,
      "sectorPerMethod": "median",
      "sectorFewPeers": true,
      "currentPrice": 331.8999938964844,
      "fairPrice": 245.34012586298303,
      "ratio": 1.352815780659716,
      "bandAggressiveLe": 196.27210069038642,
      "bandDcaHigh": 220.80611327668473,
      "bandFairHigh": 269.87413844928136,
      "modelCheckNeeded": false,
      "confidence": "보통",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±21%",
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
      "epsUsedForCandidates": 9.564316849315068,
      "ttmEps": 8.689300402563708,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 8.689300402563708,
        "peTTM": 38.1964,
        "finnhubUpdated": "2026-11-03 15:19",
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
        "fairHistTrailing": 297.55613125706884,
        "fairHistProxy": 269.3267684185503,
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
        "consensusUpdatedAtUtc": "2026-11-03T21:00:24.004875+00:00",
        "periodCompareMethod": "fallback_45d",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.908512394503741,
        "candSpread": 1.5407507386162593,
        "fairAltExCappedGrowth": 245.34012586298303,
        "fairAltGapPct": 0.0,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 25.651610013375148,
      "fairPriceBasis": "B안: 성장 PER 상한 후보 제외, 나머지 두 후보의 평균 (A안 상한 포함 $286.93, 낮은 쪽 적용)",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 297.55613125706884,
          "per": 34.243968728400425,
          "eps": 8.689300402563708,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "sector_per",
          "fairPrice": 193.12412046889722,
          "per": 20.192149999999998,
          "eps": 9.564316849315068,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 286.929505479452,
          "per": 30.0,
          "eps": 9.564316849315068,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": "최대/최소 1.70배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-10-31",
          "prevFairPrice": 215.609239469,
          "newFairPrice": 215.145408736,
          "changePct": -0.21512562919024136,
          "epsEffect": -0.46383073299999894,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 9.5758->9.5552(적정PER 22.52배 유지 가정 시 -0.46) + 적정PER 22.52->22.52배(EPS 9.5552 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-03",
          "prevFairPrice": 215.145408736,
          "newFairPrice": 193.21262570499997,
          "changePct": -10.194399759612466,
          "epsEffect": 0.30396674250001154,
          "perEffect": -22.236749773500033,
          "otherEffect": 0.0,
          "note": "EPS 9.5552->9.5687(적정PER 22.52배 유지 가정 시 +0.30) + 적정PER 22.52->20.19배(EPS 9.5687 유지 가정 시 -22.24)"
        },
        {
          "date": "2026-11-04",
          "prevFairPrice": 193.21262570499997,
          "newFairPrice": 245.34012586298303,
          "changePct": 26.979344630185885,
          "epsEffect": -0.08850523610274748,
          "perEffect": 52.21600539408581,
          "otherEffect": 0.0,
          "note": "EPS 9.5687->9.5643(적정PER 20.19배 유지 가정 시 -0.09) + 적정PER 20.19->25.65배(EPS 9.5643 유지 가정 시 +52.22)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "MSFT": {
      "ticker": "MSFT",
      "asOf": "2026-11-04",
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
      "currentPrice": 520.989990234375,
      "fairPrice": 589.4694052613013,
      "ratio": 0.8838287205142215,
      "bandAggressiveLe": 471.5755242090411,
      "bandDcaHigh": 530.5224647351712,
      "bandFairHigh": 648.4163457874315,
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
        "growthPerPeg": 27.472499999999997,
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
      "epsUsedForCandidates": 21.45670780821918,
      "ttmEps": 19.16,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 19.172581953667517,
        "peTTM": 27.1737,
        "finnhubUpdated": "2026-11-03 15:19",
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
        "gapPct": 0.06566781663630561,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 674.0440665000726,
        "fairHistProxy": 602.3442501849972,
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
        "consensusUpdatedAtUtc": "2026-11-03T21:00:24.004875+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.8929608480132537,
        "candSpread": 1.555760135800637,
        "fairAltExCappedGrowth": null,
        "fairAltGapPct": null,
        "fairAltApplicable": false,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 27.472499999999997,
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
          "fairPrice": 433.25706256973285,
          "per": 20.192149999999998,
          "eps": 21.45670780821918,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 589.4694052613013,
          "per": 27.472499999999997,
          "eps": 21.45670780821918,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": false,
      "dispersionFlag": "최대/최소 1.74배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-10-31",
          "prevFairPrice": 541.1649696920547,
          "newFairPrice": 584.5866271396122,
          "changePct": 8.023737654761037,
          "epsEffect": 8.58088757260274,
          "perEffect": 34.84076987495479,
          "otherEffect": 0.0,
          "note": "EPS 21.0734->21.4075(적정PER 25.68배 유지 가정 시 +8.58) + 적정PER 25.68->27.31배(EPS 21.4075 유지 가정 시 +34.84)"
        },
        {
          "date": "2026-11-03",
          "prevFairPrice": 584.5866271396122,
          "newFairPrice": 590.9511844583385,
          "changePct": 1.0887278331815606,
          "epsEffect": 1.3755902116714758,
          "perEffect": 4.9889671070548305,
          "otherEffect": 0.0,
          "note": "EPS 21.4075->21.4579(적정PER 27.31배 유지 가정 시 +1.38) + 적정PER 27.31->27.54배(EPS 21.4579 유지 가정 시 +4.99)"
        },
        {
          "date": "2026-11-04",
          "prevFairPrice": 590.9511844583385,
          "newFairPrice": 589.4694052613013,
          "changePct": -0.2507447714814889,
          "epsEffect": -0.03346751251317161,
          "perEffect": -1.4483116845240338,
          "otherEffect": 0.0,
          "note": "EPS 21.4579->21.4567(적정PER 27.54배 유지 가정 시 -0.03) + 적정PER 27.54->27.47배(EPS 21.4567 유지 가정 시 -1.45)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "GOOGL": {
      "ticker": "GOOGL",
      "asOf": "2026-11-04",
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
      "currentPrice": 280.0299987792969,
      "fairPrice": 345.39405656,
      "ratio": 0.8107551171212801,
      "bandAggressiveLe": 276.31524524800005,
      "bandDcaHigh": 310.85465090400004,
      "bandFairHigh": 379.93346221600007,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "EPS 품질 경고: EPS 일회성 정상화 적용; 다음회계연도 대안 기준 사용; 과거 PER 중 일회성 정상화 적용된 연도 있음",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "고성장형",
      "stockTypeReason": "다음 회계연도 성장률 82.3%(기준 30% 초과)",
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
      "epsUsedForCandidates": 14.9296,
      "ttmEps": 10.950000000000001,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 19.007249048334117,
        "peTTM": 14.7328,
        "finnhubUpdated": "2026-11-03 15:58",
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
        "gapPct": -0.7972387874002229,
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
        "fairHistProxy": 259.39251995637056,
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
        "consensusUpdatedAtUtc": "2026-11-03T21:00:24.004875+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.7334422891437146,
        "candSpread": 1.6983139473532858,
        "fairAltExCappedGrowth": 304.5595736880516,
        "fairAltGapPct": -11.822578326519306,
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
          "fairPrice": 345.39405656,
          "per": 23.13485,
          "eps": 14.9296,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 447.88800000000003,
          "per": 30.0,
          "eps": 14.9296,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": null,
      "qualityWarnings": [
        "EPS 일회성 정상화 적용",
        "다음회계연도 대안 기준 사용",
        "과거 PER 중 일회성 정상화 적용된 연도 있음"
      ],
      "recentChanges": [
        {
          "date": "2026-10-31",
          "prevFairPrice": 406.77682072741584,
          "newFairPrice": 404.87247953261584,
          "changePct": -0.46815381254875144,
          "epsEffect": -4.400187339156412,
          "perEffect": 2.4958461443564173,
          "otherEffect": 0.0,
          "note": "EPS 15.0020->14.8398(적정PER 27.11배 유지 가정 시 -4.40) + 적정PER 27.11->27.28배(EPS 14.8398 유지 가정 시 +2.50)"
        },
        {
          "date": "2026-11-03",
          "prevFairPrice": 404.87247953261584,
          "newFairPrice": 402.38704400386587,
          "changePct": -0.6138810747569599,
          "epsEffect": 0.0,
          "perEffect": -2.4854355287499885,
          "otherEffect": 0.0,
          "note": "EPS 14.8398->14.8398(적정PER 27.28배 유지 가정 시 +0.00) + 적정PER 27.28->27.12배(EPS 14.8398 유지 가정 시 -2.49)"
        },
        {
          "date": "2026-11-04",
          "prevFairPrice": 402.38704400386587,
          "newFairPrice": 345.39405656,
          "changePct": -14.163723284122016,
          "epsEffect": 2.4363264814937873,
          "perEffect": -59.429313925359615,
          "otherEffect": 0.0,
          "note": "EPS 14.8398->14.9296(적정PER 27.12배 유지 가정 시 +2.44) + 적정PER 27.12->23.13배(EPS 14.9296 유지 가정 시 -59.43)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "META": {
      "ticker": "META",
      "asOf": "2026-11-04",
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
      "currentPrice": 621.030029296875,
      "fairPrice": 767.5056075861137,
      "ratio": 0.8091537353714979,
      "bandAggressiveLe": 614.004486068891,
      "bandDcaHigh": 690.7550468275024,
      "bandFairHigh": 844.2561683447251,
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
      "epsUsedForCandidates": 33.175300794520545,
      "ttmEps": 29.33,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 29.72644517133164,
        "peTTM": 20.8915,
        "finnhubUpdated": "2026-11-03 15:19",
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
        "gapPct": 1.3516712285429389,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 716.4230703715406,
        "fairHistProxy": 658.1093163778369,
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
        "consensusUpdatedAtUtc": "2026-11-03T21:00:24.004875+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.8840914565225084,
        "candSpread": 1.389205715164184,
        "fairAltExCappedGrowth": 741.9643389788271,
        "fairAltGapPct": -3.327828273153155,
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
          "fairPrice": 767.5056075861137,
          "per": 23.13485,
          "eps": 33.175300794520545,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 995.2590238356164,
          "per": 30.0,
          "eps": 33.175300794520545,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": null,
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-10-31",
          "prevFairPrice": 777.3475965182882,
          "newFairPrice": 777.3833162983107,
          "changePct": 0.004595084641980768,
          "epsEffect": 0.03571978002236375,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 33.1212->33.1227(적정PER 23.47배 유지 가정 시 +0.04) + 적정PER 23.47->23.47배(EPS 33.1227 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-03",
          "prevFairPrice": 777.3833162983107,
          "newFairPrice": 767.2012588099753,
          "changePct": -1.3097859543499755,
          "epsEffect": 0.9262663462076107,
          "perEffect": -11.108323834542961,
          "otherEffect": 0.0,
          "note": "EPS 33.1227->33.1621(적정PER 23.47배 유지 가정 시 +0.93) + 적정PER 23.47->23.13배(EPS 33.1621 유지 가정 시 -11.11)"
        },
        {
          "date": "2026-11-04",
          "prevFairPrice": 767.2012588099753,
          "newFairPrice": 767.5056075861137,
          "changePct": 0.039670004792539466,
          "epsEffect": 0.3043487761383363,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 33.1621->33.1753(적정PER 23.13배 유지 가정 시 +0.30) + 적정PER 23.13->23.13배(EPS 33.1753 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "AMZN": {
      "ticker": "AMZN",
      "asOf": "2026-11-04",
      "verdict": "매수",
      "action": "분할매수",
      "actionRaw": "적극 모아가기",
      "actionCapReason": "low_confidence_cap",
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": 433.6955413112066,
      "fairBasisMode": "a_kept_b_higher",
      "candidateBadge": null,
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": "median",
      "sectorFewPeers": true,
      "currentPrice": 250.69000244140625,
      "fairPrice": 319.96590000000003,
      "ratio": 0.783489748255693,
      "bandAggressiveLe": 255.97272000000004,
      "bandDcaHigh": 287.96931000000006,
      "bandFairHigh": 351.96249000000006,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "EPS 품질 경고: 다음회계연도 대안 기준 사용",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "고성장형",
      "stockTypeReason": "다음 회계연도 성장률 78.7%(기준 30% 초과)",
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
      "epsUsedForCandidates": 10.66553,
      "ttmEps": 12.37,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 13.032945107714868,
        "peTTM": 19.2351,
        "finnhubUpdated": "2026-11-03 15:19",
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
        "gapPct": 5.35929755630451,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 636.5090219474132,
        "fairHistProxy": 326.34736683267465,
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
        "consensusUpdatedAtUtc": "2026-11-03T21:00:24.004875+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 1.1598110923695306,
        "candSpread": 2.7568578523880727,
        "fairAltExCappedGrowth": 433.6955413112066,
        "fairAltGapPct": 35.54430059928466,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 30.000000000000004,
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
          "fairPrice": 230.88206067500002,
          "per": 21.6475,
          "eps": 10.66553,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 319.96590000000003,
          "per": 30.0,
          "eps": 10.66553,
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
          "date": "2026-10-30",
          "prevFairPrice": 316.38750000000005,
          "newFairPrice": 316.5804,
          "changePct": 0.06096953893562541,
          "epsEffect": 0.1928999999999981,
          "perEffect": -3.749065058400447e-14,
          "otherEffect": 0.0,
          "note": "EPS 10.5463->10.5527(적정PER 30.00배 유지 가정 시 +0.19) + 적정PER 30.00->30.00배(EPS 10.5527 유지 가정 시 -0.00)"
        },
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
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "ORCL": {
      "ticker": "ORCL",
      "asOf": "2026-11-04",
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
      "currentPrice": 126.19000244140625,
      "fairPrice": 220.16195947106576,
      "ratio": 0.573168964995474,
      "bandAggressiveLe": 176.12956757685262,
      "bandDcaHigh": 198.14576352395918,
      "bandFairHigh": 242.17815541817234,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±28% / 사업 위험으로 신뢰도 1단계 하향(보통→낮음): 현금흐름 거부권 발동(3/3: FCF 2년 연속 악화(11.8B→-0.4B→-23.7B), 부채/자본 2.01, 발행주식수 +5.1%(3개분기))",
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
            "per": 26.811726342843603
          },
          {
            "ticker": "ADBE",
            "per": 9.15169
          }
        ],
        "excluded": [],
        "note": "유효 비교군 4개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 9.401762,
      "ttmEps": 6.38,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 6.042627479440809,
        "peTTM": 20.8833,
        "finnhubUpdated": "2026-11-03 15:19",
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
        "gapPct": -5.287970541680109,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 220.16195947106576,
        "fairHistProxy": 266.942307441379,
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
        "consensusUpdatedAtUtc": "2026-11-03T21:00:24.004875+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.6785962035626939,
        "candSpread": 1.6101175493152173,
        "fairAltExCappedGrowth": 197.66864068611287,
        "fairAltGapPct": -10.216714476466592,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 23.417095590280393,
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
          "fairPrice": 175.17532190115998,
          "per": 18.632179999999998,
          "eps": 9.401762,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 282.05286,
          "per": 30.0,
          "eps": 9.401762,
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
      "nextUpdateDate": "2026-12-09"
    },
    "CRM": {
      "ticker": "CRM",
      "asOf": "2026-11-04",
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
      "currentPrice": 222.1999969482422,
      "fairPrice": 357.1891638707444,
      "ratio": 0.6220793333715169,
      "bandAggressiveLe": 285.7513310965955,
      "bandDcaHigh": 321.47024748366994,
      "bandFairHigh": 392.9080802578188,
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
            "per": 26.811726342843603
          },
          {
            "ticker": "ADBE",
            "per": 9.15169
          }
        ],
        "excluded": [],
        "note": "유효 비교군 4개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 16.19354693150685,
      "ttmEps": 10.969999999999999,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 11.38290499465906,
        "peTTM": 19.5205,
        "finnhubUpdated": "2026-11-03 15:20",
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
        "gapPct": 3.7639470798455976,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 577.1543714316755,
        "fairHistProxy": 691.7153000050256,
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
        "consensusUpdatedAtUtc": "2026-11-03T21:00:24.004875+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.6774303397766613,
        "candSpread": 1.920142347497409,
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
          "fairPrice": 300.57895040120417,
          "per": 18.56165,
          "eps": 16.19354693150685,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 357.1891638707444,
          "per": 22.05750015,
          "eps": 16.19354693150685,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": false,
      "dispersionFlag": "최대/최소 2.83배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-10-31",
          "prevFairPrice": 357.4126426061682,
          "newFairPrice": 357.3679468590834,
          "changePct": -0.012505362641592967,
          "epsEffect": -0.044695747084758715,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 16.2037->16.2017(적정PER 22.06배 유지 가정 시 -0.04) + 적정PER 22.06->22.06배(EPS 16.2017 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-03",
          "prevFairPrice": 357.3679468590834,
          "newFairPrice": 357.2338596178292,
          "changePct": -0.037520780034340444,
          "epsEffect": -0.13408724125427615,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 16.2017->16.1956(적정PER 22.06배 유지 가정 시 -0.13) + 적정PER 22.06->22.06배(EPS 16.1956 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-04",
          "prevFairPrice": 357.2338596178292,
          "newFairPrice": 357.1891638707444,
          "changePct": -0.012511621135974545,
          "epsEffect": -0.044695747084758715,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 16.1956->16.1935(적정PER 22.06배 유지 가정 시 -0.04) + 적정PER 22.06->22.06배(EPS 16.1935 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2026-12-03"
    },
    "PLTR": {
      "ticker": "PLTR",
      "asOf": "2026-11-04",
      "verdict": "고평가",
      "action": "신규 추격 금지 · 모델 점검 필요(적정가/현재가 비율 2.50배)",
      "actionRaw": "신규 추격 금지 · 모델 점검 필요(적정가/현재가 비율 2.50배)",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "a_kept_one_candidate",
      "candidateBadge": "후보 1개",
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": null,
      "sectorFewPeers": null,
      "currentPrice": 175.39999389648438,
      "fairPrice": 70.14030739726027,
      "ratio": 2.5007018133390106,
      "bandAggressiveLe": 56.112245917808224,
      "bandDcaHigh": 63.12627665753425,
      "bandFairHigh": 77.15433813698631,
      "modelCheckNeeded": true,
      "confidence": "낮음",
      "confidenceNote": "적정가/현재가 비율이 2배 초과 또는 0.5배 미만 - 모델 점검 필요로 강제 낮음",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "고성장형",
      "stockTypeReason": "NTM PER 83.7배(기준 40 초과); 다음 회계연도 성장률 125.6%(기준 30% 초과)",
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
            "per": 26.811726342843603
          }
        ],
        "excluded": [
          {
            "ticker": "SNOW",
            "reason": "NTM PER 131.1배 >80배 제외"
          },
          {
            "ticker": "DDOG",
            "reason": "NTM PER 80.2배 >80배 제외"
          }
        ],
        "note": "유효 비교군 2개 이하(최소 3개 기준 미달)"
      },
      "epsUsedForCandidates": 2.3380102465753425,
      "ttmEps": 1.43,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 1.2346599750286447,
        "peTTM": 142.0634,
        "finnhubUpdated": "2026-11-03 15:20",
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
        "gapPct": -13.660141606388477,
        "gapPrevPct": 5.526493592191861,
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
        "latestOfficialPeriodEnd": "2026-09-30",
        "latestOfficialSource": "10-Q 2026-11-03",
        "valuationActualPeriodEnd": "2026-09-30",
        "valuationPeriods": "Q4'25~Q3'26",
        "earningsReleaseDate": "2026-11-02",
        "earningsReleaseAtUtc": "2026-11-03T04:59:00+00:00",
        "consensusUpdatedAtUtc": "2026-11-03T21:00:24.004875+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.6116311945572639,
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
          "fairPrice": 70.14030739726027,
          "per": 30.0,
          "eps": 2.3380102465753425,
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
          "date": "2026-10-31",
          "prevFairPrice": 66.61699315068493,
          "newFairPrice": 66.8198202739726,
          "changePct": 0.30446754453308217,
          "epsEffect": 0.2028271232876655,
          "perEffect": -7.91305631674445e-15,
          "otherEffect": 0.0,
          "note": "EPS 2.2206->2.2273(적정PER 30.00배 유지 가정 시 +0.20) + 적정PER 30.00->30.00배(EPS 2.2273 유지 가정 시 -0.00)"
        },
        {
          "date": "2026-11-03",
          "prevFairPrice": 66.8198202739726,
          "newFairPrice": 67.00125534246575,
          "changePct": 0.2715288184691963,
          "epsEffect": 0.18143506849315202,
          "perEffect": 7.934542545066107e-15,
          "otherEffect": 0.0,
          "note": "EPS 2.2273->2.2334(적정PER 30.00배 유지 가정 시 +0.18) + 적정PER 30.00->30.00배(EPS 2.2334 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-11-04",
          "prevFairPrice": 67.00125534246575,
          "newFairPrice": 70.14030739726027,
          "changePct": 4.685064539089271,
          "epsEffect": 3.139052054794522,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 2.2334->2.3380(적정PER 30.00배 유지 가정 시 +3.14) + 적정PER 30.00->30.00배(EPS 2.3380 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "TSLA": {
      "ticker": "TSLA",
      "asOf": "2026-11-04",
      "verdict": "고평가",
      "action": "신규 추격 금지 · 모델 점검 필요(적정가/현재가 비율 9.14배)",
      "actionRaw": "신규 추격 금지 · 모델 점검 필요(적정가/현재가 비율 9.14배)",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "median",
      "candidateBadge": null,
      "lowConfidenceCapEligible": false,
      "sectorPerMethod": null,
      "sectorFewPeers": null,
      "currentPrice": 398.5,
      "fairPrice": 43.60000842044864,
      "ratio": 9.139906491694653,
      "bandAggressiveLe": 34.880006736358915,
      "bandDcaHigh": 39.24000757840378,
      "bandFairHigh": 47.96000926249351,
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
        "growthPerPeg": 21.697500599999998,
        "growthPerPegEpsBasis": "NTM EPS"
      },
      "sectorPeerDisplay": {
        "basis": "forwardPE",
        "medianPer": null,
        "peers": [],
        "excluded": [],
        "note": "비교군 없음(peer_groups.json에 비교군 정의 자체가 없음)"
      },
      "epsUsedForCandidates": 2.093549753424657,
      "ttmEps": 0.91,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 0.8119519324455993,
        "peTTM": 490.7926,
        "finnhubUpdated": "2026-11-03 15:19",
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
        "gapPct": -10.774512918066016,
        "gapPrevPct": -24.819265514296372,
        "gapCause": "definition_unexplained",
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
        "modelSplitRatio": 1.0873622505839244,
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
        "consensusUpdatedAtUtc": "2026-11-03T21:00:24.004875+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.43466843742853956,
        "candSpread": 1.0873622505839244,
        "fairAltExCappedGrowth": null,
        "fairAltGapPct": null,
        "fairAltApplicable": false,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 20.825876408777557,
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
          "fairPrice": 45.424797031061345,
          "per": 21.697500599999998,
          "eps": 2.093549753424657,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": false,
      "dispersionFlag": "최대/최소 2.12배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [
        "과거 PER 이력 부족(2년치)",
        "⚠ 사업 경고(현금흐름/EPS 하향): EPS 수정 방향 하향(하향)"
      ],
      "recentChanges": [
        {
          "date": "2026-10-31",
          "prevFairPrice": 43.31788887804122,
          "newFairPrice": 43.330117302682,
          "changePct": 0.02822950277011401,
          "epsEffect": 0.02361582485788861,
          "perEffect": -0.011387400217104457,
          "otherEffect": 0.0,
          "note": "EPS 2.0848->2.0860(적정PER 20.78배 유지 가정 시 +0.02) + 적정PER 20.78->20.77배(EPS 2.0860 유지 가정 시 -0.01)"
        },
        {
          "date": "2026-11-03",
          "prevFairPrice": 43.330117302682,
          "newFairPrice": 43.5875094711989,
          "changePct": 0.594026013635946,
          "epsEffect": 0.1333653865421562,
          "perEffect": 0.1240267819747395,
          "otherEffect": 0.0,
          "note": "EPS 2.0860->2.0924(적정PER 20.77배 유지 가정 시 +0.13) + 적정PER 20.77->20.83배(EPS 2.0924 유지 가정 시 +0.12)"
        },
        {
          "date": "2026-11-04",
          "prevFairPrice": 43.5875094711989,
          "newFairPrice": 43.60000842044864,
          "changePct": 0.02867552975927203,
          "epsEffect": 0.02400002111076692,
          "perEffect": -0.011501071861023091,
          "otherEffect": 0.0,
          "note": "EPS 2.0924->2.0935(적정PER 20.83배 유지 가정 시 +0.02) + 적정PER 20.83->20.83배(EPS 2.0935 유지 가정 시 -0.01)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    }
  }
};
if (typeof window !== 'undefined') { window.PRICE_MAP_DATA = PRICE_MAP_DATA; }
