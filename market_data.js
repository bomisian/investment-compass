// 자동 생성 파일 - buy_signal_telegram.py 실행 시마다 갱신됨. 직접 수정하지 마세요.
// 시장 환경 지표(야후) + 시장 헤드라인(Finnhub). 이 파일이 없어도 대시보드는 정상 동작함.
const MARKET_DATA = {
  "indicators": {
    "vix": {
      "current": 15.5,
      "prevClose": 15.8100004196167,
      "changeAbs": -0.3100004196166992,
      "changePct": -1.9607869158058815,
      "pctRank": 25.159235668789808,
      "min5y": 11.859999656677246,
      "max5y": 52.33000183105469,
      "ma20": 17.188499879837035,
      "ma60": 17.323499981562296,
      "chg1m": -1.3999996185302734,
      "chg3m": -1.5799999237060547,
      "chg1mPct": -8.284021598410106,
      "chg3mPct": -9.250585074728871,
      "lastDate": "2026-08-06",
      "bars": 1256,
      "symbol": "^VIX",
      "label": "VIX (공포지수)",
      "unit": "",
      "digits": 2
    },
    "us10y": {
      "current": 4.638999938964844,
      "prevClose": 4.617000102996826,
      "changeAbs": 0.021999835968017578,
      "changePct": 0.47649632829199656,
      "pctRank": 96.49402390438247,
      "min5y": 1.2419999837875366,
      "max5y": 4.98799991607666,
      "ma20": 4.626349973678589,
      "ma60": 4.537799978256226,
      "chg1m": 0.07000017166137695,
      "chg3m": 0.28299999237060547,
      "chg1mPct": 1.5320677440675308,
      "chg3mPct": 6.496785946746178,
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
      "current": 76.68000030517578,
      "prevClose": 75.22000122070312,
      "changeAbs": 1.4599990844726562,
      "changePct": 1.9409718968082315,
      "pctRank": 50.35799522673031,
      "min5y": 55.27000045776367,
      "max5y": 123.69999694824219,
      "ma20": 81.44999961853027,
      "ma60": 84.07866655985514,
      "chg1m": 3.160003662109375,
      "chg3m": -18.400001525878906,
      "chg1mPct": 4.298155340581604,
      "chg3mPct": -19.352125758867164,
      "lastDate": "2026-08-06",
      "bars": 1257,
      "symbol": "CL=F",
      "label": "WTI 유가",
      "unit": "$",
      "digits": 1
    },
    "dollar": {
      "current": 99.8740005493164,
      "prevClose": 99.69000244140625,
      "changeAbs": 0.18399810791015625,
      "changePct": 0.18457027124490533,
      "pctRank": 34.84486873508354,
      "min5y": 92.04000091552734,
      "max5y": 114.11000061035156,
      "ma20": 100.71470069885254,
      "ma60": 100.23056704203287,
      "chg1m": -1.1760025024414062,
      "chg3m": 1.85400390625,
      "chg1mPct": -1.1637827480708316,
      "chg3mPct": 1.8914547742755365,
      "lastDate": "2026-08-06",
      "bars": 1257,
      "symbol": "DX-Y.NYB",
      "label": "달러지수(DXY)",
      "unit": "",
      "digits": 1
    },
    "gold": {
      "current": 4324.89990234375,
      "prevClose": 4245.7998046875,
      "changeAbs": 79.10009765625,
      "changePct": 1.863019956073316,
      "pctRank": 90.29435163086714,
      "min5y": 1623.300048828125,
      "max5y": 5318.39990234375,
      "ma20": 4077.0750122070312,
      "ma60": 4240.231665039062,
      "chg1m": 254.0,
      "chg3m": -357.0,
      "chg1mPct": 6.239406669119128,
      "chg3mPct": -7.625109623152911,
      "lastDate": "2026-08-06",
      "bars": 1257,
      "symbol": "GC=F",
      "label": "금",
      "unit": "$",
      "digits": 0
    },
    "us30y": {
      "current": 5.184999942779541,
      "prevClose": 5.173999786376953,
      "changeAbs": 0.01100015640258789,
      "changePct": 0.2126045005172034,
      "pctRank": 99.60159362549801,
      "min5y": 1.6779999732971191,
      "max5y": 5.275000095367432,
      "ma20": 5.143150043487549,
      "ma60": 5.044750046730042,
      "chg1m": 0.11999988555908203,
      "chg3m": 0.24200010299682617,
      "chg1mPct": 2.3691981086557945,
      "chg3mPct": 4.8958145021397375,
      "lastDate": "2026-08-06",
      "bars": 1255,
      "symbol": "^TYX",
      "label": "미국 30년물 금리",
      "unit": "%",
      "digits": 2
    }
  },
  "yieldSpread": 0.9110000133514404,
  "sector": {
    "groups": {
      "빅테크·SW": {
        "ret1m": 6.584051941045677,
        "ret3m": 0.24658748856922763,
        "ret6m": 6.336484288571809,
        "ret1y": 7.497756710891856,
        "winRate": 60.8,
        "count": 9
      },
      "반도체": {
        "ret1m": -5.723983133868138,
        "ret3m": 10.822051525859067,
        "ret6m": 86.8777263417374,
        "ret1y": 247.52166649302455,
        "winRate": 71.5,
        "count": 15
      }
    },
    "pair": [
      "빅테크·SW",
      "반도체"
    ],
    "corr60": 0.2079221872466756,
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
      "headline": "As Iran war drags on, Americans are bracing for more chaos in Middle East, Reuters/Ipsos poll finds - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiywFBVV95cUxQMXI5TE1EUEdoRUpxYzZfdDNOck5jT29pcUNLdnl4TjE2Q1Y1bnlkZS02MmFzY25KUUwxTnZxNTVxWTQybmkxUExnUWN4OXdTT2xCR3RDcmU2eHpZdEhIMWU5QURfWjl5eDNQaGliMUlRYVhYdEgxY1hPbU1zOS1rTXhRX1F2MjRaajl5cmw1Y3ZrSUpBQnNKMFFWV2E1bHN4NXR3cEFwSWJhMjN0bkxkcFV1UmNiNFpKMjdLQ3REbEt3Z1dUbXB2TlU2MA?oc=5",
      "datetime": 1786013767,
      "headlineKo": "이란 전쟁이 장기화되면서 미국인들은 중동의 더 큰 혼란에 대비하고 있다고 로이터/입소스 여론조사 결과 - Reuters"
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
  "_fetched_at": 1786028486.8946872,
  "_updated_label": "2026-08-07 00:01"
};
