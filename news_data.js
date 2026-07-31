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
        "headline": "Warren Buffett's 1 Recommendation for Most Investors Turned $10,000 Into More Than $40,000 in 10 Years",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7bed5aa26e7e90811309f8fae06bb11310053a711556ae06b5b3e5ec6c99c0b7",
        "datetime": 1785475200
      },
      {
        "headline": "Billionaire Bill Ackman Called SpaceX's Starlink a \"Near Monopoly\" in Global Satellite Internet, But Said He Won't Buy the Stock.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=08bd6309e9ab2c06d082cd7d6eaaca82d3203d6492796fb9145950c1d97bc0d4",
        "datetime": 1785473400
      },
      {
        "headline": "Jensen Huang Says Memory Is Now AI's Biggest Bottleneck. Here's What That Means for Nvidia.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3b0aaf9d36e07016147fda2cd06eae0c32c90c0953f281a15efdac766fdd8156",
        "datetime": 1785471600
      },
      {
        "headline": "Trump Administration Bans New Chinese AI Robots and Power Inverters Over National Security Fears: 'These Devices Could Create Supply Chain Vulnerabilities'",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cfbe66a83cd1b4a6a1a6735133f8190460f2cef0da7d49c22f8c1e46ff184d20",
        "datetime": 1785468625
      },
      {
        "headline": "3 Reasons Alphabet Is the Most Underrated \"Magnificent Seven\" Stock",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d215f9ec461938b2646f5a825714b50531aa5e69c6d23791df4f5369d027acb7",
        "datetime": 1785468000
      }
    ],
    "_fetched_at": 1785481017.3313787,
    "_updated_label": "2026-07-31 15:57"
  },
  "AAPL": {
    "nextEarnings": {
      "date": "2026-10-28",
      "hour": "amc",
      "epsEstimate": 2.0468
    },
    "news": [
      {
        "headline": "Apple shares fall despite record revenue as outlook disappoints",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=88b313e797c1fad2b940fd57b33fcae8ebd2fd648b9a3a2d8a249f55c2ccd553",
        "datetime": 1785476411
      },
      {
        "headline": "Apple Inc (AAPL) (Q3 2026) Earnings Call Highlights: Record Revenue Amid Supply Constraints and ...",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=376b156d344584d483f87e47075e53db73c3086afb9e45303ac5145d0a124e28",
        "datetime": 1785474131
      },
      {
        "headline": "Amazon Stock Pops 9.5% After-Hours as AWS Fuels Earnings Beat: Jim Cramer Calls it 'Astonishing'",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c153333c213bd0bbf822b05670157e1c6f6a327cb75bf4feb6f57a07e998acaf",
        "datetime": 1785465160
      },
      {
        "headline": "History Says That Nvidia Is an Unbelievable Bargain Right Now",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7453b49fc74aae2b8d2c0c995b522e38638985a9028f29fbcbf85bf679380efd",
        "datetime": 1785464400
      },
      {
        "headline": "AAPL Stock Slides 6% On Forecast Miss: Retail Mood Turns Dim But Traders Urge A Closer Look",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=419ef1025a468273139f9834d13cd79dd470821668f2625df78f3abc02a5a5e0",
        "datetime": 1785464023
      }
    ],
    "_fetched_at": 1785481017.3313787,
    "_updated_label": "2026-07-31 15:57"
  },
  "GOOGL": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "amc",
      "epsEstimate": 3.0988
    },
    "news": [
      {
        "headline": "AMZN Stock Rises After Q2, AWS Beat: CEO Says Even Higher CapEx Won’t Be Enough To Meet Soaring Cloud Demand",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e2fe3b2767a275631e8bd05f4f46f21d928ac274f189e29cd7bd4282bf4a3886",
        "datetime": 1785472990
      },
      {
        "headline": "Reddit (RDDT) Beats Q2 Estimates As AI Advertising Grows And Search Risks Emerge",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=79ffec5089b155f090e4fc80682dab7b209159862a33227d1943f8e19d3a029d",
        "datetime": 1785472235
      },
      {
        "headline": "3 Reasons Alphabet Is the Most Underrated \"Magnificent Seven\" Stock",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d215f9ec461938b2646f5a825714b50531aa5e69c6d23791df4f5369d027acb7",
        "datetime": 1785468000
      },
      {
        "headline": "Everyone Wants to Build the Best AI Model. Amazon Wants Something More Valuable.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9ee1769f7520ef116150e9e2ce4af3f915c48cd8365f421ffe6b70a8ebbfac19",
        "datetime": 1785454500
      },
      {
        "headline": "S&P 500, Nasdaq End Best Day In A Month On Support From Microsoft Gains, AI Stocks  — ORCL, GOOGL, MSFT, BE, TSLA Stock In Focus",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a84c2dc6fba19f0398e704ebca872d7715e76d02e02007dab3d62c04e361d7a6",
        "datetime": 1785448680
      }
    ],
    "_fetched_at": 1785481017.3313787,
    "_updated_label": "2026-07-31 15:57"
  },
  "MSFT": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "",
      "epsEstimate": 4.7278
    },
    "news": [
      {
        "headline": "Wall Street splits on Big Tech's AI bills",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=575aa98222cf2c9033a0284da43101c520b05b1897f103d893d5f6981875363b",
        "datetime": 1785475817
      },
      {
        "headline": "Sony hikes profit forecast on gaming strength",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b9cb4e1de61243b60f445bbd29c5c5bcf5d222a3a512cacfd8ab269c6174cfa7",
        "datetime": 1785467590
      },
      {
        "headline": "Amazon Stock Pops 9.5% After-Hours as AWS Fuels Earnings Beat: Jim Cramer Calls it 'Astonishing'",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c153333c213bd0bbf822b05670157e1c6f6a327cb75bf4feb6f57a07e998acaf",
        "datetime": 1785465160
      },
      {
        "headline": "IREN Ltd. (IREN) is Gaining Momentum. This Tech Giant May Be Playing a Big Role",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=37738b0aef570df4025afd0be4b6fdc89c844faf0e385070ddb4904ad956b379",
        "datetime": 1785461807
      },
      {
        "headline": "Dow, S&P 500, Nasdaq Futures Extend Rally As Big Tech Earnings Revive AI Trade: AMZN, AAPL, NBIS, RDDT In Focus",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c39f4b6ad143c60b07cfdf90ae5395671b270bd14897674902b906d72622ea3f",
        "datetime": 1785461745
      }
    ],
    "_fetched_at": 1785481017.3313787,
    "_updated_label": "2026-07-31 15:57"
  },
  "AMZN": {
    "nextEarnings": {
      "date": "2026-10-28",
      "hour": "amc",
      "epsEstimate": 1.9445
    },
    "news": [
      {
        "headline": "Amazon.com Inc (AMZN) (Q2 2026) Earnings Call Highlights: Record Revenue and AWS Acceleration ...",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c53d0607ab7c79c70d198498570d3e79119505ad3d893771ac71ee23d88af94e",
        "datetime": 1785474144
      },
      {
        "headline": "AMZN Stock Rises After Q2, AWS Beat: CEO Says Even Higher CapEx Won’t Be Enough To Meet Soaring Cloud Demand",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e2fe3b2767a275631e8bd05f4f46f21d928ac274f189e29cd7bd4282bf4a3886",
        "datetime": 1785472990
      },
      {
        "headline": "The Bull Case For Amazon.com (AMZN) Could Change Following Surging AWS Growth And Record AI Capex - Learn Why",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=484c92f37901111a83746e202b8dbd7f89e9a549c812987afb521aa802868545",
        "datetime": 1785472252
      },
      {
        "headline": "Amazon Stock Pops 9.5% After-Hours as AWS Fuels Earnings Beat: Jim Cramer Calls it 'Astonishing'",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c153333c213bd0bbf822b05670157e1c6f6a327cb75bf4feb6f57a07e998acaf",
        "datetime": 1785465160
      },
      {
        "headline": "Amazon Advertising Up 26% In Q2, Profits Soar To $62.6B",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d6b7fd7d21ab5f55de3ec0303f4c66895ba281bf32daa59203f7c293f653baf0",
        "datetime": 1785464463
      }
    ],
    "_fetched_at": 1785481017.3313787,
    "_updated_label": "2026-07-31 15:57"
  },
  "TSM": {
    "nextEarnings": {
      "date": "2026-10-14",
      "hour": "amc",
      "epsEstimate": 28.6598
    },
    "news": [
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
      },
      {
        "headline": "Microsoft's AI Pivot Could Be Bigger Win for AI Infrastructure ETFs Than OpenAI Bets",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=e662dbe0eb6681be5f96c7f3e541bbd12fd115aeae314cfe2a5fda80fc26c788",
        "datetime": 1785427378
      },
      {
        "headline": "BorZen Tien's Recent Buy: Acquires $73K In Taiwan Semiconductor Stock",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=018c48edc6866de8a9432cb1519f2e767fd820139c4d77114a4cbc91a50e61ed",
        "datetime": 1785409281
      },
      {
        "headline": "'TSMC Develops AI Chip Packaging Tech to Counter Intel' - The Information",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=e8486b2a3b0326df9f49cb8a6a1d6322e7bd34ee2ed0b2512e09da4621f90385",
        "datetime": 1785402434
      }
    ],
    "_fetched_at": 1785481017.3313787,
    "_updated_label": "2026-07-31 15:57"
  },
  "AVGO": {
    "nextEarnings": {
      "date": "2026-09-02",
      "hour": "amc",
      "epsEstimate": 3.3012
    },
    "news": [
      {
        "headline": "Should Samsung’s US$200 Billion AI Chip Pact With Broadcom Reshape Action From AVGO Investors?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=20c8d3fb8817132f6c9cb0f05c6ecfc27afd73da3e14edb272b18f9a046349a6",
        "datetime": 1785449340
      },
      {
        "headline": "Apple commits more than $30 billion to US manufacturing",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=604778f81cf6ad34df0e0e2ea8418c4c27e7edb43d0f197d9655b777cf3d7e1d",
        "datetime": 1785449280
      },
      {
        "headline": "Apple Tops Third-Quarter Estimates; IPad, Services Revenue Falls Short",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=07b7bd946f0a91f5db777650e5e6aba50b6ecff00ed08644bf115d3e51668f40",
        "datetime": 1785446382
      },
      {
        "headline": "The Growth That Has To Land For Advanced Micro Devices Stock to Make Sense",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3dd50fbaf09869c639cde3a89d4be447461cd9eaa2092ab633d7ca086e21b54f",
        "datetime": 1785444433
      },
      {
        "headline": "NVDA Stock: Where Compounding Could Take The Price",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c3dee3a0430c06119243322b561ab7309b8d4f5104fbf29457fb0d34cb6b71c0",
        "datetime": 1785441835
      }
    ],
    "_fetched_at": 1785481017.3313787,
    "_updated_label": "2026-07-31 15:57"
  },
  "META": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "amc",
      "epsEstimate": 7.1724
    },
    "news": [
      {
        "headline": "Wall Street splits on Big Tech's AI bills",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=575aa98222cf2c9033a0284da43101c520b05b1897f103d893d5f6981875363b",
        "datetime": 1785475817
      },
      {
        "headline": "Half-Year Report on SES’s Liquidity Contract",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2d586f935f487f627f8b5bb44fcac8888b319bb3cf28d16faf73aa1821dbc9bb",
        "datetime": 1785475800
      },
      {
        "headline": "Zuckerberg is betting big on a superintelligence future",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=649ab6227f7a5d409978b1f3f6be8b4781fe8e924e302385ee612834f8c5cb6c",
        "datetime": 1785468780
      },
      {
        "headline": "Meta Platforms, Inc. 2026 Q2 - Results - Earnings Call Presentation",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=94fc79ed60ba7e3cd946a9cdb893207e960c7e5e1606b9b6a0f043114e596161",
        "datetime": 1785465417
      },
      {
        "headline": "Is Meta Platforms (META) Still Undervalued Despite Heavy AI Spending?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=dda2e4062da5511d2a9ef2ad94db416976285a28ec2eb396210c60eff01f9d9f",
        "datetime": 1785459998
      }
    ],
    "_fetched_at": 1785481017.3313787,
    "_updated_label": "2026-07-31 15:57"
  },
  "TSLA": {
    "nextEarnings": {
      "date": "2026-10-20",
      "hour": "amc",
      "epsEstimate": 0.4684
    },
    "news": [
      {
        "headline": "TSLA Stock Jumps Overnight: Musk Calls Tesla China-SpaceX Merger Report ‘Absurdly Fake News’ — Says It ‘Never Even Come Up In A Discussion’",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ae48258e28af3e13916c9d386e37def73d53d826b86286d0d41674dde6c3bf4a",
        "datetime": 1785475476
      },
      {
        "headline": "TSLA Stock Jumps Overnight As Tesla Reportedly Readies China Split For SpaceX Merger — Retail Floats $450 Buyout Scenario",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4f66df01eda66e14e82911eb5a4c438b8810a017f2c3fba46a1a48e38dd47267",
        "datetime": 1785470933
      },
      {
        "headline": "Factbox-Tesla's China operations, the EV maker's global production powerhouse",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b563eb0977590aba44565c84bcbd9fa14da6b900e37bdcb9426e0571e71c9f4c",
        "datetime": 1785469983
      },
      {
        "headline": "Elon Musk Mulls Selling Tesla's China Unit To Smooth SpaceX Merger: WSJ",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c2617b04b68c60aab17cebbfd00927cc527f926b8d2999458c7b4d458b7ed875",
        "datetime": 1785464212
      },
      {
        "headline": "Tesla weighs sale of China business to pave way for potential SpaceX merger, WSJ reports",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1823bd423d95f0c240c22ec497f7780eee3606069698414f142327c68248ae6b",
        "datetime": 1785460348
      }
    ],
    "_fetched_at": 1785481017.3313787,
    "_updated_label": "2026-07-31 15:57"
  },
  "MU": {
    "nextEarnings": {
      "date": "2026-09-21",
      "hour": "amc",
      "epsEstimate": 32.2476
    },
    "news": [
      {
        "headline": "MU, SNDK, WDC, SKHY Stock Jump After-Hours — Memory Chipmakers Soar After Amazon, Apple Management Flag Soaring Costs, Supply Crunch",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e37f71abb0c1632b6bb0754803b5224b22955b8359b5579cfadd4282f085099e",
        "datetime": 1785456575
      },
      {
        "headline": "AI Chip Selloff Creates Buying Opportunity in Nvidia and Micron Stock",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7a55d115c89baed569de5e80ab818226a0c9062beb2bc73aa6a65e3033f85a66",
        "datetime": 1785450540
      },
      {
        "headline": "Micron Technology (MU) Stock Gets Fair Value Bump As AI Demand And Contracts Draw Praise",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fa016b0934c70d86225adad83357ffdea69ad05ef1e72aca4cc18239e84284b7",
        "datetime": 1785449428
      },
      {
        "headline": "Memory Headwinds Aren't Going Away, Apple Says; Micron Stock Heads Higher",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=035549a0f1b022166d3d3f9dbe8dfa074e6e6ca7eb458231dac0ea2b11fdae7e",
        "datetime": 1785447809
      },
      {
        "headline": "Michael Burry Adds To His NVDA And MU Shorts — And Makes More Moves In These Stocks",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1ee633f74ad4b68b1cb955dffe955dc0147acc8b10839013cd625c39b602e080",
        "datetime": 1785447536
      }
    ],
    "_fetched_at": 1785481017.3313787,
    "_updated_label": "2026-07-31 15:58"
  },
  "AMD": {
    "nextEarnings": {
      "date": "2026-08-04",
      "hour": "amc",
      "epsEstimate": 1.6291
    },
    "news": [
      {
        "headline": "Is AMD Stock Heading to $600 per Share?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=bd1bb81fae300b56bb8cdea33d8874aac4157e94630498cd378cf7dc1b3e1657",
        "datetime": 1785455400
      },
      {
        "headline": "The Growth That Has To Land For Advanced Micro Devices Stock to Make Sense",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3dd50fbaf09869c639cde3a89d4be447461cd9eaa2092ab633d7ca086e21b54f",
        "datetime": 1785444433
      },
      {
        "headline": "Update: Nasdaq Composite Snaps 6-Day Slump as Microsoft Soars",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c1463bc96cff6981b9ddd80bc962c19b9b1fe7bdeb1baf57245f9509683adcc0",
        "datetime": 1785444256
      },
      {
        "headline": "AMD Stock Gets Powerful Vote of Confidence",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d3177bd34030f4ebb20529ce672e97d7fdcf2514ab59cb94adacddcab6d62701",
        "datetime": 1785443312
      },
      {
        "headline": "US Equity Markets End Higher on Microsoft's Cloud Gains, Semiconductor Rebound",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=86fc54330a2ca5394d51a7325fae278c4faa3cfa333c16c6b4b601df4e36f3e6",
        "datetime": 1785442624
      }
    ],
    "_fetched_at": 1785481017.3313787,
    "_updated_label": "2026-07-31 15:57"
  },
  "INTC": {
    "nextEarnings": {
      "date": "2026-10-21",
      "hour": "amc",
      "epsEstimate": 0.3736
    },
    "news": [
      {
        "headline": "Astera Labs vs. Intel: Which Technology Stock Is a Better Buy in 2026?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e7d439594e118272a9d04ba50da72eb717cbdf024bb7e6b09da37aad47c90e4b",
        "datetime": 1785471901
      },
      {
        "headline": "Intel (INTC) Just Expanded Its Foundry Tool Kit For AI Chip Customers",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4a26fbd5c40295fceb6ae5e3347d62aa6a878907df7b68d39ad2a165f1743380",
        "datetime": 1785449461
      },
      {
        "headline": "Apple Tops Third-Quarter Estimates; IPad, Services Revenue Falls Short",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=07b7bd946f0a91f5db777650e5e6aba50b6ecff00ed08644bf115d3e51668f40",
        "datetime": 1785446382
      },
      {
        "headline": "The Growth That Has To Land For Advanced Micro Devices Stock to Make Sense",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3dd50fbaf09869c639cde3a89d4be447461cd9eaa2092ab633d7ca086e21b54f",
        "datetime": 1785444433
      },
      {
        "headline": "Update: Nasdaq Composite Snaps 6-Day Slump as Microsoft Soars",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c1463bc96cff6981b9ddd80bc962c19b9b1fe7bdeb1baf57245f9509683adcc0",
        "datetime": 1785444256
      }
    ],
    "_fetched_at": 1785481017.3313787,
    "_updated_label": "2026-07-31 15:57"
  },
  "AMAT": {
    "nextEarnings": {
      "date": "2026-08-13",
      "hour": "amc",
      "epsEstimate": 3.462
    },
    "news": [
      {
        "headline": "Top Stock Reports for Applied Materials, Sandisk & Eaton",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c89706d6f57910ef1d1f9d11eb9cb74a299d07f1b503fff5682f75bbcf17b779",
        "datetime": 1785445560
      },
      {
        "headline": "Should You Worry? This AI Cap-Ex Boom is Bigger than 1999.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=33aff6153c2673e6326c5cd53c62f9ffbf9783f88c38235bd8c838c0e60dd67a",
        "datetime": 1785443580
      },
      {
        "headline": "These S&P500 stocks are moving in today's session",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=af68448e11fcc2bc9a9713886285322d32eabc6249bc9f6a49b64ea4adfdbcdf",
        "datetime": 1785438301
      },
      {
        "headline": "QTUM: A Hold For The Semis Basket In A Quantum Costume",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=4d5e2942f050a7882de9572914a18a2b32bf303cdbba5ca6525f4c263c07724d",
        "datetime": 1785434294
      },
      {
        "headline": "KLA Rides on Strong Advanced Packaging Growth: More Upside Ahead?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=889984031ddc6c15670b26dc3e199ab5a7c98211bc71e2277acb3d19ccd98966",
        "datetime": 1785434220
      }
    ],
    "_fetched_at": 1785481017.3313787,
    "_updated_label": "2026-07-31 15:58"
  },
  "QQQ": {
    "nextEarnings": null,
    "news": [
      {
        "headline": "U.S. Flash PMI Shows Faster Growth, But Price Pressures And Supply Delays Intensify",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=83a7418170553b02ce050823fc168a884278ca0f4fc4f8476a7a05b4c892f7ec",
        "datetime": 1785459600
      },
      {
        "headline": "SCOTUS Tariff Ruling And Iran War Grind Down GDP And Increase Risk",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=df2756db2d61668d42cc6a87b3cec05b40dcb597add776fefbabc67e677662b5",
        "datetime": 1785437581
      },
      {
        "headline": "Fed Meeting Recap: Pay Attention To Actions, Not Words",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=49fe7ee956d4050650b5e66c55db93c253db03d6b5c79bd4c0562d6bf748693e",
        "datetime": 1785433571
      },
      {
        "headline": "Wall Street Isn't Buying Kevin Warsh's Fed",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=c7d086cf49fff25580fe810d3267ed8d1ea510db6b3c9096eb1242904b42adab",
        "datetime": 1785430845
      },
      {
        "headline": "Core PCE Inflation At 3.3% In June, Edging Down From May",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=b093aff8ec1bcc463228f96fbbc5455ad30620b31db656487bcf1e4a06af83b8",
        "datetime": 1785429900
      }
    ],
    "_fetched_at": 1785481017.3313787,
    "_updated_label": "2026-07-31 15:56"
  },
  "SPY": {
    "nextEarnings": null,
    "news": [
      {
        "headline": "How Much RTX Are You Quietly Betting On?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ecf3c3bc94940e82c524b56d890174f2060cac09d9e5995b392dee4895a7f2bb",
        "datetime": 1785460890
      },
      {
        "headline": "U.S. Flash PMI Shows Faster Growth, But Price Pressures And Supply Delays Intensify",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=83a7418170553b02ce050823fc168a884278ca0f4fc4f8476a7a05b4c892f7ec",
        "datetime": 1785459600
      },
      {
        "headline": "Is This XLK Tech Dip A Gift?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fa95199afa3a9359a03f426676d6564ed8ac81becd007fe98f7d3959c4a4dd8f",
        "datetime": 1785458920
      },
      {
        "headline": "Passive In Name Only: The Active Bet Within Your Equity Index",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=6e0f0a03126c91fc51f332ac65925deaf794996e9fcdf77c89ed33b3072ca49a",
        "datetime": 1785458700
      },
      {
        "headline": "S&P 500, Nasdaq End Best Day In A Month On Support From Microsoft Gains, AI Stocks  — ORCL, GOOGL, MSFT, BE, TSLA Stock In Focus",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a84c2dc6fba19f0398e704ebca872d7715e76d02e02007dab3d62c04e361d7a6",
        "datetime": 1785448680
      }
    ],
    "_fetched_at": 1785481017.3313787,
    "_updated_label": "2026-07-31 15:57"
  },
  "ORCL": {
    "nextEarnings": {
      "date": "2026-09-07",
      "hour": "",
      "epsEstimate": 1.7745
    },
    "news": [
      {
        "headline": "CRM Upgraded Its Profit Engine. Quietly",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=035f8074ce5cab81939b9e22931d7964dd08114ae95f9dc290273b8aee2e1f16",
        "datetime": 1785456216
      },
      {
        "headline": "AI Chip Selloff Creates Buying Opportunity in Nvidia and Micron Stock",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7a55d115c89baed569de5e80ab818226a0c9062beb2bc73aa6a65e3033f85a66",
        "datetime": 1785450540
      },
      {
        "headline": "S&P 500, Nasdaq End Best Day In A Month On Support From Microsoft Gains, AI Stocks  — ORCL, GOOGL, MSFT, BE, TSLA Stock In Focus",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a84c2dc6fba19f0398e704ebca872d7715e76d02e02007dab3d62c04e361d7a6",
        "datetime": 1785448680
      },
      {
        "headline": "How To Bank 13% On IBM Stock Before Buying A Single Share",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f69af43aa8328954175ea93f99a6d5c1c7f9aca5e6266add55315aa57c7caeca",
        "datetime": 1785445320
      },
      {
        "headline": "Rimini Street Launches Rimini Govern™ for AI to Deliver Comprehensive AI Agent Governance, Security & Interoperability as a Service",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5c83858738970ac4c44345bf1001e2444fe1e1ccfcd93da8d31a57ff1f2386d6",
        "datetime": 1785441660
      }
    ],
    "_fetched_at": 1785481017.3313787,
    "_updated_label": "2026-07-31 15:57"
  },
  "CRM": {
    "nextEarnings": {
      "date": "2026-08-26",
      "hour": "amc",
      "epsEstimate": 3.3057
    },
    "news": [
      {
        "headline": "CRM Upgraded Its Profit Engine. Quietly",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=035f8074ce5cab81939b9e22931d7964dd08114ae95f9dc290273b8aee2e1f16",
        "datetime": 1785456216
      },
      {
        "headline": "Salesforce (CRM) Stock Declines While Market Improves: Some Information for Investors",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a783631e1fb230f76d4303d798bb5bf442f2b81181b6363751d203ded57e5100",
        "datetime": 1785447904
      },
      {
        "headline": "Explore the top gainers and losers within the dow jones index in today's session.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=bc6262a24c90ed0884245f425e6a54f3ade82a786763155f56cac145e7adfc5d",
        "datetime": 1785438605
      },
      {
        "headline": "Meet the Spectacular ETF With Big Positions in Stocks Like Palantir, Microsoft, and Salesforce. It Could be a Brilliant Buy as the AI Trade Unwinds.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=693ab1b4b71b7e35daa491c383399d06c6962adee4727e678fd783e565ad6d90",
        "datetime": 1785433380
      },
      {
        "headline": "Adobe Stock Trades Below The Market On Earnings While Its Growth Engine Is Being Rebuilt",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9a2749ecb125dd33ee394bd0b9919f303660b486945ab262db97ba160f035c2b",
        "datetime": 1785432726
      }
    ],
    "_fetched_at": 1785481017.3313787,
    "_updated_label": "2026-07-31 15:57"
  },
  "PLTR": {
    "nextEarnings": {
      "date": "2026-08-03",
      "hour": "amc",
      "epsEstimate": 0.3544
    },
    "news": [
      {
        "headline": "Analyst compares SpaceX, Palantir to Bitcoin",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=31cddc4daa0659508000d79453163d0245f15154c52ef922ceddb1555fdb869a",
        "datetime": 1785448800
      },
      {
        "headline": "Michael Burry Adds To His NVDA And MU Shorts — And Makes More Moves In These Stocks",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1ee633f74ad4b68b1cb955dffe955dc0147acc8b10839013cd625c39b602e080",
        "datetime": 1785447536
      },
      {
        "headline": "Palantir Holds the Edge Ahead of Earnings",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=bb2b24e61b6c4863acef46b444666b19b7801c776b5b45293d45bc1cf4e61e3d",
        "datetime": 1785441801
      },
      {
        "headline": "As Sam Altman Celebrates the Singularity, Palantir CEO Alex Karp Warns: ‘There Are Dangers… We Are Going to End Up Having to Regulate AI’",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=abcd616f71efe6ea3a48e571a676bf28bfd03b7b0e018d7a1869326eca1d9f8b",
        "datetime": 1785438845
      },
      {
        "headline": "Meet the Spectacular ETF With Big Positions in Stocks Like Palantir, Microsoft, and Salesforce. It Could be a Brilliant Buy as the AI Trade Unwinds.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=693ab1b4b71b7e35daa491c383399d06c6962adee4727e678fd783e565ad6d90",
        "datetime": 1785433380
      }
    ],
    "_fetched_at": 1785481017.3313787,
    "_updated_label": "2026-07-31 15:57"
  },
  "QCOM": {
    "nextEarnings": {
      "date": "2026-11-03",
      "hour": "amc",
      "epsEstimate": 2.38
    },
    "news": [
      {
        "headline": "QUALCOMM Incorporated 2026 Q3 - Results - Earnings Call Presentation",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=ab18745bbfae777ccc0179a94cf77ae869b8849bc7c596358e99f57d9d262ac1",
        "datetime": 1785465052
      },
      {
        "headline": "The AI secret behind Qualcomm's price hike",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=dd4dfe223e3654336480b32b1a8b4174975197d00df03e1afe00f19bd60e6cfd",
        "datetime": 1785456180
      },
      {
        "headline": "Apple earnings: iPhone prices are 'not immune' to rising memory costs",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8ab94b33acc02d8856dfa46ee3deafad0885ca7e03ea7f64898c0c4a5b45865b",
        "datetime": 1785446100
      },
      {
        "headline": "Are Micron’s (MU) New Auto AI Deals Quietly Redefining Its Competitive Moat?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7cc813c49789472426ba3b3ad673bc72f3ee7372399f2d66b16de6d4b2f1c8aa",
        "datetime": 1785445816
      },
      {
        "headline": "The Growth That Has To Land For Advanced Micro Devices Stock to Make Sense",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3dd50fbaf09869c639cde3a89d4be447461cd9eaa2092ab633d7ca086e21b54f",
        "datetime": 1785444433
      }
    ],
    "_fetched_at": 1785481017.3313787,
    "_updated_label": "2026-07-31 15:57"
  },
  "ARM": {
    "nextEarnings": {
      "date": "2026-11-04",
      "hour": "",
      "epsEstimate": 0.4502
    },
    "news": [
      {
        "headline": "Arm Holdings plc 2027 Q1 - Results - Earnings Call Presentation",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=748ed980e82e802dd39650885a3f2bfc2ce9a45893963dbcd6d15164bf42cdf8",
        "datetime": 1785465301
      },
      {
        "headline": "Update: US Equity Indexes Surge as Microsoft Triggers Rebound in Chipmakers While Inflation Rate Falls in June",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1ed31f83f774cca94290e9d5855fea12f33bcb9ee6348dc88c937ee1fb68be79",
        "datetime": 1785444570
      },
      {
        "headline": "Arm Stock Rises 4% After Revenue and Profit Forecast Beats",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=33bfdd30a126f58510d081de8f273812812702da45ea55104c934836b7c5d030",
        "datetime": 1785441524
      },
      {
        "headline": "Arm remains key AI infrastructure beneficiary despite softer handset outlook, Citi says",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=61146972fcb3dee3223d12843a67e8fe8144411243b175b7651b73a9210c163a",
        "datetime": 1785440280
      },
      {
        "headline": "Wall Street Just Sent Mixed Signals on Arm Stock",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d306081b695b4e27f7ff2ddc0c9685d3ea8bb52a88bed74f34b044c508c851b4",
        "datetime": 1785439214
      }
    ],
    "_fetched_at": 1785481017.3313787,
    "_updated_label": "2026-07-31 15:57"
  },
  "MRVL": {
    "nextEarnings": {
      "date": "2026-08-20",
      "hour": "",
      "epsEstimate": 0.939
    },
    "news": [
      {
        "headline": "Marvell (MRVL) Stock Looks Stretched After A 206% Five Year Run",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=aae50342f5ff940d1097abffa62d6c160a2ee1c985b113ab0108d66c2f1673cf",
        "datetime": 1785449481
      },
      {
        "headline": "Which S&P500 stocks are moving after the closing bell on Thursday?",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=f8d1c849bf50f0e7ed2bab5907315b69ff748fb261be59d615f88c9467b4b9f8",
        "datetime": 1785445501
      },
      {
        "headline": "The Growth That Has To Land For Advanced Micro Devices Stock to Make Sense",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3dd50fbaf09869c639cde3a89d4be447461cd9eaa2092ab633d7ca086e21b54f",
        "datetime": 1785444433
      },
      {
        "headline": "NVDA Stock: Where Compounding Could Take The Price",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c3dee3a0430c06119243322b561ab7309b8d4f5104fbf29457fb0d34cb6b71c0",
        "datetime": 1785441835
      },
      {
        "headline": "Marvell Stock Sits Far Below Its High, But Its Operating Margin Has Kept Climbing",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a526f786bf2417212b4e947113a5fdf7222627ff3f47eee5055b3a5e60b9acd8",
        "datetime": 1785438447
      }
    ],
    "_fetched_at": 1785481017.3313787,
    "_updated_label": "2026-07-31 15:57"
  },
  "ASML": {
    "nextEarnings": {
      "date": "2026-10-14",
      "hour": "bmo",
      "epsEstimate": 10.1558
    },
    "news": [
      {
        "headline": "ASML and 21 More Stocks to Consider Buying Out of the AI Wreckage",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b8639cecaafb02a66d1464db7a809916cb8b2de031c0f5a0195e38ecd253516d",
        "datetime": 1785446700
      },
      {
        "headline": "ASML Stock Rebounds 6.8% as China Threat Looks Less Immediate",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a6ebc75a06875306b6a54f757bfee497357be140acec1e7c2452596f5154a823",
        "datetime": 1785439820
      },
      {
        "headline": "ASML, Lam Research, and a Ton of Other Stocks to Buy Right Now",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e3c388fdd010112fb0ced8fa811f809c0c11fde2239fcc53370a1f3400476ad9",
        "datetime": 1785437100
      },
      {
        "headline": "AMD Fell 8% as China Unveils New Technology — the Real Risk Is the Multiple, Not the Lithography",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=284287af465764241d48543b4e3e2d43c0e81fec344682f04d20f313ab9bf430",
        "datetime": 1785429197
      },
      {
        "headline": "ASML vs. TSM: Which AI Chip Stock Is the Better Buy Now?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=23f777cdc405cb3930d85861f0febb3d30d4399f12a8c573e7fd71a2edbb4113",
        "datetime": 1785428760
      }
    ],
    "_fetched_at": 1785481017.3313787,
    "_updated_label": "2026-07-31 15:57"
  },
  "LRCX": {
    "nextEarnings": {
      "date": "2026-10-20",
      "hour": "",
      "epsEstimate": 1.8266
    },
    "news": [
      {
        "headline": "MU, SNDK, WDC, SKHY Stock Jump After-Hours — Memory Chipmakers Soar After Amazon, Apple Management Flag Soaring Costs, Supply Crunch",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e37f71abb0c1632b6bb0754803b5224b22955b8359b5579cfadd4282f085099e",
        "datetime": 1785456575
      },
      {
        "headline": "Lam Research (LRCX) Stock Trades Up, Here Is Why",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fcfba25d8c919e9ca6dd4b0888b0463b252df9be449b46e62817a649b83f55d7",
        "datetime": 1785453422
      },
      {
        "headline": "Has Lam Research (LRCX) Fallen Far Enough To Look Like A Bargain?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=eeea59c8cf12d78ca54d427ac70516def1eb808ad8ea09dbcee5f90a2e8e5f28",
        "datetime": 1785449377
      },
      {
        "headline": "ASML and 21 More Stocks to Consider Buying Out of the AI Wreckage",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b8639cecaafb02a66d1464db7a809916cb8b2de031c0f5a0195e38ecd253516d",
        "datetime": 1785446700
      },
      {
        "headline": "Which S&P500 stocks are moving after the closing bell on Thursday?",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=f8d1c849bf50f0e7ed2bab5907315b69ff748fb261be59d615f88c9467b4b9f8",
        "datetime": 1785445501
      }
    ],
    "_fetched_at": 1785481017.3313787,
    "_updated_label": "2026-07-31 15:58"
  },
  "KLAC": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "",
      "epsEstimate": 1.1541
    },
    "news": [
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
      },
      {
        "headline": "Why Lam Research Stock Is Having Its Best Day Since 1999",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ddbc691fb49cb15f540cefc9dd949237f3c8306e948ebb4a763c407dac8d86d9",
        "datetime": 1785427020
      },
      {
        "headline": "Top Chip Analyst: Semiconductor Oversupply Is Nearly Impossible Before 2028. Why He’s Bullish on Memory",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b64230e5234d48fc361e9af25108662458e6adb3d64d25d66121329c8cd67d1b",
        "datetime": 1785414167
      }
    ],
    "_fetched_at": 1785481017.3313787,
    "_updated_label": "2026-07-31 15:58"
  },
  "SNDK": {
    "nextEarnings": {
      "date": "2026-08-05",
      "hour": "amc",
      "epsEstimate": 35.1395
    },
    "news": [
      {
        "headline": "Aschenbrenner Tried to Sell Private Stakes Before Citadel Deal",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f1869d18e7e8bcf46d0cdc7e4261c60a5ea36695533058d77bcc78f3286a4559",
        "datetime": 1785469159
      },
      {
        "headline": "IREN Ltd. (IREN) is Gaining Momentum. This Tech Giant May Be Playing a Big Role",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=37738b0aef570df4025afd0be4b6fdc89c844faf0e385070ddb4904ad956b379",
        "datetime": 1785461807
      },
      {
        "headline": "MU, SNDK, WDC, SKHY Stock Jump After-Hours — Memory Chipmakers Soar After Amazon, Apple Management Flag Soaring Costs, Supply Crunch",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e37f71abb0c1632b6bb0754803b5224b22955b8359b5579cfadd4282f085099e",
        "datetime": 1785456575
      },
      {
        "headline": "Review & Preview: Microsoft’s $450 Billion Cushion",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=085f697de09f2e0ac3059e84d9736a4fa59b4aeca63953b228681c1c13a1d328",
        "datetime": 1785455700
      },
      {
        "headline": "Sandisk Stock Had A Mammoth Run. Here's Why Some Investors Are Still Watching It.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=684e9ea0e04b259dd73453576cade2232797f70c4872cfbea0745b9cdc8558b2",
        "datetime": 1785448547
      }
    ],
    "_fetched_at": 1785481017.3313787,
    "_updated_label": "2026-07-31 15:58"
  },
  "WDC": {
    "nextEarnings": {
      "date": "2026-08-05",
      "hour": "amc",
      "epsEstimate": 3.3281
    },
    "news": [
      {
        "headline": "MU, SNDK, WDC, SKHY Stock Jump After-Hours — Memory Chipmakers Soar After Amazon, Apple Management Flag Soaring Costs, Supply Crunch",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e37f71abb0c1632b6bb0754803b5224b22955b8359b5579cfadd4282f085099e",
        "datetime": 1785456575
      },
      {
        "headline": "Which S&P500 stocks are moving after the closing bell on Thursday?",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=f8d1c849bf50f0e7ed2bab5907315b69ff748fb261be59d615f88c9467b4b9f8",
        "datetime": 1785445501
      },
      {
        "headline": "These S&P500 stocks are moving in today's session",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=af68448e11fcc2bc9a9713886285322d32eabc6249bc9f6a49b64ea4adfdbcdf",
        "datetime": 1785438301
      },
      {
        "headline": "How Seagate's AI Storage Growth Is Reshaping the HDD Market",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=284cfce2ecdd0efb52c2da3d73d221d3ee2969f567a3fd7425e8d8cef0b03dc3",
        "datetime": 1785435480
      },
      {
        "headline": "Is STX Stock Still Attractive After Its Massive 2026 Price Rally?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=00cc14dbb1e79e21c8ab650a00aab5e20e81116f6f385e56f9d8eff59669c5bc",
        "datetime": 1785435420
      }
    ],
    "_fetched_at": 1785481017.3313787,
    "_updated_label": "2026-07-31 15:58"
  }
};
