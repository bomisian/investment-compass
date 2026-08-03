// 자동 생성 파일 - buy_signal_telegram.py 실행 시마다 갱신됨. 직접 수정하지 마세요.
// 시장 환경 지표(야후) + 시장 헤드라인(Finnhub). 이 파일이 없어도 대시보드는 정상 동작함.
const MARKET_DATA = {
  "indicators": {
    "vix": {
      "current": 15.739999771118164,
      "prevClose": 15.989999771118164,
      "changeAbs": -0.25,
      "changePct": -1.563477195612979,
      "pctRank": 26.671974522292995,
      "min5y": 11.859999656677246,
      "max5y": 52.33000183105469,
      "ma20": 17.235499811172485,
      "ma60": 17.417333300908407,
      "chg1m": -0.4099998474121094,
      "chg3m": -2.5500011444091797,
      "chg1mPct": -2.53869880555094,
      "chg3mPct": -13.94205039237778,
      "lastDate": "2026-08-03",
      "bars": 1256,
      "symbol": "^VIX",
      "label": "VIX (공포지수)",
      "unit": "",
      "digits": 2
    },
    "us10y": {
      "current": 4.688000202178955,
      "prevClose": 4.744999885559082,
      "changeAbs": -0.05699968338012695,
      "changePct": -1.2012578452024754,
      "pctRank": 97.84860557768924,
      "min5y": 1.1759999990463257,
      "max5y": 4.98799991607666,
      "ma20": 4.614149975776672,
      "ma60": 4.525883316993713,
      "chg1m": 0.20300006866455078,
      "chg3m": 0.3100004196166992,
      "chg1mPct": 4.526199835483212,
      "chg3mPct": 7.080868775997729,
      "lastDate": "2026-08-03",
      "bars": 1255,
      "symbol": "^TNX",
      "label": "미국 10년물 금리",
      "unit": "%",
      "digits": 2
    },
    "us3m": {
      "current": 3.7029998302459717,
      "prevClose": 3.681999921798706,
      "changeAbs": 0.020999908447265625,
      "changePct": 0.5703397309418434,
      "pctRank": 36.733067729083665,
      "min5y": 0.019999999552965164,
      "max5y": 5.3480000495910645,
      "ma20": 3.720249962806702,
      "ma60": 3.6576666633288064,
      "chg1m": 0.034999847412109375,
      "chg3m": 0.12799978256225586,
      "chg1mPct": 0.9541943177728376,
      "chg3mPct": 3.5804134504889977,
      "lastDate": "2026-08-03",
      "bars": 1255,
      "symbol": "^IRX",
      "label": "미국 3개월 금리",
      "unit": "%",
      "digits": 2
    },
    "oil": {
      "current": 80.44999694824219,
      "prevClose": 84.66999816894531,
      "changeAbs": -4.220001220703125,
      "changePct": -4.984057295339482,
      "pctRank": 64.12092283214001,
      "min5y": 55.27000045776367,
      "max5y": 123.69999694824219,
      "ma20": 80.87399978637696,
      "ma60": 85.09099985758463,
      "chg1m": 11.759994506835938,
      "chg3m": -21.490005493164062,
      "chg1mPct": 17.120387376412477,
      "chg3mPct": -21.081032939464787,
      "lastDate": "2026-08-03",
      "bars": 1257,
      "symbol": "CL=F",
      "label": "WTI 유가",
      "unit": "$",
      "digits": 1
    },
    "dollar": {
      "current": 99.91000366210938,
      "prevClose": 99.80000305175781,
      "changeAbs": 0.1100006103515625,
      "changePct": 0.11022104908605514,
      "pctRank": 35.24264120922832,
      "min5y": 92.04000091552734,
      "max5y": 114.11000061035156,
      "ma20": 100.89600105285645,
      "ma60": 100.13933372497559,
      "chg1m": -0.9499969482421875,
      "chg3m": 1.7000045776367188,
      "chg1mPct": -0.9418966314627273,
      "chg3mPct": 1.7309893019900207,
      "lastDate": "2026-08-03",
      "bars": 1257,
      "symbol": "DX-Y.NYB",
      "label": "달러지수(DXY)",
      "unit": "",
      "digits": 1
    },
    "gold": {
      "current": 4098.5,
      "prevClose": 4049.10009765625,
      "changeAbs": 49.39990234375,
      "changePct": 1.2200217616833988,
      "pctRank": 87.11217183770883,
      "min5y": 1623.300048828125,
      "max5y": 5318.39990234375,
      "ma20": 4064.3500244140623,
      "ma60": 4265.858337402344,
      "chg1m": -14.2001953125,
      "chg3m": -531.39990234375,
      "chg1mPct": -0.34527669506969766,
      "chg3mPct": -11.477567842767929,
      "lastDate": "2026-08-03",
      "bars": 1257,
      "symbol": "GC=F",
      "label": "금",
      "unit": "$",
      "digits": 0
    },
    "us30y": {
      "current": 5.230999946594238,
      "prevClose": 5.275000095367432,
      "changeAbs": -0.04400014877319336,
      "changePct": -0.8341260280134368,
      "pctRank": 99.8406374501992,
      "min5y": 1.6779999732971191,
      "max5y": 5.275000095367432,
      "ma20": 5.123750066757202,
      "ma60": 5.033966716130575,
      "chg1m": 0.24599981307983398,
      "chg3m": 0.2649998664855957,
      "chg1mPct": 4.934800531417541,
      "chg3mPct": 5.336283975247101,
      "lastDate": "2026-08-03",
      "bars": 1255,
      "symbol": "^TYX",
      "label": "미국 30년물 금리",
      "unit": "%",
      "digits": 2
    }
  },
  "yieldSpread": 0.9850003719329834,
  "sector": {
    "groups": {
      "빅테크·SW": {
        "ret1m": 4.625665570912663,
        "ret3m": -0.7705490714926988,
        "ret6m": -0.4586444245948229,
        "ret1y": 3.973165775452947,
        "winRate": 60.8,
        "count": 9
      },
      "반도체": {
        "ret1m": -12.237789880666195,
        "ret3m": 15.705787401497705,
        "ret6m": 68.24301464340297,
        "ret1y": 224.233044232472,
        "winRate": 71.5,
        "count": 15
      }
    },
    "pair": [
      "빅테크·SW",
      "반도체"
    ],
    "corr60": 0.14046581754720422,
    "corrPctRank": 0.2510460251046025,
    "corrMin5y": 0.11496792019743002,
    "corrMedian5y": 0.7115782038222396,
    "corrMax5y": 0.9346528705205663
  },
  "news": [
    {
      "headline": "Jim Cramer wants to 'replenish' our position in this data center play",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/03/jim-cramer-wants-to-replenish-our-position-in-this-data-center-play.html",
      "datetime": 1785777151,
      "headlineKo": "Jim Cramer는 이 데이터 센터 플레이에서 우리의 위치를 ​​'보충'하고 싶어합니다."
    },
    {
      "headline": "Here's why a Starbucks bear changed his tune and upgraded the stock",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/03/heres-why-a-starbucks-bear-changed-his-tune-and-upgraded-the-stock.html",
      "datetime": 1785775841,
      "headlineKo": "스타벅스 곰이 태도를 바꾸고 주식을 업그레이드한 이유는 다음과 같습니다."
    },
    {
      "headline": "Wall St starts the month strong as Mideast deal hopes rise - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxQTC1HdWxXY3dmcFlCNm9FZ3N5VnVhSWg0ZHV4a1RRdUdlUVM5QUhNYUlueDN2akloUFFEUWRIWXNHeFk1VEFHMDhBRTV1XzY5TnBxUXlVQk96NkFMSnNuTURuTzhCOVRBUkVVT2p1VjBOZFBZdk4zM01WQlFDY1ZZTGhqR2NaeXNrVWN0Ym5aQ1VENmZ5aGRKRWRoMHlNRTVxMWxVSFVrOA?oc=5",
      "datetime": 1785774900,
      "headlineKo": "월스트리트는 중동 협상이 상승할 것이라는 희망으로 한 달을 강하게 시작했습니다 - Reuters"
    },
    {
      "headline": "OPEC+ oil output hike is irrelevant for now, not for later - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxOZ1F5SEtvVzlTU0VibXRmNGx4ZldyYllQcHBfSEkzRHVLVGdrNUxMLUZtQXZsT1pTWjJ4Z1F0ekFyN3NkWjRITjdCc2NtcmpFZ0k2OWN5Z25WOVVFVHpJNEVWQkU3emxZYkUtVFhFand1cWVHSWUyRUpQa1FOOUtPWlRKUzRVQUs3V3oxcWphVzVKUUhSSUNZaHNtdHVkM1U5VXE2Q0ZPNzE4UG5WQmdVS2cwZlU3UnNN?oc=5",
      "datetime": 1785774491,
      "headlineKo": "OPEC+ 원유 생산량 증가는 지금은 중요하지 않고 나중도 중요하지 않습니다 - Reuters"
    },
    {
      "headline": "US signs deal to boost Patriot and THAAD missile parts production - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxNZVpSLU9DNzZlb3plSWpueFdNUFN3ZmxuZkQxN1RhRTlaZlBteHFVVEVXN0p4NnBOY2paYTNwNGlxaGdfWGRCRjVXazlOLVUtUVZnNlB4eFB1RFBKQjBtXzQtbEN6djVNZGs5dWJBTXYtVmxSVEtfU1I1WFdJWmU4dEQ2eU8xX1Z5MVNCV1pjdkJ6dVRaVnNwbm9HbmVSaFFqd3k1aGdmbW44NEUyRENTZmtMZk9iVGxpRklr?oc=5",
      "datetime": 1785771344,
      "headlineKo": "미국, 패트리어트와 사드 미사일 부품 생산을 늘리는 계약 체결 - 로이터 통신"
    },
    {
      "headline": "We're trimming an industrial and buying another name. Plus, 2 more stocks we're eyeing",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/03/were-trimming-an-industrial-and-buying-another-name-plus-2-more-stocks-were-eyeing-.html",
      "datetime": 1785771236,
      "headlineKo": "우리는 산업을 다듬고 다른 이름을 구입하고 있습니다. 게다가 우리가 주목하고 있는 주식이 2개 더 있습니다."
    },
    {
      "headline": "'Spider-Man: Brand New Day' beats out 'Avengers: Endgame' for highest domestic opening ever",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/03/spider-man-brand-new-day-debut-360m-highest-domestic-opening-ever.html",
      "datetime": 1785768929,
      "headlineKo": "'스파이더맨: 브랜 뉴 데이', '어벤져스: 엔드게임' 제치고 국내 개봉 최고 기록"
    },
    {
      "headline": "Visa to buy cybersecurity firm BioCatch for $2.4 billion amid surge in AI-powered scams",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/03/visa-buys-biocatch-fraud-detection.html",
      "datetime": 1785766277,
      "headlineKo": "AI 기반 사기 급증에 Visa, 사이버 보안 회사인 BioCatch를 24억 달러에 인수"
    },
    {
      "headline": "Jim Cramer's top 10 things to watch in the stock market Monday",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/03/jim-cramers-top-10-things-to-watch-in-the-stock-market-monday.html",
      "datetime": 1785762480,
      "headlineKo": "짐 크레이머가 월요일 주식 시장에서 주목해야 할 10가지 항목"
    },
    {
      "headline": "Senate appears ready to advance Blanche after Cornyn strikes deal",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/03/todd-blanche-doj-ag-senate-cornyn.html",
      "datetime": 1785761540,
      "headlineKo": "상원은 Cornyn이 거래를 성사시킨 후 Blanche를 발전시킬 준비가 된 것으로 보입니다."
    },
    {
      "headline": "Nissan surprises with stronger first-quarter profit, maintains outlook - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxOVm1qbVZqQ2FBVWIxQXlqS194RWlkSkNnWnd6SFZyWUhWeFpMRlRjTWRZVldjQWZrcU01R0NlMDZKZ0hYVllHZzNVZndvMThyRVlzamJUaEh3N2RHa2lmOWZKU3VNZ3NnbHkyWTRuZEN4ZVE1R2luSlplSkNuVDlkTXVhS2xVS0JBS2lzSHFDcW9Oc25zV3RpN0hQanFOODlGZFY2Q0F3?oc=5",
      "datetime": 1785755529,
      "headlineKo": "닛산, 1분기 이익 강세로 놀라움, 전망 유지 - 로이터"
    },
    {
      "headline": "How Iran is widening its pressure campaign to force US concessions - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxQU2VYbG9DT1JoZWlaZkxlVTc4T01mcjJ0cU9rc2FCWWxuY1dONTVmN0ZTU1RUZzlLUTNGbzgzYURCTFFqZzRWVXZSWXZKZC1Ldm05dFVOdmNZdnlxRVBBUzE2VDVjSU1wMlFXMkFBeDlKeVBuRWQxa2tYV1hPb0hvOHdRd0JvUGREek5HZXhuVXpMR0RBZzdKSE1fNmIyQWVzRVdfUEEzdkt5Zm1XNUVOVnpnbEg3bnNu?oc=5",
      "datetime": 1785751370,
      "headlineKo": "이란이 미국의 양보를 강요하기 위해 압력 캠페인을 확대하는 방법 - 로이터"
    }
  ],
  "_fetched_at": 1785783601.7212255,
  "_updated_label": "2026-08-04 04:00"
};
