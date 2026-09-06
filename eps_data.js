// 자동 생성 파일 - buy_signal_telegram.py가 하루 일부씩 순환 갱신함. 직접 수정하지 마세요.
const EPS_DATA = {
  "MSFT": {
    "symbol": "MSFT",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2028-06-30",
    "analystCount": 33.0,
    "epsNow": 23.5733,
    "eps7d": 23.4742,
    "eps30d": 22.6063,
    "eps60d": 22.6278,
    "eps90d": 22.6281,
    "change30dPct": 4.28,
    "change90dPct": 4.18,
    "revisionUp30": 19,
    "revisionDown30": 4,
    "revisionUp7": 1,
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
        "revenueAvg": 391082615630.0
      },
      {
        "label": "다음 회계연도",
        "date": "2028-06-30",
        "epsAvg": 23.5733,
        "epsHigh": 26.0,
        "epsLow": 20.93,
        "analystCount": 33.0,
        "revenueAvg": 467327316670.0
      }
    ],
    "updatedAt": "2026-09-07T08:00:01"
  },
  "GOOGL": {
    "symbol": "GOOGL",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 55.0,
    "epsNow": 14.8373,
    "eps7d": 14.7807,
    "eps30d": 14.7092,
    "eps60d": 14.4584,
    "eps90d": 14.4409,
    "change30dPct": 0.87,
    "change90dPct": 2.74,
    "revisionUp30": 33,
    "revisionDown30": 12,
    "revisionUp7": 4,
    "revisionDown7": 0,
    "direction": "상향",
    "note": "전망치가 오르는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2026-12-31",
        "epsAvg": 20.6043,
        "epsHigh": 21.92,
        "epsLow": 19.7,
        "analystCount": 53.0,
        "revenueAvg": 497864285580.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 14.8373,
        "epsHigh": 17.2139,
        "epsLow": 13.5,
        "analystCount": 55.0,
        "revenueAvg": 608706310660.0
      }
    ],
    "updatedAt": "2026-09-07T08:00:15"
  },
  "AMZN": {
    "symbol": "AMZN",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 53.0,
    "epsNow": 10.4853,
    "eps7d": 10.4821,
    "eps30d": 10.3767,
    "eps60d": 9.9778,
    "eps90d": 9.9412,
    "change30dPct": 1.05,
    "change90dPct": 5.47,
    "revisionUp30": 39,
    "revisionDown30": 5,
    "revisionUp7": 34,
    "revisionDown7": 0,
    "direction": "상향",
    "note": "전망치가 오르는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2026-12-31",
        "epsAvg": 12.5648,
        "epsHigh": 13.51,
        "epsLow": 8.29,
        "analystCount": 53.0,
        "revenueAvg": 828276165220.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 10.4853,
        "epsHigh": 15.0435,
        "epsLow": 8.695,
        "analystCount": 53.0,
        "revenueAvg": 946672691990.0
      }
    ],
    "updatedAt": "2026-09-07T08:00:28"
  },
  "META": {
    "symbol": "META",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 52.0,
    "epsNow": 33.9462,
    "eps7d": 33.9284,
    "eps30d": 35.0967,
    "eps60d": 34.9236,
    "eps90d": 34.7918,
    "change30dPct": -3.28,
    "change90dPct": -2.43,
    "revisionUp30": 8,
    "revisionDown30": 39,
    "revisionUp7": 6,
    "revisionDown7": 0,
    "direction": "하향",
    "note": "전망치가 내려가는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2026-12-31",
        "epsAvg": 31.3731,
        "epsHigh": 33.65,
        "epsLow": 27.78,
        "analystCount": 54.0,
        "revenueAvg": 254193239380.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 33.9462,
        "epsHigh": 40.3149,
        "epsLow": 27.93,
        "analystCount": 52.0,
        "revenueAvg": 305447154870.0
      }
    ],
    "updatedAt": "2026-09-07T08:00:41"
  },
  "AAPL": {
    "symbol": "AAPL",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-09-30",
    "analystCount": 39.0,
    "epsNow": 9.5329,
    "eps7d": 9.5313,
    "eps30d": 9.5861,
    "eps60d": 9.6826,
    "eps90d": 9.6552,
    "change30dPct": -0.55,
    "change90dPct": -1.27,
    "revisionUp30": 8,
    "revisionDown30": 19,
    "revisionUp7": 6,
    "revisionDown7": 0,
    "direction": "하향",
    "note": "전망치가 내려가는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2026-09-30",
        "epsAvg": 8.8125,
        "epsHigh": 8.94,
        "epsLow": 8.28,
        "analystCount": 37.0,
        "revenueAvg": 477693075360.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-09-30",
        "epsAvg": 9.5329,
        "epsHigh": 10.67,
        "epsLow": 8.24,
        "analystCount": 39.0,
        "revenueAvg": 525248157290.0
      }
    ],
    "updatedAt": "2026-09-07T08:00:55"
  },
  "TSLA": {
    "symbol": "TSLA",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 32.0,
    "epsNow": 2.1586,
    "eps7d": 2.1633,
    "eps30d": 2.5496,
    "eps60d": 2.5161,
    "eps90d": 2.5255,
    "change30dPct": -15.34,
    "change90dPct": -14.53,
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
        "epsAvg": 1.7727,
        "epsHigh": 2.39,
        "epsLow": 1.25,
        "analystCount": 34.0,
        "revenueAvg": 106034594570.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 2.1586,
        "epsHigh": 3.65,
        "epsLow": 0.8,
        "analystCount": 32.0,
        "revenueAvg": 120769285910.0
      }
    ],
    "updatedAt": "2026-09-07T08:01:08"
  },
  "ORCL": {
    "symbol": "ORCL",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2028-05-31",
    "analystCount": 40.0,
    "epsNow": 10.9261,
    "eps7d": 10.9149,
    "eps30d": 10.8902,
    "eps60d": 10.9216,
    "eps90d": 10.7167,
    "change30dPct": 0.33,
    "change90dPct": 1.95,
    "revisionUp30": 20,
    "revisionDown30": 6,
    "revisionUp7": 1,
    "revisionDown7": 0,
    "direction": "상향",
    "note": "전망치가 오르는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2027-05-31",
        "epsAvg": 8.0575,
        "epsHigh": 8.57,
        "epsLow": 7.72,
        "analystCount": 42.0,
        "revenueAvg": 89339564120.0
      },
      {
        "label": "다음 회계연도",
        "date": "2028-05-31",
        "epsAvg": 10.9261,
        "epsHigh": 13.51,
        "epsLow": 8.28,
        "analystCount": 40.0,
        "revenueAvg": 130670183620.0
      }
    ],
    "updatedAt": "2026-09-07T08:01:21"
  },
  "CRM": {
    "symbol": "CRM",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2028-01-31",
    "analystCount": 52.0,
    "epsNow": 15.556,
    "eps7d": 15.5182,
    "eps30d": 15.5123,
    "eps60d": 15.5139,
    "eps90d": 15.4801,
    "change30dPct": 0.28,
    "change90dPct": 0.49,
    "revisionUp30": 3,
    "revisionDown30": 2,
    "revisionUp7": 2,
    "revisionDown7": 0,
    "direction": "보합",
    "note": "거의 변화 없음",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2027-01-31",
        "epsAvg": 14.6707,
        "epsHigh": 16.71,
        "epsLow": 14.11,
        "analystCount": 25.0,
        "revenueAvg": 46160328640.0
      },
      {
        "label": "다음 회계연도",
        "date": "2028-01-31",
        "epsAvg": 15.556,
        "epsHigh": 17.53,
        "epsLow": 14.48,
        "analystCount": 52.0,
        "revenueAvg": 50545557110.0
      }
    ],
    "updatedAt": "2026-09-07T08:01:35"
  },
  "PLTR": {
    "symbol": "PLTR",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 29.0,
    "epsNow": 2.3142,
    "eps7d": 2.3142,
    "eps30d": 2.0945,
    "eps60d": 2.0821,
    "eps90d": 2.0743,
    "change30dPct": 10.49,
    "change90dPct": 11.57,
    "revisionUp30": 24,
    "revisionDown30": 0,
    "revisionUp7": 24,
    "revisionDown7": 0,
    "direction": "상향",
    "note": "전망치가 오르는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2026-12-31",
        "epsAvg": 1.6027,
        "epsHigh": 1.75,
        "epsLow": 1.29,
        "analystCount": 29.0,
        "revenueAvg": 8188880520.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 2.3142,
        "epsHigh": 2.9,
        "epsLow": 1.59,
        "analystCount": 29.0,
        "revenueAvg": 12175359690.0
      }
    ],
    "updatedAt": "2026-09-07T08:01:48"
  },
  "NVDA": {
    "symbol": "NVDA",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2028-01-31",
    "analystCount": 52.0,
    "epsNow": 15.4043,
    "eps7d": 13.041,
    "eps30d": 12.8362,
    "eps60d": 12.7102,
    "eps90d": 12.6011,
    "change30dPct": 20.01,
    "change90dPct": 22.25,
    "revisionUp30": 4,
    "revisionDown30": 0,
    "revisionUp7": 2,
    "revisionDown7": 0,
    "direction": "상향",
    "note": "전망치가 오르는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2027-01-31",
        "epsAvg": 9.2944,
        "epsHigh": 9.71,
        "epsLow": 9.01,
        "analystCount": 46.0,
        "revenueAvg": 411247376950.0
      },
      {
        "label": "다음 회계연도",
        "date": "2028-01-31",
        "epsAvg": 15.4043,
        "epsHigh": 18.746,
        "epsLow": 9.8,
        "analystCount": 52.0,
        "revenueAvg": 671662242590.0
      }
    ],
    "updatedAt": "2026-09-07T08:02:01"
  },
  "AMD": {
    "symbol": "AMD",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 47.0,
    "epsNow": 15.4507,
    "eps7d": 15.478,
    "eps30d": 13.7777,
    "eps60d": 13.1682,
    "eps90d": 12.9595,
    "change30dPct": 12.14,
    "change90dPct": 19.22,
    "revisionUp30": 33,
    "revisionDown30": 2,
    "revisionUp7": 29,
    "revisionDown7": 0,
    "direction": "상향",
    "note": "전망치가 오르는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2026-12-31",
        "epsAvg": 7.5679,
        "epsHigh": 8.2,
        "epsLow": 7.0,
        "analystCount": 47.0,
        "revenueAvg": 50813933620.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 15.4507,
        "epsHigh": 19.96,
        "epsLow": 10.77,
        "analystCount": 47.0,
        "revenueAvg": 87387870460.0
      }
    ],
    "updatedAt": "2026-09-07T08:02:15"
  },
  "AVGO": {
    "symbol": "AVGO",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-10-31",
    "analystCount": 46.0,
    "epsNow": 19.5728,
    "eps7d": 19.5694,
    "eps30d": 19.5823,
    "eps60d": 19.4616,
    "eps90d": 18.4409,
    "change30dPct": -0.05,
    "change90dPct": 6.14,
    "revisionUp30": 3,
    "revisionDown30": 0,
    "revisionUp7": 2,
    "revisionDown7": 0,
    "direction": "상향",
    "note": "전망치가 오르는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2026-10-31",
        "epsAvg": 11.6308,
        "epsHigh": 12.1445,
        "epsLow": 11.16,
        "analystCount": 45.0,
        "revenueAvg": 105907145900.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-10-31",
        "epsAvg": 19.5728,
        "epsHigh": 22.0118,
        "epsLow": 16.22,
        "analystCount": 46.0,
        "revenueAvg": 173432879390.0
      }
    ],
    "updatedAt": "2026-09-07T08:02:29"
  },
  "QCOM": {
    "symbol": "QCOM",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-09-30",
    "analystCount": 34.0,
    "epsNow": 10.202,
    "eps7d": 10.2878,
    "eps30d": 11.0432,
    "eps60d": 10.6672,
    "eps90d": 10.6362,
    "change30dPct": -7.62,
    "change90dPct": -4.08,
    "revisionUp30": 3,
    "revisionDown30": 26,
    "revisionUp7": 1,
    "revisionDown7": 0,
    "direction": "하향",
    "note": "전망치가 내려가는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2026-09-30",
        "epsAvg": 10.523,
        "epsHigh": 10.61,
        "epsLow": 10.44,
        "analystCount": 30.0,
        "revenueAvg": 42951447040.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-09-30",
        "epsAvg": 10.202,
        "epsHigh": 12.24,
        "epsLow": 8.83,
        "analystCount": 34.0,
        "revenueAvg": 44809220420.0
      }
    ],
    "updatedAt": "2026-09-07T08:02:43"
  },
  "ARM": {
    "symbol": "ARM",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2028-03-31",
    "analystCount": 39.0,
    "epsNow": 3.0608,
    "eps7d": 3.0582,
    "eps30d": 3.0759,
    "eps60d": 3.0864,
    "eps90d": 3.0552,
    "change30dPct": -0.49,
    "change90dPct": 0.18,
    "revisionUp30": 12,
    "revisionDown30": 14,
    "revisionUp7": 15,
    "revisionDown7": 0,
    "direction": "보합",
    "note": "거의 변화 없음",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2027-03-31",
        "epsAvg": 2.2286,
        "epsHigh": 2.42,
        "epsLow": 2.06,
        "analystCount": 38.0,
        "revenueAvg": 6049280780.0
      },
      {
        "label": "다음 회계연도",
        "date": "2028-03-31",
        "epsAvg": 3.0608,
        "epsHigh": 3.69,
        "epsLow": 2.596,
        "analystCount": 39.0,
        "revenueAvg": 8211575129.0
      }
    ],
    "updatedAt": "2026-09-07T08:02:56"
  },
  "MRVL": {
    "symbol": "MRVL",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2028-01-31",
    "analystCount": 40.0,
    "epsNow": 6.7159,
    "eps7d": 6.3154,
    "eps30d": 6.2409,
    "eps60d": 6.1779,
    "eps90d": 6.1726,
    "change30dPct": 7.61,
    "change90dPct": 8.8,
    "revisionUp30": 4,
    "revisionDown30": 0,
    "revisionUp7": 2,
    "revisionDown7": 0,
    "direction": "상향",
    "note": "전망치가 오르는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2027-01-31",
        "epsAvg": 4.1974,
        "epsHigh": 4.3368,
        "epsLow": 3.92,
        "analystCount": 35.0,
        "revenueAvg": 12039101480.0
      },
      {
        "label": "다음 회계연도",
        "date": "2028-01-31",
        "epsAvg": 6.7159,
        "epsHigh": 7.89,
        "epsLow": 5.65,
        "analystCount": 40.0,
        "revenueAvg": 18217155410.0
      }
    ],
    "updatedAt": "2026-09-07T08:03:09"
  },
  "INTC": {
    "symbol": "INTC",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 44.0,
    "epsNow": 2.0422,
    "eps7d": 2.0401,
    "eps30d": 2.026,
    "eps60d": 1.5384,
    "eps90d": 1.5518,
    "change30dPct": 0.8,
    "change90dPct": 31.6,
    "revisionUp30": 33,
    "revisionDown30": 0,
    "revisionUp7": 1,
    "revisionDown7": 0,
    "direction": "상향",
    "note": "전망치가 오르는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2026-12-31",
        "epsAvg": 1.5145,
        "epsHigh": 1.69,
        "epsLow": 1.12,
        "analystCount": 38.0,
        "revenueAvg": 63033331360.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 2.0422,
        "epsHigh": 3.44,
        "epsLow": 1.15,
        "analystCount": 44.0,
        "revenueAvg": 71406353990.0
      }
    ],
    "updatedAt": "2026-09-07T08:03:23"
  },
  "TSM": {
    "symbol": "TSM",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 13.0,
    "epsNow": 21.8612,
    "eps7d": 21.7813,
    "eps30d": 21.6081,
    "eps60d": 20.296,
    "eps90d": 19.5236,
    "change30dPct": 1.17,
    "change90dPct": 11.97,
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
        "epsAvg": 16.9113,
        "epsHigh": 17.8,
        "epsLow": 15.23,
        "analystCount": 13.0,
        "revenueAvg": 5435232994770.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 21.8612,
        "epsHigh": 24.1,
        "epsLow": 19.58,
        "analystCount": 13.0,
        "revenueAvg": 7294166212770.0
      }
    ],
    "updatedAt": "2026-09-07T08:03:37"
  },
  "ASML": {
    "symbol": "ASML",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 33.0,
    "epsNow": 51.7026,
    "eps7d": 51.6893,
    "eps30d": 51.0879,
    "eps60d": 43.1879,
    "eps90d": 41.3847,
    "change30dPct": 1.2,
    "change90dPct": 24.93,
    "revisionUp30": 28,
    "revisionDown30": 0,
    "revisionUp7": 1,
    "revisionDown7": 0,
    "direction": "상향",
    "note": "전망치가 오르는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2026-12-31",
        "epsAvg": 38.1899,
        "epsHigh": 40.4191,
        "epsLow": 31.81,
        "analystCount": 32.0,
        "revenueAvg": 42820184870.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 51.7026,
        "epsHigh": 59.1013,
        "epsLow": 37.43,
        "analystCount": 33.0,
        "revenueAvg": 54453123450.0
      }
    ],
    "updatedAt": "2026-09-07T08:03:50"
  },
  "AMAT": {
    "symbol": "AMAT",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-10-31",
    "analystCount": 34.0,
    "epsNow": 18.4608,
    "eps7d": 18.3939,
    "eps30d": 16.9044,
    "eps60d": 16.4041,
    "eps90d": 16.159,
    "change30dPct": 9.21,
    "change90dPct": 14.24,
    "revisionUp30": 9,
    "revisionDown30": 0,
    "revisionUp7": 3,
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
        "revenueAvg": 34253794759.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-10-31",
        "epsAvg": 18.4608,
        "epsHigh": 21.77,
        "epsLow": 16.02,
        "analystCount": 34.0,
        "revenueAvg": 46131704860.0
      }
    ],
    "updatedAt": "2026-09-07T08:04:04"
  },
  "LRCX": {
    "symbol": "LRCX",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2028-06-30",
    "analystCount": 26.0,
    "epsNow": 11.5726,
    "eps7d": 11.5571,
    "eps30d": 11.575,
    "eps60d": 9.9091,
    "eps90d": 9.6369,
    "change30dPct": -0.02,
    "change90dPct": 20.09,
    "revisionUp30": 17,
    "revisionDown30": 1,
    "revisionUp7": 17,
    "revisionDown7": 0,
    "direction": "상향",
    "note": "전망치가 오르는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2027-06-30",
        "epsAvg": 9.4626,
        "epsHigh": 10.82,
        "epsLow": 8.44,
        "analystCount": 29.0,
        "revenueAvg": 34801794020.0
      },
      {
        "label": "다음 회계연도",
        "date": "2028-06-30",
        "epsAvg": 11.5726,
        "epsHigh": 15.12,
        "epsLow": 8.96,
        "analystCount": 26.0,
        "revenueAvg": 40701347040.0
      }
    ],
    "updatedAt": "2026-09-07T08:04:17"
  },
  "KLAC": {
    "symbol": "KLAC",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2028-06-30",
    "analystCount": 22.0,
    "epsNow": 6.6895,
    "eps7d": 6.6038,
    "eps30d": 6.5493,
    "eps60d": 6.105,
    "eps90d": 5.9138,
    "change30dPct": 2.14,
    "change90dPct": 13.12,
    "revisionUp30": 11,
    "revisionDown30": 1,
    "revisionUp7": 11,
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
    "updatedAt": "2026-09-07T08:04:31"
  },
  "MU": {
    "symbol": "MU",
    "targetLabel": "현재 회계연도",
    "fiscalDate": "2027-08-31",
    "analystCount": 39.0,
    "epsNow": 155.0252,
    "eps7d": 154.8896,
    "eps30d": 153.3171,
    "eps60d": 118.9463,
    "eps90d": 102.7224,
    "change30dPct": 1.11,
    "change90dPct": 50.92,
    "revisionUp30": 5,
    "revisionDown30": 1,
    "revisionUp7": 0,
    "revisionDown7": 0,
    "direction": "상향",
    "note": "전망치가 오르는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2027-08-31",
        "epsAvg": 155.0252,
        "epsHigh": 221.27,
        "epsLow": 106.89,
        "analystCount": 39.0,
        "revenueAvg": 240323154000.0
      }
    ],
    "updatedAt": "2026-09-07T08:04:44"
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
    "revisionUp30": 8,
    "revisionDown30": 2,
    "revisionUp7": 4,
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
    "updatedAt": "2026-09-07T08:04:58"
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
        "revenueAvg": 19191868230.0
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
    "updatedAt": "2026-09-07T08:05:11"
  },
  "ANET": {
    "symbol": "ANET",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 28.0,
    "epsNow": 5.1603,
    "eps7d": 5.1596,
    "eps30d": 4.4675,
    "eps60d": 4.4543,
    "eps90d": 4.4495,
    "change30dPct": 15.51,
    "change90dPct": 15.97,
    "revisionUp30": 26,
    "revisionDown30": 0,
    "revisionUp7": 25,
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
        "revenueAvg": 12665972690.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 5.1603,
        "epsHigh": 5.73,
        "epsLow": 4.4,
        "analystCount": 28.0,
        "revenueAvg": 16156129330.0
      }
    ],
    "updatedAt": "2026-09-07T08:05:25"
  }
};
const EPS_DATA_GENERATED_AT = "2026-09-07T08:06:42";
