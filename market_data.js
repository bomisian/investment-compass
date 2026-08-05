// 자동 생성 파일 - buy_signal_telegram.py 실행 시마다 갱신됨. 직접 수정하지 마세요.
// 시장 환경 지표(야후) + 시장 헤드라인(Finnhub). 이 파일이 없어도 대시보드는 정상 동작함.
const MARKET_DATA = {
  "indicators": {
    "vix": {
      "current": 16.31999969482422,
      "prevClose": 16.5,
      "changeAbs": -0.18000030517578125,
      "changePct": -1.0909109404592803,
      "pctRank": 32.882165605095544,
      "min5y": 11.859999656677246,
      "max5y": 52.33000183105469,
      "ma20": 17.230999851226805,
      "ma60": 17.373499965667726,
      "chg1m": 0.1900005340576172,
      "chg3m": -1.0699996948242188,
      "chg1mPct": 1.1779326964861858,
      "chg3mPct": -6.152959933173697,
      "lastDate": "2026-08-05",
      "bars": 1256,
      "symbol": "^VIX",
      "label": "VIX (공포지수)",
      "unit": "",
      "digits": 2
    },
    "us10y": {
      "current": 4.629000186920166,
      "prevClose": 4.626999855041504,
      "changeAbs": 0.0020003318786621094,
      "changePct": 0.04323172555284566,
      "pctRank": 96.09561752988047,
      "min5y": 1.2170000076293945,
      "max5y": 4.98799991607666,
      "ma20": 4.621949982643128,
      "ma60": 4.534183311462402,
      "chg1m": 0.10000038146972656,
      "chg3m": 0.21300029754638672,
      "chg1mPct": 2.208001452095025,
      "chg3mPct": 4.823376423965257,
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
      "current": 75.41000366210938,
      "prevClose": 75.7699966430664,
      "changeAbs": -0.35999298095703125,
      "changePct": -0.47511283741091953,
      "pctRank": 46.30071599045346,
      "min5y": 55.27000045776367,
      "max5y": 123.69999694824219,
      "ma20": 81.22949981689453,
      "ma60": 84.43833325703939,
      "chg1m": 4.970001220703125,
      "chg3m": -26.85999298095703,
      "chg1mPct": 7.055651687174906,
      "chg3mPct": -26.263805478259062,
      "lastDate": "2026-08-05",
      "bars": 1257,
      "symbol": "CL=F",
      "label": "WTI 유가",
      "unit": "$",
      "digits": 1
    },
    "dollar": {
      "current": 99.75399780273438,
      "prevClose": 99.88999938964844,
      "changeAbs": -0.1360015869140625,
      "changePct": -0.1361513542347226,
      "pctRank": 34.049323786793956,
      "min5y": 92.04000091552734,
      "max5y": 114.11000061035156,
      "ma20": 100.77120056152344,
      "ma60": 100.19940032958985,
      "chg1m": -1.3860015869140625,
      "chg3m": 1.2739944458007812,
      "chg1mPct": -1.3703792715821572,
      "chg3mPct": 1.293658004034871,
      "lastDate": "2026-08-05",
      "bars": 1257,
      "symbol": "DX-Y.NYB",
      "label": "달러지수(DXY)",
      "unit": "",
      "digits": 1
    },
    "gold": {
      "current": 4310.10009765625,
      "prevClose": 4095.39990234375,
      "changeAbs": 214.7001953125,
      "changePct": 5.2424720523539,
      "pctRank": 90.21479713603819,
      "min5y": 1623.300048828125,
      "max5y": 5318.39990234375,
      "ma20": 4070.5750366210937,
      "ma60": 4247.866674804687,
      "chg1m": 164.80029296875,
      "chg3m": -245.69970703125,
      "chg1mPct": 3.975594063965989,
      "chg3mPct": -5.39311904747104,
      "lastDate": "2026-08-05",
      "bars": 1257,
      "symbol": "GC=F",
      "label": "금",
      "unit": "$",
      "digits": 0
    },
    "us30y": {
      "current": 5.175000190734863,
      "prevClose": 5.190000057220459,
      "changeAbs": -0.014999866485595703,
      "changePct": -0.2890147653221604,
      "pctRank": 99.5219123505976,
      "min5y": 1.6779999732971191,
      "max5y": 5.275000095367432,
      "ma20": 5.136600065231323,
      "ma60": 5.041450055440267,
      "chg1m": 0.13199996948242188,
      "chg3m": 0.19099998474121094,
      "chg1mPct": 2.6174888695451886,
      "chg3mPct": 3.83226277782891,
      "lastDate": "2026-08-05",
      "bars": 1255,
      "symbol": "^TYX",
      "label": "미국 30년물 금리",
      "unit": "%",
      "digits": 2
    }
  },
  "yieldSpread": 0.8940002918243408,
  "sector": {
    "groups": {
      "빅테크·SW": {
        "ret1m": 5.4957866308617875,
        "ret3m": 1.4287833460771004,
        "ret6m": 3.8217799397242125,
        "ret1y": 8.277591814394135,
        "winRate": 60.8,
        "count": 9
      },
      "반도체": {
        "ret1m": -3.1740576886305494,
        "ret3m": 17.84296520124842,
        "ret6m": 77.24657315840201,
        "ret1y": 245.736392847777,
        "winRate": 71.5,
        "count": 15
      }
    },
    "pair": [
      "빅테크·SW",
      "반도체"
    ],
    "corr60": 0.2024631263746477,
    "corrPctRank": 2.00836820083682,
    "corrMin5y": 0.11496792019743002,
    "corrMedian5y": 0.7115782038222396,
    "corrMax5y": 0.9346528705205663
  },
  "news": [
    {
      "headline": "We're pocketing gains in two tech stocks that are hitting new record highs",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/05/were-pocketing-gains-in-2-stocks-that-are-hitting-new-record-highs.html",
      "datetime": 1785943680,
      "headlineKo": "우리는 신기록을 경신하는 두 기술주에서 이익을 얻고 있습니다."
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
      "headline": "Israeli military strikes southern Lebanon after evacuation warning to village - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxPSUNJWWdZUW9teWxlNDE2eWVZWTFmd0JQdmwwYUNvSEpES1BhMjBJNF9LczlwUTZkaTZjMm5MNFhEUFN1RnpZclZHamljVnlGcW5GdkFMclYyUjQ4dEpHRWwtNjJLdjNoNWx5YlU3Q1FIUmhoV1hxMktXNnZXanZLLW9YS1JjRGp6ZkNMbTNGOVlETVRSUGREMnZ5dDVhUjYyWlB1RzBwenhtUDg3dDdIYVpoTXBlN2dFWTkyVnJn?oc=5",
      "datetime": 1785937400,
      "headlineKo": "이스라엘군, 마을에 대피 경고 후 레바논 남부 공습 - 로이터 통신"
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
      "headline": "Stock bears obliterated as Nasdaq 100 logs top 10 bullish stat of past decade",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/05/stock-bears-obliterated-as-nasdaq-logs-top-10-bullish-stat-of-past-decade.html",
      "datetime": 1785932566,
      "headlineKo": "나스닥 100이 지난 10년 동안 상위 10개 강세 통계를 기록하면서 주식 약세는 사라졌습니다."
    },
    {
      "headline": "The box office is on pace for its best year since the pandemic. But fewer people are going to the movies. - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxPd0dNLTBvc0hvdmxqZ1pJdDIydHRvYUVHYWUzV21ETFhFVXU1U1ZZRTFXTVRka2J1WGRIN3hRN2RPTXFacXpoYWMwSHBLV3kzOGtFVGhNU1pITmpldFlaalEyQ2dOMVVubWp4Z09VUmRLOVZsSGlnMlRQdDFJVFg2RHdnd1Rmc0d0bEVxMWJMaFItY0F6QXpidHZqc0xydzRHZm1OSDVuOG83cTNud0l5azJUTQ?oc=5",
      "datetime": 1785930902,
      "headlineKo": "박스오피스는 팬데믹 이후 최고의 한 해를 맞이하고 있습니다. 하지만 영화를 보러 가는 사람은 점점 줄어들고 있습니다. - 로이터"
    },
    {
      "headline": "UN rights chief says Iran executed at least 56 people since March - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMitwFBVV95cUxQeW9QZjd0R3djcFhWMjBZSmhadjhVekQyU0JzYW03NWdpN3VWMVZjelZuX0Rqa0RlbkZBRXF2YkFGcFBBZk93X3U4Y01neXEybmh3QlRrcnp2WEQ2LV9Ldk9DbTlLNThQTUlEOXNrYlZCdkVzeGpGcEdvYmFhYjBEM2YxaFVPY0FWSS1TblRuMFM1TDF3MmlJRFBtWm9oLUhzY0dtQlZmblpRTEpscTdxenEzclJSbG8?oc=5",
      "datetime": 1785925918,
      "headlineKo": "유엔 인권대표, 이란이 3월 이후 최소 56명을 처형했다고 밝혔습니다 - 로이터"
    },
    {
      "headline": "Euro zone services revival drives activity in July but outlook clouded by Iran war - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMixwFBVV95cUxQbUpBLVkzZ1FST0VMdzh1MmRUdFBYRXFpbmw0Y2swOUU2OGVBWnNYZzBZbGhIV19iYWp2ODVfQm1FTXBqaFRXU1MtRWI0R2VwVzZnNW1iV0hmbk8taEVaT3JNdU10ZmVTbGYzLXB2YW5QYUN2SEFWanNhZXN6YTViN0k1blh0SG9EeTdpaTZYNXlkSVZ3ZExTR2NyMnlfNnJheGFJZVRYOV9VdzRuYW1LbWZOdGhpdnBtYkIyellKTFlCQWpjc0JF?oc=5",
      "datetime": 1785920538,
      "headlineKo": "유로존 서비스 회복으로 7월 활동이 활발해졌지만 이란 전쟁으로 인해 전망이 흐려짐 - Reuters"
    }
  ],
  "_fetched_at": 1785945602.24785,
  "_updated_label": "2026-08-06 01:00"
};
