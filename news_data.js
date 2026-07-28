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
        "headline": "“I Saw the Movie. I Don’t Want the Sequel.” Jim Cramer Warns Nvidia’s Latest $250 Billion Deal Is How Companies Died in Dot Com Bubble",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=300bbccc83ac39779bf33ca8ac3a69226282b0389dcf52bdeb6ccdfe99914ae8",
        "datetime": 1785232322
      },
      {
        "headline": "NextEra Energy Is Becoming the Utility Sector's Biggest AI Power Bet -- Here Are the Numbers That Prove It",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a6578288b4a7a2df9c14fb0c366cb6b903544041d7efe1d915f63eac2504b379",
        "datetime": 1785232200
      },
      {
        "headline": "Forget Micron Stock at $920 Per Share. Buy This Memory-Focused Artificial Intelligence (AI) ETF Instead.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5faefb631781cdf7f7b0ea019ba44a62f50d7e57007f000369cb751244fd6f76",
        "datetime": 1785231720
      },
      {
        "headline": "Wall Street Strategist Tom Lee Thinks Ethereum Is Going to $250,000. Here's Why He's Wrong.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f438e0c2cb1546f5da58311d47beedf9000bd25399bf2a565fc12024b8339df8",
        "datetime": 1785231420
      },
      {
        "headline": "Could Alphabet Overtake Nvidia to Become the World's Most Valuable Stock?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=73d3833ae4c2dbf10f8571c2eb6b5e16c36d1d008501889b7dbc47623dd4192e",
        "datetime": 1785231300
      }
    ],
    "_fetched_at": 1785240064.5210762,
    "_updated_label": "2026-07-28 21:01"
  },
  "AAPL": {
    "nextEarnings": {
      "date": "2026-07-30",
      "hour": "amc",
      "epsEstimate": 1.9271
    },
    "news": [
      {
        "headline": "Apple (AAPL) Stock Gets Fair Value Bump As Apple Intelligence Views Split Analysts",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=99da77948bdf67145bbeea4c3d13c6570d40283b22d4b544ed06969500c5187a",
        "datetime": 1785226458
      },
      {
        "headline": "Apple Reclaims the Crown as a China Chip Scare Sinks the Semis",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=5e1ce5cbe52b934114e5d154a15cf8489863c55a3d21f56dbbb132cb1afa6da2",
        "datetime": 1785226055
      },
      {
        "headline": "Incoming Apple CEO aims to build on movie and TV progress",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7b2fffb82ce266863683b08e3e99f9e596115d72bb83faf6150f59dbd0bf3807",
        "datetime": 1785223634
      },
      {
        "headline": "SNDK, NVDA, SKHY, ASML Stocks Extend Slide Overnight Amid China's AI Challenge, Tech Rotation",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=594f8f71f456ec94d344282b1c1ecf3f076b8340d73bb40b0d455be39d7c2517",
        "datetime": 1785205397
      },
      {
        "headline": "Why Did AAPL, FBRX, RTX Stocks Surge To 52-Week Highs Today?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ae40a889c214680944ea246dcaf10c72e85d82a0640d455d339ab84dbe0e44d0",
        "datetime": 1785203853
      }
    ],
    "_fetched_at": 1785240064.5210762,
    "_updated_label": "2026-07-28 21:01"
  },
  "GOOGL": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "amc",
      "epsEstimate": 3.0988
    },
    "news": [
      {
        "headline": "Could Alphabet Overtake Nvidia to Become the World's Most Valuable Stock?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=73d3833ae4c2dbf10f8571c2eb6b5e16c36d1d008501889b7dbc47623dd4192e",
        "datetime": 1785231300
      },
      {
        "headline": "Prediction: Warren Buffett's Successor, Greg Abel, Extended a Dubious 15-Quarter Net-Selling Streak at Berkshire Hathaway in the 2nd Quarter",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5b94b927e054c7b927836930b3e7b86c14d9a3b1f6c93da1915bb75652013ece",
        "datetime": 1785230760
      },
      {
        "headline": "Will Google's $200 Billion AI Bet Pay Off? History Says It Will.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=bd1a0f2ae13408c2f8f13e61624772e4557e1870c133520f59e422917d3f68b2",
        "datetime": 1785228600
      },
      {
        "headline": "Zacks.com featured highlights include Alphabet, MasTec and Goldman Sachs",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=dcda808d0d017817b1981f420f081d041a1d6f0e12bb4d7bbfdaae4a8b5e6378",
        "datetime": 1785228540
      },
      {
        "headline": "Zacks Investment Ideas feature highlights: Alphabet",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=012006d7630c967f28d4deef46164128cac9f532d337fc5f13e903cad64c15e2",
        "datetime": 1785228180
      }
    ],
    "_fetched_at": 1785240064.5210762,
    "_updated_label": "2026-07-28 21:01"
  },
  "MSFT": {
    "nextEarnings": {
      "date": "2026-07-29",
      "hour": "amc",
      "epsEstimate": 4.3274
    },
    "news": [
      {
        "headline": "Market Chatter: Microsoft-Backed OpenAI, Nvidia CEOs to Meet Sen. Warner After AI Security Test",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a43b1b1c72baf7d71cb617f7b2f2d5a8795f6b52977626422196165c891eeaa1",
        "datetime": 1785229943
      },
      {
        "headline": "Apple Reclaims the Crown as a China Chip Scare Sinks the Semis",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=5e1ce5cbe52b934114e5d154a15cf8489863c55a3d21f56dbbb132cb1afa6da2",
        "datetime": 1785226055
      },
      {
        "headline": "Hyperscalers: A 'Toxic Waste' Investment",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=6492b0820ae6d3fec3a1f8c7f0dd3004d8c64059b926bd15fea91485db23f3f2",
        "datetime": 1785219765
      },
      {
        "headline": "Anthropic’s Amodei Rejects Open Model Ban But Calls for Testing",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7d0a99512f13e8febc6a8e874cd626f9774acec49e4c20cdfac64850fd2165db",
        "datetime": 1785203492
      },
      {
        "headline": "Market Brief: The Quarter's Most Pivotal 48 Hours",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=d650c2ed7ce3d7b4adc6589f89b154e4c4260c943c361d5b9a671581a2bcdca2",
        "datetime": 1785201000
      }
    ],
    "_fetched_at": 1785240064.5210762,
    "_updated_label": "2026-07-28 21:01"
  },
  "AMZN": {
    "nextEarnings": {
      "date": "2026-07-30",
      "hour": "amc",
      "epsEstimate": 1.8556
    },
    "news": [
      {
        "headline": "From Brooklyn Family Roots to America's Retail Giants: Mitch Gould's Three-Decade Journey",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d2b916e85b8c8418c14e0dbe6d6de84dea5ecd94ca2423a114841f56d47e1e85",
        "datetime": 1785229200
      },
      {
        "headline": "1 REIT To Sell And 1 Better Alternative",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=6c360402a63de21c1c7a79f294af5fcea6197f7f6864f39b3dbeff6e4d13a853",
        "datetime": 1785222900
      },
      {
        "headline": "Hyperscalers: A 'Toxic Waste' Investment",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=6492b0820ae6d3fec3a1f8c7f0dd3004d8c64059b926bd15fea91485db23f3f2",
        "datetime": 1785219765
      },
      {
        "headline": "My 3 Favorite Artificial Intelligence (AI) Stocks to Buy Right Now",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ad23d28d8c34d4508d2cbffbb9615b199a0fcd21b67f6ac291547a296e68e703",
        "datetime": 1785219600
      },
      {
        "headline": "Marvell Technology vs. UiPath: Which Tech Stock Is a Better Buy in 2026?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e952501cd312f20cd15e7507942807329ddf78bea9cfe38d59433869d6be81a7",
        "datetime": 1785208801
      }
    ],
    "_fetched_at": 1785240064.5210762,
    "_updated_label": "2026-07-28 21:01"
  },
  "TSM": {
    "nextEarnings": {
      "date": "2026-10-14",
      "hour": "amc",
      "epsEstimate": 28.6598
    },
    "news": [
      {
        "headline": "TSMC Deserves Much More Respect From The Market",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=070772e23df5eb5638564271511522e091e957e9b5a922e7215aef04d6b633f0",
        "datetime": 1785186572
      },
      {
        "headline": "TSMC: AI Demand Visibility Is Intact, But Margin Dilution Will Weigh On Sentiment",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=eda877bd54fa4b977e6ce5cda6289a1694ca1cd36f730e5e85ec6b9dee7c4cdf",
        "datetime": 1785163935
      },
      {
        "headline": "EXCLUSIVE: After Nvidia And SK Hynix, These 3 AI Stocks Could Be The Next Winners, CEO Says",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=dc8f5a3d11ecbaf094c6662287f54de8459f56192c9bfa83784584ab2e055f20",
        "datetime": 1785147650
      },
      {
        "headline": "Intel’s Earnings Could Quadruple in 4 Years, Analyst Says",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=4716ac297ce5455ba35ebec7a3f396fbc73900f70d9dbcd05a07a230a909d674",
        "datetime": 1785144425
      },
      {
        "headline": "Ford To Rally Around 22%? Here Are 10 Top Analyst Forecasts For Monday",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=caef4cdf149bf69a383c2bbfca95323d4e25ea77539f1c109fddbd3702dea02d",
        "datetime": 1785139115
      }
    ],
    "_fetched_at": 1785240064.5210762,
    "_updated_label": "2026-07-28 21:02"
  },
  "AVGO": {
    "nextEarnings": {
      "date": "2026-09-02",
      "hour": "amc",
      "epsEstimate": 3.3012
    },
    "news": [
      {
        "headline": "Apple Reclaims the Crown as a China Chip Scare Sinks the Semis",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=5e1ce5cbe52b934114e5d154a15cf8489863c55a3d21f56dbbb132cb1afa6da2",
        "datetime": 1785226055
      },
      {
        "headline": "Broadcom: Why The Google Share Panic Misses What Broadcom's Moat Actually Is",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=79ea789e038752aa5a2b7a3d3fb45face1c5d70062762696be3038bdc38db8a1",
        "datetime": 1785214634
      },
      {
        "headline": "3 Big Reasons to Love Broadcom (AVGO)",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5bc63c76a23e44dc7d8431a760394bc7aa58a4d4abc58e7dc80519305aafca28",
        "datetime": 1785194702
      },
      {
        "headline": "Big Tech credit risks rise sharply as AI spending soars",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8877a02f38af80b3464be1e28c67f4a576a62f7b678dfd16ae56e53e46d640c9",
        "datetime": 1785185703
      },
      {
        "headline": "The Big AI Capex Question: Should Investors Buy Nvidia or Broadcom This Week?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=812fd0fd56f0759bbdbda2f75d1acdb068d4145f5d54e9cd5f31782e4c2b8921",
        "datetime": 1785179403
      }
    ],
    "_fetched_at": 1785240064.5210762,
    "_updated_label": "2026-07-28 21:01"
  },
  "META": {
    "nextEarnings": {
      "date": "2026-07-29",
      "hour": "amc",
      "epsEstimate": 7.3594
    },
    "news": [
      {
        "headline": "Meta, BlackRock partner on $14 billion El Paso data center",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7b213f00d04aaec2aa2ea95285ec8567dfaf70a05cc1e80a2998d7ccebaac7e9",
        "datetime": 1785231586
      },
      {
        "headline": "Meta Announces New Strategic Venture with BlackRock to Develop Data Center in El Paso",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=aa9cb612692adb6beb0c84acb94583cbdec37c5abd84a4717a08fbec9e788277",
        "datetime": 1785231000
      },
      {
        "headline": "Should You Buy Meta Platforms Stock Before July 29? Wall Street Has a Clear Answer for Investors.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1c231e26c446c7360d6c0a2f725db60a92b40cd159a7cd28ceab073a346dcac3",
        "datetime": 1785230100
      },
      {
        "headline": "Apple Reclaims the Crown as a China Chip Scare Sinks the Semis",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=5e1ce5cbe52b934114e5d154a15cf8489863c55a3d21f56dbbb132cb1afa6da2",
        "datetime": 1785226055
      },
      {
        "headline": "Meta's AWS Moment May Be Here",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=f1a99b019d07d60a7473629916acf7257d25676a8d1516762ae21ec07037eb76",
        "datetime": 1785220458
      }
    ],
    "_fetched_at": 1785240064.5210762,
    "_updated_label": "2026-07-28 21:01"
  },
  "TSLA": {
    "nextEarnings": {
      "date": "2026-10-20",
      "hour": "amc",
      "epsEstimate": 0.4684
    },
    "news": [
      {
        "headline": "TSLA Stock Slips Premarket: Morningstar Calls Tesla ‘Very Attractive’ After Earnings Rout — ‘Now’s A Good Time’ To Buy",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=be36e2eddd806654ceff603b654e67556c47d0296b13f9af14002f6a4a3a24a7",
        "datetime": 1785227188
      },
      {
        "headline": "Apple Reclaims the Crown as a China Chip Scare Sinks the Semis",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=5e1ce5cbe52b934114e5d154a15cf8489863c55a3d21f56dbbb132cb1afa6da2",
        "datetime": 1785226055
      },
      {
        "headline": "Tesla Is Down 30% This Year. Here's Why I'm Still Waiting on the Sidelines.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=435cf31ac78cd92c4be8c593e89a7b85803b246a6f5c8b32db37e5997e524732",
        "datetime": 1785217800
      },
      {
        "headline": "Is Tesla a Buy After Its Latest Earnings Report?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b62f72ac6ec86f9cf4abb74a73094e9a9de54c7f0e44e65d93d94dc96275f79b",
        "datetime": 1785212200
      },
      {
        "headline": "Cathie Wood’s ARK Buys The Dip As SpaceX Wipes Out Tesla-Sized Market Value Since Its Peak: Retail Bears Smell Blood",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fc6f14a1817e1b19363a6a59580095a5c23755f534d5bae626ed1f6e9325d553",
        "datetime": 1785211451
      }
    ],
    "_fetched_at": 1785240064.5210762,
    "_updated_label": "2026-07-28 21:01"
  },
  "MU": {
    "nextEarnings": {
      "date": "2026-09-21",
      "hour": "amc",
      "epsEstimate": 32.2476
    },
    "news": [
      {
        "headline": "Forget Micron Stock at $920 Per Share. Buy This Memory-Focused Artificial Intelligence (AI) ETF Instead.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5faefb631781cdf7f7b0ea019ba44a62f50d7e57007f000369cb751244fd6f76",
        "datetime": 1785231720
      },
      {
        "headline": "U.S. chip stocks extend losses on AI financing, China competition fears",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e6d9f273cd22b24987aedf7661203ca7fd3c33f12e29f90423be413eb0e82673",
        "datetime": 1785230587
      },
      {
        "headline": "1 AI Stock to Buy Before It Soars 150%, According to a Wall Street Analyst (Hint: Not Micron or Sandisk)",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=09b9396def08b7e89029a7f09352dc29a99844f67acc602d403d763b8d05e146",
        "datetime": 1785229680
      },
      {
        "headline": "Micron Technology (NASDAQ:MU) is a High Growth Stock Meeting All Eight Fundamental Rules",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=0ff27126ba70873dd0b1f8dd312149a400625e2b73475893a3e74e812d85598c",
        "datetime": 1785229244
      },
      {
        "headline": "Nasdaq, S&P 500 Futures Slip As Korea Chip Shock Dents AI Memory Heavyweights Ahead Of Fed Decision: Why NVDA, SNDK, MU, APLD, SPCX, SLS, CAPR Are In Focus",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8c5527a2441fa03fab43768d2ef6cd2d81f00770981c207391d0f9fa03a9aec4",
        "datetime": 1785228415
      }
    ],
    "_fetched_at": 1785240064.5210762,
    "_updated_label": "2026-07-28 21:02"
  },
  "AMD": {
    "nextEarnings": {
      "date": "2026-08-04",
      "hour": "amc",
      "epsEstimate": 1.6291
    },
    "news": [
      {
        "headline": "Advanced Micro Devices (NASDAQ:AMD): High Growth Momentum Stock Poised for Breakout Setup",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=92c9a7d9c16f82889be3c89302ace40f93748996eacdbfb17528117d6a0d23a1",
        "datetime": 1785236450
      },
      {
        "headline": "U.S. chip stocks extend losses on AI financing, China competition fears",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e6d9f273cd22b24987aedf7661203ca7fd3c33f12e29f90423be413eb0e82673",
        "datetime": 1785230587
      },
      {
        "headline": "Wall Street's Average Price Target for AMD Implies Only 9% Upside. Is the Stock a Buy, Sell, or Hold?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0f6104295705d18841e8cac649e2672cc070c70d80abadf9a56273279b470361",
        "datetime": 1785228180
      },
      {
        "headline": "Apple Reclaims the Crown as a China Chip Scare Sinks the Semis",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=5e1ce5cbe52b934114e5d154a15cf8489863c55a3d21f56dbbb132cb1afa6da2",
        "datetime": 1785226055
      },
      {
        "headline": "AMD: Heterogeneous Disaggregated Inference Boom Vs. ARM-Ification Doom",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=184c405152f4b2e7a7eac74af92ff5786f0f62204de62b0a1b94c7dc17062002",
        "datetime": 1785223506
      }
    ],
    "_fetched_at": 1785240064.5210762,
    "_updated_label": "2026-07-28 21:01"
  },
  "INTC": {
    "nextEarnings": {
      "date": "2026-10-21",
      "hour": "amc",
      "epsEstimate": 0.3736
    },
    "news": [
      {
        "headline": "Asian chip stocks slide as China competition fears rattle AI trade",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=94e8b8488cac27c45d28e8a177131c1f73ed4746469140ef1a7159b0763e596a",
        "datetime": 1785231656
      },
      {
        "headline": "U.S. chip stocks extend losses on AI financing, China competition fears",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e6d9f273cd22b24987aedf7661203ca7fd3c33f12e29f90423be413eb0e82673",
        "datetime": 1785230587
      },
      {
        "headline": "Chinese DRAM Maker CXMT Is Now Worth More Than Intel After Blistering Shanghai Debut: SanDisk, Micron Feel The Heat",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2f2c718ceb96be6918ac013bfaa1f2d6e963ad4aa058cb04f503a415899bffbc",
        "datetime": 1785226274
      },
      {
        "headline": "Intel Just Broke a 15-Year-Old Company Record. Is the Comeback for Real?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7ee0bfa9bda8bb954cde9d572b930ca95c2ce70f634da270657d9aec6c943eb7",
        "datetime": 1785222300
      },
      {
        "headline": "Market Brief: The Quarter's Most Pivotal 48 Hours",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=d650c2ed7ce3d7b4adc6589f89b154e4c4260c943c361d5b9a671581a2bcdca2",
        "datetime": 1785201000
      }
    ],
    "_fetched_at": 1785240064.5210762,
    "_updated_label": "2026-07-28 21:02"
  },
  "AMAT": {
    "nextEarnings": {
      "date": "2026-08-13",
      "hour": "amc",
      "epsEstimate": 3.462
    },
    "news": [
      {
        "headline": "U.S. chip stocks extend losses on AI financing, China competition fears",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e6d9f273cd22b24987aedf7661203ca7fd3c33f12e29f90423be413eb0e82673",
        "datetime": 1785230587
      },
      {
        "headline": "Apple Reclaims the Crown as a China Chip Scare Sinks the Semis",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=5e1ce5cbe52b934114e5d154a15cf8489863c55a3d21f56dbbb132cb1afa6da2",
        "datetime": 1785226055
      },
      {
        "headline": "Virtus Large Cap Growth SMA Q2 2026 Portfolio Update",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=7d3fe4c0d23f407ac74fb782e56ffe787cecacb6384ae5c0e8ee27f650627233",
        "datetime": 1785224400
      },
      {
        "headline": "How China’s Domestic Immersion DUV Push At Applied Materials (AMAT) Has Changed Its Investment Story",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b062c65ac20858086d1e80a41582adb997adf873124e2c58c33aade2f497fcde",
        "datetime": 1785190207
      },
      {
        "headline": "Applied Materials (AMAT) Stock Dips While Market Gains: Key Facts",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1c82fc01d83a059e8c90d1d425cc6df267b0fbd6c893cd10c46ccbf8bfdca442",
        "datetime": 1785188703
      }
    ],
    "_fetched_at": 1785240064.5210762,
    "_updated_label": "2026-07-28 21:02"
  },
  "QQQ": {
    "nextEarnings": null,
    "news": [
      {
        "headline": "Wall Street's AI CapEx Concerns Overlook Demand-Supply Outlook",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=663f6061b089021c33c5507e7b8388fbcbb801d55bea8a3886180330a2a9fbb5",
        "datetime": 1785221100
      },
      {
        "headline": "Hyperscalers: A 'Toxic Waste' Investment",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=6492b0820ae6d3fec3a1f8c7f0dd3004d8c64059b926bd15fea91485db23f3f2",
        "datetime": 1785219765
      },
      {
        "headline": "The Market Is Hostage To Two Startups",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=55be6e6f16ac4eda7ffb7074f498a0e76c06d5e105fd645def23adcc60f75072",
        "datetime": 1785217973
      },
      {
        "headline": "Higher Oil, AI Spending And Tariffs Test Markets",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=904ed58516628c953eb7ffa2a46cfa0b990f006e07c6675cd0c40128a6177d16",
        "datetime": 1785213000
      },
      {
        "headline": "Escalating Middle East Tensions Shift The Balance Of Risk",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=8ccb47fa800ba139349c7d4c4da4a76219f0743907c7455c5f5ec31e64b180e7",
        "datetime": 1785197400
      }
    ],
    "_fetched_at": 1785240064.5210762,
    "_updated_label": "2026-07-28 21:01"
  },
  "SPY": {
    "nextEarnings": null,
    "news": [
      {
        "headline": "Nasdaq, S&P 500 Futures Slip As Korea Chip Shock Dents AI Memory Heavyweights Ahead Of Fed Decision: Why NVDA, SNDK, MU, APLD, SPCX, SLS, CAPR Are In Focus",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8c5527a2441fa03fab43768d2ef6cd2d81f00770981c207391d0f9fa03a9aec4",
        "datetime": 1785228415
      },
      {
        "headline": "1 REIT To Sell And 1 Better Alternative",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=6c360402a63de21c1c7a79f294af5fcea6197f7f6864f39b3dbeff6e4d13a853",
        "datetime": 1785222900
      },
      {
        "headline": "Wall Street's AI CapEx Concerns Overlook Demand-Supply Outlook",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=663f6061b089021c33c5507e7b8388fbcbb801d55bea8a3886180330a2a9fbb5",
        "datetime": 1785221100
      },
      {
        "headline": "Hyperscalers: A 'Toxic Waste' Investment",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=6492b0820ae6d3fec3a1f8c7f0dd3004d8c64059b926bd15fea91485db23f3f2",
        "datetime": 1785219765
      },
      {
        "headline": "The Market Is Hostage To Two Startups",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=55be6e6f16ac4eda7ffb7074f498a0e76c06d5e105fd645def23adcc60f75072",
        "datetime": 1785217973
      }
    ],
    "_fetched_at": 1785240064.5210762,
    "_updated_label": "2026-07-28 21:01"
  },
  "ORCL": {
    "nextEarnings": {
      "date": "2026-09-07",
      "hour": "",
      "epsEstimate": 1.7745
    },
    "news": [
      {
        "headline": "Oracle: The Most Disliked AI Name Could Double",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=10f0a9a6d92a0618afb398a718a5b0a411b9de32ee7f4f0d9992da52c36a2abb",
        "datetime": 1785220623
      },
      {
        "headline": "Oracle: The Market Sees Margin Compression, I See Opportunity",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=efe0f70c7961454a0e9de86bcd6bbee78b945e17b4de6d4598759ec949d43828",
        "datetime": 1785214161
      },
      {
        "headline": "INTU Down 60%: Is Intuit's Proven Price Floor About To Break?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fce47b02085c86a7921d179a66f0cf38d437904bbce1c15aaf19a26f3cc955c2",
        "datetime": 1785198838
      },
      {
        "headline": "Ingram Micro Accelerates Cloud and AI Adoption in Australia with Oracle Cloud Distribution Program",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e7d58a232558dd953f69dbf9b1d3fcdb187a81855cdeccc642fd1b10fa52e011",
        "datetime": 1785189600
      },
      {
        "headline": "Big Tech credit risks rise sharply as AI spending soars",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8877a02f38af80b3464be1e28c67f4a576a62f7b678dfd16ae56e53e46d640c9",
        "datetime": 1785185703
      }
    ],
    "_fetched_at": 1785240064.5210762,
    "_updated_label": "2026-07-28 21:01"
  },
  "CRM": {
    "nextEarnings": {
      "date": "2026-09-01",
      "hour": "amc",
      "epsEstimate": 3.3057
    },
    "news": [
      {
        "headline": "Salesforce’s Agentforce Bet Made It the Dow’s Worst Performer. Is the Market Overreacting?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=09452ec071a6cb71b8b15acbca60603ece1490c6aa9ec17ffacea4d0d4d07943",
        "datetime": 1785227906
      },
      {
        "headline": "First Eagle U.S. Fund Q2 2026 Portfolio Review",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=648b55f7aecaae96f9cddd2475ef973467dfa74afd833e8b4f7f6a77559d89d1",
        "datetime": 1785222000
      },
      {
        "headline": "Will Salesforce’s (CRM) US$1.6 Billion VA AI Deal Redefine Its Government-Cloud Narrative?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=93749f7cc755d87b2a86bcc8ff2a0420cf278651df62b2800cc8eab94f09623c",
        "datetime": 1785197847
      },
      {
        "headline": "Stock Market Today: Dow Up As These Stocks Test Entries; This AI Play Fights Back Before Key Event (Live Coverage)",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=df81aabb4d8d8a6db9a3ae667eaa69689cc4324edce082489550f2db554c07e8",
        "datetime": 1785184468
      },
      {
        "headline": "US Equity Markets Mixed as Oil Slides on Lull in US-Iran Strikes",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fc6f16dfd20940f804f38b7530ba8a77062004465d9fe1a3920ca69cc1e7b82d",
        "datetime": 1785184443
      }
    ],
    "_fetched_at": 1785240064.5210762,
    "_updated_label": "2026-07-28 21:01"
  },
  "PLTR": {
    "nextEarnings": {
      "date": "2026-08-03",
      "hour": "amc",
      "epsEstimate": 0.3544
    },
    "news": [
      {
        "headline": "IBM (IBM) Joins Nvidia And Microsoft In Open Secure AI Alliance",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=dadc105db50a440e57e3c11a5ebf59f8e1a97eb0c788e4d2c473b4bf89fce698",
        "datetime": 1785193945
      },
      {
        "headline": "Palantir Earnings Set Up for a Major Beat",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=791f3cb63345a0276595404959d59a87db6a13efd1b3aaa3b056ff29f979d2f0",
        "datetime": 1785185869
      },
      {
        "headline": "Palantir Stock Soars -- Gets Massive $200 Price Target Ahead of Critical Earnings",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=988efb3d79f0003cf0341f065dec470cbf898a55c3d0b9f8ea81ade8abd2ec43",
        "datetime": 1785185681
      },
      {
        "headline": "Still Down 26% in 2026, Is Palantir’s Rebound Just Getting Started?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5ed47baf059ba6e51cfe697fe09638f7ebcd3975e00c2cc08553e95c00bad0b5",
        "datetime": 1785181067
      },
      {
        "headline": "Palantir Stock: The $1 Trillion Thesis Is Intact After The Pullback",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=758edefc8dab8559f2457d54f2ebac50f6b24895b2efc9555903dc38fc758909",
        "datetime": 1785180790
      }
    ],
    "_fetched_at": 1785240064.5210762,
    "_updated_label": "2026-07-28 21:01"
  },
  "QCOM": {
    "nextEarnings": {
      "date": "2026-07-29",
      "hour": "amc",
      "epsEstimate": 2.2724
    },
    "news": [
      {
        "headline": "Navitas Semiconductor Corporation (NVTS) Reports Q2 Loss, Beats Revenue Estimates",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3202ac975e90116eb2a248c9eaca3639851d95d063af0a660dfed00b6d891b28",
        "datetime": 1785188103
      },
      {
        "headline": "Update: Wall Street Wavers as Oil Slides; Fed Decision, Major Earnings in Focus",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5a7a4b80897018ea3dfa1ac5b7e7b67158737739c6cc8f943dd3b8d76e6e8e98",
        "datetime": 1785185279
      },
      {
        "headline": "Qualcomm’s 36% Pullback Creates a Buying Opportunity Ahead of Q3 Earnings",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c7a3f46cc85cdac5499682adce42e3e509ca33e84ed13d5989d2a19a1db217d3",
        "datetime": 1785177238
      },
      {
        "headline": "Is Qualcomm Stock a Buy Ahead of July 29 Q3 Earnings?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a6896a3970d0ae0e5bb19e176bea372e13c0b388433df2b5527540a19a182600",
        "datetime": 1785175383
      },
      {
        "headline": "Update: Equities Mixed Intraday as Markets Await Fed Decision, More Earnings Reports",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=039207139fd0f0d3272078cfd07aae8b0fb3efd623dcc3fce2410240b9b3f939",
        "datetime": 1785174878
      }
    ],
    "_fetched_at": 1785240064.5210762,
    "_updated_label": "2026-07-28 21:01"
  },
  "ARM": {
    "nextEarnings": {
      "date": "2026-07-29",
      "hour": "amc",
      "epsEstimate": 0.4055
    },
    "news": [
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
      },
      {
        "headline": "SpaceX stock plunge sends a big reminder to those who want to get in on or near IPO day",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7b9379626cb56ad18115999dec6d0991cb6da83c1e15738ad6af15a9c2931e11",
        "datetime": 1785174464
      },
      {
        "headline": "Arm Holdings Has Fallen 28% in the Past Month. Should You Buy Before July 29 Earnings?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b14638d2aca5c276845d4bb789e8492512032af38e1892a143c17f65b1030d25",
        "datetime": 1785172822
      }
    ],
    "_fetched_at": 1785240064.5210762,
    "_updated_label": "2026-07-28 21:01"
  },
  "MRVL": {
    "nextEarnings": {
      "date": "2026-08-26",
      "hour": "",
      "epsEstimate": 0.939
    },
    "news": [
      {
        "headline": "U.S. chip stocks extend losses on AI financing, China competition fears",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e6d9f273cd22b24987aedf7661203ca7fd3c33f12e29f90423be413eb0e82673",
        "datetime": 1785230587
      },
      {
        "headline": "Apple Reclaims the Crown as a China Chip Scare Sinks the Semis",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=5e1ce5cbe52b934114e5d154a15cf8489863c55a3d21f56dbbb132cb1afa6da2",
        "datetime": 1785226055
      },
      {
        "headline": "Marvell Technology vs. UiPath: Which Tech Stock Is a Better Buy in 2026?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e952501cd312f20cd15e7507942807329ddf78bea9cfe38d59433869d6be81a7",
        "datetime": 1785208801
      },
      {
        "headline": "Marvell Technology vs. Planet Labs: Which Growth Stock Is a Better Buy in 2026, the Artificial Intelligence Company or the Rising Star of the Space-Based Economy?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3d8cc249f4e986d8fcaa5ebecc39b21bd9bb234da121d747a335df28d784f6d4",
        "datetime": 1785184921
      },
      {
        "headline": "Geopolitics, AI Concerns, & Tech's Summer Slump",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5ec7ab0826dff23be64feae5002c01c7cb5f12bb8300724d29ae7753c0932a31",
        "datetime": 1785184920
      }
    ],
    "_fetched_at": 1785240064.5210762,
    "_updated_label": "2026-07-28 21:01"
  },
  "ASML": {
    "nextEarnings": {
      "date": "2026-10-14",
      "hour": "bmo",
      "epsEstimate": 10.1558
    },
    "news": [
      {
        "headline": "European Stock Indexes Gain at Open as Oil Falls Further",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b0d971f839a25d8417d6b5fc3347103070aaed200fb06116a14fcb2e2d1d3b36",
        "datetime": 1785228158
      },
      {
        "headline": "Exclusive-China starts production of home-grown immersion DUV chipmaking tools - source",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=35399cbd0289f2d738ccc062cf6df83709445e7a271e897145458db5677bb3d1",
        "datetime": 1785226778
      },
      {
        "headline": "Apple Reclaims the Crown as a China Chip Scare Sinks the Semis",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=5e1ce5cbe52b934114e5d154a15cf8489863c55a3d21f56dbbb132cb1afa6da2",
        "datetime": 1785226055
      },
      {
        "headline": "China’s chip breakthrough triggers global tech rout",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=49186a7a981a992cd0530b4e697f53114681e35c963f89de4226d935ca547e2b",
        "datetime": 1785225197
      },
      {
        "headline": "Seoul, Tokyo lead Asian plunge as tech stocks suffer fresh rout",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=649b9a2cb1919671132288b8d1d882c08c013f3d0650edeec9f170721cc409e7",
        "datetime": 1785210061
      }
    ],
    "_fetched_at": 1785240064.5210762,
    "_updated_label": "2026-07-28 21:02"
  },
  "LRCX": {
    "nextEarnings": {
      "date": "2026-07-29",
      "hour": "amc",
      "epsEstimate": 1.7172
    },
    "news": [
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
        "headline": "Stay informed with the top movers within the S&P500 index on Monday.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=d92a31627db5e49a00f7865fdd64cbe8652bf16b62b82f5756be1467c3b2a654",
        "datetime": 1785179101
      },
      {
        "headline": "CXMT, Sandisk, ASML, SpaceX, D-Wave Quantum, and More Stocks That Explain Today’s Market",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fb4e0e67202d63abf3bf672c37570cee1e18fa07cd890ee77d878b44d7dd0ad1",
        "datetime": 1785177720
      },
      {
        "headline": "3 Reasons Lam Research Is Worth a Closer Look Before July 29 Q4 Earnings",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9b8d7e9d80e0986ec0f7ca2748e65136956209172e8674982d77912f52978ea7",
        "datetime": 1785176167
      }
    ],
    "_fetched_at": 1785240064.5210762,
    "_updated_label": "2026-07-28 21:02"
  },
  "KLAC": {
    "nextEarnings": {
      "date": "2026-07-28",
      "hour": "amc",
      "epsEstimate": 1.0163
    },
    "news": [
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
      },
      {
        "headline": "3 Reasons Lam Research Is Worth a Closer Look Before July 29 Q4 Earnings",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9b8d7e9d80e0986ec0f7ca2748e65136956209172e8674982d77912f52978ea7",
        "datetime": 1785176167
      },
      {
        "headline": "Should You Buy, Sell or Hold FormFactor Stock Before Q2 Earnings?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3c1bab5565061974199855ddc823620c6d38d534a5ebe33f3242fafc4cac0df1",
        "datetime": 1785169860
      }
    ],
    "_fetched_at": 1785240064.5210762,
    "_updated_label": "2026-07-28 21:02"
  },
  "SNDK": {
    "nextEarnings": {
      "date": "2026-08-05",
      "hour": "",
      "epsEstimate": 35.1395
    },
    "news": [
      {
        "headline": "U.S. chip stocks extend losses on AI financing, China competition fears",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e6d9f273cd22b24987aedf7661203ca7fd3c33f12e29f90423be413eb0e82673",
        "datetime": 1785230587
      },
      {
        "headline": "1 AI Stock to Buy Before It Soars 150%, According to a Wall Street Analyst (Hint: Not Micron or Sandisk)",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=09b9396def08b7e89029a7f09352dc29a99844f67acc602d403d763b8d05e146",
        "datetime": 1785229680
      },
      {
        "headline": "History Says Memory Stocks Like Micron and Sandisk Rarely Stay This Profitable for Long. Here's the Case for Why It's Different This Time.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=66737702a72215c042f70430d23fc692969c75de684d412b8281ac93b8531181",
        "datetime": 1785227700
      },
      {
        "headline": "Chinese DRAM Maker CXMT Is Now Worth More Than Intel After Blistering Shanghai Debut: SanDisk, Micron Feel The Heat",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2f2c718ceb96be6918ac013bfaa1f2d6e963ad4aa058cb04f503a415899bffbc",
        "datetime": 1785226274
      },
      {
        "headline": "Apple Reclaims the Crown as a China Chip Scare Sinks the Semis",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=5e1ce5cbe52b934114e5d154a15cf8489863c55a3d21f56dbbb132cb1afa6da2",
        "datetime": 1785226055
      }
    ],
    "_fetched_at": 1785240064.5210762,
    "_updated_label": "2026-07-28 21:02"
  },
  "WDC": {
    "nextEarnings": {
      "date": "2026-08-05",
      "hour": "amc",
      "epsEstimate": 3.3281
    },
    "news": [
      {
        "headline": "U.S. chip stocks extend losses on AI financing, China competition fears",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e6d9f273cd22b24987aedf7661203ca7fd3c33f12e29f90423be413eb0e82673",
        "datetime": 1785230587
      },
      {
        "headline": "Apple Reclaims the Crown as a China Chip Scare Sinks the Semis",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=5e1ce5cbe52b934114e5d154a15cf8489863c55a3d21f56dbbb132cb1afa6da2",
        "datetime": 1785226055
      },
      {
        "headline": "SNDK, NVDA, SKHY, ASML Stocks Extend Slide Overnight Amid China's AI Challenge, Tech Rotation",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=594f8f71f456ec94d344282b1c1ecf3f076b8340d73bb40b0d455be39d7c2517",
        "datetime": 1785205397
      },
      {
        "headline": "CXMT’s Blockbuster IPO Hits MU, SNDK and WDC—Is the Memory Rally at Risk?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5e57ed6d4af8725a401916ee145b11b29d422051d831a384e64a5ae8f5c13bcb",
        "datetime": 1785182132
      },
      {
        "headline": "Stay informed with the top movers within the S&P500 index on Monday.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=d92a31627db5e49a00f7865fdd64cbe8652bf16b62b82f5756be1467c3b2a654",
        "datetime": 1785179101
      }
    ],
    "_fetched_at": 1785240064.5210762,
    "_updated_label": "2026-07-28 21:02"
  }
};
