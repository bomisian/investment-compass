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
    "quoteMarketCap": 4800117735424,
    "week52High": 236.54,
    "week52Low": 164.07,
    "financialCurrency": "USD",
    "ttmRevenue": 253491003392,
    "ttmNetIncome": 159612993536,
    "_fetched_at": 1785510001.8541224,
    "_updated_label": "2026-08-01 00:00"
  },
  "AAPL": {
    "targetMean": 321.6566,
    "targetLow": 215.0,
    "targetHigh": 400.0,
    "analystCount": 41,
    "recommendationMean": 2.04348,
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
        "epsAvg": 9.73237,
        "epsGrowth": 0.1108,
        "revenueAvg": 525634620140,
        "revenueGrowth": 0.09770001,
        "analysts": 41
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 4450702327808,
    "week52High": 344.57,
    "week52Low": 201.5,
    "financialCurrency": "USD",
    "ttmRevenue": 466822987776,
    "ttmNetIncome": 128929996800,
    "_fetched_at": 1785510001.8541224,
    "_updated_label": "2026-08-01 00:00"
  },
  "GOOGL": {
    "targetMean": 426.94965,
    "targetLow": 340.0,
    "targetHigh": 515.0,
    "analystCount": 55,
    "recommendationMean": 1.39062,
    "recommendationKey": "strong_buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2026-12-31",
        "epsAvg": 20.5849,
        "epsGrowth": 0.90419996,
        "revenueAvg": 497702572620,
        "revenueGrowth": 0.2355,
        "analysts": 50
      },
      {
        "period": "+1y",
        "endDate": "2027-12-31",
        "epsAvg": 14.76976,
        "epsGrowth": -0.2825,
        "revenueAvg": 605844990400,
        "revenueGrowth": 0.2173,
        "analysts": 55
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 4308116963328,
    "week52High": 408.61,
    "week52Low": 187.82,
    "financialCurrency": "USD",
    "ttmRevenue": 445865984000,
    "ttmNetIncome": 244118994944,
    "_fetched_at": 1785510001.8541224,
    "_updated_label": "2026-08-01 00:00"
  },
  "MSFT": {
    "targetMean": 561.5792,
    "targetLow": 400.0,
    "targetHigh": 870.0,
    "analystCount": 53,
    "recommendationMean": 1.33333,
    "recommendationKey": "strong_buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2027-06-30",
        "epsAvg": 19.49515,
        "epsGrowth": 0.1282,
        "revenueAvg": 390094558140,
        "revenueGrowth": 0.17559999,
        "analysts": 31
      },
      {
        "period": "+1y",
        "endDate": "2028-06-30",
        "epsAvg": 23.08484,
        "epsGrowth": 0.1841,
        "revenueAvg": 464293830870,
        "revenueGrowth": 0.1902,
        "analysts": 28
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 3359762284544,
    "week52High": 553.72,
    "week52Low": 349.2,
    "financialCurrency": "USD",
    "ttmRevenue": 331839012864,
    "ttmNetIncome": 133748998144,
    "_fetched_at": 1785510001.8541224,
    "_updated_label": "2026-08-01 00:00"
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
        "epsAvg": 8.7588,
        "epsGrowth": 0.2216,
        "revenueAvg": 824228721270,
        "revenueGrowth": 0.1497,
        "analysts": 56
      },
      {
        "period": "+1y",
        "endDate": "2027-12-31",
        "epsAvg": 10.04178,
        "epsGrowth": 0.14649999,
        "revenueAvg": 933629745260,
        "revenueGrowth": 0.13270001,
        "analysts": 55
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 2912702431232,
    "week52High": 278.56,
    "week52Low": 196.0,
    "financialCurrency": "USD",
    "ttmRevenue": 775680032768,
    "ttmNetIncome": 135281000448,
    "_fetched_at": 1785510001.8541224,
    "_updated_label": "2026-08-01 00:00"
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
        "epsAvg": 16.81977,
        "epsGrowth": 0.5793,
        "revenueAvg": 5413535303710,
        "revenueGrowth": 0.42119998,
        "analysts": 13
      },
      {
        "period": "+1y",
        "endDate": "2027-12-31",
        "epsAvg": 21.60809,
        "epsGrowth": 0.2847,
        "revenueAvg": 7170335027520,
        "revenueGrowth": 0.3245,
        "analysts": 13
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 2114369880064,
    "week52High": 479.0,
    "week52Low": 223.7,
    "financialCurrency": "TWD",
    "ttmRevenue": 4440492343296,
    "ttmNetIncome": 2216808939520,
    "_fetched_at": 1785510001.8541224,
    "_updated_label": "2026-08-01 00:00"
  },
  "AVGO": {
    "targetMean": 527.88446,
    "targetLow": 215.88,
    "targetHigh": 675.0,
    "analystCount": 45,
    "recommendationMean": 1.3125,
    "recommendationKey": "strong_buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2026-10-31",
        "epsAvg": 11.62543,
        "epsGrowth": 0.7046,
        "revenueAvg": 106039607190,
        "revenueGrowth": 0.65980005,
        "analysts": 44
      },
      {
        "period": "+1y",
        "endDate": "2027-10-31",
        "epsAvg": 19.49196,
        "epsGrowth": 0.6767,
        "revenueAvg": 173211633120,
        "revenueGrowth": 0.6335,
        "analysts": 46
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 1846131556352,
    "week52High": 495.0,
    "week52Low": 281.61,
    "financialCurrency": "USD",
    "ttmRevenue": 75464998912,
    "ttmNetIncome": 29316999168,
    "_fetched_at": 1785510001.8541224,
    "_updated_label": "2026-08-01 00:00"
  },
  "META": {
    "targetMean": 778.68036,
    "targetLow": 580.0,
    "targetHigh": 1000.0,
    "analystCount": 57,
    "recommendationMean": 1.35484,
    "recommendationKey": "strong_buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2026-12-31",
        "epsAvg": 32.12067,
        "epsGrowth": 0.36740002,
        "revenueAvg": 254082813880,
        "revenueGrowth": 0.2643,
        "analysts": 52
      },
      {
        "period": "+1y",
        "endDate": "2027-12-31",
        "epsAvg": 34.40842,
        "epsGrowth": 0.0712,
        "revenueAvg": 304573727770,
        "revenueGrowth": 0.19870001,
        "analysts": 53
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 1403484766208,
    "week52High": 796.25,
    "week52Low": 520.26,
    "financialCurrency": "USD",
    "ttmRevenue": 228246994944,
    "ttmNetIncome": 68097998848,
    "_fetched_at": 1785510001.8541224,
    "_updated_label": "2026-08-01 00:00"
  },
  "TSLA": {
    "targetMean": 398.29776,
    "targetLow": 125.0,
    "targetHigh": 600.0,
    "analystCount": 40,
    "recommendationMean": 2.3617,
    "recommendationKey": "buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2026-12-31",
        "epsAvg": 1.7802,
        "epsGrowth": 0.072399996,
        "revenueAvg": 105717867460,
        "revenueGrowth": 0.1148,
        "analysts": 33
      },
      {
        "period": "+1y",
        "endDate": "2027-12-31",
        "epsAvg": 2.21755,
        "epsGrowth": 0.2457,
        "revenueAvg": 120489482210,
        "revenueGrowth": 0.1397,
        "analysts": 32
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 1219027795968,
    "week52High": 498.83,
    "week52Low": 297.38,
    "financialCurrency": "USD",
    "ttmRevenue": 103619002368,
    "ttmNetIncome": 3806000128,
    "_fetched_at": 1785510001.8541224,
    "_updated_label": "2026-08-01 00:00"
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
    "quoteMarketCap": 956234596352,
    "week52High": 1255.0,
    "week52Low": 103.38,
    "financialCurrency": "USD",
    "ttmRevenue": 90273996800,
    "ttmNetIncome": 50468999168,
    "_fetched_at": 1785510001.8541224,
    "_updated_label": "2026-08-01 00:00"
  },
  "AMD": {
    "targetMean": 576.55316,
    "targetLow": 320.0,
    "targetHigh": 1250.0,
    "analystCount": 47,
    "recommendationMean": 1.4902,
    "recommendationKey": "strong_buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2026-12-31",
        "epsAvg": 7.44795,
        "epsGrowth": 0.78610003,
        "revenueAvg": 49714062530,
        "revenueGrowth": 0.4352,
        "analysts": 46
      },
      {
        "period": "+1y",
        "endDate": "2027-12-31",
        "epsAvg": 13.8213,
        "epsGrowth": 0.8557,
        "revenueAvg": 79726209390,
        "revenueGrowth": 0.6037,
        "analysts": 45
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 802663104512,
    "week52High": 584.73,
    "week52Low": 149.22,
    "financialCurrency": "USD",
    "ttmRevenue": 37454000128,
    "ttmNetIncome": 4931999744,
    "_fetched_at": 1785510001.8541224,
    "_updated_label": "2026-08-01 00:00"
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
        "epsAvg": 1.51711,
        "epsGrowth": 2.6122,
        "revenueAvg": 63028311600,
        "revenueGrowth": 0.1925,
        "analysts": 33
      },
      {
        "period": "+1y",
        "endDate": "2027-12-31",
        "epsAvg": 2.03735,
        "epsGrowth": 0.3429,
        "revenueAvg": 71098848030,
        "revenueGrowth": 0.128,
        "analysts": 40
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 470050340864,
    "week52High": 142.35,
    "week52Low": 18.97,
    "financialCurrency": "USD",
    "ttmRevenue": 57031999488,
    "ttmNetIncome": -11288999936,
    "_fetched_at": 1785510001.8541224,
    "_updated_label": "2026-08-01 00:00"
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
    "quoteMarketCap": 409159073792,
    "week52High": 739.67,
    "week52Low": 154.47,
    "financialCurrency": "USD",
    "ttmRevenue": 29024000000,
    "ttmNetIncome": 8508000256,
    "_fetched_at": 1785510001.8541224,
    "_updated_label": "2026-08-01 00:00"
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
    "_fetched_at": 1785510001.8541224,
    "_updated_label": "2026-08-01 00:00"
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
    "_fetched_at": 1785510001.8541224,
    "_updated_label": "2026-08-01 00:00"
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
    "quoteMarketCap": 374086762496,
    "week52High": 345.72,
    "week52Low": 114.5,
    "financialCurrency": "USD",
    "ttmRevenue": 67356999680,
    "ttmNetIncome": 16984000512,
    "_fetched_at": 1785592802.1241217,
    "_updated_label": "2026-08-01 23:00"
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
    "quoteMarketCap": 150712385536,
    "week52High": 269.11,
    "week52Low": 146.32,
    "financialCurrency": "USD",
    "ttmRevenue": 42829000704,
    "ttmNetIncome": 8023000064,
    "_fetched_at": 1785592802.1241217,
    "_updated_label": "2026-08-01 23:00"
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
    "quoteMarketCap": 295013220352,
    "week52High": 207.52,
    "week52Low": 106.37,
    "financialCurrency": "USD",
    "ttmRevenue": 5224174080,
    "ttmNetIncome": 2281529088,
    "_fetched_at": 1785592802.1241217,
    "_updated_label": "2026-08-01 23:00"
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
    "quoteMarketCap": 154990493696,
    "week52High": 259.92,
    "week52Low": 121.99,
    "financialCurrency": "USD",
    "ttmRevenue": 44068999168,
    "ttmNetIncome": 9260000256,
    "_fetched_at": 1785592802.1241217,
    "_updated_label": "2026-08-01 23:00"
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
    "quoteMarketCap": 255988580352,
    "week52High": 452.7,
    "week52Low": 100.02,
    "financialCurrency": "USD",
    "ttmRevenue": 5155999744,
    "ttmNetIncome": 1044000000,
    "_fetched_at": 1785592802.1241217,
    "_updated_label": "2026-08-01 23:00"
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
    "quoteMarketCap": 168343437312,
    "week52High": 329.88,
    "week52Low": 61.44,
    "financialCurrency": "USD",
    "ttmRevenue": 8717100032,
    "ttmNetIncome": 2526700032,
    "_fetched_at": 1785592802.1241217,
    "_updated_label": "2026-08-01 23:00"
  },
  "ASML": {
    "targetMean": 2140.2676,
    "targetLow": 891.804,
    "targetHigh": 2880.7515,
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
    "quoteMarketCap": 625698930688,
    "week52High": 1999.96,
    "week52Low": 684.24,
    "financialCurrency": "EUR",
    "ttmRevenue": 35327500288,
    "ttmNetIncome": 10638399488,
    "_fetched_at": 1785592802.1241217,
    "_updated_label": "2026-08-01 23:00"
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
    "quoteMarketCap": 366649442304,
    "week52High": 438.5,
    "week52Low": 94.11,
    "financialCurrency": "USD",
    "ttmRevenue": 23232690176,
    "ttmNetIncome": 7265396224,
    "_fetched_at": 1785592802.1241217,
    "_updated_label": "2026-08-01 23:00"
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
    "quoteMarketCap": 238813249536,
    "week52High": 307.37,
    "week52Low": 83.224,
    "financialCurrency": "USD",
    "ttmRevenue": 13579475968,
    "ttmNetIncome": 4830771200,
    "_fetched_at": 1785592802.1241217,
    "_updated_label": "2026-08-01 23:00"
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
    "quoteMarketCap": 179903873024,
    "week52High": 2354.39,
    "week52Low": 40.53,
    "financialCurrency": "USD",
    "ttmRevenue": 13184000000,
    "ttmNetIncome": 4506999808,
    "_fetched_at": 1785592802.1241217,
    "_updated_label": "2026-08-01 23:00"
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
    "quoteMarketCap": 187796635648,
    "week52High": 799.87,
    "week52Low": 73.14,
    "financialCurrency": "USD",
    "ttmRevenue": 11777000448,
    "ttmNetIncome": 6350000128,
    "_fetched_at": 1785592802.1241217,
    "_updated_label": "2026-08-01 23:00"
  }
};
