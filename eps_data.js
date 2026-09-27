// 자동 생성 파일 - buy_signal_telegram.py가 하루 일부씩 순환 갱신함. 직접 수정하지 마세요.
const EPS_DATA = {
  "MSFT": {
    "symbol": "MSFT",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2028-06-30",
    "analystCount": 32.0,
    "epsNow": 23.6759,
    "eps7d": 23.573,
    "eps30d": 23.5733,
    "eps60d": 22.6103,
    "eps90d": 22.6278,
    "change30dPct": 0.44,
    "change90dPct": 4.63,
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
        "epsAvg": 19.7597,
        "epsHigh": 20.7,
        "epsLow": 19.21,
        "analystCount": 33.0,
        "revenueAvg": 391037103320.0
      },
      {
        "label": "다음 회계연도",
        "date": "2028-06-30",
        "epsAvg": 23.6759,
        "epsHigh": 26.0,
        "epsLow": 22.08,
        "analystCount": 32.0,
        "revenueAvg": 467272439950.0
      }
    ],
    "updatedAt": "2026-09-28T08:00:01"
  },
  "GOOGL": {
    "symbol": "GOOGL",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 53.0,
    "epsNow": 14.9221,
    "eps7d": 14.8704,
    "eps30d": 14.8373,
    "eps60d": 14.7685,
    "eps90d": 14.5095,
    "change30dPct": 0.57,
    "change90dPct": 2.84,
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
        "epsAvg": 20.6248,
        "epsHigh": 21.92,
        "epsLow": 19.7,
        "analystCount": 53.0,
        "revenueAvg": 498547708400.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 14.9221,
        "epsHigh": 17.2139,
        "epsLow": 13.673,
        "analystCount": 53.0,
        "revenueAvg": 614815549300.0
      }
    ],
    "updatedAt": "2026-09-28T08:00:15"
  },
  "AMZN": {
    "symbol": "AMZN",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 52.0,
    "epsNow": 10.4849,
    "eps7d": 10.4686,
    "eps30d": 10.4821,
    "eps60d": 9.9948,
    "eps90d": 9.9564,
    "change30dPct": 0.03,
    "change90dPct": 5.31,
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
        "epsAvg": 12.8779,
        "epsHigh": 13.51,
        "epsLow": 12.15,
        "analystCount": 49.0,
        "revenueAvg": 828283165220.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 10.4849,
        "epsHigh": 15.0435,
        "epsLow": 8.73,
        "analystCount": 52.0,
        "revenueAvg": 947791141040.0
      }
    ],
    "updatedAt": "2026-09-28T08:00:29"
  },
  "META": {
    "symbol": "META",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 52.0,
    "epsNow": 34.0198,
    "eps7d": 33.8711,
    "eps30d": 33.9233,
    "eps60d": 35.1443,
    "eps90d": 34.9236,
    "change30dPct": 0.28,
    "change90dPct": -2.59,
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
        "epsAvg": 31.2122,
        "epsHigh": 33.65,
        "epsLow": 27.78,
        "analystCount": 54.0,
        "revenueAvg": 254164593430.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 34.0198,
        "epsHigh": 40.3149,
        "epsLow": 28.7795,
        "analystCount": 52.0,
        "revenueAvg": 306356161300.0
      }
    ],
    "updatedAt": "2026-09-28T08:00:43"
  },
  "AAPL": {
    "symbol": "AAPL",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-09-30",
    "analystCount": 40.0,
    "epsNow": 9.5815,
    "eps7d": 9.5815,
    "eps30d": 9.5313,
    "eps60d": 9.7132,
    "eps90d": 9.6826,
    "change30dPct": 0.53,
    "change90dPct": -1.04,
    "revisionUp30": 2,
    "revisionDown30": 7,
    "revisionUp7": 1,
    "revisionDown7": 0,
    "direction": "하향",
    "note": "전망치가 내려가는 중",
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
    "updatedAt": "2026-09-28T08:00:56"
  },
  "TSLA": {
    "symbol": "TSLA",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 31.0,
    "epsNow": 2.2011,
    "eps7d": 2.1976,
    "eps30d": 2.1586,
    "eps60d": 2.2197,
    "eps90d": 2.5181,
    "change30dPct": 1.97,
    "change90dPct": -12.59,
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
        "epsAvg": 1.7724,
        "epsHigh": 2.39,
        "epsLow": 1.36,
        "analystCount": 33.0,
        "revenueAvg": 106267310840.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 2.2011,
        "epsHigh": 3.65,
        "epsLow": 1.4326,
        "analystCount": 31.0,
        "revenueAvg": 120999143380.0
      }
    ],
    "updatedAt": "2026-09-28T08:01:10"
  },
  "ORCL": {
    "symbol": "ORCL",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2028-05-31",
    "analystCount": 39.0,
    "epsNow": 10.9972,
    "eps7d": 10.9972,
    "eps30d": 10.9149,
    "eps60d": 10.8902,
    "eps90d": 10.9191,
    "change30dPct": 0.75,
    "change90dPct": 0.72,
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
        "epsAvg": 8.1414,
        "epsHigh": 8.37,
        "epsLow": 8.07,
        "analystCount": 37.0,
        "revenueAvg": 90475486470.0
      },
      {
        "label": "다음 회계연도",
        "date": "2028-05-31",
        "epsAvg": 10.9972,
        "epsHigh": 13.3,
        "epsLow": 9.0,
        "analystCount": 39.0,
        "revenueAvg": 131447872860.0
      }
    ],
    "updatedAt": "2026-09-28T08:01:24"
  },
  "CRM": {
    "symbol": "CRM",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2028-01-31",
    "analystCount": 53.0,
    "epsNow": 16.0067,
    "eps7d": 16.0211,
    "eps30d": 15.5182,
    "eps60d": 15.5123,
    "eps90d": 15.4954,
    "change30dPct": 3.15,
    "change90dPct": 3.3,
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
        "epsAvg": 16.7553,
        "epsHigh": 17.6,
        "epsLow": 16.67,
        "analystCount": 51.0,
        "revenueAvg": 46292586810.0
      },
      {
        "label": "다음 회계연도",
        "date": "2028-01-31",
        "epsAvg": 16.0067,
        "epsHigh": 18.12,
        "epsLow": 14.6632,
        "analystCount": 53.0,
        "revenueAvg": 50785571420.0
      }
    ],
    "updatedAt": "2026-09-28T08:01:37"
  },
  "PLTR": {
    "symbol": "PLTR",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 28.0,
    "epsNow": 2.3267,
    "eps7d": 2.323,
    "eps30d": 2.3142,
    "eps60d": 2.0945,
    "eps90d": 2.0821,
    "change30dPct": 0.54,
    "change90dPct": 11.75,
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
        "epsAvg": 1.6116,
        "epsHigh": 1.75,
        "epsLow": 1.29,
        "analystCount": 28.0,
        "revenueAvg": 8187709600.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 2.3267,
        "epsHigh": 2.9,
        "epsLow": 1.59,
        "analystCount": 28.0,
        "revenueAvg": 12258526130.0
      }
    ],
    "updatedAt": "2026-09-28T08:01:51"
  },
  "NVDA": {
    "symbol": "NVDA",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2028-01-31",
    "analystCount": 53.0,
    "epsNow": 15.6826,
    "eps7d": 15.5675,
    "eps30d": 12.8849,
    "eps60d": 12.7894,
    "eps90d": 12.6737,
    "change30dPct": 21.71,
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
        "revenueAvg": 411558447010.0
      },
      {
        "label": "다음 회계연도",
        "date": "2028-01-31",
        "epsAvg": 15.6826,
        "epsHigh": 18.746,
        "epsLow": 9.8,
        "analystCount": 53.0,
        "revenueAvg": 682733176920.0
      }
    ],
    "updatedAt": "2026-09-28T08:02:04"
  },
  "AMD": {
    "symbol": "AMD",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 50.0,
    "epsNow": 15.5707,
    "eps7d": 15.5105,
    "eps30d": 15.335,
    "eps60d": 13.4647,
    "eps90d": 13.1037,
    "change30dPct": 1.54,
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
    "updatedAt": "2026-09-28T08:02:18"
  },
  "AVGO": {
    "symbol": "AVGO",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-10-31",
    "analystCount": 47.0,
    "epsNow": 19.3814,
    "eps7d": 19.3839,
    "eps30d": 19.5694,
    "eps60d": 19.5823,
    "eps90d": 19.4616,
    "change30dPct": -0.96,
    "change90dPct": -0.41,
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
        "epsAvg": 11.6583,
        "epsHigh": 12.38,
        "epsLow": 11.35,
        "analystCount": 46.0,
        "revenueAvg": 105967839220.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-10-31",
        "epsAvg": 19.3814,
        "epsHigh": 22.44,
        "epsLow": 17.4665,
        "analystCount": 47.0,
        "revenueAvg": 173504978810.0
      }
    ],
    "updatedAt": "2026-09-28T08:02:31"
  },
  "QCOM": {
    "symbol": "QCOM",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-09-30",
    "analystCount": 33.0,
    "epsNow": 10.1772,
    "eps7d": 10.204,
    "eps30d": 10.202,
    "eps60d": 10.9724,
    "eps90d": 10.9735,
    "change30dPct": -0.24,
    "change90dPct": -7.26,
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
        "epsAvg": 10.4834,
        "epsHigh": 10.61,
        "epsLow": 9.25,
        "analystCount": 30.0,
        "revenueAvg": 42875844810.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-09-30",
        "epsAvg": 10.1772,
        "epsHigh": 12.24,
        "epsLow": 8.83,
        "analystCount": 33.0,
        "revenueAvg": 44856934810.0
      }
    ],
    "updatedAt": "2026-09-28T08:02:44"
  },
  "ARM": {
    "symbol": "ARM",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2028-03-31",
    "analystCount": 40.0,
    "epsNow": 3.0548,
    "eps7d": 3.0558,
    "eps30d": 3.0608,
    "eps60d": 3.0759,
    "eps90d": 3.084,
    "change30dPct": -0.2,
    "change90dPct": -0.95,
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
    "updatedAt": "2026-09-28T08:03:00"
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
    "updatedAt": "2026-09-28T08:03:13"
  },
  "INTC": {
    "symbol": "INTC",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 46.0,
    "epsNow": 2.0621,
    "eps7d": 2.0621,
    "eps30d": 2.0401,
    "eps60d": 1.9721,
    "eps90d": 1.5245,
    "change30dPct": 1.08,
    "change90dPct": 35.26,
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
    "updatedAt": "2026-09-28T08:03:26"
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
        "revenueAvg": 5442275068100.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 21.9251,
        "epsHigh": 24.6244,
        "epsLow": 19.58,
        "analystCount": 13.0,
        "revenueAvg": 7322502668340.0
      }
    ],
    "updatedAt": "2026-09-28T08:03:40"
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
        "revenueAvg": 42867376860.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 51.7225,
        "epsHigh": 59.1013,
        "epsLow": 37.43,
        "analystCount": 33.0,
        "revenueAvg": 54587724080.0
      }
    ],
    "updatedAt": "2026-09-28T08:03:54"
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
    "updatedAt": "2026-09-28T08:04:08"
  },
  "LRCX": {
    "symbol": "LRCX",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2028-06-30",
    "analystCount": 26.0,
    "epsNow": 11.7395,
    "eps7d": 11.6518,
    "eps30d": 11.5571,
    "eps60d": 10.157,
    "eps90d": 9.8481,
    "change30dPct": 1.58,
    "change90dPct": 19.21,
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
        "epsAvg": 9.5055,
        "epsHigh": 10.82,
        "epsLow": 8.44,
        "analystCount": 30.0,
        "revenueAvg": 34922166990.0
      },
      {
        "label": "다음 회계연도",
        "date": "2028-06-30",
        "epsAvg": 11.7395,
        "epsHigh": 15.12,
        "epsLow": 8.96,
        "analystCount": 26.0,
        "revenueAvg": 41227918960.0
      }
    ],
    "updatedAt": "2026-09-28T08:04:21"
  },
  "KLAC": {
    "symbol": "KLAC",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2028-06-30",
    "analystCount": 22.0,
    "epsNow": 6.7054,
    "eps7d": 6.7054,
    "eps30d": 6.6038,
    "eps60d": 6.2775,
    "eps90d": 6.0004,
    "change30dPct": 1.54,
    "change90dPct": 11.75,
    "revisionUp30": 3,
    "revisionDown30": 0,
    "revisionUp7": 1,
    "revisionDown7": 0,
    "direction": "상향",
    "note": "전망치가 오르는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2027-06-30",
        "epsAvg": 5.4548,
        "epsHigh": 5.86,
        "epsLow": 5.05,
        "analystCount": 24.0,
        "revenueAvg": 18114062780.0
      },
      {
        "label": "다음 회계연도",
        "date": "2028-06-30",
        "epsAvg": 6.7054,
        "epsHigh": 7.9486,
        "epsLow": 5.81,
        "analystCount": 22.0,
        "revenueAvg": 21416165640.0
      }
    ],
    "updatedAt": "2026-09-28T08:04:36"
  },
  "MU": {
    "symbol": "MU",
    "targetLabel": "현재 회계연도",
    "fiscalDate": "2027-08-31",
    "analystCount": 36.0,
    "epsNow": 156.5298,
    "eps7d": 155.8047,
    "eps30d": 155.5719,
    "eps60d": 150.5822,
    "eps90d": 117.8618,
    "change30dPct": 0.62,
    "change90dPct": 32.81,
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
        "epsAvg": 156.5298,
        "epsHigh": 221.27,
        "epsLow": 106.89,
        "analystCount": 36.0,
        "revenueAvg": 245573257570.0
      }
    ],
    "updatedAt": "2026-09-28T08:04:50"
  },
  "SNDK": {
    "symbol": "SNDK",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2028-06-30",
    "analystCount": 20.0,
    "epsNow": 263.4855,
    "eps7d": 264.7216,
    "eps30d": 264.7216,
    "eps60d": 255.6271,
    "eps90d": 198.2978,
    "change30dPct": -0.47,
    "change90dPct": 32.87,
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
        "epsAvg": 213.903,
        "epsHigh": 238.36,
        "epsLow": 186.97,
        "analystCount": 21.0,
        "revenueAvg": 48952245400.0
      },
      {
        "label": "다음 회계연도",
        "date": "2028-06-30",
        "epsAvg": 263.4855,
        "epsHigh": 361.2,
        "epsLow": 173.37,
        "analystCount": 20.0,
        "revenueAvg": 57903120000.0
      }
    ],
    "updatedAt": "2026-09-28T08:05:04"
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
    "updatedAt": "2026-09-28T08:05:17"
  },
  "ANET": {
    "symbol": "ANET",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 28.0,
    "epsNow": 5.1874,
    "eps7d": 5.1603,
    "eps30d": 5.1596,
    "eps60d": 4.4675,
    "eps90d": 4.4543,
    "change30dPct": 0.54,
    "change90dPct": 16.46,
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
        "epsAvg": 4.1122,
        "epsHigh": 4.22,
        "epsLow": 4.05,
        "analystCount": 28.0,
        "revenueAvg": 12665123740.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 5.1874,
        "epsHigh": 5.73,
        "epsLow": 4.66,
        "analystCount": 28.0,
        "revenueAvg": 16231551560.0
      }
    ],
    "updatedAt": "2026-09-28T08:05:30"
  }
};
const EPS_DATA_GENERATED_AT = "2026-09-28T08:22:19";
