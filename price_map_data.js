const PRICE_MAP_DATA = {
  "_meta": {
    "title": "WO17 가격지도(price_map) - 화면용 production 데이터",
    "as_of": "2026-10-31",
    "input_snapshot_hash": "8519b5e502ee43909667c056ef483d1345ff3c7833368845e89436a5e1df9c18",
    "generated_by": "price_map_engine.py write_price_map_data_js()",
    "session_date": "2026-10-30",
    "session_date_source": "daily_run_arg(확정 종가 거래일)",
    "fxRates": {
      "EURUSD": {
        "rate": 1.1168,
        "asOf": "2026-10-30",
        "source": "Yahoo Finance chart API(query1.finance.yahoo.com)"
      },
      "TWDUSD": {
        "rate": 0.0307,
        "asOf": "2026-10-30",
        "source": "Yahoo Finance chart API(query1.finance.yahoo.com)"
      }
    },
    "ttmEpsRule": {
      "mode": "verified_quarterly_sum",
      "status": "applied_with_ticker_fallback",
      "changed": [
        "ASML",
        "CEG"
      ],
      "changed_approved": [
        "CEG"
      ],
      "pending_approval": [],
      "auto_reverted": [
        "ASML"
      ],
      "quarterly_sum_count": 33,
      "fair_changed": [
        "AMAT",
        "LRCX",
        "KLAC",
        "WDC",
        "AVGO",
        "QCOM",
        "ANET",
        "HUBB",
        "VRT",
        "PWR",
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
      "asOf": "2026-10-31",
      "verdict": "적정",
      "action": "관망(적정가 근처)",
      "actionRaw": "관망(적정가 근처)",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": 556.6392,
      "fairPriceB": 415.43394524948894,
      "fairBasisMode": "ex_capped_growth_floor_b",
      "candidateBadge": null,
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": "median",
      "sectorFewPeers": true,
      "currentPrice": 390.0899963378906,
      "fairPrice": 415.43394524948894,
      "ratio": 0.9389940345477114,
      "bandAggressiveLe": 332.34715619959115,
      "bandDcaHigh": 373.89055072454005,
      "bandFairHigh": 456.9773397744379,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±40% (±40% 밖)",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "고성장형",
      "stockTypeReason": "다음 회계연도 성장률 35.8%(기준 30% 초과)",
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
      "epsUsedForCandidates": 18.55464,
      "ttmEps": 11.6,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 11.046577380070076,
        "peTTM": 35.3132,
        "finnhubUpdated": "2026-10-30 10:11",
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
        "gapPct": -4.770884654568308,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 247.67811393737793,
        "fairHistProxy": 282.95287905043756,
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
        "consensusUpdatedAtUtc": "2026-10-30T20:13:44.897636+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.6251805478306235,
        "candSpread": 2.354627816283564,
        "fairAltExCappedGrowth": 415.43394524948894,
        "fairAltGapPct": 0.0,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 22.389760472285584,
      "fairPriceBasis": "B안: 성장 PER 상한 후보 제외, 나머지 두 후보의 평균 (A안 상한 포함 $556.64, 낮은 쪽 적용)",
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
          "fairPrice": 583.1897765616,
          "per": 31.43094,
          "eps": 18.55464,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 556.6392,
          "per": 30.0,
          "eps": 18.55464,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": null,
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-10-29",
          "prevFairPrice": 553.3213939726027,
          "newFairPrice": 413.94156719005827,
          "changePct": -25.189668843609848,
          "epsEffect": 0.46893534246574825,
          "perEffect": -139.84876212501013,
          "otherEffect": 0.0,
          "note": "EPS 18.4440->18.4597(적정PER 30.00배 유지 가정 시 +0.47) + 적정PER 30.00->22.42배(EPS 18.4597 유지 가정 시 -139.85)"
        },
        {
          "date": "2026-10-30",
          "prevFairPrice": 413.94156719005827,
          "newFairPrice": 415.1859051878336,
          "changePct": 0.3006071620741625,
          "epsEffect": 1.775521420067075,
          "perEffect": -0.5311834222917491,
          "otherEffect": 0.0,
          "note": "EPS 18.4597->18.5389(적정PER 22.42배 유지 가정 시 +1.78) + 적정PER 22.42->22.40배(EPS 18.5389 유지 가정 시 -0.53)"
        },
        {
          "date": "2026-10-31",
          "prevFairPrice": 415.1859051878336,
          "newFairPrice": 415.43394524948894,
          "changePct": 0.05974192730437602,
          "epsEffect": 0.35347125994565937,
          "perEffect": -0.10543119829029195,
          "otherEffect": 0.0,
          "note": "EPS 18.5389->18.5546(적정PER 22.40배 유지 가정 시 +0.35) + 적정PER 22.40->22.39배(EPS 18.5546 유지 가정 시 -0.11)"
        }
      ],
      "nextUpdateDate": "2026-11-13"
    },
    "LRCX": {
      "ticker": "LRCX",
      "asOf": "2026-10-31",
      "verdict": "적정",
      "action": "관망(적정가 근처)",
      "actionRaw": "관망(적정가 근처)",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": 315.6515071232877,
      "fairPriceB": 239.53014439965787,
      "fairBasisMode": "ex_capped_growth_floor_b",
      "candidateBadge": null,
      "lowConfidenceCapEligible": false,
      "sectorPerMethod": "median",
      "sectorFewPeers": true,
      "currentPrice": 239.11000061035156,
      "fairPrice": 239.53014439965787,
      "ratio": 0.9982459669518451,
      "bandAggressiveLe": 191.6241155197263,
      "bandDcaHigh": 215.5771299596921,
      "bandFairHigh": 263.4831588396237,
      "modelCheckNeeded": false,
      "confidence": "보통",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±34%",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "고성장형",
      "stockTypeReason": "다음 회계연도 성장률 65.8%(기준 30% 초과)",
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
      "epsUsedForCandidates": 10.521716904109589,
      "ttmEps": 6.71,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 6.3835524441322775,
        "peTTM": 37.4572,
        "finnhubUpdated": "2026-10-30 10:11",
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
        "gapPct": -4.865090251381854,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 157.15951313800122,
        "fairHistProxy": 202.5438494707168,
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
        "consensusUpdatedAtUtc": "2026-10-30T20:13:44.897636+00:00",
        "periodCompareMethod": "fallback_45d",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.6377286198775408,
        "candSpread": 2.0482423827481226,
        "fairAltExCappedGrowth": 239.53014439965787,
        "fairAltGapPct": 0.0,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 22.765309747699238,
      "fairPriceBasis": "B안: 성장 PER 상한 후보 제외, 나머지 두 후보의 평균 (A안 상한 포함 $315.65, 낮은 쪽 적용)",
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
          "fairPrice": 321.9007756613145,
          "per": 30.59394,
          "eps": 10.521716904109589,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 315.6515071232877,
          "per": 30.0,
          "eps": 10.521716904109589,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": null,
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-10-29",
          "prevFairPrice": 313.74499315068493,
          "newFairPrice": 238.66384136547705,
          "changePct": -23.930629467973063,
          "epsEffect": 0.20754410958906178,
          "perEffect": -75.28869589479692,
          "otherEffect": 0.0,
          "note": "EPS 10.4582->10.4651(적정PER 30.00배 유지 가정 시 +0.21) + 적정PER 30.00->22.81배(EPS 10.4651 유지 가정 시 -75.29)"
        },
        {
          "date": "2026-10-30",
          "prevFairPrice": 238.66384136547705,
          "newFairPrice": 239.42176264308992,
          "changePct": 0.31756854045277244,
          "epsEffect": 1.1299586951300815,
          "perEffect": -0.37203741751723296,
          "otherEffect": 0.0,
          "note": "EPS 10.4651->10.5146(적정PER 22.81배 유지 가정 시 +1.13) + 적정PER 22.81->22.77배(EPS 10.5146 유지 가정 시 -0.37)"
        },
        {
          "date": "2026-10-31",
          "prevFairPrice": 239.42176264308992,
          "newFairPrice": 239.53014439965787,
          "changePct": 0.04526813075447846,
          "epsEffect": 0.16133192957003464,
          "perEffect": -0.05295017300208669,
          "otherEffect": 0.0,
          "note": "EPS 10.5146->10.5217(적정PER 22.77배 유지 가정 시 +0.16) + 적정PER 22.77->22.77배(EPS 10.5217 유지 가정 시 -0.05)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "KLAC": {
      "ticker": "KLAC",
      "asOf": "2026-10-31",
      "verdict": "고평가",
      "action": "신규 추격 금지",
      "actionRaw": "신규 추격 금지",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": 183.98551068493148,
      "fairPriceB": 142.31216020043396,
      "fairBasisMode": "ex_capped_growth_floor_b",
      "candidateBadge": null,
      "lowConfidenceCapEligible": false,
      "sectorPerMethod": "median",
      "sectorFewPeers": true,
      "currentPrice": 157.91000366210938,
      "fairPrice": 142.31216020043396,
      "ratio": 1.1096030264715766,
      "bandAggressiveLe": 113.84972816034718,
      "bandDcaHigh": 128.08094418039056,
      "bandFairHigh": 156.54337622047737,
      "modelCheckNeeded": false,
      "confidence": "보통",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±32%",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "고성장형",
      "stockTypeReason": "다음 회계연도 성장률 51.5%(기준 30% 초과)",
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
      "epsUsedForCandidates": 6.132850356164383,
      "ttmEps": 4.0,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 3.8020553312588934,
        "peTTM": 41.5328,
        "finnhubUpdated": "2026-10-30 10:11",
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
        "gapPct": -4.948616718527665,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 96.99626457539618,
        "fairHistProxy": 146.52980356499228,
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
        "consensusUpdatedAtUtc": "2026-10-30T20:13:44.897636+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.6522252733558767,
        "candSpread": 1.934384346106716,
        "fairAltExCappedGrowth": 142.31216020043396,
        "fairAltGapPct": 0.0,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 23.204896897148338,
      "fairPriceBasis": "B안: 성장 PER 상한 후보 제외, 나머지 두 후보의 평균 (A안 상한 포함 $183.99, 낮은 쪽 적용)",
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
          "fairPrice": 187.62805582547176,
          "per": 30.59394,
          "eps": 6.132850356164383,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 183.98551068493148,
          "per": 30.0,
          "eps": 6.132850356164383,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": null,
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-10-29",
          "prevFairPrice": 176.51690547945205,
          "newFairPrice": 134.51993289255407,
          "changePct": -23.79203990282209,
          "epsEffect": 0.10487671232877638,
          "perEffect": -42.10184929922676,
          "otherEffect": 0.0,
          "note": "EPS 5.8839->5.8874(적정PER 30.00배 유지 가정 시 +0.10) + 적정PER 30.00->22.85배(EPS 5.8874 유지 가정 시 -42.10)"
        },
        {
          "date": "2026-10-30",
          "prevFairPrice": 134.51993289255407,
          "newFairPrice": 137.69112636940557,
          "changePct": 2.357415297987434,
          "epsEffect": 4.736755396055814,
          "perEffect": -1.5655619192043022,
          "otherEffect": 0.0,
          "note": "EPS 5.8874->6.0947(적정PER 22.85배 유지 가정 시 +4.74) + 적정PER 22.85->22.59배(EPS 6.0947 유지 가정 시 -1.57)"
        },
        {
          "date": "2026-10-31",
          "prevFairPrice": 137.69112636940557,
          "newFairPrice": 142.31216020043396,
          "changePct": 3.3560868829199832,
          "epsEffect": 0.8618602242978901,
          "perEffect": 3.7591736067304966,
          "otherEffect": 0.0,
          "note": "EPS 6.0947->6.1329(적정PER 22.59배 유지 가정 시 +0.86) + 적정PER 22.59->23.20배(EPS 6.1329 유지 가정 시 +3.76)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "ASML": {
      "ticker": "ASML",
      "asOf": "2026-10-31",
      "verdict": "고평가",
      "action": "신규 추격 금지",
      "actionRaw": "신규 추격 금지",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": 1604.0642449315071,
      "fairPriceB": 1307.39240353641,
      "fairBasisMode": "ex_capped_growth_floor_b",
      "candidateBadge": null,
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": "median",
      "sectorFewPeers": true,
      "currentPrice": 1565.9000244140625,
      "fairPrice": 1307.39240353641,
      "ratio": 1.1977276448741836,
      "bandAggressiveLe": 1045.913922829128,
      "bandDcaHigh": 1176.653163182769,
      "bandFairHigh": 1438.1316438900512,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "EPS 품질 경고: ADR 통화환산 적용(EUR->USD); WO8-B 분류 불가(이력 부족 - 유효 4개년 <5년; 필터 없음(원본 그대로))",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "분류불가(이력부족)",
      "stockTypeReason": "유효 연간 EPS 4개년(<5년 기준) - 필터 없음(원본 그대로)",
      "candidates": {
        "historicalPer": 32.58614067277154,
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
      "epsUsedForCandidates": 53.46880816438357,
      "ttmEps": 28.66893367851876,
      "ttmEpsSelection": {
        "rule": "finnhub_peTTM",
        "finnhub": 28.66893367851876,
        "peTTM": 54.6201,
        "finnhubUpdated": "2026-10-30 10:11",
        "source": "finnhub_peTTM(판정 변경 + 원자료 검증 미완 - 자동 복귀)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 934.20990578657,
        "fairHistProxy": 1342.8754380449511,
        "proxyPer": 25.115118218390773,
        "trailingPer": 32.58614067277154,
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
        "consensusUpdatedAtUtc": "2026-10-30T20:13:44.897636+00:00",
        "periodCompareMethod": null,
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.5361805258568602,
        "candSpread": 1.7989264413453938,
        "fairAltExCappedGrowth": 1307.39240353641,
        "fairAltGapPct": 0.0,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": "WO8-B 분류 불가(이력 부족, 유효 4개년 <5년) - 필터 없음(원본 그대로) - 경기순환 여부 판단 안 함, NTM EPS 그대로 사용",
      "convertedFairPer": 24.45149702078613,
      "fairPriceBasis": "B안: 성장 PER 상한 후보 제외, 나머지 두 후보의 평균 (A안 상한 포함 $1604.06, 낮은 쪽 적용)",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 934.20990578657,
          "per": 32.58614067277154,
          "eps": 28.66893367851876,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "sector_per",
          "fairPrice": 1680.57490128625,
          "per": 31.43094,
          "eps": 53.46880816438357,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 1604.0642449315071,
          "per": 30.0,
          "eps": 53.46880816438357,
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
          "date": "2026-10-29",
          "prevFairPrice": 1600.449997808219,
          "newFairPrice": 1475.891436392962,
          "changePct": -7.782721208774852,
          "epsEffect": 1.2098375342463896,
          "perEffect": -125.76839894950335,
          "otherEffect": 0.0,
          "note": "EPS 53.3483->53.3887(적정PER 30.00배 유지 가정 시 +1.21) + 적정PER 30.00->27.64배(EPS 53.3887 유지 가정 시 -125.77)"
        },
        {
          "date": "2026-10-30",
          "prevFairPrice": 1475.891436392962,
          "newFairPrice": 1476.5171631159214,
          "changePct": 0.042396527788563475,
          "epsEffect": 1.1006841471459197,
          "perEffect": -0.4749574241864511,
          "otherEffect": 0.0,
          "note": "EPS 53.3887->53.4285(적정PER 27.64배 유지 가정 시 +1.10) + 적정PER 27.64->27.64배(EPS 53.4285 유지 가정 시 -0.47)"
        },
        {
          "date": "2026-10-31",
          "prevFairPrice": 1476.5171631159214,
          "newFairPrice": 1307.39240353641,
          "changePct": -11.454303668411434,
          "epsEffect": 1.114563564369385,
          "perEffect": -170.23932314388094,
          "otherEffect": 0.0,
          "note": "EPS 53.4285->53.4688(적정PER 27.64배 유지 가정 시 +1.11) + 적정PER 27.64->24.45배(EPS 53.4688 유지 가정 시 -170.24)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "MU": {
      "ticker": "MU",
      "asOf": "2026-10-31",
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
      "currentPrice": 884.739990234375,
      "fairPrice": 1189.1185005410634,
      "ratio": 0.7440301280585639,
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
            "per": 59.089810595962376
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
        "finnhub": 70.02960235514057,
        "peTTM": 12.6338,
        "finnhubUpdated": "2026-10-30 10:11",
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
        "gapPct": -5.633199898746022,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": {
        "ntm_eps_raw": 181.7330901369863,
        "normalized_eps": 53.57,
        "change_pct": -70.52270450052869,
        "fair_without_normalization": 3612.1995927987946,
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
            "fairPrice": 3612.1995927987946,
            "per": 19.8764,
            "eps": 181.7330901369863,
            "epsBasis": "NTM EPS"
          },
          {
            "candidate": "growth_per_peg",
            "fairPrice": 5451.992704109589,
            "per": 30.0,
            "eps": 181.7330901369863,
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
        "consensusUpdatedAtUtc": "2026-10-30T20:13:44.897636+00:00",
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
      "epsBasisNote": "경기순환형(WO8-B 최종본: (A) EPS 30%+·매출 5%+ 동반 감소 2회(2019→2020 EPS -57%·매출 -8%, 2022→2023 EPS -169%·매출 -49%, 기준 2회 이상)) - NTM EPS(181.7331) 대신 정상화 EPS 53.5700(순이익률 사이클 중앙값 22% x NTM매출/주식수 243.5, 기준연수 8) 사용 - 업종PER·성장PER·과거PER 후보 전부 동일 기준 적용(item3)",
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
      "asOf": "2026-10-31",
      "verdict": "매수",
      "action": "분할매수 · 모델 점검 필요(적정가/현재가 비율 0.25배)",
      "actionRaw": "적극 모아가기 · 모델 점검 필요(적정가/현재가 비율 0.25배)",
      "actionCapReason": "low_confidence_cap",
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "a_kept_capped_not_used",
      "candidateBadge": null,
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": "median",
      "sectorFewPeers": true,
      "currentPrice": 1150.8900146484375,
      "fairPrice": 4622.536354065775,
      "ratio": 0.24897370761317353,
      "bandAggressiveLe": 3698.0290832526207,
      "bandDcaHigh": 4160.282718659198,
      "bandFairHigh": 5084.789989472353,
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
      "epsUsedForCandidates": 232.56406361643835,
      "ttmEps": 64.80929911693467,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 64.80929911693467,
        "peTTM": 17.7581,
        "finnhubUpdated": "2026-10-30 10:11",
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
        "gapPct": -11.098355120802928,
        "gapPrevPct": 125.26694166470165,
        "gapCause": "definition_unexplained",
        "source": "finnhub_peTTM(차이 원인 미확인 - 검증 전 유지)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 1533.2460271021014,
        "fairHistProxy": null,
        "proxyPer": null,
        "trailingPer": 23.657809110629067,
        "modelSplitEligible": false,
        "modelSplitRatio": null,
        "actionBeforeModelSplit": null,
        "modelSplitMode": "on"
      },
      "earningsStatus": {
        "latestOfficialPeriodEnd": "2026-09-30",
        "latestOfficialSource": "8-K(실적) 2026-10-29",
        "valuationActualPeriodEnd": "2026-07-03",
        "valuationPeriods": "Q4'25~Q3'26",
        "earningsReleaseDate": "2026-10-29",
        "earningsReleaseAtUtc": "2026-10-30T04:59:00+00:00",
        "consensusUpdatedAtUtc": "2026-10-30T20:13:44.897636+00:00",
        "periodCompareMethod": "fallback_45d",
        "pendingReflection": true,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.278672887414897,
        "candSpread": 4.550425558042908,
        "fairAltExCappedGrowth": 3077.8911905839386,
        "fairAltGapPct": -33.41553305737091,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": "WO8-B 분류 불가(이력 부족, 유효 4개년 <5년) - 필터 없음(원본 그대로) - 경기순환 여부 판단 안 함, NTM EPS 그대로 사용",
      "convertedFairPer": 19.8764,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 1533.2460271021014,
          "per": 23.657809110629067,
          "eps": 64.80929911693467,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "sector_per",
          "fairPrice": 4622.536354065775,
          "per": 19.8764,
          "eps": 232.56406361643835,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 6976.92190849315,
          "per": 30.0,
          "eps": 232.56406361643835,
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
          "date": "2026-10-29",
          "prevFairPrice": 4606.279499872548,
          "newFairPrice": 4609.08255366262,
          "changePct": 0.06085288116254745,
          "epsEffect": 2.8030537900720005,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 231.7462->231.8872(적정PER 19.88배 유지 가정 시 +2.80) + 적정PER 19.88->19.88배(EPS 231.8872 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-10-30",
          "prevFairPrice": 4609.08255366262,
          "newFairPrice": 4611.88560745269,
          "changePct": 0.060815872951612754,
          "epsEffect": 2.8030537900708703,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 231.8872->232.0282(적정PER 19.88배 유지 가정 시 +2.80) + 적정PER 19.88->19.88배(EPS 232.0282 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-10-31",
          "prevFairPrice": 4611.88560745269,
          "newFairPrice": 4622.536354065775,
          "changePct": 0.23094125743001603,
          "epsEffect": 10.650746613084797,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 232.0282->232.5641(적정PER 19.88배 유지 가정 시 +10.65) + 적정PER 19.88->19.88배(EPS 232.5641 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "WDC": {
      "ticker": "WDC",
      "asOf": "2026-10-31",
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
      "currentPrice": 366.1099853515625,
      "fairPrice": 572.1517855024711,
      "ratio": 0.6398826231574896,
      "bandAggressiveLe": 457.7214284019769,
      "bandDcaHigh": 514.936606952224,
      "bandFairHigh": 629.3669640527182,
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
      "epsUsedForCandidates": 30.008738794520546,
      "ttmEps": 25.773367999999998,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 23.746853212746966,
        "peTTM": 15.4172,
        "finnhubUpdated": "2026-10-30 10:11",
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
        "gapPct": -7.86282486345219,
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
        "modelSplitRatio": null,
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
        "consensusUpdatedAtUtc": "2026-10-30T20:13:44.897636+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.858862086023625,
        "candSpread": 3.558541567324048,
        "fairAltExCappedGrowth": 412.56902860528646,
        "fairAltGapPct": -27.891682057242374,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": "WO8-B 분류 불가(이력 부족, 유효 1개년 <5년) - corporate_events.json 기업분할/분리상장(2025-02-21) 이전 회계연도 7개 제외 - 경기순환 여부 판단 안 함, NTM EPS 그대로 사용",
      "convertedFairPer": 19.066172338003863,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 572.1517855024711,
          "per": 22.199341021416803,
          "eps": 25.773367999999998,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "sector_per",
          "fairPrice": 252.9862717081019,
          "per": 8.43042,
          "eps": 30.008738794520546,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 900.2621638356164,
          "per": 30.0,
          "eps": 30.008738794520546,
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
        },
        {
          "date": "2026-10-30",
          "prevFairPrice": 642.5988744484697,
          "newFairPrice": 572.1517855024711,
          "changePct": -10.962840388798071,
          "epsEffect": 0.9225556318034341,
          "perEffect": -71.36964457780215,
          "otherEffect": 0.0,
          "note": "EPS 29.9228->29.9658(적정PER 21.48배 유지 가정 시 +0.92) + 적정PER 21.48->19.09배(EPS 29.9658 유지 가정 시 -71.37)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "STX": {
      "ticker": "STX",
      "asOf": "2026-10-31",
      "verdict": "고평가",
      "action": "신규 추격 금지 · 모델 점검 필요(적정가/현재가 비율 2.32배)",
      "actionRaw": "신규 추격 금지 · 모델 점검 필요(적정가/현재가 비율 2.32배)",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "a_kept_two_candidates",
      "candidateBadge": "후보 2개",
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": null,
      "sectorFewPeers": null,
      "currentPrice": 644.5800170898438,
      "fairPrice": 277.57811859911607,
      "ratio": 2.3221571654960282,
      "bandAggressiveLe": 222.06249487929287,
      "bandDcaHigh": 249.82030673920445,
      "bandFairHigh": 305.3359304590277,
      "modelCheckNeeded": true,
      "confidence": "낮음",
      "confidenceNote": "적정가/현재가 비율이 2배 초과 또는 0.5배 미만 - 모델 점검 필요로 강제 낮음",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "경기순환형",
      "stockTypeReason": "(B) EPS 30%+·매출 5%+ 동반 감소 1회(2022→2023 EPS -135%·매출 -37%) + 이익 정점 의심(NTM EPS $40.35가 과거 8년 EPS 중앙값 $6.06의 3배 초과)",
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
            "per": 16.515586900025667
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
        "finnhub": 17.78966415213156,
        "peTTM": 36.2334,
        "finnhubUpdated": "2026-10-30 10:11",
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
        "gapPct": -6.568121648545688,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": {
        "ntm_eps_raw": 48.67890153424658,
        "normalized_eps": 10.90848,
        "change_pct": -77.59094873509899,
        "fair_without_normalization": 410.383585072343,
        "basis_without_normalization": "세 적정가 후보 중앙값",
        "candidates_without_normalization": [
          {
            "candidate": "historical_per",
            "fairPrice": 397.7921931942375,
            "per": 20.892171704786744,
            "eps": 19.040250999999998,
            "epsBasis": "TTM EPS"
          },
          {
            "candidate": "sector_per",
            "fairPrice": 410.383585072343,
            "per": 8.43042,
            "eps": 48.67890153424658,
            "epsBasis": "NTM EPS"
          },
          {
            "candidate": "growth_per_peg",
            "fairPrice": 1460.3670460273972,
            "per": 30.0,
            "eps": 48.67890153424658,
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
        "consensusUpdatedAtUtc": "2026-10-30T20:13:44.897636+00:00",
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
      "epsBasisNote": "경기순환형(WO8-B 최종본: (B) EPS 30%+·매출 5%+ 동반 감소 1회(2022→2023 EPS -135%·매출 -37%) + 이익 정점 의심(NTM EPS $40.35가 과거 8년 EPS 중앙값 $6.06의 3배 초과)) - NTM EPS(48.6789) 대신 정상화 EPS 10.9085(순이익률 사이클 중앙값 13.2% x NTM매출/주식수 82.64, 기준연수 8) 사용 - 업종PER·성장PER·과거PER 후보 전부 동일 기준 적용(item3)",
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
        "경기순환형(item2)인데 비교군 정상화 EPS 유효 비교군 부족 - 업종PER 후보를 비움(forwardPE 기준으로 섞어 쓰지 않음, 원래 forwardPE 기준 업종PER 8.43042는 참고용으로만 보관) - 업종 비교 불가(정상화기준 유효 비교군 1개 <3개)"
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
      "asOf": "2026-10-31",
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
      "currentPrice": 204.63999938964844,
      "fairPrice": 248.51900462897802,
      "ratio": 0.8234380291968497,
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
            "per": 51.35764924278107
          }
        ],
        "excluded": [
          {
            "ticker": "AMD",
            "reason": "정상화기준 PER 269.5배 >80배 제외"
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
        "finnhub": 7.656819987265389,
        "peTTM": 26.7265,
        "finnhubUpdated": "2026-10-30 10:10",
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
        "gapPct": -3.20075869449572,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": {
        "ntm_eps_raw": 14.250488876712328,
        "normalized_eps": 6.114639999999999,
        "change_pct": -57.09171767438562,
        "fair_without_normalization": 427.51466630136986,
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
            "fairPrice": 641.1269294752899,
            "per": 44.98982,
            "eps": 14.250488876712328,
            "epsBasis": "NTM EPS"
          },
          {
            "candidate": "growth_per_peg",
            "fairPrice": 427.51466630136986,
            "per": 30.0,
            "eps": 14.250488876712328,
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
        "consensusUpdatedAtUtc": "2026-10-30T20:13:44.897636+00:00",
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
      "epsBasisNote": "경기순환형(WO8-B 최종본: (B) EPS 30%+·매출 5%+ 동반 감소 1회(2019→2020 EPS -32%·매출 -7%) + 이익 정점 의심(NTM EPS $9.31가 과거 8년 EPS 중앙값 $0.28의 3배 초과)) - NTM EPS(14.2505) 대신 정상화 EPS 6.1146(순이익률 사이클 중앙값 35.8% x NTM매출/주식수 17.08, 기준연수 8) 사용 - 업종PER·성장PER·과거PER 후보 전부 동일 기준 적용(item3)",
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
      "nextUpdateDate": "2026-11-18"
    },
    "AMD": {
      "ticker": "AMD",
      "asOf": "2026-10-31",
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
      "currentPrice": 504.79998779296875,
      "fairPrice": 275.99038847716275,
      "ratio": 1.829049158480891,
      "bandAggressiveLe": 220.7923107817302,
      "bandDcaHigh": 248.3913496294465,
      "bandFairHigh": 303.58942732487907,
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
        "note": "유효 비교군 3개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 14.521804958904111,
      "ttmEps": 3.8899999999999997,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 3.5300673761274903,
        "peTTM": 143.0001,
        "finnhubUpdated": "2026-10-30 10:10",
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
        "gapPct": -9.252766680527236,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 221.2002325391955,
        "fairHistProxy": 602.4025517771898,
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
        "consensusUpdatedAtUtc": "2026-10-30T20:13:44.897636+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.2678730372022266,
        "candSpread": 1.9695013145609046,
        "fairAltExCappedGrowth": 248.59531050817913,
        "fairAltGapPct": -9.926098557323659,
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
          "fairPrice": 275.99038847716275,
          "per": 19.00524,
          "eps": 14.521804958904111,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 435.65414876712333,
          "per": 30.0,
          "eps": 14.521804958904111,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": "최대/최소 2.99배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-10-29",
          "prevFairPrice": 272.22576388944987,
          "newFairPrice": 272.65103242937096,
          "changePct": 0.1562190638553198,
          "epsEffect": 0.4252685399210686,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 14.3237->14.3461(적정PER 19.01배 유지 가정 시 +0.43) + 적정PER 19.01->19.01배(EPS 14.3461 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-10-30",
          "prevFairPrice": 272.65103242937096,
          "newFairPrice": 274.5787479812417,
          "changePct": 0.7070266834108172,
          "epsEffect": 1.927715551870741,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 14.3461->14.4475(적정PER 19.01배 유지 가정 시 +1.93) + 적정PER 19.01->19.01배(EPS 14.4475 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-10-31",
          "prevFairPrice": 274.5787479812417,
          "newFairPrice": 275.99038847716275,
          "changePct": 0.5141113455792657,
          "epsEffect": 1.4116404959210993,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 14.4475->14.5218(적정PER 19.01배 유지 가정 시 +1.41) + 적정PER 19.01->19.01배(EPS 14.5218 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2026-11-04"
    },
    "AVGO": {
      "ticker": "AVGO",
      "asOf": "2026-10-31",
      "verdict": "매수",
      "action": "분할매수",
      "actionRaw": "적극 모아가기",
      "actionCapReason": "low_confidence_cap",
      "cashflowVeto": false,
      "fairPriceUpper": 583.9521,
      "fairPriceB": 576.6308673157947,
      "fairBasisMode": "ex_capped_growth_floor_b",
      "candidateBadge": null,
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": "median",
      "sectorFewPeers": true,
      "currentPrice": 326.0799865722656,
      "fairPrice": 576.6308673157947,
      "ratio": 0.5654917297267861,
      "bandAggressiveLe": 461.3046938526358,
      "bandDcaHigh": 518.9677805842152,
      "bandFairHigh": 634.2939540473742,
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
      "epsUsedForCandidates": 19.46507,
      "ttmEps": 7.83,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 7.564256902947612,
        "peTTM": 43.108,
        "finnhubUpdated": "2026-10-30 10:10",
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
        "gapPct": -3.3939092854711084,
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
        "consensusUpdatedAtUtc": "2026-10-30T20:13:44.897636+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.4022590209025706,
        "candSpread": 3.1554228666003623,
        "fairAltExCappedGrowth": 576.6308673157947,
        "fairAltGapPct": 0.0,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 29.623878430223712,
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
          "fairPrice": 875.7299955874,
          "per": 44.98982,
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
          "date": "2026-10-29",
          "prevFairPrice": 582.028962739726,
          "newFairPrice": 575.6695162138501,
          "changePct": -1.092634032495691,
          "epsEffect": 0.6410457534246915,
          "perEffect": -7.000492279300607,
          "otherEffect": 0.0,
          "note": "EPS 19.4010->19.4223(적정PER 30.00배 유지 가정 시 +0.64) + 적정PER 30.00->29.64배(EPS 19.4223 유지 가정 시 -7.00)"
        },
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
        }
      ],
      "nextUpdateDate": "2026-12-10"
    },
    "MRVL": {
      "ticker": "MRVL",
      "asOf": "2026-10-31",
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
      "currentPrice": 196.39999389648438,
      "fairPrice": 124.39746336697644,
      "ratio": 1.5788102794113912,
      "bandAggressiveLe": 99.51797069358116,
      "bandDcaHigh": 111.9577170302788,
      "bandFairHigh": 136.8372097036741,
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
        "note": "유효 비교군 3개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 6.545429753424657,
      "ttmEps": 3.0300000000000002,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 2.7079793550553233,
        "peTTM": 72.5264,
        "finnhubUpdated": "2026-10-30 10:10",
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
        "gapPct": -10.627744057580102,
        "gapPrevPct": -7.26098099125606,
        "gapCause": "period",
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 31.128719134208488,
        "fairHistProxy": null,
        "proxyPer": null,
        "trailingPer": 10.273504664755276,
        "modelSplitEligible": false,
        "modelSplitRatio": null,
        "actionBeforeModelSplit": null,
        "modelSplitMode": "on"
      },
      "earningsStatus": {
        "latestOfficialPeriodEnd": "2026-08-01",
        "latestOfficialSource": "10-Q 2026-08-28",
        "valuationActualPeriodEnd": "2026-08-01",
        "valuationPeriods": "Q4'25~Q3'26",
        "earningsReleaseDate": null,
        "earningsReleaseAtUtc": null,
        "consensusUpdatedAtUtc": "2026-10-30T20:13:44.897636+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.4629184200494495,
        "candSpread": 6.3080941993192825,
        "fairAltExCappedGrowth": 77.76309125059247,
        "fairAltGapPct": -37.48820181229186,
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
          "fairPrice": 124.39746336697644,
          "per": 19.00524,
          "eps": 6.545429753424657,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 196.36289260273972,
          "per": 30.0,
          "eps": 6.545429753424657,
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
          "date": "2026-10-29",
          "prevFairPrice": 123.91231894860823,
          "newFairPrice": 124.07419100356603,
          "changePct": 0.1306343520412466,
          "epsEffect": 0.1618720549577855,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 6.5199->6.5284(적정PER 19.01배 유지 가정 시 +0.16) + 적정PER 19.01->19.01배(EPS 6.5284 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-10-30",
          "prevFairPrice": 124.07419100356603,
          "newFairPrice": 124.23572252627838,
          "changePct": 0.13018946277691962,
          "epsEffect": 0.16153152271235327,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 6.5284->6.5369(적정PER 19.01배 유지 가정 시 +0.16) + 적정PER 19.01->19.01배(EPS 6.5369 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-10-31",
          "prevFairPrice": 124.23572252627838,
          "newFairPrice": 124.39746336697644,
          "changePct": 0.13018867472988474,
          "epsEffect": 0.16174084069806172,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 6.5369->6.5454(적정PER 19.01배 유지 가정 시 +0.16) + 적정PER 19.01->19.01배(EPS 6.5454 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2026-11-27"
    },
    "TSM": {
      "ticker": "TSM",
      "asOf": "2026-10-31",
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
      "currentPrice": 406.1300048828125,
      "fairPrice": 528.0869508861781,
      "ratio": 0.769058966901737,
      "bandAggressiveLe": 422.4695607089425,
      "bandDcaHigh": 475.2782557975603,
      "bandFairHigh": 580.8956459747959,
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
        "note": "유효 비교군 3개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 22.40243293150685,
      "ttmEps": 15.0822307011,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 16.454501453804898,
        "peTTM": 24.682,
        "finnhubUpdated": "2026-10-30 10:10",
        "periods": "Q4'25~Q3'26",
        "endDates": [
          "2025-12-31",
          "2026-03-31",
          "2026-06-30",
          "2026-09-30"
        ],
        "secVerified": false,
        "quarterly": 15.0822307011,
        "checks": [
          "분기 연속 OK",
          "최신성 OK(승인 근거 2026-09-30)",
          "역산 주식수 일관(±4.2%)",
          "TWD491.28(원천값이 이미 ADR 1주 기준, ADR비율 미적용) x TWDUSD=X(0.0307) = $15.08(ADR 1주)"
        ],
        "gapPct": 9.098592773844882,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 372.40099802039845,
        "fairHistProxy": 336.15900705073443,
        "proxyPer": 15.005468739868846,
        "trailingPer": 24.691373935371374,
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
        "consensusUpdatedAtUtc": "2026-10-30T20:13:44.897636+00:00",
        "periodCompareMethod": null,
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.6732407478782496,
        "candSpread": 1.8047024350573637,
        "fairAltExCappedGrowth": 450.2439744532883,
        "fairAltGapPct": -14.740560489567523,
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
          "per": 24.691373935371374,
          "eps": 15.0822307011,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "sector_per",
          "fairPrice": 528.0869508861781,
          "per": 23.57275,
          "eps": 22.40243293150685,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 672.0729879452056,
          "per": 30.0,
          "eps": 22.40243293150685,
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
          "date": "2026-10-29",
          "prevFairPrice": 526.9475093798836,
          "newFairPrice": 527.327323215315,
          "changePct": 0.07207811568904576,
          "epsEffect": 0.37981383543141867,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 22.3541->22.3702(적정PER 23.57배 유지 가정 시 +0.38) + 적정PER 23.57->23.57배(EPS 22.3702 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-10-30",
          "prevFairPrice": 527.327323215315,
          "newFairPrice": 527.7071370507466,
          "changePct": 0.0720262005609222,
          "epsEffect": 0.37981383543158614,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 22.3702->22.3863(적정PER 23.57배 유지 가정 시 +0.38) + 적정PER 23.57->23.57배(EPS 22.3863 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-10-31",
          "prevFairPrice": 527.7071370507466,
          "newFairPrice": 528.0869508861781,
          "changePct": 0.07197436016389655,
          "epsEffect": 0.37981383543150243,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 22.3863->22.4024(적정PER 23.57배 유지 가정 시 +0.38) + 적정PER 23.57->23.57배(EPS 22.4024 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "INTC": {
      "ticker": "INTC",
      "asOf": "2026-10-31",
      "verdict": "적정",
      "action": "관망(적정가 근처)",
      "actionRaw": "관망(적정가 근처)",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "a_kept_two_candidates",
      "candidateBadge": "후보 2개",
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": "median",
      "sectorFewPeers": true,
      "currentPrice": 65.76000213623047,
      "fairPrice": 62.39992187306247,
      "ratio": 1.0538475075337959,
      "bandAggressiveLe": 49.919937498449976,
      "bandDcaHigh": 56.159929685756225,
      "bandFairHigh": 68.63991406036872,
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
      "epsUsedForCandidates": 2.4938576438356166,
      "ttmEps": null,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": null,
        "peTTM": null,
        "finnhubUpdated": "2026-10-30 10:10",
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
        "fairHistProxy": 30.33015623644404,
        "proxyPer": 12.1619436904969,
        "trailingPer": 11.656726240621182,
        "modelSplitEligible": false,
        "modelSplitRatio": 1.4967901335585836,
        "actionBeforeModelSplit": null,
        "modelSplitMode": "on"
      },
      "earningsStatus": {
        "latestOfficialPeriodEnd": "2026-09-30",
        "latestOfficialSource": "8-K(실적) 2026-10-29",
        "valuationActualPeriodEnd": "2026-09-26",
        "valuationPeriods": "Q4'25~Q3'26",
        "earningsReleaseDate": "2026-10-29",
        "earningsReleaseAtUtc": "2026-10-30T04:59:00+00:00",
        "consensusUpdatedAtUtc": "2026-10-30T20:13:44.897636+00:00",
        "periodCompareMethod": "fallback_45d",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": null,
        "candSpread": 1.4967901335585836,
        "fairAltExCappedGrowth": 49.98411443105644,
        "fairAltGapPct": -19.897152222823266,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 25.021445,
      "fairPriceBasis": "적정가 후보 2개 평균",
      "fairPriceCandidates": [
        {
          "candidate": "sector_per",
          "fairPrice": 49.98411443105644,
          "per": 20.04289,
          "eps": 2.4938576438356166,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 74.8157293150685,
          "per": 30.0,
          "eps": 2.4938576438356166,
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
          "date": "2026-10-29",
          "prevFairPrice": 62.37911225705096,
          "newFairPrice": 62.25501137400329,
          "changePct": -0.1989462154194841,
          "epsEffect": -0.12410088304766916,
          "perEffect": -8.839386793300798e-15,
          "otherEffect": 0.0,
          "note": "EPS 2.4930->2.4881(적정PER 25.02배 유지 가정 시 -0.12) + 적정PER 25.02->25.02배(EPS 2.4881 유지 가정 시 -0.00)"
        },
        {
          "date": "2026-10-30",
          "prevFairPrice": 62.25501137400329,
          "newFairPrice": 61.845131313103565,
          "changePct": -0.6583888619621764,
          "epsEffect": -0.40988006089972884,
          "perEffect": 8.781189255187949e-15,
          "otherEffect": 0.0,
          "note": "EPS 2.4881->2.4717(적정PER 25.02배 유지 가정 시 -0.41) + 적정PER 25.02->25.02배(EPS 2.4717 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-10-31",
          "prevFairPrice": 61.845131313103565,
          "newFairPrice": 62.39992187306247,
          "changePct": 0.8970642444757095,
          "epsEffect": 0.5547905599589031,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 2.4717->2.4939(적정PER 25.02배 유지 가정 시 +0.55) + 적정PER 25.02->25.02배(EPS 2.4939 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "QCOM": {
      "ticker": "QCOM",
      "asOf": "2026-10-31",
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
      "currentPrice": 164.7899932861328,
      "fairPrice": 111.68829297569886,
      "ratio": 1.475445535925487,
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
        "finnhub": 7.803073749497258,
        "peTTM": 21.1186,
        "finnhubUpdated": "2026-10-30 10:10",
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
        "gapPct": -9.686646417855815,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 146.97881095139772,
        "fairHistProxy": 148.20068170266836,
        "proxyPer": 14.548919949174078,
        "trailingPer": 17.011436452708068,
        "modelSplitEligible": false,
        "modelSplitRatio": 1.9238624547821939,
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
        "consensusUpdatedAtUtc": "2026-10-30T20:13:44.897636+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
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
      "asOf": "2026-10-31",
      "verdict": "고평가",
      "action": "신규 추격 금지 · 모델 점검 필요(적정가/현재가 비율 2.52배)",
      "actionRaw": "신규 추격 금지 · 모델 점검 필요(적정가/현재가 비율 2.52배)",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "a_kept_one_candidate",
      "candidateBadge": "후보 1개",
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": null,
      "sectorFewPeers": null,
      "currentPrice": 205.97000122070312,
      "fairPrice": 81.60658273972604,
      "ratio": 2.523938563603608,
      "bandAggressiveLe": 65.28526619178083,
      "bandDcaHigh": 73.44592446575344,
      "bandFairHigh": 89.76724101369865,
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
      "epsUsedForCandidates": 2.7202194246575346,
      "ttmEps": 0.97,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 0.8918264808021681,
        "peTTM": 230.953,
        "finnhubUpdated": "2026-10-30 10:10",
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
        "gapPct": -8.059125690498137,
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
        "valuationActualPeriodEnd": "2026-06-30",
        "valuationPeriods": "Q3'25~Q2'26",
        "earningsReleaseDate": null,
        "earningsReleaseAtUtc": null,
        "consensusUpdatedAtUtc": "2026-10-30T20:13:44.897636+00:00",
        "periodCompareMethod": null,
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.3565888807378542,
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
          "fairPrice": 81.60658273972604,
          "per": 30.0,
          "eps": 2.7202194246575346,
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
          "date": "2026-10-29",
          "prevFairPrice": 81.40018438356164,
          "newFairPrice": 81.46898383561646,
          "changePct": 0.08452001991866796,
          "epsEffect": 0.06879945205481519,
          "perEffect": 9.647865775692382e-15,
          "otherEffect": 0.0,
          "note": "EPS 2.7133->2.7156(적정PER 30.00배 유지 가정 시 +0.07) + 적정PER 30.00->30.00배(EPS 2.7156 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-10-30",
          "prevFairPrice": 81.46898383561646,
          "newFairPrice": 81.53778328767122,
          "changePct": 0.0844486439079461,
          "epsEffect": 0.06879945205477524,
          "perEffect": -1.931202653501203e-14,
          "otherEffect": 0.0,
          "note": "EPS 2.7156->2.7179(적정PER 30.00배 유지 가정 시 +0.07) + 적정PER 30.00->30.00배(EPS 2.7179 유지 가정 시 -0.00)"
        },
        {
          "date": "2026-10-31",
          "prevFairPrice": 81.53778328767122,
          "newFairPrice": 81.60658273972604,
          "changePct": 0.08437738834779121,
          "epsEffect": 0.06879945205481518,
          "perEffect": 9.664160759319652e-15,
          "otherEffect": 0.0,
          "note": "EPS 2.7179->2.7202(적정PER 30.00배 유지 가정 시 +0.07) + 적정PER 30.00->30.00배(EPS 2.7202 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2026-11-06"
    },
    "ANET": {
      "ticker": "ANET",
      "asOf": "2026-10-31",
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
      "currentPrice": 168.86000061035156,
      "fairPrice": 151.0849787609392,
      "ratio": 1.1176491666821335,
      "bandAggressiveLe": 120.86798300875137,
      "bandDcaHigh": 135.9764808848453,
      "bandFairHigh": 166.19347663703314,
      "modelCheckNeeded": false,
      "confidence": "높음",
      "confidenceNote": "적정가 후보 모두 중앙값 ±0% 안",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "고성장형",
      "stockTypeReason": "NTM PER 44.8배(기준 40 초과); 다음 회계연도 성장률 38.1%(기준 30% 초과)",
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
            "per": 44.21252716181534
          }
        ],
        "excluded": [],
        "note": "유효 비교군 2개 이하(최소 3개 기준 미달)"
      },
      "epsUsedForCandidates": 5.037603479452056,
      "ttmEps": 3.17,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 2.9001387829645022,
        "peTTM": 58.2248,
        "finnhubUpdated": "2026-10-30 10:11",
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
        "gapPct": -8.512972146230213,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 151.04185313831675,
        "fairHistProxy": 139.14225094305073,
        "proxyPer": 27.620723129678588,
        "trailingPer": 47.64727228338068,
        "modelSplitEligible": false,
        "modelSplitRatio": 1.0005710420221468,
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
        "consensusUpdatedAtUtc": "2026-10-30T20:13:44.897636+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.6292674707189942,
        "candSpread": 1.0005710420221468,
        "fairAltExCappedGrowth": 151.04185313831675,
        "fairAltGapPct": -0.028543951209536456,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 29.9914392582111,
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
          "fairPrice": 151.12810438356166,
          "per": 30.0,
          "eps": 5.037603479452056,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": "최대/최소 1.59배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-10-29",
          "prevFairPrice": 150.948668212994,
          "newFairPrice": 150.99410506230907,
          "changePct": 0.030100861341133486,
          "epsEffect": 0.09092983221330299,
          "perEffect": -0.045492982898220485,
          "otherEffect": 0.0,
          "note": "EPS 5.0285->5.0315(적정PER 30.02배 유지 가정 시 +0.09) + 적정PER 30.02->30.01배(EPS 5.0315 유지 가정 시 -0.05)"
        },
        {
          "date": "2026-10-30",
          "prevFairPrice": 150.99410506230907,
          "newFairPrice": 151.03954191162416,
          "changePct": 0.030091803449102228,
          "epsEffect": 0.09090244423460532,
          "perEffect": -0.04546559491952982,
          "otherEffect": 0.0,
          "note": "EPS 5.0315->5.0346(적정PER 30.01배 유지 가정 시 +0.09) + 적정PER 30.01->30.00배(EPS 5.0346 유지 가정 시 -0.05)"
        },
        {
          "date": "2026-10-31",
          "prevFairPrice": 151.03954191162416,
          "newFairPrice": 151.0849787609392,
          "changePct": 0.03008275100677836,
          "epsEffect": 0.09087508921256177,
          "perEffect": -0.04543823989750854,
          "otherEffect": 0.0,
          "note": "EPS 5.0346->5.0376(적정PER 30.00배 유지 가정 시 +0.09) + 적정PER 30.00->29.99배(EPS 5.0376 유지 가정 시 -0.05)"
        }
      ],
      "nextUpdateDate": "2026-11-04"
    },
    "ETN": {
      "ticker": "ETN",
      "asOf": "2026-10-31",
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
      "currentPrice": 369.9700012207031,
      "fairPrice": 328.60321077844355,
      "ratio": 1.1258867506019306,
      "bandAggressiveLe": 262.88256862275483,
      "bandDcaHigh": 295.7428897005992,
      "bandFairHigh": 361.46353185628794,
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
            "per": 19.783322797147175
          }
        ],
        "excluded": [],
        "note": "유효 비교군 3개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 15.845455315068493,
      "ttmEps": 9.83,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 9.21240042880237,
        "peTTM": 40.16,
        "finnhubUpdated": "2026-10-30 10:11",
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
        "gapPct": -6.2828033692536085,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 299.61276516709034,
        "fairHistProxy": 401.67396474003954,
        "proxyPer": 25.34947445518092,
        "trailingPer": 30.479426771830145,
        "modelSplitEligible": false,
        "modelSplitRatio": null,
        "actionBeforeModelSplit": null,
        "modelSplitMode": "on"
      },
      "earningsStatus": {
        "latestOfficialPeriodEnd": "2026-06-30",
        "latestOfficialSource": "10-Q 2026-07-31",
        "valuationActualPeriodEnd": "2026-06-30",
        "valuationPeriods": "Q3'25~Q2'26",
        "earningsReleaseDate": null,
        "earningsReleaseAtUtc": null,
        "consensusUpdatedAtUtc": "2026-10-30T20:13:44.897636+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.6203671528865442,
        "candSpread": 1.289107201722187,
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
          "fairPrice": 328.60321077844355,
          "per": 20.73801,
          "eps": 15.845455315068493,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 386.23297330479454,
          "per": 24.375,
          "eps": 15.845455315068493,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": false,
      "dispersionFlag": null,
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-10-29",
          "prevFairPrice": 328.1441888471277,
          "newFairPrice": 328.29719615756625,
          "changePct": 0.0466280725482691,
          "epsEffect": 0.15300731043859253,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 15.8233->15.8307(적정PER 20.74배 유지 가정 시 +0.15) + 적정PER 20.74->20.74배(EPS 15.8307 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-10-30",
          "prevFairPrice": 328.29719615756625,
          "newFairPrice": 328.45020346800493,
          "changePct": 0.046606340909852204,
          "epsEffect": 0.15300731043866622,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 15.8307->15.8381(적정PER 20.74배 유지 가정 시 +0.15) + 적정PER 20.74->20.74배(EPS 15.8381 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-10-31",
          "prevFairPrice": 328.45020346800493,
          "newFairPrice": 328.60321077844355,
          "changePct": 0.04658462951858987,
          "epsEffect": 0.1530073104386294,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 15.8381->15.8455(적정PER 20.74배 유지 가정 시 +0.15) + 적정PER 20.74->20.74배(EPS 15.8455 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2026-11-04"
    },
    "HUBB": {
      "ticker": "HUBB",
      "asOf": "2026-10-31",
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
      "currentPrice": 422.44000244140625,
      "fairPrice": 458.0723307193263,
      "ratio": 0.9222124413802392,
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
        "growthPerPeg": 18.77249955,
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
            "per": 19.783322797147175
          }
        ],
        "excluded": [],
        "note": "유효 비교군 3개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 22.640953616438356,
      "ttmEps": 17.060000000000002,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 16.662656639045707,
        "peTTM": 25.3525,
        "finnhubUpdated": "2026-10-30 10:11",
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
        "gapPct": -2.3290935577625738,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 458.0723307193263,
        "fairHistProxy": 487.62018757046894,
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
        "consensusUpdatedAtUtc": "2026-10-30T20:13:44.897636+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.7535018307538809,
        "candSpread": 1.5079568879254548,
        "fairAltExCappedGrowth": null,
        "fairAltGapPct": null,
        "fairAltApplicable": false,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 20.23202460813069,
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
          "fairPrice": 640.922831888571,
          "per": 28.30812,
          "eps": 22.640953616438356,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 425.0272915761599,
          "per": 18.77249955,
          "eps": 22.640953616438356,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": false,
      "dispersionFlag": "최대/최소 1.51배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
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
      "asOf": "2026-10-31",
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
      "currentPrice": 232.5,
      "fairPrice": 254.17990340515314,
      "ratio": 0.9147064613892932,
      "bandAggressiveLe": 203.34392272412254,
      "bandDcaHigh": 228.76191306463784,
      "bandFairHigh": 279.5978937456685,
      "modelCheckNeeded": false,
      "confidence": "보통",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±24%",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "고성장형",
      "stockTypeReason": "다음 회계연도 성장률 71.2%(기준 30% 초과)",
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
            "per": 19.783322797147175
          }
        ],
        "excluded": [],
        "note": "유효 비교군 3개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 9.316103452054794,
      "ttmEps": 5.35,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 4.930286804856068,
        "peTTM": 47.1575,
        "finnhubUpdated": "2026-10-30 10:11",
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
        "gapPct": -7.845106451288453,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 254.17990340515314,
        "fairHistProxy": 329.97709354323894,
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
        "consensusUpdatedAtUtc": "2026-10-30T20:13:44.897636+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.5742744300268569,
        "candSpread": 1.44661903432393,
        "fairAltExCappedGrowth": 223.68867497744998,
        "fairAltGapPct": -11.995924154200853,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 27.283928813509505,
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
          "fairPrice": 193.19744654974681,
          "per": 20.73801,
          "eps": 9.316103452054794,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 279.4831035616438,
          "per": 30.0,
          "eps": 9.316103452054794,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": "최대/최소 2.29배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [],
      "recentChanges": [
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
        },
        {
          "date": "2026-10-30",
          "prevFairPrice": 244.1355577208179,
          "newFairPrice": 254.17990340515314,
          "changePct": 4.114249385917593,
          "epsEffect": 13.59192442111153,
          "perEffect": -3.5475787367762868,
          "otherEffect": 0.0,
          "note": "EPS 8.7698->9.2581(적정PER 27.84배 유지 가정 시 +13.59) + 적정PER 27.84->27.45배(EPS 9.2581 유지 가정 시 -3.55)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "MOD": {
      "ticker": "MOD",
      "asOf": "2026-10-31",
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
      "currentPrice": 129.75999450683594,
      "fairPrice": 244.80202269865808,
      "ratio": 0.530060957325363,
      "bandAggressiveLe": 195.84161815892648,
      "bandDcaHigh": 220.32182042879228,
      "bandFairHigh": 269.2822249685239,
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
      "epsUsedForCandidates": 8.396841561643836,
      "ttmEps": 2.66,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 2.4757404613935567,
        "peTTM": 52.4126,
        "finnhubUpdated": "2026-10-30 10:11",
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
        "gapPct": -6.927050323550499,
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
        "modelSplitRatio": 1.0597665970046757,
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
        "consensusUpdatedAtUtc": "2026-10-30T20:13:44.897636+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.316785779566294,
        "candSpread": 1.0597665970046757,
        "fairAltExCappedGrowth": 237.6987985480011,
        "fairAltGapPct": -2.90161987730011,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": "WO8-B 분류 불가(이력 부족, 유효 0개년 <5년) - corporate_events.json 기업분할/분리상장(2026-10-01) 이전 회계연도 8개 제외 - 경기순환 여부 판단 안 함, NTM EPS 그대로 사용",
      "convertedFairPer": 29.154059999999998,
      "fairPriceBasis": "적정가 후보 2개 평균",
      "fairPriceCandidates": [
        {
          "candidate": "sector_per",
          "fairPrice": 237.6987985480011,
          "per": 28.30812,
          "eps": 8.396841561643836,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 251.90524684931506,
          "per": 30.0,
          "eps": 8.396841561643836,
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
          "date": "2026-10-29",
          "prevFairPrice": 251.28214753304707,
          "newFairPrice": 253.53241523589696,
          "changePct": 0.8955143550553886,
          "epsEffect": 2.2502677028498788,
          "perEffect": 3.089545948756021e-14,
          "otherEffect": 0.0,
          "note": "EPS 8.6191->8.6963(적정PER 29.15배 유지 가정 시 +2.25) + 적정PER 29.15->29.15배(EPS 8.6963 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-10-30",
          "prevFairPrice": 253.53241523589696,
          "newFairPrice": 249.4657569410482,
          "changePct": -1.6039993509567518,
          "epsEffect": -4.066658294848754,
          "perEffect": -3.039989651790464e-14,
          "otherEffect": 0.0,
          "note": "EPS 8.6963->8.5568(적정PER 29.15배 유지 가정 시 -4.07) + 적정PER 29.15->29.15배(EPS 8.5568 유지 가정 시 -0.00)"
        },
        {
          "date": "2026-10-31",
          "prevFairPrice": 249.4657569410482,
          "newFairPrice": 244.80202269865808,
          "changePct": -1.8694887424939115,
          "epsEffect": -4.66373424239013,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 8.5568->8.3968(적정PER 29.15배 유지 가정 시 -4.66) + 적정PER 29.15->29.15배(EPS 8.3968 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2026-11-04"
    },
    "PWR": {
      "ticker": "PWR",
      "asOf": "2026-10-31",
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
      "currentPrice": 620.72998046875,
      "fairPrice": 476.4864067382812,
      "ratio": 1.3027233761354649,
      "bandAggressiveLe": 381.18912539062495,
      "bandDcaHigh": 428.8377660644531,
      "bandFairHigh": 524.1350474121093,
      "modelCheckNeeded": false,
      "confidence": "보통",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±25%",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "고성장형",
      "stockTypeReason": "다음 회계연도 성장률 61.7%(기준 30% 초과)",
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
            "per": 19.582831649357512
          }
        ],
        "excluded": [],
        "note": "유효 비교군 3개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 19.92671106849315,
      "ttmEps": 11.04,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 8.598320873071117,
        "peTTM": 72.192,
        "finnhubUpdated": "2026-10-30 10:11",
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
        "gapPct": -22.116658758413788,
        "gapPrevPct": -1.5083519694030212,
        "gapCause": "period",
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 476.4864067382812,
        "fairHistProxy": 688.1917964118134,
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
        "consensusUpdatedAtUtc": "2026-10-30T20:13:44.897636+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.554030214120771,
        "candSpread": 1.4256278465036,
        "fairAltExCappedGrowth": 447.90568068428365,
        "fairAltGapPct": -5.998224849611711,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 23.911944379605682,
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
          "fairPrice": 419.3249546302861,
          "per": 21.04336,
          "eps": 19.92671106849315,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 597.8013320547946,
          "per": 30.0,
          "eps": 19.92671106849315,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": "최대/최소 2.05배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
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
      "asOf": "2026-10-31",
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
      "currentPrice": 679.5499877929688,
      "fairPrice": 1092.032959456835,
      "ratio": 0.6222797415665635,
      "bandAggressiveLe": 873.6263675654681,
      "bandDcaHigh": 982.8296635111515,
      "bandFairHigh": 1201.2362554025185,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±42% (±40% 밖)",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "고성장형",
      "stockTypeReason": "다음 회계연도 성장률 32.5%(기준 30% 초과)",
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
            "per": 19.582831649357512
          }
        ],
        "excluded": [],
        "note": "유효 비교군 3개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 38.298656657534245,
      "ttmEps": 34.62,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 31.77932357777382,
        "peTTM": 21.3834,
        "finnhubUpdated": "2026-10-30 10:11",
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
        "gapPct": -8.20530451249618,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 633.0331137197988,
        "fairHistProxy": 496.1466151323817,
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
        "consensusUpdatedAtUtc": "2026-10-30T20:13:44.897636+00:00",
        "periodCompareMethod": "fallback_45d",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.9039481543588144,
        "candSpread": 1.8150072639558543,
        "fairAltExCappedGrowth": 862.5330365883169,
        "fairAltGapPct": -21.01584213929484,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 28.51361,
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
          "fairPrice": 1092.032959456835,
          "per": 28.51361,
          "eps": 38.298656657534245,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 1148.9596997260273,
          "per": 30.0,
          "eps": 38.298656657534245,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": "최대/최소 1.64배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-10-29",
          "prevFairPrice": 1059.788998229573,
          "newFairPrice": 1060.13797825535,
          "changePct": 0.032929198770686376,
          "epsEffect": 0.3489800257768128,
          "perEffect": 1.320901385956983e-13,
          "otherEffect": 0.0,
          "note": "EPS 37.1678->37.1801(적정PER 28.51배 유지 가정 시 +0.35) + 적정PER 28.51->28.51배(EPS 37.1801 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-10-30",
          "prevFairPrice": 1060.13797825535,
          "newFairPrice": 1060.4869582811268,
          "changePct": 0.03291835901881302,
          "epsEffect": 0.3489800257770154,
          "perEffect": -1.321336205017497e-13,
          "otherEffect": 0.0,
          "note": "EPS 37.1801->37.1923(적정PER 28.51배 유지 가정 시 +0.35) + 적정PER 28.51->28.51배(EPS 37.1923 유지 가정 시 -0.00)"
        },
        {
          "date": "2026-10-31",
          "prevFairPrice": 1060.4869582811268,
          "newFairPrice": 1092.032959456835,
          "changePct": 2.9746712988190818,
          "epsEffect": null,
          "perEffect": null,
          "otherEffect": 31.54600117570817,
          "note": "기타(종목유형 변경: 기타 -> 고성장형)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "FIX": {
      "ticker": "FIX",
      "asOf": "2026-10-31",
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
      "currentPrice": 1232.6600341796875,
      "fairPrice": 1354.633705276686,
      "ratio": 0.9099581897144031,
      "bandAggressiveLe": 1083.706964221349,
      "bandDcaHigh": 1219.1703347490175,
      "bandFairHigh": 1490.0970758043547,
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
            "per": 19.582831649357512
          }
        ],
        "excluded": [],
        "note": "유효 비교군 3개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 64.37345106849315,
      "ttmEps": 46.32,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 41.78678570584863,
        "peTTM": 29.4988,
        "finnhubUpdated": "2026-10-30 10:12",
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
        "gapPct": -9.786732068547865,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 1166.1325478590172,
        "fairHistProxy": 906.8279153003889,
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
        "consensusUpdatedAtUtc": "2026-10-30T20:13:44.897636+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.7195512937579759,
        "candSpread": 1.6560754912470488,
        "fairAltExCappedGrowth": 1260.3831265678516,
        "fairAltGapPct": -6.957643113536993,
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
          "fairPrice": 1354.633705276686,
          "per": 21.04336,
          "eps": 64.37345106849315,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 1931.2035320547946,
          "per": 30.0,
          "eps": 64.37345106849315,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": null,
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-10-29",
          "prevFairPrice": 1331.1274269631037,
          "newFairPrice": 1331.9839078579548,
          "changePct": 0.06434251729040623,
          "epsEffect": 0.8564808948511158,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 63.2564->63.2971(적정PER 21.04배 유지 가정 시 +0.86) + 적정PER 21.04->21.04배(EPS 63.2971 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-10-30",
          "prevFairPrice": 1331.9839078579548,
          "newFairPrice": 1353.708353212002,
          "changePct": 1.6309840701441856,
          "epsEffect": 21.72444535404722,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 63.2971->64.3295(적정PER 21.04배 유지 가정 시 +21.72) + 적정PER 21.04->21.04배(EPS 64.3295 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-10-31",
          "prevFairPrice": 1353.708353212002,
          "newFairPrice": 1354.633705276686,
          "changePct": 0.06835682608357242,
          "epsEffect": 0.9253520646839535,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 64.3295->64.3735(적정PER 21.04배 유지 가정 시 +0.93) + 적정PER 21.04->21.04배(EPS 64.3735 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "COHR": {
      "ticker": "COHR",
      "asOf": "2026-10-31",
      "verdict": "적정",
      "action": "관망(모델 민감도 높음)",
      "actionRaw": "관망(적정가 근처)",
      "actionCapReason": "model_split",
      "cashflowVeto": true,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "a_kept_two_candidates",
      "candidateBadge": "후보 2개",
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": null,
      "sectorFewPeers": null,
      "currentPrice": 210.32000732421875,
      "fairPrice": 223.29439774387464,
      "ratio": 0.9418955847045571,
      "bandAggressiveLe": 178.63551819509973,
      "bandDcaHigh": 200.9649579694872,
      "bandFairHigh": 245.62383751826212,
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
      "epsUsedForCandidates": 10.918807315068493,
      "ttmEps": 3.619604365213434,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 3.619604365213434,
        "peTTM": 58.1058,
        "finnhubUpdated": "2026-10-30 10:11",
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
        "gapPct": -11.931767269746118,
        "gapPrevPct": 73.1868117327002,
        "gapCause": "definition_unexplained",
        "source": "finnhub_peTTM(차이 원인 미확인 - 검증 전 유지)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 119.02457603569454,
        "fairHistProxy": 236.42397829630912,
        "proxyPer": 21.652912399143847,
        "trailingPer": 32.88331099928821,
        "modelSplitEligible": true,
        "modelSplitRatio": 2.752072138058453,
        "actionBeforeModelSplit": "관망(적정가 근처)",
        "modelSplitMode": "on"
      },
      "earningsStatus": {
        "latestOfficialPeriodEnd": "2026-06-30",
        "latestOfficialSource": "10-K 2026-08-14",
        "valuationActualPeriodEnd": "2026-06-30",
        "valuationPeriods": "Q3'25~Q2'26",
        "earningsReleaseDate": null,
        "earningsReleaseAtUtc": null,
        "consensusUpdatedAtUtc": "2026-10-30T20:13:44.897636+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.33150180791433154,
        "candSpread": 2.752072138058453,
        "fairAltExCappedGrowth": 119.02457603569454,
        "fairAltGapPct": -46.69612079913475,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 20.45043852323663,
      "fairPriceBasis": "적정가 후보 2개 평균",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 119.02457603569454,
          "per": 32.88331099928821,
          "eps": 3.619604365213434,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 327.5642194520548,
          "per": 30.0,
          "eps": 10.918807315068493,
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
          "date": "2026-10-29",
          "prevFairPrice": 230.68025204874277,
          "newFairPrice": 230.86601328161947,
          "changePct": 0.08052758362577524,
          "epsEffect": 0.26272300312419883,
          "perEffect": -0.07696177024750119,
          "otherEffect": 0.0,
          "note": "EPS 10.8737->10.8861(적정PER 21.21배 유지 가정 시 +0.26) + 적정PER 21.21->21.21배(EPS 10.8861 유지 가정 시 -0.08)"
        },
        {
          "date": "2026-10-30",
          "prevFairPrice": 230.86601328161947,
          "newFairPrice": 231.17201903504412,
          "changePct": 0.13254690418696002,
          "epsEffect": 0.43264117980664457,
          "perEffect": -0.12663542638199882,
          "otherEffect": 0.0,
          "note": "EPS 10.8861->10.9065(적정PER 21.21배 유지 가정 시 +0.43) + 적정PER 21.21->21.20배(EPS 10.9065 유지 가정 시 -0.13)"
        },
        {
          "date": "2026-10-31",
          "prevFairPrice": 231.17201903504412,
          "newFairPrice": 223.29439774387464,
          "changePct": -3.407688060195244,
          "epsEffect": 0.26183255330451843,
          "perEffect": -8.139453844474009,
          "otherEffect": 0.0,
          "note": "EPS 10.9065->10.9188(적정PER 21.20배 유지 가정 시 +0.26) + 적정PER 21.20->20.45배(EPS 10.9188 유지 가정 시 -8.14)"
        }
      ],
      "nextUpdateDate": "2026-11-05"
    },
    "LITE": {
      "ticker": "LITE",
      "asOf": "2026-10-31",
      "verdict": "적정",
      "action": "관망(적정가 근처)",
      "actionRaw": "관망(적정가 근처)",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "a_kept_one_candidate",
      "candidateBadge": "후보 1개",
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": null,
      "sectorFewPeers": null,
      "currentPrice": 840.7000122070312,
      "fairPrice": 795.0549410958905,
      "ratio": 1.0574112161962346,
      "bandAggressiveLe": 636.0439528767124,
      "bandDcaHigh": 715.5494469863015,
      "bandFairHigh": 874.5604352054796,
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
            "per": 25.10367887101384
          },
          {
            "ticker": "AAOI",
            "per": 31.88424
          }
        ],
        "excluded": [],
        "note": "유효 비교군 2개 이하(최소 3개 기준 미달)"
      },
      "epsUsedForCandidates": 26.501831369863016,
      "ttmEps": null,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": null,
        "peTTM": null,
        "finnhubUpdated": "2026-10-30 10:11",
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
        "fairHistProxy": 808.835891097443,
        "proxyPer": 30.51999991280692,
        "trailingPer": 29.03731331896426,
        "modelSplitEligible": false,
        "modelSplitRatio": null,
        "actionBeforeModelSplit": null,
        "modelSplitMode": "on"
      },
      "earningsStatus": {
        "latestOfficialPeriodEnd": "2026-06-27",
        "latestOfficialSource": "10-K 2026-08-17",
        "valuationActualPeriodEnd": "2026-06-27",
        "valuationPeriods": "Q3'25~Q2'26",
        "earningsReleaseDate": null,
        "earningsReleaseAtUtc": null,
        "consensusUpdatedAtUtc": "2026-10-30T20:13:44.897636+00:00",
        "periodCompareMethod": "fiscal_period",
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
          "fairPrice": 795.0549410958905,
          "per": 30.0,
          "eps": 26.501831369863016,
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
          "date": "2026-10-29",
          "prevFairPrice": 794.0857273972603,
          "newFairPrice": 792.2820073972603,
          "changePct": -0.22714424120327306,
          "epsEffect": -1.8037200000000553,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 26.4695->26.4094(적정PER 30.00배 유지 가정 시 -1.80) + 적정PER 30.00->30.00배(EPS 26.4094 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-10-30",
          "prevFairPrice": 792.2820073972603,
          "newFairPrice": 793.4260463013699,
          "changePct": 0.14439794081250304,
          "epsEffect": 1.144038904109621,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 26.4094->26.4475(적정PER 30.00배 유지 가정 시 +1.14) + 적정PER 30.00->30.00배(EPS 26.4475 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-10-31",
          "prevFairPrice": 793.4260463013699,
          "newFairPrice": 795.0549410958905,
          "changePct": 0.205298880987572,
          "epsEffect": 1.628894794520619,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 26.4475->26.5018(적정PER 30.00배 유지 가정 시 +1.63) + 적정PER 30.00->30.00배(EPS 26.5018 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2026-11-06"
    },
    "CEG": {
      "ticker": "CEG",
      "asOf": "2026-10-31",
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
      "currentPrice": 262.3800048828125,
      "fairPrice": 239.3795197081423,
      "ratio": 1.0960837635680487,
      "bandAggressiveLe": 191.50361576651386,
      "bandDcaHigh": 215.44156773732809,
      "bandFairHigh": 263.31747167895657,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±63% (±40% 밖)",
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
        "growthPerPeg": 29.67,
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
      "epsUsedForCandidates": 13.178519315068494,
      "ttmEps": 10.26,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 9.698309500292467,
        "peTTM": 27.0542,
        "finnhubUpdated": "2026-10-30 10:11",
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
        "gapPct": -5.474566273952563,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과 · 판정 변경 승인 2026-10-26 23:21)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 239.3795197081423,
        "fairHistProxy": 226.77048664406388,
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
        "consensusUpdatedAtUtc": "2026-10-30T20:13:44.897636+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.7785396640325579,
        "candSpread": 2.881007682687154,
        "fairAltExCappedGrowth": null,
        "fairAltGapPct": null,
        "fairAltApplicable": false,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 18.164371427860836,
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
          "fairPrice": 135.71871759584658,
          "per": 10.29848,
          "eps": 13.178519315068494,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 391.0066680780822,
          "per": 29.67,
          "eps": 13.178519315068494,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": false,
      "dispersionFlag": "최대/최소 2.88배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
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
      "asOf": "2026-10-31",
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
      "currentPrice": 138.3699951171875,
      "fairPrice": 104.99876933804931,
      "ratio": 1.3178249229921704,
      "bandAggressiveLe": 83.99901547043946,
      "bandDcaHigh": 94.49889240424439,
      "bandFairHigh": 115.49864627185426,
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
      "epsUsedForCandidates": 10.195559863013699,
      "ttmEps": 6.293607470148346,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 6.293607470148346,
        "peTTM": 21.9858,
        "finnhubUpdated": "2026-10-30 10:11",
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
        "fairHistTrailing": 95.17870915599092,
        "fairHistProxy": 125.47116077500411,
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
        "consensusUpdatedAtUtc": "2026-10-30T20:13:44.897636+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.6172890507935307,
        "candSpread": 3.213605212791001,
        "fairAltExCappedGrowth": 100.08873924702011,
        "fairAltGapPct": -4.676273943003162,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 10.29848,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 95.17870915599092,
          "per": 15.123076805701622,
          "eps": 6.293607470148346,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "sector_per",
          "fairPrice": 104.99876933804931,
          "per": 10.29848,
          "eps": 10.195559863013699,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 305.86679589041097,
          "per": 30.0,
          "eps": 10.195559863013699,
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
          "date": "2026-10-29",
          "prevFairPrice": 104.45005898774575,
          "newFairPrice": 105.2838402932537,
          "changePct": 0.7982583385671191,
          "epsEffect": 0.8337813055079574,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 10.1423->10.2232(적정PER 10.30배 유지 가정 시 +0.83) + 적정PER 10.30->10.30배(EPS 10.2232 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-10-30",
          "prevFairPrice": 105.2838402932537,
          "newFairPrice": 104.58757106430905,
          "changePct": -0.6613258283562753,
          "epsEffect": -0.6962692289446667,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 10.2232->10.1556(적정PER 10.30배 유지 가정 시 -0.70) + 적정PER 10.30->10.30배(EPS 10.1556 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-10-31",
          "prevFairPrice": 104.58757106430905,
          "newFairPrice": 104.99876933804931,
          "changePct": 0.3931617012956825,
          "epsEffect": 0.4111982737402751,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 10.1556->10.1956(적정PER 10.30배 유지 가정 시 +0.41) + 적정PER 10.30->10.30배(EPS 10.1956 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2026-11-09"
    },
    "GEV": {
      "ticker": "GEV",
      "asOf": "2026-10-31",
      "verdict": "고평가",
      "action": "신규 추격 금지",
      "actionRaw": "신규 추격 금지",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": 1208.9167887389006,
      "fairBasisMode": "a_kept_b_higher",
      "candidateBadge": null,
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": "median",
      "sectorFewPeers": true,
      "currentPrice": 857.8699951171875,
      "fairPrice": 767.9871,
      "ratio": 1.1170369855394542,
      "bandAggressiveLe": 614.3896800000001,
      "bandDcaHigh": 691.18839,
      "bandFairHigh": 844.7858100000001,
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
      "epsUsedForCandidates": 25.59957,
      "ttmEps": 38.11,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 34.95332718571616,
        "peTTM": 24.5433,
        "finnhubUpdated": "2026-10-30 10:11",
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
        "gapPct": -8.283056453119485,
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
        "consensusUpdatedAtUtc": "2026-10-30T20:13:44.897636+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 1.488696880455414,
        "candSpread": 3.094012379583615,
        "fairAltExCappedGrowth": 1208.9167887389006,
        "fairAltGapPct": 57.413684258355445,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": "WO8-B 분류 불가(이력 부족, 유효 4개년 <5년) - 필터 없음(원본 그대로) - 경기순환 여부 판단 안 함, NTM EPS 그대로 사용",
      "convertedFairPer": 30.000000000000004,
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
          "fairPrice": 590.5779839688,
          "per": 23.06984,
          "eps": 25.59957,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 767.9871,
          "per": 30.0,
          "eps": 25.59957,
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
          "date": "2026-10-24",
          "prevFairPrice": 1207.8201758933426,
          "newFairPrice": 733.2077999999999,
          "changePct": -39.294953451353315,
          "epsEffect": -2.2104254585256586,
          "perEffect": -472.40195043481714,
          "otherEffect": 0.0,
          "note": "EPS 24.4851->24.4403(적정PER 49.33배 유지 가정 시 -2.21) + 적정PER 49.33->30.00배(EPS 24.4403 유지 가정 시 -472.40)"
        },
        {
          "date": "2026-10-30",
          "prevFairPrice": 733.2077999999999,
          "newFairPrice": 763.3803,
          "changePct": 4.11513625468798,
          "epsEffect": 30.172500000000074,
          "perEffect": 9.040238779789434e-14,
          "otherEffect": 0.0,
          "note": "EPS 24.4403->25.4460(적정PER 30.00배 유지 가정 시 +30.17) + 적정PER 30.00->30.00배(EPS 25.4460 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-10-31",
          "prevFairPrice": 763.3803,
          "newFairPrice": 767.9871,
          "changePct": 0.6034737862635465,
          "epsEffect": 4.606799999999964,
          "perEffect": 9.094794251041094e-14,
          "otherEffect": 0.0,
          "note": "EPS 25.4460->25.5996(적정PER 30.00배 유지 가정 시 +4.61) + 적정PER 30.00->30.00배(EPS 25.5996 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "BE": {
      "ticker": "BE",
      "asOf": "2026-10-31",
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
      "currentPrice": 203.1699981689453,
      "fairPrice": 149.04517479452056,
      "ratio": 1.3631437478539197,
      "bandAggressiveLe": 119.23613983561646,
      "bandDcaHigh": 134.14065731506852,
      "bandFairHigh": 163.94969227397263,
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
      "epsUsedForCandidates": 4.968172493150686,
      "ttmEps": 1.6300000000000001,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 1.6119600835688712,
        "peTTM": 126.0391,
        "finnhubUpdated": "2026-10-30 10:12",
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
        "gapPct": -1.1067433393330606,
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
        "consensusUpdatedAtUtc": "2026-10-30T20:13:44.897636+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.328088447461754,
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
          "fairPrice": 149.04517479452056,
          "per": 30.0,
          "eps": 4.968172493150686,
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
          "date": "2026-10-29",
          "prevFairPrice": 148.5407210958904,
          "newFairPrice": 148.70887232876711,
          "changePct": 0.11320211160693093,
          "epsEffect": 0.16815123287670983,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 4.9514->4.9570(적정PER 30.00배 유지 가정 시 +0.17) + 적정PER 30.00->30.00배(EPS 4.9570 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-10-30",
          "prevFairPrice": 148.70887232876711,
          "newFairPrice": 148.87702356164385,
          "changePct": 0.1130741093275106,
          "epsEffect": 0.16815123287673647,
          "perEffect": 1.763058126888522e-14,
          "otherEffect": 0.0,
          "note": "EPS 4.9570->4.9626(적정PER 30.00배 유지 가정 시 +0.17) + 적정PER 30.00->30.00배(EPS 4.9626 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-10-31",
          "prevFairPrice": 148.87702356164385,
          "newFairPrice": 149.04517479452056,
          "changePct": 0.11294639619597537,
          "epsEffect": 0.16815123287670986,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 4.9626->4.9682(적정PER 30.00배 유지 가정 시 +0.17) + 적정PER 30.00->30.00배(EPS 4.9682 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "AAPL": {
      "ticker": "AAPL",
      "asOf": "2026-10-31",
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
      "currentPrice": 344.6300048828125,
      "fairPrice": 215.145408736,
      "ratio": 1.6018468946539317,
      "bandAggressiveLe": 172.1163269888,
      "bandDcaHigh": 193.6308678624,
      "bandFairHigh": 236.65994960960003,
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
        "growthPerPeg": 19.935,
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
      "epsUsedForCandidates": 9.5552,
      "ttmEps": 8.719999999999999,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 8.71054260193588,
        "peTTM": 39.5647,
        "finnhubUpdated": "2026-10-30 10:10",
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
        "gapPct": -0.10845639981789112,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 243.54832928954679,
        "fairHistProxy": 234.48428483126017,
        "proxyPer": 24.539966178757137,
        "trailingPer": 27.929854276324175,
        "modelSplitEligible": false,
        "modelSplitRatio": null,
        "actionBeforeModelSplit": null,
        "modelSplitMode": "on"
      },
      "earningsStatus": {
        "latestOfficialPeriodEnd": "2026-06-27",
        "latestOfficialSource": "10-Q 2026-07-31",
        "valuationActualPeriodEnd": "2026-06-27",
        "valuationPeriods": "Q3'25~Q2'26",
        "earningsReleaseDate": null,
        "earningsReleaseAtUtc": null,
        "consensusUpdatedAtUtc": "2026-10-30T20:13:44.897636+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.9125920964501004,
        "candSpread": 1.2785836101116872,
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
          "fairPrice": 215.145408736,
          "per": 22.516055,
          "eps": 9.5552,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 190.48291199999997,
          "per": 19.935,
          "eps": 9.5552,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": false,
      "dispersionFlag": null,
      "qualityWarnings": [],
      "recentChanges": [
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
        },
        {
          "date": "2026-10-31",
          "prevFairPrice": 215.609239469,
          "newFairPrice": 215.145408736,
          "changePct": -0.21512562919024136,
          "epsEffect": -0.46383073299999894,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 9.5758->9.5552(적정PER 22.52배 유지 가정 시 -0.46) + 적정PER 22.52->22.52배(EPS 9.5552 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2026-11-03"
    },
    "MSFT": {
      "ticker": "MSFT",
      "asOf": "2026-10-31",
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
      "currentPrice": 521.9099731445312,
      "fairPrice": 584.5866271396122,
      "ratio": 0.892784659988275,
      "bandAggressiveLe": 467.6693017116898,
      "bandDcaHigh": 526.127964425651,
      "bandFairHigh": 643.0452898535735,
      "modelCheckNeeded": false,
      "confidence": "높음",
      "confidenceNote": "적정가 후보 모두 중앙값 ±18% 안",
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
        "growthPerPeg": 27.30749925,
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
      "epsUsedForCandidates": 21.40754895890411,
      "ttmEps": 19.16,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 18.603630584530347,
        "peTTM": 28.0542,
        "finnhubUpdated": "2026-10-30 10:10",
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
        "gapPct": -2.9038069700921376,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 674.0440665000726,
        "fairHistProxy": 600.9642365083744,
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
        "consensusUpdatedAtUtc": "2026-10-30T20:13:44.897636+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.8950113829836984,
        "candSpread": 1.3983923622401908,
        "fairAltExCappedGrowth": null,
        "fairAltGapPct": null,
        "fairAltApplicable": false,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 27.30749925,
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
          "fairPrice": 482.0135497738777,
          "per": 22.516055,
          "eps": 21.40754895890411,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 584.5866271396122,
          "per": 27.30749925,
          "eps": 21.40754895890411,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": false,
      "dispersionFlag": "최대/최소 1.56배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-10-29",
          "prevFairPrice": 540.611989939726,
          "newFairPrice": 540.8884798158904,
          "changePct": 0.05114386682308794,
          "epsEffect": 0.2764898761643601,
          "perEffect": 7.482951327677268e-14,
          "otherEffect": 0.0,
          "note": "EPS 21.0519->21.0626(적정PER 25.68배 유지 가정 시 +0.28) + 적정PER 25.68->25.68배(EPS 21.0626 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-10-30",
          "prevFairPrice": 540.8884798158904,
          "newFairPrice": 541.1649696920547,
          "changePct": 0.05111772324276863,
          "epsEffect": 0.27648987616436016,
          "perEffect": -7.486776442027342e-14,
          "otherEffect": 0.0,
          "note": "EPS 21.0626->21.0734(적정PER 25.68배 유지 가정 시 +0.28) + 적정PER 25.68->25.68배(EPS 21.0734 유지 가정 시 -0.00)"
        },
        {
          "date": "2026-10-31",
          "prevFairPrice": 541.1649696920547,
          "newFairPrice": 584.5866271396122,
          "changePct": 8.023737654761037,
          "epsEffect": 8.58088757260274,
          "perEffect": 34.84076987495479,
          "otherEffect": 0.0,
          "note": "EPS 21.0734->21.4075(적정PER 25.68배 유지 가정 시 +8.58) + 적정PER 25.68->27.31배(EPS 21.4075 유지 가정 시 +34.84)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "GOOGL": {
      "ticker": "GOOGL",
      "asOf": "2026-10-31",
      "verdict": "매수",
      "action": "적극 모아가기",
      "actionRaw": "적극 모아가기",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": 445.1925,
      "fairPriceB": 404.87247953261584,
      "fairBasisMode": "ex_capped_growth_floor_b",
      "candidateBadge": null,
      "lowConfidenceCapEligible": false,
      "sectorPerMethod": "median",
      "sectorFewPeers": true,
      "currentPrice": 279.8399963378906,
      "fairPrice": 404.87247953261584,
      "ratio": 0.6911805827378968,
      "bandAggressiveLe": 323.8979836260927,
      "bandDcaHigh": 364.38523157935424,
      "bandFairHigh": 445.35972748587744,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "EPS 품질 경고: EPS 일회성 정상화 적용; 다음회계연도 대안 기준 사용",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "고성장형",
      "stockTypeReason": "다음 회계연도 성장률 82.3%(기준 30% 초과)",
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
      "epsUsedForCandidates": 14.83975,
      "ttmEps": 19.16,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 19.05864540443712,
        "peTTM": 14.6831,
        "finnhubUpdated": "2026-10-30 10:10",
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
        "gapPct": -0.5289905822697394,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 461.45869772023167,
        "fairHistProxy": 257.8314320559526,
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
        "consensusUpdatedAtUtc": "2026-10-30T20:13:44.897636+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 1.2911268720834246,
        "candSpread": 1.3249408573803232,
        "fairAltExCappedGrowth": 404.87247953261584,
        "fairAltGapPct": 0.0,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 27.28297171668093,
      "fairPriceBasis": "B안: 성장 PER 상한 후보 제외, 나머지 두 후보의 평균 (A안 상한 포함 $445.19, 낮은 쪽 적용)",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 461.45869772023167,
          "per": 24.0844831795528,
          "eps": 19.16,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "sector_per",
          "fairPrice": 348.286261345,
          "per": 23.46982,
          "eps": 14.83975,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 445.1925,
          "per": 30.0,
          "eps": 14.83975,
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
          "date": "2026-10-29",
          "prevFairPrice": 453.4809,
          "newFairPrice": 417.74663965534813,
          "changePct": -7.8799923755668395,
          "epsEffect": 1.5347999999999828,
          "perEffect": -37.269060344651884,
          "otherEffect": 0.0,
          "note": "EPS 15.1160->15.1672(적정PER 30.00배 유지 가정 시 +1.53) + 적정PER 30.00->27.54배(EPS 15.1672 유지 가정 시 -37.27)"
        },
        {
          "date": "2026-10-30",
          "prevFairPrice": 417.74663965534813,
          "newFairPrice": 406.77682072741584,
          "changePct": -2.6259502498889473,
          "epsEffect": -4.5489662228453245,
          "perEffect": -6.420852705086951,
          "otherEffect": 0.0,
          "note": "EPS 15.1672->15.0020(적정PER 27.54배 유지 가정 시 -4.55) + 적정PER 27.54->27.11배(EPS 15.0020 유지 가정 시 -6.42)"
        },
        {
          "date": "2026-10-31",
          "prevFairPrice": 406.77682072741584,
          "newFairPrice": 404.87247953261584,
          "changePct": -0.46815381254875144,
          "epsEffect": -4.400187339156412,
          "perEffect": 2.4958461443564173,
          "otherEffect": 0.0,
          "note": "EPS 15.0020->14.8398(적정PER 27.11배 유지 가정 시 -4.40) + 적정PER 27.11->27.28배(EPS 14.8398 유지 가정 시 +2.50)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "META": {
      "ticker": "META",
      "asOf": "2026-10-31",
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
      "currentPrice": 614.989990234375,
      "fairPrice": 777.3833162983107,
      "ratio": 0.7911026353932976,
      "bandAggressiveLe": 621.9066530386485,
      "bandDcaHigh": 699.6449846684797,
      "bandFairHigh": 855.1216479281418,
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
      "epsUsedForCandidates": 33.12267909589041,
      "ttmEps": 29.33,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 29.55758970679235,
        "peTTM": 20.8065,
        "finnhubUpdated": "2026-10-30 10:10",
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
        "gapPct": 0.7759621779486858,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 716.4230703715406,
        "fairHistProxy": 657.0654424932679,
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
        "consensusUpdatedAtUtc": "2026-10-30T20:13:44.897636+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.8854960045680309,
        "candSpread": 1.3870021974046491,
        "fairAltExCappedGrowth": 746.9031933349256,
        "fairAltGapPct": -3.920861475201598,
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
          "fairPrice": 777.3833162983107,
          "per": 23.46982,
          "eps": 33.12267909589041,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 993.6803728767123,
          "per": 30.0,
          "eps": 33.12267909589041,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": null,
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-10-29",
          "prevFairPrice": 777.5061193986734,
          "newFairPrice": 777.2882828175735,
          "changePct": -0.02801734618736139,
          "epsEffect": -0.21783658109979703,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 33.1279->33.1186(적정PER 23.47배 유지 가정 시 -0.22) + 적정PER 23.47->23.47배(EPS 33.1186 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-10-30",
          "prevFairPrice": 777.2882828175735,
          "newFairPrice": 777.3475965182882,
          "changePct": 0.0076308497150768635,
          "epsEffect": 0.059313700714770115,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 33.1186->33.1212(적정PER 23.47배 유지 가정 시 +0.06) + 적정PER 23.47->23.47배(EPS 33.1212 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-10-31",
          "prevFairPrice": 777.3475965182882,
          "newFairPrice": 777.3833162983107,
          "changePct": 0.004595084641980768,
          "epsEffect": 0.03571978002236375,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 33.1212->33.1227(적정PER 23.47배 유지 가정 시 +0.04) + 적정PER 23.47->23.47배(EPS 33.1227 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "AMZN": {
      "ticker": "AMZN",
      "asOf": "2026-10-31",
      "verdict": "매수",
      "action": "분할매수",
      "actionRaw": "적극 모아가기",
      "actionCapReason": "low_confidence_cap",
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": 440.8632242884066,
      "fairBasisMode": "a_kept_b_higher",
      "candidateBadge": null,
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": "median",
      "sectorFewPeers": true,
      "currentPrice": 240.35000610351562,
      "fairPrice": 316.5804,
      "ratio": 0.75920684320165,
      "bandAggressiveLe": 253.26432,
      "bandDcaHigh": 284.92236,
      "bandFairHigh": 348.23844,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "EPS 품질 경고: 다음회계연도 대안 기준 사용",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "고성장형",
      "stockTypeReason": "다음 회계연도 성장률 80.2%(기준 30% 초과)",
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
      "epsUsedForCandidates": 10.55268,
      "ttmEps": 12.37,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 12.32197634055079,
        "peTTM": 19.5058,
        "finnhubUpdated": "2026-10-30 10:10",
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
        "gapPct": -0.38822683467428787,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 636.5090219474132,
        "fairHistProxy": 322.89434571257397,
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
        "consensusUpdatedAtUtc": "2026-10-30T20:13:44.897636+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 1.1722140726336816,
        "candSpread": 2.5956924460730795,
        "fairAltExCappedGrowth": 440.8632242884066,
        "fairAltGapPct": 39.2579023491052,
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
          "fairPrice": 245.21742662940002,
          "per": 23.237455,
          "eps": 10.55268,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 316.5804,
          "per": 30.0,
          "eps": 10.55268,
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
        },
        {
          "date": "2026-10-30",
          "prevFairPrice": 316.38750000000005,
          "newFairPrice": 316.5804,
          "changePct": 0.06096953893562541,
          "epsEffect": 0.1928999999999981,
          "perEffect": -3.749065058400447e-14,
          "otherEffect": 0.0,
          "note": "EPS 10.5463->10.5527(적정PER 30.00배 유지 가정 시 +0.19) + 적정PER 30.00->30.00배(EPS 10.5527 유지 가정 시 -0.00)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "ORCL": {
      "ticker": "ORCL",
      "asOf": "2026-10-31",
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
      "currentPrice": 130.6699981689453,
      "fairPrice": 220.16195947106576,
      "ratio": 0.5935176016913962,
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
            "per": 26.363778974201058
          },
          {
            "ticker": "ADBE",
            "per": 8.79127
          }
        ],
        "excluded": [],
        "note": "유효 비교군 4개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 9.352656493150686,
      "ttmEps": 6.38,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 5.778253309614148,
        "peTTM": 22.6141,
        "finnhubUpdated": "2026-10-30 10:10",
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
        "gapPct": -9.431766306988276,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 220.16195947106576,
        "fairHistProxy": 265.5480648189393,
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
        "consensusUpdatedAtUtc": "2026-10-30T20:13:44.897636+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.6821591282297518,
        "candSpread": 1.6019684988914382,
        "fairAltExCappedGrowth": 197.65439175601944,
        "fairAltGapPct": -10.22318649830346,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 23.540045508171815,
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
          "fairPrice": 175.14682404097314,
          "per": 18.72696,
          "eps": 9.352656493150686,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 280.5796947945206,
          "per": 30.0,
          "eps": 9.352656493150686,
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
      "asOf": "2026-10-31",
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
      "currentPrice": 229.1699981689453,
      "fairPrice": 357.3679468590834,
      "ratio": 0.6412718325275858,
      "bandAggressiveLe": 285.89435748726675,
      "bandDcaHigh": 321.6311521731751,
      "bandFairHigh": 393.1047415449918,
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
            "per": 26.363778974201058
          },
          {
            "ticker": "ADBE",
            "per": 8.79127
          }
        ],
        "excluded": [],
        "note": "유효 비교군 4개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 16.201652246575343,
      "ttmEps": 10.969999999999999,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 11.661586436234284,
        "peTTM": 19.6517,
        "finnhubUpdated": "2026-10-30 10:10",
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
        "gapPct": 6.30434308326604,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 577.1543714316755,
        "fairHistProxy": 692.0615225137786,
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
        "consensusUpdatedAtUtc": "2026-10-30T20:13:44.897636+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.6770914369130966,
        "candSpread": 1.7965636260299365,
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
          "fairPrice": 321.25462358774166,
          "per": 19.82851,
          "eps": 16.201652246575343,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 357.3679468590834,
          "per": 22.05750015,
          "eps": 16.201652246575343,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": false,
      "dispersionFlag": "최대/최소 2.65배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-10-29",
          "prevFairPrice": 357.5020341003377,
          "newFairPrice": 357.45733835325296,
          "changePct": -0.012502235741741445,
          "epsEffect": -0.044695747084758715,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 16.2077->16.2057(적정PER 22.06배 유지 가정 시 -0.04) + 적정PER 22.06->22.06배(EPS 16.2057 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-10-30",
          "prevFairPrice": 357.45733835325296,
          "newFairPrice": 357.4126426061682,
          "changePct": -0.012503798996168618,
          "epsEffect": -0.044695747084758715,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 16.2057->16.2037(적정PER 22.06배 유지 가정 시 -0.04) + 적정PER 22.06->22.06배(EPS 16.2037 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-10-31",
          "prevFairPrice": 357.4126426061682,
          "newFairPrice": 357.3679468590834,
          "changePct": -0.012505362641592967,
          "epsEffect": -0.044695747084758715,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 16.2037->16.2017(적정PER 22.06배 유지 가정 시 -0.04) + 적정PER 22.06->22.06배(EPS 16.2017 유지 가정 시 +0.00)"
        }
      ],
      "nextUpdateDate": "2026-12-02"
    },
    "PLTR": {
      "ticker": "PLTR",
      "asOf": "2026-10-31",
      "verdict": "고평가",
      "action": "신규 추격 금지 · 모델 점검 필요(적정가/현재가 비율 2.76배)",
      "actionRaw": "신규 추격 금지 · 모델 점검 필요(적정가/현재가 비율 2.76배)",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "a_kept_one_candidate",
      "candidateBadge": "후보 1개",
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": null,
      "sectorFewPeers": null,
      "currentPrice": 184.11000061035156,
      "fairPrice": 66.8198202739726,
      "ratio": 2.7553202007348916,
      "bandAggressiveLe": 53.45585621917808,
      "bandDcaHigh": 60.137838246575335,
      "bandFairHigh": 73.50180230136986,
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
            "per": 26.363778974201058
          }
        ],
        "excluded": [
          {
            "ticker": "SNOW",
            "reason": "NTM PER 134.1배 >80배 제외"
          },
          {
            "ticker": "DDOG",
            "reason": "NTM PER 86.3배 >80배 제외"
          }
        ],
        "note": "유효 비교군 2개 이하(최소 3개 기준 미달)"
      },
      "epsUsedForCandidates": 2.2273273424657534,
      "ttmEps": 1.17,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 1.1766796212227444,
        "peTTM": 156.4657,
        "finnhubUpdated": "2026-10-30 10:10",
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
        "gapPct": 0.5709077968157672,
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
        "latestOfficialPeriodEnd": "2026-06-30",
        "latestOfficialSource": "10-Q 2026-08-04",
        "valuationActualPeriodEnd": "2026-06-30",
        "valuationPeriods": "Q3'25~Q2'26",
        "earningsReleaseDate": null,
        "earningsReleaseAtUtc": null,
        "consensusUpdatedAtUtc": "2026-10-30T20:13:44.897636+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.5252932416771557,
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
          "fairPrice": 66.8198202739726,
          "per": 30.0,
          "eps": 2.2273273424657534,
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
          "date": "2026-10-29",
          "prevFairPrice": 66.30175150684933,
          "newFairPrice": 66.3611194520548,
          "changePct": 0.08954204656167011,
          "epsEffect": 0.05936794520546407,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 2.2101->2.2120(적정PER 30.00배 유지 가정 시 +0.06) + 적정PER 30.00->30.00배(EPS 2.2120 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-10-30",
          "prevFairPrice": 66.3611194520548,
          "newFairPrice": 66.61699315068493,
          "changePct": 0.3855777309709276,
          "epsEffect": 0.2558736986301424,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 2.2120->2.2206(적정PER 30.00배 유지 가정 시 +0.26) + 적정PER 30.00->30.00배(EPS 2.2206 유지 가정 시 +0.00)"
        },
        {
          "date": "2026-10-31",
          "prevFairPrice": 66.61699315068493,
          "newFairPrice": 66.8198202739726,
          "changePct": 0.30446754453308217,
          "epsEffect": 0.2028271232876655,
          "perEffect": -7.91305631674445e-15,
          "otherEffect": 0.0,
          "note": "EPS 2.2206->2.2273(적정PER 30.00배 유지 가정 시 +0.20) + 적정PER 30.00->30.00배(EPS 2.2273 유지 가정 시 -0.00)"
        }
      ],
      "nextUpdateDate": "2026-11-03"
    },
    "TSLA": {
      "ticker": "TSLA",
      "asOf": "2026-10-31",
      "verdict": "고평가",
      "action": "신규 추격 금지 · 모델 점검 필요(적정가/현재가 비율 9.23배)",
      "actionRaw": "신규 추격 금지 · 모델 점검 필요(적정가/현재가 비율 9.23배)",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "median",
      "candidateBadge": null,
      "lowConfidenceCapEligible": false,
      "sectorPerMethod": null,
      "sectorFewPeers": null,
      "currentPrice": 399.80999755859375,
      "fairPrice": 43.330117302682,
      "ratio": 9.227069356072267,
      "bandAggressiveLe": 34.6640938421456,
      "bandDcaHigh": 38.9971055724138,
      "bandFairHigh": 47.6631290329502,
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
      "epsUsedForCandidates": 2.0859772328767123,
      "ttmEps": 0.91,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 0.8057335792228991,
        "peTTM": 496.2062,
        "finnhubUpdated": "2026-10-30 10:10",
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
        "gapPct": -11.45784843704406,
        "gapPrevPct": -25.395038960842676,
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
        "modelSplitRatio": 1.0744411399831808,
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
        "consensusUpdatedAtUtc": "2026-10-30T20:13:44.897636+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.4362463720397584,
        "candSpread": 1.0744411399831808,
        "fairAltExCappedGrowth": null,
        "fairAltGapPct": null,
        "fairAltApplicable": false,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 20.77209502566174,
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
          "fairPrice": 44.88501479552807,
          "per": 21.51749985,
          "eps": 2.0859772328767123,
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
          "date": "2026-10-29",
          "prevFairPrice": 43.29343202875965,
          "newFairPrice": 43.305660453400435,
          "changePct": 0.0282454498702211,
          "epsEffect": 0.023628254659807026,
          "perEffect": -0.011399830019021137,
          "otherEffect": 0.0,
          "note": "EPS 2.0826->2.0837(적정PER 20.79배 유지 가정 시 +0.02) + 적정PER 20.79->20.78배(EPS 2.0837 유지 가정 시 -0.01)"
        },
        {
          "date": "2026-10-30",
          "prevFairPrice": 43.305660453400435,
          "newFairPrice": 43.31788887804122,
          "changePct": 0.02823747406863843,
          "epsEffect": 0.023622036368791764,
          "perEffect": -0.011393611728013278,
          "otherEffect": 0.0,
          "note": "EPS 2.0837->2.0848(적정PER 20.78배 유지 가정 시 +0.02) + 적정PER 20.78->20.78배(EPS 2.0848 유지 가정 시 -0.01)"
        },
        {
          "date": "2026-10-31",
          "prevFairPrice": 43.31788887804122,
          "newFairPrice": 43.330117302682,
          "changePct": 0.02822950277011401,
          "epsEffect": 0.02361582485788861,
          "perEffect": -0.011387400217104457,
          "otherEffect": 0.0,
          "note": "EPS 2.0848->2.0860(적정PER 20.78배 유지 가정 시 +0.02) + 적정PER 20.78->20.77배(EPS 2.0860 유지 가정 시 -0.01)"
        }
      ],
      "nextUpdateDate": "2027-01-01"
    }
  }
};
if (typeof window !== 'undefined') { window.PRICE_MAP_DATA = PRICE_MAP_DATA; }
