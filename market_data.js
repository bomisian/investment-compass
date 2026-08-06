// 자동 생성 파일 - buy_signal_telegram.py 실행 시마다 갱신됨. 직접 수정하지 마세요.
// 시장 환경 지표(야후) + 시장 헤드라인(Finnhub). 이 파일이 없어도 대시보드는 정상 동작함.
const MARKET_DATA = {
  "indicators": {
    "vix": {
      "current": 15.369999885559082,
      "prevClose": 15.8100004196167,
      "changeAbs": -0.4400005340576172,
      "changePct": -2.7830520074602543,
      "pctRank": 23.56687898089172,
      "min5y": 11.859999656677246,
      "max5y": 52.33000183105469,
      "ma20": 17.18199987411499,
      "ma60": 17.32133331298828,
      "chg1m": -1.5299997329711914,
      "chg3m": -1.7100000381469727,
      "chg1mPct": -9.053253062169295,
      "chg3mPct": -10.011709869937361,
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
      "current": 3.734999895095825,
      "prevClose": 3.7249999046325684,
      "changeAbs": 0.009999990463256836,
      "changePct": 0.2684561266919879,
      "pctRank": 37.76892430278884,
      "min5y": 0.019999999552965164,
      "max5y": 5.3480000495910645,
      "ma20": 3.723099970817566,
      "ma60": 3.6642333308855695,
      "chg1m": 0.011999845504760742,
      "chg3m": 0.13499999046325684,
      "chg1mPct": 0.3223165550609866,
      "chg3mPct": 3.749999834431538,
      "lastDate": "2026-08-06",
      "bars": 1255,
      "symbol": "^IRX",
      "label": "미국 3개월 금리",
      "unit": "%",
      "digits": 2
    },
    "oil": {
      "current": 77.22000122070312,
      "prevClose": 75.22000122070312,
      "changeAbs": 2.0,
      "changePct": 2.658867279371343,
      "pctRank": 52.426412092283215,
      "min5y": 55.27000045776367,
      "max5y": 123.69999694824219,
      "ma20": 81.47699966430665,
      "ma60": 84.08766657511393,
      "chg1m": 3.7000045776367188,
      "chg3m": -17.860000610351562,
      "chg1mPct": 5.032650634629296,
      "chg3mPct": -18.784182021879385,
      "lastDate": "2026-08-06",
      "bars": 1257,
      "symbol": "CL=F",
      "label": "WTI 유가",
      "unit": "$",
      "digits": 1
    },
    "dollar": {
      "current": 99.95800018310547,
      "prevClose": 99.69000244140625,
      "changeAbs": 0.26799774169921875,
      "changePct": 0.26883111158186296,
      "pctRank": 35.64041368337311,
      "min5y": 92.04000091552734,
      "max5y": 114.11000061035156,
      "ma20": 100.71890068054199,
      "ma60": 100.23196703592936,
      "chg1m": -1.0920028686523438,
      "chg3m": 1.9380035400390625,
      "chg1mPct": -1.0806559482170623,
      "chg3mPct": 1.9771512001741636,
      "lastDate": "2026-08-06",
      "bars": 1257,
      "symbol": "DX-Y.NYB",
      "label": "달러지수(DXY)",
      "unit": "",
      "digits": 1
    },
    "gold": {
      "current": 4301.2001953125,
      "prevClose": 4245.7998046875,
      "changeAbs": 55.400390625,
      "changePct": 1.304828140126536,
      "pctRank": 90.05568814638028,
      "min5y": 1623.300048828125,
      "max5y": 5318.39990234375,
      "ma20": 4075.890026855469,
      "ma60": 4239.836669921875,
      "chg1m": 230.30029296875,
      "chg3m": -380.69970703125,
      "chg1mPct": 5.657233007280739,
      "chg3mPct": -8.131308122172207,
      "lastDate": "2026-08-06",
      "bars": 1257,
      "symbol": "GC=F",
      "label": "금",
      "unit": "$",
      "digits": 0
    },
    "us30y": {
      "current": 5.2139997482299805,
      "prevClose": 5.173999786376953,
      "changeAbs": 0.039999961853027344,
      "changePct": 0.7730955451205567,
      "pctRank": 99.76095617529882,
      "min5y": 1.6779999732971191,
      "max5y": 5.275000095367432,
      "ma20": 5.144600033760071,
      "ma60": 5.045233376820883,
      "chg1m": 0.14899969100952148,
      "chg3m": 0.2709999084472656,
      "chg1mPct": 2.9417510232228636,
      "chg3mPct": 5.482498831300353,
      "lastDate": "2026-08-06",
      "bars": 1255,
      "symbol": "^TYX",
      "label": "미국 30년물 금리",
      "unit": "%",
      "digits": 2
    }
  },
  "yieldSpread": 0.937000036239624,
  "sector": {
    "groups": {
      "빅테크·SW": {
        "ret1m": 5.955244253404546,
        "ret3m": -0.3448314312844647,
        "ret6m": 5.709137161307698,
        "ret1y": 6.8635584927440485,
        "winRate": 60.8,
        "count": 9
      },
      "반도체": {
        "ret1m": -6.3930859548909975,
        "ret3m": 10.0355169460965,
        "ret6m": 85.55140371973748,
        "ret1y": 245.05520964486104,
        "winRate": 71.5,
        "count": 15
      }
    },
    "pair": [
      "빅테크·SW",
      "반도체"
    ],
    "corr60": 0.20813431701211405,
    "corrPctRank": 2.092050209205021,
    "corrMin5y": 0.11496792019743002,
    "corrMedian5y": 0.7115782038222396,
    "corrMax5y": 0.9346528705205663
  },
  "news": [
    {
      "headline": "Jim Cramer says this is a 'good rule' to follow when stocks double",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/06/jim-cramer-says-this-is-a-good-rule-to-follow-when-stocks-double-.html",
      "datetime": 1786034193,
      "headlineKo": "Jim Cramer는 이것이 주식이 두 배로 늘어날 때 따라야 할 '좋은 규칙'이라고 말합니다."
    },
    {
      "headline": "Houthi attacks kill at least 30 Yemeni government troops - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxOcmtNNXV0bmtoZ3g2MVQzTUktLUl0U2R2YlA3Qk83WFZmQXJMYjQ0LU1Za0dHQklueDZ6N2JwQzhvV0VpZTdNVkI0YjdlMWlfcmUwSVU2c3YtUDJCdk1pb3YwY1dFYXdMd3FuMUxMb2dnSEVUZHVtWktubVNjU2RSUnNaLS16Y0hsclh5Wk1Kb09oQzRvT3pSNWZqblZfN2NIQzBfYmw1RkxEbll1Mnc?oc=5",
      "datetime": 1786030900,
      "headlineKo": "후티 반군 공격으로 예멘 정부군 최소 30명 사망 - 로이터 통신"
    },
    {
      "headline": "Proposed Hormuz passage deal not feasible for shipping industry, sources say - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxQajNmWTdWUHQ1RkRPd0FjWUUzSkd5cTNhN1NxREdIUUxGZklfbGEycml6emw1VThlRXk3YU5aakNULU5DanUwclZDWEpLUTg0c0xjRElxaTlKU2NiRHJzT1JiVmltOTVlQ1hNcGkxaTNjYndSX29leFl6S1l0OGxJd0hfSGZKOEwzZ3JVOURWVGgtY2JWUDZ2aXFoTWNDZV83eXllTko1WjVCSmpCb2IwM0ZNTTRTdDdxaXJGOHhZS2laUTg?oc=5",
      "datetime": 1786027840,
      "headlineKo": "소식통에 따르면 호르무즈 통과 거래는 해운업계에 타당하지 않다고 한다 - 로이터 통신"
    },
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
    }
  ],
  "_fetched_at": 1786039219.962258,
  "_updated_label": "2026-08-07 03:00"
};
