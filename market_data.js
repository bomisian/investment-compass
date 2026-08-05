// 자동 생성 파일 - buy_signal_telegram.py 실행 시마다 갱신됨. 직접 수정하지 마세요.
// 시장 환경 지표(야후) + 시장 헤드라인(Finnhub). 이 파일이 없어도 대시보드는 정상 동작함.
const MARKET_DATA = {
  "indicators": {
    "vix": {
      "current": 16.010000228881836,
      "prevClose": 16.5,
      "changeAbs": -0.48999977111816406,
      "changePct": -2.9696955825343276,
      "pctRank": 29.617834394904456,
      "min5y": 11.859999656677246,
      "max5y": 52.33000183105469,
      "ma20": 17.215499877929688,
      "ma60": 17.368333307902017,
      "chg1m": -0.11999893188476562,
      "chg3m": -1.3799991607666016,
      "chg1mPct": -0.7439487794682719,
      "chg3mPct": -7.935590622205882,
      "lastDate": "2026-08-05",
      "bars": 1256,
      "symbol": "^VIX",
      "label": "VIX (공포지수)",
      "unit": "",
      "digits": 2
    },
    "us10y": {
      "current": 4.63100004196167,
      "prevClose": 4.626999855041504,
      "changeAbs": 0.004000186920166016,
      "changePct": 0.08645314556920673,
      "pctRank": 96.25498007968127,
      "min5y": 1.2170000076293945,
      "max5y": 4.98799991607666,
      "ma20": 4.6220499753952025,
      "ma60": 4.534216642379761,
      "chg1m": 0.10200023651123047,
      "chg3m": 0.21500015258789062,
      "chg1mPct": 2.252158112006937,
      "chg3mPct": 4.868662997597566,
      "lastDate": "2026-08-05",
      "bars": 1255,
      "symbol": "^TNX",
      "label": "미국 10년물 금리",
      "unit": "%",
      "digits": 2
    },
    "us3m": {
      "current": 3.734999895095825,
      "prevClose": 3.7300000190734863,
      "changeAbs": 0.004999876022338867,
      "changePct": 0.1340449328893251,
      "pctRank": 37.76892430278884,
      "min5y": 0.019999999552965164,
      "max5y": 5.3480000495910645,
      "ma20": 3.7209499716758727,
      "ma60": 3.662149997552236,
      "chg1m": 0.009999990463256836,
      "chg3m": 0.13499999046325684,
      "chg1mPct": 0.2684561266919879,
      "chg3mPct": 3.749999834431538,
      "lastDate": "2026-08-05",
      "bars": 1255,
      "symbol": "^IRX",
      "label": "미국 3개월 금리",
      "unit": "%",
      "digits": 2
    },
    "oil": {
      "current": 75.05000305175781,
      "prevClose": 75.7699966430664,
      "changeAbs": -0.7199935913085938,
      "changePct": -0.9502357439717258,
      "pctRank": 45.346062052505964,
      "min5y": 55.27000045776367,
      "max5y": 123.69999694824219,
      "ma20": 81.21149978637695,
      "ma60": 84.43233324686686,
      "chg1m": 4.6100006103515625,
      "chg3m": -27.219993591308594,
      "chg1mPct": 6.544577584571034,
      "chg3mPct": -26.61581547353461,
      "lastDate": "2026-08-05",
      "bars": 1257,
      "symbol": "CL=F",
      "label": "WTI 유가",
      "unit": "$",
      "digits": 1
    },
    "dollar": {
      "current": 99.7490005493164,
      "prevClose": 99.88999938964844,
      "changeAbs": -0.14099884033203125,
      "changePct": -0.14115411071535447,
      "pctRank": 33.89021479713604,
      "min5y": 92.04000091552734,
      "max5y": 114.11000061035156,
      "ma20": 100.77095069885254,
      "ma60": 100.19931704203287,
      "chg1m": -1.3909988403320312,
      "chg3m": 1.2689971923828125,
      "chg1mPct": -1.375320198463832,
      "chg3mPct": 1.28858362015223,
      "lastDate": "2026-08-05",
      "bars": 1257,
      "symbol": "DX-Y.NYB",
      "label": "달러지수(DXY)",
      "unit": "",
      "digits": 1
    },
    "gold": {
      "current": 4303.7001953125,
      "prevClose": 4095.39990234375,
      "changeAbs": 208.30029296875,
      "changePct": 5.086201541625816,
      "pctRank": 90.05568814638028,
      "min5y": 1623.300048828125,
      "max5y": 5318.39990234375,
      "ma20": 4070.2550415039063,
      "ma60": 4247.760009765625,
      "chg1m": 158.400390625,
      "chg3m": -252.099609375,
      "chg1mPct": 3.82120469177841,
      "chg3mPct": -5.533597176847249,
      "lastDate": "2026-08-05",
      "bars": 1257,
      "symbol": "GC=F",
      "label": "금",
      "unit": "$",
      "digits": 0
    },
    "us30y": {
      "current": 5.181000232696533,
      "prevClose": 5.190000057220459,
      "changeAbs": -0.008999824523925781,
      "changePct": -0.1734070216705489,
      "pctRank": 99.5219123505976,
      "min5y": 1.6779999732971191,
      "max5y": 5.275000095367432,
      "ma20": 5.136900067329407,
      "ma60": 5.041550056139628,
      "chg1m": 0.1380000114440918,
      "chg3m": 0.19700002670288086,
      "chg1mPct": 2.7364664959268863,
      "chg3mPct": 3.9526488475255848,
      "lastDate": "2026-08-05",
      "bars": 1255,
      "symbol": "^TYX",
      "label": "미국 30년물 금리",
      "unit": "%",
      "digits": 2
    }
  },
  "yieldSpread": 0.8960001468658447,
  "sector": {
    "groups": {
      "빅테크·SW": {
        "ret1m": 5.322765743458269,
        "ret3m": 1.2624326446580625,
        "ret6m": 3.651504547022144,
        "ret1y": 8.100008560882843,
        "winRate": 60.8,
        "count": 9
      },
      "반도체": {
        "ret1m": -2.524682570511849,
        "ret3m": 18.63329357420589,
        "ret6m": 78.43529915097476,
        "ret1y": 248.0551165863127,
        "winRate": 71.5,
        "count": 15
      }
    },
    "pair": [
      "빅테크·SW",
      "반도체"
    ],
    "corr60": 0.20118883004268034,
    "corrPctRank": 1.9246861924686192,
    "corrMin5y": 0.11496792019743002,
    "corrMedian5y": 0.7115782038222396,
    "corrMax5y": 0.9346528705205663
  },
  "news": [
    {
      "headline": "SpaceX gives Nvidia a much-needed boost. Plus, Cramer on an 'undervalued' stock",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/05/spacex-gives-nvidia-a-much-needed-boost-cramers-undervalued-stock-.html",
      "datetime": 1785945051,
      "headlineKo": "SpaceX는 Nvidia에 꼭 필요한 기능을 제공합니다. 게다가 Cramer는 '저평가된' 주식을 보유하고 있습니다."
    },
    {
      "headline": "We're pocketing gains in two tech stocks that are hitting new record highs",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/05/were-pocketing-gains-in-2-stocks-that-are-hitting-new-record-highs.html",
      "datetime": 1785943680,
      "headlineKo": "우리는 신기록을 경신하는 두 기술주에서 이익을 얻고 있습니다."
    },
    {
      "headline": "Israeli military strikes southern Lebanon after evacuation warning to village - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxPSUNJWWdZUW9teWxlNDE2eWVZWTFmd0JQdmwwYUNvSEpES1BhMjBJNF9LczlwUTZkaTZjMm5MNFhEUFN1RnpZclZHamljVnlGcW5GdkFMclYyUjQ4dEpHRWwtNjJLdjNoNWx5YlU3Q1FIUmhoV1hxMktXNnZXanZLLW9YS1JjRGp6ZkNMbTNGOVlETVRSUGREMnZ5dDVhUjYyWlB1RzBwenhtUDg3dDdIYVpoTXBlN2dFWTkyVnJn?oc=5",
      "datetime": 1785942692,
      "headlineKo": "이스라엘군, 마을에 대피 경고 후 레바논 남부 공습 - 로이터 통신"
    },
    {
      "headline": "Disney weighs free ad-supported streaming, says it has sold out Super Bowl ad spots",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/05/disney-free-ad-supported-streaming-super-bowl-ads.html",
      "datetime": 1785941068,
      "headlineKo": "디즈니는 무료 광고 지원 스트리밍에 무게를 두고 슈퍼볼 광고 스팟을 매진했다고 밝혔습니다."
    },
    {
      "headline": "US removes sanctions from three IRGC-linked entities, Treasury website shows - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxNdGd5eGNIbFJTUDl0MlJHQ01RR3F5NVhNaVJuTVpvZ0FJMHlrNnFhQ1hsOUFyNWI0c1cyX0RwbTRwTHNrTE1yQ0NzUmlmMXBPYkM1Q1Vya3hOOFRQXzVHOEhHemQtd1dQcXlrcFVZRUh3T0RoWkRiam9jUWxhNld2MjRPMjNwd3hhaWVlZ2IwN2UzaS05NG04dHVCM0FidUxtQjBNcy1GWThaRE9RT1VmOGFzT2g1MEhiUVludGVGaWhCUQ?oc=5",
      "datetime": 1785939825,
      "headlineKo": "미국, IRGC 관련 기관 3곳에 대한 제재 해제, 재무부 웹사이트 표시 - Reuters"
    },
    {
      "headline": "Gulf oil exports steady in July, still 40% below pre-war mark - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxOU1c5cDdsaENzVWRTM3JoaUFicGFuczBDdm5GY2tkLWJhN0pSVk81MTlYMm1CQlNmQ1c5ZHZJUUFnLUhFd29CZmRjaEhkR0k3aEZRQW1JR3BKbVZiLVQ5UFJrSFZCTEFIMHpSakZ3TW5IZDctci1sT1piR2VzcGhNU21fN3FDd3ZLaEJ3dFBXdjY2Wjd4aEtwblhlTHJETENxWG5lRDNlWEpCM2ZS?oc=5",
      "datetime": 1785939489,
      "headlineKo": "걸프만 석유 수출은 7월에도 꾸준했으며 여전히 전쟁 전 수준보다 40% 낮습니다."
    },
    {
      "headline": "Situational Awareness hedge fund meltdown was a warning shot for leveraged markets, BofA CEO says",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/05/bofa-brian-moynihan-situational-awareness-meltdown-was-a-warning-shot.html",
      "datetime": 1785936140,
      "headlineKo": "BofA CEO는 상황 인식 헤지펀드 붕괴는 레버리지 시장에 대한 경고 신호라고 말했습니다."
    },
    {
      "headline": "Jim Cramer's top 10 things to watch in the stock market Wednesday",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/05/jim-cramers-top-10-things-to-watch-in-the-stock-market-wednesday.html",
      "datetime": 1785935855,
      "headlineKo": "짐 크레이머가 수요일 주식시장에서 주목해야 할 10가지"
    },
    {
      "headline": "Iran state oil company's bank accounts frozen over debt, Fars news agency reports - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiywFBVV95cUxONE82WTRtSFZNUEJvUG1VQzB3MkxHNVl4RVNJSFgzUUM2dFRsb0xONXp3V0M3LVpGYURQOFc3T01UeUM2Zl9oNFJydzBscXNBMVo3MExTa1ZyZHJlYXYzbTFMeHhXQlktT09pd3BhX1pTSThfMEFiaEJ6Y2NTZGc1SEkwSkJueHpGc0FxN1RYaHhDZWJ0NDI1eXViN3g3N0xmYlA2aGFhZ082dnhqRTJLcURWbDI2aDlLeDVwUURvZ0pKeWFPenJRNjZmTQ?oc=5",
      "datetime": 1785935566,
      "headlineKo": "이란 국영 석유 회사의 은행 계좌가 부채 때문에 동결되었다고 Fars 통신사가 보도했습니다."
    },
    {
      "headline": "Proposed Hormuz deal would give Iran control of inbound traffic, sources say - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxQUFpfZEh3NVhNLURNVl9ETWp2ak5nZEx4d0JYQ19WZ3Z6bTl3V2wyUzVLQmFnTkJrZTZtVXd1cnp2dkdXUmh0d1FXUmhfbGQ1a3dKY1ZzQ0pXQTdUcS02X1llNkdFbzFLN0k2YXk2X2JEUTVCV1RBeGdUaFA2VGFzSW9LYlRDQm5senFDSzFVRkxHaXdSazRBWUlTT1pjY00yU1Qw?oc=5",
      "datetime": 1785935287,
      "headlineKo": "제안된 호르무즈 협정으로 이란은 입국 트래픽을 통제할 수 있을 것이라고 소식통은 전했습니다. - 로이터 통신"
    },
    {
      "headline": "Phillips 66 beats quarterly estimates as Iran war boosts US refining margins - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxPdFdjb1Q5RzUtcnRaUmV5U2FuN0dBcUZwT3RMa2pqVVVocG8zZmRPV2E1NjhlRTR6TXBsN1NHQ21EUTJvQ0JvV2NtbXhWbHVjMUN3NHFvTzlVR0IxUmxHaTFUbEpNX0xJSFFncjE4UllwaTJ2bm9UVTdHd00xOVBuTmZJVXRCekZPclluTDhFQUF2S3MwcG5rR3VrOE5TdFBHd3piYTRjTW9yVldvZGFVV3lfa1pLNlIzTXloYQ?oc=5",
      "datetime": 1785933344,
      "headlineKo": "필립스 66, 이란 전쟁으로 미국 정제 마진 증가로 분기별 추정치 상회 - Reuters"
    },
    {
      "headline": "Stock bears obliterated as Nasdaq 100 logs top 10 bullish stat of past decade",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/05/stock-bears-obliterated-as-nasdaq-logs-top-10-bullish-stat-of-past-decade.html",
      "datetime": 1785932566,
      "headlineKo": "나스닥 100이 지난 10년 동안 상위 10개 강세 통계를 기록하면서 주식 약세는 사라졌습니다."
    }
  ],
  "_fetched_at": 1785949220.2220914,
  "_updated_label": "2026-08-06 02:00"
};
