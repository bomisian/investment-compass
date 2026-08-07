// 자동 생성 파일 - buy_signal_telegram.py 실행 시마다 갱신됨. 직접 수정하지 마세요.
// 시장 환경 지표(야후) + 시장 헤드라인(Finnhub). 이 파일이 없어도 대시보드는 정상 동작함.
const MARKET_DATA = {
  "indicators": {
    "vix": {
      "current": 15.180000305175781,
      "prevClose": 15.149999618530273,
      "changeAbs": 0.030000686645507812,
      "changePct": 0.19802433927993873,
      "pctRank": 22.372611464968152,
      "min5y": 11.859999656677246,
      "max5y": 52.33000183105469,
      "ma20": 17.17849988937378,
      "ma60": 17.27283329963684,
      "chg1m": -0.6599998474121094,
      "chg3m": -2.010000228881836,
      "chg1mPct": -4.166665663221479,
      "chg3mPct": -11.692845645347894,
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
      "current": 76.61000061035156,
      "prevClose": 77.29000091552734,
      "changeAbs": -0.6800003051757812,
      "changePct": -0.8798037225008897,
      "pctRank": 49.96022275258552,
      "min5y": 55.27000045776367,
      "max5y": 123.69999694824219,
      "ma20": 81.74049949645996,
      "ma60": 83.66266657511393,
      "chg1m": 4.529998779296875,
      "chg3m": -18.199996948242188,
      "chg1mPct": 6.284681831605041,
      "chg3mPct": -19.19628458696496,
      "lastDate": "2026-08-07",
      "bars": 1257,
      "symbol": "CL=F",
      "label": "WTI 유가",
      "unit": "$",
      "digits": 1
    },
    "dollar": {
      "current": 99.87699890136719,
      "prevClose": 99.97000122070312,
      "changeAbs": -0.0930023193359375,
      "changePct": -0.09303022726849516,
      "pctRank": 34.765314240254575,
      "min5y": 92.04000091552734,
      "max5y": 114.11000061035156,
      "ma20": 100.66485061645508,
      "ma60": 100.25861701965331,
      "chg1m": -1.0630035400390625,
      "chg3m": 1.6269989013671875,
      "chg1mPct": -1.0531043335927357,
      "chg3mPct": 1.6559785255645676,
      "lastDate": "2026-08-07",
      "bars": 1257,
      "symbol": "DX-Y.NYB",
      "label": "달러지수(DXY)",
      "unit": "",
      "digits": 1
    },
    "gold": {
      "current": 4383.10009765625,
      "prevClose": 4242.0,
      "changeAbs": 141.10009765625,
      "changePct": 3.3262634996758607,
      "pctRank": 91.3285600636436,
      "min5y": 1623.300048828125,
      "max5y": 5318.39990234375,
      "ma20": 4086.880017089844,
      "ma60": 4233.941666666667,
      "chg1m": 252.5,
      "chg3m": -316.69970703125,
      "chg1mPct": 6.112913233679325,
      "chg3mPct": -6.738578667018522,
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
      "headline": "Martha's Vineyard African American Film Festival set for record attendance despite macro challenges",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/07/marthas-vineyard-african-american-film-festival-set-for-record-attendance.html",
      "datetime": 1786100401,
      "headlineKo": "마사스 빈야드 아프리카계 미국인 영화제(Martha's Vineyard African American Film Festival)는 거시적인 어려움에도 불구하고 기록적인 참석률을 기록했습니다."
    },
    {
      "headline": "Saudi Arabia, Turkey and Pakistan to sign joint defence deal amid regional turmoil - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxNU2lUV2RTOWpHY1ZMeHh4SVNOUnV4TXZNQjZoa2ZXSmg1SnNGX2lGOEJUdy0taTQyNmJaRzNKdHdNUEQtYzhsOFROeEhHWk11LUlKTy13VmE0dlJuSHpveG1xSTBjNTZZOXJrWGNyU1NSbUpraEFHdTBjNHowdWluRUU5a0lsY3NuY1FmMDViMVJMMkN4VzVydm9aeng4eWxDV1lkVFBwWTNTVzFTaTJJcWxoUFdBTE9zZUx1U0VNYnlQTFNQd18yYg?oc=5",
      "datetime": 1786099504,
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
      "headline": "Dollar set for weekly gain as traders eye Iran talks, US jobs data - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxPOUNvR1pacXVtTWI3eUROeE54TXVYY3JEU1FNSFA4YlBaVFp6MDFXY0tFaFpqSFBfM2R2WTJQVDVtNG5RN3ozQkZLTTZpTGN5aDMzUE9uUVAyanZWN0VWcnVzWlF1aDh6Y0k2dlY4WWpsMFRMdFNoRW81Y1M2WW9qNTlPSWZVZGFnRVh1eEVTTXhWSlhOQkgyRFJfUm5nMGtGaHRUbnlITTRidldKOFg3ZEg5NnRLR3dj?oc=5",
      "datetime": 1786068300,
      "headlineKo": "트레이더들이 이란 회담과 미국 고용 데이터를 주목하면서 달러는 주간 상승세를 기록했습니다 - Reuters"
    },
    {
      "headline": "Gold set for best week since January as inflation fears ebb - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxPbWpUMWdTeEtHNmJ5VDlJZU9tOGp0d0xFQTBlT2xXUHBTSENUdHowV0JkLTFockFBbUl6T0hHT29nUjN5XzR0RWlCbU9VQjZBY2pJd0o5dmFhel9VeGZqV0E1VFpEZjJ3dWk1T2I5aERGNE41dVlkWlFFeHFsUm80RVVPTkNlX2lKc0tJTEtBRURzbXZZMWI5YnlHS1dlWWJyRkFsSmxXM2NWdU5qV1lj?oc=5",
      "datetime": 1786065240,
      "headlineKo": "인플레이션 우려가 쇠퇴함에 따라 금은 1월 이후 최고의 주를 기록했습니다 - Reuters"
    },
    {
      "headline": "Everybody wants energy security post the Iran war, but how? - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiugFBVV95cUxNY0VHNVlqVEZlcUZuWHpGVjZmak5COW1JRHVnLUVfUExEbF9NTEZ3SVRIZFhDeF84SmZ4Y2xwcDczb1oxSzNHWUFZT1JkWFhFb3FXTFJRTTFjUmpNVHdYdW5nX1A5WnNOVmpSOGRKcUduY0RhOWMwbE41eklWODdQVldLZ3RONm1SREtRZVhKTkt0cGxmTnBsWDVHNENUZWhwVjZhcG1BQ21rUGlVZ3FzSmNpamFsNFVCSnc?oc=5",
      "datetime": 1786064074,
      "headlineKo": "모두가 이란 전쟁 이후 에너지 안보를 원하지만 어떻게 그럴 수 있을까요? - 로이터"
    },
    {
      "headline": "Oil prices drop as investors weigh potential Hormuz deal between Iran, Gulf states - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxNN0Z0cU1oY1hpbHZmZ1JoanRWLXVubmFlTDlWbkpqQ3V1d2dYYlV1U18zVEJ1Zkh1QXFFYm51SVJtZ1ctNHRGYnVlZGk3X0xKcVRHdW5MMzlDM2VQWDBYcmlWc25WX2VaWEJITEJCb2lOOFJsNFRiX0NYOVhCcmxEMWVLVGZXSkJfUzJzQXB2ZTFSMlJnZTczRWVJU3ZTUHEyeWNhcFBuSlI?oc=5",
      "datetime": 1786063620,
      "headlineKo": "투자자들이 이란과 걸프 국가 간의 호르무즈 거래 가능성을 고려하면서 유가 하락 - Reuters"
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
      "headline": "Saudi expects imminent two-pronged attack from Iran's allies, official says - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxPa3M0RkZsT0JHNHhwVXVvVURQZWs0R1hMbHFpa0RsdXE4MjNaME9lUXc4bXc1M1J4em93djJwZ3U4bS1UczdEaVJDRENsYXlYS2xJQ19ZeTVmRU1mLTBxWHFySVIzRjh3OG5JWFU5b1BpNjYtUlFDNzllUG56Tm9VcTgyYUExX1FzZ3ltLWxXNEE2R3NYZ2I4bTRRUFZtbm5WQUo2UDc2X2hUb3ZaOUpvdVVFWFdQdmx0NXFaeHl3XzdjQQ?oc=5",
      "datetime": 1786052580,
      "headlineKo": "사우디는 이란 동맹국으로부터 두 갈래의 공격이 임박할 것으로 예상한다고 관계자가 밝혔습니다 - 로이터"
    },
    {
      "headline": "Bomb planted on minibus kills two near Damascus, Syrian officials say - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiygFBVV95cUxQWFkyalJWQ2txUksxbXpvMFRkWUJYSkVlNjBGTXVjRnFJOF9ONkJ2ZWUyUG9uMmxWSENpMFpoSUlZdzRwNVJZWU1wY0tHSmxCNy04S2xBQjRvYWtEeVNPb3hpQ0tIY2ZiR3BqRURVazhJSG9uZFBfc1EwTzVGZWs1cHpUUzlYU3hkZ3hJLWVmcGZaSl9ONFdlbzhPajNiYWo3RkQ4T1BqWVY0c2twZlFINFBmZDdOMXJ2cjZMSEhQOGFXMmh5cEEwaXR3?oc=5",
      "datetime": 1786051873,
      "headlineKo": "다마스쿠스 근처에서 미니버스에 폭탄이 설치돼 2명이 사망했다고 시리아 관리들이 밝혔습니다."
    }
  ],
  "_fetched_at": 1786104002.5354178,
  "_updated_label": "2026-08-07 21:00"
};
