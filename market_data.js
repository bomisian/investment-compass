// 자동 생성 파일 - buy_signal_telegram.py 실행 시마다 갱신됨. 직접 수정하지 마세요.
// 시장 환경 지표(야후) + 시장 헤드라인(Finnhub). 이 파일이 없어도 대시보드는 정상 동작함.
const MARKET_DATA = {
  "indicators": {
    "vix": {
      "current": 15.25,
      "prevClose": 15.4399995803833,
      "changeAbs": -0.18999958038330078,
      "changePct": -1.2305672639052234,
      "pctRank": 24.025457438345267,
      "min5y": 11.859999656677246,
      "max5y": 52.33000183105469,
      "high1y": 31.049999237060547,
      "drawdown1y": -50.88566707016868,
      "ma20": 15.730999994277955,
      "ma60": 16.230999930699667,
      "chg1m": -0.7600002288818359,
      "chg3m": -2.030000686645508,
      "chg1mPct": -4.747034466063313,
      "chg3mPct": -11.747688692016963,
      "lastDate": "2026-09-18",
      "bars": 1257,
      "symbol": "^VIX",
      "label": "VIX (공포지수)",
      "unit": "",
      "digits": 2
    },
    "us10y": {
      "current": 4.998000144958496,
      "prevClose": 4.947000026702881,
      "changeAbs": 0.051000118255615234,
      "changePct": 1.030930219937885,
      "pctRank": 99.8406374501992,
      "min5y": 1.309000015258789,
      "max5y": 5.00600004196167,
      "high1y": 5.00600004196167,
      "drawdown1y": -0.15980617131674535,
      "ma20": 4.825149965286255,
      "ma60": 4.67556664943695,
      "chg1m": 0.3450002670288086,
      "chg3m": 0.5469999313354492,
      "chg1mPct": 7.414577177730627,
      "chg3mPct": 12.289371042069655,
      "lastDate": "2026-09-18",
      "bars": 1255,
      "symbol": "^TNX",
      "label": "미국 10년물 금리",
      "unit": "%",
      "digits": 2
    },
    "us3m": {
      "current": 3.9749999046325684,
      "prevClose": 3.9649999141693115,
      "changeAbs": 0.009999990463256836,
      "changePct": 0.252206574520239,
      "pctRank": 43.10756972111554,
      "min5y": 0.019999999552965164,
      "max5y": 5.3480000495910645,
      "high1y": 3.9749999046325684,
      "drawdown1y": 0.0,
      "ma20": 3.806600022315979,
      "ma60": 3.7435333410898846,
      "chg1m": 0.27499985694885254,
      "chg3m": 0.3169999122619629,
      "chg1mPct": 7.43242847039985,
      "chg3mPct": 8.665935290407909,
      "lastDate": "2026-09-18",
      "bars": 1255,
      "symbol": "^IRX",
      "label": "미국 3개월 금리",
      "unit": "%",
      "digits": 2
    },
    "oil": {
      "current": 97.87000274658203,
      "prevClose": 101.91000366210938,
      "changeAbs": -4.040000915527344,
      "changePct": -3.9642829657059813,
      "pctRank": 90.29435163086714,
      "min5y": 55.27000045776367,
      "max5y": 123.69999694824219,
      "high1y": 112.94999694824219,
      "drawdown1y": -13.351035510492625,
      "ma20": 92.72000160217286,
      "ma60": 83.68000055948893,
      "chg1m": 12.040000915527344,
      "chg3m": 21.270004272460938,
      "chg1mPct": 14.027729999617774,
      "chg3mPct": 27.76763015164667,
      "lastDate": "2026-09-18",
      "bars": 1257,
      "symbol": "CL=F",
      "label": "WTI 유가",
      "unit": "$",
      "digits": 1
    },
    "dollar": {
      "current": 100.48500061035156,
      "prevClose": 100.22000122070312,
      "changeAbs": 0.2649993896484375,
      "changePct": 0.2644176675520682,
      "pctRank": 38.106603023070804,
      "min5y": 93.0999984741211,
      "max5y": 114.11000061035156,
      "high1y": 101.61000061035156,
      "drawdown1y": -1.107174484049156,
      "ma20": 99.3757495880127,
      "ma60": 100.15191688537598,
      "chg1m": 1.654998779296875,
      "chg3m": -0.36499786376953125,
      "chg1mPct": 1.674591468819376,
      "chg3mPct": -0.3619215362340264,
      "lastDate": "2026-09-18",
      "bars": 1257,
      "symbol": "DX-Y.NYB",
      "label": "달러지수(DXY)",
      "unit": "",
      "digits": 1
    },
    "gold": {
      "current": 4392.10009765625,
      "prevClose": 4399.7001953125,
      "changeAbs": -7.60009765625,
      "changePct": -0.17274126233299364,
      "pctRank": 89.26868044515103,
      "min5y": 1630.9000244140625,
      "max5y": 5318.39990234375,
      "high1y": 5318.39990234375,
      "drawdown1y": -17.41688894585177,
      "ma20": 4490.449975585938,
      "ma60": 4286.7866617838545,
      "chg1m": -153.19970703125,
      "chg3m": 146.2001953125,
      "chg1mPct": -3.3705082967961193,
      "chg3mPct": 3.443326472011199,
      "lastDate": "2026-09-18",
      "bars": 1258,
      "symbol": "GC=F",
      "label": "금",
      "unit": "$",
      "digits": 0
    },
    "us30y": {
      "current": 5.327000141143799,
      "prevClose": 5.296000003814697,
      "changeAbs": 0.031000137329101562,
      "changePct": 0.5853500246747022,
      "pctRank": 99.5219123505976,
      "min5y": 1.6779999732971191,
      "max5y": 5.363999843597412,
      "high1y": 5.363999843597412,
      "drawdown1y": -0.6897782164885236,
      "ma20": 5.2733499765396115,
      "ma60": 5.173116668065389,
      "chg1m": 0.13300037384033203,
      "chg3m": 0.42600011825561523,
      "chg1mPct": 2.56065421253149,
      "chg3mPct": 8.692106024610284,
      "lastDate": "2026-09-18",
      "bars": 1255,
      "symbol": "^TYX",
      "label": "미국 30년물 금리",
      "unit": "%",
      "digits": 2
    },
    "dow": {
      "current": 51568.3515625,
      "prevClose": 51778.0390625,
      "changeAbs": -209.6875,
      "changePct": -0.40497381476129557,
      "pctRank": 94.90039840637449,
      "min5y": 28725.509765625,
      "max5y": 54349.12109375,
      "high1y": 54349.12109375,
      "drawdown1y": -5.116494021040907,
      "ma20": 52805.3341796875,
      "ma60": 52804.7810546875,
      "chg1m": -1894.69921875,
      "chg3m": 3.65234375,
      "chg1mPct": -3.543941453139986,
      "chg3mPct": 0.007083031231319452,
      "lastDate": "2026-09-18",
      "bars": 1255,
      "symbol": "^DJI",
      "label": "다우존스 지수",
      "unit": "",
      "digits": 0
    }
  },
  "yieldSpread": 1.0230002403259277,
  "sector": {
    "groups": {
      "빅테크·SW": {
        "ret1m": 5.8326088444782265,
        "ret3m": 13.884902941414001,
        "ret6m": 18.546872192220377,
        "ret1y": 3.325058041960949,
        "winRate": 60.8,
        "count": 9
      },
      "반도체": {
        "ret1m": 1.9948206267611068,
        "ret3m": -18.92810717468748,
        "ret6m": 71.32706116582763,
        "ret1y": 199.4933810515,
        "winRate": 71.5,
        "count": 16
      },
      "AI 네트워킹·광통신": {
        "ret1m": 8.683716335141533,
        "ret3m": 2.017513646996316,
        "ret6m": 30.357333454381475,
        "ret1y": 215.1085049440905,
        "winRate": null,
        "count": 3
      },
      "AI 전력·인프라": {
        "ret1m": -2.4697152946295375,
        "ret3m": -13.789251866326858,
        "ret6m": 7.109885698512364,
        "ret1y": 46.33673959530147,
        "winRate": null,
        "count": 12
      }
    },
    "pair": [
      "빅테크·SW",
      "반도체",
      "AI 네트워킹·광통신",
      "AI 전력·인프라"
    ],
    "corr60": 0.04118750770482327,
    "corrPctRank": 0.0,
    "corrMin5y": 0.04118750770482327,
    "corrMedian5y": 0.7046101936389526,
    "corrMax5y": 0.9306761077384692
  },
  "news": [
    {
      "headline": "Putin targets Nestle's Russian business as Kremlin tightens grip on Western assets",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/09/18/nestle-russia-assets-putin-ukraine-war.html",
      "datetime": 1789730925,
      "headlineKo": "크렘린이 서방 자산에 대한 통제를 강화함에 따라 푸틴은 네슬레의 러시아 사업을 표적으로 삼았습니다."
    },
    {
      "headline": "Parents are interfering with teens’ first jobs. Here’s why employers say it can backfire",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/09/18/parents-more-involved-in-kids-work-lives.html",
      "datetime": 1789725601,
      "headlineKo": "부모는 십대의 첫 직장을 방해하고 있습니다. 고용주가 역효과를 낳을 수 있다고 말하는 이유는 다음과 같습니다."
    },
    {
      "headline": "Jet financiers fret as Iran war pumps up fuel and borrowing costs - reuters.com",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxNdjdxellSQnUza3c3bW9obVhsNHRrOGdzOXZDNDE1S3BOdkpDa1F0bXNVSjhtejlCeE9reHRlck9HSDkzaWltX18waDJocjdURFBOV1ZQZlZaNEJQQnRzNVZMQ1Vjd2gyUEZkUkhfVFp4YkVkTTdXM0Z3QmZnbDYtLWlsRldiZkZnQkU2Mm5ob2luem5OSkh4cGFXdVNUdktvQzRJRmFCV19fMkgzcTBnYQ?oc=5",
      "datetime": 1789723223,
      "headlineKo": "이란 전쟁으로 인해 연료비와 차입 비용이 증가함에 따라 제트 금융가들은 초조해함 - reuters.com"
    },
    {
      "headline": "As Iran war grinds on, Trump to face skeptical world leaders at UN - reuters.com",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxORFROaUxKT0xTODBaOWZaNkx1anVfanoxaFVwYm5QQnlNY1QwZXEyaEY3QnR6QmNDMHlJX3gwWU5WRWN6VmdjdkxLSmEyX3dZeW9pVmJ2d3lEeVlPWVFQeDNwa2V5bnE0b3h0OGRIWmdMTUw4aDQ5UUZHX192bmcwNTNUeEJIU2YySU8yM3FxX3lCTFlJX1Y3bHRrd3g4MS1nNk5LNkJEZmlWREk?oc=5",
      "datetime": 1789707780,
      "headlineKo": "이란 전쟁이 격화되면서 트럼프는 유엔에서 회의적인 세계 지도자들을 만날 예정 - reuters.com"
    },
    {
      "headline": "China's August refined fuel exports exceed pre-Iran war levels, jet fuel exports hit record high - reuters.com",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiygFBVV95cUxPQnFaY2NnUy01cTdSa0g0N05CaHpYcGF3QjBfSGpLMlhRWllYQWVmT0EtOE81bUVBbVBEMlNBODFDdHdHd3o2SHpFdFhWUWlQRXdEbDgyTFY4TlZjT3hvRi1mMFo4TWZrZTg3UWhiRTNMTTd1QXNReEdsYnlFNlNLYnZqVGgyN3NBTlNzN2pBSWdQQjI1VkdRWlBfVjlBN1RiMzRwN0dKREVnSnUwLWc1NW9rQ2NKWDJxNUxmNzFaeEs2VWc1R3JpN1FB?oc=5",
      "datetime": 1789704840,
      "headlineKo": "중국의 8월 정제 연료 수출은 이란 전쟁 이전 수준을 넘어섰고, 제트 연료 수출은 사상 최고치를 기록했습니다. - reuters.com"
    },
    {
      "headline": "Hormuz traffic below 10-day average, LNG vessels reappear outside strait - reuters.com",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxNNUxiUzdsYTJRdFoyOG1oY0FHU0daRGxzTzhwQVhiYXg1ZUpEVDM4Rk1td01IZEV2Z0VDVVlTY0hHTElnTnZ1cnNuMWxDWUZCWjNhYmpZVkN1bFAyZ1RtT0xQVko0OExlUm9wc3lFNjZNNnU1eE1DcjlmTkZQY2ZuWkFvUGEwTnNZOVhqdmh1dlRsZk1nd3I3emo1dnRybG51Z09xMTR4a3lPak9WbDFsd25qTVEtSFVVTmpKZkZ0OUlFYXpT?oc=5",
      "datetime": 1789702020,
      "headlineKo": "호르무즈 교통량 10일 평균 이하, LNG 선박 해협 밖에 다시 등장 - reuters.com"
    },
    {
      "headline": "South Korea's Lee says will not deploy military to get involved in Middle East conflict - reuters.com",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMi0AFBVV95cUxNcHVWWW80X2pnalBXQzRpRlpIQnNiNGt0V1o3Q01OME0tSjg2X0ltaENaUjBXZ2NUWVFnLVRQUTNvRzBHdUh3am9SNExYc3RuQmtxdjkyeGNnMzRvOGdFeUxyTG83bUlEU2NJQ3FCb3ZhR1hjRFEzal84X0pDUW9KWUMtVElRYmI1VWljLTN3ZnNJNkNMLVVyR25DUWI0SmMwQkpqQzRGRUlnMFlSS0RObkRTaTBCRzVwZDN0QjJLUlNDTU96ZDhPb2RSWWtXNEcz?oc=5",
      "datetime": 1789698360,
      "headlineKo": "한국의 이은 중동 분쟁에 개입하기 위해 군대를 배치하지 않을 것이라고 말했습니다 - reuters.com"
    },
    {
      "headline": "Oil prices set for weekly fall on easing fears over Saudi supply disruption - reuters.com",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMipAFBVV95cUxQeDVrUGNRTzdTOG1wQ1ljY2w0Y002MjMxSVNvM2RrLTBhM3B1dEJVS1B6bnJWTjhydS1BUHpfTVFtbHh2QkdMdFU1ZVo3MDJtQ01kbldpa0lfWFM0QXFWbmVsN1RqcjcxMHczN3JGSHItelVZMzQtYklTN1kwVlJxLU5RVzAwc3BEQV9iVFI1N0xhRXluaGZxN0NrWkxFMDk5Q0pYZw?oc=5",
      "datetime": 1789693260,
      "headlineKo": "사우디 공급 차질 우려 완화로 유가 주간 하락세 - reuters.com"
    },
    {
      "headline": "Explainer: How Yemen's Houthis went from a small mountain militia to a big regional threat - reuters.com",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxNcGthY0luQlRSdV83a2g1VktUVlRKMVJCeXVjME5lNEU3MUNocU55OUhIQXhoRThxT0ZiVlUyMkM1ZENVVlowLWNaX0p5bFpjVnpfMDhPTl9EYU01MV94Y19fOE91Ym9oQS1XdENUbGotVjVRcjNsZzFGbnJDQi13Z0tSSEhMYlBiZ2pSallYMkRBb2F0Q24xT0ZpcnRUdzR0OEJLTUo4NEZtazJidEl5N3ItbkhFZmdpWVM5Mw?oc=5",
      "datetime": 1789687407,
      "headlineKo": "설명: 예멘의 후티 반군이 소규모 산악 민병대에서 대규모 지역 위협으로 변한 과정 - reuters.com"
    },
    {
      "headline": "Jim Cramer says history offers a playbook for navigating a Fed rate-hiking cycle",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/09/17/jim-cramer-fed-rate-hike-investing.html",
      "datetime": 1789685908,
      "headlineKo": "짐 크레이머(Jim Cramer)는 역사가 연준의 금리 인상 주기를 탐색하기 위한 플레이북을 제공한다고 말했습니다."
    },
    {
      "headline": "China's Djibouti base upgrades should boost its monitoring reach, report says - reuters.com",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxNUW1WdlNaai13LUY1bEpxN3dqSTJLcVB5dUdmX000eUVMZVB1UHZkUXhVQWNZVURtVUVibUllb18wNEY5NGVyS2JRSVdKQng1M0lNWUR0LVJUdHRMbEl0SnFMVVBGcFIwR0hVYWpZdHdndFhTZWNIQkt0RGxuOThPY3RycHV2MDBjM1VkMXptSThmRjZhU1lXYzR1NDZSdlZsMjF6NmRQMzlHWEtGVTRIczBZLXNIOWNzM1NEQXBOeDM?oc=5",
      "datetime": 1789681020,
      "headlineKo": "중국의 지부티 기지 업그레이드로 모니터링 범위가 확대될 것이라고 보고서에서 밝혔습니다. - reuters.com"
    },
    {
      "headline": "US to allow Iranian leaders to attend UN General Assembly - reuters.com",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxQMlRxdXlUU25MV1Q5ZThqV29lYjBpb1Y0V2MwV3RqZFNoR25hS2ZUX0VpR0hENmZIMlRPWWxGS1p1WUJmNktPZ0ZMWE8xSGRQYmFOUHkwamNjVTFhZFdpSkUxUEhROGl4Y0Y4X05kcTM5QmxqRXVnRm9hSzNCWGZza2RNX1JqYmJiLUJ3UUFFeHFlZVNQQ2QxbzEtbkF5MzlKSktFV3ZUaEdMdTdOdy1rMU9CYWxlRG81SlM0Zg?oc=5",
      "datetime": 1789679292,
      "headlineKo": "미국, 이란 지도자들의 유엔 총회 참석 허용 - reuters.com"
    }
  ],
  "fgi": {
    "score": 29.4857142857143,
    "rating": "fear"
  },
  "_fetched_at": 1789740007.354934,
  "_updated_label": "2026-09-18 23:00",
  "_last_attempt_at": 1789740007.354934,
  "_last_success_at": 1789736405.8918016,
  "_collection_status": "partial",
  "_collection_errors": [
    "시장 헤드라인"
  ]
};
