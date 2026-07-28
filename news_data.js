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
        "headline": "Stay informed about the most active stocks in the S&P500 index on Tuesday's session.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=42a04131518639f653138cdddc22ea81e65eea6d66025b178eee6c2d09475c5d",
        "datetime": 1785261902
      },
      {
        "headline": "Check out the stocks that are attracting the most attention and driving market activity.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=fe1aa94d8dbfe291a11e98ec327f86b30b74937a398191a2d14cccfc84e00bd2",
        "datetime": 1785261600
      },
      {
        "headline": "IQVIA Holdings Inc. Q2 2026 Earnings Call Summary",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f8d3fbd852b3bfed4a2c538219c114f034c4a26df4a26adfcc8c7aeba5db644d",
        "datetime": 1785260945
      },
      {
        "headline": "Prediction: Nvidia-SK Hynix Partnership Will Make Both Stocks Big Winners",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=87d2210caf097bbd12950ba848e17ebd67b708a1d635bed9170a20d5574f8719",
        "datetime": 1785260820
      },
      {
        "headline": "Axalta Coating Systems Ltd. Q2 2026 Earnings Call Summary",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=387469155d682b1b8c935455c26daa43cd31ece22a290ab232c4c6e4d6f12c56",
        "datetime": 1785260735
      }
    ],
    "_fetched_at": 1785265235.4776323,
    "_updated_label": "2026-07-29 04:01"
  },
  "AAPL": {
    "nextEarnings": {
      "date": "2026-07-30",
      "hour": "amc",
      "epsEstimate": 1.9271
    },
    "news": [
      {
        "headline": "Stay informed about the most active stocks in the S&P500 index on Tuesday's session.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=42a04131518639f653138cdddc22ea81e65eea6d66025b178eee6c2d09475c5d",
        "datetime": 1785261902
      },
      {
        "headline": "Cadence Stock Jumps 5% as AI Chip Demand Lifts Forecast",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=336369d23b40974d93787953534a8602afab3dbd6ab11a7758a041d0c875275c",
        "datetime": 1785260590
      },
      {
        "headline": "The $5 Trillion Question: Does Apple or Nvidia Maintain The Highest Market Cap?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2f9b9fc3646b49fa15e8510efb3f05114bb24d9ac17e75e49692801782d29e8f",
        "datetime": 1785259742
      },
      {
        "headline": "Apple faces lawsuit over alleged Bitcoin scam",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ee188a82e959b9b193befa70b57bf6da3779ac77274a48d0eaddcbb74f78bd64",
        "datetime": 1785257545
      },
      {
        "headline": "Apple briefly hits $5 trillion market cap, second ever after Nvidia",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3c4952fb8c3a1e5f42af6ab152125d46f8d4386765ecdc321b7c41ee55f34759",
        "datetime": 1785257308
      }
    ],
    "_fetched_at": 1785265235.4776323,
    "_updated_label": "2026-07-29 04:01"
  },
  "GOOGL": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "amc",
      "epsEstimate": 3.0988
    },
    "news": [
      {
        "headline": "Wall Street just drew a sharper line between Tesla, Alphabet",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4115b7a60da25877e5bbce04dc1bf47ad778fd9235c308e5f2399ba729866d6c",
        "datetime": 1785260820
      },
      {
        "headline": "MarketRank Names Ryze AI the Best AI Tool for Managing Google and Meta Ads in 2026",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6fd5635cf87cb0053cf3dfd8c22825e4872c85faeb437776bc75c71ef6fbbb48",
        "datetime": 1785260640
      },
      {
        "headline": "Top analyst revamps Google stock price target on key move",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b76d7715b70df1522ddc4017da69f6b6dcb7f27934986ceaefee634c51e7fb25",
        "datetime": 1785258420
      },
      {
        "headline": "How To Bank 12% On IBM Stock Before Buying A Single Share",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=174b79228409e828cee14c68bfd10629fe7cd9d6d86249a6391f4b6456a467a3",
        "datetime": 1785257781
      },
      {
        "headline": "Meta Platforms Bets Big on AI Data Centers: Is More Growth Ahead?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a5e24724fb09c1c537ca22e8fcf54b480cabda1ac9dd2cc2bd40b7ff9a2ace64",
        "datetime": 1785257220
      }
    ],
    "_fetched_at": 1785265235.4776323,
    "_updated_label": "2026-07-29 04:00"
  },
  "MSFT": {
    "nextEarnings": {
      "date": "2026-07-29",
      "hour": "amc",
      "epsEstimate": 4.3274
    },
    "news": [
      {
        "headline": "Sector Update: Tech Stocks Fall Tuesday Afternoon",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fd1f352b01c3cbc7c4466c871c7f713edc7ed02858e9114306cf1e0c28dd8c13",
        "datetime": 1785260068
      },
      {
        "headline": "Broadvoice Launches GoContact Integration for Microsoft Dynamics 365",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=97c7383ef31239c550f8340373e287a8cd948f9d2d714583deafabca434167e0",
        "datetime": 1785259500
      },
      {
        "headline": "Next Level Solutions Selected by Safepoint MGA to Deliver New Customer Self-Service Portal",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4ae7e07d26dbe742ec0a1e6383db605837a51ef43cbff7f1df4202515d8e96a2",
        "datetime": 1785259380
      },
      {
        "headline": "How To Bank 12% On IBM Stock Before Buying A Single Share",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=174b79228409e828cee14c68bfd10629fe7cd9d6d86249a6391f4b6456a467a3",
        "datetime": 1785257781
      },
      {
        "headline": "Exploring the top movers within the dow jones index during today's session.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=ef5f0544f165f1eb4c081c488dfeb854ae72ad9d95b9677df73f68899768b046",
        "datetime": 1785256804
      }
    ],
    "_fetched_at": 1785265235.4776323,
    "_updated_label": "2026-07-29 04:00"
  },
  "AMZN": {
    "nextEarnings": {
      "date": "2026-07-30",
      "hour": "amc",
      "epsEstimate": 1.8556
    },
    "news": [
      {
        "headline": "Amazon Overhauls AI Strategy as Flagship Nova Models Wind Down",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cbe58bc1eb6064034e86c78977330990e136b9eedef7677053a5dcc9ac561f7d",
        "datetime": 1785260653
      },
      {
        "headline": "Corning Stock Plunges 16% as Fiber Growth Slows",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d1c4d2922b9cc45b599e0cf1c30429b1018758b244a3f90c17f6a686f835fd41",
        "datetime": 1785260552
      },
      {
        "headline": "UPS Beats on Everything... Except the Part That Matters to Investors",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ff182488c91a44cc557a340498ff7ebcdca4cd44ea830ff3d04bd65b886fe4ad",
        "datetime": 1785260514
      },
      {
        "headline": "Sector Update: Tech Stocks Fall Tuesday Afternoon",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fd1f352b01c3cbc7c4466c871c7f713edc7ed02858e9114306cf1e0c28dd8c13",
        "datetime": 1785260068
      },
      {
        "headline": "Amazon Is Rethinking Its Biggest AI Bet",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=da839204c0d48c15ace6d6c5cf71f7492ebc98aae730879740411e37c48babe5",
        "datetime": 1785259588
      }
    ],
    "_fetched_at": 1785265235.4776323,
    "_updated_label": "2026-07-29 04:01"
  },
  "TSM": {
    "nextEarnings": {
      "date": "2026-10-14",
      "hour": "amc",
      "epsEstimate": 28.6598
    },
    "news": [
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
      },
      {
        "headline": "TSMC Says All Personnel At Its Kumamoto Site Have Been Confirmed Safe; Says Post-Earthquake Structural Inspections Have Been Completed, Confirming Its Structures Are Safe, And Operations Are Gradually",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=dc89aa4588f760efb83def0cc1f69959ddf33167ddae5ba151c9ddda4d574eea",
        "datetime": 1785231396
      },
      {
        "headline": "Nvidia Stock Is Stagnating -- But The Fundamentals Aren't",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=53d1e0c8906efc2e2b3950d0ffb19298f52b2fff7e08e139b9686387b8826144",
        "datetime": 1785229872
      },
      {
        "headline": "Record Backlog, Bigger Outlook: Cadence Rides AI Wave to Blowout Quarter",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=af6639057b90d79125b93a0b022206d036b2c49eaea602f5d3082ae2c8a1bbda",
        "datetime": 1785225627
      }
    ],
    "_fetched_at": 1785265235.4776323,
    "_updated_label": "2026-07-29 04:01"
  },
  "AVGO": {
    "nextEarnings": {
      "date": "2026-09-02",
      "hour": "amc",
      "epsEstimate": 3.3012
    },
    "news": [
      {
        "headline": "Prediction: This ‘Boring’ Dividend ETF Secretly Rides the AI Trade and Out-Earns Your High-Yield Fund by 2036",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d30853e65c00378415d30d59a5967ff2f900939f6907ae3ee97252353d3efa08",
        "datetime": 1785254149
      },
      {
        "headline": "AMD Sinks 8%, Marvell Sinks 7%, Intel Fall 6% as AI Chip Trade Narrows to NVIDIA",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=37fae0e763c35d3d7a71eaa6f4bb2ba0eb9cca015c0fd4ed8b877b31c261b485",
        "datetime": 1785252523
      },
      {
        "headline": "Broadcom Stock Yields Just 0.68%. But the Dividend Has Seen Explosive Growth",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=dc84f31152113b0e1dd4b2ee43da324a1e4a6c1e246a6a5998eeadd2a5efa120",
        "datetime": 1785250440
      },
      {
        "headline": "What You're Really Paying For Broadcom Stock",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1122569073d2d9e7320fb792b00f5fb4f37ff932b526b8ada3cc0a40b5538b5d",
        "datetime": 1785249453
      },
      {
        "headline": "This Chip ETF Just Pulled Off a Historic 2026 While Nvidia Stumbled",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=bd37db10c4dd640679da2df59d92e2fddfb662f7c00ed7ba4737ac9fcc717ddd",
        "datetime": 1785248144
      }
    ],
    "_fetched_at": 1785265235.4776323,
    "_updated_label": "2026-07-29 04:01"
  },
  "META": {
    "nextEarnings": {
      "date": "2026-07-29",
      "hour": "amc",
      "epsEstimate": 7.3594
    },
    "news": [
      {
        "headline": "MarketRank Names Ryze AI the Best AI Tool for Managing Google and Meta Ads in 2026",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6fd5635cf87cb0053cf3dfd8c22825e4872c85faeb437776bc75c71ef6fbbb48",
        "datetime": 1785260640
      },
      {
        "headline": "Sector Update: Tech Stocks Fall Tuesday Afternoon",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fd1f352b01c3cbc7c4466c871c7f713edc7ed02858e9114306cf1e0c28dd8c13",
        "datetime": 1785260068
      },
      {
        "headline": "Meta's $14 Billion AI Move Comes With a Twist",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=860190af42ea03e5181c5ea95d6b95828b11ff2ce65fa6fad4abeef8a5036920",
        "datetime": 1785259463
      },
      {
        "headline": "Meta Platforms Bets Big on AI Data Centers: Is More Growth Ahead?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a5e24724fb09c1c537ca22e8fcf54b480cabda1ac9dd2cc2bd40b7ff9a2ace64",
        "datetime": 1785257220
      },
      {
        "headline": "Meta, BlackRock form $14 billion venture to develop AI data center campus in Texas",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a09e8a6be6772c08d131a76f15234b6dfcbed097bf028ddeafb5c8b3947915bf",
        "datetime": 1785256620
      }
    ],
    "_fetched_at": 1785265235.4776323,
    "_updated_label": "2026-07-29 04:01"
  },
  "TSLA": {
    "nextEarnings": {
      "date": "2026-10-20",
      "hour": "amc",
      "epsEstimate": 0.4684
    },
    "news": [
      {
        "headline": "Stay informed about the most active stocks in the S&P500 index on Tuesday's session.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=42a04131518639f653138cdddc22ea81e65eea6d66025b178eee6c2d09475c5d",
        "datetime": 1785261902
      },
      {
        "headline": "Wall Street just drew a sharper line between Tesla, Alphabet",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4115b7a60da25877e5bbce04dc1bf47ad778fd9235c308e5f2399ba729866d6c",
        "datetime": 1785260820
      },
      {
        "headline": "Elon Musk warns America will 1,000% go bankrupt and fail as a country",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0c04bac161e3d2a0e2f6dc1be10478e663ad46ead70b17442c87835dc2f13b06",
        "datetime": 1785259527
      },
      {
        "headline": "Is This Wall Street Bank Insane to Believe Tesla Will Nearly Double From Current Prices? Maybe Not.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b26cec47787fedf792306f5bc07d258bedec4530b6e8cb7a93b729cbd2a9c715",
        "datetime": 1785256917
      },
      {
        "headline": "Cathie Wood Buys the Tesla Dip Again With $23 Million Bet on AI Future",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=55b8a222690b920de4fb78157e109e280df5c34fda9ebd1099cfda082cff808f",
        "datetime": 1785256275
      }
    ],
    "_fetched_at": 1785265235.4776323,
    "_updated_label": "2026-07-29 04:01"
  },
  "MU": {
    "nextEarnings": {
      "date": "2026-09-21",
      "hour": "amc",
      "epsEstimate": 32.2476
    },
    "news": [
      {
        "headline": "Stay informed about the most active stocks in the S&P500 index on Tuesday's session.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=42a04131518639f653138cdddc22ea81e65eea6d66025b178eee6c2d09475c5d",
        "datetime": 1785261902
      },
      {
        "headline": "Stock Market Today: Dow Leaps 650 Points; Apple Joins Nvidia In Historic Move (Live Coverage)",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=44f0b6488c2431ad857a009c7c930d70db53627590db7ff2e28882726bf194aa",
        "datetime": 1785260386
      },
      {
        "headline": "Tuesday's session: top gainers and losers in the S&P500 index",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=d914c07964c6e02bbb3d0f3dab99f42869b3f4d48013c90488f66bd1641dc6d2",
        "datetime": 1785256501
      },
      {
        "headline": "CME launches 23-hour single-stock futures to trade stocks like SpaceX, Micron",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7763ad0fc93308225741437d48ced364217989ece74fb9fa1cd1ea3f8b0a0aa0",
        "datetime": 1785256200
      },
      {
        "headline": "NVIDIA CEO Jensen Huang Says the ‘ChatGPT Moment’ Has Already Happened for the Next $50 Trillion Trend",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=360ba0d051ce23933f238255f883487af62a2913de02299eac2bbc9171a258f1",
        "datetime": 1785255058
      }
    ],
    "_fetched_at": 1785265235.4776323,
    "_updated_label": "2026-07-29 04:02"
  },
  "AMD": {
    "nextEarnings": {
      "date": "2026-08-04",
      "hour": "amc",
      "epsEstimate": 1.6291
    },
    "news": [
      {
        "headline": "Can Intel's Advanced Packaging Tie-Up With Lens Technology Aid Shares?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=776c111104cd6b9d32b2ae46c5330c143a2465657a435141f252603be8b5a03f",
        "datetime": 1785256380
      },
      {
        "headline": "AMD Sinks 8%, Marvell Sinks 7%, Intel Fall 6% as AI Chip Trade Narrows to NVIDIA",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=37fae0e763c35d3d7a71eaa6f4bb2ba0eb9cca015c0fd4ed8b877b31c261b485",
        "datetime": 1785252523
      },
      {
        "headline": "MU, AMD, INTC, SNDK Stocks Fall — Morgan Stanley's Mike Wilson Explains Why Investors Are Going After Chip And Memory Stocks",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=608f1e9e8a65a27dc48c915ac506f81bf2f88e4ca20b199a46856ed0688d550e",
        "datetime": 1785250365
      },
      {
        "headline": "The Market Lost Its Mind, But You Shouldn't",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=cbf2f84de79b6e5d3ee85ecdf7cabb574b0fa719bc495c30c5f85185290bcb8b",
        "datetime": 1785249953
      },
      {
        "headline": "What You're Really Paying For Broadcom Stock",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1122569073d2d9e7320fb792b00f5fb4f37ff932b526b8ada3cc0a40b5538b5d",
        "datetime": 1785249453
      }
    ],
    "_fetched_at": 1785265235.4776323,
    "_updated_label": "2026-07-29 04:01"
  },
  "INTC": {
    "nextEarnings": {
      "date": "2026-10-21",
      "hour": "amc",
      "epsEstimate": 0.3736
    },
    "news": [
      {
        "headline": "Stay informed about the most active stocks in the S&P500 index on Tuesday's session.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=42a04131518639f653138cdddc22ea81e65eea6d66025b178eee6c2d09475c5d",
        "datetime": 1785261902
      },
      {
        "headline": "Check out the stocks that are attracting the most attention and driving market activity.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=fe1aa94d8dbfe291a11e98ec327f86b30b74937a398191a2d14cccfc84e00bd2",
        "datetime": 1785261600
      },
      {
        "headline": "Intel (INTC) Stock Sees Fair Value Lift After Q2 Beat And AI Demand Strength￼",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5e6f3d62cd5ebc1190bb96a181ead959ef0d5977da3e0f31a87833f7804bec1c",
        "datetime": 1785258498
      },
      {
        "headline": "Can Intel's Advanced Packaging Tie-Up With Lens Technology Aid Shares?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=776c111104cd6b9d32b2ae46c5330c143a2465657a435141f252603be8b5a03f",
        "datetime": 1785256380
      },
      {
        "headline": "Visa Announces Layoffs Ahead of Earnings as AI and Restructuring Accelerate",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ccc2a840b5daf10b7448e17a34e42d5022f6149a48a8866d9030e9c763529702",
        "datetime": 1785254880
      }
    ],
    "_fetched_at": 1785265235.4776323,
    "_updated_label": "2026-07-29 04:01"
  },
  "AMAT": {
    "nextEarnings": {
      "date": "2026-08-13",
      "hour": "amc",
      "epsEstimate": 3.462
    },
    "news": [
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
      },
      {
        "headline": "Applied Digital Q4 Earnings Beat Estimates, Revenues Rise Y/Y",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f406eb30620c8182c1627aefbd992e7ca329cda24ec726df55c820c4dac1deab",
        "datetime": 1785250560
      },
      {
        "headline": "Amkor Technology Q2 Earnings Beat Estimates, Revenues Rise Y/Y",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8c97afade4511611664c988154eacf62d7094e3a2f1d3dbbef14eb8290abfcfa",
        "datetime": 1785248400
      },
      {
        "headline": "Applied Materials (AMAT) Rose on AI-Driven Wafer Fabrication Spending",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c7eeb6cef9f4a3f48daee6260053ef6f6b27b9766eb0323e1252e67507239f7d",
        "datetime": 1785245454
      }
    ],
    "_fetched_at": 1785265235.4776323,
    "_updated_label": "2026-07-29 04:02"
  },
  "QQQ": {
    "nextEarnings": null,
    "news": [
      {
        "headline": "The Market Lost Its Mind, But You Shouldn't",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=cbf2f84de79b6e5d3ee85ecdf7cabb574b0fa719bc495c30c5f85185290bcb8b",
        "datetime": 1785249953
      },
      {
        "headline": "Meta Platforms Q2 Preview: Key Items to Watch to Turn Stock Around After Earnings",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=27de350bccc6702115583f9204106cebe9896b7067293e012f7c71313b92c33c",
        "datetime": 1785246736
      },
      {
        "headline": "The Fed Is Expected To Hold Rates - The Rules Say It Shouldn't",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=ab4c1a18b8e2ee7ed86e61e0d1236353c1db986d4df0c733e87ebec5f279e82b",
        "datetime": 1785246000
      },
      {
        "headline": "Nasdaq 100 Enters Correction, SanDisk Sinks Over 50% From Peak: Stock Market Today",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=3c4f2118fecab317dd2f02063642b4d41f4475fd1d3ee559a5000ef9c79f2978",
        "datetime": 1785244866
      },
      {
        "headline": "6 Catalysts That Might Pop The AI Bubble",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=e252009570e04de8fda282c8ee6707568119d13c5a4c3828c86fc93634033727",
        "datetime": 1785244247
      }
    ],
    "_fetched_at": 1785265235.4776323,
    "_updated_label": "2026-07-29 04:00"
  },
  "SPY": {
    "nextEarnings": null,
    "news": [
      {
        "headline": "A Goldman Economist Says AI Will Take 15 Years to Show Up in the Economy. A 63-Year-Old Banking His Nest Egg on the AI Boom Should Listen.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1bb4cd03d99e1a7189d60c93348fc581594cb3a488ef2fb9ee03ba230b9f2f3c",
        "datetime": 1785258083
      },
      {
        "headline": "Is This Wall Street Bank Insane to Believe Tesla Will Nearly Double From Current Prices? Maybe Not.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b26cec47787fedf792306f5bc07d258bedec4530b6e8cb7a93b729cbd2a9c715",
        "datetime": 1785256917
      },
      {
        "headline": "Prediction: This ‘Boring’ Dividend ETF Secretly Rides the AI Trade and Out-Earns Your High-Yield Fund by 2036",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d30853e65c00378415d30d59a5967ff2f900939f6907ae3ee97252353d3efa08",
        "datetime": 1785254149
      },
      {
        "headline": "How Much Of Your Portfolio Is Really Apple (AAPL)?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=96ae5434e46aedd03b08d90da41f3316f2620bd7f9a1d30e6443cd81c8d77ac0",
        "datetime": 1785253217
      },
      {
        "headline": "The Market Lost Its Mind, But You Shouldn't",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=cbf2f84de79b6e5d3ee85ecdf7cabb574b0fa719bc495c30c5f85185290bcb8b",
        "datetime": 1785249953
      }
    ],
    "_fetched_at": 1785265235.4776323,
    "_updated_label": "2026-07-29 04:00"
  },
  "ORCL": {
    "nextEarnings": {
      "date": "2026-09-07",
      "hour": "",
      "epsEstimate": 1.7745
    },
    "news": [
      {
        "headline": "How To Bank 12% On IBM Stock Before Buying A Single Share",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=174b79228409e828cee14c68bfd10629fe7cd9d6d86249a6391f4b6456a467a3",
        "datetime": 1785257781
      },
      {
        "headline": "Cameron Winklevoss Pushes 2 Cryptos as AI Trade Rout Sinks Kospi 11%",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c1f1ff16d7f91b9b660da350f5a547de0f843bfa3cae2403ef96e43a69d2662e",
        "datetime": 1785257472
      },
      {
        "headline": "Amazon Before Q2 Earnings: Buy the Stock Now or Wait for Results?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=333771347760fea1727fc018f0697cf5033af1d7199ac85fcda2f2727c0849dc",
        "datetime": 1785257220
      },
      {
        "headline": "Oracle vs. Alibaba: Which Cloud & AI Giant Should You Buy Right Now?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=849eeea2b9c7376657b1b36dfe12c265b3c49827efa0869306b5491ca57d00dc",
        "datetime": 1785257040
      },
      {
        "headline": "How SAP's AI and Cloud Strategy Is Reshaping Its Growth Outlook Now",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ddfdfdeff954f4e64b3b73bc06842e92b0537b343c9b7d75b1306c80808cf866",
        "datetime": 1785253800
      }
    ],
    "_fetched_at": 1785265235.4776323,
    "_updated_label": "2026-07-29 04:01"
  },
  "CRM": {
    "nextEarnings": {
      "date": "2026-09-01",
      "hour": "amc",
      "epsEstimate": 3.3057
    },
    "news": [
      {
        "headline": "Dow Jones rises 659 points on Coca-Cola, Sherwin-Williams earnings",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2116afc53882eb16d0c50b444a6294a6c3288d93de1fcfe5a7d33c4856eedb14",
        "datetime": 1785258228
      },
      {
        "headline": "Exploring the top movers within the dow jones index during today's session.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=ef5f0544f165f1eb4c081c488dfeb854ae72ad9d95b9677df73f68899768b046",
        "datetime": 1785256804
      },
      {
        "headline": "How SAP's AI and Cloud Strategy Is Reshaping Its Growth Outlook Now",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ddfdfdeff954f4e64b3b73bc06842e92b0537b343c9b7d75b1306c80808cf866",
        "datetime": 1785253800
      },
      {
        "headline": "How SAP Is Riding the Enterprise Shift Toward Agentic AI & Cloud ERP",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ff6cfaa25e990c5f8985f1e712636070f82629b8363175912c080725c583da7c",
        "datetime": 1785253140
      },
      {
        "headline": "Salesforce’s (CRM) Impact on AI Deployment in Corporate Environments",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ac334719fd7e13d5de881151b92900a5974ebd22a513a69297486b52ebadd1be",
        "datetime": 1785252739
      }
    ],
    "_fetched_at": 1785265235.4776323,
    "_updated_label": "2026-07-29 04:01"
  },
  "PLTR": {
    "nextEarnings": {
      "date": "2026-08-03",
      "hour": "amc",
      "epsEstimate": 0.3544
    },
    "news": [
      {
        "headline": "Stay informed about the most active stocks in the S&P500 index on Tuesday's session.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=42a04131518639f653138cdddc22ea81e65eea6d66025b178eee6c2d09475c5d",
        "datetime": 1785261902
      },
      {
        "headline": "Can PLTR Stock Live Up To Its Multiple?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=93d2d7092b3523bf068309f726b924ff1e0141e01fe28fa30a75abc056835c11",
        "datetime": 1785249040
      },
      {
        "headline": "Palantir Technologies Inc. (PLTR) Just Overtook the 20-Day Moving Average",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=99a498c5a99e2eaabbc630389948829f21cefe3ac8a31cdda109dafebb520f2d",
        "datetime": 1785245702
      },
      {
        "headline": "Palantir Technologies Inc. (PLTR) Just Reclaimed the 50-Day Moving Average",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ee56183ad9635f7663bb1b511375a248419e1caf87a79245a0b86fce378a484d",
        "datetime": 1785245401
      },
      {
        "headline": "Palantir Seen Crushing Q2 Estimates and Raising 2026 Outlook",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d7073053d4bfde177ba2191e268f31ad7b094f7c499f9eb4ee84efad7bc09fef",
        "datetime": 1785241506
      }
    ],
    "_fetched_at": 1785265235.4776323,
    "_updated_label": "2026-07-29 04:01"
  },
  "QCOM": {
    "nextEarnings": {
      "date": "2026-07-29",
      "hour": "amc",
      "epsEstimate": 2.2724
    },
    "news": [
      {
        "headline": "Qualcomm (QCOM) Reports Earnings Tomorrow: What To Expect",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4e80b843a42186b2199acb2d1b5c5276944afa4e62ec9aec3651f7253508fae4",
        "datetime": 1785259022
      },
      {
        "headline": "Can Intel's Advanced Packaging Tie-Up With Lens Technology Aid Shares?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=776c111104cd6b9d32b2ae46c5330c143a2465657a435141f252603be8b5a03f",
        "datetime": 1785256380
      },
      {
        "headline": "Will Qualcomm (QCOM) Beat Estimates Again in Its Next Earnings Report?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c3726ae6742afd3bfc4dd39699be40d7d53614d5c04bc9bfce7f8fc801a8768e",
        "datetime": 1785255001
      },
      {
        "headline": "Qualcomm (QCOM) is Diversifying Beyond Handsets",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1a94810d8bd1628982c8081e30caea7484ef8a17d6e3c1dea825cd8caab99aca",
        "datetime": 1785249814
      },
      {
        "headline": "What You're Really Paying For Broadcom Stock",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1122569073d2d9e7320fb792b00f5fb4f37ff932b526b8ada3cc0a40b5538b5d",
        "datetime": 1785249453
      }
    ],
    "_fetched_at": 1785265235.4776323,
    "_updated_label": "2026-07-29 04:01"
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
    "_fetched_at": 1785265235.4776323,
    "_updated_label": "2026-07-29 04:01"
  },
  "MRVL": {
    "nextEarnings": {
      "date": "2026-08-26",
      "hour": "",
      "epsEstimate": 0.939
    },
    "news": [
      {
        "headline": "Coherent Sinks 11%, Applied Optoelectronics Falls 10%, Lumentum Drops 9% as Traders Question AI Spending Spree",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8c365c1504dc325b8b354a440066f838fc453641aa54395b674b70c45fc62ed2",
        "datetime": 1785255354
      },
      {
        "headline": "AMD Sinks 8%, Marvell Sinks 7%, Intel Fall 6% as AI Chip Trade Narrows to NVIDIA",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=37fae0e763c35d3d7a71eaa6f4bb2ba0eb9cca015c0fd4ed8b877b31c261b485",
        "datetime": 1785252523
      },
      {
        "headline": "What You're Really Paying For Broadcom Stock",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1122569073d2d9e7320fb792b00f5fb4f37ff932b526b8ada3cc0a40b5538b5d",
        "datetime": 1785249453
      },
      {
        "headline": "Corning, ASML, SK Hynix, PayPal, UPS, Coca-Cola, and More Stocks That Explain Today’s Market",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2c22955765a290384aad78f69a57d3a3a4929c942b67332afc05a822e7795f19",
        "datetime": 1785249300
      },
      {
        "headline": "Micron, SK Hynix stocks sink as AI chip sell-off deepens",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=027046537f4153209ad1fedec8c92219123bb609cc80efb974928b60ccf039fc",
        "datetime": 1785243382
      }
    ],
    "_fetched_at": 1785265235.4776323,
    "_updated_label": "2026-07-29 04:01"
  },
  "ASML": {
    "nextEarnings": {
      "date": "2026-10-14",
      "hour": "bmo",
      "epsEstimate": 10.1558
    },
    "news": [
      {
        "headline": "ASML Stock Keeps Sliding On China’s Latest Chip Advance — Why BofA Calls Selloff An ‘Overreaction’ And Sees Over 70% Upside",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=38d7306efddc542034b648ed694c068df83505d08efa771c07bf0ead9c83df8d",
        "datetime": 1785258290
      },
      {
        "headline": "Dow Jones Energy Giant Chevron Eyes Buy Point As Oil Prices Tumble, But ASML Dives Below Key Level",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=313fe986e4edae534cd1e07e2d17b41f9b9c8baab33e61ea8d27d6c95d3c7cd8",
        "datetime": 1785256564
      },
      {
        "headline": "Prediction: ASML Stock Is Going to $3,000 in 3 Years",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e5c784aa4d75887afa03fae2a192db986bb665f870e929ebd959caff798d2647",
        "datetime": 1785251100
      },
      {
        "headline": "China's chip tool push shows ASML caught in US-China squeeze",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0a1d6ca60f03621b17fef9c806c8951c88967a5f2150322d6ee0b57c9ce056ef",
        "datetime": 1785249924
      },
      {
        "headline": "Corning, ASML, SK Hynix, PayPal, UPS, Coca-Cola, and More Stocks That Explain Today’s Market",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2c22955765a290384aad78f69a57d3a3a4929c942b67332afc05a822e7795f19",
        "datetime": 1785249300
      }
    ],
    "_fetched_at": 1785265235.4776323,
    "_updated_label": "2026-07-29 04:01"
  },
  "LRCX": {
    "nextEarnings": {
      "date": "2026-07-29",
      "hour": "amc",
      "epsEstimate": 1.7172
    },
    "news": [
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
        "headline": "These S&P500 stocks are gapping in today's session",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=4def2ebd595d4441db1c358c20ea98221169d771dcb6942e98c2c7ed2cec1c4c",
        "datetime": 1785249301
      },
      {
        "headline": "Lam Research (LRCX) Rose on AI Data Center and Memory Spending",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=523c3f2eb4c983b6641f27a4a383843526ab981db7594371989f838c5442dc14",
        "datetime": 1785247037
      },
      {
        "headline": "Nasdaq 100 Enters Correction, SanDisk Sinks Over 50% From Peak: Stock Market Today",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=3c4f2118fecab317dd2f02063642b4d41f4475fd1d3ee559a5000ef9c79f2978",
        "datetime": 1785244866
      }
    ],
    "_fetched_at": 1785265235.4776323,
    "_updated_label": "2026-07-29 04:02"
  },
  "KLAC": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "",
      "epsEstimate": 1.1541
    },
    "news": [
      {
        "headline": "Nasdaq 100 Enters Correction, SanDisk Sinks Over 50% From Peak: Stock Market Today",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=3c4f2118fecab317dd2f02063642b4d41f4475fd1d3ee559a5000ef9c79f2978",
        "datetime": 1785244866
      },
      {
        "headline": "SOXX: China's DUV Push May Be A DeepSeek 2.0 Moment",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=7a1d4543a89fedf8ae01d6f4d9cff739e52ec41121644973e60b89fa2dea750f",
        "datetime": 1785233193
      },
      {
        "headline": "Apple Reclaims the Crown as a China Chip Scare Sinks the Semis",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=5e1ce5cbe52b934114e5d154a15cf8489863c55a3d21f56dbbb132cb1afa6da2",
        "datetime": 1785226055
      },
      {
        "headline": "Why J.P. Morgan Says the ASML Stock Selloff Is ‘Disproportionate’",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e6891f4a72a56bfe00f95ff30a8eef029383c42483d0f32bcb57e0288cb2e436",
        "datetime": 1785181440
      },
      {
        "headline": "CXMT, Sandisk, ASML, SpaceX, D-Wave Quantum, and More Stocks That Explain Today’s Market",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fb4e0e67202d63abf3bf672c37570cee1e18fa07cd890ee77d878b44d7dd0ad1",
        "datetime": 1785177720
      }
    ],
    "_fetched_at": 1785265235.4776323,
    "_updated_label": "2026-07-29 04:02"
  },
  "SNDK": {
    "nextEarnings": {
      "date": "2026-08-05",
      "hour": "",
      "epsEstimate": 35.1395
    },
    "news": [
      {
        "headline": "Stock Market Today: Dow Leaps 650 Points; Apple Joins Nvidia In Historic Move (Live Coverage)",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=44f0b6488c2431ad857a009c7c930d70db53627590db7ff2e28882726bf194aa",
        "datetime": 1785260386
      },
      {
        "headline": "Curious about which S&P500 stocks are generating unusual volume on Tuesday? Find out below.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=60d82d912a0cbbf84300ba4e349dd2be3cc82511f788156598ee6f9cfa8ab719",
        "datetime": 1785258300
      },
      {
        "headline": "Tuesday's session: top gainers and losers in the S&P500 index",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=d914c07964c6e02bbb3d0f3dab99f42869b3f4d48013c90488f66bd1641dc6d2",
        "datetime": 1785256501
      },
      {
        "headline": "SNDK Stock Plunges Over 30% In 3 Days Amid Semiconductor Rout – Retail Traders Debate Whether $1,000 Will Hold",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=59a294be97c5b2f46b34886669270cd659b5f80a35829bd16fe7159242c60ca4",
        "datetime": 1785254065
      },
      {
        "headline": "Stock Market Today: Nasdaq-100 Hits Correction Territory; Commvault Trampled (Live Coverage)",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=adf9981e669dbfafbd1855b68e8e164dd32a7dad86ae17c5aea15e8d46c30495",
        "datetime": 1785253681
      }
    ],
    "_fetched_at": 1785265235.4776323,
    "_updated_label": "2026-07-29 04:02"
  },
  "WDC": {
    "nextEarnings": {
      "date": "2026-08-05",
      "hour": "amc",
      "epsEstimate": 3.3281
    },
    "news": [
      {
        "headline": "Wedbush raises the bar for two AI storage stocks",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2c28044234539ac3e7ab921d3d00c4177a21cc6d2c3a04f57b3f8ad2f5073158",
        "datetime": 1785259980
      },
      {
        "headline": "Tuesday's session: top gainers and losers in the S&P500 index",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=d914c07964c6e02bbb3d0f3dab99f42869b3f4d48013c90488f66bd1641dc6d2",
        "datetime": 1785256501
      },
      {
        "headline": "MU, AMD, INTC, SNDK Stocks Fall — Morgan Stanley's Mike Wilson Explains Why Investors Are Going After Chip And Memory Stocks",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=608f1e9e8a65a27dc48c915ac506f81bf2f88e4ca20b199a46856ed0688d550e",
        "datetime": 1785250365
      },
      {
        "headline": "These S&P500 stocks are gapping in today's session",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=4def2ebd595d4441db1c358c20ea98221169d771dcb6942e98c2c7ed2cec1c4c",
        "datetime": 1785249301
      },
      {
        "headline": "Western Digital Corporation (WDC) Surged on Strong Hard Drive Demand and Tighter Supply",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=212e12f7365755fd256d5afa3d24258181a3afef77ae537debc525f34e4e2491",
        "datetime": 1785247687
      }
    ],
    "_fetched_at": 1785265235.4776323,
    "_updated_label": "2026-07-29 04:02"
  }
};
