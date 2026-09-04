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
    }
  ],
  "GOOGL": [
    {
      "settlementDate": "2026-08-14",
      "shortShares": 72705550.0,
      "prevShortShares": 70493725.0,
      "avgDailyVolume": 27228699.0,
      "daysToCover": 2.67
    }
  ],
  "AMZN": [
    {
      "settlementDate": "2026-08-14",
      "shortShares": 95300129.0,
      "prevShortShares": 98434174.0,
      "avgDailyVolume": 42070694.0,
      "daysToCover": 2.27
    }
  ],
  "META": [
    {
      "settlementDate": "2026-08-14",
      "shortShares": 28048106.0,
      "prevShortShares": 31458758.0,
      "avgDailyVolume": 14456921.0,
      "daysToCover": 1.94
    }
  ],
  "AAPL": [
    {
      "settlementDate": "2026-08-14",
      "shortShares": 116327753.0,
      "prevShortShares": 141606163.0,
      "avgDailyVolume": 46065396.0,
      "daysToCover": 2.53
    }
  ],
  "TSLA": [
    {
      "settlementDate": "2026-08-14",
      "shortShares": 69196896.0,
      "prevShortShares": 68501639.0,
      "avgDailyVolume": 32128184.0,
      "daysToCover": 2.15
    }
  ],
  "ORCL": [
    {
      "settlementDate": "2026-08-14",
      "shortShares": 47767442.0,
      "prevShortShares": 50143917.0,
      "avgDailyVolume": 30712339.0,
      "daysToCover": 1.56
    }
  ],
  "CRM": [
    {
      "settlementDate": "2026-08-14",
      "shortShares": 26502629.0,
      "prevShortShares": 29406370.0,
      "avgDailyVolume": 11392045.0,
      "daysToCover": 2.33
    }
  ],
  "PLTR": [
    {
      "settlementDate": "2026-08-14",
      "shortShares": 68278633.0,
      "prevShortShares": 68066419.0,
      "avgDailyVolume": 62118852.0,
      "daysToCover": 1.1
    }
  ],
  "NVDA": [
    {
      "settlementDate": "2026-08-14",
      "shortShares": 285956804.0,
      "prevShortShares": 292667375.0,
      "avgDailyVolume": 113580992.0,
      "daysToCover": 2.52
    }
  ],
  "AMD": [
    {
      "settlementDate": "2026-08-14",
      "shortShares": 40065798.0,
      "prevShortShares": 37752132.0,
      "avgDailyVolume": 26911002.0,
      "daysToCover": 1.49
    }
  ],
  "AVGO": [
    {
      "settlementDate": "2026-08-14",
      "shortShares": 56209128.0,
      "prevShortShares": 61196152.0,
      "avgDailyVolume": 17502436.0,
      "daysToCover": 3.21
    }
  ],
  "QCOM": [
    {
      "settlementDate": "2026-08-14",
      "shortShares": 33274306.0,
      "prevShortShares": 34577216.0,
      "avgDailyVolume": 9221663.0,
      "daysToCover": 3.61
    }
  ],
  "ARM": [
    {
      "settlementDate": "2026-08-14",
      "shortShares": 18264105.0,
      "prevShortShares": 16867253.0,
      "avgDailyVolume": 4430142.0,
      "daysToCover": 4.12
    }
  ],
  "MRVL": [
    {
      "settlementDate": "2026-08-14",
      "shortShares": 28388438.0,
      "prevShortShares": 35826090.0,
      "avgDailyVolume": 20010395.0,
      "daysToCover": 1.42
    }
  ],
  "INTC": [
    {
      "settlementDate": "2026-08-14",
      "shortShares": 135685200.0,
      "prevShortShares": 125100834.0,
      "avgDailyVolume": 107891781.0,
      "daysToCover": 1.26
    }
  ],
  "TSM": [
    {
      "settlementDate": "2026-08-14",
      "shortShares": 30161233.0,
      "prevShortShares": 33191967.0,
      "avgDailyVolume": 10471757.0,
      "daysToCover": 2.88
    }
  ],
  "ASML": [
    {
      "settlementDate": "2026-08-14",
      "shortShares": 1352364.0,
      "prevShortShares": 1068098.0,
      "avgDailyVolume": 1222298.0,
      "daysToCover": 1.11
    }
  ],
  "AMAT": [
    {
      "settlementDate": "2026-08-14",
      "shortShares": 11875178.0,
      "prevShortShares": 14231996.0,
      "avgDailyVolume": 7421603.0,
      "daysToCover": 1.6
    }
  ],
  "LRCX": [
    {
      "settlementDate": "2026-08-14",
      "shortShares": 28419138.0,
      "prevShortShares": 26963996.0,
      "avgDailyVolume": 8678868.0,
      "daysToCover": 3.27
    }
  ],
  "KLAC": [
    {
      "settlementDate": "2026-08-14",
      "shortShares": 25337831.0,
      "prevShortShares": 27024003.0,
      "avgDailyVolume": 10039327.0,
      "daysToCover": 2.52
    }
  ],
  "MU": [
    {
      "settlementDate": "2026-08-14",
      "shortShares": 30016025.0,
      "prevShortShares": 29892897.0,
      "avgDailyVolume": 33755659.0,
      "daysToCover": 1.0
    }
  ],
  "SNDK": [
    {
      "settlementDate": "2026-08-14",
      "shortShares": 7676558.0,
      "prevShortShares": 6823953.0,
      "avgDailyVolume": 15207988.0,
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
    }
  ],
  "ANET": [
    {
      "settlementDate": "2026-08-14",
      "shortShares": 12873977.0,
      "prevShortShares": 12815409.0,
      "avgDailyVolume": 9197845.0,
      "daysToCover": 1.4
    }
  ],
  "COHR": [
    {
      "settlementDate": "2026-08-14",
      "shortShares": 10032446.0,
      "prevShortShares": 9047021.0,
      "avgDailyVolume": 8821687.0,
      "daysToCover": 1.14
    }
  ],
  "LITE": [
    {
      "settlementDate": "2026-08-14",
      "shortShares": 7270171.0,
      "prevShortShares": 8551325.0,
      "avgDailyVolume": 5595730.0,
      "daysToCover": 1.3
    }
  ],
  "GEV": [
    {
      "settlementDate": "2026-08-14",
      "shortShares": 7936921.0,
      "prevShortShares": 8528212.0,
      "avgDailyVolume": 1806164.0,
      "daysToCover": 4.39
    }
  ],
  "CEG": [
    {
      "settlementDate": "2026-08-14",
      "shortShares": 9408275.0,
      "prevShortShares": 10429475.0,
      "avgDailyVolume": 2817270.0,
      "daysToCover": 3.34
    }
  ],
  "VST": [
    {
      "settlementDate": "2026-08-14",
      "shortShares": 9636577.0,
      "prevShortShares": 8680253.0,
      "avgDailyVolume": 5142596.0,
      "daysToCover": 1.87
    }
  ],
  "ETN": [
    {
      "settlementDate": "2026-08-14",
      "shortShares": 6406253.0,
      "prevShortShares": 6836616.0,
      "avgDailyVolume": 2018286.0,
      "daysToCover": 3.17
    }
  ],
  "PWR": [
    {
      "settlementDate": "2026-08-14",
      "shortShares": 2762674.0,
      "prevShortShares": 3102301.0,
      "avgDailyVolume": 904324.0,
      "daysToCover": 3.05
    }
  ],
  "HUBB": [
    {
      "settlementDate": "2026-08-14",
      "shortShares": 2675983.0,
      "prevShortShares": 2722611.0,
      "avgDailyVolume": 475105.0,
      "daysToCover": 5.63
    }
  ],
  "VRT": [
    {
      "settlementDate": "2026-08-14",
      "shortShares": 13058621.0,
      "prevShortShares": 12335478.0,
      "avgDailyVolume": 4710166.0,
      "daysToCover": 2.77
    }
  ],
  "MOD": [
    {
      "settlementDate": "2026-08-14",
      "shortShares": 3119198.0,
      "prevShortShares": 3457872.0,
      "avgDailyVolume": 1145391.0,
      "daysToCover": 2.72
    }
  ],
  "STX": [
    {
      "settlementDate": "2026-08-14",
      "shortShares": 8161824.0,
      "prevShortShares": 8047106.0,
      "avgDailyVolume": 4733552.0,
      "daysToCover": 1.72
    }
  ],
  "EME": [
    {
      "settlementDate": "2026-08-14",
      "shortShares": 941124.0,
      "prevShortShares": 997545.0,
      "avgDailyVolume": 362309.0,
      "daysToCover": 2.6
    }
  ],
  "FIX": [
    {
      "settlementDate": "2026-08-14",
      "shortShares": 915049.0,
      "prevShortShares": 695921.0,
      "avgDailyVolume": 378680.0,
      "daysToCover": 2.42
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
    }
  ]
};
