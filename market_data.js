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
      "current": 4340.7001953125,
      "prevClose": 4242.0,
      "changeAbs": 98.7001953125,
      "changePct": 2.3267372775223953,
      "pctRank": 90.9307875894988,
      "min5y": 1623.300048828125,
      "max5y": 5318.39990234375,
      "ma20": 4084.7600219726564,
      "ma60": 4233.235001627604,
      "chg1m": 210.10009765625,
      "chg3m": -359.099609375,
      "chg1mPct": 5.086430365783006,
      "chg3mPct": -7.640742676248468,
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
      "headline": "Verizon mobile service down for thousands of customers in the U.S., Downdetector shows",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/08/verizon-mobile-outage-downdetector.html",
      "datetime": 1786230840,
      "headlineKo": "DownDetector는 미국 내 수천 명의 고객에 대한 Verizon 모바일 서비스 중단을 보여줍니다."
    },
    {
      "headline": "Iran says deal on Strait of Hormuz is close but not enough to open the waterway - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxQX3lCSkcxU1lGMG5WLWZnQ3BPMzVqREVjajhDeUVndVBndkNPSklSaWV2RVM2a3FKcWhBMEwtcVRfbUgwNXZGMDNJUy1PU1NCVWszOG03N1RySFdMZlBrMTJ0SHo3bmc0MUt1V3pMb052UmxRSFg3cDhkY2VGR2hyMlRyMjBIYVBRajFwWkJOa05sMFhkUEZ1M3NuNjFRTURGS2pDSzBjOWNRSVlidXBPNnVWNlJ2U1VRMWxpQ2E1WWhzdw?oc=5",
      "datetime": 1786229698,
      "headlineKo": "이란 \"호르무즈 해협 협상 타결됐지만 수로 개방에는 충분치 않다\" - 로이터"
    },
    {
      "headline": "Turkey, Pakistan, Saudi Arabia defence pact technically same as NATO's Article 5, Turkish minister says - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxOLVVZeXNFQ1JsdkxwT29TdjNMRmVVM0V6Y3B1NzB3SDVpMzRaTXdFZjJpcWEteGxQd1dWalV1WDlnS2NhSVlTZGhYVHhLU2tUNHhjZ1I4Zl9WbFFZaVRudVU3TEFCMnFtRFlGU2ZYZDNreVlQTjljdWFMbndxVGdyNUlaZFJPUjRZd0F2SnB5dUtvUWZYYWFJUmpjNjVWeFdTTGwyaU8zOGdtdUFjQW5zb0E2aUt1VEUybWxjX2pLZHdwTlVSN2lzbg?oc=5",
      "datetime": 1786218833,
      "headlineKo": "터키·파키스탄·사우디아라비아 국방협정, 나토 제5조와 기술적으로 동일하다고 터키 장관 \"로이터\""
    },
    {
      "headline": "Hunter Biden says Joe Biden’s cancer has spread further and is ‘very painful’",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/08/hunter-biden-says-joe-bidens-cancer-has-spread-is-very-debilitating.html",
      "datetime": 1786209925,
      "headlineKo": "헌터 바이든은 조 바이든의 암이 더 퍼졌고 '매우 고통스럽다'고 말했습니다."
    },
    {
      "headline": "Elevator giant Otis wants to be a defensive play in an volatile market. It has to prove itself first",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/08/elevator-giant-otis-stock-wall-street.html",
      "datetime": 1786190401,
      "headlineKo": "거대 엘리베이터 회사인 Otis는 변동성이 큰 시장에서 방어적인 역할을 하고 싶어합니다. 먼저 자신을 증명해야합니다"
    },
    {
      "headline": "A record-breaking week for options powers S&P 500 surge; volatility gauge is near 2026 low",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/08/record-breaking-week-for-options-powers-sp-500-surge.html",
      "datetime": 1786189762,
      "headlineKo": "옵션에 대한 기록적인 한 주 동안 S&P 500 급등이 힘을 얻었습니다. 변동성 게이지는 2026년 최저치에 가깝습니다."
    },
    {
      "headline": "UAE says Iran attacked ADNOC vessel with missile in Strait of Hormuz - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxQajV4Uk9FTWd2WFJTWWVSZS1pdkl4OGFERFdzeExaYy1udkYxWGdXYWxRdHUwd2kwLVRtRTdhRkdVdUZuNXZ3U09EQUR3OXUwUzVtZmZZeWZkWmlkTThUTDBYNVBjbE9IWVBQZnhhcHBfcFVnZTc0NG1uMk54dElXNkhzQUFZR3VkRW5QZkthVjdfdTJOaXR6YWxiZmtfdzJROGg3bWFuOVhuV2ZkTDNLNkg4d18?oc=5",
      "datetime": 1786189617,
      "headlineKo": "UAE는 이란이 호르무즈 해협에서 ADNOC 선박을 미사일로 공격했다고 밝혔습니다."
    },
    {
      "headline": "Iran's Revolutionary Guard says re-opening Strait of Hormuz does not depend on talks with Oman - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiywFBVV95cUxNM2lHbkI1OWxqUXdmZjN1SmEyTGFVSXVWTmowOFdFTzdWdTh2dVhIZFA1dF9IVy1fQ0dEZ2RtR0kxdkVOdDIzRFZVVkhaNXhyRjN2T292Q2d2UV9hUC15ZC00V0pFa1FoWUpfLWg0YTh1c2V6aUgwblZwTVhtX2dQZHFXN3N3X3hFNHI0bWViZUhXR3kyc0VxVzlnY2Z4RnhuN3dSeEUySjRBZks0cVlnSkk0X1NPNG03MGJCZTgwSU1UeWtqVDZfLUNwSQ?oc=5",
      "datetime": 1786185686,
      "headlineKo": "이란 혁명수비대 \"호르무즈 해협 재개는 오만과의 대화에 달려있지 않다\" - 로이터 통신"
    },
    {
      "headline": "US expects deal soon on Strait of Hormuz; Sunni powers unite in defense pact - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxPeTlKQUF3VjE1MnpMNE5PNFRFZmloMHhQMjdHUmhwU0s4QWdWQVl6TFA4NjJCSi1qbnJyRFVjajVIamtFOVd3eHpSdlozSDd4YzlrdW93UHdfaGVDOEVicFByV1hkemlNTFFxbWxiNW5OWUJ4Y3FRbDBkd05nX05pTVNOUUpHc3hjVFlqR3daRnpBNkVDZF91dHV3WTJYQ0ZqLUh3VVVaMV9DU1FtWXlocDlxb3d0cGw1eFVKVA?oc=5",
      "datetime": 1786143720,
      "headlineKo": "미국은 호르무즈 해협에서 곧 협상을 기대하고 있습니다. 수니파 세력, 국방 협정으로 단결 - 로이터"
    },
    {
      "headline": "US Senate passes Russia sanctions championed by Graham; US House next - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxQb0pzeU9VRmJkMDBtRWM3MFhyR3JKTENJeDVfb3pNNHpycXViQnF6LWpveDVmZlotcWVrV0M3cTV4Q1hyTUlPcnRwaDFqRW5fWE5BdlFSYVd4NnZ5MWU2X241OU1QVzZkREh5MjVVMFBlY0k3RDgtM2RDUEFWNVVwUlJ4RFo4OHpGanRuclQ1WXV0bmVZX1MtRUZWak5ERjJ1Y0FLQlR3SlBtS2VyM0EyWUlJQVRJdw?oc=5",
      "datetime": 1786141238,
      "headlineKo": "미국 상원은 그레이엄이 옹호하는 러시아 제재를 통과시켰습니다. 미국 하원 다음 - 로이터"
    },
    {
      "headline": "Houthis strike Marib again as UN warns Yemen nearing wider conflict - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiugFBVV95cUxOSlRnMTdUcUhvNmFDVTdUd2JoQzVrRGZ5SHpDNTB1VGNzd0h1dnpCNUszSEJWRlRlbWpUQmtKOUM2WklINTcwcGh6M0NucGU2d19yaUlRZDdPcDZCcG91RE9oYWl6U3ZGTWV3dlpJa3IwNll2blJUMXBVTjRUbkwwU2NVUmVpbkw2XzRpV0RMUDlMQy1JM3dpNVEwcEJkMVlrR1BxVVhlM3JIQ05YVDJaR0lVQWpUYkYybEE?oc=5",
      "datetime": 1786137240,
      "headlineKo": "유엔이 예멘의 분쟁이 더 커질 것이라고 경고하자 후티 반군이 마리브를 다시 공습했습니다. - 로이터"
    },
    {
      "headline": "‘SaaSpocalypse’ debate intensifies as software stocks swing wildly",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/07/saaspocalypse-debate-intensifies-as-software-stocks-swing-wildly.html",
      "datetime": 1786134137,
      "headlineKo": "소프트웨어 주가 급등하면서 'SaaS종말론' 논쟁 격화"
    }
  ],
  "_fetched_at": 1786233602.5860937,
  "_updated_label": "2026-08-09 09:00"
};
