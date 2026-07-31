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
    "_fetched_at": 1785502801.8805358,
    "_updated_label": "2026-07-31 22:00"
  },
  "AAPL": {
    "nextEarnings": {
      "date": "2026-10-28",
      "hour": "amc",
      "epsEstimate": 2.0468
    },
    "news": [
      {
        "headline": "Get insights into the top movers in the S&P500 index of Friday's pre-market session.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=3223cbf246df2f33c69539037f774a50260cd33d10286f045a518ad8062cad57",
        "datetime": 1785501301
      },
      {
        "headline": "Stocks Rise Pre-Bell as Amazon Results Lift AI Trade Sentiment",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f16d5a2dc9b6a4824034e9a6c0d771a4a457d491209a6f45740cd61bdbd2cfc4",
        "datetime": 1785498389
      },
      {
        "headline": "Real-Money Odds Have Entered the News Cycle. Their Fine Print Has Not",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3d2d290971a2fa2ea0a68f07b89e9f2b482d9031ae9b16d483a294a344fd2b04",
        "datetime": 1785498060
      },
      {
        "headline": "Amazon stock surges 13% on Q2 earnings, Apple stock drops 7%",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9d881993479cd484757875a8b72faebad1bd6de3578d42298f7224215636bbf1",
        "datetime": 1785497512
      },
      {
        "headline": "Tim Cook's final earnings call: Apple's on-device AI strategy",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=173b5a61be5e27cca4a971e0db99cbe02233c3533170cfe424ba27ae172816de",
        "datetime": 1785496152
      }
    ],
    "_fetched_at": 1785502801.8805358,
    "_updated_label": "2026-07-31 22:00"
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
    "_fetched_at": 1785502801.8805358,
    "_updated_label": "2026-07-31 22:00"
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
    "_fetched_at": 1785502801.8805358,
    "_updated_label": "2026-07-31 22:00"
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
    "_fetched_at": 1785502801.8805358,
    "_updated_label": "2026-07-31 22:00"
  },
  "TSM": {
    "nextEarnings": {
      "date": "2026-10-14",
      "hour": "amc",
      "epsEstimate": 28.6598
    },
    "news": [
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
      }
    ],
    "_fetched_at": 1785502801.8805358,
    "_updated_label": "2026-07-31 22:01"
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
    "_fetched_at": 1785502801.8805358,
    "_updated_label": "2026-07-31 22:01"
  },
  "META": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "amc",
      "epsEstimate": 7.1724
    },
    "news": [
      {
        "headline": "Stocks Rise Pre-Bell as Amazon Results Lift AI Trade Sentiment",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f16d5a2dc9b6a4824034e9a6c0d771a4a457d491209a6f45740cd61bdbd2cfc4",
        "datetime": 1785498389
      },
      {
        "headline": "Amazon Shares Surge on Cloud-Driven Quarterly Beat; CapEx Outlook Raised",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e8310ab351527a6f2d5f273736380e5ac360f1290f9b16d40bb3c8b304fac09c",
        "datetime": 1785498010
      },
      {
        "headline": "Tim Cook's final earnings call: Apple's on-device AI strategy",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=173b5a61be5e27cca4a971e0db99cbe02233c3533170cfe424ba27ae172816de",
        "datetime": 1785496152
      },
      {
        "headline": "IDACORP Q2 Earnings Call Highlights",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4e873036c09483e0d6663df4cd331d0fe2b74b57a24a1958bb8650f6db95eed2",
        "datetime": 1785495850
      },
      {
        "headline": "Mark Zuckerberg Says AI Will Create An 'Infinite' Instagram",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=16c1e99bfc6090b29f847f55400ddf2cb157725f6168d49d43ec6ecd5a22c9ec",
        "datetime": 1785494721
      }
    ],
    "_fetched_at": 1785502801.8805358,
    "_updated_label": "2026-07-31 22:00"
  },
  "TSLA": {
    "nextEarnings": {
      "date": "2026-10-20",
      "hour": "amc",
      "epsEstimate": 0.4684
    },
    "news": [
      {
        "headline": "Tesla weighs sale of China business ahead of SpaceX merger",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ea83b97f8071cd73b9d0b11d27bd00f660edf39362690bfaff0289e0dbf32ca7",
        "datetime": 1785498964
      },
      {
        "headline": "Tesla Snaps Losing Streak. Can It Start To Rebuild Momentum?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=70346a2fdac18a3ad9bf065bcee76508c0949c8f9e3231dcc870124337d34b0f",
        "datetime": 1785498176
      },
      {
        "headline": "Tesla and SpaceX Merger Speculation Heats Up and Elon Musk Tries to Cool It Off",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=34b73fd04b18cd372e44826c59d5021233127681434b64e43de7cb3cfe59b5be",
        "datetime": 1785496020
      },
      {
        "headline": "This Week In Electric Vehicles - Hyundai Partnership Boosts Affordable EV Leasing in Australia",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=30122e7680ff326b0c7b1681c2b7dc18f5b78d9b98be462969c223732c0c62cb",
        "datetime": 1785494388
      },
      {
        "headline": "Tesla ‘considers quitting China’",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4a1e0c302eeca6a8d14e26bc2bf396b9b6d00b351f0ac829713e17af5f546170",
        "datetime": 1785492502
      }
    ],
    "_fetched_at": 1785502801.8805358,
    "_updated_label": "2026-07-31 22:00"
  },
  "MU": {
    "nextEarnings": {
      "date": "2026-09-21",
      "hour": "amc",
      "epsEstimate": 32.2476
    },
    "news": [
      {
        "headline": "Tesla Snaps Losing Streak. Can It Start To Rebuild Momentum?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=70346a2fdac18a3ad9bf065bcee76508c0949c8f9e3231dcc870124337d34b0f",
        "datetime": 1785498176
      },
      {
        "headline": "IDACORP Q2 Earnings Call Highlights",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4e873036c09483e0d6663df4cd331d0fe2b74b57a24a1958bb8650f6db95eed2",
        "datetime": 1785495850
      },
      {
        "headline": "Meet the Micron and SK Hynix Competitor That Just Rocketed 466% Higher in 1 Day",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=48f449d26e6bc317803342aefd502f7aae8cee298ba1ec63f08d50c940046fa4",
        "datetime": 1785492300
      },
      {
        "headline": "Why Micron Stock Is Rising on What Apple’s Tim Cook Didn’t Say",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d918253ff5288672ba35b5610b6173c399e175a0c364544c776047a9e3ce189b",
        "datetime": 1785491280
      },
      {
        "headline": "This Chinese computer chip maker burned through $5 billion in a decade — then made it all back in a single quarter",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=35ea5406521ab8c3fa4e3d466f03894f1a9ac41243f1241fd3db5541c3894f94",
        "datetime": 1785490200
      }
    ],
    "_fetched_at": 1785502801.8805358,
    "_updated_label": "2026-07-31 22:01"
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
    "_fetched_at": 1785502801.8805358,
    "_updated_label": "2026-07-31 22:01"
  },
  "INTC": {
    "nextEarnings": {
      "date": "2026-10-21",
      "hour": "amc",
      "epsEstimate": 0.3736
    },
    "news": [
      {
        "headline": "Apple, Amazon, Roblox, Microsoft, Marvell, and More Stocks That Explain Today’s Market",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f725d2b91c87030d5bf5659e21ad8d50aeeb50f61a6583a54f6194ab6807b2eb",
        "datetime": 1785492600
      },
      {
        "headline": "MU, SKHY, NVDA, AMD, INTC Extend Rally Premarket, But Chip Stocks Still On Track For Worst Month Since 2002",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=011096ccceb5f50fcbd9900494db1fb82cc74e500fd6f8921f724503e22fef9d",
        "datetime": 1785487817
      },
      {
        "headline": "Astera Labs vs. Intel: Which Technology Stock Is a Better Buy in 2026?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e7d439594e118272a9d04ba50da72eb717cbdf024bb7e6b09da37aad47c90e4b",
        "datetime": 1785471901
      },
      {
        "headline": "Amazon, Microsoft Results Show AI Spending Spree Remains Solid",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=851f489df4dcecd1b98561fe22b584f8118504d976a3ec94a53497deb82bddbd",
        "datetime": 1785457777
      },
      {
        "headline": "Intel (INTC) Just Expanded Its Foundry Tool Kit For AI Chip Customers",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4a26fbd5c40295fceb6ae5e3347d62aa6a878907df7b68d39ad2a165f1743380",
        "datetime": 1785449461
      }
    ],
    "_fetched_at": 1785502801.8805358,
    "_updated_label": "2026-07-31 22:01"
  },
  "AMAT": {
    "nextEarnings": {
      "date": "2026-08-13",
      "hour": "amc",
      "epsEstimate": 3.462
    },
    "news": [
      {
        "headline": "The Zacks Analyst Blog Highlights Applied Materials, Sandisk, Eaton and Flanigan's",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=17499400f8dff7e42cbab89487ce10c87ca65aa706d51b637df4b19091f1a93c",
        "datetime": 1785480420
      },
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
      }
    ],
    "_fetched_at": 1785502801.8805358,
    "_updated_label": "2026-07-31 22:01"
  },
  "QQQ": {
    "nextEarnings": null,
    "news": [
      {
        "headline": "Why Investors Should Expect Another Strong July Job Report",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=c989145efbe1d1acfed04d0ac6f8c5fb3c592bf150ccb7b773c1e79144d4761b",
        "datetime": 1785484829
      },
      {
        "headline": "The Hidden Debt Is Getting Worrisome",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=b58b4412ad8923738d2c440d25ec267657bede487ba566187a48dcbc4e3346c2",
        "datetime": 1785483455
      },
      {
        "headline": "A Major Market Rotation Is Just Getting Underway",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=27aa3a120bf6b7c4f3d16347fe0df336855dea832e4a62b317660f1ed73f812b",
        "datetime": 1785481500
      },
      {
        "headline": "Chart Of The Day: The 'No Confidence' Trade - And What Comes Next",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=c676422036bc82622ad94ece83e6d7736c115cd531e54a2e9ee40882d03e336d",
        "datetime": 1785475800
      },
      {
        "headline": "S&P 500 To 10,000 - Why, When, And How Stocks Get There",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=332c06affb02e4a84b12f7a5ebf98f8b806542277858d8efedfe6cfffece5249",
        "datetime": 1785467400
      }
    ],
    "_fetched_at": 1785502801.8805358,
    "_updated_label": "2026-07-31 22:00"
  },
  "SPY": {
    "nextEarnings": null,
    "news": [
      {
        "headline": "Why Investors Should Expect Another Strong July Job Report",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=c989145efbe1d1acfed04d0ac6f8c5fb3c592bf150ccb7b773c1e79144d4761b",
        "datetime": 1785484829
      },
      {
        "headline": "The Hidden Debt Is Getting Worrisome",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=b58b4412ad8923738d2c440d25ec267657bede487ba566187a48dcbc4e3346c2",
        "datetime": 1785483455
      },
      {
        "headline": "The Case For REITs In 2H 2026",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=e4eb490d0b04a33fb2b2456516016d6c77364ca0ce2a9fe97c7b824ad2df6cc2",
        "datetime": 1785482100
      },
      {
        "headline": "A Major Market Rotation Is Just Getting Underway",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=27aa3a120bf6b7c4f3d16347fe0df336855dea832e4a62b317660f1ed73f812b",
        "datetime": 1785481500
      },
      {
        "headline": "Chart Of The Day: The 'No Confidence' Trade - And What Comes Next",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=c676422036bc82622ad94ece83e6d7736c115cd531e54a2e9ee40882d03e336d",
        "datetime": 1785475800
      }
    ],
    "_fetched_at": 1785502801.8805358,
    "_updated_label": "2026-07-31 22:00"
  },
  "ORCL": {
    "nextEarnings": {
      "date": "2026-09-07",
      "hour": "",
      "epsEstimate": 1.7745
    },
    "news": [
      {
        "headline": "The AI spending boom is forcing a rethink on stock buybacks: One Big Investment Idea",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a56d644af40640cbf7779471cc09aa25bca218856b4f76c424ee4c483519d917",
        "datetime": 1785492000
      },
      {
        "headline": "Microsoft's Cloud Blowout Powers Nasdaq, Then Apple And Amazon Split The Megacap Trade All Over Again",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=a6073c2686994a4a5d886856e46fb8432496b0fc14fedce5390d5ab44d944ec3",
        "datetime": 1785489613
      },
      {
        "headline": "The Hidden Debt Is Getting Worrisome",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=b58b4412ad8923738d2c440d25ec267657bede487ba566187a48dcbc4e3346c2",
        "datetime": 1785483455
      },
      {
        "headline": "MU, NVDA, ORCL, NBIS: AI Stocks In Focus As Situational Awareness Reportedly Seeks Fresh Investment After July Rout",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=98b3578178f9199f94416f487a5959c59fe3e9e33447312798b7533875a8bee6",
        "datetime": 1785483156
      },
      {
        "headline": "CRM Upgraded Its Profit Engine. Quietly",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=035f8074ce5cab81939b9e22931d7964dd08114ae95f9dc290273b8aee2e1f16",
        "datetime": 1785456216
      }
    ],
    "_fetched_at": 1785502801.8805358,
    "_updated_label": "2026-07-31 22:00"
  },
  "CRM": {
    "nextEarnings": {
      "date": "2026-08-26",
      "hour": "amc",
      "epsEstimate": 3.3057
    },
    "news": [
      {
        "headline": "Salesforce: AI Adoption Is Surging, But Revenue Still Isn't Following - Here's Why",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=917d1ba5f8f347f8fc8d95d52f55eca12cfd9b2852cd412030ff1b9c4255d5b6",
        "datetime": 1785473306
      },
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
      }
    ],
    "_fetched_at": 1785502801.8805358,
    "_updated_label": "2026-07-31 22:00"
  },
  "PLTR": {
    "nextEarnings": {
      "date": "2026-08-03",
      "hour": "amc",
      "epsEstimate": 0.3544
    },
    "news": [
      {
        "headline": "Prediction: Palantir Stock Is Going to Plunge on Aug. 4",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2e8d6851fe6c30553981e5ccd11506400b1e8cba215d0758e255eb8bb7f53867",
        "datetime": 1785489960
      },
      {
        "headline": "EMCOR Group Q2 Earnings Call Highlights",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5661bda415b8a6db985455f4865b4980968f72a873a923bcb916454fcecd153f",
        "datetime": 1785481434
      },
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
      }
    ],
    "_fetched_at": 1785502801.8805358,
    "_updated_label": "2026-07-31 22:00"
  },
  "QCOM": {
    "nextEarnings": {
      "date": "2026-11-03",
      "hour": "amc",
      "epsEstimate": 2.38
    },
    "news": [
      {
        "headline": "QCOM Q2 Deep Dive: Data Center and Automotive Growth Offset Smartphone Headwinds",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f15bf33b7a24eb90f35ff74772f0181bf693ef165bd1197f3ca78837ac5902bf",
        "datetime": 1785491495
      },
      {
        "headline": "Microsoft's Cloud Blowout Powers Nasdaq, Then Apple And Amazon Split The Megacap Trade All Over Again",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=a6073c2686994a4a5d886856e46fb8432496b0fc14fedce5390d5ab44d944ec3",
        "datetime": 1785489613
      },
      {
        "headline": "The Zacks Analyst Blog Highlights Arm Holdings, NVIDIA and Qualcomm",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d4f6679a238f20674faef1a775410e2faecd76e98014cb56a2faeba25bfa6af9",
        "datetime": 1785479760
      },
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
      }
    ],
    "_fetched_at": 1785502801.8805358,
    "_updated_label": "2026-07-31 22:01"
  },
  "ARM": {
    "nextEarnings": {
      "date": "2026-11-04",
      "hour": "",
      "epsEstimate": 0.4502
    },
    "news": [
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
      }
    ],
    "_fetched_at": 1785502801.8805358,
    "_updated_label": "2026-07-31 22:01"
  },
  "MRVL": {
    "nextEarnings": {
      "date": "2026-08-20",
      "hour": "",
      "epsEstimate": 0.939
    },
    "news": [
      {
        "headline": "Get insights into the top movers in the S&P500 index of Friday's pre-market session.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=3223cbf246df2f33c69539037f774a50260cd33d10286f045a518ad8062cad57",
        "datetime": 1785501301
      },
      {
        "headline": "24-Year-Old’s $45 Billion Hedge Fund Blows Up Days After Cramer Warned of the Dangers of Margin Trading",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f8ae67c5d87e21bc26082e9bad58c32a5165dae176b2233fb33c7d7463e2a8a2",
        "datetime": 1785495368
      },
      {
        "headline": "Apple, Amazon, Roblox, Microsoft, Marvell, and More Stocks That Explain Today’s Market",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f725d2b91c87030d5bf5659e21ad8d50aeeb50f61a6583a54f6194ab6807b2eb",
        "datetime": 1785492600
      },
      {
        "headline": "Chip Stocks Are Falling: Here Are 2 to Buy on the Dip",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=19dba202e7c7683f559cf7b99c7c4d2f91fff3fa7f72041da77e12a6afcc8a59",
        "datetime": 1785477900
      },
      {
        "headline": "Marvell (MRVL) Stock Looks Stretched After A 206% Five Year Run",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=aae50342f5ff940d1097abffa62d6c160a2ee1c985b113ab0108d66c2f1673cf",
        "datetime": 1785449481
      }
    ],
    "_fetched_at": 1785502801.8805358,
    "_updated_label": "2026-07-31 22:01"
  },
  "ASML": {
    "nextEarnings": {
      "date": "2026-10-14",
      "hour": "bmo",
      "epsEstimate": 10.1558
    },
    "news": [
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
      },
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
      }
    ],
    "_fetched_at": 1785502801.8805358,
    "_updated_label": "2026-07-31 22:01"
  },
  "LRCX": {
    "nextEarnings": {
      "date": "2026-10-20",
      "hour": "",
      "epsEstimate": 1.8266
    },
    "news": [
      {
        "headline": "Microsoft's Cloud Blowout Powers Nasdaq, Then Apple And Amazon Split The Megacap Trade All Over Again",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=a6073c2686994a4a5d886856e46fb8432496b0fc14fedce5390d5ab44d944ec3",
        "datetime": 1785489613
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
      }
    ],
    "_fetched_at": 1785502801.8805358,
    "_updated_label": "2026-07-31 22:01"
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
    "_fetched_at": 1785502801.8805358,
    "_updated_label": "2026-07-31 22:01"
  },
  "SNDK": {
    "nextEarnings": {
      "date": "2026-08-05",
      "hour": "amc",
      "epsEstimate": 35.1395
    },
    "news": [
      {
        "headline": "Tesla Snaps Losing Streak. Can It Start To Rebuild Momentum?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=70346a2fdac18a3ad9bf065bcee76508c0949c8f9e3231dcc870124337d34b0f",
        "datetime": 1785498176
      },
      {
        "headline": "STARTRADER expands AI offering with 31 New US Share & ETF CFDs in Semiconductors, Optical Networking & Nuclear",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e24ee6018ee55f550538cec8daff31d7aa521f915bc2c357eebba33fda34c00e",
        "datetime": 1785491100
      },
      {
        "headline": "Microsoft's Cloud Blowout Powers Nasdaq, Then Apple And Amazon Split The Megacap Trade All Over Again",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=a6073c2686994a4a5d886856e46fb8432496b0fc14fedce5390d5ab44d944ec3",
        "datetime": 1785489613
      },
      {
        "headline": "MU, SKHY, NVDA, AMD, INTC Extend Rally Premarket, But Chip Stocks Still On Track For Worst Month Since 2002",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=011096ccceb5f50fcbd9900494db1fb82cc74e500fd6f8921f724503e22fef9d",
        "datetime": 1785487817
      },
      {
        "headline": "US Stock Market Today: S&P 500 Futures Inch Higher As Inflation Data Looms",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1b5bb953e9c15cdae1a2ee58ea265cf9affffb8351029dee441855b20efead98",
        "datetime": 1785485341
      }
    ],
    "_fetched_at": 1785502801.8805358,
    "_updated_label": "2026-07-31 22:01"
  },
  "WDC": {
    "nextEarnings": {
      "date": "2026-08-05",
      "hour": "amc",
      "epsEstimate": 3.3281
    },
    "news": [
      {
        "headline": "Get insights into the top movers in the S&P500 index of Friday's pre-market session.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=3223cbf246df2f33c69539037f774a50260cd33d10286f045a518ad8062cad57",
        "datetime": 1785501301
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
      }
    ],
    "_fetched_at": 1785502801.8805358,
    "_updated_label": "2026-07-31 22:01"
  }
};
