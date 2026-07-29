// 자동 생성 파일 - buy_signal_telegram.py 실행 시마다 갱신됨. 직접 수정하지 마세요.
// 시장 환경 지표(야후) + 시장 헤드라인(Finnhub). 이 파일이 없어도 대시보드는 정상 동작함.
const MARKET_DATA = {
  "indicators": {
    "vix": {
      "current": 18.209999084472656,
      "prevClose": 18.670000076293945,
      "changeAbs": -0.46000099182128906,
      "changePct": -2.4638510441431167,
      "pctRank": 51.910828025477706,
      "min5y": 11.859999656677246,
      "max5y": 52.33000183105469,
      "ma20": 16.99949984550476,
      "ma60": 17.428333298365274,
      "chg1m": -0.20000076293945312,
      "chg3m": 0.37999916076660156,
      "chg1mPct": -1.0863702585395034,
      "chg3mPct": 2.131234786273722,
      "lastDate": "2026-07-28",
      "bars": 1256,
      "symbol": "^VIX",
      "label": "VIX (공포지수)",
      "unit": "",
      "digits": 2
    },
    "us10y": {
      "current": 4.604000091552734,
      "prevClose": 4.640999794006348,
      "changeAbs": -0.03699970245361328,
      "changePct": -0.7972355978424479,
      "pctRank": 95.1394422310757,
      "min5y": 1.1740000247955322,
      "max5y": 4.98799991607666,
      "ma20": 4.571099972724914,
      "ma60": 4.507183305422465,
      "chg1m": 0.23199987411499023,
      "chg3m": 0.26800012588500977,
      "chg1mPct": 5.30649273963111,
      "chg3mPct": 6.180814760309597,
      "lastDate": "2026-07-28",
      "bars": 1255,
      "symbol": "^TNX",
      "label": "미국 10년물 금리",
      "unit": "%",
      "digits": 2
    },
    "us3m": {
      "current": 3.759999990463257,
      "prevClose": 3.796999931335449,
      "changeAbs": -0.03699994087219238,
      "changePct": -0.9744519763311945,
      "pctRank": 38.24701195219124,
      "min5y": 0.019999999552965164,
      "max5y": 5.3480000495910645,
      "ma20": 3.7238499879837037,
      "ma60": 3.65178333123525,
      "chg1m": 0.0969998836517334,
      "chg3m": 0.1700000762939453,
      "chg1mPct": 2.6480993945743405,
      "chg3mPct": 4.735378282962482,
      "lastDate": "2026-07-28",
      "bars": 1255,
      "symbol": "^IRX",
      "label": "미국 3개월 금리",
      "unit": "%",
      "digits": 2
    },
    "oil": {
      "current": 82.19000244140625,
      "prevClose": 79.26000213623047,
      "changeAbs": 2.9300003051757812,
      "changePct": 3.6966947088138564,
      "pctRank": 69.68973747016707,
      "min5y": 55.27000045776367,
      "max5y": 123.69999694824219,
      "ma20": 78.61600074768066,
      "ma60": 85.97083333333333,
      "chg1m": 11.44000244140625,
      "chg3m": -17.73999786376953,
      "chg1mPct": 16.169614758171377,
      "chg3mPct": -17.752424506748156,
      "lastDate": "2026-07-29",
      "bars": 1257,
      "symbol": "CL=F",
      "label": "WTI 유가",
      "unit": "$",
      "digits": 1
    },
    "dollar": {
      "current": 101.33000183105469,
      "prevClose": 101.37999725341797,
      "changeAbs": -0.04999542236328125,
      "changePct": -0.049314878395891534,
      "pctRank": 42.675159235668794,
      "min5y": 91.86000061035156,
      "max5y": 114.11000061035156,
      "ma20": 101.07550048828125,
      "ma60": 100.014000193278,
      "chg1m": -0.029998779296875,
      "chg3m": 2.8499984741210938,
      "chg1mPct": -0.029596269846323704,
      "chg3mPct": 2.893986979053486,
      "lastDate": "2026-07-29",
      "bars": 1256,
      "symbol": "DX-Y.NYB",
      "label": "달러지수(DXY)",
      "unit": "",
      "digits": 1
    },
    "gold": {
      "current": 4039.10009765625,
      "prevClose": 4036.300048828125,
      "changeAbs": 2.800048828125,
      "changePct": 0.06937167193350625,
      "pctRank": 85.60063643595863,
      "min5y": 1623.300048828125,
      "max5y": 5318.39990234375,
      "ma20": 4068.9900390625,
      "ma60": 4291.089998372396,
      "chg1m": 16.800048828125,
      "chg3m": -552.39990234375,
      "chg1mPct": 0.4176726903558476,
      "chg3mPct": -12.030924585511272,
      "lastDate": "2026-07-29",
      "bars": 1257,
      "symbol": "GC=F",
      "label": "금",
      "unit": "$",
      "digits": 0
    }
  },
  "yieldSpread": 0.8440001010894775,
  "sector": {
    "groups": {
      "반도체": {
        "ret1m": -20.9458209848574,
        "ret3m": 13.259835042522061,
        "ret6m": 63.00165264518887,
        "ret1y": 207.58534541440068,
        "winRate": 71.5,
        "count": 15
      },
      "빅테크·SW": {
        "ret1m": 1.689275007542701,
        "ret3m": -7.44354233809883,
        "ret6m": -11.185657059697862,
        "ret1y": -3.3530799875806094,
        "winRate": 60.8,
        "count": 9
      }
    },
    "pair": [
      "반도체",
      "빅테크·SW"
    ],
    "corr60": 0.11496792019743002,
    "corrPctRank": 0.0,
    "corrMin5y": 0.11496792019743002,
    "corrMedian5y": 0.7115784818334243,
    "corrMax5y": 0.9346528705205663
  },
  "news": [
    {
      "headline": "The Dow jumps as the AI trade wobbles. Plus, a portfolio name goes on the M&A hunt",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/07/28/the-dow-jumps-as-the-ai-trade-wobbles-plus-a-portfolio-name-goes-on-the-ma-hunt.html",
      "datetime": 1785266115,
      "headlineKo": "다우지수는 AI 거래가 흔들리면서 급등한다. 또한 M&A 사냥에 포트폴리오 이름이 사용됩니다."
    },
    {
      "headline": "Jim Cramer: J&J talc settlement is good for a stock that has so much going for it already",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/07/28/jim-cramer-jj-talc-settlement-is-good-for-a-stock-that-has-so-much-going-for-it-already.html",
      "datetime": 1785263395,
      "headlineKo": "짐 크레이머(Jim Cramer): J&J 활석 결제는 이미 많은 가치를 지닌 주식에 적합합니다."
    },
    {
      "headline": "We're trimming a rallying stock to protect against a potential earnings letdown",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/07/28/were-trimming-a-rallying-stock-to-protect-against-a-potential-earnings-letdown-.html",
      "datetime": 1785262624,
      "headlineKo": "잠재적인 수익 감소를 방지하기 위해 상승 중인 주식을 정리하고 있습니다."
    },
    {
      "headline": "We're buying the dip on one of our stocks for two key reasons",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/07/28/were-buying-the-dip-on-one-of-our-stocks-for-two-key-reasons.html",
      "datetime": 1785260721,
      "headlineKo": "우리는 두 가지 주요 이유로 주식 중 하나의 하락세를 매수하고 있습니다."
    },
    {
      "headline": "Jim Cramer's top 10 things to watch in the stock market Tuesday",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/07/28/jim-cramers-top-10-things-to-watch-in-the-stock-market-tuesday.html",
      "datetime": 1785243430,
      "headlineKo": "Jim Cramer가 화요일 주식 시장에서 주목해야 할 10가지 항목"
    },
    {
      "headline": "Coca-Cola is about to report earnings. Here's what to expect",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/07/28/coca-cola-ko-q2-2026-earnings.html",
      "datetime": 1785234301,
      "headlineKo": "코카콜라가 수익 보고를 앞두고 있습니다. 예상되는 내용은 다음과 같습니다."
    },
    {
      "headline": "HSBC uses leverage to win $5.5 billion in India Forex deposits",
      "source": "Bloomberg",
      "url": "https://www.bloomberg.com/news/articles/2026-07-28/hsbc-uses-leverage-to-win-5-5-billion-in-india-forex-deposits",
      "datetime": 1785210898,
      "headlineKo": "HSBC는 레버리지를 사용해 인도 외환 예금에서 55억 달러를 확보했습니다."
    },
    {
      "headline": "Anthropic’s Dario Amodei rejects open model ban but calls for testing",
      "source": "Bloomberg",
      "url": "https://www.bloomberg.com/news/articles/2026-07-28/anthropic-s-amodei-rejects-open-model-ban-but-calls-for-testing",
      "datetime": 1785208732,
      "headlineKo": "Anthropic의 Dario Amodei는 공개 모델 금지를 거부하지만 테스트를 요구합니다."
    },
    {
      "headline": "Apple ends day as world's most valuable company, passing Nvidia",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/07/27/apple-most-valuable-company-nvidia.html",
      "datetime": 1785186746,
      "headlineKo": "애플, 엔비디아 제치고 세계 시가총액 1위 기업으로 마감"
    },
    {
      "headline": "Nvidia's potential $250B backstop for OpenAI is another strike against the AI trade",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/07/27/nvidias-potential-250b-backstop-for-openai-is-another-strike-against-the-ai-trade.html",
      "datetime": 1785181580,
      "headlineKo": "OpenAI를 위한 Nvidia의 잠재적인 2,500억 달러 백스톱은 AI 거래에 대한 또 다른 공격입니다."
    },
    {
      "headline": "From 'oil' to 'shock',  here's what Kalshi traders expect Fed Chair Kevin Warsh will say this week",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/07/27/from-oil-to-shock-heres-what-kalshi-traders-expect-warsh-to-say.html",
      "datetime": 1785178703,
      "headlineKo": "'석유'에서 '충격'까지, Kalshi 거래자들이 이번 주에 Fed 의장 Kevin Warsh가 말할 것으로 기대하는 내용은 다음과 같습니다."
    },
    {
      "headline": "More tech pain means gains elsewhere. What's winning in Monday's mixed market",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/07/27/more-tech-pain-means-gains-elsewhere-what-is-winning-in-the-mixed-market.html",
      "datetime": 1785177609,
      "headlineKo": "더 많은 기술적 고통은 다른 곳에서 이익을 얻는 것을 의미합니다. 월요일 혼합 시장에서 승리하는 것은 무엇입니까?"
    }
  ],
  "_fetched_at": 1785307036.2288291,
  "_updated_label": "2026-07-29 15:37"
};
