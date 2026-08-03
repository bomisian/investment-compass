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
      "current": 80.06999969482422,
      "prevClose": 84.66999816894531,
      "changeAbs": -4.599998474121094,
      "changePct": -5.432855289476373,
      "pctRank": 62.84805091487669,
      "min5y": 55.27000045776367,
      "max5y": 123.69999694824219,
      "ma20": 80.85499992370606,
      "ma60": 85.08466657002766,
      "chg1m": 11.379997253417969,
      "chg3m": -21.87000274658203,
      "chg1mPct": 16.567181320346148,
      "chg3mPct": -21.453798531300425,
      "lastDate": "2026-08-03",
      "bars": 1257,
      "symbol": "CL=F",
      "label": "WTI 유가",
      "unit": "$",
      "digits": 1
    },
    "dollar": {
      "current": 99.96399688720703,
      "prevClose": 99.80000305175781,
      "changeAbs": 0.16399383544921875,
      "changePct": 0.16432247538526532,
      "pctRank": 35.87907716785998,
      "min5y": 92.04000091552734,
      "max5y": 114.11000061035156,
      "ma20": 100.89870071411133,
      "ma60": 100.14023361206054,
      "chg1m": -0.8960037231445312,
      "chg3m": 1.753997802734375,
      "chg1mPct": -0.8883637891358209,
      "chg3mPct": 1.785966621612247,
      "lastDate": "2026-08-03",
      "bars": 1257,
      "symbol": "DX-Y.NYB",
      "label": "달러지수(DXY)",
      "unit": "",
      "digits": 1
    },
    "gold": {
      "current": 4112.5,
      "prevClose": 4049.10009765625,
      "changeAbs": 63.39990234375,
      "changePct": 1.5657776003227954,
      "pctRank": 87.58949880668257,
      "min5y": 1623.300048828125,
      "max5y": 5318.39990234375,
      "ma20": 4065.0500244140626,
      "ma60": 4266.091670735677,
      "chg1m": -0.2001953125,
      "chg3m": -517.39990234375,
      "chg1mPct": -0.004867734164726498,
      "chg3mPct": -11.17518549551863,
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
      "headline": "Wall Street rallies to kick off August on Iran talks optimism - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxQTC1HdWxXY3dmcFlCNm9FZ3N5VnVhSWg0ZHV4a1RRdUdlUVM5QUhNYUlueDN2akloUFFEUWRIWXNHeFk1VEFHMDhBRTV1XzY5TnBxUXlVQk96NkFMSnNuTURuTzhCOVRBUkVVT2p1VjBOZFBZdk4zM01WQlFDY1ZZTGhqR2NaeXNrVWN0Ym5aQ1VENmZ5aGRKRWRoMHlNRTVxMWxVSFVrOA?oc=5",
      "datetime": 1785782240,
      "headlineKo": "월스트리트 집회, 이란 낙관론에 대해 8월 시작 - 로이터 통신"
    },
    {
      "headline": "Trump says Iran faces 'decapitation' if it doesn't strike deal - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxQbWpzQ3dqaWdURjZva2hpRmpXbFNWNWFsQnlRTDF5YlpCTlBBVGxEYWZYVEhLMl84aHdvdzBhUUhxeVBqWWVHWTR5dEpleS1XY0wwR0V4N1JaMkNOaUdvWGgwWHZ0d2hubUVNU2MxMUY5dnVaS05fTlhja0JEWGp3SEdMRmswbEVIUmY1clZWdEExNDNQTFpVelhla3o0alFQS2c?oc=5",
      "datetime": 1785782036,
      "headlineKo": "트럼프 “이란, 합의 안 하면 참수 당할 것” - 로이터"
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
      "headlineKo": "OPEC+ 원유 생산량 증가는 지금은 중요하지 않고 나중도 중요하지 않습니다 - Reuters"
    },
    {
      "headline": "UBS fined $125 million by US regulators for money laundering violations - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxQS2NEeHdNTkNSVkRlY2RoazlTc1F6U2tjOEd0TkpIZVY4cmZjRS1mMGdYVnRTcXQ4UmFxNENaem5tUGhKcjNDU3Y3RG1NOGEtdU9NQzlIdXhKLVBRVjBXZE9wTGVFQ1dUbmU3MHJ1c1VjbjZVTlZJUGlLaWM5Ym5vYk1feXlzLUE2Vk0tQ01KV2Y2Qk1vMkx2bkFxVHFscXhtSkpXcFJZak9pOXBydjlQbVJsZw?oc=5",
      "datetime": 1785771893,
      "headlineKo": "UBS, 자금세탁 위반 혐의로 미국 규제당국으로부터 1억 2,500만 달러의 벌금 부과 - Reuters"
    },
    {
      "headline": "US signs deal to boost Patriot and THAAD missile parts production - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxNZVpSLU9DNzZlb3plSWpueFdNUFN3ZmxuZkQxN1RhRTlaZlBteHFVVEVXN0p4NnBOY2paYTNwNGlxaGdfWGRCRjVXazlOLVUtUVZnNlB4eFB1RFBKQjBtXzQtbEN6djVNZGs5dWJBTXYtVmxSVEtfU1I1WFdJWmU4dEQ2eU8xX1Z5MVNCV1pjdkJ6dVRaVnNwbm9HbmVSaFFqd3k1aGdmbW44NEUyRENTZmtMZk9iVGxpRklr?oc=5",
      "datetime": 1785771344,
      "headlineKo": "미국, 패트리어트와 사드 미사일 부품 생산을 늘리는 계약 체결 - 로이터 통신"
    },
    {
      "headline": "We're trimming an industrial and buying another name. Plus, 2 more stocks we're eyeing",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/03/were-trimming-an-industrial-and-buying-another-name-plus-2-more-stocks-were-eyeing-.html",
      "datetime": 1785771236,
      "headlineKo": "우리는 산업을 다듬고 다른 이름을 구입하고 있습니다. 게다가 우리가 주목하고 있는 주식이 2개 더 있습니다."
    },
    {
      "headline": "'Spider-Man: Brand New Day' beats out 'Avengers: Endgame' for highest domestic opening ever",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/03/spider-man-brand-new-day-debut-360m-highest-domestic-opening-ever.html",
      "datetime": 1785768929,
      "headlineKo": "'스파이더맨: 브랜 뉴 데이', '어벤져스: 엔드게임' 제치고 국내 개봉 최고 기록"
    }
  ],
  "_fetched_at": 1785790802.4485197,
  "_updated_label": "2026-08-04 06:00"
};
