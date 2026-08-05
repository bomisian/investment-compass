// 자동 생성 파일 - buy_signal_telegram.py 실행 시마다 갱신됨. 직접 수정하지 마세요.
// 시장 환경 지표(야후) + 시장 헤드라인(Finnhub). 이 파일이 없어도 대시보드는 정상 동작함.
const MARKET_DATA = {
  "indicators": {
    "vix": {
      "current": 17.399999618530273,
      "prevClose": 16.5,
      "changeAbs": 0.8999996185302734,
      "changePct": 5.454543142607718,
      "pctRank": 45.85987261146497,
      "min5y": 11.859999656677246,
      "max5y": 52.33000183105469,
      "ma20": 17.28499984741211,
      "ma60": 17.391499964396157,
      "chg1m": 1.2700004577636719,
      "chg3m": 0.010000228881835938,
      "chg1mPct": 7.873530835963869,
      "chg3mPct": 0.05750563101105494,
      "lastDate": "2026-08-05",
      "bars": 1256,
      "symbol": "^VIX",
      "label": "VIX (공포지수)",
      "unit": "",
      "digits": 2
    },
    "us10y": {
      "current": 4.63100004196167,
      "prevClose": 4.626999855041504,
      "changeAbs": 0.004000186920166016,
      "changePct": 0.08645314556920673,
      "pctRank": 96.25498007968127,
      "min5y": 1.2170000076293945,
      "max5y": 4.98799991607666,
      "ma20": 4.6220499753952025,
      "ma60": 4.534216642379761,
      "chg1m": 0.10200023651123047,
      "chg3m": 0.21500015258789062,
      "chg1mPct": 2.252158112006937,
      "chg3mPct": 4.868662997597566,
      "lastDate": "2026-08-05",
      "bars": 1255,
      "symbol": "^TNX",
      "label": "미국 10년물 금리",
      "unit": "%",
      "digits": 2
    },
    "us3m": {
      "current": 3.7300000190734863,
      "prevClose": 3.7300000190734863,
      "changeAbs": 0.0,
      "changePct": 0.0,
      "pctRank": 37.29083665338646,
      "min5y": 0.019999999552965164,
      "max5y": 5.3480000495910645,
      "ma20": 3.720699977874756,
      "ma60": 3.662066666285197,
      "chg1m": 0.005000114440917969,
      "chg3m": 0.13000011444091797,
      "chg1mPct": 0.1342312635954598,
      "chg3mPct": 3.6111143856873613,
      "lastDate": "2026-08-05",
      "bars": 1255,
      "symbol": "^IRX",
      "label": "미국 3개월 금리",
      "unit": "%",
      "digits": 2
    },
    "oil": {
      "current": 75.38999938964844,
      "prevClose": 75.7699966430664,
      "changeAbs": -0.37999725341796875,
      "changePct": -0.5015141484142348,
      "pctRank": 46.141607000795545,
      "min5y": 55.27000045776367,
      "max5y": 123.69999694824219,
      "ma20": 81.22849960327149,
      "ma60": 84.43799985249838,
      "chg1m": 4.9499969482421875,
      "chg3m": -26.87999725341797,
      "chg1mPct": 7.027252664222604,
      "chg3mPct": -26.283365733580816,
      "lastDate": "2026-08-05",
      "bars": 1257,
      "symbol": "CL=F",
      "label": "WTI 유가",
      "unit": "$",
      "digits": 1
    },
    "dollar": {
      "current": 99.75800323486328,
      "prevClose": 99.88999938964844,
      "changeAbs": -0.13199615478515625,
      "changePct": -0.1321415112540635,
      "pctRank": 34.049323786793956,
      "min5y": 92.04000091552734,
      "max5y": 114.11000061035156,
      "ma20": 100.77140083312989,
      "ma60": 100.199467086792,
      "chg1m": -1.3819961547851562,
      "chg3m": 1.2779998779296875,
      "chg1mPct": -1.366418986676998,
      "chg3mPct": 1.29772525829195,
      "lastDate": "2026-08-05",
      "bars": 1257,
      "symbol": "DX-Y.NYB",
      "label": "달러지수(DXY)",
      "unit": "",
      "digits": 1
    },
    "gold": {
      "current": 4253.89990234375,
      "prevClose": 4095.39990234375,
      "changeAbs": 158.5,
      "changePct": 3.870195921753387,
      "pctRank": 89.73747016706443,
      "min5y": 1623.300048828125,
      "max5y": 5318.39990234375,
      "ma20": 4067.765026855469,
      "ma60": 4246.930004882813,
      "chg1m": 108.60009765625,
      "chg3m": -301.89990234375,
      "chg1mPct": 2.6198369906428756,
      "chg3mPct": -6.626715731299754,
      "lastDate": "2026-08-05",
      "bars": 1257,
      "symbol": "GC=F",
      "label": "금",
      "unit": "$",
      "digits": 0
    },
    "us30y": {
      "current": 5.177999973297119,
      "prevClose": 5.190000057220459,
      "changeAbs": -0.012000083923339844,
      "changePct": -0.23121548730322314,
      "pctRank": 99.5219123505976,
      "min5y": 1.6779999732971191,
      "max5y": 5.275000095367432,
      "ma20": 5.136750054359436,
      "ma60": 5.041500051816304,
      "chg1m": 0.13499975204467773,
      "chg3m": 0.1939997673034668,
      "chg1mPct": 2.6769729550229964,
      "chg3mPct": 3.8924510289980887,
      "lastDate": "2026-08-05",
      "bars": 1255,
      "symbol": "^TYX",
      "label": "미국 30년물 금리",
      "unit": "%",
      "digits": 2
    }
  },
  "yieldSpread": 0.9010000228881836,
  "sector": {
    "groups": {
      "빅테크·SW": {
        "ret1m": 6.391345918578972,
        "ret3m": 2.289817628756796,
        "ret6m": 4.703128496493503,
        "ret1y": 9.196765992793644,
        "winRate": 60.8,
        "count": 9
      },
      "반도체": {
        "ret1m": -1.684342366968239,
        "ret3m": 19.656037882182243,
        "ret6m": 79.97359991841122,
        "ret1y": 251.0557193566306,
        "winRate": 71.5,
        "count": 15
      }
    },
    "pair": [
      "빅테크·SW",
      "반도체"
    ],
    "corr60": 0.20046998014201847,
    "corrPctRank": 1.9246861924686192,
    "corrMin5y": 0.11496792019743002,
    "corrMedian5y": 0.7115782038222396,
    "corrMax5y": 0.9346528705205663
  },
  "news": [
    {
      "headline": "Oil prices rebound after Houthis say they attacked Saudi tanker - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxOZDd2cFJ5Z2dsbTliajVMY1o5eVQ3Q3djdGVaYXA2aVhJQUROSVk5NmVjSkUydkw0YUItOGI1VFl1Wl9uZVY2SWhZLVZZY2hFTTFyaEoxM0otRWQ0Vzk4bjdEV18yYkhQS05GUzQ5dHdsY0wwemg4cG53dnZkVmx0M1pMdzl2cDk2MDBlZlN3ZVY0RVMxU2JNcE5Ta2Nrd3l4OVpvTnlIY0hscHRpOUozRVpDUQ?oc=5",
      "datetime": 1785936184,
      "headlineKo": "후티 반군이 사우디 유조선을 공격했다고 말한 후 유가 반등 - 로이터 통신"
    },
    {
      "headline": "Situational Awareness hedge fund meltdown was a warning shot for leveraged markets, BofA CEO says",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/05/bofa-brian-moynihan-situational-awareness-meltdown-was-a-warning-shot.html",
      "datetime": 1785936140,
      "headlineKo": "BofA CEO는 상황 인식 헤지펀드 붕괴는 레버리지 시장에 대한 경고 신호라고 말했습니다."
    },
    {
      "headline": "Jim Cramer's top 10 things to watch in the stock market Wednesday",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/05/jim-cramers-top-10-things-to-watch-in-the-stock-market-wednesday.html",
      "datetime": 1785935855,
      "headlineKo": "짐 크레이머가 수요일 주식시장에서 주목해야 할 10가지"
    },
    {
      "headline": "Stock bears obliterated as Nasdaq 100 logs top 10 bullish stat of past decade",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/05/stock-bears-obliterated-as-nasdaq-logs-top-10-bullish-stat-of-past-decade.html",
      "datetime": 1785932566,
      "headlineKo": "나스닥 100이 지난 10년 동안 상위 10개 강세 통계를 기록하면서 주식 약세는 사라졌습니다."
    },
    {
      "headline": "UN rights chief says Iran executed at least 56 people since March - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMitwFBVV95cUxQeW9QZjd0R3djcFhWMjBZSmhadjhVekQyU0JzYW03NWdpN3VWMVZjelZuX0Rqa0RlbkZBRXF2YkFGcFBBZk93X3U4Y01neXEybmh3QlRrcnp2WEQ2LV9Ldk9DbTlLNThQTUlEOXNrYlZCdkVzeGpGcEdvYmFhYjBEM2YxaFVPY0FWSS1TblRuMFM1TDF3MmlJRFBtWm9oLUhzY0dtQlZmblpRTEpscTdxenEzclJSbG8?oc=5",
      "datetime": 1785925918,
      "headlineKo": "유엔 인권대표, 이란이 3월 이후 최소 56명을 처형했다고 밝혔습니다 - 로이터"
    },
    {
      "headline": "Yemen's Houthis say they attacked Saudi oil tanker in Red Sea - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxNWEQwU2pxeTRYSXhNQWtrT3hmNFhmOUx6eVUzUUt4aVBtOEpub01Fa3U5S0ZOYXRmU2oyb0t4WEpRRXZ3VmwxWksyYkNRcF9GbFJvbEpkMGxWWVY5alo2NS1LdDFzMWVPdmYtV082T3JOaVpoYW5NTFNncUxHZndSdnUzMXdWWHNXQWQ3NXZXMy02MDloQ3dWTHJhWHBfS2pNVnZoUXBEcVZKQm1HZXl5Ug?oc=5",
      "datetime": 1785914877,
      "headlineKo": "예멘 후티 반군, 홍해에서 사우디 유조선 공격했다고 주장 - 로이터 통신"
    },
    {
      "headline": "Proposed Hormuz deal would give Iran control of inbound traffic, sources say - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxQUFpfZEh3NVhNLURNVl9ETWp2ak5nZEx4d0JYQ19WZ3Z6bTl3V2wyUzVLQmFnTkJrZTZtVXd1cnp2dkdXUmh0d1FXUmhfbGQ1a3dKY1ZzQ0pXQTdUcS02X1llNkdFbzFLN0k2YXk2X2JEUTVCV1RBeGdUaFA2VGFzSW9LYlRDQm5senFDSzFVRkxHaXdSazRBWUlTT1pjY00yU1Qw?oc=5",
      "datetime": 1785906660,
      "headlineKo": "제안된 호르무즈 협정으로 이란은 입국 트래픽을 통제할 수 있을 것이라고 소식통은 전했습니다. - 로이터 통신"
    },
    {
      "headline": "Trump says US held 'all-day negotiation' with Iran on Tuesday - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxOdjBkc2xFczRwS1pfZ0VISDd3R0NGc0phaktLZVFaM21pZW1ncF91VF9YSHdHc3hob2Mxc25zRmJxYlYwZFI3QXkwVTBTS0dtT3dDY3V2Nnk1SWQ3ZnF1MmZyLWoteVNENlFKdkc1QkpmTklvc0RaX3EtTndVOFBsZG0tYmJxallWYXFnRmFLQmJfaWJkRWk3TEN1QVBCOVU?oc=5",
      "datetime": 1785905280,
      "headlineKo": "트럼프, 미국이 화요일 이란과 '종일 협상'했다고 밝혔습니다 - 로이터"
    },
    {
      "headline": "China eases controls on fuel exports for a second month, sources say - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxNbHRMR3J2NzJaT2hKV1ZTem4wMWhSQVF4NnNNQ19WNXFLaUNVamQ5Slg4NjB6Y0ZpWkN0SWYxeFZrVnF5QXhGSXl6UnNyMXRFVXRQVUtsaURERFRDM25FaW9DQW9QRDZPdmpuMTNGdHVpSFNPcG1Da0VtMXNpVk1OVXVMVlVFS3RHekhiT19FelYwMFFGMVI5QnNzNkJUY0tQMWxMUk5RR0hIWDVyN293?oc=5",
      "datetime": 1785904620,
      "headlineKo": "중국, 두 달째 연료 수출 통제 완화 - 소식통에 따르면 로이터 통신"
    },
    {
      "headline": "Gulf shipping traffic steady amid uncertainty of peace talks - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxQaWpxYUZIYkdaMkhoNVRrM2ZkZ3NYdWh4aUJEb2pOa29zOFBROGFHdmxwNDZZOHhicHpOOGVlS0FGTC1QdHR4UmRVbmtacWZrc3J4empuUEt5dDNSZTJRb25obllvdEFaQTVQV1B1Q05wRlpwdVpVaEJHZW80MTBxWmViU2d3V0psZHMxMENsV0x3RzBJWXpZV0hlc3MyeWxSQ3dmZllIZzRkaGNvb2ppaQ?oc=5",
      "datetime": 1785899040,
      "headlineKo": "평화 회담의 불확실성 속에서 걸프 해운 운송은 안정적이다 - 로이터"
    },
    {
      "headline": "Stocks get AI-boost; investors on tenterhooks over Mideast peace talks - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMigwFBVV95cUxPSjNOaFJhdXRJblJMNldJM09LeFJDOXNqY2Y0R3dhcGt3S1ZyNm1peFdvVlBfN2RrNmtCYVhQa3pzenI5VlBld2c2Y0JPLTAzNWRhTWxUYWxjNEpvWGxIYlR3M2NLdGg5RnpRSmtYVVVwamJfYTZ5S1JaQ3J5QjFEQ3B0WQ?oc=5",
      "datetime": 1785893820,
      "headlineKo": "주식은 AI 강화를 받습니다. 중동 평화 회담에 대한 투자자들 - Reuters"
    },
    {
      "headline": "Yen drifts after intervention whirlwind; Iran optimism dents dollar - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMixwFBVV95cUxNRFFDTkhtVFJsMkg2YzlLQzd2c0c0aXhwZHl2M3lFZE1vdnNka1ZnbFNwalhDZ0x5Y3ZZQWZ5ZUw4bGwwdzVzU1QxUXNpT3FEMzJhTVVJTEhqTG5KTDZqS2l5Qmc0dUZ1THk5YTFpckwxaE1weFNYUFRtd0xFd2JVc2RvQ1FTQ3FjUkk5REEtTk50cWdwdzVPb3p6Q1lkOVNYTEdaWmE1UkhicVlrY004TkpvOGJSWGxVMmR5bmZEcGpPX09ETWFV?oc=5",
      "datetime": 1785893760,
      "headlineKo": "엔화는 개입 후 회오리바람처럼 표류합니다. 이란 낙관주의가 달러 하락 - Reuters"
    }
  ],
  "_fetched_at": 1785938402.2501743,
  "_updated_label": "2026-08-05 23:00"
};
