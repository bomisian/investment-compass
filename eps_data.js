// 자동 생성 파일 - buy_signal_telegram.py가 하루 일부씩 순환 갱신함. 직접 수정하지 마세요.
const EPS_DATA = {
  "MSFT": {
    "symbol": "MSFT",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2028-06-30",
    "analystCount": 33.0,
    "epsNow": 23.6773,
    "eps7d": 23.6473,
    "eps30d": 23.5733,
    "eps60d": 23.4742,
    "eps90d": 22.5874,
    "change30dPct": 0.44,
    "change90dPct": 4.83,
    "revisionUp30": 1,
    "revisionDown30": 1,
    "revisionUp7": 1,
    "revisionDown7": 0,
    "direction": "상향",
    "note": "전망치가 오르는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2027-06-30",
        "epsAvg": 19.7687,
        "epsHigh": 20.7,
        "epsLow": 19.21,
        "analystCount": 34.0,
        "revenueAvg": 391270574280.0
      },
      {
        "label": "다음 회계연도",
        "date": "2028-06-30",
        "epsAvg": 23.6773,
        "epsHigh": 26.0,
        "epsLow": 22.08,
        "analystCount": 33.0,
        "revenueAvg": 467954706440.0
      }
    ],
    "updatedAt": "2026-10-15T14:41:08"
  },
  "GOOGL": {
    "symbol": "GOOGL",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 53.0,
    "epsNow": 14.9724,
    "eps7d": 14.9532,
    "eps30d": 14.8798,
    "eps60d": 14.7698,
    "eps90d": 14.558,
    "change30dPct": 0.62,
    "change90dPct": 2.85,
    "revisionUp30": 7,
    "revisionDown30": 1,
    "revisionUp7": 2,
    "revisionDown7": 0,
    "direction": "상향",
    "note": "전망치가 오르는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2026-12-31",
        "epsAvg": 20.6289,
        "epsHigh": 21.92,
        "epsLow": 19.89,
        "analystCount": 53.0,
        "revenueAvg": 498741458330.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 14.9724,
        "epsHigh": 17.2139,
        "epsLow": 13.67,
        "analystCount": 53.0,
        "revenueAvg": 614952947060.0
      }
    ],
    "updatedAt": "2026-10-15T14:41:22"
  },
  "AMZN": {
    "symbol": "AMZN",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 53.0,
    "epsNow": 10.5269,
    "eps7d": 10.5149,
    "eps30d": 10.5022,
    "eps60d": 10.4947,
    "eps90d": 9.9849,
    "change30dPct": 0.24,
    "change90dPct": 5.43,
    "revisionUp30": 4,
    "revisionDown30": 0,
    "revisionUp7": 2,
    "revisionDown7": 0,
    "direction": "상향",
    "note": "전망치가 오르는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2026-12-31",
        "epsAvg": 12.8923,
        "epsHigh": 13.51,
        "epsLow": 12.16,
        "analystCount": 51.0,
        "revenueAvg": 828434090930.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 10.5269,
        "epsHigh": 15.0435,
        "epsLow": 8.73,
        "analystCount": 53.0,
        "revenueAvg": 948441647250.0
      }
    ],
    "updatedAt": "2026-10-15T14:41:35"
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
    "revisionUp30": 3,
    "revisionDown30": 6,
    "revisionUp7": 5,
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
        "revenueAvg": 306548055180.0
      }
    ],
    "updatedAt": "2026-10-15T14:41:49"
  },
  "AAPL": {
    "symbol": "AAPL",
    "targetLabel": "현재 회계연도",
    "fiscalDate": "2027-09-30",
    "analystCount": 40.0,
    "epsNow": 9.5804,
    "eps7d": 9.5758,
    "eps30d": 9.5713,
    "eps60d": 9.5535,
    "eps90d": 9.6826,
    "change30dPct": 0.1,
    "change90dPct": -1.06,
    "revisionUp30": 5,
    "revisionDown30": 3,
    "revisionUp7": 0,
    "revisionDown7": 0,
    "direction": "혼조",
    "note": "숫자 변화와 상·하향 횟수의 방향이 엇갈림",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2027-09-30",
        "epsAvg": 9.5804,
        "epsHigh": 10.67,
        "epsLow": 8.69,
        "analystCount": 40.0,
        "revenueAvg": 528209118860.0
      }
    ],
    "updatedAt": "2026-10-15T14:42:02"
  },
  "TSLA": {
    "symbol": "TSLA",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2027-12-31",
    "analystCount": 31.0,
    "epsNow": 2.1457,
    "eps7d": 2.163,
    "eps30d": 2.1586,
    "eps60d": 2.1633,
    "eps90d": 2.5908,
    "change30dPct": -0.6,
    "change90dPct": -17.18,
    "revisionUp30": 1,
    "revisionDown30": 4,
    "revisionUp7": 1,
    "revisionDown7": 0,
    "direction": "하향",
    "note": "전망치가 내려가는 중",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2026-12-31",
        "epsAvg": 1.7421,
        "epsHigh": 2.39,
        "epsLow": 1.4,
        "analystCount": 33.0,
        "revenueAvg": 106882469590.0
      },
      {
        "label": "다음 회계연도",
        "date": "2027-12-31",
        "epsAvg": 2.1457,
        "epsHigh": 3.65,
        "epsLow": 1.3989,
        "analystCount": 31.0,
        "revenueAvg": 121216265940.0
      }
    ],
    "updatedAt": "2026-10-15T14:42:16"
  },
  "ORCL": {
    "symbol": "ORCL",
    "targetLabel": "다음 회계연도",
    "fiscalDate": "2028-05-31",
    "analystCount": 39.0,
    "epsNow": 10.999,
    "eps7d": 10.9972,
    "eps30d": 10.9681,
    "eps60d": 10.8902,
    "eps90d": 10.9216,
    "change30dPct": 0.28,
    "change90dPct": 0.71,
    "revisionUp30": 23,
    "revisionDown30": 10,
    "revisionUp7": 21,
    "revisionDown7": 0,
    "direction": "보합",
    "note": "거의 변화 없음",
    "fiscalYears": [
      {
        "label": "현재 회계연도",
        "date": "2027-05-31",
        "epsAvg": 8.1406,
        "epsHigh": 8.37,
        "epsLow": 8.07,
        "analystCount": 37.0,
        "revenueAvg": 90424117580.0
      },
      {
        "label": "다음 회계연도",
        "date": "2028-05-31",
        "epsAvg": 10.999,
        "epsHigh": 13.3,
        "epsLow": 9.0,
        "analystCount": 39.0,
        "revenueAvg": 131711631839.0
      }
    ],
    "updatedAt": "2026-10-15T14:42:30"
  }
};
const EPS_DATA_GENERATED_AT = "2026-10-15T14:58:41";
