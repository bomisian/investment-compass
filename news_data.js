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
        "headline": "Micron’s AI Repricing Is Real — But the Market Still Isn’t Sure It Can Last",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2e1cd1d7736ab3952ef9e05f8167c8bfd15ce612907cd85ba5f283175b7977c9",
        "datetime": 1784979696
      },
      {
        "headline": "Supermicro Stock Just Jumped 20%. Why I'm Passing and Buying This AI Leader Instead.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7ec892b8e427f4ab7c8adc2eb299eadea8ca76380cca718fab86bcb3239b0474",
        "datetime": 1784979300
      },
      {
        "headline": "Prediction: Kevin Warsh and the Federal Open Market Committee (FOMC) Will Not Raise Interest Rates in 2026",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4115c6ebebab6f29a6cf4a58b37d6476a0911d8d451a81bc9a8475ea08199801",
        "datetime": 1784978700
      },
      {
        "headline": "Prediction: This Unstoppable ETF Will Crush the S&P 500 in 2026 and Beyond",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ebf455ef9cae2d85dcd071c57a2a59d1e3f5960709630805b13a22a611955a03",
        "datetime": 1784978100
      },
      {
        "headline": "Prediction: This Dividend ETF Will Double by 2034 -- and Pay You Passive Income While You Wait",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5d6120a935b0d6507c97a07ab85275b4fabb368bc01730823737049282bbd97d",
        "datetime": 1784977500
      }
    ],
    "_fetched_at": 1784987781.8785498,
    "_updated_label": "2026-07-25 22:56"
  },
  "AAPL": {
    "nextEarnings": {
      "date": "2026-07-30",
      "hour": "amc",
      "epsEstimate": 1.9299
    },
    "news": [
      {
        "headline": "Apple Earnings Preview: Q3 2026",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=d0e7a9a7fbb139b2f43234f083f5d2c56626601a5027c67713379c9631b8b491",
        "datetime": 1784970600
      },
      {
        "headline": "Alphabet: Won't Be This Cheap For Long",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=6d96bbc8dddb829c9e64397d2c1ba856a743ffce1da45a90e8bba097b884544a",
        "datetime": 1784970000
      },
      {
        "headline": "1 Popular Cryptocurrency to Buy Before It Soars 1,125%, According to Cathie Wood's Ark Invest",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=141fc7290b202cf1b3a3660c6c41bb3f04b04b13a932c952b7d0297609974126",
        "datetime": 1784969280
      },
      {
        "headline": "Western Digital Corporation (NASDAQ:WDC) Got Lucky While Micron’s The Real Deal, Says Jim Cramer",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c44c1710cee4cdcca909985f36f5eb8c2cf2bd6e3eb49b5a42c75c71204a5c7d",
        "datetime": 1784966529
      },
      {
        "headline": "ADX: Your Grandfather's Fund Is Still Beating The Market",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=21360e8e5412a593474cbaa187e2a10d1941af25522bede6d4198ed70bd4ae3a",
        "datetime": 1784966400
      }
    ],
    "_fetched_at": 1784987781.8785498,
    "_updated_label": "2026-07-25 22:56"
  },
  "GOOGL": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "amc",
      "epsEstimate": 3.0933
    },
    "news": [
      {
        "headline": "Alphabet: No FCF Pain, No Compute/Advertising Gain; SpaceX Gains Create Noise",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=3cad9c33b8605b7008b275456cba476e8ffd38ce182994b4b591379081df60d7",
        "datetime": 1784971800
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
        "headline": "1 Popular Cryptocurrency to Buy Before It Soars 1,125%, According to Cathie Wood's Ark Invest",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=141fc7290b202cf1b3a3660c6c41bb3f04b04b13a932c952b7d0297609974126",
        "datetime": 1784969280
      },
      {
        "headline": "Alphabet's Projected $205 Billion Capex Can Lift These 3 AI Stocks",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3b70d4abcb8dd78dc375a5b1992c66266825be7e517123dc6339d4dd24d9beb2",
        "datetime": 1784966580
      }
    ],
    "_fetched_at": 1784987781.8785498,
    "_updated_label": "2026-07-25 22:56"
  },
  "MSFT": {
    "nextEarnings": {
      "date": "2026-07-29",
      "hour": "amc",
      "epsEstimate": 4.3277
    },
    "news": [
      {
        "headline": "GE Vernova (GEV): $176 Billion Backlog and AI Power Demand Outweigh Short-Term EPS Miss",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c852fcdece7577193329f64c26a0ac68d0342b1da9a9215ca7197c89e8ae443b",
        "datetime": 1784962504
      },
      {
        "headline": "Nebius Is Turning Into The Open Source Anthropic",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=7acd2455ad175c768208f115a9173bac981a51a672482d8b7b4ed780c4e1b0ef",
        "datetime": 1784951432
      },
      {
        "headline": "Meta quits clean energy pledge amid gas-powered data center push",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fa989f634fe71fbc23c46424e71ef714e046ce91a61e82aedcce8a689a48129b",
        "datetime": 1784938899
      },
      {
        "headline": "Nvidia, Microsoft, Palantir Lead Big Tech Revolt Against AI Restrictions",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=261321756561b0619b745bf3c1138c6267cee3f74f7a63935a6c6b88747559c3",
        "datetime": 1784937595
      },
      {
        "headline": "Review & Preview: An Earnings Week to Forget",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=77fa1847bc1765e58b2b1bed700a4283cb8b56ae345ca0f5777c2aaf5f657907",
        "datetime": 1784937300
      }
    ],
    "_fetched_at": 1784987781.8785498,
    "_updated_label": "2026-07-25 22:56"
  },
  "AMZN": {
    "nextEarnings": {
      "date": "2026-07-30",
      "hour": "amc",
      "epsEstimate": 1.8556
    },
    "news": [
      {
        "headline": "Should You Forget SpaceX, Starlink, and Small Satellites? USAF Orders 2 Big Billion-Dollar Satellites From Boeing.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c2f3e010ecb3d15c8e021f88156393c45696cf7a24946023c4685a01eda1487e",
        "datetime": 1784971500
      },
      {
        "headline": "Amazon Earnings Preview: Q2 2026",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=eb5c30ed736e4d38b09beca4b58ed05935d5d21e43215dfd7aab024332d47450",
        "datetime": 1784967000
      },
      {
        "headline": "Is Now a Good Time to Buy Amazon Stock?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=756789712e92bdad2b4a68b6dce790754b743c92e7c42a43deebfa8dde3fd21e",
        "datetime": 1784965200
      },
      {
        "headline": "GE Vernova (GEV): $176 Billion Backlog and AI Power Demand Outweigh Short-Term EPS Miss",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c852fcdece7577193329f64c26a0ac68d0342b1da9a9215ca7197c89e8ae443b",
        "datetime": 1784962504
      },
      {
        "headline": "Waymo vs. human drivers: Experts reveal which is safer",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=32beec2a8664e90632cae245adc89043ebec3927c12801f07bf03645dc1a6eb8",
        "datetime": 1784948820
      }
    ],
    "_fetched_at": 1784987781.8785498,
    "_updated_label": "2026-07-25 22:56"
  },
  "TSM": {
    "nextEarnings": {
      "date": "2026-10-14",
      "hour": "amc",
      "epsEstimate": 26.4094
    },
    "news": [
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
      },
      {
        "headline": "Bloom Energy: AI's Power Crunch Creates Rare Buying Opportunity",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=cb262ea41cd87b820c248ebd30e98185d10de4abd5b94a9e40a1514a591b9732",
        "datetime": 1784888095
      }
    ],
    "_fetched_at": 1784987781.8785498,
    "_updated_label": "2026-07-25 22:56"
  },
  "AVGO": {
    "nextEarnings": {
      "date": "2026-09-02",
      "hour": "amc",
      "epsEstimate": 3.3012
    },
    "news": [
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
      },
      {
        "headline": "Samsung Wins $200 Billion Order to Supply Chips to Broadcom",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=28b969cda55fcc44d54e2e61c0dba8e35a0577f10d200b41ef436886f897fe01",
        "datetime": 1784961012
      },
      {
        "headline": "Texas Instruments vs. Qualcomm: One Pays Out 94% of Earnings. The Better Dividend Chip Stock Is Clear.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2c9e386ecfa57bddc27bcd28cdd33da64128b80aee8e4c4256edd4369189162c",
        "datetime": 1784934002
      }
    ],
    "_fetched_at": 1784987781.8785498,
    "_updated_label": "2026-07-25 22:56"
  },
  "META": {
    "nextEarnings": {
      "date": "2026-07-29",
      "hour": "amc",
      "epsEstimate": 7.3817
    },
    "news": [
      {
        "headline": "What Moved Markets This Week",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=30c853daab5af443ab8a0c8862a8b56eabb48569926bf56471b440d71080bbab",
        "datetime": 1784970358
      },
      {
        "headline": "Jim Cramer Discsusses Meta Platforms (NASDAQ:META)’s “Brilliant Team of People” & Their Big Worry",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d55833b6effe9ccfb207797b087599f68c364da8fd0c303dff0f457a4ef245fe",
        "datetime": 1784966198
      },
      {
        "headline": "Meta quits clean energy pledge amid gas-powered data center push",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fa989f634fe71fbc23c46424e71ef714e046ce91a61e82aedcce8a689a48129b",
        "datetime": 1784938899
      },
      {
        "headline": "Nvidia, Microsoft, Palantir Lead Big Tech Revolt Against AI Restrictions",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=261321756561b0619b745bf3c1138c6267cee3f74f7a63935a6c6b88747559c3",
        "datetime": 1784937595
      },
      {
        "headline": "Good News For Meta Stock Fans",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=61b0c90c4bbaa03c389a65cce253416f7d70d1b7f1c01ebcd1a5a07a1ef5f7b3",
        "datetime": 1784937583
      }
    ],
    "_fetched_at": 1784987781.8785498,
    "_updated_label": "2026-07-25 22:56"
  },
  "TSLA": {
    "nextEarnings": {
      "date": "2026-10-20",
      "hour": "amc",
      "epsEstimate": 0.5111
    },
    "news": [
      {
        "headline": "What Moved Markets This Week",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=30c853daab5af443ab8a0c8862a8b56eabb48569926bf56471b440d71080bbab",
        "datetime": 1784970358
      },
      {
        "headline": "GM displays Q2 growth in key areas Tesla would be jealous of",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4acee91038e1dc66567acae8507fe94aea0baf9b5dd7b6ea2e38921b5659df41",
        "datetime": 1784970180
      },
      {
        "headline": "Tesla: Strip Out SpaceX And The Tax Benefit, And You're Left With $77 Million",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=a23d6313beeeb838f29a12954f395301d27c8dd374e0b0530231aa8b8f2fc296",
        "datetime": 1784968873
      },
      {
        "headline": "SpaceX may have missed its window to buy Tesla",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=601377356e7936a14dcdcf7fb432efaa6e23f48efc510a3732289a85d88479cb",
        "datetime": 1784966400
      },
      {
        "headline": "Why Economist Mohamed El-Erian Monitors South Korea, U.K. Bonds, and the Yen",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fae09541413c094153d78c2dc0dd6f9dc40509db16cb128d5274e798adfafbe2",
        "datetime": 1784959200
      }
    ],
    "_fetched_at": 1784987781.8785498,
    "_updated_label": "2026-07-25 22:56"
  },
  "MU": {
    "nextEarnings": {
      "date": "2026-09-21",
      "hour": "amc",
      "epsEstimate": 32.2476
    },
    "news": [
      {
        "headline": "Micron’s AI Repricing Is Real — But the Market Still Isn’t Sure It Can Last",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2e1cd1d7736ab3952ef9e05f8167c8bfd15ce612907cd85ba5f283175b7977c9",
        "datetime": 1784979696
      },
      {
        "headline": "Western Digital Corporation (NASDAQ:WDC) Got Lucky While Micron’s The Real Deal, Says Jim Cramer",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c44c1710cee4cdcca909985f36f5eb8c2cf2bd6e3eb49b5a42c75c71204a5c7d",
        "datetime": 1784966529
      },
      {
        "headline": "Better Artificial Intelligence (AI) Buy: Micron Technology vs. Sandisk",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7d96989a11b59879c427bd37cd2a3722aaffc88bb5b3518b16b25ea9cc678d04",
        "datetime": 1784953200
      },
      {
        "headline": "Trump faces Apple-Micron clash over Chinese memory chips - WSJ",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=58381a51f6c7c9e41d60d93ca8ccfa24ad6727cee78018725bb5505450cea38b",
        "datetime": 1784948940
      },
      {
        "headline": "Michael Burry Doubles Down On MU, NVDA Shorts While Holding TSLA, PLTR Bets — Here’s What He’s Buying",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4b00b7ad3d9016316fe87c8c47616ebef4c5a88d550b7fd046d17388c082263f",
        "datetime": 1784933816
      }
    ],
    "_fetched_at": 1784987781.8785498,
    "_updated_label": "2026-07-25 22:56"
  },
  "AMD": {
    "nextEarnings": {
      "date": "2026-08-04",
      "hour": "amc",
      "epsEstimate": 1.6273
    },
    "news": [
      {
        "headline": "Is Riot Platforms (RIOT) Too Pricey For Its AI Data Center Push?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=728d2fa1bafe5808be8bf5c1ebaa5c9f7225d322e6c9499c180ee7beedf56982",
        "datetime": 1784941868
      },
      {
        "headline": "Texas Instruments vs. Qualcomm: One Pays Out 94% of Earnings. The Better Dividend Chip Stock Is Clear.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2c9e386ecfa57bddc27bcd28cdd33da64128b80aee8e4c4256edd4369189162c",
        "datetime": 1784934002
      },
      {
        "headline": "Stock Market Today, July 24: Intel Reverses Gains on Foundry and AI Spending Concerns",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9c74e2107dc40d86f2244222818bf07a996672de6caa99aecd496f8985f11d53",
        "datetime": 1784931171
      },
      {
        "headline": "MRVL Has Momentum. The Question Is The Price",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6120d5ab14b1aa2b05ea68602aa178e15a0bd22d9e860b5b004081ce93b30b53",
        "datetime": 1784927684
      },
      {
        "headline": "Intel Beat Earnings by $1.7 Billion and Fell 11% as Cramer Turned Bullish",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f17974741a96a51b75669930326b0b600e8ca0817afcac4c5521f4cee1c1ddca",
        "datetime": 1784925601
      }
    ],
    "_fetched_at": 1784987781.8785498,
    "_updated_label": "2026-07-25 22:56"
  },
  "INTC": {
    "nextEarnings": {
      "date": "2026-10-21",
      "hour": "amc",
      "epsEstimate": 0.2659
    },
    "news": [
      {
        "headline": "Can ASML Holding (NasdaqGS:ASML) Stay Reasonably Priced After Its 150% Run?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8b2ce21e77781fee267ef0cbf819e6c0a216abb51a5abbb707c8682e7d2978cb",
        "datetime": 1784977763
      },
      {
        "headline": "What Moved Markets This Week",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=30c853daab5af443ab8a0c8862a8b56eabb48569926bf56471b440d71080bbab",
        "datetime": 1784970358
      },
      {
        "headline": "Review & Preview: An Earnings Week to Forget",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=77fa1847bc1765e58b2b1bed700a4283cb8b56ae345ca0f5777c2aaf5f657907",
        "datetime": 1784937300
      },
      {
        "headline": "S&P 500, Dow, Nasdaq End Second Week Lower Over Elevated Oil Prices, Chipmaker Rout — PSKY, UBER, QCOM, VZ, INTC In Focus",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9d39ef88fff0779779505f0099fb88676c495a3940dddf2d545be623974b8100",
        "datetime": 1784933688
      },
      {
        "headline": "Nasdaq lags on angst over AI spending ahead of earnings reports",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4e1e23cf08396f986f5b9a6bb8cb7b76eaa05c1892763d61ed11183134d2e9c9",
        "datetime": 1784931586
      }
    ],
    "_fetched_at": 1784987781.8785498,
    "_updated_label": "2026-07-25 22:56"
  },
  "WMT": {
    "nextEarnings": {
      "date": "2026-08-20",
      "hour": "",
      "epsEstimate": 0.7503
    },
    "news": [
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
      },
      {
        "headline": "Explore the top gainers and losers within the dow jones index in today's session.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=4997b4df2c1439dc08aeccb21803747beb7d511fe544df611dff9e6b9aa18a2c",
        "datetime": 1784911204
      },
      {
        "headline": "New CMO Aims To Make Gimme Seaweed A Lifestyle Brand",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d722efc17a0110a479a02bc836f237a582b36572349426117d0042af3c37e87c",
        "datetime": 1784907504
      }
    ],
    "_fetched_at": 1784987781.8785498,
    "_updated_label": "2026-07-25 22:57"
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
    "_fetched_at": 1784987781.8785498,
    "_updated_label": "2026-07-25 22:57"
  },
  "QQQ": {
    "nextEarnings": null,
    "news": [
      {
        "headline": "Stop Counting Tariffs, Start Counting Hikes",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=bdde6f9856e3a787b2387006fdcf82c4fa6e16d98bbb822f7d46e06eae2022ba",
        "datetime": 1784968200
      },
      {
        "headline": "Weekly Indicators: Oil, Gas, And Interest Rates All Rose This Week",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=53df2abc93852f8d24559a91c3e2c90e18f08a5b6e2f6b94fe8358a80308c197",
        "datetime": 1784966400
      },
      {
        "headline": "Weekly Commentary: Bond Yield Breakout",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=3f1de1e9014cd612e00e87816586b08a8e293bbcdef5ecb869af91b3565dff5f",
        "datetime": 1784955009
      },
      {
        "headline": "Just When You Thought Inflation Was Done",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=4a13ed32b2c6dab09fb6220170f9ea04029597fcd14d038cfd3692347b19a565",
        "datetime": 1784951700
      },
      {
        "headline": "Chicago Fed National Activity Index: Economic Growth Increased In June",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=25f1c9f0e55d135d333802cc52f1dc1f238cb19126620bc6202922a223041df5",
        "datetime": 1784927400
      }
    ],
    "_fetched_at": 1784987781.8785498,
    "_updated_label": "2026-07-25 22:57"
  },
  "SPY": {
    "nextEarnings": null,
    "news": [
      {
        "headline": "Stop Counting Tariffs, Start Counting Hikes",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=bdde6f9856e3a787b2387006fdcf82c4fa6e16d98bbb822f7d46e06eae2022ba",
        "datetime": 1784968200
      },
      {
        "headline": "ADX: Your Grandfather's Fund Is Still Beating The Market",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=21360e8e5412a593474cbaa187e2a10d1941af25522bede6d4198ed70bd4ae3a",
        "datetime": 1784966400
      },
      {
        "headline": "Weekly Indicators: Oil, Gas, And Interest Rates All Rose This Week",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=53df2abc93852f8d24559a91c3e2c90e18f08a5b6e2f6b94fe8358a80308c197",
        "datetime": 1784966400
      },
      {
        "headline": "Weekly Commentary: Bond Yield Breakout",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=3f1de1e9014cd612e00e87816586b08a8e293bbcdef5ecb869af91b3565dff5f",
        "datetime": 1784955009
      },
      {
        "headline": "Just When You Thought Inflation Was Done",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=4a13ed32b2c6dab09fb6220170f9ea04029597fcd14d038cfd3692347b19a565",
        "datetime": 1784951700
      }
    ],
    "_fetched_at": 1784987781.8785498,
    "_updated_label": "2026-07-25 22:57"
  }
};
