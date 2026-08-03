// 자동 생성 파일 - buy_signal_telegram.py 실행 시마다 갱신됨. 직접 수정하지 마세요.
// 시장 환경 지표(야후) + 시장 헤드라인(Finnhub). 이 파일이 없어도 대시보드는 정상 동작함.
const MARKET_DATA = {
  "indicators": {
    "vix": {
      "current": 16.1200008392334,
      "prevClose": 15.989999771118164,
      "changeAbs": 0.13000106811523438,
      "changePct": 0.813014821613994,
      "pctRank": 30.65286624203822,
      "min5y": 11.859999656677246,
      "max5y": 52.33000183105469,
      "ma20": 17.254499864578246,
      "ma60": 17.42366665204366,
      "chg1m": -0.029998779296875,
      "chg3m": -2.1700000762939453,
      "chg1mPct": -0.18575095978612186,
      "chg3mPct": -11.864406602909014,
      "lastDate": "2026-08-03",
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
      "current": 79.63999938964844,
      "prevClose": 84.66999816894531,
      "changeAbs": -5.029998779296875,
      "changePct": -5.940709682383983,
      "pctRank": 61.575178997613364,
      "min5y": 55.27000045776367,
      "max5y": 123.69999694824219,
      "ma20": 80.83349990844727,
      "ma60": 85.07749989827474,
      "chg1m": 10.949996948242188,
      "chg3m": -22.300003051757812,
      "chg1mPct": 15.941180024826354,
      "chg3mPct": -21.875615575520076,
      "lastDate": "2026-08-03",
      "bars": 1257,
      "symbol": "CL=F",
      "label": "WTI 유가",
      "unit": "$",
      "digits": 1
    },
    "dollar": {
      "current": 99.74700164794922,
      "prevClose": 99.80000305175781,
      "changeAbs": -0.05300140380859375,
      "changePct": -0.05310761742272333,
      "pctRank": 34.049323786793956,
      "min5y": 92.04000091552734,
      "max5y": 114.11000061035156,
      "ma20": 100.88785095214844,
      "ma60": 100.13661702473958,
      "chg1m": -1.1129989624023438,
      "chg3m": 1.5370025634765625,
      "chg1mPct": -1.1035087801577044,
      "chg3mPct": 1.5650163708428015,
      "lastDate": "2026-08-03",
      "bars": 1257,
      "symbol": "DX-Y.NYB",
      "label": "달러지수(DXY)",
      "unit": "",
      "digits": 1
    },
    "gold": {
      "current": 4114.2001953125,
      "prevClose": 4049.10009765625,
      "changeAbs": 65.10009765625,
      "changePct": 1.6077670614745248,
      "pctRank": 87.66905330151154,
      "min5y": 1623.300048828125,
      "max5y": 5318.39990234375,
      "ma20": 4065.1350341796874,
      "ma60": 4266.120007324219,
      "chg1m": 1.5,
      "chg3m": -515.69970703125,
      "chg1mPct": 0.03647238866838976,
      "chg3mPct": -11.138463420563202,
      "lastDate": "2026-08-03",
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
        "ret1m": 0.2272710310122772,
        "ret3m": -2.2704383872973577,
        "ret6m": -5.181507575322952,
        "ret1y": 0.9306339489453475,
        "winRate": 60.8,
        "count": 9
      },
      "반도체": {
        "ret1m": -18.903662728156757,
        "ret3m": 15.522802326916295,
        "ret6m": 59.97092035297047,
        "ret1y": 210.81732601089846,
        "winRate": 71.5,
        "count": 15
      }
    },
    "pair": [
      "빅테크·SW",
      "반도체"
    ],
    "corr60": 0.14835791704965293,
    "corrPctRank": 0.502092050209205,
    "corrMin5y": 0.11496792019743002,
    "corrMedian5y": 0.7115782038222396,
    "corrMax5y": 0.9346528705205663
  },
  "news": [
    {
      "headline": "Index snub to test Indian bonds; rupee, RBI policy and US-Iran war in focus - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxQNG91Uk0wWkJsZHc4anBQS3JDWktTdnJBR2d1eVN3MzM4ZTF0S1UyX0NpQ3NwdmxyX0dldXNIMzBTSlE1aUpUYjlmOURpR2dwVDREX05pR1ZpcGhJZnlwV3dKcnpFMTg5WWRvUTFFT3ZFRnYtQ1NKSmpldVAyTlpfYmxPZVljQnBVRFN2M1NJMEtXUTVIbjVhRDVrb2tGZFZSTzdYYUNYa1Z0eWVqYjdhOQ?oc=5",
      "datetime": 1785720840,
      "headlineKo": "인도 채권을 테스트하기 위한 지수 스너브; 루피, RBI 정책 및 미국-이란 전쟁에 초점 - Reuters"
    },
    {
      "headline": "Oil slumps on hopes of Iran deal, yen firms after intervention - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMigwFBVV95cUxQUjBjdHpEdEdMdVNpbVprQmRvNG9JTzl0ZHB4SkNmWUxqT2hNUG8xcW96U1R2czNKWHVMYXRqY2gxR1pHTzZ4RjlpaDgzUnM3U0dCNURmZDhPUUhVTnRuUFhYcGFmVHdoOWg2a3RJNTNGQktBU3pvZVZGSS1EVUJ1QzlVbw?oc=5",
      "datetime": 1785718980,
      "headlineKo": "이란 협상 희망으로 유가 폭락, 개입 후 엔화 기업 - 로이터 통신"
    },
    {
      "headline": "Gold firms as oil prices slump after Trump holds off on Iran attack - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxNTnkxZDh5TElCa1dZeUtDT2JfblI5ZFJuQkZNQ1pvbHlkcWxHRUVfMk51N2t0ZDUtbEhOYW9aVjg5d3lMSkNXYlFMc0I5Z3o1bjh4c0pkZ3BsWkRYeWhOalNoOUZPN3pvYVRSb1NnT21rZy1TamRFMHN2MUp1WjhoSmZaT0prMExjTVk1aThUbHAwNEo3MmpsbTI2UFdsY2Z2Y0RlT2RB?oc=5",
      "datetime": 1785717660,
      "headlineKo": "트럼프가 이란 공격을 보류하자 유가가 폭락하면서 금 회사들 - 로이터 통신"
    },
    {
      "headline": "Oil tumbles as Trump cancels attack on Iran to reach nuclear deal - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxOVnBOaGh1VXBaaGQwVmloSzlPcmg5aFdQeENKS3JtNi1wQTZlQTRBUm02ODRrYkNVZkNDREwtTTdMeUhlNV94QjctaFhpMWhTWVVJaF9xeVhWdEdKZXBMbFA4alVQaDBXbnMzczBqRnVBUlVrVUJJTFhLQjdpSU9SV2lHV1FQd0hvOEs0QkZwLVZfUDhtSkVGUU02T2tPeDFXaU5SaWRtUWt3cjhE?oc=5",
      "datetime": 1785715860,
      "headlineKo": "트럼프가 이란에 대한 핵 협상을 취소하자 유가는 하락했다 - 로이터"
    },
    {
      "headline": "Two tankers with Saudi oil exit Red Sea over weekend, data shows - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxOdEt0RUhnRlVGV0xuNmhOTDZaaVo3NVI3MWhXdERDQ3BaX19SMkh5bmlONEl5YjlRSEtyc0p0cVZGblYtd3FPdHRtX0V2RldWOVRpdzY1RTV3YnZOSk02X0gzNDhyeEpaclNaVHR1MlJVa1plZUM4a3FqOFVoYXdiY3lBYWU0MW0tcTVoSml1TFhKN0Q2aXhKQVFGNk16TnhYcGhxSXVaQlVISndNWDNyblhPM2xHajhD?oc=5",
      "datetime": 1785714060,
      "headlineKo": "사우디 석유를 실은 유조선 두 척이 주말 동안 홍해를 빠져나갔다는 데이터가 표시됨 - Reuters"
    },
    {
      "headline": "Trump says Iran talks to take place on Monday, sets no deadline for deal - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMitwFBVV95cUxOdzJzZHNCZzdLcHhDVWdCSEpLMEpVckJUQXFxcjhrcEdHWmlWQ183T3g0dUtwWldQLTVfQ0FCbGRaXzV3Y2tnS0laLS1LeU1KcGJKRVhvX2xyV1I1Q0cxSDF0dWJ6ZWpaOFZJTWZac045VWduTklfeUl2QUhKcXZtbE9EY1MtR0p0MUNZOXEtbEpFejVqeXFQaHRRcVFBbkNhUU41eGM3ZldtVFg3U09UY205bjRlUFU?oc=5",
      "datetime": 1785712980,
      "headlineKo": "트럼프 \"이란 회담은 월요일에 열릴 것\""
    },
    {
      "headline": "Here's my power rankings for the big 4 hyperscalers after this earnings season",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/02/heres-my-power-rankings-for-the-big-4-hyperscalers-after-this-earnings-season.html",
      "datetime": 1785702464,
      "headlineKo": "이번 어닝 시즌 이후 Big 4 하이퍼스케일러에 대한 내 파워 순위는 다음과 같습니다."
    },
    {
      "headline": "Crew of Iranian ship hit in Ukrainian attack returns home, news agency says - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMivwFBVV95cUxQQUpTTWg4MEVxOG9ZTExoRTFzZW94TDNkYTFvUVpWMlJFU0JBbE1hRVkta2k5ZmhISGJqMTdjb2Z1TXVncEdZWmxIeUppazRrMzRSMWo2aTJydTM2ekNneWhXTEFaSjVTQzMwLUhNM09GUTN6Y3Z3c1VUbmxIcG9RZXgwWmRuMjQ0OEJsTWdqWEJfYlJ6TU1zRjNvNzBjaGxQMHBiY3Rmc0ZmdWpHd1o2dEdfOHpkSjI3OVVrb084cw?oc=5",
      "datetime": 1785698225,
      "headlineKo": "우크라이나 공격에 피격된 이란 선박의 선원들이 귀국했다고 통신사가 밝혔습니다 - 로이터 통신"
    },
    {
      "headline": "Here are the 2 big things we're watching in the stock market in the week ahead",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/02/here-are-the-2-big-things-were-watching-in-the-stock-market-in-the-week-ahead.html",
      "datetime": 1785684961,
      "headlineKo": "다음 주에 주식 시장에서 우리가 주목해야 할 2가지 주요 사항은 다음과 같습니다."
    },
    {
      "headline": "Why people are dropping out of the workforce and not looking for new jobs: 'The market wore me down'",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/02/why-people-are-dropping-out-of-the-workforce-and-not-looking-for-new-jobs-the-market-wore-me-down.html",
      "datetime": 1785681001,
      "headlineKo": "사람들이 직장을 그만두고 새 일자리를 찾지 않는 이유: '시장이 나를 지치게 했습니다'"
    },
    {
      "headline": "PODCAST: Iran pause, Moscow restaurant attack and GLP-1 clothes shopping - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxOSFVQRnBwb05yMjRYVHRWYTZxWDVNZlpJQWs0amxqSDBYMTRYWUx6V2UyWUI0aGFBaWdScWR4eFU0VC1iR0RLN1RUZFZ6RG5WRnpyUl83WG0tUGNqLWZvRTA2Zy1aSUV5NnBRdjducDRGUEVyU3hwaVZJSVhjRVpLY1NkRnlmTFh1MUY5djJXZmlGbFB5d0p0Mk1uSGd0SkNyUFNVSTlR?oc=5",
      "datetime": 1785680940,
      "headlineKo": "팟캐스트: 이란 일시 정지, 모스크바 레스토랑 공격 및 GLP-1 의류 쇼핑 - Reuters"
    },
    {
      "headline": "Gulf stocks rise as Iran de-escalation hopes, earnings lift sentiment - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxOZnZ5dk1rM0dBSk5iSjEwVV9FNUJRVWJhLXlEY2lKRHAwb0ZSUU5INVUwVFpKV3M3aGhVNmZNSDMxV1JQNnZDWjhwaFhITnVhUUt5X0tCZ2pBTk1rNEg4ZTQ5MUJzRVI2b2hCS1BqYXpKTHBabmc5WHpQajZuS3BfNU5FUHR1cHlfUmQ0bWtFLWdyUFZoaXF6d2ZCUWRPX2JROU5fclRkM3NyOVNXZW52YzdRUkRBRWEtZ3ZF?oc=5",
      "datetime": 1785674932,
      "headlineKo": "이란의 긴장 완화 희망, 기업실적 상승 심리로 걸프 주식 상승 - 로이터"
    }
  ],
  "_fetched_at": 1785742855.7635756,
  "_updated_label": "2026-08-03 16:41"
};
