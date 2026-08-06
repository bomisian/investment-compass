// 자동 생성 파일 - buy_signal_telegram.py 실행 시마다 갱신됨. 직접 수정하지 마세요.
// 시장 환경 지표(야후) + 시장 헤드라인(Finnhub). 이 파일이 없어도 대시보드는 정상 동작함.
const MARKET_DATA = {
  "indicators": {
    "vix": {
      "current": 15.8100004196167,
      "prevClose": 16.5,
      "changeAbs": -0.6899995803833008,
      "changePct": -4.181815638686672,
      "pctRank": 27.547770700636942,
      "min5y": 11.859999656677246,
      "max5y": 52.33000183105469,
      "ma20": 17.20549988746643,
      "ma60": 17.364999977747598,
      "chg1m": -0.31999874114990234,
      "chg3m": -1.5799989700317383,
      "chg1mPct": -1.9838732659592646,
      "chg3mPct": -9.085675822232908,
      "lastDate": "2026-08-05",
      "bars": 1256,
      "symbol": "^VIX",
      "label": "VIX (공포지수)",
      "unit": "",
      "digits": 2
    },
    "us10y": {
      "current": 4.616999626159668,
      "prevClose": 4.626999855041504,
      "changeAbs": -0.010000228881835938,
      "changePct": -0.2161277111547745,
      "pctRank": 95.1394422310757,
      "min5y": 1.2170000076293945,
      "max5y": 4.98799991607666,
      "ma20": 4.621349954605103,
      "ma60": 4.533983302116394,
      "chg1m": 0.08799982070922852,
      "chg3m": 0.20099973678588867,
      "chg1mPct": 1.9430299070299109,
      "chg3mPct": 4.551624588341914,
      "lastDate": "2026-08-05",
      "bars": 1255,
      "symbol": "^TNX",
      "label": "미국 10년물 금리",
      "unit": "%",
      "digits": 2
    },
    "us3m": {
      "current": 3.7249999046325684,
      "prevClose": 3.7300000190734863,
      "changeAbs": -0.005000114440917969,
      "changePct": -0.13405132480830315,
      "pctRank": 37.13147410358566,
      "min5y": 0.019999999552965164,
      "max5y": 5.3480000495910645,
      "ma20": 3.72044997215271,
      "ma60": 3.661983331044515,
      "chg1m": 0.0,
      "chg3m": 0.125,
      "chg1mPct": 0.0,
      "chg3mPct": 3.472222314204701,
      "lastDate": "2026-08-05",
      "bars": 1255,
      "symbol": "^IRX",
      "label": "미국 3개월 금리",
      "unit": "%",
      "digits": 2
    },
    "oil": {
      "current": 75.02999877929688,
      "prevClose": 75.7699966430664,
      "changeAbs": -0.7399978637695312,
      "changePct": -0.9766370549750412,
      "pctRank": 45.26650755767701,
      "min5y": 55.27000045776367,
      "max5y": 123.69999694824219,
      "ma20": 81.2104995727539,
      "ma60": 84.43199984232585,
      "chg1m": 4.589996337890625,
      "chg3m": -27.23999786376953,
      "chg1mPct": 6.516178561618731,
      "chg3mPct": -26.63537572885637,
      "lastDate": "2026-08-05",
      "bars": 1257,
      "symbol": "CL=F",
      "label": "WTI 유가",
      "unit": "$",
      "digits": 1
    },
    "dollar": {
      "current": 99.6449966430664,
      "prevClose": 99.88999938964844,
      "changeAbs": -0.24500274658203125,
      "changePct": -0.245272547881726,
      "pctRank": 33.41288782816229,
      "min5y": 92.04000091552734,
      "max5y": 114.11000061035156,
      "ma20": 100.76575050354003,
      "ma60": 100.19758364359538,
      "chg1m": -1.4950027465820312,
      "chg3m": 1.1649932861328125,
      "chg1mPct": -1.4781518248012202,
      "chg3mPct": 1.1829744581855661,
      "lastDate": "2026-08-05",
      "bars": 1257,
      "symbol": "DX-Y.NYB",
      "label": "달러지수(DXY)",
      "unit": "",
      "digits": 1
    },
    "gold": {
      "current": 4334.39990234375,
      "prevClose": 4095.39990234375,
      "changeAbs": 239.0,
      "changePct": 5.83581593248618,
      "pctRank": 90.61256961018299,
      "min5y": 1623.300048828125,
      "max5y": 5318.39990234375,
      "ma20": 4071.7900268554686,
      "ma60": 4248.271671549479,
      "chg1m": 189.10009765625,
      "chg3m": -221.39990234375,
      "chg1mPct": 4.561795444624194,
      "chg3mPct": -4.859737298288432,
      "lastDate": "2026-08-05",
      "bars": 1257,
      "symbol": "GC=F",
      "label": "금",
      "unit": "$",
      "digits": 0
    },
    "us30y": {
      "current": 5.174000263214111,
      "prevClose": 5.190000057220459,
      "changeAbs": -0.015999794006347656,
      "changePct": -0.3082811913284729,
      "pctRank": 99.5219123505976,
      "min5y": 1.6779999732971191,
      "max5y": 5.275000095367432,
      "ma20": 5.136550068855286,
      "ma60": 5.041433389981588,
      "chg1m": 0.13100004196166992,
      "chg3m": 0.19000005722045898,
      "chg1mPct": 2.5976608410525857,
      "chg3mPct": 3.812200027439184,
      "lastDate": "2026-08-05",
      "bars": 1255,
      "symbol": "^TYX",
      "label": "미국 30년물 금리",
      "unit": "%",
      "digits": 2
    }
  },
  "yieldSpread": 0.8919997215270996,
  "sector": {
    "groups": {
      "빅테크·SW": {
        "ret1m": 5.349676043073703,
        "ret3m": 1.2883055163303903,
        "ret6m": 3.677987834118368,
        "ret1y": 8.127628454818115,
        "winRate": 60.8,
        "count": 9
      },
      "반도체": {
        "ret1m": -4.350390576685815,
        "ret3m": 16.411297692695783,
        "ret6m": 75.09321458192848,
        "ret1y": 241.53606099666445,
        "winRate": 71.5,
        "count": 15
      }
    },
    "pair": [
      "빅테크·SW",
      "반도체"
    ],
    "corr60": 0.2050804410535708,
    "corrPctRank": 2.0100502512562812,
    "corrMin5y": 0.11496792019743002,
    "corrMedian5y": 0.7115784818334243,
    "corrMax5y": 0.9346528705205663
  },
  "news": [
    {
      "headline": "Jim Cramer says investors should consider buying SpaceX for their kids",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/05/jim-cramer-investors-should-consider-buying-spacex-kids.html",
      "datetime": 1785969641,
      "headlineKo": "짐 크레이머(Jim Cramer)는 투자자들이 아이들을 위해 SpaceX 구매를 고려해야 한다고 말했습니다."
    },
    {
      "headline": "EXCLUSIVE: Iran threatens to hit Gulf states if US launches new strikes - reuters.com",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxPajFnaXk0anVrT2IwaV9XMDBma0pMQU53ZF9LRUJiT01nWjJsdG5FZXhwUjNtZFp2Yy1NV3Q4dFRIeUxzV1pCWk9RMVVZNk1UbWxxMFdiNEdNTG5KSVBVWTRCaWFJSFNlT3RiMFF6RWtqN2pnRThTUU9GaHNfelhwV3RZTXdfMzJwUk1aVlFXZ0FBNk1qWFFmd2xIRWNVWVpmQl9DSkE2NnhMaXlJZ2FFeQ?oc=5",
      "datetime": 1785965457,
      "headlineKo": "독점: 이란은 미국이 새로운 공격을 시작하면 걸프 지역을 공격하겠다고 위협-reuters.com"
    },
    {
      "headline": "Hollywood is cranking out billion-dollar movies again. Spider-Man just joined the ranks",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/05/hollywood-2026-billion-dollar-movies.html",
      "datetime": 1785964501,
      "headlineKo": "할리우드가 다시 10억 달러 규모의 영화를 제작하고 있습니다. 스파이더맨이 방금 대열에 합류했습니다."
    },
    {
      "headline": "Dow closes at record on Mideast optimism; SpaceX, AMD drag Nasdaq - reuters.com",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMivwFBVV95cUxPdklHVUNCN0JQTDlLR0piZnVyYXRkNkU1akFlU3dWWFRoQTUyVUFxTXVtbnU2V3pTY2QwZ3pXRUw3eTFZeG1IbDAzM0Q5eEJPd0VSRldTckFHb1dBYXUtQ2tocm44b2p1SE5EbGhCNUJyMG9SX0RhZTlRZjFFbURfWmhPbnN2YmNSTlF3NFFZbG5yNmFzWTNiZFBOTlFfOWp1cmZIMkxicE50d2tJWkVXOVZQRmFxc21qN01jaDR6RQ?oc=5",
      "datetime": 1785961162,
      "headlineKo": "다우지수는 중동 낙관론으로 사상 최고치를 기록했다. SpaceX, AMD, Nasdaq 드래그 - reuters.com"
    },
    {
      "headline": "Israeli military strikes southern Lebanon after evacuation warning to village - reuters.com",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxPSUNJWWdZUW9teWxlNDE2eWVZWTFmd0JQdmwwYUNvSEpES1BhMjBJNF9LczlwUTZkaTZjMm5MNFhEUFN1RnpZclZHamljVnlGcW5GdkFMclYyUjQ4dEpHRWwtNjJLdjNoNWx5YlU3Q1FIUmhoV1hxMktXNnZXanZLLW9YS1JjRGp6ZkNMbTNGOVlETVRSUGREMnZ5dDVhUjYyWlB1RzBwenhtUDg3dDdIYVpoTXBlN2dFWTkyVnJn?oc=5",
      "datetime": 1785957421,
      "headlineKo": "이스라엘군, 마을에 대피 경고 후 레바논 남부 공습 - reuters.com"
    },
    {
      "headline": "Alphabet slumps on more AI brain drain. We're not too worried",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/05/alphabet-is-slumping-on-the-departure-of-another-ai-exec.html",
      "datetime": 1785957079,
      "headlineKo": "더 많은 AI 두뇌 유출로 인해 알파벳이 급락합니다. 우리는 별로 걱정하지 않아요"
    },
    {
      "headline": "Phillips 66 beats quarterly estimates as Iran war boosts US refining margins - reuters.com",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxPdFdjb1Q5RzUtcnRaUmV5U2FuN0dBcUZwT3RMa2pqVVVocG8zZmRPV2E1NjhlRTR6TXBsN1NHQ21EUTJvQ0JvV2NtbXhWbHVjMUN3NHFvTzlVR0IxUmxHaTFUbEpNX0xJSFFncjE4UllwaTJ2bm9UVTdHd00xOVBuTmZJVXRCekZPclluTDhFQUF2S3MwcG5rR3VrOE5TdFBHd3piYTRjTW9yVldvZGFVV3lfa1pLNlIzTXloYQ?oc=5",
      "datetime": 1785955127,
      "headlineKo": "이란 전쟁으로 미국 정제 마진이 증가함에 따라 필립스 66이 분기별 예상치를 상회했습니다. - reuters.com"
    },
    {
      "headline": "Yemen's Houthis say they attacked Saudi oil tankers in Red Sea, Gulf of Aden - reuters.com",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxNWEQwU2pxeTRYSXhNQWtrT3hmNFhmOUx6eVUzUUt4aVBtOEpub01Fa3U5S0ZOYXRmU2oyb0t4WEpRRXZ3VmwxWksyYkNRcF9GbFJvbEpkMGxWWVY5alo2NS1LdDFzMWVPdmYtV082T3JOaVpoYW5NTFNncUxHZndSdnUzMXdWWHNXQWQ3NXZXMy02MDloQ3dWTHJhWHBfS2pNVnZoUXBEcVZKQm1HZXl5Ug?oc=5",
      "datetime": 1785954855,
      "headlineKo": "예멘 후티 반군이 아덴만 홍해에서 사우디 유조선을 공격했다고 밝혔습니다."
    },
    {
      "headline": "Gulf oil exports steady in July, still 40% below pre-war mark - reuters.com",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxOU1c5cDdsaENzVWRTM3JoaUFicGFuczBDdm5GY2tkLWJhN0pSVk81MTlYMm1CQlNmQ1c5ZHZJUUFnLUhFd29CZmRjaEhkR0k3aEZRQW1JR3BKbVZiLVQ5UFJrSFZCTEFIMHpSakZ3TW5IZDctci1sT1piR2VzcGhNU21fN3FDd3ZLaEJ3dFBXdjY2Wjd4aEtwblhlTHJETENxWG5lRDNlWEpCM2ZS?oc=5",
      "datetime": 1785954322,
      "headlineKo": "걸프만 석유 수출은 7월에도 꾸준했으며 여전히 전쟁 전 수준보다 40% 낮습니다 - reuters.com"
    },
    {
      "headline": "Flutter shares plummet on earnings miss and another key leadership change",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/05/flutter-earnings-ceo-leadership-change-stock.html",
      "datetime": 1785954031,
      "headlineKo": "Flutter 주가는 수익 손실 및 또 다른 주요 리더십 변경으로 급락했습니다."
    },
    {
      "headline": "Stocks mixed with Nasdaq down; gold prices jump - reuters.com",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMigwFBVV95cUxPSjNOaFJhdXRJblJMNldJM09LeFJDOXNqY2Y0R3dhcGt3S1ZyNm1peFdvVlBfN2RrNmtCYVhQa3pzenI5VlBld2c2Y0JPLTAzNWRhTWxUYWxjNEpvWGxIYlR3M2NLdGg5RnpRSmtYVVVwamJfYTZ5S1JaQ3J5QjFEQ3B0WQ?oc=5",
      "datetime": 1785951241,
      "headlineKo": "나스닥과 혼재된 주식; 금값 급등 - reuters.com"
    },
    {
      "headline": "Ukraine's Zelenskiy says he spoke to NATO head Rutte about securing interceptors - reuters.com",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMi1gFBVV95cUxQUUFjUmxBRnF1MFlqVDcwRjdUa0hhMERkX0ZKSmRGUnlFLU5UeVd4cE1JRG9TQnFPdTFvbzE1bzdmS0hKdHJaajh2THRSemluNXRqcEJnLVVHN3hFZ0N2MHhmUkhPck5COVlEbkM5WHhJTEhQdWswMkVRZmNqZlNZeEI4QV9XVFhINEwwYnN0ZEtOZWxxbHVCbVlTempHVlk4M2NnRkozcE9QNzV5T0NKS1JNMUt2d3Ftd2ZDS24yUGpiMHdfMXFXeHJ2Y3ZFTnZ1Ui1zdGFn?oc=5",
      "datetime": 1785950127,
      "headlineKo": "우크라이나의 젤렌스키는 NATO 수장인 루테와 요격체 확보에 관해 이야기했다고 말했습니다 - reuters.com"
    }
  ],
  "_fetched_at": 1785974402.6389797,
  "_updated_label": "2026-08-06 09:00"
};
