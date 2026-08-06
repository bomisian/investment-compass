// 자동 생성 파일 - buy_signal_telegram.py 실행 시마다 갱신됨. 직접 수정하지 마세요.
// 시장 환경 지표(야후) + 시장 헤드라인(Finnhub). 이 파일이 없어도 대시보드는 정상 동작함.
const MARKET_DATA = {
  "indicators": {
    "vix": {
      "current": 15.3100004196167,
      "prevClose": 15.8100004196167,
      "changeAbs": -0.5,
      "changePct": -3.1625552607804552,
      "pctRank": 23.168789808917197,
      "min5y": 11.859999656677246,
      "max5y": 52.33000183105469,
      "ma20": 17.17899990081787,
      "ma60": 17.32033332188924,
      "chg1m": -1.5899991989135742,
      "chg3m": -1.7699995040893555,
      "chg1mPct": -9.408279495877588,
      "chg3mPct": -10.362994800911551,
      "lastDate": "2026-08-06",
      "bars": 1256,
      "symbol": "^VIX",
      "label": "VIX (공포지수)",
      "unit": "",
      "digits": 2
    },
    "us10y": {
      "current": 4.670000076293945,
      "prevClose": 4.617000102996826,
      "changeAbs": 0.05299997329711914,
      "changePct": 1.1479309533200497,
      "pctRank": 97.45019920318725,
      "min5y": 1.2419999837875366,
      "max5y": 4.98799991607666,
      "ma20": 4.627899980545044,
      "ma60": 4.538316647211711,
      "chg1m": 0.10100030899047852,
      "chg3m": 0.31400012969970703,
      "chg1mPct": 2.210556229686282,
      "chg3mPct": 7.208451183412197,
      "lastDate": "2026-08-06",
      "bars": 1255,
      "symbol": "^TNX",
      "label": "미국 10년물 금리",
      "unit": "%",
      "digits": 2
    },
    "us3m": {
      "current": 3.7319998741149902,
      "prevClose": 3.7249999046325684,
      "changeAbs": 0.006999969482421875,
      "changePct": 0.18791864863449836,
      "pctRank": 37.60956175298805,
      "min5y": 0.019999999552965164,
      "max5y": 5.3480000495910645,
      "ma20": 3.722949969768524,
      "ma60": 3.664183330535889,
      "chg1m": 0.008999824523925781,
      "chg3m": 0.13199996948242188,
      "chg1mPct": 0.24173581531148045,
      "chg3mPct": 3.6666659160896384,
      "lastDate": "2026-08-06",
      "bars": 1255,
      "symbol": "^IRX",
      "label": "미국 3개월 금리",
      "unit": "%",
      "digits": 2
    },
    "oil": {
      "current": 77.86000061035156,
      "prevClose": 75.22000122070312,
      "changeAbs": 2.6399993896484375,
      "changePct": 3.5097039973482733,
      "pctRank": 54.25616547334925,
      "min5y": 55.27000045776367,
      "max5y": 123.69999694824219,
      "ma20": 81.50899963378906,
      "ma60": 84.09833323160807,
      "chg1m": 4.340003967285156,
      "chg3m": -17.220001220703125,
      "chg1mPct": 5.903161269655006,
      "chg3mPct": -18.111065301934808,
      "lastDate": "2026-08-06",
      "bars": 1257,
      "symbol": "CL=F",
      "label": "WTI 유가",
      "unit": "$",
      "digits": 1
    },
    "dollar": {
      "current": 99.9749984741211,
      "prevClose": 99.69000244140625,
      "changeAbs": 0.28499603271484375,
      "changePct": 0.2858822607436015,
      "pctRank": 35.87907716785998,
      "min5y": 92.04000091552734,
      "max5y": 114.11000061035156,
      "ma20": 100.71975059509278,
      "ma60": 100.23225034077963,
      "chg1m": -1.0750045776367188,
      "chg3m": 1.9550018310546875,
      "chg1mPct": -1.0638342851767173,
      "chg3mPct": 1.9944928565685454,
      "lastDate": "2026-08-06",
      "bars": 1257,
      "symbol": "DX-Y.NYB",
      "label": "달러지수(DXY)",
      "unit": "",
      "digits": 1
    },
    "gold": {
      "current": 4297.60009765625,
      "prevClose": 4245.7998046875,
      "changeAbs": 51.80029296875,
      "changePct": 1.2200361616570052,
      "pctRank": 89.97613365155132,
      "min5y": 1623.300048828125,
      "max5y": 5318.39990234375,
      "ma20": 4075.7100219726562,
      "ma60": 4239.776668294271,
      "chg1m": 226.7001953125,
      "chg3m": -384.2998046875,
      "chg1mPct": 5.568798072926856,
      "chg3mPct": -8.20820206974353,
      "lastDate": "2026-08-06",
      "bars": 1257,
      "symbol": "GC=F",
      "label": "금",
      "unit": "$",
      "digits": 0
    },
    "us30y": {
      "current": 5.213000297546387,
      "prevClose": 5.173999786376953,
      "changeAbs": 0.039000511169433594,
      "changePct": 0.7537787549222794,
      "pctRank": 99.76095617529882,
      "min5y": 1.6779999732971191,
      "max5y": 5.275000095367432,
      "ma20": 5.144550061225891,
      "ma60": 5.045216719309489,
      "chg1m": 0.14800024032592773,
      "chg3m": 0.2700004577636719,
      "chg1mPct": 2.9220185321606182,
      "chg3mPct": 5.4622793144889235,
      "lastDate": "2026-08-06",
      "bars": 1255,
      "symbol": "^TYX",
      "label": "미국 30년물 금리",
      "unit": "%",
      "digits": 2
    }
  },
  "yieldSpread": 0.9380002021789551,
  "sector": {
    "groups": {
      "빅테크·SW": {
        "ret1m": 6.168493623133808,
        "ret3m": -0.14426182250967257,
        "ret6m": 5.9218912069721075,
        "ret1y": 7.078635968674374,
        "winRate": 60.8,
        "count": 9
      },
      "반도체": {
        "ret1m": -7.2317581665590325,
        "ret3m": 9.049652479773563,
        "ret6m": 83.88895380646775,
        "ret1y": 241.96368356719358,
        "winRate": 71.5,
        "count": 15
      }
    },
    "pair": [
      "빅테크·SW",
      "반도체"
    ],
    "corr60": 0.20891927759625878,
    "corrPctRank": 2.0938023450586267,
    "corrMin5y": 0.11496792019743002,
    "corrMedian5y": 0.7115784818334243,
    "corrMax5y": 0.9346528705205663
  },
  "news": [
    {
      "headline": "S&P 500 little changed as investors eye Mideast talks - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxOa2poa2tBUFVOZFo0R0Q4T2lKVF9aWk5CWGd1Y1A0aXlTOFE1c1JBNlF3bk9qLVlnSUFmMTZoT05MVExKZk9oQzVhUmg4SnBLZ29vLUFDMU1Qb1lOZmd5ZVZHRGVuaTJHWWJyUjFRV19pU3U4NmItdkd0d2JaNWVUSmJZcFBSVEtPVDQyd1RySlA0Q2VCT3RZSzlsSUFPY2FsLUtNMWlubFpQbkZiVmt6TjBZdmRZeXlPMFBZ?oc=5",
      "datetime": 1786042041,
      "headlineKo": "투자자들이 중동 협상에 주목하면서 S&P 500은 거의 변하지 않았습니다 - Reuters"
    },
    {
      "headline": "Genius Sports' media surge shows shift beyond sportsbook data",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/06/genius-sports-media-surge-shows-shift-beyond-sportsbook-data.html",
      "datetime": 1786040239,
      "headlineKo": "Genius Sports의 미디어 급증은 스포츠북 데이터 이상의 변화를 보여줍니다."
    },
    {
      "headline": "Proposed Hormuz passage deal not feasible for shipping industry, sources say - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxQajNmWTdWUHQ1RkRPd0FjWUUzSkd5cTNhN1NxREdIUUxGZklfbGEycml6emw1VThlRXk3YU5aakNULU5DanUwclZDWEpLUTg0c0xjRElxaTlKU2NiRHJzT1JiVmltOTVlQ1hNcGkxaTNjYndSX29leFl6S1l0OGxJd0hfSGZKOEwzZ3JVOURWVGgtY2JWUDZ2aXFoTWNDZV83eXllTko1WjVCSmpCb2IwM0ZNTTRTdDdxaXJGOHhZS2laUTg?oc=5",
      "datetime": 1786039017,
      "headlineKo": "소식통에 따르면 호르무즈 통과 거래는 해운업계에 타당하지 않다고 한다 - 로이터 통신"
    },
    {
      "headline": "US sanctions Cuban military officials, firms tied to weapons procurement - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMikAFBVV95cUxONUJlYkNHU01pX081SFpYMFJ0SFh1SjRUcTJYbXZXWVJzNVdvSG9wd2otSnVPNkNlVUMxTVc5MnhYdnBLTGxWU3FLMWxpN19TcllydUJ4QXFGQzZaTjYySWt2VXJKUTljZjFoSWcwc0Nfd2tPMXIwRmU2RVJZV0d5cE9MWnRVTGV2MUxzX3d3OU8?oc=5",
      "datetime": 1786037246,
      "headlineKo": "미국, 쿠바 군 관계자, 무기 조달 관련 기업 제재 - Reuters"
    },
    {
      "headline": "Trump's Iran dilemma: He's stuck in war with no exit in sight - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxOTElxYUFULUk1M0M2d29aa3BiZGJHZ3BPMEpDaG9vUlRkUDUzTU5MMUYtbTlDVkt6VGpMc2g0VnpsWmRpSWhZMmxjVVIzc2NGb3psRjdCUGNUYXdFRzdHd1N1Ni1oM3BySjNWTUZiQzVSVEJWTEticG9SQUF6OHIzN0NTeWtBUlpNS2FWVWo4OEppcmVxSzlvMXBkWmVKWllteFI2QmlKVUIxUQ?oc=5",
      "datetime": 1786035372,
      "headlineKo": "트럼프의 이란 딜레마: 그는 출구가 보이지 않는 전쟁에 갇혀 있다 - 로이터"
    },
    {
      "headline": "Iranian parliamentary committee reviews draft bill to bar US, Israeli ships from Hormuz, Fars says - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMizAFBVV95cUxNRFZOdUowaEpSY3VBZWRQSmRjOGZRXzUtM0xDV3BHOTJCYk9VUTdkc1dLUUU2c1hsOTY0c3R3c294bnVoYzJ4eWgxX0k4QVdpaVViSHRsdXBlTzFpZVpXZ20yNzV2cndvUk04N29XOUIxSUl0VlJWM3BDMVJIQWFwcDN0Wl9CRzdMZlM0SlBjYUNtTmtrSU9BQXBnXzh1bWI2OXBPUVlpcVYxclZ5S3pTdDU5VGNVNzRuU0RfeU1BU0lXNG9uZXRLUG14TEI?oc=5",
      "datetime": 1786035370,
      "headlineKo": "이란 의회 위원회, 호르무즈에서 미국과 이스라엘 선박의 출입을 금지하는 법안 초안 검토 중이라고 Fars가 밝혔습니다."
    },
    {
      "headline": "European shares extend run of record highs on earnings, US-Iran optimism - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxQakF6Y2hyYnJRN2R4aGtqMmpVMWVZVWI1cWR1bjNsaWNVMThaRDVwTU53VnZaUkZlWGpXd1RHZGNqR0pKNnBKTEtBMzRqc01tZ2YwbXdGWkt0d2tabko4ZnVaUHFKNFJnb1VIMjZ1Q0ZPby16YTdmQ2xfcUo5OFJqSWI4Q3JadUNIOFFVb1hUTERJZHY2T0JrTDdhUUswS1NEMXM1SHlWZUJrOVUxWVlR?oc=5",
      "datetime": 1786035074,
      "headlineKo": "유럽 ​​증시는 사상 최고치를 기록했고, 미국-이란 낙관론 - Reuters"
    },
    {
      "headline": "Jim Cramer says this is a 'good rule' to follow when stocks double",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/06/jim-cramer-says-this-is-a-good-rule-to-follow-when-stocks-double-.html",
      "datetime": 1786034193,
      "headlineKo": "Jim Cramer는 이것이 주식이 두 배로 늘어날 때 따라야 할 '좋은 규칙'이라고 말합니다."
    },
    {
      "headline": "Carney, pressed on Trump's 'nasty' Canada quip, says he is defending workers - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxQWG9iMXgwdzlpZkRTTENvVURWdnEtTW84NnRyWTZVTjR6bFZ5N2tiT1RjRXRacWZWbmJpbHNXSnVVQmp0TjRuaTdHRzFocnVCTTBfT0N0S0NaZmZDd2dfR19HVFJTNkNydjZBSFA2YmhaRlVVSUdGaUdSYUI4bjBZSkh4SHRmQUFMa2I5MUUyUVAwRUlERFMtRXlWa0plZElxa2tuaTVXUEFTcVh2UFNj?oc=5",
      "datetime": 1786033875,
      "headlineKo": "카니는 트럼프의 '불쾌한' 캐나다 농담에 압박을 받아 노동자들을 옹호하고 있다고 말했습니다 - 로이터 통신"
    },
    {
      "headline": "Houthi attacks kill at least 30 Yemeni government troops - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxOcmtNNXV0bmtoZ3g2MVQzTUktLUl0U2R2YlA3Qk83WFZmQXJMYjQ0LU1Za0dHQklueDZ6N2JwQzhvV0VpZTdNVkI0YjdlMWlfcmUwSVU2c3YtUDJCdk1pb3YwY1dFYXdMd3FuMUxMb2dnSEVUZHVtWktubVNjU2RSUnNaLS16Y0hsclh5Wk1Kb09oQzRvT3pSNWZqblZfN2NIQzBfYmw1RkxEbll1Mnc?oc=5",
      "datetime": 1786030900,
      "headlineKo": "후티 반군 공격으로 예멘 정부군 최소 30명 사망 - 로이터 통신"
    },
    {
      "headline": "Tata Sons faces continued listing uncertainty after RBI classification - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxQSmxEVDR3VVFSS21nNnB4OV8wNmVuUG5qT1dQUFZqcjU3ZFBJUkxWdktuNDc4MVRFaWdpV1FuR0J3QkduNUlmczZWcWo0dENOYkVCcFByM1IxTm5XVzZkSDd4V3p0NW9sSTFWdm5iNEhZb2RaX29scmxNTTlNSDRqdmJkbHNSUWZOcGNpc2FLMVZTMUpOZTJEdUpYVHUyX3Y1QWdNSnJYc1VrYjY1?oc=5",
      "datetime": 1786026408,
      "headlineKo": "Tata Sons는 타점 분류 이후 지속적인 상장 불확실성에 직면해 있습니다 - Reuters"
    },
    {
      "headline": "Afghan accused of killing Scottish woman in Athens to await trial in jail - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMivwFBVV95cUxNZ09uVzR4a2xEakJPX0lZZXkwZXZMdDRLX29ZdnlUOEVKcG1xYnZHTXZwTTd3RUJnVW1PdWdVRUdIQ3paeHBaa0k4SlM2OFpZOVQ0X25ULXFxSWFleVp6OWp6MUhHSmJMZU5qb3l3LWQzWVV0UnNrUHd5M2oxYlRSamJQZGRxT2tac2oyTG1OV3lCejNYemlLcWhVekhyd2VMZzR2Y3FkNUlWRjFsUHU2dXVfMGNJRmNPclQ5RkxFRQ?oc=5",
      "datetime": 1786025987,
      "headlineKo": "아프가니스탄은 감옥에서 재판을 기다리기 위해 아테네에서 스코틀랜드 여성을 살해한 혐의로 기소됐다 - 로이터"
    }
  ],
  "_fetched_at": 1786046402.20017,
  "_updated_label": "2026-08-07 05:00"
};
