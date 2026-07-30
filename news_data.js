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
        "headline": "Most active S&P500 stocks in Thursday's session",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=173e3dc5b589ca0110bf70c0b6907ea807c25e1e81c2b86027f7e8d37c4b99ef",
        "datetime": 1785434701
      },
      {
        "headline": "Most active stocks in Thursday's session",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=75c81c32c9f203b97471741e711c89bdf1634eb8f1c95fa219067e86be6988f3",
        "datetime": 1785434400
      },
      {
        "headline": "Meet the Spectacular ETF With Big Positions in Stocks Like Palantir, Microsoft, and Salesforce. It Could be a Brilliant Buy as the AI Trade Unwinds.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=693ab1b4b71b7e35daa491c383399d06c6962adee4727e678fd783e565ad6d90",
        "datetime": 1785433380
      },
      {
        "headline": "Wall Street’s Highest Yielding ETFs Pay Over 50 Percent on Nvidia and Tesla. Here’s What They Don’t Tell You",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5c5505cb2a1284848724326e8054a0fd4ce0290bd7f8ac3d86728c9a79872843",
        "datetime": 1785432946
      },
      {
        "headline": "Prediction: Where Will Rambus End The Year?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=70b4ab2cc8ee1283359c0bd8ff55332780f945cad7357a21d3bcdc6cc9852e3d",
        "datetime": 1785432649
      }
    ],
    "_fetched_at": 1785438001.8344245,
    "_updated_label": "2026-07-31 04:01"
  },
  "AAPL": {
    "nextEarnings": {
      "date": "2026-10-28",
      "hour": "amc",
      "epsEstimate": 2.0468
    },
    "news": [
      {
        "headline": "Most active S&P500 stocks in Thursday's session",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=173e3dc5b589ca0110bf70c0b6907ea807c25e1e81c2b86027f7e8d37c4b99ef",
        "datetime": 1785434701
      },
      {
        "headline": "Gene Munster Highlights AAPL Has An iPhone Headwind And A Price Hike Tailwind — Here’s What He Said About Siri AI",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b50261a7017962650b1893690c6582c528f55da53f78f0964083204e3ee8eff8",
        "datetime": 1785433227
      },
      {
        "headline": "Why Apple's Earnings Need 'Zero Blemishes'",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3d54658174a52f68d974ce3ada143acaef8d52596f18cdfa35c40b2dfd130714",
        "datetime": 1785432228
      },
      {
        "headline": "Stock Market Today: Nasdaq Rebounds, Chips Jump; These Techs Face Key Resistance Level (Live Coverage)",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7c9ba77e586a3d0c69b4d92238e928b645acd5a8ba7a3229c082a850e2ada0f3",
        "datetime": 1785432172
      },
      {
        "headline": "Apple Faces a Closely Watched Earnings Test",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=49222ec58d5fb72c9b5d72a99fe6ed6a1f663823514b80116d194499970fd91d",
        "datetime": 1785430476
      }
    ],
    "_fetched_at": 1785438001.8344245,
    "_updated_label": "2026-07-31 04:00"
  },
  "GOOGL": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "amc",
      "epsEstimate": 3.0988
    },
    "news": [
      {
        "headline": "Tesla’s (TSLA) Margins Broke in a Way Deliveries Can’t Fix",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b0d2da49381b78c08248c6d04463c8ab925bee1e3de08595d91b545c9f6aa3af",
        "datetime": 1785432743
      },
      {
        "headline": "Adobe Stock Trades Below The Market On Earnings While Its Growth Engine Is Being Rebuilt",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9a2749ecb125dd33ee394bd0b9919f303660b486945ab262db97ba160f035c2b",
        "datetime": 1785432726
      },
      {
        "headline": "DoorDash Launches Drone Delivery Program as Nearly 70% of Americans Say They Are Worried About Drone Safety",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d94d6a92bdb7f040cd9ff7efebb2a90383ad6a4245a0558669190919eba5a405",
        "datetime": 1785432281
      },
      {
        "headline": "Meta's Big Bet On Consumer AI Stands Out. That Hasn't Been Good For The Stock.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1113501754b74ab1a79916ad6612545857e8df7f71e618357e17d16bb662d56f",
        "datetime": 1785432070
      },
      {
        "headline": "Margin & Leverage: Inside the Violent Reset of the AI Trade",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5c2651fbf4e847d9f9aa71aba8276248c301a2f9796a9713c2d8a1b9206d77b4",
        "datetime": 1785429900
      }
    ],
    "_fetched_at": 1785438001.8344245,
    "_updated_label": "2026-07-31 04:00"
  },
  "MSFT": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "",
      "epsEstimate": 4.7278
    },
    "news": [
      {
        "headline": "Most active S&P500 stocks in Thursday's session",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=173e3dc5b589ca0110bf70c0b6907ea807c25e1e81c2b86027f7e8d37c4b99ef",
        "datetime": 1785434701
      },
      {
        "headline": "Scale AI names Francis deSouza as new CEO",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0ac013d9b5989cd01f77ed533bce98bbc2aeadf48bb697288ace696cf72cee68",
        "datetime": 1785433746
      },
      {
        "headline": "Meet the Spectacular ETF With Big Positions in Stocks Like Palantir, Microsoft, and Salesforce. It Could be a Brilliant Buy as the AI Trade Unwinds.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=693ab1b4b71b7e35daa491c383399d06c6962adee4727e678fd783e565ad6d90",
        "datetime": 1785433380
      },
      {
        "headline": "Update: US Equity Indexes Surge as Rebound in Chipmakers Boosts Technology",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e110d0dea6c8a69343446a2f4b7136abbeee79aca3d9af682d9032f1625b6064",
        "datetime": 1785432915
      },
      {
        "headline": "Adobe Stock Trades Below The Market On Earnings While Its Growth Engine Is Being Rebuilt",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9a2749ecb125dd33ee394bd0b9919f303660b486945ab262db97ba160f035c2b",
        "datetime": 1785432726
      }
    ],
    "_fetched_at": 1785438001.8344245,
    "_updated_label": "2026-07-31 04:00"
  },
  "AMZN": {
    "nextEarnings": {
      "date": "2026-10-28",
      "hour": "amc",
      "epsEstimate": 1.9445
    },
    "news": [
      {
        "headline": "Most active S&P500 stocks in Thursday's session",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=173e3dc5b589ca0110bf70c0b6907ea807c25e1e81c2b86027f7e8d37c4b99ef",
        "datetime": 1785434701
      },
      {
        "headline": "Meet the Super Semiconductor Stock Crushing Nvidia With a 12-Month Return of 129%",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1ebb28ba820f4145cb0da2b02295053f03a3e5b01e8dba8e0ba16391d9f122f5",
        "datetime": 1785433800
      },
      {
        "headline": "DoorDash Launches Drone Delivery Program as Nearly 70% of Americans Say They Are Worried About Drone Safety",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d94d6a92bdb7f040cd9ff7efebb2a90383ad6a4245a0558669190919eba5a405",
        "datetime": 1785432281
      },
      {
        "headline": "Stock Market Today: Nasdaq Rebounds, Chips Jump; These Techs Face Key Resistance Level (Live Coverage)",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7c9ba77e586a3d0c69b4d92238e928b645acd5a8ba7a3229c082a850e2ada0f3",
        "datetime": 1785432172
      },
      {
        "headline": "InterDigital Q2 Earnings Call Highlights",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8331e9fb2dc8b572f0a37d660a69a8a7d0ce5015dc6d5fefd137fe611138aac1",
        "datetime": 1785431065
      }
    ],
    "_fetched_at": 1785438001.8344245,
    "_updated_label": "2026-07-31 04:00"
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
    "_fetched_at": 1785438001.8344245,
    "_updated_label": "2026-07-31 04:01"
  },
  "AVGO": {
    "nextEarnings": {
      "date": "2026-09-02",
      "hour": "amc",
      "epsEstimate": 3.3012
    },
    "news": [
      {
        "headline": "Is Micron Being Squeezed Out Now That SK Hynix and Samsung Have Partnered With Major Chip Companies?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c3d2edb73881a80fc36afb963b8f7ca58965708b24ae2945ee6cabb9305709a1",
        "datetime": 1785430980
      },
      {
        "headline": "Samsung’s $200 Billion Broadcom Deal Is a Bid to Break TSMC’s AI Foundry Lock",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8d754073134332494fc39015744f457d454139e8a5949cb1dd303d1ccfce8287",
        "datetime": 1785429963
      },
      {
        "headline": "The Ultimate Bull Run for AMD, Broadcom, and Arm May Be Closer Than You Think",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=35fd1391f8290986ad5ba340edc6e3ba858e667276ee2b99c5ba77b63d9d1475",
        "datetime": 1785429004
      },
      {
        "headline": "Nvidia is Tanking Below $190: One Wall Street Pro Sees 165% Gains From Here",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a33ce8e889b27ae6c28fb95aa132204b1b552420b75e684d6b169097cfb6b773",
        "datetime": 1785424161
      },
      {
        "headline": "Intel Stock's Biggest Risk Is A Foundry Bill Due Long Before The Customers",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fe7e8901cccdd5b1fe2fbd07a098008bb2fd26fb1868511bbcd0321a8cbff971",
        "datetime": 1785423586
      }
    ],
    "_fetched_at": 1785438001.8344245,
    "_updated_label": "2026-07-31 04:01"
  },
  "META": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "amc",
      "epsEstimate": 7.1724
    },
    "news": [
      {
        "headline": "Most active S&P500 stocks in Thursday's session",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=173e3dc5b589ca0110bf70c0b6907ea807c25e1e81c2b86027f7e8d37c4b99ef",
        "datetime": 1785434701
      },
      {
        "headline": "Meet the Super Semiconductor Stock Crushing Nvidia With a 12-Month Return of 129%",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1ebb28ba820f4145cb0da2b02295053f03a3e5b01e8dba8e0ba16391d9f122f5",
        "datetime": 1785433800
      },
      {
        "headline": "Update: US Equity Indexes Surge as Rebound in Chipmakers Boosts Technology",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e110d0dea6c8a69343446a2f4b7136abbeee79aca3d9af682d9032f1625b6064",
        "datetime": 1785432915
      },
      {
        "headline": "Meta's & Microsoft's massive AI spending: Why only one is getting rewarded",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9a37287a4748e2b185dbffb2fec2982d9be705dfc63d985338aae1fe4ff65004",
        "datetime": 1785432600
      },
      {
        "headline": "CoreWeave Q2 Revenue Expected at 'High End' of Guidance, Oppenheimer Says",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=52ddcae652fe2637cbcc6c3e9f799e72e7b222a7bdfbf63dd0542911edca2865",
        "datetime": 1785432223
      }
    ],
    "_fetched_at": 1785438001.8344245,
    "_updated_label": "2026-07-31 04:00"
  },
  "TSLA": {
    "nextEarnings": {
      "date": "2026-10-20",
      "hour": "amc",
      "epsEstimate": 0.4684
    },
    "news": [
      {
        "headline": "Wall Street’s Highest Yielding ETFs Pay Over 50 Percent on Nvidia and Tesla. Here’s What They Don’t Tell You",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5c5505cb2a1284848724326e8054a0fd4ce0290bd7f8ac3d86728c9a79872843",
        "datetime": 1785432946
      },
      {
        "headline": "Tesla’s (TSLA) Margins Broke in a Way Deliveries Can’t Fix",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b0d2da49381b78c08248c6d04463c8ab925bee1e3de08595d91b545c9f6aa3af",
        "datetime": 1785432743
      },
      {
        "headline": "SpaceX Stock Is Tumbling. Baron and ARK Are Feeling the Pain.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7d1447ec3de0becb9ab324ed6a80e5fce7d37493361b63d4cf64e06d32108dac",
        "datetime": 1785430860
      },
      {
        "headline": "Tesla Looks To Snap Losing Streak As It Hits 10 Million EV Milestone",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=86bcac12de706dd05b4e7a6e208592960ce542c3ca9d30127388ea26221ba337",
        "datetime": 1785427810
      },
      {
        "headline": "$19.6 Billion: The Microsoft Earnings Number That Matters Most",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2f5c737d40b405713e18ae982f79805cff1809aec393f7644b359b7b729f3e33",
        "datetime": 1785427242
      }
    ],
    "_fetched_at": 1785438001.8344245,
    "_updated_label": "2026-07-31 04:00"
  },
  "MU": {
    "nextEarnings": {
      "date": "2026-09-21",
      "hour": "amc",
      "epsEstimate": 32.2476
    },
    "news": [
      {
        "headline": "Most active S&P500 stocks in Thursday's session",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=173e3dc5b589ca0110bf70c0b6907ea807c25e1e81c2b86027f7e8d37c4b99ef",
        "datetime": 1785434701
      },
      {
        "headline": "Is Micron Being Squeezed Out Now That SK Hynix and Samsung Have Partnered With Major Chip Companies?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c3d2edb73881a80fc36afb963b8f7ca58965708b24ae2945ee6cabb9305709a1",
        "datetime": 1785430980
      },
      {
        "headline": "Stock Market Midday, July 30: Microsoft Soars 15%, Boosting Tech Stocks",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a340c5dac958de2218c741cc3263f093f8e0b98be9ab5485d60a20dcb19027c8",
        "datetime": 1785430344
      },
      {
        "headline": "Which S&P500 stocks are moving on Thursday?",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=729e775062bf3b1467bc096218a45323e67422a2e5bbe063e3261c63c2ceaebb",
        "datetime": 1785429301
      },
      {
        "headline": "Sandisk Stock Is Having Its Best Day Since January. It Has Had a Tough Month.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c14a1a45c9bb750752284da56d4b315452b8050eaddac2959ebbe2955af0a500",
        "datetime": 1785429180
      }
    ],
    "_fetched_at": 1785438001.8344245,
    "_updated_label": "2026-07-31 04:02"
  },
  "AMD": {
    "nextEarnings": {
      "date": "2026-08-04",
      "hour": "amc",
      "epsEstimate": 1.6291
    },
    "news": [
      {
        "headline": "The Nvidia Vs. AMD Narrative Evolved Again: How to Understand it Today",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2636e625ce993ef397c7a7d9bd40dd412bb3595dbe4f184da490b3cc09a699be",
        "datetime": 1785432014
      },
      {
        "headline": "AMD Fell 8% as China Unveils New Technology — the Real Risk Is the Multiple, Not the Lithography",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=284287af465764241d48543b4e3e2d43c0e81fec344682f04d20f313ab9bf430",
        "datetime": 1785429197
      },
      {
        "headline": "The Ultimate Bull Run for AMD, Broadcom, and Arm May Be Closer Than You Think",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=35fd1391f8290986ad5ba340edc6e3ba858e667276ee2b99c5ba77b63d9d1475",
        "datetime": 1785429004
      },
      {
        "headline": "AMD Stock Soars as Susquehanna Lifts Price Target Ahead of Earnings",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=881b9793c8f3342ea9957c44c59787fe33b0ba96972ff9698958fad5a933f497",
        "datetime": 1785428515
      },
      {
        "headline": "Intel and AMD Soar 13%, Taiwan Semiconductor Rallies 7% as AI-Chip Stocks Bounce Hard",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=213f22772d7ba8045dd10fec469e37324c364c1b3a02f39188e9b6be9daa9613",
        "datetime": 1785426669
      }
    ],
    "_fetched_at": 1785438001.8344245,
    "_updated_label": "2026-07-31 04:01"
  },
  "INTC": {
    "nextEarnings": {
      "date": "2026-10-21",
      "hour": "amc",
      "epsEstimate": 0.3736
    },
    "news": [
      {
        "headline": "Most active S&P500 stocks in Thursday's session",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=173e3dc5b589ca0110bf70c0b6907ea807c25e1e81c2b86027f7e8d37c4b99ef",
        "datetime": 1785434701
      },
      {
        "headline": "Brookfield Infrastructure Partners L.P. Q2 2026 Earnings Call Summary",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=89b1331264b58d272ddfc389e0e590f1ad8d7cb9b923c07d5ba40bcb5f8a6b26",
        "datetime": 1785429976
      },
      {
        "headline": "Which S&P500 stocks are moving on Thursday?",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=729e775062bf3b1467bc096218a45323e67422a2e5bbe063e3261c63c2ceaebb",
        "datetime": 1785429301
      },
      {
        "headline": "Intel Is Opening a Door It Usually Keeps Closed",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=00105214ed756cb17544c48aa035b4bd1246c76710194b92917a03d3740a9748",
        "datetime": 1785429084
      },
      {
        "headline": "Intel and AMD Soar 13%, Taiwan Semiconductor Rallies 7% as AI-Chip Stocks Bounce Hard",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=213f22772d7ba8045dd10fec469e37324c364c1b3a02f39188e9b6be9daa9613",
        "datetime": 1785426669
      }
    ],
    "_fetched_at": 1785438001.8344245,
    "_updated_label": "2026-07-31 04:01"
  },
  "AMAT": {
    "nextEarnings": {
      "date": "2026-08-13",
      "hour": "amc",
      "epsEstimate": 3.462
    },
    "news": [
      {
        "headline": "Applied Materials (AMAT) Stock May Not Be A Bargain Despite AI Materials Foundry News",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=97ad921fe0622825532b65048bc749d5f0d5e6c3c80f80e48eb9c689533f7e06",
        "datetime": 1785431350
      },
      {
        "headline": "Which S&P500 stocks are moving on Thursday?",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=729e775062bf3b1467bc096218a45323e67422a2e5bbe063e3261c63c2ceaebb",
        "datetime": 1785429301
      },
      {
        "headline": "Microsoft Q4 Earnings Beat Estimates as Cloud and AI Drive Results",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d2394d449f9308b0bc14b3e20011f2ae9040984a0a461290264cc2856be005d7",
        "datetime": 1785427260
      },
      {
        "headline": "Why Lam Research Stock Is Having Its Best Day Since 1999",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ddbc691fb49cb15f540cefc9dd949237f3c8306e948ebb4a763c407dac8d86d9",
        "datetime": 1785427020
      },
      {
        "headline": "LRCX Q4 Earnings Beat on NAND and Customer Support Strength",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=64c5037c71a52f4579986ed86c5c4f83cd639fcf93218540cdd1cbc4b9313fc9",
        "datetime": 1785426840
      }
    ],
    "_fetched_at": 1785438001.8344245,
    "_updated_label": "2026-07-31 04:01"
  },
  "QQQ": {
    "nextEarnings": null,
    "news": [
      {
        "headline": "Q2 GDP And June PCE: Growth Remains Resilient Beneath A Weak Headline Print",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=38129c71bca26e5415dc41b39e062259cf0a03c2c22e6dcb2a7732f679e9fd8f",
        "datetime": 1785420441
      },
      {
        "headline": "Stock Market Today: Microsoft Ignites Chip Rebound as SanDisk Jumps 24%",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=8be639133bfa4b40177dd538e58e12d5d0b9ac1be9d1de42049ff9089bf2b839",
        "datetime": 1785418165
      },
      {
        "headline": "SPYG Vs. QQQ: It's Not The Tech Exposure, It's What's Inside It",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=aa05c88d2de998f62692f74f14092124f1b12bf368fe57ad43d408d9127ee7a9",
        "datetime": 1785417654
      },
      {
        "headline": "Breadth Turns Negative as Selling Spreads Across the Market",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=e3cb45d567de957d96e8dbf0120d1282fd7a2141c2d1fbba8cd3fee4d7749e22",
        "datetime": 1785416791
      },
      {
        "headline": "Whale's Insight: Bitcoin Up 9% In July - Is Crypto The First To Recover From The AI Unwind?",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=f88f7436709084c8e3bf135fd679b1acdc165a49bbfe8a20eaaeffb7738d3da1",
        "datetime": 1785411900
      }
    ],
    "_fetched_at": 1785438001.8344245,
    "_updated_label": "2026-07-31 04:00"
  },
  "SPY": {
    "nextEarnings": null,
    "news": [
      {
        "headline": "Forget MDY. State Street Sells the Same S&P Mid-Caps for 87% Less",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=94a7b7ddbaa42d358a6dc630bc11c17bca7276aa3104faadfd418f69b3c3fcd8",
        "datetime": 1785431055
      },
      {
        "headline": "Nvidia is Tanking Below $190: One Wall Street Pro Sees 165% Gains From Here",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a33ce8e889b27ae6c28fb95aa132204b1b552420b75e684d6b169097cfb6b773",
        "datetime": 1785424161
      },
      {
        "headline": "PCE Data for June: +3.3% on Core, Consumption & Pricing Higher",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=afb66f63710f5789a16c100f817af15bb8fecad80e83016c8a77bd0def88e9e3",
        "datetime": 1785422340
      },
      {
        "headline": "Q2 GDP And June PCE: Growth Remains Resilient Beneath A Weak Headline Print",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=38129c71bca26e5415dc41b39e062259cf0a03c2c22e6dcb2a7732f679e9fd8f",
        "datetime": 1785420441
      },
      {
        "headline": "AMD is Down 18% Over a Month: One Analyst Targets $1,250, Meaning 190% Returns From Here",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=28f53efa66e3fa1216940a00900f2061fe76066060aa47e29044a40ee42d6227",
        "datetime": 1785420229
      }
    ],
    "_fetched_at": 1785438001.8344245,
    "_updated_label": "2026-07-31 04:00"
  },
  "ORCL": {
    "nextEarnings": {
      "date": "2026-09-07",
      "hour": "",
      "epsEstimate": 1.7745
    },
    "news": [
      {
        "headline": "Adobe Stock Trades Below The Market On Earnings While Its Growth Engine Is Being Rebuilt",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9a2749ecb125dd33ee394bd0b9919f303660b486945ab262db97ba160f035c2b",
        "datetime": 1785432726
      },
      {
        "headline": "Nebius Soars 27%, CoreWeave Jumps 24%, Oracle Climbs 7% as AI Cloud Names Snap Back",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c731259afb8e9d3a34e192cb003ee6bac85241b199051fbc4498c5e78af95744",
        "datetime": 1785429865
      },
      {
        "headline": "Snowflake Stock Nearly Doubled On A Product Its Own Forecast Could Not See",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4536075f871a9cbefcd7e88300c72ab931a8852a1a0d6e2e3294c0b4b08772f8",
        "datetime": 1785427511
      },
      {
        "headline": "Oracle Shares Climb as Expanded Google Cloud Alliance Brings Gemini AI to Enterprise Software",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a6946dc0174e75d8f542c64b4d38064910dac83f6277ab2695be8b152a6bd1e9",
        "datetime": 1785421113
      },
      {
        "headline": "ORCL Stock Gains After Google’s Gemini Joins Meta, OpenAI, xAI In Oracle’s AI Model Lineup",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=71eeaa57450872fa537d105a9b90d246ba8ed1c6720fcc62918bcae0a74399f8",
        "datetime": 1785420157
      }
    ],
    "_fetched_at": 1785438001.8344245,
    "_updated_label": "2026-07-31 04:01"
  },
  "CRM": {
    "nextEarnings": {
      "date": "2026-08-26",
      "hour": "amc",
      "epsEstimate": 3.3057
    },
    "news": [
      {
        "headline": "Meet the Spectacular ETF With Big Positions in Stocks Like Palantir, Microsoft, and Salesforce. It Could be a Brilliant Buy as the AI Trade Unwinds.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=693ab1b4b71b7e35daa491c383399d06c6962adee4727e678fd783e565ad6d90",
        "datetime": 1785433380
      },
      {
        "headline": "Adobe Stock Trades Below The Market On Earnings While Its Growth Engine Is Being Rebuilt",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9a2749ecb125dd33ee394bd0b9919f303660b486945ab262db97ba160f035c2b",
        "datetime": 1785432726
      },
      {
        "headline": "Cloud for Good Announces Acquisition of StackNexus to Expand State & Local Government Capabilities",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=822974a6c9519a5fa9c5918491468d361c45477f65681b443f132265e476da57",
        "datetime": 1785430980
      },
      {
        "headline": "Which dow jones stocks are moving on Thursday?",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=54c083ca8833104ec3bd833402396dbd380a762e69f889840dbfe2c804963dc9",
        "datetime": 1785429605
      },
      {
        "headline": "ServiceNow Showing Signs of Life But Still Down 25% YTD: 115% Returns Coming If This Analyst is Correct",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7418abdeadd22846f1d00d941c064f3571ea4791e63857b8d24be5bc8fa319bf",
        "datetime": 1785419606
      }
    ],
    "_fetched_at": 1785438001.8344245,
    "_updated_label": "2026-07-31 04:01"
  },
  "PLTR": {
    "nextEarnings": {
      "date": "2026-08-03",
      "hour": "amc",
      "epsEstimate": 0.3544
    },
    "news": [
      {
        "headline": "Meet the Spectacular ETF With Big Positions in Stocks Like Palantir, Microsoft, and Salesforce. It Could be a Brilliant Buy as the AI Trade Unwinds.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=693ab1b4b71b7e35daa491c383399d06c6962adee4727e678fd783e565ad6d90",
        "datetime": 1785433380
      },
      {
        "headline": "Snowflake Stock Nearly Doubled On A Product Its Own Forecast Could Not See",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4536075f871a9cbefcd7e88300c72ab931a8852a1a0d6e2e3294c0b4b08772f8",
        "datetime": 1785427511
      },
      {
        "headline": "Palantir's Profit Nearly Quadrupled Over the Past Year. Its Stock Fell 40% From Its High. Both Numbers Get Tested on Aug. 3.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=96b0dd14e8946ec816b741ffe05fc28e9a10385fb2b307ae8f82a7d8aa65e0da",
        "datetime": 1785418440
      },
      {
        "headline": "Palantir Failed To Outgrow Its Valuation Before The AI Window Closed",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=65d3edb31dc097aa87fd8fde246f3ce70a7d210b3166aace7edb1d624131740b",
        "datetime": 1785417256
      },
      {
        "headline": "AI Revenue Just Hit $100 Billion From Zero Two Years Ago. Now Wall Street’s Warning of a Massive SaaS Trap",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0fe85eb6902da5df8c94b99a1e93ac5816700c34506af0c1de210373c740c090",
        "datetime": 1785416403
      }
    ],
    "_fetched_at": 1785438001.8344245,
    "_updated_label": "2026-07-31 04:01"
  },
  "QCOM": {
    "nextEarnings": {
      "date": "2026-11-03",
      "hour": "amc",
      "epsEstimate": 2.38
    },
    "news": [
      {
        "headline": "BMW names Qualcomm lead chip supplier for next-gen platforms",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c3196995f939a18d78a3e2b5eadfc3c63ee36e7ab70960912c99441e882fedb3",
        "datetime": 1785433332
      },
      {
        "headline": "Qualcomm Facing Margin Pressures, Custom Silicon Risks, RBC Capital Markets Says",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=618d44ed207c1ea3634202975ecf38f904c754d40376319683fe66758251cf34",
        "datetime": 1785427317
      },
      {
        "headline": "This AI Company Could Be the Biggest Winner You Aren’t Watching",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d7a31cfc9c21d5bf085ab7a5c2fdad982b1b5b1d6849d09f2bcaec860d101aad",
        "datetime": 1785425443
      },
      {
        "headline": "Qualcomm shares slip as profit outlook falls short of expectations",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d319f2462e75991c4f4bbb72eb9af49d5b54b2cde33b741513174941de5b39e0",
        "datetime": 1785423600
      },
      {
        "headline": "Intel Stock's Biggest Risk Is A Foundry Bill Due Long Before The Customers",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fe7e8901cccdd5b1fe2fbd07a098008bb2fd26fb1868511bbcd0321a8cbff971",
        "datetime": 1785423586
      }
    ],
    "_fetched_at": 1785438001.8344245,
    "_updated_label": "2026-07-31 04:01"
  },
  "ARM": {
    "nextEarnings": {
      "date": "2026-11-04",
      "hour": "",
      "epsEstimate": 0.4502
    },
    "news": [
      {
        "headline": "Update: US Equity Indexes Surge as Rebound in Chipmakers Boosts Technology",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e110d0dea6c8a69343446a2f4b7136abbeee79aca3d9af682d9032f1625b6064",
        "datetime": 1785432915
      },
      {
        "headline": "The Ultimate Bull Run for AMD, Broadcom, and Arm May Be Closer Than You Think",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=35fd1391f8290986ad5ba340edc6e3ba858e667276ee2b99c5ba77b63d9d1475",
        "datetime": 1785429004
      },
      {
        "headline": "Rene Haas Says NVDA GPUs, GOOGL TPUs Validate ARM's AI Bet — 'Every AI Workload Is Going to Run Through Arm'",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6c86a2f4b2a43855760953ecd0dc9320c4f15752553f58c760f80b1ec516f3fb",
        "datetime": 1785425784
      },
      {
        "headline": "Why Arm Stock Is Surging Today",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ed2a1b5424ffded18e523673639b658a63f8d406ba73487933c3f1e24a46691e",
        "datetime": 1785425765
      },
      {
        "headline": "This AI Company Could Be the Biggest Winner You Aren’t Watching",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d7a31cfc9c21d5bf085ab7a5c2fdad982b1b5b1d6849d09f2bcaec860d101aad",
        "datetime": 1785425443
      }
    ],
    "_fetched_at": 1785438001.8344245,
    "_updated_label": "2026-07-31 04:01"
  },
  "MRVL": {
    "nextEarnings": {
      "date": "2026-08-20",
      "hour": "",
      "epsEstimate": 0.939
    },
    "news": [
      {
        "headline": "Prediction: Where Will Rambus End The Year?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=70b4ab2cc8ee1283359c0bd8ff55332780f945cad7357a21d3bcdc6cc9852e3d",
        "datetime": 1785432649
      },
      {
        "headline": "Nvidia is Tanking Below $190: One Wall Street Pro Sees 165% Gains From Here",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a33ce8e889b27ae6c28fb95aa132204b1b552420b75e684d6b169097cfb6b773",
        "datetime": 1785424161
      },
      {
        "headline": "Why Investors Are Getting More Bullish on Marvell Technology (MRVL)",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=76d0e566fd21438dc0e8e78c3105a3a0d58da939e923b7b411b6c4db68f4f7f0",
        "datetime": 1785422285
      },
      {
        "headline": "Semiconductor ETF SOXX Eyes Worst Month Since 2001: 5 Shocking Charts To Watch",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=933b0c58824f47d1fe08771ecdb60e658c877cb3d3f03fa0f1e5a7b29c6e0908",
        "datetime": 1785403444
      },
      {
        "headline": "Marvell Is Making a Bigger Bet on India",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=77361da2bd6dc4ecde07212a0dc5ff5db671858cb5ffadf75fd93023cda5b676",
        "datetime": 1785333700
      }
    ],
    "_fetched_at": 1785438001.8344245,
    "_updated_label": "2026-07-31 04:01"
  },
  "ASML": {
    "nextEarnings": {
      "date": "2026-10-14",
      "hour": "bmo",
      "epsEstimate": 10.1558
    },
    "news": [
      {
        "headline": "AMD Fell 8% as China Unveils New Technology — the Real Risk Is the Multiple, Not the Lithography",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=284287af465764241d48543b4e3e2d43c0e81fec344682f04d20f313ab9bf430",
        "datetime": 1785429197
      },
      {
        "headline": "ASML vs. TSM: Which AI Chip Stock Is the Better Buy Now?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=23f777cdc405cb3930d85861f0febb3d30d4399f12a8c573e7fd71a2edbb4113",
        "datetime": 1785428760
      },
      {
        "headline": "ASML's EUV Machines Are Becoming More Valuable Than Ever. Here's Why.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1f2f17e1626f99f3ccae2aa1245467ef5a3a2cf9e39c17e2efcfd7d618d35f3b",
        "datetime": 1785416754
      },
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
      }
    ],
    "_fetched_at": 1785438001.8344245,
    "_updated_label": "2026-07-31 04:01"
  },
  "LRCX": {
    "nextEarnings": {
      "date": "2026-10-20",
      "hour": "",
      "epsEstimate": 1.8266
    },
    "news": [
      {
        "headline": "Stock Market Today: Nasdaq Rebounds, Chips Jump; These Techs Face Key Resistance Level (Live Coverage)",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7c9ba77e586a3d0c69b4d92238e928b645acd5a8ba7a3229c082a850e2ada0f3",
        "datetime": 1785432172
      },
      {
        "headline": "Which S&P500 stocks are moving on Thursday?",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=729e775062bf3b1467bc096218a45323e67422a2e5bbe063e3261c63c2ceaebb",
        "datetime": 1785429301
      },
      {
        "headline": "Why Lam Research Stock Is Having Its Best Day Since 1999",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ddbc691fb49cb15f540cefc9dd949237f3c8306e948ebb4a763c407dac8d86d9",
        "datetime": 1785427020
      },
      {
        "headline": "LRCX Q4 Earnings Beat on NAND and Customer Support Strength",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=64c5037c71a52f4579986ed86c5c4f83cd639fcf93218540cdd1cbc4b9313fc9",
        "datetime": 1785426840
      },
      {
        "headline": "These S&P500 stocks are gapping in today's session",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=f586ad3b990c9f5f2c671e6846b5cfd9d5fe179c59e7fb7e3a2281c44e76ffc5",
        "datetime": 1785422101
      }
    ],
    "_fetched_at": 1785438001.8344245,
    "_updated_label": "2026-07-31 04:02"
  },
  "KLAC": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "",
      "epsEstimate": 1.1541
    },
    "news": [
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
      },
      {
        "headline": "Semiconductor ETF SOXX Eyes Worst Month Since 2001: 5 Shocking Charts To Watch",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=933b0c58824f47d1fe08771ecdb60e658c877cb3d3f03fa0f1e5a7b29c6e0908",
        "datetime": 1785403444
      },
      {
        "headline": "Dow Records Worst Session Since April 2025; Investor Sentiment Weakens, Greed Index Remains In ‘Fear’ Zone",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=f68ed2fc23f8f6addac05f486276e6aa5715bb751ead1cdbe3e72b6e952e88a7",
        "datetime": 1785378005
      }
    ],
    "_fetched_at": 1785438001.8344245,
    "_updated_label": "2026-07-31 04:02"
  },
  "SNDK": {
    "nextEarnings": {
      "date": "2026-08-05",
      "hour": "amc",
      "epsEstimate": 35.1395
    },
    "news": [
      {
        "headline": "Sandisk (SNDK) Stock Slides As Chinese Memory Competition Rattles NAND Outlook",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c747fbd21855f6f07856244f38fa917e740dacd14d2187dcf89489fcbf6ad61f",
        "datetime": 1785431298
      },
      {
        "headline": "In today's session, there are S&P500 stocks with remarkable trading volume.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=3c7658d74fb5791e167902d4595eaf473b33967617b977ceda3f488ef18cd3ab",
        "datetime": 1785431100
      },
      {
        "headline": "Margin & Leverage: Inside the Violent Reset of the AI Trade",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5c2651fbf4e847d9f9aa71aba8276248c301a2f9796a9713c2d8a1b9206d77b4",
        "datetime": 1785429900
      },
      {
        "headline": "Which S&P500 stocks are moving on Thursday?",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=729e775062bf3b1467bc096218a45323e67422a2e5bbe063e3261c63c2ceaebb",
        "datetime": 1785429301
      },
      {
        "headline": "Sandisk Stock Is Having Its Best Day Since January. It Has Had a Tough Month.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c14a1a45c9bb750752284da56d4b315452b8050eaddac2959ebbe2955af0a500",
        "datetime": 1785429180
      }
    ],
    "_fetched_at": 1785438001.8344245,
    "_updated_label": "2026-07-31 04:02"
  },
  "WDC": {
    "nextEarnings": {
      "date": "2026-08-05",
      "hour": "amc",
      "epsEstimate": 3.3281
    },
    "news": [
      {
        "headline": "Which S&P500 stocks are moving on Thursday?",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=729e775062bf3b1467bc096218a45323e67422a2e5bbe063e3261c63c2ceaebb",
        "datetime": 1785429301
      },
      {
        "headline": "Memory Stocks Surge. Sandisk Tops S&P 500 Gainers.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6c6f5e94c206c599ca081dc99d082635c17691d5d37214090ed1d4e6ea33fcf3",
        "datetime": 1785428956
      },
      {
        "headline": "Memory Stocks Blast Off: Micron, SK Hynix, SanDisk, Western Digital, and Seagate All Rally Double-Digits",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=50508ab289f642600879fd58f6d18e73ccc00e2ed742d652b2f282756375faa4",
        "datetime": 1785422676
      },
      {
        "headline": "These S&P500 stocks are gapping in today's session",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=f586ad3b990c9f5f2c671e6846b5cfd9d5fe179c59e7fb7e3a2281c44e76ffc5",
        "datetime": 1785422101
      },
      {
        "headline": "One AI Stock Everyone Wishes They Bought Earlier",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c557de59b0a28d85c287744aa49878a04c487f23c974363f2fdf0b1997ae24b0",
        "datetime": 1785421817
      }
    ],
    "_fetched_at": 1785438001.8344245,
    "_updated_label": "2026-07-31 04:02"
  }
};
