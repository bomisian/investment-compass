// 자동 생성 파일 - buy_signal_telegram.py 실행 시마다 갱신됨. 직접 수정하지 마세요.
// 시장 환경 지표(야후) + 시장 헤드라인(Finnhub). 이 파일이 없어도 대시보드는 정상 동작함.
const MARKET_DATA = {
  "indicators": {
    "vix": {
      "current": 19.149999618530273,
      "prevClose": 20.65999984741211,
      "changeAbs": -1.510000228881836,
      "changePct": -7.308810455150995,
      "pctRank": 60.35031847133758,
      "min5y": 11.859999656677246,
      "max5y": 52.33000183105469,
      "ma20": 17.337999773025512,
      "ma60": 17.49733328819275,
      "chg1m": 2.6999988555908203,
      "chg3m": 2.260000228881836,
      "chg1mPct": 16.413366142047263,
      "chg3mPct": 13.380700476916225,
      "lastDate": "2026-07-30",
      "bars": 1256,
      "symbol": "^VIX",
      "label": "VIX (공포지수)",
      "unit": "",
      "digits": 2
    },
    "us10y": {
      "current": 4.622000217437744,
      "prevClose": 4.604000091552734,
      "changeAbs": 0.018000125885009766,
      "changePct": 0.3909671052795111,
      "pctRank": 95.69721115537848,
      "min5y": 1.1740000247955322,
      "max5y": 4.98799991607666,
      "ma20": 4.58129997253418,
      "ma60": 4.511249979337056,
      "chg1m": 0.2480001449584961,
      "chg3m": 0.26800012588500977,
      "chg1mPct": 5.669870618404584,
      "chg3mPct": 6.155262293286606,
      "lastDate": "2026-07-29",
      "bars": 1255,
      "symbol": "^TNX",
      "label": "미국 10년물 금리",
      "unit": "%",
      "digits": 2
    },
    "us3m": {
      "current": 3.6579999923706055,
      "prevClose": 3.759999990463257,
      "changeAbs": -0.10199999809265137,
      "changePct": -2.7127659136000233,
      "pctRank": 35.2191235059761,
      "min5y": 0.019999999552965164,
      "max5y": 5.3480000495910645,
      "ma20": 3.7201499819755552,
      "ma60": 3.653166663646698,
      "chg1m": -0.02200007438659668,
      "chg3m": 0.06800007820129395,
      "chg1mPct": -0.5978280974865046,
      "chg3mPct": 1.894152641422234,
      "lastDate": "2026-07-29",
      "bars": 1255,
      "symbol": "^IRX",
      "label": "미국 3개월 금리",
      "unit": "%",
      "digits": 2
    },
    "oil": {
      "current": 83.44000244140625,
      "prevClose": 84.45999908447266,
      "changeAbs": -1.0199966430664062,
      "changePct": -1.2076683094043805,
      "pctRank": 73.0310262529833,
      "min5y": 55.27000045776367,
      "max5y": 123.69999694824219,
      "ma20": 79.47250061035156,
      "ma60": 85.62566668192545,
      "chg1m": 13.94000244140625,
      "chg3m": -23.43999481201172,
      "chg1mPct": 20.057557469649282,
      "chg3mPct": -21.93113343410207,
      "lastDate": "2026-07-30",
      "bars": 1257,
      "symbol": "CL=F",
      "label": "WTI 유가",
      "unit": "$",
      "digits": 1
    },
    "dollar": {
      "current": 100.71399688720703,
      "prevClose": 100.80000305175781,
      "changeAbs": -0.08600616455078125,
      "changePct": -0.08532357336003218,
      "pctRank": 38.822593476531424,
      "min5y": 92.04000091552734,
      "max5y": 114.11000061035156,
      "ma20": 101.03120040893555,
      "ma60": 100.09756685892741,
      "chg1m": -0.47600555419921875,
      "chg3m": 1.7939987182617188,
      "chg1mPct": -0.4704076911895009,
      "chg3mPct": 1.8135854745950875,
      "lastDate": "2026-07-30",
      "bars": 1257,
      "symbol": "DX-Y.NYB",
      "label": "달러지수(DXY)",
      "unit": "",
      "digits": 1
    },
    "gold": {
      "current": 4136.39990234375,
      "prevClose": 4034.699951171875,
      "changeAbs": 101.699951171875,
      "changePct": 2.520632324649974,
      "pctRank": 87.98727128082736,
      "min5y": 1623.300048828125,
      "max5y": 5318.39990234375,
      "ma20": 4072.1750244140626,
      "ma60": 4284.6316609700525,
      "chg1m": 113.5,
      "chg3m": -408.80029296875,
      "chg1mPct": 2.8213478524254274,
      "chg3mPct": -8.99410972899167,
      "lastDate": "2026-07-30",
      "bars": 1257,
      "symbol": "GC=F",
      "label": "금",
      "unit": "$",
      "digits": 0
    }
  },
  "yieldSpread": 0.9640002250671387,
  "sector": {
    "groups": {
      "빅테크·SW": {
        "ret1m": -0.9069527197090199,
        "ret3m": -7.4366562376199985,
        "ret6m": -11.661474937866467,
        "ret1y": -4.388424235407717,
        "winRate": 60.8,
        "count": 9
      },
      "반도체": {
        "ret1m": -28.67252723308471,
        "ret3m": 10.80242950592043,
        "ret6m": 49.62428665585345,
        "ret1y": 186.40514392506583,
        "winRate": 71.5,
        "count": 15
      }
    },
    "pair": [
      "빅테크·SW",
      "반도체"
    ],
    "corr60": 0.11666515368307732,
    "corrPctRank": 0.08375209380234507,
    "corrMin5y": 0.11496792019743002,
    "corrMedian5y": 0.7115784818334243,
    "corrMax5y": 0.9346528705205663
  },
  "news": [
    {
      "headline": "Ferrari raises 2026 guidance after Q2 earnings beat",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/07/30/ferrari-race-earnings-q2-2026.html",
      "datetime": 1785412686,
      "headlineKo": "페라리, 2분기 실적 상회 후 2026년 가이던스 상향"
    },
    {
      "headline": "Egypt says drone hit two ships at Mediterranean port as attacks on energy infrastructure widen",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/07/30/egypt-drone-gas-ship-damietta-port-iran-war.html",
      "datetime": 1785412436,
      "headlineKo": "이집트는 에너지 인프라에 대한 공격이 확대됨에 따라 드론이 지중해 항구에서 두 척의 선박을 공격했다고 밝혔습니다."
    },
    {
      "headline": "Wealth managers face a new challenger: their clients’ AI chatbots",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/07/30/wealth-managers-ai-chatbots.html",
      "datetime": 1785411001,
      "headlineKo": "자산 관리자는 고객의 AI 챗봇이라는 새로운 도전에 직면합니다."
    },
    {
      "headline": "Oil steady as traders assess US-Iran conflict - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxOTWJteE84X0d0aDA5bVgwcWZrTlJTTXNZVFNlRmduNGc3aWgyMDRjN3BiN1ZaY0NaSGtXa1VlQjdFSE1pRkxOTS1sQXc2WjkwbkY3Qng1N3g3azFoVUltcjVPVGo5aGM0YkZYVG5DLXM0RS1PSFhkeERKaXZVSFk1cGZXX3ZGS3otSU1FRUtPaTFyMUd0TENNeUtaTXNZeEkxTGJrcWdTcDY4UnRUMzg3ZzZ3OGpYdw?oc=5",
      "datetime": 1785406914,
      "headlineKo": "트레이더들이 미-이란 갈등을 평가함에 따라 석유는 안정세를 유지하고 있습니다 - Reuters"
    },
    {
      "headline": "QatarEnergy-controlled LNG tanker exits Hormuz, first in nearly three weeks - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxPX1Q3eDhzdHJoSFI2eU82OUU0Rk5ldHpVRy1pQWFMWmZwT3FQb2xJTlA2emJvNXUycE1rZmtHU0paeVFFaW5NTlJmVlF6enhKcEpaQXJrbE83aW53RXlneU1XVzRCUHNoNG9jUEozcEZBSWdHdFgtWkZIekhjZXJaRmE0MEIwbERianVKMmlJdmRZWjdiYjloM25oTENZZVFxTmxUbF9RRlo3QzJBYWxtYndmNjBPdE83b3lPeTlUV1ZaakE?oc=5",
      "datetime": 1785396680,
      "headlineKo": "카타르에너지 제어 LNG 유조선, 거의 3주 만에 처음으로 호르무즈 출항 - Reuters"
    },
    {
      "headline": "Treasury sell-off continues after divided Fed holds interest rates steady",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/07/30/us-treasury-yields-divided-fed-interest-rates-hold-steady-.html",
      "datetime": 1785394566,
      "headlineKo": "분할된 연준이 금리를 안정적으로 유지한 후에도 국채 매각이 계속됨"
    },
    {
      "headline": "Drone strike at Egypt's Damietta port raises new security threat near Suez - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxNUjlxdTM1SnYtZ3Bzei1qLUpRXzlYanVpb1MwNnRuQjY2NmkzZHNTeEl5cGljWGE5VDQ5ZHF0djVzVnV5OEprZWdlWUpPMV9fanYyN1N5cHdhbkxBZC1fZTlHWmpRMG8zdlRZV0hLSW9nTHU0S3JDZU44WWVHbnhWZVhRTVJ1Z0RaM25nR09fTFNTMUR2SVNkVXdlVHpDZHRmMXlJdDN3?oc=5",
      "datetime": 1785393000,
      "headlineKo": "이집트 다미에타(Damietta) 항구의 드론 공격으로 수에즈 인근의 새로운 보안 위협 제기 - Reuters"
    },
    {
      "headline": "Shell profit more than doubles to $9.8 billion, second-highest on record, as Iran war lifts prices - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxPOVlEVkZ5c0ZFc3F3cjhHdllWWFNMNlAzR3VKVGR3cTFGQU11UUFJbWNzemJBLTIwX0lwWHBydVBySkUzS2dQQXJlZGpFRTNEdGljNENnaXNZQmQ0blUzejRLU3dsRlpLeExXZkJHdUlBcGlqZ3EyeFRIS2toSUdsbmpmTzh1eHJyODF4M2VtZi02ZHR3N2F5Sjd6Rk9nbXl1TmVrZWk1UXkwUHAxZjVZ?oc=5",
      "datetime": 1785392640,
      "headlineKo": "이란 전쟁으로 인해 가격이 인상되면서 쉘 이익은 두 배 이상 증가한 98억 달러로 사상 두 번째로 높았습니다. - Reuters"
    },
    {
      "headline": "EXCLUSIVE: QatarEnergy buys 33 US LNG cargoes to offset Hormuz disruption, sources say - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxPT2RNZllsNDBHUFBXYUM5NGZzNnpoRHQ2bW11cDdJczVhX2NObmdGNTlSZGwxdVJBU1JyNGRqMmxGYkVYckFHUGE1bHBhSnQ3Q0p5RVJlOTE2S0EyWFc5NzgycmF1NjdpZG5YdzY0YUdGZG1WNjdwUmtPUW1PZTd0bVZEN2hoRWhnMjJrSjVDa2JJeUIyZDlKVlFGelhpWlpDOVBSclY3TVJqNmdTaEtSamlqUVNyR2lJaENqLTNOUlA?oc=5",
      "datetime": 1785387780,
      "headlineKo": "독점: 카타르에너지는 호르무즈의 혼란을 상쇄하기 위해 33개의 미국 LNG 화물을 구매했다고 소식통은 전했습니다. - Reuters"
    },
    {
      "headline": "US military says latest strikes on Iran last two hours, hitting dozens of targets - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxNYl9qUHF2eEJlVmxqM2ROX0NFVDE3SHVIeExWXzltdnl5dG1HSmprdzFha3lhWUt4dGRLeWFBSlE0ZlYySkhHdmpLcE51S3c3TV90azg5LTVhWWNNd3IydlAwT1djUmV4Ui1BR3pOUl9PcHBPWllxM1NDSmlnZUQ3RnZSeVd2X3BqSFVBR0U3cE1xaGwxVXpYWmtXanlZVHBNUGc?oc=5",
      "datetime": 1785384943,
      "headlineKo": "미군 \"이란에 대한 최근 공습은 2시간 동안 지속돼 수십 곳의 목표물 타격\" - 로이터 통신"
    },
    {
      "headline": "Gold slips as higher Treasury yields offset focus on Warsh's inflation message - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxOQVJINlBLLWpMT3doZzQtUlVpbTFsZGt3c2xsczh0cmxHTEw1dG1HdFFNVUUxMkpuNE9pa1N5SDB0ZVVSYU51VUNvZ1lFdENrMmVzTUZ6RDAtYkp1Sm5hNy1PSXh6bmhKcTZMU3FtRmk0S1BSeUxNVWgtS3R0OWRIc0l2WG5ZaEpDVVAxT25FTTBacmMtYnlPTHh0bEdwQmUyVDRWUHFmSGJ4ZHBCRExSMGoybUlvTU16RGxxaE4zNm4?oc=5",
      "datetime": 1785374700,
      "headlineKo": "국채 수익률 상승으로 Warsh의 인플레이션 메시지에 대한 초점이 상쇄됨에 따라 금 하락 - Reuters"
    },
    {
      "headline": "US dollar finds footing after Fed hold and Iran air strikes - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMipAFBVV95cUxQOUFkZlJYUUNoTkxoekFZRWtKQXR4WGFheDhRNjRwdTFTQzQza185ZHRUaFZmTi1Ka0dQSkpjbDVMZS1SZDJaUVhzMW5nQ3gwdkpLcFdtUjJ0NTM3dnpONFdlbmh2bUJkQWhocXp2N3VhRWdxVUhOSWpjbVg0elZyR2JDQ1lCU3FIeVJ5cXUzOTFsNktCZWNKQTFPdFNibmt5aDlBUg?oc=5",
      "datetime": 1785373980,
      "headlineKo": "미국 달러는 연준의 보류와 이란의 공습 이후 기반을 찾았습니다 - Reuters"
    }
  ],
  "_fetched_at": 1785412987.7615337,
  "_updated_label": "2026-07-30 21:03"
};
