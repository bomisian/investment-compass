// 자동 생성 파일 - buy_signal_telegram.py 실행 시마다 갱신됨. 직접 수정하지 마세요.
// 시장 환경 지표(야후) + 시장 헤드라인(Finnhub). 이 파일이 없어도 대시보드는 정상 동작함.
const MARKET_DATA = {
  "indicators": {
    "vix": {
      "current": 16.56999969482422,
      "prevClose": 17.09000015258789,
      "changeAbs": -0.5200004577636719,
      "changePct": -3.042717689414003,
      "pctRank": 36.22611464968153,
      "min5y": 11.859999656677246,
      "max5y": 52.33000183105469,
      "ma20": 17.25599980354309,
      "ma60": 17.449333302179973,
      "chg1m": -0.020000457763671875,
      "chg3m": -0.4200000762939453,
      "chg1mPct": -0.12055730910015684,
      "chg3mPct": -2.472042860223675,
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
      "current": 3.688000202178955,
      "prevClose": 3.674999952316284,
      "changeAbs": 0.013000249862670898,
      "changePct": 0.35374830017282266,
      "pctRank": 36.01593625498008,
      "min5y": 0.019999999552965164,
      "max5y": 5.3480000495910645,
      "ma20": 3.7198999881744386,
      "ma60": 3.6560500025749207,
      "chg1m": -0.011999845504760742,
      "chg3m": 0.10300016403198242,
      "chg1mPct": -0.32432014459764447,
      "chg3mPct": 2.8730868322450984,
      "lastDate": "2026-07-31",
      "bars": 1255,
      "symbol": "^IRX",
      "label": "미국 3개월 금리",
      "unit": "%",
      "digits": 2
    },
    "oil": {
      "current": 85.06999969482422,
      "prevClose": 83.58999633789062,
      "changeAbs": 1.4800033569335938,
      "changePct": 1.7705508096340483,
      "pctRank": 75.49721559268099,
      "min5y": 55.27000045776367,
      "max5y": 123.69999694824219,
      "ma20": 80.29900016784669,
      "ma60": 85.34149996439616,
      "chg1m": 16.48999786376953,
      "chg3m": -20.0,
      "chg1mPct": 24.04490729585029,
      "chg3mPct": -19.034929150176065,
      "lastDate": "2026-07-31",
      "bars": 1257,
      "symbol": "CL=F",
      "label": "WTI 유가",
      "unit": "$",
      "digits": 1
    },
    "dollar": {
      "current": 99.85600280761719,
      "prevClose": 100.01000213623047,
      "changeAbs": -0.15399932861328125,
      "changePct": -0.15398392693113655,
      "pctRank": 34.84486873508354,
      "min5y": 92.04000091552734,
      "max5y": 114.11000061035156,
      "ma20": 100.94580078125,
      "ma60": 100.10876693725587,
      "chg1m": -1.53399658203125,
      "chg3m": 1.7760009765625,
      "chg1mPct": -1.5129663588772697,
      "chg3mPct": 1.8107676829183863,
      "lastDate": "2026-07-31",
      "bars": 1257,
      "symbol": "DX-Y.NYB",
      "label": "달러지수(DXY)",
      "unit": "",
      "digits": 1
    },
    "gold": {
      "current": 4108.5,
      "prevClose": 4100.10009765625,
      "changeAbs": 8.39990234375,
      "changePct": 0.2048706651955072,
      "pctRank": 87.43038981702466,
      "min5y": 1623.300048828125,
      "max5y": 5318.39990234375,
      "ma20": 4070.1500244140625,
      "ma60": 4276.571667480469,
      "chg1m": 40.199951171875,
      "chg3m": -506.2001953125,
      "chg1mPct": 0.988126507125614,
      "chg3mPct": -10.969297546711394,
      "lastDate": "2026-07-31",
      "bars": 1257,
      "symbol": "GC=F",
      "label": "금",
      "unit": "$",
      "digits": 0
    }
  },
  "yieldSpread": 1.056999683380127,
  "sector": {
    "groups": {
      "빅테크·SW": {
        "ret1m": -0.6440658264852295,
        "ret3m": -3.1200611319281424,
        "ret6m": -6.005822618245804,
        "ret1y": 0.05318232818742885,
        "winRate": 60.8,
        "count": 9
      },
      "반도체": {
        "ret1m": -17.35965833942239,
        "ret3m": 17.722256948322233,
        "ret6m": 63.01662884492003,
        "ret1y": 216.73502009672157,
        "winRate": 71.5,
        "count": 15
      }
    },
    "pair": [
      "빅테크·SW",
      "반도체"
    ],
    "corr60": 0.16076853887478146,
    "corrPctRank": 0.5857740585774058,
    "corrMin5y": 0.11496792019743002,
    "corrMedian5y": 0.7115782038222396,
    "corrMax5y": 0.9346528705205663
  },
  "news": [
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
    },
    {
      "headline": "Illicit Iranian gambling network helped pull off a $4 billion sanctions dodge - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxPM0c1Y3Z1S3JvRDl6YklGRHdRWXJWWDdOMUJYQ0FURHpwLTByV1N0bzBCZ0ZGWGZoc0FwakZlLTI2S3cxWGxOV010X1I1NWlBVGRRbmdJeW9penZraklmQ2dtVERtdVMwM1ljR2t4QTl0OEZicThhNTZnN1ZJb3dlMC05TXBoOG4ybGpka1hRX2hUVGtkYTVjRHhBbk9CZDlMYWluVk03Yl9HeWt6UnhyMXZTMGtBQTE3S2l6NHoxOW96WTg?oc=5",
      "datetime": 1785488081,
      "headlineKo": "이란의 불법 도박 네트워크가 40억 달러 규모의 제재 회피를 도왔다 - 로이터 통신"
    },
    {
      "headline": "Man suspected of spying on UK military base for Iran arrested in Cyprus - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxOUERJVzM5MU9rRDVOc3RfUFdneGROMFVWdTlZU2d2RW0yVWtmcDk4cWhodHYtTF9CQlV0dmdIWmhlTUZFQllhWjZxb2RCTk1hTmxpcmxxNV8xM0pNaVh6ZThGZUdtTDVNOFhFSkhtRTdGOGk1RGZybVBQRXBxVVJLbXlfNFRSWUhiRXJfbDV2NUxFY1dlQ1Vsd3pJckNaenpNNVdSaWFn?oc=5",
      "datetime": 1785486324,
      "headlineKo": "영국 이란 기지 스파이 혐의 남성, 키프로스서 체포 - 로이터 통신"
    },
    {
      "headline": "British Airways-owner IAG trims capacity outlook; jet fuel bill eases - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxPZk5qYUJZMjJGUjlDVnpUSnRleDVfejMwdVpYTTJTT1oxVF90SEVMeklYbEZJd0FEdG8xWU5mcUZVUHVEWFczRmNQYWI0aEE0aGhXNnNwUG9rWGtYU1NrSGtBbC1yd2ZQMC1pLWtXNlp2SnM0RG1rLXgtWjl1V3NCOEVsMThwaEpNZXREVlJ0UFNESjZ3VkxyeHk2Q1A4VkJHN1I5ZjFfOA?oc=5",
      "datetime": 1785477900,
      "headlineKo": "영국항공 소유주 IAG, 수용능력 전망 축소; 제트 연료비 완화 - 로이터"
    }
  ],
  "_fetched_at": 1785520801.8593016,
  "_updated_label": "2026-08-01 03:00"
};
