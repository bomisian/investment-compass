// 자동 생성 파일 - buy_signal_telegram.py 실행 시마다 갱신됨. 직접 수정하지 마세요.
// 시장 환경 지표(야후) + 시장 헤드라인(Finnhub). 이 파일이 없어도 대시보드는 정상 동작함.
const MARKET_DATA = {
  "indicators": {
    "vix": {
      "current": 15.609999656677246,
      "prevClose": 15.989999771118164,
      "changeAbs": -0.38000011444091797,
      "changePct": -2.3764860530347898,
      "pctRank": 25.57768924302789,
      "min5y": 11.859999656677246,
      "max5y": 52.33000183105469,
      "ma20": 17.22899980545044,
      "ma60": 17.41516663233439,
      "chg1m": -0.5399999618530273,
      "chg3m": -2.6800012588500977,
      "chg1mPct": -3.343653093548307,
      "chg3mPct": -14.652821895568652,
      "lastDate": "2026-08-04",
      "bars": 1255,
      "symbol": "^VIX",
      "label": "VIX (공포지수)",
      "unit": "",
      "digits": 2
    },
    "us10y": {
      "current": 4.744999885559082,
      "prevClose": 4.663000106811523,
      "changeAbs": 0.0819997787475586,
      "changePct": 1.7585197698746908,
      "pctRank": 98.48484848484848,
      "min5y": 1.1759999990463257,
      "max5y": 4.98799991607666,
      "ma20": 4.603699970245361,
      "ma60": 4.520349979400635,
      "chg1m": 0.26999998092651367,
      "chg3m": 0.35500001907348633,
      "chg1mPct": 6.0335192554307495,
      "chg3mPct": 8.086561044879502,
      "lastDate": "2026-07-31",
      "bars": 1254,
      "symbol": "^TNX",
      "label": "미국 10년물 금리",
      "unit": "%",
      "digits": 2
    },
    "us3m": {
      "current": 3.681999921798706,
      "prevClose": 3.674999952316284,
      "changeAbs": 0.006999969482421875,
      "changePct": 0.1904753625373498,
      "pctRank": 35.72567783094099,
      "min5y": 0.019999999552965164,
      "max5y": 5.3480000495910645,
      "ma20": 3.719599974155426,
      "ma60": 3.6559499979019163,
      "chg1m": -0.018000125885009766,
      "chg3m": 0.0969998836517334,
      "chg1mPct": -0.48648988251441383,
      "chg3mPct": 2.7057149963622047,
      "lastDate": "2026-07-31",
      "bars": 1254,
      "symbol": "^IRX",
      "label": "미국 3개월 금리",
      "unit": "%",
      "digits": 2
    },
    "oil": {
      "current": 77.30999755859375,
      "prevClose": 80.33999633789062,
      "changeAbs": -3.029998779296875,
      "changePct": -3.7714698996915956,
      "pctRank": 52.66507557677009,
      "min5y": 55.27000045776367,
      "max5y": 123.69999694824219,
      "ma20": 81.21199951171874,
      "ma60": 84.79749984741211,
      "chg1m": 8.759994506835938,
      "chg3m": -29.110000610351562,
      "chg1mPct": 12.778984853176176,
      "chg3mPct": -27.353881893644143,
      "lastDate": "2026-08-04",
      "bars": 1257,
      "symbol": "CL=F",
      "label": "WTI 유가",
      "unit": "$",
      "digits": 1
    },
    "dollar": {
      "current": 99.93599700927734,
      "prevClose": 99.80000305175781,
      "changeAbs": 0.13599395751953125,
      "changePct": 0.13626648633367544,
      "pctRank": 35.42993630573248,
      "min5y": 92.04000091552734,
      "max5y": 114.11000061035156,
      "ma20": 100.89730072021484,
      "ma60": 100.13976694742838,
      "chg1m": -0.9240036010742188,
      "chg3m": 1.7259979248046875,
      "chg1mPct": -0.9161249211606542,
      "chg3mPct": 1.757456410645231,
      "lastDate": "2026-08-04",
      "bars": 1256,
      "symbol": "DX-Y.NYB",
      "label": "달러지수(DXY)",
      "unit": "",
      "digits": 1
    },
    "gold": {
      "current": 4136.0,
      "prevClose": 4033.699951171875,
      "changeAbs": 102.300048828125,
      "changePct": 2.536134320015664,
      "pctRank": 87.98727128082736,
      "min5y": 1623.300048828125,
      "max5y": 5318.39990234375,
      "ma20": 4060.6450317382814,
      "ma60": 4255.381673177083,
      "chg1m": -19.10009765625,
      "chg3m": -383.5,
      "chg1mPct": -0.4596784002152851,
      "chg3mPct": -8.485451930523288,
      "lastDate": "2026-08-04",
      "bars": 1257,
      "symbol": "GC=F",
      "label": "금",
      "unit": "$",
      "digits": 0
    },
    "us30y": {
      "current": 5.275000095367432,
      "prevClose": 5.208000183105469,
      "changeAbs": 0.06699991226196289,
      "changePct": 1.286480604960571,
      "pctRank": 99.92025518341308,
      "min5y": 1.6779999732971191,
      "max5y": 5.275000095367432,
      "ma20": 5.111850070953369,
      "ma60": 5.029166714350382,
      "chg1m": 0.30900001525878906,
      "chg3m": 0.28800010681152344,
      "chg1mPct": 6.2223119265843625,
      "chg3mPct": 5.775017194153233,
      "lastDate": "2026-07-31",
      "bars": 1254,
      "symbol": "^TYX",
      "label": "미국 30년물 금리",
      "unit": "%",
      "digits": 2
    }
  },
  "yieldSpread": 1.062999963760376,
  "sector": {
    "groups": {
      "빅테크·SW": {
        "ret1m": 0.2272710310122772,
        "ret3m": -2.2704383872973577,
        "ret6m": -5.181507575322952,
        "ret1y": 0.9306339489453475,
        "winRate": 60.8,
        "count": 9
      },
      "반도체": {
        "ret1m": -18.903662728156757,
        "ret3m": 15.522802326916295,
        "ret6m": 59.97092035297047,
        "ret1y": 210.81732601089846,
        "winRate": 71.5,
        "count": 15
      }
    },
    "pair": [
      "빅테크·SW",
      "반도체"
    ],
    "corr60": 0.14835791704965293,
    "corrPctRank": 0.5029337803855826,
    "corrMin5y": 0.11496792019743002,
    "corrMedian5y": 0.7115784818334243,
    "corrMax5y": 0.9346528705205663
  },
  "news": [
    {
      "headline": "EXCLUSIVE: US has used 'virtually all' of its long-range precision missiles during Iran war, sources say - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxOZjVoa01lTFhQYVMtVjRxRWZKSng1YzFUTTNJOVI1T1pWZVNKc1czOWhJWHB3VDFFWnVrY3lLT1FnSVBfU1M1RFdrU2FsYVlKZXdhVm9VbF9PaEFNeGVMR0ZtNmlEeGhkWG1iang1U0kzb3hmWENGSnNXODRzdnZYaE1LYkY4Vm1hbzJEcEl1ZzZIRVBQLS1nYUYyTWdDdjZjXzN0NmtuZm5IV2FEdlBQby1UUnBqc0FF?oc=5",
      "datetime": 1785843294,
      "headlineKo": "독점: 미국은 이란 전쟁 중 장거리 정밀 미사일을 '거의 모두' 사용했다고 소식통은 전했습니다. - 로이터 통신"
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
      "headline": "Iran demands Hormuz inbound control, outbound oversight, source says - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxOSjFmUC1OVjJCS05weXNFTmhaZkRab0dwSVV1LXJ5dEp2ZVNxX0l6QVdLQTN3SUdtSS1pOVF4OEYxRzZHbUJNeXk5ZmJnUG5FVVFScEJnOEUyM3FLWWhzQk8yME1VcW42X3dPOURqRi03QlN6RnZLMGFfWW5LWUVmUDctVDR0YXRhWTAwbTJRaUdKYTNJb2NuS2hrNjRpOVdlZjBPRTVzNXhUbjRpdmRFSGdkVHlGUnpJYjRGTQ?oc=5",
      "datetime": 1785838802,
      "headlineKo": "이란은 호르무즈에게 인바운드 통제와 아웃바운드 감독을 요구한다고 소식통은 전했습니다."
    },
    {
      "headline": "Turkey calls on Russia, Ukraine to ensure Black Sea safety after drone attack - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxNLWxZWjEzUHh2dXNYYUxyS2RjbUhHTXh1RHpVTjZwUUpScFlZbnFUVDkwUlR3bXJMU3otWDY4Q2cyTml6dXV2YVJIZkdiN0lnZUV0T19VN1QwRUY4ZmU5bjNhUHJfU2tWeEw4RVFoTUN4R2lGaW1WSXpzUWxaVmZWSF9kRGhLcE9GU1lxaHp4N0xnNFp0MG9lMkZEeTd4TTEyTTBySlEzYVJFM0RSdjFTRHJZbnFmdFBISndla004RHVTQQ?oc=5",
      "datetime": 1785834946,
      "headlineKo": "터키, 러시아와 우크라이나에 드론 공격 후 흑해 안전 보장 촉구 - 로이터 통신"
    },
    {
      "headline": "Goldman sees Brent at $80-$90 until US-Iran deal or major escalation - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxOZ3RQcExCZTFRck1VT3ZpMWV3YkxZVElmR18wQ3RGa2lpbDFNWU11alJoaVdFM2Z0M0t6V2wtdzkwNThqVHFPSW5HWHVOeHJzM3NJdnRuMEFfUnVwS09TS1hkWUVJZXBQNTVFbEMzbG41ZXdqR0V1TjdpV2pGY1BTV2pmSGwzdjRqZWJkR1VCTlE4aUpkNHk3b25YdG05eHRMdXBzZFhiZTJ4d19zcFBXZmtkYy1LZw?oc=5",
      "datetime": 1785833143,
      "headlineKo": "골드만삭스는 미국-이란 협상 또는 대규모 확대 전까지 브렌트유 가격을 80~90달러로 본다 - Reuters"
    },
    {
      "headline": "BP's quarterly profit doubles to over $5 billion after Iran war oil surge - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxOdU9hYzNQV1Ezbmd5OXB4Z1d4QTR0QU80Z0MteS03b002RE5yd2hPb2l5Z0NqLWJ4Y21PSTN0Z29UNVBBVEVyRDRGc0VNUnoySWNlcWU4cUlVXy1iNWd0MVA3V3pXLXN1ZHlyQWcyNzRfcmNxYnJKWFBQTWZ1anZtajRzcFRSd3BIQWJhOVlfQXZUaVU2Y1RlTUhqcHBQZ1ItTjhJeEg0NA?oc=5",
      "datetime": 1785823740,
      "headlineKo": "이란 전쟁 석유 급증 이후 BP의 분기 수익은 50억 달러 이상으로 두 배 증가 - Reuters"
    },
    {
      "headline": "OPEC+ oil output hike is irrelevant for now, not for later - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxOZ1F5SEtvVzlTU0VibXRmNGx4ZldyYllQcHBfSEkzRHVLVGdrNUxMLUZtQXZsT1pTWjJ4Z1F0ekFyN3NkWjRITjdCc2NtcmpFZ0k2OWN5Z25WOVVFVHpJNEVWQkU3emxZYkUtVFhFand1cWVHSWUyRUpQa1FOOUtPWlRKUzRVQUs3V3oxcWphVzVKUUhSSUNZaHNtdHVkM1U5VXE2Q0ZPNzE4UG5WQmdVS2cwZlU3UnNN?oc=5",
      "datetime": 1785823200,
      "headlineKo": "OPEC+ 석유 생산량 증가는 지금은 중요하지 않고 나중도 중요하지 않습니다 - Reuters"
    },
    {
      "headline": "Aramco profit jumps 44% on Iran war oil spike, warns on global inventories - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMikAFBVV95cUxOcXFsci0ySk53THJaUktvbFlJd0ZjTzhFNmJSU0gtY1B5RElscWFhWHJLWTcxdlJ1SDhhV1dJcmQteVdaT0NLekZaMU05V2tockhvaGFtYlgzbk5OdWpDVEM4TmFoX2FpZFMyQWdxTzJ2SkdzYVExYVdRWHBKVlNPcTBzX1hub05WWk45TE1HVDM?oc=5",
      "datetime": 1785821520,
      "headlineKo": "이란 전쟁유 급증으로 Aramco 이익 44% 급증, 글로벌 재고 경고 - Reuters"
    },
    {
      "headline": "Toyota lifts annual forecast and unveils $6 billion buyback, but shares fall - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMi0gFBVV95cUxQSy1kNU1lRXkxX25PQUFPbTQtT2FCaXp3VHNJb0N6czVieVFvZmY1U1lta3NzVEdwRUEzQmd6b2h0dmtOTTVyZmNTTDhiVU1od3dCWFN6U2JRMFRZeTE2cnBwTHpGekxMNzhGRk1CMnZSRllsdG5UZmpmXzRoNTVKeDlQUlBwMWFlUG9KbzJGOGkzZGtUajh4V1R2WmhMdXdiVVNiZlFiLTZHbHhlUExSS05QdnU2RFRUUTRuQ3ZsM2M1M0RSdkxFajVMWU4ycDVGanc?oc=5",
      "datetime": 1785820080,
      "headlineKo": "도요타, 연간 전망 상향하고 60억 달러 자사주 매입 발표했지만 주가 하락 - Reuters"
    },
    {
      "headline": "Oil traders set to wind down UAE exchange positions after ADNOC benchmark change - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxNTTIzRWd4cTNxUHJ2NTJfQTNMVjIyRnJrN0U0NGFMNzNHdVJscGsxQ0tPeHljNVVjd0p0MU1FM3FEcXdfR05zR3c5QVB4czU0V1BfamdIVUtLdWZNa3BCb0ozM2NPZkU2WFNFSGFKbmVkUXZiOGNhbnBZRWQwNkNINWlWTm5QdW1hbXpCZDBDVXhUZmQ1b0ZLZ2dOelRJbkVlN0RjNXozSUdmVXdnSW01VnVBTzIyTVVzY2VmRUNPTlczWGZSNzQ5eQ?oc=5",
      "datetime": 1785818760,
      "headlineKo": "ADNOC 벤치마크 변경 후 석유 거래자들, UAE 거래소 포지션 축소 예정 - Reuters"
    },
    {
      "headline": "Status of US-Iran talks uncertain as ship struck in Hormuz - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxOaUY3M2pidURfcVlodzZaVEctbGNSYS1rNlJrR21pQm8yVm50U05QSmRlWURQWWh5UklWZUVMVmlRdzhmbVJrN05IdVNXVW83T3l1TUo0ZjJTMzNURzlOdmNMM2YxY2JwVHQtby1aTFVfZmFnSjRFT0hSaHlzeW50XzNPcUZROG13MUxxNVMwdGd3UkR2cTgyeURHNERQWlUxeFJYR1ln?oc=5",
      "datetime": 1785814860,
      "headlineKo": "호르무즈 선박 충돌로 미국-이란 회담 상태 불확실 - 로이터"
    }
  ],
  "_fetched_at": 1785844962.0873754,
  "_updated_label": "2026-08-04 21:03"
};
