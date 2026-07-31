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
        "headline": "These dow jones stocks are moving in today's session",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=560ce259fabe037c0617069ec89e12eb9933307ff3acea8968eed4b2ff5dc48c",
        "datetime": 1785525004
      },
      {
        "headline": "Curious about the most active S&P500 stocks in today's session?",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=088075512575cbe9e0abbb1f6b911924f01ee3e8038560995c4fdd2a8d2bf7d0",
        "datetime": 1785521100
      },
      {
        "headline": "Eli Lilly Stock Has Skyrocketed. Novo Nordisk Has Crashed. 1 Number Explains Why They're Not Even Close Anymore.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a38164e6f470457cbd3bf75b4e023ec3ca8226add32ccb42c80f1264d87f1c77",
        "datetime": 1785520200
      },
      {
        "headline": "Amazon's 14.9% Jump Lifts the Dow While Apple Drags It Back",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2858fab6e490734b2e1647a617212d01fe6bd01232c28974d95b335cf7e3b940",
        "datetime": 1785519090
      },
      {
        "headline": "Novo Nordisk vs Eli Lilly: The Better Buy Before Earnings",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=072054ce29df448c8af9470774007bc0c8d51c3422b4dbf7d042d404688dce97",
        "datetime": 1785519012
      }
    ],
    "_fetched_at": 1785528001.8324664,
    "_updated_label": "2026-08-01 05:01"
  },
  "AAPL": {
    "nextEarnings": {
      "date": "2026-10-28",
      "hour": "amc",
      "epsEstimate": 2.0468
    },
    "news": [
      {
        "headline": "These dow jones stocks are moving in today's session",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=560ce259fabe037c0617069ec89e12eb9933307ff3acea8968eed4b2ff5dc48c",
        "datetime": 1785525004
      },
      {
        "headline": "Stay informed with the top movers within the S&P500 index on Friday.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=70bbcce77128ce60408559bc0eff0eb1c5a69e0b368ceaf48afb23f8f90d3659",
        "datetime": 1785524701
      },
      {
        "headline": "Curious about the most active S&P500 stocks in today's session?",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=088075512575cbe9e0abbb1f6b911924f01ee3e8038560995c4fdd2a8d2bf7d0",
        "datetime": 1785521100
      },
      {
        "headline": "Amazon's 14.9% Jump Lifts the Dow While Apple Drags It Back",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2858fab6e490734b2e1647a617212d01fe6bd01232c28974d95b335cf7e3b940",
        "datetime": 1785519090
      },
      {
        "headline": "Sector Update: Tech Stocks Rise Friday Afternoon",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=762c6385b0d0262ec701c27543eecdc957c5a2c289c69e3c140175b1ae80d858",
        "datetime": 1785518945
      }
    ],
    "_fetched_at": 1785528001.8324664,
    "_updated_label": "2026-08-01 05:00"
  },
  "GOOGL": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "amc",
      "epsEstimate": 3.0988
    },
    "news": [
      {
        "headline": "These dow jones stocks are moving in today's session",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=560ce259fabe037c0617069ec89e12eb9933307ff3acea8968eed4b2ff5dc48c",
        "datetime": 1785525004
      },
      {
        "headline": "Stay informed with the top movers within the S&P500 index on Friday.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=70bbcce77128ce60408559bc0eff0eb1c5a69e0b368ceaf48afb23f8f90d3659",
        "datetime": 1785524701
      },
      {
        "headline": "Curious about the most active S&P500 stocks in today's session?",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=088075512575cbe9e0abbb1f6b911924f01ee3e8038560995c4fdd2a8d2bf7d0",
        "datetime": 1785521100
      },
      {
        "headline": "RDDT Stock Set For Worst Day On Record — Reddit Advances Copyright Suit Against Perplexity In Crusade Against AI Data Scraping",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8295de169de3107f11aaa2a98770fbc6f88f33db78a3b829cbc67362cb6803cf",
        "datetime": 1785519615
      },
      {
        "headline": "Amazon Stock Soars As AI Strategy Sends It To 'Top Of The Cloud Wars'",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e207fa22e367290fcb89ac4917e352b9d092389370b38c3cad4ef3162ed2f547",
        "datetime": 1785517434
      }
    ],
    "_fetched_at": 1785528001.8324664,
    "_updated_label": "2026-08-01 05:00"
  },
  "MSFT": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "",
      "epsEstimate": 4.7278
    },
    "news": [
      {
        "headline": "These dow jones stocks are moving in today's session",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=560ce259fabe037c0617069ec89e12eb9933307ff3acea8968eed4b2ff5dc48c",
        "datetime": 1785525004
      },
      {
        "headline": "Curious about the most active S&P500 stocks in today's session?",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=088075512575cbe9e0abbb1f6b911924f01ee3e8038560995c4fdd2a8d2bf7d0",
        "datetime": 1785521100
      },
      {
        "headline": "Amazon Stock Soars As AI Strategy Sends It To 'Top Of The Cloud Wars'",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e207fa22e367290fcb89ac4917e352b9d092389370b38c3cad4ef3162ed2f547",
        "datetime": 1785517434
      },
      {
        "headline": "Why Wall Street Likes Apple's AI Strategy Despite Friday's Stock Tumble",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a6d08be3ba56bf52d6d20f493406334dfd41bdb7d92ce6fb1bf2e9d179f071d6",
        "datetime": 1785517365
      },
      {
        "headline": "Microsoft Copilot Lawsuit Deadline Is August 11: Will Investors Get Money Back?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a3401a8f046bb0644ffb232982db44326b5e52193862cc9d005b4c7b5c164d9c",
        "datetime": 1785517337
      }
    ],
    "_fetched_at": 1785528001.8324664,
    "_updated_label": "2026-08-01 05:00"
  },
  "AMZN": {
    "nextEarnings": {
      "date": "2026-10-28",
      "hour": "amc",
      "epsEstimate": 1.9445
    },
    "news": [
      {
        "headline": "These dow jones stocks are moving in today's session",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=560ce259fabe037c0617069ec89e12eb9933307ff3acea8968eed4b2ff5dc48c",
        "datetime": 1785525004
      },
      {
        "headline": "Stay informed with the top movers within the S&P500 index on Friday.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=70bbcce77128ce60408559bc0eff0eb1c5a69e0b368ceaf48afb23f8f90d3659",
        "datetime": 1785524701
      },
      {
        "headline": "Curious about the most active S&P500 stocks in today's session?",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=088075512575cbe9e0abbb1f6b911924f01ee3e8038560995c4fdd2a8d2bf7d0",
        "datetime": 1785521100
      },
      {
        "headline": "Top Midday Gainers",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b0be63fbf20eaf788271d6fd00d8318a04d0fdddc3cf3abe6ebb18aefd6c924c",
        "datetime": 1785519576
      },
      {
        "headline": "Amazon's 14.9% Jump Lifts the Dow While Apple Drags It Back",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2858fab6e490734b2e1647a617212d01fe6bd01232c28974d95b335cf7e3b940",
        "datetime": 1785519090
      }
    ],
    "_fetched_at": 1785528001.8324664,
    "_updated_label": "2026-08-01 05:00"
  },
  "TSM": {
    "nextEarnings": {
      "date": "2026-10-14",
      "hour": "amc",
      "epsEstimate": 28.6598
    },
    "news": [
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
      },
      {
        "headline": "Intel: AI Bubble Hysteria Is Not For Bulls",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=cab8cd908ec4ce377fc48b1be6932206528c9d3e9fd6266e9f7a851ab5e014af",
        "datetime": 1785433242
      },
      {
        "headline": "QUICK SPARK: Cathie Wood's Birthday Present to Ethereum? A Bitmine Trim",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=0cfbc26c5adbfcf7a766dce9b68f36e64efdd4e01377f0f3f814581d62c49f96",
        "datetime": 1785432077
      }
    ],
    "_fetched_at": 1785528001.8324664,
    "_updated_label": "2026-08-01 05:01"
  },
  "AVGO": {
    "nextEarnings": {
      "date": "2026-09-02",
      "hour": "amc",
      "epsEstimate": 3.3012
    },
    "news": [
      {
        "headline": "Marvell Technology Is Betting More Of Its Revenue On One End Market",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=427d251700e4700db464e95f801ad6bca834d60888601efedc6c69ae5ba2f71a",
        "datetime": 1785517769
      },
      {
        "headline": "AMD is Down 10% Over a Month: Did Microsoft’s Catalyst Just Spark the 155% Upside Expected By Wall Street Pro?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5ff228574f21af0bc0fe9125109578d5522facc2b97cbf01946a14d44fadd4e3",
        "datetime": 1785513040
      },
      {
        "headline": "Should You Buy AMD Stock Ahead of Q2 Earnings? Here's What to Know",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=dbad5bd9f86ac687ebc66c441840dd79bd21cf50a70bc77a425da18c1f9aa165",
        "datetime": 1785511260
      },
      {
        "headline": "Broadcom No Longer Sells Itself As A Chip Cycle Story",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e0f57910fb5d447a1b3df27046361b2ee6e04da83266e680b88dd07d6b7b0c02",
        "datetime": 1785509905
      },
      {
        "headline": "Qualcomm Stock's Biggest Risk Is The Gap Between Pain And Payoff",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d1fa0f397be819a0bbae7e44d8fc0c0e789ebcaada2f2cc92cacc3f523a964a2",
        "datetime": 1785508280
      }
    ],
    "_fetched_at": 1785528001.8324664,
    "_updated_label": "2026-08-01 05:01"
  },
  "META": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "amc",
      "epsEstimate": 7.1724
    },
    "news": [
      {
        "headline": "Meta Faces India Legal Scrutiny",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=17fb172d685a525668eb02a1f5b0dea4f57475e8c19e1cd12e37586179b514cd",
        "datetime": 1785518035
      },
      {
        "headline": "Why Wall Street Likes Apple's AI Strategy Despite Friday's Stock Tumble",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a6d08be3ba56bf52d6d20f493406334dfd41bdb7d92ce6fb1bf2e9d179f071d6",
        "datetime": 1785517365
      },
      {
        "headline": "Stock Market Rises Amid Apple, Amazon, Meta, Microsoft Earnings, Soaring Yields: Weekly Review",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a1cd654a3b77edfba3c84879196ac8b59a48f0d10152253f5068bd81fc7b0d5c",
        "datetime": 1785515910
      },
      {
        "headline": "Amazon, Apple, Microsoft, Micron, Roblox, Reddit, SK Hynix, and More Stocks That Explain Today’s Market",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=911401ccbf7cb4f2130f9472945ecab9467870e9b502487a641cb1e99cb9d27c",
        "datetime": 1785515880
      },
      {
        "headline": "Today’s Dow Moves as Told by Magnificent 7 Stocks",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fd59c5576911c210e8ff68bdacb9669d2d1627179b8e466ad9f8c3bae5a633b5",
        "datetime": 1785515875
      }
    ],
    "_fetched_at": 1785528001.8324664,
    "_updated_label": "2026-08-01 05:00"
  },
  "TSLA": {
    "nextEarnings": {
      "date": "2026-10-20",
      "hour": "amc",
      "epsEstimate": 0.4684
    },
    "news": [
      {
        "headline": "Curious about the most active S&P500 stocks in today's session?",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=088075512575cbe9e0abbb1f6b911924f01ee3e8038560995c4fdd2a8d2bf7d0",
        "datetime": 1785521100
      },
      {
        "headline": "Elon Musk Responds to Major Tesla Report",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f1338e32e6ca68dca9ea6c7553e224b2a0132efed8e4431034bfbf55f0d395d8",
        "datetime": 1785516567
      },
      {
        "headline": "Is This EV Stock The Next Tesla?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a0c265863a8b54c39b0247fc66735f3f69eab8913acbe85b4b670671c044f4da",
        "datetime": 1785516073
      },
      {
        "headline": "Combining Tesla and SpaceX Makes 'A Ton of Sense' Says Munster",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=bcc76bda5d2f7083644b290701b1f41d23d7a9e4e811b9f0988fd08d53a3504e",
        "datetime": 1785515549
      },
      {
        "headline": "Top 2 Earnings Surprises Wall Street Never Saw Coming — Time to Buy or Sell?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a37e0ab28c74178a227bfe3c08fee9385f2fdee20b55ee9babf1502198fb5817",
        "datetime": 1785515137
      }
    ],
    "_fetched_at": 1785528001.8324664,
    "_updated_label": "2026-08-01 05:00"
  },
  "MU": {
    "nextEarnings": {
      "date": "2026-09-21",
      "hour": "amc",
      "epsEstimate": 32.2476
    },
    "news": [
      {
        "headline": "Curious about the most active S&P500 stocks in today's session?",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=088075512575cbe9e0abbb1f6b911924f01ee3e8038560995c4fdd2a8d2bf7d0",
        "datetime": 1785521100
      },
      {
        "headline": "Leopold Aschenbrenner's AI hedge fund collapses after margin calls",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5485920722c950af0a3142cb4a51c162d86e22b3ee48203fcb9cd644d765c03d",
        "datetime": 1785519866
      },
      {
        "headline": "'Big Short' Investor Takes Fresh Aim at Nvidia",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a1821204767408485cdf2c7c214e1fe8bf7280e81b3f31a2c495ad2dd46c661a",
        "datetime": 1785516750
      },
      {
        "headline": "Why Micron Stock Keeps Falling?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7d10872adc4fdc65c0ee619f0a186451e5c01cda8162c9a5e8c40b66cd7c4238",
        "datetime": 1785516480
      },
      {
        "headline": "Amazon, Apple, Microsoft, Micron, Roblox, Reddit, SK Hynix, and More Stocks That Explain Today’s Market",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=911401ccbf7cb4f2130f9472945ecab9467870e9b502487a641cb1e99cb9d27c",
        "datetime": 1785515880
      }
    ],
    "_fetched_at": 1785528001.8324664,
    "_updated_label": "2026-08-01 05:01"
  },
  "AMD": {
    "nextEarnings": {
      "date": "2026-08-04",
      "hour": "amc",
      "epsEstimate": 1.6291
    },
    "news": [
      {
        "headline": "Marvell Technology Is Betting More Of Its Revenue On One End Market",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=427d251700e4700db464e95f801ad6bca834d60888601efedc6c69ae5ba2f71a",
        "datetime": 1785517769
      },
      {
        "headline": "Nvidia’s Valuation Gap With AMD Just Got Bigger",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=39deea97b690ac7b56dada0b4b81cbdbe6504c78f63dae24074a00a50461b8bd",
        "datetime": 1785516687
      },
      {
        "headline": "Amazon, Apple, Microsoft, Micron, Roblox, Reddit, SK Hynix, and More Stocks That Explain Today’s Market",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=911401ccbf7cb4f2130f9472945ecab9467870e9b502487a641cb1e99cb9d27c",
        "datetime": 1785515880
      },
      {
        "headline": "AMD CEO doubles down on AI and the stock market",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4c85c3866c3b609802551dead99a478bbf6aecaf6a329a7a83863e84a52a7dc3",
        "datetime": 1785514620
      },
      {
        "headline": "AMD is Down 10% Over a Month: Did Microsoft’s Catalyst Just Spark the 155% Upside Expected By Wall Street Pro?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5ff228574f21af0bc0fe9125109578d5522facc2b97cbf01946a14d44fadd4e3",
        "datetime": 1785513040
      }
    ],
    "_fetched_at": 1785528001.8324664,
    "_updated_label": "2026-08-01 05:01"
  },
  "INTC": {
    "nextEarnings": {
      "date": "2026-10-21",
      "hour": "amc",
      "epsEstimate": 0.3736
    },
    "news": [
      {
        "headline": "Curious about the most active S&P500 stocks in today's session?",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=088075512575cbe9e0abbb1f6b911924f01ee3e8038560995c4fdd2a8d2bf7d0",
        "datetime": 1785521100
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
        "headline": "AMD is Down 10% Over a Month: Did Microsoft’s Catalyst Just Spark the 155% Upside Expected By Wall Street Pro?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5ff228574f21af0bc0fe9125109578d5522facc2b97cbf01946a14d44fadd4e3",
        "datetime": 1785513040
      },
      {
        "headline": "Should You Buy AMD Stock Ahead of Q2 Earnings? Here's What to Know",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=dbad5bd9f86ac687ebc66c441840dd79bd21cf50a70bc77a425da18c1f9aa165",
        "datetime": 1785511260
      }
    ],
    "_fetched_at": 1785528001.8324664,
    "_updated_label": "2026-08-01 05:01"
  },
  "AMAT": {
    "nextEarnings": {
      "date": "2026-08-13",
      "hour": "amc",
      "epsEstimate": 3.462
    },
    "news": [
      {
        "headline": "Applied Materials: Why I'm Maintaining A 'Strong Buy' After A 45% Run",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=07b8ab9b47dbe8a93f5183ea051b1bb79d18085050e8502d8f3aa4597433bc92",
        "datetime": 1785509720
      },
      {
        "headline": "Tech specialist explains why China memory fears are overblown",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9449111c6a1a21ab85fc12914cc8aee2f8fddee741a3e02f73e88e780fe3309b",
        "datetime": 1785507380
      },
      {
        "headline": "AEIS Set to Report Q2 Earnings: What's in the Cards for the Stock?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6f1ee6883478fd8e0ea2476c3817cd79f3bdc4c3e2f57a031619fc7a48f4bae9",
        "datetime": 1785506640
      },
      {
        "headline": "1 of Wall Street’s Favorite Stocks for Long-Term Investors and 2 We Find Risky",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4340a609fdcde1123341fd232a00387a2a7ca53a08e0d5d04630b8cbc80b819f",
        "datetime": 1785503269
      },
      {
        "headline": "The Zacks Analyst Blog Highlights Applied Materials, Sandisk, Eaton and Flanigan's",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=17499400f8dff7e42cbab89487ce10c87ca65aa706d51b637df4b19091f1a93c",
        "datetime": 1785480420
      }
    ],
    "_fetched_at": 1785528001.8324664,
    "_updated_label": "2026-08-01 05:01"
  },
  "QQQ": {
    "nextEarnings": null,
    "news": [
      {
        "headline": "Why Markets May Be Second-Guessing The U.S. Fed",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=502d34b8c1b6bf225c936448372aed72d9e224bb08d752ec63abd6203df4e56f",
        "datetime": 1785508020
      },
      {
        "headline": "Wonder Boy Blowup Sparks Massive Semiconductor Rally; Kospi Up 18%; Amazon Helps, Apple Disappoints",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=039aff22d55b9c9cbceecf1970c40077c6cceb850b5d11e8ac2b01f78ca67027",
        "datetime": 1785507145
      },
      {
        "headline": "Stock Market Today: Amazon Jumps 15%, Apple Wipes Out $475 Billion",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=400c1e253059928ecd67705b55506f50b8f112b556e3bea7f2de09df91a3664f",
        "datetime": 1785505365
      },
      {
        "headline": "The Resilient Rally: Can Markets Continue To Climb Amid Uncertainty?",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=58f491a4bb4f8c0dbb790205a9b7297a2e726b105106abc360bff49814857c1c",
        "datetime": 1785504000
      },
      {
        "headline": "Broad Rebound Eases the Damage, but Breadth Is Not Repaired",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=eb4252ed8f4b0cf1198fbdd46229b41a51c01bb26c55d2851e2026c00a262414",
        "datetime": 1785503581
      }
    ],
    "_fetched_at": 1785528001.8324664,
    "_updated_label": "2026-08-01 05:00"
  },
  "SPY": {
    "nextEarnings": null,
    "news": [
      {
        "headline": "AMD is Down 10% Over a Month: Did Microsoft’s Catalyst Just Spark the 155% Upside Expected By Wall Street Pro?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5ff228574f21af0bc0fe9125109578d5522facc2b97cbf01946a14d44fadd4e3",
        "datetime": 1785513040
      },
      {
        "headline": "Fed Holds Rates Steady, May Hike Ahead: ETFs in Focus",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=77d980e0569585ab169e277b204ac54eb7cd5689b72caabad40ffad78ce6ce6d",
        "datetime": 1785510000
      },
      {
        "headline": "Why Markets May Be Second-Guessing The U.S. Fed",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=502d34b8c1b6bf225c936448372aed72d9e224bb08d752ec63abd6203df4e56f",
        "datetime": 1785508020
      },
      {
        "headline": "Wonder Boy Blowup Sparks Massive Semiconductor Rally; Kospi Up 18%; Amazon Helps, Apple Disappoints",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=039aff22d55b9c9cbceecf1970c40077c6cceb850b5d11e8ac2b01f78ca67027",
        "datetime": 1785507145
      },
      {
        "headline": "Her Wisconsin Pension Rose 2.1%. The Other Part Jumped 18%. Only One Is Safe to Spend.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9742ec2337227647214ee21efae2666a0bc6811dc036075a0aeadd8ea30c910c",
        "datetime": 1785506595
      }
    ],
    "_fetched_at": 1785528001.8324664,
    "_updated_label": "2026-08-01 05:00"
  },
  "ORCL": {
    "nextEarnings": {
      "date": "2026-09-07",
      "hour": "",
      "epsEstimate": 1.7745
    },
    "news": [
      {
        "headline": "3 Wall Street Analysts Have Oracle Going to $400: An Alphabet Partnership Just Jump Started That 200% Upside",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0e0f3ee98afc86e40eff051234146ffd0b0f43a8e57c0a7bb68e5f5e9f33c980",
        "datetime": 1785512991
      },
      {
        "headline": "The $2.3 Trillion Reason Amazon, Alphabet, and Microsoft May Still Be the Smartest AI Investments",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=aebe039e906efee058e57349f948fffa451aa08b1fc0ccf82daa92b27045f161",
        "datetime": 1785509255
      },
      {
        "headline": "Where Apple is diverging from rest of Mag 7 earnings",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=eebe8c7855238d4f43d6a79c9005656c05f2ca2f9b2c0ae6701ffc2c479e5718",
        "datetime": 1785508200
      },
      {
        "headline": "Oracle Is Its Own Story, With Swings To Match",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3335755e0169667f9eeb0fde8e0cf2141e3341bf6c6104f8a7e0ff42e8e0e115",
        "datetime": 1785507982
      },
      {
        "headline": "Why IBM Stock May Be A Value Deal",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=287ebdd251c998361397e6723810b6a193ed9f0d31c02cd98321227d6b2f629e",
        "datetime": 1785506857
      }
    ],
    "_fetched_at": 1785528001.8324664,
    "_updated_label": "2026-08-01 05:00"
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
        "url": "https://finnhub.io/api/news?id=560ce259fabe037c0617069ec89e12eb9933307ff3acea8968eed4b2ff5dc48c",
        "datetime": 1785525004
      },
      {
        "headline": "Top dow jones movers in Friday's session",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=79c440092e63a2111bd265972eb04522472f3460271de9305fff46cd94397303",
        "datetime": 1785516005
      },
      {
        "headline": "Oracle Is Its Own Story, With Swings To Match",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3335755e0169667f9eeb0fde8e0cf2141e3341bf6c6104f8a7e0ff42e8e0e115",
        "datetime": 1785507982
      },
      {
        "headline": "Stock Market Today: Dow Rises But Apple Dives On Weak Forecast; Amazon Surges On Earnings (Live Coverage)",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=311f734c82669afeefd6a2c79fa584d6e8c11b4bd4e0a56b2d41a0f04c8ccd31",
        "datetime": 1785505815
      },
      {
        "headline": "What the Options Market Is Signaling About the Size of the Next Move in Salesforce Stock",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f6173372bda33dd91b844806e1a56dfe77d8ecda97450c8f7167feba2f9e2f91",
        "datetime": 1785505505
      }
    ],
    "_fetched_at": 1785528001.8324664,
    "_updated_label": "2026-08-01 05:01"
  },
  "PLTR": {
    "nextEarnings": {
      "date": "2026-08-03",
      "hour": "amc",
      "epsEstimate": 0.3544
    },
    "news": [
      {
        "headline": "Beyond Mega IPOs: ICR Capital President & Chairman Don Duffy, Live from NYSE",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e3f9e1d689b98a9d5593e4800d29d65fbf767bd53b6f694d49cc76e1ebd4bbd9",
        "datetime": 1785517957
      },
      {
        "headline": "Palantir Reports Earnings Soon; This Options Trade Capitalizes On The High Volatility",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1be7bf3c59f3e080dab7d85c746254ac6227145564e1f589b0b9f58fe116996c",
        "datetime": 1785516649
      },
      {
        "headline": "Michael Burry Sends Fresh Warning on Nvidia and Micron Stocks",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=bfe75e6585ef067cefd4a2ab0aaeaa4fb1b94e36f512b0e40b97736e3c4460c9",
        "datetime": 1785514872
      },
      {
        "headline": "Palantir Looks Very Enticing Ahead Of Q2 Earnings",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=38202d251a51fe3e66fcba64f39f120fada7577f13b912fb0b3641d13114186a",
        "datetime": 1785511279
      },
      {
        "headline": "Prediction: Palantir Stock Is Going to Plunge on Aug. 4",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2e8d6851fe6c30553981e5ccd11506400b1e8cba215d0758e255eb8bb7f53867",
        "datetime": 1785489960
      }
    ],
    "_fetched_at": 1785528001.8324664,
    "_updated_label": "2026-08-01 05:01"
  },
  "QCOM": {
    "nextEarnings": {
      "date": "2026-11-03",
      "hour": "amc",
      "epsEstimate": 2.38
    },
    "news": [
      {
        "headline": "Marvell Technology Is Betting More Of Its Revenue On One End Market",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=427d251700e4700db464e95f801ad6bca834d60888601efedc6c69ae5ba2f71a",
        "datetime": 1785517769
      },
      {
        "headline": "Qualcomm’s Next Growth Engine Could Send Shares Much Higher",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b311181944665aa62964cf7738885c7ea170abd5ea7aed8a1bc0b62c2e0290b9",
        "datetime": 1785513613
      },
      {
        "headline": "Rivian Sinks 8% Despite Q2 Beat and Raised Guidance; Lucid Falls 6%",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1ba585c825661ffba6613a22e15d430fc1b35b3321979433f2f9521d6887b7c6",
        "datetime": 1785510869
      },
      {
        "headline": "Broadcom No Longer Sells Itself As A Chip Cycle Story",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e0f57910fb5d447a1b3df27046361b2ee6e04da83266e680b88dd07d6b7b0c02",
        "datetime": 1785509905
      },
      {
        "headline": "Qualcomm Stock's Biggest Risk Is The Gap Between Pain And Payoff",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d1fa0f397be819a0bbae7e44d8fc0c0e789ebcaada2f2cc92cacc3f523a964a2",
        "datetime": 1785508280
      }
    ],
    "_fetched_at": 1785528001.8324664,
    "_updated_label": "2026-08-01 05:01"
  },
  "ARM": {
    "nextEarnings": {
      "date": "2026-11-04",
      "hour": "",
      "epsEstimate": 0.4502
    },
    "news": [
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
        "headline": "The Zacks Analyst Blog Highlights Arm Holdings, NVIDIA and Qualcomm",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d4f6679a238f20674faef1a775410e2faecd76e98014cb56a2faeba25bfa6af9",
        "datetime": 1785479760
      },
      {
        "headline": "Arm Holdings plc 2027 Q1 - Results - Earnings Call Presentation",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=748ed980e82e802dd39650885a3f2bfc2ce9a45893963dbcd6d15164bf42cdf8",
        "datetime": 1785465301
      }
    ],
    "_fetched_at": 1785528001.8324664,
    "_updated_label": "2026-08-01 05:01"
  },
  "MRVL": {
    "nextEarnings": {
      "date": "2026-08-20",
      "hour": "",
      "epsEstimate": 0.939
    },
    "news": [
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
        "headline": "Broadcom No Longer Sells Itself As A Chip Cycle Story",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e0f57910fb5d447a1b3df27046361b2ee6e04da83266e680b88dd07d6b7b0c02",
        "datetime": 1785509905
      },
      {
        "headline": "Marvell Down Huge This Month: The Pros See 120% Returns in 12 Months",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=915795ce1223bd178269946f7408cd2d1087aae4d1d9e1c67d8a93c1f1867637",
        "datetime": 1785506859
      },
      {
        "headline": "Apple, Amazon, Reddit, Micron, SK Hynix, Roblox, and More Stocks That Explain Today’s Market",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=28a0c70fb10363f5c4de4d838c92523e532e8f5a9e645ef64599a97bcceb740f",
        "datetime": 1785506220
      }
    ],
    "_fetched_at": 1785528001.8324664,
    "_updated_label": "2026-08-01 05:01"
  },
  "ASML": {
    "nextEarnings": {
      "date": "2026-10-14",
      "hour": "bmo",
      "epsEstimate": 10.1558
    },
    "news": [
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
      },
      {
        "headline": "New Strong Buy Stocks for July 31st",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8243422c44b3fed835f3d1d8a48811999106cd975cf5a05a9d18b587fd101cb3",
        "datetime": 1785487200
      }
    ],
    "_fetched_at": 1785528001.8324664,
    "_updated_label": "2026-08-01 05:01"
  },
  "LRCX": {
    "nextEarnings": {
      "date": "2026-10-20",
      "hour": "",
      "epsEstimate": 1.8266
    },
    "news": [
      {
        "headline": "Tech specialist explains why China memory fears are overblown",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9449111c6a1a21ab85fc12914cc8aee2f8fddee741a3e02f73e88e780fe3309b",
        "datetime": 1785507380
      },
      {
        "headline": "Microsoft's Cloud Blowout Powers Nasdaq, Then Apple And Amazon Split The Megacap Trade All Over Again",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=a6073c2686994a4a5d886856e46fb8432496b0fc14fedce5390d5ab44d944ec3",
        "datetime": 1785489613
      },
      {
        "headline": "AMD Stock Is Gaining Friday: What's Going On?",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=e85f6d1a5cba7503456f1aeae609caf716ff04e5535300b01b5785e876e1a456",
        "datetime": 1785488301
      },
      {
        "headline": "I Am Still Calling Lam Research A Strong Buy After Q4 2026",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=a4a4551d5d326de66bdd77fe3de9e23146024efed3367f1da99a2b455dcaa143",
        "datetime": 1785478669
      },
      {
        "headline": "MU, SNDK, WDC, SKHY Stock Jump After-Hours — Memory Chipmakers Soar After Amazon, Apple Management Flag Soaring Costs, Supply Crunch",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e37f71abb0c1632b6bb0754803b5224b22955b8359b5579cfadd4282f085099e",
        "datetime": 1785456575
      }
    ],
    "_fetched_at": 1785528001.8324664,
    "_updated_label": "2026-08-01 05:01"
  },
  "KLAC": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "",
      "epsEstimate": 1.1541
    },
    "news": [
      {
        "headline": "KLA (KLAC) Upgraded to Strong Buy: What Does It Mean for the Stock?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f0e93c9d86cc3dbb51832ce2c2c185586d5076c28b6388ab58ac37bfb73bcee3",
        "datetime": 1785513604
      },
      {
        "headline": "Best Momentum Stock to Buy for July 31st",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e90abe161a0972d8e546176f22aca4fd80f5e21cd9d8e049e5857eda7063788a",
        "datetime": 1785506400
      },
      {
        "headline": "KLA Rides on Strong Advanced Packaging Growth: More Upside Ahead?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=889984031ddc6c15670b26dc3e199ab5a7c98211bc71e2277acb3d19ccd98966",
        "datetime": 1785434220
      },
      {
        "headline": "Lam Research Stock's Surge Was Building In Plain Sight",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0cc881daa186259daac9170c610b54680e2d48fbd45d5a7df275b7504098ff34",
        "datetime": 1785433746
      },
      {
        "headline": "KLAC Q2 Deep Dive: AI Infrastructure Demand Drives Growth, Market Reacts to Outlook Uncertainty",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f04eb88111e65d2f6667649a1542ba79326d5d6cfed52df0f97c8c7397d14b2a",
        "datetime": 1785427502
      }
    ],
    "_fetched_at": 1785528001.8324664,
    "_updated_label": "2026-08-01 05:01"
  },
  "SNDK": {
    "nextEarnings": {
      "date": "2026-08-05",
      "hour": "amc",
      "epsEstimate": 35.1395
    },
    "news": [
      {
        "headline": "Leopold Aschenbrenner's AI hedge fund collapses after margin calls",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5485920722c950af0a3142cb4a51c162d86e22b3ee48203fcb9cd644d765c03d",
        "datetime": 1785519866
      },
      {
        "headline": "Down 45%, is SanDisk stock a bargain buy or value trap?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cbd9c43378604a427551b97249a18f9332d78e1aa1420a9147abf10f0462c628",
        "datetime": 1785519180
      },
      {
        "headline": "10 Information Technology Stocks With Whale Alerts In Today’s Session",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=cbd9bd95679415147bd6e7c3941e87e798d1485c0d3ccc02341f3e28b7280f29",
        "datetime": 1785504915
      },
      {
        "headline": "Memory Stocks Are Crashing—Analysts’ Lofty Targets Might Not Survive This Drop",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3a65a6659558c3a54fed1f744d5dfa2deebb542d7f98231a215345c670b39aab",
        "datetime": 1785504813
      },
      {
        "headline": "Buy 5 AI Infrastructure Stocks as Big Techs Assure Lasting AI Frenzy",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=67258d979813ab6000ca1fd592bc2ab697b7a5e838e3629b80629cca2db6f43d",
        "datetime": 1785501060
      }
    ],
    "_fetched_at": 1785528001.8324664,
    "_updated_label": "2026-08-01 05:01"
  },
  "WDC": {
    "nextEarnings": {
      "date": "2026-08-05",
      "hour": "amc",
      "epsEstimate": 3.3281
    },
    "news": [
      {
        "headline": "Down 45%, is SanDisk stock a bargain buy or value trap?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cbd9c43378604a427551b97249a18f9332d78e1aa1420a9147abf10f0462c628",
        "datetime": 1785519180
      },
      {
        "headline": "Get insights into the top movers in the S&P500 index of Friday's pre-market session.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=3223cbf246df2f33c69539037f774a50260cd33d10286f045a518ad8062cad57",
        "datetime": 1785501301
      },
      {
        "headline": "Buy 5 AI Infrastructure Stocks as Big Techs Assure Lasting AI Frenzy",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=67258d979813ab6000ca1fd592bc2ab697b7a5e838e3629b80629cca2db6f43d",
        "datetime": 1785501060
      },
      {
        "headline": "MU, SKHY, NVDA, AMD, INTC Extend Rally Premarket, But Chip Stocks Still On Track For Worst Month Since 2002",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=011096ccceb5f50fcbd9900494db1fb82cc74e500fd6f8921f724503e22fef9d",
        "datetime": 1785487817
      },
      {
        "headline": "MU, SNDK, WDC, SKHY Stock Jump After-Hours — Memory Chipmakers Soar After Amazon, Apple Management Flag Soaring Costs, Supply Crunch",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e37f71abb0c1632b6bb0754803b5224b22955b8359b5579cfadd4282f085099e",
        "datetime": 1785456575
      }
    ],
    "_fetched_at": 1785528001.8324664,
    "_updated_label": "2026-08-01 05:01"
  }
};
