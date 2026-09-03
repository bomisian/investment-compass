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
    }
  ],
  "SBGSY": [
    {
      "date": "2026-09-02",
      "roeTTM": 19.470000000000002,
      "roicTTM": 11.12,
      "psTTM": 4.1774,
      "pb": 7.1792,
      "evEbitdaTTM": 25.7216
    },
    {
      "date": "2026-09-03",
      "roeTTM": 19.470000000000002,
      "roicTTM": 11.12,
      "psTTM": 4.1774,
      "pb": 7.1792,
      "evEbitdaTTM": 25.7216
    },
    {
      "date": "2026-09-04",
      "roeTTM": 19.470000000000002,
      "roicTTM": 11.12,
      "psTTM": 4.1774,
      "pb": 7.1792,
      "evEbitdaTTM": 25.7216
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
    }
  ]
};
