// 자동 생성 파일 - buy_signal_telegram.py 실행 시마다 갱신됨. 직접 수정하지 마세요.
// 시장 환경 지표(야후) + 시장 헤드라인(Finnhub). 이 파일이 없어도 대시보드는 정상 동작함.
const MARKET_DATA = {
  "indicators": {
    "vix": {
      "current": 18.399999618530273,
      "prevClose": 18.209999084472656,
      "changeAbs": 0.1900005340576172,
      "changePct": 1.0433857419555133,
      "pctRank": 53.503184713375795,
      "min5y": 11.859999656677246,
      "max5y": 52.33000183105469,
      "ma20": 17.0969997882843,
      "ma60": 17.43016661008199,
      "chg1m": 0.75,
      "chg3m": -0.4099998474121094,
      "chg1mPct": 4.249291876542562,
      "chg3mPct": -2.1796909040558994,
      "lastDate": "2026-07-29",
      "bars": 1256,
      "symbol": "^VIX",
      "label": "VIX (공포지수)",
      "unit": "",
      "digits": 2
    },
    "us10y": {
      "current": 4.604000091552734,
      "prevClose": 4.640999794006348,
      "changeAbs": -0.03699970245361328,
      "changePct": -0.7972355978424479,
      "pctRank": 95.1394422310757,
      "min5y": 1.1740000247955322,
      "max5y": 4.98799991607666,
      "ma20": 4.571099972724914,
      "ma60": 4.507183305422465,
      "chg1m": 0.23199987411499023,
      "chg3m": 0.26800012588500977,
      "chg1mPct": 5.30649273963111,
      "chg3mPct": 6.180814760309597,
      "lastDate": "2026-07-28",
      "bars": 1255,
      "symbol": "^TNX",
      "label": "미국 10년물 금리",
      "unit": "%",
      "digits": 2
    },
    "us3m": {
      "current": 3.759999990463257,
      "prevClose": 3.796999931335449,
      "changeAbs": -0.03699994087219238,
      "changePct": -0.9744519763311945,
      "pctRank": 38.24701195219124,
      "min5y": 0.019999999552965164,
      "max5y": 5.3480000495910645,
      "ma20": 3.7238499879837037,
      "ma60": 3.65178333123525,
      "chg1m": 0.0969998836517334,
      "chg3m": 0.1700000762939453,
      "chg1mPct": 2.6480993945743405,
      "chg3mPct": 4.735378282962482,
      "lastDate": "2026-07-28",
      "bars": 1255,
      "symbol": "^IRX",
      "label": "미국 3개월 금리",
      "unit": "%",
      "digits": 2
    },
    "oil": {
      "current": 82.22000122070312,
      "prevClose": 79.26000213623047,
      "changeAbs": 2.9599990844726562,
      "changePct": 3.734543281219032,
      "pctRank": 69.76929196499603,
      "min5y": 55.27000045776367,
      "max5y": 123.69999694824219,
      "ma20": 78.61750068664551,
      "ma60": 85.97133331298828,
      "chg1m": 11.470001220703125,
      "chg3m": -17.709999084472656,
      "chg1mPct": 16.21201585965106,
      "chg3mPct": -17.72240471368775,
      "lastDate": "2026-07-29",
      "bars": 1257,
      "symbol": "CL=F",
      "label": "WTI 유가",
      "unit": "$",
      "digits": 1
    },
    "dollar": {
      "current": 101.34100341796875,
      "prevClose": 101.37999725341797,
      "changeAbs": -0.03899383544921875,
      "changePct": -0.03846304646442876,
      "pctRank": 42.9140127388535,
      "min5y": 91.86000061035156,
      "max5y": 114.11000061035156,
      "ma20": 101.07605056762695,
      "ma60": 100.0141835530599,
      "chg1m": -0.0189971923828125,
      "chg3m": 2.8610000610351562,
      "chg1mPct": -0.018742297028826557,
      "chg3mPct": 2.9051583707462623,
      "lastDate": "2026-07-29",
      "bars": 1256,
      "symbol": "DX-Y.NYB",
      "label": "달러지수(DXY)",
      "unit": "",
      "digits": 1
    },
    "gold": {
      "current": 4095.699951171875,
      "prevClose": 4036.300048828125,
      "changeAbs": 59.39990234375,
      "changePct": 1.4716423859766274,
      "pctRank": 87.19172633253778,
      "min5y": 1623.300048828125,
      "max5y": 5318.39990234375,
      "ma20": 4071.820031738281,
      "ma60": 4292.033329264323,
      "chg1m": 73.39990234375,
      "chg3m": -495.800048828125,
      "chg1mPct": 1.8248241417279314,
      "chg3mPct": -10.798215154701623,
      "lastDate": "2026-07-29",
      "bars": 1257,
      "symbol": "GC=F",
      "label": "금",
      "unit": "$",
      "digits": 0
    }
  },
  "yieldSpread": 0.8440001010894775,
  "sector": {
    "groups": {
      "빅테크·SW": {
        "ret1m": 1.689275007542701,
        "ret3m": -7.44354233809883,
        "ret6m": -11.185657059697862,
        "ret1y": -3.3530799875806094,
        "winRate": 60.8,
        "count": 9
      },
      "반도체": {
        "ret1m": -20.9458209848574,
        "ret3m": 13.259835042522061,
        "ret6m": 63.00165264518887,
        "ret1y": 207.58534541440068,
        "winRate": 71.5,
        "count": 15
      }
    },
    "pair": [
      "빅테크·SW",
      "반도체"
    ],
    "corr60": 0.11496792019743002,
    "corrPctRank": 0.0,
    "corrMin5y": 0.11496792019743002,
    "corrMedian5y": 0.7115784818334243,
    "corrMax5y": 0.9346528705205663
  },
  "news": [
    {
      "headline": "Oil rises as US-Iran tension escalates after Iraq strikes, missile attack - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiygFBVV95cUxPd0ctWlZRN0hINkdrNUJmWWxpV0ZGNGw2Y2taRk1DbFBpdzd5bFdXQmJEcW9VRExnRFBtTWlTTHBRTU5tcDN2azF6VmtxdDN6WlVncmJxSVJhYjM4Wlctb3NEcnEzSWt4djdPSWJJX3ItYmpaN0UyZ09pbV85YjlRMkQ4RTV2RDE2c2NhYlRTdEVEUUFoWEVLMVBqUzhhX2xtVlJLUFp0RWFZTFpCSGJwMTRydUQ3NUx6ejJyYWFCdzBMVWpOYWZqbzF3?oc=5",
      "datetime": 1785309246,
      "headlineKo": "이라크 공습과 미사일 공격으로 미국-이란 긴장이 고조되면서 유가 상승 - 로이터"
    },
    {
      "headline": "EXCLUSIVE: Iran to get Chinese shoulder-launched missile systems in weeks, sources say - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMitwFBVV95cUxPR19sNWVrRDdhcXlNdTlxcUdNR0dNWDRBcjZPd21xOEM2bEYtdDJiWTEtYzlweWs5ZmtILVlhQkVUNzdaaENHbnhqTl9SSFNCZjk3eXNMS1o4SXFzT2VBS3VZZ0p6MVlrQldWNjRMUGlTN2tDR2xUOVBUdkdkTndueExrQm9vRGtTLTdBWjNGMDhZRC1qNDZXYVk3TXB0bWZ4ZFhpYUtfZ2JaalVZdjU3emN6LUptbjA?oc=5",
      "datetime": 1785303657,
      "headlineKo": "독점: 이란이 몇 주 안에 중국의 견착형 미사일 시스템을 도입할 것이라고 소식통이 전했습니다 - 로이터 통신"
    },
    {
      "headline": "Iran rules out Omani proposal to manage Strait of Hormuz - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxNcFJoOXIwZmxCNHBjd05nc3dlYjNXXzd1NzdyQldTOVQ4S3NjZnNDRWdqdG1WUFRUS2tRSkJJTEhQYjJWa1FraklySUtoamVybzBfbUR4aUItanFrRG1hMDZJTzlSQ3lrS25SLUo4QzR0RVQxdmFSVUFaUFpHYWV0cmdnVURNVHJ1QzBzM0pIRTMwUmVFZmxwVVpyTklTallXU2ZLOGl3TDJ1U3VnRzd3bmZnQjVfcUw2a1pWSGdFOTNlUXFa?oc=5",
      "datetime": 1785295740,
      "headlineKo": "이란, 호르무즈 해협 관리에 대한 오만의 제안 배제 - 로이터"
    },
    {
      "headline": "US military says US, Saudi forces struck sites of Iran-backed groups in Iraq - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxOUHJGTGM0cWxxc1lyajNFQ1Y1NXNKUUdnREtjZDk3Z3RaRUFabm41dmF2UE1YVTFfbVJNTHJWZTlRYzJCTEpGbnVRWlg1akk2cGJKamVPRmZQNEZZRFVsSFp1LXFOOWQxYzRObjYyYmQ1U29LWUVyRHAtNHVFcUplWHlZYWZnWVFJeTVxdmktRVdmaTJ2aTh6SkM5R3VJOEtKR254SzdEMFNyZFJHcHJGN3kwaE4ySVdSUngwbTdhZ1M?oc=5",
      "datetime": 1785285420,
      "headlineKo": "미군, 미국과 사우디군이 이라크에서 이란이 지원하는 단체들을 공격했다고 밝혔습니다 - 로이터"
    },
    {
      "headline": "Zelenskiy says he told Trump, senators that Ukraine needs anti-ballistic systems, missiles - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMi2gFBVV95cUxPMk9Eb1BSa0hvSWNXcXdRTlhzR2NiU1NmUmxzYlpaNVpiWVNackZfZnRWMXRrc1ctLWRGV1NmdGZQMDFXd2JQLW9Xc0FmdG1DV1dTMWhFMjM0X2RiQmJxWHNJajNOYk84alR3dWVlejd6d0tfMThpRjgwaVR2MTJvTzhoNVdVeUVydVJhOFQtWEVzYjllODNGLUhqamo0ampIYlZIa0t5dG9SNEs0T3ptOEVDRzdSZFc3NXNZMVJVbTY5b00ycjNFUnNZM1h4SU1UY1dGRUR0c0hzZw?oc=5",
      "datetime": 1785282184,
      "headlineKo": "젤렌스키는 우크라이나에 탄도미사일과 미사일이 필요하다고 트럼프 대통령과 상원의원들에게 말했다고 말했습니다."
    },
    {
      "headline": "US says it intercepted Iranian ballistic missiles launched towards US forces in Middle East - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMizAFBVV95cUxQbExYYjdfX1I4Mmt6eFo1Ty1JWjFtdEl5dWxIRnJsbllyODZPd3pmUjc0bzlMX29iV1ZlaUJVSUwwNl8yNkd1dkI5WERxdm1NUXp6Q1RXS1JqLVgzZzZXbFA4ZU9HU2Q0UVNQS2h3N0dtTldHbE5oLUxPek9iem9uMTBiZGU0QUNNeUpwX2Z2ZVF5bkVEZ1FVVjBlVkFoRjBzVkN1ZWU2N1hSbXR0QjgyUVpveXNsT244VDQ1Zm5Nb3BUbFRjR3FNUDhmZTQ?oc=5",
      "datetime": 1785281520,
      "headlineKo": "미국, 중동 주둔 미군을 향해 발사된 이란의 탄도미사일을 요격했다고 밝혔습니다 - 로이터"
    },
    {
      "headline": "Top US oil trade group opposes Hormuz tolls after Gulf-backed voluntary fee proposal - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxPQjBCRWJ5ekpMbWF5dm5Yc0c4c0VXTDNZaGlybGZ2OU4xaGx2cEZjMjl1RUZnT3YyQTFhM0ptTHZSbUJiWkZGMDRydFlYZktRVTNPMU9nTzhqUXg2Rzc2V3hjYkczbllfLWszbEJORmVlVDRTYUJBVmhiX19VVVNGVDdjcS1zcmRCLTZnUm1GS0NQOHhXRHlTSThZYVNBT1NlOFR6N0JvODU0YnRhOFNsZTlKWTJiMDFGZE1DQUQ2T0NjbWFpWDRMVw?oc=5",
      "datetime": 1785279354,
      "headlineKo": "미국 최고 석유 무역 그룹, 걸프만 지원 자발적 수수료 제안 후 호르무즈 통행료 반대 - 로이터 통신"
    },
    {
      "headline": "Petrobras cuts imports as it pushes local output amid U.S.-Iran conflict - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxQWEpKandCZmpKVTRXejZfQmp1bHNZdmtiYXo1ZTEtZFNCOGxEaUtocm5UdDdGMUVOT2tOWUU4bVBNM3EtY0ZOSHJoRHFqZ205UmxjN0dRejBvTU8yRkJzWWFxU2lTbDZHNGNRY3hYZi0wVHdBaFBsQ1JMSVozeUVWaFMySWE3WHdKWlNsdU51eFNyMjNDd0tRZWE4Z0l0Qi1BV3N2dGRYQWt5cURpQ0twQnVQcw?oc=5",
      "datetime": 1785278460,
      "headlineKo": "페트로브라스, 미국-이란 갈등 속에서 국내 생산 확대로 수입 축소 - Reuters"
    },
    {
      "headline": "Yemen's Houthis say they fired missiles at Saudi oil tanker in Red Sea - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxQbnJtN1czaW5VenZ0NDdYRVM1OVVMcUhYR2E2RHNneXhfaWZBalUwSElsSWk4aEVwMC1WRnozUGs4RmkxSk1xUkV5ZXVkNWUyeEJfbTQ0Z2RRdXNmM1hsSjduWFhLOURoZHBSUm1IUDJXdHkxR0Q4NGZ3SU9FcDRudkRkVG1qcEszb1Z3bHpaV3lydjBKbWtPaUVadGJ3cmVIT2FCQzlDaGJURG4wU1NlQmFiLW1uMDl6?oc=5",
      "datetime": 1785272410,
      "headlineKo": "예멘 후티 반군이 홍해에서 사우디 유조선에 미사일을 발사했다고 밝혔습니다."
    },
    {
      "headline": "Regime change? Inside Reza Pahlavi’s faltering bid to lead Iran - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxOakY1cWNvRDRGX1d1S3lyMXMtUVRhWk5NVTdUNzZveGlOODc3UktYUWhXVlhZaF9aczZuUXUwNUsxYW1xOWNaMFc4QWxncXRnU1E3NGFKbUN5QjR3cldXMG1sREF2VnJONmwyMnNrVld0Tm0zWFNuY1JLamNsNF85Wk9uOXJjTVVsR2R5WV9Kei1CcDB1NGY0czI2amVSTEk1OXZ2S0YxMnJLR0tBamc?oc=5",
      "datetime": 1785269133,
      "headlineKo": "정권교체? 이란을 이끌겠다는 레자 팔라비의 흔들리는 입찰 내부 - 로이터"
    },
    {
      "headline": "Saudi Arabia says it struck Iran-backed groups in Iraq with U.S. coordination - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxONnpyRjRlYWo1ZktJTDVtR3hTLWJLbWctRmJhd0Z6czBoQlEwUkRkZk1fd2wtQ0hLakpEMUhMZkNQOEdzVTR0SV9lQ2Q3TVJpNkFLdll5WmZBTFhqRlZpSE1BLVFQV1lsa0VpOXNPbHJ0TGdpeVMzMGFfV2lWaTI2YVdlSDFjbkdJblVoWXRvSHp3NWZSQnhMNUpVODB4cmJjdnVnVzEzZTFKUDF6TnpIMndKQ3hEN1c5aW9xMG05akZRcENlaHp6Qg?oc=5",
      "datetime": 1785268020,
      "headlineKo": "사우디아라비아, 미국과 협력해 이라크 내 이란 지원 단체 공격 - 로이터 통신"
    },
    {
      "headline": "Ukrainian foreign minister says he warned Iranian counterpart against escalation, support for Russia - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMizwFBVV95cUxOSVptTmZYNEZfbmZIT1J2TFBrUGpYRGg2MEtWYzBPeTNYMDBuTFdPRmN0UmVVMUdRRUVMdTNWNE0zR2lJNjJXMC1TMFc5dEFwSW04OTF4cVBtTk1MU000YlpIWWF1Y0UyelhsVTktaWZQX0JzXzVwV1FOTFZ0RE5FY3ZBWmFhcWswUWFzelpIMzNybm90OU1PUjFScThZN1ZydUJxaGJuOWE1SjFtMk5aY3YyeDBhSkFPSVBuUlJrVWtKbDhtSzBNR3lsck0yNGM?oc=5",
      "datetime": 1785267061,
      "headlineKo": "우크라이나 외무장관은 이란 측에 러시아에 대한 지원 확대와 지원을 경고했다고 밝혔습니다."
    }
  ],
  "_fetched_at": 1785314487.2971754,
  "_updated_label": "2026-07-29 17:41"
};
