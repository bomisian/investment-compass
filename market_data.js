// 자동 생성 파일 - buy_signal_telegram.py 실행 시마다 갱신됨. 직접 수정하지 마세요.
// 시장 환경 지표(야후) + 시장 헤드라인(Finnhub). 이 파일이 없어도 대시보드는 정상 동작함.
const MARKET_DATA = {
  "indicators": {
    "vix": {
      "current": 15.40999984741211,
      "prevClose": 15.8100004196167,
      "changeAbs": -0.40000057220458984,
      "changePct": -2.530047827881636,
      "pctRank": 24.203821656050955,
      "min5y": 11.859999656677246,
      "max5y": 52.33000183105469,
      "ma20": 17.183999872207643,
      "ma60": 17.321999979019164,
      "chg1m": -1.489999771118164,
      "chg3m": -1.6700000762939453,
      "chg1mPct": -8.816566892015963,
      "chg3mPct": -9.777518054763464,
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
      "current": 77.80999755859375,
      "prevClose": 75.22000122070312,
      "changeAbs": 2.589996337890625,
      "changePct": 3.4432282582544937,
      "pctRank": 54.09705648369133,
      "min5y": 55.27000045776367,
      "max5y": 123.69999694824219,
      "ma20": 81.50649948120117,
      "ma60": 84.09749984741211,
      "chg1m": 4.290000915527344,
      "chg3m": -17.270004272460938,
      "chg1mPct": 5.835148410513331,
      "chg3mPct": -18.16365580550533,
      "lastDate": "2026-08-06",
      "bars": 1257,
      "symbol": "CL=F",
      "label": "WTI 유가",
      "unit": "$",
      "digits": 1
    },
    "dollar": {
      "current": 99.98600006103516,
      "prevClose": 99.69000244140625,
      "changeAbs": 0.29599761962890625,
      "changePct": 0.29691805836084884,
      "pctRank": 35.958631662688944,
      "min5y": 92.04000091552734,
      "max5y": 114.11000061035156,
      "ma20": 100.72030067443848,
      "ma60": 100.23243370056153,
      "chg1m": -1.0640029907226562,
      "chg3m": 1.96600341796875,
      "chg1mPct": -1.0529470149324724,
      "chg3mPct": 2.0057166754737064,
      "lastDate": "2026-08-06",
      "bars": 1257,
      "symbol": "DX-Y.NYB",
      "label": "달러지수(DXY)",
      "unit": "",
      "digits": 1
    },
    "gold": {
      "current": 4294.2998046875,
      "prevClose": 4245.7998046875,
      "changeAbs": 48.5,
      "changePct": 1.1423053895865376,
      "pctRank": 89.97613365155132,
      "min5y": 1623.300048828125,
      "max5y": 5318.39990234375,
      "ma20": 4075.5450073242187,
      "ma60": 4239.721663411458,
      "chg1m": 223.39990234375,
      "chg3m": -387.60009765625,
      "chg1mPct": 5.487727718756518,
      "chg3mPct": -8.278692533819832,
      "lastDate": "2026-08-06",
      "bars": 1257,
      "symbol": "GC=F",
      "label": "금",
      "unit": "$",
      "digits": 0
    },
    "us30y": {
      "current": 5.210999965667725,
      "prevClose": 5.173999786376953,
      "changeAbs": 0.037000179290771484,
      "changePct": 0.715117526448151,
      "pctRank": 99.76095617529882,
      "min5y": 1.6779999732971191,
      "max5y": 5.275000095367432,
      "ma20": 5.144450044631958,
      "ma60": 5.045183380444844,
      "chg1m": 0.14599990844726562,
      "chg3m": 0.26800012588500977,
      "chg1mPct": 2.8825253069668593,
      "chg3mPct": 5.421811340717959,
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
        "ret1m": 5.930830743538484,
        "ret3m": -0.36779331918531666,
        "ret6m": 5.684780357817654,
        "ret1y": 6.838935695090509,
        "winRate": 60.8,
        "count": 9
      },
      "반도체": {
        "ret1m": -5.921838358659725,
        "ret3m": 10.589471463130607,
        "ret6m": 86.48552972818733,
        "ret1y": 246.79232959770832,
        "winRate": 71.5,
        "count": 15
      }
    },
    "pair": [
      "빅테크·SW",
      "반도체"
    ],
    "corr60": 0.20741817704977286,
    "corrPctRank": 2.092050209205021,
    "corrMin5y": 0.11496792019743002,
    "corrMedian5y": 0.7115782038222396,
    "corrMax5y": 0.9346528705205663
  },
  "news": [
    {
      "headline": "NASA engineer spent $200 to start a side hustle from her closet—now it brings in over $32,000 a month",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/06/how-nasa-engineer-built-lucrative-voiceover-acting-side-hustle.html",
      "datetime": 1786025286,
      "headlineKo": "NASA 엔지니어는 옷장에서 부업을 시작하기 위해 200달러를 썼습니다. 이제 한 달에 32,000달러 이상을 벌어들입니다."
    },
    {
      "headline": "Fox won't renegotiate NFL media rights before current deal expires, CEO Lachlan Murdoch says",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/06/fox-nfl-media-rights-renegotiations-opt-out.html",
      "datetime": 1786024640,
      "headlineKo": "Fox는 현재 계약이 만료되기 전에 NFL 미디어 권리를 재협상하지 않을 것이라고 CEO Lachlan Murdoch는 말했습니다."
    },
    {
      "headline": "Most Gulf bourses in red as markets eye diplomacy - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxOcmoybDZrTmNjbmJtdGZpdVhGZ2hfNkswOFpjS3hBclJiSzIybTlRQ09sdGY4S2dablB5bGwwMFRJeHZUdHFsZkRzU29DWTZ6aFVLZmE2UFEwdldSN3dZSmlyVkgxMXkzS2pnN2tRMlRRRUtaMVh5UHJadEhUa3FPVkI0c3kyaHNEWFR6MDhkY1BYXzNBQ3p1WkVPRU1EX2JGeVRvbWlOMTJqY1hmakVnakE0RVF3anRLSXZv?oc=5",
      "datetime": 1786022101,
      "headlineKo": "시장이 외교를 주시함에 따라 대부분의 걸프 증권 거래소는 빨간색으로 표시됨 - Reuters"
    },
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
      "datetime": 1786019506,
      "headlineKo": "독점: 이란, 걸프 국가들에 경고: 트럼프에게 단념하라고 말하지 않으면 우리가 당신을 강타할 것입니다 - 로이터"
    },
    {
      "headline": "Shaquille O'Neal says WNBA players' treatment of Caitlin Clark is a rite of passage",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/06/shaquille-oneal-caitlin-clark-rite-of-passage.html",
      "datetime": 1786017601,
      "headlineKo": "샤킬 오닐은 WNBA 선수들이 케이틀린 클라크를 대하는 것은 통과의례라고 말했습니다."
    },
    {
      "headline": "Gold hovers near seven-week high on easing rate hike concerns - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxQVWd6ZjFIZXZHQ2JsNi1UdXBvS1JIUm0xYWtjaDQ1UXVOczhzTzZLNEY0ZTRtb1l5N2lrY09ERHFySlMyakJJNndhRUx5M0FabFZ5TllJZWZPU05na2VqMkRVckJ2VndLdUlFUGd1NklHQlN6V1VJUzRxS09jUmtVVWhMTGRuVlN3YzctZjhBWVI2UUZkQkJqZ0NvdF9uQ1I0RGtCNVNORThqQQ?oc=5",
      "datetime": 1786016494,
      "headlineKo": "금값은 금리인상 우려 완화에 7주 최고치 부근 맴돌다 - 로이터"
    },
    {
      "headline": "As Iran war drags on, Americans are bracing for more chaos in Middle East, Reuters/Ipsos poll finds - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiywFBVV95cUxQMXI5TE1EUEdoRUpxYzZfdDNOck5jT29pcUNLdnl4TjE2Q1Y1bnlkZS02MmFzY25KUUwxTnZxNTVxWTQybmkxUExnUWN4OXdTT2xCR3RDcmU2eHpZdEhIMWU5QURfWjl5eDNQaGliMUlRYVhYdEgxY1hPbU1zOS1rTXhRX1F2MjRaajl5cmw1Y3ZrSUpBQnNKMFFWV2E1bHN4NXR3cEFwSWJhMjN0bkxkcFV1UmNiNFpKMjdLQ3REbEt3Z1dUbXB2TlU2MA?oc=5",
      "datetime": 1786013767,
      "headlineKo": "이란 전쟁이 장기화되면서 미국인들은 중동의 더 큰 혼란에 대비하고 있다고 로이터/입소스 여론조사 결과 - Reuters"
    },
    {
      "headline": "Oil traders double down on Iran deal bet as odds worsen - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxQYTlrUTg0TjljZzBlaVJyRkJnS21MLU9TblltYU1oUm1NLVRqX1NnVEZvM2ZCTlMwXzBtUWk5cE1pSE5ZTnFYeGVtZjNZcnBlaU1iRHdfYlVzN3pyd0VYM3ZXRTJzcHhUYlNMT1ZmRU15eHhqZi1FNkpKa04waEk2YXA2X2QtUVBKcmZtMjRkWDd6anFaQzBJeXlhUXZmZTZxYUxYcU4wUjFNUnliUDk4YWVRb2FCZTFmV1FHQnFWck8wd0k?oc=5",
      "datetime": 1786013149,
      "headlineKo": "석유 거래자들, 확률이 악화되면서 이란 거래에 대한 베팅을 두 배로 늘림 - Reuters"
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
    }
  ],
  "_fetched_at": 1786035602.2020864,
  "_updated_label": "2026-08-07 02:00"
};
