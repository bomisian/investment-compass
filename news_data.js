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
        "headline": "There's a 74% Chance SpaceX and Tesla Will Merge by May 2027, According to Kalshi -- but 2 Negatives Don't Make a Positive on Wall Street",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=abdbbb1b1cf27717c3b0b72ce5326fd55586e35c7e6100b78764df84beefeb82",
        "datetime": 1785403560
      },
      {
        "headline": "As Elon Musk's SpaceX and Tesla Stocks Continue to Fall, Is It Time to Buy the Stocks on the Dip?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e6f8e0d19f11c7308a64abc784da90b142a4ddff69063b2318a748f7495951e3",
        "datetime": 1785403200
      },
      {
        "headline": "1 Brilliant ETF I'm Loading Up on if Inflation Continues Climbing",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cb410fff7bc0f06a36606ee06c1d5b71d811c9f172aec3cbfb1227ed6d04860b",
        "datetime": 1785403080
      },
      {
        "headline": "Prediction: This Will Be Palantir's Stock Price in a Year (Hint: It's Time to Buy)",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8eff409db6434b66d6de8c1e3d4aeac7d88b3884e7597ea864eea2b3b84d5823",
        "datetime": 1785402780
      },
      {
        "headline": "These 3 Oil Stocks Surged in the First Half of 2026. Here's the Best One to Buy for the Second Half.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ff40fed15930d87bede543a7297826bb43f9152894d46bca46b895af9ec1607d",
        "datetime": 1785402240
      }
    ],
    "_fetched_at": 1785412905.3852134,
    "_updated_label": "2026-07-30 21:02"
  },
  "AAPL": {
    "nextEarnings": {
      "date": "2026-07-30",
      "hour": "amc",
      "epsEstimate": 1.9271
    },
    "news": [
      {
        "headline": "The Fed Held, The Bond Market Called The Bluff, and Oil Did The Rest",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=c03aa034f7183ba315351079e3750cfd6125f5d0581fb59d54ddaa47c4748398",
        "datetime": 1785404598
      },
      {
        "headline": "Nasdaq, S&P 500 Futures Rise: Microsoft Lifts AI Mood, Meta Sinks, Investors Brace For Apple, Amazon And PCE – Why MU, IBRX, CAPR, SBUX Are In Focus",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c4aea7ef575ed4779d517dc9a77209dad76dcdac4804c3532111e7cb41985c8b",
        "datetime": 1785401955
      },
      {
        "headline": "Bayerische Motoren Werke Aktiengesellschaft Q2 Earnings Call Highlights",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d386a6f744348823683e58cbbe614e05f45c29280649d741fdbf0a89b95b79ea",
        "datetime": 1785398638
      },
      {
        "headline": "Flirting with $5 trillion, Apple has never been more valuable—or a riskier bet for investors",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=070707455ca118f1e78bf04bcf0543e2a14440e260affb82f23fc85367e71e0d",
        "datetime": 1785394800
      },
      {
        "headline": "Apple Earnings Are Almost Here. Why Tim Cook’s Last Call as CEO Matters More Than Ever.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=dc0ac818fac34fbd58f3f6c6d1812e37a2bb6d007e93062ddff8809cee1145f7",
        "datetime": 1785393621
      }
    ],
    "_fetched_at": 1785412905.3852134,
    "_updated_label": "2026-07-30 21:02"
  },
  "GOOGL": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "amc",
      "epsEstimate": 3.0988
    },
    "news": [
      {
        "headline": "Alphabet Will Spend as Much as $205 Billion This Year. The Depreciation Bill Starts Landing in 2027.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=66d336ef50ac95ea4372f94bb8e1a0543226c926828a6cb847ea6157216a3386",
        "datetime": 1785400320
      },
      {
        "headline": "AMZN Stock Rises Premarket Ahead Of Results: AWS, CapEx In Focus",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e32f7b75d679ff79f1b4659505b381727e962089b334df745b493947d00e7b1f",
        "datetime": 1785398952
      },
      {
        "headline": "Zacks Earnings Trends Highlights: MU, GOOGL, SPCX, PG, CAG and PEP",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9d698d9b7be0812a9cfd87f91db75e997d061dbd799324d87e1bd7d39abd665f",
        "datetime": 1785397260
      },
      {
        "headline": "Amazon Reports Earnings Thursday With Its Cloud Under the Microscope",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3f370b55a8d48a570c280c42152dfe23c9bb2529d04ca6f20530af158a361cb8",
        "datetime": 1785394800
      },
      {
        "headline": "AI data centre supplier Zhongji InnoLight tumbles on Hong Kong debut",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a6e86a63e426ac8981a6b2e0967313dbb03a413872cfe76ed1f22c621790d05a",
        "datetime": 1785384341
      }
    ],
    "_fetched_at": 1785412905.3852134,
    "_updated_label": "2026-07-30 21:01"
  },
  "MSFT": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "",
      "epsEstimate": 4.7278
    },
    "news": [
      {
        "headline": "The Fed Held, The Bond Market Called The Bluff, and Oil Did The Rest",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=c03aa034f7183ba315351079e3750cfd6125f5d0581fb59d54ddaa47c4748398",
        "datetime": 1785404598
      },
      {
        "headline": "Fed Decision and Big Tech Earnings Dominate Market Attention: Dow Jones, S&P, Nasdaq, Wall Street Futures",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c08ba0346ab67bb5fcd02f2d219de314bfae7982ee09b9e659889d05fe6ad582",
        "datetime": 1785402693
      },
      {
        "headline": "Microsoft posts record profit as shares surge 10%, while Meta disappoints",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1b1588fa5981b607e92defeb77c118cc99c543bfca0e6edefe2c24eb9d6df7b0",
        "datetime": 1785402019
      },
      {
        "headline": "Nasdaq, S&P 500 Futures Rise: Microsoft Lifts AI Mood, Meta Sinks, Investors Brace For Apple, Amazon And PCE – Why MU, IBRX, CAPR, SBUX Are In Focus",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c4aea7ef575ed4779d517dc9a77209dad76dcdac4804c3532111e7cb41985c8b",
        "datetime": 1785401955
      },
      {
        "headline": "MSFT Says the Next Phase of AI Is 'Per Seat Plus Consumption' as Copilot Usage Grows",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1081a8004bca20e1752bcbcccfb7cdac1dbd74a5dfa90821e196fec7218a6f90",
        "datetime": 1785401750
      }
    ],
    "_fetched_at": 1785412905.3852134,
    "_updated_label": "2026-07-30 21:01"
  },
  "AMZN": {
    "nextEarnings": {
      "date": "2026-07-30",
      "hour": "amc",
      "epsEstimate": 1.8556
    },
    "news": [
      {
        "headline": "The Fed Held, The Bond Market Called The Bluff, and Oil Did The Rest",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=c03aa034f7183ba315351079e3750cfd6125f5d0581fb59d54ddaa47c4748398",
        "datetime": 1785404598
      },
      {
        "headline": "Nasdaq, S&P 500 Futures Rise: Microsoft Lifts AI Mood, Meta Sinks, Investors Brace For Apple, Amazon And PCE – Why MU, IBRX, CAPR, SBUX Are In Focus",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c4aea7ef575ed4779d517dc9a77209dad76dcdac4804c3532111e7cb41985c8b",
        "datetime": 1785401955
      },
      {
        "headline": "AMZN Stock Rises Premarket Ahead Of Results: AWS, CapEx In Focus",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e32f7b75d679ff79f1b4659505b381727e962089b334df745b493947d00e7b1f",
        "datetime": 1785398952
      },
      {
        "headline": "Amazon Reports Earnings Thursday With Its Cloud Under the Microscope",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3f370b55a8d48a570c280c42152dfe23c9bb2529d04ca6f20530af158a361cb8",
        "datetime": 1785394800
      },
      {
        "headline": "Even $64 Billion in Quarterly Profit Is a Disappointment for Chip Investors",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3f25d7cf471970e45aed538d839afb1a0f5c014ddd7182a18b98ccf976121335",
        "datetime": 1785379620
      }
    ],
    "_fetched_at": 1785412905.3852134,
    "_updated_label": "2026-07-30 21:02"
  },
  "TSM": {
    "nextEarnings": {
      "date": "2026-10-14",
      "hour": "amc",
      "epsEstimate": 28.6598
    },
    "news": [
      {
        "headline": "Cathie Wood Keeps Buying the Dip on SpaceX, Adds $20 Million of TSMC as Chip Stocks Slide",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=1131fe1c1a6f1492ca7310e49c3c7a4cb5b7642766fb74d209b4796d5926bcaa",
        "datetime": 1785366471
      },
      {
        "headline": "SK hynix: Damn The Torpedoes, Full Steam Ahead",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=e3ea37c26b3d072be639d608ae9363968bfe34c144798c166faaa1e7042a1df6",
        "datetime": 1785339400
      },
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
      }
    ],
    "_fetched_at": 1785412905.3852134,
    "_updated_label": "2026-07-30 21:02"
  },
  "AVGO": {
    "nextEarnings": {
      "date": "2026-09-02",
      "hour": "amc",
      "epsEstimate": 3.3012
    },
    "news": [
      {
        "headline": "Is Broadcom (AVGO) Stock Below Fair Value After Its AI Deals?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e4adae28e115f9517e98803d221e6525b4e82e573450c79bdd8a9c89cb7d2beb",
        "datetime": 1785373761
      },
      {
        "headline": "Samsung’s Chip Profit Soars Over 250-Fold on AI Memory Shortages",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=03bab96d05dfd6cb78df795bbb69eaa4c2b7a7cf9cce9fb2382b1786d8d094a9",
        "datetime": 1785369965
      },
      {
        "headline": "Which Company Will Win the Race to $3 Trillion -- Amazon, Broadcom, or Taiwan Semiconductor?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=90c6995f844496db60f918c41b0259f2a644868cede909216e52212943b9cdff",
        "datetime": 1785363600
      },
      {
        "headline": "Broadcom Inc. (AVGO) Falls More Steeply Than Broader Market: What Investors Need to Know",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ad69582d077a75eee53c624acdccf818de8353eadc234f00cf91e2428e1ba544",
        "datetime": 1785361502
      },
      {
        "headline": "Tesla Stock Breaks $300. How Far It Needs to Fall to Lose Trillion-Dollar Status.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5dd87d9fb57169ae6e0eccc9918970697b1cfae3e9aa2d67dec36067c0c7025e",
        "datetime": 1785356940
      }
    ],
    "_fetched_at": 1785412905.3852134,
    "_updated_label": "2026-07-30 21:02"
  },
  "META": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "amc",
      "epsEstimate": 7.1724
    },
    "news": [
      {
        "headline": "The Fed Held, The Bond Market Called The Bluff, and Oil Did The Rest",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=c03aa034f7183ba315351079e3750cfd6125f5d0581fb59d54ddaa47c4748398",
        "datetime": 1785404598
      },
      {
        "headline": "Fed Decision and Big Tech Earnings Dominate Market Attention: Dow Jones, S&P, Nasdaq, Wall Street Futures",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c08ba0346ab67bb5fcd02f2d219de314bfae7982ee09b9e659889d05fe6ad582",
        "datetime": 1785402693
      },
      {
        "headline": "META Stock Dips Premarket After Q2 Report: Meta’s Forecast Miss Has Investors Worried, Retail Turns More Bearish",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=efac70f328116e9c314e08143b14beaf60c1f5e9e1e0306c5d41d57f5e789161",
        "datetime": 1785402507
      },
      {
        "headline": "Microsoft posts record profit as shares surge 10%, while Meta disappoints",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1b1588fa5981b607e92defeb77c118cc99c543bfca0e6edefe2c24eb9d6df7b0",
        "datetime": 1785402019
      },
      {
        "headline": "Nasdaq, S&P 500 Futures Rise: Microsoft Lifts AI Mood, Meta Sinks, Investors Brace For Apple, Amazon And PCE – Why MU, IBRX, CAPR, SBUX Are In Focus",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c4aea7ef575ed4779d517dc9a77209dad76dcdac4804c3532111e7cb41985c8b",
        "datetime": 1785401955
      }
    ],
    "_fetched_at": 1785412905.3852134,
    "_updated_label": "2026-07-30 21:02"
  },
  "TSLA": {
    "nextEarnings": {
      "date": "2026-10-20",
      "hour": "amc",
      "epsEstimate": 0.4684
    },
    "news": [
      {
        "headline": "There's a 74% Chance SpaceX and Tesla Will Merge by May 2027, According to Kalshi -- but 2 Negatives Don't Make a Positive on Wall Street",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=abdbbb1b1cf27717c3b0b72ce5326fd55586e35c7e6100b78764df84beefeb82",
        "datetime": 1785403560
      },
      {
        "headline": "As Elon Musk's SpaceX and Tesla Stocks Continue to Fall, Is It Time to Buy the Stocks on the Dip?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e6f8e0d19f11c7308a64abc784da90b142a4ddff69063b2318a748f7495951e3",
        "datetime": 1785403200
      },
      {
        "headline": "Bayerische Motoren Werke Aktiengesellschaft Q2 Earnings Call Highlights",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d386a6f744348823683e58cbbe614e05f45c29280649d741fdbf0a89b95b79ea",
        "datetime": 1785398638
      },
      {
        "headline": "Gary Black Pegs TSLA's Fair Value at $312, Says 'Don't Fall in Love With the Stock'",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f56f8c63373b476f9ae54538da2064c425139af76f2c7b14c2bea5a437154879",
        "datetime": 1785393896
      },
      {
        "headline": "Cathie Wood Bought $53.5 Million of Tesla Stock Right After Elon Musk's Post-Earnings Sell-Off. Is a Rebound Coming?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0a16561a0961c5f574691ec867267b4a4312a7bb342c6ed2f503863012947ee9",
        "datetime": 1785390600
      }
    ],
    "_fetched_at": 1785412905.3852134,
    "_updated_label": "2026-07-30 21:02"
  },
  "MU": {
    "nextEarnings": {
      "date": "2026-09-21",
      "hour": "amc",
      "epsEstimate": 32.2476
    },
    "news": [
      {
        "headline": "Nasdaq, S&P 500 Futures Rise: Microsoft Lifts AI Mood, Meta Sinks, Investors Brace For Apple, Amazon And PCE – Why MU, IBRX, CAPR, SBUX Are In Focus",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c4aea7ef575ed4779d517dc9a77209dad76dcdac4804c3532111e7cb41985c8b",
        "datetime": 1785401955
      },
      {
        "headline": "Zacks Investment Ideas feature highlights: Nasdaq 100 Index ETF and Micron",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2002637e1b19efdba9e2036a39407715d84f3da2024729f112b065051e1e19b0",
        "datetime": 1785397980
      },
      {
        "headline": "Zacks Earnings Trends Highlights: MU, GOOGL, SPCX, PG, CAG and PEP",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9d698d9b7be0812a9cfd87f91db75e997d061dbd799324d87e1bd7d39abd665f",
        "datetime": 1785397260
      },
      {
        "headline": "1 Value Stock with Exciting Potential and 2 We Turn Down",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=609aa15c1b7939c17e105035b8b1857cb2bbfae0aaf39cd44e53ad01b67ccdf8",
        "datetime": 1785394862
      },
      {
        "headline": "MU, SNDK, WDC, DRAM: US Memory Stocks Stay Choppy Even As Samsung Sees Chip Crunch Lasting Through 2028",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=24fa39853c7061b567ed969412e779a37796377dc4f50877a3047a66600b3acf",
        "datetime": 1785394312
      }
    ],
    "_fetched_at": 1785412905.3852134,
    "_updated_label": "2026-07-30 21:03"
  },
  "AMD": {
    "nextEarnings": {
      "date": "2026-08-04",
      "hour": "amc",
      "epsEstimate": 1.6291
    },
    "news": [
      {
        "headline": "The Fed Held, The Bond Market Called The Bluff, and Oil Did The Rest",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=c03aa034f7183ba315351079e3750cfd6125f5d0581fb59d54ddaa47c4748398",
        "datetime": 1785404598
      },
      {
        "headline": "Riot Platforms: Why The Q2 2026 AMD Hosting Update Matters More Than Bitcoin",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=466c67f3647c2ead5e6255ef23ad9695e79a86407f3915eb6213793715b01a83",
        "datetime": 1785395557
      },
      {
        "headline": "The SOXX Dip Has A Painful History",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c447f16af111d31e565f80f6f12787da1582a417c9ffe47af2a81b235722bd50",
        "datetime": 1785362713
      },
      {
        "headline": "AMD: The Pullback Creates A Better Entry Ahead Of Q2",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=d808ed6748fcd9df84324e25cba993f65363d0eb7e5d85d59823fb77dddde1cb",
        "datetime": 1785357037
      },
      {
        "headline": "Dear AMD Stock Fans, Mark Your Calendars for August 4",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=300ca708d415370f45aef122c40effc6e1779386ef1bc8e00e82df096e634f20",
        "datetime": 1785356644
      }
    ],
    "_fetched_at": 1785412905.3852134,
    "_updated_label": "2026-07-30 21:02"
  },
  "INTC": {
    "nextEarnings": {
      "date": "2026-10-21",
      "hour": "amc",
      "epsEstimate": 0.3736
    },
    "news": [
      {
        "headline": "Fortinet (FTNT) Raises Revenue Outlook After Strong Q2 And New AI Product Push",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a8677f5249df245eec15eaa6e61b12acf0b98d25c8e9d14abc7e1c45721ebe81",
        "datetime": 1785388115
      },
      {
        "headline": "Intel: Buy The AI CPU Bottleneck, Treat Foundry As The Option",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=360c061665ce017bcfd4fd798b4657d4272abb056abe1c2f1af5c0bc41e988bd",
        "datetime": 1785387810
      },
      {
        "headline": "Zeta Global Names Intel and Synopsys Veteran Trey Campbell to Lead Investor Relations",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8360f55981c8ccfc759dc0b783635c4433203bef41b62fb0b28d86acd4accb5e",
        "datetime": 1785355500
      },
      {
        "headline": "Intel Stock Sinks 40%, But Most Analysts Still Aren’t Bullish on INTC",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7fc9257e04cad13dfdcb6fb86cfc434b08c5e66f40df928aef705c97342203e8",
        "datetime": 1785355040
      },
      {
        "headline": "Intel (INTC) Stock Looks Fully Priced Despite Fair Value Support",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=62fb9b3f200b28beb252608f582c5b741730a81d1589097f5098845fda3ad663",
        "datetime": 1785352115
      }
    ],
    "_fetched_at": 1785412905.3852134,
    "_updated_label": "2026-07-30 21:02"
  },
  "AMAT": {
    "nextEarnings": {
      "date": "2026-08-13",
      "hour": "amc",
      "epsEstimate": 3.462
    },
    "news": [
      {
        "headline": "The Fed Held, The Bond Market Called The Bluff, and Oil Did The Rest",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=c03aa034f7183ba315351079e3750cfd6125f5d0581fb59d54ddaa47c4748398",
        "datetime": 1785404598
      },
      {
        "headline": "Nvidia, AMD, Micron Lead Chip Stocks Selloff as SK hynix Earnings Disappoint",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=90132820379dc3b1248cda956972f5117af53bbb5dcd5791b247e49ff8ff1957",
        "datetime": 1785349375
      },
      {
        "headline": "PSI: A Buy On The Equipment Side Of The Chip Sell-Off",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=767ea7f7bd0abdbfd57e638cea857f04865df3af970693e3ee5f1c16a21e9309",
        "datetime": 1785345016
      },
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
      }
    ],
    "_fetched_at": 1785412905.3852134,
    "_updated_label": "2026-07-30 21:02"
  },
  "QQQ": {
    "nextEarnings": null,
    "news": [
      {
        "headline": "Warsh Holds Off Rate Hike, Bets On Supply Catching Up With Demand",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=271f677af44b439427bc42333fe5e5471d2054ebe8be0d78096fd56c08b2bf48",
        "datetime": 1785396600
      },
      {
        "headline": "Information Timing And Release: The Gaming Of Guidance",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=a907f7300dc58ac092f7762ca9294eeb784f47712a05700bf3c0ed471f6018b2",
        "datetime": 1785392580
      },
      {
        "headline": "China Can Build The Memory, It Can't Build The Base Die",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=53fe941b032880907c3b681c98716c5ee4436ef3af5aad610bb0d06c6e6b6909",
        "datetime": 1785389261
      },
      {
        "headline": "Stocks Tank, Long-Term Treasury Yields Jump After Warsh Starts Talking",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=9855391e848d10f86231ce3ebc047f3e0cdedaf5e493c63a4fb19cb8a878b49a",
        "datetime": 1785378600
      },
      {
        "headline": "The Fed Holds Steady, But Questions Linger",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=941b5b0e20f43677ec653338534b3b20aafc6afd325e2b0de7e1d2e771c390be",
        "datetime": 1785378000
      }
    ],
    "_fetched_at": 1785412905.3852134,
    "_updated_label": "2026-07-30 21:01"
  },
  "SPY": {
    "nextEarnings": null,
    "news": [
      {
        "headline": "His 401(k) Hit a Record High on AI Stocks. Why His Social Security Check Matters More Than Ever.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9dda102ebec47dd47d51d915c54302a1d3f11e55aaa46d990ea566eb9d87d3e5",
        "datetime": 1785405746
      },
      {
        "headline": "Warsh Holds Off Rate Hike, Bets On Supply Catching Up With Demand",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=271f677af44b439427bc42333fe5e5471d2054ebe8be0d78096fd56c08b2bf48",
        "datetime": 1785396600
      },
      {
        "headline": "Information Timing And Release: The Gaming Of Guidance",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=a907f7300dc58ac092f7762ca9294eeb784f47712a05700bf3c0ed471f6018b2",
        "datetime": 1785392580
      },
      {
        "headline": "China Can Build The Memory, It Can't Build The Base Die",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=53fe941b032880907c3b681c98716c5ee4436ef3af5aad610bb0d06c6e6b6909",
        "datetime": 1785389261
      },
      {
        "headline": "Stocks Tank, Long-Term Treasury Yields Jump After Warsh Starts Talking",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=9855391e848d10f86231ce3ebc047f3e0cdedaf5e493c63a4fb19cb8a878b49a",
        "datetime": 1785378600
      }
    ],
    "_fetched_at": 1785412905.3852134,
    "_updated_label": "2026-07-30 21:01"
  },
  "ORCL": {
    "nextEarnings": {
      "date": "2026-09-07",
      "hour": "",
      "epsEstimate": 1.7745
    },
    "news": [
      {
        "headline": "3 Out-of-Favor Stocks We Keep Off Our Radar",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=11352d3848e69f94f42dc11a636c0e90fca9e005fdf72d924a88bc04629774af",
        "datetime": 1785391982
      },
      {
        "headline": "Oracle: Bears May Pay A Big Price (Rating Upgrade)",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=71538f51a63ed5a34c1e247bbc81620d72168a020a7f005d1720e5d79ded1c4c",
        "datetime": 1785375235
      },
      {
        "headline": "Why Oracle (ORCL) Dipped More Than Broader Market Today",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f75ab3c51c4b917585688a94c04e5a5b784f5f9721b88b3062e2964ab0ff0f75",
        "datetime": 1785361504
      },
      {
        "headline": "Oracle (ORCL) Stock Looks Undervalued On Earnings While Risks Still Weigh",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=546ccffa103aa75efe526f7c2ba3083aba92fb2021fcf7154c9c589d7cf262a2",
        "datetime": 1785355623
      },
      {
        "headline": "AI-Fueled Demand Signals a Bigger Opportunity for Bloom Energy (BE) Investors",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cd4606ac65f460e96a7192bb3bccb3c1a9dbba59f6d83d0cbb56850d37aa8d70",
        "datetime": 1785355084
      }
    ],
    "_fetched_at": 1785412905.3852134,
    "_updated_label": "2026-07-30 21:02"
  },
  "CRM": {
    "nextEarnings": {
      "date": "2026-08-26",
      "hour": "amc",
      "epsEstimate": 3.3057
    },
    "news": [
      {
        "headline": "Update: Equities Tumble Following Fed's Divided Decision to Stay on Hold",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ee05ec4aa25870aae7b222e7879496018e6441f835cf8d30de9d9d7331bfa4ca",
        "datetime": 1785356853
      },
      {
        "headline": "Wednesday's session: top gainers and losers in the dow jones index",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=637a7a8fadaf10d44efb7c0c6bf9b51ef54f207f12d1a8f77ec01d29e4101ba3",
        "datetime": 1785352204
      },
      {
        "headline": "Salesforce (CRM) Stock Fair Value Edges Lower As Analysts Split On AI Growth",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f8a0c106f0035f89b27ab846ac36a2cf1cdfbc8dfaebe9a4d24fcd32a3290ce7",
        "datetime": 1785348596
      },
      {
        "headline": "Equities Lower Intraday Ahead of Fed Decision, Major Tech Earnings",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=22af7dd693794c83007bb27dfa6c72908e1c8b1ec20f4e1b6bf03d26ead09353",
        "datetime": 1785348032
      },
      {
        "headline": "ORCL Is Back At A Level It Has Defended Before",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b2f5c53fa6a1929fc4af511e6e08d60f4b646b9d4a7534b6e414e3a392f4679f",
        "datetime": 1785347739
      }
    ],
    "_fetched_at": 1785412905.3852134,
    "_updated_label": "2026-07-30 21:02"
  },
  "PLTR": {
    "nextEarnings": {
      "date": "2026-08-03",
      "hour": "amc",
      "epsEstimate": 0.3544
    },
    "news": [
      {
        "headline": "Prediction: This Will Be Palantir's Stock Price in a Year (Hint: It's Time to Buy)",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8eff409db6434b66d6de8c1e3d4aeac7d88b3884e7597ea864eea2b3b84d5823",
        "datetime": 1785402780
      },
      {
        "headline": "Did AI Momentum and France’s Exit Just Shift Palantir Technologies' (PLTR) Investment Narrative?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=75f4f21262919339dacf0d3217098cd0ba2a6e0e50982ad92ba6c0f19608c748",
        "datetime": 1785381407
      },
      {
        "headline": "Microsoft Q4 Earnings Call Highlights",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f1190956a821f1df5c98fd2157757c902b50c314337001b4b404d23b63078a05",
        "datetime": 1785369835
      },
      {
        "headline": "Smart Money Shifts: Palantir (PLTR) Gains Hedge Fund Backing as Snowflake (SNOW) Sees Trims",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0139403a8e837ccac68453026735d56d6728d6f06e4507b46e8d5836f93c8247",
        "datetime": 1785362724
      },
      {
        "headline": "Nvidia CEO Jensen Huang Makes First Ever X Post Sharing Letter to Congress and Says ‘Transparency Can Be More Secure Than Obscurity’",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4297b25e281d7785e23080cbd1b845714de889e4cb884c3fc4a343fe470e814a",
        "datetime": 1785351725
      }
    ],
    "_fetched_at": 1785412905.3852134,
    "_updated_label": "2026-07-30 21:02"
  },
  "QCOM": {
    "nextEarnings": {
      "date": "2026-11-03",
      "hour": "amc",
      "epsEstimate": 2.38
    },
    "news": [
      {
        "headline": "Qualcomm's Automotive Growth Supports The Buy Case",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=e3089fbb211d6efc08f5d6f568adbda7ee7d1736acc9a1457c4860d60f495096",
        "datetime": 1785397514
      },
      {
        "headline": "Qualcomm Inc (QCOM) (Q3 2026) Earnings Call Highlights: Record Automotive Revenue and Data ...",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=da77b7ce08d9e5eb74ef57211217b2c47270a51fc38030f9fb690665d346f1e6",
        "datetime": 1785387764
      },
      {
        "headline": "Dow, S&P 500, Nasdaq Futures Rise As Investors Shrug Off Fed Hold, Big Tech Earnings: IBRX, MSFT, SOFI, META In Focus",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6542db42113350728bddc0ba753972ee8bdd1cdc60225159421bf16f84fbf0e9",
        "datetime": 1785375879
      },
      {
        "headline": "Aristotle Global Equity Advisory Q2 2026 Portfolio Review",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=204559cec6aaf60fde3ef26ef1b228616493660cbe482b30f2868ca9ad746377",
        "datetime": 1785374400
      },
      {
        "headline": "Qualcomm Q3 Earnings Call Highlights",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=16dd068fbc3dff4e374a8904480714362dd18f81ecad7c46c0c772712732c18b",
        "datetime": 1785369840
      }
    ],
    "_fetched_at": 1785412905.3852134,
    "_updated_label": "2026-07-30 21:02"
  },
  "ARM": {
    "nextEarnings": {
      "date": "2026-11-04",
      "hour": "",
      "epsEstimate": 0.4502
    },
    "news": [
      {
        "headline": "The Fed Held, The Bond Market Called The Bluff, and Oil Did The Rest",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=c03aa034f7183ba315351079e3750cfd6125f5d0581fb59d54ddaa47c4748398",
        "datetime": 1785404598
      },
      {
        "headline": "ARM Holdings PLC (ARM) (Q1 2027) Earnings Call Highlights: Record Revenue and AI Growth Amid ...",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5a8bfa36079266c60e0a3a494eb76c67fc229a1f6ab902b347b69abbacc9e9d1",
        "datetime": 1785387632
      },
      {
        "headline": "ARM Holdings (NASDAQ:ARM) Fiscal Q1 Results Beat Estimates but Guidance Disappoints, Shares Drop 6%",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=217356f69ed69244a886534ab735abce375cbbfc228bc2dc197eedf7835318a8",
        "datetime": 1785367261
      },
      {
        "headline": "ARM Q1 Earnings Call Highlights",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1ab443ddae8397ae566a4d854886b834a3b4e4de76eac338af87834ab25fa551",
        "datetime": 1785366243
      },
      {
        "headline": "Arm Holdings plc (ARM) Q1 2027 Earnings Call Transcript",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=1877b6a5ab9981f8898bd6c151121a58a3519c40737a819b0e4ed06dfd016f58",
        "datetime": 1785363200
      }
    ],
    "_fetched_at": 1785412905.3852134,
    "_updated_label": "2026-07-30 21:02"
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
    "_fetched_at": 1785412905.3852134,
    "_updated_label": "2026-07-30 21:02"
  },
  "ASML": {
    "nextEarnings": {
      "date": "2026-10-14",
      "hour": "bmo",
      "epsEstimate": 10.1558
    },
    "news": [
      {
        "headline": "ASML Holding (ASML) Looks Fully Valued After A 12% Pullback",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9bbfc051c40fbf6660e88634f2046fc00e52bc68e20c295598fd531a7f9644ec",
        "datetime": 1785352187
      },
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
      }
    ],
    "_fetched_at": 1785412905.3852134,
    "_updated_label": "2026-07-30 21:02"
  },
  "LRCX": {
    "nextEarnings": {
      "date": "2026-10-20",
      "hour": "",
      "epsEstimate": 1.8266
    },
    "news": [
      {
        "headline": "Lam Research Corp (LRCX) (Q4 2026) Earnings Call Highlights: Record Revenue and EPS Fueled by ...",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ced5dc7ed48fac5e84748c24f8ed465c27425cf786498b9ff4632ab77e515612",
        "datetime": 1785387713
      },
      {
        "headline": "Lam Research Corporation (LRCX) Q4 2026 Earnings Call Transcript",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=80405bec2940e31a41e179cc6faa2d600f1e53e9cce5d3d093c6dbbdbf754a87",
        "datetime": 1785378198
      },
      {
        "headline": "Lam Research Q4 Earnings Call Highlights",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5cdef16fe6e87c798f4606538b5f141cbc81c46d84de5b4363dd3b5b2ef4a7a4",
        "datetime": 1785366246
      },
      {
        "headline": "Lam Research (LRCX) Q4 Earnings: Taking a Look at Key Metrics Versus Estimates",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d16c27b684e5f0bb16a00b3a2f747cc480ab3bd6c8c561b71d9c05c40144c749",
        "datetime": 1785366003
      },
      {
        "headline": "Lam Research posts record quarterly revenue, boosts outlook on AI chip demand",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ad5ebe15dc5dcf827be9a0b498b382ac5c3adfbd93e6b88347d463d888d87475",
        "datetime": 1785360589
      }
    ],
    "_fetched_at": 1785412905.3852134,
    "_updated_label": "2026-07-30 21:02"
  },
  "KLAC": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "",
      "epsEstimate": 1.1541
    },
    "news": [
      {
        "headline": "KLA (KLAC) Posts Strong Q4 And Guides Higher On AI Demand",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7fd3f87f985d7a89449b0b7b75379f35138e02dacf241f05acb0205ff6a2195d",
        "datetime": 1785366751
      },
      {
        "headline": "These S&P500 stocks are moving in today's session",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=b4d240650ad875fe350c20b8a2fc08285c33b9ebb23947e6eb723f76301a62a5",
        "datetime": 1785351901
      },
      {
        "headline": "Nasdaq, S&P 500 Fall 1%, Dow Sinks 900 Points Ahead of Fed Decision",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=680b52ad4c18cef53005b4ba04d004f73cf7eb86c16dca114a1d56812809ffe6",
        "datetime": 1785349889
      },
      {
        "headline": "PSI: A Buy On The Equipment Side Of The Chip Sell-Off",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=767ea7f7bd0abdbfd57e638cea857f04865df3af970693e3ee5f1c16a21e9309",
        "datetime": 1785345016
      },
      {
        "headline": "Uncover the latest developments among S&P500 stocks in today's session.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=121414bfed0be327ad35d640534fff40dec1c43ecc38b7d5cdce74c34bbab213",
        "datetime": 1785342901
      }
    ],
    "_fetched_at": 1785412905.3852134,
    "_updated_label": "2026-07-30 21:02"
  },
  "SNDK": {
    "nextEarnings": {
      "date": "2026-08-05",
      "hour": "amc",
      "epsEstimate": 35.1395
    },
    "news": [
      {
        "headline": "MU, SNDK, WDC, DRAM: US Memory Stocks Stay Choppy Even As Samsung Sees Chip Crunch Lasting Through 2028",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=24fa39853c7061b567ed969412e779a37796377dc4f50877a3047a66600b3acf",
        "datetime": 1785394312
      },
      {
        "headline": "The Memory Crash Has 4 Big Stocks Down 30% or More From Their Highs. I'd Buy 2 of Them.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=666182ca56857de00a14f15f536a4ad6d824437907c925489fd69c3671203d83",
        "datetime": 1785366420
      },
      {
        "headline": "Stay updated with the S&P500 stocks that are on the move in today's after-hours session.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=c5ee996c576f6df3d9c444296f09781a3bf26682006a6d61d06e93694f9fc620",
        "datetime": 1785359101
      },
      {
        "headline": "Sandisk Stock Has Surged More Than 2,000% in a Year. History Suggests This Is Where the Stock Could Be in 2028",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b6208cb64f6beec3a9b23d89e9c22c168140b9015b196111639eaddcfdc31099",
        "datetime": 1785350520
      },
      {
        "headline": "Why Sandisk Stock Is Sinking Today",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=702446ccd843216b78684bbcde8acd6aa01eaa924958c87b238ab07e2d38b613",
        "datetime": 1785348103
      }
    ],
    "_fetched_at": 1785412905.3852134,
    "_updated_label": "2026-07-30 21:03"
  },
  "WDC": {
    "nextEarnings": {
      "date": "2026-08-05",
      "hour": "amc",
      "epsEstimate": 3.3281
    },
    "news": [
      {
        "headline": "MU, SNDK, WDC, DRAM: US Memory Stocks Stay Choppy Even As Samsung Sees Chip Crunch Lasting Through 2028",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=24fa39853c7061b567ed969412e779a37796377dc4f50877a3047a66600b3acf",
        "datetime": 1785394312
      },
      {
        "headline": "The Memory Crash Has 4 Big Stocks Down 30% or More From Their Highs. I'd Buy 2 of Them.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=666182ca56857de00a14f15f536a4ad6d824437907c925489fd69c3671203d83",
        "datetime": 1785366420
      },
      {
        "headline": "Seagate Stock Shakes Off AI Rally Fears With Big Earnings Beat",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=54137d4d610addbf3bc4b275e8c56bfd9a2c86293255cd914e8bcedf390d2cf3",
        "datetime": 1785358395
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
      }
    ],
    "_fetched_at": 1785412905.3852134,
    "_updated_label": "2026-07-30 21:03"
  }
};
