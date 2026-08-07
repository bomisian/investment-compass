// 자동 생성 파일 - buy_signal_telegram.py 실행 시마다 갱신됨. 직접 수정하지 마세요.
// Finnhub 실적 캘린더 + 회사 뉴스 헤드라인. 이 파일이 없어도 대시보드는 정상 동작함(해당 섹션만 숨김).
const NEWS_DATA = {
  "NVDA": {
    "nextEarnings": {
      "date": "2026-08-26",
      "hour": "amc",
      "epsEstimate": 2.1274
    },
    "news": [
      {
        "headline": "Nvidia Faces New Pressure From U.S. Government",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a8dd001fa7bb111253999c4c6ae39e618ce9d380cb4757de2e33efedfc865dbd",
        "datetime": 1786132167,
        "headlineKo": "엔비디아, 미국 정부로부터 새로운 압력에 직면하다"
      },
      {
        "headline": "Pfizer's Next Weight-Loss Weapon: How Berobenatide Stacks Up Against Novo Nordisk's Wegovy and Eli Lilly's Zepbound",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=95eb0a6e7ed26b9db1538aa2bc11fd40ec517b5700ac99dccdad84c6f0f2e0c1",
        "datetime": 1786132080,
        "headlineKo": "화이자의 다음 체중 감량 무기: Berobenatide가 Novo Nordisk의 Wegovy 및 Eli Lilly의 Zepbound에 비해 어떻게 비교됩니까?"
      },
      {
        "headline": "Michael Burry Sounds Alarm on Major AI Stocks",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d04af52a3bc24c58728b3319f664d3fea346fd5f124519418e432fc3ebe9ebf8",
        "datetime": 1786132058,
        "headlineKo": "Michael Burry, 주요 AI 주식에 경종을 울린다"
      },
      {
        "headline": "Why Rocket Lab Stock Took Flight on Friday",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ce56f659586a82d67e427dd676ca63a202afcf134cb9bcb943ee308f81dfb0e8",
        "datetime": 1786131760,
        "headlineKo": "로켓 연구소 주식이 금요일에 날아간 이유"
      },
      {
        "headline": "U.S. Economy Unexpectedly Lost 23,000 Jobs in July, Signaling a Weakening Labor Market",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=462380997e2673ebc08bef958c0dfa5cbedf3568ed4d705c7bcfe2799cd667cf",
        "datetime": 1786131601,
        "headlineKo": "미국 경제는 7월에 예기치 않게 23,000개의 일자리를 잃었으며 노동 시장 약화 신호를 보냈습니다."
      }
    ],
    "_fetched_at": 1786140002.5891886,
    "_updated_label": "2026-08-08 07:01"
  },
  "AAPL": {
    "nextEarnings": {
      "date": "2026-10-28",
      "hour": "amc",
      "epsEstimate": 2.0468
    },
    "news": [
      {
        "headline": "Canaccord Genuity Shareholders Back Board as Revenue Tops CAD 2 Billion",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b50855c2d2ea6063a581cdc483de0f96c8b43bace2df6883231983977433c353",
        "datetime": 1786129461,
        "headlineKo": "Canaccord Genuity 주주 백보드로 수익 CAD 20억 돌파"
      },
      {
        "headline": "‘Your refund: $0’: Companies claim billions in tariff refunds, months after Trump floated $2,000 checks",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b9e0d0522cd492921f47b9424e5ec45c72a30455df7feadfc95d99831fa41e97",
        "datetime": 1786128600,
        "headlineKo": "'귀하의 환불: $0': 트럼프가 2,000달러 수표를 발행한 지 몇 달 만에 기업들은 수십억 달러의 관세 환불을 요구합니다."
      },
      {
        "headline": "Greg Abel concentrates 63% of Berkshire's $355B portfolio in 5 stocks",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ad587f616e3440cc360f0ff35dfea0b6b74fe3d149384b71c46c2afc9e0ca425",
        "datetime": 1786123324,
        "headlineKo": "Greg Abel은 버크셔의 3,550억 달러 포트폴리오 중 63%를 5개 주식에 집중합니다."
      },
      {
        "headline": "Exploring the top movers within the dow jones index during today's session.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=90e59b20f2b77e8be0f9b80023cfea68966c63722d4f19a0161c55c2e4e3141a",
        "datetime": 1786120804,
        "headlineKo": "오늘 세션 동안 다우존스 지수 내 최고 변동 항목을 살펴봅니다."
      },
      {
        "headline": "Prediction: Can Apple Stock Reach $400 This Year?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=29ab2cb310108052c37f125dd9c00f6912f6b7902c5c4f2eb07997898669f2e0",
        "datetime": 1786120251,
        "headlineKo": "예측: 올해 애플 주가가 400달러에 도달할 수 있을까?"
      }
    ],
    "_fetched_at": 1786140002.5891886,
    "_updated_label": "2026-08-08 07:00"
  },
  "GOOGL": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "amc",
      "epsEstimate": 3.1009
    },
    "news": [
      {
        "headline": "These dow jones stocks are moving in today's session",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=a3d83ebddc2c112fffe1432302800858660d0afdb1fc35fdbb5ae7bdc724b5ac",
        "datetime": 1786129806,
        "headlineKo": "다우존스 주식은 오늘 세션에서 움직이고 있습니다"
      },
      {
        "headline": "Whatnot raises $545M Series G at $20 billion valuation",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c9c0d47c4670097c56464e13109efeb20fbdbee25b50923186953b81be78b284",
        "datetime": 1786124501,
        "headlineKo": "Whatnot은 200억 달러 평가액으로 5억 4,500만 달러 규모의 시리즈 G 투자 유치"
      },
      {
        "headline": "Greg Abel concentrates 63% of Berkshire's $355B portfolio in 5 stocks",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ad587f616e3440cc360f0ff35dfea0b6b74fe3d149384b71c46c2afc9e0ca425",
        "datetime": 1786123324,
        "headlineKo": "Greg Abel은 버크셔의 3,550억 달러 포트폴리오 중 63%를 5개 주식에 집중합니다."
      },
      {
        "headline": "Alphabet’s Cloud vs Meta’s Superintelligence: Who Wins Q2?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4ba5304c5624927085ae5daf141a012ca78fba3ef410f8caa1526f80f42a30bd",
        "datetime": 1786122049,
        "headlineKo": "Alphabet의 클라우드 vs Meta의 초지능: Q2의 승자는 누구입니까?"
      },
      {
        "headline": "Lyft Q2 Rides, Gross Bookings Growth Support Higher Estimates, RBC Says",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2790d6a94055343648890b542acffbd953045d6d64894eb7eb0028733acf359e",
        "datetime": 1786121929,
        "headlineKo": "Lyft Q2 승차, 총 예약 증가로 더 높은 추정치를 뒷받침한다고 RBC가 밝혔습니다."
      }
    ],
    "_fetched_at": 1786140002.5891886,
    "_updated_label": "2026-08-08 07:00"
  },
  "MSFT": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "",
      "epsEstimate": 4.7263
    },
    "news": [
      {
        "headline": "Jim Cramer Was “Blown Away” By Microsoft Corporation (NASDAQ:MSFT)’s Financials",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=23da734117545a513e63b4291871cdf85e94cd94e196f47120282e7678b61fe9",
        "datetime": 1786127918,
        "headlineKo": "Jim Cramer는 Microsoft Corporation(NASDAQ:MSFT)의 재무 보고서에 의해 “놀랐습니다”."
      },
      {
        "headline": "AI Boom: Top Stocks to Consider for Your Portfolio",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1794c3e68c5f23063efadb914902f9d9eb89981992ff2283b9a47fe204ac57df",
        "datetime": 1786123560,
        "headlineKo": "AI 붐: 포트폴리오에 고려해야 할 상위 주식"
      },
      {
        "headline": "Exploring the top movers within the dow jones index during today's session.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=90e59b20f2b77e8be0f9b80023cfea68966c63722d4f19a0161c55c2e4e3141a",
        "datetime": 1786120804,
        "headlineKo": "오늘 세션 동안 다우존스 지수 내 최고 변동 항목을 살펴봅니다."
      },
      {
        "headline": "Microsoft Is Winning the AI Cash Flow Test",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ae0b99b8ef1003cc825dd5163f680bc35b431691d87680d182d39a88390e3d3a",
        "datetime": 1786120712,
        "headlineKo": "Microsoft가 AI 현금 흐름 테스트에서 승리했습니다."
      },
      {
        "headline": "Datadog Posts Q2 Beat as Observability, AI Demand Remain Strong, RBC Capital Markets Says",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7a9096af9312f778f3ed37881b8a88b2f3d551559b7bddd5c065db5ea43057ac",
        "datetime": 1786120251,
        "headlineKo": "Datadog은 2분기 실적이 관측 가능성이 높고 AI 수요가 여전히 강하다고 RBC Capital Markets에서 밝혔습니다."
      }
    ],
    "_fetched_at": 1786140002.5891886,
    "_updated_label": "2026-08-08 07:00"
  },
  "AMZN": {
    "nextEarnings": {
      "date": "2026-10-28",
      "hour": "amc",
      "epsEstimate": 1.9445
    },
    "news": [
      {
        "headline": "Trade Desk's Downbeat Guidance Indicates Macro, Structural Issues, Wedbush Says",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=81d5c259f7f8b00c343b2490a3f5740583512833338b960504acfc44001f48ea",
        "datetime": 1786129132,
        "headlineKo": "무역 데스크의 비관적 지침은 거시적, 구조적 문제를 나타냅니다. Wedbush는 말합니다."
      },
      {
        "headline": "‘Your refund: $0’: Companies claim billions in tariff refunds, months after Trump floated $2,000 checks",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b9e0d0522cd492921f47b9424e5ec45c72a30455df7feadfc95d99831fa41e97",
        "datetime": 1786128600,
        "headlineKo": "'귀하의 환불: $0': 트럼프가 2,000달러 수표를 발행한 지 몇 달 만에 기업들은 수십억 달러의 관세 환불을 요구합니다."
      },
      {
        "headline": "Jim Cramer Reveals How Alphabet Inc (NASDAQ:GOOGL) Can Reverse Recent Weakness",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c1f1e83c52fe4185959089c65c45865e9ab18a9f0d62ce6eb6de20abc7ff77e3",
        "datetime": 1786127594,
        "headlineKo": "Jim Cramer, Alphabet Inc(NASDAQ:GOOGL)가 최근 약점을 되돌릴 수 있는 방법 공개"
      },
      {
        "headline": "Amazon vs MercadoLibre: Two E-Commerce Titans, Only One is The Smarter Buy Now",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=930d3845552a8237a39e2137001b50aa4f60211ad8e5481657650372ab423f78",
        "datetime": 1786125633,
        "headlineKo": "Amazon vs MercadoLibre: 두 개의 전자상거래 거인, 단 하나가 더 똑똑합니다."
      },
      {
        "headline": "Elon Musk Has a Message for Jeff Bezos' Blue Origin After It Solved the New Glenn Mystery— 'Hope You...'",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=21473c8117dc411f18b6d6caf548a149f11730784ae31cd1f876fbf5e179d06c",
        "datetime": 1786123824,
        "headlineKo": "Elon Musk는 새로운 Glenn 미스터리를 해결한 후 Jeff Bezos의 Blue Origin에 대한 메시지를 가지고 있습니다. '당신이...'"
      }
    ],
    "_fetched_at": 1786140002.5891886,
    "_updated_label": "2026-08-08 07:00"
  },
  "TSM": {
    "nextEarnings": {
      "date": "2026-10-14",
      "hour": "amc",
      "epsEstimate": 28.8828
    },
    "news": [
      {
        "headline": "Trump Says AI Could Be Bigger Than Oil. These ETFs Are Betting on the Fuel Behind the Boom",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=8e9ea1de9e920980a657348d4874f1d021f913640d9d2247f35ce68c8c861b7f",
        "datetime": 1786106140,
        "headlineKo": "트럼프 “AI가 석유보다 더 클 수 있다” 이 ETF는 호황의 원동력에 베팅하고 있습니다."
      },
      {
        "headline": "What's Going On With Taiwan Semiconductor Stock Friday?",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=4516ff44783fa8144f0d0770c3682334fb0a1696b2180afcd60318678afa1236",
        "datetime": 1786105529,
        "headlineKo": "금요일 대만 반도체 주식에 무슨 일이 일어나고 있습니까?"
      },
      {
        "headline": "Sandisk: Memory Has Structurally Changed, The Sector Cannot Remain At 5x P/E",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=5b1d6bcf45aacdf9260b5b13f1e7e96f3963b7e7e427820080700a9556d8ee21",
        "datetime": 1786096061,
        "headlineKo": "Sandisk: 메모리는 구조적으로 변화했으며 해당 부문은 P/E 5배에 머물 수 없습니다"
      },
      {
        "headline": "Taiwan Semiconductor (NYSE:TSM) Combines High Growth Momentum with a Breakout Setup",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=215c514565c32178b75d937c3db8dc8916e4ab2244bb939787f4fb86e192902b",
        "datetime": 1786094488,
        "headlineKo": "Taiwan Semiconductor(NYSE:TSM), 높은 성장 모멘텀과 브레이크아웃 설정 결합"
      },
      {
        "headline": "AMD: Buy The Dip - Market Is Mispricing Its Supply Leverage",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=b6c0e20f791a8fefc10daa30a579f9ab3f7bd0a51b036b3374ac42872bcb74a4",
        "datetime": 1786094146,
        "headlineKo": "AMD: 딥 매수 - 시장이 공급 레버리지 가격을 잘못 책정하고 있습니다"
      }
    ],
    "_fetched_at": 1786140002.5891886,
    "_updated_label": "2026-08-08 07:01"
  },
  "AVGO": {
    "nextEarnings": {
      "date": "2026-09-02",
      "hour": "amc",
      "epsEstimate": 3.3012
    },
    "news": [
      {
        "headline": "The Toughest Questions AMD Faced On Its Latest Call",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6012cda4a6eace2f2d9baf8b6054e29a00a832dccf45c8d130aaa8d714bc9653",
        "datetime": 1786125529,
        "headlineKo": "AMD가 최근 전화 통화에서 직면한 가장 어려운 질문"
      },
      {
        "headline": "How To Earn 11% On NVDA Stock And Set A 30% Safety Net",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0062adb357e5332978c05b4e5b51a2b355c07c3a9d560170175d2a1083998d22",
        "datetime": 1786124670,
        "headlineKo": "NVDA 주식에서 11%를 벌고 30% 안전망을 설정하는 방법"
      },
      {
        "headline": "AMD Drops 6% Post Q2 Earnings: Is the Stock a Buy on the Dip?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e4f9a0947610a461138fba2c0dfccc46e0e8c487cc85aa066577fc1268daf91b",
        "datetime": 1786122900,
        "headlineKo": "AMD는 2분기 실적 이후 6% 하락: 주식은 하락장에서 매수인가요?"
      },
      {
        "headline": "Forget Taiwan Semiconductor: 2 AI Semiconductor Equipment Stocks to Buy and Hold Instead",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5be3e09c6e109b7dedd0f474f1e1bf1716c794b43d38b0d7b79fa9182a493159",
        "datetime": 1786121400,
        "headlineKo": "대만 반도체는 잊어라: 대신 매수하고 보유해야 할 AI 반도체 장비 주식 2개"
      },
      {
        "headline": "This AI Stock Is Surging. Can It Shake the ‘Meme Stock’ Label?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6d940044b03631c8863a412c808f0033a63813cedbde67cf5f31e4aa9ddf3c30",
        "datetime": 1786120980,
        "headlineKo": "AI 주식이 급등하고 있습니다. '밈 주식'이라는 꼬리표를 흔들 수 있을까?"
      }
    ],
    "_fetched_at": 1786140002.5891886,
    "_updated_label": "2026-08-08 07:01"
  },
  "META": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "amc",
      "epsEstimate": 7.1215
    },
    "news": [
      {
        "headline": "Meta Faces New Risk After Major Court Ruling",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d98352a8aab6059ea711ec2b6f49026a2671a0b82cb471f6bfe1b16cf5c6626a",
        "datetime": 1786132574,
        "headlineKo": "메타는 주요 법원 판결 이후 새로운 위험에 직면"
      },
      {
        "headline": "Meta Stock Rises 1.2% Despite $942 Million Child-Safety Judgment",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3c98bb29285deb70a7ac4d247034a233888a660561c8441f9df0cac8f844b088",
        "datetime": 1786132397,
        "headlineKo": "9억 4200만 달러의 아동 안전 판결에도 불구하고 메타 주식은 1.2% 상승"
      },
      {
        "headline": "Explainer-How could New Mexico's $567 million ruling change Meta?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5163a4e62eb7b01d3c32140c1a3c14dd57b8374909ee54a95eafcc078282ad1d",
        "datetime": 1786131340,
        "headlineKo": "설명자 - 뉴멕시코의 5억 6,700만 달러 판결이 어떻게 메타를 바꿀 수 있었습니까?"
      },
      {
        "headline": "Jim Cramer Believes Meta Platforms, Inc. (NASDAQ:META) Can Do Better",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3cb1361ff8f8bc66ac9ffc3e422d7749358173a7d02c1bc22dcb62eb7a892b22",
        "datetime": 1786127637,
        "headlineKo": "Jim Cramer는 Meta Platforms, Inc.(NASDAQ:META)가 더 나은 성과를 낼 수 있다고 믿습니다."
      },
      {
        "headline": "What Does Meta (META) Have To Change After The $942 Million Teen Safety Ruling?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=390018fee8a3475111caf865cfd24563b3a80a59905f24b4c8233776f457b0f8",
        "datetime": 1786126316,
        "headlineKo": "9억 4200만 달러의 청소년 안전 판결 이후 메타(META)는 무엇을 바꿔야 합니까?"
      }
    ],
    "_fetched_at": 1786140002.5891886,
    "_updated_label": "2026-08-08 07:00"
  },
  "TSLA": {
    "nextEarnings": {
      "date": "2026-10-20",
      "hour": "amc",
      "epsEstimate": 0.4492
    },
    "news": [
      {
        "headline": "Tesla Stock Jumps Nearly 4% as $16.8 Billion Terafab Breaks Ground",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5b6d9c6400f5ef20c0f002f78c2180769d1bee7bd39a1ac889a86be48791b7b9",
        "datetime": 1786130966,
        "headlineKo": "Tesla 주가는 168억 달러 규모의 Terafab 착공으로 거의 4% 상승했습니다."
      },
      {
        "headline": "Tesla Jumps as Rate Fears Ease",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=34c075a367767697ef7d6087ecc697bec9c084e9c35ac431e4718e1b23497b2c",
        "datetime": 1786130044,
        "headlineKo": "금리 우려 완화로 테슬라 점프"
      },
      {
        "headline": "SpaceX’s Texas Terafab Could Become World’s Largest Building",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a95cef8eb06d2a48ba591153ffed7364f10f96f486f1617ca9dda86293cf6dfa",
        "datetime": 1786127239,
        "headlineKo": "SpaceX의 Texas Terafab은 세계 최대의 건물이 될 수 있습니다"
      },
      {
        "headline": "Most active S&P500 stocks in Friday's session",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=21ae4947413e462bde9ae3d01a07161031a4fd3833a2d40315510d88e2728fba",
        "datetime": 1786125902,
        "headlineKo": "금요일 세션에서 가장 활발한 S&P500 주식"
      },
      {
        "headline": "Musk's SpaceX, Tesla to build $16.8B Terafab chip factory in Texas",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=02a8079a2ee6e45ff447ab64ffc686040c1b4e30be1cc1d7447059b6f9b8dfbc",
        "datetime": 1786121863,
        "headlineKo": "머스크의 SpaceX, Tesla, 텍사스에 168억 달러 규모의 Terafab 칩 공장 건설 예정"
      }
    ],
    "_fetched_at": 1786140002.5891886,
    "_updated_label": "2026-08-08 07:00"
  },
  "MU": {
    "nextEarnings": {
      "date": "2026-09-21",
      "hour": "amc",
      "epsEstimate": 32.2476
    },
    "news": [
      {
        "headline": "Micron Stock Falls After Citi Slashes Price Target on Memory Risks",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6762210a53d75dd98a6ce7ddc2238e427e68f8315b4df33e045918ea56b7a91d",
        "datetime": 1786132293,
        "headlineKo": "Citi가 메모리 위험에 대한 가격 목표를 인하한 후 Micron 주가 하락"
      },
      {
        "headline": "Michael Burry issues blunt warning as he bets against 2 AI favorites",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e74856535b7cfd6f0b870513e35bd5268cf03f567140e369c0a6c8e079ab0f31",
        "datetime": 1786131420,
        "headlineKo": "Michael Burry는 2개의 AI 후보에 베팅하면서 직설적인 경고를 합니다."
      },
      {
        "headline": "Micron Stock Slips as Citi Cuts Target by $250",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9c51827c360aa8a71ff029e977aef636c2dc32091b745b25174994d33357725e",
        "datetime": 1786131150,
        "headlineKo": "Citi가 목표를 250달러 삭감함에 따라 Micron 주식 하락"
      },
      {
        "headline": "One American Stock Benefits as Smartphones, MRI, and AI Servers Want the Same Chip",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=229f52ce0a1d00c7de043fbaf3b7b58c65883a23e640dba590935998341c9b3e",
        "datetime": 1786130818,
        "headlineKo": "스마트폰, MRI 및 AI 서버가 동일한 칩을 원하기 때문에 One American Stock의 이점"
      },
      {
        "headline": "China opens formal probe into Palo Alto just as stock hits highs",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9ce0f589e438d5e60bad356f3c1d98e4ca93768b19c0ece95df3bf21bb8e7b64",
        "datetime": 1786128420,
        "headlineKo": "중국, 주가가 최고치를 기록하자 팔로알토에 대한 공식 조사 개시"
      }
    ],
    "_fetched_at": 1786140002.5891886,
    "_updated_label": "2026-08-08 07:02"
  },
  "AMD": {
    "nextEarnings": {
      "date": "2026-11-02",
      "hour": "amc",
      "epsEstimate": 1.8517
    },
    "news": [
      {
        "headline": "Jim Cramer Shares Reasons Behind Why NVIDIA Corporation (NASDAQ:NVDA)’s Shares Are Finally Rising",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=51f970c0bb3502d4e9e32836ebc0af363e9a7146efc85c552430f629dcb32633",
        "datetime": 1786127044,
        "headlineKo": "Jim Cramer가 NVIDIA Corporation(NASDAQ:NVDA)의 주가가 마침내 상승하는 이유를 공유합니다."
      },
      {
        "headline": "The Toughest Questions AMD Faced On Its Latest Call",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6012cda4a6eace2f2d9baf8b6054e29a00a832dccf45c8d130aaa8d714bc9653",
        "datetime": 1786125529,
        "headlineKo": "AMD가 최근 전화 통화에서 직면한 가장 어려운 질문"
      },
      {
        "headline": "How To Earn 11% On NVDA Stock And Set A 30% Safety Net",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0062adb357e5332978c05b4e5b51a2b355c07c3a9d560170175d2a1083998d22",
        "datetime": 1786124670,
        "headlineKo": "NVDA 주식에서 11%를 벌고 30% 안전망을 설정하는 방법"
      },
      {
        "headline": "AI Boom: Top Stocks to Consider for Your Portfolio",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1794c3e68c5f23063efadb914902f9d9eb89981992ff2283b9a47fe204ac57df",
        "datetime": 1786123560,
        "headlineKo": "AI 붐: 포트폴리오에 고려해야 할 상위 주식"
      },
      {
        "headline": "Why Super Micro (SMCI) Is Up 6.0% After AI Rack Expansion And AMD Instinct Coder Role",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cf74cf4abd861ee3ac694c9b9c264ebf7c589660646831cd5a43893687822839",
        "datetime": 1786123065,
        "headlineKo": "AI 랙 확장 및 AMD Instinct Coder 역할 이후 Super Micro(SMCI)가 6.0% 상승한 이유"
      }
    ],
    "_fetched_at": 1786140002.5891886,
    "_updated_label": "2026-08-08 07:01"
  },
  "INTC": {
    "nextEarnings": {
      "date": "2026-10-21",
      "hour": "amc",
      "epsEstimate": 0.3936
    },
    "news": [
      {
        "headline": "SoftBank Stock Drops 6.1% as AI Funding Pressure Intensifies",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cbbc87bc8f9da5340f5ba05ce023679edf1f221d8455573c0624335436ba4d90",
        "datetime": 1786132254,
        "headlineKo": "AI 자금 압박이 심화되면서 소프트뱅크 주가 6.1% 하락"
      },
      {
        "headline": "Most active S&P500 stocks in Friday's session",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=21ae4947413e462bde9ae3d01a07161031a4fd3833a2d40315510d88e2728fba",
        "datetime": 1786125902,
        "headlineKo": "금요일 세션에서 가장 활발한 S&P500 주식"
      },
      {
        "headline": "Curious about the most active stocks on Friday?",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=6f4edb3908e5710aaecd62be546b7e42e4c7cdae0fbc8a9b3ec03b42a0b4cd21",
        "datetime": 1786125600,
        "headlineKo": "금요일에 가장 활발한 주식이 궁금하세요?"
      },
      {
        "headline": "The Toughest Questions AMD Faced On Its Latest Call",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6012cda4a6eace2f2d9baf8b6054e29a00a832dccf45c8d130aaa8d714bc9653",
        "datetime": 1786125529,
        "headlineKo": "AMD가 최근 전화 통화에서 직면한 가장 어려운 질문"
      },
      {
        "headline": "How To Earn 11% On NVDA Stock And Set A 30% Safety Net",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0062adb357e5332978c05b4e5b51a2b355c07c3a9d560170175d2a1083998d22",
        "datetime": 1786124670,
        "headlineKo": "NVDA 주식에서 11%를 벌고 30% 안전망을 설정하는 방법"
      }
    ],
    "_fetched_at": 1786140002.5891886,
    "_updated_label": "2026-08-08 07:01"
  },
  "AMAT": {
    "nextEarnings": {
      "date": "2026-08-13",
      "hour": "amc",
      "epsEstimate": 3.462
    },
    "news": [
      {
        "headline": "Tesla-SpaceX Terafab Bet: 4 Chip Equipment Stocks That Could Benefit",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2d04ad8fcb1678c161cebaf09f0979893594edf7aed66c5ed905ef8acd4e9016",
        "datetime": 1786121700,
        "headlineKo": "Tesla-SpaceX Terafab 베팅: 이익을 얻을 수 있는 4가지 칩 장비 주식"
      },
      {
        "headline": "LASR Q2 Earnings Surpass Estimates on Strong A&D Growth",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ce07f891918824de2ab72e7456d43462c5b0b5ce68d9670d2e4d934875a8dba8",
        "datetime": 1786118940,
        "headlineKo": "LASR Q2 수익은 강력한 A&D 성장으로 예상치를 상회했습니다."
      },
      {
        "headline": "Gen Digital Q1 Earnings Beat Estimates, Revenues Increase Y/Y",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7c220c0ebe70194454712c28d31cd41c37f6122a646502f7b7c5f1738e3845f8",
        "datetime": 1786118580,
        "headlineKo": "Gen Digital Q1 수익, 추정치를 상회하고 수익은 Y/Y 증가"
      },
      {
        "headline": "The Economy Lost Jobs, Wall Street Threw a Party: What Moved Markets This Week",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=ffe919333b39a4784c80efe3fd541bb87c4541a057dc8d5a69516d91906efc9c",
        "datetime": 1786117202,
        "headlineKo": "경제는 일자리를 잃었고 월스트리트는 파티를 열었습니다: 이번 주 시장을 움직인 것"
      },
      {
        "headline": "AMSC Q1 Earnings Miss Estimates on Margin Pressure, Sales Beat",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=89b04055303789c1343299f879650f5aca31703a4d2a0efe44c966b07b3525ef",
        "datetime": 1786116420,
        "headlineKo": "AMSC Q1 수익, 마진 압력에 대한 추정치 미달, 판매 상회"
      }
    ],
    "_fetched_at": 1786140002.5891886,
    "_updated_label": "2026-08-08 07:01"
  },
  "QQQ": {
    "nextEarnings": null,
    "news": [
      {
        "headline": "I've Never Had Such A Low Conviction In A Bull Run",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=2da45380418bcb55d765119a57b66fbf4f107515de13cdd251eb79445c3a6f87",
        "datetime": 1786118523,
        "headlineKo": "나는 강세장에서 이렇게 낮은 확신을 가져본 적이 없습니다"
      },
      {
        "headline": "Caution Ahead: Average 3-Month Jobs Prints At Just 20,000 And The JPY Needed A Bailout",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=eafaba9ef156c810e38f6394f0d1c1f87f49b6e15d9b3fe7d25ef4126ead3802",
        "datetime": 1786117611,
        "headlineKo": "주의 사항: 평균 3개월간 일자리는 단 20,000달러에 인쇄되고 JPY에는 구제 금융이 필요합니다."
      },
      {
        "headline": "QUICK SPARK: SPY, GLD Among Biggest Winners as $15.3 Billion Floods Into ETFs in One Day",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=3f101394aa2ae23fd45c38b26543b6c07c81d55d103b7210c5e30f1accabe1d9",
        "datetime": 1786117409,
        "headlineKo": "QUICK SPARK: SPY, GLD가 하루 만에 153억 달러 규모의 ETF로 유입되면서 최대 승자 중 하나"
      },
      {
        "headline": "The Economy Lost Jobs, Wall Street Threw a Party: What Moved Markets This Week",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=ffe919333b39a4784c80efe3fd541bb87c4541a057dc8d5a69516d91906efc9c",
        "datetime": 1786117202,
        "headlineKo": "경제는 일자리를 잃었고 월스트리트는 파티를 열었습니다: 이번 주 시장을 움직인 것"
      },
      {
        "headline": "These Will Be Among The First Casualties When The AI Bubble Bursts",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=d743ba4b157a90b2918b6c57bb1d409f53d2f5fa43ba0e09497aa6ef45b184dc",
        "datetime": 1786115591,
        "headlineKo": "AI 버블이 터질 때 이들은 최초의 사상자 중 하나가 될 것입니다"
      }
    ],
    "_fetched_at": 1786140002.5891886,
    "_updated_label": "2026-08-08 07:00"
  },
  "SPY": {
    "nextEarnings": null,
    "news": [
      {
        "headline": "The 20 Most Actively Traded ETFs",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4590d9a0295bd1661bbe597c1a3f3c74da9de37f9f675856d0fd8ade7624fa41",
        "datetime": 1786131969,
        "headlineKo": "가장 활발하게 거래되는 20개 ETF"
      },
      {
        "headline": "I've Never Had Such A Low Conviction In A Bull Run",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=2da45380418bcb55d765119a57b66fbf4f107515de13cdd251eb79445c3a6f87",
        "datetime": 1786118523,
        "headlineKo": "나는 강세장에서 이렇게 낮은 확신을 가져본 적이 없습니다"
      },
      {
        "headline": "Caution Ahead: Average 3-Month Jobs Prints At Just 20,000 And The JPY Needed A Bailout",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=eafaba9ef156c810e38f6394f0d1c1f87f49b6e15d9b3fe7d25ef4126ead3802",
        "datetime": 1786117611,
        "headlineKo": "주의 사항: 평균 3개월간 일자리는 단 20,000달러에 인쇄되고 JPY에는 구제 금융이 필요합니다."
      },
      {
        "headline": "QUICK SPARK: SPY, GLD Among Biggest Winners as $15.3 Billion Floods Into ETFs in One Day",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=3f101394aa2ae23fd45c38b26543b6c07c81d55d103b7210c5e30f1accabe1d9",
        "datetime": 1786117409,
        "headlineKo": "QUICK SPARK: SPY, GLD가 하루 만에 153억 달러 규모의 ETF로 유입되면서 최대 승자 중 하나"
      },
      {
        "headline": "The Economy Lost Jobs, Wall Street Threw a Party: What Moved Markets This Week",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=ffe919333b39a4784c80efe3fd541bb87c4541a057dc8d5a69516d91906efc9c",
        "datetime": 1786117202,
        "headlineKo": "경제는 일자리를 잃었고 월스트리트는 파티를 열었습니다: 이번 주 시장을 움직인 것"
      }
    ],
    "_fetched_at": 1786140002.5891886,
    "_updated_label": "2026-08-08 07:00"
  },
  "ORCL": {
    "nextEarnings": {
      "date": "2026-09-07",
      "hour": "",
      "epsEstimate": 1.7745
    },
    "news": [
      {
        "headline": "Michael Burry Sounds Alarm on Major AI Stocks",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d04af52a3bc24c58728b3319f664d3fea346fd5f124519418e432fc3ebe9ebf8",
        "datetime": 1786132058,
        "headlineKo": "Michael Burry, 주요 AI 주식에 경종을 울린다"
      },
      {
        "headline": "Michael Burry issues blunt warning as he bets against 2 AI favorites",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e74856535b7cfd6f0b870513e35bd5268cf03f567140e369c0a6c8e079ab0f31",
        "datetime": 1786131420,
        "headlineKo": "Michael Burry는 2개의 AI 후보에 베팅하면서 직설적인 경고를 합니다."
      },
      {
        "headline": "Oracle price target lowered by UBS amid AI spending concerns",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c1ef57f9fc976e546cf08edbf4228153f1dd823b45ed148177970b4cca0981a4",
        "datetime": 1786122480,
        "headlineKo": "AI 지출 우려로 UBS가 오라클 가격 목표를 낮췄습니다."
      },
      {
        "headline": "Alphabet Taps the Bond Market Again for Up to $25 Billion",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d83a60fcf74ed7bd52103d63a79bc3ebf64db5b8e35610ae3f4b3b8973f24dac",
        "datetime": 1786116630,
        "headlineKo": "Alphabet, 최대 250억 달러에 다시 채권 시장 진출"
      },
      {
        "headline": "These Will Be Among The First Casualties When The AI Bubble Bursts",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=d743ba4b157a90b2918b6c57bb1d409f53d2f5fa43ba0e09497aa6ef45b184dc",
        "datetime": 1786115591,
        "headlineKo": "AI 버블이 터질 때 이들은 최초의 사상자 중 하나가 될 것입니다"
      }
    ],
    "_fetched_at": 1786140002.5891886,
    "_updated_label": "2026-08-08 07:00"
  },
  "CRM": {
    "nextEarnings": {
      "date": "2026-08-26",
      "hour": "amc",
      "epsEstimate": 3.3057
    },
    "news": [
      {
        "headline": "These dow jones stocks are moving in today's session",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=a3d83ebddc2c112fffe1432302800858660d0afdb1fc35fdbb5ae7bdc724b5ac",
        "datetime": 1786129806,
        "headlineKo": "다우존스 주식은 오늘 세션에서 움직이고 있습니다"
      },
      {
        "headline": "Is SOUN Worth Buying as Growth Collides With a Premium Valuation?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=73582341a19b5fa4622a1785776545cbbb6ecef7f58b353c8360a692acf51eb0",
        "datetime": 1786127220,
        "headlineKo": "성장이 프리미엄 가치 평가와 충돌할 때 SOUN을 구매할 가치가 있나요?"
      },
      {
        "headline": "Exploring the top movers within the dow jones index during today's session.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=90e59b20f2b77e8be0f9b80023cfea68966c63722d4f19a0161c55c2e4e3141a",
        "datetime": 1786120804,
        "headlineKo": "오늘 세션 동안 다우존스 지수 내 최고 변동 항목을 살펴봅니다."
      },
      {
        "headline": "Microsoft Stock's Peak Margin And Its Azure Bill Are The Same Story",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=85d69e978d8d45189fb1ac302c1bdbab625a224b6320fc2aec8a95faa83f2181",
        "datetime": 1786115241,
        "headlineKo": "Microsoft Stock의 최고 마진과 Azure Bill은 같은 이야기입니다"
      },
      {
        "headline": "Oracle Stock Fell While Its Operating Margin Climbed For A Third Straight Year",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=56a4fd13d8835d2961a60928459cc9c809684a34038b7ae78bc24c8938a4e55d",
        "datetime": 1786114304,
        "headlineKo": "오라클 주식은 하락한 반면 영업이익률은 3년 연속 상승했습니다."
      }
    ],
    "_fetched_at": 1786140002.5891886,
    "_updated_label": "2026-08-08 07:00"
  },
  "PLTR": {
    "nextEarnings": {
      "date": "2026-11-02",
      "hour": "",
      "epsEstimate": 0.3782
    },
    "news": [
      {
        "headline": "Stay informed with the top movers within the S&P500 index on Friday.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=97cc30b60f13c7af214f0c0afb17997cc515ad12a36ad63fdf4d3ec954ca3f5c",
        "datetime": 1786129501,
        "headlineKo": "금요일 S&P500 지수 내 최고 변동 항목에 대한 정보를 받아보세요."
      },
      {
        "headline": "Jim Cramer’s Post Earnings Palantir Technologies Inc. (NASDAQ:PLTR) Worry Didn’t Materialize",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a5909c8e67e67ac27c3516b917cf58171048b78e812643d1223760e1d2aa95d5",
        "datetime": 1786127080,
        "headlineKo": "Jim Cramer의 사후 수익 Palantir Technologies Inc.(NASDAQ:PLTR) 걱정은 실현되지 않았습니다."
      },
      {
        "headline": "Palantir Surges 10%, UiPath Rises 7%, C3.ai Gains 5% as Agentic AI Stocks Rally Together",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=41a3232458105182cbd4c89ac469020a7fd5dbc3852f22ebb13790393d096c35",
        "datetime": 1786126354,
        "headlineKo": "Palantir는 10% 급등, UiPath는 7% 상승, C3.ai는 Agentic AI 주식이 함께 반등하면서 5% 상승"
      },
      {
        "headline": "Most active S&P500 stocks in Friday's session",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=21ae4947413e462bde9ae3d01a07161031a4fd3833a2d40315510d88e2728fba",
        "datetime": 1786125902,
        "headlineKo": "금요일 세션에서 가장 활발한 S&P500 주식"
      },
      {
        "headline": "SpaceX, Doximity, Trade Desk, Rigetti, Coherent, and More Stocks That Explain Today’s Market",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cde8badb490d78c7f30e0f7a33ef272ec11bd87cc0d36b985f07390172e74850",
        "datetime": 1786125780,
        "headlineKo": "SpaceX, Doximity, Trade Desk, Rigetti, Coherent 및 오늘날 시장을 설명하는 기타 주식"
      }
    ],
    "_fetched_at": 1786140002.5891886,
    "_updated_label": "2026-08-08 07:01"
  },
  "QCOM": {
    "nextEarnings": {
      "date": "2026-11-03",
      "hour": "amc",
      "epsEstimate": 2.2987
    },
    "news": [
      {
        "headline": "The Toughest Questions AMD Faced On Its Latest Call",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6012cda4a6eace2f2d9baf8b6054e29a00a832dccf45c8d130aaa8d714bc9653",
        "datetime": 1786125529,
        "headlineKo": "AMD가 최근 전화 통화에서 직면한 가장 어려운 질문"
      },
      {
        "headline": "How To Earn 11% On NVDA Stock And Set A 30% Safety Net",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0062adb357e5332978c05b4e5b51a2b355c07c3a9d560170175d2a1083998d22",
        "datetime": 1786124670,
        "headlineKo": "NVDA 주식에서 11%를 벌고 30% 안전망을 설정하는 방법"
      },
      {
        "headline": "Can MU Stock Compound Its Way Higher?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d8ad9cb22ed7cabb93b64f2a636ab6a2a31f87786103b7cf4d0dcd921f6aa1e9",
        "datetime": 1786106845,
        "headlineKo": "MU 주식이 더 높아질 수 있습니까?"
      },
      {
        "headline": "What's Going On With NVIDIA Stock Friday?",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=62672d5370fa7616d1aad39fd3c921b723515464ae119d452449719743519db5",
        "datetime": 1786081093,
        "headlineKo": "NVIDIA 주식 금요일에 무슨 일이 일어나고 있나요?"
      },
      {
        "headline": "Earn 14% On MRVL Stock Now, Or Own It 60% Cheaper Later",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=394dc06703c81357537a403b57b313c16493c77f9209c06454024d7ea4a83ef3",
        "datetime": 1786067315,
        "headlineKo": "지금 MRVL 재고로 14%를 벌거나 나중에 60% 더 저렴하게 소유하세요"
      }
    ],
    "_fetched_at": 1786140002.5891886,
    "_updated_label": "2026-08-08 07:01"
  },
  "ARM": {
    "nextEarnings": {
      "date": "2026-11-04",
      "hour": "",
      "epsEstimate": 0.4688
    },
    "news": [
      {
        "headline": "SpaceX's influence ripples across markets: AlphaCheck",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f3d1d95413734be29db32b65f62eb4f426799dd1528802cf51709b390fd7d782",
        "datetime": 1786113725,
        "headlineKo": "SpaceX의 영향력은 시장 전반에 걸쳐 파급됩니다: AlphaCheck"
      },
      {
        "headline": "Arm Holdings: Earnings Surge Is On The Horizon",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=cdfee0ab1d2166a52adeba16b912976500a21749b73c2cf92cee9293ae60db01",
        "datetime": 1786098949,
        "headlineKo": "Arm Holdings: 수익 급증이 곧 다가옵니다"
      },
      {
        "headline": "AMD: Buy The Dip - Market Is Mispricing Its Supply Leverage",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=b6c0e20f791a8fefc10daa30a579f9ab3f7bd0a51b036b3374ac42872bcb74a4",
        "datetime": 1786094146,
        "headlineKo": "AMD: 딥 매수 - 시장이 공급 레버리지 가격을 잘못 책정하고 있습니다"
      },
      {
        "headline": "Arm: Buy The Dip",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=0150c53e9176ea1f3f7048ba7b4688db9abe2ad9bf1dd015f7f26c0166c1a250",
        "datetime": 1786093066,
        "headlineKo": "팔: 딥 구매"
      },
      {
        "headline": "Arm Holdings: Record Print, Walked-Down Royalties, And A 100x+ P/E Question Mark",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=c760fb02b70643c5096ef2179ba04ed7c40167ad4a26e763d98345e3841a2bca",
        "datetime": 1786086146,
        "headlineKo": "Arm Holdings: 기록 인쇄, 할인된 로열티 및 100배 이상의 P/E 물음표"
      }
    ],
    "_fetched_at": 1786140002.5891886,
    "_updated_label": "2026-08-08 07:01"
  },
  "MRVL": {
    "nextEarnings": {
      "date": "2026-08-27",
      "hour": "",
      "epsEstimate": 0.939
    },
    "news": [
      {
        "headline": "The Toughest Questions AMD Faced On Its Latest Call",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6012cda4a6eace2f2d9baf8b6054e29a00a832dccf45c8d130aaa8d714bc9653",
        "datetime": 1786125529,
        "headlineKo": "AMD가 최근 전화 통화에서 직면한 가장 어려운 질문"
      },
      {
        "headline": "How To Earn 11% On NVDA Stock And Set A 30% Safety Net",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0062adb357e5332978c05b4e5b51a2b355c07c3a9d560170175d2a1083998d22",
        "datetime": 1786124670,
        "headlineKo": "NVDA 주식에서 11%를 벌고 30% 안전망을 설정하는 방법"
      },
      {
        "headline": "Intel Announces Leadership Appointment to Strengthen Customer Engagement and Accelerate Growth",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b66823eae762a34189d264fc1662213e371d09d28ac062ed61c1d707818e4422",
        "datetime": 1786123800,
        "headlineKo": "인텔, 고객 참여 강화 및 성장 가속화를 위한 리더십 임명 발표"
      },
      {
        "headline": "Should You Buy NVIDIA Stock After Its 11% Rally in a Month?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9d7cc0b88372b8e284ed2c9167c4e67590963f00803e02580b643007bb21d922",
        "datetime": 1786117080,
        "headlineKo": "한 달 만에 11% 상승한 NVIDIA 주식을 매수해야 할까요?"
      },
      {
        "headline": "B. Riley Financial Q2 Earnings Call Highlights",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fcb9451b80008b9686cc7b14eaacea72e47244d9e908ba942fc2f291fab30e81",
        "datetime": 1786100636,
        "headlineKo": "B. Riley Financial 2분기 실적 발표 하이라이트"
      }
    ],
    "_fetched_at": 1786140002.5891886,
    "_updated_label": "2026-08-08 07:01"
  },
  "ASML": {
    "nextEarnings": {
      "date": "2026-10-14",
      "hour": "bmo",
      "epsEstimate": 10.1558
    },
    "news": [
      {
        "headline": "Forget Taiwan Semiconductor: 2 AI Semiconductor Equipment Stocks to Buy and Hold Instead",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5be3e09c6e109b7dedd0f474f1e1bf1716c794b43d38b0d7b79fa9182a493159",
        "datetime": 1786121400,
        "headlineKo": "대만 반도체는 잊어라: 대신 매수하고 보유해야 할 AI 반도체 장비 주식 2개"
      },
      {
        "headline": "Why Onto Innovation Is A Buy After Posting Q2 Results",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=9f1c33362107f81c88f56073b4d5af70d0fd30007ebab4e7f8ac693a015292f8",
        "datetime": 1786103923,
        "headlineKo": "2분기 결과 게시 후 Onto Innovation이 매수인 이유"
      },
      {
        "headline": "Chinese AI Chipmakers Poised to Gain From Beijing’s Tech Push",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cbc3cdd517e145a55084823794d55c15daa7298bef733eb6d4d7bc7bc185ffe0",
        "datetime": 1786073540,
        "headlineKo": "중국 AI 칩 제조업체, 베이징의 기술 추진으로 이익을 얻을 준비가 되어 있음"
      },
      {
        "headline": "PancakeSwap Expands Tokenized Equity Offerings with 10 New 'bStocks' on BNB Chain",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=92ef598f1f84b5c487d1279b09d191167e24a1d49d1d288ff760ba12d8116708",
        "datetime": 1786039920,
        "headlineKo": "PancakeSwap, BNB 체인의 10개의 새로운 'bStocks'로 토큰화된 주식 제공 확대"
      },
      {
        "headline": "Stock Market Today: Dow Slides 400 Points But Chip Firm Surges; Biotech IPO Craters 39% (Live Coverage)",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=44e4f9d493c5328bad91b339a22343fc93bd261098b2dd6a6940357336fd559a",
        "datetime": 1786038640,
        "headlineKo": "오늘의 주식 시장: 다우지수는 400포인트 하락했지만 칩 회사는 급등했습니다. 생명공학 IPO 크레이터 39% (실시간 보도)"
      }
    ],
    "_fetched_at": 1786140002.5891886,
    "_updated_label": "2026-08-08 07:01"
  },
  "LRCX": {
    "nextEarnings": {
      "date": "2026-10-20",
      "hour": "",
      "epsEstimate": 2.1446
    },
    "news": [
      {
        "headline": "Wall Street Analysts See Lam Research (LRCX) as a Buy: Should You Invest?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=378b5a2e2569e892ac8e74b74cbac54af784eb0679e4d4b6d45baaa6167cb15e",
        "datetime": 1786109404,
        "headlineKo": "월스트리트 분석가들은 Lam Research(LRCX)를 매수로 보고 있습니다: 투자해야 할까요?"
      },
      {
        "headline": "Why Onto Innovation Is A Buy After Posting Q2 Results",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=9f1c33362107f81c88f56073b4d5af70d0fd30007ebab4e7f8ac693a015292f8",
        "datetime": 1786103923,
        "headlineKo": "2분기 결과 게시 후 Onto Innovation이 매수인 이유"
      },
      {
        "headline": "Lam Research Stock Is Gaining Friday: What's Going On?",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=21973374c70c5217ef14ea3d697c153fb667a92a358adab8a796c91a8b47e2e1",
        "datetime": 1786103489,
        "headlineKo": "Lam Research 주식이 금요일에 상승하고 있습니다: 무슨 일이 일어나고 있나요?"
      },
      {
        "headline": "Tesla's $16.8 Billion Chip Bet Could Create Several New Winners",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0ca7dc87bb8bc44716c311d35ee4c3382eb09e258e25f522ba4af21ce3c2bd37",
        "datetime": 1786037559,
        "headlineKo": "Tesla의 168억 달러 칩 베팅으로 여러 새로운 승자가 탄생할 수 있음"
      },
      {
        "headline": "Accenture vs. Lam Research: A Comparison of Revenue Growth and Stability",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e1e46d9d50230faa6075c393e12a176dddd09fed88fbf022f6ca3bdbc80ff4cd",
        "datetime": 1786022101,
        "headlineKo": "Accenture와 Lam Research: 수익 성장과 안정성 비교"
      }
    ],
    "_fetched_at": 1786140002.5891886,
    "_updated_label": "2026-08-08 07:01"
  },
  "KLAC": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "",
      "epsEstimate": 1.1971
    },
    "news": [
      {
        "headline": "AI Boom: Top Stocks to Consider for Your Portfolio",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1794c3e68c5f23063efadb914902f9d9eb89981992ff2283b9a47fe204ac57df",
        "datetime": 1786123560,
        "headlineKo": "AI 붐: 포트폴리오에 고려해야 할 상위 주식"
      },
      {
        "headline": "Tesla-SpaceX Terafab Bet: 4 Chip Equipment Stocks That Could Benefit",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2d04ad8fcb1678c161cebaf09f0979893594edf7aed66c5ed905ef8acd4e9016",
        "datetime": 1786121700,
        "headlineKo": "Tesla-SpaceX Terafab 베팅: 이익을 얻을 수 있는 4가지 칩 장비 주식"
      },
      {
        "headline": "Why Onto Innovation Is A Buy After Posting Q2 Results",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=9f1c33362107f81c88f56073b4d5af70d0fd30007ebab4e7f8ac693a015292f8",
        "datetime": 1786103923,
        "headlineKo": "2분기 결과 게시 후 Onto Innovation이 매수인 이유"
      },
      {
        "headline": "KLA Stock Gains Amid Broad Semiconductor Rally, AI Demand",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=f9dae60e60c79976809f86d5a3fa133205242187a21b601ef1d398bb6aa3430d",
        "datetime": 1786101451,
        "headlineKo": "광범위한 반도체 랠리, AI 수요 속에서 KLA 주가 상승"
      },
      {
        "headline": "Chip Stocks Find Buyers After Earnings Shock Shakes Out AI Trade",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=8e7fbc035dd720e744a130949fa23f87fbc91716d85b7b9fb7693b77133d3b8e",
        "datetime": 1786098374,
        "headlineKo": "칩 주식은 수익 충격으로 AI 거래를 뒤흔든 후 구매자를 찾습니다."
      }
    ],
    "_fetched_at": 1786140002.5891886,
    "_updated_label": "2026-08-08 07:02"
  },
  "SNDK": {
    "nextEarnings": {
      "date": "2026-11-04",
      "hour": "",
      "epsEstimate": 41.473
    },
    "news": [
      {
        "headline": "Micron Stock Falls After Citi Slashes Price Target on Memory Risks",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6762210a53d75dd98a6ce7ddc2238e427e68f8315b4df33e045918ea56b7a91d",
        "datetime": 1786132293,
        "headlineKo": "Citi가 메모리 위험에 대한 가격 목표를 인하한 후 Micron 주가 하락"
      },
      {
        "headline": "Stock Market Rally Powers Ahead; SpaceX, Palantir, Sandisk Are Key Earnings Movers: Weekly Review",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4e2b8a7d772c899e7acccc9fd973f3f3a5b2ae5a7714cb98fce1f1948962fa7a",
        "datetime": 1786120507,
        "headlineKo": "주식시장 랠리가 앞서고 있습니다. SpaceX, Palantir, Sandisk가 주요 수익 원동력입니다: 주간 검토"
      },
      {
        "headline": "SK Hynix Drops 5% After Approving $38B in New Memory Fabs; Seagate Falls 7%, Micron Barely Dips",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f15b2c9c517282b7ca8cd48aadad37ef65316651a458f780aaf022d1e5849d24",
        "datetime": 1786120282,
        "headlineKo": "SK하이닉스, 380억 달러 신규 메모리 공장 승인 후 5% 하락; Seagate 하락폭 7%, Micron 하락폭 거의 없음"
      },
      {
        "headline": "Tech Stocks Shake Off Another Memory Stock Slide",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=794c85e8ce3333c7b039df597c6b9907d053f8d95020607b484612b75c4a7cf2",
        "datetime": 1786117650,
        "headlineKo": "기술주, 또 다른 메모리 주식 슬라이드를 흔들다"
      },
      {
        "headline": "What's going on in today's session: S&P500 gap up and gap down stocks",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=ba7e0c36628e3e622f779f9a6b4fcefb13ededca266f41f5382d1d7a360c7967",
        "datetime": 1786113301,
        "headlineKo": "오늘 세션의 내용: S&P500 주식 갭 상승 및 갭 하락"
      }
    ],
    "_fetched_at": 1786140002.5891886,
    "_updated_label": "2026-08-08 07:02"
  },
  "WDC": {
    "nextEarnings": {
      "date": "2026-10-28",
      "hour": "",
      "epsEstimate": 3.7282
    },
    "news": [
      {
        "headline": "Stay informed with the top movers within the S&P500 index on Friday.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=97cc30b60f13c7af214f0c0afb17997cc515ad12a36ad63fdf4d3ec954ca3f5c",
        "datetime": 1786129501,
        "headlineKo": "금요일 S&P500 지수 내 최고 변동 항목에 대한 정보를 받아보세요."
      },
      {
        "headline": "Top S&P500 movers in Friday's session",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=9bdba43fcab22b2cbe6b2e92788d4e69dd55e6b163385f9dbbc531c0004beafd",
        "datetime": 1786120501,
        "headlineKo": "금요일 세션의 S&P500 상위 변동 항목"
      },
      {
        "headline": "Tech Stocks Shake Off Another Memory Stock Slide",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=794c85e8ce3333c7b039df597c6b9907d053f8d95020607b484612b75c4a7cf2",
        "datetime": 1786117650,
        "headlineKo": "기술주, 또 다른 메모리 주식 슬라이드를 흔들다"
      },
      {
        "headline": "What's going on in today's session: S&P500 gap up and gap down stocks",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=ba7e0c36628e3e622f779f9a6b4fcefb13ededca266f41f5382d1d7a360c7967",
        "datetime": 1786113301,
        "headlineKo": "오늘 세션의 내용: S&P500 주식 갭 상승 및 갭 하락"
      },
      {
        "headline": "Chinese Buying Lifts Gold And Silver From Technical Support; Jobs Report Shocker And Iran Hopium Trigger Aggressive Stock Buying",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=c25f97b83f1b1f23450edbec1c68702b807183120e48fa29b7b03647a60e3ffb",
        "datetime": 1786110528,
        "headlineKo": "중국 구매로 인해 기술 지원에서 금과 은이 상승; 잡스 보고서는 충격적이며 이란 호피움은 공격적인 주식 매입을 촉발했습니다"
      }
    ],
    "_fetched_at": 1786140002.5891886,
    "_updated_label": "2026-08-08 07:02"
  }
};
