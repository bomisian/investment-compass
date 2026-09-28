// 자동 생성 파일 - buy_signal_telegram.py 실행 시마다 갱신됨. 직접 수정하지 마세요.
// 출처: FINRA Equity Short Interest(cdn.finra.org, 무료·비상업 이용). 격주 갱신, 참고용 지표이며 매수·매도 신호 아님.
const SHORT_INTEREST_DATA = {
  "MSFT": [
    {
      "settlementDate": "2026-08-14",
      "shortShares": 68544953.0,
      "prevShortShares": 81311791.0,
      "avgDailyVolume": 33441152.0,
      "daysToCover": 2.05
    },
    {
      "settlementDate": "2026-08-31",
      "shortShares": 74451155.0,
      "prevShortShares": 68544953.0,
      "avgDailyVolume": 23419047.0,
      "daysToCover": 3.18
    },
    {
      "settlementDate": "2026-09-15",
      "shortShares": 67346414.0,
      "prevShortShares": 74451155.0,
      "avgDailyVolume": 18052501.0,
      "daysToCover": 3.73
    }
  ],
  "GOOGL": [
    {
      "settlementDate": "2026-08-14",
      "shortShares": 72705550.0,
      "prevShortShares": 70493725.0,
      "avgDailyVolume": 27228699.0,
      "daysToCover": 2.67
    },
    {
      "settlementDate": "2026-08-31",
      "shortShares": 77698668.0,
      "prevShortShares": 72705550.0,
      "avgDailyVolume": 22338252.0,
      "daysToCover": 3.48
    },
    {
      "settlementDate": "2026-09-15",
      "shortShares": 87393404.0,
      "prevShortShares": 77698668.0,
      "avgDailyVolume": 24952578.0,
      "daysToCover": 3.5
    }
  ],
  "AMZN": [
    {
      "settlementDate": "2026-08-14",
      "shortShares": 95300129.0,
      "prevShortShares": 98434174.0,
      "avgDailyVolume": 42070694.0,
      "daysToCover": 2.27
    },
    {
      "settlementDate": "2026-08-31",
      "shortShares": 92067423.0,
      "prevShortShares": 95300129.0,
      "avgDailyVolume": 34419346.0,
      "daysToCover": 2.67
    },
    {
      "settlementDate": "2026-09-15",
      "shortShares": 81440414.0,
      "prevShortShares": 92067423.0,
      "avgDailyVolume": 29391336.0,
      "daysToCover": 2.77
    }
  ],
  "META": [
    {
      "settlementDate": "2026-08-14",
      "shortShares": 28048106.0,
      "prevShortShares": 31458758.0,
      "avgDailyVolume": 14456921.0,
      "daysToCover": 1.94
    },
    {
      "settlementDate": "2026-08-31",
      "shortShares": 28807174.0,
      "prevShortShares": 28048106.0,
      "avgDailyVolume": 16851459.0,
      "daysToCover": 1.71
    },
    {
      "settlementDate": "2026-09-15",
      "shortShares": 30990107.0,
      "prevShortShares": 28807174.0,
      "avgDailyVolume": 19680893.0,
      "daysToCover": 1.57
    }
  ],
  "AAPL": [
    {
      "settlementDate": "2026-08-14",
      "shortShares": 116327753.0,
      "prevShortShares": 141606163.0,
      "avgDailyVolume": 46065396.0,
      "daysToCover": 2.53
    },
    {
      "settlementDate": "2026-08-31",
      "shortShares": 139749097.0,
      "prevShortShares": 116327753.0,
      "avgDailyVolume": 39537335.0,
      "daysToCover": 3.53
    },
    {
      "settlementDate": "2026-09-15",
      "shortShares": 128753092.0,
      "prevShortShares": 139749097.0,
      "avgDailyVolume": 45135477.0,
      "daysToCover": 2.85
    }
  ],
  "TSLA": [
    {
      "settlementDate": "2026-08-14",
      "shortShares": 69196896.0,
      "prevShortShares": 68501639.0,
      "avgDailyVolume": 32128184.0,
      "daysToCover": 2.15
    },
    {
      "settlementDate": "2026-08-31",
      "shortShares": 74230933.0,
      "prevShortShares": 69196896.0,
      "avgDailyVolume": 36423555.0,
      "daysToCover": 2.04
    },
    {
      "settlementDate": "2026-09-15",
      "shortShares": 68862357.0,
      "prevShortShares": 74230933.0,
      "avgDailyVolume": 40108176.0,
      "daysToCover": 1.72
    }
  ],
  "ORCL": [
    {
      "settlementDate": "2026-08-14",
      "shortShares": 47767442.0,
      "prevShortShares": 50143917.0,
      "avgDailyVolume": 30712339.0,
      "daysToCover": 1.56
    },
    {
      "settlementDate": "2026-08-31",
      "shortShares": 44597874.0,
      "prevShortShares": 47767442.0,
      "avgDailyVolume": 19206990.0,
      "daysToCover": 2.32
    },
    {
      "settlementDate": "2026-09-15",
      "shortShares": 50840436.0,
      "prevShortShares": 44597874.0,
      "avgDailyVolume": 37506615.0,
      "daysToCover": 1.36
    }
  ],
  "CRM": [
    {
      "settlementDate": "2026-08-14",
      "shortShares": 26502629.0,
      "prevShortShares": 29406370.0,
      "avgDailyVolume": 11392045.0,
      "daysToCover": 2.33
    },
    {
      "settlementDate": "2026-08-31",
      "shortShares": 29211825.0,
      "prevShortShares": 26502629.0,
      "avgDailyVolume": 19496361.0,
      "daysToCover": 1.5
    },
    {
      "settlementDate": "2026-09-15",
      "shortShares": 32348247.0,
      "prevShortShares": 29211825.0,
      "avgDailyVolume": 13111473.0,
      "daysToCover": 2.47
    }
  ],
  "PLTR": [
    {
      "settlementDate": "2026-08-14",
      "shortShares": 68278633.0,
      "prevShortShares": 68066419.0,
      "avgDailyVolume": 62118852.0,
      "daysToCover": 1.1
    },
    {
      "settlementDate": "2026-08-31",
      "shortShares": 65131893.0,
      "prevShortShares": 68278633.0,
      "avgDailyVolume": 30209883.0,
      "daysToCover": 2.16
    },
    {
      "settlementDate": "2026-09-15",
      "shortShares": 60184903.0,
      "prevShortShares": 65131893.0,
      "avgDailyVolume": 26895890.0,
      "daysToCover": 2.24
    }
  ],
  "NVDA": [
    {
      "settlementDate": "2026-08-14",
      "shortShares": 285956804.0,
      "prevShortShares": 292667375.0,
      "avgDailyVolume": 113580992.0,
      "daysToCover": 2.52
    },
    {
      "settlementDate": "2026-08-31",
      "shortShares": 298301619.0,
      "prevShortShares": 285956804.0,
      "avgDailyVolume": 139118326.0,
      "daysToCover": 2.14
    },
    {
      "settlementDate": "2026-09-15",
      "shortShares": 294225803.0,
      "prevShortShares": 298301619.0,
      "avgDailyVolume": 115324892.0,
      "daysToCover": 2.55
    }
  ],
  "AMD": [
    {
      "settlementDate": "2026-08-14",
      "shortShares": 40065798.0,
      "prevShortShares": 37752132.0,
      "avgDailyVolume": 26911002.0,
      "daysToCover": 1.49
    },
    {
      "settlementDate": "2026-08-31",
      "shortShares": 41712630.0,
      "prevShortShares": 40065798.0,
      "avgDailyVolume": 16772687.0,
      "daysToCover": 2.49
    },
    {
      "settlementDate": "2026-09-15",
      "shortShares": 39975696.0,
      "prevShortShares": 41712630.0,
      "avgDailyVolume": 18735987.0,
      "daysToCover": 2.13
    }
  ],
  "AVGO": [
    {
      "settlementDate": "2026-08-14",
      "shortShares": 56209128.0,
      "prevShortShares": 61196152.0,
      "avgDailyVolume": 17502436.0,
      "daysToCover": 3.21
    },
    {
      "settlementDate": "2026-08-31",
      "shortShares": 50451889.0,
      "prevShortShares": 56209128.0,
      "avgDailyVolume": 20841544.0,
      "daysToCover": 2.42
    },
    {
      "settlementDate": "2026-09-15",
      "shortShares": 51922175.0,
      "prevShortShares": 50451889.0,
      "avgDailyVolume": 30566178.0,
      "daysToCover": 1.7
    }
  ],
  "QCOM": [
    {
      "settlementDate": "2026-08-14",
      "shortShares": 33274306.0,
      "prevShortShares": 34577216.0,
      "avgDailyVolume": 9221663.0,
      "daysToCover": 3.61
    },
    {
      "settlementDate": "2026-08-31",
      "shortShares": 33718025.0,
      "prevShortShares": 33274306.0,
      "avgDailyVolume": 10182988.0,
      "daysToCover": 3.31
    },
    {
      "settlementDate": "2026-09-15",
      "shortShares": 38316643.0,
      "prevShortShares": 33718025.0,
      "avgDailyVolume": 12517227.0,
      "daysToCover": 3.06
    }
  ],
  "ARM": [
    {
      "settlementDate": "2026-08-14",
      "shortShares": 18264105.0,
      "prevShortShares": 16867253.0,
      "avgDailyVolume": 4430142.0,
      "daysToCover": 4.12
    },
    {
      "settlementDate": "2026-08-31",
      "shortShares": 16740615.0,
      "prevShortShares": 18264105.0,
      "avgDailyVolume": 3817181.0,
      "daysToCover": 4.39
    },
    {
      "settlementDate": "2026-09-15",
      "shortShares": 15521694.0,
      "prevShortShares": 16740615.0,
      "avgDailyVolume": 3942824.0,
      "daysToCover": 3.94
    }
  ],
  "MRVL": [
    {
      "settlementDate": "2026-08-14",
      "shortShares": 28388438.0,
      "prevShortShares": 35826090.0,
      "avgDailyVolume": 20010395.0,
      "daysToCover": 1.42
    },
    {
      "settlementDate": "2026-08-31",
      "shortShares": 38175634.0,
      "prevShortShares": 28388438.0,
      "avgDailyVolume": 28197801.0,
      "daysToCover": 1.35
    },
    {
      "settlementDate": "2026-09-15",
      "shortShares": 31342713.0,
      "prevShortShares": 38175634.0,
      "avgDailyVolume": 18388631.0,
      "daysToCover": 1.7
    }
  ],
  "INTC": [
    {
      "settlementDate": "2026-08-14",
      "shortShares": 135685200.0,
      "prevShortShares": 125100834.0,
      "avgDailyVolume": 107891781.0,
      "daysToCover": 1.26
    },
    {
      "settlementDate": "2026-08-31",
      "shortShares": 152248752.0,
      "prevShortShares": 135685200.0,
      "avgDailyVolume": 90250656.0,
      "daysToCover": 1.69
    },
    {
      "settlementDate": "2026-09-15",
      "shortShares": 158808750.0,
      "prevShortShares": 152248752.0,
      "avgDailyVolume": 90284162.0,
      "daysToCover": 1.76
    }
  ],
  "TSM": [
    {
      "settlementDate": "2026-08-14",
      "shortShares": 30161233.0,
      "prevShortShares": 33191967.0,
      "avgDailyVolume": 10471757.0,
      "daysToCover": 2.88
    },
    {
      "settlementDate": "2026-08-31",
      "shortShares": 29835409.0,
      "prevShortShares": 30161233.0,
      "avgDailyVolume": 9533524.0,
      "daysToCover": 3.13
    },
    {
      "settlementDate": "2026-09-15",
      "shortShares": 27789695.0,
      "prevShortShares": 29835409.0,
      "avgDailyVolume": 9770373.0,
      "daysToCover": 2.84
    }
  ],
  "ASML": [
    {
      "settlementDate": "2026-08-14",
      "shortShares": 1352364.0,
      "prevShortShares": 1068098.0,
      "avgDailyVolume": 1222298.0,
      "daysToCover": 1.11
    },
    {
      "settlementDate": "2026-08-31",
      "shortShares": 1524269.0,
      "prevShortShares": 1352364.0,
      "avgDailyVolume": 1117823.0,
      "daysToCover": 1.36
    },
    {
      "settlementDate": "2026-09-15",
      "shortShares": 1477623.0,
      "prevShortShares": 1524269.0,
      "avgDailyVolume": 1236034.0,
      "daysToCover": 1.2
    }
  ],
  "AMAT": [
    {
      "settlementDate": "2026-08-14",
      "shortShares": 11875178.0,
      "prevShortShares": 14231996.0,
      "avgDailyVolume": 7421603.0,
      "daysToCover": 1.6
    },
    {
      "settlementDate": "2026-08-31",
      "shortShares": 15615253.0,
      "prevShortShares": 11875178.0,
      "avgDailyVolume": 6764180.0,
      "daysToCover": 2.31
    },
    {
      "settlementDate": "2026-09-15",
      "shortShares": 14108387.0,
      "prevShortShares": 15615253.0,
      "avgDailyVolume": 5784106.0,
      "daysToCover": 2.44
    }
  ],
  "LRCX": [
    {
      "settlementDate": "2026-08-14",
      "shortShares": 28419138.0,
      "prevShortShares": 26963996.0,
      "avgDailyVolume": 8678868.0,
      "daysToCover": 3.27
    },
    {
      "settlementDate": "2026-08-31",
      "shortShares": 27751158.0,
      "prevShortShares": 28419138.0,
      "avgDailyVolume": 7312752.0,
      "daysToCover": 3.79
    },
    {
      "settlementDate": "2026-09-15",
      "shortShares": 26081081.0,
      "prevShortShares": 27751158.0,
      "avgDailyVolume": 8455032.0,
      "daysToCover": 3.08
    }
  ],
  "KLAC": [
    {
      "settlementDate": "2026-08-14",
      "shortShares": 25337831.0,
      "prevShortShares": 27024003.0,
      "avgDailyVolume": 10039327.0,
      "daysToCover": 2.52
    },
    {
      "settlementDate": "2026-08-31",
      "shortShares": 29401138.0,
      "prevShortShares": 25337831.0,
      "avgDailyVolume": 8756827.0,
      "daysToCover": 3.36
    },
    {
      "settlementDate": "2026-09-15",
      "shortShares": 23554039.0,
      "prevShortShares": 29401138.0,
      "avgDailyVolume": 9415932.0,
      "daysToCover": 2.5
    }
  ],
  "MU": [
    {
      "settlementDate": "2026-08-14",
      "shortShares": 30016025.0,
      "prevShortShares": 29892897.0,
      "avgDailyVolume": 33755659.0,
      "daysToCover": 1.0
    },
    {
      "settlementDate": "2026-08-31",
      "shortShares": 29705339.0,
      "prevShortShares": 30016025.0,
      "avgDailyVolume": 25645506.0,
      "daysToCover": 1.16
    },
    {
      "settlementDate": "2026-09-15",
      "shortShares": 27633780.0,
      "prevShortShares": 29705339.0,
      "avgDailyVolume": 25064802.0,
      "daysToCover": 1.1
    }
  ],
  "SNDK": [
    {
      "settlementDate": "2026-08-14",
      "shortShares": 7676558.0,
      "prevShortShares": 6823953.0,
      "avgDailyVolume": 15207988.0,
      "daysToCover": 1.0
    },
    {
      "settlementDate": "2026-08-31",
      "shortShares": 5996105.0,
      "prevShortShares": 7676558.0,
      "avgDailyVolume": 12961159.0,
      "daysToCover": 1.0
    },
    {
      "settlementDate": "2026-09-15",
      "shortShares": 5618213.0,
      "prevShortShares": 5996105.0,
      "avgDailyVolume": 9998178.0,
      "daysToCover": 1.0
    }
  ],
  "WDC": [
    {
      "settlementDate": "2026-08-14",
      "shortShares": 20281115.0,
      "prevShortShares": 24599617.0,
      "avgDailyVolume": 8969172.0,
      "daysToCover": 2.26
    },
    {
      "settlementDate": "2026-08-31",
      "shortShares": 19887791.0,
      "prevShortShares": 20281115.0,
      "avgDailyVolume": 6339096.0,
      "daysToCover": 3.14
    },
    {
      "settlementDate": "2026-09-15",
      "shortShares": 17280387.0,
      "prevShortShares": 19887791.0,
      "avgDailyVolume": 5513875.0,
      "daysToCover": 3.13
    }
  ],
  "ANET": [
    {
      "settlementDate": "2026-08-14",
      "shortShares": 12873977.0,
      "prevShortShares": 12815409.0,
      "avgDailyVolume": 9197845.0,
      "daysToCover": 1.4
    },
    {
      "settlementDate": "2026-08-31",
      "shortShares": 14510842.0,
      "prevShortShares": 12873977.0,
      "avgDailyVolume": 5708665.0,
      "daysToCover": 2.54
    },
    {
      "settlementDate": "2026-09-15",
      "shortShares": 13245323.0,
      "prevShortShares": 14510842.0,
      "avgDailyVolume": 4353595.0,
      "daysToCover": 3.04
    }
  ],
  "COHR": [
    {
      "settlementDate": "2026-08-14",
      "shortShares": 10032446.0,
      "prevShortShares": 9047021.0,
      "avgDailyVolume": 8821687.0,
      "daysToCover": 1.14
    },
    {
      "settlementDate": "2026-08-31",
      "shortShares": 10764076.0,
      "prevShortShares": 10032446.0,
      "avgDailyVolume": 6272083.0,
      "daysToCover": 1.72
    },
    {
      "settlementDate": "2026-09-15",
      "shortShares": 10178444.0,
      "prevShortShares": 10764076.0,
      "avgDailyVolume": 5993518.0,
      "daysToCover": 1.7
    }
  ],
  "LITE": [
    {
      "settlementDate": "2026-08-14",
      "shortShares": 7270171.0,
      "prevShortShares": 8551325.0,
      "avgDailyVolume": 5595730.0,
      "daysToCover": 1.3
    },
    {
      "settlementDate": "2026-08-31",
      "shortShares": 7122028.0,
      "prevShortShares": 7270171.0,
      "avgDailyVolume": 4143406.0,
      "daysToCover": 1.72
    },
    {
      "settlementDate": "2026-09-15",
      "shortShares": 6513349.0,
      "prevShortShares": 7122028.0,
      "avgDailyVolume": 3999348.0,
      "daysToCover": 1.63
    }
  ],
  "GEV": [
    {
      "settlementDate": "2026-08-14",
      "shortShares": 7936921.0,
      "prevShortShares": 8528212.0,
      "avgDailyVolume": 1806164.0,
      "daysToCover": 4.39
    },
    {
      "settlementDate": "2026-08-31",
      "shortShares": 8763426.0,
      "prevShortShares": 7936921.0,
      "avgDailyVolume": 2236245.0,
      "daysToCover": 3.92
    },
    {
      "settlementDate": "2026-09-15",
      "shortShares": 8757218.0,
      "prevShortShares": 8763426.0,
      "avgDailyVolume": 1916784.0,
      "daysToCover": 4.57
    }
  ],
  "CEG": [
    {
      "settlementDate": "2026-08-14",
      "shortShares": 9408275.0,
      "prevShortShares": 10429475.0,
      "avgDailyVolume": 2817270.0,
      "daysToCover": 3.34
    },
    {
      "settlementDate": "2026-08-31",
      "shortShares": 11572494.0,
      "prevShortShares": 9408275.0,
      "avgDailyVolume": 2314865.0,
      "daysToCover": 5.0
    },
    {
      "settlementDate": "2026-09-15",
      "shortShares": 11740256.0,
      "prevShortShares": 11572494.0,
      "avgDailyVolume": 2779480.0,
      "daysToCover": 4.22
    }
  ],
  "VST": [
    {
      "settlementDate": "2026-08-14",
      "shortShares": 9636577.0,
      "prevShortShares": 8680253.0,
      "avgDailyVolume": 5142596.0,
      "daysToCover": 1.87
    },
    {
      "settlementDate": "2026-08-31",
      "shortShares": 10778003.0,
      "prevShortShares": 9636577.0,
      "avgDailyVolume": 4031700.0,
      "daysToCover": 2.67
    },
    {
      "settlementDate": "2026-09-15",
      "shortShares": 9701865.0,
      "prevShortShares": 10778003.0,
      "avgDailyVolume": 4746115.0,
      "daysToCover": 2.04
    }
  ],
  "ETN": [
    {
      "settlementDate": "2026-08-14",
      "shortShares": 6406253.0,
      "prevShortShares": 6836616.0,
      "avgDailyVolume": 2018286.0,
      "daysToCover": 3.17
    },
    {
      "settlementDate": "2026-08-31",
      "shortShares": 7208626.0,
      "prevShortShares": 6406253.0,
      "avgDailyVolume": 1764865.0,
      "daysToCover": 4.08
    },
    {
      "settlementDate": "2026-09-15",
      "shortShares": 7755755.0,
      "prevShortShares": 7208626.0,
      "avgDailyVolume": 1987288.0,
      "daysToCover": 3.9
    }
  ],
  "PWR": [
    {
      "settlementDate": "2026-08-14",
      "shortShares": 2762674.0,
      "prevShortShares": 3102301.0,
      "avgDailyVolume": 904324.0,
      "daysToCover": 3.05
    },
    {
      "settlementDate": "2026-08-31",
      "shortShares": 3125973.0,
      "prevShortShares": 2762674.0,
      "avgDailyVolume": 1253924.0,
      "daysToCover": 2.49
    },
    {
      "settlementDate": "2026-09-15",
      "shortShares": 3143949.0,
      "prevShortShares": 3125973.0,
      "avgDailyVolume": 808635.0,
      "daysToCover": 3.89
    }
  ],
  "HUBB": [
    {
      "settlementDate": "2026-08-14",
      "shortShares": 2675983.0,
      "prevShortShares": 2722611.0,
      "avgDailyVolume": 475105.0,
      "daysToCover": 5.63
    },
    {
      "settlementDate": "2026-08-31",
      "shortShares": 3040421.0,
      "prevShortShares": 2675983.0,
      "avgDailyVolume": 465317.0,
      "daysToCover": 6.53
    },
    {
      "settlementDate": "2026-09-15",
      "shortShares": 2848108.0,
      "prevShortShares": 3040421.0,
      "avgDailyVolume": 483587.0,
      "daysToCover": 5.89
    }
  ],
  "VRT": [
    {
      "settlementDate": "2026-08-14",
      "shortShares": 13058621.0,
      "prevShortShares": 12335478.0,
      "avgDailyVolume": 4710166.0,
      "daysToCover": 2.77
    },
    {
      "settlementDate": "2026-08-31",
      "shortShares": 13764719.0,
      "prevShortShares": 13058621.0,
      "avgDailyVolume": 4380575.0,
      "daysToCover": 3.14
    },
    {
      "settlementDate": "2026-09-15",
      "shortShares": 14150447.0,
      "prevShortShares": 13764719.0,
      "avgDailyVolume": 6089282.0,
      "daysToCover": 2.32
    }
  ],
  "MOD": [
    {
      "settlementDate": "2026-08-14",
      "shortShares": 3119198.0,
      "prevShortShares": 3457872.0,
      "avgDailyVolume": 1145391.0,
      "daysToCover": 2.72
    },
    {
      "settlementDate": "2026-08-31",
      "shortShares": 3302879.0,
      "prevShortShares": 3119198.0,
      "avgDailyVolume": 1412539.0,
      "daysToCover": 2.34
    },
    {
      "settlementDate": "2026-09-15",
      "shortShares": 3363511.0,
      "prevShortShares": 3302879.0,
      "avgDailyVolume": 1160253.0,
      "daysToCover": 2.9
    }
  ],
  "STX": [
    {
      "settlementDate": "2026-08-14",
      "shortShares": 8161824.0,
      "prevShortShares": 8047106.0,
      "avgDailyVolume": 4733552.0,
      "daysToCover": 1.72
    },
    {
      "settlementDate": "2026-08-31",
      "shortShares": 8482797.0,
      "prevShortShares": 8161824.0,
      "avgDailyVolume": 3590490.0,
      "daysToCover": 2.36
    },
    {
      "settlementDate": "2026-09-15",
      "shortShares": 9129029.0,
      "prevShortShares": 8482797.0,
      "avgDailyVolume": 3417882.0,
      "daysToCover": 2.67
    }
  ],
  "EME": [
    {
      "settlementDate": "2026-08-14",
      "shortShares": 941124.0,
      "prevShortShares": 997545.0,
      "avgDailyVolume": 362309.0,
      "daysToCover": 2.6
    },
    {
      "settlementDate": "2026-08-31",
      "shortShares": 912626.0,
      "prevShortShares": 941124.0,
      "avgDailyVolume": 376307.0,
      "daysToCover": 2.43
    },
    {
      "settlementDate": "2026-09-15",
      "shortShares": 942104.0,
      "prevShortShares": 912626.0,
      "avgDailyVolume": 304323.0,
      "daysToCover": 3.1
    }
  ],
  "FIX": [
    {
      "settlementDate": "2026-08-14",
      "shortShares": 915049.0,
      "prevShortShares": 695921.0,
      "avgDailyVolume": 378680.0,
      "daysToCover": 2.42
    },
    {
      "settlementDate": "2026-08-31",
      "shortShares": 910248.0,
      "prevShortShares": 915049.0,
      "avgDailyVolume": 412116.0,
      "daysToCover": 2.21
    },
    {
      "settlementDate": "2026-09-15",
      "shortShares": 857812.0,
      "prevShortShares": 910248.0,
      "avgDailyVolume": 304182.0,
      "daysToCover": 2.82
    }
  ],
  "SBGSY": [
    {
      "settlementDate": "2026-08-14",
      "shortShares": 282883.0,
      "prevShortShares": 171781.0,
      "avgDailyVolume": 340387.0,
      "daysToCover": 1.0
    }
  ],
  "BE": [
    {
      "settlementDate": "2026-08-14",
      "shortShares": 18260304.0,
      "prevShortShares": 20361513.0,
      "avgDailyVolume": 13480348.0,
      "daysToCover": 1.35
    },
    {
      "settlementDate": "2026-08-31",
      "shortShares": 19210585.0,
      "prevShortShares": 18260304.0,
      "avgDailyVolume": 11867000.0,
      "daysToCover": 1.62
    },
    {
      "settlementDate": "2026-09-15",
      "shortShares": 18994065.0,
      "prevShortShares": 19210585.0,
      "avgDailyVolume": 14246300.0,
      "daysToCover": 1.33
    }
  ]
};
