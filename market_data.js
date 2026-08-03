// 자동 생성 파일 - buy_signal_telegram.py 실행 시마다 갱신됨. 직접 수정하지 마세요.
// 시장 환경 지표(야후) + 시장 헤드라인(Finnhub). 이 파일이 없어도 대시보드는 정상 동작함.
const MARKET_DATA = {
  "indicators": {
    "vix": {
      "current": 15.569999694824219,
      "prevClose": 15.989999771118164,
      "changeAbs": -0.4200000762939453,
      "changePct": -2.626642165765179,
      "pctRank": 25.238853503184718,
      "min5y": 11.859999656677246,
      "max5y": 52.33000183105469,
      "ma20": 17.22699980735779,
      "ma60": 17.414499966303506,
      "chg1m": -0.5799999237060547,
      "chg3m": -2.720001220703125,
      "chg1mPct": -3.5913308817702467,
      "chg3mPct": -14.8715204185363,
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
      "current": 79.66000366210938,
      "prevClose": 84.66999816894531,
      "changeAbs": -5.0099945068359375,
      "changePct": -5.917083518579157,
      "pctRank": 61.575178997613364,
      "min5y": 55.27000045776367,
      "max5y": 123.69999694824219,
      "ma20": 80.83450012207031,
      "ma60": 85.07783330281576,
      "chg1m": 10.970001220703125,
      "chg3m": -22.279998779296875,
      "chg1mPct": 15.970302563405387,
      "chg3mPct": -21.85599200088613,
      "lastDate": "2026-08-03",
      "bars": 1257,
      "symbol": "CL=F",
      "label": "WTI 유가",
      "unit": "$",
      "digits": 1
    },
    "dollar": {
      "current": 99.96399688720703,
      "prevClose": 99.80000305175781,
      "changeAbs": 0.16399383544921875,
      "changePct": 0.16432247538526532,
      "pctRank": 35.87907716785998,
      "min5y": 92.04000091552734,
      "max5y": 114.11000061035156,
      "ma20": 100.89870071411133,
      "ma60": 100.14023361206054,
      "chg1m": -0.8960037231445312,
      "chg3m": 1.753997802734375,
      "chg1mPct": -0.8883637891358209,
      "chg3mPct": 1.785966621612247,
      "lastDate": "2026-08-03",
      "bars": 1257,
      "symbol": "DX-Y.NYB",
      "label": "달러지수(DXY)",
      "unit": "",
      "digits": 1
    },
    "gold": {
      "current": 4092.60009765625,
      "prevClose": 4049.10009765625,
      "changeAbs": 43.5,
      "changePct": 1.0743127843438398,
      "pctRank": 87.11217183770883,
      "min5y": 1623.300048828125,
      "max5y": 5318.39990234375,
      "ma20": 4064.055029296875,
      "ma60": 4265.760005696615,
      "chg1m": -20.10009765625,
      "chg3m": -537.2998046875,
      "chg1mPct": -0.48873238266089347,
      "chg3mPct": -11.604998294142554,
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
        "ret1m": 4.569356456918228,
        "ret3m": -0.8239539643882243,
        "ret6m": -0.5122171833215616,
        "ret1y": 3.9172078342339933,
        "winRate": 60.8,
        "count": 9
      },
      "반도체": {
        "ret1m": -13.175387870860455,
        "ret3m": 14.469657254205636,
        "ret6m": 66.44560876472936,
        "ret1y": 220.76913590320845,
        "winRate": 71.5,
        "count": 15
      }
    },
    "pair": [
      "빅테크·SW",
      "반도체"
    ],
    "corr60": 0.13141602627248444,
    "corrPctRank": 0.2510460251046025,
    "corrMin5y": 0.11496792019743002,
    "corrMedian5y": 0.7115782038222396,
    "corrMax5y": 0.9346528705205663
  },
  "news": [
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
      "headline": "Wall St starts the month strong as Mideast deal hopes rise - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxQTC1HdWxXY3dmcFlCNm9FZ3N5VnVhSWg0ZHV4a1RRdUdlUVM5QUhNYUlueDN2akloUFFEUWRIWXNHeFk1VEFHMDhBRTV1XzY5TnBxUXlVQk96NkFMSnNuTURuTzhCOVRBUkVVT2p1VjBOZFBZdk4zM01WQlFDY1ZZTGhqR2NaeXNrVWN0Ym5aQ1VENmZ5aGRKRWRoMHlNRTVxMWxVSFVrOA?oc=5",
      "datetime": 1785766281,
      "headlineKo": "월스트리트는 중동 협상이 상승할 것이라는 희망으로 한 달을 강하게 시작했습니다 - Reuters"
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
      "headline": "OPEC+ oil output hike is irrelevant for now, not for later - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxOZ1F5SEtvVzlTU0VibXRmNGx4ZldyYllQcHBfSEkzRHVLVGdrNUxMLUZtQXZsT1pTWjJ4Z1F0ekFyN3NkWjRITjdCc2NtcmpFZ0k2OWN5Z25WOVVFVHpJNEVWQkU3emxZYkUtVFhFand1cWVHSWUyRUpQa1FOOUtPWlRKUzRVQUs3V3oxcWphVzVKUUhSSUNZaHNtdHVkM1U5VXE2Q0ZPNzE4UG5WQmdVS2cwZlU3UnNN?oc=5",
      "datetime": 1785758669,
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
      "headline": "Iran war ushers in oil refining golden era. It won’t last - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxQYmQzdlBDbmtIRE9EaFVuRHRPd0pzYUtkY0VyT1FPYmVlaGsxUXJnSWt1emxRQ3p2ZFY5aXVPSGpNQVZaM0hkMThIREtfRU1YcTdQSXFrYU1FNlAyeWYxVGZoeHFWMG5kcm9rUUxzd2Z0OUY0REtwWUFyNGlTczgybWxmRng3azZackV2U2NianBjeVdDbGxXLUhLdkxhMTVvR0VsQzVPb2xxcW9zTDFLMHF3bFFpaE1JckJ3NVh3?oc=5",
      "datetime": 1785751312,
      "headlineKo": "이란 전쟁은 석유정제의 황금시대를 열었습니다. 지속되지는 않을 것이다 - 로이터"
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
    }
  ],
  "_fetched_at": 1785776426.821937,
  "_updated_label": "2026-08-04 02:00"
};
