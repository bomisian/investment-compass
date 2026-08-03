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
        "headline": "Greg Abel Is Spending Berkshire Hathaway's Cash on Whole Companies Instead of Stocks. Here's What That Changes for Shareholders.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=802d56d8ff5bffc083ca8780b981c21f9dd70d375ae103ccca0b293651403f59",
        "datetime": 1785735300
      },
      {
        "headline": "Apple's Hardware Is Ready for On-Device AI and PrismML Just Delivered a Real Breakthrough",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=eeac366f8282cc9cd5e16e291bd1220b7fcac9ab40d55b7c9a122d6b4cadf180",
        "datetime": 1785732600
      },
      {
        "headline": "Down 48%, Is Oracle Stock a Buy Right Now?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=16569998b0733203ba671367e36077475e40552edb7dfc85d7bcd6d4919f0138",
        "datetime": 1785730800
      },
      {
        "headline": "The Bond Market Is Doing Something for the First Time in Nearly 20 Years. Here's What It Means for Investors.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b4e7f53da79afc7857d7fcf1c95b3d08da19730959de09e0891c57769a06a5ee",
        "datetime": 1785729000
      },
      {
        "headline": "If Artificial Intelligence Is in a Bubble, These Are the Stocks That Could Benefit Most",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=eb7ebb7e811072b678d96221ec9f047dc534c9b7b81481c80460c97da037c7ce",
        "datetime": 1785727200
      }
    ],
    "_fetched_at": 1785742735.1196914,
    "_updated_label": "2026-08-03 16:39"
  },
  "AAPL": {
    "nextEarnings": {
      "date": "2026-10-28",
      "hour": "amc",
      "epsEstimate": 2.0468
    },
    "news": [
      {
        "headline": "Apple's Hardware Is Ready for On-Device AI and PrismML Just Delivered a Real Breakthrough",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=eeac366f8282cc9cd5e16e291bd1220b7fcac9ab40d55b7c9a122d6b4cadf180",
        "datetime": 1785732600
      },
      {
        "headline": "Morgan Stanley sends cautious Apple stock message after earnings",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f9ed2111be961165e41dc5bcea60108dd2f9616ebf2c1099096cda6edabb8652",
        "datetime": 1785726360
      },
      {
        "headline": "Apple's Supply-Chain Pipeline Creates A Conversion Test",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=c34841280c288d895cf1f0e48cef85e27c01484838580177c194c555b44779b3",
        "datetime": 1785723531
      },
      {
        "headline": "Why Retail Traders Couldn’t Take Their Eyes Off These Stocks Last Week: AAPL, MSFT, AMZN, META, TSLA",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d452ac77315147b55f2d4f482d19015ae63f8d23fcbd4c21e8da30965e04dcaf",
        "datetime": 1785722438
      },
      {
        "headline": "iPhone Prices to Go up as Memory Chip Costs Keep Climbing? Tim Cook Says Apple Is 'Evaluating All Options'",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cb1bb3c5410a42bc0ee6b8bbdc6b7d3ffbac4af327f9186fa0b19d99e0841de8",
        "datetime": 1785713415
      }
    ],
    "_fetched_at": 1785742735.1196914,
    "_updated_label": "2026-08-03 16:39"
  },
  "GOOGL": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "amc",
      "epsEstimate": 3.1009
    },
    "news": [
      {
        "headline": "Buy The Situational Awareness' Selloff, Here's Why And What",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=bc0876c85e6c3c51daf930df0c6478e67215e9933a8b5cae6bcffdd711452b87",
        "datetime": 1785707830
      },
      {
        "headline": "SpaceX vs. the \"Magnificent Seven\": How the New Nasdaq-100 Member Stacks Up",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9eba97e0f64778590c0b74df706d14b0c758022d0162f1981303a46bb72a45d5",
        "datetime": 1785706740
      },
      {
        "headline": "Big Tech’s $2 trillion AI shakeout just changed everything",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3bc099de1acd05440a0f9dfbc883d811885a80cb3bf5d6c795a832644ae9e0ef",
        "datetime": 1785695580
      },
      {
        "headline": "Warren Buffett Regretted Not Investing in Alphabet Earlier. New CEO Greg Abel Won't Have the Same Worry.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0d7526e6b521de0e09892d31f27247af43bc68d7ed2c892c5f44607285717eea",
        "datetime": 1785695100
      },
      {
        "headline": "3 Reasons Why Berkshire Hathaway Owns $29 Billion of Alphabet Stock",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0de02bac18fa68956f7b6f0c65319f4843198259a8bab84b9f1779f3ad559ac9",
        "datetime": 1785689400
      }
    ],
    "_fetched_at": 1785742735.1196914,
    "_updated_label": "2026-08-03 16:39"
  },
  "MSFT": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "",
      "epsEstimate": 4.7263
    },
    "news": [
      {
        "headline": "Why Microsoft Stock Is Surging",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ee7dcf5f51ffe0c88cd50b9ba814355fad89d92b19babe29c47ecf0ebeb8af61",
        "datetime": 1785724519
      },
      {
        "headline": "Why Retail Traders Couldn’t Take Their Eyes Off These Stocks Last Week: AAPL, MSFT, AMZN, META, TSLA",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d452ac77315147b55f2d4f482d19015ae63f8d23fcbd4c21e8da30965e04dcaf",
        "datetime": 1785722438
      },
      {
        "headline": "Microsoft Just Silenced The AI Skeptics, Why I See 20%+ Upside",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=12ce1fee2428394bfa239697818c6dff1face06fa616b1f7f8206417cb094d9c",
        "datetime": 1785719514
      },
      {
        "headline": "SpaceX vs. the \"Magnificent Seven\": How the New Nasdaq-100 Member Stacks Up",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9eba97e0f64778590c0b74df706d14b0c758022d0162f1981303a46bb72a45d5",
        "datetime": 1785706740
      },
      {
        "headline": "LinkedIn reports solid Q2 revenue growth",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cea5cdc909171864cad7be178f48a08782e1b067bdd579aa395900859274f8b4",
        "datetime": 1785697564
      }
    ],
    "_fetched_at": 1785742735.1196914,
    "_updated_label": "2026-08-03 16:39"
  },
  "AMZN": {
    "nextEarnings": {
      "date": "2026-10-28",
      "hour": "amc",
      "epsEstimate": 1.9445
    },
    "news": [
      {
        "headline": "Why Retail Traders Couldn’t Take Their Eyes Off These Stocks Last Week: AAPL, MSFT, AMZN, META, TSLA",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d452ac77315147b55f2d4f482d19015ae63f8d23fcbd4c21e8da30965e04dcaf",
        "datetime": 1785722438
      },
      {
        "headline": "Is Amazon Stock a Buy After CEO Andy Jassy's $1 Trillion AWS Revenue Prediction?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a891343e22d1c24bfe01cfb0367caff1112625c1a6b1319719c2f04af379d8ba",
        "datetime": 1785716400
      },
      {
        "headline": "Jeff Bezos Backed a $2.6 Billion AI Startup That's Partnering With Nvidia and Meta on New Chip Materials",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=960b9ef5da5885a96bab13b5b0bca2add155a7feadce92b6f8900c5beb112337",
        "datetime": 1785713580
      },
      {
        "headline": "Trump's DOT Introduces Changes to 'Accelerate' AV Deployment, Directs NHTSA to Grant Zoox Temporary Exemption",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2033e23e2a5338fc2b96d7eeb3540e115f962af085b18904c5d001b87a7fb1ae",
        "datetime": 1785709823
      },
      {
        "headline": "SpaceX vs. the \"Magnificent Seven\": How the New Nasdaq-100 Member Stacks Up",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9eba97e0f64778590c0b74df706d14b0c758022d0162f1981303a46bb72a45d5",
        "datetime": 1785706740
      }
    ],
    "_fetched_at": 1785742735.1196914,
    "_updated_label": "2026-08-03 16:39"
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
    "_fetched_at": 1785742735.1196914,
    "_updated_label": "2026-08-03 16:40"
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
    "_fetched_at": 1785742735.1196914,
    "_updated_label": "2026-08-03 16:39"
  },
  "META": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "amc",
      "epsEstimate": 7.1215
    },
    "news": [
      {
        "headline": "Why Retail Traders Couldn’t Take Their Eyes Off These Stocks Last Week: AAPL, MSFT, AMZN, META, TSLA",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d452ac77315147b55f2d4f482d19015ae63f8d23fcbd4c21e8da30965e04dcaf",
        "datetime": 1785722438
      },
      {
        "headline": "Jeff Bezos Backed a $2.6 Billion AI Startup That's Partnering With Nvidia and Meta on New Chip Materials",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=960b9ef5da5885a96bab13b5b0bca2add155a7feadce92b6f8900c5beb112337",
        "datetime": 1785713580
      },
      {
        "headline": "SpaceX vs. the \"Magnificent Seven\": How the New Nasdaq-100 Member Stacks Up",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9eba97e0f64778590c0b74df706d14b0c758022d0162f1981303a46bb72a45d5",
        "datetime": 1785706740
      },
      {
        "headline": "Is Meta Platforms Stock a Buy on the Dip as Revenue Surges?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=dc06b8629d33c8ab762615309e7d2b76d3d288a1d7b916f5cb88888beaa510a8",
        "datetime": 1785705600
      },
      {
        "headline": "Meta shares holiday 2026 tips for small businesses",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ac9cb7b9df72a49d12c5e098bce347abb3bc74f16abb2153a1aa1a65b3d2a048",
        "datetime": 1785697259
      }
    ],
    "_fetched_at": 1785742735.1196914,
    "_updated_label": "2026-08-03 16:39"
  },
  "TSLA": {
    "nextEarnings": {
      "date": "2026-10-20",
      "hour": "amc",
      "epsEstimate": 0.4492
    },
    "news": [
      {
        "headline": "Why Retail Traders Couldn’t Take Their Eyes Off These Stocks Last Week: AAPL, MSFT, AMZN, META, TSLA",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d452ac77315147b55f2d4f482d19015ae63f8d23fcbd4c21e8da30965e04dcaf",
        "datetime": 1785722438
      },
      {
        "headline": "EV Company News For The Month Of July 2026",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=a0f06598653a507625d21d6833dd6fb0acda61d42a82c4204dc5765726db6aae",
        "datetime": 1785722057
      },
      {
        "headline": "Elon Musk Dismisses Report Tesla Could Sell Chinese Business for SpaceX Merger: 'Absurdly Fake News'",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e40e04569ccc58b6998443baa8123199f3ce7d95ef1c78efe9efdd4d7c040544",
        "datetime": 1785720635
      },
      {
        "headline": "SpaceX vs. the \"Magnificent Seven\": How the New Nasdaq-100 Member Stacks Up",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9eba97e0f64778590c0b74df706d14b0c758022d0162f1981303a46bb72a45d5",
        "datetime": 1785706740
      },
      {
        "headline": "Why Morgan Stanley won’t call Rivian a buy despite upgrade",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f13854067cb8a12b9b76704656f8ce1b40c36cb7a10c99cb2bd7e72e19a71efc",
        "datetime": 1785697980
      }
    ],
    "_fetched_at": 1785742735.1196914,
    "_updated_label": "2026-08-03 16:39"
  },
  "MU": {
    "nextEarnings": {
      "date": "2026-09-21",
      "hour": "amc",
      "epsEstimate": 32.2476
    },
    "news": [
      {
        "headline": "MU, SNDK, SKHY, DRAM In Focus: Korean Stocks Dip Again, But Morgan Stanley Sees Sharp Growth Ahead",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=23987fdd060920ed1d9be9b0b892b4409a4ce611e6ccbc2beab8551438e62218",
        "datetime": 1785731125
      },
      {
        "headline": "Micron’s 39% Plunge and SK Hynix, Samsung’s $1.3T Spending Worries US Chipmakers",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fa5b0536c5264f60ab8d74990edd1957607b53260d799cebb3c0a430cd8779d1",
        "datetime": 1785729647
      },
      {
        "headline": "Buy The Situational Awareness' Selloff, Here's Why And What",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=bc0876c85e6c3c51daf930df0c6478e67215e9933a8b5cae6bcffdd711452b87",
        "datetime": 1785707830
      },
      {
        "headline": "Micron: High Risk, High Reward",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=78e84841337e4743f7b58372440873507da30084bff4b6e323d94e594e47df6a",
        "datetime": 1785700800
      },
      {
        "headline": "Micron Technology Stock Is Plummeting, but Here's Why I'm Not Buying the Dip",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3cea82195479b39b3cb085da4353092b0b8dfeaaca45cf6e2f2550daec11520a",
        "datetime": 1785692700
      }
    ],
    "_fetched_at": 1785742735.1196914,
    "_updated_label": "2026-08-03 16:40"
  },
  "AMD": {
    "nextEarnings": {
      "date": "2026-08-04",
      "hour": "amc",
      "epsEstimate": 1.631
    },
    "news": [
      {
        "headline": "Dow, S&P 500, Nasdaq Futures Climb As Markets Gear Up For Another Key Earnings Week: USO, PLTR, CRML, IONQ Stocks In Focus",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=baf24e4cb14d15e3fa98c1670097ac84af3d0c65145bcac17a0bdd9346b9dc95",
        "datetime": 1785723448
      },
      {
        "headline": "Dow Jones Futures Rise, Oil Prices Dive As Trump Shifts On Iran; SpaceX, AMD, Sandisk, Eli Lilly Earnings Loom",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e521cd63ab7c7c629cbacd51d71cc8083035c3b4fc3eccc8093450f495edcab7",
        "datetime": 1785714580
      },
      {
        "headline": "Jeff Bezos Backed a $2.6 Billion AI Startup That's Partnering With Nvidia and Meta on New Chip Materials",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=960b9ef5da5885a96bab13b5b0bca2add155a7feadce92b6f8900c5beb112337",
        "datetime": 1785713580
      },
      {
        "headline": "Jobs Report, Palantir, AMD, SpaceX, Eli Lilly, and More to Watch This Week",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3f8727d0954fad695567eb16f68ec5e7fe7d41f5b4a4c5ebe2490ea343301f49",
        "datetime": 1785693600
      },
      {
        "headline": "Earnings to watch this week: SpaceX's first earnings report, Disney, AMD, & McDonald's",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1c0c718a2ab587d9a773d1c7696c1638665284879bebd02900267ed236b83d31",
        "datetime": 1785693600
      }
    ],
    "_fetched_at": 1785742735.1196914,
    "_updated_label": "2026-08-03 16:39"
  },
  "INTC": {
    "nextEarnings": {
      "date": "2026-10-21",
      "hour": "amc",
      "epsEstimate": 0.3936
    },
    "news": [
      {
        "headline": "Buy The Situational Awareness' Selloff, Here's Why And What",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=bc0876c85e6c3c51daf930df0c6478e67215e9933a8b5cae6bcffdd711452b87",
        "datetime": 1785707830
      },
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
      }
    ],
    "_fetched_at": 1785742735.1196914,
    "_updated_label": "2026-08-03 16:40"
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
    "_fetched_at": 1785742735.1196914,
    "_updated_label": "2026-08-03 16:40"
  },
  "QQQ": {
    "nextEarnings": null,
    "news": [
      {
        "headline": "Despite The Headwinds, Earnings Are Exploding To The Upside",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=ab225924e77572d7b5a9e6b2cfbb88aa702f2c9f1a81a0d209f935ea41210ddf",
        "datetime": 1785725899
      },
      {
        "headline": "Buy The Situational Awareness' Selloff, Here's Why And What",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=bc0876c85e6c3c51daf930df0c6478e67215e9933a8b5cae6bcffdd711452b87",
        "datetime": 1785707830
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
        "headline": "The Momentum Crash: Is It Over?",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=e71f40c77550adc1e32a3460a0a46b2dc117beba026277fb994d04c829c01bb7",
        "datetime": 1785658200
      }
    ],
    "_fetched_at": 1785742735.1196914,
    "_updated_label": "2026-08-03 16:38"
  },
  "SPY": {
    "nextEarnings": null,
    "news": [
      {
        "headline": "Despite The Headwinds, Earnings Are Exploding To The Upside",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=ab225924e77572d7b5a9e6b2cfbb88aa702f2c9f1a81a0d209f935ea41210ddf",
        "datetime": 1785725899
      },
      {
        "headline": "Buy The Situational Awareness' Selloff, Here's Why And What",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=bc0876c85e6c3c51daf930df0c6478e67215e9933a8b5cae6bcffdd711452b87",
        "datetime": 1785707830
      },
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
      }
    ],
    "_fetched_at": 1785742735.1196914,
    "_updated_label": "2026-08-03 16:39"
  },
  "ORCL": {
    "nextEarnings": {
      "date": "2026-09-07",
      "hour": "",
      "epsEstimate": 1.7745
    },
    "news": [
      {
        "headline": "Down 48%, Is Oracle Stock a Buy Right Now?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=16569998b0733203ba671367e36077475e40552edb7dfc85d7bcd6d4919f0138",
        "datetime": 1785730800
      },
      {
        "headline": "Oracle and Nvidia Shares Have Plunged Over the Past 3 Months. Is It Time to Cut These Tech Stocks Loose?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=62af68ca4362c5f0fb6aa151205c184151c3853d8175cf576af2645c4c009264",
        "datetime": 1785695700
      },
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
      }
    ],
    "_fetched_at": 1785742735.1196914,
    "_updated_label": "2026-08-03 16:39"
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
    "_fetched_at": 1785742735.1196914,
    "_updated_label": "2026-08-03 16:39"
  },
  "PLTR": {
    "nextEarnings": {
      "date": "2026-08-03",
      "hour": "amc",
      "epsEstimate": 0.3544
    },
    "news": [
      {
        "headline": "PLTR Stock Is 40% Off Its Peak: Will Q2 Earnings Turn Things Around For Good?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ebb599d9a20f744a1815c9cec48f734d8f62e8071b6aa843046376bee6bc79c2",
        "datetime": 1785724392
      },
      {
        "headline": "Dow, S&P 500, Nasdaq Futures Climb As Markets Gear Up For Another Key Earnings Week: USO, PLTR, CRML, IONQ Stocks In Focus",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=baf24e4cb14d15e3fa98c1670097ac84af3d0c65145bcac17a0bdd9346b9dc95",
        "datetime": 1785723448
      },
      {
        "headline": "Buy The Situational Awareness' Selloff, Here's Why And What",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=bc0876c85e6c3c51daf930df0c6478e67215e9933a8b5cae6bcffdd711452b87",
        "datetime": 1785707830
      },
      {
        "headline": "Wall Street Can’t Agree on Palantir Stock. Earnings Will Reveal Who’s Right.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f2aebad449c8b79f1d197554e2766c2fade060f1f13337e566e5fd0101998c60",
        "datetime": 1785701010
      },
      {
        "headline": "Palantir Is Set to Deliver Strong Q2. Analysts See 60% Upside Potential for PLTR Stock.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a40ba8226d6d49b231836d57365df60c898d3316d7c1862c0a7a35afa3a1824a",
        "datetime": 1785699002
      }
    ],
    "_fetched_at": 1785742735.1196914,
    "_updated_label": "2026-08-03 16:39"
  },
  "QCOM": {
    "nextEarnings": {
      "date": "2026-11-03",
      "hour": "amc",
      "epsEstimate": 2.2987
    },
    "news": [
      {
        "headline": "Qualcomm (QCOM) Is Shaping 6G Around AI Native Networks",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ea711a97858c734ca2f12b48f246b524e7c7a055c277f7dd6a61410030de4d66",
        "datetime": 1785694174
      },
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
      }
    ],
    "_fetched_at": 1785742735.1196914,
    "_updated_label": "2026-08-03 16:39"
  },
  "ARM": {
    "nextEarnings": {
      "date": "2026-11-04",
      "hour": "",
      "epsEstimate": 0.4688
    },
    "news": [
      {
        "headline": "Is Arm Holdings Stock a Buy on the Bullish CPU Outlook?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=adf787ae50ece003a442a2b0f3d3f0fde7602dd32a541649ea88ad0d1148b3d1",
        "datetime": 1785699300
      },
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
      }
    ],
    "_fetched_at": 1785742735.1196914,
    "_updated_label": "2026-08-03 16:40"
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
    "_fetched_at": 1785742735.1196914,
    "_updated_label": "2026-08-03 16:40"
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
    "_fetched_at": 1785742735.1196914,
    "_updated_label": "2026-08-03 16:40"
  },
  "LRCX": {
    "nextEarnings": {
      "date": "2026-10-20",
      "hour": "",
      "epsEstimate": 2.1446
    },
    "news": [
      {
        "headline": "What a $10,000 Investment in Lam Research 10 Years Ago Would Be Worth Today",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6334b41e2a52dfb4d4730a73e40d1e18319bc485b14c309c24f78a145be2d37a",
        "datetime": 1785711660
      },
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
      }
    ],
    "_fetched_at": 1785742735.1196914,
    "_updated_label": "2026-08-03 16:40"
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
    "_fetched_at": 1785742735.1196914,
    "_updated_label": "2026-08-03 16:40"
  },
  "SNDK": {
    "nextEarnings": {
      "date": "2026-08-05",
      "hour": "amc",
      "epsEstimate": 35.1395
    },
    "news": [
      {
        "headline": "MU, SNDK, SKHY, DRAM In Focus: Korean Stocks Dip Again, But Morgan Stanley Sees Sharp Growth Ahead",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=23987fdd060920ed1d9be9b0b892b4409a4ce611e6ccbc2beab8551438e62218",
        "datetime": 1785731125
      },
      {
        "headline": "Micron’s 39% Plunge and SK Hynix, Samsung’s $1.3T Spending Worries US Chipmakers",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fa5b0536c5264f60ab8d74990edd1957607b53260d799cebb3c0a430cd8779d1",
        "datetime": 1785729647
      },
      {
        "headline": "Dow Jones Futures Rise, Oil Prices Dive As Trump Shifts On Iran; SpaceX, AMD, Sandisk, Eli Lilly Earnings Loom",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e521cd63ab7c7c629cbacd51d71cc8083035c3b4fc3eccc8093450f495edcab7",
        "datetime": 1785714580
      },
      {
        "headline": "Earnings, PMI and Other Key Things to Watch this Week",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=76b29023b205127f17abac539d6fe371910583b31adc20a06953b4913097cc1d",
        "datetime": 1785690002
      },
      {
        "headline": "The Best-Performing S&P 500 Stocks Of 2026 So Far",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8cadbffc5e9353cdd1e84f3df18d3e54ea2629f3041632a36420d836d7e31ea7",
        "datetime": 1785679620
      }
    ],
    "_fetched_at": 1785742735.1196914,
    "_updated_label": "2026-08-03 16:40"
  },
  "WDC": {
    "nextEarnings": {
      "date": "2026-08-05",
      "hour": "amc",
      "epsEstimate": 3.3281
    },
    "news": [
      {
        "headline": "Jobs Report, Palantir, AMD, SpaceX, Eli Lilly, and More to Watch This Week",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3f8727d0954fad695567eb16f68ec5e7fe7d41f5b4a4c5ebe2490ea343301f49",
        "datetime": 1785693600
      },
      {
        "headline": "Prediction: Western Digital Gets Back to Its High Before Sandisk Gets Back to Its Own.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=37c5d1f2e5144c89aaf3289e57f8c73524c716ecba97dab132dc81ad698d727b",
        "datetime": 1785677640
      },
      {
        "headline": "Seagate Rallies on Strong Q4 Results and Guidance. What Does This Mean for STX Stock Here.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=02eb9c2745e11cde340af7c35eb408459787983524da795605e8dbd56a55dc7d",
        "datetime": 1785675602
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
      }
    ],
    "_fetched_at": 1785742735.1196914,
    "_updated_label": "2026-08-03 16:40"
  }
};
