// 자동 생성 파일 - buy_signal_telegram.py 실행 시마다 갱신됨. 직접 수정하지 마세요.
// 시장 환경 지표(야후) + 시장 헤드라인(Finnhub). 이 파일이 없어도 대시보드는 정상 동작함.
const MARKET_DATA = {
  "indicators": {
    "vix": {
      "current": 14.930000305175781,
      "prevClose": 15.149999618530273,
      "changeAbs": -0.2199993133544922,
      "changePct": -1.4521407187720754,
      "pctRank": 20.302547770700638,
      "min5y": 11.859999656677246,
      "max5y": 52.33000183105469,
      "ma20": 17.16599988937378,
      "ma60": 17.268666632970174,
      "chg1m": -0.9099998474121094,
      "chg3m": -2.260000228881836,
      "chg1mPct": -5.744948476300592,
      "chg3mPct": -13.147179515231661,
      "lastDate": "2026-08-07",
      "bars": 1256,
      "symbol": "^VIX",
      "label": "VIX (공포지수)",
      "unit": "",
      "digits": 2
    },
    "us10y": {
      "current": 4.64900016784668,
      "prevClose": 4.670000076293945,
      "changeAbs": -0.020999908447265625,
      "changePct": -0.44967683306615475,
      "pctRank": 96.57370517928287,
      "min5y": 1.2419999837875366,
      "max5y": 4.98799991607666,
      "ma20": 4.631900000572204,
      "ma60": 4.541416652997335,
      "chg1m": 0.1100001335144043,
      "chg3m": 0.2569999694824219,
      "chg1mPct": 2.423444209790279,
      "chg3mPct": 5.851547310451809,
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
      "current": 78.06999969482422,
      "prevClose": 77.29000091552734,
      "changeAbs": 0.779998779296875,
      "changePct": 1.0091845905777128,
      "pctRank": 55.529037390612565,
      "min5y": 55.27000045776367,
      "max5y": 123.69999694824219,
      "ma20": 81.8134994506836,
      "ma60": 83.68699989318847,
      "chg1m": 5.989997863769531,
      "chg3m": -16.73999786376953,
      "chg1mPct": 8.310207702004833,
      "chg3mPct": -17.656363563794002,
      "lastDate": "2026-08-07",
      "bars": 1257,
      "symbol": "CL=F",
      "label": "WTI 유가",
      "unit": "$",
      "digits": 1
    },
    "dollar": {
      "current": 99.54100036621094,
      "prevClose": 99.97000122070312,
      "changeAbs": -0.4290008544921875,
      "changePct": -0.4291295881302283,
      "pctRank": 32.21957040572792,
      "min5y": 92.04000091552734,
      "max5y": 114.11000061035156,
      "ma20": 100.64805068969727,
      "ma60": 100.25301704406738,
      "chg1m": -1.3990020751953125,
      "chg3m": 1.2910003662109375,
      "chg1mPct": -1.3859738868219333,
      "chg3mPct": 1.3139952836752544,
      "lastDate": "2026-08-07",
      "bars": 1257,
      "symbol": "DX-Y.NYB",
      "label": "달러지수(DXY)",
      "unit": "",
      "digits": 1
    },
    "gold": {
      "current": 4397.10009765625,
      "prevClose": 4242.0,
      "changeAbs": 155.10009765625,
      "changePct": 3.6562965029761902,
      "pctRank": 91.3285600636436,
      "min5y": 1623.300048828125,
      "max5y": 5318.39990234375,
      "ma20": 4087.5800170898438,
      "ma60": 4234.175,
      "chg1m": 266.5,
      "chg3m": -302.69970703125,
      "chg1mPct": 6.4518470367348115,
      "chg3mPct": -6.4406936382554525,
      "lastDate": "2026-08-07",
      "bars": 1257,
      "symbol": "GC=F",
      "label": "금",
      "unit": "$",
      "digits": 0
    },
    "us30y": {
      "current": 5.206000328063965,
      "prevClose": 5.2129998207092285,
      "changeAbs": -0.006999492645263672,
      "changePct": -0.13426995752920226,
      "pctRank": 99.60159362549801,
      "min5y": 1.6779999732971191,
      "max5y": 5.275000095367432,
      "ma20": 5.151300048828125,
      "ma60": 5.048133381207784,
      "chg1m": 0.1530003547668457,
      "chg3m": 0.2370004653930664,
      "chg1mPct": 3.027911252234024,
      "chg3mPct": 4.769580840070214,
      "lastDate": "2026-08-07",
      "bars": 1255,
      "symbol": "^TYX",
      "label": "미국 30년물 금리",
      "unit": "%",
      "digits": 2
    }
  },
  "yieldSpread": 0.9310002326965332,
  "sector": {
    "groups": {
      "빅테크·SW": {
        "ret1m": 7.249063405861844,
        "ret3m": 0.617563034371682,
        "ret6m": 11.681951768338994,
        "ret1y": 6.847217926566174,
        "winRate": 60.8,
        "count": 9
      },
      "반도체": {
        "ret1m": -10.155539141707681,
        "ret3m": 13.168233406008344,
        "ret6m": 85.49105583939026,
        "ret1y": 246.16749004447712,
        "winRate": 71.5,
        "count": 15
      }
    },
    "pair": [
      "빅테크·SW",
      "반도체"
    ],
    "corr60": 0.20057014492258743,
    "corrPctRank": 1.9246861924686192,
    "corrMin5y": 0.11496792019743002,
    "corrMedian5y": 0.7115782038222396,
    "corrMax5y": 0.9346528705205663
  },
  "news": [
    {
      "headline": "A huge day and week for Corning as the S&P 500 approaches another record high",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/07/a-huge-day-and-week-for-corning-as-the-sp-500-aims-for-record-close.html",
      "datetime": 1786121957,
      "headlineKo": "S&P 500이 또 다른 최고 기록에 도달함에 따라 코닝에게는 엄청난 하루와 한 주가 될 것입니다."
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
      "headline": "Prices in UK housing market flat in July as Iran war weighs - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMimwFBVV95cUxQeVV5bXd6ZlZEc2lxeHNwbkVocjdyaGphQ25XTXFQZm14ZW56YUtSTkpiRlB3SVJKT0pjcTBlR1pONlNFNUhTYnlhLXBObFp3VnFJbWNORTlXVm5sMzZteU9ZbWh4ZzktVnQ0UzU1UC1SbWRvNC1yd2RFdkV1WFRIYzNrQkNjSXpSRE1xQXhvVUpoeXF0Xy1uVTljcw?oc=5",
      "datetime": 1786085023,
      "headlineKo": "이란 전쟁으로 인해 7월 영국 주택 시장 가격 보합 - Reuters"
    },
    {
      "headline": "Vessel traffic through Hormuz dwindles this week as markets watch Iran-Oman talks - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiygFBVV95cUxPYjdYbS1fZXZGWktSZkVpMk4temZNOUY1cEFsQUxTRXRNQnJUai1lY2xTMDE5dmFMZjUyUzZQclRyQUJuVTFVXzB6RGtpeXlFeU8xZjNiVWp4dVVNTkVWcVhCVEpsVVdTa1lsZEVfVUlSWHBlMjh0UDNYdkpjS3BHVjA2MUUtSXU0OTNEZ1lCUW9iYkliLUxSN2JSTTlFbEktaGRTb2UzcUxNMjlaZGtQSmt1S1FWYzlvdlkwdDM3WjY0dHZTRU9VWFFB?oc=5",
      "datetime": 1786077180,
      "headlineKo": "시장이 이란-오만 회담을 지켜보면서 이번 주 호르무즈를 통과하는 선박 교통량이 감소합니다 - Reuters"
    }
  ],
  "_fetched_at": 1786125620.495262,
  "_updated_label": "2026-08-08 03:00"
};
