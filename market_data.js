// 자동 생성 파일 - buy_signal_telegram.py 실행 시마다 갱신됨. 직접 수정하지 마세요.
// 시장 환경 지표(야후) + 시장 헤드라인(Finnhub). 이 파일이 없어도 대시보드는 정상 동작함.
const MARKET_DATA = {
  "indicators": {
    "vix": {
      "current": 15.800000190734863,
      "prevClose": 15.989999771118164,
      "changeAbs": -0.18999958038330078,
      "changePct": -1.1882400444213035,
      "pctRank": 27.46815286624204,
      "min5y": 11.859999656677246,
      "max5y": 52.33000183105469,
      "ma20": 17.23849983215332,
      "ma60": 17.418333307902017,
      "chg1m": -0.34999942779541016,
      "chg3m": -2.4900007247924805,
      "chg1mPct": -2.1671791706658983,
      "chg3mPct": -13.61400000083427,
      "lastDate": "2026-08-03",
      "bars": 1256,
      "symbol": "^VIX",
      "label": "VIX (공포지수)",
      "unit": "",
      "digits": 2
    },
    "us10y": {
      "current": 4.685999870300293,
      "prevClose": 4.744999885559082,
      "changeAbs": -0.05900001525878906,
      "changePct": -1.243414471691549,
      "pctRank": 97.76892430278885,
      "min5y": 1.1759999990463257,
      "max5y": 4.98799991607666,
      "ma20": 4.614049959182739,
      "ma60": 4.525849978129069,
      "chg1m": 0.20099973678588867,
      "chg3m": 0.3080000877380371,
      "chg1mPct": 4.481599348992375,
      "chg3mPct": 7.035178232872771,
      "lastDate": "2026-08-03",
      "bars": 1255,
      "symbol": "^TNX",
      "label": "미국 10년물 금리",
      "unit": "%",
      "digits": 2
    },
    "us3m": {
      "current": 3.7049999237060547,
      "prevClose": 3.681999921798706,
      "changeAbs": 0.023000001907348633,
      "changePct": 0.6246605756610888,
      "pctRank": 36.733067729083665,
      "min5y": 0.019999999552965164,
      "max5y": 5.3480000495910645,
      "ma20": 3.720349967479706,
      "ma60": 3.6576999982198077,
      "chg1m": 0.03699994087219238,
      "chg3m": 0.12999987602233887,
      "chg1mPct": 1.008722493057554,
      "chg3mPct": 3.636360119954888,
      "lastDate": "2026-08-03",
      "bars": 1255,
      "symbol": "^IRX",
      "label": "미국 3개월 금리",
      "unit": "%",
      "digits": 2
    },
    "oil": {
      "current": 79.98999786376953,
      "prevClose": 84.66999816894531,
      "changeAbs": -4.680000305175781,
      "changePct": -5.527341923212985,
      "pctRank": 62.609387430389816,
      "min5y": 55.27000045776367,
      "max5y": 123.69999694824219,
      "ma20": 80.85099983215332,
      "ma60": 85.08333320617676,
      "chg1m": 11.299995422363281,
      "chg3m": -21.95000457763672,
      "chg1mPct": 16.45071338001825,
      "chg3mPct": -21.532277861434512,
      "lastDate": "2026-08-03",
      "bars": 1257,
      "symbol": "CL=F",
      "label": "WTI 유가",
      "unit": "$",
      "digits": 1
    },
    "dollar": {
      "current": 99.9800033569336,
      "prevClose": 99.80000305175781,
      "changeAbs": 0.18000030517578125,
      "changePct": 0.18036102171502974,
      "pctRank": 35.87907716785998,
      "min5y": 92.04000091552734,
      "max5y": 114.11000061035156,
      "ma20": 100.89950103759766,
      "ma60": 100.14050038655598,
      "chg1m": -0.8799972534179688,
      "chg3m": 1.7700042724609375,
      "chg1mPct": -0.8724938014006436,
      "chg3mPct": 1.8022648294075603,
      "lastDate": "2026-08-03",
      "bars": 1257,
      "symbol": "DX-Y.NYB",
      "label": "달러지수(DXY)",
      "unit": "",
      "digits": 1
    },
    "gold": {
      "current": 4089.800048828125,
      "prevClose": 4049.10009765625,
      "changeAbs": 40.699951171875,
      "changePct": 1.0051604107152956,
      "pctRank": 86.9530628480509,
      "min5y": 1623.300048828125,
      "max5y": 5318.39990234375,
      "ma20": 4063.9150268554686,
      "ma60": 4265.7133382161455,
      "chg1m": -22.900146484375,
      "chg3m": -540.099853515625,
      "chg1mPct": -0.556815362094123,
      "chg3mPct": -11.665475818218345,
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
  "yieldSpread": 0.9809999465942383,
  "sector": {
    "groups": {
      "빅테크·SW": {
        "ret1m": 4.450843697874229,
        "ret3m": -0.9363542625730581,
        "ret6m": -0.6249707856412989,
        "ret1y": 3.7994341820870803,
        "winRate": 60.8,
        "count": 9
      },
      "반도체": {
        "ret1m": -11.871340129396291,
        "ret3m": 16.188915127612557,
        "ret6m": 68.94551074947348,
        "ret1y": 225.58687429498883,
        "winRate": 71.5,
        "count": 15
      }
    },
    "pair": [
      "빅테크·SW",
      "반도체"
    ],
    "corr60": 0.14404097435622956,
    "corrPctRank": 0.33472803347280333,
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
    }
  ],
  "_fetched_at": 1785780002.122709,
  "_updated_label": "2026-08-04 03:00"
};
