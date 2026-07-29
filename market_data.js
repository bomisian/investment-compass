// 자동 생성 파일 - buy_signal_telegram.py 실행 시마다 갱신됨. 직접 수정하지 마세요.
// 시장 환경 지표(야후) + 시장 헤드라인(Finnhub). 이 파일이 없어도 대시보드는 정상 동작함.
const MARKET_DATA = {
  "indicators": {
    "vix": {
      "current": 19.989999771118164,
      "prevClose": 18.209999084472656,
      "changeAbs": 1.7800006866455078,
      "changePct": 9.77485324622165,
      "pctRank": 66.0828025477707,
      "min5y": 11.859999656677246,
      "max5y": 52.33000183105469,
      "ma20": 17.176499795913696,
      "ma60": 17.45666661262512,
      "chg1m": 2.3400001525878906,
      "chg3m": 1.1800003051757812,
      "chg1mPct": 13.257791519333436,
      "chg3mPct": 6.273260705362084,
      "lastDate": "2026-07-29",
      "bars": 1256,
      "symbol": "^VIX",
      "label": "VIX (공포지수)",
      "unit": "",
      "digits": 2
    },
    "us10y": {
      "current": 4.63700008392334,
      "prevClose": 4.604000091552734,
      "changeAbs": 0.03299999237060547,
      "changePct": 0.7167678478363358,
      "pctRank": 96.57370517928287,
      "min5y": 1.1740000247955322,
      "max5y": 4.98799991607666,
      "ma20": 4.5820499658584595,
      "ma60": 4.511499977111816,
      "chg1m": 0.2630000114440918,
      "chg3m": 0.28299999237060547,
      "chg1mPct": 6.012803088387227,
      "chg3mPct": 6.499770014237213,
      "lastDate": "2026-07-29",
      "bars": 1255,
      "symbol": "^TNX",
      "label": "미국 10년물 금리",
      "unit": "%",
      "digits": 2
    },
    "us3m": {
      "current": 3.7750000953674316,
      "prevClose": 3.759999990463257,
      "changeAbs": 0.015000104904174805,
      "changePct": 0.39893896122927097,
      "pctRank": 38.645418326693225,
      "min5y": 0.019999999552965164,
      "max5y": 5.3480000495910645,
      "ma20": 3.725999987125397,
      "ma60": 3.6551166653633116,
      "chg1m": 0.09500002861022949,
      "chg3m": 0.18500018119812012,
      "chg1mPct": 2.581522469752101,
      "chg3mPct": 5.1532085131240795,
      "lastDate": "2026-07-29",
      "bars": 1255,
      "symbol": "^IRX",
      "label": "미국 3개월 금리",
      "unit": "%",
      "digits": 2
    },
    "oil": {
      "current": 85.18000030517578,
      "prevClose": 79.26000213623047,
      "changeAbs": 5.9199981689453125,
      "changePct": 7.469086562438064,
      "pctRank": 75.81543357199682,
      "min5y": 55.27000045776367,
      "max5y": 123.69999694824219,
      "ma20": 78.76550064086913,
      "ma60": 86.02066663106282,
      "chg1m": 14.430000305175781,
      "chg3m": -14.75,
      "chg1mPct": 20.395760148658347,
      "chg3mPct": -14.76033218748628,
      "lastDate": "2026-07-29",
      "bars": 1257,
      "symbol": "CL=F",
      "label": "WTI 유가",
      "unit": "$",
      "digits": 1
    },
    "dollar": {
      "current": 101.41200256347656,
      "prevClose": 101.37999725341797,
      "changeAbs": 0.03200531005859375,
      "changePct": 0.0315696497590058,
      "pctRank": 43.789808917197455,
      "min5y": 91.86000061035156,
      "max5y": 114.11000061035156,
      "ma20": 101.07960052490235,
      "ma60": 100.01536687215169,
      "chg1m": 0.052001953125,
      "chg3m": 2.9319992065429688,
      "chg1mPct": 0.051304215481318,
      "chg3mPct": 2.9772533576345963,
      "lastDate": "2026-07-29",
      "bars": 1256,
      "symbol": "DX-Y.NYB",
      "label": "달러지수(DXY)",
      "unit": "",
      "digits": 1
    },
    "gold": {
      "current": 4059.300048828125,
      "prevClose": 4036.300048828125,
      "changeAbs": 23.0,
      "changePct": 0.5698287967139034,
      "pctRank": 85.99840891010342,
      "min5y": 1623.300048828125,
      "max5y": 5318.39990234375,
      "ma20": 4070.000036621094,
      "ma60": 4291.4266642252605,
      "chg1m": 37.0,
      "chg3m": -532.199951171875,
      "chg1mPct": 0.9198717040211792,
      "chg3mPct": -11.590982275332136,
      "lastDate": "2026-07-29",
      "bars": 1257,
      "symbol": "GC=F",
      "label": "금",
      "unit": "$",
      "digits": 0
    }
  },
  "yieldSpread": 0.8619999885559082,
  "sector": {
    "groups": {
      "빅테크·SW": {
        "ret1m": -0.503590654286068,
        "ret3m": -7.059873581851628,
        "ret6m": -11.30188956933208,
        "ret1y": -3.999233633874766,
        "winRate": 60.8,
        "count": 9
      },
      "반도체": {
        "ret1m": -26.83654807937822,
        "ret3m": 13.654499583009482,
        "ret6m": 53.475636781295876,
        "ret1y": 193.77725250206606,
        "winRate": 71.5,
        "count": 15
      }
    },
    "pair": [
      "빅테크·SW",
      "반도체"
    ],
    "corr60": 0.11225584567710417,
    "corrPctRank": 0.0,
    "corrMin5y": 0.11225584567710417,
    "corrMedian5y": 0.7115782038222396,
    "corrMax5y": 0.9346528705205663
  },
  "news": [
    {
      "headline": "Oil jumps nearly 7% on escalating Middle East airstrikes - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiygFBVV95cUxPd0ctWlZRN0hINkdrNUJmWWxpV0ZGNGw2Y2taRk1DbFBpdzd5bFdXQmJEcW9VRExnRFBtTWlTTHBRTU5tcDN2azF6VmtxdDN6WlVncmJxSVJhYjM4Wlctb3NEcnEzSWt4djdPSWJJX3ItYmpaN0UyZ09pbV85YjlRMkQ4RTV2RDE2c2NhYlRTdEVEUUFoWEVLMVBqUzhhX2xtVlJLUFp0RWFZTFpCSGJwMTRydUQ3NUx6ejJyYWFCdzBMVWpOYWZqbzF3?oc=5",
      "datetime": 1785333375,
      "headlineKo": "중동 공습 확대로 유가 7% 가까이 급등 - Reuters"
    },
    {
      "headline": "FIFA is embroiled in a $20 billion World Cup controversy. Here's what's going on",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/07/29/world-cup-fifa-stake-sales-uefa-soccer.html",
      "datetime": 1785332523,
      "headlineKo": "FIFA는 200억 달러 규모의 월드컵 논란에 휘말렸다. 무슨 일이 일어나고 있나요?"
    },
    {
      "headline": "Humana tops quarterly estimates, maintains profit outlook as medical costs stay in line",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/07/29/humana-hum-earnings-q2-2026.html",
      "datetime": 1785331400,
      "headlineKo": "휴마나, 분기별 추정치를 상회하고 의료비 수준 유지로 이익 전망 유지"
    },
    {
      "headline": "Jim Cramer's top 10 things to watch in the stock market Wednesday",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/07/29/jim-cramers-top-10-things-to-watch-in-the-stock-market-wednesday.html",
      "datetime": 1785330500,
      "headlineKo": "짐 크레이머가 수요일 주식시장에서 주목해야 할 10가지"
    },
    {
      "headline": "We're exiting our position in a household products giant after a soft quarter",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/07/29/were-exiting-our-position-in-a-household-products-giant-after-a-soft-quarter.html",
      "datetime": 1785330142,
      "headlineKo": "우리는 부진한 분기 이후 가정용품 거대 기업에서의 지위를 종료하고 있습니다."
    },
    {
      "headline": "EXCLUSIVE: US military may require some troops in Mideast to surrender cell phones, sources say - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxOQnRvd2JkQWxrSjBpdHRBSkU2bnZMZUtQc0g0SVZ3eHhzb2FSRFJ6UF9yZlNlcXVWek9jZkVmWVhnNVRSeFNrdUNBZm1PNEQ0RmxxMDY1SkZOS0NHM04xSk1iQzN5b29UbEdhY21IaGZSQU12WWsxR0VNd2t5LXoya1VoRHVET015cWM5emFfM1lhYWZTbS1BWGlfSFdZeXJGalRYdVZCYWFEM1hzd0l5ekQ5M2hJb19YSkNR?oc=5",
      "datetime": 1785329590,
      "headlineKo": "독점: 미군이 중동의 일부 군대에게 휴대전화를 넘겨달라고 요구할 수도 있다고 소식통이 전했습니다. - 로이터 통신"
    },
    {
      "headline": "YES Network, MSG Networks to exit Gotham app for DAZN streaming service",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/07/29/yes-network-msg-networks-dazn-streaming.html",
      "datetime": 1785326643,
      "headlineKo": "YES 네트워크, MSG 네트워크, DAZN 스트리밍 서비스용 Gotham 앱 종료"
    },
    {
      "headline": "EXCLUSIVE: Yemen's Houthis considering fees for ships sailing through Red Sea, sources say - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMixgFBVV95cUxQZzFWSEJjR1NNV3libHZfdlE0dkVfbW9jdG5VX3NpbEg4OGJQSllPQ2RsZmoyNXFjVEFMZkdoME5wRHZMS3NrZlEzT2JUT2hPVXZnQkROOTV0YVJIQk80cEw2ODNKWnlMcmNXYVVFcng4UlVEOVUzYWkzYVhCU19HaHVnQ0JSQzVzSE9OQjdDYzNDRjZiWXZQeDlMandraXA3d1NtRzhHVWRBMlA3NExVblNTY3dYbUpXb2pjVnRkcGhEWWU1U0E?oc=5",
      "datetime": 1785321606,
      "headlineKo": "독점: 예멘 ​​후티 반군이 홍해를 항해하는 선박에 대한 비용을 고려하고 있다고 소식통은 전했습니다. - 로이터 통신"
    },
    {
      "headline": "EXCLUSIVE: Iran to get Chinese shoulder-launched missile systems in weeks, sources say - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMitwFBVV95cUxPR19sNWVrRDdhcXlNdTlxcUdNR0dNWDRBcjZPd21xOEM2bEYtdDJiWTEtYzlweWs5ZmtILVlhQkVUNzdaaENHbnhqTl9SSFNCZjk3eXNMS1o4SXFzT2VBS3VZZ0p6MVlrQldWNjRMUGlTN2tDR2xUOVBUdkdkTndueExrQm9vRGtTLTdBWjNGMDhZRC1qNDZXYVk3TXB0bWZ4ZFhpYUtfZ2JaalVZdjU3emN6LUptbjA?oc=5",
      "datetime": 1785318221,
      "headlineKo": "독점: 이란이 몇 주 안에 중국의 견착형 미사일 시스템을 도입할 것이라고 소식통이 전했습니다 - 로이터 통신"
    },
    {
      "headline": "Israeli elections: how they work and who is in the race - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMingFBVV95cUxNMndqcXg1czF5MVNTaTVzQ2laN3RILUlTZGpwY3RQZ0o4UVM1eXRycnJPbWxMdHZBQXBVRkhxZnA4a3VlQlhtVElOaW9WNHN3OE90X0xGaEpBcGxyZGFzUDNTMVcwSWlrRXRCZEhQYjdwcFlkcjdTWnlIM0RocUk1QVVYaGY2TElERXUyVTdXUDZuczJUMnhTd1RxLTlLUQ?oc=5",
      "datetime": 1785317863,
      "headlineKo": "이스라엘 선거: 어떻게 진행되고 누가 선거에 참여하는지 - Reuters"
    },
    {
      "headline": "UAE's ADNOC sells crude at premiums to Asian refiners in seventh tender, sources say - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxNamt1Q1VySm5UT2RwV21EVDg4a0wyTmZPa2NpakRiS1JsUVpzdmlkWUxYd2stbnRIcUh0Tnk1bVM1SVhrXzZVWS0zV0NIVVBKUUdOOC1vX3FmZ1JaeFdtcklEWHl1WVYzbGVJd0hicnZFSXp5ZFRtX25DRDZCOVJzREZIbVFiZ01PTm1wbjhFeW9XWDdJWkF1NzBIVk9xdGp2enJTTVVsT0hEaHNjSXUzc2d0ZXl6NjNuRDlBckFZWGwtUGM?oc=5",
      "datetime": 1785317649,
      "headlineKo": "UAE ADNOC, 7차 입찰에서 아시아 정유업체에 프리미엄 가격으로 원유 판매"
    },
    {
      "headline": "Explainer: Who are Iraq's Iranian-backed armed groups? - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMimwFBVV95cUxOU21aV2FRR0FGZ3dFbERoaWF0djA3bmxxbzcyYXQ2azhlZ1pHZlA0cS1pa1dlckF3Z1FsV2FMOHdhVERqcTdXY0o3S1paZVMwRmhTWjVsbVRsdzVkdnhTNFgyc3VvR3ZBU1dMYW1fUjQ3UjZLcFBiSUFCdlFYZS1fZERIQV9hS0J3U0tPX0NWQVlqYURUa1lMMUgzUQ?oc=5",
      "datetime": 1785317011,
      "headlineKo": "설명: 이란이 지원하는 이라크의 무장단체는 누구입니까? - 로이터"
    }
  ],
  "_fetched_at": 1785337201.857998,
  "_updated_label": "2026-07-30 00:00"
};
