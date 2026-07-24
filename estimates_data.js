// 자동 생성 파일 - buy_signal_telegram.py 실행 시마다 갱신됨. 직접 수정하지 마세요.
// Yahoo Finance 애널리스트 컨센서스 - 비로그인 접근 제한으로 조회 실패가 정상일 수 있음.
const ESTIMATES_DATA = {
  "NVDA": {
    "targetMean": 302.82758,
    "targetLow": 180.0,
    "targetHigh": 500.0,
    "analystCount": 58,
    "recommendationMean": 1.29508,
    "recommendationKey": "strong_buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2027-01-31",
        "epsAvg": 8.98854,
        "epsGrowth": 0.8844,
        "revenueAvg": 393599071730,
        "revenueGrowth": 0.82269996,
        "analysts": 50
      },
      {
        "period": "+1y",
        "endDate": "2028-01-31",
        "epsAvg": 12.86903,
        "epsGrowth": 0.4317,
        "revenueAvg": 560745712600,
        "revenueGrowth": 0.42470002,
        "analysts": 50
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 5136305356800,
    "week52High": 236.54,
    "week52Low": 164.07,
    "financialCurrency": "USD",
    "ttmRevenue": 253491003392,
    "ttmNetIncome": 159612993536,
    "_fetched_at": 1784790268.7114766,
    "_updated_label": "2026-07-23 16:04"
  },
  "AAPL": {
    "targetMean": 318.25116,
    "targetLow": 215.0,
    "targetHigh": 400.0,
    "analystCount": 43,
    "recommendationMean": 2.02128,
    "recommendationKey": "buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2026-09-30",
        "epsAvg": 8.7676,
        "epsGrowth": 0.1753,
        "revenueAvg": 478714605930,
        "revenueGrowth": 0.1503,
        "analysts": 41
      },
      {
        "period": "+1y",
        "endDate": "2027-09-30",
        "epsAvg": 9.7111,
        "epsGrowth": 0.1076,
        "revenueAvg": 522949683990,
        "revenueGrowth": 0.0924,
        "analysts": 43
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 4786462654464,
    "week52High": 334.99,
    "week52Low": 201.5,
    "financialCurrency": "USD",
    "ttmRevenue": 451442016256,
    "ttmNetIncome": 122575003648,
    "_fetched_at": 1784790268.7114766,
    "_updated_label": "2026-07-23 16:04"
  },
  "GOOGL": {
    "targetMean": 433.5515,
    "targetLow": 340.0,
    "targetHigh": 515.0,
    "analystCount": 53,
    "recommendationMean": 1.43077,
    "recommendationKey": "strong_buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2026-12-31",
        "epsAvg": 14.26071,
        "epsGrowth": 0.3192,
        "revenueAvg": 489251162790,
        "revenueGrowth": 0.21450001,
        "analysts": 49
      },
      {
        "period": "+1y",
        "endDate": "2027-12-31",
        "epsAvg": 14.70919,
        "epsGrowth": 0.031400003,
        "revenueAvg": 586472921800,
        "revenueGrowth": 0.19870001,
        "analysts": 54
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 4174378172416,
    "week52High": 408.61,
    "week52Low": 187.82,
    "financialCurrency": "USD",
    "ttmRevenue": 422498009088,
    "ttmNetIncome": 160207994880,
    "_fetched_at": 1784790268.7114766,
    "_updated_label": "2026-07-23 16:04"
  },
  "MSFT": {
    "targetMean": 556.7513,
    "targetLow": 400.0,
    "targetHigh": 870.0,
    "analystCount": 55,
    "recommendationMean": 1.32759,
    "recommendationKey": "strong_buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2026-06-30",
        "epsAvg": 16.82922,
        "epsGrowth": 0.2338,
        "revenueAvg": 329553505050,
        "revenueGrowth": 0.1698,
        "analysts": 26
      },
      {
        "period": "+1y",
        "endDate": "2027-06-30",
        "epsAvg": 19.37881,
        "epsGrowth": 0.1515,
        "revenueAvg": 384873662340,
        "revenueGrowth": 0.16790001,
        "analysts": 36
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 2899615154176,
    "week52High": 555.45,
    "week52Low": 349.2,
    "financialCurrency": "USD",
    "ttmRevenue": 318272995328,
    "ttmNetIncome": 125215997952,
    "_fetched_at": 1784790268.7114766,
    "_updated_label": "2026-07-23 16:04"
  },
  "AMZN": {
    "targetMean": 313.1321,
    "targetLow": 207.0,
    "targetHigh": 370.0,
    "analystCount": 62,
    "recommendationMean": 1.33333,
    "recommendationKey": "strong_buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2026-12-31",
        "epsAvg": 8.68495,
        "epsGrowth": 0.21129999,
        "revenueAvg": 823162665250,
        "revenueGrowth": 0.14819999,
        "analysts": 57
      },
      {
        "period": "+1y",
        "endDate": "2027-12-31",
        "epsAvg": 9.90343,
        "epsGrowth": 0.14029999,
        "revenueAvg": 931258041100,
        "revenueGrowth": 0.1313,
        "analysts": 55
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 2633878470656,
    "week52High": 278.56,
    "week52Low": 196.0,
    "financialCurrency": "USD",
    "ttmRevenue": 742775980032,
    "ttmNetIncome": 90797998080,
    "_fetched_at": 1784790268.7114766,
    "_updated_label": "2026-07-23 16:04"
  },
  "TSM": {
    "targetMean": 527.26044,
    "targetLow": 354.0,
    "targetHigh": 700.0,
    "analystCount": 18,
    "recommendationMean": 1.42105,
    "recommendationKey": "strong_buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2026-12-31",
        "epsAvg": 16.70092,
        "epsGrowth": 0.5682,
        "revenueAvg": 5400183301510,
        "revenueGrowth": 0.4177,
        "analysts": 12
      },
      {
        "period": "+1y",
        "endDate": "2027-12-31",
        "epsAvg": 21.29077,
        "epsGrowth": 0.2748,
        "revenueAvg": 7091985680230,
        "revenueGrowth": 0.3133,
        "analysts": 12
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 2184594718720,
    "week52High": 479.0,
    "week52Low": 223.7,
    "financialCurrency": "TWD",
    "ttmRevenue": 4440492343296,
    "ttmNetIncome": 2216808939520,
    "_fetched_at": 1784790268.7114766,
    "_updated_label": "2026-07-23 16:04"
  },
  "AVGO": {
    "targetMean": 525.44,
    "targetLow": 215.88,
    "targetHigh": 675.0,
    "analystCount": 45,
    "recommendationMean": 1.3125,
    "recommendationKey": "strong_buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2026-10-31",
        "epsAvg": 11.62835,
        "epsGrowth": 0.705,
        "revenueAvg": 106049949980,
        "revenueGrowth": 0.66,
        "analysts": 43
      },
      {
        "period": "+1y",
        "endDate": "2027-10-31",
        "epsAvg": 19.46067,
        "epsGrowth": 0.6736,
        "revenueAvg": 172779492500,
        "revenueGrowth": 0.6292,
        "analysts": 45
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 1887855443968,
    "week52High": 495.0,
    "week52Low": 273.0,
    "financialCurrency": "USD",
    "ttmRevenue": 75464998912,
    "ttmNetIncome": 29316999168,
    "_fetched_at": 1784790268.7114766,
    "_updated_label": "2026-07-23 16:04"
  },
  "META": {
    "targetMean": 826.0134,
    "targetLow": 664.46,
    "targetHigh": 1015.0,
    "analystCount": 58,
    "recommendationMean": 1.34921,
    "recommendationKey": "strong_buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2026-12-31",
        "epsAvg": 33.06781,
        "epsGrowth": 0.4077,
        "revenueAvg": 253291977110,
        "revenueGrowth": 0.2604,
        "analysts": 55
      },
      {
        "period": "+1y",
        "endDate": "2027-12-31",
        "epsAvg": 35.16408,
        "epsGrowth": 0.0634,
        "revenueAvg": 304109846720,
        "revenueGrowth": 0.2006,
        "analysts": 54
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 1592022925312,
    "week52High": 796.25,
    "week52Low": 520.26,
    "financialCurrency": "USD",
    "ttmRevenue": 214962995200,
    "ttmNetIncome": 70586998784,
    "_fetched_at": 1784790268.7114766,
    "_updated_label": "2026-07-23 16:04"
  },
  "TSLA": {
    "targetMean": 425.08948,
    "targetLow": 125.0,
    "targetHigh": 600.0,
    "analystCount": 38,
    "recommendationMean": 2.38298,
    "recommendationKey": "buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2026-12-31",
        "epsAvg": 2.13598,
        "epsGrowth": 0.2867,
        "revenueAvg": 104440825230,
        "revenueGrowth": 0.1014,
        "analysts": 35
      },
      {
        "period": "+1y",
        "endDate": "2027-12-31",
        "epsAvg": 2.54861,
        "epsGrowth": 0.19319999,
        "revenueAvg": 119887488700,
        "revenueGrowth": 0.1479,
        "analysts": 30
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 1404678307840,
    "week52High": 498.83,
    "week52Low": 297.82,
    "financialCurrency": "USD",
    "ttmRevenue": 97878999040,
    "ttmNetIncome": 3862000128,
    "_fetched_at": 1784790268.7114766,
    "_updated_label": "2026-07-23 16:04"
  },
  "MU": {
    "targetMean": 1507.381,
    "targetLow": 361.0,
    "targetHigh": 2200.0,
    "analystCount": 42,
    "recommendationMean": 1.42222,
    "recommendationKey": "strong_buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2026-08-31",
        "epsAvg": 73.44403,
        "epsGrowth": 7.8594,
        "revenueAvg": 129779271370,
        "revenueGrowth": 2.4721,
        "analysts": 35
      },
      {
        "period": "+1y",
        "endDate": "2027-08-31",
        "epsAvg": 153.73953,
        "epsGrowth": 1.0933,
        "revenueAvg": 238816685730,
        "revenueGrowth": 0.84019995,
        "analysts": 37
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 1083630092288,
    "week52High": 1255.0,
    "week52Low": 103.38,
    "financialCurrency": "USD",
    "ttmRevenue": 90273996800,
    "ttmNetIncome": 50468999168,
    "_fetched_at": 1784790268.7114766,
    "_updated_label": "2026-07-23 16:04"
  },
  "AMD": {
    "targetMean": 541.65955,
    "targetLow": 320.0,
    "targetHigh": 725.0,
    "analystCount": 47,
    "recommendationMean": 1.4902,
    "recommendationKey": "strong_buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2026-12-31",
        "epsAvg": 7.43322,
        "epsGrowth": 0.7825,
        "revenueAvg": 49648650490,
        "revenueGrowth": 0.43330002,
        "analysts": 46
      },
      {
        "period": "+1y",
        "endDate": "2027-12-31",
        "epsAvg": 13.46474,
        "epsGrowth": 0.8114,
        "revenueAvg": 78148482870,
        "revenueGrowth": 0.574,
        "analysts": 45
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 900629659648,
    "week52High": 584.73,
    "week52Low": 149.22,
    "financialCurrency": "USD",
    "ttmRevenue": 37454000128,
    "ttmNetIncome": 4931999744,
    "_fetched_at": 1784790268.7114766,
    "_updated_label": "2026-07-23 16:04"
  },
  "INTC": {
    "targetMean": 108.625,
    "targetLow": 45.0,
    "targetHigh": 200.0,
    "analystCount": 40,
    "recommendationMean": 2.60417,
    "recommendationKey": "hold",
    "trend": [
      {
        "period": "0y",
        "endDate": "2026-12-31",
        "epsAvg": 1.11912,
        "epsGrowth": 1.6646,
        "revenueAvg": 58987288630,
        "revenueGrowth": 0.1161,
        "analysts": 38
      },
      {
        "period": "+1y",
        "endDate": "2027-12-31",
        "epsAvg": 1.62498,
        "epsGrowth": 0.45200002,
        "revenueAvg": 66421902910,
        "revenueGrowth": 0.126,
        "analysts": 38
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 515768123392,
    "week52High": 142.35,
    "week52Low": 18.97,
    "financialCurrency": "USD",
    "ttmRevenue": 53762998272,
    "ttmNetIncome": -3174000128,
    "_fetched_at": 1784790268.7114766,
    "_updated_label": "2026-07-23 16:04"
  },
  "WMT": {
    "targetMean": 138.2683,
    "targetLow": 81.0,
    "targetHigh": 155.0,
    "analystCount": 41,
    "recommendationMean": 1.53488,
    "recommendationKey": "buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2027-01-31",
        "epsAvg": 2.90302,
        "epsGrowth": 0.0996,
        "revenueAvg": 752171601910,
        "revenueGrowth": 0.0648,
        "analysts": 38
      },
      {
        "period": "+1y",
        "endDate": "2028-01-31",
        "epsAvg": 3.28526,
        "epsGrowth": 0.1317,
        "revenueAvg": 786932679370,
        "revenueGrowth": 0.0462,
        "analysts": 39
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 870056787968,
    "week52High": 135.16,
    "week52Low": 95.29,
    "financialCurrency": "USD",
    "ttmRevenue": 725304999936,
    "ttmNetIncome": 22735998976,
    "_fetched_at": 1784790268.7114766,
    "_updated_label": "2026-07-23 16:04"
  },
  "AMAT": {
    "targetMean": 623.0571,
    "targetLow": 358.0,
    "targetHigh": 900.0,
    "analystCount": 35,
    "recommendationMean": 1.48718,
    "recommendationKey": "strong_buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2026-10-31",
        "epsAvg": 12.26321,
        "epsGrowth": 0.3018,
        "revenueAvg": 33411265789,
        "revenueGrowth": 0.1778,
        "analysts": 34
      },
      {
        "period": "+1y",
        "endDate": "2027-10-31",
        "epsAvg": 16.74562,
        "epsGrowth": 0.3655,
        "revenueAvg": 42593830260,
        "revenueGrowth": 0.2748,
        "analysts": 34
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 439789977600,
    "week52High": 739.67,
    "week52Low": 154.47,
    "financialCurrency": "USD",
    "ttmRevenue": 29024000000,
    "ttmNetIncome": 8508000256,
    "_fetched_at": 1784790268.7114766,
    "_updated_label": "2026-07-23 16:04"
  },
  "QQQ": {
    "targetMean": null,
    "targetLow": null,
    "targetHigh": null,
    "analystCount": null,
    "recommendationMean": null,
    "recommendationKey": null,
    "trend": [],
    "quoteCurrency": "USD",
    "quoteMarketCap": null,
    "week52High": 748.65,
    "week52Low": 551.68,
    "financialCurrency": null,
    "ttmRevenue": null,
    "ttmNetIncome": null,
    "_fetched_at": 1784790268.7114766,
    "_updated_label": "2026-07-23 16:04"
  },
  "SPY": {
    "targetMean": null,
    "targetLow": null,
    "targetHigh": null,
    "analystCount": null,
    "recommendationMean": null,
    "recommendationKey": null,
    "trend": [],
    "quoteCurrency": "USD",
    "quoteMarketCap": null,
    "week52High": 760.4,
    "week52Low": 619.29,
    "financialCurrency": null,
    "ttmRevenue": null,
    "ttmNetIncome": null,
    "_fetched_at": 1784790268.7114766,
    "_updated_label": "2026-07-23 16:04"
  }
};
