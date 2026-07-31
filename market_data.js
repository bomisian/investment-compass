// 자동 생성 파일 - buy_signal_telegram.py 실행 시마다 갱신됨. 직접 수정하지 마세요.
// 시장 환경 지표(야후) + 시장 헤드라인(Finnhub). 이 파일이 없어도 대시보드는 정상 동작함.
const MARKET_DATA = {
  "indicators": {
    "vix": {
      "current": 17.520000457763672,
      "prevClose": 17.09000015258789,
      "changeAbs": 0.43000030517578125,
      "changePct": 2.516093044684189,
      "pctRank": 46.417197452229296,
      "min5y": 11.859999656677246,
      "max5y": 52.33000183105469,
      "ma20": 17.303499841690062,
      "ma60": 17.465166648228962,
      "chg1m": 0.9300003051757812,
      "chg3m": 0.5300006866455078,
      "chg1mPct": 5.60578840640161,
      "chg3mPct": 3.119486131756592,
      "lastDate": "2026-07-31",
      "bars": 1256,
      "symbol": "^VIX",
      "label": "VIX (공포지수)",
      "unit": "",
      "digits": 2
    },
    "us10y": {
      "current": 4.724999904632568,
      "prevClose": 4.663000106811523,
      "changeAbs": 0.06199979782104492,
      "changePct": 1.3296117606876763,
      "pctRank": 98.40637450199203,
      "min5y": 1.1740000247955322,
      "max5y": 4.98799991607666,
      "ma20": 4.602699971199035,
      "ma60": 4.5200166463851925,
      "chg1m": 0.25,
      "chg3m": 0.33500003814697266,
      "chg1mPct": 5.586592297827701,
      "chg3mPct": 7.6309805998959215,
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
      "current": 85.86000061035156,
      "prevClose": 83.58999633789062,
      "changeAbs": 2.2700042724609375,
      "changePct": 2.715641071791702,
      "pctRank": 77.24741447891806,
      "min5y": 55.27000045776367,
      "max5y": 123.69999694824219,
      "ma20": 80.33850021362305,
      "ma60": 85.35466664632162,
      "chg1m": 17.279998779296875,
      "chg3m": -19.209999084472656,
      "chg1mPct": 25.19684794098689,
      "chg3mPct": -18.283048577394208,
      "lastDate": "2026-07-31",
      "bars": 1257,
      "symbol": "CL=F",
      "label": "WTI 유가",
      "unit": "$",
      "digits": 1
    },
    "dollar": {
      "current": 100.21499633789062,
      "prevClose": 100.01000213623047,
      "changeAbs": 0.20499420166015625,
      "changePct": 0.2049736999114545,
      "pctRank": 37.07239459029435,
      "min5y": 92.04000091552734,
      "max5y": 114.11000061035156,
      "ma20": 100.96375045776367,
      "ma60": 100.11475016276042,
      "chg1m": -1.1750030517578125,
      "chg3m": 2.1349945068359375,
      "chg1mPct": -1.1588944263054963,
      "chg3mPct": 2.1767888121714356,
      "lastDate": "2026-07-31",
      "bars": 1257,
      "symbol": "DX-Y.NYB",
      "label": "달러지수(DXY)",
      "unit": "",
      "digits": 1
    },
    "gold": {
      "current": 4099.2001953125,
      "prevClose": 4100.10009765625,
      "changeAbs": -0.89990234375,
      "changePct": -0.021948301805226982,
      "pctRank": 87.11217183770883,
      "min5y": 1623.300048828125,
      "max5y": 5318.39990234375,
      "ma20": 4069.6850341796876,
      "ma60": 4276.416670735677,
      "chg1m": 30.900146484375,
      "chg3m": -515.5,
      "chg1mPct": 0.7595345995503895,
      "chg3mPct": -11.170823199384271,
      "lastDate": "2026-07-31",
      "bars": 1257,
      "symbol": "GC=F",
      "label": "금",
      "unit": "$",
      "digits": 0
    }
  },
  "yieldSpread": 1.0429999828338623,
  "sector": {
    "groups": {
      "빅테크·SW": {
        "ret1m": -1.2294560441972524,
        "ret3m": -3.6908631577725615,
        "ret6m": -6.559622171527391,
        "ret1y": -0.536315970762602,
        "winRate": 60.8,
        "count": 9
      },
      "반도체": {
        "ret1m": -17.543812031704565,
        "ret3m": 17.459927584173872,
        "ret6m": 62.653366623322725,
        "ret1y": 216.0292156160789,
        "winRate": 71.5,
        "count": 15
      }
    },
    "pair": [
      "빅테크·SW",
      "반도체"
    ],
    "corr60": 0.1597921729581476,
    "corrPctRank": 0.5857740585774058,
    "corrMin5y": 0.11496792019743002,
    "corrMedian5y": 0.7115782038222396,
    "corrMax5y": 0.9346528705205663
  },
  "news": [
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
    },
    {
      "headline": "IBM CEO says quantum computing will have a 'measurable impact' on earnings by 2028 or 2029",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/07/30/ibm-ceo-quantum-computing-measurable-impact-earnings-2028-2029.html",
      "datetime": 1785451592,
      "headlineKo": "IBM CEO는 양자 컴퓨팅이 2028년이나 2029년까지 수익에 '측정 가능한 영향'을 미칠 것이라고 말했습니다."
    },
    {
      "headline": "US cyber defense agency warns hackers are increasingly targeting water systems - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxNdWNJNFA5THZLRlg3TTVYX2tkQmJzOUdQamtWQXZDOU81R1RTdjBtX3E2S3k3RlVfR2p6WE9uZGpfbzNCUHpGN0hhZ3ROY3pmN1FiS1JZa0FjQ2FDMDZuOUFRSjJad0wyX3lZWUFfQ1FjdGs4RGZvRVpnYzBwT1o0UlkyaGVRTkpvdVo0SmpCUkdhWFN3TEVaVHpfTnB1YWUwbzNuMUpoa2VsdHdtM2hNZ2JaRUE?oc=5",
      "datetime": 1785447780,
      "headlineKo": "미국 사이버 방어 기관, 해커들이 점점 더 수자원 시스템을 표적으로 삼고 있다고 경고 - Reuters"
    }
  ],
  "_fetched_at": 1785510025.8029964,
  "_updated_label": "2026-08-01 00:00"
};
