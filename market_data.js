// 자동 생성 파일 - buy_signal_telegram.py 실행 시마다 갱신됨. 직접 수정하지 마세요.
// 시장 환경 지표(야후) + 시장 헤드라인(Finnhub). 이 파일이 없어도 대시보드는 정상 동작함.
const MARKET_DATA = {
  "indicators": {
    "vix": {
      "current": 18.670000076293945,
      "prevClose": 18.579999923706055,
      "changeAbs": 0.09000015258789062,
      "changePct": 0.48439264239748586,
      "pctRank": 56.13057324840764,
      "min5y": 11.859999656677246,
      "max5y": 52.33000183105469,
      "ma20": 16.97149987220764,
      "ma60": 17.407999976476034,
      "chg1m": -0.2199993133544922,
      "chg3m": 0.6499996185302734,
      "chg1mPct": -1.1646337769341062,
      "chg3mPct": 3.607101010090318,
      "lastDate": "2026-07-27",
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
      "current": 3.7970001697540283,
      "prevClose": 3.805000066757202,
      "changeAbs": -0.007999897003173828,
      "changePct": -0.2102469609150812,
      "pctRank": 39.68127490039841,
      "min5y": 0.019999999552965164,
      "max5y": 5.3480000495910645,
      "ma20": 3.71985000371933,
      "ma60": 3.6488666693369547,
      "chg1m": 0.11700010299682617,
      "chg3m": 0.20400023460388184,
      "chg1mPct": 3.1793505672386058,
      "chg3mPct": 5.677713283770403,
      "lastDate": "2026-07-27",
      "bars": 1255,
      "symbol": "^IRX",
      "label": "미국 3개월 금리",
      "unit": "%",
      "digits": 2
    },
    "oil": {
      "current": 81.94999694824219,
      "prevClose": 89.30999755859375,
      "changeAbs": -7.3600006103515625,
      "changePct": -8.240959367984392,
      "pctRank": 69.29196499602227,
      "min5y": 55.27000045776367,
      "max5y": 123.69999694824219,
      "ma20": 77.52300033569335,
      "ma60": 86.7191665649414,
      "chg1m": 10.029998779296875,
      "chg3m": -12.450004577636719,
      "chg1mPct": 13.9460498257184,
      "chg3mPct": -13.188563958045766,
      "lastDate": "2026-07-28",
      "bars": 1257,
      "symbol": "CL=F",
      "label": "WTI 유가",
      "unit": "$",
      "digits": 1
    },
    "dollar": {
      "current": 101.50199890136719,
      "prevClose": 101.47000122070312,
      "changeAbs": 0.0319976806640625,
      "changePct": 0.031534128588868046,
      "pctRank": 44.55051710421639,
      "min5y": 91.86000061035156,
      "max5y": 114.11000061035156,
      "ma20": 101.07060050964355,
      "ma60": 99.96186688741048,
      "chg1m": 0.07199859619140625,
      "chg3m": 2.9919967651367188,
      "chg1mPct": 0.07098353147469359,
      "chg3mPct": 3.0372517513491233,
      "lastDate": "2026-07-28",
      "bars": 1257,
      "symbol": "DX-Y.NYB",
      "label": "달러지수(DXY)",
      "unit": "",
      "digits": 1
    },
    "gold": {
      "current": 4059.89990234375,
      "prevClose": 4067.60009765625,
      "changeAbs": -7.7001953125,
      "changePct": -0.18930561332557866,
      "pctRank": 86.07796340493238,
      "min5y": 1623.300048828125,
      "max5y": 5318.39990234375,
      "ma20": 4066.7500244140624,
      "ma60": 4310.333329264323,
      "chg1m": 29.39990234375,
      "chg3m": -662.39990234375,
      "chg1mPct": 0.7294356120518546,
      "chg3mPct": -14.02706159584005,
      "lastDate": "2026-07-28",
      "bars": 1257,
      "symbol": "GC=F",
      "label": "금",
      "unit": "$",
      "digits": 0
    }
  },
  "yieldSpread": 0.8439996242523193,
  "news": [
    {
      "headline": "Apple ends day as world's most valuable company, passing Nvidia",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/07/27/apple-most-valuable-company-nvidia.html",
      "datetime": 1785186746
    },
    {
      "headline": "Nvidia's potential $250B backstop for OpenAI is another strike against the AI trade",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/07/27/nvidias-potential-250b-backstop-for-openai-is-another-strike-against-the-ai-trade.html",
      "datetime": 1785181580
    },
    {
      "headline": "From 'oil' to 'shock',  here's what Kalshi traders expect Fed Chair Kevin Warsh will say this week",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/07/27/from-oil-to-shock-heres-what-kalshi-traders-expect-warsh-to-say.html",
      "datetime": 1785178703
    },
    {
      "headline": "More tech pain means gains elsewhere. What's winning in Monday's mixed market",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/07/27/more-tech-pain-means-gains-elsewhere-what-is-winning-in-the-mixed-market.html",
      "datetime": 1785177609
    },
    {
      "headline": "JetBlue overhauls fare options, from basic first to flexible economy. Here's what to know",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/07/27/jetblue-new-fare-options-basic-economy-first-class.html",
      "datetime": 1785171601
    },
    {
      "headline": "Why Boeing and Corning are moving in opposite directions and what to expect next",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/07/27/why-boeing-corning-are-moving-in-opposite-directions-and-whats-next.html",
      "datetime": 1785168549
    },
    {
      "headline": "Sam Altman to meet with Trump administration, Senators this week. Here's what he plans to say",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/07/27/altman-trump-china-open-weight-ai.html",
      "datetime": 1785162108
    },
    {
      "headline": "We're buying more of a slumping industrial stock and a hard-hit chipmaker",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/07/27/were-buying-more-of-a-slumping-industrial-stock-and-a-hard-hit-chipmaker.html",
      "datetime": 1785156823
    },
    {
      "headline": "Jim Cramer's top 10 things to watch in the stock market Monday",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/07/27/jim-cramers-top-10-things-to-watch-in-the-stock-market-monday.html",
      "datetime": 1785156765
    },
    {
      "headline": "Crude oil futures are pricing market adaptability, not hopeful Iran peace - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMi2AFBVV95cUxNNGE1c0g5ZHQxVW9KaV81YjdLV3FXRFo2dnp4S1FaeWZjbTdHbjhMOXVxRDdNVmRIenhzTWdYeU5WQWVqOWVURmxGTXJEVm5mVkN3MkdzSERyM2tHUkt5QWhkNWxkY2tzSXc3OGVtUmVzYXlPSE1vQ29Sak5vN1dDQnJicUZSZlVVSlN5ZkZhUXAxbHhDeWwtQmJxanEwam1FRlVLY2d6OFd6ejVuQUVDaWw5cEJkbHo4cDJ2TG04LU1kSm1aVVNMZE02ZmxwMGZENjZvaEZpUG4?oc=5",
      "datetime": 1785137941
    },
    {
      "headline": "Morning Bid: Markets dare to hope as US, Iran put war on hold - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE5OaG9CanBKS3oxSTNMTm9XRGJtYmxrLVV3cFVXSnRBTk84NG5YWHNVaGJjMnE5Y0JLLUlSYTN1VnF3VmRlRlFlN1lYX2p3U1ppY2tqV1ZGLUdYT0hVckJ1U3Jna1g4N2ZHQkNwZ0J3OEpwNmc1Zmc0SjBVOWlneFk?oc=5",
      "datetime": 1785126720
    },
    {
      "headline": "Indian rupee heads for steepest rise in three weeks as oil falls - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxPVzNLbGNOWndmZ1lxc2MzcUtBY08walVteW9YS0UxeEhxazA3Mk9NWndFa3U1NzRULUI4SThDdGtMSEhmWmpUeXhrd3A2UGw2UGE3M2FhY296SEoxMnowblVGT1NSZ1BpU05jd2ZnSDhnZDc3amxPd2c0QzhJZnJhejVSbXRDS2ZoTnFVZHZWRnhRSlFYYmVCN3k2MUFTMG1ZTC1mTDZ4c0dzM2JDSjNZSmUzYnhmN0lfd0w0?oc=5",
      "datetime": 1785120900
    }
  ],
  "_fetched_at": 1785200379.022589,
  "_updated_label": "2026-07-28 09:59"
};
