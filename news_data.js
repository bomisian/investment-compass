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
        "headline": "If You'd Invested $10,000 in Bitcoin 10 Years Ago, Here's How Much You Would Have Today",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=58f9679b03a6693593b588e46fc72cd2cb59604a237c5d18a37b1ccabd96deb4",
        "datetime": 1785663840
      },
      {
        "headline": "Dan Ives Says Nvidia Demand Is Outpacing Supply \"12 to 1.\" Here's What That Means for the Stock's Next Move.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=71f5f020f13fbf5c7fe7088497b199d6d04c5c2f9881ef201711c38e84b293e7",
        "datetime": 1785662820
      },
      {
        "headline": "U.S. Air Force Taps Rocket Lab to Sell It 12 Hypersonic Missiles for $266 Million. Here's What Investors Need to Know.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4c5e4d1dd6d364e5c8c830da68cdd367d8bd48385632a4954c0c63b89772ce02",
        "datetime": 1785662700
      },
      {
        "headline": "Nebius and CoreWeave Stocks are Plummeting. Is It Time to Buy the Dip?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1bd8a6dccc794f5e4efeca56cfc13ba073d6127b3e18cf40c25afe93a1c57d0b",
        "datetime": 1785662400
      },
      {
        "headline": "Billionaire Steve Cohen Is Buying This Overlooked Stock While Dumping Big Tech",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4a105fcb1aa1c79f7c42bec4c28dbb7088d2f28fb67f80b9238f139eb5b0efd6",
        "datetime": 1785661440
      }
    ],
    "_fetched_at": 1785672080.3430014,
    "_updated_label": "2026-08-02 21:01"
  },
  "AAPL": {
    "nextEarnings": {
      "date": "2026-10-28",
      "hour": "amc",
      "epsEstimate": 2.0468
    },
    "news": [
      {
        "headline": "Apple: Unjustified AI Premium",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=eaa4fbedb892e048e0561cde76b12f3ff4658c924c22d60d364c940a6c0572b3",
        "datetime": 1785655494
      },
      {
        "headline": "Apple’s record iPhone boom just became a Wall Street trap",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9983043beec982f2d1c556503310ec4749dc8457dbf07eafa9fa51fd7393711c",
        "datetime": 1785632580
      },
      {
        "headline": "US Schools Are Ditching Chromebooks for MacBooks by the Thousands— Apple Just Named Names",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7ffa2c397b72597364cc963c73a6ba122f5e0c1ec01d6c949d87b80d88c9284c",
        "datetime": 1785627015
      },
      {
        "headline": "Apple CEO sends strong warning on AI and price of Apple products",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f01b2e5fd3bfb6cb34b861441e283c05f93bfdd81fa6a9197720a911292f34eb",
        "datetime": 1785614820
      },
      {
        "headline": "Apple's Services Slowdown Has a Weird Culprit: No F1 Movie This Year",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=313052590fb04c5fab270d3a2f7cfdaaf5c2405e48e8d82b6c24f6d3e06d1e98",
        "datetime": 1785612627
      }
    ],
    "_fetched_at": 1785672080.3430014,
    "_updated_label": "2026-08-02 21:01"
  },
  "GOOGL": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "amc",
      "epsEstimate": 3.1009
    },
    "news": [
      {
        "headline": "Here Are My 3 Top Artificial Intelligence (AI) Stocks to Buy in August",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f7b7d2614829f459ba5e7737ad04dc3c9e53640949c05b1044512f4d29f9e24c",
        "datetime": 1785658800
      },
      {
        "headline": "Why Now Is Finally the Time to Buy the Big Three Cloud Computing Stocks Before It's Too Late",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d00fe5a68b934fa0ca2693cb4ba28fbd81133f018de70792ae2b45eaf497de2a",
        "datetime": 1785654900
      },
      {
        "headline": "Nvidia vs. Alphabet: What Do Revenue Trends Tell Investors About These Artificial Intelligence Companies?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=96e365fac0c2d3275358c1ea770c61031180856ccf2e1b77ac43bdf2acd942c0",
        "datetime": 1785633901
      },
      {
        "headline": "Reddit Stock Tumbles as CEO Says Google Search Referrals Were 'Choppy,' Pushes Users to Its App",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c0752daf978d5d852fe73fdc9ee57818a0d350567bff836bd99ddd878d6dffe9",
        "datetime": 1785616215
      },
      {
        "headline": "Google traffic wobble sends major signal for sinking Reddit stock",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=bc84bcc4eb8f923170e58b46e34f9533aa8c0108f8bfc33bccca7ca3872b8051",
        "datetime": 1785604020
      }
    ],
    "_fetched_at": 1785672080.3430014,
    "_updated_label": "2026-08-02 21:01"
  },
  "MSFT": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "",
      "epsEstimate": 4.7263
    },
    "news": [
      {
        "headline": "Why Now Is Finally the Time to Buy the Big Three Cloud Computing Stocks Before It's Too Late",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d00fe5a68b934fa0ca2693cb4ba28fbd81133f018de70792ae2b45eaf497de2a",
        "datetime": 1785654900
      },
      {
        "headline": "3 Brilliant Artificial Intelligence (AI) Stocks Billionaire Bill Ackman Owns That You Should Too",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=dc0ca69ad5784ceff25dcb273afe8516eb3d77c4a333253734d1a4971af46132",
        "datetime": 1785644400
      },
      {
        "headline": "4 Hyperscalers, One Message: The AI Trade Isn't Over",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=2dfc731a253f0f6510b921f41bf7635382fb7e17c71d064458b6927692f26023",
        "datetime": 1785639935
      },
      {
        "headline": "Microsoft Stock Is Up 26% From Its 52-Week Low: Buy the Rally or Wait It Out?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=febc81505ff0d60e0ab5213cb0aad877fbbbf60acc6886261f78c354ea57c365",
        "datetime": 1785626400
      },
      {
        "headline": "Microsoft (MSFT) Faces Consumer Probes Over Microsoft 365 And Copilot Changes",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=dbd60c8da819c9ef6cb4b8014bc27d1b276a7b57cbdd286b3f7173e41e1394e6",
        "datetime": 1785607729
      }
    ],
    "_fetched_at": 1785672080.3430014,
    "_updated_label": "2026-08-02 21:01"
  },
  "AMZN": {
    "nextEarnings": {
      "date": "2026-10-28",
      "hour": "amc",
      "epsEstimate": 1.9445
    },
    "news": [
      {
        "headline": "Why Now Is Finally the Time to Buy the Big Three Cloud Computing Stocks Before It's Too Late",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d00fe5a68b934fa0ca2693cb4ba28fbd81133f018de70792ae2b45eaf497de2a",
        "datetime": 1785654900
      },
      {
        "headline": "The Super-Rich Once Bought Teams as an ‘Ego Play.’ Now They See Dollar Signs.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fb9bd36a6d0d88af9729bb89714f2a80037d40e6f41e936c245e37fcc27bcb9d",
        "datetime": 1785650400
      },
      {
        "headline": "3 Brilliant Artificial Intelligence (AI) Stocks Billionaire Bill Ackman Owns That You Should Too",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=dc0ca69ad5784ceff25dcb273afe8516eb3d77c4a333253734d1a4971af46132",
        "datetime": 1785644400
      },
      {
        "headline": "4 Hyperscalers, One Message: The AI Trade Isn't Over",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=2dfc731a253f0f6510b921f41bf7635382fb7e17c71d064458b6927692f26023",
        "datetime": 1785639935
      },
      {
        "headline": "Amazon (AMZN) Stock Fair Value Edges Higher After AWS And AI Price Target Debate",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7df3286d32b1105dccf0efc2db6c0eee4c36e592750ace8d0e84109698acf3a2",
        "datetime": 1785630042
      }
    ],
    "_fetched_at": 1785672080.3430014,
    "_updated_label": "2026-08-02 21:01"
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
    "_fetched_at": 1785672080.3430014,
    "_updated_label": "2026-08-02 21:02"
  },
  "AVGO": {
    "nextEarnings": {
      "date": "2026-09-02",
      "hour": "amc",
      "epsEstimate": 3.3012
    },
    "news": [
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
        "headline": "These 3 Dividend ETFs Own Nvidia and Microsoft and Still Pay Up to 8 Percent",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=666f398b3c9903163793a2fb36e4591fd07d0216f6c1860a3081546801102cd9",
        "datetime": 1785521846
      },
      {
        "headline": "Marvell Technology Is Betting More Of Its Revenue On One End Market",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=427d251700e4700db464e95f801ad6bca834d60888601efedc6c69ae5ba2f71a",
        "datetime": 1785517769
      },
      {
        "headline": "If You Invested $1000 In Broadcom Stock 5 Years Ago, You Would Have This Much Today",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=db2ae947130b0bb4d861bb056fb65fe87e298fd3878b9a8c5255be3f42ebdc96",
        "datetime": 1785517228
      }
    ],
    "_fetched_at": 1785672080.3430014,
    "_updated_label": "2026-08-02 21:02"
  },
  "META": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "amc",
      "epsEstimate": 7.1215
    },
    "news": [
      {
        "headline": "Meta Trades at a Forward P/E of 17, Below Its 5-Year Average, Making the Stock a Potential Bargain as Zuckerberg's Net Worth Rebounds",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c18564f7c3ded9cf94c76e96b7779b47381f7115ca9834e947131c3d64ea01ef",
        "datetime": 1785655200
      },
      {
        "headline": "An Analyst Just Named Mark Zuckerberg's Meta a Top Large-Cap Long Idea, Citing AI-Driven Ad Momentum and an Attractive Valuation",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=abf12b75d97042c0b0ba374b4abd1c45eca8850d6811d8fda120b1d881088ace",
        "datetime": 1785649800
      },
      {
        "headline": "3 Brilliant Artificial Intelligence (AI) Stocks Billionaire Bill Ackman Owns That You Should Too",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=dc0ca69ad5784ceff25dcb273afe8516eb3d77c4a333253734d1a4971af46132",
        "datetime": 1785644400
      },
      {
        "headline": "4 Hyperscalers, One Message: The AI Trade Isn't Over",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=2dfc731a253f0f6510b921f41bf7635382fb7e17c71d064458b6927692f26023",
        "datetime": 1785639935
      },
      {
        "headline": "Mark Zuckerberg Is Betting Up to $145 Billion on AI Infrastructure in 2026",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=22008de9537f1cd4568ae27764034f11f5206d5f4a76b59ff61fa535ace2796e",
        "datetime": 1785630420
      }
    ],
    "_fetched_at": 1785672080.3430014,
    "_updated_label": "2026-08-02 21:01"
  },
  "TSLA": {
    "nextEarnings": {
      "date": "2026-10-20",
      "hour": "amc",
      "epsEstimate": 0.4492
    },
    "news": [
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
      },
      {
        "headline": "Cathie Wood Doubles Down on Tesla and SpaceX as Wall Street Turns Cautious",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7c432e4bde4e2f5481a005a959807a3e37431c31fbb4310e3ac8367e28a40777",
        "datetime": 1785607908
      },
      {
        "headline": "Elon Musk's Net Worth Down Nearly $700 Billion Amid Tesla, SpaceX Merger Rumors",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=5b675b85b97d234d924486908115987ea485aa1a2a78d53ca94ad9426fe3d487",
        "datetime": 1785598579
      }
    ],
    "_fetched_at": 1785672080.3430014,
    "_updated_label": "2026-08-02 21:01"
  },
  "MU": {
    "nextEarnings": {
      "date": "2026-09-21",
      "hour": "amc",
      "epsEstimate": 32.2476
    },
    "news": [
      {
        "headline": "Here Are My 3 Top Artificial Intelligence (AI) Stocks to Buy in August",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f7b7d2614829f459ba5e7737ad04dc3c9e53640949c05b1044512f4d29f9e24c",
        "datetime": 1785658800
      },
      {
        "headline": "If the $1.3 Trillion Chip Stock Sell-Off Was a Warning for the S&P 500, History Repeatedly Suggests 1 Move to Avoid",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6ddcb5b20ca5f640e9bfe48dbf96778740273160d91f8696483632b92a506cf7",
        "datetime": 1785651600
      },
      {
        "headline": "Silicon Motion Crushed Earnings and Surprised Memory Chip Bears",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5b7f97c75f4fd37312fb960e4cb8e7844949cb5fd746fd796f64e2081ca10bb9",
        "datetime": 1785614340
      },
      {
        "headline": "Where Will Micron Stock Be in 2030?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=38133f18ff2461727912304a186bcde6044a76e7f63bde4c3339ff0c6ceece37",
        "datetime": 1785606660
      },
      {
        "headline": "DRAM Jumps After Situational Awareness Rescue as Analysts Caution Memory Stocks May Fall Further",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=919e663684006e829c6d8dead5f83ef238d7057acf9d1ceff91822c1b3e58b13",
        "datetime": 1785604432
      }
    ],
    "_fetched_at": 1785672080.3430014,
    "_updated_label": "2026-08-02 21:02"
  },
  "AMD": {
    "nextEarnings": {
      "date": "2026-08-04",
      "hour": "amc",
      "epsEstimate": 1.631
    },
    "news": [
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
      },
      {
        "headline": "Top Three Crypto Stocks to Watch Next Week: CRCL, RIOT, MSTR",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=0765b6e5b1706b9bfccaed31af32b4a6fd7807c9e1fb5cf787aa23d3346ba51d",
        "datetime": 1785593718
      },
      {
        "headline": "How Server CPUs Could Give AMD Stock a Big Boost After August 4",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ec7e1d1723eaadc30fe8bcd52d6faeca4aefeff98b6530201e91e0018f5dd0a7",
        "datetime": 1785589202
      }
    ],
    "_fetched_at": 1785672080.3430014,
    "_updated_label": "2026-08-02 21:02"
  },
  "INTC": {
    "nextEarnings": {
      "date": "2026-10-21",
      "hour": "amc",
      "epsEstimate": 0.3936
    },
    "news": [
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
      },
      {
        "headline": "Prediction: Intel Posts a Profitable Year Before 2028. Here's How It Gets There.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=80b1261720d65dc708ac73d5778ac0dbe15ba61ab8981c1f2c00af201b16f9d4",
        "datetime": 1785598140
      }
    ],
    "_fetched_at": 1785672080.3430014,
    "_updated_label": "2026-08-02 21:02"
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
    "_fetched_at": 1785672080.3430014,
    "_updated_label": "2026-08-02 21:02"
  },
  "QQQ": {
    "nextEarnings": null,
    "news": [
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
      },
      {
        "headline": "The 1-Minute Market Report, August 1, 2026",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=b6dd91378002908537fa533ed403812486a6a2c73bb10cf7513cb1b84187c1a4",
        "datetime": 1785583439
      },
      {
        "headline": "The Mag 7 Doesn't Exist Anymore: Pick The Winners, Sell The Losers",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=bac9235725343d8f84b151ebaa81e92933c9cd2de0410a34a3d5b7efb5974bce",
        "datetime": 1785578687
      },
      {
        "headline": "Two 25%+ Covered Call ETFs Where The Risk Has Quietly Changed",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=52f9687440cecdf68863b4100899f7f82fe7321158068a476d80d1bd6381b89f",
        "datetime": 1785575700
      }
    ],
    "_fetched_at": 1785672080.3430014,
    "_updated_label": "2026-08-02 21:01"
  },
  "SPY": {
    "nextEarnings": null,
    "news": [
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
      },
      {
        "headline": "Top 25 Dividend Stock Opportunities For August 2026",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=10fbbd025a4ab5b6fd0ebf8ee0897edabd47638c367ae16c5cc16405890de91b",
        "datetime": 1785623885
      },
      {
        "headline": "What's Inside URA Decides This Dip's Fate",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b1d4e59e6a10f60fe73f31a98ed86ddbc074ff28fcedeb2e6ef4c359fc3f7262",
        "datetime": 1785602192
      },
      {
        "headline": "These 3 ETFs Can Turn $500,000 Into $40,000 a Year Without Touching Principal",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0f2609f830f31e85d36d897ca4e04106afe950f61f918f7e8d5685fbaa7c937f",
        "datetime": 1785601797
      }
    ],
    "_fetched_at": 1785672080.3430014,
    "_updated_label": "2026-08-02 21:01"
  },
  "ORCL": {
    "nextEarnings": {
      "date": "2026-09-07",
      "hour": "",
      "epsEstimate": 1.7745
    },
    "news": [
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
      },
      {
        "headline": "Morgan Stanley says Bloom can withstand an Oracle project delay",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=934b561936836ed8e06aef922e5d86cf3aca81c7f99271012fded8efe4657af7",
        "datetime": 1785515580
      }
    ],
    "_fetched_at": 1785672080.3430014,
    "_updated_label": "2026-08-02 21:01"
  },
  "CRM": {
    "nextEarnings": {
      "date": "2026-08-26",
      "hour": "amc",
      "epsEstimate": 3.3057
    },
    "news": [
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
      },
      {
        "headline": "Salesforce (CRM) Stock May Be 49% Undervalued On Its $1.6B VA Deal",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b87875cbdfba59cb2ee8f33d492acd5100c250646cb3cebb55428b1e0272114a",
        "datetime": 1785535885
      },
      {
        "headline": "Customer service emerges as an early test of AI’s impact on jobs",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b4bc34ef163d7af1f88b3a94dcdfdb0d4c78d4e9c0bfb8c58ad9689eee435729",
        "datetime": 1785535753
      },
      {
        "headline": "These dow jones stocks are moving in today's session",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=560ce259fabe037c0617069ec89e12eb9933307ff3acea8968eed4b2ff5dc48c",
        "datetime": 1785525004
      }
    ],
    "_fetched_at": 1785672080.3430014,
    "_updated_label": "2026-08-02 21:01"
  },
  "PLTR": {
    "nextEarnings": {
      "date": "2026-08-03",
      "hour": "amc",
      "epsEstimate": 0.3544
    },
    "news": [
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
      },
      {
        "headline": "SpaceX's First Earnings Post IPO",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=9de17a5f3bdcc68bc05d4cf666a8e11bd0e6515b1992fd4959b95b7838d3aa1b",
        "datetime": 1785583800
      }
    ],
    "_fetched_at": 1785672080.3430014,
    "_updated_label": "2026-08-02 21:01"
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
    "_fetched_at": 1785672080.3430014,
    "_updated_label": "2026-08-02 21:02"
  },
  "ARM": {
    "nextEarnings": {
      "date": "2026-11-04",
      "hour": "",
      "epsEstimate": 0.4688
    },
    "news": [
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
      },
      {
        "headline": "Rosenblatt Maintains Buy on ARM Holdings, Lowers Price Target to $250",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=c5f4cf66dfb4bf411c2a3657dfa53937b92a59f7700eb04280c5ee15db122faf",
        "datetime": 1785483812
      }
    ],
    "_fetched_at": 1785672080.3430014,
    "_updated_label": "2026-08-02 21:02"
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
    "_fetched_at": 1785672080.3430014,
    "_updated_label": "2026-08-02 21:02"
  },
  "ASML": {
    "nextEarnings": {
      "date": "2026-10-14",
      "hour": "bmo",
      "epsEstimate": 10.1558
    },
    "news": [
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
      },
      {
        "headline": "ASML: Is a New Chinese Competitor a Major Threat? (NASDAQ: ASML)",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ac1ddf4c86de4d3fefa75cc71a1d0651883ee63ae9a6fa0f032b65e84f3ed684",
        "datetime": 1785495000
      },
      {
        "headline": "Chip Stocks Climb as AI Rally Regains Strength",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1ec966072e92f496241a228191bef1cc2f9195af3e8dc7f65f955a75e62f83ef",
        "datetime": 1785488818
      }
    ],
    "_fetched_at": 1785672080.3430014,
    "_updated_label": "2026-08-02 21:02"
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
    "_fetched_at": 1785672080.3430014,
    "_updated_label": "2026-08-02 21:02"
  },
  "KLAC": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "",
      "epsEstimate": 1.1971
    },
    "news": [
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
      },
      {
        "headline": "New Strong Buy Stocks for July 31st",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8243422c44b3fed835f3d1d8a48811999106cd975cf5a05a9d18b587fd101cb3",
        "datetime": 1785487200
      }
    ],
    "_fetched_at": 1785672080.3430014,
    "_updated_label": "2026-08-02 21:02"
  },
  "SNDK": {
    "nextEarnings": {
      "date": "2026-08-05",
      "hour": "amc",
      "epsEstimate": 35.1395
    },
    "news": [
      {
        "headline": "Dow Jones Futures: Trump Calls Off Iran Attacks; SpaceX, AMD, Sandisk, Eli Lilly Earnings Loom",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ef70e07437fc55e34162edf0b7750dff563ec23b7f0259e98ca3b25df6cfb679",
        "datetime": 1785640019
      },
      {
        "headline": "The AI Memory Boom Just Got a Reality Check—And a Better Entry Point",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b674836f78863908263d25b1a9f487c83203bfe8448fab1ab427655e193e0c9f",
        "datetime": 1785601920
      },
      {
        "headline": "Why the Best May Be Yet to Come for NVIDIA, Micron, and SanDisk",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=42b1eb85393187073f908710f5cb38880f8c636222a0989b248745d565b43a6f",
        "datetime": 1785596413
      },
      {
        "headline": "AI Isn’t a Catch-All Trade for Stocks in This Earnings Season",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3710e10670679477961b842503e09f6be7df6cbf98c00514a1437a27522315a2",
        "datetime": 1785585600
      },
      {
        "headline": "SpaceX's First Earnings Post IPO",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=9de17a5f3bdcc68bc05d4cf666a8e11bd0e6515b1992fd4959b95b7838d3aa1b",
        "datetime": 1785583800
      }
    ],
    "_fetched_at": 1785672080.3430014,
    "_updated_label": "2026-08-02 21:02"
  },
  "WDC": {
    "nextEarnings": {
      "date": "2026-08-05",
      "hour": "amc",
      "epsEstimate": 3.3281
    },
    "news": [
      {
        "headline": "The AI Memory Boom Just Got a Reality Check—And a Better Entry Point",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b674836f78863908263d25b1a9f487c83203bfe8448fab1ab427655e193e0c9f",
        "datetime": 1785601920
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
      },
      {
        "headline": "Western Digital Shares Rise 4% After Key Trading Signal",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=c725fb27460056fe97c7ec383f382ca230af1733b80b8a535af113c66dbce48a",
        "datetime": 1785511672
      },
      {
        "headline": "Get insights into the top movers in the S&P500 index of Friday's pre-market session.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=3223cbf246df2f33c69539037f774a50260cd33d10286f045a518ad8062cad57",
        "datetime": 1785501301
      }
    ],
    "_fetched_at": 1785672080.3430014,
    "_updated_label": "2026-08-02 21:02"
  }
};
