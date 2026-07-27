// 자동 생성 파일 - buy_signal_telegram.py 실행 시마다 갱신됨. 직접 수정하지 마세요.
// Finnhub 실적 캘린더 + 회사 뉴스 헤드라인. 이 파일이 없어도 대시보드는 정상 동작함(해당 섹션만 숨김).
const NEWS_DATA = {
  "NVDA": {
    "nextEarnings": {
      "date": "2026-08-26",
      "hour": "amc",
      "epsEstimate": 2.1269
    },
    "news": [
      {
        "headline": "Fed Chair Kevin Warsh Sends a Clear Signal on Where Interest Rates Are Headed",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ce3dfc4fa97a3dbbf2ad62edfb4f57d5a5d33fef66518ef440e453390abcf51d",
        "datetime": 1785059280
      },
      {
        "headline": "Down 30% on the Year, Is Tesla Stock a Buy On This Latest Dip?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a59af45c718c603191be15d70c456ad8b7c49f15e2e6beee6166f2a8cace2c2a",
        "datetime": 1785058800
      },
      {
        "headline": "Should You Buy Sandisk Stock Before It Reports Earnings on Aug. 5?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6bc1d84411d39b727f02aa1a86ab55aee933872be490c0ab935c47b2be9e7b9a",
        "datetime": 1785058500
      },
      {
        "headline": "1 Reason the Crowd Is Wrong to Ignore Royal Caribbean Before July 28",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=035de823c651c7f7c7f263d6790eea4835b47874fb5a32e0e8ac6c63f5789d61",
        "datetime": 1785058020
      },
      {
        "headline": "Blue Origin Raised $10 Billion at a $130 Billion Valuation Under Jeff Bezos",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=dac5655af0bf94755bcf4eae9b61d49006d56025740890e87933751e275a8fe1",
        "datetime": 1785057900
      }
    ],
    "_fetched_at": 1785067201.3120117,
    "_updated_label": "2026-07-26 21:00"
  },
  "AAPL": {
    "nextEarnings": {
      "date": "2026-07-30",
      "hour": "amc",
      "epsEstimate": 1.9299
    },
    "news": [
      {
        "headline": "Warren Buffett's Successor, Greg Abel, Tripled Berkshire's Stake in This Megacap AI Stock (Hint: Not Apple)",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9f9dfd60aab992facc87563aabfdc193cbe3aed5ffa10f8d066a42ab2bfc424a",
        "datetime": 1785056880
      },
      {
        "headline": "Wall Street Week Ahead",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=aa93f6b650dcda9f8826f3f7390c5a02e2548ec74e81335b1ebe7541cf3f7d9d",
        "datetime": 1785048021
      },
      {
        "headline": "Second Largest Negative Signal Of 2026: Bubbles, Barrels, And Skew",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=edc186f6a27ba872b896e076799fb59bcd37ee72a388078b83b613b95ecc3c78",
        "datetime": 1785046404
      },
      {
        "headline": "Morgan Stanley resets Microsoft stock forecast ahead of earnings",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=dd8f30d99f7dd10b75cb0732cd3c1fcfd5d5d1f045915dbf327ff7d61a7b5ac3",
        "datetime": 1785043020
      },
      {
        "headline": "Tracking Cliff Asness' AQR Capital Management 13F Portfolio - Q1 2026 Update",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=b7c7414f5a348862645b4262f9b2682c8f76756b22f3a176a5c98e31a4b1d284",
        "datetime": 1785018522
      }
    ],
    "_fetched_at": 1785067201.3120117,
    "_updated_label": "2026-07-26 21:00"
  },
  "GOOGL": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "amc",
      "epsEstimate": 3.0933
    },
    "news": [
      {
        "headline": "The 8 Best Stocks to Buy on Alphabet's Surging Capex",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e035ad4b56ec429602d72026096c924faab05886d0aadefe8487f88d453d05d0",
        "datetime": 1785057600
      },
      {
        "headline": "Warren Buffett's Successor, Greg Abel, Tripled Berkshire's Stake in This Megacap AI Stock (Hint: Not Apple)",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9f9dfd60aab992facc87563aabfdc193cbe3aed5ffa10f8d066a42ab2bfc424a",
        "datetime": 1785056880
      },
      {
        "headline": "Alphabet Just Delivered a Piece of AI-Related News That Sent Its Stock Tumbling. Should You Buy the Dip, or Run for the Hills?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2c550459e51e778196697072669cf3d6e1b3e9d50ace8560489448793c683995",
        "datetime": 1785055140
      },
      {
        "headline": "Alphabet: Wall Street Is Being Ridiculous - Elevated CapEx Is A Buying Opportunity",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=8f812b94734324a82e0dfb5ca92b05a6fad67749cb3675ddc395c9ce2f023ba4",
        "datetime": 1785051000
      },
      {
        "headline": "Morgan Stanley resets Microsoft stock forecast ahead of earnings",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=dd8f30d99f7dd10b75cb0732cd3c1fcfd5d5d1f045915dbf327ff7d61a7b5ac3",
        "datetime": 1785043020
      }
    ],
    "_fetched_at": 1785067201.3120117,
    "_updated_label": "2026-07-26 21:00"
  },
  "MSFT": {
    "nextEarnings": {
      "date": "2026-07-29",
      "hour": "amc",
      "epsEstimate": 4.3277
    },
    "news": [
      {
        "headline": "Which Is the Better Value Stock Right Now: Microsoft or Nvidia?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=806c81fe02efa14402c325dd53c18edd8e28f80c91b83bef6e18ebfe45000f10",
        "datetime": 1785051300
      },
      {
        "headline": "3M (MMM) Teams Up With Microsoft To Bring Optical Tech Into Azure AI Data Centers",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=61add9ef166c1e4d1f453388adafbad4881de02d6b98860ff4bca561f39c152a",
        "datetime": 1785049708
      },
      {
        "headline": "Wall Street Week Ahead",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=aa93f6b650dcda9f8826f3f7390c5a02e2548ec74e81335b1ebe7541cf3f7d9d",
        "datetime": 1785048021
      },
      {
        "headline": "Second Largest Negative Signal Of 2026: Bubbles, Barrels, And Skew",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=edc186f6a27ba872b896e076799fb59bcd37ee72a388078b83b613b95ecc3c78",
        "datetime": 1785046404
      },
      {
        "headline": "Morgan Stanley resets Microsoft stock forecast ahead of earnings",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=dd8f30d99f7dd10b75cb0732cd3c1fcfd5d5d1f045915dbf327ff7d61a7b5ac3",
        "datetime": 1785043020
      }
    ],
    "_fetched_at": 1785067201.3120117,
    "_updated_label": "2026-07-26 21:00"
  },
  "AMZN": {
    "nextEarnings": {
      "date": "2026-07-30",
      "hour": "amc",
      "epsEstimate": 1.8556
    },
    "news": [
      {
        "headline": "Blue Origin Raised $10 Billion at a $130 Billion Valuation Under Jeff Bezos",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=dac5655af0bf94755bcf4eae9b61d49006d56025740890e87933751e275a8fe1",
        "datetime": 1785057900
      },
      {
        "headline": "Should You Buy SpaceX Stock Before Aug. 4?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a7ae94bd180fb7970768f2193aeebd4b356ad7f547b1669113273ad8d98e7847",
        "datetime": 1785053460
      },
      {
        "headline": "Wall Street Week Ahead",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=aa93f6b650dcda9f8826f3f7390c5a02e2548ec74e81335b1ebe7541cf3f7d9d",
        "datetime": 1785048021
      },
      {
        "headline": "Should You Buy Amazon Stock Before July 30?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6ab2b60fd8bba8dd2672fd55eb1c1a01bb07bc1b96d65197d7dcd8ade542f0a0",
        "datetime": 1785046800
      },
      {
        "headline": "Second Largest Negative Signal Of 2026: Bubbles, Barrels, And Skew",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=edc186f6a27ba872b896e076799fb59bcd37ee72a388078b83b613b95ecc3c78",
        "datetime": 1785046404
      }
    ],
    "_fetched_at": 1785067201.3120117,
    "_updated_label": "2026-07-26 21:00"
  },
  "TSM": {
    "nextEarnings": {
      "date": "2026-10-14",
      "hour": "amc",
      "epsEstimate": 26.4094
    },
    "news": [
      {
        "headline": "Wall Street Week Ahead",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=aa93f6b650dcda9f8826f3f7390c5a02e2548ec74e81335b1ebe7541cf3f7d9d",
        "datetime": 1785048021
      },
      {
        "headline": "TSMC: I Was Wrong",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=0963c13bf24e2150482538cd32c2970ba2166318ac488968c5623f25c57d6109",
        "datetime": 1784970000
      },
      {
        "headline": "TSMC Is A Far Safer Buy Than Fabless Giants",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=ab9e160b07a3a0b98fc3503c0ebae9096456532cc891d113123c3154537a51ff",
        "datetime": 1784945850
      },
      {
        "headline": "10 Information Technology Stocks Whale Activity In Today’s Session",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=bb8c19ab4a0bcc9928510750068a4d6b634e4fa5ee118aeda1be64d6f234df8d",
        "datetime": 1784900131
      },
      {
        "headline": "Intel Stock Slips Despite Blowout Quarter: Here's What 4 Analysts Are Saying",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=469cd2ee60efe9ca6d59ec8eb83be56d220b27a833363c18eb4d00fdff0d32e0",
        "datetime": 1784894564
      }
    ],
    "_fetched_at": 1785067201.3120117,
    "_updated_label": "2026-07-26 21:00"
  },
  "AVGO": {
    "nextEarnings": {
      "date": "2026-09-02",
      "hour": "amc",
      "epsEstimate": 3.3012
    },
    "news": [
      {
        "headline": "Tracking Cliff Asness' AQR Capital Management 13F Portfolio - Q1 2026 Update",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=b7c7414f5a348862645b4262f9b2682c8f76756b22f3a176a5c98e31a4b1d284",
        "datetime": 1785018522
      },
      {
        "headline": "U.S. Memory Stock Pullback May Offer Investors a Fresh Buying Opportunity",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d93647a7f5bc09722698227ae7b29bb49e1582547081765c5d593b5f50baeda0",
        "datetime": 1784984400
      },
      {
        "headline": "What Moved Markets This Week",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=30c853daab5af443ab8a0c8862a8b56eabb48569926bf56471b440d71080bbab",
        "datetime": 1784970358
      },
      {
        "headline": "Alphabet: Won't Be This Cheap For Long",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=6d96bbc8dddb829c9e64397d2c1ba856a743ffce1da45a90e8bba097b884544a",
        "datetime": 1784970000
      },
      {
        "headline": "Samsung and SK Hynix unveil $950 billion US chip supply partnerships",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2654ca3f06992ed5ed1194a4c6be1b0fa1fa53deecd1f89923f186b8f4b03a83",
        "datetime": 1784965727
      }
    ],
    "_fetched_at": 1785067201.3120117,
    "_updated_label": "2026-07-26 21:00"
  },
  "META": {
    "nextEarnings": {
      "date": "2026-07-29",
      "hour": "amc",
      "epsEstimate": 7.3817
    },
    "news": [
      {
        "headline": "Alphabet: Wall Street Is Being Ridiculous - Elevated CapEx Is A Buying Opportunity",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=8f812b94734324a82e0dfb5ca92b05a6fad67749cb3675ddc395c9ce2f023ba4",
        "datetime": 1785051000
      },
      {
        "headline": "Wall Street Week Ahead",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=aa93f6b650dcda9f8826f3f7390c5a02e2548ec74e81335b1ebe7541cf3f7d9d",
        "datetime": 1785048021
      },
      {
        "headline": "Second Largest Negative Signal Of 2026: Bubbles, Barrels, And Skew",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=edc186f6a27ba872b896e076799fb59bcd37ee72a388078b83b613b95ecc3c78",
        "datetime": 1785046404
      },
      {
        "headline": "Morgan Stanley resets Microsoft stock forecast ahead of earnings",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=dd8f30d99f7dd10b75cb0732cd3c1fcfd5d5d1f045915dbf327ff7d61a7b5ac3",
        "datetime": 1785043020
      },
      {
        "headline": "eBay (EBAY) Faces A New Seller Threat As Meta Launches Marketplace App",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=77fd2df94c4f5906e12a83f114dffdcc6c131b69c463692451332a9138be7c64",
        "datetime": 1785024978
      }
    ],
    "_fetched_at": 1785067201.3120117,
    "_updated_label": "2026-07-26 21:00"
  },
  "TSLA": {
    "nextEarnings": {
      "date": "2026-10-20",
      "hour": "amc",
      "epsEstimate": 0.5111
    },
    "news": [
      {
        "headline": "Down 30% on the Year, Is Tesla Stock a Buy On This Latest Dip?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a59af45c718c603191be15d70c456ad8b7c49f15e2e6beee6166f2a8cace2c2a",
        "datetime": 1785058800
      },
      {
        "headline": "Morgan Stanley resets Microsoft stock forecast ahead of earnings",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=dd8f30d99f7dd10b75cb0732cd3c1fcfd5d5d1f045915dbf327ff7d61a7b5ac3",
        "datetime": 1785043020
      },
      {
        "headline": "Cathie Wood buys $50.1 million of tumbling megacap stock",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=40fc62ad2d6b29aef6c8657435464b017bda70fa95605e885ad095f8f29d5bf8",
        "datetime": 1785034020
      },
      {
        "headline": "Top 3 US Stock Market Stories From This Week",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e9b3b6495eb7c96a8d19fb3458285fd7ad781c4a98052844d6b3fe965eddf097",
        "datetime": 1785015677
      },
      {
        "headline": "Ranking the Best \"Magnificent Seven\" Stocks to Buy Right Now",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=250fd0f3649acd5d54fcb787b66d4b3ef9a2999f945bd3170602c3f37047e02c",
        "datetime": 1785009000
      }
    ],
    "_fetched_at": 1785067201.3120117,
    "_updated_label": "2026-07-26 21:00"
  },
  "MU": {
    "nextEarnings": {
      "date": "2026-09-21",
      "hour": "amc",
      "epsEstimate": 32.2476
    },
    "news": [
      {
        "headline": "Should You Buy Sandisk Stock Before It Reports Earnings on Aug. 5?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6bc1d84411d39b727f02aa1a86ab55aee933872be490c0ab935c47b2be9e7b9a",
        "datetime": 1785058500
      },
      {
        "headline": "Second Largest Negative Signal Of 2026: Bubbles, Barrels, And Skew",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=edc186f6a27ba872b896e076799fb59bcd37ee72a388078b83b613b95ecc3c78",
        "datetime": 1785046404
      },
      {
        "headline": "Prediction: Micron Stock Will Return to All-Time Highs Soon",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d72c509ae0f7eb1c9fbe3944c0392c86dcfd6aa0a8c25b7c2f5f4619c0637ae9",
        "datetime": 1785044100
      },
      {
        "headline": "CXMT set for historic Shanghai debut after $9.8 billion IPO",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=723c7fb4796758121563432dfb4b48b33b8aa375fbd4a9f2c98b019e53293c5c",
        "datetime": 1785040602
      },
      {
        "headline": "Memory Frenzy Primes China Champion CXMT for Historic Debut",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4c1e2a0e593ad6995f16ea42ec30182323a88183d8b881f4630cb2dfe258853e",
        "datetime": 1785024000
      }
    ],
    "_fetched_at": 1785067201.3120117,
    "_updated_label": "2026-07-26 21:00"
  },
  "AMD": {
    "nextEarnings": {
      "date": "2026-08-04",
      "hour": "amc",
      "epsEstimate": 1.6273
    },
    "news": [
      {
        "headline": "Supermicro (SMCI) Launches H15 Servers With 72 GPU AI Training Platform",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cb213ad00a301e6579fd1c2ff7b8a147c3fa13545d7f5a8d6d7e993c96a1f002",
        "datetime": 1785024999
      },
      {
        "headline": "Nvidia vs. AMD vs. Intel: Which One Actually Won the AI Chip Race in the First Half of 2026?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2e0ce0af0cb6d6e484bd1967691b52b4c7e18e88397cae72c2311d00121f5c46",
        "datetime": 1785021600
      },
      {
        "headline": "Got $100? 1 Artificial Intelligence (AI) Memory ETF to Buy Right Now.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=225bf8e13b69a75b507b78c71599807e39d1d284c0c6e178f287784353ae258a",
        "datetime": 1785000660
      },
      {
        "headline": "Bank of America revamps AMD stock price target for 2026",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0ca4f9feaa09a3c47a0adc3f19d88cc23fb8960d3f9747a955a38e9f7bc528cd",
        "datetime": 1784996220
      },
      {
        "headline": "This Eric Trump-Backed Startup Just Got AMD's Chips for Its Humanoid Robots— Now It's Building Military Versions Too, Reviving Conflict-Of-Interest Fears",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9958e6c72201e9c45d37c5557f1993146910fe12bf833495dd717599af59f8e8",
        "datetime": 1784989815
      }
    ],
    "_fetched_at": 1785067201.3120117,
    "_updated_label": "2026-07-26 21:00"
  },
  "INTC": {
    "nextEarnings": {
      "date": "2026-10-21",
      "hour": "amc",
      "epsEstimate": 0.2659
    },
    "news": [
      {
        "headline": "Second Largest Negative Signal Of 2026: Bubbles, Barrels, And Skew",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=edc186f6a27ba872b896e076799fb59bcd37ee72a388078b83b613b95ecc3c78",
        "datetime": 1785046404
      },
      {
        "headline": "Intel: Grotesque Valuation",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=33a5cb27920ab47a61c7af9f8e2f39cf191eda13985f61718e63931d88c6e7ce",
        "datetime": 1785042763
      },
      {
        "headline": "Intel CEO Lip-Bu Tan Warns AI Supply Crunch Won't Ease: Shortages Will 'Persist for the Foreseeable Future'",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3f66a6d82d67e591334bb3567ee658ccd226aec5f29f2742ae74ab23047ed07c",
        "datetime": 1785029420
      },
      {
        "headline": "Nvidia vs. AMD vs. Intel: Which One Actually Won the AI Chip Race in the First Half of 2026?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2e0ce0af0cb6d6e484bd1967691b52b4c7e18e88397cae72c2311d00121f5c46",
        "datetime": 1785021600
      },
      {
        "headline": "Goldman delivers a candid response after Intel's stunning quarter",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=96d1a90549e7716dec5a17496302d1630f2b69d026427a5d9bc56468332dda38",
        "datetime": 1785008220
      }
    ],
    "_fetched_at": 1785067201.3120117,
    "_updated_label": "2026-07-26 21:00"
  },
  "WMT": {
    "nextEarnings": {
      "date": "2026-08-20",
      "hour": "",
      "epsEstimate": 0.7503
    },
    "news": [
      {
        "headline": "Tracking Cliff Asness' AQR Capital Management 13F Portfolio - Q1 2026 Update",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=b7c7414f5a348862645b4262f9b2682c8f76756b22f3a176a5c98e31a4b1d284",
        "datetime": 1785018522
      },
      {
        "headline": "The real welfare queen': Sanders says Walmart spent $37.6B on buybacks as workers rely on Medicaid and SNAP",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7a39300f032089a6402d28de12effbe57e2a02da8845e4b34cca9a1ace3b4921",
        "datetime": 1784986200
      },
      {
        "headline": "Walmart and the Walmart Foundation Announce $500,000 Commitment to West Virginia Flood Relief",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7fa4d10001cd647eec8abfb9c4c7cfe073c471d89ec5bcaaf85f5213aa5dc176",
        "datetime": 1784930040
      },
      {
        "headline": "Amazon stock slides as Prime Day data reveals shopper shift ahead of earnings",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=32c5c0e62ea30f7a8616efa90d5108b63c972aeceff9e084f8137510de957b93",
        "datetime": 1784917020
      },
      {
        "headline": "EBAY Showered Owners With Cash. The Stock Did Not Cooperate",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ef261f028a4ed0154a873309681aa29145fa804570dfc4ff7f616e5e21f7d6b5",
        "datetime": 1784912912
      }
    ],
    "_fetched_at": 1785067201.3120117,
    "_updated_label": "2026-07-26 21:00"
  },
  "AMAT": {
    "nextEarnings": {
      "date": "2026-08-13",
      "hour": "amc",
      "epsEstimate": 3.462
    },
    "news": [
      {
        "headline": "KLA's Q4 Earnings Loom: Buy, Sell or Hold the KLAC Stock?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=43b06a589a54d6e311bb03ff46ce9a653005fe9a4d75ee03d6241d6fb4acb7a5",
        "datetime": 1784906040
      },
      {
        "headline": "AMAT vs. Q: Which Advanced Packaging Stock is a Safer Bet Right Now?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cfe8f4773834018acc7ede5356a30ee2480226c902f9471b26c6b75d6a924eb1",
        "datetime": 1784904720
      },
      {
        "headline": "LRCX Poised for a Q4 Earnings Surprise: Should You Buy the Stock Now?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=eef50845342d98b975c7facbc2c78dd865fc9a3c0f5f1c2af92be436b610aa6b",
        "datetime": 1784897040
      },
      {
        "headline": "This AI Stock Needs to Cool Off After Gaining More Than 200% Year to Date",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a5c2603c0b216a13ac363e8153a894e286ade188232d5cf8eb2705c434c47497",
        "datetime": 1784880420
      },
      {
        "headline": "AMSL, AMAT, KLAC, LRCX: Chipmaking Equipment Stocks Rise On Intel’s CapEx Bump",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c96648bfcfc9ac47365025f7ce7a522add50427459950a7b09021f695e175f83",
        "datetime": 1784861073
      }
    ],
    "_fetched_at": 1785067201.3120117,
    "_updated_label": "2026-07-26 21:00"
  },
  "QQQ": {
    "nextEarnings": null,
    "news": [
      {
        "headline": "Second Largest Negative Signal Of 2026: Bubbles, Barrels, And Skew",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=edc186f6a27ba872b896e076799fb59bcd37ee72a388078b83b613b95ecc3c78",
        "datetime": 1785046404
      },
      {
        "headline": "Flash PMIs Signal Faster Growth Across Major Developed Economies, But Supply Chain And Price Concerns Cloud Outlook",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=5d84c5c7d910db8e73bea71d1d06cfabd4000843b43f67ab3d6eb31cd7132d46",
        "datetime": 1785032400
      },
      {
        "headline": "The AI Capex Bill Comes Due",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=ea902e4b94087efc5ca609036cd653c160faba97a84d503e0330316c1d3d07ca",
        "datetime": 1785029700
      },
      {
        "headline": "Figuring Out The Fed",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=f7076e84346ad680eb24684f1b36777abe1057399dfab31226483489e401a404",
        "datetime": 1785025800
      },
      {
        "headline": "Thinking About The Semiconductor Pullback And Positioning",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=03f59e2d9a71b788984f43170d3164cd4fddc160d27e060b009375b12855840a",
        "datetime": 1784977166
      }
    ],
    "_fetched_at": 1785067201.3120117,
    "_updated_label": "2026-07-26 21:00"
  },
  "SPY": {
    "nextEarnings": null,
    "news": [
      {
        "headline": "Second Largest Negative Signal Of 2026: Bubbles, Barrels, And Skew",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=edc186f6a27ba872b896e076799fb59bcd37ee72a388078b83b613b95ecc3c78",
        "datetime": 1785046404
      },
      {
        "headline": "Flash PMIs Signal Faster Growth Across Major Developed Economies, But Supply Chain And Price Concerns Cloud Outlook",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=5d84c5c7d910db8e73bea71d1d06cfabd4000843b43f67ab3d6eb31cd7132d46",
        "datetime": 1785032400
      },
      {
        "headline": "The AI Capex Bill Comes Due",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=ea902e4b94087efc5ca609036cd653c160faba97a84d503e0330316c1d3d07ca",
        "datetime": 1785029700
      },
      {
        "headline": "Figuring Out The Fed",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=f7076e84346ad680eb24684f1b36777abe1057399dfab31226483489e401a404",
        "datetime": 1785025800
      },
      {
        "headline": "RPG: Pure Momentum, Not Pure Growth, Is Driving This Year's Exceptional Gains",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=bcca74dc2a54d1fb024472418762c413b3fcb91ff517f4cc18d9984ecb992063",
        "datetime": 1785020100
      }
    ],
    "_fetched_at": 1785067201.3120117,
    "_updated_label": "2026-07-26 21:00"
  }
};
