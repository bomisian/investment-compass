// 자동 생성 파일 - buy_signal_telegram.py 실행 시마다 갱신됨. 직접 수정하지 마세요.
// 시장 환경 지표(야후) + 시장 헤드라인(Finnhub). 이 파일이 없어도 대시보드는 정상 동작함.
const MARKET_DATA = {
  "indicators": {
    "vix": {
      "current": 16.489999771118164,
      "prevClose": 17.09000015258789,
      "changeAbs": -0.6000003814697266,
      "changePct": -3.510827244661377,
      "pctRank": 35.42993630573248,
      "min5y": 11.859999656677246,
      "max5y": 52.33000183105469,
      "ma20": 17.251999807357787,
      "ma60": 17.447999970118204,
      "chg1m": -0.10000038146972656,
      "chg3m": -0.5,
      "chg1mPct": -0.6027750485229948,
      "chg3mPct": -2.9429076323471515,
      "lastDate": "2026-07-31",
      "bars": 1256,
      "symbol": "^VIX",
      "label": "VIX (공포지수)",
      "unit": "",
      "digits": 2
    },
    "us10y": {
      "current": 4.741000175476074,
      "prevClose": 4.663000106811523,
      "changeAbs": 0.07800006866455078,
      "changePct": 1.6727443036214262,
      "pctRank": 98.48605577689243,
      "min5y": 1.1740000247955322,
      "max5y": 4.98799991607666,
      "ma20": 4.603499984741211,
      "ma60": 4.520283317565918,
      "chg1m": 0.26600027084350586,
      "chg3m": 0.3510003089904785,
      "chg1mPct": 5.944140257257648,
      "chg3mPct": 7.995451473019542,
      "lastDate": "2026-07-31",
      "bars": 1255,
      "symbol": "^TNX",
      "label": "미국 10년물 금리",
      "unit": "%",
      "digits": 2
    },
    "us3m": {
      "current": 3.684999942779541,
      "prevClose": 3.674999952316284,
      "changeAbs": 0.009999990463256836,
      "changePct": 0.2721085875648523,
      "pctRank": 35.85657370517929,
      "min5y": 0.019999999552965164,
      "max5y": 5.3480000495910645,
      "ma20": 3.7197499752044676,
      "ma60": 3.655999998251597,
      "chg1m": -0.015000104904174805,
      "chg3m": 0.09999990463256836,
      "chg1mPct": -0.4054082354286782,
      "chg3mPct": 2.7893975890794316,
      "lastDate": "2026-07-31",
      "bars": 1255,
      "symbol": "^IRX",
      "label": "미국 3개월 금리",
      "unit": "%",
      "digits": 2
    },
    "oil": {
      "current": 84.62999725341797,
      "prevClose": 83.58999633789062,
      "changeAbs": 1.0400009155273438,
      "changePct": 1.2441691124418919,
      "pctRank": 75.0994431185362,
      "min5y": 55.27000045776367,
      "max5y": 123.69999694824219,
      "ma20": 80.27700004577636,
      "ma60": 85.33416659037272,
      "chg1m": 16.04999542236328,
      "chg3m": -20.44000244140625,
      "chg1mPct": 23.403317284683204,
      "chg3mPct": -19.45369991507969,
      "lastDate": "2026-07-31",
      "bars": 1257,
      "symbol": "CL=F",
      "label": "WTI 유가",
      "unit": "$",
      "digits": 1
    },
    "dollar": {
      "current": 99.96600341796875,
      "prevClose": 100.01000213623047,
      "changeAbs": -0.04399871826171875,
      "changePct": -0.04399431789010971,
      "pctRank": 35.87907716785998,
      "min5y": 92.04000091552734,
      "max5y": 114.11000061035156,
      "ma20": 100.95130081176758,
      "ma60": 100.11060028076172,
      "chg1m": -1.4239959716796875,
      "chg3m": 1.8860015869140625,
      "chg1mPct": -1.4044737945082506,
      "chg3mPct": 1.9229216473331114,
      "lastDate": "2026-07-31",
      "bars": 1257,
      "symbol": "DX-Y.NYB",
      "label": "달러지수(DXY)",
      "unit": "",
      "digits": 1
    },
    "gold": {
      "current": 4106.10009765625,
      "prevClose": 4100.10009765625,
      "changeAbs": 6.0,
      "changePct": 0.1463378907122242,
      "pctRank": 87.27128082736675,
      "min5y": 1623.300048828125,
      "max5y": 5318.39990234375,
      "ma20": 4070.030029296875,
      "ma60": 4276.5316691080725,
      "chg1m": 37.800048828125,
      "chg3m": -508.60009765625,
      "chg1mPct": 0.9291362085992972,
      "chg3mPct": -11.021303142788637,
      "lastDate": "2026-07-31",
      "bars": 1257,
      "symbol": "GC=F",
      "label": "금",
      "unit": "$",
      "digits": 0
    }
  },
  "yieldSpread": 1.0560002326965332,
  "sector": {
    "groups": {
      "빅테크·SW": {
        "ret1m": -0.3151079878826568,
        "ret3m": -2.7993010730640755,
        "ret6m": -5.694617035107418,
        "ret1y": 0.38444868764322404,
        "winRate": 60.8,
        "count": 9
      },
      "반도체": {
        "ret1m": -17.495487830263436,
        "ret3m": 17.528766046655562,
        "ret6m": 62.74869111318158,
        "ret1y": 216.21442742192403,
        "winRate": 71.5,
        "count": 15
      }
    },
    "pair": [
      "빅테크·SW",
      "반도체"
    ],
    "corr60": 0.15990164217441166,
    "corrPctRank": 0.5857740585774058,
    "corrMin5y": 0.11496792019743002,
    "corrMedian5y": 0.7115782038222396,
    "corrMax5y": 0.9346528705205663
  },
  "news": [
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
    },
    {
      "headline": "Trump convenes Cabinet at Camp David amid simmering Iran war - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMipAFBVV95cUxNZks0akNQUmpqVGdGaE5rakdfRldLS25IaTFzeVF2VzVmVGc5TkF4VTI2NjI1UlVVdXlveTFxRXFMRWlGTEN4STFsYUdySDQzNE9pSGF6SzJ5bk83M3RsWGc3a3N1Q21oQlQtMGZ4QnFjSHd1dlhlbkNsZ3dvVmFhOFpwVVpNaUx0TmxTTEp2bGZzRExacFhmaEdBS3VjQ0l3cGpPWQ?oc=5",
      "datetime": 1785493463,
      "headlineKo": "트럼프, 이란 전쟁이 과열되는 가운데 캠프 데이비드에서 내각 소집 - 로이터"
    }
  ],
  "_fetched_at": 1785524401.8559825,
  "_updated_label": "2026-08-01 04:00"
};
