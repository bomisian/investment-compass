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
        "headline": "Nvidia Isn't the Most Valuable Company in the World Anymore. Is More Bad News Coming?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f0ded626a98986d022fd2c30afa418c102970b404a877cb2facf4bc946bb5978",
        "datetime": 1785577500
      },
      {
        "headline": "Warren Buffett Has Endorsed Passive Investing for Decades. Here's the Exact Investment He Recommends Most People Buy.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ca189273f889e8b34eb4868e4e27dd879568c7ba29d416f39224772921471b4f",
        "datetime": 1785576900
      },
      {
        "headline": "Texas Instruments Stock Is Down 16% From Its 52-Week High. Is It a Buy?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c1dfe8407a1a1392cab52a56b3a018dbc08c38c56efa868e5350297f50270a5d",
        "datetime": 1785576720
      },
      {
        "headline": "Coca-Cola: The Surprising Reason Investors Should Choose Its Stock Over PepsiCo's",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7345db7b33ae6ff1b53194238fed8d3c5d8d96ca30d9bf1b3c11d67fe0ae7729",
        "datetime": 1785576480
      },
      {
        "headline": "Bitcoin vs. XRP: Which Is the Better Long-Term Buy?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=239c1740486bad6f1394ed5de545eed27cec498d2061531cddf246f3caa82ae2",
        "datetime": 1785576000
      }
    ],
    "_fetched_at": 1785585680.8999307,
    "_updated_label": "2026-08-01 21:01"
  },
  "AAPL": {
    "nextEarnings": {
      "date": "2026-10-28",
      "hour": "amc",
      "epsEstimate": 2.0468
    },
    "news": [
      {
        "headline": "Nvidia Isn't the Most Valuable Company in the World Anymore. Is More Bad News Coming?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f0ded626a98986d022fd2c30afa418c102970b404a877cb2facf4bc946bb5978",
        "datetime": 1785577500
      },
      {
        "headline": "AAPL Q2 Deep Dive: Supply Chain Strains and Product Demand Set Stage for Deceleration",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5db32c803255df4ddef6e09d7401faf8b1636893a92f1d121747a6aef4430ffb",
        "datetime": 1785567597
      },
      {
        "headline": "South Korea exports beat forecasts in July on AI chip demand",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=dc89abbe5b10a8b9d4ec5dbf9bf3d6a46f8100ddfa24fa4aaf5e5a945882bcec",
        "datetime": 1785553307
      },
      {
        "headline": "Jim Cramer Can’t Help But Gloat At Apple Inc (NASDAQ:AAPL)’s AI Developments",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b84795b42a7f9e71b9789d58adda42b151b481be22d13ac95d53f5c919635fae",
        "datetime": 1785553115
      },
      {
        "headline": "Why Apple Stock Dropped on Friday",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=40743aaa20f2d4350b530c5fdc69ef98771e27c8c5e417c26dc00b9a55fda677",
        "datetime": 1785552293
      }
    ],
    "_fetched_at": 1785585680.8999307,
    "_updated_label": "2026-08-01 21:01"
  },
  "GOOGL": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "amc",
      "epsEstimate": 3.1009
    },
    "news": [
      {
        "headline": "Amazon vs. Microsoft vs. Alphabet: Which Is the Best Cloud Stock to Buy Now?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=15288201ea3c67d936aace584372e5e6d15c451a6d0ceeb1cd5cd01f185f7446",
        "datetime": 1785568500
      },
      {
        "headline": "Is Oracle (ORCL) Using Google’s Gemini Tie-Up To Reframe Its Core AI Investment Narrative?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6abf97392666813e9e6ce0ed6b384c9e6aa5474ea9e0e5f832bc09c2693a36a1",
        "datetime": 1785557874
      },
      {
        "headline": "1 Chart Shows Why You Should Not Buy an IPO Stock on its IPO Date",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b506ab3ce660790bc100f72b92f9b27874b20512fc52bbc31cf49eb22ed1715c",
        "datetime": 1785553379
      },
      {
        "headline": "Jim Cramer Can’t Help But Gloat At Apple Inc (NASDAQ:AAPL)’s AI Developments",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b84795b42a7f9e71b9789d58adda42b151b481be22d13ac95d53f5c919635fae",
        "datetime": 1785553115
      },
      {
        "headline": "Jim Cramer Was Left “Shocked” By Alphabet Inc. (NASDAQ:GOOGL)’s Shares",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f879afaf601e1a789184279950da9ca8b17f85589075e6dd2f58709ccda7ffe0",
        "datetime": 1785552036
      }
    ],
    "_fetched_at": 1785585680.8999307,
    "_updated_label": "2026-08-01 21:01"
  },
  "MSFT": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "",
      "epsEstimate": 4.7263
    },
    "news": [
      {
        "headline": "'Tech Titan' Arora spearheads $1bn shot at NBA's London basketball team",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1758312c2aec0854786d2c3a83bc275657bad55ea2c873b80acfe6378f1dc705",
        "datetime": 1785576240
      },
      {
        "headline": "Amazon vs. Microsoft vs. Alphabet: Which Is the Best Cloud Stock to Buy Now?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=15288201ea3c67d936aace584372e5e6d15c451a6d0ceeb1cd5cd01f185f7446",
        "datetime": 1785568500
      },
      {
        "headline": "Microsoft: Wall Street Was Too Focused On CapEx, Not Enough On Growth",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=f010bdb855e4a8f1bc35959fea5626b34f62096b0b981940b24bc941887c79fb",
        "datetime": 1785567153
      },
      {
        "headline": "WEC Energy Group Q2 Earnings Call Highlights",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9206f5099887084367ab7cfa528c0651bf3cbf33b8157a550e8cef1da46480be",
        "datetime": 1785564221
      },
      {
        "headline": "If You'd Invested $10,000 in Microsoft the Day Satya Nadella Became CEO, Here's What You'd Have Now.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8154f1d59ebba1ff31bb2950efa2357fa9b88eb64252b7380e4c8193297179ac",
        "datetime": 1785560280
      }
    ],
    "_fetched_at": 1785585680.8999307,
    "_updated_label": "2026-08-01 21:01"
  },
  "AMZN": {
    "nextEarnings": {
      "date": "2026-10-28",
      "hour": "amc",
      "epsEstimate": 1.9445
    },
    "news": [
      {
        "headline": "Amazon vs. Microsoft vs. Alphabet: Which Is the Best Cloud Stock to Buy Now?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=15288201ea3c67d936aace584372e5e6d15c451a6d0ceeb1cd5cd01f185f7446",
        "datetime": 1785568500
      },
      {
        "headline": "My Bullish Outlook For JD.com Aligns With Its Quant Rating (Technical Analysis)",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=a19c99388c5074c3826df164bb412f6f03607f5153996ad0a7f81e717f28c828",
        "datetime": 1785568047
      },
      {
        "headline": "How Chinese AI Models Could Upend Anthropic, OpenAI, and Nvidia",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4efd4619555e4688a855bfbd2046adac6070cb828447f9971a3f613daba2a7ac",
        "datetime": 1785567600
      },
      {
        "headline": "Jeff Bezos Stepped Down as Amazon CEO 5 Years Ago, and the Stock Has Lagged the S&P 500 Since. Could Amazon's 15.3% Gain on July 31 Mark a Turning Point?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d6fb11d36911bfb76712c417fcfcce797bd7b15fb7a363b9ece699d0154f9da7",
        "datetime": 1785556424
      },
      {
        "headline": "Amazon's Free Cash Flow Swung $26 Billion in the Wrong Direction. The Stock Rose 15% Anyway.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ae96543a402adcc9a178dfa068abde4d337baea1abc4590cd097a21d84998738",
        "datetime": 1785544440
      }
    ],
    "_fetched_at": 1785585680.8999307,
    "_updated_label": "2026-08-01 21:01"
  },
  "TSM": {
    "nextEarnings": {
      "date": "2026-10-14",
      "hour": "amc",
      "epsEstimate": 28.8828
    },
    "news": [
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
      },
      {
        "headline": "Intel: AI Bubble Hysteria Is Not For Bulls",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=cab8cd908ec4ce377fc48b1be6932206528c9d3e9fd6266e9f7a851ab5e014af",
        "datetime": 1785433242
      }
    ],
    "_fetched_at": 1785585680.8999307,
    "_updated_label": "2026-08-01 21:02"
  },
  "AVGO": {
    "nextEarnings": {
      "date": "2026-09-02",
      "hour": "amc",
      "epsEstimate": 3.3012
    },
    "news": [
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
        "headline": "Best Long-Term Investment Stocks to Buy",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a1226102fedf497b0082df25a4a134f65ffb97e9992f1ebb9ec91961ab2f59ca",
        "datetime": 1785514211
      },
      {
        "headline": "Michael Burry Just Turned His Guns on Nvidia, Micron and SOXX — ETF Investors Are Watching the Fallout",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=6fab2a7c33c56675fae9f8f266813fb3b95b1b4a6b5d9f537c30b147d1f81b8a",
        "datetime": 1785513657
      },
      {
        "headline": "AMD is Down 10% Over a Month: Did Microsoft’s Catalyst Just Spark the 155% Upside Expected By Wall Street Pro?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5ff228574f21af0bc0fe9125109578d5522facc2b97cbf01946a14d44fadd4e3",
        "datetime": 1785513040
      }
    ],
    "_fetched_at": 1785585680.8999307,
    "_updated_label": "2026-08-01 21:02"
  },
  "META": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "amc",
      "epsEstimate": 7.1215
    },
    "news": [
      {
        "headline": "Capital Power Q2 Earnings Call Highlights",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=05bd0b2b161d13c352c3ca3c82d0ef805a5f09bf5621bd4ed4c10afad2157fa7",
        "datetime": 1785575026
      },
      {
        "headline": "Bank of America sends strong verdict to Meta stock investor",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e6cb4a736ae5a0511ce93bb886bc68cda49200e38bbbfba9e45d36ec9d97f59c",
        "datetime": 1785555180
      },
      {
        "headline": "Jim Cramer Can’t Help But Gloat At Apple Inc (NASDAQ:AAPL)’s AI Developments",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b84795b42a7f9e71b9789d58adda42b151b481be22d13ac95d53f5c919635fae",
        "datetime": 1785553115
      },
      {
        "headline": "Meta: Now Is The Time To Double Down",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=15d59ff4be7f38b70feea3a774689a849387126ee82c3e48818bfbd553627a87",
        "datetime": 1785548830
      },
      {
        "headline": "Insurance ETFs Top Defensive Sector Chart In July As Investors Look To Pivot Slightly From Chips And AI",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f8dcdd0def118578b70ecba6821d753b2ad86bb062148b401ea90318f40e7f06",
        "datetime": 1785546939
      }
    ],
    "_fetched_at": 1785585680.8999307,
    "_updated_label": "2026-08-01 21:01"
  },
  "TSLA": {
    "nextEarnings": {
      "date": "2026-10-20",
      "hour": "amc",
      "epsEstimate": 0.4492
    },
    "news": [
      {
        "headline": "Tesla's $99-a-Month FSD Plan Is on Pace to Generate $1.8 Billion a Year. Is This New Profit Lever a Signal to Buy the Elon Musk-Led Stock?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=877aa37dbb0be6b0d0c441170d7027fc392bd8f181f2da9fd956fc54b83826c3",
        "datetime": 1785562500
      },
      {
        "headline": "Believe In Elon Musk, Says Jim Cramer About Tesla, Inc. (NASDAQ:TSLA)",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=24ce9fc6fb810882afccd5ee9ffb0e2a4eade4521761f22151e1a6886598568f",
        "datetime": 1785552090
      },
      {
        "headline": "Jim Cramer Admits Its Time To Talk About Space Exploration Technologies Corp (NASDAQ:SPCX)",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=62e56f88a8eca40d7b86bbb622e49f206f4866ae3d89476d250cba0073c19bbe",
        "datetime": 1785552060
      },
      {
        "headline": "Insurance ETFs Top Defensive Sector Chart In July As Investors Look To Pivot Slightly From Chips And AI",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f8dcdd0def118578b70ecba6821d753b2ad86bb062148b401ea90318f40e7f06",
        "datetime": 1785546939
      },
      {
        "headline": "Market Chatter: Musk's Fortune Falls Below Pre-SpaceX IPO Levels, Bloomberg Reports",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ab4d5017994719e9914091208a618f435f1ea49891d926c6cb7c262772aa7a84",
        "datetime": 1785535761
      }
    ],
    "_fetched_at": 1785585680.8999307,
    "_updated_label": "2026-08-01 21:01"
  },
  "MU": {
    "nextEarnings": {
      "date": "2026-09-21",
      "hour": "amc",
      "epsEstimate": 32.2476
    },
    "news": [
      {
        "headline": "Prediction: This Is Where Micron Stock Will Be at the End of 2026",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ce5cbd58edfdd31d2b4f7faac2e40a1d35c4914b8157e6fb5501ca484295634b",
        "datetime": 1785574920
      },
      {
        "headline": "3 Reasons We Love Micron (MU)",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c01ceb5cba11d458608c085786b41420c7c732d59f52c4cc3450f728bed10bbc",
        "datetime": 1785573837
      },
      {
        "headline": "Micron (MU) Faces An AI Memory Squeeze As Samsung Sees Shortages Lasting Longer",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=61e48d3fe91bf95fb1a74bf44fbfaf992fae1ded33a51b0aa25bb35de64fd16d",
        "datetime": 1785568229
      },
      {
        "headline": "Micron's Rebound Still Faces Resistance",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=da7035d509e15a1ce02c105766bf231c2a4e28e6719f70044337862939f480ec",
        "datetime": 1785527701
      },
      {
        "headline": "Why Wall Street Keeps Underestimating Micron",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c170f20159985827c6caf472ca2672eee9b059eaeb4609e9b00fefaf7ddd2a60",
        "datetime": 1785527400
      }
    ],
    "_fetched_at": 1785585680.8999307,
    "_updated_label": "2026-08-01 21:02"
  },
  "AMD": {
    "nextEarnings": {
      "date": "2026-08-04",
      "hour": "amc",
      "epsEstimate": 1.631
    },
    "news": [
      {
        "headline": "TSMC is quietly borrowing a page from Intel's playbook",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4a27f5cb6c7d1181a6cce48ab315a3f4e4898a966f35fbdc94ccc4ef255b106d",
        "datetime": 1785551580
      },
      {
        "headline": "Corsair Gaming (CRSR) Could Be 20% Overvalued After Its AMD AI Conference Showcase",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=069d20dff6dad1bfc5fd006b7fddbef15c59908c91850a9dc2f738b6b2e88f9d",
        "datetime": 1785546418
      },
      {
        "headline": "Weekly Wrap: Crypto Stays Rangebound Amid Market Volatility",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5128180d32df69128c8360cfa49c94f8a7dc860c6d818d274d73adcabf8b143a",
        "datetime": 1785533580
      },
      {
        "headline": "Dow Jones Futures: Market Rebounds, Now Watch For This; SpaceX, AMD, Sandisk, Eli Lilly Earnings Loom",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1a94eb2201e3abbd3656b840f134ff2b4adcbb19f38c716c72b5b9b7f5d47385",
        "datetime": 1785531188
      },
      {
        "headline": "S&P 500 Posts Weekly Gain Amid AI Monetization Optimism",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e4cb926bf0be07df6b11b28b6d49b9290ff6b95a6d81b8dfb9063c26a93be0aa",
        "datetime": 1785530714
      }
    ],
    "_fetched_at": 1785585680.8999307,
    "_updated_label": "2026-08-01 21:02"
  },
  "INTC": {
    "nextEarnings": {
      "date": "2026-10-21",
      "hour": "amc",
      "epsEstimate": 0.3936
    },
    "news": [
      {
        "headline": "Jim Cramer Reveals Why Intel Corporation (NASDAQ:INTC) Is About More Than Just Selling Computer Chips",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ba1e31f84a1f93f8c16d23e67f7d743121b03fd3972cf77e456ce72f8aef452c",
        "datetime": 1785552013
      },
      {
        "headline": "TSMC is quietly borrowing a page from Intel's playbook",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4a27f5cb6c7d1181a6cce48ab315a3f4e4898a966f35fbdc94ccc4ef255b106d",
        "datetime": 1785551580
      },
      {
        "headline": "Inside the Trump administration's equity stakes in 30 companies",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7521cd1055ddf1d0c74fbd6efec7d8b63eb0e6ee5a0fbefa143ef565a52708a9",
        "datetime": 1785527748
      },
      {
        "headline": "Intel Stock Rises as Analyst Sees Apple Supply Opportunity",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=258af3c7948b607db2a09d4d87bd2d5f66f067f31dcbdb41e67ae88e29728f15",
        "datetime": 1785525394
      },
      {
        "headline": "Curious about the most active S&P500 stocks in today's session?",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=088075512575cbe9e0abbb1f6b911924f01ee3e8038560995c4fdd2a8d2bf7d0",
        "datetime": 1785521100
      }
    ],
    "_fetched_at": 1785585680.8999307,
    "_updated_label": "2026-08-01 21:02"
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
    "_fetched_at": 1785585680.8999307,
    "_updated_label": "2026-08-01 21:02"
  },
  "QQQ": {
    "nextEarnings": null,
    "news": [
      {
        "headline": "AI Stocks Without The AI Price Tag",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=95870a240dad730e0cbf713e5ce940a86670d339d18642216e1903f2f168227d",
        "datetime": 1785567687
      },
      {
        "headline": "The Federal Reserve: A Question Of Credibility",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=e763fbc47bd1b22bdb94bf424845e59a0f44f13357133f241c502bc62e34bd51",
        "datetime": 1785555300
      },
      {
        "headline": "The Bond Vigilantes Come For Kevin",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=430b3c2b71a1961c21d47a83f5dd7cebb514bf1ebb71d0df09cfe8f18ab8b3eb",
        "datetime": 1785554700
      },
      {
        "headline": "A Swing And A Miss",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=a75210d9a6e05454ee6621d1811a13638645333eeba059179f90b363cdbb5f19",
        "datetime": 1785548400
      },
      {
        "headline": "Q2 GDP Advance Estimate: Real GDP At 1.5%, Lower Than Expected",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=fc62ef3a9c05cf27cd5efe4e0d6312f287b5557752aa2fe995c44eb8e9e8f181",
        "datetime": 1785531900
      }
    ],
    "_fetched_at": 1785585680.8999307,
    "_updated_label": "2026-08-01 21:01"
  },
  "SPY": {
    "nextEarnings": null,
    "news": [
      {
        "headline": "AI Stocks Without The AI Price Tag",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=95870a240dad730e0cbf713e5ce940a86670d339d18642216e1903f2f168227d",
        "datetime": 1785567687
      },
      {
        "headline": "The Federal Reserve: A Question Of Credibility",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=e763fbc47bd1b22bdb94bf424845e59a0f44f13357133f241c502bc62e34bd51",
        "datetime": 1785555300
      },
      {
        "headline": "The Bond Vigilantes Come For Kevin",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=430b3c2b71a1961c21d47a83f5dd7cebb514bf1ebb71d0df09cfe8f18ab8b3eb",
        "datetime": 1785554700
      },
      {
        "headline": "The 12% Yield Trap: How SPYI Returns Your Own Capital as ‘Income’",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=51e9286f0efc5726b01a1413b95e00fec0ad7f52d3ced37fc727a86c01e4aab7",
        "datetime": 1785551743
      },
      {
        "headline": "A Swing And A Miss",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=a75210d9a6e05454ee6621d1811a13638645333eeba059179f90b363cdbb5f19",
        "datetime": 1785548400
      }
    ],
    "_fetched_at": 1785585680.8999307,
    "_updated_label": "2026-08-01 21:01"
  },
  "ORCL": {
    "nextEarnings": {
      "date": "2026-09-07",
      "hour": "",
      "epsEstimate": 1.7745
    },
    "news": [
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
        "headline": "3 Wall Street Analysts Have Oracle Going to $400: An Alphabet Partnership Just Jump Started That 200% Upside",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0e0f3ee98afc86e40eff051234146ffd0b0f43a8e57c0a7bb68e5f5e9f33c980",
        "datetime": 1785512991
      },
      {
        "headline": "Larry Ellison Was Once the World’s Richest Person — Now Elon Musk Is Four Times Wealthier",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=5c2b0a53e3f27ff7ebccf7981f2ab2575d05e9e918529806a7a3143eefbf2530",
        "datetime": 1785512685
      }
    ],
    "_fetched_at": 1785585680.8999307,
    "_updated_label": "2026-08-01 21:01"
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
    "_fetched_at": 1785585680.8999307,
    "_updated_label": "2026-08-01 21:01"
  },
  "PLTR": {
    "nextEarnings": {
      "date": "2026-08-03",
      "hour": "amc",
      "epsEstimate": 0.3544
    },
    "news": [
      {
        "headline": "S&P 500 Posts Weekly Gain Amid AI Monetization Optimism",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e4cb926bf0be07df6b11b28b6d49b9290ff6b95a6d81b8dfb9063c26a93be0aa",
        "datetime": 1785530714
      },
      {
        "headline": "Veteran Bank Sounds Alarm on Palantir Stock Ahead of Earnings",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7488d09fdaa942decc455ec39b2fe1e5f5b2c8cb278c540ba7164dbcc987b469",
        "datetime": 1785529126
      },
      {
        "headline": "Palantir CEO Takes Fresh Shot at AI Giants: 'They Sell Tokens'",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7a6e16dac2e6417c6e21a9a6beded70b1d8ffa8e32855a00546daec8946a75f0",
        "datetime": 1785528112
      },
      {
        "headline": "Palantir Q2 Earnings Preview Ahead of Results",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=107a8b7b7a064415cfa9a00238271c9e0e50cce90b915f74221075a04f13c78a",
        "datetime": 1785527593
      },
      {
        "headline": "Palantir Stock Faces Crucial AI Growth Test",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=dde158cdc28cc15f6bc3cdd3c7c8807b2f6f3f6c7fec99f17d1132a77b6f24e6",
        "datetime": 1785527451
      }
    ],
    "_fetched_at": 1785585680.8999307,
    "_updated_label": "2026-08-01 21:01"
  },
  "QCOM": {
    "nextEarnings": {
      "date": "2026-11-03",
      "hour": "amc",
      "epsEstimate": 2.2987
    },
    "news": [
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
      }
    ],
    "_fetched_at": 1785585680.8999307,
    "_updated_label": "2026-08-01 21:02"
  },
  "ARM": {
    "nextEarnings": {
      "date": "2026-11-04",
      "hour": "",
      "epsEstimate": 0.4688
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
        "headline": "Rosenblatt Maintains Buy on ARM Holdings, Lowers Price Target to $250",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=c5f4cf66dfb4bf411c2a3657dfa53937b92a59f7700eb04280c5ee15db122faf",
        "datetime": 1785483812
      },
      {
        "headline": "The Zacks Analyst Blog Highlights Arm Holdings, NVIDIA and Qualcomm",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d4f6679a238f20674faef1a775410e2faecd76e98014cb56a2faeba25bfa6af9",
        "datetime": 1785479760
      }
    ],
    "_fetched_at": 1785585680.8999307,
    "_updated_label": "2026-08-01 21:02"
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
    "_fetched_at": 1785585680.8999307,
    "_updated_label": "2026-08-01 21:02"
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
    "_fetched_at": 1785585680.8999307,
    "_updated_label": "2026-08-01 21:02"
  },
  "LRCX": {
    "nextEarnings": {
      "date": "2026-10-20",
      "hour": "",
      "epsEstimate": 2.1446
    },
    "news": [
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
      }
    ],
    "_fetched_at": 1785585680.8999307,
    "_updated_label": "2026-08-01 21:02"
  },
  "KLAC": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "",
      "epsEstimate": 1.1971
    },
    "news": [
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
      }
    ],
    "_fetched_at": 1785585680.8999307,
    "_updated_label": "2026-08-01 21:02"
  },
  "SNDK": {
    "nextEarnings": {
      "date": "2026-08-05",
      "hour": "amc",
      "epsEstimate": 35.1395
    },
    "news": [
      {
        "headline": "Dow Jones Futures: Market Rebounds, Now Watch For This; SpaceX, AMD, Sandisk, Eli Lilly Earnings Loom",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1a94eb2201e3abbd3656b840f134ff2b4adcbb19f38c716c72b5b9b7f5d47385",
        "datetime": 1785531188
      },
      {
        "headline": "S&P 500 Posts Weekly Gain Amid AI Monetization Optimism",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e4cb926bf0be07df6b11b28b6d49b9290ff6b95a6d81b8dfb9063c26a93be0aa",
        "datetime": 1785530714
      },
      {
        "headline": "Top Memory Chipmaker Plunges as Sharp Pullback Extends. How to Play It Here.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4419d3924fdbbd95a63c6e5d28bc68d09be98a8475ac75228c6d4ea4811c240b",
        "datetime": 1785526889
      },
      {
        "headline": "Wall Street To Big Tech: Show Us The Money In Pricey AI Race",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=de6869eefd566699763b4ece5c125b2fe32aee3f597b4c8765730ee32c40a893",
        "datetime": 1785525217
      },
      {
        "headline": "NVIDIA vs. Sandisk: Which AI Stock Could Deliver Bigger Returns?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=834cab60c60f089c5830af09d713047361ee59a7525c3287128316fce21c971c",
        "datetime": 1785524400
      }
    ],
    "_fetched_at": 1785585680.8999307,
    "_updated_label": "2026-08-01 21:02"
  },
  "WDC": {
    "nextEarnings": {
      "date": "2026-08-05",
      "hour": "amc",
      "epsEstimate": 3.3281
    },
    "news": [
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
      },
      {
        "headline": "Buy 5 AI Infrastructure Stocks as Big Techs Assure Lasting AI Frenzy",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=67258d979813ab6000ca1fd592bc2ab697b7a5e838e3629b80629cca2db6f43d",
        "datetime": 1785501060
      }
    ],
    "_fetched_at": 1785585680.8999307,
    "_updated_label": "2026-08-01 21:02"
  }
};
