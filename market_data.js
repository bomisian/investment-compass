// 자동 생성 파일 - buy_signal_telegram.py 실행 시마다 갱신됨. 직접 수정하지 마세요.
// 시장 환경 지표(야후) + 시장 헤드라인(Finnhub). 이 파일이 없어도 대시보드는 정상 동작함.
const MARKET_DATA = {
  "indicators": {
    "vix": {
      "current": 15.630000114440918,
      "prevClose": 16.5,
      "changeAbs": -0.869999885559082,
      "changePct": -5.272726579145952,
      "pctRank": 25.557324840764334,
      "min5y": 11.859999656677246,
      "max5y": 52.33000183105469,
      "ma20": 17.196499872207642,
      "ma60": 17.361999972661337,
      "chg1m": -0.4999990463256836,
      "chg3m": -1.7599992752075195,
      "chg1mPct": -3.0998082600143197,
      "chg3mPct": -10.120755244276637,
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
      "current": 3.7300000190734863,
      "prevClose": 3.7300000190734863,
      "changeAbs": 0.0,
      "changePct": 0.0,
      "pctRank": 37.29083665338646,
      "min5y": 0.019999999552965164,
      "max5y": 5.3480000495910645,
      "ma20": 3.720699977874756,
      "ma60": 3.662066666285197,
      "chg1m": 0.005000114440917969,
      "chg3m": 0.13000011444091797,
      "chg1mPct": 0.1342312635954598,
      "chg3mPct": 3.6111143856873613,
      "lastDate": "2026-08-05",
      "bars": 1255,
      "symbol": "^IRX",
      "label": "미국 3개월 금리",
      "unit": "%",
      "digits": 2
    },
    "oil": {
      "current": 75.11000061035156,
      "prevClose": 75.7699966430664,
      "changeAbs": -0.6599960327148438,
      "changePct": -0.8710519492615537,
      "pctRank": 45.425616547334926,
      "min5y": 55.27000045776367,
      "max5y": 123.69999694824219,
      "ma20": 81.21449966430664,
      "ma60": 84.43333320617675,
      "chg1m": 4.6699981689453125,
      "chg3m": -27.159996032714844,
      "chg1mPct": 6.629752991320427,
      "chg3mPct": -26.557149627672555,
      "lastDate": "2026-08-05",
      "bars": 1257,
      "symbol": "CL=F",
      "label": "WTI 유가",
      "unit": "$",
      "digits": 1
    },
    "dollar": {
      "current": 99.6760025024414,
      "prevClose": 99.88999938964844,
      "changeAbs": -0.21399688720703125,
      "changePct": -0.21423254431334762,
      "pctRank": 33.65155131264916,
      "min5y": 92.04000091552734,
      "max5y": 114.11000061035156,
      "ma20": 100.76730079650879,
      "ma60": 100.19810040791829,
      "chg1m": -1.4639968872070312,
      "chg3m": 1.1959991455078125,
      "chg1mPct": -1.447495447935379,
      "chg3mPct": 1.214458879710839,
      "lastDate": "2026-08-05",
      "bars": 1257,
      "symbol": "DX-Y.NYB",
      "label": "달러지수(DXY)",
      "unit": "",
      "digits": 1
    },
    "gold": {
      "current": 4320.7998046875,
      "prevClose": 4095.39990234375,
      "changeAbs": 225.39990234375,
      "changePct": 5.503733645516674,
      "pctRank": 90.29435163086714,
      "min5y": 1623.300048828125,
      "max5y": 5318.39990234375,
      "ma20": 4071.1100219726563,
      "ma60": 4248.045003255208,
      "chg1m": 175.5,
      "chg3m": -235.0,
      "chg1mPct": 4.233710666754304,
      "chg3mPct": -5.15826002183429,
      "lastDate": "2026-08-05",
      "bars": 1257,
      "symbol": "GC=F",
      "label": "금",
      "unit": "$",
      "digits": 0
    },
    "us30y": {
      "current": 5.168999671936035,
      "prevClose": 5.190000057220459,
      "changeAbs": -0.021000385284423828,
      "changePct": -0.40463169658750897,
      "pctRank": 99.44223107569721,
      "min5y": 1.6779999732971191,
      "max5y": 5.275000095367432,
      "ma20": 5.136300039291382,
      "ma60": 5.04135004679362,
      "chg1m": 0.12599945068359375,
      "chg3m": 0.1849994659423828,
      "chg1mPct": 2.498501787737409,
      "chg3mPct": 3.711867140773919,
      "lastDate": "2026-08-05",
      "bars": 1255,
      "symbol": "^TYX",
      "label": "미국 30년물 금리",
      "unit": "%",
      "digits": 2
    }
  },
  "yieldSpread": 0.8850002288818359,
  "sector": {
    "groups": {
      "빅테크·SW": {
        "ret1m": 5.081247290356061,
        "ret3m": 1.0302250500599852,
        "ret6m": 3.413818507700972,
        "ret1y": 7.852121537942747,
        "winRate": 60.8,
        "count": 9
      },
      "반도체": {
        "ret1m": -2.752548995278614,
        "ret3m": 18.355966501281863,
        "ret6m": 78.01817392643642,
        "ret1y": 247.24147394189995,
        "winRate": 71.5,
        "count": 15
      }
    },
    "pair": [
      "빅테크·SW",
      "반도체"
    ],
    "corr60": 0.20177727192434747,
    "corrPctRank": 1.9246861924686192,
    "corrMin5y": 0.11496792019743002,
    "corrMedian5y": 0.7115782038222396,
    "corrMax5y": 0.9346528705205663
  },
  "news": [
    {
      "headline": "Phillips 66 beats quarterly estimates as Iran war boosts US refining margins - reuters.com",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxPdFdjb1Q5RzUtcnRaUmV5U2FuN0dBcUZwT3RMa2pqVVVocG8zZmRPV2E1NjhlRTR6TXBsN1NHQ21EUTJvQ0JvV2NtbXhWbHVjMUN3NHFvTzlVR0IxUmxHaTFUbEpNX0xJSFFncjE4UllwaTJ2bm9UVTdHd00xOVBuTmZJVXRCekZPclluTDhFQUF2S3MwcG5rR3VrOE5TdFBHd3piYTRjTW9yVldvZGFVV3lfa1pLNlIzTXloYQ?oc=5",
      "datetime": 1785955127,
      "headlineKo": "이란 전쟁으로 미국 정제 마진이 증가함에 따라 필립스 66이 분기별 예상치를 상회했습니다. - reuters.com"
    },
    {
      "headline": "Flutter shares plummet on earnings miss and another key leadership change",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/05/flutter-earnings-ceo-leadership-change-stock.html",
      "datetime": 1785954031,
      "headlineKo": "Flutter 주가는 수익 손실 및 또 다른 주요 리더십 변경으로 급락했습니다."
    },
    {
      "headline": "Stocks mixed with Nasdaq down; gold prices jump - reuters.com",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMigwFBVV95cUxPSjNOaFJhdXRJblJMNldJM09LeFJDOXNqY2Y0R3dhcGt3S1ZyNm1peFdvVlBfN2RrNmtCYVhQa3pzenI5VlBld2c2Y0JPLTAzNWRhTWxUYWxjNEpvWGxIYlR3M2NLdGg5RnpRSmtYVVVwamJfYTZ5S1JaQ3J5QjFEQ3B0WQ?oc=5",
      "datetime": 1785951241,
      "headlineKo": "나스닥과 혼재된 주식; 금값 급등 - reuters.com"
    },
    {
      "headline": "US lifts sanctions on Fly Baghdad, previously linked to Iran's IRGC - reuters.com",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxNdGd5eGNIbFJTUDl0MlJHQ01RR3F5NVhNaVJuTVpvZ0FJMHlrNnFhQ1hsOUFyNWI0c1cyX0RwbTRwTHNrTE1yQ0NzUmlmMXBPYkM1Q1Vya3hOOFRQXzVHOEhHemQtd1dQcXlrcFVZRUh3T0RoWkRiam9jUWxhNld2MjRPMjNwd3hhaWVlZ2IwN2UzaS05NG04dHVCM0FidUxtQjBNcy1GWThaRE9RT1VmOGFzT2g1MEhiUVludGVGaWhCUQ?oc=5",
      "datetime": 1785948299,
      "headlineKo": "미국, 이전에 이란 IRGC와 연결되었던 플라이 바그다드에 대한 제재 해제 - reuters.com"
    },
    {
      "headline": "Iran and Oman reach understanding on coordinates of route through Hormuz, Iran ministry says - reuters.com",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiygFBVV95cUxOOXZPbkhCTjRpQkNteVlfOVVkTkR4eGpFUFJTZmZySE5WQW1MakpaR1NUVEtXM0VucEpRbml6dUk1R2lsbE5vN3V5M0dHTHZad2JXUEsyUTlvVXFQU0hpNnE5Z3h4d0NMSE9OcXNocHRJQ1Q0eXV6M0phX05BeDFJblF1eDBpRGY2YzNGVHBCT21ISmRUSXhQc2V4dW9SeklwUkY5dmpsTWdzQWNHY2ZLX3NTNXNOeVhOejFRWUN2bURYYS1vOW9URmJR?oc=5",
      "datetime": 1785947360,
      "headlineKo": "이란과 오만이 호르무즈를 통과하는 경로 좌표에 대해 합의했다고 이란 국방부가 밝혔습니다 - reuters.com"
    },
    {
      "headline": "SpaceX gives Nvidia a much-needed boost. Plus, Cramer on an 'undervalued' stock",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/05/spacex-gives-nvidia-a-much-needed-boost-cramers-undervalued-stock-.html",
      "datetime": 1785945051,
      "headlineKo": "SpaceX는 Nvidia에 꼭 필요한 기능을 제공합니다. 게다가 Cramer는 '저평가된' 주식을 보유하고 있습니다."
    },
    {
      "headline": "Yen steadies after intervention and dollar stays near six-week low - reuters.com",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMixwFBVV95cUxNRFFDTkhtVFJsMkg2YzlLQzd2c0c0aXhwZHl2M3lFZE1vdnNka1ZnbFNwalhDZ0x5Y3ZZQWZ5ZUw4bGwwdzVzU1QxUXNpT3FEMzJhTVVJTEhqTG5KTDZqS2l5Qmc0dUZ1THk5YTFpckwxaE1weFNYUFRtd0xFd2JVc2RvQ1FTQ3FjUkk5REEtTk50cWdwdzVPb3p6Q1lkOVNYTEdaWmE1UkhicVlrY004TkpvOGJSWGxVMmR5bmZEcGpPX09ETWFV?oc=5",
      "datetime": 1785944746,
      "headlineKo": "엔화는 개입 이후 안정되고 달러는 6주 최저 수준에 머물고 있다 - reuters.com"
    },
    {
      "headline": "We're pocketing gains in two tech stocks that are hitting new record highs",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/05/were-pocketing-gains-in-2-stocks-that-are-hitting-new-record-highs.html",
      "datetime": 1785943680,
      "headlineKo": "우리는 신기록을 경신하는 두 기술주에서 이익을 얻고 있습니다."
    },
    {
      "headline": "Israeli military strikes southern Lebanon after evacuation warning to village - reuters.com",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxPSUNJWWdZUW9teWxlNDE2eWVZWTFmd0JQdmwwYUNvSEpES1BhMjBJNF9LczlwUTZkaTZjMm5MNFhEUFN1RnpZclZHamljVnlGcW5GdkFMclYyUjQ4dEpHRWwtNjJLdjNoNWx5YlU3Q1FIUmhoV1hxMktXNnZXanZLLW9YS1JjRGp6ZkNMbTNGOVlETVRSUGREMnZ5dDVhUjYyWlB1RzBwenhtUDg3dDdIYVpoTXBlN2dFWTkyVnJn?oc=5",
      "datetime": 1785942692,
      "headlineKo": "이스라엘군, 마을에 대피 경고 후 레바논 남부 공습 - reuters.com"
    },
    {
      "headline": "Disney weighs free ad-supported streaming, says it has sold out Super Bowl ad spots",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/05/disney-free-ad-supported-streaming-super-bowl-ads.html",
      "datetime": 1785941068,
      "headlineKo": "디즈니는 무료 광고 지원 스트리밍에 무게를 두고 슈퍼볼 광고 스팟을 매진했다고 밝혔습니다."
    },
    {
      "headline": "Gulf oil exports steady in July, still 40% below pre-war mark - reuters.com",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxOU1c5cDdsaENzVWRTM3JoaUFicGFuczBDdm5GY2tkLWJhN0pSVk81MTlYMm1CQlNmQ1c5ZHZJUUFnLUhFd29CZmRjaEhkR0k3aEZRQW1JR3BKbVZiLVQ5UFJrSFZCTEFIMHpSakZ3TW5IZDctci1sT1piR2VzcGhNU21fN3FDd3ZLaEJ3dFBXdjY2Wjd4aEtwblhlTHJETENxWG5lRDNlWEpCM2ZS?oc=5",
      "datetime": 1785939489,
      "headlineKo": "걸프만 석유 수출은 7월에도 꾸준했으며 여전히 전쟁 전 수준보다 40% 낮습니다 - reuters.com"
    },
    {
      "headline": "World faces fresh food price surge, FAO warns - reuters.com",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxPbHJ6aHpOeXBGeVhjdjBkcVVfdF9wSHYzRlpkWDh3eEZENXJPdlU5amwtN2k1OE80VXA2TlBPWGh3VzVnWG5vLTVjanROSjI1Q3hJS2lEQUR5WEFlSy0yM05XZFRLWDJTUkJzbkZnVFdRTHgxbVhMZVQ4VWZ1empGcUY3cDRyS21GUWU2ZkFkaTZRajVkUm9xdGExQWZXeVU?oc=5",
      "datetime": 1785936805,
      "headlineKo": "세계는 신선식품 가격 급등에 직면해 있다고 FAO가 경고 - reuters.com"
    }
  ],
  "_fetched_at": 1785956488.7223656,
  "_updated_label": "2026-08-06 04:01"
};
