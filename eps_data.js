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
    "updatedAt": "2026-09-04T15:38:00"
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
    "updatedAt": "2026-09-04T15:37:46"
  },
  "AMZN": {
    "symbol": "AMZN",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 53.0,
    "epsNow": 10.4821,
    "eps7d": 10.4838,
    "eps30d": 9.9886,
    "eps60d": 9.9563,
    "eps90d": 9.8494,
    "change30dPct": 4.94,
    "change90dPct": 6.42,
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
        "epsAvg": 12.4927,
        "epsHigh": 13.51,
        "epsLow": 8.29,
        "analystCount": 53.0,
        "revenueAvg": 828185897360.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 10.4821,
        "epsHigh": 15.0435,
        "epsLow": 8.695,
        "analystCount": 53.0,
        "revenueAvg": 946577158660.0
      }
    ],
    "updatedAt": "2026-09-04T15:37:33"
  },
  "META": {
    "symbol": "META",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 52.0,
    "epsNow": 33.8919,
    "eps7d": 33.948,
    "eps30d": 34.9493,
    "eps60d": 34.9236,
    "eps90d": 34.7544,
    "change30dPct": -3.03,
    "change90dPct": -2.48,
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
        "epsAvg": 31.7221,
        "epsHigh": 33.65,
        "epsLow": 29.32,
        "analystCount": 53.0,
        "revenueAvg": 254185499680.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 33.8919,
        "epsHigh": 40.3149,
        "epsLow": 27.93,
        "analystCount": 52.0,
        "revenueAvg": 305390799590.0
      }
    ],
    "updatedAt": "2026-09-04T15:37:19"
  },
  "AAPL": {
    "symbol": "AAPL",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-09-30",
    "analystCount": 39.0,
    "epsNow": 9.5313,
    "eps7d": 9.5395,
    "eps30d": 9.7111,
    "eps60d": 9.6743,
    "eps90d": 9.651,
    "change30dPct": -1.85,
    "change90dPct": -1.24,
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
        "revenueAvg": 477683718840.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-09-30",
        "epsAvg": 9.5313,
        "epsHigh": 10.67,
        "epsLow": 8.24,
        "analystCount": 39.0,
        "revenueAvg": 525003468150.0
      }
    ],
    "updatedAt": "2026-09-04T15:37:05"
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
    "updatedAt": "2026-09-04T15:36:52"
  },
  "ORCL": {
    "symbol": "ORCL",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2028-05-31",
    "analystCount": 40.0,
    "epsNow": 10.9261,
    "eps7d": 10.9149,
    "eps30d": 10.8902,
    "eps60d": 10.9191,
    "eps90d": 10.711,
    "change30dPct": 0.33,
    "change90dPct": 2.01,
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
    "updatedAt": "2026-09-04T15:36:38"
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
    "updatedAt": "2026-09-04T15:36:24"
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
    "updatedAt": "2026-09-04T15:36:10"
  },
  "NVDA": {
    "symbol": "NVDA",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2028-01-31",
    "analystCount": 51.0,
    "epsNow": 13.1277,
    "eps7d": 12.8804,
    "eps30d": 12.8148,
    "eps60d": 12.6737,
    "eps90d": 12.6011,
    "change30dPct": 2.44,
    "change90dPct": 4.18,
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
        "epsAvg": 9.0516,
        "epsHigh": 11.12,
        "epsLow": 8.2,
        "analystCount": 49.0,
        "revenueAvg": 397012036470.0
      },
      {
        "label": "다음 회계연도",
        "date": "2028-01-31",
        "epsAvg": 13.1277,
        "epsHigh": 19.1,
        "epsLow": 9.65,
        "analystCount": 51.0,
        "revenueAvg": 573640800830.0
      }
    ],
    "updatedAt": "2026-09-04T15:35:57"
  },
  "AMD": {
    "symbol": "AMD",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 47.0,
    "epsNow": 15.4507,
    "eps7d": 15.4597,
    "eps30d": 13.7104,
    "eps60d": 13.1682,
    "eps90d": 12.9595,
    "change30dPct": 12.69,
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
    "updatedAt": "2026-09-04T15:35:43"
  },
  "AVGO": {
    "symbol": "AVGO",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-10-31",
    "analystCount": 46.0,
    "epsNow": 19.5323,
    "eps7d": 19.5307,
    "eps30d": 19.4169,
    "eps60d": 19.385,
    "eps90d": 18.2181,
    "change30dPct": 0.59,
    "change90dPct": 7.21,
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
        "epsAvg": 11.626,
        "epsHigh": 12.1445,
        "epsLow": 11.16,
        "analystCount": 44.0,
        "revenueAvg": 106039607190.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-10-31",
        "epsAvg": 19.5323,
        "epsHigh": 22.0118,
        "epsLow": 16.22,
        "analystCount": 46.0,
        "revenueAvg": 173568612290.0
      }
    ],
    "updatedAt": "2026-09-04T15:35:29"
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
    "updatedAt": "2026-09-04T15:35:16"
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
    "updatedAt": "2026-09-04T15:35:02"
  },
  "MRVL": {
    "symbol": "MRVL",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2028-01-31",
    "analystCount": 39.0,
    "epsNow": 6.249,
    "eps7d": 6.2425,
    "eps30d": 6.2212,
    "eps60d": 6.1739,
    "eps90d": 5.4545,
    "change30dPct": 0.45,
    "change90dPct": 14.57,
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
        "epsAvg": 4.0541,
        "epsHigh": 4.1966,
        "epsLow": 3.81,
        "analystCount": 38.0,
        "revenueAvg": 11545115670.0
      },
      {
        "label": "다음 회계연도",
        "date": "2028-01-31",
        "epsAvg": 6.249,
        "epsHigh": 7.89,
        "epsLow": 5.34,
        "analystCount": 39.0,
        "revenueAvg": 16766845310.0
      }
    ],
    "updatedAt": "2026-09-04T15:34:48"
  },
  "INTC": {
    "symbol": "INTC",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 44.0,
    "epsNow": 2.0401,
    "eps7d": 2.031,
    "eps30d": 1.5581,
    "eps60d": 1.5201,
    "eps90d": 1.5102,
    "change30dPct": 30.94,
    "change90dPct": 35.09,
    "revisionUp30": 32,
    "revisionDown30": 0,
    "revisionUp7": 1,
    "revisionDown7": 0,
    "direction": "상향",
    "note": "전망치가 오르는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2026-12-31",
        "epsAvg": 1.5129,
        "epsHigh": 1.69,
        "epsLow": 1.12,
        "analystCount": 38.0,
        "revenueAvg": 62993527030.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 2.0401,
        "epsHigh": 3.44,
        "epsLow": 1.15,
        "analystCount": 44.0,
        "revenueAvg": 71220796210.0
      }
    ],
    "updatedAt": "2026-09-04T15:34:35"
  },
  "TSM": {
    "symbol": "TSM",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 12.0,
    "epsNow": 21.7813,
    "eps7d": 21.6081,
    "eps30d": 20.2981,
    "eps60d": 19.5357,
    "eps90d": 19.299,
    "change30dPct": 7.31,
    "change90dPct": 12.86,
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
        "epsAvg": 16.8981,
        "epsHigh": 17.8,
        "epsLow": 15.23,
        "analystCount": 12.0,
        "revenueAvg": 5435176569510.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 21.7813,
        "epsHigh": 24.1,
        "epsLow": 19.58,
        "analystCount": 12.0,
        "revenueAvg": 7291242192840.0
      }
    ],
    "updatedAt": "2026-09-03T19:16:15"
  },
  "ASML": {
    "symbol": "ASML",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 33.0,
    "epsNow": 51.6893,
    "eps7d": 51.4246,
    "eps30d": 50.3845,
    "eps60d": 41.8256,
    "eps90d": 40.9227,
    "change30dPct": 2.59,
    "change90dPct": 26.31,
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
        "revenueAvg": 43311939400.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 51.6893,
        "epsHigh": 59.1013,
        "epsLow": 37.43,
        "analystCount": 33.0,
        "revenueAvg": 54440458860.0
      }
    ],
    "updatedAt": "2026-09-03T19:16:01"
  },
  "AMAT": {
    "symbol": "AMAT",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-10-31",
    "analystCount": 34.0,
    "epsNow": 18.2662,
    "eps7d": 17.0877,
    "eps30d": 16.7456,
    "eps60d": 16.264,
    "eps90d": 16.0419,
    "change30dPct": 9.08,
    "change90dPct": 13.87,
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
        "epsAvg": 12.786,
        "epsHigh": 12.98,
        "epsLow": 12.53,
        "analystCount": 27.0,
        "revenueAvg": 34177828999.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-10-31",
        "epsAvg": 18.2662,
        "epsHigh": 21.77,
        "epsLow": 15.29,
        "analystCount": 34.0,
        "revenueAvg": 45871276040.0
      }
    ],
    "updatedAt": "2026-09-03T19:15:48"
  },
  "LRCX": {
    "symbol": "LRCX",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2028-06-30",
    "analystCount": 26.0,
    "epsNow": 11.5571,
    "eps7d": 11.5252,
    "eps30d": 9.9629,
    "eps60d": 9.6604,
    "eps90d": 9.5483,
    "change30dPct": 16.0,
    "change90dPct": 21.04,
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
        "epsAvg": 9.4597,
        "epsHigh": 10.82,
        "epsLow": 8.44,
        "analystCount": 29.0,
        "revenueAvg": 34792865450.0
      },
      {
        "label": "다음 회계연도",
        "date": "2028-06-30",
        "epsAvg": 11.5571,
        "epsHigh": 15.12,
        "epsLow": 8.96,
        "analystCount": 26.0,
        "revenueAvg": 40657116270.0
      }
    ],
    "updatedAt": "2026-09-03T19:15:34"
  },
  "KLAC": {
    "symbol": "KLAC",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2028-06-30",
    "analystCount": 22.0,
    "epsNow": 6.6748,
    "eps7d": 6.6038,
    "eps30d": 6.2775,
    "eps60d": 6.0004,
    "eps90d": 5.9138,
    "change30dPct": 6.33,
    "change90dPct": 12.87,
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
        "epsAvg": 5.4493,
        "epsHigh": 5.86,
        "epsLow": 5.05,
        "analystCount": 24.0,
        "revenueAvg": 18099628000.0
      },
      {
        "label": "다음 회계연도",
        "date": "2028-06-30",
        "epsAvg": 6.6748,
        "epsHigh": 7.6265,
        "epsLow": 5.81,
        "analystCount": 22.0,
        "revenueAvg": 21338975160.0
      }
    ],
    "updatedAt": "2026-09-02T23:04:47"
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
    "updatedAt": "2026-09-02T23:04:33"
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
    "updatedAt": "2026-09-02T23:04:19"
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
    "updatedAt": "2026-09-02T23:04:06"
  },
  "ANET": {
    "symbol": "ANET",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 27.0,
    "epsNow": 5.1596,
    "eps7d": 5.1596,
    "eps30d": 4.4675,
    "eps60d": 4.4545,
    "eps90d": 4.4495,
    "change30dPct": 15.49,
    "change90dPct": 15.96,
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
        "epsAvg": 4.113,
        "epsHigh": 4.22,
        "epsLow": 4.05,
        "analystCount": 26.0,
        "revenueAvg": 12667530860.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 5.1596,
        "epsHigh": 5.73,
        "epsLow": 4.4,
        "analystCount": 27.0,
        "revenueAvg": 16156985450.0
      }
    ],
    "updatedAt": "2026-09-02T23:03:52"
  },
  "COHR": {
    "symbol": "COHR",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2028-06-30",
    "analystCount": 18.0,
    "epsNow": 13.9489,
    "eps7d": 13.2144,
    "eps30d": 13.0144,
    "eps60d": 12.5157,
    "eps90d": 12.2363,
    "change30dPct": 7.18,
    "change90dPct": 14.0,
    "revisionUp30": 6,
    "revisionDown30": 0,
    "revisionUp7": 3,
    "revisionDown7": 0,
    "direction": "상향",
    "note": "전망치가 오르는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2027-06-30",
        "epsAvg": 9.4061,
        "epsHigh": 10.26,
        "epsLow": 8.26,
        "analystCount": 21.0,
        "revenueAvg": 10682807980.0
      },
      {
        "label": "다음 회계연도",
        "date": "2028-06-30",
        "epsAvg": 13.9489,
        "epsHigh": 16.61,
        "epsLow": 11.38,
        "analystCount": 18.0,
        "revenueAvg": 14688221450.0
      }
    ],
    "updatedAt": "2026-09-02T23:03:39"
  },
  "LITE": {
    "symbol": "LITE",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2028-06-30",
    "analystCount": 16.0,
    "epsNow": 29.8492,
    "eps7d": 28.8063,
    "eps30d": 28.2791,
    "eps60d": 28.1237,
    "eps90d": 27.9228,
    "change30dPct": 5.55,
    "change90dPct": 6.9,
    "revisionUp30": 6,
    "revisionDown30": 0,
    "revisionUp7": 4,
    "revisionDown7": 0,
    "direction": "상향",
    "note": "전망치가 오르는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2027-06-30",
        "epsAvg": 18.7345,
        "epsHigh": 23.84,
        "epsLow": 14.93,
        "analystCount": 24.0,
        "revenueAvg": 5693190710.0
      },
      {
        "label": "다음 회계연도",
        "date": "2028-06-30",
        "epsAvg": 29.8492,
        "epsHigh": 33.8142,
        "epsLow": 21.74,
        "analystCount": 16.0,
        "revenueAvg": 8717953870.0
      }
    ],
    "updatedAt": "2026-09-02T23:03:25"
  },
  "GEV": {
    "symbol": "GEV",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 27.0,
    "epsNow": 24.7433,
    "eps7d": 24.8662,
    "eps30d": 24.4648,
    "eps60d": 24.3641,
    "eps90d": 24.2336,
    "change30dPct": 1.14,
    "change90dPct": 2.1,
    "revisionUp30": 18,
    "revisionDown30": 3,
    "revisionUp7": 1,
    "revisionDown7": 0,
    "direction": "상향",
    "note": "전망치가 오르는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2026-12-31",
        "epsAvg": 30.786,
        "epsHigh": 33.23,
        "epsLow": 26.83,
        "analystCount": 20.0,
        "revenueAvg": 46207611420.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 24.7433,
        "epsHigh": 29.49,
        "epsLow": 17.16,
        "analystCount": 27.0,
        "revenueAvg": 52634250860.0
      }
    ],
    "updatedAt": "2026-09-02T23:03:12"
  },
  "CEG": {
    "symbol": "CEG",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 20.0,
    "epsNow": 13.3417,
    "eps7d": 13.3432,
    "eps30d": 13.6045,
    "eps60d": 13.5239,
    "eps90d": 13.5912,
    "change30dPct": -1.93,
    "change90dPct": -1.84,
    "revisionUp30": 4,
    "revisionDown30": 8,
    "revisionUp7": 2,
    "revisionDown7": 0,
    "direction": "하향",
    "note": "전망치가 내려가는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2026-12-31",
        "epsAvg": 12.1178,
        "epsHigh": 12.4521,
        "epsLow": 11.77,
        "analystCount": 17.0,
        "revenueAvg": 35127500850.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 13.3417,
        "epsHigh": 14.7914,
        "epsLow": 12.5,
        "analystCount": 20.0,
        "revenueAvg": 36397151150.0
      }
    ],
    "updatedAt": "2026-09-02T23:02:59"
  },
  "VST": {
    "symbol": "VST",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 10.0,
    "epsNow": 10.3461,
    "eps7d": 10.5324,
    "eps30d": 11.2849,
    "eps60d": 11.3019,
    "eps90d": 10.891,
    "change30dPct": -8.32,
    "change90dPct": -5.0,
    "revisionUp30": 0,
    "revisionDown30": 6,
    "revisionUp7": 2,
    "revisionDown7": 0,
    "direction": "하향",
    "note": "전망치가 내려가는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2026-12-31",
        "epsAvg": 9.5863,
        "epsHigh": 10.65,
        "epsLow": 8.915,
        "analystCount": 9.0,
        "revenueAvg": 22828866860.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 10.3461,
        "epsHigh": 12.64,
        "epsLow": 8.77,
        "analystCount": 10.0,
        "revenueAvg": 23965024840.0
      }
    ],
    "updatedAt": "2026-09-02T23:02:45"
  },
  "ETN": {
    "symbol": "ETN",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 22.0,
    "epsNow": 16.0337,
    "eps7d": 16.0219,
    "eps30d": 15.7762,
    "eps60d": 15.7217,
    "eps90d": 15.7144,
    "change30dPct": 1.63,
    "change90dPct": 2.03,
    "revisionUp30": 15,
    "revisionDown30": 2,
    "revisionUp7": 16,
    "revisionDown7": 0,
    "direction": "상향",
    "note": "전망치가 오르는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2026-12-31",
        "epsAvg": 13.5152,
        "epsHigh": 13.7003,
        "epsLow": 13.25,
        "analystCount": 24.0,
        "revenueAvg": 32754468680.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 16.0337,
        "epsHigh": 17.3028,
        "epsLow": 15.0,
        "analystCount": 22.0,
        "revenueAvg": 36521104810.0
      }
    ],
    "updatedAt": "2026-09-02T23:02:31"
  },
  "PWR": {
    "symbol": "PWR",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 25.0,
    "epsNow": 19.6413,
    "eps7d": 19.1193,
    "eps30d": 16.4719,
    "eps60d": 16.4603,
    "eps90d": 16.4051,
    "change30dPct": 19.24,
    "change90dPct": 19.73,
    "revisionUp30": 21,
    "revisionDown30": 0,
    "revisionUp7": 6,
    "revisionDown7": 0,
    "direction": "상향",
    "note": "전망치가 오르는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2026-12-31",
        "epsAvg": 16.7278,
        "epsHigh": 17.11,
        "epsLow": 16.05,
        "analystCount": 24.0,
        "revenueAvg": 39590244570.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 19.6413,
        "epsHigh": 22.02,
        "epsLow": 17.0,
        "analystCount": 25.0,
        "revenueAvg": 45420715130.0
      }
    ],
    "updatedAt": "2026-09-02T23:02:18"
  },
  "HUBB": {
    "symbol": "HUBB",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 11.0,
    "epsNow": 22.878,
    "eps7d": 22.8712,
    "eps30d": 22.4209,
    "eps60d": 22.4515,
    "eps90d": 21.7533,
    "change30dPct": 2.04,
    "change90dPct": 5.17,
    "revisionUp30": 2,
    "revisionDown30": 0,
    "revisionUp7": 7,
    "revisionDown7": 0,
    "direction": "상향",
    "note": "전망치가 오르는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2026-12-31",
        "epsAvg": 20.4578,
        "epsHigh": 20.74,
        "epsLow": 20.304,
        "analystCount": 11.0,
        "revenueAvg": 6868127530.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 22.878,
        "epsHigh": 24.32,
        "epsLow": 22.0824,
        "analystCount": 11.0,
        "revenueAvg": 7555899440.0
      }
    ],
    "updatedAt": "2026-09-02T23:02:04"
  },
  "VRT": {
    "symbol": "VRT",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 28.0,
    "epsNow": 9.0988,
    "eps7d": 9.0988,
    "eps30d": 8.8279,
    "eps60d": 8.8037,
    "eps90d": 8.8308,
    "change30dPct": 3.07,
    "change90dPct": 3.03,
    "revisionUp30": 19,
    "revisionDown30": 4,
    "revisionUp7": 16,
    "revisionDown7": 0,
    "direction": "상향",
    "note": "전망치가 오르는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2026-12-31",
        "epsAvg": 6.7076,
        "epsHigh": 6.91,
        "epsLow": 6.4,
        "analystCount": 28.0,
        "revenueAvg": 14016338910.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 9.0988,
        "epsHigh": 10.94,
        "epsLow": 8.28,
        "analystCount": 28.0,
        "revenueAvg": 18150291710.0
      }
    ],
    "updatedAt": "2026-09-02T23:01:51"
  },
  "MOD": {
    "symbol": "MOD",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2028-03-31",
    "analystCount": 7.0,
    "epsNow": 11.1821,
    "eps7d": 11.3265,
    "eps30d": 11.3636,
    "eps60d": 11.3488,
    "eps90d": 10.1659,
    "change30dPct": -1.6,
    "change90dPct": 10.0,
    "revisionUp30": 2,
    "revisionDown30": 3,
    "revisionUp7": 2,
    "revisionDown7": 0,
    "direction": "혼조",
    "note": "숫자 변화와 상·하향 횟수의 방향이 엇갈림",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2027-03-31",
        "epsAvg": 7.6441,
        "epsHigh": 8.26,
        "epsLow": 6.99,
        "analystCount": 8.0,
        "revenueAvg": 4062548340.0
      },
      {
        "label": "다음 회계연도",
        "date": "2028-03-31",
        "epsAvg": 11.1821,
        "epsHigh": 12.25,
        "epsLow": 9.18,
        "analystCount": 7.0,
        "revenueAvg": 5050269240.0
      }
    ],
    "updatedAt": "2026-09-02T23:01:37"
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
    "updatedAt": "2026-09-02T23:01:24"
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
    "eps90d": 32.4289,
    "change30dPct": 11.61,
    "change90dPct": 13.32,
    "revisionUp30": 10,
    "revisionDown30": 0,
    "revisionUp7": 9,
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
    "updatedAt": "2026-09-02T23:01:10"
  },
  "FIX": {
    "symbol": "FIX",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 10.0,
    "epsNow": 60.1785,
    "eps7d": 60.0428,
    "eps30d": 54.1692,
    "eps60d": 53.4434,
    "eps90d": 52.3865,
    "change30dPct": 11.09,
    "change90dPct": 14.87,
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
    "updatedAt": "2026-09-02T23:00:56"
  },
  "BE": {
    "symbol": "BE",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 28.0,
    "epsNow": 4.9276,
    "eps7d": 4.8852,
    "eps30d": 4.5455,
    "eps60d": 4.3635,
    "eps90d": 4.3227,
    "change30dPct": 8.41,
    "change90dPct": 13.99,
    "revisionUp30": 19,
    "revisionDown30": 2,
    "revisionUp7": 19,
    "revisionDown7": 0,
    "direction": "상향",
    "note": "전망치가 오르는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2026-12-31",
        "epsAvg": 2.7112,
        "epsHigh": 3.08,
        "epsLow": 2.42,
        "analystCount": 26.0,
        "revenueAvg": 4125862880.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 4.9276,
        "epsHigh": 7.01,
        "epsLow": 2.9548,
        "analystCount": 28.0,
        "revenueAvg": 6812660520.0
      }
    ],
    "updatedAt": "2026-09-02T23:00:43"
  }
};
const EPS_DATA_GENERATED_AT = "2026-09-04T15:38:00";
