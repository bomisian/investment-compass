// 자동 생성 파일 - buy_signal_telegram.py 실행 시마다 갱신됨. 직접 수정하지 마세요.
// 시장 환경 지표(야후) + 시장 헤드라인(Finnhub). 이 파일이 없어도 대시보드는 정상 동작함.
const MARKET_DATA = {
  "indicators": {
    "vix": {
      "current": 17.59000015258789,
      "prevClose": 15.84000015258789,
      "changeAbs": 1.75,
      "changePct": 11.047979691553794,
      "pctRank": 47.812251392203656,
      "min5y": 11.859999656677246,
      "max5y": 52.33000183105469,
      "high1y": 31.049999237060547,
      "drawdown1y": -43.349434509509166,
      "ma20": 15.569000053405762,
      "ma60": 16.38399991989136,
      "chg1m": 3.3400001525878906,
      "chg3m": 1.3899993896484375,
      "chg1mPct": 23.438597562020284,
      "chg3mPct": 8.580242741891238,
      "lastDate": "2026-09-14",
      "bars": 1257,
      "symbol": "^VIX",
      "label": "VIX (공포지수)",
      "unit": "",
      "digits": 2
    },
    "us10y": {
      "current": 4.974999904632568,
      "prevClose": 4.943999767303467,
      "changeAbs": 0.031000137329101562,
      "changePct": 0.6270254609257296,
      "pctRank": 99.8406374501992,
      "min5y": 1.2769999504089355,
      "max5y": 4.98799991607666,
      "high1y": 4.974999904632568,
      "drawdown1y": 0.0,
      "ma20": 4.753499960899353,
      "ma60": 4.632399980227152,
      "chg1m": 0.2929997444152832,
      "chg3m": 0.5120000839233398,
      "chg1mPct": 6.258003724666372,
      "chg3mPct": 11.47210630723208,
      "lastDate": "2026-09-11",
      "bars": 1255,
      "symbol": "^TNX",
      "label": "미국 10년물 금리",
      "unit": "%",
      "digits": 2
    },
    "us3m": {
      "current": 3.9130001068115234,
      "prevClose": 3.8450000286102295,
      "changeAbs": 0.06800007820129395,
      "changePct": 1.7685325798520863,
      "pctRank": 42.31075697211155,
      "min5y": 0.019999999552965164,
      "max5y": 5.3480000495910645,
      "high1y": 3.927999973297119,
      "drawdown1y": -0.38187033064068787,
      "ma20": 3.7417500376701356,
      "ma60": 3.719533348083496,
      "chg1m": 0.20600008964538574,
      "chg3m": 0.29000020027160645,
      "chg1mPct": 5.55705661428254,
      "chg3mPct": 8.004421963912389,
      "lastDate": "2026-09-11",
      "bars": 1255,
      "symbol": "^IRX",
      "label": "미국 3개월 금리",
      "unit": "%",
      "digits": 2
    },
    "oil": {
      "current": 103.31999969482422,
      "prevClose": 100.05000305175781,
      "changeAbs": 3.2699966430664062,
      "changePct": 3.2683623621428315,
      "pctRank": 93.87430389817024,
      "min5y": 55.27000045776367,
      "max5y": 123.69999694824219,
      "high1y": 112.94999694824219,
      "drawdown1y": -8.525894213021346,
      "ma20": 89.56950149536132,
      "ma60": 81.82766698201497,
      "chg1m": 22.06999969482422,
      "chg3m": 18.44000244140625,
      "chg1mPct": 27.16307654747596,
      "chg3mPct": 21.72479151519259,
      "lastDate": "2026-09-14",
      "bars": 1257,
      "symbol": "CL=F",
      "label": "WTI 유가",
      "unit": "$",
      "digits": 1
    },
    "dollar": {
      "current": 99.51200103759766,
      "prevClose": 99.12000274658203,
      "changeAbs": 0.391998291015625,
      "changePct": 0.3954784908731677,
      "pctRank": 30.946698488464598,
      "min5y": 92.48999786376953,
      "max5y": 114.11000061035156,
      "high1y": 101.61000061035156,
      "drawdown1y": -2.0647569728881265,
      "ma20": 99.19609985351562,
      "ma60": 100.22320022583008,
      "chg1m": -0.447998046875,
      "chg3m": -0.23799896240234375,
      "chg1mPct": -0.4481773219069487,
      "chg3mPct": -0.23859545102991853,
      "lastDate": "2026-09-14",
      "bars": 1257,
      "symbol": "DX-Y.NYB",
      "label": "달러지수(DXY)",
      "unit": "",
      "digits": 1
    },
    "gold": {
      "current": 4325.2001953125,
      "prevClose": 4366.2001953125,
      "changeAbs": -41.0,
      "changePct": -0.9390316102320986,
      "pctRank": 88.38504375497216,
      "min5y": 1623.300048828125,
      "max5y": 5318.39990234375,
      "high1y": 5318.39990234375,
      "drawdown1y": -18.67478424466652,
      "ma20": 4465.560009765625,
      "ma60": 4239.528340657552,
      "chg1m": -38.39990234375,
      "chg3m": 110.2001953125,
      "chg1mPct": -0.8800050757257779,
      "chg3mPct": 2.614476757117438,
      "lastDate": "2026-09-14",
      "bars": 1257,
      "symbol": "GC=F",
      "label": "금",
      "unit": "$",
      "digits": 0
    },
    "us30y": {
      "current": 5.354000091552734,
      "prevClose": 5.361000061035156,
      "changeAbs": -0.006999969482421875,
      "changePct": -0.13057208361736616,
      "pctRank": 99.8406374501992,
      "min5y": 1.6779999732971191,
      "max5y": 5.361000061035156,
      "high1y": 5.361000061035156,
      "drawdown1y": -0.13057208361736405,
      "ma20": 5.254599952697754,
      "ma60": 5.138200004895528,
      "chg1m": 0.10699987411499023,
      "chg3m": 0.4029998779296875,
      "chg1mPct": 2.0392580461382415,
      "chg3mPct": 8.139766926707118,
      "lastDate": "2026-09-11",
      "bars": 1255,
      "symbol": "^TYX",
      "label": "미국 30년물 금리",
      "unit": "%",
      "digits": 2
    },
    "dow": {
      "current": 52573.2890625,
      "prevClose": 52064.1015625,
      "changeAbs": 509.1875,
      "changePct": 0.9780011269161137,
      "pctRank": 97.37051792828684,
      "min5y": 28725.509765625,
      "max5y": 54349.12109375,
      "high1y": 54349.12109375,
      "drawdown1y": -3.2674530802195734,
      "ma20": 53177.096875,
      "ma60": 52787.4994140625,
      "chg1m": -1196.98046875,
      "chg3m": 1724.5390625,
      "chg1mPct": -2.2261009274918053,
      "chg3mPct": 3.391507288773077,
      "lastDate": "2026-09-11",
      "bars": 1255,
      "symbol": "^DJI",
      "label": "다우존스 지수",
      "unit": "",
      "digits": 0
    }
  },
  "yieldSpread": 1.061999797821045,
  "sector": {
    "groups": {
      "빅테크·SW": {
        "ret1m": 6.008022299157445,
        "ret3m": 12.334889572904718,
        "ret6m": 15.64362126277965,
        "ret1y": 6.02198013767794,
        "winRate": 60.8,
        "count": 9
      },
      "반도체": {
        "ret1m": -0.5758732098544161,
        "ret3m": -7.854732603872594,
        "ret6m": 83.406050333445,
        "ret1y": 217.82848256584177,
        "winRate": 71.5,
        "count": 16
      },
      "AI 네트워킹·광통신": {
        "ret1m": -6.316839343109648,
        "ret3m": 5.85788495192161,
        "ret6m": 48.044210523009355,
        "ret1y": 209.08303126694,
        "winRate": null,
        "count": 3
      },
      "AI 전력·인프라": {
        "ret1m": -3.318102012434676,
        "ret3m": -0.04770912253628801,
        "ret6m": 15.980057260726156,
        "ret1y": 54.39893947829921,
        "winRate": null,
        "count": 12
      }
    },
    "pair": [
      "빅테크·SW",
      "반도체",
      "AI 네트워킹·광통신",
      "AI 전력·인프라"
    ],
    "corr60": 0.04894546722775104,
    "corrPctRank": 0.0,
    "corrMin5y": 0.04894546722775104,
    "corrMedian5y": 0.7046101936389526,
    "corrMax5y": 0.9306761077384692
  },
  "news": [
    {
      "headline": "College students feel more pressure to be perfect. Experts explain why",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/09/14/college-students-more-perfectionistic.html",
      "datetime": 1789383602
    },
    {
      "headline": "Trump downplays report China entities helped Iran before attack that killed US troops - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxPZF9XUXZXZ0J5UzkzN2pGQlpxQkI3dklSRmIyMDUzYWZqdzhZQXdYMlF5djdTNjAzcGUxRUVDdHdOU3hXWGlGb0J5bVAzTWRlWjNYaWV3eUczcHB2R3dudTBYZmRtZ3lOVy00ZUJycDJtZUlJMTZNaHRRVEFVRHdPUEpjSVhyTUpOd2Q4R2Z5ZGlscTdSNzd6VHRLSXJWMTc4NUlaZzAydWhRekFJdDF4R19nMmJhSVNsLWRLMUJTc2xOT0pU?oc=5",
      "datetime": 1789373328
    },
    {
      "headline": "AirBaltic files for Chapter 11 bankruptcy as Iran war costs bite - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMikgFBVV95cUxOSTBsQlVVMThMRmZ6a3gxOE5lRG1fbENPRnEwUmlWN3pXNUdGT1ZhMDZOQnFMbGZWZUk5ZTQzYUd0VVByOXdZVy01ZE85UTJ2dVBIZW1EX0ZzZjVaRjRyc09PTkpGQlJQc0JGQmh3b1J0NkllWFItWHhaNTVIRUxrbEJVaWQyVkpfcm0zcks0X1ZZdw?oc=5",
      "datetime": 1789368420
    },
    {
      "headline": "Morning Bid: Shipping oil gets ever harder, costlier - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMigwFBVV95cUxOYmJCUUMxaW05Wm0yazVud3pVRFlHLTJKai13QUcxaUhtX2dlTEJPcV9XOWZGSnRzdFRXejctZE1sUGZrcEd3Sy1JOUZxVktnQW9hVl9vbTVSdEhldXBEaUxQTlJRanQyWDFpQXNaTlE1UWUwaVgzMU8yTmF2dzFGYUNuUQ?oc=5",
      "datetime": 1789360380
    },
    {
      "headline": "COMMENTARY: Oil markets survived the Iran war sprint. Now comes the marathon - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxPYkNyZjhwWkFHcjR0aVV2b3lPNFROSy0tNDZBQVJpWE9JelJyVWhtNFJjWlY3OW56NmdXY2s3Q0luV1h1cGZnRXJiM0VzMWxqVDFROENnOEFFMHpPN2VfWXJYTjZ3TW1EWlZLdU16clZBN28wVlI4SXJYeWR1U3kzZlAyempIWXVhaC1LdWNKbVo3QS1YMjZucjZnd3FTdnNaWmpNd2phODkxTlFwcng2aWo3WjZhdUdCOXZBejRyaW5kdw?oc=5",
      "datetime": 1789344060
    },
    {
      "headline": "Gulf states call off meeting with Iran, Houthis launch new attack on Saudi - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxNUmxSZmUzZzdYUkJrQ2l3RzRTQklHdjFOWmVYZ2NDcmZmOW9UUVBoZkk0bC0wcHhveWNHNldiU2E0WV9PYkFtWGVaUUdMVUlieFBZMVRjVHFkTTZ6YjVWXzVLUlA2QXE2LURQczRJN010RGR1Y3Jkb0JpS1lhdF9fZVdJT0hMV3A5QXNNcllfalNoem0wS3VMNUlNQUgwbG9sUU1XN2R1aUpkaXZDekZ6bnlqN2RiN0t3X3d3?oc=5",
      "datetime": 1789340520
    },
    {
      "headline": "Oil prices continue surge, rising 3% amid Saudi pipeline outage after attack - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxOcXNvWlpHUEh2bzNITUYtX04zUG1vclFCeDZ1NVdQTkNXUk5OTmRESElsUXUyQjNsYVU1d2tEMFlNRjB1VXVnenR4UHZzd3F3dEZWR2tWSVZMREFiZXF6NjR5SlB5VmdaNXpTWHQ3UF9POFRGanpoR0NxZUV3ZUU4alAycW9mcGdLak5lQ2NXdlpHQ3I3eDVRM3JDWmI3SGdYUjZsbnJSaUVySHk3UFl4Y3AxVGFZbmg5?oc=5",
      "datetime": 1789338180
    },
    {
      "headline": "Oman meeting between Gulf states and Iran postponed, Omani foreign minister says - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxPT01mN2pHSkgtLWNGSFhGWm9vSDBvNjlLVVB5N2lFRnczZ012SW1pZDdxTXRmY2NZWmw2MmRiOEJPZ1ZNdklvMkgxbXlEQXd6a3ozbWNrLTNaLWlMekNhalBBQjZTSXhEZEItM0s5WUM2cGN5akN6SXRVZVJseUR1M2Q1X2RoM2VBMEFMZHNrdVU0VUZyU2k5eWEtalNvbGVjQk5sS1NkbUV1QThfaUxocWV5NkVmRDBLQmdrNXJBQmp1ckhHTDBOdQ?oc=5",
      "datetime": 1789326872,
      "headlineKo": "오만 외무장관은 걸프 국가와 이란 간의 오만 회담이 연기되었다고 말합니다 - Reuters"
    },
    {
      "headline": "Here are the 2 big things we're watching in this week's stock market",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/09/13/here-are-the-2-big-things-were-watching-in-this-weeks-stock-market.html",
      "datetime": 1789318663,
      "headlineKo": "이번 주 주식 시장에서 우리가 주목하는 두 가지 주요 사항은 다음과 같습니다."
    },
    {
      "headline": "Houthis' Yemen advance leaves Gulf states with uncomfortable choice - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxOX0JoY2VGb08xV0N2bWR6cnNzaFZoVm9MMGZ4WW1aa292SHNWTVBoVERfLW96ZVllX2thQjdUU1RMOTBvRkRoMGpDd2ZyMXVyb0t2bEFabVBJczM2SnhwM0w5c3diVnZiT1E4QnBxZ3YxaEVnYjE1cVJndExhaUloWENHQjlWdmtvUHRmNG1sSWtWQ3ZIRTJQUU5wQTFDaEw0MDVIdThHdnl5NnVCSTdHUmUwR3RPU0tXalFfSA?oc=5",
      "datetime": 1789318620,
      "headlineKo": "후티 반군의 예멘 진격으로 걸프 국가들은 불편한 선택을 하게 됐다 - 로이터 통신"
    },
    {
      "headline": "Washington scrambles to meet calls for AI guardrails while the window to act closes",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/09/13/ai-congress-anthropic-openai-crisis.html",
      "datetime": 1789318577,
      "headlineKo": "워싱턴은 행동할 수 있는 창이 닫히는 동안 AI 가드레일에 대한 요구를 충족하기 위해 안간힘을 쓰고 있습니다."
    },
    {
      "headline": "Trump says US could stay in Iran and keep oil, like Venezuela deal - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxOc3NKNXdjMkx2Q2ZXOWVWU25Oa1hXRGFZcWJLRktNQWdoclBWVEJQdXhLMS1ZQV9TWHhmNlZSMTlIVXlSZWlWRGdrWXN2a2gxNzZiOWJlTUtVd2xIbW5tb0pJVVNGNFdmNWdEZktuV0JuT3pmaUF3VHYtZXotVklQWGt2YlEzN2Uwa21ac1I1bjlHRi1iM1VpMF90bFhJZk5wNl9aaG9rVmNsVkpUUUdF?oc=5",
      "datetime": 1789312260,
      "headlineKo": "트럼프 \"베네수엘라 협정처럼 미국이 이란에 머물면서 석유를 유지할 수 있다\" - 로이터"
    }
  ],
  "fgi": {
    "score": 33.3428571428571,
    "rating": "fear"
  },
  "_fetched_at": 1789388047.1583364,
  "_updated_label": "2026-09-14 21:14",
  "_last_attempt_at": 1789388047.1583364,
  "_last_success_at": 1789388047.1583364,
  "_collection_status": "ok",
  "_collection_errors": []
};
