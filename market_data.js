// 자동 생성 파일 - buy_signal_telegram.py 실행 시마다 갱신됨. 직접 수정하지 마세요.
// 시장 환경 지표(야후) + 시장 헤드라인(Finnhub). 이 파일이 없어도 대시보드는 정상 동작함.
const MARKET_DATA = {
  "indicators": {
    "vix": {
      "current": 16.5,
      "prevClose": 15.859999656677246,
      "changeAbs": 0.6400003433227539,
      "changePct": 4.035311205402872,
      "pctRank": 35.6687898089172,
      "min5y": 11.859999656677246,
      "max5y": 52.33000183105469,
      "ma20": 17.25999984741211,
      "ma60": 17.407833290100097,
      "chg1m": 0.9300003051757812,
      "chg3m": -0.8799991607666016,
      "chg1mPct": 5.973027125266625,
      "chg3mPct": -5.063286555002263,
      "lastDate": "2026-08-04",
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
      "current": 75.2300033569336,
      "prevClose": 80.33999633789062,
      "changeAbs": -5.109992980957031,
      "changePct": -6.360459564207141,
      "pctRank": 45.90294351630867,
      "min5y": 55.27000045776367,
      "max5y": 123.69999694824219,
      "ma20": 81.10799980163574,
      "ma60": 84.76283327738444,
      "chg1m": 6.680000305175781,
      "chg3m": -31.18999481201172,
      "chg1mPct": 9.74471190049712,
      "chg3mPct": -29.308396305830186,
      "lastDate": "2026-08-04",
      "bars": 1257,
      "symbol": "CL=F",
      "label": "WTI 유가",
      "unit": "$",
      "digits": 1
    },
    "dollar": {
      "current": 99.875,
      "prevClose": 99.95999908447266,
      "changeAbs": -0.08499908447265625,
      "changePct": -0.08503309849055374,
      "pctRank": 34.924423229912485,
      "min5y": 92.04000091552734,
      "max5y": 114.11000061035156,
      "ma20": 100.83525085449219,
      "ma60": 100.16725031534831,
      "chg1m": -0.9749984741210938,
      "chg3m": 1.404998779296875,
      "chg1mPct": -0.966780851634109,
      "chg3mPct": 1.4268292493952734,
      "lastDate": "2026-08-04",
      "bars": 1257,
      "symbol": "DX-Y.NYB",
      "label": "달러지수(DXY)",
      "unit": "",
      "digits": 1
    },
    "gold": {
      "current": 4127.39990234375,
      "prevClose": 4033.699951171875,
      "changeAbs": 93.699951171875,
      "changePct": 2.322928138089527,
      "pctRank": 87.82816229116945,
      "min5y": 1623.300048828125,
      "max5y": 5318.39990234375,
      "ma20": 4060.2150268554688,
      "ma60": 4255.238338216146,
      "chg1m": -27.7001953125,
      "chg3m": -392.10009765625,
      "chg1mPct": -0.6666553070075191,
      "chg3mPct": -8.675740627420069,
      "lastDate": "2026-08-04",
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
    },
    {
      "headline": "Projectile sinks Indian ship near Yemeni waters but all seafarers safe, Indian minister says - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxPNmtBb0gtUVhaWUFKQ2tlakdWSDhOREJnbHM3dVN6ZGRkbEF1Mnp0VXVFYzY0TXRZRDduZDVibW0yaVpkaDg0TjNpY1VCWFlrQnRQam0xN2ZWWG1vZWpZSUlzTU5CWG9rSVM5dDlGQXRFZzVFXzZCcXVsd2ZUUmJaTi0tUDhiSVp3T1M0bGdRcGZuWmgtV01NLW5OTVFCZlQ2VWdEX2dzRUptUFhxSlVXMEI4T1A3UQ?oc=5",
      "datetime": 1785870155,
      "headlineKo": "발사체가 예멘 해역 근처에서 인도 선박을 침몰시켰지만 모든 선원들은 안전하다고 인도 장관은 말했습니다 - 로이터 통신"
    },
    {
      "headline": "TikTok users are sharing the items they say are always worth the money—here's what financial planners say",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/04/worth-the-money-financial-planners.html",
      "datetime": 1785870001,
      "headlineKo": "TikTok 사용자는 항상 돈의 가치가 있다고 말하는 항목을 공유하고 있습니다. 재무 설계사가 말하는 내용은 다음과 같습니다."
    },
    {
      "headline": "Chipotle stock falls on potential link to salmonella outbreak in Minnesota",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/04/chipotle-stock-falls-salmonella-outbreak-minnesota.html",
      "datetime": 1785866040,
      "headlineKo": "미네소타의 살모넬라 발병과의 잠재적 연관성으로 치폴레 주식 하락"
    },
    {
      "headline": "Stocks jump to records after upbeat company forecasts; oil, yen weaken - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTE9FbUhCcDNQSE1IQ3dnM055RTJNZ0N1WHYtTUswbUtjZmRTS3FwbEtKZkd5Ti1WT0JndWtUSEJJTktud19OQzRELW93em1SMFdjcnphTVBMQ1BPMzBJLTdEYmxMbnJ2bFB4NVN4ZVlKYjIyZUlFZGx3RUljSQ?oc=5",
      "datetime": 1785864717,
      "headlineKo": "낙관적인 회사 전망 이후 주가는 기록적으로 뛰어올랐습니다. 유가, 엔화 약세 - Reuters"
    },
    {
      "headline": "US-facilitated Israel-Lebanon talks have begun, says State Department - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMivwFBVV95cUxNLXdzQy15RzJIczBFWU1CVzZITkFHTU84M0NZWFlGajB6bFRITGJ2UEpacm96STR6cFk1WTRiNDBiMzRTakJ5STh0YVE2WXdkdWVzZG5TeldxY3ZDbktzbXJPZVhSX1R0RnAtSlRXVmE1SmZpdVFBVU1tQ1M1ZzFqeWk1TzJDOWtha0Y3czY0RmMxOTFLUHZXZENMZ195NFY3ZGM3TEFSeEt1WTdrOXlWdHhiSHZRTFRSWTZNTlNTVQ?oc=5",
      "datetime": 1785863402,
      "headlineKo": "미국이 주도하는 이스라엘-레바논 회담이 시작되었다고 미 국무부가 밝혔습니다 - 로이터 통신"
    },
    {
      "headline": "Turkey calls on Russia, Ukraine to ensure Black Sea safety after drone attack - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxNLWxZWjEzUHh2dXNYYUxyS2RjbUhHTXh1RHpVTjZwUUpScFlZbnFUVDkwUlR3bXJMU3otWDY4Q2cyTml6dXV2YVJIZkdiN0lnZUV0T19VN1QwRUY4ZmU5bjNhUHJfU2tWeEw4RVFoTUN4R2lGaW1WSXpzUWxaVmZWSF9kRGhLcE9GU1lxaHp4N0xnNFp0MG9lMkZEeTd4TTEyTTBySlEzYVJFM0RSdjFTRHJZbnFmdFBISndla004RHVTQQ?oc=5",
      "datetime": 1785860503,
      "headlineKo": "터키, 러시아와 우크라이나에 드론 공격 후 흑해 안전 보장 촉구 - 로이터 통신"
    },
    {
      "headline": "EXCLUSIVE: US has used 'virtually all' of its long-range precision missiles during Iran war, sources say - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxOZjVoa01lTFhQYVMtVjRxRWZKSng1YzFUTTNJOVI1T1pWZVNKc1czOWhJWHB3VDFFWnVrY3lLT1FnSVBfU1M1RFdrU2FsYVlKZXdhVm9VbF9PaEFNeGVMR0ZtNmlEeGhkWG1iang1U0kzb3hmWENGSnNXODRzdnZYaE1LYkY4Vm1hbzJEcEl1ZzZIRVBQLS1nYUYyTWdDdjZjXzN0NmtuZm5IV2FEdlBQby1UUnBqc0FF?oc=5",
      "datetime": 1785860200,
      "headlineKo": "독점: 미국은 이란 전쟁 중 장거리 정밀 미사일을 '거의 모두' 사용했다고 소식통은 전했습니다. - 로이터 통신"
    },
    {
      "headline": "Asia crude and fuel imports recover, still shy of pre-Iran war levels - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiygFBVV95cUxORGVwVDlqUHgzUTZBLWFQWGVUNWZWS0hmM3hiRElSNFNDcVhtc2pPMUI4X1lzY2pBNlFBRTdKd0s3MDlaY0NhWVV0N0lsU2RGTzI0cGJ3eFo4SFR2dEV0VFY1a2lzZW4yenVWYUFpMmNJU1pxQi15N19DZ2VfLVlTVmJuR2lZd1MyVzJHVkJXaWMyeTNRSHhPQzZybDQydmdjNnExMnRXTmNaMW1TUl9rb1BzOWI3VVR2d0QxZHdBT2NrU2hJellTTDl3?oc=5",
      "datetime": 1785859460,
      "headlineKo": "아시아 원유 및 연료 수입 회복, 여전히 이란 전쟁 이전 수준에 미치지 못함 - Reuters"
    },
    {
      "headline": "Oil prices tumble after Bessent says Strait of Hormuz deal may come this week",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/04/oil-rises-after-selloff-as-talks-to-end-us-iran-war-remain-uncertain.html",
      "datetime": 1785859030,
      "headlineKo": "베센트가 호르무즈 해협 협상이 이번 주에 이뤄질 수 있다고 말한 후 유가는 하락했다"
    },
    {
      "headline": "PODCAST: Manufacturing rebounds - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMikAFBVV95cUxQZWNUdkpLMG5rTVozVFg4clZiNGNBRDhqa1ZGUUZkZE1NTVZQdlc2bXc5M0p2Y09GaWptWnJPWG5COWxNdGNBSkdYNWdkSVZKZm5sRHFfWUdIZVJoUEVpblV1d1RJdnlTQVQtX0lZYmxoOVQxVEh0N1FaNm9mbG9iRy1IOURjR2lnUjZuVVgwVWw?oc=5",
      "datetime": 1785852813,
      "headlineKo": "팟캐스트: 제조업 반등 - Reuters"
    }
  ],
  "_fetched_at": 1785888002.426324,
  "_updated_label": "2026-08-05 09:00"
};
