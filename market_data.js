// 자동 생성 파일 - buy_signal_telegram.py 실행 시마다 갱신됨. 직접 수정하지 마세요.
// 시장 환경 지표(야후) + 시장 헤드라인(Finnhub). 이 파일이 없어도 대시보드는 정상 동작함.
const MARKET_DATA = {
  "indicators": {
    "vix": {
      "current": 16.670000076293945,
      "prevClose": 16.5,
      "changeAbs": 0.1700000762939453,
      "changePct": 1.0303034926905776,
      "pctRank": 37.738853503184714,
      "min5y": 11.859999656677246,
      "max5y": 52.33000183105469,
      "ma20": 17.248499870300293,
      "ma60": 17.379333305358887,
      "chg1m": 0.5400009155273438,
      "chg3m": -0.7199993133544922,
      "chg1mPct": 3.347804982165166,
      "chg3mPct": -4.140306720097291,
      "lastDate": "2026-08-05",
      "bars": 1256,
      "symbol": "^VIX",
      "label": "VIX (공포지수)",
      "unit": "",
      "digits": 2
    },
    "us10y": {
      "current": 4.626999855041504,
      "prevClose": 4.685999870300293,
      "changeAbs": -0.05900001525878906,
      "changePct": -1.2590699294024557,
      "pctRank": 95.85657370517929,
      "min5y": 1.184000015258789,
      "max5y": 4.98799991607666,
      "ma20": 4.618949961662293,
      "ma60": 4.5297666390736895,
      "chg1m": 0.14799976348876953,
      "chg3m": 0.180999755859375,
      "chg1mPct": 3.304303649555463,
      "chg3mPct": 4.071069541646459,
      "lastDate": "2026-08-04",
      "bars": 1255,
      "symbol": "^TNX",
      "label": "미국 10년물 금리",
      "unit": "%",
      "digits": 2
    },
    "us3m": {
      "current": 3.7300000190734863,
      "prevClose": 3.700000047683716,
      "changeAbs": 0.029999971389770508,
      "changePct": 0.8108100271120583,
      "pctRank": 37.37051792828685,
      "min5y": 0.019999999552965164,
      "max5y": 5.3480000495910645,
      "ma20": 3.720349979400635,
      "ma60": 3.6598166664441427,
      "chg1m": 0.039999961853027344,
      "chg3m": 0.1400001049041748,
      "chg1mPct": 1.0840097895054734,
      "chg3mPct": 3.899724463825492,
      "lastDate": "2026-08-04",
      "bars": 1255,
      "symbol": "^IRX",
      "label": "미국 3개월 금리",
      "unit": "%",
      "digits": 2
    },
    "oil": {
      "current": 76.01000213623047,
      "prevClose": 75.7699966430664,
      "changeAbs": 0.2400054931640625,
      "changePct": 0.3167553171404621,
      "pctRank": 48.60779634049324,
      "min5y": 55.27000045776367,
      "max5y": 123.69999694824219,
      "ma20": 81.25949974060059,
      "ma60": 84.44833323160807,
      "chg1m": 5.569999694824219,
      "chg3m": -26.259994506835938,
      "chg1mPct": 7.907438247830107,
      "chg3mPct": -25.67712463948368,
      "lastDate": "2026-08-05",
      "bars": 1257,
      "symbol": "CL=F",
      "label": "WTI 유가",
      "unit": "$",
      "digits": 1
    },
    "dollar": {
      "current": 99.72599792480469,
      "prevClose": 99.88999938964844,
      "changeAbs": -0.16400146484375,
      "changePct": -0.16418206611856823,
      "pctRank": 33.73110580747812,
      "min5y": 92.04000091552734,
      "max5y": 114.11000061035156,
      "ma20": 100.76980056762696,
      "ma60": 100.19893366495768,
      "chg1m": -1.41400146484375,
      "chg3m": 1.2459945678710938,
      "chg1mPct": -1.3980635489191742,
      "chg3mPct": 1.2652259599901488,
      "lastDate": "2026-08-05",
      "bars": 1257,
      "symbol": "DX-Y.NYB",
      "label": "달러지수(DXY)",
      "unit": "",
      "digits": 1
    },
    "gold": {
      "current": 4248.10009765625,
      "prevClose": 4095.39990234375,
      "changeAbs": 152.7001953125,
      "changePct": 3.7285783794913763,
      "pctRank": 89.73747016706443,
      "min5y": 1623.300048828125,
      "max5y": 5318.39990234375,
      "ma20": 4067.4750366210938,
      "ma60": 4246.833341471354,
      "chg1m": 102.80029296875,
      "chg3m": -307.69970703125,
      "chg1mPct": 2.4799241987878307,
      "chg3mPct": -6.754021691529448,
      "lastDate": "2026-08-05",
      "bars": 1257,
      "symbol": "GC=F",
      "label": "금",
      "unit": "$",
      "digits": 0
    },
    "us30y": {
      "current": 5.190000057220459,
      "prevClose": 5.230999946594238,
      "changeAbs": -0.0409998893737793,
      "changePct": -0.7837868436697883,
      "pctRank": 99.6812749003984,
      "min5y": 1.6779999732971191,
      "max5y": 5.275000095367432,
      "ma20": 5.131100058555603,
      "ma60": 5.0376500527064,
      "chg1m": 0.19700002670288086,
      "chg3m": 0.16499996185302734,
      "chg1mPct": 3.945524243917533,
      "chg3mPct": 3.283581268090751,
      "lastDate": "2026-08-04",
      "bars": 1255,
      "symbol": "^TYX",
      "label": "미국 30년물 금리",
      "unit": "%",
      "digits": 2
    }
  },
  "yieldSpread": 0.8969998359680176,
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
      "headline": "Yemen's Houthis say they attacked Saudi oil tanker in Red Sea - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxNWEQwU2pxeTRYSXhNQWtrT3hmNFhmOUx6eVUzUUt4aVBtOEpub01Fa3U5S0ZOYXRmU2oyb0t4WEpRRXZ3VmwxWksyYkNRcF9GbFJvbEpkMGxWWVY5alo2NS1LdDFzMWVPdmYtV082T3JOaVpoYW5NTFNncUxHZndSdnUzMXdWWHNXQWQ3NXZXMy02MDloQ3dWTHJhWHBfS2pNVnZoUXBEcVZKQm1HZXl5Ug?oc=5",
      "datetime": 1785914877,
      "headlineKo": "예멘 후티 반군, 홍해에서 사우디 유조선 공격했다고 주장 - 로이터 통신"
    },
    {
      "headline": "US and Iran having 'very good discussions', Trump says - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxQUFpfZEh3NVhNLURNVl9ETWp2ak5nZEx4d0JYQ19WZ3Z6bTl3V2wyUzVLQmFnTkJrZTZtVXd1cnp2dkdXUmh0d1FXUmhfbGQ1a3dKY1ZzQ0pXQTdUcS02X1llNkdFbzFLN0k2YXk2X2JEUTVCV1RBeGdUaFA2VGFzSW9LYlRDQm5senFDSzFVRkxHaXdSazRBWUlTT1pjY00yU1Qw?oc=5",
      "datetime": 1785906660,
      "headlineKo": "트럼프 “미국과 이란, 매우 좋은 논의 중” - 로이터"
    },
    {
      "headline": "Trump says US held 'all-day negotiation' with Iran on Tuesday - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxOdjBkc2xFczRwS1pfZ0VISDd3R0NGc0phaktLZVFaM21pZW1ncF91VF9YSHdHc3hob2Mxc25zRmJxYlYwZFI3QXkwVTBTS0dtT3dDY3V2Nnk1SWQ3ZnF1MmZyLWoteVNENlFKdkc1QkpmTklvc0RaX3EtTndVOFBsZG0tYmJxallWYXFnRmFLQmJfaWJkRWk3TEN1QVBCOVU?oc=5",
      "datetime": 1785905280,
      "headlineKo": "트럼프, 미국이 화요일 이란과 '종일 협상'했다고 밝혔습니다 - 로이터"
    },
    {
      "headline": "China eases controls on fuel exports for a second month, sources say - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxNbHRMR3J2NzJaT2hKV1ZTem4wMWhSQVF4NnNNQ19WNXFLaUNVamQ5Slg4NjB6Y0ZpWkN0SWYxeFZrVnF5QXhGSXl6UnNyMXRFVXRQVUtsaURERFRDM25FaW9DQW9QRDZPdmpuMTNGdHVpSFNPcG1Da0VtMXNpVk1OVXVMVlVFS3RHekhiT19FelYwMFFGMVI5QnNzNkJUY0tQMWxMUk5RR0hIWDVyN293?oc=5",
      "datetime": 1785904620,
      "headlineKo": "중국, 두 달째 연료 수출 통제 완화 - 소식통에 따르면 로이터 통신"
    },
    {
      "headline": "Gulf shipping traffic steady amid uncertainty of peace talks - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxQaWpxYUZIYkdaMkhoNVRrM2ZkZ3NYdWh4aUJEb2pOa29zOFBROGFHdmxwNDZZOHhicHpOOGVlS0FGTC1QdHR4UmRVbmtacWZrc3J4empuUEt5dDNSZTJRb25obllvdEFaQTVQV1B1Q05wRlpwdVpVaEJHZW80MTBxWmViU2d3V0psZHMxMENsV0x3RzBJWXpZV0hlc3MyeWxSQ3dmZllIZzRkaGNvb2ppaQ?oc=5",
      "datetime": 1785899040,
      "headlineKo": "평화 회담의 불확실성 속에서 걸프 해운 운송은 안정적이다 - 로이터"
    },
    {
      "headline": "Stocks get AI-boost; investors on tenterhooks over Mideast peace talks - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMigwFBVV95cUxPSjNOaFJhdXRJblJMNldJM09LeFJDOXNqY2Y0R3dhcGt3S1ZyNm1peFdvVlBfN2RrNmtCYVhQa3pzenI5VlBld2c2Y0JPLTAzNWRhTWxUYWxjNEpvWGxIYlR3M2NLdGg5RnpRSmtYVVVwamJfYTZ5S1JaQ3J5QjFEQ3B0WQ?oc=5",
      "datetime": 1785893820,
      "headlineKo": "주식은 AI 강화를 받습니다. 중동 평화 회담에 대한 투자자들 - Reuters"
    },
    {
      "headline": "Yen drifts after intervention whirlwind; Iran optimism dents dollar - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMixwFBVV95cUxNRFFDTkhtVFJsMkg2YzlLQzd2c0c0aXhwZHl2M3lFZE1vdnNka1ZnbFNwalhDZ0x5Y3ZZQWZ5ZUw4bGwwdzVzU1QxUXNpT3FEMzJhTVVJTEhqTG5KTDZqS2l5Qmc0dUZ1THk5YTFpckwxaE1weFNYUFRtd0xFd2JVc2RvQ1FTQ3FjUkk5REEtTk50cWdwdzVPb3p6Q1lkOVNYTEdaWmE1UkhicVlrY004TkpvOGJSWGxVMmR5bmZEcGpPX09ETWFV?oc=5",
      "datetime": 1785893760,
      "headlineKo": "엔화는 개입 후 회오리바람처럼 표류합니다. 이란 낙관주의가 달러 하락 - Reuters"
    },
    {
      "headline": "Oil prices rebound after Houthis say they attacked Saudi tanker - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxOZDd2cFJ5Z2dsbTliajVMY1o5eVQ3Q3djdGVaYXA2aVhJQUROSVk5NmVjSkUydkw0YUItOGI1VFl1Wl9uZVY2SWhZLVZZY2hFTTFyaEoxM0otRWQ0Vzk4bjdEV18yYkhQS05GUzQ5dHdsY0wwemg4cG53dnZkVmx0M1pMdzl2cDk2MDBlZlN3ZVY0RVMxU2JNcE5Ta2Nrd3l4OVpvTnlIY0hscHRpOUozRVpDUQ?oc=5",
      "datetime": 1785893160,
      "headlineKo": "후티 반군이 사우디 유조선을 공격했다고 말한 후 유가 반등 - 로이터 통신"
    },
    {
      "headline": "Gold scales one-month peak as US-Iran peace hopes ease inflation worries - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxNSmlKVnBzQTlPclFHcWhMcVpJeXB0eVQ1ODYxMTk1bkRLbDVybnI4dXhqQ01HaDR1N1FULU03ZDhZWUlEMkFtV2Z3RmFTWHhpVDFlRi0wRG9ZSkFlWVFTUFhXUFVjN3A5Zm1FSnNUbHlwWHF4OEo0TkxvZVV2OEdJNS1ZdG9OQ3V4ME43NV9QeXpSSnVQUEdIb1Jn?oc=5",
      "datetime": 1785891660,
      "headlineKo": "미국과 이란의 평화로 인해 인플레이션 우려가 완화되기를 바라면서 금값은 한 달 최고치를 기록했습니다. - 로이터"
    },
    {
      "headline": "Antisemitism in UK remains near record levels, charity says - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxNVDNsX1psRm1PS3VDWnVOWGEtTG9wQ3AyS2xLS0xGN1VDUW0zLU5tZDRZc0RBVUpfSTcycm55c3RUU3JLSEpoaTVUNHR0Z0l1WmJVSkp4ZFVQZERHMWI5WHV0WlJlQTlWbC1KcHBGVGIwdU50TlJidnBTOEFXdE5FVFlKTnA1cF9idklRdUVtRElSUzQwTC02dkNtOHM1Z2plTnc?oc=5",
      "datetime": 1785884867,
      "headlineKo": "영국의 반유대주의는 여전히 기록적인 수준에 가깝다고 자선단체가 밝혔습니다 - 로이터 통신"
    },
    {
      "headline": "Dow, S&P 500 close at record on AI-linked earnings, Mideast deal hopes - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxOMHk5N1NJZXlfQ196NTA1SjFaUUtUaDd0UXNDY2FsLWM2aE1VTElKc1oxaXFMbmd1M2kwcXVmaFBKbEo3TmFmY2lfRVFraDFVcTZpTTNfbGU2VU9iZnQ0Q2xBR0ZCVHFmRUktbVk0VTR1RVVYNzVxNEVUa3dJbmFQXzQ0SldqNzVoSXAtRnF3SDJ0M0UwNEhRLVhsUTd3Yk9jdnhTQUJ0WGdOUEdRTHJfeUpKZUw?oc=5",
      "datetime": 1785884558,
      "headlineKo": "다우, S&P 500, AI 연계 수익 기록 마감, 중동 거래 기대 - 로이터 통신"
    },
    {
      "headline": "Jim Cramer says one hedge fund's collapse cleared the way for tech's rally",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/04/cramer-one-hedge-fund-collapse-cleared-way-for-tech-rally.html",
      "datetime": 1785882142,
      "headlineKo": "짐 크레이머(Jim Cramer)는 한 헤지펀드의 붕괴가 기술주 랠리의 길을 열었다고 말했습니다."
    }
  ],
  "_fetched_at": 1785931358.5648518,
  "_updated_label": "2026-08-05 21:03"
};
