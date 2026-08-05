// 자동 생성 파일 - buy_signal_telegram.py 실행 시마다 갱신됨. 직접 수정하지 마세요.
// 시장 환경 지표(야후) + 시장 헤드라인(Finnhub). 이 파일이 없어도 대시보드는 정상 동작함.
const MARKET_DATA = {
  "indicators": {
    "vix": {
      "current": 15.489999771118164,
      "prevClose": 16.5,
      "changeAbs": -1.010000228881836,
      "changePct": -6.121213508374764,
      "pctRank": 25.079617834394906,
      "min5y": 11.859999656677246,
      "max5y": 52.33000183105469,
      "ma20": 17.189499855041504,
      "ma60": 17.359666633605958,
      "chg1m": -0.6399993896484375,
      "chg3m": -1.8999996185302734,
      "chg1mPct": -3.967758356771177,
      "chg3mPct": -10.925817626314963,
      "lastDate": "2026-08-05",
      "bars": 1256,
      "symbol": "^VIX",
      "label": "VIX (공포지수)",
      "unit": "",
      "digits": 2
    },
    "us10y": {
      "current": 4.616999626159668,
      "prevClose": 4.626999855041504,
      "changeAbs": -0.010000228881835938,
      "changePct": -0.2161277111547745,
      "pctRank": 95.1394422310757,
      "min5y": 1.2170000076293945,
      "max5y": 4.98799991607666,
      "ma20": 4.621349954605103,
      "ma60": 4.533983302116394,
      "chg1m": 0.08799982070922852,
      "chg3m": 0.20099973678588867,
      "chg1mPct": 1.9430299070299109,
      "chg3mPct": 4.551624588341914,
      "lastDate": "2026-08-05",
      "bars": 1255,
      "symbol": "^TNX",
      "label": "미국 10년물 금리",
      "unit": "%",
      "digits": 2
    },
    "us3m": {
      "current": 3.7249999046325684,
      "prevClose": 3.7300000190734863,
      "changeAbs": -0.005000114440917969,
      "changePct": -0.13405132480830315,
      "pctRank": 37.13147410358566,
      "min5y": 0.019999999552965164,
      "max5y": 5.3480000495910645,
      "ma20": 3.72044997215271,
      "ma60": 3.661983331044515,
      "chg1m": 0.0,
      "chg3m": 0.125,
      "chg1mPct": 0.0,
      "chg3mPct": 3.472222314204701,
      "lastDate": "2026-08-05",
      "bars": 1255,
      "symbol": "^IRX",
      "label": "미국 3개월 금리",
      "unit": "%",
      "digits": 2
    },
    "oil": {
      "current": 75.12999725341797,
      "prevClose": 75.7699966430664,
      "changeAbs": -0.6399993896484375,
      "changePct": -0.8446607074081254,
      "pctRank": 45.50517104216388,
      "min5y": 55.27000045776367,
      "max5y": 123.69999694824219,
      "ma20": 81.21549949645996,
      "ma60": 84.4336664835612,
      "chg1m": 4.689994812011719,
      "chg3m": -27.139999389648438,
      "chg1mPct": 6.658141183218971,
      "chg3mPct": -26.537596832402404,
      "lastDate": "2026-08-05",
      "bars": 1257,
      "symbol": "CL=F",
      "label": "WTI 유가",
      "unit": "$",
      "digits": 1
    },
    "dollar": {
      "current": 99.71700286865234,
      "prevClose": 99.88999938964844,
      "changeAbs": -0.17299652099609375,
      "changePct": -0.17318702778370557,
      "pctRank": 33.73110580747812,
      "min5y": 92.04000091552734,
      "max5y": 114.11000061035156,
      "ma20": 100.76935081481933,
      "ma60": 100.19878374735514,
      "chg1m": -1.4229965209960938,
      "chg3m": 1.23699951171875,
      "chg1mPct": -1.4069572173061884,
      "chg3mPct": 1.2560920690013946,
      "lastDate": "2026-08-05",
      "bars": 1257,
      "symbol": "DX-Y.NYB",
      "label": "달러지수(DXY)",
      "unit": "",
      "digits": 1
    },
    "gold": {
      "current": 4308.7998046875,
      "prevClose": 4095.39990234375,
      "changeAbs": 213.39990234375,
      "changePct": 5.210721966898121,
      "pctRank": 90.21479713603819,
      "min5y": 1623.300048828125,
      "max5y": 5318.39990234375,
      "ma20": 4070.5100219726564,
      "ma60": 4247.845003255208,
      "chg1m": 163.5,
      "chg3m": -247.0,
      "chg1mPct": 3.9442261767198215,
      "chg3mPct": -5.421660533587531,
      "lastDate": "2026-08-05",
      "bars": 1257,
      "symbol": "GC=F",
      "label": "금",
      "unit": "$",
      "digits": 0
    },
    "us30y": {
      "current": 5.174000263214111,
      "prevClose": 5.190000057220459,
      "changeAbs": -0.015999794006347656,
      "changePct": -0.3082811913284729,
      "pctRank": 99.5219123505976,
      "min5y": 1.6779999732971191,
      "max5y": 5.275000095367432,
      "ma20": 5.136550068855286,
      "ma60": 5.041433389981588,
      "chg1m": 0.13100004196166992,
      "chg3m": 0.19000005722045898,
      "chg1mPct": 2.5976608410525857,
      "chg3mPct": 3.812200027439184,
      "lastDate": "2026-08-05",
      "bars": 1255,
      "symbol": "^TYX",
      "label": "미국 30년물 금리",
      "unit": "%",
      "digits": 2
    }
  },
  "yieldSpread": 0.8919997215270996,
  "sector": {
    "groups": {
      "빅테크·SW": {
        "ret1m": 5.332407336495448,
        "ret3m": 1.2717025414237026,
        "ret6m": 3.6609931473022383,
        "ret1y": 8.10990439187913,
        "winRate": 60.8,
        "count": 9
      },
      "반도체": {
        "ret1m": -4.446199003396767,
        "ret3m": 16.29469310486147,
        "ret6m": 74.9178306413353,
        "ret1y": 241.19395784677775,
        "winRate": 71.5,
        "count": 15
      }
    },
    "pair": [
      "빅테크·SW",
      "반도체"
    ],
    "corr60": 0.20532929379926831,
    "corrPctRank": 2.0100502512562812,
    "corrMin5y": 0.11496792019743002,
    "corrMedian5y": 0.7115784818334243,
    "corrMax5y": 0.9346528705205663
  },
  "news": [
    {
      "headline": "Proposed Hormuz deal would give Iran control of inbound traffic, sources say - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxQUFpfZEh3NVhNLURNVl9ETWp2ak5nZEx4d0JYQ19WZ3Z6bTl3V2wyUzVLQmFnTkJrZTZtVXd1cnp2dkdXUmh0d1FXUmhfbGQ1a3dKY1ZzQ0pXQTdUcS02X1llNkdFbzFLN0k2YXk2X2JEUTVCV1RBeGdUaFA2VGFzSW9LYlRDQm5senFDSzFVRkxHaXdSazRBWUlTT1pjY00yU1Qw?oc=5",
      "datetime": 1785958052,
      "headlineKo": "제안된 호르무즈 협정으로 이란은 입국 트래픽을 통제할 수 있을 것이라고 소식통은 전했습니다. - 로이터 통신"
    },
    {
      "headline": "Israeli military strikes southern Lebanon after evacuation warning to village - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxPSUNJWWdZUW9teWxlNDE2eWVZWTFmd0JQdmwwYUNvSEpES1BhMjBJNF9LczlwUTZkaTZjMm5MNFhEUFN1RnpZclZHamljVnlGcW5GdkFMclYyUjQ4dEpHRWwtNjJLdjNoNWx5YlU3Q1FIUmhoV1hxMktXNnZXanZLLW9YS1JjRGp6ZkNMbTNGOVlETVRSUGREMnZ5dDVhUjYyWlB1RzBwenhtUDg3dDdIYVpoTXBlN2dFWTkyVnJn?oc=5",
      "datetime": 1785957421,
      "headlineKo": "이스라엘군, 마을에 대피 경고 후 레바논 남부 공습 - 로이터 통신"
    },
    {
      "headline": "Alphabet slumps on more AI brain drain. We're not too worried",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/05/alphabet-is-slumping-on-the-departure-of-another-ai-exec.html",
      "datetime": 1785957079,
      "headlineKo": "더 많은 AI 두뇌 유출로 인해 알파벳이 급락합니다. 우리는 별로 걱정하지 않아요"
    },
    {
      "headline": "Mideast deal hopes lift Dow, S&P to records; SpaceX, AMD drag Nasdaq - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMivwFBVV95cUxPdklHVUNCN0JQTDlLR0piZnVyYXRkNkU1akFlU3dWWFRoQTUyVUFxTXVtbnU2V3pTY2QwZ3pXRUw3eTFZeG1IbDAzM0Q5eEJPd0VSRldTckFHb1dBYXUtQ2tocm44b2p1SE5EbGhCNUJyMG9SX0RhZTlRZjFFbURfWmhPbnN2YmNSTlF3NFFZbG5yNmFzWTNiZFBOTlFfOWp1cmZIMkxicE50d2tJWkVXOVZQRmFxc21qN01jaDR6RQ?oc=5",
      "datetime": 1785956469,
      "headlineKo": "중동 거래는 Dow, S&P를 기록으로 끌어올리기를 희망합니다. SpaceX, AMD, Nasdaq 끌기 - Reuters"
    },
    {
      "headline": "Phillips 66 beats quarterly estimates as Iran war boosts US refining margins - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxPdFdjb1Q5RzUtcnRaUmV5U2FuN0dBcUZwT3RMa2pqVVVocG8zZmRPV2E1NjhlRTR6TXBsN1NHQ21EUTJvQ0JvV2NtbXhWbHVjMUN3NHFvTzlVR0IxUmxHaTFUbEpNX0xJSFFncjE4UllwaTJ2bm9UVTdHd00xOVBuTmZJVXRCekZPclluTDhFQUF2S3MwcG5rR3VrOE5TdFBHd3piYTRjTW9yVldvZGFVV3lfa1pLNlIzTXloYQ?oc=5",
      "datetime": 1785955127,
      "headlineKo": "필립스 66, 이란 전쟁으로 미국 정제 마진 증가로 분기별 추정치 상회 - Reuters"
    },
    {
      "headline": "Gulf oil exports steady in July, still 40% below pre-war mark - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxOU1c5cDdsaENzVWRTM3JoaUFicGFuczBDdm5GY2tkLWJhN0pSVk81MTlYMm1CQlNmQ1c5ZHZJUUFnLUhFd29CZmRjaEhkR0k3aEZRQW1JR3BKbVZiLVQ5UFJrSFZCTEFIMHpSakZ3TW5IZDctci1sT1piR2VzcGhNU21fN3FDd3ZLaEJ3dFBXdjY2Wjd4aEtwblhlTHJETENxWG5lRDNlWEpCM2ZS?oc=5",
      "datetime": 1785954322,
      "headlineKo": "걸프만 석유 수출은 7월에도 꾸준했으며 여전히 전쟁 전 수준보다 40% 낮습니다."
    },
    {
      "headline": "Flutter shares plummet on earnings miss and another key leadership change",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/05/flutter-earnings-ceo-leadership-change-stock.html",
      "datetime": 1785954031,
      "headlineKo": "Flutter 주가는 수익 손실 및 또 다른 주요 리더십 변경으로 급락했습니다."
    },
    {
      "headline": "Stocks mixed with Nasdaq down; gold prices jump - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMigwFBVV95cUxPSjNOaFJhdXRJblJMNldJM09LeFJDOXNqY2Y0R3dhcGt3S1ZyNm1peFdvVlBfN2RrNmtCYVhQa3pzenI5VlBld2c2Y0JPLTAzNWRhTWxUYWxjNEpvWGxIYlR3M2NLdGg5RnpRSmtYVVVwamJfYTZ5S1JaQ3J5QjFEQ3B0WQ?oc=5",
      "datetime": 1785951241,
      "headlineKo": "나스닥과 혼재된 주식; 금값 급등 - 로이터"
    },
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
      "datetime": 1785947360,
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
    }
  ],
  "_fetched_at": 1785960001.8150184,
  "_updated_label": "2026-08-06 05:00"
};
