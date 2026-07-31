// 자동 생성 파일 - buy_signal_telegram.py 실행 시마다 갱신됨. 직접 수정하지 마세요.
// 시장 환경 지표(야후) + 시장 헤드라인(Finnhub). 이 파일이 없어도 대시보드는 정상 동작함.
const MARKET_DATA = {
  "indicators": {
    "vix": {
      "current": 16.989999771118164,
      "prevClose": 17.09000015258789,
      "changeAbs": -0.10000038146972656,
      "changePct": -0.5851397342122538,
      "pctRank": 41.24203821656051,
      "min5y": 11.859999656677246,
      "max5y": 52.33000183105469,
      "ma20": 17.27699980735779,
      "ma60": 17.456333303451537,
      "chg1m": 0.39999961853027344,
      "chg3m": 0.0,
      "chg1mPct": 2.41108869711419,
      "chg3mPct": 0.0,
      "lastDate": "2026-07-31",
      "bars": 1256,
      "symbol": "^VIX",
      "label": "VIX (공포지수)",
      "unit": "",
      "digits": 2
    },
    "us10y": {
      "current": 4.736999988555908,
      "prevClose": 4.663000106811523,
      "changeAbs": 0.07399988174438477,
      "changePct": 1.586958611394598,
      "pctRank": 98.48605577689243,
      "min5y": 1.1740000247955322,
      "max5y": 4.98799991607666,
      "ma20": 4.603299975395203,
      "ma60": 4.520216647783915,
      "chg1m": 0.26200008392333984,
      "chg3m": 0.3470001220703125,
      "chg1mPct": 5.854750603505366,
      "chg3mPct": 7.904331039264989,
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
      "current": 84.69000244140625,
      "prevClose": 83.58999633789062,
      "changeAbs": 1.100006103515625,
      "changePct": 1.315954242980391,
      "pctRank": 75.17899761336515,
      "min5y": 55.27000045776367,
      "max5y": 123.69999694824219,
      "ma20": 80.28000030517578,
      "ma60": 85.3351666768392,
      "chg1m": 16.110000610351562,
      "chg3m": -20.37999725341797,
      "chg1mPct": 23.490813911084736,
      "chg3mPct": -19.396590189979694,
      "lastDate": "2026-07-31",
      "bars": 1257,
      "symbol": "CL=F",
      "label": "WTI 유가",
      "unit": "$",
      "digits": 1
    },
    "dollar": {
      "current": 100.0469970703125,
      "prevClose": 100.01000213623047,
      "changeAbs": 0.03699493408203125,
      "changePct": 0.0369912341683964,
      "pctRank": 36.27684964200477,
      "min5y": 92.04000091552734,
      "max5y": 114.11000061035156,
      "ma20": 100.95535049438476,
      "ma60": 100.11195017496745,
      "chg1m": -1.3430023193359375,
      "chg3m": 1.9669952392578125,
      "chg1mPct": -1.3245905192036656,
      "chg3mPct": 2.0055008182463254,
      "lastDate": "2026-07-31",
      "bars": 1257,
      "symbol": "DX-Y.NYB",
      "label": "달러지수(DXY)",
      "unit": "",
      "digits": 1
    },
    "gold": {
      "current": 4100.0,
      "prevClose": 4100.10009765625,
      "changeAbs": -0.10009765625,
      "changePct": -0.0024413466468103805,
      "pctRank": 87.11217183770883,
      "min5y": 1623.300048828125,
      "max5y": 5318.39990234375,
      "ma20": 4069.7250244140623,
      "ma60": 4276.4300008138025,
      "chg1m": 31.699951171875,
      "chg3m": -514.7001953125,
      "chg1mPct": 0.7791940316940532,
      "chg3mPct": -11.153491527690573,
      "lastDate": "2026-07-31",
      "bars": 1257,
      "symbol": "GC=F",
      "label": "금",
      "unit": "$",
      "digits": 0
    }
  },
  "yieldSpread": 1.0520000457763672,
  "sector": {
    "groups": {
      "빅테크·SW": {
        "ret1m": -0.7229348462515439,
        "ret3m": -3.196964699662719,
        "ret6m": -6.080435460402711,
        "ret1y": -0.026240169123536994,
        "winRate": 60.8,
        "count": 9
      },
      "반도체": {
        "ret1m": -17.733694709898064,
        "ret3m": 17.189437204013757,
        "ret6m": 62.278803383951264,
        "ret1y": 215.30145369393367,
        "winRate": 71.5,
        "count": 15
      }
    },
    "pair": [
      "빅테크·SW",
      "반도체"
    ],
    "corr60": 0.15876975094612705,
    "corrPctRank": 0.5857740585774058,
    "corrMin5y": 0.11496792019743002,
    "corrMedian5y": 0.7115782038222396,
    "corrMax5y": 0.9346528705205663
  },
  "news": [
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
    },
    {
      "headline": "Oil rises over 1% as traders assess shipping flows; monthly gains in sight - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxNTWtnbUQ2S2JIalNxeXVETFdYcU95VDBtOHpPdlAxWDkzd1B0VVBPNnNpMW8xTGVRbkJ1NTFqbmJ0Ui1ucUUtSVhZeXZwRTQ4eE5FTWRkdzBlZEVJUzZHR0tKdnZTeXFoQlFPSHpGX0pqaEVVU3RhWFJqR2xNZnVJeDdOaG9ONUEtaThtRXhXakladzRkT2JvR1hxSEREVmxkRGRjQWw5ZTNoeTQ?oc=5",
      "datetime": 1785466800,
      "headlineKo": "거래자들이 운송 흐름을 평가함에 따라 석유는 1% 이상 상승합니다. 월간 상승 가시화 - Reuters"
    }
  ],
  "_fetched_at": 1785517201.8486278,
  "_updated_label": "2026-08-01 02:00"
};
