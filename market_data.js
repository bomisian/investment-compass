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
      "current": 81.66000366210938,
      "prevClose": 89.30999755859375,
      "changeAbs": -7.649993896484375,
      "changePct": -8.565663537797581,
      "pctRank": 68.65552903739062,
      "min5y": 55.27000045776367,
      "max5y": 123.69999694824219,
      "ma20": 77.50850067138671,
      "ma60": 86.71433334350586,
      "chg1m": 9.740005493164062,
      "chg3m": -12.739997863769531,
      "chg1mPct": 13.542833344189026,
      "chg3mPct": -13.495760230763318,
      "lastDate": "2026-07-28",
      "bars": 1257,
      "symbol": "CL=F",
      "label": "WTI 유가",
      "unit": "$",
      "digits": 1
    },
    "dollar": {
      "current": 101.4800033569336,
      "prevClose": 101.47000122070312,
      "changeAbs": 0.01000213623046875,
      "changePct": 0.009857234759181214,
      "pctRank": 44.31185361972951,
      "min5y": 91.86000061035156,
      "max5y": 114.11000061035156,
      "ma20": 101.06950073242187,
      "ma60": 99.96150029500326,
      "chg1m": 0.0500030517578125,
      "chg3m": 2.970001220703125,
      "chg1mPct": 0.049298088935587764,
      "chg3mPct": 3.014923516696183,
      "lastDate": "2026-07-28",
      "bars": 1257,
      "symbol": "DX-Y.NYB",
      "label": "달러지수(DXY)",
      "unit": "",
      "digits": 1
    },
    "gold": {
      "current": 4050.5,
      "prevClose": 4067.60009765625,
      "changeAbs": -17.10009765625,
      "changePct": -0.4203977098462327,
      "pctRank": 85.99840891010342,
      "min5y": 1623.300048828125,
      "max5y": 5318.39990234375,
      "ma20": 4066.280029296875,
      "ma60": 4310.1766642252605,
      "chg1m": 20.0,
      "chg3m": -671.7998046875,
      "chg1mPct": 0.4962163503287433,
      "chg3mPct": -14.226115081059676,
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
      "headline": "Crude oil futures are pricing market adaptability, not hopeful Iran peace - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMi2AFBVV95cUxNNGE1c0g5ZHQxVW9KaV81YjdLV3FXRFo2dnp4S1FaeWZjbTdHbjhMOXVxRDdNVmRIenhzTWdYeU5WQWVqOWVURmxGTXJEVm5mVkN3MkdzSERyM2tHUkt5QWhkNWxkY2tzSXc3OGVtUmVzYXlPSE1vQ29Sak5vN1dDQnJicUZSZlVVSlN5ZkZhUXAxbHhDeWwtQmJxanEwam1FRlVLY2d6OFd6ejVuQUVDaWw5cEJkbHo4cDJ2TG04LU1kSm1aVVNMZE02ZmxwMGZENjZvaEZpUG4?oc=5",
      "datetime": 1785137941,
      "headlineKo": "원유 선물은 이란 평화에 대한 희망이 아니라 시장 적응성을 평가합니다 - Reuters"
    },
    {
      "headline": "Morning Bid: Markets dare to hope as US, Iran put war on hold - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE5OaG9CanBKS3oxSTNMTm9XRGJtYmxrLVV3cFVXSnRBTk84NG5YWHNVaGJjMnE5Y0JLLUlSYTN1VnF3VmRlRlFlN1lYX2p3U1ppY2tqV1ZGLUdYT0hVckJ1U3Jna1g4N2ZHQkNwZ0J3OEpwNmc1Zmc0SjBVOWlneFk?oc=5",
      "datetime": 1785126720,
      "headlineKo": "오전 입찰: 미국과 이란이 전쟁을 보류함에 따라 시장은 감히 희망을 품고 있습니다 - Reuters"
    },
    {
      "headline": "Indian rupee heads for steepest rise in three weeks as oil falls - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxPVzNLbGNOWndmZ1lxc2MzcUtBY08walVteW9YS0UxeEhxazA3Mk9NWndFa3U1NzRULUI4SThDdGtMSEhmWmpUeXhrd3A2UGw2UGE3M2FhY296SEoxMnowblVGT1NSZ1BpU05jd2ZnSDhnZDc3amxPd2c0QzhJZnJhejVSbXRDS2ZoTnFVZHZWRnhRSlFYYmVCN3k2MUFTMG1ZTC1mTDZ4c0dzM2JDSjNZSmUzYnhmN0lfd0w0?oc=5",
      "datetime": 1785120900,
      "headlineKo": "유가 하락으로 인도 루피가 3주 만에 가장 가파른 상승세로 향하다 - Reuters"
    }
  ],
  "_fetched_at": 1785203024.6731298,
  "_updated_label": "2026-07-28 10:43"
};
