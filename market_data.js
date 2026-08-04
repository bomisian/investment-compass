// 자동 생성 파일 - buy_signal_telegram.py 실행 시마다 갱신됨. 직접 수정하지 마세요.
// 시장 환경 지표(야후) + 시장 헤드라인(Finnhub). 이 파일이 없어도 대시보드는 정상 동작함.
const MARKET_DATA = {
  "indicators": {
    "vix": {
      "current": 16.209999084472656,
      "prevClose": 15.859999656677246,
      "changeAbs": 0.34999942779541016,
      "changePct": 2.206806023782329,
      "pctRank": 32.00636942675159,
      "min5y": 11.859999656677246,
      "max5y": 52.33000183105469,
      "ma20": 17.24549980163574,
      "ma60": 17.402999941507975,
      "chg1m": 0.6399993896484375,
      "chg3m": -1.1700000762939453,
      "chg1mPct": 4.110465010870785,
      "chg3mPct": -6.7318764832571985,
      "lastDate": "2026-08-04",
      "bars": 1256,
      "symbol": "^VIX",
      "label": "VIX (공포지수)",
      "unit": "",
      "digits": 2
    },
    "us10y": {
      "current": 4.629000186920166,
      "prevClose": 4.685999870300293,
      "changeAbs": -0.05699968338012695,
      "changePct": -1.2163825215060078,
      "pctRank": 96.09561752988047,
      "min5y": 1.184000015258789,
      "max5y": 4.98799991607666,
      "ma20": 4.619049978256226,
      "ma60": 4.529799977938334,
      "chg1m": 0.15000009536743164,
      "chg3m": 0.1830000877380371,
      "chg1mPct": 3.348963882593517,
      "chg3mPct": 4.116061260810615,
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
      "current": 76.25,
      "prevClose": 80.33999633789062,
      "changeAbs": -4.089996337890625,
      "changePct": -5.090859502518631,
      "pctRank": 49.2442322991249,
      "min5y": 55.27000045776367,
      "max5y": 123.69999694824219,
      "ma20": 81.15899963378907,
      "ma60": 84.77983322143555,
      "chg1m": 7.6999969482421875,
      "chg3m": -30.169998168945312,
      "chg1mPct": 11.232671926255644,
      "chg3mPct": -28.349932990084653,
      "lastDate": "2026-08-04",
      "bars": 1257,
      "symbol": "CL=F",
      "label": "WTI 유가",
      "unit": "$",
      "digits": 1
    },
    "dollar": {
      "current": 99.947998046875,
      "prevClose": 99.95999908447266,
      "changeAbs": -0.01200103759765625,
      "changePct": -0.012005840043590435,
      "pctRank": 35.56085918854415,
      "min5y": 92.04000091552734,
      "max5y": 114.11000061035156,
      "ma20": 100.83890075683594,
      "ma60": 100.1684669494629,
      "chg1m": -0.9020004272460938,
      "chg3m": 1.477996826171875,
      "chg1mPct": -0.8943980574055775,
      "chg3mPct": 1.5009615190916936,
      "lastDate": "2026-08-04",
      "bars": 1257,
      "symbol": "DX-Y.NYB",
      "label": "달러지수(DXY)",
      "unit": "",
      "digits": 1
    },
    "gold": {
      "current": 4150.10009765625,
      "prevClose": 4033.699951171875,
      "changeAbs": 116.400146484375,
      "changePct": 2.8856917443886303,
      "pctRank": 88.3054892601432,
      "min5y": 1623.300048828125,
      "max5y": 5318.39990234375,
      "ma20": 4061.3500366210938,
      "ma60": 4255.616674804687,
      "chg1m": -5.0,
      "chg3m": -369.39990234375,
      "chg1mPct": -0.12033404448716721,
      "chg3mPct": -8.173468355874544,
      "lastDate": "2026-08-04",
      "bars": 1257,
      "symbol": "GC=F",
      "label": "금",
      "unit": "$",
      "digits": 0
    },
    "us30y": {
      "current": 5.191999912261963,
      "prevClose": 5.230999946594238,
      "changeAbs": -0.03900003433227539,
      "changePct": -0.7455560070817292,
      "pctRank": 99.6812749003984,
      "min5y": 1.6779999732971191,
      "max5y": 5.275000095367432,
      "ma20": 5.131200051307678,
      "ma60": 5.037683383623759,
      "chg1m": 0.19899988174438477,
      "chg3m": 0.16699981689453125,
      "chg1mPct": 3.9855774189481883,
      "chg3mPct": 3.323379377614123,
      "lastDate": "2026-08-04",
      "bars": 1255,
      "symbol": "^TYX",
      "label": "미국 30년물 금리",
      "unit": "%",
      "digits": 2
    }
  },
  "yieldSpread": 0.8990001678466797,
  "sector": {
    "groups": {
      "빅테크·SW": {
        "ret1m": 6.682937858005178,
        "ret3m": 2.2820167905929223,
        "ret6m": 3.479646101959366,
        "ret1y": 11.513292707786494,
        "winRate": 60.8,
        "count": 9
      },
      "반도체": {
        "ret1m": -7.49571578299697,
        "ret3m": 25.262518367458963,
        "ret6m": 76.21641820186704,
        "ret1y": 256.53532298796347,
        "winRate": 71.5,
        "count": 15
      }
    },
    "pair": [
      "빅테크·SW",
      "반도체"
    ],
    "corr60": 0.20155905590759302,
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
      "headline": "Toyota lifts annual forecast and unveils $6 billion buyback, but shares fall - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMi0gFBVV95cUxQSy1kNU1lRXkxX25PQUFPbTQtT2FCaXp3VHNJb0N6czVieVFvZmY1U1lta3NzVEdwRUEzQmd6b2h0dmtOTTVyZmNTTDhiVU1od3dCWFN6U2JRMFRZeTE2cnBwTHpGekxMNzhGRk1CMnZSRllsdG5UZmpmXzRoNTVKeDlQUlBwMWFlUG9KbzJGOGkzZGtUajh4V1R2WmhMdXdiVVNiZlFiLTZHbHhlUExSS05QdnU2RFRUUTRuQ3ZsM2M1M0RSdkxFajVMWU4ycDVGanc?oc=5",
      "datetime": 1785843277,
      "headlineKo": "도요타, 연간 전망 상향하고 60억 달러 자사주 매입 발표했지만 주가 하락 - Reuters"
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
    },
    {
      "headline": "Palantir jumps 16% on 'otherworldly' commercial revenue — here's what's driving the demand",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/04/palantir-2q-earnings-ai-sovereign-tools.html",
      "datetime": 1785839229,
      "headlineKo": "Palantir는 '초자연적인' 상업 수익으로 16% 증가했습니다. 수요를 주도하는 요인은 다음과 같습니다."
    },
    {
      "headline": "PODCAST: US munitions, Max Miller, Ceuta and Infantino's future - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMilwFBVV95cUxOUEY5UU5rSzJLWl80R1JRekd4T2RpZkUyU2JCeG04V2VTOGJuRDFnTzQ5MWFGQk9UcXJ2UnlnYnFiY3FMSzNvVWtYbGJyUkpaNHRueUpKbDdGeVMtdGhTUmhBbVoxeDdvcVNGa2E1TXZpN0J4TVZWdHVHMVZaSUExTDZhdkZXQVFROG9ncEV4NHgyWk9QR2I4?oc=5",
      "datetime": 1785838994,
      "headlineKo": "팟캐스트: 미국 군수품, Max Miller, Ceuta 및 Infantino의 미래 - Reuters"
    }
  ],
  "_fetched_at": 1785862826.2422643,
  "_updated_label": "2026-08-05 02:00"
};
