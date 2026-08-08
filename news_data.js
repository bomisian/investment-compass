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
        "headline": "Nvidia, Micron or Broadcom: What Would Raymond Dalio Do?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=91aca5cb4998ce0bff81500fe9630d528ab91e5fc21132eec54717361dc3d2fe",
        "datetime": 1786210239,
        "headlineKo": "Nvidia, Micron 또는 Broadcom: Raymond Dalio는 무엇을 할까요?"
      },
      {
        "headline": "Why Doximity Stock Skyrocketed on Friday",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=99b2c080cb92453447950becd87eedcd88dde499cefe1e9ba8eed2dc11303ce4",
        "datetime": 1786210017,
        "headlineKo": "금요일에 Doximity 주가가 급등한 이유"
      },
      {
        "headline": "My Top Dividend Stock to Buy in August (and It's Not Even Close)",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c563fdd2ad709da00a039737d8df8015f001f1e57b66257445a515bcb63ba73d",
        "datetime": 1786209900,
        "headlineKo": "8월에 구매할 나의 최고 배당금 주식(그리고 아직 마감되지도 않았습니다)"
      },
      {
        "headline": "Nebius Is Worth 55 Times Its Revenue. What Does That Price Assume?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ee798e3314a60b1249ea1443723f25830905cdacbe12dc6c57f547a1c5a41ae7",
        "datetime": 1786209120,
        "headlineKo": "Nebius는 수익의 55배 가치가 있습니다. 그 가격은 무엇을 가정합니까?"
      },
      {
        "headline": "Warren Buffett's Successor, Greg Abel, Just Ended Berkshire Hathaway's 14-Quarter Selling Streak. Is This the Screaming Buy Signal Investors Have Been Waiting For?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7726a84761bf3c33b1465648d923580322917acda6c13c3977ac6a1cc923fe27",
        "datetime": 1786209001,
        "headlineKo": "워렌 버핏의 후계자 그렉 아벨이 버크셔 해서웨이의 14분기 연속 매도세를 막 마감했습니다. 이것이 투자자들이 기다려온 비명을 지르는 매수 신호입니까?"
      }
    ],
    "_fetched_at": 1786215601.7191927,
    "_updated_label": "2026-08-09 04:01"
  },
  "AAPL": {
    "nextEarnings": {
      "date": "2026-10-28",
      "hour": "amc",
      "epsEstimate": 2.0468
    },
    "news": [
      {
        "headline": "VGT Puts 39 Cents of Every Dollar Into Just 3 Stocks. The Pairing That Fixes It Without Selling",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=99fbe6d8449066c60b3d6d2f4916ce53c7d31ec7193caf2eecb51422905bdcec",
        "datetime": 1786208451,
        "headlineKo": "VGT는 단 3개의 주식에 1달러당 39센트를 투자합니다. 팔리지 않고 고쳐주는 페어링"
      },
      {
        "headline": "Berkshire Hathaway Just Did Something It Hasn’t Done in More Than 3 Years",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=89e2c3f0c457381f0bd3a0e7b716ed357a556ea7476f982f6635fb8e2f837718",
        "datetime": 1786206425,
        "headlineKo": "버크셔 해서웨이는 지난 3년 동안 하지 않았던 일을 해냈습니다."
      },
      {
        "headline": "Bank of America revamps Apple stock price target after earnings",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=42540b87598f10b8a98690becf4501e008718fd09c5684b343526039816cc9e2",
        "datetime": 1786202220,
        "headlineKo": "Bank of America, 실적 발표 후 애플 주가 목표 상향 조정"
      },
      {
        "headline": "Apple says Mac users in China can connect to Alibaba's Qwen AI service",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d811387e80dd8a4b962ddfd2f69bff3db9595d680da58d436df84ee18df9e3dc",
        "datetime": 1786192498,
        "headlineKo": "Apple은 중국의 Mac 사용자가 Alibaba의 Qwen AI 서비스에 연결할 수 있다고 밝혔습니다."
      },
      {
        "headline": "Cisco, Tencent Headline Muted Earnings Week",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=92ebcf9e88eb5cc5530a414cce8df0a9c9e063c37e41df80756b63479a5d5bdc",
        "datetime": 1786186800,
        "headlineKo": "Cisco, Tencent 헤드라인 음소거 수익 주간"
      }
    ],
    "_fetched_at": 1786215601.7191927,
    "_updated_label": "2026-08-09 04:00"
  },
  "GOOGL": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "amc",
      "epsEstimate": 3.1009
    },
    "news": [
      {
        "headline": "Even Without Alphabet and Amazon, the S&P 500 Just Posted Its Biggest Earnings Beat Ever",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=11f586df9df61eb9d0db16c2ffc0a0fa9db76c0bec9a9639c43efd72834ff0bd",
        "datetime": 1786207123,
        "headlineKo": "알파벳과 아마존 없이도 S&P 500은 사상 최대 수익을 기록했습니다."
      },
      {
        "headline": "Berkshire Hathaway Just Did Something It Hasn’t Done in More Than 3 Years",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=89e2c3f0c457381f0bd3a0e7b716ed357a556ea7476f982f6635fb8e2f837718",
        "datetime": 1786206425,
        "headlineKo": "버크셔 해서웨이는 지난 3년 동안 하지 않았던 일을 해냈습니다."
      },
      {
        "headline": "Alphabet CEO Sundar Pichai Just Made a Decision That Could Move Nvidia and Broadcom Stock",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=03a07ae02dbfd9d3011f229c578b956544a5767eb16f2799de173d104dc3d6fd",
        "datetime": 1786204200,
        "headlineKo": "Alphabet CEO Sundar Pichai는 Nvidia와 Broadcom 주식을 움직일 수 있는 결정을 내렸습니다."
      },
      {
        "headline": "Google shutting down a popular feature after 10 years",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ba926417dda75ccff2631e711f1ce4a308e75e4fe8c9419388482255d298eb4d",
        "datetime": 1786203180,
        "headlineKo": "구글, 10년 만에 인기 기능 종료"
      },
      {
        "headline": "Berkshire Hathaway's new CEO Greg Abel spends a chunk of the company's massive cashpile",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=19998949b3e224b193082a5bbb7690a1767ea72a594e091ae06e971f04de332f",
        "datetime": 1786195772,
        "headlineKo": "버크셔 해서웨이의 새 CEO 그렉 아벨은 회사의 막대한 현금 더미를 지출합니다."
      }
    ],
    "_fetched_at": 1786215601.7191927,
    "_updated_label": "2026-08-09 04:00"
  },
  "MSFT": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "",
      "epsEstimate": 4.7263
    },
    "news": [
      {
        "headline": "VGT Puts 39 Cents of Every Dollar Into Just 3 Stocks. The Pairing That Fixes It Without Selling",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=99fbe6d8449066c60b3d6d2f4916ce53c7d31ec7193caf2eecb51422905bdcec",
        "datetime": 1786208451,
        "headlineKo": "VGT는 단 3개의 주식에 1달러당 39센트를 투자합니다. 팔리지 않고 고쳐주는 페어링"
      },
      {
        "headline": "AI is Hollowing Out Tech Sector Jobs: Oracle and Microsoft Help Push Layoff Rate to 20-Year High",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8c56a44792b584fc99698bee4a0bd3f85fe99bc2e1244b6ccd6dd88a75acc22b",
        "datetime": 1786203516,
        "headlineKo": "AI가 기술 부문 일자리를 비워내고 있습니다. Oracle과 Microsoft는 해고율을 20년 최고 수준으로 끌어올리는 데 도움을 주었습니다."
      },
      {
        "headline": "Cisco, Top Dow Jones Stock of 2026, Faces Crucial Test as Earnings Loom",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=045eb16df8a6d069e66c9f178c0b18009f9889f75a32dc178e892f16efba52ba",
        "datetime": 1786182894,
        "headlineKo": "시스코, 2026년 최고 다우존스 주식, 실적이 불투명해지면서 중요한 시험에 직면"
      },
      {
        "headline": "The AI Capex Waterfall Is Raining Future Dividends",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=2148a17570865a5320b3d6234e4aad136b5969c80e086c34aea2ca62969c3dff",
        "datetime": 1786176900,
        "headlineKo": "AI Capex Waterfall이 미래 배당금을 쏟아 붓고 있습니다."
      },
      {
        "headline": "How Chevron became the AI darling of Big Oil",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=93ffd51c2fff22f47955c981f24e20c6d9ad84c2497841d2e5b537c97f50b5e9",
        "datetime": 1786173060,
        "headlineKo": "Chevron이 Big Oil의 AI 사랑이 된 방법"
      }
    ],
    "_fetched_at": 1786215601.7191927,
    "_updated_label": "2026-08-09 04:00"
  },
  "AMZN": {
    "nextEarnings": {
      "date": "2026-10-28",
      "hour": "amc",
      "epsEstimate": 1.9445
    },
    "news": [
      {
        "headline": "Even Without Alphabet and Amazon, the S&P 500 Just Posted Its Biggest Earnings Beat Ever",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=11f586df9df61eb9d0db16c2ffc0a0fa9db76c0bec9a9639c43efd72834ff0bd",
        "datetime": 1786207123,
        "headlineKo": "알파벳과 아마존 없이도 S&P 500은 사상 최대 수익을 기록했습니다."
      },
      {
        "headline": "The Industry Builds Its Own Regulator",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=63170f680e8978fe34fb0bb85fbe97271336ca3f5804da366cc9b89cdd019144",
        "datetime": 1786201050,
        "headlineKo": "업계는 자체 규제 기관을 구축합니다."
      },
      {
        "headline": "Jeff Bezos' Amazon Just Raised Its AI Spending to $220 Billion for 2026. Here's What That Capex Hike Means for Investors.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c13a1fedb25117751a98436cf4c097801cda378841e1c16af078fc612471ba81",
        "datetime": 1786199700,
        "headlineKo": "Jeff Bezos의 Amazon은 2026년 AI 지출을 2,200억 달러로 늘렸습니다. Capex 인상이 투자자에게 의미하는 바는 다음과 같습니다."
      },
      {
        "headline": "eBay Slid This Past Month: Why a Leading Analyst Expects 32% Growth Ahead Anyway",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=92331812e559606e78b9eadd794f9095115a1270534be04c72f44b0b29bb9fd7",
        "datetime": 1786199459,
        "headlineKo": "지난 달 eBay 하락: 주요 분석가가 어쨌든 32% 성장을 예상하는 이유"
      },
      {
        "headline": "Amazon's Stock Just Soared 15%. Here's Why Now Is Just the Beginning.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=02010686f7ff6359768b8326043216a5a74de77d93c08d25ab97a594d5fb93d9",
        "datetime": 1786180800,
        "headlineKo": "아마존 주가가 15% 급등했습니다. 지금이 시작일 뿐인 이유는 다음과 같습니다."
      }
    ],
    "_fetched_at": 1786215601.7191927,
    "_updated_label": "2026-08-09 04:00"
  },
  "TSM": {
    "nextEarnings": {
      "date": "2026-10-14",
      "hour": "amc",
      "epsEstimate": 28.8828
    },
    "news": [
      {
        "headline": "Tracking Ken Fisher's Fisher Asset Management Portfolio - Q2 2026 Update",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=3b927a14a18d57bb82a7fd5ecacd77c7fce9a6ee9183da869696a924d72adf22",
        "datetime": 1786140337,
        "headlineKo": "Ken Fisher의 Fisher 자산 관리 포트폴리오 추적 - 2026년 2분기 업데이트"
      },
      {
        "headline": "The AI Chip Trade Is Getting Bigger — and More Leveraged. Meet REX’s New 3X Bets",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=4f66e5d3b25cbdce637b628e61fc6c7c9cade1a84555ee9889592d88d6a4fea1",
        "datetime": 1786115683,
        "headlineKo": "AI 칩 거래가 점점 더 커지고 활용도가 높아지고 있습니다. REX의 새로운 3X Bets을 만나보세요"
      },
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
      }
    ],
    "_fetched_at": 1786215601.7191927,
    "_updated_label": "2026-08-09 04:01"
  },
  "AVGO": {
    "nextEarnings": {
      "date": "2026-09-02",
      "hour": "amc",
      "epsEstimate": 3.3012
    },
    "news": [
      {
        "headline": "Nvidia, Micron or Broadcom: What Would Raymond Dalio Do?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=91aca5cb4998ce0bff81500fe9630d528ab91e5fc21132eec54717361dc3d2fe",
        "datetime": 1786210239,
        "headlineKo": "Nvidia, Micron 또는 Broadcom: Raymond Dalio는 무엇을 할까요?"
      },
      {
        "headline": "Alphabet CEO Sundar Pichai Just Made a Decision That Could Move Nvidia and Broadcom Stock",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=03a07ae02dbfd9d3011f229c578b956544a5767eb16f2799de173d104dc3d6fd",
        "datetime": 1786204200,
        "headlineKo": "Alphabet CEO Sundar Pichai는 Nvidia와 Broadcom 주식을 움직일 수 있는 결정을 내렸습니다."
      },
      {
        "headline": "Does Broadcom (AVGO) Now Lead The Biggest AI Infrastructure Spend Outside GPUs?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7567d5a09a5fef7fd2b67b15e2e617789922980f91be6d8dc2596cb3737eca0b",
        "datetime": 1786198276,
        "headlineKo": "Broadcom(AVGO)이 이제 GPU 외부 지출 규모가 가장 큰 AI 인프라를 선도하고 있습니까?"
      },
      {
        "headline": "Broadcom Vs. Nvidia: The Real Challenger and Champion Story in Chips",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1e5ae2752ae901af3268b2a30c53dda6d9ba71d1b69b70bd6a004cddca52fb34",
        "datetime": 1786194604,
        "headlineKo": "브로드컴 대. Nvidia: 칩 분야의 진정한 도전자이자 챔피언 이야기"
      },
      {
        "headline": "Broadcom (NASDAQ:AVGO): A Fitting Pick for Affordable Growth Investors",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=65e70b2d11c447f08959473b14db44174ff12cc97c2af54fc29835188cb2ebfa",
        "datetime": 1786184439,
        "headlineKo": "Broadcom(NASDAQ:AVGO): 합리적인 성장 투자자를 위한 적합한 선택"
      }
    ],
    "_fetched_at": 1786215601.7191927,
    "_updated_label": "2026-08-09 04:01"
  },
  "META": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "amc",
      "epsEstimate": 7.1215
    },
    "news": [
      {
        "headline": "Does Broadcom (AVGO) Now Lead The Biggest AI Infrastructure Spend Outside GPUs?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7567d5a09a5fef7fd2b67b15e2e617789922980f91be6d8dc2596cb3737eca0b",
        "datetime": 1786198276,
        "headlineKo": "Broadcom(AVGO)이 이제 GPU 외부 지출 규모가 가장 큰 AI 인프라를 선도하고 있습니까?"
      },
      {
        "headline": "Advanced Micro Devices (AMD) Price Prediction: How Much a $5,000 Investment Could Be Worth by 2031",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=472c30143e27f764aa8b18f3bdadf9787317785fb717e894d06027778b9ef95a",
        "datetime": 1786194011,
        "headlineKo": "AMD(Advanced Micro Devices) 가격 예측: 2031년까지 5,000달러 투자의 가치는 얼마나 될까요?"
      },
      {
        "headline": "Cisco, Top Dow Jones Stock of 2026, Faces Crucial Test as Earnings Loom",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=045eb16df8a6d069e66c9f178c0b18009f9889f75a32dc178e892f16efba52ba",
        "datetime": 1786182894,
        "headlineKo": "시스코, 2026년 최고 다우존스 주식, 실적이 불투명해지면서 중요한 시험에 직면"
      },
      {
        "headline": "The AI Capex Waterfall Is Raining Future Dividends",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=2148a17570865a5320b3d6234e4aad136b5969c80e086c34aea2ca62969c3dff",
        "datetime": 1786176900,
        "headlineKo": "AI Capex Waterfall이 미래 배당금을 쏟아 붓고 있습니다."
      },
      {
        "headline": "7 Reasons Pershing Square (PS) Looks Pricey After Ackman Spotlighted AI Holdings",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7970c957bce208d31c52fe3422040b63d34def4eff702053a38699b6c0663b04",
        "datetime": 1786159168,
        "headlineKo": "Ackman이 AI Holdings를 주목한 후 Pershing Square(PS)가 비싸 보이는 7가지 이유"
      }
    ],
    "_fetched_at": 1786215601.7191927,
    "_updated_label": "2026-08-09 04:00"
  },
  "TSLA": {
    "nextEarnings": {
      "date": "2026-10-20",
      "hour": "amc",
      "epsEstimate": 0.4492
    },
    "news": [
      {
        "headline": "Rivian's make-or-break R2 midsize EV delivers: Road test",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d56a946910bb793ba85b560cdc2faf8af07406077e276b755d43db318e800525",
        "datetime": 1786199512,
        "headlineKo": "Rivian의 성패를 좌우할 R2 중형 EV는 다음을 제공합니다: 도로 테스트"
      },
      {
        "headline": "Tesla UK sales drop as craze for Chinese rivals surges",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3677b5647b0628c1a3b3b014cf88203ec71575cdad43380a5a3e5ffc2f6479e3",
        "datetime": 1786195414,
        "headlineKo": "중국 라이벌에 대한 열풍이 급증하면서 Tesla 영국 판매 감소"
      },
      {
        "headline": "What Rivian And Lucid's Latest Earnings Say About The EV Startup Race",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8466d0b357265c1603eb07ba96a2b9acf311371e92b8a12c1825dcf655617099",
        "datetime": 1786194000,
        "headlineKo": "Rivian과 Lucid의 최근 수입이 EV 스타트업 레이스에 대해 말하는 것"
      },
      {
        "headline": "SpaceX Just Picked Texas for a 2.5-Mile-Long Terafab and It Could Be the Largest Building on Earth",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5b937ee291c80ceb7243dbd051e1d11ebf968b28fe84033ca11ecc1954b2c691",
        "datetime": 1786193997,
        "headlineKo": "SpaceX는 2.5마일 길이의 테라팹을 위해 텍사스를 선택했으며 이는 지구상에서 가장 큰 건물이 될 수 있습니다."
      },
      {
        "headline": "Tesla eyes tax breaks for $10.1 billion solar manufacturing plant in Fort Bend County",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4486310c31459d5dcab68b41944f9663ab5f0a8df904b5249d24e6ad50548640",
        "datetime": 1786186800,
        "headlineKo": "Tesla는 Fort Bend County에 있는 101억 달러 규모의 태양광 제조 공장에 대한 세금 감면을 검토합니다."
      }
    ],
    "_fetched_at": 1786215601.7191927,
    "_updated_label": "2026-08-09 04:00"
  },
  "MU": {
    "nextEarnings": {
      "date": "2026-09-21",
      "hour": "amc",
      "epsEstimate": 32.2476
    },
    "news": [
      {
        "headline": "Nvidia, Micron or Broadcom: What Would Raymond Dalio Do?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=91aca5cb4998ce0bff81500fe9630d528ab91e5fc21132eec54717361dc3d2fe",
        "datetime": 1786210239,
        "headlineKo": "Nvidia, Micron 또는 Broadcom: Raymond Dalio는 무엇을 할까요?"
      },
      {
        "headline": "AI’s Biggest Opportunity by 2027: NVIDIA vs. Micron",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0214359f2efcb2f2aad79168155ae54e7165049fac366699b35a674e36096516",
        "datetime": 1786199400,
        "headlineKo": "2027년까지 AI의 가장 큰 기회: NVIDIA vs. Micron"
      },
      {
        "headline": "Forget the Artificial Intelligence (AI) Capex Bubble: SpaceX CEO Elon Musk Says the Memory Shortage Will Drive Costs Even Higher",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4d1bdb132e9db945184d5bebe71fd3f7c607059e0d182104f8ef8538be32bcf4",
        "datetime": 1786186200,
        "headlineKo": "인공 지능(AI) 투자 거품은 잊어라: SpaceX CEO Elon Musk는 메모리 부족으로 인해 비용이 더욱 높아질 것이라고 말했습니다."
      },
      {
        "headline": "Micron vs. Sandisk: Which Is the Better AI Memory Stock to Own for the Next 3 Years?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e3a9b6338f046c8d2e52ee5c215fcc8ffd6e0c1730434d4dabc39c1e49142a5d",
        "datetime": 1786183380,
        "headlineKo": "Micron vs. Sandisk: 향후 3년 동안 소유하기에 더 나은 AI 메모리 주식은 무엇입니까?"
      },
      {
        "headline": "Is Micron Stock Too Cheap to Ignore?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7935a107260dce5bb81f1abcb7744e118ee7ebac4812720b2c5e40519124bf42",
        "datetime": 1786180860,
        "headlineKo": "마이크론 주식은 무시하기에는 너무 저렴합니까?"
      }
    ],
    "_fetched_at": 1786215601.7191927,
    "_updated_label": "2026-08-09 04:01"
  },
  "AMD": {
    "nextEarnings": {
      "date": "2026-11-02",
      "hour": "amc",
      "epsEstimate": 1.8517
    },
    "news": [
      {
        "headline": "Is AMD Stock a Buy on the Dip as AI Revenue Surges?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3b7e7c384943e272c920bdd2f3c44898ab43fb2c23c07786aa122dea7506388f",
        "datetime": 1786200600,
        "headlineKo": "AI 수익 급증으로 인해 AMD 주식이 하락세를 타고 있습니까?"
      },
      {
        "headline": "Advanced Micro Devices (AMD) Price Prediction: How Much a $5,000 Investment Could Be Worth by 2031",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=472c30143e27f764aa8b18f3bdadf9787317785fb717e894d06027778b9ef95a",
        "datetime": 1786194011,
        "headlineKo": "AMD(Advanced Micro Devices) 가격 예측: 2031년까지 5,000달러 투자의 가치는 얼마나 될까요?"
      },
      {
        "headline": "Should You Buy Advanced Micro Devices (AMD) Stock After Its 12-Month Return of 200%?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7d6b5a6048b6ec0f42b833d816015dbb21a1beb75d20f656c020f82eea1395a5",
        "datetime": 1786190700,
        "headlineKo": "12개월 만에 200% 수익률을 달성한 AMD(Advanced Micro Devices) 주식을 매수해야 할까요?"
      },
      {
        "headline": "AMD's Data Center Business Is Skyrocketing. The Stock Is Falling. Here's Why.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=58d9108cdec3d92f6d2c41c3d4e0014bfefdc5e220b6be31ec905eea45dd9e68",
        "datetime": 1786184400,
        "headlineKo": "AMD의 데이터센터 사업이 폭발적으로 성장하고 있습니다. 주식이 하락하고 있습니다. 이유는 다음과 같습니다."
      },
      {
        "headline": "AMD: The Market Is Pricing In A Fantasy",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=3cbb5819c7ee438b577afe6a9628412853aac266f60691d07846692b284ed60b",
        "datetime": 1786182762,
        "headlineKo": "AMD: 시장은 환상 속에서 가격을 책정하고 있습니다"
      }
    ],
    "_fetched_at": 1786215601.7191927,
    "_updated_label": "2026-08-09 04:01"
  },
  "INTC": {
    "nextEarnings": {
      "date": "2026-10-21",
      "hour": "amc",
      "epsEstimate": 0.3936
    },
    "news": [
      {
        "headline": "Ron Paul: Trump’s New Policy Is ‘As Dangerous to Liberty and Prosperity’ as Mamdani’s",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=28c634bfcbd567cd5ece4e159fdd5d75d1962c1773e6e708e79c4e0ab0ddf342",
        "datetime": 1786197608,
        "headlineKo": "론 폴: 트럼프의 새로운 정책은 맘다니의 정책만큼 '자유와 번영에 위험하다'"
      },
      {
        "headline": "This Analyst On Wall Street Thinks The CPU Trade Is Overdone, Should You Sell ARM (ARM) Stock?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=23344fd2f9d17f5cddc02d91348e7233ad0d5fd55257e42e6bcc470c97a5023f",
        "datetime": 1786193733,
        "headlineKo": "월스트리트의 이 분석가는 CPU 거래가 과도하다고 생각합니다. ARM(ARM) 주식을 팔아야 할까요?"
      },
      {
        "headline": "What Does Intel (INTC) Gain From Its Texas Chip Facility Joint Venture?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=baf6fd986e5ab24950b3c5e1634aee35eee073d4f583b65101c3e0bfb1c64ed9",
        "datetime": 1786155071,
        "headlineKo": "Intel(INTC)은 텍사스 칩 시설 합작 투자를 통해 무엇을 얻습니까?"
      },
      {
        "headline": "Trump Administration Pledges Over $2 Billion for Battery, Critical-Minerals Firms to Cut China Reliance: 'We Want These...'",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=5b71dfac1de863b2209cb05f89c9b04377d2b0138d6243a78af153ba1283f956",
        "datetime": 1786151416,
        "headlineKo": "트럼프 행정부는 중국 의존도를 줄이기 위해 배터리, 핵심 광물 기업에 20억 달러 이상 지원 약속: '우리는 이것을 원합니다...'"
      },
      {
        "headline": "Intel Quashed Its Dividend in 2024. Now the Stock's Up 389% and Investors Want It Back.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c6288fadf5aeb7b3e2fd27973a4574bb402e12cb6f2a5ca1105a143af2d4c59b",
        "datetime": 1786143602,
        "headlineKo": "인텔은 2024년에 배당금을 중단했습니다. 이제 주가는 389% 상승했으며 투자자들은 이를 돌려받기를 원합니다."
      }
    ],
    "_fetched_at": 1786215601.7191927,
    "_updated_label": "2026-08-09 04:01"
  },
  "AMAT": {
    "nextEarnings": {
      "date": "2026-08-13",
      "hour": "amc",
      "epsEstimate": 3.462
    },
    "news": [
      {
        "headline": "KLA Corporation Has Had a Rough Month: A Wall Street Pro Sees 70% Upside Because of It",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=89ca6e2e995a653220dc70b384e9642a97ed71e683342ba137e8de67ff6c849a",
        "datetime": 1786190497,
        "headlineKo": "KLA Corporation은 힘든 한 달을 보냈습니다. 월스트리트 전문가는 이로 인해 70%의 상승 여력을 보았습니다."
      },
      {
        "headline": "Cisco, Tencent Headline Muted Earnings Week",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=92ebcf9e88eb5cc5530a414cce8df0a9c9e063c37e41df80756b63479a5d5bdc",
        "datetime": 1786186800,
        "headlineKo": "Cisco, Tencent 헤드라인 음소거 수익 주간"
      },
      {
        "headline": "Jim Cramer Names 5 Investing Themes and 13 Stocks to Buy for 2026",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7591081d099f58c7b7dee8c26d95bffffb959449b7425364d7387beeef4eb64a",
        "datetime": 1786180793,
        "headlineKo": "Jim Cramer는 2026년에 매수해야 할 5가지 투자 테마와 13가지 주식을 지정합니다."
      },
      {
        "headline": "Situational Awareness invested $500 million in chip startup Source Foundry",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9f4075162f60e6e3789b813b99f5ce96fb58dbedaf9219a7dfca2a8163e533e8",
        "datetime": 1786166605,
        "headlineKo": "Situational Awareness는 칩 스타트업 Source Foundry에 5억 달러를 투자했습니다."
      },
      {
        "headline": "Banks Lead a Bonus Boom",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=dd3ffa3ecd1662d6f216753773e9109808f00ab43bdaf395162b2ae539a32b11",
        "datetime": 1786146360,
        "headlineKo": "은행이 보너스 붐을 주도하다"
      }
    ],
    "_fetched_at": 1786215601.7191927,
    "_updated_label": "2026-08-09 04:01"
  },
  "QQQ": {
    "nextEarnings": null,
    "news": [
      {
        "headline": "OMAH: A 15% Distribution Rate From Buffett's Portfolio To Buy",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=eff10a4de6774df4870d9679fb61eb72192b194075b695973a1143ad5af0ceda",
        "datetime": 1786180500,
        "headlineKo": "OMAH: 버핏의 포트폴리오에서 구매까지 15%의 배분율"
      },
      {
        "headline": "Global Outlook Marred By Further Slide In Emerging Market Business Confidence",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=6b90afb5adf88b9c382b6c51a4983251496583c87746ece1ba80d60018821964",
        "datetime": 1786177800,
        "headlineKo": "신흥 시장 기업 신뢰도 하락으로 인해 글로벌 전망이 훼손됨"
      },
      {
        "headline": "Revisiting My Most Read Article: Revenge Of The Baby Boomers",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=f34c14c59019b86841e7c874227622d1ba4242ecfcceabc01dbc12e20f2fe174",
        "datetime": 1786177141,
        "headlineKo": "가장 많이 읽은 기사 다시보기: 베이비붐 세대의 복수"
      },
      {
        "headline": "The AI Capex Waterfall Is Raining Future Dividends",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=2148a17570865a5320b3d6234e4aad136b5969c80e086c34aea2ca62969c3dff",
        "datetime": 1786176900,
        "headlineKo": "AI Capex Waterfall이 미래 배당금을 쏟아 붓고 있습니다."
      },
      {
        "headline": "As America Runs Out Of Missiles, The Next CPI Print Is A Risk To Equities",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=3fd9c9d3dca54e51209ae772c74ebb81cc2c19bcba786c4687d09ad2b595e07e",
        "datetime": 1786176000,
        "headlineKo": "미국의 미사일이 고갈됨에 따라 다음 CPI 인쇄는 주식에 대한 위험입니다"
      }
    ],
    "_fetched_at": 1786215601.7191927,
    "_updated_label": "2026-08-09 04:00"
  },
  "SPY": {
    "nextEarnings": null,
    "news": [
      {
        "headline": "VOO Is About to Become the First $1 Trillion ETF, and SPY Holders Are Paying 3x More for the Same Index",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=dc47905ca194f67acca8957b5b1ca35befef1e26a94f5025d96cf10140dece50",
        "datetime": 1786212486,
        "headlineKo": "VOO는 최초의 1조 달러 규모 ETF가 될 예정이며, SPY 보유자는 동일한 지수에 대해 3배 더 많은 비용을 지불하고 있습니다."
      },
      {
        "headline": "OMAH: A 15% Distribution Rate From Buffett's Portfolio To Buy",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=eff10a4de6774df4870d9679fb61eb72192b194075b695973a1143ad5af0ceda",
        "datetime": 1786180500,
        "headlineKo": "OMAH: 버핏의 포트폴리오에서 구매까지 15%의 배분율"
      },
      {
        "headline": "Republic Services: A Good Quarter And More Attractive Valuation",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=db0cebe1ccf79606483489355085a7dea03c5dec08dd5c146963cd0ce5b2b09e",
        "datetime": 1786179317,
        "headlineKo": "Republic Services: 좋은 분기와 더욱 매력적인 가치 평가"
      },
      {
        "headline": "Global Outlook Marred By Further Slide In Emerging Market Business Confidence",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=6b90afb5adf88b9c382b6c51a4983251496583c87746ece1ba80d60018821964",
        "datetime": 1786177800,
        "headlineKo": "신흥 시장 기업 신뢰도 하락으로 인해 글로벌 전망이 훼손됨"
      },
      {
        "headline": "XSPI: Amplified Monthly Income Through Leveraged S&P 500 Exposure",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=4e459c6e5e4dbcb0cde422dbbb879777f3e5142d7ac602ed1bdc2f242db957dd",
        "datetime": 1786177800,
        "headlineKo": "XSPI: 레버리지 S&P 500 노출을 통해 월 소득 증폭"
      }
    ],
    "_fetched_at": 1786215601.7191927,
    "_updated_label": "2026-08-09 04:00"
  },
  "ORCL": {
    "nextEarnings": {
      "date": "2026-09-07",
      "hour": "",
      "epsEstimate": 1.7745
    },
    "news": [
      {
        "headline": "AI is Hollowing Out Tech Sector Jobs: Oracle and Microsoft Help Push Layoff Rate to 20-Year High",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8c56a44792b584fc99698bee4a0bd3f85fe99bc2e1244b6ccd6dd88a75acc22b",
        "datetime": 1786203516,
        "headlineKo": "AI가 기술 부문 일자리를 비워내고 있습니다. Oracle과 Microsoft는 해고율을 20년 최고 수준으로 끌어올리는 데 도움을 주었습니다."
      },
      {
        "headline": "Advanced Micro Devices (AMD) Price Prediction: How Much a $5,000 Investment Could Be Worth by 2031",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=472c30143e27f764aa8b18f3bdadf9787317785fb717e894d06027778b9ef95a",
        "datetime": 1786194011,
        "headlineKo": "AMD(Advanced Micro Devices) 가격 예측: 2031년까지 5,000달러 투자의 가치는 얼마나 될까요?"
      },
      {
        "headline": "The AI Capex Waterfall Is Raining Future Dividends",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=2148a17570865a5320b3d6234e4aad136b5969c80e086c34aea2ca62969c3dff",
        "datetime": 1786176900,
        "headlineKo": "AI Capex Waterfall이 미래 배당금을 쏟아 붓고 있습니다."
      },
      {
        "headline": "Oracle Surges: What's Driving the Sudden Rally",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2a486e7b2a8cadaa229c3ec2e260751846755671f8498eae340f34f610455b8b",
        "datetime": 1786138200,
        "headlineKo": "Oracle Surges: 갑작스러운 반등을 주도하는 요인"
      },
      {
        "headline": "AI theme has 'a long way to run': Strategist",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5f0a9e1cf2e197fdc03b734096c0148252c19aec629c495d9aa2da1c440126ee",
        "datetime": 1786135748,
        "headlineKo": "AI 테마는 '달릴 길이 멀다': 전략가"
      }
    ],
    "_fetched_at": 1786215601.7191927,
    "_updated_label": "2026-08-09 04:00"
  },
  "CRM": {
    "nextEarnings": {
      "date": "2026-08-26",
      "hour": "amc",
      "epsEstimate": 3.3057
    },
    "news": [
      {
        "headline": "Circle Internet Group vs. Salesforce: Which Technology Stock Is a Better Buy in 2026?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6bf950bb7fe68f780ddb3e464fb693a0e37e4852201cf19678b3b84c26df138e",
        "datetime": 1786139137,
        "headlineKo": "Circle Internet Group vs. Salesforce: 2026년에는 어느 기술 주식이 더 나은 매수인가요?"
      },
      {
        "headline": "Layoffs rock Salesforce in San Francisco’s as tech giant leans in to AI",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e20aa144796fa793435b8efd8a2aa28634958eb8b4eb9a5a84045fc295171202",
        "datetime": 1786130122,
        "headlineKo": "기술 대기업이 AI에 의지함에 따라 해고로 인해 샌프란시스코의 Salesforce가 흔들림"
      },
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
      }
    ],
    "_fetched_at": 1786215601.7191927,
    "_updated_label": "2026-08-09 04:00"
  },
  "PLTR": {
    "nextEarnings": {
      "date": "2026-11-02",
      "hour": "",
      "epsEstimate": 0.3782
    },
    "news": [
      {
        "headline": "Stock Market Week Ahead: Bullish Signals Amid 'Dirty' Volume",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=47a727c516e807157b4e059d81f60520c37aa8abb3f5f0b6e5201ab1dd1d2f4e",
        "datetime": 1786198855,
        "headlineKo": "주식 시장 주간 전망: 거래량 '더러움' 속에 강세 신호"
      },
      {
        "headline": "Palantir Technologies (NASDAQ:PLTR) Shows Accelerating Growth and Strong Fundamentals",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=b603e5dfb32c329521da7692ea8dc3bc9204b73c4c7817023f8642898ee4248f",
        "datetime": 1786191103,
        "headlineKo": "Palantir Technologies(NASDAQ:PLTR)는 성장 가속화와 강력한 기반을 보여줍니다."
      },
      {
        "headline": "Palantir (PLTR) Posted Record 93% Growth, Here’s Why Analysts Think It Won’t Last",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7dac0674b21e63e5ddf6f7b0550ec74c9f581e6f0a692f7e1e1baa01103ccf4d",
        "datetime": 1786189193,
        "headlineKo": "Palantir(PLTR)가 기록적인 93% 성장을 기록했습니다. 분석가들이 이것이 지속되지 않을 것이라고 생각하는 이유는 다음과 같습니다."
      },
      {
        "headline": "Palantir: The Market Finally Realizes Its Bear Case Makes No Sense",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=83e230fce0682b283e7f9002d8469c16e92e22c625d4607e5004f587e9b8f565",
        "datetime": 1786179571,
        "headlineKo": "Palantir: 시장은 마침내 하락세가 말도 안 된다는 것을 깨달았습니다."
      },
      {
        "headline": "Benzinga Bulls And Bears: Palantir, Marvell, AppLovin",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=d0f9c67598ffdbade8934d2501626965b8caaa3bd05f9a909949b5b01099fec8",
        "datetime": 1786177825,
        "headlineKo": "벤징가 황소와 곰: Palantir, Marvell, AppLovin"
      }
    ],
    "_fetched_at": 1786215601.7191927,
    "_updated_label": "2026-08-09 04:00"
  },
  "QCOM": {
    "nextEarnings": {
      "date": "2026-11-03",
      "hour": "amc",
      "epsEstimate": 2.2987
    },
    "news": [
      {
        "headline": "Qualcomm (QCOM) Q3 2026 Earnings Call Transcript",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7c44e386f450a4c148f9cfdae52ffe279080241975db544a0d3b188f0b977d97",
        "datetime": 1786147128,
        "headlineKo": "Qualcomm(QCOM) 2026년 3분기 실적 통화 녹취록"
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
      }
    ],
    "_fetched_at": 1786215601.7191927,
    "_updated_label": "2026-08-09 04:01"
  },
  "ARM": {
    "nextEarnings": {
      "date": "2026-11-04",
      "hour": "",
      "epsEstimate": 0.4688
    },
    "news": [
      {
        "headline": "This Analyst On Wall Street Thinks The CPU Trade Is Overdone, Should You Sell ARM (ARM) Stock?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=23344fd2f9d17f5cddc02d91348e7233ad0d5fd55257e42e6bcc470c97a5023f",
        "datetime": 1786193733,
        "headlineKo": "월스트리트의 이 분석가는 CPU 거래가 과도하다고 생각합니다. ARM(ARM) 주식을 팔아야 할까요?"
      },
      {
        "headline": "Arm Holdings: Capitalizing On The Agentic AI Beyond IP Licensing",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=7cb09a6eef437220fab18c5660e80e8caf94125bbd44dccae0267b581359bf2b",
        "datetime": 1786162672,
        "headlineKo": "Arm Holdings: IP 라이선스를 넘어 Agentic AI 활용"
      },
      {
        "headline": "Arm (ARM) Q1 2027 Earnings Call Transcript",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c7a671cf376f7cc02b1a7e0a59c945b63d1dd01ef4714ae8dccc2a4c730167b0",
        "datetime": 1786147127,
        "headlineKo": "Arm (ARM) 2027년 1분기 실적 통화 녹취록"
      },
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
      }
    ],
    "_fetched_at": 1786215601.7191927,
    "_updated_label": "2026-08-09 04:01"
  },
  "MRVL": {
    "nextEarnings": {
      "date": "2026-08-27",
      "hour": "",
      "epsEstimate": 0.939
    },
    "news": [
      {
        "headline": "Benzinga Bulls And Bears: Palantir, Marvell, AppLovin",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=d0f9c67598ffdbade8934d2501626965b8caaa3bd05f9a909949b5b01099fec8",
        "datetime": 1786177825,
        "headlineKo": "벤징가 황소와 곰: Palantir, Marvell, AppLovin"
      },
      {
        "headline": "Beyond NVIDIA and GPUs: The Next AI & Quantum Winners Leading 2026",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5c8bf475e3c3296d3921199524bd79c30b0e9d2af39cfd2aa236ff6c6d22a563",
        "datetime": 1786129200,
        "headlineKo": "NVIDIA와 GPU를 넘어서: 2026년을 이끄는 차세대 AI 및 양자 승자"
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
        "headline": "Intel Announces Leadership Appointment to Strengthen Customer Engagement and Accelerate Growth",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b66823eae762a34189d264fc1662213e371d09d28ac062ed61c1d707818e4422",
        "datetime": 1786123800,
        "headlineKo": "인텔, 고객 참여 강화 및 성장 가속화를 위한 리더십 임명 발표"
      }
    ],
    "_fetched_at": 1786215601.7191927,
    "_updated_label": "2026-08-09 04:01"
  },
  "ASML": {
    "nextEarnings": {
      "date": "2026-10-14",
      "hour": "bmo",
      "epsEstimate": 10.1558
    },
    "news": [
      {
        "headline": "Nucor, ASML Lead Five Stocks Near Buy Points Without This Big Risk",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8fed305c3a89920c105aa35b1077d63db7c53657569da944b973d5a04eb5d57f",
        "datetime": 1786190421,
        "headlineKo": "Nucor, ASML은 큰 위험 없이 매수 포인트에 가까운 5개 주식을 선도합니다."
      },
      {
        "headline": "Situational Awareness Reportedly Bet $400 Million on a $5 Billion Stealth Chip Startup— Weeks After the 'Most Catastrophic Hedge Fund Blowup' of the Year",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=778e192eb6da6db7d6bec77da519dd7dd05eef7a3574b07028f0ae14ecd33bee",
        "datetime": 1786180457,
        "headlineKo": "상황 인식을 통해 50억 달러 규모의 스텔스 칩 스타트업에 4억 달러를 베팅한 것으로 알려짐 - 올해 '가장 재앙적인 헤지 펀드 폭발'이 일어난 지 몇 주 후"
      },
      {
        "headline": "Situational Awareness invested $500 million in chip startup Source Foundry",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9f4075162f60e6e3789b813b99f5ce96fb58dbedaf9219a7dfca2a8163e533e8",
        "datetime": 1786166605,
        "headlineKo": "Situational Awareness는 칩 스타트업 Source Foundry에 5억 달러를 투자했습니다."
      },
      {
        "headline": "Tracking Ken Fisher's Fisher Asset Management Portfolio - Q2 2026 Update",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=3b927a14a18d57bb82a7fd5ecacd77c7fce9a6ee9183da869696a924d72adf22",
        "datetime": 1786140337,
        "headlineKo": "Ken Fisher의 Fisher 자산 관리 포트폴리오 추적 - 2026년 2분기 업데이트"
      },
      {
        "headline": "Forget Taiwan Semiconductor: 2 AI Semiconductor Equipment Stocks to Buy and Hold Instead",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5be3e09c6e109b7dedd0f474f1e1bf1716c794b43d38b0d7b79fa9182a493159",
        "datetime": 1786121400,
        "headlineKo": "대만 반도체는 잊어라: 대신 매수하고 보유해야 할 AI 반도체 장비 주식 2개"
      }
    ],
    "_fetched_at": 1786215601.7191927,
    "_updated_label": "2026-08-09 04:01"
  },
  "LRCX": {
    "nextEarnings": {
      "date": "2026-10-20",
      "hour": "",
      "epsEstimate": 2.1446
    },
    "news": [
      {
        "headline": "KLA Corporation Has Had a Rough Month: A Wall Street Pro Sees 70% Upside Because of It",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=89ca6e2e995a653220dc70b384e9642a97ed71e683342ba137e8de67ff6c849a",
        "datetime": 1786190497,
        "headlineKo": "KLA Corporation은 힘든 한 달을 보냈습니다. 월스트리트 전문가는 이로 인해 70%의 상승 여력을 보았습니다."
      },
      {
        "headline": "Jim Cramer Names 5 Investing Themes and 13 Stocks to Buy for 2026",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7591081d099f58c7b7dee8c26d95bffffb959449b7425364d7387beeef4eb64a",
        "datetime": 1786180793,
        "headlineKo": "Jim Cramer는 2026년에 매수해야 할 5가지 투자 테마와 13가지 주식을 지정합니다."
      },
      {
        "headline": "Lam Research (LRCX) Q4 2026 Earnings Call Transcript",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e1a6b8cb7b6800f3681adbada1e760e93c95643bb9a9b9eaa6dd65e1d9460da4",
        "datetime": 1786147127,
        "headlineKo": "Lam Research(LRCX) 2026년 4분기 실적 통화 기록"
      },
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
      }
    ],
    "_fetched_at": 1786215601.7191927,
    "_updated_label": "2026-08-09 04:01"
  },
  "KLAC": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "",
      "epsEstimate": 1.1971
    },
    "news": [
      {
        "headline": "KLA Corporation Has Had a Rough Month: A Wall Street Pro Sees 70% Upside Because of It",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=89ca6e2e995a653220dc70b384e9642a97ed71e683342ba137e8de67ff6c849a",
        "datetime": 1786190497,
        "headlineKo": "KLA Corporation은 힘든 한 달을 보냈습니다. 월스트리트 전문가는 이로 인해 70%의 상승 여력을 보았습니다."
      },
      {
        "headline": "Dividend Champion, Contender, And Challenger Highlights: Week Of August 9",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=af72a397d825898b459a1a054ad11e152f22a3d67f610472c2aab599efe41d41",
        "datetime": 1786125278,
        "headlineKo": "배당 챔피언, 경쟁자, 도전자 하이라이트: 8월 9일 주"
      },
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
        "headline": "Stocks Supported as Fed Rate Hike Fears Ease",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=57362663cfb7334a6a146894a20564ff8c11ac4c799d2dfdbfc38d94a4b74d75",
        "datetime": 1786117375,
        "headlineKo": "연준 금리 인상 우려 완화로 지지받는 주식"
      }
    ],
    "_fetched_at": 1786215601.7191927,
    "_updated_label": "2026-08-09 04:01"
  },
  "SNDK": {
    "nextEarnings": {
      "date": "2026-11-04",
      "hour": "",
      "epsEstimate": 41.473
    },
    "news": [
      {
        "headline": "What Sent Sandisk Shares Tumbling Nearly 20% Last Month",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=30fc74ac6ca74d1c127c3e350b82855c04bb97cca485b71c25bc152aa896518a",
        "datetime": 1786201500,
        "headlineKo": "지난 달 Sandisk 주가가 거의 20% 폭락한 이유"
      },
      {
        "headline": "SanDisk CEO David Goeckeler Says Its Biggest Customers Aren't Talking Prices Anymore as Business Turns 'Highly Strategic'",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=70d8c7bbb79c2f64e6bb32683952226ee550455291af3012fdb79d803c7814bd",
        "datetime": 1786195816,
        "headlineKo": "SanDisk CEO David Goeckeler는 비즈니스가 '매우 전략적'으로 전환함에 따라 최대 고객이 더 이상 가격에 대해 이야기하지 않는다고 말했습니다."
      },
      {
        "headline": "Micron vs. Sandisk: Which Is the Better AI Memory Stock to Own for the Next 3 Years?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e3a9b6338f046c8d2e52ee5c215fcc8ffd6e0c1730434d4dabc39c1e49142a5d",
        "datetime": 1786183380,
        "headlineKo": "Micron vs. Sandisk: 향후 3년 동안 소유하기에 더 나은 AI 메모리 주식은 무엇입니까?"
      },
      {
        "headline": "FOMO Vs. The Earnings Bar",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=e29d27473468d2f4c5f41a80fbebce1f54c42b02dd95d2452df29a6d7b935e75",
        "datetime": 1786164600,
        "headlineKo": "FOMO 대. 수익 표시줄"
      },
      {
        "headline": "What Does Sandisk (SNDK) Mean For AI Storage With Its New QLC Flash?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=dbdc48a2dca325cf0c62fc6e38502498f372e9902448902228a2708d17eb799d",
        "datetime": 1786159090,
        "headlineKo": "Sandisk(SNDK)가 새로운 QLC 플래시를 탑재한 AI 스토리지에 어떤 의미가 있습니까?"
      }
    ],
    "_fetched_at": 1786215601.7191927,
    "_updated_label": "2026-08-09 04:01"
  },
  "WDC": {
    "nextEarnings": {
      "date": "2026-10-28",
      "hour": "",
      "epsEstimate": 3.7282
    },
    "news": [
      {
        "headline": "Western Digital: Watch For Technological Threats Following Post-Earnings Sell-Off",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=3dfb870d8082465b095a3f78637a1554efd6427de29abcaf9a6b4edd0b9d0afd",
        "datetime": 1786183887,
        "headlineKo": "Western Digital: 실적 하락 이후 기술적 위협에 주의하세요"
      },
      {
        "headline": "Benzinga Bulls And Bears: Palantir, Marvell, AppLovin",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=d0f9c67598ffdbade8934d2501626965b8caaa3bd05f9a909949b5b01099fec8",
        "datetime": 1786177825,
        "headlineKo": "벤징가 황소와 곰: Palantir, Marvell, AppLovin"
      },
      {
        "headline": "Western Digital Says AI Customers Are Already Negotiating Storage Deals Through 2031: 'Visibility Remains Very Strong'",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a1e24b8dd253a4be9a1eb143b60072f55719194268d4dcc7357c894b960e658b",
        "datetime": 1786156217,
        "headlineKo": "Western Digital은 AI 고객이 이미 2031년까지 스토리지 거래를 협상하고 있다고 말합니다: '가시성은 여전히 ​​매우 강력합니다'"
      },
      {
        "headline": "BofA resets its Western Digital target after mixed signal",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0761de0bf3ec77026ad4569b41d7d986f640b32a9548e918e1309fac534c0d61",
        "datetime": 1786151820,
        "headlineKo": "BofA는 신호가 혼합된 후 Western Digital 목표를 재설정합니다."
      },
      {
        "headline": "A Volatile Week for Tech Revealed New Stock Narratives—and 1 Bargain",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d7d6e1791dae16849d7a78912aef2337af692776aaf17f5e5434e466365ad7fe",
        "datetime": 1786136700,
        "headlineKo": "기술의 변동성이 큰 주간에 새로운 주식 이야기가 공개되고 1가지 할인 혜택이 제공됩니다."
      }
    ],
    "_fetched_at": 1786215601.7191927,
    "_updated_label": "2026-08-09 04:02"
  }
};
