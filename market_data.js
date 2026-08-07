// 자동 생성 파일 - buy_signal_telegram.py 실행 시마다 갱신됨. 직접 수정하지 마세요.
// 시장 환경 지표(야후) + 시장 헤드라인(Finnhub). 이 파일이 없어도 대시보드는 정상 동작함.
const MARKET_DATA = {
  "indicators": {
    "vix": {
      "current": 14.859999656677246,
      "prevClose": 15.149999618530273,
      "changeAbs": -0.28999996185302734,
      "changePct": -1.9141912155451308,
      "pctRank": 19.82484076433121,
      "min5y": 11.859999656677246,
      "max5y": 52.33000183105469,
      "ma20": 17.162499856948852,
      "ma60": 17.2674999554952,
      "chg1m": -0.9800004959106445,
      "chg3m": -2.330000877380371,
      "chg1mPct": -6.186871758019112,
      "chg3mPct": -13.55439677133265,
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
      "current": 3.7099997997283936,
      "prevClose": 3.7320001125335693,
      "changeAbs": -0.02200031280517578,
      "changePct": -0.5895046125880279,
      "pctRank": 36.65338645418327,
      "min5y": 0.019999999552965164,
      "max5y": 5.3480000495910645,
      "ma20": 3.7236999750137327,
      "ma60": 3.6659666657447816,
      "chg1m": 0.0279998779296875,
      "chg3m": 0.1119997501373291,
      "chg1mPct": 0.7604529745891245,
      "chg3mPct": 3.112833479534237,
      "lastDate": "2026-08-07",
      "bars": 1255,
      "symbol": "^IRX",
      "label": "미국 3개월 금리",
      "unit": "%",
      "digits": 2
    },
    "oil": {
      "current": 76.91000366210938,
      "prevClose": 77.29000091552734,
      "changeAbs": -0.37999725341796875,
      "changePct": -0.4916512471429256,
      "pctRank": 51.07398568019092,
      "min5y": 55.27000045776367,
      "max5y": 123.69999694824219,
      "ma20": 81.75549964904785,
      "ma60": 83.66766662597657,
      "chg1m": 4.8300018310546875,
      "chg3m": -17.899993896484375,
      "chg1mPct": 6.700890272416374,
      "chg3mPct": -18.879859041681716,
      "lastDate": "2026-08-07",
      "bars": 1257,
      "symbol": "CL=F",
      "label": "WTI 유가",
      "unit": "$",
      "digits": 1
    },
    "dollar": {
      "current": 99.5250015258789,
      "prevClose": 99.97000122070312,
      "changeAbs": -0.44499969482421875,
      "changePct": -0.4451332293592713,
      "pctRank": 31.901352426412092,
      "min5y": 92.04000091552734,
      "max5y": 114.11000061035156,
      "ma20": 100.64725074768066,
      "ma60": 100.25275039672852,
      "chg1m": -1.4150009155273438,
      "chg3m": 1.2750015258789062,
      "chg1mPct": -1.401823738164386,
      "chg3mPct": 1.297711476721533,
      "lastDate": "2026-08-07",
      "bars": 1257,
      "symbol": "DX-Y.NYB",
      "label": "달러지수(DXY)",
      "unit": "",
      "digits": 1
    },
    "gold": {
      "current": 4408.2998046875,
      "prevClose": 4242.0,
      "changeAbs": 166.2998046875,
      "changePct": 3.9203159992338517,
      "pctRank": 91.48766905330152,
      "min5y": 1623.300048828125,
      "max5y": 5318.39990234375,
      "ma20": 4088.140002441406,
      "ma60": 4234.361661783854,
      "chg1m": 277.69970703125,
      "chg3m": -291.5,
      "chg1mPct": 6.722986986535444,
      "chg3mPct": -6.202391848888178,
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
  "yieldSpread": 0.9500000476837158,
  "sector": {
    "groups": {
      "빅테크·SW": {
        "ret1m": 7.559887501745921,
        "ret3m": 0.909168033679375,
        "ret6m": 12.005623048838654,
        "ret1y": 7.156877413139728,
        "winRate": 60.8,
        "count": 9
      },
      "반도체": {
        "ret1m": -9.916831971487161,
        "ret3m": 13.468909357504245,
        "ret6m": 85.98388583266579,
        "ret1y": 247.0872202224031,
        "winRate": 71.5,
        "count": 15
      }
    },
    "pair": [
      "빅테크·SW",
      "반도체"
    ],
    "corr60": 0.20133015218951814,
    "corrPctRank": 1.9246861924686192,
    "corrMin5y": 0.11496792019743002,
    "corrMedian5y": 0.7115782038222396,
    "corrMax5y": 0.9346528705205663
  },
  "news": [
    {
      "headline": "US Senate passes Russia sanctions championed by Graham; US House next - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxQb0pzeU9VRmJkMDBtRWM3MFhyR3JKTENJeDVfb3pNNHpycXViQnF6LWpveDVmZlotcWVrV0M3cTV4Q1hyTUlPcnRwaDFqRW5fWE5BdlFSYVd4NnZ5MWU2X241OU1QVzZkREh5MjVVMFBlY0k3RDgtM2RDUEFWNVVwUlJ4RFo4OHpGanRuclQ1WXV0bmVZX1MtRUZWak5ERjJ1Y0FLQlR3SlBtS2VyM0EyWUlJQVRJdw?oc=5",
      "datetime": 1786128600,
      "headlineKo": "미국 상원은 그레이엄이 옹호하는 러시아 제재를 통과시켰습니다. 미국 하원 다음 - 로이터"
    },
    {
      "headline": "US sanctions Dubai crypto exchange for aiding Iran's IRGC, following a Reuters report - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiywFBVV95cUxNUkNKX1cxNjJBMmFrZ2tXYVNiMmxxWGJ4R1ZBb1FhNHZDTndjZVR5YW5GMzFNcWs1dnFDMGRTc0c1bFB0cnB1ZEJYek5Kb0FtcVNXSDRWZ3UtRmdrVUJYSDZBR0dVYWlaWkh4Q3lDLU9hMzc5QzVPZVNjRng0cEJxcHdsRWRqWGoyNERWbzBFVnlRN1FxeGhDbEZSMGxqQmQtTlhheUE4cFpGdlJRYXp3SThPaEJmcEl4czViLW9PZ3BGSkZId3FFRGF3OA?oc=5",
      "datetime": 1786126721,
      "headlineKo": "로이터 통신 보도에 따라 미국은 이란의 IRGC를 지원하기 위해 두바이 암호화폐 거래소를 제재했습니다 - Reuters"
    },
    {
      "headline": "A huge day and week for Corning as the S&P 500 approaches another record high",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/07/a-huge-day-and-week-for-corning-as-the-sp-500-aims-for-record-close.html",
      "datetime": 1786121957,
      "headlineKo": "S&P 500이 또 다른 최고 기록에 도달함에 따라 코닝에게는 엄청난 하루와 한 주가 될 것입니다."
    },
    {
      "headline": "Everybody wants energy security post the Iran war, but how? - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiugFBVV95cUxNY0VHNVlqVEZlcUZuWHpGVjZmak5COW1JRHVnLUVfUExEbF9NTEZ3SVRIZFhDeF84SmZ4Y2xwcDczb1oxSzNHWUFZT1JkWFhFb3FXTFJRTTFjUmpNVHdYdW5nX1A5WnNOVmpSOGRKcUduY0RhOWMwbE41eklWODdQVldLZ3RONm1SREtRZVhKTkt0cGxmTnBsWDVHNENUZWhwVjZhcG1BQ21rUGlVZ3FzSmNpamFsNFVCSnc?oc=5",
      "datetime": 1786118923,
      "headlineKo": "모두가 이란 전쟁 이후 에너지 안보를 원하지만 어떻게 그럴 수 있을까요? - 로이터"
    },
    {
      "headline": "Rockstar Energy founder builds Celsius stake, wants to take over as CEO",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/07/rockstar-energy-founder-celsius-stake-ceo.html",
      "datetime": 1786116416,
      "headlineKo": "Rockstar Energy 설립자, Celsius 지분을 구축하고 CEO 자리를 물려받길 원함"
    },
    {
      "headline": "ADNOC says attacks on vessels, staff significantly impacting operations - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxQZFZ2Y0RPOWN5S0dKcGVuQTgweVRpcHJfS1RMeFNXWjJHTkxjQU9oR3NhSGhGekVndEg5aS1QS1Jadm9ZUGU2QVdIa3pGY0VXa0dmZE9EOEZZLWd5Z194SEZNcXF6eWRjbUdkSWxfWVJXdkt4Y1I2UGJNZ0NpQ2NkZTJhREd4YzB2MlExUjdJRnFPZUZ1UFdfUF9jVXg2OHlfVHVSYW1zd0ZPaC1qTTRpaTNoV040WVFrZF8xRTV3?oc=5",
      "datetime": 1786115258,
      "headlineKo": "ADNOC은 선박에 대한 공격과 직원이 운영에 심각한 영향을 미친다고 말했습니다 - Reuters"
    },
    {
      "headline": "Cassidy supports Todd Blanche, rescuing Trump's embattled attorney general pick",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/07/blanche-ag-trump-cassidy-senate-confirmation.html",
      "datetime": 1786114491,
      "headlineKo": "캐시디는 토드 블랜치(Todd Blanche)를 지지하여 궁지에 몰린 트럼프의 법무장관 지명자를 구출했습니다."
    },
    {
      "headline": "Saudi Arabia, Turkey, Pakistan pledge mutual defence as Middle East turmoil escalates - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxNU2lUV2RTOWpHY1ZMeHh4SVNOUnV4TXZNQjZoa2ZXSmg1SnNGX2lGOEJUdy0taTQyNmJaRzNKdHdNUEQtYzhsOFROeEhHWk11LUlKTy13VmE0dlJuSHpveG1xSTBjNTZZOXJrWGNyU1NSbUpraEFHdTBjNHowdWluRUU5a0lsY3NuY1FmMDViMVJMMkN4VzVydm9aeng4eWxDV1lkVFBwWTNTVzFTaTJJcWxoUFdBTE9zZUx1U0VNYnlQTFNQd18yYg?oc=5",
      "datetime": 1786113086,
      "headlineKo": "사우디아라비아, 터키, 파키스탄, 중동 혼란이 고조됨에 따라 상호 방어를 약속 - 로이터 통신"
    },
    {
      "headline": "Jim Cramer's top 10 things to watch in the stock market Friday",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/07/jim-cramers-top-10-things-to-watch-in-the-stock-market-friday-.html",
      "datetime": 1786108198,
      "headlineKo": "Jim Cramer가 금요일 주식 시장에서 주목해야 할 10가지 항목"
    },
    {
      "headline": "Homes are selling below asking in 38 of the 50 biggest U.S. cities—if you can afford one",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/07/homes-are-selling-below-asking-in-38-of-the-50-biggest-us-cities.html",
      "datetime": 1786107601,
      "headlineKo": "여유가 있는 경우 미국 50대 도시 중 38개 도시에서 주택 가격이 아래로 판매되고 있습니다."
    },
    {
      "headline": "Martha's Vineyard African American Film Festival set for record attendance despite macro challenges",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/07/marthas-vineyard-african-american-film-festival-set-for-record-attendance.html",
      "datetime": 1786100401,
      "headlineKo": "마사스 빈야드 아프리카계 미국인 영화제(Martha's Vineyard African American Film Festival)는 거시적인 어려움에도 불구하고 기록적인 참석률을 기록했습니다."
    },
    {
      "headline": "Trump to host mining CEOs as administration seeks minerals for defense supply chains - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMi0wFBVV95cUxPOC1sWW4tTHpEM1NiQWVIbnZMRVlvcVcyNTl2UE1QU1lqSlBVaTlNai1UUm1yR0htazhtZjA1N3Jtb2dEaHhnWklPREdWdG52a0FrTjBMamVaM1FlR1JmSzZycUpWY3pKUzA4V3pRTk9FRzRsTklOMEhvQlRybVVjTHRNbjByQ3ZHY25ja2JERjBXdDUzNXo1WDNFeEFGa3hZTnZUR2lxWTZIQ2p5M01qV0lnUXBFQm1JRVdlZk90MkZhTWplb3RZdVJ0ZktrNmFKM0dr?oc=5",
      "datetime": 1786098468,
      "headlineKo": "트럼프 행정부가 국방 공급망을 위한 광물을 모색함에 따라 광산 CEO를 초대 - 로이터"
    }
  ],
  "_fetched_at": 1786132826.458021,
  "_updated_label": "2026-08-08 05:00"
};
