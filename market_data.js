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
      "current": 3.7599997520446777,
      "prevClose": 3.796999931335449,
      "changeAbs": -0.037000179290771484,
      "changePct": -0.9744582554616505,
      "pctRank": 38.24701195219124,
      "min5y": 0.019999999552965164,
      "max5y": 5.3480000495910645,
      "ma20": 3.7238499760627746,
      "ma60": 3.6517833272616067,
      "chg1m": 0.0969996452331543,
      "chg3m": 0.1699998378753662,
      "chg1mPct": 2.648092885740812,
      "chg3mPct": 4.7353716417762755,
      "lastDate": "2026-07-28",
      "bars": 1255,
      "symbol": "^IRX",
      "label": "미국 3개월 금리",
      "unit": "%",
      "digits": 2
    },
    "oil": {
      "current": 79.20999908447266,
      "prevClose": 82.61000061035156,
      "changeAbs": -3.4000015258789062,
      "changePct": -4.115726305239688,
      "pctRank": 60.62052505966587,
      "min5y": 55.27000045776367,
      "max5y": 123.69999694824219,
      "ma20": 77.97900047302247,
      "ma60": 86.29916661580404,
      "chg1m": 9.979995727539062,
      "chg3m": -17.160003662109375,
      "chg1mPct": 14.41570885976208,
      "chg3mPct": -17.806374569931194,
      "lastDate": "2026-07-28",
      "bars": 1257,
      "symbol": "CL=F",
      "label": "WTI 유가",
      "unit": "$",
      "digits": 1
    },
    "dollar": {
      "current": 101.41100311279297,
      "prevClose": 101.47000122070312,
      "changeAbs": -0.05899810791015625,
      "changePct": -0.05814339923169208,
      "pctRank": 43.789808917197455,
      "min5y": 91.86000061035156,
      "max5y": 114.11000061035156,
      "ma20": 101.06605072021485,
      "ma60": 99.96035029093424,
      "chg1m": -0.0189971923828125,
      "chg3m": 2.9010009765625,
      "chg1mPct": -0.01872936244272407,
      "chg3mPct": 2.9448796199909495,
      "lastDate": "2026-07-28",
      "bars": 1256,
      "symbol": "DX-Y.NYB",
      "label": "달러지수(DXY)",
      "unit": "",
      "digits": 1
    },
    "gold": {
      "current": 4023.300048828125,
      "prevClose": 4074.5,
      "changeAbs": -51.199951171875,
      "changePct": -1.2565947029543503,
      "pctRank": 85.52108194112968,
      "min5y": 1623.300048828125,
      "max5y": 5318.39990234375,
      "ma20": 4067.530029296875,
      "ma60": 4300.719995117188,
      "chg1m": -55.39990234375,
      "chg3m": -652.099853515625,
      "chg1mPct": -1.3582735432115502,
      "chg3mPct": -13.947466893446512,
      "lastDate": "2026-07-28",
      "bars": 1257,
      "symbol": "GC=F",
      "label": "금",
      "unit": "$",
      "digits": 0
    }
  },
  "yieldSpread": 0.8440003395080566,
  "news": [
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
    },
    {
      "headline": "JetBlue overhauls fare options, from basic first to flexible economy. Here's what to know",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/07/27/jetblue-new-fare-options-basic-economy-first-class.html",
      "datetime": 1785171601,
      "headlineKo": "JetBlue는 기본 우선부터 유연한 경제까지 요금 옵션을 점검합니다. 알아야 할 사항은 다음과 같습니다."
    },
    {
      "headline": "Why Boeing and Corning are moving in opposite directions and what to expect next",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/07/27/why-boeing-corning-are-moving-in-opposite-directions-and-whats-next.html",
      "datetime": 1785168549,
      "headlineKo": "보잉과 코닝이 반대 방향으로 움직이는 이유와 향후 예상"
    },
    {
      "headline": "Sam Altman to meet with Trump administration, Senators this week. Here's what he plans to say",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/07/27/altman-trump-china-open-weight-ai.html",
      "datetime": 1785162108,
      "headlineKo": "이번주 샘 알트먼이 트럼프 행정부와 상원의원들을 만날 예정이다. 그가 말하려는 내용은 다음과 같습니다"
    },
    {
      "headline": "We're buying more of a slumping industrial stock and a hard-hit chipmaker",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/07/27/were-buying-more-of-a-slumping-industrial-stock-and-a-hard-hit-chipmaker.html",
      "datetime": 1785156823,
      "headlineKo": "우리는 침체된 산업주와 큰 타격을 입은 칩 제조업체를 더 많이 매입하고 있습니다."
    },
    {
      "headline": "Jim Cramer's top 10 things to watch in the stock market Monday",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/07/27/jim-cramers-top-10-things-to-watch-in-the-stock-market-monday.html",
      "datetime": 1785156765,
      "headlineKo": "짐 크레이머(Jim Cramer)가 월요일 주식 시장에서 주목해야 할 10가지 항목"
    }
  ],
  "_fetched_at": 1785265337.5560973,
  "_updated_label": "2026-07-29 04:02"
};
