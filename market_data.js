// 자동 생성 파일 - buy_signal_telegram.py 실행 시마다 갱신됨. 직접 수정하지 마세요.
// 시장 환경 지표(야후) + 시장 헤드라인(Finnhub). 이 파일이 없어도 대시보드는 정상 동작함.
const MARKET_DATA = {
  "indicators": {
    "vix": {
      "current": 17.770000457763672,
      "prevClose": 20.65999984741211,
      "changeAbs": -2.8899993896484375,
      "changePct": -13.988380498514097,
      "pctRank": 48.2484076433121,
      "min5y": 11.859999656677246,
      "max5y": 52.33000183105469,
      "ma20": 17.268999814987183,
      "ma60": 17.47433330217997,
      "chg1m": 1.3199996948242188,
      "chg3m": 0.8800010681152344,
      "chg1mPct": 8.024313882088524,
      "chg3mPct": 5.21019005278692,
      "lastDate": "2026-07-30",
      "bars": 1256,
      "symbol": "^VIX",
      "label": "VIX (공포지수)",
      "unit": "",
      "digits": 2
    },
    "us10y": {
      "current": 4.666999816894531,
      "prevClose": 4.622000217437744,
      "changeAbs": 0.04499959945678711,
      "changePct": 0.9735957883994459,
      "pctRank": 97.37051792828684,
      "min5y": 1.1740000247955322,
      "max5y": 4.98799991607666,
      "ma20": 4.590899968147278,
      "ma60": 4.514933307965596,
      "chg1m": 0.24899959564208984,
      "chg3m": 0.24899959564208984,
      "chg1mPct": 5.636024969946741,
      "chg3mPct": 5.636024969946741,
      "lastDate": "2026-07-30",
      "bars": 1255,
      "symbol": "^TNX",
      "label": "미국 10년물 금리",
      "unit": "%",
      "digits": 2
    },
    "us3m": {
      "current": 3.674999952316284,
      "prevClose": 3.6579999923706055,
      "changeAbs": 0.01699995994567871,
      "changePct": 0.4647337337653111,
      "pctRank": 35.537848605577686,
      "min5y": 0.019999999552965164,
      "max5y": 5.3480000495910645,
      "ma20": 3.718899977207184,
      "ma60": 3.6545833309491473,
      "chg1m": -0.057000160217285156,
      "chg3m": 0.08500003814697266,
      "chg1mPct": -1.5273354367234748,
      "chg3mPct": 2.367689141481241,
      "lastDate": "2026-07-30",
      "bars": 1255,
      "symbol": "^IRX",
      "label": "미국 3개월 금리",
      "unit": "%",
      "digits": 2
    },
    "oil": {
      "current": 83.62000274658203,
      "prevClose": 84.45999908447266,
      "changeAbs": -0.839996337890625,
      "changePct": -0.9945493097276767,
      "pctRank": 73.58790771678599,
      "min5y": 55.27000045776367,
      "max5y": 123.69999694824219,
      "ma20": 79.48150062561035,
      "ma60": 85.62866668701172,
      "chg1m": 14.120002746582031,
      "chg3m": -23.259994506835938,
      "chg1mPct": 20.31655071450652,
      "chg3mPct": -21.762719970590283,
      "lastDate": "2026-07-30",
      "bars": 1257,
      "symbol": "CL=F",
      "label": "WTI 유가",
      "unit": "$",
      "digits": 1
    },
    "dollar": {
      "current": 99.9000015258789,
      "prevClose": 100.80000305175781,
      "changeAbs": -0.9000015258789062,
      "changePct": -0.8928586295942691,
      "pctRank": 35.24264120922832,
      "min5y": 92.04000091552734,
      "max5y": 114.11000061035156,
      "ma20": 100.99050064086914,
      "ma60": 100.08400026957194,
      "chg1m": -1.2900009155273438,
      "chg3m": 0.9800033569335938,
      "chg1mPct": -1.2748304026124664,
      "chg3mPct": 0.9907029671187898,
      "lastDate": "2026-07-30",
      "bars": 1257,
      "symbol": "DX-Y.NYB",
      "label": "달러지수(DXY)",
      "unit": "",
      "digits": 1
    },
    "gold": {
      "current": 4158.89990234375,
      "prevClose": 4034.699951171875,
      "changeAbs": 124.199951171875,
      "changePct": 3.0782946111222285,
      "pctRank": 88.38504375497216,
      "min5y": 1623.300048828125,
      "max5y": 5318.39990234375,
      "ma20": 4073.3000244140626,
      "ma60": 4285.0066609700525,
      "chg1m": 136.0,
      "chg3m": -386.30029296875,
      "chg1mPct": 3.3806458848445646,
      "chg3mPct": -8.499082028711177,
      "lastDate": "2026-07-30",
      "bars": 1257,
      "symbol": "GC=F",
      "label": "금",
      "unit": "$",
      "digits": 0
    }
  },
  "yieldSpread": 0.9919998645782471,
  "sector": {
    "groups": {
      "빅테크·SW": {
        "ret1m": 0.32790700312916865,
        "ret3m": -5.187922700405845,
        "ret6m": -9.216959051575246,
        "ret1y": -1.9992430637291392,
        "winRate": 60.8,
        "count": 9
      },
      "반도체": {
        "ret1m": -24.58234867425769,
        "ret3m": 19.071430095935437,
        "ret6m": 60.99672274548114,
        "ret1y": 215.00806563790107,
        "winRate": 71.5,
        "count": 15
      }
    },
    "pair": [
      "빅테크·SW",
      "반도체"
    ],
    "corr60": 0.1569302067090204,
    "corrPctRank": 0.502092050209205,
    "corrMin5y": 0.11496792019743002,
    "corrMedian5y": 0.7115782038222396,
    "corrMax5y": 0.9346528705205663
  },
  "news": [
    {
      "headline": "UEFA threatens World Cup boycott over FIFA private equity investment plan",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/07/30/uefa-threatens-world-cup-boycott-over-fifa-investment-plan.html",
      "datetime": 1785432606,
      "headlineKo": "UEFA, FIFA 사모펀드 투자 계획에 대해 월드컵 보이콧 위협"
    },
    {
      "headline": "Cramer predicts a breakout for Starbucks shares as CEO Niccol's turnaround accelerates",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/07/30/cramer-predicts-a-breakout-for-starbucks-shares-as-ceo-niccols-turnaround-accelerates-.html",
      "datetime": 1785429395,
      "headlineKo": "Cramer는 CEO Niccol의 턴어라운드가 가속화됨에 따라 스타벅스 주식의 돌파를 예측합니다."
    },
    {
      "headline": "Cramer sees a 'sure signal to buy' stocks. Plus what we want from Amazon's results",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/07/30/cramer-sees-signal-to-buy-stocks-previews-reports-amzn-aapl.html",
      "datetime": 1785428231,
      "headlineKo": "Cramer는 주식을 '매수하라는 확실한 신호'를 보고 있습니다. 게다가 Amazon의 결과에서 우리가 원하는 것"
    },
    {
      "headline": "The real story at Apple is the memory crunch — and there's little room for error",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/07/30/the-real-story-at-apple-is-memory-and-theres-little-room-for-error.html",
      "datetime": 1785427198,
      "headlineKo": "Apple의 실제 이야기는 메모리 위기입니다. 오류가 발생할 여지가 거의 없습니다."
    },
    {
      "headline": "We're buying an AI stock that we recently took profits on and upgrading another",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/07/30/were-buying-an-ai-stock-that-we-recently-took-profits-on-and-upgrading-another.html",
      "datetime": 1785426197,
      "headlineKo": "우리는 최근에 수익을 낸 AI 주식을 매입하고 다른 주식을 업그레이드하고 있습니다."
    },
    {
      "headline": "EXCLUSIVE: Yemen's Houthis are attacking Saudi Arabia from Iraq, sources say - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxOOG5nRVpXaFJmYzZnNk1aMDMwdmc4NDdTalNOTWtaWHhzZGFXWE5JanRRM192OC1qZUs4Q0JHUktVR2VEb1lvdWh4ZjFEd0xQWW1aZkczRFY4VmxQTVV1anlGQ2RsSjFPTjB0aW53NGloTU9Na0hhM1V2ZnpTRFAwOTEtQUpIZ085VHZyS05XN241U3EyZmFqa3hGNzZsU0ZjN1Y2cTRaakE0bWU5VmV6ZTVR?oc=5",
      "datetime": 1785423496,
      "headlineKo": "독점: 예멘 ​​후티 반군이 이라크에서 사우디아라비아를 공격하고 있다고 소식통이 전했습니다. - 로이터 통신"
    },
    {
      "headline": "How NBCUniversal's deal with YouTube could jumpstart the next chapter of the streaming wars",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/07/30/nbcuniversal-youtube-deal-streaming-wars.html",
      "datetime": 1785423317,
      "headlineKo": "NBCUniversal과 YouTube의 거래가 스트리밍 전쟁의 다음 장을 열 수 있는 방법"
    },
    {
      "headline": "Gaza ceasefire talks see rare progress, sources say - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMizAFBVV95cUxQNHh3eHRRcUdPRGdqS1ViTm1TTDE0NGQwQXZ6Ml82R3g2cVA2c1NLanFFVHpJZU81VENlQ3NaS0xvWmV4VW5HU0hyX2YzUWhZbFJGN3p0dHh5aG5PQ08zakhtZGZycVpFYVdOLVA1ZlVPNGJqZFNvZGhBZDI5QmxiNUlnTXpSWTV2ZFVMZ1BQeGR4Mmo2TWhTTXZrY1dnUmlDWGlCYzVRNXFMNjROdmIxYkY0OG1mWXZiMXFtM1NPcEVoVUllLUJQdVNKMjk?oc=5",
      "datetime": 1785422534,
      "headlineKo": "가자 휴전 회담은 거의 진전이 없다고 소식통은 전했습니다 - 로이터 통신"
    },
    {
      "headline": "Iran's Araqchi presses European counterparts over use of bases in US operations - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMi0AFBVV95cUxPT1U2RVJiSTk2d0ZGMzVLVlc4MXU2d0drYUotbVg5aEd0bUlQbHlCM2x6eVBIUmFiaE9iRGxBc2E5Q2FaaV9EcW1lcWNGSU90ck5OcU5VU1FMcGgyUkIzV3l2cTNVaXROZl9DcDZocm54TUR6aUxsN0gtQmsweDVNLXEzRVRITThFSlBjdjBxYWpQYjJ3LXZ3SllwOUtkLV9OekRNV2xtMXZCRmhfeHdzdFNZUERBQVFOekdOVS1HcUx0UW16anBYRW52UmhPMFN4?oc=5",
      "datetime": 1785421783,
      "headlineKo": "이란 아라크치, 미국 작전에서 기지 사용에 대해 유럽 상대국 압박 - 로이터 통신"
    },
    {
      "headline": "Ferrari CEO says he 'would not change anything' about polarizing Luce EV debut",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/07/30/ferrari-ceo-luce-ev-debut.html",
      "datetime": 1785421344,
      "headlineKo": "페라리 CEO, 루체 EV 데뷔 양극화에 대해 '아무것도 바꾸지 않을 것'"
    },
    {
      "headline": "Traders trim UK rate hike bets after BoE flags limited Iran spillover - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxPNFNDMkNSYTR3X3RfYzUyaTdyYjdNaV9HZVhqVndGRVNJOGJBcGpoVlRPUnpRSF9lXzhFOHJMWXNvZGt1Qk8yX0loUUpBb0lZMzZRaERLWThKbWdZekFIRk1JcmM2cUhMSUV6YV9rTW5GWE1WVDBRNXV6b2FESFRDS3pGaXl4ZktGRVZ0QU9oZzlkeTR5Tkt5bzU5dnZlWTZpdHFPVmpDQWlSN25mV2FPZnNlYw?oc=5",
      "datetime": 1785419675,
      "headlineKo": "BoE가 이란 파급을 제한한 후 트레이더들은 영국 금리 인상 베팅을 줄였습니다 - Reuters"
    },
    {
      "headline": "German inflation rises in July, economy grows more than expected in Q2 - reuters.com",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxQSlVmQWpZSDUtb0Z2b1NqMTkzTXhScDctbnZBVXkta2syTXJFZk5VV19UOFQyUGhJM1o0MVZ2OEVrN2REdEJlOUZkbm16eEQtNVFqdm1QcUZpbHl2QmFQNkY2TFNEMU4ySWJvc2NXRVFBVlNNZlFtazcySVYxNXgxeUN6dEZnTmNUejBZSkl2eWpTbVpJc3cyV0daWjMzU0daOFRv?oc=5",
      "datetime": 1785417517,
      "headlineKo": "독일 7월 인플레이션 상승, 2분기 경제는 예상보다 더 성장 - reuters.com"
    }
  ],
  "_fetched_at": 1785438139.2926362,
  "_updated_label": "2026-07-31 04:02"
};
