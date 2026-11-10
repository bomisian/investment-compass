// 자동 생성 파일 - buy_signal_telegram.py가 하루 일부씩 순환 갱신함. 직접 수정하지 마세요.
const EPS_DATA = {
  "MSFT": {
    "symbol": "MSFT",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2028-06-30",
    "analystCount": 33.0,
    "epsNow": 24.1793,
    "eps7d": 23.6897,
    "eps30d": 23.6473,
    "eps60d": 23.5733,
    "eps90d": 23.4688,
    "change30dPct": 2.25,
    "change90dPct": 3.03,
    "revisionUp30": 24,
    "revisionDown30": 4,
    "revisionUp7": 22,
    "revisionDown7": 0,
    "direction": "상향",
    "note": "전망치가 오르는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2027-06-30",
        "epsAvg": 20.0039,
        "epsHigh": 20.63,
        "epsLow": 19.55,
        "analystCount": 32.0,
        "revenueAvg": 395904377660.0
      },
      {
        "label": "다음 회계연도",
        "date": "2028-06-30",
        "epsAvg": 24.1793,
        "epsHigh": 25.85,
        "epsLow": 22.9,
        "analystCount": 33.0,
        "revenueAvg": 476390348030.0
      }
    ],
    "updatedAt": "2026-11-11T01:00:34+09:00"
  },
  "GOOGL": {
    "symbol": "GOOGL",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 51.0,
    "epsNow": 14.9536,
    "eps7d": 15.148,
    "eps30d": 14.9494,
    "eps60d": 14.8549,
    "eps90d": 14.7698,
    "change30dPct": 0.03,
    "change90dPct": 1.24,
    "revisionUp30": 16,
    "revisionDown30": 23,
    "revisionUp7": 8,
    "revisionDown7": 0,
    "direction": "혼조",
    "note": "숫자 변화와 상·하향 횟수의 방향이 엇갈림",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2026-12-31",
        "epsAvg": 19.5265,
        "epsHigh": 20.2,
        "epsLow": 18.89,
        "analystCount": 45.0,
        "revenueAvg": 499584104220.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 14.9536,
        "epsHigh": 21.0315,
        "epsLow": 12.85,
        "analystCount": 51.0,
        "revenueAvg": 637514180150.0
      }
    ],
    "updatedAt": "2026-11-11T01:00:48+09:00"
  },
  "AMZN": {
    "symbol": "AMZN",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 57.0,
    "epsNow": 10.6712,
    "eps7d": 10.5527,
    "eps30d": 10.5253,
    "eps60d": 10.5173,
    "eps90d": 10.4993,
    "change30dPct": 1.39,
    "change90dPct": 1.64,
    "revisionUp30": 19,
    "revisionDown30": 10,
    "revisionUp7": 16,
    "revisionDown7": 0,
    "direction": "상향",
    "note": "전망치가 오르는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2026-12-31",
        "epsAvg": 12.8011,
        "epsHigh": 13.08,
        "epsLow": 12.04,
        "analystCount": 53.0,
        "revenueAvg": 829032225880.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 10.6712,
        "epsHigh": 13.4875,
        "epsLow": 9.03,
        "analystCount": 57.0,
        "revenueAvg": 959647733950.0
      }
    ],
    "updatedAt": "2026-11-11T01:01:02+09:00"
  },
  "META": {
    "symbol": "META",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 56.0,
    "epsNow": 33.972,
    "eps7d": 33.9322,
    "eps30d": 34.0283,
    "eps60d": 33.9101,
    "eps90d": 33.948,
    "change30dPct": -0.17,
    "change90dPct": 0.07,
    "revisionUp30": 22,
    "revisionDown30": 22,
    "revisionUp7": 3,
    "revisionDown7": 0,
    "direction": "보합",
    "note": "거의 변화 없음",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2026-12-31",
        "epsAvg": 29.1234,
        "epsHigh": 32.34,
        "epsLow": 27.77,
        "analystCount": 55.0,
        "revenueAvg": 256875734930.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 33.972,
        "epsHigh": 40.1778,
        "epsLow": 29.32,
        "analystCount": 56.0,
        "revenueAvg": 312629972860.0
      }
    ],
    "updatedAt": "2026-11-11T01:01:16+09:00"
  },
  "AAPL": {
    "symbol": "AAPL",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2028-09-30",
    "analystCount": 22.0,
    "epsNow": 10.8295,
    "eps7d": 10.8436,
    "eps30d": 10.8337,
    "eps60d": 10.7505,
    "eps90d": 10.8366,
    "change30dPct": -0.04,
    "change90dPct": -0.07,
    "revisionUp30": 2,
    "revisionDown30": 2,
    "revisionUp7": 1,
    "revisionDown7": 0,
    "direction": "보합",
    "note": "거의 변화 없음",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2027-09-30",
        "epsAvg": 9.4058,
        "epsHigh": 10.0599,
        "epsLow": 8.34,
        "analystCount": 38.0,
        "revenueAvg": 477692148210.0
      },
      {
        "label": "다음 회계연도",
        "date": "2028-09-30",
        "epsAvg": 10.8295,
        "epsHigh": 11.82,
        "epsLow": 9.58,
        "analystCount": 22.0,
        "revenueAvg": 571661993480.0
      }
    ],
    "updatedAt": "2026-11-11T01:01:29+09:00"
  },
  "TSLA": {
    "symbol": "TSLA",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 32.0,
    "epsNow": 2.1592,
    "eps7d": 2.1592,
    "eps30d": 2.2406,
    "eps60d": 2.252,
    "eps90d": 2.2565,
    "change30dPct": -3.63,
    "change90dPct": -4.31,
    "revisionUp30": 11,
    "revisionDown30": 17,
    "revisionUp7": 14,
    "revisionDown7": 0,
    "direction": "하향",
    "note": "전망치가 내려가는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2026-12-31",
        "epsAvg": 1.7242,
        "epsHigh": 2.28,
        "epsLow": 1.17,
        "analystCount": 32.0,
        "revenueAvg": 107858928650.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 2.1592,
        "epsHigh": 4.13,
        "epsLow": 1.03,
        "analystCount": 32.0,
        "revenueAvg": 122458192040.0
      }
    ],
    "updatedAt": "2026-11-11T01:01:43+09:00"
  },
  "ORCL": {
    "symbol": "ORCL",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2028-05-31",
    "analystCount": 40.0,
    "epsNow": 11.0636,
    "eps7d": 10.9917,
    "eps30d": 10.9972,
    "eps60d": 10.9676,
    "eps90d": 10.8902,
    "change30dPct": 0.6,
    "change90dPct": 1.59,
    "revisionUp30": 8,
    "revisionDown30": 7,
    "revisionUp7": 6,
    "revisionDown7": 0,
    "direction": "상향",
    "note": "전망치가 오르는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2027-05-31",
        "epsAvg": 8.1518,
        "epsHigh": 8.6,
        "epsLow": 8.0,
        "analystCount": 38.0,
        "revenueAvg": 90446551360.0
      },
      {
        "label": "다음 회계연도",
        "date": "2028-05-31",
        "epsAvg": 11.0636,
        "epsHigh": 12.77,
        "epsLow": 9.0,
        "analystCount": 40.0,
        "revenueAvg": 131818816050.0
      }
    ],
    "updatedAt": "2026-11-11T01:01:57+09:00"
  },
  "CRM": {
    "symbol": "CRM",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2028-01-31",
    "analystCount": 53.0,
    "epsNow": 16.0152,
    "eps7d": 16.0152,
    "eps30d": 16.0207,
    "eps60d": 16.0082,
    "eps90d": 15.5123,
    "change30dPct": -0.03,
    "change90dPct": 3.24,
    "revisionUp30": 2,
    "revisionDown30": 1,
    "revisionUp7": 0,
    "revisionDown7": 0,
    "direction": "상향",
    "note": "전망치가 오르는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2027-01-31",
        "epsAvg": 16.7548,
        "epsHigh": 17.6,
        "epsLow": 16.67,
        "analystCount": 52.0,
        "revenueAvg": 46295338330.0
      },
      {
        "label": "다음 회계연도",
        "date": "2028-01-31",
        "epsAvg": 16.0152,
        "epsHigh": 18.12,
        "epsLow": 14.6632,
        "analystCount": 53.0,
        "revenueAvg": 50780788530.0
      }
    ],
    "updatedAt": "2026-11-11T01:02:11+09:00"
  },
  "PLTR": {
    "symbol": "PLTR",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 31.0,
    "epsNow": 2.5352,
    "eps7d": 2.3367,
    "eps30d": 2.3442,
    "eps60d": 2.3142,
    "eps90d": 2.2998,
    "change30dPct": 8.15,
    "change90dPct": 10.24,
    "revisionUp30": 3,
    "revisionDown30": 2,
    "revisionUp7": 1,
    "revisionDown7": 0,
    "direction": "상향",
    "note": "전망치가 오르는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2026-12-31",
        "epsAvg": 1.7021,
        "epsHigh": 1.7506,
        "epsLow": 1.64,
        "analystCount": 29.0,
        "revenueAvg": 8550516260.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 2.5352,
        "epsHigh": 2.9057,
        "epsLow": 2.11,
        "analystCount": 31.0,
        "revenueAvg": 13112152240.0
      }
    ],
    "updatedAt": "2026-11-11T01:02:24+09:00"
  },
  "NVDA": {
    "symbol": "NVDA",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2028-01-31",
    "analystCount": 52.0,
    "epsNow": 15.9146,
    "eps7d": 15.9146,
    "eps30d": 15.6826,
    "eps60d": 15.2375,
    "eps90d": 12.8148,
    "change30dPct": 1.48,
    "change90dPct": 24.19,
    "revisionUp30": 7,
    "revisionDown30": 0,
    "revisionUp7": 3,
    "revisionDown7": 0,
    "direction": "상향",
    "note": "전망치가 오르는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2027-01-31",
        "epsAvg": 9.3124,
        "epsHigh": 10.1,
        "epsLow": 9.01,
        "analystCount": 51.0,
        "revenueAvg": 411653417250.0
      },
      {
        "label": "다음 회계연도",
        "date": "2028-01-31",
        "epsAvg": 15.9146,
        "epsHigh": 18.746,
        "epsLow": 12.8484,
        "analystCount": 52.0,
        "revenueAvg": 692206374410.0
      }
    ],
    "updatedAt": "2026-11-11T01:02:38+09:00"
  },
  "AMD": {
    "symbol": "AMD",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 49.0,
    "epsNow": 17.6419,
    "eps7d": 15.9387,
    "eps30d": 15.7831,
    "eps60d": 15.3288,
    "eps90d": 15.3297,
    "change30dPct": 11.78,
    "change90dPct": 15.08,
    "revisionUp30": 10,
    "revisionDown30": 1,
    "revisionUp7": 4,
    "revisionDown7": 0,
    "direction": "상향",
    "note": "전망치가 오르는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2026-12-31",
        "epsAvg": 8.0853,
        "epsHigh": 8.72,
        "epsLow": 7.85,
        "analystCount": 43.0,
        "revenueAvg": 52235526870.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 17.6419,
        "epsHigh": 23.66,
        "epsLow": 14.51,
        "analystCount": 49.0,
        "revenueAvg": 95706771610.0
      }
    ],
    "updatedAt": "2026-11-11T01:02:51+09:00"
  },
  "AVGO": {
    "symbol": "AVGO",
    "targetLabel": "현재 회계연도",
    "fiscalDate": "2027-10-31",
    "analystCount": 48.0,
    "epsNow": 19.4651,
    "eps7d": 19.397,
    "eps30d": 19.3807,
    "eps60d": 19.5606,
    "eps90d": 19.5823,
    "change30dPct": 0.44,
    "change90dPct": -0.6,
    "revisionUp30": 2,
    "revisionDown30": 0,
    "revisionUp7": 0,
    "revisionDown7": 0,
    "direction": "보합",
    "note": "거의 변화 없음",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2027-10-31",
        "epsAvg": 19.4651,
        "epsHigh": 22.44,
        "epsLow": 17.4665,
        "analystCount": 48.0,
        "revenueAvg": 174226851580.0
      }
    ],
    "updatedAt": "2026-11-11T01:03:05+09:00"
  },
  "QCOM": {
    "symbol": "QCOM",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2028-09-30",
    "analystCount": 29.0,
    "epsNow": 12.2483,
    "eps7d": 12.9278,
    "eps30d": 12.9303,
    "eps60d": 13.0062,
    "eps90d": 12.9807,
    "change30dPct": -5.27,
    "change90dPct": -5.64,
    "revisionUp30": 0,
    "revisionDown30": 4,
    "revisionUp7": 0,
    "revisionDown7": 0,
    "direction": "하향",
    "note": "전망치가 내려가는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2027-09-30",
        "epsAvg": 9.6015,
        "epsHigh": 10.28,
        "epsLow": 8.77,
        "analystCount": 28.0,
        "revenueAvg": 45419016820.0
      },
      {
        "label": "다음 회계연도",
        "date": "2028-09-30",
        "epsAvg": 12.2483,
        "epsHigh": 13.95,
        "epsLow": 10.1,
        "analystCount": 29.0,
        "revenueAvg": 52466936880.0
      }
    ],
    "updatedAt": "2026-11-11T01:03:19+09:00"
  },
  "ARM": {
    "symbol": "ARM",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2028-03-31",
    "analystCount": 40.0,
    "epsNow": 3.058,
    "eps7d": 3.0665,
    "eps30d": 3.0628,
    "eps60d": 3.0608,
    "eps90d": 3.0694,
    "change30dPct": -0.16,
    "change90dPct": -0.37,
    "revisionUp30": 1,
    "revisionDown30": 0,
    "revisionUp7": 1,
    "revisionDown7": 0,
    "direction": "보합",
    "note": "거의 변화 없음",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2027-03-31",
        "epsAvg": 2.2326,
        "epsHigh": 2.38,
        "epsLow": 2.1,
        "analystCount": 39.0,
        "revenueAvg": 6057347290.0
      },
      {
        "label": "다음 회계연도",
        "date": "2028-03-31",
        "epsAvg": 3.058,
        "epsHigh": 3.42,
        "epsLow": 2.65,
        "analystCount": 40.0,
        "revenueAvg": 8266916300.0
      }
    ],
    "updatedAt": "2026-11-09T08:02:56+09:00"
  },
  "MRVL": {
    "symbol": "MRVL",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2028-01-31",
    "analystCount": 43.0,
    "epsNow": 7.3428,
    "eps7d": 7.329,
    "eps30d": 6.7494,
    "eps60d": 6.7209,
    "eps90d": 6.2409,
    "change30dPct": 8.79,
    "change90dPct": 17.66,
    "revisionUp30": 27,
    "revisionDown30": 1,
    "revisionUp7": 2,
    "revisionDown7": 0,
    "direction": "상향",
    "note": "전망치가 오르는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2027-01-31",
        "epsAvg": 4.2224,
        "epsHigh": 4.6141,
        "epsLow": 3.92,
        "analystCount": 42.0,
        "revenueAvg": 12070940400.0
      },
      {
        "label": "다음 회계연도",
        "date": "2028-01-31",
        "epsAvg": 7.3428,
        "epsHigh": 8.21,
        "epsLow": 6.22,
        "analystCount": 43.0,
        "revenueAvg": 19759867760.0
      }
    ],
    "updatedAt": "2026-11-09T08:03:09+09:00"
  },
  "INTC": {
    "symbol": "INTC",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 46.0,
    "epsNow": 1.7987,
    "eps7d": 2.1756,
    "eps30d": 2.0621,
    "eps60d": 2.0426,
    "eps90d": 2.026,
    "change30dPct": -12.77,
    "change90dPct": -11.22,
    "revisionUp30": 7,
    "revisionDown30": 0,
    "revisionUp7": 4,
    "revisionDown7": 0,
    "direction": "혼조",
    "note": "숫자 변화와 상·하향 횟수의 방향이 엇갈림",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2026-12-31",
        "epsAvg": 1.4866,
        "epsHigh": 1.52,
        "epsLow": 1.45,
        "analystCount": 38.0,
        "revenueAvg": 61823604780.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 1.7987,
        "epsHigh": 2.84,
        "epsLow": 1.27,
        "analystCount": 46.0,
        "revenueAvg": 69267172740.0
      }
    ],
    "updatedAt": "2026-11-09T08:03:23+09:00"
  },
  "TSM": {
    "symbol": "TSM",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 13.0,
    "epsNow": 23.3853,
    "eps7d": 22.2986,
    "eps30d": 21.9189,
    "eps60d": 21.7745,
    "eps90d": 21.284,
    "change30dPct": 6.69,
    "change90dPct": 9.87,
    "revisionUp30": 10,
    "revisionDown30": 2,
    "revisionUp7": 10,
    "revisionDown7": 0,
    "direction": "상향",
    "note": "전망치가 오르는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2026-12-31",
        "epsAvg": 17.5043,
        "epsHigh": 17.95,
        "epsLow": 17.182,
        "analystCount": 11.0,
        "revenueAvg": 5582146967720.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 23.3853,
        "epsHigh": 25.87,
        "epsLow": 21.45,
        "analystCount": 13.0,
        "revenueAvg": 7691236153280.0
      }
    ],
    "updatedAt": "2026-11-09T08:03:37+09:00"
  },
  "ASML": {
    "symbol": "ASML",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 27.0,
    "epsNow": 56.4342,
    "eps7d": 55.929,
    "eps30d": 51.7316,
    "eps60d": 51.7099,
    "eps90d": 51.0876,
    "change30dPct": 9.09,
    "change90dPct": 10.47,
    "revisionUp30": 21,
    "revisionDown30": 0,
    "revisionUp7": 21,
    "revisionDown7": 0,
    "direction": "상향",
    "note": "전망치가 오르는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2026-12-31",
        "epsAvg": 41.483,
        "epsHigh": 43.77,
        "epsLow": 37.12,
        "analystCount": 25.0,
        "revenueAvg": 44490989200.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 56.4342,
        "epsHigh": 63.8912,
        "epsLow": 37.43,
        "analystCount": 27.0,
        "revenueAvg": 57389468110.0
      }
    ],
    "updatedAt": "2026-11-09T08:03:50+09:00"
  },
  "AMAT": {
    "symbol": "AMAT",
    "targetLabel": "현재 회계연도",
    "fiscalDate": "2027-10-31",
    "analystCount": 35.0,
    "epsNow": 18.5565,
    "eps7d": 18.5546,
    "eps30d": 18.4595,
    "eps60d": 18.4548,
    "eps90d": 17.0004,
    "change30dPct": 0.53,
    "change90dPct": 9.15,
    "revisionUp30": 5,
    "revisionDown30": 2,
    "revisionUp7": 1,
    "revisionDown7": 0,
    "direction": "상향",
    "note": "전망치가 오르는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2027-10-31",
        "epsAvg": 18.5565,
        "epsHigh": 21.77,
        "epsLow": 16.02,
        "analystCount": 35.0,
        "revenueAvg": 46375962810.0
      }
    ],
    "updatedAt": "2026-11-09T08:04:03+09:00"
  },
  "LRCX": {
    "symbol": "LRCX",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2028-06-30",
    "analystCount": 28.0,
    "epsNow": 12.2363,
    "eps7d": 11.9127,
    "eps30d": 11.7395,
    "eps60d": 11.5571,
    "eps90d": 10.157,
    "change30dPct": 4.23,
    "change90dPct": 20.47,
    "revisionUp30": 15,
    "revisionDown30": 7,
    "revisionUp7": 15,
    "revisionDown7": 0,
    "direction": "상향",
    "note": "전망치가 오르는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2027-06-30",
        "epsAvg": 9.6502,
        "epsHigh": 10.2954,
        "epsLow": 9.2,
        "analystCount": 30.0,
        "revenueAvg": 35394647410.0
      },
      {
        "label": "다음 회계연도",
        "date": "2028-06-30",
        "epsAvg": 12.2363,
        "epsHigh": 15.12,
        "epsLow": 10.41,
        "analystCount": 28.0,
        "revenueAvg": 42599859720.0
      }
    ],
    "updatedAt": "2026-11-09T08:04:17+09:00"
  },
  "KLAC": {
    "symbol": "KLAC",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2028-06-30",
    "analystCount": 23.0,
    "epsNow": 7.0988,
    "eps7d": 6.7734,
    "eps30d": 6.7054,
    "eps60d": 6.6895,
    "eps90d": 6.5493,
    "change30dPct": 5.87,
    "change90dPct": 8.39,
    "revisionUp30": 2,
    "revisionDown30": 0,
    "revisionUp7": 14,
    "revisionDown7": 0,
    "direction": "상향",
    "note": "전망치가 오르는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2027-06-30",
        "epsAvg": 5.7678,
        "epsHigh": 5.95,
        "epsLow": 5.47,
        "analystCount": 25.0,
        "revenueAvg": 18873844290.0
      },
      {
        "label": "다음 회계연도",
        "date": "2028-06-30",
        "epsAvg": 7.0988,
        "epsHigh": 7.9,
        "epsLow": 6.61,
        "analystCount": 23.0,
        "revenueAvg": 22562801320.0
      }
    ],
    "updatedAt": "2026-11-09T08:04:30+09:00"
  },
  "MU": {
    "symbol": "MU",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2028-08-31",
    "analystCount": 36.0,
    "epsNow": 207.7605,
    "eps7d": 206.8938,
    "eps30d": 206.6767,
    "eps60d": 171.0249,
    "eps90d": 166.8887,
    "change30dPct": 0.52,
    "change90dPct": 24.49,
    "revisionUp30": 20,
    "revisionDown30": 1,
    "revisionUp7": 1,
    "revisionDown7": 0,
    "direction": "상향",
    "note": "전망치가 오르는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2027-08-31",
        "epsAvg": 176.5017,
        "epsHigh": 214.7,
        "epsLow": 161.0,
        "analystCount": 36.0,
        "revenueAvg": 275505493920.0
      },
      {
        "label": "다음 회계연도",
        "date": "2028-08-31",
        "epsAvg": 207.7605,
        "epsHigh": 335.5,
        "epsLow": 136.0,
        "analystCount": 36.0,
        "revenueAvg": 320062899660.0
      }
    ],
    "updatedAt": "2026-11-09T08:04:44+09:00"
  },
  "SNDK": {
    "symbol": "SNDK",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2028-06-30",
    "analystCount": 20.0,
    "epsNow": 287.2585,
    "eps7d": 266.2971,
    "eps30d": 263.4855,
    "eps60d": 264.7216,
    "eps90d": 255.6271,
    "change30dPct": 9.02,
    "change90dPct": 12.37,
    "revisionUp30": 1,
    "revisionDown30": 0,
    "revisionUp7": 9,
    "revisionDown7": 0,
    "direction": "상향",
    "note": "전망치가 오르는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2027-06-30",
        "epsAvg": 227.8024,
        "epsHigh": 241.233,
        "epsLow": 219.3,
        "analystCount": 20.0,
        "revenueAvg": 49560227000.0
      },
      {
        "label": "다음 회계연도",
        "date": "2028-06-30",
        "epsAvg": 287.2585,
        "epsHigh": 356.85,
        "epsLow": 243.95,
        "analystCount": 20.0,
        "revenueAvg": 60592052670.0
      }
    ],
    "updatedAt": "2026-11-09T08:04:57+09:00"
  },
  "WDC": {
    "symbol": "WDC",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2028-06-30",
    "analystCount": 23.0,
    "epsNow": 40.4048,
    "eps7d": 39.9366,
    "eps30d": 31.7495,
    "eps60d": 31.7495,
    "eps90d": 29.3389,
    "change30dPct": 27.26,
    "change90dPct": 37.72,
    "revisionUp30": 18,
    "revisionDown30": 0,
    "revisionUp7": 20,
    "revisionDown7": 0,
    "direction": "상향",
    "note": "전망치가 오르는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2027-06-30",
        "epsAvg": 24.7248,
        "epsHigh": 27.9183,
        "epsLow": 19.14,
        "analystCount": 23.0,
        "revenueAvg": 21315271910.0
      },
      {
        "label": "다음 회계연도",
        "date": "2028-06-30",
        "epsAvg": 40.4048,
        "epsHigh": 57.0351,
        "epsLow": 27.3,
        "analystCount": 23.0,
        "revenueAvg": 29946586910.0
      }
    ],
    "updatedAt": "2026-11-09T08:05:10+09:00"
  },
  "ANET": {
    "symbol": "ANET",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 28.0,
    "epsNow": 5.4151,
    "eps7d": 5.2224,
    "eps30d": 5.202,
    "eps60d": 5.1603,
    "eps90d": 5.0664,
    "change30dPct": 4.1,
    "change90dPct": 6.88,
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
        "epsAvg": 4.3492,
        "epsHigh": 4.45,
        "epsLow": 4.05,
        "analystCount": 8.0,
        "revenueAvg": 12827444540.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 5.4151,
        "epsHigh": 6.35,
        "epsLow": 4.66,
        "analystCount": 28.0,
        "revenueAvg": 18585821000.0
      }
    ],
    "updatedAt": "2026-11-09T08:05:24+09:00"
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
    "updatedAt": "2026-10-15T04:26:05"
  },
  "LITE": {
    "symbol": "LITE",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2028-06-30",
    "analystCount": 18.0,
    "epsNow": 35.5659,
    "eps7d": 34.5204,
    "eps30d": 33.3012,
    "eps60d": 29.8492,
    "eps90d": 28.3009,
    "change30dPct": 6.8,
    "change90dPct": 25.67,
    "revisionUp30": 1,
    "revisionDown30": 0,
    "revisionUp7": 1,
    "revisionDown7": 0,
    "direction": "상향",
    "note": "전망치가 오르는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2027-06-30",
        "epsAvg": 21.781,
        "epsHigh": 25.27,
        "epsLow": 19.05,
        "analystCount": 25.0,
        "revenueAvg": 6331438580.0
      },
      {
        "label": "다음 회계연도",
        "date": "2028-06-30",
        "epsAvg": 35.5659,
        "epsHigh": 40.8979,
        "epsLow": 30.38,
        "analystCount": 18.0,
        "revenueAvg": 9844300930.0
      }
    ],
    "updatedAt": "2026-10-15T04:26:19"
  },
  "GEV": {
    "symbol": "GEV",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 25.0,
    "epsNow": 24.8116,
    "eps7d": 24.7755,
    "eps30d": 24.8011,
    "eps60d": 24.8961,
    "eps90d": 24.4593,
    "change30dPct": 0.04,
    "change90dPct": 1.44,
    "revisionUp30": 3,
    "revisionDown30": 1,
    "revisionUp7": 1,
    "revisionDown7": 0,
    "direction": "상향",
    "note": "전망치가 오르는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2026-12-31",
        "epsAvg": 30.4907,
        "epsHigh": 33.23,
        "epsLow": 26.64,
        "analystCount": 19.0,
        "revenueAvg": 46312279530.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 24.8116,
        "epsHigh": 29.59,
        "epsLow": 17.16,
        "analystCount": 25.0,
        "revenueAvg": 52821522140.0
      }
    ],
    "updatedAt": "2026-10-15T04:26:32"
  },
  "CEG": {
    "symbol": "CEG",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 18.0,
    "epsNow": 13.3202,
    "eps7d": 13.3202,
    "eps30d": 13.3417,
    "eps60d": 13.3224,
    "eps90d": 13.583,
    "change30dPct": -0.16,
    "change90dPct": -1.93,
    "revisionUp30": 2,
    "revisionDown30": 0,
    "revisionUp7": 2,
    "revisionDown7": 0,
    "direction": "혼조",
    "note": "숫자 변화와 상·하향 횟수의 방향이 엇갈림",
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
    "updatedAt": "2026-10-15T04:26:46"
  },
  "VST": {
    "symbol": "VST",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 10.0,
    "epsNow": 10.3561,
    "eps7d": 10.3811,
    "eps30d": 10.3461,
    "eps60d": 10.9796,
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
    "updatedAt": "2026-10-15T04:27:00"
  },
  "ETN": {
    "symbol": "ETN",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 24.0,
    "epsNow": 16.2461,
    "eps7d": 16.1781,
    "eps30d": 16.067,
    "eps60d": 16.0219,
    "eps90d": 15.7775,
    "change30dPct": 1.11,
    "change90dPct": 2.97,
    "revisionUp30": 3,
    "revisionDown30": 1,
    "revisionUp7": 0,
    "revisionDown7": 0,
    "direction": "상향",
    "note": "전망치가 오르는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2026-12-31",
        "epsAvg": 13.5805,
        "epsHigh": 14.12,
        "epsLow": 13.25,
        "analystCount": 26.0,
        "revenueAvg": 32863245570.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 16.2461,
        "epsHigh": 17.3727,
        "epsLow": 15.0,
        "analystCount": 24.0,
        "revenueAvg": 36788146930.0
      }
    ],
    "updatedAt": "2026-10-15T04:27:13"
  },
  "PWR": {
    "symbol": "PWR",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 26.0,
    "epsNow": 19.7739,
    "eps7d": 19.7739,
    "eps30d": 19.6413,
    "eps60d": 19.3293,
    "eps90d": 16.4719,
    "change30dPct": 0.68,
    "change90dPct": 20.05,
    "revisionUp30": 2,
    "revisionDown30": 0,
    "revisionUp7": 1,
    "revisionDown7": 0,
    "direction": "상향",
    "note": "전망치가 오르는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2026-12-31",
        "epsAvg": 16.7426,
        "epsHigh": 17.15,
        "epsLow": 16.05,
        "analystCount": 26.0,
        "revenueAvg": 39570905960.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 19.7739,
        "epsHigh": 22.02,
        "epsLow": 17.48,
        "analystCount": 26.0,
        "revenueAvg": 45687339840.0
      }
    ],
    "updatedAt": "2026-10-15T04:27:27"
  },
  "HUBB": {
    "symbol": "HUBB",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 13.0,
    "epsNow": 22.9643,
    "eps7d": 22.9536,
    "eps30d": 22.9132,
    "eps60d": 22.8712,
    "eps90d": 22.5442,
    "change30dPct": 0.22,
    "change90dPct": 1.86,
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
        "epsAvg": 20.4957,
        "epsHigh": 20.76,
        "epsLow": 20.3695,
        "analystCount": 13.0,
        "revenueAvg": 6868676560.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 22.9643,
        "epsHigh": 24.42,
        "epsLow": 22.2333,
        "analystCount": 13.0,
        "revenueAvg": 7573828510.0
      }
    ],
    "updatedAt": "2026-10-15T04:27:41"
  },
  "VRT": {
    "symbol": "VRT",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 30.0,
    "epsNow": 9.1845,
    "eps7d": 9.1615,
    "eps30d": 9.1224,
    "eps60d": 9.0974,
    "eps90d": 8.8139,
    "change30dPct": 0.68,
    "change90dPct": 4.2,
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
        "epsAvg": 6.7386,
        "epsHigh": 6.91,
        "epsLow": 6.6,
        "analystCount": 29.0,
        "revenueAvg": 14007621630.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 9.1845,
        "epsHigh": 10.94,
        "epsLow": 8.28,
        "analystCount": 30.0,
        "revenueAvg": 18266601490.0
      }
    ],
    "updatedAt": "2026-10-15T04:27:54"
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
    "updatedAt": "2026-10-15T04:28:08"
  },
  "STX": {
    "symbol": "STX",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2028-06-30",
    "analystCount": 19.0,
    "epsNow": 56.4199,
    "eps7d": 55.3714,
    "eps30d": 55.3714,
    "eps60d": 55.3714,
    "eps90d": 43.4437,
    "change30dPct": 1.89,
    "change90dPct": 29.87,
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
        "epsAvg": 36.2661,
        "epsHigh": 42.85,
        "epsLow": 32.06,
        "analystCount": 21.0,
        "revenueAvg": 18970710420.0
      },
      {
        "label": "다음 회계연도",
        "date": "2028-06-30",
        "epsAvg": 56.4199,
        "epsHigh": 80.11,
        "epsLow": 41.5,
        "analystCount": 19.0,
        "revenueAvg": 25500047210.0
      }
    ],
    "updatedAt": "2026-10-15T04:28:21"
  },
  "EME": {
    "symbol": "EME",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 10.0,
    "epsNow": 36.7542,
    "eps7d": 36.749,
    "eps30d": 36.749,
    "eps60d": 36.745,
    "eps90d": 32.668,
    "change30dPct": 0.01,
    "change90dPct": 12.51,
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
        "epsAvg": 32.857,
        "epsHigh": 33.62,
        "epsLow": 32.29,
        "analystCount": 9.0,
        "revenueAvg": 20319659700.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 36.7542,
        "epsHigh": 39.4524,
        "epsLow": 33.37,
        "analystCount": 10.0,
        "revenueAvg": 22325976480.0
      }
    ],
    "updatedAt": "2026-10-15T04:28:35"
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
    "updatedAt": "2026-10-15T04:28:49"
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
    "eps90d": 4.403,
    "change30dPct": 0.45,
    "change90dPct": 12.24,
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
    "updatedAt": "2026-10-15T04:29:02"
  }
};
const EPS_DATA_GENERATED_AT = "2026-11-11T01:03:32";
