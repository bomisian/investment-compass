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
        "headline": "3 Stocks to Buy as AI Infrastructure Continues to Surge",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4f757ecc1b69a67cd4cbf12025c3c64b6d1323c3485f6f20da26d87f5deb3db3",
        "datetime": 1785837000
      },
      {
        "headline": "3 Magnificent ETFs I'm Buying Hand Over Fist in 2026",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5816e9c5be0e4488811404b0a3ef1e647d5bab7e94d1f15c998320d04381713e",
        "datetime": 1785836340
      },
      {
        "headline": "Elon Musk's SpaceX Reports Its Second-Quarter Results Today, but the Real Fireworks Begin on Aug. 6",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8126b4133dd4a1a9b716e283481d9acffac65713c6a03f23ff87dab9e3e7d1d8",
        "datetime": 1785835560
      },
      {
        "headline": "Microsoft vs. Amazon: Which Stock Does Wall Street Think Is the Better Buy?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2fb358586f586de0f73de6415bd9668d322903788c2672ddfdcbc8eae13104e6",
        "datetime": 1785835200
      },
      {
        "headline": "1 Glorious Growth Stock That Could 10X by 2034",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a70e7145e448e8389dfdd6e63cdda435132240fb80e7c434741aff26728660b0",
        "datetime": 1785834420
      }
    ],
    "_fetched_at": 1785844883.2671013,
    "_updated_label": "2026-08-04 21:01"
  },
  "AAPL": {
    "nextEarnings": {
      "date": "2026-10-28",
      "hour": "amc",
      "epsEstimate": 2.0468
    },
    "news": [
      {
        "headline": "Market Chatter: Apple Seeks Injunction Against OpenAI as Trade Secrets Lawsuit Advances",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c26b30c9537049aebb934b29f7dc8ac70cff03a274836bc7f7f5053c2086d3e1",
        "datetime": 1785832810
      },
      {
        "headline": "OpenAI Has Three Words For Apple's Lawsuit: 'Careless, Aggressive And Oddly Personal'",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f30ec8604b2c2b196f2e66d4035949ba7d863ade9d0c08ed7d2889a35db23143",
        "datetime": 1785831823
      },
      {
        "headline": "Apple (AAPL) Could Be 20% Overvalued As Earnings And Dividend Land",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=725690f0a6386761a466f8ee1604600970171d1550b167207af5c7e150283f9c",
        "datetime": 1785831074
      },
      {
        "headline": "Amazon And Microsoft Ace Wall Street’s AI Test — Analyst Warns ‘Mag Seven’ Now Faces A ‘Higher Burden Of Proof’",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=177b851151185a1b47a24a78ef065c3915444700b2879dc522d911a2f580231a",
        "datetime": 1785829222
      },
      {
        "headline": "Apple: Memory Inflation Drives Rating Downgrade",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=f4061b093547ba5657b4276535158e04abd0b167380136a7a92d3bc0beca9172",
        "datetime": 1785828600
      }
    ],
    "_fetched_at": 1785844883.2671013,
    "_updated_label": "2026-08-04 21:01"
  },
  "GOOGL": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "amc",
      "epsEstimate": 3.1009
    },
    "news": [
      {
        "headline": "3 Stocks to Buy as AI Infrastructure Continues to Surge",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4f757ecc1b69a67cd4cbf12025c3c64b6d1323c3485f6f20da26d87f5deb3db3",
        "datetime": 1785837000
      },
      {
        "headline": "Stock Market News for Aug 4, 2026",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c17de45ca1420c4926ff9c096602501c55f788d7175a78535b36206417f262bf",
        "datetime": 1785832860
      },
      {
        "headline": "President Trump Buys 2 AI Stocks That Wall Street Says Are Undervalued",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=04844e866cf4da0b52073a1bf80e7bd3e3947852fa7c4f525a29cdf1b4b8a7b8",
        "datetime": 1785832320
      },
      {
        "headline": "SpaceX Prepares for Inaugural Earnings. 3 Numbers That Matter.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9aaf98136ddc56baedca9f1a3fedf26ee41e5d1d001de953773cc49eea798653",
        "datetime": 1785830457
      },
      {
        "headline": "Amazon And Microsoft Ace Wall Street’s AI Test — Analyst Warns ‘Mag Seven’ Now Faces A ‘Higher Burden Of Proof’",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=177b851151185a1b47a24a78ef065c3915444700b2879dc522d911a2f580231a",
        "datetime": 1785829222
      }
    ],
    "_fetched_at": 1785844883.2671013,
    "_updated_label": "2026-08-04 21:01"
  },
  "MSFT": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "",
      "epsEstimate": 4.7263
    },
    "news": [
      {
        "headline": "Microsoft vs. Amazon: Which Stock Does Wall Street Think Is the Better Buy?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2fb358586f586de0f73de6415bd9668d322903788c2672ddfdcbc8eae13104e6",
        "datetime": 1785835200
      },
      {
        "headline": "Stock Market News for Aug 4, 2026",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c17de45ca1420c4926ff9c096602501c55f788d7175a78535b36206417f262bf",
        "datetime": 1785832860
      },
      {
        "headline": "Market Chatter: Apple Seeks Injunction Against OpenAI as Trade Secrets Lawsuit Advances",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c26b30c9537049aebb934b29f7dc8ac70cff03a274836bc7f7f5053c2086d3e1",
        "datetime": 1785832810
      },
      {
        "headline": "Amazon (AMZN) Paid $50 Billion for OpenAI. Microsoft (MSFT) Opened the Door but Kept the Keys",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=551f471797fdb615b00e5e98483433438e91ce3d8d838c3f2b5a19b18d1266ac",
        "datetime": 1785832295
      },
      {
        "headline": "Amazon And Microsoft Ace Wall Street’s AI Test — Analyst Warns ‘Mag Seven’ Now Faces A ‘Higher Burden Of Proof’",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=177b851151185a1b47a24a78ef065c3915444700b2879dc522d911a2f580231a",
        "datetime": 1785829222
      }
    ],
    "_fetched_at": 1785844883.2671013,
    "_updated_label": "2026-08-04 21:01"
  },
  "AMZN": {
    "nextEarnings": {
      "date": "2026-10-28",
      "hour": "amc",
      "epsEstimate": 1.9445
    },
    "news": [
      {
        "headline": "3 Stocks to Buy as AI Infrastructure Continues to Surge",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4f757ecc1b69a67cd4cbf12025c3c64b6d1323c3485f6f20da26d87f5deb3db3",
        "datetime": 1785837000
      },
      {
        "headline": "D'YAVOL Spirits Debuts in United Kingdom with Exclusive Launch Event Hosted by Aryan Khan in London",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b070b05ba6c91343467f72b4f13bf6e59dfa64507d10e474ff816e4a386669fe",
        "datetime": 1785835800
      },
      {
        "headline": "Superblocks, AWS sign multi-year deal for enterprise AI on Bedrock",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3038d14a7d833951b102c35bfa882a0224f075ffde1ca1c3d5611708f897c8b7",
        "datetime": 1785835376
      },
      {
        "headline": "Microsoft vs. Amazon: Which Stock Does Wall Street Think Is the Better Buy?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2fb358586f586de0f73de6415bd9668d322903788c2672ddfdcbc8eae13104e6",
        "datetime": 1785835200
      },
      {
        "headline": "Nasdaq, S&P 500 Futures Climb As Wall Street Awaits AMD, SpaceX Earnings After Palantir Rally: Why SNAP, AMZN, SNDK, LCID, SLS, ASTS Are In Focus",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2918b20867c8bcdf13a895f9f6294d60fa7eeda66dede904d3c0fbd4b981bb3a",
        "datetime": 1785833297
      }
    ],
    "_fetched_at": 1785844883.2671013,
    "_updated_label": "2026-08-04 21:01"
  },
  "TSM": {
    "nextEarnings": {
      "date": "2026-10-14",
      "hour": "amc",
      "epsEstimate": 28.8828
    },
    "news": [
      {
        "headline": "Congressman Who Spent Millions on Magnificent Seven Stocks Just Bought Another Tech Giant",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=239f67fbaa887b163e8b735f5d7d2cdec373cabc2a1173fc9cb93e589f098c7f",
        "datetime": 1785776227
      },
      {
        "headline": "QUICK SPARK: SpaceX Tops Cathie Wood's Shopping List With $26 Million Bet Ahead Of First Earnings",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=7b1132cd492389a9192b2336d301bfe89458d452032fe7538cb00dbb156e58c9",
        "datetime": 1785774618
      },
      {
        "headline": "SK hynix: Key Strengths In The Agentic AI Era",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=baa66d9a7fb10a689443790c39e1d8a23593c2928197f56cb2e96a38874c718c",
        "datetime": 1785764352
      },
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
      }
    ],
    "_fetched_at": 1785844883.2671013,
    "_updated_label": "2026-08-04 21:02"
  },
  "AVGO": {
    "nextEarnings": {
      "date": "2026-09-03",
      "hour": "amc",
      "epsEstimate": 3.3012
    },
    "news": [
      {
        "headline": "Inside Google’s $200bn Wall Street finance machine for Anthropic",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c7f2dadb1ae1a351ab2de0f6f74f6ff5d20ecb0c2ebd353cc8d31819d0a32fa7",
        "datetime": 1785816016
      },
      {
        "headline": "1 Nasdaq 100 Stock to Target This Week and 2 We Question",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8845c37ca94900f84632105abec64888ed4c2e8f7fe48b23ed0074a6f03a2948",
        "datetime": 1785795682
      },
      {
        "headline": "Own The AI Boom? NVIDIA's Story vs. Micron's Contracts",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0a95889d8262d6f2a3c5057ae191a4f3fb6616710c8efaa58a1ebb573335eead",
        "datetime": 1785794771
      },
      {
        "headline": "Broadcom Stock Slips After Losing Major EU Antitrust Fight",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2ba62af09be48cc5446a5ebdc954b18fb14e1787d6e83dad0a97763afd4b7716",
        "datetime": 1785781465
      },
      {
        "headline": "AMD Price Prediction: Analysts Eye AI-Driven Upside Ahead of Earnings",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=feaa26b959fea343442790e11698b8986658ec4970fd729547fa62b57a9319c7",
        "datetime": 1785780058
      }
    ],
    "_fetched_at": 1785844883.2671013,
    "_updated_label": "2026-08-04 21:02"
  },
  "META": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "amc",
      "epsEstimate": 7.1215
    },
    "news": [
      {
        "headline": "Stock Market News for Aug 4, 2026",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c17de45ca1420c4926ff9c096602501c55f788d7175a78535b36206417f262bf",
        "datetime": 1785832860
      },
      {
        "headline": "President Trump Buys 2 AI Stocks That Wall Street Says Are Undervalued",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=04844e866cf4da0b52073a1bf80e7bd3e3947852fa7c4f525a29cdf1b4b8a7b8",
        "datetime": 1785832320
      },
      {
        "headline": "Amazon And Microsoft Ace Wall Street’s AI Test — Analyst Warns ‘Mag Seven’ Now Faces A ‘Higher Burden Of Proof’",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=177b851151185a1b47a24a78ef065c3915444700b2879dc522d911a2f580231a",
        "datetime": 1785829222
      },
      {
        "headline": "Snap's $2,195 Glasses Will See 'Mass Market Adoption' By End of Decade, Says CEO Evan Spiegel: 'Designed For a Future in Which AI Does More Work'",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=64c54ff19b2b3e6a15123f5c731eab19041f0cf61276a7b54b69cee61d2baa1a",
        "datetime": 1785828015
      },
      {
        "headline": "Meta: Our Conviction Has Only Increased",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=de037c1923198881db961cf553b579a17ce79537bda4e104d75a092823307d19",
        "datetime": 1785826200
      }
    ],
    "_fetched_at": 1785844883.2671013,
    "_updated_label": "2026-08-04 21:01"
  },
  "TSLA": {
    "nextEarnings": {
      "date": "2026-10-20",
      "hour": "amc",
      "epsEstimate": 0.4492
    },
    "news": [
      {
        "headline": "Tesla (TSLA) Draws Fresh Optimism, Is The Long Term Upside Already Priced In?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ab1121d0b92c28232d398046532aa3ac4c996fec72661290202fad31fcd855d6",
        "datetime": 1785834904
      },
      {
        "headline": "How SpaceX Stock Will Trade After Earnings.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b61130815945ccd1ccab1821bddeb051afb2617332b036a07adf50617de20a2b",
        "datetime": 1785832358
      },
      {
        "headline": "Amazon And Microsoft Ace Wall Street’s AI Test — Analyst Warns ‘Mag Seven’ Now Faces A ‘Higher Burden Of Proof’",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=177b851151185a1b47a24a78ef065c3915444700b2879dc522d911a2f580231a",
        "datetime": 1785829222
      },
      {
        "headline": "Tesla's Advantage: The Overall System Increasingly Difficult To Replicate",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=5102c9a82d33f0cf6bb449bdf62b9515ef8956849e5c910201e3267be985bc19",
        "datetime": 1785825900
      },
      {
        "headline": "Elon Musk's Net Worth Down Nearly $700 Billion Amid Tesla, SpaceX Merger Rumors",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c79cc5d9edee99ffba78f6f3e1380c19e3160df35bb09b688ea436b0252582f5",
        "datetime": 1785814217
      }
    ],
    "_fetched_at": 1785844883.2671013,
    "_updated_label": "2026-08-04 21:01"
  },
  "MU": {
    "nextEarnings": {
      "date": "2026-09-21",
      "hour": "amc",
      "epsEstimate": 32.2476
    },
    "news": [
      {
        "headline": "Is Micron Technology (MU) A Bargain Following New Memory Capacity Risks?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=13323b45538458690c7d388e9ef406ea21ff73f342eb270d625c551a67a594e3",
        "datetime": 1785827415
      },
      {
        "headline": "MU Stock Falls Premarket After Worst Month In 11 Years: Analysts Say Memory Demand Intact, See 85% Upside",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f4ae7ae37153cacb0b2bf029dac4390a6615ceb85ff1db7c1e3abb248f795f1c",
        "datetime": 1785804824
      },
      {
        "headline": "For Micron Stock, The Growth That Justifies The Price Has To Arrive",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a67a01c317c583670d27ce4941b2c8c2f1530d4d8f7c0fecb1dba9f22391887c",
        "datetime": 1785798038
      },
      {
        "headline": "Own The AI Boom? NVIDIA's Story vs. Micron's Contracts",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0a95889d8262d6f2a3c5057ae191a4f3fb6616710c8efaa58a1ebb573335eead",
        "datetime": 1785794771
      },
      {
        "headline": "Amazon, Apple, Boeing, Micron, Bristol Myers, GameStop, SpaceX, and More Stocks That Explain Today’s Market",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ab20f4d034e6ad3ae5839919a1f51203b54604f3fd7be93648ca2f25746f1111",
        "datetime": 1785790020
      }
    ],
    "_fetched_at": 1785844883.2671013,
    "_updated_label": "2026-08-04 21:02"
  },
  "AMD": {
    "nextEarnings": {
      "date": "2026-08-04",
      "hour": "amc",
      "epsEstimate": 1.631
    },
    "news": [
      {
        "headline": "Nasdaq, S&P 500 Futures Climb As Wall Street Awaits AMD, SpaceX Earnings After Palantir Rally: Why SNAP, AMZN, SNDK, LCID, SLS, ASTS Are In Focus",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2918b20867c8bcdf13a895f9f6294d60fa7eeda66dede904d3c0fbd4b981bb3a",
        "datetime": 1785833297
      },
      {
        "headline": "Palantir's ‘Rule Of 40’ Score Hit 155% — Here's The Math And Why It Matters For Software Valuations",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=70921ace3008fd175e2d63843a8e5d052ee6f47ed17b092a273c6b94bce421df",
        "datetime": 1785828073
      },
      {
        "headline": "AMD Stock Jumps Overnight Ahead Of Q2 Print — Citigroup Loads Up, Analyst Sees Over 40% Upside On ‘Clean’ Quarter",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=27547d2ba8737ef3b3233bb73d13587f207faf3715a13b1370c13ab1dbf26bb8",
        "datetime": 1785826212
      },
      {
        "headline": "For Micron Stock, The Growth That Justifies The Price Has To Arrive",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a67a01c317c583670d27ce4941b2c8c2f1530d4d8f7c0fecb1dba9f22391887c",
        "datetime": 1785798038
      },
      {
        "headline": "Own The AI Boom? NVIDIA's Story vs. Micron's Contracts",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0a95889d8262d6f2a3c5057ae191a4f3fb6616710c8efaa58a1ebb573335eead",
        "datetime": 1785794771
      }
    ],
    "_fetched_at": 1785844883.2671013,
    "_updated_label": "2026-08-04 21:02"
  },
  "INTC": {
    "nextEarnings": {
      "date": "2026-10-21",
      "hour": "amc",
      "epsEstimate": 0.3936
    },
    "news": [
      {
        "headline": "INTC Q2 Deep Dive: Data Center and AI Strength Offset Market Concerns Amid Supply Constraints",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1b4b9e3e8d94eebd00f68bb084a7c3a843598d2d67971dd8070045a204865420",
        "datetime": 1785832642
      },
      {
        "headline": "Intel (INTC) Faces New AI And Packaging Pressure From China And TSMC",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=184d2f5e58b8fa0daf985f81301a65f99053b56be5ec99b3366c4ff599d4e0a7",
        "datetime": 1785802514
      },
      {
        "headline": "Is Intel’s AI PC and Advanced Packaging Ecosystem Shift Altering The Investment Case For Intel (INTC)?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e86a4b3812d13941a6f2f73e0fcaa42f4d90bbe91b03815d251697be58debdc9",
        "datetime": 1785798929
      },
      {
        "headline": "For Micron Stock, The Growth That Justifies The Price Has To Arrive",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a67a01c317c583670d27ce4941b2c8c2f1530d4d8f7c0fecb1dba9f22391887c",
        "datetime": 1785798038
      },
      {
        "headline": "Own The AI Boom? NVIDIA's Story vs. Micron's Contracts",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0a95889d8262d6f2a3c5057ae191a4f3fb6616710c8efaa58a1ebb573335eead",
        "datetime": 1785794771
      }
    ],
    "_fetched_at": 1785844883.2671013,
    "_updated_label": "2026-08-04 21:02"
  },
  "AMAT": {
    "nextEarnings": {
      "date": "2026-08-13",
      "hour": "amc",
      "epsEstimate": 3.462
    },
    "news": [
      {
        "headline": "Applied Materials (AMAT) Outperforms Broader Market: What You Need to Know",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f40784ef4b8f647ee7eb708aa637e8e6a8a221291ded9f6f2446e2f20ba6e909",
        "datetime": 1785793501
      },
      {
        "headline": "KLA Corporation Cratered 40% Over The Last 30 Days: The Next 12 Months Will Bring 75% Returns According to One Wall Street Pro",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e5cae5c691c9a67cde4961c43189d47c97a42ec55eeab41b9f6e39204b304dec",
        "datetime": 1785785646
      },
      {
        "headline": "MKSI Gears Up to Report Q2 Earnings: What's in Store for the Stock?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e2f152b8e44696b75aa402ddfcad294b7568d8ac865f4ff2b112ba48c77640e1",
        "datetime": 1785777120
      },
      {
        "headline": "VECO Set to Report Q2 Earnings: What's in Store for the Stock?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f1eec51825d0f68732c918ff42c6a36f797f8cf2fbacefe0e641190ae4e57464",
        "datetime": 1785776880
      },
      {
        "headline": "DoorDash to Report Q2 Earnings: What's in Store for the Stock?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=bc8bb3ec67fca5bb2670f144921c83fdd54828823a6e4797dc45f04d698fb109",
        "datetime": 1785776700
      }
    ],
    "_fetched_at": 1785844883.2671013,
    "_updated_label": "2026-08-04 21:02"
  },
  "QQQ": {
    "nextEarnings": null,
    "news": [
      {
        "headline": "This Could Be The Most Important Market Rotation In Years",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=917b12028cb75ee1e842e2ac72e559f38adca9db688ce29239450a82b0d45b37",
        "datetime": 1785828600
      },
      {
        "headline": "Market Brief: Has The AI Washout Already Done Its Work?",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=edbe43d27b4b6903f0112fb9bf37c84bfe02d774b569776d431c277c21fe317d",
        "datetime": 1785816900
      },
      {
        "headline": "Warsh Wants The Federal Reserve To Rethink The Rules",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=8016649dc4c2d9a716d254080c22354b3eef57e339074d4e3814a869bcafa49c",
        "datetime": 1785813600
      },
      {
        "headline": "AI Investment Boosted U.S. Q2 Growth - But The Import Offset Runs Far Wider Than AI",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=ca6a8437f542aa87bbb3406028c640dca34b2e23e4436e2a982c18fd45a3834d",
        "datetime": 1785806700
      },
      {
        "headline": "ValuEngine Weekly Market Summary And Commentary",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=d7f4c3f4ed360d0e9f6e1ad2269b48d5c7ce8d21b97014763a5ead3fb25732c2",
        "datetime": 1785806100
      }
    ],
    "_fetched_at": 1785844883.2671013,
    "_updated_label": "2026-08-04 21:01"
  },
  "SPY": {
    "nextEarnings": null,
    "news": [
      {
        "headline": "This Could Be The Most Important Market Rotation In Years",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=917b12028cb75ee1e842e2ac72e559f38adca9db688ce29239450a82b0d45b37",
        "datetime": 1785828600
      },
      {
        "headline": "Ordinary Income Trap: Why JEPI’s Monthly Distributions Are Quietly Gutting Your After-Tax Returns",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=52c441915f441f7a303c8f720f0bd165bc0fc0c4c4b973e58d040f513bde4baa",
        "datetime": 1785816927
      },
      {
        "headline": "Market Brief: Has The AI Washout Already Done Its Work?",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=edbe43d27b4b6903f0112fb9bf37c84bfe02d774b569776d431c277c21fe317d",
        "datetime": 1785816900
      },
      {
        "headline": "Warsh Wants The Federal Reserve To Rethink The Rules",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=8016649dc4c2d9a716d254080c22354b3eef57e339074d4e3814a869bcafa49c",
        "datetime": 1785813600
      },
      {
        "headline": "The Hidden Price of Monthly Income: DIVO’s Option Overlay Cost Investors Billions in Foregone Gains",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6e69f9f10bf960546db52e2b8ee22f9814ca97fec859e1cde05e02137747d029",
        "datetime": 1785813315
      }
    ],
    "_fetched_at": 1785844883.2671013,
    "_updated_label": "2026-08-04 21:01"
  },
  "ORCL": {
    "nextEarnings": {
      "date": "2026-09-07",
      "hour": "",
      "epsEstimate": 1.7745
    },
    "news": [
      {
        "headline": "1 S&P 500 Stock to Target This Week and 2 We Brush Off",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b94e79260fde426d724324e7b9b2c4b59cde7be9ccc1988172e7364875980bac",
        "datetime": 1785836002
      },
      {
        "headline": "Pimco Dictates Terms on Oracle Data Center Debt Deal",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=934e7f51d791aaf4cf5aae2a99f7ca0bc2d1100ec5ad2d1fc704763d6116c64c",
        "datetime": 1785823773
      },
      {
        "headline": "Minor Hotels Accelerates Global Digital Transformation with Oracle Cloud",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f90e1ea1ce808a2e3bbf82cf897d74330cc712b7e8c1635feed98c5b7c1d0129",
        "datetime": 1785805200
      },
      {
        "headline": "What Wall Street Pushed Microsoft To Explain",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ccc38fb40c7d5c21847da538b1b51db3178dbcb456f20051f81d1fb3ad24413f",
        "datetime": 1785799452
      },
      {
        "headline": "Larry Ellison Was Once the World’s Richest Person — Now Elon Musk Is Four Times Wealthier",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=81868eeb12ab4256748142f587053319e6848f65f045bd749f7c1a5b45fd7409",
        "datetime": 1785794424
      }
    ],
    "_fetched_at": 1785844883.2671013,
    "_updated_label": "2026-08-04 21:01"
  },
  "CRM": {
    "nextEarnings": {
      "date": "2026-08-26",
      "hour": "amc",
      "epsEstimate": 3.3057
    },
    "news": [
      {
        "headline": "Big AI Bets Divide Venture Capital, Leaving Smaller Funds Behind",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b1150053d85bd4e899199a98285ec38e7be48d2f782225562d3b3dd981a1bd56",
        "datetime": 1785816006
      },
      {
        "headline": "What Wall Street Pushed Microsoft To Explain",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ccc38fb40c7d5c21847da538b1b51db3178dbcb456f20051f81d1fb3ad24413f",
        "datetime": 1785799452
      },
      {
        "headline": "Top Tech Analyst Says Hyperscalers Are the Clear AI Winners, but Beaten-Down Software Offers Value",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e853b6fe149d1ae6d51368635d5f89b861b26d2c1be1d119c708a2e31e06f66e",
        "datetime": 1785791492
      },
      {
        "headline": "Top dow jones movers in Monday's session",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=c3effdf47636ff5cbe8c243812847c1cb7215361a84c36afbba1e09ca9287946",
        "datetime": 1785775204
      },
      {
        "headline": "Salesforce Remains Down But Turning Positive: 100%+ Returns Lie Ahead According to This Analyst",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=77232619acefa25e27cd8107e54f6cb51ce161301fc232b5971041a394d14606",
        "datetime": 1785773250
      }
    ],
    "_fetched_at": 1785844883.2671013,
    "_updated_label": "2026-08-04 21:01"
  },
  "PLTR": {
    "nextEarnings": {
      "date": "2026-11-02",
      "hour": "",
      "epsEstimate": 0.3782
    },
    "news": [
      {
        "headline": "S&P 500 Chases Record High as Tech Rebound Rages On After Palantir Boost",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1748ffd9ff62fe31e41a36ab4e2ee8c44837c0040a9bb0993b99822a54655892",
        "datetime": 1785833661
      },
      {
        "headline": "Nasdaq, S&P 500 Futures Climb As Wall Street Awaits AMD, SpaceX Earnings After Palantir Rally: Why SNAP, AMZN, SNDK, LCID, SLS, ASTS Are In Focus",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2918b20867c8bcdf13a895f9f6294d60fa7eeda66dede904d3c0fbd4b981bb3a",
        "datetime": 1785833297
      },
      {
        "headline": "Alex Karp Rips Frontier AI Labs for 'Marxist Overtones' After Palantir's Blowout Earnings— Says They Want to 'Colonize Your Enterprise'",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f905b458bff5b6373c4d739042a388b8f8adbf910ad3c462e1f30bf36b90e58b",
        "datetime": 1785832282
      },
      {
        "headline": "Dow Cracks 53,000 As Amazon Joins The $3T Club And Oil Does The Heavy Lifting",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=6aa225722f9d10b6934442e08d2764c7997e495035ea2c2d0447f896a15e8132",
        "datetime": 1785830181
      },
      {
        "headline": "Palantir: The U.S. Commercial Business Is About To Take The Lead",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=5810ef054f6baa6692cb1efcc57237f42e87b9e1c74f5eb9b707ab058ec994e8",
        "datetime": 1785829543
      }
    ],
    "_fetched_at": 1785844883.2671013,
    "_updated_label": "2026-08-04 21:01"
  },
  "QCOM": {
    "nextEarnings": {
      "date": "2026-11-03",
      "hour": "amc",
      "epsEstimate": 2.2987
    },
    "news": [
      {
        "headline": "SCHD’s 0.06% Fee Hides the Real Cost: How March Reconstitution Triggered $0.8241 Per Share in Surprise Distributions",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=78c0cfb18c708f197eca09b6ca6f75abf58b934ef787b7cb948986c1fbd52a43",
        "datetime": 1785815121
      },
      {
        "headline": "For Micron Stock, The Growth That Justifies The Price Has To Arrive",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a67a01c317c583670d27ce4941b2c8c2f1530d4d8f7c0fecb1dba9f22391887c",
        "datetime": 1785798038
      },
      {
        "headline": "Astera Labs, GlobalFoundries Positioned for Long-term AI Growth, Morgan Stanley Says",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=048b9b7d85fe791731b9fab00e98768138f81c69bb9d7fe731624bee41449457",
        "datetime": 1785770755
      },
      {
        "headline": "Semiconductor stocks pare losses amid fears of increased competition from China",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e8df74458477485a2d71a5c0f35701c5f54ec1acccb92e14b022516457ecab4a",
        "datetime": 1785764378
      },
      {
        "headline": "Semiconductor stocks sink over fears of increased competition from China",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f5dd2dbd1ac39b7e53b69ffbe19f7d8ab33bf144d394494111f30687ae966b8b",
        "datetime": 1785764378
      }
    ],
    "_fetched_at": 1785844883.2671013,
    "_updated_label": "2026-08-04 21:02"
  },
  "ARM": {
    "nextEarnings": {
      "date": "2026-11-04",
      "hour": "",
      "epsEstimate": 0.4688
    },
    "news": [
      {
        "headline": "Why Arm Holdings Stock Lost 34% in July",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=24a1504d7befdc2ddc02e2da4e71a563448f859b6a7ff057f74787d6fcd2e1d3",
        "datetime": 1785812700
      },
      {
        "headline": "Arm Quietly Builds Its Next Big AI Advantage",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=02b426d6f068b66b97c3c726c0cc7c9ac3354cec5607e9c442348328e831e9fc",
        "datetime": 1785779396
      },
      {
        "headline": "ARM Stock: A $1 Billion AGI CPU Opportunity Could End Up Being Much Bigger Than Wall Street Expects",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e0918037802726c2e9692370fdd75a2b48cd1c60fefa3eb30b569fbb6477da95",
        "datetime": 1785769311
      },
      {
        "headline": "5 Stocks In The Spotlight From Wall Street's Most Accurate Analysts Last Month",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=bcded9f5793b4854d7501dacbde884033ec35f7c28f1852c9975588070ffbaad",
        "datetime": 1785735924
      },
      {
        "headline": "Is Arm Holdings Stock a Buy on the Bullish CPU Outlook?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=adf787ae50ece003a442a2b0f3d3f0fde7602dd32a541649ea88ad0d1148b3d1",
        "datetime": 1785699300
      }
    ],
    "_fetched_at": 1785844883.2671013,
    "_updated_label": "2026-08-04 21:02"
  },
  "MRVL": {
    "nextEarnings": {
      "date": "2026-08-20",
      "hour": "",
      "epsEstimate": 0.939
    },
    "news": [
      {
        "headline": "Top Research Reports for Amazon, Marvell & Starbucks",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3f231fb0754dcef3f53539197539aba7ecf9fd6ca6848ff7424b606918926ce7",
        "datetime": 1785790260
      },
      {
        "headline": "Photonics: The Next Big AI Investment Opportunity?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=48d74275b07e47923ece6f8bc1acab5e5942abfe2adba67f452d4cf96c8f7d18",
        "datetime": 1785789840
      },
      {
        "headline": "Marvell Technology, Inc. Announces Conference Call to Review Second Quarter of Fiscal Year 2027 Financial Results; Announces Investor Day on October 6, 2026",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d6453c286297665bb6a03294b702a60760fdc4c0737a05c389a7ef21bef74977",
        "datetime": 1785787500
      },
      {
        "headline": "Marvell (MRVL) Is Putting $250 Million Into India To Grow AI Chip R and D",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9124d3ad0cd6aff883f67109e85bc9ceb845825e3c1f778019f646239af819fa",
        "datetime": 1785776955
      },
      {
        "headline": "Marvell's Next Move Is To $100",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=59bad16167aac39d3f905f310b6f94e18e4c546adaadebb706833090b15afdb8",
        "datetime": 1785775321
      }
    ],
    "_fetched_at": 1785844883.2671013,
    "_updated_label": "2026-08-04 21:02"
  },
  "ASML": {
    "nextEarnings": {
      "date": "2026-10-14",
      "hour": "bmo",
      "epsEstimate": 10.1558
    },
    "news": [
      {
        "headline": "Semiconductor stocks sink over fears of increased competition from China",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f5dd2dbd1ac39b7e53b69ffbe19f7d8ab33bf144d394494111f30687ae966b8b",
        "datetime": 1785764378
      },
      {
        "headline": "10 Information Technology Stocks With Whale Alerts In Today’s Session",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=aa7e03b0623a0e400f10bc29f4b43ee55fe5fed444722cf40ea4a95568336e18",
        "datetime": 1785764115
      },
      {
        "headline": "ASML: The Peak Is In",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=ab0650133f1ead7df515697bd9b9249cdd4e5b0af8685c3777bf969b4035aab1",
        "datetime": 1785759558
      },
      {
        "headline": "ASML reports transactions under its current share buyback program",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a4f6528546918cad18f36d5cf8a3635106e2101658fe173772dad7898ebea403",
        "datetime": 1785758400
      },
      {
        "headline": "Eaton: Rotating Within The AI Infrastructure Play",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=4e54f940b410b040ee0fa30e46be8a40a6bc0563322bf3da615a4a039032d7d7",
        "datetime": 1785748552
      }
    ],
    "_fetched_at": 1785844883.2671013,
    "_updated_label": "2026-08-04 21:02"
  },
  "LRCX": {
    "nextEarnings": {
      "date": "2026-10-20",
      "hour": "",
      "epsEstimate": 2.1446
    },
    "news": [
      {
        "headline": "3 S&P 500 Stocks Worth Your Attention",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0251d12235e341bf9a4af6bd67d72dc1a10ab946181617bab1b43ced21139141",
        "datetime": 1785786082
      },
      {
        "headline": "KLA Corporation Cratered 40% Over The Last 30 Days: The Next 12 Months Will Bring 75% Returns According to One Wall Street Pro",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e5cae5c691c9a67cde4961c43189d47c97a42ec55eeab41b9f6e39204b304dec",
        "datetime": 1785785646
      },
      {
        "headline": "Best Momentum Stocks to Buy for August 3rd",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=48b6b58692476ee278405666e1b0ff46ad90fd535880a9816cadbf3311940791",
        "datetime": 1785765600
      },
      {
        "headline": "Semiconductor stocks sink over fears of increased competition from China",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f5dd2dbd1ac39b7e53b69ffbe19f7d8ab33bf144d394494111f30687ae966b8b",
        "datetime": 1785764378
      },
      {
        "headline": "Semiconductor ETF SOXX’s Worst Month Since 2002: 'A Significant Discount,' Ed Yardeni Says",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=adeef272a4572b60de9796478e0c855429539583bc46e9b24e6cc669be7ad2cd",
        "datetime": 1785760153
      }
    ],
    "_fetched_at": 1785844883.2671013,
    "_updated_label": "2026-08-04 21:02"
  },
  "KLAC": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "",
      "epsEstimate": 1.1971
    },
    "news": [
      {
        "headline": "KLA Corporation Cratered 40% Over The Last 30 Days: The Next 12 Months Will Bring 75% Returns According to One Wall Street Pro",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e5cae5c691c9a67cde4961c43189d47c97a42ec55eeab41b9f6e39204b304dec",
        "datetime": 1785785646
      },
      {
        "headline": "Hyperscaler Capex Tops $1.2 Trillion: These Nine Stocks Are Cashing In, BofA Says",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=1a1b02a171e0eb173ae17d5f1747626a4e6cea85a9a4c31568ec580cfd67214e",
        "datetime": 1785771114
      },
      {
        "headline": "Semiconductor ETF SOXX’s Worst Month Since 2002: 'A Significant Discount,' Ed Yardeni Says",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=adeef272a4572b60de9796478e0c855429539583bc46e9b24e6cc669be7ad2cd",
        "datetime": 1785760153
      },
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
      }
    ],
    "_fetched_at": 1785844883.2671013,
    "_updated_label": "2026-08-04 21:02"
  },
  "SNDK": {
    "nextEarnings": {
      "date": "2026-08-05",
      "hour": "amc",
      "epsEstimate": 35.1395
    },
    "news": [
      {
        "headline": "Why Sandisk Stock Tumbled 47% in July",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4e19904cfb8490e8058a70bb1615f6a4e86d5edad6047c25177f8680525c9519",
        "datetime": 1785806520
      },
      {
        "headline": "Sandisk (SNDK) And SK Hynix Release Open HBF Standard For AI Memory",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3952b5a08e66451cb7757af806c36dea8d5f8201d658e12368033cfc7c72b4b4",
        "datetime": 1785806005
      },
      {
        "headline": "SK hynix Unveils First HBF Standard Specifications with Sandisk, Presenting AI Memory Solutions at 'FMS 2026'",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b446d4a0294d93c626742f5bcf52d95c9e009863165c612e65e651ffc6e8a3ee",
        "datetime": 1785804900
      },
      {
        "headline": "Sandisk and SK hynix Advance Global Standardization of High Bandwidth Flash with Release of First OCP Technical Specification",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a7645a35b2c669b387ffa819333768817d91452832ea991ffb1ab70a0b7a40bf",
        "datetime": 1785800040
      },
      {
        "headline": "Dow Jones Futures: Trump Sparks Stock Market Rally; Palantir Soars On Earnings With SpaceX On Deck",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4d732ad78ec7a36c9165326a53a10ccd6f06dc2a9cbda20943f338b1322da396",
        "datetime": 1785791407
      }
    ],
    "_fetched_at": 1785844883.2671013,
    "_updated_label": "2026-08-04 21:02"
  },
  "WDC": {
    "nextEarnings": {
      "date": "2026-08-05",
      "hour": "amc",
      "epsEstimate": 3.3281
    },
    "news": [
      {
        "headline": "For Micron Stock, The Growth That Justifies The Price Has To Arrive",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a67a01c317c583670d27ce4941b2c8c2f1530d4d8f7c0fecb1dba9f22391887c",
        "datetime": 1785798038
      },
      {
        "headline": "Own The AI Boom? NVIDIA's Story vs. Micron's Contracts",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0a95889d8262d6f2a3c5057ae191a4f3fb6616710c8efaa58a1ebb573335eead",
        "datetime": 1785794771
      },
      {
        "headline": "Amazon, Apple, Boeing, Micron, Bristol Myers, GameStop, SpaceX, and More Stocks That Explain Today’s Market",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ab20f4d034e6ad3ae5839919a1f51203b54604f3fd7be93648ca2f25746f1111",
        "datetime": 1785790020
      },
      {
        "headline": "Amazon, Apple, Micron, Bristol Myers, GameStop, Corning, SpaceX, and More Stocks That Explain Today’s Market",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a9dd6451698f698fe11dfc6686d34f30874ccb8a8b263ec1ccbb6c7a8c580d0d",
        "datetime": 1785775200
      },
      {
        "headline": "Explore the top gainers and losers within the S&P500 index in today's session.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=1aad85f803d759737ccd26cd76fff98c0894c13234b495165da8769f5eab5479",
        "datetime": 1785774901
      }
    ],
    "_fetched_at": 1785844883.2671013,
    "_updated_label": "2026-08-04 21:02"
  }
};
