const PRICE_MAP_DATA = {
  "_meta": {
    "title": "WO17 가격지도(price_map) - 화면용 production 데이터",
    "as_of": "2026-11-14",
    "input_snapshot_hash": "0c6223e22fe06d665e125d5fa1a77947ae8c4ced8d5633794a18a276f6fd2f9c",
    "generated_by": "price_map_engine.py write_price_map_data_js()",
    "session_date": "2026-11-13",
    "session_date_source": "daily_run_arg(확정 종가 거래일)",
    "fxRates": {
      "EURUSD": {
        "rate": 1.1028,
        "asOf": "2026-11-13",
        "source": "Yahoo Finance chart API(query1.finance.yahoo.com)"
      },
      "TWDUSD": {
        "rate": 0.0304,
        "asOf": "2026-11-13",
        "source": "Yahoo Finance chart API(query1.finance.yahoo.com)"
      }
    },
    "ttmEpsRule": {
      "mode": "verified_quarterly_sum",
      "status": "applied_with_ticker_fallback",
      "changed": [
        "VRT"
      ],
      "changed_approved": [],
      "pending_approval": [],
      "auto_reverted": [
        "VRT"
      ],
      "quarterly_sum_count": 31,
      "fair_changed": [
        "ASML",
        "SNDK",
        "WDC",
        "AVGO",
        "ANET",
        "HUBB",
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
      "asOf": "2026-11-14",
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
      "currentPrice": 370.5,
      "fairPrice": 482.9518665807715,
      "ratio": 0.767157196478162,
      "bandAggressiveLe": 386.3614932646172,
      "bandDcaHigh": 434.65667992269437,
      "bandFairHigh": 531.2470532388487,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±49% (±40% 밖)",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "고성장형",
      "stockTypeReason": "다음 회계연도 성장률 44.8%(기준 30% 초과)",
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
      "epsUsedForCandidates": 18.868874684931505,
      "ttmEps": 11.6,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 10.950717338488003,
        "peTTM": 33.8334,
        "finnhubUpdated": "2026-11-13 21:55",
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
        "gapPct": -5.597264323379281,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 247.67811393737793,
        "fairHistProxy": 287.7448668658237,
        "proxyPer": 15.249709994396959,
        "trailingPer": 21.351561546325684,
        "modelSplitEligible": false,
        "modelSplitRatio": null,
        "actionBeforeModelSplit": null,
        "modelSplitMode": "on"
      },
      "earningsStatus": {
        "latestOfficialPeriodEnd": "2026-12-31",
        "latestOfficialSource": "8-K(실적) 2026-11-12",
        "valuationActualPeriodEnd": "2026-07-26",
        "valuationPeriods": "Q4'25~Q3'26",
        "earningsReleaseDate": "2026-11-12",
        "earningsReleaseAtUtc": "2026-11-13T04:59:00+00:00",
        "consensusUpdatedAtUtc": "2026-11-12T23:30:28.663231+00:00",
        "periodCompareMethod": "fallback_45d",
        "pendingReflection": true,
        "consensusPreRelease": true
      },
      "diag": {
        "epsTtmNtmRatio": 0.6147690412753466,
        "candSpread": 2.2854915662474213,
        "fairAltExCappedGrowth": 365.3149902590747,
        "fairAltGapPct": -24.35788832426482,
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
          "fairPrice": 482.9518665807715,
          "per": 25.59516,
          "eps": 18.868874684931505,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 566.0662405479452,
          "per": 30.0,
          "eps": 18.868874684931505,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": null,
      "qualityWarnings": [],
      "recentChanges": [
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
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "LRCX": {
      "ticker": "LRCX",
      "asOf": "2026-11-14",
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
      "currentPrice": 225.9199981689453,
      "fairPrice": 271.8438753683803,
      "ratio": 0.8310652497239354,
      "bandAggressiveLe": 217.47510029470425,
      "bandDcaHigh": 244.65948783154226,
      "bandFairHigh": 299.02826290521836,
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
      "epsUsedForCandidates": 10.620909397260274,
      "ttmEps": 6.71,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 6.478754439057934,
        "peTTM": 34.8709,
        "finnhubUpdated": "2026-11-13 22:32",
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
        "gapPct": -3.4462825773780237,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 157.15951313800122,
        "fairHistProxy": 204.4533124969925,
        "proxyPer": 19.250075944507394,
        "trailingPer": 23.421686011624622,
        "modelSplitEligible": false,
        "modelSplitRatio": null,
        "actionBeforeModelSplit": null,
        "modelSplitMode": "on"
      },
      "earningsStatus": {
        "latestOfficialPeriodEnd": "2026-09-27",
        "latestOfficialSource": "10-Q 2026-10-22",
        "valuationActualPeriodEnd": "2026-09-27",
        "valuationPeriods": "Q4'25~Q3'26",
        "earningsReleaseDate": null,
        "earningsReleaseAtUtc": null,
        "consensusUpdatedAtUtc": "2026-11-12T23:30:28.663231+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.6317726429086086,
        "candSpread": 2.027413266659987,
        "fairAltExCappedGrowth": 214.50169425319075,
        "fairAltGapPct": -21.09379180880355,
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
          "fairPrice": 271.8438753683803,
          "per": 25.59516,
          "eps": 10.620909397260274,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 318.6272819178082,
          "per": 30.0,
          "eps": 10.620909397260274,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": null,
      "qualityWarnings": [],
      "recentChanges": [
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
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "KLAC": {
      "ticker": "KLAC",
      "asOf": "2026-11-14",
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
      "currentPrice": 152.32000732421875,
      "fairPrice": 141.67452892868383,
      "ratio": 1.0751403832152049,
      "bandAggressiveLe": 113.33962314294706,
      "bandDcaHigh": 127.50707603581544,
      "bandFairHigh": 155.84198182155222,
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
      "epsUsedForCandidates": 6.267364602739726,
      "ttmEps": 4.0,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 3.8886408732137387,
        "peTTM": 39.1705,
        "finnhubUpdated": "2026-11-13 21:55",
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
        "gapPct": -2.7839781696565313,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 96.99626457539618,
        "fairHistProxy": 149.7437000377093,
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
        "earningsReleaseDate": null,
        "earningsReleaseAtUtc": null,
        "consensusUpdatedAtUtc": "2026-11-12T23:30:28.663231+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.6382267912499352,
        "candSpread": 1.9384348346326388,
        "fairAltExCappedGrowth": 119.33539675204,
        "fairAltGapPct": -15.76792409021449,
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
          "fairPrice": 141.67452892868383,
          "per": 22.60512,
          "eps": 6.267364602739726,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 188.02093808219178,
          "per": 30.0,
          "eps": 6.267364602739726,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": null,
      "qualityWarnings": [],
      "recentChanges": [
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
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "ASML": {
      "ticker": "ASML",
      "asOf": "2026-11-14",
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
      "currentPrice": 1495.1600341796875,
      "fairPrice": 1273.727066617294,
      "ratio": 1.173846480432001,
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
        "historicalPer": 32.99982036937909,
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
      "epsUsedForCandidates": 54.500065616438356,
      "ttmEps": 38.598,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 29.04689812681524,
        "peTTM": 51.474,
        "finnhubUpdated": "2026-11-13 21:55",
        "periods": "Q4'25~Q3'26",
        "endDates": [
          "2025-12-31",
          "2026-03-31",
          "2026-06-30",
          "2026-09-30"
        ],
        "secVerified": false,
        "quarterly": 38.598,
        "checks": [
          "분기 연속 OK",
          "최신성 OK(승인 근거 2026-09-30)",
          "역산 주식수 일관(±0.8%)",
          "EUR35.00(보통주1주) x ADR비율1 x EURUSD=X(1.1028) = $38.60(ADR 1주)"
        ],
        "gapPct": -24.745069364176274,
        "gapPrevPct": -4.394824963563327,
        "gapCause": "period",
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 1273.727066617294,
        "fairHistProxy": 1386.1521398985833,
        "proxyPer": 25.433953596571286,
        "trailingPer": 32.99982036937909,
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
        "consensusUpdatedAtUtc": "2026-11-12T23:30:28.663231+00:00",
        "periodCompareMethod": null,
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.7082193308104575,
        "candSpread": 1.3271329681063404,
        "fairAltExCappedGrowth": 1252.8537949423785,
        "fairAltGapPct": -1.6387554462785947,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": "WO8-B 분류 불가(이력 부족, 유효 4개년 <5년) - 필터 없음(원본 그대로) - 경기순환 여부 판단 안 함, NTM EPS 그대로 사용",
      "convertedFairPer": 23.371110698866964,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 1273.727066617294,
          "per": 32.99982036937909,
          "eps": 38.598,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "sector_per",
          "fairPrice": 1231.980523267463,
          "per": 22.60512,
          "eps": 54.500065616438356,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 1635.0019684931506,
          "per": 30.0,
          "eps": 54.500065616438356,
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
      "asOf": "2026-11-14",
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
      "currentPrice": 778.3099975585938,
      "fairPrice": 1189.1185005410634,
      "ratio": 0.6545268593537593,
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
            "per": 48.42929335960131
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
        "finnhub": 75.10035099372745,
        "peTTM": 10.3636,
        "finnhubUpdated": "2026-11-13 21:55",
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
        "gapPct": 1.1997722594359939,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": {
        "ntm_eps_raw": 182.92472109589042,
        "normalized_eps": 53.57,
        "change_pct": -70.71472916341459,
        "fair_without_normalization": 3277.995110355704,
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
            "fairPrice": 5487.741632876712,
            "per": 30.0,
            "eps": 182.92472109589042,
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
        "latestOfficialPeriodEnd": "2026-09-03",
        "latestOfficialSource": "10-K 2026-10-09",
        "valuationActualPeriodEnd": "2026-09-03",
        "valuationPeriods": "Q4'25~Q3'26",
        "earningsReleaseDate": null,
        "earningsReleaseAtUtc": null,
        "consensusUpdatedAtUtc": "2026-11-12T23:30:28.663231+00:00",
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
      "epsBasisNote": "경기순환형(WO8-B 최종본: (A) EPS 30%+·매출 5%+ 동반 감소 2회(2019→2020 EPS -57%·매출 -8%, 2022→2023 EPS -169%·매출 -49%, 기준 2회 이상)) - NTM EPS(182.9247) 대신 정상화 EPS 53.5700(순이익률 사이클 중앙값 22% x NTM매출/주식수 243.5, 기준연수 8) 사용 - 업종PER·성장PER·과거PER 후보 전부 동일 기준 적용(item3)",
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
      "asOf": "2026-11-14",
      "verdict": "매수",
      "action": "분할매수 · 모델 점검 필요(적정가/현재가 비율 0.17배)",
      "actionRaw": "적극 모아가기 · 모델 점검 필요(적정가/현재가 비율 0.17배)",
      "actionCapReason": "low_confidence_cap",
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "a_kept_two_candidates",
      "candidateBadge": "후보 2개",
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": null,
      "sectorFewPeers": null,
      "currentPrice": 885.010009765625,
      "fairPrice": 5234.533168754941,
      "ratio": 0.16907143029454313,
      "bandAggressiveLe": 4187.626535003953,
      "bandDcaHigh": 4711.079851879446,
      "bandFairHigh": 5757.986485630435,
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
      "epsUsedForCandidates": 250.59182169863016,
      "ttmEps": 124.75,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 123.55815680757605,
        "peTTM": 7.1627,
        "finnhubUpdated": "2026-11-13 21:55",
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
        "gapPct": -0.9553853245883315,
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
        "modelSplitRatio": 2.547258795205213,
        "actionBeforeModelSplit": null,
        "modelSplitMode": "on"
      },
      "earningsStatus": {
        "latestOfficialPeriodEnd": "2026-10-02",
        "latestOfficialSource": "10-Q 2026-10-30",
        "valuationActualPeriodEnd": "2026-10-02",
        "valuationPeriods": "Q1'26~Q4'26",
        "earningsReleaseDate": null,
        "earningsReleaseAtUtc": null,
        "consensusUpdatedAtUtc": "2026-11-12T23:30:28.663231+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.4978215137045789,
        "candSpread": 2.547258795205213,
        "fairAltExCappedGrowth": 2951.311686550976,
        "fairAltGapPct": -43.61843565788389,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": "WO8-B 분류 불가(이력 부족, 유효 4개년 <5년) - 필터 없음(원본 그대로) - 경기순환 여부 판단 안 함, NTM EPS 그대로 사용",
      "convertedFairPer": 20.88868317119367,
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
          "fairPrice": 7517.754650958905,
          "per": 30.0,
          "eps": 250.59182169863016,
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
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "WDC": {
      "ticker": "WDC",
      "asOf": "2026-11-14",
      "verdict": "매수",
      "action": "분할매수 · 모델 점검 필요(적정가/현재가 비율 0.40배)",
      "actionRaw": "적극 모아가기 · 모델 점검 필요(적정가/현재가 비율 0.40배)",
      "actionCapReason": "low_confidence_cap",
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "a_kept_two_candidates",
      "candidateBadge": "후보 2개",
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": null,
      "sectorFewPeers": null,
      "currentPrice": 295.6499938964844,
      "fairPrice": 745.22838480603,
      "ratio": 0.39672401095328236,
      "bandAggressiveLe": 596.182707844824,
      "bandDcaHigh": 670.705546325427,
      "bandFairHigh": 819.751223286633,
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
      "epsUsedForCandidates": 30.6101661369863,
      "ttmEps": 25.773367999999998,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 25.85664007070756,
        "peTTM": 11.4342,
        "finnhubUpdated": "2026-11-13 21:55",
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
        "gapPct": 0.3230934765978688,
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
        "modelSplitRatio": 1.6050023916348033,
        "actionBeforeModelSplit": null,
        "modelSplitMode": "on"
      },
      "earningsStatus": {
        "latestOfficialPeriodEnd": "2026-10-02",
        "latestOfficialSource": "10-Q 2026-10-23",
        "valuationActualPeriodEnd": "2026-10-02",
        "valuationPeriods": "Q1'26~Q4'26",
        "earningsReleaseDate": null,
        "earningsReleaseAtUtc": null,
        "consensusUpdatedAtUtc": "2026-11-12T23:30:28.663231+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.8419871974774422,
        "candSpread": 1.6050023916348033,
        "fairAltExCappedGrowth": 572.1517855024711,
        "fairAltGapPct": -23.22463862519244,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": "WO8-B 분류 불가(이력 부족, 유효 1개년 <5년) - corporate_events.json 기업분할/분리상장(2025-02-21) 이전 회계연도 7개 제외 - 경기순환 여부 판단 안 함, NTM EPS 그대로 사용",
      "convertedFairPer": 24.345780466234373,
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
          "fairPrice": 918.304984109589,
          "per": 30.0,
          "eps": 30.6101661369863,
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
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "STX": {
      "ticker": "STX",
      "asOf": "2026-11-14",
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
      "currentPrice": 528.2899780273438,
      "fairPrice": 277.57811859911607,
      "ratio": 1.9032118983064037,
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
            "per": 14.528840723513044
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
        "finnhub": 18.55765269262646,
        "peTTM": 28.4675,
        "finnhubUpdated": "2026-11-13 21:57",
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
        "gapPct": -2.534621562360384,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": {
        "ntm_eps_raw": 49.498587095890414,
        "normalized_eps": 10.90848,
        "change_pct": -77.96203762570494,
        "fair_without_normalization": 941.374903035475,
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
            "fairPrice": 1484.9576128767123,
            "per": 30.0,
            "eps": 49.498587095890414,
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
        "earningsReleaseDate": null,
        "earningsReleaseAtUtc": null,
        "consensusUpdatedAtUtc": "2026-11-12T23:30:28.663231+00:00",
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
      "epsBasisNote": "경기순환형(WO8-B 최종본: (B) EPS 30%+·매출 5%+ 동반 감소 1회(2022→2023 EPS -135%·매출 -37%) + 이익 정점 의심(NTM EPS $39.98가 과거 8년 EPS 중앙값 $6.06의 3배 초과)) - NTM EPS(49.4986) 대신 정상화 EPS 10.9085(순이익률 사이클 중앙값 13.2% x NTM매출/주식수 82.64, 기준연수 8) 사용 - 업종PER·성장PER·과거PER 후보 전부 동일 기준 적용(item3)",
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
      "asOf": "2026-11-14",
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
      "currentPrice": 162.85000610351562,
      "fairPrice": 248.51900462897802,
      "ratio": 0.6552819022699677,
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
            "per": 33.24169075252658
          }
        ],
        "excluded": [
          {
            "ticker": "AMD",
            "reason": "정상화기준 PER 279.5배 >80배 제외"
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
        "finnhub": 7.502050273340687,
        "peTTM": 21.7074,
        "finnhubUpdated": "2026-11-13 21:54",
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
        "gapPct": -5.157392246009018,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": {
        "ntm_eps_raw": 14.515353424657533,
        "normalized_eps": 6.114639999999999,
        "change_pct": -57.87467365684027,
        "fair_without_normalization": 421.04951267552167,
        "basis_without_normalization": "B안: 성장 PER 상한 후보 제외, 나머지 두 후보의 평균 (A안 상한 포함 $435.46, 낮은 쪽 적용)",
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
            "fairPrice": 436.4223900576438,
            "per": 30.06626,
            "eps": 14.515353424657533,
            "epsBasis": "NTM EPS"
          },
          {
            "candidate": "growth_per_peg",
            "fairPrice": 435.460602739726,
            "per": 30.0,
            "eps": 14.515353424657533,
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
        "consensusUpdatedAtUtc": "2026-11-12T23:30:28.663231+00:00",
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
      "epsBasisNote": "경기순환형(WO8-B 최종본: (B) EPS 30%+·매출 5%+ 동반 감소 1회(2019→2020 EPS -32%·매출 -7%) + 이익 정점 의심(NTM EPS $9.32가 과거 8년 EPS 중앙값 $0.28의 3배 초과)) - NTM EPS(14.5154) 대신 정상화 EPS 6.1146(순이익률 사이클 중앙값 35.8% x NTM매출/주식수 17.08, 기준연수 8) 사용 - 업종PER·성장PER·과거PER 후보 전부 동일 기준 적용(item3)",
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
      "asOf": "2026-11-14",
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
      "currentPrice": 534.0599975585938,
      "fairPrice": 279.53122950841805,
      "ratio": 1.9105557489865748,
      "bandAggressiveLe": 223.62498360673445,
      "bandDcaHigh": 251.57810655757626,
      "bandFairHigh": 307.48435245925987,
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
      "epsUsedForCandidates": 16.452633452054794,
      "ttmEps": 4.6,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 4.242365969868238,
        "peTTM": 125.8873,
        "finnhubUpdated": "2026-11-13 22:32",
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
        "gapPct": -7.774652828951345,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 261.5735397635731,
        "fairHistProxy": 682.4983810910862,
        "proxyPer": 41.48262240692222,
        "trailingPer": 56.86381299208111,
        "modelSplitEligible": false,
        "modelSplitRatio": null,
        "actionBeforeModelSplit": null,
        "modelSplitMode": "on"
      },
      "earningsStatus": {
        "latestOfficialPeriodEnd": "2026-09-26",
        "latestOfficialSource": "10-Q 2026-11-04",
        "valuationActualPeriodEnd": "2026-09-26",
        "valuationPeriods": "Q4'25~Q3'26",
        "earningsReleaseDate": null,
        "earningsReleaseAtUtc": null,
        "consensusUpdatedAtUtc": "2026-11-12T23:30:28.663231+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.27959049919911144,
        "candSpread": 1.8869607530171904,
        "fairAltExCappedGrowth": 270.55238463599557,
        "fairAltGapPct": -3.212107959533761,
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
          "fairPrice": 279.53122950841805,
          "per": 16.99006,
          "eps": 16.452633452054794,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 493.57900356164384,
          "per": 30.0,
          "eps": 16.452633452054794,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": "최대/최소 3.35배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [],
      "recentChanges": [
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
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "AVGO": {
      "ticker": "AVGO",
      "asOf": "2026-11-14",
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
      "currentPrice": 347.010009765625,
      "fairPrice": 431.38679729119474,
      "ratio": 0.8044057257769673,
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
        "finnhub": 7.6151959323655145,
        "peTTM": 45.5681,
        "finnhubUpdated": "2026-11-13 21:54",
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
        "gapPct": -2.7433469685119505,
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
        "consensusUpdatedAtUtc": "2026-11-12T23:30:28.663231+00:00",
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
      "asOf": "2026-11-14",
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
      "currentPrice": 156.75999450683594,
      "fairPrice": 113.5099336006926,
      "ratio": 1.3810244578090338,
      "bandAggressiveLe": 90.80794688055408,
      "bandDcaHigh": 102.15894024062335,
      "bandFairHigh": 124.86092696076187,
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
      "epsUsedForCandidates": 6.680961315068493,
      "ttmEps": 0.9100000000000001,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 2.869716662276221,
        "peTTM": 54.6256,
        "finnhubUpdated": "2026-11-13 22:32",
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
        "gapPct": -5.289879132797992,
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
        "latestOfficialPeriodEnd": "2026-08-01",
        "latestOfficialSource": "10-Q 2026-08-28",
        "valuationActualPeriodEnd": "2026-08-01",
        "valuationPeriods": "Q4'25~Q3'26",
        "earningsReleaseDate": null,
        "earningsReleaseAtUtc": null,
        "consensusUpdatedAtUtc": "2026-11-12T23:30:28.663231+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.13620794330114616,
        "candSpread": 21.43878638425493,
        "fairAltExCappedGrowth": 61.429411422809956,
        "fairAltGapPct": -45.88190700656428,
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
          "fairPrice": 113.5099336006926,
          "per": 16.99006,
          "eps": 6.680961315068493,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 200.4288394520548,
          "per": 30.0,
          "eps": 6.680961315068493,
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
        }
      ],
      "nextUpdateDate": "2026-11-27"
    },
    "TSM": {
      "ticker": "TSM",
      "asOf": "2026-11-14",
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
      "currentPrice": 398.7300109863281,
      "fairPrice": 533.4043445822191,
      "ratio": 0.7475192413339403,
      "bandAggressiveLe": 426.7234756657753,
      "bandDcaHigh": 480.0639101239972,
      "bandFairHigh": 586.744779040441,
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
      "epsUsedForCandidates": 22.628006684931506,
      "ttmEps": 14.9347834992,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 16.357080601327837,
        "peTTM": 24.3766,
        "finnhubUpdated": "2026-11-13 21:55",
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
        "gapPct": 9.523386142182932,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 372.39940616752085,
        "fairHistProxy": 342.89460860387794,
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
        "consensusUpdatedAtUtc": "2026-11-12T23:30:28.663231+00:00",
        "periodCompareMethod": null,
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.6600132175648245,
        "candSpread": 1.822882070447165,
        "fairAltExCappedGrowth": 452.90187537487,
        "fairAltGapPct": -15.092203508466262,
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
          "fairPrice": 533.4043445822191,
          "per": 23.57275,
          "eps": 22.628006684931506,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 678.8402005479452,
          "per": 30.0,
          "eps": 22.628006684931506,
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
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "INTC": {
      "ticker": "INTC",
      "asOf": "2026-11-14",
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
      "currentPrice": 59.65999984741211,
      "fairPrice": 50.51416494230082,
      "ratio": 1.181054856901188,
      "bandAggressiveLe": 40.41133195384066,
      "bandDcaHigh": 45.46274844807074,
      "bandFairHigh": 55.56558143653091,
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
      "epsUsedForCandidates": 2.0668174246575344,
      "ttmEps": null,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": null,
        "peTTM": null,
        "finnhubUpdated": "2026-11-13 22:32",
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
        "fairHistProxy": 25.13651713722275,
        "proxyPer": 12.1619436904969,
        "trailingPer": 11.656726240621182,
        "modelSplitEligible": true,
        "modelSplitRatio": 1.5888896362554954,
        "actionBeforeModelSplit": "신규 추격 금지",
        "modelSplitMode": "on"
      },
      "earningsStatus": {
        "latestOfficialPeriodEnd": "2026-09-26",
        "latestOfficialSource": "10-Q 2026-10-30",
        "valuationActualPeriodEnd": "2026-09-26",
        "valuationPeriods": "Q4'25~Q3'26",
        "earningsReleaseDate": null,
        "earningsReleaseAtUtc": null,
        "consensusUpdatedAtUtc": "2026-11-12T23:30:28.663231+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": null,
        "candSpread": 1.5888896362554954,
        "fairAltExCappedGrowth": 39.02380714487562,
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
          "fairPrice": 39.02380714487562,
          "per": 18.88111,
          "eps": 2.0668174246575344,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 62.00452273972603,
          "per": 30.0,
          "eps": 2.0668174246575344,
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
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "QCOM": {
      "ticker": "QCOM",
      "asOf": "2026-11-14",
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
      "currentPrice": 172.47000122070312,
      "fairPrice": 168.8423305303767,
      "ratio": 1.021485552106104,
      "bandAggressiveLe": 135.07386442430138,
      "bandDcaHigh": 151.95809747733904,
      "bandFairHigh": 185.7265635834144,
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
      "epsUsedForCandidates": 9.91280506849315,
      "ttmEps": 12.7,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 12.144406350038246,
        "peTTM": 14.2016,
        "finnhubUpdated": "2026-11-13 21:55",
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
        "gapPct": -4.374753149305144,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 213.01183860992714,
        "fairHistProxy": 132.06666042028036,
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
        "consensusUpdatedAtUtc": "2026-11-12T23:30:28.663231+00:00",
        "periodCompareMethod": "fallback_45d",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 1.2811711631822225,
        "candSpread": 1.5647955089477745,
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
          "fairPrice": 168.8423305303767,
          "per": 17.03275,
          "eps": 9.91280506849315,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 136.12758816847835,
          "per": 13.732499249999998,
          "eps": 9.91280506849315,
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
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "ARM": {
      "ticker": "ARM",
      "asOf": "2026-11-14",
      "verdict": "고평가",
      "action": "신규 추격 금지 · 모델 점검 필요(적정가/현재가 비율 2.29배)",
      "actionRaw": "신규 추격 금지 · 모델 점검 필요(적정가/현재가 비율 2.29배)",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "a_kept_one_candidate",
      "candidateBadge": "후보 1개",
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": null,
      "sectorFewPeers": null,
      "currentPrice": 190.52999877929688,
      "fairPrice": 83.13338136986302,
      "ratio": 2.2918591261387884,
      "bandAggressiveLe": 66.50670509589041,
      "bandDcaHigh": 74.82004323287671,
      "bandFairHigh": 91.44671950684932,
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
      "epsUsedForCandidates": 2.771112712328767,
      "ttmEps": 0.87,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 0.923468840278116,
        "peTTM": 206.3199,
        "finnhubUpdated": "2026-11-13 21:55",
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
        "gapPct": 6.145843710128274,
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
        "consensusUpdatedAtUtc": "2026-11-12T23:30:28.663231+00:00",
        "periodCompareMethod": null,
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.3139533069619806,
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
          "fairPrice": 83.13338136986302,
          "per": 30.0,
          "eps": 2.771112712328767,
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
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "ANET": {
      "ticker": "ANET",
      "asOf": "2026-11-14",
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
      "currentPrice": 197.2899932861328,
      "fairPrice": 175.9723932964031,
      "ratio": 1.121141729054187,
      "bandAggressiveLe": 140.7779146371225,
      "bandDcaHigh": 158.3751539667628,
      "bandFairHigh": 193.56963262604344,
      "modelCheckNeeded": false,
      "confidence": "높음",
      "confidenceNote": "적정가 후보 모두 중앙값 ±1% 안",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "고성장형",
      "stockTypeReason": "NTM PER 47.4배(기준 40 초과); 다음 회계연도 성장률 46.9%(기준 30% 초과)",
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
            "per": 38.22175975424194
          }
        ],
        "excluded": [],
        "note": "유효 비교군 2개 이하(최소 3개 기준 미달)"
      },
      "epsUsedForCandidates": 5.823231123287671,
      "ttmEps": 3.7199999999999998,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 3.772938897208167,
        "peTTM": 52.2908,
        "finnhubUpdated": "2026-11-13 22:32",
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
        "gapPct": 1.4230886346281668,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 177.2478528941761,
        "fairHistProxy": 160.84185457645597,
        "proxyPer": 27.620723129678588,
        "trailingPer": 47.64727228338068,
        "modelSplitEligible": false,
        "modelSplitRatio": 1.01460196891576,
        "actionBeforeModelSplit": null,
        "modelSplitMode": "on"
      },
      "earningsStatus": {
        "latestOfficialPeriodEnd": "2026-09-30",
        "latestOfficialSource": "10-Q 2026-11-04",
        "valuationActualPeriodEnd": "2026-09-30",
        "valuationPeriods": "Q4'25~Q3'26",
        "earningsReleaseDate": null,
        "earningsReleaseAtUtc": null,
        "consensusUpdatedAtUtc": "2026-11-12T23:30:28.663231+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.6388205999798559,
        "candSpread": 1.01460196891576,
        "fairAltExCappedGrowth": 177.2478528941761,
        "fairAltGapPct": 0.7248066437470335,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 30.2190295337364,
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
          "fairPrice": 174.69693369863012,
          "per": 30.0,
          "eps": 5.823231123287671,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": "최대/최소 1.59배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [],
      "recentChanges": [
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
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "ETN": {
      "ticker": "ETN",
      "asOf": "2026-11-14",
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
      "currentPrice": 352.9700012207031,
      "fairPrice": 316.1598250161401,
      "ratio": 1.116429012454963,
      "bandAggressiveLe": 252.92786001291208,
      "bandDcaHigh": 284.5438425145261,
      "bandFairHigh": 347.7758075177541,
      "modelCheckNeeded": false,
      "confidence": "보통",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±28%",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "기타",
      "stockTypeReason": "경기순환형·이익훼손형·고성장형 조건 모두 미해당",
      "candidates": {
        "historicalPer": 30.479426771830145,
        "historicalPerYearsUsed": 5,
        "historicalPerEpsBasis": "TTM EPS",
        "sectorPer": 19.642702754440112,
        "sectorPerValidPeers": 3,
        "sectorPerEpsBasis": "NTM EPS",
        "growthPerPeg": 25.087500000000002,
        "growthPerPegEpsBasis": "NTM EPS"
      },
      "sectorPeerDisplay": {
        "basis": "forwardPE",
        "medianPer": 19.642702754440112,
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
            "per": 19.642702754440112
          }
        ],
        "excluded": [],
        "note": "유효 비교군 3개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 16.09553578082192,
      "ttmEps": 10.01,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 9.939177237087916,
        "peTTM": 35.513,
        "finnhubUpdated": "2026-11-13 21:56",
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
        "gapPct": -0.7075201090118277,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 305.09906198601976,
        "fairHistProxy": 408.01337311839575,
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
        "consensusUpdatedAtUtc": "2026-11-12T23:30:28.663231+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.6219115745079496,
        "candSpread": 1.3234939211968888,
        "fairAltExCappedGrowth": null,
        "fairAltGapPct": null,
        "fairAltApplicable": false,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 19.642702754440112,
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
          "fairPrice": 316.1598250161401,
          "per": 19.642702754440112,
          "eps": 16.09553578082192,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 403.7967539013699,
          "per": 25.087500000000002,
          "eps": 16.09553578082192,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": false,
      "dispersionFlag": "최대/최소 1.55배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [],
      "recentChanges": [
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
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "HUBB": {
      "ticker": "HUBB",
      "asOf": "2026-11-14",
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
      "currentPrice": 436.9800109863281,
      "fairPrice": 458.0723307193263,
      "ratio": 0.9539541720411792,
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
            "per": 19.642702754440112
          }
        ],
        "excluded": [],
        "note": "유효 비교군 3개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 22.735569835616438,
      "ttmEps": 17.060000000000002,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 16.977284014838443,
        "peTTM": 25.7391,
        "finnhubUpdated": "2026-11-13 21:56",
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
        "gapPct": -0.4848533714042147,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 458.0723307193263,
        "fairHistProxy": 489.65794531355834,
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
        "earningsReleaseDate": null,
        "earningsReleaseAtUtc": null,
        "consensusUpdatedAtUtc": "2026-11-12T23:30:28.663231+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.7503660617854687,
        "candSpread": 1.255660171263661,
        "fairAltExCappedGrowth": null,
        "fairAltGapPct": null,
        "fairAltApplicable": false,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 20.14782712864898,
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
          "fairPrice": 535.9201238967704,
          "per": 23.57188,
          "eps": 22.735569835616438,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 426.80347450810314,
          "per": 18.77249955,
          "eps": 22.735569835616438,
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
      "asOf": "2026-11-14",
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
      "currentPrice": 202.07000732421875,
      "fairPrice": 244.0818722009765,
      "ratio": 0.8278779800485746,
      "bandAggressiveLe": 195.26549776078122,
      "bandDcaHigh": 219.67368498087885,
      "bandFairHigh": 268.4900594210742,
      "modelCheckNeeded": false,
      "confidence": "보통",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±23%",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "고성장형",
      "stockTypeReason": "다음 회계연도 성장률 71.3%(기준 30% 초과)",
      "candidates": {
        "historicalPer": 47.510262318720216,
        "historicalPerYearsUsed": 3,
        "historicalPerEpsBasis": "TTM EPS",
        "sectorPer": 19.642702754440112,
        "sectorPerValidPeers": 3,
        "sectorPerEpsBasis": "NTM EPS",
        "growthPerPeg": 30.0,
        "growthPerPegEpsBasis": "NTM EPS"
      },
      "sectorPeerDisplay": {
        "basis": "forwardPE",
        "medianPer": 19.642702754440112,
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
            "per": 19.642702754440112
          }
        ],
        "excluded": [],
        "note": "유효 비교군 3개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 9.573792520547945,
      "ttmEps": 5.137455789310644,
      "ttmEpsSelection": {
        "rule": "finnhub_peTTM",
        "finnhub": 5.137455789310644,
        "peTTM": 39.3327,
        "finnhubUpdated": "2026-11-13 21:56",
        "source": "finnhub_peTTM(판정 변경 + 원자료 검증 미완 - 자동 복귀)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 244.0818722009765,
        "fairHistProxy": 339.10445996814485,
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
        "valuationActualPeriodEnd": null,
        "valuationPeriods": null,
        "earningsReleaseDate": null,
        "earningsReleaseAtUtc": null,
        "consensusUpdatedAtUtc": "2026-11-12T23:30:28.663231+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.5366165788828487,
        "candSpread": 1.5272847313854854,
        "fairAltExCappedGrowth": 216.0685164573909,
        "fairAltGapPct": -11.477032477249871,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 25.494794427298363,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 244.0818722009765,
          "per": 47.510262318720216,
          "eps": 5.137455789310644,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "sector_per",
          "fairPrice": 188.05516071380526,
          "per": 19.642702754440112,
          "eps": 9.573792520547945,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 287.21377561643834,
          "per": 30.0,
          "eps": 9.573792520547945,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": "최대/최소 2.42배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [],
      "recentChanges": [
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
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "MOD": {
      "ticker": "MOD",
      "asOf": "2026-11-14",
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
      "currentPrice": 135.66000366210938,
      "fairPrice": 208.68245491123997,
      "ratio": 0.650078626494069,
      "bandAggressiveLe": 166.945963928992,
      "bandDcaHigh": 187.814209420116,
      "bandFairHigh": 229.550700402364,
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
      "epsUsedForCandidates": 7.7907459999999995,
      "ttmEps": 3.123906279638869,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 3.123906279638869,
        "peTTM": 43.4264,
        "finnhubUpdated": "2026-11-13 22:00",
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
        "gapPct": 30.707375717107467,
        "gapPrevPct": 17.44008570070934,
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
        "consensusUpdatedAtUtc": "2026-11-12T23:30:28.663231+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.4009765277470051,
        "candSpread": 1.272702898538428,
        "fairAltExCappedGrowth": 183.64252982248,
        "fairAltGapPct": -11.999056221286242,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": "WO8-B 분류 불가(이력 부족, 유효 0개년 <5년) - corporate_events.json 기업분할/분리상장(2026-10-01) 이전 회계연도 8개 제외 - 경기순환 여부 판단 안 함, NTM EPS 그대로 사용",
      "convertedFairPer": 26.785939999999997,
      "fairPriceBasis": "적정가 후보 2개 평균",
      "fairPriceCandidates": [
        {
          "candidate": "sector_per",
          "fairPrice": 183.64252982248,
          "per": 23.57188,
          "eps": 7.7907459999999995,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 233.72238,
          "per": 30.0,
          "eps": 7.7907459999999995,
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
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "PWR": {
      "ticker": "PWR",
      "asOf": "2026-11-14",
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
      "currentPrice": 602.010009765625,
      "fairPrice": 476.4864067382812,
      "ratio": 1.2634358530531804,
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
            "per": 19.67726949743175
          }
        ],
        "excluded": [],
        "note": "유효 비교군 3개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 21.27535594520548,
      "ttmEps": 11.04,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 11.056117306128606,
        "peTTM": 54.4504,
        "finnhubUpdated": "2026-11-13 21:56",
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
        "gapPct": 0.14599009174462996,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 476.4864067382812,
        "fairHistProxy": 734.7687923463677,
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
        "earningsReleaseDate": null,
        "earningsReleaseAtUtc": null,
        "consensusUpdatedAtUtc": "2026-11-12T23:30:28.663231+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.5189102371980726,
        "candSpread": 1.546014811852574,
        "fairAltExCappedGrowth": 444.66447225444415,
        "fairAltGapPct": -6.678455887476309,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 22.396166154186485,
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
          "fairPrice": 412.8425377706071,
          "per": 19.40473,
          "eps": 21.27535594520548,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 638.2606783561644,
          "per": 30.0,
          "eps": 21.27535594520548,
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
      "asOf": "2026-11-14",
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
      "currentPrice": 659.3599853515625,
      "fairPrice": 789.7391457553425,
      "ratio": 0.8349085756929531,
      "bandAggressiveLe": 631.791316604274,
      "bandDcaHigh": 710.7652311798083,
      "bandFairHigh": 868.7130603308768,
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
        "sectorPer": 19.67726949743175,
        "sectorPerValidPeers": 3,
        "sectorPerEpsBasis": "NTM EPS",
        "growthPerPeg": 30.0,
        "growthPerPegEpsBasis": "NTM EPS"
      },
      "sectorPeerDisplay": {
        "basis": "forwardPE",
        "medianPer": 19.67726949743175,
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
            "per": 19.67726949743175
          }
        ],
        "excluded": [],
        "note": "유효 비교군 3개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 40.13459010958904,
      "ttmEps": 34.62,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 35.100718951043525,
        "peTTM": 18.7848,
        "finnhubUpdated": "2026-11-13 21:57",
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
        "gapPct": 1.388558495215264,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 633.0331137197988,
        "fairHistProxy": 519.9305346570395,
        "proxyPer": 12.95467409128508,
        "trailingPer": 18.28518526053723,
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
        "earningsReleaseDate": null,
        "earningsReleaseAtUtc": null,
        "consensusUpdatedAtUtc": "2026-11-12T23:30:28.663231+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.8625975724548016,
        "candSpread": 1.9020137765188343,
        "fairAltExCappedGrowth": 711.3861297375706,
        "fairAltGapPct": -9.92137928566672,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 19.67726949743175,
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
          "fairPrice": 789.7391457553425,
          "per": 19.67726949743175,
          "eps": 40.13459010958904,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 1204.0377032876713,
          "per": 30.0,
          "eps": 40.13459010958904,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": "최대/최소 1.64배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [],
      "recentChanges": [
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
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "FIX": {
      "ticker": "FIX",
      "asOf": "2026-11-14",
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
      "currentPrice": 1112.5,
      "fairPrice": 1279.8434842844865,
      "ratio": 0.8692469146896957,
      "bandAggressiveLe": 1023.8747874275892,
      "bandDcaHigh": 1151.859135856038,
      "bandFairHigh": 1407.8278327129353,
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
        "sectorPer": 19.67726949743175,
        "sectorPerValidPeers": 3,
        "sectorPerEpsBasis": "NTM EPS",
        "growthPerPeg": 30.0,
        "growthPerPegEpsBasis": "NTM EPS"
      },
      "sectorPeerDisplay": {
        "basis": "forwardPE",
        "medianPer": 19.67726949743175,
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
            "per": 19.67726949743175
          }
        ],
        "excluded": [],
        "note": "유효 비교군 3개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 65.04172158904109,
      "ttmEps": 46.32,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 45.82356793627126,
        "peTTM": 24.2779,
        "finnhubUpdated": "2026-11-13 21:57",
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
        "gapPct": -1.0717445244575519,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 1166.1325478590172,
        "fairHistProxy": 916.2418328851461,
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
        "earningsReleaseDate": null,
        "earningsReleaseAtUtc": null,
        "consensusUpdatedAtUtc": "2026-11-12T23:30:28.663231+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.7121582711581312,
        "candSpread": 1.673267461107804,
        "fairAltExCappedGrowth": 1222.9880160717519,
        "fairAltGapPct": -4.442376658620917,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 19.67726949743175,
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
          "fairPrice": 1279.8434842844865,
          "per": 19.67726949743175,
          "eps": 65.04172158904109,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 1951.2516476712326,
          "per": 30.0,
          "eps": 65.04172158904109,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": "최대/최소 1.52배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [],
      "recentChanges": [
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
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "COHR": {
      "ticker": "COHR",
      "asOf": "2026-11-14",
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
      "currentPrice": 218.14999389648438,
      "fairPrice": 261.20040527655635,
      "ratio": 0.8351824479962402,
      "bandAggressiveLe": 208.9603242212451,
      "bandDcaHigh": 235.08036474890073,
      "bandFairHigh": 287.320445804212,
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
      "epsUsedForCandidates": 12.426302246575343,
      "ttmEps": 4.549777337175413,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 4.549777337175413,
        "peTTM": 47.9474,
        "finnhubUpdated": "2026-11-13 21:56",
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
        "fairHistTrailing": 149.61174315585248,
        "fairHistProxy": 269.0656339903803,
        "proxyPer": 21.652912399143847,
        "trailingPer": 32.88331099928821,
        "modelSplitEligible": true,
        "modelSplitRatio": 2.491709938897785,
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
        "consensusUpdatedAtUtc": "2026-11-12T23:30:28.663231+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.3661408878437123,
        "candSpread": 2.491709938897785,
        "fairAltExCappedGrowth": 149.61174315585248,
        "fairAltGapPct": -42.72147357602869,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 21.019962342260147,
      "fairPriceBasis": "적정가 후보 2개 평균",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 149.61174315585248,
          "per": 32.88331099928821,
          "eps": 4.549777337175413,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 372.7890673972603,
          "per": 30.0,
          "eps": 12.426302246575343,
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
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "LITE": {
      "ticker": "LITE",
      "asOf": "2026-11-14",
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
      "currentPrice": 596.6199951171875,
      "fairPrice": 919.292134520548,
      "ratio": 0.6489993471208709,
      "bandAggressiveLe": 735.4337076164384,
      "bandDcaHigh": 827.3629210684932,
      "bandFairHigh": 1011.2213479726029,
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
            "per": 22.303379392515453
          },
          {
            "ticker": "AAOI",
            "per": 17.8492
          }
        ],
        "excluded": [],
        "note": "유효 비교군 2개 이하(최소 3개 기준 미달)"
      },
      "epsUsedForCandidates": 30.643071150684932,
      "ttmEps": null,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": null,
        "peTTM": null,
        "finnhubUpdated": "2026-11-13 21:56",
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
        "fairHistProxy": 935.2265288470404,
        "proxyPer": 30.51999991280692,
        "trailingPer": 29.03731331896426,
        "modelSplitEligible": false,
        "modelSplitRatio": null,
        "actionBeforeModelSplit": null,
        "modelSplitMode": "on"
      },
      "earningsStatus": {
        "latestOfficialPeriodEnd": "2026-09-26",
        "latestOfficialSource": "10-Q 2026-11-03",
        "valuationActualPeriodEnd": "2026-09-26",
        "valuationPeriods": "Q4'25~Q3'26",
        "earningsReleaseDate": null,
        "earningsReleaseAtUtc": null,
        "consensusUpdatedAtUtc": "2026-11-12T23:30:28.663231+00:00",
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
          "fairPrice": 919.292134520548,
          "per": 30.0,
          "eps": 30.643071150684932,
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
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "CEG": {
      "ticker": "CEG",
      "asOf": "2026-11-14",
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
      "currentPrice": 280.20001220703125,
      "fairPrice": 285.52515130167484,
      "ratio": 0.9813496671996603,
      "bandAggressiveLe": 228.42012104133988,
      "bandDcaHigh": 256.97263617150736,
      "bandFairHigh": 314.0776664318424,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±45% (±40% 밖)",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "고성장형",
      "stockTypeReason": "다음 회계연도 성장률 32.5%(기준 30% 초과)",
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
      "epsUsedForCandidates": 13.283409643835617,
      "ttmEps": 12.237839126450295,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 12.237839126450295,
        "peTTM": 22.8962,
        "finnhubUpdated": "2026-11-13 21:56",
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
        "fairHistTrailing": 285.52515130167484,
        "fairHistProxy": 228.5753958550387,
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
        "consensusUpdatedAtUtc": "2026-11-12T23:30:28.663231+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.9212874897771043,
        "candSpread": 2.521559332291089,
        "fairAltExCappedGrowth": 221.78159459912234,
        "fairAltGapPct": -22.32502335151677,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 21.494869085376543,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 285.52515130167484,
          "per": 23.331337203522644,
          "eps": 12.237839126450295,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "sector_per",
          "fairPrice": 158.03803789656985,
          "per": 11.8974,
          "eps": 13.283409643835617,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 398.5022893150685,
          "per": 30.0,
          "eps": 13.283409643835617,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": "최대/최소 2.52배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [],
      "recentChanges": [
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
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "VST": {
      "ticker": "VST",
      "asOf": "2026-11-14",
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
      "currentPrice": 133.00999450683594,
      "fairPrice": 127.087219732537,
      "ratio": 1.0466040156261487,
      "bandAggressiveLe": 101.6697757860296,
      "bandDcaHigh": 114.37849775928329,
      "bandFairHigh": 139.7959417057907,
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
      "epsUsedForCandidates": 10.681932164383563,
      "ttmEps": 7.7287356335829545,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 7.7287356335829545,
        "peTTM": 17.2098,
        "finnhubUpdated": "2026-11-13 21:56",
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
        "fairHistTrailing": 116.882262597638,
        "fairHistProxy": 131.4566778080676,
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
        "consensusUpdatedAtUtc": "2026-11-12T23:30:28.663231+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.7235334876355646,
        "candSpread": 2.7417159610835835,
        "fairAltExCappedGrowth": 121.9847411650875,
        "fairAltGapPct": -4.01494231928905,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 11.8974,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 116.882262597638,
          "per": 15.123076805701622,
          "eps": 7.7287356335829545,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "sector_per",
          "fairPrice": 127.087219732537,
          "per": 11.8974,
          "eps": 10.681932164383563,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 320.45796493150687,
          "per": 30.0,
          "eps": 10.681932164383563,
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
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "GEV": {
      "ticker": "GEV",
      "asOf": "2026-11-14",
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
      "currentPrice": 803.1300048828125,
      "fairPrice": 775.3488,
      "ratio": 1.0358305899007163,
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
        "finnhub": 38.92076592599042,
        "peTTM": 20.635,
        "finnhubUpdated": "2026-11-13 21:56",
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
        "gapPct": 2.1274361742073644,
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
        "earningsReleaseDate": null,
        "earningsReleaseAtUtc": null,
        "consensusUpdatedAtUtc": "2026-11-12T23:30:28.663231+00:00",
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
      "asOf": "2026-11-14",
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
      "currentPrice": 191.99000549316406,
      "fairPrice": 151.79456794520544,
      "ratio": 1.264801554443426,
      "bandAggressiveLe": 121.43565435616436,
      "bandDcaHigh": 136.6151111506849,
      "bandFairHigh": 166.974024739726,
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
      "epsUsedForCandidates": 5.0598189315068485,
      "ttmEps": 1.6300000000000001,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 1.6539128316131233,
        "peTTM": 116.0823,
        "finnhubUpdated": "2026-11-13 21:57",
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
        "gapPct": 1.4670448842406758,
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
        "earningsReleaseDate": null,
        "earningsReleaseAtUtc": null,
        "consensusUpdatedAtUtc": "2026-11-12T23:30:28.663231+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.3221459151137203,
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
          "fairPrice": 151.79456794520544,
          "per": 30.0,
          "eps": 5.0598189315068485,
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
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "AAPL": {
      "ticker": "AAPL",
      "asOf": "2026-11-14",
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
      "currentPrice": 356.2699890136719,
      "fairPrice": 193.19543195097262,
      "ratio": 1.8440911641434816,
      "bandAggressiveLe": 154.5563455607781,
      "bandDcaHigh": 173.87588875587537,
      "bandFairHigh": 212.5149751460699,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±62% (±40% 밖)",
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
        "growthPerPeg": 12.855000299999999,
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
      "epsUsedForCandidates": 9.567848493150686,
      "ttmEps": 9.123244312886595,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 9.123244312886595,
        "peTTM": 39.0508,
        "finnhubUpdated": "2026-11-13 22:00",
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
        "fairHistTrailing": 312.4160929520456,
        "fairHistProxy": 269.42621788644624,
        "proxyPer": 28.15954057793868,
        "trailingPer": 34.243968728400425,
        "modelSplitEligible": false,
        "modelSplitRatio": null,
        "actionBeforeModelSplit": null,
        "modelSplitMode": "on"
      },
      "earningsStatus": {
        "latestOfficialPeriodEnd": "2026-09-26",
        "latestOfficialSource": "10-K 2026-11-03",
        "valuationActualPeriodEnd": "2026-09-26",
        "valuationPeriods": "Q4'25~Q3'26",
        "earningsReleaseDate": null,
        "earningsReleaseAtUtc": null,
        "consensusUpdatedAtUtc": "2026-11-12T23:30:28.663231+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.9535314359772347,
        "candSpread": 2.540077783985052,
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
          "fairPrice": 312.4160929520456,
          "per": 34.243968728400425,
          "eps": 9.123244312886595,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "sector_per",
          "fairPrice": 193.19543195097262,
          "per": 20.192149999999998,
          "eps": 9.567848493150686,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 122.99469524980661,
          "per": 12.855000299999999,
          "eps": 9.567848493150686,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": false,
      "dispersionFlag": "최대/최소 2.66배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [],
      "recentChanges": [
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
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "MSFT": {
      "ticker": "MSFT",
      "asOf": "2026-11-14",
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
      "currentPrice": 523.8800048828125,
      "fairPrice": 594.4039896059518,
      "ratio": 0.8813534465509026,
      "bandAggressiveLe": 475.52319168476146,
      "bandDcaHigh": 534.9635906453566,
      "bandFairHigh": 653.844388566547,
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
      "epsUsedForCandidates": 21.583297232876713,
      "ttmEps": 19.16,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 19.307996405929817,
        "peTTM": 27.1328,
        "finnhubUpdated": "2026-11-13 21:53",
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
        "gapPct": 0.7724238305313991,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 674.0440665000726,
        "fairHistProxy": 605.8979366479077,
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
        "earningsReleaseDate": null,
        "earningsReleaseAtUtc": null,
        "consensusUpdatedAtUtc": "2026-11-12T23:30:28.663231+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.8877234925354486,
        "candSpread": 1.5466353585077524,
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
          "fairPrice": 435.8131752208315,
          "per": 20.192149999999998,
          "eps": 21.583297232876713,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 594.4039896059518,
          "per": 27.53999925,
          "eps": 21.583297232876713,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": false,
      "dispersionFlag": "최대/최소 1.74배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [],
      "recentChanges": [
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
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "GOOGL": {
      "ticker": "GOOGL",
      "asOf": "2026-11-14",
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
      "currentPrice": 295.7699890136719,
      "fairPrice": 346.3132041505,
      "ratio": 0.8540534564345887,
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
        "finnhub": 18.799577253487737,
        "peTTM": 15.7328,
        "finnhubUpdated": "2026-11-13 21:54",
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
        "gapPct": -1.8811208064314355,
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
        "earningsReleaseDate": null,
        "earningsReleaseAtUtc": null,
        "consensusUpdatedAtUtc": "2026-11-12T23:30:28.663231+00:00",
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
      "asOf": "2026-11-14",
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
      "currentPrice": 641.6900024414062,
      "fairPrice": 771.494001216604,
      "ratio": 0.8317498275158278,
      "bandAggressiveLe": 617.1952009732832,
      "bandDcaHigh": 694.3446010949436,
      "bandFairHigh": 848.6434013382645,
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
      "epsUsedForCandidates": 33.34769843835616,
      "ttmEps": 29.33,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 30.042229369529682,
        "peTTM": 21.3596,
        "finnhubUpdated": "2026-11-13 21:54",
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
        "gapPct": 2.428330615512042,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 716.4230703715406,
        "fairHistProxy": 661.5292249487501,
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
        "earningsReleaseDate": null,
        "earningsReleaseAtUtc": null,
        "consensusUpdatedAtUtc": "2026-11-12T23:30:28.663231+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.8795209676678901,
        "candSpread": 1.3964248145050053,
        "fairAltExCappedGrowth": 743.9585357940723,
        "fairAltGapPct": -3.5691094654151323,
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
          "fairPrice": 771.494001216604,
          "per": 23.13485,
          "eps": 33.34769843835616,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 1000.4309531506849,
          "per": 30.0,
          "eps": 33.34769843835616,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": null,
      "qualityWarnings": [],
      "recentChanges": [
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
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "AMZN": {
      "ticker": "AMZN",
      "asOf": "2026-11-14",
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
      "currentPrice": 266.6600036621094,
      "fairPrice": 320.13719999999995,
      "ratio": 0.8329553818241349,
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
        "finnhub": 12.487297930745715,
        "peTTM": 21.3545,
        "finnhubUpdated": "2026-11-13 22:32",
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
        "gapPct": 0.9482451960041605,
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
        "earningsReleaseDate": null,
        "earningsReleaseAtUtc": null,
        "consensusUpdatedAtUtc": "2026-11-12T23:30:28.663231+00:00",
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
      "asOf": "2026-11-14",
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
      "currentPrice": 125.3499984741211,
      "fairPrice": 220.16195947106576,
      "ratio": 0.5693535739565168,
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
            "per": 25.38574652922516
          },
          {
            "ticker": "ADBE",
            "per": 9.15169
          }
        ],
        "excluded": [],
        "note": "유효 비교군 4개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 9.481135150684931,
      "ttmEps": 6.38,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 6.109478268296565,
        "peTTM": 20.5173,
        "finnhubUpdated": "2026-11-13 21:54",
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
        "gapPct": -4.240152534536601,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 220.16195947106576,
        "fairHistProxy": 269.19593309077624,
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
        "consensusUpdatedAtUtc": "2026-11-12T23:30:28.663231+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.6729152046249546,
        "candSpread": 1.6101175493152171,
        "fairAltExCappedGrowth": 198.40808810147723,
        "fairAltGapPct": -9.880849271986737,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 23.22105486020426,
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
          "fairPrice": 176.65421673188874,
          "per": 18.632179999999998,
          "eps": 9.481135150684931,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 284.43405452054793,
          "per": 30.0,
          "eps": 9.481135150684931,
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
      "asOf": "2026-11-14",
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
      "currentPrice": 217.83999633789062,
      "fairPrice": 356.74220639989665,
      "ratio": 0.6106370158334978,
      "bandAggressiveLe": 285.3937651199173,
      "bandDcaHigh": 321.067985759907,
      "bandFairHigh": 392.41642703988634,
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
            "per": 25.38574652922516
          },
          {
            "ticker": "ADBE",
            "per": 9.15169
          }
        ],
        "excluded": [],
        "note": "유효 비교군 4개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 16.173283643835617,
      "ttmEps": 10.969999999999999,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 11.730811492678507,
        "peTTM": 18.5699,
        "finnhubUpdated": "2026-11-13 21:54",
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
        "gapPct": 6.935382795610834,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "wo32": {
        "histMode": "trailing",
        "fairHistTrailing": 577.1543714316755,
        "fairHistProxy": 690.8497437331426,
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
        "consensusUpdatedAtUtc": "2026-11-12T23:30:28.663231+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.6782790830593743,
        "candSpread": 1.9225480677960136,
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
          "fairPrice": 300.2028303476014,
          "per": 18.56165,
          "eps": 16.173283643835617,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 356.74220639989665,
          "per": 22.05750015,
          "eps": 16.173283643835617,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": false,
      "dispersionFlag": "최대/최소 2.83배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [],
      "recentChanges": [
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
        }
      ],
      "nextUpdateDate": "2026-12-03"
    },
    "PLTR": {
      "ticker": "PLTR",
      "asOf": "2026-11-14",
      "verdict": "고평가",
      "action": "신규 추격 금지 · 모델 점검 필요(적정가/현재가 비율 2.30배)",
      "actionRaw": "신규 추격 금지 · 모델 점검 필요(적정가/현재가 비율 2.30배)",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "a_kept_one_candidate",
      "candidateBadge": "후보 1개",
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": null,
      "sectorFewPeers": null,
      "currentPrice": 167.99000549316406,
      "fairPrice": 72.92929397260274,
      "ratio": 2.303464031288616,
      "bandAggressiveLe": 58.34343517808219,
      "bandDcaHigh": 65.63636457534247,
      "bandFairHigh": 80.22222336986302,
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
            "per": 25.38574652922516
          }
        ],
        "excluded": [
          {
            "ticker": "SNOW",
            "reason": "NTM PER 128.8배 >80배 제외"
          },
          {
            "ticker": "DDOG",
            "reason": "NTM PER 80.2배 >80배 제외"
          }
        ],
        "note": "유효 비교군 2개 이하(최소 3개 기준 미달)"
      },
      "epsUsedForCandidates": 2.4309764657534245,
      "ttmEps": 1.43,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 1.490906751486239,
        "peTTM": 112.6764,
        "finnhubUpdated": "2026-11-13 21:54",
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
        "gapPct": 4.259213390646099,
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
        "earningsReleaseDate": null,
        "earningsReleaseAtUtc": null,
        "consensusUpdatedAtUtc": "2026-11-12T23:30:28.663231+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.5882409888146757,
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
          "fairPrice": 72.92929397260274,
          "per": 30.0,
          "eps": 2.4309764657534245,
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
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "TSLA": {
      "ticker": "TSLA",
      "asOf": "2026-11-14",
      "verdict": "고평가",
      "action": "신규 추격 금지 · 모델 점검 필요(적정가/현재가 비율 8.90배)",
      "actionRaw": "신규 추격 금지 · 모델 점검 필요(적정가/현재가 비율 8.90배)",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "median",
      "candidateBadge": null,
      "lowConfidenceCapEligible": false,
      "sectorPerMethod": null,
      "sectorFewPeers": null,
      "currentPrice": 390.2200012207031,
      "fairPrice": 43.83887677204125,
      "ratio": 8.9012317366117,
      "bandAggressiveLe": 35.071101417633,
      "bandDcaHigh": 39.45498909483713,
      "bandFairHigh": 48.22276444924538,
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
      "epsUsedForCandidates": 2.1032088767123285,
      "ttmEps": 0.91,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 0.8370146603490596,
        "peTTM": 466.2045,
        "finnhubUpdated": "2026-11-13 21:54",
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
        "gapPct": -8.02036699460884,
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
        "modelSplitRatio": 1.0987981378242533,
        "actionBeforeModelSplit": null,
        "modelSplitMode": "on"
      },
      "earningsStatus": {
        "latestOfficialPeriodEnd": "2026-09-30",
        "latestOfficialSource": "10-Q 2026-10-22",
        "valuationActualPeriodEnd": "2026-09-30",
        "valuationPeriods": "Q4'25~Q3'26",
        "earningsReleaseDate": null,
        "earningsReleaseAtUtc": null,
        "consensusUpdatedAtUtc": "2026-11-12T23:30:28.663231+00:00",
        "periodCompareMethod": "fiscal_period",
        "pendingReflection": false,
        "consensusPreRelease": false
      },
      "diag": {
        "epsTtmNtmRatio": 0.43267219441489047,
        "candSpread": 1.0987981378242533,
        "fairAltExCappedGrowth": null,
        "fairAltGapPct": null,
        "fairAltApplicable": false,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 20.843805509497866,
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
          "fairPrice": 45.902533734246575,
          "per": 21.825000000000003,
          "eps": 2.1032088767123285,
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
        }
      ],
      "nextUpdateDate": "2027-01-01"
    }
  }
};
if (typeof window !== 'undefined') { window.PRICE_MAP_DATA = PRICE_MAP_DATA; }
