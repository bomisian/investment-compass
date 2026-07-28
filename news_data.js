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
        "headline": "Update: US Equity Indexes Mixed as Tech Heads Lower While Iran Strikes Remain Halted",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1d197bbfe0865a94764c2d60eec60f5ed65bf5c8e90686c9d09cf516eee7d0fa",
        "datetime": 1785181878
      },
      {
        "headline": "Sector Update: Tech Stocks Decline Late Afternoon",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b8a0ec531ee52de71d302ffc31c88474fcad576dc124e0475620204b24a261ff",
        "datetime": 1785181833
      },
      {
        "headline": "Stock Market Today: Dow Up, Auto Stock Tests Entry; AI Stock Fights Back Before Key Event (Live Coverage)",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cd3659c37ad7ff2b19aead67f31568eab7566fb432eac89c35465995ddfb21dd",
        "datetime": 1785181179
      },
      {
        "headline": "Nvidia Guarantees $250B for OpenAI So Everyone One Day Can Get Paid",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5245abd53ed288ae84e2eb48682a9b4f36927a6b208a1b76ff7c719d04d95fa4",
        "datetime": 1785181169
      },
      {
        "headline": "Still Down 26% in 2026, Is Palantir’s Rebound Just Getting Started?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5ed47baf059ba6e51cfe697fe09638f7ebcd3975e00c2cc08553e95c00bad0b5",
        "datetime": 1785181067
      }
    ],
    "_fetched_at": 1785189601.805591,
    "_updated_label": "2026-07-28 07:00"
  },
  "AAPL": {
    "nextEarnings": {
      "date": "2026-07-30",
      "hour": "amc",
      "epsEstimate": 1.9271
    },
    "news": [
      {
        "headline": "Nvidia drops 4%, leading chip stocks lower amid renewed worries of circular financing",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2d7775c4b68436816545af031b7be209549d825bc32ca67ccac08ff694573927",
        "datetime": 1785180789
      },
      {
        "headline": "Apple sued after alleged App Store crypto scam cost users $1.8M",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cb40c6fd39f1fd48243a498731ce91e44c365e780f572639bc70bead51b1f4d2",
        "datetime": 1785176895
      },
      {
        "headline": "Memory-Chip Stocks Micron, SK Hynix Drop After China Rival's IPO",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9163cf49d805111cef74a490a2d19e4eb5e016ef043963dbfc72f967f165cda5",
        "datetime": 1785175924
      },
      {
        "headline": "Amazon’s new satellite network for mobile phones could turn up the heat on SpaceX",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=89138d28d25dcab7e843fc9cb1c6523550f33509c02392ef098e2ef889ee15cf",
        "datetime": 1785175709
      },
      {
        "headline": "Explore the S&P500 index on Monday and find out which stocks are the most active in today's session.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=f63f4c342bc2488382cbf721e7aa2a85da40c33941d3c63a9bfda7b3a90ae6fe",
        "datetime": 1785175501
      }
    ],
    "_fetched_at": 1785189601.805591,
    "_updated_label": "2026-07-28 07:00"
  },
  "GOOGL": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "amc",
      "epsEstimate": 3.0933
    },
    "news": [
      {
        "headline": "Oil-Turned-AI Play Baker Hughes Soars On Massive Earnings Beat",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6a592225f84a653d53b73aa33c290bb9ca40a65245c515996217b8e931c2037d",
        "datetime": 1785180010
      },
      {
        "headline": "Alphabet’s Enterprise Surprise is A Great Reason to Keep Buying",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=22a27f23137945587a72155226ef4437de860215006d4d02fe01f9ccb622e9bb",
        "datetime": 1785179563
      },
      {
        "headline": "Monday's session: top gainers and losers in the dow jones index",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=cb78fd5b6d971beed68ff684ddaa78ca399ac0d5c1918fac5995e99449126988",
        "datetime": 1785179405
      },
      {
        "headline": "ADBE Showered Owners With Cash. The Stock Still Lagged The Market",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3c0a38aef1efff913f6544793acccc3cc89c2bb460d77075f80938b61158c6c0",
        "datetime": 1785179143
      },
      {
        "headline": "Entire Market Is Now One Trade, Big Short Investor Steve Eisman Says",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6e7760ae9087302202f88ca701755f39f459a1172b0aa8df5579a845e8dbe3fe",
        "datetime": 1785178815
      }
    ],
    "_fetched_at": 1785189601.805591,
    "_updated_label": "2026-07-28 07:00"
  },
  "MSFT": {
    "nextEarnings": {
      "date": "2026-07-29",
      "hour": "amc",
      "epsEstimate": 4.3274
    },
    "news": [
      {
        "headline": "Update: US Equity Indexes Mixed as Tech Heads Lower While Iran Strikes Remain Halted",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1d197bbfe0865a94764c2d60eec60f5ed65bf5c8e90686c9d09cf516eee7d0fa",
        "datetime": 1785181878
      },
      {
        "headline": "Sector Update: Tech Stocks Decline Late Afternoon",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b8a0ec531ee52de71d302ffc31c88474fcad576dc124e0475620204b24a261ff",
        "datetime": 1785181833
      },
      {
        "headline": "MSFT Stock Gains 3% — Microsoft Unveils AI Cybersecurity Model To Combat Real-Time Threats",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e1681d84bfbcb8b342c5a8c3527925f1bf794cd34798aa43edb82fdd116d2e3a",
        "datetime": 1785181721
      },
      {
        "headline": "Stock Market Today: Dow Up, Auto Stock Tests Entry; AI Stock Fights Back Before Key Event (Live Coverage)",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cd3659c37ad7ff2b19aead67f31568eab7566fb432eac89c35465995ddfb21dd",
        "datetime": 1785181179
      },
      {
        "headline": "Still Down 26% in 2026, Is Palantir’s Rebound Just Getting Started?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5ed47baf059ba6e51cfe697fe09638f7ebcd3975e00c2cc08553e95c00bad0b5",
        "datetime": 1785181067
      }
    ],
    "_fetched_at": 1785189601.805591,
    "_updated_label": "2026-07-28 07:00"
  },
  "AMZN": {
    "nextEarnings": {
      "date": "2026-07-30",
      "hour": "amc",
      "epsEstimate": 1.8556
    },
    "news": [
      {
        "headline": "Amazon plans to deploy more than 5,000 satellites for new telecom service",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d6071641a11951856539777a5c280da119a59713bb8cbaf754c8a0360dbc42bf",
        "datetime": 1785182096
      },
      {
        "headline": "Sector Update: Tech Stocks Decline Late Afternoon",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b8a0ec531ee52de71d302ffc31c88474fcad576dc124e0475620204b24a261ff",
        "datetime": 1785181833
      },
      {
        "headline": "Warner Bros. Discovery Sues Amazon Over Employee Poaching",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c327c91b1c1a1192c77c3da07822338c8e1b6f133c34bf8811fddad2eb4efd89",
        "datetime": 1785179923
      },
      {
        "headline": "Alphabet’s Enterprise Surprise is A Great Reason to Keep Buying",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=22a27f23137945587a72155226ef4437de860215006d4d02fe01f9ccb622e9bb",
        "datetime": 1785179563
      },
      {
        "headline": "Monday's session: top gainers and losers in the dow jones index",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=cb78fd5b6d971beed68ff684ddaa78ca399ac0d5c1918fac5995e99449126988",
        "datetime": 1785179405
      }
    ],
    "_fetched_at": 1785189601.805591,
    "_updated_label": "2026-07-28 07:00"
  },
  "TSM": {
    "nextEarnings": {
      "date": "2026-10-14",
      "hour": "amc",
      "epsEstimate": 26.4094
    },
    "news": [
      {
        "headline": "TSMC: AI Demand Visibility Is Intact, But Margin Dilution Will Weigh On Sentiment",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=eda877bd54fa4b977e6ce5cda6289a1694ca1cd36f730e5e85ec6b9dee7c4cdf",
        "datetime": 1785163935
      },
      {
        "headline": "EXCLUSIVE: After Nvidia And SK Hynix, These 3 AI Stocks Could Be The Next Winners, CEO Says",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=dc8f5a3d11ecbaf094c6662287f54de8459f56192c9bfa83784584ab2e055f20",
        "datetime": 1785147650
      },
      {
        "headline": "Intel’s Earnings Could Quadruple in 4 Years, Analyst Says",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=4716ac297ce5455ba35ebec7a3f396fbc73900f70d9dbcd05a07a230a909d674",
        "datetime": 1785144425
      },
      {
        "headline": "Ford To Rally Around 22%? Here Are 10 Top Analyst Forecasts For Monday",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=caef4cdf149bf69a383c2bbfca95323d4e25ea77539f1c109fddbd3702dea02d",
        "datetime": 1785139115
      },
      {
        "headline": "Tracking Philippe Laffont's Coatue Management Portfolio - Q1 2026 Update",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=4fe04410f66bb01acca10220d74f89f605accd25abe2d29cb8082c3a7594de57",
        "datetime": 1785095093
      }
    ],
    "_fetched_at": 1785189601.805591,
    "_updated_label": "2026-07-28 07:01"
  },
  "AVGO": {
    "nextEarnings": {
      "date": "2026-09-02",
      "hour": "amc",
      "epsEstimate": 3.3012
    },
    "news": [
      {
        "headline": "The Big AI Capex Question: Should Investors Buy Nvidia or Broadcom This Week?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=812fd0fd56f0759bbdbda2f75d1acdb068d4145f5d54e9cd5f31782e4c2b8921",
        "datetime": 1785179403
      },
      {
        "headline": "Should You Buy Broadcom Stock While It's Under $400?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=14368836094c26520bb65b86ea836d74b885a43ab30c0765a1b1d4062e9629f0",
        "datetime": 1785172800
      },
      {
        "headline": "MaxLinear Rides on AI Infrastructure Momentum: More Upside Ahead?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6ee187e7e8f3664394ecb99c33f16ee847e92a0ea581b8f2260c49530ac2571f",
        "datetime": 1785171780
      },
      {
        "headline": "Broadcom Stock Jumps as Samsung Lands Massive $200 Billion AI Chip Deal",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c69ca65676120353dd03e4b281b5a75bbfc3f3d14fc54d1d6c08566e71aa6513",
        "datetime": 1785170870
      },
      {
        "headline": "CXMT, Sandisk, ASML, SpaceX, D-Wave Quantum, and More Stocks That Explain Today’s Market",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fb4e0e67202d63abf3bf672c37570cee1e18fa07cd890ee77d878b44d7dd0ad1",
        "datetime": 1785169140
      }
    ],
    "_fetched_at": 1785189601.805591,
    "_updated_label": "2026-07-28 07:01"
  },
  "META": {
    "nextEarnings": {
      "date": "2026-07-29",
      "hour": "amc",
      "epsEstimate": 7.3594
    },
    "news": [
      {
        "headline": "Speed Kills and What That Means for Microsoft and Meta on July 29",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=574b5d80a46877652fb08122290fc7bd98605439c93874ccbcec59d05628a907",
        "datetime": 1785180023
      },
      {
        "headline": "AMD’s Microsoft Partnership Validates This Transition So I’m Loading Up",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e50aef1358963cba30c57034a36b1a2f16b4c780aa76048041d89eb9f03b18d6",
        "datetime": 1785179703
      },
      {
        "headline": "Update: Equities Mixed Intraday as Markets Await Fed Decision, More Earnings Reports",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=039207139fd0f0d3272078cfd07aae8b0fb3efd623dcc3fce2410240b9b3f939",
        "datetime": 1785174878
      },
      {
        "headline": "The New Way to Bet Big on Hot Stocks",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=299f848939b8ddaca0975a29ac75a855137db008d5b06133293ce0199ce921d3",
        "datetime": 1785173700
      },
      {
        "headline": "Apple Is Barely Spending on AI While Its Rivals Pour In $700 Billion. Is That Discipline or Denial?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=096a41e0902a79060aedfff399b78a89f692a0ae16aa18cf8a22c8f29a002b85",
        "datetime": 1785173640
      }
    ],
    "_fetched_at": 1785189601.805591,
    "_updated_label": "2026-07-28 07:00"
  },
  "TSLA": {
    "nextEarnings": {
      "date": "2026-10-20",
      "hour": "amc",
      "epsEstimate": 0.5111
    },
    "news": [
      {
        "headline": "Still Down 26% in 2026, Is Palantir’s Rebound Just Getting Started?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5ed47baf059ba6e51cfe697fe09638f7ebcd3975e00c2cc08553e95c00bad0b5",
        "datetime": 1785181067
      },
      {
        "headline": "Prediction: Tesla Stock Will Plunge to $100 If the Nasdaq Enters a Bear Market",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5d18fbed2f26d0e85c75f2b58aa68b0ca93e0d125bf112ee7624203d515121d4",
        "datetime": 1785180000
      },
      {
        "headline": "Tesla Wins UK Appeal in 5G Patent Licensing Case",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f3875434a89781d89c517d80b2c8272e89677d8b528a8fdb26d8826ab3d3759e",
        "datetime": 1785179891
      },
      {
        "headline": "As Elon Musk Promises The Future, Tesla Stock Slides Into The Past",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ed3e727a668a210e4571e2178c47e6ec407a7f8fef712fcaf7f4a3cecc78f68a",
        "datetime": 1785178197
      },
      {
        "headline": "Ford and GM Look to Defense for New Growth",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=467984e0d4a0b243eacf96e49cfffd6e42bb23ea3e9a21c4f95f798a9e89acad",
        "datetime": 1785178080
      }
    ],
    "_fetched_at": 1785189601.805591,
    "_updated_label": "2026-07-28 07:00"
  },
  "MU": {
    "nextEarnings": {
      "date": "2026-09-21",
      "hour": "amc",
      "epsEstimate": 32.2476
    },
    "news": [
      {
        "headline": "Still Down 26% in 2026, Is Palantir’s Rebound Just Getting Started?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5ed47baf059ba6e51cfe697fe09638f7ebcd3975e00c2cc08553e95c00bad0b5",
        "datetime": 1785181067
      },
      {
        "headline": "Nvidia drops 4%, leading chip stocks lower amid renewed worries of circular financing",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2d7775c4b68436816545af031b7be209549d825bc32ca67ccac08ff694573927",
        "datetime": 1785180789
      },
      {
        "headline": "AMD Data Center Growth Seen Beating Expectations Through 2027",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a3f8461d22d59a1f98f948fd72158fef031222b685ac0099fb0755db5255ff6e",
        "datetime": 1785179850
      },
      {
        "headline": "Oracle Stock Is Down 64% in 10 Months. Is This the Best Buying Opportunity in AI -- or a Falling Knife?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=784a178c5aa0ffbe465a0f6620fa2b41728dfecf4be8c16260ada46b8a4a070e",
        "datetime": 1785177960
      },
      {
        "headline": "Memory-Chip Stocks Micron, SK Hynix Drop After China Rival's IPO",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9163cf49d805111cef74a490a2d19e4eb5e016ef043963dbfc72f967f165cda5",
        "datetime": 1785175924
      }
    ],
    "_fetched_at": 1785189601.805591,
    "_updated_label": "2026-07-28 07:01"
  },
  "AMD": {
    "nextEarnings": {
      "date": "2026-08-04",
      "hour": "amc",
      "epsEstimate": 1.6273
    },
    "news": [
      {
        "headline": "Nvidia drops 4%, leading chip stocks lower amid renewed worries of circular financing",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2d7775c4b68436816545af031b7be209549d825bc32ca67ccac08ff694573927",
        "datetime": 1785180789
      },
      {
        "headline": "AMD Data Center Growth Seen Beating Expectations Through 2027",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a3f8461d22d59a1f98f948fd72158fef031222b685ac0099fb0755db5255ff6e",
        "datetime": 1785179850
      },
      {
        "headline": "AMD’s Microsoft Partnership Validates This Transition So I’m Loading Up",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e50aef1358963cba30c57034a36b1a2f16b4c780aa76048041d89eb9f03b18d6",
        "datetime": 1785179703
      },
      {
        "headline": "Stay informed with the top movers within the S&P500 index on Monday.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=d92a31627db5e49a00f7865fdd64cbe8652bf16b62b82f5756be1467c3b2a654",
        "datetime": 1785179101
      },
      {
        "headline": "Sandisk and More Chip Stocks Hit China Roadblocks",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b8755ed7451675f7689245094d5986c24023f7415053628dda03ab0196c9261b",
        "datetime": 1785178080
      }
    ],
    "_fetched_at": 1785189601.805591,
    "_updated_label": "2026-07-28 07:01"
  },
  "INTC": {
    "nextEarnings": {
      "date": "2026-10-21",
      "hour": "amc",
      "epsEstimate": 0.2659
    },
    "news": [
      {
        "headline": "AMD’s Microsoft Partnership Validates This Transition So I’m Loading Up",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e50aef1358963cba30c57034a36b1a2f16b4c780aa76048041d89eb9f03b18d6",
        "datetime": 1785179703
      },
      {
        "headline": "Sandisk and More Chip Stocks Hit China Roadblocks",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b8755ed7451675f7689245094d5986c24023f7415053628dda03ab0196c9261b",
        "datetime": 1785178080
      },
      {
        "headline": "5-star analyst aggressively resets Intel stock price target after earnings",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0c80f55af8f345bd4874be24afc365fe718e55ebfd7511815d0f7815db14de2d",
        "datetime": 1785177120
      },
      {
        "headline": "Explore the S&P500 index on Monday and find out which stocks are the most active in today's session.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=f63f4c342bc2488382cbf721e7aa2a85da40c33941d3c63a9bfda7b3a90ae6fe",
        "datetime": 1785175501
      },
      {
        "headline": "Curious about the most active stocks on Monday?",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=561049fb6b0df58aca2893ee7a7cd9c289a836bcd15f39f751e6679064109d99",
        "datetime": 1785175200
      }
    ],
    "_fetched_at": 1785189601.805591,
    "_updated_label": "2026-07-28 07:01"
  },
  "AMAT": {
    "nextEarnings": {
      "date": "2026-08-13",
      "hour": "amc",
      "epsEstimate": 3.462
    },
    "news": [
      {
        "headline": "CXMT, Sandisk, ASML, SpaceX, D-Wave Quantum, and More Stocks That Explain Today’s Market",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fb4e0e67202d63abf3bf672c37570cee1e18fa07cd890ee77d878b44d7dd0ad1",
        "datetime": 1785177720
      },
      {
        "headline": "3 Reasons Lam Research Is Worth a Closer Look Before July 29 Q4 Earnings",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9b8d7e9d80e0986ec0f7ca2748e65136956209172e8674982d77912f52978ea7",
        "datetime": 1785176167
      },
      {
        "headline": "Which S&P500 stocks are moving on Monday?",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=32a20ea883049ba22d8fec2ef198fc85eb03cbe855ef6311b92620400ca3eab8",
        "datetime": 1785170101
      },
      {
        "headline": "Applied Materials Stock Keeps Winning Upgrades: Is Michael Burry Dead Wrong to Short This Semiconductor Gem?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5466e64e7e9f0a064f34f20da090dc596a47ef620a571c072466c9a8f4be3ac5",
        "datetime": 1785169727
      },
      {
        "headline": "This Congressman Slammed Elon Musk — Then Bought SpaceX Stock",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=e3acf83cabdef8d54a7d4d88543754c814411b137735e4493df6bc3b001a2d16",
        "datetime": 1785167902
      }
    ],
    "_fetched_at": 1785189601.805591,
    "_updated_label": "2026-07-28 07:01"
  },
  "QQQ": {
    "nextEarnings": null,
    "news": [
      {
        "headline": "This Is Not A Normal Market Rotation",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=85b13d58f25ed21694804314f07cb4647b16d01fc98aca616e550cf8939b9714",
        "datetime": 1785172089
      },
      {
        "headline": "Cheaper AI, New Earnings Questions",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=f117f9d32f2e5a50ad5523c6149a3744cfd1f1d348b5b3b4876052e2dc2afdc5",
        "datetime": 1785168900
      },
      {
        "headline": "BlackRock’s Nasdaq ETF Challenger Is Growing — But QQQ Still Pulls 300× More Inflows",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=58f0f7ff02c118ebf2bd36e9f5320b9856334720fb646ca9bd051cd56a147771",
        "datetime": 1785168749
      },
      {
        "headline": "Why Market Volatility May Be Part Of The Bull Case",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=533123b3a7e845801a9417a17d542294833d975f71a5f8da372adc235dd91e81",
        "datetime": 1785167400
      },
      {
        "headline": "Aggressive Buying On Nvidia Backing Massive OpenAI Data Center And Trump Pausing Iran Attacks",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=a8ae200b6564494467842408862bed4ea91f31d8296cccec8845294327d23e2d",
        "datetime": 1785164956
      }
    ],
    "_fetched_at": 1785189601.805591,
    "_updated_label": "2026-07-28 07:00"
  },
  "SPY": {
    "nextEarnings": null,
    "news": [
      {
        "headline": "Cash, Chips, and Chaos: What’s Really Driving ETF Flows",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a197a2769eaa14fa0d801d4e5d2e29c2dacae64da68b44bdf01c2d51d6fa1fbf",
        "datetime": 1785178800
      },
      {
        "headline": "UPRO: The One Rule You Need to Know Before Buying This 3X S&P 500 ETF",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cbeea917c5ef3408c16e6d5299dac26d8e298e11e74823cbe68403782cbdcbdf",
        "datetime": 1785177140
      },
      {
        "headline": "Why Paying Off $80K in Student Loans Could Cost You $500,000",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=159beb33dea8bced98debec3d7f0f01921d72376274b9e9b100129f5d1b91139",
        "datetime": 1785174801
      },
      {
        "headline": "This Is Not A Normal Market Rotation",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=85b13d58f25ed21694804314f07cb4647b16d01fc98aca616e550cf8939b9714",
        "datetime": 1785172089
      },
      {
        "headline": "Coreweave is $71 After Falling 43% in a Year: One Analyst Thinks It Can Rocket to $250",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9109c7fa89b54d8d5e8da285caa18ccc807632885fab0e37ae5a43f16d1e5ba1",
        "datetime": 1785170664
      }
    ],
    "_fetched_at": 1785189601.805591,
    "_updated_label": "2026-07-28 07:00"
  },
  "ORCL": {
    "nextEarnings": {
      "date": "2026-09-07",
      "hour": "",
      "epsEstimate": 1.7739
    },
    "news": [
      {
        "headline": "ADBE Showered Owners With Cash. The Stock Still Lagged The Market",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3c0a38aef1efff913f6544793acccc3cc89c2bb460d77075f80938b61158c6c0",
        "datetime": 1785179143
      },
      {
        "headline": "Oracle Stock Is Down 64% in 10 Months. Is This the Best Buying Opportunity in AI -- or a Falling Knife?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=784a178c5aa0ffbe465a0f6620fa2b41728dfecf4be8c16260ada46b8a4a070e",
        "datetime": 1785177960
      },
      {
        "headline": "Explore the S&P500 index on Monday and find out which stocks are the most active in today's session.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=f63f4c342bc2488382cbf721e7aa2a85da40c33941d3c63a9bfda7b3a90ae6fe",
        "datetime": 1785175501
      },
      {
        "headline": "What Happened to Tech Stocks in 2000 That Many Investors Think Could Happen to Nvidia Today",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cb2949d68f33fe8e8fe1e5e0a299ebd803b93608ae43989f43c3330e356f2131",
        "datetime": 1785168760
      },
      {
        "headline": "Does Azure AI Growth Make Microsoft Stock a Buy Ahead of Q4 Earnings?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=bf93343b77591556ae4229e751ee1fd6b0d814b4c78cc1da78b49749c19b5e11",
        "datetime": 1785168180
      }
    ],
    "_fetched_at": 1785189601.805591,
    "_updated_label": "2026-07-28 07:00"
  },
  "CRM": {
    "nextEarnings": {
      "date": "2026-09-01",
      "hour": "amc",
      "epsEstimate": 3.3057
    },
    "news": [
      {
        "headline": "Stock Market Today: Dow Up, Auto Stock Tests Entry; AI Stock Fights Back Before Key Event (Live Coverage)",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cd3659c37ad7ff2b19aead67f31568eab7566fb432eac89c35465995ddfb21dd",
        "datetime": 1785181179
      },
      {
        "headline": "Still Down 26% in 2026, Is Palantir’s Rebound Just Getting Started?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5ed47baf059ba6e51cfe697fe09638f7ebcd3975e00c2cc08553e95c00bad0b5",
        "datetime": 1785181067
      },
      {
        "headline": "Salesforce Won a $1.6 Billion Federal AI Contract on Friday. Here's What It Says About Agentforce Demand.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fd2236b65559844181cab57a1954e158dea5dbaa00a976038f711d55b2c26db7",
        "datetime": 1785180540
      },
      {
        "headline": "Monday's session: top gainers and losers in the dow jones index",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=cb78fd5b6d971beed68ff684ddaa78ca399ac0d5c1918fac5995e99449126988",
        "datetime": 1785179405
      },
      {
        "headline": "ADBE Showered Owners With Cash. The Stock Still Lagged The Market",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3c0a38aef1efff913f6544793acccc3cc89c2bb460d77075f80938b61158c6c0",
        "datetime": 1785179143
      }
    ],
    "_fetched_at": 1785189601.805591,
    "_updated_label": "2026-07-28 07:00"
  },
  "PLTR": {
    "nextEarnings": {
      "date": "2026-08-03",
      "hour": "",
      "epsEstimate": 0.354
    },
    "news": [
      {
        "headline": "Still Down 26% in 2026, Is Palantir’s Rebound Just Getting Started?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5ed47baf059ba6e51cfe697fe09638f7ebcd3975e00c2cc08553e95c00bad0b5",
        "datetime": 1785181067
      },
      {
        "headline": "Nvidia and SpaceX Just Joined a New AI Security Alliance. Here's What It Means for Both Stocks.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1906e7e42f9acf20b657336250fe9ba599b9eb5066fedc7a66785e3753a4f02c",
        "datetime": 1785180121
      },
      {
        "headline": "Stay informed with the top movers within the S&P500 index on Monday.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=d92a31627db5e49a00f7865fdd64cbe8652bf16b62b82f5756be1467c3b2a654",
        "datetime": 1785179101
      },
      {
        "headline": "Salesforce Surges 7%, ServiceNow Jumps 8%, Workday Jumps 10% as Software Rebounds on AI Rotation",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b0bb4dece8e94a725ee8286b3a9ca5717f0b34ea424d64e94cb50d44f45c30f0",
        "datetime": 1785177393
      },
      {
        "headline": "Prediction: Is It Too Late to Buy Palantir Stock?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d76f54fe14baa107911b589d9b6323db303ae9f9124a975daa8fdac171507b7c",
        "datetime": 1785177041
      }
    ],
    "_fetched_at": 1785189601.805591,
    "_updated_label": "2026-07-28 07:00"
  },
  "QCOM": {
    "nextEarnings": {
      "date": "2026-07-29",
      "hour": "amc",
      "epsEstimate": 2.2724
    },
    "news": [
      {
        "headline": "Is Qualcomm Stock a Buy Ahead of July 29 Q3 Earnings?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a6896a3970d0ae0e5bb19e176bea372e13c0b388433df2b5527540a19a182600",
        "datetime": 1785175383
      },
      {
        "headline": "Update: Equities Mixed Intraday as Markets Await Fed Decision, More Earnings Reports",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=039207139fd0f0d3272078cfd07aae8b0fb3efd623dcc3fce2410240b9b3f939",
        "datetime": 1785174878
      },
      {
        "headline": "Arm Holdings Has Fallen 28% in the Past Month. Should You Buy Before July 29 Earnings?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b14638d2aca5c276845d4bb789e8492512032af38e1892a143c17f65b1030d25",
        "datetime": 1785172822
      },
      {
        "headline": "Week ahead: Wall Street's biggest summer test is here with Big Tech, Fed on deck",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2a1b192dba9661ce0046ef537c7fb5a57c2de731a8928d17065289d014dabaa0",
        "datetime": 1785162600
      },
      {
        "headline": "Beijing Just Aimed at Taiwan Semiconductor Manufacturing Company (NYSE:TSM). Here’s Why the Bull Case Still Wins",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=77275e192f148ad4fa41cce982291bb2785f3d35528b7e672745485b8d193ed6",
        "datetime": 1785161307
      }
    ],
    "_fetched_at": 1785189601.805591,
    "_updated_label": "2026-07-28 07:01"
  },
  "ARM": {
    "nextEarnings": {
      "date": "2026-07-29",
      "hour": "amc",
      "epsEstimate": 0.4055
    },
    "news": [
      {
        "headline": "Arm Holdings' Next Earnings Report on July 29 Could Send the Stock Soaring. Here's Why.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cc0155b7843b88add1a4b3730014312d7fec61b83efd9991799609d1a501d065",
        "datetime": 1785178801
      },
      {
        "headline": "SpaceX stock plunge sends a big reminder to those who want to get in on or near IPO day",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7b9379626cb56ad18115999dec6d0991cb6da83c1e15738ad6af15a9c2931e11",
        "datetime": 1785174464
      },
      {
        "headline": "Arm Holdings Has Fallen 28% in the Past Month. Should You Buy Before July 29 Earnings?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b14638d2aca5c276845d4bb789e8492512032af38e1892a143c17f65b1030d25",
        "datetime": 1785172822
      },
      {
        "headline": "US Futures Rise as Megacap Earnings and Fed Decision Headline Quarter's Busiest Week",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=05c4c239151ab7be91c966dbd7e5d02cb2a22a6444ea5b44450230ccca1e20a7",
        "datetime": 1785171883
      },
      {
        "headline": "ARM to Post Q1 Earnings: Should the Stock Be in Your Portfolio Now?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=bb6718421807846ba5a64a49c6d8ea200c7812a5d4d3d6ddf87d9aa2823e9289",
        "datetime": 1785168780
      }
    ],
    "_fetched_at": 1785189601.805591,
    "_updated_label": "2026-07-28 07:01"
  },
  "MRVL": {
    "nextEarnings": {
      "date": "2026-08-20",
      "hour": "",
      "epsEstimate": 0.939
    },
    "news": [
      {
        "headline": "Sandisk and More Chip Stocks Hit China Roadblocks",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b8755ed7451675f7689245094d5986c24023f7415053628dda03ab0196c9261b",
        "datetime": 1785178080
      },
      {
        "headline": "Dell Technologies vs. Marvell Technology: Which Artificial Intelligence Infrastructure Stock Is a Better Buy in 2026?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e23aaae07991becfc4f6b5d971a52010737f25c282631e0aed4e3fe5da0f9d76",
        "datetime": 1785177962
      },
      {
        "headline": "MaxLinear Rides on AI Infrastructure Momentum: More Upside Ahead?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6ee187e7e8f3664394ecb99c33f16ee847e92a0ea581b8f2260c49530ac2571f",
        "datetime": 1785171780
      },
      {
        "headline": "Is Silicon Motion Stock a Strong Buy Before Q2 Earnings?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6b92aa70c219ab8e5057af4364bcad9c4697dac0a3d5d32876b17634fff1a8a5",
        "datetime": 1785169320
      },
      {
        "headline": "CXMT, Sandisk, ASML, SpaceX, D-Wave Quantum, and More Stocks That Explain Today’s Market",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fb4e0e67202d63abf3bf672c37570cee1e18fa07cd890ee77d878b44d7dd0ad1",
        "datetime": 1785169140
      }
    ],
    "_fetched_at": 1785189601.805591,
    "_updated_label": "2026-07-28 07:01"
  },
  "ASML": {
    "nextEarnings": {
      "date": "2026-10-14",
      "hour": "bmo",
      "epsEstimate": 8.4462
    },
    "news": [
      {
        "headline": "Why ASML Holdings Plunged Today",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fc912ff86692a278c38e537d94b1575bfd2ab5b2058adc07469dba770fbb6f86",
        "datetime": 1785181970
      },
      {
        "headline": "Sector Update: Tech Stocks Decline Late Afternoon",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b8a0ec531ee52de71d302ffc31c88474fcad576dc124e0475620204b24a261ff",
        "datetime": 1785181833
      },
      {
        "headline": "Sandisk and More Chip Stocks Hit China Roadblocks",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b8755ed7451675f7689245094d5986c24023f7415053628dda03ab0196c9261b",
        "datetime": 1785178080
      },
      {
        "headline": "CXMT, Sandisk, ASML, SpaceX, D-Wave Quantum, and More Stocks That Explain Today’s Market",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fb4e0e67202d63abf3bf672c37570cee1e18fa07cd890ee77d878b44d7dd0ad1",
        "datetime": 1785177720
      },
      {
        "headline": "Memory-Chip Stocks Micron, SK Hynix Drop After China Rival's IPO",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9163cf49d805111cef74a490a2d19e4eb5e016ef043963dbfc72f967f165cda5",
        "datetime": 1785175924
      }
    ],
    "_fetched_at": 1785189601.805591,
    "_updated_label": "2026-07-28 07:01"
  },
  "LRCX": {
    "nextEarnings": {
      "date": "2026-07-29",
      "hour": "amc",
      "epsEstimate": 1.7172
    },
    "news": [
      {
        "headline": "Stay informed with the top movers within the S&P500 index on Monday.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=d92a31627db5e49a00f7865fdd64cbe8652bf16b62b82f5756be1467c3b2a654",
        "datetime": 1785179101
      },
      {
        "headline": "CXMT, Sandisk, ASML, SpaceX, D-Wave Quantum, and More Stocks That Explain Today’s Market",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fb4e0e67202d63abf3bf672c37570cee1e18fa07cd890ee77d878b44d7dd0ad1",
        "datetime": 1785177720
      },
      {
        "headline": "3 Reasons Lam Research Is Worth a Closer Look Before July 29 Q4 Earnings",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9b8d7e9d80e0986ec0f7ca2748e65136956209172e8674982d77912f52978ea7",
        "datetime": 1785176167
      },
      {
        "headline": "Which S&P500 stocks are moving on Monday?",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=32a20ea883049ba22d8fec2ef198fc85eb03cbe855ef6311b92620400ca3eab8",
        "datetime": 1785170101
      },
      {
        "headline": "Most Stocks Are Higher Despite the S&P 500's Reversal",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1437fd0e552309d5cc0f5980c59e09ce3d66dec1c509e544fcdd2054e882b7e9",
        "datetime": 1785167325
      }
    ],
    "_fetched_at": 1785189601.805591,
    "_updated_label": "2026-07-28 07:01"
  },
  "KLAC": {
    "nextEarnings": {
      "date": "2026-07-28",
      "hour": "amc",
      "epsEstimate": 1.0163
    },
    "news": [
      {
        "headline": "CXMT, Sandisk, ASML, SpaceX, D-Wave Quantum, and More Stocks That Explain Today’s Market",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fb4e0e67202d63abf3bf672c37570cee1e18fa07cd890ee77d878b44d7dd0ad1",
        "datetime": 1785177720
      },
      {
        "headline": "3 Reasons Lam Research Is Worth a Closer Look Before July 29 Q4 Earnings",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9b8d7e9d80e0986ec0f7ca2748e65136956209172e8674982d77912f52978ea7",
        "datetime": 1785176167
      },
      {
        "headline": "Should You Buy, Sell or Hold FormFactor Stock Before Q2 Earnings?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3c1bab5565061974199855ddc823620c6d38d534a5ebe33f3242fafc4cac0df1",
        "datetime": 1785169860
      },
      {
        "headline": "Is KLA (KLAC) Undervalued Ahead Of Earnings Or Already Fully Valued?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=290c14c3b629544043e72d73c5eff89149f100b5244950292c7b177d7cad0779",
        "datetime": 1785161264
      },
      {
        "headline": "ASML and U.S. chip stocks sink on report of China’s DUV breakthrough",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=142a2f32b94f8f0daefc762a1c944c226b3bd7a20199485bae24497fbd89d204",
        "datetime": 1785160474
      }
    ],
    "_fetched_at": 1785189601.805591,
    "_updated_label": "2026-07-28 07:01"
  },
  "SNDK": {
    "nextEarnings": {
      "date": "2026-08-05",
      "hour": "",
      "epsEstimate": 34.7802
    },
    "news": [
      {
        "headline": "Stay informed with the top movers within the S&P500 index on Monday.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=d92a31627db5e49a00f7865fdd64cbe8652bf16b62b82f5756be1467c3b2a654",
        "datetime": 1785179101
      },
      {
        "headline": "Sandisk and More Chip Stocks Hit China Roadblocks",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b8755ed7451675f7689245094d5986c24023f7415053628dda03ab0196c9261b",
        "datetime": 1785178080
      },
      {
        "headline": "Memory-Chip Stocks Micron, SK Hynix Drop After China Rival's IPO",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9163cf49d805111cef74a490a2d19e4eb5e016ef043963dbfc72f967f165cda5",
        "datetime": 1785175924
      },
      {
        "headline": "Why Sandisk Stock Crashed on Monday",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ae1c44b95d15b2d268b37c226262a20dde0faeb0da10fc8b9cb3036bf73896a1",
        "datetime": 1785174478
      },
      {
        "headline": "Chip Stocks Tank While Software Shines",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f8d82e355401d1d4ff1cadcb0a59b357c87e68920d23f5d99109309a32574002",
        "datetime": 1785173992
      }
    ],
    "_fetched_at": 1785189601.805591,
    "_updated_label": "2026-07-28 07:01"
  },
  "WDC": {
    "nextEarnings": {
      "date": "2026-08-05",
      "hour": "amc",
      "epsEstimate": 3.3281
    },
    "news": [
      {
        "headline": "Stay informed with the top movers within the S&P500 index on Monday.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=d92a31627db5e49a00f7865fdd64cbe8652bf16b62b82f5756be1467c3b2a654",
        "datetime": 1785179101
      },
      {
        "headline": "Sandisk and More Chip Stocks Hit China Roadblocks",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b8755ed7451675f7689245094d5986c24023f7415053628dda03ab0196c9261b",
        "datetime": 1785178080
      },
      {
        "headline": "CXMT, Sandisk, ASML, SpaceX, D-Wave Quantum, and More Stocks That Explain Today’s Market",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fb4e0e67202d63abf3bf672c37570cee1e18fa07cd890ee77d878b44d7dd0ad1",
        "datetime": 1785177720
      },
      {
        "headline": "Seagate, Western Digital Slide Again. Morgan Stanley Still 'Pounding The Table' For Both AI Stocks.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a4df4bf90dc7613e3e3a9c440366bac8cce29cfd33407ef32e5f0a399a216ee0",
        "datetime": 1785170386
      },
      {
        "headline": "Is Silicon Motion Stock a Strong Buy Before Q2 Earnings?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6b92aa70c219ab8e5057af4364bcad9c4697dac0a3d5d32876b17634fff1a8a5",
        "datetime": 1785169320
      }
    ],
    "_fetched_at": 1785189601.805591,
    "_updated_label": "2026-07-28 07:01"
  }
};
