// 자동 생성 파일 - buy_signal_telegram.py 실행 시마다 갱신됨. 직접 수정하지 마세요.
// 시장 환경 지표(야후) + 시장 헤드라인(Finnhub). 이 파일이 없어도 대시보드는 정상 동작함.
const MARKET_DATA = {
  "indicators": {
    "vix": {
      "current": 15.149999618530273,
      "prevClose": 15.8100004196167,
      "changeAbs": -0.6600008010864258,
      "changePct": -4.174578011190381,
      "pctRank": 22.213375796178344,
      "min5y": 11.859999656677246,
      "max5y": 52.33000183105469,
      "ma20": 17.17099986076355,
      "ma60": 17.317666641871135,
      "chg1m": -1.75,
      "chg3m": -1.9300003051757812,
      "chg1mPct": -10.355029819534343,
      "chg3mPct": -11.299767645180443,
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
      "current": 78.0999984741211,
      "prevClose": 75.22000122070312,
      "changeAbs": 2.8799972534179688,
      "changePct": 3.828765230896187,
      "pctRank": 55.529037390612565,
      "min5y": 55.27000045776367,
      "max5y": 123.69999694824219,
      "ma20": 81.52099952697753,
      "ma60": 84.10233319600424,
      "chg1m": 4.5800018310546875,
      "chg3m": -16.980003356933594,
      "chg1mPct": 6.229600163463314,
      "chg3mPct": -17.858648538001653,
      "lastDate": "2026-08-06",
      "bars": 1257,
      "symbol": "CL=F",
      "label": "WTI 유가",
      "unit": "$",
      "digits": 1
    },
    "dollar": {
      "current": 99.96499633789062,
      "prevClose": 99.69000244140625,
      "changeAbs": 0.274993896484375,
      "changePct": 0.27584902171710274,
      "pctRank": 35.87907716785998,
      "min5y": 92.04000091552734,
      "max5y": 114.11000061035156,
      "ma20": 100.71925048828125,
      "ma60": 100.23208363850911,
      "chg1m": -1.0850067138671875,
      "chg3m": 1.9449996948242188,
      "chg1mPct": -1.0737324899549454,
      "chg3mPct": 1.9842886772449213,
      "lastDate": "2026-08-06",
      "bars": 1257,
      "symbol": "DX-Y.NYB",
      "label": "달러지수(DXY)",
      "unit": "",
      "digits": 1
    },
    "gold": {
      "current": 4299.7998046875,
      "prevClose": 4245.7998046875,
      "changeAbs": 54.0,
      "changePct": 1.2718451760344953,
      "pctRank": 89.97613365155132,
      "min5y": 1623.300048828125,
      "max5y": 5318.39990234375,
      "ma20": 4075.8200073242188,
      "ma60": 4239.813330078125,
      "chg1m": 228.89990234375,
      "chg3m": -382.10009765625,
      "chg1mPct": 5.622832981276814,
      "chg3mPct": -8.16121885615221,
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
        "ret1m": 6.16886209848031,
        "ret3m": -0.14391525662681426,
        "ret6m": 5.92225882644406,
        "ret1y": 7.079007602820675,
        "winRate": 60.8,
        "count": 9
      },
      "반도체": {
        "ret1m": -7.169893133053673,
        "ret3m": 9.122375216251877,
        "ret6m": 84.01158517323364,
        "ret1y": 242.19173138100777,
        "winRate": 71.5,
        "count": 15
      }
    },
    "pair": [
      "빅테크·SW",
      "반도체"
    ],
    "corr60": 0.20886700122788512,
    "corrPctRank": 2.0938023450586267,
    "corrMin5y": 0.11496792019743002,
    "corrMedian5y": 0.7115784818334243,
    "corrMax5y": 0.9346528705205663
  },
  "news": [
    {
      "headline": "Jim Cramer highlights 5 investing themes — and the stocks to buy for each",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/06/jim-cramer-5-investing-themes-stocks-to-buy.html",
      "datetime": 1786055005,
      "headlineKo": "Jim Cramer는 5가지 투자 테마와 각 테마에 대해 매수할 주식을 강조합니다."
    },
    {
      "headline": "Virginia governor to intervene in NextEra, Dominion merger over electricity price concerns",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/06/virginia-governor-nextera-nee-dominion-data-center.html",
      "datetime": 1786049459,
      "headlineKo": "버지니아 주지사, 전력 가격 문제로 NextEra와 Dominion 합병에 개입"
    },
    {
      "headline": "Sweetgreen cuts full-year outlook as cyclospora fears weigh on sales",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/06/sweetgreen-cuts-full-year-outlook-as-cyclospora-fears-weigh-on-sales.html",
      "datetime": 1786048816,
      "headlineKo": "Sweetgreen, 원포자충 우려로 매출 감소로 연간 전망 하향"
    },
    {
      "headline": "Stocks close lower as investors eye Mideast talks, earnings - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxOa2poa2tBUFVOZFo0R0Q4T2lKVF9aWk5CWGd1Y1A0aXlTOFE1c1JBNlF3bk9qLVlnSUFmMTZoT05MVExKZk9oQzVhUmg4SnBLZ29vLUFDMU1Qb1lOZmd5ZVZHRGVuaTJHWWJyUjFRV19pU3U4NmItdkd0d2JaNWVUSmJZcFBSVEtPVDQyd1RySlA0Q2VCT3RZSzlsSUFPY2FsLUtNMWlubFpQbkZiVmt6TjBZdmRZeXlPMFBZ?oc=5",
      "datetime": 1786047757,
      "headlineKo": "투자자들이 중동 회담과 실적에 주목하면서 주가는 하락 마감 - Reuters"
    },
    {
      "headline": "Bomb planted on minibus kills two near Damascus, Syria says - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiygFBVV95cUxQWFkyalJWQ2txUksxbXpvMFRkWUJYSkVlNjBGTXVjRnFJOF9ONkJ2ZWUyUG9uMmxWSENpMFpoSUlZdzRwNVJZWU1wY0tHSmxCNy04S2xBQjRvYWtEeVNPb3hpQ0tIY2ZiR3BqRURVazhJSG9uZFBfc1EwTzVGZWs1cHpUUzlYU3hkZ3hJLWVmcGZaSl9ONFdlbzhPajNiYWo3RkQ4T1BqWVY0c2twZlFINFBmZDdOMXJ2cjZMSEhQOGFXMmh5cEEwaXR3?oc=5",
      "datetime": 1786046734,
      "headlineKo": "시리아 다마스쿠스 근처에서 미니버스에 폭탄이 설치돼 2명이 사망했다고 시리아가 밝혔습니다."
    },
    {
      "headline": "American Airlines will stop upgrading elite flyers to business from coach on long domestic flights",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/06/american-airlines-flight-upgrades-become-harder-to-get.html",
      "datetime": 1786046217,
      "headlineKo": "아메리칸 항공, 장거리 국내선 항공편에서 엘리트 고객을 코치에서 비즈니스로 업그레이드하는 것을 중단합니다."
    },
    {
      "headline": "Gold pares gains to trade steady as oil rises on Iran proposal to bar 'hostile' vessels in Hormuz - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxQVWd6ZjFIZXZHQ2JsNi1UdXBvS1JIUm0xYWtjaDQ1UXVOczhzTzZLNEY0ZTRtb1l5N2lrY09ERHFySlMyakJJNndhRUx5M0FabFZ5TllJZWZPU05na2VqMkRVckJ2VndLdUlFUGd1NklHQlN6V1VJUzRxS09jUmtVVWhMTGRuVlN3YzctZjhBWVI2UUZkQkJqZ0NvdF9uQ1I0RGtCNVNORThqQQ?oc=5",
      "datetime": 1786044642,
      "headlineKo": "호르무즈에서 '적대적인' 선박을 금지하라는 이란의 제안으로 유가가 상승함에 따라 금 가격은 꾸준히 상승할 것입니다 - Reuters"
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
    }
  ],
  "_fetched_at": 1786057202.2151775,
  "_updated_label": "2026-08-07 08:00"
};
