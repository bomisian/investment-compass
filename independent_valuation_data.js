// 자동 생성 아님(2026-09-15 수동 작성 v1 스냅샷) - VST 독립 적정가 모델. EV/EBITDA 3개 시나리오 + DCF 교차검증.
// 라이브 파이프라인에 아직 연결 안 됨 - comps(CEG/NRG) 배수와 VST 가이던스가 바뀌면 수동으로 재계산해야 함.
const INDEPENDENT_VALUATION_DATA = {
  "VST": {
    "valuation": {
      "kind": "independent_value",
      "asOf": "2026-09-15",
      "horizon": "12-24 months (normalized forward earnings power)",
      "accountingBasis": "Ongoing Operations Adjusted EBITDA / Adjusted FCF before Growth (company-defined non-GAAP, excludes one-time items)",
      "valueLow": 122.63,
      "valueBase": 159.67,
      "valueHigh": 234.13,
      "currentPrice": 140.73,
      "method": "EV/EBITDA multiple (3 scenarios) cross-checked with a 5-year DCF (Gordon growth terminal value)",
      "assumptions": {
        "normalizedEBITDA_B": 6.804,
        "normalizedEBITDA_weighting": "60% x FY2026 company guidance midpoint ($7.20B) + 20% x TTM ($6.645B, implied from current EV/EBITDA) + 20% x FY2024-25 actual Ongoing Adj. EBITDA average ($5.778B)",
        "netDebt_B": 20.075,
        "sharesOutstanding_M": 335.64,
        "evEbitdaScenarios": {
          "peerParity_CEG_NRG_avg_14.5x": {
            "multiple": 14.5,
            "ev_B": 98.66,
            "equity_B": 78.58,
            "perShare": 234.13,
            "note": "Average of CEG (14.81x) and NRG (14.18x) - the two closest AI-data-center-demand power generator peers. GE Vernova (57x) and Talen Energy (39.6x) were excluded: GEV is a turbine/equipment maker, not a generator, and TLN's multiple looked distorted versus its own fundamentals - including either would badly skew the average. This scenario assumes VST eventually re-rates to peer multiples; it is the bull case, not the base case."
          },
          "ownCurrentMultiple_10.13x": {
            "multiple": 10.13,
            "ev_B": 68.92,
            "equity_B": 48.85,
            "perShare": 145.54,
            "note": "VST's own current trading multiple applied to the normalized (higher, forward-looking) EBITDA instead of TTM - i.e. 'no re-rating, EBITDA growth alone flows through'. Closest to the DCF base case."
          },
          "conservative_9.0x": {
            "multiple": 9.0,
            "ev_B": 61.24,
            "equity_B": 41.16,
            "perShare": 122.63,
            "note": "Extra margin of safety for ERCOT power-price volatility and merchant-generation risk that peers (more contracted/regulated mix) carry less of."
          }
        },
        "dcf": {
          "wacc": 0.085,
          "terminalGrowth": 0.025,
          "yearOneFCF_B": 4.032,
          "yearOneFCF_weighting": "60% x FY2026 guidance midpoint Adjusted FCF before Growth ($4.325B) + 40% x FY2025 actual ($3.592B)",
          "growthPath": "10% -> 8% -> 6% -> 4% -> 2.5% (fading from current AI-demand-driven growth to terminal growth over 5 years)",
          "yearly": [
            {
              "year": 1,
              "fcf": 4.032,
              "growth": 0.1,
              "pv": 3.716
            },
            {
              "year": 2,
              "fcf": 4.355,
              "growth": 0.08,
              "pv": 3.699
            },
            {
              "year": 3,
              "fcf": 4.616,
              "growth": 0.06,
              "pv": 3.614
            },
            {
              "year": 4,
              "fcf": 4.8,
              "growth": 0.04,
              "pv": 3.464
            },
            {
              "year": 5,
              "fcf": 4.92,
              "growth": 0.025,
              "pv": 3.272
            }
          ],
          "terminalValue_B": 84.06,
          "pvTerminal_B": 55.9,
          "enterpriseValue_B": 73.67,
          "equityValue_B": 53.59,
          "perShare": 159.67,
          "waccSensitivity": {
            "7.5%": 203.91,
            "8.5%": 159.66,
            "9.5%": 128.07,
            "10.5%": 104.38
          }
        }
      },
      "validationStatus": "draft_v1_snapshot",
      "unavailableReasons": null,
      "sources": [
        "https://www.prnewswire.com/news-releases/vistra-reports-second-quarter-2026-results-302845874.html",
        "https://www.prnewswire.com/news-releases/vistra-reports-fourth-quarter-and-full-year-2025-results-302697962.html",
        "https://stockanalysis.com/stocks/vst/statistics/",
        "https://stockanalysis.com/stocks/ceg/statistics/",
        "https://stockanalysis.com/stocks/nrg/statistics/",
        "https://stockanalysis.com/stocks/gev/statistics/",
        "https://stockanalysis.com/stocks/tln/statistics/"
      ],
      "version": 1
    }
  }
};
