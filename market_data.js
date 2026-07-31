// 자동 생성 파일 - buy_signal_telegram.py 실행 시마다 갱신됨. 직접 수정하지 마세요.
// 시장 환경 지표(야후) + 시장 헤드라인(Finnhub). 이 파일이 없어도 대시보드는 정상 동작함.
const MARKET_DATA = {
  "indicators": {
    "vix": {
      "current": 16.739999771118164,
      "prevClose": 17.09000015258789,
      "changeAbs": -0.35000038146972656,
      "changePct": -2.0479834894368154,
      "pctRank": 38.05732484076433,
      "min5y": 11.859999656677246,
      "max5y": 52.33000183105469,
      "ma20": 17.264499807357787,
      "ma60": 17.45216663678487,
      "chg1m": 0.14999961853027344,
      "chg3m": -0.25,
      "chg1mPct": 0.9041568242955975,
      "chg3mPct": -1.4714538161735757,
      "lastDate": "2026-07-31",
      "bars": 1256,
      "symbol": "^VIX",
      "label": "VIX (공포지수)",
      "unit": "",
      "digits": 2
    },
    "us10y": {
      "current": 4.663000106811523,
      "prevClose": 4.622000217437744,
      "changeAbs": 0.0409998893737793,
      "changePct": 0.8870594427731989,
      "pctRank": 97.37051792828684,
      "min5y": 1.1740000247955322,
      "max5y": 4.98799991607666,
      "ma20": 4.590699982643128,
      "ma60": 4.51486664613088,
      "chg1m": 0.24499988555908203,
      "chg3m": 0.24499988555908203,
      "chg1mPct": 5.545492831361335,
      "chg3mPct": 5.545492831361335,
      "lastDate": "2026-07-30",
      "bars": 1255,
      "symbol": "^TNX",
      "label": "미국 10년물 금리",
      "unit": "%",
      "digits": 2
    },
    "us3m": {
      "current": 3.674999952316284,
      "prevClose": 3.6579999923706055,
      "changeAbs": 0.01699995994567871,
      "changePct": 0.4647337337653111,
      "pctRank": 35.537848605577686,
      "min5y": 0.019999999552965164,
      "max5y": 5.3480000495910645,
      "ma20": 3.718899977207184,
      "ma60": 3.6545833309491473,
      "chg1m": -0.057000160217285156,
      "chg3m": 0.08500003814697266,
      "chg1mPct": -1.5273354367234748,
      "chg3mPct": 2.367689141481241,
      "lastDate": "2026-07-30",
      "bars": 1255,
      "symbol": "^IRX",
      "label": "미국 3개월 금리",
      "unit": "%",
      "digits": 2
    },
    "oil": {
      "current": 82.69000244140625,
      "prevClose": 83.58999633789062,
      "changeAbs": -0.899993896484375,
      "changePct": -1.0766765592935137,
      "pctRank": 70.80350039777248,
      "min5y": 55.27000045776367,
      "max5y": 123.69999694824219,
      "ma20": 80.18000030517578,
      "ma60": 85.30183334350586,
      "chg1m": 14.110000610351562,
      "chg3m": -22.37999725341797,
      "chg1mPct": 20.574511860048116,
      "chg3mPct": -21.3000831049973,
      "lastDate": "2026-07-31",
      "bars": 1257,
      "symbol": "CL=F",
      "label": "WTI 유가",
      "unit": "$",
      "digits": 1
    },
    "dollar": {
      "current": 100.20700073242188,
      "prevClose": 100.01000213623047,
      "changeAbs": 0.19699859619140625,
      "changePct": 0.19697889409407368,
      "pctRank": 37.07239459029435,
      "min5y": 92.04000091552734,
      "max5y": 114.11000061035156,
      "ma20": 100.96335067749024,
      "ma60": 100.11461690266927,
      "chg1m": -1.1829986572265625,
      "chg3m": 2.1269989013671875,
      "chg1mPct": -1.1667804165578706,
      "chg3mPct": 2.1686366860300406,
      "lastDate": "2026-07-31",
      "bars": 1257,
      "symbol": "DX-Y.NYB",
      "label": "달러지수(DXY)",
      "unit": "",
      "digits": 1
    },
    "gold": {
      "current": 4112.89990234375,
      "prevClose": 4100.10009765625,
      "changeAbs": 12.7998046875,
      "changePct": 0.312182736582865,
      "pctRank": 87.66905330151154,
      "min5y": 1623.300048828125,
      "max5y": 5318.39990234375,
      "ma20": 4070.37001953125,
      "ma60": 4276.644999186198,
      "chg1m": 44.599853515625,
      "chg3m": -501.80029296875,
      "chg1mPct": 1.0962773881064156,
      "chg3mPct": -10.873952190403756,
      "lastDate": "2026-07-31",
      "bars": 1257,
      "symbol": "GC=F",
      "label": "금",
      "unit": "$",
      "digits": 0
    }
  },
  "yieldSpread": 0.9880001544952393,
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
      "headline": "Oil falls more than $1 on greater flows despite US-Iran war - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxNTWtnbUQ2S2JIalNxeXVETFdYcU95VDBtOHpPdlAxWDkzd1B0VVBPNnNpMW8xTGVRbkJ1NTFqbmJ0Ui1ucUUtSVhZeXZwRTQ4eE5FTWRkdzBlZEVJUzZHR0tKdnZTeXFoQlFPSHpGX0pqaEVVU3RhWFJqR2xNZnVJeDdOaG9ONUEtaThtRXhXakladzRkT2JvR1hxSEREVmxkRGRjQWw5ZTNoeTQ?oc=5",
      "datetime": 1785466800,
      "headlineKo": "미국-이란 전쟁에도 불구하고 유가가 1달러 이상 하락 - Reuters"
    },
    {
      "headline": "US cyber defense agency warns hackers are increasingly targeting water systems - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxNdWNJNFA5THZLRlg3TTVYX2tkQmJzOUdQamtWQXZDOU81R1RTdjBtX3E2S3k3RlVfR2p6WE9uZGpfbzNCUHpGN0hhZ3ROY3pmN1FiS1JZa0FjQ2FDMDZuOUFRSjJad0wyX3lZWUFfQ1FjdGs4RGZvRVpnYzBwT1o0UlkyaGVRTkpvdVo0SmpCUkdhWFN3TEVaVHpfTnB1YWUwbzNuMUpoa2VsdHdtM2hNZ2JaRUE?oc=5",
      "datetime": 1785447780,
      "headlineKo": "미국 사이버 방어 기관, 해커들이 점점 더 수자원 시스템을 표적으로 삼고 있다고 경고 - Reuters"
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
    },
    {
      "headline": "Saudi Arabia unveils plans for multinational maritime defence coalition - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxQVVV1X2lpNHZQWlFIclZsaER1azctU1NVTk5FcjhEYTVULU9NU1JibElRWUYzWllrZFRKY3NiYVRKdnVhS0hoWkRMeWczMnZXX2Y0UnNrMlVPQzN5QWRnMVFacTBPQkNEZ29BTzh0M2dRSU9BZ1ZZNmN0RHoxaE5GbW5aR3NETW5fREF6UklGUHo5ZkM3NTVDdHpkUXNFY0hWZmxUZHB0aEk1NDBtUEd2VTJqV2RwazVoY0lPYnhR?oc=5",
      "datetime": 1785438469,
      "headlineKo": "사우디아라비아, 다국적 해양방위연합 계획 공개 - 로이터 통신"
    },
    {
      "headline": "Microsoft wins back Jim Cramer's support after a surprisingly good quarter",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/07/30/microsoft-wins-back-jim-cramers-support-after-a-surprisingly-good-quarter.html",
      "datetime": 1785437533,
      "headlineKo": "Microsoft는 놀랄 만큼 좋은 분기를 보낸 후 Jim Cramer의 지원을 다시 얻었습니다."
    },
    {
      "headline": "Imports hold back US economic growth in Q2, but domestic demand robust - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxObWh4Um5od3luS0pRM0hOYTNwN0Z4bElZWFBXVDRRdFFVT2FpejU4ZkQ3MTVuY3hYb1NpMVd4QXV4WFhFMFUwbTRCbGs2cGlPOW11LWUxdzFyRnU0a0cwZU02b0s5b012M0p3Y2prV25KT0RQd3BGZk52aWNlanFDSDh5UTRRUVYtc2lsSm1RWjM4MjlzMXFCcEVrVjNvYVNzN3pNTm1zU2ZpV1U?oc=5",
      "datetime": 1785436561,
      "headlineKo": "수입이 2분기 미국 경제 성장을 방해하지만 국내 수요는 견조함 - Reuters"
    },
    {
      "headline": "US issues sanctions targeting support networks for Iran's Mahan Air - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMitwFBVV95cUxNYWwwbkpQREZyMHd4cWZMcVdqOXZJZEpWMGpJeFRWcE1CVG53TElTMWdOa1pPSmVvelZXVUVJdkVvSWl2YU5vb1poSVFtR29vdmxtQnE5WW4zZ2Jvck5lSnM0Ykg5Z0dqU2xKa3l3ZVM0QjA2X0w2djluS1o4WUsxZU53bkp5YzY2MFRld3EtajFPS0NUemVuMTJfRGh2bU1VZk5HcjZ5NERoSjhab1RVRDZPZkIyRGs?oc=5",
      "datetime": 1785432969,
      "headlineKo": "미국, 이란 마한항공 지원 네트워크 겨냥 제재 발표 - 로이터 통신"
    },
    {
      "headline": "UEFA threatens World Cup boycott over FIFA private equity investment plan",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/07/30/uefa-threatens-world-cup-boycott-over-fifa-investment-plan.html",
      "datetime": 1785432606,
      "headlineKo": "UEFA, FIFA 사모펀드 투자 계획에 대해 월드컵 보이콧 위협"
    },
    {
      "headline": "Bank of England keeps rates on hold, awaits clearer sign of Iran war inflation hit - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxNcXV6ZUFyTnVCZmxRUVdTancteHlMckpydGNUdmYwdDFtaTllNmhNdkh2S0J1NS1CWDE1VG51Y18wcU41VloxRWZ5LWpTVGlGb2NfeDRkZ1RJeUs5aFFxaHIwVzByUk9md01STlJqVlRqLUNaVWdYN0psNXFGUlpuSVJOWGZ2LWtrNnJxbTlxUUNVNWxvOXJKZXM1alBLbzR4QXBUTjIzMXNwOG4zM2ZQVlZ6enJHZw?oc=5",
      "datetime": 1785430005,
      "headlineKo": "영란은행(BoE), 금리 동결 유지, 이란 전쟁 인플레이션 타격의 명확한 신호 기다리고 있음 - 로이터 통신"
    },
    {
      "headline": "Cramer predicts a breakout for Starbucks shares as CEO Niccol's turnaround accelerates",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/07/30/cramer-predicts-a-breakout-for-starbucks-shares-as-ceo-niccols-turnaround-accelerates-.html",
      "datetime": 1785429395,
      "headlineKo": "Cramer는 CEO Niccol의 턴어라운드가 가속화됨에 따라 스타벅스 주식의 돌파를 예측합니다."
    },
    {
      "headline": "Cramer sees a 'sure signal to buy' stocks. Plus what we want from Amazon's results",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/07/30/cramer-sees-signal-to-buy-stocks-previews-reports-amzn-aapl.html",
      "datetime": 1785428231,
      "headlineKo": "Cramer는 주식을 '매수하라는 확실한 신호'를 보고 있습니다. 게다가 Amazon의 결과에서 우리가 원하는 것"
    }
  ],
  "_fetched_at": 1785487471.6258302,
  "_updated_label": "2026-07-31 17:44"
};
