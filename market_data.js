// 자동 생성 파일 - buy_signal_telegram.py 실행 시마다 갱신됨. 직접 수정하지 마세요.
// 시장 환경 지표(야후) + 시장 헤드라인(Finnhub). 이 파일이 없어도 대시보드는 정상 동작함.
const MARKET_DATA = {
  "indicators": {
    "vix": {
      "current": 14.949999809265137,
      "prevClose": 15.149999618530273,
      "changeAbs": -0.19999980926513672,
      "changePct": -1.3201307874655843,
      "pctRank": 20.461783439490446,
      "min5y": 11.859999656677246,
      "max5y": 52.33000183105469,
      "ma20": 17.166999864578248,
      "ma60": 17.26899995803833,
      "chg1m": -0.8900003433227539,
      "chg3m": -2.2400007247924805,
      "chg1mPct": -5.618688982003251,
      "chg3mPct": -13.030835690519545,
      "lastDate": "2026-08-07",
      "bars": 1256,
      "symbol": "^VIX",
      "label": "VIX (공포지수)",
      "unit": "",
      "digits": 2
    },
    "us10y": {
      "current": 4.6519999504089355,
      "prevClose": 4.670000076293945,
      "changeAbs": -0.018000125885009766,
      "changePct": -0.38544166147625514,
      "pctRank": 96.57370517928287,
      "min5y": 1.2419999837875366,
      "max5y": 4.98799991607666,
      "ma20": 4.632049989700318,
      "ma60": 4.541466649373373,
      "chg1m": 0.11299991607666016,
      "chg3m": 0.25999975204467773,
      "chg1mPct": 2.489533272129252,
      "chg3mPct": 5.919848367527652,
      "lastDate": "2026-08-07",
      "bars": 1255,
      "symbol": "^TNX",
      "label": "미국 10년물 금리",
      "unit": "%",
      "digits": 2
    },
    "us3m": {
      "current": 3.7179999351501465,
      "prevClose": 3.7320001125335693,
      "changeAbs": -0.014000177383422852,
      "changePct": -0.37513871814753114,
      "pctRank": 36.65338645418327,
      "min5y": 0.019999999552965164,
      "max5y": 5.3480000495910645,
      "ma20": 3.7240999817848204,
      "ma60": 3.666100001335144,
      "chg1m": 0.03600001335144043,
      "chg3m": 0.11999988555908203,
      "chg1mPct": 0.9777298782193874,
      "chg3mPct": 3.335182987913543,
      "lastDate": "2026-08-07",
      "bars": 1255,
      "symbol": "^IRX",
      "label": "미국 3개월 금리",
      "unit": "%",
      "digits": 2
    },
    "oil": {
      "current": 78.2699966430664,
      "prevClose": 77.29000091552734,
      "changeAbs": 0.9799957275390625,
      "changePct": 1.2679463267313589,
      "pctRank": 56.483691328560056,
      "min5y": 55.27000045776367,
      "max5y": 123.69999694824219,
      "ma20": 81.8234992980957,
      "ma60": 83.69033317565918,
      "chg1m": 6.189994812011719,
      "chg3m": -16.540000915527344,
      "chg1mPct": 8.587672939465497,
      "chg3mPct": -17.445418564962434,
      "lastDate": "2026-08-07",
      "bars": 1257,
      "symbol": "CL=F",
      "label": "WTI 유가",
      "unit": "$",
      "digits": 1
    },
    "dollar": {
      "current": 99.49800109863281,
      "prevClose": 99.97000122070312,
      "changeAbs": -0.4720001220703125,
      "changePct": -0.4721417588345137,
      "pctRank": 31.821797931583134,
      "min5y": 92.04000091552734,
      "max5y": 114.11000061035156,
      "ma20": 100.64590072631836,
      "ma60": 100.25230038960775,
      "chg1m": -1.4420013427734375,
      "chg3m": 1.2480010986328125,
      "chg1mPct": -1.4285727242878676,
      "chg3mPct": 1.2702301258349238,
      "lastDate": "2026-08-07",
      "bars": 1257,
      "symbol": "DX-Y.NYB",
      "label": "달러지수(DXY)",
      "unit": "",
      "digits": 1
    },
    "gold": {
      "current": 4397.7001953125,
      "prevClose": 4242.0,
      "changeAbs": 155.7001953125,
      "changePct": 3.6704430766737386,
      "pctRank": 91.3285600636436,
      "min5y": 1623.300048828125,
      "max5y": 5318.39990234375,
      "ma20": 4087.6100219726563,
      "ma60": 4234.185001627604,
      "chg1m": 267.10009765625,
      "chg3m": -302.099609375,
      "chg1mPct": 6.466375135366062,
      "chg3mPct": -6.42792505914169,
      "lastDate": "2026-08-07",
      "bars": 1257,
      "symbol": "GC=F",
      "label": "금",
      "unit": "$",
      "digits": 0
    },
    "us30y": {
      "current": 5.204999923706055,
      "prevClose": 5.2129998207092285,
      "changeAbs": -0.007999897003173828,
      "changePct": -0.15346052711134453,
      "pctRank": 99.60159362549801,
      "min5y": 1.6779999732971191,
      "max5y": 5.275000095367432,
      "ma20": 5.15125002861023,
      "ma60": 5.048116707801819,
      "chg1m": 0.15199995040893555,
      "chg3m": 0.23600006103515625,
      "chg1mPct": 3.008113026166404,
      "chg3mPct": 4.749447928306106,
      "lastDate": "2026-08-07",
      "bars": 1255,
      "symbol": "^TYX",
      "label": "미국 30년물 금리",
      "unit": "%",
      "digits": 2
    }
  },
  "yieldSpread": 0.9340000152587891,
  "sector": {
    "groups": {
      "빅테크·SW": {
        "ret1m": 7.192009907116836,
        "ret3m": 0.5640373081414962,
        "ret6m": 11.62254009710657,
        "ret1y": 6.790378198364433,
        "winRate": 60.8,
        "count": 9
      },
      "반도체": {
        "ret1m": -10.260160802625084,
        "ret3m": 13.036451786652892,
        "ret6m": 85.27505607533303,
        "ret1y": 245.76438653182782,
        "winRate": 71.5,
        "count": 15
      }
    },
    "pair": [
      "빅테크·SW",
      "반도체"
    ],
    "corr60": 0.20021813460866184,
    "corrPctRank": 1.9246861924686192,
    "corrMin5y": 0.11496792019743002,
    "corrMedian5y": 0.7115782038222396,
    "corrMax5y": 0.9346528705205663
  },
  "news": [
    {
      "headline": "Oil gains on US jobs report, worries over peace talks - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxNN0Z0cU1oY1hpbHZmZ1JoanRWLXVubmFlTDlWbkpqQ3V1d2dYYlV1U18zVEJ1Zkh1QXFFYm51SVJtZ1ctNHRGYnVlZGk3X0xKcVRHdW5MMzlDM2VQWDBYcmlWc25WX2VaWEJITEJCb2lOOFJsNFRiX0NYOVhCcmxEMWVLVGZXSkJfUzJzQXB2ZTFSMlJnZTczRWVJU3ZTUHEyeWNhcFBuSlI?oc=5",
      "datetime": 1786118466,
      "headlineKo": "미국 고용 보고서의 석유 이익, 평화 회담에 대한 우려 - 로이터"
    },
    {
      "headline": "Rockstar Energy founder builds Celsius stake, wants to take over as CEO",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/07/rockstar-energy-founder-celsius-stake-ceo.html",
      "datetime": 1786116416,
      "headlineKo": "Rockstar Energy 설립자, Celsius 지분을 구축하고 CEO 자리를 물려받길 원함"
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
    },
    {
      "headline": "Rheinmetall says ramping up ATACMS output will take time as US rebuilds stocks - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiygFBVV95cUxQbDNieTdRemdmNGN4TnRTVk50Z3pHMmdhZVlfNk9sWUFpcU1qMzhrQmR0Tk5TVVZtM0ktMUlVSlk0bmdBYk8tZlN1M1R4anJTcVJBTEUtcXg3MDZ0WGpnWGItU09peWcxWjhaMFA4WVdOUWhEWl9UV3FOWE80V3BaMi1JWlBwN0gxTXB6aE8zVkIySUtWTkY1WTlNWlg0THZ1dVEtdk1NLWJnN2JXRUluSkZrclNGV011MDNHV1o4Y0luWVN0bUJKZFFB?oc=5",
      "datetime": 1786097417,
      "headlineKo": "Rheinmetall은 미국이 재고를 재건함에 따라 ATACMS 생산량을 늘리는 데 시간이 걸릴 것이라고 말했습니다. - Reuters"
    },
    {
      "headline": "India's government set to exceed key fundraising goal on state-firm stake sales, sources say - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMixwFBVV95cUxNNGpIdTVlM3k4VWVxb1VNUFhFNHphUVFTUG42WndtMm55OFpQUFZMeE80UGxuVjhzWjFHZ3dMUG1OS1cxOW92eTlkdGEwakpKcXNmbXVLWkdkTTRPWGNld1FKVWVBVzFuQlFXR0V2dGJHc0NJWm01dkJZd19qR2dsbzVxTzgxWHFpSWIxZXROSkV6b0RQZlhESGFDZkV6RUJkTDItVXFhNEpveW9QeHc5NGtpb3RmdjF0dmk0SEhPeWRXUk9BV2ZJ?oc=5",
      "datetime": 1786088189,
      "headlineKo": "인도 정부는 국영 기업 지분 매각에 대한 주요 자금 조달 목표를 초과할 예정이라고 소식통은 전했습니다. - Reuters"
    },
    {
      "headline": "Vessel traffic through Hormuz dwindles this week as markets watch Iran-Oman talks - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiygFBVV95cUxPYjdYbS1fZXZGWktSZkVpMk4temZNOUY1cEFsQUxTRXRNQnJUai1lY2xTMDE5dmFMZjUyUzZQclRyQUJuVTFVXzB6RGtpeXlFeU8xZjNiVWp4dVVNTkVWcVhCVEpsVVdTa1lsZEVfVUlSWHBlMjh0UDNYdkpjS3BHVjA2MUUtSXU0OTNEZ1lCUW9iYkliLUxSN2JSTTlFbEktaGRTb2UzcUxNMjlaZGtQSmt1S1FWYzlvdlkwdDM3WjY0dHZTRU9VWFFB?oc=5",
      "datetime": 1786077180,
      "headlineKo": "시장이 이란-오만 회담을 지켜보면서 이번 주 호르무즈를 통과하는 선박 교통량이 감소합니다 - Reuters"
    },
    {
      "headline": "AI demand keeps China's export engine humming, but risks loom - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMipAFBVV95cUxQcmhJQUR2QVh5SHpuWDZ2ZFk3RWdCbDlINEY1MEZuc0tRbkJQT3FuRmQ1WDdtd2owTmhJeDdIU09EYkFiNEJpTnA3cWhQQ1dnWUpkWDJPVENiZDIzTXlNUlRNenF2VlRXM29EbFFJelBiTUhuU1cycU5EV3RvaVhIbU4yc0pNWDM2aGlCaGtSTG5ySGx3aXhFcTNRTkZ4cFlva3k0cA?oc=5",
      "datetime": 1786070520,
      "headlineKo": "AI 수요로 인해 중국의 수출 엔진이 활발하게 작동하지만 위험은 닥칠 것임 - Reuters"
    }
  ],
  "_fetched_at": 1786122002.5827239,
  "_updated_label": "2026-08-08 02:00"
};
