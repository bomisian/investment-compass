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
      "current": 77.08000183105469,
      "prevClose": 77.29000091552734,
      "changeAbs": -0.20999908447265625,
      "changePct": -0.27170278429957684,
      "pctRank": 51.949085123309466,
      "min5y": 55.27000045776367,
      "max5y": 123.69999694824219,
      "ma20": 81.76399955749511,
      "ma60": 83.67049992879232,
      "chg1m": 5.0,
      "chg3m": -17.729995727539062,
      "chg1mPct": 6.936736782719972,
      "chg3mPct": -18.70055498797129,
      "lastDate": "2026-08-07",
      "bars": 1257,
      "symbol": "CL=F",
      "label": "WTI 유가",
      "unit": "$",
      "digits": 1
    },
    "dollar": {
      "current": 99.60399627685547,
      "prevClose": 99.97000122070312,
      "changeAbs": -0.36600494384765625,
      "changePct": -0.3661147738106249,
      "pctRank": 32.85600636435959,
      "min5y": 92.04000091552734,
      "max5y": 114.11000061035156,
      "ma20": 100.6512004852295,
      "ma60": 100.25406697591146,
      "chg1m": -1.3360061645507812,
      "chg3m": 1.3539962768554688,
      "chg1mPct": -1.3235646247644064,
      "chg3mPct": 1.3781132588859732,
      "lastDate": "2026-08-07",
      "bars": 1257,
      "symbol": "DX-Y.NYB",
      "label": "달러지수(DXY)",
      "unit": "",
      "digits": 1
    },
    "gold": {
      "current": 4401.2998046875,
      "prevClose": 4242.0,
      "changeAbs": 159.2998046875,
      "changePct": 3.755299497583687,
      "pctRank": 91.40811455847255,
      "min5y": 1623.300048828125,
      "max5y": 5318.39990234375,
      "ma20": 4087.790002441406,
      "ma60": 4234.2449951171875,
      "chg1m": 270.69970703125,
      "chg3m": -298.5,
      "chg1mPct": 6.553520085007699,
      "chg3mPct": -6.351334363269712,
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
      "headline": "Saudi Arabia, Turkey, Pakistan pledge mutual defence as Middle East turmoil escalates - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxNU2lUV2RTOWpHY1ZMeHh4SVNOUnV4TXZNQjZoa2ZXSmg1SnNGX2lGOEJUdy0taTQyNmJaRzNKdHdNUEQtYzhsOFROeEhHWk11LUlKTy13VmE0dlJuSHpveG1xSTBjNTZZOXJrWGNyU1NSbUpraEFHdTBjNHowdWluRUU5a0lsY3NuY1FmMDViMVJMMkN4VzVydm9aeng4eWxDV1lkVFBwWTNTVzFTaTJJcWxoUFdBTE9zZUx1U0VNYnlQTFNQd18yYg?oc=5",
      "datetime": 1786141364,
      "headlineKo": "사우디아라비아, 터키, 파키스탄, 중동 혼란이 고조됨에 따라 상호 방어를 약속 - 로이터 통신"
    },
    {
      "headline": "US Senate passes Russia sanctions championed by Graham; US House next - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxQb0pzeU9VRmJkMDBtRWM3MFhyR3JKTENJeDVfb3pNNHpycXViQnF6LWpveDVmZlotcWVrV0M3cTV4Q1hyTUlPcnRwaDFqRW5fWE5BdlFSYVd4NnZ5MWU2X241OU1QVzZkREh5MjVVMFBlY0k3RDgtM2RDUEFWNVVwUlJ4RFo4OHpGanRuclQ1WXV0bmVZX1MtRUZWak5ERjJ1Y0FLQlR3SlBtS2VyM0EyWUlJQVRJdw?oc=5",
      "datetime": 1786141238,
      "headlineKo": "미국 상원은 그레이엄이 옹호하는 러시아 제재를 통과시켰습니다. 미국 하원 다음 - 로이터"
    },
    {
      "headline": "‘SaaSpocalypse’ debate intensifies as software stocks swing wildly",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/07/saaspocalypse-debate-intensifies-as-software-stocks-swing-wildly.html",
      "datetime": 1786134137,
      "headlineKo": "소프트웨어 주가 급등하면서 'SaaS종말론' 논쟁 격화"
    },
    {
      "headline": "Dollar drops as weak US jobs data pushes out Fed hike expectations - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxPOUNvR1pacXVtTWI3eUROeE54TXVYY3JEU1FNSFA4YlBaVFp6MDFXY0tFaFpqSFBfM2R2WTJQVDVtNG5RN3ozQkZLTTZpTGN5aDMzUE9uUVAyanZWN0VWcnVzWlF1aDh6Y0k2dlY4WWpsMFRMdFNoRW81Y1M2WW9qNTlPSWZVZGFnRVh1eEVTTXhWSlhOQkgyRFJfUm5nMGtGaHRUbnlITTRidldKOFg3ZEg5NnRLR3dj?oc=5",
      "datetime": 1786133791,
      "headlineKo": "미국 고용지표 부진으로 연준 인상 기대감 부진에 달러 하락 - Reuters"
    },
    {
      "headline": "Brent climbs $1 on uncertainty over end to Iran war - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxNN0Z0cU1oY1hpbHZmZ1JoanRWLXVubmFlTDlWbkpqQ3V1d2dYYlV1U18zVEJ1Zkh1QXFFYm51SVJtZ1ctNHRGYnVlZGk3X0xKcVRHdW5MMzlDM2VQWDBYcmlWc25WX2VaWEJITEJCb2lOOFJsNFRiX0NYOVhCcmxEMWVLVGZXSkJfUzJzQXB2ZTFSMlJnZTczRWVJU3ZTUHEyeWNhcFBuSlI?oc=5",
      "datetime": 1786133114,
      "headlineKo": "브렌트유, 이란 전쟁 종식 불확실성에 1달러 상승 - 로이터"
    },
    {
      "headline": "Iraqi PM, Saudi intelligence chief discuss regional security as militias delay response - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMixwFBVV95cUxNYThtNWRuaTFwZXA0d2VNMmlWY1JteFZFdF9JSjlYZG4yWmxJN2RidHdaMWtCQ2hSdGdBdHRpY2pDZXpsaFZ0dlZDX0RzcHJCN0p1anRHbmd1R284b29IMjNleVRfMGJTb0ZHVHNpVURuaUdDemVrSVY3eVJwemxyLW1zdzRSN2JTQzhJTUxtVW5XLW1SenJIc1hlVFN1cURqc0E1T0p5OFYtQlVOR1lha2VsNzNKOG42R19IdExmejhLQlUxR3FV?oc=5",
      "datetime": 1786131694,
      "headlineKo": "이라크 총리, 사우디 정보국장, 민병대의 대응 지연으로 지역 안보 논의 - 로이터 통신"
    },
    {
      "headline": "US official: We expect a deal soon between Iran and Oman on Strait of Hormuz - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxPMkZHc1FWRXNSWG5BdjNhZ0dqOEdNUFUtUl80NTNFYkFrM2RrLVBiSXlOOFdaek5hcEhIMl84OVJLZnVDMzNodFBScmliaFdNYUpaN21uQ3V3VmQ2V1p3MGZ0QUozdTJQb09EcTJ1VERWc3E0d1Z5dkNvalFEcEVSQzRQejkwZmdybVJTVDJPbk4wMS1hWFBOaXJKaTE4MUxHNS1STUFxTzN4S0ZDSmtZOXFhdUZaa0d1?oc=5",
      "datetime": 1786130143,
      "headlineKo": "美 관리 \"이란과 오만 간 호르무즈 해협 곧 협상 타결될 것\" - 로이터 통신"
    },
    {
      "headline": "Trump to host mining CEOs as administration seeks minerals for defense supply chains - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMi0wFBVV95cUxPOC1sWW4tTHpEM1NiQWVIbnZMRVlvcVcyNTl2UE1QU1lqSlBVaTlNai1UUm1yR0htazhtZjA1N3Jtb2dEaHhnWklPREdWdG52a0FrTjBMamVaM1FlR1JmSzZycUpWY3pKUzA4V3pRTk9FRzRsTklOMEhvQlRybVVjTHRNbjByQ3ZHY25ja2JERjBXdDUzNXo1WDNFeEFGa3hZTnZUR2lxWTZIQ2p5M01qV0lnUXBFQm1JRVdlZk90MkZhTWplb3RZdVJ0ZktrNmFKM0dr?oc=5",
      "datetime": 1786129903,
      "headlineKo": "트럼프 행정부가 국방 공급망을 위한 광물을 모색함에 따라 광산 CEO를 초대 - 로이터"
    },
    {
      "headline": "US Senate confirms Trump nominees for labor board, cementing Republican control - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMixgFBVV95cUxNRkRzNUY4QWZsempqLU5lTnFSYlRIU0Y0a3BHZmFfdjk2Sk9wUkl3WlJfaXI4TmxleXlDd2FOUFhSQnVPX0l4eWI0cm5FMTFFWmQtX0VaU1REUlB2bzZiWXE4NG4yd3M1YTBlcXJvMjFHSXVEUVZsanh6VUJFS0hfeEx4OFZUYURlRkhvZmxIZmROOE0ySllyUkhGUlFEdnRfeThha2s2UXRZVFNsUC02UGZjVmE3MTRXNTdGbHFvajlWSHRra0E?oc=5",
      "datetime": 1786127657,
      "headlineKo": "미 상원, 트럼프 노동위원회 후보 확정… 공화당의 지배력 강화 - 로이터 통신"
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
    }
  ],
  "_fetched_at": 1786147202.584077,
  "_updated_label": "2026-08-08 09:00"
};
