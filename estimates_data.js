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
        "epsAvg": 8.99574,
        "epsGrowth": 0.88589996,
        "revenueAvg": 393852732100,
        "revenueGrowth": 0.8239,
        "analysts": 50
      },
      {
        "period": "+1y",
        "endDate": "2028-01-31",
        "epsAvg": 12.89043,
        "epsGrowth": 0.4329,
        "revenueAvg": 561509439870,
        "revenueGrowth": 0.4257,
        "analysts": 50
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 5103362244608,
    "week52High": 236.54,
    "week52Low": 164.07,
    "financialCurrency": "USD",
    "ttmRevenue": 253491003392,
    "ttmNetIncome": 159612993536,
    "_fetched_at": 1785862802.4257123,
    "_updated_label": "2026-08-05 02:00"
  },
  "AAPL": {
    "targetMean": 324.01367,
    "targetLow": 215.0,
    "targetHigh": 400.0,
    "analystCount": 41,
    "recommendationMean": 2.06522,
    "recommendationKey": "buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2026-09-30",
        "epsAvg": 8.81654,
        "epsGrowth": 0.18180001,
        "revenueAvg": 477429865530,
        "revenueGrowth": 0.1472,
        "analysts": 37
      },
      {
        "period": "+1y",
        "endDate": "2027-09-30",
        "epsAvg": 9.58853,
        "epsGrowth": 0.0876,
        "revenueAvg": 523920633660,
        "revenueGrowth": 0.097399995,
        "analysts": 41
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 4499093585920,
    "week52High": 344.57,
    "week52Low": 202.16,
    "financialCurrency": "USD",
    "ttmRevenue": 466822987776,
    "ttmNetIncome": 128929996800,
    "_fetched_at": 1785862802.4257123,
    "_updated_label": "2026-08-05 02:00"
  },
  "GOOGL": {
    "targetMean": 428.04056,
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
        "revenueAvg": 497687581160,
        "revenueGrowth": 0.2355,
        "analysts": 50
      },
      {
        "period": "+1y",
        "endDate": "2027-12-31",
        "epsAvg": 14.76976,
        "epsGrowth": -0.2825,
        "revenueAvg": 606647397800,
        "revenueGrowth": 0.2189,
        "analysts": 55
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 4606160535552,
    "week52High": 408.61,
    "week52Low": 193.67,
    "financialCurrency": "USD",
    "ttmRevenue": 445865984000,
    "ttmNetIncome": 244118994944,
    "_fetched_at": 1785862802.4257123,
    "_updated_label": "2026-08-05 02:00"
  },
  "MSFT": {
    "targetMean": 562.72644,
    "targetLow": 400.0,
    "targetHigh": 870.0,
    "analystCount": 53,
    "recommendationMean": 1.35714,
    "recommendationKey": "strong_buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2027-06-30",
        "epsAvg": 19.67315,
        "epsGrowth": 0.1385,
        "revenueAvg": 390823908140,
        "revenueGrowth": 0.1778,
        "analysts": 35
      },
      {
        "period": "+1y",
        "endDate": "2028-06-30",
        "epsAvg": 23.46875,
        "epsGrowth": 0.1929,
        "revenueAvg": 466326461870,
        "revenueGrowth": 0.19319999,
        "analysts": 33
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 3670892609536,
    "week52High": 553.72,
    "week52Low": 349.2,
    "financialCurrency": "USD",
    "ttmRevenue": 331839012864,
    "ttmNetIncome": 133748998144,
    "_fetched_at": 1785862802.4257123,
    "_updated_label": "2026-08-05 02:00"
  },
  "AMZN": {
    "targetMean": 323.29083,
    "targetLow": 207.0,
    "targetHigh": 400.0,
    "analystCount": 61,
    "recommendationMean": 1.35484,
    "recommendationKey": "strong_buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2026-12-31",
        "epsAvg": 12.11175,
        "epsGrowth": 0.6892,
        "revenueAvg": 827528861360,
        "revenueGrowth": 0.1543,
        "analysts": 53
      },
      {
        "period": "+1y",
        "endDate": "2027-12-31",
        "epsAvg": 10.40721,
        "epsGrowth": -0.1407,
        "revenueAvg": 944458498680,
        "revenueGrowth": 0.14130001,
        "analysts": 54
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 3000536662016,
    "week52High": 281.07,
    "week52Low": 196.0,
    "financialCurrency": "USD",
    "ttmRevenue": 775680032768,
    "ttmNetIncome": 135281000448,
    "_fetched_at": 1785862802.4257123,
    "_updated_label": "2026-08-05 02:00"
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
    "quoteMarketCap": 2164626685952,
    "week52High": 479.0,
    "week52Low": 223.7,
    "financialCurrency": "TWD",
    "ttmRevenue": 4440492343296,
    "ttmNetIncome": 2216808939520,
    "_fetched_at": 1785862802.4257123,
    "_updated_label": "2026-08-05 02:00"
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
    "quoteMarketCap": 1982721556480,
    "week52High": 495.0,
    "week52Low": 281.87,
    "financialCurrency": "USD",
    "ttmRevenue": 75464998912,
    "ttmNetIncome": 29316999168,
    "_fetched_at": 1785862802.4257123,
    "_updated_label": "2026-08-05 02:00"
  },
  "META": {
    "targetMean": 759.40564,
    "targetLow": 580.0,
    "targetHigh": 1000.0,
    "analystCount": 57,
    "recommendationMean": 1.35484,
    "recommendationKey": "strong_buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2026-12-31",
        "epsAvg": 31.89232,
        "epsGrowth": 0.3577,
        "revenueAvg": 254189548520,
        "revenueGrowth": 0.26479998,
        "analysts": 54
      },
      {
        "period": "+1y",
        "endDate": "2027-12-31",
        "epsAvg": 34.02634,
        "epsGrowth": 0.0669,
        "revenueAvg": 305234223700,
        "revenueGrowth": 0.2008,
        "analysts": 53
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 1479591591936,
    "week52High": 796.25,
    "week52Low": 520.26,
    "financialCurrency": "USD",
    "ttmRevenue": 228246994944,
    "ttmNetIncome": 68097998848,
    "_fetched_at": 1785862802.4257123,
    "_updated_label": "2026-08-05 02:00"
  },
  "TSLA": {
    "targetMean": 397.87274,
    "targetLow": 125.0,
    "targetHigh": 600.0,
    "analystCount": 40,
    "recommendationMean": 2.3617,
    "recommendationKey": "buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2026-12-31",
        "epsAvg": 1.79031,
        "epsGrowth": 0.0785,
        "revenueAvg": 105875718170,
        "revenueGrowth": 0.1165,
        "analysts": 34
      },
      {
        "period": "+1y",
        "endDate": "2027-12-31",
        "epsAvg": 2.21923,
        "epsGrowth": 0.23959999,
        "revenueAvg": 120628616630,
        "revenueGrowth": 0.1393,
        "analysts": 33
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 1284708761600,
    "week52High": 498.83,
    "week52Low": 297.38,
    "financialCurrency": "USD",
    "ttmRevenue": 103619002368,
    "ttmNetIncome": 3806000128,
    "_fetched_at": 1785862802.4257123,
    "_updated_label": "2026-08-05 02:00"
  },
  "MU": {
    "targetMean": 1507.7906,
    "targetLow": 361.0,
    "targetHigh": 2200.0,
    "analystCount": 43,
    "recommendationMean": 1.41304,
    "recommendationKey": "strong_buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2026-08-31",
        "epsAvg": 73.43364,
        "epsGrowth": 7.8581,
        "revenueAvg": 129758113130,
        "revenueGrowth": 2.4715,
        "analysts": 36
      },
      {
        "period": "+1y",
        "endDate": "2027-08-31",
        "epsAvg": 155.56306,
        "epsGrowth": 1.1184,
        "revenueAvg": 240106235120,
        "revenueGrowth": 0.85040003,
        "analysts": 37
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 1011800735744,
    "week52High": 1255.0,
    "week52Low": 106.75,
    "financialCurrency": "USD",
    "ttmRevenue": 90273996800,
    "ttmNetIncome": 50468999168,
    "_fetched_at": 1785862802.4257123,
    "_updated_label": "2026-08-05 02:00"
  },
  "AMD": {
    "targetMean": 579.1064,
    "targetLow": 320.0,
    "targetHigh": 1250.0,
    "analystCount": 47,
    "recommendationMean": 1.4902,
    "recommendationKey": "strong_buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2026-12-31",
        "epsAvg": 7.46407,
        "epsGrowth": 0.7899,
        "revenueAvg": 49799117210,
        "revenueGrowth": 0.4377,
        "analysts": 46
      },
      {
        "period": "+1y",
        "endDate": "2027-12-31",
        "epsAvg": 13.91754,
        "epsGrowth": 0.8646,
        "revenueAvg": 80130879090,
        "revenueGrowth": 0.6091,
        "analysts": 45
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 854842343424,
    "week52High": 584.73,
    "week52Low": 149.22,
    "financialCurrency": "USD",
    "ttmRevenue": 37454000128,
    "ttmNetIncome": 4931999744,
    "_fetched_at": 1785862802.4257123,
    "_updated_label": "2026-08-05 02:00"
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
        "epsAvg": 1.51706,
        "epsGrowth": 2.6120002,
        "revenueAvg": 63028311600,
        "revenueGrowth": 0.1925,
        "analysts": 33
      },
      {
        "period": "+1y",
        "endDate": "2027-12-31",
        "epsAvg": 2.03736,
        "epsGrowth": 0.343,
        "revenueAvg": 71098848030,
        "revenueGrowth": 0.128,
        "analysts": 40
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 506516930560,
    "week52High": 142.35,
    "week52Low": 19.6,
    "financialCurrency": "USD",
    "ttmRevenue": 57031999488,
    "ttmNetIncome": -11288999936,
    "_fetched_at": 1785862802.4257123,
    "_updated_label": "2026-08-05 02:00"
  },
  "AMAT": {
    "targetMean": 629.0857,
    "targetLow": 358.0,
    "targetHigh": 900.0,
    "analystCount": 35,
    "recommendationMean": 1.46154,
    "recommendationKey": "strong_buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2026-10-31",
        "epsAvg": 12.28599,
        "epsGrowth": 0.3042,
        "revenueAvg": 33467984950,
        "revenueGrowth": 0.17979999,
        "analysts": 34
      },
      {
        "period": "+1y",
        "endDate": "2027-10-31",
        "epsAvg": 17.00044,
        "epsGrowth": 0.38369998,
        "revenueAvg": 43139262010,
        "revenueGrowth": 0.289,
        "analysts": 33
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 434772148224,
    "week52High": 739.67,
    "week52Low": 154.47,
    "financialCurrency": "USD",
    "ttmRevenue": 29024000000,
    "ttmNetIncome": 8508000256,
    "_fetched_at": 1785862802.4257123,
    "_updated_label": "2026-08-05 02:00"
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
    "week52Low": 555.6,
    "financialCurrency": null,
    "ttmRevenue": null,
    "ttmNetIncome": null,
    "_fetched_at": 1785862802.4257123,
    "_updated_label": "2026-08-05 02:00"
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
    "week52High": 770.32,
    "week52Low": 627.04,
    "financialCurrency": null,
    "ttmRevenue": null,
    "ttmNetIncome": null,
    "_fetched_at": 1785862802.4257123,
    "_updated_label": "2026-08-05 02:00"
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
        "revenueAvg": 89317898470,
        "revenueGrowth": 0.32599998,
        "analysts": 42
      },
      {
        "period": "+1y",
        "endDate": "2028-05-31",
        "epsAvg": 10.89015,
        "epsGrowth": 0.35259998,
        "revenueAvg": 130559653220,
        "revenueGrowth": 0.4617,
        "analysts": 40
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 415363923968,
    "week52High": 345.72,
    "week52Low": 114.5,
    "financialCurrency": "USD",
    "ttmRevenue": 67356999680,
    "ttmNetIncome": 16984000512,
    "_fetched_at": 1785949202.240046,
    "_updated_label": "2026-08-06 02:00"
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
    "quoteMarketCap": 156781166592,
    "week52High": 269.11,
    "week52Low": 146.32,
    "financialCurrency": "USD",
    "ttmRevenue": 42829000704,
    "ttmNetIncome": 8023000064,
    "_fetched_at": 1785949202.240046,
    "_updated_label": "2026-08-06 02:00"
  },
  "PLTR": {
    "targetMean": 185.68,
    "targetLow": 70.0,
    "targetHigh": 255.0,
    "analystCount": 27,
    "recommendationMean": 1.875,
    "recommendationKey": "buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2026-12-31",
        "epsAvg": 1.58112,
        "epsGrowth": 1.1082,
        "revenueAvg": 8197136619,
        "revenueGrowth": 0.8316,
        "analysts": 14
      },
      {
        "period": "+1y",
        "endDate": "2027-12-31",
        "epsAvg": 2.16586,
        "epsGrowth": 0.3698,
        "revenueAvg": 11494524080,
        "revenueGrowth": 0.4023,
        "analysts": 29
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 384241172480,
    "week52High": 207.52,
    "week52Low": 106.37,
    "financialCurrency": "USD",
    "ttmRevenue": 6155940864,
    "ttmNetIncome": 3016691968,
    "_fetched_at": 1785949202.240046,
    "_updated_label": "2026-08-06 02:00"
  },
  "QCOM": {
    "targetMean": 196.26666,
    "targetLow": 100.0,
    "targetHigh": 400.0,
    "analystCount": 30,
    "recommendationMean": 2.56757,
    "recommendationKey": "hold",
    "trend": [
      {
        "period": "0y",
        "endDate": "2026-09-30",
        "epsAvg": 10.54072,
        "epsGrowth": -0.1238,
        "revenueAvg": 42910170150,
        "revenueGrowth": -0.0279,
        "analysts": 29
      },
      {
        "period": "+1y",
        "endDate": "2027-09-30",
        "epsAvg": 10.29695,
        "epsGrowth": -0.0231,
        "revenueAvg": 44630937690,
        "revenueGrowth": 0.0401,
        "analysts": 34
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 166530007040,
    "week52High": 259.92,
    "week52Low": 121.99,
    "financialCurrency": "USD",
    "ttmRevenue": 44068999168,
    "ttmNetIncome": 9260000256,
    "_fetched_at": 1785949202.240046,
    "_updated_label": "2026-08-06 02:00"
  },
  "ARM": {
    "targetMean": 286.78918,
    "targetLow": 125.0,
    "targetHigh": 500.0,
    "analystCount": 37,
    "recommendationMean": 1.9,
    "recommendationKey": "buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2027-03-31",
        "epsAvg": 2.23332,
        "epsGrowth": 0.2618,
        "revenueAvg": 6050939330,
        "revenueGrowth": 0.2299,
        "analysts": 34
      },
      {
        "period": "+1y",
        "endDate": "2028-03-31",
        "epsAvg": 3.06936,
        "epsGrowth": 0.3743,
        "revenueAvg": 8206589080,
        "revenueGrowth": 0.3563,
        "analysts": 37
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 299546902528,
    "week52High": 452.7,
    "week52Low": 100.02,
    "financialCurrency": "USD",
    "ttmRevenue": 5155999744,
    "ttmNetIncome": 1044000000,
    "_fetched_at": 1785949202.240046,
    "_updated_label": "2026-08-06 02:00"
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
    "quoteMarketCap": 194129805312,
    "week52High": 329.88,
    "week52Low": 61.44,
    "financialCurrency": "USD",
    "ttmRevenue": 8717100032,
    "ttmNetIncome": 2526700032,
    "_fetched_at": 1785949202.240046,
    "_updated_label": "2026-08-06 02:00"
  },
  "ASML": {
    "targetMean": 2143.0117,
    "targetLow": 893.4519,
    "targetHigh": 2871.2854,
    "analystCount": 15,
    "recommendationMean": 1.38636,
    "recommendationKey": "strong_buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2026-12-31",
        "epsAvg": 38.05051,
        "epsGrowth": 0.5399,
        "revenueAvg": 42962573940,
        "revenueGrowth": 0.3152,
        "analysts": 32
      },
      {
        "period": "+1y",
        "endDate": "2027-12-31",
        "epsAvg": 51.08785,
        "epsGrowth": 0.3426,
        "revenueAvg": 53842738480,
        "revenueGrowth": 0.2532,
        "analysts": 34
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 652735676416,
    "week52High": 1999.96,
    "week52Low": 685.44,
    "financialCurrency": "EUR",
    "ttmRevenue": 35327500288,
    "ttmNetIncome": 10638399488,
    "_fetched_at": 1785949202.240046,
    "_updated_label": "2026-08-06 02:00"
  },
  "LRCX": {
    "targetMean": 368.12903,
    "targetLow": 290.0,
    "targetHigh": 500.0,
    "analystCount": 31,
    "recommendationMean": 1.45714,
    "recommendationKey": "strong_buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2027-06-30",
        "epsAvg": 9.45797,
        "epsGrowth": 0.62509996,
        "revenueAvg": 34754341950,
        "revenueGrowth": 0.4959,
        "analysts": 29
      },
      {
        "period": "+1y",
        "endDate": "2028-06-30",
        "epsAvg": 11.52522,
        "epsGrowth": 0.2186,
        "revenueAvg": 40134577810,
        "revenueGrowth": 0.1548,
        "analysts": 26
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 392175550464,
    "week52High": 438.5,
    "week52Low": 94.11,
    "financialCurrency": "USD",
    "ttmRevenue": 23232690176,
    "ttmNetIncome": 7265396224,
    "_fetched_at": 1785949202.240046,
    "_updated_label": "2026-08-06 02:00"
  },
  "KLAC": {
    "targetMean": 230.85185,
    "targetLow": 165.0,
    "targetHigh": 325.0,
    "analystCount": 27,
    "recommendationMean": 1.93103,
    "recommendationKey": "buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2027-06-30",
        "epsAvg": 5.4484,
        "epsGrowth": 0.449,
        "revenueAvg": 18099531930,
        "revenueGrowth": 0.33290002,
        "analysts": 23
      },
      {
        "period": "+1y",
        "endDate": "2028-06-30",
        "epsAvg": 6.54928,
        "epsGrowth": 0.2021,
        "revenueAvg": 20994008900,
        "revenueGrowth": 0.1599,
        "analysts": 23
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 254593024000,
    "week52High": 307.37,
    "week52Low": 83.224,
    "financialCurrency": "USD",
    "ttmRevenue": 13579475968,
    "ttmNetIncome": 4830771200,
    "_fetched_at": 1785949202.240046,
    "_updated_label": "2026-08-06 02:00"
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
        "epsAvg": 66.09682,
        "epsGrowth": 21.106,
        "revenueAvg": 19836434220,
        "revenueGrowth": 1.697,
        "analysts": 20
      },
      {
        "period": "+1y",
        "endDate": "2027-06-30",
        "epsAvg": 212.94582,
        "epsGrowth": 2.2217,
        "revenueAvg": 49866353750,
        "revenueGrowth": 1.5139,
        "analysts": 21
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 210704318464,
    "week52High": 2354.39,
    "week52Low": 40.53,
    "financialCurrency": "USD",
    "ttmRevenue": 13184000000,
    "ttmNetIncome": 4506999808,
    "_fetched_at": 1785949202.240046,
    "_updated_label": "2026-08-06 02:00"
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
        "epsAvg": 9.93661,
        "epsGrowth": 1.0155001,
        "revenueAvg": 12873646200,
        "revenueGrowth": 0.3523,
        "analysts": 21
      },
      {
        "period": "+1y",
        "endDate": "2027-06-30",
        "epsAvg": 18.36534,
        "epsGrowth": 0.84830004,
        "revenueAvg": 18247980900,
        "revenueGrowth": 0.4175,
        "analysts": 19
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 189530374144,
    "week52High": 799.87,
    "week52Low": 73.14,
    "financialCurrency": "USD",
    "ttmRevenue": 11777000448,
    "ttmNetIncome": 6350000128,
    "_fetched_at": 1785949202.240046,
    "_updated_label": "2026-08-06 02:00"
  }
};
