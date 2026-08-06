// 자동 생성 파일 - buy_signal_telegram.py 실행 시마다 갱신됨. 직접 수정하지 마세요.
// 시장 환경 지표(야후) + 시장 헤드라인(Finnhub). 이 파일이 없어도 대시보드는 정상 동작함.
const MARKET_DATA = {
  "indicators": {
    "vix": {
      "current": 15.890000343322754,
      "prevClose": 15.8100004196167,
      "changeAbs": 0.07999992370605469,
      "changePct": 0.5060083591572366,
      "pctRank": 28.503184713375795,
      "min5y": 11.859999656677246,
      "max5y": 52.33000183105469,
      "ma20": 17.207999897003173,
      "ma60": 17.329999987284342,
      "chg1m": -1.0099992752075195,
      "chg3m": -1.1899995803833008,
      "chg1mPct": -5.976327207132536,
      "chg3mPct": -6.9672106891034,
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
      "current": 75.44000244140625,
      "prevClose": 75.22000122070312,
      "changeAbs": 0.220001220703125,
      "changePct": 0.29247702357464617,
      "pctRank": 46.38027048528242,
      "min5y": 55.27000045776367,
      "max5y": 123.69999694824219,
      "ma20": 81.3879997253418,
      "ma60": 84.05799992879231,
      "chg1m": 1.9200057983398438,
      "chg3m": -19.639999389648438,
      "chg1mPct": 2.6115422823824592,
      "chg3mPct": -20.65628840073675,
      "lastDate": "2026-08-06",
      "bars": 1257,
      "symbol": "CL=F",
      "label": "WTI 유가",
      "unit": "$",
      "digits": 1
    },
    "dollar": {
      "current": 99.73899841308594,
      "prevClose": 99.69000244140625,
      "changeAbs": 0.0489959716796875,
      "changePct": 0.04914833030371862,
      "pctRank": 33.810660302307085,
      "min5y": 92.04000091552734,
      "max5y": 114.11000061035156,
      "ma20": 100.70795059204102,
      "ma60": 100.22831700642904,
      "chg1m": -1.311004638671875,
      "chg3m": 1.7190017700195312,
      "chg1mPct": -1.297382087163697,
      "chg3mPct": 1.753725595685508,
      "lastDate": "2026-08-06",
      "bars": 1257,
      "symbol": "DX-Y.NYB",
      "label": "달러지수(DXY)",
      "unit": "",
      "digits": 1
    },
    "gold": {
      "current": 4326.7001953125,
      "prevClose": 4245.7998046875,
      "changeAbs": 80.900390625,
      "changePct": 1.905421695476159,
      "pctRank": 90.45346062052506,
      "min5y": 1623.300048828125,
      "max5y": 5318.39990234375,
      "ma20": 4077.1650268554686,
      "ma60": 4240.261669921875,
      "chg1m": 255.80029296875,
      "chg3m": -355.19970703125,
      "chg1mPct": 6.2836301335112035,
      "chg3mPct": -7.586657434804142,
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
      "headline": "Trump reiterates his positive portrayal of Iran talks - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMimwFBVV95cUxQYkljYWk5RVFGOXRJR0hycTRVWW1CTGZ6aFFlcU1MLTlJTUVMWFVvMDVmRm1qTzZyZ1RWaE92S1AzeE1QZHdTZFd0aFkwQ05oVDllUmlScmNtM2xPcUlJalE3Nk1Sbm10cGNjcEZOblcwbTdWTVNYVEFObVNIZzhJV20yUkVVTkFQQ2hlNGxobi1KVzZvQzk5Tm9IVQ?oc=5",
      "datetime": 1785984900,
      "headlineKo": "트럼프, 이란 회담에 대해 긍정적인 입장 재차 강조 - 로이터"
    },
    {
      "headline": "Yen and dollar drift on Iran deal concerns, payroll jitters - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxQT2VsMnRGWG5QTmNmeVNLM21MZHV1dkdiRnBOWnNrZUdicjNhZTB3M3JjLTdJVGk0VTc4VjhEUkxtdUpGZ0J5bV9BMklYVWhSb1lMQkFlWk1JRm5SY3BmcU1tUkhUbWNaRGZDUHhNcW42RU1QZ0Y0ODdxWXZSa1l4OWxfSVlhMEx1ODdCZUI5UlJRUUpmMEJ4Z3lFOERXVWFXRGRjV3h1MjRlQQ?oc=5",
      "datetime": 1785981660,
      "headlineKo": "이란 거래 우려로 인한 엔화 및 달러 변동, 급여 불안 - Reuters"
    },
    {
      "headline": "Asia shares fall on tech pullback, oil stable as Iran talks stay in focus - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMigwFBVV95cUxNcE5UZ1dJanFrQ1hFUUNWWmM2N2cxckRKUFYtOHNLUHhtVkdpLXpmNXZjeVMzd2dycVUxSmVlNU54aE1DLVFnMmY0VnVsZk1IT1puQVQydHlUS19RNkVhRXlfbU1fdlhIZ0tORnBOWHl4a2dUZFUyZFpoUzZuZDFkUFZucw?oc=5",
      "datetime": 1785979620,
      "headlineKo": "이란 회담이 집중되면서 기술주 하락, 석유 안정으로 아시아 주가 하락 - Reuters"
    },
    {
      "headline": "Oil gains as investors cautious over Iran-Oman talk progress - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxQTmw0WV9PeEJVU0pBczd6UzhWSjdUMlQ2aDhwUGxDbWdvc3hMakw5d3h3Q2wxMXNRakctZjRlTW8wNi1PNnU2eDY0anYxakZYSkZBSVN6SUhJOEF4aW1HSTVnUWREc3k2dFBvUEl0azM4TXFoV1I1S1pJRVlVUm1SakpIeVFqM0wxS2gtMDFvc3ktZ05QYjc3VXRtSHdsNk9hLWUwb3VxTzBFcVhBeUx3Zm82Zw?oc=5",
      "datetime": 1785978420,
      "headlineKo": "이란-오만 회담 진전에 투자자들이 조심하면서 석유 상승 - 로이터"
    },
    {
      "headline": "Gold hits seven-week peak as market participants weigh Hormuz reopening prospects - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxQVWd6ZjFIZXZHQ2JsNi1UdXBvS1JIUm0xYWtjaDQ1UXVOczhzTzZLNEY0ZTRtb1l5N2lrY09ERHFySlMyakJJNndhRUx5M0FabFZ5TllJZWZPU05na2VqMkRVckJ2VndLdUlFUGd1NklHQlN6V1VJUzRxS09jUmtVVWhMTGRuVlN3YzctZjhBWVI2UUZkQkJqZ0NvdF9uQ1I0RGtCNVNORThqQQ?oc=5",
      "datetime": 1785977460,
      "headlineKo": "시장 참가자들이 호르무즈 재개 전망을 평가하면서 금값이 7주 최고치를 기록했습니다. - Reuters"
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
    },
    {
      "headline": "FAA says Marine One was briefly too close to passenger airplane - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxNWGVVekl4bEJ3UlhoSEc3U3J1Z0lBZk1KVFRmdWg3UHVjOW5tM010QUVNeUdZbzlmUkx1X2lhM3gxN0EydFo1UnhBanVkUU12YnlKUXV6NHJTeS1ROXNlRU5ucHUwcndQQXo0Y3RqeVJ4MkZ1SEhIRmQ5c0Z6Yy15VkpTbUFDSVdVTUhJakJmOF9BVjdZckNobUVvcHhHa0FaS3V6RG90bzMwd3N5X0hKczEwQWRTMVBsbVFtTkNDc0I?oc=5",
      "datetime": 1785968007,
      "headlineKo": "FAA는 마린 원이 여객기에 잠시 너무 가까웠다고 밝혔습니다."
    },
    {
      "headline": "Hollywood is cranking out billion-dollar movies again. Spider-Man just joined the ranks",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/05/hollywood-2026-billion-dollar-movies.html",
      "datetime": 1785964501,
      "headlineKo": "할리우드가 다시 10억 달러 규모의 영화를 제작하고 있습니다. 스파이더맨이 방금 대열에 합류했습니다."
    },
    {
      "headline": "Etsy lays off 12% of workforce as part of restructuring plan - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxOYWh3SWlrVGlSZDBVdnBWajVZS3N1ejdBVVN6SlY2V3JIdVRQOVc2VGFtX1Y1MHNsblFON3pWVkhZbHU4WmtoQWZWNlZJQUZLMDlkMTEyNDBycEd1Y3BMMXRHUDNnSHZMNHdFY3FycS12R080bTZ5TEVfQmFzOE1ONzJ5WlpMS0trVFV6T3lpRFo2WVRiSUpOWW5hZDlZczgtdnhYeEVZRnBrQQ?oc=5",
      "datetime": 1785961759,
      "headlineKo": "Etsy, 구조조정 계획의 일환으로 인력 12% 해고 - Reuters"
    }
  ],
  "_fetched_at": 1786004506.0781903,
  "_updated_label": "2026-08-06 17:22"
};
