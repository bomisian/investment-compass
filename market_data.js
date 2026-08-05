// 자동 생성 파일 - buy_signal_telegram.py 실행 시마다 갱신됨. 직접 수정하지 마세요.
// 시장 환경 지표(야후) + 시장 헤드라인(Finnhub). 이 파일이 없어도 대시보드는 정상 동작함.
const MARKET_DATA = {
  "indicators": {
    "vix": {
      "current": 15.899999618530273,
      "prevClose": 16.5,
      "changeAbs": -0.6000003814697266,
      "changePct": -3.636365948301373,
      "pctRank": 28.582802547770704,
      "min5y": 11.859999656677246,
      "max5y": 52.33000183105469,
      "ma20": 17.20999984741211,
      "ma60": 17.36649996439616,
      "chg1m": -0.22999954223632812,
      "chg3m": -1.489999771118164,
      "chg1mPct": -1.4259116813580606,
      "chg3mPct": -8.568141595249857,
      "lastDate": "2026-08-05",
      "bars": 1256,
      "symbol": "^VIX",
      "label": "VIX (공포지수)",
      "unit": "",
      "digits": 2
    },
    "us10y": {
      "current": 4.615000247955322,
      "prevClose": 4.626999855041504,
      "changeAbs": -0.01199960708618164,
      "changePct": -0.259338825634651,
      "pctRank": 95.1394422310757,
      "min5y": 1.2170000076293945,
      "max5y": 4.98799991607666,
      "ma20": 4.621249985694885,
      "ma60": 4.533949979146322,
      "chg1m": 0.08600044250488281,
      "chg3m": 0.19900035858154297,
      "chg1mPct": 1.8988837756492132,
      "chg3mPct": 4.50634881265277,
      "lastDate": "2026-08-05",
      "bars": 1255,
      "symbol": "^TNX",
      "label": "미국 10년물 금리",
      "unit": "%",
      "digits": 2
    },
    "us3m": {
      "current": 3.7319998741149902,
      "prevClose": 3.7300000190734863,
      "changeAbs": 0.0019998550415039062,
      "changePct": 0.0536154163881388,
      "pctRank": 37.60956175298805,
      "min5y": 0.019999999552965164,
      "max5y": 5.3480000495910645,
      "ma20": 3.720799970626831,
      "ma60": 3.662099997202555,
      "chg1m": 0.006999969482421875,
      "chg3m": 0.13199996948242188,
      "chg1mPct": 0.18791864863449836,
      "chg3mPct": 3.6666659160896384,
      "lastDate": "2026-08-05",
      "bars": 1255,
      "symbol": "^IRX",
      "label": "미국 3개월 금리",
      "unit": "%",
      "digits": 2
    },
    "oil": {
      "current": 74.63999938964844,
      "prevClose": 75.7699966430664,
      "changeAbs": -1.1299972534179688,
      "changePct": -1.4913518588909336,
      "pctRank": 44.31185361972951,
      "min5y": 55.27000045776367,
      "max5y": 123.69999694824219,
      "ma20": 81.19099960327148,
      "ma60": 84.42549985249838,
      "chg1m": 4.1999969482421875,
      "chg3m": -27.62999725341797,
      "chg1mPct": 5.962516755640163,
      "chg3mPct": -27.016718647062945,
      "lastDate": "2026-08-05",
      "bars": 1257,
      "symbol": "CL=F",
      "label": "WTI 유가",
      "unit": "$",
      "digits": 1
    },
    "dollar": {
      "current": 99.68099975585938,
      "prevClose": 99.88999938964844,
      "changeAbs": -0.2089996337890625,
      "changePct": -0.20922978783271579,
      "pctRank": 33.65155131264916,
      "min5y": 92.04000091552734,
      "max5y": 114.11000061035156,
      "ma20": 100.76755065917969,
      "ma60": 100.19818369547527,
      "chg1m": -1.4589996337890625,
      "chg3m": 1.2009963989257812,
      "chg1mPct": -1.4425545210537045,
      "chg3mPct": 1.2195332635934804,
      "lastDate": "2026-08-05",
      "bars": 1257,
      "symbol": "DX-Y.NYB",
      "label": "달러지수(DXY)",
      "unit": "",
      "digits": 1
    },
    "gold": {
      "current": 4310.39990234375,
      "prevClose": 4095.39990234375,
      "changeAbs": 215.0,
      "changePct": 5.2497925752490735,
      "pctRank": 90.21479713603819,
      "min5y": 1623.300048828125,
      "max5y": 5318.39990234375,
      "ma20": 4070.5900268554688,
      "ma60": 4247.871671549479,
      "chg1m": 165.10009765625,
      "chg3m": -245.39990234375,
      "chg1mPct": 3.9828264645552296,
      "chg3mPct": -5.386538321794913,
      "lastDate": "2026-08-05",
      "bars": 1257,
      "symbol": "GC=F",
      "label": "금",
      "unit": "$",
      "digits": 0
    },
    "us30y": {
      "current": 5.165999889373779,
      "prevClose": 5.190000057220459,
      "changeAbs": -0.024000167846679688,
      "changePct": -0.4624309746064463,
      "pctRank": 99.44223107569721,
      "min5y": 1.6779999732971191,
      "max5y": 5.275000095367432,
      "ma20": 5.136150050163269,
      "ma60": 5.041300050417582,
      "chg1m": 0.12299966812133789,
      "chg3m": 0.18199968338012695,
      "chg1mPct": 2.439017702259601,
      "chg3mPct": 3.6516788896047396,
      "lastDate": "2026-08-05",
      "bars": 1255,
      "symbol": "^TYX",
      "label": "미국 30년물 금리",
      "unit": "%",
      "digits": 2
    }
  },
  "yieldSpread": 0.883000373840332,
  "sector": {
    "groups": {
      "빅테크·SW": {
        "ret1m": 5.267814017890116,
        "ret3m": 1.209599381405102,
        "ret6m": 3.59742479520031,
        "ret1y": 8.043607820146281,
        "winRate": 60.8,
        "count": 9
      },
      "반도체": {
        "ret1m": -2.7655987557902106,
        "ret3m": 18.340084161930005,
        "ret6m": 77.99428543874394,
        "ret1y": 247.1948771619554,
        "winRate": 71.5,
        "count": 15
      }
    },
    "pair": [
      "빅테크·SW",
      "반도체"
    ],
    "corr60": 0.2017674246246927,
    "corrPctRank": 1.9246861924686192,
    "corrMin5y": 0.11496792019743002,
    "corrMedian5y": 0.7115782038222396,
    "corrMax5y": 0.9346528705205663
  },
  "news": [
    {
      "headline": "US lifts sanctions on Fly Baghdad, previously linked to Iran's IRGC - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxNdGd5eGNIbFJTUDl0MlJHQ01RR3F5NVhNaVJuTVpvZ0FJMHlrNnFhQ1hsOUFyNWI0c1cyX0RwbTRwTHNrTE1yQ0NzUmlmMXBPYkM1Q1Vya3hOOFRQXzVHOEhHemQtd1dQcXlrcFVZRUh3T0RoWkRiam9jUWxhNld2MjRPMjNwd3hhaWVlZ2IwN2UzaS05NG04dHVCM0FidUxtQjBNcy1GWThaRE9RT1VmOGFzT2g1MEhiUVludGVGaWhCUQ?oc=5",
      "datetime": 1785948299,
      "headlineKo": "미국, 이전에 이란 IRGC와 연결되었던 플라이 바그다드에 대한 제재 해제 - Reuters"
    },
    {
      "headline": "Iran and Oman reach understanding on coordinates of route through Hormuz, Iran ministry says - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiygFBVV95cUxOOXZPbkhCTjRpQkNteVlfOVVkTkR4eGpFUFJTZmZySE5WQW1MakpaR1NUVEtXM0VucEpRbml6dUk1R2lsbE5vN3V5M0dHTHZad2JXUEsyUTlvVXFQU0hpNnE5Z3h4d0NMSE9OcXNocHRJQ1Q0eXV6M0phX05BeDFJblF1eDBpRGY2YzNGVHBCT21ISmRUSXhQc2V4dW9SeklwUkY5dmpsTWdzQWNHY2ZLX3NTNXNOeVhOejFRWUN2bURYYS1vOW9URmJR?oc=5",
      "datetime": 1785945314,
      "headlineKo": "이란과 오만이 호르무즈를 통과하는 경로 좌표에 대해 합의했다고 이란 국방부가 밝혔습니다."
    },
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
      "headline": "Gulf oil exports steady in July, still 40% below pre-war mark - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxOU1c5cDdsaENzVWRTM3JoaUFicGFuczBDdm5GY2tkLWJhN0pSVk81MTlYMm1CQlNmQ1c5ZHZJUUFnLUhFd29CZmRjaEhkR0k3aEZRQW1JR3BKbVZiLVQ5UFJrSFZCTEFIMHpSakZ3TW5IZDctci1sT1piR2VzcGhNU21fN3FDd3ZLaEJ3dFBXdjY2Wjd4aEtwblhlTHJETENxWG5lRDNlWEpCM2ZS?oc=5",
      "datetime": 1785939489,
      "headlineKo": "걸프만 석유 수출은 7월에도 꾸준했으며 여전히 전쟁 전 수준보다 40% 낮습니다."
    },
    {
      "headline": "World faces fresh food price surge, FAO warns - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxPbHJ6aHpOeXBGeVhjdjBkcVVfdF9wSHYzRlpkWDh3eEZENXJPdlU5amwtN2k1OE80VXA2TlBPWGh3VzVnWG5vLTVjanROSjI1Q3hJS2lEQUR5WEFlSy0yM05XZFRLWDJTUkJzbkZnVFdRTHgxbVhMZVQ4VWZ1empGcUY3cDRyS21GUWU2ZkFkaTZRajVkUm9xdGExQWZXeVU?oc=5",
      "datetime": 1785936805,
      "headlineKo": "세계는 신선 식품 가격 급등에 직면해 있다고 FAO는 경고했습니다 - Reuters"
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
      "headline": "Phillips 66 beats quarterly estimates as Iran war boosts US refining margins - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxPdFdjb1Q5RzUtcnRaUmV5U2FuN0dBcUZwT3RMa2pqVVVocG8zZmRPV2E1NjhlRTR6TXBsN1NHQ21EUTJvQ0JvV2NtbXhWbHVjMUN3NHFvTzlVR0IxUmxHaTFUbEpNX0xJSFFncjE4UllwaTJ2bm9UVTdHd00xOVBuTmZJVXRCekZPclluTDhFQUF2S3MwcG5rR3VrOE5TdFBHd3piYTRjTW9yVldvZGFVV3lfa1pLNlIzTXloYQ?oc=5",
      "datetime": 1785933344,
      "headlineKo": "필립스 66, 이란 전쟁으로 미국 정제 마진 증가로 분기별 추정치 상회 - Reuters"
    }
  ],
  "_fetched_at": 1785952826.1634517,
  "_updated_label": "2026-08-06 03:00"
};
