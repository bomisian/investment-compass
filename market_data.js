// 자동 생성 파일 - buy_signal_telegram.py 실행 시마다 갱신됨. 직접 수정하지 마세요.
// 시장 환경 지표(야후) + 시장 헤드라인(Finnhub). 이 파일이 없어도 대시보드는 정상 동작함.
const MARKET_DATA = {
  "indicators": {
    "vix": {
      "current": 16.59000015258789,
      "prevClose": 15.859999656677246,
      "changeAbs": 0.7300004959106445,
      "changePct": 4.602777501343171,
      "pctRank": 36.46496815286624,
      "min5y": 11.859999656677246,
      "max5y": 52.33000183105469,
      "ma20": 17.264499855041503,
      "ma60": 17.40933329264323,
      "chg1m": 1.0200004577636719,
      "chg3m": -0.7899990081787109,
      "chg1mPct": 6.5510627986893315,
      "chg3mPct": -4.545449058260285,
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
      "current": 75.69999694824219,
      "prevClose": 80.33999633789062,
      "changeAbs": -4.6399993896484375,
      "changePct": -5.775453822693395,
      "pctRank": 47.49403341288782,
      "min5y": 55.27000045776367,
      "max5y": 123.69999694824219,
      "ma20": 81.13149948120117,
      "ma60": 84.77066650390626,
      "chg1m": 7.149993896484375,
      "chg3m": -30.720001220703125,
      "chg1mPct": 10.430333447375432,
      "chg3mPct": -28.866756013220463,
      "lastDate": "2026-08-04",
      "bars": 1257,
      "symbol": "CL=F",
      "label": "WTI 유가",
      "unit": "$",
      "digits": 1
    },
    "dollar": {
      "current": 99.9010009765625,
      "prevClose": 99.95999908447266,
      "changeAbs": -0.05899810791015625,
      "changePct": -0.05902171713737115,
      "pctRank": 35.16308671439936,
      "min5y": 92.04000091552734,
      "max5y": 114.11000061035156,
      "ma20": 100.83655090332032,
      "ma60": 100.16768366495768,
      "chg1m": -0.9489974975585938,
      "chg3m": 1.430999755859375,
      "chg1mPct": -0.9409990202450166,
      "chg3mPct": 1.4532342217118914,
      "lastDate": "2026-08-04",
      "bars": 1257,
      "symbol": "DX-Y.NYB",
      "label": "달러지수(DXY)",
      "unit": "",
      "digits": 1
    },
    "gold": {
      "current": 4151.0,
      "prevClose": 4033.699951171875,
      "changeAbs": 117.300048828125,
      "changePct": 2.9080013448706534,
      "pctRank": 88.3054892601432,
      "min5y": 1623.300048828125,
      "max5y": 5318.39990234375,
      "ma20": 4061.3950317382814,
      "ma60": 4255.631673177083,
      "chg1m": -4.10009765625,
      "chg3m": -368.5,
      "chg1mPct": -0.0986762667537835,
      "chg3mPct": -8.15355680938157,
      "lastDate": "2026-08-04",
      "bars": 1257,
      "symbol": "GC=F",
      "label": "금",
      "unit": "$",
      "digits": 0
    },
    "us30y": {
      "current": 5.189000129699707,
      "prevClose": 5.230999946594238,
      "changeAbs": -0.04199981689453125,
      "changePct": -0.802902261963818,
      "pctRank": 99.6812749003984,
      "min5y": 1.6779999732971191,
      "max5y": 5.275000095367432,
      "ma20": 5.131050062179566,
      "ma60": 5.0376333872477215,
      "chg1m": 0.1960000991821289,
      "chg3m": 0.1640000343322754,
      "chg1mPct": 3.9254976564022046,
      "chg3mPct": 3.2636822133290644,
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
        "ret1m": 7.0562768287073085,
        "ret3m": 2.639954654291077,
        "ret6m": 3.841775092217814,
        "ret1y": 11.903535597184046,
        "winRate": 60.8,
        "count": 9
      },
      "반도체": {
        "ret1m": -7.406628702189,
        "ret3m": 25.383153559552696,
        "ret6m": 76.38612500432404,
        "ret1y": 256.87868752938743,
        "winRate": 71.5,
        "count": 15
      }
    },
    "pair": [
      "빅테크·SW",
      "반도체"
    ],
    "corr60": 0.20607738753946162,
    "corrPctRank": 1.9246861924686192,
    "corrMin5y": 0.11496792019743002,
    "corrMedian5y": 0.7115782038222396,
    "corrMax5y": 0.9346528705205663
  },
  "news": [
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
      "headline": "Oil prices drop after claims of progress in US-Iran talks - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxOU0VaWUlWWUxJMXVaM1NiVS0yeWUtYWhpTlo4MTh0ZzZkZms3aFVLNVRfR1JISmxrY2d2VmM1UWFKTVFtSlEzYmt0N3ZuRUFLWXd5bzh5QkVXOVRxUVh3VHRnOWkzanJWb2tqUU13cURMRFR3TFphYkFzRVRsbnY5aEpDdTJLLVNLOXpwYzRNckVGQW9TcThhNHdKVlVTZ2Q4SkRraWR5TjlvbmN4VE1rLWViVFNTRUZU?oc=5",
      "datetime": 1785858551,
      "headlineKo": "미-이란 회담 진전 주장으로 유가 하락 - 로이터 통신"
    },
    {
      "headline": "Qatar says progress made toward US-Iran talks on ending war - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxOaUY3M2pidURfcVlodzZaVEctbGNSYS1rNlJrR21pQm8yVm50U05QSmRlWURQWWh5UklWZUVMVmlRdzhmbVJrN05IdVNXVW83T3l1TUo0ZjJTMzNURzlOdmNMM2YxY2JwVHQtby1aTFVfZmFnSjRFT0hSaHlzeW50XzNPcUZROG13MUxxNVMwdGd3UkR2cTgyeURHNERQWlUxeFJYR1ln?oc=5",
      "datetime": 1785856337,
      "headlineKo": "카타르는 전쟁 종식을 위한 미국-이란 회담에서 진전이 있었다고 밝혔습니다 - 로이터"
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
      "headline": "Aramco says US-Iran war has cost the global market 2.6 billion barrels of oil - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMikAFBVV95cUxOcXFsci0ySk53THJaUktvbFlJd0ZjTzhFNmJSU0gtY1B5RElscWFhWHJLWTcxdlJ1SDhhV1dJcmQteVdaT0NLekZaMU05V2tockhvaGFtYlgzbk5OdWpDVEM4TmFoX2FpZFMyQWdxTzJ2SkdzYVExYVdRWHBKVlNPcTBzX1hub05WWk45TE1HVDM?oc=5",
      "datetime": 1785850368,
      "headlineKo": "아람코는 미국-이란 전쟁으로 인해 세계 시장에서 26억 배럴의 석유 손실이 발생했다고 밝혔습니다."
    },
    {
      "headline": "Jim Cramer's top 10 things to watch in the stock market Tuesday",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/04/jim-cramers-top-10-things-to-watch-in-the-stock-market-tuesday.html",
      "datetime": 1785848813,
      "headlineKo": "Jim Cramer가 화요일 주식 시장에서 주목해야 할 10가지 항목"
    },
    {
      "headline": "Stocks rise despite higher oil prices as Iran tensions persist - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTE9FbUhCcDNQSE1IQ3dnM055RTJNZ0N1WHYtTUswbUtjZmRTS3FwbEtKZkd5Ti1WT0JndWtUSEJJTktud19OQzRELW93em1SMFdjcnphTVBMQ1BPMzBJLTdEYmxMbnJ2bFB4NVN4ZVlKYjIyZUlFZGx3RUljSQ?oc=5",
      "datetime": 1785843143,
      "headlineKo": "이란 긴장 지속으로 유가 상승에도 주가 상승 - 로이터"
    },
    {
      "headline": "EXCLUSIVE: Ukraine's Fire Point starts to integrate European tech into missile defence system - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMi2AFBVV95cUxQRzFrNFI0Ry1iYVEtVTB1SFBPbXF1N244ZjJOaTh4SE52eWVETjFvcHBlRlJ5eXlpdGJsYktuX1JPVW5LbmRneW1jQXdpdC1XSmo4OTVEME42eXk3bEhBYWZUOEdOaHVmSHc0OFk3NUl2Y2lkYXZvdGlFa0Q0ODVMYVdNSHZ1SzU2czZSN3ZuczdBbFVJSTZSTkZPTXItMU1zV0Z0VmxsT2RvaVNxT0tsd0hiWDdKcERacDVsUERSdFpRbXpIU1NGa29aU0xMd08wbl9mc1lUbjA?oc=5",
      "datetime": 1785842374,
      "headlineKo": "독점: 우크라이나의 Fire Point, 유럽 기술을 미사일 방어 시스템에 통합하기 시작 - Reuters"
    },
    {
      "headline": "Pfizer tops quarterly estimates, hikes low end of revenue guidance on strength of non-Covid products",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/04/pfizer-pfe-earnings-q2-2026.html",
      "datetime": 1785842004,
      "headlineKo": "화이자, 분기별 추정치를 상회하고 비Covid 제품의 강점에 대한 최저 매출 지침을 인상"
    }
  ],
  "_fetched_at": 1785866402.5639393,
  "_updated_label": "2026-08-05 03:00"
};
