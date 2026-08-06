// 자동 생성 파일 - buy_signal_telegram.py 실행 시마다 갱신됨. 직접 수정하지 마세요.
// 시장 환경 지표(야후) + 시장 헤드라인(Finnhub). 이 파일이 없어도 대시보드는 정상 동작함.
const MARKET_DATA = {
  "indicators": {
    "vix": {
      "current": 15.949999809265137,
      "prevClose": 15.8100004196167,
      "changeAbs": 0.1399993896484375,
      "changePct": 0.8855116124774376,
      "pctRank": 28.90127388535032,
      "min5y": 11.859999656677246,
      "max5y": 52.33000183105469,
      "ma20": 17.21099987030029,
      "ma60": 17.33099997838338,
      "chg1m": -0.9499998092651367,
      "chg3m": -1.130000114440918,
      "chg1mPct": -5.621300773424244,
      "chg3mPct": -6.615925758129208,
      "lastDate": "2026-08-06",
      "bars": 1256,
      "symbol": "^VIX",
      "label": "VIX (공포지수)",
      "unit": "",
      "digits": 2
    },
    "us10y": {
      "current": 4.640999794006348,
      "prevClose": 4.617000102996826,
      "changeAbs": 0.023999691009521484,
      "changePct": 0.5198113596303288,
      "pctRank": 96.49402390438247,
      "min5y": 1.2419999837875366,
      "max5y": 4.98799991607666,
      "ma20": 4.626449966430664,
      "ma60": 4.537833309173584,
      "chg1m": 0.07200002670288086,
      "chg3m": 0.2849998474121094,
      "chg1mPct": 1.5758378281856174,
      "chg3mPct": 6.5426963017972035,
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
      "current": 76.2699966430664,
      "prevClose": 75.22000122070312,
      "changeAbs": 1.0499954223632812,
      "changePct": 1.3958992360057108,
      "pctRank": 49.2442322991249,
      "min5y": 55.27000045776367,
      "max5y": 123.69999694824219,
      "ma20": 81.4294994354248,
      "ma60": 84.07183316548665,
      "chg1m": 2.75,
      "chg3m": -18.81000518798828,
      "chg1mPct": 3.740478952074802,
      "chg3mPct": -19.78334542042954,
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
      "current": 4313.0,
      "prevClose": 4245.7998046875,
      "changeAbs": 67.2001953125,
      "changePct": 1.5827452636440562,
      "pctRank": 90.21479713603819,
      "min5y": 1623.300048828125,
      "max5y": 5318.39990234375,
      "ma20": 4076.480017089844,
      "ma60": 4240.033333333334,
      "chg1m": 242.10009765625,
      "chg3m": -368.89990234375,
      "chg1mPct": 5.9470904090976315,
      "chg3mPct": -7.879277858099432,
      "lastDate": "2026-08-06",
      "bars": 1257,
      "symbol": "GC=F",
      "label": "금",
      "unit": "$",
      "digits": 0
    },
    "us30y": {
      "current": 5.191999912261963,
      "prevClose": 5.173999786376953,
      "changeAbs": 0.018000125885009766,
      "changePct": 0.3478957601120079,
      "pctRank": 99.6812749003984,
      "min5y": 1.6779999732971191,
      "max5y": 5.275000095367432,
      "ma20": 5.14350004196167,
      "ma60": 5.044866712888082,
      "chg1m": 0.1269998550415039,
      "chg3m": 0.24900007247924805,
      "chg1mPct": 2.507400860942895,
      "chg3mPct": 5.037428293548025,
      "lastDate": "2026-08-06",
      "bars": 1255,
      "symbol": "^TYX",
      "label": "미국 30년물 금리",
      "unit": "%",
      "digits": 2
    }
  },
  "yieldSpread": 0.9129998683929443,
  "sector": {
    "groups": {
      "빅테크·SW": {
        "ret1m": 5.349676043073703,
        "ret3m": 1.2883055163303903,
        "ret6m": 3.677987834118368,
        "ret1y": 8.127628454818115,
        "winRate": 60.8,
        "count": 9
      },
      "반도체": {
        "ret1m": -4.350390576685815,
        "ret3m": 16.411297692695783,
        "ret6m": 75.09321458192848,
        "ret1y": 241.53606099666445,
        "winRate": 71.5,
        "count": 15
      }
    },
    "pair": [
      "빅테크·SW",
      "반도체"
    ],
    "corr60": 0.2050804410535708,
    "corrPctRank": 2.0100502512562812,
    "corrMin5y": 0.11496792019743002,
    "corrMedian5y": 0.7115784818334243,
    "corrMax5y": 0.9346528705205663
  },
  "news": [
    {
      "headline": "We're exiting our position in a spin-off play gone wrong",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/06/were-exiting-our-position-in-a-spin-off-play-gone-wrong-.html",
      "datetime": 1786019933,
      "headlineKo": "우리는 잘못된 스핀오프 플레이로 우리의 위치를 ​​벗어나고 있습니다."
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
      "headline": "Gulf shipping traffic down after Houthis say they attacked Saudi tanker - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxNVTZaTFF1d0RtUUU0YWlhZ0RkNW9nXzcwWVhfdUlaMnByRGhLcDVCbFhOeE0xa0dJZk5yaU1DaUVKSXpHMTZCY2pMS0NoZERmUWRVRGtjSDVuenBmTjBlOHZZX3MzVzBZS3lMSm9EUXpneVlCaC1NcW9tQ1YzN0ZJMGlmdmJmWlcxMlpMQjZfUEJIdHMtNFhCeXE1QjFXMGh1RGItaDFZaXZPcFNwWWM1Q3R3ZUxtUGlSZ1NoVWRuMmpMVkU?oc=5",
      "datetime": 1785994620,
      "headlineKo": "Houthis가 사우디 유조선을 공격했다고 말한 후 걸프 해운 교통량 감소 - Reuters"
    },
    {
      "headline": "Morning Bid: AI stocks learn to fly — but ain't got wings - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxNLVdyc053UEtXR1QxVFh6Q0xDYjlVYUxyaXdYZG05c0lkaHhoQnhZSnJGaXhPTFhoMkEwMUIzdE0tV2F0WGI1NGtxdTJGWklQV3JfYjRmU2dYXzQzNXBpeDRhT09ITGN3aGM4ekdDb2xzejNjUldiSVY5U1ZlWFJFaDYycG8ybzZKYlY1NG5R?oc=5",
      "datetime": 1785991920,
      "headlineKo": "아침 입찰: AI 주식은 나는 법을 배우지만 날개는 없습니다 - Reuters"
    },
    {
      "headline": "EXCLUSIVE: Sinopec steps up Russian oil imports to offset Mideast supply cuts, traders and tracker say - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiywFBVV95cUxPNldJczB0MXMxMnZEaExVV3M1T0ZTM3JxUG1Fci1GVGNMaFd4c1ZsQnh0enBKVUdoSXJScU9aVDgzaFpqTkl5NEZ1LUlTQzhXWWRodjZDU25JeExHLXJDNXNnZ2IyOGxKXzZHaHBRVXczS05wY1JsdU5UcllxVjR4TnNkVXU2RzdIaDhrN21zaWhhYlJOeXJ3cGh5T0hSeGItVlVzbWhGY19MU2JMcEFjdUJrdUQyd2NFVVF3S0Q5R2NsMVAwMnQ1ZXc0SQ?oc=5",
      "datetime": 1785990360,
      "headlineKo": "독점: Sinopec은 중동 공급 삭감을 상쇄하기 위해 러시아 석유 수입을 늘리고 있다고 거래자와 추적자는 말합니다 - Reuters"
    },
    {
      "headline": "Israel strikes south Lebanon after soldiers killed, talks continue in Rome - reuters.com",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxORWNLdnd6QTJNaVRGaG5aOVJqRjBnOFAzT05ubjAxY2dya0luUWg4Rk5xZU5KOXF2aEEzY3pQcDlLWXhvQmlNcXBKMTk4M09lWHFqM0ltOXlyeXdxQTFVRTZTTDR2Rl9pNFlDQm1PdFhpRE1zc1hhTzQ2MkZPR0lFbmZ4WXVLRzVLcmdOLXc1QVhUNm1GQlY4MWgxekxSM1NtOGNPS0tlbnJlSDRybFdZNFlqM2k0b1NNeWFaZA?oc=5",
      "datetime": 1785986820,
      "headlineKo": "이스라엘, 군인 사망 후 레바논 남부 공습, 로마에서 회담 계속 - reuters.com"
    }
  ],
  "_fetched_at": 1786021261.2430549,
  "_updated_label": "2026-08-06 22:01"
};
