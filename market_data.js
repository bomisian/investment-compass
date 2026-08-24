// 자동 생성 파일 - buy_signal_telegram.py 실행 시마다 갱신됨. 직접 수정하지 마세요.
// 시장 환경 지표(야후) + 시장 헤드라인(Finnhub). 이 파일이 없어도 대시보드는 정상 동작함.
const MARKET_DATA = {
  "indicators": {
    "vix": {
      "current": 15.680000305175781,
      "prevClose": 15.130000114440918,
      "changeAbs": 0.5500001907348633,
      "changePct": 3.635163163084925,
      "pctRank": 26.751592356687897,
      "min5y": 11.859999656677246,
      "max5y": 52.33000183105469,
      "high1y": 31.049999237060547,
      "drawdown1y": -49.50080292929443,
      "ma20": 15.853999948501587,
      "ma60": 16.914999930063882,
      "chg1m": -2.8999996185302734,
      "chg3m": -0.9099998474121094,
      "chg1mPct": -15.608178850583254,
      "chg3mPct": -5.485231097301453,
      "lastDate": "2026-08-24",
      "bars": 1256,
      "symbol": "^VIX",
      "label": "VIX (공포지수)",
      "unit": "",
      "digits": 2
    },
    "us10y": {
      "current": 4.691999912261963,
      "prevClose": 4.73799991607666,
      "changeAbs": -0.046000003814697266,
      "changePct": -0.970873884117498,
      "pctRank": 97.37051792828684,
      "min5y": 1.2769999504089355,
      "max5y": 4.98799991607666,
      "high1y": 4.744999885559082,
      "drawdown1y": -1.1169646907351671,
      "ma20": 4.675249981880188,
      "ma60": 4.568916646639506,
      "chg1m": 0.013000011444091797,
      "chg3m": 0.13399982452392578,
      "chg1mPct": 0.27783739516257405,
      "chg3mPct": 2.9398820084363977,
      "lastDate": "2026-08-24",
      "bars": 1255,
      "symbol": "^TNX",
      "label": "미국 10년물 금리",
      "unit": "%",
      "digits": 2
    },
    "us3m": {
      "current": 3.7070000171661377,
      "prevClose": 3.7100000381469727,
      "changeAbs": -0.003000020980834961,
      "changePct": -0.08086309838242957,
      "pctRank": 36.17529880478087,
      "min5y": 0.019999999552965164,
      "max5y": 5.3480000495910645,
      "high1y": 4.0929999351501465,
      "drawdown1y": -9.430733547515901,
      "ma20": 3.7078500032424926,
      "ma60": 3.689050002892812,
      "chg1m": -0.09800004959106445,
      "chg3m": 0.12199997901916504,
      "chg1mPct": -2.5755597338158434,
      "chg3mPct": 3.4030677188562826,
      "lastDate": "2026-08-24",
      "bars": 1255,
      "symbol": "^IRX",
      "label": "미국 3개월 금리",
      "unit": "%",
      "digits": 2
    },
    "oil": {
      "current": 85.2699966430664,
      "prevClose": 87.05999755859375,
      "changeAbs": -1.7900009155273438,
      "changePct": -2.056054405839633,
      "pctRank": 75.65632458233891,
      "min5y": 55.27000045776367,
      "max5y": 123.69999694824219,
      "high1y": 112.94999694824219,
      "drawdown1y": -24.506419701684244,
      "ma20": 82.32299919128418,
      "ma60": 81.03816655476888,
      "chg1m": -4.040000915527344,
      "chg3m": -11.330001831054688,
      "chg1mPct": -4.52357073784132,
      "chg3mPct": -11.728780548676683,
      "lastDate": "2026-08-24",
      "bars": 1257,
      "symbol": "CL=F",
      "label": "WTI 유가",
      "unit": "$",
      "digits": 1
    },
    "dollar": {
      "current": 98.97699737548828,
      "prevClose": 98.80000305175781,
      "changeAbs": 0.17699432373046875,
      "changePct": 0.17914404682533028,
      "pctRank": 26.332537788385046,
      "min5y": 92.04000091552734,
      "max5y": 114.11000061035156,
      "high1y": 101.61000061035156,
      "drawdown1y": -2.59128355383067,
      "ma20": 99.75835037231445,
      "ma60": 100.32311706542968,
      "chg1m": -2.4930038452148438,
      "chg3m": -0.3430023193359375,
      "chg1mPct": -2.456887567974318,
      "chg3mPct": -0.34535070518512306,
      "lastDate": "2026-08-24",
      "bars": 1257,
      "symbol": "DX-Y.NYB",
      "label": "달러지수(DXY)",
      "unit": "",
      "digits": 1
    },
    "gold": {
      "current": 4717.89990234375,
      "prevClose": 4624.10009765625,
      "changeAbs": 93.7998046875,
      "changePct": 2.0284985771619204,
      "pctRank": 95.70405727923628,
      "min5y": 1623.300048828125,
      "max5y": 5318.39990234375,
      "high1y": 5318.39990234375,
      "drawdown1y": -11.290989978684518,
      "ma20": 4310.349963378906,
      "ma60": 4216.560001627604,
      "chg1m": 650.2998046875,
      "chg3m": 196.89990234375,
      "chg1mPct": 15.987309201369197,
      "chg3mPct": 4.355228983493696,
      "lastDate": "2026-08-24",
      "bars": 1257,
      "symbol": "GC=F",
      "label": "금",
      "unit": "$",
      "digits": 0
    },
    "us30y": {
      "current": 5.220000267028809,
      "prevClose": 5.276000022888184,
      "changeAbs": -0.055999755859375,
      "changePct": -1.0614055272259013,
      "pctRank": 99.12350597609561,
      "min5y": 1.6779999732971191,
      "max5y": 5.309000015258789,
      "high1y": 5.309000015258789,
      "drawdown1y": -1.676393821325728,
      "ma20": 5.2233000040054325,
      "ma60": 5.079816699028015,
      "chg1m": 0.05800008773803711,
      "chg3m": 0.15600013732910156,
      "chg1mPct": 1.1235971662830508,
      "chg3mPct": 3.0805713533493195,
      "lastDate": "2026-08-24",
      "bars": 1255,
      "symbol": "^TYX",
      "label": "미국 30년물 금리",
      "unit": "%",
      "digits": 2
    },
    "dow": {
      "current": 53392.76171875,
      "prevClose": 53277.01171875,
      "changeAbs": 115.75,
      "changePct": 0.21726068385938324,
      "pctRank": 99.04382470119522,
      "min5y": 28725.509765625,
      "max5y": 54349.12109375,
      "high1y": 54349.12109375,
      "drawdown1y": -1.7596593206177458,
      "ma20": 53368.7853515625,
      "ma60": 52349.486328125,
      "chg1m": 1445.51171875,
      "chg3m": 2813.0625,
      "chg1mPct": 2.7826530157996814,
      "chg3mPct": 5.561643393397626,
      "lastDate": "2026-08-24",
      "bars": 1255,
      "symbol": "^DJI",
      "label": "다우존스 지수",
      "unit": "",
      "digits": 0
    }
  },
  "yieldSpread": 0.9849998950958252,
  "sector": {
    "groups": {
      "빅테크·SW": {
        "ret1m": 16.679902632527032,
        "ret3m": 1.3850994945021844,
        "ret6m": 15.712809875744348,
        "ret1y": 10.659445016405167,
        "winRate": 60.8,
        "count": 9
      },
      "반도체": {
        "ret1m": -2.9997336565338872,
        "ret3m": -1.4165975436356337,
        "ret6m": 66.98831452939922,
        "ret1y": 242.28267556394502,
        "winRate": 71.5,
        "count": 16
      }
    },
    "pair": [
      "빅테크·SW",
      "반도체"
    ],
    "corr60": 0.14111089758452186,
    "corrPctRank": 0.41841004184100417,
    "corrMin5y": 0.11322641817101682,
    "corrMedian5y": 0.7050009580856722,
    "corrMax5y": 0.9306761077384692
  },
  "news": [
    {
      "headline": "S&P 500, Nasdaq slip as Iran tensions test markets in high-stakes week - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxQZmVCQWYzaWpzTVpmVFJPV0xRdEtUcXg0N2JKZHB5Z2JFZWpWRHFwS0Q3R2NtVHp1c29rem5scXhwa0FZMFZJNGtqM3ZCRlVOa1doNGNtWEcxVVZCYXFDSXlEbmJwODhKbG5Kdk15RDJpbDFleUFpWkdmbWEtMkhGWnF0U1FWWVpmSnp4aXp4UzlPc2hzaFNTWllwSm5UVWlpNWtWQlkzX1dqOHJNbkg5ag?oc=5",
      "datetime": 1787580702,
      "headlineKo": "S&P 500, 이란이 고위험 주의 시장을 시험함에 따라 나스닥이 미끄러짐 - 로이터"
    },
    {
      "headline": "Gold rally gains momentum ahead of US inflation, Jackson Hole event - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMitwFBVV95cUxNUkZtQVBPdjlyb21JaVBxeFRicDFEeHVNQ21pZzdGQnlSMUpFYV80MEl3RjJUbF9tYWxmdkZqY2NpaXh5S0NPd1lhbFZxUHZMVVFkTHNyNktCX2hrUU5KN3hjcWRUVTlaQ0hwcmVoMV9VZjBmUkFjMGtTUUY5MXBwRDRFWXBwQnhZTzU1dV81LThOaTNZR1BLVDRGU1JtbDczRjVweFByWkVQbWhhX3VwYTlJZ0VYblU?oc=5",
      "datetime": 1787580480,
      "headlineKo": "금 랠리는 미국 인플레이션, 잭슨 홀 이벤트를 앞두고 추진력을 얻습니다 - 로이터"
    },
    {
      "headline": "Trump says U.S. will hike Canada auto tariffs to 50% as trade war escalates",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/24/trump-canada-auto-tariffs-trade-war.html",
      "datetime": 1787579966,
      "headlineKo": "트럼프 대통령은 무역전쟁이 격화됨에 따라 미국이 캐나다의 자동차 관세를 50% 로 인상할 것이라고 말했습니다."
    },
    {
      "headline": "US Treasury to broaden scope of secondary sanctions on Iran, source says - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMitwFBVV95cUxOb0FZaGVaRDU5ZGhzbm1uaHBtUDIwNEhOUk96ZkxVNlRubGFIbHdXTmZhTU1YM2lrclBjNkpkNmlQWnIwUW9pS0xkazBKU2VTZXZMR2RlR0RWTTBnRUVKb2J1SzdyOGNGRjBBWFo4ZnRVQ1dLNG9KT2hTNU5SUGRNNDFERkctaW5oYlhjbTF6VjZNZmZBZHNjemVYZzZCZkFRRkE3MFlJMFlrTl9qT3VaZWQzQ3NnYlE?oc=5",
      "datetime": 1787578484,
      "headlineKo": "미국 재무부가 이란에 대한 2차 제재 범위를 확대한다고 소식통이 밝혔습니다. - 로이터"
    },
    {
      "headline": "Iran threatens 45 tankers with fines, confiscation in Hormuz escalation - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxPR1A3TzVlaW92SHFPcHNmUjdQZ1hIYi0xZWNCdGVpcmY4VmZBUHNneElLRnE5dDFwZXRRX1FfcHFkMDlFMm5kdGh2aldsWnllaGZSVWJ2SFhzUVRRU3FyNzJNeWJfb3lrQnhqQ2g0d1c0ZUo0dllmTkd4QzAwWTNZV05sNlc2M3c5c3d5Zi1hTF90N0ltX25sUUk4T0RURUE3akZuX2VrMEFGcXFIMV9FRFU5VWI2UE4wREV3?oc=5",
      "datetime": 1787578313,
      "headlineKo": "이란, 벌금으로 45척 유조선 위협, 호르무즈 에스컬레이션 압수 - 로이터"
    },
    {
      "headline": "Jim Cramer's top 10 things to watch in the stock market Monday",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/24/jim-cramers-top-10-things-to-watch-in-the-stock-market-monday.html",
      "datetime": 1787575143,
      "headlineKo": "짐 크레이머 (Jim Cramer) 가 월요일 주식 시장에서 지켜봐야 할 10가지"
    },
    {
      "headline": "The Hormuz crude volume debate masks the real shortage of refined fuels - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxNdWt2QTd6U25aN2I3V1VZTmhVdVBPNTdYNUx5OXlNQWcxcFo4TEJwUEo3Z2R0MWRBRnVvT3FqMms2NURIQURVdWtZVlEtM1d3YlBEVDh4b0g1SmlFWVVGRDRJYVVvbUI5eFRGWmxDRXF6eWFVVXF5TktKWS11NFZhUkU4eVJNY2ljcThUQi1uZ21Zc0NhekVIMmxDcUhla0xPSFZlV0VlSTJJOTdQU1hXODZwMmxPM043dmV1SFdCSDRlZ3BNMXJLXw?oc=5",
      "datetime": 1787572827,
      "headlineKo": "호르무즈 원유 거래량 논쟁은 정제 연료의 실질적인 부족을 가려줍니다. - 로이터"
    },
    {
      "headline": "Trump Media CEO defends selling faster access to president's Truth Social posts, says more have signed up",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/24/trump-media-ceo-truth-api.html",
      "datetime": 1787572717,
      "headlineKo": "트럼프 미디어 CEO는 대통령의 진실 소셜 게시물에 대한 더 빠른 액세스를 판매하는 것을 방어합니다. 더 많은 사람들이 가입했다고 말합니다."
    },
    {
      "headline": "Dollar hovers near multi-month lows as debt nerves unnerve investors - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxNeWdQcUNEMGg5ZXdrRnBJRl9PLXZtbk9NYzdiZnEydGZBT21TOWRFaV9EQVBpYU9mcktFSV84c0JwcVBDdHVDSkkwUUpIWVM3ZVhYTWFrNFNWRlc3MUhMWVZ5V29JTXh5U01Ja0l3MzdGTTUweFo0Y0VVZjlfYXp5YjVfSU11NW5zdUtqM1l4cEtCV1JmU24xVmlBc1NtVkRHcnpxUFlxNkRZSUU?oc=5",
      "datetime": 1787571206,
      "headlineKo": "달러는 채무 신경이 투자자를 unnerve로 여러 달 최저치 근처에 맴돈다 - 로이터"
    },
    {
      "headline": "UPS is investing $2 billion in international, healthcare and supply chain businesses",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/24/ups-global-logistics-investment.html",
      "datetime": 1787569201,
      "headlineKo": "UPS는 국제, 의료 및 공급망 사업에 20억 달러 ($) 를 투자하고 있습니다."
    },
    {
      "headline": "Looming US sanctions on Iran put China oil buying in spotlight - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxOT1hfY2RieU1zQWlvd1p0M1ZhdzdkU2ZGYmZ4TUlUdG9IbXRZWjlTbTctdi1vMHBJTEtWTG40aW1sOHRqT25MaFNleGZIdUlyU1NnZC12Z3FZT2FSU0ZxNmNra0pCZXpOQl9DUmVOZ3l2MzZLc2pkZndoR2pVUUl6dEp1TXRHMkNBeXRXNkMyNzhXejZuSS1aZGpPWHJETTVuUWVqQUhyay1kcUhU?oc=5",
      "datetime": 1787566208,
      "headlineKo": "이란에 대한 미국의 제재가 커지면서 중국 석유 구매가 주목받고 있다. - 로이터"
    },
    {
      "headline": "Zelenskiy says Russia is 'not ready' for ceasefire on grain ships - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxQZ1RncmU0SGgtRkJJQ3ZoOE45U3p6SzJ1dE1Kbm5SOFZtTXFWeWh2aEM0YlcyVmVwUDQwalVEMV83S1ZXd0JaZUktWlp2Z1pNT3M2ZWxmZGQyNWFmcU1UR3BucEt2ZGVJVk00c3lVTlB0Y2F1b3V0ZW1FdVd4T2l6WGlkQVJKRXh4MmVhdnh6blB0UnM2dnhCQk9UV1JNZEU5bUIyanRkZjJoOVpuQnNOaTlaU1pBRXdHZllJ?oc=5",
      "datetime": 1787565091,
      "headlineKo": "젤렌스키 (Zelenskiy) 는 러시아가 곡물 선박에서 휴전을 할 준비가되어 있지 않다고 말합니다. - 로이터"
    }
  ],
  "fgi": {
    "score": 56.4285714285714,
    "rating": "greed"
  },
  "_fetched_at": 1787589902.9500418,
  "_updated_label": "2026-08-25 01:45",
  "_last_attempt_at": 1787589902.9500418,
  "_last_success_at": 1787585896.6193767,
  "_collection_status": "partial",
  "_collection_errors": [
    "시장 헤드라인"
  ]
};
