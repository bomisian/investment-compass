const PRICE_MAP_DATA = {
  "_meta": {
    "title": "WO17 가격지도(price_map) - 화면용 production 데이터",
    "as_of": "2026-10-28",
    "input_snapshot_hash": "5b0222d3fb364b05b1cbc232dd22e6ab91ae8c1a8f7e6763139ad410849e801d",
    "generated_by": "price_map_engine.py write_price_map_data_js()",
    "session_date": "2026-10-27",
    "session_date_source": "prices_cache_last_bar(수동 실행, 전 종목 확정 봉)",
    "fxRates": {
      "EURUSD": {
        "rate": 1.1127,
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
      "quarterly_sum_count": 32,
      "fair_changed": [
        "AMAT",
        "LRCX",
        "KLAC",
        "ASML",
        "AVGO",
        "QCOM",
        "ANET",
        "HUBB",
        "VRT",
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
      "asOf": "2026-10-28",
      "verdict": "적정",
      "action": "관망(적정가 근처)",
      "actionRaw": "관망(적정가 근처)",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": 553.3213939726027,
      "fairPriceB": 413.6959158798429,
      "fairBasisMode": "ex_capped_growth_floor_b",
      "candidateBadge": null,
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": "median",
      "sectorFewPeers": true,
      "currentPrice": 395.92999267578125,
      "fairPrice": 413.6959158798429,
      "ratio": 0.9570555992406226,
      "bandAggressiveLe": 330.95673270387437,
      "bandDcaHigh": 372.3263242918586,
      "bandFairHigh": 455.0655074678272,
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
      "epsUsedForCandidates": 18.444046465753424,
      "ttmEps": 11.6,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 12.074091696245734,
        "peTTM": 32.7917,
        "finnhubUpdated": "2026-10-27 21:01",
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
        "gapPct": 4.0869973814287475,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "diag": {
        "epsTtmNtmRatio": 0.6289292331560036,
        "candSpread": 2.3405932345272973,
        "fairAltExCappedGrowth": 413.6959158798429,
        "fairAltGapPct": 0.0,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 22.429780615006912,
      "fairPriceBasis": "B안: 성장 PER 상한 후보 제외, 나머지 두 후보의 평균 (A안 상한 포함 $553.32, 낮은 쪽 적용)",
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
          "fairPrice": 579.7137178223079,
          "per": 31.43094,
          "eps": 18.444046465753424,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 553.3213939726027,
          "per": 30.0,
          "eps": 18.444046465753424,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": null,
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-10-24",
          "prevFairPrice": 549.5699112328766,
          "newFairPrice": 551.4456526027396,
          "changePct": 0.34131078349159993,
          "epsEffect": 1.8757413698629932,
          "perEffect": 6.530428377056074e-14,
          "otherEffect": 0.0,
          "note": "EPS 18.3190->18.3815(적정PER 30.00배 유지 가정 시 +1.88) + 적정PER 30.00->30.00배(EPS 18.3815 유지 가정 시 +0.00)"
        },
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
        }
      ],
      "nextUpdateDate": "2026-11-13"
    },
    "LRCX": {
      "ticker": "LRCX",
      "asOf": "2026-10-28",
      "verdict": "적정",
      "action": "관망(적정가 근처)",
      "actionRaw": "관망(적정가 근처)",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": 313.74499315068493,
      "fairPriceB": 238.5580148315417,
      "fairBasisMode": "ex_capped_growth_floor_b",
      "candidateBadge": null,
      "lowConfidenceCapEligible": false,
      "sectorPerMethod": "median",
      "sectorFewPeers": true,
      "currentPrice": 240.85000610351562,
      "fairPrice": 238.5580148315417,
      "ratio": 1.009607689238999,
      "bandAggressiveLe": 190.84641186523336,
      "bandDcaHigh": 214.70221334838755,
      "bandFairHigh": 262.4138163146959,
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
      "epsUsedForCandidates": 10.458166438356164,
      "ttmEps": 6.709999999999999,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 6.900474054204336,
        "peTTM": 34.9034,
        "finnhubUpdated": "2026-10-27 21:01",
        "periods": "Q4'25~Q3'26",
        "endDates": [
          "2025-12-28",
          "2026-03-29",
          "2026-06-28",
          "2026-09-27"
        ],
        "secVerified": false,
        "quarterly": 6.709999999999999,
        "checks": [
          "분기 연속 OK",
          "최신성 OK(승인 근거 2026-09-27)",
          "역산 주식수 일관(±0.6%)",
          "공시 주식수 대조 +0.6%"
        ],
        "gapPct": 2.838659526145104,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "diag": {
        "epsTtmNtmRatio": 0.6416038642673094,
        "candSpread": 2.035871135870277,
        "fairAltExCappedGrowth": 238.5580148315417,
        "fairAltGapPct": 0.0,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 22.810692126356972,
      "fairPriceBasis": "B안: 성장 PER 상한 후보 제외, 나머지 두 후보의 평균 (A안 상한 포함 $313.74, 낮은 쪽 적용)",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 157.1595131380012,
          "per": 23.421686011624622,
          "eps": 6.709999999999999,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "sector_per",
          "fairPrice": 319.9565165250822,
          "per": 30.59394,
          "eps": 10.458166438356164,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 313.74499315068493,
          "per": 30.0,
          "eps": 10.458166438356164,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": null,
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-10-24",
          "prevFairPrice": 307.1821956164383,
          "newFairPrice": 312.4813528767123,
          "changePct": 1.7250860681036249,
          "epsEffect": 5.299157260273971,
          "perEffect": 3.700522589117274e-14,
          "otherEffect": 0.0,
          "note": "EPS 10.2394->10.4160(적정PER 30.00배 유지 가정 시 +5.30) + 적정PER 30.00->30.00배(EPS 10.4160 유지 가정 시 +0.00)"
        },
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
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "KLAC": {
      "ticker": "KLAC",
      "asOf": "2026-10-28",
      "verdict": "고평가",
      "action": "신규 추격 금지",
      "actionRaw": "신규 추격 금지",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": 176.51690547945205,
      "fairPriceB": 134.46645636181432,
      "fairBasisMode": "ex_capped_growth_floor_b",
      "candidateBadge": null,
      "lowConfidenceCapEligible": false,
      "sectorPerMethod": "median",
      "sectorFewPeers": true,
      "currentPrice": 153.66000366210938,
      "fairPrice": 134.46645636181432,
      "ratio": 1.142738552198105,
      "bandAggressiveLe": 107.57316508945146,
      "bandDcaHigh": 121.0198107256329,
      "bandFairHigh": 147.91310199799577,
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
      "epsUsedForCandidates": 5.883896849315068,
      "ttmEps": 3.667,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 3.7948237593131826,
        "peTTM": 40.492,
        "finnhubUpdated": "2026-10-27 21:01",
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
        "gapPct": 3.485785637119787,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "diag": {
        "epsTtmNtmRatio": 0.6232264252604747,
        "candSpread": 2.024391630036353,
        "fairAltExCappedGrowth": 134.46645636181432,
        "fairAltGapPct": 0.0,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 22.85329940436792,
      "fairPriceBasis": "B안: 성장 PER 상한 후보 제외, 나머지 두 후보의 평균 (A안 상한 포함 $176.52, 낮은 쪽 적용)",
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
          "fairPrice": 180.01158717413423,
          "per": 30.59394,
          "eps": 5.883896849315068,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 176.51690547945205,
          "per": 30.0,
          "eps": 5.883896849315068,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
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
        },
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
        }
      ],
      "nextUpdateDate": "2026-10-29"
    },
    "ASML": {
      "ticker": "ASML",
      "asOf": "2026-10-28",
      "verdict": "고평가",
      "action": "신규 추격 금지",
      "actionRaw": "신규 추격 금지",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": 1600.449997808219,
      "fairPriceB": 1475.2576642104846,
      "fairBasisMode": "ex_capped_growth_floor_b",
      "candidateBadge": null,
      "lowConfidenceCapEligible": false,
      "sectorPerMethod": "median",
      "sectorFewPeers": true,
      "currentPrice": 1635.5699462890625,
      "fairPrice": 1475.2576642104846,
      "ratio": 1.1086673101029931,
      "bandAggressiveLe": 1180.2061313683878,
      "bandDcaHigh": 1327.731897789436,
      "bandFairHigh": 1622.783430631533,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "EPS 품질 경고: ADR 통화환산 적용(EUR->USD); WO8-B 분류 불가(이력 부족 - 유효 4개년 <5년; 필터 없음(원본 그대로))",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "분류불가(이력부족)",
      "stockTypeReason": "유효 연간 EPS 4개년(<5년 기준) - 필터 없음(원본 그대로)",
      "candidates": {
        "historicalPer": 32.706211830099086,
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
      "epsUsedForCandidates": 53.34833326027397,
      "ttmEps": 38.9445,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 31.697890572612536,
        "peTTM": 51.5987,
        "finnhubUpdated": "2026-10-27 21:01",
        "periods": "Q4'25~Q3'26",
        "endDates": [
          "2025-12-31",
          "2026-03-31",
          "2026-06-30",
          "2026-09-30"
        ],
        "secVerified": false,
        "quarterly": 38.9445,
        "checks": [
          "분기 연속 OK",
          "최신성 OK(승인 근거 2026-09-30)",
          "역산 주식수 일관(±0.8%)",
          "EUR35.00(보통주1주) x ADR비율1 x EURUSD=X(1.1127) = $38.94(ADR 1주)"
        ],
        "gapPct": -18.607529760010944,
        "gapPrevPct": 3.402412283107692,
        "gapCause": "period",
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "diag": {
        "epsTtmNtmRatio": 0.7300040623574675,
        "candSpread": 1.3164423570402828,
        "fairAltExCappedGrowth": 1475.2576642104846,
        "fairAltGapPct": 0.0,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": "WO8-B 분류 불가(이력 부족, 유효 4개년 <5년) - 필터 없음(원본 그대로) - 경기순환 여부 판단 안 함, NTM EPS 그대로 사용",
      "convertedFairPer": 27.653303750148098,
      "fairPriceBasis": "B안: 성장 PER 상한 후보 제외, 나머지 두 후보의 평균 (A안 상한 포함 $1600.45, 낮은 쪽 적용)",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 1273.7270666172938,
          "per": 32.706211830099086,
          "eps": 38.9445,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "sector_per",
          "fairPrice": 1676.7882618036754,
          "per": 31.43094,
          "eps": 53.34833326027397,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 1600.449997808219,
          "per": 30.0,
          "eps": 53.34833326027397,
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
          "date": "2026-10-24",
          "prevFairPrice": 1590.7712975342467,
          "newFairPrice": 1595.6106476712328,
          "changePct": 0.3042140717831143,
          "epsEffect": null,
          "perEffect": null,
          "otherEffect": 4.839350136986013,
          "note": "기타(종목유형 변경: None -> 분류불가(이력부족))"
        },
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
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "MU": {
      "ticker": "MU",
      "asOf": "2026-10-28",
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
      "currentPrice": 928.760009765625,
      "fairPrice": 1189.1185005410634,
      "ratio": 0.78104916317678,
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
            "per": 60.44766442072494
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
      "ttmEps": 74.21000000000001,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 76.55646032836495,
        "peTTM": 12.1317,
        "finnhubUpdated": "2026-10-27 21:01",
        "periods": "Q4'25~Q3'26",
        "endDates": [
          "2025-11-27",
          "2026-02-26",
          "2026-05-28",
          "2026-09-03"
        ],
        "secVerified": false,
        "quarterly": 74.21000000000001,
        "checks": [
          "분기 연속 OK",
          "최신성 OK(승인 근거 2026-09-03)",
          "역산 주식수 일관(±0.7%)",
          "공시 주식수 대조 +1.4%"
        ],
        "gapPct": 3.161919321338025,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": {
        "ntm_eps_raw": 181.40036178082192,
        "normalized_eps": 53.57,
        "change_pct": -70.46863662558387,
        "fair_without_normalization": 3605.586150900329,
        "basis_without_normalization": "세 적정가 후보 중앙값",
        "candidates_without_normalization": [
          {
            "candidate": "historical_per",
            "fairPrice": 1068.248587834696,
            "per": 14.394941218632205,
            "eps": 74.21000000000001,
            "epsBasis": "TTM EPS"
          },
          {
            "candidate": "sector_per",
            "fairPrice": 3605.586150900329,
            "per": 19.8764,
            "eps": 181.40036178082192,
            "epsBasis": "NTM EPS"
          },
          {
            "candidate": "growth_per_peg",
            "fairPrice": 5442.010853424657,
            "per": 30.0,
            "eps": 181.40036178082192,
            "epsBasis": "NTM EPS"
          }
        ],
        "note": "표시 전용 참고값 - 정상화 EPS 대신 NTM EPS, 정상화 기준 업종PER 대신 forwardPE 기준 업종PER, 과거PER 후보는 TTM EPS. 판정·행동에 쓰지 않음."
      },
      "diag": {
        "epsTtmNtmRatio": 1.3852902744073177,
        "candSpread": 2.0840654744160583,
        "fairAltExCappedGrowth": 771.1370010821272,
        "fairAltGapPct": -35.150533716257,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": "경기순환형(WO8-B 최종본: (A) EPS 30%+·매출 5%+ 동반 감소 2회(2019→2020 EPS -57%·매출 -8%, 2022→2023 EPS -169%·매출 -49%, 기준 2회 이상)) - NTM EPS(181.4004) 대신 정상화 EPS 53.5700(순이익률 사이클 중앙값 22% x NTM매출/주식수 243.5, 기준연수 8) 사용 - 업종PER·성장PER·과거PER 후보 전부 동일 기준 적용(item3)",
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
      "asOf": "2026-10-28",
      "verdict": "매수",
      "action": "분할매수 · 모델 점검 필요(적정가/현재가 비율 0.28배)",
      "actionRaw": "적극 모아가기 · 모델 점검 필요(적정가/현재가 비율 0.28배)",
      "actionCapReason": "low_confidence_cap",
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "a_kept_capped_not_used",
      "candidateBadge": null,
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": "median",
      "sectorFewPeers": true,
      "currentPrice": 1304.8399658203125,
      "fairPrice": 4606.279499872548,
      "ratio": 0.28327416212073464,
      "bandAggressiveLe": 3685.0235998980384,
      "bandDcaHigh": 4145.651549885293,
      "bandFairHigh": 5066.907449859803,
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
      "epsUsedForCandidates": 231.74616630136984,
      "ttmEps": 83.37475740530932,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 83.37475740530932,
        "peTTM": 15.6503,
        "finnhubUpdated": "2026-10-27 21:01",
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
        "gapPct": 14.368665850904417,
        "gapPrevPct": 189.79755789123848,
        "gapCause": "definition_unexplained",
        "source": "finnhub_peTTM(차이 원인 미확인 - 검증 전 유지)"
      },
      "normalizationSensitivity": null,
      "diag": {
        "epsTtmNtmRatio": 0.35976757991709873,
        "candSpread": 3.524720680831121,
        "fairAltExCappedGrowth": 3289.3717976061816,
        "fairAltGapPct": -28.58940067147041,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": "WO8-B 분류 불가(이력 부족, 유효 4개년 <5년) - 필터 없음(원본 그대로) - 경기순환 여부 판단 안 함, NTM EPS 그대로 사용",
      "convertedFairPer": 19.8764,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 1972.4640953398152,
          "per": 23.657809110629067,
          "eps": 83.37475740530932,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "sector_per",
          "fairPrice": 4606.279499872548,
          "per": 19.8764,
          "eps": 231.74616630136984,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 6952.384989041095,
          "per": 30.0,
          "eps": 231.74616630136984,
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
          "date": "2026-10-24",
          "prevFairPrice": 4583.855069551978,
          "newFairPrice": 4595.067284712263,
          "changePct": 0.24460230505021488,
          "epsEffect": null,
          "perEffect": null,
          "otherEffect": 11.212215160285268,
          "note": "기타(종목유형 변경: None -> 분류불가(이력부족))"
        },
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
        }
      ],
      "nextUpdateDate": "2026-10-30"
    },
    "WDC": {
      "ticker": "WDC",
      "asOf": "2026-10-28",
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
      "currentPrice": 380.8800048828125,
      "fairPrice": 638.9496880271781,
      "ratio": 0.5961032801484231,
      "bandAggressiveLe": 511.1597504217425,
      "bandDcaHigh": 575.0547192244603,
      "bandFairHigh": 702.8446568298959,
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
      "epsUsedForCandidates": 29.879861506849316,
      "ttmEps": 28.782371846567507,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 28.782371846567507,
        "peTTM": 13.2331,
        "finnhubUpdated": "2026-10-27 21:01",
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
        "gapPct": 11.674856955317248,
        "gapPrevPct": 18.869757592448554,
        "gapCause": "definition_unexplained",
        "source": "finnhub_peTTM(차이 원인 미확인 - 검증 전 유지)"
      },
      "normalizationSensitivity": null,
      "diag": {
        "epsTtmNtmRatio": 0.9632699214475866,
        "candSpread": 3.558541567324048,
        "fairAltExCappedGrowth": 445.42473503587536,
        "fairAltGapPct": -30.287979885995508,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": "WO8-B 분류 불가(이력 부족, 유효 1개년 <5년) - corporate_events.json 기업분할/분리상장(2025-02-21) 이전 회계연도 7개 제외 - 경기순환 여부 판단 안 함, NTM EPS 그대로 사용",
      "convertedFairPer": 21.38395748188835,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 638.9496880271781,
          "per": 22.199341021416803,
          "eps": 28.782371846567507,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "sector_per",
          "fairPrice": 251.89978204457262,
          "per": 8.43042,
          "eps": 29.879861506849316,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 896.3958452054795,
          "per": 30.0,
          "eps": 29.879861506849316,
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
          "date": "2026-10-24",
          "prevFairPrice": 571.2312977910766,
          "newFairPrice": 508.47414903274864,
          "changePct": -10.986293818459663,
          "epsEffect": 42.8551297954104,
          "perEffect": -105.61227855373842,
          "otherEffect": 0.0,
          "note": "EPS 24.4835->26.3203(적정PER 23.33배 유지 가정 시 +42.86) + 적정PER 23.33->19.32배(EPS 26.3203 유지 가정 시 -105.61)"
        },
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
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "STX": {
      "ticker": "STX",
      "asOf": "2026-10-28",
      "verdict": "고평가",
      "action": "신규 추격 금지 · 모델 점검 필요(적정가/현재가 비율 2.38배)",
      "actionRaw": "신규 추격 금지 · 모델 점검 필요(적정가/현재가 비율 2.38배)",
      "actionCapReason": null,
      "cashflowVeto": true,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "a_kept_two_candidates",
      "candidateBadge": "후보 2개",
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": null,
      "sectorFewPeers": null,
      "currentPrice": 667.8499755859375,
      "fairPrice": 281.13853493158297,
      "ratio": 2.3755191573025143,
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
            "per": 17.33731584404751
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
      "ttmEps": 13.880251000000001,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 14.516016318666345,
        "peTTM": 46.0078,
        "finnhubUpdated": "2026-10-27 21:02",
        "periods": "Q4'25~Q3'26",
        "endDates": [
          "2025-10-03",
          "2026-01-02",
          "2026-04-03",
          "2026-07-03"
        ],
        "secVerified": false,
        "quarterly": 13.880251000000001,
        "checks": [
          "분기 연속 OK",
          "최신성 OK(승인 근거 2026-07-03)",
          "역산 주식수 일관(±2.6%)",
          "공시 주식수 대조 +2.3%"
        ],
        "gapPct": 4.580358947877405,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": {
        "ntm_eps_raw": 43.49352520547946,
        "normalized_eps": 11.0484,
        "change_pct": -74.59759826824042,
        "fair_without_normalization": 366.6686847627781,
        "basis_without_normalization": "세 적정가 후보 중앙값",
        "candidates_without_normalization": [
          {
            "candidate": "historical_per",
            "fairPrice": 289.9885871975379,
            "per": 20.892171704786744,
            "eps": 13.880251000000001,
            "epsBasis": "TTM EPS"
          },
          {
            "candidate": "sector_per",
            "fairPrice": 366.6686847627781,
            "per": 8.43042,
            "eps": 43.49352520547946,
            "epsBasis": "NTM EPS"
          },
          {
            "candidate": "growth_per_peg",
            "fairPrice": 1304.8057561643836,
            "per": 30.0,
            "eps": 43.49352520547946,
            "epsBasis": "NTM EPS"
          }
        ],
        "note": "표시 전용 참고값 - 정상화 EPS 대신 NTM EPS, 정상화 기준 업종PER 대신 forwardPE 기준 업종PER, 과거PER 후보는 TTM EPS. 판정·행동에 쓰지 않음."
      },
      "diag": {
        "epsTtmNtmRatio": 1.2563132218239745,
        "candSpread": 1.4359445453498019,
        "fairAltExCappedGrowth": 230.82506986316588,
        "fairAltGapPct": -17.896324700084687,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": "경기순환형(WO8-B 최종본: (B) EPS 30%+·매출 5%+ 동반 감소 1회(2022→2023 EPS -135%·매출 -37%) + 이익 정점 의심(NTM EPS $36.66가 과거 8년 EPS 중앙값 $6.06의 3배 초과)) - NTM EPS(43.4935) 대신 정상화 EPS 11.0484(순이익률 사이클 중앙값 13.2% x NTM매출/주식수 83.7, 기준연수 8) 사용 - 업종PER·성장PER·과거PER 후보 전부 동일 기준 적용(item3)",
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
      "asOf": "2026-10-28",
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
      "currentPrice": 217.94000244140625,
      "fairPrice": 248.51900462897802,
      "ratio": 0.8769550753946398,
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
            "per": 53.91702680215863
          }
        ],
        "excluded": [
          {
            "ticker": "AMD",
            "reason": "정상화기준 PER 299.1배 >80배 제외"
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
        "finnhub": 8.115162867057379,
        "peTTM": 26.8559,
        "finnhubUpdated": "2026-10-27 21:00",
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
        "gapPct": 2.5937151334687547,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": {
        "ntm_eps_raw": 14.196224383561644,
        "normalized_eps": 6.114639999999999,
        "change_pct": -56.927702501797754,
        "fair_without_normalization": 425.8867315068493,
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
            "fairPrice": 638.6855796960493,
            "per": 44.98982,
            "eps": 14.196224383561644,
            "epsBasis": "NTM EPS"
          },
          {
            "candidate": "growth_per_peg",
            "fairPrice": 425.8867315068493,
            "per": 30.0,
            "eps": 14.196224383561644,
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
      "epsBasisNote": "경기순환형(WO8-B 최종본: (B) EPS 30%+·매출 5%+ 동반 감소 1회(2019→2020 EPS -32%·매출 -7%) + 이익 정점 의심(NTM EPS $9.31가 과거 8년 EPS 중앙값 $0.28의 3배 초과)) - NTM EPS(14.1962) 대신 정상화 EPS 6.1146(순이익률 사이클 중앙값 35.8% x NTM매출/주식수 17.08, 기준연수 8) 사용 - 업종PER·성장PER·과거PER 후보 전부 동일 기준 적용(item3)",
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
      "asOf": "2026-10-28",
      "verdict": "고평가",
      "action": "신규 추격 금지 · 모델 점검 필요(적정가/현재가 비율 2.06배)",
      "actionRaw": "신규 추격 금지 · 모델 점검 필요(적정가/현재가 비율 2.06배)",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "a_kept_capped_not_used",
      "candidateBadge": null,
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": "median",
      "sectorFewPeers": true,
      "currentPrice": 560.260009765625,
      "fairPrice": 272.22576388944987,
      "ratio": 2.0580712191265813,
      "bandAggressiveLe": 217.7806111115599,
      "bandDcaHigh": 245.00318750050488,
      "bandFairHigh": 299.4483402783949,
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
      "epsUsedForCandidates": 14.323721452054794,
      "ttmEps": 3.8899999999999997,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 4.144382527740607,
        "peTTM": 135.1854,
        "finnhubUpdated": "2026-10-27 21:00",
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
        "gapPct": 6.539396600015612,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "diag": {
        "epsTtmNtmRatio": 0.2715774677007534,
        "candSpread": 1.9426364910602036,
        "fairAltExCappedGrowth": 246.71299821432268,
        "fairAltGapPct": -9.371914439916074,
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
          "fairPrice": 272.22576388944987,
          "per": 19.00524,
          "eps": 14.323721452054794,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 429.7116435616438,
          "per": 30.0,
          "eps": 14.323721452054794,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": "최대/최소 2.99배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-10-24",
          "prevFairPrice": 268.9186750943376,
          "newFairPrice": 270.63417865705975,
          "changePct": 0.6379265263449525,
          "epsEffect": 1.7155035627221793,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 14.1497->14.2400(적정PER 19.01배 유지 가정 시 +1.72) + 적정PER 19.01->19.01배(EPS 14.2400 유지 가정 시 +0.00)"
        },
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
        }
      ],
      "nextUpdateDate": "2026-11-04"
    },
    "AVGO": {
      "ticker": "AVGO",
      "asOf": "2026-10-28",
      "verdict": "매수",
      "action": "분할매수",
      "actionRaw": "적극 모아가기",
      "actionCapReason": "low_confidence_cap",
      "cashflowVeto": false,
      "fairPriceUpper": 582.028962739726,
      "fairPriceB": 575.1888406628777,
      "fairBasisMode": "ex_capped_growth_floor_b",
      "candidateBadge": null,
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": "median",
      "sectorFewPeers": true,
      "currentPrice": 342.3299865722656,
      "fairPrice": 575.1888406628777,
      "ratio": 0.595161036465427,
      "bandAggressiveLe": 460.1510725303022,
      "bandDcaHigh": 517.6699565965899,
      "bandFairHigh": 632.7077247291655,
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
      "epsUsedForCandidates": 19.400965424657535,
      "ttmEps": 7.83,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 8.304082460399949,
        "peTTM": 41.2243,
        "finnhubUpdated": "2026-10-27 21:01",
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
        "gapPct": 6.054692980842247,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "diag": {
        "epsTtmNtmRatio": 0.40358816319771956,
        "candSpread": 3.1450310702754933,
        "fairAltExCappedGrowth": 575.1888406628777,
        "fairAltGapPct": 0.0,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 29.64743393294465,
      "fairPriceBasis": "B안: 성장 PER 상한 후보 제외, 나머지 두 후보의 평균 (A안 상한 포함 $582.03, 낮은 쪽 적용)",
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
          "fairPrice": 872.8459422815661,
          "per": 44.98982,
          "eps": 19.400965424657535,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 582.028962739726,
          "per": 30.0,
          "eps": 19.400965424657535,
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
          "date": "2026-10-24",
          "prevFairPrice": 574.9116139726027,
          "newFairPrice": 578.4732887671233,
          "changePct": 0.6195169323349864,
          "epsEffect": 3.5616747945205414,
          "perEffect": 1.3700999772157807e-13,
          "otherEffect": 0.0,
          "note": "EPS 19.1637->19.2824(적정PER 30.00배 유지 가정 시 +3.56) + 적정PER 30.00->30.00배(EPS 19.2824 유지 가정 시 +0.00)"
        },
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
        }
      ],
      "nextUpdateDate": "2026-12-10"
    },
    "MRVL": {
      "ticker": "MRVL",
      "asOf": "2026-10-28",
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
      "currentPrice": 243.57000732421875,
      "fairPrice": 123.91231894860823,
      "ratio": 1.9656641840851814,
      "bandAggressiveLe": 99.12985515888658,
      "bandDcaHigh": 111.52108705374741,
      "bandFairHigh": 136.30355084346905,
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
      "epsUsedForCandidates": 6.5199028767123295,
      "ttmEps": 3.0300000000000002,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 3.1365616337396864,
        "peTTM": 77.6551,
        "finnhubUpdated": "2026-10-27 21:01",
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
        "gapPct": 3.5168856019698325,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "diag": {
        "epsTtmNtmRatio": 0.4647308491085809,
        "candSpread": 6.283492920414482,
        "fairAltExCappedGrowth": 77.52051904140836,
        "fairAltGapPct": -37.43921532647657,
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
          "fairPrice": 123.91231894860823,
          "per": 19.00524,
          "eps": 6.5199028767123295,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 195.59708630136987,
          "per": 30.0,
          "eps": 6.5199028767123295,
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
          "date": "2026-10-24",
          "prevFairPrice": 122.61734250894575,
          "newFairPrice": 123.264830728777,
          "changePct": 0.5280559883150355,
          "epsEffect": 0.6474882198312434,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 6.4518->6.4858(적정PER 19.01배 유지 가정 시 +0.65) + 적정PER 19.01->19.01배(EPS 6.4858 유지 가정 시 +0.00)"
        },
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
        }
      ],
      "nextUpdateDate": "2026-11-27"
    },
    "TSM": {
      "ticker": "TSM",
      "asOf": "2026-10-28",
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
      "currentPrice": 436.8699951171875,
      "fairPrice": 526.9475093798836,
      "ratio": 0.8290578992038503,
      "bandAggressiveLe": 421.55800750390694,
      "bandDcaHigh": 474.25275844189525,
      "bandFairHigh": 579.642260317872,
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
      "epsUsedForCandidates": 22.35409569863014,
      "ttmEps": 15.1804862757,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 17.996778364367618,
        "peTTM": 24.2749,
        "finnhubUpdated": "2026-10-27 21:01",
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
        "gapPct": 18.552054509451168,
        "gapPrevPct": 35.022606187975484,
        "gapCause": "fx_adr",
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "diag": {
        "epsTtmNtmRatio": 0.6790919427185892,
        "candSpread": 1.800808468623305,
        "fairAltExCappedGrowth": 449.67425370014104,
        "fairAltGapPct": -14.664317470762589,
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
          "fairPrice": 526.9475093798836,
          "per": 23.57275,
          "eps": 22.35409569863014,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 670.6228709589042,
          "per": 30.0,
          "eps": 22.35409569863014,
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
          "date": "2026-10-24",
          "prevFairPrice": 383.69802775612203,
          "newFairPrice": 525.4282540381575,
          "changePct": 36.93796059126973,
          "epsEffect": 1.1126651378935242,
          "perEffect": 140.61756114414194,
          "otherEffect": 0.0,
          "note": "EPS 22.2252->22.2896(적정PER 17.26배 유지 가정 시 +1.11) + 적정PER 17.26->23.57배(EPS 22.2896 유지 가정 시 +140.62)"
        },
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
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "INTC": {
      "ticker": "INTC",
      "asOf": "2026-10-28",
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
      "currentPrice": 93.73999786376953,
      "fairPrice": 62.37911225705096,
      "ratio": 1.5027465841047412,
      "bandAggressiveLe": 49.903289805640775,
      "bandDcaHigh": 56.141201031345865,
      "bandFairHigh": 68.61702348275607,
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
      "epsUsedForCandidates": 2.49302597260274,
      "ttmEps": null,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": null,
        "peTTM": null,
        "finnhubUpdated": "2026-10-27 21:01",
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
        "candSpread": 1.4967901335585838,
        "fairAltExCappedGrowth": 49.96744533601973,
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
          "fairPrice": 49.96744533601973,
          "per": 20.04289,
          "eps": 2.49302597260274,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 74.7907791780822,
          "per": 30.0,
          "eps": 2.49302597260274,
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
          "date": "2026-10-24",
          "prevFairPrice": 74.42009671232877,
          "newFairPrice": 61.55789540728918,
          "changePct": -17.283236482154127,
          "epsEffect": -0.6139331506849288,
          "perEffect": -12.248268154354658,
          "otherEffect": 0.0,
          "note": "EPS 2.4807->2.4602(적정PER 30.00배 유지 가정 시 -0.61) + 적정PER 30.00->25.02배(EPS 2.4602 유지 가정 시 -12.25)"
        },
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
        }
      ],
      "nextUpdateDate": "2026-10-30"
    },
    "QCOM": {
      "ticker": "QCOM",
      "asOf": "2026-10-28",
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
      "currentPrice": 184.1699981689453,
      "fairPrice": 111.68829297569886,
      "ratio": 1.6489642133667226,
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
        "finnhub": 8.842593393811352,
        "peTTM": 20.8276,
        "finnhubUpdated": "2026-10-27 21:01",
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
        "gapPct": 2.3448309468906414,
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
      "asOf": "2026-10-28",
      "verdict": "고평가",
      "action": "신규 추격 금지 · 모델 점검 필요(적정가/현재가 비율 2.78배)",
      "actionRaw": "신규 추격 금지 · 모델 점검 필요(적정가/현재가 비율 2.78배)",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "a_kept_one_candidate",
      "candidateBadge": "후보 1개",
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": null,
      "sectorFewPeers": null,
      "currentPrice": 226.60000610351562,
      "fairPrice": 81.40018438356164,
      "ratio": 2.783777553079798,
      "bandAggressiveLe": 65.1201475068493,
      "bandDcaHigh": 73.26016594520547,
      "bandFairHigh": 89.5402028219178,
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
      "epsUsedForCandidates": 2.7133394794520544,
      "ttmEps": 0.97,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 1.0542972667065662,
        "peTTM": 214.9299,
        "finnhubUpdated": "2026-10-27 21:01",
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
        "gapPct": 8.69043986665632,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "diag": {
        "epsTtmNtmRatio": 0.35749304771693613,
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
          "fairPrice": 81.40018438356164,
          "per": 30.0,
          "eps": 2.7133394794520544,
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
          "date": "2026-10-24",
          "prevFairPrice": 80.77017698630138,
          "newFairPrice": 81.12498657534246,
          "changePct": 0.4392829163928387,
          "epsEffect": null,
          "perEffect": null,
          "otherEffect": 0.35480958904108206,
          "note": "기타(종목유형 변경: None -> 분류불가(이력부족))"
        },
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
        }
      ],
      "nextUpdateDate": "2026-11-06"
    },
    "ANET": {
      "ticker": "ANET",
      "asOf": "2026-10-28",
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
      "currentPrice": 187.0,
      "fairPrice": 150.948668212994,
      "ratio": 1.2388317314342667,
      "bandAggressiveLe": 120.7589345703952,
      "bandDcaHigh": 135.8538013916946,
      "bandFairHigh": 166.0435350342934,
      "modelCheckNeeded": false,
      "confidence": "높음",
      "confidenceNote": "적정가 후보 모두 중앙값 ±0% 안",
      "bizRiskBadge": false,
      "bizRiskDetail": [],
      "stockType": "고성장형",
      "stockTypeReason": "NTM PER 43.1배(기준 40 초과); 다음 회계연도 성장률 38.1%(기준 30% 초과)",
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
            "per": 49.00640439669019
          }
        ],
        "excluded": [],
        "note": "유효 비교군 2개 이하(최소 3개 기준 미달)"
      },
      "epsUsedForCandidates": 5.028516109589042,
      "ttmEps": 3.17,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 3.4790697674418603,
        "peTTM": 53.75,
        "finnhubUpdated": "2026-10-27 21:02",
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
        "gapPct": 9.749834935074464,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "diag": {
        "epsTtmNtmRatio": 0.630404662312809,
        "candSpread": 1.0012354197977023,
        "fairAltExCappedGrowth": 151.04185313831675,
        "fairAltGapPct": 0.06173285688833019,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 30.01853129696553,
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
          "fairPrice": 150.85548328767123,
          "per": 30.0,
          "eps": 5.028516109589042,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": "최대/최소 1.59배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-10-24",
          "prevFairPrice": 153.28131938704638,
          "newFairPrice": 146.68850932441728,
          "changePct": -4.301117767639889,
          "epsEffect": 0.3711284934775805,
          "perEffect": -6.963938556106672,
          "otherEffect": 0.0,
          "note": "EPS 5.0043->5.0164(적정PER 30.63배 유지 가정 시 +0.37) + 적정PER 30.63->29.24배(EPS 5.0164 유지 가정 시 -6.96)"
        },
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
        }
      ],
      "nextUpdateDate": "2026-11-04"
    },
    "ETN": {
      "ticker": "ETN",
      "asOf": "2026-10-28",
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
      "currentPrice": 384.20001220703125,
      "fairPrice": 328.1441888471277,
      "ratio": 1.1708268049994883,
      "bandAggressiveLe": 262.5153510777022,
      "bandDcaHigh": 295.3297699624149,
      "bandFairHigh": 360.95860773184046,
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
            "per": 18.194942177599508
          }
        ],
        "excluded": [],
        "note": "유효 비교군 3개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 15.82332098630137,
      "ttmEps": 9.83,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 10.096922362685834,
        "peTTM": 38.0512,
        "finnhubUpdated": "2026-10-27 21:02",
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
        "gapPct": 2.7153851748304536,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "diag": {
        "epsTtmNtmRatio": 0.6212349486248853,
        "candSpread": 1.2873064631475213,
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
          "fairPrice": 328.1441888471277,
          "per": 20.73801,
          "eps": 15.82332098630137,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 385.6934490410959,
          "per": 24.375,
          "eps": 15.82332098630137,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": false,
      "dispersionFlag": null,
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-10-24",
          "prevFairPrice": 328.90963748122084,
          "newFairPrice": 327.5321596053731,
          "changePct": -0.4188013116296613,
          "epsEffect": 1.0765016639427574,
          "perEffect": -2.4539795397904625,
          "otherEffect": 0.0,
          "note": "EPS 15.7423->15.7938(적정PER 20.89배 유지 가정 시 +1.08) + 적정PER 20.89->20.74배(EPS 15.7938 유지 가정 시 -2.45)"
        },
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
        }
      ],
      "nextUpdateDate": "2026-11-04"
    },
    "HUBB": {
      "ticker": "HUBB",
      "asOf": "2026-10-28",
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
      "currentPrice": 434.2799987792969,
      "fairPrice": 453.5077178106343,
      "ratio": 0.9576022231238718,
      "bandAggressiveLe": 362.80617424850743,
      "bandDcaHigh": 408.15694602957086,
      "bandFairHigh": 498.8584895916978,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±41% (±40% 밖) / 사업 위험으로 신뢰도 1단계 하향(낮음→낮음): EPS 하향 수정이 상향보다 많음(방향은 혼조)",
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
        "growthPerPeg": 18.750000375,
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
            "per": 18.194942177599508
          }
        ],
        "excluded": [],
        "note": "유효 비교군 3개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 22.60679016438356,
      "ttmEps": 16.89,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 16.097680269677177,
        "peTTM": 26.9778,
        "finnhubUpdated": "2026-10-27 21:02",
        "periods": "Q3'25~Q2'26",
        "endDates": [
          "2025-09-30",
          "2025-12-31",
          "2026-03-31",
          "2026-06-30"
        ],
        "secVerified": false,
        "quarterly": 16.89,
        "checks": [
          "분기 연속 OK",
          "최신성 OK(승인 근거 2026-06-30)",
          "역산 주식수 일관(±0.6%)",
          "공시 주식수 대조 +0.7%"
        ],
        "gapPct": -4.69105820202974,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "diag": {
        "epsTtmNtmRatio": 0.7471206605265783,
        "candSpread": 1.5097663698046726,
        "fairAltExCappedGrowth": null,
        "fairAltGapPct": null,
        "fairAltApplicable": false,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 20.06068594935359,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 453.5077178106343,
          "per": 26.85066416877645,
          "eps": 16.89,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "sector_per",
          "fairPrice": 639.9557287881895,
          "per": 28.30812,
          "eps": 22.60679016438356,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 423.87732405973804,
          "per": 18.750000375,
          "eps": 22.60679016438356,
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
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "VRT": {
      "ticker": "VRT",
      "asOf": "2026-10-28",
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
      "currentPrice": 208.55999755859375,
      "fairPrice": 209.99535944874336,
      "ratio": 0.9931647923367566,
      "bandAggressiveLe": 167.9962875589947,
      "bandDcaHigh": 188.99582350386902,
      "bandFairHigh": 230.99489539361772,
      "modelCheckNeeded": false,
      "confidence": "보통",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±25%",
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
            "per": 18.194942177599508
          }
        ],
        "excluded": [],
        "note": "유효 비교군 3개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 8.763074410958904,
      "ttmEps": 4.42,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 4.642135292305705,
        "peTTM": 44.9276,
        "finnhubUpdated": "2026-10-27 21:02",
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
        "gapPct": 5.025685346282915,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "diag": {
        "epsTtmNtmRatio": 0.5043891895374581,
        "candSpread": 1.44661903432393,
        "fairAltExCappedGrowth": 195.86204210697662,
        "fairAltGapPct": -6.730299840371689,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 23.963662705651327,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 209.99535944874336,
          "per": 47.510262318720216,
          "eps": 4.42,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "sector_per",
          "fairPrice": 181.72872476520985,
          "per": 20.73801,
          "eps": 8.763074410958904,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 262.89223232876714,
          "per": 30.0,
          "eps": 8.763074410958904,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
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
        }
      ],
      "nextUpdateDate": "2026-10-29"
    },
    "MOD": {
      "ticker": "MOD",
      "asOf": "2026-10-28",
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
      "currentPrice": 136.50999450683594,
      "fairPrice": 251.28214753304707,
      "ratio": 0.5432538516843223,
      "bandAggressiveLe": 201.02571802643766,
      "bandDcaHigh": 226.15393277974238,
      "bandFairHigh": 276.4103622863518,
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
      "epsUsedForCandidates": 8.619113342465752,
      "ttmEps": 2.66,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 2.7517016871198736,
        "peTTM": 49.6093,
        "finnhubUpdated": "2026-10-27 21:02",
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
        "gapPct": 3.4474318466117815,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "diag": {
        "epsTtmNtmRatio": 0.3086164312162333,
        "candSpread": 1.0597665970046757,
        "fairAltExCappedGrowth": 243.9908947921216,
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
          "fairPrice": 243.9908947921216,
          "per": 28.30812,
          "eps": 8.619113342465752,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 258.57340027397254,
          "per": 30.0,
          "eps": 8.619113342465752,
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
          "date": "2026-10-24",
          "prevFairPrice": 248.96476718407726,
          "newFairPrice": 253.09062818926031,
          "changePct": 1.6572067814449076,
          "epsEffect": 4.125861005183045,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 8.5396->8.6811(적정PER 29.15배 유지 가정 시 +4.13) + 적정PER 29.15->29.15배(EPS 8.6811 유지 가정 시 +0.00)"
        },
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
        }
      ],
      "nextUpdateDate": "2026-11-04"
    },
    "PWR": {
      "ticker": "PWR",
      "asOf": "2026-10-28",
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
      "currentPrice": 578.8300170898438,
      "fairPrice": 407.74198015388055,
      "ratio": 1.4195987787948523,
      "bandAggressiveLe": 326.1935841231045,
      "bandDcaHigh": 366.9677821384925,
      "bandFairHigh": 448.51617816926864,
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
            "per": 19.04156931012556
          }
        ],
        "excluded": [],
        "note": "유효 비교군 3개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 19.376277369863015,
      "ttmEps": 8.73,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 9.222031308189845,
        "peTTM": 62.766,
        "finnhubUpdated": "2026-10-27 21:02",
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
        "gapPct": 5.636097459219291,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "diag": {
        "epsTtmNtmRatio": 0.450550940893231,
        "candSpread": 1.5427512664338086,
        "fairAltExCappedGrowth": 392.2643927411249,
        "fairAltGapPct": -3.7959268768240295,
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
          "fairPrice": 407.74198015388055,
          "per": 21.04336,
          "eps": 19.376277369863015,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 581.2883210958904,
          "per": 30.0,
          "eps": 19.376277369863015,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": "최대/최소 2.05배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-10-24",
          "prevFairPrice": 468.64565766458895,
          "newFairPrice": 406.19799481538627,
          "changePct": -13.325134209159078,
          "epsEffect": 1.4450740360642909,
          "perEffect": -63.89273688526695,
          "otherEffect": 0.0,
          "note": "EPS 19.2436->19.3029(적정PER 24.35배 유지 가정 시 +1.45) + 적정PER 24.35->21.04배(EPS 19.3029 유지 가정 시 -63.89)"
        },
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
        }
      ],
      "nextUpdateDate": "2026-10-30"
    },
    "EME": {
      "ticker": "EME",
      "asOf": "2026-10-28",
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
      "currentPrice": 666.3599853515625,
      "fairPrice": 1059.788998229573,
      "ratio": 0.6287666568201292,
      "bandAggressiveLe": 847.8311985836585,
      "bandDcaHigh": 953.8100984066158,
      "bandFairHigh": 1165.7678980525304,
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
            "per": 19.04156931012556
          }
        ],
        "excluded": [],
        "note": "유효 비교군 3개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 37.16782961643836,
      "ttmEps": 32.15,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 32.712009295381186,
        "peTTM": 20.3705,
        "finnhubUpdated": "2026-10-27 21:03",
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
        "gapPct": 1.7480849000970133,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "diag": {
        "epsTtmNtmRatio": 0.8649953557089298,
        "candSpread": 1.896741358866695,
        "fairAltExCappedGrowth": 823.8288521779225,
        "fairAltGapPct": -22.2648231342119,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 28.51361,
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
          "fairPrice": 1059.788998229573,
          "per": 28.51361,
          "eps": 37.16782961643836,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 1115.034888493151,
          "per": 30.0,
          "eps": 37.16782961643836,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": "최대/최소 1.64배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-10-24",
          "prevFairPrice": 842.1104472681689,
          "newFairPrice": 1058.3930781264648,
          "changePct": 25.6834043040225,
          "epsEffect": 5.626353670478782,
          "perEffect": 210.65627718781724,
          "otherEffect": 0.0,
          "note": "EPS 36.8725->37.1189(적정PER 22.84배 유지 가정 시 +5.63) + 적정PER 22.84->28.51배(EPS 37.1189 유지 가정 시 +210.66)"
        },
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
        }
      ],
      "nextUpdateDate": "2026-10-30"
    },
    "FIX": {
      "ticker": "FIX",
      "asOf": "2026-10-28",
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
      "currentPrice": 1288.6099853515625,
      "fairPrice": 1331.1274269631037,
      "ratio": 0.9680590747735229,
      "bandAggressiveLe": 1064.9019415704831,
      "bandDcaHigh": 1198.0146842667934,
      "bandFairHigh": 1464.2401696594143,
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
            "per": 19.04156931012556
          }
        ],
        "excluded": [],
        "note": "유효 비교군 3개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 63.2564109041096,
      "ttmEps": 46.31999999999999,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 47.81537402462968,
        "peTTM": 26.9497,
        "finnhubUpdated": "2026-10-27 21:03",
        "periods": "Q4'25~Q3'26",
        "endDates": [
          "2025-12-31",
          "2026-03-31",
          "2026-06-30",
          "2026-09-30"
        ],
        "secVerified": false,
        "quarterly": 46.31999999999999,
        "checks": [
          "분기 연속 OK",
          "최신성 OK(승인 근거 2026-06-30)",
          "역산 주식수 일관(±0.4%)",
          "공시 주식수 대조 +0.5%"
        ],
        "gapPct": 3.2283549754527074,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "diag": {
        "epsTtmNtmRatio": 0.7322577955018107,
        "candSpread": 1.627338445022731,
        "fairAltExCappedGrowth": 1248.6299874110605,
        "fairAltGapPct": -6.197561396526607,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 21.04336,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 1166.132547859017,
          "per": 25.175573140306934,
          "eps": 46.31999999999999,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "sector_per",
          "fairPrice": 1331.1274269631037,
          "per": 21.04336,
          "eps": 63.2564109041096,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 1897.6923271232881,
          "per": 30.0,
          "eps": 63.2564109041096,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": null,
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-10-24",
          "prevFairPrice": 1350.270339739177,
          "newFairPrice": 1223.4430456715572,
          "changePct": -9.392733464923635,
          "epsEffect": 2.8549294418765285,
          "perEffect": -129.6822235094962,
          "otherEffect": 0.0,
          "note": "EPS 58.0165->58.1391(적정PER 23.27배 유지 가정 시 +2.85) + 적정PER 23.27->21.04배(EPS 58.1391 유지 가정 시 -129.68)"
        },
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
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "COHR": {
      "ticker": "COHR",
      "asOf": "2026-10-28",
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
      "currentPrice": 235.7899932861328,
      "fairPrice": 230.68025204874277,
      "ratio": 1.0221507527931362,
      "bandAggressiveLe": 184.54420163899422,
      "bandDcaHigh": 207.6122268438685,
      "bandFairHigh": 253.74827725361706,
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
      "epsUsedForCandidates": 10.8736698630137,
      "ttmEps": 4.109999999999999,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 4.514904667631716,
        "peTTM": 52.2248,
        "finnhubUpdated": "2026-10-27 21:02",
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
        "gapPct": 9.851695076197476,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "diag": {
        "epsTtmNtmRatio": 0.3779772654290324,
        "candSpread": 2.4136819134915144,
        "fairAltExCappedGrowth": 135.15040820707455,
        "fairAltGapPct": -41.41223316397398,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 21.214571984881694,
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
          "fairPrice": 326.21009589041097,
          "per": 30.0,
          "eps": 10.8736698630137,
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
          "date": "2026-10-24",
          "prevFairPrice": 229.52275895174597,
          "newFairPrice": 221.61987492062042,
          "changePct": -3.4431810018400073,
          "epsEffect": -0.3243229004792953,
          "perEffect": -7.578561130646255,
          "otherEffect": 0.0,
          "note": "EPS 10.8421->10.8268(적정PER 21.17배 유지 가정 시 -0.32) + 적정PER 21.17->20.47배(EPS 10.8268 유지 가정 시 -7.58)"
        },
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
        }
      ],
      "nextUpdateDate": "2026-11-05"
    },
    "LITE": {
      "ticker": "LITE",
      "asOf": "2026-10-28",
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
      "currentPrice": 866.1799926757812,
      "fairPrice": 794.0857273972603,
      "ratio": 1.0907890203678905,
      "bandAggressiveLe": 635.2685819178082,
      "bandDcaHigh": 714.6771546575343,
      "bandFairHigh": 873.4943001369863,
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
            "per": 23.469875381849043
          },
          {
            "ticker": "AAOI",
            "per": 31.88424
          }
        ],
        "excluded": [],
        "note": "유효 비교군 2개 이하(최소 3개 기준 미달)"
      },
      "epsUsedForCandidates": 26.469524246575343,
      "ttmEps": null,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": null,
        "peTTM": null,
        "finnhubUpdated": "2026-10-27 21:02",
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
          "fairPrice": 794.0857273972603,
          "per": 30.0,
          "eps": 26.469524246575343,
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
          "date": "2026-10-24",
          "prevFairPrice": 784.723581369863,
          "newFairPrice": 788.319895890411,
          "changePct": 0.45829061416377737,
          "epsEffect": null,
          "perEffect": null,
          "otherEffect": 3.596314520547935,
          "note": "기타(종목유형 변경: None -> 이익훼손형)"
        },
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
        }
      ],
      "nextUpdateDate": "2026-11-06"
    },
    "CEG": {
      "ticker": "CEG",
      "asOf": "2026-10-28",
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
      "currentPrice": 258.9800109863281,
      "fairPrice": 239.3795197081423,
      "ratio": 1.0818804018910357,
      "bandAggressiveLe": 191.50361576651386,
      "bandDcaHigh": 215.44156773732809,
      "bandFairHigh": 263.31747167895657,
      "modelCheckNeeded": false,
      "confidence": "낮음",
      "confidenceNote": "적정가 후보 중 최대 괴리 ±61% (±40% 밖)",
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
        "growthPerPeg": 29.3025003,
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
      "epsUsedForCandidates": 13.120074657534246,
      "ttmEps": 10.26,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 10.031413956994376,
        "peTTM": 25.8169,
        "finnhubUpdated": "2026-10-27 21:02",
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
        "gapPct": -2.2279341423550036,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과 · 판정 변경 승인 2026-10-26 23:21)"
      },
      "normalizationSensitivity": null,
      "diag": {
        "epsTtmNtmRatio": 0.7820077452156997,
        "candSpread": 2.8453228340492966,
        "fairAltExCappedGrowth": null,
        "fairAltGapPct": null,
        "fairAltApplicable": false,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 18.245286399393912,
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
          "fairPrice": 135.11682645912327,
          "per": 10.29848,
          "eps": 13.120074657534246,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 384.45099158841964,
          "per": 29.3025003,
          "eps": 13.120074657534246,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": false,
      "dispersionFlag": "최대/최소 2.85배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
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
      "asOf": "2026-10-28",
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
      "currentPrice": 146.66000366210938,
      "fairPrice": 104.45005898774575,
      "ratio": 1.4041160443893648,
      "bandAggressiveLe": 83.5600471901966,
      "bandDcaHigh": 94.00505308897118,
      "bandFairHigh": 114.89506488652033,
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
      "epsUsedForCandidates": 10.142279150684931,
      "ttmEps": 6.700628379765134,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 6.700628379765134,
        "peTTM": 21.8875,
        "finnhubUpdated": "2026-10-27 21:02",
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
        "epsTtmNtmRatio": 0.6606629811912271,
        "candSpread": 3.0026251930327477,
        "fairAltExCappedGrowth": 102.89208831069894,
        "fairAltGapPct": -1.491593869975305,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 10.29848,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 101.33411763365214,
          "per": 15.123076805701622,
          "eps": 6.700628379765134,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "sector_per",
          "fairPrice": 104.45005898774575,
          "per": 10.29848,
          "eps": 10.142279150684931,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 304.2683745205479,
          "per": 30.0,
          "eps": 10.142279150684931,
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
          "date": "2026-10-24",
          "prevFairPrice": 202.47396174360244,
          "newFairPrice": 105.11940940072108,
          "changePct": -48.08250478457261,
          "epsEffect": 0.09004928902114552,
          "perEffect": -97.4446016319025,
          "otherEffect": 0.0,
          "note": "EPS 10.2027->10.2073(적정PER 19.85배 유지 가정 시 +0.09) + 적정PER 19.85->10.30배(EPS 10.2073 유지 가정 시 -97.44)"
        },
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
        }
      ],
      "nextUpdateDate": "2026-11-09"
    },
    "GEV": {
      "ticker": "GEV",
      "asOf": "2026-10-28",
      "verdict": "고평가",
      "action": "신규 추격 금지",
      "actionRaw": "신규 추격 금지",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": 1223.8275141008671,
      "fairBasisMode": "a_kept_b_higher",
      "candidateBadge": null,
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": "median",
      "sectorFewPeers": true,
      "currentPrice": 895.0800170898438,
      "fairPrice": 733.2077999999999,
      "ratio": 1.2207726337470004,
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
      "ttmEps": 39.289775347972856,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 39.289775347972856,
        "peTTM": 22.7815,
        "finnhubUpdated": "2026-10-27 21:02",
        "periods": "Q3'25~Q2'26",
        "endDates": [
          "2025-09-30",
          "2025-12-31",
          "2026-03-31",
          "2026-06-30"
        ],
        "secVerified": true,
        "quarterly": 34.94,
        "checks": [
          "분기 연속 OK",
          "최신성 OK(승인 근거 2026-06-30)",
          "역산 주식수 일관(±1.9%)",
          "공시 주식수 대조 +1.5%",
          "Q4'25 EPS 13.39 크기 이례적 - SEC 대조 확인(GAAP 희석 EPS 맞음)",
          "Q1'26 EPS 17.44 크기 이례적 - SEC 대조 확인(GAAP 희석 EPS 맞음)"
        ],
        "gapPct": 12.449271173362497,
        "gapPrevPct": 14.447350270821024,
        "gapCause": "definition_unexplained",
        "source": "finnhub_peTTM(차이 원인 미확인 - 검증 전 유지)"
      },
      "normalizationSensitivity": null,
      "diag": {
        "epsTtmNtmRatio": 1.6075841806909117,
        "candSpread": 3.3411001403851137,
        "fairAltExCappedGrowth": 1223.8275141008671,
        "fairAltGapPct": 66.91414277110354,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": "WO8-B 분류 불가(이력 부족, 유효 4개년 <5년) - 필터 없음(원본 그대로) - 경기순환 여부 판단 안 함, NTM EPS 그대로 사용",
      "convertedFairPer": 29.999999999999996,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 1883.822140443334,
          "per": 47.94687991364474,
          "eps": 39.289775347972856,
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
      "nextUpdateDate": "2026-10-29"
    },
    "BE": {
      "ticker": "BE",
      "asOf": "2026-10-28",
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
      "currentPrice": 218.5,
      "fairPrice": 148.5407210958904,
      "ratio": 1.470977105725422,
      "bandAggressiveLe": 118.83257687671232,
      "bandDcaHigh": 133.68664898630138,
      "bandFairHigh": 163.39479320547946,
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
      "epsUsedForCandidates": 4.951357369863014,
      "ttmEps": 1.8589906659100248,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 1.8589906659100248,
        "peTTM": 117.5369,
        "finnhubUpdated": "2026-10-27 21:03",
        "periods": "Q4'25~Q3'26",
        "endDates": [
          "2025-12-31",
          "2026-03-31",
          "2026-06-30",
          "2026-09-30"
        ],
        "secVerified": false,
        "quarterly": 1.63,
        "checks": [
          "분기 연속 OK",
          "최신성 OK(승인 근거 2026-06-30)",
          "역산 주식수 일관(±4.5%)",
          "공시 주식수 대조 +8.5%"
        ],
        "gapPct": 14.048507111044483,
        "gapPrevPct": 147.86542212133665,
        "gapCause": "definition_unexplained",
        "source": "finnhub_peTTM(차이 원인 미확인 - 검증 전 유지)"
      },
      "normalizationSensitivity": null,
      "diag": {
        "epsTtmNtmRatio": 0.3754507152371949,
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
          "fairPrice": 148.5407210958904,
          "per": 30.0,
          "eps": 4.951357369863014,
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
          "date": "2026-10-24",
          "prevFairPrice": 134.9530594520548,
          "newFairPrice": 141.15810657534246,
          "changePct": 4.597929938366575,
          "epsEffect": 6.205047123287661,
          "perEffect": 1.67164778701266e-14,
          "otherEffect": 0.0,
          "note": "EPS 4.4984->4.7053(적정PER 30.00배 유지 가정 시 +6.21) + 적정PER 30.00->30.00배(EPS 4.7053 유지 가정 시 +0.00)"
        },
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
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "AAPL": {
      "ticker": "AAPL",
      "asOf": "2026-10-28",
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
      "currentPrice": 347.1000061035156,
      "fairPrice": 215.145408736,
      "ratio": 1.6133275078597382,
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
        "finnhub": 8.94099116213604,
        "peTTM": 38.8212,
        "finnhubUpdated": "2026-10-27 21:00",
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
        "gapPct": 2.5343023180738777,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
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
          "date": "2026-10-20",
          "prevFairPrice": 215.49215598300003,
          "newFairPrice": 215.33116618975,
          "changePct": -0.07470795979354578,
          "epsEffect": null,
          "perEffect": null,
          "otherEffect": -0.1609897932500246,
          "note": "기타(종목유형 변경: None -> 기타)"
        },
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
        }
      ],
      "nextUpdateDate": "2026-11-03"
    },
    "MSFT": {
      "ticker": "MSFT",
      "asOf": "2026-10-28",
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
      "currentPrice": 531.3300170898438,
      "fairPrice": 540.611989939726,
      "ratio": 0.9828306197002455,
      "bandAggressiveLe": 432.48959195178077,
      "bandDcaHigh": 486.55079094575336,
      "bandFairHigh": 594.6731889336986,
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
      "epsUsedForCandidates": 21.05186876712329,
      "ttmEps": 17.96,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 18.297433307155803,
        "peTTM": 29.0385,
        "finnhubUpdated": "2026-10-27 21:00",
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
        "gapPct": 1.8788046055445484,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "diag": {
        "epsTtmNtmRatio": 0.8531309119714892,
        "candSpread": 1.332957070685288,
        "fairAltExCappedGrowth": null,
        "fairAltGapPct": null,
        "fairAltApplicable": false,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 25.679999999999996,
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
          "fairPrice": 474.0050350133302,
          "per": 22.516055,
          "eps": 21.05186876712329,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 540.611989939726,
          "per": 25.679999999999996,
          "eps": 21.05186876712329,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": false,
      "dispersionFlag": "최대/최소 1.56배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-10-24",
          "prevFairPrice": 539.1428121912329,
          "newFairPrice": 540.7512681257477,
          "changePct": 0.29833578379309267,
          "epsEffect": 1.1356177438356483,
          "perEffect": 0.4728381906791494,
          "otherEffect": 0.0,
          "note": "EPS 20.9702->21.0143(적정PER 25.71배 유지 가정 시 +1.14) + 적정PER 25.71->25.73배(EPS 21.0143 유지 가정 시 +0.47)"
        },
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
        }
      ],
      "nextUpdateDate": "2026-10-29"
    },
    "GOOGL": {
      "ticker": "GOOGL",
      "asOf": "2026-10-28",
      "verdict": "매수",
      "action": "적극 모아가기",
      "actionRaw": "적극 모아가기",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": 453.4809,
      "fairPriceB": 417.1462816597482,
      "fairBasisMode": "ex_capped_growth_floor_b",
      "candidateBadge": null,
      "lowConfidenceCapEligible": false,
      "sectorPerMethod": "median",
      "sectorFewPeers": true,
      "currentPrice": 320.5799865722656,
      "fairPrice": 417.1462816597482,
      "ratio": 0.7685073574112585,
      "bandAggressiveLe": 333.7170253277986,
      "bandDcaHigh": 375.43165349377335,
      "bandFairHigh": 458.860909825723,
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
      "epsUsedForCandidates": 15.11603,
      "ttmEps": 19.91,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 20.124040286516532,
        "peTTM": 15.9302,
        "finnhubUpdated": "2026-10-27 21:00",
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
        "gapPct": 1.0750391085712296,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "diag": {
        "epsTtmNtmRatio": 1.3171447794162885,
        "candSpread": 1.3516401610616267,
        "fairAltExCappedGrowth": 417.1462816597482,
        "fairAltGapPct": 0.0,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 27.596285642443696,
      "fairPriceBasis": "B안: 성장 PER 상한 후보 제외, 나머지 두 후보의 평균 (A안 상한 포함 $453.48, 낮은 쪽 적용)",
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
          "fairPrice": 354.7705032146,
          "per": 23.46982,
          "eps": 15.11603,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 453.4809,
          "per": 30.0,
          "eps": 15.11603,
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
        }
      ],
      "nextUpdateDate": "2026-10-29"
    },
    "META": {
      "ticker": "META",
      "asOf": "2026-10-28",
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
      "currentPrice": 620.1900024414062,
      "fairPrice": 777.5061193986734,
      "ratio": 0.7976657507481277,
      "bandAggressiveLe": 622.0048955189387,
      "bandDcaHigh": 699.755507458806,
      "bandFairHigh": 855.2567313385408,
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
      "epsUsedForCandidates": 33.12791147945205,
      "ttmEps": 29.33,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 28.51408957308204,
        "peTTM": 21.7503,
        "finnhubUpdated": "2026-10-27 21:00",
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
        "gapPct": -2.7818289359630377,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "diag": {
        "epsTtmNtmRatio": 0.8853561450196535,
        "candSpread": 1.387221301888216,
        "fairAltExCappedGrowth": 746.964594885107,
        "fairAltGapPct": -3.9281394385921153,
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
          "fairPrice": 777.5061193986734,
          "per": 23.46982,
          "eps": 33.12791147945205,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 993.8373443835616,
          "per": 30.0,
          "eps": 33.12791147945205,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": true,
      "dispersionFlag": null,
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-10-24",
          "prevFairPrice": 778.3118080978614,
          "newFairPrice": 775.6758663170301,
          "changePct": -0.33867426311742393,
          "epsEffect": -2.635941780831233,
          "perEffect": 0.0,
          "otherEffect": 0.0,
          "note": "EPS 33.1622->33.0499(적정PER 23.47배 유지 가정 시 -2.64) + 적정PER 23.47->23.47배(EPS 33.0499 유지 가정 시 +0.00)"
        },
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
        }
      ],
      "nextUpdateDate": "2027-01-01"
    },
    "AMZN": {
      "ticker": "AMZN",
      "asOf": "2026-10-28",
      "verdict": "매수",
      "action": "분할매수",
      "actionRaw": "적극 모아가기",
      "actionCapReason": "low_confidence_cap",
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": 442.3321917524266,
      "fairBasisMode": "a_kept_b_higher",
      "candidateBadge": null,
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": "median",
      "sectorFewPeers": true,
      "currentPrice": 253.10000610351562,
      "fairPrice": 316.38750000000005,
      "ratio": 0.7999684124799987,
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
        "finnhub": 12.82896101656034,
        "peTTM": 19.7288,
        "finnhubUpdated": "2026-10-27 21:00",
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
        "gapPct": 3.209662241032496,
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
      "asOf": "2026-10-28",
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
      "currentPrice": 130.52999877929688,
      "fairPrice": 220.16195947106579,
      "ratio": 0.5928817089604957,
      "bandAggressiveLe": 176.12956757685265,
      "bandDcaHigh": 198.1457635239592,
      "bandFairHigh": 242.1781554181724,
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
            "per": 37.99804927962543
          },
          {
            "ticker": "ADBE",
            "per": 8.79127
          }
        ],
        "excluded": [],
        "note": "유효 비교군 4개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 9.312325616438354,
      "ttmEps": 6.380000000000001,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 6.551000681513705,
        "peTTM": 19.9252,
        "finnhubUpdated": "2026-10-27 21:00",
        "periods": "Q4'25~Q3'26",
        "endDates": [
          "2025-11-30",
          "2026-02-28",
          "2026-05-31",
          "2026-08-31"
        ],
        "secVerified": false,
        "quarterly": 6.380000000000001,
        "checks": [
          "분기 연속 OK",
          "최신성 OK(승인 근거 2026-08-31)",
          "역산 주식수 일관(±3.0%)",
          "공시 주식수 대조 -0.8%"
        ],
        "gapPct": 2.6802614657320367,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "diag": {
        "epsTtmNtmRatio": 0.6851135004061566,
        "candSpread": 1.6019684988914378,
        "fairAltExCappedGrowth": 197.27675439854107,
        "fairAltGapPct": -10.394713567914238,
        "fairAltApplicable": true,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 23.641995409012576,
      "fairPriceBasis": "세 적정가 후보 중앙값",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 220.16195947106579,
          "per": 34.508144117721905,
          "eps": 6.380000000000001,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "sector_per",
          "fairPrice": 174.3915493260164,
          "per": 18.72696,
          "eps": 9.312325616438354,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 279.3697684931506,
          "per": 30.0,
          "eps": 9.312325616438354,
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
      "asOf": "2026-10-28",
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
      "currentPrice": 240.88999938964844,
      "fairPrice": 357.5020341003377,
      "ratio": 0.6738143462479977,
      "bandAggressiveLe": 286.00162728027016,
      "bandDcaHigh": 321.75183069030396,
      "bandFairHigh": 393.2522375103715,
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
            "per": 37.99804927962543
          },
          {
            "ticker": "ADBE",
            "per": 8.79127
          }
        ],
        "excluded": [],
        "note": "유효 비교군 4개 중앙값 (제외 0개) · 비교군 소수(5개 미만)"
      },
      "epsUsedForCandidates": 16.20773123287671,
      "ttmEps": 10.969999999999999,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 11.41166602979987,
        "peTTM": 21.1091,
        "finnhubUpdated": "2026-10-27 21:00",
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
        "gapPct": 4.026126069278679,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "diag": {
        "epsTtmNtmRatio": 0.6768374822102065,
        "candSpread": 1.7958897941706065,
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
          "fairPrice": 321.3751608284082,
          "per": 19.82851,
          "eps": 16.20773123287671,
          "epsBasis": "NTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 357.5020341003377,
          "per": 22.05750015,
          "eps": 16.20773123287671,
          "epsBasis": "NTM EPS"
        }
      ],
      "growthPerCapped": false,
      "dispersionFlag": "최대/최소 2.65배 > 기준 1.5배 - 계산은 그대로, 원인 점검 필요",
      "qualityWarnings": [],
      "recentChanges": [
        {
          "date": "2026-10-24",
          "prevFairPrice": 493.9707976039363,
          "newFairPrice": 357.6808170886768,
          "changePct": -27.590695882499567,
          "epsEffect": -0.4240373592232774,
          "perEffect": -135.8659431560362,
          "otherEffect": 0.0,
          "note": "EPS 16.2298->16.2158(적정PER 30.44배 유지 가정 시 -0.42) + 적정PER 30.44->22.06배(EPS 16.2158 유지 가정 시 -135.87)"
        },
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
        }
      ],
      "nextUpdateDate": "2026-12-02"
    },
    "PLTR": {
      "ticker": "PLTR",
      "asOf": "2026-10-28",
      "verdict": "고평가",
      "action": "신규 추격 금지 · 모델 점검 필요(적정가/현재가 비율 3.00배)",
      "actionRaw": "신규 추격 금지 · 모델 점검 필요(적정가/현재가 비율 3.00배)",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "a_kept_one_candidate",
      "candidateBadge": "후보 1개",
      "lowConfidenceCapEligible": true,
      "sectorPerMethod": null,
      "sectorFewPeers": null,
      "currentPrice": 198.72999572753906,
      "fairPrice": 66.30175150684933,
      "ratio": 2.997356649122749,
      "bandAggressiveLe": 53.04140120547947,
      "bandDcaHigh": 59.671576356164394,
      "bandFairHigh": 72.93192665753426,
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
            "per": 37.99804927962543
          }
        ],
        "excluded": [
          {
            "ticker": "SNOW",
            "reason": "NTM PER 152.2배 >80배 제외"
          },
          {
            "ticker": "DDOG",
            "reason": "NTM PER 86.3배 >80배 제외"
          }
        ],
        "note": "유효 비교군 2개 이하(최소 3개 기준 미달)"
      },
      "epsUsedForCandidates": 2.2100583835616443,
      "ttmEps": 1.17,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 1.2546608364208296,
        "peTTM": 158.3934,
        "finnhubUpdated": "2026-10-27 21:00",
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
        "gapPct": 7.235968924857228,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "diag": {
        "epsTtmNtmRatio": 0.5293977791276596,
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
          "fairPrice": 66.30175150684933,
          "per": 30.0,
          "eps": 2.2100583835616443,
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
          "date": "2026-10-24",
          "prevFairPrice": 66.18452547945206,
          "newFairPrice": 66.42510739726028,
          "changePct": 0.3635017642951994,
          "epsEffect": null,
          "perEffect": null,
          "otherEffect": 0.24058191780821403,
          "note": "기타(종목유형 변경: None -> 고성장형)"
        },
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
        }
      ],
      "nextUpdateDate": "2026-11-03"
    },
    "TSLA": {
      "ticker": "TSLA",
      "asOf": "2026-10-28",
      "verdict": "고평가",
      "action": "신규 추격 금지 · 모델 점검 필요(적정가/현재가 비율 9.41배)",
      "actionRaw": "신규 추격 금지 · 모델 점검 필요(적정가/현재가 비율 9.41배)",
      "actionCapReason": null,
      "cashflowVeto": false,
      "fairPriceUpper": null,
      "fairPriceB": null,
      "fairBasisMode": "median",
      "candidateBadge": null,
      "lowConfidenceCapEligible": false,
      "sectorPerMethod": null,
      "sectorFewPeers": null,
      "currentPrice": 407.4599914550781,
      "fairPrice": 43.29343202875965,
      "ratio": 9.41158906469702,
      "bandAggressiveLe": 34.634745623007724,
      "bandDcaHigh": 38.96408882588369,
      "bandFairHigh": 47.62277523163562,
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
      "epsUsedForCandidates": 2.0825674246575345,
      "ttmEps": 0.9099999999999999,
      "ttmEpsSelection": {
        "rule": "verified_quarterly_sum",
        "finnhub": 0.8917517046278209,
        "peTTM": 456.9209,
        "finnhubUpdated": "2026-10-27 21:00",
        "periods": "Q4'25~Q3'26",
        "endDates": [
          "2025-12-31",
          "2026-03-31",
          "2026-06-30",
          "2026-09-30"
        ],
        "secVerified": true,
        "quarterly": 0.9099999999999999,
        "checks": [
          "분기 연속 OK",
          "최신성 OK(승인 근거 2026-09-30)",
          "역산 주식수 일관(±5.2%)",
          "공시 주식수 대조 -9.5%"
        ],
        "gapPct": -2.0053071837559333,
        "gapCause": null,
        "source": "quarterly_sum(검증 통과)"
      },
      "normalizationSensitivity": null,
      "diag": {
        "epsTtmNtmRatio": 0.4369606425346079,
        "candSpread": 1.0726848225256385,
        "fairAltExCappedGrowth": null,
        "fairAltGapPct": null,
        "fairAltApplicable": false,
        "note": "2026-10-22 지시[2] 병행 기록/진단용 - 판정·적정가·신뢰도 계산에는 전혀 반영 안 됨. 성장률PER이 30배 상한에 안 걸렸으면 fairAlt*는 비움."
      },
      "epsBasisNote": null,
      "convertedFairPer": 20.78848997452219,
      "fairPriceBasis": "적정가 후보 2개 평균",
      "fairPriceCandidates": [
        {
          "candidate": "historical_per",
          "fairPrice": 41.775219809835924,
          "per": 45.90683495586366,
          "eps": 0.9099999999999999,
          "epsBasis": "TTM EPS"
        },
        {
          "candidate": "growth_per_peg",
          "fairPrice": 44.81164424768338,
          "per": 21.51749985,
          "eps": 2.0825674246575345,
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
          "date": "2026-10-24",
          "prevFairPrice": 45.44212549099997,
          "newFairPrice": 42.55503512111548,
          "changePct": -6.353334793849578,
          "epsEffect": 0.5665314063981586,
          "perEffect": -3.45362177628265,
          "otherEffect": 0.0,
          "note": "EPS 2.0847->2.1107(적정PER 21.80배 유지 가정 시 +0.57) + 적정PER 21.80->20.16배(EPS 2.1107 유지 가정 시 -3.45)"
        },
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
        }
      ],
      "nextUpdateDate": "2027-01-01"
    }
  }
};
if (typeof window !== 'undefined') { window.PRICE_MAP_DATA = PRICE_MAP_DATA; }
