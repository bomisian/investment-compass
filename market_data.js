// 자동 생성 파일 - buy_signal_telegram.py 실행 시마다 갱신됨. 직접 수정하지 마세요.
// 시장 환경 지표(야후) + 시장 헤드라인(Finnhub). 이 파일이 없어도 대시보드는 정상 동작함.
const MARKET_DATA = {
  "indicators": {
    "vix": {
      "current": 16.43000030517578,
      "prevClose": 15.859999656677246,
      "changeAbs": 0.5700006484985352,
      "changePct": 3.5939512032622156,
      "pctRank": 34.952229299363054,
      "min5y": 11.859999656677246,
      "max5y": 52.33000183105469,
      "ma20": 17.2564998626709,
      "ma60": 17.406666628519694,
      "chg1m": 0.8600006103515625,
      "chg3m": -0.9499988555908203,
      "chg1mPct": 5.523446545971635,
      "chg3mPct": -5.466046613715242,
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
      "current": 75.87000274658203,
      "prevClose": 80.33999633789062,
      "changeAbs": -4.469993591308594,
      "changePct": -5.563845898758671,
      "pctRank": 48.050914876690534,
      "min5y": 55.27000045776367,
      "max5y": 123.69999694824219,
      "ma20": 81.13999977111817,
      "ma60": 84.77349993387858,
      "chg1m": 7.319999694824219,
      "chg3m": -30.54999542236328,
      "chg1mPct": 10.678336059733425,
      "chg3mPct": -28.707006152982768,
      "lastDate": "2026-08-04",
      "bars": 1257,
      "symbol": "CL=F",
      "label": "WTI 유가",
      "unit": "$",
      "digits": 1
    },
    "dollar": {
      "current": 99.87699890136719,
      "prevClose": 99.95999908447266,
      "changeAbs": -0.08300018310546875,
      "changePct": -0.08303339722455202,
      "pctRank": 34.924423229912485,
      "min5y": 92.04000091552734,
      "max5y": 114.11000061035156,
      "ma20": 100.83535079956054,
      "ma60": 100.16728363037109,
      "chg1m": -0.9729995727539062,
      "chg3m": 1.4069976806640625,
      "chg1mPct": -0.9647987976951587,
      "chg3mPct": 1.4288592091214924,
      "lastDate": "2026-08-04",
      "bars": 1257,
      "symbol": "DX-Y.NYB",
      "label": "달러지수(DXY)",
      "unit": "",
      "digits": 1
    },
    "gold": {
      "current": 4136.5,
      "prevClose": 4033.699951171875,
      "changeAbs": 102.800048828125,
      "changePct": 2.54852988751083,
      "pctRank": 87.98727128082736,
      "min5y": 1623.300048828125,
      "max5y": 5318.39990234375,
      "ma20": 4060.670031738281,
      "ma60": 4255.390006510416,
      "chg1m": -18.60009765625,
      "chg3m": -383.0,
      "chg1mPct": -0.4476449957665684,
      "chg3mPct": -8.474388759818565,
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
        "ret1m": 6.750069079415044,
        "ret3m": 2.3463786918798357,
        "ret6m": 3.5447616225230183,
        "ret1y": 11.58346347448278,
        "winRate": 60.8,
        "count": 9
      },
      "반도체": {
        "ret1m": -7.53827020973834,
        "ret3m": 25.20489428327273,
        "ret6m": 76.13535397092389,
        "ret1y": 256.37130727332675,
        "winRate": 71.5,
        "count": 15
      }
    },
    "pair": [
      "빅테크·SW",
      "반도체"
    ],
    "corr60": 0.20189022570961873,
    "corrPctRank": 1.9262981574539362,
    "corrMin5y": 0.11496792019743002,
    "corrMedian5y": 0.7115784818334243,
    "corrMax5y": 0.9346528705205663
  },
  "news": [
    {
      "headline": "TikTok users are sharing the items they say are always worth the money—here's what financial planners say",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/04/worth-the-money-financial-planners.html",
      "datetime": 1785870001,
      "headlineKo": "TikTok 사용자는 항상 돈의 가치가 있다고 말하는 항목을 공유하고 있습니다. 재무 설계사가 말하는 내용은 다음과 같습니다."
    },
    {
      "headline": "Qatar says progress made toward US-Iran talks on ending war - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxOaUY3M2pidURfcVlodzZaVEctbGNSYS1rNlJrR21pQm8yVm50U05QSmRlWURQWWh5UklWZUVMVmlRdzhmbVJrN05IdVNXVW83T3l1TUo0ZjJTMzNURzlOdmNMM2YxY2JwVHQtby1aTFVfZmFnSjRFT0hSaHlzeW50XzNPcUZROG13MUxxNVMwdGd3UkR2cTgyeURHNERQWlUxeFJYR1ln?oc=5",
      "datetime": 1785866522,
      "headlineKo": "카타르는 전쟁 종식을 위한 미국-이란 회담에서 진전이 있었다고 밝혔습니다 - 로이터"
    },
    {
      "headline": "Chipotle stock falls on potential link to salmonella outbreak in Minnesota",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/04/chipotle-stock-falls-salmonella-outbreak-minnesota.html",
      "datetime": 1785866040,
      "headlineKo": "미네소타의 살모넬라 발병과의 잠재적 연관성으로 치폴레 주식 하락"
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
      "headline": "Oil prices drop after claims of progress in US-Iran talks - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxOU0VaWUlWWUxJMXVaM1NiVS0yeWUtYWhpTlo4MTh0ZzZkZms3aFVLNVRfR1JISmxrY2d2VmM1UWFKTVFtSlEzYmt0N3ZuRUFLWXd5bzh5QkVXOVRxUVh3VHRnOWkzanJWb2tqUU13cURMRFR3TFphYkFzRVRsbnY5aEpDdTJLLVNLOXpwYzRNckVGQW9TcThhNHdKVlVTZ2Q4SkRraWR5TjlvbmN4VE1rLWViVFNTRUZU?oc=5",
      "datetime": 1785858551,
      "headlineKo": "미-이란 회담 진전 주장으로 유가 하락 - 로이터 통신"
    },
    {
      "headline": "PODCAST: Manufacturing rebounds - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMikAFBVV95cUxQZWNUdkpLMG5rTVozVFg4clZiNGNBRDhqa1ZGUUZkZE1NTVZQdlc2bXc5M0p2Y09GaWptWnJPWG5COWxNdGNBSkdYNWdkSVZKZm5sRHFfWUdIZVJoUEVpblV1d1RJdnlTQVQtX0lZYmxoOVQxVEh0N1FaNm9mbG9iRy1IOURjR2lnUjZuVVgwVWw?oc=5",
      "datetime": 1785852813,
      "headlineKo": "팟캐스트: 제조업 반등 - Reuters"
    },
    {
      "headline": "Someone on Wall Street thinks SpaceX could triple this week",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/04/someone-on-wall-street-thinks-spacex-could-triple-this-week.html",
      "datetime": 1785852301,
      "headlineKo": "월스트리트의 누군가는 SpaceX가 이번 주에 세 배로 늘어날 수 있다고 생각합니다."
    },
    {
      "headline": "Iran demands inbound control of Hormuz and outbound oversight, source says - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxOSjFmUC1OVjJCS05weXNFTmhaZkRab0dwSVV1LXJ5dEp2ZVNxX0l6QVdLQTN3SUdtSS1pOVF4OEYxRzZHbUJNeXk5ZmJnUG5FVVFScEJnOEUyM3FLWWhzQk8yME1VcW42X3dPOURqRi03QlN6RnZLMGFfWW5LWUVmUDctVDR0YXRhWTAwbTJRaUdKYTNJb2NuS2hrNjRpOVdlZjBPRTVzNXhUbjRpdmRFSGdkVHlGUnpJYjRGTQ?oc=5",
      "datetime": 1785851195,
      "headlineKo": "이란은 호르무즈에 대한 인바운드 통제와 아웃바운드 감독을 요구한다고 소식통은 전했습니다."
    },
    {
      "headline": "Gold rises on softer oil prices; US jobs data, Fed rate outlook on tap - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxPdzFHZFRoSEVvd0hvWk5nQl9nYVZPdGJSSTRMcWdPMFc5MS1NYnVtNFdvOEpwQVJHbmZtMWJYTzRmcnJCNkt1bmpBb0ZfTUsycW5SZXFDTWdiU0JrOUl1ek9lVC1qZWVMYjJ5bVQwTy11MkNpVDF6RW8xMm9GY0d1YnB0RDJ5REhSZjZ5QXAzOE15QzVWNk5SRERBUjJOM1oxc1VXdHNR?oc=5",
      "datetime": 1785851089,
      "headlineKo": "금은 유가 하락으로 상승합니다. 미국 고용지표, 연준 금리 전망 확인 - Reuters"
    },
    {
      "headline": "Jim Cramer's top 10 things to watch in the stock market Tuesday",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/04/jim-cramers-top-10-things-to-watch-in-the-stock-market-tuesday.html",
      "datetime": 1785848813,
      "headlineKo": "Jim Cramer가 화요일 주식 시장에서 주목해야 할 10가지 항목"
    }
  ],
  "_fetched_at": 1785873602.7497816,
  "_updated_label": "2026-08-05 05:00"
};
