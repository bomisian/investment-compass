// 자동 생성 파일 - buy_signal_telegram.py 실행 시마다 갱신됨. 직접 수정하지 마세요.
// Finnhub 실적 캘린더 + 회사 뉴스 헤드라인. 이 파일이 없어도 대시보드는 정상 동작함(해당 섹션만 숨김).
const NEWS_DATA = {
  "NVDA": {
    "nextEarnings": {
      "date": "2026-08-26",
      "hour": "amc",
      "epsEstimate": 2.1269
    },
    "news": [
      {
        "headline": "Forget IonQ, Rigetti Computing, and D-Wave Quantum. This Trillion-Dollar Artificial Intelligence (AI) Stock Is the Best Quantum Computing Opportunity, and It's Currently Trading at a 7-Year Valuation ",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e4ea082a2a04cc67225abccffe829f02d15c7cf2006caf2b0885bea01fe73299",
        "datetime": 1785102180
      },
      {
        "headline": "American Airlines Cut Its Full-Year Guidance. The Stock Rose 6.8% the Next Day.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cceba9d8a195328214dfb3a0559f13b73b31a1fdde2c2683f2c13dc3c57b6691",
        "datetime": 1785101520
      },
      {
        "headline": "Prediction: Alphabet Will Beat Apple to a $5 Trillion Market Cap",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=549c343e1b951ffe375c7188459832eac86c0601e388fafc23dbd314dbb6ad91",
        "datetime": 1785100800
      },
      {
        "headline": "Nvidia just locked down deal that changes AI race",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ef1624dc8c69b953eb1b7b05238fcb018e8da49062f9ab3b7342f78afb4544e7",
        "datetime": 1785100020
      },
      {
        "headline": "Retail Investors Are Pulling Money From Blackstone's Private Credit Fund. Here's What Its Latest Quarter Says.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3435ca906231d5c8ab748d2227e9803f78fe705be769450b417bc3ed34606d3e",
        "datetime": 1785099000
      }
    ],
    "_fetched_at": 1785110401.8563228,
    "_updated_label": "2026-07-27 09:00"
  },
  "AAPL": {
    "nextEarnings": {
      "date": "2026-07-30",
      "hour": "amc",
      "epsEstimate": 1.9299
    },
    "news": [
      {
        "headline": "Prediction: Alphabet Will Beat Apple to a $5 Trillion Market Cap",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=549c343e1b951ffe375c7188459832eac86c0601e388fafc23dbd314dbb6ad91",
        "datetime": 1785100800
      },
      {
        "headline": "Dow Jones Futures Due, Iran News In focus; Apple Leads Earnings Wave, Fed Meeting Ahead",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3350a7843509ebf2f617d375e1c2d93f987000f3de7cf347206809485bc44e0d",
        "datetime": 1785100638
      },
      {
        "headline": "Fed Meeting, Inflation, Boeing, Meta, Apple, Exxon, and More to Watch This Week",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=063caae182b53b5cfa5bf5335b445579d39efe33c8b2f7c5a64a34b5a4cd2ea2",
        "datetime": 1785088800
      },
      {
        "headline": "Top Three ETFs to Watch This Week: TQQQ, MAGS, SCHD",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=9153ff3fa8a62ff65438601ca296281aa7740844d189f9764e65a94c79d24385",
        "datetime": 1785079534
      },
      {
        "headline": "Magnificent 7 Trade Is Broken — Here’s Where Smart Investors Should Look Next",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b0a66f6ac5b8a3b388478d04858a72d41aaac461145a557d2715d756e040f9ff",
        "datetime": 1785079470
      }
    ],
    "_fetched_at": 1785110401.8563228,
    "_updated_label": "2026-07-27 09:00"
  },
  "GOOGL": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "amc",
      "epsEstimate": 3.0933
    },
    "news": [
      {
        "headline": "Prediction: Alphabet Will Beat Apple to a $5 Trillion Market Cap",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=549c343e1b951ffe375c7188459832eac86c0601e388fafc23dbd314dbb6ad91",
        "datetime": 1785100800
      },
      {
        "headline": "Dow Jones Futures Due, Iran News In focus; Apple Leads Earnings Wave, Fed Meeting Ahead",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3350a7843509ebf2f617d375e1c2d93f987000f3de7cf347206809485bc44e0d",
        "datetime": 1785100638
      },
      {
        "headline": "Alphabet Raises AI Spending But Still Can't Meet Demand: 'We're Still in a Supply Constraint Environment'",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8328ac58f0fc96e432adbc84cd543e83b4807959140c3e5f967a8cbc42eacce1",
        "datetime": 1785088832
      },
      {
        "headline": "Neocloud Stocks vs. the Hyperscalers -- Who Actually Wins AI Capex Boom?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4be45c2878389f162a1e43d7701d29dcc05ba97ea4500ea1352cad9c09d9bf1c",
        "datetime": 1785083700
      },
      {
        "headline": "Google spent $490 million a day on AI and burned $5.9 billion in cash — its first negative quarter since going public",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8752e6fabcb96f63e4435ca9e0cec7c4ed375716a1a753acb03d0f90826c18a0",
        "datetime": 1785083400
      }
    ],
    "_fetched_at": 1785110401.8563228,
    "_updated_label": "2026-07-27 09:00"
  },
  "MSFT": {
    "nextEarnings": {
      "date": "2026-07-29",
      "hour": "amc",
      "epsEstimate": 4.3277
    },
    "news": [
      {
        "headline": "Microsoft just took sides in AI policy fight",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f59089685b2e0e9934c18a33f78452d4b8ff667bd78d0335b21ad26f97ceaeae",
        "datetime": 1785101760
      },
      {
        "headline": "Dow Jones Futures Due, Iran News In focus; Apple Leads Earnings Wave, Fed Meeting Ahead",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3350a7843509ebf2f617d375e1c2d93f987000f3de7cf347206809485bc44e0d",
        "datetime": 1785100638
      },
      {
        "headline": "Tracking Lone Pine Capital Portfolio - Q1 2026 Update",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=be41904ebdcc5bca5c274b445a00f402da10ab95c9fff40563b47912a70c691e",
        "datetime": 1785092910
      },
      {
        "headline": "Fed Meeting, Inflation, Boeing, Meta, Apple, Exxon, and More to Watch This Week",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=063caae182b53b5cfa5bf5335b445579d39efe33c8b2f7c5a64a34b5a4cd2ea2",
        "datetime": 1785088800
      },
      {
        "headline": "On GPS: Exclusive interview with Microsoft CEO Satya Nadella",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2da30109eba1eb24624594b447320ee7acb53266c9a186a3d716ed3d3f511e24",
        "datetime": 1785085225
      }
    ],
    "_fetched_at": 1785110401.8563228,
    "_updated_label": "2026-07-27 09:00"
  },
  "AMZN": {
    "nextEarnings": {
      "date": "2026-07-30",
      "hour": "amc",
      "epsEstimate": 1.8556
    },
    "news": [
      {
        "headline": "Dow Jones Futures Due, Iran News In focus; Apple Leads Earnings Wave, Fed Meeting Ahead",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3350a7843509ebf2f617d375e1c2d93f987000f3de7cf347206809485bc44e0d",
        "datetime": 1785100638
      },
      {
        "headline": "Back to School Spending Expected to Set Records as Shoppers Hunt for Bargains",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3ebad54cde88e5a88e09b8c157ac785c6202a54b4e33437e9d48fe5152b1b491",
        "datetime": 1785095280
      },
      {
        "headline": "Tracking Philippe Laffont's Coatue Management Portfolio - Q1 2026 Update",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=4fe04410f66bb01acca10220d74f89f605accd25abe2d29cb8082c3a7594de57",
        "datetime": 1785095093
      },
      {
        "headline": "Tracking Lone Pine Capital Portfolio - Q1 2026 Update",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=be41904ebdcc5bca5c274b445a00f402da10ab95c9fff40563b47912a70c691e",
        "datetime": 1785092910
      },
      {
        "headline": "Neocloud Stocks vs. the Hyperscalers -- Who Actually Wins AI Capex Boom?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4be45c2878389f162a1e43d7701d29dcc05ba97ea4500ea1352cad9c09d9bf1c",
        "datetime": 1785083700
      }
    ],
    "_fetched_at": 1785110401.8563228,
    "_updated_label": "2026-07-27 09:00"
  },
  "TSM": {
    "nextEarnings": {
      "date": "2026-10-14",
      "hour": "amc",
      "epsEstimate": 26.4094
    },
    "news": [
      {
        "headline": "Tracking Lone Pine Capital Portfolio - Q1 2026 Update",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=be41904ebdcc5bca5c274b445a00f402da10ab95c9fff40563b47912a70c691e",
        "datetime": 1785092910
      },
      {
        "headline": "Tracking Ole Andreas Halvorsen's Viking Global Portfolio - Q1 2026 Update",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=8e8fa4d223ad5a2aa5e8232d0023938544c3ad8c4fad52c33e670c1bcd4d404f",
        "datetime": 1785077971
      },
      {
        "headline": "Intel's Best Days Are Still Well Ahead (Rating Upgrade)",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=f1ec53b49d75782c77a7d5db0024b3fb0adf5ab3de7d6a678ac41c9b2f4cafa1",
        "datetime": 1785058667
      },
      {
        "headline": "Intel Layoffs, Musk's Micron Moment, $200 Billion Samsung-Broadcom Pact and More: This Week in Tech",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=9418ffe30bc2f276c5b77ca1639e567a6a0f4710311ce8d9a5c7760924d9e98d",
        "datetime": 1785056428
      },
      {
        "headline": "Wall Street Week Ahead",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=aa93f6b650dcda9f8826f3f7390c5a02e2548ec74e81335b1ebe7541cf3f7d9d",
        "datetime": 1785048021
      }
    ],
    "_fetched_at": 1785110401.8563228,
    "_updated_label": "2026-07-27 09:00"
  },
  "AVGO": {
    "nextEarnings": {
      "date": "2026-09-02",
      "hour": "amc",
      "epsEstimate": 3.3012
    },
    "news": [
      {
        "headline": "Top Three DRAM ETF Stocks to Watch This Week: Samsung, SK Hynix, Seagate",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=53405f27f46d0f1cc85c5dbba208d3800928d35f1f354c40059a0cb7c2fe2a0f",
        "datetime": 1785080716
      },
      {
        "headline": "Intel Layoffs, Musk's Micron Moment, $200 Billion Samsung-Broadcom Pact and More: This Week in Tech",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=9418ffe30bc2f276c5b77ca1639e567a6a0f4710311ce8d9a5c7760924d9e98d",
        "datetime": 1785056428
      },
      {
        "headline": "Top Wall Street analysts back these 3 stocks for their long-term growth potential",
        "source": "CNBC",
        "url": "https://finnhub.io/api/news?id=2ba0e4abbe5a5dd9987ad9214815bea2cda8d1cf1dda24aa72600606fe0c3934",
        "datetime": 1785051191
      },
      {
        "headline": "Samsung, Broadcom Ink $200 Billion AI Chip Pact Through 2030 as Foundry Race With TSMC Heats Up",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=03ad968deb3073a123f3b6d4ef09c105244faa7a3f40e81fa9e507b945d880c7",
        "datetime": 1785032452
      },
      {
        "headline": "Tracking Cliff Asness' AQR Capital Management 13F Portfolio - Q1 2026 Update",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=b7c7414f5a348862645b4262f9b2682c8f76756b22f3a176a5c98e31a4b1d284",
        "datetime": 1785018522
      }
    ],
    "_fetched_at": 1785110401.8563228,
    "_updated_label": "2026-07-27 09:00"
  },
  "META": {
    "nextEarnings": {
      "date": "2026-07-29",
      "hour": "amc",
      "epsEstimate": 7.3817
    },
    "news": [
      {
        "headline": "Dow Jones Futures Due, Iran News In focus; Apple Leads Earnings Wave, Fed Meeting Ahead",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3350a7843509ebf2f617d375e1c2d93f987000f3de7cf347206809485bc44e0d",
        "datetime": 1785100638
      },
      {
        "headline": "Fed Meeting, Inflation, Boeing, Meta, Apple, Exxon, and More to Watch This Week",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=063caae182b53b5cfa5bf5335b445579d39efe33c8b2f7c5a64a34b5a4cd2ea2",
        "datetime": 1785088800
      },
      {
        "headline": "Neocloud Stocks vs. the Hyperscalers -- Who Actually Wins AI Capex Boom?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4be45c2878389f162a1e43d7701d29dcc05ba97ea4500ea1352cad9c09d9bf1c",
        "datetime": 1785083700
      },
      {
        "headline": "Top Three ETFs to Watch This Week: TQQQ, MAGS, SCHD",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=9153ff3fa8a62ff65438601ca296281aa7740844d189f9764e65a94c79d24385",
        "datetime": 1785079534
      },
      {
        "headline": "Magnificent 7 Trade Is Broken — Here’s Where Smart Investors Should Look Next",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b0a66f6ac5b8a3b388478d04858a72d41aaac461145a557d2715d756e040f9ff",
        "datetime": 1785079470
      }
    ],
    "_fetched_at": 1785110401.8563228,
    "_updated_label": "2026-07-27 09:00"
  },
  "TSLA": {
    "nextEarnings": {
      "date": "2026-10-20",
      "hour": "amc",
      "epsEstimate": 0.5111
    },
    "news": [
      {
        "headline": "Ford Motor vs. Tesla: What The Revenue Trends of These Automotive Giants Tell Investors",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=51b09b6995b17e0e4b199fa2cb33b19da06516515fe395f189052fc03dfff07c",
        "datetime": 1785102361
      },
      {
        "headline": "Dow Jones Futures Due, Iran News In focus; Apple Leads Earnings Wave, Fed Meeting Ahead",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3350a7843509ebf2f617d375e1c2d93f987000f3de7cf347206809485bc44e0d",
        "datetime": 1785100638
      },
      {
        "headline": "Tesla Is Still Overvalued After Its 14% Post-Earnings Drop",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=51c745b670ece671487174733a6971f132960c85b6ba72219aa91619de7ce89f",
        "datetime": 1785097020
      },
      {
        "headline": "TechCrunch Mobility: Uber bets on its former CEO",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=41b5133c82216db0c85a51dd046cec7e9f027a9d1e44ab51491812ab43e43369",
        "datetime": 1785081780
      },
      {
        "headline": "Want to Build Your Own Tesla Model S or X? Elon Musk Will Show You How.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=39098652960f762953a9ff7ac153e6291454e829dbb8d4b89f507334ed9cabc3",
        "datetime": 1785081660
      }
    ],
    "_fetched_at": 1785110401.8563228,
    "_updated_label": "2026-07-27 09:00"
  },
  "MU": {
    "nextEarnings": {
      "date": "2026-09-21",
      "hour": "amc",
      "epsEstimate": 32.2476
    },
    "news": [
      {
        "headline": "Micron vs. Sandisk: Which Stock Is the Better Buy for the Memory Boom?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=aa34d893a6a6719a9ec41342809c23aeb5e01ba8cf91d94376b19e9ed1ff525b",
        "datetime": 1785087780
      },
      {
        "headline": "This AI Stock Has Tripled in 2026. It Could Still Double in 3 Years (Hint: It's Not Micron)",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=54ca25a339ec0fdf623fe661f6f8ed665ad84b7ad7d0998f4cc1c84ee7fdbe9e",
        "datetime": 1785080580
      },
      {
        "headline": "Elon Musk Just Revealed a Quiet Win for Tesla’s AI Ambitions",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3f077508d93094c6ac95049777adbefe1cef78f674177168f1543c40682dd9af",
        "datetime": 1785078002
      },
      {
        "headline": "Traders Are Getting a New Tool to Wager on the Biggest US Stocks",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f4e223e1e35edbb8bc07cea8e21eddeea3fd35766175e3a82cdac39306879aa7",
        "datetime": 1785074400
      },
      {
        "headline": "Is Micron a Better Artificial Intelligence (AI) Stock Than Nvidia?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cb4d70e84bc7272b22598c93ba42cbbc14534edb3b8cc95f5220d0f663b799ff",
        "datetime": 1785074220
      }
    ],
    "_fetched_at": 1785110401.8563228,
    "_updated_label": "2026-07-27 09:00"
  },
  "AMD": {
    "nextEarnings": {
      "date": "2026-08-04",
      "hour": "amc",
      "epsEstimate": 1.6273
    },
    "news": [
      {
        "headline": "UBS hurries to reset AMD stock target on key AI Day signals",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4dbc1478bae46be3f614a74a6899fb000b2d5bb1539c941d36685c7e4f101978",
        "datetime": 1785070980
      },
      {
        "headline": "What a Major Anthropic Chip Deal Really Means for AMD Stock",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a6ce0c9402ef9b4b6eb3c2bbe2a3c72d48c381948b5057516b3fe895a7bd02ee",
        "datetime": 1785070802
      },
      {
        "headline": "Intel's Best Days Are Still Well Ahead (Rating Upgrade)",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=f1ec53b49d75782c77a7d5db0024b3fb0adf5ab3de7d6a678ac41c9b2f4cafa1",
        "datetime": 1785058667
      },
      {
        "headline": "The AI Trade Faces A Final Flush Lower, I'm Buying It",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=4b35ab8369f7911239f9389e825348233fee006e926187efb5ef4f9b46143176",
        "datetime": 1785058260
      },
      {
        "headline": "Consumer Tech (July 20-24): AI Boom Drives Big Tech Earnings, Oracle Grabs $7B Defense Deal & More",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=d32538a5d637928b3a1b63fd1b0a04821205f85781f492ba515b89f9eb91f441",
        "datetime": 1785058208
      }
    ],
    "_fetched_at": 1785110401.8563228,
    "_updated_label": "2026-07-27 09:00"
  },
  "INTC": {
    "nextEarnings": {
      "date": "2026-10-21",
      "hour": "amc",
      "epsEstimate": 0.2659
    },
    "news": [
      {
        "headline": "Intel (INTC) Teams With Lens Technology On AI Chip Packaging",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b89bf8a928d264ca3f85fced52af2f108e4b2020d08fa406452a3a95ce0f90d2",
        "datetime": 1785092946
      },
      {
        "headline": "Here's Why Qualcomm Is Still Overlooked vs. Nvidia and Intel",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8d698e37a3e5b1d45010feb9f3677e325326cd8f25ce74ef26c5ca79fd03bd65",
        "datetime": 1785087300
      },
      {
        "headline": "Intel Just Delivered Its Best Quarter in Years, But There Are Still Better AI Stocks to Buy",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e3752f0d222863cc7131258728229c9b7115e78a3639ed001d51ff561fb3e7e9",
        "datetime": 1785079802
      },
      {
        "headline": "Top Three ETFs to Watch This Week: TQQQ, MAGS, SCHD",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=9153ff3fa8a62ff65438601ca296281aa7740844d189f9764e65a94c79d24385",
        "datetime": 1785079534
      },
      {
        "headline": "Trump Says The Government’s Intel Stake Made $70 Billion in Eight Months — ‘Do I Get Credit for That? No’",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=153223944ac13c4b335e1b21fe68375045bfa049c458b3c0c404bacd248d07d5",
        "datetime": 1785076275
      }
    ],
    "_fetched_at": 1785110401.8563228,
    "_updated_label": "2026-07-27 09:00"
  },
  "AMAT": {
    "nextEarnings": {
      "date": "2026-08-13",
      "hour": "amc",
      "epsEstimate": 3.462
    },
    "news": [
      {
        "headline": "KLA's Q4 Earnings Loom: Buy, Sell or Hold the KLAC Stock?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=43b06a589a54d6e311bb03ff46ce9a653005fe9a4d75ee03d6241d6fb4acb7a5",
        "datetime": 1784906040
      },
      {
        "headline": "AMAT vs. Q: Which Advanced Packaging Stock is a Safer Bet Right Now?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cfe8f4773834018acc7ede5356a30ee2480226c902f9471b26c6b75d6a924eb1",
        "datetime": 1784904720
      },
      {
        "headline": "LRCX Poised for a Q4 Earnings Surprise: Should You Buy the Stock Now?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=eef50845342d98b975c7facbc2c78dd865fc9a3c0f5f1c2af92be436b610aa6b",
        "datetime": 1784897040
      },
      {
        "headline": "This AI Stock Needs to Cool Off After Gaining More Than 200% Year to Date",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a5c2603c0b216a13ac363e8153a894e286ade188232d5cf8eb2705c434c47497",
        "datetime": 1784880420
      },
      {
        "headline": "AMSL, AMAT, KLAC, LRCX: Chipmaking Equipment Stocks Rise On Intel’s CapEx Bump",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c96648bfcfc9ac47365025f7ce7a522add50427459950a7b09021f695e175f83",
        "datetime": 1784861073
      }
    ],
    "_fetched_at": 1785110401.8563228,
    "_updated_label": "2026-07-27 09:00"
  },
  "QQQ": {
    "nextEarnings": null,
    "news": [
      {
        "headline": "Top Three ETFs to Watch This Week: TQQQ, MAGS, SCHD",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=9153ff3fa8a62ff65438601ca296281aa7740844d189f9764e65a94c79d24385",
        "datetime": 1785079534
      },
      {
        "headline": "The Next Fed Rate Hike May Be Coming Soon",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=4da10ba1ebb0e0f3a803545acaff541bb33a0f6fee7617dc250a64729022614e",
        "datetime": 1785059700
      },
      {
        "headline": "Oil, Tariffs, And War Hit Markets Together",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=4eb56824cc1bc43f7415537fa77ee292652fe89e236fb65d81431fd40760ae9d",
        "datetime": 1785059180
      },
      {
        "headline": "Several Key Market Signals Flashing Danger Ahead",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=a2c991fdac3672e1611d5bcc5f959b0879c68ecaab81a44ad75ff79e082cc407",
        "datetime": 1785059179
      },
      {
        "headline": "Iran Is Noise Again: I Am Not Turning Bearish Until These 2 Trends Invert",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=195d7d5943c7f5bf71644c04f0c5fd15eafeb8cfa5673404f0e04a30f53cea5b",
        "datetime": 1785057300
      }
    ],
    "_fetched_at": 1785110401.8563228,
    "_updated_label": "2026-07-27 09:00"
  },
  "SPY": {
    "nextEarnings": null,
    "news": [
      {
        "headline": "Is Equal-Weighting the S&P 500 Worth It? Here’s What the Data Says",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c3cd792fec3371e29c6ac03fd47630c0f92ca30e182f2f32eb89537a2021108d",
        "datetime": 1785096166
      },
      {
        "headline": "Best Dividend Kings: July 2026",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=9a2687b22714d8cedc636831b2bc62592056cb84c4baeb1b206ee7ea9c167dc4",
        "datetime": 1785093714
      },
      {
        "headline": "S&P 500: Breaking In Slow Motion (Technical Analysis)",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=013daa4843ec81d4c4f45a507b90b9d950ae603192658f196eb209523ee8aaef",
        "datetime": 1785081600
      },
      {
        "headline": "SPYI’s 12% yield faces a hidden threat from falling volatility this summer",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=72bc5827418a169b2746d10282d1832dd2684cde05598497bab919f1bd731d6b",
        "datetime": 1785071737
      },
      {
        "headline": "Al Arabiya Reported Earlier, Iran Confirmed To Pakistan Readiness To Continue US Negotiations In Geneva, Doha, Or Islamabad, Source Told Al Arabiya",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=6b6dc1d0b41af76edaf1deb902011d8e7eb9344c53042223e54a4b4bfa35eade",
        "datetime": 1785066003
      }
    ],
    "_fetched_at": 1785110401.8563228,
    "_updated_label": "2026-07-27 09:00"
  },
  "ORCL": {
    "nextEarnings": {
      "date": "2026-09-07",
      "hour": "",
      "epsEstimate": 1.7739
    },
    "news": [
      {
        "headline": "Tracking Philippe Laffont's Coatue Management Portfolio - Q1 2026 Update",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=4fe04410f66bb01acca10220d74f89f605accd25abe2d29cb8082c3a7594de57",
        "datetime": 1785095093
      },
      {
        "headline": "Larry Ellison's Net Worth Craters as Oracle Stock Drops",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=0541f7abf65a79c49d66ce78747d311d92125795ef53cb545484415ae3d7b91d",
        "datetime": 1785080113
      },
      {
        "headline": "Consumer Tech (July 20-24): AI Boom Drives Big Tech Earnings, Oracle Grabs $7B Defense Deal & More",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=d32538a5d637928b3a1b63fd1b0a04821205f85781f492ba515b89f9eb91f441",
        "datetime": 1785058208
      },
      {
        "headline": "Oracle Won a $7 Billion Pentagon Contract on Thursday. Yet Shares Have Been Slammed.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7f084395670a59135359088abdcb15d2b153c30488d9c6cc4fd4888c190dc0ff",
        "datetime": 1785028320
      },
      {
        "headline": "Why Paramount's Warner Bros. deal suddenly looks less certain",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c306eab5994f1cc9d82908e05a14bffcbd078e29ff1d08b0d506aba5d97ffe41",
        "datetime": 1785001159
      }
    ],
    "_fetched_at": 1785119609.9989374,
    "_updated_label": "2026-07-27 11:33"
  },
  "CRM": {
    "nextEarnings": {
      "date": "2026-09-01",
      "hour": "amc",
      "epsEstimate": 3.3057
    },
    "news": [
      {
        "headline": "Salesforce’s new deal could reshape veteran health care",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=70cd9a33bae341bd759c05561f07b963740b2b7ea5f25ad48e456177aaaf43d5",
        "datetime": 1785114180
      },
      {
        "headline": "Salesforce vs. ServiceNow: Which Agentic AI Stock Is Actually the Better Buy Right Now?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cb700f05cea5832621d8c5d7829cc6edc439518b5e422b7fe8cd69c152dc4202",
        "datetime": 1785065100
      },
      {
        "headline": "Consumer Tech (July 20-24): AI Boom Drives Big Tech Earnings, Oracle Grabs $7B Defense Deal & More",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=d32538a5d637928b3a1b63fd1b0a04821205f85781f492ba515b89f9eb91f441",
        "datetime": 1785058208
      },
      {
        "headline": "Why is Salesforce the Worst-Performing Dow Jones Stock?",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=4ea123be0c9656ef70e062f4a6a83d3d504ffce3233ccf0b76d7578b478032f0",
        "datetime": 1785000877
      },
      {
        "headline": "Prediction: Is Salesforce a Millionaire-Maker Stock?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fbbe2f3828f2b7b0df44ec0212dfe35694691fcdaa2974458b36791bee65c93d",
        "datetime": 1784993418
      }
    ],
    "_fetched_at": 1785119609.9989374,
    "_updated_label": "2026-07-27 11:33"
  },
  "PLTR": {
    "nextEarnings": {
      "date": "2026-08-03",
      "hour": "",
      "epsEstimate": 0.354
    },
    "news": [
      {
        "headline": "Better AI Software Stock: Palantir vs. ServiceNow",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=685802f7bed7bc1919de9187a364d7af6a69ac38fcbb1b71e3e981cd05e85d11",
        "datetime": 1785082020
      },
      {
        "headline": "Prediction: Palantir Stock Will Drop to This Price After Aug. 3",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d28b8dc49f813352311f8ba80eed3e67f1a208412b19a94fb6ab03a79481a23c",
        "datetime": 1785049920
      },
      {
        "headline": "David Sacks Warns Anthropic Doesn't Want Competition: 'You're Going to Basically Put a Dagger Through the Heart of the Entire American Open Source Ecosystem'",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=1900d56a27b52ed575e8ea761b685e1a449bd48d0c1c96abfe647948ee4ea376",
        "datetime": 1785041168
      },
      {
        "headline": "Investors Are Debating Which Stocks They'd Never Buy, No Matter How Bullish Everyone Else Is. 'Money Is Money, But…'",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=30914d5633f6682dd7d41cf74142fd8745619e9476ee29e83cedeb8859f4a8e3",
        "datetime": 1785006025
      },
      {
        "headline": "Why Palantir Investors Aren't Panicking While the Rest of AI Sells Off",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=52a1321836d3628bb1381f85306773ec9a66baa2126bca17c27ed4aa2bcef084",
        "datetime": 1784980500
      }
    ],
    "_fetched_at": 1785119609.9989374,
    "_updated_label": "2026-07-27 11:33"
  },
  "QCOM": {
    "nextEarnings": {
      "date": "2026-07-29",
      "hour": "amc",
      "epsEstimate": 2.2708
    },
    "news": [
      {
        "headline": "Tracking Philippe Laffont's Coatue Management Portfolio - Q1 2026 Update",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=4fe04410f66bb01acca10220d74f89f605accd25abe2d29cb8082c3a7594de57",
        "datetime": 1785095093
      },
      {
        "headline": "Here's Why Qualcomm Is Still Overlooked vs. Nvidia and Intel",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8d698e37a3e5b1d45010feb9f3677e325326cd8f25ce74ef26c5ca79fd03bd65",
        "datetime": 1785087300
      },
      {
        "headline": "Earnings Volatility Watch: 12 Stocks With Double-Digit Implied Moves This Week",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=311932cac57a427174119777bdc64152d87f55570840778cb9388262d9f662eb",
        "datetime": 1785054623
      },
      {
        "headline": "Wall Street Week Ahead",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=aa93f6b650dcda9f8826f3f7390c5a02e2548ec74e81335b1ebe7541cf3f7d9d",
        "datetime": 1785048021
      },
      {
        "headline": "No Matter Who Wins the Smartphone and AI Chip Races, ARM Stock Still Benefits",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c95eee477a2ef9ad701d23f5e340030011c7c3e22c147178b7e81d4b2583ff14",
        "datetime": 1785007802
      }
    ],
    "_fetched_at": 1785119609.9989374,
    "_updated_label": "2026-07-27 11:33"
  },
  "ARM": {
    "nextEarnings": {
      "date": "2026-07-29",
      "hour": "amc",
      "epsEstimate": 0.4055
    },
    "news": [
      {
        "headline": "Tracking Philippe Laffont's Coatue Management Portfolio - Q1 2026 Update",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=4fe04410f66bb01acca10220d74f89f605accd25abe2d29cb8082c3a7594de57",
        "datetime": 1785095093
      },
      {
        "headline": "Earnings Volatility Watch: 12 Stocks With Double-Digit Implied Moves This Week",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=311932cac57a427174119777bdc64152d87f55570840778cb9388262d9f662eb",
        "datetime": 1785054623
      },
      {
        "headline": "Wall Street Week Ahead",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=aa93f6b650dcda9f8826f3f7390c5a02e2548ec74e81335b1ebe7541cf3f7d9d",
        "datetime": 1785048021
      },
      {
        "headline": "No Matter Who Wins the Smartphone and AI Chip Races, ARM Stock Still Benefits",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c95eee477a2ef9ad701d23f5e340030011c7c3e22c147178b7e81d4b2583ff14",
        "datetime": 1785007802
      },
      {
        "headline": "Arm Just Scored a Major Server Market Share Win. What That Means for ARM Stock Here.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b711dc7ab117395eb38225d89211d42681cb489e3c96bed532030b6efe68d5bd",
        "datetime": 1784988002
      }
    ],
    "_fetched_at": 1785119609.9989374,
    "_updated_label": "2026-07-27 11:33"
  },
  "MRVL": {
    "nextEarnings": {
      "date": "2026-08-20",
      "hour": "",
      "epsEstimate": 0.939
    },
    "news": [
      {
        "headline": "Marvell Technology vs. UiPath: What Do the Quarterly Revenue Trends of These Artificial Intelligence Companies Tell Investors?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b3608810f0bb1cef3bc969b8ceaa70eed7079259a965fdfff07705cfcdd9d93d",
        "datetime": 1785099481
      },
      {
        "headline": "Down 34% From Its Highs, Is Marvell Technology a Buy on the Dip?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=00bf3649ba8c4cee73b1d6ef1b5abd9e51eca5d403944bec0f7a7b5ed0ed67c5",
        "datetime": 1784962200
      },
      {
        "headline": "Lattice Semiconductor, Allegro MicroSystems, Monolithic Power Systems, Marvell Technology, and MACOM Shares Are Falling, What You Need To Know",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=32648a9932ff28890f3ddace482579ddccf73270cf715cf2459912ad29942b6a",
        "datetime": 1784931908
      },
      {
        "headline": "Marvell Technology (MRVL) Stock Declines While Market Improves: Some Information for Investors",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=55e630437ada4d8c3a856b4cdafcb59cc91373f789a6bb7e33c359ee08595f30",
        "datetime": 1784929504
      },
      {
        "headline": "MRVL Has Momentum. The Question Is The Price",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6120d5ab14b1aa2b05ea68602aa178e15a0bd22d9e860b5b004081ce93b30b53",
        "datetime": 1784927684
      }
    ],
    "_fetched_at": 1785119609.9989374,
    "_updated_label": "2026-07-27 11:33"
  },
  "ASML": {
    "nextEarnings": {
      "date": "2026-10-14",
      "hour": "bmo",
      "epsEstimate": 8.4462
    },
    "news": [
      {
        "headline": "Tracking Philippe Laffont's Coatue Management Portfolio - Q1 2026 Update",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=4fe04410f66bb01acca10220d74f89f605accd25abe2d29cb8082c3a7594de57",
        "datetime": 1785095093
      },
      {
        "headline": "Can ASML Holding (NasdaqGS:ASML) Stay Reasonably Priced After Its 150% Run?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8b2ce21e77781fee267ef0cbf819e6c0a216abb51a5abbb707c8682e7d2978cb",
        "datetime": 1784977763
      },
      {
        "headline": "ASML Holding (NASDAQ:ASML) Shows High Growth Momentum and Technical Strength",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=2b7e426a58d3305080e851afd16aefa55ac24f6fb55dcc2b4cf2db9e0866b7d0",
        "datetime": 1784966455
      },
      {
        "headline": "LRCX Poised for a Q4 Earnings Surprise: Should You Buy the Stock Now?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=eef50845342d98b975c7facbc2c78dd865fc9a3c0f5f1c2af92be436b610aa6b",
        "datetime": 1784897040
      },
      {
        "headline": "TSMC: Robust Margins, Strong Guidance, The Market Is Getting Out Of Hand Here",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=97342a8be84b91be80df8d47beb935ad04cd1c4502aed193b57eb57cd95cf937",
        "datetime": 1784878200
      }
    ],
    "_fetched_at": 1785119609.9989374,
    "_updated_label": "2026-07-27 11:33"
  },
  "LRCX": {
    "nextEarnings": {
      "date": "2026-07-29",
      "hour": "amc",
      "epsEstimate": 1.7108
    },
    "news": [
      {
        "headline": "Tracking Philippe Laffont's Coatue Management Portfolio - Q1 2026 Update",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=4fe04410f66bb01acca10220d74f89f605accd25abe2d29cb8082c3a7594de57",
        "datetime": 1785095093
      },
      {
        "headline": "Earnings Volatility Watch: 12 Stocks With Double-Digit Implied Moves This Week",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=311932cac57a427174119777bdc64152d87f55570840778cb9388262d9f662eb",
        "datetime": 1785054623
      },
      {
        "headline": "After a 22% Pullback, Semiconductor Equipment Stocks Face a Pivotal Earnings Test",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=9ae778ae62a48666a4757d36d344ae3c55b86a9bd2398bb583700b9f36d5989f",
        "datetime": 1784981164
      },
      {
        "headline": "Lam Research's Q4 2026 Earnings As A Leading Indicator For IREN's August Print",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=2cb54903fee29ffda5ab6cbe2fee42e80c2d8a8b17657551bfd66746fd9c7022",
        "datetime": 1784940300
      },
      {
        "headline": "10 Information Technology Stocks Whale Activity In Today’s Session",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=bb8c19ab4a0bcc9928510750068a4d6b634e4fa5ee118aeda1be64d6f234df8d",
        "datetime": 1784900131
      }
    ],
    "_fetched_at": 1785119609.9989374,
    "_updated_label": "2026-07-27 11:33"
  },
  "KLAC": {
    "nextEarnings": {
      "date": "2026-07-28",
      "hour": "amc",
      "epsEstimate": 1.0166
    },
    "news": [
      {
        "headline": "Earnings Volatility Watch: 12 Stocks With Double-Digit Implied Moves This Week",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=311932cac57a427174119777bdc64152d87f55570840778cb9388262d9f662eb",
        "datetime": 1785054623
      },
      {
        "headline": "After a 22% Pullback, Semiconductor Equipment Stocks Face a Pivotal Earnings Test",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=9ae778ae62a48666a4757d36d344ae3c55b86a9bd2398bb583700b9f36d5989f",
        "datetime": 1784981164
      },
      {
        "headline": "KLA's Q4 Earnings Loom: Buy, Sell or Hold the KLAC Stock?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=43b06a589a54d6e311bb03ff46ce9a653005fe9a4d75ee03d6241d6fb4acb7a5",
        "datetime": 1784906040
      },
      {
        "headline": "LRCX Poised for a Q4 Earnings Surprise: Should You Buy the Stock Now?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=eef50845342d98b975c7facbc2c78dd865fc9a3c0f5f1c2af92be436b610aa6b",
        "datetime": 1784897040
      },
      {
        "headline": "KLA Corporation: A Peep At Semi Value Chain Peers Ahead Of Earnings",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=bbee080c1cd24d0378136efeda57673e1773cf2c90919dff9bd1ed8bf9e1b03a",
        "datetime": 1784880000
      }
    ],
    "_fetched_at": 1785119609.9989374,
    "_updated_label": "2026-07-27 11:33"
  },
  "SNDK": {
    "nextEarnings": {
      "date": "2026-08-05",
      "hour": "",
      "epsEstimate": 34.7802
    },
    "news": [
      {
        "headline": "Micron vs. Sandisk: Which Stock Is the Better Buy for the Memory Boom?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=aa34d893a6a6719a9ec41342809c23aeb5e01ba8cf91d94376b19e9ed1ff525b",
        "datetime": 1785087780
      },
      {
        "headline": "'The AI trade is still on': Wall Street sees Big Tech's spending as positive for semiconductor stocks",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=798110ce4ce84c4a563f40e111f4ba4fd167019eb13dcd61f40c27850899c110",
        "datetime": 1785067856
      },
      {
        "headline": "Should You Buy Sandisk Stock Before It Reports Earnings on Aug. 5?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6bc1d84411d39b727f02aa1a86ab55aee933872be490c0ab935c47b2be9e7b9a",
        "datetime": 1785058500
      },
      {
        "headline": "RPG: Pure Momentum, Not Pure Growth, Is Driving This Year's Exceptional Gains",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=bcca74dc2a54d1fb024472418762c413b3fcb91ff517f4cc18d9984ecb992063",
        "datetime": 1785020100
      },
      {
        "headline": "Micron Stuck in a Bear Market: Will it Rebound or Crash Further?",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=de492d8f1ad37a9b7b7dbd431222f37538c9d82c7f1677d3be81a57651e5a13a",
        "datetime": 1784990596
      }
    ],
    "_fetched_at": 1785119609.9989374,
    "_updated_label": "2026-07-27 11:33"
  },
  "WDC": {
    "nextEarnings": {
      "date": "2026-08-05",
      "hour": "amc",
      "epsEstimate": 3.3281
    },
    "news": [
      {
        "headline": "3 Reasons Seagate Technology Could Be Worth a Closer Look Ahead of July 28 Earnings",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=589727b35300343df06d2dc90197dbce77fe68c91fc654bd31465cbad75656bc",
        "datetime": 1784992828
      },
      {
        "headline": "Micron Stuck in a Bear Market: Will it Rebound or Crash Further?",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=de492d8f1ad37a9b7b7dbd431222f37538c9d82c7f1677d3be81a57651e5a13a",
        "datetime": 1784990596
      },
      {
        "headline": "Western Digital Corporation (NASDAQ:WDC) Got Lucky While Micron’s The Real Deal, Says Jim Cramer",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c44c1710cee4cdcca909985f36f5eb8c2cf2bd6e3eb49b5a42c75c71204a5c7d",
        "datetime": 1784966529
      },
      {
        "headline": "Micron, onsemi, Seagate, Western Digital, and Vishay Intertechnology Shares Are Falling, What You Need To Know",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c486ff26da317fb27e29befed39bc4e69b9578804561899f90ffa86aa55375f8",
        "datetime": 1784930948
      },
      {
        "headline": "Why Tesla, Google, and other Mag 7 stocks are losing billions in valuation",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e99ad6f3302defb96151305659aa18eb53a8b41195c37d4162628dff3748a4fa",
        "datetime": 1784923243
      }
    ],
    "_fetched_at": 1785119609.9989374,
    "_updated_label": "2026-07-27 11:34"
  }
};
