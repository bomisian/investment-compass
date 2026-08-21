// 자동 생성 파일 - buy_signal_telegram.py 실행 시마다 갱신됨. 직접 수정하지 마세요.
// 시장 환경 지표(야후) + 시장 헤드라인(Finnhub). 이 파일이 없어도 대시보드는 정상 동작함.
const MARKET_DATA = {
  "indicators": {
    "vix": {
      "current": 15.220000267028809,
      "prevClose": 16.010000228881836,
      "changeAbs": -0.7899999618530273,
      "changePct": -4.934415681193292,
      "pctRank": 23.089171974522294,
      "min5y": 11.859999656677246,
      "max5y": 52.33000183105469,
      "high1y": 31.049999237060547,
      "drawdown1y": -50.982284570034466,
      "ma20": 16.00799994468689,
      "ma60": 16.917499923706053,
      "chg1m": -3.4800004959106445,
      "chg3m": -1.4800004959106445,
      "chg1mPct": -18.60962756112542,
      "chg3mPct": -8.862278013753468,
      "lastDate": "2026-08-21",
      "bars": 1256,
      "symbol": "^VIX",
      "label": "VIX (공포지수)",
      "unit": "",
      "digits": 2
    },
    "us10y": {
      "current": 4.73799991607666,
      "prevClose": 4.696000099182129,
      "changeAbs": 0.04199981689453125,
      "changePct": 0.894374276138667,
      "pctRank": 98.40637450199203,
      "min5y": 1.2549999952316284,
      "max5y": 4.98799991607666,
      "high1y": 4.744999885559082,
      "drawdown1y": -0.1475230695732077,
      "ma20": 4.672699975967407,
      "ma60": 4.564966646830241,
      "chg1m": 0.034999847412109375,
      "chg3m": 0.15199995040893555,
      "chg1mPct": 0.7442025707230708,
      "chg3mPct": 3.3144341811351117,
      "lastDate": "2026-08-21",
      "bars": 1255,
      "symbol": "^TNX",
      "label": "미국 10년물 금리",
      "unit": "%",
      "digits": 2
    },
    "us3m": {
      "current": 3.7099997997283936,
      "prevClose": 3.703000068664551,
      "changeAbs": 0.0069997310638427734,
      "changePct": 0.18902865066289765,
      "pctRank": 36.41434262948207,
      "min5y": 0.019999999552965164,
      "max5y": 5.3480000495910645,
      "high1y": 4.127999782562256,
      "drawdown1y": -10.125969109775701,
      "ma20": 3.7123499870300294,
      "ma60": 3.6870999972025555,
      "chg1m": -0.09000015258789062,
      "chg3m": 0.12799978256225586,
      "chg1mPct": -2.368425097822203,
      "chg3mPct": 3.5734165814862715,
      "lastDate": "2026-08-21",
      "bars": 1255,
      "symbol": "^IRX",
      "label": "미국 3개월 금리",
      "unit": "%",
      "digits": 2
    },
    "oil": {
      "current": 86.80000305175781,
      "prevClose": 87.83000183105469,
      "changeAbs": -1.029998779296875,
      "changePct": -1.1727186130294385,
      "pctRank": 78.52028639618138,
      "min5y": 55.27000045776367,
      "max5y": 123.69999694824219,
      "high1y": 112.94999694824219,
      "drawdown1y": -23.151832317859434,
      "ma20": 82.17699966430663,
      "ma60": 81.09433339436849,
      "chg1m": -5.3899993896484375,
      "chg3m": -9.549995422363281,
      "chg1mPct": -5.8466202916896455,
      "chg3mPct": -9.91177537478461,
      "lastDate": "2026-08-21",
      "bars": 1257,
      "symbol": "CL=F",
      "label": "WTI 유가",
      "unit": "$",
      "digits": 1
    },
    "dollar": {
      "current": 98.83599853515625,
      "prevClose": 98.9000015258789,
      "changeAbs": -0.06400299072265625,
      "changePct": -0.06471485311950045,
      "pctRank": 24.821002386634845,
      "min5y": 92.04000091552734,
      "max5y": 114.11000061035156,
      "high1y": 101.61000061035156,
      "drawdown1y": -2.730048281205022,
      "ma20": 99.88680038452148,
      "ma60": 100.32443364461263,
      "chg1m": -2.5940017700195312,
      "chg3m": -0.35400390625,
      "chg1mPct": -2.557430505979368,
      "chg3mPct": -0.3568947449710146,
      "lastDate": "2026-08-21",
      "bars": 1257,
      "symbol": "DX-Y.NYB",
      "label": "달러지수(DXY)",
      "unit": "",
      "digits": 1
    },
    "gold": {
      "current": 4675.7001953125,
      "prevClose": 4516.2998046875,
      "changeAbs": 159.400390625,
      "changePct": 3.5294466160009392,
      "pctRank": 95.06762132060462,
      "min5y": 1623.300048828125,
      "max5y": 5318.39990234375,
      "high1y": 5318.39990234375,
      "drawdown1y": -12.084456205484296,
      "ma20": 4280.759973144532,
      "ma60": 4213.776668294271,
      "chg1m": 629.10009765625,
      "chg3m": 135.900390625,
      "chg1mPct": 15.54638665729827,
      "chg3mPct": 2.993532677028581,
      "lastDate": "2026-08-21",
      "bars": 1257,
      "symbol": "GC=F",
      "label": "금",
      "unit": "$",
      "digits": 0
    },
    "us30y": {
      "current": 5.276000022888184,
      "prevClose": 5.236999988555908,
      "changeAbs": 0.03900003433227539,
      "changePct": 0.7447018219877745,
      "pctRank": 99.76095617529882,
      "min5y": 1.6779999732971191,
      "max5y": 5.309000015258789,
      "high1y": 5.309000015258789,
      "drawdown1y": -0.621585840568073,
      "ma20": 5.218549990653992,
      "ma60": 5.075900030136109,
      "chg1m": 0.10500001907348633,
      "chg3m": 0.1640000343322754,
      "chg1mPct": 2.030555385728617,
      "chg3mPct": 3.20813839396357,
      "lastDate": "2026-08-21",
      "bars": 1255,
      "symbol": "^TYX",
      "label": "미국 30년물 금리",
      "unit": "%",
      "digits": 2
    },
    "dow": {
      "current": 53318.3515625,
      "prevClose": 52759.2109375,
      "changeAbs": 559.140625,
      "changePct": 1.0597971710804646,
      "pctRank": 98.96414342629483,
      "min5y": 28725.509765625,
      "max5y": 54349.12109375,
      "high1y": 54349.12109375,
      "drawdown1y": -1.8965707457751946,
      "ma20": 53311.7181640625,
      "ma60": 52304.77877604167,
      "chg1m": 1606.703125,
      "chg3m": 3032.69140625,
      "chg1mPct": 3.107042945927167,
      "chg3mPct": 6.03092690207641,
      "lastDate": "2026-08-21",
      "bars": 1255,
      "symbol": "^DJI",
      "label": "다우존스 지수",
      "unit": "",
      "digits": 0
    }
  },
  "yieldSpread": 1.0280001163482666,
  "sector": {
    "groups": {
      "빅테크·SW": {
        "ret1m": 16.67473902528338,
        "ret3m": 1.9593012703733592,
        "ret6m": 12.76149663047823,
        "ret1y": 10.156064135458243,
        "winRate": 60.8,
        "count": 9
      },
      "반도체": {
        "ret1m": -4.981193615067026,
        "ret3m": 3.172901136609241,
        "ret6m": 71.29294629067977,
        "ret1y": 251.7295247897315,
        "winRate": 71.5,
        "count": 16
      }
    },
    "pair": [
      "빅테크·SW",
      "반도체"
    ],
    "corr60": 0.1478975346656043,
    "corrPctRank": 0.6694560669456067,
    "corrMin5y": 0.11322641817101682,
    "corrMedian5y": 0.7050009580856722,
    "corrMax5y": 0.9306761077384692
  },
  "news": [
    {
      "headline": "Jim Cramer looks at why our AI data center stocks are among the worst of the week",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/21/cramer-on-why-our-ai-data-center-stocks-are-among-the-worst-of-the-week.html",
      "datetime": 1787333893,
      "headlineKo": "Jim Cramer가 AI 데이터 센터 주식이 이번 주 최악의 주식에 속하는 이유를 살펴봅니다."
    },
    {
      "headline": "This sleepy sector could offer big returns, says Mike Khouw",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/21/this-sleepy-sector-could-offer-big-returns-says-mike-khouw.html",
      "datetime": 1787333500,
      "headlineKo": "Mike Khouw는 이 잠잠한 부문이 큰 수익을 제공할 수 있다고 말합니다."
    },
    {
      "headline": "Turkey to seek Interpol notice for Netanyahu in Gaza flotilla case - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxNVUoyZkFhckp4LWRTcFQ5azZpNDRPZjdVNGNnUVBocG9kRkN4Yk5aSHZTczg0cWhudS1FRk1EbGhGemliM1VqZWVQMUphTkk4VmhyTVAzU2tOSVZ2WExhS0ExQnB6UlpDTmZ0UWJiU3ZpRFp6N2RjZkdsVTlJb2QzMmdfVXd5RlMyOXhSZ1ZRMkkzNDA4WFplS1ppeFg0QmNlUnNLM1M4OHlKam5VMnJF?oc=5",
      "datetime": 1787330017,
      "headlineKo": "터키, 가자 소함대 사건에서 네타냐후에 대해 인터폴 통지 요청 - 로이터 통신"
    },
    {
      "headline": "Oil rises as Trump threatens sanctions on Iran partners - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxPbEh1QVJmcTNtSE1PMURxNmRBT3RIWHhVTmtwZDRiMk5yUzJtc2xuNHFlQXF1a3VJS3FQckxIY3Y2VjhFejlkNDZnLTY0R0prazZHb194Y19sRDdjUVJtNHlMT0lwSHRRcU5UM2VBTFZpVHBDZEl1OGFWbUkxX1pacWhMYUtFQ0pRbGVRYVNYcy1zSUNZVWtxNW4zczc0YVhZVkFWUHJwRWlFQl8zQUR3dFNIU1o?oc=5",
      "datetime": 1787328792,
      "headlineKo": "트럼프가 이란 파트너에 대한 제재 위협에 유가 상승 - 로이터"
    },
    {
      "headline": "Iran says Tehran must overcome 'unjust sanctions' as US ramps up economic pressure - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiywFBVV95cUxQZ1k1ZnYtdXFiVWJvUVdmQlJLR1hWN1czeTU1Vkt5VFEyWkNISDhnUHVBY1hLb1JMdnp1dmRxU3Z6WG9wNlZRUmVZaUZxeVJVOERnX0QzeEVuU1FPbzByQ29EQXBvMzJrSkZWOWdkV0pHYUlfYkNTcFZDaTc3cUdLMzdmemlmV2hhUlYzdDFwUHpMcE9oSVZCbXlGYzM2LW9DcEFBdl9kSHRwOF9PdUtUMjdaWUZ5Rm90aFh4blpzaXhXUkZSU0ZPNzRvRQ?oc=5",
      "datetime": 1787325499,
      "headlineKo": "이란은 미국이 경제적 압박을 강화함에 따라 테헤란이 '부당한 제재'를 극복해야 한다고 말했습니다."
    },
    {
      "headline": "Ken Griffin says Citadel unwound more than 80% of risk tied to Situational Awareness portfolio",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/21/citadel-situational-awareness-ken-griffin.html",
      "datetime": 1787324880,
      "headlineKo": "Ken Griffin은 Citadel이 상황 인식 포트폴리오와 관련된 위험의 80% 이상을 해소했다고 말했습니다."
    },
    {
      "headline": "Here are the top 10 things we're watching in the stock market Friday",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/21/here-are-the-top-10-things-were-watching-in-the-stock-market-friday.html",
      "datetime": 1787317176,
      "headlineKo": "금요일 주식 시장에서 우리가 주목하는 상위 10가지 항목은 다음과 같습니다."
    },
    {
      "headline": "South African rand hits strongest level since start of Iran war - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxQZHZPRld0NlUwNUZsYlNzalpPUEdZNHR0dU9VaWRDVmt5WDNaNDJpdm1ranFOdHM5WVdoOVcxaUZuLXVtV19zT3kxNEFaMEFlQ2JsVXhnTVBJcGZ1a3FtT0lQQjVUeXd5SDNuM1lxLU5FZmE5dzVvTlB6eHc1Q2R4aUxlSTVNYjVxbEt1b29kM2lNRUJKeFpjMS1uY2hCa1RyOGxyZGNpRlptTnU3M3ViWXRIS2NoZzFBZGRHeVpDMnE5T3c?oc=5",
      "datetime": 1787316396,
      "headlineKo": "남아프리카공화국 랜드화, 이란 전쟁 개시 이후 가장 높은 수준 기록 - 로이터"
    },
    {
      "headline": "Wall Street's existential crisis over perpetual futures — the 24/7 security on steroids — just got urgent",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/21/wall-streets-existential-crisis-over-perpetual-futures-the-24/7-security-on-steroids-just-got-urgent.html",
      "datetime": 1787315552,
      "headlineKo": "영구 미래에 대한 월스트리트의 실존적 위기(스테로이드에 대한 연중무휴 24시간 보안)가 시급해졌습니다."
    },
    {
      "headline": "Gold rebounds as bond jitters, debt fears and weaker dollar revive bullion demand",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/21/gold-prices-us-debt-dollar.html",
      "datetime": 1787312146,
      "headlineKo": "채권 불안감, 부채 우려, 달러 약세로 인해 금 수요가 회복되면서 금이 반등했습니다."
    },
    {
      "headline": "Take Five: Six months of war - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMijAFBVV95cUxNX0lPYzNQYzNFb2I1ZW91YXRCQWhCYWV2NGFkMWNtTV9KdUUtSWNOREVHOEJGY3R5THNITzY0d29lTTB3Tk5RQ1dGQ21nYk1oblczcGVua3RuemZLdm1BeXBETDEwN29rWEZGeG1VUy04ZUxGRDRWWEdKa1VLNS1nYzR1Y1VNSFVFcmJ3VQ?oc=5",
      "datetime": 1787311555,
      "headlineKo": "Take Five: 6개월 간의 전쟁 - Reuters"
    },
    {
      "headline": "Iraq aims to boost oil output to 8-10 million bpd in six years - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxQUUpoc3RVQnd4NTNiTnNFZ1UzRDBzbmF6RjNzbFBYX1BLUUV5d2ZSRGFkem5EWnJYNEo2TUc2TWwxc2JRUzVaczhIb0ZZN2kxdmJVdUdqdXcybjlpR1YteE0zdmUwMXZpMzAxSHZDSllIQ1NvYWNwOTdrRTFOcEdwZG8wZTl3ajB0RGVEQ1o1alotVEQ5MTBNZW13RllNWGNlcWF6Y2FDY0Q?oc=5",
      "datetime": 1787308090,
      "headlineKo": "이라크, 6년 내 석유 생산량을 일일 800만~1000만 배럴로 늘리는 목표 - 로이터"
    }
  ],
  "fgi": {
    "score": 55.6,
    "rating": "greed"
  },
  "_fetched_at": 1787341138.946077,
  "_updated_label": "2026-08-22 04:39",
  "_last_attempt_at": 1787341138.946077,
  "_last_success_at": 1787337429.0309951,
  "_collection_status": "partial",
  "_collection_errors": [
    "시장 헤드라인"
  ]
};
