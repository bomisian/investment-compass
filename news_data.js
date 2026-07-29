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
        "headline": "Nvidia partner ChipAgents raises $60 million to accelerate chip design with AI agents",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8a471147c0c2f84f2ba6588f421cdf34f35b225efcf48c397cc8eb9975c1dfb7",
        "datetime": 1785325793
      },
      {
        "headline": "If SpaceX Stock Falls Below $100, One Analyst Shares This Warning",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8f4bbd53d0db8d166b342f2e44421f7cdd4a8010d60fd6bb8cb30a980feeed31",
        "datetime": 1785325500
      },
      {
        "headline": "Energy Transfer Just Raised Its Dividend for the 19th Straight Quarter. Time to Buy the 6.8% Yield?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6c8fa22ff6d750f12b0cd6d50ec8c9c1f2788d0efc6f34bc61580587624b9370",
        "datetime": 1785324900
      },
      {
        "headline": "Prediction: Amazon's Earnings Report Shows That AWS Growth Accelerates",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a5aa88ec8e2e505ccd8cd58596f8db72be62fb27d99ae3f03d81d9a48066a0e7",
        "datetime": 1785324660
      },
      {
        "headline": "Want $100 in Super-Safe Quarterly Dividend Income? Invest $5,635 Into the Following 2 Ultra-High-Yield Stocks.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ef766caf514af0249b2b378e495e6d3307c8f5fe59b51578ce2e4dcb9ac0472e",
        "datetime": 1785324360
      }
    ],
    "_fetched_at": 1785330019.8990862,
    "_updated_label": "2026-07-29 22:01"
  },
  "AAPL": {
    "nextEarnings": {
      "date": "2026-07-30",
      "hour": "amc",
      "epsEstimate": 1.9271
    },
    "news": [
      {
        "headline": "Apple to report Q3 earnings following price hikes on Macs, iPads",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a1f34ff959399dc53d8311677af9ef87cfb4d1e5b607246a44f729ebf58ffdd4",
        "datetime": 1785325966
      },
      {
        "headline": "How much cash do you need invested in 2026 to completely live off dividends? Probably less than you think",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=66181e6b480d97ef2f7b10128f293990437e8fa063692b4ea62cbeb3d7141dea",
        "datetime": 1785323700
      },
      {
        "headline": "Explainer-What are credit default swaps and why are they spooking AI investors?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1e716cad466ca25b3653f746ed8577388d551c57ada3d96a2b894bfd9a968858",
        "datetime": 1785323022
      },
      {
        "headline": "SKHY, MU, Samsung's Memory Technology Lead Over China’s CXMT Unlikely To Narrow Soon, Says Futurum Analyst",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=061f4d47eb050cce3c0ff8a2f73ff45db8bec35b871fdb8d5423a694cee75dd8",
        "datetime": 1785322262
      },
      {
        "headline": "Social Buzz: Wallstreetbets Stocks Mostly Higher Pre-Bell Wednesday; Bloom Energy, Seagate Technology to Advance",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5a6b761ee2029b52b751357046b1fff353955b4e54ef7cc9e0ef097d604a1ab5",
        "datetime": 1785321514
      }
    ],
    "_fetched_at": 1785330019.8990862,
    "_updated_label": "2026-07-29 22:01"
  },
  "GOOGL": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "amc",
      "epsEstimate": 3.0988
    },
    "news": [
      {
        "headline": "AI Stock Divergence: Value and Relative Strength Winners Emerge Amid Sector Pullback",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=a957c52ee8726bbc16ae5be044ad8eb45188892c9f97e3b5395e8d70416764a2",
        "datetime": 1785328552
      },
      {
        "headline": "Amazon Q2 earnings to put spotlight on AWS growth amid AI spending",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1eeafb25415dcb601975484ae9a2f7d6aa4ef772c75d208b7c2b0bb8bfade839",
        "datetime": 1785326182
      },
      {
        "headline": "Apple to report Q3 earnings following price hikes on Macs, iPads",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a1f34ff959399dc53d8311677af9ef87cfb4d1e5b607246a44f729ebf58ffdd4",
        "datetime": 1785325966
      },
      {
        "headline": "Laureate Education Accelerates AI-Powered Learning in Latin America with Google Cloud, Powered by Gemini Enterprise and Gemini for Education",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6904038bc36aa3269e18046e8faad7e44bee69fa5a3f9d336187ec236492d27b",
        "datetime": 1785324600
      },
      {
        "headline": "Only 2 \"Magnificent Seven\" Stocks Are Beating the Market This Year. What's Going On?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=90882aee290fea8f9f2c69ed11bc2cc59c77f7e686eac2dced6fb4f7d7dd4815",
        "datetime": 1785321300
      }
    ],
    "_fetched_at": 1785330019.8990862,
    "_updated_label": "2026-07-29 22:00"
  },
  "MSFT": {
    "nextEarnings": {
      "date": "2026-07-29",
      "hour": "amc",
      "epsEstimate": 4.3274
    },
    "news": [
      {
        "headline": "Watchdog investigating whether Microsoft misled customers on subscription costs",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=489b236664b16939a1483ad0544ddca4159a09b5cd6e7dccca044b303526c3b9",
        "datetime": 1785325349
      },
      {
        "headline": "How much cash do you need invested in 2026 to completely live off dividends? Probably less than you think",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=66181e6b480d97ef2f7b10128f293990437e8fa063692b4ea62cbeb3d7141dea",
        "datetime": 1785323700
      },
      {
        "headline": "Fed On Deck, Tech Bottom Steadies Wall Street Pre-Bell; Asia, Europe Off",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cd9873b73d4749974456d29e57d61bbec802f698ad941fa40d055e6ffa7d1f17",
        "datetime": 1785323568
      },
      {
        "headline": "AI Data Center Turbines, Backlogged For Years, Are Suffering Early Deaths. Here's Why.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1db65f7c17ccb7fa4688902cf09d0ed80a9aaa64b02d31884e8a8fd6d5f7422e",
        "datetime": 1785322835
      },
      {
        "headline": "DATA Communications Management Corp. to Announce Second Quarter 2026 Results on August 10, 2026",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d124720c7cde9daef879ab4a53280571b83c7dca311080830c0d56d5ec9b6ec7",
        "datetime": 1785322800
      }
    ],
    "_fetched_at": 1785330019.8990862,
    "_updated_label": "2026-07-29 22:00"
  },
  "AMZN": {
    "nextEarnings": {
      "date": "2026-07-30",
      "hour": "amc",
      "epsEstimate": 1.8556
    },
    "news": [
      {
        "headline": "Amazon Q2 earnings to put spotlight on AWS growth amid AI spending",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1eeafb25415dcb601975484ae9a2f7d6aa4ef772c75d208b7c2b0bb8bfade839",
        "datetime": 1785326182
      },
      {
        "headline": "Prediction: Amazon's Earnings Report Shows That AWS Growth Accelerates",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a5aa88ec8e2e505ccd8cd58596f8db72be62fb27d99ae3f03d81d9a48066a0e7",
        "datetime": 1785324660
      },
      {
        "headline": "AI Data Center Turbines, Backlogged For Years, Are Suffering Early Deaths. Here's Why.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1db65f7c17ccb7fa4688902cf09d0ed80a9aaa64b02d31884e8a8fd6d5f7422e",
        "datetime": 1785322835
      },
      {
        "headline": "Only 2 \"Magnificent Seven\" Stocks Are Beating the Market This Year. What's Going On?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=90882aee290fea8f9f2c69ed11bc2cc59c77f7e686eac2dced6fb4f7d7dd4815",
        "datetime": 1785321300
      },
      {
        "headline": "Elon Musk’s new 5-year warning to Americans: AI will beat human brains by 2032 (then go wild). Get rich or get crushed?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b2be12adea72e565e7e4cf3921439bdd9740f5449a61e8d15931571f60514c87",
        "datetime": 1785321000
      }
    ],
    "_fetched_at": 1785330019.8990862,
    "_updated_label": "2026-07-29 22:00"
  },
  "TSM": {
    "nextEarnings": {
      "date": "2026-10-14",
      "hour": "amc",
      "epsEstimate": 28.6598
    },
    "news": [
      {
        "headline": "Chips Sell First, Ask Questions Later - And SK Hynix Just Handed Them the Answer",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=2dd0609fece9b7df7d96e884291a99b4db8c8f2618b80ae5cd0c2bffda101783",
        "datetime": 1785316364
      },
      {
        "headline": "Intel Vs. TSMC: How CoWoS Packaging Constraints Create Opportunity For Intel Foundry",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=f2f93c4d8533a256a289879a12f0d662bf46804f344ef38fcd75f1ed247567a2",
        "datetime": 1785263112
      },
      {
        "headline": "AEF: Strong Results, Still Trading At A Deep Discount, But I'll Pass",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=f1a0bbbc4c12a6e3de78add258f23827e412bfe0211d8a8ff97bd86888a589c8",
        "datetime": 1785250764
      },
      {
        "headline": "6 Catalysts That Might Pop The AI Bubble",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=e252009570e04de8fda282c8ee6707568119d13c5a4c3828c86fc93634033727",
        "datetime": 1785244247
      },
      {
        "headline": "Nvidia: The Trade Of The Decade Has Arrived",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=6a770f8371f5d1792c8a5bf442c987998e49c47caaab8b277987a6f4f92b7811",
        "datetime": 1785241399
      }
    ],
    "_fetched_at": 1785330019.8990862,
    "_updated_label": "2026-07-29 22:01"
  },
  "AVGO": {
    "nextEarnings": {
      "date": "2026-09-02",
      "hour": "amc",
      "epsEstimate": 3.3012
    },
    "news": [
      {
        "headline": "Broadcom (AVGO): A Quality Stock for Buy-and-Hold Investors",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=8157d636a75e445ff6fc17057b0d8481deb06a68d3048f7f8406d1cf9fc2146b",
        "datetime": 1785327631
      },
      {
        "headline": "Only 2 \"Magnificent Seven\" Stocks Are Beating the Market This Year. What's Going On?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=90882aee290fea8f9f2c69ed11bc2cc59c77f7e686eac2dced6fb4f7d7dd4815",
        "datetime": 1785321300
      },
      {
        "headline": "Prediction: 3 Unstoppable Artificial Intelligence (AI) Stocks That Will Join the $2 Trillion Club by 2027 (Hint: Not SpaceX)",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=83941e2b5e8eefdd88ab3571b1aab42c49bca18422ec6e3540b9d70c3a5cc30d",
        "datetime": 1785317700
      },
      {
        "headline": "AI Boom Spurs Insider Selling by Nvidia, CoreWeave Billionaires",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d54917c46297de545bf1c83039a6021456a950e88e9510b0c22ac135d6fe1e9a",
        "datetime": 1785317401
      },
      {
        "headline": "3 Stocks I'm Buying Over SpaceX Right Now",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cd847517c94a88e10d4d2621ef62ede50a0d1a86ebd75a59dae2d9c181dd0077",
        "datetime": 1785309600
      }
    ],
    "_fetched_at": 1785330019.8990862,
    "_updated_label": "2026-07-29 22:01"
  },
  "META": {
    "nextEarnings": {
      "date": "2026-07-29",
      "hour": "amc",
      "epsEstimate": 7.3594
    },
    "news": [
      {
        "headline": "Fed On Deck, Tech Bottom Steadies Wall Street Pre-Bell; Asia, Europe Off",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cd9873b73d4749974456d29e57d61bbec802f698ad941fa40d055e6ffa7d1f17",
        "datetime": 1785323568
      },
      {
        "headline": "AI Data Center Turbines, Backlogged For Years, Are Suffering Early Deaths. Here's Why.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1db65f7c17ccb7fa4688902cf09d0ed80a9aaa64b02d31884e8a8fd6d5f7422e",
        "datetime": 1785322835
      },
      {
        "headline": "Capital Power reports second quarter 2026 results",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ef6208b3c2ac20778e1eb54982b8bda055e87f3c01bdf93b2f696a3c709b0122",
        "datetime": 1785322800
      },
      {
        "headline": "Freehand Raises $75M to Scale AI Teams Managing Supply Chain Spend for Fortune 500 Companies",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ba21246f140b001de8292a0b208b4d4618de57c7c70eb3bcee29e39334dcd9d2",
        "datetime": 1785322800
      },
      {
        "headline": "Only 2 \"Magnificent Seven\" Stocks Are Beating the Market This Year. What's Going On?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=90882aee290fea8f9f2c69ed11bc2cc59c77f7e686eac2dced6fb4f7d7dd4815",
        "datetime": 1785321300
      }
    ],
    "_fetched_at": 1785330019.8990862,
    "_updated_label": "2026-07-29 22:01"
  },
  "TSLA": {
    "nextEarnings": {
      "date": "2026-10-20",
      "hour": "amc",
      "epsEstimate": 0.4684
    },
    "news": [
      {
        "headline": "Elon Musk Thanked Micron Twice on Tesla's Earnings Call -- Here's Why That's Great News",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0f94e2c6c9feede6dc050859b38f86bad6a0a4a857c87b543a3c768866201971",
        "datetime": 1785321360
      },
      {
        "headline": "Only 2 \"Magnificent Seven\" Stocks Are Beating the Market This Year. What's Going On?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=90882aee290fea8f9f2c69ed11bc2cc59c77f7e686eac2dced6fb4f7d7dd4815",
        "datetime": 1785321300
      },
      {
        "headline": "Tesla, ContourGlobal sign 1TWh/year PPA for Project Sterling in Arizona",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ff0b22a3842eeb3d5bd9ae5f02f21e331be4399ade2c23fd7144721724f78826",
        "datetime": 1785315234
      },
      {
        "headline": "Zacks Investment Ideas feature highlights: Nasdaq 100 Index ETF, Microsoft, Meta Platforms, Tesla and Alphabet",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=07dc5fb23922a797c87146fc0cd0c2cbf15ff77945c12e226ae2834a63f4c9e4",
        "datetime": 1785311760
      },
      {
        "headline": "Binance Adds 10 More Tokenized Stocks to Its bStocks Lineup",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=31d8d6f7e00766f9eafcf578bb331f74c9f01b9a50c8057e22f52855997c44cd",
        "datetime": 1785310029
      }
    ],
    "_fetched_at": 1785330019.8990862,
    "_updated_label": "2026-07-29 22:01"
  },
  "MU": {
    "nextEarnings": {
      "date": "2026-09-21",
      "hour": "amc",
      "epsEstimate": 32.2476
    },
    "news": [
      {
        "headline": "Memory Stocks' Selloff Opens Opportunity as Micron's Bargain Valuation and Earnings Catalysts Loom",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=cfd2b1c85e2490da0202b048a5b7c6be018237366bbe4357024610e44e0d2db0",
        "datetime": 1785326745
      },
      {
        "headline": "Analysts Predict Sandisk And Micron Still Good For Huge Gains",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5f71ab55e985a7ebd93fdf9b2e326f9fe5798423e474ed10023b827ea014fa37",
        "datetime": 1785324839
      },
      {
        "headline": "SKHY, MU, Samsung's Memory Technology Lead Over China’s CXMT Unlikely To Narrow Soon, Says Futurum Analyst",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=061f4d47eb050cce3c0ff8a2f73ff45db8bec35b871fdb8d5423a694cee75dd8",
        "datetime": 1785322262
      },
      {
        "headline": "Social Buzz: Wallstreetbets Stocks Mostly Higher Pre-Bell Wednesday; Bloom Energy, Seagate Technology to Advance",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5a6b761ee2029b52b751357046b1fff353955b4e54ef7cc9e0ef097d604a1ab5",
        "datetime": 1785321514
      },
      {
        "headline": "Elon Musk Thanked Micron Twice on Tesla's Earnings Call -- Here's Why That's Great News",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0f94e2c6c9feede6dc050859b38f86bad6a0a4a857c87b543a3c768866201971",
        "datetime": 1785321360
      }
    ],
    "_fetched_at": 1785330019.8990862,
    "_updated_label": "2026-07-29 22:02"
  },
  "AMD": {
    "nextEarnings": {
      "date": "2026-08-04",
      "hour": "amc",
      "epsEstimate": 1.6291
    },
    "news": [
      {
        "headline": "Prediction: AMD Stock Could Double by 2028. Here's Why",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ca1b2117278a59214053db4f3b285f03fb2baccce6640a966140ed6a10fb6ab4",
        "datetime": 1785322080
      },
      {
        "headline": "Kulicke and Soffa, Applied Materials, AMD, Intel, and KLA Corporation Stocks Trade Down, What You Need To Know",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0268c60f0b72e294829cc0df90cb7a59237ca6fc59d8e379c239920e3f4d970e",
        "datetime": 1785319982
      },
      {
        "headline": "The Zacks Analyst Blog Highlights Alphabet, Advanced Micro Devices and RTX",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5da99c27fdd079d1a9d67ecbb49b41ad68a4e18569e72de4975ae4b809e49c84",
        "datetime": 1785316380
      },
      {
        "headline": "AMD: Current Valuation Appears Hard To Justify",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=d742b783e854d8185329180c2445feb6cf20b61fb2993220210f835a6ce14dc1",
        "datetime": 1785304734
      },
      {
        "headline": "Core Scientific (CORZ) Stock Looks Above Fair Value After A Big AI Deal",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d804c6f9c08f714c40f23426901659f962e4f702060049ea1d338fc3482e298d",
        "datetime": 1785301610
      }
    ],
    "_fetched_at": 1785330019.8990862,
    "_updated_label": "2026-07-29 22:01"
  },
  "INTC": {
    "nextEarnings": {
      "date": "2026-10-21",
      "hour": "amc",
      "epsEstimate": 0.3736
    },
    "news": [
      {
        "headline": "United Microelectronics Q2 Earnings Call Highlights",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f7df6ec8301f2be5a9aede61a0f87c17d86f9702c705c5c9d05e4be9b7863f9a",
        "datetime": 1785322961
      },
      {
        "headline": "Kulicke and Soffa, Applied Materials, AMD, Intel, and KLA Corporation Stocks Trade Down, What You Need To Know",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0268c60f0b72e294829cc0df90cb7a59237ca6fc59d8e379c239920e3f4d970e",
        "datetime": 1785319982
      },
      {
        "headline": "Chips Sell First, Ask Questions Later - And SK Hynix Just Handed Them the Answer",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=2dd0609fece9b7df7d96e884291a99b4db8c8f2618b80ae5cd0c2bffda101783",
        "datetime": 1785316364
      },
      {
        "headline": "Intel's Turnaround Is Finally Backed By Results (Rating Downgrade)",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=c944e341f5ebc841e213a44a77095a3e095f516ab8e678dcb8acf6368e5d6e76",
        "datetime": 1785303774
      },
      {
        "headline": "How Far Could Marvell Technology Stock Actually Fall From Here?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=84affedbd6649949a2248c44d13f8513ae38dae2dc8658bd0320fa00de141678",
        "datetime": 1785274325
      }
    ],
    "_fetched_at": 1785330019.8990862,
    "_updated_label": "2026-07-29 22:01"
  },
  "AMAT": {
    "nextEarnings": {
      "date": "2026-08-13",
      "hour": "amc",
      "epsEstimate": 3.462
    },
    "news": [
      {
        "headline": "Kulicke and Soffa, Applied Materials, AMD, Intel, and KLA Corporation Stocks Trade Down, What You Need To Know",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0268c60f0b72e294829cc0df90cb7a59237ca6fc59d8e379c239920e3f4d970e",
        "datetime": 1785319982
      },
      {
        "headline": "Is Amkor Technology Stock A Smart Buy Right Now",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fac2fc3c17bfbaa69e25a176c99a849989bda55db4cf57b710f6bc3f97073a3b",
        "datetime": 1785272883
      },
      {
        "headline": "AI Chip Stocks Tumble as Nvidia, AMD Lead Market Selloff Over Spending Fears",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c70ae72f7f512ad8738cb2a3e40874f1e89ba2269c9f3a12af4f9266dfa6928e",
        "datetime": 1785268747
      },
      {
        "headline": "EssilorLuxottica: Q2/H1 2026 Results - Solid revenue trajectory at +9.7% in H1, with Q2 at +8.7%. Increasing profitability, with Adj. Operating Profit +15%.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fce88d908a7aea08fed61642e957c1c958b2312fb16dcaea7c3e1c3106481a3a",
        "datetime": 1785254400
      },
      {
        "headline": "FFIV Beats Q3 Earnings Estimates on Systems Strength, Raises View",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7979f77f5a225ab47b31eae4c37dfaf43a1463af7958160600f1270aa84129da",
        "datetime": 1785253800
      }
    ],
    "_fetched_at": 1785330019.8990862,
    "_updated_label": "2026-07-29 22:01"
  },
  "QQQ": {
    "nextEarnings": null,
    "news": [
      {
        "headline": "Daily Breadth Improves, but the Broader Trend Stays Fragile",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=8fd934ea9e1da2faf4a4d1a3a071f29756788b8e712aff8fcf6618b355e2e6c3",
        "datetime": 1785327501
      },
      {
        "headline": "Chips Sell First, Ask Questions Later - And SK Hynix Just Handed Them the Answer",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=2dd0609fece9b7df7d96e884291a99b4db8c8f2618b80ae5cd0c2bffda101783",
        "datetime": 1785316364
      },
      {
        "headline": "The Average Stock Is At Another New All-Time High",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=906981631ae5305f974776aa7b2639cf4a24431f6484d0240b33a66fb514deeb",
        "datetime": 1785314200
      },
      {
        "headline": "Two Charts Encapsulating Wall Street's Delusion On AI",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=e59698dea823b17944068911358d70cc9ff0cbe8d7517f20d60919fa5141aef8",
        "datetime": 1785312761
      },
      {
        "headline": "Hyperscalers Deserve The Benefit Of The Doubt And Doomsday Predictions Are Wrong",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=01f62ac59c7294e388d55cb1bb1e0f517df2443352d3f56ab1ef827e0dab3c6e",
        "datetime": 1785311745
      }
    ],
    "_fetched_at": 1785330019.8990862,
    "_updated_label": "2026-07-29 22:00"
  },
  "SPY": {
    "nextEarnings": null,
    "news": [
      {
        "headline": "Daily Breadth Improves, but the Broader Trend Stays Fragile",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=8fd934ea9e1da2faf4a4d1a3a071f29756788b8e712aff8fcf6618b355e2e6c3",
        "datetime": 1785327501
      },
      {
        "headline": "CSD and VEGN Both Beat the S&P 500 but One Thrives When Markets Punish Tech",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c79d9d06fa2c8f3adb1daf15baec78cbadd1d623558a58a73163090e993833a2",
        "datetime": 1785323452
      },
      {
        "headline": "Chips Sell First, Ask Questions Later - And SK Hynix Just Handed Them the Answer",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=2dd0609fece9b7df7d96e884291a99b4db8c8f2618b80ae5cd0c2bffda101783",
        "datetime": 1785316364
      },
      {
        "headline": "The Average Stock Is At Another New All-Time High",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=906981631ae5305f974776aa7b2639cf4a24431f6484d0240b33a66fb514deeb",
        "datetime": 1785314200
      },
      {
        "headline": "Two Charts Encapsulating Wall Street's Delusion On AI",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=e59698dea823b17944068911358d70cc9ff0cbe8d7517f20d60919fa5141aef8",
        "datetime": 1785312761
      }
    ],
    "_fetched_at": 1785330019.8990862,
    "_updated_label": "2026-07-29 22:00"
  },
  "ORCL": {
    "nextEarnings": {
      "date": "2026-09-07",
      "hour": "",
      "epsEstimate": 1.7745
    },
    "news": [
      {
        "headline": "Analysts Predict Sandisk And Micron Still Good For Huge Gains",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5f71ab55e985a7ebd93fdf9b2e326f9fe5798423e474ed10023b827ea014fa37",
        "datetime": 1785324839
      },
      {
        "headline": "Explainer-What are credit default swaps and why are they spooking AI investors?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1e716cad466ca25b3653f746ed8577388d551c57ada3d96a2b894bfd9a968858",
        "datetime": 1785323022
      },
      {
        "headline": "Hyperscalers Deserve The Benefit Of The Doubt And Doomsday Predictions Are Wrong",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=01f62ac59c7294e388d55cb1bb1e0f517df2443352d3f56ab1ef827e0dab3c6e",
        "datetime": 1785311745
      },
      {
        "headline": "As AI Anxiety Spreads, Hyperscaler Default Bets Are Spiking",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=512ed7ab4b4a71d2657a1b40a4a77ba6564c393887f53ccabbc0b77e101c40c5",
        "datetime": 1785302100
      },
      {
        "headline": "Jack Ma-Backed OceanBase Seeks Up to $443 Million for AI Push",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c5a3334b3e2080bbca403936a34f0d2cd93551dda26a71e3a2031391688c0fc7",
        "datetime": 1785290538
      }
    ],
    "_fetched_at": 1785330019.8990862,
    "_updated_label": "2026-07-29 22:01"
  },
  "CRM": {
    "nextEarnings": {
      "date": "2026-08-26",
      "hour": "amc",
      "epsEstimate": 3.3057
    },
    "news": [
      {
        "headline": "AI Stock Divergence: Value and Relative Strength Winners Emerge Amid Sector Pullback",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=a957c52ee8726bbc16ae5be044ad8eb45188892c9f97e3b5395e8d70416764a2",
        "datetime": 1785328552
      },
      {
        "headline": "Oakmark Global All Cap Strategy Q2 2026 Portfolio Performance",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=fcc04c4e0057b082307abbd2455c824f7eba260d712ff83de46b48298e3edd8a",
        "datetime": 1785285600
      },
      {
        "headline": "3 of Wall Street’s Favorite Stocks with Questionable Fundamentals",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=95d43693543ccc46ac3e461572c81e1da278b453a5ca9af564600c1ae51e9129",
        "datetime": 1785268142
      },
      {
        "headline": "Global Digital Transformation in Healthcare Market Size/Share Worth USD 270.9 Billion by 2035 at a 14.13% CAGR: Healthcare Foresights (Analysis, Outlook, Leaders, Report, Trends, Forecast, Segmentatio",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=366bb3ca8848ba5152308566799255dd9d7dc151bab93b311925e61a56141cda",
        "datetime": 1785267000
      },
      {
        "headline": "Uncover the latest developments among dow jones stocks in today's session.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=68013383e26e7f493f401c7c6e877fce75f4cff1a7c847a6e7df8a5dc5cc667c",
        "datetime": 1785265804
      }
    ],
    "_fetched_at": 1785330019.8990862,
    "_updated_label": "2026-07-29 22:01"
  },
  "PLTR": {
    "nextEarnings": {
      "date": "2026-08-03",
      "hour": "amc",
      "epsEstimate": 0.3544
    },
    "news": [
      {
        "headline": "Is Palantir Still a Millionaire-Maker Stock?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=60054d01e8d8fa3226ff0861def365f0b9a954423efcb1d255be9aa50c5ed19d",
        "datetime": 1785319500
      },
      {
        "headline": "Palantir (PLTR) Faces A French Exit As ChapsVision Takes Its Place",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=76cf97cfab6493fbb1e2adb7bb4d2e947850353a93b7cc6de6771edb5dd17dc5",
        "datetime": 1785316127
      },
      {
        "headline": "UBS Group Q2 Earnings Call Highlights",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ecc0f4e44cd07058bc336abfb97dbac8fdfbc1e73ab97a205d0063c00953a13f",
        "datetime": 1785315826
      },
      {
        "headline": "Prediction: Palantir's Stock Will Make a Huge Move on Aug. 3",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=02bee09775f632be9e90597781ee12bd60e5bc353e9884a9e8d9b17ac897ae73",
        "datetime": 1785309120
      },
      {
        "headline": "Anthropic clarifies stance on open-weight AI models",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d85e5db1a0f516464186898786f677efc1003b913e9171add623d2b507560802",
        "datetime": 1785292380
      }
    ],
    "_fetched_at": 1785330019.8990862,
    "_updated_label": "2026-07-29 22:01"
  },
  "QCOM": {
    "nextEarnings": {
      "date": "2026-07-29",
      "hour": "amc",
      "epsEstimate": 2.2724
    },
    "news": [
      {
        "headline": "Nasdaq, S&P 500 Futures Mixed Ahead Of Fed Verdict, Microsoft And Meta Earnings As Oil Extends Rally: Why SKHY, SPCX, HOOD, BE Are In Focus",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a074e00085c7e90b94809946fe7a7d3601953f0d50decd547336f1d18caa7f6d",
        "datetime": 1785316012
      },
      {
        "headline": "Qualcomm’s AI Ambitions Face an Earnings Test",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7e85d443340b2c31d816e6d76ed52cc3a728e157ffd0884dac690f5a06c3abc9",
        "datetime": 1785303900
      },
      {
        "headline": "Qualcomm Is Down 37% From Its High and Reports Wednesday. Is the Stock a Buy?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f2e3c53c9f7d93d9a8644995951bffda8664af0bb92b7705f74571c529c30e36",
        "datetime": 1785298020
      },
      {
        "headline": "Qualcomm is set to ratchet up chip prices in September, and your next gadget upgrade could bear the brunt",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7493aedac7df319bc99b7ccbd14525e905d31d46e8a626251d2266e02c5cc195",
        "datetime": 1785278328
      },
      {
        "headline": "How Far Could Marvell Technology Stock Actually Fall From Here?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=84affedbd6649949a2248c44d13f8513ae38dae2dc8658bd0320fa00de141678",
        "datetime": 1785274325
      }
    ],
    "_fetched_at": 1785330019.8990862,
    "_updated_label": "2026-07-29 22:01"
  },
  "ARM": {
    "nextEarnings": {
      "date": "2026-07-29",
      "hour": "amc",
      "epsEstimate": 0.4055
    },
    "news": [
      {
        "headline": "AMD Sinks 8%, Marvell Sinks 7%, Intel Fall 6% as AI Chip Trade Narrows to NVIDIA",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=37fae0e763c35d3d7a71eaa6f4bb2ba0eb9cca015c0fd4ed8b877b31c261b485",
        "datetime": 1785252523
      },
      {
        "headline": "What Is Going on With Arm Holdings Stock on Tuesday?",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=558112a0c7b5c13f789965e416a6969ae4f87991edbc06e984a74734e1387e3d",
        "datetime": 1785244971
      },
      {
        "headline": "Virtus Large Cap Growth SMA Q2 2026 Portfolio Update",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=7d3fe4c0d23f407ac74fb782e56ffe787cecacb6384ae5c0e8ee27f650627233",
        "datetime": 1785224400
      },
      {
        "headline": "Arm Holdings (ARM) Could Be 40% Undervalued As Earnings Near",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f980c9ce94c01769038be8ad0e2757858f0372dc382c13cd8a65b78fb56d818a",
        "datetime": 1785186558
      },
      {
        "headline": "Arm Holdings' Next Earnings Report on July 29 Could Send the Stock Soaring. Here's Why.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cc0155b7843b88add1a4b3730014312d7fec61b83efd9991799609d1a501d065",
        "datetime": 1785178801
      }
    ],
    "_fetched_at": 1785330019.8990862,
    "_updated_label": "2026-07-29 22:01"
  },
  "MRVL": {
    "nextEarnings": {
      "date": "2026-08-20",
      "hour": "",
      "epsEstimate": 0.939
    },
    "news": [
      {
        "headline": "TER Stock Gains After Q2 Beat – CEO Says AI Demand Remains 'Robust,' Sees Growth Extending Into 2027",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=58a0a0e6764b52cb22d8db6a8ac764607f471a44539157187d0c43344f9a98d8",
        "datetime": 1785324592
      },
      {
        "headline": "Marvell Technology to invest $250 million in India, double headcount",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f599c75efa587848a6792d5dddb2a54d129fd445e20f20a6f85e617befbcfb83",
        "datetime": 1785323652
      },
      {
        "headline": "Marvell to Invest $250 Million in India, Expanding Bangalore Facility to Drive Next-generation AI Technology Development",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1e12cc515d74edc2c30d1b474254c7b074b4f35ab4da9f89e0273f49061b3966",
        "datetime": 1785321000
      },
      {
        "headline": "Lam Research, Monolithic Power Systems, Marvell Technology, Micron, and onsemi Shares Plummet, What You Need To Know",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ddb853f5a9c4646754fbbbbef42491098ac15934b2dc1c1c8d474e8f783d6fd9",
        "datetime": 1785319022
      },
      {
        "headline": "EXCLUSIVE: After Nvidia And SK Hynix, These 3 AI Stocks Could Be The Next Winners, CEO Says",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f84aa69e33046f8b1ac689ed8688e62e7cd8d4c8423e0dcc787feff8dc1ad554",
        "datetime": 1785276027
      }
    ],
    "_fetched_at": 1785330019.8990862,
    "_updated_label": "2026-07-29 22:01"
  },
  "ASML": {
    "nextEarnings": {
      "date": "2026-10-14",
      "hour": "bmo",
      "epsEstimate": 10.1558
    },
    "news": [
      {
        "headline": "SKHY, MU, Samsung's Memory Technology Lead Over China’s CXMT Unlikely To Narrow Soon, Says Futurum Analyst",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=061f4d47eb050cce3c0ff8a2f73ff45db8bec35b871fdb8d5423a694cee75dd8",
        "datetime": 1785322262
      },
      {
        "headline": "Has ASML Holding (ENXTAM:ASML) Priced In Too Much AI Demand?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=63e2e0e4d2ea27e98f1378e94cc4762200f77904ab1549d22ce0f42d77775a06",
        "datetime": 1785316157
      },
      {
        "headline": "Threat Out of China Creeps Up on ASML: Is the Dip in the Stock Worth Buying?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ce1668b0481c5b5317ab968a935bd5a76f00c20e49e82a076fe334291feff499",
        "datetime": 1785312900
      },
      {
        "headline": "Why China’s DUV Push Hit ASML (ASML) and Micron (MU) for Different Reasons",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9491d91e49605d4041034f78404c87e7234a08b746b6efd131426089dd36214e",
        "datetime": 1785311954
      },
      {
        "headline": "AI Chip Stocks Tumble as Nvidia, AMD Lead Market Selloff Over Spending Fears",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c70ae72f7f512ad8738cb2a3e40874f1e89ba2269c9f3a12af4f9266dfa6928e",
        "datetime": 1785268747
      }
    ],
    "_fetched_at": 1785330019.8990862,
    "_updated_label": "2026-07-29 22:01"
  },
  "LRCX": {
    "nextEarnings": {
      "date": "2026-07-29",
      "hour": "amc",
      "epsEstimate": 1.7172
    },
    "news": [
      {
        "headline": "Lam Research, Monolithic Power Systems, Marvell Technology, Micron, and onsemi Shares Plummet, What You Need To Know",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ddb853f5a9c4646754fbbbbef42491098ac15934b2dc1c1c8d474e8f783d6fd9",
        "datetime": 1785319022
      },
      {
        "headline": "Is Amkor Technology Stock A Smart Buy Right Now",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fac2fc3c17bfbaa69e25a176c99a849989bda55db4cf57b710f6bc3f97073a3b",
        "datetime": 1785272883
      },
      {
        "headline": "Earnings To Watch: Lam Research (LRCX) Reports Q2 Results Tomorrow",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=78c94c8d7e1abf55a454876d06cd1ed54a384394acfa5a8f638306e2841e4248",
        "datetime": 1785259982
      },
      {
        "headline": "Tuesday's session: top gainers and losers in the S&P500 index",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=d914c07964c6e02bbb3d0f3dab99f42869b3f4d48013c90488f66bd1641dc6d2",
        "datetime": 1785256501
      },
      {
        "headline": "Microsoft Could Swing $189 Billion in Value After Earnings",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=a56a9270583f16653189d46179f45a8225bcfa855ecde44199d32d13bc8e1d3c",
        "datetime": 1785252623
      }
    ],
    "_fetched_at": 1785330019.8990862,
    "_updated_label": "2026-07-29 22:02"
  },
  "KLAC": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "",
      "epsEstimate": 1.1541
    },
    "news": [
      {
        "headline": "Get insights into the top movers in the S&P500 index of Wednesday's pre-market session.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=d12ea2b97a7b8de7d8605f8f43bbe2a535312469ed9993773e3e6f01acd75ef9",
        "datetime": 1785328501
      },
      {
        "headline": "KLA Shares Drop Despite Q4 Earnings Beat as Guidance Fails to Impress Investors",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e493463dc7a3cf37af021268eb9f00a73ad937dbd2d7561b5a2e2615034a5c9d",
        "datetime": 1785321332
      },
      {
        "headline": "Kulicke and Soffa, Applied Materials, AMD, Intel, and KLA Corporation Stocks Trade Down, What You Need To Know",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0268c60f0b72e294829cc0df90cb7a59237ca6fc59d8e379c239920e3f4d970e",
        "datetime": 1785319982
      },
      {
        "headline": "KLA Corp (KLAC) Q4 2026 Earnings Call Highlights: Record Revenue and Strategic Growth Amid ...",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d588b3c3525ae083f09e523886c3e580c4f6f8a030cf2accf11834617b4eec9a",
        "datetime": 1785301270
      },
      {
        "headline": "Dow Jones Futures: Oil Jumps On Iran News; Seagate, SK Hynix, KLA, Bloom Energy Earnings Late",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c702c4205a56087e8e0968c6cb651099fd8e2dd8f048187750d699a5c96b7c98",
        "datetime": 1785289596
      }
    ],
    "_fetched_at": 1785330019.8990862,
    "_updated_label": "2026-07-29 22:02"
  },
  "SNDK": {
    "nextEarnings": {
      "date": "2026-08-05",
      "hour": "",
      "epsEstimate": 35.1395
    },
    "news": [
      {
        "headline": "Memory Stocks' Selloff Opens Opportunity as Micron's Bargain Valuation and Earnings Catalysts Loom",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=cfd2b1c85e2490da0202b048a5b7c6be018237366bbe4357024610e44e0d2db0",
        "datetime": 1785326745
      },
      {
        "headline": "Analysts Predict Sandisk And Micron Still Good For Huge Gains",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5f71ab55e985a7ebd93fdf9b2e326f9fe5798423e474ed10023b827ea014fa37",
        "datetime": 1785324839
      },
      {
        "headline": "SNDK Stock Rebounds After 35% Drop This Week – Sandisk’s AI-Fueled Growth Is 'Tremendous, But Finite,’ Says Analyst",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7033d539a1cf26f0fa109ddbf485cd9da6930209ab6578440e78be60cab586e8",
        "datetime": 1785322064
      },
      {
        "headline": "Social Buzz: Wallstreetbets Stocks Mostly Higher Pre-Bell Wednesday; Bloom Energy, Seagate Technology to Advance",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5a6b761ee2029b52b751357046b1fff353955b4e54ef7cc9e0ef097d604a1ab5",
        "datetime": 1785321514
      },
      {
        "headline": "Chips Sell First, Ask Questions Later - And SK Hynix Just Handed Them the Answer",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=2dd0609fece9b7df7d96e884291a99b4db8c8f2618b80ae5cd0c2bffda101783",
        "datetime": 1785316364
      }
    ],
    "_fetched_at": 1785330019.8990862,
    "_updated_label": "2026-07-29 22:02"
  },
  "WDC": {
    "nextEarnings": {
      "date": "2026-08-05",
      "hour": "amc",
      "epsEstimate": 3.3281
    },
    "news": [
      {
        "headline": "Memory Stocks' Selloff Opens Opportunity as Micron's Bargain Valuation and Earnings Catalysts Loom",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=cfd2b1c85e2490da0202b048a5b7c6be018237366bbe4357024610e44e0d2db0",
        "datetime": 1785326745
      },
      {
        "headline": "Chips Sell First, Ask Questions Later - And SK Hynix Just Handed Them the Answer",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=2dd0609fece9b7df7d96e884291a99b4db8c8f2618b80ae5cd0c2bffda101783",
        "datetime": 1785316364
      },
      {
        "headline": "Life Time Group and Strategy have been highlighted as Zacks Bull and Bear of the Day",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f7df6f9ff22eac95e232b1d8e87238397c63fb57e887b88217e40eb614432d94",
        "datetime": 1785309840
      },
      {
        "headline": "MU, SNDK, WDC, Memory Stocks Plunge After SK Hynix Issues Weak Forecast: Analyst Says ‘Estimates Are BS In Exponential Growth’",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=69bbecf90cb185edf4ea8b10ca862a63d07339b2015dd95cf2d59acbb3df7e23",
        "datetime": 1785307652
      },
      {
        "headline": "18 Ideal 'Safer' Buyable July Dogs Emerge After 10 Years Of Digging",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=e647d1716ec00a85f9d2c23ab796255fbeae0bc83ad0134ed09ba88d96efd30a",
        "datetime": 1785303575
      }
    ],
    "_fetched_at": 1785330019.8990862,
    "_updated_label": "2026-07-29 22:02"
  }
};
