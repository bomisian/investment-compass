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
      "current": 78.18000030517578,
      "prevClose": 77.29000091552734,
      "changeAbs": 0.8899993896484375,
      "changePct": 1.1515065068004666,
      "pctRank": 55.92680986475735,
      "min5y": 55.27000045776367,
      "max5y": 123.69999694824219,
      "ma20": 81.81899948120117,
      "ma60": 83.68883323669434,
      "chg1m": 6.099998474121094,
      "chg3m": -16.62999725341797,
      "chg1mPct": 8.462816757994299,
      "chg3mPct": -17.54034140032587,
      "lastDate": "2026-08-07",
      "bars": 1257,
      "symbol": "CL=F",
      "label": "WTI 유가",
      "unit": "$",
      "digits": 1
    },
    "dollar": {
      "current": 99.5999984741211,
      "prevClose": 99.97000122070312,
      "changeAbs": -0.37000274658203125,
      "changePct": -0.3701137761968999,
      "pctRank": 32.537788385043754,
      "min5y": 92.04000091552734,
      "max5y": 114.11000061035156,
      "ma20": 100.65100059509277,
      "ma60": 100.25400034586589,
      "chg1m": -1.3400039672851562,
      "chg3m": 1.3499984741210938,
      "chg1mPct": -1.3275251980135456,
      "chg3mPct": 1.3740442484693065,
      "lastDate": "2026-08-07",
      "bars": 1257,
      "symbol": "DX-Y.NYB",
      "label": "달러지수(DXY)",
      "unit": "",
      "digits": 1
    },
    "gold": {
      "current": 4399.7001953125,
      "prevClose": 4242.0,
      "changeAbs": 157.7001953125,
      "changePct": 3.717590648573786,
      "pctRank": 91.40811455847255,
      "min5y": 1623.300048828125,
      "max5y": 5318.39990234375,
      "ma20": 4087.7100219726562,
      "ma60": 4234.218334960938,
      "chg1m": 269.10009765625,
      "chg3m": -300.099609375,
      "chg1mPct": 6.514794250088274,
      "chg3mPct": -6.38537005503268,
      "lastDate": "2026-08-07",
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
      "headline": "Iran says Oman deal is in 'final stages' but US must act to open Hormuz - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxQLVlSazBucFNIOGZ3aG91cDZhcTFfMWI4NWMycVczNWtmVHRKTU54WlJud1JqVUxCOW84U1p0OU5aSjdBNnJHS2xmLVVIaVdGZUpNemJKaTA5aV9TU1NHaHlZMEo1X1VjX2wxTExReTl0Tk5SYkRsMWsxWUo3UWw3UE1iV0N2UmJydWZFeHZpX01Ba1NISVdtei01OXRnMUtpem80dW5wa1FKNnhNQzZOMGlJMG8?oc=5",
      "datetime": 1786296971,
      "headlineKo": "이란은 오만 협정이 '최종 단계'에 있지만 미국은 호르무즈 개방을 위해 조치를 취해야 한다고 말했습니다."
    },
    {
      "headline": "Trump says U.S. is 'low-keying it' with Iran, stresses economic pain, according to Axios interview - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMizgFBVV95cUxOazVhN1R5WHRFQTBvX1BRNWoyT1F4WGlKVXBncE5ad1h2TVZqM0ZPLWdEYy1OVkdDYnE2THh4Z2twaGtiRXBMdVY3V3NBT01UeGxuVlljODZHUVptY3NqNnVldHNDOEIzYndQQi0zUExFbExpVGdQbS0zS2ppeGpMbWlvVnZsNS10aVBLaXR1ZDA4Q0piT09XVHR4bjRNSk5qaDQtOGwzWm1seTB0UXlVUl9uN3FIRlVCWUdNS0lNX2xWUWR2ZHdTNnVqdS1sdw?oc=5",
      "datetime": 1786295999,
      "headlineKo": "Axios 인터뷰에 따르면 트럼프는 미국이 이란에 대해 '낮은 입장'을 유지하고 있으며 경제적 고통을 강조하고 있다고 말했습니다."
    },
    {
      "headline": "Netanyahu says Israel won't pull out of Gaza before Hamas disarms - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxOMm5hSE0yMGxRN0hITzZOLXp3R2tCX1dRc1IxaWp3MmZ5Uzc5T20yYmQxVlQ2ZDUzdkppNUJRNzJQcDNwaDh4aGd2cmI1S1lKY2lKRzNBUnJXVVpfOVNwa1JDM2JLenNkMi1YQ2h4MFJ3Yk1HM0FBY2RZZTVnbXd5QmhxU3ZKWTNQZDNEWmdEYVVBUzV3b2tZMEx5TDVTOER0SVZsemE4Z1F2VFJ0Ym9qX3Zn?oc=5",
      "datetime": 1786291554,
      "headlineKo": "네타냐후는 하마스가 무장해제하기 전에는 이스라엘이 가자에서 철수하지 않을 것이라고 말했다 - 로이터"
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
      "headline": "Iran's Pezeshkian recently met Supreme Leader Khamenei, state media says - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxQLTd6TExsQVUzWU1OTlNGdzREQVBSY2R5STlrTVBra3ZPOWozaERiVC1zd3FDMmJJOTEwS2pIemlUcUNZZ2l5Y1JGMjljUHlqTWJ4RC1fRjFRNEtuc1JCd1BFOEM5VzRwRnAyc3N0ejEtOGlhT2Y5VHNPWXd1a2puYXNxTS1fQjJpSzFrTlpYUDd5UFlCRFloQWhQZDdNM1FqZEFOYXNpYmEtTmdpUFFockU0TnhKSVpfNmd5SmRJZmp3UQ?oc=5",
      "datetime": 1786278169,
      "headlineKo": "이란의 페제쉬키안이 최근 하메네이 최고 지도자를 만났다고 국영 언론이 밝혔습니다. - 로이터"
    },
    {
      "headline": "Passage of ships to Black Sea continues smoothly, Turkish officials say - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiugFBVV95cUxQT0gyU21ScmZKOEVnYlkwcjVrb2hwZ0I4M01vYkRrS0ZsclJPejZINnRibXNCOWdTYVp5WG81Y3BndlhncFdHTkpJV1NuNkhvdzdQNkktWjhQVk8zQmpKQUhodGMzYmdyOV84bWFwZHdWN0RxRFppVnZobk5pWEd0ejBhWklHcnljNUp1emF4ckdFcWJRY2xFeUNYNnl2cDI1Z0ROMlBYbTlFbE1kdWJBM09Na0M3LWdEbmc?oc=5",
      "datetime": 1786275189,
      "headlineKo": "흑해로의 선박 통행이 순조롭게 진행되고 있다고 터키 관리들이 밝혔습니다 - Reuters"
    },
    {
      "headline": "Talks with US won't happen while interim deal is breached, Iranian minister says - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMizAFBVV95cUxNRllnWjhRYk9ZMlhGdzE1NGtIRlpuOXJ0Z0ZuVFJsTVlzUUdlN1Juai1YUGE5WHVnajEtejY4ekktRi1FNUlBLWdzdDRFS0dFNUJ4elhjalNudmVsVkpoYTgybnBNVXB6UXBwTEtlUGtwWHVLM091SzFkMTdKOUFrZ2w1WmpkcFoxQkJVUFlvSC1GMzhlYkM5TWRaVnJHMmhXLXhXSXJnd2FxVkJIOHpNeUE2bkFvSVY1YWMtQ2lNWWNHY2Jma0I1cHA2Q0Y?oc=5",
      "datetime": 1786272749,
      "headlineKo": "이란 장관은 \"임시 협정이 파기되는 동안 미국과 대화는 이뤄지지 않을 것\"이라고 말했다 - 로이터 통신"
    },
    {
      "headline": "Russia says it hit fuel storage facilities in Ukrainian ports overnight - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxQSmJnek5pZHJ3UUNSeXFwWXg1cXd0WWpIZUd5a2lHVTBnVE0tZDNmLVU4a2NzbEd0NGsteXFZYW93RXJwci1tSjhYNzdKQi1UcGJ6VnpxWjZZaUYzOUxHX3Utd2dGdUdnT0dHVTZna3hxMkVxSGM4Q29JMlpwZjVucmwxcHRSZ3ZZd3gzWnhjRmxaZUhteFZNR3ZjVmdkbnBCbk4yR0FqcC1xQ2t5MlFz?oc=5",
      "datetime": 1786258560,
      "headlineKo": "러시아는 밤새 우크라이나 항구의 연료 저장 시설을 공격했다고 밝혔습니다."
    },
    {
      "headline": "Yemen's Houthis attack Saudi refinery after kingdom signs defence pact - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxNVzBVeVBiZENRc3B0WldHbXZqbXBjLU5ucDVuODRNY3pIWFRKaWlES0lzRDVoWEFjOFBLQVkxeGVHd0pHWWV6Y0V0OFphUk81YksyX3BHQ0I2MVY2RHdfNDY1dE9XdGozaVQ0RWsyaXNieWlRT2RYdHNRNEp4ZHptOHBBTVFST2pfZXVIbkJZUlIteElMRTlQWEt5eGZ6RU9JMjRtUmdCYWVXUUM0TUE?oc=5",
      "datetime": 1786240080,
      "headlineKo": "예멘 후티 반군, 사우디 왕국이 방위 협정 체결한 후 사우디 정유소 공격 - 로이터 통신"
    },
    {
      "headline": "China July factory-gate inflation eases to 3-month low, CPI slows - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxOaVNBcVdFSHViUm10d0NJVTdNYVJOdDgwZ3FvTy1JbFVwTVVlWmN1a1B3UjRaTWdYOG5VRm0yZWZXUWVKMEtLVzk4azgwcHVuX1Y3LWFrMGhnam0zRFU1dnRFQlBaSmpEOUVzM0sxUVYybml4QkIwNlVIck1LNE5wQTBEcWUtaFhZMGdCTFpnS0R5QTNDLWJheUNGT3VINWtSRzBFek13?oc=5",
      "datetime": 1786239780,
      "headlineKo": "중국 7월 공장 인플레이션이 3개월 최저치로 완화되고 CPI도 둔화 - Reuters"
    }
  ],
  "_fetched_at": 1786302128.4090624,
  "_updated_label": "2026-08-10 04:02"
};
