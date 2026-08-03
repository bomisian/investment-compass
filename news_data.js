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
        "headline": "Explore the top gainers and losers within the dow jones index in today's session.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=d7000975030194dacb6dbca0963193b3e61fb15dfcd3a7bb0f1be8d824315ad1",
        "datetime": 1785784205
      },
      {
        "headline": "Stay informed about the most active stocks in the S&P500 index on Monday's session.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=3f902903dfb474ff36920d42484cf6d8a2b0006ffdc1101ff1deb02f3916e77c",
        "datetime": 1785780300
      },
      {
        "headline": "Monday's session: most active stocks",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=4aa057b760003fee339e3dfef3ea846f2d999a0d928cdb7e5294a98e8ad1df49",
        "datetime": 1785780000
      },
      {
        "headline": "This Boring Company Has Hiked Its Dividend for 71 Straight Years, and It's an Income Investor's Dream",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=29591faacd358065ef8525281994097c7a96c604462e968efb04acb1bfb19b6e",
        "datetime": 1785779400
      },
      {
        "headline": "Is Eli Lilly Stock Running out of Steam?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=da1ddc0c292bad7c6ad06572bb50752463234a2ffca12103a3663ae056853d51",
        "datetime": 1785779350
      }
    ],
    "_fetched_at": 1785787202.099543,
    "_updated_label": "2026-08-04 05:01"
  },
  "AAPL": {
    "nextEarnings": {
      "date": "2026-10-28",
      "hour": "amc",
      "epsEstimate": 2.0468
    },
    "news": [
      {
        "headline": "Explore the top gainers and losers within the dow jones index in today's session.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=d7000975030194dacb6dbca0963193b3e61fb15dfcd3a7bb0f1be8d824315ad1",
        "datetime": 1785784205
      },
      {
        "headline": "Stay informed about the most active stocks in the S&P500 index on Monday's session.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=3f902903dfb474ff36920d42484cf6d8a2b0006ffdc1101ff1deb02f3916e77c",
        "datetime": 1785780300
      },
      {
        "headline": "Apple Stock Dips After European Commission Reveals April Acquisition",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f03d73b64cdb1d53d81780ba92e72c1f01a6d64ec14fe34442a0c870dd6c3939",
        "datetime": 1785779596
      },
      {
        "headline": "The ‘Nvidia Tax’: Alphabet Mitigates It Better Than Amazon or Any Other Mag 7 Stock",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c5d0b551fd47c275cf9db9925b2e4c3b4402c1280c8129f719f7968dc5c1e13f",
        "datetime": 1785777031
      },
      {
        "headline": "Stock Market Today: Dow Jumps 600 Points On Trump Strikes Reversal; Oil Prices Plunge (Live Coverage)",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ad9d450feda6978d6c374b0689e9bc8e63f8464d5cc0bfbb4f8587674ef3c471",
        "datetime": 1785776738
      }
    ],
    "_fetched_at": 1785787202.099543,
    "_updated_label": "2026-08-04 05:01"
  },
  "GOOGL": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "amc",
      "epsEstimate": 3.1009
    },
    "news": [
      {
        "headline": "Explore the top gainers and losers within the dow jones index in today's session.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=d7000975030194dacb6dbca0963193b3e61fb15dfcd3a7bb0f1be8d824315ad1",
        "datetime": 1785784205
      },
      {
        "headline": "Microsoft Just Proved that AI Spending Can Pay Off. Here's How the Company Separates Itself From Other AI Stocks.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b032c49beda7a2438cff12dde40bf436374882f07ce8f43811ccf0663049ddc2",
        "datetime": 1785778500
      },
      {
        "headline": "Why Alphabet Stock Popped Today",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fbe3ed87ed8ade2fddf40420da15a3735454c6475d2ceae04ef9de4e1b74f0c4",
        "datetime": 1785778351
      },
      {
        "headline": "Amazon Tops $3T, Meta Rallies 7% as AI Hyperscalers Ride Earnings Momentum",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a84b884c005c12154ca3456a0c28183c6e3ef44e45719fe7654d3fa5c7906578",
        "datetime": 1785778288
      },
      {
        "headline": "GOOGL Stock Gains Over 5%: Google Locks Major Long-Term Solar Power Deal With RWE — Retail Sees An AI Infrastructure Play",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=be7a67c98d42bb97025297185dd7890aba494e9fb2bf93b98d657191b76ccac1",
        "datetime": 1785778249
      }
    ],
    "_fetched_at": 1785787202.099543,
    "_updated_label": "2026-08-04 05:00"
  },
  "MSFT": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "",
      "epsEstimate": 4.7263
    },
    "news": [
      {
        "headline": "Explore the top gainers and losers within the dow jones index in today's session.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=d7000975030194dacb6dbca0963193b3e61fb15dfcd3a7bb0f1be8d824315ad1",
        "datetime": 1785784205
      },
      {
        "headline": "Stay informed about the most active stocks in the S&P500 index on Monday's session.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=3f902903dfb474ff36920d42484cf6d8a2b0006ffdc1101ff1deb02f3916e77c",
        "datetime": 1785780300
      },
      {
        "headline": "BUILDSTR Acquires Senzu Cloud, Expanding Engineering Depth and Global Reach",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=387282995f89b4c596d9358f5a3834ec60d728f9e61ab8a4f1aee8b2055ad9a1",
        "datetime": 1785779700
      },
      {
        "headline": "Microsoft Just Proved that AI Spending Can Pay Off. Here's How the Company Separates Itself From Other AI Stocks.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b032c49beda7a2438cff12dde40bf436374882f07ce8f43811ccf0663049ddc2",
        "datetime": 1785778500
      },
      {
        "headline": "Amazon Tops $3T, Meta Rallies 7% as AI Hyperscalers Ride Earnings Momentum",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a84b884c005c12154ca3456a0c28183c6e3ef44e45719fe7654d3fa5c7906578",
        "datetime": 1785778288
      }
    ],
    "_fetched_at": 1785787202.099543,
    "_updated_label": "2026-08-04 05:00"
  },
  "AMZN": {
    "nextEarnings": {
      "date": "2026-10-28",
      "hour": "amc",
      "epsEstimate": 1.9445
    },
    "news": [
      {
        "headline": "Explore the top gainers and losers within the dow jones index in today's session.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=d7000975030194dacb6dbca0963193b3e61fb15dfcd3a7bb0f1be8d824315ad1",
        "datetime": 1785784205
      },
      {
        "headline": "Stay informed about the most active stocks in the S&P500 index on Monday's session.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=3f902903dfb474ff36920d42484cf6d8a2b0006ffdc1101ff1deb02f3916e77c",
        "datetime": 1785780300
      },
      {
        "headline": "Monday's session: most active stocks",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=4aa057b760003fee339e3dfef3ea846f2d999a0d928cdb7e5294a98e8ad1df49",
        "datetime": 1785780000
      },
      {
        "headline": "Amazon Tops $3T, Meta Rallies 7% as AI Hyperscalers Ride Earnings Momentum",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a84b884c005c12154ca3456a0c28183c6e3ef44e45719fe7654d3fa5c7906578",
        "datetime": 1785778288
      },
      {
        "headline": "Wall Street Raises Amazon Targets After Its AWS Surge. Here’s The Number.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a0f0f1f8a0d864265390eb59c843725463b5603b40570485f07855ef9a2e4651",
        "datetime": 1785778223
      }
    ],
    "_fetched_at": 1785787202.099543,
    "_updated_label": "2026-08-04 05:01"
  },
  "TSM": {
    "nextEarnings": {
      "date": "2026-10-14",
      "hour": "amc",
      "epsEstimate": 28.8828
    },
    "news": [
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
      }
    ],
    "_fetched_at": 1785787202.099543,
    "_updated_label": "2026-08-04 05:02"
  },
  "AVGO": {
    "nextEarnings": {
      "date": "2026-09-02",
      "hour": "amc",
      "epsEstimate": 3.3012
    },
    "news": [
      {
        "headline": "This ETF, The IBD Stock Of The Day, Breaks Out As Cybersecurity Stocks Rebound",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ed7d270fdfa421442ab6eb8a6acd8a5a02da5b96b55f29d9a350ac3213dc7aa6",
        "datetime": 1785778850
      },
      {
        "headline": "Can Strong Data Center Revenues Boost AMD's Top Line in Q2 Earnings?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e767c30009d323d3a1b2c0d4aaea02750472432e4c87b595ac11944833cf1b9b",
        "datetime": 1785772560
      },
      {
        "headline": "The Market Is Missing a Huge Opportunity in NVIDIA, Micron, and Broadcom",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=467a7b5860f3b9590bfbc35fedcf2e9e1338b5d69b27b7e624dacd0ad1705a68",
        "datetime": 1785765620
      },
      {
        "headline": "Elon Musk Says AI Is A 'Supersonic Tsunami.' Wall Street Is Worried About The Bill",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=c6480f4dd35e2463f17542ee66ed63e26666b3ca11c61c4b5439981035376512",
        "datetime": 1785761899
      },
      {
        "headline": "Semiconductor ETF SOXX’s Worst Month Since 2002: 'A Significant Discount,' Ed Yardeni Says",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=adeef272a4572b60de9796478e0c855429539583bc46e9b24e6cc669be7ad2cd",
        "datetime": 1785760153
      }
    ],
    "_fetched_at": 1785787202.099543,
    "_updated_label": "2026-08-04 05:02"
  },
  "META": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "amc",
      "epsEstimate": 7.1215
    },
    "news": [
      {
        "headline": "Microsoft Just Proved that AI Spending Can Pay Off. Here's How the Company Separates Itself From Other AI Stocks.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b032c49beda7a2438cff12dde40bf436374882f07ce8f43811ccf0663049ddc2",
        "datetime": 1785778500
      },
      {
        "headline": "Amazon Tops $3T, Meta Rallies 7% as AI Hyperscalers Ride Earnings Momentum",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a84b884c005c12154ca3456a0c28183c6e3ef44e45719fe7654d3fa5c7906578",
        "datetime": 1785778288
      },
      {
        "headline": "The ‘Nvidia Tax’: Alphabet Mitigates It Better Than Amazon or Any Other Mag 7 Stock",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c5d0b551fd47c275cf9db9925b2e4c3b4402c1280c8129f719f7968dc5c1e13f",
        "datetime": 1785777031
      },
      {
        "headline": "Cathie Wood Just Bet $26 Million on SpaceX Days Before Earnings",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5246c78ae05c29fb4a17cf39c2fd6c6131040995bcdf19c6081dd87ac3c72757",
        "datetime": 1785776204
      },
      {
        "headline": "How the S&P 500 Survives a Chip Meltdown Without Falling Into a Bear Market",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=22f46e952e89e3556bbb7cbdff08d7b03a2db30389f9d64344d14d7c889ac5a4",
        "datetime": 1785775800
      }
    ],
    "_fetched_at": 1785787202.099543,
    "_updated_label": "2026-08-04 05:01"
  },
  "TSLA": {
    "nextEarnings": {
      "date": "2026-10-20",
      "hour": "amc",
      "epsEstimate": 0.4492
    },
    "news": [
      {
        "headline": "Stay informed about the most active stocks in the S&P500 index on Monday's session.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=3f902903dfb474ff36920d42484cf6d8a2b0006ffdc1101ff1deb02f3916e77c",
        "datetime": 1785780300
      },
      {
        "headline": "Veteran Analyst Flags Tesla Stock's Next Critical Test",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5a0d19e224ca14bfd0d3678a0ac7b7827db7ed4cb1118f0679332f67e59801d4",
        "datetime": 1785779507
      },
      {
        "headline": "The ‘Nvidia Tax’: Alphabet Mitigates It Better Than Amazon or Any Other Mag 7 Stock",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c5d0b551fd47c275cf9db9925b2e4c3b4402c1280c8129f719f7968dc5c1e13f",
        "datetime": 1785777031
      },
      {
        "headline": "Cathie Wood Just Bet $26 Million on SpaceX Days Before Earnings",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5246c78ae05c29fb4a17cf39c2fd6c6131040995bcdf19c6081dd87ac3c72757",
        "datetime": 1785776204
      },
      {
        "headline": "Elon Musk Backs Bullish View On SPCX’s ‘Insane’ Opportunity – Wall Street Sees Attractive Valuation in SpaceX Despite Lock-Up Overhang",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b29ceaa5fb3251504c2b4897b77d313b920482356931cc2f85650815ddbc0f37",
        "datetime": 1785775833
      }
    ],
    "_fetched_at": 1785787202.099543,
    "_updated_label": "2026-08-04 05:01"
  },
  "MU": {
    "nextEarnings": {
      "date": "2026-09-21",
      "hour": "amc",
      "epsEstimate": 32.2476
    },
    "news": [
      {
        "headline": "Stay informed about the most active stocks in the S&P500 index on Monday's session.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=3f902903dfb474ff36920d42484cf6d8a2b0006ffdc1101ff1deb02f3916e77c",
        "datetime": 1785780300
      },
      {
        "headline": "Analyst Drops Jaw-Dropping Micron Target Hike With a Catch",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b08f1d086c9c3a734389439beed2ae4c093e19bb808446e4c0620edb06ee5b78",
        "datetime": 1785779437
      },
      {
        "headline": "Why Micron Stock Is Under Pressure Today",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6c6d7cf4665a1f3722942f102e46af59caaf18a68dfa88644eae13a1e9b7177b",
        "datetime": 1785778172
      },
      {
        "headline": "CXMT’s 466% IPO Pop Gives Apple (AAPL) Leverage. Why Micron (MU) Investors Should Stay Patient",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=25477d732e0b693b3fede59d1df3d10e6b23d72f4d4c41d012593fc676c62780",
        "datetime": 1785775571
      },
      {
        "headline": "Amazon, Apple, Micron, Bristol Myers, GameStop, Corning, SpaceX, and More Stocks That Explain Today’s Market",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a9dd6451698f698fe11dfc6686d34f30874ccb8a8b263ec1ccbb6c7a8c580d0d",
        "datetime": 1785775200
      }
    ],
    "_fetched_at": 1785787202.099543,
    "_updated_label": "2026-08-04 05:03"
  },
  "AMD": {
    "nextEarnings": {
      "date": "2026-08-04",
      "hour": "amc",
      "epsEstimate": 1.631
    },
    "news": [
      {
        "headline": "Citi Spots Surprising Winners in Chip Demand Surge",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8a42e6c727bac3ffc0bfa5b682417f4ec5cad7033aa23b3de5a204ddec206af6",
        "datetime": 1785779298
      },
      {
        "headline": "AMD Q2 Earnings Preview: Wall Street Is Watching AMD's Server CPU Push As Lisa Su Eyes A $220B Market",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=74ed98668e4455f34cf5915a26a182cccf41300429bb1c7b7ff94ad7cb688970",
        "datetime": 1785778433
      },
      {
        "headline": "Update: Equities Rise Intraday, Oil Slides Amid Middle East Deal Optimism",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f634952b11666bd4bd4148f5e4ec1439f862d29cf0053e4980e09d93bba623ee",
        "datetime": 1785778272
      },
      {
        "headline": "Nvidia (NVDA) Uses Own Chips for Design, While AMD (AMD) Relies on Rivals",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8c813e909e7c0c5e7535e616f8ef189b5ad97655d0912c7ae2c49b73e8e121e1",
        "datetime": 1785776085
      },
      {
        "headline": "AMD and Texas Instruments Are Getting Support From the Same Trend",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d404e7c4b1209e358b1ad7414ea69b663d2861faf29b2854ce09aedd990948e7",
        "datetime": 1785773770
      }
    ],
    "_fetched_at": 1785787202.099543,
    "_updated_label": "2026-08-04 05:02"
  },
  "INTC": {
    "nextEarnings": {
      "date": "2026-10-21",
      "hour": "amc",
      "epsEstimate": 0.3936
    },
    "news": [
      {
        "headline": "Stay informed about the most active stocks in the S&P500 index on Monday's session.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=3f902903dfb474ff36920d42484cf6d8a2b0006ffdc1101ff1deb02f3916e77c",
        "datetime": 1785780300
      },
      {
        "headline": "Buying Intel Over TSMC Isn’t as Crazy as It Might Seem",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7e45f21e04f36e7e87ddd8614176f3c83733c53f1b849d88b1b394e3c0b19ff0",
        "datetime": 1785773211
      },
      {
        "headline": "AMD Fell: Here Are 3 Reasons I’m Buying Without Fear",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=74868769455a39d713c6939d4daed6edf886079e5af2f4b0ad8b7e10a002c82f",
        "datetime": 1785772791
      },
      {
        "headline": "Can Strong Data Center Revenues Boost AMD's Top Line in Q2 Earnings?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e767c30009d323d3a1b2c0d4aaea02750472432e4c87b595ac11944833cf1b9b",
        "datetime": 1785772560
      },
      {
        "headline": "Trump admin to take $874M in equity stakes in 7 chip companies — experts say it could set bad precedent",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2df6aeb692adeeb5e5bb1d3366698d4612596bd850d0a564fb16e3475092e379",
        "datetime": 1785769200
      }
    ],
    "_fetched_at": 1785787202.099543,
    "_updated_label": "2026-08-04 05:02"
  },
  "AMAT": {
    "nextEarnings": {
      "date": "2026-08-13",
      "hour": "amc",
      "epsEstimate": 3.462
    },
    "news": [
      {
        "headline": "Will Applied Materials (AMAT) Beat Estimates Again in Its Next Earnings Report?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=af3f267560085f0b7c88f5d99945d521e20840803a69a01a47a6c27828f76ea1",
        "datetime": 1785773401
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
      },
      {
        "headline": "Microsoft joins, Broadcom exits Goldman’s top-stocks list",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6d5dea5d514acf65b00583fd0a8cc0080a09578686e11220b95315049c260bed",
        "datetime": 1785754815
      },
      {
        "headline": "Applied Materials: Strong Fundamentals, But I'm Downgrading Ahead Of Earnings",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=9ac93485d4942b126f2d52d23b84b3f38a11efd94c6d8fe95e3f3a8f38198996",
        "datetime": 1785745800
      }
    ],
    "_fetched_at": 1785787202.099543,
    "_updated_label": "2026-08-04 05:03"
  },
  "QQQ": {
    "nextEarnings": null,
    "news": [
      {
        "headline": "Oil Sinks 6%, Nasdaq 100 Rallies On Iran Talks: Stock Market Today",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=585309b128dcd9fbe08f8fa87078b2638fea72ceff1a060d973979f2e7f271f4",
        "datetime": 1785762347
      },
      {
        "headline": "Major Asset Classes: July 2026 Performance Review",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=dc1bc24c9e78283c390f8ed8170c71118f8afc5b7c3cf19f8df60669dc5952d3",
        "datetime": 1785761880
      },
      {
        "headline": "Yen Intervention And Falling Oil Help Stocks, But Selling In Korea Throws A Monkey Wrench",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=5a03dc294ea20d9d423ea499f3a28b9abb08f00f52e107aab75996199824fd8b",
        "datetime": 1785761122
      },
      {
        "headline": "The Treasury Sell-Off May Be Just Getting Started",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=78000662c6f4bb69ee0d869b0886bf77ab2c1e15f8feec552c05921c61940f91",
        "datetime": 1785760170
      },
      {
        "headline": "New Month Kicks Off On The Upside",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=de8cda973d25f288fadf27f850d2f62ee9f7ea187152a6b4f8e9ca96e23eb148",
        "datetime": 1785759960
      }
    ],
    "_fetched_at": 1785787202.099543,
    "_updated_label": "2026-08-04 05:00"
  },
  "SPY": {
    "nextEarnings": null,
    "news": [
      {
        "headline": "July's Summer Heat Runs Cold",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=83af05d2f65cac44dd469f508ab72e241790c4711e29b5101defb280f7ad0987",
        "datetime": 1785771480
      },
      {
        "headline": "President Trump Says Wants To Give Iran Every Last Chance Before Decapitation; Hopefully Iran Will Come To Their Senses",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=b4bd4a97178fbe80ecb00921608c6790863154f4c700ba19fbe58d851d88c8b7",
        "datetime": 1785767090
      },
      {
        "headline": "'No new negotiations planned despite Trump comments, U.S. officials tell CBS News' - CBS News",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=b5be274de689bc431ec120ff454d9c1a4dffb68e73b40bef3ec75a97c28b27e8",
        "datetime": 1785764331
      },
      {
        "headline": "Exchange-Traded Funds, Equity Futures Higher Pre-Bell Monday Amid US-Iran Truce Hopes",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=16e977681fe44ecf0853f2cef4ba6ccc7c32577108cc804d5b0c7a190d5a06fd",
        "datetime": 1785762411
      },
      {
        "headline": "Major Asset Classes: July 2026 Performance Review",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=dc1bc24c9e78283c390f8ed8170c71118f8afc5b7c3cf19f8df60669dc5952d3",
        "datetime": 1785761880
      }
    ],
    "_fetched_at": 1785787202.099543,
    "_updated_label": "2026-08-04 05:00"
  },
  "ORCL": {
    "nextEarnings": {
      "date": "2026-09-07",
      "hour": "",
      "epsEstimate": 1.7745
    },
    "news": [
      {
        "headline": "Exploring the top movers within the S&P500 index during today's session.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=9b521e747f577fb2d6f6c2fe0f7fac7e1534075c43b7eaed035edca227e594fb",
        "datetime": 1785783901
      },
      {
        "headline": "Stay informed about the most active stocks in the S&P500 index on Monday's session.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=3f902903dfb474ff36920d42484cf6d8a2b0006ffdc1101ff1deb02f3916e77c",
        "datetime": 1785780300
      },
      {
        "headline": "Amazon Tops $3T, Meta Rallies 7% as AI Hyperscalers Ride Earnings Momentum",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a84b884c005c12154ca3456a0c28183c6e3ef44e45719fe7654d3fa5c7906578",
        "datetime": 1785778288
      },
      {
        "headline": "Amazon, Meta, and Microsoft stocks surge as AI hyperscalers post strong earnings results",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2309ba880b0fb1713d5872f9986608b341543d9cdb4228a5704f4bbc13a2a255",
        "datetime": 1785775049
      },
      {
        "headline": "Explore the top gainers and losers within the S&P500 index in today's session.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=1aad85f803d759737ccd26cd76fff98c0894c13234b495165da8769f5eab5479",
        "datetime": 1785774901
      }
    ],
    "_fetched_at": 1785787202.099543,
    "_updated_label": "2026-08-04 05:01"
  },
  "CRM": {
    "nextEarnings": {
      "date": "2026-08-26",
      "hour": "amc",
      "epsEstimate": 3.3057
    },
    "news": [
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
      },
      {
        "headline": "These S&P500 stocks are gapping in today's session",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=efbb6286c011dfbe2cb89cbed78750eeb1119ac1d173ab9221b91d260d6e74a1",
        "datetime": 1785767701
      },
      {
        "headline": "Which S&P500 stocks are moving before the opening bell on Monday?",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=f596a060a793d4846f0b87347ea41be3ea04c98760439bd97002638de903cd1f",
        "datetime": 1785760502
      },
      {
        "headline": "What Salesforce’s (CRM) $1.6 Billion VA Contract Signals for Its Government Cloud Strategy",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f0d3b45498e70b874ddd4bc0680961bba9be0c5dfafae2832c5e6de0d0212e05",
        "datetime": 1785751207
      }
    ],
    "_fetched_at": 1785787202.099543,
    "_updated_label": "2026-08-04 05:01"
  },
  "PLTR": {
    "nextEarnings": {
      "date": "2026-11-02",
      "hour": "",
      "epsEstimate": 0.3782
    },
    "news": [
      {
        "headline": "Stay informed about the most active stocks in the S&P500 index on Monday's session.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=3f902903dfb474ff36920d42484cf6d8a2b0006ffdc1101ff1deb02f3916e77c",
        "datetime": 1785780300
      },
      {
        "headline": "Update: Equities Rise Intraday, Oil Slides Amid Middle East Deal Optimism",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f634952b11666bd4bd4148f5e4ec1439f862d29cf0053e4980e09d93bba623ee",
        "datetime": 1785778272
      },
      {
        "headline": "Palantir Is Moving Deeper Into the Defense Factory",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=55560440e7c7348499c8d9ae9fd7ad7969d0bd72d0966ec1a2e4e1c252a1991f",
        "datetime": 1785775333
      },
      {
        "headline": "Amazon, Apple, Micron, Bristol Myers, GameStop, Corning, SpaceX, and More Stocks That Explain Today’s Market",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a9dd6451698f698fe11dfc6686d34f30874ccb8a8b263ec1ccbb6c7a8c580d0d",
        "datetime": 1785775200
      },
      {
        "headline": "AI Darling on the Hot Seat: Will Palantir Deliver?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1e5900a972963569fb31577c94e16f450e2eb754b361f886a6167c5066a36a59",
        "datetime": 1785771944
      }
    ],
    "_fetched_at": 1785787202.099543,
    "_updated_label": "2026-08-04 05:01"
  },
  "QCOM": {
    "nextEarnings": {
      "date": "2026-11-03",
      "hour": "amc",
      "epsEstimate": 2.2987
    },
    "news": [
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
      },
      {
        "headline": "5 Stocks In The Spotlight From Wall Street's Most Accurate Analysts Last Month",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=bcded9f5793b4854d7501dacbde884033ec35f7c28f1852c9975588070ffbaad",
        "datetime": 1785735924
      },
      {
        "headline": "Wall Street Questioned the AI Boom, Earnings Are Delivering: Here Are the ETFs You Should Watch Closely",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=f8c4076ee407910954216f7e789c26d96bd5c2804a0b1f926be06f8edc16de7f",
        "datetime": 1785722280
      }
    ],
    "_fetched_at": 1785787202.099543,
    "_updated_label": "2026-08-04 05:02"
  },
  "ARM": {
    "nextEarnings": {
      "date": "2026-11-04",
      "hour": "",
      "epsEstimate": 0.4688
    },
    "news": [
      {
        "headline": "Arm Quietly Builds Its Next Big AI Advantage",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=02b426d6f068b66b97c3c726c0cc7c9ac3354cec5607e9c442348328e831e9fc",
        "datetime": 1785779396
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
      },
      {
        "headline": "Advanced Micro Devices vs. Arm: Which Tech Stock Is a Better Buy in 2026?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c610e329289aad1a5d8051660ec3f9d7cfb358fd2ac7304e16c3a3fc7bd39764",
        "datetime": 1785675001
      },
      {
        "headline": "A $2 Billion Reason to Buy Arm Holdings Stock Now",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3939ba6978fa025e5becb861da5b66ccc6d8afc3fc52a35cf4f80ae2129daaf0",
        "datetime": 1785592802
      }
    ],
    "_fetched_at": 1785787202.099543,
    "_updated_label": "2026-08-04 05:02"
  },
  "MRVL": {
    "nextEarnings": {
      "date": "2026-08-20",
      "hour": "",
      "epsEstimate": 0.939
    },
    "news": [
      {
        "headline": "Marvell (MRVL) Is Putting $250 Million Into India To Grow AI Chip R and D",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9124d3ad0cd6aff883f67109e85bc9ceb845825e3c1f778019f646239af819fa",
        "datetime": 1785776955
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
      },
      {
        "headline": "Marvell to Showcase Advanced AI Memory and Storage Infrastructure Portfolio for Agentic AI Inference at FMS 2026",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1cbfc3bc06bde0464193cf86077307a344ab8b4d4b9a5a0c7e6bea38dd6f711e",
        "datetime": 1785762000
      },
      {
        "headline": "Semiconductor ETF SOXX’s Worst Month Since 2002: 'A Significant Discount,' Ed Yardeni Says",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=adeef272a4572b60de9796478e0c855429539583bc46e9b24e6cc669be7ad2cd",
        "datetime": 1785760153
      }
    ],
    "_fetched_at": 1785787202.099543,
    "_updated_label": "2026-08-04 05:02"
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
      },
      {
        "headline": "ASML vs. TSMC: Which Semiconductor Supply Chain Stock Is the Better AI Play?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=955e856779ddb246f1b2c3d809de78732d1ca1e143646fd1f6e405c5e9335345",
        "datetime": 1785687840
      }
    ],
    "_fetched_at": 1785787202.099543,
    "_updated_label": "2026-08-04 05:02"
  },
  "LRCX": {
    "nextEarnings": {
      "date": "2026-10-20",
      "hour": "",
      "epsEstimate": 2.1446
    },
    "news": [
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
      },
      {
        "headline": "New Strong Buy Stocks for August 3rd",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0c9e84804a451c4c4d63fe4e06b1d3d37fd1319777636736041639119b1efe5b",
        "datetime": 1785746100
      },
      {
        "headline": "FTSE 100 Live: London lagging as AstraZeneca offsets gains from oil drop",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8ab246737b34fba3547638739cc07520ba40769ada45368f31bde05f68764763",
        "datetime": 1785737820
      }
    ],
    "_fetched_at": 1785787202.099543,
    "_updated_label": "2026-08-04 05:03"
  },
  "KLAC": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "",
      "epsEstimate": 1.1971
    },
    "news": [
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
      },
      {
        "headline": "Here's How Much $1000 Invested In KLA 20 Years Ago Would Be Worth Today",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=5047743b874144b69b058c4c939950840184b97ea39eeffcfa0e025aa91a6fe7",
        "datetime": 1785516321
      },
      {
        "headline": "KLA (KLAC) Upgraded to Strong Buy: What Does It Mean for the Stock?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e135a5f171691f164ff9ea0a48f319975e1b9b59c8756f4cddda9eeb4dd8fbab",
        "datetime": 1785513604
      }
    ],
    "_fetched_at": 1785787202.099543,
    "_updated_label": "2026-08-04 05:03"
  },
  "SNDK": {
    "nextEarnings": {
      "date": "2026-08-05",
      "hour": "amc",
      "epsEstimate": 35.1395
    },
    "news": [
      {
        "headline": "Amazon, Apple, Micron, Bristol Myers, GameStop, Corning, SpaceX, and More Stocks That Explain Today’s Market",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a9dd6451698f698fe11dfc6686d34f30874ccb8a8b263ec1ccbb6c7a8c580d0d",
        "datetime": 1785775200
      },
      {
        "headline": "Buy Sandisk Stock Before Q4 Earnings? Here's What to Know",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7f134f95f0536c26acc34ba6040c80112263b41e2ed7a97379682790d7102949",
        "datetime": 1785774840
      },
      {
        "headline": "Atlassian to Post Q4 Earnings: What's in Store for the Stock?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b01debb529503fc7968228be9fba5a8237ffba035cc83366fd5d1a5934bc6ed3",
        "datetime": 1785774120
      },
      {
        "headline": "Jim Cramer Named Micron Technology (MU) His Top Memory Pick",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=67be235dd88884c0c0f4ed11df182db2c06182ba855bd99f4215c59801805f93",
        "datetime": 1785773846
      },
      {
        "headline": "MACOM Technology to Report Q3 Earnings: What's in Store for the Stock?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7aac82a9852b425991294426dfe9f50d6fc4c2d284fd934b7d719730d95f5f94",
        "datetime": 1785773040
      }
    ],
    "_fetched_at": 1785787202.099543,
    "_updated_label": "2026-08-04 05:03"
  },
  "WDC": {
    "nextEarnings": {
      "date": "2026-08-05",
      "hour": "amc",
      "epsEstimate": 3.3281
    },
    "news": [
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
      },
      {
        "headline": "Buy Sandisk Stock Before Q4 Earnings? Here's What to Know",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7f134f95f0536c26acc34ba6040c80112263b41e2ed7a97379682790d7102949",
        "datetime": 1785774840
      },
      {
        "headline": "Atlassian to Post Q4 Earnings: What's in Store for the Stock?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b01debb529503fc7968228be9fba5a8237ffba035cc83366fd5d1a5934bc6ed3",
        "datetime": 1785774120
      },
      {
        "headline": "Jim Cramer Named Micron Technology (MU) His Top Memory Pick",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=67be235dd88884c0c0f4ed11df182db2c06182ba855bd99f4215c59801805f93",
        "datetime": 1785773846
      }
    ],
    "_fetched_at": 1785787202.099543,
    "_updated_label": "2026-08-04 05:03"
  }
};
