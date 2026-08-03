// 자동 생성 파일 - buy_signal_telegram.py 실행 시마다 갱신됨. 직접 수정하지 마세요.
// 시장 환경 지표(야후) + 시장 헤드라인(Finnhub). 이 파일이 없어도 대시보드는 정상 동작함.
const MARKET_DATA = {
  "indicators": {
    "vix": {
      "current": 15.949999809265137,
      "prevClose": 15.989999771118164,
      "changeAbs": -0.039999961853027344,
      "changePct": -0.2501561127303893,
      "pctRank": 28.742038216560513,
      "min5y": 11.859999656677246,
      "max5y": 52.33000183105469,
      "ma20": 17.245999813079834,
      "ma60": 17.42083330154419,
      "chg1m": -0.19999980926513672,
      "chg3m": -2.340001106262207,
      "chg1mPct": -1.2383889411096942,
      "chg3mPct": -12.793881843251615,
      "lastDate": "2026-08-03",
      "bars": 1256,
      "symbol": "^VIX",
      "label": "VIX (공포지수)",
      "unit": "",
      "digits": 2
    },
    "us10y": {
      "current": 4.675999641418457,
      "prevClose": 4.744999885559082,
      "changeAbs": -0.069000244140625,
      "changePct": -1.454167456370655,
      "pctRank": 97.52988047808765,
      "min5y": 1.1759999990463257,
      "max5y": 4.98799991607666,
      "ma20": 4.6135499477386475,
      "ma60": 4.525683307647705,
      "chg1m": 0.19099950790405273,
      "chg3m": 0.29799985885620117,
      "chg1mPct": 4.258628811999328,
      "chg3mPct": 6.806758192249032,
      "lastDate": "2026-08-03",
      "bars": 1255,
      "symbol": "^TNX",
      "label": "미국 10년물 금리",
      "unit": "%",
      "digits": 2
    },
    "us3m": {
      "current": 3.690000057220459,
      "prevClose": 3.681999921798706,
      "changeAbs": 0.00800013542175293,
      "changePct": 0.21727690363026292,
      "pctRank": 36.01593625498008,
      "min5y": 0.019999999552965164,
      "max5y": 5.3480000495910645,
      "ma20": 3.719599974155426,
      "ma60": 3.657450000445048,
      "chg1m": 0.02200007438659668,
      "chg3m": 0.11500000953674316,
      "chg1mPct": 0.599783928286707,
      "chg3mPct": 3.2167834406394764,
      "lastDate": "2026-08-03",
      "bars": 1255,
      "symbol": "^IRX",
      "label": "미국 3개월 금리",
      "unit": "%",
      "digits": 2
    },
    "oil": {
      "current": 79.27999877929688,
      "prevClose": 84.66999816894531,
      "changeAbs": -5.3899993896484375,
      "changePct": -6.365890523457393,
      "pctRank": 60.70007955449482,
      "min5y": 55.27000045776367,
      "max5y": 123.69999694824219,
      "ma20": 80.81549987792968,
      "ma60": 85.07149988810221,
      "chg1m": 10.589996337890625,
      "chg3m": -22.660003662109375,
      "chg1mPct": 15.417085400344938,
      "chg3mPct": -22.228765076922617,
      "lastDate": "2026-08-03",
      "bars": 1257,
      "symbol": "CL=F",
      "label": "WTI 유가",
      "unit": "$",
      "digits": 1
    },
    "dollar": {
      "current": 99.81999969482422,
      "prevClose": 99.80000305175781,
      "changeAbs": 0.01999664306640625,
      "changePct": 0.02003671588670762,
      "pctRank": 34.60620525059666,
      "min5y": 92.04000091552734,
      "max5y": 114.11000061035156,
      "ma20": 100.8915008544922,
      "ma60": 100.13783365885416,
      "chg1m": -1.0400009155273438,
      "chg3m": 1.6100006103515625,
      "chg1mPct": -1.0311331640232069,
      "chg3mPct": 1.6393448990532669,
      "lastDate": "2026-08-03",
      "bars": 1257,
      "symbol": "DX-Y.NYB",
      "label": "달러지수(DXY)",
      "unit": "",
      "digits": 1
    },
    "gold": {
      "current": 4099.7001953125,
      "prevClose": 4049.10009765625,
      "changeAbs": 50.60009765625,
      "changePct": 1.249662800026578,
      "pctRank": 87.11217183770883,
      "min5y": 1623.300048828125,
      "max5y": 5318.39990234375,
      "ma20": 4064.4100341796875,
      "ma60": 4265.878340657552,
      "chg1m": -13.0,
      "chg3m": -530.19970703125,
      "chg1mPct": -0.3160940351260446,
      "chg3mPct": -11.451645137357119,
      "lastDate": "2026-08-03",
      "bars": 1257,
      "symbol": "GC=F",
      "label": "금",
      "unit": "$",
      "digits": 0
    },
    "us30y": {
      "current": 5.220000267028809,
      "prevClose": 5.275000095367432,
      "changeAbs": -0.05499982833862305,
      "changePct": -1.0426507553416835,
      "pctRank": 99.8406374501992,
      "min5y": 1.6779999732971191,
      "max5y": 5.275000095367432,
      "ma20": 5.123200082778931,
      "ma60": 5.033783388137818,
      "chg1m": 0.2350001335144043,
      "chg3m": 0.254000186920166,
      "chg1mPct": 4.714144979344869,
      "chg3mPct": 5.1147841889404315,
      "lastDate": "2026-08-03",
      "bars": 1255,
      "symbol": "^TYX",
      "label": "미국 30년물 금리",
      "unit": "%",
      "digits": 2
    }
  },
  "yieldSpread": 0.985999584197998,
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
      "headline": "OPEC+ oil output hike is irrelevant for now, not for later - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxOZ1F5SEtvVzlTU0VibXRmNGx4ZldyYllQcHBfSEkzRHVLVGdrNUxMLUZtQXZsT1pTWjJ4Z1F0ekFyN3NkWjRITjdCc2NtcmpFZ0k2OWN5Z25WOVVFVHpJNEVWQkU3emxZYkUtVFhFand1cWVHSWUyRUpQa1FOOUtPWlRKUzRVQUs3V3oxcWphVzVKUUhSSUNZaHNtdHVkM1U5VXE2Q0ZPNzE4UG5WQmdVS2cwZlU3UnNN?oc=5",
      "datetime": 1785754171,
      "headlineKo": "OPEC+ 원유 생산량 증가는 지금은 중요하지 않고 나중도 중요하지 않습니다 - Reuters"
    },
    {
      "headline": "How Iran is widening its pressure campaign to force US concessions - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxQU2VYbG9DT1JoZWlaZkxlVTc4T01mcjJ0cU9rc2FCWWxuY1dONTVmN0ZTU1RUZzlLUTNGbzgzYURCTFFqZzRWVXZSWXZKZC1Ldm05dFVOdmNZdnlxRVBBUzE2VDVjSU1wMlFXMkFBeDlKeVBuRWQxa2tYV1hPb0hvOHdRd0JvUGREek5HZXhuVXpMR0RBZzdKSE1fNmIyQWVzRVdfUEEzdkt5Zm1XNUVOVnpnbEg3bnNu?oc=5",
      "datetime": 1785751370,
      "headlineKo": "이란이 미국의 양보를 강요하기 위해 압력 캠페인을 확대하는 방법 - 로이터"
    },
    {
      "headline": "Iran executes two people accused of spying for Israel - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxObVpPMnE4MnRQckNZZXg0SU9TYTI4WG5qdmc2aUhydFU0LXlJS04taFVoOU5idUFqb3ZtSFZsVUlpYUhackVhN2lGQUlYQ3hqekNxYkkxd1E1aDU2TGVZTEJQc3V5U1EwVzJLRDdiQmdITzZFYlI4TWZzOTBtT2c5bTREN2tvVVZWUk1hb1EwSlVmRHpSaVJvTDdINzFCaTFHRFI0?oc=5",
      "datetime": 1785750784,
      "headlineKo": "이란, 이스라엘 스파이 혐의로 2명 처형 - 로이터"
    },
    {
      "headline": "Iran war hit euro zone consumption especially hard, ECB says - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxPSEhIQmRnRGRhT3FNNFBJcWdIeFd4THBVYnMtM3d6ODFUZnBWcU9VVVlKdjNBNTlhbWpYX0dBTXNQb2JOTmdNT0NSQ2NaMkVzWjJSVk9EV3RWajB1U05YZURnSWpvbjJNdy1QTVNad2tFbnloaVEzejZUM2NsU19PUTMzNFJZMk5udkViUkxXeGRJdGp2NG1lQVd3dGxEa004VkVsTWJaVQ?oc=5",
      "datetime": 1785744224,
      "headlineKo": "이란 전쟁으로 인해 유로존 소비가 특히 큰 타격을 입었다고 ECB가 밝혔습니다 - Reuters"
    },
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
      "datetime": 1785720840,
      "headlineKo": "인도 채권을 테스트하기 위한 지수 스너브; 루피, RBI 정책 및 미국-이란 전쟁에 초점 - Reuters"
    },
    {
      "headline": "India central bank to stay on hold even as peers pivot to rate hikes - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxPR1ZnaU9wamdlVW9ldFhnaFBfSUhSN3VsempmMkc0SDQ3M2pGOElvdGFrU3BXNDgtb1dtN21mNXhaWnZMZERRSHNadWhfMENwb0NLc2kxRzNyWTduWENzYUlJamZaaFNVQU1IeGVaR0lHU185bTJodVVQdW9CUTlwYXRqY004c25JeWdWamd1UENkYTF0M01KaFNaZUlNNGQ5VlIta2g2QQ?oc=5",
      "datetime": 1785720720,
      "headlineKo": "인도 중앙은행, 다른 국가들이 금리 인상을 시도하더라도 보류 유지 - Reuters"
    },
    {
      "headline": "Oil slides on Iran peace deal hopes and yen firms after intervention - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMigwFBVV95cUxQUjBjdHpEdEdMdVNpbVprQmRvNG9JTzl0ZHB4SkNmWUxqT2hNUG8xcW96U1R2czNKWHVMYXRqY2gxR1pHTzZ4RjlpaDgzUnM3U0dCNURmZDhPUUhVTnRuUFhYcGFmVHdoOWg2a3RJNTNGQktBU3pvZVZGSS1EVUJ1QzlVbw?oc=5",
      "datetime": 1785718980,
      "headlineKo": "이란 평화 협정 희망과 개입 후 엔화 기업에 유가 하락 - Reuters"
    },
    {
      "headline": "Gold gains as US dollar declines, hopes of Mideast deal hit oil - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxNTnkxZDh5TElCa1dZeUtDT2JfblI5ZFJuQkZNQ1pvbHlkcWxHRUVfMk51N2t0ZDUtbEhOYW9aVjg5d3lMSkNXYlFMc0I5Z3o1bjh4c0pkZ3BsWkRYeWhOalNoOUZPN3pvYVRSb1NnT21rZy1TamRFMHN2MUp1WjhoSmZaT0prMExjTVk1aThUbHAwNEo3MmpsbTI2UFdsY2Z2Y0RlT2RB?oc=5",
      "datetime": 1785717660,
      "headlineKo": "미국 달러 하락으로 금 상승, 중동 거래 희망이 유가에 타격 - Reuters"
    },
    {
      "headline": "Oil prices drop after Trump cancels attack on Iran to seek nuclear deal - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxOVnBOaGh1VXBaaGQwVmloSzlPcmg5aFdQeENKS3JtNi1wQTZlQTRBUm02ODRrYkNVZkNDREwtTTdMeUhlNV94QjctaFhpMWhTWVVJaF9xeVhWdEdKZXBMbFA4alVQaDBXbnMzczBqRnVBUlVrVUJJTFhLQjdpSU9SV2lHV1FQd0hvOEs0QkZwLVZfUDhtSkVGUU02T2tPeDFXaU5SaWRtUWt3cjhE?oc=5",
      "datetime": 1785715860,
      "headlineKo": "트럼프, 이란에 대한 핵 협상 취소 후 유가 하락 - 로이터 통신"
    }
  ],
  "_fetched_at": 1785762002.1026452,
  "_updated_label": "2026-08-03 22:00"
};
