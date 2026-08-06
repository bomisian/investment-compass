// 자동 생성 파일 - buy_signal_telegram.py 실행 시마다 갱신됨. 직접 수정하지 마세요.
// 시장 환경 지표(야후) + 시장 헤드라인(Finnhub). 이 파일이 없어도 대시보드는 정상 동작함.
const MARKET_DATA = {
  "indicators": {
    "vix": {
      "current": 15.949999809265137,
      "prevClose": 15.8100004196167,
      "changeAbs": 0.1399993896484375,
      "changePct": 0.8855116124774376,
      "pctRank": 28.90127388535032,
      "min5y": 11.859999656677246,
      "max5y": 52.33000183105469,
      "ma20": 17.21099987030029,
      "ma60": 17.33099997838338,
      "chg1m": -0.9499998092651367,
      "chg3m": -1.130000114440918,
      "chg1mPct": -5.621300773424244,
      "chg3mPct": -6.615925758129208,
      "lastDate": "2026-08-06",
      "bars": 1256,
      "symbol": "^VIX",
      "label": "VIX (공포지수)",
      "unit": "",
      "digits": 2
    },
    "us10y": {
      "current": 4.617000102996826,
      "prevClose": 4.626999855041504,
      "changeAbs": -0.009999752044677734,
      "changePct": -0.21611740561828996,
      "pctRank": 95.1394422310757,
      "min5y": 1.2170000076293945,
      "max5y": 4.98799991607666,
      "ma20": 4.62134997844696,
      "ma60": 4.53398331006368,
      "chg1m": 0.08800029754638672,
      "chg3m": 0.20100021362304688,
      "chg1mPct": 1.943040435561125,
      "chg3mPct": 4.551635386285079,
      "lastDate": "2026-08-05",
      "bars": 1255,
      "symbol": "^TNX",
      "label": "미국 10년물 금리",
      "unit": "%",
      "digits": 2
    },
    "us3m": {
      "current": 3.7249999046325684,
      "prevClose": 3.7300000190734863,
      "changeAbs": -0.005000114440917969,
      "changePct": -0.13405132480830315,
      "pctRank": 37.13147410358566,
      "min5y": 0.019999999552965164,
      "max5y": 5.3480000495910645,
      "ma20": 3.72044997215271,
      "ma60": 3.661983331044515,
      "chg1m": 0.0,
      "chg3m": 0.125,
      "chg1mPct": 0.0,
      "chg3mPct": 3.472222314204701,
      "lastDate": "2026-08-05",
      "bars": 1255,
      "symbol": "^IRX",
      "label": "미국 3개월 금리",
      "unit": "%",
      "digits": 2
    },
    "oil": {
      "current": 75.87000274658203,
      "prevClose": 75.22000122070312,
      "changeAbs": 0.6500015258789062,
      "changePct": 0.8641338943504344,
      "pctRank": 48.050914876690534,
      "min5y": 55.27000045776367,
      "max5y": 123.69999694824219,
      "ma20": 81.40949974060058,
      "ma60": 84.06516660054525,
      "chg1m": 2.350006103515625,
      "chg3m": -19.209999084472656,
      "chg1mPct": 3.1964175881627326,
      "chg3mPct": -20.204037352256712,
      "lastDate": "2026-08-06",
      "bars": 1257,
      "symbol": "CL=F",
      "label": "WTI 유가",
      "unit": "$",
      "digits": 1
    },
    "dollar": {
      "current": 99.77200317382812,
      "prevClose": 99.69000244140625,
      "changeAbs": 0.082000732421875,
      "changePct": 0.08225572315546056,
      "pctRank": 34.12887828162291,
      "min5y": 92.04000091552734,
      "max5y": 114.11000061035156,
      "ma20": 100.70960083007813,
      "ma60": 100.22886708577474,
      "chg1m": -1.2779998779296875,
      "chg3m": 1.7520065307617188,
      "chg1mPct": -1.2647202764309626,
      "chg3mPct": 1.7873970524009903,
      "lastDate": "2026-08-06",
      "bars": 1257,
      "symbol": "DX-Y.NYB",
      "label": "달러지수(DXY)",
      "unit": "",
      "digits": 1
    },
    "gold": {
      "current": 4315.5,
      "prevClose": 4245.7998046875,
      "changeAbs": 69.7001953125,
      "changePct": 1.6416269847567646,
      "pctRank": 90.29435163086714,
      "min5y": 1623.300048828125,
      "max5y": 5318.39990234375,
      "ma20": 4076.605017089844,
      "ma60": 4240.075,
      "chg1m": 244.60009765625,
      "chg3m": -366.39990234375,
      "chg1mPct": 6.008501892061402,
      "chg3mPct": -7.825880731886876,
      "lastDate": "2026-08-06",
      "bars": 1257,
      "symbol": "GC=F",
      "label": "금",
      "unit": "$",
      "digits": 0
    },
    "us30y": {
      "current": 5.173999786376953,
      "prevClose": 5.190000057220459,
      "changeAbs": -0.01600027084350586,
      "changePct": -0.3082903789422098,
      "pctRank": 99.5219123505976,
      "min5y": 1.6779999732971191,
      "max5y": 5.275000095367432,
      "ma20": 5.136550045013427,
      "ma60": 5.041433382034302,
      "chg1m": 0.13099956512451172,
      "chg3m": 0.18999958038330078,
      "chg1mPct": 2.597651385626504,
      "chg3mPct": 3.8121904600808674,
      "lastDate": "2026-08-05",
      "bars": 1255,
      "symbol": "^TYX",
      "label": "미국 30년물 금리",
      "unit": "%",
      "digits": 2
    }
  },
  "yieldSpread": 0.8920001983642578,
  "sector": {
    "groups": {
      "빅테크·SW": {
        "ret1m": 5.349676043073703,
        "ret3m": 1.2883055163303903,
        "ret6m": 3.677987834118368,
        "ret1y": 8.127628454818115,
        "winRate": 60.8,
        "count": 9
      },
      "반도체": {
        "ret1m": -4.350390576685815,
        "ret3m": 16.411297692695783,
        "ret6m": 75.09321458192848,
        "ret1y": 241.53606099666445,
        "winRate": 71.5,
        "count": 15
      }
    },
    "pair": [
      "빅테크·SW",
      "반도체"
    ],
    "corr60": 0.2050804410535708,
    "corrPctRank": 2.0100502512562812,
    "corrMin5y": 0.11496792019743002,
    "corrMedian5y": 0.7115784818334243,
    "corrMax5y": 0.9346528705205663
  },
  "news": [
    {
      "headline": "European stocks rise on earnings optimism as traders weigh Iran proposals - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMigwFBVV95cUxNcE5UZ1dJanFrQ1hFUUNWWmM2N2cxckRKUFYtOHNLUHhtVkdpLXpmNXZjeVMzd2dycVUxSmVlNU54aE1DLVFnMmY0VnVsZk1IT1puQVQydHlUS19RNkVhRXlfbU1fdlhIZ0tORnBOWHl4a2dUZFUyZFpoUzZuZDFkUFZucw?oc=5",
      "datetime": 1786013921,
      "headlineKo": "트레이더들이 이란 제안에 무게를 두는 가운데 유럽 증시는 실적 낙관론에 상승 - 로이터 통신"
    },
    {
      "headline": "Oil traders double down on Iran deal bet as odds worsen - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxQYTlrUTg0TjljZzBlaVJyRkJnS21MLU9TblltYU1oUm1NLVRqX1NnVEZvM2ZCTlMwXzBtUWk5cE1pSE5ZTnFYeGVtZjNZcnBlaU1iRHdfYlVzN3pyd0VYM3ZXRTJzcHhUYlNMT1ZmRU15eHhqZi1FNkpKa04waEk2YXA2X2QtUVBKcmZtMjRkWDd6anFaQzBJeXlhUXZmZTZxYUxYcU4wUjFNUnliUDk4YWVRb2FCZTFmV1FHQnFWck8wd0k?oc=5",
      "datetime": 1786013149,
      "headlineKo": "석유 거래자들, 확률이 악화되면서 이란 거래에 대한 베팅을 두 배로 늘림 - Reuters"
    },
    {
      "headline": "Hadrian valued at nearly $8 billion after fresh funding as money pours into defense tech",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/06/hadrian-defense-tech-ai-manufacturing.html",
      "datetime": 1786010098,
      "headlineKo": "하드리아누스는 국방 기술에 돈이 쏟아지면서 새로운 자금 지원을 받은 후 거의 80억 달러의 가치를 갖게 되었습니다."
    },
    {
      "headline": "Morning Bid: AI stocks learn to fly — but ain't got wings - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxNLVdyc053UEtXR1QxVFh6Q0xDYjlVYUxyaXdYZG05c0lkaHhoQnhZSnJGaXhPTFhoMkEwMUIzdE0tV2F0WGI1NGtxdTJGWklQV3JfYjRmU2dYXzQzNXBpeDRhT09ITGN3aGM4ekdDb2xzejNjUldiSVY5U1ZlWFJFaDYycG8ybzZKYlY1NG5R?oc=5",
      "datetime": 1785991920,
      "headlineKo": "아침 입찰: AI 주식은 나는 법을 배우지만 날개는 없습니다 - Reuters"
    },
    {
      "headline": "EXCLUSIVE: Sinopec steps up Russian oil imports to offset Mideast supply cuts, traders and tracker say - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiywFBVV95cUxPNldJczB0MXMxMnZEaExVV3M1T0ZTM3JxUG1Fci1GVGNMaFd4c1ZsQnh0enBKVUdoSXJScU9aVDgzaFpqTkl5NEZ1LUlTQzhXWWRodjZDU25JeExHLXJDNXNnZ2IyOGxKXzZHaHBRVXczS05wY1JsdU5UcllxVjR4TnNkVXU2RzdIaDhrN21zaWhhYlJOeXJ3cGh5T0hSeGItVlVzbWhGY19MU2JMcEFjdUJrdUQyd2NFVVF3S0Q5R2NsMVAwMnQ1ZXc0SQ?oc=5",
      "datetime": 1785990360,
      "headlineKo": "독점: Sinopec은 중동 공급 삭감을 상쇄하기 위해 러시아 석유 수입을 늘리고 있다고 거래자와 추적자는 말합니다 - Reuters"
    },
    {
      "headline": "Israel strikes south Lebanon after soldiers killed, talks continue in Rome - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxORWNLdnd6QTJNaVRGaG5aOVJqRjBnOFAzT05ubjAxY2dya0luUWg4Rk5xZU5KOXF2aEEzY3pQcDlLWXhvQmlNcXBKMTk4M09lWHFqM0ltOXlyeXdxQTFVRTZTTDR2Rl9pNFlDQm1PdFhpRE1zc1hhTzQ2MkZPR0lFbmZ4WXVLRzVLcmdOLXc1QVhUNm1GQlY4MWgxekxSM1NtOGNPS0tlbnJlSDRybFdZNFlqM2k0b1NNeWFaZA?oc=5",
      "datetime": 1785986820,
      "headlineKo": "이스라엘, 군인 사망 후 레바논 남부 공습, 로마에서 회담 계속 - 로이터"
    },
    {
      "headline": "Trump reiterates his positive portrayal of Iran talks - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMimwFBVV95cUxQYkljYWk5RVFGOXRJR0hycTRVWW1CTGZ6aFFlcU1MLTlJTUVMWFVvMDVmRm1qTzZyZ1RWaE92S1AzeE1QZHdTZFd0aFkwQ05oVDllUmlScmNtM2xPcUlJalE3Nk1Sbm10cGNjcEZOblcwbTdWTVNYVEFObVNIZzhJV20yUkVVTkFQQ2hlNGxobi1KVzZvQzk5Tm9IVQ?oc=5",
      "datetime": 1785984900,
      "headlineKo": "트럼프, 이란 회담에 대해 긍정적인 입장 재차 강조 - 로이터"
    },
    {
      "headline": "Dollar ticks up as markets await Iran deal news, look towards payrolls - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxQT2VsMnRGWG5QTmNmeVNLM21MZHV1dkdiRnBOWnNrZUdicjNhZTB3M3JjLTdJVGk0VTc4VjhEUkxtdUpGZ0J5bV9BMklYVWhSb1lMQkFlWk1JRm5SY3BmcU1tUkhUbWNaRGZDUHhNcW42RU1QZ0Y0ODdxWXZSa1l4OWxfSVlhMEx1ODdCZUI5UlJRUUpmMEJ4Z3lFOERXVWFXRGRjV3h1MjRlQQ?oc=5",
      "datetime": 1785981660,
      "headlineKo": "시장이이란 거래 소식을 기다리고 급여를 기대하면서 달러는 상승합니다 - Reuters"
    },
    {
      "headline": "Oil prices steady as investors cautious over Iran-Oman talks - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxQTmw0WV9PeEJVU0pBczd6UzhWSjdUMlQ2aDhwUGxDbWdvc3hMakw5d3h3Q2wxMXNRakctZjRlTW8wNi1PNnU2eDY0anYxakZYSkZBSVN6SUhJOEF4aW1HSTVnUWREc3k2dFBvUEl0azM4TXFoV1I1S1pJRVlVUm1SakpIeVFqM0wxS2gtMDFvc3ktZ05QYjc3VXRtSHdsNk9hLWUwb3VxTzBFcVhBeUx3Zm82Zw?oc=5",
      "datetime": 1785978420,
      "headlineKo": "이란-오만 회담에 대한 투자자들의 우려로 유가 안정 - Reuters"
    },
    {
      "headline": "Gold hovers near seven-week high on easing rate hike concerns - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxQVWd6ZjFIZXZHQ2JsNi1UdXBvS1JIUm0xYWtjaDQ1UXVOczhzTzZLNEY0ZTRtb1l5N2lrY09ERHFySlMyakJJNndhRUx5M0FabFZ5TllJZWZPU05na2VqMkRVckJ2VndLdUlFUGd1NklHQlN6V1VJUzRxS09jUmtVVWhMTGRuVlN3YzctZjhBWVI2UUZkQkJqZ0NvdF9uQ1I0RGtCNVNORThqQQ?oc=5",
      "datetime": 1785977460,
      "headlineKo": "금값은 금리인상 우려 완화에 7주 최고치 부근 맴돌다 - 로이터"
    },
    {
      "headline": "Dow closes at record on Mideast optimism; SpaceX, AMD drag Nasdaq - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMivwFBVV95cUxPdklHVUNCN0JQTDlLR0piZnVyYXRkNkU1akFlU3dWWFRoQTUyVUFxTXVtbnU2V3pTY2QwZ3pXRUw3eTFZeG1IbDAzM0Q5eEJPd0VSRldTckFHb1dBYXUtQ2tocm44b2p1SE5EbGhCNUJyMG9SX0RhZTlRZjFFbURfWmhPbnN2YmNSTlF3NFFZbG5yNmFzWTNiZFBOTlFfOWp1cmZIMkxicE50d2tJWkVXOVZQRmFxc21qN01jaDR6RQ?oc=5",
      "datetime": 1785971263,
      "headlineKo": "다우지수는 중동 낙관론으로 사상 최고치를 기록했다. SpaceX, AMD, Nasdaq 끌기 - Reuters"
    },
    {
      "headline": "Jim Cramer says investors should consider buying SpaceX for their kids",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/05/jim-cramer-investors-should-consider-buying-spacex-kids.html",
      "datetime": 1785969641,
      "headlineKo": "짐 크레이머(Jim Cramer)는 투자자들이 아이들을 위해 SpaceX 구매를 고려해야 한다고 말했습니다."
    }
  ],
  "_fetched_at": 1786017601.6257508,
  "_updated_label": "2026-08-06 21:00"
};
