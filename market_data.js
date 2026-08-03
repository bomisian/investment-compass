// 자동 생성 파일 - buy_signal_telegram.py 실행 시마다 갱신됨. 직접 수정하지 마세요.
// 시장 환경 지표(야후) + 시장 헤드라인(Finnhub). 이 파일이 없어도 대시보드는 정상 동작함.
const MARKET_DATA = {
  "indicators": {
    "vix": {
      "current": 15.739999771118164,
      "prevClose": 15.989999771118164,
      "changeAbs": -0.25,
      "changePct": -1.563477195612979,
      "pctRank": 26.671974522292995,
      "min5y": 11.859999656677246,
      "max5y": 52.33000183105469,
      "ma20": 17.235499811172485,
      "ma60": 17.417333300908407,
      "chg1m": -0.4099998474121094,
      "chg3m": -2.5500011444091797,
      "chg1mPct": -2.53869880555094,
      "chg3mPct": -13.94205039237778,
      "lastDate": "2026-08-03",
      "bars": 1256,
      "symbol": "^VIX",
      "label": "VIX (공포지수)",
      "unit": "",
      "digits": 2
    },
    "us10y": {
      "current": 4.684000015258789,
      "prevClose": 4.744999885559082,
      "changeAbs": -0.06099987030029297,
      "changePct": -1.2855610489252018,
      "pctRank": 97.76892430278885,
      "min5y": 1.1759999990463257,
      "max5y": 4.98799991607666,
      "ma20": 4.613949966430664,
      "ma60": 4.525816647211711,
      "chg1m": 0.19899988174438477,
      "chg3m": 0.3060002326965332,
      "chg1mPct": 4.4370094943219165,
      "chg3mPct": 6.989498581414829,
      "lastDate": "2026-08-03",
      "bars": 1255,
      "symbol": "^TNX",
      "label": "미국 10년물 금리",
      "unit": "%",
      "digits": 2
    },
    "us3m": {
      "current": 3.688000202178955,
      "prevClose": 3.681999921798706,
      "changeAbs": 0.0060002803802490234,
      "changePct": 0.16296253415773584,
      "pctRank": 36.01593625498008,
      "min5y": 0.019999999552965164,
      "max5y": 5.3480000495910645,
      "ma20": 3.719499981403351,
      "ma60": 3.6574166695276897,
      "chg1m": 0.020000219345092773,
      "chg3m": 0.11300015449523926,
      "chg1mPct": 0.5452622529632836,
      "chg3mPct": 3.1608434402246615,
      "lastDate": "2026-08-03",
      "bars": 1255,
      "symbol": "^IRX",
      "label": "미국 3개월 금리",
      "unit": "%",
      "digits": 2
    },
    "oil": {
      "current": 79.41000366210938,
      "prevClose": 84.66999816894531,
      "changeAbs": -5.2599945068359375,
      "changePct": -6.212347490950062,
      "pctRank": 60.9387430389817,
      "min5y": 55.27000045776367,
      "max5y": 123.69999694824219,
      "ma20": 80.8220001220703,
      "ma60": 85.07366663614908,
      "chg1m": 10.720001220703125,
      "chg3m": -22.529998779296875,
      "chg1mPct": 15.6063485801263,
      "chg3mPct": -22.101234294404513,
      "lastDate": "2026-08-03",
      "bars": 1257,
      "symbol": "CL=F",
      "label": "WTI 유가",
      "unit": "$",
      "digits": 1
    },
    "dollar": {
      "current": 99.86699676513672,
      "prevClose": 99.80000305175781,
      "changeAbs": 0.06699371337890625,
      "changePct": 0.06712796726485297,
      "pctRank": 34.924423229912485,
      "min5y": 92.04000091552734,
      "max5y": 114.11000061035156,
      "ma20": 100.89385070800782,
      "ma60": 100.13861694335938,
      "chg1m": -0.9930038452148438,
      "chg3m": 1.6569976806640625,
      "chg1mPct": -0.9845368225319333,
      "chg3mPct": 1.6871985501586666,
      "lastDate": "2026-08-03",
      "bars": 1257,
      "symbol": "DX-Y.NYB",
      "label": "달러지수(DXY)",
      "unit": "",
      "digits": 1
    },
    "gold": {
      "current": 4090.699951171875,
      "prevClose": 4049.10009765625,
      "changeAbs": 41.599853515625,
      "changePct": 1.0273851599693555,
      "pctRank": 87.03261734287987,
      "min5y": 1623.300048828125,
      "max5y": 5318.39990234375,
      "ma20": 4063.9600219726562,
      "ma60": 4265.728336588541,
      "chg1m": -22.000244140625,
      "chg3m": -539.199951171875,
      "chg1mPct": -0.5349343033975597,
      "chg3mPct": -11.6460390622899,
      "lastDate": "2026-08-03",
      "bars": 1257,
      "symbol": "GC=F",
      "label": "금",
      "unit": "$",
      "digits": 0
    },
    "us30y": {
      "current": 5.2220001220703125,
      "prevClose": 5.275000095367432,
      "changeAbs": -0.05299997329711914,
      "changePct": -1.0047388121123326,
      "pctRank": 99.8406374501992,
      "min5y": 1.6779999732971191,
      "max5y": 5.275000095367432,
      "ma20": 5.123300075531006,
      "ma60": 5.033816719055176,
      "chg1m": 0.2369999885559082,
      "chg3m": 0.2560000419616699,
      "chg1mPct": 4.754262431460041,
      "chg3mPct": 5.155055131534942,
      "lastDate": "2026-08-03",
      "bars": 1255,
      "symbol": "^TYX",
      "label": "미국 30년물 금리",
      "unit": "%",
      "digits": 2
    }
  },
  "yieldSpread": 0.995999813079834,
  "sector": {
    "groups": {
      "빅테크·SW": {
        "ret1m": 3.899197257387521,
        "ret3m": -1.4595487684093134,
        "ret6m": -1.1498098314409844,
        "ret1y": 3.2512280942864624,
        "winRate": 60.8,
        "count": 9
      },
      "반도체": {
        "ret1m": -12.688971063219778,
        "ret3m": 15.110949669891838,
        "ret6m": 67.37808562440976,
        "ret1y": 222.56617818476374,
        "winRate": 71.5,
        "count": 15
      }
    },
    "pair": [
      "빅테크·SW",
      "반도체"
    ],
    "corr60": 0.137275257919635,
    "corrPctRank": 0.2510460251046025,
    "corrMin5y": 0.11496792019743002,
    "corrMedian5y": 0.7115782038222396,
    "corrMax5y": 0.9346528705205663
  },
  "news": [
    {
      "headline": "Visa to buy cybersecurity firm BioCatch for $2.4 billion amid surge in AI-powered scams",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/03/visa-buys-biocatch-fraud-detection.html",
      "datetime": 1785766277,
      "headlineKo": "AI 기반 사기 급증에 Visa, 사이버 보안 회사인 BioCatch를 24억 달러에 인수"
    },
    {
      "headline": "Jim Cramer's top 10 things to watch in the stock market Monday",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/03/jim-cramers-top-10-things-to-watch-in-the-stock-market-monday.html",
      "datetime": 1785762480,
      "headlineKo": "짐 크레이머가 월요일 주식 시장에서 주목해야 할 10가지 항목"
    },
    {
      "headline": "Senate appears ready to advance Blanche after Cornyn strikes deal",
      "source": "CNBC",
      "url": "https://www.cnbc.com/2026/08/03/todd-blanche-doj-ag-senate-cornyn.html",
      "datetime": 1785761540,
      "headlineKo": "상원은 Cornyn이 거래를 성사시킨 후 Blanche를 발전시킬 준비가 된 것으로 보입니다."
    },
    {
      "headline": "OPEC+ oil output hike is irrelevant for now, not for later - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxOZ1F5SEtvVzlTU0VibXRmNGx4ZldyYllQcHBfSEkzRHVLVGdrNUxMLUZtQXZsT1pTWjJ4Z1F0ekFyN3NkWjRITjdCc2NtcmpFZ0k2OWN5Z25WOVVFVHpJNEVWQkU3emxZYkUtVFhFand1cWVHSWUyRUpQa1FOOUtPWlRKUzRVQUs3V3oxcWphVzVKUUhSSUNZaHNtdHVkM1U5VXE2Q0ZPNzE4UG5WQmdVS2cwZlU3UnNN?oc=5",
      "datetime": 1785758669,
      "headlineKo": "OPEC+ 원유 생산량 증가는 지금은 중요하지 않고 나중도 중요하지 않습니다 - Reuters"
    },
    {
      "headline": "How Iran is widening its pressure campaign to force US concessions - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxQU2VYbG9DT1JoZWlaZkxlVTc4T01mcjJ0cU9rc2FCWWxuY1dONTVmN0ZTU1RUZzlLUTNGbzgzYURCTFFqZzRWVXZSWXZKZC1Ldm05dFVOdmNZdnlxRVBBUzE2VDVjSU1wMlFXMkFBeDlKeVBuRWQxa2tYV1hPb0hvOHdRd0JvUGREek5HZXhuVXpMR0RBZzdKSE1fNmIyQWVzRVdfUEEzdkt5Zm1XNUVOVnpnbEg3bnNu?oc=5",
      "datetime": 1785751370,
      "headlineKo": "이란이 미국의 양보를 강요하기 위해 압력 캠페인을 확대하는 방법 - 로이터"
    },
    {
      "headline": "Iran executes two people accused of spying for Israel - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxObVpPMnE4MnRQckNZZXg0SU9TYTI4WG5qdmc2aUhydFU0LXlJS04taFVoOU5idUFqb3ZtSFZsVUlpYUhackVhN2lGQUlYQ3hqekNxYkkxd1E1aDU2TGVZTEJQc3V5U1EwVzJLRDdiQmdITzZFYlI4TWZzOTBtT2c5bTREN2tvVVZWUk1hb1EwSlVmRHpSaVJvTDdINzFCaTFHRFI0?oc=5",
      "datetime": 1785750784,
      "headlineKo": "이란, 이스라엘 스파이 혐의로 2명 처형 - 로이터"
    },
    {
      "headline": "Iran war hit euro zone consumption especially hard, ECB says - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxPSEhIQmRnRGRhT3FNNFBJcWdIeFd4THBVYnMtM3d6ODFUZnBWcU9VVVlKdjNBNTlhbWpYX0dBTXNQb2JOTmdNT0NSQ2NaMkVzWjJSVk9EV3RWajB1U05YZURnSWpvbjJNdy1QTVNad2tFbnloaVEzejZUM2NsU19PUTMzNFJZMk5udkViUkxXeGRJdGp2NG1lQVd3dGxEa004VkVsTWJaVQ?oc=5",
      "datetime": 1785744224,
      "headlineKo": "이란 전쟁으로 인해 유로존 소비가 특히 큰 타격을 입었다고 ECB가 밝혔습니다 - Reuters"
    },
    {
      "headline": "Iran says no current talks with U.S. - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMikgFBVV95cUxQTE5hZ0ZnQjBGVFdjTV9kRkdQWm9oaWd0VG9UQ084WGJvRmFoNElkSG5Ec0xocHdYTDdUM1JTd3RYQ0kybnN0dXB5T2hwNFEwSktaZ05FNGxzbUFwd0FqWEl4WWQyVzBCaVowNUpTWGNad19MdERreFFYSEYwWkVuekpwOW1VeE5lVkR6eDBaOGdPZw?oc=5",
      "datetime": 1785742195,
      "headlineKo": "이란, 현재 미국과 대화가 없다고 밝혔다 - 로이터"
    },
    {
      "headline": "Iran war ushers in oil refining golden era. It won’t last - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxQYmQzdlBDbmtIRE9EaFVuRHRPd0pzYUtkY0VyT1FPYmVlaGsxUXJnSWt1emxRQ3p2ZFY5aXVPSGpNQVZaM0hkMThIREtfRU1YcTdQSXFrYU1FNlAyeWYxVGZoeHFWMG5kcm9rUUxzd2Z0OUY0REtwWUFyNGlTczgybWxmRng3azZackV2U2NianBjeVdDbGxXLUhLdkxhMTVvR0VsQzVPb2xxcW9zTDFLMHF3bFFpaE1JckJ3NVh3?oc=5",
      "datetime": 1785736860,
      "headlineKo": "이란 전쟁은 석유정제의 황금시대를 열었습니다. 지속되지는 않을 것이다 - 로이터"
    },
    {
      "headline": "Indian stocks rise on Brent dip, shock-free earnings season - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMingFBVV95cUxPMmpzT2p3MGlZN3V1QkI3c1I0X0dqVTk4Z3BsMjNqcWljM1BGZ19FbThiNHUyR3FXTjE5SE5IZGJnUHR3UHloUUZNZkdtS3phVGRRUTVQdTR3WW9FSHM5Q3VQY2czUFhEZE5JLW5UN0pkNWh3LS1tXzlvRzhfUWdJMjZ5blQtUENIR2NwaktkcVJiX0dHQ3hLS3FnVUlIdw?oc=5",
      "datetime": 1785724740,
      "headlineKo": "충격 없는 어닝 시즌, 브렌트유 하락으로 인도 증시 상승 - Reuters"
    },
    {
      "headline": "Index snub to test Indian bonds; rupee, RBI policy and US-Iran war in focus - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxQNG91Uk0wWkJsZHc4anBQS3JDWktTdnJBR2d1eVN3MzM4ZTF0S1UyX0NpQ3NwdmxyX0dldXNIMzBTSlE1aUpUYjlmOURpR2dwVDREX05pR1ZpcGhJZnlwV3dKcnpFMTg5WWRvUTFFT3ZFRnYtQ1NKSmpldVAyTlpfYmxPZVljQnBVRFN2M1NJMEtXUTVIbjVhRDVrb2tGZFZSTzdYYUNYa1Z0eWVqYjdhOQ?oc=5",
      "datetime": 1785720840,
      "headlineKo": "인도 채권을 테스트하기 위한 지수 스너브; 루피, RBI 정책 및 미국-이란 전쟁에 초점 - Reuters"
    },
    {
      "headline": "India central bank to stay on hold even as peers pivot to rate hikes - Reuters",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxPR1ZnaU9wamdlVW9ldFhnaFBfSUhSN3VsempmMkc0SDQ3M2pGOElvdGFrU3BXNDgtb1dtN21mNXhaWnZMZERRSHNadWhfMENwb0NLc2kxRzNyWTduWENzYUlJamZaaFNVQU1IeGVaR0lHU185bTJodVVQdW9CUTlwYXRqY004c25JeWdWamd1UENkYTF0M01KaFNaZUlNNGQ5VlIta2g2QQ?oc=5",
      "datetime": 1785720720,
      "headlineKo": "인도 중앙은행, 다른 국가들이 금리 인상을 시도하더라도 보류 유지 - Reuters"
    }
  ],
  "_fetched_at": 1785769202.1076086,
  "_updated_label": "2026-08-04 00:00"
};
