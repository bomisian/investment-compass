// 자동 생성 파일 - buy_signal_telegram.py 실행 시마다 갱신됨. 직접 수정하지 마세요.
// 시장 환경 지표(야후) + 시장 헤드라인(Finnhub). 이 파일이 없어도 대시보드는 정상 동작함.
const MARKET_DATA = {
  "indicators": {
    "vix": {
      "current": 15.800000190734863,
      "prevClose": 15.8100004196167,
      "changeAbs": -0.010000228881835938,
      "changePct": -0.0632525529185178,
      "pctRank": 27.46815286624204,
      "min5y": 11.859999656677246,
      "max5y": 52.33000183105469,
      "ma20": 17.20349988937378,
      "ma60": 17.32849998474121,
      "chg1m": -1.0999994277954102,
      "chg3m": -1.2799997329711914,
      "chg1mPct": -6.508872500738392,
      "chg3mPct": -7.494143669137994,
      "lastDate": "2026-08-06",
      "bars": 1256,
      "symbol": "^VIX",
      "label": "VIX (공포지수)",
      "unit": "",
      "digits": 2
    },
    "us10y": {
      "current": 4.63700008392334,
      "prevClose": 4.617000102996826,
      "changeAbs": 0.019999980926513672,
      "changePct": 0.43318129695366436,
      "pctRank": 96.33466135458167,
      "min5y": 1.2419999837875366,
      "max5y": 4.98799991607666,
      "ma20": 4.626249980926514,
      "ma60": 4.537766647338867,
      "chg1m": 0.06800031661987305,
      "chg3m": 0.28100013732910156,
      "chg1mPct": 1.4882976599494442,
      "chg3mPct": 6.4508755916951515,
      "lastDate": "2026-08-06",
      "bars": 1255,
      "symbol": "^TNX",
      "label": "미국 10년물 금리",
      "unit": "%",
      "digits": 2
    },
    "us3m": {
      "current": 3.7279999256134033,
      "prevClose": 3.7249999046325684,
      "changeAbs": 0.003000020980834961,
      "changePct": 0.08053747805748954,
      "pctRank": 37.211155378486055,
      "min5y": 0.019999999552965164,
      "max5y": 5.3480000495910645,
      "ma20": 3.7227499723434447,
      "ma60": 3.664116664727529,
      "chg1m": 0.004999876022338867,
      "chg3m": 0.12800002098083496,
      "chg1mPct": 0.13429696362448493,
      "chg3mPct": 3.555556232546601,
      "lastDate": "2026-08-06",
      "bars": 1255,
      "symbol": "^IRX",
      "label": "미국 3개월 금리",
      "unit": "%",
      "digits": 2
    },
    "oil": {
      "current": 76.25,
      "prevClose": 75.22000122070312,
      "changeAbs": 1.029998779296875,
      "changePct": 1.3693150260324431,
      "pctRank": 49.2442322991249,
      "min5y": 55.27000045776367,
      "max5y": 123.69999694824219,
      "ma20": 81.42849960327149,
      "ma60": 84.07149988810221,
      "chg1m": 2.7300033569335938,
      "chg3m": -18.830001831054688,
      "chg1mPct": 3.7132800348013313,
      "chg3mPct": -19.8043768073472,
      "lastDate": "2026-08-06",
      "bars": 1257,
      "symbol": "CL=F",
      "label": "WTI 유가",
      "unit": "$",
      "digits": 1
    },
    "dollar": {
      "current": 99.78600311279297,
      "prevClose": 99.69000244140625,
      "changeAbs": 0.09600067138671875,
      "changePct": 0.0962991965449535,
      "pctRank": 34.20843277645187,
      "min5y": 92.04000091552734,
      "max5y": 114.11000061035156,
      "ma20": 100.71030082702637,
      "ma60": 100.22910041809082,
      "chg1m": -1.2639999389648438,
      "chg3m": 1.7660064697265625,
      "chg1mPct": -1.2508658097886678,
      "chg3mPct": 1.8016797900507617,
      "lastDate": "2026-08-06",
      "bars": 1257,
      "symbol": "DX-Y.NYB",
      "label": "달러지수(DXY)",
      "unit": "",
      "digits": 1
    },
    "gold": {
      "current": 4322.89990234375,
      "prevClose": 4245.7998046875,
      "changeAbs": 77.10009765625,
      "changePct": 1.8159145791831495,
      "pctRank": 90.29435163086714,
      "min5y": 1623.300048828125,
      "max5y": 5318.39990234375,
      "ma20": 4076.9750122070313,
      "ma60": 4240.198331705729,
      "chg1m": 252.0,
      "chg3m": -359.0,
      "chg1mPct": 6.190277482748111,
      "chg3mPct": -7.667827324122954,
      "lastDate": "2026-08-06",
      "bars": 1257,
      "symbol": "GC=F",
      "label": "금",
      "unit": "$",
      "digits": 0
    },
    "us30y": {
      "current": 5.182000160217285,
      "prevClose": 5.173999786376953,
      "changeAbs": 0.008000373840332031,
      "changePct": 0.15462648184479771,
      "pctRank": 99.60159362549801,
      "min5y": 1.6779999732971191,
      "max5y": 5.275000095367432,
      "ma20": 5.143000054359436,
      "ma60": 5.044700050354004,
      "chg1m": 0.11700010299682617,
      "chg3m": 0.2390003204345703,
      "chg1mPct": 2.30997239239979,
      "chg3mPct": 4.835127011557345,
      "lastDate": "2026-08-06",
      "bars": 1255,
      "symbol": "^TYX",
      "label": "미국 30년물 금리",
      "unit": "%",
      "digits": 2
    }
  },
  "yieldSpread": 0.9090001583099365,
  "sector": {
    "groups": {
      "빅테크·SW": {
        "ret1m": 6.256473240287219,
        "ret3m": -0.061513454179118465,
        "ret6m": 6.009666469844666,
        "ret1y": 7.167369801813939,
        "winRate": 60.8,
        "count": 9
      },
      "반도체": {
        "ret1m": -7.082367805764067,
        "ret3m": 9.225261789668293,
        "ret6m": 84.1850814101867,
        "ret1y": 242.5143685543964,
        "winRate": 71.5,
        "count": 15
      }
    },
    "pair": [
      "빅테크·SW",
      "반도체"
    ],
    "corr60": 0.20866985285465828,
    "corrPctRank": 2.092050209205021,
    "corrMin5y": 0.11496792019743002,
    "corrMedian5y": 0.7115782038222396,
    "corrMax5y": 0.9346528705205663
  },
  "news": [
    {
      "headline": "Family offices back clean energy and sustainability startups in July as dealmaking holds steady",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/06/family-offices-sustainability-startups-july-dealmaking.html",
      "datetime": 1786021201,
      "headlineKo": "패밀리 오피스는 거래가 꾸준히 진행됨에 따라 7월 청정 에너지 및 지속 가능성 스타트업을 지원합니다."
    },
    {
      "headline": "We're exiting our position in a spin-off play gone wrong",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/06/were-exiting-our-position-in-a-spin-off-play-gone-wrong-.html",
      "datetime": 1786019933,
      "headlineKo": "우리는 잘못된 스핀오프 플레이로 우리의 위치를 ​​벗어나고 있습니다."
    },
    {
      "headline": "EXCLUSIVE: Iran warns Gulf states: tell Trump to desist or we hit you hard - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxOV0dwSU95VFRkYTBfdlZyQVRjek1GbUp0d285UjJ5SUFlV2RvNm00S0dWZ0JBbXFUbGx5OG5pV2drM0l6UGVCTFdNeGxIRU00REVTYkZZa2VZVjlEZzhtcmdBejgtclFqd3VrOUVWSVNQUi14a2s1VEI1TTgxa0U1RmdscUFlVGJqTW9yNFVhQlZDZ1RYMG4wazBwSjlZVG1SMEhpbDNqQm4xNDNVeHN6NQ?oc=5",
      "datetime": 1786017940,
      "headlineKo": "독점: 이란, 걸프 국가들에 경고: 트럼프에게 단념하라고 말하지 않으면 우리가 당신을 강타할 것입니다 - 로이터"
    },
    {
      "headline": "Oil gains as investors cautious over Iran-Oman talks - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxQTmw0WV9PeEJVU0pBczd6UzhWSjdUMlQ2aDhwUGxDbWdvc3hMakw5d3h3Q2wxMXNRakctZjRlTW8wNi1PNnU2eDY0anYxakZYSkZBSVN6SUhJOEF4aW1HSTVnUWREc3k2dFBvUEl0azM4TXFoV1I1S1pJRVlVUm1SakpIeVFqM0wxS2gtMDFvc3ktZ05QYjc3VXRtSHdsNk9hLWUwb3VxTzBFcVhBeUx3Zm82Zw?oc=5",
      "datetime": 1786017796,
      "headlineKo": "이란-오만 회담에 대한 투자자들의 우려로 유가 상승 - Reuters"
    },
    {
      "headline": "Shaquille O'Neal says WNBA players' treatment of Caitlin Clark is a rite of passage",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/06/shaquille-oneal-caitlin-clark-rite-of-passage.html",
      "datetime": 1786017601,
      "headlineKo": "샤킬 오닐은 WNBA 선수들이 케이틀린 클라크를 대하는 것은 통과의례라고 말했습니다."
    },
    {
      "headline": "As Iran war drags on, Americans are bracing for more chaos in Middle East, Reuters/Ipsos poll finds - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiywFBVV95cUxQMXI5TE1EUEdoRUpxYzZfdDNOck5jT29pcUNLdnl4TjE2Q1Y1bnlkZS02MmFzY25KUUwxTnZxNTVxWTQybmkxUExnUWN4OXdTT2xCR3RDcmU2eHpZdEhIMWU5QURfWjl5eDNQaGliMUlRYVhYdEgxY1hPbU1zOS1rTXhRX1F2MjRaajl5cmw1Y3ZrSUpBQnNKMFFWV2E1bHN4NXR3cEFwSWJhMjN0bkxkcFV1UmNiNFpKMjdLQ3REbEt3Z1dUbXB2TlU2MA?oc=5",
      "datetime": 1786013767,
      "headlineKo": "이란 전쟁이 장기화되면서 미국인들은 중동의 더 큰 혼란에 대비하고 있다고 로이터/입소스 여론조사 결과 - Reuters"
    },
    {
      "headline": "Dollar ticks up as markets await Iran deal news, look towards payrolls - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxQT2VsMnRGWG5QTmNmeVNLM21MZHV1dkdiRnBOWnNrZUdicjNhZTB3M3JjLTdJVGk0VTc4VjhEUkxtdUpGZ0J5bV9BMklYVWhSb1lMQkFlWk1JRm5SY3BmcU1tUkhUbWNaRGZDUHhNcW42RU1QZ0Y0ODdxWXZSa1l4OWxfSVlhMEx1ODdCZUI5UlJRUUpmMEJ4Z3lFOERXVWFXRGRjV3h1MjRlQQ?oc=5",
      "datetime": 1786013206,
      "headlineKo": "시장이이란 거래 소식을 기다리고 급여를 기대하면서 달러는 상승합니다 - Reuters"
    },
    {
      "headline": "Morning Bid: Gold stirs - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMilwFBVV95cUxPUVgtbWFpX004ano5Mkw5RkRZWUdETjMwZjJJYzBkMDNDNGNBaElDMTA0Yk9NYy10T0o1eGxSMjdMWGQtVnJZOUdMcXY3QXFYRGtmWGV2Ri1vQ1ItUlNHNkh4T0ZVald5OG9pUkRDOE9xdFgxYVRDMjJiT3lYeGRiR2ZjU1oyekNTalFlOV9COFdTbmdqa0lZ?oc=5",
      "datetime": 1786012931,
      "headlineKo": "아침 입찰: 금반동 - Reuters"
    },
    {
      "headline": "Hadrian valued at nearly $8 billion after fresh funding as money pours into defense tech",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/06/hadrian-defense-tech-ai-manufacturing.html",
      "datetime": 1786010098,
      "headlineKo": "하드리아누스는 국방 기술에 돈이 쏟아지면서 새로운 자금 지원을 받은 후 거의 80억 달러의 가치를 갖게 되었습니다."
    },
    {
      "headline": "Major Gulf bourses tread water amid Iran-Oman talks, Saudi attacks - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxOcmoybDZrTmNjbmJtdGZpdVhGZ2hfNkswOFpjS3hBclJiSzIybTlRQ09sdGY4S2dablB5bGwwMFRJeHZUdHFsZkRzU29DWTZ6aFVLZmE2UFEwdldSN3dZSmlyVkgxMXkzS2pnN2tRMlRRRUtaMVh5UHJadEhUa3FPVkI0c3kyaHNEWFR6MDhkY1BYXzNBQ3p1WkVPRU1EX2JGeVRvbWlOMTJqY1hmakVnakE0RVF3anRLSXZv?oc=5",
      "datetime": 1786003313,
      "headlineKo": "이란-오만 회담, 사우디 공격 속에 주요 걸프 증시가 난관에 부딪혔습니다 - 로이터"
    },
    {
      "headline": "European shares scale record peak on earnings, US-Iran optimism - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxQakF6Y2hyYnJRN2R4aGtqMmpVMWVZVWI1cWR1bjNsaWNVMThaRDVwTU53VnZaUkZlWGpXd1RHZGNqR0pKNnBKTEtBMzRqc01tZ2YwbXdGWkt0d2tabko4ZnVaUHFKNFJnb1VIMjZ1Q0ZPby16YTdmQ2xfcUo5OFJqSWI4Q3JadUNIOFFVb1hUTERJZHY2T0JrTDdhUUswS1NEMXM1SHlWZUJrOVUxWVlR?oc=5",
      "datetime": 1786001874,
      "headlineKo": "유럽 ​​증시는 실적 최고치 기록, 미국-이란 낙관론 - Reuters"
    },
    {
      "headline": "Oil traders double down on Iran deal bet as odds worsen - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxQYTlrUTg0TjljZzBlaVJyRkJnS21MLU9TblltYU1oUm1NLVRqX1NnVEZvM2ZCTlMwXzBtUWk5cE1pSE5ZTnFYeGVtZjNZcnBlaU1iRHdfYlVzN3pyd0VYM3ZXRTJzcHhUYlNMT1ZmRU15eHhqZi1FNkpKa04waEk2YXA2X2QtUVBKcmZtMjRkWDd6anFaQzBJeXlhUXZmZTZxYUxYcU4wUjFNUnliUDk4YWVRb2FCZTFmV1FHQnFWck8wd0k?oc=5",
      "datetime": 1785996000,
      "headlineKo": "석유 거래자들, 확률이 악화되면서 이란 거래에 대한 베팅을 두 배로 늘림 - Reuters"
    }
  ],
  "_fetched_at": 1786024802.1663136,
  "_updated_label": "2026-08-06 23:00"
};
