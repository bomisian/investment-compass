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
        "epsAvg": 8.95773,
        "epsGrowth": 0.8779,
        "revenueAvg": 394222355530,
        "revenueGrowth": 0.82559997,
        "analysts": 48
      },
      {
        "period": "+1y",
        "endDate": "2028-01-31",
        "epsAvg": 12.79836,
        "epsGrowth": 0.42880002,
        "revenueAvg": 562431809650,
        "revenueGrowth": 0.4267,
        "analysts": 48
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 5269520646144,
    "week52High": 236.54,
    "week52Low": 164.07,
    "financialCurrency": "USD",
    "ttmRevenue": 253491003392,
    "ttmNetIncome": 159612993536,
    "_fetched_at": 1787193071.3536406,
    "_updated_label": "2026-08-20 11:31",
    "_history": [
      {
        "date": "2026-08-10",
        "fetchedAt": 1786339006.7750585,
        "targetMean": 302.82758,
        "analystCount": 58,
        "eps0": 8.99574,
        "eps1": 12.89043,
        "revenue1": 561509439870,
        "epsGrowth1": 0.4329,
        "revenueGrowth1": 0.4257
      },
      {
        "date": "2026-08-11",
        "fetchedAt": 1786395620.8798974,
        "targetMean": 302.82758,
        "analystCount": 58,
        "eps0": 8.99574,
        "eps1": 12.89043,
        "revenue1": 561509439870,
        "epsGrowth1": 0.4329,
        "revenueGrowth1": 0.4257
      },
      {
        "date": "2026-08-12",
        "fetchedAt": 1786482025.890581,
        "targetMean": 302.82758,
        "analystCount": 58,
        "eps0": 8.99574,
        "eps1": 12.89043,
        "revenue1": 561509439870,
        "epsGrowth1": 0.4329,
        "revenueGrowth1": 0.4257
      },
      {
        "date": "2026-08-13",
        "fetchedAt": 1786568606.5056696,
        "targetMean": 302.82758,
        "analystCount": 58,
        "eps0": 8.99574,
        "eps1": 12.89043,
        "revenue1": 561509439870,
        "epsGrowth1": 0.4329,
        "revenueGrowth1": 0.4257
      },
      {
        "date": "2026-08-14",
        "fetchedAt": 1786665686.038369,
        "targetMean": 302.82758,
        "analystCount": 58,
        "eps0": 8.99574,
        "eps1": 12.89043,
        "revenue1": 561509439870,
        "epsGrowth1": 0.4329,
        "revenueGrowth1": 0.4257
      },
      {
        "date": "2026-08-15",
        "fetchedAt": 1786752271.5141675,
        "targetMean": 302.82758,
        "analystCount": 58,
        "eps0": 8.99574,
        "eps1": 12.89043,
        "revenue1": 561509439870,
        "epsGrowth1": 0.4329,
        "revenueGrowth1": 0.4257
      },
      {
        "date": "2026-08-16",
        "fetchedAt": 1786840263.5342243,
        "targetMean": 302.82758,
        "analystCount": 58,
        "eps0": 8.95773,
        "eps1": 12.79836,
        "revenue1": 562143085840,
        "epsGrowth1": 0.42880002,
        "revenueGrowth1": 0.42700002
      },
      {
        "date": "2026-08-17",
        "fetchedAt": 1786928309.5439892,
        "targetMean": 302.82758,
        "analystCount": 58,
        "eps0": 8.95773,
        "eps1": 12.79836,
        "revenue1": 562143085840,
        "epsGrowth1": 0.42880002,
        "revenueGrowth1": 0.42700002
      },
      {
        "date": "2026-08-18",
        "fetchedAt": 1787015792.666919,
        "targetMean": 302.82758,
        "analystCount": 58,
        "eps0": 8.95773,
        "eps1": 12.79836,
        "revenue1": 562431809650,
        "epsGrowth1": 0.42880002,
        "revenueGrowth1": 0.4267
      },
      {
        "date": "2026-08-19",
        "fetchedAt": 1787104541.4383624,
        "targetMean": 302.82758,
        "analystCount": 58,
        "eps0": 8.95773,
        "eps1": 12.79836,
        "revenue1": 562431809650,
        "epsGrowth1": 0.42880002,
        "revenueGrowth1": 0.4267
      },
      {
        "date": "2026-08-20",
        "fetchedAt": 1787193071.3536406,
        "targetMean": 302.82758,
        "analystCount": 58,
        "eps0": 8.95773,
        "eps1": 12.79836,
        "revenue1": 562431809650,
        "epsGrowth1": 0.42880002,
        "revenueGrowth1": 0.4267
      }
    ]
  },
  "AAPL": {
    "targetMean": 325.699,
    "targetLow": 215.0,
    "targetHigh": 400.0,
    "analystCount": 41,
    "recommendationMean": 2.08696,
    "recommendationKey": "buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2026-09-30",
        "epsAvg": 8.80532,
        "epsGrowth": 0.18030001,
        "revenueAvg": 477701231440,
        "revenueGrowth": 0.1479,
        "analysts": 38
      },
      {
        "period": "+1y",
        "endDate": "2027-09-30",
        "epsAvg": 9.53224,
        "epsGrowth": 0.082600005,
        "revenueAvg": 524164141440,
        "revenueGrowth": 0.09729999,
        "analysts": 40
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 4623874129920,
    "week52High": 344.57,
    "week52Low": 223.78,
    "financialCurrency": "USD",
    "ttmRevenue": 466822987776,
    "ttmNetIncome": 128929996800,
    "_fetched_at": 1787193071.3536406,
    "_updated_label": "2026-08-20 11:31",
    "_history": [
      {
        "date": "2026-08-10",
        "fetchedAt": 1786339006.7750585,
        "targetMean": 322.81854,
        "analystCount": 41,
        "eps0": 8.79979,
        "eps1": 9.54902,
        "revenue1": 523333033660,
        "epsGrowth1": 0.0851,
        "revenueGrowth1": 0.0963
      },
      {
        "date": "2026-08-11",
        "fetchedAt": 1786395620.8798974,
        "targetMean": 322.81854,
        "analystCount": 41,
        "eps0": 8.79979,
        "eps1": 9.54902,
        "revenue1": 523333033660,
        "epsGrowth1": 0.0851,
        "revenueGrowth1": 0.0963
      },
      {
        "date": "2026-08-12",
        "fetchedAt": 1786482025.890581,
        "targetMean": 322.2844,
        "analystCount": 41,
        "eps0": 8.80268,
        "eps1": 9.53474,
        "revenue1": 523204888660,
        "epsGrowth1": 0.0832,
        "revenueGrowth1": 0.0955
      },
      {
        "date": "2026-08-13",
        "fetchedAt": 1786568606.5056696,
        "targetMean": 322.2844,
        "analystCount": 41,
        "eps0": 8.80268,
        "eps1": 9.53474,
        "revenue1": 523204888660,
        "epsGrowth1": 0.0832,
        "revenueGrowth1": 0.0955
      },
      {
        "date": "2026-08-14",
        "fetchedAt": 1786665686.038369,
        "targetMean": 322.2844,
        "analystCount": 41,
        "eps0": 8.80268,
        "eps1": 9.53474,
        "revenue1": 523204888660,
        "epsGrowth1": 0.0832,
        "revenueGrowth1": 0.0955
      },
      {
        "date": "2026-08-15",
        "fetchedAt": 1786752271.5141675,
        "targetMean": 322.2844,
        "analystCount": 41,
        "eps0": 8.80268,
        "eps1": 9.53474,
        "revenue1": 523204888660,
        "epsGrowth1": 0.0832,
        "revenueGrowth1": 0.0955
      },
      {
        "date": "2026-08-16",
        "fetchedAt": 1786840263.5342243,
        "targetMean": 322.2844,
        "analystCount": 41,
        "eps0": 8.80268,
        "eps1": 9.53474,
        "revenue1": 523204888660,
        "epsGrowth1": 0.0832,
        "revenueGrowth1": 0.0955
      },
      {
        "date": "2026-08-17",
        "fetchedAt": 1786928309.5439892,
        "targetMean": 322.2844,
        "analystCount": 41,
        "eps0": 8.80268,
        "eps1": 9.53474,
        "revenue1": 523204888660,
        "epsGrowth1": 0.0832,
        "revenueGrowth1": 0.0955
      },
      {
        "date": "2026-08-18",
        "fetchedAt": 1787015792.666919,
        "targetMean": 322.2844,
        "analystCount": 41,
        "eps0": 8.80268,
        "eps1": 9.53474,
        "revenue1": 523204888660,
        "epsGrowth1": 0.0832,
        "revenueGrowth1": 0.0955
      },
      {
        "date": "2026-08-19",
        "fetchedAt": 1787104541.4383624,
        "targetMean": 325.699,
        "analystCount": 41,
        "eps0": 8.80532,
        "eps1": 9.53224,
        "revenue1": 524164141440,
        "epsGrowth1": 0.082600005,
        "revenueGrowth1": 0.09729999
      },
      {
        "date": "2026-08-20",
        "fetchedAt": 1787193071.3536406,
        "targetMean": 325.699,
        "analystCount": 41,
        "eps0": 8.80532,
        "eps1": 9.53224,
        "revenue1": 524164141440,
        "epsGrowth1": 0.082600005,
        "revenueGrowth1": 0.09729999
      }
    ]
  },
  "GOOGL": {
    "targetMean": 427.52,
    "targetLow": 340.0,
    "targetHigh": 515.0,
    "analystCount": 55,
    "recommendationMean": 1.39062,
    "recommendationKey": "strong_buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2026-12-31",
        "epsAvg": 20.59009,
        "epsGrowth": 0.90470004,
        "revenueAvg": 497715848200,
        "revenueGrowth": 0.2355,
        "analysts": 52
      },
      {
        "period": "+1y",
        "endDate": "2027-12-31",
        "epsAvg": 14.77649,
        "epsGrowth": -0.2823,
        "revenueAvg": 607274711880,
        "revenueGrowth": 0.2201,
        "analysts": 55
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 4215903354880,
    "week52High": 408.61,
    "week52Low": 196.6,
    "financialCurrency": "USD",
    "ttmRevenue": 445865984000,
    "ttmNetIncome": 244118994944,
    "_fetched_at": 1787193071.3536406,
    "_updated_label": "2026-08-20 11:31",
    "_history": [
      {
        "date": "2026-08-10",
        "fetchedAt": 1786339006.7750585,
        "targetMean": 428.04056,
        "analystCount": 55,
        "eps0": 20.5849,
        "eps1": 14.76976,
        "revenue1": 606647397800,
        "epsGrowth1": -0.2825,
        "revenueGrowth1": 0.2189
      },
      {
        "date": "2026-08-11",
        "fetchedAt": 1786395620.8798974,
        "targetMean": 428.04056,
        "analystCount": 55,
        "eps0": 20.5849,
        "eps1": 14.76976,
        "revenue1": 606647397800,
        "epsGrowth1": -0.2825,
        "revenueGrowth1": 0.2189
      },
      {
        "date": "2026-08-12",
        "fetchedAt": 1786482025.890581,
        "targetMean": 428.04056,
        "analystCount": 55,
        "eps0": 20.58853,
        "eps1": 14.77394,
        "revenue1": 606647397800,
        "epsGrowth1": -0.2824,
        "revenueGrowth1": 0.2189
      },
      {
        "date": "2026-08-13",
        "fetchedAt": 1786568606.5056696,
        "targetMean": 428.04056,
        "analystCount": 55,
        "eps0": 20.58853,
        "eps1": 14.77394,
        "revenue1": 606647397800,
        "epsGrowth1": -0.2824,
        "revenueGrowth1": 0.2189
      },
      {
        "date": "2026-08-14",
        "fetchedAt": 1786665686.038369,
        "targetMean": 428.04056,
        "analystCount": 55,
        "eps0": 20.58853,
        "eps1": 14.77394,
        "revenue1": 606647397800,
        "epsGrowth1": -0.2824,
        "revenueGrowth1": 0.2189
      },
      {
        "date": "2026-08-15",
        "fetchedAt": 1786752271.5141675,
        "targetMean": 428.04056,
        "analystCount": 55,
        "eps0": 20.58853,
        "eps1": 14.77394,
        "revenue1": 606647397800,
        "epsGrowth1": -0.2824,
        "revenueGrowth1": 0.2189
      },
      {
        "date": "2026-08-16",
        "fetchedAt": 1786840263.5342243,
        "targetMean": 427.52,
        "analystCount": 55,
        "eps0": 20.59009,
        "eps1": 14.78067,
        "revenue1": 607274711880,
        "epsGrowth1": -0.2821,
        "revenueGrowth1": 0.2201
      },
      {
        "date": "2026-08-17",
        "fetchedAt": 1786928309.5439892,
        "targetMean": 427.52,
        "analystCount": 55,
        "eps0": 20.59009,
        "eps1": 14.78067,
        "revenue1": 607274711880,
        "epsGrowth1": -0.2821,
        "revenueGrowth1": 0.2201
      },
      {
        "date": "2026-08-18",
        "fetchedAt": 1787015792.666919,
        "targetMean": 427.52,
        "analystCount": 55,
        "eps0": 20.59009,
        "eps1": 14.78067,
        "revenue1": 607274711880,
        "epsGrowth1": -0.2821,
        "revenueGrowth1": 0.2201
      },
      {
        "date": "2026-08-19",
        "fetchedAt": 1787104541.4383624,
        "targetMean": 427.52,
        "analystCount": 55,
        "eps0": 20.59009,
        "eps1": 14.77649,
        "revenue1": 607274711880,
        "epsGrowth1": -0.2823,
        "revenueGrowth1": 0.2201
      },
      {
        "date": "2026-08-20",
        "fetchedAt": 1787193071.3536406,
        "targetMean": 427.52,
        "analystCount": 55,
        "eps0": 20.59009,
        "eps1": 14.77649,
        "revenue1": 607274711880,
        "epsGrowth1": -0.2823,
        "revenueGrowth1": 0.2201
      }
    ]
  },
  "MSFT": {
    "targetMean": 569.5583,
    "targetLow": 400.0,
    "targetHigh": 870.0,
    "analystCount": 53,
    "recommendationMean": 1.35714,
    "recommendationKey": "strong_buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2027-06-30",
        "epsAvg": 19.7106,
        "epsGrowth": 0.1407,
        "revenueAvg": 391172045120,
        "revenueGrowth": 0.17879999,
        "analysts": 35
      },
      {
        "period": "+1y",
        "endDate": "2028-06-30",
        "epsAvg": 23.57328,
        "epsGrowth": 0.19600001,
        "revenueAvg": 468371533680,
        "revenueGrowth": 0.1974,
        "analysts": 33
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 3596265979904,
    "week52High": 553.72,
    "week52Low": 349.2,
    "financialCurrency": "USD",
    "ttmRevenue": 331839012864,
    "ttmNetIncome": 133748998144,
    "_fetched_at": 1787193071.3536406,
    "_updated_label": "2026-08-20 11:31",
    "_history": [
      {
        "date": "2026-08-10",
        "fetchedAt": 1786339006.7750585,
        "targetMean": 563.8413,
        "analystCount": 53,
        "eps0": 19.67658,
        "eps1": 23.4742,
        "revenue1": 467596210850,
        "epsGrowth1": 0.19299999,
        "revenueGrowth1": 0.19600001
      },
      {
        "date": "2026-08-11",
        "fetchedAt": 1786395620.8798974,
        "targetMean": 563.8413,
        "analystCount": 53,
        "eps0": 19.67658,
        "eps1": 23.4742,
        "revenue1": 467596210850,
        "epsGrowth1": 0.19299999,
        "revenueGrowth1": 0.19600001
      },
      {
        "date": "2026-08-12",
        "fetchedAt": 1786482025.890581,
        "targetMean": 567.1998,
        "analystCount": 53,
        "eps0": 19.70401,
        "eps1": 23.55269,
        "revenue1": 468328949460,
        "epsGrowth1": 0.19530001,
        "revenueGrowth1": 0.1973
      },
      {
        "date": "2026-08-13",
        "fetchedAt": 1786568606.5056696,
        "targetMean": 567.1998,
        "analystCount": 53,
        "eps0": 19.70401,
        "eps1": 23.55269,
        "revenue1": 468328949460,
        "epsGrowth1": 0.19530001,
        "revenueGrowth1": 0.1973
      },
      {
        "date": "2026-08-14",
        "fetchedAt": 1786665686.038369,
        "targetMean": 567.1998,
        "analystCount": 53,
        "eps0": 19.70401,
        "eps1": 23.55269,
        "revenue1": 468328949460,
        "epsGrowth1": 0.19530001,
        "revenueGrowth1": 0.1973
      },
      {
        "date": "2026-08-15",
        "fetchedAt": 1786752271.5141675,
        "targetMean": 567.1998,
        "analystCount": 53,
        "eps0": 19.70401,
        "eps1": 23.55269,
        "revenue1": 468328949460,
        "epsGrowth1": 0.19530001,
        "revenueGrowth1": 0.1973
      },
      {
        "date": "2026-08-16",
        "fetchedAt": 1786840263.5342243,
        "targetMean": 569.5583,
        "analystCount": 53,
        "eps0": 19.7106,
        "eps1": 23.57328,
        "revenue1": 468371043880,
        "epsGrowth1": 0.19600001,
        "revenueGrowth1": 0.1974
      },
      {
        "date": "2026-08-17",
        "fetchedAt": 1786928309.5439892,
        "targetMean": 569.5583,
        "analystCount": 53,
        "eps0": 19.7106,
        "eps1": 23.57328,
        "revenue1": 468371043880,
        "epsGrowth1": 0.19600001,
        "revenueGrowth1": 0.1974
      },
      {
        "date": "2026-08-18",
        "fetchedAt": 1787015792.666919,
        "targetMean": 569.5583,
        "analystCount": 53,
        "eps0": 19.7106,
        "eps1": 23.57328,
        "revenue1": 468371043880,
        "epsGrowth1": 0.19600001,
        "revenueGrowth1": 0.1974
      },
      {
        "date": "2026-08-19",
        "fetchedAt": 1787104541.4383624,
        "targetMean": 569.5583,
        "analystCount": 53,
        "eps0": 19.7106,
        "eps1": 23.57328,
        "revenue1": 468371533680,
        "epsGrowth1": 0.19600001,
        "revenueGrowth1": 0.1974
      },
      {
        "date": "2026-08-20",
        "fetchedAt": 1787193071.3536406,
        "targetMean": 569.5583,
        "analystCount": 53,
        "eps0": 19.7106,
        "eps1": 23.57328,
        "revenue1": 468371533680,
        "epsGrowth1": 0.19600001,
        "revenueGrowth1": 0.1974
      }
    ]
  },
  "AMZN": {
    "targetMean": 327.004,
    "targetLow": 230.0,
    "targetHigh": 405.0,
    "analystCount": 60,
    "recommendationMean": 1.31667,
    "recommendationKey": "strong_buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2026-12-31",
        "epsAvg": 12.41534,
        "epsGrowth": 0.73160005,
        "revenueAvg": 828284054670,
        "revenueGrowth": 0.15529999,
        "analysts": 53
      },
      {
        "period": "+1y",
        "endDate": "2027-12-31",
        "epsAvg": 10.4915,
        "epsGrowth": -0.155,
        "revenueAvg": 946364510320,
        "revenueGrowth": 0.1426,
        "analysts": 53
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 2867433570304,
    "week52High": 287.2,
    "week52Low": 196.0,
    "financialCurrency": "USD",
    "ttmRevenue": 775680032768,
    "ttmNetIncome": 135281000448,
    "_fetched_at": 1787193071.3536406,
    "_updated_label": "2026-08-20 11:31",
    "_history": [
      {
        "date": "2026-08-10",
        "fetchedAt": 1786339006.7750585,
        "targetMean": 324.94067,
        "analystCount": 59,
        "eps0": 12.23555,
        "eps1": 10.42508,
        "revenue1": 945531744400,
        "epsGrowth1": -0.148,
        "revenueGrowth1": 0.1417
      },
      {
        "date": "2026-08-11",
        "fetchedAt": 1786395620.8798974,
        "targetMean": 324.94067,
        "analystCount": 59,
        "eps0": 12.23555,
        "eps1": 10.42508,
        "revenue1": 945531744400,
        "epsGrowth1": -0.148,
        "revenueGrowth1": 0.1417
      },
      {
        "date": "2026-08-12",
        "fetchedAt": 1786482025.890581,
        "targetMean": 325.19492,
        "analystCount": 59,
        "eps0": 12.31359,
        "eps1": 10.43705,
        "revenue1": 945788998630,
        "epsGrowth1": -0.1524,
        "revenueGrowth1": 0.142
      },
      {
        "date": "2026-08-13",
        "fetchedAt": 1786568606.5056696,
        "targetMean": 325.19492,
        "analystCount": 59,
        "eps0": 12.31359,
        "eps1": 10.43705,
        "revenue1": 945788998630,
        "epsGrowth1": -0.1524,
        "revenueGrowth1": 0.142
      },
      {
        "date": "2026-08-14",
        "fetchedAt": 1786665686.038369,
        "targetMean": 326.82068,
        "analystCount": 60,
        "eps0": 12.34194,
        "eps1": 10.47055,
        "revenue1": 946029410320,
        "epsGrowth1": -0.1516,
        "revenueGrowth1": 0.14220001
      },
      {
        "date": "2026-08-15",
        "fetchedAt": 1786752271.5141675,
        "targetMean": 326.82068,
        "analystCount": 60,
        "eps0": 12.34194,
        "eps1": 10.47055,
        "revenue1": 946029410320,
        "epsGrowth1": -0.1516,
        "revenueGrowth1": 0.14220001
      },
      {
        "date": "2026-08-16",
        "fetchedAt": 1786840263.5342243,
        "targetMean": 326.82068,
        "analystCount": 60,
        "eps0": 12.34194,
        "eps1": 10.47055,
        "revenue1": 946029410320,
        "epsGrowth1": -0.1516,
        "revenueGrowth1": 0.14220001
      },
      {
        "date": "2026-08-17",
        "fetchedAt": 1786928309.5439892,
        "targetMean": 327.004,
        "analystCount": 60,
        "eps0": 12.41534,
        "eps1": 10.4915,
        "revenue1": 946364510320,
        "epsGrowth1": -0.155,
        "revenueGrowth1": 0.1426
      },
      {
        "date": "2026-08-18",
        "fetchedAt": 1787015792.666919,
        "targetMean": 327.004,
        "analystCount": 60,
        "eps0": 12.41534,
        "eps1": 10.4915,
        "revenue1": 946364510320,
        "epsGrowth1": -0.155,
        "revenueGrowth1": 0.1426
      },
      {
        "date": "2026-08-19",
        "fetchedAt": 1787104541.4383624,
        "targetMean": 327.004,
        "analystCount": 60,
        "eps0": 12.41534,
        "eps1": 10.4915,
        "revenue1": 946364510320,
        "epsGrowth1": -0.155,
        "revenueGrowth1": 0.1426
      },
      {
        "date": "2026-08-20",
        "fetchedAt": 1787193071.3536406,
        "targetMean": 327.004,
        "analystCount": 60,
        "eps0": 12.41534,
        "eps1": 10.4915,
        "revenue1": 946364510320,
        "epsGrowth1": -0.155,
        "revenueGrowth1": 0.1426
      }
    ]
  },
  "TSM": {
    "targetMean": 547.09375,
    "targetLow": 431.5,
    "targetHigh": 700.0,
    "analystCount": 18,
    "recommendationMean": 1.42105,
    "recommendationKey": "strong_buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2026-12-31",
        "epsAvg": 16.89809,
        "epsGrowth": 0.58669996,
        "revenueAvg": 5435231240630,
        "revenueGrowth": 0.4269,
        "analysts": 12
      },
      {
        "period": "+1y",
        "endDate": "2027-12-31",
        "epsAvg": 21.78127,
        "epsGrowth": 0.289,
        "revenueAvg": 7263649050030,
        "revenueGrowth": 0.3364,
        "analysts": 12
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 2137293979648,
    "week52High": 479.0,
    "week52Low": 225.63,
    "financialCurrency": "TWD",
    "ttmRevenue": 4440492343296,
    "ttmNetIncome": 2216808415232,
    "_fetched_at": 1787193071.3536406,
    "_updated_label": "2026-08-20 11:31",
    "_history": [
      {
        "date": "2026-08-10",
        "fetchedAt": 1786339006.7750585,
        "targetMean": 540.20483,
        "analystCount": 18,
        "eps0": 16.81977,
        "eps1": 21.60809,
        "revenue1": 7187439013020,
        "epsGrowth1": 0.2847,
        "revenueGrowth1": 0.32599998
      },
      {
        "date": "2026-08-11",
        "fetchedAt": 1786395620.8798974,
        "targetMean": 540.20483,
        "analystCount": 18,
        "eps0": 16.81977,
        "eps1": 21.60809,
        "revenue1": 7187439013020,
        "epsGrowth1": 0.2847,
        "revenueGrowth1": 0.32599998
      },
      {
        "date": "2026-08-12",
        "fetchedAt": 1786482025.890581,
        "targetMean": 547.09375,
        "analystCount": 18,
        "eps0": 16.87892,
        "eps1": 21.76294,
        "revenue1": 7207012788020,
        "epsGrowth1": 0.2894,
        "revenueGrowth1": 0.32819998
      },
      {
        "date": "2026-08-13",
        "fetchedAt": 1786568606.5056696,
        "targetMean": 547.09375,
        "analystCount": 18,
        "eps0": 16.87892,
        "eps1": 21.76294,
        "revenue1": 7207012788020,
        "epsGrowth1": 0.2894,
        "revenueGrowth1": 0.32819998
      },
      {
        "date": "2026-08-14",
        "fetchedAt": 1786665686.038369,
        "targetMean": 547.09375,
        "analystCount": 18,
        "eps0": 16.87892,
        "eps1": 21.76294,
        "revenue1": 7207012788020,
        "epsGrowth1": 0.2894,
        "revenueGrowth1": 0.32819998
      },
      {
        "date": "2026-08-15",
        "fetchedAt": 1786752271.5141675,
        "targetMean": 547.09375,
        "analystCount": 18,
        "eps0": 16.87892,
        "eps1": 21.76294,
        "revenue1": 7207012788020,
        "epsGrowth1": 0.2894,
        "revenueGrowth1": 0.32819998
      },
      {
        "date": "2026-08-16",
        "fetchedAt": 1786840263.5342243,
        "targetMean": 547.09375,
        "analystCount": 18,
        "eps0": 16.89809,
        "eps1": 21.78127,
        "revenue1": 7243962192840,
        "epsGrowth1": 0.289,
        "revenueGrowth1": 0.3346
      },
      {
        "date": "2026-08-17",
        "fetchedAt": 1786928309.5439892,
        "targetMean": 547.09375,
        "analystCount": 18,
        "eps0": 16.89809,
        "eps1": 21.78127,
        "revenue1": 7243962192840,
        "epsGrowth1": 0.289,
        "revenueGrowth1": 0.3346
      },
      {
        "date": "2026-08-18",
        "fetchedAt": 1787015792.666919,
        "targetMean": 547.09375,
        "analystCount": 18,
        "eps0": 16.89809,
        "eps1": 21.78127,
        "revenue1": 7263649050030,
        "epsGrowth1": 0.289,
        "revenueGrowth1": 0.3364
      },
      {
        "date": "2026-08-19",
        "fetchedAt": 1787104541.4383624,
        "targetMean": 547.09375,
        "analystCount": 18,
        "eps0": 16.89809,
        "eps1": 21.78127,
        "revenue1": 7263649050030,
        "epsGrowth1": 0.289,
        "revenueGrowth1": 0.3364
      },
      {
        "date": "2026-08-20",
        "fetchedAt": 1787193071.3536406,
        "targetMean": 547.09375,
        "analystCount": 18,
        "eps0": 16.89809,
        "eps1": 21.78127,
        "revenue1": 7263649050030,
        "epsGrowth1": 0.289,
        "revenueGrowth1": 0.3364
      }
    ]
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
        "epsAvg": 19.53066,
        "epsGrowth": 0.68,
        "revenueAvg": 173526945620,
        "revenueGrowth": 0.6364,
        "analysts": 46
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 1724527804416,
    "week52High": 495.0,
    "week52Low": 286.17,
    "financialCurrency": "USD",
    "ttmRevenue": 75464998912,
    "ttmNetIncome": 29316999168,
    "_fetched_at": 1787193071.3536406,
    "_updated_label": "2026-08-20 11:31",
    "_history": [
      {
        "date": "2026-08-10",
        "fetchedAt": 1786339006.7750585,
        "targetMean": 527.88446,
        "analystCount": 45,
        "eps0": 11.62543,
        "eps1": 19.49196,
        "revenue1": 173211633120,
        "epsGrowth1": 0.6767,
        "revenueGrowth1": 0.6335
      },
      {
        "date": "2026-08-11",
        "fetchedAt": 1786395620.8798974,
        "targetMean": 527.88446,
        "analystCount": 45,
        "eps0": 11.62543,
        "eps1": 19.49196,
        "revenue1": 173211633120,
        "epsGrowth1": 0.6767,
        "revenueGrowth1": 0.6335
      },
      {
        "date": "2026-08-12",
        "fetchedAt": 1786482025.890581,
        "targetMean": 527.88446,
        "analystCount": 45,
        "eps0": 11.62543,
        "eps1": 19.53066,
        "revenue1": 173526945620,
        "epsGrowth1": 0.68,
        "revenueGrowth1": 0.6364
      },
      {
        "date": "2026-08-13",
        "fetchedAt": 1786568606.5056696,
        "targetMean": 527.88446,
        "analystCount": 45,
        "eps0": 11.62543,
        "eps1": 19.53066,
        "revenue1": 173526945620,
        "epsGrowth1": 0.68,
        "revenueGrowth1": 0.6364
      },
      {
        "date": "2026-08-14",
        "fetchedAt": 1786665686.038369,
        "targetMean": 527.88446,
        "analystCount": 45,
        "eps0": 11.62543,
        "eps1": 19.53066,
        "revenue1": 173526945620,
        "epsGrowth1": 0.68,
        "revenueGrowth1": 0.6364
      },
      {
        "date": "2026-08-15",
        "fetchedAt": 1786752271.5141675,
        "targetMean": 527.88446,
        "analystCount": 45,
        "eps0": 11.62543,
        "eps1": 19.53066,
        "revenue1": 173526945620,
        "epsGrowth1": 0.68,
        "revenueGrowth1": 0.6364
      },
      {
        "date": "2026-08-16",
        "fetchedAt": 1786840263.5342243,
        "targetMean": 527.88446,
        "analystCount": 45,
        "eps0": 11.62543,
        "eps1": 19.53066,
        "revenue1": 173526945620,
        "epsGrowth1": 0.68,
        "revenueGrowth1": 0.6364
      },
      {
        "date": "2026-08-17",
        "fetchedAt": 1786928309.5439892,
        "targetMean": 527.88446,
        "analystCount": 45,
        "eps0": 11.62543,
        "eps1": 19.53066,
        "revenue1": 173526945620,
        "epsGrowth1": 0.68,
        "revenueGrowth1": 0.6364
      },
      {
        "date": "2026-08-18",
        "fetchedAt": 1787015792.666919,
        "targetMean": 527.88446,
        "analystCount": 45,
        "eps0": 11.62543,
        "eps1": 19.53066,
        "revenue1": 173526945620,
        "epsGrowth1": 0.68,
        "revenueGrowth1": 0.6364
      },
      {
        "date": "2026-08-19",
        "fetchedAt": 1787104541.4383624,
        "targetMean": 527.88446,
        "analystCount": 45,
        "eps0": 11.62543,
        "eps1": 19.53066,
        "revenue1": 173526945620,
        "epsGrowth1": 0.68,
        "revenueGrowth1": 0.6364
      },
      {
        "date": "2026-08-20",
        "fetchedAt": 1787193071.3536406,
        "targetMean": 527.88446,
        "analystCount": 45,
        "eps0": 11.62543,
        "eps1": 19.53066,
        "revenue1": 173526945620,
        "epsGrowth1": 0.68,
        "revenueGrowth1": 0.6364
      }
    ]
  },
  "META": {
    "targetMean": 754.14246,
    "targetLow": 580.0,
    "targetHigh": 1000.0,
    "analystCount": 57,
    "recommendationMean": 1.35484,
    "recommendationKey": "strong_buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2026-12-31",
        "epsAvg": 31.83917,
        "epsGrowth": 0.3554,
        "revenueAvg": 254313925820,
        "revenueGrowth": 0.26549998,
        "analysts": 54
      },
      {
        "period": "+1y",
        "endDate": "2027-12-31",
        "epsAvg": 33.948,
        "epsGrowth": 0.066199996,
        "revenueAvg": 305527099140,
        "revenueGrowth": 0.2014,
        "analysts": 52
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 1391014838272,
    "week52High": 790.8,
    "week52Low": 520.26,
    "financialCurrency": "USD",
    "ttmRevenue": 228246994944,
    "ttmNetIncome": 68097998848,
    "_fetched_at": 1787193071.3536406,
    "_updated_label": "2026-08-20 11:31",
    "_history": [
      {
        "date": "2026-08-10",
        "fetchedAt": 1786339006.7750585,
        "targetMean": 756.94946,
        "analystCount": 57,
        "eps0": 31.83917,
        "eps1": 33.948,
        "revenue1": 305527099140,
        "epsGrowth1": 0.066199996,
        "revenueGrowth1": 0.2014
      },
      {
        "date": "2026-08-11",
        "fetchedAt": 1786395620.8798974,
        "targetMean": 756.94946,
        "analystCount": 57,
        "eps0": 31.83917,
        "eps1": 33.948,
        "revenue1": 305527099140,
        "epsGrowth1": 0.066199996,
        "revenueGrowth1": 0.2014
      },
      {
        "date": "2026-08-12",
        "fetchedAt": 1786482025.890581,
        "targetMean": 754.14246,
        "analystCount": 57,
        "eps0": 31.83917,
        "eps1": 33.948,
        "revenue1": 305527099140,
        "epsGrowth1": 0.066199996,
        "revenueGrowth1": 0.2014
      },
      {
        "date": "2026-08-13",
        "fetchedAt": 1786568606.5056696,
        "targetMean": 754.14246,
        "analystCount": 57,
        "eps0": 31.83917,
        "eps1": 33.948,
        "revenue1": 305527099140,
        "epsGrowth1": 0.066199996,
        "revenueGrowth1": 0.2014
      },
      {
        "date": "2026-08-14",
        "fetchedAt": 1786665686.038369,
        "targetMean": 754.14246,
        "analystCount": 57,
        "eps0": 31.83917,
        "eps1": 33.948,
        "revenue1": 305527099140,
        "epsGrowth1": 0.066199996,
        "revenueGrowth1": 0.2014
      },
      {
        "date": "2026-08-15",
        "fetchedAt": 1786752271.5141675,
        "targetMean": 754.14246,
        "analystCount": 57,
        "eps0": 31.83917,
        "eps1": 33.948,
        "revenue1": 305527099140,
        "epsGrowth1": 0.066199996,
        "revenueGrowth1": 0.2014
      },
      {
        "date": "2026-08-16",
        "fetchedAt": 1786840263.5342243,
        "targetMean": 754.14246,
        "analystCount": 57,
        "eps0": 31.83917,
        "eps1": 33.948,
        "revenue1": 305527099140,
        "epsGrowth1": 0.066199996,
        "revenueGrowth1": 0.2014
      },
      {
        "date": "2026-08-17",
        "fetchedAt": 1786928309.5439892,
        "targetMean": 754.14246,
        "analystCount": 57,
        "eps0": 31.83917,
        "eps1": 33.948,
        "revenue1": 305527099140,
        "epsGrowth1": 0.066199996,
        "revenueGrowth1": 0.2014
      },
      {
        "date": "2026-08-18",
        "fetchedAt": 1787015792.666919,
        "targetMean": 754.14246,
        "analystCount": 57,
        "eps0": 31.83917,
        "eps1": 33.948,
        "revenue1": 305527099140,
        "epsGrowth1": 0.066199996,
        "revenueGrowth1": 0.2014
      },
      {
        "date": "2026-08-19",
        "fetchedAt": 1787104541.4383624,
        "targetMean": 754.14246,
        "analystCount": 57,
        "eps0": 31.83917,
        "eps1": 33.948,
        "revenue1": 305527099140,
        "epsGrowth1": 0.066199996,
        "revenueGrowth1": 0.2014
      },
      {
        "date": "2026-08-20",
        "fetchedAt": 1787193071.3536406,
        "targetMean": 754.14246,
        "analystCount": 57,
        "eps0": 31.83917,
        "eps1": 33.948,
        "revenue1": 305527099140,
        "epsGrowth1": 0.066199996,
        "revenueGrowth1": 0.2014
      }
    ]
  },
  "TSLA": {
    "targetMean": 395.3405,
    "targetLow": 125.0,
    "targetHigh": 600.0,
    "analystCount": 40,
    "recommendationMean": 2.31915,
    "recommendationKey": "buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2026-12-31",
        "epsAvg": 1.78059,
        "epsGrowth": 0.0726,
        "revenueAvg": 106021403390,
        "revenueGrowth": 0.1181,
        "analysts": 35
      },
      {
        "period": "+1y",
        "endDate": "2027-12-31",
        "epsAvg": 2.17498,
        "epsGrowth": 0.2215,
        "revenueAvg": 120771986210,
        "revenueGrowth": 0.1391,
        "analysts": 33
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 1386765090816,
    "week52High": 498.83,
    "week52Low": 297.38,
    "financialCurrency": "USD",
    "ttmRevenue": 103619002368,
    "ttmNetIncome": 3806000128,
    "_fetched_at": 1787193071.3536406,
    "_updated_label": "2026-08-20 11:31",
    "_history": [
      {
        "date": "2026-08-10",
        "fetchedAt": 1786339006.7750585,
        "targetMean": 396.62274,
        "analystCount": 40,
        "eps0": 1.79031,
        "eps1": 2.21923,
        "revenue1": 120604254930,
        "epsGrowth1": 0.23959999,
        "revenueGrowth1": 0.1393
      },
      {
        "date": "2026-08-11",
        "fetchedAt": 1786395620.8798974,
        "targetMean": 396.62274,
        "analystCount": 40,
        "eps0": 1.79031,
        "eps1": 2.21923,
        "revenue1": 120604254930,
        "epsGrowth1": 0.23959999,
        "revenueGrowth1": 0.1393
      },
      {
        "date": "2026-08-12",
        "fetchedAt": 1786482025.890581,
        "targetMean": 396.62274,
        "analystCount": 40,
        "eps0": 1.79031,
        "eps1": 2.21923,
        "revenue1": 120604254930,
        "epsGrowth1": 0.23959999,
        "revenueGrowth1": 0.1393
      },
      {
        "date": "2026-08-13",
        "fetchedAt": 1786568606.5056696,
        "targetMean": 396.62274,
        "analystCount": 40,
        "eps0": 1.79031,
        "eps1": 2.21923,
        "revenue1": 120604254930,
        "epsGrowth1": 0.23959999,
        "revenueGrowth1": 0.1393
      },
      {
        "date": "2026-08-14",
        "fetchedAt": 1786665686.038369,
        "targetMean": 396.62274,
        "analystCount": 40,
        "eps0": 1.79031,
        "eps1": 2.21923,
        "revenue1": 120604254930,
        "epsGrowth1": 0.23959999,
        "revenueGrowth1": 0.1393
      },
      {
        "date": "2026-08-15",
        "fetchedAt": 1786752271.5141675,
        "targetMean": 396.62274,
        "analystCount": 40,
        "eps0": 1.79031,
        "eps1": 2.21923,
        "revenue1": 120604254930,
        "epsGrowth1": 0.23959999,
        "revenueGrowth1": 0.1393
      },
      {
        "date": "2026-08-16",
        "fetchedAt": 1786840263.5342243,
        "targetMean": 395.3405,
        "analystCount": 40,
        "eps0": 1.78059,
        "eps1": 2.17498,
        "revenue1": 120771986210,
        "epsGrowth1": 0.2215,
        "revenueGrowth1": 0.1391
      },
      {
        "date": "2026-08-17",
        "fetchedAt": 1786928309.5439892,
        "targetMean": 395.3405,
        "analystCount": 40,
        "eps0": 1.78059,
        "eps1": 2.17498,
        "revenue1": 120771986210,
        "epsGrowth1": 0.2215,
        "revenueGrowth1": 0.1391
      },
      {
        "date": "2026-08-18",
        "fetchedAt": 1787015792.666919,
        "targetMean": 395.3405,
        "analystCount": 40,
        "eps0": 1.78059,
        "eps1": 2.17498,
        "revenue1": 120771986210,
        "epsGrowth1": 0.2215,
        "revenueGrowth1": 0.1391
      },
      {
        "date": "2026-08-19",
        "fetchedAt": 1787104541.4383624,
        "targetMean": 395.3405,
        "analystCount": 40,
        "eps0": 1.78059,
        "eps1": 2.17498,
        "revenue1": 120771986210,
        "epsGrowth1": 0.2215,
        "revenueGrowth1": 0.1391
      },
      {
        "date": "2026-08-20",
        "fetchedAt": 1787193071.3536406,
        "targetMean": 395.3405,
        "analystCount": 40,
        "eps0": 1.78059,
        "eps1": 2.17498,
        "revenue1": 120771986210,
        "epsGrowth1": 0.2215,
        "revenueGrowth1": 0.1391
      }
    ]
  },
  "MU": {
    "targetMean": 1501.9767,
    "targetLow": 361.0,
    "targetHigh": 2200.0,
    "analystCount": 43,
    "recommendationMean": 1.41304,
    "recommendationKey": "strong_buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2026-08-31",
        "epsAvg": 73.38748,
        "epsGrowth": 7.8525,
        "revenueAvg": 129741678360,
        "revenueGrowth": 2.4711,
        "analysts": 37
      },
      {
        "period": "+1y",
        "endDate": "2027-08-31",
        "epsAvg": 154.88959,
        "epsGrowth": 1.1106,
        "revenueAvg": 239843800520,
        "revenueGrowth": 0.84860003,
        "analysts": 38
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 1058359934976,
    "week52High": 1255.0,
    "week52Low": 114.25,
    "financialCurrency": "USD",
    "ttmRevenue": 90273996800,
    "ttmNetIncome": 50468999168,
    "_fetched_at": 1787193071.3536406,
    "_updated_label": "2026-08-20 11:31",
    "_history": [
      {
        "date": "2026-08-10",
        "fetchedAt": 1786339006.7750585,
        "targetMean": 1501.9767,
        "analystCount": 43,
        "eps0": 73.39892,
        "eps1": 155.06258,
        "revenue1": 240058616070,
        "epsGrowth1": 1.1126,
        "revenueGrowth1": 0.85
      },
      {
        "date": "2026-08-11",
        "fetchedAt": 1786395620.8798974,
        "targetMean": 1501.9767,
        "analystCount": 43,
        "eps0": 73.39892,
        "eps1": 155.06258,
        "revenue1": 240058616070,
        "epsGrowth1": 1.1126,
        "revenueGrowth1": 0.85
      },
      {
        "date": "2026-08-12",
        "fetchedAt": 1786482025.890581,
        "targetMean": 1501.9767,
        "analystCount": 43,
        "eps0": 73.38748,
        "eps1": 154.88959,
        "revenue1": 239843800520,
        "epsGrowth1": 1.1106,
        "revenueGrowth1": 0.84860003
      },
      {
        "date": "2026-08-13",
        "fetchedAt": 1786568606.5056696,
        "targetMean": 1501.9767,
        "analystCount": 43,
        "eps0": 73.38748,
        "eps1": 154.88959,
        "revenue1": 239843800520,
        "epsGrowth1": 1.1106,
        "revenueGrowth1": 0.84860003
      },
      {
        "date": "2026-08-14",
        "fetchedAt": 1786665686.038369,
        "targetMean": 1501.9767,
        "analystCount": 43,
        "eps0": 73.38748,
        "eps1": 154.88959,
        "revenue1": 239843800520,
        "epsGrowth1": 1.1106,
        "revenueGrowth1": 0.84860003
      },
      {
        "date": "2026-08-15",
        "fetchedAt": 1786752271.5141675,
        "targetMean": 1501.9767,
        "analystCount": 43,
        "eps0": 73.38748,
        "eps1": 154.88959,
        "revenue1": 239843800520,
        "epsGrowth1": 1.1106,
        "revenueGrowth1": 0.84860003
      },
      {
        "date": "2026-08-16",
        "fetchedAt": 1786840263.5342243,
        "targetMean": 1501.9767,
        "analystCount": 43,
        "eps0": 73.38748,
        "eps1": 154.88959,
        "revenue1": 239843800520,
        "epsGrowth1": 1.1106,
        "revenueGrowth1": 0.84860003
      },
      {
        "date": "2026-08-17",
        "fetchedAt": 1786928309.5439892,
        "targetMean": 1501.9767,
        "analystCount": 43,
        "eps0": 73.38748,
        "eps1": 154.88959,
        "revenue1": 239843800520,
        "epsGrowth1": 1.1106,
        "revenueGrowth1": 0.84860003
      },
      {
        "date": "2026-08-18",
        "fetchedAt": 1787015792.666919,
        "targetMean": 1501.9767,
        "analystCount": 43,
        "eps0": 73.38748,
        "eps1": 154.88959,
        "revenue1": 239843800520,
        "epsGrowth1": 1.1106,
        "revenueGrowth1": 0.84860003
      },
      {
        "date": "2026-08-19",
        "fetchedAt": 1787104541.4383624,
        "targetMean": 1501.9767,
        "analystCount": 43,
        "eps0": 73.38748,
        "eps1": 154.88959,
        "revenue1": 239843800520,
        "epsGrowth1": 1.1106,
        "revenueGrowth1": 0.84860003
      },
      {
        "date": "2026-08-20",
        "fetchedAt": 1787193071.3536406,
        "targetMean": 1501.9767,
        "analystCount": 43,
        "eps0": 73.38748,
        "eps1": 154.88959,
        "revenue1": 239843800520,
        "epsGrowth1": 1.1106,
        "revenueGrowth1": 0.84860003
      }
    ]
  },
  "AMD": {
    "targetMean": 612.8383,
    "targetLow": 365.0,
    "targetHigh": 1250.0,
    "analystCount": 47,
    "recommendationMean": 1.48077,
    "recommendationKey": "strong_buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2026-12-31",
        "epsAvg": 7.56141,
        "epsGrowth": 0.8133,
        "revenueAvg": 50781391960,
        "revenueGrowth": 0.466,
        "analysts": 45
      },
      {
        "period": "+1y",
        "endDate": "2027-12-31",
        "epsAvg": 15.45987,
        "epsGrowth": 1.0446,
        "revenueAvg": 87336149860,
        "revenueGrowth": 0.71980006,
        "analysts": 44
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 761419005952,
    "week52High": 584.73,
    "week52Low": 149.22,
    "financialCurrency": "USD",
    "ttmRevenue": 41305001984,
    "ttmNetIncome": 6469000192,
    "_fetched_at": 1787193071.3536406,
    "_updated_label": "2026-08-20 11:31",
    "_history": [
      {
        "date": "2026-08-10",
        "fetchedAt": 1786339006.7750585,
        "targetMean": 613.3348,
        "analystCount": 46,
        "eps0": 7.56141,
        "eps1": 15.45987,
        "revenue1": 87460982840,
        "epsGrowth1": 1.0446,
        "revenueGrowth1": 0.7214
      },
      {
        "date": "2026-08-11",
        "fetchedAt": 1786395620.8798974,
        "targetMean": 613.3348,
        "analystCount": 46,
        "eps0": 7.56141,
        "eps1": 15.45987,
        "revenue1": 87460982840,
        "epsGrowth1": 1.0446,
        "revenueGrowth1": 0.7214
      },
      {
        "date": "2026-08-12",
        "fetchedAt": 1786482025.890581,
        "targetMean": 613.3348,
        "analystCount": 46,
        "eps0": 7.56141,
        "eps1": 15.45987,
        "revenue1": 87460982840,
        "epsGrowth1": 1.0446,
        "revenueGrowth1": 0.7214
      },
      {
        "date": "2026-08-13",
        "fetchedAt": 1786568606.5056696,
        "targetMean": 613.3348,
        "analystCount": 46,
        "eps0": 7.56141,
        "eps1": 15.45987,
        "revenue1": 87460982840,
        "epsGrowth1": 1.0446,
        "revenueGrowth1": 0.7214
      },
      {
        "date": "2026-08-14",
        "fetchedAt": 1786665686.038369,
        "targetMean": 613.3348,
        "analystCount": 46,
        "eps0": 7.56141,
        "eps1": 15.45987,
        "revenue1": 87460982840,
        "epsGrowth1": 1.0446,
        "revenueGrowth1": 0.7214
      },
      {
        "date": "2026-08-15",
        "fetchedAt": 1786752271.5141675,
        "targetMean": 613.3348,
        "analystCount": 46,
        "eps0": 7.56141,
        "eps1": 15.45987,
        "revenue1": 87460982840,
        "epsGrowth1": 1.0446,
        "revenueGrowth1": 0.7214
      },
      {
        "date": "2026-08-16",
        "fetchedAt": 1786840263.5342243,
        "targetMean": 612.8383,
        "analystCount": 47,
        "eps0": 7.56141,
        "eps1": 15.45987,
        "revenue1": 87336149860,
        "epsGrowth1": 1.0446,
        "revenueGrowth1": 0.71980006
      },
      {
        "date": "2026-08-17",
        "fetchedAt": 1786928309.5439892,
        "targetMean": 612.8383,
        "analystCount": 47,
        "eps0": 7.56141,
        "eps1": 15.45987,
        "revenue1": 87336149860,
        "epsGrowth1": 1.0446,
        "revenueGrowth1": 0.71980006
      },
      {
        "date": "2026-08-18",
        "fetchedAt": 1787015792.666919,
        "targetMean": 612.8383,
        "analystCount": 47,
        "eps0": 7.56141,
        "eps1": 15.45987,
        "revenue1": 87336149860,
        "epsGrowth1": 1.0446,
        "revenueGrowth1": 0.71980006
      },
      {
        "date": "2026-08-19",
        "fetchedAt": 1787104541.4383624,
        "targetMean": 612.8383,
        "analystCount": 47,
        "eps0": 7.56141,
        "eps1": 15.45987,
        "revenue1": 87336149860,
        "epsGrowth1": 1.0446,
        "revenueGrowth1": 0.71980006
      },
      {
        "date": "2026-08-20",
        "fetchedAt": 1787193071.3536406,
        "targetMean": 612.8383,
        "analystCount": 47,
        "eps0": 7.56141,
        "eps1": 15.45987,
        "revenue1": 87336149860,
        "epsGrowth1": 1.0446,
        "revenueGrowth1": 0.71980006
      }
    ]
  },
  "INTC": {
    "targetMean": 114.87805,
    "targetLow": 75.0,
    "targetHigh": 200.0,
    "analystCount": 41,
    "recommendationMean": 2.52083,
    "recommendationKey": "hold",
    "trend": [
      {
        "period": "0y",
        "endDate": "2026-12-31",
        "epsAvg": 1.5129,
        "epsGrowth": 2.6021,
        "revenueAvg": 62993526010,
        "revenueGrowth": 0.1919,
        "analysts": 38
      },
      {
        "period": "+1y",
        "endDate": "2027-12-31",
        "epsAvg": 2.04013,
        "epsGrowth": 0.34849998,
        "revenueAvg": 71220796210,
        "revenueGrowth": 0.1306,
        "analysts": 44
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 490550558720,
    "week52High": 142.35,
    "week52Low": 22.78,
    "financialCurrency": "USD",
    "ttmRevenue": 57031999488,
    "ttmNetIncome": -11288999936,
    "_fetched_at": 1787193071.3536406,
    "_updated_label": "2026-08-20 11:31",
    "_history": [
      {
        "date": "2026-08-10",
        "fetchedAt": 1786339006.7750585,
        "targetMean": 115.17073,
        "analystCount": 41,
        "eps0": 1.5192,
        "eps1": 2.05961,
        "revenue1": 71359750470,
        "epsGrowth1": 0.3557,
        "revenueGrowth1": 0.1319
      },
      {
        "date": "2026-08-11",
        "fetchedAt": 1786395620.8798974,
        "targetMean": 115.17073,
        "analystCount": 41,
        "eps0": 1.5192,
        "eps1": 2.05961,
        "revenue1": 71359750470,
        "epsGrowth1": 0.3557,
        "revenueGrowth1": 0.1319
      },
      {
        "date": "2026-08-12",
        "fetchedAt": 1786482025.890581,
        "targetMean": 114.05,
        "analystCount": 40,
        "eps0": 1.52009,
        "eps1": 2.05883,
        "revenue1": 71315854070,
        "epsGrowth1": 0.35439998,
        "revenueGrowth1": 0.1311
      },
      {
        "date": "2026-08-13",
        "fetchedAt": 1786568606.5056696,
        "targetMean": 114.05,
        "analystCount": 40,
        "eps0": 1.52009,
        "eps1": 2.05883,
        "revenue1": 71315854070,
        "epsGrowth1": 0.35439998,
        "revenueGrowth1": 0.1311
      },
      {
        "date": "2026-08-14",
        "fetchedAt": 1786665686.038369,
        "targetMean": 114.05,
        "analystCount": 40,
        "eps0": 1.52009,
        "eps1": 2.05883,
        "revenue1": 71315854070,
        "epsGrowth1": 0.35439998,
        "revenueGrowth1": 0.1311
      },
      {
        "date": "2026-08-15",
        "fetchedAt": 1786752271.5141675,
        "targetMean": 114.05,
        "analystCount": 40,
        "eps0": 1.52009,
        "eps1": 2.05883,
        "revenue1": 71315854070,
        "epsGrowth1": 0.35439998,
        "revenueGrowth1": 0.1311
      },
      {
        "date": "2026-08-16",
        "fetchedAt": 1786840263.5342243,
        "targetMean": 114.87805,
        "analystCount": 41,
        "eps0": 1.5129,
        "eps1": 2.04013,
        "revenue1": 71220796210,
        "epsGrowth1": 0.34849998,
        "revenueGrowth1": 0.1306
      },
      {
        "date": "2026-08-17",
        "fetchedAt": 1786928309.5439892,
        "targetMean": 114.87805,
        "analystCount": 41,
        "eps0": 1.5129,
        "eps1": 2.04013,
        "revenue1": 71220796210,
        "epsGrowth1": 0.34849998,
        "revenueGrowth1": 0.1306
      },
      {
        "date": "2026-08-18",
        "fetchedAt": 1787015792.666919,
        "targetMean": 114.87805,
        "analystCount": 41,
        "eps0": 1.5129,
        "eps1": 2.04013,
        "revenue1": 71220796210,
        "epsGrowth1": 0.34849998,
        "revenueGrowth1": 0.1306
      },
      {
        "date": "2026-08-19",
        "fetchedAt": 1787104541.4383624,
        "targetMean": 114.87805,
        "analystCount": 41,
        "eps0": 1.5129,
        "eps1": 2.04013,
        "revenue1": 71220796210,
        "epsGrowth1": 0.34849998,
        "revenueGrowth1": 0.1306
      },
      {
        "date": "2026-08-20",
        "fetchedAt": 1787193071.3536406,
        "targetMean": 114.87805,
        "analystCount": 41,
        "eps0": 1.5129,
        "eps1": 2.04013,
        "revenue1": 71220796210,
        "epsGrowth1": 0.34849998,
        "revenueGrowth1": 0.1306
      }
    ]
  },
  "AMAT": {
    "targetMean": 641.02856,
    "targetLow": 358.0,
    "targetHigh": 900.0,
    "analystCount": 35,
    "recommendationMean": 1.46154,
    "recommendationKey": "strong_buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2026-10-31",
        "epsAvg": 12.78601,
        "epsGrowth": 0.35729998,
        "revenueAvg": 34177828999,
        "revenueGrowth": 0.2048,
        "analysts": 27
      },
      {
        "period": "+1y",
        "endDate": "2027-10-31",
        "epsAvg": 18.26623,
        "epsGrowth": 0.4286,
        "revenueAvg": 45871276040,
        "revenueGrowth": 0.3421,
        "analysts": 34
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 393938862080,
    "week52High": 739.67,
    "week52Low": 154.47,
    "financialCurrency": "USD",
    "ttmRevenue": 30837000192,
    "ttmNetIncome": 9267000320,
    "_fetched_at": 1787193071.3536406,
    "_updated_label": "2026-08-20 11:31",
    "_history": [
      {
        "date": "2026-08-10",
        "fetchedAt": 1786339006.7750585,
        "targetMean": 629.0571,
        "analystCount": 35,
        "eps0": 12.3054,
        "eps1": 17.08771,
        "revenue1": 43303069110,
        "epsGrowth1": 0.3886,
        "revenueGrowth1": 0.29209998
      },
      {
        "date": "2026-08-11",
        "fetchedAt": 1786395620.8798974,
        "targetMean": 629.0571,
        "analystCount": 35,
        "eps0": 12.3054,
        "eps1": 17.08771,
        "revenue1": 43303069110,
        "epsGrowth1": 0.3886,
        "revenueGrowth1": 0.29209998
      },
      {
        "date": "2026-08-12",
        "fetchedAt": 1786482025.890581,
        "targetMean": 633.34283,
        "analystCount": 35,
        "eps0": 12.32569,
        "eps1": 17.25438,
        "revenue1": 43560923650,
        "epsGrowth1": 0.39990002,
        "revenueGrowth1": 0.2997
      },
      {
        "date": "2026-08-13",
        "fetchedAt": 1786568606.5056696,
        "targetMean": 633.34283,
        "analystCount": 35,
        "eps0": 12.32569,
        "eps1": 17.25438,
        "revenue1": 43560923650,
        "epsGrowth1": 0.39990002,
        "revenueGrowth1": 0.2997
      },
      {
        "date": "2026-08-14",
        "fetchedAt": 1786665686.038369,
        "targetMean": 633.34283,
        "analystCount": 35,
        "eps0": 12.33569,
        "eps1": 17.34407,
        "revenue1": 43712320620,
        "epsGrowth1": 0.406,
        "revenueGrowth1": 0.3035
      },
      {
        "date": "2026-08-15",
        "fetchedAt": 1786752271.5141675,
        "targetMean": 633.34283,
        "analystCount": 35,
        "eps0": 12.33569,
        "eps1": 17.34407,
        "revenue1": 43712320620,
        "epsGrowth1": 0.406,
        "revenueGrowth1": 0.3035
      },
      {
        "date": "2026-08-16",
        "fetchedAt": 1786840263.5342243,
        "targetMean": 638.17145,
        "analystCount": 35,
        "eps0": 12.7897,
        "eps1": 18.15682,
        "revenue1": 45648500750,
        "epsGrowth1": 0.41959998,
        "revenueGrowth1": 0.3369
      },
      {
        "date": "2026-08-17",
        "fetchedAt": 1786928309.5439892,
        "targetMean": 638.17145,
        "analystCount": 35,
        "eps0": 12.7897,
        "eps1": 18.15682,
        "revenue1": 45648500750,
        "epsGrowth1": 0.41959998,
        "revenueGrowth1": 0.3369
      },
      {
        "date": "2026-08-18",
        "fetchedAt": 1787015792.666919,
        "targetMean": 641.02856,
        "analystCount": 35,
        "eps0": 12.78601,
        "eps1": 18.26623,
        "revenue1": 45871276040,
        "epsGrowth1": 0.4286,
        "revenueGrowth1": 0.3421
      },
      {
        "date": "2026-08-19",
        "fetchedAt": 1787104541.4383624,
        "targetMean": 641.02856,
        "analystCount": 35,
        "eps0": 12.78601,
        "eps1": 18.26623,
        "revenue1": 45871276040,
        "epsGrowth1": 0.4286,
        "revenueGrowth1": 0.3421
      },
      {
        "date": "2026-08-20",
        "fetchedAt": 1787193071.3536406,
        "targetMean": 641.02856,
        "analystCount": 35,
        "eps0": 12.78601,
        "eps1": 18.26623,
        "revenue1": 45871276040,
        "epsGrowth1": 0.4286,
        "revenueGrowth1": 0.3421
      }
    ]
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
    "_fetched_at": 1787193071.3536406,
    "_updated_label": "2026-08-20 11:31",
    "_history": [
      {
        "date": "2026-08-10",
        "fetchedAt": 1786339006.7750585,
        "targetMean": null,
        "analystCount": null,
        "eps0": null,
        "eps1": null,
        "revenue1": null,
        "epsGrowth1": null,
        "revenueGrowth1": null
      },
      {
        "date": "2026-08-11",
        "fetchedAt": 1786395620.8798974,
        "targetMean": null,
        "analystCount": null,
        "eps0": null,
        "eps1": null,
        "revenue1": null,
        "epsGrowth1": null,
        "revenueGrowth1": null
      },
      {
        "date": "2026-08-12",
        "fetchedAt": 1786482025.890581,
        "targetMean": null,
        "analystCount": null,
        "eps0": null,
        "eps1": null,
        "revenue1": null,
        "epsGrowth1": null,
        "revenueGrowth1": null
      },
      {
        "date": "2026-08-13",
        "fetchedAt": 1786568606.5056696,
        "targetMean": null,
        "analystCount": null,
        "eps0": null,
        "eps1": null,
        "revenue1": null,
        "epsGrowth1": null,
        "revenueGrowth1": null
      },
      {
        "date": "2026-08-14",
        "fetchedAt": 1786665686.038369,
        "targetMean": null,
        "analystCount": null,
        "eps0": null,
        "eps1": null,
        "revenue1": null,
        "epsGrowth1": null,
        "revenueGrowth1": null
      },
      {
        "date": "2026-08-15",
        "fetchedAt": 1786752271.5141675,
        "targetMean": null,
        "analystCount": null,
        "eps0": null,
        "eps1": null,
        "revenue1": null,
        "epsGrowth1": null,
        "revenueGrowth1": null
      },
      {
        "date": "2026-08-16",
        "fetchedAt": 1786840263.5342243,
        "targetMean": null,
        "analystCount": null,
        "eps0": null,
        "eps1": null,
        "revenue1": null,
        "epsGrowth1": null,
        "revenueGrowth1": null
      },
      {
        "date": "2026-08-17",
        "fetchedAt": 1786928309.5439892,
        "targetMean": null,
        "analystCount": null,
        "eps0": null,
        "eps1": null,
        "revenue1": null,
        "epsGrowth1": null,
        "revenueGrowth1": null
      },
      {
        "date": "2026-08-18",
        "fetchedAt": 1787015792.666919,
        "targetMean": null,
        "analystCount": null,
        "eps0": null,
        "eps1": null,
        "revenue1": null,
        "epsGrowth1": null,
        "revenueGrowth1": null
      },
      {
        "date": "2026-08-19",
        "fetchedAt": 1787104541.4383624,
        "targetMean": null,
        "analystCount": null,
        "eps0": null,
        "eps1": null,
        "revenue1": null,
        "epsGrowth1": null,
        "revenueGrowth1": null
      },
      {
        "date": "2026-08-20",
        "fetchedAt": 1787193071.3536406,
        "targetMean": null,
        "analystCount": null,
        "eps0": null,
        "eps1": null,
        "revenue1": null,
        "epsGrowth1": null,
        "revenueGrowth1": null
      }
    ]
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
    "week52High": 779.37,
    "week52Low": 629.28,
    "financialCurrency": null,
    "ttmRevenue": null,
    "ttmNetIncome": null,
    "_fetched_at": 1787193071.3536406,
    "_updated_label": "2026-08-20 11:31",
    "_history": [
      {
        "date": "2026-08-10",
        "fetchedAt": 1786339006.7750585,
        "targetMean": null,
        "analystCount": null,
        "eps0": null,
        "eps1": null,
        "revenue1": null,
        "epsGrowth1": null,
        "revenueGrowth1": null
      },
      {
        "date": "2026-08-11",
        "fetchedAt": 1786395620.8798974,
        "targetMean": null,
        "analystCount": null,
        "eps0": null,
        "eps1": null,
        "revenue1": null,
        "epsGrowth1": null,
        "revenueGrowth1": null
      },
      {
        "date": "2026-08-12",
        "fetchedAt": 1786482025.890581,
        "targetMean": null,
        "analystCount": null,
        "eps0": null,
        "eps1": null,
        "revenue1": null,
        "epsGrowth1": null,
        "revenueGrowth1": null
      },
      {
        "date": "2026-08-13",
        "fetchedAt": 1786568606.5056696,
        "targetMean": null,
        "analystCount": null,
        "eps0": null,
        "eps1": null,
        "revenue1": null,
        "epsGrowth1": null,
        "revenueGrowth1": null
      },
      {
        "date": "2026-08-14",
        "fetchedAt": 1786665686.038369,
        "targetMean": null,
        "analystCount": null,
        "eps0": null,
        "eps1": null,
        "revenue1": null,
        "epsGrowth1": null,
        "revenueGrowth1": null
      },
      {
        "date": "2026-08-15",
        "fetchedAt": 1786752271.5141675,
        "targetMean": null,
        "analystCount": null,
        "eps0": null,
        "eps1": null,
        "revenue1": null,
        "epsGrowth1": null,
        "revenueGrowth1": null
      },
      {
        "date": "2026-08-16",
        "fetchedAt": 1786840263.5342243,
        "targetMean": null,
        "analystCount": null,
        "eps0": null,
        "eps1": null,
        "revenue1": null,
        "epsGrowth1": null,
        "revenueGrowth1": null
      },
      {
        "date": "2026-08-17",
        "fetchedAt": 1786928309.5439892,
        "targetMean": null,
        "analystCount": null,
        "eps0": null,
        "eps1": null,
        "revenue1": null,
        "epsGrowth1": null,
        "revenueGrowth1": null
      },
      {
        "date": "2026-08-18",
        "fetchedAt": 1787015792.666919,
        "targetMean": null,
        "analystCount": null,
        "eps0": null,
        "eps1": null,
        "revenue1": null,
        "epsGrowth1": null,
        "revenueGrowth1": null
      },
      {
        "date": "2026-08-19",
        "fetchedAt": 1787104541.4383624,
        "targetMean": null,
        "analystCount": null,
        "eps0": null,
        "eps1": null,
        "revenue1": null,
        "epsGrowth1": null,
        "revenueGrowth1": null
      },
      {
        "date": "2026-08-20",
        "fetchedAt": 1787193071.3536406,
        "targetMean": null,
        "analystCount": null,
        "eps0": null,
        "eps1": null,
        "revenue1": null,
        "epsGrowth1": null,
        "revenueGrowth1": null
      }
    ]
  },
  "ORCL": {
    "targetMean": 246.42635,
    "targetLow": 110.0,
    "targetHigh": 400.0,
    "analystCount": 41,
    "recommendationMean": 1.59091,
    "recommendationKey": "buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2027-05-31",
        "epsAvg": 8.05313,
        "epsGrowth": 0.0555,
        "revenueAvg": 89336547460,
        "revenueGrowth": 0.32630002,
        "analysts": 42
      },
      {
        "period": "+1y",
        "endDate": "2028-05-31",
        "epsAvg": 10.91494,
        "epsGrowth": 0.3554,
        "revenueAvg": 130637237920,
        "revenueGrowth": 0.4623,
        "analysts": 40
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 414240538624,
    "week52High": 345.72,
    "week52Low": 114.5,
    "financialCurrency": "USD",
    "ttmRevenue": 67356999680,
    "ttmNetIncome": 16984000512,
    "_fetched_at": 1787193071.3536406,
    "_updated_label": "2026-08-20 11:31",
    "_history": [
      {
        "date": "2026-08-10",
        "fetchedAt": 1786339006.7750585,
        "targetMean": 247.17024,
        "analystCount": 41,
        "eps0": 8.05139,
        "eps1": 10.89015,
        "revenue1": 130558530150,
        "epsGrowth1": 0.35259998,
        "revenueGrowth1": 0.4617
      },
      {
        "date": "2026-08-11",
        "fetchedAt": 1786388420.811517,
        "targetMean": 247.17024,
        "analystCount": 41,
        "eps0": 8.05139,
        "eps1": 10.89015,
        "revenue1": 130558530150,
        "epsGrowth1": 0.35259998,
        "revenueGrowth1": 0.4617
      },
      {
        "date": "2026-08-12",
        "fetchedAt": 1786474823.1225314,
        "targetMean": 247.17024,
        "analystCount": 41,
        "eps0": 8.05139,
        "eps1": 10.89015,
        "revenue1": 130558530150,
        "epsGrowth1": 0.35259998,
        "revenueGrowth1": 0.4617
      },
      {
        "date": "2026-08-13",
        "fetchedAt": 1786561225.728278,
        "targetMean": 247.17024,
        "analystCount": 41,
        "eps0": 8.05139,
        "eps1": 10.89015,
        "revenue1": 130558530150,
        "epsGrowth1": 0.35259998,
        "revenueGrowth1": 0.4617
      },
      {
        "date": "2026-08-14",
        "fetchedAt": 1786665686.038369,
        "targetMean": 247.17024,
        "analystCount": 41,
        "eps0": 8.05139,
        "eps1": 10.89015,
        "revenue1": 130558530150,
        "epsGrowth1": 0.35259998,
        "revenueGrowth1": 0.4617
      },
      {
        "date": "2026-08-15",
        "fetchedAt": 1786752271.5141675,
        "targetMean": 247.17024,
        "analystCount": 41,
        "eps0": 8.05139,
        "eps1": 10.89015,
        "revenue1": 130558530150,
        "epsGrowth1": 0.35259998,
        "revenueGrowth1": 0.4617
      },
      {
        "date": "2026-08-16",
        "fetchedAt": 1786840263.5342243,
        "targetMean": 246.42635,
        "analystCount": 41,
        "eps0": 8.05313,
        "eps1": 10.91494,
        "revenue1": 130637237920,
        "epsGrowth1": 0.3554,
        "revenueGrowth1": 0.4623
      },
      {
        "date": "2026-08-17",
        "fetchedAt": 1786928309.5439892,
        "targetMean": 246.42635,
        "analystCount": 41,
        "eps0": 8.05313,
        "eps1": 10.91494,
        "revenue1": 130637237920,
        "epsGrowth1": 0.3554,
        "revenueGrowth1": 0.4623
      },
      {
        "date": "2026-08-18",
        "fetchedAt": 1787015792.666919,
        "targetMean": 246.42635,
        "analystCount": 41,
        "eps0": 8.05313,
        "eps1": 10.91494,
        "revenue1": 130637237920,
        "epsGrowth1": 0.3554,
        "revenueGrowth1": 0.4623
      },
      {
        "date": "2026-08-19",
        "fetchedAt": 1787104541.4383624,
        "targetMean": 246.42635,
        "analystCount": 41,
        "eps0": 8.05313,
        "eps1": 10.91494,
        "revenue1": 130637237920,
        "epsGrowth1": 0.3554,
        "revenueGrowth1": 0.4623
      },
      {
        "date": "2026-08-20",
        "fetchedAt": 1787193071.3536406,
        "targetMean": 246.42635,
        "analystCount": 41,
        "eps0": 8.05313,
        "eps1": 10.91494,
        "revenue1": 130637237920,
        "epsGrowth1": 0.3554,
        "revenueGrowth1": 0.4623
      }
    ]
  },
  "CRM": {
    "targetMean": 242.74352,
    "targetLow": 160.0,
    "targetHigh": 475.0,
    "analystCount": 54,
    "recommendationMean": 1.67925,
    "recommendationKey": "buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2027-01-31",
        "epsAvg": 14.13528,
        "epsGrowth": 0.129,
        "revenueAvg": 46111288050,
        "revenueGrowth": 0.1104,
        "analysts": 52
      },
      {
        "period": "+1y",
        "endDate": "2028-01-31",
        "epsAvg": 15.52062,
        "epsGrowth": 0.098000005,
        "revenueAvg": 50517609630,
        "revenueGrowth": 0.0956,
        "analysts": 54
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 168787705856,
    "week52High": 269.11,
    "week52Low": 146.32,
    "financialCurrency": "USD",
    "ttmRevenue": 42829000704,
    "ttmNetIncome": 8023000064,
    "_fetched_at": 1787193071.3536406,
    "_updated_label": "2026-08-20 11:31",
    "_history": [
      {
        "date": "2026-08-10",
        "fetchedAt": 1786339006.7750585,
        "targetMean": 241.7198,
        "analystCount": 53,
        "eps0": 14.13332,
        "eps1": 15.51229,
        "revenue1": 50513597610,
        "epsGrowth1": 0.097600006,
        "revenueGrowth1": 0.0956
      },
      {
        "date": "2026-08-11",
        "fetchedAt": 1786388420.811517,
        "targetMean": 241.7198,
        "analystCount": 53,
        "eps0": 14.13332,
        "eps1": 15.51229,
        "revenue1": 50513597610,
        "epsGrowth1": 0.097600006,
        "revenueGrowth1": 0.0956
      },
      {
        "date": "2026-08-12",
        "fetchedAt": 1786474823.1225314,
        "targetMean": 241.7198,
        "analystCount": 53,
        "eps0": 14.13358,
        "eps1": 15.51484,
        "revenue1": 50514769560,
        "epsGrowth1": 0.09770001,
        "revenueGrowth1": 0.095699996
      },
      {
        "date": "2026-08-13",
        "fetchedAt": 1786561225.728278,
        "targetMean": 241.7198,
        "analystCount": 53,
        "eps0": 14.13358,
        "eps1": 15.51484,
        "revenue1": 50514769560,
        "epsGrowth1": 0.09770001,
        "revenueGrowth1": 0.095699996
      },
      {
        "date": "2026-08-14",
        "fetchedAt": 1786665686.038369,
        "targetMean": 242.4287,
        "analystCount": 54,
        "eps0": 14.13399,
        "eps1": 15.52155,
        "revenue1": 50508434350,
        "epsGrowth1": 0.09819999,
        "revenueGrowth1": 0.0955
      },
      {
        "date": "2026-08-15",
        "fetchedAt": 1786752271.5141675,
        "targetMean": 242.4287,
        "analystCount": 54,
        "eps0": 14.13399,
        "eps1": 15.52155,
        "revenue1": 50508434350,
        "epsGrowth1": 0.09819999,
        "revenueGrowth1": 0.0955
      },
      {
        "date": "2026-08-16",
        "fetchedAt": 1786840263.5342243,
        "targetMean": 242.4287,
        "analystCount": 54,
        "eps0": 14.13399,
        "eps1": 15.52155,
        "revenue1": 50508440120,
        "epsGrowth1": 0.09819999,
        "revenueGrowth1": 0.0955
      },
      {
        "date": "2026-08-17",
        "fetchedAt": 1786928309.5439892,
        "targetMean": 242.4287,
        "analystCount": 54,
        "eps0": 14.13399,
        "eps1": 15.52155,
        "revenue1": 50508440120,
        "epsGrowth1": 0.09819999,
        "revenueGrowth1": 0.0955
      },
      {
        "date": "2026-08-18",
        "fetchedAt": 1787015792.666919,
        "targetMean": 242.4287,
        "analystCount": 54,
        "eps0": 14.13399,
        "eps1": 15.52155,
        "revenue1": 50508440120,
        "epsGrowth1": 0.09819999,
        "revenueGrowth1": 0.0955
      },
      {
        "date": "2026-08-19",
        "fetchedAt": 1787104541.4383624,
        "targetMean": 242.74352,
        "analystCount": 54,
        "eps0": 14.13528,
        "eps1": 15.52062,
        "revenue1": 50517609630,
        "epsGrowth1": 0.098000005,
        "revenueGrowth1": 0.0956
      },
      {
        "date": "2026-08-20",
        "fetchedAt": 1787193071.3536406,
        "targetMean": 242.74352,
        "analystCount": 54,
        "eps0": 14.13528,
        "eps1": 15.52062,
        "revenue1": 50517609630,
        "epsGrowth1": 0.098000005,
        "revenueGrowth1": 0.0956
      }
    ]
  },
  "PLTR": {
    "targetMean": 191.68,
    "targetLow": 80.0,
    "targetHigh": 255.0,
    "analystCount": 27,
    "recommendationMean": 1.8125,
    "recommendationKey": "buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2026-12-31",
        "epsAvg": 1.60272,
        "epsGrowth": 1.137,
        "revenueAvg": 8188880520,
        "revenueGrowth": 0.8297,
        "analysts": 29
      },
      {
        "period": "+1y",
        "endDate": "2027-12-31",
        "epsAvg": 2.31424,
        "epsGrowth": 0.4439,
        "revenueAvg": 12175359690,
        "revenueGrowth": 0.48680001,
        "analysts": 29
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 420991827968,
    "week52High": 207.52,
    "week52Low": 106.37,
    "financialCurrency": "USD",
    "ttmRevenue": 6155940864,
    "ttmNetIncome": 3016691968,
    "_fetched_at": 1787193071.3536406,
    "_updated_label": "2026-08-20 11:31",
    "_history": [
      {
        "date": "2026-08-10",
        "fetchedAt": 1786339006.7750585,
        "targetMean": 189.90222,
        "analystCount": 27,
        "eps0": 1.59927,
        "eps1": 2.30872,
        "revenue1": 12120936360,
        "epsGrowth1": 0.4436,
        "revenueGrowth1": 0.4799
      },
      {
        "date": "2026-08-11",
        "fetchedAt": 1786388420.811517,
        "targetMean": 189.90222,
        "analystCount": 27,
        "eps0": 1.59927,
        "eps1": 2.30872,
        "revenue1": 12120936360,
        "epsGrowth1": 0.4436,
        "revenueGrowth1": 0.4799
      },
      {
        "date": "2026-08-12",
        "fetchedAt": 1786474823.1225314,
        "targetMean": 191.68,
        "analystCount": 27,
        "eps0": 1.60272,
        "eps1": 2.31424,
        "revenue1": 12165761750,
        "epsGrowth1": 0.4439,
        "revenueGrowth1": 0.48560002
      },
      {
        "date": "2026-08-13",
        "fetchedAt": 1786561225.728278,
        "targetMean": 191.68,
        "analystCount": 27,
        "eps0": 1.60272,
        "eps1": 2.31424,
        "revenue1": 12165761750,
        "epsGrowth1": 0.4439,
        "revenueGrowth1": 0.48560002
      },
      {
        "date": "2026-08-14",
        "fetchedAt": 1786665686.038369,
        "targetMean": 191.68,
        "analystCount": 27,
        "eps0": 1.60272,
        "eps1": 2.31424,
        "revenue1": 12175359690,
        "epsGrowth1": 0.4439,
        "revenueGrowth1": 0.48680001
      },
      {
        "date": "2026-08-15",
        "fetchedAt": 1786752271.5141675,
        "targetMean": 191.68,
        "analystCount": 27,
        "eps0": 1.60272,
        "eps1": 2.31424,
        "revenue1": 12175359690,
        "epsGrowth1": 0.4439,
        "revenueGrowth1": 0.48680001
      },
      {
        "date": "2026-08-16",
        "fetchedAt": 1786840263.5342243,
        "targetMean": 191.68,
        "analystCount": 27,
        "eps0": 1.60272,
        "eps1": 2.31424,
        "revenue1": 12175359690,
        "epsGrowth1": 0.4439,
        "revenueGrowth1": 0.48680001
      },
      {
        "date": "2026-08-17",
        "fetchedAt": 1786928309.5439892,
        "targetMean": 191.68,
        "analystCount": 27,
        "eps0": 1.60272,
        "eps1": 2.31424,
        "revenue1": 12175359690,
        "epsGrowth1": 0.4439,
        "revenueGrowth1": 0.48680001
      },
      {
        "date": "2026-08-18",
        "fetchedAt": 1787015792.666919,
        "targetMean": 191.68,
        "analystCount": 27,
        "eps0": 1.60272,
        "eps1": 2.31424,
        "revenue1": 12175359690,
        "epsGrowth1": 0.4439,
        "revenueGrowth1": 0.48680001
      },
      {
        "date": "2026-08-19",
        "fetchedAt": 1787104541.4383624,
        "targetMean": 191.68,
        "analystCount": 27,
        "eps0": 1.60272,
        "eps1": 2.31424,
        "revenue1": 12175359690,
        "epsGrowth1": 0.4439,
        "revenueGrowth1": 0.48680001
      },
      {
        "date": "2026-08-20",
        "fetchedAt": 1787193071.3536406,
        "targetMean": 191.68,
        "analystCount": 27,
        "eps0": 1.60272,
        "eps1": 2.31424,
        "revenue1": 12175359690,
        "epsGrowth1": 0.4439,
        "revenueGrowth1": 0.48680001
      }
    ]
  },
  "QCOM": {
    "targetMean": 193.1,
    "targetLow": 100.0,
    "targetHigh": 400.0,
    "analystCount": 30,
    "recommendationMean": 2.56757,
    "recommendationKey": "hold",
    "trend": [
      {
        "period": "0y",
        "endDate": "2026-09-30",
        "epsAvg": 10.52302,
        "epsGrowth": -0.12529999,
        "revenueAvg": 42951447040,
        "revenueGrowth": -0.0269,
        "analysts": 30
      },
      {
        "period": "+1y",
        "endDate": "2027-09-30",
        "epsAvg": 10.20195,
        "epsGrowth": -0.0305,
        "revenueAvg": 44809220420,
        "revenueGrowth": 0.0433,
        "analysts": 34
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 170043375616,
    "week52High": 259.92,
    "week52Low": 121.99,
    "financialCurrency": "USD",
    "ttmRevenue": 44068999168,
    "ttmNetIncome": 9260000256,
    "_fetched_at": 1787193071.3536406,
    "_updated_label": "2026-08-20 11:31",
    "_history": [
      {
        "date": "2026-08-10",
        "fetchedAt": 1786339006.7750585,
        "targetMean": 194.76666,
        "analystCount": 30,
        "eps0": 10.53003,
        "eps1": 10.26489,
        "revenue1": 44758452840,
        "epsGrowth1": -0.0252,
        "revenueGrowth1": 0.042
      },
      {
        "date": "2026-08-11",
        "fetchedAt": 1786388420.811517,
        "targetMean": 194.76666,
        "analystCount": 30,
        "eps0": 10.53003,
        "eps1": 10.26489,
        "revenue1": 44758452840,
        "epsGrowth1": -0.0252,
        "revenueGrowth1": 0.042
      },
      {
        "date": "2026-08-12",
        "fetchedAt": 1786474823.1225314,
        "targetMean": 194.76666,
        "analystCount": 30,
        "eps0": 10.53003,
        "eps1": 10.26489,
        "revenue1": 44758452840,
        "epsGrowth1": -0.0252,
        "revenueGrowth1": 0.042
      },
      {
        "date": "2026-08-13",
        "fetchedAt": 1786561225.728278,
        "targetMean": 194.76666,
        "analystCount": 30,
        "eps0": 10.53003,
        "eps1": 10.26489,
        "revenue1": 44758452840,
        "epsGrowth1": -0.0252,
        "revenueGrowth1": 0.042
      },
      {
        "date": "2026-08-14",
        "fetchedAt": 1786665686.038369,
        "targetMean": 194.76666,
        "analystCount": 30,
        "eps0": 10.53003,
        "eps1": 10.26489,
        "revenue1": 44758452840,
        "epsGrowth1": -0.0252,
        "revenueGrowth1": 0.042
      },
      {
        "date": "2026-08-15",
        "fetchedAt": 1786752271.5141675,
        "targetMean": 194.76666,
        "analystCount": 30,
        "eps0": 10.53003,
        "eps1": 10.26489,
        "revenue1": 44758452840,
        "epsGrowth1": -0.0252,
        "revenueGrowth1": 0.042
      },
      {
        "date": "2026-08-16",
        "fetchedAt": 1786840263.5342243,
        "targetMean": 193.1,
        "analystCount": 30,
        "eps0": 10.52302,
        "eps1": 10.20195,
        "revenue1": 44809220420,
        "epsGrowth1": -0.0305,
        "revenueGrowth1": 0.0433
      },
      {
        "date": "2026-08-17",
        "fetchedAt": 1786928309.5439892,
        "targetMean": 193.1,
        "analystCount": 30,
        "eps0": 10.52302,
        "eps1": 10.20195,
        "revenue1": 44809220420,
        "epsGrowth1": -0.0305,
        "revenueGrowth1": 0.0433
      },
      {
        "date": "2026-08-18",
        "fetchedAt": 1787015792.666919,
        "targetMean": 193.1,
        "analystCount": 30,
        "eps0": 10.52302,
        "eps1": 10.20195,
        "revenue1": 44809220420,
        "epsGrowth1": -0.0305,
        "revenueGrowth1": 0.0433
      },
      {
        "date": "2026-08-19",
        "fetchedAt": 1787104541.4383624,
        "targetMean": 193.1,
        "analystCount": 30,
        "eps0": 10.52302,
        "eps1": 10.20195,
        "revenue1": 44809220420,
        "epsGrowth1": -0.0305,
        "revenueGrowth1": 0.0433
      },
      {
        "date": "2026-08-20",
        "fetchedAt": 1787193071.3536406,
        "targetMean": 193.1,
        "analystCount": 30,
        "eps0": 10.52302,
        "eps1": 10.20195,
        "revenue1": 44809220420,
        "epsGrowth1": -0.0305,
        "revenueGrowth1": 0.0433
      }
    ]
  },
  "ARM": {
    "targetMean": 287.79474,
    "targetLow": 125.0,
    "targetHigh": 500.0,
    "analystCount": 38,
    "recommendationMean": 1.87805,
    "recommendationKey": "buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2027-03-31",
        "epsAvg": 2.22634,
        "epsGrowth": 0.2578,
        "revenueAvg": 6044496820,
        "revenueGrowth": 0.22860001,
        "analysts": 36
      },
      {
        "period": "+1y",
        "endDate": "2028-03-31",
        "epsAvg": 3.05823,
        "epsGrowth": 0.3737,
        "revenueAvg": 8193367890,
        "revenueGrowth": 0.35549998,
        "analysts": 38
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 266294771712,
    "week52High": 452.7,
    "week52Low": 100.02,
    "financialCurrency": "USD",
    "ttmRevenue": 5155999744,
    "ttmNetIncome": 1044000000,
    "_fetched_at": 1787193071.3536406,
    "_updated_label": "2026-08-20 11:31",
    "_history": [
      {
        "date": "2026-08-10",
        "fetchedAt": 1786339006.7750585,
        "targetMean": 286.78918,
        "analystCount": 37,
        "eps0": 2.22995,
        "eps1": 3.06926,
        "revenue1": 8206594050,
        "epsGrowth1": 0.3764,
        "revenueGrowth1": 0.35619998
      },
      {
        "date": "2026-08-11",
        "fetchedAt": 1786388420.811517,
        "targetMean": 286.78918,
        "analystCount": 37,
        "eps0": 2.22995,
        "eps1": 3.06926,
        "revenue1": 8206594050,
        "epsGrowth1": 0.3764,
        "revenueGrowth1": 0.35619998
      },
      {
        "date": "2026-08-12",
        "fetchedAt": 1786474823.1225314,
        "targetMean": 287.79474,
        "analystCount": 38,
        "eps0": 2.22634,
        "eps1": 3.05823,
        "revenue1": 8193367890,
        "epsGrowth1": 0.3737,
        "revenueGrowth1": 0.35549998
      },
      {
        "date": "2026-08-13",
        "fetchedAt": 1786561225.728278,
        "targetMean": 287.79474,
        "analystCount": 38,
        "eps0": 2.22634,
        "eps1": 3.05823,
        "revenue1": 8193367890,
        "epsGrowth1": 0.3737,
        "revenueGrowth1": 0.35549998
      },
      {
        "date": "2026-08-14",
        "fetchedAt": 1786665686.038369,
        "targetMean": 287.79474,
        "analystCount": 38,
        "eps0": 2.22634,
        "eps1": 3.05823,
        "revenue1": 8193367890,
        "epsGrowth1": 0.3737,
        "revenueGrowth1": 0.35549998
      },
      {
        "date": "2026-08-15",
        "fetchedAt": 1786752271.5141675,
        "targetMean": 287.79474,
        "analystCount": 38,
        "eps0": 2.22634,
        "eps1": 3.05823,
        "revenue1": 8193367890,
        "epsGrowth1": 0.3737,
        "revenueGrowth1": 0.35549998
      },
      {
        "date": "2026-08-16",
        "fetchedAt": 1786840263.5342243,
        "targetMean": 287.79474,
        "analystCount": 38,
        "eps0": 2.22634,
        "eps1": 3.05823,
        "revenue1": 8193367890,
        "epsGrowth1": 0.3737,
        "revenueGrowth1": 0.35549998
      },
      {
        "date": "2026-08-17",
        "fetchedAt": 1786928309.5439892,
        "targetMean": 287.79474,
        "analystCount": 38,
        "eps0": 2.22634,
        "eps1": 3.05823,
        "revenue1": 8193367890,
        "epsGrowth1": 0.3737,
        "revenueGrowth1": 0.35549998
      },
      {
        "date": "2026-08-18",
        "fetchedAt": 1787015792.666919,
        "targetMean": 287.79474,
        "analystCount": 38,
        "eps0": 2.22634,
        "eps1": 3.05823,
        "revenue1": 8193367890,
        "epsGrowth1": 0.3737,
        "revenueGrowth1": 0.35549998
      },
      {
        "date": "2026-08-19",
        "fetchedAt": 1787104541.4383624,
        "targetMean": 287.79474,
        "analystCount": 38,
        "eps0": 2.22634,
        "eps1": 3.05823,
        "revenue1": 8193367890,
        "epsGrowth1": 0.3737,
        "revenueGrowth1": 0.35549998
      },
      {
        "date": "2026-08-20",
        "fetchedAt": 1787193071.3536406,
        "targetMean": 287.79474,
        "analystCount": 38,
        "eps0": 2.22634,
        "eps1": 3.05823,
        "revenue1": 8193367890,
        "epsGrowth1": 0.3737,
        "revenueGrowth1": 0.35549998
      }
    ]
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
        "epsAvg": 4.05408,
        "epsGrowth": 0.4275,
        "revenueAvg": 11546347250,
        "revenueGrowth": 0.409,
        "analysts": 38
      },
      {
        "period": "+1y",
        "endDate": "2028-01-31",
        "epsAvg": 6.24987,
        "epsGrowth": 0.5416,
        "revenueAvg": 16767740050,
        "revenueGrowth": 0.45220003,
        "analysts": 39
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 212960378880,
    "week52High": 329.88,
    "week52Low": 61.44,
    "financialCurrency": "USD",
    "ttmRevenue": 8717100032,
    "ttmNetIncome": 2526700032,
    "_fetched_at": 1787193071.3536406,
    "_updated_label": "2026-08-20 11:31",
    "_history": [
      {
        "date": "2026-08-10",
        "fetchedAt": 1786339006.7750585,
        "targetMean": 256.9142,
        "analystCount": 40,
        "eps0": 4.04907,
        "eps1": 6.24094,
        "revenue1": 16732272130,
        "epsGrowth1": 0.5413,
        "revenueGrowth1": 0.45119998
      },
      {
        "date": "2026-08-11",
        "fetchedAt": 1786388420.811517,
        "targetMean": 256.9142,
        "analystCount": 40,
        "eps0": 4.04907,
        "eps1": 6.24094,
        "revenue1": 16732272130,
        "epsGrowth1": 0.5413,
        "revenueGrowth1": 0.45119998
      },
      {
        "date": "2026-08-12",
        "fetchedAt": 1786474823.1225314,
        "targetMean": 256.9142,
        "analystCount": 40,
        "eps0": 4.05065,
        "eps1": 6.24248,
        "revenue1": 16739206340,
        "epsGrowth1": 0.5411,
        "revenueGrowth1": 0.45080003
      },
      {
        "date": "2026-08-13",
        "fetchedAt": 1786561225.728278,
        "targetMean": 256.9142,
        "analystCount": 40,
        "eps0": 4.05065,
        "eps1": 6.24248,
        "revenue1": 16739206340,
        "epsGrowth1": 0.5411,
        "revenueGrowth1": 0.45080003
      },
      {
        "date": "2026-08-14",
        "fetchedAt": 1786665686.038369,
        "targetMean": 257.2892,
        "analystCount": 40,
        "eps0": 4.05065,
        "eps1": 6.24248,
        "revenue1": 16748467290,
        "epsGrowth1": 0.5411,
        "revenueGrowth1": 0.45130002
      },
      {
        "date": "2026-08-15",
        "fetchedAt": 1786752271.5141675,
        "targetMean": 257.2892,
        "analystCount": 40,
        "eps0": 4.05065,
        "eps1": 6.24248,
        "revenue1": 16748467290,
        "epsGrowth1": 0.5411,
        "revenueGrowth1": 0.45130002
      },
      {
        "date": "2026-08-16",
        "fetchedAt": 1786840263.5342243,
        "targetMean": 257.2892,
        "analystCount": 40,
        "eps0": 4.05065,
        "eps1": 6.24248,
        "revenue1": 16748467290,
        "epsGrowth1": 0.5411,
        "revenueGrowth1": 0.45130002
      },
      {
        "date": "2026-08-17",
        "fetchedAt": 1786928309.5439892,
        "targetMean": 257.2892,
        "analystCount": 40,
        "eps0": 4.05065,
        "eps1": 6.24248,
        "revenue1": 16748467290,
        "epsGrowth1": 0.5411,
        "revenueGrowth1": 0.45130002
      },
      {
        "date": "2026-08-18",
        "fetchedAt": 1787015792.666919,
        "targetMean": 257.2892,
        "analystCount": 40,
        "eps0": 4.05065,
        "eps1": 6.24248,
        "revenue1": 16748467290,
        "epsGrowth1": 0.5411,
        "revenueGrowth1": 0.45130002
      },
      {
        "date": "2026-08-19",
        "fetchedAt": 1787104541.4383624,
        "targetMean": 256.9142,
        "analystCount": 40,
        "eps0": 4.05408,
        "eps1": 6.24987,
        "revenue1": 16767740050,
        "epsGrowth1": 0.5416,
        "revenueGrowth1": 0.45220003
      },
      {
        "date": "2026-08-20",
        "fetchedAt": 1787193071.3536406,
        "targetMean": 256.9142,
        "analystCount": 40,
        "eps0": 4.05408,
        "eps1": 6.24987,
        "revenue1": 16767740050,
        "epsGrowth1": 0.5416,
        "revenueGrowth1": 0.45220003
      }
    ]
  },
  "ASML": {
    "targetMean": 2196.1694,
    "targetLow": 903.574,
    "targetHigh": 2900.4053,
    "analystCount": 15,
    "recommendationMean": 1.40909,
    "recommendationKey": "strong_buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2026-12-31",
        "epsAvg": 38.02898,
        "epsGrowth": 0.53900003,
        "revenueAvg": 43213109670,
        "revenueGrowth": 0.32279998,
        "analysts": 33
      },
      {
        "period": "+1y",
        "endDate": "2027-12-31",
        "epsAvg": 51.42462,
        "epsGrowth": 0.3522,
        "revenueAvg": 54330005020,
        "revenueGrowth": 0.2573,
        "analysts": 34
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 672839499776,
    "week52High": 1999.96,
    "week52Low": 716.2,
    "financialCurrency": "EUR",
    "ttmRevenue": 35327500288,
    "ttmNetIncome": 10638399488,
    "_fetched_at": 1787193071.3536406,
    "_updated_label": "2026-08-20 11:31",
    "_history": [
      {
        "date": "2026-08-10",
        "fetchedAt": 1786339006.7750585,
        "targetMean": 2178.0366,
        "analystCount": 15,
        "eps0": 38.02898,
        "eps1": 51.42462,
        "revenue1": 54331121810,
        "epsGrowth1": 0.3522,
        "revenueGrowth1": 0.2573
      },
      {
        "date": "2026-08-11",
        "fetchedAt": 1786388420.811517,
        "targetMean": 2174.7678,
        "analystCount": 15,
        "eps0": 38.02898,
        "eps1": 51.42462,
        "revenue1": 54331121810,
        "epsGrowth1": 0.3522,
        "revenueGrowth1": 0.2573
      },
      {
        "date": "2026-08-12",
        "fetchedAt": 1786474823.1225314,
        "targetMean": 2172.819,
        "analystCount": 15,
        "eps0": 38.02898,
        "eps1": 51.42462,
        "revenue1": 54330005020,
        "epsGrowth1": 0.3522,
        "revenueGrowth1": 0.2573
      },
      {
        "date": "2026-08-13",
        "fetchedAt": 1786561225.728278,
        "targetMean": 2169.0627,
        "analystCount": 15,
        "eps0": 38.02898,
        "eps1": 51.42462,
        "revenue1": 54330005020,
        "epsGrowth1": 0.3522,
        "revenueGrowth1": 0.2573
      },
      {
        "date": "2026-08-14",
        "fetchedAt": 1786665686.038369,
        "targetMean": 2169.563,
        "analystCount": 15,
        "eps0": 38.02898,
        "eps1": 51.42462,
        "revenue1": 54330005020,
        "epsGrowth1": 0.3522,
        "revenueGrowth1": 0.2573
      },
      {
        "date": "2026-08-15",
        "fetchedAt": 1786752271.5141675,
        "targetMean": 2176.091,
        "analystCount": 15,
        "eps0": 38.02898,
        "eps1": 51.42462,
        "revenue1": 54330005020,
        "epsGrowth1": 0.3522,
        "revenueGrowth1": 0.2573
      },
      {
        "date": "2026-08-16",
        "fetchedAt": 1786840263.5342243,
        "targetMean": 2176.091,
        "analystCount": 15,
        "eps0": 38.02898,
        "eps1": 51.42462,
        "revenue1": 54330005020,
        "epsGrowth1": 0.3522,
        "revenueGrowth1": 0.2573
      },
      {
        "date": "2026-08-17",
        "fetchedAt": 1786928309.5439892,
        "targetMean": 2177.855,
        "analystCount": 15,
        "eps0": 38.02898,
        "eps1": 51.42462,
        "revenue1": 54330005020,
        "epsGrowth1": 0.3522,
        "revenueGrowth1": 0.2573
      },
      {
        "date": "2026-08-18",
        "fetchedAt": 1787015792.666919,
        "targetMean": 2178.8647,
        "analystCount": 15,
        "eps0": 38.02898,
        "eps1": 51.42462,
        "revenue1": 54330005020,
        "epsGrowth1": 0.3522,
        "revenueGrowth1": 0.2573
      },
      {
        "date": "2026-08-19",
        "fetchedAt": 1787104541.4383624,
        "targetMean": 2177.603,
        "analystCount": 15,
        "eps0": 38.02898,
        "eps1": 51.42462,
        "revenue1": 54330005020,
        "epsGrowth1": 0.3522,
        "revenueGrowth1": 0.2573
      },
      {
        "date": "2026-08-20",
        "fetchedAt": 1787193071.3536406,
        "targetMean": 2196.1694,
        "analystCount": 15,
        "eps0": 38.02898,
        "eps1": 51.42462,
        "revenue1": 54330005020,
        "epsGrowth1": 0.3522,
        "revenueGrowth1": 0.2573
      }
    ]
  },
  "LRCX": {
    "targetMean": 368.9355,
    "targetLow": 290.0,
    "targetHigh": 500.0,
    "analystCount": 31,
    "recommendationMean": 1.45714,
    "recommendationKey": "strong_buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2027-06-30",
        "epsAvg": 9.45969,
        "epsGrowth": 0.6254,
        "revenueAvg": 34762045650,
        "revenueGrowth": 0.4963,
        "analysts": 29
      },
      {
        "period": "+1y",
        "endDate": "2028-06-30",
        "epsAvg": 11.55714,
        "epsGrowth": 0.2217,
        "revenueAvg": 40234462420,
        "revenueGrowth": 0.1574,
        "analysts": 26
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 384368279552,
    "week52High": 438.5,
    "week52Low": 94.11,
    "financialCurrency": "USD",
    "ttmRevenue": 23232690176,
    "ttmNetIncome": 7265396224,
    "_fetched_at": 1787193071.3536406,
    "_updated_label": "2026-08-20 11:31",
    "_history": [
      {
        "date": "2026-08-10",
        "fetchedAt": 1786339006.7750585,
        "targetMean": 368.12903,
        "analystCount": 31,
        "eps0": 9.45797,
        "eps1": 11.52522,
        "revenue1": 40134577810,
        "epsGrowth1": 0.2186,
        "revenueGrowth1": 0.1548
      },
      {
        "date": "2026-08-11",
        "fetchedAt": 1786388420.811517,
        "targetMean": 368.12903,
        "analystCount": 31,
        "eps0": 9.45797,
        "eps1": 11.52522,
        "revenue1": 40134577810,
        "epsGrowth1": 0.2186,
        "revenueGrowth1": 0.1548
      },
      {
        "date": "2026-08-12",
        "fetchedAt": 1786474823.1225314,
        "targetMean": 368.9355,
        "analystCount": 31,
        "eps0": 9.45969,
        "eps1": 11.55714,
        "revenue1": 40234462420,
        "epsGrowth1": 0.2217,
        "revenueGrowth1": 0.1574
      },
      {
        "date": "2026-08-13",
        "fetchedAt": 1786561225.728278,
        "targetMean": 368.9355,
        "analystCount": 31,
        "eps0": 9.45969,
        "eps1": 11.55714,
        "revenue1": 40234462420,
        "epsGrowth1": 0.2217,
        "revenueGrowth1": 0.1574
      },
      {
        "date": "2026-08-14",
        "fetchedAt": 1786665686.038369,
        "targetMean": 368.9355,
        "analystCount": 31,
        "eps0": 9.45969,
        "eps1": 11.55714,
        "revenue1": 40234462420,
        "epsGrowth1": 0.2217,
        "revenueGrowth1": 0.1574
      },
      {
        "date": "2026-08-15",
        "fetchedAt": 1786752271.5141675,
        "targetMean": 368.9355,
        "analystCount": 31,
        "eps0": 9.45969,
        "eps1": 11.55714,
        "revenue1": 40234462420,
        "epsGrowth1": 0.2217,
        "revenueGrowth1": 0.1574
      },
      {
        "date": "2026-08-16",
        "fetchedAt": 1786840263.5342243,
        "targetMean": 368.9355,
        "analystCount": 31,
        "eps0": 9.45969,
        "eps1": 11.55714,
        "revenue1": 40234462420,
        "epsGrowth1": 0.2217,
        "revenueGrowth1": 0.1574
      },
      {
        "date": "2026-08-17",
        "fetchedAt": 1786928309.5439892,
        "targetMean": 368.9355,
        "analystCount": 31,
        "eps0": 9.45969,
        "eps1": 11.55714,
        "revenue1": 40234462420,
        "epsGrowth1": 0.2217,
        "revenueGrowth1": 0.1574
      },
      {
        "date": "2026-08-18",
        "fetchedAt": 1787015792.666919,
        "targetMean": 368.9355,
        "analystCount": 31,
        "eps0": 9.45969,
        "eps1": 11.55714,
        "revenue1": 40234462420,
        "epsGrowth1": 0.2217,
        "revenueGrowth1": 0.1574
      },
      {
        "date": "2026-08-19",
        "fetchedAt": 1787104541.4383624,
        "targetMean": 368.9355,
        "analystCount": 31,
        "eps0": 9.45969,
        "eps1": 11.55714,
        "revenue1": 40234462420,
        "epsGrowth1": 0.2217,
        "revenueGrowth1": 0.1574
      },
      {
        "date": "2026-08-20",
        "fetchedAt": 1787193071.3536406,
        "targetMean": 368.9355,
        "analystCount": 31,
        "eps0": 9.45969,
        "eps1": 11.55714,
        "revenue1": 40234462420,
        "epsGrowth1": 0.2217,
        "revenueGrowth1": 0.1574
      }
    ]
  },
  "KLAC": {
    "targetMean": 231.77779,
    "targetLow": 165.0,
    "targetHigh": 325.0,
    "analystCount": 27,
    "recommendationMean": 1.89655,
    "recommendationKey": "buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2027-06-30",
        "epsAvg": 5.4493,
        "epsGrowth": 0.4493,
        "revenueAvg": 18099628000,
        "revenueGrowth": 0.33290002,
        "analysts": 24
      },
      {
        "period": "+1y",
        "endDate": "2028-06-30",
        "epsAvg": 6.60384,
        "epsGrowth": 0.21190001,
        "revenueAvg": 21145612650,
        "revenueGrowth": 0.1683,
        "analysts": 23
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 244677033984,
    "week52High": 307.37,
    "week52Low": 83.224,
    "financialCurrency": "USD",
    "ttmRevenue": 13579475968,
    "ttmNetIncome": 4830771200,
    "_fetched_at": 1787193071.3536406,
    "_updated_label": "2026-08-20 11:31",
    "_history": [
      {
        "date": "2026-08-10",
        "fetchedAt": 1786339006.7750585,
        "targetMean": 230.85185,
        "analystCount": 27,
        "eps0": 5.4484,
        "eps1": 6.54928,
        "revenue1": 20994008900,
        "epsGrowth1": 0.2021,
        "revenueGrowth1": 0.1599
      },
      {
        "date": "2026-08-11",
        "fetchedAt": 1786388420.811517,
        "targetMean": 230.85185,
        "analystCount": 27,
        "eps0": 5.4484,
        "eps1": 6.54928,
        "revenue1": 20994008900,
        "epsGrowth1": 0.2021,
        "revenueGrowth1": 0.1599
      },
      {
        "date": "2026-08-12",
        "fetchedAt": 1786474823.1225314,
        "targetMean": 231.77779,
        "analystCount": 27,
        "eps0": 5.4484,
        "eps1": 6.57232,
        "revenue1": 21057008900,
        "epsGrowth1": 0.20629999,
        "revenueGrowth1": 0.1634
      },
      {
        "date": "2026-08-13",
        "fetchedAt": 1786561225.728278,
        "targetMean": 231.77779,
        "analystCount": 27,
        "eps0": 5.4484,
        "eps1": 6.57232,
        "revenue1": 21057008900,
        "epsGrowth1": 0.20629999,
        "revenueGrowth1": 0.1634
      },
      {
        "date": "2026-08-14",
        "fetchedAt": 1786665686.038369,
        "targetMean": 231.77779,
        "analystCount": 27,
        "eps0": 5.4484,
        "eps1": 6.57232,
        "revenue1": 21056991290,
        "epsGrowth1": 0.20629999,
        "revenueGrowth1": 0.1634
      },
      {
        "date": "2026-08-15",
        "fetchedAt": 1786752271.5141675,
        "targetMean": 231.77779,
        "analystCount": 27,
        "eps0": 5.4484,
        "eps1": 6.57232,
        "revenue1": 21056991290,
        "epsGrowth1": 0.20629999,
        "revenueGrowth1": 0.1634
      },
      {
        "date": "2026-08-16",
        "fetchedAt": 1786840263.5342243,
        "targetMean": 231.77779,
        "analystCount": 27,
        "eps0": 5.4484,
        "eps1": 6.57232,
        "revenue1": 21056991290,
        "epsGrowth1": 0.20629999,
        "revenueGrowth1": 0.1634
      },
      {
        "date": "2026-08-17",
        "fetchedAt": 1786928309.5439892,
        "targetMean": 231.77779,
        "analystCount": 27,
        "eps0": 5.4484,
        "eps1": 6.57232,
        "revenue1": 21056991290,
        "epsGrowth1": 0.20629999,
        "revenueGrowth1": 0.1634
      },
      {
        "date": "2026-08-18",
        "fetchedAt": 1787015792.666919,
        "targetMean": 231.77779,
        "analystCount": 27,
        "eps0": 5.4484,
        "eps1": 6.57232,
        "revenue1": 21056991290,
        "epsGrowth1": 0.20629999,
        "revenueGrowth1": 0.1634
      },
      {
        "date": "2026-08-19",
        "fetchedAt": 1787104541.4383624,
        "targetMean": 231.77779,
        "analystCount": 27,
        "eps0": 5.4493,
        "eps1": 6.60384,
        "revenue1": 21145612650,
        "epsGrowth1": 0.21190001,
        "revenueGrowth1": 0.1683
      },
      {
        "date": "2026-08-20",
        "fetchedAt": 1787193071.3536406,
        "targetMean": 231.77779,
        "analystCount": 27,
        "eps0": 5.4493,
        "eps1": 6.60384,
        "revenue1": 21145612650,
        "epsGrowth1": 0.21190001,
        "revenueGrowth1": 0.1683
      }
    ]
  },
  "SNDK": {
    "targetMean": 2107.6956,
    "targetLow": 1000.0,
    "targetHigh": 3600.0,
    "analystCount": 23,
    "recommendationMean": 1.54167,
    "recommendationKey": "buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2027-06-30",
        "epsAvg": 214.72667,
        "epsGrowth": 2.0294,
        "revenueAvg": 49086548320,
        "revenueGrowth": 1.4243,
        "analysts": 20
      },
      {
        "period": "+1y",
        "endDate": "2028-06-30",
        "epsAvg": 264.14478,
        "epsGrowth": 0.2301,
        "revenueAvg": 57869085550,
        "revenueGrowth": 0.17889999,
        "analysts": 19
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 229712396288,
    "week52High": 2354.39,
    "week52Low": 43.56,
    "financialCurrency": "USD",
    "ttmRevenue": 20248000512,
    "ttmNetIncome": 11432999936,
    "_fetched_at": 1787193071.3536406,
    "_updated_label": "2026-08-20 11:31",
    "_history": [
      {
        "date": "2026-08-10",
        "fetchedAt": 1786339006.7750585,
        "targetMean": 2106.6365,
        "analystCount": 22,
        "eps0": 212.1455,
        "eps1": 261.165,
        "revenue1": 60823505280,
        "epsGrowth1": 0.23110001,
        "revenueGrowth1": 0.2516
      },
      {
        "date": "2026-08-11",
        "fetchedAt": 1786388420.811517,
        "targetMean": 2106.6365,
        "analystCount": 22,
        "eps0": 212.1455,
        "eps1": 261.165,
        "revenue1": 60823505280,
        "epsGrowth1": 0.23110001,
        "revenueGrowth1": 0.2516
      },
      {
        "date": "2026-08-12",
        "fetchedAt": 1786474823.1225314,
        "targetMean": 2053.5,
        "analystCount": 22,
        "eps0": 213.2349,
        "eps1": 265.12222,
        "revenue1": 58257340570,
        "epsGrowth1": 0.2433,
        "revenueGrowth1": 0.191
      },
      {
        "date": "2026-08-13",
        "fetchedAt": 1786561225.728278,
        "targetMean": 2053.5,
        "analystCount": 22,
        "eps0": 213.2349,
        "eps1": 265.12222,
        "revenue1": 58257340570,
        "epsGrowth1": 0.2433,
        "revenueGrowth1": 0.191
      },
      {
        "date": "2026-08-14",
        "fetchedAt": 1786665686.038369,
        "targetMean": 2053.5,
        "analystCount": 22,
        "eps0": 213.2349,
        "eps1": 265.12222,
        "revenue1": 58257340570,
        "epsGrowth1": 0.2433,
        "revenueGrowth1": 0.191
      },
      {
        "date": "2026-08-15",
        "fetchedAt": 1786752271.5141675,
        "targetMean": 2053.5,
        "analystCount": 22,
        "eps0": 213.2349,
        "eps1": 265.12222,
        "revenue1": 58257340570,
        "epsGrowth1": 0.2433,
        "revenueGrowth1": 0.191
      },
      {
        "date": "2026-08-16",
        "fetchedAt": 1786840263.5342243,
        "targetMean": 2107.6956,
        "analystCount": 23,
        "eps0": 214.72667,
        "eps1": 264.14478,
        "revenue1": 57869085550,
        "epsGrowth1": 0.2301,
        "revenueGrowth1": 0.17889999
      },
      {
        "date": "2026-08-17",
        "fetchedAt": 1786928309.5439892,
        "targetMean": 2107.6956,
        "analystCount": 23,
        "eps0": 214.72667,
        "eps1": 264.14478,
        "revenue1": 57869085550,
        "epsGrowth1": 0.2301,
        "revenueGrowth1": 0.17889999
      },
      {
        "date": "2026-08-18",
        "fetchedAt": 1787015792.666919,
        "targetMean": 2107.6956,
        "analystCount": 23,
        "eps0": 214.72667,
        "eps1": 264.14478,
        "revenue1": 57869085550,
        "epsGrowth1": 0.2301,
        "revenueGrowth1": 0.17889999
      },
      {
        "date": "2026-08-19",
        "fetchedAt": 1787104541.4383624,
        "targetMean": 2107.6956,
        "analystCount": 23,
        "eps0": 214.72667,
        "eps1": 264.14478,
        "revenue1": 57869085550,
        "epsGrowth1": 0.2301,
        "revenueGrowth1": 0.17889999
      },
      {
        "date": "2026-08-20",
        "fetchedAt": 1787193071.3536406,
        "targetMean": 2107.6956,
        "analystCount": 23,
        "eps0": 214.72667,
        "eps1": 264.14478,
        "revenue1": 57869085550,
        "epsGrowth1": 0.2301,
        "revenueGrowth1": 0.17889999
      }
    ]
  },
  "WDC": {
    "targetMean": 664.9167,
    "targetLow": 420.0,
    "targetHigh": 1050.0,
    "analystCount": 24,
    "recommendationMean": 1.57692,
    "recommendationKey": "buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2027-06-30",
        "epsAvg": 20.09143,
        "epsGrowth": 0.96589994,
        "revenueAvg": 19191868230,
        "revenueGrowth": 0.48560002,
        "analysts": 22
      },
      {
        "period": "+1y",
        "endDate": "2028-06-30",
        "epsAvg": 31.55266,
        "epsGrowth": 0.5705,
        "revenueAvg": 26249647330,
        "revenueGrowth": 0.3677,
        "analysts": 19
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 166602358784,
    "week52High": 799.87,
    "week52Low": 74.42,
    "financialCurrency": "USD",
    "ttmRevenue": 12919000064,
    "ttmNetIncome": 9285999616,
    "_fetched_at": 1787193071.3536406,
    "_updated_label": "2026-08-20 11:31",
    "_history": [
      {
        "date": "2026-08-10",
        "fetchedAt": 1786339006.7750585,
        "targetMean": 662.125,
        "analystCount": 24,
        "eps0": 20.10436,
        "eps1": 31.69948,
        "revenue1": 26157059330,
        "epsGrowth1": 0.5767,
        "revenueGrowth1": 0.36150002
      },
      {
        "date": "2026-08-11",
        "fetchedAt": 1786388420.811517,
        "targetMean": 662.125,
        "analystCount": 24,
        "eps0": 20.10436,
        "eps1": 31.69948,
        "revenue1": 26157059330,
        "epsGrowth1": 0.5767,
        "revenueGrowth1": 0.36150002
      },
      {
        "date": "2026-08-12",
        "fetchedAt": 1786474823.1225314,
        "targetMean": 662.125,
        "analystCount": 24,
        "eps0": 20.10436,
        "eps1": 31.69948,
        "revenue1": 26157059330,
        "epsGrowth1": 0.5767,
        "revenueGrowth1": 0.36150002
      },
      {
        "date": "2026-08-13",
        "fetchedAt": 1786561225.728278,
        "targetMean": 662.125,
        "analystCount": 24,
        "eps0": 20.10436,
        "eps1": 31.69948,
        "revenue1": 26157059330,
        "epsGrowth1": 0.5767,
        "revenueGrowth1": 0.36150002
      },
      {
        "date": "2026-08-14",
        "fetchedAt": 1786665686.038369,
        "targetMean": 662.125,
        "analystCount": 24,
        "eps0": 20.10436,
        "eps1": 31.69948,
        "revenue1": 26157059330,
        "epsGrowth1": 0.5767,
        "revenueGrowth1": 0.36150002
      },
      {
        "date": "2026-08-15",
        "fetchedAt": 1786752271.5141675,
        "targetMean": 662.125,
        "analystCount": 24,
        "eps0": 20.10436,
        "eps1": 31.69948,
        "revenue1": 26157059330,
        "epsGrowth1": 0.5767,
        "revenueGrowth1": 0.36150002
      },
      {
        "date": "2026-08-16",
        "fetchedAt": 1786840263.5342243,
        "targetMean": 662.125,
        "analystCount": 24,
        "eps0": 20.10436,
        "eps1": 31.69948,
        "revenue1": 26157059330,
        "epsGrowth1": 0.5767,
        "revenueGrowth1": 0.36150002
      },
      {
        "date": "2026-08-17",
        "fetchedAt": 1786928309.5439892,
        "targetMean": 662.125,
        "analystCount": 24,
        "eps0": 20.10436,
        "eps1": 31.69948,
        "revenue1": 26157059330,
        "epsGrowth1": 0.5767,
        "revenueGrowth1": 0.36150002
      },
      {
        "date": "2026-08-18",
        "fetchedAt": 1787015792.666919,
        "targetMean": 662.125,
        "analystCount": 24,
        "eps0": 20.10436,
        "eps1": 31.69948,
        "revenue1": 26157059330,
        "epsGrowth1": 0.5767,
        "revenueGrowth1": 0.36150002
      },
      {
        "date": "2026-08-19",
        "fetchedAt": 1787104541.4383624,
        "targetMean": 664.9167,
        "analystCount": 24,
        "eps0": 20.09143,
        "eps1": 31.55266,
        "revenue1": 26249647330,
        "epsGrowth1": 0.5705,
        "revenueGrowth1": 0.3677
      },
      {
        "date": "2026-08-20",
        "fetchedAt": 1787193071.3536406,
        "targetMean": 664.9167,
        "analystCount": 24,
        "eps0": 20.09143,
        "eps1": 31.55266,
        "revenue1": 26249647330,
        "epsGrowth1": 0.5705,
        "revenueGrowth1": 0.3677
      }
    ]
  },
  "ANET": {
    "targetMean": 241.81519,
    "targetLow": 185.0,
    "targetHigh": 289.0,
    "analystCount": 27,
    "recommendationMean": 1.3,
    "recommendationKey": "strong_buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2026-12-31",
        "epsAvg": 4.11295,
        "epsGrowth": 0.3802,
        "revenueAvg": 12667530860,
        "revenueGrowth": 0.4066,
        "analysts": 26
      },
      {
        "period": "+1y",
        "endDate": "2027-12-31",
        "epsAvg": 5.15956,
        "epsGrowth": 0.2545,
        "revenueAvg": 16156985450,
        "revenueGrowth": 0.2755,
        "analysts": 27
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 235155341312,
    "week52High": 214.89,
    "week52Low": 114.52,
    "financialCurrency": "USD",
    "ttmRevenue": 10540800000,
    "ttmNetIncome": 4044600064,
    "_fetched_at": 1787215455.5113006,
    "_updated_label": "2026-08-20 17:44",
    "_history": [
      {
        "date": "2026-08-19",
        "fetchedAt": 1787126006.254144,
        "targetMean": 241.81519,
        "analystCount": 27,
        "eps0": 4.11295,
        "eps1": 5.15956,
        "revenue1": 16156985450,
        "epsGrowth1": 0.2545,
        "revenueGrowth1": 0.2755
      },
      {
        "date": "2026-08-20",
        "fetchedAt": 1787215455.5113006,
        "targetMean": 241.81519,
        "analystCount": 27,
        "eps0": 4.11295,
        "eps1": 5.15956,
        "revenue1": 16156985450,
        "epsGrowth1": 0.2545,
        "revenueGrowth1": 0.2755
      }
    ]
  },
  "COHR": {
    "targetMean": 410.76,
    "targetLow": 280.0,
    "targetHigh": 480.0,
    "analystCount": 21,
    "recommendationMean": 1.63636,
    "recommendationKey": "buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2027-06-30",
        "epsAvg": 9.35217,
        "epsGrowth": 0.6671,
        "revenueAvg": 10580909750,
        "revenueGrowth": 0.48650002,
        "analysts": 21
      },
      {
        "period": "+1y",
        "endDate": "2028-06-30",
        "epsAvg": 13.94276,
        "epsGrowth": 0.4909,
        "revenueAvg": 14423864240,
        "revenueGrowth": 0.3632,
        "analysts": 17
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 56295895040,
    "week52High": 440.0,
    "week52Low": 85.52,
    "financialCurrency": "USD",
    "ttmRevenue": 7118180864,
    "ttmNetIncome": 769896000,
    "_fetched_at": 1787215455.5113006,
    "_updated_label": "2026-08-20 17:44",
    "_history": [
      {
        "date": "2026-08-19",
        "fetchedAt": 1787126006.254144,
        "targetMean": 410.76,
        "analystCount": 21,
        "eps0": 9.35217,
        "eps1": 13.94276,
        "revenue1": 14423864240,
        "epsGrowth1": 0.4909,
        "revenueGrowth1": 0.3632
      },
      {
        "date": "2026-08-20",
        "fetchedAt": 1787215455.5113006,
        "targetMean": 410.76,
        "analystCount": 21,
        "eps0": 9.35217,
        "eps1": 13.94276,
        "revenue1": 14423864240,
        "epsGrowth1": 0.4909,
        "revenueGrowth1": 0.3632
      }
    ]
  },
  "LITE": {
    "targetMean": 1125.9277,
    "targetLow": 800.0,
    "targetHigh": 1400.0,
    "analystCount": 24,
    "recommendationMean": 1.54167,
    "recommendationKey": "buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2027-06-30",
        "epsAvg": 18.73451,
        "epsGrowth": 1.1608,
        "revenueAvg": 5693190710,
        "revenueGrowth": 0.8889,
        "analysts": 24
      },
      {
        "period": "+1y",
        "endDate": "2028-06-30",
        "epsAvg": 29.84915,
        "epsGrowth": 0.59330004,
        "revenueAvg": 8717953870,
        "revenueGrowth": 0.5313,
        "analysts": 16
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 74235715584,
    "week52High": 1085.68,
    "week52Low": 115.205,
    "financialCurrency": "USD",
    "ttmRevenue": 3014000128,
    "ttmNetIncome": -6935099904,
    "_fetched_at": 1787215455.5113006,
    "_updated_label": "2026-08-20 17:44",
    "_history": [
      {
        "date": "2026-08-19",
        "fetchedAt": 1787126006.254144,
        "targetMean": 1125.9277,
        "analystCount": 24,
        "eps0": 18.73451,
        "eps1": 29.84915,
        "revenue1": 8717953870,
        "epsGrowth1": 0.59330004,
        "revenueGrowth1": 0.5313
      },
      {
        "date": "2026-08-20",
        "fetchedAt": 1787215455.5113006,
        "targetMean": 1125.9277,
        "analystCount": 24,
        "eps0": 18.73451,
        "eps1": 29.84915,
        "revenue1": 8717953870,
        "epsGrowth1": 0.59330004,
        "revenueGrowth1": 0.5313
      }
    ]
  },
  "GEV": {
    "targetMean": 1239.4622,
    "targetLow": 940.0,
    "targetHigh": 1450.0,
    "analystCount": 33,
    "recommendationMean": 1.57895,
    "recommendationKey": "buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2026-12-31",
        "epsAvg": 30.84574,
        "epsGrowth": 0.7437,
        "revenueAvg": 46182373560,
        "revenueGrowth": 0.2132,
        "analysts": 21
      },
      {
        "period": "+1y",
        "endDate": "2027-12-31",
        "epsAvg": 24.86619,
        "epsGrowth": -0.19389999,
        "revenueAvg": 52636827220,
        "revenueGrowth": 0.1398,
        "analysts": 29
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 262993772544,
    "week52High": 1195.94,
    "week52Low": 530.16,
    "financialCurrency": "USD",
    "ttmRevenue": 41366999040,
    "ttmNetIncome": 9528999936,
    "_fetched_at": 1787215455.5113006,
    "_updated_label": "2026-08-20 17:44",
    "_history": [
      {
        "date": "2026-08-19",
        "fetchedAt": 1787126006.254144,
        "targetMean": 1239.4622,
        "analystCount": 33,
        "eps0": 30.84574,
        "eps1": 24.86619,
        "revenue1": 52636827220,
        "epsGrowth1": -0.19389999,
        "revenueGrowth1": 0.1398
      },
      {
        "date": "2026-08-20",
        "fetchedAt": 1787215455.5113006,
        "targetMean": 1239.4622,
        "analystCount": 33,
        "eps0": 30.84574,
        "eps1": 24.86619,
        "revenue1": 52636827220,
        "epsGrowth1": -0.19389999,
        "revenueGrowth1": 0.1398
      }
    ]
  },
  "CEG": {
    "targetMean": 348.454,
    "targetLow": 290.0,
    "targetHigh": 441.0,
    "analystCount": 20,
    "recommendationMean": 1.54545,
    "recommendationKey": "buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2026-12-31",
        "epsAvg": 11.90916,
        "epsGrowth": 0.2683,
        "revenueAvg": 36624531880,
        "revenueGrowth": 0.4344,
        "analysts": 19
      },
      {
        "period": "+1y",
        "endDate": "2027-12-31",
        "epsAvg": 13.34315,
        "epsGrowth": 0.1204,
        "revenueAvg": 35233889530,
        "revenueGrowth": -0.038,
        "analysts": 20
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 97140465664,
    "week52High": 412.7,
    "week52Low": 228.63,
    "financialCurrency": "USD",
    "ttmRevenue": 31270000640,
    "ttmNetIncome": 3464999936,
    "_fetched_at": 1787215455.5113006,
    "_updated_label": "2026-08-20 17:44",
    "_history": [
      {
        "date": "2026-08-19",
        "fetchedAt": 1787126006.254144,
        "targetMean": 348.454,
        "analystCount": 20,
        "eps0": 11.90916,
        "eps1": 13.34315,
        "revenue1": 35233889530,
        "epsGrowth1": 0.1204,
        "revenueGrowth1": -0.038
      },
      {
        "date": "2026-08-20",
        "fetchedAt": 1787215455.5113006,
        "targetMean": 348.454,
        "analystCount": 20,
        "eps0": 11.90916,
        "eps1": 13.34315,
        "revenue1": 35233889530,
        "epsGrowth1": 0.1204,
        "revenueGrowth1": -0.038
      }
    ]
  },
  "VST": {
    "targetMean": 221.27779,
    "targetLow": 106.0,
    "targetHigh": 313.0,
    "analystCount": 18,
    "recommendationMean": 1.36842,
    "recommendationKey": "strong_buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2026-12-31",
        "epsAvg": 9.60291,
        "epsGrowth": 3.405,
        "revenueAvg": 22087319840,
        "revenueGrowth": 0.24520001,
        "analysts": 9
      },
      {
        "period": "+1y",
        "endDate": "2027-12-31",
        "epsAvg": 10.53237,
        "epsGrowth": 0.0968,
        "revenueAvg": 24528805560,
        "revenueGrowth": 0.1105,
        "analysts": 9
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 47895142400,
    "week52High": 219.82,
    "week52Low": 132.66,
    "financialCurrency": "USD",
    "ttmRevenue": 19211999232,
    "ttmNetIncome": 2027000064,
    "_fetched_at": 1787215455.5113006,
    "_updated_label": "2026-08-20 17:44",
    "_history": [
      {
        "date": "2026-08-19",
        "fetchedAt": 1787126006.254144,
        "targetMean": 221.27779,
        "analystCount": 18,
        "eps0": 9.60291,
        "eps1": 10.53237,
        "revenue1": 24528805560,
        "epsGrowth1": 0.0968,
        "revenueGrowth1": 0.1105
      },
      {
        "date": "2026-08-20",
        "fetchedAt": 1787215455.5113006,
        "targetMean": 221.27779,
        "analystCount": 18,
        "eps0": 9.60291,
        "eps1": 10.53237,
        "revenue1": 24528805560,
        "epsGrowth1": 0.0968,
        "revenueGrowth1": 0.1105
      }
    ]
  },
  "ETN": {
    "targetMean": 476.42792,
    "targetLow": 333.0,
    "targetHigh": 534.0,
    "analystCount": 24,
    "recommendationMean": 1.61538,
    "recommendationKey": "buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2026-12-31",
        "epsAvg": 13.50587,
        "epsGrowth": 0.118999995,
        "revenueAvg": 32743662970,
        "revenueGrowth": 0.1929,
        "analysts": 23
      },
      {
        "period": "+1y",
        "endDate": "2027-12-31",
        "epsAvg": 16.02188,
        "epsGrowth": 0.1863,
        "revenueAvg": 36521104810,
        "revenueGrowth": 0.1154,
        "analysts": 22
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 164899373056,
    "week52High": 478.0,
    "week52Low": 311.92,
    "financialCurrency": "USD",
    "ttmRevenue": 30026000384,
    "ttmNetIncome": 3828999936,
    "_fetched_at": 1787215455.5113006,
    "_updated_label": "2026-08-20 17:44",
    "_history": [
      {
        "date": "2026-08-19",
        "fetchedAt": 1787126006.254144,
        "targetMean": 476.42792,
        "analystCount": 24,
        "eps0": 13.50587,
        "eps1": 16.02188,
        "revenue1": 36521104810,
        "epsGrowth1": 0.1863,
        "revenueGrowth1": 0.1154
      },
      {
        "date": "2026-08-20",
        "fetchedAt": 1787215455.5113006,
        "targetMean": 476.42792,
        "analystCount": 24,
        "eps0": 13.50587,
        "eps1": 16.02188,
        "revenue1": 36521104810,
        "epsGrowth1": 0.1863,
        "revenueGrowth1": 0.1154
      }
    ]
  },
  "PWR": {
    "targetMean": 770.0421,
    "targetLow": 410.0,
    "targetHigh": 976.0,
    "analystCount": 28,
    "recommendationMean": 1.5,
    "recommendationKey": "strong_buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2026-12-31",
        "epsAvg": 16.72777,
        "epsGrowth": 0.5561,
        "revenueAvg": 39590244570,
        "revenueGrowth": 0.39009997,
        "analysts": 24
      },
      {
        "period": "+1y",
        "endDate": "2027-12-31",
        "epsAvg": 19.6413,
        "epsGrowth": 0.1742,
        "revenueAvg": 45420715130,
        "revenueGrowth": 0.14729999,
        "analysts": 25
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 101844115456,
    "week52High": 788.75,
    "week52Low": 363.01,
    "financialCurrency": "USD",
    "ttmRevenue": 32905140224,
    "ttmNetIncome": 1326876032,
    "_fetched_at": 1787215455.5113006,
    "_updated_label": "2026-08-20 17:44",
    "_history": [
      {
        "date": "2026-08-19",
        "fetchedAt": 1787126006.254144,
        "targetMean": 770.0421,
        "analystCount": 28,
        "eps0": 16.72777,
        "eps1": 19.6413,
        "revenue1": 45420715130,
        "epsGrowth1": 0.1742,
        "revenueGrowth1": 0.14729999
      },
      {
        "date": "2026-08-20",
        "fetchedAt": 1787215455.5113006,
        "targetMean": 770.0421,
        "analystCount": 28,
        "eps0": 16.72777,
        "eps1": 19.6413,
        "revenue1": 45420715130,
        "epsGrowth1": 0.1742,
        "revenueGrowth1": 0.14729999
      }
    ]
  },
  "HUBB": {
    "targetMean": 566.3,
    "targetLow": 502.0,
    "targetHigh": 630.0,
    "analystCount": 10,
    "recommendationMean": 2.0,
    "recommendationKey": "buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2026-12-31",
        "epsAvg": 20.45252,
        "epsGrowth": 0.123100005,
        "revenueAvg": 6867193380,
        "revenueGrowth": 0.175,
        "analysts": 10
      },
      {
        "period": "+1y",
        "endDate": "2027-12-31",
        "epsAvg": 22.87081,
        "epsGrowth": 0.1182,
        "revenueAvg": 7547788690,
        "revenueGrowth": 0.0991,
        "analysts": 10
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 25133662208,
    "week52High": 565.4999,
    "week52Low": 403.82,
    "financialCurrency": "USD",
    "ttmRevenue": 6223600128,
    "ttmNetIncome": 900600000,
    "_fetched_at": 1787215455.5113006,
    "_updated_label": "2026-08-20 17:44",
    "_history": [
      {
        "date": "2026-08-19",
        "fetchedAt": 1787126006.254144,
        "targetMean": 566.3,
        "analystCount": 10,
        "eps0": 20.45252,
        "eps1": 22.87081,
        "revenue1": 7547788690,
        "epsGrowth1": 0.1182,
        "revenueGrowth1": 0.0991
      },
      {
        "date": "2026-08-20",
        "fetchedAt": 1787215455.5113006,
        "targetMean": 566.3,
        "analystCount": 10,
        "eps0": 20.45252,
        "eps1": 22.87081,
        "revenue1": 7547788690,
        "epsGrowth1": 0.1182,
        "revenueGrowth1": 0.0991
      }
    ]
  },
  "VRT": {
    "targetMean": 338.15384,
    "targetLow": 236.0,
    "targetHigh": 427.0,
    "analystCount": 26,
    "recommendationMean": 1.39286,
    "recommendationKey": "strong_buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2026-12-31",
        "epsAvg": 6.70757,
        "epsGrowth": 0.597,
        "revenueAvg": 14016338910,
        "revenueGrowth": 0.3701,
        "analysts": 28
      },
      {
        "period": "+1y",
        "endDate": "2027-12-31",
        "epsAvg": 9.09879,
        "epsGrowth": 0.35650003,
        "revenueAvg": 18150291710,
        "revenueGrowth": 0.2949,
        "analysts": 28
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 100481908736,
    "week52High": 379.935,
    "week52Low": 118.7,
    "financialCurrency": "USD",
    "ttmRevenue": 11479600128,
    "ttmNetIncome": 1732000000,
    "_fetched_at": 1787215455.5113006,
    "_updated_label": "2026-08-20 17:44",
    "_history": [
      {
        "date": "2026-08-19",
        "fetchedAt": 1787126006.254144,
        "targetMean": 338.15384,
        "analystCount": 26,
        "eps0": 6.70757,
        "eps1": 9.09879,
        "revenue1": 18150291710,
        "epsGrowth1": 0.35650003,
        "revenueGrowth1": 0.2949
      },
      {
        "date": "2026-08-20",
        "fetchedAt": 1787215455.5113006,
        "targetMean": 338.15384,
        "analystCount": 26,
        "eps0": 6.70757,
        "eps1": 9.09879,
        "revenue1": 18150291710,
        "epsGrowth1": 0.35650003,
        "revenueGrowth1": 0.2949
      }
    ]
  },
  "MOD": {
    "targetMean": 310.2857,
    "targetLow": 280.0,
    "targetHigh": 355.0,
    "analystCount": 7,
    "recommendationMean": 1.125,
    "recommendationKey": "strong_buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2027-03-31",
        "epsAvg": 7.6441,
        "epsGrowth": 0.5227,
        "revenueAvg": 4062548340,
        "revenueGrowth": 0.2771,
        "analysts": 8
      },
      {
        "period": "+1y",
        "endDate": "2028-03-31",
        "epsAvg": 11.18208,
        "epsGrowth": 0.4628,
        "revenueAvg": 5050269240,
        "revenueGrowth": 0.24309999,
        "analysts": 7
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 10364413952,
    "week52High": 323.25,
    "week52Low": 111.18,
    "financialCurrency": "USD",
    "ttmRevenue": 3372400128,
    "ttmNetIncome": 144200000,
    "_fetched_at": 1787215455.5113006,
    "_updated_label": "2026-08-20 17:44",
    "_history": [
      {
        "date": "2026-08-19",
        "fetchedAt": 1787126006.254144,
        "targetMean": 310.2857,
        "analystCount": 7,
        "eps0": 7.6441,
        "eps1": 11.18208,
        "revenue1": 5050269240,
        "epsGrowth1": 0.4628,
        "revenueGrowth1": 0.24309999
      },
      {
        "date": "2026-08-20",
        "fetchedAt": 1787215455.5113006,
        "targetMean": 310.2857,
        "analystCount": 7,
        "eps0": 7.6441,
        "eps1": 11.18208,
        "revenue1": 5050269240,
        "epsGrowth1": 0.4628,
        "revenueGrowth1": 0.24309999
      }
    ]
  },
  "STX": {
    "targetMean": 1125.0,
    "targetLow": 700.0,
    "targetHigh": 1600.0,
    "analystCount": 23,
    "recommendationMean": 1.44,
    "recommendationKey": "strong_buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2027-06-30",
        "epsAvg": 35.78091,
        "epsGrowth": 1.2966,
        "revenueAvg": 18784871990,
        "revenueGrowth": 0.5404,
        "analysts": 21
      },
      {
        "period": "+1y",
        "endDate": "2028-06-30",
        "epsAvg": 55.3714,
        "epsGrowth": 0.5475,
        "revenueAvg": 25105334460,
        "revenueGrowth": 0.33650002,
        "analysts": 19
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 188991127552,
    "week52High": 1145.0,
    "week52Low": 153.03,
    "financialCurrency": "USD",
    "ttmRevenue": 12195000320,
    "ttmNetIncome": 3184000000,
    "_fetched_at": 1787215455.5113006,
    "_updated_label": "2026-08-20 17:44",
    "_history": [
      {
        "date": "2026-08-19",
        "fetchedAt": 1787126006.254144,
        "targetMean": 1125.0,
        "analystCount": 23,
        "eps0": 35.78091,
        "eps1": 55.3714,
        "revenue1": 25105334460,
        "epsGrowth1": 0.5475,
        "revenueGrowth1": 0.33650002
      },
      {
        "date": "2026-08-20",
        "fetchedAt": 1787215455.5113006,
        "targetMean": 1125.0,
        "analystCount": 23,
        "eps0": 35.78091,
        "eps1": 55.3714,
        "revenue1": 25105334460,
        "epsGrowth1": 0.5475,
        "revenueGrowth1": 0.33650002
      }
    ]
  },
  "EME": {
    "targetMean": 1033.2858,
    "targetLow": 885.0,
    "targetHigh": 1200.0,
    "analystCount": 7,
    "recommendationMean": 1.6,
    "recommendationKey": "buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2026-12-31",
        "epsAvg": 32.85395,
        "epsGrowth": 0.27,
        "revenueAvg": 20319659700,
        "revenueGrowth": 0.19620001,
        "analysts": 9
      },
      {
        "period": "+1y",
        "endDate": "2027-12-31",
        "epsAvg": 36.74499,
        "epsGrowth": 0.1184,
        "revenueAvg": 22314126480,
        "revenueGrowth": 0.09819999,
        "analysts": 10
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 35542876160,
    "week52High": 951.96,
    "week52Low": 564.92,
    "financialCurrency": "USD",
    "ttmRevenue": 18597775360,
    "ttmNetIncome": 1439158016,
    "_fetched_at": 1787215455.5113006,
    "_updated_label": "2026-08-20 17:44",
    "_history": [
      {
        "date": "2026-08-19",
        "fetchedAt": 1787126006.254144,
        "targetMean": 1033.2858,
        "analystCount": 7,
        "eps0": 32.85395,
        "eps1": 36.74499,
        "revenue1": 22314126480,
        "epsGrowth1": 0.1184,
        "revenueGrowth1": 0.09819999
      },
      {
        "date": "2026-08-20",
        "fetchedAt": 1787215455.5113006,
        "targetMean": 1033.2858,
        "analystCount": 7,
        "eps0": 32.85395,
        "eps1": 36.74499,
        "revenue1": 22314126480,
        "epsGrowth1": 0.1184,
        "revenueGrowth1": 0.09819999
      }
    ]
  },
  "FIX": {
    "targetMean": 2210.8572,
    "targetLow": 1910.0,
    "targetHigh": 2500.0,
    "analystCount": 7,
    "recommendationMean": 1.22222,
    "recommendationKey": "strong_buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2026-12-31",
        "epsAvg": 48.97116,
        "epsGrowth": 0.6957,
        "revenueAvg": 12980575810,
        "revenueGrowth": 0.4262,
        "analysts": 9
      },
      {
        "period": "+1y",
        "endDate": "2027-12-31",
        "epsAvg": 60.04276,
        "epsGrowth": 0.22610001,
        "revenueAvg": 15412709880,
        "revenueGrowth": 0.1874,
        "analysts": 9
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 59691692032,
    "week52High": 2073.99,
    "week52Low": 670.19,
    "financialCurrency": "USD",
    "ttmRevenue": 11228023808,
    "ttmNetIncome": 1434401024,
    "_fetched_at": 1787215455.5113006,
    "_updated_label": "2026-08-20 17:44",
    "_history": [
      {
        "date": "2026-08-19",
        "fetchedAt": 1787126006.254144,
        "targetMean": 2210.8572,
        "analystCount": 7,
        "eps0": 48.97116,
        "eps1": 60.04276,
        "revenue1": 15412709880,
        "epsGrowth1": 0.22610001,
        "revenueGrowth1": 0.1874
      },
      {
        "date": "2026-08-20",
        "fetchedAt": 1787215455.5113006,
        "targetMean": 2210.8572,
        "analystCount": 7,
        "eps0": 48.97116,
        "eps1": 60.04276,
        "revenue1": 15412709880,
        "epsGrowth1": 0.22610001,
        "revenueGrowth1": 0.1874
      }
    ]
  },
  "SBGSY": {
    "targetMean": 77.8,
    "targetLow": 76.0,
    "targetHigh": 79.0,
    "analystCount": 3,
    "recommendationMean": 1.33333,
    "recommendationKey": "strong_buy",
    "trend": [
      {
        "period": "0y",
        "endDate": "2026-12-31",
        "epsAvg": 2.30922,
        "epsGrowth": 0.1396,
        "revenueAvg": 44616058320,
        "revenueGrowth": 0.1112,
        "analysts": 2
      },
      {
        "period": "+1y",
        "endDate": "2027-12-31",
        "epsAvg": 2.878,
        "epsGrowth": 0.2463,
        "revenueAvg": 48761215960,
        "revenueGrowth": 0.0929,
        "analysts": 1
      }
    ],
    "quoteCurrency": "USD",
    "quoteMarketCap": 192975781888,
    "week52High": 71.98,
    "week52Low": 48.68,
    "financialCurrency": "EUR",
    "ttmRevenue": 42041999360,
    "ttmNetIncome": 4737999872,
    "_fetched_at": 1787215455.5113006,
    "_updated_label": "2026-08-20 17:44",
    "_history": [
      {
        "date": "2026-08-19",
        "fetchedAt": 1787126006.254144,
        "targetMean": 77.8,
        "analystCount": 3,
        "eps0": 2.30922,
        "eps1": 2.878,
        "revenue1": 48761215960,
        "epsGrowth1": 0.2463,
        "revenueGrowth1": 0.0929
      },
      {
        "date": "2026-08-20",
        "fetchedAt": 1787215455.5113006,
        "targetMean": 77.8,
        "analystCount": 3,
        "eps0": 2.30922,
        "eps1": 2.878,
        "revenue1": 48761215960,
        "epsGrowth1": 0.2463,
        "revenueGrowth1": 0.0929
      }
    ]
  }
};
