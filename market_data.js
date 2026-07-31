// 자동 생성 파일 - buy_signal_telegram.py 실행 시마다 갱신됨. 직접 수정하지 마세요.
// 시장 환경 지표(야후) + 시장 헤드라인(Finnhub). 이 파일이 없어도 대시보드는 정상 동작함.
const MARKET_DATA = {
  "indicators": {
    "vix": {
      "current": 15.949999809265137,
      "prevClose": 17.09000015258789,
      "changeAbs": -1.140000343322754,
      "changePct": -6.670569532734187,
      "pctRank": 28.742038216560513,
      "min5y": 11.859999656677246,
      "max5y": 52.33000183105469,
      "ma20": 17.224999809265135,
      "ma60": 17.438999970753986,
      "chg1m": -0.6400003433227539,
      "chg3m": -1.0399999618530273,
      "chg1mPct": -3.8577476638715984,
      "chg3mPct": -6.121247650756041,
      "lastDate": "2026-07-31",
      "bars": 1256,
      "symbol": "^VIX",
      "label": "VIX (공포지수)",
      "unit": "",
      "digits": 2
    },
    "us10y": {
      "current": 4.744999885559082,
      "prevClose": 4.663000106811523,
      "changeAbs": 0.0819997787475586,
      "changePct": 1.7585197698746908,
      "pctRank": 98.48605577689243,
      "min5y": 1.1740000247955322,
      "max5y": 4.98799991607666,
      "ma20": 4.603699970245361,
      "ma60": 4.520349979400635,
      "chg1m": 0.26999998092651367,
      "chg3m": 0.35500001907348633,
      "chg1mPct": 6.0335192554307495,
      "chg3mPct": 8.086561044879502,
      "lastDate": "2026-07-31",
      "bars": 1255,
      "symbol": "^TNX",
      "label": "미국 10년물 금리",
      "unit": "%",
      "digits": 2
    },
    "us3m": {
      "current": 3.681999921798706,
      "prevClose": 3.674999952316284,
      "changeAbs": 0.006999969482421875,
      "changePct": 0.1904753625373498,
      "pctRank": 35.776892430278885,
      "min5y": 0.019999999552965164,
      "max5y": 5.3480000495910645,
      "ma20": 3.719599974155426,
      "ma60": 3.6559499979019163,
      "chg1m": -0.018000125885009766,
      "chg3m": 0.0969998836517334,
      "chg1mPct": -0.48648988251441383,
      "chg3mPct": 2.7057149963622047,
      "lastDate": "2026-07-31",
      "bars": 1255,
      "symbol": "^IRX",
      "label": "미국 3개월 금리",
      "unit": "%",
      "digits": 2
    },
    "oil": {
      "current": 84.77999877929688,
      "prevClose": 83.58999633789062,
      "changeAbs": 1.19000244140625,
      "changePct": 1.4236182480448705,
      "pctRank": 75.17899761336515,
      "min5y": 55.27000045776367,
      "max5y": 123.69999694824219,
      "ma20": 80.28450012207031,
      "ma60": 85.33666661580403,
      "chg1m": 16.199996948242188,
      "chg3m": -20.290000915527344,
      "chg1mPct": 23.622042163472845,
      "chg3mPct": -19.310936494203528,
      "lastDate": "2026-07-31",
      "bars": 1257,
      "symbol": "CL=F",
      "label": "WTI 유가",
      "unit": "$",
      "digits": 1
    },
    "dollar": {
      "current": 99.89900207519531,
      "prevClose": 100.01000213623047,
      "changeAbs": -0.11100006103515625,
      "changePct": -0.11098895976819946,
      "pctRank": 35.16308671439936,
      "min5y": 92.04000091552734,
      "max5y": 114.11000061035156,
      "ma20": 100.94795074462891,
      "ma60": 100.10948359171549,
      "chg1m": -1.490997314453125,
      "chg3m": 1.819000244140625,
      "chg1mPct": -1.4705565868711807,
      "chg3mPct": 1.8546086971673383,
      "lastDate": "2026-07-31",
      "bars": 1257,
      "symbol": "DX-Y.NYB",
      "label": "달러지수(DXY)",
      "unit": "",
      "digits": 1
    },
    "gold": {
      "current": 4108.39990234375,
      "prevClose": 4100.10009765625,
      "changeAbs": 8.2998046875,
      "changePct": 0.2024293185486968,
      "pctRank": 87.43038981702466,
      "min5y": 1623.300048828125,
      "max5y": 5318.39990234375,
      "ma20": 4070.14501953125,
      "ma60": 4276.5699991861975,
      "chg1m": 40.099853515625,
      "chg3m": -506.30029296875,
      "chg1mPct": 0.9856660775838246,
      "chg3mPct": -10.971466650922144,
      "lastDate": "2026-07-31",
      "bars": 1257,
      "symbol": "GC=F",
      "label": "금",
      "unit": "$",
      "digits": 0
    }
  },
  "yieldSpread": 1.062999963760376,
  "sector": {
    "groups": {
      "빅테크·SW": {
        "ret1m": 0.22850658205444407,
        "ret3m": -2.269233626752054,
        "ret6m": -5.180338700964427,
        "ret1y": 0.9318781706894042,
        "winRate": 60.8,
        "count": 9
      },
      "반도체": {
        "ret1m": -18.902853259399464,
        "ret3m": 15.523955425840175,
        "ret6m": 59.97251711389033,
        "ret1y": 210.82042845575714,
        "winRate": 71.5,
        "count": 15
      }
    },
    "pair": [
      "빅테크·SW",
      "반도체"
    ],
    "corr60": 0.14835874750961076,
    "corrPctRank": 0.502092050209205,
    "corrMin5y": 0.11496792019743002,
    "corrMedian5y": 0.7115782038222396,
    "corrMax5y": 0.9346528705205663
  },
  "news": [
    {
      "headline": "Andy Jassy soothed concerns over Amazon's massive AI spending. Here's how he did it",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/07/31/andy-jassy-soothed-concerns-over-amazons-massive-ai-spending-heres-how-he-did-it-.html",
      "datetime": 1785522860,
      "headlineKo": "Andy Jassy는 Amazon의 대규모 AI 지출에 대한 우려를 진정시켰습니다. 그가 한 방법은 다음과 같습니다."
    },
    {
      "headline": "Fintech broker Clear Street offers investors pre-IPO access to $188 billion AI giant Databricks",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/07/31/clear-street-pre-ipo-platform-databricks.html",
      "datetime": 1785522001,
      "headlineKo": "핀테크 브로커 Clear Street는 투자자들에게 1,880억 달러 규모의 거대 AI Databricks에 대한 사전 IPO 액세스를 제공합니다."
    },
    {
      "headline": "The S&P 500 is stuck at a key battleground level. This obscure index could determine the market’s next move",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/07/31/the-sp-500-is-stuck-this-obscure-index-could-determine-the-markets-next-move.html",
      "datetime": 1785521256,
      "headlineKo": "S&P 500은 주요 격전지 수준에 머물러 있습니다. 이 모호한 지수는 시장의 다음 움직임을 결정할 수 있습니다"
    },
    {
      "headline": "‘Spider-Man: Brand New Day’ sets domestic box office preview record with $72 million",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/07/31/spider-man-brand-new-day-box-office-preview-sales.html",
      "datetime": 1785520005,
      "headlineKo": "'스파이더맨: 브랜 뉴 데이', 7200만 달러로 국내 박스오피스 미리보기 최고 기록 경신"
    },
    {
      "headline": "Jim Cramer: Buy this industrial stock on the dip if you don't own it already",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/07/31/jim-cramer-buy-this-industrial-stock-on-the-dip-if-you-dont-own-it-already.html",
      "datetime": 1785514860,
      "headlineKo": "짐 크레이머: 산업 주식을 아직 보유하고 있지 않다면 하락장에서 매수하세요"
    },
    {
      "headline": "FIFA tests the limits of private equity in sports with World Cup subsidiary sale",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/07/31/fifa-world-cup-private-equity-sports.html",
      "datetime": 1785513611,
      "headlineKo": "FIFA, 월드컵 자회사 매각으로 스포츠 사모펀드 한계 시험"
    },
    {
      "headline": "Microsoft shares are surging. Here’s how to still make money, says Mike Khouw",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/07/31/microsoft-shares-are-surging-heres-how-to-still-make-money-says-mike-khouw.html",
      "datetime": 1785511591,
      "headlineKo": "마이크로소프트 주가가 급등하고 있다. Mike Khouw는 다음과 같이 돈을 버는 방법을 소개합니다."
    },
    {
      "headline": "GM to launch new in-vehicle AI system later this year",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/07/31/gm-in-vehicle-ai-system.html",
      "datetime": 1785504052,
      "headlineKo": "GM, 올해 말 새로운 차량 내 AI 시스템 출시 예정"
    },
    {
      "headline": "Jim Cramer's top 10 things to watch in the stock market Friday",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/07/31/jim-cramers-top-10-things-to-watch-in-the-stock-market-friday-.html",
      "datetime": 1785503694,
      "headlineKo": "Jim Cramer가 금요일 주식 시장에서 주목해야 할 10가지 항목"
    },
    {
      "headline": "34-year-old CEO bet on AI video 5 years before ChatGPT—convincing Mark Cuban to invest was the easy part",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/07/31/ceo-bet-on-ai-video-years-before-chatgptnow-his-startup-is-worth-billions.html",
      "datetime": 1785503101,
      "headlineKo": "34세 CEO는 ChatGPT보다 5년 전에 AI 비디오에 베팅했습니다. Mark Cuban이 투자하도록 설득하는 것은 쉬운 부분이었습니다."
    },
    {
      "headline": "New York sues Kalshi, says prediction market is running 'illegal gambling operation'",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/07/31/new-york-sues-kalshi-claims-it-is-illegal-gambling-operation.html",
      "datetime": 1785501694,
      "headlineKo": "뉴욕, 칼시 고소, 예측 시장이 '불법 도박 운영' 운영하고 있다고 주장"
    },
    {
      "headline": "The Tech Download: Anduril CEO Brian Schimpf talks AI in warfare and manufacturing push",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/07/31/the-tech-download-anduril-ceo-brian-schimpf.html",
      "datetime": 1785496289,
      "headlineKo": "기술 다운로드: Anduril CEO Brian Schimpf가 전쟁 및 제조 부문에서 AI에 대해 이야기합니다."
    }
  ],
  "_fetched_at": 1785528113.905442,
  "_updated_label": "2026-08-01 05:02"
};
