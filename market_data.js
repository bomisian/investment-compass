// 자동 생성 파일 - buy_signal_telegram.py 실행 시마다 갱신됨. 직접 수정하지 마세요.
// 시장 환경 지표(야후) + 시장 헤드라인(Finnhub). 이 파일이 없어도 대시보드는 정상 동작함.
const MARKET_DATA = {
  "indicators": {
    "vix": {
      "current": 20.65999984741211,
      "prevClose": 18.209999084472656,
      "changeAbs": 2.450000762939453,
      "changePct": 13.454150939680856,
      "pctRank": 69.66560509554141,
      "min5y": 11.859999656677246,
      "max5y": 52.33000183105469,
      "ma20": 17.209999799728394,
      "ma60": 17.467833280563354,
      "chg1m": 3.010000228881836,
      "chg3m": 1.8500003814697266,
      "chg1mPct": 17.053826027971784,
      "chg3mPct": 9.835196352978958,
      "lastDate": "2026-07-29",
      "bars": 1256,
      "symbol": "^VIX",
      "label": "VIX (공포지수)",
      "unit": "",
      "digits": 2
    },
    "us10y": {
      "current": 4.622000217437744,
      "prevClose": 4.604000091552734,
      "changeAbs": 0.018000125885009766,
      "changePct": 0.3909671052795111,
      "pctRank": 95.69721115537848,
      "min5y": 1.1740000247955322,
      "max5y": 4.98799991607666,
      "ma20": 4.58129997253418,
      "ma60": 4.511249979337056,
      "chg1m": 0.2480001449584961,
      "chg3m": 0.26800012588500977,
      "chg1mPct": 5.669870618404584,
      "chg3mPct": 6.155262293286606,
      "lastDate": "2026-07-29",
      "bars": 1255,
      "symbol": "^TNX",
      "label": "미국 10년물 금리",
      "unit": "%",
      "digits": 2
    },
    "us3m": {
      "current": 3.6580002307891846,
      "prevClose": 3.759999990463257,
      "changeAbs": -0.10199975967407227,
      "changePct": -2.7127595726803504,
      "pctRank": 35.298804780876495,
      "min5y": 0.019999999552965164,
      "max5y": 5.3480000495910645,
      "ma20": 3.7201499938964844,
      "ma60": 3.653166667620341,
      "chg1m": -0.021999835968017578,
      "chg3m": 0.06800031661987305,
      "chg1mPct": -0.5978216187208857,
      "chg3mPct": 1.8941592826084404,
      "lastDate": "2026-07-29",
      "bars": 1255,
      "symbol": "^IRX",
      "label": "미국 3개월 금리",
      "unit": "%",
      "digits": 2
    },
    "oil": {
      "current": 84.66000366210938,
      "prevClose": 79.26000213623047,
      "changeAbs": 5.400001525878906,
      "changePct": 6.813022180591788,
      "pctRank": 75.17899761336515,
      "min5y": 55.27000045776367,
      "max5y": 123.69999694824219,
      "ma20": 78.73950080871582,
      "ma60": 86.01200002034506,
      "chg1m": 13.910003662109375,
      "chg3m": -15.269996643066406,
      "chg1mPct": 19.660782561285338,
      "chg3mPct": -15.280693081590545,
      "lastDate": "2026-07-29",
      "bars": 1257,
      "symbol": "CL=F",
      "label": "WTI 유가",
      "unit": "$",
      "digits": 1
    },
    "dollar": {
      "current": 100.8280029296875,
      "prevClose": 101.37999725341797,
      "changeAbs": -0.5519943237304688,
      "changePct": -0.544480507679101,
      "pctRank": 39.45902943516308,
      "min5y": 91.86000061035156,
      "max5y": 114.11000061035156,
      "ma20": 101.0664005279541,
      "ma60": 100.06063359578451,
      "chg1m": -0.2819976806640625,
      "chg3m": 2.2080001831054688,
      "chg1mPct": -0.27890186822448876,
      "chg3mPct": 2.2388968988159896,
      "lastDate": "2026-07-29",
      "bars": 1257,
      "symbol": "DX-Y.NYB",
      "label": "달러지수(DXY)",
      "unit": "",
      "digits": 1
    },
    "gold": {
      "current": 4123.7998046875,
      "prevClose": 4036.300048828125,
      "changeAbs": 87.499755859375,
      "changePct": 2.167820895395999,
      "pctRank": 87.7486077963405,
      "min5y": 1623.300048828125,
      "max5y": 5318.39990234375,
      "ma20": 4073.2250244140623,
      "ma60": 4292.50166015625,
      "chg1m": 101.499755859375,
      "chg3m": -467.7001953125,
      "chg1mPct": 2.5234257670296474,
      "chg3mPct": -10.186217909452248,
      "lastDate": "2026-07-29",
      "bars": 1257,
      "symbol": "GC=F",
      "label": "금",
      "unit": "$",
      "digits": 0
    }
  },
  "yieldSpread": 0.9639999866485596,
  "sector": {
    "groups": {
      "빅테크·SW": {
        "ret1m": -0.9069527197090199,
        "ret3m": -7.4366562376199985,
        "ret6m": -11.661474937866467,
        "ret1y": -4.388424235407717,
        "winRate": 60.8,
        "count": 9
      },
      "반도체": {
        "ret1m": -28.67252723308471,
        "ret3m": 10.80242950592043,
        "ret6m": 49.62428665585345,
        "ret1y": 186.40514392506583,
        "winRate": 71.5,
        "count": 15
      }
    },
    "pair": [
      "빅테크·SW",
      "반도체"
    ],
    "corr60": 0.11666515368307732,
    "corrPctRank": 0.08375209380234507,
    "corrMin5y": 0.11496792019743002,
    "corrMedian5y": 0.7115784818334243,
    "corrMax5y": 0.9346528705205663
  },
  "news": [
    {
      "headline": "Here are the five big takeaways from this week's Fed meeting",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/07/29/here-are-the-five-big-takeaways-from-this-weeks-fed-meeting.html",
      "datetime": 1785357770,
      "headlineKo": "이번주 연준 회의에서 중요한 5가지 시사점은 다음과 같습니다."
    },
    {
      "headline": "Drone hits gas storage tanker at Egypt's Mediterranean port, Ambrey reports - reuters.com",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxPM3F5LWg3Mm9rYmlhejJpdzJqQW9SWnU1WHJRVm9iZ1p0TUpmRTR6Mk1JYXVUekU2c1VlTHI5bV9DbzIyejlvYU13Y2cxYU12WExOYzJoVmxsVzVoc2hiWkQ2ZWFUZ0EwZHBZZlZ1UnREZjZGc243TlQtMXVKcDQ5bUpEaDR2Tmo5eTJkdlJhSXMtZ0U2cnk0OWNLLU50YlBjbnZrei1FVm9CYWw5cUE?oc=5",
      "datetime": 1785353466,
      "headlineKo": "드론이 이집트 지중해 항구의 가스 저장 탱크에 충돌했다고 Ambrey가 보도했습니다. - reuters.com"
    },
    {
      "headline": "Fed keeps rates steady. The big question now: What will Microsoft and Meta say on AI capex?",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/07/29/fed-keeps-rates-steady-the-big-question-now-what-will-microsoft-and-meta-say-on-ai-capex-.html",
      "datetime": 1785352318,
      "headlineKo": "Fed는 금리를 안정적으로 유지합니다. 이제 가장 큰 질문은 AI capex에 대해 Microsoft와 Meta가 뭐라고 말할까요?"
    },
    {
      "headline": "Hims and Hers shares fall 10% as FTC sues company over data, billing practices",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/07/29/hims-and-hers-ftc-lawsuit-stock.html",
      "datetime": 1785349449,
      "headlineKo": "FTC가 데이터, 청구 관행에 대해 회사를 고소함에 따라 Hims and Hers 주가는 10% 하락했습니다."
    },
    {
      "headline": "Jim Cramer sees opportunity to snap up more shares of this chipmaker",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/07/29/jim-cramer-sees-opportunity-to-snap-up-more-shares-of-this-chipmaker-.html",
      "datetime": 1785341675,
      "headlineKo": "Jim Cramer는 이 칩 제조업체의 주식을 더 많이 확보할 기회를 보고 있습니다."
    },
    {
      "headline": "How a 40-year-old father launched a $1.6 billion-a-year meat snacks empire from a bankrupt Wisconsin business",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/07/29/how-link-snacks-grew-from-jack-links-beef-jerky-to-meat-snacks-empire.html",
      "datetime": 1785341005,
      "headlineKo": "40세 아버지가 파산한 위스콘신 기업에서 연간 16억 달러 규모의 고기 스낵 제국을 시작한 방법"
    },
    {
      "headline": "US issues new Iran-related sanctions targeting insurers, more tankers - reuters.com",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxOUHg0N2g3a2l6LTNFemIxenZFVEI0Unk4dnROM2JfZ3lPYXR4c2IxSFNOMG5ZM1EzdEEzeS1ETTVIbmRRTmRNMzZucTMyQU1xa0ItRWh1N2tDREZ3dDhBVGxITEphNkdlbVd1VWhWQmU4N25QZTE5Qk9vbHFQMkVDc1pqVUFCX0F0cFVqVVBlTjM4R2t2S2xuRDBlcTcxZ1F2ZGE5cDdLNmxNd3FQMDdrazZMbC1JRnlI?oc=5",
      "datetime": 1785339044,
      "headlineKo": "미국, 보험사와 유조선을 대상으로 이란 관련 새로운 제재 발표 - reuters.com"
    },
    {
      "headline": "FIFA is embroiled in a $20 billion World Cup controversy. Here's what's going on",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/07/29/world-cup-fifa-stake-sales-uefa-soccer.html",
      "datetime": 1785332523,
      "headlineKo": "FIFA는 200억 달러 규모의 월드컵 논란에 휘말렸다. 무슨 일이 일어나고 있나요?"
    },
    {
      "headline": "Humana tops quarterly estimates, maintains profit outlook as medical costs stay in line",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/07/29/humana-hum-earnings-q2-2026.html",
      "datetime": 1785331400,
      "headlineKo": "휴마나, 분기별 추정치를 상회하고 의료비 수준 유지로 이익 전망 유지"
    },
    {
      "headline": "Jim Cramer's top 10 things to watch in the stock market Wednesday",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/07/29/jim-cramers-top-10-things-to-watch-in-the-stock-market-wednesday.html",
      "datetime": 1785330500,
      "headlineKo": "짐 크레이머가 수요일 주식시장에서 주목해야 할 10가지"
    },
    {
      "headline": "We're exiting our position in a household products giant after a soft quarter",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/07/29/were-exiting-our-position-in-a-household-products-giant-after-a-soft-quarter.html",
      "datetime": 1785330142,
      "headlineKo": "우리는 부진한 분기 이후 가정용품 거대 기업에서의 지위를 종료하고 있습니다."
    },
    {
      "headline": "EXCLUSIVE: US military may require some troops in Mideast to surrender cell phones, sources say - reuters.com",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxOQnRvd2JkQWxrSjBpdHRBSkU2bnZMZUtQc0g0SVZ3eHhzb2FSRFJ6UF9yZlNlcXVWek9jZkVmWVhnNVRSeFNrdUNBZm1PNEQ0RmxxMDY1SkZOS0NHM04xSk1iQzN5b29UbEdhY21IaGZSQU12WWsxR0VNd2t5LXoya1VoRHVET015cWM5emFfM1lhYWZTbS1BWGlfSFdZeXJGalRYdVZCYWFEM1hzd0l5ekQ5M2hJb19YSkNR?oc=5",
      "datetime": 1785329590,
      "headlineKo": "독점: 미군이 중동의 일부 군대에 휴대전화를 넘겨달라고 요구할 수도 있다고 소식통이 전했습니다. - reuters.com"
    }
  ],
  "_fetched_at": 1785358801.8830535,
  "_updated_label": "2026-07-30 06:00"
};
