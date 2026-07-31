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
    "quoteMarketCap": 4739322871808,
    "week52High": 236.54,
    "week52Low": 164.07,
    "financialCurrency": "USD",
    "ttmRevenue": 253491003392,
    "ttmNetIncome": 159612993536,
    "_fetched_at": 1785420001.9030728,
    "_updated_label": "2026-07-30 23:00"
  },
  "AAPL": {
    "targetMean": 319.71722,
    "targetLow": 215.0,
    "targetHigh": 400.0,
    "analystCount": 43,
    "recommendationMean": 2.02128,
    "recommendationKey": "buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2026-09-30",
        "epsAvg": 8.7615,
        "epsGrowth": 0.1745,
        "revenueAvg": 478846665480,
        "revenueGrowth": 0.1506,
        "analysts": 41
      },
      {
        "period": "+1y",
        "endDate": "2027-09-30",
        "epsAvg": 9.71808,
        "epsGrowth": 0.1092,
        "revenueAvg": 523644400140,
        "revenueGrowth": 0.0936,
        "analysts": 43
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 4873338224640,
    "week52High": 344.57,
    "week52Low": 201.5,
    "financialCurrency": "USD",
    "ttmRevenue": 451442016256,
    "ttmNetIncome": 122575003648,
    "_fetched_at": 1785420001.9030728,
    "_updated_label": "2026-07-30 23:00"
  },
  "GOOGL": {
    "targetMean": 427.586,
    "targetLow": 340.0,
    "targetHigh": 515.0,
    "analystCount": 55,
    "recommendationMean": 1.39062,
    "recommendationKey": "strong_buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2026-12-31",
        "epsAvg": 20.59177,
        "epsGrowth": 0.90489995,
        "revenueAvg": 497722951210,
        "revenueGrowth": 0.2355,
        "analysts": 48
      },
      {
        "period": "+1y",
        "endDate": "2027-12-31",
        "epsAvg": 14.75642,
        "epsGrowth": -0.2834,
        "revenueAvg": 605474746820,
        "revenueGrowth": 0.2165,
        "analysts": 54
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 4062172938240,
    "week52High": 408.61,
    "week52Low": 187.82,
    "financialCurrency": "USD",
    "ttmRevenue": 445865984000,
    "ttmNetIncome": 244118994944,
    "_fetched_at": 1785420001.9030728,
    "_updated_label": "2026-07-30 23:00"
  },
  "MSFT": {
    "targetMean": 555.7652,
    "targetLow": 400.0,
    "targetHigh": 870.0,
    "analystCount": 54,
    "recommendationMean": 1.33929,
    "recommendationKey": "strong_buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2027-06-30",
        "epsAvg": 19.18,
        "epsGrowth": 0.11,
        "revenueAvg": 384868769490,
        "revenueGrowth": 0.1598,
        "analysts": 3
      },
      {
        "period": "+1y",
        "endDate": "2028-06-30",
        "epsAvg": 22.59044,
        "epsGrowth": 0.1778,
        "revenueAvg": 456147540030,
        "revenueGrowth": 0.1852,
        "analysts": 27
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 3341681426432,
    "week52High": 555.45,
    "week52Low": 349.2,
    "financialCurrency": "USD",
    "ttmRevenue": 318272995328,
    "ttmNetIncome": 125215997952,
    "_fetched_at": 1785420001.9030728,
    "_updated_label": "2026-07-30 23:00"
  },
  "AMZN": {
    "targetMean": 313.0687,
    "targetLow": 207.0,
    "targetHigh": 370.0,
    "analystCount": 61,
    "recommendationMean": 1.33846,
    "recommendationKey": "strong_buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2026-12-31",
        "epsAvg": 8.73987,
        "epsGrowth": 0.2189,
        "revenueAvg": 824162737660,
        "revenueGrowth": 0.1496,
        "analysts": 57
      },
      {
        "period": "+1y",
        "endDate": "2027-12-31",
        "epsAvg": 10.03124,
        "epsGrowth": 0.1478,
        "revenueAvg": 933452178590,
        "revenueGrowth": 0.13260001,
        "analysts": 55
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 2546207817728,
    "week52High": 278.56,
    "week52Low": 196.0,
    "financialCurrency": "USD",
    "ttmRevenue": 742775980032,
    "ttmNetIncome": 90797998080,
    "_fetched_at": 1785420001.9030728,
    "_updated_label": "2026-07-30 23:00"
  },
  "TSM": {
    "targetMean": 540.20483,
    "targetLow": 430.0,
    "targetHigh": 700.0,
    "analystCount": 18,
    "recommendationMean": 1.42105,
    "recommendationKey": "strong_buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2026-12-31",
        "epsAvg": 16.80425,
        "epsGrowth": 0.5779,
        "revenueAvg": 5410080691950,
        "revenueGrowth": 0.42029998,
        "analysts": 12
      },
      {
        "period": "+1y",
        "endDate": "2027-12-31",
        "epsAvg": 21.5691,
        "epsGrowth": 0.2836,
        "revenueAvg": 7166494925660,
        "revenueGrowth": 0.3247,
        "analysts": 12
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 2083977035776,
    "week52High": 479.0,
    "week52Low": 223.7,
    "financialCurrency": "TWD",
    "ttmRevenue": 4440492343296,
    "ttmNetIncome": 2216808939520,
    "_fetched_at": 1785420001.9030728,
    "_updated_label": "2026-07-30 23:00"
  },
  "AVGO": {
    "targetMean": 526.9956,
    "targetLow": 215.88,
    "targetHigh": 675.0,
    "analystCount": 45,
    "recommendationMean": 1.3125,
    "recommendationKey": "strong_buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2026-10-31",
        "epsAvg": 11.62703,
        "epsGrowth": 0.7048,
        "revenueAvg": 106039607190,
        "revenueGrowth": 0.65980005,
        "analysts": 44
      },
      {
        "period": "+1y",
        "endDate": "2027-10-31",
        "epsAvg": 19.51378,
        "epsGrowth": 0.6783,
        "revenueAvg": 173128195620,
        "revenueGrowth": 0.6327,
        "analysts": 45
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 1838757183488,
    "week52High": 495.0,
    "week52Low": 281.61,
    "financialCurrency": "USD",
    "ttmRevenue": 75464998912,
    "ttmNetIncome": 29316999168,
    "_fetched_at": 1785420001.9030728,
    "_updated_label": "2026-07-30 23:00"
  },
  "META": {
    "targetMean": 824.68036,
    "targetLow": 664.46,
    "targetHigh": 1015.0,
    "analystCount": 57,
    "recommendationMean": 1.35484,
    "recommendationKey": "strong_buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2026-12-31",
        "epsAvg": 33.04684,
        "epsGrowth": 0.4068,
        "revenueAvg": 253312160540,
        "revenueGrowth": 0.26049998,
        "analysts": 55
      },
      {
        "period": "+1y",
        "endDate": "2027-12-31",
        "epsAvg": 35.09669,
        "epsGrowth": 0.062,
        "revenueAvg": 304059399260,
        "revenueGrowth": 0.20030001,
        "analysts": 54
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 1349006917632,
    "week52High": 796.25,
    "week52Low": 520.26,
    "financialCurrency": "USD",
    "ttmRevenue": 214962995200,
    "ttmNetIncome": 70586998784,
    "_fetched_at": 1785420001.9030728,
    "_updated_label": "2026-07-30 23:00"
  },
  "TSLA": {
    "targetMean": 399.44775,
    "targetLow": 125.0,
    "targetHigh": 600.0,
    "analystCount": 40,
    "recommendationMean": 2.34783,
    "recommendationKey": "buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2026-12-31",
        "epsAvg": 1.78687,
        "epsGrowth": 0.0764,
        "revenueAvg": 105689600800,
        "revenueGrowth": 0.1146,
        "analysts": 33
      },
      {
        "period": "+1y",
        "endDate": "2027-12-31",
        "epsAvg": 2.22348,
        "epsGrowth": 0.24430001,
        "revenueAvg": 120523395250,
        "revenueGrowth": 0.14039999,
        "analysts": 32
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 1211187986432,
    "week52High": 498.83,
    "week52Low": 297.38,
    "financialCurrency": "USD",
    "ttmRevenue": 103619002368,
    "ttmNetIncome": 3806000128,
    "_fetched_at": 1785420001.9030728,
    "_updated_label": "2026-07-30 23:00"
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
    "quoteMarketCap": 941360480256,
    "week52High": 1255.0,
    "week52Low": 103.38,
    "financialCurrency": "USD",
    "ttmRevenue": 90273996800,
    "ttmNetIncome": 50468999168,
    "_fetched_at": 1785420001.9030728,
    "_updated_label": "2026-07-30 23:00"
  },
  "AMD": {
    "targetMean": 575.4894,
    "targetLow": 320.0,
    "targetHigh": 1250.0,
    "analystCount": 47,
    "recommendationMean": 1.4902,
    "recommendationKey": "strong_buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2026-12-31",
        "epsAvg": 7.45208,
        "epsGrowth": 0.7871,
        "revenueAvg": 49724722100,
        "revenueGrowth": 0.4355,
        "analysts": 46
      },
      {
        "period": "+1y",
        "endDate": "2027-12-31",
        "epsAvg": 13.77774,
        "epsGrowth": 0.84879994,
        "revenueAvg": 79581294500,
        "revenueGrowth": 0.60040003,
        "analysts": 45
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 786878955520,
    "week52High": 584.73,
    "week52Low": 149.22,
    "financialCurrency": "USD",
    "ttmRevenue": 37454000128,
    "ttmNetIncome": 4931999744,
    "_fetched_at": 1785420001.9030728,
    "_updated_label": "2026-07-30 23:00"
  },
  "INTC": {
    "targetMean": 115.26829,
    "targetLow": 74.0,
    "targetHigh": 200.0,
    "analystCount": 41,
    "recommendationMean": 2.5625,
    "recommendationKey": "hold",
    "trend": [
      {
        "period": "0y",
        "endDate": "2026-12-31",
        "epsAvg": 1.5169,
        "epsGrowth": 2.6117,
        "revenueAvg": 63028311600,
        "revenueGrowth": 0.1925,
        "analysts": 34
      },
      {
        "period": "+1y",
        "endDate": "2027-12-31",
        "epsAvg": 2.01367,
        "epsGrowth": 0.3275,
        "revenueAvg": 70743756410,
        "revenueGrowth": 0.1224,
        "analysts": 42
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 459407491072,
    "week52High": 142.35,
    "week52Low": 18.97,
    "financialCurrency": "USD",
    "ttmRevenue": 57031999488,
    "ttmNetIncome": -11288999936,
    "_fetched_at": 1785420001.9030728,
    "_updated_label": "2026-07-30 23:00"
  },
  "AMAT": {
    "targetMean": 627.65717,
    "targetLow": 358.0,
    "targetHigh": 900.0,
    "analystCount": 35,
    "recommendationMean": 1.46154,
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
    "quoteMarketCap": 398134902784,
    "week52High": 739.67,
    "week52Low": 154.47,
    "financialCurrency": "USD",
    "ttmRevenue": 29024000000,
    "ttmNetIncome": 8508000256,
    "_fetched_at": 1785420001.9030728,
    "_updated_label": "2026-07-30 23:00"
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
    "_fetched_at": 1785420001.9030728,
    "_updated_label": "2026-07-30 23:00"
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
    "_fetched_at": 1785420001.9030728,
    "_updated_label": "2026-07-30 23:00"
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
    "quoteMarketCap": 372804976640,
    "week52High": 345.72,
    "week52Low": 114.5,
    "financialCurrency": "USD",
    "ttmRevenue": 67356999680,
    "ttmNetIncome": 16984000512,
    "_fetched_at": 1785506401.8388307,
    "_updated_label": "2026-07-31 23:00"
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
    "quoteMarketCap": 148873723904,
    "week52High": 269.11,
    "week52Low": 146.32,
    "financialCurrency": "USD",
    "ttmRevenue": 42829000704,
    "ttmNetIncome": 8023000064,
    "_fetched_at": 1785506401.8388307,
    "_updated_label": "2026-07-31 23:00"
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
    "quoteMarketCap": 293790580736,
    "week52High": 207.52,
    "week52Low": 106.37,
    "financialCurrency": "USD",
    "ttmRevenue": 5224174080,
    "ttmNetIncome": 2281529088,
    "_fetched_at": 1785506401.8388307,
    "_updated_label": "2026-07-31 23:00"
  },
  "QCOM": {
    "targetMean": 199.43333,
    "targetLow": 100.0,
    "targetHigh": 400.0,
    "analystCount": 30,
    "recommendationMean": 2.56757,
    "recommendationKey": "hold",
    "trend": [
      {
        "period": "0y",
        "endDate": "2026-09-30",
        "epsAvg": 10.56576,
        "epsGrowth": -0.121700004,
        "revenueAvg": 42886036110,
        "revenueGrowth": -0.028399998,
        "analysts": 28
      },
      {
        "period": "+1y",
        "endDate": "2027-09-30",
        "epsAvg": 10.4111,
        "epsGrowth": -0.0146,
        "revenueAvg": 44549800200,
        "revenueGrowth": 0.0388,
        "analysts": 34
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 157143007232,
    "week52High": 259.92,
    "week52Low": 121.99,
    "financialCurrency": "USD",
    "ttmRevenue": 44068999168,
    "ttmNetIncome": 9260000256,
    "_fetched_at": 1785506401.8388307,
    "_updated_label": "2026-07-31 23:00"
  },
  "ARM": {
    "targetMean": 286.02756,
    "targetLow": 125.0,
    "targetHigh": 500.0,
    "analystCount": 37,
    "recommendationMean": 1.95,
    "recommendationKey": "buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2027-03-31",
        "epsAvg": 2.22735,
        "epsGrowth": 0.2584,
        "revenueAvg": 6047581910,
        "revenueGrowth": 0.2292,
        "analysts": 33
      },
      {
        "period": "+1y",
        "endDate": "2028-03-31",
        "epsAvg": 3.07476,
        "epsGrowth": 0.3805,
        "revenueAvg": 8189095800,
        "revenueGrowth": 0.3541,
        "analysts": 37
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 274699911168,
    "week52High": 452.7,
    "week52Low": 100.02,
    "financialCurrency": "USD",
    "ttmRevenue": 5155999744,
    "ttmNetIncome": 1044000000,
    "_fetched_at": 1785506401.8388307,
    "_updated_label": "2026-07-31 23:00"
  },
  "MRVL": {
    "targetMean": 256.9142,
    "targetLow": 126.0,
    "targetHigh": 400.0,
    "analystCount": 40,
    "recommendationMean": 1.4186,
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
    "quoteMarketCap": 173450461184,
    "week52High": 329.88,
    "week52Low": 61.44,
    "financialCurrency": "USD",
    "ttmRevenue": 8717100032,
    "ttmNetIncome": 2526700032,
    "_fetched_at": 1785506401.8388307,
    "_updated_label": "2026-07-31 23:00"
  },
  "ASML": {
    "targetMean": 2129.7112,
    "targetLow": 887.40533,
    "targetHigh": 2866.5427,
    "analystCount": 15,
    "recommendationMean": 1.38636,
    "recommendationKey": "strong_buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2026-12-31",
        "epsAvg": 38.05051,
        "epsGrowth": 0.5399,
        "revenueAvg": 43043950990,
        "revenueGrowth": 0.3176,
        "analysts": 32
      },
      {
        "period": "+1y",
        "endDate": "2027-12-31",
        "epsAvg": 51.08785,
        "epsGrowth": 0.3426,
        "revenueAvg": 53842738480,
        "revenueGrowth": 0.2509,
        "analysts": 34
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 632651907072,
    "week52High": 1999.96,
    "week52Low": 683.48,
    "financialCurrency": "EUR",
    "ttmRevenue": 35327500288,
    "ttmNetIncome": 10638399488,
    "_fetched_at": 1785506401.8388307,
    "_updated_label": "2026-07-31 23:00"
  },
  "LRCX": {
    "targetMean": 368.3871,
    "targetLow": 290.0,
    "targetHigh": 500.0,
    "analystCount": 31,
    "recommendationMean": 1.48571,
    "recommendationKey": "strong_buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2027-06-30",
        "epsAvg": 9.45414,
        "epsGrowth": 0.62439996,
        "revenueAvg": 34768162220,
        "revenueGrowth": 0.49650002,
        "analysts": 25
      },
      {
        "period": "+1y",
        "endDate": "2028-06-30",
        "epsAvg": 11.44776,
        "epsGrowth": 0.21090001,
        "revenueAvg": 39839243050,
        "revenueGrowth": 0.1459,
        "analysts": 24
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 378136199168,
    "week52High": 438.5,
    "week52Low": 92.47,
    "financialCurrency": "USD",
    "ttmRevenue": 23232690176,
    "ttmNetIncome": 7265396224,
    "_fetched_at": 1785506401.8388307,
    "_updated_label": "2026-07-31 23:00"
  },
  "KLAC": {
    "targetMean": 228.5893,
    "targetLow": 165.0,
    "targetHigh": 325.0,
    "analystCount": 28,
    "recommendationMean": 1.93103,
    "recommendationKey": "buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2027-06-30",
        "epsAvg": 5.44883,
        "epsGrowth": 0.44919997,
        "revenueAvg": 18040895560,
        "revenueGrowth": 0.32849997,
        "analysts": 23
      },
      {
        "period": "+1y",
        "endDate": "2028-06-30",
        "epsAvg": 6.53834,
        "epsGrowth": 0.2,
        "revenueAvg": 20979437890,
        "revenueGrowth": 0.16290002,
        "analysts": 22
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 240067248128,
    "week52High": 307.37,
    "week52Low": 83.224,
    "financialCurrency": "USD",
    "ttmRevenue": 13579475968,
    "ttmNetIncome": 4830771200,
    "_fetched_at": 1785506401.8388307,
    "_updated_label": "2026-07-31 23:00"
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
    "quoteMarketCap": 184176279552,
    "week52High": 2354.39,
    "week52Low": 40.1,
    "financialCurrency": "USD",
    "ttmRevenue": 13184000000,
    "ttmNetIncome": 4506999808,
    "_fetched_at": 1785506401.8388307,
    "_updated_label": "2026-07-31 23:00"
  },
  "WDC": {
    "targetMean": 655.5,
    "targetLow": 415.0,
    "targetHigh": 1050.0,
    "analystCount": 24,
    "recommendationMean": 1.5,
    "recommendationKey": "strong_buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2026-06-30",
        "epsAvg": 9.95899,
        "epsGrowth": 1.0201,
        "revenueAvg": 12873646200,
        "revenueGrowth": 0.3523,
        "analysts": 21
      },
      {
        "period": "+1y",
        "endDate": "2027-06-30",
        "epsAvg": 18.74757,
        "epsGrowth": 0.8825,
        "revenueAvg": 18247980900,
        "revenueGrowth": 0.4175,
        "analysts": 20
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 187562229760,
    "week52High": 799.87,
    "week52Low": 73.14,
    "financialCurrency": "USD",
    "ttmRevenue": 11777000448,
    "ttmNetIncome": 6350000128,
    "_fetched_at": 1785506401.8388307,
    "_updated_label": "2026-07-31 23:00"
  }
};
