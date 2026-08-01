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
        "headline": "Michael Saylor Has Paused Strategy's Regular Bitcoin Buys. What Does That Mean for MSTR Stock?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a0ac183141e6c050502e25d162b6ccd09c871e87ef95434a12031e621cecbca5",
        "datetime": 1785606660
      },
      {
        "headline": "Where Will Micron Stock Be in 2030?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=38133f18ff2461727912304a186bcde6044a76e7f63bde4c3339ff0c6ceece37",
        "datetime": 1785606660
      },
      {
        "headline": "Is Grail (GRAL) Stock a Buy, Sell, or Hold at Under $70?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2e15a660e4228b4a52af753a4c47bc796a1562e07330c5925e0bc5b64291531e",
        "datetime": 1785605300
      },
      {
        "headline": "Snowflake (SNOW) Joins Cursor Program To Help Enterprises Put AI To Work",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8601692b9508bfe73ed60427a5e61cb423c48152253c09d02355bc70bccb8b69",
        "datetime": 1785604080
      },
      {
        "headline": "Apple Gets Kicked Out of the $5 Trillion Club After Reporting Earnings. Are Fears Over Surging Memory Costs Overblown?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9dfcff6c3146524c43e1b19af960d948c6ef4e2ef66d0ff2ea5dcb268165899a",
        "datetime": 1785603900
      }
    ],
    "_fetched_at": 1785610801.726241,
    "_updated_label": "2026-08-02 04:00"
  },
  "AAPL": {
    "nextEarnings": {
      "date": "2026-10-28",
      "hour": "amc",
      "epsEstimate": 2.0468
    },
    "news": [
      {
        "headline": "Apple Gets Kicked Out of the $5 Trillion Club After Reporting Earnings. Are Fears Over Surging Memory Costs Overblown?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9dfcff6c3146524c43e1b19af960d948c6ef4e2ef66d0ff2ea5dcb268165899a",
        "datetime": 1785603900
      },
      {
        "headline": "Apple Just Did Something It Hasn't Done in Over a Year, and the Stock Can Keep Climbing Higher From Here",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1f02055ed82d4b3733b0aedc64cf17b2562d2d820d0023fcdfdd6c90e7b65398",
        "datetime": 1785593100
      },
      {
        "headline": "Apple’s Safe Haven Illusion Faces an Impending Hangover",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6dcd35f668407342c4d11e2b41645787ef858f1620e7b748948a9005b529027f",
        "datetime": 1785588655
      },
      {
        "headline": "Apple: Heads You Win, Tails You Don't Lose",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=fec6f4c2edfc925345ab9b93fd4631be36037cb417eba661e84e319e50acc048",
        "datetime": 1785583858
      },
      {
        "headline": " Berkshire Hathaway shares hit eight-month high",
        "source": "CNBC",
        "url": "https://finnhub.io/api/news?id=c0de88a9455741031b05308fd4d0f7ebae54de65a6dc12cb9fa99cbf230976ef",
        "datetime": 1785580914
      }
    ],
    "_fetched_at": 1785610801.726241,
    "_updated_label": "2026-08-02 04:00"
  },
  "GOOGL": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "amc",
      "epsEstimate": 3.1009
    },
    "news": [
      {
        "headline": "Google traffic wobble sends major signal for sinking Reddit stock",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=bc84bcc4eb8f923170e58b46e34f9533aa8c0108f8bfc33bccca7ca3872b8051",
        "datetime": 1785604020
      },
      {
        "headline": "Here's What Morgan Stanley Says About Buying the AI Infrastructure Dip",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a18b93b38c74fc94c2f9fa6b74fbd2a5c239c324519e5680d7cbd388f3ca9d42",
        "datetime": 1785601080
      },
      {
        "headline": "Google’s Pixel 11 leak exposes a brutal AI paradox",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5b647dcc2d71df7482a460e8ba336cf51f2cb4ccdf98fab7303bf6bb58e9a8e1",
        "datetime": 1785600178
      },
      {
        "headline": "Uber is building an autonomous vehicle empire, and here’s every company it’s using to do it",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=70ef54aa7ccd63ab6ab70c50d4066515877a386494dc74f451ed320e9bd509c3",
        "datetime": 1785596700
      },
      {
        "headline": "Should You Buy Billionaire Investor Chase Coleman’s Top 5 Growth Stocks in August?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1e2c339eafae480d4859aeb538229c2e26ac46f8adf813b3e151d84db92c603a",
        "datetime": 1785594636
      }
    ],
    "_fetched_at": 1785610801.726241,
    "_updated_label": "2026-08-02 04:00"
  },
  "MSFT": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "",
      "epsEstimate": 4.7263
    },
    "news": [
      {
        "headline": "Microsoft Just Announced Huge News for Nvidia Shareholders",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c3795c657a584ee726778e8ff9f4f735c32b141ff39f5462e812d5b9d478b63f",
        "datetime": 1785596820
      },
      {
        "headline": "Apple Just Did Something It Hasn't Done in Over a Year, and the Stock Can Keep Climbing Higher From Here",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1f02055ed82d4b3733b0aedc64cf17b2562d2d820d0023fcdfdd6c90e7b65398",
        "datetime": 1785593100
      },
      {
        "headline": "The Real AI Cost Question That Defines The Next Quarter of Alphabet Vs. Microsoft",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c8b055d3b08b133e4a41c3042b6037d69b7f420e25f0261167bab71d594af142",
        "datetime": 1785592280
      },
      {
        "headline": "Warsh’s Silent Treatment Has S&P Traders Bracing for Wild Swings",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=83679dff5abdedc934cd8a23d8192e8af3e36618a501e7c28c351d4cc8e4f0f4",
        "datetime": 1785589200
      },
      {
        "headline": "AI Isn’t a Catch-All Trade for Stocks in This Earnings Season",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3710e10670679477961b842503e09f6be7df6cbf98c00514a1437a27522315a2",
        "datetime": 1785585600
      }
    ],
    "_fetched_at": 1785610801.726241,
    "_updated_label": "2026-08-02 04:00"
  },
  "AMZN": {
    "nextEarnings": {
      "date": "2026-10-28",
      "hour": "amc",
      "epsEstimate": 1.9445
    },
    "news": [
      {
        "headline": "Should You Buy Billionaire Investor Chase Coleman’s Top 5 Growth Stocks in August?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1e2c339eafae480d4859aeb538229c2e26ac46f8adf813b3e151d84db92c603a",
        "datetime": 1785594636
      },
      {
        "headline": "These 7 Stocks Are Analyst Favorites For Magnificent Earnings Growth",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d6c2d8311e80e499363328e31d436387786100b5a8afd235145a0b634ed99eca",
        "datetime": 1785585621
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
      },
      {
        "headline": "The Mag 7 Doesn't Exist Anymore: Pick The Winners, Sell The Losers",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=bac9235725343d8f84b151ebaa81e92933c9cd2de0410a34a3d5b7efb5974bce",
        "datetime": 1785578687
      }
    ],
    "_fetched_at": 1785610801.726241,
    "_updated_label": "2026-08-02 04:00"
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
    "_fetched_at": 1785610801.726241,
    "_updated_label": "2026-08-02 04:01"
  },
  "AVGO": {
    "nextEarnings": {
      "date": "2026-09-02",
      "hour": "amc",
      "epsEstimate": 3.3012
    },
    "news": [
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
      }
    ],
    "_fetched_at": 1785610801.726241,
    "_updated_label": "2026-08-02 04:00"
  },
  "META": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "amc",
      "epsEstimate": 7.1215
    },
    "news": [
      {
        "headline": "Here's What Morgan Stanley Says About Buying the AI Infrastructure Dip",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a18b93b38c74fc94c2f9fa6b74fbd2a5c239c324519e5680d7cbd388f3ca9d42",
        "datetime": 1785601080
      },
      {
        "headline": "Should You Buy Billionaire Investor Chase Coleman’s Top 5 Growth Stocks in August?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1e2c339eafae480d4859aeb538229c2e26ac46f8adf813b3e151d84db92c603a",
        "datetime": 1785594636
      },
      {
        "headline": "Miivo AI launches customer insights platform - ICYMI",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a22641d39a31e653fe760695d828df74239e37d9c93bfefd1f418707c2c889b2",
        "datetime": 1785585600
      },
      {
        "headline": "AI Isn’t a Catch-All Trade for Stocks in This Earnings Season",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3710e10670679477961b842503e09f6be7df6cbf98c00514a1437a27522315a2",
        "datetime": 1785585600
      },
      {
        "headline": "Why Google, Microsoft, And Meta Are Building In West Texas? According To Galaxy Digital Executive",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=87c00177ac5a6cdd770ff2f4cc1dab1ad380b03b1ad3abf8d37bfaa1d2ed31d1",
        "datetime": 1785580952
      }
    ],
    "_fetched_at": 1785610801.726241,
    "_updated_label": "2026-08-02 04:00"
  },
  "TSLA": {
    "nextEarnings": {
      "date": "2026-10-20",
      "hour": "amc",
      "epsEstimate": 0.4492
    },
    "news": [
      {
        "headline": "SpaceX Is Down 19% From Its IPO Price. Tesla's History Suggests This May Happen Next",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=50e25d36809113be2cb465fa6bfd4c6a0a8401fc0330cf64fca2a8fbb78cf312",
        "datetime": 1785594000
      },
      {
        "headline": "Tesla Rival BYD Ramping Up Sales On Overseas Demand, Flash Charging",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e7a859a358600bffd03809604169f4dc9d806fc04e1076ef95f1cb05552499a1",
        "datetime": 1785586784
      },
      {
        "headline": "Should You Buy Tesla While It's Below $350?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6cea77bfe093a04b5d56ce99aaf208866539b84dd26565ddbeb2aca939d75a28",
        "datetime": 1785585900
      },
      {
        "headline": "A SpaceX Earnings Preview: Starlink Growth, AI Costs, Starship Roadmap",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d27cf4f6cf11cd56422632b9e9e0bafc90afdeeb09b0639649ab2e253ff586a4",
        "datetime": 1785583702
      },
      {
        "headline": "The Mag 7 Doesn't Exist Anymore: Pick The Winners, Sell The Losers",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=bac9235725343d8f84b151ebaa81e92933c9cd2de0410a34a3d5b7efb5974bce",
        "datetime": 1785578687
      }
    ],
    "_fetched_at": 1785610801.726241,
    "_updated_label": "2026-08-02 04:00"
  },
  "MU": {
    "nextEarnings": {
      "date": "2026-09-21",
      "hour": "amc",
      "epsEstimate": 32.2476
    },
    "news": [
      {
        "headline": "The AI Memory Boom Just Got a Reality Check—And a Better Entry Point",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b674836f78863908263d25b1a9f487c83203bfe8448fab1ab427655e193e0c9f",
        "datetime": 1785601920
      },
      {
        "headline": "Here's What Morgan Stanley Says About Buying the AI Infrastructure Dip",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a18b93b38c74fc94c2f9fa6b74fbd2a5c239c324519e5680d7cbd388f3ca9d42",
        "datetime": 1785601080
      },
      {
        "headline": "Why the Best May Be Yet to Come for NVIDIA, Micron, and SanDisk",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=42b1eb85393187073f908710f5cb38880f8c636222a0989b248745d565b43a6f",
        "datetime": 1785596413
      },
      {
        "headline": "Both Berkshire Hathaway and Micron Stocks Look Cheap on the Surface. But I Like 1 Better Than the Other.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3b7caec0e12d51bcd0b7fe941fb7baaec7131cfb6525ed6e82c6c6c3c7a5083f",
        "datetime": 1785588180
      },
      {
        "headline": "Micron: Contracted Scarcity Can Outlast The Memory Boom",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=7880fc0254eac58a98916f5add8937c1528f0dd9c2b3cfccec3d475fb02d0810",
        "datetime": 1785576519
      }
    ],
    "_fetched_at": 1785610801.726241,
    "_updated_label": "2026-08-02 04:01"
  },
  "AMD": {
    "nextEarnings": {
      "date": "2026-08-04",
      "hour": "amc",
      "epsEstimate": 1.631
    },
    "news": [
      {
        "headline": "SpaceX's First Earnings Post IPO",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=9de17a5f3bdcc68bc05d4cf666a8e11bd0e6515b1992fd4959b95b7838d3aa1b",
        "datetime": 1785583800
      },
      {
        "headline": "Celestica: It's Finally Too Cheap To Ignore (Rating Upgrade)",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=2a4c8278a66bbc9cefdc3f4ce4edf030e3fd2bfaa84c001735ad32a8ca17fb2c",
        "datetime": 1785572288
      },
      {
        "headline": "Benzinga Bulls And Bears: Amazon, Microsoft, SpaceX",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=b593a1a8b608a1e35c900bdb49b3e36d6bf3ab0704ceba01b073e6871a159a43",
        "datetime": 1785571235
      },
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
      }
    ],
    "_fetched_at": 1785610801.726241,
    "_updated_label": "2026-08-02 04:00"
  },
  "INTC": {
    "nextEarnings": {
      "date": "2026-10-21",
      "hour": "amc",
      "epsEstimate": 0.3936
    },
    "news": [
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
        "headline": "Prediction: Intel Posts a Profitable Year Before 2028. Here's How It Gets There.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=80b1261720d65dc708ac73d5778ac0dbe15ba61ab8981c1f2c00af201b16f9d4",
        "datetime": 1785598140
      },
      {
        "headline": "Two 25%+ Covered Call ETFs Where The Risk Has Quietly Changed",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=52f9687440cecdf68863b4100899f7f82fe7321158068a476d80d1bd6381b89f",
        "datetime": 1785575700
      },
      {
        "headline": "Jim Cramer Reveals Why Intel Corporation (NASDAQ:INTC) Is About More Than Just Selling Computer Chips",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ba1e31f84a1f93f8c16d23e67f7d743121b03fd3972cf77e456ce72f8aef452c",
        "datetime": 1785552013
      }
    ],
    "_fetched_at": 1785610801.726241,
    "_updated_label": "2026-08-02 04:00"
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
      }
    ],
    "_fetched_at": 1785610801.726241,
    "_updated_label": "2026-08-02 04:01"
  },
  "QQQ": {
    "nextEarnings": null,
    "news": [
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
      },
      {
        "headline": "Weekly Indicators: Rising Interest Rates Are Again The Main Attraction",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=b86b58d50ea06aaa1947113f11eb843f79f0fc811e9e090a1194098c9d670a20",
        "datetime": 1785571200
      },
      {
        "headline": "AI Stocks Without The AI Price Tag",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=95870a240dad730e0cbf713e5ce940a86670d339d18642216e1903f2f168227d",
        "datetime": 1785567687
      }
    ],
    "_fetched_at": 1785610801.726241,
    "_updated_label": "2026-08-02 04:00"
  },
  "SPY": {
    "nextEarnings": null,
    "news": [
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
      },
      {
        "headline": "JEPI vs JEPQ: After Comparing America’s Two Biggest Income ETFs, One Is the Better Buy for the Rest of 2026",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f11ef6f90924525bf34c8a98080caa2e80f4e6a46ced99eb491f65b95be93604",
        "datetime": 1785594237
      },
      {
        "headline": "Apple’s Safe Haven Illusion Faces an Impending Hangover",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6dcd35f668407342c4d11e2b41645787ef858f1620e7b748948a9005b529027f",
        "datetime": 1785588655
      },
      {
        "headline": "The 1-Minute Market Report, August 1, 2026",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=b6dd91378002908537fa533ed403812486a6a2c73bb10cf7513cb1b84187c1a4",
        "datetime": 1785583439
      }
    ],
    "_fetched_at": 1785610801.726241,
    "_updated_label": "2026-08-02 04:00"
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
        "headline": "Morgan Stanley says Bloom can withstand an Oracle project delay",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=934b561936836ed8e06aef922e5d86cf3aca81c7f99271012fded8efe4657af7",
        "datetime": 1785515580
      },
      {
        "headline": "3 Wall Street Analysts Have Oracle Going to $400: An Alphabet Partnership Just Jump Started That 200% Upside",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0e0f3ee98afc86e40eff051234146ffd0b0f43a8e57c0a7bb68e5f5e9f33c980",
        "datetime": 1785512991
      }
    ],
    "_fetched_at": 1785610801.726241,
    "_updated_label": "2026-08-02 04:00"
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
    "_fetched_at": 1785610801.726241,
    "_updated_label": "2026-08-02 04:00"
  },
  "PLTR": {
    "nextEarnings": {
      "date": "2026-08-03",
      "hour": "amc",
      "epsEstimate": 0.3544
    },
    "news": [
      {
        "headline": "The Market Now Says Palantir Technologies Is Just an LLM Wrapper. The Financials Disagree",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=632b77a938e823accc9744175706fb6e1b88a50519fedb8000fb996633797a38",
        "datetime": 1785595414
      },
      {
        "headline": "SpaceX's First Earnings Post IPO",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=9de17a5f3bdcc68bc05d4cf666a8e11bd0e6515b1992fd4959b95b7838d3aa1b",
        "datetime": 1785583800
      },
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
      }
    ],
    "_fetched_at": 1785610801.726241,
    "_updated_label": "2026-08-02 04:00"
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
    "_fetched_at": 1785610801.726241,
    "_updated_label": "2026-08-02 04:00"
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
    "_fetched_at": 1785610801.726241,
    "_updated_label": "2026-08-02 04:00"
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
    "_fetched_at": 1785610801.726241,
    "_updated_label": "2026-08-02 04:00"
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
    "_fetched_at": 1785610801.726241,
    "_updated_label": "2026-08-02 04:01"
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
    "_fetched_at": 1785610801.726241,
    "_updated_label": "2026-08-02 04:01"
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
      }
    ],
    "_fetched_at": 1785610801.726241,
    "_updated_label": "2026-08-02 04:01"
  },
  "SNDK": {
    "nextEarnings": {
      "date": "2026-08-05",
      "hour": "amc",
      "epsEstimate": 35.1395
    },
    "news": [
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
      },
      {
        "headline": "Benzinga Bulls And Bears: Amazon, Microsoft, SpaceX",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=b593a1a8b608a1e35c900bdb49b3e36d6bf3ab0704ceba01b073e6871a159a43",
        "datetime": 1785571235
      }
    ],
    "_fetched_at": 1785610801.726241,
    "_updated_label": "2026-08-02 04:01"
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
    "_fetched_at": 1785610801.726241,
    "_updated_label": "2026-08-02 04:01"
  }
};
