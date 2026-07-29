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
        "headline": "The S&P 500 and Dow Are on Track to Beat the Nasdaq for the First Time Since 2022. Here's What That Means for Investors.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=efda01ca8d7f8593a145ec2978cb3372560c07d7091e0bfbae2fa74f507be194",
        "datetime": 1785302400
      },
      {
        "headline": "A Tired Tech Trade Looks Set to Sink the Stock Market",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7be7020126cef875b1ad36c7a8028b63fa81579611da2aa2e8a934460aca1461",
        "datetime": 1785301200
      },
      {
        "headline": "Qualcomm Is Down 37% From Its High and Reports Wednesday. Is the Stock a Buy?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f2e3c53c9f7d93d9a8644995951bffda8664af0bb92b7705f74571c529c30e36",
        "datetime": 1785298020
      },
      {
        "headline": "Is Avis Budget Group a Buy After Its Latest Earnings Report?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1f2e4cefdf603c16edc8272d84f1fee672282967aaf741a315f6cb8aa0f78b5f",
        "datetime": 1785297544
      },
      {
        "headline": "Nvidia (NVDA) Pours $5 Billion Into Safe AI And Expands Data Center Reach",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c3efe06e73f9be462a7d612dff8c81561a203ed11ade765e48721a45286f7432",
        "datetime": 1785294788
      }
    ],
    "_fetched_at": 1785307177.1282163,
    "_updated_label": "2026-07-29 15:40"
  },
  "AAPL": {
    "nextEarnings": {
      "date": "2026-07-30",
      "hour": "amc",
      "epsEstimate": 1.9271
    },
    "news": [
      {
        "headline": "eight Telecom marks annual eight Day celebrations with new eight Shop and $88,888 lucky draw",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b37d535fd9117c35552e9a3a40b6e6548b7fc3eeb6881eb3e384cd63a6130cce",
        "datetime": 1785303660
      },
      {
        "headline": "Why Did AAPL, KO, PM Stocks Jump To 52-Week Highs Today?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=627986c22b913b7edb0dacde8e405113327013378330e9ead7aca5de61086e53",
        "datetime": 1785296985
      },
      {
        "headline": "Apple Hits $5 Trillion Market Cap: Will Earnings Extend the Rally?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4716f50be8f91b37a5893167337f2e348324fd3d9dbabcd31480062f5ec94103",
        "datetime": 1785291590
      },
      {
        "headline": "Anthony Scaramucci Says This Is Not the Capitalism He Grew Up With. 'Billionaire Know-It-Alls' Tell Him He 'Bought Into the Propaganda'",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f788a1d318d1474ca558de2de398453554a47a5b954ac1cdddf155c0260c8364",
        "datetime": 1785286815
      },
      {
        "headline": "Dow Ends Higher For Third Straight Session As Oil Cools, Nasdaq Slides On Chipmaker Rout — PYPL, SPCX, AAPL, V, F Stocks In Focus",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1bfe4bb9d4dff7dac20d270da8ef366e205326666d3af3ad383ead567155ef43",
        "datetime": 1785278641
      }
    ],
    "_fetched_at": 1785307177.1282163,
    "_updated_label": "2026-07-29 15:39"
  },
  "GOOGL": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "amc",
      "epsEstimate": 3.0988
    },
    "news": [
      {
        "headline": "As AI Anxiety Spreads, Hyperscaler Default Bets Are Spiking",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=512ed7ab4b4a71d2657a1b40a4a77ba6564c393887f53ccabbc0b77e101c40c5",
        "datetime": 1785302100
      },
      {
        "headline": "A Tired Tech Trade Looks Set to Sink the Stock Market",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7be7020126cef875b1ad36c7a8028b63fa81579611da2aa2e8a934460aca1461",
        "datetime": 1785301200
      },
      {
        "headline": "Why Costco, Verizon, Kroger, and Other Safe Dividend Stocks Are Rising",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e30d0712bbef84db012fd03ec9d4598c44d264ace4162527e16ad00d9a32ab0e",
        "datetime": 1785294190
      },
      {
        "headline": "Anthropic clarifies stance on open-weight AI models",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d85e5db1a0f516464186898786f677efc1003b913e9171add623d2b507560802",
        "datetime": 1785292380
      },
      {
        "headline": "Satya Nadella's Microsoft Needs Power. Joe Creed's Caterpillar Sells It.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f778e7f3ca5f573d7b9f8723af9d93f2f09815a6dd402fae5fa3fb96c012d2e2",
        "datetime": 1785288900
      }
    ],
    "_fetched_at": 1785307177.1282163,
    "_updated_label": "2026-07-29 15:39"
  },
  "MSFT": {
    "nextEarnings": {
      "date": "2026-07-29",
      "hour": "amc",
      "epsEstimate": 4.3274
    },
    "news": [
      {
        "headline": "As AI Anxiety Spreads, Hyperscaler Default Bets Are Spiking",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=512ed7ab4b4a71d2657a1b40a4a77ba6564c393887f53ccabbc0b77e101c40c5",
        "datetime": 1785302100
      },
      {
        "headline": "Microsoft Earnings ‘Don’t Matter,’ Says Gene Munster Because 'Battle With the Bots' Just Beginning, Analyst Sounds 'Value Trap' Warning",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b1bd1acc4d0869869bb9d411d19b9919b9a1fc1eb63fc39e3e5d6d24a16ad2c1",
        "datetime": 1785299699
      },
      {
        "headline": "[Latest] Global AI in Medical Coding Market Size/Share Worth USD 10.6 Billion by 2035 at a 13.5% CAGR: Healthcare Foresights (Analysis, Outlook, Leaders, Report, Trends, Forecast, Segmentation, Growth",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e10a7aabe3fc8ed5cc65effd3a5e2833777604df100c73d7ba5b422929c32210",
        "datetime": 1785299400
      },
      {
        "headline": "Anthropic clarifies stance on open-weight AI models",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d85e5db1a0f516464186898786f677efc1003b913e9171add623d2b507560802",
        "datetime": 1785292380
      },
      {
        "headline": "Advanced Micro Devices vs. BigBear.ai: Which Technology Stock Is a Better Buy in 2026?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4c6abd1118fd2c2b0f1f7653820093331b62782d9735374aa7e70df2b817257c",
        "datetime": 1785291601
      }
    ],
    "_fetched_at": 1785307177.1282163,
    "_updated_label": "2026-07-29 15:39"
  },
  "AMZN": {
    "nextEarnings": {
      "date": "2026-07-30",
      "hour": "amc",
      "epsEstimate": 1.8556
    },
    "news": [
      {
        "headline": "As AI Anxiety Spreads, Hyperscaler Default Bets Are Spiking",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=512ed7ab4b4a71d2657a1b40a4a77ba6564c393887f53ccabbc0b77e101c40c5",
        "datetime": 1785302100
      },
      {
        "headline": "Jack Ma-Backed OceanBase Seeks Up to $443 Million for AI Push",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c5a3334b3e2080bbca403936a34f0d2cd93551dda26a71e3a2031391688c0fc7",
        "datetime": 1785290538
      },
      {
        "headline": "UPS Stock Under Pressure As Wall Street Weighs Amazon Shipping Cuts — But Retail Bulls Remain Unfazed",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=142df4219fd540f00774591617443a2f94183840ff3f9d6b5799ff3e0db17491",
        "datetime": 1785290533
      },
      {
        "headline": "Kimi K3: DeepSeek 2.0, or is this Time Different?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e0e7a2f50c4fc97340626c0926d8668d8fb9d507559975d7591cf762e5338625",
        "datetime": 1785288240
      },
      {
        "headline": "The Best Semiconductor Stocks to Buy",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6e1cfdcc3970fff8454016d3ece4ae47fb907db78b52f606c8761beac3f2214c",
        "datetime": 1785281438
      }
    ],
    "_fetched_at": 1785307177.1282163,
    "_updated_label": "2026-07-29 15:39"
  },
  "TSM": {
    "nextEarnings": {
      "date": "2026-10-14",
      "hour": "amc",
      "epsEstimate": 28.6598
    },
    "news": [
      {
        "headline": "Intel Vs. TSMC: How CoWoS Packaging Constraints Create Opportunity For Intel Foundry",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=f2f93c4d8533a256a289879a12f0d662bf46804f344ef38fcd75f1ed247567a2",
        "datetime": 1785263112
      },
      {
        "headline": "AEF: Strong Results, Still Trading At A Deep Discount, But I'll Pass",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=f1a0bbbc4c12a6e3de78add258f23827e412bfe0211d8a8ff97bd86888a589c8",
        "datetime": 1785250764
      },
      {
        "headline": "6 Catalysts That Might Pop The AI Bubble",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=e252009570e04de8fda282c8ee6707568119d13c5a4c3828c86fc93634033727",
        "datetime": 1785244247
      },
      {
        "headline": "Nvidia: The Trade Of The Decade Has Arrived",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=6a770f8371f5d1792c8a5bf442c987998e49c47caaab8b277987a6f4f92b7811",
        "datetime": 1785241399
      },
      {
        "headline": "TSMC Says All Personnel At Its Kumamoto Site Have Been Confirmed Safe; Says Post-Earthquake Structural Inspections Have Been Completed, Confirming Its Structures Are Safe, And Operations Are Gradually",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=dc89aa4588f760efb83def0cc1f69959ddf33167ddae5ba151c9ddda4d574eea",
        "datetime": 1785231396
      }
    ],
    "_fetched_at": 1785307177.1282163,
    "_updated_label": "2026-07-29 15:40"
  },
  "AVGO": {
    "nextEarnings": {
      "date": "2026-09-02",
      "hour": "amc",
      "epsEstimate": 3.3012
    },
    "news": [
      {
        "headline": "EXCLUSIVE: After Nvidia And SK Hynix, These 3 AI Stocks Could Be The Next Winners, CEO Says",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f84aa69e33046f8b1ac689ed8688e62e7cd8d4c8423e0dcc787feff8dc1ad554",
        "datetime": 1785276027
      },
      {
        "headline": "How Far Could Marvell Technology Stock Actually Fall From Here?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=84affedbd6649949a2248c44d13f8513ae38dae2dc8658bd0320fa00de141678",
        "datetime": 1785274325
      },
      {
        "headline": "Qualcomm’s (QCOM) Samsung Expansion and AI Deals Could Reshape Its Growth Story",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d189a0dc245609556f5727537cb8e38e778ad375ed51a49e178141e185422451",
        "datetime": 1785269484
      },
      {
        "headline": "Chip Stocks Extend Pullback Amid AI Bubble Fears",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=38102b5adc1166f54997d3a5a422c67f820711f211ecbd74a948eceb9c9708ce",
        "datetime": 1785269399
      },
      {
        "headline": "Intel Posted A Big Beat And Still Fell, And Its Spending Plan Is Why",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4c25cf4fed6bcb782aace81074cba950a25694dcd2368fae76b42d474f197add",
        "datetime": 1785267892
      }
    ],
    "_fetched_at": 1785307177.1282163,
    "_updated_label": "2026-07-29 15:40"
  },
  "META": {
    "nextEarnings": {
      "date": "2026-07-29",
      "hour": "amc",
      "epsEstimate": 7.3594
    },
    "news": [
      {
        "headline": "As AI Anxiety Spreads, Hyperscaler Default Bets Are Spiking",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=512ed7ab4b4a71d2657a1b40a4a77ba6564c393887f53ccabbc0b77e101c40c5",
        "datetime": 1785302100
      },
      {
        "headline": "Anthropic clarifies stance on open-weight AI models",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d85e5db1a0f516464186898786f677efc1003b913e9171add623d2b507560802",
        "datetime": 1785292380
      },
      {
        "headline": "Satya Nadella's Microsoft Needs Power. Joe Creed's Caterpillar Sells It.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f778e7f3ca5f573d7b9f8723af9d93f2f09815a6dd402fae5fa3fb96c012d2e2",
        "datetime": 1785288900
      },
      {
        "headline": "Kimi K3: DeepSeek 2.0, or is this Time Different?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e0e7a2f50c4fc97340626c0926d8668d8fb9d507559975d7591cf762e5338625",
        "datetime": 1785288240
      },
      {
        "headline": "The Best Semiconductor Stocks to Buy",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6e1cfdcc3970fff8454016d3ece4ae47fb907db78b52f606c8761beac3f2214c",
        "datetime": 1785281438
      }
    ],
    "_fetched_at": 1785307177.1282163,
    "_updated_label": "2026-07-29 15:39"
  },
  "TSLA": {
    "nextEarnings": {
      "date": "2026-10-20",
      "hour": "amc",
      "epsEstimate": 0.4684
    },
    "news": [
      {
        "headline": "Gary Black Warns Tesla Stock Could Break Below $300, SpaceX Below $100 As AI Valuations Come Under Pressure",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=46161209cadb3e0e6681c1119700adfea2a823ea4c5f39de5aa7d02d8d56afe6",
        "datetime": 1785297880
      },
      {
        "headline": "SpaceX stock sends investors a signal they need to see",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=09da2190a63e519cc8114f23693c2fd6526de9910ea426fe76494bb72588df90",
        "datetime": 1785297780
      },
      {
        "headline": "Tesla (TSLA) Secures Long Term Power Deals And Expands Optimus Teleoperation",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f2f4feb02417d1846e19d183852f754d7b4a41b3b0958da499946a3102a5e81e",
        "datetime": 1785287473
      },
      {
        "headline": "Cathie Wood Doubles Down on Tesla Stock. Should Investors Follow?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=698a4580d7aa85379476e1cbc935346455901df04c0191f5dad0a19b675a13c8",
        "datetime": 1785284700
      },
      {
        "headline": "Review & Preview: ‘One Big Global Trade’",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4f5719b9884dc9b5ada1336e0d6d33cc032d3ed50e27757d38a67e832bf60623",
        "datetime": 1785282900
      }
    ],
    "_fetched_at": 1785307177.1282163,
    "_updated_label": "2026-07-29 15:40"
  },
  "MU": {
    "nextEarnings": {
      "date": "2026-09-21",
      "hour": "amc",
      "epsEstimate": 32.2476
    },
    "news": [
      {
        "headline": "Micron (MU) Stock Looks Above Fair Value On Cash Flow But Below Fair Value On Earnings",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8073aaf1db8355648174eb91a309b73a95cde11b2b54fae0620688b1a59f2025",
        "datetime": 1785301714
      },
      {
        "headline": "Micron CEO Sells More Stock Under Trading Plan As Memory Downturn Deepens",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f50522f2c729250f8c23e97adf2cb42e8e8b30eb6f8aed6499d9f1ef97ebb0df",
        "datetime": 1785301398
      },
      {
        "headline": "A Tired Tech Trade Looks Set to Sink the Stock Market",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7be7020126cef875b1ad36c7a8028b63fa81579611da2aa2e8a934460aca1461",
        "datetime": 1785301200
      },
      {
        "headline": "SK Hynix’s Q2 Miss Triggers Memory Stock Rout: MU, SNDK Slip But STX Holds Up In Green After Q4 Strong Report",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e537399cd17a8682fada1166e55f2cab88b3571e1db494f26e720069f10c4647",
        "datetime": 1785291665
      },
      {
        "headline": "Cramer Sees Echoes of Dot-Com Bust as Wall Street Flees AI Stocks for Safety",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5d85b397ef37499da4645103f2ab631de1308ca780df05df7282b81b96e0cc2a",
        "datetime": 1785286868
      }
    ],
    "_fetched_at": 1785307177.1282163,
    "_updated_label": "2026-07-29 15:40"
  },
  "AMD": {
    "nextEarnings": {
      "date": "2026-08-04",
      "hour": "amc",
      "epsEstimate": 1.6291
    },
    "news": [
      {
        "headline": "Core Scientific (CORZ) Stock Looks Above Fair Value After A Big AI Deal",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d804c6f9c08f714c40f23426901659f962e4f702060049ea1d338fc3482e298d",
        "datetime": 1785301610
      },
      {
        "headline": "Advanced Micro Devices vs. BigBear.ai: Which Technology Stock Is a Better Buy in 2026?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4c6abd1118fd2c2b0f1f7653820093331b62782d9735374aa7e70df2b817257c",
        "datetime": 1785291601
      },
      {
        "headline": "Dow Jones Futures: Oil Jumps On Iran News; Seagate, SK Hynix, KLA, Bloom Energy Earnings Late",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c702c4205a56087e8e0968c6cb651099fd8e2dd8f048187750d699a5c96b7c98",
        "datetime": 1785289596
      },
      {
        "headline": "Dow Jones Futures Fall, Oil Jumps On Iran News; Seagate, SK Hynix, KLA, Bloom Energy Earnings Late",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cb859fe1a1b4a4a7cd3703d4b8ba266d12137d378e4ccefcf96170b476e21b4d",
        "datetime": 1785282102
      },
      {
        "headline": "Advanced Micro Devices vs. Arista Networks: Which Tech Stock Is a Better Buy in 2026?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=db78461206110b51a7b2c5018114bde5aacf54eff3cd68d9f031e8e17018a1a7",
        "datetime": 1785277081
      }
    ],
    "_fetched_at": 1785307177.1282163,
    "_updated_label": "2026-07-29 15:40"
  },
  "INTC": {
    "nextEarnings": {
      "date": "2026-10-21",
      "hour": "amc",
      "epsEstimate": 0.3736
    },
    "news": [
      {
        "headline": "How Far Could Marvell Technology Stock Actually Fall From Here?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=84affedbd6649949a2248c44d13f8513ae38dae2dc8658bd0320fa00de141678",
        "datetime": 1785274325
      },
      {
        "headline": "Intel Is Down By 39% Since June. Time to Buy?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a7f965542b39ddc0533961e85126e2be1f6c42d40ae2a45a2c6258df5e62c4ab",
        "datetime": 1785273420
      },
      {
        "headline": "Visa Announced Layoffs Ahead of Earnings Beat, as AI and Restructuring Accelerate",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e6ebd39224f5d6f05a22559bb3414e8895de1582e83e91f87adaa98680fb1324",
        "datetime": 1785273120
      },
      {
        "headline": "Update: Dow Extends Advance Following Strong Earnings Reports",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9f3e83aa856c6145569fe6f503c9bc18b391fcdbda6367ec9ba6454a7e5b7205",
        "datetime": 1785270722
      },
      {
        "headline": "Chip Stocks Extend Pullback Amid AI Bubble Fears",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=38102b5adc1166f54997d3a5a422c67f820711f211ecbd74a948eceb9c9708ce",
        "datetime": 1785269399
      }
    ],
    "_fetched_at": 1785307177.1282163,
    "_updated_label": "2026-07-29 15:40"
  },
  "AMAT": {
    "nextEarnings": {
      "date": "2026-08-13",
      "hour": "amc",
      "epsEstimate": 3.462
    },
    "news": [
      {
        "headline": "Is Amkor Technology Stock A Smart Buy Right Now",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fac2fc3c17bfbaa69e25a176c99a849989bda55db4cf57b710f6bc3f97073a3b",
        "datetime": 1785272883
      },
      {
        "headline": "AI Chip Stocks Tumble as Nvidia, AMD Lead Market Selloff Over Spending Fears",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c70ae72f7f512ad8738cb2a3e40874f1e89ba2269c9f3a12af4f9266dfa6928e",
        "datetime": 1785268747
      },
      {
        "headline": "EssilorLuxottica: Q2/H1 2026 Results - Solid revenue trajectory at +9.7% in H1, with Q2 at +8.7%. Increasing profitability, with Adj. Operating Profit +15%.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fce88d908a7aea08fed61642e957c1c958b2312fb16dcaea7c3e1c3106481a3a",
        "datetime": 1785254400
      },
      {
        "headline": "FFIV Beats Q3 Earnings Estimates on Systems Strength, Raises View",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7979f77f5a225ab47b31eae4c37dfaf43a1463af7958160600f1270aa84129da",
        "datetime": 1785253800
      },
      {
        "headline": "Applied Digital Q4 Earnings Beat Estimates, Revenues Rise Y/Y",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f406eb30620c8182c1627aefbd992e7ca329cda24ec726df55c820c4dac1deab",
        "datetime": 1785250560
      }
    ],
    "_fetched_at": 1785307177.1282163,
    "_updated_label": "2026-07-29 15:40"
  },
  "QQQ": {
    "nextEarnings": null,
    "news": [
      {
        "headline": "Performance Insights - July 2026",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=3788fbcbadb92041c98f42fa92113d5ba6cf50caade38113d135b3e883030504",
        "datetime": 1785283080
      },
      {
        "headline": "The \"Wall Of Worry\" And This Correction",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=6f03d41a043524d876783d13432bd0122a893f745a5b17a5d7340601ee9802fe",
        "datetime": 1785268217
      },
      {
        "headline": "The Market Is Emotional - You Should Profit From It",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=488f7b74fd8c540bbbb54f1e4cf262b2068fd33a1dc3d556df03ced79e0dca21",
        "datetime": 1785260743
      },
      {
        "headline": "Amazon, Apple, Meta, Microsoft Earnings on Deck: 33% of Benzinga Viewers Say This is Top Report to Watch",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=259a2fbcbfc66494b40fe8fdfc916f688acbaa446fb217ec386d50009a5f3cb0",
        "datetime": 1785253448
      },
      {
        "headline": "China Developments Spark KOSPI Crash, US Semi Stocks Follow As Fed Decision Looms",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=7d9091bb931da6a78a9422e9a7456a0bb0cdc5803231e76854d4d21e49b8dee3",
        "datetime": 1785250339
      }
    ],
    "_fetched_at": 1785307177.1282163,
    "_updated_label": "2026-07-29 15:39"
  },
  "SPY": {
    "nextEarnings": null,
    "news": [
      {
        "headline": "Build A Better Path, Part 2: 3-Dimensional Investing",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=0112bd90bd1ad1cfaca01b08ad2ca5bbb10f064bea1cc9b92e48de0322551646",
        "datetime": 1785286800
      },
      {
        "headline": "Performance Insights - July 2026",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=3788fbcbadb92041c98f42fa92113d5ba6cf50caade38113d135b3e883030504",
        "datetime": 1785283080
      },
      {
        "headline": "Dow Ends Higher For Third Straight Session As Oil Cools, Nasdaq Slides On Chipmaker Rout — PYPL, SPCX, AAPL, V, F Stocks In Focus",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1bfe4bb9d4dff7dac20d270da8ef366e205326666d3af3ad383ead567155ef43",
        "datetime": 1785278641
      },
      {
        "headline": "Cedar Creek Partners Q2 2026 Market Exposure And Holdings",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=b844c94cc6fc32b587e301728c94abbc5f1164dbfeb9f827b71fe0d126a56c99",
        "datetime": 1785274200
      },
      {
        "headline": "The \"Wall Of Worry\" And This Correction",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=6f03d41a043524d876783d13432bd0122a893f745a5b17a5d7340601ee9802fe",
        "datetime": 1785268217
      }
    ],
    "_fetched_at": 1785307177.1282163,
    "_updated_label": "2026-07-29 15:39"
  },
  "ORCL": {
    "nextEarnings": {
      "date": "2026-09-07",
      "hour": "",
      "epsEstimate": 1.7745
    },
    "news": [
      {
        "headline": "As AI Anxiety Spreads, Hyperscaler Default Bets Are Spiking",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=512ed7ab4b4a71d2657a1b40a4a77ba6564c393887f53ccabbc0b77e101c40c5",
        "datetime": 1785302100
      },
      {
        "headline": "Jack Ma-Backed OceanBase Seeks Up to $443 Million for AI Push",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c5a3334b3e2080bbca403936a34f0d2cd93551dda26a71e3a2031391688c0fc7",
        "datetime": 1785290538
      },
      {
        "headline": "Satya Nadella's Microsoft Needs Power. Joe Creed's Caterpillar Sells It.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f778e7f3ca5f573d7b9f8723af9d93f2f09815a6dd402fae5fa3fb96c012d2e2",
        "datetime": 1785288900
      },
      {
        "headline": "Big Tech Credit Risk Flashes Urgent Warning Over AI Spending",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8bf6d27af300c3586efa15b9e88dd200d26eb135c3afd6007bfc3e370b58a913",
        "datetime": 1785266805
      },
      {
        "headline": "Warner Bros. Deal Collapse Would Cost the Ellisons $9.8 Billion",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=244873901890d8d36c1a387580a741278a9b1265e7641b684cb159cf56ddec27",
        "datetime": 1785264268
      }
    ],
    "_fetched_at": 1785307177.1282163,
    "_updated_label": "2026-07-29 15:40"
  },
  "CRM": {
    "nextEarnings": {
      "date": "2026-08-26",
      "hour": "amc",
      "epsEstimate": 3.3057
    },
    "news": [
      {
        "headline": "Oakmark Global All Cap Strategy Q2 2026 Portfolio Performance",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=fcc04c4e0057b082307abbd2455c824f7eba260d712ff83de46b48298e3edd8a",
        "datetime": 1785285600
      },
      {
        "headline": "3 of Wall Street’s Favorite Stocks with Questionable Fundamentals",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=95d43693543ccc46ac3e461572c81e1da278b453a5ca9af564600c1ae51e9129",
        "datetime": 1785268142
      },
      {
        "headline": "Global Digital Transformation in Healthcare Market Size/Share Worth USD 270.9 Billion by 2035 at a 14.13% CAGR: Healthcare Foresights (Analysis, Outlook, Leaders, Report, Trends, Forecast, Segmentatio",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=366bb3ca8848ba5152308566799255dd9d7dc151bab93b311925e61a56141cda",
        "datetime": 1785267000
      },
      {
        "headline": "Uncover the latest developments among dow jones stocks in today's session.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=68013383e26e7f493f401c7c6e877fce75f4cff1a7c847a6e7df8a5dc5cc667c",
        "datetime": 1785265804
      },
      {
        "headline": "Nvidia CEO Jensen Huang Urges Support for Open-Weight AI Models",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f2c555c4ce1d2eed6887c5cb70de48475aacb4a0c32df340ead73d804d9b45c7",
        "datetime": 1785264668
      }
    ],
    "_fetched_at": 1785307177.1282163,
    "_updated_label": "2026-07-29 15:40"
  },
  "PLTR": {
    "nextEarnings": {
      "date": "2026-08-03",
      "hour": "amc",
      "epsEstimate": 0.3544
    },
    "news": [
      {
        "headline": "Anthropic clarifies stance on open-weight AI models",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d85e5db1a0f516464186898786f677efc1003b913e9171add623d2b507560802",
        "datetime": 1785292380
      },
      {
        "headline": "Palantir Technologies Inc. (PLTR) Stock Dips While Market Gains: Key Facts",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0825093894833833d85712496642b086fcdbf8fa19dd2e5973ab3a000560d9b0",
        "datetime": 1785275104
      },
      {
        "headline": "Why Did Palantir Technologies Stock Drop Again?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=acaa6b35baaeed80793da8ab38db07f522b11869f2e08f9bd2441b147b66535a",
        "datetime": 1785272466
      },
      {
        "headline": "Palantir Stock Slumps Ahead of Q2 Earnings",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=602a57f2c2dacac87d8fac31f9fc17d590217b1507bdd3fe8082e756b0575284",
        "datetime": 1785269752
      },
      {
        "headline": "Anthropic’s Amodei defends open-weight stance following critique from Palantir’s Karp",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3a908ec9a92f2889a87abfc43fa708e3e6f30d3cae19da9b32b64df7ce9e6e83",
        "datetime": 1785266448
      }
    ],
    "_fetched_at": 1785307177.1282163,
    "_updated_label": "2026-07-29 15:40"
  },
  "QCOM": {
    "nextEarnings": {
      "date": "2026-07-29",
      "hour": "amc",
      "epsEstimate": 2.2724
    },
    "news": [
      {
        "headline": "Qualcomm Is Down 37% From Its High and Reports Wednesday. Is the Stock a Buy?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f2e3c53c9f7d93d9a8644995951bffda8664af0bb92b7705f74571c529c30e36",
        "datetime": 1785298020
      },
      {
        "headline": "Qualcomm is set to ratchet up chip prices in September, and your next gadget upgrade could bear the brunt",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7493aedac7df319bc99b7ccbd14525e905d31d46e8a626251d2266e02c5cc195",
        "datetime": 1785278328
      },
      {
        "headline": "How Far Could Marvell Technology Stock Actually Fall From Here?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=84affedbd6649949a2248c44d13f8513ae38dae2dc8658bd0320fa00de141678",
        "datetime": 1785274325
      },
      {
        "headline": "Ahead of Qualcomm Earnings, Here's What Barchart Data Says Comes Next for QCOM Stock",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5a4504692400ab20b1994a850b679f99de44ece9f164e816d32b050d149e5e48",
        "datetime": 1785270878
      },
      {
        "headline": "Qualcomm’s (QCOM) Samsung Expansion and AI Deals Could Reshape Its Growth Story",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d189a0dc245609556f5727537cb8e38e778ad375ed51a49e178141e185422451",
        "datetime": 1785269484
      }
    ],
    "_fetched_at": 1785307177.1282163,
    "_updated_label": "2026-07-29 15:40"
  },
  "ARM": {
    "nextEarnings": {
      "date": "2026-07-29",
      "hour": "amc",
      "epsEstimate": 0.4055
    },
    "news": [
      {
        "headline": "AMD Sinks 8%, Marvell Sinks 7%, Intel Fall 6% as AI Chip Trade Narrows to NVIDIA",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=37fae0e763c35d3d7a71eaa6f4bb2ba0eb9cca015c0fd4ed8b877b31c261b485",
        "datetime": 1785252523
      },
      {
        "headline": "What Is Going on With Arm Holdings Stock on Tuesday?",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=558112a0c7b5c13f789965e416a6969ae4f87991edbc06e984a74734e1387e3d",
        "datetime": 1785244971
      },
      {
        "headline": "Virtus Large Cap Growth SMA Q2 2026 Portfolio Update",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=7d3fe4c0d23f407ac74fb782e56ffe787cecacb6384ae5c0e8ee27f650627233",
        "datetime": 1785224400
      },
      {
        "headline": "Arm Holdings (ARM) Could Be 40% Undervalued As Earnings Near",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f980c9ce94c01769038be8ad0e2757858f0372dc382c13cd8a65b78fb56d818a",
        "datetime": 1785186558
      },
      {
        "headline": "Arm Holdings' Next Earnings Report on July 29 Could Send the Stock Soaring. Here's Why.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cc0155b7843b88add1a4b3730014312d7fec61b83efd9991799609d1a501d065",
        "datetime": 1785178801
      }
    ],
    "_fetched_at": 1785307177.1282163,
    "_updated_label": "2026-07-29 15:40"
  },
  "MRVL": {
    "nextEarnings": {
      "date": "2026-08-20",
      "hour": "",
      "epsEstimate": 0.939
    },
    "news": [
      {
        "headline": "EXCLUSIVE: After Nvidia And SK Hynix, These 3 AI Stocks Could Be The Next Winners, CEO Says",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f84aa69e33046f8b1ac689ed8688e62e7cd8d4c8423e0dcc787feff8dc1ad554",
        "datetime": 1785276027
      },
      {
        "headline": "How Far Could Marvell Technology Stock Actually Fall From Here?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=84affedbd6649949a2248c44d13f8513ae38dae2dc8658bd0320fa00de141678",
        "datetime": 1785274325
      },
      {
        "headline": "Marvell Technology (MRVL) Stock Slides As AI Funding Doubts Hit Chip Stocks",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ed108b861aadfd64a68da8cd6f70c195271f0cbd32984d61088d5619c2cde7e7",
        "datetime": 1785273263
      },
      {
        "headline": "Chip Stocks Extend Pullback Amid AI Bubble Fears",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=38102b5adc1166f54997d3a5a422c67f820711f211ecbd74a948eceb9c9708ce",
        "datetime": 1785269399
      },
      {
        "headline": "AI Chip Stocks Tumble as Nvidia, AMD Lead Market Selloff Over Spending Fears",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c70ae72f7f512ad8738cb2a3e40874f1e89ba2269c9f3a12af4f9266dfa6928e",
        "datetime": 1785268747
      }
    ],
    "_fetched_at": 1785307177.1282163,
    "_updated_label": "2026-07-29 15:40"
  },
  "ASML": {
    "nextEarnings": {
      "date": "2026-10-14",
      "hour": "bmo",
      "epsEstimate": 10.1558
    },
    "news": [
      {
        "headline": "AI Chip Stocks Tumble as Nvidia, AMD Lead Market Selloff Over Spending Fears",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c70ae72f7f512ad8738cb2a3e40874f1e89ba2269c9f3a12af4f9266dfa6928e",
        "datetime": 1785268747
      },
      {
        "headline": "The Market Is Emotional - You Should Profit From It",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=488f7b74fd8c540bbbb54f1e4cf262b2068fd33a1dc3d556df03ced79e0dca21",
        "datetime": 1785260743
      },
      {
        "headline": "ASML Stock Keeps Sliding On China’s Latest Chip Advance — Why BofA Calls Selloff An ‘Overreaction’ And Sees Over 70% Upside",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=38d7306efddc542034b648ed694c068df83505d08efa771c07bf0ead9c83df8d",
        "datetime": 1785258290
      },
      {
        "headline": "Dow Jones Energy Giant Chevron Eyes Buy Point As Oil Prices Tumble, But ASML Dives Below Key Level",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=313fe986e4edae534cd1e07e2d17b41f9b9c8baab33e61ea8d27d6c95d3c7cd8",
        "datetime": 1785256564
      },
      {
        "headline": "Prediction: ASML Stock Is Going to $3,000 in 3 Years",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e5c784aa4d75887afa03fae2a192db986bb665f870e929ebd959caff798d2647",
        "datetime": 1785251100
      }
    ],
    "_fetched_at": 1785307177.1282163,
    "_updated_label": "2026-07-29 15:40"
  },
  "LRCX": {
    "nextEarnings": {
      "date": "2026-07-29",
      "hour": "amc",
      "epsEstimate": 1.7172
    },
    "news": [
      {
        "headline": "Is Amkor Technology Stock A Smart Buy Right Now",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fac2fc3c17bfbaa69e25a176c99a849989bda55db4cf57b710f6bc3f97073a3b",
        "datetime": 1785272883
      },
      {
        "headline": "Earnings To Watch: Lam Research (LRCX) Reports Q2 Results Tomorrow",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=78c94c8d7e1abf55a454876d06cd1ed54a384394acfa5a8f638306e2841e4248",
        "datetime": 1785259982
      },
      {
        "headline": "Tuesday's session: top gainers and losers in the S&P500 index",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=d914c07964c6e02bbb3d0f3dab99f42869b3f4d48013c90488f66bd1641dc6d2",
        "datetime": 1785256501
      },
      {
        "headline": "Microsoft Could Swing $189 Billion in Value After Earnings",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=a56a9270583f16653189d46179f45a8225bcfa855ecde44199d32d13bc8e1d3c",
        "datetime": 1785252623
      },
      {
        "headline": "These S&P500 stocks are gapping in today's session",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=4def2ebd595d4441db1c358c20ea98221169d771dcb6942e98c2c7ed2cec1c4c",
        "datetime": 1785249301
      }
    ],
    "_fetched_at": 1785307177.1282163,
    "_updated_label": "2026-07-29 15:40"
  },
  "KLAC": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "",
      "epsEstimate": 1.1541
    },
    "news": [
      {
        "headline": "KLA Corp (KLAC) Q4 2026 Earnings Call Highlights: Record Revenue and Strategic Growth Amid ...",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d588b3c3525ae083f09e523886c3e580c4f6f8a030cf2accf11834617b4eec9a",
        "datetime": 1785301270
      },
      {
        "headline": "Dow Jones Futures: Oil Jumps On Iran News; Seagate, SK Hynix, KLA, Bloom Energy Earnings Late",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c702c4205a56087e8e0968c6cb651099fd8e2dd8f048187750d699a5c96b7c98",
        "datetime": 1785289596
      },
      {
        "headline": "Dow Jones Futures Fall, Oil Jumps On Iran News; Seagate, SK Hynix, KLA, Bloom Energy Earnings Late",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cb859fe1a1b4a4a7cd3703d4b8ba266d12137d378e4ccefcf96170b476e21b4d",
        "datetime": 1785282102
      },
      {
        "headline": "KLA Q4 Earnings Call Highlights",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8dab53e26ddd504047617aee221f45b2f6265d275342d6d661149c0d6f543268",
        "datetime": 1785279854
      },
      {
        "headline": "KLA Corporation (NASDAQ:KLAC) Q2: Beats On Revenue But Stock Drops 10.1%",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d8a496583d407246aee03250bda81e8026aec14ebe833c9e1268f63874684c3d",
        "datetime": 1785276054
      }
    ],
    "_fetched_at": 1785307177.1282163,
    "_updated_label": "2026-07-29 15:40"
  },
  "SNDK": {
    "nextEarnings": {
      "date": "2026-08-05",
      "hour": "",
      "epsEstimate": 35.1395
    },
    "news": [
      {
        "headline": "SK Hynix’s Q2 Miss Triggers Memory Stock Rout: MU, SNDK Slip But STX Holds Up In Green After Q4 Strong Report",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e537399cd17a8682fada1166e55f2cab88b3571e1db494f26e720069f10c4647",
        "datetime": 1785291665
      },
      {
        "headline": "Cramer Sees Echoes of Dot-Com Bust as Wall Street Flees AI Stocks for Safety",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5d85b397ef37499da4645103f2ab631de1308ca780df05df7282b81b96e0cc2a",
        "datetime": 1785286868
      },
      {
        "headline": "Sandisk Trades at 43 Times Earnings and 7 Times Next Year's Earnings Estimates. What Has to Go Right for the Cheap Number to Win?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=bdc6a94fbe04d9728668b8cacf8b734a733a00adcd2b5020fbdd37386fc76fbf",
        "datetime": 1785285120
      },
      {
        "headline": "Western Digital (WDC) Faces New China Barriers As Chip Selloff Deepens",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b5777f0c1810166d3a85ceeca35a21774d74a67e447a78ced33e46add0a46718",
        "datetime": 1785284265
      },
      {
        "headline": "What The Options Market Is Signaling About The Volatility In SanDisk Stock",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=bcb7f8ccbf404218ac953ea5a591bf8490deb723d3010a58ab079fd5a3dfad37",
        "datetime": 1785282929
      }
    ],
    "_fetched_at": 1785307177.1282163,
    "_updated_label": "2026-07-29 15:40"
  },
  "WDC": {
    "nextEarnings": {
      "date": "2026-08-05",
      "hour": "amc",
      "epsEstimate": 3.3281
    },
    "news": [
      {
        "headline": "Cramer Sees Echoes of Dot-Com Bust as Wall Street Flees AI Stocks for Safety",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5d85b397ef37499da4645103f2ab631de1308ca780df05df7282b81b96e0cc2a",
        "datetime": 1785286868
      },
      {
        "headline": "Western Digital (WDC) Faces New China Barriers As Chip Selloff Deepens",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b5777f0c1810166d3a85ceeca35a21774d74a67e447a78ced33e46add0a46718",
        "datetime": 1785284265
      },
      {
        "headline": "What The Options Market Is Signaling About The Volatility In SanDisk Stock",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=bcb7f8ccbf404218ac953ea5a591bf8490deb723d3010a58ab079fd5a3dfad37",
        "datetime": 1785282929
      },
      {
        "headline": "Which S&P500 stocks are showing activity after the closing bell on Tuesday?",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=7dbdd12c241a1f8edd2c5568a21a0808617a4e57fb96b76f2a5fd1c24769ed2d",
        "datetime": 1785272701
      },
      {
        "headline": "Micron Stock Is Leading a Brutal New Chip Slump",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=66dd4df31daa62c74480f92356b1ef2b1ab7581035895e3e39ea471684b9a242",
        "datetime": 1785270660
      }
    ],
    "_fetched_at": 1785307177.1282163,
    "_updated_label": "2026-07-29 15:40"
  }
};
