// 자동 생성 파일 - buy_signal_telegram.py 실행 시마다 갱신됨. 직접 수정하지 마세요.
// 시장 환경 지표(야후) + 시장 헤드라인(Finnhub). 이 파일이 없어도 대시보드는 정상 동작함.
const MARKET_DATA = {
  "indicators": {
    "vix": {
      "current": 17.25,
      "prevClose": 17.09000015258789,
      "changeAbs": 0.15999984741210938,
      "changePct": 0.9362191104947477,
      "pctRank": 44.42675159235669,
      "min5y": 11.859999656677246,
      "max5y": 52.33000183105469,
      "ma20": 17.28999981880188,
      "ma60": 17.46066664059957,
      "chg1m": 0.6599998474121094,
      "chg3m": 0.26000022888183594,
      "chg1mPct": 3.9782992244828606,
      "chg3mPct": 1.5303133159767226,
      "lastDate": "2026-07-31",
      "bars": 1256,
      "symbol": "^VIX",
      "label": "VIX (공포지수)",
      "unit": "",
      "digits": 2
    },
    "us10y": {
      "current": 4.699999809265137,
      "prevClose": 4.663000106811523,
      "changeAbs": 0.03699970245361328,
      "changePct": 0.7934741927105171,
      "pctRank": 98.00796812749005,
      "min5y": 1.1740000247955322,
      "max5y": 4.98799991607666,
      "ma20": 4.601449966430664,
      "ma60": 4.519599978129069,
      "chg1m": 0.22499990463256836,
      "chg3m": 0.309999942779541,
      "chg1mPct": 5.027930936929094,
      "chg3mPct": 7.061502328192796,
      "lastDate": "2026-07-31",
      "bars": 1255,
      "symbol": "^TNX",
      "label": "미국 10년물 금리",
      "unit": "%",
      "digits": 2
    },
    "us3m": {
      "current": 3.674999952316284,
      "prevClose": 3.674999952316284,
      "changeAbs": 0.0,
      "changePct": 0.0,
      "pctRank": 35.45816733067729,
      "min5y": 0.019999999552965164,
      "max5y": 5.3480000495910645,
      "ma20": 3.719249975681305,
      "ma60": 3.6558333317438763,
      "chg1m": -0.02500009536743164,
      "chg3m": 0.08999991416931152,
      "chg1mPct": -0.675678244466031,
      "chg3mPct": 2.5104578301714886,
      "lastDate": "2026-07-31",
      "bars": 1255,
      "symbol": "^IRX",
      "label": "미국 3개월 금리",
      "unit": "%",
      "digits": 2
    },
    "oil": {
      "current": 85.54000091552734,
      "prevClose": 83.58999633789062,
      "changeAbs": 1.9500045776367188,
      "changePct": 2.3328205085143647,
      "pctRank": 76.53142402545744,
      "min5y": 55.27000045776367,
      "max5y": 123.69999694824219,
      "ma20": 80.32250022888184,
      "ma60": 85.34933331807454,
      "chg1m": 16.959999084472656,
      "chg3m": -19.529998779296875,
      "chg1mPct": 24.73024005781341,
      "chg3mPct": -18.587607153347054,
      "lastDate": "2026-07-31",
      "bars": 1257,
      "symbol": "CL=F",
      "label": "WTI 유가",
      "unit": "$",
      "digits": 1
    },
    "dollar": {
      "current": 100.36499786376953,
      "prevClose": 100.01000213623047,
      "changeAbs": 0.3549957275390625,
      "changePct": 0.3549602239339007,
      "pctRank": 37.78838504375497,
      "min5y": 92.04000091552734,
      "max5y": 114.11000061035156,
      "ma20": 100.97125053405762,
      "ma60": 100.11725018819173,
      "chg1m": -1.0250015258789062,
      "chg3m": 2.2849960327148438,
      "chg1mPct": -1.0109493362750284,
      "chg3mPct": 2.329726743532089,
      "lastDate": "2026-07-31",
      "bars": 1257,
      "symbol": "DX-Y.NYB",
      "label": "달러지수(DXY)",
      "unit": "",
      "digits": 1
    },
    "gold": {
      "current": 4099.2998046875,
      "prevClose": 4100.10009765625,
      "changeAbs": -0.80029296875,
      "changePct": -0.019518864166449823,
      "pctRank": 87.11217183770883,
      "min5y": 1623.300048828125,
      "max5y": 5318.39990234375,
      "ma20": 4069.6900146484377,
      "ma60": 4276.418330891927,
      "chg1m": 30.999755859375,
      "chg3m": -515.400390625,
      "chg1mPct": 0.7619830269968532,
      "chg3mPct": -11.168664676169671,
      "lastDate": "2026-07-31",
      "bars": 1257,
      "symbol": "GC=F",
      "label": "금",
      "unit": "$",
      "digits": 0
    }
  },
  "yieldSpread": 1.0249998569488525,
  "sector": {
    "groups": {
      "빅테크·SW": {
        "ret1m": 0.2595741316829381,
        "ret3m": -5.252498765861501,
        "ret6m": -9.278790959086614,
        "ret1y": -2.0659909240742236,
        "winRate": 60.8,
        "count": 9
      },
      "반도체": {
        "ret1m": -24.243253017244026,
        "ret3m": 19.60680350136732,
        "ret6m": 61.72060221556204,
        "ret1y": 216.42441665260876,
        "winRate": 71.5,
        "count": 15
      }
    },
    "pair": [
      "빅테크·SW",
      "반도체"
    ],
    "corr60": 0.15702981534727992,
    "corrPctRank": 0.5025125628140703,
    "corrMin5y": 0.11496792019743002,
    "corrMedian5y": 0.7115784818334243,
    "corrMax5y": 0.9346528705205663
  },
  "news": [
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
    },
    {
      "headline": "Egypt confirms drone caused fire on two gas vessels at Damietta - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxPM3F5LWg3Mm9rYmlhejJpdzJqQW9SWnU1WHJRVm9iZ1p0TUpmRTR6Mk1JYXVUekU2c1VlTHI5bV9DbzIyejlvYU13Y2cxYU12WExOYzJoVmxsVzVoc2hiWkQ2ZWFUZ0EwZHBZZlZ1UnREZjZGc243TlQtMXVKcDQ5bUpEaDR2Tmo5eTJkdlJhSXMtZ0U2cnk0OWNLLU50YlBjbnZrei1FVm9CYWw5cUE?oc=5",
      "datetime": 1785444870,
      "headlineKo": "이집트, 다미에타(Damietta)의 가스선 두 척에 드론이 화재를 일으켰다고 확인 - 로이터"
    },
    {
      "headline": "Drone strike in Egypt sparks security concerns about Suez oil exports - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiugFBVV95cUxNY19zWlhiQmx4WmRhRHRLMUdTbjhwdEdVcHpaUmMtWndRMlB1MFNiZ2pJMzJZcFJQWEJSTzdfSGl6R0FXV016c2JUODlSV0Y3ZzBEbWRFeUVkRDQxQ2p5S0VPRWoyc0lZS3pobjVGR0l5YTV1V1FEbmE2N1BscGlFZWlLTjl6Qmp4TDJmalFTX1ZYVUJEYkV2NjBCWVhuNmRsdC1UZzBCVm1GQ2djejdiWUo1UnBfT1UzNmc?oc=5",
      "datetime": 1785442092,
      "headlineKo": "이집트 드론 공격으로 수에즈 석유 수출에 대한 안보 우려 촉발 - 로이터 통신"
    },
    {
      "headline": "'The Odyssey' extends stay in 70mm IMAX theaters as shows sell out weeks in advance",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/07/30/the-odyssey-70mm-imax-run-extended-until-september.html",
      "datetime": 1785439450,
      "headlineKo": "'The Odyssey'는 공연이 몇 주 전에 매진됨에 따라 70mm IMAX 극장에서 상영 기간을 연장합니다."
    }
  ],
  "_fetched_at": 1785502911.4621031,
  "_updated_label": "2026-07-31 22:02"
};
