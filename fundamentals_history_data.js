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
    },
    {
      "date": "2026-09-08",
      "roeTTM": 33.22,
      "roicTTM": 26.5,
      "psTTM": 11.1818,
      "pb": 8.3876,
      "evEbitdaTTM": 19.6107
    },
    {
      "date": "2026-09-09",
      "roeTTM": 33.22,
      "roicTTM": 26.5,
      "psTTM": 11.1818,
      "pb": 8.3876,
      "evEbitdaTTM": 19.6107
    },
    {
      "date": "2026-09-10",
      "roeTTM": 33.22,
      "roicTTM": 26.5,
      "psTTM": 11.1818,
      "pb": 8.3876,
      "evEbitdaTTM": 19.6107
    },
    {
      "date": "2026-09-11",
      "roeTTM": 33.22,
      "roicTTM": 26.5,
      "psTTM": 11.0265,
      "pb": 8.2711,
      "evEbitdaTTM": 19.3445
    },
    {
      "date": "2026-09-12",
      "roeTTM": 33.22,
      "roicTTM": 26.5,
      "psTTM": 11.0823,
      "pb": 8.3129,
      "evEbitdaTTM": 19.4402
    },
    {
      "date": "2026-09-13",
      "roeTTM": 33.22,
      "roicTTM": 26.5,
      "psTTM": 11.0823,
      "pb": 8.3129,
      "evEbitdaTTM": 19.4402
    },
    {
      "date": "2026-09-14",
      "roeTTM": 33.22,
      "roicTTM": 26.5,
      "psTTM": 11.0907,
      "pb": 8.3192,
      "evEbitdaTTM": 19.4546
    },
    {
      "date": "2026-09-15",
      "roeTTM": 33.22,
      "roicTTM": 26.5,
      "psTTM": 11.0907,
      "pb": 8.3192,
      "evEbitdaTTM": 19.4546
    },
    {
      "date": "2026-09-16",
      "roeTTM": 33.22,
      "roicTTM": 26.5,
      "psTTM": 11.1285,
      "pb": 8.3476,
      "evEbitdaTTM": 19.5194
    },
    {
      "date": "2026-09-17",
      "roeTTM": 33.22,
      "roicTTM": 26.5,
      "psTTM": 11.1811,
      "pb": 8.3871,
      "evEbitdaTTM": 19.6096
    },
    {
      "date": "2026-09-18",
      "roeTTM": 33.22,
      "roicTTM": 26.5,
      "psTTM": 11.1811,
      "pb": 8.3871,
      "evEbitdaTTM": 19.6096
    },
    {
      "date": "2026-09-19",
      "roeTTM": 33.22,
      "roicTTM": 26.5,
      "psTTM": 11.1811,
      "pb": 8.3871,
      "evEbitdaTTM": 19.6096
    },
    {
      "date": "2026-09-20",
      "roeTTM": 33.22,
      "roicTTM": 26.5,
      "psTTM": 11.086,
      "pb": 8.3157,
      "evEbitdaTTM": 19.4466
    },
    {
      "date": "2026-09-21",
      "roeTTM": 33.22,
      "roicTTM": 26.5,
      "psTTM": 11.0493,
      "pb": 8.2882,
      "evEbitdaTTM": 19.3836
    },
    {
      "date": "2026-09-22",
      "roeTTM": 33.22,
      "roicTTM": 26.5,
      "psTTM": 11.0493,
      "pb": 8.2882,
      "evEbitdaTTM": 19.3836
    },
    {
      "date": "2026-09-23",
      "roeTTM": 33.22,
      "roicTTM": 26.5,
      "psTTM": 11.039,
      "pb": 8.2805,
      "evEbitdaTTM": 19.366
    },
    {
      "date": "2026-09-24",
      "roeTTM": 33.22,
      "roicTTM": 26.5,
      "psTTM": 11.039,
      "pb": 8.2805,
      "evEbitdaTTM": 19.366
    },
    {
      "date": "2026-09-25",
      "roeTTM": 33.22,
      "roicTTM": 26.5,
      "psTTM": 11.3753,
      "pb": 8.5327,
      "evEbitdaTTM": 19.9425
    },
    {
      "date": "2026-09-26",
      "roeTTM": 33.22,
      "roicTTM": 26.5,
      "psTTM": 11.0412,
      "pb": 8.2821,
      "evEbitdaTTM": 19.3698
    },
    {
      "date": "2026-09-27",
      "roeTTM": 33.22,
      "roicTTM": 26.5,
      "psTTM": 11.4805,
      "pb": 8.6116,
      "evEbitdaTTM": 20.1228
    },
    {
      "date": "2026-09-28",
      "roeTTM": 33.22,
      "roicTTM": 26.5,
      "psTTM": 11.5503,
      "pb": 8.664,
      "evEbitdaTTM": 20.2425
    },
    {
      "date": "2026-09-29",
      "roeTTM": 33.22,
      "roicTTM": 26.5,
      "psTTM": 11.5503,
      "pb": 8.664,
      "evEbitdaTTM": 20.2425
    },
    {
      "date": "2026-09-30",
      "roeTTM": 33.22,
      "roicTTM": 26.5,
      "psTTM": 11.2863,
      "pb": 8.4659,
      "evEbitdaTTM": 19.7898
    },
    {
      "date": "2026-10-01",
      "roeTTM": 33.22,
      "roicTTM": 26.5,
      "psTTM": 11.2518,
      "pb": 8.4401,
      "evEbitdaTTM": 19.7308
    },
    {
      "date": "2026-10-02",
      "roeTTM": 33.22,
      "roicTTM": 26.5,
      "psTTM": 11.5222,
      "pb": 8.6429,
      "evEbitdaTTM": 20.1943
    },
    {
      "date": "2026-10-03",
      "roeTTM": 33.22,
      "roicTTM": 26.5,
      "psTTM": 11.5913,
      "pb": 8.6947,
      "evEbitdaTTM": 20.3126
    },
    {
      "date": "2026-10-04",
      "roeTTM": 33.22,
      "roicTTM": 26.5,
      "psTTM": 11.5624,
      "pb": 8.6731,
      "evEbitdaTTM": 20.2632
    },
    {
      "date": "2026-10-05",
      "roeTTM": 33.22,
      "roicTTM": 26.5,
      "psTTM": 11.5624,
      "pb": 8.6731,
      "evEbitdaTTM": 20.2632
    },
    {
      "date": "2026-10-06",
      "roeTTM": 33.22,
      "roicTTM": 26.5,
      "psTTM": 11.5807,
      "pb": 8.6868,
      "evEbitdaTTM": 20.2946
    },
    {
      "date": "2026-10-07",
      "roeTTM": 33.22,
      "roicTTM": 26.5,
      "psTTM": 11.888,
      "pb": 8.9173,
      "evEbitdaTTM": 20.8213
    },
    {
      "date": "2026-10-08",
      "roeTTM": 33.22,
      "roicTTM": 26.5,
      "psTTM": 11.8921,
      "pb": 8.9204,
      "evEbitdaTTM": 20.8283
    },
    {
      "date": "2026-10-09",
      "roeTTM": 33.22,
      "roicTTM": 26.5,
      "psTTM": 11.793,
      "pb": 8.846,
      "evEbitdaTTM": 20.6584
    },
    {
      "date": "2026-10-10",
      "roeTTM": 33.22,
      "roicTTM": 26.5,
      "psTTM": 11.793,
      "pb": 8.846,
      "evEbitdaTTM": 20.6584
    },
    {
      "date": "2026-10-11",
      "roeTTM": 33.22,
      "roicTTM": 26.5,
      "psTTM": 11.7958,
      "pb": 8.8481,
      "evEbitdaTTM": 20.6632
    },
    {
      "date": "2026-10-12",
      "roeTTM": 33.22,
      "roicTTM": 26.5,
      "psTTM": 11.9732,
      "pb": 8.9812,
      "evEbitdaTTM": 20.9674
    },
    {
      "date": "2026-10-13",
      "roeTTM": 33.22,
      "roicTTM": 26.5,
      "psTTM": 11.9732,
      "pb": 8.9812,
      "evEbitdaTTM": 20.9674
    },
    {
      "date": "2026-10-14",
      "roeTTM": 33.22,
      "roicTTM": 26.5,
      "psTTM": 12.0876,
      "pb": 9.067,
      "evEbitdaTTM": 21.1634
    },
    {
      "date": "2026-10-15",
      "roeTTM": 33.22,
      "roicTTM": 26.5,
      "psTTM": 12.0876,
      "pb": 9.067,
      "evEbitdaTTM": 21.1634
    },
    {
      "date": "2026-10-16",
      "roeTTM": 33.22,
      "roicTTM": 26.5,
      "psTTM": 12.16,
      "pb": 9.1213,
      "evEbitdaTTM": 21.2875
    },
    {
      "date": "2026-10-17",
      "roeTTM": 33.22,
      "roicTTM": 26.5,
      "psTTM": 11.995,
      "pb": 8.9976,
      "evEbitdaTTM": 21.0047
    },
    {
      "date": "2026-10-18",
      "roeTTM": 33.22,
      "roicTTM": 26.5,
      "psTTM": 11.995,
      "pb": 8.9976,
      "evEbitdaTTM": 21.0047
    },
    {
      "date": "2026-10-19",
      "roeTTM": 33.22,
      "roicTTM": 26.5,
      "psTTM": 11.8385,
      "pb": 8.8802,
      "evEbitdaTTM": 20.7365
    },
    {
      "date": "2026-10-20",
      "roeTTM": 33.22,
      "roicTTM": 26.5,
      "psTTM": 11.8385,
      "pb": 8.8802,
      "evEbitdaTTM": 20.7365
    },
    {
      "date": "2026-10-21",
      "roeTTM": 33.22,
      "roicTTM": 26.5,
      "psTTM": 11.8385,
      "pb": 8.8802,
      "evEbitdaTTM": 20.7365
    },
    {
      "date": "2026-10-22",
      "roeTTM": 33.22,
      "roicTTM": 26.5,
      "psTTM": 11.7803,
      "pb": 8.8366,
      "evEbitdaTTM": 20.6368
    },
    {
      "date": "2026-10-23",
      "roeTTM": 33.22,
      "roicTTM": 26.5,
      "psTTM": 11.8459,
      "pb": 8.8857,
      "evEbitdaTTM": 20.7491
    },
    {
      "date": "2026-10-24",
      "roeTTM": 33.22,
      "roicTTM": 26.5,
      "psTTM": 11.8518,
      "pb": 8.8902,
      "evEbitdaTTM": 20.7593
    },
    {
      "date": "2026-10-25",
      "roeTTM": 33.22,
      "roicTTM": 26.5,
      "psTTM": 11.5886,
      "pb": 8.6927,
      "evEbitdaTTM": 20.3081
    },
    {
      "date": "2026-10-26",
      "roeTTM": 33.22,
      "roicTTM": 26.5,
      "psTTM": 11.5886,
      "pb": 8.6927,
      "evEbitdaTTM": 20.3081
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
    },
    {
      "date": "2026-09-08",
      "roeTTM": 50.839999999999996,
      "roicTTM": 44.84,
      "psTTM": 9.2839,
      "pb": 6.4629,
      "evEbitdaTTM": 26.7031
    },
    {
      "date": "2026-09-09",
      "roeTTM": 50.839999999999996,
      "roicTTM": 44.84,
      "psTTM": 9.2839,
      "pb": 6.4629,
      "evEbitdaTTM": 26.7031
    },
    {
      "date": "2026-09-10",
      "roeTTM": 50.839999999999996,
      "roicTTM": 44.84,
      "psTTM": 9.2839,
      "pb": 6.4629,
      "evEbitdaTTM": 26.7031
    },
    {
      "date": "2026-09-11",
      "roeTTM": 50.839999999999996,
      "roicTTM": 44.84,
      "psTTM": 9.0754,
      "pb": 6.3178,
      "evEbitdaTTM": 26.1095
    },
    {
      "date": "2026-09-12",
      "roeTTM": 50.839999999999996,
      "roicTTM": 44.84,
      "psTTM": 9.3417,
      "pb": 6.5032,
      "evEbitdaTTM": 26.8679
    },
    {
      "date": "2026-09-13",
      "roeTTM": 50.839999999999996,
      "roicTTM": 44.84,
      "psTTM": 9.3417,
      "pb": 6.5032,
      "evEbitdaTTM": 26.8679
    },
    {
      "date": "2026-09-14",
      "roeTTM": 50.839999999999996,
      "roicTTM": 44.84,
      "psTTM": 9.285,
      "pb": 6.4637,
      "evEbitdaTTM": 26.7062
    },
    {
      "date": "2026-09-15",
      "roeTTM": 50.839999999999996,
      "roicTTM": 44.84,
      "psTTM": 9.285,
      "pb": 6.4637,
      "evEbitdaTTM": 26.7062
    },
    {
      "date": "2026-09-16",
      "roeTTM": 50.839999999999996,
      "roicTTM": 44.84,
      "psTTM": 9.285,
      "pb": 6.4637,
      "evEbitdaTTM": 26.7062
    },
    {
      "date": "2026-09-17",
      "roeTTM": 50.839999999999996,
      "roicTTM": 44.84,
      "psTTM": 9.4627,
      "pb": 6.5874,
      "evEbitdaTTM": 27.2123
    },
    {
      "date": "2026-09-18",
      "roeTTM": 50.839999999999996,
      "roicTTM": 44.84,
      "psTTM": 9.4627,
      "pb": 6.5874,
      "evEbitdaTTM": 27.2123
    },
    {
      "date": "2026-09-19",
      "roeTTM": 50.839999999999996,
      "roicTTM": 44.84,
      "psTTM": 9.4627,
      "pb": 6.5874,
      "evEbitdaTTM": 27.2123
    },
    {
      "date": "2026-09-20",
      "roeTTM": 50.839999999999996,
      "roicTTM": 44.84,
      "psTTM": 9.5272,
      "pb": 6.6323,
      "evEbitdaTTM": 27.3958
    },
    {
      "date": "2026-09-21",
      "roeTTM": 50.839999999999996,
      "roicTTM": 44.84,
      "psTTM": 9.5878,
      "pb": 6.6745,
      "evEbitdaTTM": 27.5684
    },
    {
      "date": "2026-09-22",
      "roeTTM": 50.839999999999996,
      "roicTTM": 44.84,
      "psTTM": 9.5878,
      "pb": 6.6745,
      "evEbitdaTTM": 27.5684
    },
    {
      "date": "2026-09-23",
      "roeTTM": 50.839999999999996,
      "roicTTM": 44.84,
      "psTTM": 9.7732,
      "pb": 6.8036,
      "evEbitdaTTM": 28.0963
    },
    {
      "date": "2026-09-24",
      "roeTTM": 50.839999999999996,
      "roicTTM": 44.84,
      "psTTM": 9.7732,
      "pb": 6.8036,
      "evEbitdaTTM": 28.0963
    },
    {
      "date": "2026-09-25",
      "roeTTM": 50.839999999999996,
      "roicTTM": 44.84,
      "psTTM": 9.29,
      "pb": 6.4672,
      "evEbitdaTTM": 26.7204
    },
    {
      "date": "2026-09-26",
      "roeTTM": 50.839999999999996,
      "roicTTM": 44.84,
      "psTTM": 9.3563,
      "pb": 6.5133,
      "evEbitdaTTM": 26.9092
    },
    {
      "date": "2026-09-27",
      "roeTTM": 50.839999999999996,
      "roicTTM": 44.84,
      "psTTM": 9.4397,
      "pb": 6.5714,
      "evEbitdaTTM": 27.1467
    },
    {
      "date": "2026-09-28",
      "roeTTM": 50.839999999999996,
      "roicTTM": 44.84,
      "psTTM": 9.4336,
      "pb": 6.5672,
      "evEbitdaTTM": 27.1295
    },
    {
      "date": "2026-09-29",
      "roeTTM": 50.839999999999996,
      "roicTTM": 44.84,
      "psTTM": 9.4336,
      "pb": 6.5672,
      "evEbitdaTTM": 27.1295
    },
    {
      "date": "2026-09-30",
      "roeTTM": 50.839999999999996,
      "roicTTM": 44.84,
      "psTTM": 9.4013,
      "pb": 6.5446,
      "evEbitdaTTM": 27.0373
    },
    {
      "date": "2026-10-01",
      "roeTTM": 50.839999999999996,
      "roicTTM": 44.84,
      "psTTM": 9.2992,
      "pb": 6.4736,
      "evEbitdaTTM": 26.7468
    },
    {
      "date": "2026-10-02",
      "roeTTM": 50.839999999999996,
      "roicTTM": 44.84,
      "psTTM": 9.5993,
      "pb": 6.6825,
      "evEbitdaTTM": 27.6012
    },
    {
      "date": "2026-10-03",
      "roeTTM": 50.839999999999996,
      "roicTTM": 44.84,
      "psTTM": 9.3076,
      "pb": 6.4794,
      "evEbitdaTTM": 26.7706
    },
    {
      "date": "2026-10-04",
      "roeTTM": 50.839999999999996,
      "roicTTM": 44.84,
      "psTTM": 9.4221,
      "pb": 6.5592,
      "evEbitdaTTM": 27.0967
    },
    {
      "date": "2026-10-05",
      "roeTTM": 50.839999999999996,
      "roicTTM": 44.84,
      "psTTM": 9.4221,
      "pb": 6.5592,
      "evEbitdaTTM": 27.0967
    },
    {
      "date": "2026-10-06",
      "roeTTM": 50.839999999999996,
      "roicTTM": 44.84,
      "psTTM": 9.4221,
      "pb": 6.5592,
      "evEbitdaTTM": 27.0967
    },
    {
      "date": "2026-10-07",
      "roeTTM": 50.839999999999996,
      "roicTTM": 44.84,
      "psTTM": 9.5148,
      "pb": 6.6237,
      "evEbitdaTTM": 27.3607
    },
    {
      "date": "2026-10-08",
      "roeTTM": 50.839999999999996,
      "roicTTM": 44.84,
      "psTTM": 9.5213,
      "pb": 6.6282,
      "evEbitdaTTM": 27.379
    },
    {
      "date": "2026-10-09",
      "roeTTM": 50.839999999999996,
      "roicTTM": 44.84,
      "psTTM": 9.5351,
      "pb": 6.6378,
      "evEbitdaTTM": 27.4184
    },
    {
      "date": "2026-10-10",
      "roeTTM": 50.839999999999996,
      "roicTTM": 44.84,
      "psTTM": 9.5351,
      "pb": 6.6378,
      "evEbitdaTTM": 27.4184
    },
    {
      "date": "2026-10-11",
      "roeTTM": 50.839999999999996,
      "roicTTM": 44.84,
      "psTTM": 9.6577,
      "pb": 6.7232,
      "evEbitdaTTM": 27.7675
    },
    {
      "date": "2026-10-12",
      "roeTTM": 50.839999999999996,
      "roicTTM": 44.84,
      "psTTM": 9.6459,
      "pb": 6.715,
      "evEbitdaTTM": 27.734
    },
    {
      "date": "2026-10-13",
      "roeTTM": 50.839999999999996,
      "roicTTM": 44.84,
      "psTTM": 9.6459,
      "pb": 6.715,
      "evEbitdaTTM": 27.734
    },
    {
      "date": "2026-10-14",
      "roeTTM": 50.839999999999996,
      "roicTTM": 44.84,
      "psTTM": 9.6678,
      "pb": 6.7302,
      "evEbitdaTTM": 27.7963
    },
    {
      "date": "2026-10-15",
      "roeTTM": 50.839999999999996,
      "roicTTM": 44.84,
      "psTTM": 9.6678,
      "pb": 6.7302,
      "evEbitdaTTM": 27.7963
    },
    {
      "date": "2026-10-16",
      "roeTTM": 50.839999999999996,
      "roicTTM": 44.84,
      "psTTM": 9.554,
      "pb": 6.651,
      "evEbitdaTTM": 27.4723
    },
    {
      "date": "2026-10-17",
      "roeTTM": 50.839999999999996,
      "roicTTM": 44.84,
      "psTTM": 9.6136,
      "pb": 6.6924,
      "evEbitdaTTM": 27.6418
    },
    {
      "date": "2026-10-18",
      "roeTTM": 50.839999999999996,
      "roicTTM": 44.84,
      "psTTM": 9.6136,
      "pb": 6.6924,
      "evEbitdaTTM": 27.6418
    },
    {
      "date": "2026-10-19",
      "roeTTM": 50.839999999999996,
      "roicTTM": 44.84,
      "psTTM": 9.3423,
      "pb": 6.5036,
      "evEbitdaTTM": 26.8694
    },
    {
      "date": "2026-10-20",
      "roeTTM": 50.839999999999996,
      "roicTTM": 44.84,
      "psTTM": 9.3423,
      "pb": 6.5036,
      "evEbitdaTTM": 26.8694
    },
    {
      "date": "2026-10-21",
      "roeTTM": 50.839999999999996,
      "roicTTM": 44.84,
      "psTTM": 9.3423,
      "pb": 6.5036,
      "evEbitdaTTM": 26.8694
    },
    {
      "date": "2026-10-22",
      "roeTTM": 50.839999999999996,
      "roicTTM": 44.84,
      "psTTM": 9.3593,
      "pb": 6.5154,
      "evEbitdaTTM": 26.9178
    },
    {
      "date": "2026-10-23",
      "roeTTM": 50.839999999999996,
      "roicTTM": 44.84,
      "psTTM": 9.1778,
      "pb": 6.3891,
      "evEbitdaTTM": 26.4011
    },
    {
      "date": "2026-10-24",
      "roeTTM": 50.839999999999996,
      "roicTTM": 44.84,
      "psTTM": 8.9402,
      "pb": 6.2237,
      "evEbitdaTTM": 25.7245
    },
    {
      "date": "2026-10-25",
      "roeTTM": 50.839999999999996,
      "roicTTM": 44.84,
      "psTTM": 8.8439,
      "pb": 6.1566,
      "evEbitdaTTM": 25.4504
    },
    {
      "date": "2026-10-26",
      "roeTTM": 50.839999999999996,
      "roicTTM": 44.84,
      "psTTM": 8.8439,
      "pb": 6.1566,
      "evEbitdaTTM": 25.4504
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
    },
    {
      "date": "2026-09-08",
      "roeTTM": 30.5,
      "roicTTM": 24.19,
      "psTTM": 3.5947,
      "pb": 5.0549,
      "evEbitdaTTM": 16.9643
    },
    {
      "date": "2026-09-09",
      "roeTTM": 30.5,
      "roicTTM": 24.19,
      "psTTM": 3.5947,
      "pb": 5.0549,
      "evEbitdaTTM": 16.9643
    },
    {
      "date": "2026-09-10",
      "roeTTM": 30.5,
      "roicTTM": 24.19,
      "psTTM": 3.5947,
      "pb": 5.0549,
      "evEbitdaTTM": 16.9643
    },
    {
      "date": "2026-09-11",
      "roeTTM": 30.5,
      "roicTTM": 24.19,
      "psTTM": 3.5077,
      "pb": 4.9325,
      "evEbitdaTTM": 16.5645
    },
    {
      "date": "2026-09-12",
      "roeTTM": 30.5,
      "roicTTM": 24.19,
      "psTTM": 3.5027,
      "pb": 4.9254,
      "evEbitdaTTM": 16.5416
    },
    {
      "date": "2026-09-13",
      "roeTTM": 30.5,
      "roicTTM": 24.19,
      "psTTM": 3.5027,
      "pb": 4.9254,
      "evEbitdaTTM": 16.5416
    },
    {
      "date": "2026-09-14",
      "roeTTM": 30.5,
      "roicTTM": 24.19,
      "psTTM": 3.5707,
      "pb": 5.021,
      "evEbitdaTTM": 16.8538
    },
    {
      "date": "2026-09-15",
      "roeTTM": 30.5,
      "roicTTM": 24.19,
      "psTTM": 3.5707,
      "pb": 5.021,
      "evEbitdaTTM": 16.8538
    },
    {
      "date": "2026-09-16",
      "roeTTM": 30.5,
      "roicTTM": 24.19,
      "psTTM": 3.5455,
      "pb": 4.9857,
      "evEbitdaTTM": 16.7382
    },
    {
      "date": "2026-09-17",
      "roeTTM": 30.5,
      "roicTTM": 24.19,
      "psTTM": 3.464,
      "pb": 4.8711,
      "evEbitdaTTM": 16.364
    },
    {
      "date": "2026-09-18",
      "roeTTM": 30.5,
      "roicTTM": 24.19,
      "psTTM": 3.4426,
      "pb": 4.841,
      "evEbitdaTTM": 16.2657
    },
    {
      "date": "2026-09-19",
      "roeTTM": 30.5,
      "roicTTM": 24.19,
      "psTTM": 3.4426,
      "pb": 4.841,
      "evEbitdaTTM": 16.2657
    },
    {
      "date": "2026-09-20",
      "roeTTM": 30.5,
      "roicTTM": 24.19,
      "psTTM": 3.4918,
      "pb": 4.9102,
      "evEbitdaTTM": 16.4917
    },
    {
      "date": "2026-09-21",
      "roeTTM": 30.5,
      "roicTTM": 24.19,
      "psTTM": 3.528,
      "pb": 4.961,
      "evEbitdaTTM": 16.6578
    },
    {
      "date": "2026-09-22",
      "roeTTM": 30.5,
      "roicTTM": 24.19,
      "psTTM": 3.528,
      "pb": 4.961,
      "evEbitdaTTM": 16.6578
    },
    {
      "date": "2026-09-23",
      "roeTTM": 30.5,
      "roicTTM": 24.19,
      "psTTM": 3.5536,
      "pb": 4.997,
      "evEbitdaTTM": 16.7753
    },
    {
      "date": "2026-09-24",
      "roeTTM": 30.5,
      "roicTTM": 24.19,
      "psTTM": 3.5536,
      "pb": 4.997,
      "evEbitdaTTM": 16.7753
    },
    {
      "date": "2026-09-25",
      "roeTTM": 30.5,
      "roicTTM": 24.19,
      "psTTM": 3.5457,
      "pb": 4.9858,
      "evEbitdaTTM": 16.7389
    },
    {
      "date": "2026-09-26",
      "roeTTM": 30.5,
      "roicTTM": 24.19,
      "psTTM": 3.428,
      "pb": 4.8204,
      "evEbitdaTTM": 16.1986
    },
    {
      "date": "2026-09-27",
      "roeTTM": 30.5,
      "roicTTM": 24.19,
      "psTTM": 3.4525,
      "pb": 4.8548,
      "evEbitdaTTM": 16.3109
    },
    {
      "date": "2026-09-28",
      "roeTTM": 30.5,
      "roicTTM": 24.19,
      "psTTM": 3.4718,
      "pb": 4.882,
      "evEbitdaTTM": 16.3998
    },
    {
      "date": "2026-09-29",
      "roeTTM": 30.5,
      "roicTTM": 24.19,
      "psTTM": 3.4718,
      "pb": 4.882,
      "evEbitdaTTM": 16.3998
    },
    {
      "date": "2026-09-30",
      "roeTTM": 30.5,
      "roicTTM": 24.19,
      "psTTM": 3.4168,
      "pb": 4.8046,
      "evEbitdaTTM": 16.1469
    },
    {
      "date": "2026-10-01",
      "roeTTM": 30.5,
      "roicTTM": 24.19,
      "psTTM": 3.4225,
      "pb": 4.8127,
      "evEbitdaTTM": 16.1734
    },
    {
      "date": "2026-10-02",
      "roeTTM": 30.5,
      "roicTTM": 24.19,
      "psTTM": 3.4357,
      "pb": 4.8313,
      "evEbitdaTTM": 16.2341
    },
    {
      "date": "2026-10-03",
      "roeTTM": 30.5,
      "roicTTM": 24.19,
      "psTTM": 3.4639,
      "pb": 4.8709,
      "evEbitdaTTM": 16.3634
    },
    {
      "date": "2026-10-04",
      "roeTTM": 30.5,
      "roicTTM": 24.19,
      "psTTM": 3.5119,
      "pb": 4.9384,
      "evEbitdaTTM": 16.584
    },
    {
      "date": "2026-10-05",
      "roeTTM": 30.5,
      "roicTTM": 24.19,
      "psTTM": 3.5119,
      "pb": 4.9384,
      "evEbitdaTTM": 16.584
    },
    {
      "date": "2026-10-06",
      "roeTTM": 30.5,
      "roicTTM": 24.19,
      "psTTM": 3.4975,
      "pb": 4.9182,
      "evEbitdaTTM": 16.5179
    },
    {
      "date": "2026-10-07",
      "roeTTM": 30.5,
      "roicTTM": 24.19,
      "psTTM": 3.4909,
      "pb": 4.9089,
      "evEbitdaTTM": 16.4876
    },
    {
      "date": "2026-10-08",
      "roeTTM": 30.5,
      "roicTTM": 24.19,
      "psTTM": 3.4959,
      "pb": 4.9158,
      "evEbitdaTTM": 16.5103
    },
    {
      "date": "2026-10-09",
      "roeTTM": 30.5,
      "roicTTM": 24.19,
      "psTTM": 3.5258,
      "pb": 4.9579,
      "evEbitdaTTM": 16.6476
    },
    {
      "date": "2026-10-10",
      "roeTTM": 30.5,
      "roicTTM": 24.19,
      "psTTM": 3.5258,
      "pb": 4.9579,
      "evEbitdaTTM": 16.6476
    },
    {
      "date": "2026-10-11",
      "roeTTM": 30.5,
      "roicTTM": 24.19,
      "psTTM": 3.5329,
      "pb": 4.9679,
      "evEbitdaTTM": 16.6801
    },
    {
      "date": "2026-10-12",
      "roeTTM": 30.5,
      "roicTTM": 24.19,
      "psTTM": 3.6493,
      "pb": 5.1315,
      "evEbitdaTTM": 17.2146
    },
    {
      "date": "2026-10-13",
      "roeTTM": 30.5,
      "roicTTM": 24.19,
      "psTTM": 3.6493,
      "pb": 5.1315,
      "evEbitdaTTM": 17.2146
    },
    {
      "date": "2026-10-14",
      "roeTTM": 30.5,
      "roicTTM": 24.19,
      "psTTM": 3.6493,
      "pb": 5.1315,
      "evEbitdaTTM": 17.2146
    },
    {
      "date": "2026-10-15",
      "roeTTM": 30.5,
      "roicTTM": 24.19,
      "psTTM": 3.6493,
      "pb": 5.1315,
      "evEbitdaTTM": 17.2146
    },
    {
      "date": "2026-10-16",
      "roeTTM": 30.5,
      "roicTTM": 24.19,
      "psTTM": 3.606,
      "pb": 5.0707,
      "evEbitdaTTM": 17.016
    },
    {
      "date": "2026-10-17",
      "roeTTM": 30.5,
      "roicTTM": 24.19,
      "psTTM": 3.5331,
      "pb": 4.9683,
      "evEbitdaTTM": 16.6814
    },
    {
      "date": "2026-10-18",
      "roeTTM": 30.5,
      "roicTTM": 24.19,
      "psTTM": 3.5331,
      "pb": 4.9683,
      "evEbitdaTTM": 16.6814
    },
    {
      "date": "2026-10-19",
      "roeTTM": 30.5,
      "roicTTM": 24.19,
      "psTTM": 3.4764,
      "pb": 4.8885,
      "evEbitdaTTM": 16.4209
    },
    {
      "date": "2026-10-20",
      "roeTTM": 30.5,
      "roicTTM": 24.19,
      "psTTM": 3.4764,
      "pb": 4.8885,
      "evEbitdaTTM": 16.4209
    },
    {
      "date": "2026-10-21",
      "roeTTM": 30.5,
      "roicTTM": 24.19,
      "psTTM": 3.4764,
      "pb": 4.8885,
      "evEbitdaTTM": 16.4209
    },
    {
      "date": "2026-10-22",
      "roeTTM": 30.5,
      "roicTTM": 24.19,
      "psTTM": 3.6495,
      "pb": 5.1319,
      "evEbitdaTTM": 17.2159
    },
    {
      "date": "2026-10-23",
      "roeTTM": 30.5,
      "roicTTM": 24.19,
      "psTTM": 3.627,
      "pb": 5.1002,
      "evEbitdaTTM": 17.1124
    },
    {
      "date": "2026-10-24",
      "roeTTM": 30.5,
      "roicTTM": 24.19,
      "psTTM": 3.6484,
      "pb": 5.1304,
      "evEbitdaTTM": 17.2108
    },
    {
      "date": "2026-10-25",
      "roeTTM": 30.5,
      "roicTTM": 24.19,
      "psTTM": 3.446,
      "pb": 4.8457,
      "evEbitdaTTM": 16.2811
    },
    {
      "date": "2026-10-26",
      "roeTTM": 30.5,
      "roicTTM": 24.19,
      "psTTM": 3.446,
      "pb": 4.8457,
      "evEbitdaTTM": 16.2811
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
    },
    {
      "date": "2026-09-08",
      "roeTTM": 29.73,
      "roicTTM": 23.74,
      "psTTM": 6.8839,
      "pb": 6.0149,
      "evEbitdaTTM": 14.9506
    },
    {
      "date": "2026-09-09",
      "roeTTM": 29.73,
      "roicTTM": 23.74,
      "psTTM": 6.8839,
      "pb": 6.0149,
      "evEbitdaTTM": 14.9506
    },
    {
      "date": "2026-09-10",
      "roeTTM": 29.73,
      "roicTTM": 23.74,
      "psTTM": 6.8839,
      "pb": 6.0149,
      "evEbitdaTTM": 14.9506
    },
    {
      "date": "2026-09-11",
      "roeTTM": 29.73,
      "roicTTM": 23.74,
      "psTTM": 6.8839,
      "pb": 6.0149,
      "evEbitdaTTM": 14.9506
    },
    {
      "date": "2026-09-12",
      "roeTTM": 29.73,
      "roicTTM": 23.74,
      "psTTM": 7.192,
      "pb": 6.2842,
      "evEbitdaTTM": 15.5921
    },
    {
      "date": "2026-09-13",
      "roeTTM": 29.73,
      "roicTTM": 23.74,
      "psTTM": 7.192,
      "pb": 6.2842,
      "evEbitdaTTM": 15.5921
    },
    {
      "date": "2026-09-14",
      "roeTTM": 29.73,
      "roicTTM": 23.74,
      "psTTM": 7.2328,
      "pb": 6.3198,
      "evEbitdaTTM": 15.6769
    },
    {
      "date": "2026-09-15",
      "roeTTM": 29.73,
      "roicTTM": 23.74,
      "psTTM": 7.2328,
      "pb": 6.3198,
      "evEbitdaTTM": 15.6769
    },
    {
      "date": "2026-09-16",
      "roeTTM": 29.73,
      "roicTTM": 23.74,
      "psTTM": 7.2328,
      "pb": 6.3198,
      "evEbitdaTTM": 15.6769
    },
    {
      "date": "2026-09-17",
      "roeTTM": 29.73,
      "roicTTM": 23.74,
      "psTTM": 7.2328,
      "pb": 6.3198,
      "evEbitdaTTM": 15.6769
    },
    {
      "date": "2026-09-18",
      "roeTTM": 29.73,
      "roicTTM": 23.74,
      "psTTM": 7.2328,
      "pb": 6.3198,
      "evEbitdaTTM": 15.6769
    },
    {
      "date": "2026-09-19",
      "roeTTM": 29.73,
      "roicTTM": 23.74,
      "psTTM": 7.2328,
      "pb": 6.3198,
      "evEbitdaTTM": 15.6769
    },
    {
      "date": "2026-09-20",
      "roeTTM": 29.73,
      "roicTTM": 23.74,
      "psTTM": 7.5065,
      "pb": 6.559,
      "evEbitdaTTM": 16.2466
    },
    {
      "date": "2026-09-21",
      "roeTTM": 29.73,
      "roicTTM": 23.74,
      "psTTM": 7.4306,
      "pb": 6.4926,
      "evEbitdaTTM": 16.0885
    },
    {
      "date": "2026-09-22",
      "roeTTM": 29.73,
      "roicTTM": 23.74,
      "psTTM": 7.4306,
      "pb": 6.4926,
      "evEbitdaTTM": 16.0885
    },
    {
      "date": "2026-09-23",
      "roeTTM": 29.73,
      "roicTTM": 23.74,
      "psTTM": 7.4247,
      "pb": 6.4875,
      "evEbitdaTTM": 16.0763
    },
    {
      "date": "2026-09-24",
      "roeTTM": 29.73,
      "roicTTM": 23.74,
      "psTTM": 7.4247,
      "pb": 6.4875,
      "evEbitdaTTM": 16.0763
    },
    {
      "date": "2026-09-25",
      "roeTTM": 29.73,
      "roicTTM": 23.74,
      "psTTM": 8.2213,
      "pb": 7.1835,
      "evEbitdaTTM": 17.7344
    },
    {
      "date": "2026-09-26",
      "roeTTM": 29.73,
      "roicTTM": 23.74,
      "psTTM": 8.305,
      "pb": 7.2567,
      "evEbitdaTTM": 17.9087
    },
    {
      "date": "2026-09-27",
      "roeTTM": 29.73,
      "roicTTM": 23.74,
      "psTTM": 8.6788,
      "pb": 7.5833,
      "evEbitdaTTM": 18.6868
    },
    {
      "date": "2026-09-28",
      "roeTTM": 29.73,
      "roicTTM": 23.74,
      "psTTM": 8.3894,
      "pb": 7.3304,
      "evEbitdaTTM": 18.0844
    },
    {
      "date": "2026-09-29",
      "roeTTM": 29.73,
      "roicTTM": 23.74,
      "psTTM": 8.3894,
      "pb": 7.3304,
      "evEbitdaTTM": 18.0844
    },
    {
      "date": "2026-09-30",
      "roeTTM": 29.73,
      "roicTTM": 23.74,
      "psTTM": 8.3894,
      "pb": 7.3304,
      "evEbitdaTTM": 18.0844
    },
    {
      "date": "2026-10-01",
      "roeTTM": 29.73,
      "roicTTM": 23.74,
      "psTTM": 7.9872,
      "pb": 6.9789,
      "evEbitdaTTM": 17.2471
    },
    {
      "date": "2026-10-02",
      "roeTTM": 29.73,
      "roicTTM": 23.74,
      "psTTM": 8.2458,
      "pb": 7.2049,
      "evEbitdaTTM": 17.7854
    },
    {
      "date": "2026-10-03",
      "roeTTM": 29.73,
      "roicTTM": 23.74,
      "psTTM": 8.0939,
      "pb": 7.0722,
      "evEbitdaTTM": 17.4692
    },
    {
      "date": "2026-10-04",
      "roeTTM": 29.73,
      "roicTTM": 23.74,
      "psTTM": 8.1022,
      "pb": 7.0795,
      "evEbitdaTTM": 17.4866
    },
    {
      "date": "2026-10-05",
      "roeTTM": 29.73,
      "roicTTM": 23.74,
      "psTTM": 8.1022,
      "pb": 7.0795,
      "evEbitdaTTM": 17.4866
    },
    {
      "date": "2026-10-06",
      "roeTTM": 29.73,
      "roicTTM": 23.74,
      "psTTM": 8.1262,
      "pb": 7.1005,
      "evEbitdaTTM": 17.5366
    },
    {
      "date": "2026-10-07",
      "roeTTM": 29.73,
      "roicTTM": 23.74,
      "psTTM": 8.1262,
      "pb": 7.1005,
      "evEbitdaTTM": 17.5366
    },
    {
      "date": "2026-10-08",
      "roeTTM": 29.73,
      "roicTTM": 23.74,
      "psTTM": 8.2805,
      "pb": 7.2352,
      "evEbitdaTTM": 17.8576
    },
    {
      "date": "2026-10-09",
      "roeTTM": 29.73,
      "roicTTM": 23.74,
      "psTTM": 8.2468,
      "pb": 7.2058,
      "evEbitdaTTM": 17.7875
    },
    {
      "date": "2026-10-10",
      "roeTTM": 29.73,
      "roicTTM": 23.74,
      "psTTM": 8.2468,
      "pb": 7.2058,
      "evEbitdaTTM": 17.7875
    },
    {
      "date": "2026-10-11",
      "roeTTM": 29.73,
      "roicTTM": 23.74,
      "psTTM": 8.046,
      "pb": 7.0303,
      "evEbitdaTTM": 17.3695
    },
    {
      "date": "2026-10-12",
      "roeTTM": 29.73,
      "roicTTM": 23.74,
      "psTTM": 8.0212,
      "pb": 7.0087,
      "evEbitdaTTM": 17.318
    },
    {
      "date": "2026-10-13",
      "roeTTM": 29.73,
      "roicTTM": 23.74,
      "psTTM": 8.0212,
      "pb": 7.0087,
      "evEbitdaTTM": 17.318
    },
    {
      "date": "2026-10-14",
      "roeTTM": 29.73,
      "roicTTM": 23.74,
      "psTTM": 8.0212,
      "pb": 7.0087,
      "evEbitdaTTM": 17.318
    },
    {
      "date": "2026-10-15",
      "roeTTM": 29.73,
      "roicTTM": 23.74,
      "psTTM": 8.0212,
      "pb": 7.0087,
      "evEbitdaTTM": 17.318
    },
    {
      "date": "2026-10-16",
      "roeTTM": 29.73,
      "roicTTM": 23.74,
      "psTTM": 8.5104,
      "pb": 7.4361,
      "evEbitdaTTM": 18.3362
    },
    {
      "date": "2026-10-17",
      "roeTTM": 29.73,
      "roicTTM": 23.74,
      "psTTM": 8.2318,
      "pb": 7.1927,
      "evEbitdaTTM": 17.7563
    },
    {
      "date": "2026-10-18",
      "roeTTM": 29.73,
      "roicTTM": 23.74,
      "psTTM": 8.2227,
      "pb": 7.1847,
      "evEbitdaTTM": 17.7373
    },
    {
      "date": "2026-10-19",
      "roeTTM": 29.73,
      "roicTTM": 23.74,
      "psTTM": 7.9169,
      "pb": 6.9176,
      "evEbitdaTTM": 17.1009
    },
    {
      "date": "2026-10-20",
      "roeTTM": 29.73,
      "roicTTM": 23.74,
      "psTTM": 7.9169,
      "pb": 6.9176,
      "evEbitdaTTM": 17.1009
    },
    {
      "date": "2026-10-21",
      "roeTTM": 29.73,
      "roicTTM": 23.74,
      "psTTM": 7.9169,
      "pb": 6.9176,
      "evEbitdaTTM": 17.1009
    },
    {
      "date": "2026-10-22",
      "roeTTM": 29.73,
      "roicTTM": 23.74,
      "psTTM": 7.8735,
      "pb": 6.8797,
      "evEbitdaTTM": 17.0106
    },
    {
      "date": "2026-10-23",
      "roeTTM": 29.73,
      "roicTTM": 23.74,
      "psTTM": 7.7486,
      "pb": 6.7705,
      "evEbitdaTTM": 16.7506
    },
    {
      "date": "2026-10-24",
      "roeTTM": 29.73,
      "roicTTM": 23.74,
      "psTTM": 7.7851,
      "pb": 6.8024,
      "evEbitdaTTM": 16.8266
    },
    {
      "date": "2026-10-25",
      "roeTTM": 30.270000000000003,
      "roicTTM": 23.56,
      "psTTM": 6.8399,
      "pb": 6.067,
      "evEbitdaTTM": 16.5125
    },
    {
      "date": "2026-10-26",
      "roeTTM": 30.270000000000003,
      "roicTTM": 23.56,
      "psTTM": 6.8399,
      "pb": 6.067,
      "evEbitdaTTM": 16.5125
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
    },
    {
      "date": "2026-09-08",
      "roeTTM": 137.17999999999998,
      "roicTTM": 70.25,
      "psTTM": 10.0031,
      "pb": 43.431,
      "evEbitdaTTM": 28.0693
    },
    {
      "date": "2026-09-09",
      "roeTTM": 137.17999999999998,
      "roicTTM": 70.25,
      "psTTM": 10.0031,
      "pb": 43.431,
      "evEbitdaTTM": 28.0693
    },
    {
      "date": "2026-09-10",
      "roeTTM": 137.17999999999998,
      "roicTTM": 70.25,
      "psTTM": 10.0031,
      "pb": 43.431,
      "evEbitdaTTM": 28.0693
    },
    {
      "date": "2026-09-11",
      "roeTTM": 137.17999999999998,
      "roicTTM": 70.25,
      "psTTM": 9.7709,
      "pb": 42.4225,
      "evEbitdaTTM": 27.4237
    },
    {
      "date": "2026-09-12",
      "roeTTM": 137.17999999999998,
      "roicTTM": 70.25,
      "psTTM": 10.469,
      "pb": 45.4534,
      "evEbitdaTTM": 29.364
    },
    {
      "date": "2026-09-13",
      "roeTTM": 137.17999999999998,
      "roicTTM": 70.25,
      "psTTM": 10.469,
      "pb": 45.4534,
      "evEbitdaTTM": 29.364
    },
    {
      "date": "2026-09-14",
      "roeTTM": 137.17999999999998,
      "roicTTM": 70.25,
      "psTTM": 10.3877,
      "pb": 45.1005,
      "evEbitdaTTM": 29.1381
    },
    {
      "date": "2026-09-15",
      "roeTTM": 137.17999999999998,
      "roicTTM": 70.25,
      "psTTM": 10.3877,
      "pb": 45.1005,
      "evEbitdaTTM": 29.1381
    },
    {
      "date": "2026-09-16",
      "roeTTM": 137.17999999999998,
      "roicTTM": 70.25,
      "psTTM": 10.3877,
      "pb": 45.1005,
      "evEbitdaTTM": 29.1381
    },
    {
      "date": "2026-09-17",
      "roeTTM": 137.17999999999998,
      "roicTTM": 70.25,
      "psTTM": 10.3586,
      "pb": 44.9743,
      "evEbitdaTTM": 29.0573
    },
    {
      "date": "2026-09-18",
      "roeTTM": 137.17999999999998,
      "roicTTM": 70.25,
      "psTTM": 10.3586,
      "pb": 44.9743,
      "evEbitdaTTM": 29.0573
    },
    {
      "date": "2026-09-19",
      "roeTTM": 137.17999999999998,
      "roicTTM": 70.25,
      "psTTM": 10.3586,
      "pb": 44.9743,
      "evEbitdaTTM": 29.0573
    },
    {
      "date": "2026-09-20",
      "roeTTM": 137.17999999999998,
      "roicTTM": 70.25,
      "psTTM": 10.3921,
      "pb": 45.1195,
      "evEbitdaTTM": 29.1503
    },
    {
      "date": "2026-09-21",
      "roeTTM": 137.17999999999998,
      "roicTTM": 70.25,
      "psTTM": 10.5084,
      "pb": 45.6245,
      "evEbitdaTTM": 29.4735
    },
    {
      "date": "2026-09-22",
      "roeTTM": 137.17999999999998,
      "roicTTM": 70.25,
      "psTTM": 10.5084,
      "pb": 45.6245,
      "evEbitdaTTM": 29.4735
    },
    {
      "date": "2026-09-23",
      "roeTTM": 137.17999999999998,
      "roicTTM": 70.25,
      "psTTM": 10.5806,
      "pb": 45.938,
      "evEbitdaTTM": 29.6742
    },
    {
      "date": "2026-09-24",
      "roeTTM": 137.17999999999998,
      "roicTTM": 70.25,
      "psTTM": 10.5806,
      "pb": 45.938,
      "evEbitdaTTM": 29.6742
    },
    {
      "date": "2026-09-25",
      "roeTTM": 137.17999999999998,
      "roicTTM": 70.25,
      "psTTM": 10.5473,
      "pb": 45.7934,
      "evEbitdaTTM": 29.5817
    },
    {
      "date": "2026-09-26",
      "roeTTM": 137.17999999999998,
      "roicTTM": 70.25,
      "psTTM": 10.5349,
      "pb": 45.7398,
      "evEbitdaTTM": 29.5474
    },
    {
      "date": "2026-09-27",
      "roeTTM": 137.17999999999998,
      "roicTTM": 70.25,
      "psTTM": 10.6315,
      "pb": 46.1593,
      "evEbitdaTTM": 29.8159
    },
    {
      "date": "2026-09-28",
      "roeTTM": 137.17999999999998,
      "roicTTM": 70.25,
      "psTTM": 10.6628,
      "pb": 46.295,
      "evEbitdaTTM": 29.9028
    },
    {
      "date": "2026-09-29",
      "roeTTM": 137.17999999999998,
      "roicTTM": 70.25,
      "psTTM": 10.6628,
      "pb": 46.295,
      "evEbitdaTTM": 29.9028
    },
    {
      "date": "2026-09-30",
      "roeTTM": 137.17999999999998,
      "roicTTM": 70.25,
      "psTTM": 10.6281,
      "pb": 46.1443,
      "evEbitdaTTM": 29.8063
    },
    {
      "date": "2026-10-01",
      "roeTTM": 137.17999999999998,
      "roicTTM": 70.25,
      "psTTM": 10.3821,
      "pb": 45.0761,
      "evEbitdaTTM": 29.1225
    },
    {
      "date": "2026-10-02",
      "roeTTM": 137.17999999999998,
      "roicTTM": 70.25,
      "psTTM": 10.5108,
      "pb": 45.6353,
      "evEbitdaTTM": 29.4804
    },
    {
      "date": "2026-10-03",
      "roeTTM": 137.17999999999998,
      "roicTTM": 70.25,
      "psTTM": 10.3011,
      "pb": 44.7245,
      "evEbitdaTTM": 28.8974
    },
    {
      "date": "2026-10-04",
      "roeTTM": 137.17999999999998,
      "roicTTM": 70.25,
      "psTTM": 10.4229,
      "pb": 45.2533,
      "evEbitdaTTM": 29.2359
    },
    {
      "date": "2026-10-05",
      "roeTTM": 137.17999999999998,
      "roicTTM": 70.25,
      "psTTM": 10.4229,
      "pb": 45.2533,
      "evEbitdaTTM": 29.2359
    },
    {
      "date": "2026-10-06",
      "roeTTM": 137.17999999999998,
      "roicTTM": 70.25,
      "psTTM": 10.4321,
      "pb": 45.2933,
      "evEbitdaTTM": 29.2615
    },
    {
      "date": "2026-10-07",
      "roeTTM": 137.17999999999998,
      "roicTTM": 70.25,
      "psTTM": 10.4293,
      "pb": 45.2811,
      "evEbitdaTTM": 29.2537
    },
    {
      "date": "2026-10-08",
      "roeTTM": 137.17999999999998,
      "roicTTM": 70.25,
      "psTTM": 10.4118,
      "pb": 45.205,
      "evEbitdaTTM": 29.205
    },
    {
      "date": "2026-10-09",
      "roeTTM": 137.17999999999998,
      "roicTTM": 70.25,
      "psTTM": 10.4905,
      "pb": 45.5471,
      "evEbitdaTTM": 29.424
    },
    {
      "date": "2026-10-10",
      "roeTTM": 137.17999999999998,
      "roicTTM": 70.25,
      "psTTM": 10.4905,
      "pb": 45.5471,
      "evEbitdaTTM": 29.424
    },
    {
      "date": "2026-10-11",
      "roeTTM": 137.17999999999998,
      "roicTTM": 70.25,
      "psTTM": 10.4496,
      "pb": 45.3693,
      "evEbitdaTTM": 29.3102
    },
    {
      "date": "2026-10-12",
      "roeTTM": 137.17999999999998,
      "roicTTM": 70.25,
      "psTTM": 10.5243,
      "pb": 45.6937,
      "evEbitdaTTM": 29.5178
    },
    {
      "date": "2026-10-13",
      "roeTTM": 137.17999999999998,
      "roicTTM": 70.25,
      "psTTM": 10.5243,
      "pb": 45.6937,
      "evEbitdaTTM": 29.5178
    },
    {
      "date": "2026-10-14",
      "roeTTM": 137.17999999999998,
      "roicTTM": 70.25,
      "psTTM": 10.6178,
      "pb": 46.0995,
      "evEbitdaTTM": 29.7776
    },
    {
      "date": "2026-10-15",
      "roeTTM": 137.17999999999998,
      "roicTTM": 70.25,
      "psTTM": 10.6178,
      "pb": 46.0995,
      "evEbitdaTTM": 29.7776
    },
    {
      "date": "2026-10-16",
      "roeTTM": 137.17999999999998,
      "roicTTM": 70.25,
      "psTTM": 10.6958,
      "pb": 46.4382,
      "evEbitdaTTM": 29.9944
    },
    {
      "date": "2026-10-17",
      "roeTTM": 137.17999999999998,
      "roicTTM": 70.25,
      "psTTM": 10.7234,
      "pb": 46.5583,
      "evEbitdaTTM": 30.0713
    },
    {
      "date": "2026-10-18",
      "roeTTM": 137.17999999999998,
      "roicTTM": 70.25,
      "psTTM": 10.7234,
      "pb": 46.5583,
      "evEbitdaTTM": 30.0713
    },
    {
      "date": "2026-10-19",
      "roeTTM": 137.17999999999998,
      "roicTTM": 70.25,
      "psTTM": 10.7375,
      "pb": 46.6194,
      "evEbitdaTTM": 30.1104
    },
    {
      "date": "2026-10-20",
      "roeTTM": 137.17999999999998,
      "roicTTM": 70.25,
      "psTTM": 10.7375,
      "pb": 46.6194,
      "evEbitdaTTM": 30.1104
    },
    {
      "date": "2026-10-21",
      "roeTTM": 137.17999999999998,
      "roicTTM": 70.25,
      "psTTM": 10.7375,
      "pb": 46.6194,
      "evEbitdaTTM": 30.1104
    },
    {
      "date": "2026-10-22",
      "roeTTM": 137.17999999999998,
      "roicTTM": 70.25,
      "psTTM": 10.6425,
      "pb": 46.2068,
      "evEbitdaTTM": 29.8463
    },
    {
      "date": "2026-10-23",
      "roeTTM": 137.17999999999998,
      "roicTTM": 70.25,
      "psTTM": 10.7755,
      "pb": 46.7841,
      "evEbitdaTTM": 30.2159
    },
    {
      "date": "2026-10-24",
      "roeTTM": 137.17999999999998,
      "roicTTM": 70.25,
      "psTTM": 10.7924,
      "pb": 46.8576,
      "evEbitdaTTM": 30.2629
    },
    {
      "date": "2026-10-25",
      "roeTTM": 137.17999999999998,
      "roicTTM": 70.25,
      "psTTM": 10.8194,
      "pb": 46.975,
      "evEbitdaTTM": 30.3381
    },
    {
      "date": "2026-10-26",
      "roeTTM": 137.17999999999998,
      "roicTTM": 70.25,
      "psTTM": 10.8194,
      "pb": 46.975,
      "evEbitdaTTM": 30.3381
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
    },
    {
      "date": "2026-09-08",
      "roeTTM": 4.569999999999999,
      "roicTTM": 4.14,
      "psTTM": 13.4961,
      "pb": 16.1005,
      "evEbitdaTTM": 125.7511
    },
    {
      "date": "2026-09-09",
      "roeTTM": 4.569999999999999,
      "roicTTM": 4.14,
      "psTTM": 13.4961,
      "pb": 16.1005,
      "evEbitdaTTM": 125.7511
    },
    {
      "date": "2026-09-10",
      "roeTTM": 4.569999999999999,
      "roicTTM": 4.14,
      "psTTM": 13.4961,
      "pb": 16.1005,
      "evEbitdaTTM": 125.7511
    },
    {
      "date": "2026-09-11",
      "roeTTM": 4.569999999999999,
      "roicTTM": 4.14,
      "psTTM": 13.4961,
      "pb": 16.1005,
      "evEbitdaTTM": 125.7511
    },
    {
      "date": "2026-09-12",
      "roeTTM": 4.569999999999999,
      "roicTTM": 4.14,
      "psTTM": 13.9291,
      "pb": 16.617,
      "evEbitdaTTM": 129.8867
    },
    {
      "date": "2026-09-13",
      "roeTTM": 4.569999999999999,
      "roicTTM": 4.14,
      "psTTM": 13.9291,
      "pb": 16.617,
      "evEbitdaTTM": 129.8867
    },
    {
      "date": "2026-09-14",
      "roeTTM": 4.569999999999999,
      "roicTTM": 4.14,
      "psTTM": 13.9291,
      "pb": 16.617,
      "evEbitdaTTM": 129.8867
    },
    {
      "date": "2026-09-15",
      "roeTTM": 4.569999999999999,
      "roicTTM": 4.14,
      "psTTM": 13.9291,
      "pb": 16.617,
      "evEbitdaTTM": 129.8867
    },
    {
      "date": "2026-09-16",
      "roeTTM": 4.569999999999999,
      "roicTTM": 4.14,
      "psTTM": 13.9291,
      "pb": 16.617,
      "evEbitdaTTM": 129.8867
    },
    {
      "date": "2026-09-17",
      "roeTTM": 4.569999999999999,
      "roicTTM": 4.14,
      "psTTM": 13.6825,
      "pb": 16.3228,
      "evEbitdaTTM": 127.5313
    },
    {
      "date": "2026-09-18",
      "roeTTM": 4.569999999999999,
      "roicTTM": 4.14,
      "psTTM": 13.5914,
      "pb": 16.2142,
      "evEbitdaTTM": 126.6612
    },
    {
      "date": "2026-09-19",
      "roeTTM": 4.569999999999999,
      "roicTTM": 4.14,
      "psTTM": 13.5914,
      "pb": 16.2142,
      "evEbitdaTTM": 126.6612
    },
    {
      "date": "2026-09-20",
      "roeTTM": 4.569999999999999,
      "roicTTM": 4.14,
      "psTTM": 13.8845,
      "pb": 16.5638,
      "evEbitdaTTM": 129.4608
    },
    {
      "date": "2026-09-21",
      "roeTTM": 4.569999999999999,
      "roicTTM": 4.14,
      "psTTM": 13.8845,
      "pb": 16.5638,
      "evEbitdaTTM": 129.4608
    },
    {
      "date": "2026-09-22",
      "roeTTM": 4.569999999999999,
      "roicTTM": 4.14,
      "psTTM": 13.8845,
      "pb": 16.5638,
      "evEbitdaTTM": 129.4608
    },
    {
      "date": "2026-09-23",
      "roeTTM": 4.569999999999999,
      "roicTTM": 4.14,
      "psTTM": 14.305,
      "pb": 17.0654,
      "evEbitdaTTM": 133.4762
    },
    {
      "date": "2026-09-24",
      "roeTTM": 4.569999999999999,
      "roicTTM": 4.14,
      "psTTM": 14.305,
      "pb": 17.0654,
      "evEbitdaTTM": 133.4762
    },
    {
      "date": "2026-09-25",
      "roeTTM": 4.569999999999999,
      "roicTTM": 4.14,
      "psTTM": 14.4422,
      "pb": 17.2291,
      "evEbitdaTTM": 134.7868
    },
    {
      "date": "2026-09-26",
      "roeTTM": 4.569999999999999,
      "roicTTM": 4.14,
      "psTTM": 14.4887,
      "pb": 17.2846,
      "evEbitdaTTM": 135.2309
    },
    {
      "date": "2026-09-27",
      "roeTTM": 4.569999999999999,
      "roicTTM": 4.14,
      "psTTM": 14.4056,
      "pb": 17.1854,
      "evEbitdaTTM": 134.4373
    },
    {
      "date": "2026-09-28",
      "roeTTM": 4.569999999999999,
      "roicTTM": 4.14,
      "psTTM": 14.1834,
      "pb": 16.9203,
      "evEbitdaTTM": 132.3149
    },
    {
      "date": "2026-09-29",
      "roeTTM": 4.569999999999999,
      "roicTTM": 4.14,
      "psTTM": 14.1834,
      "pb": 16.9203,
      "evEbitdaTTM": 132.3149
    },
    {
      "date": "2026-09-30",
      "roeTTM": 4.569999999999999,
      "roicTTM": 4.14,
      "psTTM": 14.1834,
      "pb": 16.9203,
      "evEbitdaTTM": 132.3149
    },
    {
      "date": "2026-10-01",
      "roeTTM": 4.569999999999999,
      "roicTTM": 4.14,
      "psTTM": 13.6246,
      "pb": 16.2537,
      "evEbitdaTTM": 126.978
    },
    {
      "date": "2026-10-02",
      "roeTTM": 4.569999999999999,
      "roicTTM": 4.14,
      "psTTM": 13.4489,
      "pb": 16.0441,
      "evEbitdaTTM": 125.2997
    },
    {
      "date": "2026-10-03",
      "roeTTM": 4.569999999999999,
      "roicTTM": 4.14,
      "psTTM": 13.524,
      "pb": 16.1337,
      "evEbitdaTTM": 126.0169
    },
    {
      "date": "2026-10-04",
      "roeTTM": 4.569999999999999,
      "roicTTM": 4.14,
      "psTTM": 14.1254,
      "pb": 16.8512,
      "evEbitdaTTM": 131.7615
    },
    {
      "date": "2026-10-05",
      "roeTTM": 4.569999999999999,
      "roicTTM": 4.14,
      "psTTM": 14.1254,
      "pb": 16.8512,
      "evEbitdaTTM": 131.7615
    },
    {
      "date": "2026-10-06",
      "roeTTM": 4.569999999999999,
      "roicTTM": 4.14,
      "psTTM": 14.1254,
      "pb": 16.8512,
      "evEbitdaTTM": 131.7615
    },
    {
      "date": "2026-10-07",
      "roeTTM": 4.569999999999999,
      "roicTTM": 4.14,
      "psTTM": 14.4357,
      "pb": 17.2214,
      "evEbitdaTTM": 134.7249
    },
    {
      "date": "2026-10-08",
      "roeTTM": 4.569999999999999,
      "roicTTM": 4.14,
      "psTTM": 14.51,
      "pb": 17.31,
      "evEbitdaTTM": 135.4348
    },
    {
      "date": "2026-10-09",
      "roeTTM": 4.569999999999999,
      "roicTTM": 4.14,
      "psTTM": 14.4006,
      "pb": 17.1795,
      "evEbitdaTTM": 134.3899
    },
    {
      "date": "2026-10-10",
      "roeTTM": 4.569999999999999,
      "roicTTM": 4.14,
      "psTTM": 14.4006,
      "pb": 17.1795,
      "evEbitdaTTM": 134.3899
    },
    {
      "date": "2026-10-11",
      "roeTTM": 4.569999999999999,
      "roicTTM": 4.14,
      "psTTM": 14.587,
      "pb": 17.4019,
      "evEbitdaTTM": 136.1701
    },
    {
      "date": "2026-10-12",
      "roeTTM": 4.569999999999999,
      "roicTTM": 4.14,
      "psTTM": 14.587,
      "pb": 17.4019,
      "evEbitdaTTM": 136.1701
    },
    {
      "date": "2026-10-13",
      "roeTTM": 4.569999999999999,
      "roicTTM": 4.14,
      "psTTM": 14.587,
      "pb": 17.4019,
      "evEbitdaTTM": 136.1701
    },
    {
      "date": "2026-10-14",
      "roeTTM": 4.569999999999999,
      "roicTTM": 4.14,
      "psTTM": 14.409,
      "pb": 17.1895,
      "evEbitdaTTM": 134.47
    },
    {
      "date": "2026-10-15",
      "roeTTM": 4.569999999999999,
      "roicTTM": 4.14,
      "psTTM": 14.409,
      "pb": 17.1895,
      "evEbitdaTTM": 134.47
    },
    {
      "date": "2026-10-16",
      "roeTTM": 4.569999999999999,
      "roicTTM": 4.14,
      "psTTM": 14.3023,
      "pb": 17.0622,
      "evEbitdaTTM": 133.4507
    },
    {
      "date": "2026-10-17",
      "roeTTM": 4.569999999999999,
      "roicTTM": 4.14,
      "psTTM": 13.8148,
      "pb": 16.4806,
      "evEbitdaTTM": 128.7945
    },
    {
      "date": "2026-10-18",
      "roeTTM": 4.569999999999999,
      "roicTTM": 4.14,
      "psTTM": 13.8148,
      "pb": 16.4806,
      "evEbitdaTTM": 128.7945
    },
    {
      "date": "2026-10-19",
      "roeTTM": 4.569999999999999,
      "roicTTM": 4.14,
      "psTTM": 13.5205,
      "pb": 16.1296,
      "evEbitdaTTM": 125.9841
    },
    {
      "date": "2026-10-20",
      "roeTTM": 4.569999999999999,
      "roicTTM": 4.14,
      "psTTM": 13.5205,
      "pb": 16.1296,
      "evEbitdaTTM": 125.9841
    },
    {
      "date": "2026-10-21",
      "roeTTM": 4.569999999999999,
      "roicTTM": 4.14,
      "psTTM": 13.5205,
      "pb": 16.1296,
      "evEbitdaTTM": 125.9841
    },
    {
      "date": "2026-10-22",
      "roeTTM": 4.569999999999999,
      "roicTTM": 4.14,
      "psTTM": 14.029,
      "pb": 16.7362,
      "evEbitdaTTM": 130.8405
    },
    {
      "date": "2026-10-23",
      "roeTTM": 4.569999999999999,
      "roicTTM": 4.14,
      "psTTM": 14.7426,
      "pb": 17.5875,
      "evEbitdaTTM": 137.656
    },
    {
      "date": "2026-10-24",
      "roeTTM": 3.7600000000000002,
      "roicTTM": 3.4000000000000004,
      "psTTM": 14.2958,
      "pb": 16.5823,
      "evEbitdaTTM": 142.0541
    },
    {
      "date": "2026-10-25",
      "roeTTM": 3.7600000000000002,
      "roicTTM": 3.4000000000000004,
      "psTTM": 14.2958,
      "pb": 16.5823,
      "evEbitdaTTM": 142.0541
    },
    {
      "date": "2026-10-26",
      "roeTTM": 3.7600000000000002,
      "roicTTM": 3.4000000000000004,
      "psTTM": 14.2958,
      "pb": 16.5823,
      "evEbitdaTTM": 142.0541
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
    },
    {
      "date": "2026-09-08",
      "roeTTM": 50.38,
      "roicTTM": 11.200000000000001,
      "psTTM": 6.79,
      "pb": 10.6225,
      "evEbitdaTTM": 24.9422
    },
    {
      "date": "2026-09-09",
      "roeTTM": 50.38,
      "roicTTM": 11.200000000000001,
      "psTTM": 6.79,
      "pb": 10.6225,
      "evEbitdaTTM": 24.9422
    },
    {
      "date": "2026-09-10",
      "roeTTM": 50.38,
      "roicTTM": 11.200000000000001,
      "psTTM": 6.79,
      "pb": 10.6225,
      "evEbitdaTTM": 24.9422
    },
    {
      "date": "2026-09-11",
      "roeTTM": 50.38,
      "roicTTM": 11.200000000000001,
      "psTTM": 7.0098,
      "pb": 10.9663,
      "evEbitdaTTM": 25.6069
    },
    {
      "date": "2026-09-12",
      "roeTTM": 50.38,
      "roicTTM": 11.200000000000001,
      "psTTM": 6.6891,
      "pb": 10.4646,
      "evEbitdaTTM": 24.6371
    },
    {
      "date": "2026-09-13",
      "roeTTM": 50.38,
      "roicTTM": 11.200000000000001,
      "psTTM": 6.6891,
      "pb": 10.4646,
      "evEbitdaTTM": 24.6371
    },
    {
      "date": "2026-09-14",
      "roeTTM": 50.59,
      "roicTTM": 11.07,
      "psTTM": 6.4265,
      "pb": 10.1834,
      "evEbitdaTTM": 24.1877
    },
    {
      "date": "2026-09-15",
      "roeTTM": 42.480000000000004,
      "roicTTM": 10.89,
      "psTTM": 6.0309,
      "pb": 6.442,
      "evEbitdaTTM": 21.2911
    },
    {
      "date": "2026-09-16",
      "roeTTM": 42.480000000000004,
      "roicTTM": 10.89,
      "psTTM": 5.7253,
      "pb": 6.1156,
      "evEbitdaTTM": 20.3962
    },
    {
      "date": "2026-09-17",
      "roeTTM": 42.480000000000004,
      "roicTTM": 10.89,
      "psTTM": 5.7253,
      "pb": 6.1156,
      "evEbitdaTTM": 20.3962
    },
    {
      "date": "2026-09-18",
      "roeTTM": 42.480000000000004,
      "roicTTM": 10.89,
      "psTTM": 6.0212,
      "pb": 6.4317,
      "evEbitdaTTM": 21.2628
    },
    {
      "date": "2026-09-19",
      "roeTTM": 42.480000000000004,
      "roicTTM": 10.89,
      "psTTM": 6.0212,
      "pb": 6.4317,
      "evEbitdaTTM": 21.2628
    },
    {
      "date": "2026-09-20",
      "roeTTM": 42.58,
      "roicTTM": 10.76,
      "psTTM": 6.1632,
      "pb": 6.6251,
      "evEbitdaTTM": 22.0533
    },
    {
      "date": "2026-09-21",
      "roeTTM": 42.58,
      "roicTTM": 10.76,
      "psTTM": 6.2183,
      "pb": 6.6844,
      "evEbitdaTTM": 22.2149
    },
    {
      "date": "2026-09-22",
      "roeTTM": 42.58,
      "roicTTM": 10.76,
      "psTTM": 6.2183,
      "pb": 6.6844,
      "evEbitdaTTM": 22.2149
    },
    {
      "date": "2026-09-23",
      "roeTTM": 42.58,
      "roicTTM": 10.76,
      "psTTM": 6.192,
      "pb": 6.6561,
      "evEbitdaTTM": 22.1378
    },
    {
      "date": "2026-09-24",
      "roeTTM": 42.58,
      "roicTTM": 10.76,
      "psTTM": 6.192,
      "pb": 6.6561,
      "evEbitdaTTM": 22.1378
    },
    {
      "date": "2026-09-25",
      "roeTTM": 42.58,
      "roicTTM": 10.76,
      "psTTM": 6.1983,
      "pb": 6.6629,
      "evEbitdaTTM": 22.1563
    },
    {
      "date": "2026-09-26",
      "roeTTM": 42.58,
      "roicTTM": 10.76,
      "psTTM": 5.7773,
      "pb": 6.2103,
      "evEbitdaTTM": 20.9232
    },
    {
      "date": "2026-09-27",
      "roeTTM": 42.58,
      "roicTTM": 10.76,
      "psTTM": 5.8746,
      "pb": 6.3149,
      "evEbitdaTTM": 21.2082
    },
    {
      "date": "2026-09-28",
      "roeTTM": 42.58,
      "roicTTM": 10.76,
      "psTTM": 5.7756,
      "pb": 6.2085,
      "evEbitdaTTM": 20.9183
    },
    {
      "date": "2026-09-29",
      "roeTTM": 42.58,
      "roicTTM": 10.76,
      "psTTM": 5.7756,
      "pb": 6.2085,
      "evEbitdaTTM": 20.9183
    },
    {
      "date": "2026-09-30",
      "roeTTM": 42.58,
      "roicTTM": 10.76,
      "psTTM": 5.6281,
      "pb": 6.05,
      "evEbitdaTTM": 20.4865
    },
    {
      "date": "2026-10-01",
      "roeTTM": 42.58,
      "roicTTM": 10.76,
      "psTTM": 5.6476,
      "pb": 6.0709,
      "evEbitdaTTM": 20.5434
    },
    {
      "date": "2026-10-02",
      "roeTTM": 42.58,
      "roicTTM": 10.76,
      "psTTM": 5.7217,
      "pb": 6.1505,
      "evEbitdaTTM": 20.7604
    },
    {
      "date": "2026-10-03",
      "roeTTM": 42.58,
      "roicTTM": 10.76,
      "psTTM": 5.8013,
      "pb": 6.2361,
      "evEbitdaTTM": 20.9935
    },
    {
      "date": "2026-10-04",
      "roeTTM": 42.58,
      "roicTTM": 10.76,
      "psTTM": 5.982,
      "pb": 6.4304,
      "evEbitdaTTM": 21.5228
    },
    {
      "date": "2026-10-05",
      "roeTTM": 42.58,
      "roicTTM": 10.76,
      "psTTM": 5.982,
      "pb": 6.4304,
      "evEbitdaTTM": 21.5228
    },
    {
      "date": "2026-10-06",
      "roeTTM": 42.58,
      "roicTTM": 10.76,
      "psTTM": 5.9946,
      "pb": 6.444,
      "evEbitdaTTM": 21.5598
    },
    {
      "date": "2026-10-07",
      "roeTTM": 42.58,
      "roicTTM": 10.76,
      "psTTM": 6.1581,
      "pb": 6.6197,
      "evEbitdaTTM": 22.0385
    },
    {
      "date": "2026-10-08",
      "roeTTM": 42.58,
      "roicTTM": 10.76,
      "psTTM": 6.1027,
      "pb": 6.5601,
      "evEbitdaTTM": 21.8762
    },
    {
      "date": "2026-10-09",
      "roeTTM": 42.58,
      "roicTTM": 10.76,
      "psTTM": 6.0399,
      "pb": 6.4927,
      "evEbitdaTTM": 21.6924
    },
    {
      "date": "2026-10-10",
      "roeTTM": 42.58,
      "roicTTM": 10.76,
      "psTTM": 6.0399,
      "pb": 6.4927,
      "evEbitdaTTM": 21.6924
    },
    {
      "date": "2026-10-11",
      "roeTTM": 42.58,
      "roicTTM": 10.76,
      "psTTM": 5.7162,
      "pb": 6.1447,
      "evEbitdaTTM": 20.7443
    },
    {
      "date": "2026-10-12",
      "roeTTM": 42.58,
      "roicTTM": 10.76,
      "psTTM": 5.9567,
      "pb": 6.4032,
      "evEbitdaTTM": 21.4488
    },
    {
      "date": "2026-10-13",
      "roeTTM": 42.58,
      "roicTTM": 10.76,
      "psTTM": 5.9567,
      "pb": 6.4032,
      "evEbitdaTTM": 21.4488
    },
    {
      "date": "2026-10-14",
      "roeTTM": 42.58,
      "roicTTM": 10.76,
      "psTTM": 5.8455,
      "pb": 6.2837,
      "evEbitdaTTM": 21.1231
    },
    {
      "date": "2026-10-15",
      "roeTTM": 42.58,
      "roicTTM": 10.76,
      "psTTM": 5.8455,
      "pb": 6.2837,
      "evEbitdaTTM": 21.1231
    },
    {
      "date": "2026-10-16",
      "roeTTM": 42.58,
      "roicTTM": 10.76,
      "psTTM": 5.6117,
      "pb": 6.0323,
      "evEbitdaTTM": 20.4384
    },
    {
      "date": "2026-10-17",
      "roeTTM": 42.58,
      "roicTTM": 10.76,
      "psTTM": 5.4791,
      "pb": 5.8898,
      "evEbitdaTTM": 20.05
    },
    {
      "date": "2026-10-18",
      "roeTTM": 42.58,
      "roicTTM": 10.76,
      "psTTM": 5.4791,
      "pb": 5.8898,
      "evEbitdaTTM": 20.05
    },
    {
      "date": "2026-10-19",
      "roeTTM": 42.58,
      "roicTTM": 10.76,
      "psTTM": 5.4019,
      "pb": 5.8068,
      "evEbitdaTTM": 19.824
    },
    {
      "date": "2026-10-20",
      "roeTTM": 42.58,
      "roicTTM": 10.76,
      "psTTM": 5.4019,
      "pb": 5.8068,
      "evEbitdaTTM": 19.824
    },
    {
      "date": "2026-10-21",
      "roeTTM": 42.58,
      "roicTTM": 10.76,
      "psTTM": 5.4019,
      "pb": 5.8068,
      "evEbitdaTTM": 19.824
    },
    {
      "date": "2026-10-22",
      "roeTTM": 42.58,
      "roicTTM": 10.76,
      "psTTM": 5.3804,
      "pb": 5.7837,
      "evEbitdaTTM": 19.7611
    },
    {
      "date": "2026-10-23",
      "roeTTM": 42.58,
      "roicTTM": 10.76,
      "psTTM": 5.4146,
      "pb": 5.8204,
      "evEbitdaTTM": 19.861
    },
    {
      "date": "2026-10-24",
      "roeTTM": 42.58,
      "roicTTM": 10.76,
      "psTTM": 5.3303,
      "pb": 5.7298,
      "evEbitdaTTM": 19.6143
    },
    {
      "date": "2026-10-25",
      "roeTTM": 42.58,
      "roicTTM": 10.76,
      "psTTM": 5.2768,
      "pb": 5.6723,
      "evEbitdaTTM": 19.4576
    },
    {
      "date": "2026-10-26",
      "roeTTM": 42.58,
      "roicTTM": 10.76,
      "psTTM": 5.2768,
      "pb": 5.6723,
      "evEbitdaTTM": 19.4576
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
    },
    {
      "date": "2026-09-08",
      "roeTTM": 20.150000000000002,
      "roicTTM": 13.18,
      "psTTM": 4.8556,
      "pb": 5.5591,
      "evEbitdaTTM": 26.0196
    },
    {
      "date": "2026-09-09",
      "roeTTM": 20.150000000000002,
      "roicTTM": 13.18,
      "psTTM": 4.8556,
      "pb": 5.5591,
      "evEbitdaTTM": 26.0196
    },
    {
      "date": "2026-09-10",
      "roeTTM": 20.150000000000002,
      "roicTTM": 13.18,
      "psTTM": 4.8556,
      "pb": 5.5591,
      "evEbitdaTTM": 26.0196
    },
    {
      "date": "2026-09-11",
      "roeTTM": 20.150000000000002,
      "roicTTM": 13.18,
      "psTTM": 4.738,
      "pb": 5.4244,
      "evEbitdaTTM": 25.4692
    },
    {
      "date": "2026-09-12",
      "roeTTM": 20.150000000000002,
      "roicTTM": 13.18,
      "psTTM": 4.6161,
      "pb": 5.2848,
      "evEbitdaTTM": 24.8986
    },
    {
      "date": "2026-09-13",
      "roeTTM": 20.150000000000002,
      "roicTTM": 13.18,
      "psTTM": 4.6161,
      "pb": 5.2848,
      "evEbitdaTTM": 24.8986
    },
    {
      "date": "2026-09-14",
      "roeTTM": 20.150000000000002,
      "roicTTM": 13.18,
      "psTTM": 4.64,
      "pb": 5.3123,
      "evEbitdaTTM": 25.0108
    },
    {
      "date": "2026-09-15",
      "roeTTM": 20.150000000000002,
      "roicTTM": 13.18,
      "psTTM": 4.64,
      "pb": 5.3123,
      "evEbitdaTTM": 25.0108
    },
    {
      "date": "2026-09-16",
      "roeTTM": 20.150000000000002,
      "roicTTM": 13.18,
      "psTTM": 4.7761,
      "pb": 5.468,
      "evEbitdaTTM": 25.6476
    },
    {
      "date": "2026-09-17",
      "roeTTM": 20.150000000000002,
      "roicTTM": 13.18,
      "psTTM": 4.8712,
      "pb": 5.5769,
      "evEbitdaTTM": 26.0924
    },
    {
      "date": "2026-09-18",
      "roeTTM": 20.150000000000002,
      "roicTTM": 13.18,
      "psTTM": 4.7061,
      "pb": 5.388,
      "evEbitdaTTM": 25.3202
    },
    {
      "date": "2026-09-19",
      "roeTTM": 20.150000000000002,
      "roicTTM": 13.18,
      "psTTM": 4.7061,
      "pb": 5.388,
      "evEbitdaTTM": 25.3202
    },
    {
      "date": "2026-09-20",
      "roeTTM": 20.150000000000002,
      "roicTTM": 13.18,
      "psTTM": 4.5625,
      "pb": 5.2235,
      "evEbitdaTTM": 24.648
    },
    {
      "date": "2026-09-21",
      "roeTTM": 20.150000000000002,
      "roicTTM": 13.18,
      "psTTM": 4.4565,
      "pb": 5.1021,
      "evEbitdaTTM": 24.1519
    },
    {
      "date": "2026-09-22",
      "roeTTM": 20.150000000000002,
      "roicTTM": 13.18,
      "psTTM": 4.4565,
      "pb": 5.1021,
      "evEbitdaTTM": 24.1519
    },
    {
      "date": "2026-09-23",
      "roeTTM": 20.150000000000002,
      "roicTTM": 13.18,
      "psTTM": 4.4554,
      "pb": 5.1009,
      "evEbitdaTTM": 24.1471
    },
    {
      "date": "2026-09-24",
      "roeTTM": 20.150000000000002,
      "roicTTM": 13.18,
      "psTTM": 4.4554,
      "pb": 5.1009,
      "evEbitdaTTM": 24.1471
    },
    {
      "date": "2026-09-25",
      "roeTTM": 20.150000000000002,
      "roicTTM": 13.18,
      "psTTM": 4.4546,
      "pb": 5.0999,
      "evEbitdaTTM": 24.1431
    },
    {
      "date": "2026-09-26",
      "roeTTM": 20.150000000000002,
      "roicTTM": 13.18,
      "psTTM": 4.4513,
      "pb": 5.0962,
      "evEbitdaTTM": 24.1278
    },
    {
      "date": "2026-09-27",
      "roeTTM": 20.150000000000002,
      "roicTTM": 13.18,
      "psTTM": 4.4596,
      "pb": 5.1057,
      "evEbitdaTTM": 24.1668
    },
    {
      "date": "2026-09-28",
      "roeTTM": 20.150000000000002,
      "roicTTM": 13.18,
      "psTTM": 4.3834,
      "pb": 5.0185,
      "evEbitdaTTM": 23.8101
    },
    {
      "date": "2026-09-29",
      "roeTTM": 20.150000000000002,
      "roicTTM": 13.18,
      "psTTM": 4.3834,
      "pb": 5.0185,
      "evEbitdaTTM": 23.8101
    },
    {
      "date": "2026-09-30",
      "roeTTM": 20.150000000000002,
      "roicTTM": 13.18,
      "psTTM": 4.172,
      "pb": 4.7765,
      "evEbitdaTTM": 22.821
    },
    {
      "date": "2026-10-01",
      "roeTTM": 20.150000000000002,
      "roicTTM": 13.18,
      "psTTM": 4.1909,
      "pb": 4.798,
      "evEbitdaTTM": 22.9091
    },
    {
      "date": "2026-10-02",
      "roeTTM": 20.150000000000002,
      "roicTTM": 13.18,
      "psTTM": 4.3231,
      "pb": 4.9494,
      "evEbitdaTTM": 23.5278
    },
    {
      "date": "2026-10-03",
      "roeTTM": 20.150000000000002,
      "roicTTM": 13.18,
      "psTTM": 4.4156,
      "pb": 5.0553,
      "evEbitdaTTM": 23.9608
    },
    {
      "date": "2026-10-04",
      "roeTTM": 20.150000000000002,
      "roicTTM": 13.18,
      "psTTM": 4.4214,
      "pb": 5.062,
      "evEbitdaTTM": 23.988
    },
    {
      "date": "2026-10-05",
      "roeTTM": 20.150000000000002,
      "roicTTM": 13.18,
      "psTTM": 4.4214,
      "pb": 5.062,
      "evEbitdaTTM": 23.988
    },
    {
      "date": "2026-10-06",
      "roeTTM": 20.150000000000002,
      "roicTTM": 13.18,
      "psTTM": 4.396,
      "pb": 5.0328,
      "evEbitdaTTM": 23.8688
    },
    {
      "date": "2026-10-07",
      "roeTTM": 20.150000000000002,
      "roicTTM": 13.18,
      "psTTM": 4.3767,
      "pb": 5.0107,
      "evEbitdaTTM": 23.7785
    },
    {
      "date": "2026-10-08",
      "roeTTM": 20.150000000000002,
      "roicTTM": 13.18,
      "psTTM": 4.2938,
      "pb": 4.9158,
      "evEbitdaTTM": 23.3907
    },
    {
      "date": "2026-10-09",
      "roeTTM": 20.150000000000002,
      "roicTTM": 13.18,
      "psTTM": 4.2045,
      "pb": 4.8137,
      "evEbitdaTTM": 22.973
    },
    {
      "date": "2026-10-10",
      "roeTTM": 20.150000000000002,
      "roicTTM": 13.18,
      "psTTM": 4.2045,
      "pb": 4.8137,
      "evEbitdaTTM": 22.973
    },
    {
      "date": "2026-10-11",
      "roeTTM": 20.150000000000002,
      "roicTTM": 13.18,
      "psTTM": 4.2742,
      "pb": 4.8934,
      "evEbitdaTTM": 23.2991
    },
    {
      "date": "2026-10-12",
      "roeTTM": 20.150000000000002,
      "roicTTM": 13.18,
      "psTTM": 4.2918,
      "pb": 4.9136,
      "evEbitdaTTM": 23.3815
    },
    {
      "date": "2026-10-13",
      "roeTTM": 20.150000000000002,
      "roicTTM": 13.18,
      "psTTM": 4.2918,
      "pb": 4.9136,
      "evEbitdaTTM": 23.3815
    },
    {
      "date": "2026-10-14",
      "roeTTM": 20.150000000000002,
      "roicTTM": 13.18,
      "psTTM": 4.4153,
      "pb": 5.0549,
      "evEbitdaTTM": 23.9591
    },
    {
      "date": "2026-10-15",
      "roeTTM": 20.150000000000002,
      "roicTTM": 13.18,
      "psTTM": 4.4153,
      "pb": 5.0549,
      "evEbitdaTTM": 23.9591
    },
    {
      "date": "2026-10-16",
      "roeTTM": 20.150000000000002,
      "roicTTM": 13.18,
      "psTTM": 4.482,
      "pb": 5.1314,
      "evEbitdaTTM": 24.2715
    },
    {
      "date": "2026-10-17",
      "roeTTM": 20.150000000000002,
      "roicTTM": 13.18,
      "psTTM": 4.5026,
      "pb": 5.155,
      "evEbitdaTTM": 24.3679
    },
    {
      "date": "2026-10-18",
      "roeTTM": 20.150000000000002,
      "roicTTM": 13.18,
      "psTTM": 4.5026,
      "pb": 5.155,
      "evEbitdaTTM": 24.3679
    },
    {
      "date": "2026-10-19",
      "roeTTM": 20.150000000000002,
      "roicTTM": 13.18,
      "psTTM": 4.5085,
      "pb": 5.1617,
      "evEbitdaTTM": 24.3955
    },
    {
      "date": "2026-10-20",
      "roeTTM": 20.150000000000002,
      "roicTTM": 13.18,
      "psTTM": 4.5085,
      "pb": 5.1617,
      "evEbitdaTTM": 24.3955
    },
    {
      "date": "2026-10-21",
      "roeTTM": 20.150000000000002,
      "roicTTM": 13.18,
      "psTTM": 4.5085,
      "pb": 5.1617,
      "evEbitdaTTM": 24.3955
    },
    {
      "date": "2026-10-22",
      "roeTTM": 20.150000000000002,
      "roicTTM": 13.18,
      "psTTM": 4.5124,
      "pb": 5.1661,
      "evEbitdaTTM": 24.4135
    },
    {
      "date": "2026-10-23",
      "roeTTM": 20.150000000000002,
      "roicTTM": 13.18,
      "psTTM": 4.5423,
      "pb": 5.2004,
      "evEbitdaTTM": 24.5537
    },
    {
      "date": "2026-10-24",
      "roeTTM": 20.150000000000002,
      "roicTTM": 13.18,
      "psTTM": 4.6322,
      "pb": 5.3032,
      "evEbitdaTTM": 24.974
    },
    {
      "date": "2026-10-25",
      "roeTTM": 20.150000000000002,
      "roicTTM": 13.18,
      "psTTM": 4.5732,
      "pb": 5.2357,
      "evEbitdaTTM": 24.6979
    },
    {
      "date": "2026-10-26",
      "roeTTM": 20.150000000000002,
      "roicTTM": 13.18,
      "psTTM": 4.5732,
      "pb": 5.2357,
      "evEbitdaTTM": 24.6979
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
    },
    {
      "date": "2026-09-08",
      "roeTTM": 37.47,
      "roicTTM": 37.47,
      "psTTM": 68.0532,
      "pb": 42.8609,
      "evEbitdaTTM": 156.575
    },
    {
      "date": "2026-09-09",
      "roeTTM": 37.47,
      "roicTTM": 37.47,
      "psTTM": 68.0532,
      "pb": 42.8609,
      "evEbitdaTTM": 156.575
    },
    {
      "date": "2026-09-10",
      "roeTTM": 37.47,
      "roicTTM": 37.47,
      "psTTM": 68.0532,
      "pb": 42.8609,
      "evEbitdaTTM": 156.575
    },
    {
      "date": "2026-09-11",
      "roeTTM": 37.47,
      "roicTTM": 37.47,
      "psTTM": 66.375,
      "pb": 41.804,
      "evEbitdaTTM": 152.695
    },
    {
      "date": "2026-09-12",
      "roeTTM": 37.47,
      "roicTTM": 37.47,
      "psTTM": 65.467,
      "pb": 41.2321,
      "evEbitdaTTM": 150.5957
    },
    {
      "date": "2026-09-13",
      "roeTTM": 37.47,
      "roicTTM": 37.47,
      "psTTM": 65.467,
      "pb": 41.2321,
      "evEbitdaTTM": 150.5957
    },
    {
      "date": "2026-09-14",
      "roeTTM": 37.47,
      "roicTTM": 37.47,
      "psTTM": 65.2815,
      "pb": 41.1153,
      "evEbitdaTTM": 150.167
    },
    {
      "date": "2026-09-15",
      "roeTTM": 37.47,
      "roicTTM": 37.47,
      "psTTM": 65.2815,
      "pb": 41.1153,
      "evEbitdaTTM": 150.167
    },
    {
      "date": "2026-09-16",
      "roeTTM": 37.47,
      "roicTTM": 37.47,
      "psTTM": 65.2815,
      "pb": 41.1153,
      "evEbitdaTTM": 150.167
    },
    {
      "date": "2026-09-17",
      "roeTTM": 37.47,
      "roicTTM": 37.47,
      "psTTM": 67.655,
      "pb": 42.6102,
      "evEbitdaTTM": 155.6544
    },
    {
      "date": "2026-09-18",
      "roeTTM": 37.47,
      "roicTTM": 37.47,
      "psTTM": 67.3612,
      "pb": 42.4252,
      "evEbitdaTTM": 154.9752
    },
    {
      "date": "2026-09-19",
      "roeTTM": 37.47,
      "roicTTM": 37.47,
      "psTTM": 67.3612,
      "pb": 42.4252,
      "evEbitdaTTM": 154.9752
    },
    {
      "date": "2026-09-20",
      "roeTTM": 37.47,
      "roicTTM": 37.47,
      "psTTM": 68.7978,
      "pb": 43.3299,
      "evEbitdaTTM": 158.2965
    },
    {
      "date": "2026-09-21",
      "roeTTM": 37.47,
      "roicTTM": 37.47,
      "psTTM": 69.3443,
      "pb": 43.6741,
      "evEbitdaTTM": 159.56
    },
    {
      "date": "2026-09-22",
      "roeTTM": 37.47,
      "roicTTM": 37.47,
      "psTTM": 69.3443,
      "pb": 43.6741,
      "evEbitdaTTM": 159.56
    },
    {
      "date": "2026-09-23",
      "roeTTM": 37.47,
      "roicTTM": 37.47,
      "psTTM": 71.1908,
      "pb": 44.8371,
      "evEbitdaTTM": 163.8291
    },
    {
      "date": "2026-09-24",
      "roeTTM": 37.47,
      "roicTTM": 37.47,
      "psTTM": 71.1908,
      "pb": 44.8371,
      "evEbitdaTTM": 163.8291
    },
    {
      "date": "2026-09-25",
      "roeTTM": 37.47,
      "roicTTM": 37.47,
      "psTTM": 74.7781,
      "pb": 47.0965,
      "evEbitdaTTM": 172.123
    },
    {
      "date": "2026-09-26",
      "roeTTM": 37.47,
      "roicTTM": 37.47,
      "psTTM": 75.1802,
      "pb": 47.3497,
      "evEbitdaTTM": 173.0526
    },
    {
      "date": "2026-09-27",
      "roeTTM": 37.47,
      "roicTTM": 37.47,
      "psTTM": 74.0404,
      "pb": 46.6318,
      "evEbitdaTTM": 170.4172
    },
    {
      "date": "2026-09-28",
      "roeTTM": 37.47,
      "roicTTM": 37.47,
      "psTTM": 74.0404,
      "pb": 46.6318,
      "evEbitdaTTM": 170.4172
    },
    {
      "date": "2026-09-29",
      "roeTTM": 37.47,
      "roicTTM": 37.47,
      "psTTM": 74.0404,
      "pb": 46.6318,
      "evEbitdaTTM": 170.4172
    },
    {
      "date": "2026-09-30",
      "roeTTM": 37.47,
      "roicTTM": 37.47,
      "psTTM": 74.0404,
      "pb": 46.6318,
      "evEbitdaTTM": 170.4172
    },
    {
      "date": "2026-10-01",
      "roeTTM": 37.47,
      "roicTTM": 37.47,
      "psTTM": 72.557,
      "pb": 45.6975,
      "evEbitdaTTM": 166.9877
    },
    {
      "date": "2026-10-02",
      "roeTTM": 37.47,
      "roicTTM": 37.47,
      "psTTM": 73.0176,
      "pb": 45.9876,
      "evEbitdaTTM": 168.0526
    },
    {
      "date": "2026-10-03",
      "roeTTM": 37.47,
      "roicTTM": 37.47,
      "psTTM": 74.1848,
      "pb": 46.7227,
      "evEbitdaTTM": 170.7512
    },
    {
      "date": "2026-10-04",
      "roeTTM": 37.47,
      "roicTTM": 37.47,
      "psTTM": 73.8491,
      "pb": 46.5113,
      "evEbitdaTTM": 169.975
    },
    {
      "date": "2026-10-05",
      "roeTTM": 37.47,
      "roicTTM": 37.47,
      "psTTM": 73.8491,
      "pb": 46.5113,
      "evEbitdaTTM": 169.975
    },
    {
      "date": "2026-10-06",
      "roeTTM": 37.47,
      "roicTTM": 37.47,
      "psTTM": 73.6812,
      "pb": 46.4056,
      "evEbitdaTTM": 169.5869
    },
    {
      "date": "2026-10-07",
      "roeTTM": 37.47,
      "roicTTM": 37.47,
      "psTTM": 74.0462,
      "pb": 46.6354,
      "evEbitdaTTM": 170.4307
    },
    {
      "date": "2026-10-08",
      "roeTTM": 37.47,
      "roicTTM": 37.47,
      "psTTM": 75.2232,
      "pb": 47.3767,
      "evEbitdaTTM": 173.1518
    },
    {
      "date": "2026-10-09",
      "roeTTM": 37.47,
      "roicTTM": 37.47,
      "psTTM": 75.309,
      "pb": 47.4308,
      "evEbitdaTTM": 173.3504
    },
    {
      "date": "2026-10-10",
      "roeTTM": 37.47,
      "roicTTM": 37.47,
      "psTTM": 75.309,
      "pb": 47.4308,
      "evEbitdaTTM": 173.3504
    },
    {
      "date": "2026-10-11",
      "roeTTM": 37.47,
      "roicTTM": 37.47,
      "psTTM": 81.0942,
      "pb": 51.0744,
      "evEbitdaTTM": 186.7256
    },
    {
      "date": "2026-10-12",
      "roeTTM": 37.47,
      "roicTTM": 37.47,
      "psTTM": 81.6056,
      "pb": 51.3965,
      "evEbitdaTTM": 187.9079
    },
    {
      "date": "2026-10-13",
      "roeTTM": 37.47,
      "roicTTM": 37.47,
      "psTTM": 81.6056,
      "pb": 51.3965,
      "evEbitdaTTM": 187.9079
    },
    {
      "date": "2026-10-14",
      "roeTTM": 37.47,
      "roicTTM": 37.47,
      "psTTM": 81.4085,
      "pb": 51.2723,
      "evEbitdaTTM": 187.4522
    },
    {
      "date": "2026-10-15",
      "roeTTM": 37.47,
      "roicTTM": 37.47,
      "psTTM": 81.4085,
      "pb": 51.2723,
      "evEbitdaTTM": 187.4522
    },
    {
      "date": "2026-10-16",
      "roeTTM": 37.47,
      "roicTTM": 37.47,
      "psTTM": 78.2173,
      "pb": 49.2625,
      "evEbitdaTTM": 180.0741
    },
    {
      "date": "2026-10-17",
      "roeTTM": 37.47,
      "roicTTM": 37.47,
      "psTTM": 78.1353,
      "pb": 49.2108,
      "evEbitdaTTM": 179.8846
    },
    {
      "date": "2026-10-18",
      "roeTTM": 37.47,
      "roicTTM": 37.47,
      "psTTM": 78.1353,
      "pb": 49.2108,
      "evEbitdaTTM": 179.8846
    },
    {
      "date": "2026-10-19",
      "roeTTM": 37.47,
      "roicTTM": 37.47,
      "psTTM": 72.6194,
      "pb": 45.7369,
      "evEbitdaTTM": 167.1321
    },
    {
      "date": "2026-10-20",
      "roeTTM": 37.47,
      "roicTTM": 37.47,
      "psTTM": 72.6194,
      "pb": 45.7369,
      "evEbitdaTTM": 167.1321
    },
    {
      "date": "2026-10-21",
      "roeTTM": 37.47,
      "roicTTM": 37.47,
      "psTTM": 72.6194,
      "pb": 45.7369,
      "evEbitdaTTM": 167.1321
    },
    {
      "date": "2026-10-22",
      "roeTTM": 37.47,
      "roicTTM": 37.47,
      "psTTM": 75.4027,
      "pb": 47.4898,
      "evEbitdaTTM": 173.567
    },
    {
      "date": "2026-10-23",
      "roeTTM": 37.47,
      "roicTTM": 37.47,
      "psTTM": 78.7442,
      "pb": 49.5944,
      "evEbitdaTTM": 181.2925
    },
    {
      "date": "2026-10-24",
      "roeTTM": 37.47,
      "roicTTM": 37.47,
      "psTTM": 76.2147,
      "pb": 48.0012,
      "evEbitdaTTM": 175.4442
    },
    {
      "date": "2026-10-25",
      "roeTTM": 37.47,
      "roicTTM": 37.47,
      "psTTM": 76.8041,
      "pb": 48.3725,
      "evEbitdaTTM": 176.807
    },
    {
      "date": "2026-10-26",
      "roeTTM": 37.47,
      "roicTTM": 37.47,
      "psTTM": 76.8041,
      "pb": 48.3725,
      "evEbitdaTTM": 176.807
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
    },
    {
      "date": "2026-09-08",
      "roeTTM": 110.11,
      "roicTTM": 101.59,
      "psTTM": 18.3242,
      "pb": 24.2448,
      "evEbitdaTTM": 27.6547
    },
    {
      "date": "2026-09-09",
      "roeTTM": 110.11,
      "roicTTM": 101.59,
      "psTTM": 18.3242,
      "pb": 24.2448,
      "evEbitdaTTM": 27.6547
    },
    {
      "date": "2026-09-10",
      "roeTTM": 110.11,
      "roicTTM": 101.59,
      "psTTM": 18.3242,
      "pb": 24.2448,
      "evEbitdaTTM": 27.6547
    },
    {
      "date": "2026-09-11",
      "roeTTM": 110.11,
      "roicTTM": 101.59,
      "psTTM": 17.8732,
      "pb": 23.6481,
      "evEbitdaTTM": 26.9753
    },
    {
      "date": "2026-09-12",
      "roeTTM": 110.11,
      "roicTTM": 101.59,
      "psTTM": 17.4922,
      "pb": 23.1439,
      "evEbitdaTTM": 26.4014
    },
    {
      "date": "2026-09-13",
      "roeTTM": 110.11,
      "roicTTM": 101.59,
      "psTTM": 17.4922,
      "pb": 23.1439,
      "evEbitdaTTM": 26.4014
    },
    {
      "date": "2026-09-14",
      "roeTTM": 110.11,
      "roicTTM": 101.59,
      "psTTM": 17.3641,
      "pb": 22.9745,
      "evEbitdaTTM": 26.2085
    },
    {
      "date": "2026-09-15",
      "roeTTM": 110.11,
      "roicTTM": 101.59,
      "psTTM": 17.3641,
      "pb": 22.9745,
      "evEbitdaTTM": 26.2085
    },
    {
      "date": "2026-09-16",
      "roeTTM": 110.11,
      "roicTTM": 101.59,
      "psTTM": 16.68,
      "pb": 22.0694,
      "evEbitdaTTM": 25.1781
    },
    {
      "date": "2026-09-17",
      "roeTTM": 110.11,
      "roicTTM": 101.59,
      "psTTM": 16.8829,
      "pb": 22.3377,
      "evEbitdaTTM": 25.4836
    },
    {
      "date": "2026-09-18",
      "roeTTM": 110.11,
      "roicTTM": 101.59,
      "psTTM": 17.0809,
      "pb": 22.5998,
      "evEbitdaTTM": 25.782
    },
    {
      "date": "2026-09-19",
      "roeTTM": 110.11,
      "roicTTM": 101.59,
      "psTTM": 17.0809,
      "pb": 22.5998,
      "evEbitdaTTM": 25.782
    },
    {
      "date": "2026-09-20",
      "roeTTM": 110.11,
      "roicTTM": 101.59,
      "psTTM": 17.4858,
      "pb": 23.1355,
      "evEbitdaTTM": 26.3918
    },
    {
      "date": "2026-09-21",
      "roeTTM": 110.11,
      "roicTTM": 101.59,
      "psTTM": 17.6807,
      "pb": 23.3934,
      "evEbitdaTTM": 26.6854
    },
    {
      "date": "2026-09-22",
      "roeTTM": 110.11,
      "roicTTM": 101.59,
      "psTTM": 17.6807,
      "pb": 23.3934,
      "evEbitdaTTM": 26.6854
    },
    {
      "date": "2026-09-23",
      "roeTTM": 110.11,
      "roicTTM": 101.59,
      "psTTM": 17.8112,
      "pb": 23.566,
      "evEbitdaTTM": 26.8819
    },
    {
      "date": "2026-09-24",
      "roeTTM": 110.11,
      "roicTTM": 101.59,
      "psTTM": 17.8112,
      "pb": 23.566,
      "evEbitdaTTM": 26.8819
    },
    {
      "date": "2026-09-25",
      "roeTTM": 110.11,
      "roicTTM": 101.59,
      "psTTM": 18.1978,
      "pb": 24.0775,
      "evEbitdaTTM": 27.4642
    },
    {
      "date": "2026-09-26",
      "roeTTM": 110.11,
      "roicTTM": 101.59,
      "psTTM": 17.7268,
      "pb": 23.4544,
      "evEbitdaTTM": 26.7549
    },
    {
      "date": "2026-09-27",
      "roeTTM": 110.11,
      "roicTTM": 101.59,
      "psTTM": 17.8947,
      "pb": 23.6765,
      "evEbitdaTTM": 27.0077
    },
    {
      "date": "2026-09-28",
      "roeTTM": 110.11,
      "roicTTM": 101.59,
      "psTTM": 17.9034,
      "pb": 23.6881,
      "evEbitdaTTM": 27.0209
    },
    {
      "date": "2026-09-29",
      "roeTTM": 110.11,
      "roicTTM": 101.59,
      "psTTM": 17.9034,
      "pb": 23.6881,
      "evEbitdaTTM": 27.0209
    },
    {
      "date": "2026-09-30",
      "roeTTM": 110.11,
      "roicTTM": 101.59,
      "psTTM": 18.4825,
      "pb": 24.4543,
      "evEbitdaTTM": 27.8931
    },
    {
      "date": "2026-10-01",
      "roeTTM": 110.11,
      "roicTTM": 101.59,
      "psTTM": 18.2805,
      "pb": 24.1869,
      "evEbitdaTTM": 27.5888
    },
    {
      "date": "2026-10-02",
      "roeTTM": 110.11,
      "roicTTM": 101.59,
      "psTTM": 18.3306,
      "pb": 24.2532,
      "evEbitdaTTM": 27.6643
    },
    {
      "date": "2026-10-03",
      "roeTTM": 110.11,
      "roicTTM": 101.59,
      "psTTM": 18.3553,
      "pb": 24.2859,
      "evEbitdaTTM": 27.7014
    },
    {
      "date": "2026-10-04",
      "roeTTM": 110.11,
      "roicTTM": 101.59,
      "psTTM": 18.8842,
      "pb": 24.9858,
      "evEbitdaTTM": 28.4982
    },
    {
      "date": "2026-10-05",
      "roeTTM": 110.11,
      "roicTTM": 101.59,
      "psTTM": 18.8842,
      "pb": 24.9858,
      "evEbitdaTTM": 28.4982
    },
    {
      "date": "2026-10-06",
      "roeTTM": 110.11,
      "roicTTM": 101.59,
      "psTTM": 18.6098,
      "pb": 24.6227,
      "evEbitdaTTM": 28.0848
    },
    {
      "date": "2026-10-07",
      "roeTTM": 110.11,
      "roicTTM": 101.59,
      "psTTM": 18.8982,
      "pb": 25.0042,
      "evEbitdaTTM": 28.5191
    },
    {
      "date": "2026-10-08",
      "roeTTM": 110.11,
      "roicTTM": 101.59,
      "psTTM": 19.2312,
      "pb": 25.4449,
      "evEbitdaTTM": 29.0208
    },
    {
      "date": "2026-10-09",
      "roeTTM": 110.11,
      "roicTTM": 101.59,
      "psTTM": 18.9248,
      "pb": 25.0394,
      "evEbitdaTTM": 28.5593
    },
    {
      "date": "2026-10-10",
      "roeTTM": 110.11,
      "roicTTM": 101.59,
      "psTTM": 18.9248,
      "pb": 25.0394,
      "evEbitdaTTM": 28.5593
    },
    {
      "date": "2026-10-11",
      "roeTTM": 110.11,
      "roicTTM": 101.59,
      "psTTM": 18.3338,
      "pb": 24.2575,
      "evEbitdaTTM": 27.669
    },
    {
      "date": "2026-10-12",
      "roeTTM": 110.11,
      "roicTTM": 101.59,
      "psTTM": 18.2383,
      "pb": 24.1312,
      "evEbitdaTTM": 27.5253
    },
    {
      "date": "2026-10-13",
      "roeTTM": 110.11,
      "roicTTM": 101.59,
      "psTTM": 18.2383,
      "pb": 24.1312,
      "evEbitdaTTM": 27.5253
    },
    {
      "date": "2026-10-14",
      "roeTTM": 110.11,
      "roicTTM": 101.59,
      "psTTM": 18.1167,
      "pb": 23.9702,
      "evEbitdaTTM": 27.3421
    },
    {
      "date": "2026-10-15",
      "roeTTM": 110.11,
      "roicTTM": 101.59,
      "psTTM": 18.1167,
      "pb": 23.9702,
      "evEbitdaTTM": 27.3421
    },
    {
      "date": "2026-10-16",
      "roeTTM": 110.11,
      "roicTTM": 101.59,
      "psTTM": 17.917,
      "pb": 23.706,
      "evEbitdaTTM": 27.0412
    },
    {
      "date": "2026-10-17",
      "roeTTM": 110.11,
      "roicTTM": 101.59,
      "psTTM": 17.1143,
      "pb": 22.644,
      "evEbitdaTTM": 25.8323
    },
    {
      "date": "2026-10-18",
      "roeTTM": 110.11,
      "roicTTM": 101.59,
      "psTTM": 17.1143,
      "pb": 22.644,
      "evEbitdaTTM": 25.8323
    },
    {
      "date": "2026-10-19",
      "roeTTM": 110.11,
      "roicTTM": 101.59,
      "psTTM": 17.0332,
      "pb": 22.5367,
      "evEbitdaTTM": 25.7101
    },
    {
      "date": "2026-10-20",
      "roeTTM": 110.11,
      "roicTTM": 101.59,
      "psTTM": 17.0332,
      "pb": 22.5367,
      "evEbitdaTTM": 25.7101
    },
    {
      "date": "2026-10-21",
      "roeTTM": 110.11,
      "roicTTM": 101.59,
      "psTTM": 17.0332,
      "pb": 22.5367,
      "evEbitdaTTM": 25.7101
    },
    {
      "date": "2026-10-22",
      "roeTTM": 110.11,
      "roicTTM": 101.59,
      "psTTM": 16.9765,
      "pb": 22.4616,
      "evEbitdaTTM": 25.6246
    },
    {
      "date": "2026-10-23",
      "roeTTM": 110.11,
      "roicTTM": 101.59,
      "psTTM": 17.5001,
      "pb": 23.1545,
      "evEbitdaTTM": 26.4134
    },
    {
      "date": "2026-10-24",
      "roeTTM": 110.11,
      "roicTTM": 101.59,
      "psTTM": 17.6568,
      "pb": 23.3618,
      "evEbitdaTTM": 26.6494
    },
    {
      "date": "2026-10-25",
      "roeTTM": 110.11,
      "roicTTM": 101.59,
      "psTTM": 16.8964,
      "pb": 22.3556,
      "evEbitdaTTM": 25.504
    },
    {
      "date": "2026-10-26",
      "roeTTM": 110.11,
      "roicTTM": 101.59,
      "psTTM": 16.8964,
      "pb": 22.3556,
      "evEbitdaTTM": 25.504
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
    },
    {
      "date": "2026-09-08",
      "roeTTM": 10.07,
      "roicTTM": 9.59,
      "psTTM": 18.8747,
      "pb": 11.5974,
      "evEbitdaTTM": 101.5221
    },
    {
      "date": "2026-09-09",
      "roeTTM": 10.07,
      "roicTTM": 9.59,
      "psTTM": 18.8747,
      "pb": 11.5974,
      "evEbitdaTTM": 101.5221
    },
    {
      "date": "2026-09-10",
      "roeTTM": 10.07,
      "roicTTM": 9.59,
      "psTTM": 18.8747,
      "pb": 11.5974,
      "evEbitdaTTM": 101.5221
    },
    {
      "date": "2026-09-11",
      "roeTTM": 10.07,
      "roicTTM": 9.59,
      "psTTM": 18.8747,
      "pb": 11.5974,
      "evEbitdaTTM": 101.5221
    },
    {
      "date": "2026-09-12",
      "roeTTM": 10.07,
      "roicTTM": 9.59,
      "psTTM": 20.3651,
      "pb": 12.5131,
      "evEbitdaTTM": 109.5578
    },
    {
      "date": "2026-09-13",
      "roeTTM": 10.07,
      "roicTTM": 9.59,
      "psTTM": 20.3651,
      "pb": 12.5131,
      "evEbitdaTTM": 109.5578
    },
    {
      "date": "2026-09-14",
      "roeTTM": 10.07,
      "roicTTM": 9.59,
      "psTTM": 20.3987,
      "pb": 12.5338,
      "evEbitdaTTM": 109.7388
    },
    {
      "date": "2026-09-15",
      "roeTTM": 10.07,
      "roicTTM": 9.59,
      "psTTM": 20.3987,
      "pb": 12.5338,
      "evEbitdaTTM": 109.7388
    },
    {
      "date": "2026-09-16",
      "roeTTM": 10.07,
      "roicTTM": 9.59,
      "psTTM": 20.3987,
      "pb": 12.5338,
      "evEbitdaTTM": 109.7388
    },
    {
      "date": "2026-09-17",
      "roeTTM": 10.07,
      "roicTTM": 9.59,
      "psTTM": 20.3987,
      "pb": 12.5338,
      "evEbitdaTTM": 109.7388
    },
    {
      "date": "2026-09-18",
      "roeTTM": 10.07,
      "roicTTM": 9.59,
      "psTTM": 20.3987,
      "pb": 12.5338,
      "evEbitdaTTM": 109.7388
    },
    {
      "date": "2026-09-19",
      "roeTTM": 10.07,
      "roicTTM": 9.59,
      "psTTM": 20.3987,
      "pb": 12.5338,
      "evEbitdaTTM": 109.7388
    },
    {
      "date": "2026-09-20",
      "roeTTM": 10.07,
      "roicTTM": 9.59,
      "psTTM": 20.2553,
      "pb": 12.4456,
      "evEbitdaTTM": 108.9653
    },
    {
      "date": "2026-09-21",
      "roeTTM": 10.07,
      "roicTTM": 9.59,
      "psTTM": 22.1255,
      "pb": 13.5947,
      "evEbitdaTTM": 119.0487
    },
    {
      "date": "2026-09-22",
      "roeTTM": 10.07,
      "roicTTM": 9.59,
      "psTTM": 22.1255,
      "pb": 13.5947,
      "evEbitdaTTM": 119.0487
    },
    {
      "date": "2026-09-23",
      "roeTTM": 10.07,
      "roicTTM": 9.59,
      "psTTM": 24.3217,
      "pb": 14.9442,
      "evEbitdaTTM": 130.8901
    },
    {
      "date": "2026-09-24",
      "roeTTM": 10.07,
      "roicTTM": 9.59,
      "psTTM": 24.3217,
      "pb": 14.9442,
      "evEbitdaTTM": 130.8901
    },
    {
      "date": "2026-09-25",
      "roeTTM": 10.07,
      "roicTTM": 9.59,
      "psTTM": 24.3063,
      "pb": 14.9347,
      "evEbitdaTTM": 130.807
    },
    {
      "date": "2026-09-26",
      "roeTTM": 10.07,
      "roicTTM": 9.59,
      "psTTM": 24.8394,
      "pb": 15.2623,
      "evEbitdaTTM": 133.6811
    },
    {
      "date": "2026-09-27",
      "roeTTM": 10.07,
      "roicTTM": 9.59,
      "psTTM": 24.9106,
      "pb": 15.306,
      "evEbitdaTTM": 134.0651
    },
    {
      "date": "2026-09-28",
      "roeTTM": 10.07,
      "roicTTM": 9.59,
      "psTTM": 24.924,
      "pb": 15.3143,
      "evEbitdaTTM": 134.1375
    },
    {
      "date": "2026-09-29",
      "roeTTM": 10.07,
      "roicTTM": 9.59,
      "psTTM": 24.924,
      "pb": 15.3143,
      "evEbitdaTTM": 134.1375
    },
    {
      "date": "2026-09-30",
      "roeTTM": 10.07,
      "roicTTM": 9.59,
      "psTTM": 24.924,
      "pb": 15.3143,
      "evEbitdaTTM": 134.1375
    },
    {
      "date": "2026-10-01",
      "roeTTM": 10.07,
      "roicTTM": 9.59,
      "psTTM": 23.965,
      "pb": 14.725,
      "evEbitdaTTM": 128.9669
    },
    {
      "date": "2026-10-02",
      "roeTTM": 10.07,
      "roicTTM": 9.59,
      "psTTM": 24.2083,
      "pb": 14.8745,
      "evEbitdaTTM": 130.2785
    },
    {
      "date": "2026-10-03",
      "roeTTM": 10.07,
      "roicTTM": 9.59,
      "psTTM": 24.3688,
      "pb": 14.9731,
      "evEbitdaTTM": 131.1436
    },
    {
      "date": "2026-10-04",
      "roeTTM": 10.07,
      "roicTTM": 9.59,
      "psTTM": 25.077,
      "pb": 15.4083,
      "evEbitdaTTM": 134.9622
    },
    {
      "date": "2026-10-05",
      "roeTTM": 10.07,
      "roicTTM": 9.59,
      "psTTM": 25.077,
      "pb": 15.4083,
      "evEbitdaTTM": 134.9622
    },
    {
      "date": "2026-10-06",
      "roeTTM": 10.07,
      "roicTTM": 9.59,
      "psTTM": 25.0537,
      "pb": 15.3939,
      "evEbitdaTTM": 134.8365
    },
    {
      "date": "2026-10-07",
      "roeTTM": 10.07,
      "roicTTM": 9.59,
      "psTTM": 24.9788,
      "pb": 15.3479,
      "evEbitdaTTM": 134.4327
    },
    {
      "date": "2026-10-08",
      "roeTTM": 10.07,
      "roicTTM": 9.59,
      "psTTM": 25.8781,
      "pb": 15.9005,
      "evEbitdaTTM": 139.2815
    },
    {
      "date": "2026-10-09",
      "roeTTM": 10.07,
      "roicTTM": 9.59,
      "psTTM": 25.5248,
      "pb": 15.6834,
      "evEbitdaTTM": 137.3765
    },
    {
      "date": "2026-10-10",
      "roeTTM": 10.07,
      "roicTTM": 9.59,
      "psTTM": 25.5248,
      "pb": 15.6834,
      "evEbitdaTTM": 137.3765
    },
    {
      "date": "2026-10-11",
      "roeTTM": 10.07,
      "roicTTM": 9.59,
      "psTTM": 24.1166,
      "pb": 14.8182,
      "evEbitdaTTM": 129.7842
    },
    {
      "date": "2026-10-12",
      "roeTTM": 10.07,
      "roicTTM": 9.59,
      "psTTM": 24.0336,
      "pb": 14.7672,
      "evEbitdaTTM": 129.3366
    },
    {
      "date": "2026-10-13",
      "roeTTM": 10.07,
      "roicTTM": 9.59,
      "psTTM": 24.0336,
      "pb": 14.7672,
      "evEbitdaTTM": 129.3366
    },
    {
      "date": "2026-10-14",
      "roeTTM": 10.07,
      "roicTTM": 9.59,
      "psTTM": 23.4384,
      "pb": 14.4014,
      "evEbitdaTTM": 126.1275
    },
    {
      "date": "2026-10-15",
      "roeTTM": 10.07,
      "roicTTM": 9.59,
      "psTTM": 23.4384,
      "pb": 14.4014,
      "evEbitdaTTM": 126.1275
    },
    {
      "date": "2026-10-16",
      "roeTTM": 10.07,
      "roicTTM": 9.59,
      "psTTM": 22.6134,
      "pb": 13.8945,
      "evEbitdaTTM": 121.6793
    },
    {
      "date": "2026-10-17",
      "roeTTM": 10.07,
      "roicTTM": 9.59,
      "psTTM": 22.3424,
      "pb": 13.7281,
      "evEbitdaTTM": 120.2186
    },
    {
      "date": "2026-10-18",
      "roeTTM": 10.07,
      "roicTTM": 9.59,
      "psTTM": 22.3424,
      "pb": 13.7281,
      "evEbitdaTTM": 120.2186
    },
    {
      "date": "2026-10-19",
      "roeTTM": 10.07,
      "roicTTM": 9.59,
      "psTTM": 20.8975,
      "pb": 12.8402,
      "evEbitdaTTM": 112.428
    },
    {
      "date": "2026-10-20",
      "roeTTM": 10.07,
      "roicTTM": 9.59,
      "psTTM": 20.8975,
      "pb": 12.8402,
      "evEbitdaTTM": 112.428
    },
    {
      "date": "2026-10-21",
      "roeTTM": 10.07,
      "roicTTM": 9.59,
      "psTTM": 20.8975,
      "pb": 12.8402,
      "evEbitdaTTM": 112.428
    },
    {
      "date": "2026-10-22",
      "roeTTM": 10.07,
      "roicTTM": 9.59,
      "psTTM": 21.3222,
      "pb": 13.1012,
      "evEbitdaTTM": 114.7177
    },
    {
      "date": "2026-10-23",
      "roeTTM": 10.07,
      "roicTTM": 9.59,
      "psTTM": 21.9494,
      "pb": 13.4865,
      "evEbitdaTTM": 118.0994
    },
    {
      "date": "2026-10-24",
      "roeTTM": 10.07,
      "roicTTM": 9.59,
      "psTTM": 19.9023,
      "pb": 12.2287,
      "evEbitdaTTM": 107.0624
    },
    {
      "date": "2026-10-25",
      "roeTTM": 10.07,
      "roicTTM": 9.59,
      "psTTM": 20.4106,
      "pb": 12.541,
      "evEbitdaTTM": 109.8028
    },
    {
      "date": "2026-10-26",
      "roeTTM": 10.07,
      "roicTTM": 9.59,
      "psTTM": 20.4106,
      "pb": 12.541,
      "evEbitdaTTM": 109.8028
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
    },
    {
      "date": "2026-09-08",
      "roeTTM": 43.91,
      "roicTTM": 25.34,
      "psTTM": 19.1093,
      "pb": 17.0801,
      "evEbitdaTTM": 38.8276
    },
    {
      "date": "2026-09-09",
      "roeTTM": 43.91,
      "roicTTM": 25.34,
      "psTTM": 19.1093,
      "pb": 17.0801,
      "evEbitdaTTM": 38.8276
    },
    {
      "date": "2026-09-10",
      "roeTTM": 43.91,
      "roicTTM": 25.34,
      "psTTM": 19.1093,
      "pb": 17.0801,
      "evEbitdaTTM": 38.8276
    },
    {
      "date": "2026-09-11",
      "roeTTM": 43.91,
      "roicTTM": 25.34,
      "psTTM": 19.4545,
      "pb": 17.3886,
      "evEbitdaTTM": 39.5147
    },
    {
      "date": "2026-09-12",
      "roeTTM": 43.91,
      "roicTTM": 25.34,
      "psTTM": 19.4945,
      "pb": 17.4244,
      "evEbitdaTTM": 39.5944
    },
    {
      "date": "2026-09-13",
      "roeTTM": 43.91,
      "roicTTM": 25.34,
      "psTTM": 19.4945,
      "pb": 17.4244,
      "evEbitdaTTM": 39.5944
    },
    {
      "date": "2026-09-14",
      "roeTTM": 43.91,
      "roicTTM": 25.34,
      "psTTM": 19.3279,
      "pb": 17.2755,
      "evEbitdaTTM": 39.2628
    },
    {
      "date": "2026-09-15",
      "roeTTM": 43.91,
      "roicTTM": 25.34,
      "psTTM": 19.3279,
      "pb": 17.2755,
      "evEbitdaTTM": 39.2628
    },
    {
      "date": "2026-09-16",
      "roeTTM": 43.91,
      "roicTTM": 25.34,
      "psTTM": 19.3279,
      "pb": 17.2755,
      "evEbitdaTTM": 39.2628
    },
    {
      "date": "2026-09-17",
      "roeTTM": 43.91,
      "roicTTM": 25.34,
      "psTTM": 18.1759,
      "pb": 16.2459,
      "evEbitdaTTM": 36.9699
    },
    {
      "date": "2026-09-18",
      "roeTTM": 43.91,
      "roicTTM": 25.34,
      "psTTM": 18.1759,
      "pb": 16.2459,
      "evEbitdaTTM": 36.9699
    },
    {
      "date": "2026-09-19",
      "roeTTM": 43.91,
      "roicTTM": 25.34,
      "psTTM": 18.1759,
      "pb": 16.2459,
      "evEbitdaTTM": 36.9699
    },
    {
      "date": "2026-09-20",
      "roeTTM": 43.91,
      "roicTTM": 25.34,
      "psTTM": 18.1888,
      "pb": 16.2573,
      "evEbitdaTTM": 36.9955
    },
    {
      "date": "2026-09-21",
      "roeTTM": 43.91,
      "roicTTM": 25.34,
      "psTTM": 19.1585,
      "pb": 17.1241,
      "evEbitdaTTM": 38.9256
    },
    {
      "date": "2026-09-22",
      "roeTTM": 43.91,
      "roicTTM": 25.34,
      "psTTM": 19.1585,
      "pb": 17.1241,
      "evEbitdaTTM": 38.9256
    },
    {
      "date": "2026-09-23",
      "roeTTM": 43.91,
      "roicTTM": 25.34,
      "psTTM": 19.2841,
      "pb": 17.2363,
      "evEbitdaTTM": 39.1756
    },
    {
      "date": "2026-09-24",
      "roeTTM": 43.91,
      "roicTTM": 25.34,
      "psTTM": 19.2841,
      "pb": 17.2363,
      "evEbitdaTTM": 39.1756
    },
    {
      "date": "2026-09-25",
      "roeTTM": 43.91,
      "roicTTM": 25.34,
      "psTTM": 19.0433,
      "pb": 17.0211,
      "evEbitdaTTM": 38.6963
    },
    {
      "date": "2026-09-26",
      "roeTTM": 43.91,
      "roicTTM": 25.34,
      "psTTM": 18.7336,
      "pb": 16.7443,
      "evEbitdaTTM": 38.0799
    },
    {
      "date": "2026-09-27",
      "roeTTM": 43.91,
      "roicTTM": 25.34,
      "psTTM": 18.9115,
      "pb": 16.9033,
      "evEbitdaTTM": 38.434
    },
    {
      "date": "2026-09-28",
      "roeTTM": 43.91,
      "roicTTM": 25.34,
      "psTTM": 18.9013,
      "pb": 16.8942,
      "evEbitdaTTM": 38.4137
    },
    {
      "date": "2026-09-29",
      "roeTTM": 43.91,
      "roicTTM": 25.34,
      "psTTM": 18.9013,
      "pb": 16.8942,
      "evEbitdaTTM": 38.4137
    },
    {
      "date": "2026-09-30",
      "roeTTM": 43.91,
      "roicTTM": 25.34,
      "psTTM": 18.8065,
      "pb": 16.8095,
      "evEbitdaTTM": 38.225
    },
    {
      "date": "2026-10-01",
      "roeTTM": 43.91,
      "roicTTM": 25.34,
      "psTTM": 19.0299,
      "pb": 17.0091,
      "evEbitdaTTM": 38.6696
    },
    {
      "date": "2026-10-02",
      "roeTTM": 43.91,
      "roicTTM": 25.34,
      "psTTM": 18.9249,
      "pb": 16.9153,
      "evEbitdaTTM": 38.4606
    },
    {
      "date": "2026-10-03",
      "roeTTM": 43.91,
      "roicTTM": 25.34,
      "psTTM": 18.7599,
      "pb": 16.7678,
      "evEbitdaTTM": 38.1322
    },
    {
      "date": "2026-10-04",
      "roeTTM": 43.91,
      "roicTTM": 25.34,
      "psTTM": 18.8772,
      "pb": 16.8727,
      "evEbitdaTTM": 38.3657
    },
    {
      "date": "2026-10-05",
      "roeTTM": 43.91,
      "roicTTM": 25.34,
      "psTTM": 18.8772,
      "pb": 16.8727,
      "evEbitdaTTM": 38.3657
    },
    {
      "date": "2026-10-06",
      "roeTTM": 43.91,
      "roicTTM": 25.34,
      "psTTM": 19.0262,
      "pb": 17.0058,
      "evEbitdaTTM": 38.6622
    },
    {
      "date": "2026-10-07",
      "roeTTM": 43.91,
      "roicTTM": 25.34,
      "psTTM": 19.4829,
      "pb": 17.414,
      "evEbitdaTTM": 39.5712
    },
    {
      "date": "2026-10-08",
      "roeTTM": 43.91,
      "roicTTM": 25.34,
      "psTTM": 20.3703,
      "pb": 18.2072,
      "evEbitdaTTM": 41.3377
    },
    {
      "date": "2026-10-09",
      "roeTTM": 43.91,
      "roicTTM": 25.34,
      "psTTM": 20.0167,
      "pb": 17.8912,
      "evEbitdaTTM": 40.6339
    },
    {
      "date": "2026-10-10",
      "roeTTM": 43.91,
      "roicTTM": 25.34,
      "psTTM": 20.0167,
      "pb": 17.8912,
      "evEbitdaTTM": 40.6339
    },
    {
      "date": "2026-10-11",
      "roeTTM": 43.91,
      "roicTTM": 25.34,
      "psTTM": 19.4253,
      "pb": 17.3625,
      "evEbitdaTTM": 39.4566
    },
    {
      "date": "2026-10-12",
      "roeTTM": 43.91,
      "roicTTM": 25.34,
      "psTTM": 19.369,
      "pb": 17.3122,
      "evEbitdaTTM": 39.3446
    },
    {
      "date": "2026-10-13",
      "roeTTM": 43.91,
      "roicTTM": 25.34,
      "psTTM": 19.369,
      "pb": 17.3122,
      "evEbitdaTTM": 39.3446
    },
    {
      "date": "2026-10-14",
      "roeTTM": 43.91,
      "roicTTM": 25.34,
      "psTTM": 19.0768,
      "pb": 17.051,
      "evEbitdaTTM": 38.7629
    },
    {
      "date": "2026-10-15",
      "roeTTM": 43.91,
      "roicTTM": 25.34,
      "psTTM": 19.0768,
      "pb": 17.051,
      "evEbitdaTTM": 38.7629
    },
    {
      "date": "2026-10-16",
      "roeTTM": 43.91,
      "roicTTM": 25.34,
      "psTTM": 19.0827,
      "pb": 17.0563,
      "evEbitdaTTM": 38.7747
    },
    {
      "date": "2026-10-17",
      "roeTTM": 43.91,
      "roicTTM": 25.34,
      "psTTM": 18.2145,
      "pb": 16.2803,
      "evEbitdaTTM": 36.9847
    },
    {
      "date": "2026-10-18",
      "roeTTM": 43.91,
      "roicTTM": 25.34,
      "psTTM": 18.2145,
      "pb": 16.2803,
      "evEbitdaTTM": 36.9847
    },
    {
      "date": "2026-10-19",
      "roeTTM": 43.91,
      "roicTTM": 25.34,
      "psTTM": 17.6123,
      "pb": 15.7421,
      "evEbitdaTTM": 35.7881
    },
    {
      "date": "2026-10-20",
      "roeTTM": 43.91,
      "roicTTM": 25.34,
      "psTTM": 17.6123,
      "pb": 15.7421,
      "evEbitdaTTM": 35.7881
    },
    {
      "date": "2026-10-21",
      "roeTTM": 43.91,
      "roicTTM": 25.34,
      "psTTM": 17.6123,
      "pb": 15.7421,
      "evEbitdaTTM": 35.7881
    },
    {
      "date": "2026-10-22",
      "roeTTM": 43.91,
      "roicTTM": 25.34,
      "psTTM": 17.9533,
      "pb": 16.0469,
      "evEbitdaTTM": 36.4657
    },
    {
      "date": "2026-10-23",
      "roeTTM": 43.91,
      "roicTTM": 25.34,
      "psTTM": 18.1363,
      "pb": 16.2104,
      "evEbitdaTTM": 36.8293
    },
    {
      "date": "2026-10-24",
      "roeTTM": 43.91,
      "roicTTM": 25.34,
      "psTTM": 17.4053,
      "pb": 15.557,
      "evEbitdaTTM": 35.3767
    },
    {
      "date": "2026-10-25",
      "roeTTM": 43.91,
      "roicTTM": 25.34,
      "psTTM": 17.3667,
      "pb": 15.5226,
      "evEbitdaTTM": 35.3
    },
    {
      "date": "2026-10-26",
      "roeTTM": 43.91,
      "roicTTM": 25.34,
      "psTTM": 17.3667,
      "pb": 15.5226,
      "evEbitdaTTM": 35.3
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
    },
    {
      "date": "2026-09-08",
      "roeTTM": 37.330000000000005,
      "roicTTM": 23.24,
      "psTTM": 4.0213,
      "pb": 6.4074,
      "evEbitdaTTM": 16.0507
    },
    {
      "date": "2026-09-09",
      "roeTTM": 37.330000000000005,
      "roicTTM": 23.24,
      "psTTM": 4.0213,
      "pb": 6.4074,
      "evEbitdaTTM": 16.0507
    },
    {
      "date": "2026-09-10",
      "roeTTM": 37.330000000000005,
      "roicTTM": 23.24,
      "psTTM": 4.0213,
      "pb": 6.4074,
      "evEbitdaTTM": 16.0507
    },
    {
      "date": "2026-09-11",
      "roeTTM": 37.330000000000005,
      "roicTTM": 23.24,
      "psTTM": 4.1839,
      "pb": 6.6665,
      "evEbitdaTTM": 16.6626
    },
    {
      "date": "2026-09-12",
      "roeTTM": 37.330000000000005,
      "roicTTM": 23.24,
      "psTTM": 4.3948,
      "pb": 7.0024,
      "evEbitdaTTM": 17.4561
    },
    {
      "date": "2026-09-13",
      "roeTTM": 37.330000000000005,
      "roicTTM": 23.24,
      "psTTM": 4.3948,
      "pb": 7.0024,
      "evEbitdaTTM": 17.4561
    },
    {
      "date": "2026-09-14",
      "roeTTM": 37.330000000000005,
      "roicTTM": 23.24,
      "psTTM": 4.3366,
      "pb": 6.9098,
      "evEbitdaTTM": 17.2372
    },
    {
      "date": "2026-09-15",
      "roeTTM": 37.330000000000005,
      "roicTTM": 23.24,
      "psTTM": 4.3366,
      "pb": 6.9098,
      "evEbitdaTTM": 17.2372
    },
    {
      "date": "2026-09-16",
      "roeTTM": 37.330000000000005,
      "roicTTM": 23.24,
      "psTTM": 4.2705,
      "pb": 6.8044,
      "evEbitdaTTM": 16.9884
    },
    {
      "date": "2026-09-17",
      "roeTTM": 37.330000000000005,
      "roicTTM": 23.24,
      "psTTM": 4.4737,
      "pb": 7.1281,
      "evEbitdaTTM": 17.7529
    },
    {
      "date": "2026-09-18",
      "roeTTM": 37.330000000000005,
      "roicTTM": 23.24,
      "psTTM": 4.405,
      "pb": 7.0188,
      "evEbitdaTTM": 17.4946
    },
    {
      "date": "2026-09-19",
      "roeTTM": 37.330000000000005,
      "roicTTM": 23.24,
      "psTTM": 4.405,
      "pb": 7.0188,
      "evEbitdaTTM": 17.4946
    },
    {
      "date": "2026-09-20",
      "roeTTM": 37.330000000000005,
      "roicTTM": 23.24,
      "psTTM": 4.405,
      "pb": 7.0188,
      "evEbitdaTTM": 17.4946
    },
    {
      "date": "2026-09-21",
      "roeTTM": 37.330000000000005,
      "roicTTM": 23.24,
      "psTTM": 4.2353,
      "pb": 6.7484,
      "evEbitdaTTM": 16.8561
    },
    {
      "date": "2026-09-22",
      "roeTTM": 37.330000000000005,
      "roicTTM": 23.24,
      "psTTM": 4.2353,
      "pb": 6.7484,
      "evEbitdaTTM": 16.8561
    },
    {
      "date": "2026-09-23",
      "roeTTM": 37.330000000000005,
      "roicTTM": 23.24,
      "psTTM": 4.5421,
      "pb": 7.2371,
      "evEbitdaTTM": 18.0103
    },
    {
      "date": "2026-09-24",
      "roeTTM": 37.330000000000005,
      "roicTTM": 23.24,
      "psTTM": 4.5421,
      "pb": 7.2371,
      "evEbitdaTTM": 18.0103
    },
    {
      "date": "2026-09-25",
      "roeTTM": 37.330000000000005,
      "roicTTM": 23.24,
      "psTTM": 4.6977,
      "pb": 7.4851,
      "evEbitdaTTM": 18.596
    },
    {
      "date": "2026-09-26",
      "roeTTM": 37.330000000000005,
      "roicTTM": 23.24,
      "psTTM": 4.6097,
      "pb": 7.345,
      "evEbitdaTTM": 18.2651
    },
    {
      "date": "2026-09-27",
      "roeTTM": 37.330000000000005,
      "roicTTM": 23.24,
      "psTTM": 4.8421,
      "pb": 7.7152,
      "evEbitdaTTM": 19.1395
    },
    {
      "date": "2026-09-28",
      "roeTTM": 37.330000000000005,
      "roicTTM": 23.24,
      "psTTM": 4.8133,
      "pb": 7.6692,
      "evEbitdaTTM": 19.031
    },
    {
      "date": "2026-09-29",
      "roeTTM": 37.330000000000005,
      "roicTTM": 23.24,
      "psTTM": 4.8133,
      "pb": 7.6692,
      "evEbitdaTTM": 19.031
    },
    {
      "date": "2026-09-30",
      "roeTTM": 37.330000000000005,
      "roicTTM": 23.24,
      "psTTM": 4.5008,
      "pb": 7.1714,
      "evEbitdaTTM": 17.8552
    },
    {
      "date": "2026-10-01",
      "roeTTM": 37.330000000000005,
      "roicTTM": 23.24,
      "psTTM": 4.4492,
      "pb": 7.0892,
      "evEbitdaTTM": 17.661
    },
    {
      "date": "2026-10-02",
      "roeTTM": 37.330000000000005,
      "roicTTM": 23.24,
      "psTTM": 4.3982,
      "pb": 7.0078,
      "evEbitdaTTM": 17.4688
    },
    {
      "date": "2026-10-03",
      "roeTTM": 37.330000000000005,
      "roicTTM": 23.24,
      "psTTM": 4.3698,
      "pb": 6.9626,
      "evEbitdaTTM": 17.3619
    },
    {
      "date": "2026-10-04",
      "roeTTM": 37.330000000000005,
      "roicTTM": 23.24,
      "psTTM": 4.4638,
      "pb": 7.1124,
      "evEbitdaTTM": 17.7157
    },
    {
      "date": "2026-10-05",
      "roeTTM": 37.330000000000005,
      "roicTTM": 23.24,
      "psTTM": 4.4638,
      "pb": 7.1124,
      "evEbitdaTTM": 17.7157
    },
    {
      "date": "2026-10-06",
      "roeTTM": 37.330000000000005,
      "roicTTM": 23.24,
      "psTTM": 4.4057,
      "pb": 7.0199,
      "evEbitdaTTM": 17.4973
    },
    {
      "date": "2026-10-07",
      "roeTTM": 37.330000000000005,
      "roicTTM": 23.24,
      "psTTM": 4.3588,
      "pb": 6.9451,
      "evEbitdaTTM": 17.3206
    },
    {
      "date": "2026-10-08",
      "roeTTM": 37.330000000000005,
      "roicTTM": 23.24,
      "psTTM": 4.3104,
      "pb": 6.868,
      "evEbitdaTTM": 17.1386
    },
    {
      "date": "2026-10-09",
      "roeTTM": 37.330000000000005,
      "roicTTM": 23.24,
      "psTTM": 4.304,
      "pb": 6.8579,
      "evEbitdaTTM": 17.1146
    },
    {
      "date": "2026-10-10",
      "roeTTM": 37.330000000000005,
      "roicTTM": 23.24,
      "psTTM": 4.304,
      "pb": 6.8579,
      "evEbitdaTTM": 17.1146
    },
    {
      "date": "2026-10-11",
      "roeTTM": 37.330000000000005,
      "roicTTM": 23.24,
      "psTTM": 4.2043,
      "pb": 6.699,
      "evEbitdaTTM": 16.7394
    },
    {
      "date": "2026-10-12",
      "roeTTM": 37.330000000000005,
      "roicTTM": 23.24,
      "psTTM": 4.2526,
      "pb": 6.7758,
      "evEbitdaTTM": 16.9208
    },
    {
      "date": "2026-10-13",
      "roeTTM": 37.330000000000005,
      "roicTTM": 23.24,
      "psTTM": 4.2526,
      "pb": 6.7758,
      "evEbitdaTTM": 16.9208
    },
    {
      "date": "2026-10-14",
      "roeTTM": 37.330000000000005,
      "roicTTM": 23.24,
      "psTTM": 4.2215,
      "pb": 6.7264,
      "evEbitdaTTM": 16.8041
    },
    {
      "date": "2026-10-15",
      "roeTTM": 37.330000000000005,
      "roicTTM": 23.24,
      "psTTM": 4.2215,
      "pb": 6.7264,
      "evEbitdaTTM": 16.8041
    },
    {
      "date": "2026-10-16",
      "roeTTM": 37.330000000000005,
      "roicTTM": 23.24,
      "psTTM": 4.1835,
      "pb": 6.6659,
      "evEbitdaTTM": 16.6611
    },
    {
      "date": "2026-10-17",
      "roeTTM": 37.330000000000005,
      "roicTTM": 23.24,
      "psTTM": 4.2712,
      "pb": 6.8056,
      "evEbitdaTTM": 16.991
    },
    {
      "date": "2026-10-18",
      "roeTTM": 37.330000000000005,
      "roicTTM": 23.24,
      "psTTM": 4.2712,
      "pb": 6.8056,
      "evEbitdaTTM": 16.991
    },
    {
      "date": "2026-10-19",
      "roeTTM": 37.330000000000005,
      "roicTTM": 23.24,
      "psTTM": 4.1704,
      "pb": 6.6449,
      "evEbitdaTTM": 16.6117
    },
    {
      "date": "2026-10-20",
      "roeTTM": 37.330000000000005,
      "roicTTM": 23.24,
      "psTTM": 4.1704,
      "pb": 6.6449,
      "evEbitdaTTM": 16.6117
    },
    {
      "date": "2026-10-21",
      "roeTTM": 37.330000000000005,
      "roicTTM": 23.24,
      "psTTM": 4.1704,
      "pb": 6.6449,
      "evEbitdaTTM": 16.6117
    },
    {
      "date": "2026-10-22",
      "roeTTM": 37.330000000000005,
      "roicTTM": 23.24,
      "psTTM": 4.234,
      "pb": 6.7463,
      "evEbitdaTTM": 16.8511
    },
    {
      "date": "2026-10-23",
      "roeTTM": 37.330000000000005,
      "roicTTM": 23.24,
      "psTTM": 4.308,
      "pb": 6.8642,
      "evEbitdaTTM": 17.1296
    },
    {
      "date": "2026-10-24",
      "roeTTM": 37.330000000000005,
      "roicTTM": 23.24,
      "psTTM": 4.2337,
      "pb": 6.7457,
      "evEbitdaTTM": 16.8497
    },
    {
      "date": "2026-10-25",
      "roeTTM": 37.330000000000005,
      "roicTTM": 23.24,
      "psTTM": 4.2223,
      "pb": 6.7276,
      "evEbitdaTTM": 16.8068
    },
    {
      "date": "2026-10-26",
      "roeTTM": 37.330000000000005,
      "roicTTM": 23.24,
      "psTTM": 4.2223,
      "pb": 6.7276,
      "evEbitdaTTM": 16.8068
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
    },
    {
      "date": "2026-09-08",
      "roeTTM": 13,
      "roicTTM": 12.959999999999999,
      "psTTM": 50.2494,
      "pb": 30.0216,
      "evEbitdaTTM": 224.4076
    },
    {
      "date": "2026-09-09",
      "roeTTM": 13,
      "roicTTM": 12.959999999999999,
      "psTTM": 50.2494,
      "pb": 30.0216,
      "evEbitdaTTM": 224.4076
    },
    {
      "date": "2026-09-10",
      "roeTTM": 13,
      "roicTTM": 12.959999999999999,
      "psTTM": 50.2494,
      "pb": 30.0216,
      "evEbitdaTTM": 224.4076
    },
    {
      "date": "2026-09-11",
      "roeTTM": 13,
      "roicTTM": 12.959999999999999,
      "psTTM": 50.2494,
      "pb": 30.0216,
      "evEbitdaTTM": 224.4076
    },
    {
      "date": "2026-09-12",
      "roeTTM": 13,
      "roicTTM": 12.959999999999999,
      "psTTM": 52.6502,
      "pb": 31.4559,
      "evEbitdaTTM": 235.2561
    },
    {
      "date": "2026-09-13",
      "roeTTM": 13,
      "roicTTM": 12.959999999999999,
      "psTTM": 52.6502,
      "pb": 31.4559,
      "evEbitdaTTM": 235.2561
    },
    {
      "date": "2026-09-14",
      "roeTTM": 13,
      "roicTTM": 12.959999999999999,
      "psTTM": 52.6502,
      "pb": 31.4559,
      "evEbitdaTTM": 235.2561
    },
    {
      "date": "2026-09-15",
      "roeTTM": 13,
      "roicTTM": 12.959999999999999,
      "psTTM": 52.6502,
      "pb": 31.4559,
      "evEbitdaTTM": 235.2561
    },
    {
      "date": "2026-09-16",
      "roeTTM": 13,
      "roicTTM": 12.959999999999999,
      "psTTM": 52.6502,
      "pb": 31.4559,
      "evEbitdaTTM": 235.2561
    },
    {
      "date": "2026-09-17",
      "roeTTM": 13,
      "roicTTM": 12.959999999999999,
      "psTTM": 54.8479,
      "pb": 32.7689,
      "evEbitdaTTM": 245.1873
    },
    {
      "date": "2026-09-18",
      "roeTTM": 13,
      "roicTTM": 12.959999999999999,
      "psTTM": 50.092,
      "pb": 29.9275,
      "evEbitdaTTM": 223.6963
    },
    {
      "date": "2026-09-19",
      "roeTTM": 13,
      "roicTTM": 12.959999999999999,
      "psTTM": 50.092,
      "pb": 29.9275,
      "evEbitdaTTM": 223.6963
    },
    {
      "date": "2026-09-20",
      "roeTTM": 13,
      "roicTTM": 12.959999999999999,
      "psTTM": 50.5374,
      "pb": 30.1936,
      "evEbitdaTTM": 225.7087
    },
    {
      "date": "2026-09-21",
      "roeTTM": 13,
      "roicTTM": 12.959999999999999,
      "psTTM": 54.8707,
      "pb": 32.7825,
      "evEbitdaTTM": 245.2903
    },
    {
      "date": "2026-09-22",
      "roeTTM": 13,
      "roicTTM": 12.959999999999999,
      "psTTM": 54.8707,
      "pb": 32.7825,
      "evEbitdaTTM": 245.2903
    },
    {
      "date": "2026-09-23",
      "roeTTM": 13,
      "roicTTM": 12.959999999999999,
      "psTTM": 57.0891,
      "pb": 34.1079,
      "evEbitdaTTM": 255.315
    },
    {
      "date": "2026-09-24",
      "roeTTM": 13,
      "roicTTM": 12.959999999999999,
      "psTTM": 57.0891,
      "pb": 34.1079,
      "evEbitdaTTM": 255.315
    },
    {
      "date": "2026-09-25",
      "roeTTM": 13,
      "roicTTM": 12.959999999999999,
      "psTTM": 69.0182,
      "pb": 41.235,
      "evEbitdaTTM": 309.2205
    },
    {
      "date": "2026-09-26",
      "roeTTM": 13,
      "roicTTM": 12.959999999999999,
      "psTTM": 69.0182,
      "pb": 41.235,
      "evEbitdaTTM": 309.2205
    },
    {
      "date": "2026-09-27",
      "roeTTM": 13,
      "roicTTM": 12.959999999999999,
      "psTTM": 68.8856,
      "pb": 41.1557,
      "evEbitdaTTM": 308.6214
    },
    {
      "date": "2026-09-28",
      "roeTTM": 13,
      "roicTTM": 12.959999999999999,
      "psTTM": 63.4544,
      "pb": 37.9109,
      "evEbitdaTTM": 284.079
    },
    {
      "date": "2026-09-29",
      "roeTTM": 13,
      "roicTTM": 12.959999999999999,
      "psTTM": 63.4544,
      "pb": 37.9109,
      "evEbitdaTTM": 284.079
    },
    {
      "date": "2026-09-30",
      "roeTTM": 13,
      "roicTTM": 12.959999999999999,
      "psTTM": 63.4544,
      "pb": 37.9109,
      "evEbitdaTTM": 284.079
    },
    {
      "date": "2026-10-01",
      "roeTTM": 13,
      "roicTTM": 12.959999999999999,
      "psTTM": 58.6882,
      "pb": 35.0633,
      "evEbitdaTTM": 262.5411
    },
    {
      "date": "2026-10-02",
      "roeTTM": 13,
      "roicTTM": 12.959999999999999,
      "psTTM": 58.6882,
      "pb": 35.0633,
      "evEbitdaTTM": 262.5411
    },
    {
      "date": "2026-10-03",
      "roeTTM": 13,
      "roicTTM": 12.959999999999999,
      "psTTM": 60.83,
      "pb": 36.3429,
      "evEbitdaTTM": 272.2196
    },
    {
      "date": "2026-10-04",
      "roeTTM": 13,
      "roicTTM": 12.959999999999999,
      "psTTM": 60.5545,
      "pb": 36.1783,
      "evEbitdaTTM": 270.9747
    },
    {
      "date": "2026-10-05",
      "roeTTM": 13,
      "roicTTM": 12.959999999999999,
      "psTTM": 60.5545,
      "pb": 36.1783,
      "evEbitdaTTM": 270.9747
    },
    {
      "date": "2026-10-06",
      "roeTTM": 13,
      "roicTTM": 12.959999999999999,
      "psTTM": 60.5545,
      "pb": 36.1783,
      "evEbitdaTTM": 270.9747
    },
    {
      "date": "2026-10-07",
      "roeTTM": 13,
      "roicTTM": 12.959999999999999,
      "psTTM": 63.6926,
      "pb": 38.0532,
      "evEbitdaTTM": 285.1554
    },
    {
      "date": "2026-10-08",
      "roeTTM": 13,
      "roicTTM": 12.959999999999999,
      "psTTM": 62.7419,
      "pb": 37.4852,
      "evEbitdaTTM": 280.8591
    },
    {
      "date": "2026-10-09",
      "roeTTM": 13,
      "roicTTM": 12.959999999999999,
      "psTTM": 62.6715,
      "pb": 37.4431,
      "evEbitdaTTM": 280.5408
    },
    {
      "date": "2026-10-10",
      "roeTTM": 13,
      "roicTTM": 12.959999999999999,
      "psTTM": 62.6715,
      "pb": 37.4431,
      "evEbitdaTTM": 280.5408
    },
    {
      "date": "2026-10-11",
      "roeTTM": 13,
      "roicTTM": 12.959999999999999,
      "psTTM": 57.0228,
      "pb": 34.0683,
      "evEbitdaTTM": 255.0155
    },
    {
      "date": "2026-10-12",
      "roeTTM": 13,
      "roicTTM": 12.959999999999999,
      "psTTM": 57.0228,
      "pb": 34.0683,
      "evEbitdaTTM": 255.0155
    },
    {
      "date": "2026-10-13",
      "roeTTM": 13,
      "roicTTM": 12.959999999999999,
      "psTTM": 57.0228,
      "pb": 34.0683,
      "evEbitdaTTM": 255.0155
    },
    {
      "date": "2026-10-14",
      "roeTTM": 13,
      "roicTTM": 12.959999999999999,
      "psTTM": 55.1565,
      "pb": 32.9533,
      "evEbitdaTTM": 246.582
    },
    {
      "date": "2026-10-15",
      "roeTTM": 13,
      "roicTTM": 12.959999999999999,
      "psTTM": 55.1565,
      "pb": 32.9533,
      "evEbitdaTTM": 246.582
    },
    {
      "date": "2026-10-16",
      "roeTTM": 13,
      "roicTTM": 12.959999999999999,
      "psTTM": 52.8697,
      "pb": 31.5871,
      "evEbitdaTTM": 236.2483
    },
    {
      "date": "2026-10-17",
      "roeTTM": 13,
      "roicTTM": 12.959999999999999,
      "psTTM": 49.3008,
      "pb": 29.4548,
      "evEbitdaTTM": 220.1207
    },
    {
      "date": "2026-10-18",
      "roeTTM": 13,
      "roicTTM": 12.959999999999999,
      "psTTM": 49.3008,
      "pb": 29.4548,
      "evEbitdaTTM": 220.1207
    },
    {
      "date": "2026-10-19",
      "roeTTM": 13,
      "roicTTM": 12.959999999999999,
      "psTTM": 50.7051,
      "pb": 30.2938,
      "evEbitdaTTM": 226.4669
    },
    {
      "date": "2026-10-20",
      "roeTTM": 13,
      "roicTTM": 12.959999999999999,
      "psTTM": 50.7051,
      "pb": 30.2938,
      "evEbitdaTTM": 226.4669
    },
    {
      "date": "2026-10-21",
      "roeTTM": 13,
      "roicTTM": 12.959999999999999,
      "psTTM": 50.7051,
      "pb": 30.2938,
      "evEbitdaTTM": 226.4669
    },
    {
      "date": "2026-10-22",
      "roeTTM": 13,
      "roicTTM": 12.959999999999999,
      "psTTM": 47.1859,
      "pb": 28.1912,
      "evEbitdaTTM": 210.5639
    },
    {
      "date": "2026-10-23",
      "roeTTM": 13,
      "roicTTM": 12.959999999999999,
      "psTTM": 45.7898,
      "pb": 27.3571,
      "evEbitdaTTM": 204.2551
    },
    {
      "date": "2026-10-24",
      "roeTTM": 13,
      "roicTTM": 12.959999999999999,
      "psTTM": 46.9352,
      "pb": 28.0415,
      "evEbitdaTTM": 209.4313
    },
    {
      "date": "2026-10-25",
      "roeTTM": 13,
      "roicTTM": 12.959999999999999,
      "psTTM": 46.9352,
      "pb": 28.0415,
      "evEbitdaTTM": 209.4313
    },
    {
      "date": "2026-10-26",
      "roeTTM": 13,
      "roicTTM": 12.959999999999999,
      "psTTM": 46.9352,
      "pb": 28.0415,
      "evEbitdaTTM": 209.4313
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
    },
    {
      "date": "2026-09-08",
      "roeTTM": 16.220000000000002,
      "roicTTM": 12.57,
      "psTTM": 20.7434,
      "pb": 10.5782,
      "evEbitdaTTM": 52.83
    },
    {
      "date": "2026-09-09",
      "roeTTM": 16.220000000000002,
      "roicTTM": 12.57,
      "psTTM": 20.7434,
      "pb": 10.5782,
      "evEbitdaTTM": 52.83
    },
    {
      "date": "2026-09-10",
      "roeTTM": 16.220000000000002,
      "roicTTM": 12.57,
      "psTTM": 20.7434,
      "pb": 10.5782,
      "evEbitdaTTM": 52.83
    },
    {
      "date": "2026-09-11",
      "roeTTM": 16.220000000000002,
      "roicTTM": 12.57,
      "psTTM": 21.8067,
      "pb": 11.1205,
      "evEbitdaTTM": 55.5241
    },
    {
      "date": "2026-09-12",
      "roeTTM": 16.220000000000002,
      "roicTTM": 12.57,
      "psTTM": 21.9079,
      "pb": 11.1721,
      "evEbitdaTTM": 55.7803
    },
    {
      "date": "2026-09-13",
      "roeTTM": 16.220000000000002,
      "roicTTM": 12.57,
      "psTTM": 21.9079,
      "pb": 11.1721,
      "evEbitdaTTM": 55.7803
    },
    {
      "date": "2026-09-14",
      "roeTTM": 16.220000000000002,
      "roicTTM": 12.57,
      "psTTM": 21.9079,
      "pb": 11.1721,
      "evEbitdaTTM": 55.7803
    },
    {
      "date": "2026-09-15",
      "roeTTM": 16.220000000000002,
      "roicTTM": 12.57,
      "psTTM": 21.9079,
      "pb": 11.1721,
      "evEbitdaTTM": 55.7803
    },
    {
      "date": "2026-09-16",
      "roeTTM": 16.220000000000002,
      "roicTTM": 12.57,
      "psTTM": 20.0517,
      "pb": 10.2255,
      "evEbitdaTTM": 51.0775
    },
    {
      "date": "2026-09-17",
      "roeTTM": 16.220000000000002,
      "roicTTM": 12.57,
      "psTTM": 20.7898,
      "pb": 10.6019,
      "evEbitdaTTM": 52.9475
    },
    {
      "date": "2026-09-18",
      "roeTTM": 16.220000000000002,
      "roicTTM": 12.57,
      "psTTM": 20.5717,
      "pb": 10.4907,
      "evEbitdaTTM": 52.3951
    },
    {
      "date": "2026-09-19",
      "roeTTM": 16.220000000000002,
      "roicTTM": 12.57,
      "psTTM": 20.5717,
      "pb": 10.4907,
      "evEbitdaTTM": 52.3951
    },
    {
      "date": "2026-09-20",
      "roeTTM": 16.220000000000002,
      "roicTTM": 12.57,
      "psTTM": 22.0921,
      "pb": 11.266,
      "evEbitdaTTM": 56.247
    },
    {
      "date": "2026-09-21",
      "roeTTM": 16.220000000000002,
      "roicTTM": 12.57,
      "psTTM": 22.6641,
      "pb": 11.5577,
      "evEbitdaTTM": 57.6963
    },
    {
      "date": "2026-09-22",
      "roeTTM": 16.220000000000002,
      "roicTTM": 12.57,
      "psTTM": 22.6641,
      "pb": 11.5577,
      "evEbitdaTTM": 57.6963
    },
    {
      "date": "2026-09-23",
      "roeTTM": 16.220000000000002,
      "roicTTM": 12.57,
      "psTTM": 23.8825,
      "pb": 12.179,
      "evEbitdaTTM": 60.783
    },
    {
      "date": "2026-09-24",
      "roeTTM": 16.220000000000002,
      "roicTTM": 12.57,
      "psTTM": 23.8825,
      "pb": 12.179,
      "evEbitdaTTM": 60.783
    },
    {
      "date": "2026-09-25",
      "roeTTM": 16.220000000000002,
      "roicTTM": 12.57,
      "psTTM": 24.2091,
      "pb": 12.3456,
      "evEbitdaTTM": 61.6105
    },
    {
      "date": "2026-09-26",
      "roeTTM": 16.220000000000002,
      "roicTTM": 12.57,
      "psTTM": 24.0282,
      "pb": 12.2533,
      "evEbitdaTTM": 61.1521
    },
    {
      "date": "2026-09-27",
      "roeTTM": 16.220000000000002,
      "roicTTM": 12.57,
      "psTTM": 24.243,
      "pb": 12.3628,
      "evEbitdaTTM": 61.6963
    },
    {
      "date": "2026-09-28",
      "roeTTM": 16.220000000000002,
      "roicTTM": 12.57,
      "psTTM": 24.3051,
      "pb": 12.3945,
      "evEbitdaTTM": 61.8538
    },
    {
      "date": "2026-09-29",
      "roeTTM": 16.220000000000002,
      "roicTTM": 12.57,
      "psTTM": 24.3051,
      "pb": 12.3945,
      "evEbitdaTTM": 61.8538
    },
    {
      "date": "2026-09-30",
      "roeTTM": 16.220000000000002,
      "roicTTM": 12.57,
      "psTTM": 23.6022,
      "pb": 12.0361,
      "evEbitdaTTM": 60.073
    },
    {
      "date": "2026-10-01",
      "roeTTM": 16.220000000000002,
      "roicTTM": 12.57,
      "psTTM": 24.429,
      "pb": 12.4577,
      "evEbitdaTTM": 62.1677
    },
    {
      "date": "2026-10-02",
      "roeTTM": 16.220000000000002,
      "roicTTM": 12.57,
      "psTTM": 24.5162,
      "pb": 12.5022,
      "evEbitdaTTM": 62.3886
    },
    {
      "date": "2026-10-03",
      "roeTTM": 16.220000000000002,
      "roicTTM": 12.57,
      "psTTM": 24.8753,
      "pb": 12.6853,
      "evEbitdaTTM": 63.2984
    },
    {
      "date": "2026-10-04",
      "roeTTM": 16.220000000000002,
      "roicTTM": 12.57,
      "psTTM": 25.266,
      "pb": 12.8845,
      "evEbitdaTTM": 64.2881
    },
    {
      "date": "2026-10-05",
      "roeTTM": 16.220000000000002,
      "roicTTM": 12.57,
      "psTTM": 25.266,
      "pb": 12.8845,
      "evEbitdaTTM": 64.2881
    },
    {
      "date": "2026-10-06",
      "roeTTM": 16.220000000000002,
      "roicTTM": 12.57,
      "psTTM": 25.266,
      "pb": 12.8845,
      "evEbitdaTTM": 64.2881
    },
    {
      "date": "2026-10-07",
      "roeTTM": 16.220000000000002,
      "roicTTM": 12.57,
      "psTTM": 25.1695,
      "pb": 12.8353,
      "evEbitdaTTM": 64.0437
    },
    {
      "date": "2026-10-08",
      "roeTTM": 16.220000000000002,
      "roicTTM": 12.57,
      "psTTM": 26.6319,
      "pb": 13.5811,
      "evEbitdaTTM": 67.7486
    },
    {
      "date": "2026-10-09",
      "roeTTM": 16.220000000000002,
      "roicTTM": 12.57,
      "psTTM": 26.4157,
      "pb": 13.4708,
      "evEbitdaTTM": 67.2009
    },
    {
      "date": "2026-10-10",
      "roeTTM": 16.220000000000002,
      "roicTTM": 12.57,
      "psTTM": 26.4157,
      "pb": 13.4708,
      "evEbitdaTTM": 67.2009
    },
    {
      "date": "2026-10-11",
      "roeTTM": 16.220000000000002,
      "roicTTM": 12.57,
      "psTTM": 25.5434,
      "pb": 13.026,
      "evEbitdaTTM": 64.9911
    },
    {
      "date": "2026-10-12",
      "roeTTM": 16.220000000000002,
      "roicTTM": 12.57,
      "psTTM": 25.5434,
      "pb": 13.026,
      "evEbitdaTTM": 64.9911
    },
    {
      "date": "2026-10-13",
      "roeTTM": 16.220000000000002,
      "roicTTM": 12.57,
      "psTTM": 25.5434,
      "pb": 13.026,
      "evEbitdaTTM": 64.9911
    },
    {
      "date": "2026-10-14",
      "roeTTM": 16.220000000000002,
      "roicTTM": 12.57,
      "psTTM": 24.6693,
      "pb": 12.5803,
      "evEbitdaTTM": 62.7765
    },
    {
      "date": "2026-10-15",
      "roeTTM": 16.220000000000002,
      "roicTTM": 12.57,
      "psTTM": 24.6693,
      "pb": 12.5803,
      "evEbitdaTTM": 62.7765
    },
    {
      "date": "2026-10-16",
      "roeTTM": 16.220000000000002,
      "roicTTM": 12.57,
      "psTTM": 22.7597,
      "pb": 11.6064,
      "evEbitdaTTM": 57.9384
    },
    {
      "date": "2026-10-17",
      "roeTTM": 16.220000000000002,
      "roicTTM": 12.57,
      "psTTM": 22.3848,
      "pb": 11.4153,
      "evEbitdaTTM": 56.9887
    },
    {
      "date": "2026-10-18",
      "roeTTM": 16.220000000000002,
      "roicTTM": 12.57,
      "psTTM": 22.3848,
      "pb": 11.4153,
      "evEbitdaTTM": 56.9887
    },
    {
      "date": "2026-10-19",
      "roeTTM": 16.220000000000002,
      "roicTTM": 12.57,
      "psTTM": 21.1405,
      "pb": 10.7807,
      "evEbitdaTTM": 53.8362
    },
    {
      "date": "2026-10-20",
      "roeTTM": 16.220000000000002,
      "roicTTM": 12.57,
      "psTTM": 21.1405,
      "pb": 10.7807,
      "evEbitdaTTM": 53.8362
    },
    {
      "date": "2026-10-21",
      "roeTTM": 16.220000000000002,
      "roicTTM": 12.57,
      "psTTM": 21.1405,
      "pb": 10.7807,
      "evEbitdaTTM": 53.8362
    },
    {
      "date": "2026-10-22",
      "roeTTM": 16.220000000000002,
      "roicTTM": 12.57,
      "psTTM": 22.3087,
      "pb": 11.3765,
      "evEbitdaTTM": 56.7959
    },
    {
      "date": "2026-10-23",
      "roeTTM": 16.220000000000002,
      "roicTTM": 12.57,
      "psTTM": 22.7115,
      "pb": 11.5818,
      "evEbitdaTTM": 57.8162
    },
    {
      "date": "2026-10-24",
      "roeTTM": 16.220000000000002,
      "roicTTM": 12.57,
      "psTTM": 20.7359,
      "pb": 10.5744,
      "evEbitdaTTM": 52.8112
    },
    {
      "date": "2026-10-25",
      "roeTTM": 16.220000000000002,
      "roicTTM": 12.57,
      "psTTM": 21.2036,
      "pb": 10.8129,
      "evEbitdaTTM": 53.996
    },
    {
      "date": "2026-10-26",
      "roeTTM": 16.220000000000002,
      "roicTTM": 12.57,
      "psTTM": 21.2036,
      "pb": 10.8129,
      "evEbitdaTTM": 53.996
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
    },
    {
      "date": "2026-09-08",
      "roeTTM": -10.76,
      "roicTTM": -7.42,
      "psTTM": 8.8263,
      "pb": 5.7502,
      "evEbitdaTTM": 32.2512
    },
    {
      "date": "2026-09-09",
      "roeTTM": -10.76,
      "roicTTM": -7.42,
      "psTTM": 8.8263,
      "pb": 5.7502,
      "evEbitdaTTM": 32.2512
    },
    {
      "date": "2026-09-10",
      "roeTTM": -10.76,
      "roicTTM": -7.42,
      "psTTM": 8.8263,
      "pb": 5.7502,
      "evEbitdaTTM": 32.2512
    },
    {
      "date": "2026-09-11",
      "roeTTM": -10.76,
      "roicTTM": -7.42,
      "psTTM": 9.7451,
      "pb": 6.3487,
      "evEbitdaTTM": 35.3746
    },
    {
      "date": "2026-09-12",
      "roeTTM": -10.76,
      "roicTTM": -7.42,
      "psTTM": 9.6121,
      "pb": 6.2621,
      "evEbitdaTTM": 34.9224
    },
    {
      "date": "2026-09-13",
      "roeTTM": -10.76,
      "roicTTM": -7.42,
      "psTTM": 9.6121,
      "pb": 6.2621,
      "evEbitdaTTM": 34.9224
    },
    {
      "date": "2026-09-14",
      "roeTTM": -10.76,
      "roicTTM": -7.42,
      "psTTM": 9.5412,
      "pb": 6.2159,
      "evEbitdaTTM": 34.6814
    },
    {
      "date": "2026-09-15",
      "roeTTM": -10.76,
      "roicTTM": -7.42,
      "psTTM": 9.5412,
      "pb": 6.2159,
      "evEbitdaTTM": 34.6814
    },
    {
      "date": "2026-09-16",
      "roeTTM": -10.76,
      "roicTTM": -7.42,
      "psTTM": 9.1079,
      "pb": 5.9336,
      "evEbitdaTTM": 33.2083
    },
    {
      "date": "2026-09-17",
      "roeTTM": -10.76,
      "roicTTM": -7.42,
      "psTTM": 9.0142,
      "pb": 5.8726,
      "evEbitdaTTM": 32.89
    },
    {
      "date": "2026-09-18",
      "roeTTM": -10.76,
      "roicTTM": -7.42,
      "psTTM": 9.366,
      "pb": 6.1018,
      "evEbitdaTTM": 34.0858
    },
    {
      "date": "2026-09-19",
      "roeTTM": -10.76,
      "roicTTM": -7.42,
      "psTTM": 9.366,
      "pb": 6.1018,
      "evEbitdaTTM": 34.0858
    },
    {
      "date": "2026-09-20",
      "roeTTM": -10.76,
      "roicTTM": -7.42,
      "psTTM": 9.366,
      "pb": 6.1018,
      "evEbitdaTTM": 34.0858
    },
    {
      "date": "2026-09-21",
      "roeTTM": -10.76,
      "roicTTM": -7.42,
      "psTTM": 10.0658,
      "pb": 6.5577,
      "evEbitdaTTM": 36.4648
    },
    {
      "date": "2026-09-22",
      "roeTTM": -10.76,
      "roicTTM": -7.42,
      "psTTM": 10.0658,
      "pb": 6.5577,
      "evEbitdaTTM": 36.4648
    },
    {
      "date": "2026-09-23",
      "roeTTM": -10.76,
      "roicTTM": -7.42,
      "psTTM": 11.546,
      "pb": 7.522,
      "evEbitdaTTM": 41.497
    },
    {
      "date": "2026-09-24",
      "roeTTM": -10.76,
      "roicTTM": -7.42,
      "psTTM": 11.546,
      "pb": 7.522,
      "evEbitdaTTM": 41.497
    },
    {
      "date": "2026-09-25",
      "roeTTM": -10.76,
      "roicTTM": -7.42,
      "psTTM": 11.2151,
      "pb": 7.3064,
      "evEbitdaTTM": 40.3721
    },
    {
      "date": "2026-09-26",
      "roeTTM": -10.76,
      "roicTTM": -7.42,
      "psTTM": 11.3583,
      "pb": 7.3997,
      "evEbitdaTTM": 40.8589
    },
    {
      "date": "2026-09-27",
      "roeTTM": -10.76,
      "roicTTM": -7.42,
      "psTTM": 11.4144,
      "pb": 7.4362,
      "evEbitdaTTM": 41.0495
    },
    {
      "date": "2026-09-28",
      "roeTTM": -10.76,
      "roicTTM": -7.42,
      "psTTM": 11.4005,
      "pb": 7.4272,
      "evEbitdaTTM": 41.0023
    },
    {
      "date": "2026-09-29",
      "roeTTM": -10.76,
      "roicTTM": -7.42,
      "psTTM": 11.4005,
      "pb": 7.4272,
      "evEbitdaTTM": 41.0023
    },
    {
      "date": "2026-09-30",
      "roeTTM": -10.76,
      "roicTTM": -7.42,
      "psTTM": 10.6414,
      "pb": 6.9326,
      "evEbitdaTTM": 38.4216
    },
    {
      "date": "2026-10-01",
      "roeTTM": -10.76,
      "roicTTM": -7.42,
      "psTTM": 10.8144,
      "pb": 7.0454,
      "evEbitdaTTM": 39.0098
    },
    {
      "date": "2026-10-02",
      "roeTTM": -10.76,
      "roicTTM": -7.42,
      "psTTM": 10.9982,
      "pb": 7.1651,
      "evEbitdaTTM": 39.6347
    },
    {
      "date": "2026-10-03",
      "roeTTM": -10.76,
      "roicTTM": -7.42,
      "psTTM": 11.0348,
      "pb": 7.189,
      "evEbitdaTTM": 39.7592
    },
    {
      "date": "2026-10-04",
      "roeTTM": -10.76,
      "roicTTM": -7.42,
      "psTTM": 11.3207,
      "pb": 7.3753,
      "evEbitdaTTM": 40.7313
    },
    {
      "date": "2026-10-05",
      "roeTTM": -10.76,
      "roicTTM": -7.42,
      "psTTM": 11.3207,
      "pb": 7.3753,
      "evEbitdaTTM": 40.7313
    },
    {
      "date": "2026-10-06",
      "roeTTM": -10.76,
      "roicTTM": -7.42,
      "psTTM": 11.0603,
      "pb": 7.2056,
      "evEbitdaTTM": 39.8458
    },
    {
      "date": "2026-10-07",
      "roeTTM": -10.76,
      "roicTTM": -7.42,
      "psTTM": 10.8573,
      "pb": 7.0733,
      "evEbitdaTTM": 39.1558
    },
    {
      "date": "2026-10-08",
      "roeTTM": -10.76,
      "roicTTM": -7.42,
      "psTTM": 10.5841,
      "pb": 6.8953,
      "evEbitdaTTM": 38.2269
    },
    {
      "date": "2026-10-09",
      "roeTTM": -10.76,
      "roicTTM": -7.42,
      "psTTM": 10.5422,
      "pb": 6.868,
      "evEbitdaTTM": 38.0844
    },
    {
      "date": "2026-10-10",
      "roeTTM": -10.76,
      "roicTTM": -7.42,
      "psTTM": 10.5422,
      "pb": 6.868,
      "evEbitdaTTM": 38.0844
    },
    {
      "date": "2026-10-11",
      "roeTTM": -10.76,
      "roicTTM": -7.42,
      "psTTM": 9.8285,
      "pb": 6.4031,
      "evEbitdaTTM": 35.6582
    },
    {
      "date": "2026-10-12",
      "roeTTM": -10.76,
      "roicTTM": -7.42,
      "psTTM": 9.7043,
      "pb": 6.3222,
      "evEbitdaTTM": 35.2359
    },
    {
      "date": "2026-10-13",
      "roeTTM": -10.76,
      "roicTTM": -7.42,
      "psTTM": 9.7043,
      "pb": 6.3222,
      "evEbitdaTTM": 35.2359
    },
    {
      "date": "2026-10-14",
      "roeTTM": -10.76,
      "roicTTM": -7.42,
      "psTTM": 9.4021,
      "pb": 6.1253,
      "evEbitdaTTM": 34.2087
    },
    {
      "date": "2026-10-15",
      "roeTTM": -10.76,
      "roicTTM": -7.42,
      "psTTM": 9.4021,
      "pb": 6.1253,
      "evEbitdaTTM": 34.2087
    },
    {
      "date": "2026-10-16",
      "roeTTM": -10.76,
      "roicTTM": -7.42,
      "psTTM": 9.2131,
      "pb": 6.0021,
      "evEbitdaTTM": 33.5659
    },
    {
      "date": "2026-10-17",
      "roeTTM": -10.76,
      "roicTTM": -7.42,
      "psTTM": 8.7098,
      "pb": 5.6743,
      "evEbitdaTTM": 31.8549
    },
    {
      "date": "2026-10-18",
      "roeTTM": -10.76,
      "roicTTM": -7.42,
      "psTTM": 8.7098,
      "pb": 5.6743,
      "evEbitdaTTM": 31.8549
    },
    {
      "date": "2026-10-19",
      "roeTTM": -10.76,
      "roicTTM": -7.42,
      "psTTM": 8.3279,
      "pb": 5.4255,
      "evEbitdaTTM": 30.5567
    },
    {
      "date": "2026-10-20",
      "roeTTM": -10.76,
      "roicTTM": -7.42,
      "psTTM": 8.3279,
      "pb": 5.4255,
      "evEbitdaTTM": 30.5567
    },
    {
      "date": "2026-10-21",
      "roeTTM": -10.76,
      "roicTTM": -7.42,
      "psTTM": 8.3279,
      "pb": 5.4255,
      "evEbitdaTTM": 30.5567
    },
    {
      "date": "2026-10-22",
      "roeTTM": -10.76,
      "roicTTM": -7.42,
      "psTTM": 8.618,
      "pb": 5.6145,
      "evEbitdaTTM": 31.543
    },
    {
      "date": "2026-10-23",
      "roeTTM": -10.76,
      "roicTTM": -7.42,
      "psTTM": 8.572,
      "pb": 5.5845,
      "evEbitdaTTM": 31.3867
    },
    {
      "date": "2026-10-24",
      "roeTTM": -10.76,
      "roicTTM": -7.42,
      "psTTM": 8.061,
      "pb": 5.2516,
      "evEbitdaTTM": 29.6492
    },
    {
      "date": "2026-10-25",
      "roeTTM": -10.76,
      "roicTTM": -7.42,
      "psTTM": 8.0577,
      "pb": 5.2495,
      "evEbitdaTTM": 29.6382
    },
    {
      "date": "2026-10-26",
      "roeTTM": -10.76,
      "roicTTM": -7.42,
      "psTTM": 8.0577,
      "pb": 5.2495,
      "evEbitdaTTM": 29.6382
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
    },
    {
      "date": "2026-09-08",
      "roeTTM": 39.86,
      "roicTTM": 33.67,
      "psTTM": 13.8674,
      "pb": 9.6352,
      "evEbitdaTTM": 21.9893
    },
    {
      "date": "2026-09-09",
      "roeTTM": 39.86,
      "roicTTM": 33.67,
      "psTTM": 13.8674,
      "pb": 9.6352,
      "evEbitdaTTM": 21.9893
    },
    {
      "date": "2026-09-10",
      "roeTTM": 39.86,
      "roicTTM": 33.67,
      "psTTM": 13.8674,
      "pb": 9.6352,
      "evEbitdaTTM": 21.9893
    },
    {
      "date": "2026-09-11",
      "roeTTM": 39.86,
      "roicTTM": 33.67,
      "psTTM": 14.3316,
      "pb": 9.9577,
      "evEbitdaTTM": 22.7518
    },
    {
      "date": "2026-09-12",
      "roeTTM": 39.86,
      "roicTTM": 33.67,
      "psTTM": 14.2155,
      "pb": 9.8771,
      "evEbitdaTTM": 22.5612
    },
    {
      "date": "2026-09-13",
      "roeTTM": 39.86,
      "roicTTM": 33.67,
      "psTTM": 14.2155,
      "pb": 9.8771,
      "evEbitdaTTM": 22.5612
    },
    {
      "date": "2026-09-14",
      "roeTTM": 39.86,
      "roicTTM": 33.67,
      "psTTM": 14.2155,
      "pb": 9.8771,
      "evEbitdaTTM": 22.5612
    },
    {
      "date": "2026-09-15",
      "roeTTM": 39.86,
      "roicTTM": 33.67,
      "psTTM": 14.2155,
      "pb": 9.8771,
      "evEbitdaTTM": 22.5612
    },
    {
      "date": "2026-09-16",
      "roeTTM": 39.86,
      "roicTTM": 33.67,
      "psTTM": 13.9835,
      "pb": 9.7158,
      "evEbitdaTTM": 22.1799
    },
    {
      "date": "2026-09-17",
      "roeTTM": 39.86,
      "roicTTM": 33.67,
      "psTTM": 13.8094,
      "pb": 9.5948,
      "evEbitdaTTM": 21.894
    },
    {
      "date": "2026-09-18",
      "roeTTM": 39.86,
      "roicTTM": 33.67,
      "psTTM": 13.8094,
      "pb": 9.5948,
      "evEbitdaTTM": 21.894
    },
    {
      "date": "2026-09-19",
      "roeTTM": 39.86,
      "roicTTM": 33.67,
      "psTTM": 13.8094,
      "pb": 9.5948,
      "evEbitdaTTM": 21.894
    },
    {
      "date": "2026-09-20",
      "roeTTM": 39.86,
      "roicTTM": 33.67,
      "psTTM": 13.8094,
      "pb": 9.5948,
      "evEbitdaTTM": 21.894
    },
    {
      "date": "2026-09-21",
      "roeTTM": 39.86,
      "roicTTM": 33.67,
      "psTTM": 14.0705,
      "pb": 9.7763,
      "evEbitdaTTM": 22.3229
    },
    {
      "date": "2026-09-22",
      "roeTTM": 39.86,
      "roicTTM": 33.67,
      "psTTM": 14.0705,
      "pb": 9.7763,
      "evEbitdaTTM": 22.3229
    },
    {
      "date": "2026-09-23",
      "roeTTM": 39.86,
      "roicTTM": 33.67,
      "psTTM": 14.2736,
      "pb": 9.9174,
      "evEbitdaTTM": 22.6565
    },
    {
      "date": "2026-09-24",
      "roeTTM": 39.86,
      "roicTTM": 33.67,
      "psTTM": 14.2736,
      "pb": 9.9174,
      "evEbitdaTTM": 22.6565
    },
    {
      "date": "2026-09-25",
      "roeTTM": 39.86,
      "roicTTM": 33.67,
      "psTTM": 14.2736,
      "pb": 9.9174,
      "evEbitdaTTM": 22.6565
    },
    {
      "date": "2026-09-26",
      "roeTTM": 39.86,
      "roicTTM": 33.67,
      "psTTM": 14.5057,
      "pb": 10.0786,
      "evEbitdaTTM": 23.0377
    },
    {
      "date": "2026-09-27",
      "roeTTM": 39.86,
      "roicTTM": 33.67,
      "psTTM": 14.3606,
      "pb": 9.9778,
      "evEbitdaTTM": 22.7995
    },
    {
      "date": "2026-09-28",
      "roeTTM": 39.86,
      "roicTTM": 33.67,
      "psTTM": 14.3606,
      "pb": 9.9778,
      "evEbitdaTTM": 22.7995
    },
    {
      "date": "2026-09-29",
      "roeTTM": 39.86,
      "roicTTM": 33.67,
      "psTTM": 14.3606,
      "pb": 9.9778,
      "evEbitdaTTM": 22.7995
    },
    {
      "date": "2026-09-30",
      "roeTTM": 39.86,
      "roicTTM": 33.67,
      "psTTM": 14.3606,
      "pb": 9.9778,
      "evEbitdaTTM": 22.7995
    },
    {
      "date": "2026-10-01",
      "roeTTM": 39.86,
      "roicTTM": 33.67,
      "psTTM": 14.3606,
      "pb": 9.9778,
      "evEbitdaTTM": 22.7995
    },
    {
      "date": "2026-10-02",
      "roeTTM": 39.86,
      "roicTTM": 33.67,
      "psTTM": 14.3606,
      "pb": 9.9778,
      "evEbitdaTTM": 22.7995
    },
    {
      "date": "2026-10-03",
      "roeTTM": 39.86,
      "roicTTM": 33.67,
      "psTTM": 14.3896,
      "pb": 9.998,
      "evEbitdaTTM": 22.8471
    },
    {
      "date": "2026-10-04",
      "roeTTM": 39.86,
      "roicTTM": 33.67,
      "psTTM": 14.5637,
      "pb": 10.1189,
      "evEbitdaTTM": 23.1331
    },
    {
      "date": "2026-10-05",
      "roeTTM": 39.86,
      "roicTTM": 33.67,
      "psTTM": 14.5637,
      "pb": 10.1189,
      "evEbitdaTTM": 23.1331
    },
    {
      "date": "2026-10-06",
      "roeTTM": 39.86,
      "roicTTM": 33.67,
      "psTTM": 14.5637,
      "pb": 10.1189,
      "evEbitdaTTM": 23.1331
    },
    {
      "date": "2026-10-07",
      "roeTTM": 39.86,
      "roicTTM": 33.67,
      "psTTM": 14.5057,
      "pb": 10.0786,
      "evEbitdaTTM": 23.0377
    },
    {
      "date": "2026-10-08",
      "roeTTM": 39.86,
      "roicTTM": 33.67,
      "psTTM": 14.9408,
      "pb": 10.381,
      "evEbitdaTTM": 23.7526
    },
    {
      "date": "2026-10-09",
      "roeTTM": 39.86,
      "roicTTM": 33.67,
      "psTTM": 14.9988,
      "pb": 10.4213,
      "evEbitdaTTM": 23.8479
    },
    {
      "date": "2026-10-10",
      "roeTTM": 39.86,
      "roicTTM": 33.67,
      "psTTM": 14.9988,
      "pb": 10.4213,
      "evEbitdaTTM": 23.8479
    },
    {
      "date": "2026-10-11",
      "roeTTM": 39.86,
      "roicTTM": 33.67,
      "psTTM": 14.7958,
      "pb": 10.2802,
      "evEbitdaTTM": 23.5143
    },
    {
      "date": "2026-10-12",
      "roeTTM": 39.86,
      "roicTTM": 33.67,
      "psTTM": 14.7958,
      "pb": 10.2802,
      "evEbitdaTTM": 23.5143
    },
    {
      "date": "2026-10-13",
      "roeTTM": 39.86,
      "roicTTM": 33.67,
      "psTTM": 14.7958,
      "pb": 10.2802,
      "evEbitdaTTM": 23.5143
    },
    {
      "date": "2026-10-14",
      "roeTTM": 39.86,
      "roicTTM": 33.67,
      "psTTM": 14.7958,
      "pb": 10.2802,
      "evEbitdaTTM": 23.5143
    },
    {
      "date": "2026-10-15",
      "roeTTM": 39.86,
      "roicTTM": 33.67,
      "psTTM": 14.7958,
      "pb": 10.2802,
      "evEbitdaTTM": 23.5143
    },
    {
      "date": "2026-10-16",
      "roeTTM": 39.86,
      "roicTTM": 33.67,
      "psTTM": 14.4476,
      "pb": 10.0383,
      "evEbitdaTTM": 22.9424
    },
    {
      "date": "2026-10-17",
      "roeTTM": 39.86,
      "roicTTM": 33.67,
      "psTTM": 14.4476,
      "pb": 10.0383,
      "evEbitdaTTM": 22.9424
    },
    {
      "date": "2026-10-18",
      "roeTTM": 39.86,
      "roicTTM": 33.67,
      "psTTM": 14.4476,
      "pb": 10.0383,
      "evEbitdaTTM": 22.9424
    },
    {
      "date": "2026-10-19",
      "roeTTM": 41.19,
      "roicTTM": 35.199999999999996,
      "psTTM": 12.7962,
      "pb": 9.042,
      "evEbitdaTTM": 19.6136
    },
    {
      "date": "2026-10-20",
      "roeTTM": 41.19,
      "roicTTM": 35.199999999999996,
      "psTTM": 12.7962,
      "pb": 9.042,
      "evEbitdaTTM": 19.6136
    },
    {
      "date": "2026-10-21",
      "roeTTM": 41.19,
      "roicTTM": 35.199999999999996,
      "psTTM": 12.7962,
      "pb": 9.042,
      "evEbitdaTTM": 19.6136
    },
    {
      "date": "2026-10-22",
      "roeTTM": 41.19,
      "roicTTM": 35.199999999999996,
      "psTTM": 12.6913,
      "pb": 8.9679,
      "evEbitdaTTM": 19.4458
    },
    {
      "date": "2026-10-23",
      "roeTTM": 41.19,
      "roicTTM": 35.199999999999996,
      "psTTM": 12.6127,
      "pb": 8.9123,
      "evEbitdaTTM": 19.32
    },
    {
      "date": "2026-10-24",
      "roeTTM": 41.19,
      "roicTTM": 35.199999999999996,
      "psTTM": 12.6913,
      "pb": 8.9679,
      "evEbitdaTTM": 19.4458
    },
    {
      "date": "2026-10-25",
      "roeTTM": 41.19,
      "roicTTM": 35.199999999999996,
      "psTTM": 12.5078,
      "pb": 8.8382,
      "evEbitdaTTM": 19.1522
    },
    {
      "date": "2026-10-26",
      "roeTTM": 41.19,
      "roicTTM": 35.199999999999996,
      "psTTM": 12.5078,
      "pb": 8.8382,
      "evEbitdaTTM": 19.1522
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
    },
    {
      "date": "2026-09-08",
      "roeTTM": 41.52,
      "roicTTM": 35.589999999999996,
      "psTTM": 15.3908,
      "pb": 20.9166,
      "evEbitdaTTM": 38.3081
    },
    {
      "date": "2026-09-09",
      "roeTTM": 41.52,
      "roicTTM": 35.589999999999996,
      "psTTM": 15.3908,
      "pb": 20.9166,
      "evEbitdaTTM": 38.3081
    },
    {
      "date": "2026-09-10",
      "roeTTM": 41.52,
      "roicTTM": 35.589999999999996,
      "psTTM": 15.3908,
      "pb": 20.9166,
      "evEbitdaTTM": 38.3081
    },
    {
      "date": "2026-09-11",
      "roeTTM": 41.52,
      "roicTTM": 35.589999999999996,
      "psTTM": 16.4136,
      "pb": 22.3068,
      "evEbitdaTTM": 40.868
    },
    {
      "date": "2026-09-12",
      "roeTTM": 41.52,
      "roicTTM": 35.589999999999996,
      "psTTM": 15.94,
      "pb": 21.6631,
      "evEbitdaTTM": 39.6828
    },
    {
      "date": "2026-09-13",
      "roeTTM": 41.52,
      "roicTTM": 35.589999999999996,
      "psTTM": 15.94,
      "pb": 21.6631,
      "evEbitdaTTM": 39.6828
    },
    {
      "date": "2026-09-14",
      "roeTTM": 41.52,
      "roicTTM": 35.589999999999996,
      "psTTM": 15.94,
      "pb": 21.6631,
      "evEbitdaTTM": 39.6828
    },
    {
      "date": "2026-09-15",
      "roeTTM": 41.52,
      "roicTTM": 35.589999999999996,
      "psTTM": 15.94,
      "pb": 21.6631,
      "evEbitdaTTM": 39.6828
    },
    {
      "date": "2026-09-16",
      "roeTTM": 41.52,
      "roicTTM": 35.589999999999996,
      "psTTM": 15.9855,
      "pb": 21.7248,
      "evEbitdaTTM": 39.7964
    },
    {
      "date": "2026-09-17",
      "roeTTM": 41.52,
      "roicTTM": 35.589999999999996,
      "psTTM": 15.0058,
      "pb": 20.3935,
      "evEbitdaTTM": 37.3448
    },
    {
      "date": "2026-09-18",
      "roeTTM": 41.52,
      "roicTTM": 35.589999999999996,
      "psTTM": 14.9085,
      "pb": 20.2612,
      "evEbitdaTTM": 37.1012
    },
    {
      "date": "2026-09-19",
      "roeTTM": 41.52,
      "roicTTM": 35.589999999999996,
      "psTTM": 14.9085,
      "pb": 20.2612,
      "evEbitdaTTM": 37.1012
    },
    {
      "date": "2026-09-20",
      "roeTTM": 41.52,
      "roicTTM": 35.589999999999996,
      "psTTM": 15.3324,
      "pb": 20.8373,
      "evEbitdaTTM": 38.162
    },
    {
      "date": "2026-09-21",
      "roeTTM": 41.52,
      "roicTTM": 35.589999999999996,
      "psTTM": 15.3324,
      "pb": 20.8373,
      "evEbitdaTTM": 38.162
    },
    {
      "date": "2026-09-22",
      "roeTTM": 41.52,
      "roicTTM": 35.589999999999996,
      "psTTM": 15.3324,
      "pb": 20.8373,
      "evEbitdaTTM": 38.162
    },
    {
      "date": "2026-09-23",
      "roeTTM": 41.52,
      "roicTTM": 35.589999999999996,
      "psTTM": 15.6351,
      "pb": 21.2487,
      "evEbitdaTTM": 38.9197
    },
    {
      "date": "2026-09-24",
      "roeTTM": 41.52,
      "roicTTM": 35.589999999999996,
      "psTTM": 15.6351,
      "pb": 21.2487,
      "evEbitdaTTM": 38.9197
    },
    {
      "date": "2026-09-25",
      "roeTTM": 41.52,
      "roicTTM": 35.589999999999996,
      "psTTM": 16.299,
      "pb": 22.151,
      "evEbitdaTTM": 40.5812
    },
    {
      "date": "2026-09-26",
      "roeTTM": 41.52,
      "roicTTM": 35.589999999999996,
      "psTTM": 16.3899,
      "pb": 22.2744,
      "evEbitdaTTM": 40.8085
    },
    {
      "date": "2026-09-27",
      "roeTTM": 41.52,
      "roicTTM": 35.589999999999996,
      "psTTM": 16.2536,
      "pb": 22.0893,
      "evEbitdaTTM": 40.4675
    },
    {
      "date": "2026-09-28",
      "roeTTM": 41.52,
      "roicTTM": 35.589999999999996,
      "psTTM": 16.2536,
      "pb": 22.0893,
      "evEbitdaTTM": 40.4675
    },
    {
      "date": "2026-09-29",
      "roeTTM": 41.52,
      "roicTTM": 35.589999999999996,
      "psTTM": 16.2536,
      "pb": 22.0893,
      "evEbitdaTTM": 40.4675
    },
    {
      "date": "2026-09-30",
      "roeTTM": 41.52,
      "roicTTM": 35.589999999999996,
      "psTTM": 16.4634,
      "pb": 22.3744,
      "evEbitdaTTM": 40.9925
    },
    {
      "date": "2026-10-01",
      "roeTTM": 41.52,
      "roicTTM": 35.589999999999996,
      "psTTM": 16.6191,
      "pb": 22.586,
      "evEbitdaTTM": 41.3821
    },
    {
      "date": "2026-10-02",
      "roeTTM": 41.52,
      "roicTTM": 35.589999999999996,
      "psTTM": 17.3133,
      "pb": 23.5294,
      "evEbitdaTTM": 43.1194
    },
    {
      "date": "2026-10-03",
      "roeTTM": 41.52,
      "roicTTM": 35.589999999999996,
      "psTTM": 17.2657,
      "pb": 23.4647,
      "evEbitdaTTM": 43.0003
    },
    {
      "date": "2026-10-04",
      "roeTTM": 41.52,
      "roicTTM": 35.589999999999996,
      "psTTM": 17.2678,
      "pb": 23.4676,
      "evEbitdaTTM": 43.0057
    },
    {
      "date": "2026-10-05",
      "roeTTM": 41.52,
      "roicTTM": 35.589999999999996,
      "psTTM": 17.2678,
      "pb": 23.4676,
      "evEbitdaTTM": 43.0057
    },
    {
      "date": "2026-10-06",
      "roeTTM": 41.52,
      "roicTTM": 35.589999999999996,
      "psTTM": 17.2678,
      "pb": 23.4676,
      "evEbitdaTTM": 43.0057
    },
    {
      "date": "2026-10-07",
      "roeTTM": 41.52,
      "roicTTM": 35.589999999999996,
      "psTTM": 17.8734,
      "pb": 24.2906,
      "evEbitdaTTM": 44.5211
    },
    {
      "date": "2026-10-08",
      "roeTTM": 41.52,
      "roicTTM": 35.589999999999996,
      "psTTM": 17.908,
      "pb": 24.3376,
      "evEbitdaTTM": 44.6077
    },
    {
      "date": "2026-10-09",
      "roeTTM": 41.52,
      "roicTTM": 35.589999999999996,
      "psTTM": 17.6939,
      "pb": 24.0466,
      "evEbitdaTTM": 44.0719
    },
    {
      "date": "2026-10-10",
      "roeTTM": 41.52,
      "roicTTM": 35.589999999999996,
      "psTTM": 17.6939,
      "pb": 24.0466,
      "evEbitdaTTM": 44.0719
    },
    {
      "date": "2026-10-11",
      "roeTTM": 41.52,
      "roicTTM": 35.589999999999996,
      "psTTM": 17.6312,
      "pb": 23.9614,
      "evEbitdaTTM": 43.915
    },
    {
      "date": "2026-10-12",
      "roeTTM": 41.52,
      "roicTTM": 35.589999999999996,
      "psTTM": 17.6312,
      "pb": 23.9614,
      "evEbitdaTTM": 43.915
    },
    {
      "date": "2026-10-13",
      "roeTTM": 41.52,
      "roicTTM": 35.589999999999996,
      "psTTM": 17.6312,
      "pb": 23.9614,
      "evEbitdaTTM": 43.915
    },
    {
      "date": "2026-10-14",
      "roeTTM": 41.52,
      "roicTTM": 35.589999999999996,
      "psTTM": 17.3176,
      "pb": 23.5352,
      "evEbitdaTTM": 43.1302
    },
    {
      "date": "2026-10-15",
      "roeTTM": 41.52,
      "roicTTM": 35.589999999999996,
      "psTTM": 17.3176,
      "pb": 23.5352,
      "evEbitdaTTM": 43.1302
    },
    {
      "date": "2026-10-16",
      "roeTTM": 41.52,
      "roicTTM": 35.589999999999996,
      "psTTM": 16.3228,
      "pb": 22.1833,
      "evEbitdaTTM": 40.6407
    },
    {
      "date": "2026-10-17",
      "roeTTM": 41.52,
      "roicTTM": 35.589999999999996,
      "psTTM": 16.5239,
      "pb": 22.4566,
      "evEbitdaTTM": 41.144
    },
    {
      "date": "2026-10-18",
      "roeTTM": 41.52,
      "roicTTM": 35.589999999999996,
      "psTTM": 16.5239,
      "pb": 22.4566,
      "evEbitdaTTM": 41.144
    },
    {
      "date": "2026-10-19",
      "roeTTM": 41.52,
      "roicTTM": 35.589999999999996,
      "psTTM": 15.8319,
      "pb": 21.5162,
      "evEbitdaTTM": 39.4122
    },
    {
      "date": "2026-10-20",
      "roeTTM": 41.52,
      "roicTTM": 35.589999999999996,
      "psTTM": 15.8319,
      "pb": 21.5162,
      "evEbitdaTTM": 39.4122
    },
    {
      "date": "2026-10-21",
      "roeTTM": 41.52,
      "roicTTM": 35.589999999999996,
      "psTTM": 15.8319,
      "pb": 21.5162,
      "evEbitdaTTM": 39.4122
    },
    {
      "date": "2026-10-22",
      "roeTTM": 41.52,
      "roicTTM": 35.589999999999996,
      "psTTM": 16.1758,
      "pb": 21.9835,
      "evEbitdaTTM": 40.2727
    },
    {
      "date": "2026-10-23",
      "roeTTM": 41.52,
      "roicTTM": 35.589999999999996,
      "psTTM": 15.7368,
      "pb": 21.3869,
      "evEbitdaTTM": 39.174
    },
    {
      "date": "2026-10-24",
      "roeTTM": 41.52,
      "roicTTM": 35.589999999999996,
      "psTTM": 16.152,
      "pb": 21.9511,
      "evEbitdaTTM": 40.2131
    },
    {
      "date": "2026-10-25",
      "roeTTM": 41.52,
      "roicTTM": 35.589999999999996,
      "psTTM": 15.3497,
      "pb": 20.8608,
      "evEbitdaTTM": 38.2053
    },
    {
      "date": "2026-10-26",
      "roeTTM": 41.52,
      "roicTTM": 35.589999999999996,
      "psTTM": 15.3497,
      "pb": 20.8608,
      "evEbitdaTTM": 38.2053
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
    },
    {
      "date": "2026-09-08",
      "roeTTM": 40.44,
      "roicTTM": 31.47,
      "psTTM": 11.7021,
      "pb": 14.0817,
      "evEbitdaTTM": 37.2739
    },
    {
      "date": "2026-09-09",
      "roeTTM": 40.44,
      "roicTTM": 31.47,
      "psTTM": 11.7021,
      "pb": 14.0817,
      "evEbitdaTTM": 37.2739
    },
    {
      "date": "2026-09-10",
      "roeTTM": 40.44,
      "roicTTM": 31.47,
      "psTTM": 11.7021,
      "pb": 14.0817,
      "evEbitdaTTM": 37.2739
    },
    {
      "date": "2026-09-11",
      "roeTTM": 40.44,
      "roicTTM": 31.47,
      "psTTM": 12.0802,
      "pb": 14.5367,
      "evEbitdaTTM": 38.4801
    },
    {
      "date": "2026-09-12",
      "roeTTM": 40.44,
      "roicTTM": 31.47,
      "psTTM": 11.6841,
      "pb": 14.06,
      "evEbitdaTTM": 37.2164
    },
    {
      "date": "2026-09-13",
      "roeTTM": 40.44,
      "roicTTM": 31.47,
      "psTTM": 11.6841,
      "pb": 14.06,
      "evEbitdaTTM": 37.2164
    },
    {
      "date": "2026-09-14",
      "roeTTM": 40.44,
      "roicTTM": 31.47,
      "psTTM": 11.7479,
      "pb": 14.1368,
      "evEbitdaTTM": 37.42
    },
    {
      "date": "2026-09-15",
      "roeTTM": 40.44,
      "roicTTM": 31.47,
      "psTTM": 11.7479,
      "pb": 14.1368,
      "evEbitdaTTM": 37.42
    },
    {
      "date": "2026-09-16",
      "roeTTM": 40.44,
      "roicTTM": 31.47,
      "psTTM": 10.9043,
      "pb": 13.1216,
      "evEbitdaTTM": 34.7292
    },
    {
      "date": "2026-09-17",
      "roeTTM": 40.44,
      "roicTTM": 31.47,
      "psTTM": 10.797,
      "pb": 12.9925,
      "evEbitdaTTM": 34.3869
    },
    {
      "date": "2026-09-18",
      "roeTTM": 40.44,
      "roicTTM": 31.47,
      "psTTM": 10.896,
      "pb": 13.1117,
      "evEbitdaTTM": 34.703
    },
    {
      "date": "2026-09-19",
      "roeTTM": 40.44,
      "roicTTM": 31.47,
      "psTTM": 10.896,
      "pb": 13.1117,
      "evEbitdaTTM": 34.703
    },
    {
      "date": "2026-09-20",
      "roeTTM": 40.44,
      "roicTTM": 31.47,
      "psTTM": 11.1986,
      "pb": 13.4758,
      "evEbitdaTTM": 35.6679
    },
    {
      "date": "2026-09-21",
      "roeTTM": 40.44,
      "roicTTM": 31.47,
      "psTTM": 11.4411,
      "pb": 13.7676,
      "evEbitdaTTM": 36.4415
    },
    {
      "date": "2026-09-22",
      "roeTTM": 40.44,
      "roicTTM": 31.47,
      "psTTM": 11.4411,
      "pb": 13.7676,
      "evEbitdaTTM": 36.4415
    },
    {
      "date": "2026-09-23",
      "roeTTM": 40.44,
      "roicTTM": 31.47,
      "psTTM": 11.7108,
      "pb": 14.0922,
      "evEbitdaTTM": 37.3018
    },
    {
      "date": "2026-09-24",
      "roeTTM": 40.44,
      "roicTTM": 31.47,
      "psTTM": 11.7108,
      "pb": 14.0922,
      "evEbitdaTTM": 37.3018
    },
    {
      "date": "2026-09-25",
      "roeTTM": 40.44,
      "roicTTM": 31.47,
      "psTTM": 12.1589,
      "pb": 14.6314,
      "evEbitdaTTM": 38.7309
    },
    {
      "date": "2026-09-26",
      "roeTTM": 40.44,
      "roicTTM": 31.47,
      "psTTM": 11.9556,
      "pb": 14.3867,
      "evEbitdaTTM": 38.0824
    },
    {
      "date": "2026-09-27",
      "roeTTM": 40.44,
      "roicTTM": 31.47,
      "psTTM": 12.4291,
      "pb": 14.9565,
      "evEbitdaTTM": 39.5928
    },
    {
      "date": "2026-09-28",
      "roeTTM": 40.44,
      "roicTTM": 31.47,
      "psTTM": 12.4816,
      "pb": 15.0197,
      "evEbitdaTTM": 39.7602
    },
    {
      "date": "2026-09-29",
      "roeTTM": 40.44,
      "roicTTM": 31.47,
      "psTTM": 12.4816,
      "pb": 15.0197,
      "evEbitdaTTM": 39.7602
    },
    {
      "date": "2026-09-30",
      "roeTTM": 40.44,
      "roicTTM": 31.47,
      "psTTM": 12.4211,
      "pb": 14.9469,
      "evEbitdaTTM": 39.5673
    },
    {
      "date": "2026-10-01",
      "roeTTM": 40.44,
      "roicTTM": 31.47,
      "psTTM": 13.0915,
      "pb": 15.7537,
      "evEbitdaTTM": 41.7057
    },
    {
      "date": "2026-10-02",
      "roeTTM": 40.44,
      "roicTTM": 31.47,
      "psTTM": 13.2435,
      "pb": 15.9365,
      "evEbitdaTTM": 42.1903
    },
    {
      "date": "2026-10-03",
      "roeTTM": 40.44,
      "roicTTM": 31.47,
      "psTTM": 13.5522,
      "pb": 16.308,
      "evEbitdaTTM": 43.1749
    },
    {
      "date": "2026-10-04",
      "roeTTM": 40.44,
      "roicTTM": 31.47,
      "psTTM": 14.018,
      "pb": 16.8685,
      "evEbitdaTTM": 44.6607
    },
    {
      "date": "2026-10-05",
      "roeTTM": 40.44,
      "roicTTM": 31.47,
      "psTTM": 14.018,
      "pb": 16.8685,
      "evEbitdaTTM": 44.6607
    },
    {
      "date": "2026-10-06",
      "roeTTM": 40.44,
      "roicTTM": 31.47,
      "psTTM": 13.8981,
      "pb": 16.7242,
      "evEbitdaTTM": 44.2782
    },
    {
      "date": "2026-10-07",
      "roeTTM": 40.44,
      "roicTTM": 31.47,
      "psTTM": 13.8432,
      "pb": 16.6582,
      "evEbitdaTTM": 44.1033
    },
    {
      "date": "2026-10-08",
      "roeTTM": 40.44,
      "roicTTM": 31.47,
      "psTTM": 13.9557,
      "pb": 16.7936,
      "evEbitdaTTM": 44.462
    },
    {
      "date": "2026-10-09",
      "roeTTM": 40.44,
      "roicTTM": 31.47,
      "psTTM": 13.3526,
      "pb": 16.0678,
      "evEbitdaTTM": 42.5384
    },
    {
      "date": "2026-10-10",
      "roeTTM": 40.44,
      "roicTTM": 31.47,
      "psTTM": 13.3526,
      "pb": 16.0678,
      "evEbitdaTTM": 42.5384
    },
    {
      "date": "2026-10-11",
      "roeTTM": 40.44,
      "roicTTM": 31.47,
      "psTTM": 13.1139,
      "pb": 15.7806,
      "evEbitdaTTM": 41.777
    },
    {
      "date": "2026-10-12",
      "roeTTM": 40.44,
      "roicTTM": 31.47,
      "psTTM": 13.0485,
      "pb": 15.7019,
      "evEbitdaTTM": 41.5685
    },
    {
      "date": "2026-10-13",
      "roeTTM": 40.44,
      "roicTTM": 31.47,
      "psTTM": 13.0485,
      "pb": 15.7019,
      "evEbitdaTTM": 41.5685
    },
    {
      "date": "2026-10-14",
      "roeTTM": 40.44,
      "roicTTM": 31.47,
      "psTTM": 13.0485,
      "pb": 15.7019,
      "evEbitdaTTM": 41.5685
    },
    {
      "date": "2026-10-15",
      "roeTTM": 40.44,
      "roicTTM": 31.47,
      "psTTM": 13.0485,
      "pb": 15.7019,
      "evEbitdaTTM": 41.5685
    },
    {
      "date": "2026-10-16",
      "roeTTM": 40.44,
      "roicTTM": 31.47,
      "psTTM": 11.6802,
      "pb": 14.0553,
      "evEbitdaTTM": 37.2041
    },
    {
      "date": "2026-10-17",
      "roeTTM": 40.44,
      "roicTTM": 31.47,
      "psTTM": 11.4941,
      "pb": 13.8314,
      "evEbitdaTTM": 36.6106
    },
    {
      "date": "2026-10-18",
      "roeTTM": 40.44,
      "roicTTM": 31.47,
      "psTTM": 11.4941,
      "pb": 13.8314,
      "evEbitdaTTM": 36.6106
    },
    {
      "date": "2026-10-19",
      "roeTTM": 40.44,
      "roicTTM": 31.47,
      "psTTM": 10.5332,
      "pb": 12.6751,
      "evEbitdaTTM": 33.5456
    },
    {
      "date": "2026-10-20",
      "roeTTM": 40.44,
      "roicTTM": 31.47,
      "psTTM": 10.5332,
      "pb": 12.6751,
      "evEbitdaTTM": 33.5456
    },
    {
      "date": "2026-10-21",
      "roeTTM": 40.44,
      "roicTTM": 31.47,
      "psTTM": 10.5332,
      "pb": 12.6751,
      "evEbitdaTTM": 33.5456
    },
    {
      "date": "2026-10-22",
      "roeTTM": 40.44,
      "roicTTM": 31.47,
      "psTTM": 10.6315,
      "pb": 12.7934,
      "evEbitdaTTM": 33.8591
    },
    {
      "date": "2026-10-23",
      "roeTTM": 40.44,
      "roicTTM": 31.47,
      "psTTM": 10.5468,
      "pb": 12.6915,
      "evEbitdaTTM": 33.5891
    },
    {
      "date": "2026-10-24",
      "roeTTM": 40.44,
      "roicTTM": 31.47,
      "psTTM": 10.5242,
      "pb": 12.6642,
      "evEbitdaTTM": 33.5168
    },
    {
      "date": "2026-10-25",
      "roeTTM": 40.44,
      "roicTTM": 31.47,
      "psTTM": 9.7426,
      "pb": 11.7237,
      "evEbitdaTTM": 31.0239
    },
    {
      "date": "2026-10-26",
      "roeTTM": 40.44,
      "roicTTM": 31.47,
      "psTTM": 9.7426,
      "pb": 11.7237,
      "evEbitdaTTM": 31.0239
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
    },
    {
      "date": "2026-09-08",
      "roeTTM": 66.97,
      "roicTTM": 48.57,
      "psTTM": 16.5701,
      "pb": 30.8693,
      "evEbitdaTTM": 44.3363
    },
    {
      "date": "2026-09-09",
      "roeTTM": 66.97,
      "roicTTM": 48.57,
      "psTTM": 16.5701,
      "pb": 30.8693,
      "evEbitdaTTM": 44.3363
    },
    {
      "date": "2026-09-10",
      "roeTTM": 66.97,
      "roicTTM": 48.57,
      "psTTM": 16.5701,
      "pb": 30.8693,
      "evEbitdaTTM": 44.3363
    },
    {
      "date": "2026-09-11",
      "roeTTM": 66.97,
      "roicTTM": 48.57,
      "psTTM": 17.1071,
      "pb": 31.8697,
      "evEbitdaTTM": 45.78
    },
    {
      "date": "2026-09-12",
      "roeTTM": 66.97,
      "roicTTM": 48.57,
      "psTTM": 16.2179,
      "pb": 30.2131,
      "evEbitdaTTM": 43.3892
    },
    {
      "date": "2026-09-13",
      "roeTTM": 66.97,
      "roicTTM": 48.57,
      "psTTM": 16.2179,
      "pb": 30.2131,
      "evEbitdaTTM": 43.3892
    },
    {
      "date": "2026-09-14",
      "roeTTM": 66.97,
      "roicTTM": 48.57,
      "psTTM": 16.0622,
      "pb": 29.9231,
      "evEbitdaTTM": 42.9708
    },
    {
      "date": "2026-09-15",
      "roeTTM": 66.97,
      "roicTTM": 48.57,
      "psTTM": 16.0622,
      "pb": 29.9231,
      "evEbitdaTTM": 42.9708
    },
    {
      "date": "2026-09-16",
      "roeTTM": 66.97,
      "roicTTM": 48.57,
      "psTTM": 14.8827,
      "pb": 27.7257,
      "evEbitdaTTM": 39.7995
    },
    {
      "date": "2026-09-17",
      "roeTTM": 66.97,
      "roicTTM": 48.57,
      "psTTM": 14.4136,
      "pb": 26.8517,
      "evEbitdaTTM": 38.5382
    },
    {
      "date": "2026-09-18",
      "roeTTM": 66.97,
      "roicTTM": 48.57,
      "psTTM": 14.5655,
      "pb": 27.1347,
      "evEbitdaTTM": 38.9466
    },
    {
      "date": "2026-09-19",
      "roeTTM": 66.97,
      "roicTTM": 48.57,
      "psTTM": 14.5655,
      "pb": 27.1347,
      "evEbitdaTTM": 38.9466
    },
    {
      "date": "2026-09-20",
      "roeTTM": 66.97,
      "roicTTM": 48.57,
      "psTTM": 15.2091,
      "pb": 28.3338,
      "evEbitdaTTM": 40.677
    },
    {
      "date": "2026-09-21",
      "roeTTM": 66.97,
      "roicTTM": 48.57,
      "psTTM": 15.5177,
      "pb": 28.9087,
      "evEbitdaTTM": 41.5068
    },
    {
      "date": "2026-09-22",
      "roeTTM": 66.97,
      "roicTTM": 48.57,
      "psTTM": 15.5177,
      "pb": 28.9087,
      "evEbitdaTTM": 41.5068
    },
    {
      "date": "2026-09-23",
      "roeTTM": 66.97,
      "roicTTM": 48.57,
      "psTTM": 15.7741,
      "pb": 29.3863,
      "evEbitdaTTM": 42.196
    },
    {
      "date": "2026-09-24",
      "roeTTM": 66.97,
      "roicTTM": 48.57,
      "psTTM": 15.7741,
      "pb": 29.3863,
      "evEbitdaTTM": 42.196
    },
    {
      "date": "2026-09-25",
      "roeTTM": 66.97,
      "roicTTM": 48.57,
      "psTTM": 16.3488,
      "pb": 30.4569,
      "evEbitdaTTM": 43.7411
    },
    {
      "date": "2026-09-26",
      "roeTTM": 66.97,
      "roicTTM": 48.57,
      "psTTM": 16.2534,
      "pb": 30.2793,
      "evEbitdaTTM": 43.4848
    },
    {
      "date": "2026-09-27",
      "roeTTM": 66.97,
      "roicTTM": 48.57,
      "psTTM": 16.7807,
      "pb": 31.2617,
      "evEbitdaTTM": 44.9025
    },
    {
      "date": "2026-09-28",
      "roeTTM": 66.97,
      "roicTTM": 48.57,
      "psTTM": 16.9773,
      "pb": 31.6279,
      "evEbitdaTTM": 45.431
    },
    {
      "date": "2026-09-29",
      "roeTTM": 66.97,
      "roicTTM": 48.57,
      "psTTM": 16.9773,
      "pb": 31.6279,
      "evEbitdaTTM": 45.431
    },
    {
      "date": "2026-09-30",
      "roeTTM": 66.97,
      "roicTTM": 48.57,
      "psTTM": 16.9572,
      "pb": 31.5904,
      "evEbitdaTTM": 45.3769
    },
    {
      "date": "2026-10-01",
      "roeTTM": 66.97,
      "roicTTM": 48.57,
      "psTTM": 17.6388,
      "pb": 32.8603,
      "evEbitdaTTM": 47.2095
    },
    {
      "date": "2026-10-02",
      "roeTTM": 66.97,
      "roicTTM": 48.57,
      "psTTM": 17.6423,
      "pb": 32.8668,
      "evEbitdaTTM": 47.2189
    },
    {
      "date": "2026-10-03",
      "roeTTM": 66.97,
      "roicTTM": 48.57,
      "psTTM": 18.132,
      "pb": 33.7789,
      "evEbitdaTTM": 48.5353
    },
    {
      "date": "2026-10-04",
      "roeTTM": 66.97,
      "roicTTM": 48.57,
      "psTTM": 18.829,
      "pb": 35.0774,
      "evEbitdaTTM": 50.4093
    },
    {
      "date": "2026-10-05",
      "roeTTM": 66.97,
      "roicTTM": 48.57,
      "psTTM": 18.829,
      "pb": 35.0774,
      "evEbitdaTTM": 50.4093
    },
    {
      "date": "2026-10-06",
      "roeTTM": 66.97,
      "roicTTM": 48.57,
      "psTTM": 18.7175,
      "pb": 34.8697,
      "evEbitdaTTM": 50.1095
    },
    {
      "date": "2026-10-07",
      "roeTTM": 66.97,
      "roicTTM": 48.57,
      "psTTM": 18.6124,
      "pb": 34.674,
      "evEbitdaTTM": 49.8271
    },
    {
      "date": "2026-10-08",
      "roeTTM": 66.97,
      "roicTTM": 48.57,
      "psTTM": 18.6264,
      "pb": 34.7001,
      "evEbitdaTTM": 49.8648
    },
    {
      "date": "2026-10-09",
      "roeTTM": 66.97,
      "roicTTM": 48.57,
      "psTTM": 17.4657,
      "pb": 32.5376,
      "evEbitdaTTM": 46.7439
    },
    {
      "date": "2026-10-10",
      "roeTTM": 66.97,
      "roicTTM": 48.57,
      "psTTM": 17.4657,
      "pb": 32.5376,
      "evEbitdaTTM": 46.7439
    },
    {
      "date": "2026-10-11",
      "roeTTM": 66.97,
      "roicTTM": 48.57,
      "psTTM": 17.2685,
      "pb": 32.1704,
      "evEbitdaTTM": 46.2139
    },
    {
      "date": "2026-10-12",
      "roeTTM": 66.97,
      "roicTTM": 48.57,
      "psTTM": 17.1743,
      "pb": 31.9948,
      "evEbitdaTTM": 45.9605
    },
    {
      "date": "2026-10-13",
      "roeTTM": 66.97,
      "roicTTM": 48.57,
      "psTTM": 17.1743,
      "pb": 31.9948,
      "evEbitdaTTM": 45.9605
    },
    {
      "date": "2026-10-14",
      "roeTTM": 66.97,
      "roicTTM": 48.57,
      "psTTM": 16.6442,
      "pb": 31.0073,
      "evEbitdaTTM": 44.5355
    },
    {
      "date": "2026-10-15",
      "roeTTM": 66.97,
      "roicTTM": 48.57,
      "psTTM": 16.6442,
      "pb": 31.0073,
      "evEbitdaTTM": 44.5355
    },
    {
      "date": "2026-10-16",
      "roeTTM": 66.97,
      "roicTTM": 48.57,
      "psTTM": 15.7156,
      "pb": 29.2774,
      "evEbitdaTTM": 42.0388
    },
    {
      "date": "2026-10-17",
      "roeTTM": 66.97,
      "roicTTM": 48.57,
      "psTTM": 14.6254,
      "pb": 27.2463,
      "evEbitdaTTM": 39.1077
    },
    {
      "date": "2026-10-18",
      "roeTTM": 66.97,
      "roicTTM": 48.57,
      "psTTM": 14.6254,
      "pb": 27.2463,
      "evEbitdaTTM": 39.1077
    },
    {
      "date": "2026-10-19",
      "roeTTM": 66.97,
      "roicTTM": 48.57,
      "psTTM": 14.2171,
      "pb": 26.4857,
      "evEbitdaTTM": 38.0099
    },
    {
      "date": "2026-10-20",
      "roeTTM": 66.97,
      "roicTTM": 48.57,
      "psTTM": 14.2171,
      "pb": 26.4857,
      "evEbitdaTTM": 38.0099
    },
    {
      "date": "2026-10-21",
      "roeTTM": 66.97,
      "roicTTM": 48.57,
      "psTTM": 14.2171,
      "pb": 26.4857,
      "evEbitdaTTM": 38.0099
    },
    {
      "date": "2026-10-22",
      "roeTTM": 66.97,
      "roicTTM": 48.57,
      "psTTM": 14.0668,
      "pb": 26.2057,
      "evEbitdaTTM": 37.6059
    },
    {
      "date": "2026-10-23",
      "roeTTM": 66.97,
      "roicTTM": 48.57,
      "psTTM": 14.32,
      "pb": 26.6774,
      "evEbitdaTTM": 38.2865
    },
    {
      "date": "2026-10-24",
      "roeTTM": 66.97,
      "roicTTM": 48.57,
      "psTTM": 14.0485,
      "pb": 26.1716,
      "evEbitdaTTM": 37.5567
    },
    {
      "date": "2026-10-25",
      "roeTTM": 71.75,
      "roicTTM": 53.82,
      "psTTM": 10.9026,
      "pb": 20.4812,
      "evEbitdaTTM": 27.7925
    },
    {
      "date": "2026-10-26",
      "roeTTM": 71.75,
      "roicTTM": 53.82,
      "psTTM": 10.9026,
      "pb": 20.4812,
      "evEbitdaTTM": 27.7925
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
    },
    {
      "date": "2026-09-08",
      "roeTTM": 85.38,
      "roicTTM": 41.85,
      "psTTM": 17.8575,
      "pb": 38.1893,
      "evEbitdaTTM": 40.6723
    },
    {
      "date": "2026-09-09",
      "roeTTM": 85.38,
      "roicTTM": 41.85,
      "psTTM": 17.8575,
      "pb": 38.1893,
      "evEbitdaTTM": 40.6723
    },
    {
      "date": "2026-09-10",
      "roeTTM": 85.38,
      "roicTTM": 41.85,
      "psTTM": 17.8575,
      "pb": 38.1893,
      "evEbitdaTTM": 40.6723
    },
    {
      "date": "2026-09-11",
      "roeTTM": 85.38,
      "roicTTM": 41.85,
      "psTTM": 17.5198,
      "pb": 37.4671,
      "evEbitdaTTM": 39.9163
    },
    {
      "date": "2026-09-12",
      "roeTTM": 85.38,
      "roicTTM": 41.85,
      "psTTM": 17.3413,
      "pb": 37.0854,
      "evEbitdaTTM": 39.5168
    },
    {
      "date": "2026-09-13",
      "roeTTM": 85.38,
      "roicTTM": 41.85,
      "psTTM": 17.3413,
      "pb": 37.0854,
      "evEbitdaTTM": 39.5168
    },
    {
      "date": "2026-09-14",
      "roeTTM": 85.38,
      "roicTTM": 41.85,
      "psTTM": 17.3802,
      "pb": 37.1687,
      "evEbitdaTTM": 39.604
    },
    {
      "date": "2026-09-15",
      "roeTTM": 85.38,
      "roicTTM": 41.85,
      "psTTM": 17.3802,
      "pb": 37.1687,
      "evEbitdaTTM": 39.604
    },
    {
      "date": "2026-09-16",
      "roeTTM": 85.38,
      "roicTTM": 41.85,
      "psTTM": 17.3802,
      "pb": 37.1687,
      "evEbitdaTTM": 39.604
    },
    {
      "date": "2026-09-17",
      "roeTTM": 85.38,
      "roicTTM": 41.85,
      "psTTM": 16.269,
      "pb": 34.7922,
      "evEbitdaTTM": 37.1164
    },
    {
      "date": "2026-09-18",
      "roeTTM": 85.38,
      "roicTTM": 41.85,
      "psTTM": 16.269,
      "pb": 34.7922,
      "evEbitdaTTM": 37.1164
    },
    {
      "date": "2026-09-19",
      "roeTTM": 85.38,
      "roicTTM": 41.85,
      "psTTM": 16.269,
      "pb": 34.7922,
      "evEbitdaTTM": 37.1164
    },
    {
      "date": "2026-09-20",
      "roeTTM": 85.38,
      "roicTTM": 41.85,
      "psTTM": 16.2584,
      "pb": 34.7695,
      "evEbitdaTTM": 37.0927
    },
    {
      "date": "2026-09-21",
      "roeTTM": 85.38,
      "roicTTM": 41.85,
      "psTTM": 17.0291,
      "pb": 36.4177,
      "evEbitdaTTM": 38.8179
    },
    {
      "date": "2026-09-22",
      "roeTTM": 85.38,
      "roicTTM": 41.85,
      "psTTM": 17.0291,
      "pb": 36.4177,
      "evEbitdaTTM": 38.8179
    },
    {
      "date": "2026-09-23",
      "roeTTM": 85.38,
      "roicTTM": 41.85,
      "psTTM": 17.8536,
      "pb": 38.1811,
      "evEbitdaTTM": 40.6637
    },
    {
      "date": "2026-09-24",
      "roeTTM": 85.38,
      "roicTTM": 41.85,
      "psTTM": 17.8536,
      "pb": 38.1811,
      "evEbitdaTTM": 40.6637
    },
    {
      "date": "2026-09-25",
      "roeTTM": 85.38,
      "roicTTM": 41.85,
      "psTTM": 18.0533,
      "pb": 38.608,
      "evEbitdaTTM": 41.1106
    },
    {
      "date": "2026-09-26",
      "roeTTM": 85.38,
      "roicTTM": 41.85,
      "psTTM": 17.9171,
      "pb": 38.3169,
      "evEbitdaTTM": 40.8059
    },
    {
      "date": "2026-09-27",
      "roeTTM": 85.38,
      "roicTTM": 41.85,
      "psTTM": 18.0834,
      "pb": 38.6724,
      "evEbitdaTTM": 41.178
    },
    {
      "date": "2026-09-28",
      "roeTTM": 85.38,
      "roicTTM": 41.85,
      "psTTM": 18.0594,
      "pb": 38.6211,
      "evEbitdaTTM": 41.1242
    },
    {
      "date": "2026-09-29",
      "roeTTM": 85.38,
      "roicTTM": 41.85,
      "psTTM": 18.0594,
      "pb": 38.6211,
      "evEbitdaTTM": 41.1242
    },
    {
      "date": "2026-09-30",
      "roeTTM": 85.38,
      "roicTTM": 41.85,
      "psTTM": 18.0594,
      "pb": 38.6211,
      "evEbitdaTTM": 41.1242
    },
    {
      "date": "2026-10-01",
      "roeTTM": 85.38,
      "roicTTM": 41.85,
      "psTTM": 18.858,
      "pb": 40.3289,
      "evEbitdaTTM": 42.9119
    },
    {
      "date": "2026-10-02",
      "roeTTM": 85.38,
      "roicTTM": 41.85,
      "psTTM": 18.8647,
      "pb": 40.3433,
      "evEbitdaTTM": 42.927
    },
    {
      "date": "2026-10-03",
      "roeTTM": 85.38,
      "roicTTM": 41.85,
      "psTTM": 19.2933,
      "pb": 41.2599,
      "evEbitdaTTM": 43.8864
    },
    {
      "date": "2026-10-04",
      "roeTTM": 85.38,
      "roicTTM": 41.85,
      "psTTM": 19.9093,
      "pb": 42.5773,
      "evEbitdaTTM": 45.2653
    },
    {
      "date": "2026-10-05",
      "roeTTM": 85.38,
      "roicTTM": 41.85,
      "psTTM": 19.9093,
      "pb": 42.5773,
      "evEbitdaTTM": 45.2653
    },
    {
      "date": "2026-10-06",
      "roeTTM": 85.38,
      "roicTTM": 41.85,
      "psTTM": 19.8824,
      "pb": 42.5198,
      "evEbitdaTTM": 45.2051
    },
    {
      "date": "2026-10-07",
      "roeTTM": 85.38,
      "roicTTM": 41.85,
      "psTTM": 19.8209,
      "pb": 42.3882,
      "evEbitdaTTM": 45.0674
    },
    {
      "date": "2026-10-08",
      "roeTTM": 85.38,
      "roicTTM": 41.85,
      "psTTM": 19.1487,
      "pb": 40.9506,
      "evEbitdaTTM": 43.5626
    },
    {
      "date": "2026-10-09",
      "roeTTM": 85.38,
      "roicTTM": 41.85,
      "psTTM": 18.8291,
      "pb": 40.2673,
      "evEbitdaTTM": 42.8474
    },
    {
      "date": "2026-10-10",
      "roeTTM": 85.38,
      "roicTTM": 41.85,
      "psTTM": 18.8291,
      "pb": 40.2673,
      "evEbitdaTTM": 42.8474
    },
    {
      "date": "2026-10-11",
      "roeTTM": 85.38,
      "roicTTM": 41.85,
      "psTTM": 18.7792,
      "pb": 40.1604,
      "evEbitdaTTM": 42.7355
    },
    {
      "date": "2026-10-12",
      "roeTTM": 85.38,
      "roicTTM": 41.85,
      "psTTM": 18.7945,
      "pb": 40.1933,
      "evEbitdaTTM": 42.7699
    },
    {
      "date": "2026-10-13",
      "roeTTM": 85.38,
      "roicTTM": 41.85,
      "psTTM": 18.7945,
      "pb": 40.1933,
      "evEbitdaTTM": 42.7699
    },
    {
      "date": "2026-10-14",
      "roeTTM": 85.38,
      "roicTTM": 41.85,
      "psTTM": 18.2447,
      "pb": 39.0173,
      "evEbitdaTTM": 41.539
    },
    {
      "date": "2026-10-15",
      "roeTTM": 85.38,
      "roicTTM": 41.85,
      "psTTM": 18.2447,
      "pb": 39.0173,
      "evEbitdaTTM": 41.539
    },
    {
      "date": "2026-10-16",
      "roeTTM": 85.38,
      "roicTTM": 41.85,
      "psTTM": 17.6163,
      "pb": 37.6736,
      "evEbitdaTTM": 40.1325
    },
    {
      "date": "2026-10-17",
      "roeTTM": 85.38,
      "roicTTM": 41.85,
      "psTTM": 16.7577,
      "pb": 35.8373,
      "evEbitdaTTM": 38.2104
    },
    {
      "date": "2026-10-18",
      "roeTTM": 85.38,
      "roicTTM": 41.85,
      "psTTM": 16.7577,
      "pb": 35.8373,
      "evEbitdaTTM": 38.2104
    },
    {
      "date": "2026-10-19",
      "roeTTM": 85.38,
      "roicTTM": 41.85,
      "psTTM": 15.9278,
      "pb": 34.0627,
      "evEbitdaTTM": 36.3528
    },
    {
      "date": "2026-10-20",
      "roeTTM": 85.38,
      "roicTTM": 41.85,
      "psTTM": 15.9278,
      "pb": 34.0627,
      "evEbitdaTTM": 36.3528
    },
    {
      "date": "2026-10-21",
      "roeTTM": 85.38,
      "roicTTM": 41.85,
      "psTTM": 15.9278,
      "pb": 34.0627,
      "evEbitdaTTM": 36.3528
    },
    {
      "date": "2026-10-22",
      "roeTTM": 85.38,
      "roicTTM": 41.85,
      "psTTM": 15.6837,
      "pb": 33.5406,
      "evEbitdaTTM": 35.8064
    },
    {
      "date": "2026-10-23",
      "roeTTM": 85.38,
      "roicTTM": 41.85,
      "psTTM": 15.7092,
      "pb": 33.5951,
      "evEbitdaTTM": 35.8634
    },
    {
      "date": "2026-10-24",
      "roeTTM": 85.38,
      "roicTTM": 41.85,
      "psTTM": 14.1408,
      "pb": 30.241,
      "evEbitdaTTM": 32.3526
    },
    {
      "date": "2026-10-25",
      "roeTTM": 85.38,
      "roicTTM": 41.85,
      "psTTM": 13.9794,
      "pb": 29.8958,
      "evEbitdaTTM": 31.9912
    },
    {
      "date": "2026-10-26",
      "roeTTM": 85.38,
      "roicTTM": 41.85,
      "psTTM": 13.9794,
      "pb": 29.8958,
      "evEbitdaTTM": 31.9912
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
    },
    {
      "date": "2026-09-08",
      "roeTTM": 70.55,
      "roicTTM": 61.480000000000004,
      "psTTM": 12.7183,
      "pb": 11.3988,
      "evEbitdaTTM": 16.5391
    },
    {
      "date": "2026-09-09",
      "roeTTM": 70.55,
      "roicTTM": 61.480000000000004,
      "psTTM": 12.7183,
      "pb": 11.3988,
      "evEbitdaTTM": 16.5391
    },
    {
      "date": "2026-09-10",
      "roeTTM": 70.55,
      "roicTTM": 61.480000000000004,
      "psTTM": 12.7183,
      "pb": 11.3988,
      "evEbitdaTTM": 16.5391
    },
    {
      "date": "2026-09-11",
      "roeTTM": 70.55,
      "roicTTM": 61.480000000000004,
      "psTTM": 12.7961,
      "pb": 11.4685,
      "evEbitdaTTM": 16.642
    },
    {
      "date": "2026-09-12",
      "roeTTM": 70.55,
      "roicTTM": 61.480000000000004,
      "psTTM": 12.2646,
      "pb": 10.9922,
      "evEbitdaTTM": 15.9391
    },
    {
      "date": "2026-09-13",
      "roeTTM": 70.55,
      "roicTTM": 61.480000000000004,
      "psTTM": 12.2646,
      "pb": 10.9922,
      "evEbitdaTTM": 15.9391
    },
    {
      "date": "2026-09-14",
      "roeTTM": 70.55,
      "roicTTM": 61.480000000000004,
      "psTTM": 12.2012,
      "pb": 10.9353,
      "evEbitdaTTM": 15.8552
    },
    {
      "date": "2026-09-15",
      "roeTTM": 70.55,
      "roicTTM": 61.480000000000004,
      "psTTM": 12.2012,
      "pb": 10.9353,
      "evEbitdaTTM": 15.8552
    },
    {
      "date": "2026-09-16",
      "roeTTM": 70.55,
      "roicTTM": 61.480000000000004,
      "psTTM": 11.5518,
      "pb": 10.3533,
      "evEbitdaTTM": 14.9962
    },
    {
      "date": "2026-09-17",
      "roeTTM": 70.55,
      "roicTTM": 61.480000000000004,
      "psTTM": 11.5718,
      "pb": 10.3712,
      "evEbitdaTTM": 15.0227
    },
    {
      "date": "2026-09-18",
      "roeTTM": 70.55,
      "roicTTM": 61.480000000000004,
      "psTTM": 11.5918,
      "pb": 10.3892,
      "evEbitdaTTM": 15.0492
    },
    {
      "date": "2026-09-19",
      "roeTTM": 70.55,
      "roicTTM": 61.480000000000004,
      "psTTM": 11.5918,
      "pb": 10.3892,
      "evEbitdaTTM": 15.0492
    },
    {
      "date": "2026-09-20",
      "roeTTM": 70.55,
      "roicTTM": 61.480000000000004,
      "psTTM": 12.2292,
      "pb": 10.9605,
      "evEbitdaTTM": 15.8922
    },
    {
      "date": "2026-09-21",
      "roeTTM": 70.55,
      "roicTTM": 61.480000000000004,
      "psTTM": 12.7084,
      "pb": 11.3899,
      "evEbitdaTTM": 16.526
    },
    {
      "date": "2026-09-22",
      "roeTTM": 70.55,
      "roicTTM": 61.480000000000004,
      "psTTM": 12.7084,
      "pb": 11.3899,
      "evEbitdaTTM": 16.526
    },
    {
      "date": "2026-09-23",
      "roeTTM": 70.55,
      "roicTTM": 61.480000000000004,
      "psTTM": 12.9994,
      "pb": 11.6507,
      "evEbitdaTTM": 16.9109
    },
    {
      "date": "2026-09-24",
      "roeTTM": 70.55,
      "roicTTM": 61.480000000000004,
      "psTTM": 12.9994,
      "pb": 11.6507,
      "evEbitdaTTM": 16.9109
    },
    {
      "date": "2026-09-25",
      "roeTTM": 70.55,
      "roicTTM": 61.480000000000004,
      "psTTM": 13.4829,
      "pb": 12.0841,
      "evEbitdaTTM": 17.5504
    },
    {
      "date": "2026-09-26",
      "roeTTM": 70.55,
      "roicTTM": 61.480000000000004,
      "psTTM": 13.2172,
      "pb": 11.8459,
      "evEbitdaTTM": 17.1989
    },
    {
      "date": "2026-09-27",
      "roeTTM": 70.55,
      "roicTTM": 61.480000000000004,
      "psTTM": 13.4832,
      "pb": 12.0844,
      "evEbitdaTTM": 17.5508
    },
    {
      "date": "2026-09-28",
      "roeTTM": 70.55,
      "roicTTM": 61.480000000000004,
      "psTTM": 13.5401,
      "pb": 12.1353,
      "evEbitdaTTM": 17.626
    },
    {
      "date": "2026-09-29",
      "roeTTM": 70.55,
      "roicTTM": 61.480000000000004,
      "psTTM": 13.5401,
      "pb": 12.1353,
      "evEbitdaTTM": 17.626
    },
    {
      "date": "2026-09-30",
      "roeTTM": 70.55,
      "roicTTM": 61.480000000000004,
      "psTTM": 13.001,
      "pb": 11.6522,
      "evEbitdaTTM": 16.913
    },
    {
      "date": "2026-10-01",
      "roeTTM": 70.55,
      "roicTTM": 61.480000000000004,
      "psTTM": 13.3407,
      "pb": 11.9566,
      "evEbitdaTTM": 17.3623
    },
    {
      "date": "2026-10-02",
      "roeTTM": 70.55,
      "roicTTM": 61.480000000000004,
      "psTTM": 13.4136,
      "pb": 12.022,
      "evEbitdaTTM": 17.4587
    },
    {
      "date": "2026-10-03",
      "roeTTM": 91.77,
      "roicTTM": 84.3,
      "psTTM": 8.872,
      "pb": 8.5392,
      "evEbitdaTTM": 10.5515
    },
    {
      "date": "2026-10-04",
      "roeTTM": 91.77,
      "roicTTM": 84.3,
      "psTTM": 9.1533,
      "pb": 8.81,
      "evEbitdaTTM": 10.8957
    },
    {
      "date": "2026-10-05",
      "roeTTM": 91.77,
      "roicTTM": 84.3,
      "psTTM": 9.1533,
      "pb": 8.81,
      "evEbitdaTTM": 10.8957
    },
    {
      "date": "2026-10-06",
      "roeTTM": 91.77,
      "roicTTM": 84.3,
      "psTTM": 9.1147,
      "pb": 8.7729,
      "evEbitdaTTM": 10.8485
    },
    {
      "date": "2026-10-07",
      "roeTTM": 91.77,
      "roicTTM": 84.3,
      "psTTM": 9.0235,
      "pb": 8.6851,
      "evEbitdaTTM": 10.7369
    },
    {
      "date": "2026-10-08",
      "roeTTM": 91.77,
      "roicTTM": 84.3,
      "psTTM": 9.0232,
      "pb": 8.6848,
      "evEbitdaTTM": 10.7366
    },
    {
      "date": "2026-10-09",
      "roeTTM": 91.77,
      "roicTTM": 84.3,
      "psTTM": 9.0966,
      "pb": 8.7555,
      "evEbitdaTTM": 10.8264
    },
    {
      "date": "2026-10-10",
      "roeTTM": 91.77,
      "roicTTM": 84.3,
      "psTTM": 9.0966,
      "pb": 8.7555,
      "evEbitdaTTM": 10.8264
    },
    {
      "date": "2026-10-11",
      "roeTTM": 91.77,
      "roicTTM": 84.3,
      "psTTM": 8.6709,
      "pb": 8.3457,
      "evEbitdaTTM": 10.3054
    },
    {
      "date": "2026-10-12",
      "roeTTM": 91.77,
      "roicTTM": 84.3,
      "psTTM": 8.7256,
      "pb": 8.3983,
      "evEbitdaTTM": 10.3724
    },
    {
      "date": "2026-10-13",
      "roeTTM": 91.77,
      "roicTTM": 84.3,
      "psTTM": 8.7256,
      "pb": 8.3983,
      "evEbitdaTTM": 10.3724
    },
    {
      "date": "2026-10-14",
      "roeTTM": 91.77,
      "roicTTM": 84.3,
      "psTTM": 8.4413,
      "pb": 8.1247,
      "evEbitdaTTM": 10.0245
    },
    {
      "date": "2026-10-15",
      "roeTTM": 91.77,
      "roicTTM": 84.3,
      "psTTM": 8.4413,
      "pb": 8.1247,
      "evEbitdaTTM": 10.0245
    },
    {
      "date": "2026-10-16",
      "roeTTM": 91.77,
      "roicTTM": 84.3,
      "psTTM": 7.8941,
      "pb": 7.5981,
      "evEbitdaTTM": 9.3549
    },
    {
      "date": "2026-10-17",
      "roeTTM": 91.77,
      "roicTTM": 84.3,
      "psTTM": 7.7381,
      "pb": 7.4479,
      "evEbitdaTTM": 9.164
    },
    {
      "date": "2026-10-18",
      "roeTTM": 91.77,
      "roicTTM": 84.3,
      "psTTM": 7.7381,
      "pb": 7.4479,
      "evEbitdaTTM": 9.164
    },
    {
      "date": "2026-10-19",
      "roeTTM": 91.77,
      "roicTTM": 84.3,
      "psTTM": 7.4657,
      "pb": 7.1857,
      "evEbitdaTTM": 8.8307
    },
    {
      "date": "2026-10-20",
      "roeTTM": 91.77,
      "roicTTM": 84.3,
      "psTTM": 7.4657,
      "pb": 7.1857,
      "evEbitdaTTM": 8.8307
    },
    {
      "date": "2026-10-21",
      "roeTTM": 91.77,
      "roicTTM": 84.3,
      "psTTM": 7.4657,
      "pb": 7.1857,
      "evEbitdaTTM": 8.8307
    },
    {
      "date": "2026-10-22",
      "roeTTM": 91.77,
      "roicTTM": 84.3,
      "psTTM": 7.7432,
      "pb": 7.4528,
      "evEbitdaTTM": 9.1703
    },
    {
      "date": "2026-10-23",
      "roeTTM": 91.77,
      "roicTTM": 84.3,
      "psTTM": 7.7599,
      "pb": 7.4688,
      "evEbitdaTTM": 9.1906
    },
    {
      "date": "2026-10-24",
      "roeTTM": 91.77,
      "roicTTM": 84.3,
      "psTTM": 7.3864,
      "pb": 7.1094,
      "evEbitdaTTM": 8.7337
    },
    {
      "date": "2026-10-25",
      "roeTTM": 91.77,
      "roicTTM": 84.3,
      "psTTM": 7.5086,
      "pb": 7.227,
      "evEbitdaTTM": 8.8832
    },
    {
      "date": "2026-10-26",
      "roeTTM": 91.77,
      "roicTTM": 84.3,
      "psTTM": 7.5086,
      "pb": 7.227,
      "evEbitdaTTM": 8.8832
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
    },
    {
      "date": "2026-09-08",
      "roeTTM": 93.13,
      "roicTTM": 89.56,
      "psTTM": 12.5824,
      "pb": 16.1902,
      "evEbitdaTTM": 19.9399
    },
    {
      "date": "2026-09-09",
      "roeTTM": 93.13,
      "roicTTM": 89.56,
      "psTTM": 12.5824,
      "pb": 16.1902,
      "evEbitdaTTM": 19.9399
    },
    {
      "date": "2026-09-10",
      "roeTTM": 93.13,
      "roicTTM": 89.56,
      "psTTM": 12.5824,
      "pb": 16.1902,
      "evEbitdaTTM": 19.9399
    },
    {
      "date": "2026-09-11",
      "roeTTM": 93.13,
      "roicTTM": 89.56,
      "psTTM": 12.5824,
      "pb": 16.1902,
      "evEbitdaTTM": 19.9399
    },
    {
      "date": "2026-09-12",
      "roeTTM": 93.13,
      "roicTTM": 89.56,
      "psTTM": 11.8112,
      "pb": 15.1979,
      "evEbitdaTTM": 18.6945
    },
    {
      "date": "2026-09-13",
      "roeTTM": 93.13,
      "roicTTM": 89.56,
      "psTTM": 11.8112,
      "pb": 15.1979,
      "evEbitdaTTM": 18.6945
    },
    {
      "date": "2026-09-14",
      "roeTTM": 93.13,
      "roicTTM": 89.56,
      "psTTM": 11.8112,
      "pb": 15.1979,
      "evEbitdaTTM": 18.6945
    },
    {
      "date": "2026-09-15",
      "roeTTM": 93.13,
      "roicTTM": 89.56,
      "psTTM": 11.8112,
      "pb": 15.1979,
      "evEbitdaTTM": 18.6945
    },
    {
      "date": "2026-09-16",
      "roeTTM": 93.13,
      "roicTTM": 89.56,
      "psTTM": 11.8112,
      "pb": 15.1979,
      "evEbitdaTTM": 18.6945
    },
    {
      "date": "2026-09-17",
      "roeTTM": 93.13,
      "roicTTM": 89.56,
      "psTTM": 11.2229,
      "pb": 14.4408,
      "evEbitdaTTM": 17.7444
    },
    {
      "date": "2026-09-18",
      "roeTTM": 93.13,
      "roicTTM": 89.56,
      "psTTM": 11.0683,
      "pb": 14.2419,
      "evEbitdaTTM": 17.4947
    },
    {
      "date": "2026-09-19",
      "roeTTM": 93.13,
      "roicTTM": 89.56,
      "psTTM": 11.0683,
      "pb": 14.2419,
      "evEbitdaTTM": 17.4947
    },
    {
      "date": "2026-09-20",
      "roeTTM": 93.13,
      "roicTTM": 89.56,
      "psTTM": 11.5405,
      "pb": 14.8496,
      "evEbitdaTTM": 18.2574
    },
    {
      "date": "2026-09-21",
      "roeTTM": 93.13,
      "roicTTM": 89.56,
      "psTTM": 12.9572,
      "pb": 16.6724,
      "evEbitdaTTM": 20.5451
    },
    {
      "date": "2026-09-22",
      "roeTTM": 93.13,
      "roicTTM": 89.56,
      "psTTM": 12.9572,
      "pb": 16.6724,
      "evEbitdaTTM": 20.5451
    },
    {
      "date": "2026-09-23",
      "roeTTM": 93.13,
      "roicTTM": 89.56,
      "psTTM": 12.7751,
      "pb": 16.4381,
      "evEbitdaTTM": 20.2511
    },
    {
      "date": "2026-09-24",
      "roeTTM": 93.13,
      "roicTTM": 89.56,
      "psTTM": 12.7751,
      "pb": 16.4381,
      "evEbitdaTTM": 20.2511
    },
    {
      "date": "2026-09-25",
      "roeTTM": 93.13,
      "roicTTM": 89.56,
      "psTTM": 13.6457,
      "pb": 17.5584,
      "evEbitdaTTM": 21.6571
    },
    {
      "date": "2026-09-26",
      "roeTTM": 93.13,
      "roicTTM": 89.56,
      "psTTM": 13.1361,
      "pb": 16.9027,
      "evEbitdaTTM": 20.8341
    },
    {
      "date": "2026-09-27",
      "roeTTM": 93.13,
      "roicTTM": 89.56,
      "psTTM": 12.6809,
      "pb": 16.3169,
      "evEbitdaTTM": 20.099
    },
    {
      "date": "2026-09-28",
      "roeTTM": 93.13,
      "roicTTM": 89.56,
      "psTTM": 12.8558,
      "pb": 16.5419,
      "evEbitdaTTM": 20.3814
    },
    {
      "date": "2026-09-29",
      "roeTTM": 93.13,
      "roicTTM": 89.56,
      "psTTM": 12.8558,
      "pb": 16.5419,
      "evEbitdaTTM": 20.3814
    },
    {
      "date": "2026-09-30",
      "roeTTM": 93.13,
      "roicTTM": 89.56,
      "psTTM": 12.8558,
      "pb": 16.5419,
      "evEbitdaTTM": 20.3814
    },
    {
      "date": "2026-10-01",
      "roeTTM": 93.13,
      "roicTTM": 89.56,
      "psTTM": 12.3864,
      "pb": 15.938,
      "evEbitdaTTM": 19.6234
    },
    {
      "date": "2026-10-02",
      "roeTTM": 93.13,
      "roicTTM": 89.56,
      "psTTM": 12.5084,
      "pb": 16.0949,
      "evEbitdaTTM": 19.8204
    },
    {
      "date": "2026-10-03",
      "roeTTM": 93.13,
      "roicTTM": 89.56,
      "psTTM": 12.5816,
      "pb": 16.1892,
      "evEbitdaTTM": 19.9387
    },
    {
      "date": "2026-10-04",
      "roeTTM": 93.13,
      "roicTTM": 89.56,
      "psTTM": 12.9273,
      "pb": 16.6339,
      "evEbitdaTTM": 20.4969
    },
    {
      "date": "2026-10-05",
      "roeTTM": 93.13,
      "roicTTM": 89.56,
      "psTTM": 12.9273,
      "pb": 16.6339,
      "evEbitdaTTM": 20.4969
    },
    {
      "date": "2026-10-06",
      "roeTTM": 93.13,
      "roicTTM": 89.56,
      "psTTM": 12.4377,
      "pb": 16.004,
      "evEbitdaTTM": 19.7063
    },
    {
      "date": "2026-10-07",
      "roeTTM": 93.13,
      "roicTTM": 89.56,
      "psTTM": 12.3233,
      "pb": 15.8567,
      "evEbitdaTTM": 19.5214
    },
    {
      "date": "2026-10-08",
      "roeTTM": 93.13,
      "roicTTM": 89.56,
      "psTTM": 12.0073,
      "pb": 15.4501,
      "evEbitdaTTM": 19.0111
    },
    {
      "date": "2026-10-09",
      "roeTTM": 93.13,
      "roicTTM": 89.56,
      "psTTM": 12.2384,
      "pb": 15.7475,
      "evEbitdaTTM": 19.3843
    },
    {
      "date": "2026-10-10",
      "roeTTM": 93.13,
      "roicTTM": 89.56,
      "psTTM": 12.2384,
      "pb": 15.7475,
      "evEbitdaTTM": 19.3843
    },
    {
      "date": "2026-10-11",
      "roeTTM": 93.13,
      "roicTTM": 89.56,
      "psTTM": 11.2908,
      "pb": 14.5283,
      "evEbitdaTTM": 17.8541
    },
    {
      "date": "2026-10-12",
      "roeTTM": 93.13,
      "roicTTM": 89.56,
      "psTTM": 11.2908,
      "pb": 14.5283,
      "evEbitdaTTM": 17.8541
    },
    {
      "date": "2026-10-13",
      "roeTTM": 93.13,
      "roicTTM": 89.56,
      "psTTM": 11.2908,
      "pb": 14.5283,
      "evEbitdaTTM": 17.8541
    },
    {
      "date": "2026-10-14",
      "roeTTM": 93.13,
      "roicTTM": 89.56,
      "psTTM": 10.6164,
      "pb": 13.6604,
      "evEbitdaTTM": 16.7649
    },
    {
      "date": "2026-10-15",
      "roeTTM": 93.13,
      "roicTTM": 89.56,
      "psTTM": 10.6164,
      "pb": 13.6604,
      "evEbitdaTTM": 16.7649
    },
    {
      "date": "2026-10-16",
      "roeTTM": 93.13,
      "roicTTM": 89.56,
      "psTTM": 10.5807,
      "pb": 13.6145,
      "evEbitdaTTM": 16.7073
    },
    {
      "date": "2026-10-17",
      "roeTTM": 93.13,
      "roicTTM": 89.56,
      "psTTM": 9.9561,
      "pb": 12.8108,
      "evEbitdaTTM": 15.6986
    },
    {
      "date": "2026-10-18",
      "roeTTM": 93.13,
      "roicTTM": 89.56,
      "psTTM": 9.9561,
      "pb": 12.8108,
      "evEbitdaTTM": 15.6986
    },
    {
      "date": "2026-10-19",
      "roeTTM": 93.13,
      "roicTTM": 89.56,
      "psTTM": 9.2742,
      "pb": 11.9334,
      "evEbitdaTTM": 14.5974
    },
    {
      "date": "2026-10-20",
      "roeTTM": 93.13,
      "roicTTM": 89.56,
      "psTTM": 9.2742,
      "pb": 11.9334,
      "evEbitdaTTM": 14.5974
    },
    {
      "date": "2026-10-21",
      "roeTTM": 93.13,
      "roicTTM": 89.56,
      "psTTM": 9.2742,
      "pb": 11.9334,
      "evEbitdaTTM": 14.5974
    },
    {
      "date": "2026-10-22",
      "roeTTM": 93.13,
      "roicTTM": 89.56,
      "psTTM": 9.7869,
      "pb": 12.5931,
      "evEbitdaTTM": 15.4253
    },
    {
      "date": "2026-10-23",
      "roeTTM": 93.13,
      "roicTTM": 89.56,
      "psTTM": 9.8376,
      "pb": 12.6583,
      "evEbitdaTTM": 15.5072
    },
    {
      "date": "2026-10-24",
      "roeTTM": 93.13,
      "roicTTM": 89.56,
      "psTTM": 9.8376,
      "pb": 12.6583,
      "evEbitdaTTM": 15.5072
    },
    {
      "date": "2026-10-25",
      "roeTTM": 93.13,
      "roicTTM": 89.56,
      "psTTM": 9.0004,
      "pb": 11.581,
      "evEbitdaTTM": 14.1551
    },
    {
      "date": "2026-10-26",
      "roeTTM": 93.13,
      "roicTTM": 89.56,
      "psTTM": 9.0004,
      "pb": 11.581,
      "evEbitdaTTM": 14.1551
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
    },
    {
      "date": "2026-09-08",
      "roeTTM": 117.8,
      "roicTTM": 85.72999999999999,
      "psTTM": 12.4719,
      "pb": 18.1775,
      "evEbitdaTTM": 37.4966
    },
    {
      "date": "2026-09-09",
      "roeTTM": 117.8,
      "roicTTM": 85.72999999999999,
      "psTTM": 12.4719,
      "pb": 18.1775,
      "evEbitdaTTM": 37.4966
    },
    {
      "date": "2026-09-10",
      "roeTTM": 117.8,
      "roicTTM": 85.72999999999999,
      "psTTM": 12.4719,
      "pb": 18.1775,
      "evEbitdaTTM": 37.4966
    },
    {
      "date": "2026-09-11",
      "roeTTM": 117.8,
      "roicTTM": 85.72999999999999,
      "psTTM": 12.7345,
      "pb": 18.5601,
      "evEbitdaTTM": 38.2885
    },
    {
      "date": "2026-09-12",
      "roeTTM": 117.8,
      "roicTTM": 85.72999999999999,
      "psTTM": 12.2977,
      "pb": 17.9235,
      "evEbitdaTTM": 36.9711
    },
    {
      "date": "2026-09-13",
      "roeTTM": 117.8,
      "roicTTM": 85.72999999999999,
      "psTTM": 12.2977,
      "pb": 17.9235,
      "evEbitdaTTM": 36.9711
    },
    {
      "date": "2026-09-14",
      "roeTTM": 117.8,
      "roicTTM": 85.72999999999999,
      "psTTM": 11.9309,
      "pb": 17.3889,
      "evEbitdaTTM": 35.8646
    },
    {
      "date": "2026-09-15",
      "roeTTM": 117.8,
      "roicTTM": 85.72999999999999,
      "psTTM": 11.9309,
      "pb": 17.3889,
      "evEbitdaTTM": 35.8646
    },
    {
      "date": "2026-09-16",
      "roeTTM": 117.8,
      "roicTTM": 85.72999999999999,
      "psTTM": 12.4798,
      "pb": 18.1889,
      "evEbitdaTTM": 37.5204
    },
    {
      "date": "2026-09-17",
      "roeTTM": 117.8,
      "roicTTM": 85.72999999999999,
      "psTTM": 12.4798,
      "pb": 18.1889,
      "evEbitdaTTM": 37.5204
    },
    {
      "date": "2026-09-18",
      "roeTTM": 117.8,
      "roicTTM": 85.72999999999999,
      "psTTM": 12.4798,
      "pb": 18.1889,
      "evEbitdaTTM": 37.5204
    },
    {
      "date": "2026-09-19",
      "roeTTM": 117.8,
      "roicTTM": 85.72999999999999,
      "psTTM": 12.4798,
      "pb": 18.1889,
      "evEbitdaTTM": 37.5204
    },
    {
      "date": "2026-09-20",
      "roeTTM": 117.8,
      "roicTTM": 85.72999999999999,
      "psTTM": 12.4798,
      "pb": 18.1889,
      "evEbitdaTTM": 37.5204
    },
    {
      "date": "2026-09-21",
      "roeTTM": 117.8,
      "roicTTM": 85.72999999999999,
      "psTTM": 12.3174,
      "pb": 17.9522,
      "evEbitdaTTM": 37.0304
    },
    {
      "date": "2026-09-22",
      "roeTTM": 117.8,
      "roicTTM": 85.72999999999999,
      "psTTM": 12.3174,
      "pb": 17.9522,
      "evEbitdaTTM": 37.0304
    },
    {
      "date": "2026-09-23",
      "roeTTM": 117.8,
      "roicTTM": 85.72999999999999,
      "psTTM": 12.3174,
      "pb": 17.9522,
      "evEbitdaTTM": 37.0304
    },
    {
      "date": "2026-09-24",
      "roeTTM": 117.8,
      "roicTTM": 85.72999999999999,
      "psTTM": 12.3174,
      "pb": 17.9522,
      "evEbitdaTTM": 37.0304
    },
    {
      "date": "2026-09-25",
      "roeTTM": 117.8,
      "roicTTM": 85.72999999999999,
      "psTTM": 12.4808,
      "pb": 18.1904,
      "evEbitdaTTM": 37.5234
    },
    {
      "date": "2026-09-26",
      "roeTTM": 117.8,
      "roicTTM": 85.72999999999999,
      "psTTM": 12.5078,
      "pb": 18.2298,
      "evEbitdaTTM": 37.6048
    },
    {
      "date": "2026-09-27",
      "roeTTM": 117.8,
      "roicTTM": 85.72999999999999,
      "psTTM": 12.0267,
      "pb": 17.5286,
      "evEbitdaTTM": 36.1537
    },
    {
      "date": "2026-09-28",
      "roeTTM": 117.8,
      "roicTTM": 85.72999999999999,
      "psTTM": 12.1386,
      "pb": 17.6917,
      "evEbitdaTTM": 36.4912
    },
    {
      "date": "2026-09-29",
      "roeTTM": 117.8,
      "roicTTM": 85.72999999999999,
      "psTTM": 12.1386,
      "pb": 17.6917,
      "evEbitdaTTM": 36.4912
    },
    {
      "date": "2026-09-30",
      "roeTTM": 117.8,
      "roicTTM": 85.72999999999999,
      "psTTM": 12.1386,
      "pb": 17.6917,
      "evEbitdaTTM": 36.4912
    },
    {
      "date": "2026-10-01",
      "roeTTM": 117.8,
      "roicTTM": 85.72999999999999,
      "psTTM": 11.7217,
      "pb": 17.084,
      "evEbitdaTTM": 35.2336
    },
    {
      "date": "2026-10-02",
      "roeTTM": 117.8,
      "roicTTM": 85.72999999999999,
      "psTTM": 11.6965,
      "pb": 17.0473,
      "evEbitdaTTM": 35.1577
    },
    {
      "date": "2026-10-03",
      "roeTTM": 117.8,
      "roicTTM": 85.72999999999999,
      "psTTM": 12.6556,
      "pb": 18.4452,
      "evEbitdaTTM": 38.0507
    },
    {
      "date": "2026-10-04",
      "roeTTM": 117.8,
      "roicTTM": 85.72999999999999,
      "psTTM": 12.5203,
      "pb": 18.2479,
      "evEbitdaTTM": 37.6425
    },
    {
      "date": "2026-10-05",
      "roeTTM": 117.8,
      "roicTTM": 85.72999999999999,
      "psTTM": 12.5203,
      "pb": 18.2479,
      "evEbitdaTTM": 37.6425
    },
    {
      "date": "2026-10-06",
      "roeTTM": 117.8,
      "roicTTM": 85.72999999999999,
      "psTTM": 10.9704,
      "pb": 15.989,
      "evEbitdaTTM": 32.9675
    },
    {
      "date": "2026-10-07",
      "roeTTM": 117.8,
      "roicTTM": 85.72999999999999,
      "psTTM": 10.9704,
      "pb": 15.989,
      "evEbitdaTTM": 32.9675
    },
    {
      "date": "2026-10-08",
      "roeTTM": 117.8,
      "roicTTM": 85.72999999999999,
      "psTTM": 11.6646,
      "pb": 17.0007,
      "evEbitdaTTM": 35.0613
    },
    {
      "date": "2026-10-09",
      "roeTTM": 117.8,
      "roicTTM": 85.72999999999999,
      "psTTM": 10.8984,
      "pb": 15.884,
      "evEbitdaTTM": 32.7502
    },
    {
      "date": "2026-10-10",
      "roeTTM": 117.8,
      "roicTTM": 85.72999999999999,
      "psTTM": 10.8984,
      "pb": 15.884,
      "evEbitdaTTM": 32.7502
    },
    {
      "date": "2026-10-11",
      "roeTTM": 117.8,
      "roicTTM": 85.72999999999999,
      "psTTM": 10.6476,
      "pb": 15.5186,
      "evEbitdaTTM": 31.9939
    },
    {
      "date": "2026-10-12",
      "roeTTM": 117.8,
      "roicTTM": 85.72999999999999,
      "psTTM": 10.6414,
      "pb": 15.5095,
      "evEbitdaTTM": 31.9751
    },
    {
      "date": "2026-10-13",
      "roeTTM": 117.8,
      "roicTTM": 85.72999999999999,
      "psTTM": 10.6414,
      "pb": 15.5095,
      "evEbitdaTTM": 31.9751
    },
    {
      "date": "2026-10-14",
      "roeTTM": 117.8,
      "roicTTM": 85.72999999999999,
      "psTTM": 10.6414,
      "pb": 15.5095,
      "evEbitdaTTM": 31.9751
    },
    {
      "date": "2026-10-15",
      "roeTTM": 117.8,
      "roicTTM": 85.72999999999999,
      "psTTM": 10.6414,
      "pb": 15.5095,
      "evEbitdaTTM": 31.9751
    },
    {
      "date": "2026-10-16",
      "roeTTM": 117.8,
      "roicTTM": 85.72999999999999,
      "psTTM": 10.1458,
      "pb": 14.7871,
      "evEbitdaTTM": 30.4801
    },
    {
      "date": "2026-10-17",
      "roeTTM": 117.8,
      "roicTTM": 85.72999999999999,
      "psTTM": 9.8309,
      "pb": 14.3282,
      "evEbitdaTTM": 29.5304
    },
    {
      "date": "2026-10-18",
      "roeTTM": 117.8,
      "roicTTM": 85.72999999999999,
      "psTTM": 9.8309,
      "pb": 14.3282,
      "evEbitdaTTM": 29.5304
    },
    {
      "date": "2026-10-19",
      "roeTTM": 117.8,
      "roicTTM": 85.72999999999999,
      "psTTM": 10.328,
      "pb": 15.0527,
      "evEbitdaTTM": 31.0298
    },
    {
      "date": "2026-10-20",
      "roeTTM": 117.8,
      "roicTTM": 85.72999999999999,
      "psTTM": 10.328,
      "pb": 15.0527,
      "evEbitdaTTM": 31.0298
    },
    {
      "date": "2026-10-21",
      "roeTTM": 117.8,
      "roicTTM": 85.72999999999999,
      "psTTM": 10.328,
      "pb": 15.0527,
      "evEbitdaTTM": 31.0298
    },
    {
      "date": "2026-10-22",
      "roeTTM": 117.8,
      "roicTTM": 85.72999999999999,
      "psTTM": 10.9651,
      "pb": 15.9813,
      "evEbitdaTTM": 32.9515
    },
    {
      "date": "2026-10-23",
      "roeTTM": 117.8,
      "roicTTM": 85.72999999999999,
      "psTTM": 11.2126,
      "pb": 16.342,
      "evEbitdaTTM": 33.698
    },
    {
      "date": "2026-10-24",
      "roeTTM": 117.8,
      "roicTTM": 85.72999999999999,
      "psTTM": 10.9451,
      "pb": 15.9521,
      "evEbitdaTTM": 32.891
    },
    {
      "date": "2026-10-25",
      "roeTTM": 113.77,
      "roicTTM": 92.55,
      "psTTM": 9.1728,
      "pb": 14.2106,
      "evEbitdaTTM": 25.4895
    },
    {
      "date": "2026-10-26",
      "roeTTM": 113.77,
      "roicTTM": 92.55,
      "psTTM": 9.1728,
      "pb": 14.2106,
      "evEbitdaTTM": 25.4895
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
    },
    {
      "date": "2026-09-08",
      "roeTTM": 30.78,
      "roicTTM": 30.78,
      "psTTM": 23.1861,
      "pb": 16.5161,
      "evEbitdaTTM": 52.1834
    },
    {
      "date": "2026-09-09",
      "roeTTM": 30.78,
      "roicTTM": 30.78,
      "psTTM": 23.1861,
      "pb": 16.5161,
      "evEbitdaTTM": 52.1834
    },
    {
      "date": "2026-09-10",
      "roeTTM": 30.78,
      "roicTTM": 30.78,
      "psTTM": 23.1861,
      "pb": 16.5161,
      "evEbitdaTTM": 52.1834
    },
    {
      "date": "2026-09-11",
      "roeTTM": 30.78,
      "roicTTM": 30.78,
      "psTTM": 23.3273,
      "pb": 16.6167,
      "evEbitdaTTM": 52.5041
    },
    {
      "date": "2026-09-12",
      "roeTTM": 30.78,
      "roicTTM": 30.78,
      "psTTM": 22.613,
      "pb": 16.1078,
      "evEbitdaTTM": 50.8812
    },
    {
      "date": "2026-09-13",
      "roeTTM": 30.78,
      "roicTTM": 30.78,
      "psTTM": 22.613,
      "pb": 16.1078,
      "evEbitdaTTM": 50.8812
    },
    {
      "date": "2026-09-14",
      "roeTTM": 30.78,
      "roicTTM": 30.78,
      "psTTM": 23.8813,
      "pb": 17.0113,
      "evEbitdaTTM": 53.7627
    },
    {
      "date": "2026-09-15",
      "roeTTM": 30.78,
      "roicTTM": 30.78,
      "psTTM": 23.8813,
      "pb": 17.0113,
      "evEbitdaTTM": 53.7627
    },
    {
      "date": "2026-09-16",
      "roeTTM": 30.78,
      "roicTTM": 30.78,
      "psTTM": 23.8813,
      "pb": 17.0113,
      "evEbitdaTTM": 53.7627
    },
    {
      "date": "2026-09-17",
      "roeTTM": 30.78,
      "roicTTM": 30.78,
      "psTTM": 23.1502,
      "pb": 16.4905,
      "evEbitdaTTM": 52.1018
    },
    {
      "date": "2026-09-18",
      "roeTTM": 30.78,
      "roicTTM": 30.78,
      "psTTM": 23.8873,
      "pb": 17.0155,
      "evEbitdaTTM": 53.7763
    },
    {
      "date": "2026-09-19",
      "roeTTM": 30.78,
      "roicTTM": 30.78,
      "psTTM": 23.8873,
      "pb": 17.0155,
      "evEbitdaTTM": 53.7763
    },
    {
      "date": "2026-09-20",
      "roeTTM": 30.78,
      "roicTTM": 30.78,
      "psTTM": 23.6934,
      "pb": 16.8775,
      "evEbitdaTTM": 53.336
    },
    {
      "date": "2026-09-21",
      "roeTTM": 30.78,
      "roicTTM": 30.78,
      "psTTM": 23.8574,
      "pb": 16.9942,
      "evEbitdaTTM": 53.7084
    },
    {
      "date": "2026-09-22",
      "roeTTM": 30.78,
      "roicTTM": 30.78,
      "psTTM": 23.8574,
      "pb": 16.9942,
      "evEbitdaTTM": 53.7084
    },
    {
      "date": "2026-09-23",
      "roeTTM": 30.78,
      "roicTTM": 30.78,
      "psTTM": 23.8574,
      "pb": 16.9942,
      "evEbitdaTTM": 53.7084
    },
    {
      "date": "2026-09-24",
      "roeTTM": 30.78,
      "roicTTM": 30.78,
      "psTTM": 23.8574,
      "pb": 16.9942,
      "evEbitdaTTM": 53.7084
    },
    {
      "date": "2026-09-25",
      "roeTTM": 30.78,
      "roicTTM": 30.78,
      "psTTM": 24.5513,
      "pb": 17.4886,
      "evEbitdaTTM": 55.285
    },
    {
      "date": "2026-09-26",
      "roeTTM": 30.78,
      "roicTTM": 30.78,
      "psTTM": 24.3455,
      "pb": 17.342,
      "evEbitdaTTM": 54.8175
    },
    {
      "date": "2026-09-27",
      "roeTTM": 30.78,
      "roicTTM": 30.78,
      "psTTM": 24.6124,
      "pb": 17.532,
      "evEbitdaTTM": 55.4237
    },
    {
      "date": "2026-09-28",
      "roeTTM": 30.78,
      "roicTTM": 30.78,
      "psTTM": 24.7141,
      "pb": 17.6045,
      "evEbitdaTTM": 55.6547
    },
    {
      "date": "2026-09-29",
      "roeTTM": 30.78,
      "roicTTM": 30.78,
      "psTTM": 24.7141,
      "pb": 17.6045,
      "evEbitdaTTM": 55.6547
    },
    {
      "date": "2026-09-30",
      "roeTTM": 30.78,
      "roicTTM": 30.78,
      "psTTM": 24.7141,
      "pb": 17.6045,
      "evEbitdaTTM": 55.6547
    },
    {
      "date": "2026-10-01",
      "roeTTM": 30.78,
      "roicTTM": 30.78,
      "psTTM": 24.519,
      "pb": 17.4656,
      "evEbitdaTTM": 55.2116
    },
    {
      "date": "2026-10-02",
      "roeTTM": 30.78,
      "roicTTM": 30.78,
      "psTTM": 24.2725,
      "pb": 17.29,
      "evEbitdaTTM": 54.6517
    },
    {
      "date": "2026-10-03",
      "roeTTM": 30.78,
      "roicTTM": 30.78,
      "psTTM": 24.3599,
      "pb": 17.3522,
      "evEbitdaTTM": 54.8501
    },
    {
      "date": "2026-10-04",
      "roeTTM": 30.78,
      "roicTTM": 30.78,
      "psTTM": 24.4676,
      "pb": 17.4289,
      "evEbitdaTTM": 55.0948
    },
    {
      "date": "2026-10-05",
      "roeTTM": 30.78,
      "roicTTM": 30.78,
      "psTTM": 24.4676,
      "pb": 17.4289,
      "evEbitdaTTM": 55.0948
    },
    {
      "date": "2026-10-06",
      "roeTTM": 30.78,
      "roicTTM": 30.78,
      "psTTM": 24.8098,
      "pb": 17.6727,
      "evEbitdaTTM": 55.8722
    },
    {
      "date": "2026-10-07",
      "roeTTM": 30.78,
      "roicTTM": 30.78,
      "psTTM": 24.8098,
      "pb": 17.6727,
      "evEbitdaTTM": 55.8722
    },
    {
      "date": "2026-10-08",
      "roeTTM": 30.78,
      "roicTTM": 30.78,
      "psTTM": 24.7559,
      "pb": 17.6343,
      "evEbitdaTTM": 55.7499
    },
    {
      "date": "2026-10-09",
      "roeTTM": 30.78,
      "roicTTM": 30.78,
      "psTTM": 25.7682,
      "pb": 18.3554,
      "evEbitdaTTM": 58.0496
    },
    {
      "date": "2026-10-10",
      "roeTTM": 30.78,
      "roicTTM": 30.78,
      "psTTM": 25.7682,
      "pb": 18.3554,
      "evEbitdaTTM": 58.0496
    },
    {
      "date": "2026-10-11",
      "roeTTM": 30.78,
      "roicTTM": 30.78,
      "psTTM": 25.2429,
      "pb": 17.9812,
      "evEbitdaTTM": 56.8563
    },
    {
      "date": "2026-10-12",
      "roeTTM": 30.78,
      "roicTTM": 30.78,
      "psTTM": 25.9333,
      "pb": 18.473,
      "evEbitdaTTM": 58.4248
    },
    {
      "date": "2026-10-13",
      "roeTTM": 30.78,
      "roicTTM": 30.78,
      "psTTM": 25.9333,
      "pb": 18.473,
      "evEbitdaTTM": 58.4248
    },
    {
      "date": "2026-10-14",
      "roeTTM": 30.78,
      "roicTTM": 30.78,
      "psTTM": 25.9333,
      "pb": 18.473,
      "evEbitdaTTM": 58.4248
    },
    {
      "date": "2026-10-15",
      "roeTTM": 30.78,
      "roicTTM": 30.78,
      "psTTM": 25.9333,
      "pb": 18.473,
      "evEbitdaTTM": 58.4248
    },
    {
      "date": "2026-10-16",
      "roeTTM": 30.78,
      "roicTTM": 30.78,
      "psTTM": 24.4712,
      "pb": 17.4315,
      "evEbitdaTTM": 55.1029
    },
    {
      "date": "2026-10-17",
      "roeTTM": 30.78,
      "roicTTM": 30.78,
      "psTTM": 23.3823,
      "pb": 16.6559,
      "evEbitdaTTM": 52.6292
    },
    {
      "date": "2026-10-18",
      "roeTTM": 30.78,
      "roicTTM": 30.78,
      "psTTM": 22.205,
      "pb": 15.8172,
      "evEbitdaTTM": 49.9543
    },
    {
      "date": "2026-10-19",
      "roeTTM": 30.78,
      "roicTTM": 30.78,
      "psTTM": 21.176,
      "pb": 15.0842,
      "evEbitdaTTM": 47.6165
    },
    {
      "date": "2026-10-20",
      "roeTTM": 30.78,
      "roicTTM": 30.78,
      "psTTM": 21.176,
      "pb": 15.0842,
      "evEbitdaTTM": 47.6165
    },
    {
      "date": "2026-10-21",
      "roeTTM": 30.78,
      "roicTTM": 30.78,
      "psTTM": 21.176,
      "pb": 15.0842,
      "evEbitdaTTM": 47.6165
    },
    {
      "date": "2026-10-22",
      "roeTTM": 30.78,
      "roicTTM": 30.78,
      "psTTM": 21.8903,
      "pb": 15.593,
      "evEbitdaTTM": 49.2393
    },
    {
      "date": "2026-10-23",
      "roeTTM": 30.78,
      "roicTTM": 30.78,
      "psTTM": 21.6797,
      "pb": 15.443,
      "evEbitdaTTM": 48.7609
    },
    {
      "date": "2026-10-24",
      "roeTTM": 30.78,
      "roicTTM": 30.78,
      "psTTM": 22.0554,
      "pb": 15.7107,
      "evEbitdaTTM": 49.6145
    },
    {
      "date": "2026-10-25",
      "roeTTM": 30.78,
      "roicTTM": 30.78,
      "psTTM": 20.4688,
      "pb": 14.5805,
      "evEbitdaTTM": 46.0099
    },
    {
      "date": "2026-10-26",
      "roeTTM": 30.78,
      "roicTTM": 30.78,
      "psTTM": 20.4688,
      "pb": 14.5805,
      "evEbitdaTTM": 46.0099
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
    },
    {
      "date": "2026-09-08",
      "roeTTM": 8.37,
      "roicTTM": 6.25,
      "psTTM": 7.7544,
      "pb": 5.0623,
      "evEbitdaTTM": 44.7478
    },
    {
      "date": "2026-09-09",
      "roeTTM": 8.37,
      "roicTTM": 6.25,
      "psTTM": 7.7544,
      "pb": 5.0623,
      "evEbitdaTTM": 44.7478
    },
    {
      "date": "2026-09-10",
      "roeTTM": 8.37,
      "roicTTM": 6.25,
      "psTTM": 7.7544,
      "pb": 5.0623,
      "evEbitdaTTM": 44.7478
    },
    {
      "date": "2026-09-11",
      "roeTTM": 8.37,
      "roicTTM": 6.25,
      "psTTM": 8.4246,
      "pb": 5.4999,
      "evEbitdaTTM": 48.476
    },
    {
      "date": "2026-09-12",
      "roeTTM": 8.37,
      "roicTTM": 6.25,
      "psTTM": 8.0656,
      "pb": 5.2655,
      "evEbitdaTTM": 46.4787
    },
    {
      "date": "2026-09-13",
      "roeTTM": 8.37,
      "roicTTM": 6.25,
      "psTTM": 8.0656,
      "pb": 5.2655,
      "evEbitdaTTM": 46.4787
    },
    {
      "date": "2026-09-14",
      "roeTTM": 8.37,
      "roicTTM": 6.25,
      "psTTM": 8.4012,
      "pb": 5.4846,
      "evEbitdaTTM": 48.3459
    },
    {
      "date": "2026-09-15",
      "roeTTM": 8.37,
      "roicTTM": 6.25,
      "psTTM": 8.4012,
      "pb": 5.4846,
      "evEbitdaTTM": 48.3459
    },
    {
      "date": "2026-09-16",
      "roeTTM": 8.37,
      "roicTTM": 6.25,
      "psTTM": 7.5974,
      "pb": 4.9598,
      "evEbitdaTTM": 43.8739
    },
    {
      "date": "2026-09-17",
      "roeTTM": 8.37,
      "roicTTM": 6.25,
      "psTTM": 7.5349,
      "pb": 4.919,
      "evEbitdaTTM": 43.5265
    },
    {
      "date": "2026-09-18",
      "roeTTM": 8.37,
      "roicTTM": 6.25,
      "psTTM": 7.5349,
      "pb": 4.919,
      "evEbitdaTTM": 43.5265
    },
    {
      "date": "2026-09-19",
      "roeTTM": 8.37,
      "roicTTM": 6.25,
      "psTTM": 7.5349,
      "pb": 4.919,
      "evEbitdaTTM": 43.5265
    },
    {
      "date": "2026-09-20",
      "roeTTM": 8.37,
      "roicTTM": 6.25,
      "psTTM": 8.0992,
      "pb": 5.2874,
      "evEbitdaTTM": 46.6654
    },
    {
      "date": "2026-09-21",
      "roeTTM": 8.37,
      "roicTTM": 6.25,
      "psTTM": 8.7311,
      "pb": 5.6999,
      "evEbitdaTTM": 50.1809
    },
    {
      "date": "2026-09-22",
      "roeTTM": 8.37,
      "roicTTM": 6.25,
      "psTTM": 8.7311,
      "pb": 5.6999,
      "evEbitdaTTM": 50.1809
    },
    {
      "date": "2026-09-23",
      "roeTTM": 8.37,
      "roicTTM": 6.25,
      "psTTM": 8.9403,
      "pb": 5.8365,
      "evEbitdaTTM": 51.3448
    },
    {
      "date": "2026-09-24",
      "roeTTM": 8.37,
      "roicTTM": 6.25,
      "psTTM": 8.9403,
      "pb": 5.8365,
      "evEbitdaTTM": 51.3448
    },
    {
      "date": "2026-09-25",
      "roeTTM": 8.37,
      "roicTTM": 6.25,
      "psTTM": 8.5394,
      "pb": 5.5748,
      "evEbitdaTTM": 49.1142
    },
    {
      "date": "2026-09-26",
      "roeTTM": 8.37,
      "roicTTM": 6.25,
      "psTTM": 8.1864,
      "pb": 5.3443,
      "evEbitdaTTM": 47.1506
    },
    {
      "date": "2026-09-27",
      "roeTTM": 8.37,
      "roicTTM": 6.25,
      "psTTM": 8.1014,
      "pb": 5.2888,
      "evEbitdaTTM": 46.6777
    },
    {
      "date": "2026-09-28",
      "roeTTM": 8.37,
      "roicTTM": 6.25,
      "psTTM": 8.1388,
      "pb": 5.3133,
      "evEbitdaTTM": 46.8858
    },
    {
      "date": "2026-09-29",
      "roeTTM": 8.37,
      "roicTTM": 6.25,
      "psTTM": 8.1388,
      "pb": 5.3133,
      "evEbitdaTTM": 46.8858
    },
    {
      "date": "2026-09-30",
      "roeTTM": 8.37,
      "roicTTM": 6.25,
      "psTTM": 7.9118,
      "pb": 5.1651,
      "evEbitdaTTM": 45.6232
    },
    {
      "date": "2026-10-01",
      "roeTTM": 8.37,
      "roicTTM": 6.25,
      "psTTM": 8.0417,
      "pb": 5.2499,
      "evEbitdaTTM": 46.3456
    },
    {
      "date": "2026-10-02",
      "roeTTM": 8.37,
      "roicTTM": 6.25,
      "psTTM": 7.8766,
      "pb": 5.1421,
      "evEbitdaTTM": 45.4273
    },
    {
      "date": "2026-10-03",
      "roeTTM": 8.37,
      "roicTTM": 6.25,
      "psTTM": 7.9026,
      "pb": 5.1591,
      "evEbitdaTTM": 45.5719
    },
    {
      "date": "2026-10-04",
      "roeTTM": 8.37,
      "roicTTM": 6.25,
      "psTTM": 8.9775,
      "pb": 5.8608,
      "evEbitdaTTM": 51.5514
    },
    {
      "date": "2026-10-05",
      "roeTTM": 8.37,
      "roicTTM": 6.25,
      "psTTM": 8.9775,
      "pb": 5.8608,
      "evEbitdaTTM": 51.5514
    },
    {
      "date": "2026-10-06",
      "roeTTM": 8.37,
      "roicTTM": 6.25,
      "psTTM": 9.2725,
      "pb": 6.0534,
      "evEbitdaTTM": 53.1929
    },
    {
      "date": "2026-10-07",
      "roeTTM": 8.37,
      "roicTTM": 6.25,
      "psTTM": 9.0878,
      "pb": 5.9328,
      "evEbitdaTTM": 52.1652
    },
    {
      "date": "2026-10-08",
      "roeTTM": 8.37,
      "roicTTM": 6.25,
      "psTTM": 9.179,
      "pb": 5.9923,
      "evEbitdaTTM": 52.6725
    },
    {
      "date": "2026-10-09",
      "roeTTM": 8.37,
      "roicTTM": 6.25,
      "psTTM": 8.8379,
      "pb": 5.7696,
      "evEbitdaTTM": 50.7747
    },
    {
      "date": "2026-10-10",
      "roeTTM": 8.37,
      "roicTTM": 6.25,
      "psTTM": 8.8379,
      "pb": 5.7696,
      "evEbitdaTTM": 50.7747
    },
    {
      "date": "2026-10-11",
      "roeTTM": 8.37,
      "roicTTM": 6.25,
      "psTTM": 8.3182,
      "pb": 5.4304,
      "evEbitdaTTM": 47.8837
    },
    {
      "date": "2026-10-12",
      "roeTTM": 8.37,
      "roicTTM": 6.25,
      "psTTM": 8.6007,
      "pb": 5.6148,
      "evEbitdaTTM": 49.4555
    },
    {
      "date": "2026-10-13",
      "roeTTM": 8.37,
      "roicTTM": 6.25,
      "psTTM": 8.6007,
      "pb": 5.6148,
      "evEbitdaTTM": 49.4555
    },
    {
      "date": "2026-10-14",
      "roeTTM": 8.37,
      "roicTTM": 6.25,
      "psTTM": 8.2227,
      "pb": 5.368,
      "evEbitdaTTM": 47.3526
    },
    {
      "date": "2026-10-15",
      "roeTTM": 8.37,
      "roicTTM": 6.25,
      "psTTM": 8.2227,
      "pb": 5.368,
      "evEbitdaTTM": 47.3526
    },
    {
      "date": "2026-10-16",
      "roeTTM": 8.37,
      "roicTTM": 6.25,
      "psTTM": 7.7022,
      "pb": 5.0283,
      "evEbitdaTTM": 44.4573
    },
    {
      "date": "2026-10-17",
      "roeTTM": 8.37,
      "roicTTM": 6.25,
      "psTTM": 6.8009,
      "pb": 4.4398,
      "evEbitdaTTM": 39.4431
    },
    {
      "date": "2026-10-18",
      "roeTTM": 8.37,
      "roicTTM": 6.25,
      "psTTM": 6.8009,
      "pb": 4.4398,
      "evEbitdaTTM": 39.4431
    },
    {
      "date": "2026-10-19",
      "roeTTM": 8.37,
      "roicTTM": 6.25,
      "psTTM": 6.4434,
      "pb": 4.2065,
      "evEbitdaTTM": 37.4546
    },
    {
      "date": "2026-10-20",
      "roeTTM": 8.37,
      "roicTTM": 6.25,
      "psTTM": 6.4434,
      "pb": 4.2065,
      "evEbitdaTTM": 37.4546
    },
    {
      "date": "2026-10-21",
      "roeTTM": 8.37,
      "roicTTM": 6.25,
      "psTTM": 6.4434,
      "pb": 4.2065,
      "evEbitdaTTM": 37.4546
    },
    {
      "date": "2026-10-22",
      "roeTTM": 8.37,
      "roicTTM": 6.25,
      "psTTM": 6.4191,
      "pb": 4.1906,
      "evEbitdaTTM": 37.3192
    },
    {
      "date": "2026-10-23",
      "roeTTM": 8.37,
      "roicTTM": 6.25,
      "psTTM": 6.4739,
      "pb": 4.2263,
      "evEbitdaTTM": 37.6239
    },
    {
      "date": "2026-10-24",
      "roeTTM": 8.37,
      "roicTTM": 6.25,
      "psTTM": 6.5715,
      "pb": 4.2901,
      "evEbitdaTTM": 38.1672
    },
    {
      "date": "2026-10-25",
      "roeTTM": 8.37,
      "roicTTM": 6.25,
      "psTTM": 5.8464,
      "pb": 3.8167,
      "evEbitdaTTM": 34.1334
    },
    {
      "date": "2026-10-26",
      "roeTTM": 8.37,
      "roicTTM": 6.25,
      "psTTM": 5.8464,
      "pb": 3.8167,
      "evEbitdaTTM": 34.1334
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
    },
    {
      "date": "2026-09-08",
      "roeTTM": -300.07,
      "roicTTM": -134.05,
      "psTTM": 26.2271,
      "pb": 17.022,
      "evEbitdaTTM": 242.9486
    },
    {
      "date": "2026-09-09",
      "roeTTM": -300.07,
      "roicTTM": -134.05,
      "psTTM": 26.2271,
      "pb": 17.022,
      "evEbitdaTTM": 242.9486
    },
    {
      "date": "2026-09-10",
      "roeTTM": -300.07,
      "roicTTM": -134.05,
      "psTTM": 26.2271,
      "pb": 17.022,
      "evEbitdaTTM": 242.9486
    },
    {
      "date": "2026-09-11",
      "roeTTM": -300.07,
      "roicTTM": -134.05,
      "psTTM": 29.9785,
      "pb": 19.4568,
      "evEbitdaTTM": 277.8781
    },
    {
      "date": "2026-09-12",
      "roeTTM": -300.07,
      "roicTTM": -134.05,
      "psTTM": 27.8202,
      "pb": 18.056,
      "evEbitdaTTM": 257.7822
    },
    {
      "date": "2026-09-13",
      "roeTTM": -300.07,
      "roicTTM": -134.05,
      "psTTM": 27.8202,
      "pb": 18.056,
      "evEbitdaTTM": 257.7822
    },
    {
      "date": "2026-09-14",
      "roeTTM": -300.07,
      "roicTTM": -134.05,
      "psTTM": 27.5894,
      "pb": 17.9062,
      "evEbitdaTTM": 255.6333
    },
    {
      "date": "2026-09-15",
      "roeTTM": -300.07,
      "roicTTM": -134.05,
      "psTTM": 27.5894,
      "pb": 17.9062,
      "evEbitdaTTM": 255.6333
    },
    {
      "date": "2026-09-16",
      "roeTTM": -300.07,
      "roicTTM": -134.05,
      "psTTM": 25.1751,
      "pb": 16.3392,
      "evEbitdaTTM": 233.1529
    },
    {
      "date": "2026-09-17",
      "roeTTM": -300.07,
      "roicTTM": -134.05,
      "psTTM": 24.9684,
      "pb": 16.2051,
      "evEbitdaTTM": 231.2283
    },
    {
      "date": "2026-09-18",
      "roeTTM": -300.07,
      "roicTTM": -134.05,
      "psTTM": 24.9684,
      "pb": 16.2051,
      "evEbitdaTTM": 231.2283
    },
    {
      "date": "2026-09-19",
      "roeTTM": -300.07,
      "roicTTM": -134.05,
      "psTTM": 24.9684,
      "pb": 16.2051,
      "evEbitdaTTM": 231.2283
    },
    {
      "date": "2026-09-20",
      "roeTTM": -300.07,
      "roicTTM": -134.05,
      "psTTM": 26.5948,
      "pb": 17.2607,
      "evEbitdaTTM": 246.3723
    },
    {
      "date": "2026-09-21",
      "roeTTM": -300.07,
      "roicTTM": -134.05,
      "psTTM": 27.7049,
      "pb": 17.9811,
      "evEbitdaTTM": 256.7084
    },
    {
      "date": "2026-09-22",
      "roeTTM": -300.07,
      "roicTTM": -134.05,
      "psTTM": 27.7049,
      "pb": 17.9811,
      "evEbitdaTTM": 256.7084
    },
    {
      "date": "2026-09-23",
      "roeTTM": -300.07,
      "roicTTM": -134.05,
      "psTTM": 28.429,
      "pb": 18.4511,
      "evEbitdaTTM": 263.4505
    },
    {
      "date": "2026-09-24",
      "roeTTM": -300.07,
      "roicTTM": -134.05,
      "psTTM": 28.429,
      "pb": 18.4511,
      "evEbitdaTTM": 263.4505
    },
    {
      "date": "2026-09-25",
      "roeTTM": -300.07,
      "roicTTM": -134.05,
      "psTTM": 27.9981,
      "pb": 18.1714,
      "evEbitdaTTM": 259.4379
    },
    {
      "date": "2026-09-26",
      "roeTTM": -300.07,
      "roicTTM": -134.05,
      "psTTM": 27.556,
      "pb": 17.8845,
      "evEbitdaTTM": 255.3214
    },
    {
      "date": "2026-09-27",
      "roeTTM": -300.07,
      "roicTTM": -134.05,
      "psTTM": 28.2244,
      "pb": 18.3183,
      "evEbitdaTTM": 261.5454
    },
    {
      "date": "2026-09-28",
      "roeTTM": -300.07,
      "roicTTM": -134.05,
      "psTTM": 28.0246,
      "pb": 18.1886,
      "evEbitdaTTM": 259.6846
    },
    {
      "date": "2026-09-29",
      "roeTTM": -300.07,
      "roicTTM": -134.05,
      "psTTM": 28.0246,
      "pb": 18.1886,
      "evEbitdaTTM": 259.6846
    },
    {
      "date": "2026-09-30",
      "roeTTM": -300.07,
      "roicTTM": -134.05,
      "psTTM": 26.5057,
      "pb": 17.2028,
      "evEbitdaTTM": 245.5424
    },
    {
      "date": "2026-10-01",
      "roeTTM": -300.07,
      "roicTTM": -134.05,
      "psTTM": 28.8987,
      "pb": 18.7559,
      "evEbitdaTTM": 267.8237
    },
    {
      "date": "2026-10-02",
      "roeTTM": -300.07,
      "roicTTM": -134.05,
      "psTTM": 28.5325,
      "pb": 18.5183,
      "evEbitdaTTM": 264.4143
    },
    {
      "date": "2026-10-03",
      "roeTTM": -300.07,
      "roicTTM": -134.05,
      "psTTM": 31.181,
      "pb": 20.2372,
      "evEbitdaTTM": 289.0747
    },
    {
      "date": "2026-10-04",
      "roeTTM": -300.07,
      "roicTTM": -134.05,
      "psTTM": 32.2313,
      "pb": 20.9189,
      "evEbitdaTTM": 298.8539
    },
    {
      "date": "2026-10-05",
      "roeTTM": -300.07,
      "roicTTM": -134.05,
      "psTTM": 32.2313,
      "pb": 20.9189,
      "evEbitdaTTM": 298.8539
    },
    {
      "date": "2026-10-06",
      "roeTTM": -300.07,
      "roicTTM": -134.05,
      "psTTM": 32.3033,
      "pb": 20.9656,
      "evEbitdaTTM": 299.5245
    },
    {
      "date": "2026-10-07",
      "roeTTM": -300.07,
      "roicTTM": -134.05,
      "psTTM": 32.5871,
      "pb": 21.1498,
      "evEbitdaTTM": 302.1668
    },
    {
      "date": "2026-10-08",
      "roeTTM": -300.07,
      "roicTTM": -134.05,
      "psTTM": 33.5705,
      "pb": 21.7881,
      "evEbitdaTTM": 311.3238
    },
    {
      "date": "2026-10-09",
      "roeTTM": -300.07,
      "roicTTM": -134.05,
      "psTTM": 33.1859,
      "pb": 21.5384,
      "evEbitdaTTM": 307.7421
    },
    {
      "date": "2026-10-10",
      "roeTTM": -300.07,
      "roicTTM": -134.05,
      "psTTM": 33.1859,
      "pb": 21.5384,
      "evEbitdaTTM": 307.7421
    },
    {
      "date": "2026-10-11",
      "roeTTM": -300.07,
      "roicTTM": -134.05,
      "psTTM": 33.5622,
      "pb": 21.7827,
      "evEbitdaTTM": 311.2465
    },
    {
      "date": "2026-10-12",
      "roeTTM": -300.07,
      "roicTTM": -134.05,
      "psTTM": 33.1603,
      "pb": 21.5218,
      "evEbitdaTTM": 307.5037
    },
    {
      "date": "2026-10-13",
      "roeTTM": -300.07,
      "roicTTM": -134.05,
      "psTTM": 33.1603,
      "pb": 21.5218,
      "evEbitdaTTM": 307.5037
    },
    {
      "date": "2026-10-14",
      "roeTTM": -300.07,
      "roicTTM": -134.05,
      "psTTM": 29.567,
      "pb": 19.1896,
      "evEbitdaTTM": 274.046
    },
    {
      "date": "2026-10-15",
      "roeTTM": -300.07,
      "roicTTM": -134.05,
      "psTTM": 29.567,
      "pb": 19.1896,
      "evEbitdaTTM": 274.046
    },
    {
      "date": "2026-10-16",
      "roeTTM": -300.07,
      "roicTTM": -134.05,
      "psTTM": 27.154,
      "pb": 17.6236,
      "evEbitdaTTM": 251.5785
    },
    {
      "date": "2026-10-17",
      "roeTTM": -300.07,
      "roicTTM": -134.05,
      "psTTM": 25.6466,
      "pb": 16.6453,
      "evEbitdaTTM": 237.5434
    },
    {
      "date": "2026-10-18",
      "roeTTM": -300.07,
      "roicTTM": -134.05,
      "psTTM": 25.6466,
      "pb": 16.6453,
      "evEbitdaTTM": 237.5434
    },
    {
      "date": "2026-10-19",
      "roeTTM": -300.07,
      "roicTTM": -134.05,
      "psTTM": 24.7684,
      "pb": 16.0753,
      "evEbitdaTTM": 229.3666
    },
    {
      "date": "2026-10-20",
      "roeTTM": -300.07,
      "roicTTM": -134.05,
      "psTTM": 24.7684,
      "pb": 16.0753,
      "evEbitdaTTM": 229.3666
    },
    {
      "date": "2026-10-21",
      "roeTTM": -300.07,
      "roicTTM": -134.05,
      "psTTM": 24.7684,
      "pb": 16.0753,
      "evEbitdaTTM": 229.3666
    },
    {
      "date": "2026-10-22",
      "roeTTM": -300.07,
      "roicTTM": -134.05,
      "psTTM": 24.8397,
      "pb": 16.1215,
      "evEbitdaTTM": 230.0298
    },
    {
      "date": "2026-10-23",
      "roeTTM": -300.07,
      "roicTTM": -134.05,
      "psTTM": 25.6698,
      "pb": 16.6603,
      "evEbitdaTTM": 237.7589
    },
    {
      "date": "2026-10-24",
      "roeTTM": -300.07,
      "roicTTM": -134.05,
      "psTTM": 22.9228,
      "pb": 14.8774,
      "evEbitdaTTM": 212.1818
    },
    {
      "date": "2026-10-25",
      "roeTTM": -300.07,
      "roicTTM": -134.05,
      "psTTM": 22.9602,
      "pb": 14.9017,
      "evEbitdaTTM": 212.5303
    },
    {
      "date": "2026-10-26",
      "roeTTM": -300.07,
      "roicTTM": -134.05,
      "psTTM": 22.9602,
      "pb": 14.9017,
      "evEbitdaTTM": 212.5303
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
    },
    {
      "date": "2026-09-08",
      "roeTTM": 83.39,
      "roicTTM": 74.29,
      "psTTM": 6.0644,
      "pb": 20.9813,
      "evEbitdaTTM": 34.0815
    },
    {
      "date": "2026-09-09",
      "roeTTM": 83.39,
      "roicTTM": 74.29,
      "psTTM": 6.0644,
      "pb": 20.9813,
      "evEbitdaTTM": 34.0815
    },
    {
      "date": "2026-09-10",
      "roeTTM": 83.39,
      "roicTTM": 74.29,
      "psTTM": 6.0644,
      "pb": 20.9813,
      "evEbitdaTTM": 34.0815
    },
    {
      "date": "2026-09-11",
      "roeTTM": 83.39,
      "roicTTM": 74.29,
      "psTTM": 6.0644,
      "pb": 20.9813,
      "evEbitdaTTM": 34.0815
    },
    {
      "date": "2026-09-12",
      "roeTTM": 83.39,
      "roicTTM": 74.29,
      "psTTM": 6.1631,
      "pb": 21.3225,
      "evEbitdaTTM": 34.6596
    },
    {
      "date": "2026-09-13",
      "roeTTM": 83.39,
      "roicTTM": 74.29,
      "psTTM": 6.1631,
      "pb": 21.3225,
      "evEbitdaTTM": 34.6596
    },
    {
      "date": "2026-09-14",
      "roeTTM": 83.39,
      "roicTTM": 74.29,
      "psTTM": 6.1631,
      "pb": 21.3225,
      "evEbitdaTTM": 34.6596
    },
    {
      "date": "2026-09-15",
      "roeTTM": 83.39,
      "roicTTM": 74.29,
      "psTTM": 6.1631,
      "pb": 21.3225,
      "evEbitdaTTM": 34.6596
    },
    {
      "date": "2026-09-16",
      "roeTTM": 83.39,
      "roicTTM": 74.29,
      "psTTM": 6.1631,
      "pb": 21.3225,
      "evEbitdaTTM": 34.6596
    },
    {
      "date": "2026-09-17",
      "roeTTM": 83.39,
      "roicTTM": 74.29,
      "psTTM": 5.6318,
      "pb": 19.4847,
      "evEbitdaTTM": 31.546
    },
    {
      "date": "2026-09-18",
      "roeTTM": 83.39,
      "roicTTM": 74.29,
      "psTTM": 5.6837,
      "pb": 19.664,
      "evEbitdaTTM": 31.8498
    },
    {
      "date": "2026-09-19",
      "roeTTM": 83.39,
      "roicTTM": 74.29,
      "psTTM": 5.6837,
      "pb": 19.664,
      "evEbitdaTTM": 31.8498
    },
    {
      "date": "2026-09-20",
      "roeTTM": 83.39,
      "roicTTM": 74.29,
      "psTTM": 6.054,
      "pb": 20.9452,
      "evEbitdaTTM": 34.0203
    },
    {
      "date": "2026-09-21",
      "roeTTM": 83.39,
      "roicTTM": 74.29,
      "psTTM": 6.054,
      "pb": 20.9452,
      "evEbitdaTTM": 34.0203
    },
    {
      "date": "2026-09-22",
      "roeTTM": 83.39,
      "roicTTM": 74.29,
      "psTTM": 6.054,
      "pb": 20.9452,
      "evEbitdaTTM": 34.0203
    },
    {
      "date": "2026-09-23",
      "roeTTM": 83.39,
      "roicTTM": 74.29,
      "psTTM": 6.0919,
      "pb": 21.0764,
      "evEbitdaTTM": 34.2426
    },
    {
      "date": "2026-09-24",
      "roeTTM": 83.39,
      "roicTTM": 74.29,
      "psTTM": 6.0919,
      "pb": 21.0764,
      "evEbitdaTTM": 34.2426
    },
    {
      "date": "2026-09-25",
      "roeTTM": 83.39,
      "roicTTM": 74.29,
      "psTTM": 6.128,
      "pb": 21.2011,
      "evEbitdaTTM": 34.4539
    },
    {
      "date": "2026-09-26",
      "roeTTM": 83.39,
      "roicTTM": 74.29,
      "psTTM": 6.128,
      "pb": 21.2011,
      "evEbitdaTTM": 34.4539
    },
    {
      "date": "2026-09-27",
      "roeTTM": 83.39,
      "roicTTM": 74.29,
      "psTTM": 6.1487,
      "pb": 21.2728,
      "evEbitdaTTM": 34.5754
    },
    {
      "date": "2026-09-28",
      "roeTTM": 83.39,
      "roicTTM": 74.29,
      "psTTM": 6.1654,
      "pb": 21.3305,
      "evEbitdaTTM": 34.6731
    },
    {
      "date": "2026-09-29",
      "roeTTM": 83.39,
      "roicTTM": 74.29,
      "psTTM": 6.1654,
      "pb": 21.3305,
      "evEbitdaTTM": 34.6731
    },
    {
      "date": "2026-09-30",
      "roeTTM": 83.39,
      "roicTTM": 74.29,
      "psTTM": 6.1654,
      "pb": 21.3305,
      "evEbitdaTTM": 34.6731
    },
    {
      "date": "2026-10-01",
      "roeTTM": 83.39,
      "roicTTM": 74.29,
      "psTTM": 6.1148,
      "pb": 21.1554,
      "evEbitdaTTM": 34.3765
    },
    {
      "date": "2026-10-02",
      "roeTTM": 83.39,
      "roicTTM": 74.29,
      "psTTM": 6.1967,
      "pb": 21.4388,
      "evEbitdaTTM": 34.8565
    },
    {
      "date": "2026-10-03",
      "roeTTM": 83.39,
      "roicTTM": 74.29,
      "psTTM": 6.1194,
      "pb": 21.1715,
      "evEbitdaTTM": 34.4037
    },
    {
      "date": "2026-10-04",
      "roeTTM": 83.39,
      "roicTTM": 74.29,
      "psTTM": 6.3654,
      "pb": 22.0226,
      "evEbitdaTTM": 35.8456
    },
    {
      "date": "2026-10-05",
      "roeTTM": 83.39,
      "roicTTM": 74.29,
      "psTTM": 6.3654,
      "pb": 22.0226,
      "evEbitdaTTM": 35.8456
    },
    {
      "date": "2026-10-06",
      "roeTTM": 83.39,
      "roicTTM": 74.29,
      "psTTM": 6.3654,
      "pb": 22.0226,
      "evEbitdaTTM": 35.8456
    },
    {
      "date": "2026-10-07",
      "roeTTM": 83.39,
      "roicTTM": 74.29,
      "psTTM": 6.3738,
      "pb": 22.0515,
      "evEbitdaTTM": 35.8946
    },
    {
      "date": "2026-10-08",
      "roeTTM": 83.39,
      "roicTTM": 74.29,
      "psTTM": 6.6262,
      "pb": 22.9249,
      "evEbitdaTTM": 37.3742
    },
    {
      "date": "2026-10-09",
      "roeTTM": 83.39,
      "roicTTM": 74.29,
      "psTTM": 6.4194,
      "pb": 22.2095,
      "evEbitdaTTM": 36.1622
    },
    {
      "date": "2026-10-10",
      "roeTTM": 83.39,
      "roicTTM": 74.29,
      "psTTM": 6.4194,
      "pb": 22.2095,
      "evEbitdaTTM": 36.1622
    },
    {
      "date": "2026-10-11",
      "roeTTM": 83.39,
      "roicTTM": 74.29,
      "psTTM": 6.4686,
      "pb": 22.3796,
      "evEbitdaTTM": 36.4505
    },
    {
      "date": "2026-10-12",
      "roeTTM": 83.39,
      "roicTTM": 74.29,
      "psTTM": 6.4686,
      "pb": 22.3796,
      "evEbitdaTTM": 36.4505
    },
    {
      "date": "2026-10-13",
      "roeTTM": 83.39,
      "roicTTM": 74.29,
      "psTTM": 6.4686,
      "pb": 22.3796,
      "evEbitdaTTM": 36.4505
    },
    {
      "date": "2026-10-14",
      "roeTTM": 83.39,
      "roicTTM": 74.29,
      "psTTM": 6.4176,
      "pb": 22.203,
      "evEbitdaTTM": 36.1512
    },
    {
      "date": "2026-10-15",
      "roeTTM": 83.39,
      "roicTTM": 74.29,
      "psTTM": 6.4176,
      "pb": 22.203,
      "evEbitdaTTM": 36.1512
    },
    {
      "date": "2026-10-16",
      "roeTTM": 83.39,
      "roicTTM": 74.29,
      "psTTM": 6.4642,
      "pb": 22.3643,
      "evEbitdaTTM": 36.4244
    },
    {
      "date": "2026-10-17",
      "roeTTM": 83.39,
      "roicTTM": 74.29,
      "psTTM": 5.9646,
      "pb": 20.6358,
      "evEbitdaTTM": 33.4962
    },
    {
      "date": "2026-10-18",
      "roeTTM": 83.39,
      "roicTTM": 74.29,
      "psTTM": 5.9646,
      "pb": 20.6358,
      "evEbitdaTTM": 33.4962
    },
    {
      "date": "2026-10-19",
      "roeTTM": 83.39,
      "roicTTM": 74.29,
      "psTTM": 5.9308,
      "pb": 20.5191,
      "evEbitdaTTM": 33.2985
    },
    {
      "date": "2026-10-20",
      "roeTTM": 83.39,
      "roicTTM": 74.29,
      "psTTM": 5.9308,
      "pb": 20.5191,
      "evEbitdaTTM": 33.2985
    },
    {
      "date": "2026-10-21",
      "roeTTM": 83.39,
      "roicTTM": 74.29,
      "psTTM": 5.9308,
      "pb": 20.5191,
      "evEbitdaTTM": 33.2985
    },
    {
      "date": "2026-10-22",
      "roeTTM": 83.39,
      "roicTTM": 74.29,
      "psTTM": 5.8487,
      "pb": 20.2348,
      "evEbitdaTTM": 32.817
    },
    {
      "date": "2026-10-23",
      "roeTTM": 83.39,
      "roicTTM": 74.29,
      "psTTM": 5.9612,
      "pb": 20.6242,
      "evEbitdaTTM": 33.4766
    },
    {
      "date": "2026-10-24",
      "roeTTM": 83.39,
      "roicTTM": 74.29,
      "psTTM": 5.3271,
      "pb": 18.4302,
      "evEbitdaTTM": 29.7597
    },
    {
      "date": "2026-10-25",
      "roeTTM": 83.39,
      "roicTTM": 74.29,
      "psTTM": 5.3271,
      "pb": 18.4302,
      "evEbitdaTTM": 29.7597
    },
    {
      "date": "2026-10-26",
      "roeTTM": 83.39,
      "roicTTM": 74.29,
      "psTTM": 5.3271,
      "pb": 18.4302,
      "evEbitdaTTM": 29.7597
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
    },
    {
      "date": "2026-09-08",
      "roeTTM": 14.69,
      "roicTTM": 8.690000000000001,
      "psTTM": 3.3874,
      "pb": 3.3125,
      "evEbitdaTTM": 21.7815
    },
    {
      "date": "2026-09-09",
      "roeTTM": 14.69,
      "roicTTM": 8.690000000000001,
      "psTTM": 3.3874,
      "pb": 3.3125,
      "evEbitdaTTM": 21.7815
    },
    {
      "date": "2026-09-10",
      "roeTTM": 14.69,
      "roicTTM": 8.690000000000001,
      "psTTM": 3.3874,
      "pb": 3.3125,
      "evEbitdaTTM": 21.7815
    },
    {
      "date": "2026-09-11",
      "roeTTM": 14.69,
      "roicTTM": 8.690000000000001,
      "psTTM": 3.3301,
      "pb": 3.2565,
      "evEbitdaTTM": 21.4813
    },
    {
      "date": "2026-09-12",
      "roeTTM": 14.69,
      "roicTTM": 8.690000000000001,
      "psTTM": 3.2264,
      "pb": 3.155,
      "evEbitdaTTM": 20.9375
    },
    {
      "date": "2026-09-13",
      "roeTTM": 14.69,
      "roicTTM": 8.690000000000001,
      "psTTM": 3.2264,
      "pb": 3.155,
      "evEbitdaTTM": 20.9375
    },
    {
      "date": "2026-09-14",
      "roeTTM": 14.69,
      "roicTTM": 8.690000000000001,
      "psTTM": 3.2264,
      "pb": 3.155,
      "evEbitdaTTM": 20.9375
    },
    {
      "date": "2026-09-15",
      "roeTTM": 14.69,
      "roicTTM": 8.690000000000001,
      "psTTM": 3.2264,
      "pb": 3.155,
      "evEbitdaTTM": 20.9375
    },
    {
      "date": "2026-09-16",
      "roeTTM": 14.69,
      "roicTTM": 8.690000000000001,
      "psTTM": 3.2264,
      "pb": 3.155,
      "evEbitdaTTM": 20.9375
    },
    {
      "date": "2026-09-17",
      "roeTTM": 14.69,
      "roicTTM": 8.690000000000001,
      "psTTM": 2.9977,
      "pb": 2.9315,
      "evEbitdaTTM": 19.7388
    },
    {
      "date": "2026-09-18",
      "roeTTM": 14.69,
      "roicTTM": 8.690000000000001,
      "psTTM": 2.9447,
      "pb": 2.8796,
      "evEbitdaTTM": 19.4608
    },
    {
      "date": "2026-09-19",
      "roeTTM": 14.69,
      "roicTTM": 8.690000000000001,
      "psTTM": 2.9447,
      "pb": 2.8796,
      "evEbitdaTTM": 19.4608
    },
    {
      "date": "2026-09-20",
      "roeTTM": 14.69,
      "roicTTM": 8.690000000000001,
      "psTTM": 2.9066,
      "pb": 2.8423,
      "evEbitdaTTM": 19.261
    },
    {
      "date": "2026-09-21",
      "roeTTM": 14.69,
      "roicTTM": 8.690000000000001,
      "psTTM": 2.886,
      "pb": 2.8222,
      "evEbitdaTTM": 19.1532
    },
    {
      "date": "2026-09-22",
      "roeTTM": 14.69,
      "roicTTM": 8.690000000000001,
      "psTTM": 2.886,
      "pb": 2.8222,
      "evEbitdaTTM": 19.1532
    },
    {
      "date": "2026-09-23",
      "roeTTM": 14.69,
      "roicTTM": 8.690000000000001,
      "psTTM": 2.9699,
      "pb": 2.9042,
      "evEbitdaTTM": 19.5927
    },
    {
      "date": "2026-09-24",
      "roeTTM": 14.69,
      "roicTTM": 8.690000000000001,
      "psTTM": 2.9699,
      "pb": 2.9042,
      "evEbitdaTTM": 19.5927
    },
    {
      "date": "2026-09-25",
      "roeTTM": 14.69,
      "roicTTM": 8.690000000000001,
      "psTTM": 2.9899,
      "pb": 2.9238,
      "evEbitdaTTM": 19.6978
    },
    {
      "date": "2026-09-26",
      "roeTTM": 14.69,
      "roicTTM": 8.690000000000001,
      "psTTM": 2.9643,
      "pb": 2.8988,
      "evEbitdaTTM": 19.5636
    },
    {
      "date": "2026-09-27",
      "roeTTM": 14.69,
      "roicTTM": 8.690000000000001,
      "psTTM": 2.9643,
      "pb": 2.8988,
      "evEbitdaTTM": 19.5636
    },
    {
      "date": "2026-09-28",
      "roeTTM": 14.69,
      "roicTTM": 8.690000000000001,
      "psTTM": 2.983,
      "pb": 2.917,
      "evEbitdaTTM": 19.6616
    },
    {
      "date": "2026-09-29",
      "roeTTM": 14.69,
      "roicTTM": 8.690000000000001,
      "psTTM": 2.983,
      "pb": 2.917,
      "evEbitdaTTM": 19.6616
    },
    {
      "date": "2026-09-30",
      "roeTTM": 14.69,
      "roicTTM": 8.690000000000001,
      "psTTM": 2.983,
      "pb": 2.917,
      "evEbitdaTTM": 19.6616
    },
    {
      "date": "2026-10-01",
      "roeTTM": 14.69,
      "roicTTM": 8.690000000000001,
      "psTTM": 2.9978,
      "pb": 2.9316,
      "evEbitdaTTM": 19.7394
    },
    {
      "date": "2026-10-02",
      "roeTTM": 14.69,
      "roicTTM": 8.690000000000001,
      "psTTM": 2.8782,
      "pb": 2.8146,
      "evEbitdaTTM": 19.1122
    },
    {
      "date": "2026-10-03",
      "roeTTM": 14.69,
      "roicTTM": 8.690000000000001,
      "psTTM": 2.9337,
      "pb": 2.8689,
      "evEbitdaTTM": 19.4032
    },
    {
      "date": "2026-10-04",
      "roeTTM": 14.69,
      "roicTTM": 8.690000000000001,
      "psTTM": 2.9175,
      "pb": 2.853,
      "evEbitdaTTM": 19.3183
    },
    {
      "date": "2026-10-05",
      "roeTTM": 14.69,
      "roicTTM": 8.690000000000001,
      "psTTM": 2.9175,
      "pb": 2.853,
      "evEbitdaTTM": 19.3183
    },
    {
      "date": "2026-10-06",
      "roeTTM": 14.69,
      "roicTTM": 8.690000000000001,
      "psTTM": 2.9175,
      "pb": 2.853,
      "evEbitdaTTM": 19.3183
    },
    {
      "date": "2026-10-07",
      "roeTTM": 14.69,
      "roicTTM": 8.690000000000001,
      "psTTM": 3.0323,
      "pb": 2.9652,
      "evEbitdaTTM": 19.92
    },
    {
      "date": "2026-10-08",
      "roeTTM": 14.69,
      "roicTTM": 8.690000000000001,
      "psTTM": 3.4037,
      "pb": 3.3285,
      "evEbitdaTTM": 21.867
    },
    {
      "date": "2026-10-09",
      "roeTTM": 14.69,
      "roicTTM": 8.690000000000001,
      "psTTM": 3.3945,
      "pb": 3.3195,
      "evEbitdaTTM": 21.8189
    },
    {
      "date": "2026-10-10",
      "roeTTM": 14.69,
      "roicTTM": 8.690000000000001,
      "psTTM": 3.3945,
      "pb": 3.3195,
      "evEbitdaTTM": 21.8189
    },
    {
      "date": "2026-10-11",
      "roeTTM": 14.69,
      "roicTTM": 8.690000000000001,
      "psTTM": 3.3773,
      "pb": 3.3026,
      "evEbitdaTTM": 21.7287
    },
    {
      "date": "2026-10-12",
      "roeTTM": 14.69,
      "roicTTM": 8.690000000000001,
      "psTTM": 3.3773,
      "pb": 3.3026,
      "evEbitdaTTM": 21.7287
    },
    {
      "date": "2026-10-13",
      "roeTTM": 14.69,
      "roicTTM": 8.690000000000001,
      "psTTM": 3.3773,
      "pb": 3.3026,
      "evEbitdaTTM": 21.7287
    },
    {
      "date": "2026-10-14",
      "roeTTM": 14.69,
      "roicTTM": 8.690000000000001,
      "psTTM": 3.3299,
      "pb": 3.2563,
      "evEbitdaTTM": 21.4804
    },
    {
      "date": "2026-10-15",
      "roeTTM": 14.69,
      "roicTTM": 8.690000000000001,
      "psTTM": 3.3299,
      "pb": 3.2563,
      "evEbitdaTTM": 21.4804
    },
    {
      "date": "2026-10-16",
      "roeTTM": 14.69,
      "roicTTM": 8.690000000000001,
      "psTTM": 3.1674,
      "pb": 3.0973,
      "evEbitdaTTM": 20.628
    },
    {
      "date": "2026-10-17",
      "roeTTM": 14.69,
      "roicTTM": 8.690000000000001,
      "psTTM": 3.1159,
      "pb": 3.047,
      "evEbitdaTTM": 20.3583
    },
    {
      "date": "2026-10-18",
      "roeTTM": 14.69,
      "roicTTM": 8.690000000000001,
      "psTTM": 3.1159,
      "pb": 3.047,
      "evEbitdaTTM": 20.3583
    },
    {
      "date": "2026-10-19",
      "roeTTM": 14.69,
      "roicTTM": 8.690000000000001,
      "psTTM": 3.0748,
      "pb": 3.0068,
      "evEbitdaTTM": 20.1427
    },
    {
      "date": "2026-10-20",
      "roeTTM": 14.69,
      "roicTTM": 8.690000000000001,
      "psTTM": 3.0748,
      "pb": 3.0068,
      "evEbitdaTTM": 20.1427
    },
    {
      "date": "2026-10-21",
      "roeTTM": 14.69,
      "roicTTM": 8.690000000000001,
      "psTTM": 3.0748,
      "pb": 3.0068,
      "evEbitdaTTM": 20.1427
    },
    {
      "date": "2026-10-22",
      "roeTTM": 14.69,
      "roicTTM": 8.690000000000001,
      "psTTM": 2.9328,
      "pb": 2.868,
      "evEbitdaTTM": 19.3985
    },
    {
      "date": "2026-10-23",
      "roeTTM": 14.69,
      "roicTTM": 8.690000000000001,
      "psTTM": 3.0676,
      "pb": 2.9998,
      "evEbitdaTTM": 20.1053
    },
    {
      "date": "2026-10-24",
      "roeTTM": 14.69,
      "roicTTM": 8.690000000000001,
      "psTTM": 2.8917,
      "pb": 2.8277,
      "evEbitdaTTM": 19.1829
    },
    {
      "date": "2026-10-25",
      "roeTTM": 14.69,
      "roicTTM": 8.690000000000001,
      "psTTM": 2.8717,
      "pb": 2.8082,
      "evEbitdaTTM": 19.0783
    },
    {
      "date": "2026-10-26",
      "roeTTM": 14.69,
      "roicTTM": 8.690000000000001,
      "psTTM": 2.8717,
      "pb": 2.8082,
      "evEbitdaTTM": 19.0783
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
    },
    {
      "date": "2026-09-08",
      "roeTTM": 41.5,
      "roicTTM": 8.690000000000001,
      "psTTM": 2.6395,
      "pb": 9.1409,
      "evEbitdaTTM": 12.8282
    },
    {
      "date": "2026-09-09",
      "roeTTM": 41.5,
      "roicTTM": 8.690000000000001,
      "psTTM": 2.6395,
      "pb": 9.1409,
      "evEbitdaTTM": 12.8282
    },
    {
      "date": "2026-09-10",
      "roeTTM": 41.5,
      "roicTTM": 8.690000000000001,
      "psTTM": 2.6395,
      "pb": 9.1409,
      "evEbitdaTTM": 12.8282
    },
    {
      "date": "2026-09-11",
      "roeTTM": 41.5,
      "roicTTM": 8.690000000000001,
      "psTTM": 2.6713,
      "pb": 9.2511,
      "evEbitdaTTM": 12.9387
    },
    {
      "date": "2026-09-12",
      "roeTTM": 41.5,
      "roicTTM": 8.690000000000001,
      "psTTM": 2.6232,
      "pb": 9.0846,
      "evEbitdaTTM": 12.7718
    },
    {
      "date": "2026-09-13",
      "roeTTM": 41.5,
      "roicTTM": 8.690000000000001,
      "psTTM": 2.6232,
      "pb": 9.0846,
      "evEbitdaTTM": 12.7718
    },
    {
      "date": "2026-09-14",
      "roeTTM": 41.5,
      "roicTTM": 8.690000000000001,
      "psTTM": 2.6232,
      "pb": 9.0846,
      "evEbitdaTTM": 12.7718
    },
    {
      "date": "2026-09-15",
      "roeTTM": 41.5,
      "roicTTM": 8.690000000000001,
      "psTTM": 2.6232,
      "pb": 9.0846,
      "evEbitdaTTM": 12.7718
    },
    {
      "date": "2026-09-16",
      "roeTTM": 41.5,
      "roicTTM": 8.690000000000001,
      "psTTM": 2.6232,
      "pb": 9.0846,
      "evEbitdaTTM": 12.7718
    },
    {
      "date": "2026-09-17",
      "roeTTM": 41.5,
      "roicTTM": 8.690000000000001,
      "psTTM": 2.6232,
      "pb": 9.0846,
      "evEbitdaTTM": 12.7718
    },
    {
      "date": "2026-09-18",
      "roeTTM": 41.5,
      "roicTTM": 8.690000000000001,
      "psTTM": 2.6232,
      "pb": 9.0846,
      "evEbitdaTTM": 12.7718
    },
    {
      "date": "2026-09-19",
      "roeTTM": 41.5,
      "roicTTM": 8.690000000000001,
      "psTTM": 2.6232,
      "pb": 9.0846,
      "evEbitdaTTM": 12.7718
    },
    {
      "date": "2026-09-20",
      "roeTTM": 41.5,
      "roicTTM": 8.690000000000001,
      "psTTM": 2.6232,
      "pb": 9.0846,
      "evEbitdaTTM": 12.7718
    },
    {
      "date": "2026-09-21",
      "roeTTM": 41.5,
      "roicTTM": 8.690000000000001,
      "psTTM": 2.4869,
      "pb": 8.6125,
      "evEbitdaTTM": 12.2988
    },
    {
      "date": "2026-09-22",
      "roeTTM": 41.5,
      "roicTTM": 8.690000000000001,
      "psTTM": 2.4869,
      "pb": 8.6125,
      "evEbitdaTTM": 12.2988
    },
    {
      "date": "2026-09-23",
      "roeTTM": 41.5,
      "roicTTM": 8.690000000000001,
      "psTTM": 2.5137,
      "pb": 8.7053,
      "evEbitdaTTM": 12.3918
    },
    {
      "date": "2026-09-24",
      "roeTTM": 41.5,
      "roicTTM": 8.690000000000001,
      "psTTM": 2.5137,
      "pb": 8.7053,
      "evEbitdaTTM": 12.3918
    },
    {
      "date": "2026-09-25",
      "roeTTM": 41.5,
      "roicTTM": 8.690000000000001,
      "psTTM": 2.5097,
      "pb": 8.6916,
      "evEbitdaTTM": 12.3781
    },
    {
      "date": "2026-09-26",
      "roeTTM": 41.5,
      "roicTTM": 8.690000000000001,
      "psTTM": 2.4952,
      "pb": 8.6412,
      "evEbitdaTTM": 12.3276
    },
    {
      "date": "2026-09-27",
      "roeTTM": 41.5,
      "roicTTM": 8.690000000000001,
      "psTTM": 2.477,
      "pb": 8.5782,
      "evEbitdaTTM": 12.2645
    },
    {
      "date": "2026-09-28",
      "roeTTM": 41.5,
      "roicTTM": 8.690000000000001,
      "psTTM": 2.477,
      "pb": 8.5782,
      "evEbitdaTTM": 12.2645
    },
    {
      "date": "2026-09-29",
      "roeTTM": 41.5,
      "roicTTM": 8.690000000000001,
      "psTTM": 2.477,
      "pb": 8.5782,
      "evEbitdaTTM": 12.2645
    },
    {
      "date": "2026-09-30",
      "roeTTM": 41.5,
      "roicTTM": 8.690000000000001,
      "psTTM": 2.477,
      "pb": 8.5782,
      "evEbitdaTTM": 12.2645
    },
    {
      "date": "2026-10-01",
      "roeTTM": 41.5,
      "roicTTM": 8.690000000000001,
      "psTTM": 2.53,
      "pb": 8.7619,
      "evEbitdaTTM": 12.4485
    },
    {
      "date": "2026-10-02",
      "roeTTM": 41.5,
      "roicTTM": 8.690000000000001,
      "psTTM": 2.4459,
      "pb": 8.4705,
      "evEbitdaTTM": 12.1565
    },
    {
      "date": "2026-10-03",
      "roeTTM": 41.5,
      "roicTTM": 8.690000000000001,
      "psTTM": 2.4459,
      "pb": 8.4705,
      "evEbitdaTTM": 12.1565
    },
    {
      "date": "2026-10-04",
      "roeTTM": 41.5,
      "roicTTM": 8.690000000000001,
      "psTTM": 2.4153,
      "pb": 8.3644,
      "evEbitdaTTM": 12.0502
    },
    {
      "date": "2026-10-05",
      "roeTTM": 41.5,
      "roicTTM": 8.690000000000001,
      "psTTM": 2.4153,
      "pb": 8.3644,
      "evEbitdaTTM": 12.0502
    },
    {
      "date": "2026-10-06",
      "roeTTM": 41.5,
      "roicTTM": 8.690000000000001,
      "psTTM": 2.4153,
      "pb": 8.3644,
      "evEbitdaTTM": 12.0502
    },
    {
      "date": "2026-10-07",
      "roeTTM": 41.5,
      "roicTTM": 8.690000000000001,
      "psTTM": 2.5137,
      "pb": 8.7055,
      "evEbitdaTTM": 12.392
    },
    {
      "date": "2026-10-08",
      "roeTTM": 41.5,
      "roicTTM": 8.690000000000001,
      "psTTM": 2.7997,
      "pb": 9.6957,
      "evEbitdaTTM": 13.3841
    },
    {
      "date": "2026-10-09",
      "roeTTM": 41.5,
      "roicTTM": 8.690000000000001,
      "psTTM": 2.9504,
      "pb": 10.2178,
      "evEbitdaTTM": 13.9074
    },
    {
      "date": "2026-10-10",
      "roeTTM": 41.5,
      "roicTTM": 8.690000000000001,
      "psTTM": 2.9504,
      "pb": 10.2178,
      "evEbitdaTTM": 13.9074
    },
    {
      "date": "2026-10-11",
      "roeTTM": 41.5,
      "roicTTM": 8.690000000000001,
      "psTTM": 2.8492,
      "pb": 9.8673,
      "evEbitdaTTM": 13.5561
    },
    {
      "date": "2026-10-12",
      "roeTTM": 41.5,
      "roicTTM": 8.690000000000001,
      "psTTM": 2.8548,
      "pb": 9.8866,
      "evEbitdaTTM": 13.5755
    },
    {
      "date": "2026-10-13",
      "roeTTM": 41.5,
      "roicTTM": 8.690000000000001,
      "psTTM": 2.8548,
      "pb": 9.8866,
      "evEbitdaTTM": 13.5755
    },
    {
      "date": "2026-10-14",
      "roeTTM": 41.5,
      "roicTTM": 8.690000000000001,
      "psTTM": 2.7979,
      "pb": 9.6895,
      "evEbitdaTTM": 13.3779
    },
    {
      "date": "2026-10-15",
      "roeTTM": 41.5,
      "roicTTM": 8.690000000000001,
      "psTTM": 2.7979,
      "pb": 9.6895,
      "evEbitdaTTM": 13.3779
    },
    {
      "date": "2026-10-16",
      "roeTTM": 41.5,
      "roicTTM": 8.690000000000001,
      "psTTM": 2.6788,
      "pb": 9.2771,
      "evEbitdaTTM": 12.9647
    },
    {
      "date": "2026-10-17",
      "roeTTM": 41.5,
      "roicTTM": 8.690000000000001,
      "psTTM": 2.7184,
      "pb": 9.4143,
      "evEbitdaTTM": 13.1022
    },
    {
      "date": "2026-10-18",
      "roeTTM": 41.5,
      "roicTTM": 8.690000000000001,
      "psTTM": 2.7184,
      "pb": 9.4143,
      "evEbitdaTTM": 13.1022
    },
    {
      "date": "2026-10-19",
      "roeTTM": 41.5,
      "roicTTM": 8.690000000000001,
      "psTTM": 2.6876,
      "pb": 9.3074,
      "evEbitdaTTM": 12.9951
    },
    {
      "date": "2026-10-20",
      "roeTTM": 41.5,
      "roicTTM": 8.690000000000001,
      "psTTM": 2.6876,
      "pb": 9.3074,
      "evEbitdaTTM": 12.9951
    },
    {
      "date": "2026-10-21",
      "roeTTM": 41.5,
      "roicTTM": 8.690000000000001,
      "psTTM": 2.6876,
      "pb": 9.3074,
      "evEbitdaTTM": 12.9951
    },
    {
      "date": "2026-10-22",
      "roeTTM": 41.5,
      "roicTTM": 8.690000000000001,
      "psTTM": 2.7079,
      "pb": 9.3778,
      "evEbitdaTTM": 13.0657
    },
    {
      "date": "2026-10-23",
      "roeTTM": 41.5,
      "roicTTM": 8.690000000000001,
      "psTTM": 2.8033,
      "pb": 9.7082,
      "evEbitdaTTM": 13.3967
    },
    {
      "date": "2026-10-24",
      "roeTTM": 41.5,
      "roicTTM": 8.690000000000001,
      "psTTM": 2.5102,
      "pb": 8.6933,
      "evEbitdaTTM": 12.3798
    },
    {
      "date": "2026-10-25",
      "roeTTM": 41.5,
      "roicTTM": 8.690000000000001,
      "psTTM": 2.5115,
      "pb": 8.6977,
      "evEbitdaTTM": 12.3841
    },
    {
      "date": "2026-10-26",
      "roeTTM": 41.5,
      "roicTTM": 8.690000000000001,
      "psTTM": 2.5115,
      "pb": 8.6977,
      "evEbitdaTTM": 12.3841
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
    },
    {
      "date": "2026-09-08",
      "roeTTM": 19.59,
      "roicTTM": 10.9,
      "psTTM": 5.3147,
      "pb": 7.8786,
      "evEbitdaTTM": 27.8694
    },
    {
      "date": "2026-09-09",
      "roeTTM": 19.59,
      "roicTTM": 10.9,
      "psTTM": 5.3147,
      "pb": 7.8786,
      "evEbitdaTTM": 27.8694
    },
    {
      "date": "2026-09-10",
      "roeTTM": 19.59,
      "roicTTM": 10.9,
      "psTTM": 5.3147,
      "pb": 7.8786,
      "evEbitdaTTM": 27.8694
    },
    {
      "date": "2026-09-11",
      "roeTTM": 19.59,
      "roicTTM": 10.9,
      "psTTM": 5.3869,
      "pb": 7.9857,
      "evEbitdaTTM": 28.2056
    },
    {
      "date": "2026-09-12",
      "roeTTM": 19.59,
      "roicTTM": 10.9,
      "psTTM": 5.4952,
      "pb": 8.1462,
      "evEbitdaTTM": 28.7097
    },
    {
      "date": "2026-09-13",
      "roeTTM": 19.59,
      "roicTTM": 10.9,
      "psTTM": 5.4952,
      "pb": 8.1462,
      "evEbitdaTTM": 28.7097
    },
    {
      "date": "2026-09-14",
      "roeTTM": 19.59,
      "roicTTM": 10.9,
      "psTTM": 5.5025,
      "pb": 8.1571,
      "evEbitdaTTM": 28.7441
    },
    {
      "date": "2026-09-15",
      "roeTTM": 19.59,
      "roicTTM": 10.9,
      "psTTM": 5.5025,
      "pb": 8.1571,
      "evEbitdaTTM": 28.7441
    },
    {
      "date": "2026-09-16",
      "roeTTM": 19.59,
      "roicTTM": 10.9,
      "psTTM": 5.5025,
      "pb": 8.1571,
      "evEbitdaTTM": 28.7441
    },
    {
      "date": "2026-09-17",
      "roeTTM": 19.59,
      "roicTTM": 10.9,
      "psTTM": 5.0592,
      "pb": 7.4999,
      "evEbitdaTTM": 26.6798
    },
    {
      "date": "2026-09-18",
      "roeTTM": 19.59,
      "roicTTM": 10.9,
      "psTTM": 5.0592,
      "pb": 7.4999,
      "evEbitdaTTM": 26.6798
    },
    {
      "date": "2026-09-19",
      "roeTTM": 19.59,
      "roicTTM": 10.9,
      "psTTM": 5.0592,
      "pb": 7.4999,
      "evEbitdaTTM": 26.6798
    },
    {
      "date": "2026-09-20",
      "roeTTM": 19.59,
      "roicTTM": 10.9,
      "psTTM": 5.4948,
      "pb": 8.1456,
      "evEbitdaTTM": 28.7079
    },
    {
      "date": "2026-09-21",
      "roeTTM": 19.59,
      "roicTTM": 10.9,
      "psTTM": 5.4948,
      "pb": 8.1456,
      "evEbitdaTTM": 28.7079
    },
    {
      "date": "2026-09-22",
      "roeTTM": 19.59,
      "roicTTM": 10.9,
      "psTTM": 5.4948,
      "pb": 8.1456,
      "evEbitdaTTM": 28.7079
    },
    {
      "date": "2026-09-23",
      "roeTTM": 19.59,
      "roicTTM": 10.9,
      "psTTM": 5.6063,
      "pb": 8.3109,
      "evEbitdaTTM": 29.2272
    },
    {
      "date": "2026-09-24",
      "roeTTM": 19.59,
      "roicTTM": 10.9,
      "psTTM": 5.6063,
      "pb": 8.3109,
      "evEbitdaTTM": 29.2272
    },
    {
      "date": "2026-09-25",
      "roeTTM": 19.59,
      "roicTTM": 10.9,
      "psTTM": 5.6848,
      "pb": 8.4273,
      "evEbitdaTTM": 29.5928
    },
    {
      "date": "2026-09-26",
      "roeTTM": 19.59,
      "roicTTM": 10.9,
      "psTTM": 5.6375,
      "pb": 8.3572,
      "evEbitdaTTM": 29.3727
    },
    {
      "date": "2026-09-27",
      "roeTTM": 19.59,
      "roicTTM": 10.9,
      "psTTM": 5.6756,
      "pb": 8.4137,
      "evEbitdaTTM": 29.55
    },
    {
      "date": "2026-09-28",
      "roeTTM": 19.59,
      "roicTTM": 10.9,
      "psTTM": 5.6915,
      "pb": 8.4373,
      "evEbitdaTTM": 29.6241
    },
    {
      "date": "2026-09-29",
      "roeTTM": 19.59,
      "roicTTM": 10.9,
      "psTTM": 5.6915,
      "pb": 8.4373,
      "evEbitdaTTM": 29.6241
    },
    {
      "date": "2026-09-30",
      "roeTTM": 19.59,
      "roicTTM": 10.9,
      "psTTM": 5.5057,
      "pb": 8.1618,
      "evEbitdaTTM": 28.7588
    },
    {
      "date": "2026-10-01",
      "roeTTM": 19.59,
      "roicTTM": 10.9,
      "psTTM": 5.5819,
      "pb": 8.2747,
      "evEbitdaTTM": 29.1136
    },
    {
      "date": "2026-10-02",
      "roeTTM": 19.59,
      "roicTTM": 10.9,
      "psTTM": 5.5745,
      "pb": 8.2637,
      "evEbitdaTTM": 29.079
    },
    {
      "date": "2026-10-03",
      "roeTTM": 19.59,
      "roicTTM": 10.9,
      "psTTM": 5.5564,
      "pb": 8.237,
      "evEbitdaTTM": 28.9949
    },
    {
      "date": "2026-10-04",
      "roeTTM": 19.59,
      "roicTTM": 10.9,
      "psTTM": 5.7281,
      "pb": 8.4915,
      "evEbitdaTTM": 29.7946
    },
    {
      "date": "2026-10-05",
      "roeTTM": 19.59,
      "roicTTM": 10.9,
      "psTTM": 5.7281,
      "pb": 8.4915,
      "evEbitdaTTM": 29.7946
    },
    {
      "date": "2026-10-06",
      "roeTTM": 19.59,
      "roicTTM": 10.9,
      "psTTM": 5.6415,
      "pb": 8.363,
      "evEbitdaTTM": 29.391
    },
    {
      "date": "2026-10-07",
      "roeTTM": 19.59,
      "roicTTM": 10.9,
      "psTTM": 5.6715,
      "pb": 8.4075,
      "evEbitdaTTM": 29.5307
    },
    {
      "date": "2026-10-08",
      "roeTTM": 19.59,
      "roicTTM": 10.9,
      "psTTM": 5.6671,
      "pb": 8.401,
      "evEbitdaTTM": 29.5103
    },
    {
      "date": "2026-10-09",
      "roeTTM": 19.59,
      "roicTTM": 10.9,
      "psTTM": 5.5474,
      "pb": 8.2235,
      "evEbitdaTTM": 28.9528
    },
    {
      "date": "2026-10-10",
      "roeTTM": 19.59,
      "roicTTM": 10.9,
      "psTTM": 5.5474,
      "pb": 8.2235,
      "evEbitdaTTM": 28.9528
    },
    {
      "date": "2026-10-11",
      "roeTTM": 19.59,
      "roicTTM": 10.9,
      "psTTM": 5.4818,
      "pb": 8.1264,
      "evEbitdaTTM": 28.6477
    },
    {
      "date": "2026-10-12",
      "roeTTM": 19.59,
      "roicTTM": 10.9,
      "psTTM": 5.5579,
      "pb": 8.2392,
      "evEbitdaTTM": 29.0019
    },
    {
      "date": "2026-10-13",
      "roeTTM": 19.59,
      "roicTTM": 10.9,
      "psTTM": 5.5579,
      "pb": 8.2392,
      "evEbitdaTTM": 29.0019
    },
    {
      "date": "2026-10-14",
      "roeTTM": 19.59,
      "roicTTM": 10.9,
      "psTTM": 5.5406,
      "pb": 8.2135,
      "evEbitdaTTM": 28.9212
    },
    {
      "date": "2026-10-15",
      "roeTTM": 19.59,
      "roicTTM": 10.9,
      "psTTM": 5.5406,
      "pb": 8.2135,
      "evEbitdaTTM": 28.9212
    },
    {
      "date": "2026-10-16",
      "roeTTM": 19.59,
      "roicTTM": 10.9,
      "psTTM": 5.4198,
      "pb": 8.0345,
      "evEbitdaTTM": 28.3589
    },
    {
      "date": "2026-10-17",
      "roeTTM": 19.59,
      "roicTTM": 10.9,
      "psTTM": 5.0631,
      "pb": 7.5057,
      "evEbitdaTTM": 26.6979
    },
    {
      "date": "2026-10-18",
      "roeTTM": 19.59,
      "roicTTM": 10.9,
      "psTTM": 5.0631,
      "pb": 7.5057,
      "evEbitdaTTM": 26.6979
    },
    {
      "date": "2026-10-19",
      "roeTTM": 19.59,
      "roicTTM": 10.9,
      "psTTM": 5.0612,
      "pb": 7.5028,
      "evEbitdaTTM": 26.6888
    },
    {
      "date": "2026-10-20",
      "roeTTM": 19.59,
      "roicTTM": 10.9,
      "psTTM": 5.0612,
      "pb": 7.5028,
      "evEbitdaTTM": 26.6888
    },
    {
      "date": "2026-10-21",
      "roeTTM": 19.59,
      "roicTTM": 10.9,
      "psTTM": 5.0612,
      "pb": 7.5028,
      "evEbitdaTTM": 26.6888
    },
    {
      "date": "2026-10-22",
      "roeTTM": 19.59,
      "roicTTM": 10.9,
      "psTTM": 4.9462,
      "pb": 7.3323,
      "evEbitdaTTM": 26.1533
    },
    {
      "date": "2026-10-23",
      "roeTTM": 19.59,
      "roicTTM": 10.9,
      "psTTM": 5.0603,
      "pb": 7.5014,
      "evEbitdaTTM": 26.6846
    },
    {
      "date": "2026-10-24",
      "roeTTM": 19.59,
      "roicTTM": 10.9,
      "psTTM": 4.8192,
      "pb": 7.1441,
      "evEbitdaTTM": 25.5621
    },
    {
      "date": "2026-10-25",
      "roeTTM": 19.59,
      "roicTTM": 10.9,
      "psTTM": 4.7547,
      "pb": 7.0485,
      "evEbitdaTTM": 25.2617
    },
    {
      "date": "2026-10-26",
      "roeTTM": 19.59,
      "roicTTM": 10.9,
      "psTTM": 4.7547,
      "pb": 7.0485,
      "evEbitdaTTM": 25.2617
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
    },
    {
      "date": "2026-09-08",
      "roeTTM": 14.74,
      "roicTTM": 8.9,
      "psTTM": 2.8529,
      "pb": 9.7402,
      "evEbitdaTTM": 37.9506
    },
    {
      "date": "2026-09-09",
      "roeTTM": 14.74,
      "roicTTM": 8.9,
      "psTTM": 2.8529,
      "pb": 9.7402,
      "evEbitdaTTM": 37.9506
    },
    {
      "date": "2026-09-10",
      "roeTTM": 14.74,
      "roicTTM": 8.9,
      "psTTM": 2.8529,
      "pb": 9.7402,
      "evEbitdaTTM": 37.9506
    },
    {
      "date": "2026-09-11",
      "roeTTM": 14.74,
      "roicTTM": 8.9,
      "psTTM": 2.9282,
      "pb": 9.9971,
      "evEbitdaTTM": 38.895
    },
    {
      "date": "2026-09-12",
      "roeTTM": 14.74,
      "roicTTM": 8.9,
      "psTTM": 2.9238,
      "pb": 9.9823,
      "evEbitdaTTM": 38.8408
    },
    {
      "date": "2026-09-13",
      "roeTTM": 14.74,
      "roicTTM": 8.9,
      "psTTM": 2.9238,
      "pb": 9.9823,
      "evEbitdaTTM": 38.8408
    },
    {
      "date": "2026-09-14",
      "roeTTM": 14.74,
      "roicTTM": 8.9,
      "psTTM": 2.9725,
      "pb": 10.1485,
      "evEbitdaTTM": 39.4517
    },
    {
      "date": "2026-09-15",
      "roeTTM": 14.74,
      "roicTTM": 8.9,
      "psTTM": 2.9725,
      "pb": 10.1485,
      "evEbitdaTTM": 39.4517
    },
    {
      "date": "2026-09-16",
      "roeTTM": 14.74,
      "roicTTM": 8.9,
      "psTTM": 2.8501,
      "pb": 9.7306,
      "evEbitdaTTM": 37.9151
    },
    {
      "date": "2026-09-17",
      "roeTTM": 14.74,
      "roicTTM": 8.9,
      "psTTM": 2.7941,
      "pb": 9.5393,
      "evEbitdaTTM": 37.2116
    },
    {
      "date": "2026-09-18",
      "roeTTM": 14.74,
      "roicTTM": 8.9,
      "psTTM": 2.863,
      "pb": 9.7746,
      "evEbitdaTTM": 38.0771
    },
    {
      "date": "2026-09-19",
      "roeTTM": 14.74,
      "roicTTM": 8.9,
      "psTTM": 2.863,
      "pb": 9.7746,
      "evEbitdaTTM": 38.0771
    },
    {
      "date": "2026-09-20",
      "roeTTM": 14.74,
      "roicTTM": 8.9,
      "psTTM": 2.863,
      "pb": 9.7746,
      "evEbitdaTTM": 38.0771
    },
    {
      "date": "2026-09-21",
      "roeTTM": 14.74,
      "roicTTM": 8.9,
      "psTTM": 2.9091,
      "pb": 9.9321,
      "evEbitdaTTM": 38.6561
    },
    {
      "date": "2026-09-22",
      "roeTTM": 14.74,
      "roicTTM": 8.9,
      "psTTM": 2.9091,
      "pb": 9.9321,
      "evEbitdaTTM": 38.6561
    },
    {
      "date": "2026-09-23",
      "roeTTM": 14.74,
      "roicTTM": 8.9,
      "psTTM": 2.8955,
      "pb": 9.8857,
      "evEbitdaTTM": 38.4855
    },
    {
      "date": "2026-09-24",
      "roeTTM": 14.74,
      "roicTTM": 8.9,
      "psTTM": 2.8955,
      "pb": 9.8857,
      "evEbitdaTTM": 38.4855
    },
    {
      "date": "2026-09-25",
      "roeTTM": 14.74,
      "roicTTM": 8.9,
      "psTTM": 2.9263,
      "pb": 9.9909,
      "evEbitdaTTM": 38.8724
    },
    {
      "date": "2026-09-26",
      "roeTTM": 14.74,
      "roicTTM": 8.9,
      "psTTM": 2.8891,
      "pb": 9.8637,
      "evEbitdaTTM": 38.4046
    },
    {
      "date": "2026-09-27",
      "roeTTM": 14.74,
      "roicTTM": 8.9,
      "psTTM": 2.9751,
      "pb": 10.1575,
      "evEbitdaTTM": 39.4849
    },
    {
      "date": "2026-09-28",
      "roeTTM": 14.74,
      "roicTTM": 8.9,
      "psTTM": 2.9659,
      "pb": 10.1259,
      "evEbitdaTTM": 39.3685
    },
    {
      "date": "2026-09-29",
      "roeTTM": 14.74,
      "roicTTM": 8.9,
      "psTTM": 2.9659,
      "pb": 10.1259,
      "evEbitdaTTM": 39.3685
    },
    {
      "date": "2026-09-30",
      "roeTTM": 14.74,
      "roicTTM": 8.9,
      "psTTM": 2.9812,
      "pb": 10.1783,
      "evEbitdaTTM": 39.5612
    },
    {
      "date": "2026-10-01",
      "roeTTM": 14.74,
      "roicTTM": 8.9,
      "psTTM": 3.0018,
      "pb": 10.2486,
      "evEbitdaTTM": 39.8199
    },
    {
      "date": "2026-10-02",
      "roeTTM": 14.74,
      "roicTTM": 8.9,
      "psTTM": 2.9456,
      "pb": 10.0566,
      "evEbitdaTTM": 39.1138
    },
    {
      "date": "2026-10-03",
      "roeTTM": 14.74,
      "roicTTM": 8.9,
      "psTTM": 2.9342,
      "pb": 10.0178,
      "evEbitdaTTM": 38.9714
    },
    {
      "date": "2026-10-04",
      "roeTTM": 14.74,
      "roicTTM": 8.9,
      "psTTM": 3.114,
      "pb": 10.6314,
      "evEbitdaTTM": 41.2275
    },
    {
      "date": "2026-10-05",
      "roeTTM": 14.74,
      "roicTTM": 8.9,
      "psTTM": 3.114,
      "pb": 10.6314,
      "evEbitdaTTM": 41.2275
    },
    {
      "date": "2026-10-06",
      "roeTTM": 14.74,
      "roicTTM": 8.9,
      "psTTM": 3.0912,
      "pb": 10.5537,
      "evEbitdaTTM": 40.9418
    },
    {
      "date": "2026-10-07",
      "roeTTM": 14.74,
      "roicTTM": 8.9,
      "psTTM": 3.0694,
      "pb": 10.4793,
      "evEbitdaTTM": 40.668
    },
    {
      "date": "2026-10-08",
      "roeTTM": 14.74,
      "roicTTM": 8.9,
      "psTTM": 3.215,
      "pb": 10.9763,
      "evEbitdaTTM": 42.4957
    },
    {
      "date": "2026-10-09",
      "roeTTM": 14.74,
      "roicTTM": 8.9,
      "psTTM": 3.2323,
      "pb": 11.0356,
      "evEbitdaTTM": 42.7136
    },
    {
      "date": "2026-10-10",
      "roeTTM": 14.74,
      "roicTTM": 8.9,
      "psTTM": 3.2323,
      "pb": 11.0356,
      "evEbitdaTTM": 42.7136
    },
    {
      "date": "2026-10-11",
      "roeTTM": 14.74,
      "roicTTM": 8.9,
      "psTTM": 3.143,
      "pb": 10.7306,
      "evEbitdaTTM": 41.5923
    },
    {
      "date": "2026-10-12",
      "roeTTM": 14.74,
      "roicTTM": 8.9,
      "psTTM": 3.2254,
      "pb": 11.012,
      "evEbitdaTTM": 42.627
    },
    {
      "date": "2026-10-13",
      "roeTTM": 14.74,
      "roicTTM": 8.9,
      "psTTM": 3.2254,
      "pb": 11.012,
      "evEbitdaTTM": 42.627
    },
    {
      "date": "2026-10-14",
      "roeTTM": 14.74,
      "roicTTM": 8.9,
      "psTTM": 3.2199,
      "pb": 10.9932,
      "evEbitdaTTM": 42.5576
    },
    {
      "date": "2026-10-15",
      "roeTTM": 14.74,
      "roicTTM": 8.9,
      "psTTM": 3.2199,
      "pb": 10.9932,
      "evEbitdaTTM": 42.5576
    },
    {
      "date": "2026-10-16",
      "roeTTM": 14.74,
      "roicTTM": 8.9,
      "psTTM": 3.1117,
      "pb": 10.6238,
      "evEbitdaTTM": 41.1994
    },
    {
      "date": "2026-10-17",
      "roeTTM": 14.74,
      "roicTTM": 8.9,
      "psTTM": 2.8763,
      "pb": 9.82,
      "evEbitdaTTM": 38.2437
    },
    {
      "date": "2026-10-18",
      "roeTTM": 14.74,
      "roicTTM": 8.9,
      "psTTM": 2.8763,
      "pb": 9.82,
      "evEbitdaTTM": 38.2437
    },
    {
      "date": "2026-10-19",
      "roeTTM": 14.74,
      "roicTTM": 8.9,
      "psTTM": 2.887,
      "pb": 9.8565,
      "evEbitdaTTM": 38.3779
    },
    {
      "date": "2026-10-20",
      "roeTTM": 14.74,
      "roicTTM": 8.9,
      "psTTM": 2.887,
      "pb": 9.8565,
      "evEbitdaTTM": 38.3779
    },
    {
      "date": "2026-10-21",
      "roeTTM": 14.74,
      "roicTTM": 8.9,
      "psTTM": 2.887,
      "pb": 9.8565,
      "evEbitdaTTM": 38.3779
    },
    {
      "date": "2026-10-22",
      "roeTTM": 14.74,
      "roicTTM": 8.9,
      "psTTM": 2.6984,
      "pb": 9.2125,
      "evEbitdaTTM": 36.0102
    },
    {
      "date": "2026-10-23",
      "roeTTM": 14.74,
      "roicTTM": 8.9,
      "psTTM": 2.7714,
      "pb": 9.4618,
      "evEbitdaTTM": 36.9268
    },
    {
      "date": "2026-10-24",
      "roeTTM": 14.74,
      "roicTTM": 8.9,
      "psTTM": 2.6208,
      "pb": 8.9477,
      "evEbitdaTTM": 35.0364
    },
    {
      "date": "2026-10-25",
      "roeTTM": 14.74,
      "roicTTM": 8.9,
      "psTTM": 2.4529,
      "pb": 8.3745,
      "evEbitdaTTM": 32.9287
    },
    {
      "date": "2026-10-26",
      "roeTTM": 14.74,
      "roicTTM": 8.9,
      "psTTM": 2.4529,
      "pb": 8.3745,
      "evEbitdaTTM": 32.9287
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
    },
    {
      "date": "2026-09-08",
      "roeTTM": 23.72,
      "roicTTM": 13.13,
      "psTTM": 3.9111,
      "pb": 6.2223,
      "evEbitdaTTM": 19.6457
    },
    {
      "date": "2026-09-09",
      "roeTTM": 23.72,
      "roicTTM": 13.13,
      "psTTM": 3.9111,
      "pb": 6.2223,
      "evEbitdaTTM": 19.6457
    },
    {
      "date": "2026-09-10",
      "roeTTM": 23.72,
      "roicTTM": 13.13,
      "psTTM": 3.9111,
      "pb": 6.2223,
      "evEbitdaTTM": 19.6457
    },
    {
      "date": "2026-09-11",
      "roeTTM": 23.72,
      "roicTTM": 13.13,
      "psTTM": 3.8694,
      "pb": 6.156,
      "evEbitdaTTM": 19.472
    },
    {
      "date": "2026-09-12",
      "roeTTM": 23.72,
      "roicTTM": 13.13,
      "psTTM": 3.9416,
      "pb": 6.2709,
      "evEbitdaTTM": 19.7729
    },
    {
      "date": "2026-09-13",
      "roeTTM": 23.72,
      "roicTTM": 13.13,
      "psTTM": 3.9416,
      "pb": 6.2709,
      "evEbitdaTTM": 19.7729
    },
    {
      "date": "2026-09-14",
      "roeTTM": 23.72,
      "roicTTM": 13.13,
      "psTTM": 3.9084,
      "pb": 6.218,
      "evEbitdaTTM": 19.6344
    },
    {
      "date": "2026-09-15",
      "roeTTM": 23.72,
      "roicTTM": 13.13,
      "psTTM": 3.9084,
      "pb": 6.218,
      "evEbitdaTTM": 19.6344
    },
    {
      "date": "2026-09-16",
      "roeTTM": 23.72,
      "roicTTM": 13.13,
      "psTTM": 3.7546,
      "pb": 5.9734,
      "evEbitdaTTM": 18.9936
    },
    {
      "date": "2026-09-17",
      "roeTTM": 23.72,
      "roicTTM": 13.13,
      "psTTM": 3.7227,
      "pb": 5.9226,
      "evEbitdaTTM": 18.8606
    },
    {
      "date": "2026-09-18",
      "roeTTM": 23.72,
      "roicTTM": 13.13,
      "psTTM": 3.7227,
      "pb": 5.9226,
      "evEbitdaTTM": 18.8606
    },
    {
      "date": "2026-09-19",
      "roeTTM": 23.72,
      "roicTTM": 13.13,
      "psTTM": 3.7227,
      "pb": 5.9226,
      "evEbitdaTTM": 18.8606
    },
    {
      "date": "2026-09-20",
      "roeTTM": 23.72,
      "roicTTM": 13.13,
      "psTTM": 3.7626,
      "pb": 5.9861,
      "evEbitdaTTM": 19.0269
    },
    {
      "date": "2026-09-21",
      "roeTTM": 23.72,
      "roicTTM": 13.13,
      "psTTM": 3.7939,
      "pb": 6.0359,
      "evEbitdaTTM": 19.1575
    },
    {
      "date": "2026-09-22",
      "roeTTM": 23.72,
      "roicTTM": 13.13,
      "psTTM": 3.7939,
      "pb": 6.0359,
      "evEbitdaTTM": 19.1575
    },
    {
      "date": "2026-09-23",
      "roeTTM": 23.72,
      "roicTTM": 13.13,
      "psTTM": 3.8585,
      "pb": 6.1386,
      "evEbitdaTTM": 19.4264
    },
    {
      "date": "2026-09-24",
      "roeTTM": 23.72,
      "roicTTM": 13.13,
      "psTTM": 3.8585,
      "pb": 6.1386,
      "evEbitdaTTM": 19.4264
    },
    {
      "date": "2026-09-25",
      "roeTTM": 23.72,
      "roicTTM": 13.13,
      "psTTM": 3.9701,
      "pb": 6.3162,
      "evEbitdaTTM": 19.8918
    },
    {
      "date": "2026-09-26",
      "roeTTM": 23.72,
      "roicTTM": 13.13,
      "psTTM": 3.9323,
      "pb": 6.2561,
      "evEbitdaTTM": 19.7342
    },
    {
      "date": "2026-09-27",
      "roeTTM": 23.72,
      "roicTTM": 13.13,
      "psTTM": 3.9412,
      "pb": 6.2702,
      "evEbitdaTTM": 19.7712
    },
    {
      "date": "2026-09-28",
      "roeTTM": 23.72,
      "roicTTM": 13.13,
      "psTTM": 3.9612,
      "pb": 6.302,
      "evEbitdaTTM": 19.8545
    },
    {
      "date": "2026-09-29",
      "roeTTM": 23.72,
      "roicTTM": 13.13,
      "psTTM": 3.9612,
      "pb": 6.302,
      "evEbitdaTTM": 19.8545
    },
    {
      "date": "2026-09-30",
      "roeTTM": 23.72,
      "roicTTM": 13.13,
      "psTTM": 3.9714,
      "pb": 6.3183,
      "evEbitdaTTM": 19.8973
    },
    {
      "date": "2026-10-01",
      "roeTTM": 23.72,
      "roicTTM": 13.13,
      "psTTM": 3.8864,
      "pb": 6.183,
      "evEbitdaTTM": 19.5428
    },
    {
      "date": "2026-10-02",
      "roeTTM": 23.72,
      "roicTTM": 13.13,
      "psTTM": 3.8926,
      "pb": 6.1929,
      "evEbitdaTTM": 19.5688
    },
    {
      "date": "2026-10-03",
      "roeTTM": 23.72,
      "roicTTM": 13.13,
      "psTTM": 3.946,
      "pb": 6.2778,
      "evEbitdaTTM": 19.7912
    },
    {
      "date": "2026-10-04",
      "roeTTM": 23.72,
      "roicTTM": 13.13,
      "psTTM": 4.0153,
      "pb": 6.3882,
      "evEbitdaTTM": 20.0802
    },
    {
      "date": "2026-10-05",
      "roeTTM": 23.72,
      "roicTTM": 13.13,
      "psTTM": 4.0153,
      "pb": 6.3882,
      "evEbitdaTTM": 20.0802
    },
    {
      "date": "2026-10-06",
      "roeTTM": 23.72,
      "roicTTM": 13.13,
      "psTTM": 4.0367,
      "pb": 6.4222,
      "evEbitdaTTM": 20.1694
    },
    {
      "date": "2026-10-07",
      "roeTTM": 23.72,
      "roicTTM": 13.13,
      "psTTM": 4.0965,
      "pb": 6.5173,
      "evEbitdaTTM": 20.4187
    },
    {
      "date": "2026-10-08",
      "roeTTM": 23.72,
      "roicTTM": 13.13,
      "psTTM": 4.1437,
      "pb": 6.5924,
      "evEbitdaTTM": 20.6152
    },
    {
      "date": "2026-10-09",
      "roeTTM": 23.72,
      "roicTTM": 13.13,
      "psTTM": 4.0453,
      "pb": 6.4358,
      "evEbitdaTTM": 20.205
    },
    {
      "date": "2026-10-10",
      "roeTTM": 23.72,
      "roicTTM": 13.13,
      "psTTM": 4.0453,
      "pb": 6.4358,
      "evEbitdaTTM": 20.205
    },
    {
      "date": "2026-10-11",
      "roeTTM": 23.72,
      "roicTTM": 13.13,
      "psTTM": 4.0383,
      "pb": 6.4246,
      "evEbitdaTTM": 20.1758
    },
    {
      "date": "2026-10-12",
      "roeTTM": 23.72,
      "roicTTM": 13.13,
      "psTTM": 4.0248,
      "pb": 6.4031,
      "evEbitdaTTM": 20.1195
    },
    {
      "date": "2026-10-13",
      "roeTTM": 23.72,
      "roicTTM": 13.13,
      "psTTM": 4.0248,
      "pb": 6.4031,
      "evEbitdaTTM": 20.1195
    },
    {
      "date": "2026-10-14",
      "roeTTM": 23.72,
      "roicTTM": 13.13,
      "psTTM": 4.0293,
      "pb": 6.4104,
      "evEbitdaTTM": 20.1386
    },
    {
      "date": "2026-10-15",
      "roeTTM": 23.72,
      "roicTTM": 13.13,
      "psTTM": 4.0293,
      "pb": 6.4104,
      "evEbitdaTTM": 20.1386
    },
    {
      "date": "2026-10-16",
      "roeTTM": 23.72,
      "roicTTM": 13.13,
      "psTTM": 3.9948,
      "pb": 6.3555,
      "evEbitdaTTM": 19.9946
    },
    {
      "date": "2026-10-17",
      "roeTTM": 23.72,
      "roicTTM": 13.13,
      "psTTM": 3.9433,
      "pb": 6.2735,
      "evEbitdaTTM": 19.7798
    },
    {
      "date": "2026-10-18",
      "roeTTM": 23.72,
      "roicTTM": 13.13,
      "psTTM": 3.9433,
      "pb": 6.2735,
      "evEbitdaTTM": 19.7798
    },
    {
      "date": "2026-10-19",
      "roeTTM": 23.72,
      "roicTTM": 13.13,
      "psTTM": 3.9143,
      "pb": 6.2274,
      "evEbitdaTTM": 19.6592
    },
    {
      "date": "2026-10-20",
      "roeTTM": 23.72,
      "roicTTM": 13.13,
      "psTTM": 3.9143,
      "pb": 6.2274,
      "evEbitdaTTM": 19.6592
    },
    {
      "date": "2026-10-21",
      "roeTTM": 23.72,
      "roicTTM": 13.13,
      "psTTM": 3.9143,
      "pb": 6.2274,
      "evEbitdaTTM": 19.6592
    },
    {
      "date": "2026-10-22",
      "roeTTM": 23.72,
      "roicTTM": 13.13,
      "psTTM": 3.9114,
      "pb": 6.2228,
      "evEbitdaTTM": 19.6472
    },
    {
      "date": "2026-10-23",
      "roeTTM": 23.72,
      "roicTTM": 13.13,
      "psTTM": 3.9387,
      "pb": 6.2662,
      "evEbitdaTTM": 19.7607
    },
    {
      "date": "2026-10-24",
      "roeTTM": 23.72,
      "roicTTM": 13.13,
      "psTTM": 3.7613,
      "pb": 5.9841,
      "evEbitdaTTM": 19.0216
    },
    {
      "date": "2026-10-25",
      "roeTTM": 23.72,
      "roicTTM": 13.13,
      "psTTM": 3.8098,
      "pb": 6.0612,
      "evEbitdaTTM": 19.2236
    },
    {
      "date": "2026-10-26",
      "roeTTM": 23.72,
      "roicTTM": 13.13,
      "psTTM": 3.8098,
      "pb": 6.0612,
      "evEbitdaTTM": 19.2236
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
    },
    {
      "date": "2026-09-08",
      "roeTTM": 42.11,
      "roicTTM": 24.610000000000003,
      "psTTM": 9.4081,
      "pb": 22.7007,
      "evEbitdaTTM": 45.5764
    },
    {
      "date": "2026-09-09",
      "roeTTM": 42.11,
      "roicTTM": 24.610000000000003,
      "psTTM": 9.4081,
      "pb": 22.7007,
      "evEbitdaTTM": 45.5764
    },
    {
      "date": "2026-09-10",
      "roeTTM": 42.11,
      "roicTTM": 24.610000000000003,
      "psTTM": 9.4081,
      "pb": 22.7007,
      "evEbitdaTTM": 45.5764
    },
    {
      "date": "2026-09-11",
      "roeTTM": 42.11,
      "roicTTM": 24.610000000000003,
      "psTTM": 8.8165,
      "pb": 21.2732,
      "evEbitdaTTM": 42.7139
    },
    {
      "date": "2026-09-12",
      "roeTTM": 42.11,
      "roicTTM": 24.610000000000003,
      "psTTM": 8.621,
      "pb": 20.8015,
      "evEbitdaTTM": 41.7679
    },
    {
      "date": "2026-09-13",
      "roeTTM": 42.11,
      "roicTTM": 24.610000000000003,
      "psTTM": 8.621,
      "pb": 20.8015,
      "evEbitdaTTM": 41.7679
    },
    {
      "date": "2026-09-14",
      "roeTTM": 42.11,
      "roicTTM": 24.610000000000003,
      "psTTM": 8.621,
      "pb": 20.8015,
      "evEbitdaTTM": 41.7679
    },
    {
      "date": "2026-09-15",
      "roeTTM": 42.11,
      "roicTTM": 24.610000000000003,
      "psTTM": 8.621,
      "pb": 20.8015,
      "evEbitdaTTM": 41.7679
    },
    {
      "date": "2026-09-16",
      "roeTTM": 42.11,
      "roicTTM": 24.610000000000003,
      "psTTM": 8.621,
      "pb": 20.8015,
      "evEbitdaTTM": 41.7679
    },
    {
      "date": "2026-09-17",
      "roeTTM": 42.11,
      "roicTTM": 24.610000000000003,
      "psTTM": 8.621,
      "pb": 20.8015,
      "evEbitdaTTM": 41.7679
    },
    {
      "date": "2026-09-18",
      "roeTTM": 42.11,
      "roicTTM": 24.610000000000003,
      "psTTM": 8.621,
      "pb": 20.8015,
      "evEbitdaTTM": 41.7679
    },
    {
      "date": "2026-09-19",
      "roeTTM": 42.11,
      "roicTTM": 24.610000000000003,
      "psTTM": 8.621,
      "pb": 20.8015,
      "evEbitdaTTM": 41.7679
    },
    {
      "date": "2026-09-20",
      "roeTTM": 42.11,
      "roicTTM": 24.610000000000003,
      "psTTM": 8.621,
      "pb": 20.8015,
      "evEbitdaTTM": 41.7679
    },
    {
      "date": "2026-09-21",
      "roeTTM": 42.11,
      "roicTTM": 24.610000000000003,
      "psTTM": 8.3637,
      "pb": 20.1808,
      "evEbitdaTTM": 40.5232
    },
    {
      "date": "2026-09-22",
      "roeTTM": 42.11,
      "roicTTM": 24.610000000000003,
      "psTTM": 8.3637,
      "pb": 20.1808,
      "evEbitdaTTM": 40.5232
    },
    {
      "date": "2026-09-23",
      "roeTTM": 42.11,
      "roicTTM": 24.610000000000003,
      "psTTM": 8.5088,
      "pb": 20.5308,
      "evEbitdaTTM": 41.2251
    },
    {
      "date": "2026-09-24",
      "roeTTM": 42.11,
      "roicTTM": 24.610000000000003,
      "psTTM": 8.5088,
      "pb": 20.5308,
      "evEbitdaTTM": 41.2251
    },
    {
      "date": "2026-09-25",
      "roeTTM": 42.11,
      "roicTTM": 24.610000000000003,
      "psTTM": 8.5635,
      "pb": 20.6628,
      "evEbitdaTTM": 41.4899
    },
    {
      "date": "2026-09-26",
      "roeTTM": 42.11,
      "roicTTM": 24.610000000000003,
      "psTTM": 8.341,
      "pb": 20.1259,
      "evEbitdaTTM": 40.4131
    },
    {
      "date": "2026-09-27",
      "roeTTM": 42.11,
      "roicTTM": 24.610000000000003,
      "psTTM": 8.5581,
      "pb": 20.6497,
      "evEbitdaTTM": 41.4636
    },
    {
      "date": "2026-09-28",
      "roeTTM": 42.11,
      "roicTTM": 24.610000000000003,
      "psTTM": 8.5581,
      "pb": 20.6497,
      "evEbitdaTTM": 41.4636
    },
    {
      "date": "2026-09-29",
      "roeTTM": 42.11,
      "roicTTM": 24.610000000000003,
      "psTTM": 8.5581,
      "pb": 20.6497,
      "evEbitdaTTM": 41.4636
    },
    {
      "date": "2026-09-30",
      "roeTTM": 42.11,
      "roicTTM": 24.610000000000003,
      "psTTM": 8.5581,
      "pb": 20.6497,
      "evEbitdaTTM": 41.4636
    },
    {
      "date": "2026-10-01",
      "roeTTM": 42.11,
      "roicTTM": 24.610000000000003,
      "psTTM": 8.3785,
      "pb": 20.2164,
      "evEbitdaTTM": 40.5946
    },
    {
      "date": "2026-10-02",
      "roeTTM": 42.11,
      "roicTTM": 24.610000000000003,
      "psTTM": 8.3285,
      "pb": 20.0958,
      "evEbitdaTTM": 40.3529
    },
    {
      "date": "2026-10-03",
      "roeTTM": 42.11,
      "roicTTM": 24.610000000000003,
      "psTTM": 8.0927,
      "pb": 19.527,
      "evEbitdaTTM": 39.2121
    },
    {
      "date": "2026-10-04",
      "roeTTM": 42.11,
      "roicTTM": 24.610000000000003,
      "psTTM": 8.316,
      "pb": 20.0657,
      "evEbitdaTTM": 40.2924
    },
    {
      "date": "2026-10-05",
      "roeTTM": 42.11,
      "roicTTM": 24.610000000000003,
      "psTTM": 8.316,
      "pb": 20.0657,
      "evEbitdaTTM": 40.2924
    },
    {
      "date": "2026-10-06",
      "roeTTM": 42.11,
      "roicTTM": 24.610000000000003,
      "psTTM": 8.316,
      "pb": 20.0657,
      "evEbitdaTTM": 40.2924
    },
    {
      "date": "2026-10-07",
      "roeTTM": 42.11,
      "roicTTM": 24.610000000000003,
      "psTTM": 8.4384,
      "pb": 20.3609,
      "evEbitdaTTM": 40.8844
    },
    {
      "date": "2026-10-08",
      "roeTTM": 42.11,
      "roicTTM": 24.610000000000003,
      "psTTM": 8.4955,
      "pb": 20.4987,
      "evEbitdaTTM": 41.1607
    },
    {
      "date": "2026-10-09",
      "roeTTM": 42.11,
      "roicTTM": 24.610000000000003,
      "psTTM": 8.2148,
      "pb": 19.8215,
      "evEbitdaTTM": 39.8028
    },
    {
      "date": "2026-10-10",
      "roeTTM": 42.11,
      "roicTTM": 24.610000000000003,
      "psTTM": 8.2148,
      "pb": 19.8215,
      "evEbitdaTTM": 39.8028
    },
    {
      "date": "2026-10-11",
      "roeTTM": 42.11,
      "roicTTM": 24.610000000000003,
      "psTTM": 8.154,
      "pb": 19.6746,
      "evEbitdaTTM": 39.5082
    },
    {
      "date": "2026-10-12",
      "roeTTM": 42.11,
      "roicTTM": 24.610000000000003,
      "psTTM": 8.142,
      "pb": 19.6459,
      "evEbitdaTTM": 39.4506
    },
    {
      "date": "2026-10-13",
      "roeTTM": 42.11,
      "roicTTM": 24.610000000000003,
      "psTTM": 8.142,
      "pb": 19.6459,
      "evEbitdaTTM": 39.4506
    },
    {
      "date": "2026-10-14",
      "roeTTM": 42.11,
      "roicTTM": 24.610000000000003,
      "psTTM": 8.0547,
      "pb": 19.4351,
      "evEbitdaTTM": 39.0279
    },
    {
      "date": "2026-10-15",
      "roeTTM": 42.11,
      "roicTTM": 24.610000000000003,
      "psTTM": 8.0547,
      "pb": 19.4351,
      "evEbitdaTTM": 39.0279
    },
    {
      "date": "2026-10-16",
      "roeTTM": 42.11,
      "roicTTM": 24.610000000000003,
      "psTTM": 7.4535,
      "pb": 17.9846,
      "evEbitdaTTM": 36.1192
    },
    {
      "date": "2026-10-17",
      "roeTTM": 42.11,
      "roicTTM": 24.610000000000003,
      "psTTM": 7.1663,
      "pb": 17.2915,
      "evEbitdaTTM": 34.7294
    },
    {
      "date": "2026-10-18",
      "roeTTM": 42.11,
      "roicTTM": 24.610000000000003,
      "psTTM": 7.1663,
      "pb": 17.2915,
      "evEbitdaTTM": 34.7294
    },
    {
      "date": "2026-10-19",
      "roeTTM": 42.11,
      "roicTTM": 24.610000000000003,
      "psTTM": 6.9227,
      "pb": 16.7036,
      "evEbitdaTTM": 33.5505
    },
    {
      "date": "2026-10-20",
      "roeTTM": 42.11,
      "roicTTM": 24.610000000000003,
      "psTTM": 6.9227,
      "pb": 16.7036,
      "evEbitdaTTM": 33.5505
    },
    {
      "date": "2026-10-21",
      "roeTTM": 42.11,
      "roicTTM": 24.610000000000003,
      "psTTM": 6.9227,
      "pb": 16.7036,
      "evEbitdaTTM": 33.5505
    },
    {
      "date": "2026-10-22",
      "roeTTM": 42.11,
      "roicTTM": 24.610000000000003,
      "psTTM": 6.9075,
      "pb": 16.6672,
      "evEbitdaTTM": 33.4773
    },
    {
      "date": "2026-10-23",
      "roeTTM": 42.11,
      "roicTTM": 24.610000000000003,
      "psTTM": 7.19,
      "pb": 17.3488,
      "evEbitdaTTM": 34.8442
    },
    {
      "date": "2026-10-24",
      "roeTTM": 42.11,
      "roicTTM": 24.610000000000003,
      "psTTM": 6.5559,
      "pb": 15.8188,
      "evEbitdaTTM": 31.776
    },
    {
      "date": "2026-10-25",
      "roeTTM": 42.11,
      "roicTTM": 24.610000000000003,
      "psTTM": 6.5656,
      "pb": 15.8422,
      "evEbitdaTTM": 31.8231
    },
    {
      "date": "2026-10-26",
      "roeTTM": 42.11,
      "roicTTM": 24.610000000000003,
      "psTTM": 6.5656,
      "pb": 15.8422,
      "evEbitdaTTM": 31.8231
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
    },
    {
      "date": "2026-09-08",
      "roeTTM": 12.620000000000001,
      "roicTTM": 8.57,
      "psTTM": 3.0657,
      "pb": 8.605,
      "evEbitdaTTM": 35.1102
    },
    {
      "date": "2026-09-09",
      "roeTTM": 12.620000000000001,
      "roicTTM": 8.57,
      "psTTM": 3.0657,
      "pb": 8.605,
      "evEbitdaTTM": 35.1102
    },
    {
      "date": "2026-09-10",
      "roeTTM": 12.620000000000001,
      "roicTTM": 8.57,
      "psTTM": 3.0657,
      "pb": 8.605,
      "evEbitdaTTM": 35.1102
    },
    {
      "date": "2026-09-11",
      "roeTTM": 12.620000000000001,
      "roicTTM": 8.57,
      "psTTM": 2.9846,
      "pb": 8.3771,
      "evEbitdaTTM": 34.2178
    },
    {
      "date": "2026-09-12",
      "roeTTM": 12.620000000000001,
      "roicTTM": 8.57,
      "psTTM": 3.03,
      "pb": 8.5047,
      "evEbitdaTTM": 34.7173
    },
    {
      "date": "2026-09-13",
      "roeTTM": 12.620000000000001,
      "roicTTM": 8.57,
      "psTTM": 3.03,
      "pb": 8.5047,
      "evEbitdaTTM": 34.7173
    },
    {
      "date": "2026-09-14",
      "roeTTM": 12.620000000000001,
      "roicTTM": 8.57,
      "psTTM": 2.9813,
      "pb": 8.3681,
      "evEbitdaTTM": 34.1823
    },
    {
      "date": "2026-09-15",
      "roeTTM": 12.620000000000001,
      "roicTTM": 8.57,
      "psTTM": 2.9813,
      "pb": 8.3681,
      "evEbitdaTTM": 34.1823
    },
    {
      "date": "2026-09-16",
      "roeTTM": 12.620000000000001,
      "roicTTM": 8.57,
      "psTTM": 2.84,
      "pb": 7.9713,
      "evEbitdaTTM": 32.6286
    },
    {
      "date": "2026-09-17",
      "roeTTM": 12.620000000000001,
      "roicTTM": 8.57,
      "psTTM": 2.8111,
      "pb": 7.8902,
      "evEbitdaTTM": 32.3109
    },
    {
      "date": "2026-09-18",
      "roeTTM": 12.620000000000001,
      "roicTTM": 8.57,
      "psTTM": 2.8111,
      "pb": 7.8902,
      "evEbitdaTTM": 32.3109
    },
    {
      "date": "2026-09-19",
      "roeTTM": 12.620000000000001,
      "roicTTM": 8.57,
      "psTTM": 2.8111,
      "pb": 7.8902,
      "evEbitdaTTM": 32.3109
    },
    {
      "date": "2026-09-20",
      "roeTTM": 12.620000000000001,
      "roicTTM": 8.57,
      "psTTM": 2.9114,
      "pb": 8.1718,
      "evEbitdaTTM": 33.4137
    },
    {
      "date": "2026-09-21",
      "roeTTM": 12.620000000000001,
      "roicTTM": 8.57,
      "psTTM": 2.9722,
      "pb": 8.3424,
      "evEbitdaTTM": 34.0819
    },
    {
      "date": "2026-09-22",
      "roeTTM": 12.620000000000001,
      "roicTTM": 8.57,
      "psTTM": 2.9722,
      "pb": 8.3424,
      "evEbitdaTTM": 34.0819
    },
    {
      "date": "2026-09-23",
      "roeTTM": 12.620000000000001,
      "roicTTM": 8.57,
      "psTTM": 3.1091,
      "pb": 8.7266,
      "evEbitdaTTM": 35.5863
    },
    {
      "date": "2026-09-24",
      "roeTTM": 12.620000000000001,
      "roicTTM": 8.57,
      "psTTM": 3.1091,
      "pb": 8.7266,
      "evEbitdaTTM": 35.5863
    },
    {
      "date": "2026-09-25",
      "roeTTM": 12.620000000000001,
      "roicTTM": 8.57,
      "psTTM": 3.065,
      "pb": 8.6028,
      "evEbitdaTTM": 35.1016
    },
    {
      "date": "2026-09-26",
      "roeTTM": 12.620000000000001,
      "roicTTM": 8.57,
      "psTTM": 3.0317,
      "pb": 8.5095,
      "evEbitdaTTM": 34.7363
    },
    {
      "date": "2026-09-27",
      "roeTTM": 12.620000000000001,
      "roicTTM": 8.57,
      "psTTM": 3.1026,
      "pb": 8.7085,
      "evEbitdaTTM": 35.5153
    },
    {
      "date": "2026-09-28",
      "roeTTM": 12.620000000000001,
      "roicTTM": 8.57,
      "psTTM": 3.1194,
      "pb": 8.7557,
      "evEbitdaTTM": 35.7006
    },
    {
      "date": "2026-09-29",
      "roeTTM": 12.620000000000001,
      "roicTTM": 8.57,
      "psTTM": 3.1194,
      "pb": 8.7557,
      "evEbitdaTTM": 35.7006
    },
    {
      "date": "2026-09-30",
      "roeTTM": 12.620000000000001,
      "roicTTM": 8.57,
      "psTTM": 2.7579,
      "pb": 7.741,
      "evEbitdaTTM": 31.7266
    },
    {
      "date": "2026-10-01",
      "roeTTM": 12.620000000000001,
      "roicTTM": 8.57,
      "psTTM": 2.8879,
      "pb": 8.1057,
      "evEbitdaTTM": 33.1549
    },
    {
      "date": "2026-10-02",
      "roeTTM": 12.620000000000001,
      "roicTTM": 8.57,
      "psTTM": 2.9121,
      "pb": 8.1738,
      "evEbitdaTTM": 33.4215
    },
    {
      "date": "2026-10-03",
      "roeTTM": 12.620000000000001,
      "roicTTM": 8.57,
      "psTTM": 2.9221,
      "pb": 8.2019,
      "evEbitdaTTM": 33.5314
    },
    {
      "date": "2026-10-04",
      "roeTTM": 12.620000000000001,
      "roicTTM": 8.57,
      "psTTM": 2.8323,
      "pb": 7.9499,
      "evEbitdaTTM": 32.5446
    },
    {
      "date": "2026-10-05",
      "roeTTM": 12.620000000000001,
      "roicTTM": 8.57,
      "psTTM": 2.8323,
      "pb": 7.9499,
      "evEbitdaTTM": 32.5446
    },
    {
      "date": "2026-10-06",
      "roeTTM": 12.620000000000001,
      "roicTTM": 8.57,
      "psTTM": 2.8065,
      "pb": 7.8774,
      "evEbitdaTTM": 32.2607
    },
    {
      "date": "2026-10-07",
      "roeTTM": 12.620000000000001,
      "roicTTM": 8.57,
      "psTTM": 2.9263,
      "pb": 8.2136,
      "evEbitdaTTM": 33.5773
    },
    {
      "date": "2026-10-08",
      "roeTTM": 12.620000000000001,
      "roicTTM": 8.57,
      "psTTM": 3.0328,
      "pb": 8.5126,
      "evEbitdaTTM": 34.7484
    },
    {
      "date": "2026-10-09",
      "roeTTM": 12.620000000000001,
      "roicTTM": 8.57,
      "psTTM": 2.8879,
      "pb": 8.1059,
      "evEbitdaTTM": 33.1557
    },
    {
      "date": "2026-10-10",
      "roeTTM": 12.620000000000001,
      "roicTTM": 8.57,
      "psTTM": 2.8879,
      "pb": 8.1059,
      "evEbitdaTTM": 33.1557
    },
    {
      "date": "2026-10-11",
      "roeTTM": 12.620000000000001,
      "roicTTM": 8.57,
      "psTTM": 2.8775,
      "pb": 8.0768,
      "evEbitdaTTM": 33.0415
    },
    {
      "date": "2026-10-12",
      "roeTTM": 12.620000000000001,
      "roicTTM": 8.57,
      "psTTM": 2.8594,
      "pb": 8.0259,
      "evEbitdaTTM": 32.8424
    },
    {
      "date": "2026-10-13",
      "roeTTM": 12.620000000000001,
      "roicTTM": 8.57,
      "psTTM": 2.8594,
      "pb": 8.0259,
      "evEbitdaTTM": 32.8424
    },
    {
      "date": "2026-10-14",
      "roeTTM": 12.620000000000001,
      "roicTTM": 8.57,
      "psTTM": 2.8394,
      "pb": 7.9697,
      "evEbitdaTTM": 32.6221
    },
    {
      "date": "2026-10-15",
      "roeTTM": 12.620000000000001,
      "roicTTM": 8.57,
      "psTTM": 2.8394,
      "pb": 7.9697,
      "evEbitdaTTM": 32.6221
    },
    {
      "date": "2026-10-16",
      "roeTTM": 12.620000000000001,
      "roicTTM": 8.57,
      "psTTM": 2.555,
      "pb": 7.1714,
      "evEbitdaTTM": 29.496
    },
    {
      "date": "2026-10-17",
      "roeTTM": 12.620000000000001,
      "roicTTM": 8.57,
      "psTTM": 2.384,
      "pb": 6.6916,
      "evEbitdaTTM": 27.6167
    },
    {
      "date": "2026-10-18",
      "roeTTM": 12.620000000000001,
      "roicTTM": 8.57,
      "psTTM": 2.384,
      "pb": 6.6916,
      "evEbitdaTTM": 27.6167
    },
    {
      "date": "2026-10-19",
      "roeTTM": 12.620000000000001,
      "roicTTM": 8.57,
      "psTTM": 2.3481,
      "pb": 6.5908,
      "evEbitdaTTM": 27.2223
    },
    {
      "date": "2026-10-20",
      "roeTTM": 12.620000000000001,
      "roicTTM": 8.57,
      "psTTM": 2.3481,
      "pb": 6.5908,
      "evEbitdaTTM": 27.2223
    },
    {
      "date": "2026-10-21",
      "roeTTM": 12.620000000000001,
      "roicTTM": 8.57,
      "psTTM": 2.3481,
      "pb": 6.5908,
      "evEbitdaTTM": 27.2223
    },
    {
      "date": "2026-10-22",
      "roeTTM": 12.620000000000001,
      "roicTTM": 8.57,
      "psTTM": 2.3638,
      "pb": 6.6347,
      "evEbitdaTTM": 27.3939
    },
    {
      "date": "2026-10-23",
      "roeTTM": 12.620000000000001,
      "roicTTM": 8.57,
      "psTTM": 2.3807,
      "pb": 6.6823,
      "evEbitdaTTM": 27.5803
    },
    {
      "date": "2026-10-24",
      "roeTTM": 12.620000000000001,
      "roicTTM": 8.57,
      "psTTM": 2.1458,
      "pb": 6.0228,
      "evEbitdaTTM": 24.9976
    },
    {
      "date": "2026-10-25",
      "roeTTM": 12.620000000000001,
      "roicTTM": 8.57,
      "psTTM": 2.1377,
      "pb": 6.0002,
      "evEbitdaTTM": 24.9092
    },
    {
      "date": "2026-10-26",
      "roeTTM": 12.620000000000001,
      "roicTTM": 8.57,
      "psTTM": 2.1377,
      "pb": 6.0002,
      "evEbitdaTTM": 24.9092
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
    },
    {
      "date": "2026-09-08",
      "roeTTM": 212.44,
      "roicTTM": 50.519999999999996,
      "psTTM": 15.7839,
      "pb": 88.8254,
      "evEbitdaTTM": 46.0644
    },
    {
      "date": "2026-09-09",
      "roeTTM": 212.44,
      "roicTTM": 50.519999999999996,
      "psTTM": 15.7839,
      "pb": 88.8254,
      "evEbitdaTTM": 46.0644
    },
    {
      "date": "2026-09-10",
      "roeTTM": 212.44,
      "roicTTM": 50.519999999999996,
      "psTTM": 15.7839,
      "pb": 88.8254,
      "evEbitdaTTM": 46.0644
    },
    {
      "date": "2026-09-11",
      "roeTTM": 212.44,
      "roicTTM": 50.519999999999996,
      "psTTM": 16.4649,
      "pb": 92.6575,
      "evEbitdaTTM": 48.0327
    },
    {
      "date": "2026-09-12",
      "roeTTM": 212.44,
      "roicTTM": 50.519999999999996,
      "psTTM": 15.4797,
      "pb": 87.1135,
      "evEbitdaTTM": 45.1851
    },
    {
      "date": "2026-09-13",
      "roeTTM": 212.44,
      "roicTTM": 50.519999999999996,
      "psTTM": 15.4797,
      "pb": 87.1135,
      "evEbitdaTTM": 45.1851
    },
    {
      "date": "2026-09-14",
      "roeTTM": 212.44,
      "roicTTM": 50.519999999999996,
      "psTTM": 15.4797,
      "pb": 87.1135,
      "evEbitdaTTM": 45.1851
    },
    {
      "date": "2026-09-15",
      "roeTTM": 212.44,
      "roicTTM": 50.519999999999996,
      "psTTM": 15.4797,
      "pb": 87.1135,
      "evEbitdaTTM": 45.1851
    },
    {
      "date": "2026-09-16",
      "roeTTM": 212.44,
      "roicTTM": 50.519999999999996,
      "psTTM": 15.4797,
      "pb": 87.1135,
      "evEbitdaTTM": 45.1851
    },
    {
      "date": "2026-09-17",
      "roeTTM": 212.44,
      "roicTTM": 50.519999999999996,
      "psTTM": 15.0206,
      "pb": 84.53,
      "evEbitdaTTM": 43.8581
    },
    {
      "date": "2026-09-18",
      "roeTTM": 212.44,
      "roicTTM": 50.519999999999996,
      "psTTM": 15.0206,
      "pb": 84.53,
      "evEbitdaTTM": 43.8581
    },
    {
      "date": "2026-09-19",
      "roeTTM": 212.44,
      "roicTTM": 50.519999999999996,
      "psTTM": 15.0206,
      "pb": 84.53,
      "evEbitdaTTM": 43.8581
    },
    {
      "date": "2026-09-20",
      "roeTTM": 212.44,
      "roicTTM": 50.519999999999996,
      "psTTM": 15.1782,
      "pb": 85.4167,
      "evEbitdaTTM": 44.3136
    },
    {
      "date": "2026-09-21",
      "roeTTM": 212.44,
      "roicTTM": 50.519999999999996,
      "psTTM": 16.0134,
      "pb": 90.1167,
      "evEbitdaTTM": 46.7276
    },
    {
      "date": "2026-09-22",
      "roeTTM": 212.44,
      "roicTTM": 50.519999999999996,
      "psTTM": 16.0134,
      "pb": 90.1167,
      "evEbitdaTTM": 46.7276
    },
    {
      "date": "2026-09-23",
      "roeTTM": 212.44,
      "roicTTM": 50.519999999999996,
      "psTTM": 16.359,
      "pb": 92.0616,
      "evEbitdaTTM": 47.7266
    },
    {
      "date": "2026-09-24",
      "roeTTM": 212.44,
      "roicTTM": 50.519999999999996,
      "psTTM": 16.359,
      "pb": 92.0616,
      "evEbitdaTTM": 47.7266
    },
    {
      "date": "2026-09-25",
      "roeTTM": 212.44,
      "roicTTM": 50.519999999999996,
      "psTTM": 17.2267,
      "pb": 96.9448,
      "evEbitdaTTM": 50.2347
    },
    {
      "date": "2026-09-26",
      "roeTTM": 212.44,
      "roicTTM": 50.519999999999996,
      "psTTM": 16.8922,
      "pb": 95.0622,
      "evEbitdaTTM": 49.2678
    },
    {
      "date": "2026-09-27",
      "roeTTM": 212.44,
      "roicTTM": 50.519999999999996,
      "psTTM": 16.8922,
      "pb": 95.0622,
      "evEbitdaTTM": 49.2678
    },
    {
      "date": "2026-09-28",
      "roeTTM": 212.44,
      "roicTTM": 50.519999999999996,
      "psTTM": 17.0956,
      "pb": 96.2071,
      "evEbitdaTTM": 49.8558
    },
    {
      "date": "2026-09-29",
      "roeTTM": 212.44,
      "roicTTM": 50.519999999999996,
      "psTTM": 17.0956,
      "pb": 96.2071,
      "evEbitdaTTM": 49.8558
    },
    {
      "date": "2026-09-30",
      "roeTTM": 212.44,
      "roicTTM": 50.519999999999996,
      "psTTM": 17.0956,
      "pb": 96.2071,
      "evEbitdaTTM": 49.8558
    },
    {
      "date": "2026-10-01",
      "roeTTM": 212.44,
      "roicTTM": 50.519999999999996,
      "psTTM": 17.0326,
      "pb": 95.8524,
      "evEbitdaTTM": 49.6737
    },
    {
      "date": "2026-10-02",
      "roeTTM": 212.44,
      "roicTTM": 50.519999999999996,
      "psTTM": 17.1983,
      "pb": 96.7853,
      "evEbitdaTTM": 50.1528
    },
    {
      "date": "2026-10-03",
      "roeTTM": 212.44,
      "roicTTM": 50.519999999999996,
      "psTTM": 17.6315,
      "pb": 99.2229,
      "evEbitdaTTM": 51.4048
    },
    {
      "date": "2026-10-04",
      "roeTTM": 212.44,
      "roicTTM": 50.519999999999996,
      "psTTM": 15.8306,
      "pb": 89.0883,
      "evEbitdaTTM": 46.1994
    },
    {
      "date": "2026-10-05",
      "roeTTM": 212.44,
      "roicTTM": 50.519999999999996,
      "psTTM": 15.8306,
      "pb": 89.0883,
      "evEbitdaTTM": 46.1994
    },
    {
      "date": "2026-10-06",
      "roeTTM": 212.44,
      "roicTTM": 50.519999999999996,
      "psTTM": 15.8306,
      "pb": 89.0883,
      "evEbitdaTTM": 46.1994
    },
    {
      "date": "2026-10-07",
      "roeTTM": 212.44,
      "roicTTM": 50.519999999999996,
      "psTTM": 16.541,
      "pb": 93.0863,
      "evEbitdaTTM": 48.2529
    },
    {
      "date": "2026-10-08",
      "roeTTM": 212.44,
      "roicTTM": 50.519999999999996,
      "psTTM": 15.0221,
      "pb": 84.5384,
      "evEbitdaTTM": 43.8624
    },
    {
      "date": "2026-10-09",
      "roeTTM": 212.44,
      "roicTTM": 50.519999999999996,
      "psTTM": 15.0583,
      "pb": 84.7419,
      "evEbitdaTTM": 43.967
    },
    {
      "date": "2026-10-10",
      "roeTTM": 212.44,
      "roicTTM": 50.519999999999996,
      "psTTM": 15.0583,
      "pb": 84.7419,
      "evEbitdaTTM": 43.967
    },
    {
      "date": "2026-10-11",
      "roeTTM": 212.44,
      "roicTTM": 50.519999999999996,
      "psTTM": 14.6001,
      "pb": 82.1637,
      "evEbitdaTTM": 42.6427
    },
    {
      "date": "2026-10-12",
      "roeTTM": 212.44,
      "roicTTM": 50.519999999999996,
      "psTTM": 14.6001,
      "pb": 82.1637,
      "evEbitdaTTM": 42.6427
    },
    {
      "date": "2026-10-13",
      "roeTTM": 212.44,
      "roicTTM": 50.519999999999996,
      "psTTM": 14.6001,
      "pb": 82.1637,
      "evEbitdaTTM": 42.6427
    },
    {
      "date": "2026-10-14",
      "roeTTM": 212.44,
      "roicTTM": 50.519999999999996,
      "psTTM": 14.0454,
      "pb": 79.0419,
      "evEbitdaTTM": 41.0393
    },
    {
      "date": "2026-10-15",
      "roeTTM": 212.44,
      "roicTTM": 50.519999999999996,
      "psTTM": 14.0454,
      "pb": 79.0419,
      "evEbitdaTTM": 41.0393
    },
    {
      "date": "2026-10-16",
      "roeTTM": 212.44,
      "roicTTM": 50.519999999999996,
      "psTTM": 13.305,
      "pb": 74.875,
      "evEbitdaTTM": 38.899
    },
    {
      "date": "2026-10-17",
      "roeTTM": 212.44,
      "roicTTM": 50.519999999999996,
      "psTTM": 12.8811,
      "pb": 72.4898,
      "evEbitdaTTM": 37.6739
    },
    {
      "date": "2026-10-18",
      "roeTTM": 212.44,
      "roicTTM": 50.519999999999996,
      "psTTM": 12.8811,
      "pb": 72.4898,
      "evEbitdaTTM": 37.6739
    },
    {
      "date": "2026-10-19",
      "roeTTM": 212.44,
      "roicTTM": 50.519999999999996,
      "psTTM": 11.9152,
      "pb": 67.0542,
      "evEbitdaTTM": 34.8821
    },
    {
      "date": "2026-10-20",
      "roeTTM": 212.44,
      "roicTTM": 50.519999999999996,
      "psTTM": 11.9152,
      "pb": 67.0542,
      "evEbitdaTTM": 34.8821
    },
    {
      "date": "2026-10-21",
      "roeTTM": 212.44,
      "roicTTM": 50.519999999999996,
      "psTTM": 11.9152,
      "pb": 67.0542,
      "evEbitdaTTM": 34.8821
    },
    {
      "date": "2026-10-22",
      "roeTTM": 212.44,
      "roicTTM": 50.519999999999996,
      "psTTM": 12.5888,
      "pb": 70.8444,
      "evEbitdaTTM": 36.8288
    },
    {
      "date": "2026-10-23",
      "roeTTM": 212.44,
      "roicTTM": 50.519999999999996,
      "psTTM": 12.9945,
      "pb": 73.1278,
      "evEbitdaTTM": 38.0016
    },
    {
      "date": "2026-10-24",
      "roeTTM": 212.44,
      "roicTTM": 50.519999999999996,
      "psTTM": 11.9736,
      "pb": 67.3826,
      "evEbitdaTTM": 35.0508
    },
    {
      "date": "2026-10-25",
      "roeTTM": 212.44,
      "roicTTM": 50.519999999999996,
      "psTTM": 11.7564,
      "pb": 66.1601,
      "evEbitdaTTM": 34.4229
    },
    {
      "date": "2026-10-26",
      "roeTTM": 212.44,
      "roicTTM": 50.519999999999996,
      "psTTM": 11.7564,
      "pb": 66.1601,
      "evEbitdaTTM": 34.4229
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
    },
    {
      "date": "2026-09-08",
      "roeTTM": 38.49,
      "roicTTM": 38.43,
      "psTTM": 1.7887,
      "pb": 8.1556,
      "evEbitdaTTM": 16.1446
    },
    {
      "date": "2026-09-09",
      "roeTTM": 38.49,
      "roicTTM": 38.43,
      "psTTM": 1.7887,
      "pb": 8.1556,
      "evEbitdaTTM": 16.1446
    },
    {
      "date": "2026-09-10",
      "roeTTM": 38.49,
      "roicTTM": 38.43,
      "psTTM": 1.7887,
      "pb": 8.1556,
      "evEbitdaTTM": 16.1446
    },
    {
      "date": "2026-09-11",
      "roeTTM": 38.49,
      "roicTTM": 38.43,
      "psTTM": 1.8044,
      "pb": 8.2269,
      "evEbitdaTTM": 16.2899
    },
    {
      "date": "2026-09-12",
      "roeTTM": 38.49,
      "roicTTM": 38.43,
      "psTTM": 1.8479,
      "pb": 8.4256,
      "evEbitdaTTM": 16.6943
    },
    {
      "date": "2026-09-13",
      "roeTTM": 38.49,
      "roicTTM": 38.43,
      "psTTM": 1.8479,
      "pb": 8.4256,
      "evEbitdaTTM": 16.6943
    },
    {
      "date": "2026-09-14",
      "roeTTM": 38.49,
      "roicTTM": 38.43,
      "psTTM": 1.8516,
      "pb": 8.4422,
      "evEbitdaTTM": 16.728
    },
    {
      "date": "2026-09-15",
      "roeTTM": 38.49,
      "roicTTM": 38.43,
      "psTTM": 1.8516,
      "pb": 8.4422,
      "evEbitdaTTM": 16.728
    },
    {
      "date": "2026-09-16",
      "roeTTM": 38.49,
      "roicTTM": 38.43,
      "psTTM": 1.7781,
      "pb": 8.1071,
      "evEbitdaTTM": 16.0459
    },
    {
      "date": "2026-09-17",
      "roeTTM": 38.49,
      "roicTTM": 38.43,
      "psTTM": 1.7445,
      "pb": 7.954,
      "evEbitdaTTM": 15.7342
    },
    {
      "date": "2026-09-18",
      "roeTTM": 38.49,
      "roicTTM": 38.43,
      "psTTM": 1.7538,
      "pb": 7.9966,
      "evEbitdaTTM": 15.821
    },
    {
      "date": "2026-09-19",
      "roeTTM": 38.49,
      "roicTTM": 38.43,
      "psTTM": 1.7538,
      "pb": 7.9966,
      "evEbitdaTTM": 15.821
    },
    {
      "date": "2026-09-20",
      "roeTTM": 38.49,
      "roicTTM": 38.43,
      "psTTM": 1.7296,
      "pb": 7.8863,
      "evEbitdaTTM": 15.5964
    },
    {
      "date": "2026-09-21",
      "roeTTM": 38.49,
      "roicTTM": 38.43,
      "psTTM": 1.7791,
      "pb": 8.1116,
      "evEbitdaTTM": 16.055
    },
    {
      "date": "2026-09-22",
      "roeTTM": 38.49,
      "roicTTM": 38.43,
      "psTTM": 1.7791,
      "pb": 8.1116,
      "evEbitdaTTM": 16.055
    },
    {
      "date": "2026-09-23",
      "roeTTM": 38.49,
      "roicTTM": 38.43,
      "psTTM": 1.8017,
      "pb": 8.2148,
      "evEbitdaTTM": 16.265
    },
    {
      "date": "2026-09-24",
      "roeTTM": 38.49,
      "roicTTM": 38.43,
      "psTTM": 1.8017,
      "pb": 8.2148,
      "evEbitdaTTM": 16.265
    },
    {
      "date": "2026-09-25",
      "roeTTM": 38.49,
      "roicTTM": 38.43,
      "psTTM": 1.7957,
      "pb": 8.1876,
      "evEbitdaTTM": 16.2097
    },
    {
      "date": "2026-09-26",
      "roeTTM": 38.49,
      "roicTTM": 38.43,
      "psTTM": 1.7778,
      "pb": 8.1059,
      "evEbitdaTTM": 16.0433
    },
    {
      "date": "2026-09-27",
      "roeTTM": 38.49,
      "roicTTM": 38.43,
      "psTTM": 1.8033,
      "pb": 8.2221,
      "evEbitdaTTM": 16.28
    },
    {
      "date": "2026-09-28",
      "roeTTM": 38.49,
      "roicTTM": 38.43,
      "psTTM": 1.8078,
      "pb": 8.2427,
      "evEbitdaTTM": 16.3218
    },
    {
      "date": "2026-09-29",
      "roeTTM": 38.49,
      "roicTTM": 38.43,
      "psTTM": 1.8078,
      "pb": 8.2427,
      "evEbitdaTTM": 16.3218
    },
    {
      "date": "2026-09-30",
      "roeTTM": 38.49,
      "roicTTM": 38.43,
      "psTTM": 1.7958,
      "pb": 8.1881,
      "evEbitdaTTM": 16.2108
    },
    {
      "date": "2026-10-01",
      "roeTTM": 38.49,
      "roicTTM": 38.43,
      "psTTM": 1.7992,
      "pb": 8.2035,
      "evEbitdaTTM": 16.2421
    },
    {
      "date": "2026-10-02",
      "roeTTM": 38.49,
      "roicTTM": 38.43,
      "psTTM": 1.7834,
      "pb": 8.1313,
      "evEbitdaTTM": 16.0952
    },
    {
      "date": "2026-10-03",
      "roeTTM": 38.49,
      "roicTTM": 38.43,
      "psTTM": 1.8039,
      "pb": 8.2249,
      "evEbitdaTTM": 16.2857
    },
    {
      "date": "2026-10-04",
      "roeTTM": 38.49,
      "roicTTM": 38.43,
      "psTTM": 1.8805,
      "pb": 8.574,
      "evEbitdaTTM": 16.9964
    },
    {
      "date": "2026-10-05",
      "roeTTM": 38.49,
      "roicTTM": 38.43,
      "psTTM": 1.8805,
      "pb": 8.574,
      "evEbitdaTTM": 16.9964
    },
    {
      "date": "2026-10-06",
      "roeTTM": 38.49,
      "roicTTM": 38.43,
      "psTTM": 1.8657,
      "pb": 8.5065,
      "evEbitdaTTM": 16.859
    },
    {
      "date": "2026-10-07",
      "roeTTM": 38.49,
      "roicTTM": 38.43,
      "psTTM": 1.8655,
      "pb": 8.5055,
      "evEbitdaTTM": 16.857
    },
    {
      "date": "2026-10-08",
      "roeTTM": 38.49,
      "roicTTM": 38.43,
      "psTTM": 1.9475,
      "pb": 8.8798,
      "evEbitdaTTM": 17.619
    },
    {
      "date": "2026-10-09",
      "roeTTM": 38.49,
      "roicTTM": 38.43,
      "psTTM": 1.8338,
      "pb": 8.3612,
      "evEbitdaTTM": 16.5632
    },
    {
      "date": "2026-10-10",
      "roeTTM": 38.49,
      "roicTTM": 38.43,
      "psTTM": 1.8338,
      "pb": 8.3612,
      "evEbitdaTTM": 16.5632
    },
    {
      "date": "2026-10-11",
      "roeTTM": 38.49,
      "roicTTM": 38.43,
      "psTTM": 1.8641,
      "pb": 8.4993,
      "evEbitdaTTM": 16.8444
    },
    {
      "date": "2026-10-12",
      "roeTTM": 38.49,
      "roicTTM": 38.43,
      "psTTM": 1.8724,
      "pb": 8.5372,
      "evEbitdaTTM": 16.9215
    },
    {
      "date": "2026-10-13",
      "roeTTM": 38.49,
      "roicTTM": 38.43,
      "psTTM": 1.8724,
      "pb": 8.5372,
      "evEbitdaTTM": 16.9215
    },
    {
      "date": "2026-10-14",
      "roeTTM": 38.49,
      "roicTTM": 38.43,
      "psTTM": 1.8667,
      "pb": 8.5113,
      "evEbitdaTTM": 16.8688
    },
    {
      "date": "2026-10-15",
      "roeTTM": 38.49,
      "roicTTM": 38.43,
      "psTTM": 1.8667,
      "pb": 8.5113,
      "evEbitdaTTM": 16.8688
    },
    {
      "date": "2026-10-16",
      "roeTTM": 38.49,
      "roicTTM": 38.43,
      "psTTM": 1.8008,
      "pb": 8.2109,
      "evEbitdaTTM": 16.2571
    },
    {
      "date": "2026-10-17",
      "roeTTM": 38.49,
      "roicTTM": 38.43,
      "psTTM": 1.7123,
      "pb": 7.8072,
      "evEbitdaTTM": 15.4353
    },
    {
      "date": "2026-10-18",
      "roeTTM": 38.49,
      "roicTTM": 38.43,
      "psTTM": 1.7123,
      "pb": 7.8072,
      "evEbitdaTTM": 15.4353
    },
    {
      "date": "2026-10-19",
      "roeTTM": 38.49,
      "roicTTM": 38.43,
      "psTTM": 1.7116,
      "pb": 7.8041,
      "evEbitdaTTM": 15.4291
    },
    {
      "date": "2026-10-20",
      "roeTTM": 38.49,
      "roicTTM": 38.43,
      "psTTM": 1.7116,
      "pb": 7.8041,
      "evEbitdaTTM": 15.4291
    },
    {
      "date": "2026-10-21",
      "roeTTM": 38.49,
      "roicTTM": 38.43,
      "psTTM": 1.7116,
      "pb": 7.8041,
      "evEbitdaTTM": 15.4291
    },
    {
      "date": "2026-10-22",
      "roeTTM": 38.49,
      "roicTTM": 38.43,
      "psTTM": 1.6693,
      "pb": 7.6113,
      "evEbitdaTTM": 15.0366
    },
    {
      "date": "2026-10-23",
      "roeTTM": 38.49,
      "roicTTM": 38.43,
      "psTTM": 1.6294,
      "pb": 7.4294,
      "evEbitdaTTM": 14.6663
    },
    {
      "date": "2026-10-24",
      "roeTTM": 38.49,
      "roicTTM": 38.43,
      "psTTM": 1.5621,
      "pb": 7.1223,
      "evEbitdaTTM": 14.0411
    },
    {
      "date": "2026-10-25",
      "roeTTM": 38.49,
      "roicTTM": 38.43,
      "psTTM": 1.5463,
      "pb": 7.0502,
      "evEbitdaTTM": 13.8942
    },
    {
      "date": "2026-10-26",
      "roeTTM": 38.49,
      "roicTTM": 38.43,
      "psTTM": 1.5463,
      "pb": 7.0502,
      "evEbitdaTTM": 13.8942
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
    },
    {
      "date": "2026-09-08",
      "roeTTM": 53.55,
      "roicTTM": 51.739999999999995,
      "psTTM": 5.0476,
      "pb": 17.6158,
      "evEbitdaTTM": 28.6594
    },
    {
      "date": "2026-09-09",
      "roeTTM": 53.55,
      "roicTTM": 51.739999999999995,
      "psTTM": 5.0476,
      "pb": 17.6158,
      "evEbitdaTTM": 28.6594
    },
    {
      "date": "2026-09-10",
      "roeTTM": 53.55,
      "roicTTM": 51.739999999999995,
      "psTTM": 5.0476,
      "pb": 17.6158,
      "evEbitdaTTM": 28.6594
    },
    {
      "date": "2026-09-11",
      "roeTTM": 53.55,
      "roicTTM": 51.739999999999995,
      "psTTM": 5.0476,
      "pb": 17.6158,
      "evEbitdaTTM": 28.6594
    },
    {
      "date": "2026-09-12",
      "roeTTM": 53.55,
      "roicTTM": 51.739999999999995,
      "psTTM": 5.2906,
      "pb": 18.4638,
      "evEbitdaTTM": 30.0843
    },
    {
      "date": "2026-09-13",
      "roeTTM": 53.55,
      "roicTTM": 51.739999999999995,
      "psTTM": 5.2906,
      "pb": 18.4638,
      "evEbitdaTTM": 30.0843
    },
    {
      "date": "2026-09-14",
      "roeTTM": 53.55,
      "roicTTM": 51.739999999999995,
      "psTTM": 5.2999,
      "pb": 18.4962,
      "evEbitdaTTM": 30.1387
    },
    {
      "date": "2026-09-15",
      "roeTTM": 53.55,
      "roicTTM": 51.739999999999995,
      "psTTM": 5.2999,
      "pb": 18.4962,
      "evEbitdaTTM": 30.1387
    },
    {
      "date": "2026-09-16",
      "roeTTM": 53.55,
      "roicTTM": 51.739999999999995,
      "psTTM": 5.2999,
      "pb": 18.4962,
      "evEbitdaTTM": 30.1387
    },
    {
      "date": "2026-09-17",
      "roeTTM": 53.55,
      "roicTTM": 51.739999999999995,
      "psTTM": 4.9308,
      "pb": 17.2082,
      "evEbitdaTTM": 27.9745
    },
    {
      "date": "2026-09-18",
      "roeTTM": 53.55,
      "roicTTM": 51.739999999999995,
      "psTTM": 4.9308,
      "pb": 17.2082,
      "evEbitdaTTM": 27.9745
    },
    {
      "date": "2026-09-19",
      "roeTTM": 53.55,
      "roicTTM": 51.739999999999995,
      "psTTM": 4.9308,
      "pb": 17.2082,
      "evEbitdaTTM": 27.9745
    },
    {
      "date": "2026-09-20",
      "roeTTM": 53.55,
      "roicTTM": 51.739999999999995,
      "psTTM": 4.9336,
      "pb": 17.2179,
      "evEbitdaTTM": 27.9907
    },
    {
      "date": "2026-09-21",
      "roeTTM": 53.55,
      "roicTTM": 51.739999999999995,
      "psTTM": 5.1762,
      "pb": 18.0647,
      "evEbitdaTTM": 29.4136
    },
    {
      "date": "2026-09-22",
      "roeTTM": 53.55,
      "roicTTM": 51.739999999999995,
      "psTTM": 5.1762,
      "pb": 18.0647,
      "evEbitdaTTM": 29.4136
    },
    {
      "date": "2026-09-23",
      "roeTTM": 53.55,
      "roicTTM": 51.739999999999995,
      "psTTM": 5.1489,
      "pb": 17.9693,
      "evEbitdaTTM": 29.2533
    },
    {
      "date": "2026-09-24",
      "roeTTM": 53.55,
      "roicTTM": 51.739999999999995,
      "psTTM": 5.1489,
      "pb": 17.9693,
      "evEbitdaTTM": 29.2533
    },
    {
      "date": "2026-09-25",
      "roeTTM": 53.55,
      "roicTTM": 51.739999999999995,
      "psTTM": 5.0928,
      "pb": 17.7736,
      "evEbitdaTTM": 28.9246
    },
    {
      "date": "2026-09-26",
      "roeTTM": 53.55,
      "roicTTM": 51.739999999999995,
      "psTTM": 5.0726,
      "pb": 17.7031,
      "evEbitdaTTM": 28.8061
    },
    {
      "date": "2026-09-27",
      "roeTTM": 53.55,
      "roicTTM": 51.739999999999995,
      "psTTM": 5.1057,
      "pb": 17.8186,
      "evEbitdaTTM": 29.0001
    },
    {
      "date": "2026-09-28",
      "roeTTM": 53.55,
      "roicTTM": 51.739999999999995,
      "psTTM": 5.1999,
      "pb": 18.1471,
      "evEbitdaTTM": 29.5522
    },
    {
      "date": "2026-09-29",
      "roeTTM": 53.55,
      "roicTTM": 51.739999999999995,
      "psTTM": 5.1999,
      "pb": 18.1471,
      "evEbitdaTTM": 29.5522
    },
    {
      "date": "2026-09-30",
      "roeTTM": 53.55,
      "roicTTM": 51.739999999999995,
      "psTTM": 5.1615,
      "pb": 18.0133,
      "evEbitdaTTM": 29.3273
    },
    {
      "date": "2026-10-01",
      "roeTTM": 53.55,
      "roicTTM": 51.739999999999995,
      "psTTM": 5.166,
      "pb": 18.0289,
      "evEbitdaTTM": 29.3534
    },
    {
      "date": "2026-10-02",
      "roeTTM": 53.55,
      "roicTTM": 51.739999999999995,
      "psTTM": 5.165,
      "pb": 18.0255,
      "evEbitdaTTM": 29.3478
    },
    {
      "date": "2026-10-03",
      "roeTTM": 53.55,
      "roicTTM": 51.739999999999995,
      "psTTM": 5.1844,
      "pb": 18.0931,
      "evEbitdaTTM": 29.4614
    },
    {
      "date": "2026-10-04",
      "roeTTM": 53.55,
      "roicTTM": 51.739999999999995,
      "psTTM": 5.4668,
      "pb": 19.0788,
      "evEbitdaTTM": 31.1176
    },
    {
      "date": "2026-10-05",
      "roeTTM": 53.55,
      "roicTTM": 51.739999999999995,
      "psTTM": 5.4668,
      "pb": 19.0788,
      "evEbitdaTTM": 31.1176
    },
    {
      "date": "2026-10-06",
      "roeTTM": 53.55,
      "roicTTM": 51.739999999999995,
      "psTTM": 5.4165,
      "pb": 18.903,
      "evEbitdaTTM": 30.8223
    },
    {
      "date": "2026-10-07",
      "roeTTM": 53.55,
      "roicTTM": 51.739999999999995,
      "psTTM": 5.4039,
      "pb": 18.8592,
      "evEbitdaTTM": 30.7486
    },
    {
      "date": "2026-10-08",
      "roeTTM": 53.55,
      "roicTTM": 51.739999999999995,
      "psTTM": 5.6547,
      "pb": 19.7343,
      "evEbitdaTTM": 32.2191
    },
    {
      "date": "2026-10-09",
      "roeTTM": 53.55,
      "roicTTM": 51.739999999999995,
      "psTTM": 5.3473,
      "pb": 18.6615,
      "evEbitdaTTM": 30.4165
    },
    {
      "date": "2026-10-10",
      "roeTTM": 53.55,
      "roicTTM": 51.739999999999995,
      "psTTM": 5.3473,
      "pb": 18.6615,
      "evEbitdaTTM": 30.4165
    },
    {
      "date": "2026-10-11",
      "roeTTM": 53.55,
      "roicTTM": 51.739999999999995,
      "psTTM": 5.3898,
      "pb": 18.8099,
      "evEbitdaTTM": 30.6659
    },
    {
      "date": "2026-10-12",
      "roeTTM": 53.55,
      "roicTTM": 51.739999999999995,
      "psTTM": 5.3778,
      "pb": 18.7683,
      "evEbitdaTTM": 30.5959
    },
    {
      "date": "2026-10-13",
      "roeTTM": 53.55,
      "roicTTM": 51.739999999999995,
      "psTTM": 5.3778,
      "pb": 18.7683,
      "evEbitdaTTM": 30.5959
    },
    {
      "date": "2026-10-14",
      "roeTTM": 53.55,
      "roicTTM": 51.739999999999995,
      "psTTM": 5.2687,
      "pb": 18.3875,
      "evEbitdaTTM": 29.956
    },
    {
      "date": "2026-10-15",
      "roeTTM": 53.55,
      "roicTTM": 51.739999999999995,
      "psTTM": 5.2687,
      "pb": 18.3875,
      "evEbitdaTTM": 29.956
    },
    {
      "date": "2026-10-16",
      "roeTTM": 53.55,
      "roicTTM": 51.739999999999995,
      "psTTM": 4.9179,
      "pb": 17.163,
      "evEbitdaTTM": 27.8986
    },
    {
      "date": "2026-10-17",
      "roeTTM": 53.55,
      "roicTTM": 51.739999999999995,
      "psTTM": 4.5388,
      "pb": 15.84,
      "evEbitdaTTM": 25.6754
    },
    {
      "date": "2026-10-18",
      "roeTTM": 53.55,
      "roicTTM": 51.739999999999995,
      "psTTM": 4.5388,
      "pb": 15.84,
      "evEbitdaTTM": 25.6754
    },
    {
      "date": "2026-10-19",
      "roeTTM": 53.55,
      "roicTTM": 51.739999999999995,
      "psTTM": 4.5108,
      "pb": 15.7423,
      "evEbitdaTTM": 25.5113
    },
    {
      "date": "2026-10-20",
      "roeTTM": 53.55,
      "roicTTM": 51.739999999999995,
      "psTTM": 4.5108,
      "pb": 15.7423,
      "evEbitdaTTM": 25.5113
    },
    {
      "date": "2026-10-21",
      "roeTTM": 53.55,
      "roicTTM": 51.739999999999995,
      "psTTM": 4.5108,
      "pb": 15.7423,
      "evEbitdaTTM": 25.5113
    },
    {
      "date": "2026-10-22",
      "roeTTM": 53.55,
      "roicTTM": 51.739999999999995,
      "psTTM": 4.4306,
      "pb": 15.4623,
      "evEbitdaTTM": 25.0409
    },
    {
      "date": "2026-10-23",
      "roeTTM": 53.55,
      "roicTTM": 51.739999999999995,
      "psTTM": 4.3835,
      "pb": 15.2979,
      "evEbitdaTTM": 24.7646
    },
    {
      "date": "2026-10-24",
      "roeTTM": 53.55,
      "roicTTM": 51.739999999999995,
      "psTTM": 4.0055,
      "pb": 13.979,
      "evEbitdaTTM": 22.5484
    },
    {
      "date": "2026-10-25",
      "roeTTM": 53.55,
      "roicTTM": 51.739999999999995,
      "psTTM": 3.6859,
      "pb": 12.8636,
      "evEbitdaTTM": 20.6743
    },
    {
      "date": "2026-10-26",
      "roeTTM": 53.55,
      "roicTTM": 51.739999999999995,
      "psTTM": 3.6859,
      "pb": 12.8636,
      "evEbitdaTTM": 20.6743
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
    },
    {
      "date": "2026-09-08",
      "roeTTM": 24.77,
      "roicTTM": 7.140000000000001,
      "psTTM": 23.9234,
      "pb": 46.2018,
      "evEbitdaTTM": 221.3491
    },
    {
      "date": "2026-09-09",
      "roeTTM": 24.77,
      "roicTTM": 7.140000000000001,
      "psTTM": 23.9234,
      "pb": 46.2018,
      "evEbitdaTTM": 221.3491
    },
    {
      "date": "2026-09-10",
      "roeTTM": 24.77,
      "roicTTM": 7.140000000000001,
      "psTTM": 23.9234,
      "pb": 46.2018,
      "evEbitdaTTM": 221.3491
    },
    {
      "date": "2026-09-11",
      "roeTTM": 24.77,
      "roicTTM": 7.140000000000001,
      "psTTM": 25.79,
      "pb": 49.8066,
      "evEbitdaTTM": 238.6146
    },
    {
      "date": "2026-09-12",
      "roeTTM": 24.77,
      "roicTTM": 7.140000000000001,
      "psTTM": 25.8993,
      "pb": 50.0176,
      "evEbitdaTTM": 239.6252
    },
    {
      "date": "2026-09-13",
      "roeTTM": 24.77,
      "roicTTM": 7.140000000000001,
      "psTTM": 25.8993,
      "pb": 50.0176,
      "evEbitdaTTM": 239.6252
    },
    {
      "date": "2026-09-14",
      "roeTTM": 24.77,
      "roicTTM": 7.140000000000001,
      "psTTM": 26.088,
      "pb": 50.3821,
      "evEbitdaTTM": 241.371
    },
    {
      "date": "2026-09-15",
      "roeTTM": 24.77,
      "roicTTM": 7.140000000000001,
      "psTTM": 26.088,
      "pb": 50.3821,
      "evEbitdaTTM": 241.371
    },
    {
      "date": "2026-09-16",
      "roeTTM": 24.77,
      "roicTTM": 7.140000000000001,
      "psTTM": 24.3189,
      "pb": 46.9655,
      "evEbitdaTTM": 225.007
    },
    {
      "date": "2026-09-17",
      "roeTTM": 24.77,
      "roicTTM": 7.140000000000001,
      "psTTM": 24.3189,
      "pb": 46.9655,
      "evEbitdaTTM": 225.007
    },
    {
      "date": "2026-09-18",
      "roeTTM": 24.77,
      "roicTTM": 7.140000000000001,
      "psTTM": 24.3189,
      "pb": 46.9655,
      "evEbitdaTTM": 225.007
    },
    {
      "date": "2026-09-19",
      "roeTTM": 24.77,
      "roicTTM": 7.140000000000001,
      "psTTM": 24.3189,
      "pb": 46.9655,
      "evEbitdaTTM": 225.007
    },
    {
      "date": "2026-09-20",
      "roeTTM": 24.77,
      "roicTTM": 7.140000000000001,
      "psTTM": 26.562,
      "pb": 51.2975,
      "evEbitdaTTM": 245.7552
    },
    {
      "date": "2026-09-21",
      "roeTTM": 24.77,
      "roicTTM": 7.140000000000001,
      "psTTM": 25.1306,
      "pb": 48.5331,
      "evEbitdaTTM": 232.5152
    },
    {
      "date": "2026-09-22",
      "roeTTM": 24.77,
      "roicTTM": 7.140000000000001,
      "psTTM": 25.1306,
      "pb": 48.5331,
      "evEbitdaTTM": 232.5152
    },
    {
      "date": "2026-09-23",
      "roeTTM": 24.77,
      "roicTTM": 7.140000000000001,
      "psTTM": 25.9267,
      "pb": 50.0706,
      "evEbitdaTTM": 239.879
    },
    {
      "date": "2026-09-24",
      "roeTTM": 24.77,
      "roicTTM": 7.140000000000001,
      "psTTM": 25.9267,
      "pb": 50.0706,
      "evEbitdaTTM": 239.879
    },
    {
      "date": "2026-09-25",
      "roeTTM": 24.77,
      "roicTTM": 7.140000000000001,
      "psTTM": 25.9083,
      "pb": 50.035,
      "evEbitdaTTM": 239.7084
    },
    {
      "date": "2026-09-26",
      "roeTTM": 24.77,
      "roicTTM": 7.140000000000001,
      "psTTM": 25.1566,
      "pb": 48.5834,
      "evEbitdaTTM": 232.7559
    },
    {
      "date": "2026-09-27",
      "roeTTM": 24.77,
      "roicTTM": 7.140000000000001,
      "psTTM": 27.5232,
      "pb": 53.1538,
      "evEbitdaTTM": 254.6461
    },
    {
      "date": "2026-09-28",
      "roeTTM": 24.77,
      "roicTTM": 7.140000000000001,
      "psTTM": 27.3132,
      "pb": 52.7482,
      "evEbitdaTTM": 252.7034
    },
    {
      "date": "2026-09-29",
      "roeTTM": 24.77,
      "roicTTM": 7.140000000000001,
      "psTTM": 27.3132,
      "pb": 52.7482,
      "evEbitdaTTM": 252.7034
    },
    {
      "date": "2026-09-30",
      "roeTTM": 24.77,
      "roicTTM": 7.140000000000001,
      "psTTM": 27.3132,
      "pb": 52.7482,
      "evEbitdaTTM": 252.7034
    },
    {
      "date": "2026-10-01",
      "roeTTM": 24.77,
      "roicTTM": 7.140000000000001,
      "psTTM": 27.535,
      "pb": 53.1767,
      "evEbitdaTTM": 254.7555
    },
    {
      "date": "2026-10-02",
      "roeTTM": 24.77,
      "roicTTM": 7.140000000000001,
      "psTTM": 26.273,
      "pb": 50.7393,
      "evEbitdaTTM": 243.0819
    },
    {
      "date": "2026-10-03",
      "roeTTM": 24.77,
      "roicTTM": 7.140000000000001,
      "psTTM": 26.2063,
      "pb": 50.6105,
      "evEbitdaTTM": 242.4649
    },
    {
      "date": "2026-10-04",
      "roeTTM": 24.77,
      "roicTTM": 7.140000000000001,
      "psTTM": 27.5639,
      "pb": 53.2324,
      "evEbitdaTTM": 255.0224
    },
    {
      "date": "2026-10-05",
      "roeTTM": 24.77,
      "roicTTM": 7.140000000000001,
      "psTTM": 27.5639,
      "pb": 53.2324,
      "evEbitdaTTM": 255.0224
    },
    {
      "date": "2026-10-06",
      "roeTTM": 24.77,
      "roicTTM": 7.140000000000001,
      "psTTM": 27.3558,
      "pb": 52.8305,
      "evEbitdaTTM": 253.0972
    },
    {
      "date": "2026-10-07",
      "roeTTM": 24.77,
      "roicTTM": 7.140000000000001,
      "psTTM": 27.2006,
      "pb": 52.5308,
      "evEbitdaTTM": 251.662
    },
    {
      "date": "2026-10-08",
      "roeTTM": 24.77,
      "roicTTM": 7.140000000000001,
      "psTTM": 28.3302,
      "pb": 54.7124,
      "evEbitdaTTM": 262.1106
    },
    {
      "date": "2026-10-09",
      "roeTTM": 24.77,
      "roicTTM": 7.140000000000001,
      "psTTM": 27.4102,
      "pb": 52.9355,
      "evEbitdaTTM": 253.6004
    },
    {
      "date": "2026-10-10",
      "roeTTM": 24.77,
      "roicTTM": 7.140000000000001,
      "psTTM": 27.4102,
      "pb": 52.9355,
      "evEbitdaTTM": 253.6004
    },
    {
      "date": "2026-10-11",
      "roeTTM": 24.77,
      "roicTTM": 7.140000000000001,
      "psTTM": 26.2465,
      "pb": 50.6882,
      "evEbitdaTTM": 242.8368
    },
    {
      "date": "2026-10-12",
      "roeTTM": 24.77,
      "roicTTM": 7.140000000000001,
      "psTTM": 26.5374,
      "pb": 51.25,
      "evEbitdaTTM": 245.5277
    },
    {
      "date": "2026-10-13",
      "roeTTM": 24.77,
      "roicTTM": 7.140000000000001,
      "psTTM": 26.5374,
      "pb": 51.25,
      "evEbitdaTTM": 245.5277
    },
    {
      "date": "2026-10-14",
      "roeTTM": 24.77,
      "roicTTM": 7.140000000000001,
      "psTTM": 24.5989,
      "pb": 47.5063,
      "evEbitdaTTM": 227.5972
    },
    {
      "date": "2026-10-15",
      "roeTTM": 24.77,
      "roicTTM": 7.140000000000001,
      "psTTM": 24.5989,
      "pb": 47.5063,
      "evEbitdaTTM": 227.5972
    },
    {
      "date": "2026-10-16",
      "roeTTM": 24.77,
      "roicTTM": 7.140000000000001,
      "psTTM": 22.6585,
      "pb": 43.7589,
      "evEbitdaTTM": 209.6492
    },
    {
      "date": "2026-10-17",
      "roeTTM": 24.77,
      "roicTTM": 7.140000000000001,
      "psTTM": 21.9536,
      "pb": 42.3977,
      "evEbitdaTTM": 203.1296
    },
    {
      "date": "2026-10-18",
      "roeTTM": 24.77,
      "roicTTM": 7.140000000000001,
      "psTTM": 21.9536,
      "pb": 42.3977,
      "evEbitdaTTM": 203.1296
    },
    {
      "date": "2026-10-19",
      "roeTTM": 24.77,
      "roicTTM": 7.140000000000001,
      "psTTM": 20.9376,
      "pb": 40.4354,
      "evEbitdaTTM": 193.7314
    },
    {
      "date": "2026-10-20",
      "roeTTM": 24.77,
      "roicTTM": 7.140000000000001,
      "psTTM": 20.9376,
      "pb": 40.4354,
      "evEbitdaTTM": 193.7314
    },
    {
      "date": "2026-10-21",
      "roeTTM": 24.77,
      "roicTTM": 7.140000000000001,
      "psTTM": 20.9376,
      "pb": 40.4354,
      "evEbitdaTTM": 193.7314
    },
    {
      "date": "2026-10-22",
      "roeTTM": 24.77,
      "roicTTM": 7.140000000000001,
      "psTTM": 21.1145,
      "pb": 40.7771,
      "evEbitdaTTM": 195.3678
    },
    {
      "date": "2026-10-23",
      "roeTTM": 24.77,
      "roicTTM": 7.140000000000001,
      "psTTM": 22.6434,
      "pb": 43.7297,
      "evEbitdaTTM": 209.5092
    },
    {
      "date": "2026-10-24",
      "roeTTM": 24.77,
      "roicTTM": 7.140000000000001,
      "psTTM": 20.1741,
      "pb": 38.961,
      "evEbitdaTTM": 186.6695
    },
    {
      "date": "2026-10-25",
      "roeTTM": 24.77,
      "roicTTM": 7.140000000000001,
      "psTTM": 18.3047,
      "pb": 35.3506,
      "evEbitdaTTM": 169.3778
    },
    {
      "date": "2026-10-26",
      "roeTTM": 24.77,
      "roicTTM": 7.140000000000001,
      "psTTM": 18.3047,
      "pb": 35.3506,
      "evEbitdaTTM": 169.3778
    }
  ]
};
