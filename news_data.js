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
        "headline": "Amazon vs. Alibaba: Two AI Giants Building Very Different Futures",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=60d459403862107da675bd43198447b93d483d40e5d5fc6c8c737fc05e765c34",
        "datetime": 1786024200
      },
      {
        "headline": "Stock Market Today: Dow Up, Nasdaq Falls As AI Names Sandisk, Western Digital Sink After Earnings (Live Coverage)",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b6a173fd2695a17a1bb29f366ae43c100f6d4d7a11b561b6fa5897a876fd1de9",
        "datetime": 1786024092
      },
      {
        "headline": "Greg Abel's Berkshire Hathaway May Have Repurchased Up to $11 Billion of Its Own Stock Last Quarter. Is This a Bullish Signal for Shareholders?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5a15f182ddb3e56e50e42eb2d4734bbae089fcbb7f3a2ca98b5c843c929d8baf",
        "datetime": 1786023300
      },
      {
        "headline": "Prediction: Up 120% YTD, Bloom Energy Has Room to Run",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3be4e50cbfd44e296260c3f379da59c2ed2ad60eb02fb35a8df18b016afb69ae",
        "datetime": 1786023011
      },
      {
        "headline": "Nvidia at $212: The No-Brainer Reason to Take Advantage of Nvidia Right Now",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8ae272b4aee5cc4bade95a10a7493f32786e272654bae0ec5d7516c3bc57e515",
        "datetime": 1786022877
      }
    ],
    "_fetched_at": 1786028402.1778545,
    "_updated_label": "2026-08-07 00:00"
  },
  "AAPL": {
    "nextEarnings": {
      "date": "2026-10-28",
      "hour": "amc",
      "epsEstimate": 2.0468
    },
    "news": [
      {
        "headline": "Oceania Cruises® Launches Curated Conversations",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=df4b356e60fccb0908559434cf089bfda46c1a0383bf1e944af1524f25627565",
        "datetime": 1786021200
      },
      {
        "headline": "America's AI Leaders Built the Case for Scale Before Earning Public Trust",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3ee3aa6d8198eca7dfefea69f8a47380cfde8621bf79c626c31d26fce42403ad",
        "datetime": 1786019880
      },
      {
        "headline": "This Comment From Apple CEO Tim Cook Supports Buying the Dip in Micron Stock",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=491f42d24b72282141ff3d90ebcfda1623256ba6f63da152f284be8dbac0aa8f",
        "datetime": 1786015200
      },
      {
        "headline": "Nigeria Tries to Revive 50 Year-Old Mill That Never Made Steel",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d4125ed4f2fa8ef10854fc1acb1731360053d36425bed010bdb9dd4a061da469",
        "datetime": 1786004758
      },
      {
        "headline": "OpenAI moves to dismiss Apple's trade secret lawsuit",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5a24af8291ec928ccda7906e84cd6eb3facd6a336536923adddc7ff2e0ffd018",
        "datetime": 1785996574
      }
    ],
    "_fetched_at": 1786028402.1778545,
    "_updated_label": "2026-08-07 00:00"
  },
  "GOOGL": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "amc",
      "epsEstimate": 3.1009
    },
    "news": [
      {
        "headline": "General Availability of Pinecone Nexus Proves Knowledge Drives Real Outcomes for Agentic AI",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=632319e59d77f4f9a81c3fe78a7095b6afbe427ce7401c6ca0a0a9aa1738f0a2",
        "datetime": 1786023900
      },
      {
        "headline": "Optical networking firm Lumilens valued at $5.5 billion in latest funding round",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4ee240f2d33a3b669511eb1103c79dec7614b76068fff2c2528c440dd19e88ce",
        "datetime": 1786023715
      },
      {
        "headline": "Could Microsoft, Amazon, or Google Actually Buy Reddit?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d7f3c0a82570c73c1fca38ce96fca46c08ed2603f87faccf0503191a756983ff",
        "datetime": 1786023331
      },
      {
        "headline": "Amid legal battles, Suno says it will start watermarking songs",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3250da0f10c025c344255fd4a0b0721b4e4b6b19266f11b27c76185b7524098b",
        "datetime": 1786023117
      },
      {
        "headline": "The Netflix Shock Reveals Which ETF Structure Protects You Better in a Downturn",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f6182d81b316741a325fc0c5bf7520e72c147b0eec3f73179a549feb6158a8c4",
        "datetime": 1786021801
      }
    ],
    "_fetched_at": 1786028402.1778545,
    "_updated_label": "2026-08-07 00:00"
  },
  "MSFT": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "",
      "epsEstimate": 4.7263
    },
    "news": [
      {
        "headline": "Optical networking firm Lumilens valued at $5.5 billion in latest funding round",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4ee240f2d33a3b669511eb1103c79dec7614b76068fff2c2528c440dd19e88ce",
        "datetime": 1786023715
      },
      {
        "headline": "Could Microsoft, Amazon, or Google Actually Buy Reddit?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d7f3c0a82570c73c1fca38ce96fca46c08ed2603f87faccf0503191a756983ff",
        "datetime": 1786023331
      },
      {
        "headline": "Nuclear Utility Constellation Leads Nasdaq 100 After Earnings",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=77587da899f06222b87dc311a6e86de7f0e1290e1ab95b89c5bfa143d66bbb04",
        "datetime": 1786022852
      },
      {
        "headline": "Oxylabs Research: What Nearly 1 Million Job Postings Reveal About the Tech Tools U.S. Employers Want Most",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5afa00d58233a264187b0944005187b23e7e2a414a6c2f61ede0a8760dc190f5",
        "datetime": 1786021620
      },
      {
        "headline": "Cloud Infrastructure Stocks Surge as AI Spending Confirmed and Value Plays Surface",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=3a41862cae65b9318b0035e55de122a0090e45e14beed8a659f25f99ff9aefa5",
        "datetime": 1786019902
      }
    ],
    "_fetched_at": 1786028402.1778545,
    "_updated_label": "2026-08-07 00:00"
  },
  "AMZN": {
    "nextEarnings": {
      "date": "2026-10-28",
      "hour": "amc",
      "epsEstimate": 1.9445
    },
    "news": [
      {
        "headline": "Amazon vs. Alibaba: Two AI Giants Building Very Different Futures",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=60d459403862107da675bd43198447b93d483d40e5d5fc6c8c737fc05e765c34",
        "datetime": 1786024200
      },
      {
        "headline": "Optical networking firm Lumilens valued at $5.5 billion in latest funding round",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4ee240f2d33a3b669511eb1103c79dec7614b76068fff2c2528c440dd19e88ce",
        "datetime": 1786023715
      },
      {
        "headline": "Could Microsoft, Amazon, or Google Actually Buy Reddit?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d7f3c0a82570c73c1fca38ce96fca46c08ed2603f87faccf0503191a756983ff",
        "datetime": 1786023331
      },
      {
        "headline": "Pattern to Participate in Upcoming Investor Conferences",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=eb6f0cafd3c210356388bd844d0e72fa75bb8f80b3b87890d273f5d08fe73af1",
        "datetime": 1786021200
      },
      {
        "headline": "ASUS Kicks Off Back-to-School Deals with Savings of Up to 40% on Student-Favorite Laptops and PCs!",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8125a4fb9aaf75582fa8ea0e16da0238107175b58a95da6643e3803fcffcd698",
        "datetime": 1786021200
      }
    ],
    "_fetched_at": 1786028402.1778545,
    "_updated_label": "2026-08-07 00:00"
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
    "_fetched_at": 1786028402.1778545,
    "_updated_label": "2026-08-07 00:01"
  },
  "AVGO": {
    "nextEarnings": {
      "date": "2026-09-02",
      "hour": "amc",
      "epsEstimate": 3.3012
    },
    "news": [
      {
        "headline": "Broadcom Enables Enterprises to Strengthen Multi-Layer Cyber Defense and Operational Efficiency with New vDefend and Avi Load Balancer Capabilities",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=76507ced8a76810c9e07eaf974023a55dc5f5abba46d2e3d8ca8a30b7a3ebcd1",
        "datetime": 1786021200
      },
      {
        "headline": "High Beta Runners Up: Why AMD and Marvell Technology Now Command Attention",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a4b624b29574269134d0c54e30083a342d67af5735be70350b6b1d783680fcc3",
        "datetime": 1786020691
      },
      {
        "headline": "Should You Really Invest in a Semiconductor ETF Right Now? Here's My Honest Take.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cb1c98a1f8b409614b594872e080c61e957e6154ec1475af7c1609e8857fbe8c",
        "datetime": 1786018800
      },
      {
        "headline": "How Large Does Your Portfolio Need to Be to Generate $30,000 a Month?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d2dcb2ab8565d0d8f0aae96ae81881eda093038752e451ea5ec27408ef9f16c2",
        "datetime": 1786016068
      },
      {
        "headline": "Broadcom Is Down 20% From Its All-Time High. Here's Why It's a Screaming Bargain.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b759e469455ba2ed49ec7041eb307367d7ff982e420e7e639e5b40173576ea31",
        "datetime": 1786010280
      }
    ],
    "_fetched_at": 1786028402.1778545,
    "_updated_label": "2026-08-07 00:00"
  },
  "META": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "amc",
      "epsEstimate": 7.1215
    },
    "news": [
      {
        "headline": "Optical networking firm Lumilens valued at $5.5 billion in latest funding round",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4ee240f2d33a3b669511eb1103c79dec7614b76068fff2c2528c440dd19e88ce",
        "datetime": 1786023715
      },
      {
        "headline": "Could Microsoft, Amazon, or Google Actually Buy Reddit?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d7f3c0a82570c73c1fca38ce96fca46c08ed2603f87faccf0503191a756983ff",
        "datetime": 1786023331
      },
      {
        "headline": "Nuclear Utility Constellation Leads Nasdaq 100 After Earnings",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=77587da899f06222b87dc311a6e86de7f0e1290e1ab95b89c5bfa143d66bbb04",
        "datetime": 1786022852
      },
      {
        "headline": "Qualcomm’s (QCOM) BMW Deal Adds To A Bigger Diversification Push",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=58260b94a197da7687acca00e9780366db549017fa3fdb4257e8b899a50f3f54",
        "datetime": 1786022389
      },
      {
        "headline": "Mark Zuckerberg Wants to Accelerate AI Development Further",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c52add41450a494073bd718117b2c0524ddcca62bc21b7fe3974f185568f2916",
        "datetime": 1786022254
      }
    ],
    "_fetched_at": 1786028402.1778545,
    "_updated_label": "2026-08-07 00:00"
  },
  "TSLA": {
    "nextEarnings": {
      "date": "2026-10-20",
      "hour": "amc",
      "epsEstimate": 0.4492
    },
    "news": [
      {
        "headline": "Is Wall Street Getting Uber Wrong? Bill Ackman Backs Bull Case That Robotaxi Fears Are Overblown",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6ea98ce7a2c783f5cf4a1ba84e719940f37c704d828c386b144eb98c974d058f",
        "datetime": 1786022070
      },
      {
        "headline": "Direxion Launches LOFD, Completing Its Bull & Bear Lineup Across Tesla & SpaceX",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d6a251e9d2eadf0dd297cb5f13dbef9aed6d1bf2921b9eb323c8e057212d6941",
        "datetime": 1786021200
      },
      {
        "headline": "Ford's new Fathom is its cheap EV pickup, starting at $28,350",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fc8d421b3a5b71d9f769ecb5e07f09e8be757d26a4cf44551dd44af7cecbb529",
        "datetime": 1786021200
      },
      {
        "headline": "Elon Musk's Tesla Suffered Its Worst Week Since 2022, Wiping Out $130 Billion of His Fortune. Is the Stock Still a Buy?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4456ae407c1b18c940a4cd12b172cf4535d5cbb82b7c96b068d1c7e4a31ec8f7",
        "datetime": 1786017960
      },
      {
        "headline": "Tesla is 'the best choice': Valvetronic Designs founder talks customized vs. everyday cars",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8f618fa8d14b6cea0cf99d3256920bc979b10f0500b83f21527b237f7f7c1fc4",
        "datetime": 1786017600
      }
    ],
    "_fetched_at": 1786028402.1778545,
    "_updated_label": "2026-08-07 00:00"
  },
  "MU": {
    "nextEarnings": {
      "date": "2026-09-21",
      "hour": "amc",
      "epsEstimate": 32.2476
    },
    "news": [
      {
        "headline": "The AI Memory Boom Isn’t Over. Investors Are Just Pricing It Like It Is",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=61f3e9dcb44abe06a824efd098863c6d779fa330a8bbd36d0ede2d1eabd6ba78",
        "datetime": 1786023358
      },
      {
        "headline": "Western Digital Sinks 16%, SanDisk Falls 11%, Micron Drops 6% as Memory Selloff Hits Storage Stocks",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=11d756e9479117944a9eaf2e8273e95e290d3e7f2f4115b6c770789f9d0c7b9a",
        "datetime": 1786022799
      },
      {
        "headline": "MU, WDC, SKHY, AMD — VanEck’s Nicholas Frasse Downplays Volatility In Semiconductor Stocks, Says Chip Trade Is Still Very Strong",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=93a7a2eb9ec70d3caaece896f1427a2687a5c0d45cdbe40c2cdffce62eff26e9",
        "datetime": 1786021174
      },
      {
        "headline": "Sandisk, Western Digital, D-Wave, IonQ, AppLovin, Datadog, and More Stocks That Explain Today’s Market",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=842cfcc89663b00eb959048a1e078321d2fab8f79c6fca68cf2d767b324e8670",
        "datetime": 1786020780
      },
      {
        "headline": "Citi says buy the pullback in memory stocks as upcycle is still in early innings",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=360c8bf97a97a15152903aab19b43a5b0c9da23bf97d7a17c0ac5900a7c6ae94",
        "datetime": 1786020544
      }
    ],
    "_fetched_at": 1786028402.1778545,
    "_updated_label": "2026-08-07 00:01"
  },
  "AMD": {
    "nextEarnings": {
      "date": "2026-11-02",
      "hour": "amc",
      "epsEstimate": 1.8517
    },
    "news": [
      {
        "headline": "Nvidia at $212: The No-Brainer Reason to Take Advantage of Nvidia Right Now",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8ae272b4aee5cc4bade95a10a7493f32786e272654bae0ec5d7516c3bc57e515",
        "datetime": 1786022877
      },
      {
        "headline": "Supermicro's Seventh Annual Open Storage Summit Brings Together 21 Ecosystem Partners to Share Practical Guidance on Deploying Enterprise AI at Scale",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=45ba98cbd446a738e72b241c3a1a94d8b28ded3792baf297f61efc5ef21839a1",
        "datetime": 1786021500
      },
      {
        "headline": "MU, WDC, SKHY, AMD — VanEck’s Nicholas Frasse Downplays Volatility In Semiconductor Stocks, Says Chip Trade Is Still Very Strong",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=93a7a2eb9ec70d3caaece896f1427a2687a5c0d45cdbe40c2cdffce62eff26e9",
        "datetime": 1786021174
      },
      {
        "headline": "High Beta Runners Up: Why AMD and Marvell Technology Now Command Attention",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a4b624b29574269134d0c54e30083a342d67af5735be70350b6b1d783680fcc3",
        "datetime": 1786020691
      },
      {
        "headline": "Cloud Infrastructure Stocks Surge as AI Spending Confirmed and Value Plays Surface",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=3a41862cae65b9318b0035e55de122a0090e45e14beed8a659f25f99ff9aefa5",
        "datetime": 1786019902
      }
    ],
    "_fetched_at": 1786028402.1778545,
    "_updated_label": "2026-08-07 00:00"
  },
  "INTC": {
    "nextEarnings": {
      "date": "2026-10-21",
      "hour": "amc",
      "epsEstimate": 0.3936
    },
    "news": [
      {
        "headline": "Qualcomm’s (QCOM) BMW Deal Adds To A Bigger Diversification Push",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=58260b94a197da7687acca00e9780366db549017fa3fdb4257e8b899a50f3f54",
        "datetime": 1786022389
      },
      {
        "headline": "Supermicro's Seventh Annual Open Storage Summit Brings Together 21 Ecosystem Partners to Share Practical Guidance on Deploying Enterprise AI at Scale",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=45ba98cbd446a738e72b241c3a1a94d8b28ded3792baf297f61efc5ef21839a1",
        "datetime": 1786021500
      },
      {
        "headline": "MU, WDC, SKHY, AMD — VanEck’s Nicholas Frasse Downplays Volatility In Semiconductor Stocks, Says Chip Trade Is Still Very Strong",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=93a7a2eb9ec70d3caaece896f1427a2687a5c0d45cdbe40c2cdffce62eff26e9",
        "datetime": 1786021174
      },
      {
        "headline": "RedCloud Signs Open Weights and American AI Leadership Letter Alongside Microsoft, NVIDIA and OpenAI",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=68d93bca4fd3ac6e10d698d54a256aab5c56b5b9df8c82d11d8e85d6c1ec5824",
        "datetime": 1786018500
      },
      {
        "headline": "Investors Send SoftBank Stock 4.4% Lower Even as Profit Beats Estimates",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7878534060b1e98f44a3a4e4c43f1a3a07498955902382b923ac2d5c6299ac29",
        "datetime": 1786011173
      }
    ],
    "_fetched_at": 1786028402.1778545,
    "_updated_label": "2026-08-07 00:01"
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
    "_fetched_at": 1786028402.1778545,
    "_updated_label": "2026-08-07 00:01"
  },
  "QQQ": {
    "nextEarnings": null,
    "news": [
      {
        "headline": "Index Breakouts Hold as Breadth Retains a Positive Bias",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=654eddb1155970bdf6d978755048d513772ea6b5dd1b53d9660cf068ac9ce0af",
        "datetime": 1786017666
      },
      {
        "headline": "S&P 500: 8K In Sight. But Is It Worth It? (Rating Downgrade)",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=bb0df88332af28c52aa891c62099ed9acac3c54a26cab06b92ecf06a1211e7ea",
        "datetime": 1786012469
      },
      {
        "headline": "The Hormuz Deal Is Iran's Win",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=49d1e3d59bcb0c66c21cad7d1a803717a0f532c0cd1d48d86be3e1f5d1451b7b",
        "datetime": 1786010868
      },
      {
        "headline": "2 High-Yield Picks Built To Survive The AI Bubble",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=fea7cc2ad9341761b51c963b02ef31b0012879ff5d5f24e00ef383ac12c8226e",
        "datetime": 1786007700
      },
      {
        "headline": "Don't Ignore This Powerful Historical Precedent",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=46af62bfa02e57201e0cea8c088bac7cb3cf1b2f43547598a4b5d258a1ac66b8",
        "datetime": 1786006389
      }
    ],
    "_fetched_at": 1786028402.1778545,
    "_updated_label": "2026-08-07 00:00"
  },
  "SPY": {
    "nextEarnings": null,
    "news": [
      {
        "headline": "Exchange-Traded Funds, Equity Futures Mixed Pre-Bell Thursday Amid Corporate Earnings Deluge",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c1fca3d996d1873f4dbef4e6f127cf2f9178f1c9978aef81b3ee8f2de64889a8",
        "datetime": 1786022480
      },
      {
        "headline": "Index Breakouts Hold as Breadth Retains a Positive Bias",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=654eddb1155970bdf6d978755048d513772ea6b5dd1b53d9660cf068ac9ce0af",
        "datetime": 1786017666
      },
      {
        "headline": "S&P 500: 8K In Sight. But Is It Worth It? (Rating Downgrade)",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=bb0df88332af28c52aa891c62099ed9acac3c54a26cab06b92ecf06a1211e7ea",
        "datetime": 1786012469
      },
      {
        "headline": "The Hormuz Deal Is Iran's Win",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=49d1e3d59bcb0c66c21cad7d1a803717a0f532c0cd1d48d86be3e1f5d1451b7b",
        "datetime": 1786010868
      },
      {
        "headline": "2 High-Yield Picks Built To Survive The AI Bubble",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=fea7cc2ad9341761b51c963b02ef31b0012879ff5d5f24e00ef383ac12c8226e",
        "datetime": 1786007700
      }
    ],
    "_fetched_at": 1786028402.1778545,
    "_updated_label": "2026-08-07 00:00"
  },
  "ORCL": {
    "nextEarnings": {
      "date": "2026-09-07",
      "hour": "",
      "epsEstimate": 1.7745
    },
    "news": [
      {
        "headline": "Khimji Ramdas Group Chooses Rimini Street to Reduce SAP Support Costs, Protect 700+ Customizations and Reinvest Savings in Innovation",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e4ba937e189ca46b6f2f3abb3222e0a54cad14fac4b947b9a402dfe6bc3f6dae",
        "datetime": 1786021200
      },
      {
        "headline": "Alphabet seeks up to $25 billion from its latest bond sale, Bloomberg News reports",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b6d375355b6b2e41703e51c82f2c1ae8ca839ca643e574f5997eaa0dbb2917bc",
        "datetime": 1786020578
      },
      {
        "headline": "Cloud Infrastructure Stocks Surge as AI Spending Confirmed and Value Plays Surface",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=3a41862cae65b9318b0035e55de122a0090e45e14beed8a659f25f99ff9aefa5",
        "datetime": 1786019902
      },
      {
        "headline": "Prediction: DTE Energy Will End The Year At This Price",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=074a309b0ece59f9c7e0d9d2ff08ac374c4bc65597251f475585efb61721d94c",
        "datetime": 1786019449
      },
      {
        "headline": "Paycom jumps premarket after earnings;  Data storage companies fall",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=db18d86f254e05d072fc9b8c83d91730612831209ca209a99bde0977bff72424",
        "datetime": 1786017414
      }
    ],
    "_fetched_at": 1786028402.1778545,
    "_updated_label": "2026-08-07 00:00"
  },
  "CRM": {
    "nextEarnings": {
      "date": "2026-08-26",
      "hour": "amc",
      "epsEstimate": 3.3057
    },
    "news": [
      {
        "headline": "What's going on in today's pre-market session: S&P500 movers",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=91c0194f617b9ce222be9f2c00c78db94f28ee70b970fb642bc4031e439b6786",
        "datetime": 1786019701
      },
      {
        "headline": "Salesforce (CRM) Declined as Market Questions SaaS Resilience",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4b28e07d5b3d1c1f5be56540302bce879cf7d2ecac2c324fae667d6b5ab9096f",
        "datetime": 1786019093
      },
      {
        "headline": "First Advantage (FA) Q2 Earnings and Revenues Beat Estimates",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=26ca3923c71ef146b984aee0d9a9325523b5b73997472d45d0a6123359ec810e",
        "datetime": 1786016103
      },
      {
        "headline": "Why Is Salesforce (CRM) Deploying IL5 AI Agents In A Major Government Role?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b1afaeb5d0fa82a06d049f7284c1f6e16f61a1b46ec3ce7e39486a46d96d7d40",
        "datetime": 1786011190
      },
      {
        "headline": "CRM, NOW, INTU, ADBE: Software Stocks Slide After Figma Flags Surging AI Costs",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=70446587065d2f7509feda942df2a9caf5d4886826413a626b0e5a2499fc12d1",
        "datetime": 1785981842
      }
    ],
    "_fetched_at": 1786028402.1778545,
    "_updated_label": "2026-08-07 00:00"
  },
  "PLTR": {
    "nextEarnings": {
      "date": "2026-11-02",
      "hour": "",
      "epsEstimate": 0.3782
    },
    "news": [
      {
        "headline": "RedCloud Signs Open Weights and American AI Leadership Letter Alongside Microsoft, NVIDIA and OpenAI",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=68d93bca4fd3ac6e10d698d54a256aab5c56b5b9df8c82d11d8e85d6c1ec5824",
        "datetime": 1786018500
      },
      {
        "headline": "Cathie Wood’s ARK Buys The Dip In NVDA, CRCL, SPCX Stocks – Dumps PLTR, SHOP, RBLX Shares",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4af6a83adf22fc6044cf36fbcd84061a617c74f808cccb960085b1320a1cb686",
        "datetime": 1786012128
      },
      {
        "headline": "Palantir CEO Alex Karp Drops an 11-Word Bombshell That Proves Artificial Intelligence (AI) Is Supercharging Software Stocks",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=83b2cc0613ca99ae7a4c2472a38a80afa50779f8d823308dd9f59706513b105d",
        "datetime": 1786008900
      },
      {
        "headline": "2 High-Yield Picks Built To Survive The AI Bubble",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=fea7cc2ad9341761b51c963b02ef31b0012879ff5d5f24e00ef383ac12c8226e",
        "datetime": 1786007700
      },
      {
        "headline": "The Zacks Analyst Blog Highlights Broadcom, The Coca-Cola and Palantir",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8cee2c1e13a8ac131762613071f023c27edf538ef7f9e624bb5efb3add4a0d57",
        "datetime": 1786005480
      }
    ],
    "_fetched_at": 1786028402.1778545,
    "_updated_label": "2026-08-07 00:00"
  },
  "QCOM": {
    "nextEarnings": {
      "date": "2026-11-03",
      "hour": "amc",
      "epsEstimate": 2.2987
    },
    "news": [
      {
        "headline": "Qualcomm’s (QCOM) BMW Deal Adds To A Bigger Diversification Push",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=58260b94a197da7687acca00e9780366db549017fa3fdb4257e8b899a50f3f54",
        "datetime": 1786022389
      },
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
      }
    ],
    "_fetched_at": 1786028402.1778545,
    "_updated_label": "2026-08-07 00:00"
  },
  "ARM": {
    "nextEarnings": {
      "date": "2026-11-04",
      "hour": "",
      "epsEstimate": 0.4688
    },
    "news": [
      {
        "headline": "Arm Holdings: The Stock Crashed, But This Is Why Caution Is Still Warranted",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=e74f96cdf502d55e3831a2902bf95ac8eba15d8cb06d837a7f8ef0c85cedfb35",
        "datetime": 1786011735
      },
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
      }
    ],
    "_fetched_at": 1786028402.1778545,
    "_updated_label": "2026-08-07 00:00"
  },
  "MRVL": {
    "nextEarnings": {
      "date": "2026-08-27",
      "hour": "",
      "epsEstimate": 0.939
    },
    "news": [
      {
        "headline": "MU, WDC, SKHY, AMD — VanEck’s Nicholas Frasse Downplays Volatility In Semiconductor Stocks, Says Chip Trade Is Still Very Strong",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=93a7a2eb9ec70d3caaece896f1427a2687a5c0d45cdbe40c2cdffce62eff26e9",
        "datetime": 1786021174
      },
      {
        "headline": "High Beta Runners Up: Why AMD and Marvell Technology Now Command Attention",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a4b624b29574269134d0c54e30083a342d67af5735be70350b6b1d783680fcc3",
        "datetime": 1786020691
      },
      {
        "headline": "Why Marvell Technology Stock Fell 37% in July",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c689a38a4f0b1f5f109d1338dd8fc0bb91dc827029e480f06e1dfd06e72e65c3",
        "datetime": 1786020600
      },
      {
        "headline": "Why Marvell (MRVL) Is Up 29.1% After Launching Its New AI Memory Infrastructure Portfolio",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0995866b4820f8f489495c445f64156b1fa38fe34bfa1503a37c9d8eb72f598a",
        "datetime": 1786011257
      },
      {
        "headline": "Marvell Is Positioned to Absorb a Disproportionate Amount of This AI Capex Surge, So I Keep Buying",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=179907e3438fb75a938a926573295ddbd996d50582303d5d4dcb7678ec888bd6",
        "datetime": 1785990188
      }
    ],
    "_fetched_at": 1786028402.1778545,
    "_updated_label": "2026-08-07 00:00"
  },
  "ASML": {
    "nextEarnings": {
      "date": "2026-10-14",
      "hour": "bmo",
      "epsEstimate": 10.1558
    },
    "news": [
      {
        "headline": "Nuclear Utility Constellation Leads Nasdaq 100 After Earnings",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=77587da899f06222b87dc311a6e86de7f0e1290e1ab95b89c5bfa143d66bbb04",
        "datetime": 1786022852
      },
      {
        "headline": "European Indexes Rise as Earnings Drive Markets",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=394a33c0bb8bb3141ecfdc7c5c271f45578dfeffeaff28edcc78061dc4831d66",
        "datetime": 1786007373
      },
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
      }
    ],
    "_fetched_at": 1786028402.1778545,
    "_updated_label": "2026-08-07 00:01"
  },
  "LRCX": {
    "nextEarnings": {
      "date": "2026-10-20",
      "hour": "",
      "epsEstimate": 2.1446
    },
    "news": [
      {
        "headline": "Accenture vs. Lam Research: A Comparison of Revenue Growth and Stability",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e1e46d9d50230faa6075c393e12a176dddd09fed88fbf022f6ca3bdbc80ff4cd",
        "datetime": 1786022101
      },
      {
        "headline": "Zacks.com featured highlights Lam, The Cheesecake, Vertiv and Fortinet",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e3c6f021cf8ba0872df328ddd347bb25c2f741eacfdac2092678b536e4768817",
        "datetime": 1786011660
      },
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
      }
    ],
    "_fetched_at": 1786028402.1778545,
    "_updated_label": "2026-08-07 00:01"
  },
  "KLAC": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "",
      "epsEstimate": 1.1971
    },
    "news": [
      {
        "headline": "Allspring Growth Fund Q2 2026 Performance Update",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=d3e790a365a65c1c6541e7aa0e79d403abf50c95684d2d8ec8a93eb29368f15d",
        "datetime": 1786004100
      },
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
      }
    ],
    "_fetched_at": 1786028402.1778545,
    "_updated_label": "2026-08-07 00:01"
  },
  "SNDK": {
    "nextEarnings": {
      "date": "2026-11-04",
      "hour": "",
      "epsEstimate": 41.473
    },
    "news": [
      {
        "headline": "Thursday's session: gap up and gap down stock in the S&P500 index",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=30b7d9b1ef1f63b3c625001f1f88e2441b54b6200943170924832550f22a85be",
        "datetime": 1786026901
      },
      {
        "headline": "Stock Market Today: Dow Up, Nasdaq Falls As AI Names Sandisk, Western Digital Sink After Earnings (Live Coverage)",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b6a173fd2695a17a1bb29f366ae43c100f6d4d7a11b561b6fa5897a876fd1de9",
        "datetime": 1786024092
      },
      {
        "headline": "The AI Memory Boom Isn’t Over. Investors Are Just Pricing It Like It Is",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=61f3e9dcb44abe06a824efd098863c6d779fa330a8bbd36d0ede2d1eabd6ba78",
        "datetime": 1786023358
      },
      {
        "headline": "Western Digital Sinks 16%, SanDisk Falls 11%, Micron Drops 6% as Memory Selloff Hits Storage Stocks",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=11d756e9479117944a9eaf2e8273e95e290d3e7f2f4115b6c770789f9d0c7b9a",
        "datetime": 1786022799
      },
      {
        "headline": "Wall Street futures signal muted start as investors await U.S. jobs report: Dow Jones, S&P, Nasdaq",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d950467ddb66959c65d5b5752add6393dabd86cadc31442ccee916b761b0e9dc",
        "datetime": 1786022428
      }
    ],
    "_fetched_at": 1786028402.1778545,
    "_updated_label": "2026-08-07 00:01"
  },
  "WDC": {
    "nextEarnings": {
      "date": "2026-10-28",
      "hour": "",
      "epsEstimate": 3.7282
    },
    "news": [
      {
        "headline": "Stock Market Today: Dow Up, Nasdaq Falls As AI Names Sandisk, Western Digital Sink After Earnings (Live Coverage)",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b6a173fd2695a17a1bb29f366ae43c100f6d4d7a11b561b6fa5897a876fd1de9",
        "datetime": 1786024092
      },
      {
        "headline": "Western Digital Sinks 16%, SanDisk Falls 11%, Micron Drops 6% as Memory Selloff Hits Storage Stocks",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=11d756e9479117944a9eaf2e8273e95e290d3e7f2f4115b6c770789f9d0c7b9a",
        "datetime": 1786022799
      },
      {
        "headline": "Supermicro's Seventh Annual Open Storage Summit Brings Together 21 Ecosystem Partners to Share Practical Guidance on Deploying Enterprise AI at Scale",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=45ba98cbd446a738e72b241c3a1a94d8b28ded3792baf297f61efc5ef21839a1",
        "datetime": 1786021500
      },
      {
        "headline": "Update: US Equity Futures Mixed Pre-Bell as Iran, Oman Near Agreement on Strait of Hormuz Passage",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8378622ae943201fc84bf1c5cbe85d173fc53d396468068dbded247c43d02f1a",
        "datetime": 1786021184
      },
      {
        "headline": "MU, WDC, SKHY, AMD — VanEck’s Nicholas Frasse Downplays Volatility In Semiconductor Stocks, Says Chip Trade Is Still Very Strong",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=93a7a2eb9ec70d3caaece896f1427a2687a5c0d45cdbe40c2cdffce62eff26e9",
        "datetime": 1786021174
      }
    ],
    "_fetched_at": 1786028402.1778545,
    "_updated_label": "2026-08-07 00:01"
  }
};
