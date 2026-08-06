// 자동 생성 파일 - buy_signal_telegram.py 실행 시마다 갱신됨. 직접 수정하지 마세요.
// 시장 환경 지표(야후) + 시장 헤드라인(Finnhub). 이 파일이 없어도 대시보드는 정상 동작함.
const MARKET_DATA = {
  "indicators": {
    "vix": {
      "current": 15.329999923706055,
      "prevClose": 15.8100004196167,
      "changeAbs": -0.48000049591064453,
      "changePct": -3.0360561870388727,
      "pctRank": 23.248407643312103,
      "min5y": 11.859999656677246,
      "max5y": 52.33000183105469,
      "ma20": 17.17999987602234,
      "ma60": 17.3206666469574,
      "chg1m": -1.5699996948242188,
      "chg3m": -1.75,
      "chg1mPct": -9.28993923232263,
      "chg3mPct": -10.245901685111257,
      "lastDate": "2026-08-06",
      "bars": 1256,
      "symbol": "^VIX",
      "label": "VIX (공포지수)",
      "unit": "",
      "digits": 2
    },
    "us10y": {
      "current": 4.671999931335449,
      "prevClose": 4.617000102996826,
      "changeAbs": 0.05499982833862305,
      "changePct": 1.1912459846583818,
      "pctRank": 97.45019920318725,
      "min5y": 1.2419999837875366,
      "max5y": 4.98799991607666,
      "ma20": 4.627999973297119,
      "ma60": 4.538349978129069,
      "chg1m": 0.10300016403198242,
      "chg3m": 0.31599998474121094,
      "chg1mPct": 2.2543263138043685,
      "chg3mPct": 7.254361538463222,
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
      "current": 77.30999755859375,
      "prevClose": 75.22000122070312,
      "changeAbs": 2.089996337890625,
      "changePct": 2.778511438411658,
      "pctRank": 52.66507557677009,
      "min5y": 55.27000045776367,
      "max5y": 123.69999694824219,
      "ma20": 81.48149948120117,
      "ma60": 84.08916651407877,
      "chg1m": 3.7900009155273438,
      "chg3m": -17.770004272460938,
      "chg1mPct": 5.155061328317913,
      "chg3mPct": -18.689528744473545,
      "lastDate": "2026-08-06",
      "bars": 1257,
      "symbol": "CL=F",
      "label": "WTI 유가",
      "unit": "$",
      "digits": 1
    },
    "dollar": {
      "current": 99.93499755859375,
      "prevClose": 99.69000244140625,
      "changeAbs": 0.2449951171875,
      "changePct": 0.24575695775661982,
      "pctRank": 35.40175019888624,
      "min5y": 92.04000091552734,
      "max5y": 114.11000061035156,
      "ma20": 100.7177505493164,
      "ma60": 100.23158365885416,
      "chg1m": -1.1150054931640625,
      "chg3m": 1.9150009155273438,
      "chg1mPct": -1.1034195541715686,
      "chg3mPct": 1.9536839227823053,
      "lastDate": "2026-08-06",
      "bars": 1257,
      "symbol": "DX-Y.NYB",
      "label": "달러지수(DXY)",
      "unit": "",
      "digits": 1
    },
    "gold": {
      "current": 4304.10009765625,
      "prevClose": 4245.7998046875,
      "changeAbs": 58.30029296875,
      "changePct": 1.3731286365500464,
      "pctRank": 90.05568814638028,
      "min5y": 1623.300048828125,
      "max5y": 5318.39990234375,
      "ma20": 4076.035021972656,
      "ma60": 4239.885001627604,
      "chg1m": 233.2001953125,
      "chg3m": -377.7998046875,
      "chg1mPct": 5.72846792863266,
      "chg3mPct": -8.069369541590886,
      "lastDate": "2026-08-06",
      "bars": 1257,
      "symbol": "GC=F",
      "label": "금",
      "unit": "$",
      "digits": 0
    },
    "us30y": {
      "current": 5.2139997482299805,
      "prevClose": 5.173999786376953,
      "changeAbs": 0.039999961853027344,
      "changePct": 0.7730955451205567,
      "pctRank": 99.76095617529882,
      "min5y": 1.6779999732971191,
      "max5y": 5.275000095367432,
      "ma20": 5.144600033760071,
      "ma60": 5.045233376820883,
      "chg1m": 0.14899969100952148,
      "chg3m": 0.2709999084472656,
      "chg1mPct": 2.9417510232228636,
      "chg3mPct": 5.482498831300353,
      "lastDate": "2026-08-06",
      "bars": 1255,
      "symbol": "^TYX",
      "label": "미국 30년물 금리",
      "unit": "%",
      "digits": 2
    }
  },
  "yieldSpread": 0.940000057220459,
  "sector": {
    "groups": {
      "빅테크·SW": {
        "ret1m": 5.889902363544697,
        "ret3m": -0.40628810664267156,
        "ret6m": 5.643947044044095,
        "ret1y": 6.797656451573131,
        "winRate": 60.8,
        "count": 9
      },
      "반도체": {
        "ret1m": -6.44134955359349,
        "ret3m": 9.978782781883488,
        "ret6m": 85.45573366609705,
        "ret1y": 244.87729964389172,
        "winRate": 71.5,
        "count": 15
      }
    },
    "pair": [
      "빅테크·SW",
      "반도체"
    ],
    "corr60": 0.2081944823937678,
    "corrPctRank": 2.092050209205021,
    "corrMin5y": 0.11496792019743002,
    "corrMedian5y": 0.7115782038222396,
    "corrMax5y": 0.9346528705205663
  },
  "news": [
    {
      "headline": "Genius Sports' media surge shows shift beyond sportsbook data",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/06/genius-sports-media-surge-shows-shift-beyond-sportsbook-data.html",
      "datetime": 1786040239,
      "headlineKo": "Genius Sports의 미디어 급증은 스포츠북 데이터 이상의 변화를 보여줍니다."
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
      "headline": "Proposed Hormuz passage deal not feasible for shipping industry, sources say - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxQajNmWTdWUHQ1RkRPd0FjWUUzSkd5cTNhN1NxREdIUUxGZklfbGEycml6emw1VThlRXk3YU5aakNULU5DanUwclZDWEpLUTg0c0xjRElxaTlKU2NiRHJzT1JiVmltOTVlQ1hNcGkxaTNjYndSX29leFl6S1l0OGxJd0hfSGZKOEwzZ3JVOURWVGgtY2JWUDZ2aXFoTWNDZV83eXllTko1WjVCSmpCb2IwM0ZNTTRTdDdxaXJGOHhZS2laUTg?oc=5",
      "datetime": 1786027840,
      "headlineKo": "소식통에 따르면 호르무즈 통과 거래는 해운업계에 타당하지 않다고 한다 - 로이터 통신"
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
    },
    {
      "headline": "Honeywell Aerospace shares tank as forecast cut leaves it 'starting behind the curve' - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMi0gFBVV95cUxNblJpM0pYY0NrYnduWUNBY0xfNDBSSFhSY2tzX3c1WFBzM29KN0FxTzVycS13WWdyUUFXUHBnY0EtTEp3TVRfY0MwVGgtYmZMcXpZX2c1RUhoanc1UUxkUHJQVXA5alpibTRBcTFuRjdFd1NIbHBmS1RfbFRMZnhwdVJINUpEZk41LXkyeDFhY3ZzOTNtem0xRmRIWDBkS1RXU2NaV1FRRUdMZEVHM1lmZXlGYUJ5QllWUjZZRE8ydVpfUTZ0Y2lmSVFkU1hVTnlBY2c?oc=5",
      "datetime": 1786025301,
      "headlineKo": "Honeywell Aerospace는 예측 감소로 탱크를 공유하여 '곡선 뒤에서 시작' - Reuters"
    },
    {
      "headline": "NASA engineer spent $200 to start a side hustle from her closet—now it brings in over $32,000 a month",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/06/how-nasa-engineer-built-lucrative-voiceover-acting-side-hustle.html",
      "datetime": 1786025286,
      "headlineKo": "NASA 엔지니어는 옷장에서 부업을 시작하기 위해 200달러를 썼습니다. 이제 한 달에 32,000달러 이상을 벌어들입니다."
    }
  ],
  "_fetched_at": 1786042826.227026,
  "_updated_label": "2026-08-07 04:00"
};
