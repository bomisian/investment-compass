// 자동 생성 파일 - buy_signal_telegram.py 실행 시마다 갱신됨. 직접 수정하지 마세요.
// 시장 환경 지표(야후) + 시장 헤드라인(Finnhub). 이 파일이 없어도 대시보드는 정상 동작함.
const MARKET_DATA = {
  "indicators": {
    "vix": {
      "current": 15.289999961853027,
      "prevClose": 15.149999618530273,
      "changeAbs": 0.1400003433227539,
      "changePct": 0.9240946986659764,
      "pctRank": 23.00955414012739,
      "min5y": 11.859999656677246,
      "max5y": 52.33000183105469,
      "ma20": 17.183999872207643,
      "ma60": 17.274666627248127,
      "chg1m": -0.5500001907348633,
      "chg3m": -1.9000005722045898,
      "chg1mPct": -3.4722233929082753,
      "chg3mPct": -11.052940739822676,
      "lastDate": "2026-08-07",
      "bars": 1256,
      "symbol": "^VIX",
      "label": "VIX (공포지수)",
      "unit": "",
      "digits": 2
    },
    "us10y": {
      "current": 4.670000076293945,
      "prevClose": 4.617000102996826,
      "changeAbs": 0.05299997329711914,
      "changePct": 1.1479309533200497,
      "pctRank": 97.45019920318725,
      "min5y": 1.2419999837875366,
      "max5y": 4.98799991607666,
      "ma20": 4.627899980545044,
      "ma60": 4.538316647211711,
      "chg1m": 0.10100030899047852,
      "chg3m": 0.31400012969970703,
      "chg1mPct": 2.210556229686282,
      "chg3mPct": 7.208451183412197,
      "lastDate": "2026-08-06",
      "bars": 1255,
      "symbol": "^TNX",
      "label": "미국 10년물 금리",
      "unit": "%",
      "digits": 2
    },
    "us3m": {
      "current": 3.7320001125335693,
      "prevClose": 3.7249999046325684,
      "changeAbs": 0.0070002079010009766,
      "changePct": 0.18792504913343006,
      "pctRank": 37.60956175298805,
      "min5y": 0.019999999552965164,
      "max5y": 5.3480000495910645,
      "ma20": 3.722949981689453,
      "ma60": 3.6641833345095316,
      "chg1m": 0.009000062942504883,
      "chg3m": 0.13200020790100098,
      "chg1mPct": 0.24174221924851846,
      "chg3mPct": 3.6666725388281223,
      "lastDate": "2026-08-06",
      "bars": 1255,
      "symbol": "^IRX",
      "label": "미국 3개월 금리",
      "unit": "%",
      "digits": 2
    },
    "oil": {
      "current": 77.33000183105469,
      "prevClose": 77.29000091552734,
      "changeAbs": 0.04000091552734375,
      "changePct": 0.05175432145622821,
      "pctRank": 52.66507557677009,
      "min5y": 55.27000045776367,
      "max5y": 123.69999694824219,
      "ma20": 81.77649955749511,
      "ma60": 83.67466659545899,
      "chg1m": 5.25,
      "chg3m": -17.479995727539062,
      "chg1mPct": 7.283573621855971,
      "chg3mPct": -18.436869715913883,
      "lastDate": "2026-08-07",
      "bars": 1257,
      "symbol": "CL=F",
      "label": "WTI 유가",
      "unit": "$",
      "digits": 1
    },
    "dollar": {
      "current": 99.91999816894531,
      "prevClose": 99.97000122070312,
      "changeAbs": -0.0500030517578125,
      "changePct": -0.05001805656420979,
      "pctRank": 35.24264120922832,
      "min5y": 92.04000091552734,
      "max5y": 114.11000061035156,
      "ma20": 100.66700057983398,
      "ma60": 100.25933367411295,
      "chg1m": -1.0200042724609375,
      "chg3m": 1.6699981689453125,
      "chg1mPct": -1.0105054961268012,
      "chg3mPct": 1.6997436834048985,
      "lastDate": "2026-08-07",
      "bars": 1257,
      "symbol": "DX-Y.NYB",
      "label": "달러지수(DXY)",
      "unit": "",
      "digits": 1
    },
    "gold": {
      "current": 4366.2998046875,
      "prevClose": 4242.0,
      "changeAbs": 124.2998046875,
      "changePct": 2.930216989332862,
      "pctRank": 91.16945107398568,
      "min5y": 1623.300048828125,
      "max5y": 5318.39990234375,
      "ma20": 4086.040002441406,
      "ma60": 4233.6616617838545,
      "chg1m": 235.69970703125,
      "chg3m": -333.5,
      "chg1mPct": 5.706185577368982,
      "chg3mPct": -7.096046935177383,
      "lastDate": "2026-08-07",
      "bars": 1257,
      "symbol": "GC=F",
      "label": "금",
      "unit": "$",
      "digits": 0
    },
    "us30y": {
      "current": 5.2129998207092285,
      "prevClose": 5.173999786376953,
      "changeAbs": 0.03900003433227539,
      "changePct": 0.7537695388964215,
      "pctRank": 99.76095617529882,
      "min5y": 1.6779999732971191,
      "max5y": 5.275000095367432,
      "ma20": 5.144550037384033,
      "ma60": 5.045216711362203,
      "chg1m": 0.14799976348876953,
      "chg3m": 0.26999998092651367,
      "chg1mPct": 2.922009117804196,
      "chg3mPct": 5.462269667772888,
      "lastDate": "2026-08-06",
      "bars": 1255,
      "symbol": "^TYX",
      "label": "미국 30년물 금리",
      "unit": "%",
      "digits": 2
    }
  },
  "yieldSpread": 0.937999963760376,
  "sector": {
    "groups": {
      "빅테크·SW": {
        "ret1m": 6.16886209848031,
        "ret3m": -0.14391525662681426,
        "ret6m": 5.92225882644406,
        "ret1y": 7.079007602820675,
        "winRate": 60.8,
        "count": 9
      },
      "반도체": {
        "ret1m": -7.169818412605922,
        "ret3m": 9.122463050608731,
        "ret6m": 84.01173328712144,
        "ret1y": 242.19200681664225,
        "winRate": 71.5,
        "count": 15
      }
    },
    "pair": [
      "빅테크·SW",
      "반도체"
    ],
    "corr60": 0.20886693837289294,
    "corrPctRank": 2.0938023450586267,
    "corrMin5y": 0.11496792019743002,
    "corrMedian5y": 0.7115784818334243,
    "corrMax5y": 0.9346528705205663
  },
  "news": [
    {
      "headline": "Saudi Arabia, Turkey and Pakistan to sign joint defence deal amid regional turmoil - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxNU2lUV2RTOWpHY1ZMeHh4SVNOUnV4TXZNQjZoa2ZXSmg1SnNGX2lGOEJUdy0taTQyNmJaRzNKdHdNUEQtYzhsOFROeEhHWk11LUlKTy13VmE0dlJuSHpveG1xSTBjNTZZOXJrWGNyU1NSbUpraEFHdTBjNHowdWluRUU5a0lsY3NuY1FmMDViMVJMMkN4VzVydm9aeng4eWxDV1lkVFBwWTNTVzFTaTJJcWxoUFdBTE9zZUx1U0VNYnlQTFNQd18yYg?oc=5",
      "datetime": 1786089228,
      "headlineKo": "사우디아라비아, 터키, 파키스탄, 지역 혼란 속에서 공동 방위 협정 체결 - 로이터 통신"
    },
    {
      "headline": "AI demand keeps China's export engine humming, but risks loom - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMipAFBVV95cUxQcmhJQUR2QVh5SHpuWDZ2ZFk3RWdCbDlINEY1MEZuc0tRbkJQT3FuRmQ1WDdtd2owTmhJeDdIU09EYkFiNEJpTnA3cWhQQ1dnWUpkWDJPVENiZDIzTXlNUlRNenF2VlRXM29EbFFJelBiTUhuU1cycU5EV3RvaVhIbU4yc0pNWDM2aGlCaGtSTG5ySGx3aXhFcTNRTkZ4cFlva3k0cA?oc=5",
      "datetime": 1786083276,
      "headlineKo": "AI 수요로 인해 중국의 수출 엔진이 활발하게 작동하지만 위험은 닥칠 것임 - Reuters"
    },
    {
      "headline": "Vessel traffic through Hormuz dwindles this week as markets watch Iran-Oman talks - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiygFBVV95cUxPYjdYbS1fZXZGWktSZkVpMk4temZNOUY1cEFsQUxTRXRNQnJUai1lY2xTMDE5dmFMZjUyUzZQclRyQUJuVTFVXzB6RGtpeXlFeU8xZjNiVWp4dVVNTkVWcVhCVEpsVVdTa1lsZEVfVUlSWHBlMjh0UDNYdkpjS3BHVjA2MUUtSXU0OTNEZ1lCUW9iYkliLUxSN2JSTTlFbEktaGRTb2UzcUxNMjlaZGtQSmt1S1FWYzlvdlkwdDM3WjY0dHZTRU9VWFFB?oc=5",
      "datetime": 1786077180,
      "headlineKo": "시장이 이란-오만 회담을 지켜보면서 이번 주 호르무즈를 통과하는 선박 교통량이 감소합니다 - Reuters"
    },
    {
      "headline": "Everybody wants energy security post the Iran war, but how? - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiugFBVV95cUxNY0VHNVlqVEZlcUZuWHpGVjZmak5COW1JRHVnLUVfUExEbF9NTEZ3SVRIZFhDeF84SmZ4Y2xwcDczb1oxSzNHWUFZT1JkWFhFb3FXTFJRTTFjUmpNVHdYdW5nX1A5WnNOVmpSOGRKcUduY0RhOWMwbE41eklWODdQVldLZ3RONm1SREtRZVhKTkt0cGxmTnBsWDVHNENUZWhwVjZhcG1BQ21rUGlVZ3FzSmNpamFsNFVCSnc?oc=5",
      "datetime": 1786077010,
      "headlineKo": "모두가 이란 전쟁 이후 에너지 안보를 원하지만 어떻게 그럴 수 있을까요? - 로이터"
    },
    {
      "headline": "Dollar set for weekly gain as traders eye Iran talks, US jobs data - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxPOUNvR1pacXVtTWI3eUROeE54TXVYY3JEU1FNSFA4YlBaVFp6MDFXY0tFaFpqSFBfM2R2WTJQVDVtNG5RN3ozQkZLTTZpTGN5aDMzUE9uUVAyanZWN0VWcnVzWlF1aDh6Y0k2dlY4WWpsMFRMdFNoRW81Y1M2WW9qNTlPSWZVZGFnRVh1eEVTTXhWSlhOQkgyRFJfUm5nMGtGaHRUbnlITTRidldKOFg3ZEg5NnRLR3dj?oc=5",
      "datetime": 1786068300,
      "headlineKo": "트레이더들이 이란 회담과 미국 고용 데이터를 주목하면서 달러는 주간 상승세를 기록했습니다 - Reuters"
    },
    {
      "headline": "Gold heads for best week since January, US jobs data in focus - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxPbWpUMWdTeEtHNmJ5VDlJZU9tOGp0d0xFQTBlT2xXUHBTSENUdHowV0JkLTFockFBbUl6T0hHT29nUjN5XzR0RWlCbU9VQjZBY2pJd0o5dmFhel9VeGZqV0E1VFpEZjJ3dWk1T2I5aERGNE41dVlkWlFFeHFsUm80RVVPTkNlX2lKc0tJTEtBRURzbXZZMWI5YnlHS1dlWWJyRkFsSmxXM2NWdU5qV1lj?oc=5",
      "datetime": 1786065240,
      "headlineKo": "금은 1월 이후 최고의 한 주를 향했고, 미국 일자리 데이터에 초점이 맞춰져 있습니다 - Reuters"
    },
    {
      "headline": "Oil rises on concerns over Strait of Hormuz reopening plans - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxNN0Z0cU1oY1hpbHZmZ1JoanRWLXVubmFlTDlWbkpqQ3V1d2dYYlV1U18zVEJ1Zkh1QXFFYm51SVJtZ1ctNHRGYnVlZGk3X0xKcVRHdW5MMzlDM2VQWDBYcmlWc25WX2VaWEJITEJCb2lOOFJsNFRiX0NYOVhCcmxEMWVLVGZXSkJfUzJzQXB2ZTFSMlJnZTczRWVJU3ZTUHEyeWNhcFBuSlI?oc=5",
      "datetime": 1786063620,
      "headlineKo": "호르무즈 해협 재개 계획 우려로 유가 상승 - 로이터"
    },
    {
      "headline": "Jim Cramer highlights 5 investing themes — and the stocks to buy for each",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/06/jim-cramer-5-investing-themes-stocks-to-buy.html",
      "datetime": 1786055005,
      "headlineKo": "Jim Cramer는 5가지 투자 테마와 각 테마에 대해 매수할 주식을 강조합니다."
    },
    {
      "headline": "Turkey, Saudi Arabia, Pakistan to sign joint defence agreement in Saudi Arabia on Friday, sources say - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiywFBVV95cUxPVWlCbG9KRkh2aHRNSjBWS25TWEM3V3Y5aDlfbFcwNGZIaldpZ25rNlpGUGVtcDFRQ0JUWnZ5NnhwSGJSZjBSRm5idU9iNFNUcEMxcFJDb0FrcjBUU2JvemN0OWYxazdOS3hzMHBxVVJvOVlsQ1RQcEIyT0R0NXFxSU01SDJJdm1hZklPSEYxSEQxS0t6WFpMemlDdWpFcXh5bW0wMUM3ODBBSjVPVHNJTk5rQ2ViSHdTWWlQeWQ0YjR4MjJNVTdXNDBqcw?oc=5",
      "datetime": 1786053823,
      "headlineKo": "터키, 사우디아라비아, 파키스탄이 금요일 사우디아라비아에서 공동방위협정에 서명할 것이라고 소식통이 전했습니다."
    },
    {
      "headline": "Houthi attack on Saudi Arabia wounds 11 civilians as kingdom warns of wider threat - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxPa3M0RkZsT0JHNHhwVXVvVURQZWs0R1hMbHFpa0RsdXE4MjNaME9lUXc4bXc1M1J4em93djJwZ3U4bS1UczdEaVJDRENsYXlYS2xJQ19ZeTVmRU1mLTBxWHFySVIzRjh3OG5JWFU5b1BpNjYtUlFDNzllUG56Tm9VcTgyYUExX1FzZ3ltLWxXNEE2R3NYZ2I4bTRRUFZtbm5WQUo2UDc2X2hUb3ZaOUpvdVVFWFdQdmx0NXFaeHl3XzdjQQ?oc=5",
      "datetime": 1786052580,
      "headlineKo": "사우디아라비아에 대한 후티 공격으로 민간인 11명 부상, 사우디 왕국이 더 큰 위협 경고 - 로이터 통신"
    },
    {
      "headline": "Bomb planted on minibus kills two near Damascus, Syrian officials say - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiygFBVV95cUxQWFkyalJWQ2txUksxbXpvMFRkWUJYSkVlNjBGTXVjRnFJOF9ONkJ2ZWUyUG9uMmxWSENpMFpoSUlZdzRwNVJZWU1wY0tHSmxCNy04S2xBQjRvYWtEeVNPb3hpQ0tIY2ZiR3BqRURVazhJSG9uZFBfc1EwTzVGZWs1cHpUUzlYU3hkZ3hJLWVmcGZaSl9ONFdlbzhPajNiYWo3RkQ4T1BqWVY0c2twZlFINFBmZDdOMXJ2cjZMSEhQOGFXMmh5cEEwaXR3?oc=5",
      "datetime": 1786051873,
      "headlineKo": "다마스쿠스 근처에서 미니버스에 폭탄이 설치돼 2명이 사망했다고 시리아 관리들이 밝혔습니다."
    },
    {
      "headline": "Trump says he thinks war with Iran will end 'pretty soon' - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxOX1cxUm9wLUhEVGJsRnRJd0xDWmh6LUk2bThTQ0RSWFJDRFZ1OFNKWU5ab2t5ZGJIdjVnSkliUTI0N3dhNnBpSEJGSmRWWl80Z3NNT0lnUEItRGVxT2dsRU1fS3A0MVUzblJsOWx4bGlLY0JNa3FDT2lpY1hhNkMycnl2UWlFbEUxUFRKWGJDQ0k4eG5EZlRXTk1IajFlYkZjRk5PWW84WFR2MnVBeFE?oc=5",
      "datetime": 1786050714,
      "headlineKo": "트럼프 \"이란과의 전쟁 곧 끝날 것\" - 로이터"
    }
  ],
  "_fetched_at": 1786096126.9866693,
  "_updated_label": "2026-08-07 18:49"
};
