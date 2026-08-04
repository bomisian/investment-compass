// 자동 생성 파일 - buy_signal_telegram.py 실행 시마다 갱신됨. 직접 수정하지 마세요.
// 시장 환경 지표(야후) + 시장 헤드라인(Finnhub). 이 파일이 없어도 대시보드는 정상 동작함.
const MARKET_DATA = {
  "indicators": {
    "vix": {
      "current": 15.859999656677246,
      "prevClose": 15.989999771118164,
      "changeAbs": -0.13000011444091797,
      "changePct": -0.813008857421811,
      "pctRank": 28.02547770700637,
      "min5y": 11.859999656677246,
      "max5y": 52.33000183105469,
      "ma20": 17.241499805450438,
      "ma60": 17.419333299001057,
      "chg1m": -0.28999996185302734,
      "chg3m": -2.4300012588500977,
      "chg1mPct": -1.7956654408851234,
      "chg3mPct": -13.28595482347484,
      "lastDate": "2026-08-03",
      "bars": 1256,
      "symbol": "^VIX",
      "label": "VIX (공포지수)",
      "unit": "",
      "digits": 2
    },
    "us10y": {
      "current": 4.685999870300293,
      "prevClose": 4.744999885559082,
      "changeAbs": -0.05900001525878906,
      "changePct": -1.243414471691549,
      "pctRank": 97.76892430278885,
      "min5y": 1.1759999990463257,
      "max5y": 4.98799991607666,
      "ma20": 4.614049959182739,
      "ma60": 4.525849978129069,
      "chg1m": 0.20099973678588867,
      "chg3m": 0.3080000877380371,
      "chg1mPct": 4.481599348992375,
      "chg3mPct": 7.035178232872771,
      "lastDate": "2026-08-03",
      "bars": 1255,
      "symbol": "^TNX",
      "label": "미국 10년물 금리",
      "unit": "%",
      "digits": 2
    },
    "us3m": {
      "current": 3.700000047683716,
      "prevClose": 3.681999921798706,
      "changeAbs": 0.018000125885009766,
      "changePct": 0.4888681767330529,
      "pctRank": 36.57370517928287,
      "min5y": 0.019999999552965164,
      "max5y": 5.3480000495910645,
      "ma20": 3.7200999736785887,
      "ma60": 3.657616666952769,
      "chg1m": 0.032000064849853516,
      "chg3m": 0.125,
      "chg1mPct": 0.8724118047877025,
      "chg3mPct": 3.496503449866776,
      "lastDate": "2026-08-03",
      "bars": 1255,
      "symbol": "^IRX",
      "label": "미국 3개월 금리",
      "unit": "%",
      "digits": 2
    },
    "oil": {
      "current": 80.25,
      "prevClose": 84.66999816894531,
      "changeAbs": -4.4199981689453125,
      "changePct": -5.220264868939668,
      "pctRank": 63.48448687350835,
      "min5y": 55.27000045776367,
      "max5y": 123.69999694824219,
      "ma20": 80.86399993896484,
      "ma60": 85.08766657511393,
      "chg1m": 11.55999755859375,
      "chg3m": -21.69000244140625,
      "chg1mPct": 16.829228632586855,
      "chg3mPct": -21.277223780599154,
      "lastDate": "2026-08-03",
      "bars": 1257,
      "symbol": "CL=F",
      "label": "WTI 유가",
      "unit": "$",
      "digits": 1
    },
    "dollar": {
      "current": 100.01300048828125,
      "prevClose": 99.80000305175781,
      "changeAbs": 0.2129974365234375,
      "changePct": 0.21342427856738017,
      "pctRank": 36.11774065234686,
      "min5y": 92.04000091552734,
      "max5y": 114.11000061035156,
      "ma20": 100.90115089416504,
      "ma60": 100.14105033874512,
      "chg1m": -0.8470001220703125,
      "chg3m": 1.8030014038085938,
      "chg1mPct": -0.8397780259217869,
      "chg3mPct": 1.835863375029452,
      "lastDate": "2026-08-03",
      "bars": 1257,
      "symbol": "DX-Y.NYB",
      "label": "달러지수(DXY)",
      "unit": "",
      "digits": 1
    },
    "gold": {
      "current": 4107.0,
      "prevClose": 4049.10009765625,
      "changeAbs": 57.89990234375,
      "changePct": 1.4299449494287468,
      "pctRank": 87.3508353221957,
      "min5y": 1623.300048828125,
      "max5y": 5318.39990234375,
      "ma20": 4064.7750244140625,
      "ma60": 4266.00000406901,
      "chg1m": -5.7001953125,
      "chg3m": -522.89990234375,
      "chg1mPct": -0.1385998259488223,
      "chg3mPct": -11.293978560509427,
      "lastDate": "2026-08-03",
      "bars": 1257,
      "symbol": "GC=F",
      "label": "금",
      "unit": "$",
      "digits": 0
    },
    "us30y": {
      "current": 5.230999946594238,
      "prevClose": 5.275000095367432,
      "changeAbs": -0.04400014877319336,
      "changePct": -0.8341260280134368,
      "pctRank": 99.8406374501992,
      "min5y": 1.6779999732971191,
      "max5y": 5.275000095367432,
      "ma20": 5.123750066757202,
      "ma60": 5.033966716130575,
      "chg1m": 0.24599981307983398,
      "chg3m": 0.2649998664855957,
      "chg1mPct": 4.934800531417541,
      "chg3mPct": 5.336283975247101,
      "lastDate": "2026-08-03",
      "bars": 1255,
      "symbol": "^TYX",
      "label": "미국 30년물 금리",
      "unit": "%",
      "digits": 2
    }
  },
  "yieldSpread": 0.9859998226165771,
  "sector": {
    "groups": {
      "빅테크·SW": {
        "ret1m": 4.400989301169123,
        "ret3m": -0.9836373492270511,
        "ret6m": -0.6724024956556773,
        "ret1y": 3.7498907032000206,
        "winRate": 60.8,
        "count": 9
      },
      "반도체": {
        "ret1m": -12.122821428747244,
        "ret3m": 15.857361925857628,
        "ret6m": 68.46341290950669,
        "ret1y": 224.65778936030878,
        "winRate": 71.5,
        "count": 15
      }
    },
    "pair": [
      "빅테크·SW",
      "반도체"
    ],
    "corr60": 0.141721824828959,
    "corrPctRank": 0.33500837520938026,
    "corrMin5y": 0.11496792019743002,
    "corrMedian5y": 0.7115784818334243,
    "corrMax5y": 0.9346528705205663
  },
  "news": [
    {
      "headline": "Analysis: Federal Reserve may be pulled into Bessent’s effort to support Japan’s yen",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/03/bessent-fed-japan-yen-fima-repo-facility.html",
      "datetime": 1785796832,
      "headlineKo": "분석: 일본 엔화를 지원하려는 베센트의 노력에 연준이 개입할 수도 있음"
    },
    {
      "headline": "Jim Cramer says the market has warmed up to Big Tech's AI spending. Here's what flipped the switch",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/03/jim-cramer-market-warmed-up-big-tech-ai-spending.html",
      "datetime": 1785795601,
      "headlineKo": "Jim Cramer는 시장이 Big Tech의 AI 지출로 인해 따뜻해졌다고 말했습니다. 스위치를 뒤집은 것은 다음과 같습니다."
    },
    {
      "headline": "Larry Berg named next Major League Soccer commissioner",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/03/larry-berg-major-league-soccer-commissioner.html",
      "datetime": 1785790017,
      "headlineKo": "래리 버그가 차기 메이저 리그 축구 커미셔너로 임명되었습니다."
    },
    {
      "headline": "Wall Street rallies, Dow closes at record on Iran talks optimism - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxQTC1HdWxXY3dmcFlCNm9FZ3N5VnVhSWg0ZHV4a1RRdUdlUVM5QUhNYUlueDN2akloUFFEUWRIWXNHeFk1VEFHMDhBRTV1XzY5TnBxUXlVQk96NkFMSnNuTURuTzhCOVRBUkVVT2p1VjBOZFBZdk4zM01WQlFDY1ZZTGhqR2NaeXNrVWN0Ym5aQ1VENmZ5aGRKRWRoMHlNRTVxMWxVSFVrOA?oc=5",
      "datetime": 1785788804,
      "headlineKo": "월스트리트 랠리, 다우지수는 이란 낙관론에 대한 기록 마감 - 로이터 통신"
    },
    {
      "headline": "Trump says Iran faces 'decapitation' if it doesn't strike deal - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxQbWpzQ3dqaWdURjZva2hpRmpXbFNWNWFsQnlRTDF5YlpCTlBBVGxEYWZYVEhLMl84aHdvdzBhUUhxeVBqWWVHWTR5dEpleS1XY0wwR0V4N1JaMkNOaUdvWGgwWHZ0d2hubUVNU2MxMUY5dnVaS05fTlhja0JEWGp3SEdMRmswbEVIUmY1clZWdEExNDNQTFpVelhla3o0alFQS2c?oc=5",
      "datetime": 1785786541,
      "headlineKo": "트럼프 “이란, 합의 안 하면 참수 당할 것” - 로이터"
    },
    {
      "headline": "Trump sours on Pirro over Reflecting Pool case, won't say her job is safe",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/03/trump-pirro-reflecting-pool-vandalism-case.html",
      "datetime": 1785786157,
      "headlineKo": "트럼프는 Reflecting Pool 사건으로 Pirro를 비난했지만 그녀의 직업이 안전하다고 말하지 않을 것입니다"
    },
    {
      "headline": "A trio of positive developments has Boeing shares soaring",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/03/a-trio-of-positive-developments-has-boeing-shares-soaring.html",
      "datetime": 1785784984,
      "headlineKo": "세 가지 긍정적인 발전으로 보잉 주가 급등"
    },
    {
      "headline": "After deadly day, Gazans say Trump's touting of plan jars with grim reality - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxOUWg4ei1MaEJJbEJOYl80UkRfZGU4UXhwTUVDSERoUldCTGxERWZXVkxta1h1b1lKbFhpUTBFUWVQRjlibkliajJDMEhEbDZkNWc3cWhWMm1YSEVrdHJ0S1NNNXE1alJhS0M0Z05Hd01hREVmQ25jd015WWZiOTQtSE4yb1JoZ3hlQmNuQTBqbjlFVmFDLTEybkZ4a2FRMUo3X05YOW8zamVOcVdTTjdDR1BnR003X2JMOVEyVFJPUWNTZw?oc=5",
      "datetime": 1785779854,
      "headlineKo": "치명적인 하루를 보낸 후, 가자 사람들은 트럼프가 암울한 현실과 함께 계획 항아리를 선전한다고 말합니다 - Reuters"
    },
    {
      "headline": "Jim Cramer wants to 'replenish' our position in this data center play",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/03/jim-cramer-wants-to-replenish-our-position-in-this-data-center-play.html",
      "datetime": 1785777151,
      "headlineKo": "Jim Cramer는 이 데이터 센터 플레이에서 우리의 위치를 ​​'보충'하고 싶어합니다."
    },
    {
      "headline": "Here's why a Starbucks bear changed his tune and upgraded the stock",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/03/heres-why-a-starbucks-bear-changed-his-tune-and-upgraded-the-stock.html",
      "datetime": 1785775841,
      "headlineKo": "스타벅스 곰이 태도를 바꾸고 주식을 업그레이드한 이유는 다음과 같습니다."
    },
    {
      "headline": "OPEC+ oil output hike is irrelevant for now, not for later - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxOZ1F5SEtvVzlTU0VibXRmNGx4ZldyYllQcHBfSEkzRHVLVGdrNUxMLUZtQXZsT1pTWjJ4Z1F0ekFyN3NkWjRITjdCc2NtcmpFZ0k2OWN5Z25WOVVFVHpJNEVWQkU3emxZYkUtVFhFand1cWVHSWUyRUpQa1FOOUtPWlRKUzRVQUs3V3oxcWphVzVKUUhSSUNZaHNtdHVkM1U5VXE2Q0ZPNzE4UG5WQmdVS2cwZlU3UnNN?oc=5",
      "datetime": 1785774491,
      "headlineKo": "OPEC+ 석유 생산량 증가는 지금은 중요하지 않고 나중도 중요하지 않습니다 - Reuters"
    },
    {
      "headline": "UBS fined $125 million by US regulators for money laundering violations - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxQS2NEeHdNTkNSVkRlY2RoazlTc1F6U2tjOEd0TkpIZVY4cmZjRS1mMGdYVnRTcXQ4UmFxNENaem5tUGhKcjNDU3Y3RG1NOGEtdU9NQzlIdXhKLVBRVjBXZE9wTGVFQ1dUbmU3MHJ1c1VjbjZVTlZJUGlLaWM5Ym5vYk1feXlzLUE2Vk0tQ01KV2Y2Qk1vMkx2bkFxVHFscXhtSkpXcFJZak9pOXBydjlQbVJsZw?oc=5",
      "datetime": 1785771893,
      "headlineKo": "UBS, 자금세탁 위반 혐의로 미국 규제당국으로부터 1억 2,500만 달러의 벌금 부과 - Reuters"
    }
  ],
  "_fetched_at": 1785801602.1046302,
  "_updated_label": "2026-08-04 09:00"
};
