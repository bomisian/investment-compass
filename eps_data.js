// 자동 생성 파일 - buy_signal_telegram.py가 하루 일부씩 순환 갱신함. 직접 수정하지 마세요.
const EPS_DATA = {
  "MSFT": {
    "symbol": "MSFT",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2028-06-30",
    "analystCount": 33.0,
    "epsNow": 23.573,
    "eps7d": 23.5733,
    "eps30d": 23.5527,
    "eps60d": 22.5874,
    "eps90d": 22.6278,
    "change30dPct": 0.09,
    "change90dPct": 4.18,
    "revisionUp30": 19,
    "revisionDown30": 3,
    "revisionUp7": 3,
    "revisionDown7": 0,
    "direction": "상향",
    "note": "전망치가 오르는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2027-06-30",
        "epsAvg": 19.7531,
        "epsHigh": 20.7,
        "epsLow": 19.21,
        "analystCount": 33.0,
        "revenueAvg": 391082295220.0
      },
      {
        "label": "다음 회계연도",
        "date": "2028-06-30",
        "epsAvg": 23.573,
        "epsHigh": 26.0,
        "epsLow": 20.93,
        "analystCount": 33.0,
        "revenueAvg": 467321614710.0
      }
    ],
    "updatedAt": "2026-09-21T08:00:01"
  },
  "GOOGL": {
    "symbol": "GOOGL",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 53.0,
    "epsNow": 14.8646,
    "eps7d": 14.8798,
    "eps30d": 14.7765,
    "eps60d": 14.6867,
    "eps90d": 14.4584,
    "change30dPct": 0.6,
    "change90dPct": 2.81,
    "revisionUp30": 8,
    "revisionDown30": 1,
    "revisionUp7": 1,
    "revisionDown7": 0,
    "direction": "상향",
    "note": "전망치가 오르는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2026-12-31",
        "epsAvg": 20.6094,
        "epsHigh": 21.92,
        "epsLow": 19.7,
        "analystCount": 52.0,
        "revenueAvg": 498357622570.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 14.8646,
        "epsHigh": 17.2139,
        "epsLow": 13.673,
        "analystCount": 53.0,
        "revenueAvg": 612185254380.0
      }
    ],
    "updatedAt": "2026-09-21T08:00:15"
  },
  "AMZN": {
    "symbol": "AMZN",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 52.0,
    "epsNow": 10.4686,
    "eps7d": 10.4917,
    "eps30d": 10.5066,
    "eps60d": 10.0039,
    "eps90d": 9.9563,
    "change30dPct": -0.36,
    "change90dPct": 5.15,
    "revisionUp30": 8,
    "revisionDown30": 1,
    "revisionUp7": 2,
    "revisionDown7": 0,
    "direction": "상향",
    "note": "전망치가 오르는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2026-12-31",
        "epsAvg": 12.8819,
        "epsHigh": 13.51,
        "epsLow": 12.15,
        "analystCount": 48.0,
        "revenueAvg": 828224640950.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 10.4686,
        "epsHigh": 15.0435,
        "epsLow": 8.695,
        "analystCount": 52.0,
        "revenueAvg": 946790229140.0
      }
    ],
    "updatedAt": "2026-09-21T08:00:28"
  },
  "META": {
    "symbol": "META",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 52.0,
    "epsNow": 33.9428,
    "eps7d": 33.9462,
    "eps30d": 33.9856,
    "eps60d": 35.005,
    "eps90d": 34.9034,
    "change30dPct": -0.13,
    "change90dPct": -2.75,
    "revisionUp30": 7,
    "revisionDown30": 39,
    "revisionUp7": 1,
    "revisionDown7": 0,
    "direction": "하향",
    "note": "전망치가 내려가는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2026-12-31",
        "epsAvg": 31.4292,
        "epsHigh": 33.65,
        "epsLow": 27.78,
        "analystCount": 54.0,
        "revenueAvg": 254193744080.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 33.9428,
        "epsHigh": 40.3149,
        "epsLow": 27.93,
        "analystCount": 52.0,
        "revenueAvg": 305929138890.0
      }
    ],
    "updatedAt": "2026-09-21T08:00:42"
  },
  "AAPL": {
    "symbol": "AAPL",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-09-30",
    "analystCount": 40.0,
    "epsNow": 9.5815,
    "eps7d": 9.5713,
    "eps30d": 9.5395,
    "eps60d": 9.7106,
    "eps90d": 9.6755,
    "change30dPct": 0.44,
    "change90dPct": -0.97,
    "revisionUp30": 2,
    "revisionDown30": 7,
    "revisionUp7": 1,
    "revisionDown7": 0,
    "direction": "보합",
    "note": "거의 변화 없음",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2026-09-30",
        "epsAvg": 8.8195,
        "epsHigh": 8.94,
        "epsLow": 8.28,
        "analystCount": 39.0,
        "revenueAvg": 477832817030.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-09-30",
        "epsAvg": 9.5815,
        "epsHigh": 10.67,
        "epsLow": 8.69,
        "analystCount": 40.0,
        "revenueAvg": 527971929389.0
      }
    ],
    "updatedAt": "2026-09-21T08:00:55"
  },
  "TSLA": {
    "symbol": "TSLA",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 32.0,
    "epsNow": 2.1586,
    "eps7d": 2.1586,
    "eps30d": 2.2042,
    "eps60d": 2.5615,
    "eps90d": 2.5206,
    "change30dPct": -2.07,
    "change90dPct": -14.36,
    "revisionUp30": 4,
    "revisionDown30": 19,
    "revisionUp7": 2,
    "revisionDown7": 0,
    "direction": "하향",
    "note": "전망치가 내려가는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2026-12-31",
        "epsAvg": 1.7688,
        "epsHigh": 2.39,
        "epsLow": 1.25,
        "analystCount": 34.0,
        "revenueAvg": 106100660190.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 2.1586,
        "epsHigh": 3.65,
        "epsLow": 0.8,
        "analystCount": 32.0,
        "revenueAvg": 120842236610.0
      }
    ],
    "updatedAt": "2026-09-21T08:01:08"
  },
  "ORCL": {
    "symbol": "ORCL",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2028-05-31",
    "analystCount": 39.0,
    "epsNow": 10.9939,
    "eps7d": 10.9676,
    "eps30d": 10.9149,
    "eps60d": 10.9216,
    "eps90d": 10.913,
    "change30dPct": 0.72,
    "change90dPct": 0.74,
    "revisionUp30": 4,
    "revisionDown30": 0,
    "revisionUp7": 1,
    "revisionDown7": 0,
    "direction": "보합",
    "note": "거의 변화 없음",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2027-05-31",
        "epsAvg": 8.1412,
        "epsHigh": 8.37,
        "epsLow": 8.07,
        "analystCount": 36.0,
        "revenueAvg": 90462304310.0
      },
      {
        "label": "다음 회계연도",
        "date": "2028-05-31",
        "epsAvg": 10.9939,
        "epsHigh": 13.3,
        "epsLow": 9.0,
        "analystCount": 39.0,
        "revenueAvg": 131389867980.0
      }
    ],
    "updatedAt": "2026-09-21T08:01:22"
  },
  "CRM": {
    "symbol": "CRM",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2028-01-31",
    "analystCount": 54.0,
    "epsNow": 15.9863,
    "eps7d": 16.0082,
    "eps30d": 15.5193,
    "eps60d": 15.5252,
    "eps90d": 15.4954,
    "change30dPct": 3.01,
    "change90dPct": 3.17,
    "revisionUp30": 37,
    "revisionDown30": 8,
    "revisionUp7": 7,
    "revisionDown7": 0,
    "direction": "상향",
    "note": "전망치가 오르는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2027-01-31",
        "epsAvg": 16.6571,
        "epsHigh": 17.6,
        "epsLow": 14.15,
        "analystCount": 52.0,
        "revenueAvg": 46293392880.0
      },
      {
        "label": "다음 회계연도",
        "date": "2028-01-31",
        "epsAvg": 15.9863,
        "epsHigh": 18.12,
        "epsLow": 14.6632,
        "analystCount": 54.0,
        "revenueAvg": 50784325250.0
      }
    ],
    "updatedAt": "2026-09-21T08:01:35"
  },
  "PLTR": {
    "symbol": "PLTR",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 29.0,
    "epsNow": 2.323,
    "eps7d": 2.326,
    "eps30d": 2.3142,
    "eps60d": 2.0945,
    "eps90d": 2.0821,
    "change30dPct": 0.38,
    "change90dPct": 11.57,
    "revisionUp30": 26,
    "revisionDown30": 0,
    "revisionUp7": 4,
    "revisionDown7": 0,
    "direction": "상향",
    "note": "전망치가 오르는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2026-12-31",
        "epsAvg": 1.6074,
        "epsHigh": 1.75,
        "epsLow": 1.29,
        "analystCount": 29.0,
        "revenueAvg": 8187709600.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 2.323,
        "epsHigh": 2.9,
        "epsLow": 1.59,
        "analystCount": 29.0,
        "revenueAvg": 12211305260.0
      }
    ],
    "updatedAt": "2026-09-21T08:01:48"
  },
  "NVDA": {
    "symbol": "NVDA",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2028-01-31",
    "analystCount": 53.0,
    "epsNow": 15.6826,
    "eps7d": 15.5675,
    "eps30d": 12.8206,
    "eps60d": 12.7894,
    "eps90d": 12.6737,
    "change30dPct": 22.32,
    "change90dPct": 23.74,
    "revisionUp30": 42,
    "revisionDown30": 0,
    "revisionUp7": 4,
    "revisionDown7": 0,
    "direction": "상향",
    "note": "전망치가 오르는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2027-01-31",
        "epsAvg": 9.3071,
        "epsHigh": 10.1,
        "epsLow": 9.01,
        "analystCount": 51.0,
        "revenueAvg": 411488417150.0
      },
      {
        "label": "다음 회계연도",
        "date": "2028-01-31",
        "epsAvg": 15.6826,
        "epsHigh": 18.746,
        "epsLow": 9.8,
        "analystCount": 53.0,
        "revenueAvg": 682865337910.0
      }
    ],
    "updatedAt": "2026-09-21T08:02:02"
  },
  "AMD": {
    "symbol": "AMD",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 50.0,
    "epsNow": 15.5707,
    "eps7d": 15.3899,
    "eps30d": 15.3249,
    "eps60d": 13.4647,
    "eps90d": 13.1037,
    "change30dPct": 1.6,
    "change90dPct": 18.83,
    "revisionUp30": 33,
    "revisionDown30": 3,
    "revisionUp7": 1,
    "revisionDown7": 0,
    "direction": "상향",
    "note": "전망치가 오르는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2026-12-31",
        "epsAvg": 7.5758,
        "epsHigh": 8.2,
        "epsLow": 7.0,
        "analystCount": 49.0,
        "revenueAvg": 50875836660.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 15.5707,
        "epsHigh": 20.25,
        "epsLow": 9.6,
        "analystCount": 50.0,
        "revenueAvg": 88076709870.0
      }
    ],
    "updatedAt": "2026-09-21T08:02:16"
  },
  "AVGO": {
    "symbol": "AVGO",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-10-31",
    "analystCount": 47.0,
    "epsNow": 19.3839,
    "eps7d": 19.5728,
    "eps30d": 19.598,
    "eps60d": 19.4616,
    "eps90d": 19.4168,
    "change30dPct": -1.09,
    "change90dPct": -0.17,
    "revisionUp30": 11,
    "revisionDown30": 25,
    "revisionUp7": 11,
    "revisionDown7": 0,
    "direction": "보합",
    "note": "거의 변화 없음",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2026-10-31",
        "epsAvg": 11.6577,
        "epsHigh": 12.38,
        "epsLow": 11.35,
        "analystCount": 46.0,
        "revenueAvg": 105963966570.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-10-31",
        "epsAvg": 19.3839,
        "epsHigh": 22.44,
        "epsLow": 17.4665,
        "analystCount": 47.0,
        "revenueAvg": 173450346160.0
      }
    ],
    "updatedAt": "2026-09-21T08:02:29"
  },
  "QCOM": {
    "symbol": "QCOM",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-09-30",
    "analystCount": 34.0,
    "epsNow": 10.2243,
    "eps7d": 10.2181,
    "eps30d": 10.2208,
    "eps60d": 11.008,
    "eps90d": 10.6672,
    "change30dPct": 0.03,
    "change90dPct": -4.15,
    "revisionUp30": 3,
    "revisionDown30": 27,
    "revisionUp7": 0,
    "revisionDown7": 0,
    "direction": "하향",
    "note": "전망치가 내려가는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2026-09-30",
        "epsAvg": 10.4827,
        "epsHigh": 10.61,
        "epsLow": 9.25,
        "analystCount": 30.0,
        "revenueAvg": 42889578140.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-09-30",
        "epsAvg": 10.2243,
        "epsHigh": 12.24,
        "epsLow": 8.83,
        "analystCount": 34.0,
        "revenueAvg": 44889451930.0
      }
    ],
    "updatedAt": "2026-09-21T08:02:43"
  },
  "ARM": {
    "symbol": "ARM",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2028-03-31",
    "analystCount": 40.0,
    "epsNow": 3.0548,
    "eps7d": 3.0693,
    "eps30d": 3.0582,
    "eps60d": 3.0796,
    "eps90d": 3.0779,
    "change30dPct": -0.11,
    "change90dPct": -0.75,
    "revisionUp30": 15,
    "revisionDown30": 13,
    "revisionUp7": 2,
    "revisionDown7": 0,
    "direction": "보합",
    "note": "거의 변화 없음",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2027-03-31",
        "epsAvg": 2.223,
        "epsHigh": 2.38,
        "epsLow": 2.04,
        "analystCount": 39.0,
        "revenueAvg": 6046366240.0
      },
      {
        "label": "다음 회계연도",
        "date": "2028-03-31",
        "epsAvg": 3.0548,
        "epsHigh": 3.69,
        "epsLow": 2.65,
        "analystCount": 40.0,
        "revenueAvg": 8236355750.0
      }
    ],
    "updatedAt": "2026-09-21T08:02:56"
  },
  "MRVL": {
    "symbol": "MRVL",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2028-01-31",
    "analystCount": 41.0,
    "epsNow": 6.7609,
    "eps7d": 6.7209,
    "eps30d": 6.2425,
    "eps60d": 6.1994,
    "eps90d": 6.1726,
    "change30dPct": 8.3,
    "change90dPct": 9.53,
    "revisionUp30": 33,
    "revisionDown30": 1,
    "revisionUp7": 31,
    "revisionDown7": 0,
    "direction": "상향",
    "note": "전망치가 오르는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2027-01-31",
        "epsAvg": 4.2129,
        "epsHigh": 4.6141,
        "epsLow": 3.92,
        "analystCount": 39.0,
        "revenueAvg": 12051537840.0
      },
      {
        "label": "다음 회계연도",
        "date": "2028-01-31",
        "epsAvg": 6.7609,
        "epsHigh": 8.09,
        "epsLow": 6.22,
        "analystCount": 41.0,
        "revenueAvg": 18206528270.0
      }
    ],
    "updatedAt": "2026-09-21T08:03:10"
  },
  "INTC": {
    "symbol": "INTC",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 46.0,
    "epsNow": 2.0621,
    "eps7d": 2.0426,
    "eps30d": 2.0401,
    "eps60d": 1.5847,
    "eps90d": 1.5236,
    "change30dPct": 1.08,
    "change90dPct": 35.34,
    "revisionUp30": 4,
    "revisionDown30": 1,
    "revisionUp7": 1,
    "revisionDown7": 0,
    "direction": "상향",
    "note": "전망치가 오르는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2026-12-31",
        "epsAvg": 1.5203,
        "epsHigh": 1.74,
        "epsLow": 1.12,
        "analystCount": 40.0,
        "revenueAvg": 63076963200.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 2.0621,
        "epsHigh": 3.44,
        "epsLow": 1.15,
        "analystCount": 46.0,
        "revenueAvg": 72007332970.0
      }
    ],
    "updatedAt": "2026-09-21T08:03:23"
  },
  "TSM": {
    "symbol": "TSM",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 13.0,
    "epsNow": 21.9251,
    "eps7d": 21.9251,
    "eps30d": 21.7813,
    "eps60d": 21.1812,
    "eps90d": 19.663,
    "change30dPct": 0.66,
    "change90dPct": 11.5,
    "revisionUp30": 9,
    "revisionDown30": 0,
    "revisionUp7": 1,
    "revisionDown7": 0,
    "direction": "상향",
    "note": "전망치가 오르는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2026-12-31",
        "epsAvg": 16.9339,
        "epsHigh": 17.8,
        "epsLow": 15.23,
        "analystCount": 13.0,
        "revenueAvg": 5441838032170.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 21.9251,
        "epsHigh": 24.6244,
        "epsLow": 19.58,
        "analystCount": 13.0,
        "revenueAvg": 7321887352450.0
      }
    ],
    "updatedAt": "2026-09-21T08:03:36"
  },
  "ASML": {
    "symbol": "ASML",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 33.0,
    "epsNow": 51.7225,
    "eps7d": 51.7102,
    "eps30d": 51.4246,
    "eps60d": 50.3839,
    "eps90d": 41.5808,
    "change30dPct": 0.58,
    "change90dPct": 24.39,
    "revisionUp30": 3,
    "revisionDown30": 0,
    "revisionUp7": 2,
    "revisionDown7": 0,
    "direction": "상향",
    "note": "전망치가 오르는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2026-12-31",
        "epsAvg": 38.325,
        "epsHigh": 40.4191,
        "epsLow": 31.81,
        "analystCount": 31.0,
        "revenueAvg": 42820125220.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 51.7225,
        "epsHigh": 59.1013,
        "epsLow": 37.43,
        "analystCount": 33.0,
        "revenueAvg": 54466709870.0
      }
    ],
    "updatedAt": "2026-09-21T08:03:50"
  },
  "AMAT": {
    "symbol": "AMAT",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-10-31",
    "analystCount": 34.0,
    "epsNow": 18.4548,
    "eps7d": 18.4548,
    "eps30d": 18.2662,
    "eps60d": 16.7456,
    "eps90d": 16.2965,
    "change30dPct": 1.03,
    "change90dPct": 13.24,
    "revisionUp30": 28,
    "revisionDown30": 1,
    "revisionUp7": 1,
    "revisionDown7": 0,
    "direction": "상향",
    "note": "전망치가 오르는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2026-10-31",
        "epsAvg": 12.7944,
        "epsHigh": 12.98,
        "epsLow": 12.53,
        "analystCount": 30.0,
        "revenueAvg": 34253779609.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-10-31",
        "epsAvg": 18.4548,
        "epsHigh": 21.77,
        "epsLow": 16.02,
        "analystCount": 34.0,
        "revenueAvg": 46131694280.0
      }
    ],
    "updatedAt": "2026-09-21T08:04:03"
  },
  "LRCX": {
    "symbol": "LRCX",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2028-06-30",
    "analystCount": 26.0,
    "epsNow": 11.6518,
    "eps7d": 11.6518,
    "eps30d": 11.5571,
    "eps60d": 9.9629,
    "eps90d": 9.7958,
    "change30dPct": 0.82,
    "change90dPct": 18.95,
    "revisionUp30": 2,
    "revisionDown30": 0,
    "revisionUp7": 1,
    "revisionDown7": 0,
    "direction": "상향",
    "note": "전망치가 오르는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2027-06-30",
        "epsAvg": 9.5081,
        "epsHigh": 10.82,
        "epsLow": 8.44,
        "analystCount": 29.0,
        "revenueAvg": 34928097950.0
      },
      {
        "label": "다음 회계연도",
        "date": "2028-06-30",
        "epsAvg": 11.6518,
        "epsHigh": 15.12,
        "epsLow": 8.96,
        "analystCount": 26.0,
        "revenueAvg": 40956154730.0
      }
    ],
    "updatedAt": "2026-09-21T08:04:17"
  },
  "KLAC": {
    "symbol": "KLAC",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2028-06-30",
    "analystCount": 22.0,
    "epsNow": 6.6895,
    "eps7d": 6.6748,
    "eps30d": 6.5493,
    "eps60d": 6.1464,
    "eps90d": 5.9138,
    "change30dPct": 2.14,
    "change90dPct": 13.12,
    "revisionUp30": 13,
    "revisionDown30": 2,
    "revisionUp7": 1,
    "revisionDown7": 0,
    "direction": "상향",
    "note": "전망치가 오르는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2027-06-30",
        "epsAvg": 5.4527,
        "epsHigh": 5.86,
        "epsLow": 5.05,
        "analystCount": 24.0,
        "revenueAvg": 18108323650.0
      },
      {
        "label": "다음 회계연도",
        "date": "2028-06-30",
        "epsAvg": 6.6895,
        "epsHigh": 7.9486,
        "epsLow": 5.81,
        "analystCount": 22.0,
        "revenueAvg": 21375879920.0
      }
    ],
    "updatedAt": "2026-09-21T08:04:30"
  },
  "MU": {
    "symbol": "MU",
    "targetLabel": "현재 회계연도",
    "fiscalDate": "2027-08-31",
    "analystCount": 36.0,
    "epsNow": 156.0661,
    "eps7d": 155.8047,
    "eps30d": 155.6797,
    "eps60d": 149.7436,
    "eps90d": 112.1695,
    "change30dPct": 0.25,
    "change90dPct": 39.13,
    "revisionUp30": 2,
    "revisionDown30": 2,
    "revisionUp7": 1,
    "revisionDown7": 0,
    "direction": "상향",
    "note": "전망치가 오르는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2027-08-31",
        "epsAvg": 156.0661,
        "epsHigh": 221.27,
        "epsLow": 106.89,
        "analystCount": 36.0,
        "revenueAvg": 244458032970.0
      }
    ],
    "updatedAt": "2026-09-21T08:04:44"
  },
  "SNDK": {
    "symbol": "SNDK",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2028-06-30",
    "analystCount": 19.0,
    "epsNow": 264.7216,
    "eps7d": 265.1222,
    "eps30d": 248.4217,
    "eps60d": 198.2978,
    "eps90d": 182.8869,
    "change30dPct": 6.56,
    "change90dPct": 44.75,
    "revisionUp30": 7,
    "revisionDown30": 4,
    "revisionUp7": 3,
    "revisionDown7": 0,
    "direction": "상향",
    "note": "전망치가 오르는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2027-06-30",
        "epsAvg": 214.0982,
        "epsHigh": 238.36,
        "epsLow": 186.97,
        "analystCount": 20.0,
        "revenueAvg": 48960258320.0
      },
      {
        "label": "다음 회계연도",
        "date": "2028-06-30",
        "epsAvg": 264.7216,
        "epsHigh": 361.2,
        "epsLow": 173.37,
        "analystCount": 19.0,
        "revenueAvg": 57786626660.0
      }
    ],
    "updatedAt": "2026-09-21T08:04:57"
  },
  "WDC": {
    "symbol": "WDC",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2028-06-30",
    "analystCount": 20.0,
    "epsNow": 31.7495,
    "eps7d": 31.899,
    "eps30d": 27.1477,
    "eps60d": 25.0271,
    "eps90d": 24.581,
    "change30dPct": 16.95,
    "change90dPct": 29.16,
    "revisionUp30": 10,
    "revisionDown30": 0,
    "revisionUp7": 8,
    "revisionDown7": 0,
    "direction": "상향",
    "note": "전망치가 오르는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2027-06-30",
        "epsAvg": 20.0914,
        "epsHigh": 23.5,
        "epsLow": 15.76,
        "analystCount": 22.0,
        "revenueAvg": 19191863460.0
      },
      {
        "label": "다음 회계연도",
        "date": "2028-06-30",
        "epsAvg": 31.7495,
        "epsHigh": 45.36,
        "epsLow": 21.95,
        "analystCount": 20.0,
        "revenueAvg": 26249647330.0
      }
    ],
    "updatedAt": "2026-09-21T08:05:10"
  },
  "ANET": {
    "symbol": "ANET",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 28.0,
    "epsNow": 5.1603,
    "eps7d": 5.1603,
    "eps30d": 5.1596,
    "eps60d": 4.4543,
    "eps90d": 4.4497,
    "change30dPct": 0.01,
    "change90dPct": 15.97,
    "revisionUp30": 26,
    "revisionDown30": 0,
    "revisionUp7": 26,
    "revisionDown7": 0,
    "direction": "상향",
    "note": "전망치가 오르는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2026-12-31",
        "epsAvg": 4.1126,
        "epsHigh": 4.22,
        "epsLow": 4.05,
        "analystCount": 27.0,
        "revenueAvg": 12665968690.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 5.1603,
        "epsHigh": 5.73,
        "epsLow": 4.4,
        "analystCount": 28.0,
        "revenueAvg": 16156118220.0
      }
    ],
    "updatedAt": "2026-09-21T08:05:24"
  },
  "COHR": {
    "symbol": "COHR",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2028-06-30",
    "analystCount": 19.0,
    "epsNow": 13.9553,
    "eps7d": 13.9553,
    "eps30d": 13.9455,
    "eps60d": 13.0144,
    "eps90d": 12.5157,
    "change30dPct": 0.07,
    "change90dPct": 11.5,
    "revisionUp30": 10,
    "revisionDown30": 0,
    "revisionUp7": 10,
    "revisionDown7": 0,
    "direction": "상향",
    "note": "전망치가 오르는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2027-06-30",
        "epsAvg": 9.4163,
        "epsHigh": 10.26,
        "epsLow": 8.26,
        "analystCount": 22.0,
        "revenueAvg": 10618193080.0
      },
      {
        "label": "다음 회계연도",
        "date": "2028-06-30",
        "epsAvg": 13.9553,
        "epsHigh": 16.61,
        "epsLow": 11.38,
        "analystCount": 19.0,
        "revenueAvg": 14674707350.0
      }
    ],
    "updatedAt": "2026-09-23T00:50:16"
  },
  "LITE": {
    "symbol": "LITE",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2028-06-30",
    "analystCount": 1.0,
    "epsNow": 39.7038,
    "eps7d": 33.3012,
    "eps30d": 33.0132,
    "eps60d": 28.5592,
    "eps90d": 28.2791,
    "change30dPct": 20.27,
    "change90dPct": 40.4,
    "revisionUp30": 12,
    "revisionDown30": 0,
    "revisionUp7": 12,
    "revisionDown7": 0,
    "direction": "상향",
    "note": "전망치가 오르는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2027-06-30",
        "epsAvg": 21.6706,
        "epsHigh": 25.27,
        "epsLow": 19.05,
        "analystCount": 25.0,
        "revenueAvg": 6316718110.0
      },
      {
        "label": "다음 회계연도",
        "date": "2028-06-30",
        "epsAvg": 39.7038,
        "epsHigh": 39.7038,
        "epsLow": 39.7038,
        "analystCount": 1.0,
        "revenueAvg": 9613721280.0
      }
    ],
    "updatedAt": "2026-09-23T00:50:30"
  },
  "GEV": {
    "symbol": "GEV",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 26.0,
    "epsNow": 24.8414,
    "eps7d": 24.8011,
    "eps30d": 24.8662,
    "eps60d": 24.4883,
    "eps90d": 24.318,
    "change30dPct": -0.1,
    "change90dPct": 2.15,
    "revisionUp30": 3,
    "revisionDown30": 2,
    "revisionUp7": 0,
    "revisionDown7": 0,
    "direction": "상향",
    "note": "전망치가 오르는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2026-12-31",
        "epsAvg": 30.7955,
        "epsHigh": 33.23,
        "epsLow": 26.92,
        "analystCount": 20.0,
        "revenueAvg": 46281859660.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 24.8414,
        "epsHigh": 29.95,
        "epsLow": 17.16,
        "analystCount": 26.0,
        "revenueAvg": 52742899600.0
      }
    ],
    "updatedAt": "2026-09-23T00:50:43"
  },
  "CEG": {
    "symbol": "CEG",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 19.0,
    "epsNow": 13.3075,
    "eps7d": 13.3417,
    "eps30d": 13.3067,
    "eps60d": 13.583,
    "eps90d": 13.5435,
    "change30dPct": 0.01,
    "change90dPct": -1.74,
    "revisionUp30": 7,
    "revisionDown30": 9,
    "revisionUp7": 1,
    "revisionDown7": 0,
    "direction": "하향",
    "note": "전망치가 내려가는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2026-12-31",
        "epsAvg": 12.1342,
        "epsHigh": 12.49,
        "epsLow": 11.77,
        "analystCount": 17.0,
        "revenueAvg": 35129314280.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 13.3075,
        "epsHigh": 14.7914,
        "epsLow": 12.5,
        "analystCount": 19.0,
        "revenueAvg": 36397151150.0
      }
    ],
    "updatedAt": "2026-09-23T00:50:56"
  },
  "VST": {
    "symbol": "VST",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 10.0,
    "epsNow": 10.3811,
    "eps7d": 10.3461,
    "eps30d": 10.5151,
    "eps60d": 11.3019,
    "eps90d": 11.0981,
    "change30dPct": -1.27,
    "change90dPct": -6.46,
    "revisionUp30": 0,
    "revisionDown30": 6,
    "revisionUp7": 0,
    "revisionDown7": 0,
    "direction": "하향",
    "note": "전망치가 내려가는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2026-12-31",
        "epsAvg": 9.4729,
        "epsHigh": 10.65,
        "epsLow": 8.76,
        "analystCount": 9.0,
        "revenueAvg": 22464876530.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 10.3811,
        "epsHigh": 12.64,
        "epsLow": 9.0264,
        "analystCount": 10.0,
        "revenueAvg": 23912457850.0
      }
    ],
    "updatedAt": "2026-09-23T00:51:10"
  },
  "ETN": {
    "symbol": "ETN",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 23.0,
    "epsNow": 16.1336,
    "eps7d": 16.1327,
    "eps30d": 16.0219,
    "eps60d": 15.777,
    "eps90d": 15.7217,
    "change30dPct": 0.7,
    "change90dPct": 2.62,
    "revisionUp30": 18,
    "revisionDown30": 1,
    "revisionUp7": 1,
    "revisionDown7": 0,
    "direction": "상향",
    "note": "전망치가 오르는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2026-12-31",
        "epsAvg": 13.5539,
        "epsHigh": 14.12,
        "epsLow": 13.25,
        "analystCount": 25.0,
        "revenueAvg": 32647103310.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 16.1336,
        "epsHigh": 17.3028,
        "epsLow": 15.0,
        "analystCount": 23.0,
        "revenueAvg": 36574439570.0
      }
    ],
    "updatedAt": "2026-09-23T00:51:24"
  },
  "PWR": {
    "symbol": "PWR",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 26.0,
    "epsNow": 19.7151,
    "eps7d": 19.6413,
    "eps30d": 19.4757,
    "eps60d": 16.4719,
    "eps90d": 16.4603,
    "change30dPct": 1.23,
    "change90dPct": 19.77,
    "revisionUp30": 24,
    "revisionDown30": 0,
    "revisionUp7": 4,
    "revisionDown7": 0,
    "direction": "상향",
    "note": "전망치가 오르는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2026-12-31",
        "epsAvg": 16.7333,
        "epsHigh": 17.11,
        "epsLow": 16.05,
        "analystCount": 26.0,
        "revenueAvg": 39581485960.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 19.7151,
        "epsHigh": 22.02,
        "epsLow": 17.48,
        "analystCount": 26.0,
        "revenueAvg": 45585893680.0
      }
    ],
    "updatedAt": "2026-09-23T00:51:37"
  },
  "HUBB": {
    "symbol": "HUBB",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 12.0,
    "epsNow": 22.9132,
    "eps7d": 22.9132,
    "eps30d": 22.8712,
    "eps60d": 22.4753,
    "eps90d": 22.4515,
    "change30dPct": 0.18,
    "change90dPct": 2.06,
    "revisionUp30": 0,
    "revisionDown30": 1,
    "revisionUp7": 0,
    "revisionDown7": 0,
    "direction": "혼조",
    "note": "숫자 변화와 상·하향 횟수의 방향이 엇갈림",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2026-12-31",
        "epsAvg": 20.4629,
        "epsHigh": 20.74,
        "epsLow": 20.304,
        "analystCount": 12.0,
        "revenueAvg": 6869039550.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 22.9132,
        "epsHigh": 24.32,
        "epsLow": 22.0824,
        "analystCount": 12.0,
        "revenueAvg": 7561298720.0
      }
    ],
    "updatedAt": "2026-09-23T00:51:51"
  },
  "VRT": {
    "symbol": "VRT",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 28.0,
    "epsNow": 9.1224,
    "eps7d": 9.1224,
    "eps30d": 9.0988,
    "eps60d": 8.8249,
    "eps90d": 8.8037,
    "change30dPct": 0.26,
    "change90dPct": 3.62,
    "revisionUp30": 2,
    "revisionDown30": 1,
    "revisionUp7": 1,
    "revisionDown7": 0,
    "direction": "상향",
    "note": "전망치가 오르는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2026-12-31",
        "epsAvg": 6.7349,
        "epsHigh": 6.91,
        "epsLow": 6.6,
        "analystCount": 27.0,
        "revenueAvg": 14018651820.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 9.1224,
        "epsHigh": 10.94,
        "epsLow": 8.28,
        "analystCount": 28.0,
        "revenueAvg": 18183901690.0
      }
    ],
    "updatedAt": "2026-09-23T00:52:04"
  },
  "MOD": {
    "symbol": "MOD",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2028-03-31",
    "analystCount": 6.0,
    "epsNow": 11.0041,
    "eps7d": 11.0041,
    "eps30d": 11.1821,
    "eps60d": 11.3308,
    "eps90d": 11.3488,
    "change30dPct": -1.59,
    "change90dPct": -3.04,
    "revisionUp30": 1,
    "revisionDown30": 2,
    "revisionUp7": 0,
    "revisionDown7": 0,
    "direction": "하향",
    "note": "전망치가 내려가는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2027-03-31",
        "epsAvg": 7.6218,
        "epsHigh": 8.26,
        "epsLow": 6.99,
        "analystCount": 7.0,
        "revenueAvg": 4057798110.0
      },
      {
        "label": "다음 회계연도",
        "date": "2028-03-31",
        "epsAvg": 11.0041,
        "epsHigh": 12.2046,
        "epsLow": 9.18,
        "analystCount": 6.0,
        "revenueAvg": 5005464110.0
      }
    ],
    "updatedAt": "2026-09-23T00:52:18"
  },
  "STX": {
    "symbol": "STX",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2028-06-30",
    "analystCount": 19.0,
    "epsNow": 55.3714,
    "eps7d": 55.3714,
    "eps30d": 43.4437,
    "eps60d": 40.8773,
    "eps90d": 38.917,
    "change30dPct": 27.46,
    "change90dPct": 42.28,
    "revisionUp30": 15,
    "revisionDown30": 0,
    "revisionUp7": 15,
    "revisionDown7": 0,
    "direction": "상향",
    "note": "전망치가 오르는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2027-06-30",
        "epsAvg": 35.7809,
        "epsHigh": 41.89,
        "epsLow": 32.06,
        "analystCount": 21.0,
        "revenueAvg": 18784871990.0
      },
      {
        "label": "다음 회계연도",
        "date": "2028-06-30",
        "epsAvg": 55.3714,
        "epsHigh": 80.11,
        "epsLow": 35.24,
        "analystCount": 19.0,
        "revenueAvg": 25105334460.0
      }
    ],
    "updatedAt": "2026-09-23T00:52:31"
  },
  "EME": {
    "symbol": "EME",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 10.0,
    "epsNow": 36.749,
    "eps7d": 36.745,
    "eps30d": 32.926,
    "eps60d": 32.668,
    "eps90d": 32.668,
    "change30dPct": 11.61,
    "change90dPct": 12.49,
    "revisionUp30": 9,
    "revisionDown30": 0,
    "revisionUp7": 1,
    "revisionDown7": 0,
    "direction": "상향",
    "note": "전망치가 오르는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2026-12-31",
        "epsAvg": 32.8506,
        "epsHigh": 33.62,
        "epsLow": 32.29,
        "analystCount": 9.0,
        "revenueAvg": 20319659700.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 36.749,
        "epsHigh": 39.3999,
        "epsLow": 33.37,
        "analystCount": 10.0,
        "revenueAvg": 22325976480.0
      }
    ],
    "updatedAt": "2026-09-23T00:52:45"
  },
  "FIX": {
    "symbol": "FIX",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 10.0,
    "epsNow": 60.1785,
    "eps7d": 60.1785,
    "eps30d": 60.0428,
    "eps60d": 53.4434,
    "eps90d": 53.1956,
    "change30dPct": 0.23,
    "change90dPct": 13.13,
    "revisionUp30": 7,
    "revisionDown30": 0,
    "revisionUp7": 8,
    "revisionDown7": 0,
    "direction": "상향",
    "note": "전망치가 오르는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2026-12-31",
        "epsAvg": 49.0071,
        "epsHigh": 52.18,
        "epsLow": 48.16,
        "analystCount": 10.0,
        "revenueAvg": 12982378220.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 60.1785,
        "epsHigh": 65.18,
        "epsLow": 51.64,
        "analystCount": 10.0,
        "revenueAvg": 15446398890.0
      }
    ],
    "updatedAt": "2026-09-23T00:52:58"
  },
  "BE": {
    "symbol": "BE",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 28.0,
    "epsNow": 4.9287,
    "eps7d": 4.9201,
    "eps30d": 4.8852,
    "eps60d": 4.4473,
    "eps90d": 4.3505,
    "change30dPct": 0.89,
    "change90dPct": 13.29,
    "revisionUp30": 19,
    "revisionDown30": 4,
    "revisionUp7": 1,
    "revisionDown7": 0,
    "direction": "상향",
    "note": "전망치가 오르는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2026-12-31",
        "epsAvg": 2.7058,
        "epsHigh": 3.08,
        "epsLow": 2.42,
        "analystCount": 26.0,
        "revenueAvg": 4115851600.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 4.9287,
        "epsHigh": 7.01,
        "epsLow": 2.9548,
        "analystCount": 28.0,
        "revenueAvg": 6790976300.0
      }
    ],
    "updatedAt": "2026-09-23T00:53:11"
  }
};
const EPS_DATA_GENERATED_AT = "2026-09-23T00:53:11";
