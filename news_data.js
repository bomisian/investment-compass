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
        "headline": "Explore the S&P500 index on Wednesday and find out which stocks are the most active in today's session.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=c766f88e616916fe8e40600df5afe7cbf8d7ee2d3376090d27e1bd4192e4fb2e",
        "datetime": 1785348302
      },
      {
        "headline": "These stocks are the most active in today's session",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=50e559e156baa1e184e221a7d2f5cb0a03f795f3d2de46258868337b543723f9",
        "datetime": 1785348000
      },
      {
        "headline": "Wedbush Delivers Urgent Message on Nvidia Stock",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e6cc66d2f3862f012e1a75a92bc70e709766bfa1edf13acc1a68bcf0581e51d6",
        "datetime": 1785347335
      },
      {
        "headline": "Lennox International Inc. Q2 2026 Earnings Call Summary",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e3e612e953b8a9d8997bcc4e8ae078794ffd3c9b90f716e594bb5bb58920fab7",
        "datetime": 1785346951
      },
      {
        "headline": "The Playbook for Palantir Ahead of Q3 Earnings",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=22812efb24490d52a543bdee10189708116e94ed07b5b7182d266a7ac9228125",
        "datetime": 1785346936
      }
    ],
    "_fetched_at": 1785355201.828633,
    "_updated_label": "2026-07-30 05:00"
  },
  "AAPL": {
    "nextEarnings": {
      "date": "2026-07-30",
      "hour": "amc",
      "epsEstimate": 1.9271
    },
    "news": [
      {
        "headline": "Wednesday's session: top gainers and losers in the dow jones index",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=637a7a8fadaf10d44efb7c0c6bf9b51ef54f207f12d1a8f77ec01d29e4101ba3",
        "datetime": 1785352204
      },
      {
        "headline": "Explore the S&P500 index on Wednesday and find out which stocks are the most active in today's session.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=c766f88e616916fe8e40600df5afe7cbf8d7ee2d3376090d27e1bd4192e4fb2e",
        "datetime": 1785348302
      },
      {
        "headline": "Is a Caterpillar Stock Split Inevitable?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4c474bdffad8aa391ca0936ee746090ccad96f017670af657d6590c833d58443",
        "datetime": 1785346380
      },
      {
        "headline": "Uncover the latest developments among dow jones stocks in today's session.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=3d02d113c2ecf29242a7cd994dbb635d3ad841d7d9e5ea68fc7d21924489df69",
        "datetime": 1785343204
      },
      {
        "headline": "Can Qualcomm secure a 'tiny slice' of the data center pie?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0b74f2eb70ee96b5c39d0d9176cdd49ea1f17842e5e5241d3b36dc5a26166b4d",
        "datetime": 1785342800
      }
    ],
    "_fetched_at": 1785355201.828633,
    "_updated_label": "2026-07-30 05:00"
  },
  "GOOGL": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "amc",
      "epsEstimate": 3.0988
    },
    "news": [
      {
        "headline": "Wednesday's session: top gainers and losers in the dow jones index",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=637a7a8fadaf10d44efb7c0c6bf9b51ef54f207f12d1a8f77ec01d29e4101ba3",
        "datetime": 1785352204
      },
      {
        "headline": "Amazon's AI Spending Is About to Face a Bigger Test",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=06d05d2cb4e5c70599100035785beba42cfc2e5da9c180dbb405a5aaabae9c7a",
        "datetime": 1785347799
      },
      {
        "headline": "Fiverr International Ltd. Q2 2026 Earnings Call Summary",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2d0079da8d94825bc858185eee4136c9fb8ca31b769f7c3cf75b748cec4a787d",
        "datetime": 1785346284
      },
      {
        "headline": "Vertiv Earnings Beat Estimates. Why the Stock Is Falling.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5d59f7123cbe423167c2e32568814303a6f13460bb8570e01efd5c367f868487",
        "datetime": 1785345960
      },
      {
        "headline": "Billionaire Money Manager Christopher Begg Bought Google at 15x Earnings. Here’s Why He Calls It the Best Business in the World",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=81a0b02d5271d148fce950292e4ac74909cd5d871f59ff9b5e6fcfef8e13bf72",
        "datetime": 1785344424
      }
    ],
    "_fetched_at": 1785355201.828633,
    "_updated_label": "2026-07-30 05:00"
  },
  "MSFT": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "",
      "epsEstimate": 4.7278
    },
    "news": [
      {
        "headline": "Wednesday's session: top gainers and losers in the dow jones index",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=637a7a8fadaf10d44efb7c0c6bf9b51ef54f207f12d1a8f77ec01d29e4101ba3",
        "datetime": 1785352204
      },
      {
        "headline": "Sector Update: Tech Stocks Fall Wednesday Afternoon",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9f93eccb046eef59412bf84eb7a6f014151fdc0a62884cd21d5e37bc0dbdc650",
        "datetime": 1785346700
      },
      {
        "headline": "Stock Market Today: Dow Sinks As Fed Rate Decision, Warsh Comments Loom; KLA Tumbles (Live Coverage)",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1de214fe9ad67d05df63157ee92a931ac6368b96549e2053353844784b6afc43",
        "datetime": 1785346107
      },
      {
        "headline": "Venture Capitalist Warns Meta Will Keep Spending Big on AI Even If Shareholders Hate It",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9e58c6818d1578d6d15871c93a124b53a18def0cb519b2cb185cc41db14eb59c",
        "datetime": 1785345699
      },
      {
        "headline": "Update: US Equity Indexes Slide Ahead of Warsh's Press Briefing, Big-Tech Results While Trump Vows to Hit Iran Hard",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=567e4c151c83b4a8a322cb8fc3a60105c9f67450e25f3b0161e979415f91d38d",
        "datetime": 1785344193
      }
    ],
    "_fetched_at": 1785355201.828633,
    "_updated_label": "2026-07-30 05:00"
  },
  "AMZN": {
    "nextEarnings": {
      "date": "2026-07-30",
      "hour": "amc",
      "epsEstimate": 1.8556
    },
    "news": [
      {
        "headline": "Amazon's AI Spending Is About to Face a Bigger Test",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=06d05d2cb4e5c70599100035785beba42cfc2e5da9c180dbb405a5aaabae9c7a",
        "datetime": 1785347799
      },
      {
        "headline": "Amazon heads into Q2 earnings with UBS bullish on cloud growth and e-commerce margins",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c8950c3abef393aa0fea4cf404b4eb82e10e0204faa5922b0219a506ea875769",
        "datetime": 1785343260
      },
      {
        "headline": "Uncover the latest developments among dow jones stocks in today's session.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=3d02d113c2ecf29242a7cd994dbb635d3ad841d7d9e5ea68fc7d21924489df69",
        "datetime": 1785343204
      },
      {
        "headline": "Amazon just made a major move to reshape its entire AI strategy",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=db033cf258e8889f70fef75a2b13e575703ca5008efdbd9a73eb39ad2db9fc70",
        "datetime": 1785341820
      },
      {
        "headline": "Alphabet Captures 2026 AI Capex Alpha But Amazon Begins Surging in 2027",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8a7c1fca3c6e4ef1fa69fccff980ead2ecd2aa6bd1a738b629ae104197265bf5",
        "datetime": 1785341638
      }
    ],
    "_fetched_at": 1785355201.828633,
    "_updated_label": "2026-07-30 05:00"
  },
  "TSM": {
    "nextEarnings": {
      "date": "2026-10-14",
      "hour": "amc",
      "epsEstimate": 28.6598
    },
    "news": [
      {
        "headline": "Nvidia's Ongoing Dominance: Reasons To Keep Buying",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=cd4bccf4dd8a31db1bce2497a7af1d6250bfc05b50f6b2af66d3ae8d5dfae3ea",
        "datetime": 1785335860
      },
      {
        "headline": "KLA Falls After Earnings: Raised Guidance Fails To Impress Wall Street",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=9d41cf462dc29fa8493fecf89c61f0f589a9eb6f0ca8e131a36a1409b26296a3",
        "datetime": 1785326029
      },
      {
        "headline": "Why KOSPI And The Semiconductor Sector Is Crashing",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=ad85cf12c137a3df452771ec0ff81bd38c705b3be61143d34c6d58e6616a1345",
        "datetime": 1785322034
      },
      {
        "headline": "Intel Just Beat Its Own Guidance For The Seventh Time In A Row, Upgrade To Buy",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=4750faac47f6984cb533395e3fb7b5daae33411ee1fc6def687e22ae4422b67f",
        "datetime": 1785317120
      },
      {
        "headline": "Chips Sell First, Ask Questions Later - And SK Hynix Just Handed Them the Answer",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=2dd0609fece9b7df7d96e884291a99b4db8c8f2618b80ae5cd0c2bffda101783",
        "datetime": 1785316364
      }
    ],
    "_fetched_at": 1785355201.828633,
    "_updated_label": "2026-07-30 05:01"
  },
  "AVGO": {
    "nextEarnings": {
      "date": "2026-09-02",
      "hour": "amc",
      "epsEstimate": 3.3012
    },
    "news": [
      {
        "headline": "Intel Stock Is Up 124% This Year and AMD Is Up 100%: Is the NASDAQ Correction a Take-Profit Signal?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4613a07e6ddc61ccd69c0d0d00e242830ca94f9ebf15c08cac59dbd9c0da17d4",
        "datetime": 1785346119
      },
      {
        "headline": "Kospi sell-off deepens, Why leveraged ETFs are under fire",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=83e50fb27a567dbe0cbbce0e4916071918d805e68d093f80967641eb5c9954fd",
        "datetime": 1785340279
      },
      {
        "headline": "How Far Tesla Stock Needs to Fall to Lose Trillion-Dollar Status",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=bb4fe2e08ba8990ddbfcc0f7736b6300679e6de238c77a1390bbd861b7598402",
        "datetime": 1785337620
      },
      {
        "headline": "The AI Trade Is Still On: Why Nvidia Remains at the Center of It",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=56657e684baa5edcc80f5b07716565b163cf0a63f15265459e5ffd4a1494db37",
        "datetime": 1785337258
      },
      {
        "headline": "Nvidia's Ongoing Dominance: Reasons To Keep Buying",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=cd4bccf4dd8a31db1bce2497a7af1d6250bfc05b50f6b2af66d3ae8d5dfae3ea",
        "datetime": 1785335860
      }
    ],
    "_fetched_at": 1785355201.828633,
    "_updated_label": "2026-07-30 05:01"
  },
  "META": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "amc",
      "epsEstimate": 7.1724
    },
    "news": [
      {
        "headline": "Hims & Hers Stock Plunges After FTC Sues Over Alleged Privacy Violations",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e61966a95d8d8343e6a238789e6279e8d9a2001564cea1c9641930aa99d4d8ce",
        "datetime": 1785346440
      },
      {
        "headline": "Sector Update: Healthcare Stocks Edge Lower in Afternoon Trading",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=689226e9857ec7cac1da65efb7e5fb2d018a298a67a1cf8ffa7ff085cefe30ee",
        "datetime": 1785346406
      },
      {
        "headline": "Stock Market Today: Dow Sinks As Fed Rate Decision, Warsh Comments Loom; KLA Tumbles (Live Coverage)",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1de214fe9ad67d05df63157ee92a931ac6368b96549e2053353844784b6afc43",
        "datetime": 1785346107
      },
      {
        "headline": "Venture Capitalist Warns Meta Will Keep Spending Big on AI Even If Shareholders Hate It",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9e58c6818d1578d6d15871c93a124b53a18def0cb519b2cb185cc41db14eb59c",
        "datetime": 1785345699
      },
      {
        "headline": "Meta Platforms CEO Makes Unexpected Call in AI Race",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6087a50574259bf89b54b116c2645c1ead0411ab3e78d50480cf4b3f69fba359",
        "datetime": 1785345592
      }
    ],
    "_fetched_at": 1785355201.828633,
    "_updated_label": "2026-07-30 05:00"
  },
  "TSLA": {
    "nextEarnings": {
      "date": "2026-10-20",
      "hour": "amc",
      "epsEstimate": 0.4684
    },
    "news": [
      {
        "headline": "Explore the S&P500 index on Wednesday and find out which stocks are the most active in today's session.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=c766f88e616916fe8e40600df5afe7cbf8d7ee2d3376090d27e1bd4192e4fb2e",
        "datetime": 1785348302
      },
      {
        "headline": "Ford Just Delivered Bad News for Tesla Investors",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=bab477616bc947914df4d6cefc891874aa7e4f945b1cec7edeb31f2440f0e4e7",
        "datetime": 1785340200
      },
      {
        "headline": "Famous Investor Michael Burry Is Short Nvidia, Palantir, and Tesla. Why I'd Buy 1 of the Stocks, Hold Another, and Sell the Third.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=08bbdb1fa214a33f6efd61fc046c8e4f58428610ca3d382b3b46fd6ce2deabbb",
        "datetime": 1785339300
      },
      {
        "headline": "How Far Tesla Stock Needs to Fall to Lose Trillion-Dollar Status",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=bb4fe2e08ba8990ddbfcc0f7736b6300679e6de238c77a1390bbd861b7598402",
        "datetime": 1785337620
      },
      {
        "headline": "Tesla (TSLA) Stock Still Trades At A Premium On Sales Despite Weaker Earnings",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cca5bc3c5f8ca14e1289016b4b1ea456a3d7db38126e6d5e9336fe2d8c12191a",
        "datetime": 1785334180
      }
    ],
    "_fetched_at": 1785355201.828633,
    "_updated_label": "2026-07-30 05:00"
  },
  "MU": {
    "nextEarnings": {
      "date": "2026-09-21",
      "hour": "amc",
      "epsEstimate": 32.2476
    },
    "news": [
      {
        "headline": "Explore the S&P500 index on Wednesday and find out which stocks are the most active in today's session.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=c766f88e616916fe8e40600df5afe7cbf8d7ee2d3376090d27e1bd4192e4fb2e",
        "datetime": 1785348302
      },
      {
        "headline": "Is Intel or Micron More Dangerous for the Rest of 2026?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=15ed784c8875f69fe20904797cf66ae75d80eff928b5c6b5e4f38ad6303a2af4",
        "datetime": 1785347031
      },
      {
        "headline": "Tom Lee Says AI 'Bottleneck' Stocks Like MU Could Stabilize After Fed Decision — 'A Lot Of Fear Is Baked Into The Prices Of These Stocks'",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9eed9bb590256e948f0c16da9d6fe82623a698b0eb9da24a89d242adc7a844e6",
        "datetime": 1785344881
      },
      {
        "headline": "Micron Investors Get Another Reason to Be Nervous",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4cafd2908fc87cdeaff586cb62f4271bd91c05500420ca69c33c00d8f382e7ea",
        "datetime": 1785344699
      },
      {
        "headline": "Intel Continues to Get Pummeled: Why One Analyst Maintains His Conviction That 130% Gains Will Come",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4f7d87b45137d0c7bf47266030c6baa2499d54e1aa03e86bb5bf0a6435e47534",
        "datetime": 1785341896
      }
    ],
    "_fetched_at": 1785355201.828633,
    "_updated_label": "2026-07-30 05:01"
  },
  "AMD": {
    "nextEarnings": {
      "date": "2026-08-04",
      "hour": "amc",
      "epsEstimate": 1.6291
    },
    "news": [
      {
        "headline": "Intel Stock Is Up 124% This Year and AMD Is Up 100%: Is the NASDAQ Correction a Take-Profit Signal?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4613a07e6ddc61ccd69c0d0d00e242830ca94f9ebf15c08cac59dbd9c0da17d4",
        "datetime": 1785346119
      },
      {
        "headline": "Chip selloff overblown, UBS says, downplaying \"circular financing\" fears",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0c0608cd89cd57ac6c08fa95d51d1b4ea9e130f7fcd3589e800c749bf97e3ecb",
        "datetime": 1785343320
      },
      {
        "headline": "The CLARITY Act divides finance giants ahead of congressional recess",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=55a5641f738958007e08d019c773c30ba7822bc102f7e6a8bf8c8a66cf66ba7a",
        "datetime": 1785343317
      },
      {
        "headline": "Why AMD (AMD) and Core Scientific (CORZ) Are Pairing AI Chips With Up to 2.5 Gigawatts",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c54c6b65197dbe8d89c452b132c0ff78ce032e175361a67e38c53f6b9bfcbffb",
        "datetime": 1785343023
      },
      {
        "headline": "Intel Continues to Get Pummeled: Why One Analyst Maintains His Conviction That 130% Gains Will Come",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4f7d87b45137d0c7bf47266030c6baa2499d54e1aa03e86bb5bf0a6435e47534",
        "datetime": 1785341896
      }
    ],
    "_fetched_at": 1785355201.828633,
    "_updated_label": "2026-07-30 05:00"
  },
  "INTC": {
    "nextEarnings": {
      "date": "2026-10-21",
      "hour": "amc",
      "epsEstimate": 0.3736
    },
    "news": [
      {
        "headline": "Explore the S&P500 index on Wednesday and find out which stocks are the most active in today's session.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=c766f88e616916fe8e40600df5afe7cbf8d7ee2d3376090d27e1bd4192e4fb2e",
        "datetime": 1785348302
      },
      {
        "headline": "These stocks are the most active in today's session",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=50e559e156baa1e184e221a7d2f5cb0a03f795f3d2de46258868337b543723f9",
        "datetime": 1785348000
      },
      {
        "headline": "Is Intel or Micron More Dangerous for the Rest of 2026?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=15ed784c8875f69fe20904797cf66ae75d80eff928b5c6b5e4f38ad6303a2af4",
        "datetime": 1785347031
      },
      {
        "headline": "Intel's Data Center Revenue Soared 59% in the Second Quarter. So, Why Did Wall Street Sell the Stock?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=02fcdf958492fb67e5e20b2bb367a8169e80da123805633ab7dae556b1eea4cf",
        "datetime": 1785346500
      },
      {
        "headline": "Intel Stock Is Up 124% This Year and AMD Is Up 100%: Is the NASDAQ Correction a Take-Profit Signal?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4613a07e6ddc61ccd69c0d0d00e242830ca94f9ebf15c08cac59dbd9c0da17d4",
        "datetime": 1785346119
      }
    ],
    "_fetched_at": 1785355201.828633,
    "_updated_label": "2026-07-30 05:01"
  },
  "AMAT": {
    "nextEarnings": {
      "date": "2026-08-13",
      "hour": "amc",
      "epsEstimate": 3.462
    },
    "news": [
      {
        "headline": "KLA Stock Is Having Its Worst Month Ever. Why Earnings Can’t Stop the Selloff.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=790aa8d24458e5750f07c579ad7f855c4335d91a742a81ece5e342ce8a45b391",
        "datetime": 1785341640
      },
      {
        "headline": "Varonis Q2 Earnings Surpass Expectations, Revenues Rise Y/Y",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b1ad9bbd940bbc4d014afa50251473665ee03146e29edd3517f5765cc0868e4b",
        "datetime": 1785340800
      },
      {
        "headline": "NXP Semiconductors Q2 Earnings Beat Estimates, Revenues Rise Y/Y",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fb4254751347bae563c5faf408655339f5539e61ccc48e1b1d51d35d9f87a0ec",
        "datetime": 1785340560
      },
      {
        "headline": "KLA Stock Is on Pace for Worst Month Since 1987. Earnings Aren’t Doing It Any Favors.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f117bc14ff0e5550e53cd9e6d2ff03621d71b6774b6561fd3495d80b12fc40a9",
        "datetime": 1785334260
      },
      {
        "headline": "Oil Spikes 7%, Nasdaq 100 Sinks Before Fed: Stock Market Today",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=c0ca1776ec96e4d2223fb04b75d146fc39d3f6083234f7864558866e441ddd34",
        "datetime": 1785330990
      }
    ],
    "_fetched_at": 1785355201.828633,
    "_updated_label": "2026-07-30 05:01"
  },
  "QQQ": {
    "nextEarnings": null,
    "news": [
      {
        "headline": "U.S. Economy: A 30% Adjustment For Housing Ahead",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=2f38dbe2ef3c22147f0ed4aff07f9d695b5d32ae7b53742d528bf0d7d81a7276",
        "datetime": 1785337843
      },
      {
        "headline": "July FOMC Meeting: Rate Hold Masks A More Hawkish Fed",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=28e910ab895d3043d648ade1512e003ebb33ff93a3f02a6e55f11f607afeeadf",
        "datetime": 1785337216
      },
      {
        "headline": "Could The U.S. Fed Decision Surprise Investors?",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=0293ea005fc1ccde6377ce676d8e6e56af418c7e8ccecd7336a7a6c792e4ba48",
        "datetime": 1785334200
      },
      {
        "headline": "Tech-Heavy KOSPI Volatility Does Not Compute In U.S. (Video)",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=14d72feaee3f8b5141f8f28e1f39ec2b89aaffba34c106b84c2110df42cc87a1",
        "datetime": 1785333688
      },
      {
        "headline": "Oil Spikes 7%, Nasdaq 100 Sinks Before Fed: Stock Market Today",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=c0ca1776ec96e4d2223fb04b75d146fc39d3f6083234f7864558866e441ddd34",
        "datetime": 1785330990
      }
    ],
    "_fetched_at": 1785355201.828633,
    "_updated_label": "2026-07-30 05:00"
  },
  "SPY": {
    "nextEarnings": null,
    "news": [
      {
        "headline": "Wall Street Sends Fresh Warning as AI Tech Stocks Stumble After Earnings",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4fe4c805e4d6d97b0d9490f2fffdfaeb2db33cc97062047521c41357c2d0e529",
        "datetime": 1785348474
      },
      {
        "headline": "Forget SPY: This Shareholder Yield ETF Has Beaten It by 12 Points This Year",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b34da6f2f5fe3f4f7042fbcd4beb18bc57934ce22215f4062b4d8309e7841e23",
        "datetime": 1785348068
      },
      {
        "headline": "The Playbook for Palantir Ahead of Q3 Earnings",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=22812efb24490d52a543bdee10189708116e94ed07b5b7182d266a7ac9228125",
        "datetime": 1785346936
      },
      {
        "headline": "Max Out a Trump Account and Your Kid Could Have $185,000 at 18",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e9f4c732dad0bc13358b2a04478921971eddf29f0d722abbafea0499fb089ef8",
        "datetime": 1785343323
      },
      {
        "headline": "U.S. Economy: A 30% Adjustment For Housing Ahead",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=2f38dbe2ef3c22147f0ed4aff07f9d695b5d32ae7b53742d528bf0d7d81a7276",
        "datetime": 1785337843
      }
    ],
    "_fetched_at": 1785355201.828633,
    "_updated_label": "2026-07-30 05:00"
  },
  "ORCL": {
    "nextEarnings": {
      "date": "2026-09-07",
      "hour": "",
      "epsEstimate": 1.7745
    },
    "news": [
      {
        "headline": "Nebius Drops 10%, CoreWeave Sinks 9% as Rising Credit-Swap Costs Hit the AI Cloud Trade",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d867b8e03ceb206e49a3c12b8cffdefb340c2cc223eab3f9d571d58b1d0fdbb4",
        "datetime": 1785343381
      },
      {
        "headline": "Wall Street Picks AI Winners and Losers as Credit Swaps Surge",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a5d1d4bb9b376d08aa04a4d7960a8df4b23a951d914b598299f1998b6f5b8fd5",
        "datetime": 1785334055
      },
      {
        "headline": "Oracle Stock Just Hit a 52-Week Low: 20 Billion Reasons NOT to Buy the Dip",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7868895d14ee253a97fbac6c9cf4e309efce44ba4707b06e54404c06d4e15045",
        "datetime": 1785333900
      },
      {
        "headline": "ISG to Study Oracle Cloud, Technology Ecosystem Providers",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7f103263b3a36814052243f9ea120ad3202bc3ea1e0d9fb4e2888e812d1a4017",
        "datetime": 1785333600
      },
      {
        "headline": "Hyperscaler debt binge pushes yields up as investor demand cools",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fb12bc191373a1a3909b08f5a2157fa1e5f024c27997b0f38abc6f3bff8caab7",
        "datetime": 1785332905
      }
    ],
    "_fetched_at": 1785355201.828633,
    "_updated_label": "2026-07-30 05:00"
  },
  "CRM": {
    "nextEarnings": {
      "date": "2026-08-26",
      "hour": "amc",
      "epsEstimate": 3.3057
    },
    "news": [
      {
        "headline": "Wednesday's session: top gainers and losers in the dow jones index",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=637a7a8fadaf10d44efb7c0c6bf9b51ef54f207f12d1a8f77ec01d29e4101ba3",
        "datetime": 1785352204
      },
      {
        "headline": "Uncover the latest developments among dow jones stocks in today's session.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=3d02d113c2ecf29242a7cd994dbb635d3ad841d7d9e5ea68fc7d21924489df69",
        "datetime": 1785343204
      },
      {
        "headline": "Is ACN's Deal With Radisson for Booking App Launch a Growth Catalyst?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=315277095eb66bfe1b9fadfdbb36ade6cd84ecb811cdc656b21bc47243127c29",
        "datetime": 1785335640
      },
      {
        "headline": "Can Agentic AI Adoption Fuel ServiceNow's Next Phase of Growth?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=20f0e47c49fc4b702f30370e076c72b84c42c63595e308634eb18238eaccef3f",
        "datetime": 1785332700
      },
      {
        "headline": "Bandwidth Q2 Earnings Call Highlights",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e8aeb500e57684f6c8636113a764094fae16aac37044657ec82a7b92648a9487",
        "datetime": 1785330239
      }
    ],
    "_fetched_at": 1785355201.828633,
    "_updated_label": "2026-07-30 05:00"
  },
  "PLTR": {
    "nextEarnings": {
      "date": "2026-08-03",
      "hour": "amc",
      "epsEstimate": 0.3544
    },
    "news": [
      {
        "headline": "The Playbook for Palantir Ahead of Q3 Earnings",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=22812efb24490d52a543bdee10189708116e94ed07b5b7182d266a7ac9228125",
        "datetime": 1785346936
      },
      {
        "headline": "Decoding PLTR Stock's Premium Valuation",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8c611d8ec26e663613d304ed039e0bb14f5f67f4fa5d8d0d333519a8933d0698",
        "datetime": 1785339708
      },
      {
        "headline": "Famous Investor Michael Burry Is Short Nvidia, Palantir, and Tesla. Why I'd Buy 1 of the Stocks, Hold Another, and Sell the Third.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=08bbdb1fa214a33f6efd61fc046c8e4f58428610ca3d382b3b46fd6ce2deabbb",
        "datetime": 1785339300
      },
      {
        "headline": "Microsoft vs Palantir: Which AI Stock Has More Upside in 2026?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9744a2e8793108007fd48dd4999fb3ba08a7cd7cc3efa2c0c32a8b09bb943937",
        "datetime": 1785333639
      },
      {
        "headline": "10 Information Technology Stocks Whale Activity In Today’s Session",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=b1d97012ce15175ac58f725514fcd55b46d95935a88fd5f5d20dd1abf1e40387",
        "datetime": 1785332115
      }
    ],
    "_fetched_at": 1785355201.828633,
    "_updated_label": "2026-07-30 05:00"
  },
  "QCOM": {
    "nextEarnings": {
      "date": "2026-11-03",
      "hour": "amc",
      "epsEstimate": 2.38
    },
    "news": [
      {
        "headline": "Qualcomm Stock Could Swing 9% After Today's Earnings",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3d2df85bbc4cc19ba1caa209989c87516a64ffcc3841a84973b51e777375a209",
        "datetime": 1785347536
      },
      {
        "headline": "Qualcomm (QCOM) Lands BMW Deal And Closes Modular Buy For AI Push",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f956f496640b21ddfb52ff91d160e3838b24c01cacfa0c224d83227ad80b38b0",
        "datetime": 1785344857
      },
      {
        "headline": "Update: US Equity Indexes Slide Ahead of Warsh's Press Briefing, Big-Tech Results While Trump Vows to Hit Iran Hard",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=567e4c151c83b4a8a322cb8fc3a60105c9f67450e25f3b0161e979415f91d38d",
        "datetime": 1785344193
      },
      {
        "headline": "Can Qualcomm secure a 'tiny slice' of the data center pie?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0b74f2eb70ee96b5c39d0d9176cdd49ea1f17842e5e5241d3b36dc5a26166b4d",
        "datetime": 1785342800
      },
      {
        "headline": "Qualcomm Q3 earnings to highlight AI's impact on smartphone market, data center plans",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5ae484039e9e97ddafc44fabe2053051270e6c14ead9861b726255d84ab24da5",
        "datetime": 1785341109
      }
    ],
    "_fetched_at": 1785355201.828633,
    "_updated_label": "2026-07-30 05:01"
  },
  "ARM": {
    "nextEarnings": {
      "date": "2026-11-04",
      "hour": "",
      "epsEstimate": 0.4502
    },
    "news": [
      {
        "headline": "Update: US Equity Indexes Slump Ahead of Fed Policy Moves, Big-Tech Results; Crude Oil Soars as Trump Vows to Hit Iran Hard",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=87a47f3b5527651535d77d970c6d6d131a3b51e85caf21a6c583f214ce59df79",
        "datetime": 1785347887
      },
      {
        "headline": "Update: US Equity Indexes Slide Ahead of Warsh's Press Briefing, Big-Tech Results While Trump Vows to Hit Iran Hard",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=567e4c151c83b4a8a322cb8fc3a60105c9f67450e25f3b0161e979415f91d38d",
        "datetime": 1785344193
      },
      {
        "headline": "Dow Jones down over 800 points as Trump lashes out ahead of Fed decision",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=44c001b8eb09651befca60290bb06b4467e6a5de6f1f89228a1a7bf643fd5e53",
        "datetime": 1785327180
      },
      {
        "headline": "Stocks Mostly Up Pre-Bell Ahead of Fed Rate Decision, Big Tech Earnings",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c73ec1e45071df7ab6cf027726410cb65ae0a0f6ec8c56db89e4703ca4176140",
        "datetime": 1785326392
      },
      {
        "headline": "AMD Sinks 8%, Marvell Sinks 7%, Intel Fall 6% as AI Chip Trade Narrows to NVIDIA",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=37fae0e763c35d3d7a71eaa6f4bb2ba0eb9cca015c0fd4ed8b877b31c261b485",
        "datetime": 1785252523
      }
    ],
    "_fetched_at": 1785355201.828633,
    "_updated_label": "2026-07-30 05:01"
  },
  "MRVL": {
    "nextEarnings": {
      "date": "2026-08-20",
      "hour": "",
      "epsEstimate": 0.939
    },
    "news": [
      {
        "headline": "Marvell Is Making a Bigger Bet on India",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=77361da2bd6dc4ecde07212a0dc5ff5db671858cb5ffadf75fd93023cda5b676",
        "datetime": 1785333700
      },
      {
        "headline": "What Could Push NVDA Stock Higher From Here?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=40c6d42a8484897f3aa6dfecb0702143b5c355b3d657e62747d77fec2faef41d",
        "datetime": 1785331281
      },
      {
        "headline": "Here is What to Know Beyond Why Marvell Technology, Inc. (MRVL) is a Trending Stock",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4c961297a67a766e92d70a29cd2b6998258478361c03f3cc6da49ca04b7b8636",
        "datetime": 1785330008
      },
      {
        "headline": "Nvidia: Stop Worrying About Circular Financing and Embrace the Bank",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=09f100d0d1c46893bc516e5aeeec0862acbb566ce16f00774709de3dca2a0348",
        "datetime": 1785325560
      },
      {
        "headline": "TER Stock Gains After Q2 Beat – CEO Says AI Demand Remains 'Robust,' Sees Growth Extending Into 2027",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=58a0a0e6764b52cb22d8db6a8ac764607f471a44539157187d0c43344f9a98d8",
        "datetime": 1785324592
      }
    ],
    "_fetched_at": 1785355201.828633,
    "_updated_label": "2026-07-30 05:01"
  },
  "ASML": {
    "nextEarnings": {
      "date": "2026-10-14",
      "hour": "bmo",
      "epsEstimate": 10.1558
    },
    "news": [
      {
        "headline": "Microsoft’s Earnings Could Decide the Fate of a $700 Billion AI Spending Boom",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0cc5c315bc46175383b7ebd9616626513f8f4a2db5e71088aedfbff59b4df587",
        "datetime": 1785337433
      },
      {
        "headline": "Is the AI rally running out of steam?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=77fe3f0fa047e5778611d4efcb7cbd6ffdf2e7bcb99b7c8f54053d2b4255eb00",
        "datetime": 1785330042
      },
      {
        "headline": "SKHY, MU, Samsung's Memory Technology Lead Over China’s CXMT Unlikely To Narrow Soon, Says Futurum Analyst",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=061f4d47eb050cce3c0ff8a2f73ff45db8bec35b871fdb8d5423a694cee75dd8",
        "datetime": 1785322262
      },
      {
        "headline": "Why KOSPI And The Semiconductor Sector Is Crashing",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=ad85cf12c137a3df452771ec0ff81bd38c705b3be61143d34c6d58e6616a1345",
        "datetime": 1785322034
      },
      {
        "headline": "Has ASML Holding (ENXTAM:ASML) Priced In Too Much AI Demand?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=63e2e0e4d2ea27e98f1378e94cc4762200f77904ab1549d22ce0f42d77775a06",
        "datetime": 1785316157
      }
    ],
    "_fetched_at": 1785355201.828633,
    "_updated_label": "2026-07-30 05:01"
  },
  "LRCX": {
    "nextEarnings": {
      "date": "2026-10-20",
      "hour": "",
      "epsEstimate": 1.8266
    },
    "news": [
      {
        "headline": "Update: US Equity Indexes Slide Ahead of Warsh's Press Briefing, Big-Tech Results While Trump Vows to Hit Iran Hard",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=567e4c151c83b4a8a322cb8fc3a60105c9f67450e25f3b0161e979415f91d38d",
        "datetime": 1785344193
      },
      {
        "headline": "KLA Stock Is Having Its Worst Month Ever. Why Earnings Can’t Stop the Selloff.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=790aa8d24458e5750f07c579ad7f855c4335d91a742a81ece5e342ce8a45b391",
        "datetime": 1785341640
      },
      {
        "headline": "KLA Stock Is on Pace for Worst Month Since 1987. Earnings Aren’t Doing It Any Favors.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f117bc14ff0e5550e53cd9e6d2ff03621d71b6774b6561fd3495d80b12fc40a9",
        "datetime": 1785334260
      },
      {
        "headline": "Lam Research, Monolithic Power Systems, Marvell Technology, Micron, and onsemi Shares Plummet, What You Need To Know",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ddb853f5a9c4646754fbbbbef42491098ac15934b2dc1c1c8d474e8f783d6fd9",
        "datetime": 1785319022
      },
      {
        "headline": "Is Amkor Technology Stock A Smart Buy Right Now",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fac2fc3c17bfbaa69e25a176c99a849989bda55db4cf57b710f6bc3f97073a3b",
        "datetime": 1785272883
      }
    ],
    "_fetched_at": 1785355201.828633,
    "_updated_label": "2026-07-30 05:01"
  },
  "KLAC": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "",
      "epsEstimate": 1.1541
    },
    "news": [
      {
        "headline": "These S&P500 stocks are moving in today's session",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=b4d240650ad875fe350c20b8a2fc08285c33b9ebb23947e6eb723f76301a62a5",
        "datetime": 1785351901
      },
      {
        "headline": "Uncover the latest developments among S&P500 stocks in today's session.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=121414bfed0be327ad35d640534fff40dec1c43ecc38b7d5cdce74c34bbab213",
        "datetime": 1785342901
      },
      {
        "headline": "KLA Benefits From Higher Process Control Intensity, Double-Digit Growth in Services, RBC Says",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ab0f507792d6eb5fb1595fc6c77765effa9531f1a3ce245ff375054c64b453d7",
        "datetime": 1785342394
      },
      {
        "headline": "KLA Stock Is Having Its Worst Month Ever. Why Earnings Can’t Stop the Selloff.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=790aa8d24458e5750f07c579ad7f855c4335d91a742a81ece5e342ce8a45b391",
        "datetime": 1785341640
      },
      {
        "headline": "KLAC Q4 Earnings Beat on AI Demand, Revenues Increase Y/Y",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=57a9561f254f8aec2651abe87858300bc2efb23d109f4c4a33205e3571fcd9c2",
        "datetime": 1785341100
      }
    ],
    "_fetched_at": 1785355201.828633,
    "_updated_label": "2026-07-30 05:01"
  },
  "SNDK": {
    "nextEarnings": {
      "date": "2026-08-05",
      "hour": "",
      "epsEstimate": 35.1395
    },
    "news": [
      {
        "headline": "Is Sandisk (SNDK) Cheap, Or Is AI Demand Already Priced In?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f809a34984aa5cfeb91e2846751c6d9b7b93fb834e3a4e0999d236074adde0e0",
        "datetime": 1785344847
      },
      {
        "headline": "Uncover the latest developments among S&P500 stocks in today's session.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=121414bfed0be327ad35d640534fff40dec1c43ecc38b7d5cdce74c34bbab213",
        "datetime": 1785342901
      },
      {
        "headline": "Intel Continues to Get Pummeled: Why One Analyst Maintains His Conviction That 130% Gains Will Come",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4f7d87b45137d0c7bf47266030c6baa2499d54e1aa03e86bb5bf0a6435e47534",
        "datetime": 1785341896
      },
      {
        "headline": "SanDisk Cratered Again But One Analyst Believes 200% Returns Are Coming",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=39a2aa793f70528d563312792cfe4e3315ba5bcc3b62a85b3af9e9a459f5d3fa",
        "datetime": 1785341554
      },
      {
        "headline": "SanDisk Sinks 7%, Micron Slides 6% as Memory Selloff Intensifies; Seagate Bucks the Trend",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=25171b5d4365ee96c13ddf94641e8561086f51523810488575a3d9f2b619cb25",
        "datetime": 1785340215
      }
    ],
    "_fetched_at": 1785355201.828633,
    "_updated_label": "2026-07-30 05:01"
  },
  "WDC": {
    "nextEarnings": {
      "date": "2026-08-05",
      "hour": "amc",
      "epsEstimate": 3.3281
    },
    "news": [
      {
        "headline": "Intel Continues to Get Pummeled: Why One Analyst Maintains His Conviction That 130% Gains Will Come",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4f7d87b45137d0c7bf47266030c6baa2499d54e1aa03e86bb5bf0a6435e47534",
        "datetime": 1785341896
      },
      {
        "headline": "SanDisk Cratered Again But One Analyst Believes 200% Returns Are Coming",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=39a2aa793f70528d563312792cfe4e3315ba5bcc3b62a85b3af9e9a459f5d3fa",
        "datetime": 1785341554
      },
      {
        "headline": "SanDisk Sinks 7%, Micron Slides 6% as Memory Selloff Intensifies; Seagate Bucks the Trend",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=25171b5d4365ee96c13ddf94641e8561086f51523810488575a3d9f2b619cb25",
        "datetime": 1785340215
      },
      {
        "headline": "Vertiv, SoFi, GE HealthCare, Micron, SK Hynix, Garmin, and More Stocks That Explain Today’s Market",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c187561db40cb42b9b9ca250115bbb016ee6251642df65bb0a36240a608db9d6",
        "datetime": 1785337680
      },
      {
        "headline": "Seagate Stock Rises After Blowout Earnings Fueled by AI Demand",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4a7b6cbc752f98bc48cebc022f6840671db2581b4859b31ab341f2c42701a70a",
        "datetime": 1785336000
      }
    ],
    "_fetched_at": 1785355201.828633,
    "_updated_label": "2026-07-30 05:01"
  }
};
