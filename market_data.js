// 자동 생성 파일 - buy_signal_telegram.py 실행 시마다 갱신됨. 직접 수정하지 마세요.
// 시장 환경 지표(야후) + 시장 헤드라인(Finnhub). 이 파일이 없어도 대시보드는 정상 동작함.
const MARKET_DATA = {
  "indicators": {
    "vix": {
      "current": 15.600000381469727,
      "prevClose": 15.859999656677246,
      "changeAbs": -0.25999927520751953,
      "changePct": -1.639339727842029,
      "pctRank": 25.557324840764334,
      "min5y": 11.859999656677246,
      "max5y": 52.33000183105469,
      "ma20": 17.214999866485595,
      "ma60": 17.392833296457926,
      "chg1m": 0.030000686645507812,
      "chg3m": -1.779998779296875,
      "chg1mPct": 0.1926826411915772,
      "chg3mPct": -10.241650548033526,
      "lastDate": "2026-08-04",
      "bars": 1256,
      "symbol": "^VIX",
      "label": "VIX (공포지수)",
      "unit": "",
      "digits": 2
    },
    "us10y": {
      "current": 4.658999919891357,
      "prevClose": 4.685999870300293,
      "changeAbs": -0.026999950408935547,
      "changePct": -0.5761833366675981,
      "pctRank": 96.97211155378486,
      "min5y": 1.184000015258789,
      "max5y": 4.98799991607666,
      "ma20": 4.620549964904785,
      "ma60": 4.530299973487854,
      "chg1m": 0.17999982833862305,
      "chg3m": 0.21299982070922852,
      "chg1mPct": 4.018750271474599,
      "chg3mPct": 4.7908190723704935,
      "lastDate": "2026-08-04",
      "bars": 1255,
      "symbol": "^TNX",
      "label": "미국 10년물 금리",
      "unit": "%",
      "digits": 2
    },
    "us3m": {
      "current": 3.7319998741149902,
      "prevClose": 3.700000047683716,
      "changeAbs": 0.031999826431274414,
      "changePct": 0.86486016267235,
      "pctRank": 37.60956175298805,
      "min5y": 0.019999999552965164,
      "max5y": 5.3480000495910645,
      "ma20": 3.72044997215271,
      "ma60": 3.659849997361501,
      "chg1m": 0.04199981689453125,
      "chg3m": 0.1419999599456787,
      "chg1mPct": 1.1382064022559437,
      "chg3mPct": 3.9554307337229004,
      "lastDate": "2026-08-04",
      "bars": 1255,
      "symbol": "^IRX",
      "label": "미국 3개월 금리",
      "unit": "%",
      "digits": 2
    },
    "oil": {
      "current": 77.7699966430664,
      "prevClose": 80.33999633789062,
      "changeAbs": -2.5699996948242188,
      "changePct": -3.1989044211745052,
      "pctRank": 54.01750198886237,
      "min5y": 55.27000045776367,
      "max5y": 123.69999694824219,
      "ma20": 81.23499946594238,
      "ma60": 84.80516649881999,
      "chg1m": 9.219993591308594,
      "chg3m": -28.650001525878906,
      "chg1mPct": 13.450026522022403,
      "chg3mPct": -26.921633169356074,
      "lastDate": "2026-08-04",
      "bars": 1257,
      "symbol": "CL=F",
      "label": "WTI 유가",
      "unit": "$",
      "digits": 1
    },
    "dollar": {
      "current": 99.90899658203125,
      "prevClose": 99.95999908447266,
      "changeAbs": -0.05100250244140625,
      "changePct": -0.05102291207336431,
      "pctRank": 35.16308671439936,
      "min5y": 92.04000091552734,
      "max5y": 114.11000061035156,
      "ma20": 100.83695068359376,
      "ma60": 100.16781692504883,
      "chg1m": -0.9410018920898438,
      "chg3m": 1.438995361328125,
      "chg1mPct": -0.933070804489216,
      "chg3mPct": 1.4613540606167668,
      "lastDate": "2026-08-04",
      "bars": 1257,
      "symbol": "DX-Y.NYB",
      "label": "달러지수(DXY)",
      "unit": "",
      "digits": 1
    },
    "gold": {
      "current": 4133.7001953125,
      "prevClose": 4033.699951171875,
      "changeAbs": 100.000244140625,
      "changePct": 2.4791195515564515,
      "pctRank": 87.98727128082736,
      "min5y": 1623.300048828125,
      "max5y": 5318.39990234375,
      "ma20": 4060.5300415039064,
      "ma60": 4255.343343098958,
      "chg1m": -21.39990234375,
      "chg3m": -385.7998046875,
      "chg1mPct": -0.5150273601307692,
      "chg3mPct": -8.536338194213961,
      "lastDate": "2026-08-04",
      "bars": 1257,
      "symbol": "GC=F",
      "label": "금",
      "unit": "$",
      "digits": 0
    },
    "us30y": {
      "current": 5.218999862670898,
      "prevClose": 5.230999946594238,
      "changeAbs": -0.012000083923339844,
      "changePct": -0.22940325073321347,
      "pctRank": 99.76095617529882,
      "min5y": 1.6779999732971191,
      "max5y": 5.275000095367432,
      "ma20": 5.132550048828125,
      "ma60": 5.038133382797241,
      "chg1m": 0.2259998321533203,
      "chg3m": 0.1939997673034668,
      "chg1mPct": 4.5263334823151,
      "chg3mPct": 3.860691813365655,
      "lastDate": "2026-08-04",
      "bars": 1255,
      "symbol": "^TYX",
      "label": "미국 30년물 금리",
      "unit": "%",
      "digits": 2
    }
  },
  "yieldSpread": 0.9270000457763672,
  "sector": {
    "groups": {
      "빅테크·SW": {
        "ret1m": 4.400989301169123,
        "ret3m": -0.9836373492270511,
        "ret6m": -0.6724024956556773,
        "ret1y": 3.7498907032000206,
        "winRate": 60.8,
        "count": 9
      },
      "반도체": {
        "ret1m": -12.122667110722107,
        "ret3m": 15.857565378899485,
        "ret6m": 68.46370874218599,
        "ret1y": 224.65835948044366,
        "winRate": 71.5,
        "count": 15
      }
    },
    "pair": [
      "빅테크·SW",
      "반도체"
    ],
    "corr60": 0.14172325136501962,
    "corrPctRank": 0.33500837520938026,
    "corrMin5y": 0.11496792019743002,
    "corrMedian5y": 0.7115784818334243,
    "corrMax5y": 0.9346528705205663
  },
  "news": [
    {
      "headline": "EXCLUSIVE: US has used 'virtually all' of its long-range precision missiles during Iran war, sources say - reuters.com",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxOZjVoa01lTFhQYVMtVjRxRWZKSng1YzFUTTNJOVI1T1pWZVNKc1czOWhJWHB3VDFFWnVrY3lLT1FnSVBfU1M1RFdrU2FsYVlKZXdhVm9VbF9PaEFNeGVMR0ZtNmlEeGhkWG1iang1U0kzb3hmWENGSnNXODRzdnZYaE1LYkY4Vm1hbzJEcEl1ZzZIRVBQLS1nYUYyTWdDdjZjXzN0NmtuZm5IV2FEdlBQby1UUnBqc0FF?oc=5",
      "datetime": 1785843294,
      "headlineKo": "독점: 미국은 이란 전쟁 중 장거리 정밀 미사일을 '거의 모두' 사용했다고 소식통이 전했습니다. - reuters.com"
    },
    {
      "headline": "Iran demands inbound control of Hormuz and outbound oversight, source says - reuters.com",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxOSjFmUC1OVjJCS05weXNFTmhaZkRab0dwSVV1LXJ5dEp2ZVNxX0l6QVdLQTN3SUdtSS1pOVF4OEYxRzZHbUJNeXk5ZmJnUG5FVVFScEJnOEUyM3FLWWhzQk8yME1VcW42X3dPOURqRi03QlN6RnZLMGFfWW5LWUVmUDctVDR0YXRhWTAwbTJRaUdKYTNJb2NuS2hrNjRpOVdlZjBPRTVzNXhUbjRpdmRFSGdkVHlGUnpJYjRGTQ?oc=5",
      "datetime": 1785842677,
      "headlineKo": "이란은 호르무즈에 대한 인바운드 통제와 아웃바운드 감독을 요구한다고 소식통은 전했습니다."
    },
    {
      "headline": "EXCLUSIVE: Ukraine's Fire Point starts to integrate European tech into missile defence system - reuters.com",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMi2AFBVV95cUxQRzFrNFI0Ry1iYVEtVTB1SFBPbXF1N244ZjJOaTh4SE52eWVETjFvcHBlRlJ5eXlpdGJsYktuX1JPVW5LbmRneW1jQXdpdC1XSmo4OTVEME42eXk3bEhBYWZUOEdOaHVmSHc0OFk3NUl2Y2lkYXZvdGlFa0Q0ODVMYVdNSHZ1SzU2czZSN3ZuczdBbFVJSTZSTkZPTXItMU1zV0Z0VmxsT2RvaVNxT0tsd0hiWDdKcERacDVsUERSdFpRbXpIU1NGa29aU0xMd08wbl9mc1lUbjA?oc=5",
      "datetime": 1785842374,
      "headlineKo": "독점: 우크라이나의 Fire Point, 유럽 기술을 미사일 방어 시스템에 통합하기 시작 - reuters.com"
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
      "headline": "Turkey calls on Russia, Ukraine to ensure Black Sea safety after drone attack - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxNLWxZWjEzUHh2dXNYYUxyS2RjbUhHTXh1RHpVTjZwUUpScFlZbnFUVDkwUlR3bXJMU3otWDY4Q2cyTml6dXV2YVJIZkdiN0lnZUV0T19VN1QwRUY4ZmU5bjNhUHJfU2tWeEw4RVFoTUN4R2lGaW1WSXpzUWxaVmZWSF9kRGhLcE9GU1lxaHp4N0xnNFp0MG9lMkZEeTd4TTEyTTBySlEzYVJFM0RSdjFTRHJZbnFmdFBISndla004RHVTQQ?oc=5",
      "datetime": 1785834946,
      "headlineKo": "터키, 러시아와 우크라이나에 드론 공격 후 흑해 안전 보장 촉구 - 로이터 통신"
    },
    {
      "headline": "Goldman sees Brent at $80-$90 until US-Iran deal or major escalation - reuters.com",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxOZ3RQcExCZTFRck1VT3ZpMWV3YkxZVElmR18wQ3RGa2lpbDFNWU11alJoaVdFM2Z0M0t6V2wtdzkwNThqVHFPSW5HWHVOeHJzM3NJdnRuMEFfUnVwS09TS1hkWUVJZXBQNTVFbEMzbG41ZXdqR0V1TjdpV2pGY1BTV2pmSGwzdjRqZWJkR1VCTlE4aUpkNHk3b25YdG05eHRMdXBzZFhiZTJ4d19zcFBXZmtkYy1LZw?oc=5",
      "datetime": 1785833143,
      "headlineKo": "골드만삭스는 미국-이란 협상이나 대규모 확대까지 브렌트유 가격을 80~90달러로 본다 - reuters.com"
    },
    {
      "headline": "BP's quarterly profit doubles to over $5 billion after Iran war oil surge - reuters.com",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxOdU9hYzNQV1Ezbmd5OXB4Z1d4QTR0QU80Z0MteS03b002RE5yd2hPb2l5Z0NqLWJ4Y21PSTN0Z29UNVBBVEVyRDRGc0VNUnoySWNlcWU4cUlVXy1iNWd0MVA3V3pXLXN1ZHlyQWcyNzRfcmNxYnJKWFBQTWZ1anZtajRzcFRSd3BIQWJhOVlfQXZUaVU2Y1RlTUhqcHBQZ1ItTjhJeEg0NA?oc=5",
      "datetime": 1785823740,
      "headlineKo": "이란 전쟁 석유 급증 이후 BP의 분기 이익은 50억 달러 이상으로 두 배 증가 - reuters.com"
    },
    {
      "headline": "OPEC+ oil output hike is irrelevant for now, not for later - reuters.com",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxOZ1F5SEtvVzlTU0VibXRmNGx4ZldyYllQcHBfSEkzRHVLVGdrNUxMLUZtQXZsT1pTWjJ4Z1F0ekFyN3NkWjRITjdCc2NtcmpFZ0k2OWN5Z25WOVVFVHpJNEVWQkU3emxZYkUtVFhFand1cWVHSWUyRUpQa1FOOUtPWlRKUzRVQUs3V3oxcWphVzVKUUhSSUNZaHNtdHVkM1U5VXE2Q0ZPNzE4UG5WQmdVS2cwZlU3UnNN?oc=5",
      "datetime": 1785823200,
      "headlineKo": "OPEC+ 원유 생산량 증가는 지금은 중요하지 않고 나중을 위한 것도 아니다 - reuters.com"
    },
    {
      "headline": "Aramco profit jumps 44% on Iran war oil spike, warns on global inventories - reuters.com",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMikAFBVV95cUxOcXFsci0ySk53THJaUktvbFlJd0ZjTzhFNmJSU0gtY1B5RElscWFhWHJLWTcxdlJ1SDhhV1dJcmQteVdaT0NLekZaMU05V2tockhvaGFtYlgzbk5OdWpDVEM4TmFoX2FpZFMyQWdxTzJ2SkdzYVExYVdRWHBKVlNPcTBzX1hub05WWk45TE1HVDM?oc=5",
      "datetime": 1785821520,
      "headlineKo": "이란 전쟁유 급증으로 아람코 이익 44% 급증, 글로벌 재고 경고 - reuters.com"
    },
    {
      "headline": "Toyota lifts annual forecast and unveils $6 billion buyback, but shares fall - reuters.com",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMi0gFBVV95cUxQSy1kNU1lRXkxX25PQUFPbTQtT2FCaXp3VHNJb0N6czVieVFvZmY1U1lta3NzVEdwRUEzQmd6b2h0dmtOTTVyZmNTTDhiVU1od3dCWFN6U2JRMFRZeTE2cnBwTHpGekxMNzhGRk1CMnZSRllsdG5UZmpmXzRoNTVKeDlQUlBwMWFlUG9KbzJGOGkzZGtUajh4V1R2WmhMdXdiVVNiZlFiLTZHbHhlUExSS05QdnU2RFRUUTRuQ3ZsM2M1M0RSdkxFajVMWU4ycDVGanc?oc=5",
      "datetime": 1785820080,
      "headlineKo": "도요타, 연간 전망 상향하고 60억 달러 자사주 매입 발표했지만 주가 하락 - reuters.com"
    },
    {
      "headline": "Oil traders set to wind down UAE exchange positions after ADNOC benchmark change - reuters.com",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxNTTIzRWd4cTNxUHJ2NTJfQTNMVjIyRnJrN0U0NGFMNzNHdVJscGsxQ0tPeHljNVVjd0p0MU1FM3FEcXdfR05zR3c5QVB4czU0V1BfamdIVUtLdWZNa3BCb0ozM2NPZkU2WFNFSGFKbmVkUXZiOGNhbnBZRWQwNkNINWlWTm5QdW1hbXpCZDBDVXhUZmQ1b0ZLZ2dOelRJbkVlN0RjNXozSUdmVXdnSW01VnVBTzIyTVVzY2VmRUNPTlczWGZSNzQ5eQ?oc=5",
      "datetime": 1785818760,
      "headlineKo": "ADNOC 벤치마크 변경 후 석유 거래자들, UAE 거래소 포지션 축소 예정 - reuters.com"
    }
  ],
  "_fetched_at": 1785848402.2029507,
  "_updated_label": "2026-08-04 22:00"
};
