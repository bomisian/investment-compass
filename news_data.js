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
        "headline": "NVIDIA (NASDAQ:NVDA): A High Growth Stock with a Technical Breakout Setup",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=02e58fc5716000caa8efcd106accca13801d3bf4526819274806a48372823a3e",
        "datetime": 1785141052
      },
      {
        "headline": "Netflix Is Down 41% in 1 Year. Could the Sell-Off Be Nearing an End?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=53ddfe2abb677b9804218e7546f055c208a33fe8248c30c9832082796316234c",
        "datetime": 1785138000
      },
      {
        "headline": "Fed Chair Kevin Warsh Faces a Committee Where 9 of 19 Members Are Signaling Higher Interest Rates This Year",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a471258346ad5f0db89df638611eecba98f98fef2eaef88f80d5fa3ef23e29fe",
        "datetime": 1785136800
      },
      {
        "headline": "Millionaire Maker or Market Hype? The Honest Truth About TMC The Metals Company.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7bd11be7da904e82145cfe9bf32dd71d6b08def2113b59f17149b8566dea9e68",
        "datetime": 1785135900
      },
      {
        "headline": "How Lisa Su Has Positioned AMD to Be a Big AI Winner and Why the Stock Is a Buy",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=707f26c092351ba3875b29ca2e601028732a4c2a50118ff873bbdd762a043a32",
        "datetime": 1785135000
      }
    ],
    "_fetched_at": 1785142782.9617476,
    "_updated_label": "2026-07-27 18:00"
  },
  "AAPL": {
    "nextEarnings": {
      "date": "2026-07-30",
      "hour": "amc",
      "epsEstimate": 1.9299
    },
    "news": [
      {
        "headline": "Google Joins Apple, Microsoft, Nintendo In Price Hikes As Memory Costs Surge Sixfold: Retail Bulls Unfazed After Q2 Capex Blow",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7bb66ad95ee58839621cc44767a0622ec9ec83b64783a9f7446d8632ad576bed",
        "datetime": 1785133251
      },
      {
        "headline": "Wall Street Limps Into a Loaded Week: Iran Risk, Fresh Tariffs and a Chip-Sector Wobble",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=3d03d3812adba79964f84ca16ade6aa10d3ca658cf0f9f92aaffbcf0979b10fb",
        "datetime": 1785131589
      },
      {
        "headline": "S&P 500 On Track To Post Best Net Profit Margin Since 2009: Market Strategist Says Big Tech Is Driving An ‘Unprecedented Boom’",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cd4540dd0b556d80aa825c059a8fcb7be9ca055f282b9d3d373eba476d29de33",
        "datetime": 1785129530
      },
      {
        "headline": "QQQ And Tech Earnings: They Can't All Win The CapEx Arms Race",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=e4f0a0fb2e885029434f70a85d8ee40a7826afcc8da27eb01dac750fd0fc4876",
        "datetime": 1785125049
      },
      {
        "headline": "5 Earnings Reports to Watch as Big Tech’s AI Spending Faces a Test",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e33f09dde5e51a4ed01776e4d16a2d3d0c1520b8c0c309b80db0900874770c6a",
        "datetime": 1785119055
      }
    ],
    "_fetched_at": 1785142782.9617476,
    "_updated_label": "2026-07-27 18:00"
  },
  "GOOGL": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "amc",
      "epsEstimate": 3.0933
    },
    "news": [
      {
        "headline": "Google’s $205B AI Data Center Bet Rattles Wall Street",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ad7ed3332e42d84d1e1c2cb3a6547bb27a1cbfa88e60f58663d848501d6a3d74",
        "datetime": 1785134382
      },
      {
        "headline": "Google Joins Apple, Microsoft, Nintendo In Price Hikes As Memory Costs Surge Sixfold: Retail Bulls Unfazed After Q2 Capex Blow",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7bb66ad95ee58839621cc44767a0622ec9ec83b64783a9f7446d8632ad576bed",
        "datetime": 1785133251
      },
      {
        "headline": "Why Google Cloud’s Hot Sales Can’t Save the Stock",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=17a61e40aa5d1808a7c925e2691c01dd57c3ef8ee9780ac42bca27e759a619bb",
        "datetime": 1785132000
      },
      {
        "headline": "NVDA Stock Rises Overnight: Chip Giant’s Deals With South Korea’s SK Hynix, Naver Revive ‘Breakout’ View",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=da04f4f379963460e68d465ac3579d1f3462fc3e88c2fee49231fd520ff13fcf",
        "datetime": 1785131612
      },
      {
        "headline": "S&P 500 On Track To Post Best Net Profit Margin Since 2009: Market Strategist Says Big Tech Is Driving An ‘Unprecedented Boom’",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cd4540dd0b556d80aa825c059a8fcb7be9ca055f282b9d3d373eba476d29de33",
        "datetime": 1785129530
      }
    ],
    "_fetched_at": 1785142782.9617476,
    "_updated_label": "2026-07-27 17:59"
  },
  "MSFT": {
    "nextEarnings": {
      "date": "2026-07-29",
      "hour": "amc",
      "epsEstimate": 4.3277
    },
    "news": [
      {
        "headline": "Google Joins Apple, Microsoft, Nintendo In Price Hikes As Memory Costs Surge Sixfold: Retail Bulls Unfazed After Q2 Capex Blow",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7bb66ad95ee58839621cc44767a0622ec9ec83b64783a9f7446d8632ad576bed",
        "datetime": 1785133251
      },
      {
        "headline": "Wall Street Limps Into a Loaded Week: Iran Risk, Fresh Tariffs and a Chip-Sector Wobble",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=3d03d3812adba79964f84ca16ade6aa10d3ca658cf0f9f92aaffbcf0979b10fb",
        "datetime": 1785131589
      },
      {
        "headline": "S&P 500 On Track To Post Best Net Profit Margin Since 2009: Market Strategist Says Big Tech Is Driving An ‘Unprecedented Boom’",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cd4540dd0b556d80aa825c059a8fcb7be9ca055f282b9d3d373eba476d29de33",
        "datetime": 1785129530
      },
      {
        "headline": "Alphabet, Amazon, and Meta Will Spend Over $500 Billion on AI in 2026. Nvidia Collects a Huge Share.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8d075726ba401e883d98c60a611e70b42f94f29c477b5db8ee15fa15dab8d13b",
        "datetime": 1785125100
      },
      {
        "headline": "QQQ And Tech Earnings: They Can't All Win The CapEx Arms Race",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=e4f0a0fb2e885029434f70a85d8ee40a7826afcc8da27eb01dac750fd0fc4876",
        "datetime": 1785125049
      }
    ],
    "_fetched_at": 1785142782.9617476,
    "_updated_label": "2026-07-27 17:59"
  },
  "AMZN": {
    "nextEarnings": {
      "date": "2026-07-30",
      "hour": "amc",
      "epsEstimate": 1.8556
    },
    "news": [
      {
        "headline": "Wall Street Limps Into a Loaded Week: Iran Risk, Fresh Tariffs and a Chip-Sector Wobble",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=3d03d3812adba79964f84ca16ade6aa10d3ca658cf0f9f92aaffbcf0979b10fb",
        "datetime": 1785131589
      },
      {
        "headline": "S&P 500 On Track To Post Best Net Profit Margin Since 2009: Market Strategist Says Big Tech Is Driving An ‘Unprecedented Boom’",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cd4540dd0b556d80aa825c059a8fcb7be9ca055f282b9d3d373eba476d29de33",
        "datetime": 1785129530
      },
      {
        "headline": "Prediction: CEO Andy Jassy Will Raise Amazon's Full-Year 2026 Capex Guide on July 30",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1097c46934ebc28030290405b1c564ea0ed036b36246e4ff11a5a2a6f13a7bf8",
        "datetime": 1785126000
      },
      {
        "headline": "Alphabet, Amazon, and Meta Will Spend Over $500 Billion on AI in 2026. Nvidia Collects a Huge Share.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8d075726ba401e883d98c60a611e70b42f94f29c477b5db8ee15fa15dab8d13b",
        "datetime": 1785125100
      },
      {
        "headline": "QQQ And Tech Earnings: They Can't All Win The CapEx Arms Race",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=e4f0a0fb2e885029434f70a85d8ee40a7826afcc8da27eb01dac750fd0fc4876",
        "datetime": 1785125049
      }
    ],
    "_fetched_at": 1785142782.9617476,
    "_updated_label": "2026-07-27 17:59"
  },
  "TSM": {
    "nextEarnings": {
      "date": "2026-10-14",
      "hour": "amc",
      "epsEstimate": 26.4094
    },
    "news": [
      {
        "headline": "Tracking Philippe Laffont's Coatue Management Portfolio - Q1 2026 Update",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=4fe04410f66bb01acca10220d74f89f605accd25abe2d29cb8082c3a7594de57",
        "datetime": 1785095093
      },
      {
        "headline": "Tracking Lone Pine Capital Portfolio - Q1 2026 Update",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=be41904ebdcc5bca5c274b445a00f402da10ab95c9fff40563b47912a70c691e",
        "datetime": 1785092910
      },
      {
        "headline": "Tracking Ole Andreas Halvorsen's Viking Global Portfolio - Q1 2026 Update",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=8e8fa4d223ad5a2aa5e8232d0023938544c3ad8c4fad52c33e670c1bcd4d404f",
        "datetime": 1785077971
      },
      {
        "headline": "Intel's Best Days Are Still Well Ahead (Rating Upgrade)",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=f1ec53b49d75782c77a7d5db0024b3fb0adf5ab3de7d6a678ac41c9b2f4cafa1",
        "datetime": 1785058667
      },
      {
        "headline": "Intel Layoffs, Musk's Micron Moment, $200 Billion Samsung-Broadcom Pact and More: This Week in Tech",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=9418ffe30bc2f276c5b77ca1639e567a6a0f4710311ce8d9a5c7760924d9e98d",
        "datetime": 1785056428
      }
    ],
    "_fetched_at": 1785142782.9617476,
    "_updated_label": "2026-07-27 18:00"
  },
  "AVGO": {
    "nextEarnings": {
      "date": "2026-09-02",
      "hour": "amc",
      "epsEstimate": 3.3012
    },
    "news": [
      {
        "headline": "SK Hynix, Samsung Ink $950 Billion AI Chip Deals, But Stocks Still Slide",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a0a5757b2d6f2c9a6824d9424b466a1b9173fb1cbae88e22ecbdc2637d4dfa98",
        "datetime": 1785123405
      },
      {
        "headline": "Alphabet CEO Sundar Pichai Just Made a Major Decision Affecting Nvidia and Broadcom Investors",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=95e303e08d7be7494301f9bc3a4cb47689b4389d0dc1cd2e9be64477749a7b74",
        "datetime": 1785113460
      },
      {
        "headline": "Tracking Philippe Laffont's Coatue Management Portfolio - Q1 2026 Update",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=4fe04410f66bb01acca10220d74f89f605accd25abe2d29cb8082c3a7594de57",
        "datetime": 1785095093
      },
      {
        "headline": "Top Three DRAM ETF Stocks to Watch This Week: Samsung, SK Hynix, Seagate",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=53405f27f46d0f1cc85c5dbba208d3800928d35f1f354c40059a0cb7c2fe2a0f",
        "datetime": 1785080716
      },
      {
        "headline": "Intel Layoffs, Musk's Micron Moment, $200 Billion Samsung-Broadcom Pact and More: This Week in Tech",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=9418ffe30bc2f276c5b77ca1639e567a6a0f4710311ce8d9a5c7760924d9e98d",
        "datetime": 1785056428
      }
    ],
    "_fetched_at": 1785142782.9617476,
    "_updated_label": "2026-07-27 18:00"
  },
  "META": {
    "nextEarnings": {
      "date": "2026-07-29",
      "hour": "amc",
      "epsEstimate": 7.3817
    },
    "news": [
      {
        "headline": "How Lisa Su Has Positioned AMD to Be a Big AI Winner and Why the Stock Is a Buy",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=707f26c092351ba3875b29ca2e601028732a4c2a50118ff873bbdd762a043a32",
        "datetime": 1785135000
      },
      {
        "headline": "Should Nebius and CoreWeave Investors Be Worried About Meta's Latest AI Infrastructure Plans?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=552689ae1f621263e417b1be375768b94ca30e305e52ba3f3e9c12bbe6a8fa62",
        "datetime": 1785133200
      },
      {
        "headline": "Wall Street Limps Into a Loaded Week: Iran Risk, Fresh Tariffs and a Chip-Sector Wobble",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=3d03d3812adba79964f84ca16ade6aa10d3ca658cf0f9f92aaffbcf0979b10fb",
        "datetime": 1785131589
      },
      {
        "headline": "S&P 500 On Track To Post Best Net Profit Margin Since 2009: Market Strategist Says Big Tech Is Driving An ‘Unprecedented Boom’",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cd4540dd0b556d80aa825c059a8fcb7be9ca055f282b9d3d373eba476d29de33",
        "datetime": 1785129530
      },
      {
        "headline": "Alphabet, Amazon, and Meta Will Spend Over $500 Billion on AI in 2026. Nvidia Collects a Huge Share.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8d075726ba401e883d98c60a611e70b42f94f29c477b5db8ee15fa15dab8d13b",
        "datetime": 1785125100
      }
    ],
    "_fetched_at": 1785142782.9617476,
    "_updated_label": "2026-07-27 18:00"
  },
  "TSLA": {
    "nextEarnings": {
      "date": "2026-10-20",
      "hour": "amc",
      "epsEstimate": 0.5111
    },
    "news": [
      {
        "headline": "Wall Street Limps Into a Loaded Week: Iran Risk, Fresh Tariffs and a Chip-Sector Wobble",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=3d03d3812adba79964f84ca16ade6aa10d3ca658cf0f9f92aaffbcf0979b10fb",
        "datetime": 1785131589
      },
      {
        "headline": "QQQ And Tech Earnings: They Can't All Win The CapEx Arms Race",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=e4f0a0fb2e885029434f70a85d8ee40a7826afcc8da27eb01dac750fd0fc4876",
        "datetime": 1785125049
      },
      {
        "headline": "Why Retail Traders Couldn’t Take Their Eyes Off These Stocks Last Week: NVDA, GOOGL, ORCL, TSLA, INTC",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=bc3612c1016ed4a46e27f755675a8b0605cf87c7e0a252852113d3e5cdf6e0e4",
        "datetime": 1785117925
      },
      {
        "headline": "Tesla: The Real Problem Is A Rapidly Deteriorating EV Business",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=df724b7a0aa6d45dbdff819caae13d592d86fd1bf4353f163e0c1bcfc53a03d7",
        "datetime": 1785115559
      },
      {
        "headline": "Elon Musk's Pitch for AI Firms To Peer Review Each Other's Models Surfaces Just as OpenAI's Own Agent Went Rogue: 'The Most Immediate Thing...'",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a061feb3465e1b1c9083a4caee87036410447c4164fef2d53d5c01ed3a882a74",
        "datetime": 1785112213
      }
    ],
    "_fetched_at": 1785142782.9617476,
    "_updated_label": "2026-07-27 18:00"
  },
  "MU": {
    "nextEarnings": {
      "date": "2026-09-21",
      "hour": "amc",
      "epsEstimate": 32.2476
    },
    "news": [
      {
        "headline": "China memory chipmaker CXMT's shares soar in blockbuster listing",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=39d5eb9218523f161144482d9553455b6a3b8027b3afbb6737770758447921ed",
        "datetime": 1785135835
      },
      {
        "headline": "Wall Street Limps Into a Loaded Week: Iran Risk, Fresh Tariffs and a Chip-Sector Wobble",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=3d03d3812adba79964f84ca16ade6aa10d3ca658cf0f9f92aaffbcf0979b10fb",
        "datetime": 1785131589
      },
      {
        "headline": "China memory chipmaker CXMT's shares soar in a blockbuster share listing in Shanghai",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=371639f10361223210abd7928bb26d5b4acc6c3114c5545bf0df19a39dabe425",
        "datetime": 1785126807
      },
      {
        "headline": "QQQ And Tech Earnings: They Can't All Win The CapEx Arms Race",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=e4f0a0fb2e885029434f70a85d8ee40a7826afcc8da27eb01dac750fd0fc4876",
        "datetime": 1785125049
      },
      {
        "headline": "Chinese chipmaker CXMT soars more than 500% on debut",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=bff90eb77336889233a8c5cd5eb41819036251bde1bd9df11a80fe190717e6a5",
        "datetime": 1785123526
      }
    ],
    "_fetched_at": 1785142782.9617476,
    "_updated_label": "2026-07-27 18:00"
  },
  "AMD": {
    "nextEarnings": {
      "date": "2026-08-04",
      "hour": "amc",
      "epsEstimate": 1.6273
    },
    "news": [
      {
        "headline": "How Lisa Su Has Positioned AMD to Be a Big AI Winner and Why the Stock Is a Buy",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=707f26c092351ba3875b29ca2e601028732a4c2a50118ff873bbdd762a043a32",
        "datetime": 1785135000
      },
      {
        "headline": "UBS hurries to reset AMD stock target on key AI Day signals",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4dbc1478bae46be3f614a74a6899fb000b2d5bb1539c941d36685c7e4f101978",
        "datetime": 1785070980
      },
      {
        "headline": "What a Major Anthropic Chip Deal Really Means for AMD Stock",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a6ce0c9402ef9b4b6eb3c2bbe2a3c72d48c381948b5057516b3fe895a7bd02ee",
        "datetime": 1785070802
      },
      {
        "headline": "Intel's Best Days Are Still Well Ahead (Rating Upgrade)",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=f1ec53b49d75782c77a7d5db0024b3fb0adf5ab3de7d6a678ac41c9b2f4cafa1",
        "datetime": 1785058667
      },
      {
        "headline": "The AI Trade Faces A Final Flush Lower, I'm Buying It",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=4b35ab8369f7911239f9389e825348233fee006e926187efb5ef4f9b46143176",
        "datetime": 1785058260
      }
    ],
    "_fetched_at": 1785142782.9617476,
    "_updated_label": "2026-07-27 18:00"
  },
  "INTC": {
    "nextEarnings": {
      "date": "2026-10-21",
      "hour": "amc",
      "epsEstimate": 0.2659
    },
    "news": [
      {
        "headline": "Wall Street Limps Into a Loaded Week: Iran Risk, Fresh Tariffs and a Chip-Sector Wobble",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=3d03d3812adba79964f84ca16ade6aa10d3ca658cf0f9f92aaffbcf0979b10fb",
        "datetime": 1785131589
      },
      {
        "headline": "Is Intel Stock a Buy as AI Revenue Surges Nearly 60%?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=55715ecd97824afc4b6d142ceaa38b8bf00ef3f171ef622c5c6b782523f39e13",
        "datetime": 1785131400
      },
      {
        "headline": "CXMT Becomes China's Most Valuable Listed Company After Memory Chipmaker Surges 500% on Debut",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5117e385a8e4d91997b4cc8d79f995570b3d240879690b42be237344740c0d56",
        "datetime": 1785129692
      },
      {
        "headline": "Why Retail Traders Couldn’t Take Their Eyes Off These Stocks Last Week: NVDA, GOOGL, ORCL, TSLA, INTC",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=bc3612c1016ed4a46e27f755675a8b0605cf87c7e0a252852113d3e5cdf6e0e4",
        "datetime": 1785117925
      },
      {
        "headline": "Intel (INTC) Teams With Lens Technology On AI Chip Packaging",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b89bf8a928d264ca3f85fced52af2f108e4b2020d08fa406452a3a95ce0f90d2",
        "datetime": 1785092946
      }
    ],
    "_fetched_at": 1785142782.9617476,
    "_updated_label": "2026-07-27 18:00"
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
    "_fetched_at": 1785142782.9617476,
    "_updated_label": "2026-07-27 18:00"
  },
  "QQQ": {
    "nextEarnings": null,
    "news": [
      {
        "headline": "QQQ And Tech Earnings: They Can't All Win The CapEx Arms Race",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=e4f0a0fb2e885029434f70a85d8ee40a7826afcc8da27eb01dac750fd0fc4876",
        "datetime": 1785125049
      },
      {
        "headline": "The AI Bubble Is Bigger Than Ever And The Cracks Are Starting To Show",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=a6bf5190a70d4c8d4c2aabab5abf0fdf4e5337ed12d5d77372c0fd4eb491b44a",
        "datetime": 1785104940
      },
      {
        "headline": "Top Four Magnificent 7 Stocks to Watch This Week: Apple, Microsoft, Meta, Amazon",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=6f03e9e9ece4fdb4393b408c5dd64d505c30c42c02c428a479fc762a9d00251c",
        "datetime": 1785092023
      },
      {
        "headline": "Top Three ETFs to Watch This Week: TQQQ, MAGS, SCHD",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=9153ff3fa8a62ff65438601ca296281aa7740844d189f9764e65a94c79d24385",
        "datetime": 1785079534
      },
      {
        "headline": "The Next Fed Rate Hike May Be Coming Soon",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=4da10ba1ebb0e0f3a803545acaff541bb33a0f6fee7617dc250a64729022614e",
        "datetime": 1785059700
      }
    ],
    "_fetched_at": 1785142782.9617476,
    "_updated_label": "2026-07-27 17:59"
  },
  "SPY": {
    "nextEarnings": null,
    "news": [
      {
        "headline": "S&P 500 Earnings Yield Now 5%; A Quick Take On Google's Earnings Report",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=77cf7515aa380d619c282090877616967894c9d054a88b1258533f7657fe597e",
        "datetime": 1785126600
      },
      {
        "headline": "Nasdaq, S&P 500, Dow Futures Rise As Iran Pause Eases Oil Fears Ahead Of Big Tech Earnings, Fed Meeting: ORCL, NVDA, VG, DEL In Focus",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f81c2b57ce1437e4e7154937e5b98c342815de40bf51a59ca60801fc8510db1c",
        "datetime": 1785118948
      },
      {
        "headline": "How $400,000 in BDC ETFs Can Pay $36,000 a Year and What the Default Risk Really Looks Like",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2bb6db032216aedd9d8d69c328cae7b6f88a091c45b5964a2e37ad73f0a6053d",
        "datetime": 1785110037
      },
      {
        "headline": "Why This Leveraged S&P 500 ETF Can Lose Money Even When Stocks Rise",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=721820fc5a8b7d1c70b06bfbfade4e34b831ed70e8ae86b2b63be7a0bbb05aaa",
        "datetime": 1785106523
      },
      {
        "headline": "The AI Bubble Is Bigger Than Ever And The Cracks Are Starting To Show",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=a6bf5190a70d4c8d4c2aabab5abf0fdf4e5337ed12d5d77372c0fd4eb491b44a",
        "datetime": 1785104940
      }
    ],
    "_fetched_at": 1785142782.9617476,
    "_updated_label": "2026-07-27 17:59"
  },
  "ORCL": {
    "nextEarnings": {
      "date": "2026-09-07",
      "hour": "",
      "epsEstimate": 1.7739
    },
    "news": [
      {
        "headline": "QQQ And Tech Earnings: They Can't All Win The CapEx Arms Race",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=e4f0a0fb2e885029434f70a85d8ee40a7826afcc8da27eb01dac750fd0fc4876",
        "datetime": 1785125049
      },
      {
        "headline": "Nasdaq, S&P 500, Dow Futures Rise As Iran Pause Eases Oil Fears Ahead Of Big Tech Earnings, Fed Meeting: ORCL, NVDA, VG, DEL In Focus",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f81c2b57ce1437e4e7154937e5b98c342815de40bf51a59ca60801fc8510db1c",
        "datetime": 1785118948
      },
      {
        "headline": "ORCL Stock Jumps Overnight: Nvidia Reportedly Puts $250B On Table For OpenAI’s Data Center Push",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=293c00ae6fd92828326ce362de4a20ec4e14ed143939475821cc4df9859c0250",
        "datetime": 1785118931
      },
      {
        "headline": "Why Retail Traders Couldn’t Take Their Eyes Off These Stocks Last Week: NVDA, GOOGL, ORCL, TSLA, INTC",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=bc3612c1016ed4a46e27f755675a8b0605cf87c7e0a252852113d3e5cdf6e0e4",
        "datetime": 1785117925
      },
      {
        "headline": "Nvidia in talks with OpenAI to guarantee $250 billion financing for data center, WSJ reports",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b25b5b3109fbe06f1a394164442ed3a7f657cdce227d6bb31df3651b01915127",
        "datetime": 1785109170
      }
    ],
    "_fetched_at": 1785142782.9617476,
    "_updated_label": "2026-07-27 18:00"
  },
  "CRM": {
    "nextEarnings": {
      "date": "2026-09-01",
      "hour": "amc",
      "epsEstimate": 3.3057
    },
    "news": [
      {
        "headline": "Salesforce’s new deal could reshape veteran health care",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=70cd9a33bae341bd759c05561f07b963740b2b7ea5f25ad48e456177aaaf43d5",
        "datetime": 1785114180
      },
      {
        "headline": "Salesforce vs. ServiceNow: Which Agentic AI Stock Is Actually the Better Buy Right Now?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cb700f05cea5832621d8c5d7829cc6edc439518b5e422b7fe8cd69c152dc4202",
        "datetime": 1785065100
      },
      {
        "headline": "Consumer Tech (July 20-24): AI Boom Drives Big Tech Earnings, Oracle Grabs $7B Defense Deal & More",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=d32538a5d637928b3a1b63fd1b0a04821205f85781f492ba515b89f9eb91f441",
        "datetime": 1785058208
      },
      {
        "headline": "Why is Salesforce the Worst-Performing Dow Jones Stock?",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=4ea123be0c9656ef70e062f4a6a83d3d504ffce3233ccf0b76d7578b478032f0",
        "datetime": 1785000877
      },
      {
        "headline": "Prediction: Is Salesforce a Millionaire-Maker Stock?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fbbe2f3828f2b7b0df44ec0212dfe35694691fcdaa2974458b36791bee65c93d",
        "datetime": 1784993418
      }
    ],
    "_fetched_at": 1785142782.9617476,
    "_updated_label": "2026-07-27 18:00"
  },
  "PLTR": {
    "nextEarnings": {
      "date": "2026-08-03",
      "hour": "",
      "epsEstimate": 0.354
    },
    "news": [
      {
        "headline": "Palantir’s Infamy Opens Doors for French Challenger",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b6c2c3bce7a96d1229ed58b49d015492df5335e9cff2ad6c92a4ea974c029fc6",
        "datetime": 1785124820
      },
      {
        "headline": "IBM Fell 25% as Hardware Spending Dominated AI Budgets. Palantir Sells What Runs on Top.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=977275e4c94efe30bb160a807a81e61a0484dc4d1a2fb2c0bdaed4fe3284a6d6",
        "datetime": 1785120600
      },
      {
        "headline": "Better AI Software Stock: Palantir vs. ServiceNow",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=685802f7bed7bc1919de9187a364d7af6a69ac38fcbb1b71e3e981cd05e85d11",
        "datetime": 1785082020
      },
      {
        "headline": "Prediction: Palantir Stock Will Drop to This Price After Aug. 3",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d28b8dc49f813352311f8ba80eed3e67f1a208412b19a94fb6ab03a79481a23c",
        "datetime": 1785049920
      },
      {
        "headline": "David Sacks Warns Anthropic Doesn't Want Competition: 'You're Going to Basically Put a Dagger Through the Heart of the Entire American Open Source Ecosystem'",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=1900d56a27b52ed575e8ea761b685e1a449bd48d0c1c96abfe647948ee4ea376",
        "datetime": 1785041168
      }
    ],
    "_fetched_at": 1785142782.9617476,
    "_updated_label": "2026-07-27 18:00"
  },
  "QCOM": {
    "nextEarnings": {
      "date": "2026-07-29",
      "hour": "amc",
      "epsEstimate": 2.2708
    },
    "news": [
      {
        "headline": "QQQ And Tech Earnings: They Can't All Win The CapEx Arms Race",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=e4f0a0fb2e885029434f70a85d8ee40a7826afcc8da27eb01dac750fd0fc4876",
        "datetime": 1785125049
      },
      {
        "headline": "Tracking Philippe Laffont's Coatue Management Portfolio - Q1 2026 Update",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=4fe04410f66bb01acca10220d74f89f605accd25abe2d29cb8082c3a7594de57",
        "datetime": 1785095093
      },
      {
        "headline": "Here's Why Qualcomm Is Still Overlooked vs. Nvidia and Intel",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8d698e37a3e5b1d45010feb9f3677e325326cd8f25ce74ef26c5ca79fd03bd65",
        "datetime": 1785087300
      },
      {
        "headline": "Earnings Volatility Watch: 12 Stocks With Double-Digit Implied Moves This Week",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=311932cac57a427174119777bdc64152d87f55570840778cb9388262d9f662eb",
        "datetime": 1785054623
      },
      {
        "headline": "Wall Street Week Ahead",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=aa93f6b650dcda9f8826f3f7390c5a02e2548ec74e81335b1ebe7541cf3f7d9d",
        "datetime": 1785048021
      }
    ],
    "_fetched_at": 1785142782.9617476,
    "_updated_label": "2026-07-27 18:00"
  },
  "ARM": {
    "nextEarnings": {
      "date": "2026-07-29",
      "hour": "amc",
      "epsEstimate": 0.4055
    },
    "news": [
      {
        "headline": "Tracking Philippe Laffont's Coatue Management Portfolio - Q1 2026 Update",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=4fe04410f66bb01acca10220d74f89f605accd25abe2d29cb8082c3a7594de57",
        "datetime": 1785095093
      },
      {
        "headline": "Earnings Volatility Watch: 12 Stocks With Double-Digit Implied Moves This Week",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=311932cac57a427174119777bdc64152d87f55570840778cb9388262d9f662eb",
        "datetime": 1785054623
      },
      {
        "headline": "Wall Street Week Ahead",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=aa93f6b650dcda9f8826f3f7390c5a02e2548ec74e81335b1ebe7541cf3f7d9d",
        "datetime": 1785048021
      },
      {
        "headline": "No Matter Who Wins the Smartphone and AI Chip Races, ARM Stock Still Benefits",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c95eee477a2ef9ad701d23f5e340030011c7c3e22c147178b7e81d4b2583ff14",
        "datetime": 1785007802
      },
      {
        "headline": "Arm Just Scored a Major Server Market Share Win. What That Means for ARM Stock Here.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b711dc7ab117395eb38225d89211d42681cb489e3c96bed532030b6efe68d5bd",
        "datetime": 1784988002
      }
    ],
    "_fetched_at": 1785142782.9617476,
    "_updated_label": "2026-07-27 18:00"
  },
  "MRVL": {
    "nextEarnings": {
      "date": "2026-08-20",
      "hour": "",
      "epsEstimate": 0.939
    },
    "news": [
      {
        "headline": "Marvell Technology vs. UiPath: What Do the Quarterly Revenue Trends of These Artificial Intelligence Companies Tell Investors?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b3608810f0bb1cef3bc969b8ceaa70eed7079259a965fdfff07705cfcdd9d93d",
        "datetime": 1785099481
      },
      {
        "headline": "Down 34% From Its Highs, Is Marvell Technology a Buy on the Dip?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=00bf3649ba8c4cee73b1d6ef1b5abd9e51eca5d403944bec0f7a7b5ed0ed67c5",
        "datetime": 1784962200
      },
      {
        "headline": "Lattice Semiconductor, Allegro MicroSystems, Monolithic Power Systems, Marvell Technology, and MACOM Shares Are Falling, What You Need To Know",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=32648a9932ff28890f3ddace482579ddccf73270cf715cf2459912ad29942b6a",
        "datetime": 1784931908
      },
      {
        "headline": "Marvell Technology (MRVL) Stock Declines While Market Improves: Some Information for Investors",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=55e630437ada4d8c3a856b4cdafcb59cc91373f789a6bb7e33c359ee08595f30",
        "datetime": 1784929504
      },
      {
        "headline": "MRVL Has Momentum. The Question Is The Price",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6120d5ab14b1aa2b05ea68602aa178e15a0bd22d9e860b5b004081ce93b30b53",
        "datetime": 1784927684
      }
    ],
    "_fetched_at": 1785142782.9617476,
    "_updated_label": "2026-07-27 18:00"
  },
  "ASML": {
    "nextEarnings": {
      "date": "2026-10-14",
      "hour": "bmo",
      "epsEstimate": 8.4462
    },
    "news": [
      {
        "headline": "Tracking Philippe Laffont's Coatue Management Portfolio - Q1 2026 Update",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=4fe04410f66bb01acca10220d74f89f605accd25abe2d29cb8082c3a7594de57",
        "datetime": 1785095093
      },
      {
        "headline": "Can ASML Holding (NasdaqGS:ASML) Stay Reasonably Priced After Its 150% Run?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8b2ce21e77781fee267ef0cbf819e6c0a216abb51a5abbb707c8682e7d2978cb",
        "datetime": 1784977763
      },
      {
        "headline": "ASML Holding (NASDAQ:ASML) Shows High Growth Momentum and Technical Strength",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=2b7e426a58d3305080e851afd16aefa55ac24f6fb55dcc2b4cf2db9e0866b7d0",
        "datetime": 1784966455
      },
      {
        "headline": "LRCX Poised for a Q4 Earnings Surprise: Should You Buy the Stock Now?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=eef50845342d98b975c7facbc2c78dd865fc9a3c0f5f1c2af92be436b610aa6b",
        "datetime": 1784897040
      },
      {
        "headline": "TSMC: Robust Margins, Strong Guidance, The Market Is Getting Out Of Hand Here",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=97342a8be84b91be80df8d47beb935ad04cd1c4502aed193b57eb57cd95cf937",
        "datetime": 1784878200
      }
    ],
    "_fetched_at": 1785142782.9617476,
    "_updated_label": "2026-07-27 18:00"
  },
  "LRCX": {
    "nextEarnings": {
      "date": "2026-07-29",
      "hour": "amc",
      "epsEstimate": 1.7108
    },
    "news": [
      {
        "headline": "Tracking Philippe Laffont's Coatue Management Portfolio - Q1 2026 Update",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=4fe04410f66bb01acca10220d74f89f605accd25abe2d29cb8082c3a7594de57",
        "datetime": 1785095093
      },
      {
        "headline": "Earnings Volatility Watch: 12 Stocks With Double-Digit Implied Moves This Week",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=311932cac57a427174119777bdc64152d87f55570840778cb9388262d9f662eb",
        "datetime": 1785054623
      },
      {
        "headline": "After a 22% Pullback, Semiconductor Equipment Stocks Face a Pivotal Earnings Test",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=9ae778ae62a48666a4757d36d344ae3c55b86a9bd2398bb583700b9f36d5989f",
        "datetime": 1784981164
      },
      {
        "headline": "Lam Research's Q4 2026 Earnings As A Leading Indicator For IREN's August Print",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=2cb54903fee29ffda5ab6cbe2fee42e80c2d8a8b17657551bfd66746fd9c7022",
        "datetime": 1784940300
      },
      {
        "headline": "10 Information Technology Stocks Whale Activity In Today’s Session",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=bb8c19ab4a0bcc9928510750068a4d6b634e4fa5ee118aeda1be64d6f234df8d",
        "datetime": 1784900131
      }
    ],
    "_fetched_at": 1785142782.9617476,
    "_updated_label": "2026-07-27 18:00"
  },
  "KLAC": {
    "nextEarnings": {
      "date": "2026-07-28",
      "hour": "amc",
      "epsEstimate": 1.0166
    },
    "news": [
      {
        "headline": "Earnings Volatility Watch: 12 Stocks With Double-Digit Implied Moves This Week",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=311932cac57a427174119777bdc64152d87f55570840778cb9388262d9f662eb",
        "datetime": 1785054623
      },
      {
        "headline": "After a 22% Pullback, Semiconductor Equipment Stocks Face a Pivotal Earnings Test",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=9ae778ae62a48666a4757d36d344ae3c55b86a9bd2398bb583700b9f36d5989f",
        "datetime": 1784981164
      },
      {
        "headline": "KLA's Q4 Earnings Loom: Buy, Sell or Hold the KLAC Stock?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=43b06a589a54d6e311bb03ff46ce9a653005fe9a4d75ee03d6241d6fb4acb7a5",
        "datetime": 1784906040
      },
      {
        "headline": "LRCX Poised for a Q4 Earnings Surprise: Should You Buy the Stock Now?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=eef50845342d98b975c7facbc2c78dd865fc9a3c0f5f1c2af92be436b610aa6b",
        "datetime": 1784897040
      },
      {
        "headline": "KLA Corporation: A Peep At Semi Value Chain Peers Ahead Of Earnings",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=bbee080c1cd24d0378136efeda57673e1773cf2c90919dff9bd1ed8bf9e1b03a",
        "datetime": 1784880000
      }
    ],
    "_fetched_at": 1785142782.9617476,
    "_updated_label": "2026-07-27 18:00"
  },
  "SNDK": {
    "nextEarnings": {
      "date": "2026-08-05",
      "hour": "",
      "epsEstimate": 34.7802
    },
    "news": [
      {
        "headline": "Wall Street Limps Into a Loaded Week: Iran Risk, Fresh Tariffs and a Chip-Sector Wobble",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=3d03d3812adba79964f84ca16ade6aa10d3ca658cf0f9f92aaffbcf0979b10fb",
        "datetime": 1785131589
      },
      {
        "headline": "Micron vs. Sandisk: Which Stock Is the Better Buy for the Memory Boom?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=aa34d893a6a6719a9ec41342809c23aeb5e01ba8cf91d94376b19e9ed1ff525b",
        "datetime": 1785087780
      },
      {
        "headline": "'The AI trade is still on': Wall Street sees Big Tech's spending as positive for semiconductor stocks",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=798110ce4ce84c4a563f40e111f4ba4fd167019eb13dcd61f40c27850899c110",
        "datetime": 1785067856
      },
      {
        "headline": "Should You Buy Sandisk Stock Before It Reports Earnings on Aug. 5?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6bc1d84411d39b727f02aa1a86ab55aee933872be490c0ab935c47b2be9e7b9a",
        "datetime": 1785058500
      },
      {
        "headline": "RPG: Pure Momentum, Not Pure Growth, Is Driving This Year's Exceptional Gains",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=bcca74dc2a54d1fb024472418762c413b3fcb91ff517f4cc18d9984ecb992063",
        "datetime": 1785020100
      }
    ],
    "_fetched_at": 1785142782.9617476,
    "_updated_label": "2026-07-27 18:01"
  },
  "WDC": {
    "nextEarnings": {
      "date": "2026-08-05",
      "hour": "amc",
      "epsEstimate": 3.3281
    },
    "news": [
      {
        "headline": "3 Reasons Seagate Technology Could Be Worth a Closer Look Ahead of July 28 Earnings",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=589727b35300343df06d2dc90197dbce77fe68c91fc654bd31465cbad75656bc",
        "datetime": 1784992828
      },
      {
        "headline": "Micron Stuck in a Bear Market: Will it Rebound or Crash Further?",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=de492d8f1ad37a9b7b7dbd431222f37538c9d82c7f1677d3be81a57651e5a13a",
        "datetime": 1784990596
      },
      {
        "headline": "Western Digital Corporation (NASDAQ:WDC) Got Lucky While Micron’s The Real Deal, Says Jim Cramer",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c44c1710cee4cdcca909985f36f5eb8c2cf2bd6e3eb49b5a42c75c71204a5c7d",
        "datetime": 1784966529
      },
      {
        "headline": "Micron, onsemi, Seagate, Western Digital, and Vishay Intertechnology Shares Are Falling, What You Need To Know",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c486ff26da317fb27e29befed39bc4e69b9578804561899f90ffa86aa55375f8",
        "datetime": 1784930948
      },
      {
        "headline": "Why Tesla, Google, and other Mag 7 stocks are losing billions in valuation",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e99ad6f3302defb96151305659aa18eb53a8b41195c37d4162628dff3748a4fa",
        "datetime": 1784923243
      }
    ],
    "_fetched_at": 1785142782.9617476,
    "_updated_label": "2026-07-27 18:01"
  }
};
