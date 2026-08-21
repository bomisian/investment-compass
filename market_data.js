// 자동 생성 파일 - buy_signal_telegram.py 실행 시마다 갱신됨. 직접 수정하지 마세요.
// 시장 환경 지표(야후) + 시장 헤드라인(Finnhub). 이 파일이 없어도 대시보드는 정상 동작함.
const MARKET_DATA = {
  "indicators": {
    "vix": {
      "current": 15.470000267028809,
      "prevClose": 16.010000228881836,
      "changeAbs": -0.5399999618530273,
      "changePct": -3.3728916560467894,
      "pctRank": 25.636942675159236,
      "min5y": 11.859999656677246,
      "max5y": 52.33000183105469,
      "high1y": 31.049999237060547,
      "drawdown1y": -50.17713157118477,
      "ma20": 16.02049994468689,
      "ma60": 16.92166659037272,
      "chg1m": -3.2300004959106445,
      "chg3m": -1.2300004959106445,
      "chg1mPct": -17.27272921994748,
      "chg3mPct": -7.365272094120227,
      "lastDate": "2026-08-21",
      "bars": 1256,
      "symbol": "^VIX",
      "label": "VIX (공포지수)",
      "unit": "",
      "digits": 2
    },
    "us10y": {
      "current": 4.696000099182129,
      "prevClose": 4.6529998779296875,
      "changeAbs": 0.043000221252441406,
      "changePct": 0.9241397459819833,
      "pctRank": 97.60765550239235,
      "min5y": 1.2549999952316284,
      "max5y": 4.98799991607666,
      "high1y": 4.744999885559082,
      "drawdown1y": -1.0326614870124429,
      "ma20": 4.669749975204468,
      "ma60": 4.560683314005534,
      "chg1m": 0.03900003433227539,
      "chg3m": 0.12400007247924805,
      "chg1mPct": 0.8374497270601347,
      "chg3mPct": 2.712162549322452,
      "lastDate": "2026-08-20",
      "bars": 1254,
      "symbol": "^TNX",
      "label": "미국 10년물 금리",
      "unit": "%",
      "digits": 2
    },
    "us3m": {
      "current": 3.703000068664551,
      "prevClose": 3.700000047683716,
      "changeAbs": 0.003000020980834961,
      "changePct": 0.08108164708573563,
      "pctRank": 35.88516746411483,
      "min5y": 0.019999999552965164,
      "max5y": 5.3480000495910645,
      "high1y": 4.127999782562256,
      "drawdown1y": -10.295536247192027,
      "ma20": 3.71710000038147,
      "ma60": 3.685016667842865,
      "chg1m": -0.04199981689453125,
      "chg3m": 0.14600014686584473,
      "chg1mPct": -1.1214904720420626,
      "chg3mPct": 4.104586732518546,
      "lastDate": "2026-08-20",
      "bars": 1254,
      "symbol": "^IRX",
      "label": "미국 3개월 금리",
      "unit": "%",
      "digits": 2
    },
    "oil": {
      "current": 87.12999725341797,
      "prevClose": 87.83000183105469,
      "changeAbs": -0.7000045776367188,
      "changePct": -0.7969993886408109,
      "pctRank": 79.23627684964201,
      "min5y": 55.27000045776367,
      "max5y": 123.69999694824219,
      "high1y": 112.94999694824219,
      "drawdown1y": -22.85967276887656,
      "ma20": 82.19349937438965,
      "ma60": 81.09983329772949,
      "chg1m": -5.060005187988281,
      "chg3m": -9.220001220703125,
      "chg1mPct": -5.488670196320148,
      "chg3mPct": -9.569280090003893,
      "lastDate": "2026-08-21",
      "bars": 1257,
      "symbol": "CL=F",
      "label": "WTI 유가",
      "unit": "$",
      "digits": 1
    },
    "dollar": {
      "current": 98.68800354003906,
      "prevClose": 98.9000015258789,
      "changeAbs": -0.21199798583984375,
      "changePct": -0.21435589744088204,
      "pctRank": 23.15035799522673,
      "min5y": 92.04000091552734,
      "max5y": 114.11000061035156,
      "high1y": 101.61000061035156,
      "drawdown1y": -2.8756983099701094,
      "ma20": 99.87940063476563,
      "ma60": 100.32196706136068,
      "chg1m": -2.7419967651367188,
      "chg3m": -0.5019989013671875,
      "chg1mPct": -2.703339009057264,
      "chg3mPct": -0.5060982851207504,
      "lastDate": "2026-08-21",
      "bars": 1257,
      "symbol": "DX-Y.NYB",
      "label": "달러지수(DXY)",
      "unit": "",
      "digits": 1
    },
    "gold": {
      "current": 4649.7001953125,
      "prevClose": 4516.2998046875,
      "changeAbs": 133.400390625,
      "changePct": 2.9537540994630778,
      "pctRank": 94.74940334128878,
      "min5y": 1623.300048828125,
      "max5y": 5318.39990234375,
      "high1y": 5318.39990234375,
      "drawdown1y": -12.57332504719253,
      "ma20": 4279.459973144531,
      "ma60": 4213.343334960938,
      "chg1m": 603.10009765625,
      "chg3m": 109.900390625,
      "chg1mPct": 14.903871969102148,
      "chg3mPct": 2.4208201980960493,
      "lastDate": "2026-08-21",
      "bars": 1257,
      "symbol": "GC=F",
      "label": "금",
      "unit": "$",
      "digits": 0
    },
    "us30y": {
      "current": 5.236999988555908,
      "prevClose": 5.193999767303467,
      "changeAbs": 0.043000221252441406,
      "changePct": 0.8278826179995294,
      "pctRank": 99.44178628389155,
      "min5y": 1.6779999732971191,
      "max5y": 5.309000015258789,
      "high1y": 5.309000015258789,
      "drawdown1y": -1.3561881050281221,
      "ma20": 5.2128499984741214,
      "ma60": 5.071483365694681,
      "chg1m": 0.09000015258789062,
      "chg3m": 0.12099981307983398,
      "chg1mPct": 1.7485944327986156,
      "chg3mPct": 2.365125272275313,
      "lastDate": "2026-08-20",
      "bars": 1254,
      "symbol": "^TYX",
      "label": "미국 30년물 금리",
      "unit": "%",
      "digits": 2
    },
    "dow": {
      "current": 52759.2109375,
      "prevClose": 53463.05078125,
      "changeAbs": -703.83984375,
      "changePct": -1.316497718452018,
      "pctRank": 98.64433811802232,
      "min5y": 28725.509765625,
      "max5y": 54349.12109375,
      "high1y": 54349.12109375,
      "drawdown1y": -2.925364981537548,
      "ma20": 53243.1630859375,
      "ma60": 52260.2109375,
      "chg1m": 540.6328125,
      "chg3m": 2749.859375,
      "chg1mPct": 1.035326567502167,
      "chg3mPct": 5.498690323075512,
      "lastDate": "2026-08-20",
      "bars": 1254,
      "symbol": "^DJI",
      "label": "다우존스 지수",
      "unit": "",
      "digits": 0
    }
  },
  "yieldSpread": 0.9930000305175781,
  "sector": {
    "groups": {
      "빅테크·SW": {
        "ret1m": 9.150841477895932,
        "ret3m": 0.20184031412397996,
        "ret6m": 11.236690812896288,
        "ret1y": 7.116890748610616,
        "winRate": 60.8,
        "count": 9
      },
      "반도체": {
        "ret1m": -4.57850275020959,
        "ret3m": 7.618635990821487,
        "ret6m": 74.11957765951833,
        "ret1y": 249.5866659783944,
        "winRate": 71.5,
        "count": 16
      }
    },
    "pair": [
      "빅테크·SW",
      "반도체"
    ],
    "corr60": 0.15080838031217514,
    "corrPctRank": 0.6700167504187605,
    "corrMin5y": 0.11322641817101682,
    "corrMedian5y": 0.7060618343138602,
    "corrMax5y": 0.9306761077384692
  },
  "news": [
    {
      "headline": "Iranian oil offers to Chinese buyers fall as US blockade bites, sources say - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxPNTlOa0p6cWFWR2FCZ0dZY2tEZEZLMkNWR3RvQkUzdUwyTE11aVF0TkVpMExXM3otZy0wbVRZU0lBOUpLV2lhYTdPWHBMZ3plOGFwekxwbVdQLTM5anpldkwtTWpnak05T3VLdDVUT3ItVVpEeHllS3E5SjFOeHFCT0FPeXU5c1I3X203S0pGcENjeFRESF9YaTZnV0JNNGNZUnl4RUxGTFZIN2RNU0k0YXpJbVhyVW55UlB6Rw?oc=5",
      "datetime": 1787301959,
      "headlineKo": "미국의 봉쇄로 인해 중국 구매자에게 이란 석유 제안이 하락했다고 소식통이 전했습니다."
    },
    {
      "headline": "Iran says Tehran must overcome 'unjust sanctions' as U.S. ramps up economic pressure - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiywFBVV95cUxQZ1k1ZnYtdXFiVWJvUVdmQlJLR1hWN1czeTU1Vkt5VFEyWkNISDhnUHVBY1hLb1JMdnp1dmRxU3Z6WG9wNlZRUmVZaUZxeVJVOERnX0QzeEVuU1FPbzByQ29EQXBvMzJrSkZWOWdkV0pHYUlfYkNTcFZDaTc3cUdLMzdmemlmV2hhUlYzdDFwUHpMcE9oSVZCbXlGYzM2LW9DcEFBdl9kSHRwOF9PdUtUMjdaWUZ5Rm90aFh4blpzaXhXUkZSU0ZPNzRvRQ?oc=5",
      "datetime": 1787300081,
      "headlineKo": "이란은 미국이 경제적 압박을 강화함에 따라 테헤란이 '부당한 제재'를 극복해야 한다고 말했습니다 - 로이터"
    },
    {
      "headline": "Six months of war - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMijAFBVV95cUxNX0lPYzNQYzNFb2I1ZW91YXRCQWhCYWV2NGFkMWNtTV9KdUUtSWNOREVHOEJGY3R5THNITzY0d29lTTB3Tk5RQ1dGQ21nYk1oblczcGVua3RuemZLdm1BeXBETDEwN29rWEZGeG1VUy04ZUxGRDRWWEdKa1VLNS1nYzR1Y1VNSFVFcmJ3VQ?oc=5",
      "datetime": 1787298803,
      "headlineKo": "6개월 간의 전쟁 - 로이터"
    },
    {
      "headline": "War-hit European markets are far from down and out - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMijwFBVV95cUxQdnhLRk44Z05ZeGw4cWhLcEtkTVRNMnRuSDd0cTYwa2xJdWM0WEsxQS1MeG8yM0lnenM2QVpxc0pKVHdIaHI1TXhzMk40Z25WTDlzdkVTT2tmNlRORlc2eW9FRGpsWng3MEJ1OUZJVVpkUm1QTzV6Z2dkeTd2YjRtREtPdGZXTXAzeUdNaUNuaw?oc=5",
      "datetime": 1787284860,
      "headlineKo": "전쟁으로 타격을 입은 유럽 시장은 결코 침체되지 않을 것입니다 - Reuters"
    },
    {
      "headline": "Ships passing through Hormuz hover in single digits, data shows - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxNSEhZX09yZU9wMFlFN0FUUjM0dUhpZ01zMEVvWFBlVHpoQ25lY0xFckRtVnpXMHZfZVA3TU0zRjNNYlUydy1pelQ1Q3Rmb1dPeWZmU3hDTXF2ZERfY3UyY2tteGpocUNoY0FkdE13dXV5cjV1VUh3MmN1al9MUm5xVlh6RWpwenRzQ2dzR0dxci05c2kwQ1VSUGNDTVBJVkFFd0RjZm9GRnBBdw?oc=5",
      "datetime": 1787280180,
      "headlineKo": "호르무즈를 통과하는 선박이 한 자릿수로 맴돌고 있는 것으로 나타났습니다. - 로이터 통신"
    },
    {
      "headline": "Oil set for second weekly gain as US ramps up pressure on Iran - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxPbEh1QVJmcTNtSE1PMURxNmRBT3RIWHhVTmtwZDRiMk5yUzJtc2xuNHFlQXF1a3VJS3FQckxIY3Y2VjhFejlkNDZnLTY0R0prazZHb194Y19sRDdjUVJtNHlMT0lwSHRRcU5UM2VBTFZpVHBDZEl1OGFWbUkxX1pacWhMYUtFQ0pRbGVRYVNYcy1zSUNZVWtxNW4zczc0YVhZVkFWUHJwRWlFQl8zQUR3dFNIU1o?oc=5",
      "datetime": 1787277000,
      "headlineKo": "미국이 이란에 대한 압력을 강화함에 따라 유가는 주간 두 번째 상승세를 기록했습니다. - Reuters"
    },
    {
      "headline": "Iran vows 'devastating' response as US threatens toughest ever economic hit - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxNN2ZEV0ttbXhQZHVsUVNRYTBoVkczUHp5MVN5ME9vWGo4ajVmWmhMUXBwdkVVaXo3MjZlSEpyTC0wWWtvaGdYZkttakoyazRFMXBCM1ZUVmZ4TldhaUF2WU1QdTgtR3NwaFlMa016ZGJ6UjBaTmZGZjVTN011RXFNWktVcm44QUxMbHE4WVNyOWpNUkJwNzVKLW0wUTdQSUZCdGNrT1NkWXZPMzVJ?oc=5",
      "datetime": 1787270340,
      "headlineKo": "이란, 미국이 사상 최대의 경제적 타격 위협하자 '파괴적' 대응 다짐 - 로이터 통신"
    },
    {
      "headline": "Gaza mediators say latest Israeli strikes undermine efforts to end conflict at critical stage - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxPUGViZ2w0cXVmUjBqbEFKeEFsdUY1YWNiWlBobmpkejVKWng5N3lINFFZOGdNQ2JzaV90bXBFQVpLaWVDRXZOMmQtOXA0d09XNEZmdExMbFFPZGNsaTc3QUVKQktwOU5DNnliZ0dDdVFNaGdsUVNyOWdHRkh1VFBjQkNfUklTZTRZMzhDb05xaHZUNGdURlZxSUJBZ3RCVHZtbThfaFRObk1SM0VYX3ZZS09jelpvOGMzSVktZDNocEpKOVU?oc=5",
      "datetime": 1787270018,
      "headlineKo": "가자 중재자들은 최근 이스라엘의 공습이 중요한 단계에서 분쟁을 종식시키려는 노력을 약화시킨다고 말했습니다. - 로이터 통신"
    },
    {
      "headline": "Bessent says US to impose 'toughest' ever sanctions on Iran, urges China to cooperate - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxOUlFnUHhPNjlxRW5kTy03TFctOE1ST1NabGVNalozY2hiR2RKcEtfV1ZRblJ1VlJXQXRNem1yZmpIRVVYUjJOd2pzWElTX0JVeXZVR1V1Tk5NOG5oWWUtRVZzWDNFOE5KbE1VNmtubXdodnVzQ1RZMFV3TnpUUXVHM1N5MXZqZTBtdW1iUG8xS18wdi1ranhQQXpfVDdiYnRsc09iN3JtbEhZTVIwS202X0lmSkF2V0c2dFV5NQ?oc=5",
      "datetime": 1787267672,
      "headlineKo": "베센트는 미국이 이란에 사상 최대의 제재를 가할 것이라고 말하고 중국의 협조를 촉구했습니다."
    },
    {
      "headline": "Micron CEO pushes back on memory bear case. 3 key takeaways from Cramer's big interview",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/20/micron-ceo-pushes-back-on-memory-bear-case-3-takeaways-from-cramers-interview.html",
      "datetime": 1787266364,
      "headlineKo": "마이크론 CEO, 메모리 하락세에 대해 반박. Cramer의 대규모 인터뷰에서 얻은 3가지 핵심 내용"
    },
    {
      "headline": "US envoy Huckabee tells Israeli settlers not to take Palestinian Americans' land - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiygFBVV95cUxQNk15eGo2WTQ2MFVpa1ViTEt2aFhNMUd5OU0ybFNGanlqbFhPVzhOTlhOTU94MXM5MTc5M2lVRk1yYmhYYzMxR3NiZGdaS1NVWTlXTTFEaWZVRFF6TUozRUdTTnl4WUxxVGhjelJ0QTVIc0pRQnlPSUlncGRROWs4d3J1a0hCdmNTeHdwRWNNS0ZoYzJLeUQ0OW1vLWhEclZtVS1sYTl0bEoyaWN5a2tDQ2xGWnk2dGpPV3ZTSGU0UXZRSW9uNm5hd05n?oc=5",
      "datetime": 1787260945,
      "headlineKo": "허커비 미국 대사, 이스라엘 정착민들에게 팔레스타인계 미국인 땅을 빼앗지 말라고 지시 - 로이터 통신"
    },
    {
      "headline": "Harry and Meghan: Their life together in photos - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMijAFBVV95cUxNemU0alhTVF8wYVhBNFUzbWN6TFhEU21UdTA1MHpEYkxrOE5jQ3d6OUNySnpQMXdnanlXV2s4Y3NsVFlJU0d6QmhsS3Qtei1NMVcwUzRielE2cFIydnNVWkR3Y0U1aDdQNmhrZ3YzMDBYRFlMR0t5Y0pGZElFbUwwMElZbndyMVVNS19FdA?oc=5",
      "datetime": 1787258623,
      "headlineKo": "해리와 메건: 사진으로 보는 그들의 삶 - 로이터 통신"
    }
  ],
  "fgi": {
    "score": 52.1428571428571,
    "rating": "neutral"
  },
  "_fetched_at": 1787315204.0069277,
  "_updated_label": "2026-08-21 21:27",
  "_last_attempt_at": 1787315204.0069277,
  "_last_success_at": 1787311545.4641225,
  "_collection_status": "partial",
  "_collection_errors": [
    "시장 헤드라인"
  ]
};
