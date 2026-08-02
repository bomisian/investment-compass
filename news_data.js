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
        "headline": "Micron Technology Stock Is Plummeting, but Here's Why I'm Not Buying the Dip",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3cea82195479b39b3cb085da4353092b0b8dfeaaca45cf6e2f2550daec11520a",
        "datetime": 1785692700
      },
      {
        "headline": "What if I Have $2 Million Saved for Retirement? Is It Really Enough to Stop Working?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d68a0ab2331d87ee665d90d00e9c1e607f05b7dad80e0c9381a057fe5f69e889",
        "datetime": 1785692100
      },
      {
        "headline": "Morgan Stanley Just Launched New Ethereum and Solana ETFs. Here's What It Could Mean for Crypto Investors.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3299fe009e8a2fc471efdc5c645e126f4308c7bbd13e16b6753d8e97e2925b27",
        "datetime": 1785691440
      },
      {
        "headline": "Semiconductor Sell-Off: 1 Chip Stock to Buy, 1 to Hold, and 1 to Sell",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=53dc35e8e45e3cbb6f1006c3d2c70467355a9277fdf6c86609785b38623e2bde",
        "datetime": 1785690300
      },
      {
        "headline": "Why Teva Pharmaceutical Stock Surged This Week",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ef91f2d4f6eef69316c4ff81941ad683f905114a9043f21e3aaae537b6a8eea9",
        "datetime": 1785690259
      }
    ],
    "_fetched_at": 1785697201.7061825,
    "_updated_label": "2026-08-03 04:00"
  },
  "AAPL": {
    "nextEarnings": {
      "date": "2026-10-28",
      "hour": "amc",
      "epsEstimate": 2.0468
    },
    "news": [
      {
        "headline": "Bank of America doubles down on Apple stock for rest of 2026",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0df70d94611fc003b92f080a366fc18dbbbea158ef866886e50549a42bbaf42a",
        "datetime": 1785690420
      },
      {
        "headline": "Microsoft vs. Apple: Comparing Revenue Trends and the Impact of Artificial Intelligence",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=92b603bde86ab1af6452ce67033d28545ec4121d5442d39aefcdba46d59cdc7b",
        "datetime": 1785676381
      },
      {
        "headline": "Is Apple Stock a Buy on the Dip as iPhone Sales Surge?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=14549ac982c2433d10847ae1ec1253c6d4d5cd607c12853206a1c17d3897ba29",
        "datetime": 1785674100
      },
      {
        "headline": "Prediction: Greg Abel Will Continue Holding This Berkshire Hathaway Stock That Warren Buffett Backed for Decades.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a68ace9ad93b0cb18feb511db1575e8ba78e3952e1c3527c3d4502c89afcbac5",
        "datetime": 1785666000
      },
      {
        "headline": "Apple's Selloff Looks More Like An Opportunity Than A Warning",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=6d6eda3ae2a624cfce7ec60dcd8090a2d8ede2e6b263fe5886dbadfb3906e4fa",
        "datetime": 1785658664
      }
    ],
    "_fetched_at": 1785697201.7061825,
    "_updated_label": "2026-08-03 04:00"
  },
  "GOOGL": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "amc",
      "epsEstimate": 3.1009
    },
    "news": [
      {
        "headline": "3 Reasons Why Berkshire Hathaway Owns $29 Billion of Alphabet Stock",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0de02bac18fa68956f7b6f0c65319f4843198259a8bab84b9f1779f3ad559ac9",
        "datetime": 1785689400
      },
      {
        "headline": "Nvidia vs. Alphabet: What Revenue Trends Reveal About the AI Leaders",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0060311df4276c2c667d4dcbe639921c29491ace3d79ba78230fddffb3845a25",
        "datetime": 1785686412
      },
      {
        "headline": "An Analyst Just Called Meta a Top Large-Cap Buy. Here’s Why We Agree.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=af896a98a2c84e56c4469d9bbec54c1aa33bdf34da7f4e20a962b9392bdc7cf3",
        "datetime": 1785682800
      },
      {
        "headline": "Warren Buffett Stepped Back From Berkshire Hathaway With a Bang; Its Investment in 1 AI Stock Now Tops $30 Billion",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4301863b685a1402ea7c7765c2ca66fda8ac5c7ba546c83194e4efc07c063017",
        "datetime": 1785681660
      },
      {
        "headline": "JPMorgan resets Amazon stock target after AI payoff",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a8d38a805cab43ec8cb5ef3949ae31e521f1b2d523e8dd27876e57bf92b6974f",
        "datetime": 1785679620
      }
    ],
    "_fetched_at": 1785697201.7061825,
    "_updated_label": "2026-08-03 04:00"
  },
  "MSFT": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "",
      "epsEstimate": 4.7263
    },
    "news": [
      {
        "headline": "As Cloud Revenue Soars, Is It Time to Buy Microsoft Stock?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=26cac8335784a88851bc3c21a9c6b888e2b2dd9f5af3358f485ff0074d855705",
        "datetime": 1785688500
      },
      {
        "headline": "Microsoft CEO Satya Nadella Says 'Every Model Is Substitutable' — What That Means For OpenAI",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=163d09d839a1da5e5aa47da812c7f168d612063870a6bb2bb988bed947b88139",
        "datetime": 1785684626
      },
      {
        "headline": "Microsoft vs. Meta Platforms: Which Is the Better Magnificent Seven Stock to Buy Right Now?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=da7090d455e47b100e2fce8eb087df4515660312fc7625283bceca6d8b7200e2",
        "datetime": 1785678180
      },
      {
        "headline": "Morgan Stanley spots four overlooked Meta profit engines",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b50118e14776d48a93065d721ba7b54d55421a5dfaaff25a42238b9b84b1c714",
        "datetime": 1785677580
      },
      {
        "headline": "Microsoft vs. Apple: Comparing Revenue Trends and the Impact of Artificial Intelligence",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=92b603bde86ab1af6452ce67033d28545ec4121d5442d39aefcdba46d59cdc7b",
        "datetime": 1785676381
      }
    ],
    "_fetched_at": 1785697201.7061825,
    "_updated_label": "2026-08-03 04:00"
  },
  "AMZN": {
    "nextEarnings": {
      "date": "2026-10-28",
      "hour": "amc",
      "epsEstimate": 1.9445
    },
    "news": [
      {
        "headline": "JPMorgan resets Amazon stock target after AI payoff",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a8d38a805cab43ec8cb5ef3949ae31e521f1b2d523e8dd27876e57bf92b6974f",
        "datetime": 1785679620
      },
      {
        "headline": "Amazon's debt nearly doubled to $129 billion in 6 months as CEO Jassy defends $220 billion data center spending spree",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a3d9724c6abb1f3db506609ceb17f8cd389486a06feb398c48c0cf9d889cf2d1",
        "datetime": 1785679200
      },
      {
        "headline": "Morgan Stanley spots four overlooked Meta profit engines",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b50118e14776d48a93065d721ba7b54d55421a5dfaaff25a42238b9b84b1c714",
        "datetime": 1785677580
      },
      {
        "headline": "FCLGO Launches Amazon Fulfillment Center Locations Routing Service to Eliminate FBA Compliance Rejections for Cross-Border Sellers",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4a54848aea4537b19a8ed42bf3201ac58c01eb6ab63713ff5e32d0ec7e39e4f3",
        "datetime": 1785675840
      },
      {
        "headline": "Warren Buffett Passed on This Stock for Over 7 Years. Greg Abel May Not Wait Any Longer.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=74c8e87e43806f57beb4d4cc80b3a20dc53e55f804cd98ee27415c7c067881bb",
        "datetime": 1785671100
      }
    ],
    "_fetched_at": 1785697201.7061825,
    "_updated_label": "2026-08-03 04:00"
  },
  "TSM": {
    "nextEarnings": {
      "date": "2026-10-14",
      "hour": "amc",
      "epsEstimate": 28.8828
    },
    "news": [
      {
        "headline": "Wall Street Week Ahead",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=6a9e8400d7341f9a25b45a9c8952c859d2f92fe0d0bc5c12a951ccc2c8e93cbf",
        "datetime": 1785655144
      },
      {
        "headline": "Ray Dalio Says US Is in Decline: 'Threats No Longer Work' in a World Where Order Breaks Down",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=b6432f81f550c59c0e126531be866039e2fbccaabd51a9c3eea07f5cf541b58f",
        "datetime": 1785515436
      },
      {
        "headline": "Recent Report Shows That Rep. Cleo Fields Bought Up to $15K Worth of Taiwan Semiconductor Stock",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=2bd195b80e2ff9330c219b5164161835164386b90196c5628487ee699b47355b",
        "datetime": 1785495617
      },
      {
        "headline": "TSMC Is Reportedly Developing Advanced Chip Packaging Tech to Challenge Intel's Dominance",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=6f01f31d428ad1ce398602e4d6e7df2e85bede132b78fc078a6869d391d692c9",
        "datetime": 1785473698
      },
      {
        "headline": "S&P 500 To 10,000 - Why, When, And How Stocks Get There",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=332c06affb02e4a84b12f7a5ebf98f8b806542277858d8efedfe6cfffece5249",
        "datetime": 1785467400
      }
    ],
    "_fetched_at": 1785697201.7061825,
    "_updated_label": "2026-08-03 04:01"
  },
  "AVGO": {
    "nextEarnings": {
      "date": "2026-09-02",
      "hour": "amc",
      "epsEstimate": 3.3012
    },
    "news": [
      {
        "headline": "3 Top Tech Stocks for Long-Term Growth and Income",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8dabc12c0fc8aa040a291cbd0a1ffd61e941cf641d8f2a899588e87aec3754dc",
        "datetime": 1785664680
      },
      {
        "headline": "Billionaire Steve Cohen Is Buying This Overlooked Stock While Dumping Big Tech",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4a105fcb1aa1c79f7c42bec4c28dbb7088d2f28fb67f80b9238f139eb5b0efd6",
        "datetime": 1785661440
      },
      {
        "headline": "What The Bipolar Silicon Market Structure Means Moving Forward: Nividia Vs. Broadcom",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=91ee972b795aeb965a3eb3e95deb4cb5c34ffb1138aa83f71e1af5935fafe876",
        "datetime": 1785593718
      },
      {
        "headline": "MarketBeat Week in Review – 07/27- 07/31",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1cc922ced795d9da440e685882a8ed10b093e94b40fc4102622ab8df73130eda",
        "datetime": 1785582000
      },
      {
        "headline": "These 3 Dividend ETFs Own Nvidia and Microsoft and Still Pay Up to 8 Percent",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=666f398b3c9903163793a2fb36e4591fd07d0216f6c1860a3081546801102cd9",
        "datetime": 1785521846
      }
    ],
    "_fetched_at": 1785697201.7061825,
    "_updated_label": "2026-08-03 04:00"
  },
  "META": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "amc",
      "epsEstimate": 7.1215
    },
    "news": [
      {
        "headline": "Meta’s Per-Token Pricing Shifts the Frontier From Human Headcount to AI Output",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6efb7c63dbd501b2ec124ae1614aac030b001fdf225c753edd0dad93b10c9c66",
        "datetime": 1785687646
      },
      {
        "headline": "An Analyst Just Called Meta a Top Large-Cap Buy. Here’s Why We Agree.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=af896a98a2c84e56c4469d9bbec54c1aa33bdf34da7f4e20a962b9392bdc7cf3",
        "datetime": 1785682800
      },
      {
        "headline": "Microsoft vs. Meta Platforms: Which Is the Better Magnificent Seven Stock to Buy Right Now?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=da7090d455e47b100e2fce8eb087df4515660312fc7625283bceca6d8b7200e2",
        "datetime": 1785678180
      },
      {
        "headline": "Morgan Stanley spots four overlooked Meta profit engines",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b50118e14776d48a93065d721ba7b54d55421a5dfaaff25a42238b9b84b1c714",
        "datetime": 1785677580
      },
      {
        "headline": "The tech stock dumpster fire should remind you of this important investing lesson",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f30c7ffd1545224e0b6fd99fe0439a7be0b35f8f5f4512e3c3fac8785795449e",
        "datetime": 1785673800
      }
    ],
    "_fetched_at": 1785697201.7061825,
    "_updated_label": "2026-08-03 04:00"
  },
  "TSLA": {
    "nextEarnings": {
      "date": "2026-10-20",
      "hour": "amc",
      "epsEstimate": 0.4492
    },
    "news": [
      {
        "headline": "Tesla and BYD Ride Global EV Boom — Five Countries See Growth More Than Double as Gas Prices Spike",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7561816aae6ca987ed146f1b477833c00a9225a54d11b1b2e9a2d4801b66937b",
        "datetime": 1785673830
      },
      {
        "headline": "Banks Offload Risk from Leveraged ETFs With Exotic ‘Crash Puts’",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=593212784647f86939eb2316e4f0aad193dabc87a6722b3c6bc5c6f6d1e0317b",
        "datetime": 1785668400
      },
      {
        "headline": "Tesla (TSLA) Explores China Split As SpaceX Merger Talk Draws Attention",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5bd92a491deaf95e8f0d6d0bb91d06423972d6735156ceb1d440e72ffafe6803",
        "datetime": 1785636469
      },
      {
        "headline": "Elon Musk's Tesla Delivered 480,126 Vehicles in Q2, a 25% Jump From a Year Ago",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4798a23d20cc5753600b2982262b5a45c0b23616f5dfc1ec19cf8dd4b57d7fcd",
        "datetime": 1785634500
      },
      {
        "headline": "Lucid Group Reports Earnings on August 4. Here's What Investors Should Be Watching.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4c36f48ecfe6b4c9140a55d9d9f0f8f9e810a87611cf56b3397d39789ceb650f",
        "datetime": 1785626096
      }
    ],
    "_fetched_at": 1785697201.7061825,
    "_updated_label": "2026-08-03 04:00"
  },
  "MU": {
    "nextEarnings": {
      "date": "2026-09-21",
      "hour": "amc",
      "epsEstimate": 32.2476
    },
    "news": [
      {
        "headline": "Micron Technology Stock Is Plummeting, but Here's Why I'm Not Buying the Dip",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3cea82195479b39b3cb085da4353092b0b8dfeaaca45cf6e2f2550daec11520a",
        "datetime": 1785692700
      },
      {
        "headline": "The Best-Performing S&P 500 Stocks Of 2026 So Far",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8cadbffc5e9353cdd1e84f3df18d3e54ea2629f3041632a36420d836d7e31ea7",
        "datetime": 1785679620
      },
      {
        "headline": "Micron Stock Is Down 39% From Its High. History Suggests a $5,000 Investment Now Will Be Worth This Much by Mid-2028.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ab4ff696394364e2a8a0064e359b823161fbba115b19e1c26ebf4dd80c5732d9",
        "datetime": 1785671400
      },
      {
        "headline": "Banks Offload Risk from Leveraged ETFs With Exotic ‘Crash Puts’",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=593212784647f86939eb2316e4f0aad193dabc87a6722b3c6bc5c6f6d1e0317b",
        "datetime": 1785668400
      },
      {
        "headline": "Here Are My 3 Top Artificial Intelligence (AI) Stocks to Buy in August",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f7b7d2614829f459ba5e7737ad04dc3c9e53640949c05b1044512f4d29f9e24c",
        "datetime": 1785658800
      }
    ],
    "_fetched_at": 1785697201.7061825,
    "_updated_label": "2026-08-03 04:01"
  },
  "AMD": {
    "nextEarnings": {
      "date": "2026-08-04",
      "hour": "amc",
      "epsEstimate": 1.631
    },
    "news": [
      {
        "headline": "Dow Jones Futures Due As Trump Calls Off Iran Attacks; SpaceX, AMD, Sandisk, Eli Lilly Earnings Loom",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9598b716b4a3ca680e2f0775898cfa28c372ceee758a15137f93f30eae0f996a",
        "datetime": 1785677572
      },
      {
        "headline": "Advanced Micro Devices vs. Arm: Which Tech Stock Is a Better Buy in 2026?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c610e329289aad1a5d8051660ec3f9d7cfb358fd2ac7304e16c3a3fc7bd39764",
        "datetime": 1785675001
      },
      {
        "headline": "Wall Street Week Ahead",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=6a9e8400d7341f9a25b45a9c8952c859d2f92fe0d0bc5c12a951ccc2c8e93cbf",
        "datetime": 1785655144
      },
      {
        "headline": "Dow Jones Futures: Trump Calls Off Iran Attacks; SpaceX, AMD, Sandisk, Eli Lilly Earnings Loom",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ef70e07437fc55e34162edf0b7750dff563ec23b7f0259e98ca3b25df6cfb679",
        "datetime": 1785640019
      },
      {
        "headline": "Top Four Nasdaq 100 Stocks to Watch Next Week: AMD, Uber, Palantir, Airbnb",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=aa279fcdc74385c4ce84c3cbf08930b5481f27af7343e1c36e115bcdf521e97a",
        "datetime": 1785594317
      }
    ],
    "_fetched_at": 1785697201.7061825,
    "_updated_label": "2026-08-03 04:00"
  },
  "INTC": {
    "nextEarnings": {
      "date": "2026-10-21",
      "hour": "amc",
      "epsEstimate": 0.3936
    },
    "news": [
      {
        "headline": "1 Beaten-Down Semiconductor Stock That Could Make a Comeback",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7531b02b97e6a7b74b417ed5bb90e5244442b8de9f7c447f10e10c2c25bea16e",
        "datetime": 1785677409
      },
      {
        "headline": "TSMC Is Reportedly Developing Advanced Chip Packaging Tech to Challenge Intel's Dominance",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=bbcffad250950b0d88b01ab065fe85a7572f55c688c20f83a6625576de3ace49",
        "datetime": 1785621622
      },
      {
        "headline": "Here's What Morgan Stanley Says About Buying the AI Infrastructure Dip",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a18b93b38c74fc94c2f9fa6b74fbd2a5c239c324519e5680d7cbd388f3ca9d42",
        "datetime": 1785601080
      },
      {
        "headline": "The 5 Most Interesting Analyst Questions From Intel’s Q2 Earnings Call",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e7c1204f060ec02c596c6ed6b03efda6182956b3052f67039a6a24f4d7be0165",
        "datetime": 1785599757
      },
      {
        "headline": "Elon Musk's Net Worth Down Nearly $700 Billion Amid Tesla, SpaceX Merger Rumors",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=5b675b85b97d234d924486908115987ea485aa1a2a78d53ca94ad9426fe3d487",
        "datetime": 1785598579
      }
    ],
    "_fetched_at": 1785697201.7061825,
    "_updated_label": "2026-08-03 04:01"
  },
  "AMAT": {
    "nextEarnings": {
      "date": "2026-08-13",
      "hour": "amc",
      "epsEstimate": 3.462
    },
    "news": [
      {
        "headline": "Applied Materials Rose 15% on Thursday and Is Still More Than 30% Below Its High. It Reports on Aug. 13.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=47bca66728fe8470c4a06e63021aef050a8c46ce2efc179604d725288e605d21",
        "datetime": 1785602760
      },
      {
        "headline": "Applied Materials: July Purged Positioning, Not The Thesis",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=9bd4ec4fce65af234f05beaa42096cff30183d23b3b706e2f7b9593b2644dd19",
        "datetime": 1785593882
      },
      {
        "headline": "Benzinga Bulls And Bears: Amazon, Microsoft, SpaceX",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=b593a1a8b608a1e35c900bdb49b3e36d6bf3ab0704ceba01b073e6871a159a43",
        "datetime": 1785571235
      },
      {
        "headline": "Here's How Much $100 Invested In Applied Materials 20 Years Ago Would Be Worth Today",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=e8bef1e0f625c86a117ec4f370d954f47136783c465737b299f6ac11078f4c9e",
        "datetime": 1785519927
      },
      {
        "headline": "Applied Materials: Why I'm Maintaining A 'Strong Buy' After A 45% Run",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=07b8ab9b47dbe8a93f5183ea051b1bb79d18085050e8502d8f3aa4597433bc92",
        "datetime": 1785509720
      }
    ],
    "_fetched_at": 1785697201.7061825,
    "_updated_label": "2026-08-03 04:01"
  },
  "QQQ": {
    "nextEarnings": null,
    "news": [
      {
        "headline": "Warsh Wants Fewer Fed Meetings: Markets May Pay The Price",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=aaaa8fda0ec994fa41f9cd8357e08a5489274e42993c4ed44deaf7364cf2dce2",
        "datetime": 1785665508
      },
      {
        "headline": "A Major Breakout In Treasury Yields May Be Underway",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=ee81ea16b90853d520887b42b080a4ac06f1f91487b0063115970f0b4ac55f76",
        "datetime": 1785664500
      },
      {
        "headline": "The Momentum Crash: Is It Over?",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=e71f40c77550adc1e32a3460a0a46b2dc117beba026277fb994d04c829c01bb7",
        "datetime": 1785658200
      },
      {
        "headline": "4 Hyperscalers, One Message: The AI Trade Isn't Over",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=2dfc731a253f0f6510b921f41bf7635382fb7e17c71d064458b6927692f26023",
        "datetime": 1785639935
      },
      {
        "headline": "Red-Hot Inflation And (Inflation-Adjusted) Strong Domestic Private-Sector Demand Marks Q2 GDP - Debt-To-GDP Ratio Dips To 121.5%",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=bc101f4070cf350fad16586994730c1e66f3c58877e5c9d06111b1e94e1c634b",
        "datetime": 1785630600
      }
    ],
    "_fetched_at": 1785697201.7061825,
    "_updated_label": "2026-08-03 04:00"
  },
  "SPY": {
    "nextEarnings": null,
    "news": [
      {
        "headline": "SPYM: S&P 500 Monthly Dashboard For August",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=b04f9a6c8829b02c6eb773f303ffdf8e259ac9196b46eea886a694a40be45e2c",
        "datetime": 1785671642
      },
      {
        "headline": "Warsh Wants Fewer Fed Meetings: Markets May Pay The Price",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=aaaa8fda0ec994fa41f9cd8357e08a5489274e42993c4ed44deaf7364cf2dce2",
        "datetime": 1785665508
      },
      {
        "headline": "A Major Breakout In Treasury Yields May Be Underway",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=ee81ea16b90853d520887b42b080a4ac06f1f91487b0063115970f0b4ac55f76",
        "datetime": 1785664500
      },
      {
        "headline": "A Hawkish Hold, A Steeper Curve",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=0bd0fe3250c62e2f3b8e453a60c035e19a85c9ef9db7c995f7ee47cf3111f1ac",
        "datetime": 1785661200
      },
      {
        "headline": "The Momentum Crash: Is It Over?",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=e71f40c77550adc1e32a3460a0a46b2dc117beba026277fb994d04c829c01bb7",
        "datetime": 1785658200
      }
    ],
    "_fetched_at": 1785697201.7061825,
    "_updated_label": "2026-08-03 04:00"
  },
  "ORCL": {
    "nextEarnings": {
      "date": "2026-09-07",
      "hour": "",
      "epsEstimate": 1.7745
    },
    "news": [
      {
        "headline": "Prediction: Salesforce Will End The Year At This Price",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9b3422411f900bb493c77bd613cbe53b800aeed41f4a6a371d995a518c93aba4",
        "datetime": 1785688234
      },
      {
        "headline": "4 Hyperscalers, One Message: The AI Trade Isn't Over",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=2dfc731a253f0f6510b921f41bf7635382fb7e17c71d064458b6927692f26023",
        "datetime": 1785639935
      },
      {
        "headline": "Is Oracle (ORCL) Using Google’s Gemini Tie-Up To Reframe Its Core AI Investment Narrative?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6abf97392666813e9e6ce0ed6b384c9e6aa5474ea9e0e5f832bc09c2693a36a1",
        "datetime": 1785557874
      },
      {
        "headline": "This Tech Giant Is Investing Billions in AI. Here’s Why It Could Pay Off.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=61fda16ce875b0548017865288151434e242c299364ec8133f7aae0c6486eb22",
        "datetime": 1785522616
      },
      {
        "headline": "Is IBM Stock Worth Buying After Its Steep 2026 Share Price Pullback?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cb8a0cecee3b1c5a1a0ef88b3d17148fa8ca094cbdad6d3b2df2fdc072b8303b",
        "datetime": 1785519660
      }
    ],
    "_fetched_at": 1785697201.7061825,
    "_updated_label": "2026-08-03 04:00"
  },
  "CRM": {
    "nextEarnings": {
      "date": "2026-08-26",
      "hour": "amc",
      "epsEstimate": 3.3057
    },
    "news": [
      {
        "headline": "Prediction: Salesforce Will End The Year At This Price",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9b3422411f900bb493c77bd613cbe53b800aeed41f4a6a371d995a518c93aba4",
        "datetime": 1785688234
      },
      {
        "headline": "The Salesforce Dip Is a Buying Opportunity",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c2691e6003b3f92d12f319e8a63dd5cdded3d6ee35f69fdf38470ee47fa424e9",
        "datetime": 1785683100
      },
      {
        "headline": "Jim Cramer says Wall Street is 'fleeing' AI stocks after a 7% drop — and buying Salesforce, Walmart instead",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ebef1051262a3d8db615d7799ece1a95763fe639e1311629478e4e49c5b38c5f",
        "datetime": 1785672000
      },
      {
        "headline": "1 Software Stock with Exciting Potential and 2 We Find Risky",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=df182c924aa34802d2752c4f127125cdc9fac0aa5e1e75aea6cd8f85a9f053af",
        "datetime": 1785572397
      },
      {
        "headline": "Jim Cramer Said Trouble Was Brewing As Salesforce Inc. (NYSE:CRM)’s Shares Rose",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=885c8e3a5649be5833060ea8cb521a7c5525d6bcb67b706099a384de2caaf364",
        "datetime": 1785551732
      }
    ],
    "_fetched_at": 1785697201.7061825,
    "_updated_label": "2026-08-03 04:00"
  },
  "PLTR": {
    "nextEarnings": {
      "date": "2026-08-03",
      "hour": "amc",
      "epsEstimate": 0.3544
    },
    "news": [
      {
        "headline": "Stock Market Week Ahead: Citadel, SpaceX, Palantir And This Key Market Signal",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=334b9ecb887e7ab02cf81248ba67cf4296d83139f22c7d650a42d363253b1ad2",
        "datetime": 1785677598
      },
      {
        "headline": "Wall Street Week Ahead",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=6a9e8400d7341f9a25b45a9c8952c859d2f92fe0d0bc5c12a951ccc2c8e93cbf",
        "datetime": 1785655144
      },
      {
        "headline": "Palantir Technologies (PLTR) Q2 Earnings: What To Expect",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ee3ee955f4556cd162b7ee6ab032b31e5344ae778ffdcf5ac312cd081c97af84",
        "datetime": 1785655017
      },
      {
        "headline": "The Market Now Says Palantir Technologies Is Just an LLM Wrapper. The Financials Disagree",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=632b77a938e823accc9744175706fb6e1b88a50519fedb8000fb996633797a38",
        "datetime": 1785595414
      },
      {
        "headline": "Top Four Nasdaq 100 Stocks to Watch Next Week: AMD, Uber, Palantir, Airbnb",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=aa279fcdc74385c4ce84c3cbf08930b5481f27af7343e1c36e115bcdf521e97a",
        "datetime": 1785594317
      }
    ],
    "_fetched_at": 1785697201.7061825,
    "_updated_label": "2026-08-03 04:00"
  },
  "QCOM": {
    "nextEarnings": {
      "date": "2026-11-03",
      "hour": "amc",
      "epsEstimate": 2.2987
    },
    "news": [
      {
        "headline": "1 Incredible Reason to Buy Qualcomm Stock Right Now",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=595bc8b8e57e97b1c2a6f881c90e54409ee14a28eda19cbe23de4efd58243402",
        "datetime": 1785659100
      },
      {
        "headline": "Why Investors Shouldn’t Sweat the Dip in Qualcomm’s Handset Revenue, According to Experts",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0cf0070af1e709df5035f5336bdfd0550d5192b4601faef44115bf6bd4a3740b",
        "datetime": 1785596402
      },
      {
        "headline": "Marvell Technology Is Betting More Of Its Revenue On One End Market",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=427d251700e4700db464e95f801ad6bca834d60888601efedc6c69ae5ba2f71a",
        "datetime": 1785517769
      },
      {
        "headline": "Qualcomm Announces Resale Registration Of Up To 17,826,566 Shares Issued In Modular Acquisition; Company Will Not Receive Proceeds",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=819e90b175b77b650598500f7b6ea8ee6fb361973b8d181c46ae99536282efd9",
        "datetime": 1785514856
      },
      {
        "headline": "Michael Burry Just Turned His Guns on Nvidia, Micron and SOXX — ETF Investors Are Watching the Fallout",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=6fab2a7c33c56675fae9f8f266813fb3b95b1b4a6b5d9f537c30b147d1f81b8a",
        "datetime": 1785513657
      }
    ],
    "_fetched_at": 1785697201.7061825,
    "_updated_label": "2026-08-03 04:00"
  },
  "ARM": {
    "nextEarnings": {
      "date": "2026-11-04",
      "hour": "",
      "epsEstimate": 0.4688
    },
    "news": [
      {
        "headline": "Advanced Micro Devices vs. Arm: Which Tech Stock Is a Better Buy in 2026?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c610e329289aad1a5d8051660ec3f9d7cfb358fd2ac7304e16c3a3fc7bd39764",
        "datetime": 1785675001
      },
      {
        "headline": "A $2 Billion Reason to Buy Arm Holdings Stock Now",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3939ba6978fa025e5becb861da5b66ccc6d8afc3fc52a35cf4f80ae2129daaf0",
        "datetime": 1785592802
      },
      {
        "headline": "Delivering Measurable AI Strategies: ICR CEO Anton Nicholas, Live at Nasdaq",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e320fab1ddf87d306e738d4ad77e102b5da9fd40245831e8add6145b1d9216c1",
        "datetime": 1785513854
      },
      {
        "headline": "1 Key Metric To Watch That Could Send Arm Stock Soaring",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0249875e115412939fc70b508a7c274fbf936b9c8aea31840e93d53e74144bda",
        "datetime": 1785501300
      },
      {
        "headline": "Arm (ARM) Stock Looks Pricey On Book Value Yet Strong On AI Growth",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=00b60b2ab5ee75a42261760e1db73c0c1d8e7a8ee0eed3e424e1c5ba06a8d334",
        "datetime": 1785492410
      }
    ],
    "_fetched_at": 1785697201.7061825,
    "_updated_label": "2026-08-03 04:00"
  },
  "MRVL": {
    "nextEarnings": {
      "date": "2026-08-20",
      "hour": "",
      "epsEstimate": 0.939
    },
    "news": [
      {
        "headline": "Marvell Technology (MRVL) Exceeds Market Returns: Some Facts to Consider",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f28c4df849c62e3a6a47d5540d5ede1f0df1706e7dfd13d3712bf6591aac64c3",
        "datetime": 1785534303
      },
      {
        "headline": "Should You Buy, Sell, or Hold ALAB Stock Before Q2 Earnings Release?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2154f428b7fdfefd7412fa1ba9a79a95158ebf57650d7beeff70749f05a8e1d3",
        "datetime": 1785519540
      },
      {
        "headline": "Marvell Technology Is Betting More Of Its Revenue On One End Market",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=427d251700e4700db464e95f801ad6bca834d60888601efedc6c69ae5ba2f71a",
        "datetime": 1785517769
      },
      {
        "headline": "Amazon, Apple, Microsoft, Micron, Roblox, Reddit, SK Hynix, and More Stocks That Explain Today’s Market",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=911401ccbf7cb4f2130f9472945ecab9467870e9b502487a641cb1e99cb9d27c",
        "datetime": 1785515880
      },
      {
        "headline": "Marvell Stock Has Been Cut in Half. Its Biggest Fear May No Longer Be Valid.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=be57433ae7c1279cc48f58dcf5b358cf22fb948884a46fdfd167ec5b7ca3319b",
        "datetime": 1785510378
      }
    ],
    "_fetched_at": 1785697201.7061825,
    "_updated_label": "2026-08-03 04:00"
  },
  "ASML": {
    "nextEarnings": {
      "date": "2026-10-14",
      "hour": "bmo",
      "epsEstimate": 10.1558
    },
    "news": [
      {
        "headline": "ASML vs. TSMC: Which Semiconductor Supply Chain Stock Is the Better AI Play?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=955e856779ddb246f1b2c3d809de78732d1ca1e143646fd1f6e405c5e9335345",
        "datetime": 1785687840
      },
      {
        "headline": "Should You Buy Billionaire Investor Stephen Mandel’s Top 5 Stock Picks in August?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2f6c29e338ea816eff45904a29bd88cd84c8424321ccb256095fb687fc6a352f",
        "datetime": 1785681005
      },
      {
        "headline": "AI Isn’t a Catch-All Trade for Stocks in This Earnings Season",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3710e10670679477961b842503e09f6be7df6cbf98c00514a1437a27522315a2",
        "datetime": 1785585600
      },
      {
        "headline": "What Makes ASML (ASML) a New Strong Buy Stock",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e46dad8b9596250bd63faeb98f8ef0b9a00d6233368bd833fb276a3e8803cb01",
        "datetime": 1785513603
      },
      {
        "headline": "Best Momentum Stock to Buy for July 31st",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e90abe161a0972d8e546176f22aca4fd80f5e21cd9d8e049e5857eda7063788a",
        "datetime": 1785506400
      }
    ],
    "_fetched_at": 1785697201.7061825,
    "_updated_label": "2026-08-03 04:01"
  },
  "LRCX": {
    "nextEarnings": {
      "date": "2026-10-20",
      "hour": "",
      "epsEstimate": 2.1446
    },
    "news": [
      {
        "headline": "Applied Materials Rose 15% on Thursday and Is Still More Than 30% Below Its High. It Reports on Aug. 13.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=47bca66728fe8470c4a06e63021aef050a8c46ce2efc179604d725288e605d21",
        "datetime": 1785602760
      },
      {
        "headline": "AI Isn’t a Catch-All Trade for Stocks in This Earnings Season",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3710e10670679477961b842503e09f6be7df6cbf98c00514a1437a27522315a2",
        "datetime": 1785585600
      },
      {
        "headline": "Benzinga Bulls And Bears: Amazon, Microsoft, SpaceX",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=b593a1a8b608a1e35c900bdb49b3e36d6bf3ab0704ceba01b073e6871a159a43",
        "datetime": 1785571235
      },
      {
        "headline": "Tech specialist explains why China memory fears are overblown",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9449111c6a1a21ab85fc12914cc8aee2f8fddee741a3e02f73e88e780fe3309b",
        "datetime": 1785507380
      },
      {
        "headline": "Vishay Q2 Earnings Loom: Buy, Sell or Hold the Stock Ahead of Results?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3d6d28d1545cb394f3592bea718e9f1a0c72e0b8211ec40c5f9c3ac08b4df036",
        "datetime": 1785503760
      }
    ],
    "_fetched_at": 1785697201.7061825,
    "_updated_label": "2026-08-03 04:01"
  },
  "KLAC": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "",
      "epsEstimate": 1.1971
    },
    "news": [
      {
        "headline": "Top 25 High-Growth Dividend Stocks For August 2026",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=029774edf61c80fb92e2cc87f454bb45e5fbaeb0b947089442175e57684b2ede",
        "datetime": 1785666049
      },
      {
        "headline": "Benzinga Bulls And Bears: Amazon, Microsoft, SpaceX",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=b593a1a8b608a1e35c900bdb49b3e36d6bf3ab0704ceba01b073e6871a159a43",
        "datetime": 1785571235
      },
      {
        "headline": "Here's How Much $1000 Invested In KLA 20 Years Ago Would Be Worth Today",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=5047743b874144b69b058c4c939950840184b97ea39eeffcfa0e025aa91a6fe7",
        "datetime": 1785516321
      },
      {
        "headline": "KLA (KLAC) Upgraded to Strong Buy: What Does It Mean for the Stock?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e135a5f171691f164ff9ea0a48f319975e1b9b59c8756f4cddda9eeb4dd8fbab",
        "datetime": 1785513604
      },
      {
        "headline": "Best Momentum Stock to Buy for July 31st",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e90abe161a0972d8e546176f22aca4fd80f5e21cd9d8e049e5857eda7063788a",
        "datetime": 1785506400
      }
    ],
    "_fetched_at": 1785697201.7061825,
    "_updated_label": "2026-08-03 04:01"
  },
  "SNDK": {
    "nextEarnings": {
      "date": "2026-08-05",
      "hour": "amc",
      "epsEstimate": 35.1395
    },
    "news": [
      {
        "headline": "The Best-Performing S&P 500 Stocks Of 2026 So Far",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8cadbffc5e9353cdd1e84f3df18d3e54ea2629f3041632a36420d836d7e31ea7",
        "datetime": 1785679620
      },
      {
        "headline": "Prediction: Western Digital Gets Back to Its High Before Sandisk Gets Back to Its Own.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=37c5d1f2e5144c89aaf3289e57f8c73524c716ecba97dab132dc81ad698d727b",
        "datetime": 1785677640
      },
      {
        "headline": "Dow Jones Futures Due As Trump Calls Off Iran Attacks; SpaceX, AMD, Sandisk, Eli Lilly Earnings Loom",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9598b716b4a3ca680e2f0775898cfa28c372ceee758a15137f93f30eae0f996a",
        "datetime": 1785677572
      },
      {
        "headline": "Banks Offload Risk from Leveraged ETFs With Exotic ‘Crash Puts’",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=593212784647f86939eb2316e4f0aad193dabc87a6722b3c6bc5c6f6d1e0317b",
        "datetime": 1785668400
      },
      {
        "headline": "Dow Jones Futures: Trump Calls Off Iran Attacks; SpaceX, AMD, Sandisk, Eli Lilly Earnings Loom",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ef70e07437fc55e34162edf0b7750dff563ec23b7f0259e98ca3b25df6cfb679",
        "datetime": 1785640019
      }
    ],
    "_fetched_at": 1785697201.7061825,
    "_updated_label": "2026-08-03 04:01"
  },
  "WDC": {
    "nextEarnings": {
      "date": "2026-08-05",
      "hour": "amc",
      "epsEstimate": 3.3281
    },
    "news": [
      {
        "headline": "Prediction: Western Digital Gets Back to Its High Before Sandisk Gets Back to Its Own.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=37c5d1f2e5144c89aaf3289e57f8c73524c716ecba97dab132dc81ad698d727b",
        "datetime": 1785677640
      },
      {
        "headline": "The AI Memory Boom Just Got a Reality Check—And a Better Entry Point",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b674836f78863908263d25b1a9f487c83203bfe8448fab1ab427655e193e0c9f",
        "datetime": 1785601920
      },
      {
        "headline": "MarketBeat Week in Review – 07/27- 07/31",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1cc922ced795d9da440e685882a8ed10b093e94b40fc4102622ab8df73130eda",
        "datetime": 1785582000
      },
      {
        "headline": "SanDisk Is Down 45% in a Month. Should Memory Investors Switch to Micron or SK Hynix Now?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7e28bab087400535e6536ceb60e7e7c4d7e3a0e78ce610bbbdab9249f01f3f3e",
        "datetime": 1785522966
      },
      {
        "headline": "Down 45%, is SanDisk stock a bargain buy or value trap?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cbd9c43378604a427551b97249a18f9332d78e1aa1420a9147abf10f0462c628",
        "datetime": 1785519180
      }
    ],
    "_fetched_at": 1785697201.7061825,
    "_updated_label": "2026-08-03 04:01"
  }
};
