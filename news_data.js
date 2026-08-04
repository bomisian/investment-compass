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
        "headline": "Looking for the most active stocks in the S&P500 index on Tuesday?",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=819283bc7885d9793c93be583455cea6090c5e3f6b411a6e1ae6ad9d3cd850ee",
        "datetime": 1785866701
      },
      {
        "headline": "Nvidia's Blackwell Boom Reaches Corvex",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ca2284b331a4f0d97487f756de9fa327503b0e14f4345cead6cb1cf1da9e2829",
        "datetime": 1785865474
      },
      {
        "headline": "Stock Market Today: Dow Pops 1,000 Points On Hormuz Talks; Palantir Soars, Dell Breaks Out (Live Coverage)",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=aad214fdefae1c6e541684d2989af260451ffb98f577c7bbd8aae8aa38659002",
        "datetime": 1785865468
      },
      {
        "headline": "Solana Just Had a Disappointing Month. Is It Still a Buy?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=906183af031b9689649fc8fa5c8b92e4fb9306af4f41c99b091ca2eba90fc4b3",
        "datetime": 1785865380
      },
      {
        "headline": "Sector Update: Tech Stocks Gain Tuesday Afternoon",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5251ee137e7217ee895d61800f06eb5e0394120e2b1a33d11b2963b32126396b",
        "datetime": 1785865362
      }
    ],
    "_fetched_at": 1785870002.6087964,
    "_updated_label": "2026-08-05 04:00"
  },
  "AAPL": {
    "nextEarnings": {
      "date": "2026-10-28",
      "hour": "amc",
      "epsEstimate": 2.0468
    },
    "news": [
      {
        "headline": "Looking for the most active stocks in the S&P500 index on Tuesday?",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=819283bc7885d9793c93be583455cea6090c5e3f6b411a6e1ae6ad9d3cd850ee",
        "datetime": 1785866701
      },
      {
        "headline": "Sector Update: Tech Stocks Gain Tuesday Afternoon",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5251ee137e7217ee895d61800f06eb5e0394120e2b1a33d11b2963b32126396b",
        "datetime": 1785865362
      },
      {
        "headline": "Nvidia Tops Key Level As AMD Heads Into Earnings; Is Nvidia A Buy Now",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ebb9507c514862dcca9a4d2b631ca2448caaa7cd445887f22c785b30cdb5d9fd",
        "datetime": 1785863559
      },
      {
        "headline": "Apple vs. Alphabet: The $5 Trillion AI Bet That’s Renting, Not Building",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d088ed4fb74ee28e4e96027e5b4ea5d94249ac1fb41516ba1ee497c34d9d817e",
        "datetime": 1785862462
      },
      {
        "headline": "Apple Is Down 10%. Should Investors Buy the Dip?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=29dd2c64753bc9e476fb0fb5edf18989124310cf61c4b3800d3de8f9326ee6e0",
        "datetime": 1785861300
      }
    ],
    "_fetched_at": 1785870002.6087964,
    "_updated_label": "2026-08-05 04:00"
  },
  "GOOGL": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "amc",
      "epsEstimate": 3.1009
    },
    "news": [
      {
        "headline": "Anthropic's Google Chip Procurement Could Lead To Another $36B Debt Financing Round",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3ef88a7ede7c2e7d3453894124401a17793f4bc0c9dd90fa07d4574209806d9e",
        "datetime": 1785865580
      },
      {
        "headline": "Should You Buy Nvidia Stock Before Aug. 26? Here's What History Suggests.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d251387f2aab47c1bd19a1c3327388cc6014b2490d94ed8be485b7cf904727da",
        "datetime": 1785864720
      },
      {
        "headline": "AI data-centre race builds $1 trillion lease burden for Big Tech",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=de265b3b19a125630750971b3ca9ef6d23cfdd2be62fd13122c12190acf8abdd",
        "datetime": 1785863995
      },
      {
        "headline": "Nvidia Tops Key Level As AMD Heads Into Earnings; Is Nvidia A Buy Now",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ebb9507c514862dcca9a4d2b631ca2448caaa7cd445887f22c785b30cdb5d9fd",
        "datetime": 1785863559
      },
      {
        "headline": "Apple vs. Alphabet: The $5 Trillion AI Bet That’s Renting, Not Building",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d088ed4fb74ee28e4e96027e5b4ea5d94249ac1fb41516ba1ee497c34d9d817e",
        "datetime": 1785862462
      }
    ],
    "_fetched_at": 1785870002.6087964,
    "_updated_label": "2026-08-05 04:00"
  },
  "MSFT": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "",
      "epsEstimate": 4.7263
    },
    "news": [
      {
        "headline": "Looking for the most active stocks in the S&P500 index on Tuesday?",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=819283bc7885d9793c93be583455cea6090c5e3f6b411a6e1ae6ad9d3cd850ee",
        "datetime": 1785866701
      },
      {
        "headline": "Should You Buy Nvidia Stock Before Aug. 26? Here's What History Suggests.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d251387f2aab47c1bd19a1c3327388cc6014b2490d94ed8be485b7cf904727da",
        "datetime": 1785864720
      },
      {
        "headline": "AI data-centre race builds $1 trillion lease burden for Big Tech",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=de265b3b19a125630750971b3ca9ef6d23cfdd2be62fd13122c12190acf8abdd",
        "datetime": 1785863995
      },
      {
        "headline": "Is Microsoft (MSFT) Overvalued As Azure Growth And Copilot Adoption Lift Sentiment?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=dfd24a88ce39088d7c15db820051b19175bbbeb290be4358d414c5cf2e961dcb",
        "datetime": 1785863632
      },
      {
        "headline": "Nvidia Tops Key Level As AMD Heads Into Earnings; Is Nvidia A Buy Now",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ebb9507c514862dcca9a4d2b631ca2448caaa7cd445887f22c785b30cdb5d9fd",
        "datetime": 1785863559
      }
    ],
    "_fetched_at": 1785870002.6087964,
    "_updated_label": "2026-08-05 04:00"
  },
  "AMZN": {
    "nextEarnings": {
      "date": "2026-10-28",
      "hour": "amc",
      "epsEstimate": 1.9445
    },
    "news": [
      {
        "headline": "Looking for the most active stocks in the S&P500 index on Tuesday?",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=819283bc7885d9793c93be583455cea6090c5e3f6b411a6e1ae6ad9d3cd850ee",
        "datetime": 1785866701
      },
      {
        "headline": "Stock Market Today: Dow Pops 1,000 Points On Hormuz Talks; Palantir Soars, Dell Breaks Out (Live Coverage)",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=aad214fdefae1c6e541684d2989af260451ffb98f577c7bbd8aae8aa38659002",
        "datetime": 1785865468
      },
      {
        "headline": "Sector Update: Tech Stocks Gain Tuesday Afternoon",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5251ee137e7217ee895d61800f06eb5e0394120e2b1a33d11b2963b32126396b",
        "datetime": 1785865362
      },
      {
        "headline": "Wayfair Second-Quarter Results Top Views Amid Top-Line Momentum; Shares Soar",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=310491daceb496c732e9330ac4fe4bba9f2a5bda1a88643f7500aef4214598f1",
        "datetime": 1785864971
      },
      {
        "headline": "Should You Buy Nvidia Stock Before Aug. 26? Here's What History Suggests.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d251387f2aab47c1bd19a1c3327388cc6014b2490d94ed8be485b7cf904727da",
        "datetime": 1785864720
      }
    ],
    "_fetched_at": 1785870002.6087964,
    "_updated_label": "2026-08-05 04:00"
  },
  "TSM": {
    "nextEarnings": {
      "date": "2026-10-14",
      "hour": "amc",
      "epsEstimate": 28.8828
    },
    "news": [
      {
        "headline": "AMD Earnings Prediction Market Preview: What Will Lisa Su Say?",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=82440ad7792ffb529787182fae08f24196bdfd20ebfbb29bc5ecdcf2deb65a86",
        "datetime": 1785841271
      },
      {
        "headline": "Nvidia And Google Are Crowding TSMC's N3 Node - Can Intel Fill The Gap?",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=f2ba88ea292423656479b76152fb7445e4e7a4d42d85efd8c087870aa855d60d",
        "datetime": 1785839471
      },
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
      }
    ],
    "_fetched_at": 1785870002.6087964,
    "_updated_label": "2026-08-05 04:01"
  },
  "AVGO": {
    "nextEarnings": {
      "date": "2026-09-03",
      "hour": "amc",
      "epsEstimate": 3.3012
    },
    "news": [
      {
        "headline": "Anthropic's Google Chip Procurement Could Lead To Another $36B Debt Financing Round",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3ef88a7ede7c2e7d3453894124401a17793f4bc0c9dd90fa07d4574209806d9e",
        "datetime": 1785865580
      },
      {
        "headline": "Marvell, Sandisk, SK Hynix lead semiconductor stock rally as S&P 500 trades at record highs",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6db627bf4f0b4f816199202a6aa613db87005896d575a448f8cc23ccfd379d94",
        "datetime": 1785864136
      },
      {
        "headline": "Why Broadcom Stock Rallied Today",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=21f5e5ceb94747f8c52d644ed26099dcf905d85a71acdfcef3a2777433692826",
        "datetime": 1785863522
      },
      {
        "headline": "Intel Soars 10%, AMD Jumps 8%, Broadcom Rises 6% as Chip Stocks Ride a Risk-On Rally",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9a45368d162fc3dbe32858d949ce0892c7ca00d9d7f5cf52a8d57f17f7d18167",
        "datetime": 1785861371
      },
      {
        "headline": "Goldman Sachs Just Added Microsoft to Its Closely Watched ‘Conviction List.’ Broadcom and ServiceNow Were Removed.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8ce88e961b0924b0f3f80fe5fb0fbe0d5f55dcbe323228953f67ca2d1a242c9b",
        "datetime": 1785857644
      }
    ],
    "_fetched_at": 1785870002.6087964,
    "_updated_label": "2026-08-05 04:00"
  },
  "META": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "amc",
      "epsEstimate": 7.1215
    },
    "news": [
      {
        "headline": "Should You Buy Nvidia Stock Before Aug. 26? Here's What History Suggests.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d251387f2aab47c1bd19a1c3327388cc6014b2490d94ed8be485b7cf904727da",
        "datetime": 1785864720
      },
      {
        "headline": "AI data-centre race builds $1 trillion lease burden for Big Tech",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=de265b3b19a125630750971b3ca9ef6d23cfdd2be62fd13122c12190acf8abdd",
        "datetime": 1785863995
      },
      {
        "headline": "Meta Platforms (META) Q2 Growth Puts AI Spending And Valuation Back In Focus",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=74e386f1f59663eec42096c5de54e477231ab62681e31dc855df625eaba1b1ab",
        "datetime": 1785863492
      },
      {
        "headline": "NVIDIA Facing 12-to-1 Demand to Supply for its Chips, Says Expert—and It Might Be Time to Buy",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e94c26eea6a922e9eff0fc9447d4b15abb9dfba45e6cc79f7b88047bfad59d24",
        "datetime": 1785861528
      },
      {
        "headline": "Pinterest Earnings Should be Strong. Just Look at Reddit and Snap Results.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cc49ef376bf70f63e657efe08dd3d9efffd1270955d251f8ddde1cbfd1485e8e",
        "datetime": 1785860820
      }
    ],
    "_fetched_at": 1785870002.6087964,
    "_updated_label": "2026-08-05 04:00"
  },
  "TSLA": {
    "nextEarnings": {
      "date": "2026-10-20",
      "hour": "amc",
      "epsEstimate": 0.4492
    },
    "news": [
      {
        "headline": "Tesla's Wholesale Sales In China Grow For Ninth Month In A Row",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9e25058d9e378a35595052713218d4bc2d2c649a6c795be302e0ae654f409e83",
        "datetime": 1785864295
      },
      {
        "headline": "SpaceX Earnings Due. Fewer Falcon 9 Launches, Tesla Merger, Share Lockup In Focus.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ae3f6d7bab9b3ab9d42c12826ad5cd4bb0058cd3ad736c1347b488c8d972824a",
        "datetime": 1785862403
      },
      {
        "headline": "Tesla vs Amazon: Two Giants, Two AI Bets, One Better Stock to Buy",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=974bbac8dd8f1f06c968253a4f3ac4defe6800885ff0839ea955d2f300adc2ce",
        "datetime": 1785859224
      },
      {
        "headline": "Why Tesla Might Be the Better Elon Musk Stock to Buy on the Way Down",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1fed83d7f3166c4a0856270a7738358ca0c7fa893b98c243c06eabd986f1ee44",
        "datetime": 1785856926
      },
      {
        "headline": "Elon Musk spends half his time talking robots and AI on Tesla earnings calls",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7f8e13f1e7412ce34198a5cbcd6d17f9125f845f15a2efdd5acdd256f5bcf8ec",
        "datetime": 1785856806
      }
    ],
    "_fetched_at": 1785870002.6087964,
    "_updated_label": "2026-08-05 04:00"
  },
  "MU": {
    "nextEarnings": {
      "date": "2026-09-21",
      "hour": "amc",
      "epsEstimate": 32.2476
    },
    "news": [
      {
        "headline": "Marvell, Sandisk, SK Hynix lead semiconductor stock rally as S&P 500 trades at record highs",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6db627bf4f0b4f816199202a6aa613db87005896d575a448f8cc23ccfd379d94",
        "datetime": 1785864136
      },
      {
        "headline": "Dell and Super Micro Rally 10%, Hewlett Packard Enterprise Climbs 6% as AI Server Stocks Surge",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c884f2254066b1dbf0f70150d7462d4f62dfd26176d1fac42adda08f15bb9137",
        "datetime": 1785864012
      },
      {
        "headline": "Semiconductor ETFs Surge up to 19% in Huge Rally as the AI Trade Ramps Back Up",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2fb24b3479c7ba3238b69be9d01cf48c3f575773c7e4052b21e2bc57d4d8366b",
        "datetime": 1785863969
      },
      {
        "headline": "Intel Soars 10%, AMD Jumps 8%, Broadcom Rises 6% as Chip Stocks Ride a Risk-On Rally",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9a45368d162fc3dbe32858d949ce0892c7ca00d9d7f5cf52a8d57f17f7d18167",
        "datetime": 1785861371
      },
      {
        "headline": "These 3 Chip Stocks Could Be Entering a New Growth Cycle",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2363df52319e55496bd2ab195e69c40d034563d1e76e214c1287a6178b3437ea",
        "datetime": 1785861001
      }
    ],
    "_fetched_at": 1785870002.6087964,
    "_updated_label": "2026-08-05 04:01"
  },
  "AMD": {
    "nextEarnings": {
      "date": "2026-11-02",
      "hour": "amc",
      "epsEstimate": 1.8517
    },
    "news": [
      {
        "headline": "Marvell, Sandisk, SK Hynix lead semiconductor stock rally as S&P 500 trades at record highs",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6db627bf4f0b4f816199202a6aa613db87005896d575a448f8cc23ccfd379d94",
        "datetime": 1785864136
      },
      {
        "headline": "Nvidia Tops Key Level As AMD Heads Into Earnings; Is Nvidia A Buy Now",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ebb9507c514862dcca9a4d2b631ca2448caaa7cd445887f22c785b30cdb5d9fd",
        "datetime": 1785863559
      },
      {
        "headline": "Intel Soars 10%, AMD Jumps 8%, Broadcom Rises 6% as Chip Stocks Ride a Risk-On Rally",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9a45368d162fc3dbe32858d949ce0892c7ca00d9d7f5cf52a8d57f17f7d18167",
        "datetime": 1785861371
      },
      {
        "headline": "These 3 Chip Stocks Could Be Entering a New Growth Cycle",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2363df52319e55496bd2ab195e69c40d034563d1e76e214c1287a6178b3437ea",
        "datetime": 1785861001
      },
      {
        "headline": "Should Investors Hold or Fold MRVL Stock at a P/S Multiple of 12X?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f7f7b016d3023c43df83eb901674a6b9e7728d11ce8c54d721538e011ca4fffa",
        "datetime": 1785856500
      }
    ],
    "_fetched_at": 1785870002.6087964,
    "_updated_label": "2026-08-05 04:00"
  },
  "INTC": {
    "nextEarnings": {
      "date": "2026-10-21",
      "hour": "amc",
      "epsEstimate": 0.3936
    },
    "news": [
      {
        "headline": "Looking for the most active stocks in the S&P500 index on Tuesday?",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=819283bc7885d9793c93be583455cea6090c5e3f6b411a6e1ae6ad9d3cd850ee",
        "datetime": 1785866701
      },
      {
        "headline": "These stocks are making the most noise in today's session.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=5d30267d99047e0e16c35b9a9fed12c21e5343fec842b78ee68d8b0cf3b71579",
        "datetime": 1785866400
      },
      {
        "headline": "Marvell, Sandisk, SK Hynix lead semiconductor stock rally as S&P 500 trades at record highs",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6db627bf4f0b4f816199202a6aa613db87005896d575a448f8cc23ccfd379d94",
        "datetime": 1785864136
      },
      {
        "headline": "Intel Soars 10%, AMD Jumps 8%, Broadcom Rises 6% as Chip Stocks Ride a Risk-On Rally",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9a45368d162fc3dbe32858d949ce0892c7ca00d9d7f5cf52a8d57f17f7d18167",
        "datetime": 1785861371
      },
      {
        "headline": "Discover which S&P500 stocks are making waves on Tuesday.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=a5adcb4f64fad6b04cbe165f0115f21602739e6b7b55d969e069991ad09d0aff",
        "datetime": 1785861301
      }
    ],
    "_fetched_at": 1785870002.6087964,
    "_updated_label": "2026-08-05 04:01"
  },
  "AMAT": {
    "nextEarnings": {
      "date": "2026-08-13",
      "hour": "amc",
      "epsEstimate": 3.462
    },
    "news": [
      {
        "headline": "Lam Research Plunges 16% in a Month: Should You Still Buy the Stock?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5b7491a1ade941756a8aabb3e648b94ee9c130cea0ca2041052bd9c757e9819a",
        "datetime": 1785859680
      },
      {
        "headline": "Goldman Sachs Just Added Microsoft to Its Closely Watched ‘Conviction List.’ Broadcom and ServiceNow Were Removed.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8ce88e961b0924b0f3f80fe5fb0fbe0d5f55dcbe323228953f67ca2d1a242c9b",
        "datetime": 1785857644
      },
      {
        "headline": "ASE Technology Surges 82% in 6 Months: Buy, Sell or Hold the Stock?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f0f42009375a578cd73527af9a1bb65d4324131d0e2d82b7bdd78dca8a8cf772",
        "datetime": 1785854280
      },
      {
        "headline": "BofA’s $1.18T cloud forecast puts 3 chip stocks in focus",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6affc7c9d8152fcf52b1a226ea49614c03fcb00f996f58cdf8b46f0c712a950a",
        "datetime": 1785848580
      },
      {
        "headline": "Big Tech's $1.2 Trillion Hyperscaler AI Bet Could Ignite the Next Semiconductor ETF Rally",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=a700cd0e61ac1cc034c98c0bcc60f0d6d304737941d70b0615f09cadbf858ce9",
        "datetime": 1785840691
      }
    ],
    "_fetched_at": 1785870002.6087964,
    "_updated_label": "2026-08-05 04:01"
  },
  "QQQ": {
    "nextEarnings": null,
    "news": [
      {
        "headline": "The AI Selloff Is Missing The Bigger Story",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=e058560e9468d5151406e2b28d65386927f67bad91b39033400993b9e97cc734",
        "datetime": 1785854100
      },
      {
        "headline": "Software Just Passed Its First Test",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=2f4d43cd3949b06a306b3672cf5a7057529afbfce7faeefe8b535e474433f0df",
        "datetime": 1785850543
      },
      {
        "headline": "A Two Way Yen: No Carry Crash For The US Markets, And HEWJ Over EWJ",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=1b56e43fe889e85fdeb00cd8a877f3ecde596b14e8435f4e807b6e95bc751a7d",
        "datetime": 1785850101
      },
      {
        "headline": "S&P 500 Hits Record Highs, Palantir Jumps 27%: Stock Market Today",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=1e75316b8eb939c532758b78983ea13b40cd299b840b2f2fc41a9614b59060f3",
        "datetime": 1785848871
      },
      {
        "headline": "Broad Rebound Pulls Market Breadth Back to Neutral",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=4947fb0956c9800b44a9715c0cda5381893094101800ac1400398f880df6345d",
        "datetime": 1785846214
      }
    ],
    "_fetched_at": 1785870002.6087964,
    "_updated_label": "2026-08-05 04:00"
  },
  "SPY": {
    "nextEarnings": null,
    "news": [
      {
        "headline": "Corning Dropped 25% Over a Month: A Major U.S. Bank Expects 66% Gains Over The Near Term",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e83a99bfbf2175f4b9fd06fba28b7584d72451653e2660912a54adb8e02fb1ad",
        "datetime": 1785856456
      },
      {
        "headline": "Here's Why You Should Buy Quality ETFs Now",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3361250ca3bdc187aa93919acd3634f275930ec9060d2d6f698d2cb02d207bcb",
        "datetime": 1785854220
      },
      {
        "headline": "The AI Selloff Is Missing The Bigger Story",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=e058560e9468d5151406e2b28d65386927f67bad91b39033400993b9e97cc734",
        "datetime": 1785854100
      },
      {
        "headline": "Software Just Passed Its First Test",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=2f4d43cd3949b06a306b3672cf5a7057529afbfce7faeefe8b535e474433f0df",
        "datetime": 1785850543
      },
      {
        "headline": "What SCHD's Own History Suggests About Its Price Today",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=79d67c8e7d181506dea29c832fa9d152a5ff4fd2d9e966b76f3f06f52db08b71",
        "datetime": 1785850333
      }
    ],
    "_fetched_at": 1785870002.6087964,
    "_updated_label": "2026-08-05 04:00"
  },
  "ORCL": {
    "nextEarnings": {
      "date": "2026-09-07",
      "hour": "",
      "epsEstimate": 1.7745
    },
    "news": [
      {
        "headline": "Should You Buy Nvidia Stock Before Aug. 26? Here's What History Suggests.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d251387f2aab47c1bd19a1c3327388cc6014b2490d94ed8be485b7cf904727da",
        "datetime": 1785864720
      },
      {
        "headline": "AI data-centre race builds $1 trillion lease burden for Big Tech",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=de265b3b19a125630750971b3ca9ef6d23cfdd2be62fd13122c12190acf8abdd",
        "datetime": 1785863995
      },
      {
        "headline": "Analysis-Oracle Corp goes for high-stakes ratings gamble in AI strategy",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c79396bbc9a61878514fc4b77c330aabb49cd9e4e5653afc863fb609af43608a",
        "datetime": 1785863958
      },
      {
        "headline": "Oracle (ORCL) Could Be 26% Undervalued Following Federal HR Contract Win",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8e4227f0741c3dabbdbc672d44619f922a833715ea07078521719224f761b84d",
        "datetime": 1785863622
      },
      {
        "headline": "Chart Storm: 10 Reasons AI Stocks Have Bottomed",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6918b0e4ded62530d3053bf2919ff228986e2c44c557d6765d6d77672e70b7ff",
        "datetime": 1785862020
      }
    ],
    "_fetched_at": 1785870002.6087964,
    "_updated_label": "2026-08-05 04:00"
  },
  "CRM": {
    "nextEarnings": {
      "date": "2026-08-26",
      "hour": "amc",
      "epsEstimate": 3.3057
    },
    "news": [
      {
        "headline": "Salesforce, HubSpot, Okta, Workday, and Datadog Shares Skyrocket, What You Need To Know",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=91c1a9e062904c5f2fabfb7d2168f6be69196bcfe13e16ade94d693e6ebaeab6",
        "datetime": 1785854722
      },
      {
        "headline": "Multiplier Raises $35 Million Series B to Build a New Model for Professional Services",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ea5cb68bd7806795cbc709bfce0ae486a2ad901d48d6212f756f0657ab157607",
        "datetime": 1785854700
      },
      {
        "headline": "Oracle's AI Build-Out Is Squeezing Gross Margin, Not Its Valuation",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=57192391847906ae738e47da16bccec8257039ca13f3c2ea965d124bf06a9413",
        "datetime": 1785853515
      },
      {
        "headline": "After Palantir’s Blowout Earnings, Here’s Where The Stock Could Head Next",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9f59801a68b7a25d1b597588d40a276fef2ca9dc0d9994015a1a331dde8124a7",
        "datetime": 1785852016
      },
      {
        "headline": "How Much Upside Can ADBE Stock's Growth Deliver?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9fb4a9e4d36850c75f59c4965f0553e8a137874232508b46ce8bd512a91b52b2",
        "datetime": 1785851339
      }
    ],
    "_fetched_at": 1785870002.6087964,
    "_updated_label": "2026-08-05 04:00"
  },
  "PLTR": {
    "nextEarnings": {
      "date": "2026-11-02",
      "hour": "",
      "epsEstimate": 0.3782
    },
    "news": [
      {
        "headline": "Looking for the most active stocks in the S&P500 index on Tuesday?",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=819283bc7885d9793c93be583455cea6090c5e3f6b411a6e1ae6ad9d3cd850ee",
        "datetime": 1785866701
      },
      {
        "headline": "These stocks are making the most noise in today's session.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=5d30267d99047e0e16c35b9a9fed12c21e5343fec842b78ee68d8b0cf3b71579",
        "datetime": 1785866400
      },
      {
        "headline": "Stock Market Today: Dow Pops 1,000 Points On Hormuz Talks; Palantir Soars, Dell Breaks Out (Live Coverage)",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=aad214fdefae1c6e541684d2989af260451ffb98f577c7bbd8aae8aa38659002",
        "datetime": 1785865468
      },
      {
        "headline": "A WisdomTree Covered Call Can Cultivate A Bountiful Yield",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e04d4d382acc773113cee2ca92cc84ec8afb88a1a9c8aef72a549c905fa0984d",
        "datetime": 1785865397
      },
      {
        "headline": "Sector Update: Tech Stocks Gain Tuesday Afternoon",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5251ee137e7217ee895d61800f06eb5e0394120e2b1a33d11b2963b32126396b",
        "datetime": 1785865362
      }
    ],
    "_fetched_at": 1785870002.6087964,
    "_updated_label": "2026-08-05 04:00"
  },
  "QCOM": {
    "nextEarnings": {
      "date": "2026-11-03",
      "hour": "amc",
      "epsEstimate": 2.2987
    },
    "news": [
      {
        "headline": "Marvell, Sandisk, SK Hynix lead semiconductor stock rally as S&P 500 trades at record highs",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6db627bf4f0b4f816199202a6aa613db87005896d575a448f8cc23ccfd379d94",
        "datetime": 1785864136
      },
      {
        "headline": "Should You Reconsider QCOM Stock Amid Downward Estimate Revisions?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f75d5f5d7395482ee54e91f5dd4958824fbd5db7d30ce8c4cbce9e28188620bd",
        "datetime": 1785851520
      },
      {
        "headline": "Just How Wide Is the Potential Swing in Micron Stock?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=86b159e710b686b69aed0799a28765986ff641308b34a7daa9336e11a3b55892",
        "datetime": 1785850769
      },
      {
        "headline": "What Could Push Broadcom Stock Higher Is Already Sitting In Its Order Book",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=80ab451eb18f12246e450ee2a2a1ec42e44dfd9adbd22670a53f26b779a1ad84",
        "datetime": 1785850192
      },
      {
        "headline": "TXN Slides 11% in a Month: Is the Stock Still a Smart AI Investment?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3012f8fa00083c819db4ab0bad2081f76274b7a0a2e562f81b67aa6e5ca06ab7",
        "datetime": 1785848820
      }
    ],
    "_fetched_at": 1785870002.6087964,
    "_updated_label": "2026-08-05 04:00"
  },
  "ARM": {
    "nextEarnings": {
      "date": "2026-11-04",
      "hour": "",
      "epsEstimate": 0.4688
    },
    "news": [
      {
        "headline": "Arm Jumps More Than 11%: Data Center Royalty Growth Drives Post-Selloff Semiconductor Rally",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=642413559b00149a2b71e8da4da142fcfaed48b8667747d630608015e4944183",
        "datetime": 1785837988
      },
      {
        "headline": "Caterpillar, Wayfair, Zebra Technologies, Gartner And Other Big Stocks Moving Higher On Tuesday",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=6cf1c194df61e099f9ae9ce5d8de327c37a2fc168cfeb333196537ade9ecb3bf",
        "datetime": 1785837651
      },
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
      }
    ],
    "_fetched_at": 1785870002.6087964,
    "_updated_label": "2026-08-05 04:00"
  },
  "MRVL": {
    "nextEarnings": {
      "date": "2026-08-20",
      "hour": "",
      "epsEstimate": 0.939
    },
    "news": [
      {
        "headline": "Marvell, Sandisk, SK Hynix lead semiconductor stock rally as S&P 500 trades at record highs",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6db627bf4f0b4f816199202a6aa613db87005896d575a448f8cc23ccfd379d94",
        "datetime": 1785864136
      },
      {
        "headline": "Discover which S&P500 stocks are making waves on Tuesday.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=a5adcb4f64fad6b04cbe165f0115f21602739e6b7b55d969e069991ad09d0aff",
        "datetime": 1785861301
      },
      {
        "headline": "These 3 Chip Stocks Could Be Entering a New Growth Cycle",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2363df52319e55496bd2ab195e69c40d034563d1e76e214c1287a6178b3437ea",
        "datetime": 1785861001
      },
      {
        "headline": "Marvell Surges as China Ban Report Reignites Optical-Networking Stocks",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=087fe99347ce342044f1336dde6c3444baff09c06c9065bfb92b68bba367df1d",
        "datetime": 1785860760
      },
      {
        "headline": "Marvell Technology (MRVL) Could Be 38% Above Fair Value As AI Narrative Builds",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=eb316ef430a3f03d29688978af74d23d41e231f56bbd2416349da18cdf1f0157",
        "datetime": 1785860063
      }
    ],
    "_fetched_at": 1785870002.6087964,
    "_updated_label": "2026-08-05 04:00"
  },
  "ASML": {
    "nextEarnings": {
      "date": "2026-10-14",
      "hour": "bmo",
      "epsEstimate": 10.1558
    },
    "news": [
      {
        "headline": "Lam Research Plunges 16% in a Month: Should You Still Buy the Stock?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5b7491a1ade941756a8aabb3e648b94ee9c130cea0ca2041052bd9c757e9819a",
        "datetime": 1785859680
      },
      {
        "headline": "ASML (ENXTAM:ASML) Just Raised Its Interim Dividend 17% And Backed 2026 Guidance",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=084781a9b4bdd83d05aecbeb58e444a9e01f4faa243c61bd297b4dc1b0eed01d",
        "datetime": 1785852819
      },
      {
        "headline": "BE Semiconductor Stock Rises 5% on Berenberg Upgrade",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9ddefceb7ede336dae5c01b37e83709d6f612328ed206e3913848449a525015e",
        "datetime": 1785846289
      },
      {
        "headline": "Micron (MU) vs. ASML (ASML): Which AI Chip Giant Offers the Better Risk-Reward?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=11257597bfa0e7376f92fea4fe216625228e11fe6226c5d44050d1a94119bcc7",
        "datetime": 1785845300
      },
      {
        "headline": "Semiconductor stocks sink over fears of increased competition from China",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f5dd2dbd1ac39b7e53b69ffbe19f7d8ab33bf144d394494111f30687ae966b8b",
        "datetime": 1785764378
      }
    ],
    "_fetched_at": 1785870002.6087964,
    "_updated_label": "2026-08-05 04:01"
  },
  "LRCX": {
    "nextEarnings": {
      "date": "2026-10-20",
      "hour": "",
      "epsEstimate": 2.1446
    },
    "news": [
      {
        "headline": "Lam Research Plunges 16% in a Month: Should You Still Buy the Stock?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5b7491a1ade941756a8aabb3e648b94ee9c130cea0ca2041052bd9c757e9819a",
        "datetime": 1785859680
      },
      {
        "headline": "ASE Technology Surges 82% in 6 Months: Buy, Sell or Hold the Stock?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f0f42009375a578cd73527af9a1bb65d4324131d0e2d82b7bdd78dca8a8cf772",
        "datetime": 1785854280
      },
      {
        "headline": "BofA’s $1.18T cloud forecast puts 3 chip stocks in focus",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6affc7c9d8152fcf52b1a226ea49614c03fcb00f996f58cdf8b46f0c712a950a",
        "datetime": 1785848580
      },
      {
        "headline": "SCHD-Inspired 4-Factor Dividend Growth Strategy Selections For August 2026",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=4886ad9f03b09da7279f69a49c8985a0598f2ff3ec690a423ee3ea4802c71af6",
        "datetime": 1785836819
      },
      {
        "headline": "3 S&P 500 Stocks Worth Your Attention",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0251d12235e341bf9a4af6bd67d72dc1a10ab946181617bab1b43ced21139141",
        "datetime": 1785786082
      }
    ],
    "_fetched_at": 1785870002.6087964,
    "_updated_label": "2026-08-05 04:01"
  },
  "KLAC": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "",
      "epsEstimate": 1.1971
    },
    "news": [
      {
        "headline": "Teradyne Is Overvalued at 10.36X PS: Should You Still Buy the Stock?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e27e321c839c36b7d718d41a6263160d550fb07fcb3bc813f466f9356b0d3a91",
        "datetime": 1785860880
      },
      {
        "headline": "Lam Research Plunges 16% in a Month: Should You Still Buy the Stock?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5b7491a1ade941756a8aabb3e648b94ee9c130cea0ca2041052bd9c757e9819a",
        "datetime": 1785859680
      },
      {
        "headline": "How KLA Went From Cheaper Than Teradyne To The Pricier Stock",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ae8a6bd88643cc83bd3f8980f69e6cdb3cc1f9277dd1d0ac3425d3990486368f",
        "datetime": 1785851136
      },
      {
        "headline": "BofA’s $1.18T cloud forecast puts 3 chip stocks in focus",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6affc7c9d8152fcf52b1a226ea49614c03fcb00f996f58cdf8b46f0c712a950a",
        "datetime": 1785848580
      },
      {
        "headline": "Big Tech's $1.2 Trillion Hyperscaler AI Bet Could Ignite the Next Semiconductor ETF Rally",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=a700cd0e61ac1cc034c98c0bcc60f0d6d304737941d70b0615f09cadbf858ce9",
        "datetime": 1785840691
      }
    ],
    "_fetched_at": 1785870002.6087964,
    "_updated_label": "2026-08-05 04:01"
  },
  "SNDK": {
    "nextEarnings": {
      "date": "2026-08-05",
      "hour": "amc",
      "epsEstimate": 35.1395
    },
    "news": [
      {
        "headline": "Marvell, Sandisk, SK Hynix lead semiconductor stock rally as S&P 500 trades at record highs",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6db627bf4f0b4f816199202a6aa613db87005896d575a448f8cc23ccfd379d94",
        "datetime": 1785864136
      },
      {
        "headline": "Discover which S&P500 stocks are making waves on Tuesday.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=a5adcb4f64fad6b04cbe165f0115f21602739e6b7b55d969e069991ad09d0aff",
        "datetime": 1785861301
      },
      {
        "headline": "Sandisk (SNDK) Faces An AI Storage Test On A 27% Undervalued View",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=537f5f66d4fc39cccb94b5ed8807991e9313a21209928dc6e83ff9a0e7e045a8",
        "datetime": 1785860071
      },
      {
        "headline": "Why Sandisk Stock Soared Today",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=594eebb9b9af7de31abc3f4faa94c04ea8bc8023be08bffc5ac0882f5ebc1b19",
        "datetime": 1785856436
      },
      {
        "headline": "SNDK, SKHY Stocks Gain After Launching New AI Memory Standard – Wall Street Hikes Price Targets",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=54132969f4663ab8c03ac2b87a3dfc0b348fdea0c309df143d5fc555a63cad07",
        "datetime": 1785856333
      }
    ],
    "_fetched_at": 1785870002.6087964,
    "_updated_label": "2026-08-05 04:01"
  },
  "WDC": {
    "nextEarnings": {
      "date": "2026-08-05",
      "hour": "amc",
      "epsEstimate": 3.3281
    },
    "news": [
      {
        "headline": "Should Investors Buy SIMO or Wait Despite Its Premium Valuation?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4890921038bf70253fec0b71974548fb58e40f720b49ac194c0234529b6eb45e",
        "datetime": 1785858300
      },
      {
        "headline": "Why Silicon Motion Fell 21.1% in the Past Month and What Comes Next",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b749311b155fa6433c4f60a295c4209665033c71d1865aee75751b13ee1a0c92",
        "datetime": 1785858120
      },
      {
        "headline": "Can AI Storage Demand Make SIMO a Long-Term Enterprise Winner?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b93732bd541d900ecdfb7ec82abaf64b7ce8c2913070826f66659de950e13f5b",
        "datetime": 1785857940
      },
      {
        "headline": "Sandisk Jumps 8%, Micron Gains 6%, SK Hynix Climbs 4% as Wall Street Hikes Price Targets on AI Memory Boom",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1dc23b8d54ce6942d98feb0ee4d0bac406fc767ba54b7f3d6399943195be7900",
        "datetime": 1785855151
      },
      {
        "headline": "ROKU to Report Q2 Earnings: What's in the Cards for the Stock?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5541265891e42343d611eebd47d00efeba177932633ce1bd5c37b67d6eae8224",
        "datetime": 1785851280
      }
    ],
    "_fetched_at": 1785870002.6087964,
    "_updated_label": "2026-08-05 04:01"
  }
};
