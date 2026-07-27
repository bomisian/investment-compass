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
    "quoteMarketCap": 5009871732736,
    "week52High": 236.54,
    "week52Low": 164.07,
    "financialCurrency": "USD",
    "ttmRevenue": 253491003392,
    "ttmNetIncome": 159612993536,
    "_fetched_at": 1785070801.765302,
    "_updated_label": "2026-07-26 22:00"
  },
  "AAPL": {
    "targetMean": 318.8093,
    "targetLow": 215.0,
    "targetHigh": 400.0,
    "analystCount": 43,
    "recommendationMean": 2.02128,
    "recommendationKey": "buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2026-09-30",
        "epsAvg": 8.76686,
        "epsGrowth": 0.1752,
        "revenueAvg": 478698081510,
        "revenueGrowth": 0.1503,
        "analysts": 41
      },
      {
        "period": "+1y",
        "endDate": "2027-09-30",
        "epsAvg": 9.71319,
        "epsGrowth": 0.1079,
        "revenueAvg": 523072441950,
        "revenueGrowth": 0.092700005,
        "analysts": 43
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 4891182891008,
    "week52High": 334.99,
    "week52Low": 201.5,
    "financialCurrency": "USD",
    "ttmRevenue": 451442016256,
    "ttmNetIncome": 122575003648,
    "_fetched_at": 1785070801.765302,
    "_updated_label": "2026-07-26 22:00"
  },
  "GOOGL": {
    "targetMean": 428.11536,
    "targetLow": 340.0,
    "targetHigh": 515.0,
    "analystCount": 54,
    "recommendationMean": 1.40625,
    "recommendationKey": "strong_buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2026-12-31",
        "epsAvg": 19.84155,
        "epsGrowth": 0.8355,
        "revenueAvg": 497810859960,
        "revenueGrowth": 0.2358,
        "analysts": 50
      },
      {
        "period": "+1y",
        "endDate": "2027-12-31",
        "epsAvg": 14.80867,
        "epsGrowth": -0.25370002,
        "revenueAvg": 603575765690,
        "revenueGrowth": 0.2125,
        "analysts": 55
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 3910399426560,
    "week52High": 408.61,
    "week52Low": 187.82,
    "financialCurrency": "USD",
    "ttmRevenue": 445865984000,
    "ttmNetIncome": 244118994944,
    "_fetched_at": 1785070801.765302,
    "_updated_label": "2026-07-26 22:00"
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
        "epsAvg": 16.7729,
        "epsGrowth": 0.2297,
        "revenueAvg": 329553405050,
        "revenueGrowth": 0.1698,
        "analysts": 24
      },
      {
        "period": "+1y",
        "endDate": "2027-06-30",
        "epsAvg": 19.37881,
        "epsGrowth": 0.1554,
        "revenueAvg": 384873665970,
        "revenueGrowth": 0.16790001,
        "analysts": 36
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 2835433652224,
    "week52High": 555.45,
    "week52Low": 349.2,
    "financialCurrency": "USD",
    "ttmRevenue": 318272995328,
    "ttmNetIncome": 125215997952,
    "_fetched_at": 1785070801.765302,
    "_updated_label": "2026-07-26 22:00"
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
        "epsAvg": 8.67843,
        "epsGrowth": 0.21040002,
        "revenueAvg": 823142226330,
        "revenueGrowth": 0.14819999,
        "analysts": 56
      },
      {
        "period": "+1y",
        "endDate": "2027-12-31",
        "epsAvg": 9.89368,
        "epsGrowth": 0.14,
        "revenueAvg": 931157891780,
        "revenueGrowth": 0.1312,
        "analysts": 54
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 2496832733184,
    "week52High": 278.56,
    "week52Low": 196.0,
    "financialCurrency": "USD",
    "ttmRevenue": 742775980032,
    "ttmNetIncome": 90797998080,
    "_fetched_at": 1785070801.765302,
    "_updated_label": "2026-07-26 22:00"
  },
  "TSM": {
    "targetMean": 537.42706,
    "targetLow": 430.0,
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
        "revenueAvg": 5403654376160,
        "revenueGrowth": 0.4186,
        "analysts": 12
      },
      {
        "period": "+1y",
        "endDate": "2027-12-31",
        "epsAvg": 21.29077,
        "epsGrowth": 0.2748,
        "revenueAvg": 7140297489770,
        "revenueGrowth": 0.3214,
        "analysts": 12
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 2092275466240,
    "week52High": 479.0,
    "week52Low": 223.7,
    "financialCurrency": "TWD",
    "ttmRevenue": 4440492343296,
    "ttmNetIncome": 2216808939520,
    "_fetched_at": 1785070801.765302,
    "_updated_label": "2026-07-26 22:00"
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
    "quoteMarketCap": 1817015091200,
    "week52High": 495.0,
    "week52Low": 281.61,
    "financialCurrency": "USD",
    "ttmRevenue": 75464998912,
    "ttmNetIncome": 29316999168,
    "_fetched_at": 1785070801.765302,
    "_updated_label": "2026-07-26 22:00"
  },
  "META": {
    "targetMean": 825.841,
    "targetLow": 664.46,
    "targetHigh": 1015.0,
    "analystCount": 58,
    "recommendationMean": 1.34921,
    "recommendationKey": "strong_buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2026-12-31",
        "epsAvg": 33.04647,
        "epsGrowth": 0.4068,
        "revenueAvg": 253303567320,
        "revenueGrowth": 0.2604,
        "analysts": 55
      },
      {
        "period": "+1y",
        "endDate": "2027-12-31",
        "epsAvg": 35.14428,
        "epsGrowth": 0.0635,
        "revenueAvg": 304223244080,
        "revenueGrowth": 0.201,
        "analysts": 54
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 1510844137472,
    "week52High": 796.25,
    "week52Low": 520.26,
    "financialCurrency": "USD",
    "ttmRevenue": 214962995200,
    "ttmNetIncome": 70586998784,
    "_fetched_at": 1785070801.765302,
    "_updated_label": "2026-07-26 22:00"
  },
  "TSLA": {
    "targetMean": 402.76276,
    "targetLow": 125.0,
    "targetHigh": 600.0,
    "analystCount": 40,
    "recommendationMean": 2.34783,
    "recommendationKey": "buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2026-12-31",
        "epsAvg": 1.81748,
        "epsGrowth": 0.0949,
        "revenueAvg": 105601190440,
        "revenueGrowth": 0.11359999,
        "analysts": 34
      },
      {
        "period": "+1y",
        "endDate": "2027-12-31",
        "epsAvg": 2.23215,
        "epsGrowth": 0.2282,
        "revenueAvg": 119840470660,
        "revenueGrowth": 0.1348,
        "analysts": 32
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 1236326809600,
    "week52High": 498.83,
    "week52Low": 297.82,
    "financialCurrency": "USD",
    "ttmRevenue": 103619002368,
    "ttmNetIncome": 3806000128,
    "_fetched_at": 1785070801.765302,
    "_updated_label": "2026-07-26 22:00"
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
    "quoteMarketCap": 1040114647040,
    "week52High": 1255.0,
    "week52Low": 103.38,
    "financialCurrency": "USD",
    "ttmRevenue": 90273996800,
    "ttmNetIncome": 50468999168,
    "_fetched_at": 1785070801.765302,
    "_updated_label": "2026-07-26 22:00"
  },
  "AMD": {
    "targetMean": 570.59576,
    "targetLow": 320.0,
    "targetHigh": 1250.0,
    "analystCount": 47,
    "recommendationMean": 1.4902,
    "recommendationKey": "strong_buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2026-12-31",
        "epsAvg": 7.44881,
        "epsGrowth": 0.78629994,
        "revenueAvg": 49713426140,
        "revenueGrowth": 0.4352,
        "analysts": 46
      },
      {
        "period": "+1y",
        "endDate": "2027-12-31",
        "epsAvg": 13.65641,
        "epsGrowth": 0.83339995,
        "revenueAvg": 78990707480,
        "revenueGrowth": 0.58889997,
        "analysts": 45
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 851091980288,
    "week52High": 584.73,
    "week52Low": 149.22,
    "financialCurrency": "USD",
    "ttmRevenue": 37454000128,
    "ttmNetIncome": 4931999744,
    "_fetched_at": 1785070801.765302,
    "_updated_label": "2026-07-26 22:00"
  },
  "INTC": {
    "targetMean": 115.4,
    "targetLow": 74.0,
    "targetHigh": 200.0,
    "analystCount": 40,
    "recommendationMean": 2.59574,
    "recommendationKey": "hold",
    "trend": [
      {
        "period": "0y",
        "endDate": "2026-12-31",
        "epsAvg": 1.53056,
        "epsGrowth": 2.6442,
        "revenueAvg": 63029190390,
        "revenueGrowth": 0.1925,
        "analysts": 26
      },
      {
        "period": "+1y",
        "endDate": "2027-12-31",
        "epsAvg": 1.92274,
        "epsGrowth": 0.25620002,
        "revenueAvg": 70429480730,
        "revenueGrowth": 0.1174,
        "analysts": 38
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 465662050304,
    "week52High": 142.35,
    "week52Low": 18.97,
    "financialCurrency": "USD",
    "ttmRevenue": 57031999488,
    "ttmNetIncome": -11288999936,
    "_fetched_at": 1785070801.765302,
    "_updated_label": "2026-07-26 22:00"
  },
  "AMAT": {
    "targetMean": 627.65717,
    "targetLow": 358.0,
    "targetHigh": 900.0,
    "analystCount": 35,
    "recommendationMean": 1.48718,
    "recommendationKey": "strong_buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2026-10-31",
        "epsAvg": 12.27359,
        "epsGrowth": 0.30290002,
        "revenueAvg": 33429559170,
        "revenueGrowth": 0.1784,
        "analysts": 34
      },
      {
        "period": "+1y",
        "endDate": "2027-10-31",
        "epsAvg": 16.90444,
        "epsGrowth": 0.3773,
        "revenueAvg": 42901669850,
        "revenueGrowth": 0.2833,
        "analysts": 33
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 425760751616,
    "week52High": 739.67,
    "week52Low": 154.47,
    "financialCurrency": "USD",
    "ttmRevenue": 29024000000,
    "ttmNetIncome": 8508000256,
    "_fetched_at": 1785070801.765302,
    "_updated_label": "2026-07-26 22:00"
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
    "_fetched_at": 1785070801.765302,
    "_updated_label": "2026-07-26 22:00"
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
    "_fetched_at": 1785070801.765302,
    "_updated_label": "2026-07-26 22:00"
  },
  "ORCL": {
    "targetMean": 248.14584,
    "targetLow": 110.0,
    "targetHigh": 400.0,
    "analystCount": 41,
    "recommendationMean": 1.54545,
    "recommendationKey": "buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2027-05-31",
        "epsAvg": 8.05139,
        "epsGrowth": 0.0552,
        "revenueAvg": 89317889660,
        "revenueGrowth": 0.32599998,
        "analysts": 42
      },
      {
        "period": "+1y",
        "endDate": "2028-05-31",
        "epsAvg": 10.89015,
        "epsGrowth": 0.35259998,
        "revenueAvg": 130470661890,
        "revenueGrowth": 0.4607,
        "analysts": 40
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 331225366528,
    "week52High": 345.72,
    "week52Low": 114.75,
    "financialCurrency": "USD",
    "ttmRevenue": 67356999680,
    "ttmNetIncome": 16984000512,
    "_fetched_at": 1785119592.1913464,
    "_updated_label": "2026-07-27 11:33"
  },
  "CRM": {
    "targetMean": 241.7198,
    "targetLow": 160.0,
    "targetHigh": 475.0,
    "analystCount": 53,
    "recommendationMean": 1.66038,
    "recommendationKey": "buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2027-01-31",
        "epsAvg": 14.13332,
        "epsGrowth": 0.1289,
        "revenueAvg": 46106759680,
        "revenueGrowth": 0.1103,
        "analysts": 51
      },
      {
        "period": "+1y",
        "endDate": "2028-01-31",
        "epsAvg": 15.51229,
        "epsGrowth": 0.097600006,
        "revenueAvg": 50513597610,
        "revenueGrowth": 0.0956,
        "analysts": 53
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 134037544960,
    "week52High": 274.0,
    "week52Low": 146.32,
    "financialCurrency": "USD",
    "ttmRevenue": 42829000704,
    "ttmNetIncome": 8023000064,
    "_fetched_at": 1785119592.1913464,
    "_updated_label": "2026-07-27 11:33"
  },
  "PLTR": {
    "targetMean": 182.19852,
    "targetLow": 70.0,
    "targetHigh": 255.0,
    "analystCount": 27,
    "recommendationMean": 1.875,
    "recommendationKey": "buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2026-12-31",
        "epsAvg": 1.47608,
        "epsGrowth": 0.96809995,
        "revenueAvg": 7722397830,
        "revenueGrowth": 0.72550005,
        "analysts": 28
      },
      {
        "period": "+1y",
        "endDate": "2027-12-31",
        "epsAvg": 2.09448,
        "epsGrowth": 0.41889998,
        "revenueAvg": 11226675600,
        "revenueGrowth": 0.45380002,
        "analysts": 29
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 294677577728,
    "week52High": 207.52,
    "week52Low": 106.37,
    "financialCurrency": "USD",
    "ttmRevenue": 5224174080,
    "ttmNetIncome": 2281529088,
    "_fetched_at": 1785119592.1913464,
    "_updated_label": "2026-07-27 11:33"
  },
  "QCOM": {
    "targetMean": 221.23334,
    "targetLow": 100.0,
    "targetHigh": 314.0,
    "analystCount": 30,
    "recommendationMean": 2.55556,
    "recommendationKey": "hold",
    "trend": [
      {
        "period": "0y",
        "endDate": "2026-09-30",
        "epsAvg": 10.80958,
        "epsGrowth": -0.1014,
        "revenueAvg": 42571648400,
        "revenueGrowth": -0.0356,
        "analysts": 33
      },
      {
        "period": "+1y",
        "endDate": "2027-09-30",
        "epsAvg": 10.97243,
        "epsGrowth": 0.0150999995,
        "revenueAvg": 44150258490,
        "revenueGrowth": 0.037100002,
        "analysts": 33
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 175986376704,
    "week52High": 259.92,
    "week52Low": 121.99,
    "financialCurrency": "USD",
    "ttmRevenue": 44486000640,
    "ttmNetIncome": 9923999744,
    "_fetched_at": 1785119592.1913464,
    "_updated_label": "2026-07-27 11:33"
  },
  "ARM": {
    "targetMean": 300.73026,
    "targetLow": 125.0,
    "targetHigh": 500.0,
    "analystCount": 37,
    "recommendationMean": 1.95,
    "recommendationKey": "buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2027-03-31",
        "epsAvg": 2.16869,
        "epsGrowth": 0.2252,
        "revenueAvg": 5969084210,
        "revenueGrowth": 0.2132,
        "analysts": 38
      },
      {
        "period": "+1y",
        "endDate": "2028-03-31",
        "epsAvg": 3.07586,
        "epsGrowth": 0.41830003,
        "revenueAvg": 8081501580,
        "revenueGrowth": 0.3539,
        "analysts": 35
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 277711159296,
    "week52High": 452.7,
    "week52Low": 100.02,
    "financialCurrency": "USD",
    "ttmRevenue": 4920000000,
    "ttmNetIncome": 904000000,
    "_fetched_at": 1785119592.1913464,
    "_updated_label": "2026-07-27 11:33"
  },
  "MRVL": {
    "targetMean": 256.9142,
    "targetLow": 126.0,
    "targetHigh": 400.0,
    "analystCount": 40,
    "recommendationMean": 1.44186,
    "recommendationKey": "strong_buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2027-01-31",
        "epsAvg": 4.04907,
        "epsGrowth": 0.4257,
        "revenueAvg": 11529799650,
        "revenueGrowth": 0.407,
        "analysts": 38
      },
      {
        "period": "+1y",
        "endDate": "2028-01-31",
        "epsAvg": 6.24094,
        "epsGrowth": 0.5413,
        "revenueAvg": 16732272130,
        "revenueGrowth": 0.45119998,
        "analysts": 39
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 174330052608,
    "week52High": 329.88,
    "week52Low": 61.44,
    "financialCurrency": "USD",
    "ttmRevenue": 8717100032,
    "ttmNetIncome": 2526700032,
    "_fetched_at": 1785119592.1913464,
    "_updated_label": "2026-07-27 11:33"
  },
  "ASML": {
    "targetMean": 2117.4307,
    "targetLow": 882.94904,
    "targetHigh": 2852.1477,
    "analystCount": 15,
    "recommendationMean": 1.40909,
    "recommendationKey": "strong_buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2026-12-31",
        "epsAvg": 37.9014,
        "epsGrowth": 0.5338,
        "revenueAvg": 42962571230,
        "revenueGrowth": 0.3152,
        "analysts": 33
      },
      {
        "period": "+1y",
        "endDate": "2027-12-31",
        "epsAvg": 50.91877,
        "epsGrowth": 0.3435,
        "revenueAvg": 53842730790,
        "revenueGrowth": 0.2532,
        "analysts": 35
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 674898247680,
    "week52High": 1999.96,
    "week52Low": 683.48,
    "financialCurrency": "EUR",
    "ttmRevenue": 35327500288,
    "ttmNetIncome": 10638399488,
    "_fetched_at": 1785119592.1913464,
    "_updated_label": "2026-07-27 11:33"
  },
  "LRCX": {
    "targetMean": 372.32257,
    "targetLow": 220.0,
    "targetHigh": 500.0,
    "analystCount": 31,
    "recommendationMean": 1.48571,
    "recommendationKey": "strong_buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2026-06-30",
        "epsAvg": 5.69461,
        "epsGrowth": 0.3755,
        "revenueAvg": 23202045360,
        "revenueGrowth": 0.2585,
        "analysts": 33
      },
      {
        "period": "+1y",
        "endDate": "2027-06-30",
        "epsAvg": 8.18042,
        "epsGrowth": 0.4365,
        "revenueAvg": 31006961490,
        "revenueGrowth": 0.3364,
        "analysts": 32
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 381686775808,
    "week52High": 438.5,
    "week52Low": 90.94,
    "financialCurrency": "USD",
    "ttmRevenue": 21681844224,
    "ttmNetIncome": 6708201984,
    "_fetched_at": 1785119592.1913464,
    "_updated_label": "2026-07-27 11:33"
  },
  "KLAC": {
    "targetMean": 234.0357,
    "targetLow": 150.0,
    "targetHigh": 325.0,
    "analystCount": 28,
    "recommendationMean": 1.96552,
    "recommendationKey": "buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2026-06-30",
        "epsAvg": 3.70459,
        "epsGrowth": 0.113199994,
        "revenueAvg": 13519252700,
        "revenueGrowth": 0.1121,
        "analysts": 28
      },
      {
        "period": "+1y",
        "endDate": "2027-06-30",
        "epsAvg": 5.13135,
        "epsGrowth": 0.38509998,
        "revenueAvg": 17214452980,
        "revenueGrowth": 0.2733,
        "analysts": 27
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 274997051392,
    "week52High": 307.37,
    "week52Low": 83.224,
    "financialCurrency": "USD",
    "ttmRevenue": 13096660992,
    "ttmNetIncome": 4670560768,
    "_fetched_at": 1785119592.1913464,
    "_updated_label": "2026-07-27 11:33"
  },
  "SNDK": {
    "targetMean": 2217.7727,
    "targetLow": 1000.0,
    "targetHigh": 3169.0,
    "analystCount": 22,
    "recommendationMean": 1.6087,
    "recommendationKey": "buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2026-06-30",
        "epsAvg": 66.68269,
        "epsGrowth": 21.301899,
        "revenueAvg": 19836434220,
        "revenueGrowth": 1.697,
        "analysts": 21
      },
      {
        "period": "+1y",
        "endDate": "2027-06-30",
        "epsAvg": 212.94582,
        "epsGrowth": 2.1934,
        "revenueAvg": 49866353750,
        "revenueGrowth": 1.5139,
        "analysts": 21
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 212739833856,
    "week52High": 2354.39,
    "week52Low": 40.1,
    "financialCurrency": "USD",
    "ttmRevenue": 13184000000,
    "ttmNetIncome": 4506999808,
    "_fetched_at": 1785119592.1913464,
    "_updated_label": "2026-07-27 11:33"
  },
  "WDC": {
    "targetMean": 633.8333,
    "targetLow": 415.0,
    "targetHigh": 1050.0,
    "analystCount": 24,
    "recommendationMean": 1.5,
    "recommendationKey": "strong_buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2026-06-30",
        "epsAvg": 9.95709,
        "epsGrowth": 1.0197,
        "revenueAvg": 12873620110,
        "revenueGrowth": 0.3523,
        "analysts": 21
      },
      {
        "period": "+1y",
        "endDate": "2027-06-30",
        "epsAvg": 18.54707,
        "epsGrowth": 0.8627,
        "revenueAvg": 18159472570,
        "revenueGrowth": 0.4106,
        "analysts": 20
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 179165773824,
    "week52High": 799.87,
    "week52Low": 68.67,
    "financialCurrency": "USD",
    "ttmRevenue": 11777000448,
    "ttmNetIncome": 6350000128,
    "_fetched_at": 1785119592.1913464,
    "_updated_label": "2026-07-27 11:33"
  }
};
