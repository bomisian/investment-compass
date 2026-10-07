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
    "updatedAt": "2026-10-05T21:33:29"
  },
  "GOOGL": {
    "symbol": "GOOGL",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 53.0,
    "epsNow": 14.9532,
    "eps7d": 14.9221,
    "eps30d": 14.8548,
    "eps60d": 14.7698,
    "eps90d": 14.5255,
    "change30dPct": 0.66,
    "change90dPct": 2.94,
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
        "epsAvg": 20.6376,
        "epsHigh": 21.92,
        "epsLow": 19.89,
        "analystCount": 53.0,
        "revenueAvg": 498628982970.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 14.9532,
        "epsHigh": 17.2139,
        "epsLow": 13.67,
        "analystCount": 53.0,
        "revenueAvg": 614991075940.0
      }
    ],
    "updatedAt": "2026-10-05T21:33:43"
  },
  "AMZN": {
    "symbol": "AMZN",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 52.0,
    "epsNow": 10.5032,
    "eps7d": 10.4958,
    "eps30d": 10.4928,
    "eps60d": 10.3891,
    "eps90d": 9.9884,
    "change30dPct": 0.1,
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
        "epsAvg": 12.8808,
        "epsHigh": 13.51,
        "epsLow": 12.15,
        "analystCount": 50.0,
        "revenueAvg": 828285071860.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 10.5032,
        "epsHigh": 15.0435,
        "epsLow": 8.73,
        "analystCount": 52.0,
        "revenueAvg": 947853004920.0
      }
    ],
    "updatedAt": "2026-10-05T21:33:57"
  },
  "META": {
    "symbol": "META",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 53.0,
    "epsNow": 34.0681,
    "eps7d": 33.899,
    "eps30d": 33.9462,
    "eps60d": 34.1053,
    "eps90d": 34.9746,
    "change30dPct": 0.36,
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
        "epsAvg": 31.1683,
        "epsHigh": 33.65,
        "epsLow": 27.78,
        "analystCount": 55.0,
        "revenueAvg": 254164485210.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 34.0681,
        "epsHigh": 40.3149,
        "epsLow": 28.7795,
        "analystCount": 53.0,
        "revenueAvg": 306431089080.0
      }
    ],
    "updatedAt": "2026-10-05T21:34:10"
  },
  "AAPL": {
    "symbol": "AAPL",
    "targetLabel": "현재 회계연도",
    "fiscalDate": "2027-09-30",
    "analystCount": 40.0,
    "epsNow": 9.5783,
    "eps7d": 9.5808,
    "eps30d": 9.5313,
    "eps60d": 9.7181,
    "eps90d": 9.6826,
    "change30dPct": 0.49,
    "change90dPct": -1.08,
    "revisionUp30": 2,
    "revisionDown30": 7,
    "revisionUp7": 1,
    "revisionDown7": 0,
    "direction": "하향",
    "note": "전망치가 내려가는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2027-09-30",
        "epsAvg": 9.5783,
        "epsHigh": 10.67,
        "epsLow": 8.69,
        "analystCount": 40.0,
        "revenueAvg": 527946029390.0
      }
    ],
    "updatedAt": "2026-10-05T21:34:24"
  },
  "TSLA": {
    "symbol": "TSLA",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 31.0,
    "epsNow": 2.163,
    "eps7d": 2.1972,
    "eps30d": 2.1586,
    "eps60d": 2.2192,
    "eps90d": 2.5615,
    "change30dPct": 0.2,
    "change90dPct": -15.56,
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
        "epsAvg": 1.7515,
        "epsHigh": 2.39,
        "epsLow": 1.36,
        "analystCount": 33.0,
        "revenueAvg": 106467860160.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 2.163,
        "epsHigh": 3.65,
        "epsLow": 1.4277,
        "analystCount": 31.0,
        "revenueAvg": 121089884260.0
      }
    ],
    "updatedAt": "2026-10-05T21:34:37"
  },
  "ORCL": {
    "symbol": "ORCL",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2028-05-31",
    "analystCount": 39.0,
    "epsNow": 10.9972,
    "eps7d": 10.9972,
    "eps30d": 10.9261,
    "eps60d": 10.8902,
    "eps90d": 10.9191,
    "change30dPct": 0.65,
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
    "updatedAt": "2026-10-05T21:34:51"
  },
  "CRM": {
    "symbol": "CRM",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2028-01-31",
    "analystCount": 53.0,
    "epsNow": 16.0207,
    "eps7d": 16.0067,
    "eps30d": 15.9252,
    "eps60d": 15.5123,
    "eps90d": 15.5139,
    "change30dPct": 0.6,
    "change90dPct": 3.27,
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
        "epsAvg": 16.7543,
        "epsHigh": 17.6,
        "epsLow": 16.67,
        "analystCount": 52.0,
        "revenueAvg": 46296649200.0
      },
      {
        "label": "다음 회계연도",
        "date": "2028-01-31",
        "epsAvg": 16.0207,
        "epsHigh": 18.12,
        "epsLow": 14.6632,
        "analystCount": 53.0,
        "revenueAvg": 50794665790.0
      }
    ],
    "updatedAt": "2026-10-05T21:35:05"
  },
  "PLTR": {
    "symbol": "PLTR",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 28.0,
    "epsNow": 2.3442,
    "eps7d": 2.3267,
    "eps30d": 2.3142,
    "eps60d": 2.0945,
    "eps90d": 2.0945,
    "change30dPct": 1.3,
    "change90dPct": 11.92,
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
        "epsAvg": 1.6201,
        "epsHigh": 1.75,
        "epsLow": 1.51,
        "analystCount": 28.0,
        "revenueAvg": 8214916499.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 2.3442,
        "epsHigh": 2.9,
        "epsLow": 1.92,
        "analystCount": 28.0,
        "revenueAvg": 12295146820.0
      }
    ],
    "updatedAt": "2026-10-05T21:35:18"
  },
  "NVDA": {
    "symbol": "NVDA",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2028-01-31",
    "analystCount": 53.0,
    "epsNow": 15.6951,
    "eps7d": 15.6826,
    "eps30d": 15.4043,
    "eps60d": 12.8362,
    "eps90d": 12.7102,
    "change30dPct": 1.89,
    "change90dPct": 23.48,
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
        "epsAvg": 9.3073,
        "epsHigh": 10.1,
        "epsLow": 9.01,
        "analystCount": 51.0,
        "revenueAvg": 411556323240.0
      },
      {
        "label": "다음 회계연도",
        "date": "2028-01-31",
        "epsAvg": 15.6951,
        "epsHigh": 18.746,
        "epsLow": 9.8,
        "analystCount": 53.0,
        "revenueAvg": 683283874850.0
      }
    ],
    "updatedAt": "2026-10-05T21:35:32"
  },
  "AMD": {
    "symbol": "AMD",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 50.0,
    "epsNow": 15.5833,
    "eps7d": 15.5707,
    "eps30d": 15.3288,
    "eps60d": 13.8715,
    "eps90d": 13.177,
    "change30dPct": 1.66,
    "change90dPct": 18.26,
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
        "epsAvg": 7.5768,
        "epsHigh": 8.2,
        "epsLow": 7.0,
        "analystCount": 49.0,
        "revenueAvg": 50941311070.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 15.5833,
        "epsHigh": 20.25,
        "epsLow": 9.6,
        "analystCount": 50.0,
        "revenueAvg": 88234844520.0
      }
    ],
    "updatedAt": "2026-10-05T21:35:45"
  },
  "AVGO": {
    "symbol": "AVGO",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-10-31",
    "analystCount": 48.0,
    "epsNow": 19.3938,
    "eps7d": 19.3807,
    "eps30d": 19.5681,
    "eps60d": 19.5585,
    "eps90d": 19.4616,
    "change30dPct": -0.89,
    "change90dPct": -0.35,
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
        "epsAvg": 11.6576,
        "epsHigh": 12.38,
        "epsLow": 11.35,
        "analystCount": 48.0,
        "revenueAvg": 105972843240.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-10-31",
        "epsAvg": 19.3938,
        "epsHigh": 22.44,
        "epsLow": 17.4665,
        "analystCount": 48.0,
        "revenueAvg": 173928264520.0
      }
    ],
    "updatedAt": "2026-10-05T21:35:59"
  },
  "QCOM": {
    "symbol": "QCOM",
    "targetLabel": "현재 회계연도",
    "fiscalDate": "2027-09-30",
    "analystCount": 34.0,
    "epsNow": 10.204,
    "eps7d": 10.204,
    "eps30d": 10.202,
    "eps60d": 10.2961,
    "eps90d": 10.9625,
    "change30dPct": 0.02,
    "change90dPct": -6.92,
    "revisionUp30": 3,
    "revisionDown30": 27,
    "revisionUp7": 0,
    "revisionDown7": 0,
    "direction": "하향",
    "note": "전망치가 내려가는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2027-09-30",
        "epsAvg": 10.204,
        "epsHigh": 12.24,
        "epsLow": 8.83,
        "analystCount": 34.0,
        "revenueAvg": 44913361020.0
      }
    ],
    "updatedAt": "2026-10-05T21:36:12"
  },
  "ARM": {
    "symbol": "ARM",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2028-03-31",
    "analystCount": 40.0,
    "epsNow": 3.0548,
    "eps7d": 3.0628,
    "eps30d": 3.0608,
    "eps60d": 3.0694,
    "eps90d": 3.0864,
    "change30dPct": -0.2,
    "change90dPct": -1.02,
    "revisionUp30": 15,
    "revisionDown30": 13,
    "revisionUp7": 2,
    "revisionDown7": 0,
    "direction": "혼조",
    "note": "숫자 변화와 상·하향 횟수의 방향이 엇갈림",
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
    "updatedAt": "2026-10-05T21:36:26"
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
    "updatedAt": "2026-10-05T21:36:40"
  },
  "INTC": {
    "symbol": "INTC",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 46.0,
    "epsNow": 2.0621,
    "eps7d": 2.0621,
    "eps30d": 2.0406,
    "eps60d": 1.9914,
    "eps90d": 1.5322,
    "change30dPct": 1.05,
    "change90dPct": 34.58,
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
    "updatedAt": "2026-10-05T21:36:53"
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
    "updatedAt": "2026-10-05T21:37:07"
  },
  "ASML": {
    "symbol": "ASML",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 33.0,
    "epsNow": 51.7225,
    "eps7d": 51.7225,
    "eps30d": 51.6893,
    "eps60d": 50.9188,
    "eps90d": 42.0776,
    "change30dPct": 0.06,
    "change90dPct": 22.92,
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
    "updatedAt": "2026-10-05T21:37:20"
  },
  "AMAT": {
    "symbol": "AMAT",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-10-31",
    "analystCount": 34.0,
    "epsNow": 18.4719,
    "eps7d": 18.4548,
    "eps30d": 18.4583,
    "eps60d": 16.9044,
    "eps90d": 16.3233,
    "change30dPct": 0.07,
    "change90dPct": 13.16,
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
        "epsAvg": 12.8694,
        "epsHigh": 15.0,
        "epsLow": 12.53,
        "analystCount": 30.0,
        "revenueAvg": 34382992340.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-10-31",
        "epsAvg": 18.4719,
        "epsHigh": 21.77,
        "epsLow": 16.02,
        "analystCount": 34.0,
        "revenueAvg": 46163473690.0
      }
    ],
    "updatedAt": "2026-10-05T21:37:34"
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
    "updatedAt": "2026-10-05T21:37:47"
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
    "updatedAt": "2026-10-06T17:46:14"
  },
  "MU": {
    "symbol": "MU",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2028-08-31",
    "analystCount": 32.0,
    "epsNow": 205.299,
    "eps7d": 179.3059,
    "eps30d": 171.0249,
    "eps60d": 166.8887,
    "eps90d": 163.347,
    "change30dPct": 20.04,
    "change90dPct": 25.68,
    "revisionUp30": 3,
    "revisionDown30": 1,
    "revisionUp7": 1,
    "revisionDown7": 0,
    "direction": "상향",
    "note": "전망치가 오르는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2027-08-31",
        "epsAvg": 176.6868,
        "epsHigh": 214.7,
        "epsLow": 161.0,
        "analystCount": 31.0,
        "revenueAvg": 274710135729.0
      },
      {
        "label": "다음 회계연도",
        "date": "2028-08-31",
        "epsAvg": 205.299,
        "epsHigh": 335.5,
        "epsLow": 136.0,
        "analystCount": 32.0,
        "revenueAvg": 313348127320.0
      }
    ],
    "updatedAt": "2026-10-06T17:46:27"
  },
  "SNDK": {
    "symbol": "SNDK",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2028-06-30",
    "analystCount": 20.0,
    "epsNow": 263.4855,
    "eps7d": 263.4855,
    "eps30d": 264.7216,
    "eps60d": 255.6271,
    "eps90d": 199.2789,
    "change30dPct": -0.47,
    "change90dPct": 32.22,
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
        "revenueAvg": 48952220900.0
      },
      {
        "label": "다음 회계연도",
        "date": "2028-06-30",
        "epsAvg": 263.4855,
        "epsHigh": 361.2,
        "epsLow": 173.37,
        "analystCount": 20.0,
        "revenueAvg": 57903133680.0
      }
    ],
    "updatedAt": "2026-10-06T17:46:41"
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
    "updatedAt": "2026-10-06T17:46:54"
  },
  "ANET": {
    "symbol": "ANET",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 29.0,
    "epsNow": 5.202,
    "eps7d": 5.1874,
    "eps30d": 5.1596,
    "eps60d": 4.4675,
    "eps90d": 4.4543,
    "change30dPct": 0.82,
    "change90dPct": 16.79,
    "revisionUp30": 1,
    "revisionDown30": 0,
    "revisionUp7": 26,
    "revisionDown7": 0,
    "direction": "상향",
    "note": "전망치가 오르는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2026-12-31",
        "epsAvg": 4.1121,
        "epsHigh": 4.22,
        "epsLow": 4.05,
        "analystCount": 29.0,
        "revenueAvg": 12665526560.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 5.202,
        "epsHigh": 5.73,
        "epsLow": 4.66,
        "analystCount": 29.0,
        "revenueAvg": 16290174710.0
      }
    ],
    "updatedAt": "2026-10-06T17:47:08"
  },
  "COHR": {
    "symbol": "COHR",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2028-06-30",
    "analystCount": 20.0,
    "epsNow": 14.0456,
    "eps7d": 13.9553,
    "eps30d": 13.9489,
    "eps60d": 13.2144,
    "eps90d": 12.5157,
    "change30dPct": 0.69,
    "change90dPct": 12.22,
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
        "epsAvg": 9.4204,
        "epsHigh": 10.26,
        "epsLow": 8.26,
        "analystCount": 23.0,
        "revenueAvg": 10629628430.0
      },
      {
        "label": "다음 회계연도",
        "date": "2028-06-30",
        "epsAvg": 14.0456,
        "epsHigh": 16.61,
        "epsLow": 11.38,
        "analystCount": 20.0,
        "revenueAvg": 14758691180.0
      }
    ],
    "updatedAt": "2026-10-07T14:00:07"
  },
  "LITE": {
    "symbol": "LITE",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2028-06-30",
    "analystCount": 19.0,
    "epsNow": 34.8288,
    "eps7d": 34.5204,
    "eps30d": 33.3012,
    "eps60d": 28.8063,
    "eps90d": 28.2791,
    "change30dPct": 4.59,
    "change90dPct": 23.16,
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
        "epsAvg": 21.743,
        "epsHigh": 25.27,
        "epsLow": 19.05,
        "analystCount": 25.0,
        "revenueAvg": 6325134230.0
      },
      {
        "label": "다음 회계연도",
        "date": "2028-06-30",
        "epsAvg": 34.8288,
        "epsHigh": 40.8979,
        "epsLow": 29.2,
        "analystCount": 19.0,
        "revenueAvg": 9753572360.0
      }
    ],
    "updatedAt": "2026-10-07T14:00:20"
  },
  "GEV": {
    "symbol": "GEV",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 26.0,
    "epsNow": 24.7755,
    "eps7d": 24.8503,
    "eps30d": 24.6859,
    "eps60d": 24.8507,
    "eps90d": 24.383,
    "change30dPct": 0.36,
    "change90dPct": 1.61,
    "revisionUp30": 3,
    "revisionDown30": 1,
    "revisionUp7": 2,
    "revisionDown7": 0,
    "direction": "상향",
    "note": "전망치가 오르는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2026-12-31",
        "epsAvg": 30.5802,
        "epsHigh": 33.23,
        "epsLow": 26.92,
        "analystCount": 20.0,
        "revenueAvg": 46297442490.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 24.7755,
        "epsHigh": 29.95,
        "epsLow": 17.16,
        "analystCount": 26.0,
        "revenueAvg": 52816371680.0
      }
    ],
    "updatedAt": "2026-10-07T14:00:34"
  },
  "CEG": {
    "symbol": "CEG",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 18.0,
    "epsNow": 13.3202,
    "eps7d": 13.3202,
    "eps30d": 13.3417,
    "eps60d": 13.3772,
    "eps90d": 13.583,
    "change30dPct": -0.16,
    "change90dPct": -1.93,
    "revisionUp30": 7,
    "revisionDown30": 9,
    "revisionUp7": 2,
    "revisionDown7": 0,
    "direction": "하향",
    "note": "전망치가 내려가는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2026-12-31",
        "epsAvg": 12.144,
        "epsHigh": 12.49,
        "epsLow": 11.77,
        "analystCount": 18.0,
        "revenueAvg": 35469754280.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 13.3202,
        "epsHigh": 14.7914,
        "epsLow": 12.5,
        "analystCount": 18.0,
        "revenueAvg": 36677834790.0
      }
    ],
    "updatedAt": "2026-10-07T14:00:47"
  },
  "VST": {
    "symbol": "VST",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 10.0,
    "epsNow": 10.3561,
    "eps7d": 10.3811,
    "eps30d": 10.3461,
    "eps60d": 11.013,
    "eps90d": 11.3019,
    "change30dPct": 0.1,
    "change90dPct": -8.37,
    "revisionUp30": 0,
    "revisionDown30": 1,
    "revisionUp7": 1,
    "revisionDown7": 0,
    "direction": "하향",
    "note": "전망치가 내려가는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2026-12-31",
        "epsAvg": 9.5785,
        "epsHigh": 10.65,
        "epsLow": 8.76,
        "analystCount": 9.0,
        "revenueAvg": 22484501220.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 10.3561,
        "epsHigh": 12.64,
        "epsLow": 9.0264,
        "analystCount": 10.0,
        "revenueAvg": 24137052590.0
      }
    ],
    "updatedAt": "2026-10-07T14:01:01"
  },
  "ETN": {
    "symbol": "ETN",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 24.0,
    "epsNow": 16.2189,
    "eps7d": 16.1426,
    "eps30d": 16.067,
    "eps60d": 15.9515,
    "eps90d": 15.7656,
    "change30dPct": 0.95,
    "change90dPct": 2.88,
    "revisionUp30": 4,
    "revisionDown30": 0,
    "revisionUp7": 1,
    "revisionDown7": 0,
    "direction": "상향",
    "note": "전망치가 오르는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2026-12-31",
        "epsAvg": 13.5711,
        "epsHigh": 14.12,
        "epsLow": 13.25,
        "analystCount": 26.0,
        "revenueAvg": 32706786840.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 16.2189,
        "epsHigh": 17.37,
        "epsLow": 15.0,
        "analystCount": 24.0,
        "revenueAvg": 36720293370.0
      }
    ],
    "updatedAt": "2026-10-07T14:01:15"
  },
  "PWR": {
    "symbol": "PWR",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 26.0,
    "epsNow": 19.7739,
    "eps7d": 19.7151,
    "eps30d": 19.6413,
    "eps60d": 16.4936,
    "eps90d": 16.4603,
    "change30dPct": 0.68,
    "change90dPct": 20.13,
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
        "epsAvg": 16.7256,
        "epsHigh": 17.11,
        "epsLow": 16.05,
        "analystCount": 26.0,
        "revenueAvg": 39570925960.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 19.7739,
        "epsHigh": 22.02,
        "epsLow": 17.48,
        "analystCount": 26.0,
        "revenueAvg": 45687355220.0
      }
    ],
    "updatedAt": "2026-10-07T14:01:28"
  },
  "HUBB": {
    "symbol": "HUBB",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 13.0,
    "epsNow": 22.9536,
    "eps7d": 22.9132,
    "eps30d": 22.878,
    "eps60d": 22.8712,
    "eps90d": 22.621,
    "change30dPct": 0.33,
    "change90dPct": 1.47,
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
        "epsAvg": 20.4864,
        "epsHigh": 20.74,
        "epsLow": 20.34,
        "analystCount": 13.0,
        "revenueAvg": 6868753480.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 22.9536,
        "epsHigh": 24.32,
        "epsLow": 22.2333,
        "analystCount": 13.0,
        "revenueAvg": 7574520820.0
      }
    ],
    "updatedAt": "2026-10-07T14:01:42"
  },
  "VRT": {
    "symbol": "VRT",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 29.0,
    "epsNow": 9.1743,
    "eps7d": 9.1224,
    "eps30d": 9.0988,
    "eps60d": 9.0637,
    "eps90d": 8.8016,
    "change30dPct": 0.83,
    "change90dPct": 4.23,
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
        "epsAvg": 6.7378,
        "epsHigh": 6.91,
        "epsLow": 6.6,
        "analystCount": 28.0,
        "revenueAvg": 14023574100.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 9.1743,
        "epsHigh": 10.94,
        "epsLow": 8.28,
        "analystCount": 29.0,
        "revenueAvg": 18280587750.0
      }
    ],
    "updatedAt": "2026-10-07T14:01:55"
  },
  "MOD": {
    "symbol": "MOD",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2028-03-31",
    "analystCount": 6.0,
    "epsNow": 10.6627,
    "eps7d": 11.0077,
    "eps30d": 11.0041,
    "eps60d": 11.1778,
    "eps90d": 11.3636,
    "change30dPct": -3.1,
    "change90dPct": -6.17,
    "revisionUp30": 1,
    "revisionDown30": 0,
    "revisionUp7": 0,
    "revisionDown7": 0,
    "direction": "혼조",
    "note": "숫자 변화와 상·하향 횟수의 방향이 엇갈림",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2027-03-31",
        "epsAvg": 7.4617,
        "epsHigh": 8.26,
        "epsLow": 6.36,
        "analystCount": 7.0,
        "revenueAvg": 3980883820.0
      },
      {
        "label": "다음 회계연도",
        "date": "2028-03-31",
        "epsAvg": 10.6627,
        "epsHigh": 12.2259,
        "epsLow": 9.18,
        "analystCount": 6.0,
        "revenueAvg": 4824939110.0
      }
    ],
    "updatedAt": "2026-10-07T14:02:09"
  },
  "STX": {
    "symbol": "STX",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2028-06-30",
    "analystCount": 19.0,
    "epsNow": 55.3714,
    "eps7d": 55.3714,
    "eps30d": 55.3714,
    "eps60d": 55.3714,
    "eps90d": 42.1643,
    "change30dPct": 0.0,
    "change90dPct": 31.32,
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
        "revenueAvg": 25105534460.0
      }
    ],
    "updatedAt": "2026-10-07T14:02:23"
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
    "updatedAt": "2026-10-07T14:02:36"
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
    "updatedAt": "2026-10-07T14:02:50"
  },
  "BE": {
    "symbol": "BE",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 28.0,
    "epsNow": 4.9421,
    "eps7d": 4.9287,
    "eps30d": 4.9201,
    "eps60d": 4.8957,
    "eps90d": 4.4009,
    "change30dPct": 0.45,
    "change90dPct": 12.3,
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
        "epsAvg": 2.7069,
        "epsHigh": 3.08,
        "epsLow": 2.42,
        "analystCount": 26.0,
        "revenueAvg": 4115851600.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 4.9421,
        "epsHigh": 7.01,
        "epsLow": 2.9548,
        "analystCount": 28.0,
        "revenueAvg": 6790976300.0
      }
    ],
    "updatedAt": "2026-10-07T14:03:04"
  }
};
const EPS_DATA_GENERATED_AT = "2026-10-07T14:03:04";
