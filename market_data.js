// 자동 생성 파일 - buy_signal_telegram.py 실행 시마다 갱신됨. 직접 수정하지 마세요.
// 시장 환경 지표(야후) + 시장 헤드라인(Finnhub). 이 파일이 없어도 대시보드는 정상 동작함.
const MARKET_DATA = {
  "indicators": {
    "vix": {
      "current": 15.970000267028809,
      "prevClose": 15.859999656677246,
      "changeAbs": 0.1100006103515625,
      "changePct": 0.6935725897399434,
      "pctRank": 28.980891719745223,
      "min5y": 11.859999656677246,
      "max5y": 52.33000183105469,
      "ma20": 17.23349986076355,
      "ma60": 17.398999961217246,
      "chg1m": 0.40000057220458984,
      "chg3m": -1.409998893737793,
      "chg1mPct": 2.569046756870253,
      "chg3mPct": -8.112767329245374,
      "lastDate": "2026-08-04",
      "bars": 1256,
      "symbol": "^VIX",
      "label": "VIX (공포지수)",
      "unit": "",
      "digits": 2
    },
    "us10y": {
      "current": 4.63700008392334,
      "prevClose": 4.685999870300293,
      "changeAbs": -0.048999786376953125,
      "changePct": -1.0456634172679367,
      "pctRank": 96.33466135458167,
      "min5y": 1.184000015258789,
      "max5y": 4.98799991607666,
      "ma20": 4.619449973106384,
      "ma60": 4.529933309555053,
      "chg1m": 0.15799999237060547,
      "chg3m": 0.19099998474121094,
      "chg1mPct": 3.5275728765576253,
      "chg3mPct": 4.295995962221113,
      "lastDate": "2026-08-04",
      "bars": 1255,
      "symbol": "^TNX",
      "label": "미국 10년물 금리",
      "unit": "%",
      "digits": 2
    },
    "us3m": {
      "current": 3.7300000190734863,
      "prevClose": 3.700000047683716,
      "changeAbs": 0.029999971389770508,
      "changePct": 0.8108100271120583,
      "pctRank": 37.37051792828685,
      "min5y": 0.019999999552965164,
      "max5y": 5.3480000495910645,
      "ma20": 3.720349979400635,
      "ma60": 3.6598166664441427,
      "chg1m": 0.039999961853027344,
      "chg3m": 0.1400001049041748,
      "chg1mPct": 1.0840097895054734,
      "chg3mPct": 3.899724463825492,
      "lastDate": "2026-08-04",
      "bars": 1255,
      "symbol": "^IRX",
      "label": "미국 3개월 금리",
      "unit": "%",
      "digits": 2
    },
    "oil": {
      "current": 76.12000274658203,
      "prevClose": 80.33999633789062,
      "changeAbs": -4.219993591308594,
      "changePct": -5.252668388930863,
      "pctRank": 49.00556881463803,
      "min5y": 55.27000045776367,
      "max5y": 123.69999694824219,
      "ma20": 81.15249977111816,
      "ma60": 84.77766660054525,
      "chg1m": 7.569999694824219,
      "chg3m": -30.29999542236328,
      "chg1mPct": 11.043033344737543,
      "chg3mPct": -28.472087900491243,
      "lastDate": "2026-08-04",
      "bars": 1257,
      "symbol": "CL=F",
      "label": "WTI 유가",
      "unit": "$",
      "digits": 1
    },
    "dollar": {
      "current": 99.87899780273438,
      "prevClose": 99.95999908447266,
      "changeAbs": -0.08100128173828125,
      "changePct": -0.08103369595855031,
      "pctRank": 34.924423229912485,
      "min5y": 92.04000091552734,
      "max5y": 114.11000061035156,
      "ma20": 100.8354507446289,
      "ma60": 100.16731694539388,
      "chg1m": -0.9710006713867188,
      "chg3m": 1.40899658203125,
      "chg1mPct": -0.9628167437562085,
      "chg3mPct": 1.430889168847711,
      "lastDate": "2026-08-04",
      "bars": 1257,
      "symbol": "DX-Y.NYB",
      "label": "달러지수(DXY)",
      "unit": "",
      "digits": 1
    },
    "gold": {
      "current": 4149.39990234375,
      "prevClose": 4033.699951171875,
      "changeAbs": 115.699951171875,
      "changePct": 2.8683331078768446,
      "pctRank": 88.3054892601432,
      "min5y": 1623.300048828125,
      "max5y": 5318.39990234375,
      "ma20": 4061.3150268554687,
      "ma60": 4255.605004882813,
      "chg1m": -5.7001953125,
      "chg3m": -370.10009765625,
      "chg1mPct": -0.1371855112639834,
      "chg3mPct": -8.188961116412214,
      "lastDate": "2026-08-04",
      "bars": 1257,
      "symbol": "GC=F",
      "label": "금",
      "unit": "$",
      "digits": 0
    },
    "us30y": {
      "current": 5.200999736785889,
      "prevClose": 5.230999946594238,
      "changeAbs": -0.03000020980834961,
      "changePct": -0.5735081268330336,
      "pctRank": 99.6812749003984,
      "min5y": 1.6779999732971191,
      "max5y": 5.275000095367432,
      "ma20": 5.131650042533875,
      "ma60": 5.0378333806991575,
      "chg1m": 0.20799970626831055,
      "chg3m": 0.17599964141845703,
      "chg1mPct": 4.165826256699404,
      "chg3mPct": 3.5024803597658005,
      "lastDate": "2026-08-04",
      "bars": 1255,
      "symbol": "^TYX",
      "label": "미국 30년물 금리",
      "unit": "%",
      "digits": 2
    }
  },
  "yieldSpread": 0.9070000648498535,
  "sector": {
    "groups": {
      "빅테크·SW": {
        "ret1m": 5.026955424761503,
        "ret3m": 0.6943475114866482,
        "ret6m": 1.8733866608179994,
        "ret1y": 9.782331248485065,
        "winRate": 60.8,
        "count": 9
      },
      "반도체": {
        "ret1m": -9.699027668807103,
        "ret3m": 22.27895498008017,
        "ret6m": 72.01921012674421,
        "ret1y": 248.04319182344662,
        "winRate": 71.5,
        "count": 15
      }
    },
    "pair": [
      "빅테크·SW",
      "반도체"
    ],
    "corr60": 0.17186799236680733,
    "corrPctRank": 1.0878661087866108,
    "corrMin5y": 0.11496792019743002,
    "corrMedian5y": 0.7115782038222396,
    "corrMax5y": 0.9346528705205663
  },
  "news": [
    {
      "headline": "Jim Cramer's top 10 things to watch in the stock market Tuesday",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/04/jim-cramers-top-10-things-to-watch-in-the-stock-market-tuesday.html",
      "datetime": 1785848813,
      "headlineKo": "Jim Cramer가 화요일 주식 시장에서 주목해야 할 10가지 항목"
    },
    {
      "headline": "EXCLUSIVE: US has used 'virtually all' of its long-range precision missiles during Iran war, sources say - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxOZjVoa01lTFhQYVMtVjRxRWZKSng1YzFUTTNJOVI1T1pWZVNKc1czOWhJWHB3VDFFWnVrY3lLT1FnSVBfU1M1RFdrU2FsYVlKZXdhVm9VbF9PaEFNeGVMR0ZtNmlEeGhkWG1iang1U0kzb3hmWENGSnNXODRzdnZYaE1LYkY4Vm1hbzJEcEl1ZzZIRVBQLS1nYUYyTWdDdjZjXzN0NmtuZm5IV2FEdlBQby1UUnBqc0FF?oc=5",
      "datetime": 1785843294,
      "headlineKo": "독점: 미국은 이란 전쟁 중 장거리 정밀 미사일을 '거의 모두' 사용했다고 소식통은 전했습니다. - 로이터 통신"
    },
    {
      "headline": "Iran demands inbound control of Hormuz and outbound oversight, source says - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxOSjFmUC1OVjJCS05weXNFTmhaZkRab0dwSVV1LXJ5dEp2ZVNxX0l6QVdLQTN3SUdtSS1pOVF4OEYxRzZHbUJNeXk5ZmJnUG5FVVFScEJnOEUyM3FLWWhzQk8yME1VcW42X3dPOURqRi03QlN6RnZLMGFfWW5LWUVmUDctVDR0YXRhWTAwbTJRaUdKYTNJb2NuS2hrNjRpOVdlZjBPRTVzNXhUbjRpdmRFSGdkVHlGUnpJYjRGTQ?oc=5",
      "datetime": 1785842677,
      "headlineKo": "이란은 호르무즈에 대한 인바운드 통제와 아웃바운드 감독을 요구한다고 소식통은 전했습니다."
    },
    {
      "headline": "EXCLUSIVE: Ukraine's Fire Point starts to integrate European tech into missile defence system - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMi2AFBVV95cUxQRzFrNFI0Ry1iYVEtVTB1SFBPbXF1N244ZjJOaTh4SE52eWVETjFvcHBlRlJ5eXlpdGJsYktuX1JPVW5LbmRneW1jQXdpdC1XSmo4OTVEME42eXk3bEhBYWZUOEdOaHVmSHc0OFk3NUl2Y2lkYXZvdGlFa0Q0ODVMYVdNSHZ1SzU2czZSN3ZuczdBbFVJSTZSTkZPTXItMU1zV0Z0VmxsT2RvaVNxT0tsd0hiWDdKcERacDVsUERSdFpRbXpIU1NGa29aU0xMd08wbl9mc1lUbjA?oc=5",
      "datetime": 1785842374,
      "headlineKo": "독점: 우크라이나의 Fire Point, 유럽 기술을 미사일 방어 시스템에 통합하기 시작 - Reuters"
    },
    {
      "headline": "Pfizer tops quarterly estimates, hikes low end of revenue guidance on strength of non-Covid products",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/04/pfizer-pfe-earnings-q2-2026.html",
      "datetime": 1785842004,
      "headlineKo": "화이자, 분기별 추정치를 상회하고 비Covid 제품의 강점에 대한 최저 매출 지침을 인상"
    },
    {
      "headline": "Palantir jumps 16% on 'otherworldly' commercial revenue — here's what's driving the demand",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/04/palantir-2q-earnings-ai-sovereign-tools.html",
      "datetime": 1785839229,
      "headlineKo": "Palantir는 '초자연적인' 상업 수익으로 16% 증가했습니다. 수요를 주도하는 요인은 다음과 같습니다."
    },
    {
      "headline": "PODCAST: US munitions, Max Miller, Ceuta and Infantino's future - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMilwFBVV95cUxOUEY5UU5rSzJLWl80R1JRekd4T2RpZkUyU2JCeG04V2VTOGJuRDFnTzQ5MWFGQk9UcXJ2UnlnYnFiY3FMSzNvVWtYbGJyUkpaNHRueUpKbDdGeVMtdGhTUmhBbVoxeDdvcVNGa2E1TXZpN0J4TVZWdHVHMVZaSUExTDZhdkZXQVFROG9ncEV4NHgyWk9QR2I4?oc=5",
      "datetime": 1785838994,
      "headlineKo": "팟캐스트: 미국 군수품, Max Miller, Ceuta 및 Infantino의 미래 - Reuters"
    },
    {
      "headline": "Turkey calls on Russia, Ukraine to ensure Black Sea safety after drone attack - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxNLWxZWjEzUHh2dXNYYUxyS2RjbUhHTXh1RHpVTjZwUUpScFlZbnFUVDkwUlR3bXJMU3otWDY4Q2cyTml6dXV2YVJIZkdiN0lnZUV0T19VN1QwRUY4ZmU5bjNhUHJfU2tWeEw4RVFoTUN4R2lGaW1WSXpzUWxaVmZWSF9kRGhLcE9GU1lxaHp4N0xnNFp0MG9lMkZEeTd4TTEyTTBySlEzYVJFM0RSdjFTRHJZbnFmdFBISndla004RHVTQQ?oc=5",
      "datetime": 1785834946,
      "headlineKo": "터키, 러시아와 우크라이나에 드론 공격 후 흑해 안전 보장 촉구 - 로이터 통신"
    },
    {
      "headline": "Goldman sees Brent at $80-$90 until US-Iran deal or major escalation - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxOZ3RQcExCZTFRck1VT3ZpMWV3YkxZVElmR18wQ3RGa2lpbDFNWU11alJoaVdFM2Z0M0t6V2wtdzkwNThqVHFPSW5HWHVOeHJzM3NJdnRuMEFfUnVwS09TS1hkWUVJZXBQNTVFbEMzbG41ZXdqR0V1TjdpV2pGY1BTV2pmSGwzdjRqZWJkR1VCTlE4aUpkNHk3b25YdG05eHRMdXBzZFhiZTJ4d19zcFBXZmtkYy1LZw?oc=5",
      "datetime": 1785833143,
      "headlineKo": "골드만삭스는 미국-이란 협상 또는 대규모 확대 전까지 브렌트유 가격을 80~90달러로 본다 - Reuters"
    },
    {
      "headline": "BP's quarterly profit doubles to over $5 billion after Iran war oil surge - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxOdU9hYzNQV1Ezbmd5OXB4Z1d4QTR0QU80Z0MteS03b002RE5yd2hPb2l5Z0NqLWJ4Y21PSTN0Z29UNVBBVEVyRDRGc0VNUnoySWNlcWU4cUlVXy1iNWd0MVA3V3pXLXN1ZHlyQWcyNzRfcmNxYnJKWFBQTWZ1anZtajRzcFRSd3BIQWJhOVlfQXZUaVU2Y1RlTUhqcHBQZ1ItTjhJeEg0NA?oc=5",
      "datetime": 1785823740,
      "headlineKo": "이란 전쟁 석유 급증 이후 BP의 분기 수익은 50억 달러 이상으로 두 배 증가 - Reuters"
    },
    {
      "headline": "OPEC+ oil output hike is irrelevant for now, not for later - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxOZ1F5SEtvVzlTU0VibXRmNGx4ZldyYllQcHBfSEkzRHVLVGdrNUxMLUZtQXZsT1pTWjJ4Z1F0ekFyN3NkWjRITjdCc2NtcmpFZ0k2OWN5Z25WOVVFVHpJNEVWQkU3emxZYkUtVFhFand1cWVHSWUyRUpQa1FOOUtPWlRKUzRVQUs3V3oxcWphVzVKUUhSSUNZaHNtdHVkM1U5VXE2Q0ZPNzE4UG5WQmdVS2cwZlU3UnNN?oc=5",
      "datetime": 1785823200,
      "headlineKo": "OPEC+ 석유 생산량 증가는 지금은 중요하지 않고 나중도 중요하지 않습니다 - Reuters"
    },
    {
      "headline": "Aramco says US-Iran war has cost the global market 2.6 billion barrels of oil - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMikAFBVV95cUxOcXFsci0ySk53THJaUktvbFlJd0ZjTzhFNmJSU0gtY1B5RElscWFhWHJLWTcxdlJ1SDhhV1dJcmQteVdaT0NLekZaMU05V2tockhvaGFtYlgzbk5OdWpDVEM4TmFoX2FpZFMyQWdxTzJ2SkdzYVExYVdRWHBKVlNPcTBzX1hub05WWk45TE1HVDM?oc=5",
      "datetime": 1785821520,
      "headlineKo": "아람코는 미국-이란 전쟁으로 인해 세계 시장에서 26억 배럴의 석유 손실이 발생했다고 밝혔습니다."
    }
  ],
  "_fetched_at": 1785852002.4011526,
  "_updated_label": "2026-08-04 23:00"
};
