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
        "headline": "Curious about the most active S&P500 stocks in today's session?",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=37870f8def4c147fe9117a6d7906f67f4b2141ea1f0506a5e29a7bcd6fa3663f",
        "datetime": 1785953102
      },
      {
        "headline": "Discover the most active stocks in Wednesday's session.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=54a15b0b7e8e410c17dd38284f5a02ac6d3bc09c6eb31d85c1ce2a7174b8f53f",
        "datetime": 1785952800
      },
      {
        "headline": "Wall Street Isn't Worried About SpaceX Price Declines",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1625a6853d032cb8951b4fdab67de5fca475d43099fb377d770f91efada020f0",
        "datetime": 1785952262
      },
      {
        "headline": "Micron's Supply Crunch Is Turning Into a Pricing Story",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=719e3da3ef894d9628297db40d35de2a0734d702969cf04671c4fcb117c0b619",
        "datetime": 1785951906
      },
      {
        "headline": "Why TransMedics Stock Is Sinking Today",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f9bde127f9ccf50582c0f60e1ec980ba1e21db544285bb6012f717c420e4faf1",
        "datetime": 1785951428
      }
    ],
    "_fetched_at": 1785956402.2646303,
    "_updated_label": "2026-08-06 04:00"
  },
  "AAPL": {
    "nextEarnings": {
      "date": "2026-10-28",
      "hour": "amc",
      "epsEstimate": 2.0468
    },
    "news": [
      {
        "headline": "Curious about the most active S&P500 stocks in today's session?",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=37870f8def4c147fe9117a6d7906f67f4b2141ea1f0506a5e29a7bcd6fa3663f",
        "datetime": 1785953102
      },
      {
        "headline": "Uncover the latest developments among dow jones stocks in today's session.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=c3f017020e693632ac5d4d9c9d82b142c56fb9d2d174d424bd80f10b75f07988",
        "datetime": 1785948004
      },
      {
        "headline": "4 Things All Dividend Investors Need to Know About Building Passive Income Right Now",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5325ae51bd3081143a45529cd8fa36f01e0c4be360ee2987b38fdf2fcf1962d3",
        "datetime": 1785946800
      },
      {
        "headline": "Amazon says it will share $600 million in Trump tariff refunds with some of its customers — will you get a payout?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=111d9c21678e693a6237e266130e9a4f738fb59a6d75e1eb17b06302584bf8fe",
        "datetime": 1785946500
      },
      {
        "headline": "SpaceX’s $1T Goal and 3 More Shockers From Musk on the Earnings Call",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=43c2d2496907d9f9220d463581212c594ec3abb15c3603d1942b77688dfa2901",
        "datetime": 1785943680
      }
    ],
    "_fetched_at": 1785956402.2646303,
    "_updated_label": "2026-08-06 04:00"
  },
  "GOOGL": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "amc",
      "epsEstimate": 3.1009
    },
    "news": [
      {
        "headline": "Curious about the most active S&P500 stocks in today's session?",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=37870f8def4c147fe9117a6d7906f67f4b2141ea1f0506a5e29a7bcd6fa3663f",
        "datetime": 1785953102
      },
      {
        "headline": "Google Stock Falls 5% as 4 AI Leaders Quit, Including the Most-Cited Researchers",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fc7b1058b817913d8af341dc4622e2e9a85dc5dff3539f750465a7c1a29996d0",
        "datetime": 1785952369
      },
      {
        "headline": "Big Tech's blowout profits hide an uncomfortable truth",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=44c4ea7ae62f11329f035809cba6bdcdd7c206ba6b4ad49c0b58889c44984fe5",
        "datetime": 1785952020
      },
      {
        "headline": "DeepMind's Hassabis Steps Down, Adding To Worries Over Google's AI Push",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f5415c160f50deea1f762ffb479380177f44b9af1335c0f22f32dd2974d3e15d",
        "datetime": 1785951847
      },
      {
        "headline": "Alphabet, Microsoft, Amazon, and Oracle Just Gained $1.9 Trillion in 3 Days. Here's Why Microsoft's Run Isn't Over.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b09889748753a97add143df5acfc29ccde7846cd8d96ba08d36cb4827cdddd4c",
        "datetime": 1785951600
      }
    ],
    "_fetched_at": 1785956402.2646303,
    "_updated_label": "2026-08-06 04:00"
  },
  "MSFT": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "",
      "epsEstimate": 4.7263
    },
    "news": [
      {
        "headline": "Big Tech's blowout profits hide an uncomfortable truth",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=44c4ea7ae62f11329f035809cba6bdcdd7c206ba6b4ad49c0b58889c44984fe5",
        "datetime": 1785952020
      },
      {
        "headline": "Alphabet, Microsoft, Amazon, and Oracle Just Gained $1.9 Trillion in 3 Days. Here's Why Microsoft's Run Isn't Over.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b09889748753a97add143df5acfc29ccde7846cd8d96ba08d36cb4827cdddd4c",
        "datetime": 1785951600
      },
      {
        "headline": "Beyond Capex: Big Tech Quietly Locks In $2.7 Trillion in Long-Term Commitments",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=18e0ad7d6f841bffdad7efd2946282f8b5a757a86d30a42f7d131b550513d880",
        "datetime": 1785951060
      },
      {
        "headline": "Never Mind AI Spending, This Number Is Boosting Microsoft, Google, and Amazon Stocks",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=49ca1812a1d6328e43f39fa8f2b559236cc19e6f11d9ca8ee08100e2feea4339",
        "datetime": 1785950820
      },
      {
        "headline": "Dan Ives Says Software Stocks Just Saw Their Most Disconnected Sell-Off Since the Late 1990s. Here's Why He's Still Bullish.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=81b4e8ae1920c29ba5a1be2495bd3f17f260bb8f23cf3e06bc91690534c33e7d",
        "datetime": 1785948600
      }
    ],
    "_fetched_at": 1785956402.2646303,
    "_updated_label": "2026-08-06 04:00"
  },
  "AMZN": {
    "nextEarnings": {
      "date": "2026-10-28",
      "hour": "amc",
      "epsEstimate": 1.9445
    },
    "news": [
      {
        "headline": "Curious about the most active S&P500 stocks in today's session?",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=37870f8def4c147fe9117a6d7906f67f4b2141ea1f0506a5e29a7bcd6fa3663f",
        "datetime": 1785953102
      },
      {
        "headline": "Big Tech's blowout profits hide an uncomfortable truth",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=44c4ea7ae62f11329f035809cba6bdcdd7c206ba6b4ad49c0b58889c44984fe5",
        "datetime": 1785952020
      },
      {
        "headline": "Alphabet, Microsoft, Amazon, and Oracle Just Gained $1.9 Trillion in 3 Days. Here's Why Microsoft's Run Isn't Over.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b09889748753a97add143df5acfc29ccde7846cd8d96ba08d36cb4827cdddd4c",
        "datetime": 1785951600
      },
      {
        "headline": "Beyond Capex: Big Tech Quietly Locks In $2.7 Trillion in Long-Term Commitments",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=18e0ad7d6f841bffdad7efd2946282f8b5a757a86d30a42f7d131b550513d880",
        "datetime": 1785951060
      },
      {
        "headline": "Uber’s Ride-Sharing Business Is Booming. Why the Stock Market Couldn’t Care Less.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3023e9445bfd733e506041de8b2a1e92479d863f16905aa848eb392aa60826fb",
        "datetime": 1785950940
      }
    ],
    "_fetched_at": 1785956402.2646303,
    "_updated_label": "2026-08-06 04:00"
  },
  "TSM": {
    "nextEarnings": {
      "date": "2026-10-14",
      "hour": "amc",
      "epsEstimate": 28.8828
    },
    "news": [
      {
        "headline": "10 Information Technology Stocks With Whale Alerts In Today’s Session",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=8d5187674a093923a700cb053cf24ddecaa79a4a30a0891ad53fcf56dcb513f9",
        "datetime": 1785936914
      },
      {
        "headline": "What Is Going on with Taiwan Semiconductor Stock on Wednesday?",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=78fb68bfebd19b0558f1e77a2cb316d2cc16004a70849d24565ed136235091be",
        "datetime": 1785932338
      },
      {
        "headline": "Brown Advisory Flexible Equity Strategy Q2 2026 Portfolio Activity",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=73b55282df1e30c21b0484c36bafd51d47b492ab49aa8791eecf2504d2e86788",
        "datetime": 1785932040
      },
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
      }
    ],
    "_fetched_at": 1785956402.2646303,
    "_updated_label": "2026-08-06 04:01"
  },
  "AVGO": {
    "nextEarnings": {
      "date": "2026-09-02",
      "hour": "amc",
      "epsEstimate": 3.3012
    },
    "news": [
      {
        "headline": "Should Investors Buy QRVO or Wait for More Visibility?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=819f56f9e3c11429d445f3908e2f12713902b243e15937b675b0490550a9f3e9",
        "datetime": 1785948420
      },
      {
        "headline": "Marvell Stock Amplifies The Market You Already Own",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ca75658089b5d2e0660cf9056b0fdbb903ba36ffb8e07b9c285fa426786bc086",
        "datetime": 1785946434
      },
      {
        "headline": "NVIDIA to Power SpaceX AI Infrastructure: Will This Fuel NVDA's Growth?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c774fce5f30840fce5f11773980279d0dccf5d407f61b72310ab0dd2eb9b500f",
        "datetime": 1785945780
      },
      {
        "headline": "Can MRVL's Communications Recovery Drive Broad-Based Growth?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0abc8eac0d0dff8aac9b106766bc90e52a1b1ec38598c284b2257d8fe9414806",
        "datetime": 1785945120
      },
      {
        "headline": "Prediction: A $5,000 Investment in Broadcom Could Be Worth This Much by Late-2028",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b76afab58bb5b3498f66c802fd3ddbbb5020671d42cf5390cfbcf67c476536b0",
        "datetime": 1785943200
      }
    ],
    "_fetched_at": 1785956402.2646303,
    "_updated_label": "2026-08-06 04:00"
  },
  "META": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "amc",
      "epsEstimate": 7.1215
    },
    "news": [
      {
        "headline": "Beyond Capex: Big Tech Quietly Locks In $2.7 Trillion in Long-Term Commitments",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=18e0ad7d6f841bffdad7efd2946282f8b5a757a86d30a42f7d131b550513d880",
        "datetime": 1785951060
      },
      {
        "headline": "41 Buy Ratings and No Sells: Why Wall Street Backs AMD",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7a53962de1b651612058a49baffe415aea7054a199d29e73b33455590185a09f",
        "datetime": 1785951020
      },
      {
        "headline": "Market Chatter: Alphabet, Meta Could Face Stricter Social Media Regulation After Senate Passes Kids Online Safety Bills",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2bfd0ff0c548c6c69d0437e874b5e89def5a75cbb5fd08e28baebd1de76a62da",
        "datetime": 1785947407
      },
      {
        "headline": "4 Things All Dividend Investors Need to Know About Building Passive Income Right Now",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5325ae51bd3081143a45529cd8fa36f01e0c4be360ee2987b38fdf2fcf1962d3",
        "datetime": 1785946800
      },
      {
        "headline": "Shopify Earnings Flip the Script on AI Fears",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cbbf7ea89be52cac79d537309e16b42d0eb00ba15359d20e1f690e14e98a2e04",
        "datetime": 1785945120
      }
    ],
    "_fetched_at": 1785956402.2646303,
    "_updated_label": "2026-08-06 04:00"
  },
  "TSLA": {
    "nextEarnings": {
      "date": "2026-10-20",
      "hour": "amc",
      "epsEstimate": 0.4492
    },
    "news": [
      {
        "headline": "Uber’s Ride-Sharing Business Is Booming. Why the Stock Market Couldn’t Care Less.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3023e9445bfd733e506041de8b2a1e92479d863f16905aa848eb392aa60826fb",
        "datetime": 1785950940
      },
      {
        "headline": "Michael Burry Sends Stark Warning on S&P 500 Crash",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=27931fe397dd7c39524c9e70136efb6e3a7a82720013e6051455ba3a6485778e",
        "datetime": 1785950371
      },
      {
        "headline": "Michael Burry Drops Shocking Take on AI Stocks",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a72b14c97599b51d638cfd1ec273f41edb7a04ff9466170a365ac28044f1d4c5",
        "datetime": 1785949072
      },
      {
        "headline": "Elon Musk Just Explained Why Memory Could Be the Next AI Winner.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d3afd950af557e17ecf39dfc558e3767c167b78fce9a199f1343851cbd7ff3ed",
        "datetime": 1785948786
      },
      {
        "headline": "4 Things All Dividend Investors Need to Know About Building Passive Income Right Now",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5325ae51bd3081143a45529cd8fa36f01e0c4be360ee2987b38fdf2fcf1962d3",
        "datetime": 1785946800
      }
    ],
    "_fetched_at": 1785956402.2646303,
    "_updated_label": "2026-08-06 04:00"
  },
  "MU": {
    "nextEarnings": {
      "date": "2026-09-21",
      "hour": "amc",
      "epsEstimate": 32.2476
    },
    "news": [
      {
        "headline": "Wall Street Isn't Worried About SpaceX Price Declines",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1625a6853d032cb8951b4fdab67de5fca475d43099fb377d770f91efada020f0",
        "datetime": 1785952262
      },
      {
        "headline": "Micron's Supply Crunch Is Turning Into a Pricing Story",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=719e3da3ef894d9628297db40d35de2a0734d702969cf04671c4fcb117c0b619",
        "datetime": 1785951906
      },
      {
        "headline": "Beyond Capex: Big Tech Quietly Locks In $2.7 Trillion in Long-Term Commitments",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=18e0ad7d6f841bffdad7efd2946282f8b5a757a86d30a42f7d131b550513d880",
        "datetime": 1785951060
      },
      {
        "headline": "Michael Burry Sends Stark Warning on S&P 500 Crash",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=27931fe397dd7c39524c9e70136efb6e3a7a82720013e6051455ba3a6485778e",
        "datetime": 1785950371
      },
      {
        "headline": "Micron (MU) Has More to Gain Than Nvidia (NVDA) Has to Lose From Samsung’s 2028 Warning",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=02e925c783ae9bb799bde06879d9047e5c6bb3ca72dcb5ab18d1c7b71da6ec5b",
        "datetime": 1785950057
      }
    ],
    "_fetched_at": 1785956402.2646303,
    "_updated_label": "2026-08-06 04:01"
  },
  "AMD": {
    "nextEarnings": {
      "date": "2026-11-02",
      "hour": "amc",
      "epsEstimate": 1.8517
    },
    "news": [
      {
        "headline": "Curious about the most active S&P500 stocks in today's session?",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=37870f8def4c147fe9117a6d7906f67f4b2141ea1f0506a5e29a7bcd6fa3663f",
        "datetime": 1785953102
      },
      {
        "headline": "Micron's Supply Crunch Is Turning Into a Pricing Story",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=719e3da3ef894d9628297db40d35de2a0734d702969cf04671c4fcb117c0b619",
        "datetime": 1785951906
      },
      {
        "headline": "41 Buy Ratings and No Sells: Why Wall Street Backs AMD",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7a53962de1b651612058a49baffe415aea7054a199d29e73b33455590185a09f",
        "datetime": 1785951020
      },
      {
        "headline": "Nvidia Stock Is the Only Magnificent 7 Name in the Green",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e8220bcaa71a2d1bccfc6f382b152d4219d5ebf991de2db94affdd5d619c7aa7",
        "datetime": 1785950922
      },
      {
        "headline": "AMD Stock Tanks After Earnings, But The Dip Isn’t Changing Wall Street’s Or Retail Investors’ Bullish View — Here’s Why",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a979636e48575ca238961b0f1e544dc2e6621506b04c2737c0570f6710ad2ba2",
        "datetime": 1785950429
      }
    ],
    "_fetched_at": 1785956402.2646303,
    "_updated_label": "2026-08-06 04:00"
  },
  "INTC": {
    "nextEarnings": {
      "date": "2026-10-21",
      "hour": "amc",
      "epsEstimate": 0.3936
    },
    "news": [
      {
        "headline": "Curious about the most active S&P500 stocks in today's session?",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=37870f8def4c147fe9117a6d7906f67f4b2141ea1f0506a5e29a7bcd6fa3663f",
        "datetime": 1785953102
      },
      {
        "headline": "Discover the most active stocks in Wednesday's session.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=54a15b0b7e8e410c17dd38284f5a02ac6d3bc09c6eb31d85c1ce2a7174b8f53f",
        "datetime": 1785952800
      },
      {
        "headline": "Nvidia Just Won a Major SpaceX AI Deal. Stock Jumps as AMD Sinks",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=942de0347c20ef7b7c90228449f973050a6e380adb50fec9c10c304eb60a7729",
        "datetime": 1785949879
      },
      {
        "headline": "Marvell Stock Amplifies The Market You Already Own",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ca75658089b5d2e0660cf9056b0fdbb903ba36ffb8e07b9c285fa426786bc086",
        "datetime": 1785946434
      },
      {
        "headline": "SpaceX, Nvidia, Micron, AMD, Uber, CVS, Lilly, and More Stocks That Explain Today’s Market",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=66feb67d01e4d70e0094ed3a397369ee81fb7e771b1a676824a3bc9007bf3596",
        "datetime": 1785945720
      }
    ],
    "_fetched_at": 1785956402.2646303,
    "_updated_label": "2026-08-06 04:01"
  },
  "AMAT": {
    "nextEarnings": {
      "date": "2026-08-13",
      "hour": "amc",
      "epsEstimate": 3.462
    },
    "news": [
      {
        "headline": "Michael Burry Sends Stark Warning on S&P 500 Crash",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=27931fe397dd7c39524c9e70136efb6e3a7a82720013e6051455ba3a6485778e",
        "datetime": 1785950371
      },
      {
        "headline": "Applied Materials (AMAT) Stock Faces Fresh Scrutiny After Michael Burry Short Bet",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cb5f9496ae3201970cef5fdaf89a654b8bd5643aadf562b257d6f611c54a58c5",
        "datetime": 1785949942
      },
      {
        "headline": "Michael Burry Drops Shocking Take on AI Stocks",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a72b14c97599b51d638cfd1ec273f41edb7a04ff9466170a365ac28044f1d4c5",
        "datetime": 1785949072
      },
      {
        "headline": "APPS Tops Q1 Earnings & Revenue Estimates, Raises Fiscal 2027 Guidance",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3e0d6a8617764f112a2e0dc378750d8c4472b700b011b8b4b4a65db2077ce8eb",
        "datetime": 1785943680
      },
      {
        "headline": "Paylocity Q4 Earnings Beat Estimates, Revenues Increase Y/Y",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5087b92c044a390d9e014dc9b04961621ea54c5f6c06de4eb66f342d425b88f9",
        "datetime": 1785940380
      }
    ],
    "_fetched_at": 1785956402.2646303,
    "_updated_label": "2026-08-06 04:01"
  },
  "QQQ": {
    "nextEarnings": null,
    "news": [
      {
        "headline": "Gold Jumps 4%, Dow Jones Smashes Record Highs: Stock Market Today",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=1db0cc6302bebe93b61e5eb9d2a4357679405616901a47c4a140ddf7ad352f6e",
        "datetime": 1785939260
      },
      {
        "headline": "SpaceX Chooses Nvidia; Short Squeeze Drives Market Rally, But Extreme Positive Sentiment Flashes Warning",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=3f7300c88330590328f9b1d2e113f9e80e78fc69d4dc99368ff614696d984e92",
        "datetime": 1785935846
      },
      {
        "headline": "Broad Rally Lifts Market Breadth to a Positive Bias",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=b98c065549930709ebaa54f9d148d82d77651af191c54b266a1f7fbf414fcad6",
        "datetime": 1785933950
      },
      {
        "headline": "U.S. Service Sector Remains Robust, But Hiring Weakness Persists",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=09515b08379d7d2855e8bd3d7bcf9df91a8afab81d56405284d97545cb8cf87c",
        "datetime": 1785933900
      },
      {
        "headline": "SpaceX Lockup Expiry Could Send a Gentle Jolt Through QQQ, Nasdaq ETFs",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=6c8aee9270c3ac43400696ed7cf7c4a19aa911bde381e46f1adddf5a89b4f1ab",
        "datetime": 1785933091
      }
    ],
    "_fetched_at": 1785956402.2646303,
    "_updated_label": "2026-08-06 04:00"
  },
  "SPY": {
    "nextEarnings": null,
    "news": [
      {
        "headline": "SpaceX Chooses Nvidia; Short Squeeze Drives Market Rally, But Extreme Positive Sentiment Flashes Warning",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=3f7300c88330590328f9b1d2e113f9e80e78fc69d4dc99368ff614696d984e92",
        "datetime": 1785935846
      },
      {
        "headline": "Iran's Deputy Foreign Minister Says No Talks With U.S. Have Been Held In Recent Days",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=bebe438eec8b2cb1da2d58d99c5e12fb83d7637225c3c6209a347649cc2385cf",
        "datetime": 1785935563
      },
      {
        "headline": "Exchange-Traded Funds Higher, Equity Futures Mixed Pre-Bell Amid Corporate Earnings, Hormuz Reopening Hopes",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=93d55f11d053620ba39190ef317ca6473731a387d5958ee903b04dfd9bde0b2b",
        "datetime": 1785935415
      },
      {
        "headline": "Iran's Deputy Foreign Minister Says Potential Transit Route Negotiated By Iran And Oman Could Be Viable For 2 To 4 Months; Says U.S. Returning To Its Commitments In Islamabad MOU Is A Condition, But N",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=5e1dd84fe059deb2f5eadb4960b338d27725453f493c9c486591234ff827c06f",
        "datetime": 1785934950
      },
      {
        "headline": "Broad Rally Lifts Market Breadth to a Positive Bias",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=b98c065549930709ebaa54f9d148d82d77651af191c54b266a1f7fbf414fcad6",
        "datetime": 1785933950
      }
    ],
    "_fetched_at": 1785956402.2646303,
    "_updated_label": "2026-08-06 04:00"
  },
  "ORCL": {
    "nextEarnings": {
      "date": "2026-09-07",
      "hour": "",
      "epsEstimate": 1.7745
    },
    "news": [
      {
        "headline": "Alphabet, Microsoft, Amazon, and Oracle Just Gained $1.9 Trillion in 3 Days. Here's Why Microsoft's Run Isn't Over.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b09889748753a97add143df5acfc29ccde7846cd8d96ba08d36cb4827cdddd4c",
        "datetime": 1785951600
      },
      {
        "headline": "Beyond Capex: Big Tech Quietly Locks In $2.7 Trillion in Long-Term Commitments",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=18e0ad7d6f841bffdad7efd2946282f8b5a757a86d30a42f7d131b550513d880",
        "datetime": 1785951060
      },
      {
        "headline": "Larry Ellison Just Collected a $579 Million Dividend Check. Here’s What $100,000 of Oracle Stock Would Pay You.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cff6115e72de3540ff11ad1b68049c00c2152caa85519af84bad4ed6a26345a6",
        "datetime": 1785947606
      },
      {
        "headline": "[Latest] Global Generative AI In Clinical Trials Market Size/Share Worth USD 1.86 Billion by 2035 at a 9.63% CAGR: Healthcare Foresights (Analysis, Outlook, Leaders, Report, Trends, Forecast, Segmenta",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1bf8369a5f305644cb83bea5e7323af8189ba9cc51e75b6a39a9a5bf07ce4472",
        "datetime": 1785947400
      },
      {
        "headline": "SpaceX Has Already Lost AI Race",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f13f7f706d99b4bbedf91e6f38ce570be4f8ee36c79f0a4f59d711eeeee2b8bc",
        "datetime": 1785941634
      }
    ],
    "_fetched_at": 1785956402.2646303,
    "_updated_label": "2026-08-06 04:00"
  },
  "CRM": {
    "nextEarnings": {
      "date": "2026-08-26",
      "hour": "amc",
      "epsEstimate": 3.3057
    },
    "news": [
      {
        "headline": "Dan Ives Says Software Stocks Just Saw Their Most Disconnected Sell-Off Since the Late 1990s. Here's Why He's Still Bullish.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=81b4e8ae1920c29ba5a1be2495bd3f17f260bb8f23cf3e06bc91690534c33e7d",
        "datetime": 1785948600
      },
      {
        "headline": "Uncover the latest developments among dow jones stocks in today's session.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=c3f017020e693632ac5d4d9c9d82b142c56fb9d2d174d424bd80f10b75f07988",
        "datetime": 1785948004
      },
      {
        "headline": "BillingPlatform Expands Executive Team with Three Industry Veterans to Accelerate AI-Native Platform Strategy and Scale its Market Advantage",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ffd4a685612d4bb41098c2eb8f137971798de1de4ef7bd60d74e666f3fef1afc",
        "datetime": 1785934980
      },
      {
        "headline": "Freshworks: The Market Is Underestimating This EX-First Story, And Q2 Only Reiterated That",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=7c375e442a27cb81d023f751bccccfc008e105cafa9da0db1ef5925cdb20a80f",
        "datetime": 1785933957
      },
      {
        "headline": "Nebius appoints Lindsey Irvine as Chief Marketing Officer",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=691dddba5309c59e1e9b7946743b841f07a14b8839ed9a1d0ff9e5fc4b488098",
        "datetime": 1785927600
      }
    ],
    "_fetched_at": 1785956402.2646303,
    "_updated_label": "2026-08-06 04:00"
  },
  "PLTR": {
    "nextEarnings": {
      "date": "2026-11-02",
      "hour": "",
      "epsEstimate": 0.3782
    },
    "news": [
      {
        "headline": "Curious about the most active S&P500 stocks in today's session?",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=37870f8def4c147fe9117a6d7906f67f4b2141ea1f0506a5e29a7bcd6fa3663f",
        "datetime": 1785953102
      },
      {
        "headline": "Michael Burry Sends Stark Warning on S&P 500 Crash",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=27931fe397dd7c39524c9e70136efb6e3a7a82720013e6051455ba3a6485778e",
        "datetime": 1785950371
      },
      {
        "headline": "Michael Burry Drops Shocking Take on AI Stocks",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a72b14c97599b51d638cfd1ec273f41edb7a04ff9466170a365ac28044f1d4c5",
        "datetime": 1785949072
      },
      {
        "headline": "Palantir’s blowout quarter creates dangerous new question",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0f37c111b3f062f2d8823023375d96f007d795af45064d36fb534bf806004251",
        "datetime": 1785946620
      },
      {
        "headline": "Palantir Technologies (PLTR) Lifted Guidance Following A 93% Revenue Jump, Is It Still Undervalued?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=149a0950bdc6c2452a072a1a5413206a1d6501a0214cf321047175b2bb4660f1",
        "datetime": 1785946298
      }
    ],
    "_fetched_at": 1785956402.2646303,
    "_updated_label": "2026-08-06 04:00"
  },
  "QCOM": {
    "nextEarnings": {
      "date": "2026-11-03",
      "hour": "amc",
      "epsEstimate": 2.2987
    },
    "news": [
      {
        "headline": "QRVO Rises 11.6% in the Past Month: Can the Rally Continue?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6b1146640a2ffcda85c6ae28800b0ab5d180eec643c00fc175074b94af7bdf58",
        "datetime": 1785948240
      },
      {
        "headline": "Marvell Stock Amplifies The Market You Already Own",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ca75658089b5d2e0660cf9056b0fdbb903ba36ffb8e07b9c285fa426786bc086",
        "datetime": 1785946434
      },
      {
        "headline": "Intel Diversifies The Direction Of Your Returns, Not Their Size",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=17131a09d2c2d5d5765a9e7e67fc87cddb8d0476e12ab2d37ead21b485f0d6ac",
        "datetime": 1785937822
      },
      {
        "headline": "This Week In AI Chips - AI Efficiency Boost Through Multiverse And Qualcomm Collaboration",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5f51a827d7411a8166399d2dc62c9d1a2559fbf1670e9aa4608f541a346e98e8",
        "datetime": 1785929876
      },
      {
        "headline": "Qualcomm Could Be One AI Deal Away From A Major Re-Rating",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=84daa929718cdc9402d777fa025b69b6063afcb9f78591ee979e77c3d86e0a29",
        "datetime": 1785926043
      }
    ],
    "_fetched_at": 1785956402.2646303,
    "_updated_label": "2026-08-06 04:00"
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
    "_fetched_at": 1785956402.2646303,
    "_updated_label": "2026-08-06 04:00"
  },
  "MRVL": {
    "nextEarnings": {
      "date": "2026-08-27",
      "hour": "",
      "epsEstimate": 0.939
    },
    "news": [
      {
        "headline": "Marvell Stock Amplifies The Market You Already Own",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ca75658089b5d2e0660cf9056b0fdbb903ba36ffb8e07b9c285fa426786bc086",
        "datetime": 1785946434
      },
      {
        "headline": "Can MRVL's Communications Recovery Drive Broad-Based Growth?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0abc8eac0d0dff8aac9b106766bc90e52a1b1ec38598c284b2257d8fe9414806",
        "datetime": 1785945120
      },
      {
        "headline": "The Ultimate Bull Case for NVIDIA Is Here: Their Powerful B200 Systems Are Sold Out",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=49b49177eb351dc1c9db003e2f219634922510e6aaa63f4ee72ebb3b3c53173e",
        "datetime": 1785942006
      },
      {
        "headline": "10 Information Technology Stocks With Whale Alerts In Today’s Session",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=8d5187674a093923a700cb053cf24ddecaa79a4a30a0891ad53fcf56dcb513f9",
        "datetime": 1785936914
      },
      {
        "headline": "Broadcom, Marvell And Nvidia Could Feel the Impact of US Ban on Chinese AI Components",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=3a9dc6f577168b1b9381b713efd5b273e06251e86e486591631fd363a5b1bc3e",
        "datetime": 1785935696
      }
    ],
    "_fetched_at": 1785956402.2646303,
    "_updated_label": "2026-08-06 04:00"
  },
  "ASML": {
    "nextEarnings": {
      "date": "2026-10-14",
      "hour": "bmo",
      "epsEstimate": 10.1558
    },
    "news": [
      {
        "headline": "The Ultimate Bull Case for NVIDIA Is Here: Their Powerful B200 Systems Are Sold Out",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=49b49177eb351dc1c9db003e2f219634922510e6aaa63f4ee72ebb3b3c53173e",
        "datetime": 1785942006
      },
      {
        "headline": "Could ASML Holding N.V. (ASML) Be the Most Durable Winner From the AI Chip Boom?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=78222b3e1dc25da5a437ed1dbdcc6b837db3319b3906437e5bb1a99b57da758f",
        "datetime": 1785936796
      },
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
      }
    ],
    "_fetched_at": 1785956402.2646303,
    "_updated_label": "2026-08-06 04:01"
  },
  "LRCX": {
    "nextEarnings": {
      "date": "2026-10-20",
      "hour": "",
      "epsEstimate": 2.1446
    },
    "news": [
      {
        "headline": "Lam Research Soars After Earnings. Are they the Top Semiconductor Equipment Buy?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7661da6f77252b3912a82230ceaa3558d1ad64adff0fbb574d8c6760ab322913",
        "datetime": 1785945023
      },
      {
        "headline": "Zacks.com featured highlights Celestica, Zurn Elkay, Lam, BE Semiconductor and Johnson Controls",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3e08e3233681a4db176d65f3ee0788591bc3bc51fcff1c1a222faf2211c0ca0b",
        "datetime": 1785924900
      },
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
      }
    ],
    "_fetched_at": 1785956402.2646303,
    "_updated_label": "2026-08-06 04:01"
  },
  "KLAC": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "",
      "epsEstimate": 1.1971
    },
    "news": [
      {
        "headline": "Brown Advisory Flexible Equity Strategy Q2 2026 Portfolio Activity",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=73b55282df1e30c21b0484c36bafd51d47b492ab49aa8791eecf2504d2e86788",
        "datetime": 1785932040
      },
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
      }
    ],
    "_fetched_at": 1785956402.2646303,
    "_updated_label": "2026-08-06 04:01"
  },
  "SNDK": {
    "nextEarnings": {
      "date": "2026-11-04",
      "hour": "",
      "epsEstimate": 41.473
    },
    "news": [
      {
        "headline": "Sandisk Just Had Its Worst Month Ever. Earnings Should Prove AI Demand Is Here to Stay.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=47edd45742cf462a5fe0c09972b0fb6e7f564036b5c3c343e3ace61a99ccfc02",
        "datetime": 1785950100
      },
      {
        "headline": "Sandisk stock steady ahead of AI highflier's earnings",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2fa875924fdf22429000ded6d0a3a289275ad8ab969adcaac21b424b1f840660",
        "datetime": 1785947823
      },
      {
        "headline": "Micron Slips 9% in a Month: Is This the Right Time to Buy MU Stock?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=51e723801dc110077b6d782a90a2496da346fdef73fcbf60e01821a80f4ea653",
        "datetime": 1785943380
      },
      {
        "headline": "Wall Street Extends Record-Setting Stock Rally",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=88c2cc7b58d096b59b146fb5f0698f755bc10bea76870ff957d8a00a50ec9992",
        "datetime": 1785939270
      },
      {
        "headline": "AMD Revenue Rockets 50%: 2 Undervalued Chip Stocks With Long-Term EPS Growth +100%",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=db01e972426e38a8c46aae5cd3b99ca378a6cb5f201963b48eaac54e8d856eeb",
        "datetime": 1785939141
      }
    ],
    "_fetched_at": 1785956402.2646303,
    "_updated_label": "2026-08-06 04:01"
  },
  "WDC": {
    "nextEarnings": {
      "date": "2026-10-28",
      "hour": "",
      "epsEstimate": 3.7282
    },
    "news": [
      {
        "headline": "Micron Slips 9% in a Month: Is This the Right Time to Buy MU Stock?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=51e723801dc110077b6d782a90a2496da346fdef73fcbf60e01821a80f4ea653",
        "datetime": 1785943380
      },
      {
        "headline": "Wall Street Extends Record-Setting Stock Rally",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=88c2cc7b58d096b59b146fb5f0698f755bc10bea76870ff957d8a00a50ec9992",
        "datetime": 1785939270
      },
      {
        "headline": "Dow Jones and S&P 500 set to notch new highs despite AMD and SpaceX falls",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3311c2f00176979b9f5c5138869991dc277499b8c45df4143e6b66c3ea940584",
        "datetime": 1785931800
      },
      {
        "headline": "Western Digital Earnings Are Imminent; These Most Accurate Analysts Revise Forecasts Ahead Of Earnings Call",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=ca4db60f7d2df1ebf68691f76b9f1bae9fe7ee4eb4e3c7428d63b2dcb56bb773",
        "datetime": 1785920344
      },
      {
        "headline": "Western Digital (WDC) Could Be 66% Overvalued On Earnings Week Optimism",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=246253cac9bc668bdbb7ff902d789478d2d258a76fcce351447845cbacbab0b6",
        "datetime": 1785906721
      }
    ],
    "_fetched_at": 1785956402.2646303,
    "_updated_label": "2026-08-06 04:01"
  }
};
