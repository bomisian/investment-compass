// 자동 생성 파일 - buy_signal_telegram.py 실행 시마다 갱신됨. 직접 수정하지 마세요.
// 티커별 {date: 'YYYY-MM-DD', roeTTM, roicTTM, psTTM, pb, evEbitdaTTM} 하루 1건씩 누적.
const FUNDAMENTALS_HISTORY_DATA = {
  "MSFT": [
    {
      "date": "2026-09-02",
      "roeTTM": 33.22,
      "roicTTM": 26.5,
      "psTTM": 11.1493,
      "pb": 8.3632,
      "evEbitdaTTM": 19.5551
    },
    {
      "date": "2026-09-03",
      "roeTTM": 33.22,
      "roicTTM": 26.5,
      "psTTM": 11.1493,
      "pb": 8.3632,
      "evEbitdaTTM": 19.5551
    },
    {
      "date": "2026-09-04",
      "roeTTM": 33.22,
      "roicTTM": 26.5,
      "psTTM": 11.1493,
      "pb": 8.3632,
      "evEbitdaTTM": 19.5551
    },
    {
      "date": "2026-09-05",
      "roeTTM": 33.22,
      "roicTTM": 26.5,
      "psTTM": 11.1173,
      "pb": 8.3392,
      "evEbitdaTTM": 19.5003
    },
    {
      "date": "2026-09-06",
      "roeTTM": 33.22,
      "roicTTM": 26.5,
      "psTTM": 11.1173,
      "pb": 8.3392,
      "evEbitdaTTM": 19.5003
    },
    {
      "date": "2026-09-07",
      "roeTTM": 33.22,
      "roicTTM": 26.5,
      "psTTM": 11.1818,
      "pb": 8.3876,
      "evEbitdaTTM": 19.6107
    }
  ],
  "GOOGL": [
    {
      "date": "2026-09-02",
      "roeTTM": 50.839999999999996,
      "roicTTM": 44.84,
      "psTTM": 9.4805,
      "pb": 6.5998,
      "evEbitdaTTM": 27.263
    },
    {
      "date": "2026-09-03",
      "roeTTM": 50.839999999999996,
      "roicTTM": 44.84,
      "psTTM": 9.4805,
      "pb": 6.5998,
      "evEbitdaTTM": 27.263
    },
    {
      "date": "2026-09-04",
      "roeTTM": 50.839999999999996,
      "roicTTM": 44.84,
      "psTTM": 9.4805,
      "pb": 6.5998,
      "evEbitdaTTM": 27.263
    },
    {
      "date": "2026-09-05",
      "roeTTM": 50.839999999999996,
      "roicTTM": 44.84,
      "psTTM": 9.401,
      "pb": 6.5444,
      "evEbitdaTTM": 27.0365
    },
    {
      "date": "2026-09-06",
      "roeTTM": 50.839999999999996,
      "roicTTM": 44.84,
      "psTTM": 9.401,
      "pb": 6.5444,
      "evEbitdaTTM": 27.0365
    },
    {
      "date": "2026-09-07",
      "roeTTM": 50.839999999999996,
      "roicTTM": 44.84,
      "psTTM": 9.2839,
      "pb": 6.4629,
      "evEbitdaTTM": 26.7031
    }
  ],
  "AMZN": [
    {
      "date": "2026-09-02",
      "roeTTM": 30.5,
      "roicTTM": 24.19,
      "psTTM": 3.6868,
      "pb": 5.1843,
      "evEbitdaTTM": 17.387
    },
    {
      "date": "2026-09-03",
      "roeTTM": 30.5,
      "roicTTM": 24.19,
      "psTTM": 3.6868,
      "pb": 5.1843,
      "evEbitdaTTM": 17.387
    },
    {
      "date": "2026-09-04",
      "roeTTM": 30.5,
      "roicTTM": 24.19,
      "psTTM": 3.6868,
      "pb": 5.1843,
      "evEbitdaTTM": 17.387
    },
    {
      "date": "2026-09-05",
      "roeTTM": 30.5,
      "roicTTM": 24.19,
      "psTTM": 3.5457,
      "pb": 4.9858,
      "evEbitdaTTM": 16.7389
    },
    {
      "date": "2026-09-06",
      "roeTTM": 30.5,
      "roicTTM": 24.19,
      "psTTM": 3.5457,
      "pb": 4.9858,
      "evEbitdaTTM": 16.7389
    },
    {
      "date": "2026-09-07",
      "roeTTM": 30.5,
      "roicTTM": 24.19,
      "psTTM": 3.5947,
      "pb": 5.0549,
      "evEbitdaTTM": 16.9643
    }
  ],
  "META": [
    {
      "date": "2026-09-02",
      "roeTTM": 29.73,
      "roicTTM": 23.74,
      "psTTM": 6.6406,
      "pb": 5.8023,
      "evEbitdaTTM": 14.4442
    },
    {
      "date": "2026-09-03",
      "roeTTM": 29.73,
      "roicTTM": 23.74,
      "psTTM": 6.6406,
      "pb": 5.8023,
      "evEbitdaTTM": 14.4442
    },
    {
      "date": "2026-09-04",
      "roeTTM": 29.73,
      "roicTTM": 23.74,
      "psTTM": 6.6406,
      "pb": 5.8023,
      "evEbitdaTTM": 14.4442
    },
    {
      "date": "2026-09-05",
      "roeTTM": 29.73,
      "roicTTM": 23.74,
      "psTTM": 6.6169,
      "pb": 5.7817,
      "evEbitdaTTM": 14.3949
    },
    {
      "date": "2026-09-06",
      "roeTTM": 29.73,
      "roicTTM": 23.74,
      "psTTM": 6.6169,
      "pb": 5.7817,
      "evEbitdaTTM": 14.3949
    },
    {
      "date": "2026-09-07",
      "roeTTM": 29.73,
      "roicTTM": 23.74,
      "psTTM": 6.8839,
      "pb": 6.0149,
      "evEbitdaTTM": 14.9506
    }
  ],
  "AAPL": [
    {
      "date": "2026-09-02",
      "roeTTM": 137.17999999999998,
      "roicTTM": 70.25,
      "psTTM": 9.49,
      "pb": 41.2029,
      "evEbitdaTTM": 26.643
    },
    {
      "date": "2026-09-03",
      "roeTTM": 137.17999999999998,
      "roicTTM": 70.25,
      "psTTM": 9.49,
      "pb": 41.2029,
      "evEbitdaTTM": 26.643
    },
    {
      "date": "2026-09-04",
      "roeTTM": 137.17999999999998,
      "roicTTM": 70.25,
      "psTTM": 9.49,
      "pb": 41.2029,
      "evEbitdaTTM": 26.643
    },
    {
      "date": "2026-09-05",
      "roeTTM": 137.17999999999998,
      "roicTTM": 70.25,
      "psTTM": 10.3064,
      "pb": 44.7476,
      "evEbitdaTTM": 28.9122
    },
    {
      "date": "2026-09-06",
      "roeTTM": 137.17999999999998,
      "roicTTM": 70.25,
      "psTTM": 10.3064,
      "pb": 44.7476,
      "evEbitdaTTM": 28.9122
    },
    {
      "date": "2026-09-07",
      "roeTTM": 137.17999999999998,
      "roicTTM": 70.25,
      "psTTM": 10.0031,
      "pb": 43.431,
      "evEbitdaTTM": 28.0693
    }
  ],
  "TSLA": [
    {
      "date": "2026-09-02",
      "roeTTM": 4.569999999999999,
      "roicTTM": 4.14,
      "psTTM": 12.9579,
      "pb": 15.4584,
      "evEbitdaTTM": 120.6108
    },
    {
      "date": "2026-09-03",
      "roeTTM": 4.569999999999999,
      "roicTTM": 4.14,
      "psTTM": 12.9579,
      "pb": 15.4584,
      "evEbitdaTTM": 120.6108
    },
    {
      "date": "2026-09-04",
      "roeTTM": 4.569999999999999,
      "roicTTM": 4.14,
      "psTTM": 12.9579,
      "pb": 15.4584,
      "evEbitdaTTM": 120.6108
    },
    {
      "date": "2026-09-05",
      "roeTTM": 4.569999999999999,
      "roicTTM": 4.14,
      "psTTM": 12.9579,
      "pb": 15.4584,
      "evEbitdaTTM": 120.6108
    },
    {
      "date": "2026-09-06",
      "roeTTM": 4.569999999999999,
      "roicTTM": 4.14,
      "psTTM": 14.3455,
      "pb": 17.1138,
      "evEbitdaTTM": 133.8639
    },
    {
      "date": "2026-09-07",
      "roeTTM": 4.569999999999999,
      "roicTTM": 4.14,
      "psTTM": 14.3455,
      "pb": 17.1138,
      "evEbitdaTTM": 133.8639
    }
  ],
  "ORCL": [
    {
      "date": "2026-09-02",
      "roeTTM": 50.38,
      "roicTTM": 11.200000000000001,
      "psTTM": 6.7096,
      "pb": 10.4967,
      "evEbitdaTTM": 24.6991
    },
    {
      "date": "2026-09-03",
      "roeTTM": 50.38,
      "roicTTM": 11.200000000000001,
      "psTTM": 6.7096,
      "pb": 10.4967,
      "evEbitdaTTM": 24.6991
    },
    {
      "date": "2026-09-04",
      "roeTTM": 50.38,
      "roicTTM": 11.200000000000001,
      "psTTM": 6.7096,
      "pb": 10.4967,
      "evEbitdaTTM": 24.6991
    },
    {
      "date": "2026-09-05",
      "roeTTM": 50.38,
      "roicTTM": 11.200000000000001,
      "psTTM": 6.2328,
      "pb": 9.7508,
      "evEbitdaTTM": 23.2573
    },
    {
      "date": "2026-09-06",
      "roeTTM": 50.38,
      "roicTTM": 11.200000000000001,
      "psTTM": 6.2328,
      "pb": 9.7508,
      "evEbitdaTTM": 23.2573
    },
    {
      "date": "2026-09-07",
      "roeTTM": 50.38,
      "roicTTM": 11.200000000000001,
      "psTTM": 6.79,
      "pb": 10.6225,
      "evEbitdaTTM": 24.9422
    }
  ],
  "CRM": [
    {
      "date": "2026-09-02",
      "roeTTM": 14.95,
      "roicTTM": 11.25,
      "psTTM": 3.7258,
      "pb": 4.6611,
      "evEbitdaTTM": 20.5384
    },
    {
      "date": "2026-09-03",
      "roeTTM": 14.95,
      "roicTTM": 11.25,
      "psTTM": 3.7258,
      "pb": 4.6611,
      "evEbitdaTTM": 20.5384
    },
    {
      "date": "2026-09-04",
      "roeTTM": 14.95,
      "roicTTM": 11.25,
      "psTTM": 3.7258,
      "pb": 4.6611,
      "evEbitdaTTM": 20.5384
    },
    {
      "date": "2026-09-05",
      "roeTTM": 20.150000000000002,
      "roicTTM": 13.18,
      "psTTM": 4.9838,
      "pb": 5.7059,
      "evEbitdaTTM": 26.6196
    },
    {
      "date": "2026-09-06",
      "roeTTM": 20.150000000000002,
      "roicTTM": 13.18,
      "psTTM": 4.9838,
      "pb": 5.7059,
      "evEbitdaTTM": 26.6196
    },
    {
      "date": "2026-09-07",
      "roeTTM": 20.150000000000002,
      "roicTTM": 13.18,
      "psTTM": 4.8556,
      "pb": 5.5591,
      "evEbitdaTTM": 26.0196
    }
  ],
  "PLTR": [
    {
      "date": "2026-09-02",
      "roeTTM": 37.47,
      "roicTTM": 37.47,
      "psTTM": 70.1865,
      "pb": 44.2046,
      "evEbitdaTTM": 161.5073
    },
    {
      "date": "2026-09-03",
      "roeTTM": 37.47,
      "roicTTM": 37.47,
      "psTTM": 70.1865,
      "pb": 44.2046,
      "evEbitdaTTM": 161.5073
    },
    {
      "date": "2026-09-04",
      "roeTTM": 37.47,
      "roicTTM": 37.47,
      "psTTM": 70.1865,
      "pb": 44.2046,
      "evEbitdaTTM": 161.5073
    },
    {
      "date": "2026-09-05",
      "roeTTM": 37.47,
      "roicTTM": 37.47,
      "psTTM": 71.2542,
      "pb": 44.877,
      "evEbitdaTTM": 163.9757
    },
    {
      "date": "2026-09-06",
      "roeTTM": 37.47,
      "roicTTM": 37.47,
      "psTTM": 71.2542,
      "pb": 44.877,
      "evEbitdaTTM": 163.9757
    },
    {
      "date": "2026-09-07",
      "roeTTM": 37.47,
      "roicTTM": 37.47,
      "psTTM": 68.0532,
      "pb": 42.8609,
      "evEbitdaTTM": 156.575
    }
  ],
  "NVDA": [
    {
      "date": "2026-09-02",
      "roeTTM": 111.66,
      "roicTTM": 105.41,
      "psTTM": 21.3932,
      "pb": 27.7427,
      "evEbitdaTTM": 32.7357
    },
    {
      "date": "2026-09-03",
      "roeTTM": 111.66,
      "roicTTM": 105.41,
      "psTTM": 21.3932,
      "pb": 27.7427,
      "evEbitdaTTM": 32.7357
    },
    {
      "date": "2026-09-04",
      "roeTTM": 111.66,
      "roicTTM": 105.41,
      "psTTM": 21.3932,
      "pb": 27.7427,
      "evEbitdaTTM": 32.7357
    },
    {
      "date": "2026-09-05",
      "roeTTM": 110.11,
      "roicTTM": 101.59,
      "psTTM": 17.8509,
      "pb": 23.6186,
      "evEbitdaTTM": 26.9418
    },
    {
      "date": "2026-09-06",
      "roeTTM": 110.11,
      "roicTTM": 101.59,
      "psTTM": 17.8509,
      "pb": 23.6186,
      "evEbitdaTTM": 26.9418
    },
    {
      "date": "2026-09-07",
      "roeTTM": 110.11,
      "roicTTM": 101.59,
      "psTTM": 18.3242,
      "pb": 24.2448,
      "evEbitdaTTM": 27.6547
    }
  ],
  "AMD": [
    {
      "date": "2026-09-02",
      "roeTTM": 10.07,
      "roicTTM": 9.59,
      "psTTM": 19.2036,
      "pb": 11.7994,
      "evEbitdaTTM": 103.295
    },
    {
      "date": "2026-09-03",
      "roeTTM": 10.07,
      "roicTTM": 9.59,
      "psTTM": 19.2036,
      "pb": 11.7994,
      "evEbitdaTTM": 103.295
    },
    {
      "date": "2026-09-04",
      "roeTTM": 10.07,
      "roicTTM": 9.59,
      "psTTM": 19.2036,
      "pb": 11.7994,
      "evEbitdaTTM": 103.295
    },
    {
      "date": "2026-09-05",
      "roeTTM": 10.07,
      "roicTTM": 9.59,
      "psTTM": 18.0169,
      "pb": 11.0703,
      "evEbitdaTTM": 96.897
    },
    {
      "date": "2026-09-06",
      "roeTTM": 10.07,
      "roicTTM": 9.59,
      "psTTM": 18.0169,
      "pb": 11.0703,
      "evEbitdaTTM": 96.897
    },
    {
      "date": "2026-09-07",
      "roeTTM": 10.07,
      "roicTTM": 9.59,
      "psTTM": 18.8747,
      "pb": 11.5974,
      "evEbitdaTTM": 101.5221
    }
  ],
  "AVGO": [
    {
      "date": "2026-09-02",
      "roeTTM": 36.4,
      "roicTTM": 20.13,
      "psTTM": 26.5539,
      "pb": 22.8517,
      "evEbitdaTTM": 58.8775
    },
    {
      "date": "2026-09-03",
      "roeTTM": 36.4,
      "roicTTM": 20.13,
      "psTTM": 26.5539,
      "pb": 22.8517,
      "evEbitdaTTM": 58.8775
    },
    {
      "date": "2026-09-04",
      "roeTTM": 36.4,
      "roicTTM": 20.13,
      "psTTM": 26.5539,
      "pb": 22.8517,
      "evEbitdaTTM": 58.8775
    },
    {
      "date": "2026-09-05",
      "roeTTM": 43.91,
      "roicTTM": 25.34,
      "psTTM": 18.9157,
      "pb": 16.9071,
      "evEbitdaTTM": 38.4424
    },
    {
      "date": "2026-09-06",
      "roeTTM": 43.91,
      "roicTTM": 25.34,
      "psTTM": 18.9157,
      "pb": 16.9071,
      "evEbitdaTTM": 38.4424
    },
    {
      "date": "2026-09-07",
      "roeTTM": 43.91,
      "roicTTM": 25.34,
      "psTTM": 19.1093,
      "pb": 17.0801,
      "evEbitdaTTM": 38.8276
    }
  ],
  "QCOM": [
    {
      "date": "2026-09-02",
      "roeTTM": 37.330000000000005,
      "roicTTM": 23.24,
      "psTTM": 3.9264,
      "pb": 6.2561,
      "evEbitdaTTM": 15.6933
    },
    {
      "date": "2026-09-03",
      "roeTTM": 37.330000000000005,
      "roicTTM": 23.24,
      "psTTM": 3.9264,
      "pb": 6.2561,
      "evEbitdaTTM": 15.6933
    },
    {
      "date": "2026-09-04",
      "roeTTM": 37.330000000000005,
      "roicTTM": 23.24,
      "psTTM": 3.9264,
      "pb": 6.2561,
      "evEbitdaTTM": 15.6933
    },
    {
      "date": "2026-09-05",
      "roeTTM": 37.330000000000005,
      "roicTTM": 23.24,
      "psTTM": 4.0201,
      "pb": 6.4055,
      "evEbitdaTTM": 16.0462
    },
    {
      "date": "2026-09-06",
      "roeTTM": 37.330000000000005,
      "roicTTM": 23.24,
      "psTTM": 4.0201,
      "pb": 6.4055,
      "evEbitdaTTM": 16.0462
    },
    {
      "date": "2026-09-07",
      "roeTTM": 37.330000000000005,
      "roicTTM": 23.24,
      "psTTM": 4.0213,
      "pb": 6.4074,
      "evEbitdaTTM": 16.0507
    }
  ],
  "ARM": [
    {
      "date": "2026-09-02",
      "roeTTM": 13,
      "roicTTM": 12.959999999999999,
      "psTTM": 56.3144,
      "pb": 33.6451,
      "evEbitdaTTM": 251.8143
    },
    {
      "date": "2026-09-03",
      "roeTTM": 13,
      "roicTTM": 12.959999999999999,
      "psTTM": 56.3144,
      "pb": 33.6451,
      "evEbitdaTTM": 251.8143
    },
    {
      "date": "2026-09-04",
      "roeTTM": 13,
      "roicTTM": 12.959999999999999,
      "psTTM": 56.3144,
      "pb": 33.6451,
      "evEbitdaTTM": 251.8143
    },
    {
      "date": "2026-09-05",
      "roeTTM": 13,
      "roicTTM": 12.959999999999999,
      "psTTM": 56.3144,
      "pb": 33.6451,
      "evEbitdaTTM": 251.8143
    },
    {
      "date": "2026-09-06",
      "roeTTM": 13,
      "roicTTM": 12.959999999999999,
      "psTTM": 48.6483,
      "pb": 29.0649,
      "evEbitdaTTM": 217.1722
    },
    {
      "date": "2026-09-07",
      "roeTTM": 13,
      "roicTTM": 12.959999999999999,
      "psTTM": 50.2494,
      "pb": 30.0216,
      "evEbitdaTTM": 224.4076
    }
  ],
  "MRVL": [
    {
      "date": "2026-09-02",
      "roeTTM": 16.84,
      "roicTTM": 12.9,
      "psTTM": 22.3214,
      "pb": 10.6818,
      "evEbitdaTTM": 55.1022
    },
    {
      "date": "2026-09-03",
      "roeTTM": 16.84,
      "roicTTM": 12.9,
      "psTTM": 22.3214,
      "pb": 10.6818,
      "evEbitdaTTM": 55.1022
    },
    {
      "date": "2026-09-04",
      "roeTTM": 16.84,
      "roicTTM": 12.9,
      "psTTM": 22.3214,
      "pb": 10.6818,
      "evEbitdaTTM": 55.1022
    },
    {
      "date": "2026-09-05",
      "roeTTM": 16.220000000000002,
      "roicTTM": 12.57,
      "psTTM": 19.3775,
      "pb": 9.8817,
      "evEbitdaTTM": 49.3695
    },
    {
      "date": "2026-09-06",
      "roeTTM": 16.220000000000002,
      "roicTTM": 12.57,
      "psTTM": 19.3775,
      "pb": 9.8817,
      "evEbitdaTTM": 49.3695
    },
    {
      "date": "2026-09-07",
      "roeTTM": 16.220000000000002,
      "roicTTM": 12.57,
      "psTTM": 20.7434,
      "pb": 10.5782,
      "evEbitdaTTM": 52.83
    }
  ],
  "INTC": [
    {
      "date": "2026-09-02",
      "roeTTM": -10.76,
      "roicTTM": -7.42,
      "psTTM": 9.366,
      "pb": 6.1018,
      "evEbitdaTTM": 34.0858
    },
    {
      "date": "2026-09-03",
      "roeTTM": -10.76,
      "roicTTM": -7.42,
      "psTTM": 9.366,
      "pb": 6.1018,
      "evEbitdaTTM": 34.0858
    },
    {
      "date": "2026-09-04",
      "roeTTM": -10.76,
      "roicTTM": -7.42,
      "psTTM": 9.366,
      "pb": 6.1018,
      "evEbitdaTTM": 34.0858
    },
    {
      "date": "2026-09-05",
      "roeTTM": -10.76,
      "roicTTM": -7.42,
      "psTTM": 8.3244,
      "pb": 5.4232,
      "evEbitdaTTM": 30.5447
    },
    {
      "date": "2026-09-06",
      "roeTTM": -10.76,
      "roicTTM": -7.42,
      "psTTM": 8.3244,
      "pb": 5.4232,
      "evEbitdaTTM": 30.5447
    },
    {
      "date": "2026-09-07",
      "roeTTM": -10.76,
      "roicTTM": -7.42,
      "psTTM": 8.8263,
      "pb": 5.7502,
      "evEbitdaTTM": 32.2512
    }
  ],
  "TSM": [
    {
      "date": "2026-09-02",
      "roeTTM": 39.86,
      "roicTTM": 33.67,
      "psTTM": 14.1285,
      "pb": 9.8166,
      "evEbitdaTTM": 22.4182
    },
    {
      "date": "2026-09-03",
      "roeTTM": 39.86,
      "roicTTM": 33.67,
      "psTTM": 14.1285,
      "pb": 9.8166,
      "evEbitdaTTM": 22.4182
    },
    {
      "date": "2026-09-04",
      "roeTTM": 39.86,
      "roicTTM": 33.67,
      "psTTM": 14.1285,
      "pb": 9.8166,
      "evEbitdaTTM": 22.4182
    },
    {
      "date": "2026-09-05",
      "roeTTM": 39.86,
      "roicTTM": 33.67,
      "psTTM": 13.8384,
      "pb": 9.615,
      "evEbitdaTTM": 21.9416
    },
    {
      "date": "2026-09-06",
      "roeTTM": 39.86,
      "roicTTM": 33.67,
      "psTTM": 13.8384,
      "pb": 9.615,
      "evEbitdaTTM": 21.9416
    },
    {
      "date": "2026-09-07",
      "roeTTM": 39.86,
      "roicTTM": 33.67,
      "psTTM": 13.8674,
      "pb": 9.6352,
      "evEbitdaTTM": 21.9893
    }
  ],
  "ASML": [
    {
      "date": "2026-09-02",
      "roeTTM": 41.52,
      "roicTTM": 35.589999999999996,
      "psTTM": 16.9435,
      "pb": 23.0268,
      "evEbitdaTTM": 42.1939
    },
    {
      "date": "2026-09-03",
      "roeTTM": 41.52,
      "roicTTM": 35.589999999999996,
      "psTTM": 16.9435,
      "pb": 23.0268,
      "evEbitdaTTM": 42.1939
    },
    {
      "date": "2026-09-04",
      "roeTTM": 41.52,
      "roicTTM": 35.589999999999996,
      "psTTM": 16.9435,
      "pb": 23.0268,
      "evEbitdaTTM": 42.1939
    },
    {
      "date": "2026-09-05",
      "roeTTM": 41.52,
      "roicTTM": 35.589999999999996,
      "psTTM": 15.633,
      "pb": 21.2458,
      "evEbitdaTTM": 38.9143
    },
    {
      "date": "2026-09-06",
      "roeTTM": 41.52,
      "roicTTM": 35.589999999999996,
      "psTTM": 15.633,
      "pb": 21.2458,
      "evEbitdaTTM": 38.9143
    },
    {
      "date": "2026-09-07",
      "roeTTM": 41.52,
      "roicTTM": 35.589999999999996,
      "psTTM": 15.3908,
      "pb": 20.9166,
      "evEbitdaTTM": 38.3081
    }
  ],
  "AMAT": [
    {
      "date": "2026-09-02",
      "roeTTM": 39.78,
      "roicTTM": 30.56,
      "psTTM": 13.7628,
      "pb": 17.7508,
      "evEbitdaTTM": 48.311
    },
    {
      "date": "2026-09-03",
      "roeTTM": 39.78,
      "roicTTM": 30.56,
      "psTTM": 13.7628,
      "pb": 17.7508,
      "evEbitdaTTM": 48.311
    },
    {
      "date": "2026-09-04",
      "roeTTM": 39.78,
      "roicTTM": 30.56,
      "psTTM": 13.7628,
      "pb": 17.7508,
      "evEbitdaTTM": 48.311
    },
    {
      "date": "2026-09-05",
      "roeTTM": 40.44,
      "roicTTM": 31.47,
      "psTTM": 11.2839,
      "pb": 13.5784,
      "evEbitdaTTM": 35.94
    },
    {
      "date": "2026-09-06",
      "roeTTM": 40.44,
      "roicTTM": 31.47,
      "psTTM": 11.2839,
      "pb": 13.5784,
      "evEbitdaTTM": 35.94
    },
    {
      "date": "2026-09-07",
      "roeTTM": 40.44,
      "roicTTM": 31.47,
      "psTTM": 11.7021,
      "pb": 14.0817,
      "evEbitdaTTM": 37.2739
    }
  ],
  "LRCX": [
    {
      "date": "2026-09-02",
      "roeTTM": 66.97,
      "roicTTM": 48.57,
      "psTTM": 17.5644,
      "pb": 32.7216,
      "evEbitdaTTM": 47.0094
    },
    {
      "date": "2026-09-03",
      "roeTTM": 66.97,
      "roicTTM": 48.57,
      "psTTM": 17.5644,
      "pb": 32.7216,
      "evEbitdaTTM": 47.0094
    },
    {
      "date": "2026-09-04",
      "roeTTM": 66.97,
      "roicTTM": 48.57,
      "psTTM": 17.5644,
      "pb": 32.7216,
      "evEbitdaTTM": 47.0094
    },
    {
      "date": "2026-09-05",
      "roeTTM": 66.97,
      "roicTTM": 48.57,
      "psTTM": 15.529,
      "pb": 28.9298,
      "evEbitdaTTM": 41.5372
    },
    {
      "date": "2026-09-06",
      "roeTTM": 66.97,
      "roicTTM": 48.57,
      "psTTM": 15.529,
      "pb": 28.9298,
      "evEbitdaTTM": 41.5372
    },
    {
      "date": "2026-09-07",
      "roeTTM": 66.97,
      "roicTTM": 48.57,
      "psTTM": 16.5701,
      "pb": 30.8693,
      "evEbitdaTTM": 44.3363
    }
  ],
  "KLAC": [
    {
      "date": "2026-09-02",
      "roeTTM": 85.38,
      "roicTTM": 41.85,
      "psTTM": 20.1185,
      "pb": 43.0247,
      "evEbitdaTTM": 45.7336
    },
    {
      "date": "2026-09-03",
      "roeTTM": 85.38,
      "roicTTM": 41.85,
      "psTTM": 20.1185,
      "pb": 43.0247,
      "evEbitdaTTM": 45.7336
    },
    {
      "date": "2026-09-04",
      "roeTTM": 85.38,
      "roicTTM": 41.85,
      "psTTM": 20.1185,
      "pb": 43.0247,
      "evEbitdaTTM": 45.7336
    },
    {
      "date": "2026-09-05",
      "roeTTM": 85.38,
      "roicTTM": 41.85,
      "psTTM": 20.1185,
      "pb": 43.0247,
      "evEbitdaTTM": 45.7336
    },
    {
      "date": "2026-09-06",
      "roeTTM": 85.38,
      "roicTTM": 41.85,
      "psTTM": 16.5903,
      "pb": 35.4794,
      "evEbitdaTTM": 37.8358
    },
    {
      "date": "2026-09-07",
      "roeTTM": 85.38,
      "roicTTM": 41.85,
      "psTTM": 17.8575,
      "pb": 38.1893,
      "evEbitdaTTM": 40.6723
    }
  ],
  "MU": [
    {
      "date": "2026-09-02",
      "roeTTM": 70.55,
      "roicTTM": 61.480000000000004,
      "psTTM": 12.0374,
      "pb": 10.7886,
      "evEbitdaTTM": 15.6385
    },
    {
      "date": "2026-09-03",
      "roeTTM": 70.55,
      "roicTTM": 61.480000000000004,
      "psTTM": 12.0374,
      "pb": 10.7886,
      "evEbitdaTTM": 15.6385
    },
    {
      "date": "2026-09-04",
      "roeTTM": 70.55,
      "roicTTM": 61.480000000000004,
      "psTTM": 12.0374,
      "pb": 10.7886,
      "evEbitdaTTM": 15.6385
    },
    {
      "date": "2026-09-05",
      "roeTTM": 70.55,
      "roicTTM": 61.480000000000004,
      "psTTM": 11.8406,
      "pb": 10.6122,
      "evEbitdaTTM": 15.3783
    },
    {
      "date": "2026-09-06",
      "roeTTM": 70.55,
      "roicTTM": 61.480000000000004,
      "psTTM": 11.8406,
      "pb": 10.6122,
      "evEbitdaTTM": 15.3783
    },
    {
      "date": "2026-09-07",
      "roeTTM": 70.55,
      "roicTTM": 61.480000000000004,
      "psTTM": 12.7183,
      "pb": 11.3988,
      "evEbitdaTTM": 16.5391
    }
  ],
  "SNDK": [
    {
      "date": "2026-09-02",
      "roeTTM": 93.13,
      "roicTTM": 89.56,
      "psTTM": 11.1763,
      "pb": 14.3809,
      "evEbitdaTTM": 17.6691
    },
    {
      "date": "2026-09-03",
      "roeTTM": 93.13,
      "roicTTM": 89.56,
      "psTTM": 11.1763,
      "pb": 14.3809,
      "evEbitdaTTM": 17.6691
    },
    {
      "date": "2026-09-04",
      "roeTTM": 93.13,
      "roicTTM": 89.56,
      "psTTM": 11.1763,
      "pb": 14.3809,
      "evEbitdaTTM": 17.6691
    },
    {
      "date": "2026-09-05",
      "roeTTM": 93.13,
      "roicTTM": 89.56,
      "psTTM": 11.1763,
      "pb": 14.3809,
      "evEbitdaTTM": 17.6691
    },
    {
      "date": "2026-09-06",
      "roeTTM": 93.13,
      "roicTTM": 89.56,
      "psTTM": 11.2446,
      "pb": 14.4687,
      "evEbitdaTTM": 17.7794
    },
    {
      "date": "2026-09-07",
      "roeTTM": 93.13,
      "roicTTM": 89.56,
      "psTTM": 11.2446,
      "pb": 14.4687,
      "evEbitdaTTM": 17.7794
    }
  ],
  "WDC": [
    {
      "date": "2026-09-02",
      "roeTTM": 117.8,
      "roicTTM": 85.72999999999999,
      "psTTM": 12.1155,
      "pb": 17.658,
      "evEbitdaTTM": 36.4215
    },
    {
      "date": "2026-09-03",
      "roeTTM": 117.8,
      "roicTTM": 85.72999999999999,
      "psTTM": 12.1155,
      "pb": 17.658,
      "evEbitdaTTM": 36.4215
    },
    {
      "date": "2026-09-04",
      "roeTTM": 117.8,
      "roicTTM": 85.72999999999999,
      "psTTM": 12.1155,
      "pb": 17.658,
      "evEbitdaTTM": 36.4215
    },
    {
      "date": "2026-09-05",
      "roeTTM": 117.8,
      "roicTTM": 85.72999999999999,
      "psTTM": 11.9768,
      "pb": 17.4558,
      "evEbitdaTTM": 36.003
    },
    {
      "date": "2026-09-06",
      "roeTTM": 117.8,
      "roicTTM": 85.72999999999999,
      "psTTM": 11.9768,
      "pb": 17.4558,
      "evEbitdaTTM": 36.003
    },
    {
      "date": "2026-09-07",
      "roeTTM": 117.8,
      "roicTTM": 85.72999999999999,
      "psTTM": 12.4719,
      "pb": 18.1775,
      "evEbitdaTTM": 37.4966
    }
  ],
  "ANET": [
    {
      "date": "2026-09-02",
      "roeTTM": 30.78,
      "roicTTM": 30.78,
      "psTTM": 24.3635,
      "pb": 17.3548,
      "evEbitdaTTM": 54.8583
    },
    {
      "date": "2026-09-03",
      "roeTTM": 30.78,
      "roicTTM": 30.78,
      "psTTM": 24.3635,
      "pb": 17.3548,
      "evEbitdaTTM": 54.8583
    },
    {
      "date": "2026-09-04",
      "roeTTM": 30.78,
      "roicTTM": 30.78,
      "psTTM": 24.3635,
      "pb": 17.3548,
      "evEbitdaTTM": 54.8583
    },
    {
      "date": "2026-09-05",
      "roeTTM": 30.78,
      "roicTTM": 30.78,
      "psTTM": 22.2672,
      "pb": 15.8615,
      "evEbitdaTTM": 50.0956
    },
    {
      "date": "2026-09-06",
      "roeTTM": 30.78,
      "roicTTM": 30.78,
      "psTTM": 22.2672,
      "pb": 15.8615,
      "evEbitdaTTM": 50.0956
    },
    {
      "date": "2026-09-07",
      "roeTTM": 30.78,
      "roicTTM": 30.78,
      "psTTM": 23.1861,
      "pb": 16.5161,
      "evEbitdaTTM": 52.1834
    }
  ],
  "COHR": [
    {
      "date": "2026-09-02",
      "roeTTM": 8.37,
      "roicTTM": 6.25,
      "psTTM": 8.9938,
      "pb": 5.8714,
      "evEbitdaTTM": 68.8509
    },
    {
      "date": "2026-09-03",
      "roeTTM": 8.37,
      "roicTTM": 6.25,
      "psTTM": 8.9938,
      "pb": 5.8714,
      "evEbitdaTTM": 68.8509
    },
    {
      "date": "2026-09-04",
      "roeTTM": 8.37,
      "roicTTM": 6.25,
      "psTTM": 8.9938,
      "pb": 5.8714,
      "evEbitdaTTM": 68.8509
    },
    {
      "date": "2026-09-05",
      "roeTTM": 8.37,
      "roicTTM": 6.25,
      "psTTM": 7.3907,
      "pb": 4.8249,
      "evEbitdaTTM": 42.7245
    },
    {
      "date": "2026-09-06",
      "roeTTM": 8.37,
      "roicTTM": 6.25,
      "psTTM": 7.3907,
      "pb": 4.8249,
      "evEbitdaTTM": 42.7245
    },
    {
      "date": "2026-09-07",
      "roeTTM": 8.37,
      "roicTTM": 6.25,
      "psTTM": 7.7544,
      "pb": 5.0623,
      "evEbitdaTTM": 44.7478
    }
  ],
  "LITE": [
    {
      "date": "2026-09-02",
      "roeTTM": 30.680000000000003,
      "roicTTM": 9.71,
      "psTTM": 23.5541,
      "pb": 23.8757,
      "evEbitdaTTM": 221.3658
    },
    {
      "date": "2026-09-03",
      "roeTTM": 30.680000000000003,
      "roicTTM": 9.71,
      "psTTM": 23.5541,
      "pb": 23.8757,
      "evEbitdaTTM": 221.3658
    },
    {
      "date": "2026-09-04",
      "roeTTM": 30.680000000000003,
      "roicTTM": 9.71,
      "psTTM": 23.5541,
      "pb": 23.8757,
      "evEbitdaTTM": 221.3658
    },
    {
      "date": "2026-09-05",
      "roeTTM": -300.07,
      "roicTTM": -134.05,
      "psTTM": 25.2865,
      "pb": 16.4116,
      "evEbitdaTTM": 234.1906
    },
    {
      "date": "2026-09-06",
      "roeTTM": -300.07,
      "roicTTM": -134.05,
      "psTTM": 25.2865,
      "pb": 16.4116,
      "evEbitdaTTM": 234.1906
    },
    {
      "date": "2026-09-07",
      "roeTTM": -300.07,
      "roicTTM": -134.05,
      "psTTM": 26.2271,
      "pb": 17.022,
      "evEbitdaTTM": 242.9486
    }
  ],
  "GEV": [
    {
      "date": "2026-09-02",
      "roeTTM": 83.39,
      "roicTTM": 74.29,
      "psTTM": 6.7563,
      "pb": 23.3751,
      "evEbitdaTTM": 38.1368
    },
    {
      "date": "2026-09-03",
      "roeTTM": 83.39,
      "roicTTM": 74.29,
      "psTTM": 6.7563,
      "pb": 23.3751,
      "evEbitdaTTM": 38.1368
    },
    {
      "date": "2026-09-04",
      "roeTTM": 83.39,
      "roicTTM": 74.29,
      "psTTM": 6.7563,
      "pb": 23.3751,
      "evEbitdaTTM": 38.1368
    },
    {
      "date": "2026-09-05",
      "roeTTM": 83.39,
      "roicTTM": 74.29,
      "psTTM": 6.7563,
      "pb": 23.3751,
      "evEbitdaTTM": 38.1368
    },
    {
      "date": "2026-09-06",
      "roeTTM": 83.39,
      "roicTTM": 74.29,
      "psTTM": 6.0637,
      "pb": 20.9788,
      "evEbitdaTTM": 34.0773
    },
    {
      "date": "2026-09-07",
      "roeTTM": 83.39,
      "roicTTM": 74.29,
      "psTTM": 6.0637,
      "pb": 20.9788,
      "evEbitdaTTM": 34.0773
    }
  ],
  "CEG": [
    {
      "date": "2026-09-02",
      "roeTTM": 14.69,
      "roicTTM": 8.690000000000001,
      "psTTM": 3.1572,
      "pb": 3.0874,
      "evEbitdaTTM": 20.5746
    },
    {
      "date": "2026-09-03",
      "roeTTM": 14.69,
      "roicTTM": 8.690000000000001,
      "psTTM": 3.1572,
      "pb": 3.0874,
      "evEbitdaTTM": 20.5746
    },
    {
      "date": "2026-09-04",
      "roeTTM": 14.69,
      "roicTTM": 8.690000000000001,
      "psTTM": 3.1572,
      "pb": 3.0874,
      "evEbitdaTTM": 20.5746
    },
    {
      "date": "2026-09-05",
      "roeTTM": 14.69,
      "roicTTM": 8.690000000000001,
      "psTTM": 3.1572,
      "pb": 3.0874,
      "evEbitdaTTM": 20.5746
    },
    {
      "date": "2026-09-06",
      "roeTTM": 14.69,
      "roicTTM": 8.690000000000001,
      "psTTM": 3.2298,
      "pb": 3.1584,
      "evEbitdaTTM": 20.9553
    },
    {
      "date": "2026-09-07",
      "roeTTM": 14.69,
      "roicTTM": 8.690000000000001,
      "psTTM": 3.3874,
      "pb": 3.3125,
      "evEbitdaTTM": 21.7815
    }
  ],
  "VST": [
    {
      "date": "2026-09-02",
      "roeTTM": 43.25,
      "roicTTM": 8.94,
      "psTTM": 2.6972,
      "pb": 8.8365,
      "evEbitdaTTM": 12.5844
    },
    {
      "date": "2026-09-03",
      "roeTTM": 43.25,
      "roicTTM": 8.94,
      "psTTM": 2.6972,
      "pb": 8.8365,
      "evEbitdaTTM": 12.5844
    },
    {
      "date": "2026-09-04",
      "roeTTM": 43.25,
      "roicTTM": 8.94,
      "psTTM": 2.6972,
      "pb": 8.8365,
      "evEbitdaTTM": 12.5844
    },
    {
      "date": "2026-09-05",
      "roeTTM": 41.5,
      "roicTTM": 8.690000000000001,
      "psTTM": 2.5497,
      "pb": 8.8299,
      "evEbitdaTTM": 12.5166
    },
    {
      "date": "2026-09-06",
      "roeTTM": 41.5,
      "roicTTM": 8.690000000000001,
      "psTTM": 2.5497,
      "pb": 8.8299,
      "evEbitdaTTM": 12.5166
    },
    {
      "date": "2026-09-07",
      "roeTTM": 41.5,
      "roicTTM": 8.690000000000001,
      "psTTM": 2.6395,
      "pb": 9.1409,
      "evEbitdaTTM": 12.8282
    }
  ],
  "ETN": [
    {
      "date": "2026-09-02",
      "roeTTM": 19.59,
      "roicTTM": 10.9,
      "psTTM": 5.9037,
      "pb": 8.7518,
      "evEbitdaTTM": 30.612
    },
    {
      "date": "2026-09-03",
      "roeTTM": 19.59,
      "roicTTM": 10.9,
      "psTTM": 5.9037,
      "pb": 8.7518,
      "evEbitdaTTM": 30.612
    },
    {
      "date": "2026-09-04",
      "roeTTM": 19.59,
      "roicTTM": 10.9,
      "psTTM": 5.9037,
      "pb": 8.7518,
      "evEbitdaTTM": 30.612
    },
    {
      "date": "2026-09-05",
      "roeTTM": 19.59,
      "roicTTM": 10.9,
      "psTTM": 5.0244,
      "pb": 7.4483,
      "evEbitdaTTM": 26.5177
    },
    {
      "date": "2026-09-06",
      "roeTTM": 19.59,
      "roicTTM": 10.9,
      "psTTM": 5.0244,
      "pb": 7.4483,
      "evEbitdaTTM": 26.5177
    },
    {
      "date": "2026-09-07",
      "roeTTM": 19.59,
      "roicTTM": 10.9,
      "psTTM": 5.3147,
      "pb": 7.8786,
      "evEbitdaTTM": 27.8694
    }
  ],
  "PWR": [
    {
      "date": "2026-09-02",
      "roeTTM": 14.74,
      "roicTTM": 8.9,
      "psTTM": 3.095,
      "pb": 10.5668,
      "evEbitdaTTM": 40.99
    },
    {
      "date": "2026-09-03",
      "roeTTM": 14.74,
      "roicTTM": 8.9,
      "psTTM": 3.095,
      "pb": 10.5668,
      "evEbitdaTTM": 40.99
    },
    {
      "date": "2026-09-04",
      "roeTTM": 14.74,
      "roicTTM": 8.9,
      "psTTM": 3.095,
      "pb": 10.5668,
      "evEbitdaTTM": 40.99
    },
    {
      "date": "2026-09-05",
      "roeTTM": 14.74,
      "roicTTM": 8.9,
      "psTTM": 2.779,
      "pb": 9.4877,
      "evEbitdaTTM": 37.022
    },
    {
      "date": "2026-09-06",
      "roeTTM": 14.74,
      "roicTTM": 8.9,
      "psTTM": 2.779,
      "pb": 9.4877,
      "evEbitdaTTM": 37.022
    },
    {
      "date": "2026-09-07",
      "roeTTM": 14.74,
      "roicTTM": 8.9,
      "psTTM": 2.8529,
      "pb": 9.7402,
      "evEbitdaTTM": 37.9506
    }
  ],
  "HUBB": [
    {
      "date": "2026-09-02",
      "roeTTM": 23.72,
      "roicTTM": 13.13,
      "psTTM": 4.3187,
      "pb": 6.8708,
      "evEbitdaTTM": 21.3446
    },
    {
      "date": "2026-09-03",
      "roeTTM": 23.72,
      "roicTTM": 13.13,
      "psTTM": 4.3187,
      "pb": 6.8708,
      "evEbitdaTTM": 21.3446
    },
    {
      "date": "2026-09-04",
      "roeTTM": 23.72,
      "roicTTM": 13.13,
      "psTTM": 4.3187,
      "pb": 6.8708,
      "evEbitdaTTM": 21.3446
    },
    {
      "date": "2026-09-05",
      "roeTTM": 23.72,
      "roicTTM": 13.13,
      "psTTM": 3.9028,
      "pb": 6.2091,
      "evEbitdaTTM": 19.6112
    },
    {
      "date": "2026-09-06",
      "roeTTM": 23.72,
      "roicTTM": 13.13,
      "psTTM": 3.9028,
      "pb": 6.2091,
      "evEbitdaTTM": 19.6112
    },
    {
      "date": "2026-09-07",
      "roeTTM": 23.72,
      "roicTTM": 13.13,
      "psTTM": 3.9111,
      "pb": 6.2223,
      "evEbitdaTTM": 19.6457
    }
  ],
  "VRT": [
    {
      "date": "2026-09-02",
      "roeTTM": 42.11,
      "roicTTM": 24.610000000000003,
      "psTTM": 8.881,
      "pb": 21.4289,
      "evEbitdaTTM": 43.026
    },
    {
      "date": "2026-09-03",
      "roeTTM": 42.11,
      "roicTTM": 24.610000000000003,
      "psTTM": 8.881,
      "pb": 21.4289,
      "evEbitdaTTM": 43.026
    },
    {
      "date": "2026-09-04",
      "roeTTM": 42.11,
      "roicTTM": 24.610000000000003,
      "psTTM": 8.881,
      "pb": 21.4289,
      "evEbitdaTTM": 43.026
    },
    {
      "date": "2026-09-05",
      "roeTTM": 42.11,
      "roicTTM": 24.610000000000003,
      "psTTM": 8.881,
      "pb": 21.4289,
      "evEbitdaTTM": 43.026
    },
    {
      "date": "2026-09-06",
      "roeTTM": 42.11,
      "roicTTM": 24.610000000000003,
      "psTTM": 9.0157,
      "pb": 21.7539,
      "evEbitdaTTM": 43.6778
    },
    {
      "date": "2026-09-07",
      "roeTTM": 42.11,
      "roicTTM": 24.610000000000003,
      "psTTM": 9.4081,
      "pb": 22.7007,
      "evEbitdaTTM": 45.5764
    }
  ],
  "MOD": [
    {
      "date": "2026-09-02",
      "roeTTM": 12.620000000000001,
      "roicTTM": 8.57,
      "psTTM": 3.1897,
      "pb": 8.9529,
      "evEbitdaTTM": 36.4727
    },
    {
      "date": "2026-09-03",
      "roeTTM": 12.620000000000001,
      "roicTTM": 8.57,
      "psTTM": 3.1897,
      "pb": 8.9529,
      "evEbitdaTTM": 36.4727
    },
    {
      "date": "2026-09-04",
      "roeTTM": 12.620000000000001,
      "roicTTM": 8.57,
      "psTTM": 3.1897,
      "pb": 8.9529,
      "evEbitdaTTM": 36.4727
    },
    {
      "date": "2026-09-05",
      "roeTTM": 12.620000000000001,
      "roicTTM": 8.57,
      "psTTM": 2.8991,
      "pb": 8.1373,
      "evEbitdaTTM": 33.2786
    },
    {
      "date": "2026-09-06",
      "roeTTM": 12.620000000000001,
      "roicTTM": 8.57,
      "psTTM": 2.8991,
      "pb": 8.1373,
      "evEbitdaTTM": 33.2786
    },
    {
      "date": "2026-09-07",
      "roeTTM": 12.620000000000001,
      "roicTTM": 8.57,
      "psTTM": 3.0657,
      "pb": 8.605,
      "evEbitdaTTM": 35.1102
    }
  ],
  "STX": [
    {
      "date": "2026-09-02",
      "roeTTM": 212.44,
      "roicTTM": 50.519999999999996,
      "psTTM": 17.1237,
      "pb": 96.3652,
      "evEbitdaTTM": 49.9371
    },
    {
      "date": "2026-09-03",
      "roeTTM": 212.44,
      "roicTTM": 50.519999999999996,
      "psTTM": 17.1237,
      "pb": 96.3652,
      "evEbitdaTTM": 49.9371
    },
    {
      "date": "2026-09-04",
      "roeTTM": 212.44,
      "roicTTM": 50.519999999999996,
      "psTTM": 17.1237,
      "pb": 96.3652,
      "evEbitdaTTM": 49.9371
    },
    {
      "date": "2026-09-05",
      "roeTTM": 212.44,
      "roicTTM": 50.519999999999996,
      "psTTM": 17.1237,
      "pb": 96.3652,
      "evEbitdaTTM": 49.9371
    },
    {
      "date": "2026-09-06",
      "roeTTM": 212.44,
      "roicTTM": 50.519999999999996,
      "psTTM": 14.8422,
      "pb": 83.5259,
      "evEbitdaTTM": 43.3424
    },
    {
      "date": "2026-09-07",
      "roeTTM": 212.44,
      "roicTTM": 50.519999999999996,
      "psTTM": 15.7839,
      "pb": 88.8254,
      "evEbitdaTTM": 46.0644
    }
  ],
  "EME": [
    {
      "date": "2026-09-02",
      "roeTTM": 38.49,
      "roicTTM": 38.43,
      "psTTM": 1.9859,
      "pb": 9.0549,
      "evEbitdaTTM": 17.9754
    },
    {
      "date": "2026-09-03",
      "roeTTM": 38.49,
      "roicTTM": 38.43,
      "psTTM": 1.9859,
      "pb": 9.0549,
      "evEbitdaTTM": 17.9754
    },
    {
      "date": "2026-09-04",
      "roeTTM": 38.49,
      "roicTTM": 38.43,
      "psTTM": 1.9859,
      "pb": 9.0549,
      "evEbitdaTTM": 17.9754
    },
    {
      "date": "2026-09-05",
      "roeTTM": 38.49,
      "roicTTM": 38.43,
      "psTTM": 1.7641,
      "pb": 8.0432,
      "evEbitdaTTM": 15.9159
    },
    {
      "date": "2026-09-06",
      "roeTTM": 38.49,
      "roicTTM": 38.43,
      "psTTM": 1.7641,
      "pb": 8.0432,
      "evEbitdaTTM": 15.9159
    },
    {
      "date": "2026-09-07",
      "roeTTM": 38.49,
      "roicTTM": 38.43,
      "psTTM": 1.7887,
      "pb": 8.1556,
      "evEbitdaTTM": 16.1446
    }
  ],
  "FIX": [
    {
      "date": "2026-09-02",
      "roeTTM": 53.55,
      "roicTTM": 51.739999999999995,
      "psTTM": 5.4548,
      "pb": 19.037,
      "evEbitdaTTM": 31.0474
    },
    {
      "date": "2026-09-03",
      "roeTTM": 53.55,
      "roicTTM": 51.739999999999995,
      "psTTM": 5.4548,
      "pb": 19.037,
      "evEbitdaTTM": 31.0474
    },
    {
      "date": "2026-09-04",
      "roeTTM": 53.55,
      "roicTTM": 51.739999999999995,
      "psTTM": 5.4548,
      "pb": 19.037,
      "evEbitdaTTM": 31.0474
    },
    {
      "date": "2026-09-05",
      "roeTTM": 53.55,
      "roicTTM": 51.739999999999995,
      "psTTM": 5.0179,
      "pb": 17.5121,
      "evEbitdaTTM": 28.4852
    },
    {
      "date": "2026-09-06",
      "roeTTM": 53.55,
      "roicTTM": 51.739999999999995,
      "psTTM": 5.0179,
      "pb": 17.5121,
      "evEbitdaTTM": 28.4852
    },
    {
      "date": "2026-09-07",
      "roeTTM": 53.55,
      "roicTTM": 51.739999999999995,
      "psTTM": 5.0476,
      "pb": 17.6158,
      "evEbitdaTTM": 28.6594
    }
  ],
  "BE": [
    {
      "date": "2026-09-02",
      "roeTTM": 0.8200000000000001,
      "roicTTM": 0.21,
      "psTTM": 28.5474,
      "pb": 75.8717,
      "evEbitdaTTM": 598.6506
    },
    {
      "date": "2026-09-03",
      "roeTTM": 0.8200000000000001,
      "roicTTM": 0.21,
      "psTTM": 28.5474,
      "pb": 75.8717,
      "evEbitdaTTM": 598.6506
    },
    {
      "date": "2026-09-04",
      "roeTTM": 0.8200000000000001,
      "roicTTM": 0.21,
      "psTTM": 28.5474,
      "pb": 75.8717,
      "evEbitdaTTM": 598.6506
    },
    {
      "date": "2026-09-05",
      "roeTTM": 0.8200000000000001,
      "roicTTM": 0.21,
      "psTTM": 28.5474,
      "pb": 75.8717,
      "evEbitdaTTM": 598.6506
    },
    {
      "date": "2026-09-06",
      "roeTTM": 0.8200000000000001,
      "roicTTM": 0.21,
      "psTTM": 28.4326,
      "pb": 75.5665,
      "evEbitdaTTM": 596.2536
    },
    {
      "date": "2026-09-07",
      "roeTTM": 24.77,
      "roicTTM": 7.140000000000001,
      "psTTM": 23.9234,
      "pb": 46.2018,
      "evEbitdaTTM": 221.3491
    }
  ]
};
