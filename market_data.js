// 자동 생성 파일 - buy_signal_telegram.py 실행 시마다 갱신됨. 직접 수정하지 마세요.
// 시장 환경 지표(야후) + 시장 헤드라인(Finnhub). 이 파일이 없어도 대시보드는 정상 동작함.
const MARKET_DATA = {
  "indicators": {
    "vix": {
      "current": 18.950000762939453,
      "prevClose": 18.670000076293945,
      "changeAbs": 0.2800006866455078,
      "changePct": 1.4997358623529735,
      "pctRank": 58.51910828025477,
      "min5y": 11.859999656677246,
      "max5y": 52.33000183105469,
      "ma20": 17.0364999294281,
      "ma60": 17.440666659673056,
      "chg1m": 0.5400009155273438,
      "chg3m": 1.1200008392333984,
      "chg1mPct": 2.9331934818198904,
      "chg3mPct": 6.281552686628395,
      "lastDate": "2026-07-28",
      "bars": 1256,
      "symbol": "^VIX",
      "label": "VIX (공포지수)",
      "unit": "",
      "digits": 2
    },
    "us10y": {
      "current": 4.640999794006348,
      "prevClose": 4.678999900817871,
      "changeAbs": -0.03800010681152344,
      "changePct": -0.8121416460145932,
      "pctRank": 96.81274900398407,
      "min5y": 1.1740000247955322,
      "max5y": 4.98799991607666,
      "ma20": 4.55959997177124,
      "ma60": 4.503616635004679,
      "chg1m": 0.24899959564208984,
      "chg3m": 0.33099985122680664,
      "chg1mPct": 5.669389444354453,
      "chg3mPct": 7.679811035295354,
      "lastDate": "2026-07-27",
      "bars": 1255,
      "symbol": "^TNX",
      "label": "미국 10년물 금리",
      "unit": "%",
      "digits": 2
    },
    "us3m": {
      "current": 3.796999931335449,
      "prevClose": 3.805000066757202,
      "changeAbs": -0.00800013542175293,
      "changePct": -0.21025322684346276,
      "pctRank": 39.68127490039841,
      "min5y": 0.019999999552965164,
      "max5y": 5.3480000495910645,
      "ma20": 3.7198499917984007,
      "ma60": 3.648866665363312,
      "chg1m": 0.11699986457824707,
      "chg3m": 0.20399999618530273,
      "chg1mPct": 3.1793440884729867,
      "chg3mPct": 5.677706648129339,
      "lastDate": "2026-07-27",
      "bars": 1255,
      "symbol": "^IRX",
      "label": "미국 3개월 금리",
      "unit": "%",
      "digits": 2
    },
    "oil": {
      "current": 81.79000091552734,
      "prevClose": 82.61000061035156,
      "changeAbs": -0.8199996948242188,
      "changePct": -0.9926155293133694,
      "pctRank": 68.73508353221956,
      "min5y": 55.27000045776367,
      "max5y": 123.69999694824219,
      "ma20": 78.10800056457519,
      "ma60": 86.34216664632162,
      "chg1m": 12.55999755859375,
      "chg3m": -14.580001831054688,
      "chg1mPct": 18.142419398475774,
      "chg3mPct": -15.129191050657928,
      "lastDate": "2026-07-28",
      "bars": 1257,
      "symbol": "CL=F",
      "label": "WTI 유가",
      "unit": "$",
      "digits": 1
    },
    "dollar": {
      "current": 101.59100341796875,
      "prevClose": 101.47000122070312,
      "changeAbs": 0.121002197265625,
      "changePct": 0.11924923209810376,
      "pctRank": 44.824840764331206,
      "min5y": 91.86000061035156,
      "max5y": 114.11000061035156,
      "ma20": 101.07505073547364,
      "ma60": 99.96335029602051,
      "chg1m": 0.16100311279296875,
      "chg3m": 3.0810012817382812,
      "chg1mPct": 0.15873322716016305,
      "chg3mPct": 3.1276024920571355,
      "lastDate": "2026-07-28",
      "bars": 1256,
      "symbol": "DX-Y.NYB",
      "label": "달러지수(DXY)",
      "unit": "",
      "digits": 1
    },
    "gold": {
      "current": 4024.5,
      "prevClose": 4074.5,
      "changeAbs": -50.0,
      "changePct": -1.2271444348999876,
      "pctRank": 85.52108194112968,
      "min5y": 1623.300048828125,
      "max5y": 5318.39990234375,
      "ma20": 4067.5900268554688,
      "ma60": 4300.739994303385,
      "chg1m": -54.199951171875,
      "chg3m": -650.89990234375,
      "chg1mPct": -1.3288536009201288,
      "chg3mPct": -13.921801684118137,
      "lastDate": "2026-07-28",
      "bars": 1257,
      "symbol": "GC=F",
      "label": "금",
      "unit": "$",
      "digits": 0
    }
  },
  "yieldSpread": 0.8439998626708984,
  "news": [
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
    },
    {
      "headline": "Gold climbs as pause in West Asia crisis curbs inflation risk",
      "source": "Bloomberg",
      "url": "https://www.bloomberg.com/news/articles/2026-07-26/gold-climbs-after-pause-in-mideast-fighting-cuts-inflation-fears",
      "datetime": 1785146101,
      "headlineKo": "서아시아 위기로 인한 인플레이션 위험 억제로 금값 상승"
    },
    {
      "headline": "El Niño may push global warming to 2C or higher in the short term",
      "source": "Bloomberg",
      "url": "https://www.bloomberg.com/news/articles/2026-07-27/global-warming-may-briefly-reach-2c-as-el-nino-roils-weather",
      "datetime": 1785142501,
      "headlineKo": "엘니뇨로 인해 단기적으로 지구 온난화가 2C 이상으로 높아질 수 있습니다"
    }
  ],
  "_fetched_at": 1785240147.8162622,
  "_updated_label": "2026-07-28 21:02"
};
