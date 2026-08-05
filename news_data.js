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
        "headline": "Andy Jassy Just Delivered Incredible News for Amazon Stock Investors",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b023428ab1f9a80589274130b39b796a415ca7a0d4040d9a17cd23d60e9c9f9d",
        "datetime": 1785923400
      },
      {
        "headline": "Opinion: The Greatest Fleecing of Retail Investors in Wall Street's Storied History Begins Tomorrow, Aug. 6",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=34a0961d99e5a8d249aa47a5bd764eb1de4b7fe310f807e375fc1b29693ef090",
        "datetime": 1785921960
      },
      {
        "headline": "Trading in Pre-IPO Companies Is Taking Off in Popularity. Here's Why That's Bullish for Crypto.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f9df14f9efcad7df8eaeb3127c7a22a2877167786fb8b4b8a6c24194d640591c",
        "datetime": 1785921600
      },
      {
        "headline": "Alphabet Stock Could Soar as It Targets the $300 Billion AI Chip Market Dominated by Nvidia",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=af5b484a4dfe39dd0eecdf1cae541f09224f47486a8358e65cdd409e17a31576",
        "datetime": 1785920880
      },
      {
        "headline": "Can Dogecoin Reach $1 in the Second Half of 2026? The Answer Might Shock You.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1de173ed3a89cb7f84dc1666f266d31c74bb1441104022de7885f69e80df6151",
        "datetime": 1785920400
      }
    ],
    "_fetched_at": 1785931279.535438,
    "_updated_label": "2026-08-05 21:01"
  },
  "AAPL": {
    "nextEarnings": {
      "date": "2026-10-28",
      "hour": "amc",
      "epsEstimate": 2.0468
    },
    "news": [
      {
        "headline": "Corporate America got billions of dollars in tariff refunds. Where’s your cut?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cc015814a2ff7eaf709a8390781c76a4284f9b214fb0e48bb722ed2f7438ecfe",
        "datetime": 1785920425
      },
      {
        "headline": "Tim Cook's Last Quarter as CEO Was Apple's Best June Quarter Ever. The Stock Fell Anyway.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0766f4ed609064df7dd0e40432688a8ccc71a640b8074990730622fd49ee42a3",
        "datetime": 1785919620
      },
      {
        "headline": "Foxconn's monthly revenue hits record in July on AI demand",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5d560ffbe34dae6738583ac9c375beb9bddf076f1b9e5d1096a48925531a4c35",
        "datetime": 1785915934
      },
      {
        "headline": "Apple: I'm Selling Puts Into The Worst Post-Earnings Drop Since 2013",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=c29d6145693b1787fbee98ac41ada584eda1e602e38f3f80a0d14ed5993a054a",
        "datetime": 1785915591
      },
      {
        "headline": "Nvidia Partner Hon Hai’s Sales Rise 54% on Strong AI Demand",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=014c4f066a94ba139a67584c02ca7292d5dfcc88232af87b3d307cb06340e4ee",
        "datetime": 1785915463
      }
    ],
    "_fetched_at": 1785931279.535438,
    "_updated_label": "2026-08-05 21:01"
  },
  "GOOGL": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "amc",
      "epsEstimate": 3.1009
    },
    "news": [
      {
        "headline": "New report warns China transceiver ban would hurt U.S. AI giants",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ef87f8c949a040bbd9355d84774e49ed2224d97065c348148000a227ddc5db13",
        "datetime": 1785922786
      },
      {
        "headline": "Amazon Just Landed a Big Win in the Race Against Tesla and Waymo",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4fe501670ac22cb4f92ee4eee95eb364307a05c6281f54271e31c0c5ac3d62de",
        "datetime": 1785922500
      },
      {
        "headline": "Alphabet Stock Could Soar as It Targets the $300 Billion AI Chip Market Dominated by Nvidia",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=af5b484a4dfe39dd0eecdf1cae541f09224f47486a8358e65cdd409e17a31576",
        "datetime": 1785920880
      },
      {
        "headline": "Michael Burry Exits MSFT, Closes ORCL Short Position – Why He Changed His Tech Trades?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fd0512a95ba4622226630e9259446db94089a0b196b43b96c819e5f260a9d587",
        "datetime": 1785920119
      },
      {
        "headline": "Megacap Earnings: Who Gets Paid When They Build?",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=276bc3684f3d4b5b98ef61eb4ee92d0162fa3f97160b85ed95582c552c62eb31",
        "datetime": 1785915000
      }
    ],
    "_fetched_at": 1785931279.535438,
    "_updated_label": "2026-08-05 21:01"
  },
  "MSFT": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "",
      "epsEstimate": 4.7263
    },
    "news": [
      {
        "headline": "New report warns China transceiver ban would hurt U.S. AI giants",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ef87f8c949a040bbd9355d84774e49ed2224d97065c348148000a227ddc5db13",
        "datetime": 1785922786
      },
      {
        "headline": "Michael Burry Exits MSFT, Closes ORCL Short Position – Why He Changed His Tech Trades?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fd0512a95ba4622226630e9259446db94089a0b196b43b96c819e5f260a9d587",
        "datetime": 1785920119
      },
      {
        "headline": "Nasdaq, S&P 500 Futures Rise On Hormuz Deal Hopes, ADP Jobs Data Eyed: Why AMD, SPCX, ASTS, MSFT, PLTR, RKLB, SLV Are In Focus",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cf7389a191c7e2227c2cbe24a5c68b5de5a2a6d9969dc20d26d696606611731a",
        "datetime": 1785919305
      },
      {
        "headline": "US Ban on Chinese Optical Parts Hurts Hyperscalers, Report Says",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1e7e28b3242340446695688b871903cea24855a94c1eed737ebf667167391e35",
        "datetime": 1785918187
      },
      {
        "headline": "Nvidia Partner Hon Hai’s Sales Rise 54% on Strong AI Demand",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=014c4f066a94ba139a67584c02ca7292d5dfcc88232af87b3d307cb06340e4ee",
        "datetime": 1785915463
      }
    ],
    "_fetched_at": 1785931279.535438,
    "_updated_label": "2026-08-05 21:01"
  },
  "AMZN": {
    "nextEarnings": {
      "date": "2026-10-28",
      "hour": "amc",
      "epsEstimate": 1.9445
    },
    "news": [
      {
        "headline": "Andy Jassy Just Delivered Incredible News for Amazon Stock Investors",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b023428ab1f9a80589274130b39b796a415ca7a0d4040d9a17cd23d60e9c9f9d",
        "datetime": 1785923400
      },
      {
        "headline": "Amazon Just Landed a Big Win in the Race Against Tesla and Waymo",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4fe501670ac22cb4f92ee4eee95eb364307a05c6281f54271e31c0c5ac3d62de",
        "datetime": 1785922500
      },
      {
        "headline": "Corporate America got billions of dollars in tariff refunds. Where’s your cut?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cc015814a2ff7eaf709a8390781c76a4284f9b214fb0e48bb722ed2f7438ecfe",
        "datetime": 1785920425
      },
      {
        "headline": "Michael Burry Exits MSFT, Closes ORCL Short Position – Why He Changed His Tech Trades?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fd0512a95ba4622226630e9259446db94089a0b196b43b96c819e5f260a9d587",
        "datetime": 1785920119
      },
      {
        "headline": "US Ban on Chinese Optical Parts Hurts Hyperscalers, Report Says",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1e7e28b3242340446695688b871903cea24855a94c1eed737ebf667167391e35",
        "datetime": 1785918187
      }
    ],
    "_fetched_at": 1785931279.535438,
    "_updated_label": "2026-08-05 21:01"
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
    "_fetched_at": 1785931279.535438,
    "_updated_label": "2026-08-05 21:02"
  },
  "AVGO": {
    "nextEarnings": {
      "date": "2026-09-02",
      "hour": "amc",
      "epsEstimate": 3.3012
    },
    "news": [
      {
        "headline": "US Ban on Chinese Optical Parts Hurts Hyperscalers, Report Says",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1e7e28b3242340446695688b871903cea24855a94c1eed737ebf667167391e35",
        "datetime": 1785918187
      },
      {
        "headline": "I’m Buying Broadcom Because It Sucks Up The Hyperscaler AI Capex That Doesn’t Go To Nvidia",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6c0f0425195bc6b4115679d51d320023e3cbf09d0cc561e16086435864dc5913",
        "datetime": 1785903566
      },
      {
        "headline": "AMD Vs. Broadcom: Why Broadcom is Actually Nvidia’s Biggest Problem",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=254e6b3e06163cc79cc665f02ed7056d1c787b1e7ea54d75f22729a776907e3b",
        "datetime": 1785903391
      },
      {
        "headline": "Marvell Technology Stock Is On Sale, But Is It A Bargain?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ebaef1bbd005da3a7700ee83450ed48b2c18693a2e9c5abe783175721082d626",
        "datetime": 1785876668
      },
      {
        "headline": "Intel, AMD Lead Powerful Chip Stocks Rally on AI Optimism",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=503cb1ba3bd341834f2edc8bb387c39b462efff08f303459164fc536125b784b",
        "datetime": 1785875233
      }
    ],
    "_fetched_at": 1785931279.535438,
    "_updated_label": "2026-08-05 21:02"
  },
  "META": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "amc",
      "epsEstimate": 7.1215
    },
    "news": [
      {
        "headline": "New report warns China transceiver ban would hurt U.S. AI giants",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ef87f8c949a040bbd9355d84774e49ed2224d97065c348148000a227ddc5db13",
        "datetime": 1785922786
      },
      {
        "headline": "Nvidia Partner Hon Hai’s Sales Rise 54% on Strong AI Demand",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=014c4f066a94ba139a67584c02ca7292d5dfcc88232af87b3d307cb06340e4ee",
        "datetime": 1785915463
      },
      {
        "headline": "Megacap Earnings: Who Gets Paid When They Build?",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=276bc3684f3d4b5b98ef61eb4ee92d0162fa3f97160b85ed95582c552c62eb31",
        "datetime": 1785915000
      },
      {
        "headline": "Intelligence Indeed's Z-Agent Becomes OSWorld's First 90%+ Dark Horse",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c1101ad1bb7be2a994776de6199b0a6d6942ed471ede2bf50082cb436e0a54d0",
        "datetime": 1785913380
      },
      {
        "headline": "AMD's problem is not demand. It is where the demand comes from",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c34f501a5013427418b3d280609f36da2dc05e9e8108160138e4e4b8914147dd",
        "datetime": 1785912600
      }
    ],
    "_fetched_at": 1785931279.535438,
    "_updated_label": "2026-08-05 21:01"
  },
  "TSLA": {
    "nextEarnings": {
      "date": "2026-10-20",
      "hour": "amc",
      "epsEstimate": 0.4492
    },
    "news": [
      {
        "headline": "Amazon Just Landed a Big Win in the Race Against Tesla and Waymo",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4fe501670ac22cb4f92ee4eee95eb364307a05c6281f54271e31c0c5ac3d62de",
        "datetime": 1785922500
      },
      {
        "headline": "SpaceX Stock Slides Premarket As Nvidia Deal Clouds Tesla Chip Plans — Musk Backs $10 Trillion Bull Case, Taunts Crowded Shorts",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=520ac233f13f0f0b072d25e9eb35fe2dbab27eeaca4da3e017d700865e837ee9",
        "datetime": 1785917284
      },
      {
        "headline": "Michael Burry Warns of 1987-Type Crash as S&P 500 Hits Record High",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b3911375b8f78809370871d4f2752912efd108803e1d64ef27959db67e5946d7",
        "datetime": 1785915391
      },
      {
        "headline": "MU, SNDK, SKHY Stocks In Focus: Elon Musk Says Memory Demand Is Growing ‘200% A Year, Maybe Higher,’ Calls It A ‘Limiting Factor’",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=bde77d623185a47fb20e185ad0900701e627e5670fc0d780e3077f82f6304e2e",
        "datetime": 1785913376
      },
      {
        "headline": "Cathie Wood's Ark Invest Has Built an $870 Million Tesla Position. Here's the Thesis Keeping Her In.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e6fca4b2e2750a6f8efac95643c1838119551dc83e33b42721a1f1b6b937c5e6",
        "datetime": 1785911100
      }
    ],
    "_fetched_at": 1785931279.535438,
    "_updated_label": "2026-08-05 21:01"
  },
  "MU": {
    "nextEarnings": {
      "date": "2026-09-21",
      "hour": "amc",
      "epsEstimate": 32.2476
    },
    "news": [
      {
        "headline": "Micron Technology (NASDAQ:MU) Stands Out as an Affordable Growth Pick",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=ebdc27dc2cf8c13cc953a438c69d656cce67a1adfb4cbcb07f3e19cffe7048f1",
        "datetime": 1785918041
      },
      {
        "headline": "Micron (MU) Teams Up With Liqid And Microchip On AI Memory And Storage",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=096bd58d3b5306cc99e65c6886b30f1955a0a58aa2975d0f0f76870731f583b7",
        "datetime": 1785917530
      },
      {
        "headline": "S&P 500 Prints Fresh Record As Chips Rip And Hormuz Talks Crack The Oil Trade",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=1ea4568bc1d11f797a0e714c3ea983f28f4fb27c99c4caede80ea7b9cea51b03",
        "datetime": 1785916866
      },
      {
        "headline": "Megacap Earnings: Who Gets Paid When They Build?",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=276bc3684f3d4b5b98ef61eb4ee92d0162fa3f97160b85ed95582c552c62eb31",
        "datetime": 1785915000
      },
      {
        "headline": "MU, SNDK, SKHY Stocks In Focus: Elon Musk Says Memory Demand Is Growing ‘200% A Year, Maybe Higher,’ Calls It A ‘Limiting Factor’",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=bde77d623185a47fb20e185ad0900701e627e5670fc0d780e3077f82f6304e2e",
        "datetime": 1785913376
      }
    ],
    "_fetched_at": 1785931279.535438,
    "_updated_label": "2026-08-05 21:02"
  },
  "AMD": {
    "nextEarnings": {
      "date": "2026-11-02",
      "hour": "amc",
      "epsEstimate": 1.8517
    },
    "news": [
      {
        "headline": "Middle East optimism lifts sentiment as SpaceX and AMD earnings dominate attention: Dow Jones, S&P, Nasdaq, Wall Street Futures",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=74ee7ded40feb3ec246200f13db88956005454a1ea5b9608b95dcf29e7b64f3d",
        "datetime": 1785921986
      },
      {
        "headline": "Nasdaq, S&P 500 Futures Rise On Hormuz Deal Hopes, ADP Jobs Data Eyed: Why AMD, SPCX, ASTS, MSFT, PLTR, RKLB, SLV Are In Focus",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cf7389a191c7e2227c2cbe24a5c68b5de5a2a6d9969dc20d26d696606611731a",
        "datetime": 1785919305
      },
      {
        "headline": "Nvidia Stock Gets a SpaceX Boost as Chip Rival Stumbles",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=bdfb26b0a2187435cd03f3d84b9735c351751d06e6eded3a085768fffb4cc5c1",
        "datetime": 1785919020
      },
      {
        "headline": "AMD falls as investors seek bigger AI payoff",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2a433830d54fa21d3c652edcb2e78c409402a9f5211f11297dbf3c0d5f22a916",
        "datetime": 1785918429
      },
      {
        "headline": "S&P 500 Prints Fresh Record As Chips Rip And Hormuz Talks Crack The Oil Trade",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=1ea4568bc1d11f797a0e714c3ea983f28f4fb27c99c4caede80ea7b9cea51b03",
        "datetime": 1785916866
      }
    ],
    "_fetched_at": 1785931279.535438,
    "_updated_label": "2026-08-05 21:01"
  },
  "INTC": {
    "nextEarnings": {
      "date": "2026-10-21",
      "hour": "amc",
      "epsEstimate": 0.3936
    },
    "news": [
      {
        "headline": "AMD falls as investors seek bigger AI payoff",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2a433830d54fa21d3c652edcb2e78c409402a9f5211f11297dbf3c0d5f22a916",
        "datetime": 1785918429
      },
      {
        "headline": "What Alphabet’s Stock Drop Tells Us About the Market Today",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d6a5ba652527654fe25e98c73ca9f5620a2fc53e4cbaaf2b76d4179422d1ac26",
        "datetime": 1785890683
      },
      {
        "headline": "Is Intel (INTC) Fairly Valued Following Q2 Guidance And AI Partnership Updates?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e59b0b3ebe95fd7cc9ecef018bb94b9804be1beab630a20918eb67de3daf8497",
        "datetime": 1785881505
      },
      {
        "headline": "Discover the top S&P500 movers in Tuesday's after-hours session.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=128748e70fd448792fef6acf53a13fb9d27611d701ce9536719aad3e2e90eec4",
        "datetime": 1785877501
      },
      {
        "headline": "Marvell Technology Stock Is On Sale, But Is It A Bargain?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ebaef1bbd005da3a7700ee83450ed48b2c18693a2e9c5abe783175721082d626",
        "datetime": 1785876668
      }
    ],
    "_fetched_at": 1785931279.535438,
    "_updated_label": "2026-08-05 21:02"
  },
  "AMAT": {
    "nextEarnings": {
      "date": "2026-08-13",
      "hour": "amc",
      "epsEstimate": 3.462
    },
    "news": [
      {
        "headline": "Chatham Lodging Trust Q2 2026 Earnings Call Summary",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b589a0abb4a4852a6669914f72c8f73d1408764bc867c9abf49ae8bfca39e8c4",
        "datetime": 1785878045
      },
      {
        "headline": "Semiconductors Just Posted Their Best Four-Day Rally Since March 2020. These Five Stocks Led the Charge",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=849000bcd9ce8addf5230066fc08a9dc4522f964e096c2bee5aba35ba900b864",
        "datetime": 1785860024
      },
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
      }
    ],
    "_fetched_at": 1785931279.535438,
    "_updated_label": "2026-08-05 21:02"
  },
  "QQQ": {
    "nextEarnings": null,
    "news": [
      {
        "headline": "The Fed Holds, But Bond Volatility Breaks Higher",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=d57d773bd6f256297b0292ea6e34242b1ae0ccbbff9725a3f9b1117e2205109d",
        "datetime": 1785903600
      },
      {
        "headline": "Parsing The Relationship Between Demographics And Inflation",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=4164c7053db80f34aa1299b5c85621959c81ccdaeb3b80bde53c4a7cd94e8de2",
        "datetime": 1785895800
      },
      {
        "headline": "August Market Digest",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=1483e8a52117a06c62ae5663a6dafcd70cb73d8a644b60bc15dba2b181f50fac",
        "datetime": 1785895800
      },
      {
        "headline": "Manufacturing Growth Returns To ASEAN Region As U.S. Factories Report Slowdown",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=6069fdb3dd31e167b7157588d9e14bcfef089a36c09f7711a4bf9b1b7cae0e00",
        "datetime": 1785894000
      },
      {
        "headline": "Forget Trump, Warsh Is The Real Threat",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=27f3f4f74dc1c93ee01fa33c021f31f3d5adf33fe36f8207cdede63c24c74b09",
        "datetime": 1785861328
      }
    ],
    "_fetched_at": 1785931279.535438,
    "_updated_label": "2026-08-05 21:01"
  },
  "SPY": {
    "nextEarnings": null,
    "news": [
      {
        "headline": "S&P 500 Sees AI Bubble Deflate As Index Regresses Toward Its Mean Trend",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=e1f9a0813c5f7546bdd0cb1f98ef9db768df3c185f15657b0788e43c6ad2c345",
        "datetime": 1785913500
      },
      {
        "headline": "Chart Of The Day: One Index, Two ETFs, One Important Story",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=144eda8cd44f806c0a949eb0edccfdce248750da786fb3a2de25f75f7bc55052",
        "datetime": 1785911400
      },
      {
        "headline": "The Fed Holds, But Bond Volatility Breaks Higher",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=d57d773bd6f256297b0292ea6e34242b1ae0ccbbff9725a3f9b1117e2205109d",
        "datetime": 1785903600
      },
      {
        "headline": "Parsing The Relationship Between Demographics And Inflation",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=4164c7053db80f34aa1299b5c85621959c81ccdaeb3b80bde53c4a7cd94e8de2",
        "datetime": 1785895800
      },
      {
        "headline": "August Market Digest",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=1483e8a52117a06c62ae5663a6dafcd70cb73d8a644b60bc15dba2b181f50fac",
        "datetime": 1785895800
      }
    ],
    "_fetched_at": 1785931279.535438,
    "_updated_label": "2026-08-05 21:01"
  },
  "ORCL": {
    "nextEarnings": {
      "date": "2026-09-07",
      "hour": "",
      "epsEstimate": 1.7745
    },
    "news": [
      {
        "headline": "Michael Burry Exits MSFT, Closes ORCL Short Position – Why He Changed His Tech Trades?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fd0512a95ba4622226630e9259446db94089a0b196b43b96c819e5f260a9d587",
        "datetime": 1785920119
      },
      {
        "headline": "AMD's problem is not demand. It is where the demand comes from",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c34f501a5013427418b3d280609f36da2dc05e9e8108160138e4e4b8914147dd",
        "datetime": 1785912600
      },
      {
        "headline": "Think Tech Is Spending Too Much? There’s Trillions More to Come.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3013147559d86168025d0775dccab617f5e15e445098d470ac18fef30659b47a",
        "datetime": 1785909600
      },
      {
        "headline": "[Latest] Global eClinical Solutions Market Size/Share Worth USD 42.55 Billion by 2035 at a 13.98% CAGR: Healthcare Foresights (Analysis, Outlook, Leaders, Report, Trends, Forecast, Segmentation, Growt",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9c1308efc280e971b6ce9287cb39377d570797ce0b70858cd0d2d5f3f9b7f692",
        "datetime": 1785904200
      },
      {
        "headline": "The Hackett Group Q2 Earnings Call Highlights",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1f38ae9444e538906914b651853a58b54233688cd04b07f10c40693e694c9516",
        "datetime": 1785888265
      }
    ],
    "_fetched_at": 1785931279.535438,
    "_updated_label": "2026-08-05 21:01"
  },
  "CRM": {
    "nextEarnings": {
      "date": "2026-08-26",
      "hour": "amc",
      "epsEstimate": 3.3057
    },
    "news": [
      {
        "headline": "U.S. Army Human Resources Command Deploys Agentforce to Deliver 24/7 AI-Powered Support to 9.2 Million Soldiers, Veterans, and Military Families",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9ae5f803ede65c2ee3305dc496f93f48fc3526252931d8b356958213a7c44b63",
        "datetime": 1785920400
      },
      {
        "headline": "Missionforce National Security Unveils IL5-Authorized AI Agents and Apps to Drive Decision Advantage, Readiness, and Enhanced Warfighter Support",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e17ecffbdd7265b7c9b34575ae2ad9f66ab592805b22e6fddf7cccdd97f04ed7",
        "datetime": 1785920400
      },
      {
        "headline": "Salesforce (CRM) Lands VA Deal as Its Undervalued Narrative Gets Fresh Support",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=bccae0c3ce32b9dee72008bd9489142592da48fda9a9898bf617a125e6f39b5a",
        "datetime": 1785874252
      },
      {
        "headline": "Which dow jones stocks are moving on Tuesday?",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=483f966e3fec03d644b725993e1e9c6afeda8b616f07640dda8da731c09bf0d0",
        "datetime": 1785870604
      },
      {
        "headline": "Dog Days On The Dow: No Buys With Weak Watching",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=04576ca58975816aa2a19ca8c3259f336a17133729ba02f3b79baa03bf7bacab",
        "datetime": 1785859586
      }
    ],
    "_fetched_at": 1785931279.535438,
    "_updated_label": "2026-08-05 21:01"
  },
  "PLTR": {
    "nextEarnings": {
      "date": "2026-11-02",
      "hour": "",
      "epsEstimate": 0.3782
    },
    "news": [
      {
        "headline": "Michael Burry Exits MSFT, Closes ORCL Short Position – Why He Changed His Tech Trades?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fd0512a95ba4622226630e9259446db94089a0b196b43b96c819e5f260a9d587",
        "datetime": 1785920119
      },
      {
        "headline": "S&P 500, Dow Build on Record Highs Amid AI and Iran Hope",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=981a1414b5bcc1e13a7932b5031ab56fc4bf8caa2ab9fd46e333d8fce93a8077",
        "datetime": 1785919640
      },
      {
        "headline": "Is Palantir a Buy as Its Revenue Surges 93% and Continues to Accelerate?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a9897cbee6c10ac79e2f455bd83ce17969c217603a8902af470c74464e8d9cca",
        "datetime": 1785917700
      },
      {
        "headline": "Why Zeta Global Holdings (ZETA) Is Up 10.8% After Another Beat-and-Raise AI-Driven Quarter And What's Next",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=53d752e5929d539febb5a423f89db752f13f8f2094dc21ad7a4e51a27056d76f",
        "datetime": 1785917661
      },
      {
        "headline": "US Stock Market Today: S&P 500 Futures Edge Higher As Rate Hike Risks Linger",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a8d7db27d8aabe13fd246e49e63d338b9eb0f838ac7c179576696681db597290",
        "datetime": 1785917619
      }
    ],
    "_fetched_at": 1785931279.535438,
    "_updated_label": "2026-08-05 21:01"
  },
  "QCOM": {
    "nextEarnings": {
      "date": "2026-11-03",
      "hour": "amc",
      "epsEstimate": 2.2987
    },
    "news": [
      {
        "headline": "Multiverse Computing and Qualcomm Collaborate to Bring Efficient AI Models to Data Centers",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b5e6bc5d34e59f59c80abdc581d9137f855d793be64a9043bb4d5b267592e908",
        "datetime": 1785913200
      },
      {
        "headline": "Marvell Technology Stock Is On Sale, But Is It A Bargain?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ebaef1bbd005da3a7700ee83450ed48b2c18693a2e9c5abe783175721082d626",
        "datetime": 1785876668
      },
      {
        "headline": "Marvell, Sandisk, SK Hynix lead semiconductor stock rally as S&P 500 trades at record highs",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6db627bf4f0b4f816199202a6aa613db87005896d575a448f8cc23ccfd379d94",
        "datetime": 1785864136
      },
      {
        "headline": "Cerebras Systems shares are trading higher following its IPO debut.",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=10aeab1ebbd088b227b6aa2413aa397f3afab471fc8810ac1cd13619555055a6",
        "datetime": 1785856976
      },
      {
        "headline": "Should You Reconsider QCOM Stock Amid Downward Estimate Revisions?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f75d5f5d7395482ee54e91f5dd4958824fbd5db7d30ce8c4cbce9e28188620bd",
        "datetime": 1785851520
      }
    ],
    "_fetched_at": 1785931279.535438,
    "_updated_label": "2026-08-05 21:02"
  },
  "ARM": {
    "nextEarnings": {
      "date": "2026-11-04",
      "hour": "",
      "epsEstimate": 0.4688
    },
    "news": [
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
      },
      {
        "headline": "Caterpillar, Wayfair, Zebra Technologies, Gartner And Other Big Stocks Moving Higher On Tuesday",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=6cf1c194df61e099f9ae9ce5d8de327c37a2fc168cfeb333196537ade9ecb3bf",
        "datetime": 1785837651
      }
    ],
    "_fetched_at": 1785931279.535438,
    "_updated_label": "2026-08-05 21:02"
  },
  "MRVL": {
    "nextEarnings": {
      "date": "2026-08-27",
      "hour": "",
      "epsEstimate": 0.939
    },
    "news": [
      {
        "headline": "Marvel Biosciences Reports Positive Preclinical Data Demonstrating MB-204 Reverses Behavioural and Cognitive Deficits in a Mouse Model of Fragile X",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=85fe8ee9624a19c0422b0b3f4190fce1571b164952d8433c2f728544fc608c7b",
        "datetime": 1785920400
      },
      {
        "headline": "US Ban on Chinese Optical Parts Hurts Hyperscalers, Report Says",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1e7e28b3242340446695688b871903cea24855a94c1eed737ebf667167391e35",
        "datetime": 1785918187
      },
      {
        "headline": "S&P 500 Prints Fresh Record As Chips Rip And Hormuz Talks Crack The Oil Trade",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=1ea4568bc1d11f797a0e714c3ea983f28f4fb27c99c4caede80ea7b9cea51b03",
        "datetime": 1785916866
      },
      {
        "headline": "Marvell Technology Stock Is On Sale, But Is It A Bargain?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ebaef1bbd005da3a7700ee83450ed48b2c18693a2e9c5abe783175721082d626",
        "datetime": 1785876668
      },
      {
        "headline": "These S&P500 stocks are moving in today's session",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=014a623496be595444b2cd0b07829ee26470d3fd42a2b03f046b0558238ac22f",
        "datetime": 1785870301
      }
    ],
    "_fetched_at": 1785931279.535438,
    "_updated_label": "2026-08-05 21:02"
  },
  "ASML": {
    "nextEarnings": {
      "date": "2026-10-14",
      "hour": "bmo",
      "epsEstimate": 10.1558
    },
    "news": [
      {
        "headline": "Megacap Earnings: Who Gets Paid When They Build?",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=276bc3684f3d4b5b98ef61eb4ee92d0162fa3f97160b85ed95582c552c62eb31",
        "datetime": 1785915000
      },
      {
        "headline": "Why ASML Stock Lost 18% in July",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=79310af51e86c9f2109029dbc299cf24c1a47a87a2527335d9756a2624a1c9b8",
        "datetime": 1785891000
      },
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
      }
    ],
    "_fetched_at": 1785931279.535438,
    "_updated_label": "2026-08-05 21:02"
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
        "headline": "Cerebras Systems shares are trading higher following its IPO debut.",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=10aeab1ebbd088b227b6aa2413aa397f3afab471fc8810ac1cd13619555055a6",
        "datetime": 1785856976
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
      }
    ],
    "_fetched_at": 1785931279.535438,
    "_updated_label": "2026-08-05 21:02"
  },
  "KLAC": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "",
      "epsEstimate": 1.1971
    },
    "news": [
      {
        "headline": "Megacap Earnings: Who Gets Paid When They Build?",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=276bc3684f3d4b5b98ef61eb4ee92d0162fa3f97160b85ed95582c552c62eb31",
        "datetime": 1785915000
      },
      {
        "headline": "KLA (KLAC) Stock Looks Fully Valued After Its Huge Run",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1345048618dc4502ffc0118dcfda25c2945059b1573763d5cc5dd322725e8aa9",
        "datetime": 1785870510
      },
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
      }
    ],
    "_fetched_at": 1785931279.535438,
    "_updated_label": "2026-08-05 21:02"
  },
  "SNDK": {
    "nextEarnings": {
      "date": "2026-08-05",
      "hour": "amc",
      "epsEstimate": 35.1395
    },
    "news": [
      {
        "headline": "SNDK, SKHY Stocks Fall Premarket — Here's What Investors Are Tracking In The AI Memory Race",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a8dd3b8882e91cbaa87226949bed8308df73b594fc5ad430c994f87b47e09785",
        "datetime": 1785919073
      },
      {
        "headline": "MU, SNDK, SKHY Stocks In Focus: Elon Musk Says Memory Demand Is Growing ‘200% A Year, Maybe Higher,’ Calls It A ‘Limiting Factor’",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=bde77d623185a47fb20e185ad0900701e627e5670fc0d780e3077f82f6304e2e",
        "datetime": 1785913376
      },
      {
        "headline": "SanDisk Stock Jumps 10% on New AI Memory Milestone With SK Hynix Ahead of Earnings",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f386da1b4b8b7324957f4dddf2c5ba94e7be038709857f7fc8425b22a57e5baa",
        "datetime": 1785909900
      },
      {
        "headline": "Is SK Hynix Quietly Winning the AI Memory Supercycle Against Micron and Sandisk?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cc84b53bd5b9e966f9c39ab1232d3d1a5b2cfea090e34f293e9da7b31802eb0f",
        "datetime": 1785903600
      },
      {
        "headline": "Whale Rock’s AI Bet Turns Volatile: July Losses Erase Half of 2026 Gains",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9e06ef3c1392e2e5b72cd14b349b95114b4fb42b6754f5276b231cdd5f27422b",
        "datetime": 1785896564
      }
    ],
    "_fetched_at": 1785931279.535438,
    "_updated_label": "2026-08-05 21:02"
  },
  "WDC": {
    "nextEarnings": {
      "date": "2026-08-05",
      "hour": "amc",
      "epsEstimate": 3.3281
    },
    "news": [
      {
        "headline": "Western Digital (WDC) Could Be 66% Overvalued On Earnings Week Optimism",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=246253cac9bc668bdbb7ff902d789478d2d258a76fcce351447845cbacbab0b6",
        "datetime": 1785906721
      },
      {
        "headline": "Western Digital: Sold Out, De-Levered, And Walking Into FQ4 With Momentum",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=2b3d9b0a749a68be31b3b09e047bd3dc12dff4390b52ed26f3e50075fed236e4",
        "datetime": 1785903629
      },
      {
        "headline": "Sandisk and Western Digital Are Set to Report Earnings Soon. Here’s What to Expect",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6d5ab7cb7f3ff79005f6d2b04793cd5e224bd4a642a73b0e09c222f8ba94af98",
        "datetime": 1785881441
      },
      {
        "headline": "SK hynix, Sandisk race to fix AI’s next chip bottleneck",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=34e4613a98ba74bef96b87c2ab382461eee34c7fbe8cedf760f4242c4500901d",
        "datetime": 1785870780
      },
      {
        "headline": "Buy Western Digital (WDC) Stock as Q4 Earnings Approach?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=283cb4667395e892a223a8957e791d452738397cd587e8abaeaf72b663dbc852",
        "datetime": 1785866880
      }
    ],
    "_fetched_at": 1785931279.535438,
    "_updated_label": "2026-08-05 21:02"
  }
};
