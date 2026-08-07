// 자동 생성 파일 - buy_signal_telegram.py 실행 시마다 갱신됨. 직접 수정하지 마세요.
// 시장 환경 지표(야후) + 시장 헤드라인(Finnhub). 이 파일이 없어도 대시보드는 정상 동작함.
const MARKET_DATA = {
  "indicators": {
    "vix": {
      "current": 15.25,
      "prevClose": 15.149999618530273,
      "changeAbs": 0.10000038146972656,
      "changePct": 0.6600685411728596,
      "pctRank": 22.929936305732486,
      "min5y": 11.859999656677246,
      "max5y": 52.33000183105469,
      "ma20": 17.18199987411499,
      "ma60": 17.273999961217246,
      "chg1m": -0.5900001525878906,
      "chg3m": -1.9400005340576172,
      "chg1mPct": -3.7247484021740886,
      "chg3mPct": -11.28563393709034,
      "lastDate": "2026-08-07",
      "bars": 1256,
      "symbol": "^VIX",
      "label": "VIX (공포지수)",
      "unit": "",
      "digits": 2
    },
    "us10y": {
      "current": 4.60699987411499,
      "prevClose": 4.670000076293945,
      "changeAbs": -0.06300020217895508,
      "changePct": -1.3490407098440835,
      "pctRank": 94.66135458167331,
      "min5y": 1.2419999837875366,
      "max5y": 4.98799991607666,
      "ma20": 4.6297999858856205,
      "ma60": 4.540716648101807,
      "chg1m": 0.06799983978271484,
      "chg3m": 0.21499967575073242,
      "chg1mPct": 1.4981237996998207,
      "chg3mPct": 4.895256512757131,
      "lastDate": "2026-08-07",
      "bars": 1255,
      "symbol": "^TNX",
      "label": "미국 10년물 금리",
      "unit": "%",
      "digits": 2
    },
    "us3m": {
      "current": 3.697000026702881,
      "prevClose": 3.7320001125335693,
      "changeAbs": -0.03500008583068848,
      "changePct": -0.9378372126287992,
      "pctRank": 36.09561752988048,
      "min5y": 0.019999999552965164,
      "max5y": 5.3480000495910645,
      "ma20": 3.723049986362457,
      "ma60": 3.665750002861023,
      "chg1m": 0.015000104904174805,
      "chg3m": 0.0989999771118164,
      "chg1mPct": 0.40739014727754397,
      "chg3mPct": 2.7515279529545413,
      "lastDate": "2026-08-07",
      "bars": 1255,
      "symbol": "^IRX",
      "label": "미국 3개월 금리",
      "unit": "%",
      "digits": 2
    },
    "oil": {
      "current": 76.80000305175781,
      "prevClose": 77.29000091552734,
      "changeAbs": -0.48999786376953125,
      "changePct": -0.6339731633656794,
      "pctRank": 50.7557677008751,
      "min5y": 55.27000045776367,
      "max5y": 123.69999694824219,
      "ma20": 81.74999961853027,
      "ma60": 83.6658332824707,
      "chg1m": 4.720001220703125,
      "chg3m": -18.009994506835938,
      "chg1mPct": 6.548281216426907,
      "chg3mPct": -18.995881205149846,
      "lastDate": "2026-08-07",
      "bars": 1257,
      "symbol": "CL=F",
      "label": "WTI 유가",
      "unit": "$",
      "digits": 1
    },
    "dollar": {
      "current": 99.42500305175781,
      "prevClose": 99.97000122070312,
      "changeAbs": -0.5449981689453125,
      "changePct": -0.5451617108037475,
      "pctRank": 31.26491646778043,
      "min5y": 92.04000091552734,
      "max5y": 114.11000061035156,
      "ma20": 100.6422508239746,
      "ma60": 100.25108375549317,
      "chg1m": -1.5149993896484375,
      "chg3m": 1.1750030517578125,
      "chg1mPct": -1.5008909778141384,
      "chg3mPct": 1.1959318592954835,
      "lastDate": "2026-08-07",
      "bars": 1257,
      "symbol": "DX-Y.NYB",
      "label": "달러지수(DXY)",
      "unit": "",
      "digits": 1
    },
    "gold": {
      "current": 4426.2998046875,
      "prevClose": 4242.0,
      "changeAbs": 184.2998046875,
      "changePct": 4.344644146334276,
      "pctRank": 91.48766905330152,
      "min5y": 1623.300048828125,
      "max5y": 5318.39990234375,
      "ma20": 4089.040002441406,
      "ma60": 4234.6616617838545,
      "chg1m": 295.69970703125,
      "chg3m": -273.5,
      "chg1mPct": 7.158759019035356,
      "chg3mPct": -5.819396811907089,
      "lastDate": "2026-08-07",
      "bars": 1257,
      "symbol": "GC=F",
      "label": "금",
      "unit": "$",
      "digits": 0
    },
    "us30y": {
      "current": 5.175999641418457,
      "prevClose": 5.2129998207092285,
      "changeAbs": -0.037000179290771484,
      "changePct": -0.709767515122178,
      "pctRank": 99.44223107569721,
      "min5y": 1.6779999732971191,
      "max5y": 5.275000095367432,
      "ma20": 5.14980001449585,
      "ma60": 5.047633369763692,
      "chg1m": 0.12299966812133789,
      "chg3m": 0.2069997787475586,
      "chg1mPct": 2.4341909513425093,
      "chg3mPct": 4.16582379690978,
      "lastDate": "2026-08-07",
      "bars": 1255,
      "symbol": "^TYX",
      "label": "미국 30년물 금리",
      "unit": "%",
      "digits": 2
    }
  },
  "yieldSpread": 0.9099998474121094,
  "sector": {
    "groups": {
      "빅테크·SW": {
        "ret1m": 6.16886209848031,
        "ret3m": -0.14391525662681426,
        "ret6m": 5.92225882644406,
        "ret1y": 7.079007602820675,
        "winRate": 60.8,
        "count": 9
      },
      "반도체": {
        "ret1m": -7.169818412605922,
        "ret3m": 9.122463050608731,
        "ret6m": 84.01173328712144,
        "ret1y": 242.19200681664225,
        "winRate": 71.5,
        "count": 15
      }
    },
    "pair": [
      "빅테크·SW",
      "반도체"
    ],
    "corr60": 0.20886693837289294,
    "corrPctRank": 2.0938023450586267,
    "corrMin5y": 0.11496792019743002,
    "corrMedian5y": 0.7115784818334243,
    "corrMax5y": 0.9346528705205663
  },
  "news": [
    {
      "headline": "Saudi Arabia, Turkey, Pakistan pledge mutual defence as Middle East turmoil escalates - reuters.com",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxNU2lUV2RTOWpHY1ZMeHh4SVNOUnV4TXZNQjZoa2ZXSmg1SnNGX2lGOEJUdy0taTQyNmJaRzNKdHdNUEQtYzhsOFROeEhHWk11LUlKTy13VmE0dlJuSHpveG1xSTBjNTZZOXJrWGNyU1NSbUpraEFHdTBjNHowdWluRUU5a0lsY3NuY1FmMDViMVJMMkN4VzVydm9aeng4eWxDV1lkVFBwWTNTVzFTaTJJcWxoUFdBTE9zZUx1U0VNYnlQTFNQd18yYg?oc=5",
      "datetime": 1786101839,
      "headlineKo": "사우디아라비아, 터키, 파키스탄, 중동 혼란 심화에 상호방어 약속 - reuters.com"
    },
    {
      "headline": "Martha's Vineyard African American Film Festival set for record attendance despite macro challenges",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/07/marthas-vineyard-african-american-film-festival-set-for-record-attendance.html",
      "datetime": 1786100401,
      "headlineKo": "마사스 빈야드 아프리카계 미국인 영화제(Martha's Vineyard African American Film Festival)는 거시적인 어려움에도 불구하고 기록적인 참석률을 기록했습니다."
    },
    {
      "headline": "Rheinmetall says ramping up ATACMS output will take time as US rebuilds stocks - reuters.com",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiygFBVV95cUxQbDNieTdRemdmNGN4TnRTVk50Z3pHMmdhZVlfNk9sWUFpcU1qMzhrQmR0Tk5TVVZtM0ktMUlVSlk0bmdBYk8tZlN1M1R4anJTcVJBTEUtcXg3MDZ0WGpnWGItU09peWcxWjhaMFA4WVdOUWhEWl9UV3FOWE80V3BaMi1JWlBwN0gxTXB6aE8zVkIySUtWTkY1WTlNWlg0THZ1dVEtdk1NLWJnN2JXRUluSkZrclNGV011MDNHV1o4Y0luWVN0bUJKZFFB?oc=5",
      "datetime": 1786097417,
      "headlineKo": "Rheinmetall은 미국이 재고를 재건함에 따라 ATACMS 생산량을 늘리는 데 시간이 걸릴 것이라고 말했습니다 - reuters.com"
    },
    {
      "headline": "Vessel traffic through Hormuz dwindles this week as markets watch Iran-Oman talks - reuters.com",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiygFBVV95cUxPYjdYbS1fZXZGWktSZkVpMk4temZNOUY1cEFsQUxTRXRNQnJUai1lY2xTMDE5dmFMZjUyUzZQclRyQUJuVTFVXzB6RGtpeXlFeU8xZjNiVWp4dVVNTkVWcVhCVEpsVVdTa1lsZEVfVUlSWHBlMjh0UDNYdkpjS3BHVjA2MUUtSXU0OTNEZ1lCUW9iYkliLUxSN2JSTTlFbEktaGRTb2UzcUxNMjlaZGtQSmt1S1FWYzlvdlkwdDM3WjY0dHZTRU9VWFFB?oc=5",
      "datetime": 1786077180,
      "headlineKo": "시장이 이란-오만 회담을 지켜보면서 이번 주 호르무즈를 통과하는 선박 교통량이 감소합니다 - reuters.com"
    },
    {
      "headline": "AI demand keeps China's export engine humming, but risks loom - reuters.com",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMipAFBVV95cUxQcmhJQUR2QVh5SHpuWDZ2ZFk3RWdCbDlINEY1MEZuc0tRbkJQT3FuRmQ1WDdtd2owTmhJeDdIU09EYkFiNEJpTnA3cWhQQ1dnWUpkWDJPVENiZDIzTXlNUlRNenF2VlRXM29EbFFJelBiTUhuU1cycU5EV3RvaVhIbU4yc0pNWDM2aGlCaGtSTG5ySGx3aXhFcTNRTkZ4cFlva3k0cA?oc=5",
      "datetime": 1786070520,
      "headlineKo": "AI 수요로 인해 중국의 수출 엔진이 활발하게 작동하지만 위험이 닥칠 것임 - reuters.com"
    },
    {
      "headline": "Dollar on track for weekly gain as traders eye Iran talks, US jobs data - reuters.com",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxPOUNvR1pacXVtTWI3eUROeE54TXVYY3JEU1FNSFA4YlBaVFp6MDFXY0tFaFpqSFBfM2R2WTJQVDVtNG5RN3ozQkZLTTZpTGN5aDMzUE9uUVAyanZWN0VWcnVzWlF1aDh6Y0k2dlY4WWpsMFRMdFNoRW81Y1M2WW9qNTlPSWZVZGFnRVh1eEVTTXhWSlhOQkgyRFJfUm5nMGtGaHRUbnlITTRidldKOFg3ZEg5NnRLR3dj?oc=5",
      "datetime": 1786068300,
      "headlineKo": "거래자들이 이란 회담과 미국 고용 데이터를 주목하면서 달러가 주간 상승세를 보이고 있습니다 - reuters.com"
    },
    {
      "headline": "Gold set for best week since January as inflation fears ebb - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxPbWpUMWdTeEtHNmJ5VDlJZU9tOGp0d0xFQTBlT2xXUHBTSENUdHowV0JkLTFockFBbUl6T0hHT29nUjN5XzR0RWlCbU9VQjZBY2pJd0o5dmFhel9VeGZqV0E1VFpEZjJ3dWk1T2I5aERGNE41dVlkWlFFeHFsUm80RVVPTkNlX2lKc0tJTEtBRURzbXZZMWI5YnlHS1dlWWJyRkFsSmxXM2NWdU5qV1lj?oc=5",
      "datetime": 1786065240,
      "headlineKo": "인플레이션 우려가 쇠퇴함에 따라 금은 1월 이후 최고의 주를 기록했습니다 - Reuters"
    },
    {
      "headline": "Everybody wants energy security post the Iran war, but how? - reuters.com",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiugFBVV95cUxNY0VHNVlqVEZlcUZuWHpGVjZmak5COW1JRHVnLUVfUExEbF9NTEZ3SVRIZFhDeF84SmZ4Y2xwcDczb1oxSzNHWUFZT1JkWFhFb3FXTFJRTTFjUmpNVHdYdW5nX1A5WnNOVmpSOGRKcUduY0RhOWMwbE41eklWODdQVldLZ3RONm1SREtRZVhKTkt0cGxmTnBsWDVHNENUZWhwVjZhcG1BQ21rUGlVZ3FzSmNpamFsNFVCSnc?oc=5",
      "datetime": 1786064074,
      "headlineKo": "모두가 이란 전쟁 이후 에너지 안보를 원하지만 어떻게 그럴 수 있을까요? -reuters.com"
    },
    {
      "headline": "Oil prices drop as investors weigh potential Hormuz deal between Iran, Gulf states - reuters.com",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxNN0Z0cU1oY1hpbHZmZ1JoanRWLXVubmFlTDlWbkpqQ3V1d2dYYlV1U18zVEJ1Zkh1QXFFYm51SVJtZ1ctNHRGYnVlZGk3X0xKcVRHdW5MMzlDM2VQWDBYcmlWc25WX2VaWEJITEJCb2lOOFJsNFRiX0NYOVhCcmxEMWVLVGZXSkJfUzJzQXB2ZTFSMlJnZTczRWVJU3ZTUHEyeWNhcFBuSlI?oc=5",
      "datetime": 1786063620,
      "headlineKo": "투자자들이 이란과 걸프 국가 간의 호르무즈 거래 가능성을 고려하면서 유가 하락 - reuters.com"
    },
    {
      "headline": "Jim Cramer highlights 5 investing themes — and the stocks to buy for each",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/06/jim-cramer-5-investing-themes-stocks-to-buy.html",
      "datetime": 1786055005,
      "headlineKo": "Jim Cramer는 5가지 투자 테마와 각 테마에 대해 매수할 주식을 강조합니다."
    },
    {
      "headline": "Turkey, Saudi Arabia, Pakistan to sign joint defence agreement in Saudi Arabia on Friday, sources say - reuters.com",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiywFBVV95cUxPVWlCbG9KRkh2aHRNSjBWS25TWEM3V3Y5aDlfbFcwNGZIaldpZ25rNlpGUGVtcDFRQ0JUWnZ5NnhwSGJSZjBSRm5idU9iNFNUcEMxcFJDb0FrcjBUU2JvemN0OWYxazdOS3hzMHBxVVJvOVlsQ1RQcEIyT0R0NXFxSU01SDJJdm1hZklPSEYxSEQxS0t6WFpMemlDdWpFcXh5bW0wMUM3ODBBSjVPVHNJTk5rQ2ViSHdTWWlQeWQ0YjR4MjJNVTdXNDBqcw?oc=5",
      "datetime": 1786053823,
      "headlineKo": "터키, 사우디아라비아, 파키스탄이 금요일 사우디아라비아에서 공동방위협정에 서명할 것이라고 소식통이 전했습니다."
    },
    {
      "headline": "Saudi expects imminent two-pronged attack from Iran's allies, official says - reuters.com",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxPa3M0RkZsT0JHNHhwVXVvVURQZWs0R1hMbHFpa0RsdXE4MjNaME9lUXc4bXc1M1J4em93djJwZ3U4bS1UczdEaVJDRENsYXlYS2xJQ19ZeTVmRU1mLTBxWHFySVIzRjh3OG5JWFU5b1BpNjYtUlFDNzllUG56Tm9VcTgyYUExX1FzZ3ltLWxXNEE2R3NYZ2I4bTRRUFZtbm5WQUo2UDc2X2hUb3ZaOUpvdVVFWFdQdmx0NXFaeHl3XzdjQQ?oc=5",
      "datetime": 1786052580,
      "headlineKo": "사우디는 이란 동맹국으로부터 두 갈래의 공격이 임박할 것으로 예상하고 있다고 관계자가 밝혔습니다 - reuters.com"
    }
  ],
  "_fetched_at": 1786107602.5866666,
  "_updated_label": "2026-08-07 22:00"
};
