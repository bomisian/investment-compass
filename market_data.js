// 자동 생성 파일 - buy_signal_telegram.py 실행 시마다 갱신됨. 직접 수정하지 마세요.
// 시장 환경 지표(야후) + 시장 헤드라인(Finnhub). 이 파일이 없어도 대시보드는 정상 동작함.
const MARKET_DATA = {
  "indicators": {
    "vix": {
      "current": 16.110000610351562,
      "prevClose": 15.989999771118164,
      "changeAbs": 0.12000083923339844,
      "changePct": 0.7504743023833509,
      "pctRank": 30.573248407643312,
      "min5y": 11.859999656677246,
      "max5y": 52.33000183105469,
      "ma20": 17.253999853134154,
      "ma60": 17.423499981562298,
      "chg1m": -0.03999900817871094,
      "chg3m": -2.1800003051757812,
      "chg1mPct": -0.247671883117673,
      "chg3mPct": -11.919082537196948,
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
      "current": 80.16999816894531,
      "prevClose": 84.66999816894531,
      "changeAbs": -4.5,
      "changePct": -5.31475150267628,
      "pctRank": 63.40493237867939,
      "min5y": 55.27000045776367,
      "max5y": 123.69999694824219,
      "ma20": 80.85999984741211,
      "ma60": 85.08633321126302,
      "chg1m": 11.479995727539062,
      "chg3m": -21.770004272460938,
      "chg1mPct": 16.712760692258957,
      "chg3mPct": -21.35570311073324,
      "lastDate": "2026-08-03",
      "bars": 1257,
      "symbol": "CL=F",
      "label": "WTI 유가",
      "unit": "$",
      "digits": 1
    },
    "dollar": {
      "current": 99.83399963378906,
      "prevClose": 99.80000305175781,
      "changeAbs": 0.03399658203125,
      "changePct": 0.034064710412502544,
      "pctRank": 34.685759745425614,
      "min5y": 92.04000091552734,
      "max5y": 114.11000061035156,
      "ma20": 100.89220085144044,
      "ma60": 100.13806699117025,
      "chg1m": -1.0260009765625,
      "chg3m": 1.6240005493164062,
      "chg1mPct": -1.01725259801079,
      "chg3mPct": 1.6536000045367747,
      "lastDate": "2026-08-03",
      "bars": 1257,
      "symbol": "DX-Y.NYB",
      "label": "달러지수(DXY)",
      "unit": "",
      "digits": 1
    },
    "gold": {
      "current": 4114.5,
      "prevClose": 4049.10009765625,
      "changeAbs": 65.39990234375,
      "changePct": 1.6151712915569951,
      "pctRank": 87.66905330151154,
      "min5y": 1623.300048828125,
      "max5y": 5318.39990234375,
      "ma20": 4065.1500244140625,
      "ma60": 4266.12500406901,
      "chg1m": 1.7998046875,
      "chg3m": -515.39990234375,
      "chg1mPct": 0.04376211739312652,
      "chg3mPct": -11.13198801734016,
      "lastDate": "2026-08-03",
      "bars": 1257,
      "symbol": "GC=F",
      "label": "금",
      "unit": "$",
      "digits": 0
    },
    "us30y": {
      "current": 5.275000095367432,
      "prevClose": 5.208000183105469,
      "changeAbs": 0.06699991226196289,
      "changePct": 1.286480604960571,
      "pctRank": 99.9203187250996,
      "min5y": 1.6779999732971191,
      "max5y": 5.275000095367432,
      "ma20": 5.111850070953369,
      "ma60": 5.029166714350382,
      "chg1m": 0.30900001525878906,
      "chg3m": 0.28800010681152344,
      "chg1mPct": 6.2223119265843625,
      "chg3mPct": 5.775017194153233,
      "lastDate": "2026-07-31",
      "bars": 1255,
      "symbol": "^TYX",
      "label": "미국 30년물 금리",
      "unit": "%",
      "digits": 2
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
      "headline": "Iran says no current talks with U.S. - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMikgFBVV95cUxQTE5hZ0ZnQjBGVFdjTV9kRkdQWm9oaWd0VG9UQ084WGJvRmFoNElkSG5Ec0xocHdYTDdUM1JTd3RYQ0kybnN0dXB5T2hwNFEwSktaZ05FNGxzbUFwd0FqWEl4WWQyVzBCaVowNUpTWGNad19MdERreFFYSEYwWkVuekpwOW1VeE5lVkR6eDBaOGdPZw?oc=5",
      "datetime": 1785742195,
      "headlineKo": "이란, 현재 미국과 대화가 없다고 밝혔다 - 로이터"
    },
    {
      "headline": "Iran war ushers in oil refining golden era. It won’t last - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxQYmQzdlBDbmtIRE9EaFVuRHRPd0pzYUtkY0VyT1FPYmVlaGsxUXJnSWt1emxRQ3p2ZFY5aXVPSGpNQVZaM0hkMThIREtfRU1YcTdQSXFrYU1FNlAyeWYxVGZoeHFWMG5kcm9rUUxzd2Z0OUY0REtwWUFyNGlTczgybWxmRng3azZackV2U2NianBjeVdDbGxXLUhLdkxhMTVvR0VsQzVPb2xxcW9zTDFLMHF3bFFpaE1JckJ3NVh3?oc=5",
      "datetime": 1785736860,
      "headlineKo": "이란 전쟁은 석유정제의 황금시대를 열었습니다. 지속되지는 않을 것이다 - 로이터"
    },
    {
      "headline": "Iran executes two people accused of working for Israel - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxObVpPMnE4MnRQckNZZXg0SU9TYTI4WG5qdmc2aUhydFU0LXlJS04taFVoOU5idUFqb3ZtSFZsVUlpYUhackVhN2lGQUlYQ3hqekNxYkkxd1E1aDU2TGVZTEJQc3V5U1EwVzJLRDdiQmdITzZFYlI4TWZzOTBtT2c5bTREN2tvVVZWUk1hb1EwSlVmRHpSaVJvTDdINzFCaTFHRFI0?oc=5",
      "datetime": 1785734940,
      "headlineKo": "이란, 이스라엘을 위해 일한 혐의로 두 명 처형 - 로이터"
    },
    {
      "headline": "Indian stocks rise on Brent dip, shock-free earnings season - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMingFBVV95cUxPMmpzT2p3MGlZN3V1QkI3c1I0X0dqVTk4Z3BsMjNqcWljM1BGZ19FbThiNHUyR3FXTjE5SE5IZGJnUHR3UHloUUZNZkdtS3phVGRRUTVQdTR3WW9FSHM5Q3VQY2czUFhEZE5JLW5UN0pkNWh3LS1tXzlvRzhfUWdJMjZ5blQtUENIR2NwaktkcVJiX0dHQ3hLS3FnVUlIdw?oc=5",
      "datetime": 1785724740,
      "headlineKo": "충격 없는 어닝 시즌, 브렌트유 하락으로 인도 증시 상승 - Reuters"
    },
    {
      "headline": "Index snub to test Indian bonds; rupee, RBI policy and US-Iran war in focus - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxQNG91Uk0wWkJsZHc4anBQS3JDWktTdnJBR2d1eVN3MzM4ZTF0S1UyX0NpQ3NwdmxyX0dldXNIMzBTSlE1aUpUYjlmOURpR2dwVDREX05pR1ZpcGhJZnlwV3dKcnpFMTg5WWRvUTFFT3ZFRnYtQ1NKSmpldVAyTlpfYmxPZVljQnBVRFN2M1NJMEtXUTVIbjVhRDVrb2tGZFZSTzdYYUNYa1Z0eWVqYjdhOQ?oc=5",
      "datetime": 1785722790,
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
      "headline": "Oil falls after Trump cancels attack on Iran to seek nuclear deal - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxOVnBOaGh1VXBaaGQwVmloSzlPcmg5aFdQeENKS3JtNi1wQTZlQTRBUm02ODRrYkNVZkNDREwtTTdMeUhlNV94QjctaFhpMWhTWVVJaF9xeVhWdEdKZXBMbFA4alVQaDBXbnMzczBqRnVBUlVrVUJJTFhLQjdpSU9SV2lHV1FQd0hvOEs0QkZwLVZfUDhtSkVGUU02T2tPeDFXaU5SaWRtUWt3cjhE?oc=5",
      "datetime": 1785715860,
      "headlineKo": "트럼프가 이란에 대한 핵 협상을 위한 공격을 취소한 후 유가 하락 - 로이터"
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
    }
  ],
  "_fetched_at": 1785748159.3573632,
  "_updated_label": "2026-08-03 18:09"
};
