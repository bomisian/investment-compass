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
        "headline": "I've Been Wrong About Amazon Stock for Almost 10 Years. Here's Why I'm Finally Changing My Mind.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b2adf6008805e2ee86cc0399c08f7c9818cbe85c025b61b50cd219fb7ad3f2be",
        "datetime": 1786001700
      },
      {
        "headline": "Amazon, Alphabet, and Microsoft All Delivered Soaring Cloud Growth Thanks to AI. Here's the 1 I'd Buy Right Now",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ec7916b6759591b3cbd2492fe38dc2117e1b4bc859199907ca6d1831488efd38",
        "datetime": 1786000921
      },
      {
        "headline": "Rocket Lab Just Won $663 Million in Space Force Contracts. Only the Bigger One Waits for a Rocket That Has Never Flown.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7093cf25aaaff80e0a1f39e709c7e134176c4a1d7786b4f038d5f7fdf040d8c2",
        "datetime": 1786000020
      },
      {
        "headline": "Where Will SpaceX Stock Be in 1 Year?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c5fe1bcb233eb4bc2399ea527387a31d5a9592e77c440ad778cb838b744faa38",
        "datetime": 1785997200
      },
      {
        "headline": "Talen Energy Q2 Earnings Call Highlights",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c908ca092ad3e63c849c865913490b7f35f719882fe2208016494c99282cb6a3",
        "datetime": 1785996236
      }
    ],
    "_fetched_at": 1786004427.226903,
    "_updated_label": "2026-08-06 17:21"
  },
  "AAPL": {
    "nextEarnings": {
      "date": "2026-10-28",
      "hour": "amc",
      "epsEstimate": 2.0468
    },
    "news": [
      {
        "headline": "OpenAI moves to dismiss Apple's trade secret lawsuit",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5a24af8291ec928ccda7906e84cd6eb3facd6a336536923adddc7ff2e0ffd018",
        "datetime": 1785996574
      },
      {
        "headline": "Divorced at 60 With Half the Savings You Planned On. These 3 ETFs Help Rebuild a Retirement",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=685a666429b3dba564b693c1cc43e2c9092736ebebd4e7b69124ef988880f2ee",
        "datetime": 1785989112
      },
      {
        "headline": "As AI spend continues to soar, when will investors start to be rewarded?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9df7f49084994b8b6f6ecb8f6802dbdb49a8907c58da0df8f078d0437b59cb15",
        "datetime": 1785988800
      },
      {
        "headline": "Apple Seeks Injunction Against OpenAI in Trade Secrets Lawsuit, Says It Faces 'Irreparable Harm'— Jim Cramer Says 'Gloves Off'",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0ddb9659a254ba7a9a0e9b27abba752b12bae6448178c63af2fc6215fcb35cc9",
        "datetime": 1785983471
      },
      {
        "headline": "The Calm Surface of Alphabet Stock Hides a Turbulent Forecast",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=958a56e55bcf167d88870236ffbc50ea29b2df0de4e6fe292166b4ca4d3050e7",
        "datetime": 1785961996
      }
    ],
    "_fetched_at": 1786004427.226903,
    "_updated_label": "2026-08-06 17:20"
  },
  "GOOGL": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "amc",
      "epsEstimate": 3.1009
    },
    "news": [
      {
        "headline": "Amazon, Alphabet, and Microsoft All Delivered Soaring Cloud Growth Thanks to AI. Here's the 1 I'd Buy Right Now",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ec7916b6759591b3cbd2492fe38dc2117e1b4bc859199907ca6d1831488efd38",
        "datetime": 1786000921
      },
      {
        "headline": "Google’s $15 billion India data centre project battles water, wildlife concerns",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e5317dfedfad95de7852f1a3971212e1356d13adffaff3b1664723c50d7c1bcc",
        "datetime": 1786000689
      },
      {
        "headline": "Meta’s Superintelligence Labs Ships Its First Product — and the Contributor Tier Is the Real Strategy",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=34e0530cafbd9204c134a06302cfe80a1b0928eeb85148270f2f9f44743e76e2",
        "datetime": 1785995948
      },
      {
        "headline": "As AI spend continues to soar, when will investors start to be rewarded?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9df7f49084994b8b6f6ecb8f6802dbdb49a8907c58da0df8f078d0437b59cb15",
        "datetime": 1785988800
      },
      {
        "headline": "Alphabet Post-Earnings Rebound is On: Buy at $363?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=32570172915085c749285c3931a797891b7037791e6bba30979f51e3f86f1c05",
        "datetime": 1785988460
      }
    ],
    "_fetched_at": 1786004427.226903,
    "_updated_label": "2026-08-06 17:20"
  },
  "MSFT": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "",
      "epsEstimate": 4.7263
    },
    "news": [
      {
        "headline": "Amazon, Alphabet, and Microsoft All Delivered Soaring Cloud Growth Thanks to AI. Here's the 1 I'd Buy Right Now",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ec7916b6759591b3cbd2492fe38dc2117e1b4bc859199907ca6d1831488efd38",
        "datetime": 1786000921
      },
      {
        "headline": "Hexaware Joins the Microsoft Intelligent Security Association (MISA)",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0e7dc9c66f56df07960ec9317926c52eb2f2df9341b13e2de40ceb9471691044",
        "datetime": 1785998640
      },
      {
        "headline": "Talen Energy Q2 Earnings Call Highlights",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c908ca092ad3e63c849c865913490b7f35f719882fe2208016494c99282cb6a3",
        "datetime": 1785996236
      },
      {
        "headline": "Billionaire Bill Ackman Built a $2.1 Billion Stake in Microsoft After the Stock Slid. Is It Still a Buy?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=842a01cc408578ce69f5a26868264bd892eea0453d0fffb3a6de32537c49ba76",
        "datetime": 1785993600
      },
      {
        "headline": "IFI TECHSOLUTIONS ACHIEVES MICROSOFT AZURE CLOUD SECURITY SPECIALIZATION",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=afcf04fa6f079bdd5727fc0f60fcc04ea2c1daa28e7af0ccacbfa7fc775c0ef9",
        "datetime": 1785990600
      }
    ],
    "_fetched_at": 1786004427.226903,
    "_updated_label": "2026-08-06 17:20"
  },
  "AMZN": {
    "nextEarnings": {
      "date": "2026-10-28",
      "hour": "amc",
      "epsEstimate": 1.9445
    },
    "news": [
      {
        "headline": "I've Been Wrong About Amazon Stock for Almost 10 Years. Here's Why I'm Finally Changing My Mind.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b2adf6008805e2ee86cc0399c08f7c9818cbe85c025b61b50cd219fb7ad3f2be",
        "datetime": 1786001700
      },
      {
        "headline": "Amazon, Alphabet, and Microsoft All Delivered Soaring Cloud Growth Thanks to AI. Here's the 1 I'd Buy Right Now",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ec7916b6759591b3cbd2492fe38dc2117e1b4bc859199907ca6d1831488efd38",
        "datetime": 1786000921
      },
      {
        "headline": "This Retail Expert Likes Tapestry, Ralph Lauren, Gap, and Off-Price Chains",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a92e2beac4e67ca8b987b90a74e2ac42169d642ed36aba13389f8dfd5fd58cb4",
        "datetime": 1785997800
      },
      {
        "headline": "Retiring Soon? Good News—the Market Is Cooperating.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=137463df6faf2d54bf05fc2354b21e0a96abe7e4bf518adeb3090280965a625a",
        "datetime": 1785996000
      },
      {
        "headline": "Pattern Group Q2 Earnings Call Highlights",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d75c4f1f442ee0e35028821c06f04b3fa33130ecfdb4863f1bb024da9d6f56fa",
        "datetime": 1785989034
      }
    ],
    "_fetched_at": 1786004427.226903,
    "_updated_label": "2026-08-06 17:20"
  },
  "TSM": {
    "nextEarnings": {
      "date": "2026-10-14",
      "hour": "amc",
      "epsEstimate": 28.8828
    },
    "news": [
      {
        "headline": "Broadcom: Big, Bad News When Compute Leaders Need Optical Advantage (Upgrade)",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=30cdad70cc876fc684008b369f3ad588e5bca6c35f2bc682991246e19354ab67",
        "datetime": 1785948298
      },
      {
        "headline": "10 Information Technology Stocks With Whale Alerts In Today’s Session",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=8d5187674a093923a700cb053cf24ddecaa79a4a30a0891ad53fcf56dcb513f9",
        "datetime": 1785936914
      },
      {
        "headline": "What Is Going on with Taiwan Semiconductor Stock on Wednesday?",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=78fb68bfebd19b0558f1e77a2cb316d2cc16004a70849d24565ed136235091be",
        "datetime": 1785932338
      },
      {
        "headline": "Brown Advisory Flexible Equity Strategy Q2 2026 Portfolio Activity",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=73b55282df1e30c21b0484c36bafd51d47b492ab49aa8791eecf2504d2e86788",
        "datetime": 1785932040
      },
      {
        "headline": "AMD Earnings Prediction Market Preview: What Will Lisa Su Say?",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=82440ad7792ffb529787182fae08f24196bdfd20ebfbb29bc5ecdcf2deb65a86",
        "datetime": 1785841271
      }
    ],
    "_fetched_at": 1786004427.226903,
    "_updated_label": "2026-08-06 17:21"
  },
  "AVGO": {
    "nextEarnings": {
      "date": "2026-09-02",
      "hour": "amc",
      "epsEstimate": 3.3012
    },
    "news": [
      {
        "headline": "Marvell Is Positioned to Absorb a Disproportionate Amount of This AI Capex Surge, So I Keep Buying",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=179907e3438fb75a938a926573295ddbd996d50582303d5d4dcb7678ec888bd6",
        "datetime": 1785990188
      },
      {
        "headline": "Alphabet CEO Sundar Pichai Just Made a $200 Billion Infrastructure Move. Nvidia, Micron, and Broadcom Investors Should Rejoice.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7ac664f64f0e20d8cdf5b9a3089e8ca231de11f22fc4a1cfeb6c6688c2b38dac",
        "datetime": 1785986400
      },
      {
        "headline": "Top Analyst Reports for Broadcom, Coca-Cola & Palantir",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=74b2221c87d4004d4084299c62271c91bc75a6ceb1db94de0517c139e92dbbdf",
        "datetime": 1785960900
      },
      {
        "headline": "AIPO: All Around Power Exposure To The AI Revolution",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=adb9240679e79ef207e3bc8357946e8cc22f945badfa6980a054a482ca32bbb0",
        "datetime": 1785960164
      },
      {
        "headline": "Can Microchip's Micron Alliance Help it Challenge AVGO & ALAB?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=80b4c2671013d5e2811996b738004315f71a8cdf10ebe104c9fbec0c96aefb3e",
        "datetime": 1785953700
      }
    ],
    "_fetched_at": 1786004427.226903,
    "_updated_label": "2026-08-06 17:21"
  },
  "META": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "amc",
      "epsEstimate": 7.1215
    },
    "news": [
      {
        "headline": "Retiring Soon? Good News—the Market Is Cooperating.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=137463df6faf2d54bf05fc2354b21e0a96abe7e4bf518adeb3090280965a625a",
        "datetime": 1785996000
      },
      {
        "headline": "Meta’s Superintelligence Labs Ships Its First Product — and the Contributor Tier Is the Real Strategy",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=34e0530cafbd9204c134a06302cfe80a1b0928eeb85148270f2f9f44743e76e2",
        "datetime": 1785995948
      },
      {
        "headline": "As AI spend continues to soar, when will investors start to be rewarded?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9df7f49084994b8b6f6ecb8f6802dbdb49a8907c58da0df8f078d0437b59cb15",
        "datetime": 1785988800
      },
      {
        "headline": "News Q4 Earnings Call Highlights",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=43b0e8cdb84ca6eeaf1fb10c5a17ab2d118d17e86e75f777bf2dff7ec2245992",
        "datetime": 1785985438
      },
      {
        "headline": "Meta Joins OpenAI and Anthropic in AI Cybersecurity Scare After Model Hacks Third Party: 'We Are Currently Investigating…'",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f8b12a308f577a975320966940fd766c9bd7fb8515b04dcc7d58f87967b5c04e",
        "datetime": 1785982255
      }
    ],
    "_fetched_at": 1786004427.226903,
    "_updated_label": "2026-08-06 17:20"
  },
  "TSLA": {
    "nextEarnings": {
      "date": "2026-10-20",
      "hour": "amc",
      "epsEstimate": 0.4492
    },
    "news": [
      {
        "headline": "Waymo CEO takes a not-so-subtle shot at Tesla Robotaxi over Lidar",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=24a54a32a1e0b987a9df11a861bd61e4a6df7784c908fe60a6d7455bc3563943",
        "datetime": 1785991020
      },
      {
        "headline": "Tesla (TSLA) Targets 1 Million Optimus Robots A Year",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ac41a49ad2a8d690ec93aa8c707cee303afb205968f0a1a528346df58fd1d653",
        "datetime": 1785990732
      },
      {
        "headline": "AI’s Volatile Power Demand Is Damaging Its Own Data Centers",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=abc52c260560dfe85339fde73850c3e602b83dbeb14ac0deb0b2c1ffcbf41ff3",
        "datetime": 1785988819
      },
      {
        "headline": "As AI spend continues to soar, when will investors start to be rewarded?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9df7f49084994b8b6f6ecb8f6802dbdb49a8907c58da0df8f078d0437b59cb15",
        "datetime": 1785988800
      },
      {
        "headline": "SpaceX IPO: The Company Falls Short",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=93064c46a0f38c1999c7fff39d7480383dc1a2af00c8d94f802f639571d70fbc",
        "datetime": 1785983400
      }
    ],
    "_fetched_at": 1786004427.226903,
    "_updated_label": "2026-08-06 17:20"
  },
  "MU": {
    "nextEarnings": {
      "date": "2026-09-21",
      "hour": "amc",
      "epsEstimate": 32.2476
    },
    "news": [
      {
        "headline": "Wall Street Is Selling Memory Stocks – Chipmakers Are Buying Them Back",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=07e54d8a4b43a5bf3572ff5de128663509cf4b031430358b82236ec6674e0b0b",
        "datetime": 1785993453
      },
      {
        "headline": "Who Will Benefit Most From Amazon and Microsoft’s Hyperscaler Leading AI Capex This Quarter?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b3f5870014bc1d6118f5bb2f6299b2f33001d4f52dcb81c831e3cda211bfbad4",
        "datetime": 1785989297
      },
      {
        "headline": "TCW Concentrated Large Cap Growth Fund Q2 2026 Portfolio Update",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=a4be55e268c5a2f7a9605bc2cc25490523542cfe4ce6f261641d0211a5aa0a3c",
        "datetime": 1785988800
      },
      {
        "headline": "Alphabet CEO Sundar Pichai Just Made a $200 Billion Infrastructure Move. Nvidia, Micron, and Broadcom Investors Should Rejoice.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7ac664f64f0e20d8cdf5b9a3089e8ca231de11f22fc4a1cfeb6c6688c2b38dac",
        "datetime": 1785986400
      },
      {
        "headline": "Two chipmakers, one demo, and a signal for AI’s next phase",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d7dba4dedee9bba8906ce3a288a3d83bafa372d7d77d0461647bf32e538bb231",
        "datetime": 1785969180
      }
    ],
    "_fetched_at": 1786004427.226903,
    "_updated_label": "2026-08-06 17:21"
  },
  "AMD": {
    "nextEarnings": {
      "date": "2026-11-02",
      "hour": "amc",
      "epsEstimate": 1.8517
    },
    "news": [
      {
        "headline": "SpaceX First-Quarter Print And A DeepMind Exit Split The Tape As Records Take A Breather",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=14c845aa763b92b7aa2ddc1e64b3096cd549decf921b9cc44798a7abe99cedc4",
        "datetime": 1786002284
      },
      {
        "headline": "One Massive AI Hardware Truth Keeps Me Loading Up On AMAT Ahead of Aug. 13 Earnings Print",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=167a5b632dab635bef577ac0cae6c15c37dee0862fc2c024b6bcd336ee784865",
        "datetime": 1785989990
      },
      {
        "headline": "Why AMD Stock Dropped Today",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e5c55f483d01ae7a1893065b280ba48815d7fad5d375e17ac1ad3a838a2cf2c4",
        "datetime": 1785983540
      },
      {
        "headline": "Longsys Showcases End-to-End AI Storage Solutions at FMS 2026",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=44796058ddfdc0ecd4285818f98535cd96bf26c60e963dd7ae436fda10dd9135",
        "datetime": 1785974400
      },
      {
        "headline": "$10,000 in AMDL Became $40,270 in 7 Months, but AMD’s Earnings Crash Erased $9,500 in One Day",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c064f44246d3acdfeed3c76885a062eea47be0309f4cd2298d3f896cee6512e2",
        "datetime": 1785973939
      }
    ],
    "_fetched_at": 1786004427.226903,
    "_updated_label": "2026-08-06 17:21"
  },
  "INTC": {
    "nextEarnings": {
      "date": "2026-10-21",
      "hour": "amc",
      "epsEstimate": 0.3936
    },
    "news": [
      {
        "headline": "SpaceX, Alphabet, Nvidia, Micron, AMD, Uber, CVS, Lilly, and More Stocks That Explain Today’s Market",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=21fb8be31f4b117b356767c095e95409cad32b2d646651192a1c1ccf094f1c80",
        "datetime": 1785955380
      },
      {
        "headline": "How To Bank 14% On MU Stock Before Buying A Single Share",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f1d6f729dcbd447e681b37bbc742d6122cefee89f81993c32346f4aaad508796",
        "datetime": 1785954276
      },
      {
        "headline": "Curious about the most active S&P500 stocks in today's session?",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=37870f8def4c147fe9117a6d7906f67f4b2141ea1f0506a5e29a7bcd6fa3663f",
        "datetime": 1785953102
      },
      {
        "headline": "Discover the most active stocks in Wednesday's session.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=54a15b0b7e8e410c17dd38284f5a02ac6d3bc09c6eb31d85c1ce2a7174b8f53f",
        "datetime": 1785952800
      },
      {
        "headline": "Nvidia Just Won a Major SpaceX AI Deal. Stock Jumps as AMD Sinks",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=942de0347c20ef7b7c90228449f973050a6e380adb50fec9c10c304eb60a7729",
        "datetime": 1785949879
      }
    ],
    "_fetched_at": 1786004427.226903,
    "_updated_label": "2026-08-06 17:21"
  },
  "AMAT": {
    "nextEarnings": {
      "date": "2026-08-13",
      "hour": "amc",
      "epsEstimate": 3.462
    },
    "news": [
      {
        "headline": "One Massive AI Hardware Truth Keeps Me Loading Up On AMAT Ahead of Aug. 13 Earnings Print",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=167a5b632dab635bef577ac0cae6c15c37dee0862fc2c024b6bcd336ee784865",
        "datetime": 1785989990
      },
      {
        "headline": "What Determines Applied Materials’ Resilience on Aug 13 Earnings",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=afc0432fbe822e72c41b4089064373af0451f442f3f6e2b3d2b21c73619d28fa",
        "datetime": 1785988712
      },
      {
        "headline": "AMAT at $534: Huge Upside With a Huge Hurdle Approaching",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d7890a1b575e8191af6c114b24c8a9df18833076be0a7a9d4cf9f9d24ef415c0",
        "datetime": 1785988237
      },
      {
        "headline": "Applied Materials Fell 11% Last Month: A Prominent Wall Street Pro Predicts 70% Gains Moving Forward",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c8cb743d60fe325d1d813f43900c2ff420bcb162814ce32bdb1f7547cb6e58bc",
        "datetime": 1785988040
      },
      {
        "headline": "IPGP Q2 Earnings Beat Estimates on Industrial Solutions Growth",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8a0be3300b058401e0de1c4e65f3d68dd8f0b6d26d785886e68af592e86c26d0",
        "datetime": 1785952440
      }
    ],
    "_fetched_at": 1786004427.226903,
    "_updated_label": "2026-08-06 17:21"
  },
  "QQQ": {
    "nextEarnings": null,
    "news": [
      {
        "headline": "Rates Spark: Market Optimism Helps Hawkish Bias",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=1fc1063d703918c4229ca9edf7b1763bf1f968bdcd1a30bded14619c1c2143bf",
        "datetime": 1785987900
      },
      {
        "headline": "August Perspective",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=fa238e6f76f512bdaf02989de0064f32a15e91d105b8dad23badcf2b46a47af1",
        "datetime": 1785987600
      },
      {
        "headline": "Implications Of New Market Highs",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=3b2849287aa1efbcbc94b28e98e535a81ba74bafa775ff3d7b803f0101e06946",
        "datetime": 1785987308
      },
      {
        "headline": "Underlying Inflation Gauges: Trimming Noise Or Trimming Signal?",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=0e9fb3146574e402e7172019c4a625609f30cfaa9bf0d8691e0c5f74762bf580",
        "datetime": 1785987060
      },
      {
        "headline": "Token Growth Is Surging - Here Are The Beneficiaries",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=2d1e8e1cf13e69dc6b8487980a0f91ee660299e4f4a05bb813294910b1bc64f4",
        "datetime": 1785986299
      }
    ],
    "_fetched_at": 1786004427.226903,
    "_updated_label": "2026-08-06 17:20"
  },
  "SPY": {
    "nextEarnings": null,
    "news": [
      {
        "headline": "What Determines Applied Materials’ Resilience on Aug 13 Earnings",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=afc0432fbe822e72c41b4089064373af0451f442f3f6e2b3d2b21c73619d28fa",
        "datetime": 1785988712
      },
      {
        "headline": "Alphabet Post-Earnings Rebound is On: Buy at $363?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=32570172915085c749285c3931a797891b7037791e6bba30979f51e3f86f1c05",
        "datetime": 1785988460
      },
      {
        "headline": "VNQ Returned 62.61% in 10 Years. SPY Returned 253.49%. Here’s the Hidden Cost Nobody Talks About",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c5db6efb398b2b15c23aaa7c9bc0d22a4eb55dd0435e98682c0f0e84b0bc1dc6",
        "datetime": 1785987946
      },
      {
        "headline": "Rates Spark: Market Optimism Helps Hawkish Bias",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=1fc1063d703918c4229ca9edf7b1763bf1f968bdcd1a30bded14619c1c2143bf",
        "datetime": 1785987900
      },
      {
        "headline": "August Perspective",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=fa238e6f76f512bdaf02989de0064f32a15e91d105b8dad23badcf2b46a47af1",
        "datetime": 1785987600
      }
    ],
    "_fetched_at": 1786004427.226903,
    "_updated_label": "2026-08-06 17:20"
  },
  "ORCL": {
    "nextEarnings": {
      "date": "2026-09-07",
      "hour": "",
      "epsEstimate": 1.7745
    },
    "news": [
      {
        "headline": "Retiring Soon? Good News—the Market Is Cooperating.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=137463df6faf2d54bf05fc2354b21e0a96abe7e4bf518adeb3090280965a625a",
        "datetime": 1785996000
      },
      {
        "headline": "Can CRM Stock Compound Its Way Higher?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=12c6f821430834e22bda8b9f583e135d2455f24fcb57530c65f18a1213bb4eaa",
        "datetime": 1785963590
      },
      {
        "headline": "ADBE Stock: Where Compounding Could Take The Price",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=95b965d75c315c055cb954cfdfcbadf133ab34539e17e28b8475e783df2a14e7",
        "datetime": 1785962778
      },
      {
        "headline": "Here's Why Oracle's Stock Continues to Lag its Peers Like Amazon, Microsoft, and Alphabet",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4e3b17031e9438bd7ab9b17394b16283340242533aef362a9e5428fb4e265aed",
        "datetime": 1785961278
      },
      {
        "headline": "ServiceNow Drops 23% Year to Date: Time to Hold the Stock or Fold?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1a229f0cdca9b00df236302af6193119b4b0ede21b98ed854152a35966a1a6aa",
        "datetime": 1785954000
      }
    ],
    "_fetched_at": 1786004427.226903,
    "_updated_label": "2026-08-06 17:20"
  },
  "CRM": {
    "nextEarnings": {
      "date": "2026-08-26",
      "hour": "amc",
      "epsEstimate": 3.3057
    },
    "news": [
      {
        "headline": "CRM, NOW, INTU, ADBE: Software Stocks Slide After Figma Flags Surging AI Costs",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=70446587065d2f7509feda942df2a9caf5d4886826413a626b0e5a2499fc12d1",
        "datetime": 1785981842
      },
      {
        "headline": "Magnite (MGNI) Q2 Earnings and Revenues Top Estimates",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ba1a576ecc96aef446bd06888f5caed75fc1bf52624125a51ecc28f5156350f5",
        "datetime": 1785976510
      },
      {
        "headline": "Why the Market Dipped But Salesforce (CRM) Gained Today",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=aa0e264ad48e6321f938f8c860e60317263c3dc40f01dbcc29ceec138d2fa5a3",
        "datetime": 1785966302
      },
      {
        "headline": "Stay updated with the S&P500 stocks that are on the move in today's after-hours session.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=0c31fe0b2d0caab81d508e5fdaea005a58287c2047d6405ce71ba4ef83761794",
        "datetime": 1785963901
      },
      {
        "headline": "Can CRM Stock Compound Its Way Higher?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=12c6f821430834e22bda8b9f583e135d2455f24fcb57530c65f18a1213bb4eaa",
        "datetime": 1785963590
      }
    ],
    "_fetched_at": 1786004427.226903,
    "_updated_label": "2026-08-06 17:20"
  },
  "PLTR": {
    "nextEarnings": {
      "date": "2026-11-02",
      "hour": "",
      "epsEstimate": 0.3782
    },
    "news": [
      {
        "headline": "Palantir Rally Just Created a $3 Billion Problem",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=85840077f2e9c24084fbb5c98f7de3855d49a13b870ba143762edf9a09601f75",
        "datetime": 1785988627
      },
      {
        "headline": "Palantir's Pathway Back To $200 Just Became A Lot Clearer",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=691594c8a71cac1dd62ebd98be3c01930d6855545651d6da62a157bcc42502b0",
        "datetime": 1785981239
      },
      {
        "headline": "Palantir: I Am Raising My Price Target As AIP Momentum Accelerates",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=6843119011838dd7de7ce9f6d48972138513dacb5f931968d8a906341d8794b1",
        "datetime": 1785977820
      },
      {
        "headline": "Palantir Says Companies Are Paying to Give Away Their 'Most Important Secrets'",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=74a4155205ee8fca1b1a353e876b0a150bc2b1bc8d02cfbb8e6f67446d62bd5f",
        "datetime": 1785976264
      },
      {
        "headline": "Palantir: Entering After The Post Q2 Rally Is The Price Of Being Right",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=2cc17c998f29911de0116f4256b43e9833765b20cdda359ec0eed2bd1d56cd32",
        "datetime": 1785971883
      }
    ],
    "_fetched_at": 1786004427.226903,
    "_updated_label": "2026-08-06 17:20"
  },
  "QCOM": {
    "nextEarnings": {
      "date": "2026-11-03",
      "hour": "amc",
      "epsEstimate": 2.2987
    },
    "news": [
      {
        "headline": "Scam.ai Launches Halo, Real-Time On-Device Deepfake Detection for Video Calls",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3cc276eb5718b1a38c5e1538f93544bda7efa78bb4d8a516a55fdc892e978f79",
        "datetime": 1785960540
      },
      {
        "headline": "How To Bank 14% On MU Stock Before Buying A Single Share",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f1d6f729dcbd447e681b37bbc742d6122cefee89f81993c32346f4aaad508796",
        "datetime": 1785954276
      },
      {
        "headline": "QRVO Rises 11.6% in the Past Month: Can the Rally Continue?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6b1146640a2ffcda85c6ae28800b0ab5d180eec643c00fc175074b94af7bdf58",
        "datetime": 1785948240
      },
      {
        "headline": "Marvell Stock Amplifies The Market You Already Own",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ca75658089b5d2e0660cf9056b0fdbb903ba36ffb8e07b9c285fa426786bc086",
        "datetime": 1785946434
      },
      {
        "headline": "Shares of solar-related stocks are trading lower after President Trump posted on social media that he is considering a \"massive increase of Tariffs on Chinese products coming into the United States of",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=5c8d77e10c8a19a63fb7802a4cc54f1195fa96cd13081719ddd431200b97cb8f",
        "datetime": 1785940132
      }
    ],
    "_fetched_at": 1786004427.226903,
    "_updated_label": "2026-08-06 17:21"
  },
  "ARM": {
    "nextEarnings": {
      "date": "2026-11-04",
      "hour": "",
      "epsEstimate": 0.4688
    },
    "news": [
      {
        "headline": "US Stock Market Today: S&P 500 Futures Edge Higher As Rate Hike Risks Linger",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a8d7db27d8aabe13fd246e49e63d338b9eb0f838ac7c179576696681db597290",
        "datetime": 1785917619
      },
      {
        "headline": "ARM Stock Just Posted Its Best Day In Over A Year — A Week After Q1 Beat: Retail Gets More Bullish",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2705731d575fa1ff0b23f6ffaaeb36f11f1ade1f17b49cb9f98fb8613e34be63",
        "datetime": 1785904992
      },
      {
        "headline": "Shares of companies in the broader semiconductor sector are trading nigher, rebounding after Thursday's weakness. Additionally, stocks across sectors are rising after NY Fed President Williams indicat",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=7458536a30c24259ca5b2aeb0b0fd7ae84b16f95e84f5ce9e430533e09c4ddf4",
        "datetime": 1785850356
      },
      {
        "headline": "Arm Jumps More Than 11%: Data Center Royalty Growth Drives Post-Selloff Semiconductor Rally",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=642413559b00149a2b71e8da4da142fcfaed48b8667747d630608015e4944183",
        "datetime": 1785837988
      },
      {
        "headline": "Caterpillar, Wayfair, Zebra Technologies, Gartner And Other Big Stocks Moving Higher On Tuesday",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=6cf1c194df61e099f9ae9ce5d8de327c37a2fc168cfeb333196537ade9ecb3bf",
        "datetime": 1785837651
      }
    ],
    "_fetched_at": 1786004427.226903,
    "_updated_label": "2026-08-06 17:21"
  },
  "MRVL": {
    "nextEarnings": {
      "date": "2026-08-27",
      "hour": "",
      "epsEstimate": 0.939
    },
    "news": [
      {
        "headline": "Marvell Is Positioned to Absorb a Disproportionate Amount of This AI Capex Surge, So I Keep Buying",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=179907e3438fb75a938a926573295ddbd996d50582303d5d4dcb7678ec888bd6",
        "datetime": 1785990188
      },
      {
        "headline": "Who Will Benefit Most From Amazon and Microsoft’s Hyperscaler Leading AI Capex This Quarter?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b3f5870014bc1d6118f5bb2f6299b2f33001d4f52dcb81c831e3cda211bfbad4",
        "datetime": 1785989297
      },
      {
        "headline": "The companies emerging as new leaders in this renewed AI rally",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=932eea13db773920965e98a45010824861bd09e9fa716b1d398590a9be2fe5a9",
        "datetime": 1785957336
      },
      {
        "headline": "Marvell Stock Amplifies The Market You Already Own",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ca75658089b5d2e0660cf9056b0fdbb903ba36ffb8e07b9c285fa426786bc086",
        "datetime": 1785946434
      },
      {
        "headline": "Can MRVL's Communications Recovery Drive Broad-Based Growth?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0abc8eac0d0dff8aac9b106766bc90e52a1b1ec38598c284b2257d8fe9414806",
        "datetime": 1785945120
      }
    ],
    "_fetched_at": 1786004427.226903,
    "_updated_label": "2026-08-06 17:21"
  },
  "ASML": {
    "nextEarnings": {
      "date": "2026-10-14",
      "hour": "bmo",
      "epsEstimate": 10.1558
    },
    "news": [
      {
        "headline": "Applied Materials Fell 11% Last Month: A Prominent Wall Street Pro Predicts 70% Gains Moving Forward",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c8cb743d60fe325d1d813f43900c2ff420bcb162814ce32bdb1f7547cb6e58bc",
        "datetime": 1785988040
      },
      {
        "headline": "ASML: AI Litho-Density Supercycle Vs. Closed-Loop Chinese DUV Fleet",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=133053bfa43fb815d136c052bdb9e6485fc828bdb71774d56d6a4444f2b1b1ff",
        "datetime": 1785977705
      },
      {
        "headline": "Will ASML Split Its Stock This Year?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=33448135d9f8b3be139f37557f4f6da0862226d556c0b6fa529d3d70c451aaff",
        "datetime": 1785958620
      },
      {
        "headline": "The Ultimate Bull Case for NVIDIA Is Here: Their Powerful B200 Systems Are Sold Out",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=49b49177eb351dc1c9db003e2f219634922510e6aaa63f4ee72ebb3b3c53173e",
        "datetime": 1785942006
      },
      {
        "headline": "Could ASML Holding N.V. (ASML) Be the Most Durable Winner From the AI Chip Boom?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=78222b3e1dc25da5a437ed1dbdcc6b837db3319b3906437e5bb1a99b57da758f",
        "datetime": 1785936796
      }
    ],
    "_fetched_at": 1786004427.226903,
    "_updated_label": "2026-08-06 17:21"
  },
  "LRCX": {
    "nextEarnings": {
      "date": "2026-10-20",
      "hour": "",
      "epsEstimate": 2.1446
    },
    "news": [
      {
        "headline": "One Massive AI Hardware Truth Keeps Me Loading Up On AMAT Ahead of Aug. 13 Earnings Print",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=167a5b632dab635bef577ac0cae6c15c37dee0862fc2c024b6bcd336ee784865",
        "datetime": 1785989990
      },
      {
        "headline": "Applied Materials Fell 11% Last Month: A Prominent Wall Street Pro Predicts 70% Gains Moving Forward",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c8cb743d60fe325d1d813f43900c2ff420bcb162814ce32bdb1f7547cb6e58bc",
        "datetime": 1785988040
      },
      {
        "headline": "Lam Research (LRCX) On Strong Earnings And AI Demand With Fair Value Still In Debate",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5b1deca5a37f58cdbabd57ba8a698c16058fe44a81eed1d6aa6d859d4f3eddb5",
        "datetime": 1785971706
      },
      {
        "headline": "Lam Research's Latest Earnings Report Says the AI Chip Supercycle Isn't Over. Here's Why.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e088e892fe60ab7d60299812df30f488f2f07dd725ea33f600e92c46443cb39a",
        "datetime": 1785953700
      },
      {
        "headline": "Lam Research Soars After Earnings. Are they the Top Semiconductor Equipment Buy?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7661da6f77252b3912a82230ceaa3558d1ad64adff0fbb574d8c6760ab322913",
        "datetime": 1785945023
      }
    ],
    "_fetched_at": 1786004427.226903,
    "_updated_label": "2026-08-06 17:21"
  },
  "KLAC": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "",
      "epsEstimate": 1.1971
    },
    "news": [
      {
        "headline": "TCW Concentrated Large Cap Growth Fund Q2 2026 Portfolio Update",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=a4be55e268c5a2f7a9605bc2cc25490523542cfe4ce6f261641d0211a5aa0a3c",
        "datetime": 1785988800
      },
      {
        "headline": "Applied Materials Fell 11% Last Month: A Prominent Wall Street Pro Predicts 70% Gains Moving Forward",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c8cb743d60fe325d1d813f43900c2ff420bcb162814ce32bdb1f7547cb6e58bc",
        "datetime": 1785988040
      },
      {
        "headline": "Brown Advisory Flexible Equity Strategy Q2 2026 Portfolio Activity",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=73b55282df1e30c21b0484c36bafd51d47b492ab49aa8791eecf2504d2e86788",
        "datetime": 1785932040
      },
      {
        "headline": "Megacap Earnings: Who Gets Paid When They Build?",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=276bc3684f3d4b5b98ef61eb4ee92d0162fa3f97160b85ed95582c552c62eb31",
        "datetime": 1785915000
      },
      {
        "headline": "KLA (KLAC) Stock Looks Fully Valued After Its Huge Run",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1345048618dc4502ffc0118dcfda25c2945059b1573763d5cc5dd322725e8aa9",
        "datetime": 1785870510
      }
    ],
    "_fetched_at": 1786004427.226903,
    "_updated_label": "2026-08-06 17:21"
  },
  "SNDK": {
    "nextEarnings": {
      "date": "2026-11-04",
      "hour": "",
      "epsEstimate": 41.473
    },
    "news": [
      {
        "headline": "SpaceX First-Quarter Print And A DeepMind Exit Split The Tape As Records Take A Breather",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=14c845aa763b92b7aa2ddc1e64b3096cd549decf921b9cc44798a7abe99cedc4",
        "datetime": 1786002284
      },
      {
        "headline": "Wall Street Is Selling Memory Stocks – Chipmakers Are Buying Them Back",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=07e54d8a4b43a5bf3572ff5de128663509cf4b031430358b82236ec6674e0b0b",
        "datetime": 1785993453
      },
      {
        "headline": "SanDisk Corp (SNDK) (Q4 2026) Earnings Call Highlights: Record Revenue and EPS Driven by AI ...",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8ffad3091f0711e22364395f6b9fe4f871e5fb47681d8185ee2e9ccf920683f5",
        "datetime": 1785992766
      },
      {
        "headline": "Sandisk Q4 Earnings Call Highlights",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4e5db06e64d32efb9526ffff51a89cf35c7000580838142ef9b6352c16dc446b",
        "datetime": 1785992635
      },
      {
        "headline": "SanDisk CEO David Goeckeler Expects PC and Smartphone Sales to Decline in 2026, But Sees NAND Recovery Ahead: Here's Why",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=39cc45bf17e230cdea2f7ae8993909396b445c04d840b3dd082226f90411c909",
        "datetime": 1785989169
      }
    ],
    "_fetched_at": 1786004427.226903,
    "_updated_label": "2026-08-06 17:21"
  },
  "WDC": {
    "nextEarnings": {
      "date": "2026-10-28",
      "hour": "",
      "epsEstimate": 3.7282
    },
    "news": [
      {
        "headline": "SpaceX First-Quarter Print And A DeepMind Exit Split The Tape As Records Take A Breather",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=14c845aa763b92b7aa2ddc1e64b3096cd549decf921b9cc44798a7abe99cedc4",
        "datetime": 1786002284
      },
      {
        "headline": "Western Digital Q4 Earnings Call Highlights",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3f2281a6f7783959a8169d9e9f30b38dc802e8d9cc90cfdc6bbc286c5924285f",
        "datetime": 1785999840
      },
      {
        "headline": "Wall Street Is Selling Memory Stocks – Chipmakers Are Buying Them Back",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=07e54d8a4b43a5bf3572ff5de128663509cf4b031430358b82236ec6674e0b0b",
        "datetime": 1785993453
      },
      {
        "headline": "Western Digital Corp (WDC) (Q4 2026) Earnings Call Highlights: Record Revenue and EPS Soar on ...",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=94650e4701aabb79ec99d6f982051e723124949f8fff3dafe46d9f2c5cfb857c",
        "datetime": 1785993331
      },
      {
        "headline": "WDC Stock Sinks 11% After-Hours Despite Earnings Beat — Retail Questions Selloff, Blames ‘Technicals And Algos’",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=14065cd11aa900bbcb2bd6cf7faf8d345b485d33d9828ada224253b56136b06a",
        "datetime": 1785973069
      }
    ],
    "_fetched_at": 1786004427.226903,
    "_updated_label": "2026-08-06 17:21"
  }
};
