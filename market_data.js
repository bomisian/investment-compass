// 자동 생성 파일 - buy_signal_telegram.py 실행 시마다 갱신됨. 직접 수정하지 마세요.
// 시장 환경 지표(야후) + 시장 헤드라인(Finnhub). 이 파일이 없어도 대시보드는 정상 동작함.
const MARKET_DATA = {
  "indicators": {
    "vix": {
      "current": 16.31999969482422,
      "prevClose": 16.5,
      "changeAbs": -0.18000030517578125,
      "changePct": -1.0909109404592803,
      "pctRank": 32.882165605095544,
      "min5y": 11.859999656677246,
      "max5y": 52.33000183105469,
      "ma20": 17.230999851226805,
      "ma60": 17.373499965667726,
      "chg1m": 0.1900005340576172,
      "chg3m": -1.0699996948242188,
      "chg1mPct": 1.1779326964861858,
      "chg3mPct": -6.152959933173697,
      "lastDate": "2026-08-05",
      "bars": 1256,
      "symbol": "^VIX",
      "label": "VIX (공포지수)",
      "unit": "",
      "digits": 2
    },
    "us10y": {
      "current": 4.623000144958496,
      "prevClose": 4.626999855041504,
      "changeAbs": -0.0039997100830078125,
      "changePct": -0.08644284003272215,
      "pctRank": 95.37848605577689,
      "min5y": 1.2170000076293945,
      "max5y": 4.98799991607666,
      "ma20": 4.621649980545044,
      "ma60": 4.534083310763041,
      "chg1m": 0.09400033950805664,
      "chg3m": 0.2070002555847168,
      "chg1mPct": 2.075520943828075,
      "chg3mPct": 4.687505905125168,
      "lastDate": "2026-08-05",
      "bars": 1255,
      "symbol": "^TNX",
      "label": "미국 10년물 금리",
      "unit": "%",
      "digits": 2
    },
    "us3m": {
      "current": 3.7319998741149902,
      "prevClose": 3.7300000190734863,
      "changeAbs": 0.0019998550415039062,
      "changePct": 0.0536154163881388,
      "pctRank": 37.60956175298805,
      "min5y": 0.019999999552965164,
      "max5y": 5.3480000495910645,
      "ma20": 3.720799970626831,
      "ma60": 3.662099997202555,
      "chg1m": 0.006999969482421875,
      "chg3m": 0.13199996948242188,
      "chg1mPct": 0.18791864863449836,
      "chg3mPct": 3.6666659160896384,
      "lastDate": "2026-08-05",
      "bars": 1255,
      "symbol": "^IRX",
      "label": "미국 3개월 금리",
      "unit": "%",
      "digits": 2
    },
    "oil": {
      "current": 75.12999725341797,
      "prevClose": 75.7699966430664,
      "changeAbs": -0.6399993896484375,
      "changePct": -0.8446607074081254,
      "pctRank": 45.50517104216388,
      "min5y": 55.27000045776367,
      "max5y": 123.69999694824219,
      "ma20": 81.21549949645996,
      "ma60": 84.4336664835612,
      "chg1m": 4.689994812011719,
      "chg3m": -27.139999389648438,
      "chg1mPct": 6.658141183218971,
      "chg3mPct": -26.537596832402404,
      "lastDate": "2026-08-05",
      "bars": 1257,
      "symbol": "CL=F",
      "label": "WTI 유가",
      "unit": "$",
      "digits": 1
    },
    "dollar": {
      "current": 99.68499755859375,
      "prevClose": 99.88999938964844,
      "changeAbs": -0.2050018310546875,
      "changePct": -0.20522758264821028,
      "pctRank": 33.65155131264916,
      "min5y": 92.04000091552734,
      "max5y": 114.11000061035156,
      "ma20": 100.7677505493164,
      "ma60": 100.19825032552083,
      "chg1m": -1.4550018310546875,
      "chg3m": 1.2049942016601562,
      "chg1mPct": -1.4386017795483645,
      "chg3mPct": 1.2235927706995933,
      "lastDate": "2026-08-05",
      "bars": 1257,
      "symbol": "DX-Y.NYB",
      "label": "달러지수(DXY)",
      "unit": "",
      "digits": 1
    },
    "gold": {
      "current": 4306.0,
      "prevClose": 4095.39990234375,
      "changeAbs": 210.60009765625,
      "changePct": 5.142357344290749,
      "pctRank": 90.13524264120922,
      "min5y": 1623.300048828125,
      "max5y": 5318.39990234375,
      "ma20": 4070.3700317382813,
      "ma60": 4247.79833984375,
      "chg1m": 160.7001953125,
      "chg3m": -249.7998046875,
      "chg1mPct": 3.876684507373397,
      "chg3mPct": -5.4831163658789155,
      "lastDate": "2026-08-05",
      "bars": 1257,
      "symbol": "GC=F",
      "label": "금",
      "unit": "$",
      "digits": 0
    },
    "us30y": {
      "current": 5.168999671936035,
      "prevClose": 5.190000057220459,
      "changeAbs": -0.021000385284423828,
      "changePct": -0.40463169658750897,
      "pctRank": 99.44223107569721,
      "min5y": 1.6779999732971191,
      "max5y": 5.275000095367432,
      "ma20": 5.136300039291382,
      "ma60": 5.04135004679362,
      "chg1m": 0.12599945068359375,
      "chg3m": 0.1849994659423828,
      "chg1mPct": 2.498501787737409,
      "chg3mPct": 3.711867140773919,
      "lastDate": "2026-08-05",
      "bars": 1255,
      "symbol": "^TYX",
      "label": "미국 30년물 금리",
      "unit": "%",
      "digits": 2
    }
  },
  "yieldSpread": 0.8910002708435059,
  "sector": {
    "groups": {
      "빅테크·SW": {
        "ret1m": 6.516421562763797,
        "ret3m": 2.410071440032535,
        "ret6m": 4.826219440891233,
        "ret1y": 9.32513974097331,
        "winRate": 60.8,
        "count": 9
      },
      "반도체": {
        "ret1m": -3.5900462809373535,
        "ret3m": 17.336682194472353,
        "ret6m": 76.48507731648951,
        "ret1y": 244.25102237849225,
        "winRate": 71.5,
        "count": 15
      }
    },
    "pair": [
      "빅테크·SW",
      "반도체"
    ],
    "corr60": 0.2006673952695228,
    "corrPctRank": 1.9246861924686192,
    "corrMin5y": 0.11496792019743002,
    "corrMedian5y": 0.7115782038222396,
    "corrMax5y": 0.9346528705205663
  },
  "news": [
    {
      "headline": "Disney weighs free ad-supported streaming, says it has sold out Super Bowl ad spots",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/05/disney-free-ad-supported-streaming-super-bowl-ads.html",
      "datetime": 1785941068,
      "headlineKo": "디즈니는 무료 광고 지원 스트리밍에 무게를 두고 슈퍼볼 광고 스팟을 매진했다고 밝혔습니다."
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
      "headline": "Israeli military issues evacuation warning to village in southern Lebanon - reuters.com",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxPSUNJWWdZUW9teWxlNDE2eWVZWTFmd0JQdmwwYUNvSEpES1BhMjBJNF9LczlwUTZkaTZjMm5MNFhEUFN1RnpZclZHamljVnlGcW5GdkFMclYyUjQ4dEpHRWwtNjJLdjNoNWx5YlU3Q1FIUmhoV1hxMktXNnZXanZLLW9YS1JjRGp6ZkNMbTNGOVlETVRSUGREMnZ5dDVhUjYyWlB1RzBwenhtUDg3dDdIYVpoTXBlN2dFWTkyVnJn?oc=5",
      "datetime": 1785934768,
      "headlineKo": "이스라엘군, 레바논 남부 마을에 대피 경고 발령 - reuters.com"
    },
    {
      "headline": "Stock bears obliterated as Nasdaq 100 logs top 10 bullish stat of past decade",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/05/stock-bears-obliterated-as-nasdaq-logs-top-10-bullish-stat-of-past-decade.html",
      "datetime": 1785932566,
      "headlineKo": "나스닥 100이 지난 10년 동안 상위 10개 강세 통계를 기록하면서 주식 약세는 사라졌습니다."
    },
    {
      "headline": "The box office is on pace for its best year since the pandemic. But fewer people are going to the movies. - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxPd0dNLTBvc0hvdmxqZ1pJdDIydHRvYUVHYWUzV21ETFhFVXU1U1ZZRTFXTVRka2J1WGRIN3hRN2RPTXFacXpoYWMwSHBLV3kzOGtFVGhNU1pITmpldFlaalEyQ2dOMVVubWp4Z09VUmRLOVZsSGlnMlRQdDFJVFg2RHdnd1Rmc0d0bEVxMWJMaFItY0F6QXpidHZqc0xydzRHZm1OSDVuOG83cTNud0l5azJUTQ?oc=5",
      "datetime": 1785930902,
      "headlineKo": "박스오피스는 팬데믹 이후 최고의 한 해를 맞이하고 있습니다. 하지만 영화를 보러 가는 사람은 점점 줄어들고 있습니다. - 로이터"
    },
    {
      "headline": "UN rights chief says Iran executed at least 56 people since March - reuters.com",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMitwFBVV95cUxQeW9QZjd0R3djcFhWMjBZSmhadjhVekQyU0JzYW03NWdpN3VWMVZjelZuX0Rqa0RlbkZBRXF2YkFGcFBBZk93X3U4Y01neXEybmh3QlRrcnp2WEQ2LV9Ldk9DbTlLNThQTUlEOXNrYlZCdkVzeGpGcEdvYmFhYjBEM2YxaFVPY0FWSS1TblRuMFM1TDF3MmlJRFBtWm9oLUhzY0dtQlZmblpRTEpscTdxenEzclJSbG8?oc=5",
      "datetime": 1785925918,
      "headlineKo": "유엔 인권대표, 이란이 3월 이후 최소 56명을 처형했다고 밝혔습니다."
    },
    {
      "headline": "Euro zone services revival drives activity in July but outlook clouded by Iran war - reuters.com",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMixwFBVV95cUxQbUpBLVkzZ1FST0VMdzh1MmRUdFBYRXFpbmw0Y2swOUU2OGVBWnNYZzBZbGhIV19iYWp2ODVfQm1FTXBqaFRXU1MtRWI0R2VwVzZnNW1iV0hmbk8taEVaT3JNdU10ZmVTbGYzLXB2YW5QYUN2SEFWanNhZXN6YTViN0k1blh0SG9EeTdpaTZYNXlkSVZ3ZExTR2NyMnlfNnJheGFJZVRYOV9VdzRuYW1LbWZOdGhpdnBtYkIyellKTFlCQWpjc0JF?oc=5",
      "datetime": 1785920538,
      "headlineKo": "유로존 서비스 회복으로 7월 활동 주도했지만 이란 전쟁으로 전망 불투명 - reuters.com"
    },
    {
      "headline": "Yemen's Houthis say they attacked Saudi oil tanker in Red Sea - reuters.com",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxNWEQwU2pxeTRYSXhNQWtrT3hmNFhmOUx6eVUzUUt4aVBtOEpub01Fa3U5S0ZOYXRmU2oyb0t4WEpRRXZ3VmwxWksyYkNRcF9GbFJvbEpkMGxWWVY5alo2NS1LdDFzMWVPdmYtV082T3JOaVpoYW5NTFNncUxHZndSdnUzMXdWWHNXQWQ3NXZXMy02MDloQ3dWTHJhWHBfS2pNVnZoUXBEcVZKQm1HZXl5Ug?oc=5",
      "datetime": 1785914877,
      "headlineKo": "예멘 후티 반군, 홍해에서 사우디 유조선 공격했다고 주장 - reuters.com"
    },
    {
      "headline": "Proposed Hormuz deal would give Iran control of inbound traffic, sources say - reuters.com",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxQUFpfZEh3NVhNLURNVl9ETWp2ak5nZEx4d0JYQ19WZ3Z6bTl3V2wyUzVLQmFnTkJrZTZtVXd1cnp2dkdXUmh0d1FXUmhfbGQ1a3dKY1ZzQ0pXQTdUcS02X1llNkdFbzFLN0k2YXk2X2JEUTVCV1RBeGdUaFA2VGFzSW9LYlRDQm5senFDSzFVRkxHaXdSazRBWUlTT1pjY00yU1Qw?oc=5",
      "datetime": 1785906660,
      "headlineKo": "제안된 호르무즈 협정은 이란이 들어오는 트래픽을 통제할 수 있게 할 것이라고 소식통은 말합니다 - reuters.com"
    },
    {
      "headline": "Trump says US held 'all-day negotiation' with Iran on Tuesday - reuters.com",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxOdjBkc2xFczRwS1pfZ0VISDd3R0NGc0phaktLZVFaM21pZW1ncF91VF9YSHdHc3hob2Mxc25zRmJxYlYwZFI3QXkwVTBTS0dtT3dDY3V2Nnk1SWQ3ZnF1MmZyLWoteVNENlFKdkc1QkpmTklvc0RaX3EtTndVOFBsZG0tYmJxallWYXFnRmFLQmJfaWJkRWk3TEN1QVBCOVU?oc=5",
      "datetime": 1785905280,
      "headlineKo": "트럼프, 미국이 화요일 이란과 '하루 종일 협상'을 가졌다고 밝혔습니다 - reuters.com"
    },
    {
      "headline": "China eases controls on fuel exports for a second month, sources say - reuters.com",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxNbHRMR3J2NzJaT2hKV1ZTem4wMWhSQVF4NnNNQ19WNXFLaUNVamQ5Slg4NjB6Y0ZpWkN0SWYxeFZrVnF5QXhGSXl6UnNyMXRFVXRQVUtsaURERFRDM25FaW9DQW9QRDZPdmpuMTNGdHVpSFNPcG1Da0VtMXNpVk1OVXVMVlVFS3RHekhiT19FelYwMFFGMVI5QnNzNkJUY0tQMWxMUk5RR0hIWDVyN293?oc=5",
      "datetime": 1785904620,
      "headlineKo": "중국, 두 달째 연료 수출 규제 완화 - 소식통에 따르면 - reuters.com"
    }
  ],
  "_fetched_at": 1785942002.231091,
  "_updated_label": "2026-08-06 00:00"
};
