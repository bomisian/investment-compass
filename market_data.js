// 자동 생성 파일 - buy_signal_telegram.py 실행 시마다 갱신됨. 직접 수정하지 마세요.
// 시장 환경 지표(야후) + 시장 헤드라인(Finnhub). 이 파일이 없어도 대시보드는 정상 동작함.
const MARKET_DATA = {
  "indicators": {
    "vix": {
      "current": 15.899999618530273,
      "prevClose": 14.890000343322754,
      "changeAbs": 1.0099992752075195,
      "changePct": 6.7830708658139285,
      "pctRank": 29.29936305732484,
      "min5y": 11.859999656677246,
      "max5y": 52.33000183105469,
      "high1y": 31.049999237060547,
      "drawdown1y": -48.792270501725454,
      "ma20": 16.170499897003175,
      "ma60": 16.933499924341838,
      "chg1m": -0.7399997711181641,
      "chg3m": -0.8600006103515625,
      "chg1mPct": -4.447114172242758,
      "chg3mPct": -5.131268488108717,
      "lastDate": "2026-08-20",
      "bars": 1256,
      "symbol": "^VIX",
      "label": "VIX (공포지수)",
      "unit": "",
      "digits": 2
    },
    "us10y": {
      "current": 4.708000183105469,
      "prevClose": 4.6529998779296875,
      "changeAbs": 0.05500030517578125,
      "changePct": 1.1820396866258498,
      "pctRank": 98.00796812749005,
      "min5y": 1.2549999952316284,
      "max5y": 4.98799991607666,
      "high1y": 4.744999885559082,
      "drawdown1y": -0.7797619250996868,
      "ma20": 4.670349979400635,
      "ma60": 4.560883315404256,
      "chg1m": 0.051000118255615234,
      "chg3m": 0.1360001564025879,
      "chg1mPct": 1.0951281414091956,
      "chg3mPct": 2.974631574984155,
      "lastDate": "2026-08-20",
      "bars": 1255,
      "symbol": "^TNX",
      "label": "미국 10년물 금리",
      "unit": "%",
      "digits": 2
    },
    "us3m": {
      "current": 3.7029998302459717,
      "prevClose": 3.700000047683716,
      "changeAbs": 0.0029997825622558594,
      "changePct": 0.08107520334043757,
      "pctRank": 35.93625498007968,
      "min5y": 0.019999999552965164,
      "max5y": 5.3480000495910645,
      "high1y": 4.127999782562256,
      "drawdown1y": -10.295542022836202,
      "ma20": 3.7170999884605407,
      "ma60": 3.685016663869222,
      "chg1m": -0.04200005531311035,
      "chg3m": 0.14599990844726562,
      "chg1mPct": -1.1214968383594561,
      "chg3mPct": 4.104580029718873,
      "lastDate": "2026-08-20",
      "bars": 1255,
      "symbol": "^IRX",
      "label": "미국 3개월 금리",
      "unit": "%",
      "digits": 2
    },
    "oil": {
      "current": 86.80000305175781,
      "prevClose": 85.83000183105469,
      "changeAbs": 0.970001220703125,
      "changePct": 1.1301423744723291,
      "pctRank": 78.59984089101034,
      "min5y": 55.27000045776367,
      "max5y": 123.69999694824219,
      "high1y": 112.94999694824219,
      "drawdown1y": -23.151832317859434,
      "ma20": 82.2509994506836,
      "ma60": 81.10850003560384,
      "chg1m": -0.029998779296875,
      "chg3m": -11.459999084472656,
      "chg1mPct": -0.03454886406111529,
      "chg3mPct": -11.662933884923172,
      "lastDate": "2026-08-20",
      "bars": 1257,
      "symbol": "CL=F",
      "label": "WTI 유가",
      "unit": "$",
      "digits": 1
    },
    "dollar": {
      "current": 98.88200378417969,
      "prevClose": 98.83000183105469,
      "changeAbs": 0.052001953125,
      "changePct": 0.052617577822061494,
      "pctRank": 25.218774860779636,
      "min5y": 92.04000091552734,
      "max5y": 114.11000061035156,
      "high1y": 101.61000061035156,
      "drawdown1y": -2.6847719808929527,
      "ma20": 100.01760063171386,
      "ma60": 100.33036702473959,
      "chg1m": -2.25799560546875,
      "chg3m": -0.227996826171875,
      "chg1mPct": -2.2325446105350215,
      "chg3mPct": -0.2300442183107623,
      "lastDate": "2026-08-20",
      "bars": 1257,
      "symbol": "DX-Y.NYB",
      "label": "달러지수(DXY)",
      "unit": "",
      "digits": 1
    },
    "gold": {
      "current": 4572.7001953125,
      "prevClose": 4489.39990234375,
      "changeAbs": 83.30029296875,
      "changePct": 1.855488367727321,
      "pctRank": 93.87430389817024,
      "min5y": 1623.300048828125,
      "max5y": 5318.39990234375,
      "high1y": 5318.39990234375,
      "drawdown1y": -14.021128924559246,
      "ma20": 4253.174987792969,
      "ma60": 4210.913338216146,
      "chg1m": 425.80029296875,
      "chg3m": 41.400390625,
      "chg1mPct": 10.26791827620666,
      "chg3mPct": 0.9136537507885151,
      "lastDate": "2026-08-20",
      "bars": 1257,
      "symbol": "GC=F",
      "label": "금",
      "unit": "$",
      "digits": 0
    },
    "us30y": {
      "current": 5.252999782562256,
      "prevClose": 5.193999767303467,
      "changeAbs": 0.05900001525878906,
      "changePct": 1.1359264132085185,
      "pctRank": 99.60159362549801,
      "min5y": 1.6779999732971191,
      "max5y": 5.309000015258789,
      "high1y": 5.309000015258789,
      "drawdown1y": -1.054816962433247,
      "ma20": 5.2136499881744385,
      "ma60": 5.071750028928121,
      "chg1m": 0.10599994659423828,
      "chg3m": 0.13699960708618164,
      "chg1mPct": 2.0594511360481214,
      "chg3mPct": 2.677865566598285,
      "lastDate": "2026-08-20",
      "bars": 1255,
      "symbol": "^TYX",
      "label": "미국 30년물 금리",
      "unit": "%",
      "digits": 2
    },
    "dow": {
      "current": 53029.87890625,
      "prevClose": 53463.05078125,
      "changeAbs": -433.171875,
      "changePct": -0.8102266306731556,
      "pctRank": 98.80478087649402,
      "min5y": 28725.509765625,
      "max5y": 54349.12109375,
      "high1y": 54349.12109375,
      "drawdown1y": -2.4273477858535397,
      "ma20": 53256.696484375,
      "ma60": 52264.7220703125,
      "chg1m": 811.30078125,
      "chg3m": 3020.52734375,
      "chg1mPct": 1.553663103020387,
      "chg3mPct": 6.039925032771214,
      "lastDate": "2026-08-20",
      "bars": 1255,
      "symbol": "^DJI",
      "label": "다우존스 지수",
      "unit": "",
      "digits": 0
    }
  },
  "yieldSpread": 1.005000352859497,
  "sector": {
    "groups": {
      "빅테크·SW": {
        "ret1m": 9.478083482897958,
        "ret3m": 0.5022525755899343,
        "ret6m": 11.570186342921819,
        "ret1y": 7.438034824309359,
        "winRate": 60.8,
        "count": 9
      },
      "반도체": {
        "ret1m": -5.012543344967934,
        "ret3m": 7.129114676245396,
        "ret6m": 73.32756572065122,
        "ret1y": 247.99651272368655,
        "winRate": 71.5,
        "count": 16
      }
    },
    "pair": [
      "빅테크·SW",
      "반도체"
    ],
    "corr60": 0.15234812194624162,
    "corrPctRank": 0.6694560669456067,
    "corrMin5y": 0.11322641817101682,
    "corrMedian5y": 0.7050009580856722,
    "corrMax5y": 0.9306761077384692
  },
  "news": [
    {
      "headline": "Harry and Meghan: Their life together in photos - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMijAFBVV95cUxNemU0alhTVF8wYVhBNFUzbWN6TFhEU21UdTA1MHpEYkxrOE5jQ3d6OUNySnpQMXdnanlXV2s4Y3NsVFlJU0d6QmhsS3Qtei1NMVcwUzRielE2cFIydnNVWkR3Y0U1aDdQNmhrZ3YzMDBYRFlMR0t5Y0pGZElFbUwwMElZbndyMVVNS19FdA?oc=5",
      "datetime": 1787232486,
      "headlineKo": "해리와 메건: 사진으로 보는 그들의 삶 - 로이터 통신"
    },
    {
      "headline": "China boosts imports of Russian crude, stymieing India's refiners - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxPZU9oV2RaZ2RZNW5hZlFqbXFNNmd5RnJkM21hWmo0WVhJX1paTlBWaE50SHhMazFzdHJuVVF2QlpzT1lRZG1VUEdERkdsSXcxTjFmQjd5RXlJeDM1eVR1NHZnd0xlRWJFXzlsbS0tdmpJMlVzeFNrLUk1R25abzR3cUxDYXRCUW1lekg0LU9lWmNzdWFyekI1SFJOdmxJSWVaRS0zT3Z5QzRVNkt3VndialQySlRtbTVKTTdJb3g1T0h2ZXFabXNLMQ?oc=5",
      "datetime": 1787232002,
      "headlineKo": "중국, 러시아산 원유 수입 늘려 인도 정유업체에 타격 - Reuters"
    },
    {
      "headline": "Jim Cramer's top 10 things to watch in the stock market Thursday",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/20/jim-cramers-top-10-things-to-watch-in-the-stock-market-thursday.html",
      "datetime": 1787231170,
      "headlineKo": "Jim Cramer가 목요일 주식 시장에서 주목해야 할 10가지 항목"
    },
    {
      "headline": "How wealthy families can prepare for aging parents and avoid a succession crisis",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/20/wealthy-families-aging-parents-succession.html",
      "datetime": 1787229001,
      "headlineKo": "부유한 가족이 노령 부모를 위해 준비하고 승계 위기를 피할 수 있는 방법"
    },
    {
      "headline": "ChatGPT for Teens makes vital safety strides, says expert. 'The real question is, does any of this work?'",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/20/chatgpt-for-teens-makes-safety-strides-but-do-they-work.html",
      "datetime": 1787224517,
      "headlineKo": "전문가는 청소년을 위한 ChatGPT가 중요한 안전 발전을 이룬다고 말합니다. '진짜 질문은 이것이 효과가 있는가 하는 것입니다.'"
    },
    {
      "headline": "Workers can't agree if junior employees should use AI at work: CNBC survey",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/20/workers-cant-agree-if-junior-employees-should-use-ai-at-work-cnbc-survey.html",
      "datetime": 1787223601,
      "headlineKo": "하급 직원이 직장에서 AI를 사용해야 하는지에 대해 근로자들은 동의할 수 없습니다: CNBC 조사"
    },
    {
      "headline": "Iran executes man over charges related to January protests, state media says - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxNbGdaUUMxaVVtb1Zjc0o0dkwwaFhibExzZjBQNEc0emRZYm5LRVpTNm80c3FjYVhhRktwOHFYMzVVNU9GUkRVU1RkQ0ozakdwdEp3dUd4TUZ2a1ZhVFI1Q05jdTY3YXZ0OHduTGJIQV9zT1pxRm1UblpuM2ZCR3RpUkxzNGNzVUhVYlAwSXY3ZzVkWWhMMWpQUlA5ellzOXZVTEdNVUVOM1JReU5ESWYwMWFDVWZFLWk1YktvTWRuUk0tWFBM?oc=5",
      "datetime": 1787208000,
      "headlineKo": "이란, 1월 시위 관련 혐의로 남성 처형했다고 국영 언론 보도 - 로이터"
    },
    {
      "headline": "The Iran war energy crisis is just getting started - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxOXzN3VmVtUVpMWHBXcnNDdUJXbkNFMFRxRjkxSzJjWEtZMWpnV2V1WWNfWFBNWlNENWhJVFBsUjhrcEtEa1ViaXhwcDRCR3BqeHFTX0JCektpb0dPYjIwTm55eXVGdm5yaDBQSUtjbWxEWllxUWJGVXBTVkVybi12U3pnT1hnQ0g0cW9UbE1jdjFGT3BUVWdKcHJNX1EzMHEybXNOcS1waEZyVk1qaVNFaFpyZHpjQQ?oc=5",
      "datetime": 1787205600,
      "headlineKo": "이란 전쟁 에너지 위기는 이제 막 시작되었습니다 - Reuters"
    },
    {
      "headline": "Israel and Turkey step up warnings over Syria after airbase bombing - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxQLTlfMHNQWDJxLTRQUnk3S3BmSThwcFNFWTY4dHhTaVZlaENYcFliSkRTVFMzRVliRkgweUxUVThXN0ZfU2Q0Rl9WVXBCZkxBQXZPcUlkeVNKa2kwcFQzM3FVakJMRlQ2N1FBZ3hVUGNXb25ySko1UFVEQjZqU3dfekJUdVBYMFVkQ3RiSm1mMTZFUTFsNFhidHNxY0lsbnVCeTNJOUh0eEQ5dVRMM3VtajlWWlFxOFhfRTFjdXlTWjNtLUhi?oc=5",
      "datetime": 1787196240,
      "headlineKo": "이스라엘과 터키, 공군기지 폭격 이후 시리아에 대한 경고 강화 - 로이터"
    },
    {
      "headline": "Hormuz shipping unchanged amid US-Iran stalemate, data shows - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxPR2wyclNjWVpvOTM3X0dCUjJNdEhZYkYwOC0taHk5bnNRXzZ2d3R2V092Z0pNTlBiVDdzejJXS0ozSnc1aGRjenhxbXRUY3RsMjgzUV9wSkFlTEJxbk1VbUFvbDZMTjhwTXpzR2lJVndmanZhUDhudjFlMUNVdVptcjlQYXZ1UTczRnVNM3pIUTQzQ3ctcUxwd2VYalFHYXRXdzJHemNSOUE5Vmwzdzd0NFNEcw?oc=5",
      "datetime": 1787194680,
      "headlineKo": "미국-이란 교착상태에도 불구하고 호르무즈 배송은 변함이 없다고 데이터에 나와 있음 - Reuters"
    },
    {
      "headline": "Trump warns of economic consequences for any country that supports Iran - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiugFBVV95cUxQc0t6ejR6ZDNSMllnR0lXWC1vV3ZyTXoxUDEyeHRXczFpRWtRbzEyWmdkRVRqWi1oZzJEaEF6UnAxcHItbXZ6Z1hKTzBQV2hPOUVFQml3Wk80T1F2UmFRSzIwakhFR2hKbmp3MFJ6LUFDX1BHV3BKeDZxYXdaT2wwWi1kaU5LbkFaX19IekRKSGNUT0VBc1FQeWVRdUxLd0U3V1I5WjZoMmtIcXZUQnRBczZKcTFZa19zUVE?oc=5",
      "datetime": 1787192940,
      "headlineKo": "트럼프, 이란을 지원하는 모든 국가에 경제적 결과 경고 - 로이터"
    },
    {
      "headline": "Oil hits over 3-week high on Middle East supply concerns amid war impasse - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxOM1ZTcG5JRHQxeFFrOEd6Q0s4eWdFZGZwRmUyaFlPQkEwWEFLZ2xtLUJxMDFGRzZEZ1VEMjA5MjlMazgtZkJRM01FRXJ3Yk5wZUJSRW8yUEc5THM4VEZBd3V0LVhiRHBBWExnTElPMTRCX3d1ODhKR2lDdHVDVktTZS1BTUtuLXN2ZGRwUmpnNzhEdDJBZnp3cHExVndUYWlrenVEOXI0dVppdw?oc=5",
      "datetime": 1787188260,
      "headlineKo": "전쟁 교착 상태 속 중동 공급 우려로 유가 3주 만에 최고치 기록 - Reuters"
    }
  ],
  "fgi": {
    "score": 54.8285714285714,
    "rating": "neutral"
  },
  "_fetched_at": 1787241345.4621308,
  "_updated_label": "2026-08-21 00:56",
  "_last_attempt_at": 1787241345.4621308,
  "_last_success_at": 1787237686.5669916,
  "_collection_status": "partial",
  "_collection_errors": [
    "시장 헤드라인"
  ]
};
