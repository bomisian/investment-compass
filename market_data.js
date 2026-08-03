// 자동 생성 파일 - buy_signal_telegram.py 실행 시마다 갱신됨. 직접 수정하지 마세요.
// 시장 환경 지표(야후) + 시장 헤드라인(Finnhub). 이 파일이 없어도 대시보드는 정상 동작함.
const MARKET_DATA = {
  "indicators": {
    "vix": {
      "current": 15.6899995803833,
      "prevClose": 15.989999771118164,
      "changeAbs": -0.3000001907348633,
      "changePct": -1.8761738275740112,
      "pctRank": 26.19426751592357,
      "min5y": 11.859999656677246,
      "max5y": 52.33000183105469,
      "ma20": 17.232999801635742,
      "ma60": 17.41649996439616,
      "chg1m": -0.46000003814697266,
      "chg3m": -2.600001335144043,
      "chg1mPct": -2.8482975171044296,
      "chg3mPct": -14.21542484963336,
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
      "current": 80.2300033569336,
      "prevClose": 84.66999816894531,
      "changeAbs": -4.439994812011719,
      "changePct": -5.243882022003149,
      "pctRank": 63.48448687350835,
      "min5y": 55.27000045776367,
      "max5y": 123.69999694824219,
      "ma20": 80.86300010681153,
      "ma60": 85.08733329772949,
      "chg1m": 11.540000915527344,
      "chg3m": -21.709999084472656,
      "chg1mPct": 16.80011720100194,
      "chg3mPct": -21.29683987103225,
      "lastDate": "2026-08-03",
      "bars": 1257,
      "symbol": "CL=F",
      "label": "WTI 유가",
      "unit": "$",
      "digits": 1
    },
    "dollar": {
      "current": 99.9229965209961,
      "prevClose": 99.80000305175781,
      "changeAbs": 0.12299346923828125,
      "changePct": 0.12323994536803265,
      "pctRank": 35.40175019888624,
      "min5y": 92.04000091552734,
      "max5y": 114.11000061035156,
      "ma20": 100.89665069580079,
      "ma60": 100.1395502726237,
      "chg1m": -0.9370040893554688,
      "chg3m": 1.7129974365234375,
      "chg1mPct": -0.9290145584822664,
      "chg3mPct": 1.7442189720926986,
      "lastDate": "2026-08-03",
      "bars": 1257,
      "symbol": "DX-Y.NYB",
      "label": "달러지수(DXY)",
      "unit": "",
      "digits": 1
    },
    "gold": {
      "current": 4110.89990234375,
      "prevClose": 4049.10009765625,
      "changeAbs": 61.7998046875,
      "changePct": 1.526260235534106,
      "pctRank": 87.50994431185362,
      "min5y": 1623.300048828125,
      "max5y": 5318.39990234375,
      "ma20": 4064.97001953125,
      "ma60": 4266.065002441406,
      "chg1m": -1.80029296875,
      "chg3m": -519.0,
      "chg1mPct": -0.04377398991547951,
      "chg3mPct": -11.209745587313272,
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
        "ret1m": 4.4040749222346465,
        "ret3m": -0.9807108733720593,
        "ret6m": -0.6694668211060573,
        "ret1y": 3.7529570807357304,
        "winRate": 60.8,
        "count": 9
      },
      "반도체": {
        "ret1m": -12.121676718195795,
        "ret3m": 15.858871113417061,
        "ret6m": 68.46560735690956,
        "ret1y": 224.662018435515,
        "winRate": 71.5,
        "count": 15
      }
    },
    "pair": [
      "빅테크·SW",
      "반도체"
    ],
    "corr60": 0.14173076822907812,
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
    },
    {
      "headline": "Visa to buy cybersecurity firm BioCatch for $2.4 billion amid surge in AI-powered scams",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/03/visa-buys-biocatch-fraud-detection.html",
      "datetime": 1785766277,
      "headlineKo": "AI 기반 사기 급증에 Visa, 사이버 보안 회사인 BioCatch를 24억 달러에 인수"
    }
  ],
  "_fetched_at": 1785787414.4526167,
  "_updated_label": "2026-08-04 05:04"
};
