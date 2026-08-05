// 자동 생성 파일 - buy_signal_telegram.py 실행 시마다 갱신됨. 직접 수정하지 마세요.
// 시장 환경 지표(야후) + 시장 헤드라인(Finnhub). 이 파일이 없어도 대시보드는 정상 동작함.
const MARKET_DATA = {
  "indicators": {
    "vix": {
      "current": 16.84000015258789,
      "prevClose": 16.5,
      "changeAbs": 0.3400001525878906,
      "changePct": 2.0606069853811553,
      "pctRank": 39.490445859872615,
      "min5y": 11.859999656677246,
      "max5y": 52.33000183105469,
      "ma20": 17.25699987411499,
      "ma60": 17.382166639963785,
      "chg1m": 0.7100009918212891,
      "chg3m": -0.5499992370605469,
      "chg1mPct": 4.4017422737890906,
      "chg3mPct": -3.1627329290646164,
      "lastDate": "2026-08-05",
      "bars": 1256,
      "symbol": "^VIX",
      "label": "VIX (공포지수)",
      "unit": "",
      "digits": 2
    },
    "us10y": {
      "current": 4.61899995803833,
      "prevClose": 4.626999855041504,
      "changeAbs": -0.007999897003173828,
      "changePct": -0.17289598560192887,
      "pctRank": 95.2191235059761,
      "min5y": 1.2170000076293945,
      "max5y": 4.98799991607666,
      "ma20": 4.621449971199036,
      "ma60": 4.534016640981038,
      "chg1m": 0.09000015258789062,
      "chg3m": 0.20300006866455078,
      "chg1mPct": 1.9871970954730371,
      "chg3mPct": 4.5969219599173865,
      "lastDate": "2026-08-05",
      "bars": 1255,
      "symbol": "^TNX",
      "label": "미국 10년물 금리",
      "unit": "%",
      "digits": 2
    },
    "us3m": {
      "current": 3.7300000190734863,
      "prevClose": 3.7300000190734863,
      "changeAbs": 0.0,
      "changePct": 0.0,
      "pctRank": 37.29083665338646,
      "min5y": 0.019999999552965164,
      "max5y": 5.3480000495910645,
      "ma20": 3.720699977874756,
      "ma60": 3.662066666285197,
      "chg1m": 0.005000114440917969,
      "chg3m": 0.13000011444091797,
      "chg1mPct": 0.1342312635954598,
      "chg3mPct": 3.6111143856873613,
      "lastDate": "2026-08-05",
      "bars": 1255,
      "symbol": "^IRX",
      "label": "미국 3개월 금리",
      "unit": "%",
      "digits": 2
    },
    "oil": {
      "current": 76.12000274658203,
      "prevClose": 75.7699966430664,
      "changeAbs": 0.350006103515625,
      "changePct": 0.4619323202090356,
      "pctRank": 49.00556881463803,
      "min5y": 55.27000045776367,
      "max5y": 123.69999694824219,
      "ma20": 81.26499977111817,
      "ma60": 84.45016657511393,
      "chg1m": 5.680000305175781,
      "chg3m": -26.149993896484375,
      "chg1mPct": 8.063600380906498,
      "chg3mPct": -25.569565615368838,
      "lastDate": "2026-08-05",
      "bars": 1257,
      "symbol": "CL=F",
      "label": "WTI 유가",
      "unit": "$",
      "digits": 1
    },
    "dollar": {
      "current": 99.72000122070312,
      "prevClose": 99.88999938964844,
      "changeAbs": -0.1699981689453125,
      "changePct": -0.17018537389532643,
      "pctRank": 33.73110580747812,
      "min5y": 92.04000091552734,
      "max5y": 114.11000061035156,
      "ma20": 100.76950073242188,
      "ma60": 100.19883371988932,
      "chg1m": -1.4199981689453125,
      "chg3m": 1.2399978637695312,
      "chg1mPct": -1.4039926611771838,
      "chg3mPct": 1.2591366993309794,
      "lastDate": "2026-08-05",
      "bars": 1257,
      "symbol": "DX-Y.NYB",
      "label": "달러지수(DXY)",
      "unit": "",
      "digits": 1
    },
    "gold": {
      "current": 4253.2998046875,
      "prevClose": 4095.39990234375,
      "changeAbs": 157.89990234375,
      "changePct": 3.8555429532873142,
      "pctRank": 89.73747016706443,
      "min5y": 1623.300048828125,
      "max5y": 5318.39990234375,
      "ma20": 4067.7350219726563,
      "ma60": 4246.920003255208,
      "chg1m": 108.0,
      "chg3m": -302.5,
      "chg1mPct": 2.6053604103103405,
      "chg3mPct": -6.639887900446268,
      "lastDate": "2026-08-05",
      "bars": 1257,
      "symbol": "GC=F",
      "label": "금",
      "unit": "$",
      "digits": 0
    },
    "us30y": {
      "current": 5.166999816894531,
      "prevClose": 5.190000057220459,
      "changeAbs": -0.023000240325927734,
      "changePct": -0.4431645486001339,
      "pctRank": 99.44223107569721,
      "min5y": 1.6779999732971191,
      "max5y": 5.275000095367432,
      "ma20": 5.136200046539306,
      "ma60": 5.0413167158762615,
      "chg1m": 0.12399959564208984,
      "chg3m": 0.1829996109008789,
      "chg1mPct": 2.458845730752204,
      "chg3mPct": 3.6717416399944662,
      "lastDate": "2026-08-05",
      "bars": 1255,
      "symbol": "^TYX",
      "label": "미국 30년물 금리",
      "unit": "%",
      "digits": 2
    }
  },
  "yieldSpread": 0.8889999389648438,
  "sector": {
    "groups": {
      "빅테크·SW": {
        "ret1m": 6.767739938759965,
        "ret3m": 2.363320586886797,
        "ret6m": 3.5619018916986267,
        "ret1y": 11.601934429164885,
        "winRate": 60.8,
        "count": 9
      },
      "반도체": {
        "ret1m": -7.5352621050268525,
        "ret3m": 25.20896763808935,
        "ret6m": 76.14108427241555,
        "ret1y": 256.382901283204,
        "winRate": 71.5,
        "count": 15
      }
    },
    "pair": [
      "빅테크·SW",
      "반도체"
    ],
    "corr60": 0.20209276744737908,
    "corrPctRank": 1.9262981574539362,
    "corrMin5y": 0.11496792019743002,
    "corrMedian5y": 0.7115784818334243,
    "corrMax5y": 0.9346528705205663
  },
  "news": [
    {
      "headline": "Stock bears obliterated as Nasdaq 100 logs top 10 bullish stat of past decade",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/05/stock-bears-obliterated-as-nasdaq-logs-top-10-bullish-stat-of-past-decade.html",
      "datetime": 1785932566,
      "headlineKo": "나스닥 100이 지난 10년 동안 상위 10개 강세 통계를 기록하면서 주식 약세는 사라졌습니다."
    },
    {
      "headline": "UN rights chief says Iran executed at least 56 people since March - reuters.com",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMitwFBVV95cUxQeW9QZjd0R3djcFhWMjBZSmhadjhVekQyU0JzYW03NWdpN3VWMVZjelZuX0Rqa0RlbkZBRXF2YkFGcFBBZk93X3U4Y01neXEybmh3QlRrcnp2WEQ2LV9Ldk9DbTlLNThQTUlEOXNrYlZCdkVzeGpGcEdvYmFhYjBEM2YxaFVPY0FWSS1TblRuMFM1TDF3MmlJRFBtWm9oLUhzY0dtQlZmblpRTEpscTdxenEzclJSbG8?oc=5",
      "datetime": 1785925918,
      "headlineKo": "유엔 인권대표, 이란이 3월 이후 최소 56명을 처형했다고 밝혔습니다."
    },
    {
      "headline": "Yemen's Houthis say they attacked Saudi oil tanker in Red Sea - reuters.com",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxNWEQwU2pxeTRYSXhNQWtrT3hmNFhmOUx6eVUzUUt4aVBtOEpub01Fa3U5S0ZOYXRmU2oyb0t4WEpRRXZ3VmwxWksyYkNRcF9GbFJvbEpkMGxWWVY5alo2NS1LdDFzMWVPdmYtV082T3JOaVpoYW5NTFNncUxHZndSdnUzMXdWWHNXQWQ3NXZXMy02MDloQ3dWTHJhWHBfS2pNVnZoUXBEcVZKQm1HZXl5Ug?oc=5",
      "datetime": 1785914877,
      "headlineKo": "예멘 후티 반군, 홍해에서 사우디 유조선 공격했다고 주장 - reuters.com"
    },
    {
      "headline": "US and Iran having 'very good discussions', Trump says - reuters.com",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxQUFpfZEh3NVhNLURNVl9ETWp2ak5nZEx4d0JYQ19WZ3Z6bTl3V2wyUzVLQmFnTkJrZTZtVXd1cnp2dkdXUmh0d1FXUmhfbGQ1a3dKY1ZzQ0pXQTdUcS02X1llNkdFbzFLN0k2YXk2X2JEUTVCV1RBeGdUaFA2VGFzSW9LYlRDQm5senFDSzFVRkxHaXdSazRBWUlTT1pjY00yU1Qw?oc=5",
      "datetime": 1785906660,
      "headlineKo": "트럼프 “미국과 이란 매우 좋은 논의 중” - reuters.com"
    },
    {
      "headline": "Trump says US held 'all-day negotiation' with Iran on Tuesday - reuters.com",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxOdjBkc2xFczRwS1pfZ0VISDd3R0NGc0phaktLZVFaM21pZW1ncF91VF9YSHdHc3hob2Mxc25zRmJxYlYwZFI3QXkwVTBTS0dtT3dDY3V2Nnk1SWQ3ZnF1MmZyLWoteVNENlFKdkc1QkpmTklvc0RaX3EtTndVOFBsZG0tYmJxallWYXFnRmFLQmJfaWJkRWk3TEN1QVBCOVU?oc=5",
      "datetime": 1785905280,
      "headlineKo": "트럼프, 미국이 화요일 이란과 '하루 종일 협상'을 가졌다고 밝혔습니다 - reuters.com"
    },
    {
      "headline": "China eases controls on fuel exports for a second month, sources say - reuters.com",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxNbHRMR3J2NzJaT2hKV1ZTem4wMWhSQVF4NnNNQ19WNXFLaUNVamQ5Slg4NjB6Y0ZpWkN0SWYxeFZrVnF5QXhGSXl6UnNyMXRFVXRQVUtsaURERFRDM25FaW9DQW9QRDZPdmpuMTNGdHVpSFNPcG1Da0VtMXNpVk1OVXVMVlVFS3RHekhiT19FelYwMFFGMVI5QnNzNkJUY0tQMWxMUk5RR0hIWDVyN293?oc=5",
      "datetime": 1785904620,
      "headlineKo": "중국, 두 달째 연료 수출 규제 완화 - 소식통에 따르면 - reuters.com"
    },
    {
      "headline": "Gulf shipping traffic steady amid uncertainty of peace talks - reuters.com",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxQaWpxYUZIYkdaMkhoNVRrM2ZkZ3NYdWh4aUJEb2pOa29zOFBROGFHdmxwNDZZOHhicHpOOGVlS0FGTC1QdHR4UmRVbmtacWZrc3J4empuUEt5dDNSZTJRb25obllvdEFaQTVQV1B1Q05wRlpwdVpVaEJHZW80MTBxWmViU2d3V0psZHMxMENsV0x3RzBJWXpZV0hlc3MyeWxSQ3dmZllIZzRkaGNvb2ppaQ?oc=5",
      "datetime": 1785899040,
      "headlineKo": "평화 회담의 불확실성에도 걸프 해운 물동량은 꾸준하다 - reuters.com"
    },
    {
      "headline": "Stocks get AI-boost; investors on tenterhooks over Mideast peace talks - reuters.com",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMigwFBVV95cUxPSjNOaFJhdXRJblJMNldJM09LeFJDOXNqY2Y0R3dhcGt3S1ZyNm1peFdvVlBfN2RrNmtCYVhQa3pzenI5VlBld2c2Y0JPLTAzNWRhTWxUYWxjNEpvWGxIYlR3M2NLdGg5RnpRSmtYVVVwamJfYTZ5S1JaQ3J5QjFEQ3B0WQ?oc=5",
      "datetime": 1785893820,
      "headlineKo": "주식은 AI 강화를 받습니다. 중동 평화 회담에 대한 투자자들 - reuters.com"
    },
    {
      "headline": "Yen drifts after intervention whirlwind; Iran optimism dents dollar - reuters.com",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMixwFBVV95cUxNRFFDTkhtVFJsMkg2YzlLQzd2c0c0aXhwZHl2M3lFZE1vdnNka1ZnbFNwalhDZ0x5Y3ZZQWZ5ZUw4bGwwdzVzU1QxUXNpT3FEMzJhTVVJTEhqTG5KTDZqS2l5Qmc0dUZ1THk5YTFpckwxaE1weFNYUFRtd0xFd2JVc2RvQ1FTQ3FjUkk5REEtTk50cWdwdzVPb3p6Q1lkOVNYTEdaWmE1UkhicVlrY004TkpvOGJSWGxVMmR5bmZEcGpPX09ETWFV?oc=5",
      "datetime": 1785893760,
      "headlineKo": "엔화는 개입 후 회오리바람처럼 표류합니다. 이란 낙관주의가 달러 가치 하락 - reuters.com"
    },
    {
      "headline": "Oil prices rebound after Houthis say they attacked Saudi tanker - reuters.com",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxOZDd2cFJ5Z2dsbTliajVMY1o5eVQ3Q3djdGVaYXA2aVhJQUROSVk5NmVjSkUydkw0YUItOGI1VFl1Wl9uZVY2SWhZLVZZY2hFTTFyaEoxM0otRWQ0Vzk4bjdEV18yYkhQS05GUzQ5dHdsY0wwemg4cG53dnZkVmx0M1pMdzl2cDk2MDBlZlN3ZVY0RVMxU2JNcE5Ta2Nrd3l4OVpvTnlIY0hscHRpOUozRVpDUQ?oc=5",
      "datetime": 1785893160,
      "headlineKo": "후티 반군이 사우디 유조선을 공격했다고 말한 후 유가 반등 - reuters.com"
    },
    {
      "headline": "Gold scales one-month peak as US-Iran peace hopes ease inflation worries - reuters.com",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxNSmlKVnBzQTlPclFHcWhMcVpJeXB0eVQ1ODYxMTk1bkRLbDVybnI4dXhqQ01HaDR1N1FULU03ZDhZWUlEMkFtV2Z3RmFTWHhpVDFlRi0wRG9ZSkFlWVFTUFhXUFVjN3A5Zm1FSnNUbHlwWHF4OEo0TkxvZVV2OEdJNS1ZdG9OQ3V4ME43NV9QeXpSSnVQUEdIb1Jn?oc=5",
      "datetime": 1785891660,
      "headlineKo": "미국과 이란의 평화로 인해 인플레이션 우려가 완화되기를 바라면서 금값은 한 달 최고치를 기록했습니다. - reuters.com"
    },
    {
      "headline": "Antisemitism in UK remains near record levels, charity says - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxNVDNsX1psRm1PS3VDWnVOWGEtTG9wQ3AyS2xLS0xGN1VDUW0zLU5tZDRZc0RBVUpfSTcycm55c3RUU3JLSEpoaTVUNHR0Z0l1WmJVSkp4ZFVQZERHMWI5WHV0WlJlQTlWbC1KcHBGVGIwdU50TlJidnBTOEFXdE5FVFlKTnA1cF9idklRdUVtRElSUzQwTC02dkNtOHM1Z2plTnc?oc=5",
      "datetime": 1785884867,
      "headlineKo": "영국의 반유대주의는 여전히 기록적인 수준에 가깝다고 자선단체가 밝혔습니다 - 로이터 통신"
    }
  ],
  "_fetched_at": 1785934802.2561803,
  "_updated_label": "2026-08-05 22:00"
};
