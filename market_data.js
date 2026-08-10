// 자동 생성 파일 - buy_signal_telegram.py 실행 시마다 갱신됨. 직접 수정하지 마세요.
// 시장 환경 지표(야후) + 시장 헤드라인(Finnhub). 이 파일이 없어도 대시보드는 정상 동작함.
const MARKET_DATA = {
  "indicators": {
    "vix": {
      "current": 14.899999618530273,
      "prevClose": 15.149999618530273,
      "changeAbs": -0.25,
      "changePct": -1.6501650580520142,
      "pctRank": 19.904458598726116,
      "min5y": 11.859999656677246,
      "max5y": 52.33000183105469,
      "ma20": 17.164499855041505,
      "ma60": 17.26816662152608,
      "chg1m": -0.9400005340576172,
      "chg3m": -2.2900009155273438,
      "chg1mPct": -5.9343467487533,
      "chg3mPct": -13.321703574064985,
      "lastDate": "2026-08-07",
      "bars": 1256,
      "symbol": "^VIX",
      "label": "VIX (공포지수)",
      "unit": "",
      "digits": 2
    },
    "us10y": {
      "current": 4.659999847412109,
      "prevClose": 4.670000076293945,
      "changeAbs": -0.010000228881835938,
      "changePct": -0.214137659924237,
      "pctRank": 96.97211155378486,
      "min5y": 1.2419999837875366,
      "max5y": 4.98799991607666,
      "ma20": 4.632449984550476,
      "ma60": 4.5415999809900915,
      "chg1m": 0.12099981307983398,
      "chg3m": 0.26799964904785156,
      "chg1mPct": 2.665781277034823,
      "chg3mPct": 6.101995376677452,
      "lastDate": "2026-08-07",
      "bars": 1255,
      "symbol": "^TNX",
      "label": "미국 10년물 금리",
      "unit": "%",
      "digits": 2
    },
    "us3m": {
      "current": 3.7100000381469727,
      "prevClose": 3.7320001125335693,
      "changeAbs": -0.02200007438659668,
      "changePct": -0.5894982240946753,
      "pctRank": 36.65338645418327,
      "min5y": 0.019999999552965164,
      "max5y": 5.3480000495910645,
      "ma20": 3.723699986934662,
      "ma60": 3.6659666697184243,
      "chg1m": 0.0280001163482666,
      "chg3m": 0.1119999885559082,
      "chg1mPct": 0.7604594498358428,
      "chg3mPct": 3.112840105953798,
      "lastDate": "2026-08-07",
      "bars": 1255,
      "symbol": "^IRX",
      "label": "미국 3개월 금리",
      "unit": "%",
      "digits": 2
    },
    "oil": {
      "current": 78.55999755859375,
      "prevClose": 78.18000030517578,
      "changeAbs": 0.37999725341796875,
      "changePct": 0.48605430024897506,
      "pctRank": 57.83611774065235,
      "min5y": 55.27000045776367,
      "max5y": 123.69999694824219,
      "ma20": 81.83999938964844,
      "ma60": 83.31449991861979,
      "chg1m": 7.149993896484375,
      "chg3m": -16.860000610351562,
      "chg1mPct": 10.012594216233333,
      "chg3mPct": -17.6692527079074,
      "lastDate": "2026-08-10",
      "bars": 1257,
      "symbol": "CL=F",
      "label": "WTI 유가",
      "unit": "$",
      "digits": 1
    },
    "dollar": {
      "current": 99.71700286865234,
      "prevClose": 99.5999984741211,
      "changeAbs": 0.11700439453125,
      "changePct": 0.11747429349775648,
      "pctRank": 33.65155131264916,
      "min5y": 92.04000091552734,
      "max5y": 114.11000061035156,
      "ma20": 100.57285079956054,
      "ma60": 100.27461700439453,
      "chg1m": -1.2529983520507812,
      "chg3m": 1.8770065307617188,
      "chg1mPct": -1.2409610150562853,
      "chg3mPct": 1.9184450133046542,
      "lastDate": "2026-08-10",
      "bars": 1257,
      "symbol": "DX-Y.NYB",
      "label": "달러지수(DXY)",
      "unit": "",
      "digits": 1
    },
    "gold": {
      "current": 4392.2001953125,
      "prevClose": 4340.7001953125,
      "changeAbs": 51.5,
      "changePct": 1.1864445292861872,
      "pctRank": 91.3285600636436,
      "min5y": 1623.300048828125,
      "max5y": 5318.39990234375,
      "ma20": 4104.520031738281,
      "ma60": 4228.143334960938,
      "chg1m": 288.10009765625,
      "chg3m": -328.19970703125,
      "chg1mPct": 7.019811671279092,
      "chg3mPct": -6.952794547519033,
      "lastDate": "2026-08-10",
      "bars": 1257,
      "symbol": "GC=F",
      "label": "금",
      "unit": "$",
      "digits": 0
    },
    "us30y": {
      "current": 5.210999965667725,
      "prevClose": 5.2129998207092285,
      "changeAbs": -0.0019998550415039062,
      "changePct": -0.038362845008343506,
      "pctRank": 99.6812749003984,
      "min5y": 1.6779999732971191,
      "max5y": 5.275000095367432,
      "ma20": 5.151550030708313,
      "ma60": 5.04821670850118,
      "chg1m": 0.15799999237060547,
      "chg3m": 0.24200010299682617,
      "chg1mPct": 3.1268551990018976,
      "chg3mPct": 4.87019741769017,
      "lastDate": "2026-08-07",
      "bars": 1255,
      "symbol": "^TYX",
      "label": "미국 30년물 금리",
      "unit": "%",
      "digits": 2
    }
  },
  "yieldSpread": 0.9499998092651367,
  "sector": {
    "groups": {
      "빅테크·SW": {
        "ret1m": 7.568073120155927,
        "ret3m": 0.9168475131096754,
        "ret6m": 12.014147000577058,
        "ret1y": 7.165032361316848,
        "winRate": 60.8,
        "count": 9
      },
      "반도체": {
        "ret1m": -9.91498096617679,
        "ret3m": 13.471240886894043,
        "ret6m": 85.98770738077354,
        "ret1y": 247.094352079573,
        "winRate": 71.5,
        "count": 15
      }
    },
    "pair": [
      "빅테크·SW",
      "반도체"
    ],
    "corr60": 0.20133270282743299,
    "corrPctRank": 1.9246861924686192,
    "corrMin5y": 0.11496792019743002,
    "corrMedian5y": 0.7115782038222396,
    "corrMax5y": 0.9346528705205663
  },
  "news": [
    {
      "headline": "China is balancing Asia's crude oil demand by itself - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxNN0lBeUJuUi1Nek03cm1rOF9xMFhxS2RNa1NUNkxqQk9UT1dYOENkMHduLUx3ei12d3VQZmxLSlV6cFd3cDZXc05JcnJ3YnRXRjl2b3VMb2M0T1R3OUpVUnhfVWNxY1d0akVsQ1U0V1hkOEE1eUZWN2FySzNXcHRmLXJpNlR2SWlRekRYbkVld1VqNDI5S0RFdWFVUHBJQXF2bl9FMDZJUmotVzlfZlBidUhVTWpRTVMzYWZlTQ?oc=5",
      "datetime": 1786324560,
      "headlineKo": "중국은 스스로 아시아 원유 수요의 균형을 맞추고 있다 - Reuters"
    },
    {
      "headline": "Alleged Irish crime boss Kinahan charged with directing criminal organisation - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxPUzl5TEZoallFdF9oRFpZcHRETGZPXzRmYnNwRGU5eXBweFRkTFVEU0lSb2VDLVg0dFBueFhEeWc5YVlCdUJtckVvcXdVWndxMDRSdmREeGc3YzBkQUZLU2dmX2EwRVc3cmdXamhYRUhoTExqeklKZDhoaU9RM0NKNl90RkEwRGc1R1JMZ1BxWFU3VVBoZjBtaVl3U1J5YnZ1MTJv?oc=5",
      "datetime": 1786317890,
      "headlineKo": "아일랜드 범죄 두목 키나한, 범죄조직 지휘 혐의로 기소 - 로이터 통신"
    },
    {
      "headline": "Iran ties Hormuz reopening to US concessions on several demands - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxQSmFvNGYwRDFRdHZrdWhBOWR0ZmVCdkZTSzRROXVNMG1UX1Azb04xa3ZCbEtYNkl4eFhSZG16b0xYeHNyd2tTdHhGWXFUTXJ6WFNVRjg3bmZYOEhEeHNaNHh4NU9qN0RQYXY3ZG13Qzh6Mk1LNG9jaGZraUZwRHVKY0hMZlFWUTdMOEpoaTRuemlPWEFJZUhsYk5TaUpNdWFqR1dId3NCM0xvYS1SNlNBMg?oc=5",
      "datetime": 1786316580,
      "headlineKo": "이란, 여러 요구에 따라 호르무즈 재개방을 미국의 양보와 결부 - 로이터 통신"
    },
    {
      "headline": "Oil rises on uncertainty over reopening of Hormuz - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxQaXpSdTFpV0NCUnZ4ZmZ3bXhmR3QxR1VVbGthTXNFSmZDNU03WWxGTDQ2eE9SeVZPYVE1aHl3NWZuS3FxcW1WSnBBb3J1SXJLY1F6RnFkTy1wdVZHaXdMZkhpclJjM09BU0k1RmMyaFNHQmtnZzA5elZZbUpHVUFEZHFNbnJaek93UlM4cUZJTlU5ZzRUckVJVXdTVVd3amluLWRDb1ljZkY?oc=5",
      "datetime": 1786313820,
      "headlineKo": "호르무즈 재개 불확실성으로 유가 상승 - 로이터"
    },
    {
      "headline": "Yemeni military says Houthi attack on Mocha kills 7, wounds 30 - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMizgFBVV95cUxQY1pLdDR5UUhyOFl0d1dQNFFWV3lPV1RkNVg0TFgtSjVidElQVlpTcmt1cFQ0QmI4bTNsOXdjNlozM1RWLU9DUThrNmNjTURRZV9sSjJPbTVIYTR2ZUZQYzQ2NGdFbVRsSVlzeno5NWhiajhucW8ySmYwc1B6cENtOHg1RVhBY0pKUUFHSENiM0w5dU1lNkNJNTB0S0FLSFNKZnpZRHJLaGZHSVk2OFg1X3B0TEUyT0R4V2EtWHoxY2pjVF9IOHl4ZEpZZGF3QQ?oc=5",
      "datetime": 1786306680,
      "headlineKo": "예멘군, 후티 반군 모카 공격으로 7명 사망, 30명 부상 - 로이터 통신"
    },
    {
      "headline": "Netanyahu says Trump's new Gaza plan is unacceptable - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxOMm5hSE0yMGxRN0hITzZOLXp3R2tCX1dRc1IxaWp3MmZ5Uzc5T20yYmQxVlQ2ZDUzdkppNUJRNzJQcDNwaDh4aGd2cmI1S1lKY2lKRzNBUnJXVVpfOVNwa1JDM2JLenNkMi1YQ2h4MFJ3Yk1HM0FBY2RZZTVnbXd5QmhxU3ZKWTNQZDNEWmdEYVVBUzV3b2tZMEx5TDVTOER0SVZsemE4Z1F2VFJ0Ym9qX3Zn?oc=5",
      "datetime": 1786303480,
      "headlineKo": "네타냐후는 트럼프의 새로운 가자지구 계획은 받아들일 수 없다고 말했다 - 로이터"
    },
    {
      "headline": "Trump says U.S. is 'low-keying it' with Iran, stresses economic pain, according to Axios interview - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMizgFBVV95cUxOazVhN1R5WHRFQTBvX1BRNWoyT1F4WGlKVXBncE5ad1h2TVZqM0ZPLWdEYy1OVkdDYnE2THh4Z2twaGtiRXBMdVY3V3NBT01UeGxuVlljODZHUVptY3NqNnVldHNDOEIzYndQQi0zUExFbExpVGdQbS0zS2ppeGpMbWlvVnZsNS10aVBLaXR1ZDA4Q0piT09XVHR4bjRNSk5qaDQtOGwzWm1seTB0UXlVUl9uN3FIRlVCWUdNS0lNX2xWUWR2ZHdTNnVqdS1sdw?oc=5",
      "datetime": 1786295999,
      "headlineKo": "Axios 인터뷰에 따르면 트럼프는 미국이 이란에 대해 '낮은 입장'을 유지하고 있으며 경제적 고통을 강조하고 있다고 말했습니다."
    },
    {
      "headline": "5 ‘rules’ your parents taught you that are sabotaging your career, says expert—like ‘always be grateful’",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/09/rules-your-parents-taught-you-that-are-sabotaging-your-career-expert.html",
      "datetime": 1786282441,
      "headlineKo": "전문가가 말하는 부모님이 가르쳐준 5가지 '규칙'은 '항상 감사하라'와 같습니다."
    },
    {
      "headline": "Here are the 2 big things we're watching in the stock market in the week ahead",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/09/here-are-the-2-big-things-were-watching-in-the-stock-market-in-the-week-ahead.html",
      "datetime": 1786281112,
      "headlineKo": "다음 주에 주식 시장에서 우리가 주목해야 할 2가지 주요 사항은 다음과 같습니다."
    },
    {
      "headline": "Syria and Russia reach deal on future of Tartous and Hmeimim bases after 18 months of talks - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMixwFBVV95cUxQTHltYW1BZ2tteEtoRWZwSUVpMy1vMVZTTF9HUzJYcUxZeGN0TGdPTzJ6dzB4clFRTWNDRkR1ZUVRT1BmbnNiZm9tQkZRdFZHSmVydXdDOHVnZERHVElJZm0zSk1HdG51LVZCRjVpakpfWDZiWXh0X0lmN0dQangwM01QNU5DY1BmNmdCR3FOX0FYQjdCNF9teE5zc0tTOXA3WWQyYUswOS1oYzVKUzdnNFdGdU5KREFyUnlyWVZSZld6c1NPa3Q4?oc=5",
      "datetime": 1786280983,
      "headlineKo": "시리아와 러시아, 18개월 간의 회담 끝에 타르투스와 흐메이밈 기지 미래에 대한 합의에 도달 - 로이터 통신"
    },
    {
      "headline": "Most Gulf bourses subdued as investors await Strait of Hormuz deal clarity - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMivwFBVV95cUxNZXFfQ0YybkFMMlYyUVVIbDBSazRGN19SeDlzRTZFWklTek93NlY2S3MyNThpalc0aGFJQkg1c1NTWW1VUWstUGRhVzZ3LTIzaWdWbTZ3aV9MU21Td3l5NzhmaHZlZ1E1cGdRbDJ0WXlFOXhvSHZveFNQVjgxVkRxV3NXNkUwSEhFVXBpaUdXUjZLdzE3aS10dEZpRGhBRTZFczdIUkQ4bkw1TmtNMFJycFhTSkc4VmEzcEs0VHVFSQ?oc=5",
      "datetime": 1786280143,
      "headlineKo": "투자자들이 호르무즈 해협 거래의 명확성을 기다리면서 대부분의 걸프 증권 거래소는 침체되었습니다 - Reuters"
    },
    {
      "headline": "Iran's Pezeshkian recently met Supreme Leader Khamenei, state media says - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxQLTd6TExsQVUzWU1OTlNGdzREQVBSY2R5STlrTVBra3ZPOWozaERiVC1zd3FDMmJJOTEwS2pIemlUcUNZZ2l5Y1JGMjljUHlqTWJ4RC1fRjFRNEtuc1JCd1BFOEM5VzRwRnAyc3N0ejEtOGlhT2Y5VHNPWXd1a2puYXNxTS1fQjJpSzFrTlpYUDd5UFlCRFloQWhQZDdNM1FqZEFOYXNpYmEtTmdpUFFockU0TnhKSVpfNmd5SmRJZmp3UQ?oc=5",
      "datetime": 1786278169,
      "headlineKo": "이란의 페제쉬키안이 최근 하메네이 최고 지도자를 만났다고 국영 언론이 밝혔습니다. - 로이터"
    }
  ],
  "_fetched_at": 1786337722.3583333,
  "_updated_label": "2026-08-10 13:55"
};
