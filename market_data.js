// 자동 생성 파일 - buy_signal_telegram.py 실행 시마다 갱신됨. 직접 수정하지 마세요.
// 시장 환경 지표(야후) + 시장 헤드라인(Finnhub). 이 파일이 없어도 대시보드는 정상 동작함.
const MARKET_DATA = {
  "indicators": {
    "vix": {
      "current": 15.0600004196167,
      "prevClose": 15.149999618530273,
      "changeAbs": -0.08999919891357422,
      "changePct": -0.5940541331994118,
      "pctRank": 21.4171974522293,
      "min5y": 11.859999656677246,
      "max5y": 52.33000183105469,
      "ma20": 17.172499895095825,
      "ma60": 17.27083330154419,
      "chg1m": -0.7799997329711914,
      "chg3m": -2.130000114440918,
      "chg1mPct": -4.924240691018917,
      "chg3mPct": -12.390925237150888,
      "lastDate": "2026-08-07",
      "bars": 1256,
      "symbol": "^VIX",
      "label": "VIX (공포지수)",
      "unit": "",
      "digits": 2
    },
    "us10y": {
      "current": 4.623000144958496,
      "prevClose": 4.670000076293945,
      "changeAbs": -0.04699993133544922,
      "changePct": -1.0064224960944281,
      "pctRank": 95.2988047808765,
      "min5y": 1.2419999837875366,
      "max5y": 4.98799991607666,
      "ma20": 4.630599999427796,
      "ma60": 4.540983319282532,
      "chg1m": 0.0840001106262207,
      "chg3m": 0.23099994659423828,
      "chg1mPct": 1.85063031484594,
      "chg3mPct": 5.259561388004289,
      "lastDate": "2026-08-07",
      "bars": 1255,
      "symbol": "^TNX",
      "label": "미국 10년물 금리",
      "unit": "%",
      "digits": 2
    },
    "us3m": {
      "current": 3.7150001525878906,
      "prevClose": 3.7320001125335693,
      "changeAbs": -0.01699995994567871,
      "changePct": -0.45551874150769595,
      "pctRank": 36.65338645418327,
      "min5y": 0.019999999552965164,
      "max5y": 5.3480000495910645,
      "ma20": 3.7239499926567077,
      "ma60": 3.6660500049591063,
      "chg1m": 0.03300023078918457,
      "chg3m": 0.11700010299682617,
      "chg1mPct": 0.8962583240105969,
      "chg3mPct": 3.25180937699331,
      "lastDate": "2026-08-07",
      "bars": 1255,
      "symbol": "^IRX",
      "label": "미국 3개월 금리",
      "unit": "%",
      "digits": 2
    },
    "oil": {
      "current": 77.2699966430664,
      "prevClose": 77.29000091552734,
      "changeAbs": -0.0200042724609375,
      "changePct": -0.025882096291861598,
      "pctRank": 52.426412092283215,
      "min5y": 55.27000045776367,
      "max5y": 123.69999694824219,
      "ma20": 81.7734992980957,
      "ma60": 83.67366650899251,
      "chg1m": 5.189994812011719,
      "chg3m": -17.540000915527344,
      "chg1mPct": 7.200325582921503,
      "chg3mPct": -18.500159653192068,
      "lastDate": "2026-08-07",
      "bars": 1257,
      "symbol": "CL=F",
      "label": "WTI 유가",
      "unit": "$",
      "digits": 1
    },
    "dollar": {
      "current": 99.5479965209961,
      "prevClose": 99.97000122070312,
      "changeAbs": -0.42200469970703125,
      "changePct": -0.4221313339542471,
      "pctRank": 32.21957040572792,
      "min5y": 92.04000091552734,
      "max5y": 114.11000061035156,
      "ma20": 100.64840049743653,
      "ma60": 100.25313364664713,
      "chg1m": -1.3920059204101562,
      "chg3m": 1.2979965209960938,
      "chg1mPct": -1.3790428836359392,
      "chg3mPct": 1.3211160519044212,
      "lastDate": "2026-08-07",
      "bars": 1257,
      "symbol": "DX-Y.NYB",
      "label": "달러지수(DXY)",
      "unit": "",
      "digits": 1
    },
    "gold": {
      "current": 4412.60009765625,
      "prevClose": 4242.0,
      "changeAbs": 170.60009765625,
      "changePct": 4.021690185201556,
      "pctRank": 91.48766905330152,
      "min5y": 1623.300048828125,
      "max5y": 5318.39990234375,
      "ma20": 4088.355017089844,
      "ma60": 4234.433333333333,
      "chg1m": 282.0,
      "chg3m": -287.19970703125,
      "chg1mPct": 6.827095175831959,
      "chg3mPct": -6.110892356410626,
      "lastDate": "2026-08-07",
      "bars": 1257,
      "symbol": "GC=F",
      "label": "금",
      "unit": "$",
      "digits": 0
    },
    "us30y": {
      "current": 5.188000202178955,
      "prevClose": 5.2129998207092285,
      "changeAbs": -0.024999618530273438,
      "changePct": -0.4795630038382054,
      "pctRank": 99.5219123505976,
      "min5y": 1.6779999732971191,
      "max5y": 5.275000095367432,
      "ma20": 5.1504000425338745,
      "ma60": 5.047833379109701,
      "chg1m": 0.13500022888183594,
      "chg3m": 0.21900033950805664,
      "chg1mPct": 2.6716847337275427,
      "chg3mPct": 4.407332371918024,
      "lastDate": "2026-08-07",
      "bars": 1255,
      "symbol": "^TYX",
      "label": "미국 30년물 금리",
      "unit": "%",
      "digits": 2
    }
  },
  "yieldSpread": 0.9079999923706055,
  "sector": {
    "groups": {
      "빅테크·SW": {
        "ret1m": 6.965397606115165,
        "ret3m": 0.3514370601177541,
        "ret6m": 11.386561308417242,
        "ret1y": 6.564614978238792,
        "winRate": 60.8,
        "count": 9
      },
      "반도체": {
        "ret1m": -10.919277009844242,
        "ret3m": 12.206227907877443,
        "ret6m": 83.91425809146209,
        "ret1y": 243.22483539065547,
        "winRate": 71.5,
        "count": 15
      }
    },
    "pair": [
      "빅테크·SW",
      "반도체"
    ],
    "corr60": 0.19815790427925586,
    "corrPctRank": 1.9246861924686192,
    "corrMin5y": 0.11496792019743002,
    "corrMedian5y": 0.7115782038222396,
    "corrMax5y": 0.9346528705205663
  },
  "news": [
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
      "headline": "Saudi Arabia, Turkey, Pakistan pledge mutual defence as Middle East turmoil escalates - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxNU2lUV2RTOWpHY1ZMeHh4SVNOUnV4TXZNQjZoa2ZXSmg1SnNGX2lGOEJUdy0taTQyNmJaRzNKdHdNUEQtYzhsOFROeEhHWk11LUlKTy13VmE0dlJuSHpveG1xSTBjNTZZOXJrWGNyU1NSbUpraEFHdTBjNHowdWluRUU5a0lsY3NuY1FmMDViMVJMMkN4VzVydm9aeng4eWxDV1lkVFBwWTNTVzFTaTJJcWxoUFdBTE9zZUx1U0VNYnlQTFNQd18yYg?oc=5",
      "datetime": 1786101839,
      "headlineKo": "사우디아라비아, 터키, 파키스탄, 중동 혼란이 고조됨에 따라 상호 방어를 약속 - 로이터 통신"
    },
    {
      "headline": "Dollar on track for weekly gain as traders eye Iran talks, US jobs data - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxPOUNvR1pacXVtTWI3eUROeE54TXVYY3JEU1FNSFA4YlBaVFp6MDFXY0tFaFpqSFBfM2R2WTJQVDVtNG5RN3ozQkZLTTZpTGN5aDMzUE9uUVAyanZWN0VWcnVzWlF1aDh6Y0k2dlY4WWpsMFRMdFNoRW81Y1M2WW9qNTlPSWZVZGFnRVh1eEVTTXhWSlhOQkgyRFJfUm5nMGtGaHRUbnlITTRidldKOFg3ZEg5NnRLR3dj?oc=5",
      "datetime": 1786101638,
      "headlineKo": "거래자들이 이란 회담과 미국 고용 데이터를 주목하면서 달러가 주간 상승세를 보이고 있습니다 - Reuters"
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
      "headline": "Everybody wants energy security post the Iran war, but how? - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiugFBVV95cUxNY0VHNVlqVEZlcUZuWHpGVjZmak5COW1JRHVnLUVfUExEbF9NTEZ3SVRIZFhDeF84SmZ4Y2xwcDczb1oxSzNHWUFZT1JkWFhFb3FXTFJRTTFjUmpNVHdYdW5nX1A5WnNOVmpSOGRKcUduY0RhOWMwbE41eklWODdQVldLZ3RONm1SREtRZVhKTkt0cGxmTnBsWDVHNENUZWhwVjZhcG1BQ21rUGlVZ3FzSmNpamFsNFVCSnc?oc=5",
      "datetime": 1786084188,
      "headlineKo": "모두가 이란 전쟁 이후 에너지 안보를 원하지만 어떻게 그럴 수 있을까요? - 로이터"
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
    },
    {
      "headline": "Gold set for best week since January as inflation fears ebb - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxPbWpUMWdTeEtHNmJ5VDlJZU9tOGp0d0xFQTBlT2xXUHBTSENUdHowV0JkLTFockFBbUl6T0hHT29nUjN5XzR0RWlCbU9VQjZBY2pJd0o5dmFhel9VeGZqV0E1VFpEZjJ3dWk1T2I5aERGNE41dVlkWlFFeHFsUm80RVVPTkNlX2lKc0tJTEtBRURzbXZZMWI5YnlHS1dlWWJyRkFsSmxXM2NWdU5qV1lj?oc=5",
      "datetime": 1786065240,
      "headlineKo": "인플레이션 우려가 쇠퇴함에 따라 금은 1월 이후 최고의 주를 기록했습니다 - Reuters"
    },
    {
      "headline": "Oil prices drop as investors weigh potential Hormuz deal between Iran and Gulf states - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxNN0Z0cU1oY1hpbHZmZ1JoanRWLXVubmFlTDlWbkpqQ3V1d2dYYlV1U18zVEJ1Zkh1QXFFYm51SVJtZ1ctNHRGYnVlZGk3X0xKcVRHdW5MMzlDM2VQWDBYcmlWc25WX2VaWEJITEJCb2lOOFJsNFRiX0NYOVhCcmxEMWVLVGZXSkJfUzJzQXB2ZTFSMlJnZTczRWVJU3ZTUHEyeWNhcFBuSlI?oc=5",
      "datetime": 1786063620,
      "headlineKo": "투자자들이 이란과 걸프 국가 간의 호르무즈 거래 가능성을 고려하면서 유가 하락 - Reuters"
    }
  ],
  "_fetched_at": 1786111202.5905135,
  "_updated_label": "2026-08-07 23:00"
};
